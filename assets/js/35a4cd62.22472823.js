(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(467)),l={title:"139. \u7cbe\u8bfb\u300a\u624b\u5199 JSON Parser\u300b",id:"139",hide_title:!0},b={unversionedId:"139",id:"139",isDocsHomePage:!1,title:"139. \u7cbe\u8bfb\u300a\u624b\u5199 JSON Parser\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/139.\u7cbe\u8bfb\u300a\u624b\u5199 JSON Parser\u300b.md",slug:"/139",permalink:"/weekly/139",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/139.\u7cbe\u8bfb\u300a\u624b\u5199 JSON Parser\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1618193299,formattedLastUpdatedAt:"4/12/2021",sidebar:"weekly",previous:{title:"138. \u7cbe\u8bfb\u300a\u7cbe\u901a console.log\u300b",permalink:"/weekly/138"},next:{title:"140. \u7cbe\u8bfb\u300a\u7ed3\u5408 React \u4f7f\u7528\u539f\u751f Drag Drop API\u300b",permalink:"/weekly/140"}},p=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8ff0 &amp; \u7cbe\u8bfb",id:"2-\u6982\u8ff0--\u7cbe\u8bfb",children:[{value:"\u5b9e\u73b0 Parser",id:"\u5b9e\u73b0-parser",children:[]},{value:"\u5904\u7406\u5f02\u5e38\u8f93\u5165",id:"\u5904\u7406\u5f02\u5e38\u8f93\u5165",children:[]}]},{value:"3 \u603b\u7ed3",id:"3-\u603b\u7ed3",children:[]}],c={toc:p};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"JSON.parse")," \u662f\u6d4f\u89c8\u5668\u5185\u7f6e\u7684 API\uff0c\u4f46\u5982\u679c\u9762\u8bd5\u5b98\u8ba9\u4f60\u5b9e\u73b0\u4e00\u4e2a\u600e\u4e48\u529e\uff1f\u597d\u5728\u6709\u4eba\u5df2\u7ecf\u5e2e\u5fd9\u505a\u4e86\u8fd9\u4ef6\u4e8b\uff0c\u672c\u5468\u6211\u4eec\u4e00\u8d77\u7cbe\u8bfb\u8fd9\u7bc7 ",Object(i.b)("a",{parentName:"p",href:"https://lihautan.com/json-parser-with-javascript/"},"JSON Parser with Javascript")," \u6587\u7ae0\u5427\uff0c\u518d\u6e29\u4e60\u4e00\u904d\u5927\u5b66\u65f6\u7f16\u8bd1\u539f\u7406\u76f8\u5173\u77e5\u8bc6\u3002"),Object(i.b)("h2",{id:"2-\u6982\u8ff0--\u7cbe\u8bfb"},"2 \u6982\u8ff0 & \u7cbe\u8bfb"),Object(i.b)("p",null,"\u8981\u89e3\u6790 JSON \u9996\u5148\u8981\u7406\u89e3\u8bed\u6cd5\u6982\u5ff5\uff0c\u4e4b\u524d\u7684 ",Object(i.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/blob/v2/066.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u8bed\u6cd5\u5206\u6790\u300b")," \u7cfb\u5217\u4e5f\u6709\u4ecb\u7ecd\u8fc7\uff0c\u4e0d\u8fc7\u672c\u6587\u4ecb\u7ecd\u7684\u66f4\u5f62\u8c61\uff0c\u770b\u4e0b\u9762\u8fd9\u4e2a\u8bed\u6cd5\u56fe\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210409192704.png",alt:null})),Object(i.b)("p",null,"\u8fd9\u662f\u5173\u4e8e Object \u7c7b\u578b\u7684\u8bed\u6cd5\u63cf\u8ff0\u56fe\uff0c\u4ece\u5de6\u5411\u53f3\u770b\uff0c\u6839\u636e\u7bad\u5934\u6307\u5411\u53ea\u8981\u80fd\u8d70\u51fa\u8fd9\u4e2a\u8ff7\u5bab\u5c31\u5c5e\u4e8e\u6b63\u786e\u8bed\u6cd5\u3002"),Object(i.b)("p",null,"\u6bd4\u5982\u7b2c\u4e00\u884c ",Object(i.b)("inlineCode",{parentName:"p"},"{")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"whitespace")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"}")," \u8868\u793a ",Object(i.b)("inlineCode",{parentName:"p"},"{ }")," \u5c5e\u4e8e\u5408\u6cd5\u7684 JSON \u8bed\u6cd5\u3002"),Object(i.b)("p",null,"\u518d\u6bd4\u5982\u89c2\u5bdf\u5411\u4e0b\u7684\u4e00\u6761\u6700\u957f\u8def\u7ebf\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"{")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"whitespace")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"string")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"whitespace")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},":")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"value")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"}")," \u8868\u793a ",Object(i.b)("inlineCode",{parentName:"p"},"{ string : value }")," \u5c5e\u4e8e\u5408\u6cd5\u7684 JSON \u8bed\u6cd5\u3002"),Object(i.b)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u95ee\uff0c\u53cc\u5f15\u53f7\u53bb\u54ea\u513f\u4e86\uff1f\u8fd9\u5c31\u662f\u8bed\u6cd5\u6811\u6700\u6838\u5fc3\u7684\u6982\u5ff5\u4e86\uff0c\u8fd9\u5f20\u56fe\u662f\u5173\u4e8e Object \u7c7b\u578b\u7684 ",Object(i.b)("strong",{parentName:"p"},"\u4ea7\u751f\u5f0f"),"\uff0c\u540c\u7406\u8fd8\u6709 string\u3001value \u7684\u4ea7\u751f\u5f0f\uff0c\u4ea7\u751f\u5f0f\u4e2d\u53ef\u4ee5\u5d4c\u5957\u5176\u4ed6\u4ea7\u751f\u5f0f\uff0c\u751a\u81f3\u5f62\u6210\u73af\u8def\uff0c\u4ee5\u6b64\u62e5\u6709\u63cf\u8ff0\u7eb7\u7e41\u591a\u53d8\u8bed\u6cd5\u7684\u80fd\u529b\u3002"),Object(i.b)("p",null,"\u6700\u540e\u6211\u4eec\u518d\u770b\u4e00\u4e2a\u73af\u8def\uff0c\u5373 ",Object(i.b)("inlineCode",{parentName:"p"},"{")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"whitespace")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"string")," ... ",Object(i.b)("inlineCode",{parentName:"p"},",")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"whitespace")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"string")," ... ",Object(i.b)("inlineCode",{parentName:"p"},",")," ... ",Object(i.b)("inlineCode",{parentName:"p"},"}"),"\uff0c\u6211\u4eec\u53d1\u73b0\uff0c\u53ea\u8981\u4e0d\u8d70\u56de\u5934\u8def\uff0c\u8fd9\u6761\u8def\u662f\u53ef\u4ee5\u4e00\u76f4 \u201c\u7ed5\u5708\u201d \u4e0b\u53bb\u7684\uff0c\u56e0\u6b64 Object \u7c7b\u578b\u62e5\u6709\u4e86\u4efb\u610f\u6570\u91cf\u5b50\u5b57\u6bb5\u7684\u80fd\u529b\uff0c\u53ea\u662f\u6bcf\u5f62\u6210\u4e00\u4e2a\u5b50\u5b57\u6bb5\uff0c\u5fc5\u987b\u7ecf\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},",")," \u53f7\u5206\u5272\u3002"),Object(i.b)("h3",{id:"\u5b9e\u73b0-parser"},"\u5b9e\u73b0 Parser"),Object(i.b)("p",null,"\u9996\u5148\u5b9e\u73b0\u4e00\u4e2a\u57fa\u672c\u7ed3\u6784\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function fakeParseJSON(str) {\n  let i = 0;\n  // TODO\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"i")," \u8868\u793a\u8bbf\u95ee\u5b57\u7b26\u7684\u4e0b\u6807\uff0c\u5f53 ",Object(i.b)("inlineCode",{parentName:"p"},"i")," \u8d70\u5230\u5b57\u7b26\u4e32\u7ed3\u5c3e\u8868\u793a\u904d\u5386\u7ed3\u675f\u3002"),Object(i.b)("p",null,"\u7136\u540e\u662f\u4e0b\u4e00\u6b65\uff0c\u7528\u51e0\u4e2a\u51fd\u6570\u63cf\u8ff0\u89e3\u6790\u8bed\u6cd5\u7684\u8fc7\u7a0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function fakeParseJSON(str) {\n  let i = 0;\n  function parseObject() {\n    if (str[i] === '{') {\n      i++;\n      skipWhitespace();\n\n      // if it is not '}',\n      // we take the path of string -> whitespace -> ':' -> value -> ...\n      while (str[i] !== '}') {\n        const key = parseString();\n        skipWhitespace();\n        eatColon();\n        const value = parseValue();\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,"\u5176\u4e2d ",Object(i.b)("inlineCode",{parentName:"p"},"skipWhitespace")," \u8868\u793a\u5339\u914d\u5e76\u8df3\u8fc7\u7a7a\u683c\uff0c\u6240\u8c13\u5339\u914d\u610f\u5473\u7740\u5339\u914d\u6210\u529f\uff0c\u6b64\u65f6 ",Object(i.b)("inlineCode",{parentName:"p"},"i")," \u4e0b\u6807\u53ef\u4ee5\u7ee7\u7eed\u540e\u79fb\uff0c\u5426\u5219\u5339\u914d\u5931\u8d25\u3002\u4e0b\u4e00\u6b65\u5219\u5224\u65ad\u5982\u679c ",Object(i.b)("inlineCode",{parentName:"p"},"i")," \u4e0d\u662f\u7ed3\u675f\u6807\u5fd7 ",Object(i.b)("inlineCode",{parentName:"p"},"}"),"\uff0c\u5219\u6309\u7167 ",Object(i.b)("inlineCode",{parentName:"p"},"parseString")," \u5339\u914d\u5b57\u7b26\u4e32 \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"skipWhitespace")," \u8df3\u8fc7\u7a7a\u683c \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"eatColon")," \u5403\u6389\u5192\u53f7 \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"parseValue")," \u5339\u914d\u503c\uff0c\u8fd9\u4e2a\u94fe\u8def\u5faa\u73af\u3002\u5176\u4e2d\u5403\u6389\u5192\u53f7\u8868\u793a \u201c\u5339\u914d\u5192\u53f7\u4f46\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u7ed3\u679c\uff0c\u6240\u4ee5\u5c31\u50cf\u5403\u6389\u4e86\u4e00\u6837\u201d\uff0c\u5403\u8fd9\u4e2a\u52a8\u4f5c\u8fd8\u53ef\u4ee5\u7528\u5728\u5176\u4ed6\u573a\u666f\uff0c\u6bd4\u5982\u5403\u6389\u5c3e\u5206\u53f7\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u770b\u5230\u8fd9\u513f\u7684\u5c0f\u4f19\u4f34\uff0c\u7b14\u8005\u8981\u53cb\u60c5\u63d0\u793a\u4e00\u4e0b\uff0c\u539f\u6587\u7684\u601d\u8def\u662f\u4e00\u79cd\u5b9a\u5236\u8bed\u6cd5\u89e3\u6790\u601d\u8def\uff0c\u65e0\u8bba\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"eatColon")," \u8fd8\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"parseValue")," \u90fd\u4ec5\u5177\u5907\u89e3\u6790 JSON \u7684\u901a\u7528\u6027\uff0c\u4f46\u4e0d\u5177\u5907\u89e3\u6790\u4efb\u610f\u8bed\u6cd5\u7684\u901a\u7528\u6027\u3002\u5982\u679c\u4f60\u60f3\u505a\u4e00\u4e2a\u5177\u5907\u89e3\u6790\u4efb\u4f55\u901a\u7528\u8bed\u6cd5\u7684\u89e3\u6790\u5668\uff0c\u8bfb\u5165\u7684\u5185\u5bb9\u5e94\u8be5\u662f\u8bed\u6cd5\u63cf\u8ff0\uff0c\u5904\u7406\u65b9\u5f0f\u5fc5\u987b\u66f4\u52a0\u901a\u7528\uff0c\u5982\u679c\u611f\u5174\u8da3\u53ef\u4ee5\u9605\u8bfb ",Object(i.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/blob/v2/066.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u8bed\u6cd5\u5206\u6790\u300b")," \u7cfb\u5217\u6587\u7ae0\u4e86\u89e3\u66f4\u591a\u3002")),Object(i.b)("p",null,"\u7531\u4e8e Object \u7b2c\u4e00\u4e2a\u5143\u7d20\u524d\u9762\u4e0d\u5141\u8bb8\u52a0\u9017\u53f7\uff0c\u56e0\u6b64\u53ef\u4ee5\u5229\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"initial")," \u505a\u4e00\u4e2a\u521d\u59cb\u5316\u5224\u5b9a\uff0c\u5728\u521d\u59cb\u65f6\u673a\u4e0d\u4f1a\u5403\u6389\u9017\u53f7\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function fakeParseJSON(str) {\n  let i = 0;\n  function parseObject() {\n    if (str[i] === '{') {\n      i++;\n      skipWhitespace();\n\n      let initial = true;\n      // if it is not '}',\n      // we take the path of string -> whitespace -> ':' -> value -> ...\n      while (str[i] !== '}') {\n        if (!initial) {\n          eatComma();\n          skipWhitespace();\n        }\n        const key = parseString();\n        skipWhitespace();\n        eatColon();\n        const value = parseValue();\n        initial = false;\n      }\n      // move to the next character of '}'\n      i++;\n    }\n  }\n}\n")),Object(i.b)("p",null,"\u90a3\u4e48\u5f53\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20\u524d\u9762\u5b58\u5728\u9017\u53f7\u65f6\uff0c\u7531\u4e8e\u6ca1\u6709 \u201c\u5403\u6389\u9017\u53f7\u201d \u8fd9\u4e2a\u529f\u80fd\uff0c\u6240\u4ee5\u8bfb\u5230\u9017\u53f7\u4f1a\u62a5\u9519\uff0c\u8bed\u6cd5\u89e3\u6790\u63d0\u524d\u7ed3\u675f\u3002"),Object(i.b)("p",null,"\u5403\u9017\u53f7\u548c\u5403\u5192\u53f7\u7684\u4ee3\u7801\u90fd\u975e\u5e38\u7b80\u5355\uff0c\u5373\u5224\u65ad\u5f53\u524d\u5b57\u7b26\u4e32\u5fc5\u987b\u662f \u201c\u8981\u5403\u7684\u90a3\u4e2a\u5143\u7d20\u201d\uff0c\u5e76\u4e14\u5728\u5403\u6389\u540e\u5c06 ",Object(i.b)("inlineCode",{parentName:"p"},"i")," \u4e0b\u6807\u81ea\u589e 1\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function fakeParseJSON(str) {\n  // ...\n  function eatComma() {\n    if (str[i] !== ',') {\n      throw new Error('Expected \",\".');\n    }\n    i++;\n  }\n\n  function eatColon() {\n    if (str[i] !== ':') {\n      throw new Error('Expected \":\".');\n    }\n    i++;\n  }\n}\n")),Object(i.b)("p",null,"\u5728\u6709\u4e86\u57fa\u672c\u5224\u5b9a\u529f\u80fd\u540e\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"fakeParseJSON")," \u9700\u8981\u8fd4\u56de Object\uff0c\u56e0\u6b64\u6211\u4eec\u53ea\u9700\u5728\u6bcf\u4e2a\u5faa\u73af\u4e2d\u5bf9 Object \u8d4b\u503c\uff0c\u6700\u540e\u4e00\u5e76 return \u5373\u53ef\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function fakeParseJSON(str) {\n  let i = 0;\n  function parseObject() {\n    if (str[i] === '{') {\n      i++;\n      skipWhitespace();\n\n      const result = {};\n\n      let initial = true;\n      // if it is not '}',\n      // we take the path of string -> whitespace -> ':' -> value -> ...\n      while (str[i] !== '}') {\n        if (!initial) {\n          eatComma();\n          skipWhitespace();\n        }\n        const key = parseString();\n        skipWhitespace();\n        eatColon();\n        const value = parseValue();\n        result[key] = value;\n        initial = false;\n      }\n      // move to the next character of '}'\n      i++;\n\n      return result;\n    }\n  }\n}\n")),Object(i.b)("p",null,"\u89e3\u6790 Object \u7684\u4ee3\u7801\u5c31\u5b8c\u6210\u4e86\u3002"),Object(i.b)("p",null,"\u63a5\u7740\u8bd5\u7740\u89e3\u6790 Array\uff0c\u4e0b\u9762\u662f Array \u7684\u8bed\u6cd5\u56fe\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210409192759.png",alt:null})),Object(i.b)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u5403\u9017\u53f7\u548c ",Object(i.b)("inlineCode",{parentName:"p"},"parseValue")," \u5373\u53ef\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function fakeParseJSON(str) {\n  // ...\n  function parseArray() {\n    if (str[i] === '[') {\n      i++;\n      skipWhitespace();\n\n      const result = [];\n      let initial = true;\n      while (str[i] !== ']') {\n        if (!initial) {\n          eatComma();\n        }\n        const value = parseValue();\n        result.push(value);\n        initial = false;\n      }\n      // move to the next character of ']'\n      i++;\n      return result;\n    }\n  }\n}\n")),Object(i.b)("p",null,"\u63a5\u4e0b\u6765\u5230\u4e86\u6709\u8da3\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"value")," \u8bed\u6cd5\u56fe\uff0c\u53ef\u4ee5\u770b\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"value")," \u662f\u8bb8\u591a\u79cd\u57fa\u7840\u7c7b\u578b\u7684 \u201c\u6216\u201d \u5173\u7cfb\u7ec4\u6210\u7684\uff1a\n",Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210409192837.png",alt:null})),Object(i.b)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u7ee7\u7eed\u62c6\u89e3\u5206\u6790\u5373\u53ef\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function fakeParseJSON(str) {\n  // ...\n  function parseValue() {\n    skipWhitespace();\n    const value =\n      parseString() ??\n      parseNumber() ??\n      parseObject() ??\n      parseArray() ??\n      parseKeyword('true', true) ??\n      parseKeyword('false', false) ??\n      parseKeyword('null', null);\n    skipWhitespace();\n    return value;\n  }\n}\n")),Object(i.b)("p",null,"\u5176\u4e2d ",Object(i.b)("inlineCode",{parentName:"p"},"parseKeyword")," \u51fd\u6570\u7528\u6765\u89e3\u6790\u4e00\u4e9b\u4fdd\u7559\u5173\u952e\u5b57\uff0c\u6bd4\u5982\u5c06 ",Object(i.b)("inlineCode",{parentName:"p"},'"true"')," \u89e3\u6790\u6210\u5e03\u5c14\u7c7b\u578b ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function fakeParseJSON(str) {\n  // ...\n  function parseKeyword(name, value) {\n    if (str.slice(i, i + name.length) === name) {\n      i += name.length;\n      return value;\n    }\n  }\n}\n")),Object(i.b)("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\u53ea\u8981\u5728 name \u4e0e\u5bf9\u5e94\u5b57\u7b26\u76f8\u7b49\u65f6\uff0c\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u4f20\u5165\u53c2\u6570\u5373\u53ef\u3002"),Object(i.b)("h3",{id:"\u5904\u7406\u5f02\u5e38\u8f93\u5165"},"\u5904\u7406\u5f02\u5e38\u8f93\u5165"),Object(i.b)("p",null,"\u4e00\u4e2a\u5b8c\u6574\u7684\u8bed\u6cd5\u89e3\u6790\u529f\u80fd\u9700\u8981\u5305\u542b\u9519\u8bef\u5904\u7406\uff0c\u9519\u8bef\u7684\u60c5\u51b5\u4e3b\u8981\u5206\u4e24\u79cd\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u975e\u6cd5\u5b57\u7b26\u3002"),Object(i.b)("li",{parentName:"ol"},"\u975e\u6b63\u5e38\u7ed3\u5c3e\u3002")),Object(i.b)("p",null,"\u539f\u6587\u63d0\u5230\u7684 JSON \u9519\u8bef\u63d0\u793a\u4f18\u5316\u975e\u5e38\u68d2\uff0c\u60f3\u60f3\u4f60\u5728\u5f00\u53d1\u4e2d\u7a81\u7136\u770b\u5230\u4e0b\u9762\u7684\u63d0\u793a\uff0c\u662f\u4e0d\u662f\u5f88\u8499\u5708\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},'Unexpected token "a"\n')),Object(i.b)("p",null,"\u65e2\u7136\u6211\u4eec\u662f\u81ea\u5df1\u5199\u7684 JSON \u89e3\u6790\u5668\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u66f4\u53cb\u597d\u7684\u5f02\u5e38\u63d0\u793a\uff0c\u6bd4\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},'// show\n{ "b"a\n      ^\nJSON_ERROR_001 Unexpected token "a".\nExpecting a ":" over here, eg:\n{ "b": "bar" }\n      ^\nYou can learn more about valid JSON string in http://goo.gl/xxxxx\n')),Object(i.b)("p",null,"\u66f4\u591a Demo \u53ef\u4ee5\u67e5\u770b ",Object(i.b)("a",{parentName:"p",href:"https://lihautan.com/json-parser-with-javascript/"},"\u539f\u6587"),"\u3002"),Object(i.b)("h2",{id:"3-\u603b\u7ed3"},"3 \u603b\u7ed3"),Object(i.b)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u901a\u8fc7\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u89e3\u91ca\u5982\u4f55\u505a\u8bed\u6cd5\u5206\u6790\uff0c\u5bf9\u4e8e\u8bcd\u6cd5\u89e3\u6790\u5165\u95e8\u975e\u5e38\u76f4\u89c2\uff0c\u5982\u679c\u4f60\u60f3\u66f4\u6df1\u5165\u7406\u89e3\u8bed\u6cd5\u89e3\u6790\uff0c\u6216\u8005\u5199\u4e00\u4e2a\u901a\u7528\u8bed\u6cd5\u89e3\u6790\u5668\uff0c\u53ef\u4ee5\u9605\u8bfb\u8bed\u6cd5\u89e3\u6790\u7cfb\u5217\u5165\u95e8\u6587\u7ae0\uff0c\u7b14\u8005\u901a\u8fc7\u5b9e\u9645\u4f8b\u5b50\u5e26\u4f60\u4e00\u6b65\u4e00\u6b65\u505a\u4e00\u4e2a\u5b8c\u5907\u7684\u8bcd\u6cd5\u89e3\u6790\u5de5\u5177\uff01"),Object(i.b)("p",null,"\u8bed\u6cd5\u89e3\u6790\u5165\u95e8\u7cfb\u5217\u6587\u7ae0\uff0c\u5efa\u8bae\u9605\u8bfb\u987a\u5e8f\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/v2/064.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u8bcd\u6cd5\u5206\u6790\u300b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/v2/065.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E6%96%87%E6%B3%95%E4%BB%8B%E7%BB%8D%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u6587\u6cd5\u4ecb\u7ecd\u300b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/v2/066.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u8bed\u6cd5\u5206\u6790\u300b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/v2/067.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E5%9B%9E%E6%BA%AF%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u56de\u6eaf\u300b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/v2/070.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E8%AF%AD%E6%B3%95%E6%A0%91%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u8bed\u6cd5\u6811\u300b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/v2/071.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u9519\u8bef\u63d0\u793a\u300b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/v2/078.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%B9%8B%E7%BC%93%E5%AD%98%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u6027\u80fd\u4f18\u5316\u4e4b\u7f13\u5b58\u300b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/v2/085.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%89%8B%E5%86%99%20SQL%20%E7%BC%96%E8%AF%91%E5%99%A8%20-%20%E6%99%BA%E8%83%BD%E6%8F%90%E7%A4%BA%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u667a\u80fd\u63d0\u793a\u300b"))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/ascoders/syntax-parser"},"syntax-parser")," \u8fd9\u4e2a\u96f6\u4f9d\u8d56\u7684\u901a\u7528\u8bed\u6cd5\u89e3\u6790\u5e93\u5c31\u662f\u6839\u636e\u4e0a\u8ff0\u6587\u7ae0\u4e00\u6b65\u4e00\u6b65\u5b8c\u6210\u7684\uff0c\u770b\u5b8c\u4e86\u4e0a\u9762\u6587\u7ae0\uff0c\u5c31\u5f7b\u5e95\u7406\u89e3\u4e86\u8fd9\u4e2a\u5e93\u7684\u6e90\u7801\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(i.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/233"},"\u7cbe\u8bfb\u300a\u624b\u5199 JSON Parser\u300b \xb7 Issue #233 \xb7 dt-fe/weekly"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(i.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(i.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}o.isMDXComponent=!0},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=o(n),O=a,m=s["".concat(l,".").concat(O)]||s[O]||u[O]||i;return n?r.a.createElement(m,b(b({ref:t},c),{},{components:n})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=O;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);