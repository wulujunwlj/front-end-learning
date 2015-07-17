
##

CSS3 前缀

| 前缀 			| 浏览器
| ---- 			| ----
| -webkit 	| chrome & safari
| -moz 			| firefox
| -ms 			| IE
| -o 				| opera

CSS3 能做什么：

- 选择器

- 圆角：border-radius   
	<code>border-radius: 5px 4px 3px 2px;</code>	// 方向，顺时针：左上、右上、右下、左下

- 块阴影和文字阴影   
	块阴影：  
		box-shadow: x-offset y-offset [阴影模糊半径] [阴影扩展半径] [阴影颜色] [投影方式]    
		
| 值 						| 描述
| -------------	| -------------
| x-offset 			| 必需。水平阴影的位置，允许负值
| y-offset			| 必需。垂直阴影的位置，允许负值
| 阴影模糊半径	| 可选。模糊距离
| 阴影扩展半径	| 可选。阴影的尺寸
| 阴影颜色			| 可选。省略时默认为黑色
| 投影方式			| 可选。设置 inset 时为内部阴影方式，如果省略为外阴影方式

- 色彩：HSL、CMYK、HSLA、RGBA

- 渐变效果

- 个性化字体：@font-face

- 多背景图：

- 边框背景图

- 变形处理：旋转、缩放、倾斜、移动

- 多栏布局

- 媒体查询