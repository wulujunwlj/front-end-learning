
## CSS 最核心的几个概念   

keywords: `盒模型` `position` `float`    

from: http://www.jianshu.com/p/3a18fcd9fcda    
			http://web.jobbole.com/83274/   
			http://web.jobbole.com/83295/   

### 元素类型   

HTML 的元素可以分为两种：    

* 块级元素（block level element）   
* 内联元素（inline element）   

块级元素和内联元素的区别：   

* 块级元素会独占一行，内联元素则会在一行内显示   
* 块级元素可以设置 width、height 属性，内联元素设置无效   
* 块级元素的 width 默认为 100%，而内联元素则根据其自身的内容或子元素来决定宽度。   

> inline-block:让元素对外呈现内联元素，可以和其他元素共处一行内；对内让元素呈现块级元素，可以改变宽高。   

> HTML 代码是顺序执行的，一份无任何 CSS 样式的 HTML 代码最终呈现出的页面是根据元素出现的顺序和类型排列的。块级元素就从上到下排列，遇到内联元素则从左到右排列。这种无样式的情况下，元素的分布叫普通流，元素出现的位置应该叫正常位置（这是我瞎起的），同时所有元素会在页面上占据一个空间，空间大小由其盒模型决定。   

### 盒模型(box model)   

> 由内到外依次是：content -> padding -> border -> margin   

position:    

| position 值					| 定位 					                  	|     
| ------------------- | --------------------------        |    
| static							|	position的默认值。元素将定位到它的正常位置（上文提到过），其实也就相当于没有定位。元素在页面上占据位置。不能使用 top right bottom left 移动元素位置。								|   
| relative						|	相对定位，相对于元素的正常位置来进行定位。元素在页面占据位置。可以使用 top right bottom left 移动元素位置。								|   
| absolute						|	绝对定位，相对于最近一级的 定位不是 static 的父元素来进行定位。元素在页面不占据位置。 可以使用 top right bottom left 移动元素位置。								|   
| fixed								|	绝对定位，相对于浏览器窗口来进行定位。其余和 absolute 一样，相当于一种特殊的 absolute。								|   
| inherit  						|	从父元素继承 position 属性的值。								|   
