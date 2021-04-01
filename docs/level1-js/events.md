---
title: 事件机制
---

JavaScript 是一套使用事件机制较多的语言，特别是与 DOM 交互的时候。所以了解并理解事件机制就变得很必要了。

## 事件监听

### HTML 内联属性

类似`<button onclick="alert('你点击了这个按钮');">`点击这个按钮`</button>`的方式，这种方式会使 JS 与 HTML 高度耦合，不利于开发和维护，不推荐使用。

### DOM 属性绑定

使用 DOM 元素的 onXXX 属性设置，简单易懂，兼容性好。确定是只能绑定一个处理函数。

### 事件监听函数

使用事件监听函数 element.addEventListener(`<event-name>, <callback>, <use-capture>`);，在 element 这个对象上面添加一个事件监听器，当监听到有 事件发生的时候，调用 这个回调函数。至于 这个参数，表示该事件监听是在“捕获”阶段中监听（设置为 true）还是在“冒泡”阶段中监听（设置为 false）。

## 移除事件监听

使用事件解除绑定方法:`element.removeEventListener(<event-name>, <callback>, <use-capture>)`;

需要注意的是，绑定事件时的回调函数不能是匿名函数，必须是一个声明的函数，因为解除事件绑定时需要传递这个回调函数的引用，才可以断开绑定。

## 模拟触发事件

内置的时间也可以被 JavaScript 模拟触发，使用 dispatchEvent 方法。

## 自定义事件

与自定义事件的函数有 Event、CustomEvent 和 dispatchEvent。

## Event

直接自定义事件，使用 Event 构造函数：

```js
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { ... }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```

## CustonEvent

CustomEvent 可以创建一个更高度自定义事件，还可以附带一些数据，具体用法如下：

```js
var myEvent = new CustomEvent(eventname, options);
```

其中 options 可以是:

```js
{
    detail: {
        ...
    },
    bubbles: true,
    cancelable: false
}
```

其中 detail 可以存放一些初始化的信息，可以在触发的时候调用。其他属性就是定义该事件是否具有冒泡等等功能。

### dispatchEvent

这个用于触发自定义的事件。

## 事件顺序

当我们给父子关系的元素都绑定了事件的时候，触发子元素的时候，这两个事件发生的前后顺序是如何的？这引开了我们关于事件顺序的讨论，其实一共有两种方式:

- Event Capturing(事件捕获)： NetScape 所主张的方式
- Event Bubbling(事件冒泡)： Micsoft 所主张的方式

这两种方式确定了事件执行的前后顺序，只不过后来 W3C 对 DOM2 的事件模型给出了一个规范：首先进入事件捕获阶段->达到元素后->进入事件冒泡阶段。

开发者可以通过 addEventListener 函数的第三个参数设置事件触发的阶段，默认为 false,冒泡阶段。而 DOM1 级别的事件绑定则只能在冒泡阶段触发。

## 事件代理

事件绑定后，检测顺序就会从被绑定的 DOM 下滑到触发的元素，再冒泡会绑定的 DOM 上。也就是说，如果你监听了一个 DOM 节点，那也就等于你监听了其所有的后代节点。

代理的意思就是只监听父节点的事件触发，以来代理对其后代节点的监听，而你需要做的只是通过 currentTarget 属性得到触发元素并作出回应。

使用事件代理意味着你可以节省大量重复的事件监听，以减少浏览器资源消耗。还有一个好处就是让 HTML 独立起来，比如之后还有要加子元素的需求，也不需要再为其单独加事件监听了。

## 事件的 Event 对象

当一个事件被触发的时候，会创建一个事件对象（Event Object），这个对象里面包含了一些有用的属性或者方法。事件对象会作为第一个参数，传递给我们的毁掉函数。我们可以使用下面代码，在浏览器中打印出这个事件对象：

```js
var btn = document.getElementsByTagName("button");
btn[0].addEventListener(
  "click",
  function (event) {
    console.log(event);
  },
  false
);
```

比较常用的几个属性和方法：

- type(string): 事件的名称，比如 “click”。
- target(node): 事件要触发的目标节点。
- currentTarget(node): 它就指向正在处理事件的元素：这恰是我们需要的。很不幸的是微软模型中并没有相似的属性, 你也可以使用”this”关键字。事件属性也提供了一个值可供访问:event.currentTarget。
- bubbles (boolean): 表明该事件是否是在冒泡阶段触发的。
- preventDefault (function): 这个方法可以禁止一切默认的行为，例如点击 a 标签时，会打开一个新页面，如果为 a 标签监听事件 click 同时调用该方法，则不会打开新页面。
- stopPropagation (function): 很多时候，我们触发某个元素，会顺带触发出它父级身上的事件，这有时候是我们不想要的，大多数我们想要的还是事件相互独立。所以我们可以选择阻止事件冒泡，使用 event.stopPropagation().
- stopImmediatePropagation (function): 与 stopPropagation 类似，就是阻止触发其他监听函数。但是与 stopPropagation 不同的是，它更加 “强力”，阻止除了目标之外的事件触发，甚至阻止针对同一个目标节点的相同事件
- cancelable (boolean): 这个属性表明该事件是否可以通过调用 event.preventDefault 方法来禁用默认行为。
- eventPhase (number): 这个属性的数字表示当前事件触发在什么阶段。

* 0: none
* 1: 捕获
* 2: 目标
* 3: 冒泡

- pageX 和 pageY (number): 这两个属性表示触发事件时，鼠标相对于页面的坐标。
- isTrusted (boolean): 表明该事件是浏览器触发（用户真实操作触发），还是 JavaScript 代码触发的。

## 事件的回调函数

事件绑定函数时，该函数会以当前元素为作用域执行,所以回调函数中的 this 是当前的 DOM 元素。如果我们需要指定作用域，可以选择:

- 使用匿名函数包裹回调函数
- 使用 bind 方法

## 事件列表

可以通过 MDN 查询，也可以在浏览器中输入:

```js
for (i in window) {
  if (/^on/.test(i)) {
    console.log(i);
  }
}
```

查看，你会发现提供的事件超过你想象的多！

### 常用事件

- load 资源加载完成时触发。这个资源可以是图片、CSS 文件、JS 文件、视频、document 和 window 等等。
- DOMContentLoaded DOM 构建完毕的时候触发, jQuery 的 ready 方法包裹的就是这个事件。
- beforeunload 当浏览者在页面上的输入框输入一些内容时，未保存、误操作关掉网页可能会导致输入信息丢失。当浏览者输入信息但未保存时关掉网页，我们就可以开始监听这个事件,这时候试图关闭网页的时候，会弹窗阻止操作，点击确认之后才会关闭。当然，如果没有必要，就不要监听，不要以为使用它可以为你留住浏览者。
- resize 当节点尺寸发生变化时，触发这个事件。通常用在 window 上，这样可以监听浏览器窗口的变化。通常用在复杂布局和响应式上。出于对性能的考虑，你可以使用函数 throttle 或者 debounce 技巧来进行优化，throttle 方法大体思路就是在某一段时间内无论多次调用，只执行一次函数，到达时间就执行；debounce 方法大体思路就是在某一段时间内等待是否还会重复调用，如果不会再调用，就执行函数，如果还有重复调用，则不执行继续等待。
- error 当我们加载资源失败或者加载成功但是只加载一部分而无法使用时，就会触发 error 事件，我们可以通过监听该事件来提示一个友好的报错或者进行其他处理。比如 JS 资源加载失败，则提示尝试刷新；图片资源加载失败，在图片下面提示图片加载失败等。该事件不会冒泡。因为子节点加载失败，并不意味着父节点加载失败，所以你的处理函数必须精确绑定到目标节点。

## IE 浏览器下的情况

### IE 下绑定事件

在 IE 下面绑定一个事件监听，在 IE9 之前的版本中无法使用标准的 addEventListener 函数，而是使用自家的 attachEvent，具体用法：element.attachEvent(`<event-name>, <callback>`);

它只支持监听在冒泡阶段触发的事件，所以为了统一，在使用标准事件监听函数的时候，第三参数传递 false。

### IE 下的 Event 事件

IE 中往回调函数中传递的事件对象与标准也有一些差异，你需要使用 window.event 来获取事件对象。所以你通常会写出下面代码来获取事件对象：

```
event = event || window.event
```

此外还有一些事件属性有差别，比如比较常用的 event.target 属性，IE 中没有，而是使用 event.srcElement 来代替。如果你的回调函数需要处理触发事件的节点，那么需要写:

```
node = event.srcElement || event.target;
```

## 参考资料

- [W3C: Document Object Model (DOM) Level 3 Events Specification](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
- [最详细的 JavaScript 和事件解读](http://www.admin10000.com/document/6089.html)
