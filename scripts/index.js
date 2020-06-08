l = "https://spreadsheets.google.com/feeds/cells/{0}/1/public/values?alt=json"
l1 = "1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw"
l2 = "12kGrnf4m7rVOB3G-QDAU8UfhMSkSbxzEdLsOm7Pcm4E"

d = $("#vids");
j = JSON.parse(G(l.f(l1))).feed.entry;
c = 0;
d.innerHTML = "";

for (o of j) {
  if (c >= 4) break;
  i = o.gs$cell.$t;
  if (i.slice(0,2) == "//") continue;
  t = $ce("IMG");
  a = $ce("A");
  t.src = "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(i);
  t.class = "video-thumbnail";
  a.href = "https://youtu.be/{0}".f(i);
  $ac(a,t); $ac(d,a);
  c++;
}

d = $("#blogs");
j = JSON.parse(G(l.f(l2))).feed.entry;
c = 0;
d.innerHTML = "";

for (o of j) {
  if (c >= 9) {break;}
  i = o.gs$cell;
  if (i.row == '1') continue;
  switch (i.col) {
    case '1':
      ta = $ce("A");
      tdiv = $ce("DIV");
      tdiv.class = "blog-post";
      th = $ce("H4");
      th.innerHTML = i.$t;
      $ac(tdiv,th); $ac(ta,tdiv); $ac(d,ta);
      break;
    case '2':
      d.lastChild.href = i.$t;
      break;
    case '3':
      tc = $ct(i.$t);
      $ac(d.lastChild.firstChild,tc);
      break;
  }
  c++;
}
