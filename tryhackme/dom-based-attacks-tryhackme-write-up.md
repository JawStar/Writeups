---
title: "DOM-Based Attacks Tryhackme Write-up"
date: 2024-11-19
platform: tryhackme
source_file: "2024-11-19_DOM-Based-Attacks-Tryhackme-Write-up-324405e7ef9e.html"
---

---

### DOM-Based Attacks Tryhackme Write-up

![](https://cdn-images-1.medium.com/max/800/0*iA7YhTAE54bm6Yp0.png)

### Task 1 : Introduction

In this room, you will learn about DOM-based attacks. In web applications, any vulnerability that allows a threat actor to target the document object model (DOM) means that they can manipulate what the user sees and take control of their browser!

**Learning Objectives**

* Understand what the DOM is
* Understand modern frontend frameworks
* Learn about the different types of DOM-based attacks
* Learn about DOM-based XSS and how to practically exploit it

**I am ready to learn about DOM-based attacks!**

No Answer Needed

### Task 2 : The DOM Explained

**What does DOM stand for?**

Document Object Model

**What JavaScript command can be used to create new HTML elements?**

createElement

**What JavaScript command can be used to get the cookie values from the DOM?**

document.cookie

### Task 3 : Modern Frontend Frameworks

**What does SPA stand for?**

single page application

**Should security be implemented client-side or server-side?**

server-side

**What control can be implemented to ensure that bad user data does not make its way through?**

input validation

### Task 4 : DOM-Based Attacks

**What do we call the location where untrusted user input made its way into the data pipeline?**

source

**What do we call the function where untrusted user input is reflected back in the application, leading to a successful attack?**

sink

### Task 5 : DOM-Based XSS

**What was the most common source for DOM-based XSS attacks?**

Url Fragments

**What control implemented by modern browsers prevent us from using this source?**

Url Encoding

### Task 6 : XSS Weaponisation

**What flag prevents JavaScript from gaining access to cookie values?**

Httponly

**What security control, that limits where content can be loaded from, makes it harder to weaponise XSS?**

Content Security Policy

### Task 7 : DOM-Based Attack Challenge

**What is the source field name that makes the application vulnerable to XSS?**

person

**What is the sink Vue directive that makes the application vulnerable to XSS?**

v-html

**What is the value of the flag that you receive once you deleted all the birthdays?**

THM{Weaponising.DOM.Based.XSS.For.Fun.And.Profit}

### Task 8 : Conclusion

Defences

To defend against DOM-based attacks, it is important to once again treat all user input as unsafe, even when it is still just being processed by the browser. SAST and DAST tooling can also scan code, requests and responses for potential sources and sinks where sanitisation and validation have not been implemented.

**I understand DOM-based XSS and understand that user data should not even be trusted as safe client-side!**

No Answer Needed

### HAPPY HACKING :)
