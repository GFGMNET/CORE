---
title: Generall Network Stuff
description: Generall Network Stuff for Cisco Switches
tags:
 - network
author: 
 - agaertne
date: 2024-01-05 11:00:00
categories:
  - Network
  - Cisco
readtime: 15
---
Generall Network Stuff see commen Commands for daily Work with Cisco Switches and Windows Clients

<!-- more -->

## Find Switchport of an Device

### Requirements 

 - IP address



 or



 - mac address



### Connect to core switch 

> Windows 11  use wt with    ssh username@ipaddress



#### Get Mac address

```cli

sh ip arp | incl %ipaddress%

```



example:



```cli

sh ip arp | incl 10.90.100.1

```



> result:  6400.6a8c.563e



#### Get port of connected Floorswitch



```cli

sh mac add | incl %macaddress%

```



example:



```cli

sh mac add | incl 6400.6a8c.563e

```

> result: GI1/0/2



#### Get name/ip of the floorswitch

```cli

sh int status

```

### Connect to floorswitch

```cli

sh mac add | incl %macaddress%

```



example:



```cli

sh mac add | incl 6400.6a8c.563e

```

> result: GI1/0/2



## Disable Port



example:



```cli

en

conf t

int GI1/0/1

shut



exit

exit

wr

```



## Enable Port



```cli

en

conf t

int GI1/0/1

no shut



exit

exit

wr

```

## Show Error 



### All interfaces

```cli

sh int  | in up|drops

sh int | in up|CRC



```

### One interface

```cli

sh int GI1/0/1 | incl up|drops

sh int GI1/0/1 | in up|CRC

```



## Clear  Error Statistic

```cli

en

conf t

clear counters GI1/0/1

```



## Port reset

```cli

en

conf t

int GI1/0/1

shut

```



wait 15 sec



```cli

int GI1/0/1

no shut

```



## VLAN



### Tag an Port

```cli

en

conf t

int GI1/0/1

switchport mode access

switchport access vlan 200

```



### Trunk an Port

```cli

en

conf t

int GI1/0/1

switchport mode trunk

```





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





