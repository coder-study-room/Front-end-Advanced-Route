(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{389:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var l=n(3),b=n(7),i=(n(0),n(468)),r={title:"190. \u7cbe\u8bfb\u300aDOM diff \u539f\u7406\u8be6\u89e3\u300b",id:"190",hide_title:!0},c={unversionedId:"190",id:"190",isDocsHomePage:!1,title:"190. \u7cbe\u8bfb\u300aDOM diff \u539f\u7406\u8be6\u89e3\u300b",description:"DOM diff \u4f5c\u4e3a\u5de5\u7a0b\u95ee\u9898\uff0c\u9700\u8981\u5177\u6709\u4e00\u5b9a\u7b97\u6cd5\u601d\u7ef4\uff0c\u56e0\u6b64\u7ecf\u5e38\u51fa\u73b0\u5728\u9762\u8bd5\u573a\u666f\u4e2d\uff0c\u6bd5\u7adf\u8fd9\u662f\u96be\u5f97\u51fa\u73b0\u5728\u5de5\u7a0b\u9886\u57df\u7684\u7b97\u6cd5\u95ee\u9898\u3002",source:"@site/weekly/190.\u7cbe\u8bfb\u300aDOM diff \u539f\u7406\u8be6\u89e3\u300b.md",slug:"/190",permalink:"/weekly/190",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/190.\u7cbe\u8bfb\u300aDOM diff \u539f\u7406\u8be6\u89e3\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1618195991,formattedLastUpdatedAt:"4/12/2021",sidebar:"weekly",previous:{title:"189. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Visitor \u8bbf\u95ee\u8005\u6a21\u5f0f\u300b",permalink:"/weekly/189"},next:{title:"191. \u7cbe\u8bfb\u300a\u9ad8\u6027\u80fd\u8868\u683c\u300b",permalink:"/weekly/191"}},p=[{value:"\u7cbe\u8bfb",id:"\u7cbe\u8bfb",children:[{value:"\u7406\u60f3\u7684 Dom diff",id:"\u7406\u60f3\u7684-dom-diff",children:[]},{value:"\u7b80\u5316\u7684 Dom diff",id:"\u7b80\u5316\u7684-dom-diff",children:[]},{value:"Vue \u7684 Dom diff",id:"vue-\u7684-dom-diff",children:[]},{value:"React \u7684 Dom diff",id:"react-\u7684-dom-diff",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],a={toc:p};function o(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"DOM diff \u4f5c\u4e3a\u5de5\u7a0b\u95ee\u9898\uff0c\u9700\u8981\u5177\u6709\u4e00\u5b9a\u7b97\u6cd5\u601d\u7ef4\uff0c\u56e0\u6b64\u7ecf\u5e38\u51fa\u73b0\u5728\u9762\u8bd5\u573a\u666f\u4e2d\uff0c\u6bd5\u7adf\u8fd9\u662f\u96be\u5f97\u51fa\u73b0\u5728\u5de5\u7a0b\u9886\u57df\u7684\u7b97\u6cd5\u95ee\u9898\u3002"),Object(i.b)("p",null,"\u65e0\u8bba\u51fa\u4e8e\u9762\u8bd5\u76ee\u7684\uff0c\u8fd8\u662f\u6df1\u5165\u5b66\u4e60\u76ee\u7684\uff0c\u90fd\u6709\u5fc5\u8981\u5c06\u8fd9\u4e2a\u95ee\u9898\u641e\u61c2\uff0c\u56e0\u6b64\u524d\u7aef\u7cbe\u8bfb\u6211\u4eec\u5c31\u4e13\u95e8\u7528\u4e00\u4e2a\u7ae0\u8282\u8bf4\u6e05\u695a\u6b64\u95ee\u9898\u3002"),Object(i.b)("h2",{id:"\u7cbe\u8bfb"},"\u7cbe\u8bfb"),Object(i.b)("p",null,"Dom diff \u662f\u6240\u6709\u73b0\u5728\u6846\u67b6\u5fc5\u987b\u505a\u7684\u4e8b\u60c5\uff0c\u8fd9\u80cc\u540e\u7684\u539f\u56e0\u662f\uff0c\u7531 Jquery \u65f6\u4ee3\u7684\u9762\u5411\u64cd\u4f5c\u8fc7\u7a0b\u8f6c\u53d8\u4e3a\u6570\u636e\u9a71\u52a8\u89c6\u56fe\u5bfc\u81f4\u7684\u3002"),Object(i.b)("p",null,"\u4e3a\u4ec0\u4e48 Jquery \u65f6\u4ee3\u4e0d\u9700\u8981 Dom diff\uff1f\u56e0\u4e3a Dom diff \u4ea4\u7ed9\u4e1a\u52a1\u5904\u7406\u4e86\uff0c\u6211\u4eec\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},".append")," \u6216\u8005 ",Object(i.b)("inlineCode",{parentName:"p"},".move")," \u4e4b\u7c7b Dom \u64cd\u4f5c\u51fd\u6570\uff0c\u5c31\u662f\u663e\u5f0f\u7533\u660e\u4e86\u5982\u4f55\u505a Dom diff\uff0c\u8fd9\u79cd\u65b9\u6848\u662f\u6700\u9ad8\u6548\u7684\uff0c\u56e0\u4e3a\u600e\u4e48\u79fb\u52a8 Dom \u53ea\u6709\u4e1a\u52a1\u6700\u6e05\u695a\u3002"),Object(i.b)("p",null,"\u4f46\u8fd9\u6837\u7684\u95ee\u9898\u4e5f\u5f88\u660e\u663e\uff0c\u5c31\u662f\u4e1a\u52a1\u5fc3\u667a\u8d1f\u62c5\u592a\u91cd\uff0c\u5bf9\u4e8e\u590d\u6742\u7cfb\u7edf\uff0c\u9700\u8981\u505a Dom diff \u7684\u5730\u65b9\u592a\u591a\uff0c\u4e0d\u4ec5\u5199\u8d77\u6765\u7e41\u7410\uff0c\u5f53\u72b6\u6001\u5b58\u5728\u4ea4\u9519\u65f6\uff0c\u9762\u5411\u8fc7\u7a0b\u7684\u624b\u52a8 Dom diff \u5bb9\u6613\u51fa\u73b0\u72b6\u6001\u9057\u6f0f\uff0c\u5bfc\u81f4\u8fb9\u754c\u9519\u8bef\uff0c\u5c31\u7b97\u4f60\u6ca1\u6709\u5199\u51fa bug\uff0c\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u4e5f\u7edd\u5bf9\u7b97\u4e0d\u4e0a\u597d\u3002"),Object(i.b)("p",null,"\u89e3\u51b3\u65b9\u6848\u5c31\u662f\u6570\u636e\u9a71\u52a8\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5173\u6ce8\u6570\u636e\u5982\u4f55\u6620\u5c04\u5230 UI\uff0c\u8fd9\u6837\u65e0\u8bba\u4e1a\u52a1\u903b\u8f91\u518d\u590d\u6742\uff0c\u6211\u4eec\u6c38\u8fdc\u53ea\u9700\u8981\u89e3\u51b3\u5c40\u90e8\u72b6\u6001\u7684\u6620\u5c04\uff0c\u8fd9\u6781\u5927\u964d\u4f4e\u4e86\u590d\u6742\u7cfb\u7edf\u7684\u7ef4\u62a4\u590d\u6742\u5ea6\uff0c\u4ee5\u524d\u9700\u8981\u4e00\u4e2a\u8001\u624b\u5199\u7684\u903b\u8f91\uff0c\u73b0\u5728\u65b0\u624b\u5c31\u80fd\u505a\u4e86\uff0c\u8fd9\u662f\u975e\u5e38\u4e86\u4e0d\u8d77\u7684\u53d8\u5316\u3002"),Object(i.b)("p",null,"\u4f46\u6709\u5229\u4e5f\u6709\u5f0a\uff0c\u8fd9\u80cc\u540e Dom diff \u5c31\u8981\u4ea4\u7ed9\u6846\u67b6\u6765\u505a\u4e86\uff0c\u6240\u4ee5\u662f\u5426\u80fd\u9ad8\u6548\u7684\u505a Dom diff\uff0c\u662f\u4e00\u4e2a\u6570\u636e\u9a71\u52a8\u6846\u67b6\u80fd\u5426\u5e94\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u91cd\u8981\u6307\u6807\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6765\u770b\u770b Dom diff \u662f\u5982\u4f55\u505a\u7684\u5427\u3002"),Object(i.b)("h3",{id:"\u7406\u60f3\u7684-dom-diff"},"\u7406\u60f3\u7684 Dom diff"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104239.png",alt:null})),Object(i.b)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u7406\u60f3\u7684 Dom diff \u81ea\u7136\u662f\u6ef4\u6c34\u4e0d\u6f0f\u7684\u590d\u7528\u6240\u6709\u80fd\u590d\u7528\u7684\uff0c\u5b9e\u5728\u9047\u5230\u65b0\u589e\u6216\u5220\u9664\u65f6\uff0c\u624d\u6267\u884c\u63d2\u5165\u6216\u5220\u9664\u3002\u8fd9\u6837\u7684\u64cd\u4f5c\u6700\u8d34\u8fd1 Jquery \u65f6\u4ee3\u6211\u4eec\u624b\u5199\u7684 Dom diff \u6027\u80fd\u3002"),Object(i.b)("p",null,"\u53ef\u60dc\u7a0b\u5e8f\u65e0\u6cd5\u731c\u5230\u4f60\u7684\u60f3\u6cd5\uff0c\u60f3\u8981\u7cbe\u786e\u590d\u7528\u5c31\u5fc5\u987b\u4ed8\u51fa\u9ad8\u6602\u7684\u4ee3\u4ef7\uff1a\u65f6\u95f4\u590d\u6742\u5ea6 O(n\xb3) \u7684 diff \u7b97\u6cd5\uff0c\u8fd9\u663e\u7136\u662f\u65e0\u6cd5\u63a5\u53d7\u7684\uff0c\u56e0\u6b64\u7406\u60f3\u7684 Dom diff \u7b97\u6cd5\u65e0\u6cd5\u88ab\u4f7f\u7528\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5173\u4e8e O(n\xb3) \u7684\u7531\u6765\u3002\u7531\u4e8e\u5de6\u6811\u4e2d\u4efb\u610f\u8282\u70b9\u90fd\u53ef\u80fd\u51fa\u73b0\u5728\u53f3\u6811\uff0c\u6240\u4ee5\u5fc5\u987b\u5728\u5bf9\u5de6\u6811\u6df1\u5ea6\u904d\u5386\u7684\u540c\u65f6\uff0c\u5bf9\u53f3\u6811\u8fdb\u884c\u6df1\u5ea6\u904d\u5386\uff0c\u627e\u5230\u6bcf\u4e2a\u8282\u70b9\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u8fd9\u91cc\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(n\xb2)\uff0c\u4e4b\u540e\u9700\u8981\u5bf9\u6811\u7684\u5404\u8282\u70b9\u8fdb\u884c\u589e\u5220\u79fb\u7684\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u7b80\u5355\u53ef\u4ee5\u7406\u89e3\u4e3a\u52a0\u4e86\u4e00\u5c42\u904d\u5386\u5faa\u73af\uff0c\u56e0\u6b64\u518d\u4e58\u4e00\u4e2a n\u3002")),Object(i.b)("h3",{id:"\u7b80\u5316\u7684-dom-diff"},"\u7b80\u5316\u7684 Dom diff"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104258.png",alt:null})),Object(i.b)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u53ea\u6309\u5c42\u6bd4\u8f83\uff0c\u5c31\u53ef\u4ee5\u5c06\u65f6\u95f4\u590d\u6742\u5ea6\u964d\u4f4e\u4e3a O(n)\u3002\u6309\u5c42\u6bd4\u8f83\u4e5f\u4e0d\u662f\u5e7f\u5ea6\u904d\u5386\uff0c\u5176\u5b9e\u5c31\u662f\u5224\u65ad\u67d0\u4e2a\u8282\u70b9\u7684\u5b50\u5143\u7d20\u95f4 diff\uff0c\u8de8\u7236\u8282\u70b9\u7684\u5144\u5f1f\u8282\u70b9\u4e5f\u4e0d\u5fc5\u6bd4\u8f83\u3002"),Object(i.b)("p",null,"\u8fd9\u6837\u505a\u786e\u5b9e\u975e\u5e38\u9ad8\u6548\uff0c\u4f46\u4ee3\u4ef7\u5c31\u662f\uff0c\u5224\u65ad\u7684\u6709\u70b9\u50bb\uff0c\u6bd4\u5982 ac \u660e\u660e\u662f\u4e00\u4e2a\u79fb\u52a8\u64cd\u4f5c\uff0c\u5374\u88ab\u8bef\u8bc6\u522b\u4e3a\u5220\u9664 + \u65b0\u589e\u3002"),Object(i.b)("p",null,"\u597d\u5728\u8de8 DOM \u590d\u7528\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\u5f88\u5c11\u51fa\u73b0\uff0c\u56e0\u6b64\u8fd9\u79cd\u7b28\u62d9\u51fa\u73b0\u7684\u9891\u7387\u5b9e\u9645\u4e0a\u975e\u5e38\u4f4e\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u4e0d\u8981\u592a\u8ffd\u6c42\u5b66\u672f\u601d\u7ef4\u4e0a\u7684\u4e25\u8c28\u4e86\uff0c\u6bd5\u7adf\u6846\u67b6\u662f\u7ed9\u5b9e\u9645\u9879\u76ee\u7528\u7684\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u5f88\u5c11\u51fa\u73b0\u7684\u573a\u666f\uff0c\u7b97\u6cd5\u662f\u53ef\u4ee5\u4e0d\u8003\u8651\u7684\u3002"),Object(i.b)("p",null,"\u4e0b\u9762\u662f\u540c\u5c42 diff \u53ef\u80fd\u51fa\u73b0\u7684\u4e09\u79cd\u60c5\u51b5\uff0c\u975e\u5e38\u7b80\u5355\uff0c\u770b\u56fe\u5373\u53ef\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104311.png",alt:null})),Object(i.b)("p",null,"\u90a3\u4e48\u540c\u5c42\u6bd4\u8f83\u662f\u600e\u4e48\u8fbe\u5230 O(n) \u65f6\u95f4\u590d\u6742\u5ea6\u7684\u5462\uff1f\u6211\u4eec\u6765\u770b\u5177\u4f53\u6846\u67b6\u7684\u601d\u8def\u3002"),Object(i.b)("h3",{id:"vue-\u7684-dom-diff"},"Vue \u7684 Dom diff"),Object(i.b)("p",null,"Vue \u7684 Dom diff \u4e00\u5171 5 \u6b65\uff0c\u6211\u4eec\u7ed3\u5408\u4e0b\u56fe\u5148\u770b\u524d\u4e09\u6b65\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104326.png",alt:null})),Object(i.b)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u7b2c\u4e00\u548c\u7b2c\u4e8c\u6b65\u5206\u522b\u4ece\u9996\u5c3e\u4e24\u5934\u5411\u4e2d\u95f4\u903c\u8fd1\uff0c\u5c3d\u53ef\u80fd\u8df3\u8fc7\u9996\u4f4d\u76f8\u540c\u7684\u5143\u7d20\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u76ee\u7684\u662f ",Object(i.b)("strong",{parentName:"p"},"\u5c3d\u91cf\u4fdd\u8bc1\u4e0d\u8981\u53d1\u751f dom \u4f4d\u79fb"),"\u3002"),Object(i.b)("p",null,"\u8fd9\u79cd\u7b97\u6cd5\u4e00\u822c\u91c7\u7528\u53cc\u6307\u9488\u3002\u5982\u679c\u524d\u4e24\u6b65\u505a\u5b8c\u540e\uff0c\u53d1\u73b0\u65e7\u6811\u6307\u9488\u91cd\u5408\u4e86\uff0c\u65b0\u6811\u8fd8\u672a\u91cd\u5408\uff0c\u8bf4\u660e\u4ec0\u4e48\uff1f\u8bf4\u660e\u65b0\u6811\u5269\u4e0b\u6765\u7684\u90fd\u662f\u8981\u65b0\u589e\u7684\u8282\u70b9\uff0c\u6279\u91cf\u63d2\u5165\u5373\u53ef\u3002\u5f88\u7b80\u5355\u5427\uff1f\u90a3\u5982\u679c\u53cd\u8fc7\u6765\u5462\uff1f\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104342.png",alt:null})),Object(i.b)("p",null,"\u7b2c\u4e00\u548c\u7b2c\u4e8c\u6b65\u5b8c\u6210\u540e\uff0c\u53d1\u73b0\u65b0\u6811\u6307\u9488\u91cd\u5408\u4e86\uff0c\u4f46\u65e7\u6811\u8fd8\u672a\u91cd\u5408\uff0c\u8bf4\u660e\u4ec0\u4e48\uff1f\u8bf4\u660e\u65e7\u6811\u5269\u4e0b\u6765\u7684\u5728\u65b0\u6811\u90fd\u4e0d\u5b58\u5728\u4e86\uff0c\u6279\u91cf\u5220\u9664\u5373\u53ef\u3002"),Object(i.b)("p",null,"\u5f53\u7136\uff0c\u5982\u679c 1\u30012\u30013\u30014 \u6b65\u8d70\u5b8c\u4e4b\u540e\uff0c\u6307\u9488\u8fd8\u672a\u5904\u7406\u5b8c\uff0c\u90a3\u4e48\u5c31\u8fdb\u5165\u4e00\u4e2a\u5c0f\u5c0f\u7b97\u6cd5\u65f6\u95f4\u4e86\uff0c\u6211\u4eec\u9700\u8981\u5728 O(n) \u65f6\u95f4\u590d\u6742\u5ea6\u5185\u628a\u5269\u4e0b\u8282\u70b9\u5904\u7406\u5b8c\u3002\u719f\u6089\u7b97\u6cd5\u7684\u540c\u5b66\u5e94\u8be5\u5f88\u5feb\u80fd\u53cd\u6620\u51fa\uff0c\u4e00\u4e2a\u6570\u7ec4\u505a\u4e00\u4e9b\u68c0\u6d4b\u64cd\u4f5c\uff0c\u8fd8\u5f97\u628a\u65f6\u95f4\u590d\u6742\u5ea6\u63a7\u5236\u5728 O(n)\uff0c\u5f97\u7528\u4e00\u4e2a Map \u7a7a\u95f4\u6362\u4e00\u4e0b\u65f6\u95f4\uff0c\u5b9e\u9645\u4e0a\u4e5f\u662f\u5982\u6b64\uff0c\u6211\u4eec\u770b\u4e0b\u56fe\u5177\u4f53\u505a\u6cd5\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104356.png",alt:null})),Object(i.b)("p",null,"\u5982\u56fe\u6240\u793a\uff0c1\u30012\u30013\u30014 \u6b65\u8d70\u5b8c\u540e\uff0cOld \u548c New \u90fd\u6709\u5269\u4f59\uff0c\u56e0\u6b64\u8d70\u5230\u7b2c\u4e94\u6b65\uff0c\u7b2c\u4e94\u6b65\u5206\u4e3a\u4e09\u5c0f\u6b65\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u904d\u5386 Old \u521b\u5efa\u4e00\u4e2a Map\uff0c\u8fd9\u4e2a\u5c31\u662f\u90a3\u4e2a\u6362\u65f6\u95f4\u7684\u7a7a\u95f4\u6d88\u8017\uff0c\u5b83\u8bb0\u5f55\u4e86\u6bcf\u4e2a\u65e7\u8282\u70b9\u7684 index \u4e0b\u6807\uff0c\u4e00\u4f1a\u597d\u5728 New \u91cc\u67e5\u51fa\u6765\u3002"),Object(i.b)("li",{parentName:"ol"},"\u904d\u5386 New\uff0c\u987a\u4fbf\u5229\u7528\u4e0a\u9762\u7684 Map \u8bb0\u5f55\u4e0b\u4e0b\u6807\uff0c\u540c\u65f6 Old \u91cc\u4e0d\u5b58\u5728\u7684\u8bf4\u660e\u88ab\u5220\u9664\u4e86\uff0c\u76f4\u63a5\u5220\u9664\u3002"),Object(i.b)("li",{parentName:"ol"},"\u4e0d\u5b58\u5728\u7684\u4f4d\u7f6e\u8865 0\uff0c\u6211\u4eec\u62ff\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"e:4 d:3 c:2 h:0")," \u8fd9\u6837\u4e00\u4e2a\u6570\u7ec4\uff0c\u4e0b\u6807 0 \u662f\u65b0\u589e\uff0c\u975e 0 \u5c31\u662f\u79fb\u8fc7\u6765\u7684\uff0c\u6279\u91cf\u8f6c\u5316\u4e3a\u63d2\u5165\u64cd\u4f5c\u5373\u53ef\u3002")),Object(i.b)("p",null,"\u6700\u540e\u4e00\u6b65\u7684\u4f18\u5316\u4e5f\u5f88\u5173\u952e\uff0c\u6211\u4eec\u4e0d\u8981\u770b\u89c1\u4e0d\u540c\u5c31\u968f\u4fbf\u79fb\u52a8\uff0c\u4e3a\u4e86\u6027\u80fd\u6700\u4f18\uff0c\u8981\u4fdd\u8bc1\u79fb\u52a8\u6b21\u6570\u5c3d\u53ef\u80fd\u7684\u5c11\uff0c\u90a3\u4e48\u600e\u4e48\u624d\u80fd\u5c3d\u53ef\u80fd\u7684\u5c11\u79fb\u52a8\u5462\uff1f\u5047\u8bbe\u6211\u4eec\u968f\u610f\u79fb\u52a8\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104410.png",alt:null})),Object(i.b)("p",null,"\u4f46\u5176\u5b9e\u6700\u4f18\u7684\u79fb\u52a8\u65b9\u5f0f\u662f\u4e0b\u9762\u8fd9\u6837\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104421.png",alt:null})),Object(i.b)("p",null,"\u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u79fb\u52a8\u7684\u65f6\u5019\uff0c\u5176\u4ed6\u5143\u7d20\u7684\u4f4d\u7f6e\u4e5f\u5728\u76f8\u5bf9\u53d8\u5316\uff0c\u53ef\u80fd\u505a\u4e86 A \u6548\u679c\u540c\u65f6\uff0c\u4e5f\u628a B \u6548\u679c\u7ed9\u6ee1\u8db3\u4e86\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u627e\u5230\u90a3\u4e9b\u76f8\u5bf9\u4f4d\u7f6e\u6709\u5e8f\u7684\u5143\u7d20\u4fdd\u6301\u4e0d\u53d8\uff0c\u8ba9\u90a3\u4e9b\u4f4d\u7f6e\u660e\u663e\u9519\u8bef\u7684\u5143\u7d20\u632a\u52a8\u5373\u662f\u6700\u4f18\u7684\u3002"),Object(i.b)("p",null,"\u4ec0\u4e48\u662f\u76f8\u5bf9\u6709\u5e8f\uff1f",Object(i.b)("inlineCode",{parentName:"p"},"a c e")," \u8fd9\u4e09\u4e2a\u5b57\u6bcd\u5728 Old \u539f\u59cb\u987a\u5e8f ",Object(i.b)("inlineCode",{parentName:"p"},"a b c d e")," \u4e2d\u662f\u76f8\u5bf9\u6709\u5e8f\u7684\uff0c\u6211\u4eec\u53ea\u8981\u628a ",Object(i.b)("inlineCode",{parentName:"p"},"b d")," \u79fb\u8d70\uff0c\u8fd9\u4e09\u4e2a\u5b57\u6bcd\u7684\u4f4d\u7f6e\u81ea\u7136\u5c31\u6b63\u786e\u4e86\u3002\u56e0\u6b64\u6211\u4eec\u53ea\u9700\u8981\u627e\u5230 New \u6570\u7ec4\u4e2d\u7684 ",Object(i.b)("strong",{parentName:"p"},"\u6700\u957f\u5b50\u5e8f\u5217"),"\u3002\u5177\u4f53\u7684\u627e\u6cd5\u53ef\u4ee5\u5f53\u4f5c\u4e00\u4e2a\u5c0f\u7b97\u6cd5\u9898\u4e86\uff0c\u7531\u4e8e\u77e5\u9053\u6bcf\u4e2a\u5143\u7d20\u7684\u5b9e\u9645\u4e0b\u6807\uff0c\u6bd4\u5982\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e0b\u6807\u662f\u8fd9\u6837\u7684\uff1a"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[b:1, d:3, a:0, c:2, e:4]")),Object(i.b)("p",null,"\u8089\u773c\u770b\u4e0a\u53bb\uff0c\u8fde\u7eed\u81ea\u589e\u7684\u5b50\u4e32\u6709 ",Object(i.b)("inlineCode",{parentName:"p"},"b d")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"a c e"),"\uff0c\u7531\u4e8e ",Object(i.b)("inlineCode",{parentName:"p"},"a c e")," \u66f4\u957f\uff0c\u6240\u4ee5\u9009\u62e9\u540e\u8005\u3002"),Object(i.b)("p",null,"\u6362\u6210\u7a0b\u5e8f\u53bb\u505a\uff0c\u53ef\u4ee5\u91c7\u7528\u8d2a\u5fc3 + \u4e8c\u5206\u6cd5\u8fdb\u884c\u67e5\u627e\uff0c\u8be6\u7ec6\u53ef\u4ee5\u770b\u8fd9\u9053\u9898 ",Object(i.b)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/longest-increasing-subsequence/"},"\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"),"\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(nlogn)\u3002\u7531\u4e8e\u8be5\u7b97\u6cd5\u5f97\u51fa\u7684\u7ed3\u679c\u987a\u5e8f\u662f\u4e71\u7684\uff0cVue \u91c7\u7528\u63d0\u524d\u590d\u5236\u6570\u7ec4\u7684\u65b9\u5f0f\u8f85\u52a9\u627e\u5230\u4e86\u6b63\u786e\u5e8f\u5217\u3002"),Object(i.b)("h3",{id:"react-\u7684-dom-diff"},"React \u7684 Dom diff"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104433.png",alt:null})),Object(i.b)("p",null,"\u5047\u8bbe\u8fd9\u4e48\u4e00\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u5c06 a \u79fb\u5230\u4e86 c \u540e\uff0c\u90a3\u4e48\u6846\u67b6\u4ece\u6700\u7ec8\u72b6\u6001\u5012\u63a8\uff0c\u5982\u4f55\u6700\u5feb\u7684\u627e\u5230\u8fd9\u4e2a\u52a8\u673a\u5462\uff1fReact \u91c7\u7528\u4e86 ",Object(i.b)("strong",{parentName:"p"},"\u4ec5\u53f3\u79fb\u7b56\u7565"),"\uff0c\u5373\u5bf9\u5143\u7d20\u53d1\u751f\u7684\u4f4d\u7f6e\u53d8\u5316\uff0c\u53ea\u4f1a\u5c06\u5176\u79fb\u52a8\u5230\u53f3\u8fb9\uff0c\u90a3\u4e48\u53f3\u8fb9\u79fb\u5b8c\u4e86\uff0c\u5176\u4ed6\u4f4d\u7f6e\u4e5f\u5c31\u6709\u5e8f\u4e86\u3002"),Object(i.b)("p",null,"\u6211\u4eec\u770b\u56fe\u8bf4\u660e\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104505.png",alt:null})),Object(i.b)("p",null,"\u904d\u5386 Old \u5b58\u50a8 Map \u548c Vue \u662f\u4e00\u6837\u7684\uff0c\u7136\u540e\u5c31\u5230\u4e86\u7b2c\u4e8c\u6b65\u904d\u5386 New\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"b")," \u4e0b\u6807\u4ece\u539f\u6765\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"1")," \u53d8\u6210\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"\uff0c\u9700\u8981\u5de6\u79fb\u624d\u884c\uff0c\u4f46\u6211\u4eec\u4e0d\u5de6\u79fb\uff0c\u6211\u4eec\u53ea\u53f3\u79fb\uff0c\u56e0\u4e3a\u6240\u6709\u53f3\u79fb\u505a\u5b8c\u540e\uff0c\u5de6\u79fb\u5c31\u7b49\u4e8e\u81ea\u52a8\u505a\u6389\u4e86\uff08\u524d\u9762\u7684\u5143\u7d20\u53f3\u79fb\u540e\uff0c\u81ea\u5df1\u81ea\u7136\u88ab\u9876\u5230\u524d\u9762\u53bb\u4e86\uff0c\u5b9e\u73b0\u4e86\u5de6\u79fb\u7684\u6548\u679c\uff09\u3002"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104527.png",alt:null})),Object(i.b)("p",null,"\u540c\u7406\uff0cc \u4e0b\u6807\u4ece ",Object(i.b)("inlineCode",{parentName:"p"},"2")," \u53d8\u6210\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"\uff0c\u9700\u8981\u5de6\u79fb\u624d\u884c\uff0c\u4f46\u6211\u4eec\u7ee7\u7eed\u4e0d\u52a8\u3002"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104539.png",alt:null})),Object(i.b)("p",null,"a \u7684\u4e0b\u6807\u4ece ",Object(i.b)("inlineCode",{parentName:"p"},"0")," \u53d8\u6210 ",Object(i.b)("inlineCode",{parentName:"p"},"2"),"\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u53f3\u79fb\u4e86\uff01"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104549.png",alt:null})),Object(i.b)("p",null,"\u540e\u9762\u7684 d\u3001e \u4e0b\u6807\u6ca1\u53d8\uff0c\u5c31\u4e0d\u7528\u52a8\u3002\u6211\u4eec\u7eb5\u89c2\u6574\u4f53\u53ef\u4ee5\u53d1\u73b0\uff0cb \u548c c \u56e0\u4e3a\u524d\u9762\u7684 a \u88ab\u62bd\u8d70\u4e86\uff0c\u81ea\u7136\u53d1\u751f\u4e86\u5de6\u79fb\u3002\u8fd9\u5c31\u662f\u7528\u4e00\u4e2a\u53f3\u79fb\u4ee3\u66ff\u4e24\u4e2a\u5de6\u79fb\u7684\u9ad8\u6548\u64cd\u4f5c\u3002"),Object(i.b)("p",null,"\u540c\u65f6\u6211\u4eec\u53d1\u73b0\uff0c\u8fd9\u4e5f\u786e\u5b9e\u627e\u5230\u4e86\u6211\u4eec\u5f00\u59cb\u63d0\u5230\u7684\u6700\u4f73\u4f4d\u79fb\u7b56\u7565\u3002"),Object(i.b)("p",null,"\u90a3\u8fd9\u4e2a\u7b97\u6cd5\u771f\u7684\u6709\u8fd9\u4e48\u806a\u660e\u5417\uff1f\u663e\u7136\u4e0d\u662f\uff0c\u8fd9\u4e2a\u7b97\u6cd5\u53ea\u662f\u6b6a\u6253\u8bef\u649e\u78b0\u5bf9\u4e86\u800c\u5df2\uff0c",Object(i.b)("strong",{parentName:"p"},"\u6709\u7528\u53f3\u79fb\u66ff\u4ee3\u5de6\u79fb\u7684\u7b97\u6cd5\uff0c\u5c31\u6709\u7528\u5de6\u79fb\u66ff\u4ee3\u53f3\u79fb\u7684\u7b97\u6cd5"),"\uff0c\u65e2\u7136\u9009\u62e9\u4e86\u53f3\u79fb\u66ff\u4ee3\u5de6\u79fb\uff0c\u90a3\u4e48\u4e00\u5b9a\u4e22\u5931\u4e86\u5de6\u79fb\u4ee3\u66ff\u53f3\u79fb\u7684\u6548\u7387\u3002"),Object(i.b)("p",null,"\u4ec0\u4e48\u65f6\u5019\u7528\u5de6\u79fb\u4ee3\u66ff\u53f3\u79fb\u6548\u7387\u6700\u9ad8\uff1f\u5c31\u662f\u628a\u6570\u7ec4\u6700\u540e\u4e00\u4f4d\u79fb\u5230\u7b2c\u4e00\u4f4d\u7684\u573a\u666f\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104635.png",alt:null})),Object(i.b)("p",null,"\u663e\u7136\u5de6\u79fb\u53ea\u8981\u4e00\u6b65\uff0c\u90a3\u4e48\u53f3\u79fb\u5c31\u662f n-1 \u6b65\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u662f 4 \u6b65\uff0c\u6211\u4eec\u770b\u53f3\u79fb\u7b97\u6cd5\u56fe\u89e3\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104648.png",alt:null})),Object(i.b)("p",null,"\u9996\u5148\u627e\u5230 e\uff0c\u4f4d\u7f6e\u4ece ",Object(i.b)("inlineCode",{parentName:"p"},"4")," \u53d8\u6210\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"\uff0c\u4f46\u6211\u4eec\u4e0d\u80fd\u5de6\u79fb\uff01\u6240\u4ee5\u53ea\u80fd\u4fdd\u6301\u4e0d\u52a8\uff0c\u60b2\u5267\u4ece\u6b64\u5f00\u59cb\u3002"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104659.png",alt:null})),Object(i.b)("p",null,"\u867d\u7136\u7b97\u6cd5\u5df2\u7ecf\u4e0d\u662f\u6700\u4f18\u4e86\uff0c\u4f46\u8be5\u505a\u7684\u8fd8\u662f\u8981\u505a\uff0c\u5176\u5b9e\u4e4b\u524d\u6709\u4e00\u4e2a lastIndex \u6982\u5ff5\u6ca1\u6709\u8bf4\uff0c\u56e0\u4e3a e \u5df2\u7ecf\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"4")," \u7684\u4f4d\u7f6e\u4e86\uff0c\u6240\u4ee5\u518d\u628a a \u4ece ",Object(i.b)("inlineCode",{parentName:"p"},"0")," \u632a\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"1")," \u5df2\u7ecf\u4e0d\u591f\u4e86\uff0c\u6b64\u65f6 a \u5e94\u8be5\u4ece ",Object(i.b)("inlineCode",{parentName:"p"},"0")," \u632a\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"5"),"\u3002"),Object(i.b)("p",null,"\u65b9\u6cd5\u5c31\u662f\u8bb0\u5f55 ",Object(i.b)("inlineCode",{parentName:"p"},"lastIndex = max(oldIndex, newIndex)")," => ",Object(i.b)("inlineCode",{parentName:"p"},"lastIndex = max(4, 0)"),"\uff0c\u4e0b\u4e00\u6b21\u79fb\u52a8\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"lastIndex + 1")," \u4e5f\u5c31\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"5"),"\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104714.png",alt:null})),Object(i.b)("p",null,"\u53d1\u73b0 a \u4ece ",Object(i.b)("inlineCode",{parentName:"p"},"0")," \u53d8\u6210\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"5"),"\uff08\u6ce8\u610f\uff0c\u6b64\u65f6\u8003\u8651\u5230 lastIndex \u56e0\u7d20\uff09\uff0c\u6240\u4ee5\u53f3\u79fb\u3002"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412104725.png",alt:null})),Object(i.b)("p",null,"\u540c\u7406\uff0cb\u3001c\u3001d \u4e5f\u4e00\u6837\u3002\u6211\u4eec\u6700\u540e\u53d1\u73b0\uff0c\u53d1\u751f\u4e86 4 \u6b21\u53f3\u79fb\uff0ce \u4e5f\u56e0\u4e3a\u81ea\u7136\u5de6\u79fb\u4e86 4 \u6b21\u5230\u8fbe\u4e86\u9996\u4f4d\uff0c\u7b26\u5408\u9884\u671f\u3002"),Object(i.b)("p",null,"\u6240\u4ee5\u8fd9\u662f\u4e00\u4e2a\u6709\u5229\u6709\u5f0a\u7684\u7b97\u6cd5\u3002\u65b0\u589e\u548c\u5220\u9664\u6bd4\u8f83\u7b80\u5355\uff0c\u548c Vue \u5dee\u4e0d\u591a\u3002"),Object(i.b)("p",null,"PS\uff1a\u6700\u65b0\u7248 React Dom diff \u7b97\u6cd5\u5982\u6709\u66f4\u65b0\uff0c\u6b22\u8fce\u5728\u8bc4\u8bba\u533a\u6307\u51fa\uff0c\u56e0\u4e3a\u8fd9\u79cd\u7b97\u6cd5\u770b\u6765\u4e0d\u5982 Vue \u7684\u9ad8\u6548\u3002"),Object(i.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(i.b)("p",null,"Dom diff \u603b\u7ed3\u6709\u8fd9\u4e48\u51e0\u70b9\u8003\u8651\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u5b8c\u5168\u5bf9\u6bd4 O(n\xb3) \u65e0\u6cd5\u63a5\u53d7\uff0c\u6545\u964d\u7ea7\u4e3a\u540c\u5c42\u5bf9\u6bd4\u7684 O(n) \u65b9\u6848\u3002"),Object(i.b)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u964d\u7ea7\u53ef\u884c\uff1f\u56e0\u4e3a\u8de8\u5c42\u7ea7\u5f88\u5c11\u53d1\u751f\uff0c\u53ef\u4ee5\u5ffd\u7565\u3002"),Object(i.b)("li",{parentName:"ol"},"\u540c\u5c42\u7ea7\u4e5f\u4e0d\u7b80\u5355\uff0c\u96be\u70b9\u662f\u5982\u4f55\u9ad8\u6548\u4f4d\u79fb\uff0c\u5373\u6700\u5c0f\u6b65\u6570\u5b8c\u6210\u4f4d\u79fb\u3002"),Object(i.b)("li",{parentName:"ol"},"Vue \u4e3a\u4e86\u5c3d\u91cf\u4e0d\u79fb\u52a8\uff0c\u5148\u5de6\u53f3\u5939\u51fb\u8df3\u8fc7\u4e0d\u53d8\u7684\uff0c\u518d\u627e\u5230\u6700\u957f\u8fde\u7eed\u5b50\u4e32\u4fdd\u6301\u4e0d\u52a8\uff0c\u79fb\u52a8\u5176\u4ed6\u5143\u7d20\u3002"),Object(i.b)("li",{parentName:"ol"},"React \u91c7\u7528\u4ec5\u53f3\u79fb\u65b9\u6848\uff0c\u5728\u5927\u90e8\u5206\u4ece\u5de6\u5f80\u53f3\u79fb\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5f97\u5230\u4e86\u8f83\u597d\u7684\u6027\u80fd\u3002")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(i.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/308"},"\u7cbe\u8bfb\u300aDOM diff \u539f\u7406\u8be6\u89e3\u300b\xb7 Issue #308 \xb7 dt-fe/weekly"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(i.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(i.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}o.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var l=n(0),b=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var a=b.a.createContext({}),o=function(e){var t=b.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=o(e.components);return b.a.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,a=p(e,["components","mdxType","originalType","parentName"]),d=o(n),O=l,u=d["".concat(r,".").concat(O)]||d[O]||m[O]||i;return n?b.a.createElement(u,c(c({ref:t},a),{},{components:n})):b.a.createElement(u,c({ref:t},a))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var a=2;a<i;a++)r[a]=n[a];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);