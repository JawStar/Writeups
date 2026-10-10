---
title: "Advent of Cyber 2024 {Day — 24} Tryhackme Answers"
date: 2024-12-24
platform: tryhackme
source_file: "2024-12-24_Advent-of-Cyber-2024--Day---24--Tryhackme-Answers-28784c95f19e.html"
---

---

### Advent of Cyber 2024 {Day — 24} Tryhackme Answers

> ***Communication protocols***

![](https://cdn-images-1.medium.com/max/800/0*KIxSxPy_yfSnVf-R.png)

### Day 24: You can’t hurt SOC-mas, Mayor Malware!

*In Wareville the townspeople started to frown,*

*A problem with smart lights all over the town!*

*Was SOC-mas ruined? The chances were zero,*

*Because this they knew, the Glitch was their hero!*

The city of Wareville has invested in smart lights and heating, ventilation, and air conditioning (HVAC). Oh, it was so easy to control the lights and heating remotely. Following the recent incidents, McSkidy started monitoring these smart devices’ communication protocols. Not long after the lights and heating were up and running, Mayor Malware figured out how these devices were controlled and sabotaged them. Luckily, McSkidy was one step ahead and picked up the malicious commands that had been sent. Can you help McSkidy figure out which commands were sent? We can then use our findings to update the devices’ configuration and save the day!

### Learning Objectives

In this task, you will learn about:

* The basics of the MQTT protocol
* How to use Wireshark to analyze MQTT traffic
* Reverse engineering a simple network protocol

![](https://cdn-images-1.medium.com/max/800/0*NjnGT-Ov6WoDzEFn.gif)

### How to Speak MQTT

MQTT stands for Message Queuing Telemetry Transport. It is a language very commonly used in IoT devices for communication purposes. It works on a publish/subscribe model, where any client device can publish messages, and other client devices can subscribe to the messages if they are related to a topic of interest. An MQTT broker connects the different clients, publishing and subscribing to messages.

![](https://cdn-images-1.medium.com/max/800/0*X4usgluX3usCvW-4.png)

To further understand MQTT, let’s explore some key concepts used in MQTT protocols.

**MQTT Clients:** MQTT clients are IoT devices, such as sensors and controllers, that publish or subscribe to messages using the MQTT protocol. For example, a temperature sensor can be a client that publishes temperature sensors at different places. An HVAC controller can also act as a client that subscribes to messages from the temperature sensor and turns the HVAC system on or off based on the input received.

**MQTT Broker:** An MQTT broker receives messages from publishing clients and distributes them to the subscribing clients based on their preferences.

**MQTT Topics:** Topics are used to classify the different types of messages. Clients can subscribe to messages based on their topics of interest. For example, a temperature sensor sending temperature readings can use the topic of “room temperature”, while an HVAC controller would subscribe to messages under the topic of “room temperature”. However, a light sensor can publish messages with the topic “light readings”. An HVAC controller does not need to subscribe to this topic. On the other hand, a light controller would subscribe to “light readings” but not to the topic of “room temperature”.

![](https://cdn-images-1.medium.com/max/800/0*_h8rndEcJgLfQdkO.png)
> ***Answer the questions below***

Q1)What is the flag?

Answer:- ***THM{Ligh75on-day54ved}***

Q2) If you enjoyed this task, feel free to check out the [Wireshark](https://tryhackme.com/module/wireshark) module.

Answer:- ***No answer needed***

![](https://cdn-images-1.medium.com/max/800/0*I0A02o-5rmpVwsPP.png)

Q1) Congratulations on saving SOC-mas!

Answer:- ***No answer needed***

![](https://cdn-images-1.medium.com/max/800/0*zA7KmD2BHAIY9qqd.png)

Q1) What is the flag you get at the end of the [survey](https://forms.gle/7vsWJB8e9dNVHAmc6)?

Answer :- ***THM{we\_will\_be\_back\_in\_2025}***

GOD BLESS YOU..………………

MERRY CHRISTMAS TO ALL

THANK YOU

[Jawstar](https://medium.com/u/c42b7c126e68)
