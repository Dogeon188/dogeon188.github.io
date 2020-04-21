String.prototype.f = function() {
  var s = this,
      i = arguments.length;
  while (i--) {
    s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
  }
  return s;
};

var videos = document.getElementById("videos");
for (vid of vlist) {
  let vth = document.createElement("IMG"),
      thsrc = "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(vid),
      vlink = "https://youtu.be/{0}".f(vid),
      va = document.createElement("A");
  vth.setAttribute("src", thsrc);
  vth.setAttribute("class", "video-thumbnail");
  va.setAttribute("href", vlink);
  va.appendChild(vth);
  videos.appendChild(va);
};
