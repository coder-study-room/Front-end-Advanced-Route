(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return i}));var r=n(3),l=n(7),o=(n(0),n(468)),c={title:"170. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Prototype \u539f\u578b\u6a21\u5f0f\u300b",id:"170",hide_title:!0},b={unversionedId:"170",id:"170",isDocsHomePage:!1,title:"170. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Prototype \u539f\u578b\u6a21\u5f0f\u300b",description:"Prototype\uff08\u539f\u578b\u6a21\u5f0f\uff09\u5c5e\u4e8e\u521b\u5efa\u578b\u6a21\u5f0f\uff0c\u65e2\u4e0d\u662f\u5de5\u5382\u4e5f\u4e0d\u662f\u76f4\u63a5 New\uff0c\u800c\u662f\u4ee5\u62f7\u8d1d\u7684\u65b9\u5f0f\u521b\u5efa\u5bf9\u8c61\u3002",source:"@site/weekly/170.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Prototype \u539f\u578b\u6a21\u5f0f\u300b.md",slug:"/170",permalink:"/weekly/170",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/170.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Prototype \u539f\u578b\u6a21\u5f0f\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1618195991,formattedLastUpdatedAt:"4/12/2021",sidebar:"weekly",previous:{title:"169. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Factory Method \u5de5\u5382\u65b9\u6cd5\u300b",permalink:"/weekly/169"},next:{title:"171. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Singleton \u5355\u4f8b\u6a21\u5f0f\u300b",permalink:"/weekly/171"}},a=[{value:"\u4e3e\u4f8b\u5b50",id:"\u4e3e\u4f8b\u5b50",children:[{value:"\u505a\u94a5\u5319",id:"\u505a\u94a5\u5319",children:[]},{value:"\u4e24\u79cd\u72b6\u6001\u8868",id:"\u4e24\u79cd\u72b6\u6001\u8868",children:[]},{value:"\u6a21\u7248\u7ec4\u4ef6",id:"\u6a21\u7248\u7ec4\u4ef6",children:[]}]},{value:"\u610f\u56fe\u89e3\u91ca",id:"\u610f\u56fe\u89e3\u91ca",children:[]},{value:"\u7ed3\u6784\u56fe",id:"\u7ed3\u6784\u56fe",children:[]},{value:"\u4ee3\u7801\u4f8b\u5b50",id:"\u4ee3\u7801\u4f8b\u5b50",children:[]},{value:"\u5f0a\u7aef",id:"\u5f0a\u7aef",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:a};function i(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Prototype\uff08\u539f\u578b\u6a21\u5f0f\uff09\u5c5e\u4e8e\u521b\u5efa\u578b\u6a21\u5f0f\uff0c\u65e2\u4e0d\u662f\u5de5\u5382\u4e5f\u4e0d\u662f\u76f4\u63a5 New\uff0c\u800c\u662f\u4ee5\u62f7\u8d1d\u7684\u65b9\u5f0f\u521b\u5efa\u5bf9\u8c61\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u7528\u539f\u578b\u5b9e\u4f8b\u6307\u5b9a\u521b\u5efa\u5bf9\u8c61\u7684\u79cd\u7c7b\uff0c\u5e76\u4e14\u901a\u8fc7\u62f7\u8d1d\u8fd9\u4e9b\u539f\u578b\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\u3002")),Object(o.b)("h2",{id:"\u4e3e\u4f8b\u5b50"},"\u4e3e\u4f8b\u5b50"),Object(o.b)("p",null,"\u5982\u679c\u770b\u4e0d\u61c2\u4e0a\u9762\u7684\u610f\u56fe\u4ecb\u7ecd\uff0c\u6ca1\u6709\u5173\u7cfb\uff0c\u8bbe\u8ba1\u6a21\u5f0f\u9700\u8981\u5728\u65e5\u5e38\u5de5\u4f5c\u91cc\u7528\u8d77\u6765\uff0c\u7ed3\u5408\u4f8b\u5b50\u53ef\u4ee5\u52a0\u6df1\u4f60\u7684\u7406\u89e3\uff0c\u4e0b\u9762\u6211\u51c6\u5907\u4e86\u4e09\u4e2a\u4f8b\u5b50\uff0c\u8ba9\u4f60\u4f53\u4f1a\u4ec0\u4e48\u573a\u666f\u4e0b\u4f1a\u7528\u5230\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u3002"),Object(o.b)("h3",{id:"\u505a\u94a5\u5319"},"\u505a\u94a5\u5319"),Object(o.b)("p",null,"\u5f88\u663e\u7136\uff0c\u4e3a\u4e86\u623f\u5c4b\u5b89\u5168\uff0c\u8981\u5c3d\u91cf\u505a\u5230\u4e00\u628a\u94a5\u5319\u53ea\u80fd\u5f00\u4e00\u6247\u95e8\uff0c\u6bcf\u628a\u94a5\u5319\u7ed3\u6784\u90fd\u591a\u591a\u5c11\u5c11\u4e0d\u4e00\u6837\uff0c\u5374\u53c8\u5f88\u76f8\u4f3c\uff0c\u505a\u94a5\u5319\u7684\u4eba\u6309\u7167\u4f60\u7ed9\u7684\u94a5\u5319\u4e00\u6a21\u4e00\u6837\u505a\u4e00\u4e2a\u65b0\u7684\uff0c\u8fd9\u5c5e\u4e8e\u4ec0\u4e48\u6a21\u5f0f\u5462\uff1f"),Object(o.b)("h3",{id:"\u4e24\u79cd\u72b6\u6001\u8868"},"\u4e24\u79cd\u72b6\u6001\u8868"),Object(o.b)("p",null,"\u5f53\u7f51\u7ad9\u505a\u4e0d\u505c\u673a\u7ef4\u62a4\u65f6\uff0c\u5047\u8bbe\u7ef4\u62a4\u5185\u5bb9\u662f\u7ed9\u6bcf\u4e2a\u9ad8\u7ea7\u4f1a\u5458\u8d26\u6237\u591a\u6253 100 \u5143\u73b0\u91d1\uff0c\u73b0\u5728\u9700\u8981\u6539\u6570\u636e\u5e93\u8868\u3002\u5df2\u77e5\uff1a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u8868\u6709\u51e0\u5343\u4e07\u6761\u6570\u636e\uff0c\u5176\u4e2d\u9ad8\u7ea7\u4f1a\u5458\u6709\u51e0\u5343\u4f4d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u8c03\u7528\u5df2\u7ecf\u7f13\u5b58\u5728\u4e2d\u95f4\u5c42\u4e86\uff0c\u4e14\u6570\u636e\u5e93\u5bf9\u5e94 ID \u66f4\u65b0\u540e\u5bf9\u5e94\u7f13\u5b58\u4e5f\u4f1a\u66f4\u65b0\u3002"),Object(o.b)("li",{parentName:"ol"},"\u51e0\u5343\u6761\u6570\u636e\u4fee\u6539\u8bed\u53e5\u6267\u884c\u5b8c\u9700\u8981\u51e0\u5206\u949f\uff0c\u8fd9\u51e0\u5206\u949f\u5185\u65e0\u6cd5\u63a5\u53d7\u7528\u6237\u6570\u636e\u4e0d\u540c\u6b65\u7684\u95ee\u9898\u3002")),Object(o.b)("p",null,"\u4e00\u79cd\u5e38\u89c1\u7684\u505a\u6cd5\u662f\uff0c\u6211\u4eec\u751f\u6210\u4e00\u4efd\u9ad8\u7ea7\u4f1a\u5458\u5217\u8868\u7684\u62f7\u8d1d\uff0c\u4ee3\u66ff\u6570\u636e\u5e93\u7f13\u5b58\u7684\u7ed3\u679c\uff0c\u6570\u636e\u5e93\u53ea\u8981\u8bfb\u5230\u5bf9\u5e94\u4f1a\u5458 ID \u5c31\u4ece\u62f7\u8d1d\u5217\u8868\u4e2d\u83b7\u53d6\uff0c\u6570\u636e\u8868\u65b0\u589e\u4e00\u5217\u72b6\u6001\u6807\u5fd7\uff0c\u64cd\u4f5c\u5b8c\u540e\u8fd9\u4e2a\u62f7\u8d1d\u79fb\u9664\uff0c\u66f4\u65b0\u9ad8\u7ea7\u4f1a\u5458\u7f13\u5b58\u3002"),Object(o.b)("p",null,"\u4f46\u662f\u5982\u4f55\u751f\u6210\u9ad8\u7ea7\u4f1a\u5458\u5217\u8868\u62f7\u8d1d\u5462\uff1f\u5982\u679c\u76f4\u63a5\u4ece\u51e0\u5343\u4e07\u6761\u7528\u6237\u6570\u636e\u4e2d\u91cd\u65b0\u67e5\u8be2\uff0c\u4f1a\u6709\u8f83\u9ad8\u7684\u6570\u636e\u5e93\u67e5\u8be2\u6210\u672c\u3002"),Object(o.b)("h3",{id:"\u6a21\u7248\u7ec4\u4ef6"},"\u6a21\u7248\u7ec4\u4ef6"),Object(o.b)("p",null,"\u901a\u7528\u642d\u5efa\u7cfb\u7edf\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u67d0\u4e2a\u62d6\u62fd\u5230\u9875\u9762\u7684\u533a\u5757\u8bbe\u7f6e\u4e3a \u201c\u6a21\u7248\u201d\uff0c\u8fd9\u4e2a\u6a21\u7248\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7ec4\u4ef6\u88ab\u91cd\u65b0\u62d6\u62fd\u5230\u4efb\u610f\u4e3a\u6b62\uff0c\u5b9e\u4f8b\u5316\u4efb\u610f\u6b21\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u662f\u4e00\u79cd\u5206\u6bb5\u5f0f\u590d\u5236\u7c98\u8d34\uff0c\u4f60\u4f1a\u5982\u4f55\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u5462\uff1f"),Object(o.b)("h2",{id:"\u610f\u56fe\u89e3\u91ca"},"\u610f\u56fe\u89e3\u91ca"),Object(o.b)("p",null,"\u89e3\u51b3\u4e0a\u9762\u95ee\u9898\u7684\u529e\u6cd5\u90fd\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u57fa\u4e8e\u5df2\u6709\u5bf9\u8c61\u8fdb\u884c\u590d\u5236\u5373\u53ef\uff0c\u6548\u7387\u6bd4 New \u4e00\u4e2a\uff0c\u6216\u8005\u5de5\u5382\u6a21\u5f0f\u90fd\u8981\u9ad8\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u7528\u539f\u578b\u5b9e\u4f8b\u6307\u5b9a\u521b\u5efa\u5bf9\u8c61\u7684\u79cd\u7c7b\uff0c\u5e76\u4e14\u901a\u8fc7\u62f7\u8d1d\u8fd9\u4e9b\u539f\u578b\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\u3002")),Object(o.b)("p",null,"\u6240\u8c13\u539f\u578b\u5b9e\u4f8b\uff0c\u5c31\u662f\u88ab\u9009\u4e3a\u62f7\u8d1d\u6a21\u7248\u7684\u90a3\u4e2a\u5bf9\u8c61\uff0c\u6bd4\u5982\u505a\u94a5\u5319\u4f8b\u5b50\u4e2d\uff0c\u4f60\u7ed9\u8001\u677f\u7684\u6837\u677f\u94a5\u5319\uff1b\u4e24\u79cd\u72b6\u6001\u8868\u4e2d\u7684\u5df2\u6709\u7f13\u5b58\u9ad8\u7ea7\u4f1a\u5458\u5217\u8868\uff1b\u6a21\u7248\u7ec4\u4ef6\u4e2d\u9009\u4e2d\u7684\u90a3\u4e2a\u7ec4\u4ef6\u3002\u7136\u540e\uff0c\u901a\u8fc7\u62f7\u8d1d\u8fd9\u4e9b\u539f\u578b\u521b\u5efa\u4f60\u60f3\u8981\u7684\u5bf9\u8c61\u5373\u53ef\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u62bd\u8c61\u601d\u8003\u4e00\u4e0b\uff0c\u5982\u679c\u6bcf\u628a\u94a5\u5319\u90fd\u9075\u5faa ",Object(o.b)("inlineCode",{parentName:"p"},"Prototype")," \u63a5\u53e3\uff0c\u63d0\u4f9b\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"clone()")," \u65b9\u6cd5\u4ee5\u590d\u5236\u81ea\u5df1\uff0c\u90a3\u5c31\u53ef\u4ee5\u5feb\u901f\u590d\u5236\u4efb\u610f\u4e00\u628a\u94a5\u5319\u3002\u94a5\u5319\u5de5\u5382\u53ef\u65e0\u6cd5\u89e3\u51b3\u6bcf\u628a\u94a5\u5319\u4e0d\u4e00\u6837\u7684\u95ee\u9898\uff0c\u6211\u4eec\u8981\u7684\u5c31\u662f\u548c\u67d0\u4e2a\u94a5\u5319\u4e00\u6a21\u4e00\u6837\u7684\u526f\u672c\uff0c\u590d\u5236\u4e00\u4efd\u94a5\u5319\u6700\u7b80\u5355\u3002"),Object(o.b)("p",null,"\u9ad8\u7ea7\u4f1a\u5458\u72b6\u6001\u8868\u4f8b\u5b50\u4e2d\uff0c\u67e5\u8be2\u6570\u636e\u5e93\u7684\u6210\u672c\u662f\u9ad8\u6602\u7684\uff0c\u4f46\u5982\u679c\u4ec5\u4ec5\u590d\u5236\u5df2\u7ecf\u67e5\u8be2\u597d\u7684\u5217\u8868\uff0c\u65f6\u95f4\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\uff0c\u56e0\u6b64\u6700\u7ecf\u6d4e\u7684\u65b9\u6848\u662f\u76f4\u63a5\u590d\u5236\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u5de5\u5382\u6a21\u5f0f\u91cd\u65b0\u8fde\u63a5\u6570\u636e\u5e93\u5e76\u6267\u884c\u67e5\u8be2\u3002"),Object(o.b)("p",null,"\u6a21\u7248\u7ec4\u4ef6\u66f4\u662f\u5982\u6b64\uff0c\u6211\u4eec\u6839\u672c\u6ca1\u6709\u5b9a\u4e49\u90a3\u4e48\u591a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u57fa\u7c7b\uff0c\u53ea\u8981\u6bcf\u4e2a\u7ec4\u4ef6\u63d0\u4f9b\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"clone()")," \u51fd\u6570\uff0c\u5c31\u53ef\u4ee5\u7acb\u5373\u590d\u5236\u4efb\u610f\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u8fd9\u65e0\u7591\u662f\u6700\u7ecf\u6d4e\u5b9e\u60e0\u7684\u65b9\u6848\u3002"),Object(o.b)("p",null,"\u770b\u5230\u8fd9\u91cc\uff0c\u4f60\u5e94\u8be5\u77e5\u9053\u4e86\uff0c\u539f\u578b\u6a21\u5f0f\u7684\u7cbe\u9ad3\u662f\u5bf9\u8c61\u8981\u63d0\u4f9b ",Object(o.b)("inlineCode",{parentName:"p"},"clone()")," \u65b9\u6cd5\uff0c\u800c\u8fd9\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"clone()")," \u65b9\u6cd5\u5b9e\u73b0\u96be\u5ea6\u6709\u9ad8\u6709\u4f4e\u3002"),Object(o.b)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u539f\u578b\u6a21\u5f0f\u7684\u62f7\u8d1d\u5efa\u8bae\u7528\u6df1\u62f7\u8d1d\uff0c\u6bd5\u7adf\u65b0\u5bf9\u8c61\u6700\u597d\u4e0d\u8981\u5f71\u54cd\u5230\u65e7\u5bf9\u8c61\uff0c",Object(o.b)("strong",{parentName:"p"},"\u4f46\u662f\u5728\u6df1\u62f7\u8d1d\u6027\u80fd\u95ee\u9898\u8f83\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u8003\u8651\u6df1\u6d45\u62f7\u8d1d\u7ed3\u5408\uff0c\u4e5f\u5c31\u662f\u5c06\u5728\u65b0\u5bf9\u8c61\u4e2d\uff0c\u4e0d\u4f1a\u4fee\u6539\u7684\u6570\u636e\u4f7f\u7528\u6d45\u62f7\u8d1d\uff0c\u53ef\u80fd\u88ab\u4fee\u6539\u7684\u6570\u636e\u4f7f\u7528\u6df1\u62f7\u8d1d\u3002")),Object(o.b)("h2",{id:"\u7ed3\u6784\u56fe"},"\u7ed3\u6784\u56fe"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412103300.png",alt:null})),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Client")," \u662f\u53d1\u51fa\u6307\u4ee4\u7684\u5ba2\u6237\u7aef\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"Prototype")," \u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u63cf\u8ff0\u4e86\u4e00\u4e2a\u5bf9\u8c61\u5982\u4f55\u514b\u9686\u81ea\u8eab\uff0c\u6bd4\u5982\u5fc5\u987b\u62e5\u6709 ",Object(o.b)("inlineCode",{parentName:"p"},"clone()")," \u65b9\u6cd5\uff0c\u800c ",Object(o.b)("inlineCode",{parentName:"p"},"ConcretePrototype")," \u5c31\u662f\u514b\u9686\u5177\u4f53\u7684\u5b9e\u73b0\uff0c\u4e0d\u540c\u5bf9\u8c61\u6709\u4e0d\u540c\u7684\u5b9e\u73b0\u6765\u62f7\u8d1d\u81ea\u8eab\u3002"),Object(o.b)("h2",{id:"\u4ee3\u7801\u4f8b\u5b50"},"\u4ee3\u7801\u4f8b\u5b50"),Object(o.b)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4f7f\u7528 typescript \u7f16\u5199\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"class Component implements Prototype {\n  /**\n   * \u7ec4\u4ef6\u540d\n   */\n  private name: string\n  /**\n   * \u7ec4\u4ef6\u7248\u672c\n   */\n  private version: string\n\n  /**\n   * \u62f7\u8d1d\u81ea\u8eab\n   */\n  public clone = () => {\n    // \u6784\u9020\u51fd\u6570\u7701\u7565\u4e86\uff0c\u5927\u6982\u5c31\u662f\u4f20\u9012 name \u548c version\n    return new Component(this.name, this.version)\n  }\n}\n")),Object(o.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5b9e\u73b0\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"Prototype")," \u63a5\u53e3\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," \u5fc5\u987b\u5b9e\u73b0 ",Object(o.b)("inlineCode",{parentName:"p"},"clone")," \u65b9\u6cd5\uff0c\u8fd9\u6837\u4efb\u610f\u7ec4\u4ef6\u5728\u6267\u884c\u590d\u5236\u65f6\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"clone")," \u51fd\u6570\uff0c\u800c\u4e0d\u7528\u5173\u5fc3\u6bcf\u4e2a\u7ec4\u4ef6\u4e0d\u540c\u7684\u5b9e\u73b0\u65b9\u5f0f\u4e86\u3002"),Object(o.b)("p",null,"\u4ece\u8fd9\u5c31\u80fd\u770b\u51fa\uff0c\u539f\u578b\u6a21\u5f0f\u4e0e Factory \u4e0e Builder \u6a21\u5f0f\u8fd8\u662f\u6709\u7c7b\u4f3c\u4e4b\u5904\u7684\uff0c\u5728\u9690\u85cf\u521b\u5efa\u5bf9\u8c61\u7ec6\u8282\u8fd9\u4e00\u70b9\u4e0a\u3002"),Object(o.b)("p",null,"\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8fd9\u6837\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const newComponent = oldComponent.clone()\n")),Object(o.b)("p",null,"\u8fd9\u91cc\u6709\u4e24\u4e2a\u6ce8\u610f\u70b9\uff1a\u4e00\u822c\u6765\u8bf4\uff0c",Object(o.b)("strong",{parentName:"p"},"\u5982\u679c\u8981\u4e8c\u6b21\u4fee\u6539\u751f\u6210\u7684\u5bf9\u8c61\uff0c\u4e0d\u5efa\u8bae\u7ed9 ",Object(o.b)("inlineCode",{parentName:"strong"},"clone")," \u51fd\u6570\u52a0\u53c2\u6570\uff0c\u56e0\u4e3a\u8fd9\u6837\u4f1a\u5bfc\u81f4\u63a5\u53e3\u7684\u4e0d\u4e00\u81f4\u3002")," \u6211\u4eec\u53ef\u4ee5\u4e3a\u5bf9\u8c61\u5b9e\u4f8b\u63d0\u4f9b\u4e00\u4e9b ",Object(o.b)("inlineCode",{parentName:"p"},"set")," \u51fd\u6570\u8fdb\u884c\u4e8c\u6b21\u4fee\u6539\u3002\u53e6\u5916\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"clone")," \u51fd\u6570\u8981\u8003\u8651\u6027\u80fd\uff0c\u5c31\u50cf\u524d\u9762\u8bf4\u8fc7\u7684\uff0c\u53ef\u4ee5\u8003\u8651\u6df1\u6d45\u62f7\u8d1d\u7ed3\u5408\u7684\u65b9\u5f0f\uff0c\u540c\u65f6\u8981\u6ce8\u610f\u5f53\u5bf9\u8c61\u5b58\u5728\u5f15\u7528\u5173\u7cfb\u751a\u81f3\u5faa\u73af\u5f15\u7528\u65f6\uff0c\u751a\u81f3\u4e0d\u4e00\u5b9a\u80fd\u5b9e\u73b0\u62f7\u8d1d\u51fd\u6570\u3002"),Object(o.b)("h2",{id:"\u5f0a\u7aef"},"\u5f0a\u7aef"),Object(o.b)("p",null,"\u6bcf\u4e2a\u8bbe\u8ba1\u6a21\u5f0f\u5fc5\u6709\u5f0a\u7aef\uff0c\u4f46\u5c31\u50cf\u6bcf\u4e00\u671f\u90fd\u8bf4\u7684\uff0c\u6709\u5f0a\u7aef\u4e0d\u4ee3\u8868\u8bbe\u8ba1\u6a21\u5f0f\u4e0d\u597d\u7528\uff0c\u800c\u662f\u6307\u5728\u67d0\u79cd\u573a\u666f\u559c\u7231\u5b58\u5728\u95ee\u9898\uff0c\u6211\u4eec\u53ea\u8981\u89c4\u907f\u8fd9\u4e9b\u573a\u666f\uff0c\u5728\u5408\u7406\u7684\u573a\u666f\u4f7f\u7528\u5bf9\u5e94\u8bbe\u8ba1\u6a21\u5f0f\u5373\u53ef\u3002"),Object(o.b)("p",null,"\u539f\u578b\u6a21\u5f0f\u7684\u5f0a\u7aef\uff1a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u6bcf\u4e2a\u7c7b\u90fd\u8981\u5b9e\u73b0 ",Object(o.b)("inlineCode",{parentName:"li"},"clone")," \u65b9\u6cd5\uff0c\u5bf9\u7c7b\u7684\u5b9e\u73b0\u662f\u6709\u4e00\u5b9a\u5165\u4fb5\u7684\uff0c\u8981\u4fee\u6539\u5df2\u6709\u7c7b\u65f6\uff0c\u8fdd\u80cc\u4e86\u5f00\u95ed\u539f\u5219\u3002"),Object(o.b)("li",{parentName:"ol"},"\u5f53\u7c7b\u53c8\u8c03\u7528\u4e86\u5176\u4ed6\u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u8981\u5b9e\u73b0\u6df1\u62f7\u8d1d\uff0c\u9700\u8981\u5bf9\u5e94\u5bf9\u8c61\u4e5f\u5b9e\u73b0 ",Object(o.b)("inlineCode",{parentName:"li"},"clone")," \u65b9\u6cd5\uff0c\u6574\u4f53\u94fe\u8def\u53ef\u80fd\u4f1a\u7279\u522b\u957f\uff0c\u5b9e\u73b0\u8d77\u6765\u6bd4\u8f83\u9ebb\u70e6\u3002")),Object(o.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u539f\u578b\u6a21\u5f0f\u4e00\u822c\u4e0e\u5de5\u5382\u6a21\u5f0f\u642d\u914d\u4f7f\u7528\uff0c\u4e00\u822c\u5de5\u5382\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u7b26\u5408\u539f\u578b\u6a21\u5f0f\u7684\u5b9e\u4f8b\uff0c\u5c31\u53ef\u4ee5\u8c03\u7528\u5b83\u7684 ",Object(o.b)("inlineCode",{parentName:"strong"},"clone")," \u51fd\u6570\u521b\u5efa\u8fd4\u56de\u65b0\u5bf9\u8c61\u5566\u3002")," \u4ee3\u7801\u5927\u6982\u662f\u8fd9\u6837\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"// buildComponentFactory \u5185\u90e8\u901a\u8fc7 targetComponent.clone() \u521b\u5efa\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f New \u6216\u8005\u8c03\u7528\u5176\u4ed6\u5de5\u5382\u51fd\u6570\u3002\nconst newComponent = buildComponentFactory(new Component())\n")),Object(o.b)("p",null,"\u6700\u540e\u6765\u4e00\u5f20\u56fe\u5feb\u901f\u7406\u89e3\u539f\u578b\u6a21\u5f0f\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412103317.png",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(o.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/277"},"\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Prototype \u539f\u578b\u6a21\u5f0f\u300b\xb7 Issue #277 \xb7 dt-fe/weekly"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(o.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(o.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}i.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),l=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),i=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=i(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=i(n),O=r,m=u["".concat(c,".").concat(O)]||u[O]||d[O]||o;return n?l.a.createElement(m,b(b({ref:t},p),{},{components:n})):l.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var b={};for(var a in t)hasOwnProperty.call(t,a)&&(b[a]=t[a]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var p=2;p<o;p++)c[p]=n[p];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);