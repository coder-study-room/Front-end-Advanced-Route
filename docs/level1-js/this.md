---
title: 详解this
---

习惯了高级语言的你或许觉得 JavaScript 中的 this 跟 Java 这些面向对象语言相似，保存了实体属性的一些值。其实不然。将它视作幻影魔神比较恰当，手提一个装满未知符文的灵龛。

## 全局 this

浏览器宿主的全局环境中，this 指的是 window 对象。

```js
<script type="text/javascript">console.log(this === window); //true</script>
```

浏览器中在全局环境下，使用 var 声明变量其实就是赋值给 this 或 window。

```js
<script type="text/javascript">
  var foo = "bar"; console.log(this.foo); //logs "bar" console.log(window.foo);
  //logs "bar"
</script>
```

任何情况下，创建变量时没有使用 var 或者 let(ECMAScript 6)，也是在操作全局 this。

```js
<script type="text/javascript">
    foo = "bar";

    function testThis() {
      foo = "foo";
    }

    console.log(this.foo); //logs "bar"
    testThis();
    console.log(this.foo); //logs "foo"
</script>
```

Node 命令行（REPL）中，this 是全局命名空间。可以通过 global 来访问。

```js
> this
{ ArrayBuffer: [Function: ArrayBuffer],
  Int8Array: { [Function: Int8Array] BYTES_PER_ELEMENT: 1 },
  Uint8Array: { [Function: Uint8Array] BYTES_PER_ELEMENT: 1 },
  ...
> global === this
true
```

在 Node 环境里执行的 JS 脚本中，this 其实是个空对象，有别于 global。

```js
console.log(this);
console.log(this === global);

###
$ node test.js
{}
false
```

但在命令行里进行求值却会赋值到 this 身上。

```js
> var foo = "bar";
> this.foo
bar
> global.foo
bar
```

在 Node 里执行的脚本中，创建变量时没带 var 或 let 关键字，会赋值给全局的 global 但不是 this（译注：上面已经提到 this 和 global 不是同一个对象，所以这里就不奇怪了）。

```js
foo = "bar";
console.log(this.foo);
console.log(global.foo);

###
$ node test.js
undefined
bar
```

但在 Node 命令行里，就会赋值给两者了。

** 简单来说，Node 脚本中 global 和 this 是区别对待的，而 Node 命令行中，两者可等效为同一对象。**

## 函数或方法里的 this

除了 DOM 的事件回调或者提供了执行上下文（后面会提到）的情况，函数正常被调用（不带 new）时，里面的 this 指向的是全局作用域。

```js
<script type="text/javascript">
    foo = "bar";

    function testThis() {
      this.foo = "foo";
    }

    console.log(this.foo); //logs "bar"
    testThis();
    console.log(this.foo); //logs "foo"
</script>
```

测试结果：

```js
$ node test.js
bar
foo
```

还有个例外，就是使用了"use strict";。此时 this 是 undefined。

```js
<script type="text/javascript">
    foo = "bar";

    function testThis() {
      "use strict";
      this.foo = "foo";
    }

    console.log(this.foo); //logs "bar"
    testThis();  //Uncaught TypeError: Cannot set property 'foo' of undefined
</script>
```

当用调用函数时使用了 new 关键字，此刻 this 指代一个新的上下文，不再指向全局 this。

```js
<script type="text/javascript">
    foo = "bar";

    function testThis() {
      this.foo = "foo";
    }

    console.log(this.foo); //logs "bar"
    new testThis();
    console.log(this.foo); //logs "bar"

    console.log(new testThis().foo); //logs "foo"
</script>
```

通常我将这个新的上下文称作实例。

## 原型中的 this

函数创建后其实以一个函数对象的形式存在着。既然是对象，则自动获得了一个叫做 prototype 的属性，可以自由地对这个属性进行赋值。当配合 new 关键字来调用一个函数创建实例后，此刻便能直接访问到原型身上的值。

```js
function Thing() {
  console.log(this.foo);
}

Thing.prototype.foo = "bar";

var thing = new Thing(); //logs "bar"
console.log(thing.foo); //logs "bar"
```

当通过 new 的方式创建了多个实例后，他们会共用一个原型。比如，每个实例的 this.foo 都返回相同的值，直到 this.foo 被重写。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  console.log(this.foo);
};
Thing.prototype.setFoo = function (newFoo) {
  this.foo = newFoo;
};

var thing1 = new Thing();
var thing2 = new Thing();

thing1.logFoo(); //logs "bar"
thing2.logFoo(); //logs "bar"

thing1.setFoo("foo");
thing1.logFoo(); //logs "foo";
thing2.logFoo(); //logs "bar";

thing2.foo = "foobar";
thing1.logFoo(); //logs "foo";
thing2.logFoo(); //logs "foobar";
```

在实例中，this 是个特殊的对象，而 this 自身其实只是个关键字。你可以把 this 想象成在实例中获取原型值的一种途径，同时对 this 赋值又会覆盖原型上的值。完全可以将新增的值从原型中删除从而将原型还原为初始状态。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  console.log(this.foo);
};
Thing.prototype.setFoo = function (newFoo) {
  this.foo = newFoo;
};
Thing.prototype.deleteFoo = function () {
  delete this.foo;
};

var thing = new Thing();
thing.setFoo("foo");
thing.logFoo(); //logs "foo";
thing.deleteFoo();
thing.logFoo(); //logs "bar";
thing.foo = "foobar";
thing.logFoo(); //logs "foobar";
delete thing.foo;
thing.logFoo(); //logs "bar";
```

或者不通过实例，直接操作函数的原型。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  console.log(this.foo, Thing.prototype.foo);
};

var thing = new Thing();
thing.foo = "foo";
thing.logFoo(); //logs "foo bar";
```

同一函数创建的所有实例均共享一个原型。如果你给原型赋值了一个数组，那么所有实例都能获取到这个数组。除非你在某个实例中对其进行了重写，实事上是进行了覆盖。

```js
function Thing() {}
Thing.prototype.things = [];

var thing1 = new Thing();
var thing2 = new Thing();
thing1.things.push("foo");
console.log(thing2.things); //logs ["foo"]
```

通常上面的做法是不正确的（译注：改变 thing1 的同时也影响了 thing2）。如果你想每个实例互不影响，那么请在函数里创建这些值，而不是在原型上。

```js
function Thing() {
  this.things = [];
}

var thing1 = new Thing();
var thing2 = new Thing();
thing1.things.push("foo");
console.log(thing1.things); //logs ["foo"]
console.log(thing2.things); //logs []
```

多个函数可以形成原型链，这样 this 便会在原型链上逐步往上找直到找到你想引用的值。

```js
function Thing1() {}
Thing1.prototype.foo = "bar";

function Thing2() {}
Thing2.prototype = new Thing1();

var thing = new Thing2();
console.log(thing.foo); //logs "bar"
```

很多人便是利用这个特性在 JS 中模拟经典的对象继承。**注意原型链底层函数中对 this 的操作会覆盖上层的值。**

```js
function Thing1() {}
Thing1.prototype.foo = "bar";

function Thing2() {
  this.foo = "foo";
}
Thing2.prototype = new Thing1();

function Thing3() {}
Thing3.prototype = new Thing2();

var thing = new Thing3();
console.log(thing.foo); //logs "foo"
```

我习惯将赋值到原型上的函数称作方法。上面某些地方便使用了方法这样的字眼，比如 logFoo 方法。这些方法中的 this 同样具有在原型链上查找引用的魔力。通常将最初用来创建实例的函数称作构造函数。

原型链方法中的 this 是从实例中的 this 开始住上查找整个原型链的。也就是说，如果原型链中某个地方直接对 this 进行赋值覆盖了某个变量，那么我们拿到 的是覆盖后的值。

```js
function Thing1() {}
Thing1.prototype.foo = "bar";
Thing1.prototype.logFoo = function () {
  console.log(this.foo);
};

function Thing2() {
  this.foo = "foo";
}
Thing2.prototype = new Thing1();

var thing = new Thing2();
thing.logFoo(); //logs "foo";
```

在 JavaScript 中，函数可以嵌套函数，也就是你可以在函数里面继续定义函数。但内层函数是通过闭包获取外层函数里定义的变量值的，而不是直接继承 this。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  var info = "attempting to log this.foo:";
  function doIt() {
    console.log(info, this.foo);
  }
  doIt();
};

var thing = new Thing();
thing.logFoo(); //logs "attempting to log this.foo: undefined"
```

上面示例中，doIt 函数中的 this 指代是全局作用域或者是 undefined 如果使用了"use strict";声明的话。对于很多新手来说，理解这点是非常头疼的。

还有更奇葩的。把实例的方法作为参数传递时，实例是不会跟着过去的。也就是说，此时方法中的 this 在调用时指向的是全局 this 或者是 undefined 在声明了"use strict"时。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  console.log(this.foo);
};

function doIt(method) {
  method();
}

var thing = new Thing();
thing.logFoo(); //logs "bar"
doIt(thing.logFoo); //logs undefined
```

所以很多人习惯将 this 缓存起来，用个叫 self 或者其他什么的变量来保存，以将外层与内层的 this 区分开来。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  var self = this;
  var info = "attempting to log this.foo:";
  function doIt() {
    console.log(info, self.foo);
  }
  doIt();
};

var thing = new Thing();
thing.logFoo(); //logs "attempting to log this.foo: bar"
```

但上面的方式不是万能的，在将方法做为参数传递时，就不起作用了。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  var self = this;
  function doIt() {
    console.log(self.foo);
  }
  doIt();
};

function doItIndirectly(method) {
  method();
}

var thing = new Thing();
thing.logFoo(); //logs "bar"
doItIndirectly(thing.logFoo); //logs undefined
```

解决方法就是传递的时候使用 bind 方法显示指明上下文，bind 方法是所有函数或方法都具有的。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  console.log(this.foo);
};

function doIt(method) {
  method();
}

var thing = new Thing();
doIt(thing.logFoo.bind(thing)); //logs bar
```

同时也可以使用 apply 或 call 来调用该方法或函数，让它在一个新的上下文中执行。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  function doIt() {
    console.log(this.foo);
  }
  doIt.apply(this);
};

function doItIndirectly(method) {
  method();
}

var thing = new Thing();
doItIndirectly(thing.logFoo.bind(thing)); //logs bar
```

使用 bind 可以任意改变函数或方法的执行上下文，即使它没有被绑定到一个实例的原型上。

```js
function Thing() {}
Thing.prototype.foo = "bar";

function logFoo(aStr) {
  console.log(aStr, this.foo);
}

var thing = new Thing();
logFoo.bind(thing)("using bind"); //logs "using bind bar"
logFoo.apply(thing, ["using apply"]); //logs "using apply bar"
logFoo.call(thing, "using call"); //logs "using call bar"
logFoo("using nothing"); //logs "using nothing undefined"
```

避免在构造函数中返回作何东西，因为返回的东西可能覆盖本来该返回的实例。

```js
function Thing() {
  return {};
}
Thing.prototype.foo = "bar";

Thing.prototype.logFoo = function () {
  console.log(this.foo);
};

var thing = new Thing();
thing.logFoo(); //Uncaught TypeError: undefined is not a function
```

但，如果你在构造函数里返回的是个原始值比如字符串或者数字什么的，上面的错误就不会发生了，返回语句将被忽略。所以最好别在一个将要通过 new 来调用的构造函数中返回作何东西，即使你是清醒的。如果你想实现工厂模式，那么请用一个函数来创建实例，并且不通过 new 来调用。当然这只是个人建议。

诚然，你也可以使用 Object.create 从而避免使用 new。这样也能创建一个实例。

```js
function Thing() {}
Thing.prototype.foo = "bar";

Thing.prototype.logFoo = function () {
  console.log(this.foo);
};

var thing = Object.create(Thing.prototype);
thing.logFoo(); //logs "bar"
```

这种方式不会调用该构造函数。

```js
function Thing() {
  this.foo = "foo";
}
Thing.prototype.foo = "bar";

Thing.prototype.logFoo = function () {
  console.log(this.foo);
};

var thing = Object.create(Thing.prototype);
thing.logFoo(); //logs "bar"
```

正因为 Object.create 没有调用构造函数，这在当你想实现一个继承时是非常有用的，随后你可能想要重写构造函数。

```js
function Thing1() {
  this.foo = "foo";
}
Thing1.prototype.foo = "bar";

function Thing2() {
  this.logFoo(); //logs "bar"
  Thing1.apply(this);
  this.logFoo(); //logs "foo"
}
Thing2.prototype = Object.create(Thing1.prototype);
Thing2.prototype.logFoo = function () {
  console.log(this.foo);
};

var thing = new Thing2();
```

## 对象中的 this

可以在对象的任何方法中使用 this 来访问该对象的属性。这与用 new 得到的实例是不一样的。

```js
var obj = {
  foo: "bar",
  logFoo: function () {
    console.log(this.foo);
  },
};

obj.logFoo(); //logs "bar"
```

注意这里并没有使用 new，也没有用 Object.create，更没有函数的调用来创建对象。也可以将函数绑定到对象，就好像这个对象是一个实例一样。

```js
var obj = {
  foo: "bar",
};

function logFoo() {
  console.log(this.foo);
}

logFoo.apply(obj); //logs "bar"
```

此时使用 this 没有向上查找原型链的复杂工序。通过 this 所拿到的只是该对象身上的属性而以。

```js
var obj = {
  foo: "bar",
  deeper: {
    logFoo: function () {
      console.log(this.foo);
    },
  },
};

obj.deeper.logFoo(); //logs undefined
```

也可以不通过 this，直接访问对象的属性。

```js
var obj = {
  foo: "bar",
  deeper: {
    logFoo: function () {
      console.log(obj.foo);
    },
  },
};

obj.deeper.logFoo(); //logs "bar"
```

## DOM 事件回调中的 this

在 DOM 事件的处理函数中，this 指代的是被绑定该事件的 DOM 元素。

```js
function Listener() {
  document.getElementById("foo").addEventListener("click", this.handleClick);
}
Listener.prototype.handleClick = function (event) {
  console.log(this); //logs "<div id="foo"></div>"
};

var listener = new Listener();
document.getElementById("foo").click();
```

除非你通过 bind 人为改变了事件处理器的执行上下文。

```js
function Listener() {
  document
    .getElementById("foo")
    .addEventListener("click", this.handleClick.bind(this));
}
Listener.prototype.handleClick = function (event) {
  console.log(this); //logs Listener {handleClick: function}
};

var listener = new Listener();
document.getElementById("foo").click();
```

## HTML 中的 this

HTML 标签的属性中是可能写 JS 的，这种情况下 this 指代该 HTML 元素。

```js
<div id="foo" onclick="console.log(this);"></div>
<script type="text/javascript">
document.getElementById("foo").click(); //logs <div id="foo"...
</script>
```

## 重写 this

无法重写 this，因为它是一个关键字。

```js
function test() {
  var this = {}; // Uncaught SyntaxError: Unexpected token this
}
```

## eval 中的 this

eval 中也可以正确获取当前的 this。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  eval("console.log(this.foo)"); //logs "bar"
};

var thing = new Thing();
thing.logFoo();
```

这里存在安全隐患。最好的办法就是避免使用 eval。

使用 Function 关键字创建的函数也可以获取 this：

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = new Function("console.log(this.foo);");

var thing = new Thing();
thing.logFoo(); //logs "bar"
```

## 使用 with 时的 this

使用 with 可以将 this 人为添加到当前执行环境中而不需要显示地引用 this。

```js
function Thing() {}
Thing.prototype.foo = "bar";
Thing.prototype.logFoo = function () {
  with (this) {
    console.log(foo);
    foo = "foo";
  }
};

var thing = new Thing();
thing.logFoo(); // logs "bar"
console.log(thing.foo); // logs "foo"
```

正如很多人认为的那样，使用 with 是不好的，因为会产生歧义。

## jQuery 中的 this

一如 HTML DOM 元素的事件回调，jQuery 库中大多地方的 this 也是指代的 DOM 元素。页面上的事件回调和一些便利的静态方法比如$.each 都是这样的。

```js
<div class="foo bar1"></div>
<div class="foo bar2"></div>
<script type="text/javascript">
$(".foo").each(function () {
    console.log(this); //logs <div class="foo...
});
$(".foo").on("click", function () {
    console.log(this); //logs <div class="foo...
});
$(".foo").each(function () {
    this.click();
});
</script>
```

## 传递 this

如果你用过 underscore.js 或者 lo-dash 你便知道，这两个库中很多方法你可以传递一个参数来显示指定执行的上下文。比如\_.each。自 ECMAScript 5 标准后，一些原生的 JS 方法也允许传递上下文，比如 forEach。事实上，上文提到的 bind，apply 还有 call 已经给我们手动指定函数执行上下文的能力了。

```js
function Thing(type) {
  this.type = type;
}
Thing.prototype.log = function (thing) {
  console.log(this.type, thing);
};
Thing.prototype.logThings = function (arr) {
  arr.forEach(this.log, this); // logs "fruit apples..."
  _.each(arr, this.log, this); //logs "fruit apples..."
};

var thing = new Thing("fruit");
thing.logThings(["apples", "oranges", "strawberries", "bananas"]);
```

这样可以使得代码简洁些，不用层层嵌套 bind，也不用不断地缓存 this。

一些编程语言上手很简单，比如 Go 语言手册可以被快速读完。然后你差不多就掌握这门语言了，只是在实战时会有些小的问题或陷阱在等着你。

而 JavaScript 不是这样的。手册难读。非常多缺陷在里面，以至于人们抽离出了它好的部分（The Good Parts）。最好的文档可能是 MDN 上的了。所以我建议你看看他上面关于 this 的介绍，并且始终在搜索 JS 相关问题时加上"mdn" 来获得最好的文档资料。静态代码检查也是个不错的工具，比如 jshint。

## 参考资料

- [详解 this](https://www.cnblogs.com/Wayou/p/all-this.html)
