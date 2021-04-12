(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),c=(n(0),n(468)),o={title:"141. \u7cbe\u8bfb\u300auseRef \u4e0e createRef \u7684\u533a\u522b\u300b",id:"141",hide_title:!0},l={unversionedId:"141",id:"141",isDocsHomePage:!1,title:"141. \u7cbe\u8bfb\u300auseRef \u4e0e createRef \u7684\u533a\u522b\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/141.\u7cbe\u8bfb\u300auseRef \u4e0e createRef \u7684\u533a\u522b\u300b.md",slug:"/141",permalink:"/weekly/141",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/141.\u7cbe\u8bfb\u300auseRef \u4e0e createRef \u7684\u533a\u522b\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1618195991,formattedLastUpdatedAt:"4/12/2021",sidebar:"weekly",previous:{title:"140. \u7cbe\u8bfb\u300a\u7ed3\u5408 React \u4f7f\u7528\u539f\u751f Drag Drop API\u300b",permalink:"/weekly/140"},next:{title:"142. \u7cbe\u8bfb\u300a\u5982\u4f55\u505a\u597d CodeReview\u300b",permalink:"/weekly/142"}},p=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]}],b={toc:p};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u662f\u5e38\u7528\u7684 API\uff0c\u4f46\u8fd8\u6709\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"createRef")," \u7684 API\uff0c\u4f60\u77e5\u9053\u4ed6\u4eec\u7684\u533a\u522b\u5417\uff1f\u901a\u8fc7 ",Object(c.b)("a",{parentName:"p",href:"https://blog.bitsrc.io/react-useref-and-react-createref-the-difference-afedb9877d0f"},"React.useRef and React.createRef: The Difference")," \u8fd9\u7bc7\u6587\u7ae0\uff0c\u4f60\u53ef\u4ee5\u4e86\u89e3\u5230\u4f55\u65f6\u8be5\u4f7f\u7528\u5b83\u4eec\u3002"),Object(c.b)("h2",{id:"2-\u6982\u8ff0"},"2 \u6982\u8ff0"),Object(c.b)("p",null,"\u5176\u5b9e\u539f\u6587\u5c31\u9610\u8ff0\u4e86\u8fd9\u6837\u4e00\u4e2a\u4e8b\u5b9e\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u4ec5\u80fd\u7528\u5728 FunctionComponent\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"createRef")," \u4ec5\u80fd\u7528\u5728 ClassComponent\u3002"),Object(c.b)("p",null,"\u7b2c\u4e00\u53e5\u8bdd\u662f\u663e\u7136\u7684\uff0c\u56e0\u4e3a Hooks \u4e0d\u80fd\u7528\u5728 ClassComponent\u3002"),Object(c.b)("p",null,"\u7b2c\u4e8c\u53e5\u8bdd\u7684\u539f\u56e0\u662f\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"createRef")," \u5e76\u6ca1\u6709 Hooks \u7684\u6548\u679c\uff0c\u5176\u503c\u4f1a\u968f\u7740 FunctionComponent \u91cd\u590d\u6267\u884c\u800c\u4e0d\u65ad\u88ab\u521d\u59cb\u5316\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  // \u9519\u8bef\u7528\u6cd5\uff0c\u6c38\u8fdc\u4e5f\u62ff\u4e0d\u5230 ref\n  const valueRef = React.createRef();\n  return <div ref={valueRef} />;\n}\n")),Object(c.b)("p",null,"\u4e0a\u8ff0 ",Object(c.b)("inlineCode",{parentName:"p"},"valueRef")," \u4f1a\u968f\u7740 App \u51fd\u6570\u7684 Render \u800c\u91cd\u590d\u521d\u59cb\u5316\uff0c",Object(c.b)("strong",{parentName:"p"},"\u8fd9\u4e5f\u662f Hooks \u7684\u72ec\u7279\u4e4b\u5904\uff0c\u867d\u7136\u7528\u5728\u666e\u901a\u51fd\u6570\u4e2d\uff0c\u4f46\u5728 React \u5f15\u64ce\u4e2d\u4f1a\u5f97\u5230\u8d85\u51fa\u666e\u901a\u51fd\u6570\u7684\u8868\u73b0\uff0c\u6bd4\u5982\u521d\u59cb\u5316\u4ec5\u6267\u884c\u4e00\u6b21\uff0c\u6216\u8005\u5f15\u7528\u4e0d\u53d8"),"\u3002"),Object(c.b)("p",null,"\u4e3a\u4ec0\u4e48 ",Object(c.b)("inlineCode",{parentName:"p"},"createRef")," \u53ef\u4ee5\u5728 ClassComponent \u6b63\u5e38\u8fd0\u884c\u5462\uff1f\u8fd9\u662f\u56e0\u4e3a ClassComponent \u5206\u79bb\u4e86\u751f\u547d\u5468\u671f\uff0c\u4f7f\u4f8b\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"componentDidMount")," \u7b49\u521d\u59cb\u5316\u65f6\u673a\u4ec5\u6267\u884c\u4e00\u6b21\u3002"),Object(c.b)("p",null,"\u539f\u6587\u5b8c\u3002"),Object(c.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(c.b)("p",null,"\u90a3\u4e48\u77e5\u9053\u5982\u4f55\u6b63\u786e\u521b\u5efa Ref \u540e\uff0c\u8fd8\u77e5\u9053\u5982\u4f55\u6b63\u786e\u66f4\u65b0 Ref \u5417\uff1f"),Object(c.b)("p",null,"\u7531\u4e8e Ref \u662f\u8d2f\u7a7f FunctionComponent \u6240\u6709\u6e32\u67d3\u5468\u671f\u7684\u5b9e\u4f8b\uff0c\u7406\u8bba\u4e0a\u5728\u4efb\u4f55\u5730\u65b9\u90fd\u53ef\u4ee5\u505a\u4fee\u6539\uff0c\u6bd4\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const valueRef = React.useRef();\n\n  valueRef.current += 1;\n\n  return <div />;\n}\n")),Object(c.b)("p",null,"\u4f46\u5176\u5b9e\u4e0a\u9762\u7684\u4fee\u6539\u65b9\u5f0f\u662f\u4e0d\u89c4\u8303\u7684\uff0cReact \u5b98\u65b9\u6587\u6863\u91cc\u8981\u6c42\u6211\u4eec\u907f\u514d\u5728 Render \u51fd\u6570\u4e2d\u76f4\u63a5\u4fee\u6539 Ref\uff0c\u8bf7\u5148\u770b\u4e0b\u9762\u7684 FunctionComponent \u751f\u547d\u5468\u671f\u56fe\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412100958.png",alt:null})),Object(c.b)("p",null,"\u4ece\u56fe\u4e2d\u53ef\u4ee5\u53d1\u73b0\uff0c\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Render phase")," \u9636\u6bb5\u662f\u4e0d\u5141\u8bb8\u505a \u201cside effects\u201d \u7684\uff0c\u4e5f\u5c31\u662f\u5199\u526f\u4f5c\u7528\u4ee3\u7801\uff0c\u8fd9\u662f\u56e0\u4e3a\u8fd9\u4e2a\u9636\u6bb5\u53ef\u80fd\u4f1a\u88ab React \u5f15\u64ce\u968f\u65f6\u53d6\u6d88\u6216\u91cd\u505a\u3002"),Object(c.b)("p",null,"\u4fee\u6539 Ref \u5c5e\u4e8e\u526f\u4f5c\u7528\u64cd\u4f5c\uff0c\u56e0\u6b64\u4e0d\u9002\u5408\u5728\u8fd9\u4e2a\u9636\u6bb5\u8fdb\u884c\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Commit phase")," \u9636\u6bb5\u53ef\u4ee5\u505a\u8fd9\u4ef6\u4e8b\uff0c\u6216\u8005\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u505a\uff08\u8131\u79bb\u4e86 React \u751f\u547d\u5468\u671f\uff09\u3002"),Object(c.b)("p",null,"\u5f53\u7136\u6709\u4e00\u79cd\u60c5\u51b5\u662f\u53ef\u4ee5\u7684\uff0c\u5373 ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily"},"\u61d2\u521d\u59cb\u5316"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"function Image(props) {\n  const ref = useRef(null);\n\n  // \u2705 IntersectionObserver is created lazily once\n  function getObserver() {\n    if (ref.current === null) {\n      ref.current = new IntersectionObserver(onIntersect);\n    }\n    return ref.current;\n  }\n\n  // When you need it, call getObserver()\n  // ...\n}\n")),Object(c.b)("p",null,"\u61d2\u521d\u59cb\u5316\u7684\u60c5\u51b5\u4e0b\uff0c\u526f\u4f5c\u7528\u6700\u591a\u6267\u884c\u4e00\u6b21\uff0c\u800c\u4e14\u4ec5\u7528\u4e8e\u521d\u59cb\u5316\u8d4b\u503c\uff0c\u6240\u4ee5\u8fd9\u79cd\u884c\u4e3a\u662f\u88ab\u5141\u8bb8\u7684\u3002"),Object(c.b)("p",null,"\u4e3a\u4ec0\u4e48\u5bf9\u526f\u4f5c\u7528\u9650\u5236\u7684\u5982\u6b64\u4e25\u683c\uff1f\u56e0\u4e3a FunctionComponent \u589e\u52a0\u4e86\u5185\u7f6e\u8c03\u5ea6\u7cfb\u7edf\uff0c\u4e3a\u4e86\u4f18\u5148\u54cd\u5e94\u7528\u6237\u64cd\u4f5c\uff0c\u53ef\u80fd\u4f1a\u6682\u5b9a\u67d0\u4e2a React \u7ec4\u4ef6\u7684\u6e32\u67d3\uff0c\u5177\u4f53\u53ef\u4ee5\u770b\u7b2c 99 \u7bc7\u7cbe\u8bfb\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/blob/v2/099.%E7%B2%BE%E8%AF%BB%E3%80%8AScheduling%20in%20React%E3%80%8B.md"},"\u7cbe\u8bfb\u300aScheduling in React\u300b")),Object(c.b)("p",null,"Ref \u4e0d\u4ec5\u53ef\u4ee5\u62ff\u5230\u7ec4\u4ef6\u5f15\u7528\u3001\u521b\u5efa\u4e00\u4e2a Mutable \u526f\u4f5c\u7528\u5bf9\u8c61\uff0c\u8fd8\u53ef\u4ee5\u914d\u5408 ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," \u5b58\u50a8\u4e00\u4e2a\u8f83\u8001\u7684\u503c\uff0c\u6700\u5e38\u7528\u6765\u62ff\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"previousProps"),"\uff0cReact \u5b98\u65b9\u5229\u7528 Ref \u5c01\u88c5\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 Hooks \u62ff\u5230\u4e0a\u4e00\u6b21\u7684\u503c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function usePrevious(value) {\n  const ref = useRef();\n  useEffect(() => {\n    ref.current = value;\n  });\n  return ref.current;\n}\n")),Object(c.b)("p",null,"\u7531\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," \u5728 Render \u5b8c\u6bd5\u540e\u624d\u6267\u884c\uff0c\u56e0\u6b64 ",Object(c.b)("inlineCode",{parentName:"p"},"ref")," \u7684\u503c\u5728\u5f53\u524d Render \u4e2d\u6c38\u8fdc\u662f\u4e0a\u4e00\u6b21 Render \u65f6\u5019\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u5b83\u62ff\u5230\u4e0a\u4e00\u6b21 Props\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function App(props) {\n  const preProps = usePrevious(props);\n}\n")),Object(c.b)("p",null,"\u8981\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff0c\u8fd8\u662f\u8981\u5f52\u529f\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"ref")," \u53ef\u4ee5\u5c06\u503c \u201c\u5728\u5404\u4e2a\u4e0d\u540c\u7684 Render \u95ed\u5305\u4e2d\u4f20\u9012\u7684\u7279\u6027\u201d\u3002\u6700\u540e\uff0c\u4e0d\u8981\u6ee5\u7528 Ref\uff0cMutable \u5f15\u7528\u8d8a\u591a\uff0c\u5bf9 React \u6765\u8bf4\u53ef\u7ef4\u62a4\u6027\u4e00\u822c\u4f1a\u8d8a\u5dee\u3002"),Object(c.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(c.b)("p",null,"\u4f60\u8fd8\u6316\u6398\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u54ea\u4e9b\u6709\u610f\u601d\u7684\u4f7f\u7528\u65b9\u5f0f\uff1f\u6b22\u8fce\u5728\u8bc4\u8bba\u533a\u7559\u8a00\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/236"},"\u7cbe\u8bfb\u300auseRef \u4e0e createRef \u7684\u533a\u522b\u300b \xb7 Issue #236 \xb7 dt-fe/weekly"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(c.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(c.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}i.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=i(n),f=r,d=u["".concat(o,".").concat(f)]||u[f]||s[f]||c;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);