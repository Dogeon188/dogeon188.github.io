---
title: Homepage
---

# Dogeon's Nest

**********************

Hi there, welcome to my website\!  
Here I may post something like my personal blog, and also some of my work.  
I'll try my best to make the place look good.
Recently have so many assignments to do, too busy to make progress on those survival series or the MCE thing.

## Recent Videos

<div id="vids">
Oops, there seems to be some problem loading the videos :( <br>
Try refresh the page and see if it works OWO
</div>

<button onclick="location.href='/yt/videos'" class="button" title="All of my videos (probably)">View More</button>

## Blogs & Works

<div id="blogs"></div>

<button title="Blogs & Works" onclick="location.href='/blog/'" class="button">View More</button>

## Social Media

[![Youtube Channel](https://i.imgur.com/NkWQYR8.png)][yt]
[![Twitter](https://i.imgur.com/ZNiIT8k.png)][twitter]
[![Discord](https://i.imgur.com/8wbsW8G.png)][dc]
[![Planet Minecraft](https://i.imgur.com/AiAbmHG.png)][pmc]

[yt]: https://www.youtube.com/channel/UCapFOd5gDDMNszKmVPKo9JQ "My Youtube Channel"
[twitter]: https://twitter.com/dogeon188 "My Twitter"
[dc]: https://discord.gg/ZNYMdKK "My Discord Server"
[pmc]: https://www.planetminecraft.com/member/dogeon188/ "Planet Minecraft"

## Developement Stuffs

[View on GitHub](https://github.com/Dogeon188/dogeon188.github.io)  
[Markdown Tutorial](https://markdown.tw/)

<script>
  l = "https://spreadsheets.google.com/feeds/cells/{0}/1/public/values?alt=json"
  l1 = "1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw"
  l2 = "12kGrnf4m7rVOB3G-QDAU8UfhMSkSbxzEdLsOm7Pcm4E"
  d = $("#vids");
  j = JSON.parse(G(l.f(l1))).feed.entry;
  c = 0;
  d.empty();
  for (o of j) {
    if (c >= 4) break;
    i = o.gs$cell.$t;
    if (i.slice(0,2) == "//") continue;
    d.append($(`<a href="https://youtu.be/${i}"><img class="video-thumbnail" src="https://img.youtube.com/vi/${i}/mqdefault.jpg"></a>`));
    c++;
  }
  d = $("#blogs");
  j = JSON.parse(G(l.f(l2))).feed.entry;
  c = 0;
  d.empty();
  for (o of j) {
    if (c >= 9) {break;}
    i = o.gs$cell;
    if (i.row == '1') continue;
    switch (i.col) {
      case '1':
      d.append($(`<a><div class=blog-post><h4>${i.$t}</h4></div></a>`));
      break;
      case '2':
      d.children().last().attr('href', i.$t);
      break;
      case '3':
      d.children().last().children().first().append(i.$t);
      break;
    }
    c++;
  }
</script>
