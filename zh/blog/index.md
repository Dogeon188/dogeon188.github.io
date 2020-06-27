---
lang: zh-tw
---

# 文章&作品們

這裡應該會有我所有的作品⋯⋯吧。

<div id="blogs"></div>

<script>
  l = "https://spreadsheets.google.com/feeds/cells/12kGrnf4m7rVOB3G-QDAU8UfhMSkSbxzEdLsOm7Pcm4E/1/public/values?alt=json";
  d = $("#blogs");
  j = JSON.parse(G(l)).feed.entry.filter(v => v.gs$cell.$t.slice(0,2) != '//');
  d.empty();
  for (o of j) {
    i = o.gs$cell;
    if (i.row == '1') continue;
    switch (i.col) {
      case '2':
      d.append($(`<a><div class="blog-post"><h4>${i.$t}</h4></div></a>`));
      break;
      case '3':
      d.children().last().attr('href', i.$t);
      break;
      case '5':
      d.children().last().children().first().append(i.$t);
      break;
    }
  }
</script>
