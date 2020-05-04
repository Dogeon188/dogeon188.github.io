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

var d = document.getElementById("vids");
var j = JSON.parse(G(l)).feed.entry;
var c = 0;
d.innerHTML = "";

for (o of j) {
  if (c >= 4) {break;}
  i = o.gs$cell.$t;
  if (i.slice(0,2) == "//") {continue; }
  t = document.createElement("IMG");
  a = document.createElement("A");
  t.setAttribute("src", "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(i));
  t.setAttribute("class", "video-thumbnail");
  a.setAttribute("href", "https://youtu.be/{0}".f(i));
  a.appendChild(t);
  d.appendChild(a);
  c += 1;
}

// function g(u) {
//   var r = new XMLHttpRequest();
//   r.open("GET", u, false);
//   r.send(null);
//   return r.responseText;
// }

// String.prototype.f = function() {
//   var s = this, i = arguments.length;
//   while (i--) {s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);}
//   return s;
// };

// for (t of JSON.parse(g("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBbBboaavWuf5jiImHewI6vrXeJuHpdYCs&channelId=UCapFOd5gDDMNszKmVPKo9JQ&part=snippet,id&order=date&maxResults=3")).items) {
//   a = document.createElement("A");
//   a.setAttribute("href", t.id.videoId);
//   a.setAttribute("title", t.snippet.title);
//   i = document.createElement("IMG");
//   i.setAttribute("src", t.snippet.thumbnails.medium.url)
//   a.appendChild(i);
//   document.getElementById("vids").appendChild(a);
// }
