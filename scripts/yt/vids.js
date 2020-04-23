l = "https://spreadsheets.google.com/feeds/cells/1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw/1/public/values?alt=json"

String.prototype.f = function() {
  var s = this, i = arguments.length;
  while (i--) {s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);}
  return s;
};

function G(u) {
  var r = new XMLHttpRequest();
  r.open("GET", u, false);
  r.send(null);
  return r.responseText;
}

var d = document.getElementById("videos");
var j = JSON.parse(G(l)).feed.entry;

for (o of j) {
  i = o.gs$cell.$t;
  if (i.slice(0,2) == "//") {continue; }
  t = document.createElement("IMG");
  a = document.createElement("A");
  t.setAttribute("src", "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(i));
  t.setAttribute("class", "video-thumbnail");
  a.setAttribute("href", "https://youtu.be/{0}".f(i));
  a.appendChild(t);
  d.appendChild(a);
}
