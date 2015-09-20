## Angular 的 filter 中包含异步请求的操作：使用场景，根据   code 获取对应的 name   

### from: https://code.angularjs.org/1.3.7/docs/guide/filter   

### problem when use in view template:   

`filter` reduces arrays into sub arrays based on conditions.
Using a filter in a view template will reevaluate the filter on every digest,which can be costly if the array is big.   

solve:Calls the filter directly in the controller.By this,the controller is able to call the filter only when needed(e.g. when the data is loaded from the backend or the filter expression is changed.)    

### creating custom filters   
Register a new filter factory function with own module,this uses `filterProvider`.This factory should return a new filter function which takes the input value as the first argument.Any filter arguments are passed in as additional arguments to the filter function.    

The filter function should be a pure function, which means that it should be stateless and idempotent.

### stateful filters   
Reason not to use statefule filters: the execution of those can't be optimized by Angular,which often leads to performance issues.Many stateful filters can be converted into stateless filters just by exposing the hidden states as a model and turning it into an argument for the filter.   

way to make use statefule filters:use $stateful.which means that it will be executed one or more times during the each $digest cycle.   

e.g.   
```html   
app.filter('code2Name', ['$http', 
    function($http) {
        var filterFn = function() {
            //
        };

        filterFn.$stateful = true;

        return filterFn;
    }
])
```   

###   
Reference：   
1.http://stackoverflow.com/questions/19046641/asynchronously-initialize-angularjs-filter   
2.https://code.angularjs.org/1.3.7/docs/guide/filter   
3.http://stackoverflow.com/questions/27402326/angularjs-1-3-async-filter-not-working   
4.http://stackoverflow.com/questions/25877704/what-is-stateful-filtering-in-angularjs   
5.