var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	// res.send('Welcome to Realtime Server');
	
});

var onlineUsers = {};
var onlineCount = 0;

io.on('connection', function(socket) {
	console.log('A user connected');

	socket.on('login', function(obj) {
		socket.name = obj.userid;

		if(!onlineUsers.hasOwnProperty(obj.userid)) {
			onlineUsers[obj.userid] = obj.username;
			onlineCount ++;
		}

		io.emit('login', {
			onlineUsers: onlineUsers,
			onlineCount: onlineCount
		});
		console.log(obj.username, '加入了聊天室');
	});

	socket.on('disconnect', function() {
		if(onlineUsers.hasOwnProperty(socket.name)) {
			var obj = {
				userid: socket.name, 
				username: onlineUsers[socket.name]
			};
			delete onlineUsers[socket.name];

			onlineCount --;
			io.emit('logout', {
				onlineUsers: onlineUsers,
				onlineCount: onlineCount
			});

			console.log(obj.username, '退出了聊天室')；
		}
	});

	socket.on('message', function(obj) {
		io.emit('message', obj);
		console.log(obj.username, '说:', obj.content);
	});
})

http.listen(3000, function() {
	console.log('Server is listening on port 3000');
});