var express = require('express');
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var app = express();

var cnodeUrl = 'https://cnodejs.org/';

app.get('/', function(req, res, next) {

	superagent.get(cnodeUrl)
		.end(function(err, sres) {
			if(err) {
				return next(err);
			}

			var topicUrls = [];
			var $ = cheerio.load(res.text);

			$('#topic_list .topic_title').each(function(index, el) {
				var $element = $(el);

				var href = url.resolve(cnodeUrl, $element.attr('href'));
				topicUrls.push(href);
			});

			console.log(topicUrls);
		});

});

app.listen(3000, function(req, res) {
	console.log('server is listening on port 3000');
});
