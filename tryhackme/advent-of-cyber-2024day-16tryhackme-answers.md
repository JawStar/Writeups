---
title: "Advent of Cyber 2024{DAY-16}Tryhackme Answers"
date: 2024-12-17
platform: tryhackme
source_file: "2024-12-17_Advent-of-Cyber-2024-DAY-16-Tryhackme-Answers-ca3a4750a1f1.html"
---

---

### Advent of Cyber 2024{DAY-16}Tryhackme Answers

**The Story**

![](https://cdn-images-1.medium.com/max/800/0*tAFlz0eFGoB3jDyw.png)

Another day, another challenge and, unfortunately for McSkidy, another intrusion in their Azure tenant. Before joining McSkidy in her investigation, there’s some catching up to do, and this is a story best told in rhyme:

*As SOC-mas approached, so did the need,*

*To provide those without, with something to read.*

*Care4Wares tried, they made it their mission,*

*A gift for all wares, a SOC-mas tradition.*

*McSkidy logged on and felt some confusion,*

*An alert saying here, a detected intrusion.*

*Inspection began as to what was at fault,*

*It seems access was gained to McSkidys key vault.*

*She checked and she checked as she had to be sure,*

*But it hadn’t been long since adopting Azure.*

*Troubleshooting ensued, ideas had been tabled,*

*Which would have been great, if logs were enabled.*

*With three hours slept,*

*And no records kept.*

*McSkidy then knew,*

*What she needed to do.*

*It’s true that on her, this town does depend,*

*But to find what was wrong, she needed a friend.*

*So clearing her throat and preparing her pitch,*

*She picked up her phone and called up the Glitch.*

It was late. Too late. McSkidy’s eyelids felt as though they had dumbbells attached to them. The sun had long since waved goodbye to Wareville, and the crisp night air was creeping in through the window of McSkidy’s office. If only there were a substance which would both warm and wake her up. Once McSkidy’s brain cells had started functioning again, and remembered that coffee existed. Checking her watch, she was saddened to learn it was too late to get her coffee from her favourite Wareville coffee house, Splunkin Donuts; the vending machine downstairs would have to do. Sipping her coffee, McSkidy immediately lit up and charged back into the office, ready to crack the case; however, as she entered, the Glitch had an idea of his own. He’d got it, and he figured out an attack vector the user had likely taken! McSkidy took a seat next to the Glitch, and he began to walk it through.

![](https://cdn-images-1.medium.com/max/800/0*RMkEc0cpgkaHWaGi.png)

### Learning Objectives

* Learn about Azure, what it is and why it is used.
* Learn about Azure services like Azure Key Vault and Microsoft Entra ID.
* Learn how to interact with an Azure tenant using Azure Cloud Shell.

### Intro to Azure

Before diving into the Glitch’s idea of the attacker’s path, let’s introduce some of the key concepts that will be covered in the process. We are going to start by introducing Azure. To do that, let’s consider why McSkidy is using Azure in the first place.

It all started when McSkidy’s role as the cyber security expert of Wareville really started to take off. Before she knew it, McSkidy was in very high demand and needed to create all kinds of resources to help her organise her duties; these included a web application to handle appointment making, multiple machines running for investigations, and more machines running for evidence storing and analysis. McSkidy hosted and managed all of these machines herself, that is, on-prem (on-premises). This initially wasn’t a massive issue because, after all, she wasn’t a corporation but just helping the citizens of Wareville with cyber security matters.

However, as time went on, McSkidy ran into issues during peak times when she would receive many requests for help, and therefore needed to process more evidence. All of this increased demand meant McSkidy had to scale up her resources to handle the load. To put a long story short, this was a lot of hassle for McSkidy. She wished there was a way for someone to handle her infrastructure on her behalf, especially when scaling her resources up (during peak times) and down (when they resumed). That’s when Azure came to the rescue.

![](https://cdn-images-1.medium.com/max/800/0*c0SSP8pFmweF-nyf.png)

Azure is a CSP (Cloud Service Provider), and CSPs (others include Google Cloud and AWS) provide computing resources such as computing power on demand in a highly scalable fashion. In other words, McSkidy could instead have Azure manage her underlying infrastructure, scaling it in times of increased demand and decreasing it once traffic resumed to normal levels. The best bit? McSkidy only has to pay for what she uses; gone were the days of buying physical infrastructure to handle increased loads, only for that infrastructure to go unused the majority of the time.

Azure (and cloud adoption in general) boasts many benefits beyond cost optimisation. Azure also gave McSkidy access to lots of cloud services ranging from identity management to data ingestion (quite frankly, there are more services than can be abbreviated in a sentence as, at the time of writing, there are over 200), these services can be used to build, deploy, and manage McSkidy’s current infrastructure as well as give her the options to upgrade or build new applications in the future given the range of services available. A couple of Azure services will come up during the Glitch’s attack path. Let’s take a look at them now:

**Azure Key Vault**

Azure Key Vault is an Azure service that allows users to securely store and access secrets. These secrets can be anything from API Keys, certificates, passwords, cryptographic keys, and more. Essentially, anything you want to keep safe, away from the eyes of others, and easily configure and restrict access to is what you want to store in an Azure Key Vault.

The secrets are stored in vaults, which are created by vault owners. Vault owners have full access and control over the vault, including the ability to enable auditing so a record is kept of who accessed what secrets and grant permissions for other users to access the vault (known as **vault consumers**). McSkidy uses this service to store secrets related to evidence and has been entrusted to store some of Wareville’s town secrets here.

**Microsoft Entra ID**

McSkidy also needed a way to grant users access to her system and be able to secure and organise their access easily. So, a Wareville town member could easily access or update their secret. Microsoft Entra ID (formerly known as Azure Active Directory) is Azure’s solution. Entra ID is an identity and access management (IAM) service. In short, it has the information needed to assess whether a user/application can access X resource. In the case of the Wareville town members, they made an Entra ID account, and McSkidy assigned the appropriate permissions to this account.

With that covered, let’s see what the Glitch has come up with.

### Assumed Breach Scenario

Knowing that a potential breach had happened, McSkidy decided to conduct an Assumed Breach testing within their Azure tenant. The Assumed Breach scenario is a type of penetration testing setup in which an initial access or foothold is provided, mimicking the scenario in which an attacker has already established its access inside the internal network.

In this setup, the mindset is to assess how far an attacker can go once they get inside your network, including all possible attack paths that could branch out from the defined starting point of intrusion.

### Day 16: The Wareville’s Key Vault grew three sizes that day.

> ***Answer the questions below***

Q1) What is the password for backupware that was leaked?  
Answers :- ***R3c0v3r\_s3cr3ts!***

![](https://cdn-images-1.medium.com/max/800/0*bZc1EriGeRsk-aEH.png)

Q2) What is the group ID of the Secret Recovery Group?  
Answers :- ***7d96660a-02e1–4112–9515–1762d0cb66b7***

![](https://cdn-images-1.medium.com/max/800/0*7OeJDn45bMP54KQx.png)

Q3) What is the name of the vault secret?  
Answers :- ***aoc2024***

![](https://cdn-images-1.medium.com/max/800/0*YZGz-9JztVV3hLhs.png)

Q4) What are the contents of the secret stored in the vault?  
Answers :- ***WhereIsMyMind1999***

![](https://cdn-images-1.medium.com/max/800/0*o-q3syxYm1_eN1I3.png)

Q5) Liked today’s task? Check the [Exploiting Active Directory](https://tryhackme.com/r/room/exploitingad) room to practice user and group enumeration in a similar yet different environment!  
Answers :- ***No answer needed***

![](https://cdn-images-1.medium.com/max/800/0*xK4q7go_gzSvFmcQ.png)

### ……Keep Support Guys… Hit On Clap More Than 10 times.. live a Feedback For Better walkthrough..

***Happy hacking! 🧑‍💻 Follow for more walkthrough…***

[Jawstar](https://medium.com/u/c42b7c126e68)
