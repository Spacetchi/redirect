var current = window.location;
var current_pathname = current.pathname;
var current_hash = current.hash;

var link = "https://tchi.space" + current_pathname + current_hash;

window.location = link;
