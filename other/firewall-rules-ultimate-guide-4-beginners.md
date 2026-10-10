---
title: "Firewall Rules Ultimate Guide 4 Beginners"
date: 2025-01-08
platform: other
source_file: "2025-01-08_Firewall-Rules-Ultimate-Guide-4-Beginners-52d1593ef0f7.html"
---

---

### Firewall Rules Ultimate Guide 4 Beginners

Auth : [Jawstar](https://medium.com/u/c42b7c126e68)

![](https://cdn-images-1.medium.com/max/800/0*ilAJsyw_lpifVNjQ)

### Firewall Rules

#### 1. Allow SSH (port 22) from a specific IP address:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”192.168.1.2"  
port protocol=”tcp” port=”22" accept’ — permanent  
sudo firewall-cmd — reload**

#### 2. Block incoming ICMP (ping) requests:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" protocol value=”icmp” drop’ —   
permanent  
sudo firewall-cmd — reload**

#### 3. Allow traffic from a specific network range:

**sudo firewall-cmd — zone=public — add-source=192.168.0.0/24 — permanent  
sudo firewall-cmd — reload**

#### 4. Open a custom port range (e.g., 5000–6000):

**sudo firewall-cmd — zone=public — add-port=5000–6000/tcp — permanent  
sudo firewall-cmd — reload**

#### 5. Block outgoing traffic on a specific port (e.g., 8080):

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" port protocol=”tcp”  
port=”8080" drop’ — permanent  
sudo firewall-cmd — reload**

#### 6. Allow FTP (port 21) for a specific interface:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" interface=”eth0" port  
protocol=”tcp” port=”21" accept’ — permanent  
sudo firewall-cmd — reload**

#### 7. Block specific service (e.g., Telnet):

**sudo firewall-cmd — zone=public — remove-service=telnet — permanent  
sudo firewall-cmd — reload**

#### 8. Allow multicast traffic:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”224.0.0.0/4"  
drop’ — permanent  
sudo firewall-cmd — reload**

#### 9. Allow specific application traffic (e.g., Apache):

**sudo firewall-cmd — zone=public — add-service=http — permanent  
sudo firewall-cmd — reload**

#### 10. Block traffic from a specific country (e.g., Russia):

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”0.0.0.0/0"  
invert source=”country” destination country=”RU” drop’ — permanent  
sudo firewall-cmd –reload**

#### 11. Allow DNS (port 53) for both TCP and UDP:

**sudo firewall-cmd — zone=public — add-port=53/tcp — add-port=53/udp — permanent  
sudo firewall-cmd — reload**

#### 12. Allow incoming traffic on a specific network interface (e.g., eth1):

**sudo firewall-cmd — zone=public — add-interface=eth1 — permanent  
sudo firewall-cmd — reload**

#### 13. Block all incoming traffic except for established connections:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”0.0.0.0/0"  
drop’ — permanent  
sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”0.0.0.0/0"  
accept’ — permanent  
sudo firewall-cmd — reload**

#### 14. Allow only specific IP addresses on a certain port (e.g., 8080):

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" port protocol=”tcp”  
port=”8080" source address=”192.168.1.2" accept’ — permanent  
sudo firewall-cmd — reload**

#### 15. Open port 123 for NTP (Network Time Protocol):

**sudo firewall-cmd — zone=public — add-port=123/udp — permanent  
sudo firewall-cmd — reload16.  
Allow ICMP echo requests (ping) from a specific subnet:  
sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source  
address=”192.168.0.0/24" protocol=”icmp” accept’ — permanent  
sudo firewall-cmd — reload**

#### 17. Block traffic to a specific IP address:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”0.0.0.0/0"  
destination address=”192.168.1.2" drop’ — permanent  
sudo firewall-cmd — reload**

#### 18. Allow SSH on a non-default port (e.g., 2222):

**sudo firewall-cmd — zone=public — add-port=2222/tcp — permanent  
sudo firewall-cmd — reload**

#### 19. Allow traffic based on a custom service:

**sudo firewall-cmd — zone=public — add-service=my\_custom\_service — permanent  
sudo firewall-cmd — reload**

#### 20. Block all incoming and outgoing traffic:

**sudo firewall-cmd — zone=public — set-target=DROP — permanent  
sudo firewall-cmd — reload**

#### 21. Allow RDP (Remote Desktop Protocol — port 3389) from a specific IP address:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”192.168.1.2"  
port protocol=”tcp” port=”3389" accept’ — permanent  
sudo firewall-cmd — reload**

#### 22. Allow traffic for a specific application (e.g., PostgreSQL):

**sudo firewall-cmd — zone=public — add-service=postgresql — permanent  
sudo firewall-cmd — reload**

#### 23. Allow incoming connections on a specific port range (e.g., 8000–9000) for UDP:

**sudo firewall-cmd — zone=public — add-port=8000–9000/udp — permanent  
sudo firewall-cmd — reload24.  
Allow SIP (Session Initiation Protocol — port 5060) for VoIP:  
sudo firewall-cmd — zone=public — add-port=5060/udp — permanent  
sudo firewall-cmd — reload**

#### 25. Block specific MAC address:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source  
mac=”00:11:22:33:44:55" drop’ — permanent  
sudo firewall-cmd — reload**

#### 26. Allow traffic for a specific user:

**sudo firewall-cmd — direct — add-rule ipv4 filter OUTPUT 0 -m owner — uid-owner username -j  
ACCEPT  
sudo firewall-cmd — reload**

#### 27. Allow NFS (Network File System — port 2049) for file sharing:

**sudo firewall-cmd — zone=public — add-port=2049/tcp — permanent  
sudo firewall-cmd — reload**

#### 28. Allow Docker containers to communicate on a bridge network:

**sudo firewall-cmd — zone=trusted — add-source=172.17.0.0/16 — permanent  
sudo firewall-cmd — reload**

#### 29. Block outgoing traffic to a specific IP address:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" destination  
address=”203.0.113.10" drop’ — permanent  
sudo firewall-cmd — reload**

#### 30. Allow SNMP (Simple Network Management Protocol — port 161) for monitoring:

**sudo firewall-cmd — zone=public — add-port=161/udp — permanent  
sudo firewall-cmd — reload**

#### 31. Allow incoming traffic on a specific port for IPv6 (e.g., port 8080):

**sudo firewall-cmd — zone=public — add-port=8080/tcp — permanent — ipv6  
sudo firewall-cmd — reload32.  
Block all traffic except for a specific service (e.g., SSH):  
sudo firewall-cmd — zone=public — add-service=ssh — permanent  
sudo firewall-cmd — zone=public — remove-service={http,https} — permanent  
sudo firewall-cmd — reload**

#### 33. Allow traffic from and to a specific network interface (e.g., eth0):

**sudo firewall-cmd — zone=public — add-interface=eth0 — permanent  
sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source interface=”eth0"  
accept’ — permanent  
sudo firewall-cmd — reload**

#### 34. Allow DNS traffic only for a specific domain:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”0.0.0.0/0"  
destination domain=”example.com” accept’ — permanent  
sudo firewall-cmd — reload**

#### 35. Block traffic from a specific country for a specific service (e.g., SSH):

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”0.0.0.0/0"  
invert source=”country” destination port=”22" protocol=”tcp” drop’ — permanent  
sudo firewall-cmd — reload**

#### 36. Allow multicast traffic for IPv6:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv6" source address=”fe80::/10"  
drop’ — permanent  
sudo firewall-cmd — reload**

#### 37. Allow traffic for a specific UDP service (e.g., syslog — port 514):

**sudo firewall-cmd — zone=public — add-port=514/udp — permanent  
sudo firewall-cmd — reload**

#### 38. Allow traffic from a specific MAC address:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source  
mac=”00:11:22:33:44:55" accept’ — permanent  
sudo firewall-cmd — reload**

#### 39. Allow outgoing SMTP traffic (port 25) for a specific IP range:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source  
address=”192.168.1.0/24" port protocol=”tcp” port=”25" accept’ — permanent  
sudo firewall-cmd — reload**

#### 40. Allow traffic on a custom port range for both TCP and UDP (e.g., 7000–8000):

**sudo firewall-cmd — zone=public — add-port=7000–8000/tcp — add-port=7000–8000/udp —   
permanent  
sudo firewall-cmd — reload**

#### 41. IP address: Allow traffic on a specific port range for both TCP and UDP, limiting it to a specific

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”192.168.1.2"  
port port=”8000–9000" protocol=”tcp” accept’ — permanent  
sudo firewall-cmd — reload**

#### **42. Block traffic to a specific port from a range of IP addresses:**

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source  
address=”192.168.0.0/24" port port=”1234" protocol=”tcp” drop’ — permanent  
sudo firewall-cmd — reload**

#### 43. Allow traffic for a specific user on a custom port:

**sudo firewall-cmd — direct — add-rule ipv4 filter OUTPUT 0 -m owner — uid-owner username -p tcp —   
dport 9876 -j ACCEPT  
sudo firewall-cmd — reload**

#### 44. Block outgoing traffic to a specific domain:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" destination  
domain=”example.com” drop’ — permanent  
sudo firewall-cmd — reload**

#### 45. Allow NTP traffic (port 123) for both TCP and UDP:

**sudo firewall-cmd — zone=public — add-port=123/tcp — add-port=123/udp — permanent  
sudo firewall-cmd — reload**

#### 46. Allow traffic from a specific country on a specific port (e.g., 8080):

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source address=”0.0.0.0/0"  
source country=”US” port port=”8080" protocol=”tcp” accept’ — permanent  
sudo firewall-cmd — reload**

#### 47. Allow traffic for a specific service on a custom interface (e.g., eth1):

**sudo firewall-cmd — zone=public — add-service=http — add-interface=eth1 — permanent  
sudo firewall-cmd — reload**

#### 48. Allow incoming and outgoing traffic on a specific port only for a specific time:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" port port=”9876"  
protocol=”tcp” accept’ — permanent — active-from=Mon-Fri 08:00–17:00  
sudo firewall-cmd — reload**

#### 49. Allow traffic for a specific service from a specific IP address range:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source  
address=”192.168.0.0/24" service name=”ftp” accept’ — permanent  
sudo firewall-cmd — reload**

#### 50. Allow traffic from and to a specific port for a range of IP addresses:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source  
address=”192.168.0.0/24" port port=”5432" protocol=”tcp” accept’ — permanent  
sudo firewall-cmd –reload**

#### 51. Allow traffic on a specific port range for both TCP and UDP, limiting it to a specific MAC address:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source  
mac=”00:11:22:33:44:55" port port=”8000–9000" protocol=”tcp” accept’ — permanent  
sudo firewall-cmd — reload**

#### 52. Block traffic from a specific user on a custom port:

**sudo firewall-cmd — direct — add-rule ipv4 filter OUTPUT 0 -m owner — uid-owner username -p tcp —   
dport 9876 -j DROP  
sudo firewall-cmd — reload**

#### 53. Allow traffic on a specific port range from a specific country:

**sudo firewall-cmd — zone=public — add-rich-rule=’rule family=”ipv4" source country=”US” port  
port=”8000–9000" protocol=”tcp” accept’ — permanent  
sudo firewall-cmd — reload**

THANK YOU !!!!

[**JAWSTAR**  
*Hello*buymeacoffee.com](https://buymeacoffee.com/jawstar_9999 "https://buymeacoffee.com/jawstar_9999")
