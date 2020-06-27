---
lang: zh-tw
title: 首頁
---

# 鴿的鴿巢

**********************

安安，歡迎來到我的部落格～
這邊我會放一些自己的成品之類的吧。
我會儘量讓這個網站好看的（打氣）

不過最近因為事情爆肝多所以不是很有時間推進度呢⋯⋯

## 最新影片

<div id="vids">
哇，加載影片出問題了呢 :( <br>
試試看重新載入吧
</div>

<button onclick="location.href='yt/videos'" class="button" title="All of my videos (probably)">更多影片</button>

## 文章&作品們

<div id="blogs"></div>

<button title="Blogs & Works" onclick="location.href='blog/'" class="button">看更多</button>

## 社群媒體

[![Youtube 頻道](https://i.imgur.com/NkWQYR8.png)][yt]
[![Twitter](https://i.imgur.com/ZNiIT8k.png)][twitter]
[![Discord](https://i.imgur.com/8wbsW8G.png)][dc]
[![Planet Minecraft](https://i.imgur.com/AiAbmHG.png)][pmc]

[yt]: https://www.youtube.com/channel/UCapFOd5gDDMNszKmVPKo9JQ "YT頻道"
[twitter]: https://twitter.com/dogeon188 "推特"
[dc]: https://discord.gg/ZNYMdKK "DC伺服器"
[pmc]: https://www.planetminecraft.com/member/dogeon188/ "Planet Minecraft"

## 開發的東西

[在GitHub上觀看](https://github.com/Dogeon188/dogeon188.github.io)  
[Markdown教學](https://markdown.tw/)

<script>
  l = "https://spreadsheets.google.com/feeds/cells/{0}/1/public/values?alt=json"
  l1 = "1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw"
  l2 = "12kGrnf4m7rVOB3G-QDAU8UfhMSkSbxzEdLsOm7Pcm4E"
  d = $("#vids");
  j = JSON.parse(G(l.f(l1))).feed.entry.filter(v => v.gs$cell.$t.slice(0,2) != '//');
  c = 0;
  d.empty();
  for (o of j) {
    if (c >= 4) break;
    i = o.gs$cell.$t;
    d.append($(`<a href="https://youtu.be/${i}"><img class="video-thumbnail" src="https://img.youtube.com/vi/${i}/mqdefault.jpg"></a>`));
    c++;
  }
  d = $("#blogs");
  j = JSON.parse(G(l.f(l2))).feed.entry.filter(v => v.gs$cell.$t.slice(0,2) != '//');
  c = 0;
  d.empty();
  for (o of j) {
    if (c >= 15) {break;}
    i = o.gs$cell;
    if (i.row == '1') continue;
    switch (i.col) {
      case '2':
      d.append($(`<a><div class=blog-post><h4>${i.$t}</h4></div></a>`));
      break;
      case '3':
      d.children().last().attr('href', i.$t);
      break;
      case '5':
      d.children().last().children().first().append(i.$t);
      break;
    }
    c++;
  }
</script>
