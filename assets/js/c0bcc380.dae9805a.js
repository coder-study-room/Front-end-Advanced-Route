(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(468)),b={title:"25. \u7cbe\u8bfb\u300anull >= 0?\u300b",id:"025",hide_title:!0},i={unversionedId:"025",id:"025",isDocsHomePage:!1,title:"25. \u7cbe\u8bfb\u300anull >= 0?\u300b",description:'\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a"null >= 0?"',source:"@site/weekly/025.\u7cbe\u8bfb.md",slug:"/025",permalink:"/weekly/025",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/025.\u7cbe\u8bfb.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"24. \u7cbe\u8bfb\u300a\u73b0\u4ee3 JavaScript \u6982\u89c8\u300b",permalink:"/weekly/024"},next:{title:"26. \u7cbe\u8bfb\u52a0\u5bc6\u5a92\u4f53\u6269\u5c55\uff08Encrypted Media Extensions\uff0cEME\uff09",permalink:"/weekly/026"}},u=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u5185\u5bb9\u6982\u8981",id:"2-\u5185\u5bb9\u6982\u8981",children:[{value:"\u5927\u4e8e\u5224\u65ad",id:"\u5927\u4e8e\u5224\u65ad",children:[]},{value:"\u7b49\u4e8e\u5224\u65ad",id:"\u7b49\u4e8e\u5224\u65ad",children:[]},{value:"\u5927\u4e8e\u7b49\u4e8e\u5224\u65ad",id:"\u5927\u4e8e\u7b49\u4e8e\u5224\u65ad",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"\u5173\u4e8e toPrimitive",id:"\u5173\u4e8e-toprimitive",children:[]},{value:"\u8fd8\u6709\u4e0d\u6309\u5957\u8def\u51fa\u724c\u7684\u60c5\u51b5\uff1f",id:"\u8fd8\u6709\u4e0d\u6309\u5957\u8def\u51fa\u724c\u7684\u60c5\u51b5\uff1f",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]}],c={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274"},'"null >= 0?"')),Object(l.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408180746.png",alt:null})),Object(l.b)("p",null,"\u4f60\u662f\u5982\u4f55\u770b\u5f85 null >= 0 \u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"true")," \u8fd9\u4e2a\u7ed3\u679c\u7684\u5462\uff1f\u8981\u4e48\u9009\u62e9\u52c9\u5f3a\u63a5\u53d7\uff0c\u8981\u4e48\u8ddf\u7740\u6211\u4e00\u63a2\u7a76\u7adf\u5427\u3002"),Object(l.b)("h2",{id:"2-\u5185\u5bb9\u6982\u8981"},"2 \u5185\u5bb9\u6982\u8981"),Object(l.b)("h3",{id:"\u5927\u4e8e\u5224\u65ad"},"\u5927\u4e8e\u5224\u65ad"),Object(l.b)("p",null,"javascript \u5728\u5224\u65ad ",Object(l.b)("inlineCode",{parentName:"p"},"a > b")," \u65f6\uff0c\u8bb0\u4f4f\u4e0b\u9762 21 \u6b65\u5224\u65ad\u6cd5\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u8c03\u7528 b \u7684 ToPrimitive(hit Number) \u65b9\u6cd5."),Object(l.b)("li",{parentName:"ol"},"\u8c03\u7528 a \u7684 ToPrimitive(hit Number) \u65b9\u6cd5."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c\u6b64\u65f6 Result(1) \u4e0e Result(2) \u90fd\u662f\u5b57\u7b26\u4e32\uff0c\u8df3\u5230\u6b65\u9aa4 16."),Object(l.b)("li",{parentName:"ol"},"\u8c03\u7528 ToNumber(Result(1))."),Object(l.b)("li",{parentName:"ol"},"\u8c03\u7528 ToNumber(Result(2))."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(4) \u4e3a NaN, return undefined."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(5) \u4e3a NaN, return undefined."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(4) \u548c Result(5) \u662f\u76f8\u540c\u7684\u6570\u5b57\uff0creturn false."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(4) \u4e3a +0\uff0c Result(5) \u4e3a -0, return false."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(4) \u4e3a -0\uff0c Result(5) \u4e3a +0, return false."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(4) \u4e3a +\u221e, return false."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(5) \u4e3a +\u221e, return true."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(5) \u4e3a -\u221e, return false."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(4) \u4e3a -\u221e, return true."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(4) \u7684\u6570\u503c\u5927\u5c0f\u5c0f\u4e8e Result(5)\uff0creturn true\uff0c\u5426\u5219 return false."),Object(l.b)("li",{parentName:"ol"},'\u5982\u679c Result(2) \u662f Result(1) \u7684\u524d\u7f00 return false. \uff08\u6bd4\u5982 "ab" \u662f "abc" \u7684\u524d\u7f00\uff09'),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Result(1) \u662f Result(2) \u7684\u524d\u7f00, return true."),Object(l.b)("li",{parentName:"ol"},"\u627e\u5230\u4e00\u4e2a\u4f4d\u7f6e k\uff0c\u4f7f\u5f97 a","[k]"," \u4e0e b","[k]"," \u4e0d\u76f8\u7b49."),Object(l.b)("li",{parentName:"ol"},"\u53d6 m \u4e3a a","[k]"," \u5b57\u7b26\u7684\u6570\u503c."),Object(l.b)("li",{parentName:"ol"},"\u53d6 n \u4e3a b","[k]"," \u5b57\u7b26\u7684\u6570\u503c."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c m < n, return true\uff0c\u5426\u5219 return false.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"ToPrimitive \u4f1a\u6309\u7167\u987a\u5e8f\u4f18\u5148\u4f7f\u7528\u5b58\u5728\u7684\u503c\uff1avalueOf()\u3001toString()\uff0c\u5982\u679c\u90fd\u6ca1\u6709\uff0c\u4f1a\u629b\u51fa\u5f02\u5e38\u3002\nToPrimitive(hit Number) \u8868\u793a\u9690\u8f6c\u6570\u503c\u7c7b\u578b")),Object(l.b)("p",null,"\u6240\u4ee5 null > 0 \u7ed3\u679c\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"\u3002"),Object(l.b)("h3",{id:"\u7b49\u4e8e\u5224\u65ad"},"\u7b49\u4e8e\u5224\u65ad"),Object(l.b)("p",null,"\u73b0\u5728\u770b\u770b ",Object(l.b)("inlineCode",{parentName:"p"},"a == b")," \u65f6\u7684\u8868\u73b0\uff08\u4e09\u7b49\u53f7\u4f1a\u4e25\u683c\u5224\u65ad\u7c7b\u578b\uff0c\u4e24\u7b49\u53f7\u53cd\u800c\u662f\u6700\u590d\u6742\u7684\u60c5\u51b5\uff09\u3002"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u5982\u679c a \u4e0e b \u7684\u7c7b\u578b\u76f8\u540c\uff0c\u5219\uff1a")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5982\u679c Type(b) \u4e3a undefined\uff0creturn true."),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c Type(b) \u4e3a null\uff0creturn true."),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c Type(b) \u4e3a number\uff0c\u5219\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c b \u4e3a NaN\uff0creturn false."),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c a \u4e3a NaN\uff0creturn false."),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c a \u4e0e b \u6570\u503c\u76f8\u540c\uff0creturn true."),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c a \u4e3a +0\uff0cb \u4e3a -0\uff0creturn true."),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c a \u4e3a -0\uff0cb \u4e3a +0\uff0creturn true."),Object(l.b)("li",{parentName:"ul"},"\u5426\u5219 return false."))),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c Type(b) \u4e3a string\uff0c\u4e14 a \u4e0e b \u662f\u5b8c\u5168\u76f8\u540c\u7684\u5b57\u7b26\u4e32\uff0creturn true\uff0c\u5426\u5219 return false."),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c Type(b) \u662f boolean\uff0c\u5982\u679c\u90fd\u662f true \u6216 false\uff0creturn true\uff0c\u5426\u5219 return false."),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c a \u4e0e b \u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\u5f15\u7528\uff0creturn true\uff0c\u5426\u5219 return false.")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"\u5982\u679c a \u4e3a null\uff0cb \u4e3a undefined\uff0creturn true."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c a \u4e3a undefined\uff0cb \u4e3a null\uff0creturn true."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Type(a) \u4e3a number\uff0cType(b) \u4e3a string\uff0c\u8fd4\u56de a == ToNumber(b) \u7684\u7ed3\u679c."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Type(a) \u4e3a string\uff0cType(b) \u4e3a number\uff0c\u8fd4\u56de ToNumber(a) == b \u7684\u7ed3\u679c."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Type(a) \u4e3a boolean\uff0c\u8fd4\u56de ToNumber(a) == b \u7684\u7ed3\u679c."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Type(b) \u4e3a boolean\uff0c\u8fd4\u56de a == ToNumber(b) \u7684\u7ed3\u679c."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Type(a) \u662f string \u6216 number\uff0c\u4e14 Type(b) \u662f\u5bf9\u8c61\u7c7b\u578b\uff0c\u8fd4\u56de a == ToPrimitive(b) \u7684\u7ed3\u679c."),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Type(a) \u662f\u5bf9\u8c61\u7c7b\u578b\uff0c\u4e14 Type(b) \u662f string \u6216 number\uff0c\u8fd4\u56de ToPrimitive(a) == b \u7684\u7ed3\u679c."),Object(l.b)("li",{parentName:"ol"},"\u5426\u5219 return false.")),Object(l.b)("p",null,"\u6240\u4ee5 null == 0 \u8d70\u5230\u4e86\u7b2c 10 \u6b65\uff0c\u8fd4\u56de\u4e86\u9ed8\u8ba4\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"\u3002"),Object(l.b)("h3",{id:"\u5927\u4e8e\u7b49\u4e8e\u5224\u65ad"},"\u5927\u4e8e\u7b49\u4e8e\u5224\u65ad"),Object(l.b)("p",null,"javascript \u662f\u8fd9\u4e48\u5b9a\u4e49\u5927\u4e8e\u7b49\u4e8e\u5224\u65ad\u7684\uff1a"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5982\u679c a < b \u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5219 a >= b \u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"true"))),Object(l.b)("p",null,"\u6240\u4ee5 null >= 0 \u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"\uff0c\u56e0\u4e3a null < 0 \u662f ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(l.b)("h3",{id:"\u5173\u4e8e-toprimitive"},"\u5173\u4e8e toPrimitive"),Object(l.b)("p",null,"\u62d3\u5c55\u4e00\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"Symbol.toPrimitive")," \u5b9a\u4e49\u67d0\u4e2a class \u7684 ToPrimitive \u884c\u4e3a\uff0c\u6bd4\u5982\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"\nclass AnswerToLifeAndUniverseAndEverything {\n    [Symbol.toPrimitive](hint) {\n        if (hint === 'string') {\n            return 'Like, 42, man';\n        } else if (hint === 'number') {\n            return 42;\n        } else {\n            // when pushed, most classes (except Date)\n            // default to returning a number primitive\n            return 42;\n        }\n    }\n}\n")),Object(l.b)("h3",{id:"\u8fd8\u6709\u4e0d\u6309\u5957\u8def\u51fa\u724c\u7684\u60c5\u51b5\uff1f"},"\u8fd8\u6709\u4e0d\u6309\u5957\u8def\u51fa\u724c\u7684\u60c5\u51b5\uff1f"),Object(l.b)("p",null,"\u6309\u4e0a\u9762\u7684\u9053\u7406\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3e\u4e00\u53cd\u4e09\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"{} >= {} // true\n")),Object(l.b)("p",null,"\u53ef\u662f\u8fd9\u662f\u4e3a\u4f55\u5462\uff1f"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"null >= {} // false\n")),Object(l.b)("p",null,"\u4ed4\u7ec6\u8bfb\u8fc7\u4e0a\u6587\u5e94\u8be5\u4e0d\u96be\u53d1\u73b0\uff0c\u5982\u679c ToPrimitive(hit Number) \u51fa\u73b0\u4e86 NaN\uff0c\u5c06\u76f4\u63a5 return undefined\uff0c\u4e5f\u5c31\u662f\u6253\u5370\u51fa false\uff0c\u800c\u4e0b\u9762\u662f\u9690\u5f0f\u8f6c\u6362\u8868\uff0c{} \u7684\u7ed3\u679c\u662f NaN\uff0c\u56e0\u6b64\u7ed3\u679c\u662f false\u3002"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://camo.githubusercontent.com/c8ccc486bd441453d9c3529ed6d3b26661541787/68747470733a2f2f692e6c6f6c692e6e65742f323031372f30392f32322f353963346362316238336434632e706e67",alt:"primitive"})),Object(l.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(l.b)("p",null,"NaN \u5728 javascript \u662f\u4e2a\u7279\u6b8a\u5b58\u5728\uff0c\u53ea\u6709 ",Object(l.b)("inlineCode",{parentName:"p"},"isNaN")," \u53ef\u4ee5\u51c6\u786e\u5224\u65ad\u5230\u5b83\uff0c\u800c\u4e14\u4f7f\u7528\u5b83\u8fdb\u884c\u6bd4\u8f83\u5224\u65ad\u65f6\uff0c\u4f1a\u76f4\u63a5 return false."),Object(l.b)("p",null,"javascript \u9690\u5f0f\u8f6c\u6362\u6709\u4e00\u5957\u4f18\u5148\u7ea7\u89c4\u5219\uff0c\u800c\u4e14\u4e0d\u540c\u503c\u7684\u9690\u5f0f\u8f6c\u6362\u8fd8\u9700\u8981\u5bf9\u7167\u8868\u8bb0\u5fc6\uff0c\u8fd8\u5b58\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"ToPrimitive(hint Number)")," ",Object(l.b)("inlineCode",{parentName:"p"},"ToPrimitive(hint String)")," ",Object(l.b)("inlineCode",{parentName:"p"},"ToPrimitive(hint Boolean)")," \u4e09\u4efd\u8868\uff0c\u8bb0\u5fc6\u8d77\u6765\u786e\u5b9e\u6709\u70b9\u590d\u6742\u3002"),Object(l.b)("p",null,"\u56e0\u6b64\u63a8\u8350\u6bd4\u8f83\u5224\u65ad\u65f6\uff0c\u5c3d\u91cf\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"==="),"\uff0c\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"Typescript")," ",Object(l.b)("inlineCode",{parentName:"p"},"Flow")," \u7b49\u5f3a\u7c7b\u578b\u8bed\u8a00\u7ea6\u675f\u53d8\u91cf\u7c7b\u578b\uff0c\u5c3d\u91cf\u4e0d\u8981\u505a\u4e0d\u540c\u7c7b\u578b\u53d8\u91cf\u95f4\u7684\u6bd4\u8f83\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/36"},'"\u7cbe\u8bfb\u300anull >= 0?\u300b \xb7 Issue #36 \xb7 dt-fe/weekly"'))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}p.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),o=p(n),s=r,O=o["".concat(b,".").concat(s)]||o[s]||m[s]||l;return n?a.a.createElement(O,i(i({ref:t},c),{},{components:n})):a.a.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);