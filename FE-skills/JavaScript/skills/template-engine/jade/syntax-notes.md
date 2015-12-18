
## jade-lang reference
[官方网站](http://jade-lang.com/reference/)

### attributes
---
* 单个属性
```
a(href='goole.com') Google
```
*  多个属性(`,`)
```
a(class='button', href='google.com') Google

input(
    type='checkbox'
    name='agreement'
    checked
)
```
* 包含 JS 表达式(`-`)
```
- var authenticated = true
body(class=authenticated ? 'authed' : 'auon')
```
* 为转码的属性 - unescaped attributes(`!=`)[unescaped & cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
```
div(escaped='<code>')
div(unescaped!='<code>')
```
* 布尔类型的属性
```
input(type='checkbox', checked)
input(type='checkbox', checked=true)
input(type='checkbox', checked=false)
input(type='checkbox', checked=true.toString())
```
* 样式属性(`{}`)
```
a(style={ color: 'red', background: 'green' })
```
* 类属性(`string` `array` `object`)(类属性可以定义多个相加)
```
- var classes = ['foo', 'bar', 'baz']
a(class=classes)
a.bing(class=classes class=['bing'])

- var currentUrl = '/about'
a(class={ active: currentUrl === '/'} href="/") Home
a(class={ active: currentUrl === '/about'} href="/") About
```
* 类字面量(`.className`)(omit tag name is for div)
```
a.button
.content
```
* id 字面量(`#idName`)(omit tag name is for div)
```
a#main-link
#content
```
* &attributes(explode an object into attributes.`not automatically escaped`)
```
div#foo(data-bar='foo'&attributes({ 'data-foo': 'bar' }))
- var attributes = { 'data-foo': 'bar' };
div#foo(data-bar='foo'&attributes(attributes))
```

### case
---

* 类似 JS 中的 `switch`
```
- var friends = 10
case friends
    when 0
        p you have no friends
    when 1
        p you have a friend
    default
        p you have #{friends} friends
```

* case fall through
```
- var friends = 0
case friends
    when 0
    when 1
        p you have few friends
    default
        p you have #{friends} friends
```

* block expansion
```
- var friends = 1
case friends
    when 0: p you have no friends
    when 1: p you have a friend
    default: p you have #{friends} friends
```

### code
---
* unbuffered code(`-`)
```
- for(var i=0; i<3; i++)
  li item

- 
  list = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis']
each item in list
  li= item
```
* buffered code(`=`)
```
p= 'This code is <escaped>!'
p= 'This code is' + ' <escaped>!'
```
* unescaped buffered code(`!=`)
```
p!= 'This code is <strong>not</strong> escaped!'
```

### comments
---
* Just like JS(`//` `//-`)
```
// This is comment
//- This comment is unbuffered
```
* block comments - 注释块
```
// 
    This is a block comments
```
* conditional comments(使用 HTML 的规则)
```
<!-- [if IE 8] -->
<html lang="en" class="lt-ie9">
<![endif] -->
<!-- [if gt IE 8] --><!-->
<html lang="en" class="lt-ie9">
<!-- ![endif] -->
```

### conditionals
---
```
- var user = { description: 'foo bar baz'}
- var authorised = false

#user
    if user.description
        h2 Description
        p.description= user.description
    else if authorised
        h2 Description
        p.description.
            User has no description
            why not add one...
    else
        h1 Description
        p.description User has no description
```

### doctype
---
* doctype html
* doctype xml
* doctype transitional
* doctype strict
* doctype frameset
* doctype 1.1
* doctype basic
* doctype mobile

### extends(template inheritance)
---
* `extends` keyword allows a template to extend a layout or parent template.It can then override certain pre-defined blocks of content.

* 继承父级模板，然后可以重载已定义的特定内容的 `块(block)`

```
//- layout.jade
doctype html
html
    head
    	block title
    		title Default title
    body
    	block content

//- index.jade
extends ./layout.jade
block title
	title Article title

block content
	h1 My Article
```

### filters
---
* filters let you use other languages within a jade template. They take a block of plain text as an input.
* popular filters: `:coffee-script` `:babel` `:uglify-js` `:less` `:markdown-it`

### includes
---
* includes jade file - insert the contents of one jade file into another
```
//- index.jade
doctype html
html
	include ./includes/head.jade
	body
		h1 My Site
		p Welcome to my super lame site.
		include ./includes/foot.jade

//- includes/head.jade

head
	title My Site
	script(src='/javascripts/jquery.js')
	script(src='/javascripts/app.js')

//- includes/foot.jade

#footer
	p Copyright (c) foobar
```
* include plain text
```
//- index.jade

doctype html
html
	head
		style
			include style.css
	body
		h1 My Site
		p Welcome to my super lame site.
		script
			include script.js
```
* include fiiltered text 
```
//- index.jade

doctype html
html
	head
		title An Article
	body
		include:markdown article.md

```

### inheritance
---
* template inheritance
    * Jade supports template via the `block` and `extends` keywords.
    * Jade blocks can provide default content
    * Giving the path(with or without the .jade extension)
    * Can define one or more blocks that will override the parent block content
```
//- layout.jade
html
	head
		title My Site - #{title}
		block scripts
			scripts(src='/jquery.js')
	body
		block content
		block foot
			#footer
				p some footer content

//- page-a.jade
extends ./layout.jade
block scripts
	script(src='/jquery.js')
	script(src="/pets.js")

block content
	h1= title
	each pet in pets
		include pet

//- sub-layout.jade
extends ./layout.jade

block content
	.sidebar
		block sidebar
			p nothing
	.primary
		block primary
			p nothing

//- page-b.jade
extends ./sub-layout.jade
block content
	.sidebar
		block sidebar
			p nothing
	.primary
		block primary
			p nothing
```
* block append/prepend
    * Jade allows to replace(default), prepend or append blocks.
    * the word `block` is optional
```
//- utilize on every page
html
	head
		block head
			script(src='/vendor/jquery.js')
			script(src='/vendor/caustic.js')
	body
		block content

//- append the block
extends layout
block append head
	script(src='/vendor/three.js')
	script(src='game.js')		

//- the word block is optional
extends layout
append head
	script(src='/vendor/three.js')
	script(src='game.js')		
```

### interpolation(插入，篡改)
---
* string interpolation, escaped(`=` `#{}` `valid javascript expression`)
```
- var title = 'On Dogs: Man\'s Best Friend';
- var author = 'enlore';
- var theGreat = '<span>escap!</span>';

h1 = title
p Written with love by #{author}
p This will be safe #{theGreat}

//- with valid javascript expression
- var msg = 'not my inside voice';
p This is #{msg.toUpperCase()}
```
* string interpolation(`!{}`) `danger`
```
- var riskyBusiness = '<em>Some of the girls are wearning my mother\'s clothing</em>'
```
* tag interpolation(`#[]`)
```
p.
    If you take a look at this page's source #[a(target="_blank", href="https://github.com/jadejs/jade/blob/master/docs/views/reference/interpolation.jade") on GitHub],
      you'll see several places where the tag interpolation operator is
      used, like so.
```

### interation(迭代)
* each
```
//- Array
ul
    each val in [1, 2, 3, 4, 5]
    	li= val

//- Array with index
ul
	each val, index in ['zero', 'one', 'two']
		li= index + ': ' + val

//- Object
ul
	each val, index in { 1: 'one', 2: 'two', 3: 'three'}
		li= index + ': ' + val
```
* while
```
- var n = 0
ul
	while n < 4
		li= n++
```

### mixins
---
* minins allow to create reusable blocks of jade
```
//- Declaration

mixin list
	ul
		li foo
		li bar
		li baz

//- use
+list
+list

//- mixin with arguments
mixin pet(name)
	li.pet= name

ul
	+pet('cat')
	+pet('dog')
	+pet('pig')
```
* mixin blocks
```
mixin article(title)
	.article
		.article-wrapper
			h1= title
			if block
				block
			else 
				p No content provided

+article('Hello World')
+article('Hello World')
	p This is My
	p Amazing article
```
* mixin attributes
```
mixin link(href, name)
	//- attributes == { class: 'btn' }
	a(class!=attributes.class, href=href)= name

+link('/foo', 'foo')(class='btn')

//- 或者
mixin link(href, name)
	a(href=href)&atributes(attributes)= name

+link('/foo', 'foo')(class='btn')
```
* rest arguments
```
mixin list(id, ...items)
	ul(id=id)
		each item in items
			li= item

+list('my-list', 1, 2, 3, 4)
```

### plain text
---
* piped text(`|`)
```
| Plain text can include <strong>html</strong>
p
	| It must always be on its own line
```
* inline in a tag
```
p Plain text can include <strong>html</strong>
```
* block in a tag(`.` after the tag)
```
script.
	if(unsingJade)
		console.log('You are awesome')
	else
		console.log('Please use jade')
```

### tags
---
text at the start of a line.