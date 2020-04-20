const vlist = [
  "QMfk4zc4PiU", "ug_0Xna2_x4", "otMpU0P73Qw", "BD5HijbYsBY", "3atNbNXVFeM", "_yO9JaD6ruM", "9gnlM0d7cz4", "4cb2QwLTTIA",
  "5ikAG_Fn8hc", "Jn5_QXhDDkU", "Vvg6aXq738s", "SKHWNaG-vgI", "N5dk6uW9fQA", "olsituXMj_g", "Mcmedfw7boI", "zzxfyjpqmGw",
  "KluCpTnpjfs", "WoHW-OkMpM0", "g7-d83ZWjXY", "812tRKQ2vrU", "Su_mmGxAHGA", "sEdRPqPXEXg", "xN9BR0HtxbY", "7KfvMNLcZ8A",
  "mebGZcSr8hs", "FUCKRzch6As", "hG7-XAL9pvg", "nRIwQe6UvGM", "r6qSWnLrkwE", "rXNjfXYo5u0", "ZlDxwqEDTuI", "JrpjGzkM-5M",
  "KIm2aDgrDFk", "pIN3gdsF4Ho", "2hMX9Q1jpJ4", "JcxWFGLJ4YU", "KiqlTPJh3bc", "q7lGSuJKytI", "-0xcKzmmp08", "ACv7G2SLBn0",
  "61Xf_nNZsuo", "DLK2vQ2Wb2A"
];

String.prototype.format = String.prototype.f = function() {
  var s = this, i = arguments.length;
  while (i--) {s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);}
  return s;
};

var videos = document.getElementById("videos");
for (vid of vlist) {
  var vth = document.createElement("IMG");
  var thsrc = "https://img.youtube.com/vi/{0}/mqdefault.jpg".f(vid);
  var vlink = "youtu.be/{0}";
  vth.setAttribute("src", thsrc);
  var va = document.createElement("A");
  va.setAttribute("href", vlink);
  va.appendChild(vth);
  videos.appendChild(va);
};
