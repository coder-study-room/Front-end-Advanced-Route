---
title: CSS浮动相关
---

这也是 CSS 定位机制的一种。

首先了解两个概念：

- 文档流：文档流是文档中可显示对象在排列时所占用的位置。
- 浮动的定义：使元素脱离文档流，按照指定方向发生移动，遇到父级边界或者相邻的浮动元素停了下来。

浮动的实际用途，可设置文字环绕或使元素宽度由内容填充（类似 Inline-block)。使用浮动需要注意的是如果浮动的元素高度比父级容器还高，那么需要设置父级容器的 overflow 属性为 auto,使其自动撑满。

## 清除浮动

[那些年我们一起清除过的浮动](http://www.iyunlu.com/view/css-xhtml/55.html)

## 参考资料

- 关于浮动的前世今生
- [经验分享：CSS 浮动(float,clear)通俗讲解](https://www.cnblogs.com/iyangyuan/archive/2013/03/27/2983813.html)
- [CSS float 浮动的深入研究、详解及拓展(一)](https://www.zhangxinxu.com/wordpress/2010/01/css-float%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6%E3%80%81%E8%AF%A6%E8%A7%A3%E5%8F%8A%E6%8B%93%E5%B1%95%E4%B8%80/)
- [CSS float 浮动的深入研究、详解及拓展(二)](https://www.zhangxinxu.com/wordpress/2010/01/css-float%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6%E3%80%81%E8%AF%A6%E8%A7%A3%E5%8F%8A%E6%8B%93%E5%B1%95%E4%BA%8C/)
- [对 CSS 中的 Position、Float 属性的一些深入探讨](https://www.cnblogs.com/coffeedeveloper/p/3145790.html#html)
