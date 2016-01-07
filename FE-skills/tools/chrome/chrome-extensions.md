
# Chrome扩展及应用开发
[书籍来源](http://www.ituring.com.cn/minibook/950)
[参考](https://crxdoc-zh.appspot.com/extensions/)

## 声明
## 前言
## 第1章 初步接触 Chrome 扩展应用开发
* Chrome 是 Google 基于 Webkit 开发的一款浏览器
* Chrome 继承了 Webkit 内核对 HTML 的高速渲染，同时 Google 自行研发的 V8 引擎使得 JS 在 Chrome 中的执行效率大幅提升
* Chrome28 之后使用的 Blink 渲染引擎是 Webkit 中 Webcore 组件的一个分支
* JSON(JavaScript Object Notation)：是一种轻量级的数据交换格式

### 1.1 认识 Chrome 扩展及应用
http://www.ituring.com.cn/article/60130
### 1.2 我的第一个 Chrome 扩展
### 1.3 Menifest 文件格式
### 1.4 DOM 简述

## 第2章 Chrome 扩展基础
### 2.1 操作用户正在浏览的页面
* manifest 中的 `conent_scripts` 属性可以指定将哪些脚本何时注入到哪些页面中
* content_scripts 包含的属性
    - matches：定义哪些页面不会被注入脚本
    - exclude_matches：定义哪些页面不会被注入脚本
    - css：定义了要注入的样式文件
    - js：定义了要注入的 JS 文件
    - run_at：定义了何时进行注入
    - all_frames：定义脚本是否会注入到嵌入式框架中
    - include_globs：全局 URL 匹配
    - exclude_globs
* content_scripts 的脚本只是共享页面的 DOM，并不共享页面内嵌 JS 的命名空间。也就是说，无法通过 `content_scripts` 访问到页面本身内嵌 JS 的变量和方法

### 2.2 跨域请求

### 2.3 常驻后台
* manifest 中的 `background` 可以使扩展常驻后台。
* 包含的属性
    - scripts
    - page
    - persistent
* 

### 2.4 带选项页面的扩展
* manifest 中的 `options_page`
* 用 localStorage 来存储数据
    - localStorage 与 cookies 类似，有域额现值
    - 单个域在 localStorage 中存储数据的大小在 Chrome 中有限制 5MB(unlimitedStorage)
    - localStorage 只能存储字符串型的数据，无法保存数组和对象(join,toString,JSON.stringify)
* 

### 2.5 扩展页面间的通信
* runtime.sendMessage:chrome.runtime.sendMessage(extensionId, message, options, callback)
* runtime.onMessage:chrome.runtime.onMessage(callback(message, sender, sendResponse) { ... })
* runtime.connect
* runtime.onConnect
* 

### 2.6 储存数据
* HTML5 中的 localStorage
* Chrome 提供的存储 API(异步)
> 与 `localStorage` 相比的区别：
    - 如果储存区域指定为 `sync`，数据可以自动同步
    - `content_scripts` 可以直接读取数据，不必通过 background 页面
    - 在隐身模式下仍然可以读出之前存储的数据
    - 读写速度更快
    - 用户数据可以以对象类型保存
> 方法：
    - get
    - getBytesInUse
    - set
    - remove
    - clear
    ```JS
    chrome.storage.StorageArea.get(keys, function(result) {
        console.log(result);
    });
    chrome.storage.StorageArea.getBytesInUse(keys, function(bytes) {
        console.log(bytes);
    });
    chrome.storage.StorageArea.set(items, function() {
        // 
    });
    chrome.storage.StorageArea.remove(keys, function() {
        // 
    });
    chrome.storage.StorageArea.clear(function() {
        // 
    });
    chrome.storage.onChange.addListener(function(changes, areaName) {
        console.log(areaName);
        console.log(changes);
    })
    ```
* Web SQL Database

## 第3章 Chrome 扩展的 UI 界面
## 第4章 管理你的浏览器

### 4.5 标签
* 标签的结构
    - id
    - index：0开始
    - windowId
    - openerTabId
    - highlighted
    - active
    - pinned
    - url：需要权限
    - title：需要权限
    - favIconUrl：需要权限
    - status：标签状态，loading/complete
    - incognito：是否在隐身窗口中
    - width
    - height
    - sessionId
* 方法：get,getCurrent,query，创建标签 create，赋值标签 duplicate,更新标签 update
```JS
// param:tabId
chrome.tabs.get(tabId, function(tab) {
    console.log(tab);
});

chrome.tabs.getCurrent(function(tab) {
    console.log(tab);
});
// params attributes:active,pinned,highlighted,currentWindow,lastFocusedWindow,status,title,url,windowId,windowType,index
chrome.tabs.query({
    active: true
}, function(tabsArr) {
    console.log(tabsArr)
});
// 
chrome.tabs.create({ windowId: wId, index: 0, url: 'http://www.google.com', active: true, pinned: false, openerTabId: tId }, function(tab) { console.log(tab); });
chrome.tabs.duplicate(tabId, function(tab) { console.log(tab); });
chrome.tabs.update(tabId, { url: 'http://www.google.com' }, function(tab) { console.log(tab); });
```
* 
## 第5章 部分高级 API
## 第6章 Chrome 应用基础
## 第7章 文件系统
## 第8章 媒体库
## 第9章 网络通信
## 第10章 其他接口
## 附录A 制作 Chrome 主题
## 附录B i18n
## 附录C 认识 AngularJS
## 附录D Chrome 扩展及应用完整 API  列表