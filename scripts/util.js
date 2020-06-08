String.prototype.f = String.prototype.format = function() {
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

$ce = t => document.createElement(t);
$ac = (p,c) => p.appendChild(c);
$ct = t => document.createTextNode(t);
