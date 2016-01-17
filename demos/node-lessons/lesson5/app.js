var express = require('express');
var async = require('async');

var app = express();
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

app.get('/', function(req, res, next) {
	// var concurrencyCount = 0;
	// var fetchUrl = function(url, callback) {
	// 	var delay = parseInt((Math.random() * 10000000) % 200, 10);
	// 	concurrencyCount++;
	// 	console.log('现在的并发数是: ', concurrencyCount, ', 正在抓取的是: ', url, ', 耗时: ', delay, '毫秒');
	// 	setTimeout(function() {
	// 		concurrencyCount--;
	// 		callback(null, url + ' html content');
	// 	}, delay);
	// };

	// var urls = [];
	// for(var i=0; i<30; i++) {
	// 	urls.push('http://datasource_' + i);
	// }

	// async.mapLimit(urls, 5, function(url, callback) {
	// 	fetchUrl(url, callback);
	// }, function(err, result) {
	// 	console.log('final: ', result);
	// 	res.send(result);
	// });

	var cnodeUrl = 'https://cnodejs.org/';

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
	console.log('Server is listening on port 3000');
});