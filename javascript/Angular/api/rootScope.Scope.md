# rootScope.Scope - ng 模块中的类型

一个根节点 scope可以通过使用关键字 $rootScope 从 $injector 取回。子作用域可以通过使用 $new() 方法来创建。(大多数作用域是在编译 HTML 模板时自动被创建的)

这里是一段简单的 scope 代码片段来展示你可以怎样和 scope 交互：
``` <file src="./test/ng/rootScopeSpec.js" tag="docs1" /> ```

## 继承
一个 scope 可以继承自一个父级 scope，如下所示