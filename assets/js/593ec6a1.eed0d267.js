(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return i}));var n=a(3),c=a(7),r=(a(0),a(385)),b={title:"8. \u7cbe\u8bfb\u5165\u5751React\u524d\u6ca1\u6709\u4eba\u4f1a\u544a\u8bc9\u4f60\u7684\u4e8b",id:"008",hide_title:!0},l={unversionedId:"008",id:"008",isDocsHomePage:!1,title:"8. \u7cbe\u8bfb\u5165\u5751React\u524d\u6ca1\u6709\u4eba\u4f1a\u544a\u8bc9\u4f60\u7684\u4e8b",description:"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\u4e00\u4e2a\u7ec4\u5408\uff1a",source:"@site/weekly/008.\u7cbe\u8bfb\u5165\u5751React\u524d\u6ca1\u6709\u4eba\u4f1a\u544a\u8bc9\u4f60\u7684\u4e8b.md",slug:"/008",permalink:"/weekly/008",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/008.\u7cbe\u8bfb\u5165\u5751React\u524d\u6ca1\u6709\u4eba\u4f1a\u544a\u8bc9\u4f60\u7684\u4e8b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"7. \u7cbe\u8bfb \u8bf7\u505c\u6b62 css-in-js \u7684\u884c\u4e3a",permalink:"/weekly/007"},next:{title:"9. \u7cbe\u8bfb Immutable \u7ed3\u6784\u5171\u4eab",permalink:"/weekly/009"}},u=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u5185\u5bb9\u6982\u8981",id:"2-\u5185\u5bb9\u6982\u8981",children:[]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"React \u4e0a\u624b\u56f0\u96be",id:"react-\u4e0a\u624b\u56f0\u96be",children:[]},{value:"\u72b6\u6001\u7ba1\u7406\u7684\u8ff7\u601d",id:"\u72b6\u6001\u7ba1\u7406\u7684\u8ff7\u601d",children:[]},{value:"Redux \u4ea6\u975e\u4e07\u80fd\u89e3",id:"redux-\u4ea6\u975e\u4e07\u80fd\u89e3",children:[]},{value:"React \u4e0e Vue \u4e4b\u4e89",id:"react-\u4e0e-vue-\u4e4b\u4e89",children:[]},{value:"\u5c0f\u8d34\u58eb\uff1a\u5982\u4f55\u5728\u5f00\u6e90\u793e\u533a\u4f18\u96c5\u7684\u6495\u903c",id:"\u5c0f\u8d34\u58eb\uff1a\u5982\u4f55\u5728\u5f00\u6e90\u793e\u533a\u4f18\u96c5\u7684\u6495\u903c",children:[]}]},{value:"3 \u603b\u7ed3",id:"3-\u603b\u7ed3",children:[]}],o={toc:u};function i(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\u4e00\u4e2a\u7ec4\u5408\uff1a"),Object(r.b)("p",null,"\u4e00\u7bc7\u662f Gianluca Guarini \u5199\u7684 \u300a",Object(r.b)("a",{parentName:"p",href:"https://medium.com/@gianluca.guarini/things-nobody-will-tell-you-about-react-js-3a373c1b03b4"},"Things nobody will tell you about React.js"),"\u300b\uff0c\u6211\u5c06\u5b83\u8bd1\u4f5c \u300a\u90a3\u4e9b\u5165\u5751 React \u524d\u6ca1\u6709\u4eba\u4f1a\u63d0\u9192\u4f60\u7684\u4e8b\u300b\uff0c\u56e0\u4e3a\u4f5c\u8005\u884c\u6587\u4e2d\u660e\u663e\u5e26\u7740\u5bf9 React \u7684\u6279\u5224\u548c\u5931\u671b\u3002"),Object(r.b)("p",null,"\u53e6\u4e00\u7bc7\u5219\u662f Facebook \u5458\u5de5\uff0c\u4e5f\u662f Redux \u4f5c\u8005\u7684 Dan Abramov \u9488\u5bf9\u4e0a\u6587\u7684\u56de\u590d \u300a",Object(r.b)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/hey-thanks-for-feedback-bf9502689ca4"},"Hey, thanks for feedback!"),"\u300b\u3002"),Object(r.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408175219.png",alt:null})),Object(r.b)("p",null,"\u6211\u4e3a\u4ec0\u4e48\u8981\u9009\u8fd9\u7bc7\u6587\u7ae0\u5462\uff1f"),Object(r.b)("p",null,"\u6211\u4eec\u56e2\u961f\u6700\u65e9\u5728 2014 \u5e74\u4e2d\u5c31\u786e\u5b9a\u4e86 React \u4f5c\u4e3a\u672a\u6765\u7684\u53d1\u5c55\u65b9\u5411\uff0c\u90a3\u4e2a\u65f6\u5019\u5f88\u591a\u4eba\u90fd\u8fd8\u5728\u611f\u53f9 Angular\uff08\u90a3\u65f6\u5019\u8fd8\u662f Angular 1\uff09\u662f\u4e00\u4e2a\u591a\u4e48\u8d85\u524d\u7684\u6846\u67b6\uff0c\u5f88\u591a\u4eba\u751a\u81f3\u542c\u90fd\u6ca1\u6709\u542c\u8bf4\u8fc7 React\u3002"),Object(r.b)("p",null,"\u5728\u4e0d\u5230\u4e09\u5e74\u7684\u65f6\u95f4\u91cc\uff0cReact \u793e\u533a\u8fc5\u901f\u7684\u53d1\u5c55\u58ee\u5927\uff0c\u8bb8\u591a Angular\u3001Ember\u3001Knockout \u7b49\u6846\u67b6\u7684\u62e5\u8db8\uff0c\u6216\u4e3b\u52a8\u6216\u88ab\u52a8\u7684\u90fd\u9010\u6e10\u5f00\u59cb\u5411 React \u770b\u9f50\u3002"),Object(r.b)("p",null,"\u7ad9\u5728 React \u5df2\u7ecf\u7e41\u8363\u660c\u76db\u3001\u65e0\u9700\u56db\u5904\u5e03\u9053\u5ba3\u4f20\u7684\u4eca\u5929\uff0c\u6211\u4eec\u4e0d\u59a8\u51b7\u9759\u4e0b\u6765\u95ee\u95ee\u81ea\u5df1\uff0cReact \u771f\u7684\u662f\u4e00\u4e2a\u5b8c\u7f8e\u7684\u6846\u67b6\u5417\uff1f\u793e\u533a\u91cc\u4e00\u76f4\u4e0d\u7f3a\u5c11\u5410\u69fd\u7684\u58f0\u97f3\uff0c\u8fd9\u5468\u6211\u4eec\u5c31\u6765\u770b\u770b\uff0cReact \u5230\u5e95\u6709\u54ea\u4e9b\u69fd\u70b9\u3002"),Object(r.b)("h2",{id:"2-\u5185\u5bb9\u6982\u8981"},"2 \u5185\u5bb9\u6982\u8981"),Object(r.b)("p",null,"Gianluca Guarini \u7740\u91cd\u5410\u69fd\u7684\u70b9\u5728\u4e8e\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"React \u9879\u76ee\u6587\u4ef6\u7ec4\u7ec7\u89c4\u8303\u4e0d\u7edf\u4e00\uff0c\u793e\u533a\u4e2d Starter Kit \u592a\u591a\uff08100+\uff09\uff0c\u65b0\u624b\u4e0d\u77e5\u9053\u8be5\u600e\u4e48\u7ec4\u7ec7\u6587\u4ef6"),Object(r.b)("li",{parentName:"ul"},"\u7531\u4e8e React \u53ea\u5173\u5fc3 View \u5c42\uff0c\u5f00\u53d1\u8005\u5c31\u8981\u9762\u4e34\u9009\u62e9 mobx \u8fd8\u662f redux \u7684\u7ea0\u7ed3\uff0c\u65e0\u8bba\u9009\u62e9\u54ea\u79cd\u90fd\u4f1a\u5e26\u6765\u4e00\u7cfb\u5217\u7684\u95ee\u9898\uff08\u91cd\u65b0\u914d\u7f6e\u6784\u5efa\u811a\u672c\uff0c\u66f4\u65b0 eslint \u89c4\u5219\u7b49\uff09"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u9009\u4e86 mobx\uff0c\u4f1a\u53d1\u73b0 mobx \u65e0\u6cd5\u4fdd\u8bc1\u81ea\u5df1\u7684 store \u4e0d\u88ab\u5916\u90e8\u66f4\u65b0\uff08\u5b98\u65b9\u5efa\u8bae\u662f\u52a0\u4e0a\u7279\u6b8a\u7684\u524d\u7f00\uff09"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u9009\u4e86 redux\uff0c\u4f1a\u53d1\u73b0\u8981\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u9700\u8981\u5199\u5f88\u591a\u7684\u91cd\u590d\u4ee3\u7801\uff08\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u793e\u533a\u4e2d\u6709\u6d77\u91cf\u7684 redux helper \u5b58\u5728\uff09"),Object(r.b)("li",{parentName:"ul"},"\u8def\u7531\u7528\u8d77\u6765\u4e5f\u5f88\u86cb\u75bc\uff0c\u56e0\u4e3a React Router \u51e0\u4e4e\u662f\u793e\u533a\u4e2d\u552f\u4e00\u7684\u9009\u62e9\uff0c\u4f46\u662f\u8fd9\u8d27\u7248\u672c\u66f4\u65b0\u592a\u5feb\uff0c\u4e00\u4e0d\u5c0f\u5fc3\u5c31\u7528\u4e86\u5e9f\u5f03\u7684 API"),Object(r.b)("li",{parentName:"ul"},"\u7528 JSX \u7684\u65f6\u5019\u603b\u662f\u8981\u5d4c\u5f88\u591a\u6ca1\u5fc5\u8981\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"div")," \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},"span")),Object(r.b)("li",{parentName:"ul"},"\u8981\u4e0a\u624b\u4e00\u4e2a React \u5e94\u7528\uff0c\u8981\u914d\u7f6e\u5f88\u591a\u7684\u6784\u5efa\u5de5\u5177\u548c\u89c4\u5219\u624d\u80fd\u770b\u5230\u6548\u679c"),Object(r.b)("li",{parentName:"ul"},"...")),Object(r.b)("p",null,"Dan Abramov \u7684\u56de\u590d\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u300cReact 16.0 \u5f15\u5165\u7684 Fiber \u67b6\u6784\u4f1a\u5bfc\u81f4\u73b0\u6709\u4ee3\u7801\u5168\u90e8\u9700\u8981\u91cd\u6784\u300d\u7684\u8bf4\u6cd5\u662f\u4e0d\u5bf9\u7684\uff0c\u56e0\u4e3a\u65b0\u7684\u67b6\u6784\u505a\u5230\u4e86\u5411\u540e\u517c\u5bb9\uff0c\u800c\u4e14 Facebook \u5185\u90e8\u8d85\u8fc7 3 \u4e07\u4e2a\u7ec4\u4ef6\u90fd\u80fd\u65e0\u75db\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\u4e0a"),Object(r.b)("li",{parentName:"ul"},"\u7f3a\u5c11\u7edf\u4e00\u811a\u624b\u67b6\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7 create-react-app \u89e3\u51b3"),Object(r.b)("li",{parentName:"ul"},"\u89c9\u5f97 redux \u548c mobx \u7e41\u7410\u7684\u8bdd\uff0c\u5bf9\u4e8e\u521a\u521a\u4e0a\u624b\u7684\u5c0f\u5e94\u7528\u4e0d\u5efa\u8bae\u4f7f\u7528"),Object(r.b)("li",{parentName:"ul"},"React Router \u5347\u7ea7\u592a\u9891\u7e41\uff1f2015 \u5e74\u53d1\u5e03\u7684 1.0\uff0c2016 \u5e74 2 \u6708\u53d1\u5e03\u7684 2.0\uff0c2016 \u5e74 10 \u6708\u53d1\u5e03\u7684 3.0\u3002\u867d\u7136 4.0 \u7d27\u63a5\u7740 3.0 \u9a6c\u4e0a\u5c31\u53d1\u5e03\u4e86\uff0c\u4f46\u662f React Router \u5f88\u65e9\u5c31\u5df2\u7ecf\u516c\u5e03\u4e86\u8fd9\u6837\u7684\u5347\u7ea7\u8ba1\u5212\u3002"),Object(r.b)("li",{parentName:"ul"},"...")),Object(r.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(r.b)("p",null,"\u672c\u6b21\u63d0\u51fa\u72ec\u5230\u89c2\u70b9\u7684\u540c\u5b66\u6709\uff1a",Object(r.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/rccoder/answers"},"@rccoder"),"  ",Object(r.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/turbe-xue"},"@Turbe Xue")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Pines-Cheng"},"@Pines-Cheng")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jin5354"},"@An Yan")," ",Object(r.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/5ac53c9c0484e83672e1c1716bdf0ff9"},"@\u6de1\u82cd"),"  ",Object(r.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/3ec85a04bc9eaa35b1830874cc463a52"},"@\u9ec4\u5b50\u6bc5")," ",Object(r.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/twobin/pins/posts"},"@\u5bbe\u5f6c")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cisen"},"@cisen")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ybning"},"@Bobo")," \u7cbe\u8bfb\u7531\u6b64\u5f52\u7eb3\u3002"),Object(r.b)("p",null,"\u5f88\u9ad8\u5174\u80fd\u770b\u5230\u4e0d\u5c11\u65b0\u540c\u5b66\u79ef\u6781\u53c2\u4e0e\u5230\u7cbe\u8bfb\u7684\u8ba8\u8bba\u4e2d\u6765\uff0c\u6bcf\u4e00\u4e2a\u4eba\u7684\u58f0\u97f3\u90fd\u662f\u793e\u533a\u53d1\u5c55\u7684\u4e00\u4efd\u529b\u91cf\u3002"),Object(r.b)("h3",{id:"react-\u4e0a\u624b\u56f0\u96be"},"React \u4e0a\u624b\u56f0\u96be"),Object(r.b)("p",null,"\u5f88\u65e9\u4e4b\u524d\u6211\u4eec\u53bb\u56db\u5904\u5e03\u9053 React \u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u5f3a\u8c03 React \u5f88\u7b80\u5355\uff0c\u56e0\u4e3a\u5b83\u7684 public API \u975e\u5e38\u4e4b\u5c11\uff0cReact \u5b8c\u6574\u7684\u6587\u6863 1 \u4e2a\u5c0f\u65f6\u5c31\u80fd\u770b\u5b8c\u3002"),Object(r.b)("p",null,"\u90a3\u4e48\u8bf4\u300cReact \u4e0a\u624b\u56f0\u96be\u300d\u53c8\u662f\u4ece\u4f55\u8c08\u8d77\u5462\uff1f\u53c2\u4e0e\u7cbe\u8bfb\u7684\u540c\u5b66\u4e2d\u6709\u4e0d\u5c11\u90fd\u6709 Vue \u7684\u4f7f\u7528\u7ecf\u9a8c\uff08\u5305\u62ec\u672c\u5468\u5410\u69fd\u6587\u7684\u4f5c\u8005\uff09\uff0c\u6240\u4ee5\u4e0d\u514d\u4f1a\u628a\u4e24\u4e2a\u6846\u67b6\u4e0a\u624b\u7684\u96be\u6613\u7a0b\u5ea6\u653e\u5728\u5fc3\u91cc\u505a\u4e2a\u5bf9\u6bd4\u3002"),Object(r.b)("p",null,"\u90fd\u8bf4\u6ca1\u6709\u5bf9\u6bd4\u5c31\u6ca1\u6709\u4f24\u5bb3\uff0c\u5927\u5bb6\u666e\u904d\u7684\u89c2\u70b9\u662f Vue \u4e0a\u624b\u7b80\u5355\u3001\u6587\u6863\u6e05\u6670\u3001\u6784\u5efa\u5de5\u5177\u5b8c\u5584\u3001\u811a\u624b\u67b6\u7edf\u4e00\u2026\u2026\u518d\u53cd\u89c2 React\uff0c\u867d\u7136 Dan \u5728\u6587\u7ae0\u91cc\u505a\u4e86\u4e0d\u5c11\u89e3\u91ca\uff0c\u4f46\u5f15\u7528 @An Yan \u7684\u539f\u8bdd\uff0c\u300e\u4ed6\u4e5f\u53ea\u662f\u5728\u8bf4\u300c\u4e8b\u60c5\u6ca1\u6709\u90a3\u4e48\u7cdf\u7cd5\u300d\u300f\u3002"),Object(r.b)("p",null,"\u6240\u4ee5\u8bf4\uff0c\u5927\u5bb6\u8ba4\u4e3a\u7684 React \u4e0a\u624b\u56f0\u96be\uff0c\u5f88\u5927\u7a0b\u5ea6\u4e0a\u4e0d\u662f React \u672c\u8eab\uff0c\u800c\u662f React \u9644\u5e26\u7684\u751f\u6001\u5708\u91ce\u86ee\u53d1\u5c55\u592a\u5feb\uff0c\u5bfc\u81f4\u65b0\u4eba\u518d\u8fdb\u5165\u7684\u65f6\u5019\u666e\u904d\u611f\u89c9\u65e0\u6240\u9002\u4ece\u3002\u867d\u7136\u5b98\u65b9\u7684 create-react-app \u7f13\u89e3\u4e86\u8fd9\u4e00\u95ee\u9898\uff0c\u4f46\u8fd8\u6ca1\u6709\u4ece\u6839\u672c\u7a0b\u5ea6\u4e0a\u627e\u5230\u89e3\u6cd5\u3002"),Object(r.b)("h3",{id:"\u72b6\u6001\u7ba1\u7406\u7684\u8ff7\u601d"},"\u72b6\u6001\u7ba1\u7406\u7684\u8ff7\u601d"),Object(r.b)("p",null,"\u5728\u4eca\u65f6\u4eca\u65e5\u7684\u524d\u7aef\u5708\u5b50\u91cc\uff0c\u8bf4 React \u4e0d\u8bf4 Redux \u5c31\u50cf\u8bf4 Ruby \u5374\u4e0d\u8bf4 Rails \u4e00\u6837\uff0c\u603b\u611f\u89c9\u7f3a\u70b9\u513f\u4ec0\u4e48\u3002"),Object(r.b)("p",null,"\u56e0\u4e3a React \u5c06\u81ea\u5df1\u5b9a\u4f4d\u6210 View \u5c42\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6240\u4ee5\u5bf9\u4e8e\u4e2d\u5927\u578b\u4e1a\u52a1\u6765\u8bf4\u4e00\u4e2a\u5408\u9002\u7684\u72b6\u6001\u7ba1\u7406\u65b9\u6848\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u3002\u4ece\u6700\u65e9\u7684 Backbone Model\uff0c\u5230 Flux\uff0c\u518d\u5230 reflux\u3001Redux\uff0c\u518d\u5230 mobx \u548c redux-observable\uff0c\u4f60\u4e0d\u5f97\u4e0d\u611f\u53f9 React \u793e\u533a\u7684\u6d3b\u529b\u662f\u591a\u4e48\u5f3a\u5927\u3002"),Object(r.b)("p",null,"\u7136\u800c\u5f53\u4f60\u771f\u6b63\u5f00\u59cb\u505a\u65b0\u9879\u76ee\u67b6\u6784\u7684\u65f6\u5019\uff0c\u4f60\u5230\u5e95\u662f\u9009 Redux \u8fd8\u662f Mobx\uff0c\u7591\u60d1\u662f\u5c01\u88c5\u89e3\u51b3\u65b9\u6848\u5982 dva \u5462\uff1f @\u6de1\u82cd \u8ba4\u4e3a\uff0cRedux \u4e0e MobX\uff0cReact \u4e24\u5927\u72b6\u6001\u7ba1\u7406\u65b9\u6848\uff0c\u5404\u6709\u5343\u79cb\uff0cRedux \u5d07\u5c1a\u81ea\u7531\uff0c\u6269\u5c55\u6027\u597d\uff0c\u5374\u4e5f\u5e26\u6765\u4e86\u7e41\u7410\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5f02\u6b65\u8bf7\u6c42\u90fd\u5fc5\u987b\u5f15\u5165\u4e2d\u95f4\u4ef6\u624d\u80fd\u89e3\u51b3\uff0cMobX \u4e0a\u624b\u5bb9\u6613\uff0cReactive \u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\uff0c\u5e26\u6765\u6027\u80fd\u63d0\u5347\uff0c\u4f46\u76f8\u5bf9\u5c01\u95ed\uff0c\u4e0d\u5229\u4e8e\u4e1a\u52a1\u62bd\u8c61\uff0c\u7f3a\u5c11\u6700\u4f73\u5b9e\u8df5\u3002\u81f3\u4e8e\u5982\u4f55\u9009\u62e9\uff1f\u6839\u636e\u5177\u4f53\u573a\u666f\u4e0e\u9700\u6c42\u5224\u65ad\u3002"),Object(r.b)("p",null,"\u4e0d\u96be\u770b\u51fa\uff0c\u60f3\u8981\u505a\u597d\u57fa\u4e8e React \u7684\u524d\u7aef\u67b6\u6784\uff0c\u4f60\u4e0d\u4ec5\u9700\u8981\u5bf9\u81ea\u5df1\u7684\u4e1a\u52a1\u4e86\u5982\u6307\u638c\uff0c\u8fd8\u9700\u8981\u5bf9\u5404\u79cd\u89e3\u51b3\u65b9\u6848\u7684\u7279\u6027\u4ee5\u53ca\u9002\u5408\u600e\u6837\u7684\u4e1a\u52a1\u5f62\u6001\u4e86\u5982\u6307\u638c\u3002\u5728 React \u793e\u533a\uff0c\u6c38\u8fdc\u6ca1\u6709\u6807\u51c6\u89e3\u51b3\u65b9\u6848\u3002"),Object(r.b)("h3",{id:"redux-\u4ea6\u975e\u4e07\u80fd\u89e3"},"Redux \u4ea6\u975e\u4e07\u80fd\u89e3"),Object(r.b)("p",null,"Redux \u5728\u521a\u521a\u63a8\u51fa\u7684\u65f6\u5019\u51ed\u501f\u9177\u70ab\u7684 devtool \u548c\u65f6\u95f4\u65c5\u884c\u529f\u80fd\uff0c\u77ac\u95f4\u4fd8\u83b7\u4e86\u4e0d\u5c11\u5de5\u7a0b\u5e08\u7684\u5fc3\u3002"),Object(r.b)("p",null,"\u4f46\u5f53\u4f60\u771f\u6b63\u5f00\u59cb\u4f7f\u7528 Redux \u7684\u65f6\u5019\uff0c\u4f60\u4f1a\u53d1\u73b0\u4f60\u4e0d\u4ec5\u9700\u8981\u5b66\u4e60\u5f88\u591a\u65b0\u7684\u6982\u5ff5\uff0c\u5982 reducer\u3001store\u3001dispatch\u3001action \u7b49\uff0c\u8fd8\u6709\u5f88\u591a\u57fa\u7840\u7684\u95ee\u9898\u90fd\u6ca1\u6709\u6807\u51c6\u89e3\u6cd5\uff0c\u6700\u5178\u578b\u7684\u4f8b\u5b50\u5c31\u662f\u5f02\u6b65 action\u3002\u867d\u7136 Redux \u7684 middleware \u673a\u5236\u63d0\u4f9b\u4e86\u5b9e\u73b0\u5f02\u6b65 action \u7684\u53ef\u80fd\u6027\uff0c\u4f46\u662f\u5bf9\u4e8e\u5c0f\u767d\u6765\u8bf4\u53bb dispatch \u4e00\u4e2a\u975e Object \u7c7b\u578b\u7684 action \u4e4b\u524d\u9700\u8981\u5148\u4e86\u89e3 thunk \u7684\u6982\u5ff5\uff0c\u8fd8\u8981\u7ed9 Redux \u6dfb\u52a0\u4e00\u4e2a redux-thunk \u4e2d\u95f4\u4ef6\u5b9e\u5c5e\u96be\u9898\u3002"),Object(r.b)("p",null,"\u4e0d\u4ec5\u5982\u6b64\uff0c\u5728\u524d\u7aef\u5de5\u7a0b\u4e2d\u5e38\u89c1\u7684\u8868\u5355\u5904\u7406\uff0cRedux \u793e\u533a\u4e5f\u4e00\u76f4\u6ca1\u6709\u7ed9\u51fa\u5b8c\u7f8e\u7684\u89e3\u6cd5\u3002\u524d\u6709\u7b80\u5355\u7684 util \u5de5\u5177 redux-form-utils\uff0c\u540e\u6709\u5e9e\u5927\u590d\u6742\u7684 redux-form\uff0c\u8fd8\u6709 rc-component \u5b9e\u73b0\u7684\u4e00\u5957\u57fa\u4e8e HOC \u7684\u89e3\u51b3\u65b9\u6848\u3002\u82e5\u6ca1\u6709\u5145\u5206\u7684\u4e86\u89e3\u548c\u8c03\u7814\uff0c\u4f60\u5c06\u5982\u4f55\u9009\u62e9\uff1f"),Object(r.b)("p",null,"\u8fd9\u8fd8\u6ca1\u6709\u63d0\u5230\u6700\u8fd1\u975e\u5e38\u706b\u70ed\u7684 redux-saga \u548c redux-observable\uff0c\u867d\u7136 Dan \u8bf4\u5982\u679c\u4f60\u4e0d\u9700\u8981\u7684\u8bdd\u5b8c\u5168\u53ef\u4ee5\u4e0d\u7528\u4e86\u89e3\uff0c\u4f46\u662f\u5982\u679c\u4f60\u4e0d\u4e86\u89e3\u4ed6\u4eec\u7684\u8bdd\u600e\u4e48\u77e5\u9053\u81ea\u5df1\u9700\u4e0d\u9700\u8981\u5462\uff1f"),Object(r.b)("h3",{id:"react-\u4e0e-vue-\u4e4b\u4e89"},"React \u4e0e Vue \u4e4b\u4e89"),Object(r.b)("p",null,"Vue \u4e4b\u6240\u4ee5\u89c9\u5f97\u5165\u95e8\u7b80\u5355\uff0c\u56e0\u4e3a\u4e00\u5f00\u59cb\u5c31\u63d0\u4f9b\u4e86 umd \u7684\u5f15\u5165\u65b9\u5f0f\uff0c\u8fd9\u4e0e\u4f20\u7edf js \u5f00\u53d1\u7684\u4e60\u60ef\u4e00\u81f4\uff0c\u4ee5\u53ca Avalon \u591a\u5e74\u5e03\u9053\u7684\u94fa\u57ab\uff0c\u5927\u5bb6\u53ef\u4ee5\u5f88\u5feb\u63a5\u53d7\u4e00\u4e2a\u4e0d\u4f9d\u8d56\u4e8e\u6784\u5efa\u7684 Vue\u3002"),Object(r.b)("p",null,"React \u56e0\u4e3a\u5f15\u5165\u4e86 JSX \u6982\u5ff5\uff0c\u672c\u53ef\u4ee5\u4ee5 umd \u65b9\u5f0f\u63a8\u5e7f\uff0c\u4f46\u4e3a\u4e86\u66f4\u597d\u7684 DX \u6240\u4ee5\u4e0a\u6765\u5c31\u63a8\u8350\u5927\u5bb6\u4f7f\u7528 JSX\uff0c\u5bfc\u81f4\u65b0\u624b\u89c9\u5f97\u95e8\u69db\u9ad8\u3002"),Object(r.b)("p",null,"React + Mobx \u7ea6\u7b49\u4e8e\u4e00\u4e2a\u590d\u6742\u7684 Vue\uff0c\u4f46\u8fd9\u4e0d\u662f\u629b\u5f03 React \u7684\u7406\u7531\u3002\u4e3a\u4ec0\u4e48\u5927\u5bb6\u89c9\u5f97 Vuex \u6bd4 Redux \u66f4\u9002\u5408 Vue \u5462\uff1f\u56e0\u4e3a Vuex \u7b80\u5355\uff0c\u800c Redux \u9ebb\u70e6\uff0c\u8fd9\u5df2\u7ecf\u5c06\u4e24\u4e2a\u7528\u6237\u7fa4\u5212\u5206\u5f00\u4e86\u3002"),Object(r.b)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u5c0f\u516c\u53f8\uff0c\u5c31\u662f\u9700\u8981\u8fd9\u79cd\u6570\u636e\u6d41\u7b80\u5355\uff0c\u4e0d\u9700\u8981\u7f16\u8bd1\uff0c\u6ca1\u6709\u592a\u591a\u6280\u672f\u9009\u578b\u8981\u8003\u8651\u7684\u6846\u67b6\uff0c\u4ed6\u4eec\u770b\u4e2d\u7684\u662f\u5f00\u53d1\u6548\u7387\uff0c\u53ef\u7ef4\u62a4\u6027\u5e76\u4e0d\u662f\u7b2c\u4e00\u4f4d\uff0c\u8fd9\u70b9\u6839\u672c\u6027\u7684\u5bfc\u81f4\u4e86\u8fd9\u4e24\u7c7b\u4eba\u6c38\u8fdc\u4e5f\u64ae\u5408\u4e0d\u5230\u4e00\u5757\u3002"),Object(r.b)("p",null,"\u800c Vue \u5c31\u662f\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u5e2e\u52a9\u4e86\u90a3\u4e48\u591a\u5f00\u53d1\u8005\uff0c\u4ec5\u51ed\u8fd9\u70b9\u5c31\u975e\u5e38\u503c\u5f97\u79f0\u8d5e\uff0c\u800c\u6211\u4eec\u4e0d\u5e94\u8be5\u4ece React \u7ef4\u62a4\u6027\u7684\u89d2\u5ea6\u53bb\u62a8\u51fb\u8c01\u597d\u8c01\u574f\uff0c\u56e0\u4e3a\u7ad9\u5728\u6211\u4eec\u7684\u89d2\u5ea6\uff0c\u5927\u90e8\u5206\u4e2d\u5c0f\u516c\u53f8\u7684\u5f00\u53d1\u8005\u662f\u4e0d care \u7684\u3002"),Object(r.b)("p",null,"React \u7528\u6237\u5708\u6c47\u96c6\u4e86\u4e00\u6279\u9ad8\u7aef\u7528\u6237\uff0c\u4ed6\u4eec\u4e0d\u65ad\u63a2\u7d22\u6280\u672f\u9009\u578b\uff0c\u4e3a\u5f00\u6e90\u793e\u533a\u8ff8\u53d1\u6d3b\u529b\uff0c\u5982\u679c\u5927\u5bb6\u90fd\u8f6c\u5411 Vue\uff0c\u8fd9\u5757\u644a\u5b50\u5c31\u6b7b\u4e86\uff0c\u51fd\u6570\u5f0f\u3001\u54cd\u5e94\u5f0f\u7f16\u7a0b\u7684\u6f14\u8fdb\u4e5f\u4f1a\u4ece\u6846\u67b6\u7684\u5927\u7edf\u4e00\u800c\u6682\u65f6\u7ec8\u6b62\uff0c\u8d77\u7801\u8fd9\u662f\u4e0d\u5229\u4e8e\u6280\u672f\u8fdb\u6b65\u7684\uff0c\u4e5f\u662f\u4e0d\u53ef\u80fd\u53d1\u751f\u7684\u3002Vue \u5728\u81ea\u5df1\u7684\u9886\u57df\u505a\u597d\uff0c\u5c06 React \u654f\u6377\u601d\u60f3\u501f\u9274\u8fc7\u6765\uff0c\u5e2e\u52a9\u66f4\u591a\u9002\u5408\u573a\u666f\u7684\u5f00\u53d1\u8005\uff0c\u5e94\u8be5\u624d\u662f\u4f5c\u8005\u7684\u76ee\u7684\u3002"),Object(r.b)("h3",{id:"\u5c0f\u8d34\u58eb\uff1a\u5982\u4f55\u5728\u5f00\u6e90\u793e\u533a\u4f18\u96c5\u7684\u6495\u903c"},"\u5c0f\u8d34\u58eb\uff1a\u5982\u4f55\u5728\u5f00\u6e90\u793e\u533a\u4f18\u96c5\u7684\u6495\u903c"),Object(r.b)("p",null,"\u5f00\u6e90\u793e\u533a\u6495\u903c\u5e38\u6709\uff0c\u5404\u79cd\u5634\u70ae\u4e5f\u5403\u5145\u65a5\u5728\u793e\u533a\u91cc\uff0c\u751a\u81f3\u6709\u4eba\u5728 Github \u4e0a\u7ef4\u62a4\u4e86\u4e00\u4efd\u5f00\u6e90\u793e\u533a\u6495\u903c\u5386\u53f2\u3002\u867d\u7136\u8bf4\u505a\u6280\u672f\u7684\u4eba\u6709\u4e89\u8bba\u5f88\u6b63\u5e38\uff0c\u4f46\u662f\u6495\u7684\u6709\u7406\u6709\u636e\u4ee4\u4eba\u4fe1\u670d\u7684\u6848\u4f8b\u5374\u4e0d\u591a\u3002\u8fd9\u6b21 Facebook \u7684\u5458\u5de5 Dan Abramov \u5c31\u505a\u51fa\u4e86\u5f88\u597d\u7684\u8868\u7387\u3002\u9762\u5bf9\u5484\u5484\u903c\u4eba\u7684\u6587\u7ae0\uff0c\u9010\u6761\u56de\u590d\uff0c\u4e0d\u56de\u907f\u3001\u4e0d\u626f\u6de1\u4e14\u6001\u5ea6\u4fdd\u6301\u514b\u5236\uff0c\u5b9e\u5c5e\u96be\u80fd\u53ef\u8d35\u3002"),Object(r.b)("h2",{id:"3-\u603b\u7ed3"},"3 \u603b\u7ed3"),Object(r.b)("p",null,"React \u5f00\u53d1\u8005\u4eec\u4e5f\u4e0d\u8981\u56e0\u4e3a\u4ea7\u751f\u4e86 Mobx \u8fd9\u79cd\u4eb2 Vue \u6d3e\u800c\u4ea7\u751f\u7126\u8651\uff0c\u8fd9\u4e5f\u662f\u5bf9\u7279\u5b9a\u4e1a\u52a1\u573a\u666f\u7684\u6743\u8861\uff0c\u672a\u6765\u66f4\u591a\u66f4\u597d\u7684\u6570\u636e\u6d41\u65b9\u6848\u8fd8\u4f1a\u7ee7\u7eed\u8bde\u751f\uff0c\u6280\u672f\u793e\u533a\u5bf9\u6280\u672f\u7684\u4f18\u5316\u6c38\u65e0\u6b62\u5c3d\u3002"),Object(r.b)("p",null,"\u6bd4\u5982 ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-state-tree"},"mobx-state-tree")," \u5c31\u662f\u4e00\u79cd redux \u4e0e mobx \u7ed3\u5408\u7684\u5927\u80c6\u5c1d\u8bd5\uff0c\u4f5c\u8005\u5728\u5f88\u65e9\u4e4b\u524d\u4e5f\u7533\u660e\u4e86\uff0cMobx \u4e00\u6837\u53ef\u4ee5\u505a\u65f6\u95f4\u65c5\u884c\uff0c\u53ea\u8981\u9075\u5b88\u4e00\u5b9a\u7684\u5f00\u53d1\u89c4\u8303\u3002"),Object(r.b)("p",null,"\u6700\u540e\u6253\u4e2a\u6bd4\u65b9\uff1a\u5b89\u5353\u624b\u673a\u5728\u4e0d\u65ad\u8fdb\u6b65\uff0c\u4f53\u9a8c\u8d8a\u6765\u8d8a\u903c\u8fd1\u82f9\u679c\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u903c\u683c\u9ad8\u7684\u7528\u6237\uff0c\u679c\u65ad\u6362\u82f9\u679c\u5427\u3002\u4f46\u4f5c\u4e3a java \u5f00\u53d1\u4eba\u5458\u7684\u4f60\uff0c\u662f\u5426\u8981\u4e3a\u6b64\u6362\u5230 oc \u6d41\u6d3e\u5462\uff1f\u6362\uff0c\u6216\u8005\u4e0d\u6362\uff0c\u5176\u5b9e\u90fd\u4e00\u6837\uff0c\u5b89\u5353\u548c\u82f9\u679c\u5df2\u7ecf\u8d8a\u6765\u8d8a\u50cf\u4e86\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(r.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//github.com/dt-fe/weekly/issues/13"},"\u90a3\u4e9b\u5165\u5751 React \u524d\u6ca1\u6709\u4eba\u4f1a\u63d0\u9192\u4f60\u7684\u4e8b \xb7 Issue #13 \xb7 dt-fe/weekly"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(r.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}i.isMDXComponent=!0},385:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),i=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,O=p["".concat(b,".").concat(m)]||p[m]||d[m]||r;return a?c.a.createElement(O,l(l({ref:t},o),{},{components:a})):c.a.createElement(O,l({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<r;o++)b[o]=a[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);