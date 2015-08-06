
### ng-model-options   

from:http://www.tuicool.com/articles/uyuuYz   

* 控制ng-model 何时进行同步   
	1.当某个确定事件被触发的时候[ng-model-options="{updateOn: 'blur'}"]，可指定多个   
	2.在指定的防抖动延迟时间之后，视图就会在指定的时间之后被同步到模型[ng-model-options="{debounce: 1000}"]   
	3.$rollbackViewValue：把数据模型的值返回给视图，同时取消所有的将要发生的延迟同步更新事件    
	<pre>
		<input type="text" ng-model="name">
		<p>Hello {{ name }}</p>
	</pre>
	每次 input 输入值时，就会同步到数据模型，angular 就执行 $digest 循环[需要处理所有绑定到scope上的watch方法]，直到模型稳定下来。
