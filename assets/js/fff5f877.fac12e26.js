(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{380:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),l=n(7),c=(n(0),n(385)),a={title:"60. \u7cbe\u8bfb\u300a\u5982\u4f55\u5728 nodejs \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u300b",id:"060",hide_title:!0},b={unversionedId:"060",id:"060",isDocsHomePage:!1,title:"60. \u7cbe\u8bfb\u300a\u5982\u4f55\u5728 nodejs \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/060.\u7cbe\u8bfb\u300a\u5982\u4f55\u5728 nodejs \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u300b.md",slug:"/060",permalink:"/weekly/060",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/060.\u7cbe\u8bfb\u300a\u5982\u4f55\u5728 nodejs \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"59. \u7cbe\u8bfb\u300a\u5982\u4f55\u5229\u7528 Nodejs \u76d1\u542c\u6587\u4ef6\u5939\u300b",permalink:"/weekly/059"},next:{title:"61. \u7cbe\u8bfb\u300aReact \u516b\u79cd\u6761\u4ef6\u6e32\u67d3\u300b",permalink:"/weekly/061"}},o=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[{value:"\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012",id:"\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012",children:[]},{value:"\u4f7f\u7528 .env \u6587\u4ef6",id:"\u4f7f\u7528-env-\u6587\u4ef6",children:[]},{value:"VSCode \u542f\u52a8\u914d\u7f6e",id:"vscode-\u542f\u52a8\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528 Npm Scripts",id:"\u4f7f\u7528-npm-scripts",children:[]}]},{value:"\u751f\u4ea7\u73af\u5883\u7684\u73af\u5883\u53d8\u91cf",id:"\u751f\u4ea7\u73af\u5883\u7684\u73af\u5883\u53d8\u91cf",children:[]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"\u79c1\u6709\u90e8\u7f72",id:"\u79c1\u6709\u90e8\u7f72",children:[]},{value:"\u6301\u4e45\u5316\u914d\u7f6e\u670d\u52a1",id:"\u6301\u4e45\u5316\u914d\u7f6e\u670d\u52a1",children:[]},{value:"\u52a0\u5bc6\u670d\u52a1",id:"\u52a0\u5bc6\u670d\u52a1",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]},{value:"5 \u66f4\u591a\u8ba8\u8bba",id:"5-\u66f4\u591a\u8ba8\u8bba",children:[]}],i={toc:o};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(c.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://medium.freecodecamp.org/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a"},"\u5982\u4f55\u5728 nodejs \u4f7f\u7528\u73af\u5883\u53d8\u91cf"),"\u3002"),Object(c.b)("p",null,"\u4ecb\u7ecd\u4e86\u5f00\u53d1\u4e0e\u751f\u4ea7\u73af\u5883\u5982\u4f55\u7ba1\u7406\u73af\u5883\u53d8\u91cf\u3002"),Object(c.b)("p",null,"\u8fd9\u91cc\u73af\u5883\u53d8\u91cf\u6307\u7684\u662f\u6570\u636e\u5e93\u5bc6\u7801\u7b49\u91cd\u8981\u6570\u636e\uff0c\u800c\u4e0d\u662f\u6307\u666e\u901a\u53d8\u91cf\u4f20\u53c2\u3002"),Object(c.b)("h2",{id:"2-\u6982\u8ff0"},"2 \u6982\u8ff0"),Object(c.b)("p",null,"\u73af\u5883\u53d8\u91cf\u5386\u53f2\u60a0\u4e45\uff0c\u5728\u8fd0\u884c\u7b2c\u4e00\u884c JAVA \u4ee3\u7801\u4e4b\u524d\uff0c\u4f60\u5c31\u5f97\u5c06\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u597d\u3002"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408184851.png",alt:null})),Object(c.b)("p",null,"\u53ef\u95ee\u9898\u662f\uff0c\u7cfb\u7edf\u53d8\u91cf\u5e76\u4e0d\u6613\u7528\uff0c\u6bd4\u5982\u7ed3\u5c3e\u662f\u5426\u8981\u4f7f\u7528\u5206\u53f7\uff0cJAVA_HOME \u4e0e PATH \u5728\u54ea\u4e9b\u7a0b\u5e8f\u4e2d\u529f\u80fd\u76f8\u540c\uff1f\u800c\u4e14\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u7ed1\u5b9a\uff0c\u5728\u64cd\u4f5c\u7cfb\u7edf\u7ea7\u522b\u8bbe\u7f6e\u7684\u53d8\u91cf\uff0c\u7ed9 JAVA \u7ea7\u522b\u7684\u7a0b\u5e8f\u7528\u8fd8\u597d\uff0c\u4f46\u7528\u6765\u5b58\u6570\u636e\u5e93\u5bc6\u7801\u5c31\u4e0d\u5408\u9002\u4e86\u3002"),Object(c.b)("p",null,"\u5728 Node \u4e2d\uff0c\u6211\u4eec\u600e\u6837\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u5462\uff1f\u4f5c\u8005\u7ed9\u51fa\u4e86\u5982\u4e0b\u7684\u5efa\u8bae\uff1a"),Object(c.b)("h3",{id:"\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012"},"\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"PORT=65534 node bin/www\n")),Object(c.b)("p",null,"\u8fd9\u662f\u6700\u57fa\u672c\u3001\u6700\u5e38\u7528\u7684\u65b9\u5f0f\uff0c\u53ef\u662f\u5f53\u53d8\u91cf\u6570\u91cf\u8fc7\u591a\uff0c\u4e0d\u514d\u89c9\u5f97\u5f88\u5d29\u6e83\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'PORT=65534 DB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:19373/?ssl=true&replicaSet=globaldb" SECRET_KEY=b6264fca-8adf-457f-a94f-5a4b0d1ca2b9  node bin/www\n')),Object(c.b)("p",null,"\u4f5c\u8005\u63d0\u5230\uff0c\u8fd9\u79cd\u4ee3\u7801\u6ca1\u6709\u62d3\u5c55\u6027\u3002\u4f5c\u8005\u8ba4\u4e3a\uff0c\u5bf9\u5de5\u7a0b\u5e08\u6765\u8bf4\uff0c\u53ef\u62d3\u5c55\u6027\u751a\u81f3\u6bd4\u80fd\u6b63\u786e\u8fd0\u884c\u66f4\u4e3a\u91cd\u8981\u3002"),Object(c.b)("h3",{id:"\u4f7f\u7528-env-\u6587\u4ef6"},"\u4f7f\u7528 .env \u6587\u4ef6"),Object(c.b)("p",null,"\u5f88\u663e\u7136\uff0c\u547d\u4ee4\u884c\u5199\u4e0d\u4e0b\u4e86\u5c31\u5199\u5230\u6587\u4ef6\u91cc\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'PORT=65534\nDB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb"\nSECRET_KEY="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"\n')),Object(c.b)("p",null,"\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"dotenv")," \u8fd9\u4e2a npm \u5305\u53ef\u4ee5\u8bfb\u53d6 .env \u6587\u4ef6\u7684\u914d\u7f6e\u5230 Nodejs \u7a0b\u5e8f\u4e2d\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm install dotenv --save\n")),Object(c.b)("p",null,"\u5b89\u88c5\u540e\uff0c\u76f4\u63a5\u8c03\u7528\u5b83\u89e3\u6790\uff0c\u5c31\u53ef\u4ee5\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u62ff\u5230 .env \u6587\u4ef6\u7684\u914d\u7f6e\u4fe1\u606f\u4e86\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'require("dotenv").config();\nvar MongoClient = require("mongodb").MongoClient;\n\n// Reference .env vars off of the process.env object\nMongoClient.connect(\n  process.env.DB_CONN,\n  function(err, db) {\n    if (!err) {\n      console.log("We are connected");\n    }\n  }\n);\n')),Object(c.b)("p",null,"\u8fd9\u6709\u4e2a\u95ee\u9898\uff0c\u4e0d\u8981\u5c06\u914d\u7f6e\u6587\u4ef6\u53d1\u9001\u5230 Git \u4ed3\u5e93\uff0c\u53ef\u80fd\u4f1a\u6cc4\u6f0f\u9690\u79c1\u6570\u636e\u3002\u7136\u800c VSCode \u5e2e\u4f60\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff08\u4ec0\u4e48\uff0c\u4f60\u4e0d\u7528 VSCode\uff1f\uff09"),Object(c.b)("h3",{id:"vscode-\u542f\u52a8\u914d\u7f6e"},"VSCode \u542f\u52a8\u914d\u7f6e"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408184909.png",alt:null})),Object(c.b)("p",null,"VSCode \u53ef\u4ee5\u914d\u7f6e Node \u542f\u52a8\u914d\u7f6e\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408184925.png",alt:null})),Object(c.b)("p",null,"\u4e3a\u4e86\u548c .env \u6587\u4ef6\u6253\u901a\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u914d\u7f6e\u91cc\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"envFile")," \u5c5e\u6027\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "envFile": "${workspaceFolder}/.env"\n}\n')),Object(c.b)("p",null,"\u7a0b\u5e8f\u4e2d\u4f9d\u7136\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"dotenv")," \u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u3002\u8fd9\u4e48\u505a\u5c06\u914d\u7f6e\u4fdd\u7559\u5728 VSCode \u4e2d\uff0c\u800c\u4e0d\u662f\u4ee3\u7801\u4e2d\uff0c\u4e0d\u7528\u518d\u62c5\u5fc3\u4e0d\u5c0f\u5fc3\u4e0a\u4f20\u4e86\u914d\u7f6e\u6587\u4ef6\u5566\uff01"),Object(c.b)("h3",{id:"\u4f7f\u7528-npm-scripts"},"\u4f7f\u7528 Npm Scripts"),Object(c.b)("p",null,"\u4f5c\u8005\u63a8\u8350\u4e86\u4e00\u4e2a\u826f\u597d\u7684\u4e60\u60ef\uff1a\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"npm start")," \u8fd0\u884c\u9879\u76ee\uff0c\u800c\u4e0d\u662f\u66b4\u9732\u51fa Node \u547d\u4ee4\u3002\u90a3\u4e48\u9996\u5148\u5728 VSCode ",Object(c.b)("inlineCode",{parentName:"p"},"launch.json")," \u4e2d\u914d\u7f6e Npm \u6a21\u5f0f\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408184941.png",alt:null})),Object(c.b)("p",null,"\u8bb0\u4f4f\uff0c\u9700\u8981\u7ed9 Node \u811a\u672c\u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"p"},"--inspect")," \u53c2\u6570\uff0c\u624d\u80fd\u89e6\u53d1 VSCode debugger \u7684\u94a9\u5b50\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408184957.png",alt:null})),Object(c.b)("p",null,"\u8fd9\u6837\u4e00\u6765\uff0c\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"npm start")," \u5c31\u53ef\u4ee5\u542f\u52a8 Node\uff0c\u5e76\u8bfb\u53d6\u914d\u7f6e\u5728 VSCode \u7684\u73af\u5883\u53d8\u91cf\u3002"),Object(c.b)("h2",{id:"\u751f\u4ea7\u73af\u5883\u7684\u73af\u5883\u53d8\u91cf"},"\u751f\u4ea7\u73af\u5883\u7684\u73af\u5883\u53d8\u91cf"),Object(c.b)("p",null,"\u4e0a\u9762\u4ecb\u7ecd\u4e86\u672c\u5730\u5f00\u53d1\u5982\u4f55\u4f7f\u7528\u73af\u5883\u53d8\u91cf\uff0c\u4f46\u5728\u751f\u4ea7\u73af\u5883\uff0c\u73af\u5883\u53d8\u91cf\u5fc5\u987b\u5f97\u6362\u4e2a\u65b9\u5f0f\u7ba1\u7406\u3002"),Object(c.b)("p",null,"\u4e0d\u77e5\u9053\u4f5c\u8005\u4e0e\u5fae\u8f6f\u662f\u4ec0\u4e48\u5173\u7cfb\uff0c\u8fd9\u5757\u63a8\u8350\u4e86\u5fae\u8f6f\u7684 ",Object(c.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/webapp/config/appsettings?view=azure-cli-latest&wt.mc_id=dotenv-medium-buhollan"},"Azure")," \u7ba1\u7406\u73af\u5883\u53d8\u91cf\u3002"),Object(c.b)("p",null,"\u4e3b\u8981\u601d\u8def\u662f\u901a\u8fc7\u4e00\u4e2a\u4e0d\u8d5a\u5dee\u4ef7\u7684\u4e2d\u95f4\u5546\u63d0\u4f9b\u73af\u5883\u53d8\u91cf\u7ba1\u7406\u670d\u52a1\u3002\u901a\u8fc7 Azure CLI \u542f\u52a8\u4f60\u7684 Node \u9879\u76ee\uff0c\u5c31\u53ef\u4ee5\u4ece\u4e91\u670d\u52a1\u5e73\u53f0\u62ff\u5230\u73af\u5883\u53d8\u91cf\u4fe1\u606f\u3002"),Object(c.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(c.b)("p",null,"\u73af\u5883\u53d8\u91cf\u7ba1\u7406\u662f\u975e\u5e38\u91cd\u8981\u7684\u95ee\u9898\uff0c\u4ee5\u524d\u8fd8\u770b\u5230\u5c06\u516c\u53f8\u6570\u636e\u5e93\u5bc6\u7801\u63d0\u4ea4\u5230 Github \u7684\u4f8b\u5b50\uff0c\u53cd\u9762\u6559\u6750\u975e\u5e38\u591a\u3002"),Object(c.b)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u8bb8\u591a\u672c\u5730\u5f00\u53d1\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u7684\u65b9\u5f0f\uff0c\u7b14\u8005\u8865\u5145\u4e00\u4e0b\u751f\u4ea7\u73af\u5883\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u7684\u7ecf\u9a8c\u3002"),Object(c.b)("h3",{id:"\u79c1\u6709\u90e8\u7f72"},"\u79c1\u6709\u90e8\u7f72"),Object(c.b)("p",null,"\u5982\u679c\u4f60\u5728\u4e00\u4e2a\u9ad8\u81ea\u52a8\u5316\u8fd0\u7ef4\u6c34\u5e73\u7684\u516c\u53f8\uff0c\u8fd9\u4e2a\u95ee\u9898\u5df2\u7ecf\u88ab\u79c1\u6709 Git + \u79c1\u6709\u4e91\u670d\u52a1\u5668\u5929\u7136\u89e3\u51b3\u4e86\u3002"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408185015.png",alt:null})),Object(c.b)("p",null,"\u662f\u7684\uff0c\u90e8\u7f72\u79c1\u6709 Git\uff0c\u628a\u6570\u636e\u5e93\u5bc6\u7801\u63d0\u4ea4\u5230 Git \u4ed3\u5e93\u624d\u662f\u6700\u5b8c\u7f8e\u7684\u65b9\u6848\uff01"),Object(c.b)("h3",{id:"\u6301\u4e45\u5316\u914d\u7f6e\u670d\u52a1"},"\u6301\u4e45\u5316\u914d\u7f6e\u670d\u52a1"),Object(c.b)("p",null,"\u901a\u8fc7\u81ea\u5efa\uff0c\u6216\u8005\u5f00\u6e90\u7684 ",Object(c.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/webapp/config/appsettings?view=azure-cli-latest&wt.mc_id=dotenv-medium-buhollan"},"Azure")," \u6301\u4e45\u5316\u914d\u7f6e\u670d\u52a1\u5b58\u50a8\u73af\u5883\u53d8\u91cf\uff0c\u5728\u670d\u52a1\u5668\u5229\u7528 SDK \u83b7\u53d6\u5b83\u3002"),Object(c.b)("p",null,"\u4e00\u822c\u4e91\u670d\u52a1\u5546\u90fd\u4f1a\u6253\u5305\u8fd9\u9879\u670d\u52a1\uff0c\u56e0\u4e3a\u53ea\u6709\u670d\u52a1\u5668\u548c\u6301\u4e45\u5316\u914d\u7f6e\u670d\u52a1\u90fd\u7531\u4e00\u4e2a\u4f9b\u5e94\u5546\u63d0\u4f9b\uff0c\u4f9b\u5e94\u5546\u624d\u80fd\u5c06\u6301\u4e45\u5316\u914d\u7f6e\u4e0e\u670d\u52a1\u5668\u6743\u9650\u5f62\u6210\u5173\u8054\uff0c\u8ba9\u7b2c\u4e09\u65b9\u670d\u52a1\u5668\u5373\u4fbf\u62ff\u5230 Token \u4e5f\u65e0\u6cd5\u8bbf\u95ee\u914d\u7f6e\u3002"),Object(c.b)("h3",{id:"\u52a0\u5bc6\u670d\u52a1"},"\u52a0\u5bc6\u670d\u52a1"),Object(c.b)("p",null,"\u5982\u679c\u5b89\u5168\u7ea7\u522b\u7279\u522b\u9ad8\uff0c\u5185\u90e8 Git \u90fd\u4e0d\u5141\u8bb8\u63d0\u4ea4\uff0c\u53c8\u8981\u9632\u6b62\u7b2c\u4e09\u65b9\uff08\u6bd4\u5982\u67d0\u5bbd\u5e26\u8fd0\u8425\u5546\uff09\u62e6\u622a\u5230\u4fe1\u606f\uff0c\u5c31\u8981\u4f7f\u7528\u52a0\u5bc6\u670d\u52a1\u4e86\u3002"),Object(c.b)("p",null,"\u6d41\u7a0b\u4e00\u822c\u662f\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5728\u52a0\u5bc6\u5e73\u53f0\u6ce8\u518c\uff0c\u62ff\u5230\u5bc6\u94a5\u3002"),Object(c.b)("li",{parentName:"ol"},"\u5728\u52a0\u5bc6\u5e73\u53f0\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u52a0\u5bc6\u5e73\u53f0\u4f1a\u5bf9\u5185\u5bb9\u8fdb\u884c\u52a0\u5bc6\u3002"),Object(c.b)("li",{parentName:"ol"},"\u5229\u7528 Node SDK \u83b7\u53d6\u5230\u52a0\u5bc6\u5e73\u53f0\u8f93\u51fa\u7684\u5bc6\u6587\u3002"),Object(c.b)("li",{parentName:"ol"},"\u5229\u7528 SDK \u548c\u5bc6\u94a5\u89e3\u5bc6\u6210\u660e\u6587\u3002")),Object(c.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(c.b)("p",null,"\u5bf9\u5f85\u5728\u57fa\u7840\u8bbe\u65bd\u5b8c\u5907\u516c\u53f8\u7684\u540c\u5b66\uff0c\u53ef\u80fd\u4e0d\u9700\u8981\u5173\u5fc3\u73af\u5883\u53d8\u91cf\u5b89\u5168\u6027\u95ee\u9898\u3002\u5bf9\u4e8e\u81ea\u5df1\u642d\u5efa\u535a\u5ba2\uff0c\u6216\u8005\u4f7f\u7528\u7b2c\u4e09\u65b9\u670d\u52a1\u5668\u7684\u540c\u5b66\uff0c\u8fd9\u7bc7\u6587\u7ae0\u544a\u8bc9\u6211\u4eec\u4e09\u4e2a\u6ce8\u610f\u70b9\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u4e0d\u8981\u5c06\u91cd\u8981\u73af\u5883\u53d8\u91cf\u63d0\u4ea4\u5230\u516c\u5f00\u7684 Git \u4ed3\u5e93\u3002"),Object(c.b)("li",{parentName:"ol"},"\u672c\u5730\u901a\u8fc7 VSCode \u8c03\u8bd5\u73af\u5883\u53d8\u91cf\u65e2\u65b9\u4fbf\u53c8\u5b89\u5168\u3002"),Object(c.b)("li",{parentName:"ol"},"\u751f\u4ea7\u73af\u5883\u901a\u8fc7\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u670d\u52a1\u62ff\u5230\u73af\u5883\u53d8\u91cf\u3002")),Object(c.b)("h2",{id:"5-\u66f4\u591a\u8ba8\u8bba"},"5 \u66f4\u591a\u8ba8\u8bba"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/89"},"\u7cbe\u8bfb\u300a\u5982\u4f55\u5728 nodejs \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u300b \xb7 Issue #89 \xb7 dt-fe/weekly"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(c.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002")))}p.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),l=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),p=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(a,".").concat(s)]||d[s]||u[s]||c;return n?l.a.createElement(m,b(b({ref:t},i),{},{components:n})):l.a.createElement(m,b({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,a[1]=b;for(var i=2;i<c;i++)a[i]=n[i];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);