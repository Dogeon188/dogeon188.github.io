String.prototype.format = String.prototype.f = function() {
  var s = this, i = arguments.length;
  while (i--) {s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);}
  return s;
};

var videos = document.getElementById("videos");
for (vid of vlist) {
  var vth = document.createElement("IMG");
  var thsrc = "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(vid);
  var vlink = "https://youtu.be/{0}".f(vid);
  vth.setAttribute("src", thsrc);
  vth.setAttribute("margin", 2);
  vth.setAttribute("width", "40%");
  var va = document.createElement("A");
  va.setAttribute("href", vlink);
  va.appendChild(vth);
  videos.appendChild(va);
};
