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
				return console.error(err);
			}

			var topicUrls = [];
			var $ = cheerio.load(sres.text);

			$('#topic_list .topic_title').each(function(index, el) {
				var $element = $(el);

				var href = url.resolve(cnodeUrl, $element.attr('href'));
				topicUrls.push(href);
			});

			var ep = new eventproxy();

			topicUrls.forEach(function(topicUrl) {
				superagent.get(topicUrl)
					.end(function(err, sres) {
						ep.emit('topic_html', [topicUrl, sres.text]);
					});
			});
			
			ep.after('topic_html', topicUrls.length, function(topics) {
				topics = topics.map(function(topicPair) {
					var topicUrl = topicPair[0];
					var topicHtml = topicPair[1];
					var $ = cheerio.load(topicHtml);

					return {
						title: $('.topic_full_title').text().trim(),
						href: topicUrl,
						comment1: $('.reply_content').eq(0).text().trim()
					};
				});

				res.send(topics);
			})
		});

});

app.listen(3000, function(req, res) {
	console.log('server is listening on port 3000');
});
