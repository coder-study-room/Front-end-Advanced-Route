---
title: 盒模型
---

盒模型(box model)是 CSS 中的一个重要概念，它是元素大小的呈现方式。需要记住的是："every element in web design is a rectangular box"。如图：

![](https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210401101609.png)

CSS3 中新增了一种盒模型计算方式：box-sizing 熟悉。盒模型默认的值是 content-box, 新增的值是 padding-box 和 border-box，几种盒模型计算元素宽高的区别如下：

## content-box（默认）

布局所占宽度 Width：

```
Width = width + padding-left + padding-right + border-left + border-right
```

布局所占高度 Height:

```
Height = height + padding-top + padding-bottom + border-top + border-bottom
```

## padding-box

布局所占宽度 Width：

```
Width = width(包含padding-left + padding-right) + border-top + border-bottom
```

布局所占高度 Height:

```
Height = height(包含padding-top + padding-bottom) + border-top + border-bottom
```

## border-box

布局所占宽度 Width：

```
Width = width(包含padding-left + padding-right + border-left + border-right)
```

布局所占高度 Height:

```
Height = height(包含padding-top + padding-bottom + border-top + border-bottom)
```

## margin 叠加

外边距叠加是一个相当简单的概念。 但是，在实践中对网页进行布局时， 它会造成许多混淆。 简单的说， 当两个或更多个垂直边距相遇时， 它们将形成一个外边距。这个外边距的高度等于两个发生叠加的外边距的高度中的较大者。但是注意只有普通文档流中块框的垂直外边距才会发生外边距叠加。 行内框、 浮动框或绝对定位框之间的外边距不会叠加。

一般来说， 垂直外边距叠加有三种情况：

- 元素自身叠加 当元素没有内容（即空元素）、内边距、边框时， 它的上下边距就相遇了， 即会产生叠加（垂直方向）。 当为元素添加内容、 内边距、 边框任何一项， 就会取消叠加。
- 相邻元素叠加 相邻的两个元素， 如果它们的上下边距相遇，即会产生叠加。
- 包含（父子）元素叠加 包含元素的外边距隔着 父元素的内边距和边框， 当这两项都不存在的时候， 父子元素垂直外边距相邻， 产生叠加。 添加任何一项即会取消叠加。

## 参考资料

- [CSS Magic: The Box](https://adamschwartz.co/magic-of-css/chapters/1-the-box/)
