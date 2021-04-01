---
title: CSS定位方式
---

## display属性

每一个元素都有默认的display属性，使用最多的是block, inline和inline-block，不常用的是table-cell。

根据display属性，我们可以将元素分为块级元素(block)和内联级元素(inline)。它们最大区别是:block元素可以设置宽度，独占一行。inline元素宽度由内容决定，与其他元素并列在一行。

常见的block属性元素有：div, h1-h6, ul, li, ol, dl, dd, dt。

常见的inline属性元素有: span, a, em。

### block

宽高可以自行设置，默认宽度由父容器决定，默认高度有内容决定。自己独占一行。

### inline

宽度和高度都有内容决定，与其他元素共占一行。

### inline-block

宽度可以自行设置，类似block，但是与其他元素共占一行，类似inline。长用于设置垂直居中。

### table-cell

此属性指让标签元素以表格单元格的形式呈现，单元格有一些比较特殊的属性，可以设置元素的垂直居中等。

## position属性

元素在页面中的布局遵守一套文档流的方式，默认的定位属性值为static。它其实是未被设置定位的。

元素如果被定位了，那么它的top,left,bottom,right值就会生效，能设置定位的属性是relative,absolute和fixed。

需要注意的另一点是被定位的元素层次(z-index)会得到提高。

### relative（相对定位）

设置了相对定位之后，通过修改top,left,bottom,right值，元素会在自身文档流所在位置上被移动，其他的元素则不会调整位置来弥补它偏离后剩下的空隙。

### absolute（绝对定位）

设置了绝对定位之后，元素脱离文档流，其他的元素会调整位置来弥补它偏离后剩下的空隙。元素偏移是相对于是它最近的设置了定位属性（position值不为static）的元素。

且如果元素为块级元素（display属性值为block)，那么它的宽度也会由内容撑开。因为：

> 默认文档流中块级元素如果没有设置宽度属性，会自动填满整行。

### fixed(固定定位)

设置了固定定位之后，元素相对的偏移的参考是可视窗口，即使页面滚动，元素仍然会在固定位置。

## 参考资料

- [CSS 相对|绝对(relative/absolute)定位系列（一）](https://www.zhangxinxu.com/wordpress/2010/12/css-%E7%9B%B8%E5%AF%B9%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E7%B3%BB%E5%88%97%EF%BC%88%E4%B8%80%EF%BC%89/)
- [CSS 相对/绝对(relative/absolute)定位系列（二）](https://www.zhangxinxu.com/wordpress/2010/12/css-%E7%9B%B8%E5%AF%B9%E7%BB%9D%E5%AF%B9relativeabsolute%E5%AE%9A%E4%BD%8D%E7%B3%BB%E5%88%97%EF%BC%88%E4%BA%8C%EF%BC%89/)
- [CSS 相对/绝对(relative/absolute)定位系列（三）](https://www.zhangxinxu.com/wordpress/2011/03/css-%E7%9B%B8%E5%AF%B9%E7%BB%9D%E5%AF%B9relativeabsolute%E5%AE%9A%E4%BD%8D%E7%B3%BB%E5%88%97%EF%BC%88%E4%B8%89%EF%BC%89/)
- [CSS 相对/绝对(relative/absolute)定位系列（四）](https://www.zhangxinxu.com/wordpress/2011/08/css%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8Drelative%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8Dabsolute%E7%B3%BB%E5%88%97%EF%BC%88%E5%9B%9B%EF%BC%89/)
- [CSS相对定位|绝对定位(五)之z-index篇](https://www.zhangxinxu.com/wordpress/2011/08/css%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8D%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E4%BA%94%E4%B9%8Bz-index%E7%AF%87/)
- [displaytable-cell的应用](https://www.zhangxinxu.com/wordpress/2010/10/%E6%88%91%E6%89%80%E7%9F%A5%E9%81%93%E7%9A%84%E5%87%A0%E7%A7%8Ddisplaytable-cell%E7%9A%84%E5%BA%94%E7%94%A8/)