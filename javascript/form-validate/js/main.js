
var getLength = function(str) {
	return str.replace(/[^\x00-xff]/g, 'xx').length;
};

window.onload = function() {
	var aInput = document.getElementsByTagName('input');
	var oName = aInput[0];
	var pwd = aInput[1];
	var pwd2 = aInput[2];

	var aP = document.getElementsByTagName('p');
	var name_msg = aP[0];
	var pwd_msg = aP[1];
	var pwd2_msg = aP[2];

	var count = document.getElementById('count');
	var aEm = document.getElementsByTagName('em');
	var name_length = 0;

	// var str = 'ae123245Ae';
	// var re = /(a[d-g]){2}/i;
	// console.log(re.test(str));

	// 用户名：a、数字，字母（部分大小写），汉字，下划线	b、5-25字符，推荐使用中文会员名
	// unicode 中文字符区间： \u4e00-\u9fa5

	var re = /[^\w\u4e00-\u9fa5]/g;
	oName.onfocus = function() {
		// 
		name_msg.style.display = 'block';
		name_msg.innerHTML = '<i class="ati"></i>5-25个字符，一个汉字为两个字符，推荐使用中文会员名'
	};
	oName.onkeyup = function() {
		// 
		count.style.visibility = 'visible';
		name_length = getLength(this.value);
		count.innerHTML = name_length + '个字符';
	};
	oName.onblur = function() {
		// 
	};
};


/*
	正则表达式：匹配字符
		工作原理：通配符技术

		JS 中正则表达式语法：
			var re = new RegExp('a', 'i');

			var re = /a/i;

		\w：匹配任何ASCII单字符[a-zA-Z0-9]
		\s：匹配任何Unicode空白符
		\d：匹配任何数字[0-9]
		[...]：匹配方括号中的所有字符

		重复类：
		{n}：
		{n,}

		选择符：
			| (或)

		定位符：
			^
			$
			\b
			\B

		正则表达式对象的方法：
			exec()：执行正则表达式的匹配，返回一个数组
			test()：测试正则表达式的匹配，返回布尔值
			toSource()：返回 RegExp 对象的源代码
			toString()：将 RegExp对象转换成字符串
		特殊符号：
*/