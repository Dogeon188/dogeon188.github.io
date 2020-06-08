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
      // a = $ce("A");
      // v = $ce("DIV");
      // v.class = "blog-post";
      // h = $ce("H4");
      // h.innerHTML = i.$t;
      // $ac(v,h); $ac(a,v); $ac(d,a);
      break;
    case '2':
      // d.lastChild.href = i.$t;
      d.children().last().children().first().attr('href', i.$t);
      break;
    case '3':
      d.children().last().children().first().append(i.$t);
      // $ac(d.lastChild.firstChild,$ct(i.$t));
      break;
  }
}
