(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{269:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return o}));var b=t(3),a=t(7),p=(t(0),t(385)),c={title:"62. \u7cbe\u8bfb\u300aJS \u5f15\u64ce\u57fa\u7840\u4e4b Shapes and Inline Caches\u300b",id:"062",hide_title:!0},l={unversionedId:"062",id:"062",isDocsHomePage:!1,title:"62. \u7cbe\u8bfb\u300aJS \u5f15\u64ce\u57fa\u7840\u4e4b Shapes and Inline Caches\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/062.\u7cbe\u8bfb\u300aJS \u5f15\u64ce\u57fa\u7840\u4e4b Shapes and Inline Caches\u300b.md",slug:"/062",permalink:"/weekly/062",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/062.\u7cbe\u8bfb\u300aJS \u5f15\u64ce\u57fa\u7840\u4e4b Shapes and Inline Caches\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"61. \u7cbe\u8bfb\u300aReact \u516b\u79cd\u6761\u4ef6\u6e32\u67d3\u300b",permalink:"/weekly/061"},next:{title:"63. \u7cbe\u8bfb\u300aReact \u7684\u591a\u6001\u6027\u300b",permalink:"/weekly/063"}},i=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[{value:"JS \u7684\u89e3\u91ca\u5668\u3001\u4f18\u5316\u5668",id:"js-\u7684\u89e3\u91ca\u5668\u3001\u4f18\u5316\u5668",children:[]},{value:"JS \u7684\u5bf9\u8c61\u6a21\u578b",id:"js-\u7684\u5bf9\u8c61\u6a21\u578b",children:[]},{value:"\u5c5e\u6027\u8bbf\u95ee\u6548\u7387\u4f18\u5316",id:"\u5c5e\u6027\u8bbf\u95ee\u6548\u7387\u4f18\u5316",children:[]},{value:"Transition chains \u548c Transition trees",id:"transition-chains-\u548c-transition-trees",children:[]},{value:"Inline Caches",id:"inline-caches",children:[]},{value:"\u6570\u7ec4\u5b58\u50a8\u4f18\u5316",id:"\u6570\u7ec4\u5b58\u50a8\u4f18\u5316",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"Shapes",id:"shapes-1",children:[]},{value:"Inline Caches",id:"inline-caches-1",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]},{value:"5 \u66f4\u591a\u8ba8\u8bba",id:"5-\u66f4\u591a\u8ba8\u8bba",children:[]}],r={toc:i};function o(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(b.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(p.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a",Object(p.b)("a",{parentName:"p",href:"https://mathiasbynens.be/notes/shapes-ics"},"JS \u5f15\u64ce\u57fa\u7840\u4e4b Shapes and Inline Caches")),Object(p.b)("p",null,"\u4e00\u8d77\u4e86\u89e3\u4e0b JS \u5f15\u64ce\u662f\u5982\u4f55\u8fd0\u4f5c\u7684\u5427\uff01"),Object(p.b)("p",null,"JS \u7684\u8fd0\u4f5c\u673a\u5236\u53ef\u4ee5\u5206\u4e3a AST \u5206\u6790\u3001\u5f15\u64ce\u6267\u884c\u4e24\u4e2a\u6b65\u9aa4\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185231.png",alt:null})),Object(p.b)("p",null,"JS \u6e90\u7801\u901a\u8fc7 parser\uff08\u5206\u6790\u5668\uff09\u8f6c\u5316\u4e3a AST\uff08\u62bd\u8c61\u8bed\u6cd5\u6811\uff09\uff0c\u518d\u7ecf\u8fc7 interpreter\uff08\u89e3\u91ca\u5668\uff09\u89e3\u6790\u4e3a bytecode\uff08\u5b57\u8282\u7801\uff09\u3002"),Object(p.b)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u8fd0\u884c\u6548\u7387\uff0coptimizing compiler\uff08\u4f18\u5316\u7f16\u8f91\u5668\uff09\u8d1f\u8d23\u751f\u6210 optimized code\uff08\u4f18\u5316\u540e\u7684\u673a\u5668\u7801\uff09\u3002"),Object(p.b)("p",null,"\u672c\u6587\u4e3b\u8981\u4ece AST \u4e4b\u540e\u8bf4\u8d77\u3002"),Object(p.b)("h2",{id:"2-\u6982\u8ff0"},"2 \u6982\u8ff0"),Object(p.b)("h3",{id:"js-\u7684\u89e3\u91ca\u5668\u3001\u4f18\u5316\u5668"},"JS \u7684\u89e3\u91ca\u5668\u3001\u4f18\u5316\u5668"),Object(p.b)("p",null,"JS \u4ee3\u7801\u53ef\u80fd\u5728\u5b57\u8282\u7801\u6216\u8005\u4f18\u5316\u540e\u7684\u673a\u5668\u7801\u72b6\u6001\u4e0b\u6267\u884c\uff0c\u800c\u751f\u6210\u5b57\u8282\u7801\u901f\u5ea6\u5f88\u5feb\uff0c\u800c\u751f\u6210\u673a\u5668\u7801\u5c31\u8981\u6162\u4e00\u4e9b\u4e86\u3002"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185244.png",alt:null})),Object(p.b)("p",null,"V8 \u4e5f\u7c7b\u4f3c\uff0cV8 \u5c06 interpreter \u79f0\u4e3a Ignition\uff08\u70b9\u706b\u5668\uff09\uff0c\u5c06 optimizing compiler \u79f0\u4e3a TurboFan\uff08\u6da1\u8f6e\u98ce\u6247\u53d1\u52a8\u673a\uff09\u3002"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185257.png",alt:null})),Object(p.b)("p",null,"\u53ef\u4ee5\u7406\u89e3\u4e3a\u5c06\u4ee3\u7801\u5148\u70b9\u706b\u542f\u52a8\u540e\uff0c\u9010\u6e10\u8fdb\u5165\u6da1\u8f6e\u53d1\u52a8\u673a\u63d0\u901f\u3002"),Object(p.b)("p",null,"\u4ee3\u7801\u5148\u5feb\u901f\u89e3\u6790\u6210\u53ef\u6267\u884c\u7684\u5b57\u8282\u7801\uff0c\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5229\u7528\u6267\u884c\u4e2d\u83b7\u53d6\u7684\u6570\u636e\uff08\u6bd4\u5982\u6267\u884c\u9891\u7387\uff09\uff0c\u5c06\u4e00\u4e9b\u9891\u7387\u9ad8\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u4f18\u5316\u7f16\u8bd1\u5668\u751f\u6210\u673a\u5668\u7801\u4ee5\u63d0\u901f\u3002"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185310.png",alt:null})),Object(p.b)("p",null,"\u706b\u72d0\u4f7f\u7528\u7684 Mozilla \u5f15\u64ce\u6709\u4e00\u70b9\u70b9\u4e0d\u540c\uff0c\u4f7f\u7528\u4e86\u4e24\u4e2a\u4f18\u5316\u7f16\u8bd1\u5668\uff0c\u5148\u5c06\u5b57\u8282\u7801\u4f18\u5316\u4e3a\u90e8\u5206\u673a\u5668\u7801\uff0c\u518d\u6839\u636e\u8fd9\u4e2a\u90e8\u5206\u4f18\u5316\u540e\u7684\u4ee3\u7801\u8fd0\u884c\u65f6\u62ff\u5230\u7684\u6570\u636e\u8fdb\u884c\u6700\u7ec8\u4f18\u5316\uff0c\u751f\u6210\u9ad8\u5ea6\u4f18\u5316\u7684\u673a\u5668\u7801\uff0c\u5982\u679c\u4f18\u5316\u5931\u8d25\u5c06\u4f1a\u56de\u9000\u5230\u90e8\u5206\u4f18\u5316\u7684\u673a\u5668\u7801\u3002"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"\u7b14\u8005\uff1a\u4e0d\u540c\u524d\u7aef\u5f15\u64ce\u5bf9 JS \u4f18\u5316\u65b9\u5f0f\u5927\u540c\u5c0f\u5f02\uff0c\u540e\u9762\u4f1a\u7ee7\u7eed\u5217\u4e3e\u4e0d\u540c\u524d\u7aef\u5f15\u64ce\u5728\u89e3\u6790\u5668\u3001\u7f16\u8bd1\u5668\u90e8\u5206\u4f18\u5316\u7684\u65b9\u5f0f\u3002")),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185326.png",alt:null})),Object(p.b)("p",null,"\u5fae\u8f6f\u7684 Edge \u6d4f\u89c8\u5668\uff0c\u4f7f\u7528\u7684 Chakra \u5f15\u64ce\uff0c\u4f18\u5316\u65b9\u5f0f\u4e0e Mozilla \u5f88\u50cf\uff0c\u533a\u522b\u662f\u7b2c\u4e8c\u4e2a\u6700\u7ec8\u4f18\u5316\u7684\u7f16\u8bd1\u5668\u540c\u65f6\u63a5\u6536\u5b57\u8282\u7801\u548c\u90e8\u5206\u4f18\u5316\u7684\u673a\u5668\u7801\u4ea7\u751f\u7684\u6570\u636e\uff0c\u5e76\u4e14\u5728\u4f18\u5316\u5931\u8d25\u540e\u56de\u9000\u5230\u7b2c\u4e00\u6b65\u5b57\u8282\u7801\u800c\u4e0d\u662f\u7b2c\u4e8c\u6b65\u3002"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185343.png",alt:null})),Object(p.b)("p",null,"Safari\u3001React Native \u4f7f\u7528\u7684 JSC \u5f15\u64ce\u5219\u66f4\u4e3a\u6781\u7aef\uff0c\u4f7f\u7528\u4e86\u4e09\u4e2a\u4f18\u5316\u7f16\u8bd1\u5668\uff0c\u5176\u4f18\u5316\u662f\u4e00\u6b65\u6b65\u6e10\u8fdb\u7684\uff0c\u4f18\u5316\u5931\u8d25\u540e\u90fd\u4f1a\u56de\u9000\u5230\u7b2c\u4e00\u6b65\u90e8\u5206\u4f18\u5316\u7684\u673a\u5668\u7801\u3002"),Object(p.b)("p",null,"\u4e3a\u4ec0\u4e48\u4e0d\u540c\u524d\u7aef\u5f15\u64ce\u4f1a\u4f7f\u7528\u4e0d\u540c\u7684\u4f18\u5316\u7b56\u7565\u5462\uff1f\u8fd9\u662f\u7531\u4e8e JS \u8981\u4e48\u4f7f\u7528\u89e3\u91ca\u5668\u5feb\u901f\u6267\u884c\uff08\u751f\u6210\u5b57\u8282\u7801\uff09\uff0c\u6216\u8005\u4f18\u5316\u6210\u673a\u5668\u7801\u540e\u518d\u6267\u884c\uff0c\u4f46\u4f18\u5316\u6d88\u8017\u65f6\u95f4\u7684\u5e76\u4e0d\u603b\u662f\u5c0f\u4e8e\u5b57\u8282\u7801\u4f4e\u6548\u8fd0\u884c\u635f\u8017\u7684\u65f6\u95f4\uff0c\u6240\u4ee5\u6709\u4e9b\u5f15\u64ce\u9009\u62e9\u4e86\u591a\u4e2a\u4f18\u5316\u7f16\u8bd1\u5668\uff0c\u9010\u5c42\u4f18\u5316\uff0c\u5c3d\u53ef\u80fd\u5728\u89e3\u6790\u65f6\u95f4\u4e0e\u6267\u884c\u6548\u7387\u4e2d\u627e\u5230\u4e00\u4e2a\u5e73\u8861\u70b9\u3002"),Object(p.b)("h3",{id:"js-\u7684\u5bf9\u8c61\u6a21\u578b"},"JS \u7684\u5bf9\u8c61\u6a21\u578b"),Object(p.b)("p",null,"JS \u662f\u57fa\u4e8e\u9762\u5411\u5bf9\u8c61\u7684\uff0c\u90a3\u4e48 JS \u5f15\u64ce\u662f\u5982\u4f55\u5b9e\u73b0 JS \u5bf9\u8c61\u6a21\u578b\u7684\u5462\uff1f\u4ed6\u4eec\u7528\u4e86\u54ea\u4e9b\u6280\u5de7\u52a0\u901f\u8bbf\u95ee JS \u5bf9\u8c61\u7684\u5c5e\u6027\uff1f"),Object(p.b)("p",null,"\u548c\u89e3\u6790\u5668\u3001\u4f18\u5316\u5668\u4e00\u6837\uff0c\u5927\u90e8\u5206\u4e3b\u6d41 JS \u5f15\u64ce\u5728\u5bf9\u8c61\u6a21\u578b\u5b9e\u73b0\u4e0a\u4e5f\u5f88\u7c7b\u4f3c\u3002"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185400.png",alt:null})),Object(p.b)("p",null,"ECMAScript \u89c4\u8303\u786e\u5b9a\u4e86\u5bf9\u8c61\u6a21\u578b\u5c31\u662f\u4e00\u4e2a\u4ee5\u5b57\u7b26\u4e32\u4e3a key \u7684\u5b57\u5178\uff0c\u9664\u4e86\u5176\u503c\u4ee5\u5916\uff0c\u8fd8\u5b9a\u4e49\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"Writeable")," ",Object(p.b)("inlineCode",{parentName:"p"},"Enumerable")," ",Object(p.b)("inlineCode",{parentName:"p"},"Configurable")," \u8fd9\u4e9b\u914d\u7f6e\uff0c\u8868\u793a\u8fd9\u4e2a key \u80fd\u5426\u88ab\u91cd\u5199\u3001\u904d\u5386\u8bbf\u95ee\u3001\u914d\u7f6e\u3002"),Object(p.b)("p",null,"\u867d\u7136\u89c4\u8303\u5b9a\u4e49\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"[[]]")," \u53cc\u62ec\u53f7\u7684\u5199\u6cd5\uff0c\u90a3\u8fd9\u4e0d\u4f1a\u66b4\u9732\u7ed9\u7528\u6237\uff0c\u66b4\u9732\u7ed9\u7528\u6237\u7684\u662f ",Object(p.b)("inlineCode",{parentName:"p"},"Object.getOwnPropertyDescriptor")," \u8fd9\u4e2a API\uff0c\u53ef\u4ee5\u62ff\u5230\u67d0\u4e2a\u5c5e\u6027\u7684\u914d\u7f6e\u3002"),Object(p.b)("hr",null),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u5728 JS \u4e2d\uff0c\u6570\u7ec4\u662f\u5bf9\u8c61\u7684\u7279\u6b8a\u573a\u666f"),"\uff0c\u76f8\u6bd4\u5bf9\u8c61\uff0c\u6570\u7ec4\u62e5\u6709\u7279\u5b9a\u7684\u4e0b\u6807\uff0c\u6839\u636e ECMAScript \u89c4\u8303\u89c4\u5b9a\uff0c\u6570\u7ec4\u4e0b\u6807\u7684\u957f\u5ea6\u6700\u5927\u4e3a 2\xb3\xb2\u22121\u3002\u540c\u65f6\u6570\u7ec4\u62e5\u6709 ",Object(p.b)("inlineCode",{parentName:"p"},"length")," \u5c5e\u6027\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185421.png",alt:null})),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"length")," \u53ea\u662f\u4e00\u4e2a\u4e0d\u53ef\u679a\u4e3e\u3001\u4e0d\u53ef\u914d\u7f6e\u7684\u5c5e\u6027\uff0c\u5e76\u4e14\u5728\u6570\u7ec4\u8d4b\u503c\u65f6\uff0c\u4f1a\u81ea\u52a8\u66f4\u65b0\u6570\u503c\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185437.png",alt:null})),Object(p.b)("p",null,"\u6240\u4ee5\u6570\u7ec4\u662f\u7279\u6b8a\u7684\u5bf9\u8c61\uff0c\u7ed3\u6784\u5b8c\u5168\u4e00\u81f4\u3002"),Object(p.b)("h3",{id:"\u5c5e\u6027\u8bbf\u95ee\u6548\u7387\u4f18\u5316"},"\u5c5e\u6027\u8bbf\u95ee\u6548\u7387\u4f18\u5316"),Object(p.b)("p",null,"\u5c5e\u6027\u8bbf\u95ee\u662f\u6700\u5e38\u89c1\u7684\uff0c\u6240\u4ee5 JS \u5f15\u64ce\u5fc5\u987b\u5bf9\u5c5e\u6027\u8bbf\u95ee\u505a\u4f18\u5316\u3002"),Object(p.b)("h4",{id:"shapes"},"Shapes"),Object(p.b)("p",null,"JS \u7f16\u7a0b\u4e2d\uff0c\u7ed9\u4e0d\u540c\u5bf9\u8c61\u76f8\u540c\u7684 key \u540d\u5f88\u5e38\u89c1\uff0c\u8bbf\u95ee\u4e0d\u540c\u5bf9\u8c61\u7684\u540c\u4e00\u4e2a ",Object(p.b)("inlineCode",{parentName:"p"},"propertyKey")," \u4e5f\u5f88\u5e38\u89c1\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"const object1 = { x: 1, y: 2 };\nconst object2 = { x: 3, y: 4 };\n\nfunction logX(object) {\n  console.log(object.x);\n  //          ^^^^^^^^\n}\n\nlogX(object1);\nlogX(object2);\n")),Object(p.b)("p",null,"\u8fd9\u65f6 ",Object(p.b)("inlineCode",{parentName:"p"},"object1")," \u4e0e ",Object(p.b)("inlineCode",{parentName:"p"},"object2")," \u62e5\u6709\u4e00\u4e2a\u76f8\u540c\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"shape"),"\u3002\u62ff\u62e5\u6709 ",Object(p.b)("inlineCode",{parentName:"p"},"x"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"y")," \u5c5e\u6027\u7684\u5bf9\u8c61\u6765\u770b\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185502.png",alt:null})),Object(p.b)("p",null,"\u5982\u679c\u8bbf\u95ee ",Object(p.b)("inlineCode",{parentName:"p"},"object.y"),"\uff0cJS \u5f15\u64ce\u4f1a\u5148\u627e\u5230 key ",Object(p.b)("inlineCode",{parentName:"p"},"y"),"\uff0c\u518d\u67e5\u627e ",Object(p.b)("inlineCode",{parentName:"p"},"[[value]]"),"\u3002"),Object(p.b)("p",null,"\u5982\u679c\u5c06\u5c5e\u6027\u503c\u4e5f\u5b58\u50a8\u5728 JSObject \u4e2d\uff0c\u50cf ",Object(p.b)("inlineCode",{parentName:"p"},"object1")," ",Object(p.b)("inlineCode",{parentName:"p"},"object2")," \u5c31\u4f1a\u51fa\u73b0\u8bb8\u591a\u5197\u4f59\u6570\u636e\uff0c\u56e0\u6b64\u5f15\u64ce\u5355\u72ec\u5b58\u50a8 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape"),"\uff0c\u4e0e\u771f\u5b9e\u5bf9\u8c61\u9694\u79bb\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185539.png",alt:null})),Object(p.b)("p",null,"\u8fd9\u6837\u5177\u6709\u76f8\u540c\u7ed3\u6784\u7684\u5bf9\u8c61\u53ef\u4ee5\u5171\u4eab ",Object(p.b)("inlineCode",{parentName:"p"},"Shape"),"\u3002\u6240\u6709 JS \u5f15\u64ce\u90fd\u662f\u7528\u8fd9\u79cd\u65b9\u5f0f\u4f18\u5316\u5bf9\u8c61\uff0c\u4f46\u5e76\u4e0d\u90fd\u79f0\u4e3a ",Object(p.b)("inlineCode",{parentName:"p"},"Shape"),"\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8be6\u7ec6\u7f57\u5217\u4e86\uff0c\u53ef\u4ee5\u53bb\u539f\u6587\u67e5\u770b\u5728\u5404\u5f15\u64ce\u4e2d ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u7684\u522b\u540d\u3002"),Object(p.b)("h3",{id:"transition-chains-\u548c-transition-trees"},"Transition chains \u548c Transition trees"),Object(p.b)("p",null,"\u5982\u679c\u7ed9\u4e00\u4e2a\u5bf9\u8c61\u589e\u52a0\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"key"),"\uff0cJS \u5f15\u64ce\u5982\u4f55\u751f\u6210\u65b0\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u5462\uff1f"),Object(p.b)("p",null,"\u8fd9\u79cd ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u94fe\u5f0f\u521b\u5efa\u7684\u8fc7\u7a0b\uff0c\u79f0\u4e3a Transition chains:"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185602.png",alt:null})),Object(p.b)("p",null,"\u5f00\u59cb\u521b\u5efa\u7a7a\u5bf9\u8c61\u65f6\uff0cJSObject \u548c Shape \u90fd\u662f\u7a7a\uff0c\u5f53\u4e3a ",Object(p.b)("inlineCode",{parentName:"p"},"x")," \u8d4b\u503c ",Object(p.b)("inlineCode",{parentName:"p"},"5")," \u65f6\uff0c\u5728 JSObject \u4e0b\u6807 ",Object(p.b)("inlineCode",{parentName:"p"},"0")," \u7684\u4f4d\u7f6e\u6dfb\u52a0\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"5"),"\uff0c\u5e76\u4e14 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u6307\u5411\u4e86\u62e5\u6709\u5b57\u6bb5 ",Object(p.b)("inlineCode",{parentName:"p"},"x")," \u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape(x)"),"\uff0c\u5f53\u8d4b\u503c ",Object(p.b)("inlineCode",{parentName:"p"},"y")," \u4e3a ",Object(p.b)("inlineCode",{parentName:"p"},"6")," \u65f6\uff0c\u5728 JSObject \u4e0b\u6807 ",Object(p.b)("inlineCode",{parentName:"p"},"1")," \u7684\u4f4d\u7f6e\u6dfb\u52a0\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"6"),"\uff0c\u5e76\u5c06 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u6307\u5411\u4e86\u62e5\u6709\u5b57\u6bb5 ",Object(p.b)("inlineCode",{parentName:"p"},"x")," \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"y")," \u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape(x, y)"),"\u3002"),Object(p.b)("p",null,"\u800c\u4e14\u53ef\u4ee5\u518d\u4f18\u5316\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"Shape(x, y)")," \u7531\u4e8e\u88ab ",Object(p.b)("inlineCode",{parentName:"p"},"Shape(x)")," \u6307\u5411\uff0c\u6240\u4ee5\u53ef\u4ee5\u7701\u7565 ",Object(p.b)("inlineCode",{parentName:"p"},"x")," \u8fd9\u4e2a\u5c5e\u6027\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185622.png",alt:null})),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"\u7b14\u8005\uff1a\u5f53\u7136\u8fd9\u91cc\u8bf4\u7684\u4e3b\u8981\u662f\u4f18\u5316\u6280\u5de7\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\u6765\uff0cJS \u5f15\u64ce\u5728\u505a\u67b6\u6784\u8bbe\u8ba1\u65f6\u6ca1\u6709\u8003\u8651\u4f18\u5316\u95ee\u9898\uff0c\u800c\u5728\u67b6\u6784\u8bbe\u8ba1\u5b8c\u540e\uff0c\u518d\u56de\u8fc7\u5934\u5bf9\u65f6\u95f4\u548c\u7a7a\u95f4\u8fdb\u884c\u4f18\u5316\uff0c\u8fd9\u662f\u67b6\u6784\u8bbe\u8ba1\u7684\u901a\u7528\u601d\u8def\u3002")),Object(p.b)("p",null,"\u5982\u679c\u6ca1\u6709\u8fde\u7eed\u7684\u7236 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape"),"\uff0c\u6bd4\u5982\u5206\u522b\u521b\u5efa\u4e24\u4e2a\u5bf9\u8c61\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"const object1 = {};\nobject1.x = 5;\nconst object2 = {};\nobject2.y = 6;\n")),Object(p.b)("p",null,"\u8fd9\u65f6\u8981\u901a\u8fc7 Transition trees \u6765\u4f18\u5316\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808331-64c2378c-770e-11e8-9f74-0cc41f8844b3.png",alt:"image"})),Object(p.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4e24\u4e2a ",Object(p.b)("inlineCode",{parentName:"p"},"Shape(x)")," ",Object(p.b)("inlineCode",{parentName:"p"},"Shape(y)")," \u5206\u522b\u7ee7\u627f ",Object(p.b)("inlineCode",{parentName:"p"},"Shape(empty)"),"\u3002\u5f53\u7136\u4e5f\u4e0d\u662f\u4efb\u4f55\u65f6\u5019\u90fd\u4f1a\u521b\u5efa\u7a7a ",Object(p.b)("inlineCode",{parentName:"p"},"Shape"),"\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u60c5\u51b5\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"const object1 = {};\nobject1.x = 5;\nconst object2 = { x: 6 };\n")),Object(p.b)("p",null,"\u751f\u6210\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808333-75bb1a36-770e-11e8-846a-5de14ae1fb90.png",alt:"image"})),Object(p.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u7531\u4e8e ",Object(p.b)("inlineCode",{parentName:"p"},"object2")," \u5e76\u4e0d\u662f\u4ece\u7a7a\u5bf9\u8c61\u5f00\u59cb\u7684\uff0c\u6240\u4ee5\u5e76\u4e0d\u4f1a\u4ece ",Object(p.b)("inlineCode",{parentName:"p"},"Shape(empty)")," \u5f00\u59cb\u7ee7\u627f\u3002"),Object(p.b)("h3",{id:"inline-caches"},"Inline Caches"),Object(p.b)("p",null,"\u5927\u6982\u53ef\u4ee5\u7ffb\u8bd1\u4e3a\u201c\u5c40\u90e8\u7f13\u5b58\u201d\uff0cJS \u5f15\u64ce\u4e3a\u4e86\u63d0\u9ad8\u5bf9\u8c61\u67e5\u627e\u6548\u7387\uff0c\u9700\u8981\u5728\u5c40\u90e8\u505a\u9ad8\u6548\u7f13\u5b58\u3002"),Object(p.b)("p",null,"\u6bd4\u5982\u6709\u4e00\u4e2a\u51fd\u6570 ",Object(p.b)("inlineCode",{parentName:"p"},"getX"),"\uff0c\u4ece ",Object(p.b)("inlineCode",{parentName:"p"},"o.x")," \u83b7\u53d6\u503c\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"function getX(o) {\n  return o.x;\n}\n")),Object(p.b)("p",null,"JSC \u5f15\u64ce \u751f\u6210\u7684\u5b57\u8282\u7801\u7ed3\u6784\u662f\u8fd9\u6837\u7684\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808339-851a4574-770e-11e8-8369-56253847d3be.png",alt:"image"})),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"get_by_id")," \u6307\u4ee4\u662f\u83b7\u53d6 ",Object(p.b)("inlineCode",{parentName:"p"},"arg1")," \u53c2\u6570\u6307\u5411\u7684\u5bf9\u8c61 ",Object(p.b)("inlineCode",{parentName:"p"},"x"),"\uff0c\u5e76\u5b58\u50a8\u5728 ",Object(p.b)("inlineCode",{parentName:"p"},"loc0"),"\uff0c\u7b2c\u4e8c\u6b65\u5219\u8fd4\u56de ",Object(p.b)("inlineCode",{parentName:"p"},"loc0"),"\u3002"),Object(p.b)("p",null,"\u5f53\u6267\u884c\u51fd\u6570 ",Object(p.b)("inlineCode",{parentName:"p"},"getX({ x: 'a' })")," \u65f6\uff0c\u5f15\u64ce\u4f1a\u5728 ",Object(p.b)("inlineCode",{parentName:"p"},"get_by_id")," \u6307\u4ee4\u4e2d\u7f13\u5b58\u8fd9\u4e2a\u5bf9\u8c61\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape"),"\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808343-94cea5fa-770e-11e8-8017-684f01e1ca38.png",alt:"image"})),Object(p.b)("p",null,"\u8fd9\u4e2a\u5bf9\u8c61\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u8bb0\u5f55\u4e86\u81ea\u5df1\u62e5\u6709\u7684\u5b57\u6bb5 ",Object(p.b)("inlineCode",{parentName:"p"},"x")," \u4ee5\u53ca\u5176\u5bf9\u5e94\u7684\u4e0b\u6807 ",Object(p.b)("inlineCode",{parentName:"p"},"offset"),"\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808347-99385d7a-770e-11e8-8290-0537571dd15e.png",alt:"image"})),Object(p.b)("p",null,"\u6267\u884c ",Object(p.b)("inlineCode",{parentName:"p"},"get_by_id")," \u65f6\uff0c\u5f15\u64ce\u4ece ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u67e5\u627e\u4e0b\u6807\uff0c\u627e\u5230 ",Object(p.b)("inlineCode",{parentName:"p"},"x"),"\uff0c\u8fd9\u5c31\u662f ",Object(p.b)("inlineCode",{parentName:"p"},"o.x")," \u7684\u67e5\u627e\u8fc7\u7a0b\u3002\u4f46\u4e00\u65e6\u627e\u5230\uff0c\u5f15\u64ce\u5c31\u4f1a\u5c06 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u4fdd\u5b58\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"offset")," \u7f13\u5b58\u8d77\u6765\uff0c\u4e0b\u6b21\u5f00\u59cb\u76f4\u63a5\u8df3\u8fc7 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u8fd9\u4e00\u6b65\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808350-9eb682fe-770e-11e8-951a-b6ec25ddb7a8.png",alt:"image"})),Object(p.b)("p",null,"\u4ee5\u540e\u8bbf\u95ee ",Object(p.b)("inlineCode",{parentName:"p"},"o.x")," \u65f6\uff0c\u53ea\u8981 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u76f8\u540c\uff0c\u5f15\u64ce\u76f4\u63a5\u4ece ",Object(p.b)("inlineCode",{parentName:"p"},"get_by_id")," \u6307\u4ee4\u4e2d\u7f13\u5b58\u7684\u4e0b\u6807\u4e2d\u53ef\u4ee5\u76f4\u63a5\u547d\u4e2d\u8981\u67e5\u627e\u7684\u503c\uff0c\u800c\u8fd9\u4e2a\u7f13\u5b58\u5728\u6307\u4ee4\u4e2d\u7684\u4e0b\u6807\u5c31\u662f Inline Cache."),Object(p.b)("h3",{id:"\u6570\u7ec4\u5b58\u50a8\u4f18\u5316"},"\u6570\u7ec4\u5b58\u50a8\u4f18\u5316"),Object(p.b)("p",null,"\u548c\u5bf9\u8c61\u4e00\u6837\uff0c\u6570\u7ec4\u7684\u5b58\u50a8\u4e5f\u53ef\u4ee5\u88ab\u4f18\u5316\uff0c\u800c\u7531\u4e8e\u6570\u7ec4\u7684\u7279\u6b8a\u6027\uff0c\u4e0d\u9700\u8981\u4e3a\u6bcf\u4e00\u9879\u6570\u636e\u505a\u5b8c\u6574\u7684\u914d\u7f6e\u3002"),Object(p.b)("p",null,"\u6bd4\u5982\u8fd9\u4e2a\u6570\u7ec4\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},'const array = ["#jsconfeu"];\n')),Object(p.b)("p",null,"JS \u5f15\u64ce\u540c\u6837\u901a\u8fc7 ",Object(p.b)("inlineCode",{parentName:"p"},"Shape")," \u4e0e\u6570\u636e\u5206\u79bb\u7684\u65b9\u5f0f\u5b58\u50a8\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808630-f6d6e628-7712-11e8-9e67-847d88a26eba.png",alt:"image"})),Object(p.b)("p",null,"JS \u5f15\u64ce\u5c06\u6570\u7ec4\u7684\u503c\u5355\u72ec\u5b58\u50a8\u5728 ",Object(p.b)("inlineCode",{parentName:"p"},"Elements")," \u7ed3\u6784\u4e2d\uff0c\u800c\u4e14\u5b83\u4eec\u901a\u5e38\u90fd\u662f\u53ef\u8bfb\u53ef\u914d\u7f6e\u53ef\u679a\u4e3e\u7684\uff0c\u6240\u4ee5\u5e76\u4e0d\u4f1a\u50cf\u5bf9\u8c61\u4e00\u6837\uff0c\u4e3a\u6bcf\u4e2a\u5143\u7d20\u505a\u914d\u7f6e\u3002"),Object(p.b)("p",null,"\u4f46\u5982\u679c\u662f\u8fd9\u79cd\u4f8b\u5b50\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},'// \u6c38\u8fdc\u4e0d\u8981\u8fd9\u4e48\u505a\nconst array = Object.defineProperty([], "0", {\n  value: "Oh noes!!1",\n  writable: false,\n  enumerable: false,\n  configurable: false\n});\n')),Object(p.b)("p",null,"JS \u5f15\u64ce\u4f1a\u5b58\u50a8\u4e00\u4e2a ",Object(p.b)("inlineCode",{parentName:"p"},"Dictionary Elements")," \u7c7b\u578b\uff0c\u4e3a\u6bcf\u4e2a\u6570\u7ec4\u5143\u7d20\u505a\u914d\u7f6e\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808631-fb681158-7712-11e8-9a48-62eff9659ba1.png",alt:"image"})),Object(p.b)("p",null,"\u8fd9\u6837\u6570\u7ec4\u7684\u4f18\u5316\u5c31\u6ca1\u6709\u7528\u4e86\uff0c\u540e\u7eed\u7684\u8d4b\u503c\u90fd\u4f1a\u57fa\u4e8e\u8fd9\u79cd\u6bd4\u8f83\u6d6a\u8d39\u7a7a\u95f4\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"Dictionary Elements")," \u7ed3\u6784\u3002\u6240\u4ee5\u6c38\u8fdc\u4e0d\u8981\u7528 ",Object(p.b)("inlineCode",{parentName:"p"},"Object.defineProperty")," \u64cd\u4f5c\u6570\u7ec4\u3002"),Object(p.b)("p",null,"\u901a\u8fc7\u5bf9 JS \u5f15\u64ce\u539f\u7406\u7684\u8ba4\u8bc6\uff0c\u4f5c\u8005\u603b\u7ed3\u4e86\u4e0b\u9762\u4e24\u70b9\u4ee3\u7801\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"\u5c3d\u91cf\u4ee5\u76f8\u540c\u65b9\u5f0f\u521d\u59cb\u5316\u5bf9\u8c61\uff0c\u56e0\u4e3a\u8fd9\u6837\u4f1a\u751f\u6210\u8f83\u5c11\u7684 ",Object(p.b)("inlineCode",{parentName:"li"},"Shapes"),"\u3002"),Object(p.b)("li",{parentName:"ol"},"\u4e0d\u8981\u6df7\u6dc6\u5bf9\u8c61\u7684 ",Object(p.b)("inlineCode",{parentName:"li"},"propertyKey")," \u4e0e\u6570\u7ec4\u7684\u4e0b\u6807\uff0c\u867d\u7136\u90fd\u662f\u7528\u7c7b\u4f3c\u7684\u7ed3\u6784\u5b58\u50a8\uff0c\u4f46 JS \u5f15\u64ce\u5bf9\u6570\u7ec4\u4e0b\u6807\u505a\u4e86\u989d\u5916\u4f18\u5316\u3002")),Object(p.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(p.b)("p",null,"\u8fd9\u6b21\u539f\u7406\u7cfb\u5217\u89e3\u8bfb\u662f\u9488\u5bf9 JS \u5f15\u64ce\u6267\u884c\u4f18\u5316\u8fd9\u4e2a\u70b9\u7684\uff0c\u800c\u7f51\u9875\u6e32\u67d3\u6d41\u7a0b\u5927\u81f4\u5982\u4e0b\uff1a"),Object(p.b)("p",null,Object(p.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7970947/41808251-591c475c-770d-11e8-9670-40af1c9c7066.png",alt:"image"})),Object(p.b)("p",null,"\u53ef\u4ee5\u770b\u5230 Script \u5728\u6574\u4e2a\u7f51\u9875\u89e3\u6790\u94fe\u8def\u4e2d\u4f4d\u7f6e\u662f\u6bd4\u8f83\u9760\u524d\u7684\uff0cJS \u89e3\u6790\u6548\u7387\u4f1a\u76f4\u63a5\u5f71\u54cd\u7f51\u9875\u7684\u6e32\u67d3\uff0c\u6240\u4ee5 JS \u5f15\u64ce\u901a\u8fc7\u89e3\u91ca\u5668\uff08parser\uff09\u548c\u4f18\u5316\u5668\uff08optimizing compiler\uff09\u5c3d\u53ef\u80fd\u5bf9 JS \u4ee3\u7801\u63d0\u6548\u3002"),Object(p.b)("h3",{id:"shapes-1"},"Shapes"),Object(p.b)("p",null,"\u9700\u8981\u7279\u522b\u8bf4\u660e\u7684\u662f\uff0cShapes \u5e76\u4e0d\u662f\u539f\u578b\u94fe\uff0c\u539f\u578b\u94fe\u662f\u9762\u5411\u5f00\u53d1\u8005\u7684\u6982\u5ff5\uff0c\u800c Shapes \u662f\u9762\u5411 JS \u5f15\u64ce\u7684\u6982\u5ff5\u3002"),Object(p.b)("p",null,"\u6bd4\u5982\u5982\u4e0b\u4ee3\u7801\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"const a = {};\nconst b = {};\nconst c = {};\n")),Object(p.b)("p",null,"\u663e\u7136\u5bf9\u8c61 ",Object(p.b)("inlineCode",{parentName:"p"},"a")," ",Object(p.b)("inlineCode",{parentName:"p"},"b")," ",Object(p.b)("inlineCode",{parentName:"p"},"c")," \u4e4b\u95f4\u662f\u6ca1\u6709\u5173\u8054\u7684\uff0c\u4f46\u5171\u4eab\u4e00\u4e2a Shapes\u3002"),Object(p.b)("p",null,"\u53e6\u5916\u7406\u89e3\u5f15\u64ce\u7684\u6982\u5ff5\u6709\u52a9\u4e8e\u6211\u4eec\u7ad9\u5728\u8bed\u6cd5\u5c42\u9762\u5bf9\u7acb\u9762\u7684\u89d2\u5ea6\u601d\u8003\u95ee\u9898\uff1a\u5728 JS \u5b66\u4e60\u9636\u6bb5\uff0c\u6211\u4eec\u4f1a\u6267\u7740\u4e8e\u601d\u8003\u5982\u4e0b\u51e0\u79cd\u521b\u5efa\u5bf9\u8c61\u65b9\u5f0f\u7684\u5f02\u540c\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"const a = {};\nconst b = new Object();\nconst c = new f1();\nconst d = Object.create(null);\n")),Object(p.b)("p",null,"\u6bd4\u5982\u4e0a\u9762\u56db\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u8981\u7406\u89e3\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\uff0c\u7528\u4f55\u79cd\u65b9\u5f0f\u521b\u5efa\u5bf9\u8c61\u6027\u80fd\u6700\u4f18\u3002"),Object(p.b)("p",null,"\u4f46\u7ad9\u5728 JS \u5f15\u64ce\u4f18\u5316\u89d2\u5ea6\u53bb\u8003\u8651\uff0cJS \u5f15\u64ce\u66f4\u5e0c\u671b\u6211\u4eec\u90fd\u901a\u8fc7 ",Object(p.b)("inlineCode",{parentName:"p"},"const a = {}")," \u8fd9\u79cd\u770b\u4f3c\u6700\u6ca1\u6709\u96be\u5ea6\u7684\u65b9\u5f0f\u521b\u5efa\u5bf9\u8c61\uff0c\u56e0\u4e3a\u53ef\u4ee5\u5171\u4eab Shape\u3002\u800c\u4e0e\u5176\u4ed6\u65b9\u5f0f\u6df7\u5408\u4f7f\u7528\uff0c\u53ef\u80fd\u5728\u903b\u8f91\u4e0a\u505a\u5230\u4e86\u4f18\u5316\uff0c\u4f46\u963b\u788d\u4e86 JS \u5f15\u64ce\u505a\u81ea\u52a8\u4f18\u5316\uff0c\u53ef\u80fd\u4f1a\u5f97\u4e0d\u507f\u5931\u3002"),Object(p.b)("h3",{id:"inline-caches-1"},"Inline Caches"),Object(p.b)("p",null,"\u5bf9\u8c61\u7ea7\u522b\u7684\u4f18\u5316\u5df2\u7ecf\u5f88\u6781\u81f4\u4e86\uff0c\u5de5\u7a0b\u4ee3\u7801\u4e2d\u4e5f\u6ca1\u6709\u673a\u4f1a\u5e2e\u52a9 JS \u5f15\u64ce\u505a\u5f97\u66f4\u597d\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\u4e0d\u8981\u5bf9\u6570\u7ec4\u4f7f\u7528 ",Object(p.b)("inlineCode",{parentName:"p"},"Object")," \u5bf9\u8c61\u4e0b\u7684\u65b9\u6cd5\uff0c\u5c24\u5176\u662f ",Object(p.b)("inlineCode",{parentName:"p"},"defineProperty"),"\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u8ba9 JS \u5f15\u64ce\u5728\u5b58\u50a8\u6570\u7ec4\u5143\u7d20\u65f6\uff0c\u4f7f\u7528 ",Object(p.b)("inlineCode",{parentName:"p"},"Dictionary Elements")," \u7ed3\u6784\u66ff\u4ee3 ",Object(p.b)("inlineCode",{parentName:"p"},"Elements"),"\uff0c\u800c ",Object(p.b)("inlineCode",{parentName:"p"},"Elements")," \u7ed3\u6784\u662f\u5171\u4eab ",Object(p.b)("inlineCode",{parentName:"p"},"PropertyDescriptor")," \u7684\u3002"),Object(p.b)("p",null,"\u4f46\u4e5f\u6709\u96be\u4ee5\u907f\u514d\u7684\u60c5\u51b5\uff0c\u6bd4\u5982\u4f7f\u7528 ",Object(p.b)("inlineCode",{parentName:"p"},"Object.defineProperty")," \u76d1\u542c\u6570\u7ec4\u53d8\u5316\u65f6\uff0c\u5c31\u4e0d\u5f97\u4e0d\u7834\u574f JS \u5f15\u64ce\u6e32\u67d3\u4e86\u3002"),Object(p.b)("p",null,"\u7b14\u8005\u5199 ",Object(p.b)("a",{parentName:"p",href:"https://github.com/dobjs/dob"},"dob")," \u7684\u65f6\u5019\uff0c\u4f7f\u7528 ",Object(p.b)("inlineCode",{parentName:"p"},"proxy")," \u76d1\u542c\u6570\u7ec4\u53d8\u5316\uff0c\u8fd9\u5e76\u4e0d\u4f1a\u6539\u53d8 ",Object(p.b)("inlineCode",{parentName:"p"},"Elements")," \u7684\u7ed3\u6784\uff0c\u6240\u4ee5\u8fd9\u4e5f\u4ece\u53e6\u4e00\u4e2a\u4fa7\u9762\u8bc1\u660e\u4e86\u4f7f\u7528 ",Object(p.b)("inlineCode",{parentName:"p"},"proxy")," \u76d1\u542c\u5bf9\u8c61\u53d8\u5316\u6bd4 ",Object(p.b)("inlineCode",{parentName:"p"},"Object.defineProperty")," \u66f4\u4f18\uff0c\u56e0\u4e3a ",Object(p.b)("inlineCode",{parentName:"p"},"Object.defineProperty")," \u4f1a\u7834\u574f JS \u5f15\u64ce\u5bf9\u6570\u7ec4\u505a\u7684\u4f18\u5316\u3002"),Object(p.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(p.b)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86 JS \u5f15\u64ce\u4e24\u4e2a\u6982\u5ff5\uff1a ",Object(p.b)("inlineCode",{parentName:"p"},"Shapes")," \u4e0e ",Object(p.b)("inlineCode",{parentName:"p"},"Inline Caches"),"\uff0c\u901a\u8fc7\u8ba4\u8bc6 JS \u5f15\u64ce\u7684\u4f18\u5316\u65b9\u5f0f\uff0c\u5728\u7f16\u7a0b\u4e2d\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u4ef6\u4e8b\uff1a"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"\u5c3d\u91cf\u4ee5\u76f8\u540c\u65b9\u5f0f\u521d\u59cb\u5316\u5bf9\u8c61\uff0c\u56e0\u4e3a\u8fd9\u6837\u4f1a\u751f\u6210\u8f83\u5c11\u7684 ",Object(p.b)("inlineCode",{parentName:"li"},"Shapes"),"\u3002"),Object(p.b)("li",{parentName:"ol"},"\u4e0d\u8981\u6df7\u6dc6\u5bf9\u8c61\u7684 ",Object(p.b)("inlineCode",{parentName:"li"},"propertyKey")," \u4e0e\u6570\u7ec4\u7684\u4e0b\u6807\uff0c\u867d\u7136\u90fd\u662f\u7528\u7c7b\u4f3c\u7684\u7ed3\u6784\u5b58\u50a8\uff0c\u4f46 JS \u5f15\u64ce\u5bf9\u6570\u7ec4\u4e0b\u6807\u505a\u4e86\u989d\u5916\u4f18\u5316\u3002")),Object(p.b)("h2",{id:"5-\u66f4\u591a\u8ba8\u8bba"},"5 \u66f4\u591a\u8ba8\u8bba"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(p.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/91"},"\u7cbe\u8bfb\u300aJS \u5f15\u64ce\u57fa\u7840\u4e4b Shapes and Inline Caches\u300b \xb7 Issue #91 \xb7 dt-fe/weekly"))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(p.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002")))}o.isMDXComponent=!0},385:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return d}));var b=t(0),a=t.n(b);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);n&&(b=b.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,b)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,b,a=function(e,n){if(null==e)return{};var t,b,a={},p=Object.keys(e);for(b=0;b<p.length;b++)t=p[b],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(b=0;b<p.length;b++)t=p[b],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=a.a.createContext({}),o=function(e){var n=a.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},j=function(e){var n=o(e.components);return a.a.createElement(r.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,b=e.mdxType,p=e.originalType,c=e.parentName,r=i(e,["components","mdxType","originalType","parentName"]),j=o(t),m=b,d=j["".concat(c,".").concat(m)]||j[m]||O[m]||p;return t?a.a.createElement(d,l(l({ref:n},r),{},{components:t})):a.a.createElement(d,l({ref:n},r))}));function d(e,n){var t=arguments,b=n&&n.mdxType;if("string"==typeof e||b){var p=t.length,c=new Array(p);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var r=2;r<p;r++)c[r]=t[r];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);