
# Web Socket
[来源](http://web.jobbole.com/84706/)
[websocket探索其与语音、图片的能力](http://web.jobbole.com/84706/)

* WebSocket protocol 是 HTML5 一种新的协议。它实现了浏览器与服务器全双工通信。
* 相关技术：comet、长轮询
* websocket 的实现
    - socket.io
    ``` JS
    var http = require('http');
    var io = require('socket.io');

    var server = http.createServer(function(req, res) {
        res.writeHeader(200, {
            'content-type': 'text/html;charset="utf-8"'
        });
        res.send();
    }).listen(8888);

    var socket = io.listen(server);

    socket.sockets.on('connection', function(socket) {
        socket.emit('xxx', { options });

        socket.on('xxx', function(data) {
            // do something...
        });
    });
    ```
    - http 模块
    ``` JS

    ```
    - ws 模块
* 
