---
title: Videos
---

# My Videos

Here should be all of my available videos.

<div id="videos" style="display:flex,flex-wrap:wrap,justify-content:flex-end">
Oops, there seems to be some problem loading the videos :(
Try refresh the page and see if it works OWO
</div>

<button class="button" onclick="moreVid(8)" id="load-more">Load More</button>

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
