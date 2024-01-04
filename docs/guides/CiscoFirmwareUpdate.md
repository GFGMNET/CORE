---
title: Update Cisco Swtich
description: Update Cisco Swtich
tags:
 - network
 - cisco
author: ag
date: 2023-01-01
readtime: 15
categories:
 - Network
---


## Cisco Switch Upgrade

Download image from cisco.com

### Upload Firmware to TFTP server

```cli
en
sh ver

sh flash:

copy tftp: flash

ip address of Tftp Server

name of the image

```

Wait till the upload is finshed

### check if file is visible on the Flash Storage
```cli
sh flash:
```

### Serach for boot file in config 
```cli
sh conf | incl boot
```
### Remove old bootfile and new one
```cli
no boot system flash:name
boot system flash:name
```
replace name with the name of the file
