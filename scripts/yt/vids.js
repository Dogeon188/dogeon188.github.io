l = "https://spreadsheets.google.com/feeds/cells/1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw/1/public/values?alt=json"

var d = document.getElementById("videos");
d.innerHTML = "";
var j = JSON.parse(G(l)).feed.entry;

for (o of j) {
  i = o.gs$cell.$t;
  if (i.slice(0,2) == "//") {continue; }
  // t = document.createElement("IMG");
  // a = document.createElement("A");
  t = ce("IMG");
  a = ce("A");
  t.setAttribute("src", "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(i));
  // t.setAttribute("class", "video-thumbnail");
  // a.setAttribute("href", "https://youtu.be/{0}".f(i));
  $ac(a,t); $ac(d,a);
}
