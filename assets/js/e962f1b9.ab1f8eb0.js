(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{224:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(235)),l={title:"Promise"},i={unversionedId:"level1-js/promise",id:"level1-js/promise",isDocsHomePage:!1,title:"Promise",description:"Promise/Deferred \u6a21\u578b, \u662f\u4e00\u79cd\u5f02\u6b65\u7f16\u7a0b\u7684\u6a21\u5f0f\u3002\u5176\u4ed6\u7684\u5f02\u6b65\u7f16\u7a0b\u7684\u6a21\u5f0f\uff0c\u8fd8\u6709 async \u6765\u63a7\u5236, \u53eb\u505a\u6d41\u7a0b\u63a7\u5236\u3002",source:"@site/docs/level1-js/promise.md",slug:"/level1-js/promise",permalink:"/docs/level1-js/promise",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/docs/level1-js/promise.md",version:"current",sidebar:"docs",previous:{title:"callback\u95ee\u9898",permalink:"/docs/level1-js/callback"},next:{title:"ES6",permalink:"/docs/level1-js/es6"}},c=[{value:"Callback Hell",id:"callback-hell",children:[]},{value:"Promise/A+\u89c4\u8303",id:"promisea\u89c4\u8303",children:[]},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Promise/Deferred \u6a21\u578b, \u662f\u4e00\u79cd\u5f02\u6b65\u7f16\u7a0b\u7684\u6a21\u5f0f\u3002\u5176\u4ed6\u7684\u5f02\u6b65\u7f16\u7a0b\u7684\u6a21\u5f0f\uff0c\u8fd8\u6709 async \u6765\u63a7\u5236, \u53eb\u505a\u6d41\u7a0b\u63a7\u5236\u3002"),Object(o.b)("p",null,"\u73b0\u4eca\u6d41\u884c\u7684\u5404\u5927 js \u5e93\uff0c\u51e0\u4e4e\u90fd\u4e0d\u540c\u7a0b\u5ea6\u7684\u5b9e\u73b0\u4e86 Promise\uff0c\u5982 dojo\uff0cjQuery\u3001Zepto\u3001when.js\u3001Q \u7b49\uff0c\u53ea\u662f\u66b4\u9732\u51fa\u6765\u7684\u5927\u90fd\u662f Deferred \u5bf9\u8c61\u3002"),Object(o.b)("h2",{id:"callback-hell"},"Callback Hell"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var fs = require("fs");\nfs.readFile("sample01.txt", "utf8", function (err, data) {\n  fs.readFile("sample02.txt", "utf8", function (err, data) {\n    fs.readFile("sample03.txt", "utf8", function (err, data) {\n      fs.readFile("sample04.txt", "utf8", function (err, data) {});\n    });\n  });\n});\n')),Object(o.b)("p",null,"\u8fd9\u6837\u7684\u5d4c\u5957\u5c31\u662f\u4ee4\u4eba\u618e\u6076\u7684 callback hell\u3002"),Object(o.b)("h2",{id:"promisea\u89c4\u8303"},"Promise/A+\u89c4\u8303"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4e00\u4e2a promise \u53ef\u80fd\u6709\u4e09\u79cd\u72b6\u6001\uff1a\u7b49\u5f85\uff08pending\uff09\u3001\u5df2\u5b8c\u6210\uff08fulfilled\uff09\u3001\u5df2\u62d2\u7edd\uff08rejected\uff09"),Object(o.b)("li",{parentName:"ul"},"\u4e00\u4e2a promise \u7684\u72b6\u6001\u53ea\u53ef\u80fd\u4ece\u201c\u7b49\u5f85\u201d\u8f6c\u5230\u201c\u5b8c\u6210\u201d\u6001\u6216\u8005\u201c\u62d2\u7edd\u201d\u6001\uff0c\u4e0d\u80fd\u9006\u5411\u8f6c\u6362\uff0c\u540c\u65f6\u201c\u5b8c\u6210\u201d\u6001\u548c\u201c\u62d2\u7edd\u201d\u6001\u4e0d\u80fd\u76f8\u4e92\u8f6c\u6362"),Object(o.b)("li",{parentName:"ul"},"promise \u5fc5\u987b\u5b9e\u73b0 then \u65b9\u6cd5\uff08\u53ef\u4ee5\u8bf4\uff0cthen \u5c31\u662f promise \u7684\u6838\u5fc3\uff09\uff0c\u800c\u4e14 then \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u540c\u4e00\u4e2a promise \u7684 then \u53ef\u4ee5\u8c03\u7528\u591a\u6b21\uff0c\u5e76\u4e14\u56de\u8c03\u7684\u6267\u884c\u987a\u5e8f\u8ddf\u5b83\u4eec\u88ab\u5b9a\u4e49\u65f6\u7684\u987a\u5e8f\u4e00\u81f4"),Object(o.b)("li",{parentName:"ul"},"then \u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6210\u529f\u65f6\u7684\u56de\u8c03\uff0c\u5728 promise \u7531\u201c\u7b49\u5f85\u201d\u6001\u8f6c\u6362\u5230\u201c\u5b8c\u6210\u201d\u6001\u65f6\u8c03\u7528\uff0c\u53e6\u4e00\u4e2a\u662f\u5931\u8d25\u65f6\u7684\u56de\u8c03\uff0c\u5728 promise \u7531\u201c\u7b49\u5f85\u201d\u6001\u8f6c\u6362\u5230\u201c\u62d2\u7edd\u201d\u6001\u65f6\u8c03\u7528\u3002\u540c\u65f6\uff0cthen \u53ef\u4ee5\u63a5\u53d7\u53e6\u4e00\u4e2a promise \u4f20\u5165\uff0c\u4e5f\u63a5\u53d7\u4e00\u4e2a\u201c\u7c7b then\u201d\u7684\u5bf9\u8c61\u6216\u65b9\u6cd5\uff0c\u5373 thenable \u5bf9\u8c61\u3002")),Object(o.b)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://liubin.org/promises-book/"},"JavaScript Promise \u8ff7\u4f60\u4e66")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.alloyteam.com/2014/05/javascript-promise-mode/"},"JavaScript Promise \u542f\u793a\u5f55")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/alsotang/node-lessons/tree/master/lesson17"},"\u300a\u4f7f\u7528 promise \u66ff\u4ee3\u56de\u8c03\u51fd\u6570\u300b")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/"},"[\u7ffb\u8bd1] We have a problem with promises"))))}p.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);