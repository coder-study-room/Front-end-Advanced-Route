---
title: CSS书写与命名
---

开发过程最耗时的是什么？其实是命名。。。

每个团队都应该拥有一套开发规范，其中应该也包含了命名规范。对于 CSS 而言，命名的组织方式又有多种，下面我们一起看看。

## 遵守的原则

首先是命名要讲究简单而不失语义化，其次要时刻思考复用性，选择器的性能等。

## 语义化命名

这是较为传统的方式，就是 div 是干什么的，就起什么名字。这种方式好处是清晰明了，但是缺点是和 HTML 元素高度耦合。不利于大型项目的复用，比如起名都是按照组件的位置而定的情况。

## 书写顺序

- 位置属性(position, top, right, z-index, display, float 等)
- 大小(width, height, padding, margin)
- 文字系列(font, line-height, letter-spacing, color- text-align 等)
- 背景(background, border 等)
- 其他(animation, transition 等)

## OOCSS

一种撰写 CSS 的设计模式，或者可以说是一种「道德规范」，大致上我觉得重点只有两个：

- 减少对 HTML 结构的依赖
- 增加 CSS class 重复性的使用

就是将原先的样式进行提纯，使用 class 封装，通过增加 class 增加复用性。Bootstrap 使用的也是这种方式。

## BEM

## 参考资料

- [推荐大家使用的 CSS 书写规范、顺序](https://www.shejidaren.com/css-written-specifications.html)
- [精简高效的 CSS 命名准则/方法](https://www.zhangxinxu.com/wordpress/2010/09/%E7%B2%BE%E7%AE%80%E9%AB%98%E6%95%88%E7%9A%84css%E5%91%BD%E5%90%8D%E5%87%86%E5%88%99%E6%96%B9%E6%B3%95/)
- [CSS 命名神马的真心难](https://jiongks.name/blog/naming-css-stuff-is-really-hard/?utm_source=tuicool)
- [div+css 命名方式](http://www.divcss5.com/jiqiao/j4.shtml)
- [NEC: css 命名方式](http://nec.netease.com/standard/css-name.html)
- [BEM —— 源自 Yandex 的 CSS 命名方法论](https://segmentfault.com/a/1190000000391762)
- [OOCSS——概念篇](https://www.w3cplus.com/css/oocss-concept)
