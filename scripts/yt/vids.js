l = "https://spreadsheets.google.com/feeds/cells/1EAGFi2FniYnXfFhzBPYHRCYKfYdhKvtShUYSOAbzUvw/1/public/values?alt=json"

d = $("#videos");
d.empty();
j = JSON.parse(G(l)).feed.entry;

for (o of j) {
  i = o.gs$cell.$t;
  if (i.slice(0,2) == "//") {continue; }
  d.append($(`<a href="https://youtu.be/${i}"><img class="video-thumbnail" src="https://img.youtube.com/vi/${i}/mqdefault.jpg"></img></a>`));
}
