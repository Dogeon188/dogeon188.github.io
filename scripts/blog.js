l = "https://spreadsheets.google.com/feeds/cells/12kGrnf4m7rVOB3G-QDAU8UfhMSkSbxzEdLsOm7Pcm4E/1/public/values?alt=json";

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

c = t => document.createElement(t);

d = document.getElementById("blogs");
j = JSON.parse(G(l)).feed.entry;
d.innerHTML = "";

for (o of j) {
  i = o.gs$cell;
  if (i.row == '1') continue;
  switch (i.col) {
    case '1':
      a = c("A");
      v = c("DIV");
      v.setAttribute("class", "blog-post");
      h = c("H4");
      h.innerHTML = i.$t;
      v.appendChild(h);
      a.appendChild(v);
      d.appendChild(a);
      break;
    case '2':
      d.lastChild.setAttribute("href", i.$t);
      break;
    case '3':
      d.lastChild.firstChild.appendChild(document.createTextNode(i.$t));
      break;
  }
}