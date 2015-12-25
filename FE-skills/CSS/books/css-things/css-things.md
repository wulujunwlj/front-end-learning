
# CSS 那些事儿

## CSS 入门篇
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
    - 选择符群组：`,`
* P38
## CSS 页面布局篇
## CSS 页面元素篇
## CSS 应用篇
## CSS 实战篇
## 写在最后的话