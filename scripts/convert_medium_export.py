#!/usr/bin/env python3
"""
convert_medium_export.py

Converts a Medium "Download your information" export into clean,
categorized Markdown writeups for a GitHub-hosted writeup vault.

USAGE:
    1. On Medium: Settings -> Security and apps -> Download your information -> Export
       (works even on a suspended/limited account since you're still logged in)
    2. You'll get an email with a link to a .zip like "medium-export-XXXXXXXX.zip"
    3. Run:  python3 convert_medium_export.py /path/to/medium-export.zip

    Output goes into ../writeups/<platform>/<slug>.md
    Also regenerates ../manifest.json (used by the site to render the index/search).
"""

import sys
import os
import re
import json
import zipfile
import shutil
import tempfile
from pathlib import Path
from datetime import datetime

try:
    from bs4 import BeautifulSoup
except ImportError:
    print("Missing dependency. Run: pip install beautifulsoup4 markdownify --break-system-packages")
    sys.exit(1)

try:
    from markdownify import markdownify as html_to_md
except ImportError:
    print("Missing dependency. Run: pip install beautifulsoup4 markdownify --break-system-packages")
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
WRITEUPS_DIR = ROOT / "writeups"
MANIFEST_PATH = ROOT / "manifest.json"

PLATFORM_RULES = [
    ("tryhackme", ["tryhackme", "thm ", "thm:", "[thm]", "try hack me"]),
    ("hackthebox", ["hackthebox", "hack the box", "htb ", "htb:", "[htb]"]),
    ("offsec", ["oscp", "offsec", "pwk", "proving grounds", "pg practice"]),
    ("hardware-ot-ics-scada", [
        "scada", "ics ", "ics:", "ot security", "plc", "modbus", "hmi",
        "hardware hacking", "firmware", "embedded", "iot ", "rtu", "fieldbus",
    ]),
    ("news", ["announcement", "update:", "news:", "release notes"]),
]


def guess_platform(title, body_text):
    hay = (title + " " + body_text[:500]).lower()
    for platform, keywords in PLATFORM_RULES:
        if any(k in hay for k in keywords):
            return platform
    return "other"


def slugify(text):
    text = text.strip().lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")[:80] or "untitled"


def extract_date_from_filename(fname):
    m = re.match(r"(\d{4}-\d{2}-\d{2})", fname)
    if m:
        return m.group(1)
    return None


def parse_post(html_path):
    with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    title_tag = soup.find("h1")
    title = title_tag.get_text(strip=True) if title_tag else html_path.stem

    # Medium exports wrap the real story body in <section data-field="body"> or <article>
    body = soup.find("section", attrs={"data-field": "body"})
    if not body:
        body = soup.find("article") or soup.body or soup

    # Drop the duplicate title h1 from the body if present
    first_h1 = body.find("h1")
    if first_h1:
        first_h1.decompose()

    body_html = str(body)
    body_md = html_to_md(body_html, heading_style="ATX").strip()
    body_text = body.get_text(" ", strip=True)

    date = extract_date_from_filename(html_path.name) or datetime.now().strftime("%Y-%m-%d")
    platform = guess_platform(title, body_text)

    return {
        "title": title,
        "date": date,
        "platform": platform,
        "body_md": body_md,
    }


def write_markdown(post, source_filename):
    platform_dir = WRITEUPS_DIR / post["platform"]
    platform_dir.mkdir(parents=True, exist_ok=True)

    slug = slugify(post["title"])
    out_path = platform_dir / f"{slug}.md"

    # avoid collisions
    counter = 2
    base_out_path = out_path
    while out_path.exists():
        out_path = platform_dir.with_name(platform_dir.name) / f"{slug}-{counter}.md"
        counter += 1

    frontmatter = (
        "---\n"
        f'title: "{post["title"].replace(chr(34), chr(39))}"\n'
        f'date: {post["date"]}\n'
        f'platform: {post["platform"]}\n'
        f'source_file: "{source_filename}"\n'
        "---\n\n"
    )

    out_path.write_text(frontmatter + post["body_md"] + "\n", encoding="utf-8")
    return out_path


def build_manifest():
    entries = []
    for platform_dir in sorted(WRITEUPS_DIR.iterdir()):
        if not platform_dir.is_dir():
            continue
        for md_file in sorted(platform_dir.glob("*.md")):
            text = md_file.read_text(encoding="utf-8")
            fm_match = re.match(r"^---\n(.*?)\n---\n\n(.*)$", text, re.DOTALL)
            if not fm_match:
                continue
            fm_raw, body = fm_match.groups()
            fm = {}
            for line in fm_raw.splitlines():
                if ":" in line:
                    k, v = line.split(":", 1)
                    fm[k.strip()] = v.strip().strip('"')
            entries.append({
                "title": fm.get("title", md_file.stem),
                "date": fm.get("date", ""),
                "platform": fm.get("platform", platform_dir.name),
                "path": str(md_file.relative_to(ROOT)),
                "excerpt": re.sub(r"\s+", " ", body)[:220],
            })
    entries.sort(key=lambda e: e["date"], reverse=True)
    MANIFEST_PATH.write_text(json.dumps(entries, indent=2), encoding="utf-8")
    print(f"Manifest written: {len(entries)} writeups -> {MANIFEST_PATH}")


def main():
    if len(sys.argv) != 2:
        print("Usage: python3 convert_medium_export.py /path/to/medium-export.zip")
        sys.exit(1)

    export_path = Path(sys.argv[1])
    if not export_path.exists():
        print(f"File not found: {export_path}")
        sys.exit(1)

    tmpdir = Path(tempfile.mkdtemp())
    try:
        if export_path.suffix == ".zip":
            with zipfile.ZipFile(export_path, "r") as z:
                z.extractall(tmpdir)
            search_root = tmpdir
        else:
            search_root = export_path  # already-extracted folder

        posts_dir = None
        for candidate in search_root.rglob("posts"):
            if candidate.is_dir():
                posts_dir = candidate
                break
        if not posts_dir:
            print("Could not find a 'posts' folder in the export. Check the zip structure.")
            sys.exit(1)

        html_files = sorted(posts_dir.glob("*.html"))
        print(f"Found {len(html_files)} posts.")

        count = 0
        for html_file in html_files:
            try:
                post = parse_post(html_file)
                out_path = write_markdown(post, html_file.name)
                print(f"  [{post['platform']}] {post['title'][:60]} -> {out_path.relative_to(ROOT)}")
                count += 1
            except Exception as e:
                print(f"  FAILED on {html_file.name}: {e}")

        print(f"\nConverted {count}/{len(html_files)} writeups.")
        build_manifest()

    finally:
        shutil.rmtree(tmpdir, ignore_errors=True)


if __name__ == "__main__":
    main()
