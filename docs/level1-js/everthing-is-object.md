---
title: 在JavaScript中一切都是对象吗？
---

“在 JavaScript 中的一切都是对象”这个说法一直让我困惑。他们指的是什么？一个函数或者数组，它们怎么同时也是一个对象？在我们解答这个问题前，我们需要知道 JavaScript 是如何对不同数据类型归类的。

## 数据类型

在 JavaScript 中，有两个数据类型：基本类型和对象类型（对象类型有时候也被称为引用类型）。

### 基本类型

Number, String, Boolean, null, undefined

### 对象类型

Function, Object, Array

根据这个分类，这个问题的简单答案是：JavaScript 中，并非一切值都是对象。是只有属于对象类型的值才是对象。也可以认为，任何非基本类型的都是对象类型。但是基本类型和对象类型有什么区别呢？更重要的是，人们所说的“所有”或“几乎所有”的 JavaScript 类似都是对象的真正含义是什么？这里说说主要的两个区别：可变性和比较。

## Mutability 可变性

根据我的经验，人们说的值是“类似对象”的真实含义是因为他们的可变性，更具体的说，是支持添加和删除属性。例如，因为函数和数组属于对象类型，你可以像对象一样给它们添加属性。

```js
var func = function () {};
func.firstName = "Andrew";
func.firstName; // "Andrew"

var arry = [];
arry.age = 26;
arry.age; // 26
```

可变性开启了各种精彩的使用方式，也是理解原型和构造函数是如何工作的关键。

但是基本类型是不可变的，我们无法给它们添加属性。如下面代码所示，即使我们给基本类型添加了属性，解析器会无法在下一步读取它们的值。

```js
var me = "Andrew";
me.lastname = "Robbins";
me.lastname; // undefined

var num = 10;
num.prop = 11;
num.prop; // undefined
```

在这一点上，基本类型的值无法改变的真正含义，需要在更基本的层面检查问题，如下代码所示:

```js
1 = 2; // ReferenceError
```

这似乎是一个愚蠢的例子，但是我认为能反映出我们现在讨论的可变性，当你在 JavaScript 控制器中输入数字 1，编译器会给其分配基本类型，所以当你尝试将数字 1 改变成数字 2 会失败。

## 比较和传递

除了可变性，另外一个基本类型和对象类型重要的区别是他们在程序中比较和传递的方式。基本类型通过值来比较，而对象类型通过引用来比较，这是什么意思呢？我们先看看基本类型，如下代码所示：

```js
"a" === "a"; // true
```

因为值“a”等于“a”所以为 true，当我们在图中引入变量会发生什么呢？除了将一个基本类型储存在变量中什么也没发生。

```js
var a = "a",
  b = "a";

a === b; // true
```

当基本类型通过值来比较，结果为 true，变量 a 的值正好等于变量 b 的值，换句话说，”a”等于”a”。但是看看下面这个例子，如果我们在对象类型中应用相同的例子，我们会得到相反的结果。

```js
var a = { name: "andrew" },
  b = { name: "andrew" };

a === b; // false
```

为什么会这样呢？如果想要两者比较为真需要对象类型要引用同样的类型。通过以上的例子，我们给变量 b 创建一个新的对象。就像 David Flanagan 说过：**我们说的通过引用进行对象比较是:两个对象的值是否相同取决于它们是否指向相同的底层对象。**

那我们这样传值会发生什么？

```js
var a = { name: "andrew" },
  b = a;

b.name = "robbins";

a === b; // true
```

这个可能开始看上去很奇怪，但是仔细看看发生了什么，因为对象是对象类型的一部分，它比较的值是按引用进行传递。引用的是相同的底层对象。在以上的例子中，我们设置 b 等于 a。并没有创建新对象，我们只是简单地创建了一个对其他对象的引用。从另一个方面来看我们是将变量 b 指向 a，所以当我们改变 b 的 name 属性，我们同样改变了 a 的 name 属性。

如果将相同的例子应用在基本类型上呢？

```js
var a = "Andrew",
  b = a;

b = "Robbins";

a === b; // false
```

当我们设置 b 等于 a，请记住基本类型通过值来传递和比较，我们实际上另外创建了一个 a 的拷贝，所以我们改变 b 的值再跟 a 比较，两个值是不一样的。

## Wrapper Objects 包装对象

有些人会说：“好，如果基本类型不是对象，为什么我们可以调用他们的方法呢” 回答是包装对象。

当你尝试调用基本类型的方法，JavaScript 在幕后做了一个巧妙的处理，将你的基本类型的值转换成临时对象用于构造函数，决定使用哪个构造函数取决于你尝试改变的基本类型的值，在 String 中调用.length 会使用 string()构造函数临时将基本类型转变成对象—允许你使用 length 方法而改变它，这个临时对象被称为包装对象。

有趣的是，null 和 undefined 这两个基本类型不能调用这样的方法，否则会提示类型错误。

我们可以使用 typeof 来区分：

```js
typeof "s"; // "string"
typeof new String(s); // "object"
```

**备注：**在执行 typeof null 时 js 编译器会返回 object，是显而易见的 bug。

```js
typeof null; // "object"
```

当然，考虑到 JavaScript 是用 10 天写出来的，就不过多去担忧了。

此外，我们也需要了解基本类型的属性是只读和临时的。

```js
var hello = "hello";
hello.slice(1); // "ello" (Here we're actually calling slice not on hello, but of a copy of hello)
hello; // "hello"
```

## Summary 总结

JavaScript 的值可以分为两种类型：基本类型和对象类型，基本类型有：String, Number, Boolean, Symbol, undefined 和 null.，对象类型有 Function, Object 和 Array.

基本类型和对象类型的区别在于可变性和比较的方式以及程序中传值。

基本类型是不可变的，换种说法就是它们的值不能改变。对比而言，对象类型是可变的，它们的值可以更新和改变。

基本类型可以按值比较，当我们把一个基本类型赋值给另外一个基本类型，是复制了一个值。而对象这是通过引用进行比较，引用的是什么呢？引用的是底层对象。当我们赋值一个对象给另一个对象时。引用指针就创建了。在这个情况下，改变一个对象的值将更新另外一个对象的值。

当我们尝试在基本类型的值中调用方法时，JavaScript 使用包装对象来临时控制基本类型，导致对象变为只读的并在垃圾回收后执行。

## 参考资料
