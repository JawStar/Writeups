---
title: "Google Dorking Tryhackme Writeup"
date: 2024-11-01
platform: tryhackme
source_file: "2024-11-01_Google-Dorking-Tryhackme-Writeup-0d7c824bb7a6.html"
---

---

### Google Dorking Tryhackme Writeup

![](https://cdn-images-1.medium.com/max/800/1*lnmDdK5t9f6KpRGKWzkdAQ.png)![](https://cdn-images-1.medium.com/max/800/1*f4xZfB46cYmd0IT0dVoFPg.png)

### Task 1 : Ye Ol’ Search Engine

Google is arguably the most famous example of “Search Engines”, I mean who remembers Ask Jeeves? *shudders*

Now it might be rather patronising explaining how these “Search Engines” work, but there’s a lot more going on behind the scenes then what we see. More importantly, we can leverage this to our advantage to find all sorts of things that a wordlist wouldn’t. Researching as a whole — especially in the context of Cybersecurity encapsulates almost everything you do as a pentester. [MuirlandOracle](https://tryhackme.com/p/MuirlandOracle) has created a [fantastic room](https://tryhackme.com/room/introtoresearch) on learning the attitudes towards how to research, and what information you can gain from it exactly.

“Search Engines” such as Google are huge indexers — specifically, indexers of content spread across the World Wide Web.

**Roger dodger!**

No Answer Needed

### Task 2 : Let’s Learn About Crawlers

**What are Crawlers and how do They Work?**

These crawlers discover content through various means. One being by pure discovery, where a URL is visited by the crawler and information regarding the content type of the website is returned to the search engine. In fact, there are lots of information modern crawlers scrape — but we will discuss how this is used later. Another method crawlers use to discover content is by following any and all URLs found from previously crawled websites. Much like a virus in the sense that it will want to traverse/spread to everything it can.

### **Let’s Visualise Some Things…**

The diagram below is a high-level abstraction of how these web crawlers work. Once a web crawler discovers a domain such as **mywebsite.com**, it will index the entire contents of the domain, looking for keywords and other miscellaneous information — but I will discuss this miscellaneous information later.

In the diagram above, “**mywebsite.com**” has been scraped as having the keywords as “Apple” “Banana” and “Pear”. These keywords are stored in a dictionary by the crawler, who then returns these to the search engine i.e. Google. Because of this persistence, Google now knows that the domain “**mywebsite.com**” has the keywords “Apple”, “Banana” and “Pear”. As only one website has been crawled, if a user was to search for “Apple”…“**mywebsite.com**” would appear. This would result in the same behaviour if the user was to search for “Banana”. As the indexed contents from the crawler report the domain as having “Banana”, it will be displayed to the user.

As illustrated below, a user submits a query to the search engine of “Pears”. Because the search engine only has the contents of one website that has been crawled with the keyword of “Pears” it will be the only domain that is presented to the user.

However, as we previously mentioned, **crawlers attempt to traverse, termed as crawling, every URL and file that they can find!** Say if “**mywebsite.com**” had the same keywords as before (“Apple”, “Banana” and “Pear”), but also had a URL to another website “**anotherwebsite.com**”, the crawler will then attempt to traverse everything on that URL (**anotherwebsite.com**) and retrieve the contents of everything within that domain respectively.

This is illustrated in the diagram below. The crawler initially finds “**mywebsite.com**”, where it crawls the contents of the website — finding the same keywords (“Apple”, “Banana” and “Pear”) as before, but it has additionally found an external URL. Once the crawler is complete on “**mywebsite.com**”, it’ll proceed to crawl the contents of the website “**anotherwebsite.com**”, where the keywords (“Tomatoes”, “Strawberries” and “Pineapples”) are found on it. The crawler’s dictionary now contains the contents of both “**mywebsite.com**” and “**anotherwebsite.com**”, which is then stored and saved within the search engine.

### **Recapping**

So to recap, the search engine now has knowledge of two domains that have been crawled:  
 1. mywebsite.com  
 2. anotherwebsite.com

Although note that “**anotherwebsite.com**” was only crawled because it was referenced by the first domain “**mywebsite.com**”. Because of this reference, the search engine knows the following about the two domains:

**Name the key term of what a “Crawler” is used to do**

Index

**What is the name of the technique that “Search Engines” use to retrieve this information about websites?**

Crawling

**What is an example of the type of contents that could be gathered from a website?**

Keywords

### Task 3 : Enter: Search Engine Optimisation

**Search Engine Optimisation**

Search Engine Optimisation or SEO is a prevalent and lucrative topic in modern-day search engines. In fact, so much so, that entire businesses capitalise on improving a domains SEO “ranking”. At an abstract view, search engines will “prioritise” those domains that are easier to index. There are many factors in how “optimal” a domain is — resulting in something similar to a point-scoring system.

**But…Who or What Regulates these “Crawlers”?**

Aside from the search engines who provide these “Crawlers”, website/web-server owners themselves ultimately stipulate what content “Crawlers” can scrape. Search engines will want to retrieve **everything** from a website — but there are a few cases where we wouldn’t want **all** of the contents of our website to be indexed! Can you think of any…? How about a secret administrator login page? We don’t want **everyone** to be able to find that directory — especially through a google search.

Introducing Robots.txt…

**Use the same** [**SEO checkup tool**](https://web.dev/measure/) **and other online alternatives to see how their results compare for** [**https://tryhackme.com**](https://tryhackme.com) **and** [**http://googledorking.cmnatic.co.uk**](http://googledorking.cmnatic.co.uk)

No Answer Needed

### Task 4 : Beepboop — Robots.txt

**Robots.txt**

Similar to “Sitemaps” which we will later discuss, this file is the first thing indexed by “Crawlers” when visiting a website.

But what is it?

This file must be served at the root directory — specified by the webserver itself. Looking at this files extension of **.txt**, its fairly safe to assume that it is a text file.

The text file defines the permissions the “Crawler” has to the website. For example, what type of “Crawler” is allowed (I.e. You only want Google’s “Crawler” to index your site and not MSN’s). Moreover, Robots.txt can specify what files and directories that we do or don’t want to be indexed by the “Crawler”.

In this case:

1. Any “Crawler” can index the site

2. The “Crawler” is allowed to index the entire contents of the site

3. The “Sitemap” is located at <http://mywebsite.com/sitemap.xml>

How about Preventing Files From Being Indexed?

Whilst you can make manual entries for every file extension that you don’t want to be indexed, you will have to provide the directory it is within, as well as the full filename. Imagine if you had a huge site! What a pain…Here’s where we can use a bit of [regexing](https://www.rexegg.com/regex-quickstart.html).

![](https://cdn-images-1.medium.com/max/800/0*NYreG99PRoD6BLzl.png)

In this case:

1. Any “Crawler” can index the site

2. However, the “Crawler” cannot index **any** file that has the extension of **.ini** within any directory/sub-directory using (“$”) of the site.

3. The “Sitemap” is located at <http://mywebsite.com/sitemap.xml>

**Where would “robots.txt” be located on the domain “ablog.com”**

ablog.com/robots.txt

**If a website was to have a sitemap, where would that be located?**

/sitemap.xml

**How would we only allow “Bingbot” to index the website?**

User-agent: Bingbot

**How would we prevent a “Crawler” from indexing the directory “/dont-index-me/”?**

Disallow: /dont-index-me/

**What is the extension of a Unix/Linux system configuration file that we might want to hide from “Crawlers”?**

.conf

### Task 5 : Sitemaps

Sitemaps

Comparable to geographical maps in real life, “Sitemaps” are just that — but for websites!

“Sitemaps” are indicative resources that are helpful for crawlers, as they specify the necessary routes to find content on the domain. The below illustration is a good example of the structure of a website, and how it may look on a “Sitemap”:

![](https://cdn-images-1.medium.com/max/800/0*3bpkh4hxNuUi53Iu.png)

The blue rectangles represent the **route** to nested-content, similar to a directory I.e. “Products” for a store. Whereas, the green rounded-rectangles represent an actual page. However, this is for illustration purposes only — “Sitemaps” don’t look like this in the real world. They look something much more similar to this:

![](https://cdn-images-1.medium.com/max/800/0*KLH4S7hrcow4qZ12.png)

“Sitemaps” are XML formatted. I won’t explain the structure of this file-formatting as the room [XXE](https://tryhackme.com/jr/xxe) created by [falconfeast](https://tryhackme.com/p/falconfeast) does a mighty fine job of this.

The presence of “Sitemaps” holds a fair amount of weight in influencing the “optimisation” and favorability of a website. As we discussed in the “Search Engine Optimisation” task, these maps make the traversal of content much easier for the crawler!

Why are “Sitemaps” so Favourable for Search Engines?

Search engines are lazy! Well, better yet — search engines have a lot of data to process. The efficiency of how this data is collected is paramount. Resources like “Sitemaps” are extremely helpful for “Crawlers” as the necessary routes to content are already provided! All the crawler has to do is scrape this content — rather than going through the process of manually finding and scraping. Think of it as using a wordlist to find files instead of randomly guessing their names!

The easier a website is to “Crawl”, the more optimised it is for the “Search Engine”

**What is the typical file structure of a “Sitemap”?**

XML

**What real life example can “Sitemaps” be compared to?**

Map

**Name the keyword for the path taken for content on a website**

Route

### Task 6 : What is Google Dorking?

Using Google for Advanced Searching

As we have previously discussed, Google has a lot of websites crawled and indexed. Your average Joe uses Google to look up Cat pictures (I’m more of a Dog person myself…). Whilst Google will have many Cat pictures indexed ready to serve to Joe, this is a rather trivial use of the search engine in comparison to what it can be used for.  
For example, we can add operators such as that from programming languages to either increase or decrease our search results — or perform actions such as arithmetic!

![](https://cdn-images-1.medium.com/max/800/0*5cAot0D8eASN4Jtw.png)

Say if we wanted to narrow down our search query, we can use quotation marks. Google will interpret everything in between these quotation marks as exact and only return the results of the exact phrase provided…Rather useful to filter through the rubbish that we don’t need as we have done so below:

![](https://cdn-images-1.medium.com/max/800/0*Pox0a5vU3qqjnMdi.png)

Refining our Queries

We can use terms such as “**site**” (such as bbc.co.uk) and a query (such as “gchq news”) to search the specified site for the keyword we have provided to filter out content that may be harder to find otherwise. For example, using the “site” and “query” of “bbc” and “gchq”, we have modified the order of which Google returns the results.

In the screenshot below, searching for “gchq news” returns approximately 1,060,000 results from Google. The website that we want is ranked behind GCHQ’s actual website:

![](https://cdn-images-1.medium.com/max/800/0*e7Jq-QqdU0eLs5r8.png)

But we don’t want that…We wanted “**bbc.co.uk**” first, so let’s refine our search using the “**site**” term. Notice how in the screenshot below, Google returns with much fewer results? Additionally, the page that we didn’t want has disappeared, leaving the site that we did actually want!

![](https://cdn-images-1.medium.com/max/800/0*_fOOf1WcRQsgFJbH.png)

Of course, in this case, GCHQ is quite a topic of discussion — so there’ll be a load of results regardless.

So What Makes “Google Dorking” so Appealing?

First of all — and the important part — it’s legal! It’s all indexed, publicly available information. However, what you do with this is where the question of legality comes in to play…

**What would be the format used to query the site bbc.co.uk about flood defences**

site: bbc.co.uk flood defences

**What term would you use to search by file type?**

filetype:

**What term can we use to look for login pages?**

intitle: login

**Happy hacking :)**

**🧑‍💻 like , share , comment**

**&**

**FOLLOW FOR MORE …….**

[Jawstar](https://medium.com/u/c42b7c126e68)
