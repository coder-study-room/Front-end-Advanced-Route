---
title: undefined与null的区别
---

在常见的强类型语言中，通常有一个表示“空”的值，比如 NULL。但是在 Javascript 中，空（或者叫“无值”）有两种选择：undefined 和 null。在 Javascript 中除了这两个值其他都是对象。其他的基本类型都有其对象的包装类型。但是，typeof null 返回的是 object，这是一个一直未修复的 bug。

## 相似之处

都是完全不可变的，没有属性和方法，也不能给其属性赋值。事实上,试图访问或定义一个属性将会引发一个类型错误（TypeError）。正如他们的名字暗示的那样，他们是完全无效的值。

## 不同之处

一个重要的区别，服务于不同的目的和理由。区分这两个值，你可以认为 undefined 代表一个意想不到的没有值而 null 作为预期没有值的代表。

使用 Object.prototype.toString.call()形式可以具体打印类型。

## undefined

undefined 实际上代表了不存在的值（non-existence of a value）。

有许多的方法产生一个 undefined 值的代码。它通常遇到当试图访问一个不存在的值时。在这种情况下，在 JavaScript 这种动态的弱类型语言中，只会默认返回一个 undefined 值，而不是上升为一个错误:

- 任何声明变量时没有提供一个初始值，都会有一个为 undefined 的默认值
- 当试图访问一个不存在的对象属性或数组项时，返回一个 undefined 值
- 如果省略了函数的返回语句,返回 undefined
- 函数调用时未提供的值结果将为 undefined 参数值
- void 操作符也可以返回一个 undefined 值。像 Underscore 的库使用它作为一个防御式的类型检查，因为它是不可变的，可以在任何上下文依赖返回 undefined
- undefined 是一个预定义的全局变量(不像 null 关键字)初始化为 undefined 值

## null

通常用作一个空引用一个空对象的预期,就像一个占位符。typeof 的这种行为已经被确认为一个错误，虽然提出了修正，出于后兼容的目的，这一点已经保持不变。 这就是为什么 JavaScript 环境从来没有设置一个值为 null；它必须以编程方式完成。

使用 null 的情况:

- DOM，它是独立于语言的，不属于 ECMAScript 规范的范围。因为它是一个外部 API，试图获取一个不存在的元素返回一个 null 值，而不是 undefined。
- 如果你需要给一个变量或属性指定一个不变值，将它传递给一个函数，或者从一个函数返回 null，null 几乎总是最好的选择。
- JavaScript 使用 undefined 并且程序员应该使用 null。
- 通过分配 null 值，有效地清除引用，并假设对象没有引用其他代码，指定垃圾收集，确保回收内存。

## Object.prototype.toString 调用过程

- 如果值是 undefined，返回 `“[object Undefined]”`。
- 如果这个值为 null，则返回 `“[object Null]”`。

## 参考资料

- [探索 JavaScript 中 Null 和 Undefined 的深渊](https://yanhaijing.com/javascript/2014/01/05/exploring-the-abyss-of-null-and-undefined-in-javascript/)
