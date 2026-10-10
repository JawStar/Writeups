---
title: "REMnux: Getting Started Tryhackme Write up"
date: 2024-11-05
platform: tryhackme
source_file: "2024-11-05_REMnux--Getting-Started-Tryhackme-Write-up-855ea72cb34f.html"
---

---

### REMnux: Getting Started Tryhackme Write up

Learn how you can use the tools inside the REMnux VM.

For free users :

<https://jawstar.medium.com/remnux-getting-started-tryhackme-write-up-855ea72cb34f?sk=17083f3703b9ead15daa37e149f2ef86>

![](https://cdn-images-1.medium.com/max/800/0*1fcuEne3lmTyvdZ7)

### Task 1 : Introduction

Analysing potentially malicious software can be daunting, especially when this is part of an ongoing security incident. This analysis puts much pressure on the analyst. Most of the time, the results must be as accurate as possible, and analysts use different tools, machines, and environments to achieve this. In this room, we will use the REMnux VM.

The REMnux VM is a specialised Linux distro. It already includes tools like Volatility, YARA, Wireshark, oledump, and INetSim. It also provides a sandbox-like environment for dissecting potentially malicious software without risking your primary system. It’s your lab set up and ready to go without the hassle of manual installations.

### Learning Objectives

* Explore the tools inside the REMnux VM
* Learn how to use tools to analyse potentially malicious documents effectively
* Learn how to simulate a fake network to aid in the analysis
* Be familiar with the tools used to analyse memory images

**Proceed with the next tasks to learn more!**

No Answer Needed

### Task 2 : Machine Access

The machine will start in a split-screen view and might take 2–3 minutes to boot up. It is expected to have the an output similar to the image below.

![](https://cdn-images-1.medium.com/max/800/0*dvT7CwHbWKTPxR3r.png)

If the machine does not appear, click the blue Show Split View button at the top of the page.

Please note that almost all the files we will use in this room are located in the **Desktop/tasks** directory.

**I’m excited to learn more about the tools inside the REMnux VM!**

No Answer Needed

### Task 3 : File Analysis

`oledump.py` **to conduct static analysis on a potentially malicious Excel document.**

`Oledump.py` **is a Python tool that analyzes OLE2 files, commonly called Structured Storage or Compound File Binary Format. OLE stands for Object Linking and Embedding, a proprietary technology developed by Microsoft. OLE2 files are typically used to store multiple data types, such as documents, spreadsheets, and presentations, within a single file. This tool is handy for extracting and examining the contents of OLE2 files, making it a valuable resource for forensic analysis and malware detection.**

#### What Python tool analyzes OLE2 files, commonly called Structured Storage or Compound File Binary Format?

oledump.py

#### What tool parameter we used in this task allows you to select a particular data stream of the file we are using it with?

-s

#### During our analysis, we were able to decode a PowerShell script. What command is commonly used for downloading files from the internet?

Invoke-WebRequest

#### What file was being downloaded using the PowerShell script?

Doc-3737122pdf.exe

#### During our analysis of the PowerShell script, we noted that a file would be downloaded. Where will the file being downloaded be stored?

$TempFile

#### Using the tool, scan another file named **possible\_malicious.docx** located in the `/home/ubuntu/Desktop/tasks/agenttesla/` directory. How many data streams were presented for this file?

16

#### Using the tool, scan another file named **possible\_malicious.docx** located in the `/home/ubuntu/Desktop/tasks/agenttesla/` directory. At what data stream number does the tool indicate a macro present?

8

### Task 4 : Fake Network to Aid Analysis

During dynamic analysis, it is essential to observe the behaviour of potentially malicious software — especially its network activities. There are many approaches to this. We can create a whole infrastructure, a virtual environment with different core machines, and more. Alternatively, there is a tool inside our REMnux VM called **INetSim: Internet Services Simulation Suite!**

We will utilize **INetSim’s** features to simulate a real network in this task.

#### **Download and scan the file named flag.txt from the terminal using the command sudo wget** [**https://MACHINE\_IP/flag.txt**](https://MACHINE_IP/flag.txt)**— no-check-certificate. What is the flag?**

Tryhackme{remnux\_edition}

#### **After stopping the inetsim, read the generated report. Based on the report, what URL Method was used to get the file flag.txt?**

GET

### Task 5 : Memory Investigation: Evidence Preprocessing

**One of the most common investigative practices in Digital Forensics is the preprocessing of evidence. This involves running tools and saving the results in text or JSON format. The analyst often relies on tools such as Volatility when dealing with memory images as evidence. This tool is already included in the REMnux VM. Volatility commands are executed to identify and extract specific artefacts from memory images, and the resulting output can be saved to text files for further examination. Similarly, we can run a script involving the tool’s different parameters to preprocess the acquired evidence faster.**

### Preprocessing With Volatility

**In this task, we will use the Volatility 3 tool version. However, we won’t go deep into the investigation and analysis part of the result — we could write a whole book about it! Instead, we want you to be familiar with and get a feel for how the tool works. Run the command as instructed and wait for the result to show. Each plugin takes 2–3 minutes to show the output.**

**Here are some of the parameters or plugins we will use. We will focus on Windows plugins.**

* **windows.pstree.PsTree**
* **windows.pslist.PsList**
* **windows.cmdline.CmdLine**
* **windows.filescan.FileScan**
* **windows.dlllist.DllList**
* **windows.malfind.Malfind**
* **windows.psscan.PsScan**

### PsTree

This plugin lists processes in a tree based on their parent process ID.

Terminal

```
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ vol3 -f wcry.mem windows.pstree.PsTree  
Volatility 3 Framework 2.0.0  
Progress:  100.00		PDB scanning finished
```

### PsList

This plugin is used to list all currently active processes in the machine.

Terminal

```
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ vol3 -f wcry.mem windows.pslist.PsList  
Volatility 3 Framework 2.0.0  
Progress:  100.00		PDB scanning finished
```

### CmdLine

This plugin is used to list process command line arguments.

Terminal

```
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ vol3 -f wcry.mem windows.cmdline.CmdLine  
Volatility 3 Framework 2.0.0  
Progress:  100.00		PDB scanning finished
```

### FileScan

This plugin scans for file objects in a particular Windows memory image. The results have more than 1,400 lines.

Terminal

```
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ vol3 -f wcry.mem windows.filescan.FileScan  
Volatility 3 Framework 2.0.0  
Progress:  100.00		PDB scanning finished
```

### DllList

This plugin lists the loaded modules in a particular Windows memory image. Due to a text limitation, this one won’t have a View Results icon.

Terminal

```
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ vol3 -f wcry.mem windows.dlllist.DllList  
Volatility 3 Framework 2.0.0  
Progress:  100.00		PDB scanning finished
```

### PsScan

This plugin is used to scan for processes present in a particular Windows memory image.

Terminal

```
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ vol3 -f wcry.mem windows.psscan.PsScan  
Volatility 3 Framework 2.0.0  
Progress:  100.00		PDB scanning finished
```

### Malfind

This plugin is used to lists process memory ranges that potentially contain injected code. There won’t be any View Results icon for this one due to text limitation.

Terminal

```
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ vol3 -f wcry.mem windows.malfind.Malfind  
Volatility 3 Framework 2.0.0  
Progress:  100.00		PDB scanning finished
```

### Preprocessing With Strings

Next, we will preprocess the memory image with the Linux strings utility. We will extract the **ASCII**, 16-bit **little-endian**, and 16-bit **big-endian** strings. See the command below.

Terminal

```
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ strings wcry.mem > wcry.strings.ascii.txt  
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ strings -e l  wcry.mem > wcry.strings.unicode_little_endian.txt  
root@MACHINE_IP:/home/ubuntu/Desktop/tasks/Wcry_memory_image$ strings -e b  wcry.mem > wcry.strings.unicode_big_endian.txt
```

The strings command extracts printable ASCII text. The `-e l` option tells strings to extract 16-bit little endian strings. The `-e b` option tells strings to extract 16-bit big endian strings. All three string formats can provide useful information about the system under investigation.

You should have the same output below.

![](https://cdn-images-1.medium.com/max/800/0*--6XiKOtQRZVbybZ.png)

Now, this is ready for analysis, but remember, our goal here in this task is to preprocess the evidence so that any analyst who will investigate this can expedite searches and analysis.

#### What plugin lists processes in a tree based on their parent process ID?

PsTree

#### What plugin is used to list all currently active processes in the machine?

PsList

#### What Linux utility tool can extract the ASCII, 16-bit little-endian, and 16-bit big-endian strings?

strings

#### By running vol3 with the Malfind parameter, what is the first (1st) process identified suspected of having an injected code?

csrss.exe

#### Continuing from the previous question (Question 6), what is the second (2nd) process identified suspected of having an injected code?

winlogon.exe

#### By running vol3 with the DllList parameter, what is the file path or directory of the binary @WanaDecryptor@.exe?

C:\Intel\ivecuqmanpnirkt615

### Task 6 : Conclusion

**In this room, we had a hands-on introduction to the REMnux VM, where we could use tools like oledump.py for file analysis. We also created a fake network using INetSim and preprocessed a memory capture using volatility and strings. All of these tools are included just inside the REMNux VM! Still, we haven’t used many of its tools yet, as we could create different rooms for each to learn and become familiar with it.**

**On a side note, REMnux Distro mainly focuses on analyses of potentially malicious programs, documents or files, memory, and similar objects.**

Fantastic room indeed!

No Answer Needed

buymeacoffee.com/jawstar\_9999

HAPPY HACKING :)
