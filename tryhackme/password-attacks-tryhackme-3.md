---
title: "Password Attacks  Tryhackme"
date: 2025-03-16
platform: tryhackme
source_file: "2025-03-16_Password-Attacks--Tryhackme-30828d967602.html"
---

---

### Password Attacks Tryhackme

Notes : Part 4

![](https://cdn-images-1.medium.com/max/800/1*hrpoWXL6WC80fzQ4jlUtEA.png)

### Offline Attacks #2

#### { Rule-Based }

### Rule-Based attacks

Rule-Based attacks are also known as hybrid attacks. Rule-Based attacks assume the attacker knows something about the password policy. Rules are applied to create passwords within the guidelines of the given password policy and should, in theory, only generate valid passwords. Using pre-existing wordlists may be useful when generating passwords that fit a policy — for example, manipulating or ‘mangling’ a password such as ‘password’: p@ssword, Pa$$word, Passw0rd, and so on.

For this attack, we can expand our wordlist using either hashcat or John the ripper. However, for this attack, let’s see how John the ripper works. Usually, John the ripper has a config file that contains rule sets, which is located at /etc/john/john.conf or /opt/john/john.conf depending on your distro or how john was installed. You can read /etc/john/john.conf and look for List.Rules to see all the available rules:

```
user@machine$ cat /etc/john/john.conf|grep "List.Rules:" | cut -d"." -f3 | cut -d":" -f2 | cut -d"]" -f1 | awk NF  
JumboSingle  
o1  
o2  
i1  
i2  
o1  
i1  
o2  
i2  
best64  
d3ad0ne  
dive  
InsidePro  
T0XlC  
rockyou-30000  
specific  
ShiftToggle  
Split  
Single  
Extra  
OldOffice  
Single-Extra  
Wordlist  
ShiftToggle  
Multiword  
best64  
Jumbo  
KoreLogic  
T9
```

We can see that we have many rules that are available for us to use. We will create a wordlist with only one password containing the string tryhackme, to see how we can expand the wordlist. Let’s choose one of the rules, the best64 rule, which contains the best 64 built-in John rules, and see what it can do!

```
user@machine$ john --wordlist=/tmp/single-password-list.txt --rules=best64 --stdout | wc -l  
Using default input encoding: UTF-8  
Press 'q' or Ctrl-C to abort, almost any other key for status  
76p 0:00:00:00 100.00% (2021-10-11 13:42) 1266p/s pordpo  
76
```

— wordlist= to specify the wordlist or dictionary file.

— rules to specify which rule or rules to use.

— stdout to print the output to the terminal.

|wc -l to count how many lines John produced.

By running the previous command, we expand our password list from 1 to 76 passwords. Now let’s check another rule, one of the best rules in John, KoreLogic. KoreLogic uses various built-in and custom rules to generate complex password lists. For more information, please visit this website [here](https://contest-2010.korelogic.com/rules.html). Now let’s use this rule and check whether the Tryh@ckm3 is available in our list!

```
user@machine$ john --wordlist=single-password-list.txt --rules=KoreLogic --stdout |grep "Tryh@ckm3"  
Using default input encoding: UTF-8  
Press 'q' or Ctrl-C to abort, almost any other key for status  
Tryh@ckm3  
7089833p 0:00:00:02 100.00% (2021-10-11 13:56) 3016Kp/s tryhackme999999
```

The output from the previous command shows that our list has the complex version of tryhackme, which is Tryh@ckm3. Finally, we recommend checking out all the rules and finding one that works the best for you. Many rules apply combinations to an existing wordlist and expand the wordlist to increase the chance of finding a valid password!

### Custom Rules

John the ripper has a lot to offer. For instance, we can build our own rule(s) and use it at run time while john is cracking the hash or use the rule to build a custom wordlist!

Let’s say we wanted to create a custom wordlist from a pre-existing dictionary with custom modification to the original dictionary. The goal is to add special characters (ex: !@#$\*&) to the beginning of each word and add numbers 0–9 at the end. The format will be as follows:

[symbols]word[0–9]

We can add our rule to the end of john.conf:

```
user@machine$ sudo vi /etc/john/john.conf   
[List.Rules:THM-Password-Attacks]   
Az"[0-9]" ^[!@#$]
```

[List.Rules:THM-Password-Attacks] specify the rule name THM-Password-Attacks.

Az represents a single word from the original wordlist/dictionary using -p.

“[0–9]” append a single digit (from 0 to 9) to the end of the word. For two digits, we can add “[0–9][0–9]” and so on.

^[!@#$] add a special character at the beginning of each word. ^ means the beginning of the line/word. Note, changing ^ to $ will append the special characters to the end of the line/word.

Now let’s create a file containing a single word password to see how we can expand our wordlist using this rule.

```
user@machine$ echo "password" > /tmp/single.lst
```

We include the name of the rule we created in the John command using the — rules option. We also need to show the result in the terminal. We can do this by using — stdout as follows:

```
user@machine$ john --wordlist=/tmp/single.lst --rules=THM-Password-Attacks --stdout   
Using default input encoding: UTF-8   
!password0   
@password0   
#password0   
$password0
```

Now it’s practice time to create your own rule.

Answer the questions below :

What syntax would you use to create a rule to produce the following: “S[Word]NN where N is Number and S is a symbol of !@?

*Az”[0–9][0–9]” ^[!@]*
