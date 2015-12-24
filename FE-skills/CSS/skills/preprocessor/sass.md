
# SASS
[sass 教程](http://www.w3cplus.com/sassguide/)

## 快速教程
* 工具
    - Codekit (只有 Mac 版)
    - Prepro,Mixture,Koala
* Sass 文件被编译后，Codekit 将会在 /sass 文件夹下创建一个 /css 文件夹来存放编译好的 CSS 文件
* 引入(@import)：编译器会把所有的样式都合并成一个 CSS 文件
``` sass 
@import 'partial';
@import 'another-partial';
@import 'partial-name';
```
* 组织引入的内容(按照模块结构组织文件)
* 变量($)
    - 使用前缀名 `$` 后接属性名来定义和使用
    - 建议放在单独文件中 variable.scss
* 注释
    - `/* comments */` 的注释在编译出来的 CSS 文件中还是被转译为注释
    - `// comments` 的注释语句不会再编译的 CSS 文件中被转译出来
* 关键字：`saturate` 
* 数学运算符(`+` `-`  `*` `/` `%`)
* 嵌套语法
``` sass
.site-nav {
    ...
    ul {
        ...
        li {
            ...
            a {
                ...
            }
        }
    }
}
.site-nav {
    ...
    ul {
        ...
    }
    li {
        ...
    }
    a {
        ...
    }
}
```
* 父代选择器的嵌套(&)
``` sass
.site-nav {
    ...
    ul {
        ...
        li {
            ...
            &.selected {
                a {
                    ...
                }
            }
            a {
                ...
            }
        }
    }
}
```
* mixin:定义代码片段，而且可以传参数
``` sass
@mixin box-sizing($sizing) {
    -webkit-box-sizing: $sizing;
    -moz-box-sizing: $sizing;
    box-sizing: $sizing;
}
.box-border {
    border: 1px solid #ccc;
    @include box-sizing(border-box)
}
```
* 扩展/继承(@extend)
``` sass
.message {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}
.success {
    @extend .message;
    border-color: green;
}
.error {
    @extend: .message;
    border-color: red;
}
.warning {
    @extend: .message;
    border-color: yellow;
}
```
* 颜色
``` sass
$linkColor: #08c;
a {
    text-decoration: none;
    color: $linkColor;
    &:hover {
        color: darken($linkColor, 10%);
    }
}
```

## sass 语法
* 文件后缀名
    - .sass：不使用大括号和分号，严格要求
    - .scss：使用大括号和分号
* 导入(@import)
    - 编译时会将 `@import` 的 scss 文件合并进来只生成一个 css 文件
    - 如果导入 css 文件  `@import 'reset.css'` ，则效果就跟普通 css 导入样式文件一样，导入的 css 文件不会合并到编译后的文件中，而是以 `@import` 方式存在
    - 所有的 sass 导入文件都可以忽略后缀名 `.scss`
    - 一般来说基础的文件命名方法以 `_` 开头，如 `_mixin.scss`，这种文件导入的时候可以不写下划线：`@import 'mixin'`
* 注释
    - `/* comments */` 
    - `// comments` ：单行注释不会输入到 CSS 中
* 变量($) [sass揭秘之变量](http://www.w3cplus.com/preprocessor/sass-basic-variable.html)
    - 以 `$` 开头，后面紧跟变量名
    - 变量名和变量值之间使用冒号隔开
    - 值后面加 `!default` 表示默认值
    - 变量声明之前重新声明可以覆盖默认值
    ``` sass
    $baseLineHeight: 2;
    $baseLineHeight: 1.5!default;
    body {
        line-height: $baseLineHeight;
    }
    ```
    - 特殊变量：变量为属性值时，可直接使用；如果变量作为属性名或者在某些特殊秦情况下，则需要以 `#{$variables}` 形式使用
    ``` sass
    $borderDirection: top !default;
    $baseFontSize: 12px !default;
    $baseLineHeight: 1.5 !default;
    // 应用于 class 和属性
    .border-#{$borderDirection} {
        border-#{$borderDirection}: 1px solid #cc;
    }
    // 应用于复杂的属性值
    body {
        font: #{$baseFontSize}/#{$baseLineHeight};
    }
    ```
    - 多值变量
        + list 类型
            * list 数据可以通过空格，逗号或小括号分隔多个值
            * 可用 nth($var, $index) 取值
            * 有函数：length($list),join($list1, $list2, [$separator]),append($list, $value, [$separator]) 等。[参考](http://sass-lang.com/documentation/Sass/Script/Functions.html)
        ``` SASS
        // 一维数组
        $px: 5px 10px 20px 30px;
        // 二维数组
        $px: 5px 10px, 20px 30px;
        $px: (5px 10px) (20px 30px);

        // 使用
        $linkColor: #08c #333 !default;

        a {
            color: nth($linkColor, 1);

            &:hover {
                nth($linkColor, 2);
            }
        }
        ```
        + map 类型
            * map 数据以 key 和 value 成对出现，其中 value 又可以是 list，格式为: `$map: (key1: value1, key2: value2)` 
            * 可以通过 `map-get($map, $key)` 取值
            * 有函数：map-merge($map1, $map2),map-keys($map), map-values($map) 等
        ``` SAss
        $heading: (h1: 2em, h2: 1.5em, h3: 1.2em);

        @each $header, $size in $headings {
            #{$header} {
                font-size: $size
            }
        }
        ```
    - 全局变量(!global - 暂时不能支持,sass 3.4后的版本中正式应用)
* 嵌套(nesting)
    - 选择器的嵌套
        + 一个选择器中嵌套另一个选择器来实现继承，增强了sass文件的结构性和可读性
        + 可以使用 & 表示父元素选择器
    ``` sass
    #top-nav {
        line-height: 40px;
        text-transform: capitalize;
        background-color: #333;
        li {
            float: left;
        }
        a {
            display: block;
            padding: 0 10px;
            color: #fff;

            &:hover {
                color: #ddd;
            }
        }
    }
    ```
    - 属性的嵌套
        + 有些属性拥有同一个开始的单词
    ``` sass
    .fakeshadow {
        border: {
            style: solide;
            left: {
                width: 4px;
                color: #888;
            }
            right: {
                width: 2px;
                color: #ccc;
            }
        }
    }
    ```
* @at-root
    - sass3.3.0 新增的功能，用于跳出选择器的嵌套。默认所有的嵌套，继承所有上级选择器，这个功能可以跳出所有上级选择器
    - 普通跳出嵌套
    - 
* 