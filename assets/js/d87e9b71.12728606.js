(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{408:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),c=n(7),a=(n(0),n(467)),i={title:"186. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - State \u72b6\u6001\u6a21\u5f0f\u300b",id:"186",hide_title:!0},l={unversionedId:"186",id:"186",isDocsHomePage:!1,title:"186. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - State \u72b6\u6001\u6a21\u5f0f\u300b",description:"State\uff08\u72b6\u6001\u6a21\u5f0f\uff09\u5c5e\u4e8e\u884c\u4e3a\u578b\u6a21\u5f0f\u3002",source:"@site/weekly/186.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - State \u72b6\u6001\u6a21\u5f0f\u300b.md",slug:"/186",permalink:"/weekly/186",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/186.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - State \u72b6\u6001\u6a21\u5f0f\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617963167,formattedLastUpdatedAt:"4/9/2021",sidebar:"weekly",previous:{title:"185. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Observer \u89c2\u5bdf\u8005\u6a21\u5f0f\u300b",permalink:"/weekly/185"},next:{title:"187. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Strategy \u7b56\u7565\u6a21\u5f0f\u300b",permalink:"/weekly/187"}},o=[{value:"\u4e3e\u4f8b\u5b50",id:"\u4e3e\u4f8b\u5b50",children:[{value:"\u56e2\u961f\u63a5\u53e3\u4eba",id:"\u56e2\u961f\u63a5\u53e3\u4eba",children:[]},{value:"\u53f0\u706f\u6309\u94ae",id:"\u53f0\u706f\u6309\u94ae",children:[]},{value:"\u6570\u636e\u5e93\u8fde\u63a5\u5668",id:"\u6570\u636e\u5e93\u8fde\u63a5\u5668",children:[]}]},{value:"\u610f\u56fe\u89e3\u91ca",id:"\u610f\u56fe\u89e3\u91ca",children:[]},{value:"\u7ed3\u6784\u56fe",id:"\u7ed3\u6784\u56fe",children:[]},{value:"\u4ee3\u7801\u4f8b\u5b50",id:"\u4ee3\u7801\u4f8b\u5b50",children:[]},{value:"\u5f0a\u7aef",id:"\u5f0a\u7aef",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],s={toc:o};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"State\uff08\u72b6\u6001\u6a21\u5f0f\uff09\u5c5e\u4e8e\u884c\u4e3a\u578b\u6a21\u5f0f\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u5141\u8bb8\u4e00\u4e2a\u5bf9\u8c61\u5728\u5176\u5185\u90e8\u72b6\u6001\u6539\u53d8\u65f6\u6539\u53d8\u5b83\u7684\u884c\u4e3a\u3002\u5bf9\u8c61\u770b\u8d77\u6765\u4f3c\u4e4e\u4fee\u6539\u4e86\u5b83\u7684\u7c7b\u3002")),Object(a.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u5c06 \u201c\u4e00\u4e2a\u5927 class + \u4e00\u5806 if else\u201d \u66ff\u6362\u4e3a \u201c\u4e00\u5806\u5c0f class\u201d\u3002\u4e00\u5806\u5c0f class \u5c31\u662f\u4e00\u5806\u72b6\u6001\uff0c\u7528\u4e00\u5806\u72b6\u6001\u4ee3\u66ff if else \u4f1a\u66f4\u597d\u62d3\u5c55\u4e0e\u7ef4\u62a4\u3002"),Object(a.b)("h2",{id:"\u4e3e\u4f8b\u5b50"},"\u4e3e\u4f8b\u5b50"),Object(a.b)("p",null,"\u5982\u679c\u770b\u4e0d\u61c2\u4e0a\u9762\u7684\u610f\u56fe\u4ecb\u7ecd\uff0c\u6ca1\u6709\u5173\u7cfb\uff0c\u8bbe\u8ba1\u6a21\u5f0f\u9700\u8981\u5728\u65e5\u5e38\u5de5\u4f5c\u91cc\u7528\u8d77\u6765\uff0c\u7ed3\u5408\u4f8b\u5b50\u53ef\u4ee5\u52a0\u6df1\u4f60\u7684\u7406\u89e3\uff0c\u4e0b\u9762\u6211\u51c6\u5907\u4e86\u4e09\u4e2a\u4f8b\u5b50\uff0c\u8ba9\u4f60\u4f53\u4f1a\u4ec0\u4e48\u573a\u666f\u4e0b\u4f1a\u7528\u5230\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u3002"),Object(a.b)("h3",{id:"\u56e2\u961f\u63a5\u53e3\u4eba"},"\u56e2\u961f\u63a5\u53e3\u4eba"),Object(a.b)("p",null,"\u56e2\u961f\u662f\u7531\u5f88\u591a\u540c\u5b66\u7ec4\u6210\u7684\uff0c\u4f46\u6709\u4e00\u4f4d\u63a5\u53e3\u4eba TL\uff0c\u8fd9\u4f4d TL \u53ef\u80fd\u4e00\u4f1a\u513f\u548c\u4ea7\u54c1\u7ecf\u7406\u8c08\u9700\u6c42\uff0c\u4e00\u4f1a\u513f\u548c\u5176\u4ed6 TL \u8c08\u89c4\u5212\uff0c\u4e00\u4f1a\u513f\u548c HR \u8c08\u4eba\u4e8b\uff0c\u603b\u4e4b\u8981\u505a\u5f88\u591a\u4e8b\u60c5\uff0c\u5f88\u663e\u7136\u4e00\u4e2a\u4eba\u662f\u5fd9\u4e0d\u8fc7\u6765\u7684\u3002TL \u901a\u8fc7\u5c06\u4efb\u52a1\u5206\u53d1\u7ed9\u56e2\u961f\u4e2d\u6bcf\u4e2a\u540c\u5b66\uff0c\u800c\u4e0d\u8ba9\u4ed6\u4eec\u76f4\u63a5\u548c\u4ea7\u54c1\u7ecf\u7406\u3001\u5176\u4ed6 TL\u3001HR \u63a5\u89e6\uff0c\u90a3\u4e48\u8fd9\u4f4d TL \u7684\u529e\u4e8b\u6548\u7387\u5c31\u4f1a\u76f8\u5f53\u9ad8\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u540c\u5b66\u53ea\u8d1f\u8d23\u4e00\u5757\u5177\u4f53\u7684\u4e1a\u52a1\uff0c\u800c TL \u5728\u4e0d\u540c\u65f6\u523b\u53eb\u4e0a\u4e0d\u540c\u7684\u540c\u5b66\uff0c\u8ba9\u4ed6\u4eec\u51fa\u9762\u89e3\u51b3\u4ed6\u4eec\u8d1f\u8d23\u7684\u4e13\u4e1a\u9886\u57df\u95ee\u9898\uff0c\u90a3\u4e48\u5728\u5916\u9762\u770b\uff0c\u8fd9\u4f4d TL \u56e2\u961f\u80fd\u529b\u5f88\u5e7f\uff0c\u5728\u5185\u770b\uff0c\u6bcf\u4e2a\u4eba\u8d1f\u8d23\u7684\u4e8b\u60c5\u4e5f\u6bd4\u8f83\u5355\u4e00\u3002"),Object(a.b)("h3",{id:"\u53f0\u706f\u6309\u94ae"},"\u53f0\u706f\u6309\u94ae"),Object(a.b)("p",null,"\u6211\u4eec\u7ecf\u5e38\u4f1a\u770b\u5230\u53ea\u6709\u4e00\u4e2a\u6309\u94ae\u7684\u53f0\u706f\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u6309\u94ae\u8c03\u8282\u4eae\u5ea6\uff0c\u5927\u6982\u662f\u5982\u4e0b\u4e00\u4e2a\u5faa\u73af \u201c\u5173 -> \u5f31\u5149 -> \u4eae -> \u5f3a\u5149 -> \u5173\u201d\uff0c\u90a3\u4e48\u6bcf\u6b21\u6309\u6309\u94ae\u540e\uff0c\u8981\u8df3\u8f6c\u5230\u4ec0\u4e48\u72b6\u6001\uff0c\u5176\u5b9e\u548c\u5f53\u524d\u72b6\u6001\u6709\u5173\u3002\u6211\u4eec\u53ef\u4ee5\u7528 if else \u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u7528\u72b6\u6001\u6a21\u5f0f\u89e3\u51b3\u3002"),Object(a.b)("p",null,"\u7528\u72b6\u6001\u6a21\u5f0f\u89e3\u51b3\uff0c\u5c31\u662f\u5c06\u8fd9\u56db\u4e2a\u72b6\u6001\u5c01\u88c5\u4e3a\u56db\u4e2a\u7c7b\uff0c\u6bcf\u4e2a\u7c7b\u90fd\u6267\u884c\u6309\u4e0b\u6309\u94ae\u540e\u8981\u8df3\u8f6c\u5230\u7684\u72b6\u6001\uff0c\u8fd9\u6837\u672a\u6765\u65b0\u589e\u4e00\u79cd\u6a21\u5f0f\uff0c\u53ea\u8981\u6539\u53d8\u90e8\u5206\u7c7b\u5373\u53ef\u3002"),Object(a.b)("h3",{id:"\u6570\u636e\u5e93\u8fde\u63a5\u5668"},"\u6570\u636e\u5e93\u8fde\u63a5\u5668"),Object(a.b)("p",null,"\u5728\u6570\u636e\u5e93\u8fde\u63a5\u524d\u540e\uff0c\u8fd9\u4e2a\u8fde\u63a5\u5668\u7684\u72b6\u6001\u663e\u7136\u975e\u5e38\u4e0d\u540c\uff0c\u6211\u4eec\u5982\u679c\u4ec5\u7528\u4e00\u4e2a\u7c7b\u63cf\u8ff0\u6570\u636e\u5e93\u8fde\u63a5\u5668\uff0c\u5219\u5185\u90e8\u514d\u4e0d\u4e86\u5199\u5927\u91cf\u5206\u652f\u8bed\u53e5\u8fdb\u884c\u72b6\u6001\u5224\u65ad\u3002\u90a3\u4e48\u6b64\u65f6\u6709\u66f4\u597d\u7684\u65b9\u6848\u5417\uff1f\u72b6\u6001\u6a21\u5f0f\u544a\u8bc9\u6211\u4eec\uff0c\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u4e0d\u540c\u72b6\u6001\u7c7b\uff0c\u6bd4\u5982\u8fde\u63a5\u524d\u3001\u8fde\u63a5\u4e2d\u3001\u8fde\u63a5\u540e\u4e09\u79cd\u72b6\u6001\u7c7b\uff0c\u5728\u4e0d\u540c\u65f6\u523b\u5185\u90e8\u4f1a\u66ff\u6362\u4e3a\u4e0d\u540c\u7684\u5b50\u7c7b\uff0c\u5b83\u4eec\u90fd\u7ee7\u627f\u540c\u6837\u7684\u7236\u7c7b\uff0c\u6240\u4ee5\u5916\u9762\u770b\u4e0a\u53bb\u4e0d\u9700\u8981\u611f\u77e5\u5185\u90e8\u7684\u72b6\u6001\u53d8\u5316\uff0c\u5185\u90e8\u53c8\u53ef\u4ee5\u8fdb\u884c\u72b6\u6001\u62c6\u5206\uff0c\u8fdb\u884c\u66f4\u597d\u7684\u7ef4\u62a4\u3002"),Object(a.b)("h2",{id:"\u610f\u56fe\u89e3\u91ca"},"\u610f\u56fe\u89e3\u91ca"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u5141\u8bb8\u4e00\u4e2a\u5bf9\u8c61\u5728\u5176\u5185\u90e8\u72b6\u6001\u6539\u53d8\u65f6\u6539\u53d8\u5b83\u7684\u884c\u4e3a\u3002\u5bf9\u8c61\u770b\u8d77\u6765\u4f3c\u4e4e\u4fee\u6539\u4e86\u5b83\u7684\u7c7b\u3002")),Object(a.b)("p",null,"\u91cd\u70b9\u5728 \u201c\u5185\u90e8\u72b6\u6001\u201d \u7684\u7406\u89e3\uff0c\u4e5f\u5c31\u662f\u72b6\u6001\u6539\u53d8\u662f\u7531\u5bf9\u8c61\u5185\u90e8\u89e6\u53d1\u7684\uff0c\u800c\u4e0d\u662f\u5916\u90e8\uff0c\u6240\u4ee5 ",Object(a.b)("strong",{parentName:"p"},"\u5916\u90e8\u6839\u672c\u65e0\u9700\u5173\u5fc3\u5bf9\u8c61\u662f\u5426\u7528\u4e86\u72b6\u6001\u6a21\u5f0f"),"\uff0c\u62ff\u6570\u636e\u5e93\u8fde\u63a5\u5668\u7684\u4f8b\u5b50\u6765\u8bf4\uff0c\u4e0d\u7ba1\u8fd9\u4e2a\u7c7b\u662f\u7528 if else \u5806\u780c\u7684\uff0c\u8fd8\u662f\u7528\u72b6\u6001\u6a21\u5f0f\u505a\u7684\uff0c\u90fd\u5b8c\u5168\u4e0d\u59a8\u788d\u5b83\u5bf9\u5916\u63d0\u4f9b\u7684\u7a33\u5b9a API\uff08\u63a5\u53e3\u95ee\u9898\uff09\uff0c\u6240\u4ee5\u72b6\u6001\u6a21\u5f0f\u5b9e\u8d28\u4e0a\u662f\u4e00\u79cd\u5185\u805a\u7684\u8bbe\u8ba1\u6a21\u5f0f\u3002"),Object(a.b)("h2",{id:"\u7ed3\u6784\u56fe"},"\u7ed3\u6784\u56fe"),Object(a.b)("img",{width:"500",src:"https://img.alicdn.com/imgextra/i1/O1CN01tbZ0bQ1w8xcUgbWTJ_!!6000000006264-2-tps-1350-486.png"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"State: \u72b6\u6001\u63a5\u53e3\uff0c\u7c7b\u6bd4\u4e3a\u53f0\u706f\u72b6\u6001\u3002"),Object(a.b)("li",{parentName:"ul"},"ConcreteState: \u5177\u4f53\u72b6\u6001\uff0c\u90fd\u7ee7\u627f\u4e8e State\uff0c\u7c7b\u6bd4\u4e3a\u53f0\u706f\u7684\u5f3a\u5149\u3001\u5f31\u5149\u72b6\u6001\u3002")),Object(a.b)("h2",{id:"\u4ee3\u7801\u4f8b\u5b50"},"\u4ee3\u7801\u4f8b\u5b50"),Object(a.b)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4f7f\u7528 typescript \u7f16\u5199\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// \u5b9a\u4e49\u72b6\u6001\u63a5\u53e3\ninterface State {\n  // \u6a21\u62df\u53f0\u706f\u70b9\u4eae\n  show: () => string\n}\n\nclass Light1 implements State {\n  constructor(context: Context) {\n    this.context = context\n  }\n\n  show() {\n    return '\u5173\u706f'\n  }\n\n  // \u6309\u4e0b\u6309\u94ae\n  public click() {\n    this.context.setState(new Light2(this.context))\n  }\n}\n\nclass Light2 implements State {\n  constructor(context: Context) {\n    this.context = context\n  }\n\n  show() {\n    return '\u5f31\u5149'\n  }\n\n  // \u6309\u4e0b\u6309\u94ae\n  public click() {\n    this.context.setState(new Light3(this.context))\n  }\n}\n\nclass Light3 implements State {\n  constructor(context: Context) {\n    this.context = context\n  }\n\n  show() {\n    return '\u4eae'\n  }\n\n  // \u6309\u4e0b\u6309\u94ae\n  public click() {\n    this.context.setState(new Light4(this.context))\n  }\n}\n\nclass Light4 implements State {\n  constructor(context: Context) {\n    this.context = context\n  }\n\n  show() {\n    return '\u5f3a\u5149'\n  }\n\n  // \u6309\u4e0b\u6309\u94ae\n  public click() {\n    this.context.setState(new Light1(this.context))\n  }\n}\n\n// \u53f0\u706f\npublic class Lamp {\n  // \u5f53\u524d\u72b6\u6001\n  private currentState = new Light1(this)\n\n  protected setState(state: State) {\n    this.currentState = state\n  }\n\n  // \u6309\u4e0b\u6309\u94ae\n  public click() {\n    this.getState().click()\n  }\n}\n\nconst lamp = new Lamp() // \u5173\u95ed\nlamp.click() // \u5f31\u5149\nlamp.click() // \u4eae\nlamp.click() // \u5f3a\u5149\nlamp.click() // \u5173\u95ed\n")),Object(a.b)("p",null,"\u5176\u5b9e\u6709\u5f88\u591a\u79cd\u65b9\u5f0f\u6765\u5b9e\u73b0\uff0c\u4e0d\u5fc5\u62d8\u6ce5\u4e8e\u5f62\u5f0f\uff0c\u5927\u4f53\u4e0a\u53ea\u8981\u4fdd\u8bc1\u7531\u591a\u4e2a\u7c7b\u5b9e\u73b0\u4e0d\u540c\u72b6\u6001\uff0c\u6bcf\u4e2a\u7c7b\u5b9e\u73b0\u5230\u4e0b\u4e00\u4e2a\u72b6\u6001\u5207\u6362\u5c31\u597d\u4e86\u3002"),Object(a.b)("h2",{id:"\u5f0a\u7aef"},"\u5f0a\u7aef"),Object(a.b)("p",null,"\u8be5\u7528 if else \u7684\u65f6\u5019\u8fd8\u662f\u8981\u7528\uff0c\u4e0d\u8981\u4f46\u51e1\u9047\u5230 if else \u5c31\u4f7f\u7528\u72b6\u6001\u6a21\u5f0f\uff0c\u90a3\u6837\u5c31\u662f\u4e66\u8bfb\u50bb\u4e86\u3002\u4e00\u5b9a\u8981\u5224\u65ad\uff0c\u662f\u5426\u5404\u72b6\u6001\u95f4\u5dee\u5f02\u5f88\u5927\uff0c\u4e14\u4f7f\u7528\u72b6\u6001\u6a21\u5f0f\u540e\u7ef4\u62a4\u6027\u6bd4 if else \u66f4\u597d\uff0c\u624d\u5e94\u8be5\u7528\u72b6\u6001\u6a21\u5f0f\u3002"),Object(a.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(a.b)("p",null,"\u5728\u5408\u9002\u573a\u666f\u4e0b\uff0c\u72b6\u6001\u6a21\u5f0f\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u7b26\u5408\u5f00\u95ed\u539f\u5219\uff0c\u6bcf\u4e2a\u7c7b\u72ec\u7acb\u7ef4\u62a4\u65f6\uff0c\u903b\u8f91\u4e5f\u66f4\u7cbe\u7b80\u3001\u805a\u7126\uff0c\u66f4\u6613\u7ef4\u62a4\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(a.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/303"},"\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - State \u72b6\u6001\u6a21\u5f0f\u300b\xb7 Issue #303 \xb7 dt-fe/weekly"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(a.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(a.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}b.isMDXComponent=!0},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return n?c.a.createElement(m,l(l({ref:t},s),{},{components:n})):c.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);