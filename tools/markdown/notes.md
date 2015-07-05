## Markdown


1. markdown 是一种书写的格式、语法：
	宗旨：实现易读易写；

	目标：成为一种适用于网络的书写语言；

2. 注意：  
	在HTML区块标签间的 Markdown 格式语法将不会被处理；  
	HTML 的区块(行内)标签如 &lt;span> &lt;cite> &lt;del> 可以在 Markdown 的段落、列表或是标题里随意使用；  
	Markdown 语法在 HTML 区段标签内是有效的；

3. 段落  
	两个以上的空格产生换行  
	
4. 标题：  
	类 Setext 形式：利用 = (最高阶标题) 和 - (第二阶标题)  
	类 Atx 形式则是在行首插入1到6个 #，对应h1-h6  
	
5. 区块引用 Blockquotes：  
	使用类似 email 中 > 的引用方式。可以嵌套：  

	例如：  
	>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
	>>consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
	Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

6. 列表：  
	无序列表：使用星号、加号或者减号；  
	有序列表：使用数字接着一个英文句点(数字不会影响输出的 HTML   效果)；  

7. 代码区块：  
	&lt;pre>&lt;/pre> 或 &lt;code>&lt;/code> 标签。  
	代码区块内的 & < > 会自动转换成 HTML 实体。
	<pre>
		<div class="footer">@copy;2004 Foo Cooporation</div>
	</pre>

8. 分隔线：  
	在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。可以在星号或减号间插入空格。  
	***
	* * *
	- - -
	_ _ _ _

9. 区段元素：  
	链接：[方括号]表示。可分为行内式和参考式；
10. 

	

