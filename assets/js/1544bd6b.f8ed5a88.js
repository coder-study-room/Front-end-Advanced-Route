(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),l=(n(0),n(467)),c={title:"172. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Adapter \u9002\u914d\u5668\u6a21\u5f0f\u300b",id:"172",hide_title:!0},p={unversionedId:"172",id:"172",isDocsHomePage:!1,title:"172. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Adapter \u9002\u914d\u5668\u6a21\u5f0f\u300b",description:"Adapter\uff08\u9002\u914d\u5668\u6a21\u5f0f\uff09\u5c5e\u4e8e\u7ed3\u6784\u578b\u6a21\u5f0f\uff0c\u522b\u540d wrapper\uff0c\u7ed3\u6784\u6027\u6a21\u5f0f\u5173\u6ce8\u7684\u662f\u5982\u4f55\u7ec4\u5408\u7c7b\u4e0e\u5bf9\u8c61\uff0c\u4ee5\u83b7\u5f97\u66f4\u5927\u7684\u7ed3\u6784\uff0c\u6211\u4eec\u5e73\u5e38\u5de5\u4f5c\u5927\u90e8\u5206\u65f6\u95f4\u90fd\u5728\u4e0e\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u6253\u4ea4\u9053\u3002",source:"@site/weekly/172.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Adapter \u9002\u914d\u5668\u6a21\u5f0f\u300b.md",slug:"/172",permalink:"/weekly/172",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/172.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Adapter \u9002\u914d\u5668\u6a21\u5f0f\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617963167,formattedLastUpdatedAt:"4/9/2021",sidebar:"weekly",previous:{title:"171. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Singleton \u5355\u4f8b\u6a21\u5f0f\u300b",permalink:"/weekly/171"},next:{title:"173. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Bridge \u6865\u63a5\u6a21\u5f0f\u300b",permalink:"/weekly/173"}},b=[{value:"\u4e3e\u4f8b\u5b50",id:"\u4e3e\u4f8b\u5b50",children:[{value:"\u63a5\u53e3\u8f6c\u6362\u5668",id:"\u63a5\u53e3\u8f6c\u6362\u5668",children:[]},{value:"\u6570\u636e\u5e93 ORM",id:"\u6570\u636e\u5e93-orm",children:[]},{value:"API Deprecated",id:"api-deprecated",children:[]}]},{value:"\u610f\u56fe\u89e3\u91ca",id:"\u610f\u56fe\u89e3\u91ca",children:[]},{value:"\u7ed3\u6784\u56fe",id:"\u7ed3\u6784\u56fe",children:[]},{value:"\u4ee3\u7801\u4f8b\u5b50",id:"\u4ee3\u7801\u4f8b\u5b50",children:[]},{value:"\u5f0a\u7aef",id:"\u5f0a\u7aef",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],i={toc:b};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Adapter\uff08\u9002\u914d\u5668\u6a21\u5f0f\uff09\u5c5e\u4e8e\u7ed3\u6784\u578b\u6a21\u5f0f\uff0c\u522b\u540d ",Object(l.b)("inlineCode",{parentName:"p"},"wrapper"),"\uff0c\u7ed3\u6784\u6027\u6a21\u5f0f\u5173\u6ce8\u7684\u662f\u5982\u4f55\u7ec4\u5408\u7c7b\u4e0e\u5bf9\u8c61\uff0c\u4ee5\u83b7\u5f97\u66f4\u5927\u7684\u7ed3\u6784\uff0c\u6211\u4eec\u5e73\u5e38\u5de5\u4f5c\u5927\u90e8\u5206\u65f6\u95f4\u90fd\u5728\u4e0e\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u6253\u4ea4\u9053\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u5c06\u4e00\u4e2a\u7c7b\u7684\u63a5\u53e3\u8f6c\u6362\u6210\u5ba2\u6237\u5e0c\u671b\u7684\u53e6\u4e00\u4e2a\u63a5\u53e3\u3002Adapter \u6a21\u5f0f\u4f7f\u5f97\u539f\u672c\u7531\u4e8e\u63a5\u53e3\u4e0d\u517c\u5bb9\u800c\u4e0d\u80fd\u5728\u4e00\u8d77\u5de5\u4f5c\u7684\u90a3\u4e9b\u7c7b\u53ef\u4ee5\u4e00\u8d77\u5de5\u4f5c\u3002")),Object(l.b)("p",null,"\u8fd9\u4e2a\u8bbe\u8ba1\u6a21\u5f0f\u7684\u610f\u56fe\u5f88\u597d\u61c2\uff0c\u5c31\u662f\u628a\u63a5\u53e3\u4e0d\u517c\u5bb9\u95ee\u9898\u62b9\u5e73\u3002\u6ce8\u610f\uff0c\u4e5f\u4ec5\u4ec5\u80fd\u89e3\u51b3\u63a5\u53e3\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\uff0c\u800c\u4e0d\u80fd\u89e3\u51b3\u529f\u80fd\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u3002"),Object(l.b)("h2",{id:"\u4e3e\u4f8b\u5b50"},"\u4e3e\u4f8b\u5b50"),Object(l.b)("p",null,"\u5982\u679c\u770b\u4e0d\u61c2\u4e0a\u9762\u7684\u610f\u56fe\u4ecb\u7ecd\uff0c\u6ca1\u6709\u5173\u7cfb\uff0c\u8bbe\u8ba1\u6a21\u5f0f\u9700\u8981\u5728\u65e5\u5e38\u5de5\u4f5c\u91cc\u7528\u8d77\u6765\uff0c\u7ed3\u5408\u4f8b\u5b50\u53ef\u4ee5\u52a0\u6df1\u4f60\u7684\u7406\u89e3\uff0c\u4e0b\u9762\u6211\u51c6\u5907\u4e86\u4e09\u4e2a\u4f8b\u5b50\uff0c\u8ba9\u4f60\u4f53\u4f1a\u4ec0\u4e48\u573a\u666f\u4e0b\u4f1a\u7528\u5230\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u3002"),Object(l.b)("h3",{id:"\u63a5\u53e3\u8f6c\u6362\u5668"},"\u63a5\u53e3\u8f6c\u6362\u5668"),Object(l.b)("p",null,"\u63d2\u5ea7\u7684\u79cd\u7c7b\u5f88\u591a\uff0c\u6211\u4eec\u90fd\u7528\u8fc7\u8bb8\u591a\u9002\u914d\u5668\uff0c\u5c06\u4e0d\u540c\u7684\u63d2\u5934\u8fdb\u884c\u8f6c\u6362\uff0c\u53ef\u4ee5\u5728\u4e0d\u66ff\u6362\u63d2\u5ea7\u7684\u60c5\u51b5\u4e0b\u6b63\u5e38\u4f7f\u7528\u3002"),Object(l.b)("p",null,"USB \u63a5\u53e3\u8f6c\u6362\u4e5f\u540c\u6837\u7cbe\u5f69\uff0c\u6709\u5c06 TypeC \u63a5\u53e3\u8f6c\u6362\u4e3a TypeA \u7684\uff0c\u4e5f\u6709\u5c06 TypeA \u63a5\u53e3\u8f6c\u6362\u4e3a TypeC \u7684\uff0c\u652f\u6301\u53cc\u5411\u8f6c\u6362\u3002"),Object(l.b)("p",null,"\u63a5\u53e3\u8f6c\u6362\u5668\u5c31\u662f\u6211\u4eec\u5728\u751f\u6d3b\u4e2d\u4f7f\u7528\u5230\u7684\u9002\u914d\u5668\u6a21\u5f0f\uff0c\u56e0\u4e3a\u5382\u5546\u5e76\u6ca1\u6709\u751f\u4ea7\u4e00\u4e2a\u65b0\u7684\u63d2\u5ea7\uff0c\u6211\u4eec\u4e5f\u6ca1\u6709\u56e0\u4e3a\u63a5\u53e3\u4e0d\u9002\u914d\u800c\u6362\u4e00\u4e2a\u624b\u673a\uff0c\u4e00\u5207\u53ea\u9700\u8981\u4e00\u4e2a\u63a5\u53e3\u8f6c\u6362\u5668\u5373\u53ef\uff0c\u8fd9\u5c31\u662f\u8fd0\u7528\u8bbe\u8ba1\u6a21\u5f0f\u7684\u6536\u76ca\u3002"),Object(l.b)("h3",{id:"\u6570\u636e\u5e93-orm"},"\u6570\u636e\u5e93 ORM"),Object(l.b)("p",null,"ORM \u5c4f\u853d\u4e86 SQL \u8fd9\u4e00\u5c42\uff0c\u5e26\u6765\u7684\u597d\u5904\u662f\u4e0d\u9700\u8981\u7406\u89e3\u4e0d\u540c SQL \u8bed\u6cd5\u4e4b\u95f4\u7684\u533a\u522b\uff0c\u5bf9\u4e8e\u901a\u7528\u529f\u80fd\uff0cORM \u4f1a\u6839\u636e\u4e0d\u540c\u7684\u5e73\u53f0\uff0c\u6bd4\u5982 Postgresql\u3001Mysql \u8fdb\u884c SQL \u7684\u8f6c\u6362\u3002"),Object(l.b)("p",null,"\u5bf9 ORM \u6765\u8bf4\uff0c\u5c4f\u853d\u4e0d\u540c\u5e73\u53f0\u7684\u5dee\u5f02\uff0c\u5c31\u662f\u5229\u7528\u9002\u914d\u5668\u6a21\u5f0f\u505a\u5230\u7684\u3002"),Object(l.b)("h3",{id:"api-deprecated"},"API Deprecated"),Object(l.b)("p",null,"\u5f53\u4e00\u4e2a\u5e7f\u6cdb\u4f7f\u7528\u7684\u5e93\u8fdb\u884c\u4e86\u542b\u6709 break change \u7684\u5347\u7ea7\u65f6\uff0c\u5f80\u5f80\u8981\u7559\u7ed9\u5f00\u53d1\u8005\u8db3\u591f\u7684\u65f6\u95f4\u53bb\u5347\u7ea7\uff0c\u800c\u4e0d\u80fd\u5347\u7ea7\u540e\u5c31\u76f4\u63a5\u6302\u6389\uff0c\u56e0\u6b64\u88ab\u5e9f\u5f03\u7684 API \u8981\u6807\u8bb0\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"deprecated"),"\uff0c\u800c\u8fd9\u79cd\u88ab\u5e9f\u5f03\u6807\u8bb0\u7684 API \u7684\u5b9e\u9645\u5b9e\u73b0\uff0c\u5f80\u5f80\u662f\u4f7f\u7528\u65b0\u7684 API \u66ff\u4ee3\uff0c\u8fd9\u79cd\u573a\u666f\u6b63\u662f\u4f7f\u7528\u4e86\u9002\u914d\u5668\u6a21\u5f0f\uff0c\u5c06\u65b0\u7684 API \u9002\u914d\u5230\u65e7\u7684 API\uff0c\u5b9e\u73b0 API Deprecated\u3002"),Object(l.b)("h2",{id:"\u610f\u56fe\u89e3\u91ca"},"\u610f\u56fe\u89e3\u91ca"),Object(l.b)("p",null,"\u4e0a\u9762\u4e09\u4e2a\u4f8b\u5b50\u90fd\u6ee1\u8db3\u4e0b\u9762\u4e24\u4e2a\u6761\u4ef6\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"API \u4e0d\u517c\u5bb9\uff1a\u56e0\u4e3a\u63a5\u53e3\u7684\u4e0d\u540c\uff1b\u6570\u636e\u5e93 SQL \u8bed\u6cd5\u7684\u4e0d\u540c\uff1b\u6846\u67b6 API \u7684\u4e0d\u540c\u3002"),Object(l.b)("li",{parentName:"ol"},"\u4f46\u80fd\u529b\u5df2\u652f\u6301\uff1a\u63d2\u5ea7\u90fd\u62e5\u6709\u5145\u7535\u6216\u8bfb\u53d6\u80fd\u529b\uff1b\u4e0d\u540c\u7684 SQL \u90fd\u62e5\u6709\u67e5\u8be2\u6570\u636e\u5e93\u80fd\u529b\uff1b\u65b0 API \u8986\u76d6\u4e86\u65e7 API \u7684\u80fd\u529b\u3002")),Object(l.b)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7\u9002\u914d\u5668\u6ee1\u8db3 Adapter \u7684\u610f\u56fe\uff1a"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u5c06\u4e00\u4e2a\u7c7b\u7684\u63a5\u53e3\u8f6c\u6362\u6210\u5ba2\u6237\u5e0c\u671b\u7684\u53e6\u4e00\u4e2a\u63a5\u53e3\u3002Adapter \u6a21\u5f0f\u4f7f\u5f97\u539f\u672c\u7531\u4e8e\u63a5\u53e3\u4e0d\u517c\u5bb9\u800c\u4e0d\u80fd\u5728\u4e00\u8d77\u5de5\u4f5c\u7684\u90a3\u4e9b\u7c7b\u53ef\u4ee5\u4e00\u8d77\u5de5\u4f5c\u3002")),Object(l.b)("h2",{id:"\u7ed3\u6784\u56fe"},"\u7ed3\u6784\u56fe"),Object(l.b)("p",null,"\u9002\u914d\u5668\u7684\u5b9e\u73b0\u5206\u4e3a\u7ee7\u627f\u4e0e\u7ec4\u5408\u6a21\u5f0f\u3002"),Object(l.b)("p",null,"\u4e0b\u9762\u662f\u540d\u8bcd\u89e3\u91ca\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Adapter")," \u9002\u914d\u5668\uff0c\u628a ",Object(l.b)("inlineCode",{parentName:"li"},"Adeptee")," \u9002\u914d\u6210 ",Object(l.b)("inlineCode",{parentName:"li"},"Target"),"\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Adaptee")," \u88ab\u9002\u914d\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u4e0d\u517c\u5bb9\u7684\u63a5\u53e3\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Target")," \u9002\u914d\u4e3a\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u9700\u8981\u7528\u7684\u63a5\u53e3\u3002")),Object(l.b)("p",null,"\u7ee7\u627f\uff1a"),Object(l.b)("img",{width:"500",src:"https://img.alicdn.com/tfs/TB1iy7Gk4vbeK8jSZPfXXariXXa-1590-518.png"}),Object(l.b)("p",null,"\u9002\u914d\u5668\u7ee7\u627f ",Object(l.b)("inlineCode",{parentName:"p"},"Adaptee")," \u5e76\u5b9e\u73b0 ",Object(l.b)("inlineCode",{parentName:"p"},"Target"),"\uff0c\u9002\u7528\u573a\u666f\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"Adaptee")," \u4e0e ",Object(l.b)("inlineCode",{parentName:"p"},"Target")," \u7ed3\u6784\u7c7b\u4f3c\u7684\u60c5\u51b5\uff0c\u56e0\u4e3a\u8fd9\u6837\u53ea\u9700\u8981\u5b9e\u73b0\u90e8\u5206\u5dee\u5f02\u5316\u5373\u53ef\u3002"),Object(l.b)("p",null,"\u7ec4\u5408\uff1a"),Object(l.b)("img",{width:"500",src:"https://img.alicdn.com/tfs/TB1SrW21EY1gK0jSZFMXXaWcVXa-1524-500.png"}),Object(l.b)("p",null,"\u7ec4\u5408\u7684\u62d3\u5c55\u6027\u66f4\u5f3a\uff0c\u4f46\u5de5\u4f5c\u91cf\u66f4\u5927\uff0c\u5982\u679c ",Object(l.b)("inlineCode",{parentName:"p"},"Target")," \u4e0e ",Object(l.b)("inlineCode",{parentName:"p"},"Adaptee")," \u7ed3\u6784\u5dee\u5f02\u8f83\u5927\uff0c\u9002\u5408\u7528\u7ec4\u5408\u6a21\u5f0f\u3002"),Object(l.b)("h2",{id:"\u4ee3\u7801\u4f8b\u5b50"},"\u4ee3\u7801\u4f8b\u5b50"),Object(l.b)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4f7f\u7528 typescript \u7f16\u5199\u3002"),Object(l.b)("p",null,"\u7ee7\u627f\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"interface ITarget {\n  // \u6807\u51c6\u65b9\u5f0f\u662f hello\n  hello: () => void\n}\n\nclass Adaptee {\n  // \u8981\u88ab\u9002\u914d\u7684\u7c7b\u65b9\u6cd5\u53eb sayHello\n  sayHello() {\n    console.log('hello')\n  }\n}\n\n// \u9002\u914d\u5668\u7ee7\u627f Adaptee \u5e76\u5b9e\u73b0 ITarget\nclass Adapter extends Adaptee implements ITarget {\n  hello() {\n    // \u7528 sayHello \u5bf9\u63a5\u5230 hello\n    super.sayHello()\n  }\n}\n")),Object(l.b)("p",null,"\u7ec4\u5408\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"interface ITarget {\n  // \u6807\u51c6\u65b9\u5f0f\u662f hello\n  hello: () => void\n}\n\nclass Adaptee {\n  // \u8981\u88ab\u9002\u914d\u7684\u7c7b\u65b9\u6cd5\u53eb sayHello\n  sayHello() {\n    console.log('hello')\n  }\n}\n\n// \u9002\u914d\u5668\u7ee7\u627f Adaptee \u5e76\u5b9e\u73b0 ITarget\nclass Adapter implements ITarget {\n  private adaptee: Adaptee \n\n  constructor(adaptee: Adaptee) {\n    this.adaptee = adaptee\n  }\n\n  hello() {\n    // \u7528 adaptee.sayHello \u5bf9\u63a5\u5230 hello\n    this.adaptee.sayHello()\n  }\n}\n")),Object(l.b)("h2",{id:"\u5f0a\u7aef"},"\u5f0a\u7aef"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u4f7f\u7528\u9002\u914d\u5668\u6a21\u5f0f\u672c\u8eab\u5c31\u53ef\u80fd\u662f\u4e2a\u95ee\u9898"),"\uff0c\u56e0\u4e3a\u4e00\u4e2a\u597d\u7684\u7cfb\u7edf\u5185\u90e8\u4e0d\u5e94\u8be5\u505a\u4efb\u4f55\u4fa8\u754c\uff0c\u6a21\u578b\u5e94\u8be5\u4fdd\u6301\u4e00\u81f4\u6027\u3002\u53ea\u6709\u5728\u5982\u4e0b\u60c5\u51b5\u624d\u8003\u8651\u4f7f\u7528\u9002\u914d\u5668\u6a21\u5f0f\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u65b0\u8001\u7cfb\u7edf\u63a5\u66ff\uff0c\u6539\u9020\u6210\u672c\u975e\u5e38\u9ad8\u3002"),Object(l.b)("li",{parentName:"ol"},"\u4e09\u65b9\u5305\u9002\u914d\u3002"),Object(l.b)("li",{parentName:"ol"},"\u65b0\u65e7 API \u517c\u5bb9\u3002"),Object(l.b)("li",{parentName:"ol"},"\u7edf\u4e00\u591a\u4e2a\u7c7b\u7684\u63a5\u53e3\u3002\u4e00\u822c\u53ef\u4ee5\u7ed3\u5408\u5de5\u5382\u65b9\u6cd5\u4f7f\u7528\u3002")),Object(l.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(l.b)("p",null,"\u9002\u914d\u5668\u6a21\u5f0f\u4e5f\u7b26\u5408\u5f00\u95ed\u539f\u5219\uff0c\u5728\u4e0d\u5bf9\u539f\u6709\u5bf9\u8c61\u6539\u9020\u7684\u524d\u63d0\u4e0b\uff0c\u6784\u9020\u4e00\u4e2a\u9002\u914d\u5668\u5c31\u80fd\u5b8c\u6210\u6a21\u5757\u8854\u63a5\u3002"),Object(l.b)("p",null,"\u9002\u914d\u5668\u6a21\u5f0f\u7684\u5b9e\u73b0\u5206\u4e3a\u7c7b\u4e0e\u5bf9\u8c61\u6a21\u5f0f\uff0c\u7c7b\u6a21\u5f0f\u7528\u7ee7\u627f\uff0c\u5bf9\u8c61\u6a21\u5f0f\u7528\u7ec4\u5408\uff0c\u5206\u522b\u9002\u7528\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"Adaptee")," \u4e0e ",Object(l.b)("inlineCode",{parentName:"p"},"Target")," \u7ed3\u6784\u76f8\u4f3c\u4e0e\u7ed3\u6784\u5dee\u5f02\u8f83\u5927\u7684\u573a\u666f\uff0c\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0c\u7ec4\u5408\u6a21\u5f0f\u90fd\u662f\u7075\u6d3b\u6027\u6700\u9ad8\u7684\u3002"),Object(l.b)("p",null,"\u6700\u540e\u7528\u4e00\u5f20\u56fe\u6982\u62ec\u4e00\u4e0b\u9002\u914d\u5668\u6a21\u5f0f\u7684\u601d\u7ef4\uff1a"),Object(l.b)("img",{width:"500",src:"https://img.alicdn.com/tfs/TB16L2n1AY2gK0jSZFgXXc5OFXa-1254-630.png"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/279"},"\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Adapter \u9002\u914d\u5668\u6a21\u5f0f\u300b\xb7 Issue #279 \xb7 dt-fe/weekly"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(l.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(l.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}o.isMDXComponent=!0},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=o(n),O=r,s=d["".concat(c,".").concat(O)]||d[O]||u[O]||l;return n?a.a.createElement(s,p(p({ref:t},i),{},{components:n})):a.a.createElement(s,p({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=O;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);