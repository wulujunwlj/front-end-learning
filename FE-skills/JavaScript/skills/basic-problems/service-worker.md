
# Service Worker
http://web.jobbole.com/82247/
* 一个 service worker 是一段运行在浏览器后台进程里的脚本，它独立于当前页面，提供了那些不需要与 web 页面交互的功能在网页背后悄悄执行的能力。在将来，基于它可以实现消息推送，静默更新以及地理围栏等服务，但是目前它首先要具备的功能是拦截和处理网络请求，包括可编程的响应缓存管理。
* 特点：
    - 是 JavaScript Worker，不能直接操作 DOM，但是 service worker 可以通过 postMessage 与页面通信
    - 是一个可编程的网络代理，允许开发者控制页面上处理的网络请求
    - 在不被使用的时候会自动终止，当它被再次用到的时候，会被重新激活。可以通过使用 IndexedDB 保存持久化的信息
    - 大量使用 promise

## 使用 Service Worker
* 注册
```JS
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope:');
    });
}
```
* 
