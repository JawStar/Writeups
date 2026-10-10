---
title: "Gobuster: The Basics writeup | by jawstar"
date: 2024-10-26
platform: hardware-ot-ics-scada
source_file: "2024-10-26_Gobuster--The-Basics-writeup---by-jawstar-5ff06bae078b.html"
---

---

### Gobuster: The Basics writeup | by jawstar

![](https://cdn-images-1.medium.com/max/800/1*bD4wNf4tCB0Rf8yt0JlXfg.png)

### **TASK : 1**

This room focuses on the offensive security tool Gobuster, often used for reconnaissance. We will explore how this tool can enumerate web directories, subdomains, and virtual hosts. This room will follow a hands-on approach where you can follow along with the commands explained and execute them yourself to see the results.

### Learning Objectives

* Understanding the basics of enumeration
* How to use Gobuster to enumerate web directories and files
* How to use Gobuster to enumerate subdomains
* How to use Gobuster to enumerate virtual hosts
* How to use a wordlist

I’m ready to learn about Gobuster!

| no need to answer

I assigned the MACHINE\_IP to the DNS variable in the /etc/systemd/resolved.conf file and restarted the systemd service.

| no need to answer

**TASK : 2**

Gobuster is an open-source offensive tool written in Golang. It enumerates web directories, DNS subdomains, vhosts, Amazon S3 buckets, and Google Cloud Storage by brute force, using specific wordlists and handling the incoming responses. Many security professionals use this tool for penetration testing, bug bounty hunting, and cyber security assessments. Looking at the phases of ethical hacking, we can place Gobuster between the reconnaissance and scanning phases.

Before exploring Gobuster, let’s briefly discuss the concepts of enumeration and Brute Force.

**Enumeration**

Enumeration is the act of listing all the available resources, whether they are accessible or not. For example, Gobuster enumerates web directories.

**Brute Force**

Brute force is the act of trying every possibility until a match is found. It is like having ten keys and trying them all on a lock until one fits. Gobuster uses wordlists for this purpose.

### Gobuster: Overview

Gobuster is included by default in distributions like Kali Linux. Let’s start by looking at Gobuster’s help page. This help page gives us a good overview of its functionalities and options.

Enter the following command: `gobuster --help`. You should get the help page for the Gobuster tool as shown below:

```
root@tryhackme:~# gobuster --help  
Usage:  
  gobuster [command]  
  
Available Commands:  
  completion  Generate the autocompletion script for the specified shell  
  dir         Uses directory/file enumeration mode  
  dns         Uses DNS subdomain enumeration mode  
  fuzz        Uses fuzzing mode. Replaces the keyword FUZZ in the URL, Headers and the request body  
  gcs         Uses gcs bucket enumeration mode  
  help        Help about any command  
  s3          Uses aws bucket enumeration mode  
  tftp        Uses TFTP enumeration mode  
  version     shows the current version  
  vhost       Uses VHOST enumeration mode (you most probably want to use the IP address as the URL parameter)  
  
Flags:  
      --debug                 Enable debug output  
      --delay duration        Time each thread waits between requests (e.g. 1500ms)  
  -h, --help                  help for gobuster  
      --no-color              Disable color output  
      --no-error              Don't display errors  
  -z, --no-progress           Don't display progress  
  -o, --output string         Output file to write results to (defaults to stdout)  
  -p, --pattern string        File containing replacement patterns  
  -q, --quiet                 Don't print the banner and other noise  
  -t, --threads int           Number of concurrent threads (default 10)  
  -v, --verbose               Verbose output (errors)  
  -w, --wordlist string       Path to the wordlist. Set to - to use STDIN.  
      --wordlist-offset int   Resume from a given position in the wordlist (defaults to 0)  
  
Use "gobuster [command] --help" for more information about a command.
```

### TASK : 2

```
gobuster dir -u "http://www.example.thm/" -w /usr/share/wordlists/dirb/small.txt -t 64
```

* `gobuster dir` indicates that we will use the directory and file enumeration mode.
* `-u "http://www.example.thm/"` tells Gobuster that the target URL is <http://example.thm/>.
* `-w /usr/share/wordlists/dirb/small.txt` directs Gobuster to use the *small.txt* wordlist to brute force the web directories. Gobuster will use each entry in the wordlist to form a new URL and send a GET request to that URL. If the first entry of the wordlist were images, Gobuster would send a GET request to <http://example.thm/images/.>
* `-t 64` sets the number of threads Gobuster will use to 64. This improves the performance drastically.

Now that we have a quick overview of Gobuster, let’s explore the different modes and their use cases in the following tasks.

**What flag to we use to specify the target URL?**

* -u

**What command do we use for the subdomain enumeration mode?**

* dns

### **TASK : 3**

### How To Use dir Mode

To run Gobuster in `dir` mode, use the following command format:

```
gobuster dir -u "http://www.example.thm" -w /path/to/wordlist
```

Notice that the command also includes the flags `-u` and `-w`, in addition to the `dir` keyword. These two flags are required for the Gobuster directory enumeration to work. Let us look at a practical example of how to enumerate directories and files with Gobuster `dir` mode:

```
gobuster dir -u "http://www.example.thm" -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -r
```

This command scans all the directories located at [*www.example.thm*](http://www.example.thm) using the wordlist *directory-list-2.3-medium.txt*. Let’s look a bit closer at each part of the command:

* `gobuster dir`: Configures Gobuster to use the directory and file enumeration mode.
* `-u http://www.example.thm`[:](http://www.example.thm:)
* The URL will be the base path where Gobuster starts looking. So, the URL above is using the root web directory. For example, in a typical Apache installation on Linux, this is `/var/www/html`. So if you have a “resources” directory and you want to enumerate that directory, you’d set the URL as `http://www.example.thm/resources`. You can also think of this like `http://www.example.thm/path/to/folder`[.](http://www.example.thm/path/to/folder.)
* The URL must contain the protocol used, in this case, HTTP. This is important and required. If you pass the wrong protocol, the scan will fail.
* In the host part of the URL, you can either fill in the IP or the HOSTNAME. However, it is important to mention that when using the IP, you may target a different website than intended. A web server can host multiple websites using one IP (this technique is also called virtual hosting). Use the HOSTNAME if you want to be sure.
* Gobuster does not enumerate recursively. So, if the results show a directory path you are interested in, you will have to enumerate that specific directory.
* `-w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt` configures Gobuster to use the *directory-list-2.3-medium.txt* wordlist to enumerate. Each entry of the wordlist is appended to the configured URL.
* `-r` configures Gobuster to follow the redirect responses received from the sent requests. If a status code 301 was received, Gobuster will navigate to the redirect URL that is included in the response.

Let’s look at a second example where we use the `-x` flag to specify what type of files we want to enumerate:

```
gobuster dir -u "http://www.example.thm" -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x .php,.js
```

This command will look for directories located at <http://example.thm> using the wordlist *directory-list-2.3-medium.txt*. In addition to directory listing, this command also lists all the files that have a .php or .js extension.

**Which flag do we have to add to our command to skip the TLS verification? Enter the long flag notation.**

— no-tls-validation

**Enumerate the directories of** [**www.offensivetools.thm.**](http://www.offensivetools.thm.) **Which directory catches your attention?**

secret

**Continue enumerating the directory found in question 2. You will find an interesting file there with a .js extension. What is the flag found in this file?**

THM{ReconWasASuccess}

### **TASK : 5**

### How to Use dns Mode

To run Gobuster in dns mode, use the following command syntax:  
`gobuster dns -d example.thm -w /path/to/wordlist`

Notice that the command also includes the flags `-d` and `-w`, in addition to the `dns` keyword. These two flags are required for the Gobuster subdomain enumeration to work. Let us look at an example of how to enumerate subdomains with Gobuster dns mode:

`gobuster dns -d example.thm -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt`

* `gobuster dns` enumerates subdomains on the configured domain.
* `-d example.thm` sets the target to the *example.thm* domain.
* `-w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt` sets the wordlist to s*ubdomains-top1million-5000.txt*. Gobuster uses each entry of this list to construct a new DNS query. If the first entry of this list is 'all', the query would be *all.example.thm.*

```
root@tryhackme:~# gobuster dns -d example.thm -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt   
===============================================================  
Gobuster v3.6  
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)  
===============================================================  
[+] Domain:     example.thm  
[+] Threads:    10  
[+] Timeout:    1s  
[+] Wordlist:   /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt  
===============================================================  
Starting gobuster in DNS enumeration mode  
===============================================================  
Found: www.example.thm  
                                                                                                                                                              
Found: shop.example.thm  
                                                                                                                                                              
Found: academy.example.thm  
                                                                                                                                                              
Found: primary.example.thm  
                                                                                                                                                              
Progress: 4989 / 4990 (99.98%)  
===============================================================  
Finished  
===============================================================
```

**Apart from the dns keyword and the -w flag, which shorthand flag is required for the command to work?**

-d

**Use the commands learned in this task, how many subdomains are configured for the offensivetools.thm domain?**

4

### TASK : 6

### How To Use vhost Mode

To run Gobuster in `vhost` mode, type the following command:

```
gobuster vhost -u "http://example.thm" -w /path/to/wordlist
```

Notice that the command also includes the flags `-u` and `-w`, in addition to the `vhost` keyword. These two flags are required for the Gobuster vhost enumeration to work. Let us look at a practical example of how to enumerate virtual hosts with Gobuster `vhost` mode:

AttackBox Terminal

```
root@tryhackme:~# gobuster vhost -u "http://MACHINE_IP" --domain example.thm -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt --append-domain --exclude-length 250-320   
===============================================================  
Gobuster v3.6  
by OJ Reeves (@TheColonial) &amp; Christian Mehlmauer (@firefart)  
===============================================================  
[+] Url:              http://10.10.94.214  
[+] Method:           GET  
[+] Threads:          10  
[+] Wordlist:         /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt  
[+] User Agent:       gobuster/3.6  
[+] Timeout:          10s  
[+] Append Domain:    true  
[+] Exclude Length:   250,254,263,274,283,293,294,299,253,261,269,277,285,290,300,257,258,270,278,282,291,252,260,264,268,271,279,280,289,251,256,262,265,272,297,287,292,295,255,266,276,284,286,296,267,273,275,281,288,259,298  
===============================================================  
Starting gobuster in VHOST enumeration mode  
===============================================================  
Found: blog.example.thm Status: 200 [Size: 1493]  
Found: shop.example.thm Status: 200 [Size: 2983]  
Found: www.example.thm Status: 200 [Size: 84352]  
Found: chelyabinsk-rnoc-rr02.backbone.example.thm Status: 404 [Size: 304]  
Found: academy.example.thm Status: 200 [Size: 434]  
Progress: 4989 / 4990 (99.98%)  
===============================================================  
Finished  
===============================================================
```

Gobuster will send multiple requests, each time changing the `Host:` part of the request. The value of `Host:` in this example is *www.example.thm*. We can break this down into three parts:

* `www`: This is the subdomain. This is the part that Gobuster will fill in with each entry of the configured wordlist.
* `.example`: This is the second-level domain. You can configure this with the `--domain` flag (this needs to be configured together with the top-level domain).
* `.thm`: This is the top-level domain. You can configure this with the `--domain` flag (this needs to be configured together with the second-level domain).

Now that we know how Gobuster sends its request, let’s break down the command and examine each flag more closely:

* `gobuster vhost` instructs Gobuster to enumerate virtual hosts.
* `-u "http://MACHINE_IP"` sets the URL to browse to MACHINE\_IP.
* `-w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt` configures Gobuster to use the *subdomains-top1million-5000.txt* wordlist. Gobuster appends each entry in the wordlist to the configured domain. If no domain is explicitly configured with the `--domain` flag, Gobuster will extract it from the URL. E.g., *test.example.thm*, *help.example.thm*, etc. If any subdomains are found, Gobuster will report them to you in the terminal.
* `--domain example.thm` sets the top- and second-level domains in the `Hostname:` part of the request to *example.thm.*
* `--append-domain` appends the configured domain to each entry in the wordlist. If this flag is not configured, the set hostname would be *www*, *blog*, etc. This will cause the command to work incorrectly and display false positives.
* `--exclude-length` filters the responses we get from the sent web requests. With this flag, we can filter out the false positives. If you run the command without this flag, you will notice you will get a lot of false positives like "Found: Orion.example.thm Status: 404 [Size: 279]" or "Found: pm.example.thm Status: 404 [Size: 276]". These false positives typically have a similar response size, so we can use this to filter out most false positives. We expect to get a 200 OK response back to have a true positive. There are, however, exceptions, but it is not in the scope of this room to go deeper into these.

**Use the commands learned in this task to answer the following question: How many vhosts on the offensivetools.thm domain reply with a status code 200?**

4

### **TASK : 7**

#### CONCLUSION:

We have covered three different modes of the Gobuster tool:

* `dns` mode: enumerates dns subdomains.
* `dir` mode: enumerates directories.
* `vhost` mode: enumerates virtual hosts.

For each mode, we covered the required flags to configure and additional optional flags that fine-tune the desired results.

We have highlighted the difference between virtual hosts and subdomains and the way Gobuster scans for these:

* `dns` mode uses the DNS services to scan for subdomains using the configured domain and wordlist.
* `vhost` mode sends web requests using the configured URL and wordlist.

FOLLOW ME FOR MORE AMAZING AND EDUCATIONAL CONTENT RELATED TO PENETRATION TESTING .

**HAPPY HACKING !!!!!**
