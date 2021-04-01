---
title: CSS选择器
---

选择器是匹配元素的一种模式，不只是在CSS中，JavaScript对CSS的选择器也是支持的，比如document.document.querySelectorAll。

## 关于CSS解析器

HTML 经过解析生成 DOM Tree（这个我们比较熟悉）；而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。

Render Tree 中的元素（WebKit 中称为「renderers」，Firefox 下为「frames」）与 DOM 元素相对应，但非一一对应：一个 DOM 元素可能会对应多个 renderer，如文本折行后，不同的「行」会成为 render tree 种不同的 renderer。也有的 DOM 元素被 Render Tree 完全无视，比如 display:none 的元素。

在建立 Render Tree 时（WebKit 中的「Attachment」过程），**浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 renderer。对于每个 DOM 元素，必须在所有 Style Rules 中找到符合的 selector 并将对应的规则进行合并。选择器的「解析」实际是在这里执行的，** 在遍历 DOM Tree 时，从 Style Rules 中去寻找对应的 selector。

## 解析顺序

CSS匹配不是从左到右进行查找，而是从右到左进行查找。如果从左到右的顺序，那么每条选择器都需要遍历整个DOM树，性能很受影响。所谓高效的CSS就是让浏览器在查找style匹配的元素的时候尽量进行少的查找, 所以选择器最好写的简洁一点。

## 选择器权重

权重，也就是选择器的优先级，每条选择器的规则都有其权重，权重大的会覆盖掉权重小的，很多CSS出现问题的场景，都是某处定义了一个更高权重的规则，导致此处规则不生效。

根据样式所在位置，对元素的影响也有关系：内联样式（标签内style形式） > style标签 > link标签。

另外一点需要注意的是!improtant,凡是属性值后加上了!important，那么它的值不会被其他值替换。

## 权重的计算

权重的计算，主要的规则就是:
```
id选择器 > 类，属性选择器和伪类选择器 > 元素和伪元素
```

## 基本选择器

- 通配符选择器（＊）
- id选择器（\#ID）
- 类选择器（.className）
- 元素选择器(E)
- 后代选择器（Ｅ Ｆ）
- 子元素选择器(E>F)
- 相邻兄弟元素选择器(E + F)
- 群组选择器（selector1,selector2,...,selectorN）

## 属性选择器

使用CSS3属性选择器，你可以只指定元素的某个属性，或者你还可以同时指定元素的某个属性和其对应的属性值。

- E[attr]：只使用属性名，但没有确定任何属性值
- E[attr="value"]：指定属性名，并指定了该属性的属性值
- E[attr~="value"]：指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写
- E[attr^="value"]：指定了属性名，并且有属性值，属性值是以value开头的；
- E[attr$="value"]：指定了属性名，并且有属性值，而且属性值是以value结束的；
- E[attr*="value"]：指定了属性名，并且有属性值，而且属值中包含了value；
- E[attr|="value"]：指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn）;

## 伪类选择器

伪类选择器的形式就是:xxx， 比如:hover, :link, :nth。

### 动态伪类

这些伪类并不存在于HTML中,而只有当用户和网站交互的时候才能体现出来，动态伪类包含两种，第一种是我们在链接中常看到的锚点伪类，如":link",":visited";另外一种被称作用户行为伪类，如“:hover”,":active"和":focus"。先来看最常见的锚点伪类。

- hover: 用于当用户把鼠标移动到元素上面时的效果
- active: 用于用户点击元素那一下的效果（正发生在点的那一下，松开鼠标左键此动作也就完成了）
- focus: 用于元素成为焦点，这个经常用在表单元素上

### UI元素状态伪类

主要是针对于HTML中的Form元素操作, IE8不支持":checked",":enabled",":disabled"这三种选择器。

### CSS3的:nth选择器

主要注意的是CSS3添加的nth选择器在IE8下不支持。

- fist-child: 选择某个元素的第一个子元素；
- last-child: 选择某个元素的最后一个子元素；
- nth-child(): 选择某个元素的一个或多个特定的子元素；
- 其他： 常用的就是上面三种了，其他自行了解。

## 选择器分类总结

![](https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210401104038.png)

## 选择器的优化

[CSS选择器的优化](https://www.w3cplus.com/css/css-selector-performance)

## 参考资料

- [一个CSS选择器游戏](https://flukeout.github.io/)
- [CSS选择器支持情况](https://labs.qianduan.net/css-selector/)
- [CSS3 选择器——基本选择器](https://www.w3cplus.com/css3/basic-selectors)
- [CSS3 选择器——属性选择器](https://www.w3cplus.com/css3/attribute-selectors)
- [CSS3 选择器——伪类选择器](https://www.w3cplus.com/css3/pseudo-class-selector)
- [Browser CSS-Selector-Test](https://css4-selectors.com/browser-selector-test/)