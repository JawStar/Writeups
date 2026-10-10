---
title: "Advent of Cyber 2024 {Day 7}Writeup Answers TryHackMe"
date: 2024-12-07
platform: tryhackme
source_file: "2024-12-07_Advent-of-Cyber-2024--Day-7-Writeup-Answers-TryHackMe-e69b29362771.html"
---

---

### Advent of Cyber 2024 {Day 7}Writeup Answers TryHackMe

Day 7: Oh, no. I’M SPEAKING IN CLOUDTRAIL!

### If you Liked the post, please clap and share your thoughts on the Comments.

**The Story**

![](https://cdn-images-1.medium.com/max/800/0*G663LX1qogrR9zbC.png)

*As SOC-mas approached, so did the need,*

*To provide those without, with something to read.*

*Care4Wares tried, they made it their mission,*

*A gift for all wares, a SOC-mas tradition.*

*Although they had some, they still needed more,*

*To pick up some books, they’d head to the store.*

*The town’s favourite books, would no doubt make them jolly,*

*They ticked off the list, as they filled up the trolley.*

*With the last book ticked off, the shopping was done,*

*When asked for their card, the ware handed them one.*

*“I’m sorry” he said, as the shop clerk reclined,*

*“I can’t sell you these books, as your card has declined.”*

*The ware put them back, as they walked in confusion,*

*How could this be? An attack? An intrusion?*

*And when they logged on, the ware got a scare,*

*To find the donations, they just weren’t there!*

### Monitoring in an AWS Environment

Care4Wares’ infrastructure runs in the cloud, so they chose AWS as their Cloud Service Provider (CSP). Instead of their workloads running on physical machines on-premises, they run on virtualised instances in the cloud. These instances are (in AWS) called EC2 instances (Amazon Elastic Compute Cloud). A few members of the Wareville SOC aren’t used to log analysis on the cloud, and with a change of environment comes a change of tools and services needed to perform their duties. Their duties this time are to help Care4Wares figure out what has happened to the charity’s funds; to do so, they will need to learn about an AWS service called CloudWatch.

**CloudWatch**

AWS CloudWatch is a monitoring and observability platform that gives us greater insight into our AWS environment by monitoring applications at multiple levels. CloudWatch provides functionalities such as the monitoring of system and application metrics and the configuration of alarms on those metrics for the purposes of today’s investigation, though we want to focus specifically on CloudWatch logs. Running an application in a cloud environment can mean leveraging lots of different services (e.g. a service running the application, a service running functions triggered by that application, a service running the application backend, etc.); this translates to logs being generated from lots of different sources. CloudWatch logs make it easy for users to access, monitor and store the logs from all these various sources. A CloudWatch agent must be installed on the appropriate instance for application and system metrics to be captured.

A key feature of CloudWatch logs that will help the Warevile SOC squad and us make sense of what happened in their environment is the ability to query application logs using filter patterns. Here are some CloudWatch terms you should know before going further:

* **Log Events:** A log event is a single log entry recording an application “event”; these will be timestamped and packaged with log messages and metadata.
* **Log Streams:** Log streams are a collection of log events from a single source.
* **Log Groups:** Log groups are a collection of log streams. Log streams are collected into a log group when logically it makes sense, for example, if the same service is running across multiple hosts.

**CloudTrail**

CloudWatch can track infrastructure and application performance, but what if you wanted to monitor actions in your AWS environment? These would be tracked using another service called AWS CloudTrail. Actions can be those taken by a user, a role (granted to a user giving them certain permissions) or an AWS service and are recorded as events in AWS CloudTrail. Essentially, any action the user takes (via the management console or AWS CLI) or service will be captured and stored. Some features of CloudTrail include:

* **Always On:** CloudTrail is enabled by default for all users
* **JSON-formatted:** All event types captured by CloudTrail will be in the CloudTrail JSON format
* **Event History:** When users access CloudTrail, they will see an option “Event History”, event history is a record of the actions that have taken place in the last 90 days. These records are queryable and can be filtered on attributes such as “resource” type.
* **Trails:** The above-mentioned event history can be thought of as the default “trail,” included out of the box. However, users can define custom trails to capture specific actions, which is useful if you have bespoke monitoring scenarios you want to capture and store **beyond the 90-day event history retention period**.
* **Deliverable:** As mentioned, CloudWatch can be used as a single access point for logs generated from various sources; CloudTrail is no different and has an optional feature enabling **CloudTrail logs to be delivered to CloudWatch**.

![](https://cdn-images-1.medium.com/max/800/0*SFpL3uRTj2NTLNn8.png)

As mentioned, Cloudtrail helps capture and record actions taken. These actions could be interactions with any number of AWS services. For example, services like **S3** (Amazon Simple Storage Service used for object storage) and **IAM** (AWS’s Identity and Access Management service can be used to secure access to your AWS environment with the creation of identities and the assigning of access permissions to those identities) will have actions taken within their service recorded. These recorded events can be very helpful when performing an investigation.

### Intro to JQ

**What is JQ?**

Earlier, it was mentioned that Cloudtrail logs were JSON-formatted. When ingested in large volumes, this machine-readable format can be tricky to extract meaning from, especially in the context of log analysis. The need then arises for something to help us transform and filter that JSON data into meaningful data we can understand and use to gain security insights. That’s exactly what JQ is (and does!). Similar to command line tools like sed, awk and grep, JQ is a lightweight and flexible command line processor that can be used on JSON.

![](https://cdn-images-1.medium.com/max/800/0*4j8agjriYDLBw9Rw.png)

#### Answer the questions below :

#### What is the other activity made by the user glitch aside from the ListObject action?

```
PutObject
```

#### What is the source IP related to the S3 bucket activities of the user glitch?

```
53.94.201.69
```

#### Based on the eventSource field, what AWS service generates the ConsoleLogin event?

```
signin.amazonaws.com
```

#### When did the anomalous user trigger the ConsoleLogin event?

```
2024-11-28T15:21:54Z
```

#### What was the name of the user that was created by the mcskidy user?

```
glitch
```

#### What type of access was assigned to the anomalous user?

```
AdministratorAccess
```

#### Which IP does Mayor Malware typically use to log into AWS?

```
53.94.201.69
```

#### What is McSkidy’s actual IP address?

```
31.210.15.79
```

#### What is the bank account number owned by Mayor Malware?

```
2394 6912 7723 1294
```

#### Want to learn more about log analysis and how to interpret logs from different sources? Check out [the Log Universe](https://tryhackme.com/r/room/loguniverse) room!

```
No Answer Needed
```

Thank you for Reading!

Follow for more….

[Jawstar](https://medium.com/u/c42b7c126e68)
