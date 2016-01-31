var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
	res.render('login', { title: '用户登录'} );
});

router.post('/doLogin', function(req, res) {
	var user = {
		username: 'admin',
		password: 'admin'
	};
	
	if(req.body.username === user.username && req.body.password === user.password) {
		res.redirect('/home');
	}
	res.redirect('login');
});

router.get('/logout', function(req, res) {
	res.redirect('/');
});

router.get('/home', function(req, res) {
	var user = {
		username: 'admin',
		password: 'admin'
	};

	res.render('index/home', { title: 'Home', user: user });
})

module.exports = router;
