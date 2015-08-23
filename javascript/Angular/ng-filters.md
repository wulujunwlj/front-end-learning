## Angular 中的 filter   

### Angular 内置 filter    

1.currency   
第二个参数表示金额单位的参数，表示以给定格式显示对应数据：   
> vm.currency | currency:'RMB ￥ '   

2.date   
第二个参数表示时间格式化的格式：   
> vm.date | date: 'yyyy-MM-dd'   

3.filter   
第二个参数有三种形式，分别为：   
* 字符串(只要包含对应字符串，则得到对应的值)：vm.filterObj | filter: vm.searchKey   
* 对象(对源数据的某一个字段进行精确过滤)：vm.filterObj | filter: {'name': vm.searchKey}   
* 方法(返回值为 true 时则得到对应的值)：vm.filterObj | filter: filterFn   

4.json   
json 格式显示对应数据   

5.limitTo   

6.lowercase   
转换字母为小写   

7.uppercase   
转换字母为大写   

### filter 示例:capital   

```js   
	app.filter('capital', [
		function() {
			var filterFn = function(input) {
				if(angular.isUndefined(input)) {
					return '';
				} else {
					return input.toString().substr(0, 1).toUpperCase() + input.slice(1);
				}
			};

			return filterFn;
		}
	]);   
```

