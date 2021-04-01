---
title: 原型继承
---

JavaScript 不是真正意义上的面向对象语言，没有提供传统的继承方式,它提供的是一种叫做原型继承的方式。但是它拥有面向对象和函数式的编程特点,理解原型继承，对我们使用 JS 来实现面向对象很有帮助。

## 原型

在 Javascript 中，每个函数都有一个原型属性 prototype 指向函数自身的原型，而由这个函数创建的对象也有一个**proto**属性指向这个原型，而函数的原型是一个对象，所以这个对象也会有一个**proto**指向自己的原型，这样逐层深入直到 Object 对象的原型(null)，这样就形成了原型链。

结合一下图，认真思考下:

![](https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210401132509.png)

理解几点:

- prototype: 在函数身上，指向原型对象
- **proto**: 在对象身上（包括函数创建的对象, 函数本身和原型对象），指向自身的原型
- constructor: 在原型对象上，指向构造函数, 在多级继承的时候，指明构造函数方便在对象上扩展原型属性
- Object.**protp**为 null: 原型的顶端

## 原型使用方式

### 方式一

通过给 Calculator 对象的 prototype 属性赋值对象字面量来设定 Calculator 对象的原型。

```js
var Calculator = function (decimalDigits, tax) {
  this.decimalDigits = decimalDigits;
  this.tax = tax;
};
Calculator.prototype = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },
};
//alert((new Calculator()).add(1, 3));
```

### 方式二

赋值原型 prototype 的时候使用 function 立即执行的表达式来赋值，即如下格式:`Calculator.prototype = function () { } ()`;, 可以封装私有的 function，通过 return 的形式暴露出简单的使用名称，以达到 public/private 的效果。

```js
Calculator.prototype = (function () {
  (add = function (x, y) {
    return x + y;
  }),
    (subtract = function (x, y) {
      return x - y;
    });
  return {
    add: add,
    subtract: subtract,
  };
})();

//alert((new Calculator()).add(11, 3));
```

### 方式三

分别设置原型对象:

```js
var Calculator = function (decimalDigits, tax) {
  this.decimalDigits = decimalDigits;
  this.tax = tax;
};
Calculator.prototype.add = function (x, y) {
  return x + y;
};

Calculator.prototype.subtract = function (x, y) {
  return x - y;
};
```

## 原型的作用

最主要的一点是数据共享，创建对象的时候，我们会把公共的方法和属性挂载到原型上，避免资源浪费。

## 原型链

原型对象也有自己的原型，直到对象的原型为 null 为止（也就是没有原型）。这种一级一级的链结构就称为原型链。原型继承的模型就是 JavaScript 实现继承的原理。**真正形成原型链的是每个对象的**proto**属性，而不是函数的 prototype 属性，这是很重要的。**

```js
function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {}
};

function Bar() {}

// 设置Bar的prototype属性为Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// 修正Bar.prototype.constructor为Bar本身
Bar.prototype.constructor = Bar;

var test = new Bar() // 创建Bar的一个新实例

// 原型链
test [Bar的实例]
    Bar.prototype [Foo的实例]
        { foo: 'Hello World' }
        Foo.prototype
            {method: ...};
            Object.prototype
                {toString: ... /* etc. */};
```

上面的例子中，test 对象从 Bar.prototype 和 Foo.prototype 继承下来；因此， 它能访问 Foo 的原型方法 method。同时，它也能够访问那个定义在原型上的 Foo 实例属性 value。 需要注意的是 new Bar() 不会创造出一个新的 Foo 实例，而是 重复使用它原型上的那个实例；因此，所有的 Bar 实例都会共享相同的 value 属性。

## 原型链使用方式

通常情况下，我们在实现继承的时候，会将一个函数的原型指向另一个函数的实例对象，而不是函数的原型本身。因为这将会导致两个对象共享相同的原型。 因此，改变任意一个对象的原型都会影响到另一个对象的原型，在大多数情况下这不是希望的结果。

也不要使用 Bar.prototype = Foo，因为这不会执行 Foo 的原型，而是指向函数 Foo。 因此原型链将会回溯到 Function.prototype 而不是 Foo.prototype，因此 method 将不会在 Bar 的原型链上。

## 重写原型方法

在使用第三方JS类库的时候，往往有时候他们定义的原型方法是不能满足我们的需要，但是又离不开这个类库，所以这时候我们就需要重写他们的原型中的一个或者多个属性或function，我们可以通过继续声明的同样的add代码的形式来达到覆盖重写前面的add功能，代码如下：

```js
Calculator.prototype.add = function (x, y) {
    return x + y + this.tax;
};
```

原理就是让在原型链上的查找能够就近解决。需要注意的是重写的代码需要放在最后，这样才能覆盖前面的代码。

## 属性查找

当查找一个对象的属性时，JavaScript 会向上遍历原型链，直到找到给定名称的属性为止。

到查找到达原型链的顶部, 也就是 Object.prototype, （因为Object的原型的__proto__是null） 但是仍然没有找到指定的属性，就会返回 undefined。

## hasOwnProperty函数

为了判断一个对象是否包含自定义属性而不是原型链上的属性， 我们需要使用继承自 Object.prototype 的 hasOwnProperty方法。它是 JavaScript 中唯一一个处理属性但是不查找原型链的函数。

在使用for...in遍历属性的时候，可以方便过滤是否是自身属性。

## 原型继承与类继承的区别

| 基于类的继承 | 原型继承 |
| -- | -- |
| 类是不可变的。在运行时，你无法修改或者添加新的方法 |	原型是灵活的。它们可以是不可变的也可以是可变的 |
| 类可能会不支持多重继承 |	对象可以继承多个原型对象 |
| 基于类的继承比较复杂。你需要使用抽象类，接口和final类等等	| 原型继承比较简洁。你只有对象，你只需要对对象进行扩展就可以了|

## 创建方式

### new 运算符是如何工作的

造物者 Brendan Eich 想让JS和传统的面向对象的编程语言差不太多，如Java和C++。在这些语言里，我们采用 new 运算符来给类实例化一个新的对象。所以他在JS里写了一个 new 运算符:

- C++里有用来初始化实例属性的构造函数概念，因此 new 运算符必须针对函数。
- 我们需要将对象的方法放到一个地方去，既然我们在用原型语言，我们就把它放到函数的原型属性中去。

new 运算符接受一个函数 F 及其参数：new F(arguments...)。这一过程分为三步：

1. 创建类的实例。这步是把一个空的对象的 proto 属性设置为 F.prototype 。
2. 初始化实例。函数 F 被传入参数并调用，关键字 this 被设定为该实例。
3. 返回实例。

** 注意构造函数中的this关键字，它就代表了新创建的实例对象。**

看个实例:

```js
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype = {
    print: function () { console.log(this.x, this.y); }
};

var p1 = new Point(10, 20);
p1.print(); // 10 20
console.log(p1 instanceof Point); // true

var p2 = New (Point)(10, 20);
p2.print(); // 10 20
console.log(p2 instanceof Point); // true
```

## 构造模式和原型模式对比

| 构造模式 | 原型模式 |
| -- | -- |
| 函数式特点无法与new关键字一起使用 |	函数式特点可以与create结合使用 |
| 忘记使用new会导致无法预期的bug并且会污染全局变量 |	由于create是一个函数，所以程序总是会按照预期工作 |
| 使用构造函数的原型继承比较复杂并且混乱 |	使用原型的原型继承简洁易懂 |

## 参考资料

- [MDN: 继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [【翻译】JavaScript原型继承工作原理](https://www.ituring.com.cn/article/56184)
- [Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
- [深入理解JavaScript系列（5）：强大的原型和原型链](https://www.cnblogs.com/TomXu/archive/2012/01/05/2305453.html)
- [JS秘密花园: 原型](http://bonsaiden.github.io/JavaScript-Garden/zh/#object.prototype)
- [Javascript 原型拓扑](https://blog.mutoo.im/2015/01/topology-of-javascript-prototype/)