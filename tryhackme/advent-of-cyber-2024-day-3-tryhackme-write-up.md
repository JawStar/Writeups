---
title: "Advent of Cyber 2024 {Day 3} Tryhackme Write-up"
date: 2024-12-03
platform: tryhackme
source_file: "2024-12-03_Advent-of-Cyber-2024--Day-3--Tryhackme-Write-up-c3d63ed08852.html"
---

---

### Advent of Cyber 2024 {Day 3} Tryhackme Write-up

#### (Log analysis) Day 3: Even if I wanted to go, their vulnerabilities wouldn’t allow it.

![](https://cdn-images-1.medium.com/max/800/0*uhCdVQF7VbcfN2lc)

### **The Story**

![](https://cdn-images-1.medium.com/max/800/0*HKssCvYQZK5nN4Pu.png)

Today’s AoC challenge follows a rather unfortunate series of events for the Glitch. Here is a little passage which sets the scene for today’s task:

*Late one Christmas evening the Glitch had a feeling,*

*Something forgotten as he stared at the ceiling.*

*He got up out of bed and decided to check,*

*A note on his wall: ”Two days! InsnowSec”.*

*With a click and a type he got his hotel and tickets,*

*And sank off to sleep to the sound of some crickets.*

*Luggage in hand, he had arrived at Frosty Pines,*

*“To get to the conference, just follow the signs”.*

*Just as he was ready the Glitch got a fright,*

*An RCE vulnerability on their website ?!?*

*He exploited it quick and made a report,*

*But before he could send arrived his transport.*

*In the Frosty Pines SOC they saw an alert,*

*This looked quite bad, they called an expert.*

*The request came from a room, but they couldn’t tell which,*

*The logs saved the day, it was the room of…the Glitch.*

![](https://cdn-images-1.medium.com/max/800/0*9NoHQeQah0-NLD9o.png)

In this task, we will cover how the SOC team and their expert were able to find out what had happened (Operation Blue) and how the Glitch was able to gain access to the website in the first place (Operation Red). Let’s get started, shall we?

### Learning Objectives

* Learn about Log analysis and tools like ELK.
* Learn about KQL and how it can be used to investigate logs using ELK.
* Learn about RCE (Remote Code Execution), and how this can be done via insecure file upload.

#### Answer the questions below

**BLUE: Where was the web shell uploaded to?**

**Answer format: /directory/directory/directory/filename.php**

```
Ans:/media/images/rooms/shell.php
```

**BLUE**: What IP address accessed the web shell?

```
Ans: 10.11.83.34
```

**RED**: What is the contents of the flag.txt?

```
Ans: THM{Gl1tch_Was_H3r3}
```

If you liked today’s task, you can learn how to harness the power of [advanced ELK queries](https://tryhackme.com/jr/advancedelkqueries).

No Answer Needed

### If you want to get the latest Try Hack Me writeups delivered , go ahead and follow me on Medium and also hit the notify via email.

### Hope you have enjoyed solving this room as much i did if you did you can add a clap to this article to let me know and if you loved this article you can click clap icon upto 50 times to let me know and that will make my day 🤗 You can also follow me on medium to get more articles about CTFs and Cybersecurity in the near Future but don’t forget to hit that email notification icon right next to the follow me button

### Thank you ! [Jawstar](https://medium.com/u/c42b7c126e68)
