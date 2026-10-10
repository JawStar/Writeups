---
title: "Linux Incident Surface Tryhackme Write up"
date: 2024-11-15
platform: tryhackme
source_file: "2024-11-15_Linux-Incident-Surface-Tryhackme-Write-up-af03e7854127.html"
---

---

### Linux Incident Surface Tryhackme Write up

![](https://cdn-images-1.medium.com/max/800/1*8Say1mXlimIy7_fTB2zs3g.png)

### Task 1 : Introduction

![](https://cdn-images-1.medium.com/max/800/0*784V6Mi2Cf4R7Y7w)

### Introduction

The Linux Incident Surface focuses on all potential points or sources in the Linux system where an incident could occur or traces of incidents could be found. This could lead to a security breach, which could also be part of the Linux Attack Surface.

Linux Attack Surface refers to various entry points where an attack or unauthorized attempt could be made to enter the system or gain unauthorized attempts.

In this introductory room on Incident Surface, we will explore various incident points from the defensive perspective while also considering the attack surface perspective.

We will observe how the attack-related activities could be translated into the incident footprints or indicators of the attack on the Linux system.

#### Scenario

Alice and Bob will assist us in completing the learning objectives of this room. Alice is a Red teamer, and Bob is a Blue teamer at Cybertees Pvt Ltd. Alice will help us perform post-exploitation activities. Bob will help us examine various incident surfaces to identify the footprints of the attack.

#### Learning Objective

As this is an introductory room in the Linux Endpoint Investigation Module, other rooms will cover the topics in detail, but here, we will try to understand the overall picture. Some of the learning objectives covered in this room are:

* Explore various Linux attack surfaces.
* Understand the attack perspective.
* Understand the defensive perspective.

**Continue to the next task.**

No Answer Needed

### Task 2 : Lab Connection

**Connect with the lab. How many files and folders are in the /home/activities/processes directory?**

**3**

### Task 3 : Linux Incident Surface — An Overview

**Continue to the next task.**

No Answer Needed

### **Task 4 : Processes and Network Communication**

**What is the remote IP to which the process netcom establishes the connection?**

68.53.23.246

**Update the osquery command. What is the remote port the netcom process is communicating to?**

443

### Task 5 : Persistence

**What is the default path that contains all the installed services in Linux?**

/etc/systemd/system

**Which suspicious service was found to be running on the host?**

benign.service

**What process does this service point to?**

benign

**Before getting this service stopped on 11th Sept, how many log entries were observed in the journalctl against this service?**

7

### Task 6 : Footprints on Disk

**Create a suspicious Debian package on the disk by following the steps mentioned in the task. How many log entries are observed in the dpkg.log file associated with this installation activity?**

6

**What package was installed on the system on the 17th of September, 2024?**

c2comm

### Task 7 : Linux Logs

**Examine the auth.log files. Which user attempted to connect with SSH on 11th Sept 2024?**

saqib

**From which IP was this failed SSH connection attempt made?**

10.11.75.247

### Task 8 : Conclusion

**Click to complete the room**.

No Answer Needed

…………………………………………………………………………………………………
