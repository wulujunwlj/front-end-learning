# Creating Custom Directives

> Note: this guide is targeted towards developers who are already familiar with AngularJS basics. If you're just getting started,we recommend the [tutorial](http://docs.angularjs.cn/tutorial/) first.If you're looking for the **directives API**,we recently moved it to [$compile](http://docs.angularjs.cn/api/ng/service/$compile).

This document explains when you'd want to create your own directives in your AngularJS app, and how to implement them.

## What are Directives?
At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform the DOM element and its children.

Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngClass. Much like you create controllers and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.

> What does it mean to "compile" an HTML template? For AngularJS, "compilation" means attaching event listeners to the HTML to make it interactive. The reason we use the term "compile" is that the recursive process of attaching directives mirrors the process of compiling source code in compiled programming languages.

## Matching Directives
Before we can write a directive, we need to know how Angular's HTML compiler determines when to use a given directive.

In the following example, we say that the <input> element matches the ngModel directive.
```
<input ng-model="foo">
```

The following also matches ngModel:
```
<input data-ng:model="foo">
```

Angular normalizes an element's tag and attribute name to determine which elements match which directives. We typically refer to directives by their case-sensitive camelCase normalized name (e.g. ngModel). However, since HTML is case-insensitive, we refer to directives in the DOM by lower-case forms, typically using dash-delimited attributes on DOM elements (e.g. ng-model).

The normalization process is as follows:

1. Strip x- and data- from the front of the element/attributes.
2. Convert the :, -, or _-delimited name to camelCase.
For example, the following forms are all equivalent and match the ngBind directive: