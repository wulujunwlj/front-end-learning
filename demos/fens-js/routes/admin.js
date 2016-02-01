var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {console.log('admin.login')
	var reqBody = req.body,
		loginUser = {
			username: reqBody.username,
			password: reqBody.password
		};
loinUser = {
	username: 'admin',
	password: 'admin'
}
	if(checkUser(loginUser)) {console.log('next')
		res.next();
	} else {console.log('admin.login11111')
		res.redirect('/admin/login');
	}
});

router.get('/', function(req, res) {console.log('admin/home')
	res.render('admin/home', { title: 'admin home' }); 
});

router.post('/doLogin', function(req, res) {
	// var params = req.param,
	var params = req.body,
		loginUser = {
			username: params['username'],
			password: params['password']
		};
console.log(params['username']);
console.log(params['password']);
	if(checkUser(loginUser)) {
		res.json({
			status: true,
			msg: '登录成功',
			url: '/admin/home',
		})
		return;
	} else {
		res.json({
			status: false,
			msg: '登录失败，用户名或密码不正确',
			url: '/admin/login',
		})
		return;
	}
});

router.get('/home', function(req, res) {
	res.render('admin/home', { 
		title: '后台管理', 
		user: {
			username: 'admin'
		} 
	});
});

router.get('/login', function(req, res) {
	res.render('admin/login', { title: 'home login' });
});

function checkUser(loginUser) {console.log('checkUser');
	var user = {
		username: 'admin',
		password: 'admin'
	};
console.log(loginUser)
console.log(user)
	if(loginUser.username === user.username && loginUser.password === user.password) {
		return true;
	} else {
		return false;
	}
}

module.exports = router;