---
title: Automation of Cisco Switches and Vyos Routers
description: Update config on Switches via Ansible
tags:
 - network
 - cisco
 - vyos
author: 
 - agaertne
date: 2024-01-04
readtime: 15
categories:
 - Network
 - Cisco
 - VYOS
links:
  - plugins/search.md
cover_image: SwitchAnsible_Coverimage.PNG
---
Automate Cisco and VYOS enviornment
<!-- more -->

## Requirements
 - Python
   * for windows add Python install path to system variable

## Install
> pip install ansible
> ansible-galaxy collection install cisco.ios
> ansible-galaxy collection install vyos.vyos

## Playbook
```cli
Playbook:
- name: Update Firmware
  hosts: test
  connection: network_cli
  gather_facts: false
  tasks:
     - name: Upload Firmware
       ios_command:
          commands:
             - copy tftp://server/nameoffile flash:
       become_method: enable
       become: yes
     - name: Disable Old Bootimage
       ios_command:
          commands:
             - no boot system
       become_method: enable
       become: yes
     - name: Set new boot Image
       ios_command:
          commands:
             - boot system flash:nameoffile
       become_method: enable
       become: yes
     - name: Save Configuration
       ios_command:
          commands:
             - wr
    - name: Reload Switch
       ios_command:
          commands:
             - command: "reload"
               prompt: "Proceed with reload? \[confirm\]"
               answer: '\r'

```
## Hostfile
```cli
Host file
all:
  children:
    test:
      hosts:
        192.168.200.1


Group Vars:
ansible_connection: network_cli
ansible_network_os: ios
ansible_user: admin
ansible_ssh_pass: password
absible_become_pass: password

```
