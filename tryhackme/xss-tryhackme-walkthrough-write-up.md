---
title: "XSS Tryhackme Walkthrough Write up"
date: 2024-11-20
platform: tryhackme
source_file: "2024-11-20_XSS-Tryhackme-Walkthrough-Write-up-6cb8b6dba5fa.html"
---

---

### XSS Tryhackme Walkthrough Write up

![](https://cdn-images-1.medium.com/max/800/1*gdAOVUp02VCekvlmO7n3jA.png)![](https://cdn-images-1.medium.com/max/800/0*EWGy6kScrmGL1K2A)

### Overview:

Cross-Site Scripting (XSS) is a prevalent web security vulnerability that attackers exploit to inject malicious scripts into seemingly legitimate websites. These scripts then execute within the victim’s browser, potentially compromising their data, hijacking sessions, or even redirecting them to malicious websites.

### Answers for this room

### Task 1 : Introduction

**1)I completed the Intro to cross site scripting room.**

**Ans**. No Answer needed

### Task 2 : Terminology and Types

**2)Which XSS vulnerability relies on saving the malicious script?**

**Ans**. stored xss

**3)Which prevalent XSS vulnerability executes within the browser session without being saved?**

**Ans**. reflected xss

**4)What does DOM stand for?**

**Ans**. document object model

### Task 3 : Causes and Implications

**5)Based on the leading causes of XSS vulnerabilities, what operations should be performed on the user input?**

**Ans**. validation and sanitization

**6)To prevent XSS vulnerabilities, what operations should be performed on the data before it is output to the user?**

**Ans**. encoding

### Task 4 : Reflected XSS

**7)Which one of the following characters do you expect to be encoded?**`.`**,**`,`**,**`;`**,** `&`**, or** `#`**?**

**Ans**. &

**8)Which one of the following characters do you expect to be encoded?** `+`**,** `-`**,** `*`**,** `<`**,** `=`**, or** `^`**?**

**Ans**. <

**9)Which function can we use in JavaScript to replace (unsafe) special characters with HTML entities?**

**Ans**. escapeHtml()

**10)Which function did we use in PHP to replace HTML special characters?**

**Ans**. htmlspecialchars()

### Task 5 : Vulnerable Web Application 1

**11)What type of vulnerability is it?**

**Ans**. reflected xss

**12)Use the above exploit against the attached VM. What do you see on the second line after** `go to`**?**

**Ans**. /?h#cc

### Task 6 : Stored XSS

**13)What is the name of the JavaScript function we used to sanitize the user input before saving it?**

**Ans**. sanitizeHTML()

**14)Which method did we call in ASP.Net C# to sanitize user input?**

**Ans**. HttpUtility.HtmlEncode()

### Task 7 : Vulnerable Web Application 2

**15)What type of vulnerability is it?**

**Ans**. stored xss

**16)Go to the contact page and submit the following message** `<script>alert(document.cookie)</script>`**. Next, log in as the Receptionist. What is the name of the key from the third displayed key-value pair?**

**Ans**. PHPSESSID

### Task 8 : DOM-Based XSS

**17)DOM-based XSS is reflected via the server. (Yea/Nay)**

**Ans**. nay

**18)DOM-based XSS happens only on the client side. (Yea/Nay)**

**Ans**. yea

**19)Which JavaScript method was used to escape the user input?**

**Ans**. encodeURIComponent()

### Task 9 : Context and Evasion

**20)Which character does** `&#x09` **represent?**

**Ans**. tab

### Task 10 : Conclusion

**21)This room used a fictional static site to demonstrate one of the XSS vulnerabilities. Which XSS type was that?**

**Ans**. dom-based xss

**I hope you found this information helpful.**
