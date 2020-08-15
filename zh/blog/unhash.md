---
lang: zh-tw
title: 資源解密小幫手
---

# Minecraft 資源解密小幫手

**註** 如果打不開JAR檔案的話，試試看在終端機用這個指令：`javaw -jar <JAR檔案名稱>`

**註** 如果我有違反任何法律之類的，請聯繫我我會想辦法處理

## 操作介面

![](https://i.imgur.com/V8E2lYn.png)

**選擇minecraft資料夾**

一般來說打開程式的時候，它會自動偵測你的minecraft資料夾，不過你也可以自己選擇資料夾位置。文字旁邊有一個藍色的按鈕，按下去就可以打開選資料夾的畫面，就可以在這裡選你的minecraft資料夾。

**資源版本**

確定minecraft資料夾之後，程式會偵測可用的資源版本。如果想要解壓縮的話，那個版本必須先有跑過一遍，我們才能抓到那些資料。

**輸出檔案數量限制**

最多會輸出、複製多少檔案。留空=不限制數量。

**輸出映射表**

映射表會被放在`<mc資料夾>/assets_unhash/<版本>.txt`。格式：`<雜湊值> -> <資料名稱>`

**解碼minecraft資源**

輸出的資料會被複製到`<mc資料夾>/assets_unhash/<版本>`

## 下載
**注意：** 本應用程式是由一位業餘菜鳥程式生製作的，所以一定會有很多bug，請斟酌使用。

直接下載[最新版程式][download]

[download]: https://github.com/Dogeon188/AssetsUnhasher/releases/download/1.0.0/mcunhash_v1.0.0.jar "下載"

## 程式碼 & 漏洞追蹤
[在GitHub上觀看][src]  
[回報漏洞][issues]

[src]: https://github.com/Dogeon188/AssetsUnhasher "程式碼"
[issues]: https://github.com/Dogeon188/AssetsUnhasher/issues "回報漏洞"