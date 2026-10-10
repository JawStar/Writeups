#!/usr/bin/env python3
"""
Run this anytime you manually add, edit, or move a writeup .md file
(e.g. writing a brand new HTB box writeup directly in writeups/hackthebox/).

Usage: python3 rebuild_manifest.py
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from convert_medium_export import build_manifest

if __name__ == "__main__":
    build_manifest()
