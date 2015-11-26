
## Restful 相关概念    

### notes

1.REST 这个词，是Roy Thomas Fielding 在他 2000 年的博士论文中提出来的   

2.REST:   

[Resource]Representational State Transfer([资源]表现层状态转换)   

3.如果一个架构符合 REST 原则，就称它为 RESTful 架构    

4.资源：   

就是网络上的一个实体，或者说是网络上的一个具体信息。所谓上网，就是与互联网上的一系列的“资源”互动，调用它的URI。   

5.表现层(Representation)：   

把“资源”具体呈现出来的形式，叫做它的“表现层”   

6.状态转换(State Transfer)：   

互联网通信协议HTTP，是一个无状态协议，所有的状态都保存在服务器端。因此，如果客户端想要操作服务器，必须通过某种手段，让服务器发生"状态转换"。而这种转化是建立在表现层之上的，所以就是"表现层状态转化"   

客户端手段：GET - 获取资源；POST - 新建资源(更新资源)；PUT - 更新资源；DELETE - 删除资源   

7.综述：   

什么是RESTful 架构：   

* 每一个 URI 代表一种资源   
* 客户端和服务器之间，传递这种资源的某种表现层   
* 客户端通过四个 HTTP 动词，对服务器端资源进行操作，实现"表现层状态转化"   

8.误区：     

* URI 包含动词：“资源”表示一种实体，所以应该是名词，动词应该放在HTTP协议中；   
* URI 中加入版本号：不同版本只是同一种资源的不同表现形式，应该采用同一个 URI。版本号可以在HTTP请求头信息的 Accept 字段中进行区分。

### Reference:

* [理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)