(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),l=t(7),i=(t(0),t(153)),u={title:"undefined\u4e0enull\u7684\u533a\u522b"},a={unversionedId:"level1-js/undefined-and-null",id:"level1-js/undefined-and-null",isDocsHomePage:!1,title:"undefined\u4e0enull\u7684\u533a\u522b",description:"\u5728\u5e38\u89c1\u7684\u5f3a\u7c7b\u578b\u8bed\u8a00\u4e2d\uff0c\u901a\u5e38\u6709\u4e00\u4e2a\u8868\u793a\u201c\u7a7a\u201d\u7684\u503c\uff0c\u6bd4\u5982 NULL\u3002\u4f46\u662f\u5728 Javascript \u4e2d\uff0c\u7a7a\uff08\u6216\u8005\u53eb\u201c\u65e0\u503c\u201d\uff09\u6709\u4e24\u79cd\u9009\u62e9\uff1aundefined \u548c null\u3002\u5728 Javascript \u4e2d\u9664\u4e86\u8fd9\u4e24\u4e2a\u503c\u5176\u4ed6\u90fd\u662f\u5bf9\u8c61\u3002\u5176\u4ed6\u7684\u57fa\u672c\u7c7b\u578b\u90fd\u6709\u5176\u5bf9\u8c61\u7684\u5305\u88c5\u7c7b\u578b\u3002\u4f46\u662f\uff0ctypeof null \u8fd4\u56de\u7684\u662f object\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e00\u76f4\u672a\u4fee\u590d\u7684 bug\u3002",source:"@site/docs/level1-js/undefined-and-null.md",slug:"/level1-js/undefined-and-null",permalink:"/docs/level1-js/undefined-and-null",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/docs/level1-js/undefined-and-null.md",version:"current",sidebar:"docs",previous:{title:"\u53d8\u91cf\u5bf9\u8c61",permalink:"/docs/level1-js/variable-object"},next:{title:"\u5173\u4e8e\u51fd\u6570",permalink:"/docs/level1-js/function"}},c=[{value:"\u76f8\u4f3c\u4e4b\u5904",id:"\u76f8\u4f3c\u4e4b\u5904",children:[]},{value:"\u4e0d\u540c\u4e4b\u5904",id:"\u4e0d\u540c\u4e4b\u5904",children:[]},{value:"undefined",id:"undefined",children:[]},{value:"null",id:"null",children:[]},{value:"Object.prototype.toString \u8c03\u7528\u8fc7\u7a0b",id:"objectprototypetostring-\u8c03\u7528\u8fc7\u7a0b",children:[]},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[]}],o={toc:c};function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5728\u5e38\u89c1\u7684\u5f3a\u7c7b\u578b\u8bed\u8a00\u4e2d\uff0c\u901a\u5e38\u6709\u4e00\u4e2a\u8868\u793a\u201c\u7a7a\u201d\u7684\u503c\uff0c\u6bd4\u5982 NULL\u3002\u4f46\u662f\u5728 Javascript \u4e2d\uff0c\u7a7a\uff08\u6216\u8005\u53eb\u201c\u65e0\u503c\u201d\uff09\u6709\u4e24\u79cd\u9009\u62e9\uff1aundefined \u548c null\u3002\u5728 Javascript \u4e2d\u9664\u4e86\u8fd9\u4e24\u4e2a\u503c\u5176\u4ed6\u90fd\u662f\u5bf9\u8c61\u3002\u5176\u4ed6\u7684\u57fa\u672c\u7c7b\u578b\u90fd\u6709\u5176\u5bf9\u8c61\u7684\u5305\u88c5\u7c7b\u578b\u3002\u4f46\u662f\uff0ctypeof null \u8fd4\u56de\u7684\u662f object\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e00\u76f4\u672a\u4fee\u590d\u7684 bug\u3002"),Object(i.b)("h2",{id:"\u76f8\u4f3c\u4e4b\u5904"},"\u76f8\u4f3c\u4e4b\u5904"),Object(i.b)("p",null,"\u90fd\u662f\u5b8c\u5168\u4e0d\u53ef\u53d8\u7684\uff0c\u6ca1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u4e5f\u4e0d\u80fd\u7ed9\u5176\u5c5e\u6027\u8d4b\u503c\u3002\u4e8b\u5b9e\u4e0a,\u8bd5\u56fe\u8bbf\u95ee\u6216\u5b9a\u4e49\u4e00\u4e2a\u5c5e\u6027\u5c06\u4f1a\u5f15\u53d1\u4e00\u4e2a\u7c7b\u578b\u9519\u8bef\uff08TypeError\uff09\u3002\u6b63\u5982\u4ed6\u4eec\u7684\u540d\u5b57\u6697\u793a\u7684\u90a3\u6837\uff0c\u4ed6\u4eec\u662f\u5b8c\u5168\u65e0\u6548\u7684\u503c\u3002"),Object(i.b)("h2",{id:"\u4e0d\u540c\u4e4b\u5904"},"\u4e0d\u540c\u4e4b\u5904"),Object(i.b)("p",null,"\u4e00\u4e2a\u91cd\u8981\u7684\u533a\u522b\uff0c\u670d\u52a1\u4e8e\u4e0d\u540c\u7684\u76ee\u7684\u548c\u7406\u7531\u3002\u533a\u5206\u8fd9\u4e24\u4e2a\u503c\uff0c\u4f60\u53ef\u4ee5\u8ba4\u4e3a undefined \u4ee3\u8868\u4e00\u4e2a\u610f\u60f3\u4e0d\u5230\u7684\u6ca1\u6709\u503c\u800c null \u4f5c\u4e3a\u9884\u671f\u6ca1\u6709\u503c\u7684\u4ee3\u8868\u3002"),Object(i.b)("p",null,"\u4f7f\u7528 Object.prototype.toString.call()\u5f62\u5f0f\u53ef\u4ee5\u5177\u4f53\u6253\u5370\u7c7b\u578b\u3002"),Object(i.b)("h2",{id:"undefined"},"undefined"),Object(i.b)("p",null,"undefined \u5b9e\u9645\u4e0a\u4ee3\u8868\u4e86\u4e0d\u5b58\u5728\u7684\u503c\uff08non-existence of a value\uff09\u3002"),Object(i.b)("p",null,"\u6709\u8bb8\u591a\u7684\u65b9\u6cd5\u4ea7\u751f\u4e00\u4e2a undefined \u503c\u7684\u4ee3\u7801\u3002\u5b83\u901a\u5e38\u9047\u5230\u5f53\u8bd5\u56fe\u8bbf\u95ee\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u503c\u65f6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5728 JavaScript \u8fd9\u79cd\u52a8\u6001\u7684\u5f31\u7c7b\u578b\u8bed\u8a00\u4e2d\uff0c\u53ea\u4f1a\u9ed8\u8ba4\u8fd4\u56de\u4e00\u4e2a undefined \u503c\uff0c\u800c\u4e0d\u662f\u4e0a\u5347\u4e3a\u4e00\u4e2a\u9519\u8bef:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4efb\u4f55\u58f0\u660e\u53d8\u91cf\u65f6\u6ca1\u6709\u63d0\u4f9b\u4e00\u4e2a\u521d\u59cb\u503c\uff0c\u90fd\u4f1a\u6709\u4e00\u4e2a\u4e3a undefined \u7684\u9ed8\u8ba4\u503c"),Object(i.b)("li",{parentName:"ul"},"\u5f53\u8bd5\u56fe\u8bbf\u95ee\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u5bf9\u8c61\u5c5e\u6027\u6216\u6570\u7ec4\u9879\u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a undefined \u503c"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u7701\u7565\u4e86\u51fd\u6570\u7684\u8fd4\u56de\u8bed\u53e5,\u8fd4\u56de undefined"),Object(i.b)("li",{parentName:"ul"},"\u51fd\u6570\u8c03\u7528\u65f6\u672a\u63d0\u4f9b\u7684\u503c\u7ed3\u679c\u5c06\u4e3a undefined \u53c2\u6570\u503c"),Object(i.b)("li",{parentName:"ul"},"void \u64cd\u4f5c\u7b26\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a undefined \u503c\u3002\u50cf Underscore \u7684\u5e93\u4f7f\u7528\u5b83\u4f5c\u4e3a\u4e00\u4e2a\u9632\u5fa1\u5f0f\u7684\u7c7b\u578b\u68c0\u67e5\uff0c\u56e0\u4e3a\u5b83\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u4e0a\u4e0b\u6587\u4f9d\u8d56\u8fd4\u56de undefined"),Object(i.b)("li",{parentName:"ul"},"undefined \u662f\u4e00\u4e2a\u9884\u5b9a\u4e49\u7684\u5168\u5c40\u53d8\u91cf(\u4e0d\u50cf null \u5173\u952e\u5b57)\u521d\u59cb\u5316\u4e3a undefined \u503c")),Object(i.b)("h2",{id:"null"},"null"),Object(i.b)("p",null,"\u901a\u5e38\u7528\u4f5c\u4e00\u4e2a\u7a7a\u5f15\u7528\u4e00\u4e2a\u7a7a\u5bf9\u8c61\u7684\u9884\u671f,\u5c31\u50cf\u4e00\u4e2a\u5360\u4f4d\u7b26\u3002typeof \u7684\u8fd9\u79cd\u884c\u4e3a\u5df2\u7ecf\u88ab\u786e\u8ba4\u4e3a\u4e00\u4e2a\u9519\u8bef\uff0c\u867d\u7136\u63d0\u51fa\u4e86\u4fee\u6b63\uff0c\u51fa\u4e8e\u540e\u517c\u5bb9\u7684\u76ee\u7684\uff0c\u8fd9\u4e00\u70b9\u5df2\u7ecf\u4fdd\u6301\u4e0d\u53d8\u3002 \u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48 JavaScript \u73af\u5883\u4ece\u6765\u6ca1\u6709\u8bbe\u7f6e\u4e00\u4e2a\u503c\u4e3a null\uff1b\u5b83\u5fc5\u987b\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5b8c\u6210\u3002"),Object(i.b)("p",null,"\u4f7f\u7528 null \u7684\u60c5\u51b5:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DOM\uff0c\u5b83\u662f\u72ec\u7acb\u4e8e\u8bed\u8a00\u7684\uff0c\u4e0d\u5c5e\u4e8e ECMAScript \u89c4\u8303\u7684\u8303\u56f4\u3002\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u5916\u90e8 API\uff0c\u8bd5\u56fe\u83b7\u53d6\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u5143\u7d20\u8fd4\u56de\u4e00\u4e2a null \u503c\uff0c\u800c\u4e0d\u662f undefined\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9700\u8981\u7ed9\u4e00\u4e2a\u53d8\u91cf\u6216\u5c5e\u6027\u6307\u5b9a\u4e00\u4e2a\u4e0d\u53d8\u503c\uff0c\u5c06\u5b83\u4f20\u9012\u7ed9\u4e00\u4e2a\u51fd\u6570\uff0c\u6216\u8005\u4ece\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de null\uff0cnull \u51e0\u4e4e\u603b\u662f\u6700\u597d\u7684\u9009\u62e9\u3002"),Object(i.b)("li",{parentName:"ul"},"JavaScript \u4f7f\u7528 undefined \u5e76\u4e14\u7a0b\u5e8f\u5458\u5e94\u8be5\u4f7f\u7528 null\u3002"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u5206\u914d null \u503c\uff0c\u6709\u6548\u5730\u6e05\u9664\u5f15\u7528\uff0c\u5e76\u5047\u8bbe\u5bf9\u8c61\u6ca1\u6709\u5f15\u7528\u5176\u4ed6\u4ee3\u7801\uff0c\u6307\u5b9a\u5783\u573e\u6536\u96c6\uff0c\u786e\u4fdd\u56de\u6536\u5185\u5b58\u3002")),Object(i.b)("h2",{id:"objectprototypetostring-\u8c03\u7528\u8fc7\u7a0b"},"Object.prototype.toString \u8c03\u7528\u8fc7\u7a0b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u503c\u662f undefined\uff0c\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"\u201c[object Undefined]\u201d"),"\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u8fd9\u4e2a\u503c\u4e3a null\uff0c\u5219\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"\u201c[object Null]\u201d"),"\u3002")),Object(i.b)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://yanhaijing.com/javascript/2014/01/05/exploring-the-abyss-of-null-and-undefined-in-javascript/"},"\u63a2\u7d22 JavaScript \u4e2d Null \u548c Undefined \u7684\u6df1\u6e0a"))))}d.isMDXComponent=!0},153:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return s}));var r=t(0),l=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),d=function(e){var n=l.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},b=function(e){var n=d(e.components);return l.a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},f=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=d(t),f=r,s=b["".concat(u,".").concat(f)]||b[f]||p[f]||i;return t?l.a.createElement(s,a(a({ref:n},o),{},{components:t})):l.a.createElement(s,a({ref:n},o))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var o=2;o<i;o++)u[o]=t[o];return l.a.createElement.apply(null,u)}return l.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);