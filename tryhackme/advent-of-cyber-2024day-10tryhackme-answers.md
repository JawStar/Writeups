---
title: "Advent of Cyber 2024{DAY-10}Tryhackme Answers"
date: 2024-12-10
platform: tryhackme
source_file: "2024-12-10_Advent-of-Cyber-2024-DAY-10-Tryhackme-Answers-ac6452342e99.html"
---

---

### Advent of Cyber 2024{DAY-10}Tryhackme Answers

### {Day — 10 }: He had a brain full of macros, and had shells in his soul.

![](https://cdn-images-1.medium.com/max/800/0*4qmIotGToWmgPcdk.png)

### The Story

*Mayor Malware had one, just one SOC-mas wish:*

*The SOC organiser would fall for his phish!*

*Well on top of this, he wanted as well,*

*Once the email opened, to gain a rev shell.*

Mayor Malware attempts to phish one of the SOC-mas organizers by sending a document embedded with a malicious macro. Once opened, the macro will execute, giving the Mayor remote access to the organizer’s system.

Marta May Ware is surprised that her system was compromised even after following tight security, but McSkidy thinks she traced the attacker, and he got in. It’s none other than Mayor Malware who got into the system. This time, the Mayor used phishing to get his victim. McSkidy’s quick incident response prevented significant damage.

In this task, you will run a security assessment against Marta May Ware. The purpose would be to improve her security and raise her cyber security awareness against future attacks.

Glitch is still concerned about any future attack on Marta May Ware and advises McSkidy to run a phishing exercise on her to verify whether she is vigilant about these attacks.

### Learning Objectives

* Understand how phishing attacks work
* Discover how macros in documents can be used and abused
* Learn how to carry out a phishing attack with a macro

### Phishing Attacks

Security is as strong as the weakest link. Many would argue that humans are the weakest link in the security chain. Is it easier to exploit a patched system behind a firewall or to convince a user to open an “important” document? Hence, “human hacking” is usually the easiest to accomplish and falls under social engineering.

Phishing is a play on the word fishing; however, the attacker is not after seafood. Phishing works by sending a “bait” to a usually large group of target users. Furthermore, the attacker often craft their messages with a sense of urgency, prompting target users to take immediate action without thinking critically, increasing the chances of success. The purpose is to steal personal information or install malware, usually by convincing the target user to fill out a form, open a file, or click a link.

One might get an email out of nowhere claiming that they are being charged a hefty sum and that they should check the details in the attached file or URL. The attacker just needs to have their target users open the malicious file or view the malicious link. This can trigger specific actions that would give the attack control over your system.

### Macros

The needs of MS Office users can be vastly different, and there is no way that a default installation would cater to all of these needs. In particular, some users find themselves repeating the same tasks, such as formatting and inserting text or performing calculations. Consider the example of number-to-words conversion where a number such as “1337” needs to be expressed as “one thousand three hundred thirty-seven”. It would take hours to finish if you have hundreds of numbers to convert. Hence, there is a need for an automated solution to save time and reduce manual effort.

In computing, a macro refers to a set of programmed instructions designed to automate repetitive tasks. MS Word, among other MS Office products, supports adding macros to documents. In many cases, these macros can be a tremendous time-saving feature. However, in cyber security, these automated programs can be hijacked for malicious purposes.

To add a macro to an MS Word document for instance, we click on the **View** menu and then select **Macros** as pointed out by 1 and 2 in the screenshot below. We should specify the name of the macro and specify that we want to save it in our current document, as indicated by 3 and 4. Finally, we press the **Create** button.

![](https://cdn-images-1.medium.com/max/800/0*8y_fkbubN8gVcF0z.png)

Let’s explore one way the attacker could have created an MS Word document with an embedded macro to gain access to Marta’s system.

### Attack Plan

In his plans, Mayor Malware needs to create a document with a malicious macro. Upon opening the document, the macro will execute a payload and connect to the Mayor’s machine, giving him remote control. Consequently, the Mayor needs to ensure that he is listening for incoming connections on his machine before emailing the malicious document to Marta May Ware. By executing the macro, the Mayor gains remote access to Marta’s system through a reverse shell, allowing him to execute commands and control her machine remotely. The steps are as follows:

1. Create a document with a malicious macro
2. Start listening for incoming connections on the attacker’s system
3. Email the document and wait for the target user to open it
4. The target user opens the document and connects to the attacker’s system
5. Control the target user’s system

You might wonder why you don’t set the malicious macro so that you can connect to the target system directly instead of the other way around. The reason is that when the target system is behind a firewall or has a private IP address, you cannot reach it and, hence, cannot connect to it.

![](https://cdn-images-1.medium.com/max/800/0*V89usm1jCc75KW4i.png)
> **Answer the questions below**

Q1) What is the flag value inside the `flag.txt` file that’s located on the Administrator’s desktop?

Answer:- ***THM{PHISHING\_CHRISTMAS}***

![](https://cdn-images-1.medium.com/max/800/0*4l4NVakXU625nFO3.png)

Q2) If you enjoyed this task, feel free to check out the [Phishing](https://tryhackme.com/module/phishing) module.

Answer:- ***No answer needed***

![](https://cdn-images-1.medium.com/max/800/0*8sD6iCxtOeNZ60MZ.png)

Keep Support Guys… Hit On Clap More Than 10 times..

***Happy hacking! 🧑‍💻 Follow for more walkthrough…***

[Jawstar](https://medium.com/u/c42b7c126e68)
