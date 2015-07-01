
var urlapi = require('url');
var url = urlapi.parse('http://site.com:81/path/page?a=1&amp;b=2#hash');

console.log(url.href);
console.log(url.protocol);
console.log(url.hostname);
console.log(url.port);

console.log(url.pathname);
console.log(url.search);
console.log(url.hash);