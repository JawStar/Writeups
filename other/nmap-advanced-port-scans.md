---
title: "Nmap Advanced Port Scans"
date: 2024-11-17
platform: other
source_file: "2024-11-17_Nmap-Advanced-Port-Scans-f8379070fb09.html"
---

---

### Nmap Advanced Port Scans

![](https://cdn-images-1.medium.com/max/800/0*vOS5Ahq9X3Q5HcZn.png)

### Some of these scan types can be useful against specific systems, while others are useful in particular network setups. We will cover the following types of port scans:

* Null Scan
* FIN Scan
* Xmas Scan
* Maimon Scan
* ACK Scan
* Window Scan
* Custom Scan

Moreover, we will cover the following:

* Spoofing IP
* Spoofing MAC
* Decoy Scan
* Idle/Zombie Scan

#### Let’s start with the following three types of scans:

* Null Scan
* FIN Scan
* Xmas Scan

### Null Scan

The null scan does not set any flag; all six flag bits are set to zero. You can choose this scan using the `-sN` option. A TCP packet with no flags set will not trigger any response when it reaches an open port, as shown in the figure below. Therefore, from Nmap’s perspective, a lack of reply in a null scan indicates that either the port is open or a firewall is blocking the packet.

![](https://cdn-images-1.medium.com/max/800/0*nV4GSW2mUHDlSUP5.png)

However, we expect the target server to respond with an RST packet if the port is closed. Consequently, we can use the lack of RST response to figure out the ports that are not closed: open or filtered.

![](https://cdn-images-1.medium.com/max/800/0*xPgHg6SpENVbWHVX.png)

Below is an example of a null scan against a Linux server. The null scan we carried out has successfully identified the six open ports on the target system. Because the null scan relies on the lack of a response to infer that the port is not closed, it cannot indicate with certainty that these ports are open; there is a possibility that the ports are not responding due to a firewall rule.

```
sudo nmap -sN MACHINE_IP
```

### FIN Scan

The FIN scan sends a TCP packet with the FIN flag set. You can choose this scan type using the `-sF` option. Similarly, no response will be sent if the TCP port is open. Again, Nmap cannot be sure if the port is open or if a firewall is blocking the traffic related to this TCP port.

![](https://cdn-images-1.medium.com/max/800/0*odffR3ASq-QQx2Me.png)

However, the target system should respond with an RST if the port is closed. Consequently, we will be able to know which ports are closed and use this knowledge to infer the ports that are open or filtered. It’s worth noting some firewalls will ‘silently’ drop the traffic without sending an RST.

![](https://cdn-images-1.medium.com/max/800/0*Kh_5oIK6KFMssSss.png)

```
sudo nmap -sF MACHINE_IP
```

### Xmas Scan

The Xmas scan gets its name after Christmas tree lights. An Xmas scan sets the FIN, PSH, and URG flags simultaneously. You can select Xmas scan with the option `-sX`.

Like the Null scan and FIN scan, if an RST packet is received, it means that the port is closed. Otherwise, it will be reported as open|filtered.

The following two figures show the case when the TCP port is open and the case when the TCP port is closed.

![](https://cdn-images-1.medium.com/max/800/0*kZLeXaW-o4asCt9f.png)

```
sudo nmap -sX MACHINE_IP
```

### TCP Maimon Scan

Uriel Maimon first described this scan in 1996. In this scan, the FIN and ACK bits are set. The target should send an RST packet as a response. However, certain BSD-derived systems drop the packet if it is an open port exposing the open ports. This scan won’t work on most targets encountered in modern networks; however, we include it in this room to better understand the port scanning mechanism and the hacking mindset. To select this scan type, use the `-sM` option.

Most target systems respond with an RST packet regardless of whether the TCP port is open. In such a case, we won’t be able to discover the open ports. The figure below shows the expected behaviour in the cases of both open and closed TCP ports.

![](https://cdn-images-1.medium.com/max/800/0*9n3rayVEBp60UplK.png)

```
sudo nmap -sM 10.10.252.27
```

### TCP ACK Scan

Let’s start with the TCP ACK scan. As the name implies, an ACK scan will send a TCP packet with the ACK flag set. Use the `-sA` option to choose this scan. As we show in the figure below, the target would respond to the ACK with RST regardless of the state of the port. This behaviour happens because a TCP packet with the ACK flag set should be sent only in response to a received TCP packet to acknowledge the receipt of some data, unlike our case. Hence, this scan won’t tell us whether the target port is open in a simple setup.

![](https://cdn-images-1.medium.com/max/800/0*hR23sfJyiYPf5t1x.png)

```
sudo nmap -sA MACHINE_IP
```

### Window Scan

Another similar scan is the TCP window scan. The TCP window scan is almost the same as the ACK scan; however, it examines the TCP Window field of the RST packets returned. On specific systems, this can reveal that the port is open. You can select this scan type with the option `-sW`. As shown in the figure below, we expect to get an RST packet in reply to our “uninvited” ACK packets, regardless of whether the port is open or closed.

![](https://cdn-images-1.medium.com/max/800/0*1367hseIclJSyZ3k.png)

```
sudo nmap -sW MACHINE_IP
```

### Custom Scan

If you want to experiment with a new TCP flag combination beyond the built-in TCP scan types, you can do so using `--scanflags`. For instance, if you want to set SYN, RST, and FIN simultaneously, you can do so using `--scanflags RSTSYNFIN`. As shown in the figure below, if you develop your custom scan, you need to know how the different ports will behave to interpret the results in different scenarios correctly.

![](https://cdn-images-1.medium.com/max/800/0*DPYsNohXUFb2ra8F.png)

### Spoofing and Decoys

In some network setups, you will be able to scan a target system using a spoofed IP address and even a spoofed MAC address. Such a scan is only beneficial in a situation where you can guarantee to capture the response. If you try to scan a target from some random network using a spoofed IP address, chances are you won’t have any response routed to you, and the scan results could be unreliable.

The following figure shows the attacker launching the command `nmap -S SPOOFED_IP MACHINE_IP`. Consequently, Nmap will craft all the packets using the provided source IP address `SPOOFED_IP`. The target machine will respond to the incoming packets sending the replies to the destination IP address `SPOOFED_IP`. For this scan to work and give accurate results, the attacker needs to monitor the network traffic to analyze the replies.

![](https://cdn-images-1.medium.com/max/800/0*-jIGsnFmoZ3_EY0K.png)

In brief, scanning with a spoofed IP address is three steps:

1. Attacker sends a packet with a spoofed source IP address to the target machine.
2. Target machine replies to the spoofed IP address as the destination.
3. Attacker captures the replies to figure out open ports.

In general, you expect to specify the network interface using `-e` and to explicitly disable ping scan `-Pn`. Therefore, instead of `nmap -S SPOOFED_IP MACHINE_IP`, you will need to issue `nmap -e NET_INTERFACE -Pn -S SPOOFED_IP MACHINE_IP` to tell Nmap explicitly which network interface to use and not to expect to receive a ping reply. It is worth repeating that this scan will be useless if the attacker system cannot monitor the network for responses.

When you are on the same subnet as the target machine, you would be able to spoof your MAC address as well. You can specify the source MAC address using `--spoof-mac SPOOFED_MAC`. This address spoofing is only possible if the attacker and the target machine are on the same Ethernet (802.3) network or same WiFi (802.11).

Spoofing only works in a minimal number of cases where certain conditions are met. Therefore, the attacker might resort to using decoys to make it more challenging to be pinpointed. The concept is simple, make the scan appear to be coming from many IP addresses so that the attacker’s IP address would be lost among them. As we see in the figure below, the scan of the target machine will appear to be coming from 3 different sources, and consequently, the replies will go the decoys as well.

![](https://cdn-images-1.medium.com/max/800/0*aWqcUHO9Ac_13S3M.png)

You can launch a decoy scan by specifying a specific or random IP address after `-D`. For example, `nmap -D 10.10.0.1,10.10.0.2,ME MACHINE_IP` will make the scan of MACHINE\_IP appear as coming from the IP addresses 10.10.0.1, 10.10.0.2, and then `ME` to indicate that your IP address should appear in the third order. Another example command would be `nmap -D 10.10.0.1,10.10.0.2,RND,RND,ME MACHINE_IP`, where the third and fourth source IP addresses are assigned randomly, while the fifth source is going to be the attacker’s IP address. In other words, each time you execute the latter command, you would expect two new random IP addresses to be the third and fourth decoy sources.

### Idle/Zombie Scan

Spoofing the source IP address can be a great approach to scanning stealthily. However, spoofing will only work in specific network setups. It requires you to be in a position where you can monitor the traffic. Considering these limitations, spoofing your IP address can have little use; however, we can give it an upgrade with the idle scan.

The idle scan, or zombie scan, requires an idle system connected to the network that you can communicate with. Practically, Nmap will make each probe appear as if coming from the idle (zombie) host, then it will check for indicators whether the idle (zombie) host received any response to the spoofed probe. This is accomplished by checking the IP identification (IP ID) value in the IP header. You can run an idle scan using `nmap -sI ZOMBIE_IP MACHINE_IP`, where `ZOMBIE_IP` is the IP address of the idle host (zombie).

The idle (zombie) scan requires the following three steps to discover whether a port is open:

1. Trigger the idle host to respond so that you can record the current IP ID on the idle host.
2. Send a SYN packet to a TCP port on the target. The packet should be spoofed to appear as if it was coming from the idle host (zombie) IP address.
3. Trigger the idle machine again to respond so that you can compare the new IP ID with the one received earlier.

Let’s explain with figures. In the figure below, we have the attacker system probing an idle machine, a multi-function printer. By sending a SYN/ACK, it responds with an RST packet containing its newly incremented IP ID.

![](https://cdn-images-1.medium.com/max/800/0*jCs-hA59-M36XOke.png)

The attacker will send a SYN packet to the TCP port they want to check on the target machine in the next step. However, this packet will use the idle host (zombie) IP address as the source. Three scenarios would arise. In the first scenario, shown in the figure below, the TCP port is closed; therefore, the target machine responds to the idle host with an RST packet. The idle host does not respond; hence its IP ID is not incremented.

![](https://cdn-images-1.medium.com/max/800/0*TrVjJqv-0n4HRsww.png)

In the second scenario, as shown below, the TCP port is open, so the target machine responds with a SYN/ACK to the idle host (zombie). The idle host responds to this unexpected packet with an RST packet, thus incrementing its IP ID.

![](https://cdn-images-1.medium.com/max/800/0*O_EhxnrWj3O_KKxj.png)

In the third scenario, the target machine does not respond at all due to firewall rules. This lack of response will lead to the same result as with the closed port; the idle host won’t increase the IP ID.

For the final step, the attacker sends another SYN/ACK to the idle host. The idle host responds with an RST packet, incrementing the IP ID by one again. The attacker needs to compare the IP ID of the RST packet received in the first step with the IP ID of the RST packet received in this third step. If the difference is 1, it means the port on the target machine was closed or filtered. However, if the difference is 2, it means that the port on the target was open.

### CONCLUSION

```
Port Scan Type                            Example Command  
  
TCP Null Scan                           sudo nmap -sN MACHINE_IP  
TCP FIN Scan                            sudo nmap -sF MACHINE_IP  
TCP Xmas Scan                           sudo nmap -sX MACHINE_IP  
TCP Maimon Scan                         sudo nmap -sM MACHINE_IP  
TCP ACK Scan                            sudo nmap -sA MACHINE_IP  
TCP Window Scan                         sudo nmap -sW MACHINE_IP  
Custom TCP Scan            sudo nmap --scanflags URGACKPSHRSTSYNFIN MACHINE_IP  
Spoofed Source IP                   sudo nmap -S SPOOFED_IP MACHINE_IP  
Spoofed MAC Address                   --spoof-mac SPOOFED_MAC  
Decoy Scan                         nmap -D DECOY_IP,ME MACHINE_IP  
Idle (Zombie) Scan                 sudo nmap -sI ZOMBIE_IP MACHINE_IP  
Fragment IP data into 8 bytes                     -f  
Fragment IP data into 16 bytes                    -ff
```

```
    Option                                  Purpose  
  
--source-port PORT_NUM             specify source port number  
  
--data-length NUM                 append random data to reach given length
```

These scan types rely on setting TCP flags in unexpected ways to prompt ports for a reply. Null, FIN, and Xmas scan provoke a response from closed ports, while Maimon, ACK, and Window scans provoke a response from open and closed ports.

```
Option                                  Purpose  
--reason                              explains how Nmap made its conclusion  
-v                                           verbose  
-vv                                      very verbose  
-d                                           debugging  
-dd                                more details for debugging
```

THANK YOU !!!

:)

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
