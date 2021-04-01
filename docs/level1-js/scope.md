---
title: JavaScript 作用域
---

JavaScript 语言的作用域仅存在于函数范围中。这是必须要牢记的一点，还有一点重要的就是作用域的提升规则。

## 作用域问题

JS 最容易出现混淆的就是作用域的情况。传统的类 C 语言,它们的作用域是 block-level scope，块级作用域， 花括号就是一个作用域。但是对于 JavaScript 而言，它的作用域是 function-level scope，比如 if 条件语句，就不算一个独立的作用域:

```javascript
var x = 1;
console.log(x); // 1
if (true) {
  var x = 2;
  console.log(x); // 2
}
console.log(x); // 2
```

在 JavaScript 中，如果我们需要实现 block-level scope，我们也有一种变通的方式，那就是通过自执行函数创建临时作用域:

```javascript
function foo() {
  var x = 1;
  if (x) {
    (function () {
      var x = 2;
      // some other code
    })();
  }
  // x is still 1.
}
```

## 作用域提升

### 变量被提升

对 JavaScript 解释器而言，所有的函数和变量声明都会被提升到最前面, 并且变量声明永远在前面，赋值在声明过程之后。比如:

```javascript
var x = 10;
function x() {}
console.log(x); // 10
```

实际上被解释为:

```js
var x;
function x() {}
x = 10;
console.log(x); // 10
```

### 函数被提升

函数的声明方式主要由两种：声明式和变量式。

**声明式会自动将声明放在前面并且执行赋值过程。而变量式则是先将声明提升，然后到赋值处再执行赋值。**比如:

```js
function test() {
  foo(); // TypeError "foo is not a function"
  bar(); // "this will run!"
  var foo = function () {
    // function expression assigned to local variable 'foo'
    alert("this won't run!");
  };
  function bar() {
    // function declaration, given the name 'bar'
    alert("this will run!");
  }
}
test();
```

实际上等价于:

```js
function test() {
  var foo;
  var bar;
  bar = function () {
    // function declaration, given the name 'bar'
    alert("this will run!");
  };

  foo(); // TypeError "foo is not a function"
  bar(); // "this will run!"

  foo = function () {
    // function expression assigned to local variable 'foo'
    alert("this won't run!");
  };
}
test();
```

主要注意的地方：带有命名的函数变量式声明，是不会提升到作用域范围内的，比如:

```js
var baz = function spam() {};
baz(); // vaild
spam(); // ReferenceError "spam is not defined"
```

## 实战经验

任何时候，请使用 var 声明变量, 并放置在作用域的顶端.

工具推荐 JSLint 之类，帮助你验证语法的规范。

## 参考资料
