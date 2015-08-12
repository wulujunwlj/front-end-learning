## Angular Services   

### services 的特点   

* 服务提供了一种能在应用的整个生命周期内保持数据的方法，能够在控制器之间进行通信，并且保证数据的一致性。   
* 服务是一个单例对象，在每个应用中只会被实例化一次（被$injector实例化），并且是延迟
	加载的(需要时才会被创建)。服务提供了把与特定功能相关联的方法集中在一起的接口。   
* <pre>
	angular.module('myApp.services', [])
		.factory('githubService', function() {
			var serviceInstance = {};

			return serviceInstance;
		});
	</pre>

### 定义服务的方法(五种方法)   

* factory(name, getFn)   
* service(name, constructor):在创建实例时通过 new 关键字来实例化服务对象   
* constant()   
* value()   
* provider()   

### 实质   

* 所有服务工厂都是由 $provide 服务创建的，$provide 服务负责在运行时初始化这些提供者   
* 提供者是一个具有 $get() 方法的对象，$injector 通过调用 $get 方法创建服务实例   
* 所有创建服务的方法都构建在 provider 方法之上。provider() 方法负责在 $providerCache 中注册服务   

### 等价写法   

<pre>
app.factory('myService', function() {
	return {
		'username': 'auser'
	};
});   
=========================   
app.provider('myService', {
	$get: function() {
		return {
			'username': 'auser'
		};
	}
});
</pre>