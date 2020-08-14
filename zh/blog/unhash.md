---
lang: zh-tw
title: 資源解密小幫手
---

# Minecraft Assets Unhasher

**NOTE:** If you cannot open the jar file, consider usie the command in Command Prompt: `javaw -jar <the jar file>`

**NOTE:** If this violates any sort of law or something, please contact me and I'll deal with it.

![](https://i.imgur.com/LMTX6aS.png)

## Select Minecraft Folder

Normally on startup, the app will automatically find your minecraft folder, but you can also manually change it on your own.

There's a button by the text editor, pressing it will open a file chooser, you can choose your minecraft folder as you wanted.

## Minecraft Assets Version

After choosing your minecraft folder, the app will detect available versions and list them out. To be available, that version should have been run before, so we can grab things properly.

## Output File Limit

The max count of files being unhashed and copied. Leave it blank to unhash all files.

## Write Hashtable

Hashtable txt file will be put in `<mcfolder>/assets_unhash/<version>.txt`. Format: `<hash> -> <file name>`

## Unhash Assets Files

Unhashed files will be copied to `<mcfolder>/assets_unhash/<version>` folder.