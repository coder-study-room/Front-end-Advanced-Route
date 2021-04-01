---
title: callback问题
---

js 编程遇到的最大问题就是单线程异步问题，这里面涉及最多的肯定就是 callback 了，不能处理好 callback 问题，常常会出现大量的嵌套情况，就是著名的 callback hell 了。

ES6 中会引入一个新的规范，叫做 Promise。这可以规范我们使用异步的情况。

## releasing Zalgo

What it means is a function that accepts a callback and sometimes returns it right away, and some other times it returns it after some delay, in the future.

就是我们的代码之中的 callback,可能 sync，也可能 async 触发，比如：

```js
function register(options, callback) {
  var first_name = (options["first_name"] || "").trim();
  var last_name = (options["last_name"] || "").trim();
  var errors = [];

  if (!first_name) {
    errors.push(["first_name", "Please enter a valid name"]);
  }
  if (!last_name) {
    errors.push(["last_name", "Please enter a valid name"]);
  }
  if (errors.length) {
    return callback(null, errors);
  }

  var params = {
    user: {
      email: options["email"],
      first_name: first_name,
      last_name: last_name,
      new_password: options["new_password"],
      new_password_confirmation: options["new_password_confirmation"],
      terms: "1",
    },
    vrid: options["vrid"],
    merge_history: options["merge_history"] || "true",
  };

  requestWithSignature("post", "/api/v2/users", params, callback);
}
```

而最好的做法，是保证 callback 全是 sync 或者 async， 那么将上面的修改为:

```js
if (errors.length) {
  process.nextTick(function () {
    callback(null, errors);
  });
  return;
}
```

就可以避免 releasing Zalgo。

## 参考资料

- [Callback 在大型编程时的一般性问题](https://github.com/hax/hax.github.com/issues/11)
