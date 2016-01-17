# 使用 eventproxy 控制并发
[来源](https://github.com/alsotang/node-lessons/tree/master/lesson4)

* Node.js 的 callback hell
* 多个异步操作的处理方案：
    - 计数器方式
    - callback 嵌套
    - eventproxy
        + var ep = new eventproxy();得到一个 eventproxy 实例
        + 监听事件：ep.all('event1', 'event2', function(result1, result2) {});
        + 单个异步请求完成后触发事件：ep.emit('event_name', eventData);
```
// 计数器方式
(function() {
    var count = 0;
    var result = {};

    $.get('http://data1_source', function(data) {
        result.data1 = data;
        count++;
        handle();
    });
    $.get('http://data2_source', function(data) {
        result.data2 = data;
        count++;
        handle();
    });
    $.get('http://data3_source', function(data) {
        result.data3 = data;
        count++;
        handle();
    });

    function handle() {
        if(count === 3) {
            var html = fuck(result.data1, result.data2, result.data3);
            render(html);
        }
    }
})();

// callback 嵌套
$.get('http://data1_source', function(data1) {
    $.get('http://data2_source', function(data2) {
        $.get('http://data3_source', function(data3) {
            var html = fuck(data1, data2, data3);
            render(html);
        });
    });
});

// eventproxy
var ep = new eventproxy();
// 监听事件
ep.all('data1_event', 'data2_event', 'data3_event', function(data1, data2, data3) {
    var html = fuck(data1, data2, data3);
    render(html);
});
// 触发事件
$.get('http://data1_source', function(data) {
    ep.emit('data1_event', data);
});
$.get('http://data2_source', function(data) {
    ep.emit('data2_event', data);
});
$.get('http://data3_source', function(data) {
    ep.emit('data3_event', data);
});
```
* 使用的依赖：
    - [eventproxy](https://github.com/JacksonTian/eventproxy)