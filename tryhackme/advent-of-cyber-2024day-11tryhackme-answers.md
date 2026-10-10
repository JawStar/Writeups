---
title: "Advent of Cyber 2024{DAY-11}Tryhackme Answers"
date: 2024-12-12
platform: tryhackme
source_file: "2024-12-12_Advent-of-Cyber-2024-DAY-11-Tryhackme-Answers-57546f507c50.html"
---

---

### Advent of Cyber 2024{DAY-11}Tryhackme Answers

### **The Story**

![](https://cdn-images-1.medium.com/max/800/0*2mdEJgrPI0BZAmpV.png)

The much-awaited SOC-mas of Wareville town is just days away! Glitch, the unsung hero, is closing all the doors to Mayor Malware’s malicious intentions one by one. However, there is still much more to do.

![](https://cdn-images-1.medium.com/max/800/0*--6sYRnmN_RykMTQ.png)

McSkidy took a thoughtful breath. *“Mayor can still find his way in!”*

Glitch smiles confidently. *“I think I know the last technique he relies on to get into the networks.”*

McSkidy stands up from her chair with a surge of excitement. *“Let me guess, it’s a notorious way to get into a network — a Wi-Fi attack?!”*

Glitch nods decisively. *“Exactly! Let’s be one step ahead of the Mayor.”*

### Learning Objectives

* Understand what Wi-Fi is
* Explore its importance for an organisation
* Learn the different Wi-Fi attacks
* Learn about the WPA/WPA2 cracking attack

![](https://cdn-images-1.medium.com/max/800/0*F1vGBakj0a0FxtRb.gif)

### Attacks on Wi-Fi

There are several techniques attackers use to exploit Wi-Fi technology. The techniques discussed here are solely for educational purposes. Unauthorised attempts to access or compromise networks are illegal and may lead to severe legal consequences. With that in mind, here are some of the most popular techniques:

* **Evil twin attack:** In this attack, the attacker creates a fake access point that has a similar name to one of your trusted Wi-Fi access points. Of course, it cannot be the exact same. If the trusted Wi-Fi’s name is “Home\_Internet”, the attacker creates a fake Wi-Fi access point named “Home\_Internnet” or something similar that is difficult to differentiate. The attack starts with the attacker sending de-authentication packets to all the users connected to their legitimate Wi-Fi access points. The users would face repeated disconnections from the network after this. With frustration, the users are likely to open the Wi-Fi access points list for troubleshooting and will find the attacker’s Wi-Fi with almost similar name and with greater signal strength. They would go to connect it, and once connected, the attacker could see all their traffic to or from the Internet.
* **Rogue access point:** This attack’s objective is similar to that of the evil twin attack. In this attack, the attacker sets up an open Wi-Fi access point near or inside the organisation’s physical premises to make it available to users with good signal strength. The users inside the organisation may accidentally join this network if their devices are set to connect automatically to open Wi-Fi. The attacker can intercept all their communication after the users connect to this rogue access point.
* **WPS attack:** Wi-Fi Protected Setup (WPS) was created to allow users to connect to their Wi-Fi using an 8-digit PIN without remembering complex passwords. However, this 8-digit PIN is vulnerable in some networks due to its insecure configuration. The attack is made by initiating a WPS handshake with the router and capturing the router’s response, which contains some data related to the PIN and is vulnerable to brute-force attacks. Some of the captured data is brute-forced, and the PIN is successfully extracted along with the Pre-Shared Key (PSK).
* **WPA/WPA2 cracking:** Wi-Fi Protected Access (WPA) was created to secure wireless communication. It uses a strong encryption algorithm. However, the security of this protocol is heavily influenced by the length and complexity of the Pre-Shared Key (PSK). While cracking WPA, attackers start by sending de-authentication packets to a legitimate user of the Wi-Fi network. Once the user disconnects, they try to reconnect to the network, and a 4-way handshake with the router takes place during this time. Meanwhile, the attacker turns its adaptor into monitor mode and captures the handshake. After the handshake is captured, the attacker can crack the password by using brute-force or dictionary attacks on the captured handshake file.

McSkidy looks to Glitch and asks, *“What kind of attack are you thinking of demonstrating Glitch?”*

Glitch paces back and forth before coming to a sudden stop and says, *“Today I will be showing you how the WPA/WPA2 cracking attack works!”*

### WPA/WPA2 Cracking

As mentioned above, WPA/WPA2 cracking begins by listening to Wi-Fi traffic to capture the 4-way handshake between a device and the access point. Since waiting for a device to connect or reconnect can take some time, deauthentication packets are sent to disconnect a client, forcing it to reconnect and initiate a new handshake, which is captured. After the handshake is captured, the attacker can crack the password (**PSK**) by using brute-force or dictionary attacks on the captured handshake file.

![](https://cdn-images-1.medium.com/max/800/0*O7IaKEnUpxKdSUBz.gif)

**The 4-way Handshake**

The WPA password cracking process involves capturing a Wi-Fi network’s handshake to attempt a PSK (password) decryption. First, an attacker places their wireless adapter into monitor mode to scan for networks, then targets a specific network to capture the 4-way handshake. Once the handshake is captured, the attacker runs a brute-force or dictionary attack using a tool like aircrack-ng to attempt to match a wordlist against the passphrase.

The WPA 4-way handshake is a process that helps a client device (like your phone or laptop) and a Wi-Fi router confirm they both have the right “password” or Pre-Shared Key (PSK) before securely connecting. Here’s a simplified rundown of what happens:

* **Router sends a challenge:** The router (or access point) sends a challenge” to the client, asking it to prove it knows the network’s password without directly sharing it.
* **Client responds with encrypted information:** The client takes this challenge and uses the PSK to create an encrypted response that only the router can verify if it also has the correct PSK.
* **Router verifies and sends confirmation:** If the router sees the client’s response matches what it expects, it knows the client has the right PSK. The router then sends its own confirmation back to the client.
* **Final check and connection established:** The client verifies the router’s response, and if everything matches, they finish setting up the secure connection.

This handshake doesn’t directly reveal the PSK itself but involves encrypted exchanges that depend on the PSK.

**The Vulnerability**

The vulnerability lies in the fact that an attacker can capture this 4-way handshake if they’re listening when a device connects. With the handshake data, they can use it as a basis to attempt offline brute-force or dictionary attacks. Essentially, they try different possible passwords and test each one to see if it would produce the captured handshake data, eventually cracking the PSK if they get a match.

![](https://cdn-images-1.medium.com/max/800/0*KvPXiF3F6Ig2esPU.png)
> ***Answer the questions below***

Q1) What is the BSSID of our wireless interface?

Answers :- ***02:00:00:00:02:00***

Q2) What is the SSID and BSSID of the access point? Format: SSID, BSSID

Answers :- ***MalwareM\_AP, 02:00:00:00:00:00***

Q3) What is the BSSID of the wireless interface that is already connected to the access point?

Answers :- ***02:00:00:00:01:00***

Q4) What is the PSK after performing the WPA cracking attack?

Answers :- ***fluffy/champ24***

Q5) If you enjoyed this task, feel free to check out the [Networking](https://tryhackme.com/module/networking) module.

Answers :- ***No answer needed***

### Keep Support Guys… Hit On Clap More Than 10 times..

### ***Happy hacking! 🧑‍💻 Follow for more walkthrough…***

### [Jawstar](https://medium.com/u/c42b7c126e68)

### The End

McSkidy looked in awe as Glitch flawlessly exposed a weakness in the Wi-Fi network.

Glitch ponders and says, *“That password is pretty weak, I must say. I wouldn’t have been surprised if the Mayor had already found a way.”*

McSkidy gets to work right away while Glitch thinks about what is next.

Glitch stops and says, *“I am ever curious if the Mayor knows much about race conditions and how will that affect us?”*
