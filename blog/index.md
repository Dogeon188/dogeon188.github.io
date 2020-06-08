# Blogs & Works

Here will be a full list of my blog posts.

<div id="blogs"></div>

<script>
  l = "https://spreadsheets.google.com/feeds/cells/12kGrnf4m7rVOB3G-QDAU8UfhMSkSbxzEdLsOm7Pcm4E/1/public/values?alt=json";
  d = $("#blogs");
  j = JSON.parse(G(l)).feed.entry;
  d.empty();
  for (o of j) {
    i = o.gs$cell;
    if (i.row == '1') continue;
    switch (i.col) {
      case '1':
      d.append($(`<a><div class="blog-post"><h4>${i.$t}</h4></div></a>`));
      break;
      case '2':
      d.children().last().attr('href', i.$t);
      break;
      case '3':
      d.children().last().children().first().append(i.$t);
      break;
    }
  }
</script>
