---
title: "Advent of Cyber 2024{DAY - 22}Tryhackme Answers"
date: 2024-12-22
platform: tryhackme
source_file: "2024-12-22_Advent-of-Cyber-2024-DAY---22-Tryhackme-Answers-828db2acc406.html"
---

---

### Advent of Cyber 2024{DAY - 22}Tryhackme Answers

**The Story**

![](https://cdn-images-1.medium.com/max/800/0*ubiws77ZqbTliHjT.png)

*Mayor Malware laughed hard at what he had done,*

*another scheme hatched, another scheme won.*

*But a thought passed the mayor, the thought then passed twice.*

*The list soon to come, the town’s “naughty or nice”!*

*He paced and he paced like the week of election,*

*until…that was it! A surprise mayor inspection!*

*The list-making wares, well it only seemed fair*

*would grant him temp access, an account for the mayor.*

*The list makers agreed, under certain conditions.*

*He logged on that day, to confirm his suspicions.*

*The next day they were, when the naughty list read:*

*“Mayor Malware” Line 1, he read it with dread.*

*The conditions they gave, there’s something they missed.*

*As somehow and someway, he accessed the list.*

*Mayor Malware then smiled, as he’d find no blame.*

*With this he would find, a new home for his name!*

![](https://cdn-images-1.medium.com/max/800/0*-6YuRyPRSXoX776X.png)

### Learning Objectives

* Learn about Kubernetes, what it is and why it is used.
* Learn about DFIR, and the challenges that come with DFIR in an ephemeral environment.
* Learn how DFIR can be done in a Kubernetes environment using log analysis.

### Kubernetes Explained

Back in the day, it was very common for companies/organisations to use a monolithic architecture when building their applications. A monolithic architecture is an application built as a single unit, a single code base, and usually, a single executable deployed as a single component. For many companies, this worked and still does to this day; however, for some companies, this style of architecture was causing problems, especially when it came to scaling. The problem with monolithic applications is that if one single part of the application needs scaling, the whole application has to be scaled with it. It would make far more sense for companies with applications that receive fluctuating levels of demand across their parts to break the application down component by component and run them as their own microservices. That way, if one “microservice” starts to receive an increase in demand, it can be scaled up rather than the entire application.

**The Great Microservice Adoption**

Microservices architecture was adopted by companies like Netflix, which is a perfect example of the hypothetical company discussed above. Their need to scale up services dedicated to streaming when a new title is released (whilst services dedicated to user registration, billing, etc, won’t need the same scaling level) made a microservices architecture a no-brainer. As time went by, companies similar to Netflix hopped aboard the Microservices Express, and it became very widely adopted. Now, as for the hosting of these microservices, containers were chosen due to their lightweight nature. Only as you may imagine, an application of this scale can require hundreds, even thousands of containers. Suddenly, a tool was needed to organise and manage these containers.

**Introducing Kubernetes**

Well, you guessed it! That’s exactly what Kubernetes was made for. Kubernetes is a container orchestration system. Imagine one of those microservices mentioned earlier is running in a container, and suddenly, there is an increase in traffic, and this one container can no longer handle all requests. The solution to this problem is to have another container spun up for this microservice and balance the traffic between the two. Kubernetes takes care of this solution for you, “orchestrating” those containers when needed.

That makes things a lot easier for everyone involved, and it’s because of this (along with the widespread adoption of microservices architecture) that Kubernetes is so ubiquitous in the digital landscape today. This popularity means that it’s **highly portable** as no matter what technology stack is being used, it’s very likely a Kubernetes integration is available; this, along with the fact it can help make an application **highly available** and **scalable**, makes Kubernetes a no-brainer!

In Kubernetes, containers run in **pods**; these pods run on **nodes**, and a collection of nodes makes up a Kubernetes **cluster**. It is within a cluster that McSkidy and co’s investigation will occur today. If you’re interested in learning more about Kubernetes, we have a range of rooms on the subject. A good place to start would be the [Intro to Kubernetes](https://tryhackme.com/r/room/introtok8s) room; then, there’s plenty more where that came from with the [Kubernetes Hardening](https://tryhackme.com/module/kubernetes-hardening) Module.

### DFIR Basics

Every cyber security professional has stumbled — or will stumble — upon **DFIR** at some point in their career. It is an acronym — in IT, we all *love* our acronyms — that stands for “**Digital Forensics and Incident Response**.” These two investigative branches of cyber security come into play during a cyber security incident. A DFIR expert will likely be called to action as soon as an incident is ascertained and will be expected to perform actions that fall into one or both of the two disciplines:

* **Digital Forensics**, like any other “forensics” discipline, aims to collect and analyse digital evidence of an incident. The artefacts collected from the affected systems are used to trace the chain of attack and uncover all facts that ultimately led to the incident. DFIR experts sometimes use the term “post-mortem” to indicate that their analysis starts *after* the incident has occurred and is performed on already compromised systems and networks.
* **Incident Response**, while still relying on data analysis to investigate the incident, focuses on “responsive” actions such as threat containment and system recovery. The incident responder will isolate infected machines, use the data collected during the analysis to identify the “hole” in the infrastructure’s security and close it, and then recover the affected systems to a clean, previous-to-compromise state.

Picture the incident responder as an emergency first responder whose aim is to contain the damage, extinguish the fire, and find and stabilise all the victims. On the other hand, the digital forensics analyst is the Crime Scene Investigator (CSI) or detective trying to recreate the crime scene and ultimately find evidence to identify and frame the criminal.

Both roles are expected to document all findings thoroughly. The incident responder will present them to explain how the incident happened and what can be learnt from it, ultimately proposing changes to improve the security stance of the entity affected by the incident. The digital forensics analyst will use the findings to demonstrate the attackers’ actions and — eventually — testify against them in court.

In the task at hand, we will help McSkidy and the Glitch become digital forensics analysts and retrace the malicious actor’s steps. We will especially focus on collecting evidence and artefacts to uncover the perpetrator and present our analysis to Wareville townspeople.

![](https://cdn-images-1.medium.com/max/800/0*aXWjfFugIsU-RZgb.png)

### Day 22: It’s because I’m kubed, isn’t it?

> ***Answer the questions below :***

Q1)What is the name of the webshell that was used by Mayor Malware?

***Answers:- shelly.php***

Q2)What file did Mayor Malware read from the pod?

***Answers:- db.php***

Q3)What tool did Mayor Malware search for that could be used to create a remote connection from the pod?

***Answers:- nc***

Q4)What IP connected to the docker registry that was unexpected?

***Answers:- 10.10.130.253***

Q5)At what time is the first connection made from this IP to the docker registry?

***Answers:- 29/Oct/2024:10:06:33 +0000***

Q6)At what time is the updated malicious image pushed to the registry?

***Answers:- 29/Oct/2024:12:34:28 +0000***

Q7)What is the value stored in the “pull-creds” secret?

***Answers:- {“auths”:{“***[***http://docker-registry.nicetown.loc:5000***](http://docker-registry.nicetown.loc:5000)***":{"username":"mr.nice","password":"Mr.N4ughty","auth":"bXIubmljZTpNci5ONHVnaHR5"}}}***

Q)Enjoy today’s lesson? Check out our [Intro to Kubernetes](https://tryhackme.com/r/room/introtok8s) for a more in-depth introduction to Kubernetes!

***Answers:- No answer needed***

#### ……Keep Support Guys… Hit On Clap More Than 10 times.. live a Feedback For Better walkthrough……………….

### ***Happy hacking! 🧑‍💻***

[Jawstar](https://medium.com/u/c42b7c126e68)
