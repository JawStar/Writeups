---
title: "AppSec IR Tryhackme Writeup"
date: 2025-09-17
platform: tryhackme
source_file: "2025-09-17_AppSec-IR-Tryhackme-Writeup-ac7b78338ccb.html"
---

---

### AppSec IR Tryhackme Writeup

Author: Jawstar

You can Follow me on Linkedin

[linkedin.com/in/abdul-wasay-jagirdar-b416822b4](https://www.linkedin.com/in/abdul-wasay-jagirdar-b416822b4)/

#### TASK 1 : Introduction

![](https://cdn-images-1.medium.com/max/800/0*XclMtRUS24SN8X7C)

In this room, we will examine application security (AppSec) and incident response (IR). More specifically, we will learn how shifts in threat landscapes, software architecture, and attacker behaviour have made AppSec IR, an intersection of these two practices, increasingly relevant and teach the basics of this hybrid function.

I’m ready to learn about AppSec IR!

No Answer Needed

### TASK 2: AppSec IR Fundamentals

#### AppSec IR & Why it Matters

Application security incident response (AppSec IR) refers to the overall practice of handling security incidents involving application-layer vulnerabilities, exploits, or breaches. It sits at the intersection of traditional incident response and application security. The AppSec IR process covers preparation for application security incidents all the way to recovery from an incident that has occurred, essentially looking at IR through an AppSec Lens. This approach has become crucial because modern breaches increasingly originate at the application layer (take this [report from Verizon](https://www.verizon.com/business/resources/Ta5a/reports/2023-dbir-public-sector-snapshot.pdf), which found that web applications are now the top asset involved in security breaches, affected in around 60% of breaches).

![](https://cdn-images-1.medium.com/max/800/0*9wh5Mk2R2EkhLbK5.png)

The ultimate goal of AppSec IR is to leverage AppSec practices like secure coding, code review, and application testing to influence each stage of incident response:

* Preparation
* Detection & Identification
* Containment
* Eradication
* Recovery

### The AppSec IR Collaboration

One of the biggest differences between AppSec IR and traditional IT incident response is the level of collaboration required between security responders and the development/AppSec IR teams. In AppSec IR, there are no outrightly defined roles or responsibilities outlined because the implementation will differ depending on the internal infrastructure of an organisation. For a general idea of how this would realistically work in practice, though, consider this example: An IR team would lead the overall investigation, monitoring and containment, but the application security and development teams must be involved to advise on application specifics and implement code fixes.

![](https://cdn-images-1.medium.com/max/800/0*FNfaF8xyF5-4RQ1A.png)

When an application-level incident occurs, this collaboration (the intersection of the two teams makes AppSec IR crucial and is what can make the difference in responding to the incident swiftly and effectively. For example, the AppSec team might identify the exact code flaw and provide a patch, while the incident responders deploy a WAS rule to hold off the attacker until that patch can be applied. AppSec IR is about ensuring that both of these teams are integrated into each other’s processes, so each team has a level of understanding to make this collaboration possible.

### Key Tools for Application-Layer Incident Response

Like any discipline in cyber security, we can help ourselves in achieving our goals (in this case, a quick and effective response to application-layer incidents) by adopting the use of tools. Here is a rundown of some of the types of tools we might be using when thinking about AppSec IR:

* **Application Logs & SIEM:** When responding to an application incident, it is fundamental to harness and track user activities, errors, input validation failures, etc., in application logs and couple this with a SIEM (Security Information and Event Management) system. SIEMS can help by aggregating events found in application logs, providing an efficient way to detect malicious activities (e.g., unauthorised account creation). Where SIEM ingestion isn’t available, use log parsing & normalisation tools to structure application logs and enable searching and alerting.
* **Web Application Firewalls (WAF):** A WAF is a security filter that sits in front of web applications to intercept malicious HTTP traffic. It can be thought of as the first line of defence, blocking common attacks like SQL injection and XSS based on rule sets. WAFs can also serve as a quick reaction tool in AppSec IR and can be especially useful during the containment phase, as a new rule can instantly mitigate an ongoing exploit. A Content Delivery Network (CDN) can also complement a WAF by absorbing edge traffic, caching content, and providing controls like rate limiting and geo/IP blocking to reduce attack impact.
* **Threat Intelligence (feeds/platforms):** Use IOCs (Indicator of Compromise), context, and emerging TTPs to enrich detections, tune WAF/RASP rules, and guide triage/prioritisation.
* **Runtime Application Self-Protection (RASP):** RASP is an in-app security technology that monitors an application from the inside. Real-time attacks can be detected and blocked by monitoring for dangerous actions within the running application itself. This can be key in mitigating some application-level security attacks, especially those like zero-day attacks, which will bypass external defences (like WAF). Detailed, context-rich alerts can also be sent by RASP tools, which further helps responders quickly understand what an attacker has tried to do.

Which tool type analyses logs and aggregates security events across applications?

**SIEM**

Which IR phase focuses on deploying emergency WAF rules to stop an ongoing exploit?

**Containment**

### Task 3 : Preparing for Application Incidents

**Prevention**

One of the most effective ways of combating application security incidents is by preventing them from happening in the first place. In the context of AppSec, one of the best ways we can do this is by strengthening the Software Development Life Cycle (SDLC). A common turn of phrase in security, which bears repeating: security should not be an afterthought or a last-minute add-on; it needs to be built in from day one. This is known as adopting a “Secure by Design” (or shifting left) approach, which can help to turn our SDLC into SSDLC (Secure Software Development Life Cycle). This involves tactics like following secure coding practices to avoid common flaws (like XSS), performing threat modelling early on, and adopting SAST/DAST into an organisation’s CI/CD pipeline. The aim here is to dramatically reduce the likelihood of serious application incidents occurring by adopting a strong preventive posture, backed by developer training and security testing. For more on this subject, check out our [SSDLC](https://tryhackme.com/room/securesdlc) room.

![](https://cdn-images-1.medium.com/max/800/0*qXRSoqiRzHHmdMva.png)

**Observability**

Despite taking all preventative measures at your disposal, incidents can still occur, so we now turn our focus to being able to detect them, as the only thing worse than an incident is an incident which goes unnoticed. The goal then is to avoid this and achieve effective observability. The first step we can take towards this is ensuring that your application logs all key events, such as:

* Authentication attempts
* API calls or transactions
* Server errors

![](https://cdn-images-1.medium.com/max/800/0*eGM9Z8qDtgKbF9k0.png)

Consider the following example playbook scenario:

* **SQL injection attack:** A playbook made for responding to an injection attack might direct responders to immediately update WAF rules to block malicious SQL patterns and blocklist offending IP addresses to contain the attack. The playbook would then instruct engineers to analyse database logs to assess damage and take the appropriate remediation actions, such as patching the vulnerable code or applying a virtual patch via the WAF until a code fix is deployed. The playbook could then instruct the engineers to verify data integrity and continue to monitor for any further malicious activities.

Which approach reduces the likelihood of serious application incidents occurring?

**Secure By Design**

Which OWASP Top 10 category highlights the risk of poor observability in applications?

**A09: Security Logging and Monitoring Failures**

What type of document outlines step-by-step actions to contain and respond to specific security incidents?

**IR Playbooks**

### Task 4 : Responding to an Application Incident

### Detection & Indentification

Okay, so how do we know something is wrong with our application? In a real incident, detection usually comes from one of the following triggers:

* **Log anomalies**: If the appropriate preparations have been made, as discussed in the previous task, then your application will have sufficient logging and monitoring in place. This means suspicious patterns, a surge of error messages, etc., can be captured and monitored, and then alerts will be generated depending on the severity of what has been found. These alerts are a common method of detecting an incident.
* **User complaints or reports**: Never underestimate the importance of end users and their feedback. Having a channel where users can report issues, and those reports can be received and analysed quickly, can make all the difference when a user-facing application incident occurs. Certain user reports indicate that an application component is becoming unavailable. Could hint at a potential ongoing security incident.
* **Bug bounty**: Sometimes, depending on the scope of your organisation/application, it can be a good idea to set up a bug bounty program where third parties are incentivised through a reward (hence “bounty”) to identify existing vulnerabilities in your application.

Once the attack has been **detected**, it needs to undergo an initial triage to **identify** the vulnerability and validate what has been detected. Imagine the scenario we prepared for in the previous task with our IR playbook, which has come to fruition, an alert in our monitoring system, and some bug bounty reports claiming an SQL injection is taking place in a specific API route. Engineers would then follow a process, ideally outlined in the playbook.

![](https://cdn-images-1.medium.com/max/800/0*zCq5eQRX0YP3MW-_.png)

First evidence would be gathered by examining the web server logs and details provided within the alerts and bug bounty reports and looking for the appropriate anomalies in the flagged time frame. Using this information, identify the attack/vulnerability and validate its existence. The final part of the identification stage is determining the scope. You don’t want to go any further until you assess the severity and impact of the attack. Is user data or sensitive data at risk? Is it user-facing? These are important questions to ask at this stage.

For ShopSmart, the first clue comes from a spike in database query errors logged in the SIEM, coinciding with a customer support report that the search function is returning strange error messages. An automated alert flags a potential injection attack, triggering the team’s detection and containment process.

### Containment

Once it has been confirmed that an incident is in fact ongoing, containment measures must be taken swiftly to ensure minimal impact to the application and its users. What we want to achieve at this stage is to limit the attackers’ window of opportunity, making temporary but swift changes that help stop further damage/data loss. Here are some common containment actions that can be taken during an ongoing incident:

* **Disable vulnerable feature / route:** If a specific feature or API endpoint has been confirmed as the breach vector, consider turning it off temporarily until the incident has been resolved. This will prevent the attacker (and everyone else) from accessing the affected feature / route until it has been secured. Many modern applications are built with feature flags/toggles — essentially kill switches — which enable engineers to quickly deactivate a feature without the need for a full redeploy. If this is an option, it can buy your team time while a proper fix is found.
* **Apply WAF rules / block malicious traffic:** A WAF can be updated on the fly, so if your observability is high and you have context-rich alerts and logging, you may be able to pinpoint an IP address where the attack is originating and block it. In the example of the SQLi attack, specific attack patterns can be blocked as well, but it should be noted that these are not permanent fixes, an attacker can change their payload or IP address, this simply buys us time.

![](https://cdn-images-1.medium.com/max/800/0*ZbWEguDy2t8V5JFZ.png)

* **App restrictions:** Containment methods can differ from incident to incident; a decision must be made depending on the severity of the issue facing the application. For example, if an incident is underway and account theft is happening, this would be considered high severity. During a high-severity incident, you want to assess how long realistically this incident will take to fix, this will ultimately be determined by how prepared you are for this specific incident. If you are seeing a critical data leak and have no means to stop it, it may be time to consider taking the application offline temporarily, or disabling key features such as new logins.
* **Stop the spread:** Containment also refers to stopping the attack from spreading to other systems. For this containment method, imagine a malware or web shell attack. The goal would be to segregate the compromised server (for example, by removing it from the load balancer routing). In a web application, this may also mean revoking any compromised tokens or credentials so they can’t be reused (for example if an admin account was compromised immediately reset the password and revoke active sessions).

What is a common detection method involving incentivising third parties to find vulnerabilities?

**Bug Bounty**

What specific mechanism allows a vulnerable feature to be disabled instantly without redeploying the application?

**Feature Flag**

What type of tool is commonly used to block specific malicious traffic patterns or IP addresses during an incident?

**WAF**

### **Task 5 : Remediation & Recovery**

**Removing the Threat**

With the threat contained, our attention now turns to **eradication**. In other words, we want to eliminate the root cause of the incident as well as any other lingering malicious artefacts from our application. We will now discuss some key eradication actions:

* **Patching vulnerabilities:** If the incident was a result of a vulnerability present in the application, like the SQLi example discussed earlier, then this needs to be patched to eradicate it fully. From an AppSec IR perspective, this will likely look like a recommendation to the development team to write a code fix / configuration change (a “hotfix”) to close the security hole. This should be done quickly, but with great care, so it does not break other functionalities within the app.
* **Remove malicious artefacts:** If the attacker gained authorised access to an application, they have left behind malicious artefacts. These should be found and removed. This can include malware, web shells, or any malicious code/injections from servers and databases. This can be achieved by running anti-malware tools, restoring clean versions of files and, in extreme cases, compromised systems may need to be rebuilt from scratch.
* **Preserve forensic evidence:** While the process of cleanup and eradication is taking place, it is important to preserve evidence of the attack. In practice this may look like a team member being assigned to take backups or snapshots of relevant data (logs, malicious code samples, query history, etc.) as this evidence may be needed for deeper investigation or legal purposes later.
* **Reset credentials/revoke accounts:** Depending on whether the attacker took control of certain accounts during privilege escalation or even created accounts entirely, these accounts should be cleaned up. Reset passwords/API keys to accounts that are needed, remove ones that are not.

![](https://cdn-images-1.medium.com/max/800/0*m8IFHvxfSFwbT0zi.png)

While applications should always be closely monitored, this is especially true following a recent incident. While cleaning up further indicators of compromise can be found, these can be fed into your security tools to help spot any remaining malicious presence. At ShopSmart, eradication means deploying a code hotfix for the vulnerable API endpoint, removing a malicious admin account that the attacker created, and restoring clean database backups. Only after penetration testing confirms the fix do they fully reopen the search feature.

**Restoring and Validating Systems**

With the threat eradicated, we now want to safely restore our application and underlying systems to full working order. Here are a few steps that can be taken at this stage:

* **Validation and testing:** Before an incident can safely be declared over, you should validate that systems are fully functional and secure. Ensure the application, databases, and network devices are working as expected and confirm the vulnerability has indeed been fixed. Security testing and ensuring that vulnerabilities can not be reproduced are critical at this stage.
* **System restoration:** Once it has been confirmed that the application is safe, systems should be brought back online. This can involve reenabling endpoints that were disabled during the containment phase. Now that they have been fixed, prioritise critical services first to resume business operations.
* **Monitoring for recurrence:** As with after eradication, it is critical to keep an extra close eye on your application when it returns to production. You and your team have confirmed the vulnerability is not reproducible, but attackers should never be underestimated, so logs and alerts should be monitored rigorously.

**Learning Lessons**

Once operations have been restored, the focus should now turn to **what lessons, as a team, can be learned** from this incident going forward, often called a post-mortem. It is very important to approach this with a blameless mindset. Our objective at this stage is to understand what happened and how to improve, not to shame anyone for making mistakes. After the post-mortem has taken place, a detailed incident report should be made, including: A timeline of events, root cause analysis, response evaluation, lessons learned, and recommendations. This report can often be a goldmine in terms of transforming your team’s posture, taking all these findings and recommendations and feeding them into preparation so an incident like this won’t take place again.

![](https://cdn-images-1.medium.com/max/800/0*QQv67UpZpgIUynPy.png)

A developer will push a \_\_\_\_\_\_ in order to patch the vulnerability and close the security hole.

**Hotfix**

Routes disabled during the \_\_\_\_\_\_\_\_\_\_\_ phase can now be re-enabled during the restoration phase.

**Containment**

The process of discussing what lessons can be learned from this incident going forward is called what?

**Post-mortem**

Following this process, what should be produced?

**Incident Report**

### Task 6 : Practical

### AppSec IR in Action!

It’s time to put all you’ve learned into practice. This task aims to demonstrate how to respond to an application incident in real time. This practical puts you in the shoes of an AppSec engineer who has just been told there is an application-level breach. You are on the ground floor for this incident, and it is up to you to utilise the IR phases outlined in this room to respond to this application-wide incident in a fast and efficient manner.

To get started, boot up the AttackBox or your local machine (conntected to the VPN), and the target machine. Allow 1–2 minutes for the machines to boot up. Once it has booted, you should be able to access your application front end on `MACHINE_IP` using the browser. Here, there will be a "Flag Submission" option in the navbar. Between the web application and the logs, you will be able to solve the practical and retrieve the flag. To access the log, you can SSH into the target machine with the command: `ssh appsecir@MACHINE_IP`, the password is `TryHackMe!`. You can then find the application logs here: `/home/appsecir/Documents/Logs`. Use the provided logs to identify what happened in the incident (note the timestamp and the victim's user ID/email), then reproduce it in the live app.

Can you investigate the incident, confirm the presence of an application vulnerability, and then answer all the questions to obtain the flag?

***THM{AppS3c\_Inc1d3NT\_R3sp0Nder}***

### Task 7 : Conclusion

#### Turning Incidents Into Win-Cidents!

This room has covered the overlap between AppSec and incident response, showing how the two practices can be leveraged to increase the efficiency of the other. With applications being targeted more and more, it has never been more important to be **prepared** for incidents and **respond** to them in a timely and effective manner. Here is a summary of what has been covered in this room:

* Why **AppSec IR *matters*** and what **tools** can be used to achieve it
* The importance of being **prepared** for application incidents, and the steps that can be taken to ensure that you are
* How to effectively **detect** and **contain** an application threat/attack
* Considerations to be taken when **recovering** from an application incident
* How crucial drawing **lessons learned** from an incident is in ensuring future application incidents are better handled, or even better prevented

THANKS FOR SUPPORTING ME GUYS

L0V3 U GUY5
