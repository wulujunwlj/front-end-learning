
# Pro HTML5 Programming(Second Edition)

## 第7章 WebSockets API
### 介绍
* HTML5 WebSockets 是 HTML5 中最强大的通信功能，它定义了一个全双工通信信道，仅通过 Web 上的一个 Socket 即可进行通信
* 传统方案：comet 和 Ajax轮询(polling)、长轮询(long-polling)以及流(stream)

### 概述
* 实时和 HTTP
    - comet 技术可以让服务器端主动以异步方式向客户端推送数据，会使针对传输消息给客户端的响应延迟完成
    - 使用轮询时，浏览器会定期发送 HTTP 请求，并随机接收响应
* 

## 第10章 Web Workers API
* JavaScript 是单线程的
* HTML5 Web Worker是的特点
    - 可以让 Web 应用程序具备后台处理能力
    - Web Workers 中执行的而脚本不能访问页面的 window 对象，即不能直接访问 Web 页面和 DOM API
    - 可以用来监听由后台服务器广播的新闻信息
* 使用
    - 检查浏览器是否支持 Worker 
    - 创建 Web Worker(JS 文件的 URL 可以是相对或者绝对路径，只要是同源的 - 相同协议、相同端口)：worker = new Worker('echoWorker.js')
        + 内联 Worker
        ``` HTML
        <!-- type 信息的作用是通知浏览器及其 JS 引擎不要解析和运行脚本，需要代码的支持，在 JS 中查找 script 代码块，并调用 Worker -->
        <script id="myWorker" type="javascript/worker">
        ```
        + 共享 Worker
            * 能够为同源的多个页面所共享
            * 引入端口的概念用于 PostMessage 通信
            * 启动方法：sharedWorker = new SharedWorker('sharedEchoWorker.js');
    - 在 Worker 中导入其他 JS 文件：importScripts('helper.js', 'others.js')
    - 与 HTML5 Web Worker 通信
        + postMessage
    - 编写主页和 worker 代码
        + 可在 Chrome 的 Scripts 标签下的 Worker inspectors 调试 代码
        + 监听 message 处理信息
        + 监听 error 处理错误
        + 停止 worker：worker.terminate()
        + Web Worker 嵌套调用：var subWorker = new Worker('subWorker.js');
    - todo:simple-demo 示例和书上的例子
* 