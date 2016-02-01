var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
	res.render('index/login', { title: '用户登录' });
});

router.post('/doLogin', function(req, res) {
	var user = {
		username: 'admin',
		password: 'admin'
	};
	console.log('in doLogin');
	// if(req.body.username === user.username && req.body.password === user.password) {
	// 	// res.redirect('/home');
	// 	console.log('before render home...');
	// 	res.render('index/home', { title: 'Home', user: user });
	// 	return;
	// }
	// res.redirect('login');
	// return;

	res.redirect('/home');
});

// router.get('/logout', function(req, res) {
// 	res.redirect('/');
// });

router.get('/home', function(req, res) {
	var user = {
		username: 'admin',
		password: 'admin'
	};
console.log('in home')
	res.render('index/home', { title: 'Home', user: user });
})

module.exports = router;
