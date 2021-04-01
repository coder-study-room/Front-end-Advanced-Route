---
title: HTML常用标签
---

## div

div 标签用于组合其他 HTML 元素，本身无实在意义。常用于页面的布局，比如一个展开式的广告页面框架大致如下：

```html
<body>
  <div id="wrap-container">
    <div id="collapsed-container"></div>
    <div id="expanded-container"></div>
  </div>
</body>
```

## h1~h6, p, span, strong, em...

此类标签用于设置文本，常见的使用方式是填充段落，比如弹出的 legal 框文字 HTML 结构如下:

```html
<div id="legal-window">
  <h4>LEGAL</h4>
  <img id="legal-close" src="img/embed/legal-close.png" alt="close window" />
  <p>
    *Requires a system with Intel<sup>&reg;</sup> Turbo Boost Technology.
    Intel<sup>&reg;</sup> Turbo Boost Technology and Intel<sup>&reg;</sup> Turbo
    Boost Technology 2.0 are only available on select Intel<sup>&reg;</sup>
    processors. Consult your PC manufacturer. Performance varies depending on
    hardware, software, and system configuration. For more information, visit
    http://www.intel.com/go/turbo. Copyright &copy; 2014 Intel Corporation. All
    rights reserved. Intel, the Intel logo, Intel Core, Look Inside, Intel
    Inside, and Pentium are trademarks of Intel Corporation in the U.S. and/or
    other countries. Other names and brands may be claimed as the property of
    others.
  </p>
</div>
```

## ul, li, ol, dl, dt, dd

此类标签用于设置带有列表内容的，比如导航栏的下拉菜单，多视频的缩略图等：

```html
<ul class="nav-tools-list">
  <li>
    <div>
      <img src="shoppingtools-icon-1.png" alt="" />
      <span>Build & Price</span>
    </div>
  </li>
  <li>
    <div>
      <img src="shoppingtools-icon-2.png" alt="" />
      <span>Incentives & Offers</span>
    </div>
  </li>
  <li>
    <div>
      <img src="shoppingtools-icon-3.png" alt="" />
      <span>Request a Local Quote</span>
    </div>
  </li>
  <li>
    <div>
      <img src="shoppingtools-icon-4.png" alt="" />
      <span>Search Dealer Inventory</span>
    </div>
  </li>
</ul>
```

## form 表单相关

页面中涉及到表单时候，需要使用到 form 相关标签：

```html
<form name="frm-sample" class="frm-sample" action="try" method="post">
  <input type="text" class="form-control" placeholder="Name" />
  <div id="status-message"></div>
  <div id="sample-captcha"></div>
  <a id="check-is-filled" class="info-btn">Check if visualCaptcha is filled</a>
  <button type="submit" name="submit-bt" class="submit">Submit form</button>
</form>
```

## table 表格相关

页面中涉及到 table 结构，需要使用到 table 相关标签:

```html
<talbe></talbe>
```

## img, canvas

用于图像显示。一般不直接操作 img,canvas 元素，而是在它的外层包裹一层父级元素（可以为 span,div 等)，对父级元素进行操作：

```html
<div class="preload" data-src="CheddarBacon.png">
  <img src="CheddarBacon.png" alt="" />
</div>
<!-- or -->
<div
  id="sprite-car"
  class="cw-sprite sprite-car"
  cw-interval="30"
  cw-loops="1"
  cw-auto-play="false"
  cw-texture="images/sprites/expanded/car-texture.png"
  cw-mapper="car"
>
  <canvas class="cw-renderer" width="460" height="130"></canvas>
</div>
```

## a

a 标签用于打开链接，发送邮件，段落跳转等功能。使用时需要注意阻止掉标签的默认事件。

链接跳转，常见的关于分享按钮的 HTML 结构如下：

```html
<div id="shareBox">
  <ul>
    <li id="facebook">
      <a target="_blank" rel="nofollow" data-shareWay="facebook">
        <img
          alt="Post on Facebook"
          src="img/embed/f4Icon3.png"
          alt="Facebook"
        />
      </a>
    </li>
    <li id="twitter">
      <a target="_blank" rel="nofollow" data-shareWay="twitter">
        <img alt="Tweet this" src="img/embed/f4Icon4.png" />
      </a>
    </li>
    <li id="pinterest">
      <a
        data-pin-do="buttonPin"
        data-pin-config="none"
        target="_blank"
        rel="nofollow"
        data-shareWay="pinterest"
      >
        <img alt="Pin it" src="img/embed/f4Icon5.png" />
      </a>
    </li>
    <li id="email">
      <a target="_blank" rel="nofollow" data-shareWay="email">
        <img src="img/embed/f4Icon6.png" />
      </a>
    </li>
  </ul>
  <p></p>
</div>
```

发送邮件的代码片段如下：

```html
<div class="button">
  <a
    class="mail"
    data-img="mail.png"
    href="mailto:[email protected]?subject=xxx&body=xxx"
  ></a>
</div>
```

段落跳转代码片段如下：

```html
<div id="html5"></div>
<a
  name="user-content-html5"
  href="#html5"
  class="headeranchor-link"
  aria-hidden="true"
  ><span class="headeranchor"></span
></a>
```

## HTML5 标签查询

W3School: [点击查询](http://www.w3schools.com/tags/default.asp)

![](https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210331144128.png)
