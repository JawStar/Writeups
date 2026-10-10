---
title: "GoPhish : 2024| Phishing  write up Tryhackme By jawstar"
date: 2024-10-27
platform: tryhackme
source_file: "2024-10-27_GoPhish---2024--Phishing--write-up-Tryhackme-By-jawstar-0f95813b2450.html"
---

---

### GoPhish : 2024| Phishing write up Tryhackme By jawstar

![](https://cdn-images-1.medium.com/max/800/1*YapuibuaVxSZ42OHX5zXvQ.jpeg)

You should be able to log in with the username: **admin** and password: **tryhackme**

**Sending Profiles:**

Sending profiles are the connection details required to actually send your Phishing emails; this is just simply an SMTP server that you have access to. Click the Sending Profiles link on the left-hand menu and then click the “New Profile” button.

Next, add in the following information as per the screenshot below:

Name: **Local Server**

From: **noreply@redteam.thm**

Host: **127.0.0.1:25**

![](https://cdn-images-1.medium.com/max/800/1*gyEWxz9qcDnNlf-ENj6i6g.png)

Then click **Save Profile**.

**Landing Pages:**

Next, we’re going to set up the landing page; this is the website that the Phishing email is going to direct the victim to; this page is usually a spoof of a website the victim is familiar with.

Click the Landing Pages link on the left-hand menu and then click the “New Page” button.

Give the Landing Page the name **ACME Login**, next in the HTML box; you’ll need to press the **Source** button to allow us to enter the HTML code as shown below:

```
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>ACME IT SUPPORT - Admin Panel</title>  
    <style>  
        body { font-family: "Ubuntu", monospace; text-align: center }  
        div.login-form { margin:auto; width:300px; border:1px solid #ececec; padding:10px;text-align: left;font-size:13px;}  
        div.login-form div input { margin-bottom:7px;}  
        div.login-form input { width:280px;}  
        div.login-form div:last-child { text-align: center; }  
        div.login-form div:last-child input { width:100px;}  
    </style>  
</head>  
<body>  
    <h2>ACME IT SUPPORT</h2>  
    <h3>Admin Panel</h3>  
    <form method="post">  
        <div class="login-form">  
            <div>Username:</div>  
            <div><input name="username"></div>  
            <div>Password:</div>  
            <div><input type="password" name="password"></div>  
            <div><input type="submit" value="Login"></div>  
        </div>  
    </form>  
</body>  
</html>
```

Click the **Source** button again, and you should see a login box with username and password fields as per the image below, also click the **Capture Submitted Data** box and then also the **Capture Passwords** box and then click the Save Page button.

![](https://cdn-images-1.medium.com/max/800/1*OG6rTx_mt9m_gHNu2IBAmA.png)

**Email Templates:**

This is the design and content of the email you’re going to actually send to the victim; it will need to be persuasive and contain a link to your landing page to enable us to capture the victim’s username and password. Click the **Email Templates** link on the left-hand menu and then click the **New Template** button. Give the template the name **Email 1**, the subject **New Message Received**, click the HTML tab, and then the Source button to enable HTML editor mode. In the contents write a persuasive email that would convince the user to click the link, the link text will need to be set to [**https://admin.acmeitsupport.thm**](https://admin.acmeitsupport.thm), but the actual link will need to be set to **{{.URL}}** which will get changed to our spoofed landing page when the email gets sent, you can do this by highlighting the link text and then clicking the link button on the top row of icons, make sure to set the **protocol** dropdown to **<other>**.

![](https://cdn-images-1.medium.com/max/800/0*_TWSiH3wn_9eLuk6.png)![](https://cdn-images-1.medium.com/max/800/1*gcsUQuw9EsUV54S0vACKNg.png)

Your email should look similar to the screenshot below. Click **Save Template** once complete.

![](https://cdn-images-1.medium.com/max/800/1*QqDrdSTxyQym1InDKJF3Gg.png)

**Users & Groups**

This is where we can store the email addresses of our intended targets. Click the **Users & Groups** link on the left-hand menu and then click the **New Group** button. Give the group the name **Targets** and then add the following email addresses:

martin@acmeitsupport.thm  
 brian@acmeitsupport.thm  
 accounts@acmeitsupport.thm

Click the **Save Template** button; once completed, it should look like the below screenshot:

![](https://cdn-images-1.medium.com/max/800/1*nNCJxJSGj0S52WmoBzPmfw.png)

**Campaigns**

Now it’s time to send your first emails; click the **Campaigns** link on the left-hand menu and then click the **New Campaign** button. Set the following values for the inputs, as per the screenshot below:

Name: Campaign One

Email Template: Email 1

Landing Page: ACME Login

URL: <http://MACHINE_IP>

Launch Date: For this lab set it to 2 days ago just to make sure there is no complication with different timezones, in a real operation this would be set correctly.

Sending Profile: Local Server

Groups: Targets

Once completed, click the **Launch Campaign** button, which will produce an **Are You Sure** prompt where you can just press the **Launch** button.

![](https://cdn-images-1.medium.com/max/800/1*atYo0GpJgxfqbQDs4giADA.png)

You’ll then be redirected to the results page of the campaign.

**Results**

The results page gives us an idea of how the phishing campaign is performing by letting us know how many emails have been delivered, opened, clicked and how many users have submitted data to our spoof website.

You’ll see at the bottom of the screen a breakdown for each email address; you’ll notice that both Martin’s and Brian’s email has been sent successfully, but the account’s email has resulted in an error.

![](https://cdn-images-1.medium.com/max/800/1*1kbWpsqX-rxNawQJoExqYg.png)

We can dig in the error more by clicking the dropdown arrow next to the account’s row, and by viewing the details or the error, we can see an error message saying the user is unknown.

![](https://cdn-images-1.medium.com/max/800/1*OhKLqKWvbyr8p1M9f0BGOw.png)

After a minute and providing you’ve followed the instructions correctly, you should see the status of brian change to **Submitted Data.**

![](https://cdn-images-1.medium.com/max/800/1*m2q81lN-43GHGgUo4oq7Fg.png)

Expanding Brian’s details and then viewing the details for the submitted data, you should be able to see Brian’s username and password, which will help you answer the question below.

![](https://cdn-images-1.medium.com/max/800/1*as5GSaKOWp87pYWfgSEONw.png)

Password for Brian = p4$$w0rd!

HAPPY HACKING :)
