var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {console.log('websites')
	res.render('websites/index.html');
})

router.get('/qq', function(req, res) {console.log('websites/qq')
	res.render('websites/qq.html');
});

module.exports = router;