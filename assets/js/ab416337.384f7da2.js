(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(385)),c={title:"14. \u7cbe\u8bfb\u67b6\u6784\u8bbe\u8ba1\u4e4b DCI",id:"014",hide_title:!0},b={unversionedId:"014",id:"014",isDocsHomePage:!1,title:"14. \u7cbe\u8bfb\u67b6\u6784\u8bbe\u8ba1\u4e4b DCI",description:"\u672c\u671f\u7cbe\u8bfb\u6587\u7ae0\u662f\uff1aThe DCI Architecture",source:"@site/weekly/014.\u7cbe\u8bfb\u67b6\u6784\u8bbe\u8ba1\u4e4b DCI.md",slug:"/014",permalink:"/weekly/014",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/014.\u7cbe\u8bfb\u67b6\u6784\u8bbe\u8ba1\u4e4b DCI.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"13. This \u5e26\u6765\u7684\u56f0\u60d1",permalink:"/weekly/013"},next:{title:"15. \u7cbe\u8bfb TC39 \u4e0e ECMAScript \u63d0\u6848",permalink:"/weekly/015"}},i=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u5185\u5bb9\u6458\u8981",id:"2-\u5185\u5bb9\u6458\u8981",children:[]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"\u5c1d\u8bd5\u4ece\u4eba\u7c7b\u601d\u7ef4\u89d2\u5ea6\u51fa\u53d1 \u7406\u89e3",id:"\u5c1d\u8bd5\u4ece\u4eba\u7c7b\u601d\u7ef4\u89d2\u5ea6\u51fa\u53d1-\u7406\u89e3",children:[]},{value:"\u53d1\u73b0\u5e76\u68b3\u7406\u73b0\u4ee3\u524d\u7aef\u6a21\u5f0f\u548c\u6982\u5ff5\u7684\u86db\u4e1d\u9a6c\u8ff9",id:"\u53d1\u73b0\u5e76\u68b3\u7406\u73b0\u4ee3\u524d\u7aef\u6a21\u5f0f\u548c\u6982\u5ff5\u7684\u86db\u4e1d\u9a6c\u8ff9",children:[]},{value:"\u7ed3\u5408 DCI \u8bbe\u60f3\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u5230\u4e00\u4e9b\u8bbe\u8ba1\u65b9\u6cd5\u548c\u539f\u5219",id:"\u7ed3\u5408-dci-\u8bbe\u60f3\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u5230\u4e00\u4e9b\u8bbe\u8ba1\u65b9\u6cd5\u548c\u539f\u5219",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]}],o={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u6587\u7ae0\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"http://www.artima.com/articles/dci_vision.html"},"The DCI Architecture")),Object(l.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(l.b)("p",null,"\u968f\u7740\u524d\u7aef ES6 ES7 \u7684\u4e00\u8def\u524d\u884c\uff0c \u6211\u4eec\u5927\u524d\u7aef\u501f\u9274\u548c\u5f15\u8fdb\u4e86\u5404\u79cd\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u6982\u5ff5\u3001\u7279\u6027\u3001\u6a21\u5f0f;\n\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u5f0f Functional \u7f16\u7a0b\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u4f7f\u7528\u9762\u5411\u5bf9\u8c61 OOP \u7684\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u4f7f\u7528\u9762\u5411\u63a5\u53e3\u7684\u601d\u60f3\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 AOP,\n\u53ef\u4ee5\u4f7f\u7528\u6ce8\u89e3\uff0c\u4ee3\u7406\u3001\u53cd\u5c04\uff0c\u5404\u79cd\u8bbe\u8ba1\u6a21\u5f0f\uff1b \u5728\u5927\u524d\u7aef\u8f89\u714c\u53d1\u5c55\u3001\u5728\u6570\u636e\u65f6\u4ee3\u7684\u5f53\u4e0b \u6211\u4eec\u4e00\u8d77\u9605\u8bfb\u4e86\u4e00\u7bc7\u8bbe\u8ba1\u76f8\u5173\u7684\u8001\u6587\uff1a\n\u300aThe DCI Architecture\u300b\n\u4e00\u8d77\u6765\u518d\u63a2\u7d22\u548c\u590d\u4e60\u4e00\u4e0b \u76f8\u5173\u7684\u8bbe\u8ba1\u548c\u601d\u60f3"),Object(l.b)("h2",{id:"2-\u5185\u5bb9\u6458\u8981"},"2 \u5185\u5bb9\u6458\u8981"),Object(l.b)("p",null,"DCI \u662f\u6570\u636e Data \u573a\u666f Context \u4ea4\u4e92 Interactions \u7b80\u79f0\uff0c \u91cd\u70b9\u662f\u5173\u6ce8 \u6570\u636e\u7684\u4e0d\u540c\u573a\u666f\u7684\u4ea4\u4e92\u884c\u4e3a\uff0c \u662f\u9762\u5411\u5bf9\u8c61\u7cfb\u7edf \u72b6\u6001\u548c\u884c\u4e3a\u7684\u4e00\u79cd\u8303\u5f0f\u8bbe\u8ba1\uff1b\nDCI \u5728\u8bb8\u591a\u65b9\u9762\u662f\u8bb8\u591a\u8fc7\u53bb\u8303\u5f0f\u7684\u7edf\u4e00\uff0c\u591a\u5e74\u6765\u8fd9\u4e9b\u6a21\u5f0f\u5df2\u7ecf\u6210\u4e3a\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u7684\u8f85\u52a9\u5de5\u5177\u3002"),Object(l.b)("p",null,"\u5c3d\u7ba1\u9762\u5411\u5207\u9762\u7684\u7f16\u7a0b\uff08AOP\uff09\u4e5f\u6709\u5176\u4ed6\u7528\u9014\uff0c\u4f46 DCI \u6ee1\u8db3\u4e86\u8bb8\u591a AOP \u7684\u5e94\u7528\u4ee5\u53ca Aspects \u5728\u89e3\u51b3\u95ee\u9898\u65b9\u9762\u7684\u8bb8\u591a\u76ee\u6807\u3002\u6839\u636e AOP \u7684\u57fa\u672c\u539f\u7406\uff0cDCI \u57fa\u4e8e\u6df1\u5c42\u6b21\u7684\u53cd\u5c04\u6216\u5143\u7f16\u7a0b\u3002\n\u4e0e Aspects \u4e0d\u540c\uff0c\u89d2\u8272\u805a\u5408\u5e76\u7ec4\u5408\u5f97\u5f88\u597d\u3002Context \u63d0\u4f9b\u89d2\u8272\u96c6\u4e4b\u95f4\u7684\u5173\u8054\u7684\u8303\u56f4\u5173\u95ed\uff0c\u800c Aspect \u4ec5\u4e0e\u5e94\u7528\u5b83\u4eec\u7684\u5bf9\u8c61\u914d\u5bf9\u3002\n\u5728\u8bb8\u591a\u65f6\u5019\uff0c\u867d\u7136\u6df7\u5408\u672c\u8eab\u7f3a\u4e4f\u6211\u4eec\u5728 Context \u8bed\u4e49\u4e2d\u53d1\u73b0\u7684\u52a8\u529b \uff0c\u4f46 DCI \u53cd\u6620\u4e86\u6df7\u5408\u98ce\u683c\u7b56\u7565\u3002\nDCI \u5b9e\u73b0\u4e86\u591a\u8303\u5f0f\u8bbe\u8ba1\u7684\u8bb8\u591a\u7b80\u5355\u76ee\u6807\uff0c\u80fd\u591f\u5c06\u8fc7\u7a0b\u903b\u8f91\u4e0e\u5bf9\u8c61\u903b\u8f91\u5206\u5f00\u3002\u7136\u800c\uff0cDCI \u5177\u6709\u6bd4\u591a\u8303\u5f0f\u8bbe\u8ba1\u63d0\u4f9b\u7684\u66f4\u5f3a\u5927\u7684\u6280\u672f\u66f4\u597d\u7684\u8026\u5408\u548c\u5185\u805a\u6548\u679c"),Object(l.b)("p",null,"\u7ed3\u5408 ATM \u6c47\u6b3e\u573a\u666f\u6848\u4f8b\uff0c\u8bb2\u89e3\u4e86\u4e00\u4e0b DCI\n\u89d2\u8272\u63d0\u4f9b\u4e86\u548c\u7528\u6237\u76f8\u5173 \u81ea\u7136\u7684\u8fb9\u754c\uff0c\u4ee5\u8f6c\u8d26\u4e3a\u4f8b\uff0c\u6211\u4eec\u5b9e\u9645\u8c08\u8bba\u7684\u662f\u94b1\u7684\u8f6c\u79fb\uff0c\u4ee5\u53ca\u6e90\u8d26\u6237\u548c\u76ee\u6807\u8d26\u6237\u7684\u89d2\u8272\uff0c\u7b97\u6cd5(\u7528\u4f8b \u89d2\u8272\u884c\u4e3a\u96c6\u5408)\u5e94\u8be5\u662f\u8fd9\u6837\uff1a\n1.\u8d26\u6237\u62e5\u6709\u4eba\u9009\u62e9\u4ece\u4e00\u4e2a\u8d26\u6237\u5230\u53e6\u5916\u4e00\u4e2a\u8d26\u6237\u7684\u949e\u7968\u8f6c\u79fb\u3002\n2.\u7cfb\u7edf\u663e\u793a\u6709\u6548\u8d26\u6237\n3.\u7528\u6237\u9009\u62e9\u6e90\u8d26\u6237\n4.\u7cfb\u7edf\u663e\u793a\u5b58\u5728\u7684\u6709\u6548\u8d26\u6237\n5.\u8d26\u6237\u62e5\u6709\u4eba\u9009\u62e9\u76ee\u6807\u8d26\u6237\u3002\n6.\u7cfb\u7edf\u9700\u8981\u6570\u989d\n7.\u8d26\u6237\u62e5\u6709\u4eba\u8f93\u5165\u6570\u989d\n8.\u949e\u7968\u8f6c\u79fb \u8d26\u6237\u8fdb\u884c\u4e2d(\u786e\u8ba4\u91d1\u989d \u4fee\u6539\u8d26\u6237\u7b49\u64cd\u4f5c)"),Object(l.b)("p",null,"\u8bbe\u8ba1\u8005\u7684\u5de5\u4f5c\u5c31\u662f\u628a\u8fd9\u4e2a\u7528\u4f8b\u8f6c\u5316\u4e3a\u7c7b\u4f3c\u4ea4\u6613\u7684\u7b97\u6cd5\uff0c\u5982\u4e0b\uff1a\n1.\u6e90\u8d26\u6237\u5f00\u59cb\u4ea4\u6613\u4e8b\u52a1\n2.\u6e90\u8d26\u6237\u786e\u8ba4\u4f59\u989d\u53ef\u7528\n3.\u6e90\u8d26\u6237\u51cf\u5c11\u5176\u5e10\u76ee\n4.\u6e90\u8d26\u6237\u8bf7\u6c42\u76ee\u6807\u8d26\u6237\u589e\u52a0\u5176\u5e10\u76ee\n5.\u6e90\u8d26\u6237\u8bf7\u6c42\u76ee\u6807\u8d26\u6237\u66f4\u65b0\u5176\u65e5\u5fd7 log\n6.\u6e90\u8d26\u6237\u7ed3\u675f\u4ea4\u6613\u4e8b\u52a1\n7.\u6e90\u8d26\u6237\u663e\u793a\u7ed9\u8d26\u6237\u62e5\u6709\u4eba\u8f6c\u8d26\u6210\u529f\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plain"},'template <class ConcreteAccountType>\nclass TransferMoneySourceAccount: public MoneySource\n{\nprivate:\n ConcreteDerived *const self() {\n    return static_cast<ConcreteDerived*>(this);\n }\n void transferTo(Currency amount) {\n    // This code is reviewable and\n    // meaningfully testable with stubs!\n    beginTransaction();\n    if (self()->availableBalance() < amount) {\n      endTransaction();\n      throw InsufficientFunds();\n    } else {\n      self()->decreaseBalance(amount);\n      recipient()->increaseBalance (amount);\n      self()->updateLog("Transfer Out", DateTime(),\n                amount);\n      recipient()->updateLog("Transfer In",\n             DateTime(), amount);\n    }\n    gui->displayScreen(SUCCESS_DEPOSIT_SCREEN);\n    endTransaction();\n }\n\n\n')),Object(l.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(l.b)("p",null,"\u672c\u6b21\u63d0\u51fa\u72ec\u5230\u89c2\u70b9\u7684\u540c\u5b66\u6709\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/ascoders"},"@ascoders"),"\u3001",Object(l.b)("a",{parentName:"p",href:"https://github.com/TingGe"},"@TingGe"),"\u3001",Object(l.b)("a",{parentName:"p",href:"https://github.com/zhaoyangsoft"},"@zy"),"\uff0c\u7cbe\u8bfb\u7531\u6b64\u5f52\u7eb3\u3002"),Object(l.b)("h3",{id:"\u5c1d\u8bd5\u4ece\u4eba\u7c7b\u601d\u7ef4\u89d2\u5ea6\u51fa\u53d1-\u7406\u89e3"},"\u5c1d\u8bd5\u4ece\u4eba\u7c7b\u601d\u7ef4\u89d2\u5ea6\u51fa\u53d1 \u7406\u89e3"),Object(l.b)("p",null,"DCI \u5373 \u6570\u636e(data) \u573a\u666f(context) \u4ea4\u4e92(interactive)\u3002"),Object(l.b)("p",null,"DCI \u4e4b\u6240\u4ee5\u88ab\u63d0\u51fa\uff0c\u662f\u56e0\u4e3a\u4f20\u7edf mvc \u4ee3\u7801\uff0c\u5728\u8d8a\u6765\u8d8a\u4e30\u5bcc\u7684\u4ea4\u4e92\u9700\u6c42\u4e2d",Object(l.b)("strong",{parentName:"p"},"\u53d8\u5f97\u8d8a\u6765\u8d8a\u96be\u8bfb"),"\u3002\u6709\u4eba\u4f1a\u89c9\u5f97\uff0c\u590d\u6742\u7684\u9700\u6c42 mvc \u4e5f\u53ef\u4ee5 cover \u4f4f\uff0c\u8bda\u7136\u5982\u6b64\uff0c\u4f46\u5f88\u5c11\u6709\u4eba\u80fd\u53ea\u8bfb\u4e00\u904d\u6e90\u7801\u5c31\u80fd\u7406\u89e3\u7a0b\u5e8f\u5904\u7406\u4e86\u54ea\u4e9b\u4e8b\u60c5\uff0c\u8fd9\u662f\u56e0\u4e3a\u4eba\u7c7b\u601d\u7ef4\u4e0e mvc \u7684\u4f20\u7edf\u7a0b\u5e8f\u8bbe\u8ba1\u601d\u60f3\u5b58\u5728\u9e3f\u6c9f\uff0c\u6211\u4eec\u9700\u8981\u8111\u8865\u5185\u5bb9\u5f88\u591a\uff0c\u624d\u4f1a\u89c9\u5f97\u96be\u5ea6\u3002"),Object(l.b)("p",null,"\u73b0\u5728\u4ecd\u6709\u5927\u91cf\u7a0b\u5e8f",Object(l.b)("strong",{parentName:"p"},"\u4f7f\u7528\u9762\u5411\u5bf9\u8c61\u7684\u601d\u60f3\u8868\u8fbe\u4ea4\u4e92\u884c\u4e3a"),"\uff0c\u5f53\u6211\u4eec\u628a\u6240\u6709\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u8bb0\u5f55\u5728\u8111\u6d77\u4e2d\u65f6\uff0c\u53ef\u80fd\u5bf9\u8c61\u4e4b\u95f4\u4ea4\u4e92\u884c\u4e3a\u4f1a\u6bd4\u8f83\u6e05\u695a\uff0c\u4f46\u4efb\u65e0\u6cd5\u8f7b\u677e\u7406\u89e3\uff0c\u56e0\u4e3a\u5bf9\u8c61\u7684\u5c01\u88c5\u4f1a\u5bfc\u81f4\u5185\u805a\u6027\u4e0d\u65ad\u589e\u52a0\uff0c\u4ea4\u4e92\u903b\u8f91\u4f1a\u5728\u4e0d\u540c\u5bf9\u8c61\u4e4b\u95f4\u8df3\u8f6c\uff0c\u5bf9\u8c61\u4e4b\u95f4\u7684\u5d4c\u5957\u5173\u7cfb\u5728\u590d\u6742\u7cfb\u7edf\u4e2d\u65e0\u7591\u662f\u4e00\u4e2a\u7406\u89e3\u8d1f\u62c5\u3002"),Object(l.b)("p",null,"DCI \u5c1d\u8bd5\u4ece\u4eba\u7c7b\u601d\u7ef4\u89d2\u5ea6\u51fa\u53d1\uff0c\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff1a\u4e3a\u4ec0\u4e48\u5728\u770b\u7535\u5f71\u65f6\u4f1a\u8f7b\u8f7b\u677e\u677e\u7684\u7406\u89e3\u6545\u4e8b\u4e3b\u7ebf\u5462\uff1f\u56de\u60f3\u4e00\u4e0b\u6211\u4eec\u770b\u7535\u5f71\u7684\u8fc7\u7a0b\uff0c\u770b\u5230\u4e00\u4e2a\u753b\u9762\u65f6\uff0c\u6211\u4eec\u4f1a\u601d\u8003\u4e09\u4ef6\u4e8b\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u753b\u9762\u91cc\u6709\u4ec0\u4e48\u4eba\u6216\u7269\uff1f"),Object(l.b)("li",{parentName:"ol"},"\u4eba\u6216\u7269\u53d1\u751f\u4e86\u4ec0\u4e48\u884c\u4e3a\u3001\u4ea4\u4e92\uff1f"),Object(l.b)("li",{parentName:"ol"},"\u73b0\u5728\u5728\u54ea\uff1f\u53a8\u623f\uff1f\u592a\u7a7a\u8231\uff1f\u6216\u8005\u539f\u59cb\u68ee\u6797\uff1f")),Object(l.b)("p",null,"\u5f88\u5feb\u628a\u8fd9\u4e09\u4ef6\u4e8b\u5f04\u6e05\u695a\uff0c\u6211\u4eec\u5c31\u80fd\u5feb\u901f\u7406\u89e3\u5f53\u524d\u573a\u666f\u7684\u903b\u8f91\uff0c\u5e76\u4e14",Object(l.b)("strong",{parentName:"p"},"\u8f7b\u677e\u7406\u89e3\u8be5\u573a\u666f\u7ee7\u7eed\u53d1\u751f\u7684\u72b6\u51b5"),"\uff0c\u5373\u4fbf\u662f\u76d7\u68a6\u7a7a\u95f4\u8fd9\u79cd\u70e7\u8111\u7684\u7535\u5f71\uff0c\u5f53\u6211\u4eec\u641e\u6e05\u695a\u8fd9\u4e09\u4e2a\u95ee\u9898\u540e\uff0c\u5c31\u7b97\u8857\u9053\u53d1\u751f\u4e86 180 \u5ea6\u626d\u66f2\uff0c\u4e5f\u4e0d\u4f1a\u5b58\u5728\u7406\u89e3\u969c\u788d\uff0c\u53cd\u800c\u53ef\u4ee5\u5403\u7740\u7206\u7c73\u82b1\u4eab\u53d7\uff0c\u76f4\u5230\u5207\u6362\u5230\u4e0b\u4e00\u4e2a\u573a\u666f\u4e3a\u6b62\u3002"),Object(l.b)("p",null,"\u5f53\u6211\u4eec\u628a\u8857\u9053\u626d\u66f2 180 \u5ea6\u7684\u80fd\u529b\u653e\u5728\u8857\u9053\u5bf9\u8c61\u4e0a\u65f6\uff0c\u7406\u89e3\u5c31\u53d8\u7684\u590d\u6742\u4e86\uff1a\u8fd9\u4e2a\u51fd\u6570\u4ec0\u4e48\u65f6\u5019\u88ab\u8c03\u7528\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u597d\u597d\u627f\u8f7d\u8f66\u8f86\u800c\u81ea\u5df1\u53d1\u751f\u626d\u66f2\uff1f\u8fd9\u5c31\u50cf\u7535\u5f71\u5f00\u59cb\u65f6\uff0c\u628a\u7535\u5f71\u91cc\u64ad\u653e\u7684\u6240\u6709\u5173\u4e8e\u8857\u9053\u7684\u72b6\u6001\u90fd\u8d70\u9a6c\u706f\u8fc7\u4e00\u904d\uff1a\u6211\u4eec\u770b\u5230\u8857\u9053\u901a\u8fc7\u4e86\u8f66\u8f86\u3001\u53c8\u5377\u66f2\u3001\u53c8\u53d1\u751f\u4e86\u7206\u70b8\uff0c\u5b9e\u5728\u89c9\u5f97\u83ab\u540d\u5176\u5999\u3002"),Object(l.b)("p",null,"\u7406\u89e3\u4ee3\u7801\u4e5f\u662f\u5982\u6b64\uff0c\u5f53\u4ea4\u4e92\u884c\u4e3a\u590d\u6742\u65f6\uff0c\u628a\u4ea4\u4e92\u548c\u573a\u666f\u5206\u522b\u62bd\u8c61\u51fa\u6765\uff0c\u4ee5\u573a\u666f\u4e3a\u5207\u5165\u70b9\u4ea4\u4e92\u6570\u636e\u3002"),Object(l.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4f20\u7edf\u7684 mvc \u53ef\u80fd\u4f1a\u8fd9\u4e48\u7ec4\u7ec7\u4ee3\u7801\uff1a"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"UserModel"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'class My {\n  private name = "ascoders" // \u540d\u5b57\n  private skills = ["javascript", "nodejs", "\u5207\u56fe"] // \u6280\u80fd\n  private hp = 100 // \u751f\u547d\u503c\uff1f\uff1f\n  private account = new Account() // \u8d26\u6237\u76f8\u5173\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"UserController"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"class Controller {\n  private my = new My()\n  private account = new Account()\n  private accountController = new AccountController()\n\n  public cook() {\n    // \u505a\u996d\n  }\n\n  public coding() {\n    // \u5199\u4ee3\u7801\n  }\n\n  public fireball() {\n    // \u6413\u706b\u7403\u672f\u3002\u3002\uff1f\n  }\n\n  public underAttack() {\n    // \u53d7\u5230\u653b\u51fb\uff1f\uff1f\n  }\n\n  public pay() {\n    // \u652f\u4ed8\uff0c\u7528\u5230\u4e86 account \u4e0e accountController\n  }\n}\n")),Object(l.b)("p",null,"\u8fd9\u53ea\u662f\u6211\u81ea\u5df1\u7684\u884c\u4e3a\uff0c\u5f53\u6211\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u4e0e\u6587\u7ae0\u5bf9\u8c61\u3001\u4ed8\u6b3e\u884c\u4e3a\u53d1\u751f\u8054\u52a8\u65f6\uff0c\u5c31\u53d1\u751f\u4e86\u5404\u79cd\u5404\u6837\u7684\u8df3\u8f6c\u3002\u5230\u76ee\u524d\u4e3a\u6b62\u6211\u8fd8\u4e0d\u662f\u975e\u5e38\u6392\u65a5\u8fd9\u79cd\u505a\u6cd5\uff0c\u6bd5\u7adf\u8fd9\u6837\u662f\u975e\u5e38\u4e3b\u6d41\u7684\uff0c\u524d\u7aef\u6570\u636e\u7ba1\u7406\u4e2d\uff0c\u4e0d\u8bba\u662f redux\uff0c\u8fd8\u662f mobx\uff0c\u90fd\u7c7b\u4f3c MVC\u3002"),Object(l.b)("p",null,"\u4e0d\u8bba\u5982\u4f55\uff0c\u5c1d\u8bd5\u4e00\u4e0b DCI \u7684\u601d\u8def\u5427\uff0c\u770b\u770b\u662f\u5426\u4f1a\u50cf\u770b\u7535\u5f71\u4e00\u6837\u8f7b\u677e\u7684\u7406\u89e3\u4ee3\u7801\uff1a"),Object(l.b)("p",null,"\u4ee5\u4e0a\u9762\u5411\u5bf9\u8c61\u601d\u60f3\u4e3b\u8981\u8868\u8fbe\u4e86 4 \u4e2a\u573a\u666f\uff0c\u5bb6\u5ead\u3001\u5de5\u4f5c\u3001\u68a6\u5883\u3001\u8d2d\u7269\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"home.scene.scala"),Object(l.b)("li",{parentName:"ol"},"work.scene.scala"),Object(l.b)("li",{parentName:"ol"},"dream.scene.scala"),Object(l.b)("li",{parentName:"ol"},"buy.scene.scala")),Object(l.b)("p",null,"\u4ee5\u7a0b\u5e8f\u5458\u5de5\u4f5c\u4e3a\u4f8b\uff0c\u5728\u5de5\u4f5c\u573a\u666f\u4e0b\uff0c\u5199\u4ee3\u7801\u53ef\u4ee5\u586b\u5145\u6211\u4eec\u7684\u94b1\u5305\uff0c\u90a3\u4e48\u6211\u4eec\u770b\u5230\u4e00\u4e2a\u7a0b\u5e8f\u5458\u7684\u94b1\u5305\uff1a"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"codingWallet.scala"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scala"},"case class CodingWallet(name: String, var balance: Int) {\n  def coding(line: Int) { balance += line * 1 }\n}\n")),Object(l.b)("p",null,"\u5199\u4e00\u884c\u4ee3\u7801\u53ef\u4ee5\u8d5a 1 \u5757\u94b1\uff0c\u5b83\u4e0d\u9700\u8981\u77e5\u9053\u5728\u54ea\u4e2a\u573a\u666f\u88ab\u4f7f\u7528\uff0c\u7a0b\u5e8f\u5458\u7684\u94b1\u5305\u53ea\u8981\u5173\u6ce8\u628a\u4ee3\u7801\u53d8\u6210\u94b1\u3002"),Object(l.b)("p",null,"\u4ea4\u4e92\u662f\u57fa\u4e8e\u573a\u666f\u7684\uff0c\u6240\u4ee5\u4ea4\u4e92\u5c5e\u4e8e\u573a\u666f\uff0c\u5199\u4ee3\u7801\u8d5a\u94b1\u7684\u4ea4\u4e92\uff0c\u653e\u5728\u5de5\u4f5c\u573a\u666f\u4e2d\uff1a"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"work.scene.scala"),"\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scala"},'object MoneyTransferApp extends App {\n\n  @context\n  class MoneyTransfer(wallet: CodingWallet, time: int) {\n    // \u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0c\u5de5\u4f5c 1 \u5c0f\u65f6\uff0c\u53ef\u4ee5\u5199 100 \u884c\u4ee3\u7801\n    // \u5f00\u59cb\u5de5\u4f5c\uff01\n    wallet.working\n\n    role wallet {                     \n      def working() {                 \n        wallet.coding(time)       \n      }\n    }\n  }\n\n  // \u94b1\u5305\u9ed8\u8ba4\u6709 3000 \u5143\n  val wallet = CodingWallet("wallet", 3000)\n\n  // \u521d\u59cb\u5316\u5de5\u4f5c\u573a\u666f\uff0c\u5de5\u4f5c\u4e86 1 \u5c0f\u65f6\n  new MoneyTransfer(wallet, 1)\n\n  // \u6b64\u65f6\u94b1\u5305\u4e00\u5171\u62e5\u6709 3100 \u5143\n  println(wallet.balance)\n}\n')),Object(l.b)("p",null,"\u5c0f\u7ed3\uff1a\uff0c\u5c31\u662f\u628a\u6570\u636e\u4e0e\u4ea4\u4e92\u5206\u5f00\uff0c\u989d\u5916\u589e\u52a0\u4e86",Object(l.b)("strong",{parentName:"p"},"\u573a\u666f"),"\uff0c\u4ea4\u4e92\u5c5e\u4e8e\u573a\u666f\uff0c\u83b7\u53d6\u6570\u636e\u8fdb\u884c\u4ea4\u4e92\u3002\u539f\u6587\u7684\u8fd9\u5f20\u56fe\u63cf\u8ff0\u4e86 DCI \u4e0e MVC \u4e4b\u95f4\u7684\u5173\u7cfb\uff1a"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408175742.png",alt:null})),Object(l.b)("h3",{id:"\u53d1\u73b0\u5e76\u68b3\u7406\u73b0\u4ee3\u524d\u7aef\u6a21\u5f0f\u548c\u6982\u5ff5\u7684\u86db\u4e1d\u9a6c\u8ff9"},"\u53d1\u73b0\u5e76\u68b3\u7406\u73b0\u4ee3\u524d\u7aef\u6a21\u5f0f\u548c\u6982\u5ff5\u7684\u86db\u4e1d\u9a6c\u8ff9"),Object(l.b)("p",null,"\u73b0\u4ee3\u524d\u7aef\u53d7\u76ca\u4e8e\u4f4e\u95e8\u69db\u548c\u5f00\u653e\uff0c\u4f34\u968f OO \u548c\u5404\u79cd MV\uff0a \u76db\u884c\uff0c\u4e5f\u51fa\u73b0\u4e86\u8d8a\u6765\u8d8a\u591a\u7684\u6982\u5ff5\u3001\u6a21\u5f0f\u548c\u5b9e\u8df5\u3002\u800c DCI \u4f5c\u4e3a MVC \u7684\u8865\u5145\uff0c\u8bd5\u56fe\u901a\u8fc7\u5f15\u5165\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u4e00\u4e9b\u6982\u5ff5\uff0c\u6765\u5e73\u8861 OO \u3001\u6570\u636e\u7ed3\u6784\u548c\u7b97\u6cd5\u6a21\u578b\u3002\u503c\u5f97\u6211\u4eec\u6d25\u6d25\u4e50\u9053\u7684\u5982 Mixins\u3001Multiple dispatch\u3001 \u4f9d\u8d56\u6ce8\u5165\uff08DI\uff09\u3001Multi-paradigm design\u3001\u9762\u5411\u5207\u9762\u7f16\u7a0b\uff08AOP\uff09\u90fd\u662f\u4e0d\u9519\u7684\u3002\u5982\u679c\u5bf9\u8fd9\u4e9b\u611f\u5174\u8da3\uff0c\u6df1\u6316\u4e0b AngularJS \u5728\u8fd9\u65b9\u9762\u7684\u5b9e\u8df5\u4f1a\u6709\u4e0d\u5c11\u6536\u83b7\u3002\n\u5f53\u7136\uff0c\u4e5f\u6709\u53e6\u8f9f\u9014\u5f84\u7684\uff0c\u5982 Flux \u5219\u91c7\u7528\u4e86 DDD/CQRS \u67b6\u6784\u3002"),Object(l.b)("p",null,"\u8f6f\u4ef6\u67b6\u6784\u8bbe\u8ba1\uff0c\u662f\u4e00\u4e2a\u5f88\u5927\u7684\u8bdd\u9898\uff0c\u4e5f\u662f\u503c\u5f97\u6bcf\u4f4d\u5de5\u7a0b\u5e08\u957f\u671f\u5b9e\u8df5\u548c\u601d\u8003\u7684\u5185\u5bb9\u3002\u4e2a\u4eba\u7684\u51e0\u70b9\u4f53\u4f1a\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u4e00\u4e2a\u67b6\u6784\uff0c\u5f80\u5f80\u5f3a\u8c03\u804c\u8d23\u5206\u79bb\uff0c\u901a\u8fc7\u5206\u5c42\u548c\u4f9d\u8d56\u539f\u5219\uff0c\u6765\u89e3\u51b3\u7a0b\u5e8f\u5185\u3001\u7a0b\u5e8f\u95f4\u7684\u76f8\u4e92\u901a\u8baf\u95ee\u9898\uff1b"),Object(l.b)("li",{parentName:"ol"},"\u77e5\u9053\u6700\u597d\u7684\u51e0\u79cd\u53ef\u80fd\u7684\u67b6\u6784\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u521b\u5efa\u4e00\u4e2a\u9002\u5408\u7684\u4f18\u5316\u65b9\u6848\uff1b"),Object(l.b)("li",{parentName:"ol"},"\u6700\u540e\uff0c\u5fc5\u987b\u8981\u8bb0\u4f4f\uff0c\u7a0b\u5e8f\u5fc5\u987b\u9075\u5faa\u7684\u67b6\u6784\u3002")),Object(l.b)("p",null,"\u5206\u4eab\u4e9b\u67b6\u6784\u76f8\u5173\u7684\u6587\u7ae0\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.codeproject.com/Articles/66585/Comparison-of-Architecture-presentation-patterns-M"},"Comparison of Architecture presentation patterns MVP(SC),MVP(PV),PM,MVVM and MVC")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.artima.com/articles/dci_vision.html"},"The DCI Architecture: A New Vision of Object-Oriented Programming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.bbsmax.com/A/pRdBWY3ezn/"},"\u5e72\u51c0\u7684\u67b6\u6784 The Clean Architecture")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://gxnotes.com/article/71237.html"},"MVC \u7684\u66ff\u4ee3\u65b9\u6848")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://blog.csdn.net/lihenair/article/details/51791915"},"\u5c55\u793a\u6a21\u5f0f\u67b6\u6784\u6bd4\u8f83 MVP(SC)\uff0cMVP(PV)\uff0cPM\uff0cMVVM \u548c MVC")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/zenany/weekly/blob/master/resources/software_architecture.md"},"Software Architecture Design")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.jimmylv.info/2016-07-07-what-the-flux-on-flux-ddd-and-cqrs/"},"\u3010\u8bd1\u3011\u4ec0\u4e48\u662f Flux \u67b6\u6784\uff1f\uff08\u517c\u8c08 DDD \u548c CQRS\uff09"))),Object(l.b)("h3",{id:"\u7ed3\u5408-dci-\u8bbe\u60f3\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u5230\u4e00\u4e9b\u8bbe\u8ba1\u65b9\u6cd5\u548c\u539f\u5219"},"\u7ed3\u5408 DCI \u8bbe\u60f3\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u5230\u4e00\u4e9b\u8bbe\u8ba1\u65b9\u6cd5\u548c\u539f\u5219"),Object(l.b)("p",null,"\u6211\u4eec\u5728\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u591a\u591a\u5c11\u5c11\u90fd\u4f1a\u4f7f\u7528\u5230\u4e00\u4e9b\u8bbe\u8ba1\u65b9\u6cd5\u548c\u539f\u5219\nDCI \u91cd\u70b9\u662f\u5173\u6ce8 \u6570\u636e\u7684\u4e0d\u540c\u573a\u666f\u7684\u4ea4\u4e92\u884c\u4e3a\uff0c \u662f\u9762\u5411\u5bf9\u8c61\u7cfb\u7edf \u72b6\u6001\u548c\u884c\u4e3a\u7684\u4e00\u79cd\u8303\u5f0f\u8bbe\u8ba1\uff1b"),Object(l.b)("p",null,"\u5b83\u80fd\u591f\u5c06\u8fc7\u7a0b\u903b\u8f91\u4e0e\u5bf9\u8c61\u903b\u8f91\u5206\u5f00\uff0c\u662f\u4e00\u79cd\u5178\u578b\u7684\u884c\u4e3a\u6a21\u5f0f\u8bbe\u8ba1\uff1b\n\u5f88\u597d\u7684\u70b9\u662f \u5b83\u6839\u636e AOP \u7684\u57fa\u672c\u539f\u7406\uff0cDCI \u63d0\u51fa\u57fa\u4e8e AOP \u6df1\u5c42\u6b21\u7684\u5143\u7f16\u7a0b(\u53ef\u4ee5\u7406\u89e3\u6210\u9762\u5411\u63a5\u53e3\u7f16\u7a0b)\uff0c \u53bb\u4fc3\u4f7f\u7cfb\u7edf\u7684\u5185\u805a\u6548\u679c\u548c\u964d\u4f4e\u8026\u5408\u5ea6\uff1b"),Object(l.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a\n\u5728\u4e00\u4e2a BI \u7cfb\u7edf\u4e2d\uff0c \u5728\u4e1a\u52a1\u7684\u53d1\u5c55\u4e2d\uff0c \u8fd9\u4e2a\u7cfb\u7edf\u4f7f\u7528\u5230\u4e86\u591a\u5957\u7684 \u5e95\u5c42\u56fe\u8868\u5e93\uff0c\u6bd4\u5982\uff1a Echarts, G2\uff0cRecharts, FusionChart;  \u7b49\u7b49\uff1b"),Object(l.b)("p",null,"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u5982\u4f55\u53bb\u540c\u65f6\u652f\u6301 \u8fd9\u4e9b\u5e95\u5c42\u5e93\uff0c \u5e76\u4e14\u8fbe\u5230\u5f88\u5bb9\u6613\u5207\u6362\u7684\u4e00\u4e2a\u6548\u679c\uff1f"),Object(l.b)("li",{parentName:"ol"},"\u5982\u4f55\u53bb\u9762\u5411\u672a\u6765\u7684\u8003\u8651 \u5c06\u6765\u63a5\u5165\u66f4\u591a\u7c7b\u578b\u7684\u56fe\u8868\uff1f"),Object(l.b)("li",{parentName:"ol"},"\u5982\u4f55\u53bb\u8003\u8651\u6269\u5c55\u4e1a\u52a1 \u5bf9\u56fe\u8868\u7684\u65e5\u76ca\u589e\u5f3a\u7684\u4e1a\u52a1\u529f\u80fd(\u5982: \u884c\u5217\u8f6c\u6362\u3001\u667a\u80fd\u683c\u5f0f\u5316 \u7b49\u7b49)")),Object(l.b)("p",null,"\u5e26\u7740\u8fd9\u4e9b\u95ee\u9898\uff0c \u6211\u4eec\u518d\u6765\u770b\u4e0b DCI \u7ed9\u6211\u4eec\u7684\u542f\u793a\uff0c \u6211\u4eec\u6765\u8bd5\u8bd5\u770b\u76f8\u5e94\u7684\u89e3\u6cd5:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u56fe\u8868\u7684\u6a21\u578b\u6570\u636e\u5c31\u662f \u6570\u636e Data , \u6211\u4eec\u53ef\u4ee5\u628a","[\u65e5\u76ca\u589e\u5f3a\u7684\u4e1a\u52a1\u529f\u80fd]"," \u8ba4\u4e3a\u662f\u5404\u4e2a\u573a\u666f\u4ea4\u4e92 Interactions;"),Object(l.b)("li",{parentName:"ol"},"\u63a5\u5165\u66f4\u591a\u7c7b\u578b\u7684\u56fe\u8868\u548b\u4e48\u641e\uff1f",Object(l.b)("br",{parentName:"li"}),"\u4e0d\u540c\u7c7b\u578b\u7684\u56fe\u8868\u5176\u5b9e\u662f\u56fe\u8868\u6570\u636e\u6a21\u578b\u7684\u8f6c\u6362\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u628a\u8fd9\u4e9b\u8f6c\u6362\u7684\u884c\u4e3a\u8fc7\u7a0b\u4f5c\u4e3a\u4e00\u4e2a\u4e2a\u7684\u5207\u7247(Aspect)\uff0c\u6bcf\u4e2a\u5207\u7247\u90fd\u662f\u72ec\u7acb\u7684\uff0c \u677e\u8026\u5408\u7684 ; ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408175824.png",alt:null})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"\u63a5\u5165\u591a\u5957\u5e95\u5c42\u5e93\u600e\u4e48\u641e\uff1f \u6bcf\u4e2a\u56fe\u5f62\u5e93\u7684  build \u65b9\u6cd5\uff0crender \u65b9\u6cd5 \uff0c resize \u65b9\u6cd5\uff0crepaint \u65b9\u6cd5 \u90fd\u4e0d\u4e00\u6837 \uff0c\u600e\u4e48\u641e ?  \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 DCI \u63d0\u5230\u7684\u5143\u7f16\u7a0b- \u6211\u4eec\u5728\u8fd9\u91cc\u7406\u89e3\u4e3a\u9762\u5411\u63a5\u53e3\u7f16\u7a0b\uff0c \u6211\u4eec\u5206\u88c5\u4e00\u5c42 \u7edf\u4e00\u7684\u63a5\u53e3\uff1b\n\u5229\u7528\u9762\u5411\u63a5\u53e3\u7684\u7236\u7c7b\u5f15\u7528\u6307\u5411\u5b50\u7c7b\u5bf9\u8c61  \u6211\u4eec\u5c31\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684 \u63a5\u5165\u66f4\u591a\u7684 implement \u63a5\u5165\u66f4\u591a\u7684\u56fe\u5f62\u5e93(\u5f53\u7136\uff0c\u4e00\u4e2a\u7cfb\u7edf\u7edf\u4e00\u4e00\u5957\u662f\u6700\u597d\u7684)\uff1b  ")),Object(l.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(l.b)("p",null,"DCI \u662f\u6570\u636e Data \u573a\u666f Context \u4ea4\u4e92 Interactions \u7684\u7b80\u79f0\uff0cDCI \u662f\u4e00\u79cd\u7279\u522b\u5173\u6ce8\u884c\u4e3a\u7684\u8bbe\u8ba1\u6a21\u5f0f(\u884c\u4e3a\u6a21\u5f0f)\uff0c\nDCI \u5173\u6ce8\u6570\u636e\u4e0d\u540c\u573a\u666f\u7684\u4ea4\u4e92\u884c\u4e3a\uff0c \u662f\u9762\u5411\u5bf9\u8c61 \u72b6\u6001\u548c\u884c\u4e3a\u7684\u4e00\u79cd\u8303\u5f0f\u8bbe\u8ba1\uff1bDCI \u5c1d\u8bd5\u4ece\u4eba\u7c7b\u601d\u7ef4\uff0c\u8fc7\u7a0b\u5316\u8bbe\u8ba1\u4e00\u4e9b\u884c\u4e3a\uff1b\nDCI \u4e5f\u4f1a\u4f7f\u7528\u4e00\u4e9b\u9762\u5411\u5207\u9762\u548c\u63a5\u53e3\u7f16\u7a0b\u7684\u8bbe\u8ba1\u601d\u60f3\u53bb\u8fbe\u5230\u9ad8\u5185\u805a\u4f4e\u8026\u5408\u7684\u76ee\u6807\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/20"},"\u7cbe\u8bfb\u300a\u67b6\u6784\u8bbe\u8ba1 \u4e4b DCI\u300b \xb7 Issue #20 \xb7 dt-fe/weekly"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c \u6b22\u8fce\u6765\u4e00\u8d77\u5b66\u4e60 \u5171\u540c\u63a2\u7d22\u3002")))}p.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,m=u["".concat(c,".").concat(O)]||u[O]||s[O]||l;return n?r.a.createElement(m,b(b({ref:t},o),{},{components:n})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);