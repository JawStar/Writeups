---
title: "How to stabilize a simple reverse shell to a fully interactive terminal"
date: 2025-01-02
platform: other
source_file: "2025-01-02_How-to-stabilize-a-simple-reverse-shell-to-a-fully-interactive-terminal-92f936b45e56.html"
---

---

### How to stabilize a simple reverse shell to a fully interactive terminal

Auth: jawstar

![](https://cdn-images-1.medium.com/max/800/0*XcNTYtVvGqxV4jpx)

### Problem:

In CTFs (Capture the Flag) competitions when you get back the reverse shell from target machine, usually it comes without autocompletion and symbol deletion options. This limits your effectiveness in capturing the flags on the target machine.

![](https://cdn-images-1.medium.com/max/800/0*llKGrULCRxARuBMF)

### Prerequisite:

1. Target machine must have Python 2 or 3 installed

### Stabilize your shell:

1. Import pty module and spawn bash shell:

`python3 -c 'import pty;pty.spawn("/bin/bash")'`

Press `CTRL + Z` to background process and get back to your host machine

* Use stty command to set terminal line settings and foreground back the target terminal:

`stty raw -echo; fg`

Set the terminal emulator to xterm:

`export TERM=xterm`

Press Enter

### Explanation:

1. The `pty` module **defines operations for handling the pseudo-terminal concept**: starting another process and being able to write to and read from its controlling terminal programmatically.
2. The `pty.spawn()` - spawns a process, and connect its controlling terminal with the current process’s standard io.
3. `stty` is a tool used to set the input and output settings for the terminal interface. Basically, this command shows or changes terminal characteristics.
4. `stty raw` - activates raw mode, where instead of reading a whole line, characters are read one at a time. In addition to that, some special characters such as the # will not work. The # character is used to erase the last typed character. With `stty raw` you can't hit `Ctrl-C` to end a process. [Reference](https://difyel.com/linux/usr/bin/stty/index.html).
5. `stty -echo` the dash means "disable" a setting. In this case, we are disabling `echo` to not echo back our typing.
6. The `export TERM=xterm` command sets the terminal emulator to xterm. In other words, it just tells the system what kind of terminal you're supposedly using and how the text on the screen should be adapted. The default `TERM` setting for Ubuntu is `xterm`. You can check your TERM setting by running `echo $TERM`

### Other solutions:

Another way to get stabilized terminal window is to use `socat` command-line tool. One disadvantage of that method is that the target machine may not have this tool installed by default. You need to make extra steps to install it.
