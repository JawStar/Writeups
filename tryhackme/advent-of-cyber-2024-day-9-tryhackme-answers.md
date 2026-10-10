---
title: "Advent of Cyber 2024 {DAY - 9} Tryhackme Answers"
date: 2024-12-09
platform: tryhackme
source_file: "2024-12-09_Advent-of-Cyber-2024--DAY---9--Tryhackme-Answers-eb528226938c.html"
---

---

### Advent of Cyber 2024 {DAY - 9} Tryhackme Answers

#### Day 9: Nine o’clock, make GRC fun, tell no one.

![](https://cdn-images-1.medium.com/max/800/0*PsPRDrp8csPYyega.png)![](https://cdn-images-1.medium.com/max/800/0*DAR4eKCfT3QrhTZH.gif)

McSkidy and Glitch want to hire an eDiscovery company to process some forensic data for their investigation. They have invited bids from third parties for this purpose. Three companies have bid for the project. McSkidy and Glitch now need to do a risk assessment on all three of these companies to identify the one with the least amount of risk so that they can move forward. All three companies were required to fill out a questionnaire based on which a risk assessment will be done.

### Introduction to GRC

Governance, Risk, and Compliance (GRC) plays a crucial role in any organisation to ensure that their security practices align with their personal, regulatory, and legal obligations. Although in general good security practices help protect a business from suffering a breach, depending on the sector in which an organisation operates, there may be external security regulations that it needs to adhere to.

Let’s take a look at some examples in the financial sector:

* **Reserve Bank Regulations:** In most countries, banks have to adhere to the security regulations set forth by the country’s reserve bank. This ensures that each bank adheres to a minimum security level to protect the funds and information of their customers.
* **SWIFT CSP:** Banks use the SWIFT network to communicate with each other and send funds. After a [massive bank breach resulted in a $81 million fraudulent SWIFT transfer](https://www.wired.com/2016/05/insane-81m-bangladesh-bank-heist-heres-know/), SWIFT created the Customer Security Programme (CSP), which sets the standard of security for banks to connect to the SWIFT network.
* **Data Protection:** As banks hold sensitive information about their customers, they have to adhere to the security standards created by their data regulator (usually the reserve bank in most countries).

When you run a large organisation with multiple different teams, how do you stay on top of all these regulations and ensure that good security is applied by all teams? This is where GRC comes in. They play a crucial role in understanding external security standards, translating them into internal standards, and then ensuring that they are applied by all teams to help reduce the organisation’s risk to an acceptable level. Let’s take a quick look at the three functions of GRC.

**Governance**

![](https://cdn-images-1.medium.com/max/800/0*obBhSyJ6W2w3kc2t.png)

Governance is the function that creates the framework that an organisation uses to make decisions regarding information security. Governance is the creation of an organisation’s security strategy, policies, standards, and practices in alignment with the organisation’s overall goal. Governance also defines the roles and responsibilities that everyone in the organisation has to play to help ensure these security standards are met.

![](https://cdn-images-1.medium.com/max/800/0*jztha36CQHSFOSNS.png)

**Risk**

Risk is the function that helps to identify, assess, quantify, and mitigate risk to the organisation’s IT assets. Risk helps the organisation understand potential threats and vulnerabilities and the impact that they could have if a threat actor were to execute or exploit them. By simply turning on a computer, an organisation has some level of risk of a cyber attack. The risk function is important to help reduce the overall risk to an acceptable level and develop contingency plans in the event of a cyber attack where a risk is realised.

**Compliance**

![](https://cdn-images-1.medium.com/max/800/0*3Q4E2OryHvcBb7aX.png)

Compliance is the function that ensures that the organisation adheres to all external legal, regulatory, and industry standards. For example, adhering to the [GDPR law](https://gdpr-info.eu/) or aligning the organisation’s security to an industry standard such as NIST or ISO 27001.

### Introduction to Risk Assessments

Before McSkidy and Glitch choose an eDiscovery company to handle their forensic data, they need to figure out which one is the safest choice. This is where a risk assessment comes in. It’s a process to identify potential problems before they happen. Think of it as checking the weather before going on a hike; if there’s a storm coming, you’d want to know ahead of time so you can either prepare or change your plans.

### Why Are Risk Assessments Done?

Risk assessments are like a reality check for businesses. They connect cyber security to the bigger picture, which **minimises business risk**. In other words, it’s not just about securing data but about protecting the business as a whole.

Imagine you run an online store that collects customer information like names, addresses, and credit card details. If that data gets stolen because of a weak security system, it’s not just the data that’s at risk — your reputation, customer trust, and even your profits are on the line. A **risk assessment** could have helped you identify that weak point and fix it before anything went wrong.

For McSkidy and Glitch, assessing the risks of each eDiscovery company helps them decide which one is less likely to have a data breach or other issues that could disrupt the investigation.

**Why Do Companies Do Risk Assessments of Third Parties?**

Companies don’t just assess themselves — they also need to evaluate the risks that come from working with other companies, like vendors, suppliers, or partners. This is called a third-party risk assessment, and it’s important because one weak link in the chain can affect everyone.

Let’s make it simple: McSkidy and Glitch want to make sure that whichever eDiscovery company they choose won’t leak or lose sensitive data. So, they will be reviewing if these companies:

* Have good security measures to keep data safe.
* Follow data protection rules.
* Align with the security standards that McSkidy and Glitch have in place.

By doing a third-party risk assessment, McSkidy and Glitch are reducing potential supply chain risks — making sure the investigation doesn’t run into trouble because of a weak security link in the chain. In order to do this, McSkidy has to create a risk assessment that can be sent to the potential third parties. Based on the answers provided by the third parties, McSkidy can then make an informed decision on which third party would be best!

![](https://cdn-images-1.medium.com/max/800/0*aTugLKL4rjVJP3j0.png)
> ***Answer the questions below***

Q1) What does GRC stand for?  
Answers :- ***Governance, Risk, and Compliance***

![](https://cdn-images-1.medium.com/max/800/0*ECJ8VA9UO7EyYcK0.png)

Q2) What is the flag you receive after performing the risk assessment?  
Answers :- THM{R15K\_M4N4G3D}

![](https://cdn-images-1.medium.com/max/800/0*nGut52xS7TMb1ODy.png)

Q3) If you enjoyed this task, feel free to check out the [Risk Management](https://tryhackme.com/r/room/seriskmanagement) room.  
Answers :- No answer needed

![](https://cdn-images-1.medium.com/max/800/0*GeOBjrC59o6Vr5f1.png)

### ***Happy hacking! 🧑‍💻 Follow for more walkthrough***
