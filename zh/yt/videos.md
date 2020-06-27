---
lang: zh_tw
title: 影片們
---

# 我的影片

這裡應該會有我所有的影片吧。

<div id="videos" style="display:flex,flex-wrap:wrap,justify-content:flex-end">
哇，加載影片出問題了呢 :( <br>
試試看重新載入吧
</div>

<button class="button" onclick="moreVid(8)" id="load-more">載入更多影片</button>

<script>
  l = "https://spreadsheets.google.com/feeds/cells/1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw/1/public/values?alt=json";
  d = $("#videos");
  d.empty();
  j = JSON.parse(G(l)).feed.entry.filter(v => v.gs$cell.$t.slice(0,2) != '//');
  l = 0;
  function moreVid(s) {
    c = 0;
    for (o of j.slice(l,l+s)) {
      i = o.gs$cell.$t;
      d.append($(`<a href="https://youtu.be/${i}"><img class="video-thumbnail" src="https://img.youtube.com/vi/${i}/mqdefault.jpg"></img></a>`));
      c++; l++;
    }
    if (l >= j.length) $("#load-more").remove()
  }
  moreVid(8);
</script>
