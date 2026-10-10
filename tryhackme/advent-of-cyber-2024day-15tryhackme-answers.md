---
title: "Advent of Cyber 2024{DAY-15}Tryhackme Answers"
date: 2024-12-17
platform: tryhackme
source_file: "2024-12-17_Advent-of-Cyber-2024-DAY-15-Tryhackme-Answers-0588e05036b8.html"
---

---

### Advent of Cyber 2024{DAY-15}Tryhackme Answers

**The Story**

![](https://cdn-images-1.medium.com/max/800/0*t5XCt6FMJ22weuWF.png)

Ahead of SOC-mas, the team decided to do a routine security check of one of their Active Directory domain controllers. Upon some quick auditing, the team noticed something was off. Could it be? The domain controller has been breached? With sweat on their brows, the SOC team smashed the glass and hit the panic alarm. There’s only one person who can save us…

### Learning Objectives

* Learn about the structures of Active Directory.
* Learn about common Active Directory attacks.
* Investigate a breach against an Active Directory.

![](https://cdn-images-1.medium.com/max/800/0*9xULC3q3oDb-wTku.png)
> ***Answer the questions below***

Q1) Use the “Security” tab within Event Viewer to answer questions 1 and 2.  
Answers :- ***No answer needed***

![](https://cdn-images-1.medium.com/max/800/0*3l1FjMzucAD3l5Iv.png)

Q2) On what day was Glitch\_Malware last logged in?

Answer format: DD/MM/YYYY  
Answers :- ***07/11/2024***

![](https://cdn-images-1.medium.com/max/800/0*HpVWKo7VyfuON3Ei.png)

Q3) What event ID shows the login of the Glitch\_Malware user?  
Answers :- ***4624***

![](https://cdn-images-1.medium.com/max/800/0*DRrTBXioUHYUZFb4.png)

Q4) Read the PowerShell history of the Administrator account. What was the command that was used to enumerate Active Directory users?  
Answers :- ***Get-ADUser -Filter \* -Properties MemberOf | Select-Object Name***

![](https://cdn-images-1.medium.com/max/800/0*UXyR2lOV6wzpjreO.png)

Q5) Look in the PowerShell log file located in `Application and Services Logs -> Windows PowerShell`. What was Glitch\_Malware's set password?  
Answers :- ***SuperSecretP@ssw0rd!***

![](https://cdn-images-1.medium.com/max/800/0*C0KDREfX3yQcCSwS.png)

Q6) Review the Group Policy Objects present on the machine. What is the name of the installed GPO?  
Answers : -***Malicious GPO — Glitch\_Malware Persistence***

![](https://cdn-images-1.medium.com/max/800/0*qt5Zzfz4kVOHfdG7.png)

Q7) If you enjoyed this task, feel free to check out the [Active Directory Hardening](https://tryhackme.com/r/room/activedirectoryhardening) room.  
Answers :- ***No answer needed***

![](https://cdn-images-1.medium.com/max/800/0*4fXQ7MZGMawPQvQI.png)

### ……Keep Support Guys… Hit On Clap More Than 10 times.. live a Feedback For Better walkthrough…….

***Happy hacking! 🧑‍💻 Follow for more walkthrough…***

[Jawstar](https://medium.com/u/c42b7c126e68)
