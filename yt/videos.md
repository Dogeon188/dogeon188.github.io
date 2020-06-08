---
title: Videos
---

# My Videos

Here should be all of my available videos.

<div id="videos" style="display:flex,flex-wrap:wrap,justify-content:flex-end">
Oops, there seems to be some problem loading the videos :(
Try refresh the page and see if it works OWO
</div>

<script>
  l = "https://spreadsheets.google.com/feeds/cells/1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw/1/public/values?alt=json";
  d = $("#videos");
  d.empty();
  j = JSON.parse(G(l)).feed.entry;
  for (o of j) {
    i = o.gs$cell.$t;
    if (i.slice(0,2) == "//") continue;
    d.append($(`<a href="https://youtu.be/${i}"><img class="video-thumbnail" src="https://img.youtube.com/vi/${i}/mqdefault.jpg"></img></a>`));
  }
</script>
