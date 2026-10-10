---
title: "Identity and Access Management THM Write up"
date: 2024-11-05
platform: tryhackme
source_file: "2024-11-05_Identity-and-Access-Management-THM-Write-up-663d33f89b3b.html"
---

---

### Identity and Access Management THM Write up

#### Learn about identification, authentication, authorisation, accounting, and identity management.

FOR NON PREMIUM MEMBERS : <https://jawstar.medium.com/identity-and-access-management-thm-write-up-663d33f89b3b?sk=99aed2c8b31142e4f6e4e438a2e9d232>

![](https://cdn-images-1.medium.com/max/800/0*XTvQVR3i1Zp46IFO.png)

### Task 1 : Introduction

![](https://cdn-images-1.medium.com/max/800/0*iSJaH_xGrHM6Uvd7.png)

### Learning Objectives

By the end of this room, you should have gained a solid understanding of the following processes and concepts:

* Identification
* Authentication
* Authorisation
* Accountability
* Access Control Models
* Single Sign-On

#### **What is the name of the room recommended to finish before this one?**

Security Principles

### TASK 2 : IAAA Model

#### You are granted access to read and send an email. What is the name of this process?

Authorisation

#### Which process would require you to enter your username?

Identification

#### Although you have write access, you should only make changes if necessary for the task. Which process is required to enforce this policy?

Accountability

### Task 3 : Identification

![](https://cdn-images-1.medium.com/max/800/0*x4kB3mp39jPbXNn5.png)

#### Which of the following **cannot** be used for identification?

#### 1-Email address

#### 2-Mobile number with international code

#### 3-Year of birth

#### 4-Passport number

Ans → 3

#### Which of the following **cannot** be used for identification?

#### 1-Landline phone number

#### 2-Street number

#### 3-Health insurance card number

#### 4-Student ID number

Ans → 2

### Task 4 : Authentication

### Something You Know

Something you know refers to something that you know or have memorised. Examples include the following:

* Passwords such as `4SNoPawKkdFiCdnm` and `%WAdWi-;4,mxRMQB`
* Passphrases such as *“Judge Battle Advise Pain 9”* and *“Baggage Protection Dissatisfy Barrel 8”*
* PIN (Personal Identification Number) such as `25063` and `6285`

![](https://cdn-images-1.medium.com/max/800/0*Omy1qGnQvUX5UJWn.png)

Answer the following questions using the correct item number from the numbered list below.

1. Something you know
2. Something you have
3. Something you are
4. 2FA

#### When you want to check your email, you enter your username and password. What kind of authentication is your email provider using?

1

#### Your bank lets you finish most of your banking operations using its app. You can log in to your banking app by providing a username and a password and then entering the code received via SMS. What kind of authentication is the banking app using?

4

#### Your new landline phone system at home allows callers to leave you a message when the call is not picked up. You can call your home number and enter a secret number to listen to recorded messages. What kind of authentication is being used here?

1

#### You have just started working at an advanced research centre. You learned that you need to swipe your card and enter a four-digit PIN whenever you want to use the elevator. Under which group does this authentication fall?

4

### Task 5 : Authorisation and Access Control

**In the following questions, answer with 1 or 2 to indicate:**

1. **Authorisation**
2. **Access Control**

#### The new policy states that the secretary should be able to send an email on the manager’s behalf. What is this policy dictating?

1

#### You shared a document with your colleague and gave them view permissions so they could read without making changes. What would ensure that your file won’t be modified?

2

#### The hotel management decided that the cleaning staff needed access to all the hotel rooms to do their work. What phase is this decision part of?

1

### Task 6 : Accountability and Logging

#### **Ensure you have read the above before moving on.**

No Answer Needed

### Task 7 : Identity Management

#### What does IdM stand for?

Identity Management

#### What does IAM stand for?

Identity and Access Management

### Task 8 : Attacks Against Authentication

![](https://cdn-images-1.medium.com/max/800/0*0Cn1Oq9q-6AwztTd.png)

#### The attacker could authenticate using the user’s response when the authentication protocol required a password encrypted with a shared key. What is the name of the attack?

Replay Attack

### Task 9 : Access Control Models

A system controls access to various resources based on the chosen model. Some of the common access control models are:

1. Discretionary Access Control (DAC)
2. Role-Based Access Control (RBAC)
3. Mandatory Access Control (MAC)

### Discretionary Access Control

Many have already used Discretionary Access Control (DAC) when sharing files or folders with friends and colleagues. When using DAC, the resource owner will explicitly add users with the proper permissions.

Consider the following example. You store your photos on one of the online storage platforms. To share all the images related to your graduation with your family, you add their accounts individually and grant them access to the respective album. Eventually, the album permissions with show a few accounts with view permissions.

The whole process is straightforward and fully controlled by the data owner. It works very well for sharing with family members or a few company users. However, this can get tricky as you try to scale sharing with many users, especially as a user’s role changes over time. This situation brings us to sharing based on user roles.

### Role-Based Access Control

Role-Based Access Control (RBAC) uses a very intuitive approach. Each user has one or more roles or functional positions; furthermore, they are authorised to access different resources based on their roles.

An accountant needs to access the company accounting books but does not need to access research and development labs or documents. Consequently, users are put into different groups based on their roles. Authorisation and access will be granted based on the group to which a user belongs.

Classifying users based on their roles brings many advantages. For instance, if a user is tasked with a new role, all that is required is to add them to the new respective group. Moreover, if the users gave up a particular role, we only need to remove them from the old group. This approach makes maintenance more manageable and more efficient.

### Mandatory Access Control

An operating system using Mandatory Access Control (MAC) would prioritise security and significantly limit users’ abilities. Such systems are used for specific purposes or to handle highly classified data. Consequently, users do not need to carry out tasks beyond the strictly necessary. In other words, users won’t be able to install new software or change file permissions.

[AppArmor](https://www.apparmor.net) gives the ability to have MAC on a Linux distribution. It is already shipped with various Linux distributions, such as Debian and Ubuntu.

The [SELinux](https://github.com/SELinuxProject) project provides a flexible MAC for Linux systems. It is standard for several Linux distributions, such as Red Hat and Fedora.

Answer the following questions using the correct item number from the numbered list below.

1. DAC
2. RBAC
3. MAC

#### You are sharing a document via a network share and giving edit permission only to the accounting department. What example of access control is this?

2

#### You published a post on a social media platform and made it only visible to three out of your two hundred friends. What kind of access control did you use?

1

### Task 10 : Single Sign-On

#### What does SSO stand for?

Single Sign-On

#### Does SSO simplify MFA use as it needs to be set up once? (Yea/Nay)

Yea

#### Is it true that SSO can be cumbersome as it requires the user to remember and input different passwords for the various services? (Yea/Nay)

Nay

#### Does SSO allow users to access various services after signing in once? (Yea/Nay)

Yay

#### Does the user need to create and remember a single password when using SSO? (Yea/Nay)

Yay

### Task 11 : Scenarios

#### Click on **View Site** and follow the exercise to get a flag.

**{THM\_ACCESS\_CONTROL}**

### Task 12 : Conclusion

#### Ensure that you have taken notes of the concepts and terms presented in this room.

No Answer Needed
