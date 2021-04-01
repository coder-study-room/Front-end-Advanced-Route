---
title: 闭包
---

闭包（closure）是Javascript语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。

## 概念

首先了解一个JavaScript变量的作用域, 无非就是两种：全局变量和局部变量。Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。另一方面，在函数外部自然无法读取函数内的局部变量。但是通过闭包，可以在函数外面访问到内部的变量！比如:

```js
function f1(){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n); // 999
　　　　}
　　}
```

函数f2就被包括在函数f1内部，这时f1内部的所有局部变量，对f2都是可见的。但是反过来就不行，f2内部的局部变量，对f1就是不可见的。这就是Javascript语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

所以，我们说的闭包，就是能够在外部访问函数内部的函数。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

## 用途

闭包允许将函数与其所操作的某些数据（环境）关连起来。这显然类似于面向对象编程。在面对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。因而，一般说来，可以使用只有一个方法的对象的地方，都可以使用闭包。

## 读取函数内部的变量

比如上面的例子

## 使变量的值始终保持在内存中

```js
function f1(){
　　　　var n=999;

　　　　function f2(){
　　　　　　alert(n++);
　　　　}
　　　　return f2;
　　}
　　var result=f1();
　　result(); // 999
　　nAdd();
　　result(); // 1000
```

这里我们在外部调用result函数，可以不断怎家内部的n值，实际上函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。

**原因:** f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。

## 用闭包模拟私有方法

JavaScript 并不提供原生的支持，但是可以使用闭包模拟私有方法。私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。

下面的示例展现了如何使用闭包来定义公共函数，且其可以访问私有函数和变量。这个方式也称为 模块模式（module pattern）：

```js
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();

alert(Counter.value()); /* 提示 0 */
Counter.increment();
Counter.increment();
alert(Counter.value()); /* 提示 2 */
Counter.decrement();
alert(Counter.value()); /* 提示 1 */
```

## 在循环中创建闭包

当我们为一组对象进行操作的时候，比如注册事件，如果我们这样写:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}
function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}
setupHelp();
```

运行这段代码后，您会发现它没有达到想要的效果。无论焦点在哪个输入域上，显示的都是关于年龄的消息。该问题的原因在于在 onfocus 的回调被执行时，循环早已经完成，且此时 item 变量已经指向了 helpText 列表中的最后一项。

修改如下:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

## 使用闭包的注意点

- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
- 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

## 参考资料

- [JavaScript 权威指南(6): 闭包](http://www.html-js.com/article/Lan-Xiang-The-Definitive-Guide-to-product-JavaScript-JavaScript-6-The-Definitive-Guide-to-closure)
- [阮一峰: 学习Javascript闭包（Closure）](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)
- [深入理解JavaScript系列（16）：闭包（Closures）](https://www.cnblogs.com/TomXu/archive/2012/01/31/2330252.html)