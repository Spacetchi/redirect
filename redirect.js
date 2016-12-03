var current = window.location;
var current_protocol = current.protocol;
var current_host = current.hostname;
var current_pathname = current.pathname;
var current_hash = current.hash;

var link = current_protocol + current_host + current_pathname + current_hash;

window.location = link;
