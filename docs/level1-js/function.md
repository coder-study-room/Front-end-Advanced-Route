---
title: 关于函数
---

理解函数的几种声明方式，以及其中的差异。

## 声明方式

ECMA 规范只明确了一点：函数声明必须带有标示符（Identifier）（就是大家常说的函数名称），而函数表达式则可以省略这个标示符。规则如下：

> 函数声明只能出现在程序或函数体内。从句法上讲，它们 不能出现在 Block（块）（{ ... }）中，例如不能出现在 if、while 或 for 语句中。因为 Block（块） 中只能包含 Statement 语句， 而不能包含函数声明这样的源元素。另一方面，仔细看一看规则也会发现，唯一可能让表达式出现在 Block（块）中情形，就是让它作为表达式语句的一部分。但是，规范明确规定了表达式语句不能以关键字 function 开头。而这实际上就是说，函数表达式同样也不能出现在 Statement 语句或 Block（块）中（因为 Block（块）就是由 Statement 语句构成的）。

## 函数声明

如果 function foo(){}被包含在一个函数体内，或者位于程序的最顶部的话，那它就是一个函数声明。

```js
function foo() {} // 声明，因为它是程序的一部分

(function () {
  function bar() {} // 声明，因为它是函数体的一部分
})();
```

函数的声明方式会得到提升，且如果有相同的函数，会覆盖。比如:

```js
if (true) {
  function foo() {
    return 1;
  }
} else {
  function foo() {
    return 2;
  }
}
foo(); // 1

// 在ECMAScript的语法扩展中，有一个是函数语句, Gecko内核下可以使用,返回1
// 其他浏览器下，返回2
```

## 函数表达式

如果 function foo(){}是作为赋值表达式的一部分的话，那它就是一个函数表达式。

还有一种函数表达式不太常见，就是**被括号括住的(function foo(){})**，他是表达式的原因是因为括号 ()是一个分组操作符，它的内部只能包含表达式。你可以会想到，在使用 eval 对 JSON 进行执行的时候，JSON 字符串通常被包含在一个圆括号里：eval('(' + json + ')')，这样做的原因就是因为分组操作符，也就是这对括号，会让解析器强制将 JSON 的花括号解析成表达式而不是代码块。

```js
var bar = function foo() {}; // 表达式，因为它是赋值表达式的一部分
new (function bar() {})(); // 表达式，因为它是new表达式
(function foo() {}); // 函数表达式：包含在分组操作符内
```

## 区别

- 函数声明会在任何表达式被解析和求值之前先被解析和求值，即使你的声明在代码的最后一行，它也会在同作用域内第一个表达式之前被解析/求值
- 函数声明在条件语句内虽然可以用，但是没有被标准化，也就是说不同的环境可能有不同的执行结果，所以这样情况下，最好使用函数表达式

## 命名函数表达式

在 web 开发中有个常用的模式是**基于对某种特性的测试来伪装函数定义**，从而达到性能优化的目的，但由于这种方式都是在同一作用域内，所以基本上一定要用函数表达式：

```js
// 该代码来自Garrett Smith的APE Javascript library库(http://dhtmlkitchen.com/ape/)
var contains = (function () {
  var docEl = document.documentElement;

  if (typeof docEl.compareDocumentPosition != "undefined") {
    return function (el, b) {
      return (el.compareDocumentPosition(b) & 16) !== 0;
    };
  } else if (typeof docEl.contains != "undefined") {
    return function (el, b) {
      return el !== b && el.contains(b);
    };
  }
  return function (el, b) {
    if (el === b) return false;
    while (el != b && (b = b.parentNode) != null);
    return el === b;
  };
})();
```

一点需要记住：这个名字只在新定义的函数作用域内有效，因为规范规定了标示符不能在外围的作用域内有效：

```js
var f = function foo() {
  return typeof foo; // foo是在内部作用域内有效
};
// foo在外部用于是不可见的
typeof foo; // "undefined"
f(); // "function"
```

命名函数表达式的作用：给它一个名字就是可以让调试过程更方便，因为在调试的时候，如果在调用栈中的每个项都有自己的名字来描述，那么调试过程就太爽了，感受不一样嘛。特别是在匿名函数的时候比较有效。

## 函数的内存管理

如果我们的代码中返回多个闭包的情况，如果没有手动设置 null 的话，内存不会被自动释放。

## 参考资料

- [在 JavaScript 的 Array 数组中调用一组 Function 方法](http://ourjs.com/detail/548925908a34fa3204000002)
- [深入理解 JavaScript 系列（2）：揭秘命名函数表达式](https://www.cnblogs.com/TomXu/archive/2011/12/29/2290308.html)
