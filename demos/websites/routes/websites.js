var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('websites/index')
});

router.get('/index', function(req, res) {
	res.send([
			{
				'name': 'qq',
				'url': '/websites/qq/'
			}
		]);
})

router.get('/qq', function(req, res) {
	res.render('websites/qq');
});

module.exports = router;