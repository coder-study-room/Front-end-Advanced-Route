(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),c=(t(0),t(235)),l={title:"\u5173\u4e8e\u51fd\u6570"},a={unversionedId:"level1-js/function",id:"level1-js/function",isDocsHomePage:!1,title:"\u5173\u4e8e\u51fd\u6570",description:"\u7406\u89e3\u51fd\u6570\u7684\u51e0\u79cd\u58f0\u660e\u65b9\u5f0f\uff0c\u4ee5\u53ca\u5176\u4e2d\u7684\u5dee\u5f02\u3002",source:"@site/docs/level1-js/function.md",slug:"/level1-js/function",permalink:"/docs/level1-js/function",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/docs/level1-js/function.md",version:"current",sidebar:"docs",previous:{title:"undefined\u4e0enull\u7684\u533a\u522b",permalink:"/docs/level1-js/undefined-and-null"},next:{title:"\u7acb\u5373\u6267\u884c\u51fd\u6570",permalink:"/docs/level1-js/IIFE"}},i=[{value:"\u58f0\u660e\u65b9\u5f0f",id:"\u58f0\u660e\u65b9\u5f0f",children:[]},{value:"\u51fd\u6570\u58f0\u660e",id:"\u51fd\u6570\u58f0\u660e",children:[]},{value:"\u51fd\u6570\u8868\u8fbe\u5f0f",id:"\u51fd\u6570\u8868\u8fbe\u5f0f",children:[]},{value:"\u533a\u522b",id:"\u533a\u522b",children:[]},{value:"\u547d\u540d\u51fd\u6570\u8868\u8fbe\u5f0f",id:"\u547d\u540d\u51fd\u6570\u8868\u8fbe\u5f0f",children:[]},{value:"\u51fd\u6570\u7684\u5185\u5b58\u7ba1\u7406",id:"\u51fd\u6570\u7684\u5185\u5b58\u7ba1\u7406",children:[]},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[]}],u={toc:i};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u7406\u89e3\u51fd\u6570\u7684\u51e0\u79cd\u58f0\u660e\u65b9\u5f0f\uff0c\u4ee5\u53ca\u5176\u4e2d\u7684\u5dee\u5f02\u3002"),Object(c.b)("h2",{id:"\u58f0\u660e\u65b9\u5f0f"},"\u58f0\u660e\u65b9\u5f0f"),Object(c.b)("p",null,"ECMA \u89c4\u8303\u53ea\u660e\u786e\u4e86\u4e00\u70b9\uff1a\u51fd\u6570\u58f0\u660e\u5fc5\u987b\u5e26\u6709\u6807\u793a\u7b26\uff08Identifier\uff09\uff08\u5c31\u662f\u5927\u5bb6\u5e38\u8bf4\u7684\u51fd\u6570\u540d\u79f0\uff09\uff0c\u800c\u51fd\u6570\u8868\u8fbe\u5f0f\u5219\u53ef\u4ee5\u7701\u7565\u8fd9\u4e2a\u6807\u793a\u7b26\u3002\u89c4\u5219\u5982\u4e0b\uff1a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u51fd\u6570\u58f0\u660e\u53ea\u80fd\u51fa\u73b0\u5728\u7a0b\u5e8f\u6216\u51fd\u6570\u4f53\u5185\u3002\u4ece\u53e5\u6cd5\u4e0a\u8bb2\uff0c\u5b83\u4eec \u4e0d\u80fd\u51fa\u73b0\u5728 Block\uff08\u5757\uff09\uff08{ ... }\uff09\u4e2d\uff0c\u4f8b\u5982\u4e0d\u80fd\u51fa\u73b0\u5728 if\u3001while \u6216 for \u8bed\u53e5\u4e2d\u3002\u56e0\u4e3a Block\uff08\u5757\uff09 \u4e2d\u53ea\u80fd\u5305\u542b Statement \u8bed\u53e5\uff0c \u800c\u4e0d\u80fd\u5305\u542b\u51fd\u6570\u58f0\u660e\u8fd9\u6837\u7684\u6e90\u5143\u7d20\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u4ed4\u7ec6\u770b\u4e00\u770b\u89c4\u5219\u4e5f\u4f1a\u53d1\u73b0\uff0c\u552f\u4e00\u53ef\u80fd\u8ba9\u8868\u8fbe\u5f0f\u51fa\u73b0\u5728 Block\uff08\u5757\uff09\u4e2d\u60c5\u5f62\uff0c\u5c31\u662f\u8ba9\u5b83\u4f5c\u4e3a\u8868\u8fbe\u5f0f\u8bed\u53e5\u7684\u4e00\u90e8\u5206\u3002\u4f46\u662f\uff0c\u89c4\u8303\u660e\u786e\u89c4\u5b9a\u4e86\u8868\u8fbe\u5f0f\u8bed\u53e5\u4e0d\u80fd\u4ee5\u5173\u952e\u5b57 function \u5f00\u5934\u3002\u800c\u8fd9\u5b9e\u9645\u4e0a\u5c31\u662f\u8bf4\uff0c\u51fd\u6570\u8868\u8fbe\u5f0f\u540c\u6837\u4e5f\u4e0d\u80fd\u51fa\u73b0\u5728 Statement \u8bed\u53e5\u6216 Block\uff08\u5757\uff09\u4e2d\uff08\u56e0\u4e3a Block\uff08\u5757\uff09\u5c31\u662f\u7531 Statement \u8bed\u53e5\u6784\u6210\u7684\uff09\u3002")),Object(c.b)("h2",{id:"\u51fd\u6570\u58f0\u660e"},"\u51fd\u6570\u58f0\u660e"),Object(c.b)("p",null,"\u5982\u679c function foo(){}\u88ab\u5305\u542b\u5728\u4e00\u4e2a\u51fd\u6570\u4f53\u5185\uff0c\u6216\u8005\u4f4d\u4e8e\u7a0b\u5e8f\u7684\u6700\u9876\u90e8\u7684\u8bdd\uff0c\u90a3\u5b83\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\u58f0\u660e\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"function foo() {} // \u58f0\u660e\uff0c\u56e0\u4e3a\u5b83\u662f\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\n\n(function () {\n  function bar() {} // \u58f0\u660e\uff0c\u56e0\u4e3a\u5b83\u662f\u51fd\u6570\u4f53\u7684\u4e00\u90e8\u5206\n})();\n")),Object(c.b)("p",null,"\u51fd\u6570\u7684\u58f0\u660e\u65b9\u5f0f\u4f1a\u5f97\u5230\u63d0\u5347\uff0c\u4e14\u5982\u679c\u6709\u76f8\u540c\u7684\u51fd\u6570\uff0c\u4f1a\u8986\u76d6\u3002\u6bd4\u5982:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"if (true) {\n  function foo() {\n    return 1;\n  }\n} else {\n  function foo() {\n    return 2;\n  }\n}\nfoo(); // 1\n\n// \u5728ECMAScript\u7684\u8bed\u6cd5\u6269\u5c55\u4e2d\uff0c\u6709\u4e00\u4e2a\u662f\u51fd\u6570\u8bed\u53e5, Gecko\u5185\u6838\u4e0b\u53ef\u4ee5\u4f7f\u7528,\u8fd4\u56de1\n// \u5176\u4ed6\u6d4f\u89c8\u5668\u4e0b\uff0c\u8fd4\u56de2\n")),Object(c.b)("h2",{id:"\u51fd\u6570\u8868\u8fbe\u5f0f"},"\u51fd\u6570\u8868\u8fbe\u5f0f"),Object(c.b)("p",null,"\u5982\u679c function foo(){}\u662f\u4f5c\u4e3a\u8d4b\u503c\u8868\u8fbe\u5f0f\u7684\u4e00\u90e8\u5206\u7684\u8bdd\uff0c\u90a3\u5b83\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\u8868\u8fbe\u5f0f\u3002"),Object(c.b)("p",null,"\u8fd8\u6709\u4e00\u79cd\u51fd\u6570\u8868\u8fbe\u5f0f\u4e0d\u592a\u5e38\u89c1\uff0c\u5c31\u662f",Object(c.b)("strong",{parentName:"p"},"\u88ab\u62ec\u53f7\u62ec\u4f4f\u7684(function foo(){})"),"\uff0c\u4ed6\u662f\u8868\u8fbe\u5f0f\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u62ec\u53f7 ()\u662f\u4e00\u4e2a\u5206\u7ec4\u64cd\u4f5c\u7b26\uff0c\u5b83\u7684\u5185\u90e8\u53ea\u80fd\u5305\u542b\u8868\u8fbe\u5f0f\u3002\u4f60\u53ef\u4ee5\u4f1a\u60f3\u5230\uff0c\u5728\u4f7f\u7528 eval \u5bf9 JSON \u8fdb\u884c\u6267\u884c\u7684\u65f6\u5019\uff0cJSON \u5b57\u7b26\u4e32\u901a\u5e38\u88ab\u5305\u542b\u5728\u4e00\u4e2a\u5706\u62ec\u53f7\u91cc\uff1aeval('(' + json + ')')\uff0c\u8fd9\u6837\u505a\u7684\u539f\u56e0\u5c31\u662f\u56e0\u4e3a\u5206\u7ec4\u64cd\u4f5c\u7b26\uff0c\u4e5f\u5c31\u662f\u8fd9\u5bf9\u62ec\u53f7\uff0c\u4f1a\u8ba9\u89e3\u6790\u5668\u5f3a\u5236\u5c06 JSON \u7684\u82b1\u62ec\u53f7\u89e3\u6790\u6210\u8868\u8fbe\u5f0f\u800c\u4e0d\u662f\u4ee3\u7801\u5757\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var bar = function foo() {}; // \u8868\u8fbe\u5f0f\uff0c\u56e0\u4e3a\u5b83\u662f\u8d4b\u503c\u8868\u8fbe\u5f0f\u7684\u4e00\u90e8\u5206\nnew (function bar() {})(); // \u8868\u8fbe\u5f0f\uff0c\u56e0\u4e3a\u5b83\u662fnew\u8868\u8fbe\u5f0f\n(function foo() {}); // \u51fd\u6570\u8868\u8fbe\u5f0f\uff1a\u5305\u542b\u5728\u5206\u7ec4\u64cd\u4f5c\u7b26\u5185\n")),Object(c.b)("h2",{id:"\u533a\u522b"},"\u533a\u522b"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u51fd\u6570\u58f0\u660e\u4f1a\u5728\u4efb\u4f55\u8868\u8fbe\u5f0f\u88ab\u89e3\u6790\u548c\u6c42\u503c\u4e4b\u524d\u5148\u88ab\u89e3\u6790\u548c\u6c42\u503c\uff0c\u5373\u4f7f\u4f60\u7684\u58f0\u660e\u5728\u4ee3\u7801\u7684\u6700\u540e\u4e00\u884c\uff0c\u5b83\u4e5f\u4f1a\u5728\u540c\u4f5c\u7528\u57df\u5185\u7b2c\u4e00\u4e2a\u8868\u8fbe\u5f0f\u4e4b\u524d\u88ab\u89e3\u6790/\u6c42\u503c"),Object(c.b)("li",{parentName:"ul"},"\u51fd\u6570\u58f0\u660e\u5728\u6761\u4ef6\u8bed\u53e5\u5185\u867d\u7136\u53ef\u4ee5\u7528\uff0c\u4f46\u662f\u6ca1\u6709\u88ab\u6807\u51c6\u5316\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u540c\u7684\u73af\u5883\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u6267\u884c\u7ed3\u679c\uff0c\u6240\u4ee5\u8fd9\u6837\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u4f7f\u7528\u51fd\u6570\u8868\u8fbe\u5f0f")),Object(c.b)("h2",{id:"\u547d\u540d\u51fd\u6570\u8868\u8fbe\u5f0f"},"\u547d\u540d\u51fd\u6570\u8868\u8fbe\u5f0f"),Object(c.b)("p",null,"\u5728 web \u5f00\u53d1\u4e2d\u6709\u4e2a\u5e38\u7528\u7684\u6a21\u5f0f\u662f",Object(c.b)("strong",{parentName:"p"},"\u57fa\u4e8e\u5bf9\u67d0\u79cd\u7279\u6027\u7684\u6d4b\u8bd5\u6765\u4f2a\u88c5\u51fd\u6570\u5b9a\u4e49"),"\uff0c\u4ece\u800c\u8fbe\u5230\u6027\u80fd\u4f18\u5316\u7684\u76ee\u7684\uff0c\u4f46\u7531\u4e8e\u8fd9\u79cd\u65b9\u5f0f\u90fd\u662f\u5728\u540c\u4e00\u4f5c\u7528\u57df\u5185\uff0c\u6240\u4ee5\u57fa\u672c\u4e0a\u4e00\u5b9a\u8981\u7528\u51fd\u6570\u8868\u8fbe\u5f0f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'// \u8be5\u4ee3\u7801\u6765\u81eaGarrett Smith\u7684APE Javascript library\u5e93(http://dhtmlkitchen.com/ape/)\nvar contains = (function () {\n  var docEl = document.documentElement;\n\n  if (typeof docEl.compareDocumentPosition != "undefined") {\n    return function (el, b) {\n      return (el.compareDocumentPosition(b) & 16) !== 0;\n    };\n  } else if (typeof docEl.contains != "undefined") {\n    return function (el, b) {\n      return el !== b && el.contains(b);\n    };\n  }\n  return function (el, b) {\n    if (el === b) return false;\n    while (el != b && (b = b.parentNode) != null);\n    return el === b;\n  };\n})();\n')),Object(c.b)("p",null,"\u4e00\u70b9\u9700\u8981\u8bb0\u4f4f\uff1a\u8fd9\u4e2a\u540d\u5b57\u53ea\u5728\u65b0\u5b9a\u4e49\u7684\u51fd\u6570\u4f5c\u7528\u57df\u5185\u6709\u6548\uff0c\u56e0\u4e3a\u89c4\u8303\u89c4\u5b9a\u4e86\u6807\u793a\u7b26\u4e0d\u80fd\u5728\u5916\u56f4\u7684\u4f5c\u7528\u57df\u5185\u6709\u6548\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'var f = function foo() {\n  return typeof foo; // foo\u662f\u5728\u5185\u90e8\u4f5c\u7528\u57df\u5185\u6709\u6548\n};\n// foo\u5728\u5916\u90e8\u7528\u4e8e\u662f\u4e0d\u53ef\u89c1\u7684\ntypeof foo; // "undefined"\nf(); // "function"\n')),Object(c.b)("p",null,"\u547d\u540d\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u4f5c\u7528\uff1a\u7ed9\u5b83\u4e00\u4e2a\u540d\u5b57\u5c31\u662f\u53ef\u4ee5\u8ba9\u8c03\u8bd5\u8fc7\u7a0b\u66f4\u65b9\u4fbf\uff0c\u56e0\u4e3a\u5728\u8c03\u8bd5\u7684\u65f6\u5019\uff0c\u5982\u679c\u5728\u8c03\u7528\u6808\u4e2d\u7684\u6bcf\u4e2a\u9879\u90fd\u6709\u81ea\u5df1\u7684\u540d\u5b57\u6765\u63cf\u8ff0\uff0c\u90a3\u4e48\u8c03\u8bd5\u8fc7\u7a0b\u5c31\u592a\u723d\u4e86\uff0c\u611f\u53d7\u4e0d\u4e00\u6837\u561b\u3002\u7279\u522b\u662f\u5728\u533f\u540d\u51fd\u6570\u7684\u65f6\u5019\u6bd4\u8f83\u6709\u6548\u3002"),Object(c.b)("h2",{id:"\u51fd\u6570\u7684\u5185\u5b58\u7ba1\u7406"},"\u51fd\u6570\u7684\u5185\u5b58\u7ba1\u7406"),Object(c.b)("p",null,"\u5982\u679c\u6211\u4eec\u7684\u4ee3\u7801\u4e2d\u8fd4\u56de\u591a\u4e2a\u95ed\u5305\u7684\u60c5\u51b5\uff0c\u5982\u679c\u6ca1\u6709\u624b\u52a8\u8bbe\u7f6e null \u7684\u8bdd\uff0c\u5185\u5b58\u4e0d\u4f1a\u88ab\u81ea\u52a8\u91ca\u653e\u3002"),Object(c.b)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://ourjs.com/detail/548925908a34fa3204000002"},"\u5728 JavaScript \u7684 Array \u6570\u7ec4\u4e2d\u8c03\u7528\u4e00\u7ec4 Function \u65b9\u6cd5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.cnblogs.com/TomXu/archive/2011/12/29/2290308.html"},"\u6df1\u5165\u7406\u89e3 JavaScript \u7cfb\u5217\uff082\uff09\uff1a\u63ed\u79d8\u547d\u540d\u51fd\u6570\u8868\u8fbe\u5f0f"))))}b.isMDXComponent=!0},235:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),b=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=b(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,s=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return t?o.a.createElement(s,a(a({ref:n},u),{},{components:t})):o.a.createElement(s,a({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<c;u++)l[u]=t[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);