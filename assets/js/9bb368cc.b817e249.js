(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{259:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),l=(t(0),t(385)),c={title:"34. \u7cbe\u8bfb\u300aReact \u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b",id:"034",hide_title:!0},o={unversionedId:"034",id:"034",isDocsHomePage:!1,title:"34. \u7cbe\u8bfb\u300aReact \u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b",description:"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1aReact \u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u3002",source:"@site/weekly/034.\u7cbe\u8bfb\u300aReact \u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b.md",slug:"/034",permalink:"/weekly/034",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/034.\u7cbe\u8bfb\u300aReact \u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617868529,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"33. \u7cbe\u8bfb\u300a30\u884cjs\u4ee3\u7801\u521b\u5efa\u795e\u7ecf\u7f51\u7edc\u300b",permalink:"/weekly/033"},next:{title:"35. \u7cbe\u8bfb\u300adob - \u6846\u67b6\u5b9e\u73b0\u300b",permalink:"/weekly/035"}},i=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u5185\u5bb9\u6982\u8981",id:"2-\u5185\u5bb9\u6982\u8981",children:[{value:"\u4e0d\u5197\u4f59",id:"\u4e0d\u5197\u4f59",children:[]},{value:"\u53ef\u9884\u6d4b\u3001\u53ef\u6d4b\u8bd5",id:"\u53ef\u9884\u6d4b\u3001\u53ef\u6d4b\u8bd5",children:[]},{value:"\u81ea\u6211\u89e3\u91ca",id:"\u81ea\u6211\u89e3\u91ca",children:[]},{value:"\u659f\u914c\u53d8\u91cf\u540d",id:"\u659f\u914c\u53d8\u91cf\u540d",children:[]},{value:"\u9075\u5faa\u8bbe\u8ba1\u6a21\u5f0f",id:"\u9075\u5faa\u8bbe\u8ba1\u6a21\u5f0f",children:[]},{value:"\u8003\u8651\u5230\u4ee5\u4e0a\u51e0\u70b9\u5e76\u4e0d\u4f1a\u964d\u4f4e\u7f16\u7801\u901f\u5ea6",id:"\u8003\u8651\u5230\u4ee5\u4e0a\u51e0\u70b9\u5e76\u4e0d\u4f1a\u964d\u4f4e\u7f16\u7801\u901f\u5ea6",children:[]},{value:"\u5728 React \u4e2d\u7684\u5b9e\u8df5",id:"\u5728-react-\u4e2d\u7684\u5b9e\u8df5",children:[]},{value:"\u63d0\u5021\u65e0\u72b6\u6001\u7ec4\u4ef6",id:"\u63d0\u5021\u65e0\u72b6\u6001\u7ec4\u4ef6",children:[]},{value:"\u89e3\u6784",id:"\u89e3\u6784",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[]},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[{value:"\u66f4\u591a\u8ba8\u8bba",id:"\u66f4\u591a\u8ba8\u8bba",children:[]}]}],b={toc:i};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"http://americanexpress.io/clean-code-dirty-code/"},"React \u4ee3\u7801\u6574\u6d01\u4e4b\u9053"),"\u3002"),Object(l.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(l.b)("p",null,"\u7f16\u7a0b\u4e5f\u662f\u827a\u672f\u884c\u4e3a\uff0c\u5f53\u6211\u4eec\u601d\u8003\u4ee3\u7801\u590d\u7528\u3001\u53d8\u91cf\u547d\u540d\u65f6\uff0c\u5c31\u662f\u5728\u8fdb\u884c\u827a\u672f\u601d\u8003\u3002"),Object(l.b)("p",null,"\u53ef\u80fd\u8fd9\u7bc7\u6587\u7ae0\u6ca1\u6cd5\u63d0\u9ad8\u9762\u8bd5\u80fd\u529b\u3001\u5f00\u53d1\u6548\u7387\uff0c\u56e0\u4e3a\u6d89\u53ca\u7684\u5185\u5bb9\u90fd\u662f \u201c\u8f6f\u80fd\u529b\u201d\u3002\u4f46\u5982\u679c\u4e0e\u6211\u4e00\u6837\uff0c\u65f6\u5e38\u5bb3\u6015\u81ea\u5df1\u4ee3\u7801\u4e0d\u591f\u4f18\u96c5\uff0c\u90a3\u5c31\u5728\u8336\u4f59\u996d\u540e\u770b\u770b\u8fd9\u7bc7\u6587\u7ae0\uff0c\u4e5f\u8bb8\uff0c\u53ef\u4ee5\u89e3\u51b3\u4e00\u90e8\u5206\u4f60\u5fc3\u4e2d\u7684\u56f0\u60d1\u3002"),Object(l.b)("h2",{id:"2-\u5185\u5bb9\u6982\u8981"},"2 \u5185\u5bb9\u6982\u8981"),Object(l.b)("p",null,"\u4f5c\u8005\u6574\u7406\u4e86\u51e0\u4e2a\u597d\u7684\u601d\u7ef4\u4e60\u60ef\uff0c\u5c1d\u8bd5\u8ba4\u540c\u5b83\uff0c\u518d\u770b\u770b\u5982\u4f55\u5b9e\u8df5\u3002"),Object(l.b)("h3",{id:"\u4e0d\u5197\u4f59"},"\u4e0d\u5197\u4f59"),Object(l.b)("p",null,"\u907f\u514d\u91cd\u590d\u4ee3\u7801\u6bb5\uff0c\u5bf9 JSX \u540c\u7406\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'// Dirty\nconst MyComponent = () => (\n  <div>\n    <OtherComponent type="a" className="colorful" foo={123} bar={456} />\n    <OtherComponent type="b" className="colorful" foo={123} bar={456} />\n  </div>\n);\n\n// Clean\nconst MyOtherComponent = ({ type }) => (\n  <OtherComponent type={type} className="colorful" foo={123} bar={456} />\n);\nconst MyComponent = () => (\n  <div>\n    <MyOtherComponent type="a" />\n    <MyOtherComponent type="b" />\n  </div>\n);\n')),Object(l.b)("p",null,"\u4f46\u4e5f\u4e0d\u8981\u8fc7\u5ea6\u4f18\u5316\uff0c\u8fc7\u5ea6\u4f18\u5316\u548c\u641e\u7834\u574f\u6ca1\u4ec0\u4e48\u533a\u522b\u3002"),Object(l.b)("h3",{id:"\u53ef\u9884\u6d4b\u3001\u53ef\u6d4b\u8bd5"},"\u53ef\u9884\u6d4b\u3001\u53ef\u6d4b\u8bd5"),Object(l.b)("p",null,"\u5982\u679c\u4f7f\u7528 ",Object(l.b)("a",{parentName:"p",href:"https://facebook.github.io/jest/"},"Jest")," \u6d4b\u8bd5\uff0c\u53ef\u4ee5\u8003\u8651\u622a\u56fe\u6d4b\u8bd5\u63d2\u4ef6\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/americanexpress/jest-image-snapshot"},"Jest Image Snapshot")),Object(l.b)("h3",{id:"\u81ea\u6211\u89e3\u91ca"},"\u81ea\u6211\u89e3\u91ca"),Object(l.b)("p",null,"\u5c3d\u53ef\u80fd\u51cf\u5c11\u4ee3\u7801\u4e2d\u7684\u6ce8\u91ca\u3002\u53ef\u4ee5\u901a\u8fc7\u8ba9\u53d8\u91cf\u540d\u66f4\u8bed\u4e49\u5316\u3001\u53ea\u6ce8\u91ca\u590d\u6742\u3001\u6f5c\u5728\u903b\u8f91\uff0c\u6765\u51cf\u5c11\u6ce8\u91ca\u91cf\uff0c\u540c\u65f6\u4e5f\u63d0\u9ad8\u4e86\u53ef\u7ef4\u62a4\u6027\uff0c\u6bd5\u7adf\u4e0d\u7528\u603b\u5728\u4ee3\u7801\u4e0e\u6ce8\u91ca\u4e4b\u95f4\u540c\u6b65\u4e86\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// Dirty\nconst fetchUser = (id) => (\n  fetch(buildUri`/users/${id}`) // Get User DTO record from REST API\n    .then(convertFormat) // Convert to snakeCase\n    .then(validateUser) // Make sure the the user is valid\n);\n\n// Clean\nconst fetchUser = (id) => (\n  fetch(buildUri`/users/${id}`)\n    .then(snakeToCamelCase)\n    .then(validateUser)\n);\n")),Object(l.b)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u65b9\u6cd5 ",Object(l.b)("inlineCode",{parentName:"p"},"convertFormat")," \u542b\u4e49\u662f \u201c\u8f6c\u6362\u683c\u5f0f\u201d\uff0c\u592a\u8fc7\u4e8e\u7b3c\u7edf\uff0c\u4ee5\u81f3\u4e8e\u4e0d\u5f97\u4e0d\u6dfb\u52a0\u6ce8\u91ca\u3002\u5982\u679c\u6362\u6210 ",Object(l.b)("inlineCode",{parentName:"p"},"snakeToCamelCase")," \uff08\u8f6c\u6362\u4e3a\u9a7c\u5cf0\u98ce\u683c\uff09\uff0c\u8fd9\u4e2a\u540d\u5b57\u5c31\u89e3\u91ca\u4e86\u81ea\u5df1\u7684\u529f\u80fd\u3002"),Object(l.b)("h3",{id:"\u659f\u914c\u53d8\u91cf\u540d"},"\u659f\u914c\u53d8\u91cf\u540d"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5e03\u5c14\u503c\u6216\u8005\u8fd4\u56de\u503c\u662f\u5e03\u5c14\u7c7b\u578b\u7684\u51fd\u6570\uff0c\u547d\u540d\u4ee5 ",Object(l.b)("inlineCode",{parentName:"p"},"is")," ",Object(l.b)("inlineCode",{parentName:"p"},"has")," ",Object(l.b)("inlineCode",{parentName:"p"},"should")," \u5f00\u5934\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// Dirty\nconst done = current >= goal;\n// Clean\nconst isComplete = current >= goal;\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u51fd\u6570\u4ee5\u5176\u6548\u679c\u547d\u540d\uff0c\u800c\u4e0d\u662f\u600e\u4e48\u505a\u7684\u6765\u547d\u540d")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// Dirty\nconst loadConfigFromServer = () => {\n  ...\n};\n// Clean\nconst loadConfig = () => {\n  ...\n};\n")),Object(l.b)("p",null,"\u5f88\u591a\u65f6\u5019\u6211\u4e5f\u7ecf\u5e38\u72af\u8fd9\u79cd\u9519\u8bef\uff0c\u6bd5\u7adf\u5199\u4ee3\u7801\u7684\u65f6\u5019\u603b\u8981\u8003\u8651\u5b9e\u73b0\uff0c\u4e00\u4e0d\u5c0f\u5fc3\u5c31\u5c06\u5b9e\u73b0\u7684\u65b9\u5f0f\u5e26\u5165\u4e86\u51fd\u6570\u540d\u4e2d\u3002"),Object(l.b)("h3",{id:"\u9075\u5faa\u8bbe\u8ba1\u6a21\u5f0f"},"\u9075\u5faa\u8bbe\u8ba1\u6a21\u5f0f"),Object(l.b)("p",null,"\u8fd9\u91cc\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5e76\u4e0d\u662f\u6307\u5de5\u7a0b\u4e0a\u7684\uff0c\u800c\u662f\u66f4\u5e7f\u6cdb\u7684\u5f00\u53d1\u4e2d\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u6bd4\u5982 \u201c\u4f60\u5e94\u8be5\u4f7f\u7528 tslint \u6821\u9a8c\u4ee3\u7801\u683c\u5f0f\u201d \u201ctypescript \u5f00\u542f stricts \u6a21\u5f0f\u201d \u201c\u7f16\u5199\u4e00\u4e2a React \u51fd\u6570\uff0c\u5e94\u5f53\u5c06 React \u4f5c\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependency"),"\u201d \u7b49\u7b49\uff08\u5f53\u7136\uff0c\u4e0d\u8981\u968f\u610f\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependency")," \u4e5f\u662f\u4e00\u79cd\u6c5f\u6e56\u7ea6\u5b9a\uff09\u3002"),Object(l.b)("p",null,"\u5bf9\u4e8e React\uff0c\u9075\u5faa\u4ee5\u4e0b\u51e0\u4e2a\u6700\u4f73\u5b9e\u8df5\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5355\u4e00\u8d23\u4efb\u539f\u5219, \u786e\u4fdd\u6bcf\u4e2a\u529f\u80fd\u90fd\u5b8c\u6574\u5b8c\u6210\u4e00\u9879\u529f\u80fd\uff0c\u6bd4\u5982\u66f4\u7ec6\u7c92\u5ea6\u7684\u7ec4\u4ef6\u62c6\u5206\uff0c\u540c\u65f6\u4e5f\u66f4\u5229\u4e8e\u6d4b\u8bd5\u3002"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8981\u628a\u7ec4\u4ef6\u7684\u5185\u90e8\u4f9d\u8d56\u5f3a\u52a0\u7ed9\u4f7f\u7528\u65b9\u3002"),Object(l.b)("li",{parentName:"ul"},"lint \u89c4\u5219\u5c3d\u91cf\u4e25\u683c\u3002")),Object(l.b)("p",null,"\u6839\u636e\u6211\u7684\u4f53\u9a8c\uff0c\u5c24\u4e3a\u75db\u6068\u8fdd\u80cc\u7b2c\u4e8c\u6761\u7684\u7ec4\u4ef6\uff0c",Object(l.b)("strong",{parentName:"p"},"\u6bd4\u5982\u5f53 React \u7ec4\u4ef6\u4f7f\u7528\u4e86\u6570\u636e\u6d41\uff0c\u4f46\u5fc5\u987b\u4f9d\u8d56\u9879\u76ee\u521d\u59cb\u5316\u8be5\u6570\u636e\u6d41\u624d\u80fd\u6267\u884c\uff0c\u5982\u679c\u4e0d\u662f\u88ab\u751f\u6d3b\u6240\u8feb\uff0c\u6211\u624d\u4e0d\u4f1a\u4f7f\u7528\u8fd9\u79cd\u7ec4\u4ef6\u3002")),Object(l.b)("p",null,"\u7b2c\u4e09\u6761\u4e5f\u4e00\u6837\uff0c",Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u662f\u4e00\u4e2a\u77e5\u540d\u8f6e\u5b50\u7684\u4f5c\u8005\uff0c\u8bf7\u6beb\u4e0d\u7559\u60c5\u7684\u4f7f\u7528\u6700\u4e25\u683c\u7684 lint \u89c4\u5219\u3002\u5982\u679c\u4f7f\u7528\u8005\u7684 lint \u89c4\u5219\u6bd4\u4f60\u8fd8\u4e25\u683c\uff0c\u4f60\u7684\u7ec4\u4ef6\u5c06\u65e0\u6cd5\u4f7f\u7528\u3002")),Object(l.b)("h3",{id:"\u8003\u8651\u5230\u4ee5\u4e0a\u51e0\u70b9\u5e76\u4e0d\u4f1a\u964d\u4f4e\u7f16\u7801\u901f\u5ea6"},"\u8003\u8651\u5230\u4ee5\u4e0a\u51e0\u70b9\u5e76\u4e0d\u4f1a\u964d\u4f4e\u7f16\u7801\u901f\u5ea6"),Object(l.b)("p",null,"\u7f16\u5199\u6574\u6d01\u7684\u4ee3\u7801\u5728\u5f00\u59cb\u4e00\u5b9a\u4f1a\u653e\u6162\u5f00\u53d1\u901f\u5ea6\uff0c\u56e0\u4e3a\u4f60\u9700\u8981\u8f6c\u53d8\u81ea\u5df1\u7684\u601d\u7ef4\u6a21\u5f0f\uff0c\u4f46\u968f\u7740\u4e0d\u65ad\u8fed\u4ee3\uff0c\u5b83\u7684\u5e26\u6765\u7684\u6548\u7387\u63d0\u5347\u4f1a\u9010\u6e10\u5f25\u8865\u524d\u9762\u7684\u635f\u5931\uff0c\u5e76\u4e0d\u65ad\u5e26\u6765\u5f00\u53d1\u6548\u7387\u7684\u63d0\u5347\u3002"),Object(l.b)("p",null,"\u5199\u7ec4\u4ef6\u5e93\u4e5f\u662f\u540c\u7406\uff0c\u7528\u811a\u5199\u56fa\u7136\u80fd\u5feb\u901f\u5b8c\u6210\uff0c\u4f46\u540e\u7eed\u5f80\u5f80\u8981\u91cd\u6784\u6389\u3002\u6211\u5f88\u7fa1\u6155\u51fd\u6570\u5f0f\u5de5\u4f5c\u73af\u5883\u7684\u5f00\u53d1\u8005\uff0c\u4ed6\u4eec\u51e0\u4e4e\u53ea\u8981\u4e3a\u6bcf\u4e2a\u529f\u80fd\u5199\u4e00\u904d\uff0c\u5269\u4e0b\u7684\u5c31\u662f\u8bb0\u4f4f\u5e76\u8c03\u7528\u5b83\u3002"),Object(l.b)("h3",{id:"\u5728-react-\u4e2d\u7684\u5b9e\u8df5"},"\u5728 React \u4e2d\u7684\u5b9e\u8df5"),Object(l.b)("p",null,"\u7565\u8fc7\u51e0\u4e2a\u6ca1\u610f\u601d\u7684\u4f8b\u5b50\u3002\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5728 React \u4f7f\u7528 defaultProps \u4ee3\u66ff\u5728\u4ee3\u7801\u4e2d\u52a8\u6001\u5224\u65ad")),Object(l.b)("p",null,"\u663e\u7136\uff0c\u5229\u7528 React \u7ec4\u4ef6\u7684\u89c4\u5219\uff0c\u5c06\u5165\u53c2\u7684\u9ed8\u8ba4\u503c\u9884\u5148\u5b9a\u4e49\u597d\u662f\u6700\u9ad8\u6548\u7684\u3002\u4f46\u987a\u5e26\u4e00\u53e5\uff0c\u5982\u679c\u5728 ts \u6700\u4e25\u683c\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"stricts")," \u6a21\u5f0f\u91cc\uff0c\u4f9d\u7136\u4f1a\u62a5\u9519\uff1a\u53d8\u91cf\u53ef\u80fd\u672a\u5b9a\u4e49\u3002\u8fd9\u662f\u56e0\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"defaultProps")," \u4f9d\u7136\u662f\u4e2a\u7ea6\u5b9a\uff0c\u800c\u4e0d\u80fd\u901a\u8fc7\u5f3a\u7c7b\u578b\u63a8\u5bfc\u51fa\uff0c\u76ee\u524d\u8fd8\u6ca1\u6709\u66f4\u4f18\u96c5\u7684\u89e3\u51b3\u601d\u8def\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u6e32\u67d3\u4e0e\u5224\u65ad\u903b\u8f91\u5206\u5f00")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// Dirty\nclass User extends Component {\n  state = { loading: true };\n\n  render() {\n    const { loading, user } = this.state;\n    return loading\n      ? <div>Loading...</div>\n      : <div>\n          <div>\n            First name: {user.firstName}\n          </div>\n          <div>\n            First name: {user.lastName}\n          </div>\n          ...\n        </div>;\n  }\n\n  componentDidMount() {\n    fetchUser(this.props.id)\n      .then((user) => { this.setState({ loading: false, user })})\n  }\n}\n\n// Clean\nimport RenderUser from './RenderUser';\nclass User extends Component {\n  state = { loading: true };\n\n  render() {\n    const { loading, user } = this.state;\n    return loading ? <Loading /> : <RenderUser user={user} />;\n  }\n\n  componentDidMount() {\n    fetchUser(this.props.id)\n      .then(user => { this.setState({ loading: false, user })})\n  }\n}\n")),Object(l.b)("p",null,"\u903b\u8f91\u4e0e\u6e32\u67d3\u5206\u79bb\uff0c\u4fbf\u4e8e\u7ef4\u62a4\uff0c\u5176\u6b21\u4fbf\u4e8e\u6d4b\u8bd5\u3002"),Object(l.b)("p",null,"\u5f53\u7136\u6709\u4eba\u53ef\u80fd\u4f1a\u95ee \u201c\u5c31\u7b97\u903b\u8f91\u4e0e\u6e32\u67d3\u5206\u79bb\u4e86\uff0c\u4f46\u7ec4\u6210\u7684\u5927\u7ec4\u4ef6\u4e0d\u8fd8\u662f\u903b\u8f91\u8026\u5408\u7684\u5417\u201d\uff0c\u5bf9\uff0c\u8fd9\u5c31\u50cf\u51fd\u6570\u5355\u4e00\u6307\u8d23\u4e00\u6837\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"render")," \u662f\u8fc7\u7a0b\u4ee3\u7801\uff0c\u4f46\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u7684\u903b\u8f91\uff0c\u5206\u914d\u7ed9\u5355\u4e00\u6307\u8d23\u7684\u6e32\u67d3\u7ec4\u4ef6\u6e32\u67d3\uff0c\u5982\u679c\u628a\u903b\u8f91\u4e0e\u6e32\u67d3\u5199\u5728\u4e00\u8d77\uff0c\u5c31\u7c7b\u4f3c\u4e00\u4e2a\u51fd\u6570\u628a\u529f\u80fd\u5168\u505a\u5b8c\uff0c\u8fd9\u6837\u505a\u663e\u7136\u8bf8\u4e8b\u4e0d\u5229\u3002"),Object(l.b)("h3",{id:"\u63d0\u5021\u65e0\u72b6\u6001\u7ec4\u4ef6"},"\u63d0\u5021\u65e0\u72b6\u6001\u7ec4\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// Dirty\nclass TableRowWrapper extends Component {\n  render() {\n    return (\n      <tr>\n        {this.props.children}\n      </tr>\n    );\n  }\n}\n\n// Clean\nconst TableRowWrapper = ({ children }) => (\n  <tr>\n    {children}\n  </tr>\n);\n")),Object(l.b)("p",null,"\u6027\u80fd\u662f\u4e00\u4e2a\u539f\u56e0\uff0c\u539f\u6587\u6bd4\u8f83\u5f3a\u8c03\u6027\u80fd\u4e0e\u4ee3\u7801\u91cf\u3002\u6211\u8ba4\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"stateless")," \u91cd\u70b9\u5728\u4e8e\u963b\u788d\u4e86\u5185\u90e8\u72b6\u6001\u7684\u4f7f\u7528\uff0c\u79fb\u9664\u4e86\u751f\u547d\u5468\u671f\uff0c\u6240\u4ee5\u63d0\u9ad8\u4e86\u7ec4\u4ef6\u7684\u53ef\u63a7\u6027\uff0c\u4e5f\u5c31\u62d3\u5bbd\u4e86\u7ec4\u4ef6\u7684\u4f7f\u7528\u573a\u666f\u3002"),Object(l.b)("p",null,"\u53d7\u63a7\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6\u90fd\u6709\u5176\u9002\u7528\u573a\u666f\uff0c\u50cf\u975e\u5e38\u57fa\u7840\u7684\u5e95\u5c42\u7ec4\u4ef6\u5e93\uff0c\u5f80\u5f80\u503e\u5411\u63d0\u4f9b\u4e24\u5957\u673a\u5236\uff0c\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"value")," \u4e0e ",Object(l.b)("inlineCode",{parentName:"p"},"defaultValue")," \u51b3\u5b9a\u662f\u5426\u53d7\u63a7\u3002\u62e5\u6709\u8fd9\u6837\u80fd\u529b\u7684\u7ec4\u4ef6\u6e90\u7801\u5c31\u6ca1\u6cd5\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"stateless")," \u5199\uff0c\u6240\u4ee5\u65e0\u72b6\u6001\u7ec4\u4ef6\u7684\u9762\u5411\u5bf9\u8c61\u5e76\u4e0d\u662f\u57fa\u7840\u5e95\u5c42\u7ec4\u4ef6\uff0c\u800c\u4e14\u8fd9\u4e9b\u57fa\u7840\u7ec4\u4ef6\u4e5f\u6ca1\u5fc5\u8981\u5b8c\u5168\u65e0\u72b6\u6001\uff0c\u4e24\u8005\u90fd\u63d0\u4f9b\u662f\u6700\u597d\u7684\u9009\u62e9\u3002"),Object(l.b)("p",null,"\u8bf4\u5230\u8fd9\uff0c\u4e5f\u5c31\u662f\u8003\u8651\u5230\u6210\u672c\u95ee\u9898\uff0c\u90a3\u4e48\u65e0\u72b6\u6001\u7ec4\u4ef6\u4e5f\u5c31\u66f4\u9002\u5408\u4e0a\u5c42\u5177\u6709\u4e1a\u52a1\u542b\u4e49\u7684\u7ec4\u4ef6\u3002\u9875\u9762\u7ea7\u522b\u7ec4\u4ef6\u72b6\u6001\u592a\u591a\uff0c\u4e0d\u9002\u5408\uff0c\u6240\u4ee5\u6211\u8ba4\u4e3a\u65e0\u72b6\u6001\u7ec4\u4ef6\u6bd4\u8f83\u9002\u5408 ",Object(l.b)("inlineCode",{parentName:"p"},"Wrapper")," \u5c42\uff0c\u4e5f\u5c31\u662f\u5bf9\u57fa\u7840\u7ec4\u4ef6\u5305\u88f9\u5e76\u589e\u5f3a\u4e1a\u52a1\u80fd\u529b\u8fd9\u4e00\u5c42\u3002"),Object(l.b)("h3",{id:"\u89e3\u6784"},"\u89e3\u6784"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// Dirty\nconst splitLocale = locale.split('-');\nconst language = splitLocale[0];\nconst country = splitLocale[1];\n\n// Clean\nconst [language, country] = locale.split('-');\n")),Object(l.b)("p",null,"ES6 \u65b0\u589e\u7684\u8bed\u6cd5\u53ef\u4ee5\u63d0\u5347\u4e0d\u5c11\u4ee3\u7801\u53ef\u8bfb\u6027\uff0c\u9700\u8981\u523b\u610f\u8bad\u7ec3\u53bb\u57f9\u517b\u8fd9\u4e2a\u4e60\u60ef\u3002"),Object(l.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(l.b)("p",null,"\u672c\u5468\u7cbe\u8bfb\u5df2\u7ecf\u878d\u4e8e\u5185\u5bb9\u6982\u8981\u4e2d ^_^\u3002\u6700\u540e\u63a8\u8350\u5728 typescript \u4e2d\u5f00\u542f ",Object(l.b)("inlineCode",{parentName:"p"},"strict")," \u6a21\u5f0f\uff0c\u5f3a\u5236\u4f7f\u7528\u826f\u597d\u7684\u5f00\u53d1\u4e60\u60ef\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// Bad\nonChange(value => console.log(value.name))\n// Dirty\nonChange((value) => {\n  if (!value) {\n    value = {}\n  }\n  console.log(value.name)\n})\n// Clean\nonChange((value = {}) => console.log(value.name))\n// Clean\nonChange(value => console.log(value?.name))\n")),Object(l.b)("p",null,"\u4e0d\u8981\u4fe1\u4efb\u4efb\u4f55\u56de\u8c03\u51fd\u6570\u7ed9\u4f60\u7684\u53d8\u91cf\uff0c\u5b83\u4eec\u968f\u65f6\u53ef\u80fd\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u4f7f\u7528\u521d\u59cb\u503c\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u4f46\u6709\u7684\u65f6\u5019\u521d\u59cb\u503c\u6ca1\u4ec0\u4e48\u610f\u4e49\uff0c\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"?.")," \u8bed\u6cd5\u53ef\u4ee5\u5b89\u5168\u7684\u8bbf\u95ee\u5c5e\u6027\uff0c\u662f\u65f6\u5019\u629b\u5f03 ",Object(l.b)("inlineCode",{parentName:"p"},"_.get")," \u4e86\u3002"),Object(l.b)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),Object(l.b)("p",null,"\u6211\u8981\u56de\u53bb\u91cd\u6784\u4ee3\u7801\u4e86\uff0c\u4f60\u5462\uff1f"),Object(l.b)("h3",{id:"\u66f4\u591a\u8ba8\u8bba"},"\u66f4\u591a\u8ba8\u8bba"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/46"},"\u7cbe\u8bfb\u300aReact \u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b \xb7 Issue #46 \xb7 dt-fe/weekly"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(l.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}p.isMDXComponent=!0},385:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,O=s["".concat(c,".").concat(d)]||s[d]||u[d]||l;return t?r.a.createElement(O,o(o({ref:n},b),{},{components:t})):r.a.createElement(O,o({ref:n},b))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<l;b++)c[b]=t[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);