(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(385)),i={title:"59. \u7cbe\u8bfb\u300a\u5982\u4f55\u5229\u7528 Nodejs \u76d1\u542c\u6587\u4ef6\u5939\u300b",id:"059",hide_title:!0},c={unversionedId:"059",id:"059",isDocsHomePage:!1,title:"59. \u7cbe\u8bfb\u300a\u5982\u4f55\u5229\u7528 Nodejs \u76d1\u542c\u6587\u4ef6\u5939\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/059.\u7cbe\u8bfb\u300a\u5982\u4f55\u5229\u7528 Nodejs \u76d1\u542c\u6587\u4ef6\u5939\u300b.md",slug:"/059",permalink:"/weekly/059",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/059.\u7cbe\u8bfb\u300a\u5982\u4f55\u5229\u7528 Nodejs \u76d1\u542c\u6587\u4ef6\u5939\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617870333,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"58. \u7cbe\u8bfb\u300aTypescript2.0 - 2.9\u300b",permalink:"/weekly/058"},next:{title:"60. \u7cbe\u8bfb\u300a\u5982\u4f55\u5728 nodejs \u4f7f\u7528\u73af\u5883\u53d8\u91cf\u300b",permalink:"/weekly/060"}},o=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[{value:"\u4f7f\u7528 fs.watchfile",id:"\u4f7f\u7528-fswatchfile",children:[]},{value:"\u4f7f\u7528 fs.watch",id:"\u4f7f\u7528-fswatch",children:[]},{value:"\u4f18\u5316\u65b9\u6848\u4e00\uff1a\u5bf9\u6bd4\u6587\u4ef6\u4fee\u6539\u65f6\u95f4",id:"\u4f18\u5316\u65b9\u6848\u4e00\uff1a\u5bf9\u6bd4\u6587\u4ef6\u4fee\u6539\u65f6\u95f4",children:[]},{value:"\u4f18\u5316\u65b9\u6848\u4e8c\uff1a\u6821\u9a8c\u6587\u4ef6 md5",id:"\u4f18\u5316\u65b9\u6848\u4e8c\uff1a\u6821\u9a8c\u6587\u4ef6-md5",children:[]},{value:"\u4f18\u5316\u65b9\u6848\u4e09\uff1a\u52a0\u5165\u5ef6\u8fdf\u673a\u5236",id:"\u4f18\u5316\u65b9\u6848\u4e09\uff1a\u52a0\u5165\u5ef6\u8fdf\u673a\u5236",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]},{value:"5 \u66f4\u591a\u8ba8\u8bba",id:"5-\u66f4\u591a\u8ba8\u8bba",children:[]}],p={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(l.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"http://thisdavej.com/how-to-watch-for-files-changes-in-node-js/"},"How to Watch for Files Changes in Node.js"),"\uff0c\u63a2\u8ba8\u5982\u4f55\u76d1\u542c\u6587\u4ef6\u7684\u53d8\u5316\u3002"),Object(l.b)("p",null,"\u5982\u679c\u60f3\u4f7f\u7528\u73b0\u6210\u7684\u5e93\uff0c\u63a8\u8350 ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/chokidar"},"chokidar")," \u6216 ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-watch"},"node-watch"),"\uff0c\u5982\u679c\u60f3\u4e86\u89e3\u5b9e\u73b0\u539f\u7406\uff0c\u8bf7\u5f80\u4e0b\u9605\u8bfb\u3002"),Object(l.b)("h2",{id:"2-\u6982\u8ff0"},"2 \u6982\u8ff0"),Object(l.b)("h3",{id:"\u4f7f\u7528-fswatchfile"},"\u4f7f\u7528 fs.watchfile"),Object(l.b)("p",null,"\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"fs")," \u5185\u7f6e\u51fd\u6570 ",Object(l.b)("inlineCode",{parentName:"p"},"watchfile")," \u4f3c\u4e4e\u53ef\u4ee5\u89e3\u51b3\u95ee\u9898\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"fs.watchFile(dir, (curr, prev) => {});\n")),Object(l.b)("p",null,"\u4f46\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\u8fd9\u4e2a\u56de\u8c03\u6267\u884c\u6709\u4e00\u5b9a\u5ef6\u8fdf\uff0c\u56e0\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"watchfile")," \u662f\u901a\u8fc7\u8f6e\u8be2\u68c0\u6d4b\u6587\u4ef6\u53d8\u5316\u7684\uff0c\u5b83\u5e76\u4e0d\u80fd\u5b9e\u65f6\u4f5c\u51fa\u53cd\u9988\uff0c\u800c\u4e14\u53ea\u80fd\u76d1\u542c\u4e00\u4e2a\u6587\u4ef6\uff0c\u5b58\u5728\u6548\u7387\u95ee\u9898\u3002"),Object(l.b)("h3",{id:"\u4f7f\u7528-fswatch"},"\u4f7f\u7528 fs.watch"),Object(l.b)("p",null,"\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"fs")," \u7684\u53e6\u4e00\u4e2a\u5185\u7f6e\u51fd\u6570 ",Object(l.b)("inlineCode",{parentName:"p"},"watch")," \u662f\u66f4\u597d\u7684\u9009\u62e9\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"fs.watch(dir, (event, filename) => {});\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"watch")," \u901a\u8fc7\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684\u6587\u4ef6\u66f4\u6539\u901a\u77e5\u673a\u5236\uff0c\u5728 Linux \u64cd\u4f5c\u7cfb\u7edf\u4f7f\u7528 inotify\uff0c\u5728 macOS \u7cfb\u7edf\u4f7f\u7528 FSEvents,\u5728 windows \u7cfb\u7edf\u4f7f\u7528 ReadDirectoryChangesW\uff0c\u800c\u4e14\u53ef\u4ee5\u7528\u6765\u76d1\u542c\u76ee\u5f55\u7684\u53d8\u5316\uff0c\u5728\u76d1\u542c\u6587\u4ef6\u5939\u7684\u573a\u666f\u4e2d\uff0c\u6bd4\u521b\u5efa N \u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"fs.watchfile")," \u6548\u7387\u9ad8\u51fa\u5f88\u591a\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ node file-watcher.js\n[2018-05-21T00:55:52.588Z] Watching for file changes on ./button-presses.log\n[2018-05-21T00:56:00.773Z] button-presses.log file Changed\n[2018-05-21T00:56:00.793Z] button-presses.log file Changed\n[2018-05-21T00:56:00.802Z] button-presses.log file Changed\n[2018-05-21T00:56:00.813Z] button-presses.log file Changed\n")),Object(l.b)("p",null,"\u4f46\u5f53\u6211\u4eec\u4fee\u6539\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u56de\u8c03\u5374\u6267\u884c\u4e86 4 \u6b21\uff01\u539f\u56e0\u662f\u6587\u4ef6\u88ab\u5199\u5165\u65f6\uff0c\u53ef\u80fd\u89e6\u53d1\u591a\u6b21\u5199\u64cd\u4f5c\uff0c\u5373\u4f7f\u53ea\u4fdd\u5b58\u4e86\u4e00\u6b21\u3002\u4f46\u6211\u4eec\u4e0d\u9700\u8981\u8fd9\u4e48\u654f\u611f\u7684\u56de\u8c03\uff0c\u56e0\u4e3a\u901a\u5e38\u8ba4\u4e3a\u4e00\u6b21\u4fdd\u5b58\u5c31\u662f\u4e00\u6b21\u4fee\u6539\uff0c\u7cfb\u7edf\u5e95\u5c42\u5199\u4e86\u51e0\u6b21\u6587\u4ef6\u6211\u4eec\u5e76\u4e0d\u5173\u5fc3\u3002"),Object(l.b)("p",null,"\u56e0\u800c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5224\u65ad\u662f\u5426\u89e6\u53d1\u72b6\u6001\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"change"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},'fs.watch(dir, (event, filename) => {\n  if (filename && event === "change") {\n    console.log(`${filename} file Changed`);\n  }\n});\n')),Object(l.b)("p",null,"\u8fd9\u6837\u505a\u53ef\u4ee5\u4e00\u5b9a\u7a0b\u5ea6\u89e3\u51b3\u95ee\u9898\uff0c\u4f46\u4f5c\u8005\u53d1\u73b0 Raspbian \u7cfb\u7edf\u4e0d\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"p"},"rename")," \u4e8b\u4ef6\uff0c\u5982\u679c\u5f52\u7c7b\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"change"),"\uff0c\u4f1a\u5bfc\u81f4\u8fd9\u6837\u7684\u5224\u65ad\u6beb\u65e0\u610f\u4e49\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4f5c\u8005\u8981\u8868\u8fbe\u7684\u610f\u601d\u662f\uff0c\u5728\u4e0d\u540c\u5e73\u53f0\u4e0b\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"fs.watch")," \u7684\u89c4\u5219\u53ef\u80fd\u4f1a\u4e0d\u540c\uff0c\u539f\u56e0\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"fs.watch")," \u5206\u522b\u4f7f\u7528\u4e86\u5404\u5e73\u53f0\u63d0\u4f9b\u7684 api\uff0c\u6240\u4ee5\u65e0\u6cd5\u4fdd\u8bc1\u8fd9\u4e9b api \u5b9e\u73b0\u89c4\u5219\u7684\u7edf\u4e00\u6027\u3002")),Object(l.b)("h3",{id:"\u4f18\u5316\u65b9\u6848\u4e00\uff1a\u5bf9\u6bd4\u6587\u4ef6\u4fee\u6539\u65f6\u95f4"},"\u4f18\u5316\u65b9\u6848\u4e00\uff1a\u5bf9\u6bd4\u6587\u4ef6\u4fee\u6539\u65f6\u95f4"),Object(l.b)("p",null,"\u57fa\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"fs.watch"),"\uff0c\u589e\u52a0\u4e86\u5bf9\u4fee\u6539\u65f6\u95f4\u7684\u5224\u65ad\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"let previousMTime = new Date(0);\n\nfs.watch(dir, (event, filename) => {\n  if (filename) {\n    const stats = fs.statSync(filename);\n    if (stats.mtime.valueOf() === previousMTime.valueOf()) {\n      return;\n    }\n    previousMTime = stats.mtime;\n    console.log(`${filename} file Changed`);\n  }\n});\n")),Object(l.b)("p",null,"log \u7531 4 \u4e2a\u53d8\u6210\u4e86 3 \u4e2a\uff0c\u4f46\u4f9d\u7136\u5b58\u5728\u95ee\u9898\u3002\u6211\u4eec\u8ba4\u4e3a\u6587\u4ef6\u5185\u5bb9\u53d8\u5316\u624d\u7b97\u6709\u4fee\u6539\uff0c\u4f46\u64cd\u4f5c\u7cfb\u7edf\u8003\u8651\u7684\u56e0\u7d20\u66f4\u591a\uff0c\u6240\u4ee5\u6211\u4eec\u518d\u5c1d\u8bd5\u5bf9\u6bd4\u6587\u4ef6\u5185\u5bb9\u662f\u5426\u53d8\u5316\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7b14\u8005\u8865\u5145\uff1a\u53e6\u5916\u4e00\u4e9b\u5f00\u6e90\u7f16\u8f91\u5668\u53ef\u80fd\u5148\u6e05\u7a7a\u6587\u4ef6\u518d\u5199\u5165\uff0c\u4e5f\u4f1a\u5f71\u54cd\u5230\u89e6\u53d1\u56de\u8c03\u7684\u6b21\u6570\u3002")),Object(l.b)("h3",{id:"\u4f18\u5316\u65b9\u6848\u4e8c\uff1a\u6821\u9a8c\u6587\u4ef6-md5"},"\u4f18\u5316\u65b9\u6848\u4e8c\uff1a\u6821\u9a8c\u6587\u4ef6 md5"),Object(l.b)("p",null,"\u53ea\u6709\u6587\u4ef6\u5185\u5bb9\u53d8\u5316\u4e86\uff0c\u624d\u8ba4\u4e3a\u89e6\u53d1\u4e86\u6539\u52a8\uff0c\u8fd9\u4e0b\u603b\u53ef\u4ee5\u4e86\u5427\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"let md5Previous = null;\n\nfs.watch(dir, (event, filename) => {\n  if (filename) {\n    const md5Current = md5(fs.readFileSync(buttonPressesLogFile));\n    if (md5Current === md5Previous) {\n      return;\n    }\n    md5Previous = md5Current;\n    console.log(`${filename} file Changed`);\n  }\n});\n")),Object(l.b)("p",null,"log \u7ec8\u4e8e\u7531 3 \u4e2a\u53d8\u6210\u4e86 2 \u4e2a\uff0c\u4e3a\u4ec0\u4e48\u591a\u51fa\u4e00\u4e2a\uff1f\u53ef\u80fd\u7684\u539f\u56e0\u662f\uff0c\u5728\u6587\u4ef6\u4fdd\u5b58\u8fc7\u7a0b\u4e2d\uff0c\u7cfb\u7edf\u53ef\u80fd\u4f1a\u89e6\u53d1\u591a\u4e2a\u56de\u8c03\u4e8b\u4ef6\uff0c\u4e5f\u8bb8\u5b58\u5728\u4e2d\u95f4\u6001\u3002"),Object(l.b)("h3",{id:"\u4f18\u5316\u65b9\u6848\u4e09\uff1a\u52a0\u5165\u5ef6\u8fdf\u673a\u5236"},"\u4f18\u5316\u65b9\u6848\u4e09\uff1a\u52a0\u5165\u5ef6\u8fdf\u673a\u5236"),Object(l.b)("p",null,"\u6211\u4eec\u5c1d\u8bd5\u5ef6\u8fdf 100 \u6beb\u79d2\u8fdb\u884c\u5224\u65ad\uff0c\u4e5f\u8bb8\u80fd\u907f\u5f00\u4e2d\u95f4\u72b6\u6001\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"let fsWait = false;\nfs.watch(dir, (event, filename) => {\n  if (filename) {\n    if (fsWait) return;\n    fsWait = setTimeout(() => {\n      fsWait = false;\n    }, 100);\n    console.log(`${filename} file Changed`);\n  }\n});\n")),Object(l.b)("p",null,"\u8fd9\u4e0b log \u53d8\u6210\u4e00\u4e2a\u4e86\u3002\u5f88\u591a npm \u5305\u5728\u8fd9\u91cc\u4f7f\u7528\u4e86 debounce \u51fd\u6570\u63a7\u5236\u89e6\u53d1\u9891\u7387\uff0c\u624d\u5c06\u89e6\u53d1\u9891\u7387\u4fee\u6b63\u3002"),Object(l.b)("p",null,"\u800c\u4e14\u6211\u4eec\u9700\u8981\u7ed3\u5408 md5 \u4e0e\u5ef6\u8fdf\u673a\u5236\u5171\u540c\u4f5c\u7528\uff0c\u624d\u80fd\u5f97\u5230\u76f8\u5bf9\u7cbe\u51c6\u7684\u7ed3\u679c\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"let md5Previous = null;\nlet fsWait = false;\nfs.watch(dir, (event, filename) => {\n  if (filename) {\n    if (fsWait) return;\n    fsWait = setTimeout(() => {\n      fsWait = false;\n    }, 100);\n    const md5Current = md5(fs.readFileSync(dir));\n    if (md5Current === md5Previous) {\n      return;\n    }\n    md5Previous = md5Current;\n    console.log(`${filename} file Changed`);\n  }\n});\n")),Object(l.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(l.b)("p",null,"\u4f5c\u8005\u8ba8\u8bba\u4e86\u4e00\u4e9b\u5b9e\u73b0\u6587\u4ef6\u5939\u76d1\u542c\u7684\u57fa\u672c\u65b9\u5f0f\uff0c\u53ef\u4ee5\u770b\u51fa\uff0c\u4f7f\u7528\u4e86\u5404\u5e73\u53f0\u539f\u751f API \u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"fs.watch")," \u5e76\u4e0d\u90a3\u4e48\u9760\u8c31\uff0c\u4f46\u8fd9\u4e5f\u6211\u4eec\u76d1\u542c\u6587\u4ef6\u7684\u552f\u4e00\u624b\u6bb5\uff0c\u6240\u4ee5\u9700\u8981\u57fa\u4e8e\u5b83\u8fdb\u884c\u4e00\u7cfb\u5217\u4f18\u5316\u3002"),Object(l.b)("p",null,"\u800c\u5b9e\u9645\u573a\u666f\u4e2d\uff0c\u8fd8\u9700\u8981\u8003\u8651\u533a\u5206\u6587\u4ef6\u5939\u4e0e\u6587\u4ef6\u3001\u8f6f\u8fde\u63a5\u3001\u8bfb\u5199\u6743\u9650\u7b49\u60c5\u51b5\u3002"),Object(l.b)("p",null,"\u53e6\u5916\u7528\u5728\u751f\u4ea7\u73af\u5883\u7684\u5e93\uff0c\u4e5f\u57fa\u672c\u4f7f\u7528 50 \u5230 100 \u6beb\u79d2\u89e3\u51b3\u91cd\u590d\u89e6\u53d1\u7684\u95ee\u9898\u3002"),Object(l.b)("p",null,"\u6240\u4ee5\u65e0\u8bba ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/chokidar"},"chokidar")," \u6216 ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-watch"},"node-watch"),"\uff0c\u90fd\u5927\u91cf\u4f7f\u7528\u4e86\u6587\u4e2d\u63d0\u53ca\u7684\u6280\u5de7\uff0c\u518d\u52a0\u4e0a\u5bf9\u8fb9\u754c\u6761\u4ef6\u7684\u5904\u7406\uff0c\u5bf9\u8f6f\u8fde\u63a5\u3001\u6743\u9650\u7b49\u60c5\u51b5\u5904\u7406\uff0c\u5c06\u6240\u6709\u53ef\u80fd\u60c5\u51b5\u90fd\u8003\u8651\u5230\uff0c\u624d\u80fd\u63d0\u4f9b\u8f83\u4e3a\u51c6\u786e\u7684\u56de\u8c03\u3002"),Object(l.b)("p",null,"\u6bd4\u5982\u5224\u65ad\u6587\u4ef6\u5199\u5165\u64cd\u4f5c\u662f\u5426\u5b8c\u6bd5\uff0c\u4e5f\u9700\u8981\u901a\u8fc7\u8f6e\u8be2\u7684\u65b9\u5f0f\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"function awaitWriteFinish() {\n  // ...\u7701\u7565\n  fs.stat(\n    fullPath,\n    function(err, curStat) {\n      // ...\u7701\u7565\n\n      if (prevStat && curStat.size != prevStat.size) {\n        this._pendingWrites[path].lastChange = now;\n      }\n\n      if (now - this._pendingWrites[path].lastChange >= threshold) {\n        delete this._pendingWrites[path];\n        awfEmit(null, curStat);\n      } else {\n        timeoutHandler = setTimeout(\n          awaitWriteFinish.bind(this, curStat),\n          this.options.awaitWriteFinish.pollInterval\n        );\n      }\n    }.bind(this)\n  );\n  // ...\u7701\u7565\n}\n")),Object(l.b)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u7b2c\u4e09\u65b9 npm \u5e93\u90fd\u91c7\u53d6\u4e0d\u4fe1\u4efb\u64cd\u4f5c\u7cfb\u7edf\u56de\u8c03\u7684\u65b9\u5f0f\uff0c\u6839\u636e\u6587\u4ef6\u4fe1\u606f\u5b8c\u5168\u91cd\u5199\u4e86\u5224\u65ad\u903b\u8f91\u3002"),Object(l.b)("p",null,"\u53ef\u89c1\uff0c\u4fe1\u4efb\u64cd\u4f5c\u7cfb\u7edf\u7684\u56de\u8c03\uff0c\u5c31\u65e0\u6cd5\u62b9\u5e73\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\u95f4\u7684\u5dee\u5f02\uff0c\u552f\u6709\u7edf\u4e00\u91cd\u5199\u6587\u4ef6\u7684 \u201c\u5199\u5165\u201d\u3001\u201c\u5220\u9664\u201d\u3001\u201c\u4fee\u6539\u201d \u7b49\u903b\u8f91\uff0c\u624d\u80fd\u4fdd\u8bc1\u5728\u5168\u5e73\u53f0\u7684\u517c\u5bb9\u6027\u3002"),Object(l.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(l.b)("p",null,"\u5229\u7528 nodejs \u76d1\u542c\u6587\u4ef6\u5939\u53d8\u5316\u5f88\u5bb9\u6613\uff0c\u4f46\u63d0\u4f9b\u51c6\u786e\u7684\u56de\u8c03\u5374\u5f88\u96be\uff0c\u4e3b\u8981\u96be\u5728\u4e24\u70b9\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u62b9\u5e73\u64cd\u4f5c\u7cfb\u7edf\u95f4\u7684\u5dee\u5f02\uff0c\u8fd9\u9700\u8981\u5728\u7ed3\u5408 ",Object(l.b)("inlineCode",{parentName:"li"},"fs.watch")," \u7684\u540c\u65f6\uff0c\u589e\u52a0\u4e00\u4e9b\u989d\u5916\u6821\u9a8c\u673a\u5236\u4e0e\u5ef6\u65f6\u673a\u5236\u3002"),Object(l.b)("li",{parentName:"ol"},"\u5206\u6e05\u695a\u64cd\u4f5c\u7cfb\u7edf\u9884\u671f\u4e0e\u7528\u6237\u9884\u671f\uff0c\u6bd4\u5982\u7f16\u8f91\u5668\u7684\u989d\u5916\u64cd\u4f5c\u3001\u64cd\u4f5c\u7cfb\u7edf\u7684\u591a\u6b21\u8bfb\u5199\u90fd\u5e94\u8be5\u88ab\u5ffd\u7565\uff0c\u7528\u6237\u7684\u9884\u671f\u4e0d\u4f1a\u90a3\u4e48\u9891\u7e41\uff0c\u4f1a\u5ffd\u7565\u6781\u5c0f\u65f6\u95f4\u6bb5\u5185\u7684\u8fde\u7eed\u89e6\u53d1\u3002")),Object(l.b)("p",null,"\u53e6\u5916\u8fd8\u6709\u517c\u5bb9\u6027\u3001\u6743\u9650\u3001\u8f6f\u8fde\u63a5\u7b49\u5176\u4ed6\u56e0\u7d20\u8981\u8003\u8651\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"fs.watch")," \u5e76\u4e0d\u662f\u4e00\u4e2a\u5f00\u7bb1\u53ef\u7528\u7684\u5de5\u7a0b\u7ea7\u522b api\u3002"),Object(l.b)("h2",{id:"5-\u66f4\u591a\u8ba8\u8bba"},"5 \u66f4\u591a\u8ba8\u8bba"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/87"},"\u7cbe\u8bfb\u300a\u5982\u4f55\u5229\u7528 Nodejs \u76d1\u542c\u6587\u4ef6\u5939\u300b \xb7 Issue #87 \xb7 dt-fe/weekly"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(l.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002")))}b.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||l;return n?r.a.createElement(f,c(c({ref:t},p),{},{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);