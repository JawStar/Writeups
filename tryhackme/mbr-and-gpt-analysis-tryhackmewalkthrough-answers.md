---
title: "MBR and GPT Analysis TryhackmeWalkthrough Answers"
date: 2025-01-23
platform: tryhackme
source_file: "2025-01-23_MBR-and-GPT-Analysis-TryhackmeWalkthrough-Answers-f0408fd29c92.html"
---

---

### MBR and GPT Analysis TryhackmeWalkthrough Answers

Learn how MBR and GPT forensics are carried out to identify attacks during the boot process.

![](https://cdn-images-1.medium.com/max/800/0*1rSvNje_ubWI0f07)

#### Task 1 : Introduction

What are the separate sections on a disk known as?

> *partitions*

Which type of malware infects the boot process?

> *bootkit*

#### Task 2 : Boot Process

What is the name of the hardware diagnostic check performed during the boot process?

> *Power-On-Self-Test*

Which firmware supports a GPT partitioning scheme?

> *UEFI*

Which device has the operating system to boot the system?

> *bootable device*

#### **Task 3 : What if MBR?**

Which component of the MBR contains the details of all the partitions present on the disk?

> *partition table*

What is the standard sector size of a disk in bytes?

> *512*

Which component of the MBR is responsible for finding the bootable partition?

> *bootloader code*

What is the magic number inside the MBR?

> *55 AA*

What is the maximum number of partitions MBR can support?

> *4*

What is the size of the second partition in the MBR attached to the machine? (rounded to the nearest GB)

> *16*

#### **Task 4 : Threats Targeting MBR**

Complete this task.

> No answer needed

#### **Task 5 : MBR Tampering Case**

How many partitions are on the disk?

> *1*

What is the first byte at the starting LBA of the partition? (represented by two hexadecimal digits)

> *EB*

What is the type of the partition?

> *NTFS*

What is the size of the partition? (rounded to the nearest GB)

> *32*

What is the flag hidden in the Administrator’s Documents folder?

> *THM{Cure\_The\_MBR}*

#### **Task 6 : What if GPT?**

How many partitions are supported by the GPT?

> *128*

What is the partition type GUID of the 2nd partition given in the attached GPT file?

> *E3C9E316–0B5C-4DB8–817D-F92DF00215AE*

#### **Task 7 : Threats Targeting GPT**

Complete this task.

> No answer needed

#### **Task 8 : UEFI Bootkit Case**

**Which partition has the bootloader in it?**

> *EFI System Partition*

**What is the malicious string embedded in the bootloader?**

> *Hello, EFI Bootkit!*

HAPPY HACKING !!!!!!!

[**JAWSTAR**  
*Hello*buymeacoffee.com](https://buymeacoffee.com/jawstar_9999 "https://buymeacoffee.com/jawstar_9999")
