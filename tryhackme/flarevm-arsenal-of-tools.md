---
title: "FlareVM: Arsenal of Tools"
date: 2024-10-28
platform: tryhackme
source_file: "2024-10-28_FlareVM--Arsenal-of-Tools-675bfd73a1bf.html"
---

---

### FlareVM: Arsenal of Tools Tryhackme Write up

### By jawstar

![](https://cdn-images-1.medium.com/max/800/1*oin10UnjnXLVevIjH-m7hg.png)

### TASK 1 : Introduction

**FlareVM**, or “**Forensics, Logic Analysis, and Reverse Engineering**,” stands out as a comprehensive and carefully curated collection of specialized tools uniquely designed to meet the specific needs of reverse engineers, malware analysts, incident responders, forensic investigators, and penetration testers. This toolkit, expertly crafted by the FLARE Team at FireEye, is a powerful aid in unravelling digital mysteries, gaining insight into malware behaviour, and delving into the complex details within executables.

### Learning Objectives

* Explore tools inside the FlareVM.
* Learn how to use tools to analyze potentially malicious processes effectively.
* Be familiar with the tools used for static analysis of malicious documents and binaries.

**I’m ready to learn more about FlareVM!**

No Answer Needed

### TASK 2 : Arsenal of Tools

### Reverse Engineering & Debugging

Reverse engineering is like solving a puzzle backward: you take a finished product apart to understand how it works. Debugging is identifying errors, understanding why they happen, and correcting the code to prevent them.

* **Ghidra** — NSA-developed open-source reverse engineering suite.
* **x64dbg** — Open-source debugger for binaries in x64 and x32 formats.
* **OllyDbg** — Debugger for reverse engineering at the assembly level.
* **Radare2** — A sophisticated open-source platform for reverse engineering.
* **Binary Ninja** — A tool for disassembling and decompiling binaries.
* **PEiD** — Packer, cryptor, and compiler detection tool.

### Disassemblers & Decompilers

Disassemblers and Decompilers are crucial tools in malware analysis. They help analysts understand malicious software’s behaviour, logic, and control flow by breaking it into a more understandable format. The tools mentioned below are commonly used in this category.

* **CFF Explorer** — A PE editor designed to analyze and edit Portable Executable (PE) files.
* **Hopper Disassembler** — A Debugger, disassembler, and decompiler.
* **RetDec** — Open-source decompiler for machine code.

### Static & Dynamic Analysis

Static and dynamic analysis are two crucial methods in cyber security for examining malware. Static analysis involves inspecting the code without executing it, while dynamic analysis involves observing its behaviour as it runs. The tools mentioned below are commonly used in this category.

* **Process Hacker** — Sophisticated memory editor and process watcher.
* **PEview** — A portable executable (PE) file viewer for analysis.
* **Dependency Walker** — A tool for displaying an executable’s DLL dependencies.
* **DIE (Detect It Easy)** — A packer, compiler, and cryptor detection tool.

### Forensics & Incident Response

Digital Forensics involves the collection, analysis, and preservation of digital evidence from various sources like computers, networks, and storage devices. At the same time, Incident Response focuses on the detection, containment, eradication, and recovery from cyberattacks. The tools mentioned below are commonly used in this category.

* **Volatility** — RAM dump analysis framework for memory forensics.
* **Rekall** — Framework for memory forensics in incident response.
* **FTK Imager** — Disc image acquisition and analysis tools for forensic use.

### Network Analysis

Network Analysis includes different methods and techniques for studying and analysing networks to uncover patterns, optimize performance, and understand the underlying structure and behaviour of the network.

* **Wireshark** — Network protocol analyzer for traffic recording and examination.
* **Nmap** — A vulnerability detection and network mapping tool.
* **Netcat** — Read and write data across network connections with this helpful tool.

### File Analysis

File Analysis is a technique used to examine files for potential security threats and ensure proper file permissions.

* **FileInsight** — A program for looking through and editing binary files.
* **Hex Fiend** — Hex editor that is light and quick.
* **HxD** — Binary file viewing and editing with a hex editor.

### Scripting & Automation

Scripting and Automation involve using scripts such as PowerShell and Python to automate repetitive tasks and processes, making them more efficient and less prone to human error.

* **Python** — Mainly automation-focused on Python modules and tools.
* **PowerShell Empire** — Framework for PowerShell post-exploitation.

### Sysinternals Suite

The Sysinternals Suite is a collection of advanced system utilities designed to help IT professionals and developers manage, troubleshoot, and diagnose Windows systems.

* **Autoruns** — Shows what executables are configured to run during system boot-up.
* **Process Explorer** — Provides information about running processes.
* **Process Monitor** -Monitors and logs real-time process/thread activity.

**Which tool is an Open-source debugger for binaries in x64 and x32 formats?**

x64dbg

**What tool is designed to analyze and edit Portable Executable (PE) files?**

CFF Explorer

**Which tool is considered a sophisticated memory editor and process watcher?**

Process Hacker

**Which tool is used for Disc image acquisition and analysis for forensic use?**

FTK Imager

**What tool can be used to view and edit a binary file?**

HxD

### TASK 3 : Commonly Used Tools for Investigation: Overview

```
Tool                       Investigative Value  
Procmon                 A helpful tool for tracking system activity, especially regarding malware research, troubleshooting, and forensic investigations.  
  
Process Explorer        Allows you to see the Process of the Parent-child relationship, DLLs loaded, and its path.  
  
HxD                     Malicious files can be examined or altered via hex editing.  
  
Wireshark               Observing and investigating network traffic to look for unusual activity.  
  
CFF Explorer            Can generate file hashes for integrity verification, authenticate the source of system files, and validate their validity.  
  
PEStudio                Static analysis or studying executable file properties without running the files.  
  
FLOSS                   Extracts and de-obfuscates all strings from malware programs using advanced static analysis techniques.
```

### Process Monitor (Procmon)

A powerful Windows tool designed to help you record issues with your system’s apps. It lets you **see, record, and keep track of system and Windows file activity in real-time**. Process Monitor is helpful for **tracking system activity, especially regarding malware research, troubleshooting, and forensic investigations**. It keeps real-time tabs on the file system, registry, and thread/process activity.

### Process Explorer (Procexp)

Process Explorer offers in-depth insights into the active processes running on your computer. It allows you to delve into the inner workings of your system, providing a comprehensive list of currently running processes and their linked user accounts. If you’ve ever been curious about which program is accessing a specific file or folder, Process Explorer can provide us with that information.

### HxD

HxD is a quick and flexible hex editor for editing files, memory, and drives of any capacity. It can be applied to forensic investigation, data recovery, debugging, and exact manipulation of binary data. Important features include viewing file and memory contents, editing, searching, and comparing hex data.

### CFF Explorer

With the help of CFF Explorer’s comprehensive file information, investigators can generate file hashes for integrity verification, authenticate the source of system files, and validate their validity (e.g., by looking for unusual alterations). This is important to know when analyzing malware since dangerous code may be hidden in altered system files.

### Wireshark

Regarding network traffic analysis, Wireshark is a powerful tool that investigators may use to hunt down dubious connections, examine protocols, and spot possible assaults or data exfiltration. In this case, TLSv1.2 suggests a secure, encrypted connection that can mask harmful activity or safeguard legitimate traffic.

### PEStudio

Static analysis, or studying executable file properties without running the files, is done with PEstudio. This feature is beneficial in several situations. PEstudio offers a variety of information about a file without putting users in danger of execution, which aids in identifying executables that seem suspect or harmful.

### FLOSS

Using advanced static analysis techniques, the FLARE Obfuscated String Solver (FLOSS, formerly FireEye Labs Obfuscated String Solver) automatically extracts and de-obfuscates all strings from malware programs. Like strings.exe, it can enhance the basic static analysis of unknown binaries. FLOSS also includes more Python scripts in the script’s directory, which can be used to load the script’s output into other programs like IDA Pro or Binary Ninja.

**Which tool was formerly known as FLARE Obfuscated String Solver?**

FLOSS

**Which tool offers in-depth insights into the active processes running on your computer?**

Process Explorer

**By using the Process Explorer (procexp) tool, under what process can we find smss.exe?**

System

**Which powerful Windows tool is designed to help you record issues with your system’s apps?**

Procmon

**Which tool can be used for Static analysis or studying executable file properties without running the files?**

PEStudio

**Using the tool PEStudio to open the file cryptominer.bin in the Desktop\Sample folder, what is the sha256 value of the file?**

E9627EBAAC562067759681DCEBA8DDE8D83B1D813AF8181948C549E342F67C0E

**Using the tool PEStudio to open the file cryptominer.bin in the Desktop\Sample folder, how many functions does it have?**

102

**What tool can generate file hashes for integrity verification, authenticate the source of system files, and validate their validity?**

CFF Explorer

**Using the tool CFF Explorer to open the file possible\_medusa.txt in the Desktop\Sample folder, what is the MD5 of the file?**

646698572AFBBF24F50EC5681FEB2DB7

**Use the CFF Explorer tool to open the file possible\_medusa.txt in the Desktop\Sample folder. Then, go to the DOS Header Section. What is the e\_magic value of the file?**

5A4D

### TASK 4 : Analyzing Malicious Files !

**Using PEStudio, open the file windows.exe. What is the entropy value of the file windows.exe?**

7.999

**Using PEStudio, open the file windows.exe, then go to manifest (administrator section). What is the value under requestedExecutionLevel?**

requireAdministrator

**Which function allows the process to use the operating system’s shell to execute other processes?**

set\_UseShellExecute

**Which API starts with R and indicates that the executable uses cryptographic functions?**

RijndaelManaged

**What is the Imphash of cobaltstrike.exe?**

92EEF189FB188C541CBD83AC8BA4ACF5

**What is the defanged IP address to which the process cobaltstrike.exe is connecting?**

47[.]120[.]46[.]210

**What is the destination port number used by cobaltstrike.exe when connecting to its C2 IP Address?**

81

**During our analysis, we found a process called cobaltstrike.exe. What is the parent process of cobaltstrike.exe?**

explorer.exe

### TASK 5 : Conclusion

In this room, we introduced the **FlareVM**, or “**Forensics, Logic Analysis, and Reverse Engineering**”, a complete and customized environment designed for incident response, malware reverse engineering, and forensic analysis. We reviewed the installed tools and categorized them based on their purpose. We then discussed some standard tools widely used during an investigation, such as PEStudio, CFF Explorer, Process Monitor, and Process Explorer. Lastly, we acquired hands-on experience in analyzing malicious programs or files using these tools.

**Fantastic Room!**

No Answer Needed

https://buymeacoffee.com/jawstar

**Happy hacking :)**

**🧑‍💻 like , share , comment**

**&**

**FOLLOW FOR MORE …….**

[Jawstar](https://medium.com/u/c42b7c126e68)
