(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return i}));var r=t(3),l=t(7),c=(t(0),t(385)),b={title:"61. \u7cbe\u8bfb\u300aReact \u516b\u79cd\u6761\u4ef6\u6e32\u67d3\u300b",id:"061",hide_title:!0},a={unversionedId:"061",id:"061",isDocsHomePage:!1,title:"61. \u7cbe\u8bfb\u300aReact \u516b\u79cd\u6761\u4ef6\u6e32\u67d3\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/061.\u7cbe\u8bfb\u300aReact \u516b\u79cd\u6761\u4ef6\u6e32\u67d3\u300b.md",slug:"/061",permalink:"/weekly/061",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/061.\u7cbe\u8bfb\u300aReact \u516b\u79cd\u6761\u4ef6\u6e32\u67d3\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617870333,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"60. \u7cbe\u8bfb\u300a\u5982\u4f55\u5728 nodejs \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u300b",permalink:"/weekly/060"},next:{title:"62. \u7cbe\u8bfb\u300aJS \u5f15\u64ce\u57fa\u7840\u4e4b Shapes and Inline Caches\u300b",permalink:"/weekly/062"}},o=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[{value:"IF/ELSE",id:"ifelse",children:[]},{value:"return <code>null</code>",id:"return-null",children:[]},{value:"\u7ec4\u4ef6\u53d8\u91cf",id:"\u7ec4\u4ef6\u53d8\u91cf",children:[]},{value:"\u4e09\u5143\u8fd0\u7b97\u7b26",id:"\u4e09\u5143\u8fd0\u7b97\u7b26",children:[]},{value:"&amp;&amp;",id:"",children:[]},{value:"IIFE",id:"iife",children:[]},{value:"\u5b50\u7ec4\u4ef6",id:"\u5b50\u7ec4\u4ef6",children:[]},{value:"IF \u7ec4\u4ef6",id:"if-\u7ec4\u4ef6",children:[]},{value:"\u9ad8\u9636\u7ec4\u4ef6",id:"\u9ad8\u9636\u7ec4\u4ef6",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"\u5e94\u7528\u590d\u6742\u5ea6",id:"\u5e94\u7528\u590d\u6742\u5ea6",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]},{value:"5 \u66f4\u591a\u8ba8\u8bba",id:"5-\u66f4\u591a\u8ba8\u8bba",children:[]}],p={toc:o};function i(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(c.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e"},"8 React conditional rendering methods")),Object(c.b)("p",null,"\u4ecb\u7ecd\u4e86\u516b\u79cd React \u6761\u4ef6\u6e32\u67d3\u65b9\u5f0f\u3002"),Object(c.b)("p",null,"\u6a21\u7248\u6761\u4ef6\u6e32\u67d3\u975e\u5e38\u5e38\u89c1\uff0c\u9047\u5230\u7684\u65f6\u5019\u5f80\u5f80\u4f1a\u968f\u673a\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u4f7f\u7528\uff0c\u90a3\u4e48\u600e\u4e48\u5199\u4f1a\u6709\u8f83\u597d\u7684\u7ef4\u62a4\u6027\u5462\uff1f\u5148\u4e00\u8d77\u4e86\u89e3\u4e0b\u6709\u54ea\u516b\u79cd\u6761\u4ef6\u6e32\u67d3\u65b9\u5f0f\u5427\uff01"),Object(c.b)("h2",{id:"2-\u6982\u8ff0"},"2 \u6982\u8ff0"),Object(c.b)("h3",{id:"ifelse"},"IF/ELSE"),Object(c.b)("p",null,"\u65e2\u7136 JSX \u652f\u6301 js \u4e0e html \u6df7\u5199\uff0c\u90a3\u4e48\u4ea4\u66ff\u4f7f\u7528\u5c31\u80fd\u89e3\u51b3\u6761\u4ef6\u6e32\u67d3\u7684\u95ee\u9898\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  if (renderComponent1) {\n    return <Component1 />;\n  } else {\n    return <div />;\n  }\n}\n")),Object(c.b)("h3",{id:"return-null"},"return ",Object(c.b)("inlineCode",{parentName:"h3"},"null")),Object(c.b)("p",null,"\u5982\u679c\u4e0d\u60f3\u6e32\u67d3\u7a7a\u5143\u7d20\uff0c\u6700\u597d\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"null")," \u4ee3\u66ff\u7a7a\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"div"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  if (renderComponent1) {\n    return <Component1 />;\n  } else {\n    return null;\n  }\n}\n")),Object(c.b)("p",null,"\u8fd9\u6837\u5bf9 React \u6e32\u67d3\u6548\u7387\u6709\u63d0\u5347\u3002"),Object(c.b)("h3",{id:"\u7ec4\u4ef6\u53d8\u91cf"},"\u7ec4\u4ef6\u53d8\u91cf"),Object(c.b)("p",null,"\u5c06\u7ec4\u4ef6\u8d4b\u503c\u5230\u53d8\u91cf\uff0c\u5c31\u53ef\u4ee5\u5728 return \u524d\u4efb\u610f\u4fee\u6539\u5b83\u4e86\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  let component = null;\n\n  if (renderComponent1) {\n    component = <Component1 />;\n  }\n\n  return component;\n}\n")),Object(c.b)("h3",{id:"\u4e09\u5143\u8fd0\u7b97\u7b26"},"\u4e09\u5143\u8fd0\u7b97\u7b26"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/%3F:"},"\u4e09\u5143\u8fd0\u7b97\u7b26"),"\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"condition ? expr_if_true : expr_if_false\n")),Object(c.b)("p",null,"\u7528\u5728 JSX \u4e0a\u4e5f\u5f88\u65b9\u4fbf\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  return renderComponent1 ? <Component1 /> : null;\n}\n")),Object(c.b)("p",null,"\u4f46\u4e09\u5143\u8fd0\u7b97\u7b26\u4ea7\u751f\u5d4c\u5957\u65f6\uff0c\u7406\u89e3\u6210\u672c\u4f1a\u53d8\u5f97\u5f88\u9ad8\u3002"),Object(c.b)("h3",{id:""},"&&"),Object(c.b)("p",null,"\u8fd9\u4e2a\u662f\u6700\u5e38\u7528\u4e86\uff0c\u56e0\u4e3a\u4ee3\u7801\u91cf\u6700\u5c11\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  return renderComponent1 && <Component1 />;\n}\n")),Object(c.b)("h3",{id:"iife"},"IIFE"),Object(c.b)("p",null,"IIFE \u542b\u4e49\u662f\u7acb\u5373\u6267\u884c\u51fd\u6570\uff0c\u4e5f\u5c31\u662f\u5982\u4e0b\u4ee3\u7801\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"(function myFunction(/* arguments */) {\n  // ...\n})(/* arguments */);\n")),Object(c.b)("p",null,"\u5f53\u6df1\u9677 JSX \u4ee3\u7801\u4e2d\uff0c\u53c8\u60f3\u5199\u4e00\u5927\u5757\u903b\u8f91\u65f6\uff0c\u9664\u4e86\u56de\u5230\u4e0a\u65b9\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 IIFE\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  return (\n    <div>\n      {(() => {\n        if (renderComponent1) {\n          return <Component1 />;\n        } else {\n          return <div />;\n        }\n      })()}\n    </div>\n  );\n}\n")),Object(c.b)("h3",{id:"\u5b50\u7ec4\u4ef6"},"\u5b50\u7ec4\u4ef6"),Object(c.b)("p",null,"\u8fd9\u662f IIFE \u7684\u53d8\u79cd\uff0c\u4e5f\u5c31\u662f\u628a\u8fd9\u6bb5\u7acb\u5373\u6267\u884c\u51fd\u6570\u66ff\u6362\u6210\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  return (\n    <div>\n      <SubRender />\n    </div>\n  );\n}\n\nfunction SubRender() {\n  if (renderComponent1) {\n    return <Component1 />;\n  } else {\n    return <div />;\n  }\n}\n")),Object(c.b)("h3",{id:"if-\u7ec4\u4ef6"},"IF \u7ec4\u4ef6"),Object(c.b)("p",null,"\u505a\u4e00\u4e2a\u6761\u4ef6\u6e32\u67d3\u7ec4\u4ef6 ",Object(c.b)("inlineCode",{parentName:"p"},"IF")," \u4ee3\u66ff js \u51fd\u6570\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"if"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"<If condition={true}>\n  <span>Hi!</span>\n</If>\n")),Object(c.b)("p",null,"\u8fd9\u4e2a\u7ec4\u4ef6\u5b9e\u73b0\u4e5f\u5f88\u7b80\u5355"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"const If = props => {\n  const condition = props.condition || false;\n  const positive = props.then || null;\n  const negative = props.else || null;\n\n  return condition ? positive : negative;\n};\n")),Object(c.b)("h3",{id:"\u9ad8\u9636\u7ec4\u4ef6"},"\u9ad8\u9636\u7ec4\u4ef6"),Object(c.b)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\uff0c\u5c31\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7ec4\u4ef6\u7684\u51fd\u6570\uff0c\u5e76\u4e14\u63a5\u6536\u4e00\u4e2a\u7ec4\u4ef6\u4f5c\u4e3a\u53c2\u6570\u3002"),Object(c.b)("p",null,"\u90a3\u4e48\u6211\u4eec\u5c31\u80fd\u5728\u9ad8\u9636\u7ec4\u4ef6\u91cc\u5199\u6761\u4ef6\u8bed\u53e5\uff0c\u8fd4\u56de\u4e0d\u540c\u7684\u7ec4\u4ef6\u5373\u53ef\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function higherOrderComponent(Component) {\n  return function EnhancedComponent(props) {\n    if (condition) {\n      return <AnotherComponent {...props} />;\n    }\n\n    return <Component {...props} />;\n  };\n}\n")),Object(c.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(c.b)("p",null,"\u8fd9\u4e48\u591a\u65b9\u6cd5\u90fd\u80fd\u5b9e\u73b0\u6761\u4ef6\u6e32\u67d3\uff0c\u90a3\u4e48\u91cd\u70b9\u5728\u4e8e\u53ef\u8bfb\u6027\u4e0e\u53ef\u7ef4\u62a4\u6027\u3002"),Object(c.b)("p",null,"\u6bd4\u5982\u901a\u8fc7\u8c03\u7528\u51fd\u6570\u5b9e\u73b0\u7ec4\u4ef6\u6e32\u67d3\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"<div>{renderButton()}</div>\n")),Object(c.b)("p",null,"\u770b\u4e0a\u53bb\u8fd8\u662f\u6bd4\u8f83\u5197\u4f59\uff0c\u5982\u679c\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"renderButton")," getter \u5b9a\u4e49\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8fd9\u4e48\u5199\u5b83\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"<div>{button}</div>\n")),Object(c.b)("p",null,"\u5176\u5b9e\u6211\u4eec\u60f3\u8981\u7684\u5c31\u662f button\uff0c\u800c\u4e0d\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"renderButton"),"\u3002\u90a3\u4e48\u8fd8\u53ef\u4ee5\u8fdb\u4e00\u6b65\uff0c\u5e72\u8106\u5c01\u88c5\u6210 JSX \u7ec4\u4ef6\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"<div>\n  <Button />\n</div>\n")),Object(c.b)("p",null,"\u662f\u5426\u8981\u4ed8\u51fa\u8fd9\u4e9b\u52aa\u529b\uff0c\u53d6\u51b3\u4e8e\u5e94\u7528\u7684\u590d\u6742\u5ea6\u3002\u5982\u679c\u5e94\u7528\u590d\u6742\u5ea6\u975e\u5e38\u9ad8\uff0c\u90a3\u4f60\u5e94\u5f53\u5c3d\u91cf\u4f7f\u7528\u6700\u540e\u4e00\u79cd\u5c01\u88c5\uff0c\u8ba9\u6bcf\u4e2a\u6587\u4ef6\u7684\u903b\u8f91\u5c3d\u91cf\u72ec\u7acb\u3001\u7b80\u5355\u3002"),Object(c.b)("p",null,"\u5982\u679c\u5e94\u7528\u590d\u6742\u5ea6\u6bd4\u8f83\u4f4e\uff0c\u90a3\u4e48\u6ce8\u610f\u4e0d\u8981\u8fc7\u5ea6\u5c01\u88c5\uff0c\u4ee5\u514d\u628a\u81ea\u5df1\u7ed5\u8fdb\u53bb\u3002"),Object(c.b)("p",null,"\u6240\u4ee5\u770b\u6765\u8fd9\u53c8\u662f\u4e00\u4e2a\u6ca1\u6709\u56fa\u5b9a\u7b54\u6848\u7684\u95ee\u9898\uff0c\u9009\u62e9\u4f55\u79cd\u65b9\u5f0f\u5c01\u88c5\uff0c\u53d6\u51b3\u4e8e\u5e94\u7528\u590d\u6742\u5ea6\u3002"),Object(c.b)("h3",{id:"\u5e94\u7528\u590d\u6742\u5ea6"},"\u5e94\u7528\u590d\u6742\u5ea6"),Object(c.b)("p",null,"\u5bf9\u4efb\u4f55\u4ee3\u7801\u5c01\u88c5\uff0c\u90fd\u4f1a\u589e\u52a0\u8fd9\u6bb5 ",Object(c.b)("strong",{parentName:"p"},"\u8fde\u63a5\u903b\u8f91")," \u7684\u590d\u6742\u5ea6\u3002"),Object(c.b)("p",null,"\u5047\u5b9a\u65e0\u8bba\u5982\u4f55\u4ee3\u7801\u7684\u590d\u6742\u5ea6\u90fd\u662f\u6052\u5b9a\u4e0d\u53d8\u7684\uff0c\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\uff0c\u8fde\u63a5\u590d\u6742\u5ea6\u4e3a 0\uff0c\u800c\u5bf9\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u800c\u8a00\uff0c\u903b\u8f91\u590d\u6742\u5ea6\u662f 100\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  if (renderComponent) {\n    return isOk ? <Component1 /> : <Component2 />;\n  } else {\n    return <div />;\n  }\n}\n")),Object(c.b)("p",null,"\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u62c6\u6210\u4e86\u4e24\u4e2a\u51fd\u6570\uff0c\u903b\u8f91\u590d\u6742\u5ea6\u5bf9 ",Object(c.b)("inlineCode",{parentName:"p"},"render")," ",Object(c.b)("inlineCode",{parentName:"p"},"SubComponent")," \u6765\u8bf4\u90fd\u662f 50\uff0c\u4f46\u8fde\u63a5\u590d\u6742\u5ea6\u662f 50\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"function render() {\n  if (renderComponent) {\n    return <SubComponent>;\n  } else {\n    return <div />;\n  }\n}\n\nfunction SubComponent() {\n  return isOk ? <Component1 /> : <Component2 />\n}\n")),Object(c.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u901a\u8fc7\u51fd\u6570\u62c6\u5206\uff0c\u964d\u4f4e\u4e86\u6bcf\u4e2a\u51fd\u6570\u7684\u903b\u8f91\u590d\u6742\u5ea6\uff0c\u4f46\u5374\u63d0\u9ad8\u4e86\u8fde\u63a5\u590d\u6742\u5ea6\u3002"),Object(c.b)("p",null,"\u4e0b\u9762\u6765\u505a\u4e00\u4e2a\u6bd4\u8f83\uff0c\u6211\u4eec\u5047\u8bbe\u4e00\u4e2a\u6b63\u5e38\u7684\u7a0b\u5e8f\u5458\uff0c\u53ef\u4ee5\u4e00\u6b21\u6027\u8f7b\u677e\u8bb0\u5fc6 10 \u4e2a\u51fd\u6570\u3002\u5982\u679c\u518d\u591a\uff0c\u51fd\u6570\u4e4b\u95f4\u7684\u8c03\u7528\u5173\u7cfb\u5c31\u4f1a\u8ba9\u4eba\u6478\u4e0d\u7740\u5934\u8111\u3002"),Object(c.b)("h4",{id:"\u5e94\u7528\u8f83\u5c0f\u65f6"},"\u5e94\u7528\u8f83\u5c0f\u65f6"),Object(c.b)("p",null,"\u5728\u5e94\u7528\u4ee3\u7801\u91cf\u6bd4\u8f83\u5c0f\u65f6\uff0c\u5047\u8bbe\u4e00\u5171\u6709 10 \u4e2a\u51fd\u6570\uff0c\u5982\u679c\u505a\u4e86\u903b\u8f91\u62bd\u8c61\uff0c\u62c6\u5206\u51fa\u4e86 10 \u4e2a\u5b50\u51fd\u6570\uff0c\u90a3\u4e48\u603b\u903b\u8f91\u590d\u6742\u5ea6\u4e0d\u53d8\uff0c\u51fd\u6570\u53d8\u6210\u4e86 20 \u4e2a\u3002"),Object(c.b)("p",null,"\u6b64\u65f6\u5c0f\u738b\u8981\u4fee\u6539\u6b64\u9879\u76ee\uff0c\u4ed6\u9700\u8981\u627e\u5230\u5173\u952e\u4ee3\u7801\u7684\u4f4d\u7f6e\u3002"),Object(c.b)("p",null,"\u5982\u679c\u6ca1\u6709\u505a\u903b\u8f91\u62bd\u8c61\uff0c\u5c0f\u738b\u4e00\u4e0b\u5b50\u5c31\u8bb0\u4f4f\u4e86 10 \u4e2a\u51fd\u6570\uff0c\u5e76\u4e14\u5f88\u5feb\u5b8c\u6210\u4e86\u9700\u6c42\u3002"),Object(c.b)("p",null,"\u5982\u679c\u5e94\u7528\u505a\u4e86\u903b\u8f91\u62bd\u8c61\uff0c\u4ed6\u9700\u8981\u7406\u89e3\u7684\u903b\u8f91\u590d\u6742\u5ea6\u662f\u4e0d\u53d8\u7684\uff0c\u4f46\u662f\u8981\u8bfb\u7684\u51fd\u6570\u53d8\u6210\u4e86 20 \u4e2a\u3002\u5c0f\u738b\u9700\u8981\u50cf\u4fa6\u63a2\u4e00\u6837\u5728\u7ebf\u7d22\u4e2d\u4e0d\u65ad\u8df3\u8f6c\uff0c\u4ed6\u8fd8\u662f\u53ea\u627e\u4e86 10 \u4e2a\u5173\u952e\u51fd\u6570\uff0c\u4f46\u4e00\u5171\u4e5f\u5c31 20 \u4e2a\u51fd\u6570\uff0c\u903b\u8f91\u5e76\u4e0d\u590d\u6742\uff0c\u8fd9\u503c\u5f97\u5417\uff1f"),Object(c.b)("p",null,"\u5c0f\u738b\u5fc3\u91cc\u53ef\u80fd\u4f1a\u5600\u5495\uff1a\u7b80\u5355\u7684\u903b\u8f91\u778e\u62bd\u8c61\uff0c\u5bb3\u6211\u6587\u4ef6\u627e\u4e86\u534a\u5929\uff01"),Object(c.b)("h4",{id:"\u5e94\u7528\u8f83\u5927\u65f6"},"\u5e94\u7528\u8f83\u5927\u65f6"),Object(c.b)("p",null,"\u6b64\u65f6\u5e94\u7528\u4ee3\u7801\u91cf\u6bd4\u8f83\u5927\uff0c\u5047\u8bbe\u4e00\u5171\u6709 500 \u4e2a\u51fd\u6570\uff0c\u6211\u4eec\u4e0d\u8003\u8651\u62bd\u8c61\u540e\u5e26\u6765\u7684\u590d\u7528\u597d\u5904\uff0c\u5047\u8bbe\u90fd\u65e0\u6cd5\u590d\u7528\uff0c\u90a3\u4e48\u505a\u4e86\u903b\u8f91\u62bd\u8c61\u540e\uff0c\u90a3\u4e48\u603b\u903b\u8f91\u590d\u6742\u5ea6\u4e0d\u53d8\uff0c\u51fd\u6570\u53d8\u6210\u4e86 1000 \u4e2a\u3002"),Object(c.b)("p",null,"\u6b64\u65f6\u5c0f\u738b\u63a5\u5230\u4e86\u9700\u6c42\uff0c\u7ec8\u4e8e\u7ef4\u62a4\u4e86\u4e00\u4e2a\u5927\u9879\u76ee\u3002"),Object(c.b)("p",null,"\u5c0f\u738b\u77e5\u9053\u8fd9\u4e2a\u9879\u76ee\u5f88\u590d\u6742\uff0c\u4ece\u4e00\u5f00\u59cb\u5c31\u6ca1\u89c9\u5f97\u80fd\u7406\u89e3\u9879\u76ee\u5168\u8c8c\uff0c\u6240\u4ee5\u628a\u81ea\u5df1\u5f53\u4f5c\u4e00\u540d\u4fa6\u63a2\uff0c\u51c6\u5907\u4e00\u6b65\u6b65\u63a2\u7d22\u3002"),Object(c.b)("p",null,"\u73b0\u5728\u6709\u4e24\u79cd\u9009\u62e9\uff0c\u4e00\u79cd\u662f\u5728\u672a\u505a\u903b\u8f91\u62bd\u8c61\u65f6\u63a2\u7d22\uff0c\u4e00\u79cd\u662f\u5728\u505a\u8fc7\u903b\u8f91\u62bd\u8c61\u540e\u63a2\u7d22\u3002"),Object(c.b)("p",null,"\u5982\u679c\u6ca1\u505a\u903b\u8f91\u62bd\u8c61\uff0c\u5c0f\u738b\u9700\u8981\u9762\u5bf9 ",Object(c.b)("inlineCode",{parentName:"p"},"500")," \u4e2a\u8fd9\u79cd\u51fd\u6570\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  if (renderComponent) {\n    return isOk ? <Component1 /> : <Component2 />;\n  } else {\n    return isReady ? <Component3 /> : <Component4 />;\n  }\n}\n")),Object(c.b)("p",null,"\u5982\u679c\u505a\u4e86\u903b\u8f91\u62bd\u8c61\uff0c\u5c0f\u738b\u9700\u8981\u9762\u5bf9 ",Object(c.b)("inlineCode",{parentName:"p"},"1000")," \u4e2a\u8fd9\u79cd\u51fd\u6570\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"function render() {\n  if (renderComponent) {\n    return <Component1And2 />;\n  } else {\n    return <Component3And4 />;\n  }\n}\n")),Object(c.b)("p",null,"\u5728\u9879\u76ee\u5e9e\u5927\u540e\uff0c\u603b\u51fd\u6570\u6570\u91cf\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5bf9\u7ebf\u7d22\u7684\u67e5\u627e\uff0c\u800c\u603b\u7ebf\u7d22\u6df1\u5ea6\u4e5f\u51e0\u4e4e\u603b\u662f\u56fa\u5b9a\u7684\uff0c\u4e00\u822c\u5728 5 \u5c42\u5de6\u53f3\u3002"),Object(c.b)("p",null,"\u5c0f\u738b\u7406\u89e3 5 \u4e2a\u6216 10 \u4e2a\u51fd\u6570\u6210\u672c\u90fd\u5dee\u4e0d\u591a\uff0c\u4f46\u6ca1\u6709\u505a\u903b\u8f91\u62bd\u8c61\u65f6\uff0c\u8fd9 5 \u4e2a\u51fd\u6570\u5404\u81ea\u53c2\u6742\u4e86\u5176\u4ed6\u903b\u8f91\uff0c\u53cd\u800c\u5f71\u54cd\u5bf9\u51fd\u6570\u7684\u7406\u89e3\u3002"),Object(c.b)("p",null,"\u8fd9\u65f6\u505a\u903b\u8f91\u62bd\u8c61\u662f\u5408\u9002\u7684\u3002"),Object(c.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(c.b)("p",null,"\u6240\u4ee5\u603b\u7684\u6765\u8bf4\uff0c\u7b14\u8005\u66f4\u503e\u5411\u4f7f\u7528\u5b50\u51fd\u6570\u3001\u5b50\u7ec4\u4ef6\u3001IF \u7ec4\u4ef6\u3001\u9ad8\u9636\u7ec4\u4ef6\u505a\u6761\u4ef6\u6e32\u67d3\uff0c\u56e0\u4e3a\u8fd9\u56db\u79cd\u65b9\u5f0f\u90fd\u80fd\u63d0\u9ad8\u7a0b\u5e8f\u7684\u62bd\u8c61\u80fd\u529b\u3002"),Object(c.b)("p",null,"\u5f80\u5f80\u62bd\u8c61\u540e\u7684\u4ee3\u7801\u4f1a\u66f4\u5177\u6709\u590d\u7528\u6027\uff0c\u5355\u4e2a\u51fd\u6570\u903b\u8f91\u66f4\u6e05\u6670\uff0c\u5728\u5207\u9762\u7f16\u7a0b\u65f6\u66f4\u5229\u4e8e\u7406\u89e3\u3002"),Object(c.b)("p",null,"\u5f53\u9879\u76ee\u5f88\u7b80\u5355\u65f6\uff0c\u6574\u4e2a\u9879\u76ee\u7684\u7406\u89e3\u6210\u672c\u90fd\u5f88\u4f4e\uff0c\u62bd\u8c61\u5e26\u6765\u7684\u590d\u6742\u5ea6\u53cd\u800c\u8ba9\u9879\u76ee\u53d8\u6210\u4e86\u9700\u8981\u5207\u9762\u7f16\u7a0b\u7684\u65f6\u5019\uff0c\u5c31\u5f97\u4e0d\u507f\u5931\u4e86\u3002"),Object(c.b)("p",null,"\u603b\u7ed3\u4e00\u4e0b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5f53\u9879\u76ee\u5f88\u7b80\u5355\uff0c\u6216\u8005\u6761\u4ef6\u6e32\u67d3\u7684\u903b\u8f91\u786e\u8ba4\u65e0\u6cd5\u590d\u7528\u65f6\uff0c\u63a8\u8350\u5728\u4ee3\u7801\u4e2d\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"&&")," \u6216\u8005\u4e09\u5143\u8fd0\u7b97\u7b26\u3001IIFE \u7b49\u76f4\u63a5\u5b9e\u73b0\u6761\u4ef6\u6e32\u67d3\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5f53\u9879\u76ee\u5f88\u590d\u6742\u65f6\uff0c\u5c3d\u91cf\u90fd\u4f7f\u7528 \u5b50\u51fd\u6570\u3001\u5b50\u7ec4\u4ef6\u3001IF \u7ec4\u4ef6\u3001\u9ad8\u9636\u7ec4\u4ef6 \u7b49\u65b9\u5f0f\u505a\u66f4\u6709\u62bd\u8c61\u5ea6\u7684\u6761\u4ef6\u6e32\u67d3\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5728\u505a\u903b\u8f91\u62bd\u8c61\u65f6\uff0c\u8003\u8651\u4e0b\u9879\u76ee\u7684\u590d\u6742\u5ea6\uff0c\u907f\u514d\u56e0\u4e3a\u62bd\u8c61\u5e26\u6765\u7684\u6210\u672c\u589e\u52a0\uff0c\u8ba9\u672c\u53ef\u4ee5\u6574\u4f53\u7406\u89e3\u7684\u9879\u76ee\u53d8\u5f97\u652f\u79bb\u7834\u788e\u3002")),Object(c.b)("h2",{id:"5-\u66f4\u591a\u8ba8\u8bba"},"5 \u66f4\u591a\u8ba8\u8bba"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/90"},"\u7cbe\u8bfb\u300aReact \u516b\u79cd\u6761\u4ef6\u6e32\u67d3\u300b \xb7 Issue #90 \xb7 dt-fe/weekly"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(c.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002")))}i.isMDXComponent=!0},385:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),l=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=l.a.createContext({}),i=function(e){var n=l.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=i(e.components);return l.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},O=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(t),O=r,s=u["".concat(b,".").concat(O)]||u[O]||d[O]||c;return t?l.a.createElement(s,a(a({ref:n},p),{},{components:t})):l.a.createElement(s,a({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,b=new Array(c);b[0]=O;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,b[1]=a;for(var p=2;p<c;p++)b[p]=t[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);