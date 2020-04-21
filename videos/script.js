l = "https://spreadsheets.google.com/feeds/cells/1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw/1/public/values?alt=json"

String.prototype.f = function() {
  var s = this, i = arguments.length;
  while (i--) {s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);}
  return s;
};

function Get(u) {
  var r = new XMLHttpRequest();
  r.open("GET", u, false);
  r.send(null);
  return r.responseText;
}

var d = document.getElementById("videos");
var j = JSON.parse(Get(l)).feed.entry;

for (o of j) {
  i = o.gs$cell.$t;
  t = document.createElement("IMG");
  s = "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(i);
  h = "https://youtu.be/{0}".f(i);
  a = document.createElement("A");
  if (i.slice(0,2) == "//") {continue; }
  t.setAttribute("src", s);
  t.setAttribute("class", "video-thumbnail");
  a.setAttribute("href", h);
  a.appendChild(t);
  d.appendChild(a);
}
