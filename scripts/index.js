l = "https://spreadsheets.google.com/feeds/cells/{0}/1/public/values?alt=json"
l1 = "1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw"
l2 = "12kGrnf4m7rVOB3G-QDAU8UfhMSkSbxzEdLsOm7Pcm4E"

String.prototype.f = function() {
  var s = this, i = arguments.length;
  while (i--) {s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);}
  return s;
};

function G(u) {
  r = new XMLHttpRequest();
  r.open("GET", u, false);
  r.send(null);
  return r.responseText;
}

const ce = t => document.createElement(t);

d = document.getElementById("vids");
j = JSON.parse(G(l.f(l1))).feed.entry;
c = 0;
d.innerHTML = "";

for (o of j) {
  if (c >= 4) break;
  i = o.gs$cell.$t;
  if (i.slice(0,2) == "//") continue;
  t = ce("IMG");
  a = ce("A");
  t.setAttribute("src", "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(i));
  t.setAttribute("class", "video-thumbnail");
  a.setAttribute("href", "https://youtu.be/{0}".f(i));
  a.appendChild(t);
  d.appendChild(a);
  c++;
}

d = document.getElementById("blogs");
j = JSON.parse(G(l.f(l2))).feed.entry;
c = 0;
d.innerHTML = "";

for (o of j) {
  if (c >= 9) {break;}
  i = o.gs$cell;
  if (i.row == '1') continue;
  switch (i.col) {
    case '1':
      ta = ce("A");
      tdiv = ce("DIV");
      tdiv.setAttribute("class", "blog-post");
      th = ce("H4");
      th.innerHTML = i.$t;
      tdiv.appendChild(th);
      ta.appendChild(tdiv);
      d.appendChild(ta);
      break;
    case '2':
      d.lastChild.setAttribute("href", i.$t);
      break;
    case '3':
      tcontent = document.createTextNode(i.$t);
      d.lastChild.firstChild.appendChild(tcontent);
      break;
  }
  c++;
}
