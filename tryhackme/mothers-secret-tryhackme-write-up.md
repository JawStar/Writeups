---
title: "Mother’s Secret Tryhackme Write up"
date: 2024-11-19
platform: tryhackme
source_file: "2024-11-19_Mother-s-Secret-Tryhackme-Write-up-516b72f67253.html"
---

---

### Mother’s Secret Tryhackme Write up

**Exploit flaws found in Mother’s code to reveal its secrets.**

![](https://cdn-images-1.medium.com/max/800/0*w2nGXbgJ9QyoTgqS.png)

### Task 1 : Ready for Take Off

Introduction

In this challenge, you will investigate the TryHackMe Cargo Star Ship (THMCSS) Nostromo, owned by the Weyland-TryHackMe Corps and its compromised computer system, MU-TH-UR 6000. Your mission is to uncover hidden secrets by exploiting vulnerabilities in the web application running on the Nostromo server. Get ready to put your code analysis and exploitation skills to the test!

Previous Experience

Before attempting this challenge, it would be beneficial to have completed the [SAST](https://tryhackme.com/room/sast) and [DAST](https://tryhackme.com/room/dastzap) rooms that are part of the [DevSecOps](https://tryhackme.com/r/path-action/devsecops/join) path, or have experience in analysing code and application security.

Setting Up

1. Start the AttackBox.
2. Start the Virtual Machine provided for this challenge and note the Machine’s IP address; you will need it later to access the web app.
3. You can now open the AttackBox and enter the MU-TH-UR 6000 server’s IP address in the browser running on port 80.

#### **Let’s go!**

No Answer Needed

### Task 2 : Mother’s Secrets !

**Introduction**

Upon accessing the MU-TH-UR6000 computer, AKA Mother, you will see the Mother UI server. However, since you only have a “Crew” Member level role, you only have read access to limited resources. But there are other ways to access it. Can you find them and uncover Mother’s secret?

Equipment Check

Download the files attached to this task to review the code.

1. Explore the available endpoints of the Mother Server and try to find any clues that can reveal mother’s secret.
2. Search for a file that contains essential information about the ship’s activities.
3. Exploit the vulnerable code to download the secrets from the server. Can you spot the vulnerable code?
4. Capture all the hidden flags you encounter during your exploration. Only Mother holds this secret.

Operating Manual

Below are some sequences and operations to get you started. Use the following to unlock information and navigate Mother:

* Emergency command override is 100375. Use it when accessing *Alien Loaders*.
* Download the task files to learn about Mother’s routes.
* Hitting the *routes* in the *right* order makes Mother confused, it might think you are a Science Officer!

**Can you guess what is /api/nostromo/mother/secret.txt?**

#### **What is the number of the emergency command override?**

100375

#### **What is the special order number?**

937

#### **What is the hidden flag in the Nostromo route?**

Flag{X3n0M0Rph}

#### **What is the name of the Science Officer with permissions?**

Ash

#### **What are the contents of the classified “Flag” box?**

THM\_FLAG{0RD3R\_937}

#### **Where is Mother’s secret?**

/opt/m0th3r

#### **What is Mother’s secret?**

Flag{Ensure\_return\_of\_organism\_meow\_meow!}

### HAPPY HACKING :)
