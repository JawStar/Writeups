---
title: "Shells Overview Tryhackme Writeup"
date: 2024-11-01
platform: tryhackme
source_file: "2024-11-01_Shells-Overview-Tryhackme-Writeup-5b60c2fc4703.html"
---

---

### Shells Overview Tryhackme Writeup

![](https://cdn-images-1.medium.com/max/800/1*JXGx32bNW52SZ3p2RnUCaQ.png)![](https://cdn-images-1.medium.com/max/800/0*U5MO62Y_DBcWYVpA)

### Task 1 : Room Introduction

### Introduction

Shells in cyber security are widely used by attackers to remotely control systems, making them an important part of the attack chain. In this room, we’ll explore different shells used in offensive security, the differences between them, and their use cases. This knowledge can help enhance penetration testing and exploitation skills and also help us understand how to detect when a remote shell is being used by an attacker within an organization.

### Learning Objectives

In this room, we’ll cover the following learning objectives:

* Understand Shells in Offensive Security
* Set Up and Use Reverse and Bind Shells
* Deploy Web Shells

**Click to complete the task.**

No Answer Needed

### Task 2 : Shell Overview

### What is a Shell?

A shell is software that allows a user to interact with an OS. It can be a graphical interface, but it is usually a command-line interface, and this will depend on the operating system running on the target system.

In cyber security, it commonly refers to a specific shell session an attacker uses when accessing a compromised system, allowing them to run commands and execute software. This will allow attackers to execute several activities, some of which are described below.

* **Remote System Control**: allows the attacker to execute commands or software remotely in the target system.
* **Privilege Escalation**: If initial access through a shell is limited or restricted, attackers can explore ways to escalate privileges to more elevated or administrative access.
* **Data Exfiltration**: Once attackers have access to execute commands through an obtained shell, they can explore the system to read and copy sensitive data from it.
* **Persistence and Maintenance Access**: Once shell access is obtained, attackers can create access through users and credentials or copy backdoor software to maintain access to the target system for later usage.
* **Post-Explotation Activities**: After access to a shell is granted, attackers can perform a wide range of post-exploitation activities, such as deploying malware, creating hidden accounts, and deleting information.
* **Access Other Systems on the Network**: Depending on the attacker’s intentions, the obtained shell can be just an initial access point. The goal can be to hop through the network to a different target using the obtained shell as a pivot to different points in the compromised system network. This is also known as pivoting.

**What is the command-line interface that allows users to interact with an operating system?**

Shell

**What process involves using a compromised system as a launching pad to attack other machines in the network?**

Pivoting

**What is a common activity attackers perform after obtaining shell access to escalate their privileges?**

Privilege Escalation

### Task 3 : Reverse Shell

### Reverse Shell

A reverse shell, sometimes referred to as a “connect back shell,” is one of the most popular techniques for gaining access to a system in cyberattacks. The connections initiate from the target system to the attacker’s machine, which can help avoid detection from network firewalls and other security appliances.

**What type of shell allows an attacker to execute commands remotely after the target connects back?**

Reverse Shell

**What tool is commonly used to set up a listener for a reverse shell?**

Netcat

### Task 4: Bind Shell

### Bind Shell

As the name indicates, a bind shell will bind a port on the compromised system and listen for a connection; when this connection occurs, it exposes the shell session so the attacker can execute commands remotely.

This method can be used when the compromised target does not allow outgoing connections, but it tends to be less popular since it needs to remain active and listen for connections, which can lead to detection.

**What type of shell opens a specific port on the target for incoming connections from the attacker?**

Bind Shell

**Listening below which port number requires root access or privileged permissions?**

1024

### Task 5 : Shell Listeners

Rlwrap

It is a small utility that uses the GNU readline library to provide editing keyboard and history.

**Usage Example (Enhancing a Netcat Shell With Rlwrap)**

Terminal

```
attacker@kali:~$ rlwrap nc -lvnp 443  
listening on [any] 443 ...
```

This wraps `nc` with `rlwrap`, allowing the use of features like arrow keys and history for better interaction.

#### Ncat

Ncat is an improved version of Netcat distributed by the NMAP project. It provides extra features, like encryption (SSL).

**Usage Example (Listening for Reverse Shells)**

Terminal

```
attacker@kali:~$ ncat -lvnp 4444  
Ncat: Version 7.94SVN ( https://nmap.org/ncat )  
Ncat: Listening on [::]:443  
Ncat: Listening on 0.0.0.0:443
```

**Usage Example (Listening for Reverse Shells with SSL)**

Terminal

```
attacker@kali:~$ ncat --ssl -lvnp 4444  
Ncat: Version 7.94SVN ( https://nmap.org/ncat )  
Ncat: Generating a temporary 2048-bit RSA key. Use --ssl-key and --ssl-cert to use a permanent one.  
Ncat: SHA-1 fingerprint: B7AC F999 7FB0 9FF9 14F5 5F12 6A17 B0DC B094 AB7F  
Ncat: Listening on [::]:443  
Ncat: Listening on 0.0.0.0:443
```

The `--ssl` option enables SSL encryption for the listener.

#### Socat

It is a utility that allows you to create a socket connection between two data sources, in this case, two different hosts.

**Default Usage Example (Listening for Reverse Shell):**

Terminal

```
attacker@kali:~$ socat -d -d TCP-LISTEN:443 STDOUT  
2024/09/23 15:44:38 socat[41135] N listening on AF=2 0.0.0.0:443
```

The command above used the `-d` option to enable verbose output; using it again (`-d -d`) will increase the verbosity of the commands. The `TCP-LISTEN:443` option creates a TCP listener on port `443`, establishing a server socket for incoming connections. Finally, the STDOUT option directs any incoming data to the terminal.

**Which flexible networking tool allows you to create a socket connection between two data sources?**

socat

**Which command-line utility provides readline-style editing and command history for programs that lack it, enhancing the interaction with a shell listener?**

rlwrap

**What is the improved version of Netcat distributed with the Nmap project that offers additional features like SSL support for listening to encrypted shells?**

ncat

### Task 6 : Shell Payloads

**Which Python module is commonly used for managing shell commands and establishing reverse shell connections in security assessments?**

subprocess

**What shell payload method in a common scripting language uses the** `exec`**,** `shell_exec`**,** `system`**,** `passthru`**, and** `popen` **functions to execute commands remotely through a TCP connection?**

php

**Which scripting language can use a reverse shell by exporting environment variables and creating a socket connection?**

python

### Task 7 : Web Shell

**famous tools :**

[**p0wny-shell**](https://github.com/flozz/p0wny-shell)**— A minimalistic single-file PHP web shell that allows remote command execution.**

[**b374k shell**](https://github.com/b374k/b374k)**— A more feature-rich PHP web shell with file management and command execution, among other functionalities.**

[**c99 shell**](https://www.r57shell.net/single.php?id=13)**— A well-known and robust PHP web shell with extensive functionality.**

**You can find more web shells at:** [**https://www.r57shell.net/index.php**](https://www.r57shell.net/index.php)**.**

**What vulnerability type allows attackers to upload a malicious script by failing to restrict file types?**

Unrestricted File Upload

**What is a malicious script uploaded to a vulnerable web application to gain unauthorized access?**

Web Shell

### Task 8 : Practical Task

Now that we have learned about the different types of reverse shells, let’s test our knowledge with a practical exercise, and let’s get the flag in the format THM{} from the vulnerable web server. Click on the `Start Machine` button to start the challenge. After that, it will be accessible on the following URLs:

* MACHINE\_IP:8080 hosts the landing page
* MACHINE\_IP:8081 hosts the web application that is vulnerable to command injection.
* MACHINE\_IP:8082 hosts the web application that is vulnerable to an unrestricted file upload.

You can access the above using the `AttackBox`, which will display on a split screen, or you can use your own access through the VPN.

**Note:** Please allow 2 minutes for the VM to fully boot up.

**Using a reverse or bind shell, exploit the command injection vulnerability to get a shell. What is the content of the flag saved in the / directory?**

**THM{0f28b3e1b00becf15d01a1151baf10fd713bc625}**

**Using a web shell, exploit the unrestricted file upload vulnerability and get a shell. What is the content of the flag saved in the / directory?**

**THM{202bb14ed12120b31300cfbbbdd35998786b44e5}**

### Task 9 : Conclusion

In this room, we learned about **Reverse Shells**, **Bind Shells**, and **Web Shells**, how they are critical for attackers, penetration testers, and defenders, and how to identify them.

**Reverse Shells** establish a connection from a compromised machine back to an attacker’s system. **Bind Shells**, on the other hand, listen for incoming connections on a compromised machine, and **Web Shells** offer attackers a unique avenue for exploiting vulnerabilities in web applications.

Understanding shells is critical for security professionals to either perform penetration testing exercises or to identify and defend systems.

**I have successfully completed the room, and I now understand how Reverse Shells, Bind Shells, and Web Shells work!**

No Answer Needed

**Happy hacking :)**

**🧑‍💻 like , share , comment**

**&**

**FOLLOW FOR MORE …….**

[Jawstar](https://medium.com/u/c42b7c126e68)
