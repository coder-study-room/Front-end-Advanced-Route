---
title: 变量对象
---

> “JavaScript 的基本类型有几种？”

红宝书上解释的五种基本类型：

- number
- string
- boolean
- undefined
- null

但是也有人认为是六种，加上 object, 成为复杂数据类型。

## 基本类型（primitive types）

五种基本类型保存在内存中的栈中,大小固定,复制其变量时会创建这个值的一个副本。使用 typeof 区分。这些值是在底层上直接实现的，他们不是 object，所以没有原型，没有构造函数。

```js
var a = undefined;
var b = null;
var c = true;
var d = "test";
var e = 10;
```

## 引用类型

引用类型的值是对象,保存在堆内存中。引用类型的变量实际上是一个指针,它保存在栈中,指向堆内存中的对象,复制引用类型变量实际是复制该指针,所以他们都指向同一个对象,用 instanceof 确定一个值是哪种引用类型。

## 内置对象、原生对象及宿主对象

内置对象和元素对象是被 ECMAScript 规范定义和实现的，两者之间的差异微不足道。所有 ECMAScript 实现的对象都是原生对象（其中一些是内置对象、一些在程序执行的时候创建，例如用户自定义对象）。内置对象是原生对象的一个子集、是在程序开始之前内置到 ECMAScript 里的（例如，parseInt, Match 等）。所有的宿主对象是由宿主环境提供的，通常是浏览器，并可能包括如 window、alert 等。

注意，宿主对象可能是 ES 自身实现的，完全符合规范的语义。从这点来说，他们能称为“原生宿主”对象（尽快很理论），不过规范没有定义“原生宿主”对象的概念。

## 特殊包装类

- Boolean: 布尔对象
- String: 字符串对象
- Number: 数字对象

这些对象的创建，是通过相应的内置构造器创建，并且包含原生值作为其内部属性，这些对象可以转换省原始值，反之亦然。

```js
var c = new Boolean(true);
var d = new String("test");
var e = new Number(10);

// 转换成原始值
// 使用不带new关键字的函数
с = Boolean(c);
d = String(d);
e = Number(e);

// 重新转换成对象
с = Object(c);
d = Object(d);
e = Object(e);
```

## typeof 返回值

实际应用是用来检测一个对象是否已经定义或者是否已经赋值:

```
Value               Class      Type
-------------------------------------
"foo"               String     string
1.2                 Number     number
true                Boolean    boolean
undefined           Undefined  undefined
new Function("")    Function   function
new String("foo")   String     object
new Number(1.2)     Number     object
new Boolean(true)   Boolean    object
new Date()          Date       object
new Error()         Error      object
[1,2,3]             Array      object
new Array(1, 2, 3)  Array      object
/abc/g              RegExp     object (function in Nitro/V8)
new RegExp("meow")  RegExp     object (function in Nitro/V8)
{}                  Object     object
new Object()        Object     object
```

返回的类型只有六种:

```js
- string
- number
- boolean
- undefined
- object
- function
```

## instanceof 操作符

instanceof 操作符用来比较两个操作数的构造函数。只有在比较自定义的对象时才有意义。如果用来比较内置类型，将会和 typeof 操作符 一样用处不大。

## Object.prototype.toString 获取 [[class]]

检测一个对象的类型，强烈推荐使用 Object.prototype.toString 方法； 因为这是唯一一个可依赖的方式。正如上面表格所示，typeof 的一些返回值在标准文档中并未定义， 因此不同的引擎实现可能不同。 我们使用 Object.prototype.toString 方法:

```js
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call(2); // "[object Number]"
```

## 参考资料

- [JavaScript 秘密花园: 对象](https://bonsaiden.github.io/JavaScript-Garden/zh/#object)
- [深入理解 JavaScript 系列（12）：变量对象（Variable Object）](https://www.cnblogs.com/TomXu/archive/2012/01/16/2309728.html)
