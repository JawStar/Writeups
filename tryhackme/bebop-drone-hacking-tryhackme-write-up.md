---
title: "Bebop : Drone Hacking Tryhackme Write-up"
date: 2025-03-07
platform: tryhackme
source_file: "2025-03-07_Bebop---Drone-Hacking-Tryhackme-Write-up-78fb265ad67e.html"
---

---

### Bebop : Drone Hacking Tryhackme Write-up

Who thought making a flying shell was a good idea?

[**Jawstar - Medium**  
*Read writing from Jawstar on Medium. I'm a Penetration Tester, Cyber security researcher & Top 1% in Tryhackme. Every…*jawstar.medium.com](https://jawstar.medium.com "https://jawstar.medium.com")

![](https://cdn-images-1.medium.com/max/800/0*exK-nNyFDzU1iJpm.jpeg)

**Bebop is a quick box that exemplifies exactly how insecure some drone operating systems are. This box shouldn’t take very long to root — it’s really not particularly challenging (which is slightly worrying given it’s based off real drone software). Of much more interest is the overarching concept: drone hacking. If you haven’t already watched the video embedded into the THM room, I would highly recommend it; it’s really interesting (and hilarious in places). I’ll include an embed of the video below, before properly beginning the write-up:**

**Contents**

1 Enumeration:

2 Exploitation :

3 Priviledge Escalation :

So lets start our writeup, first of all we will use nmap to basic scan .

```
nmap -sV -vv <remote-machine>
```

Scan results :

![](https://cdn-images-1.medium.com/max/800/1*5SrSlVZDWx_m7vePHw4rsA.png)

In this photo we can see 2 ports are open which are ssh and telnet and we have also find the operating system [FreeBSD] that is used to fly the drone.

We have two ports open here: port 22 (SSH) and port 23 (telnet). These two services do essentially the same thing (giving you the ability to remotely access a command line on the machine), but SSH is significantly more secure; so, funnily enough, we’re trying telnet first.

### Exploitation :

At the start of the room we’re given a codename: **pilot**. Let’s try logging in with that:

```
telnet -l pilot <remote-ip>
```

![](https://cdn-images-1.medium.com/max/800/1*3A88Mby0-vVN9NVAM_16UA.png)

Now we had login : pilot with telnet directly accessing the drone.

![](https://cdn-images-1.medium.com/max/800/1*u5IsFXK3xy5CJ7cFJuLowA.png)

Before we start doing any privesc, let’s grab the user flag which is in pilot’s home directory:

![](https://cdn-images-1.medium.com/max/800/0*uuxEREv3ebsRJG6-.png)

### Privilege Escalation:

Pretty much the first thing you usually do when aiming for privesc on a Linux computer is look to see what you can run as sudo (i.e. with Root/Administrator privileges). FreeBSD is no different. Run `sudo -l` and see if we can run anything as root:

sudo -l

![](https://cdn-images-1.medium.com/max/800/1*u3Jj-lhpp9h0jV3Ecuysng.png)

We can run BusyBox as root. In case you haven’t come across it before, BusyBox essentially amalgamates lots of different functions into a single executable file. It’s often used in embedded systems to reduce the disk space and memory required. Let’s have a look to see which commands we can execute through BusyBox on this system:

![](https://cdn-images-1.medium.com/max/800/1*IZ9sX8nRicjntPQj96_3WA.png)

Jackpot! Look in the third last line of the defined functions:

![](https://cdn-images-1.medium.com/max/800/1*D30K_0Fj1WDaFIxqz2xuGA.png)

We can run `sh` through BusyBox. `sh` will give us a shell, meaning that if we run BusyBox as root (which we can do with our sudo permissions), *we get a root shell!*

![](https://cdn-images-1.medium.com/max/800/1*1OiwmaShbEyP1zpPe86zhg.png)

The root flag is equally easy to find. It’s in the root directory, all you need to do is open it:

![](https://cdn-images-1.medium.com/max/800/1*L31AyzQepajpQNzcRG4yMQ.png)

#### Now lets start our exercise question and answers :

Q1 What is your codename?

Ans: Pilot

Q2 What is the User Flag?

Ans: THM{r3m0v3\_b3f0r3\_fl16h7}

Q3 What is the Root Flag?

Ans: THM{h16hw4y\_70\_7h3\_d4n63r\_z0n3}

Q4 What is the low privilleged user?

Ans: pilot

Q5 What binary was used to escalate privileges?

Ans: Busybox

Q6 What service was used to gain an initial shell?

Ans: Telnet

Q7 What Operating System does the drone run?

Ans: FreeBSD

That’s all for today’s writeup thank you everyone for supporting.

Follow me for Challenges and Walkthroughs

![](https://cdn-images-1.medium.com/max/800/1*Mlk4XosqO49K5ONBqsSaBA.png)![](https://cdn-images-1.medium.com/max/800/1*FuOio1BlVJl6wNNuj8--FQ.png)
