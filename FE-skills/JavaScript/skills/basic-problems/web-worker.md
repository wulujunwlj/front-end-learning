## HTML5 Web Worker

### 简介

专用 Web Workder(Dedicated Web Worker)提供了一个简单的方法使得 web 内容能够在后台运行脚本。
worker 线程能够在不干扰 UI 的情况下执行任务。另外，还能够使用 XMLHttpRequest来执行 I/O 操作。

工作线程(Web Worker)的三大主要特征：
* 能够长时间运行(响应)
* 理想的启动性能
* 理想的内存消耗

### 线程安全

Worker 接口会生成真正的操作系统级别的线程。

### 生成 worker
worker 的 onmessage 属性设置成一个特定的事件处理函数，用于接收 worker 的通知：
```JS
var myWorker = new Worker('my_task.js');

myWorker.onmessage = function(oEvent) {
    console.log('Called back by the worker!\n');
}
```
或者使用 addEventListener():
```JS
var myWorker = new Worker('my_task.js');

myWorker.addEventListener('message', function(oEvent) {
    console.log('Called back by the worker!\n');
}, false);

myWorker.postMessage('');  // start the worker
```

注意：`传入 worker 构造函数的参数 URI 必须遵循同源策略`

### 传递数据


### Reference
* https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers
* http://edu.cnzz.cn/201212/844537c1.shtml
* http://blog.jobbole.com/30592/