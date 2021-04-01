---
title: JSON对象
---

> JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write.

JSON 只是一个数据交换语言，只有我们将之用在 string 上下文的时候它才叫 JSON。

## 什么是 JSON

我们通常误以为 JavaScript 里面的对象字面值是 JSON。它只不过是“形似”而已。实际上只有当这样的字面值是字符串的时候，才是 JSON 对象。比如：

```js
// 这是JSON字符串
var foo = '{ "prop": "val" }';

// 这是对象字面量
var bar = { prop: "val" };
```

而且要注意，JSON 有非常严格的语法，在 string 上下文里{ "prop": "val" } 是个合法的 JSON，但{ prop: "val" }和{ 'prop': 'val' }确实不合法的。所有属性名称和它的值都必须用双引号引住，不能使用单引号。另外，即便你用了转义以后的单引号也是不合法的。

## 序列化与反序列化

2 个程序（或服务器、语言等）需要交互通信的时候，他们倾向于使用 string 字符串因为 string 在很多语言里解析的方式都差不多。所以在 JavaScript 里面，也提供了一个 JSON 对象，目前有 2 个静态方法:

- JSON.parse: 用来将 JSON 字符串反序列化成对象
- JSON.stringify:用来将对象序列化成 JSON 字符串

## 参考资料

- [深入理解 JavaScript 系列（9）：根本没有“JSON 对象”这回事！](https://www.cnblogs.com/TomXu/archive/2012/01/11/2311956.html)
