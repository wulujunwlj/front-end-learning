
# CSS 那些事儿
[CSS 页面布局篇](./css-things-part2.md)
## CSS 入门篇

### 花落知多少 - CSS 正传

* CSS - Cascading Style Sheeets
* 作用
    - 修饰页面文本、图片等元素
    - 更有效的控制页面结构、布局
    - 提高开发和维护效率
* 基本结构
    selector { property: value; }，结构的特点：
        + 声明都是紧跟着选择符，并被花括号包含着
        + 每个声明的属性跟属性之间都是用冒号隔开、分号结束
        + 花括号及分号前后的空格可有可无
        + 属性值名称过长并带有空格，需要用引号包含
* 注释
    - `/* comments */`
* 简写
    - 颜色
        + 十六进制 #RRGGBB(double 时可缩写)
        + RGB RGB(x, x, x)/RGB(x%, x%, x%)
        + 颜色名称 red，green 等
        + 用户系统色盘值 background,windowtext等
    - 单位值的省略
        + 当数值为 0 时，可省略
    - padding/margin(TRBL)
        + 一个值{ property: value; }：T = R = B = L =value
        + 两个值{ property: value1 value2; }：T = B = value1, R = L = value2
        + 三个值{ property: value1 value2 value3; }：T = value1, R = L = value2, B = value3
        + 四个值{ property: value1 value2 value3 value4; }：T = value1, R = value2, B = value3, L = value4
    - 边框的缩写(border: border-width || border-style || border-color)
        + 顺序:border-width,border-style,border-color
    - 背景的简写(background: background-color || background-image || background-repeat || background-attachment || background-position)
        + 示例
        ```CSS
        body { background: #FF0000 url(background.gif) no-repeat fixed 0 0; }
        ```
        + 属性默认值：
            * background-color: transparent
            * background-images: none
            * background-repeat: repeat
            * background-attachment: scroll
            * background-position: 0% 0%
    - 字体的简写(font: font-style || font-variant || font-weight || font-size || line-height || font-family)
        + 示例
        ```CSS
        body { font: italic small-caps bold 12px/140% "Lucida Grande", sans-serif; }
        ```
        + 默认值
            * font-style: normal
            * font-variant: normal
            * font-weight: normal
            * font-size: medium
            * font-height: normal
            * font-family: "Times New Roman"
    - 表的简写(ol ul)(list-style: list-style-image || list-style-position || list-style-type)
        + 示例
        ``` CSS
        li { list-style: url(image.gif) inside square; }
        ```
        + 默认值
            * list-style-type: disc
            * list-style-position: outside
            * list-style-image: none
* 选择器
    - 通配符选择符：`*`
    - 类选择符：`.`
    - 包含选择符(派生选择符或后代选择符 - 选择元素的子元素)：` `
    - 子选择符(选择元素的直接子元素 - &gt IE7)：`>`
    - 相邻选择器(选择同一个父级下某个元素之后的元素)：`+`
    - 属性选择符
        + E[attr]：具有 attr 属性
        + E[attr="value"]：attr 属性值等于value
        + E[attr~="value"]：attr 属性值包含 value
        + E[attr|="value"]：attr 属性值并且必须以 value 值开始及使用连字符(-) 分隔
    - ID 选择符：`#`
        + 
    - 选择符的组合关系
        + 选择符群组：`,`(多个相同定义的选择符组合并)
        + 选择符组合：根据 HTML 的结构关系，层层递进的罗列选择符，目标选择符为最后一个选择符。每个选择符之间的使用空格分隔且关系为父子关系
    - 
### 1.3 莫须有？ - 伪类与伪对象
* 伪类
    - 可以用来指定一个或者多个与其相关的选择符的状态
    - 形式 - 选择符:伪类 { 属性: 属性值;}
    ```CSS
    a:link { color: red; }
    a:visited { color: blue; }
    a:hover { color: green; }
    a:active { color: black; }
    ```
* 伪对象
    - 是指在 HTML 的文档指定的信息之外，创建了文档的额外信息。
    - 形式 - 选择符:伪对象 { 属性: 属性值; }
    ```CSS
    p:before { content: 'March 1'; }
    p:after { content: 'test'; }
    ```

#### 1.4 剪不断理还乱 - 善处选择符之间的关系
* 选择符的覆盖：后定义的选择器覆盖先定义的选择器样式
* 选择器 z 的继承(不是所有的后代标签都会继承)：后代元素自动继承父元素的样式
* 不会继承的标签列表(?)
* 选择符的权重优先级    
    1.标有 !important 关键字声明的属性
    2.HTML 中的 CSS 样式属性
    3.作者编辑的 CSS 文件样式属性    

    > 以选择符组合方式来决定优先级别，相同选择符组合根据先后次序决定优先级
    > 选择器优先级的积分：
    >> 标签选择符、伪类和伪对象：1
    >> 类选择符、属性选择符：10
    >> ID 选择符：100
    >> style 属性：1000
    >> 其他选择符，如通配选择符等：0   
    
    4.用户设置的样式
    5.浏览器默认的样式

#### 1.5 英雄救美 -  让 CSS 拯救 HTML
* CSS 文件引入的方式
    - 行内样式：写在标签元素的属性 `style` 中
    - 内嵌样式表：写在 `<style></style>` 标签内
    - 外联样式表：通过 `<link />` 方式外链 CSS 样式文件
    ```HTML
    <link rel="stylesheet" href="css/mycss.css" type="text/css" media="all">
    ```
    - 导入样式表：通过 `@import` 关键字导入外部 CSS 样式文件
        + 优点：能在一个样式文件中再次导入其他样式表，可以降低 HTML 文档的复杂性，并且允许在一个样式表中管理所有样式表
        + 导入样式表的方式必须放在样式表的最前面，否则可能无法正常运行
        + 导入的样式表在浏览器解析时是最后才解析的，会导致 IE6 的闪屏问题，因此不建议使用
    ```HTML
    <style type="text/css">
    @import url('css/mycss.css');
    </style>
    ```
    ```CSS
    @import url('base.css')
    ```

#### 1.6 小结
* CSS 文件的组织与规划

### 一亩三分地 - CSS 的工作环境

#### CSS 的显示环境 - 浏览器
#### CSS 的处理环境 - 编辑器
#### CSS 的辅助环境 - 周边插件
#### 小结