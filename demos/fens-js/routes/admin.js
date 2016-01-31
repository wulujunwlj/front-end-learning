var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('admin/home', { title: '后台管理' });
});


module.exports = router;