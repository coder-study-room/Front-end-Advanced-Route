(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),c=(n(0),n(468)),i={title:"84. \u7cbe\u8bfb\u300aTypescript 3.2 \u65b0\u7279\u6027\u300b",id:"084",hide_title:!0},b={unversionedId:"084",id:"084",isDocsHomePage:!1,title:"84. \u7cbe\u8bfb\u300aTypescript 3.2 \u65b0\u7279\u6027\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/084.\u7cbe\u8bfb\u300aTypescript 3.2 \u65b0\u7279\u6027\u300b.md",slug:"/084",permalink:"/weekly/084",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/084.\u7cbe\u8bfb\u300aTypescript 3.2 \u65b0\u7279\u6027\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"83. \u7cbe\u8bfb\u300aReact16 \u65b0\u7279\u6027\u300b",permalink:"/weekly/083"},next:{title:"85. \u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u667a\u80fd\u63d0\u793a\u300b",permalink:"/weekly/085"}},p=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8981",id:"2-\u6982\u8981",children:[{value:"<code>strictBindCallApply</code>",id:"strictbindcallapply",children:[]},{value:"Object spread \u7c7b\u578b\u81ea\u52a8\u5408\u5e76",id:"object-spread-\u7c7b\u578b\u81ea\u52a8\u5408\u5e76",children:[]},{value:"Object rest \u7c7b\u578b\u81ea\u52a8\u5254\u9664",id:"object-rest-\u7c7b\u578b\u81ea\u52a8\u5254\u9664",children:[]},{value:"tsconfig \u914d\u7f6e\u96c6\u6210\u652f\u6301 node_modules",id:"tsconfig-\u914d\u7f6e\u96c6\u6210\u652f\u6301-node_modules",children:[]},{value:"\u5185\u7f6e BigInt \u7c7b\u578b",id:"\u5185\u7f6e-bigint-\u7c7b\u578b",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]}],l={toc:p};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(c.b)("p",null,"Typescript 3.2 \u53d1\u5e03\u4e86\u51e0\u4e2a\u65b0\u7279\u6027\uff0c\u4e3b\u8981\u53d8\u5316\u662f\u7c7b\u578b\u68c0\u67e5\u66f4\u4e25\u683c\uff0c\u5bf9 ES6\u3001ES7 \u4e00\u4e9b\u65f6\u9ae6\u529f\u80fd\u62d3\u5c55\u4e86\u7c7b\u578b\u652f\u6301\u3002"),Object(c.b)("h2",{id:"2-\u6982\u8981"},"2 \u6982\u8981"),Object(c.b)("p",null,"\u4e0b\u9762\u6311\u4e00\u4e9b\u76f8\u5bf9\u91cd\u8981\u914d\u7f6e\u4ecb\u7ecd\u3002"),Object(c.b)("h3",{id:"strictbindcallapply"},Object(c.b)("inlineCode",{parentName:"h3"},"strictBindCallApply")),Object(c.b)("p",null,"\u5bf9 ",Object(c.b)("inlineCode",{parentName:"p"},"bind")," ",Object(c.b)("inlineCode",{parentName:"p"},"call")," ",Object(c.b)("inlineCode",{parentName:"p"},"apply")," \u66f4\u4e25\u683c\u7684\u7c7b\u578b\u68c0\u6d4b\u3002"),Object(c.b)("p",null,"\u6bd4\u5982\u5982\u4e0b\u53ef\u4ee5\u68c0\u6d4b\u51fa ",Object(c.b)("inlineCode",{parentName:"p"},"apply")," \u51fd\u6570\u53c2\u6570\u6570\u91cf\u548c\u7c7b\u578b\u7684\u9519\u8bef\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"function foo(a: number, b: string): string {\n  return a + b;\n}\n\nlet a = foo.apply(undefined, [10]); // error: too few argumnts\n")),Object(c.b)("p",null,"\u7279\u522b\u5bf9\u4e00\u4e9b ",Object(c.b)("inlineCode",{parentName:"p"},"react")," \u8001\u4ee3\u7801\uff0c\u51fd\u6570\u9700\u8981\u81ea\u5df1 ",Object(c.b)("inlineCode",{parentName:"p"},"bind(this)"),"\uff0c\u5728\u6ca1\u6709\u7528\u7bad\u5934\u51fd\u6570\u65f6\uff0c\u53ef\u80fd\u7ecf\u5e38\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"this.foo = this.foo.bind(this)"),"\uff0c\u8fd9\u65f6\u7c7b\u578b\u53ef\u80fd\u4f1a\u4e0d\u51c6\uff0c\u4f46\u5347\u7ea7\u5230 TS3.2 \u540e\uff0c\u53ef\u4ee5\u51c6\u786e\u6355\u83b7\u5230\u9519\u8bef\u4e86\u3002"),Object(c.b)("h3",{id:"object-spread-\u7c7b\u578b\u81ea\u52a8\u5408\u5e76"},"Object spread \u7c7b\u578b\u81ea\u52a8\u5408\u5e76"),Object(c.b)("p",null,"\u73b0\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Object spread")," \u7c7b\u578b\u53ef\u4ee5\u81ea\u52a8\u5408\u5e76\u4e86\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"// Returns 'T & U'\nfunction merge<T, U>(x: T, y: U) {\n  return { ...x, ...y };\n}\n")),Object(c.b)("h3",{id:"object-rest-\u7c7b\u578b\u81ea\u52a8\u5254\u9664"},"Object rest \u7c7b\u578b\u81ea\u52a8\u5254\u9664"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"const { x, y, z, ...rest } = obj;\n")),Object(c.b)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528\u4e86 Object rest \u8bed\u6cd5\u65f6\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"rest")," \u7684\u7c7b\u578b\u5176\u5b9e\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"obj")," \u7c7b\u578b\u5254\u9664\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"x")," ",Object(c.b)("inlineCode",{parentName:"p"},"y")," ",Object(c.b)("inlineCode",{parentName:"p"},"z")," \u8fd9\u4e09\u4e2a key \u7684\u7c7b\u578b\uff0c\u73b0\u5728 ts \u5df2\u7ecf\u80fd\u81ea\u52a8\u505a\u5230\u4e86\uff01"),Object(c.b)("p",null,"\u4e0b\u9762\u662f\u5b9e\u73b0\u65b9\u5f0f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"interface XYZ {\n  x: any;\n  y: any;\n  z: any;\n}\n\ntype DropXYZ<T> = Pick<T, Exclude<keyof T, keyof XYZ>>;\n\nfunction dropXYZ<T extends XYZ>(obj: T): DropXYZ<T> {\n  let { x, y, z, ...rest } = obj;\n  return rest;\n}\n")),Object(c.b)("p",null,"\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"Pick")," & ",Object(c.b)("inlineCode",{parentName:"p"},"Exclude")," \u8fbe\u5230\u5254\u9664 obj \u5c5e\u6027\u7684\u6548\u679c\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u4e4b\u524d\u7684\u7cbe\u8bfb\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/blob/master/58.%E7%B2%BE%E8%AF%BB%E3%80%8ATypescript2.0%20-%202.9%E3%80%8B.md#%E5%AF%B9%E7%B1%BB%E5%9E%8B%E4%BF%AE%E9%A5%B0%E7%9A%84%E5%A2%9E%E5%BC%BA"},"\u7cbe\u8bfb\u300aTypescript2.0 - 2.9\u300b"),"\u3002"),Object(c.b)("h3",{id:"tsconfig-\u914d\u7f6e\u96c6\u6210\u652f\u6301-node_modules"},"tsconfig \u914d\u7f6e\u96c6\u6210\u652f\u6301 node_modules"),Object(c.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u798f\u97f3\uff0c\u4ee5\u5f80\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e3a\u4e86\u7ee7\u627f\u4e00\u4e2a\u914d\u7f6e\uff0c\u6211\u4eec\u9700\u8981\u8fd9\u4e48\u5199\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "../node_modules/@my-team/tsconfig-base/tsconfig.json"\n}\n')),Object(c.b)("p",null,"TS3.2 \u5185\u7f6e\u4e86 node_modules \u89e3\u6790\uff0c\u56e0\u6b64\u5c31\u53ef\u4ee5\u66f4\u6e05\u6670\u7684\u63cf\u8ff0\u4e86\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "@my-team/tsconfig-base"\n}\n')),Object(c.b)("h3",{id:"\u5185\u7f6e-bigint-\u7c7b\u578b"},"\u5185\u7f6e BigInt \u7c7b\u578b"),Object(c.b)("p",null,"\u65b0\u589e\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"bigint")," \u7c7b\u578b\uff0c\u518d\u4e5f\u4e0d\u4f1a\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"bigint")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"number")," \u6df7\u6dc6\u4e86\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"declare let foo: number;\ndeclare let bar: bigint;\n\nfoo = bar; // error: Type 'bigint' is not assignable to type 'number'.\nbar = foo; // error: Type 'number' is not assignable to type 'bigint'.\n")),Object(c.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(c.b)("p",null,"\u8fd9\u6b21\u6539\u52a8\u610f\u56fe\u975e\u5e38\u660e\u663e\uff0c\u662f\u4e3a\u4e86\u8ddf\u4e0a JS \u7684\u65b0\u8bed\u6cd5\u3002\u968f\u7740 JS \u89c4\u8303\u53d1\u5c55\uff0cTS \u7c7b\u578b\u5fc5\u7136\u8981\u5f97\u5230\u8865\u5145\uff0c\u50cf Object spread \u4e0e Object rest \u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u5df2\u7ecf\u975e\u5e38\u666e\u904d\u4e86\uff0c\u53ca\u65f6\u5b8c\u5584\u7c7b\u578b\u652f\u6301\uff0c\u6709\u52a9\u4e8e\u5bf9\u9879\u76ee\u7c7b\u578b\u7684\u7ea6\u675f\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"strictBindCallApply")," \u57fa\u672c\u53ef\u4ee5\u7b97\u662f\u5bf9 React \u793e\u533a\u7684\u56de\u9988\u3002\u5728 React \u5f88\u65e9\u671f\u7684\u7248\u672c\u662f\u652f\u6301\u51fd\u6570\u81ea\u52a8 ",Object(c.b)("inlineCode",{parentName:"p"},"bind")," \u7684\uff0c\u540e\u6765\u89c9\u5f97\u8fc7\u4e8e magic \u5c31\u79fb\u9664\u4e86\uff0c\u7531\u4e8e\u5f53\u65f6\u6ca1\u6709\u7bad\u5934\u51fd\u6570\uff0c\u5927\u5bb6\u53ea\u597d\u5728\u8c03\u7528\u5904 ",Object(c.b)("inlineCode",{parentName:"p"},".bind(this)")," \u4e00\u4e0b\u3002"),Object(c.b)("p",null,"\u540e\u6765\u6709\u4eba\u53d1\u73b0 ",Object(c.b)("inlineCode",{parentName:"p"},".bind(this)")," \u4f1a\u5bfc\u81f4\u51fd\u6570\u5f15\u7528\u53d8\u5316\uff0c\u5bf9 Mutable \u6027\u80fd\u4f18\u5316\u4e0d\u53cb\u597d\uff0c\u6240\u4ee5\u8bb8\u591a\u4ee3\u7801\u90fd\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"constructor")," \u4f4d\u7f6e\u8fdb\u884c\u7c7b\u4f3c ",Object(c.b)("inlineCode",{parentName:"p"},"this.fooBind = this.foo.bind(this)")," \u8fd9\u6837\u7684\u8d4b\u503c\uff0c\u5982\u4eca TS3.2 \u5bf9\u8fd9\u79cd ",Object(c.b)("inlineCode",{parentName:"p"},"bind")," \u8fc7\u540e\u7684\u51fd\u6570\u4e5f\u5177\u5907\u4e86\u4e25\u683c\u7684\u7c7b\u578b\u63a8\u6d4b\uff0c\u5c06\u4f1a\u6709\u4e00\u5927\u6279\u4ee3\u7801\u4ece\u4e2d\u53d7\u76ca\u3002"),Object(c.b)("p",null,"\u987a\u5e26\u4e00\u63d0\uff0c\u6700\u8fd1 Babel 7.2.0 \u53d1\u5e03\uff0c\u4e5f\u5e26\u6765\u4e86\u4e00\u4e9b\u65b0\u7279\u6027\u652f\u6301\uff0c\u6bd4\u5982\uff1a"),Object(c.b)("p",null,"\u63d0\u524d\u652f\u6301\u79c1\u6709\u5c5e\u6027\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'class Person {\n  #age = 19;\n\n  #increaseAge() {\n    this.#age++;\n  }\n\n  birthday() {\n    this.#increaseAge();\n    alert("Happy Birthday!");\n  }\n}\n')),Object(c.b)("p",null,"\u63d0\u524d\u652f\u6301 pipleline Operator\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'const result = 2 |> double |> 3 + # |> toStringBase(2, #); // "111"\n')),Object(c.b)("p",null,"\u6574\u4e2a JS \u751f\u6001\u4e00\u7bc7\u6b23\u6b23\u5411\u8363\u7684\u666f\u8c61\u3002\u4e0d\u8fc7 TS \u5bf9 ES \u89c4\u8303\u652f\u6301\u8fd8\u662f\u6bd4\u8f83\u4fdd\u5b88\u7684\uff0c\u6bd4\u5982 Babel 6.x \u5c31\u652f\u6301\u7684 optional chain\uff0c\u73b0\u5728\u4e5f\u6ca1\u6709\u5f97\u5230\u652f\u6301\uff0c\u539f\u56e0\u662f \u201c\u7b49\u5f85\u8fdb\u5165 Stage3\u201d\u3002\u8ffd\u8e2a ISSUE \u53ef\u4ee5\u53c2\u8003\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/16"},"https://github.com/Microsoft/TypeScript/issues/16")),Object(c.b)("p",null,"\u5982\u679c\u4e0d\u6e05\u695a Stage3 \u7684\u542b\u4e49\uff0c\u53ef\u4ee5\u9605\u8bfb\u524d\u7aef\u7cbe\u8bfb\u4e4b\u524d\u7684\u4e00\u7bc7\u6587\u7ae0\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/blob/master/15.%E7%B2%BE%E8%AF%BB%20TC39%20%E4%B8%8E%20ECMAScript%20%E6%8F%90%E6%A1%88.md"},"\u7cbe\u8bfb TC39 \u4e0e ECMAScript \u63d0\u6848"),"\u3002"),Object(c.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(c.b)("p",null,"\u8fd9\u6b21\u7684\u7248\u672c\u5347\u7ea7\u51e0\u4e4e\u6ca1\u5e26\u6765\u4ec0\u4e48\u65b0\u8bed\u6cd5\uff0c\u53ea\u662f\u7eaf\u7cb9\u7684\u7c7b\u578b\u68c0\u6d4b\u80fd\u529b\u589e\u5f3a\uff0c\u6240\u4ee5\u5982\u679c\u5e0c\u671b\u8fdb\u4e00\u6b65\u63d0\u9ad8\u4ee3\u7801\u8d28\u91cf\uff0c\u5c31\u5c3d\u5feb\u5347\u7ea7\u628a\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/117"},"\u7cbe\u8bfb\u300aTypescript 3.2 \u65b0\u7279\u6027\u300b \xb7 Issue #117 \xb7 dt-fe/weekly"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(c.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")))}o.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=o(n),u=r,j=s["".concat(i,".").concat(u)]||s[u]||d[u]||c;return n?a.a.createElement(j,b(b({ref:t},l),{},{components:n})):a.a.createElement(j,b({ref:t},l))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);