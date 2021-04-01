---
title: 封装
---

如果我们要把"属性"（property）和"方法"（method），封装成一个对象，甚至要从原型对象生成一个实例对象，我们就需要对对象进行封装。

## 使用构造函数

构造函数内部使用了 this 变量。对构造函数使用 new 运算符，就能生成实例，并且 this 变量会绑定在实例对象上。

```js
function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var cat1 = new Cat("大毛", "黄色");
var cat2 = new Cat("二毛", "黑色");
alert(cat1.name); // 大毛
alert(cat1.color); // 黄色
```

这时 cat1 和 cat2 会自动含有一个 constructor 属性，指向它们的构造函数, 也就是 Cat。

## 使用原型优化构造函数

如果所有的属性和方法都添加到构造函数中，那么必然会造成内存浪费。所以对于一些公共的内容，我们会选择在内存中只生产一次，那么久需要使用 prototype，**Javascript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承**。

```js
function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.type = "猫科动物";
Cat.prototype.eat = function () {
  alert("吃老鼠");
};

var cat1 = new Cat("大毛", "黄色");
var cat2 = new Cat("二毛", "黑色");
alert(cat1.type); // 猫科动物
cat1.eat(); // 吃老鼠
```

## 验证原型方法

### isPrototypeOf()

原型对象上有一个方法，判断某个 proptotype 对象和某个实例之间的关系。

```js
alert(Cat.prototype.isPrototypeOf(cat1)); //true
alert(Cat.prototype.isPrototypeOf(cat2)); //true
```

### hasOwnPrototype()

每个实例对象都有一个 hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自 prototype 对象的属性。

```js
alert(cat1.hasOwnProperty("name")); // true
alert(cat1.hasOwnProperty("type")); // false
```

## in 运算符

in 运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。

```js
alert("name" in cat1); // true
alert("type" in cat1); // true
```

in 运算符还可以用来遍历某个对象的所有属性。

```js
for (var prop in cat1) {
  alert("cat1[" + prop + "]=" + cat1[prop]);
}
```

## 参考资料

- [Javascript 面向对象编程（一）：封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
- [ECMAScript 定义类或对象](https://www.w3school.com.cn/js/pro_js_object_defining.asp)
