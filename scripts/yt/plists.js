z = "https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCapFOd5gDDMNszKmVPKo9JQ&key=AIzaSyBbBboaavWuf5jiImHewI6vrXeJuHpdYCs&maxResults=25"

function g(u) {
  var r = new XMLHttpRequest();
  r.open("GET", u, false);
  r.send(null);
  return r.responseText;
}

String.prototype.f = function() {
  var s = this, i = arguments.length;
  while (i--) {s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);}
  return s;
};

for (t of JSON.parse(g(z)).items) {
  d = document.createElement("DIV");
  s = document.createElement("SPAN");
  s.appendChild(document.createTextNode(t.snippet.title));
  d.appendChild(s);
  i = document.createElement("IMG");
  i.setAttribute("src", t.snippet.thumbnails.medium.url);
  a = document.createElement("A");
  a.setAttribute("href", "https://www.youtube.com/playlist?list={0}".f(t.id))
  a.appendChild(i);
  d.appendChild(a);
  document.getElementById("plist").appendChild(d);
}
