(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),a=(n(0),n(467)),b={title:"46. \u7cbe\u8bfb\u300areact-rxjs\u300b",id:"046",hide_title:!0},o={unversionedId:"046",id:"046",isDocsHomePage:!1,title:"46. \u7cbe\u8bfb\u300areact-rxjs\u300b",description:"\u672c\u5468\u7cbe\u8bfb\u7684\u4ee3\u7801\u662f react-rxjs\u3002",source:"@site/weekly/046.\u7cbe\u8bfb\u300areact-rxjs\u300b.md",slug:"/046",permalink:"/weekly/046",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/046.\u7cbe\u8bfb\u300areact-rxjs\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617868529,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"45. \u7cbe\u8bfb\u300aReact's new Context API\u300b",permalink:"/weekly/045"},next:{title:"47. \u7cbe\u8bfb\u300awebpack4.0 \u5347\u7ea7\u6307\u5357\u300b",permalink:"/weekly/047"}},i=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[{value:"View \u5c42",id:"view-\u5c42",children:[]},{value:"Container \u5c42",id:"container-\u5c42",children:[]},{value:"Store \u5c42",id:"store-\u5c42",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"redux-observable",id:"redux-observable",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]},{value:"5 \u66f4\u591a\u8ba8\u8bba",id:"5-\u66f4\u591a\u8ba8\u8bba",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u672c\u5468\u7cbe\u8bfb\u7684\u4ee3\u7801\u662f ",Object(a.b)("a",{parentName:"p",href:"https://github.com/jarlah/react-rxjs"},"react-rxjs"),"\u3002"),Object(a.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(a.b)("p",null,"\u672c\u5468\u7cbe\u8bfb\u7684\u662f git \u4ed3\u5e93 - react-rxjs\uff0c\u5b83\u7ed9\u51fa\u4e86\u4e00\u4e2a\u601d\u8def\uff0c\u8ba9 rxjs \u66f4\u597d\u7684\u4e0e react \u7ed3\u5408\u3002"),Object(a.b)("h2",{id:"2-\u6982\u8ff0"},"2 \u6982\u8ff0"),Object(a.b)("h3",{id:"view-\u5c42"},"View \u5c42"),Object(a.b)("p",null,"View \u5c42\u8bbe\u8ba1\u6ca1\u5546\u91cf\uff0c\u81f3\u5c11\u5e94\u8be5\u770b\u4e0d\u51fa rxjs \u7684\u75d5\u8ff9\uff0c\u5b83\u505a\u5230\u4e86\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"// view.tsx\nexport default (props) => (\n    <div>\n      {props.number}\n      <button onClick={props.inc}>+</button>\n      <button onClick={props.dec}>-</button>\n    </div>\n)\n")),Object(a.b)("h3",{id:"container-\u5c42"},"Container \u5c42"),Object(a.b)("p",null,"\u94fe\u63a5 View \u4e0e Store \u7684\u5c42\uff0c\u540c\u6837\u4e5f\u770b\u4e0d\u51fa rxjs \u7684\u75d5\u8ff9\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import { inject } from 'react-rxjs'\nimport store$, { inc, dec } from './store'\nimport MyComponent from './view'\n\nconst props = (storeState: number): MyProps => ({\n    number: storeState,\n    inc,\n    dec\n})\n\nexport default inject(store$, props)(MyComponent)\n")),Object(a.b)("p",null,"\u8fd9\u91cc ",Object(a.b)("inlineCode",{parentName:"p"},"storeState")," \u5c31\u662f store \u5168\u90e8\u6570\u636e\uff0c\u6ce8\u610f react-rxjs \u662f\u591a store \u601d\u60f3\uff0c\u6240\u4ee5 inject \u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\u4e0d\u540c\u7684 store\uff0c\u7ec4\u4ef6\u5c31\u4f1a\u4e0e\u5bf9\u5e94\u7684 store \u7ed1\u5b9a\u3002"),Object(a.b)("h3",{id:"store-\u5c42"},"Store \u5c42"),Object(a.b)("p",null,"\u8fd9\u91cc\u4ee3\u7801\u5c31\u5f88\u6709\u610f\u601d\u4e86\uff0c\u5fc5\u987b\u5c06 rxjs \u4e0e action \u5bf9\u63a5\u8d77\u6765\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { createStore } from 'react-rxjs'\n\nconst inc$ = new Subject<void>()\nconst dec$ = new Subject<void>()\n\nconst reducer$: Observable<(state: number) => number> = Observable.merge(\n    inc$.map(() => (state: number) => state + 1),\n    dec$.map(() => (state: number) => state - 1)\n)\n\nconst store$ = createStore(\"example\", reducer$, 0)\n\nexport inc = () => inc$.next()\nexport dec = () => dec$.next()\nexport default store$\n")),Object(a.b)("p",null,"\u5982\u679c\u8f6c\u6362\u6210 redux \u601d\u7ef4\uff0caction \u5c31\u662f\u4e0b\u9762\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"inc")," \u51fd\u6570\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const inc$ = new Subject<void>()\nexport inc = () => inc$.next()\n")),Object(a.b)("p",null,"reducer \u5c31\u662f\u4e0b\u9762\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"reducer$"),"\uff0c\u6574\u4e2a store \u5bf9\u5e94 ",Object(a.b)("inlineCode",{parentName:"p"},"Observable.merge"),"\uff0cswitch case \u7684\u5730\u65b9\u88ab ",Object(a.b)("inlineCode",{parentName:"p"},"inc$"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"dec$")," \u81ea\u52a8\u8bc6\u522b\u51fa\u6765\u4e86\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const reducer$: Observable<(state: number) => number> = Observable.merge(\n    inc$.map(() => (state: number) => state + 1),\n    dec$.map(() => (state: number) => state - 1)\n)\n")),Object(a.b)("p",null,"\u7b14\u8005\u4f18\u5316\u4e00\u4e0b\u4ee3\u7801\u7ed3\u6784\uff0c\u8ba9 action \u4e0e reducer \u770b\u8d77\u6765\u66f4\u5185\u805a\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const inc$ = new Subject<void>()\nexport inc = () => inc$.next()\nconst incReducer = inc$.map(() => (state: number) => state + 1)\n\nconst dec$ = new Subject<void>()\nexport dec = () => dec$.next()\nconst decReducer = dec$.map(() => (state: number) => state - 1)\n\nconst reducer$: Observable<(state: number) => number> = Observable.merge(\n    incReducer,\n    decReducer\n)\n")),Object(a.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(a.b)("p",null,"\u8ba9\u6211\u4eec\u805a\u7126\u5230 Action \u90e8\u5206\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const inc$ = new Subject<void>()\nexport inc = () => inc$.next()\n")),Object(a.b)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0cAction \u529f\u80fd\u5f88\u5f31\uff0c\u6211\u4eec\u53ea\u80fd\u89e6\u53d1 reducer\uff0c\u5374\u65e0\u6cd5 ",Object(a.b)("inlineCode",{parentName:"p"},"mergeMap")," \u7b49\u6d41\u6c47\u603b\u7684\u5904\u7406\u3002"),Object(a.b)("p",null,"\u4e0a\u5468\u548c\u53d4\u53d4\u8ba8\u8bba\u4e86 Rxjs \u7684\u4e00\u79cd\u4ee3\u7801\u7ec4\u7ec7\u65b9\u5f0f\uff1a\u5c06 Rxjs \u5207\u6210\u4e24\u90e8\u5206\u4f7f\u7528\uff0c\u7b2c\u4e00\u90e8\u5206\u662f\u6570\u636e\u6e90\u7684\u62bd\u8c61\u3001\u805a\u5408\uff1b\u7b2c\u4e8c\u90e8\u5206\u662f\uff0c\u5bf9\u5df2\u7ecf\u805a\u5408\u8fc7\u7684\u5355\u4e00\u6570\u636e\u6e90\u8ba2\u9605\u540e\u8fdb\u884c\u5904\u7406\uff0c\u8fd9\u91cc\u5904\u7406\u8fc7\u7a0b\u53ea\u80fd\u5305\u542b\u5bf9\u8fd9\u4e2a\u6570\u636e\u6e90\u7684\u64cd\u4f5c\uff0c\u4e0d\u80fd\u518d merge \u5176\u4ed6\u6570\u636e\u6e90\u3002"),Object(a.b)("p",null,"\u8fd9\u6070\u6070\u4e5f\u662f Rxjs \u5728\u6570\u636e\u6d41\u4e2d\u53d1\u6325\u7684\u4e24\u5927\u4f5c\u7528\u3002\u5206\u522b\u662f\u62bd\u8c61\uff0c\u6216\u8005\u8bf4\u662f\u5bf9\u526f\u4f5c\u7528\u7684\u9694\u79bb\uff1b\u4ee5\u53ca\u5f3a\u5927\u7684\u6d41\u5904\u7406\u80fd\u529b\u3002"),Object(a.b)("p",null,"react-rxjs \u867d\u7136\u4ee3\u7801\u770b\u4e0a\u53bb\u5f88\u7b80\u5355\uff0c\u4f46 Action \u90e8\u5206\u6ca1\u6709\u8db3\u591f\u7684\u62bd\u8c61\u80fd\u529b\uff0c\u4e3e\u4f8b\u5b50\u8bf4\u5c31\u662f\u65e0\u6cd5\u8fdb\u884c\u6d41\u7684 merge\uff0c\u56e0\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"Subject")," \u81ea\u5df1\u5c31\u662f\u4e00\u4e2a\u4e8b\u4ef6\u89e6\u53d1\u5668\uff0c\u60f3\u8981\u8fdb\u884c\u6d41\u5408\u5e76\uff0c\u5fc5\u987b\u53d1\u751f\u5728 reducer \u4e2d\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const incReducer = inc$.merge(requestUser$).map(() => (state: number) => state + 1)\n")),Object(a.b)("p",null,"\u4f46\u8fd9\u6837\u5c31\u4e27\u5931\u4e86 Action \u4e0e Reducer \u4e00\u4e00\u5bf9\u5e94\u7684\u5173\u7cfb\uff0c\u56e0\u4e3a reducer \u53ef\u4ee5\u64c5\u81ea merge \u4efb\u610f\u6570\u636e\u6d41\uff0c\u90a3\u5c31\u5b8c\u5168\u4e0d\u53d7\u63a7\u5236\u4e86\u3002"),Object(a.b)("p",null,"\u6240\u4ee5\u56de\u5230\u7b2c\u4e8c\u4e2a\u7ea6\u5b9a\uff1a\u5bf9\u5df2\u7ecf\u805a\u5408\u8fc7\u7684\u5355\u4e00\u6570\u636e\u6e90\u8ba2\u9605\u540e\u8fdb\u884c\u5904\u7406\uff0c\u6b64\u65f6\u4e0d\u80fd\u5305\u542b\u4efb\u4f55 merge \u64cd\u4f5c\u3002"),Object(a.b)("p",null,"\u53ef\u4ee5\u603b\u7ed3\u4e00\u4e0b\uff0creact-rxjs \u7684\u65b9\u5f0f\u662f\u89e3\u51b3\u4e86 rxjs \u4e0e react \u7ed3\u5408\u7e41\u7410\u7684\u95ee\u9898\uff0c\u4f46\u5982\u679c\u9075\u5b88\u5f00\u53d1\u7ea6\u5b9a\uff0cAction \u7684\u529f\u80fd\u5c31\u5f88\u5f31\uff0c\u65e0\u6cd5\u8fdb\u884c\u8fdb\u4e00\u6b65\u62bd\u8c61\uff0c\u5982\u679c\u4e0d\u9075\u5b88\u5f00\u53d1\u7ea6\u5b9a\uff0c\u5c31\u53ef\u4ee5\u89e3\u51b3 Action \u80fd\u529b\u5f31\u7684\u95ee\u9898\uff0c\u4f46\u5e26\u6765\u7684\u662f Reducer \u4e0e Action \u8131\u79bb\u5173\u7cfb\uff0c\u8fd9\u5728\u9879\u76ee\u7ef4\u62a4\u4e2d\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\u3002"),Object(a.b)("p",null,"\u6240\u4ee5 react-rxjs \u662f\u4e00\u4e2a\u770b\u4e0a\u53bb\u65b9\u4fbf\uff0c\u4f46\u5b9e\u8df5\u8d77\u6765\u4f1a\u53d1\u73b0\u600e\u4e48\u90fd\u4e0d\u8212\u670d\u7684\u65b9\u6848\u3002"),Object(a.b)("h3",{id:"redux-observable"},"redux-observable"),Object(a.b)("p",null,"\u6211\u4eec\u518d\u770b ",Object(a.b)("a",{parentName:"p",href:"https://github.com/redux-observable/redux-observable"},"redux-observable")," \u8fd9\u4e2a\u5e93\uff0c\u5c31\u5f88\u5bb9\u6613\u7406\u89e3\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u505a\u4e86\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const pingEpic = action$ =>\n  action$.filter(action => action.type === 'PING')\n    .delay(1000) // Asynchronously wait 1000ms then continue\n    .mapTo({ type: 'PONG' });\n\n// later...\ndispatch({ type: 'PING' });\n")),Object(a.b)("p",null,"redux-observable \u53ea\u6709\u4e00\u4e2a\u6570\u636e\u6e90\uff0c\u5728 dispatch \u7684\u8fc7\u7a0b\u89e6\u53d1\u4e8b\u4ef6\uff0c\u8fdb\u5165 action \u903b\u8f91\u3002\u5176\u5b9e\u6bcf\u4e2a action \u90fd\u6e90\u81ea\u5bf9\u540c\u4e00\u4e2a\u6570\u636e\u6e90\u7684\u8ba2\u9605\uff0c\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"action.type")," \u7684\u7b5b\u9009\u6765\u786e\u4fdd\u6267\u884c\u4e86\u6b63\u786e\u7684 action\u3002"),Object(a.b)("p",null,"\u6240\u4ee5\u6bcf\u6b21 dispatch\uff0c\u5305\u62ec ",Object(a.b)("inlineCode",{parentName:"p"},"mapTo")," \u4e5f\u662f dispatch\uff0c\u90fd\u4f1a\u89e6\u53d1\u6570\u636e\u6e90\u7684\u4e8b\u4ef6\u6d3e\u53d1\uff0c\u7136\u540e\u6240\u6709 Action \u56e0\u4e3a\u8ba2\u9605\u4e86\u8fd9\u4e2a\u6570\u636e\u6e90\uff0c\u6240\u4ee5\u90fd\u4f1a\u6267\u884c\uff0c\u6700\u540e\u88ab ",Object(a.b)("inlineCode",{parentName:"p"},".filter")," \u903b\u8f91\u62e6\u622a\u540e\uff0c\u6267\u884c\u5230\u6b63\u786e\u7684 Action\u3002\u6574\u4e2a Action \u95f4\u8c03\u7528\u7684\u94fe\u8def\u6253\u4e2a\u6bd4\u65b9\uff0c\u5c31\u50cf\u6211\u4eec\u4f7f\u7528\u5fae\u4fe1\u4e00\u6837\uff0c\u5f53\u89e6\u53d1\u4efb\u4f55\u6d88\u606f\uff0c\u90fd\u4f1a\u5c06\u5176\u9001\u5230\u540e\u53f0\u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u7ed9\u6240\u6709\u5ba2\u6237\u7aef\u53d1\u6d88\u606f\uff08\u5047\u8bbe\u7cfb\u7edf\u8bbe\u8ba1\u7684\u6709\u95ee\u9898\uff0c\u6ca1\u6709\u5728\u670d\u52a1\u7aef\u505a filter\u3002\u3002\uff09\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u6839\u636e\u7528\u6237\u540d\u505a\u4e00\u4e2a\u7b5b\u9009\uff0c\u5982\u679c\u4e0d\u662f\u53d1\u7ed9\u81ea\u5df1\u7684\u6d88\u606f\uff0c\u5c31\u8fc7\u6ee4\u6389\u3002\u7136\u540e\uff0c\u4efb\u4f55\u4eba\u4e0e\u4eba\u4e4b\u95f4\u7684\u6d88\u606f\u53d1\u9001\uff0c\u90fd\u4f1a\u8d70\u4e00\u904d\u8fd9\u4e2a\u6d41\u7a0b\u3002"),Object(a.b)("p",null,"reducer \u4e0e redux \u7684 reducer \u4e00\u6478\u4e00\u6837\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const pingReducer = (state = { isPinging: false }, action) => {\n  switch (action.type) {\n    case 'PING':\n      return { isPinging: true };\n\n    case 'PONG':\n      return { isPinging: false };\n\n    default:\n      return state;\n  }\n}\n")),Object(a.b)("p",null,"redux-observable \u7684\u8bbe\u8ba1\u6bd4 react-rxjs \u597d\u5728\u54ea\u5462\uff1f\u6211\u8ba4\u4e3a\u597d\u5728\u9075\u5faa\u4e86\u4e0a\u9762\u603b\u7ed3\u7684\u4e24\u6761\u7ecf\u9a8c\uff1a"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7b2c\u4e00\u90e8\u5206\u662f\u6570\u636e\u6e90\u7684\u62bd\u8c61\u3001\u805a\u5408\uff1b\u7b2c\u4e8c\u90e8\u5206\u662f\uff0c\u5bf9\u5df2\u7ecf\u805a\u5408\u8fc7\u7684\u5355\u4e00\u6570\u636e\u6e90\u8ba2\u9605\u540e\u8fdb\u884c\u5904\u7406\uff0c\u8fd9\u91cc\u5904\u7406\u8fc7\u7a0b\u53ea\u80fd\u5305\u542b\u5bf9\u8fd9\u4e2a\u6570\u636e\u6e90\u7684\u64cd\u4f5c\uff0c\u4e0d\u80fd\u518d merge \u5176\u4ed6\u6570\u636e\u6e90\u3002")),Object(a.b)("p",null,"Action \u4e4b\u95f4\u7684 dispatch \u5c31\u662f\u7b2c\u4e00\u90e8\u5206\u5bf9\u6570\u636e\u6e90\u7684\u6574\u5408\uff0c\u8fd9\u91cc\u5305\u62ec\u6240\u6709\u526f\u4f5c\u7528\u3002Reducer \u53ea\u9700\u8981\u6311\u9009\u5408\u9002\u7684 ActionType \u7ed1\u5b9a\uff0c\u8fd9\u6837\u786e\u4fdd\u4e86 Reducer \u4e2d\u5904\u7406\u64cd\u4f5c\u4e00\u5b9a\u662f\u5bf9\u5355\u4e00\u6570\u636e\u6e90\u7684\uff0c\u4e0d\u5b58\u5728\u5bf9\u5176\u4ed6\u6570\u636e\u6e90 merge\uff0c\u6362\u53e5\u8bdd\u8bf4\u5c31\u662f\u548c Action \u4e00\u4e00\u5bf9\u5e94\u3002"),Object(a.b)("p",null,"\u6240\u4ee5\u6574\u4f53\u6765\u770b\uff0c\u6211\u8ba4\u4e3a redux-observable \u6bd4 react-rxjs \u8981\u9760\u8c31\u3002"),Object(a.b)("p",null,"\u4f46\u662f react-rxjs \u629b\u5f00\u4e86 redux \u7e41\u7410\u7684\u6837\u677f\u4ee3\u7801\uff0c\u800c redux-observable \u6837\u677f\u4ee3\u7801\u53ea\u4f1a\u6bd4 react-redux \u8981\u591a\u3002\u5982\u679c\u8981\u6295\u5165\u9879\u76ee\u4f7f\u7528\uff0c\u6bd4\u8f83\u597d\u7684\u65b9\u5f0f\u662f\u6309\u7167 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/dvajs/dva"},"dva")," \u7684\u601d\u8def\uff0c\u51cf\u5c11 redux-observable \u7684\u6837\u677f\u4ee3\u7801\u3002"),Object(a.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(a.b)("p",null,"\u6700\u540e\u7a0d\u7a0d\u804a\u4e00\u4e0b cyclejs\uff0c\u56e0\u4e3a\u7528\u8fd9\u4e2a\u5e93\uff0c\u57fa\u672c\u5c31\u8131\u79bb\u4e86 react \u751f\u6001\uff0c\u6211\u4eec react \u7cfb\u5f00\u53d1\u8005\u53ea\u80fd\u5e72\u77aa\u773c\u770b\u770b\u3002"),Object(a.b)("p",null,"cyclejs \u5c31\u4e00\u4e2a\u76ee\u7684\uff0c\u89e3\u51b3 react + rxjs \u4e2d\u9634\u9b42\u4e0d\u6563\u7684\u5faa\u73af\u4f9d\u8d56\u95ee\u9898\uff1a\u89c6\u56fe\u7684\u56de\u8c03\u51fd\u6570\u53ef\u4ee5\u4ea7\u751f\u6570\u636e\u6e90\uff08observable\uff09\uff0c\u4f46\u89c6\u56fe\u53c8\u53ef\u80fd\u4f9d\u8d56\u8fd9\u4e2a\u6570\u636e\u6e90\u3002"),Object(a.b)("p",null,"\u5c31\u662f\u89e3\u51b3 A \u4f9d\u8d56 B\uff0cB \u53c8\u4f9d\u8d56 A \u7684\u95ee\u9898\uff0c\u800c\u4e14\u5b83\u505a\u5230\u4e86\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"function main(sources) {\n  const input$ = sources.DOM.select('.field').events('input')\n  const name$ = input$.map(ev => ev.target.value).startWith('')\n\n  const vdom$ = name$.map(name =>\n    div([\n      label('Name:'),\n      input('.field', {attrs: {type: 'text'}}),\n      hr(),\n      h1('Hello ' + name),\n    ])\n  )\n\n  return { DOM: vdom$ }\n}\n")),Object(a.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6700\u8ba9\u6211\u4eec\u4e0d\u8212\u670d\u7684\u90e8\u5206\uff0c\u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"sources.DOM.select('.field')")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"input('.field')")," \u8fd9\u4e2a\u5faa\u73af\u8282\uff0c\u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u521d\u59cb\u5316\u51fd\u6570\u8fd8\u6ca1\u6709\u8fd4\u56de DOM \u8282\u70b9\uff0c\u4e3a\u5565\u5c31\u80fd\u9009\u4e2d DOM \u8282\u70b9\uff1f\u800c\u4e14\u8fd8\u4f5c\u4e3a\u53c2\u6570\u53c2\u4e0e\u8fd9\u4e2a DOM \u7684\u751f\u6210\u3002"),Object(a.b)("p",null,"\u53ef\u60dc React \u65e0\u6cd5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ea\u80fd\u901a\u8fc7\u9884\u5b9a\u4e49\u6570\u636e\u6e90\u6765\u89e3\u51b3\uff1a\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a\u6570\u636e\u6e90\uff0cDOM \u8ba2\u9605\u5b83\uff0cAction \u89e6\u53d1\u65f6\u627e\u5230\u8fd9\u4e2a\u6570\u636e\u6e90\uff0c\u624b\u52a8\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},".next()"),"\u3002\u6216\u8005 redux-observable \u8fd9\u6837\uff0c\u5168\u5c40\u53ea\u6709\u4e00\u4e2a\u6570\u636e\u6e90\u3002"),Object(a.b)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u7b14\u8005\u8ba4\u4e3a rxjs \u8fd8\u662f\u96be\u4ee5\u843d\u5730\u5230 react \u4e1a\u52a1\u4ee3\u7801\u4e2d\uff0c\u7a76\u5176\u672c\u8d28\uff0c\u5c31\u662f\u6ca1\u6709 cyclejs \u8fd9\u79cd\u673a\u5236\u89e3\u51b3\u6570\u636e\u6e90\u5f15\u8d77\u7684\u5faa\u73af\u4f9d\u8d56\u95ee\u9898\u3002"),Object(a.b)("h2",{id:"5-\u66f4\u591a\u8ba8\u8bba"},"5 \u66f4\u591a\u8ba8\u8bba"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(a.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/65"},"\u7cbe\u8bfb\u300areact-rxjs\u300b \xb7 Issue #65 \xb7 dt-fe/weekly"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(a.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}p.isMDXComponent=!0},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,j=s["".concat(b,".").concat(d)]||s[d]||u[d]||a;return n?c.a.createElement(j,o(o({ref:t},l),{},{components:n})):c.a.createElement(j,o({ref:t},l))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,b=new Array(a);b[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var l=2;l<a;l++)b[l]=n[l];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);