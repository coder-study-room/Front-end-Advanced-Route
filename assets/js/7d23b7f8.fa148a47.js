(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),l=(n(0),n(467)),b={title:"113. \u7cbe\u8bfb\u300aNodejs V12\u300b",id:"113",hide_title:!0},c={unversionedId:"113",id:"113",isDocsHomePage:!1,title:"113. \u7cbe\u8bfb\u300aNodejs V12\u300b",description:"1. \u5f15\u8a00",source:"@site/weekly/113.\u7cbe\u8bfb\u300aNodejs V12\u300b.md",slug:"/113",permalink:"/weekly/113",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/113.\u7cbe\u8bfb\u300aNodejs V12\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617963167,formattedLastUpdatedAt:"4/9/2021",sidebar:"weekly",previous:{title:"112. \u7cbe\u8bfb\u300a\u6e90\u7801\u5b66\u4e60\u300b",permalink:"/weekly/112"},next:{title:"114. \u7cbe\u8bfb\u300a\u8c01\u5728\u4e16\u754c\u4e2d\u5fc3\u300b",permalink:"/weekly/114"}},p=[{value:"1. \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2. \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[{value:"V8 \u5f15\u64ce\u5347\u7ea7",id:"v8-\u5f15\u64ce\u5347\u7ea7",children:[]},{value:"TLS 1.3 \u66f4\u597d\u7684\u5b89\u5168\u6027",id:"tls-13-\u66f4\u597d\u7684\u5b89\u5168\u6027",children:[]},{value:"\u9ed8\u8ba4\u5806\u88ab\u6b63\u786e\u914d\u7f6e\u4e86",id:"\u9ed8\u8ba4\u5806\u88ab\u6b63\u786e\u914d\u7f6e\u4e86",children:[]},{value:"\u9ed8\u8ba4\u7684 http \u89e3\u6790\u5668\u53d8\u4e3a llhttp",id:"\u9ed8\u8ba4\u7684-http-\u89e3\u6790\u5668\u53d8\u4e3a-llhttp",children:[]},{value:"\u63d0\u4f9b\u8bca\u65ad\u62a5\u544a",id:"\u63d0\u4f9b\u8bca\u65ad\u62a5\u544a",children:[]},{value:"\u5806\u5185\u5b58 dump",id:"\u5806\u5185\u5b58-dump",children:[]},{value:"\u66f4\u597d\u7684\u539f\u751f\u6a21\u5757\u652f\u6301",id:"\u66f4\u597d\u7684\u539f\u751f\u6a21\u5757\u652f\u6301",children:[]},{value:"Worker \u88ab\u6b63\u5f0f\u542f\u7528\u4e86",id:"worker-\u88ab\u6b63\u5f0f\u542f\u7528\u4e86",children:[]},{value:"\u542f\u52a8\u901f\u5ea6\u4f18\u5316",id:"\u542f\u52a8\u901f\u5ea6\u4f18\u5316",children:[]},{value:"\u652f\u6301 ES6 module",id:"\u652f\u6301-es6-module",children:[]},{value:"\u65b0\u7684\u7f16\u8bd1\u5668\u548c\u5e73\u53f0\u8981\u6c42",id:"\u65b0\u7684\u7f16\u8bd1\u5668\u548c\u5e73\u53f0\u8981\u6c42",children:[]}]},{value:"3. \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[]},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]}],i={toc:p};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"1-\u5f15\u8a00"},"1. \u5f15\u8a00"),Object(l.b)("p",null,"Node12 \u53d1\u5e03\u6709\u51e0\u4e2a\u6708\u4e86\uff0c\u8ba9\u6211\u4eec\u8ddf\u968f ",Object(l.b)("a",{parentName:"p",href:"https://blog.logrocket.com/node-js-12/"},"Nodejs 12")," \u4e00\u8d77\u770b\u770b Node12 \u5e26\u6765\u4e86\u54ea\u4e9b\u6539\u53d8\u3002"),Object(l.b)("h2",{id:"2-\u6982\u8ff0"},"2. \u6982\u8ff0"),Object(l.b)("p",null,"Node12 \u4e0e\u4ee5\u5f80\u7684\u7248\u672c\u4e0d\u540c\uff0c\u5e26\u6765\u4e86\u8bb8\u591a\u91cd\u5927\u5347\u7ea7\uff0c\u5305\u62ec\u66f4\u591a V8 \u7279\u6027\uff0cHttp \u89e3\u6790\u901f\u5ea6\u7684\u63d0\u5347\uff0c\u542f\u52a8\u901f\u5ea6\u7684\u63d0\u5347\uff0c\u66f4\u597d\u7684\u8bca\u65ad\u62a5\u544a\u3001\u5185\u7f6e\u5806\u5206\u6790\u5de5\u5177\uff0cESM \u6a21\u5757\u7684\u66f4\u65b0\u7b49\u3002"),Object(l.b)("h3",{id:"v8-\u5f15\u64ce\u5347\u7ea7"},"V8 \u5f15\u64ce\u5347\u7ea7"),Object(l.b)("p",null,"V8 \u5347\u7ea7\u5e26\u6765\u4e86\u5982\u4e0b\u51e0\u4e2a\u7279\u6027\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://v8.dev/blog/v8-release-72#async-stack-traces"},"zero-cost async \u5806\u6808\u4fe1\u606f")," \u539f\u751f\u652f\u6301\u4e86 async \u5806\u6808\u4fe1\u606f\uff0c\u4e0d\u4f1a\u6dfb\u52a0\u989d\u5916\u8fd0\u884c\u65f6\u5185\u5bb9\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://v8.dev/blog/v8-release-74#faster-calls-with-arguments-mismatch"},"\u53c2\u6570\u6570\u91cf\u4e0d\u5339\u914d\u65f6\u6027\u80fd\u4f18\u5316")," \u5373\u4fbf\u53c2\u6570\u4f20\u9012\u591a\u4e86\u6216\u5c11\u4e86\uff0c\u73b0\u5728\u90fd\u51e0\u4e4e\u4e0d\u4f1a\u5f71\u54cd Node \u7684\u6267\u884c\u901f\u5ea6\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://v8.dev/blog/v8-release-73#faster-await"},"\u66f4\u5feb\u7684 async")," async /await \u5df2\u7ecf\u6bd4 promises \u5feb\u4e86\u4e24\u4e2a microticks\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://v8.dev/blog/v8-release-72#javascript-parsing"},"\u66f4\u5feb\u7684 Js \u89e3\u6790\u901f\u5ea6")," \u7f51\u9875\u4e2d\u7684 V8 \u5f15\u64ce\u4e00\u822c\u82b1\u8d39 9.5% \u65f6\u95f4\u5728 JS \u89e3\u6790\u4e0a\uff0c\u7ecf\u8fc7\u89e3\u6790\u52a0\u901f\u540e\uff0c\u73b0\u5728\u82b1\u8d39\u5728 JS \u89e3\u6790\u4e0a\u7684\u65f6\u95f4\u964d\u4f4e\u5230\u5e73\u5747 7.5%\u3002")),Object(l.b)("p",null,"\u53ef\u89c1 V8 \u5f15\u64ce\u7684\u5347\u7ea7\u4e0d\u4ec5\u7ed9 Node12 \u5e26\u6765\u4e86\u798f\u97f3\uff0c\u4e5f\u4f1a\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u63d0\u5347\u7f51\u9875\u7684\u8fd0\u884c\u6548\u7387\u3002"),Object(l.b)("h3",{id:"tls-13-\u66f4\u597d\u7684\u5b89\u5168\u6027"},"TLS 1.3 \u66f4\u597d\u7684\u5b89\u5168\u6027"),Object(l.b)("p",null,"\u968f\u7740 Node12 \u7684\u53d1\u5e03\uff0cTLS \u4ece 1.2 \u5347\u7ea7\u5230\u4e86 1.3\uff0c\u66f4\u5b89\u5168\u4e14\u66f4\u6613\u914d\u7f6e\u3002\u901a\u8fc7\u4f7f\u7528 TLS 1.3\uff0cNode \u7a0b\u5e8f\u53ef\u4ee5\u51cf\u5c11 Https \u63e1\u624b\u6240\u9700\u65f6\u95f4\u6765\u63d0\u5347\u8bf7\u6c42\u6027\u80fd\u3002"),Object(l.b)("h3",{id:"\u9ed8\u8ba4\u5806\u88ab\u6b63\u786e\u914d\u7f6e\u4e86"},"\u9ed8\u8ba4\u5806\u88ab\u6b63\u786e\u914d\u7f6e\u4e86"),Object(l.b)("p",null,"\u4ee5\u524d\u9ed8\u8ba4\u5806\u5927\u5c0f\u9700\u8981\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"-max-old-space-size")," \u8bbe\u7f6e\uff0c\u800c\u4e14\u9ed8\u8ba4\u503c\u662f\u4e00\u4e2a\u56fa\u5b9a\u503c\uff0c\u73b0\u5728\u8fd9\u4e2a\u9ed8\u8ba4\u503c\u53ef\u4ee5\u6839\u636e\u53ef\u7528\u5185\u5b58\u52a8\u6001\u5206\u914d\uff0c\u8fd9\u6837\u5f53\u5185\u5b58\u8f83\u5c0f\u65f6\uff0cNode \u4e0d\u4f1a\u8ba9\u5185\u5b58\u79fb\u9664\u800c\u62a5\u9519\uff0c\u800c\u662f\u4e3b\u52a8\u7ec8\u6b62\u81ea\u5df1\u7684\u8fdb\u7a0b\u3002"),Object(l.b)("h3",{id:"\u9ed8\u8ba4\u7684-http-\u89e3\u6790\u5668\u53d8\u4e3a-llhttp"},"\u9ed8\u8ba4\u7684 http \u89e3\u6790\u5668\u53d8\u4e3a llhttp"),Object(l.b)("p",null,"nodejs \u7684 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/nodejs/http-parser"},"http-parser")," \u5df2\u7ecf\u975e\u5e38\u96be\u4ee5\u7ef4\u62a4\u548c\u4f18\u5316\u4e86\uff0c\u56e0\u6b64 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/nodejs/llhttp#readme"},"llhttp")," \u8fd9\u4e2a\u5e93\uff0c\u6bd4 http-parser \u5feb 156%\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5728 Node12 \u4e2d\uff0c\u5c06\u9ed8\u8ba4\u89e3\u6790\u5668\u5207\u6362\u5230\u4e86 llhttp\u3002"),Object(l.b)("h3",{id:"\u63d0\u4f9b\u8bca\u65ad\u62a5\u544a"},"\u63d0\u4f9b\u8bca\u65ad\u62a5\u544a"),Object(l.b)("p",null,"Node12 \u6709\u4e00\u9879\u5b9e\u9a8c\u529f\u80fd\uff0c\u6839\u636e\u7528\u6237\u9700\u6c42\u63d0\u4f9b\u8bca\u65ad\u62a5\u544a\uff0c\u5305\u62ec\u5d29\u6e83\u3001\u6027\u80fd\u4e0b\u964d\u3001\u5185\u5b58\u6cc4\u9732\u3001CPU \u4f7f\u7528\u9ad8\u7b49\u7b49\u3002"),Object(l.b)("h3",{id:"\u5806\u5185\u5b58-dump"},"\u5806\u5185\u5b58 dump"),Object(l.b)("p",null,"\u5728\u4ee5\u524d\uff0c\u5982\u679c\u8981\u5c06\u5806\u5185\u5b58\u751f\u6210 dump \u6587\u4ef6\uff0c\u9700\u8981\u5728\u751f\u4ea7\u73af\u5883\u5b89\u88c5\u989d\u5916\u7684\u6a21\u5757\uff0c\u800c Node12 \u96c6\u6210\u4e86\u8fd9\u4e2a\u529f\u80fd\u3002"),Object(l.b)("h3",{id:"\u66f4\u597d\u7684\u539f\u751f\u6a21\u5757\u652f\u6301"},"\u66f4\u597d\u7684\u539f\u751f\u6a21\u5757\u652f\u6301"),Object(l.b)("p",null,"C++ \u62d3\u5c55 ",Object(l.b)("a",{parentName:"p",href:"https://nodejs.org/api/n-api.html#n_api_n_api"},"N-API")," \u5347\u7ea7\u5230\u7248\u672c 4\uff0c\u540c\u65f6\u4e00\u4e2a\u539f\u751f\u6a21\u5757\u53ef\u4ee5\u88ab C++ \u7f16\u5199\u5e76\u53d1\u5e03\u5230 npm\uff0c\u5c31\u50cf\u4e00\u4e2a\u666e\u901a JS \u6a21\u5757\u4e00\u6837\u88ab\u5f15\u7528\u3002\u4e0d\u8fc7\u8981\u6ce8\u610f\u4e00\u4e9b\u533a\u522b\uff1a"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null},"JS \u6a21\u5757"),Object(l.b)("th",{parentName:"tr",align:null},"\u539f\u751f\u62d3\u5c55"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"1."),Object(l.b)("td",{parentName:"tr",align:null},"... \u9700\u8981\u7f16\u8bd1"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426"),Object(l.b)("td",{parentName:"tr",align:null},"\u5982\u679c\u9884\u7f16\u8bd1\u4e86\u5219\u4e0d\u7528")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"2."),Object(l.b)("td",{parentName:"tr",align:null},"... \u662f\u5426\u53ef\u4ee5\u8fd0\u884c\u5728\u6240\u6709\u5e73\u53f0"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5982\u679c\u9884\u7f16\u8bd1\u4e86\u5219\u53ef\u4ee5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"3."),Object(l.b)("td",{parentName:"tr",align:null},"... \u662f\u5426\u517c\u5bb9\u6240\u6709 Node \u7248\u672c"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"4."),Object(l.b)("td",{parentName:"tr",align:null},"... \u4f1a\u88ab\u52a0\u8f7d\u591a\u6b21"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"5."),Object(l.b)("td",{parentName:"tr",align:null},"... \u5982\u679c\u6ca1\u6709\u660e\u786e\u4f7f\u7528\u591a\u7ebf\u7a0b\uff0c\u5219\u7ebf\u7a0b\u5b89\u5168"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"6."),Object(l.b)("td",{parentName:"tr",align:null},"... \u53ef\u4ee5\u88ab\u9500\u6bc1"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(l.b)("h3",{id:"worker-\u88ab\u6b63\u5f0f\u542f\u7528\u4e86"},"Worker \u88ab\u6b63\u5f0f\u542f\u7528\u4e86"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--experimental-worker")," \u5b9e\u9a8c\u5f00\u5173\u5df2\u53d6\u6d88\uff0c\u9ed8\u8ba4\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"p"},"worker_threads"),"\u3002"),Object(l.b)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6267\u884c CPU \u5bc6\u96c6\u578b\u4efb\u52a1\u65f6\u9002\u5408\u7528 worker\uff08\u5927\u91cf\u8ba1\u7b97\uff09\uff0c\u800c\u6267\u884c I/O \u5bc6\u96c6\u578b\u4efb\u52a1\u65f6\uff0cWorker \u53cd\u800c\u6ca1\u6709 Node \u5185\u7f6e\u7684 I/O \u64cd\u4f5c\u6027\u80fd\u597d\uff08\u8bfb\u5199\u6587\u4ef6\uff09\u3002"),Object(l.b)("h3",{id:"\u542f\u52a8\u901f\u5ea6\u4f18\u5316"},"\u542f\u52a8\u901f\u5ea6\u4f18\u5316"),Object(l.b)("p",null,"\u901a\u8fc7\u5728\u6784\u5efa\u65f6\u63d0\u524d\u4e3a\u5185\u7f6e\u5e93\u751f\u6210\u4ee3\u7801\u7f13\u5b58\uff0c\u6700\u7ec8\u4f7f\u542f\u52a8\u65f6\u95f4\u52a0\u5feb 30%\u3002"),Object(l.b)("h3",{id:"\u652f\u6301-es6-module"},"\u652f\u6301 ES6 module"),Object(l.b)("p",null,"Node12 \u5bf9 ES6 module \u7684\u652f\u6301\u4f9d\u7136\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u9700\u8981\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"--experimental-modules")," \u5f00\u542f\u3002"),Object(l.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u652f\u6301\u4e86 Import Export \u8bed\u6cd5\uff0c\u4e0d\u9700\u8981\u518d\u8f6c\u6210 ",Object(l.b)("inlineCode",{parentName:"p"},"require")," \u4e86\uff01\u5982\u679c\u5728  ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," \u589e\u52a0 ",Object(l.b)("inlineCode",{parentName:"p"},'"type": "module"')," \u7684\u914d\u7f6e\uff0cNode \u5c06\u6309\u7167 ES6 module \u65b9\u5f0f\u5904\u7406\u3002"),Object(l.b)("h3",{id:"\u65b0\u7684\u7f16\u8bd1\u5668\u548c\u5e73\u53f0\u8981\u6c42"},"\u65b0\u7684\u7f16\u8bd1\u5668\u548c\u5e73\u53f0\u8981\u6c42"),Object(l.b)("p",null,"\u7531\u4e8e\u5347\u7ea7\u5230\u65b0\u7684 V8 \u5f15\u64ce\u4ee5\u53ca\u5185\u90e8\u6539\u9020\uff0c\u56e0\u6b64 Node12 \u5728 Mac \u4e0e Windows \u4e4b\u5916\u7684\u5e73\u53f0\u4e0a\uff0c\u9700\u8981\u81f3\u5c11 GCC6 \u548c glibc 2.17\u3002"),Object(l.b)("h2",{id:"3-\u7cbe\u8bfb"},"3. \u7cbe\u8bfb"),Object(l.b)("p",null,"\u5bf9\u4e8e V8 \u5f15\u64ce\u5347\u7ea7\u3001TLS \u5347\u7ea7\u3001\u5806\u914d\u7f6e\u81ea\u52a8\u5316\u3001http-parser \u5347\u7ea7\u5230 llhttp\u3001\u542f\u52a8\u901f\u5ea6\u4f18\u5316\u90fd\u5c5e\u4e8e\u88ab\u52a8\u4f18\u5316\uff0c\u4ee3\u7801\u65e0\u9700\u6539\u52a8\uff0c\u53ea\u8981\u5347\u7ea7 Node \u7248\u672c\u5c31\u53ef\u4ee5\u4eab\u53d7\u3002"),Object(l.b)("p",null,"\u652f\u6301 ES6 module \u8fd9\u4e2a\u7279\u6027\u5176\u5b9e\u6bd4\u8f83\u9e21\u808b\uff0c\u6bd5\u7adf\u6e90\u7801\u7528 Ts \u5199\u7684\u8bdd\uff0c\u8fd9\u4e9b\u5347\u7ea7\u5e76\u4e0d\u4f1a\u5bf9\u6e90\u7801\u4ea7\u751f\u5f71\u54cd\u3002"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"worker_threads")," \u53ef\u4ee5\u88ab\u9ed8\u8ba4\u542f\u7528\uff0c\u5c31\u50cf\u4ee5\u524d\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"p"},"async/await")," \u4e00\u6837\uff0c\u4f1a\u5e26\u6765 Nodejs \u591a\u7ebf\u7a0b\u66f4\u5e7f\u6cdb\u7684\u4f7f\u7528\u3002"),Object(l.b)("p",null,"Node12 \u66f4\u65b0\u4e86 V8 \u5f15\u64ce\uff0c\u968f\u7740 V8 \u7684\u66f4\u65b0\uff0c\u5f88\u591a ES \u65b0\u89c4\u8303\u4e5f\u843d\u5730\u4e86\uff0c\u6bd4\u5982 Class \u6210\u5458\u51fd\u6570\u3001\u79c1\u6709\u6210\u5458\u53d8\u91cf\u7b49\u7b49\u3002"),Object(l.b)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),Object(l.b)("p",null,"Nodejs \u4ec5\u6709 10 \u5e74\u5386\u53f2\uff0c\u4f46\u73b0\u5728\u8d8a\u6765\u8d8a\u88ab\u5f00\u53d1\u8005\u6b22\u8fce\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u8ba9 JS \u8fd0\u884c\u5728\u670d\u52a1\u7aef\uff0c\u662f\u6269\u5927 JS \u751f\u6001\u7684\u91cd\u8981\u4e00\u73af\u3002\u4ece Node \u66f4\u65b0\u5386\u53f2\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u6027\u80fd\u548c\u8bed\u6cd5\u80fd\u529b\u7a33\u6b65\u63d0\u5347\uff0c\u4e00\u4e9b\u670d\u52a1\u7aef\u73af\u5883\u9700\u8981\u7684\u8bca\u65ad\u62a5\u544a\u3001\u5806\u6808\u5206\u6790\u80fd\u529b\u90fd\u5728\u9010\u6e10\u5b8c\u5584\uff0c\u793e\u533a\u4e0a\u4e5f\u6709 Alinode \u4e0e egg\u3001express\u3001koa \u7b49\u597d\u7528\u7684\u670d\u52a1\u6846\u67b6\uff0c\u76f8\u5bf9\u4e8e\u524d\u7aef\u7ffb\u5929\u8986\u5730\u7684\u53d8\u5316\uff0c\u5bf9 Node \u7684\u8bc4\u4ef7\u53ea\u6709\u4e00\u4e2a\u5b57\uff1a\u7a33\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/184"},"\u7cbe\u8bfb\u300aNodejs V12\u300b \xb7 Issue #184 \xb7 dt-fe/weekly"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(l.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(l.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}o.isMDXComponent=!0},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=o(n),j=r,m=d["".concat(b,".").concat(j)]||d[j]||u[j]||l;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=j;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);