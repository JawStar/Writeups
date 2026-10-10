---
title: "Gophish: Open-Source Phishing Toolkit | By jawstar"
date: 2024-10-27
platform: other
source_file: "2024-10-27_Gophish--Open-Source-Phishing-Toolkit---By-jawstar-a3ce1a62fb27.html"
---

---

### Gophish: Open-Source Phishing Toolkit | By jawstar

### Introduction

Phishing attacks continue to be a significant cybersecurity threat, and organizations must proactively educate their employees and strengthen their defenses. GoPhish, a powerful open-source phishing framework, offers an effective solution for conducting controlled phishing simulations. In this step-by-step guide, we will walk you through the process of setting up GoPhish on a Linux machine and configuring your own open-source SMTP server. By following these instructions, you can conduct safe and realistic phishing simulations to raise awareness and enhance your organization’s security posture.

![](https://cdn-images-1.medium.com/max/800/1*s9bp8ogZgbELmX-djnRHlg.png)

You should be able to log in with the username: **admin** and password: **gophish.**

**Step 1: Preparing the Linux Machine**

1. Launch a Linux virtual machine or use an existing server with administrative privileges.
2. Ensure that the server is up to date by running.

```
sudo apt update  
sudo apt upgrade
```

**Step 2: Installing and Configuring GoPhish**

1. Download the latest version of GoPhish from the official GitHub repository
2. Extract the downloaded ZIP file
3. Move into the GoPhish directory
4. Start the GoPhish server

```
1. wget https://github.com/gophish/gophish/releases/download/v0.12.1/gophish-v0.12.1-linux-32bit.zip  
2. unzip gophish-v0.12.1-linux-32bit.zip  
3. cd gophish-v0.12.1-linux-32bit  
4. ./gophish
```

**Step 3: Accessing the GoPhish Web Interface**

1. Open a web browser and go to `http://<your-server-ip>:3333` (replace `<your-server-ip>` with the server's IP address).
2. Create a new admin account and log in to the GoPhish dashboard.

**Step 4: Configuring SMTP Settings for GoPhish**

1. Under the “Settings” tab, navigate to the “Sending Profiles” section.
2. Click on “Add Sending Profile” and provide the details for your open-source SMTP server:

* SMTP Server: The IP address or hostname of your SMTP server.
* SMTP Port: The SMTP port used by your server (e.g., 25, 587).
* From Address: The email address that will appear as the sender of the phishing emails.
* From Name: The name associated with the sender’s email address.
* SMTP Username: If your SMTP server requires authentication, provide the username.
* SMTP Password: If authentication is required, enter the corresponding password.
* Use TLS/SSL: Enable this option if your SMTP server requires a secure connection.

**Step 5: Configuring the Open-Source SMTP Server (e.g., Postfix)**

1. Install the Postfix SMTP server
2. During the installation, choose “Internet Site” as the Postfix configuration type.
3. Enter your domain name when prompted, or use the default value (e.g., example.com).
4. Configure Postfix to allow relay from the GoPhish server’s IP address. Edit the configuration file:

```
sudo apt install postfix  
sudo nano /etc/postfix/main.cf
```

Add the following line at the end of the file, replacing `<gophish-server-ip>` with the IP address of your GoPhish server and save and close the file:

```
mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128 <gophish-server-ip>/32
```

**Step 7: Creating a Phishing Campaign in GoPhish**

1. Click on the “Campaigns” tab and then “New Campaign” to start a new phishing campaign.
2. Provide the campaign details, including the name, sending profile (choose the SMTP configuration you set up), and landing page URL.
3. Customize the email template with a convincing subject, sender name, and content.
4. Add target email addresses either by importing a list or creating a group.
5. Optionally, set advanced settings like sending delays or attachment payloads.
6. Launch the campaign and monitor its progress from the GoPhish dashboard.

### Conclusion

By implementing GoPhish for phishing simulation on a Linux machine and configuring your own open-source SMTP server, you have taken a proactive step in enhancing your organization’s cybersecurity awareness and defense capabilities. Remember, conducting phishing simulations should always be done ethically and with the proper authorization of relevant parties. Regularly test your employees’ readiness, educate them on identifying phishing attempts, and continuously improve your cybersecurity practices to stay one step ahead of potential threats. With GoPhish, you have a powerful tool to help fortify your organization against phishing attacks in an ever-evolving digital landscape.

HAPPY HACKING :)

FOLLOW FOR MORE…………………..
