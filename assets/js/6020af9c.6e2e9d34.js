(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return i}));var r=n(3),c=n(7),a=(n(0),n(468)),b={title:"167. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Abstract Factory \u62bd\u8c61\u5de5\u5382\u300b",id:"167",hide_title:!0},o={unversionedId:"167",id:"167",isDocsHomePage:!1,title:"167. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Abstract Factory \u62bd\u8c61\u5de5\u5382\u300b",description:"Abstract Factory\uff08\u62bd\u8c61\u5de5\u5382\uff09\u5c5e\u4e8e\u521b\u5efa\u578b\u6a21\u5f0f\uff0c\u5de5\u5382\u7c7b\u6a21\u5f0f\u62bd\u8c61\u7a0b\u5ea6\u4ece\u4f4e\u5230\u9ad8\u5206\u4e3a\uff1a\u7b80\u5355\u5de5\u5382\u6a21\u5f0f -> \u5de5\u5382\u6a21\u5f0f -> \u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u3002",source:"@site/weekly/167.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Abstract Factory \u62bd\u8c61\u5de5\u5382\u300b.md",slug:"/167",permalink:"/weekly/167",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/167.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Abstract Factory \u62bd\u8c61\u5de5\u5382\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1618195991,formattedLastUpdatedAt:"4/12/2021",sidebar:"weekly",previous:{title:"166. \u7cbe\u8bfb\u300aBI \u642d\u5efa - \u7b5b\u9009\u6761\u4ef6\u300b",permalink:"/weekly/166"},next:{title:"168. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Builder \u751f\u6210\u5668\u300b",permalink:"/weekly/168"}},l=[{value:"\u4e3e\u4f8b\u5b50",id:"\u4e3e\u4f8b\u5b50",children:[{value:"\u6c7d\u8f66\u5de5\u5382",id:"\u6c7d\u8f66\u5de5\u5382",children:[]},{value:"\u8ff7\u5bab\u6e38\u620f",id:"\u8ff7\u5bab\u6e38\u620f",children:[]},{value:"\u4e8b\u4ef6\u8054\u52a8",id:"\u4e8b\u4ef6\u8054\u52a8",children:[]}]},{value:"\u610f\u56fe\u89e3\u91ca",id:"\u610f\u56fe\u89e3\u91ca",children:[]},{value:"\u7ed3\u6784\u56fe",id:"\u7ed3\u6784\u56fe",children:[]},{value:"\u4ee3\u7801\u4f8b\u5b50",id:"\u4ee3\u7801\u4f8b\u5b50",children:[]},{value:"\u5f0a\u7aef",id:"\u5f0a\u7aef",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:l};function i(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Abstract Factory\uff08\u62bd\u8c61\u5de5\u5382\uff09\u5c5e\u4e8e\u521b\u5efa\u578b\u6a21\u5f0f\uff0c\u5de5\u5382\u7c7b\u6a21\u5f0f\u62bd\u8c61\u7a0b\u5ea6\u4ece\u4f4e\u5230\u9ad8\u5206\u4e3a\uff1a\u7b80\u5355\u5de5\u5382\u6a21\u5f0f -> \u5de5\u5382\u6a21\u5f0f -> \u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u63d0\u4f9b\u4e00\u4e2a\u63a5\u53e3\u4ee5\u521b\u5efa\u4e00\u7cfb\u5217\u76f8\u5173\u6216\u76f8\u4e92\u4f9d\u8d56\u7684\u5bf9\u8c61\uff0c\u800c\u65e0\u987b\u6307\u5b9a\u5b83\u4eec\u5177\u4f53\u7684\u7c7b\u3002")),Object(a.b)("h2",{id:"\u4e3e\u4f8b\u5b50"},"\u4e3e\u4f8b\u5b50"),Object(a.b)("p",null,"\u5982\u679c\u770b\u4e0d\u61c2\u4e0a\u9762\u7684\u610f\u56fe\u4ecb\u7ecd\uff0c\u6ca1\u6709\u5173\u7cfb\uff0c\u8bbe\u8ba1\u6a21\u5f0f\u9700\u8981\u5728\u65e5\u5e38\u5de5\u4f5c\u91cc\u7528\u8d77\u6765\uff0c\u7ed3\u5408\u4f8b\u5b50\u53ef\u4ee5\u52a0\u6df1\u4f60\u7684\u7406\u89e3\uff0c\u4e0b\u9762\u6211\u51c6\u5907\u4e86\u4e09\u4e2a\u4f8b\u5b50\uff0c\u8ba9\u4f60\u4f53\u4f1a\u4ec0\u4e48\u573a\u666f\u4e0b\u4f1a\u7528\u5230\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u3002"),Object(a.b)("h3",{id:"\u6c7d\u8f66\u5de5\u5382"},"\u6c7d\u8f66\u5de5\u5382"),Object(a.b)("p",null,"\u6211\u4eec\u90fd\u77e5\u9053\u6c7d\u8f66\u6709\u5f88\u591a\u96f6\u90e8\u4ef6\uff0c\u968f\u7740\u5de5\u4e1a\u9769\u547d\u5e26\u6765\u7684\u5206\u5de5\uff0c\u5f88\u591a\u96f6\u4ef6\u90fd\u53ef\u4ee5\u88ab\u8f7b\u677e\u66ff\u6362\u3002\u4f46\u5b9e\u9645\u751f\u6d3b\u4e2d\u6211\u4eec\u6d88\u8d39\u8005\u4e0d\u613f\u610f\u8fd9\u6837\uff0c\u6211\u4eec\u5e0c\u671b\u4e70\u6765\u7684\u5b9d\u9a6c\u8f66\u6240\u5305\u542b\u7684\u96f6\u90e8\u4ef6\u90fd\u662f\u540c\u4e00\u7cfb\u5217\u7684\uff0c\u4ee5\u4fdd\u8bc1\u6700\u5927\u7684\u5339\u914d\u5ea6\uff0c\u4ece\u800c\u5e26\u6765\u66f4\u597d\u7684\u6027\u80fd\u4e0e\u8212\u9002\u5ea6\u3002"),Object(a.b)("p",null,"\u6240\u4ee5\u6d88\u8d39\u8005\u4e0d\u613f\u610f\u5230\u8f6e\u80ce\u5de5\u5382\u3001\u65b9\u5411\u76d8\u5de5\u5382\u3001\u8f66\u7a97\u5de5\u5382\u53bb\u4e00\u4e2a\u4e2a\u91c7\u8d2d\uff0c\u800c\u662f\u5c06\u9700\u6c42\u63d0\u7ed9\u4e86\u5b9d\u9a6c\u5de5\u5382\u8fd9\u5bb6\u62bd\u8c61\u5de5\u5382\uff0c\u7531\u8fd9\u5bb6\u5de5\u5382\u8d1f\u8d23\u7ec4\u88c5\u3002\u90a3\u4f60\u662f\u8fd9\u5bb6\u5de5\u5382\u7684\u8001\u677f\uff0c\u5df2\u77e5\u6c7d\u8f66\u7684\u7ec4\u6210\u90e8\u4ef6\u662f\u56fa\u5b9a\u7684\uff0c\u53ea\u662f\u4e0d\u540c\u914d\u4ef6\u6709\u4e0d\u540c\u7684\u578b\u53f7\uff0c\u5206\u522b\u6765\u81ea\u4e0d\u540c\u7684\u5236\u9020\u5382\u5546\uff0c\u4f60\u9700\u8981\u63a8\u51fa\u51e0\u6b3e\u4e0d\u540c\u7ec4\u5408\u7684\u8f66\u578b\u6765\u6ee1\u8db3\u4e0d\u540c\u4ef7\u4f4d\u7684\u6d88\u8d39\u8005\uff0c\u4f60\u4f1a\u600e\u4e48\u8bbe\u8ba1\uff1f"),Object(a.b)("h3",{id:"\u8ff7\u5bab\u6e38\u620f"},"\u8ff7\u5bab\u6e38\u620f"),Object(a.b)("p",null,"\u4f60\u505a\u4e00\u6b3e\u8ff7\u5bab\u6e38\u620f\uff0c\u5df2\u77e5\u5143\u7d20\u6709\u623f\u95f4\u3001\u95e8\u3001\u5899\uff0c\u4ed6\u4eec\u4e4b\u95f4\u7684\u7ec4\u5408\u5173\u7cfb\u662f\u56fa\u5b9a\u7684\uff0c\u4f60\u901a\u8fc7\u4e00\u5957\u7b97\u6cd5\u751f\u6210\u968f\u673a\u8ff7\u5bab\uff0c\u8fd9\u5957\u7b97\u6cd5\u8c03\u7528\u623f\u95f4\u3001\u95e8\u3001\u5899\u7684\u5de5\u5382\u751f\u6210\u5bf9\u5e94\u7684\u5b9e\u4f8b\u3002\u4f46\u968f\u7740\u65b0\u8d44\u6599\u7247\u7684\u653e\u51fa\uff0c\u4f60\u9700\u8981\u751f\u6210\u5177\u6709\u65b0\u529f\u80fd\u7684\u623f\u95f4\uff08\u53ef\u4ee5\u56de\u590d\u4f53\u529b\uff09\u3001\u65b0\u529f\u80fd\u7684\u95e8\uff08\u9700\u8981\u9b54\u6cd5\u94a5\u5319\u624d\u80fd\u6253\u5f00\uff09\u3001\u65b0\u529f\u80fd\u7684\u5899\uff08\u53ef\u4ee5\u88ab\u70b8\u5f39\u7834\u574f\uff09\uff0c\u4f46\u4fee\u6539\u5df2\u6709\u7684\u8ff7\u5bab\u751f\u6210\u7b97\u6cd5\u8fdd\u80cc\u4e86\u5f00\u95ed\u539f\u5219\uff08\u9700\u8981\u5728\u5df2\u6709\u5bf9\u8c61\u8fdb\u884c\u4fee\u6539\uff09\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u751f\u6210\u8ff7\u5bab\u7684\u7b97\u6cd5\u5b8c\u5168\u4e0d\u611f\u77e5\u65b0\u6750\u6599\u7684\u5b58\u5728\uff0c\u4f60\u4f1a\u600e\u4e48\u8bbe\u8ba1\uff1f"),Object(a.b)("h3",{id:"\u4e8b\u4ef6\u8054\u52a8"},"\u4e8b\u4ef6\u8054\u52a8"),Object(a.b)("p",null,"\u5047\u8bbe\u6211\u4eec\u505a\u4e00\u4e2a\u524d\u7aef\u642d\u5efa\u5f15\u64ce\uff0c\u73b0\u5728\u5e0c\u671b\u505a\u4e00\u5957\u5173\u8054\u673a\u5236\uff0c\u4ee5\u5b9e\u73b0\u70b9\u51fb\u8868\u683c\u7ec4\u4ef6\u5355\u5143\u683c\uff0c\u53ef\u4ee5\u5f39\u51fa\u4e00\u4e2a\u6a21\u6001\u6846\uff0c\u5185\u90e8\u5c55\u793a\u4e00\u4e2a\u6298\u7ebf\u56fe\u3002\u5df2\u77e5\u4e1a\u52a1\u65b9\u5b58\u5728\u5b9a\u5236\u8868\u683c\u7ec4\u4ef6\u3001\u6a21\u6001\u6846\u7ec4\u4ef6\u3001\u6298\u7ebf\u56fe\u7ec4\u4ef6\u7684\u9700\u6c42\uff0c\u4f46\u7ec4\u4ef6\u4e4b\u95f4\u8054\u52a8\u5173\u7cfb\u662f\u786e\u5b9a\u7684\uff0c\u4f60\u4f1a\u600e\u4e48\u8bbe\u8ba1\uff1f"),Object(a.b)("h2",{id:"\u610f\u56fe\u89e3\u91ca"},"\u610f\u56fe\u89e3\u91ca"),Object(a.b)("p",null,"\u5728\u6c7d\u8f66\u5de5\u5382\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5df2\u77e5\u8f66\u5b50\u7684\u6784\u6210\u90e8\u4ef6\uff0c",Object(a.b)("strong",{parentName:"p"},"\u4e3a\u4e86\u7ec4\u88c5\u6210\u4e00\u8f86\u8f66\u5b50\uff0c\u9700\u8981\u4ee5\u4e00\u5b9a\u65b9\u5f0f\u62fc\u88c5\u90e8\u4ef6\uff0c\u800c\u5177\u4f53\u7528\u4ec0\u4e48\u90e8\u4ef6\u662f\u9700\u8981\u53ef\u62d3\u5c55\u7684"),"\u3002"),Object(a.b)("p",null,"\u5728\u8ff7\u5bab\u6e38\u620f\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5df2\u77e5\u8ff7\u5bab\u7684\u7ec4\u6210\u90e8\u5206\u662f\u623f\u95f4\u3001\u95e8\u3001\u5899\uff0c",Object(a.b)("strong",{parentName:"p"},"\u4e3a\u4e86\u751f\u6210\u4e00\u4e2a\u8ff7\u5bab\uff0c\u9700\u8981\u4ee5\u67d0\u79cd\u7b97\u6cd5\u751f\u6210\u8bb8\u591a\u623f\u95f4\u3001\u95e8\u3001\u5899\u7684\u5b9e\u4f8b\uff0c\u800c\u5177\u4f53\u7528\u54ea\u79cd\u623f\u95f4\u3001\u54ea\u79cd\u95e8\u3001\u54ea\u79cd\u5899\u662f\u8fd9\u4e2a\u7b97\u6cd5\u4e0d\u5173\u5fc3\u7684\uff0c\u662f\u9700\u8981\u53ef\u88ab\u62d3\u5c55\u7684"),"\u3002"),Object(a.b)("p",null,"\u5728\u4e8b\u4ef6\u8054\u52a8\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5df2\u77e5\u8fd9\u4e2a\u8868\u683c\u5f39\u51fa\u8d8b\u52bf\u56fe\u7684\u4ea4\u4e92\u573a\u666f\u57fa\u672c\u7ec4\u6210\u5143\u7d20\u662f\u8868\u683c\u7ec4\u4ef6\u3001\u6a21\u6001\u6846\u7ec4\u4ef6\u3001\u6298\u7ebf\u56fe\u7ec4\u4ef6\uff0c",Object(a.b)("strong",{parentName:"p"},"\u9700\u8981\u4ee5\u67d0\u79cd\u8054\u52a8\u673a\u5236\u8ba9\u8fd9\u4e09\u8005\u95f4\u4ea7\u751f\u8054\u52a8\u5173\u7cfb\uff0c\u800c\u5177\u4f53\u662f\u4ec0\u4e48\u8868\u683c\u3001\u4ec0\u4e48\u6a21\u6001\u6846\u7ec4\u4ef6\u3001\u4ec0\u4e48\u6298\u7ebf\u56fe\u7ec4\u4ef6\u662f\u8fd9\u4e2a\u4e8b\u4ef6\u8054\u52a8\u6240\u4e0d\u5173\u5fc3\u7684\uff0c\u662f\u9700\u8981\u53ef\u4ee5\u88ab\u62d3\u5c55\u7684"),"\uff0c\u8868\u683c\u53ef\u4ee5\u88ab\u66ff\u6362\u4e3a\u4efb\u610f\u4e1a\u52a1\u65b9\u6ce8\u518c\u7684\u8868\u683c\uff0c\u53ea\u8981\u6ee1\u8db3\u70b9\u51fb ",Object(a.b)("inlineCode",{parentName:"p"},"onClick")," \u673a\u5236\u5c31\u53ef\u4ee5\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u63d0\u4f9b\u4e00\u4e2a\u63a5\u53e3\u4ee5\u521b\u5efa\u4e00\u7cfb\u5217\u76f8\u5173\u6216\u76f8\u4e92\u4f9d\u8d56\u7684\u5bf9\u8c61\uff0c\u800c\u65e0\u987b\u6307\u5b9a\u5b83\u4eec\u5177\u4f53\u7684\u7c7b\u3002"))),Object(a.b)("p",null,"\u8fd9\u4e09\u4e2a\u4f8b\u5b50\u4e0d\u6b63\u662f\u7b26\u5408\u4e0a\u9762\u7684\u610f\u56fe\u5417\uff1f\u6211\u4eec\u8981\u8bbe\u8ba1\u7684\u62bd\u8c61\u5de5\u5382\u5c31\u662f\u8981 ",Object(a.b)("strong",{parentName:"p"},"\u521b\u5efa\u4e00\u7cfb\u5217\u76f8\u5173\u6216\u76f8\u4e92\u4f9d\u8d56\u7684\u5bf9\u8c61"),"\uff0c\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u5206\u522b\u662f\u6c7d\u8f66\u7684\u7ec4\u6210\u914d\u4ef6\u3001\u8ff7\u5bab\u6e38\u620f\u7684\u7d20\u6750\u3001\u4e8b\u4ef6\u8054\u52a8\u7684\u7ec4\u4ef6\u3002",Object(a.b)("strong",{parentName:"p"},"\u800c\u65e0\u987b\u6307\u5b9a\u5b83\u4eec\u5177\u4f53\u7684\u7c7b"),"\uff0c\u4e5f\u5c31\u8bf4\u660e\u4e86\u6211\u4eec\u4e0d\u5173\u5fc3\u8f66\u5b50\u65b9\u5411\u76d8\u7528\u7684\u662f\u4ec0\u4e48\u724c\u5b50\uff0c\u8ff7\u5bab\u7684\u623f\u95f4\u662f\u4e0d\u662f\u666e\u901a\u623f\u95f4\uff0c\u8054\u52a8\u673a\u5236\u7684\u6298\u7ebf\u56fe\u662f\u4e0d\u662f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"Echarts")," \u753b\u7684\uff0c\u6211\u4eec\u53ea\u8981\u63cf\u8ff0\u597d\u4ed6\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u5373\u53ef\uff0c",Object(a.b)("strong",{parentName:"p"},"\u8fd9\u5e26\u6765\u7684\u597d\u5904\u662f\uff0c\u672a\u6765\u6211\u4eec\u62d3\u5c55\u65b0\u7684\u65b9\u5411\u76d8\u3001\u65b0\u7684\u623f\u95f4\u3001\u65b0\u7684\u6298\u7ebf\u56fe\u65f6\uff0c\u4e0d\u9700\u8981\u4fee\u6539\u62bd\u8c61\u5de5\u5382\u3002")),Object(a.b)("h2",{id:"\u7ed3\u6784\u56fe"},"\u7ed3\u6784\u56fe"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412103045.png",alt:null})),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AbstractFactory")," \u5c31\u662f\u6211\u4eec\u8981\u7684\u62bd\u8c61\u5de5\u5382\uff0c\u63cf\u8ff0\u4e86\u521b\u5efa\u4ea7\u54c1\u7684\u62bd\u8c61\u5173\u7cfb\uff0c\u6bd4\u5982\u63cf\u8ff0\u8ff7\u5bab\u5982\u4f55\u751f\u6210\uff0c\u8868\u683c\u548c\u8d8b\u52bf\u56fe\u600e\u4e48\u8054\u52a8\u3002"),Object(a.b)("p",null,"\u81f3\u4e8e\u5177\u4f53\u7528\u4ec0\u4e48\u65b9\u5411\u76d8\u3001\u7528\u4ec0\u4e48\u623f\u95f4\uff0c\u662f\u7531 ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactory")," \u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u80fd\u6709\u591a\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactory"),"\uff0c\u6bd4\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactory1")," \u5b9e\u4f8b\u5316\u7684\u5899\u58c1\u662f\u666e\u901a\u5899\u58c1\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactory2")," \u5b9e\u4f8b\u5316\u7684\u5899\u58c1\u662f\u9b54\u6cd5\u5899\u58c1\uff0c\u4f46\u5176\u5bf9 ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractFactory")," \u7684\u63a5\u53e3\u662f\u4e00\u81f4\u7684\uff0c\u6240\u4ee5 ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractFactory")," \u4e0d\u9700\u8981\u5173\u5fc3\u5177\u4f53\u8c03\u7528\u7684\u662f\u54ea\u4e00\u4e2a\u5de5\u5382\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AbstractProduct")," \u662f\u4ea7\u54c1\u62bd\u8c61\u7c7b\uff0c\u63cf\u8ff0\u4e86\u6bd4\u5982\u65b9\u5411\u76d8\u3001\u5899\u58c1\u3001\u6298\u7ebf\u56fe\u7684\u521b\u5efa\u65b9\u6cd5\uff0c\u800c ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteProduct")," \u662f\u5177\u4f53\u5b9e\u73b0\u4ea7\u54c1\u7684\u65b9\u6cd5\uff0c\u6bd4\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteProduct1")," \u521b\u5efa\u7684\u8868\u683c\u662f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"canvas")," \u753b\u7684\uff0c\u6298\u7ebf\u56fe\u662f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"G2")," \u753b\u7684\uff0c\u800c ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteProduct2")," \u521b\u5efa\u7684\u8868\u683c\u662f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"div")," \u753b\u7684\uff0c\u6298\u7ebf\u56fe\u662f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"Echarts")," \u753b\u7684\u3002"),Object(a.b)("p",null,"\u8fd9\u6837\uff0c\u5f53\u6211\u4eec\u8981\u62d3\u5c55\u4e00\u4e2a\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"Rcharts")," \u753b\u7684\u6298\u7ebf\u56fe\uff0c\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"svg")," \u753b\u7684\u8868\u683c\uff0c\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"div")," \u753b\u7684\u6a21\u6001\u6846\u7ec4\u6210\u7684\u4e8b\u4ef6\u673a\u5236\u65f6\uff0c\u53ea\u9700\u8981\u518d\u521b\u5efa\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactory3")," \u505a\u76f8\u5e94\u7684\u5b9e\u73b0\u5373\u53ef\uff0c\u518d\u5c06\u8fd9\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactory3")," \u4f20\u9012\u7ed9 ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractFactory"),"\uff0c\u5e76\u4e0d\u9700\u8981\u4fee\u6539 ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractFactory")," \u65b9\u6cd5\u672c\u8eab\u3002"),Object(a.b)("h2",{id:"\u4ee3\u7801\u4f8b\u5b50"},"\u4ee3\u7801\u4f8b\u5b50"),Object(a.b)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4f7f\u7528 javascript \u7f16\u5199\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"class AbstractFactory {\n  createProducts(concreteFactory: ConcreteFactory) {\n    const productA = concreteFactory.createProductA();\n    const productB = concreteFactory.createProductB();\n\n    // \u5efa\u7acb A \u4e0e B \u56fa\u5b9a\u7684\u5173\u8054\uff0c\u5373\u4fbf A \u4e0e B \u5b9e\u73b0\u6362\u6210\u4efb\u610f\u5b9e\u73b0\u90fd\u4e0d\u53d7\u5f71\u54cd\n    productA.bind(productB);\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"productA.bind(productB)")," \u662f\u4e00\u79cd\u62bd\u8c61\u8868\u793a\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6c7d\u8f66\u5de5\u5382\u7684\u4f8b\u5b50\uff0c\u8868\u793a\u7ec4\u88c5\u6c7d\u8f66\u7684\u8fc7\u7a0b\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8ff7\u5bab\u6e38\u620f\u7684\u4f8b\u5b50\uff0c\u8868\u793a\u751f\u6210\u8ff7\u5bab\u7684\u8fc7\u7a0b\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e8b\u4ef6\u8054\u52a8\u7684\u4f8b\u5b50\uff0c\u8868\u793a\u521b\u5efa\u7ec4\u4ef6\u95f4\u5173\u8054\u7684\u8fc7\u7a0b\u3002")),Object(a.b)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684\u8ff7\u5bab\u6709\u4e24\u5957\u7d20\u6750\uff0c\u5206\u522b\u662f\u666e\u901a\u7d20\u6750\u4e0e\u9b54\u6cd5\u7d20\u6750\uff0c\u53ea\u8981\u5728\u5206\u522b\u521b\u5efa\u666e\u901a\u7d20\u6750\u5de5\u5382 ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactoryA"),"\uff0c\u4e0e\u9b54\u6cd5\u7d20\u6750\u5de5\u5382 ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactoryB"),"\uff0c\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"createProducts")," \u65f6\u4f20\u5165\u7684\u662f\u666e\u901a\u7d20\u6750\uff0c\u5219\u4ea7\u51fa\u7684\u5c31\u662f\u666e\u901a\u7d20\u6750\u642d\u5efa\u7684\u8ff7\u5bab\uff0c\u4f20\u5165\u7684\u662f\u9b54\u6cd5\u7d20\u6750\uff0c\u5219\u4ea7\u51fa\u7684\u5c31\u662f\u7528\u9b54\u6cd5\u7d20\u6750\u642d\u5efa\u7684\u8ff7\u5bab\u3002"),Object(a.b)("p",null,"\u5f53\u6211\u4eec\u8981\u521b\u5efa\u4e00\u5957\u65b0\u8ff7\u5bab\u6750\u6599\uff0c\u6bd4\u5982\u7194\u5ca9\u8ff7\u5bab\uff0c\u6211\u4eec\u53ea\u8981\u521b\u5efa\u4e00\u5957\u7194\u5ca9\u7d20\u6750\uff08\u7194\u5ca9\u623f\u95f4\u3001\u7194\u5ca9\u95e8\u3001\u7194\u5ca9\u5899\u58c1\uff09\uff0c\u518d\u7ec4\u88c5\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactoryC")," \u7194\u5ca9\u7d20\u6750\u751f\u6210\u5de5\u5382\u4f20\u9012\u7ed9 ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractFactory.createProducts")," \u5373\u53ef\u3002"),Object(a.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff0c\u4f7f\u7528\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u62d3\u5c55\u65b0\u7684\u7d20\u6750\uff0c\u6bd4\u5982\u62d3\u5c55\u4e00\u5957\u65b0\u7684\u6c7d\u8f66\u914d\u4ef6\uff0c\u62d3\u5c55\u4e00\u5957\u65b0\u7684\u8ff7\u5bab\u7d20\u6750\uff0c\u62d3\u5c55\u4e00\u5957\u65b0\u7684\u4e8b\u4ef6\u8054\u52a8\u7ec4\u4ef6\uff0c",Object(a.b)("strong",{parentName:"p"},"\u8fd9\u4e2a\u8fc7\u7a0b\u53ea\u9700\u8981\u65b0\u5efa\u7c7b\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u4fee\u6539\u4efb\u4f55\u7c7b\uff0c\u7b26\u5408\u5f00\u95ed\u539f\u5219"),"\u3002"),Object(a.b)("h2",{id:"\u5f0a\u7aef"},"\u5f0a\u7aef"),Object(a.b)("p",null,"\u4efb\u4f55\u8bbe\u8ba1\u6a21\u5f0f\u90fd\u6709\u5176\u9002\u7528\u573a\u666f\uff0c\u53cd\u8fc7\u6765\u4e5f\u8bf4\u660e\u4e86\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u4e0d\u9002\u7528\u3002"),Object(a.b)("p",null,"\u8fd8\u662f\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5982\u679c\u6211\u4eec\u7684\u9700\u6c42\u4e0d\u662f\u62d3\u5c55\u4e00\u4e2a\u65b0\u8f6e\u5b50\u3001\u65b0\u5899\u58c1\u3001\u65b0\u6298\u7ebf\u56fe\uff0c\u800c\u662f\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6c7d\u8f66\u5de5\u5382\u8981\u7ed9\u6c7d\u8f66\u52a0\u4e00\u4e2a\u65b0\u90e8\u4ef6\uff1a\u81ea\u52a8\u9a7e\u9a76\u7cfb\u7edf\u3002"),Object(a.b)("li",{parentName:"ul"},"\u8ff7\u5bab\u6e38\u620f\u8981\u65b0\u589e\u4e00\u4e2a\u529f\u80fd\u7d20\u6750\uff1a\u9677\u9631\u3002"),Object(a.b)("li",{parentName:"ul"},"\u4e8b\u4ef6\u8054\u52a8\u8981\u65b0\u589e\u4e00\u4e2a\u8054\u52a8\u5bf9\u8c61\uff1a\u660e\u7ec6\u8d8b\u52bf\u7edf\u8ba1\u8868\u683c\u3002")),Object(a.b)("p",null,"\u4f60\u770b\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0d\u662f\u4e3a\u5df2\u6709\u5143\u7d20\u65b0\u589e\u4e00\u5957\u5b9e\u73b0\uff0c\u800c\u662f\u5b9e\u73b0\u4e00\u4e9b\u65b0\u5143\u7d20\uff0c\u5c31\u4f1a\u975e\u5e38\u590d\u6742\uff0c\u56e0\u4e3a\u6211\u4eec\u4e0d\u4ec5\u8981\u4e3a\u6240\u6709 ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteFactory")," \u65b0\u589e\u6bcf\u4e00\u4e2a\u5143\u7d20\uff0c\u8fd8\u8981\u4fee\u6539\u62bd\u8c61\u5de5\u5382\uff0c\u4ee5\u5c06\u65b0\u5143\u7d20\u4e0e\u65e7\u5143\u7d20\u95f4\u5efa\u7acb\u8054\u7cfb\uff0c\u8fdd\u80cc\u4e86\u5f00\u95ed\u539f\u5219\u3002"),Object(a.b)("p",null,"\u56e0\u6b64\uff0c\u5bf9\u4e8e\u5df2\u6709\u5143\u7d20\u56fa\u5b9a\u7684\u7cfb\u7edf\uff0c\u9002\u5408\u4f7f\u7528\u62bd\u8c61\u5de5\u5382\uff0c\u53cd\u4e4b\u4e0d\u7136\u3002"),Object(a.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(a.b)("p",null,"\u62bd\u8c61\u5de5\u5382\u5bf9\u65b0\u589e\u5df2\u6709\u4ea7\u54c1\u7684\u5b9e\u73b0\u9002\u7528\uff0c\u5bf9\u65b0\u589e\u4e00\u4e2a\u4ea7\u54c1\u79cd\u7c7b\u4e0d\u9002\u7528\uff0c\u53ef\u4ee5\u53c2\u8003\u7ed3\u5408\u4e86\u4f8b\u5b50\u7684\u4e0b\u56fe\u52a0\u6df1\u7406\u89e3\uff1a"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412103107.png",alt:null})),Object(a.b)("p",null,"\u62d3\u5c55\u4e00\u4e2a\u7194\u5ca9\u7d20\u6750\u5305\u662f ",Object(a.b)("strong",{parentName:"p"},"\u589e\u52a0\u4e00\u79cd\u4ea7\u54c1\u98ce\u683c"),"\uff0c\u9002\u5408\u4f7f\u7528\u62bd\u8c61\u5de5\u5382\u8bbe\u8ba1\u6a21\u5f0f\uff1b\u62d3\u5c55\u4e00\u4e2a\u9677\u9631\u662f ",Object(a.b)("strong",{parentName:"p"},"\u589e\u52a0\u4e00\u4e2a\u4ea7\u54c1\u79cd\u7c7b"),"\uff0c\u4e0d\u9002\u5408\u4f7f\u7528\u62bd\u8c61\u5de5\u5382\u8bbe\u8ba1\u6a21\u5f0f\u3002\u4e3a\u4ec0\u4e48\u5462\uff1f\u770b\u4e0b\u56fe\uff1a"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412103122.png",alt:null})),Object(a.b)("p",null,"\u521b\u5efa\u8ff7\u5bab\u8fd9\u4e2a\u62bd\u8c61\u5de5\u5382\u505a\u7684\u4e8b\u60c5\uff0c",Object(a.b)("strong",{parentName:"p"},"\u662f\u628a\u5df2\u6709\u7684\u623f\u95f4\u3001\u95e8\u3001\u5899\u58c1\u5efa\u7acb\u5173\u8054"),"\uff0c\u56e0\u4e3a\u64cd\u4f5c\u7684\u662f\u62bd\u8c61\u7c7b\uff0c\u6240\u4ee5\u62d3\u5c55\u4e00\u5957\u5177\u4f53\u5b9e\u73b0\uff08\u7194\u5ca9\u7d20\u6750\u5305\uff09\u5bf9\u8fd9\u4e2a\u62bd\u8c61\u5de5\u5382\u6ca1\u6709\u611f\u77e5\uff0c\u8fd9\u6837\u505a\u5f88\u5bb9\u6613\u3002"),Object(a.b)("p",null,"\u4f46\u5982\u679c\u65b0\u589e\u4e00\u4e2a\u4ea7\u54c1\u79cd\u7c7b - \u9677\u9631\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u62bd\u8c61\u5de5\u5382\u5fc5\u987b\u5c06\u9677\u9631\u4e0e\u524d\u4e09\u8005\u91cd\u65b0\u5efa\u7acb\u5173\u8054\uff0c\u8fd9\u5c31\u8981\u4fee\u6539\u62bd\u8c61\u5de5\u5382\uff0c\u4e0d\u7b26\u5408\u5f00\u95ed\u539f\u5219\u3002\u540c\u65f6\uff0c\u5982\u679c\u6211\u4eec\u5df2\u6709\u7d20\u6750\u5305 1 \uff5e\u7d20\u6750\u5305 999\uff0c\u5c31\u9700\u8981\u540c\u65f6\u589e\u52a0 999 \u4e2a\u5bf9\u5e94\u7684\u9677\u9631\u5b9e\u73b0\uff08\u666e\u901a\u9677\u9631\u3001\u9b54\u6cd5\u9677\u9631\u3001\u7194\u5ca9\u9677\u9631\uff09\uff0c\u5176\u5de5\u4f5c\u91cf\u4f1a\u975e\u5e38\u5927\u3002"),Object(a.b)("p",null,"\u56e0\u6b64\uff0c\u53ea\u6709\u4ea7\u54c1\u79cd\u7c7b\u7a33\u5b9a\u65f6\uff0c\u9700\u8981\u9891\u7e41\u62d3\u5c55\u4ea7\u54c1\u98ce\u683c\u65f6\u624d\u9002\u5408\u7528\u62bd\u8c61\u5de5\u5382\u8bbe\u8ba1\u6a21\u5f0f\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(a.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/271"},"\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Abstract Factory \u62bd\u8c61\u5de5\u5382\u300b\xb7 Issue #271 \xb7 dt-fe/weekly"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(a.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(a.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}i.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),i=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),O=r,j=u["".concat(b,".").concat(O)]||u[O]||d[O]||a;return n?c.a.createElement(j,o(o({ref:t},p),{},{components:n})):c.a.createElement(j,o({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,b=new Array(a);b[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var p=2;p<a;p++)b[p]=n[p];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);