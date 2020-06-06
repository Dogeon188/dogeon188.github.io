l = "https://spreadsheets.google.com/feeds/cells/12kGrnf4m7rVOB3G-QDAU8UfhMSkSbxzEdLsOm7Pcm4E/1/public/values?alt=json";

d = $$id("blogs");
j = JSON.parse(G(l)).feed.entry;
d.innerHTML = "";

for (o of j) {
  i = o.gs$cell;
  if (i.row == '1') continue;
  switch (i.col) {
    case '1':
      a = $ce("A");
      v = $ce("DIV");
      v.setAttribute("class", "blog-post");
      h = $ce("H4");
      h.innerHTML = i.$t;
      $ac(v,h); $ac(a,v); $ac(d,a);
      break;
    case '2':
      d.lastChild.setAttribute("href", i.$t);
      break;
    case '3':
      $ac(d.lastChild.firstChild,$ct(i.$t));
      break;
  }
}
