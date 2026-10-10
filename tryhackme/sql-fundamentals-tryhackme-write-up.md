---
title: "SQL Fundamentals Tryhackme Write up"
date: 2024-11-01
platform: tryhackme
source_file: "2024-11-01_SQL-Fundamentals-Tryhackme-Write-up-92e02fb55b68.html"
---

---

### SQL Fundamentals Tryhackme Write up

![](https://cdn-images-1.medium.com/max/800/1*z9t4B27VyGB6PpGau0lZaA.png)![](https://cdn-images-1.medium.com/max/800/0*2t_Uvh6lbNu31BNt)

### Task 1 : Introduction

### Introduction

Cyber security is a broad topic that covers a wide range of subjects, but few of those are as ubiquitous as databases. Whether you’re working on securing a web application, working in a SOC and using a SIEM, configuring user authentication/access control, or using malware analysis/threat detection tools (the list goes on), you will in some way be relying on databases. For example, on the offensive side of security, it can help us better understand SQL vulnerabilities, such as SQL injections, and create queries that help us tamper or retrieve data within a compromised service. On the other hand, on the defensive side, it can help us navigate through databases and find suspicious activity or relevant information; it can also help us better protect a service by implementing restrictions when needed.

Because databases are ubiquitous, it is important to understand them, and this room will be your first step in that direction. We’ll go through the basics of databases, covering key terms, concepts and different types before getting to grips with SQL.

### Learning Objectives

* Understand what databases are, as well as key terms and concepts
* Understand the different types of databases
* Understand what SQL is
* Understand and be able to use SQL CRUD Operations
* Understand and be able to use SQL Clauses Operations
* Understand and be able to use SQL Operations
* Understand and be able to use SQL Operators
* Understand and be able to use SQL Functions

**Teach me the basics of SQL!**

No Answer Needed

### Task 2 : Databases 101

What type of database should you consider using if the data you’re going to be storing will vary greatly in its format?

Non-relational database

**What type of database should you consider using if the data you’re going to be storing will reliably be in the same structured format?**

relational database

**In our example, once a record of a book is inserted into our “Books” table, it would be represented as a \_\_\_ in that table?**

row

**Which type of key provides a link from one table to another?**

foreign key

**which type of key ensures a record is unique within a table?**

primary key

### Task 3 : SQL

**What serves as an interface between a database and an end user?**

DBMS

**What query language can be used to interact with a relational database?**

SQL

### Task 4 : Database and Table Statements

**Using the statement you’ve learned to list all databases, it should reveal a database with a flag for a name; what is it?**

THM{575a947132312f97b30ee5aeebba629b723d30f9}

**In the list of available databases, you should also see the** `task_4_db` **database. Set this as your active database and list all tables in this database; what is the flag present here?**

THM{692aa7eaec2a2a827f4d1a8bed1f90e5e49d2410}

### Task 5 : CRUD Operations

**Using the** `tools_db` **database, what is the name of the tool in the** `hacking_tools` **table that can be used to perform man-in-the-middle attacks on wireless networks?**

Wi-Fi Pineapple

**Using the** `tools_db` **database, what is the shared category for both USB Rubber Ducky and Bash Bunny?**

USB attacks

### Task 6 : Clauses

**Using the** `tools_db` **database, what is the total number of distinct categories in the** `hacking_tools` **table?**

6

**Using the** `tools_db` **database, what is the first tool (by name) in ascending order from the** `hacking_tools` **table?**

Bash Bunny

**Using the** `tools_db` **database, what is the first tool (by name) in descending order from the** `hacking_tools` **table?**

Wi-Fi Pineapple

### Task 7 : Operators

**Using the** `tools_db` **database, which tool falls under the Multi-tool category and is useful for pentesters and geeks?**

Flipper Zero

**Using the** `tools_db` **database, what is the category of tools with an amount greater than or equal to 300?**

RFID cloning

**Using the** `tools_db` **database, which tool falls under the Network intelligence category with an amount less than 100?**

Lan Turtle

### Task 8 : Functions

**Using the** `tools_db` **database, what is the tool with the longest name based on character length?**

USB Rubber Ducky

**Using the** `tools_db` **database, what is the total sum of all tools?**

1444

**Using the** `tools_db` **database, what are the tool names where the amount does not end in 0, and group the tool names concatenated by " & ".**

Flipper Zero & iCopy-XS

### Task 9 : Conclusion

### Conclusion

Congratulations on completing SQL Fundamentals! This room has hopefully taught you the importance of databases in computing; with so many use cases (which we frequently interact with in our day-to-day lives), learning the fundamentals is a must if you want to pursue a career in cyber security. To round things off, let’s summarise everything that was covered in this room:

* **Databases** are collections of organised data or information that are easily accessible and can be manipulated or analysed.
* The two primary types of databases are **relational databases** (used to store structured data) and **non-relational databases** (used to store data in a non-tabular format).
* Relational databases are made up of **Tables, columns and rows**. **Primary keys** can ensure a record is unique within a table, and **foreign keys** can allow for a relationship/connection to be made between two (or more) tables.
* **SQL** is an easy-to-learn programming language that can be used to interact with relational databases.
* **Database and Table statements** can be used to create/manipulate databases and tables.
* CRUD Operations (**INSERT, SELECT, UPDATE** and **DELETE**) can be used to manage data in a database.
* In SQL, we can use **clauses** to define how data should be retrieved, filtered, sorted, or grouped.
* The efficient use of **operators** and **functions** can help us filter and manipulate data in SQL.

**I’m ready to move forward and learn more about web application security.**

No Answer Needed

**Happy hacking :)**

**🧑‍💻 like , share , comment**

**&**

**FOLLOW FOR MORE …….**

[Jawstar](https://medium.com/u/c42b7c126e68)
