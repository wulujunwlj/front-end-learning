# HTML5 秘籍

## 三.构建桌面式 Web 应用

### 9.数据存储(新的 Web 存储功能)
* Web 应用中的数据：
    - Web 服务器适合保存敏感信息，以及那些不希望被别人篡改的数据。服务器安全、可靠、高效
    - Web 客户端适合保存用户偏好，应用状态
#### 9.1 Web 存储简介
* 本地存储(localStorage)：用于长期保存整个网站的数据。一直存在，可以提供命令删除。
* 会话存储(sessionStorage)：用于临时保存针对一个窗口(或标签页)的数据。关闭窗口或标签页可删除。
* HTML5 未规定存储空间的上限，大多数浏览器设置为 5MB。更大的存储空间可以考虑使用 IndexedDB(起始空间为50MB，用户同意可扩展)
* 数据操作
    - 存储:localStorage[keyName] = data;sessionStorage[keyName] = data;
    - 获取:localStorage[keyName];sessionStorage[keyName];
    - 删除:localStorage.removeItem(keyName);
    - 清除所有:localStorage.clear();
    - 查找所有:
    ```JS
    for(var i=0; i<localStorage.length; i++) {
        console.log(localStorage[i]);
    }
    ```
    - 
* 在服务器中(含有端口号)使用 Web 存储

#### 9.2 深入 Web 存储
* Web 存储的数据会被自动被转换为文本
* 响应存储变化
    - Web 存储提供了在不同浏览器窗口间通信的机制。也就是说，加载本地存储或会话存储发生变化时，同一页面或者同一站点其他页面的窗口会触发 window.onStorage 事件
    - 存储变化是指向存储中添加新数据项，修改既有存储项，删除数据项或清除所有项

#### 9.3 读取文件：File API
* File API 只是规定怎么从硬盘提取文件，直接交给在网页中运行的 JS 代码。然后代码可以打开文件探究数据，无论是文本文件还是其他文件。File API 不是为了向服务器提交文件设计的
* File API 不能修改文件，也不能创建文件。可以通过 XHR 把数据发送到服务器，或者保存在本地存储中
* 使用。FileReader 的方法：readAsText,readAsBinaryString,readAsDataURL(处理图片),readAsArrayBuffer
```
<input id="fileInput" type="file" onchange="processFiles(this.files)">
function processFiles(files) {
    var file = files[0];

    var reader = new FileReader();
    reader.onload = function(e) {
        // 
    }

    reader.readAsText(file);
}
```
* 上传文件
```
<input id="fileInput" type="file" onchange="processFiles(this.files)" style="display: none;" multiple>
<button onclick="showFileInput();">click to upload</button>

function showFileInput() {
    var fileInput = document.getElementById('fileInput');
    fileInput.click();
}
```
* 每个文件对象都有三个有用的属性：name - 文件名(不包含路径)；size - 文件的字节大小；type - 文件的 MIME 类型
* FileReader 的事件
    - onload
    - onProgress:(间歇性的触发)来确定已经加载了多大比例
    - abort:取消未完成操作
    - onError:打开或读取文件时发生错误
    - onLoadEnd:操作完成(包括错误导致的终止)
* IndexDB：http://developer.mozilla.org/en/IndexedDB

### 10.离线应用(新的 HTML5 缓存功能)
* 离线应用可以应付间歇性的网络中断

#### 10.1 通过描述文件缓存资源
* 离线应用的一项基本技能就是缓存，即下载文件并在用户计算机上保存一份副本。
* 创建离线应用的步骤
    - 创建描述文件
    > 描述文件(menifest file)是一种特殊文件，告诉浏览器保存什么文件，不保存什么文件，以及用什么文件代替其他文件。描述文件中列出的所有需要缓存的内容，构成了所谓的离线应用
    ```
    CACHE MANIFEST

    # pages
    PersonalityTest.html
    PersonalityTest_Score.html

    # styles & scripts
    PersonalityTest.css
    PersonalityTest.js

    # pictures & fonts
    Images/emotional_bear.jpg
    ```
    - 修改网页，引用描述文件
    > 引用了描述文件，浏览器在请求页面时就会下载描述文件(必须为离线应用包含的每个页面都添加同样的属性)
    ```
    <html lang="en" manifest="PersonalityTest.manifest">
    ```
    - 配置 Web 服务器
    > Web 服务器必须以正确的 MIME 类型提供描述文件
* P286

* 
### 11.与 Web 服务器通信(XMLHttpRequest，服务器事件，Web 套接字)
### 12.更酷的 JavaScript 技术(地理定位，Web Worker，新的浏览器历史功能)