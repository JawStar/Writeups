---
title: "Advent of Cyber 2024{DAY-14}Tryhackme Answers"
date: 2024-12-17
platform: tryhackme
source_file: "2024-12-17_Advent-of-Cyber-2024-DAY-14-Tryhackme-Answers-a446e8cacb3f.html"
---

---

### Advent of Cyber 2024{DAY-14}Tryhackme Answers

**The Story**

![](https://cdn-images-1.medium.com/max/800/0*sg8JHmLHDi1XnjKr.png)

*“It’s the Mayor” said the Glitch, he said it while sighing,*

*“The people of Wareville, their browsing he’s spying!”*

*“That sounds like him”, McSkidy then said,*

*“Back to work then”, while scratching her head.*

It’s a quiet morning in the town of Wareville. A wholesome town where cheer and tech come together. McSkidy is charged to protect the GiftScheduler, the service elves use to schedule all the presents to be delivered in Wareville. She assigned Glitch to the case to make sure the site is secure for G-Day (Gift Day). In the meantime, Mayor Malware works tirelessly, hoping to not only ruin SOC-mas by redirecting presents to the wrong addresses but also to ensure that Glitch is blamed for the attack. After all, Glitch’s warnings about the same vulnerabilities Mayor Malware is exploiting make the hacker an easy scapegoat.

### Learning Objectives

In today’s task you will learn about:

* Self-signed certificates
* Man-in-the-middle attacks
* Using Burp Suite proxy to intercept traffic

### Certified to Sleigh

We hear a lot about certificates and their uses, but let’s start dissecting what a certificate is:

* **Public key**: At its core, a certificate contains a public key, part of a pair of cryptographic keys: a public key and a private key. The public key is made available to anyone and is used to encrypt data.
* **Private key**: The private key remains secret and is used by the website or server to decrypt the data.
* **Metadata**: Along with the key, it includes metadata that provides additional information about the certificate holder (the website) and the certificate. You usually find information about the Certificate Authority (CA), subject (information about the website, e.g. [www.meow.thm),](http://www.meow.thm%29,) a uniquely identifiable number, validity period, signature, and hashing algorithm.

### Sign Here, Trust Me

So what is a Certificate Authority (CA)?

A CA is a trusted entity that issues certificates; for example, GlobalSign, Let’s Encrypt, and DigiCert are very common ones. The browser trusts these entities and performs a series of checks to ensure it is a trusted CA. Here is a breakdown of what happens with a certificate:

* **Handshake**: Your browser requests a secure connection, and the website responds by sending a certificate, but in this case, it only requires the public key and metadata.
* **Verification:** Your browser checks the certificate for its validity by checking if it was issued by a trusted CA. If the certificate hasn’t expired or been tampered with, and the CA is trusted, then the browser gives the green light. There are different types of checks you can do; check them [here](https://www.sectigo.com/resource-library/dv-ov-ev-ssl-certificates).
* **Key exchange**: The browser uses the public key to encrypt a session key, which encrypts all communications between the browser and the website.
* **Decryption**: The website (server) uses its private key to decrypt the session key, which is [symmetric](https://deviceauthority.com/symmetric-encryption-vs-asymmetric-encryption/). Now that both the browser and the website share a secret key (session key), we have established a secure and encrypted communication!

Ever wonder what makes HTTPS be S (secure)? Thanks to certificates, we can now have authentication, encryption, and data integrity.

**Self-Signed Certificates vs. Trusted CA Certificates**

The process of acquiring a certificate with a CA is long, you create the certificate, and send it to a CA to sign it for you. If you don’t have tools and automation in place, this process can take weeks. Self-signed certificates are signed by an entity usually the same one that authenticates. For example, Wareville owns the GiftScheduler site, and if they create a certificate and sign it with Wareville as a CA, that becomes a self-signed certificate.

* **Browsers** generally do not trust self-signed certificates because there is no third-party verification. The browser has no way of knowing if the certificate is authentic or if it’s being used for malicious purposes (like a **man-in-the-middle attack**).
* **Trusted CA certificates**, on the other hand, are verified by a CA, which acts as a trusted third party to confirm the website’s identity.

CA-issued certificates sometimes take a long time; if you want to test a development environment, it can make sense to use self-signed certificates. Ideally, this is an internal, air-gapped environment with no connection to the public Internet. Otherwise, it defeats the purpose of a certificate: the entire system of secure communication relies on the fact that both parties (the browser and the server) can trust the data being exchanged and that no one in the middle can intercept or modify it without detection.

![](https://cdn-images-1.medium.com/max/800/0*fum6uWNtEkDqR-7V.png)
> **Answer the questions below**

Q1) What is the name of the CA that has signed the Gift Scheduler certificate?

Answers :- ***THM***

![](https://cdn-images-1.medium.com/max/800/0*UBu8UgobvsbkX7xu.png)

Q2)Look inside the POST requests in the HTTP history. What is the password for the `snowballelf` account?  
Answers :- ***c4rrotn0s3***

![](https://cdn-images-1.medium.com/max/800/0*XjmKF-d6-leD6lwi.png)

Q3)Use the credentials for any of the elves to authenticate to the Gift Scheduler website. What is the flag shown on the elves’ scheduling page?  
Answers :- ***THM{AoC-3lf0nth3Sh3lf}***

![](https://cdn-images-1.medium.com/max/800/0*_H_2-FeNarZjQ25U.png)

Q4) What is the password for Marta May Ware’s account?  
Answers :- ***H0llyJ0llySOCMAS!***

![](https://cdn-images-1.medium.com/max/800/0*9PSunXc7wo42Ho0c.png)

Q5) Mayor Malware finally succeeded in his evil intent: with Marta May Ware’s username and password, he can finally access the administrative console for the Gift Scheduler. G-Day is cancelled!  
What is the flag shown on the admin page?  
Answers :- ***THM{AoC-h0wt0ru1nG1ftD4y}***

![](https://cdn-images-1.medium.com/max/800/0*7J4bQO4cAhPUxLxd.png)

Q6)If you enjoyed this task, feel free to check out the [Burp Suite](https://tryhackme.com/module/learn-burp-suite) module.  
Answers :- ***No answer needed***

![](https://cdn-images-1.medium.com/max/800/0*5fUpoZUYjZiOMEQT.png)

Keep Support Guys… Hit On Clap More Than 10 times..

***Happy hacking! 🧑‍💻 Follow for more walkthrough…***

[Jawstar](https://medium.com/u/c42b7c126e68)
