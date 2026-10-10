---
title: "Advent of Cyber 2024 { Day 4} Tryhackme Answers"
date: 2024-12-04
platform: tryhackme
source_file: "2024-12-04_Advent-of-Cyber-2024---Day-4--Tryhackme-Answers-569132d59fa0.html"
---

---

### Advent of Cyber 2024 { Day 4} Tryhackme Answers

#### Atomic Red Team Day 4: I’m all atomic inside!

#### The Story

![](https://cdn-images-1.medium.com/max/800/0*ENhRD8AV8oWBAVa-.png)

SOC-mas is approaching! And the town of Warewille started preparations for the grand event.

Glitch, a quiet, talented security SOC-mas engineer, had a hunch that these year’s celebrations would be different. With looming threats, he decided to revamp the town’s security defences. Glitch began to fortify the town’s security defences quietly and meticulously. He started by implementing a protective firewall, patching vulnerabilities, and accessing endpoints to patch for security vulnerabilities. As he worked tirelessly, he left “breadcrumbs,” small traces of his activity.

Unaware of Glitch’s good intentions, the SOC team spotted anomalies: Logs showing admin access, escalation of privileges, patched systems behaving differently, and security tools triggering alerts. The SOC team misinterpreted the system modifications as a sign of an insider threat or rogue attacker and decided to launch an investigation using the Atomic Red Team framework.

![](https://cdn-images-1.medium.com/max/800/0*sEKr8IcVB-erzTzo.gif)

### Learning Objectives

* Learn how to identify malicious techniques using the MITRE ATT&CK framework.
* Learn about how to use Atomic Red Team tests to conduct attack simulations.
* Understand how to create alerting and detection rules from the attack tests.

![](https://cdn-images-1.medium.com/max/800/0*zJCC9gnrAz2OM-Ld)

#### Answer the questions below :

**What was the flag found in the .txt file that is found in the same directory as the PhishingAttachment.xslm artefact?**

THM{GlitchTestingForSpearphishing}

**What ATT&CK technique ID would be our point of interest?**

T1059

**What ATT&CK subtechnique ID focuses on the Windows Command Shell?**

T1059.003

**What is the name of the Atomic Test to be simulated?**

Simulate BlackByte Ransomware Print Bombing

**What is the name of the file used in the test?**

Wareville\_Ransomware.txt

**What is the flag found from this Atomic Test?**

THM{R2xpdGNoIGlzIG5vdCB0aGUgZW5lbXk=}

### If you want to get the latest Try Hack Me writeups delivered , go ahead and follow me on Medium and also hit the notify via email.

### Hope you have enjoyed solving this room as much i did if you did you can add a clap to this article to let me know and if you loved this article you can click clap icon upto 30 times to let me know and that will make my day 🤗

### You can also follow me on medium to get more articles about CTFs and Cybersecurity in the near Future but don’t forget to hit that email notification icon right next to the follow me button

### Thank you ! [Jawstar](https://medium.com/u/c42b7c126e68)
