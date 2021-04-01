---
title: Promise
---

Promise/Deferred 模型, 是一种异步编程的模式。其他的异步编程的模式，还有 async 来控制, 叫做流程控制。

现今流行的各大 js 库，几乎都不同程度的实现了 Promise，如 dojo，jQuery、Zepto、when.js、Q 等，只是暴露出来的大都是 Deferred 对象。

## Callback Hell

```js
var fs = require("fs");
fs.readFile("sample01.txt", "utf8", function (err, data) {
  fs.readFile("sample02.txt", "utf8", function (err, data) {
    fs.readFile("sample03.txt", "utf8", function (err, data) {
      fs.readFile("sample04.txt", "utf8", function (err, data) {});
    });
  });
});
```

这样的嵌套就是令人憎恶的 callback hell。

## Promise/A+规范

- 一个 promise 可能有三种状态：等待（pending）、已完成（fulfilled）、已拒绝（rejected）
- 一个 promise 的状态只可能从“等待”转到“完成”态或者“拒绝”态，不能逆向转换，同时“完成”态和“拒绝”态不能相互转换
- promise 必须实现 then 方法（可以说，then 就是 promise 的核心），而且 then 必须返回一个 promise，同一个 promise 的 then 可以调用多次，并且回调的执行顺序跟它们被定义时的顺序一致
- then 方法接受两个参数，第一个参数是成功时的回调，在 promise 由“等待”态转换到“完成”态时调用，另一个是失败时的回调，在 promise 由“等待”态转换到“拒绝”态时调用。同时，then 可以接受另一个 promise 传入，也接受一个“类 then”的对象或方法，即 thenable 对象。

## 参考资料

- [JavaScript Promise 迷你书](http://liubin.org/promises-book/)
- [JavaScript Promise 启示录](http://www.alloyteam.com/2014/05/javascript-promise-mode/)
- [《使用 promise 替代回调函数》](https://github.com/alsotang/node-lessons/tree/master/lesson17)
- [[翻译] We have a problem with promises](http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/)
