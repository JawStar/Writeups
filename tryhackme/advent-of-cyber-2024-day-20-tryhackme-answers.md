---
title: "Advent of Cyber 2024 {DAY - 20 } Tryhackme Answers"
date: 2024-12-20
platform: tryhackme
source_file: "2024-12-20_Advent-of-Cyber-2024--DAY---20---Tryhackme-Answers-0c3355c67507.html"
---

---

### Advent of Cyber 2024 {DAY - 20 } Tryhackme Answers

**The Story**

![](https://cdn-images-1.medium.com/max/800/0*6nD9UreMHwAW2UFe.png)

*Glitch snuck through the shadows, swift as a breeze,  
 He captured the traffic with delicate ease.  
 A PCAP file from a system gone bad,  
 Mayor Malware’s tricks made everything mad!*

McSkidy sat at her desk, staring at the PCAP file Glitch had just sent over. It was from Marta May Ware’s computer, the latest victim of Mayor Malware’s long-running schemes.

She smiled, glancing at Byte. *“Looks like we’d have to use Wireshark again, eh boy?”*

Glitch’s voice crackled over the comms. *“Need any help analyzing it?”*

McSkidy smiled. “*Thanks, Glitch, but I’ve got this.*”

### Learning Objectives

* Investigate network traffic using Wireshark
* Identify indicators of compromise (IOCs) in captured network traffic
* Understand how C2 servers operate and communicate with compromised systems

### Investigating the Depths

*McSkidy peered at the PCAP with care,  
 “What secrets,” she wondered, “are hiding in there?”  
 With Wireshark, she’ll dig through each Byte,  
 Hoping to shed some much-needed light.*

Before we dig deeper into Mayor Malware’s intentions, we must learn a few essential things about C2 communication. Whenever a machine is compromised, the command and control server (C2) drops its secret agent (payload) into the target machine. This secret agent is meant to obey the instructions of the C2 server. These instructions include executing malicious commands inside the target, exfiltrating essential files from the system, and much more. Interestingly, after getting into the system, the secret agent, in addition to obeying the instructions sent by the C2, has a way to keep the C2 updated on its current status. It sends a packet to the C2 every few seconds or even minutes to let it know it is active and ready to blast anything inside the target machine that the C2 aims to. These packets are known as beacons.

![](https://cdn-images-1.medium.com/max/800/0*wXQjDH4-mF-JSfxy.png)

For this room, we will be using Wireshark, an open-source tool that captures and inspects network traffic saved as a PCAP file. It’s a powerful tool, and you’ll encounter it frequently in your journey in cyber security. It is beneficial for understanding the communications between a compromised machine and a C2 server.

If you are unfamiliar with it, here are some key capabilities you’ll see in this room:

* Wireshark can analyze traffic and display the information in an easy-to-navigate format regardless of the protocols used (e.g., HTTP, TCP, DNS).
* Wireshark can reconstruct back-and-forth conversations in a network.
* Wireshark allows easy filtering to narrow down essential details.
* Wireshark can also export and analyze objects that are transferred over the network.

### The End

*As McSkidy opened the file with a click,  
She saw all the data — this wasn’t a wasn’t  
The storm was brewing, much bigger to come,  
Mayor Malware’s agent is far from done!*

*“This isn’t just another breach,”* McSkidy muttered to Byte, a grim realization dawning. *“We’re going to need a bigger firewall.”*

> ***Answer the questions below***

Q1) What was the first message the payload sent to Mayor Malware’s C2?  
Answers :- I am in Mayor!

Q2) What was the IP address of the C2 server?  
Answers :- 10.10.123.224

Q3) What was the command sent by the C2 server to the target machine?  
Answers :- whoami

Q4) What was the filename of the critical file exfiltrated by the C2 server?  
Answers :- credentials.txt

Q5) What secret message was sent back to the C2 in an encrypted format through beacons?  
Answers :- THM\_Secret\_101

Q6) Learn more about WireShark in our [Wireshark: Traffic Analysis](https://tryhackme.com/r/room/wiresharktrafficanalysis) room.

Answers :- No answer needed

### ……Keep Support Guys… Hit On Clap More Than 10 times.. live a Feedback For Better walkthrough…….

***Happy hacking! 🧑‍💻 Follow for more walkthrough…***

[Jawstar](https://medium.com/u/c42b7c126e68)
