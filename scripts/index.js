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
