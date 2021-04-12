(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(468)),i={title:"149. \u7cbe\u8bfb\u300aReact \u6027\u80fd\u8c03\u8bd5\u300b",id:"149",hide_title:!0},l={unversionedId:"149",id:"149",isDocsHomePage:!1,title:"149. \u7cbe\u8bfb\u300aReact \u6027\u80fd\u8c03\u8bd5\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/149. \u7cbe\u8bfb\u300aReact \u6027\u80fd\u8c03\u8bd5\u300b.md",slug:"/149",permalink:"/weekly/149",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/149. \u7cbe\u8bfb\u300aReact \u6027\u80fd\u8c03\u8bd5\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1618195991,formattedLastUpdatedAt:"4/12/2021",sidebar:"weekly",previous:{title:"148. \u7cbe\u8bfb\u300aReact Error Boundaries\u300b",permalink:"/weekly/148"},next:{title:"150. \u7cbe\u8bfb\u300aDeno 1.0 \u4f60\u9700\u8981\u4e86\u89e3\u7684\u300b",permalink:"/weekly/150"}},o=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u7cbe\u8bfb",id:"2-\u7cbe\u8bfb",children:[{value:"React Profiler",id:"react-profiler",children:[]},{value:"Tracing API",id:"tracing-api",children:[]},{value:"Puppeteer",id:"puppeteer",children:[]},{value:"User Timing API",id:"user-timing-api",children:[]}]},{value:"3 \u603b\u7ed3",id:"3-\u603b\u7ed3",children:[]}],p={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(c.b)("p",null,"\u5728\u6570\u636e\u4e2d\u53f0\u505a BI \u5de5\u5177\u7ecf\u5e38\u9762\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u6e32\u67d3\u5904\u7406\uff0c\u9664\u4e86\u7ec4\u4ef6\u672c\u8eab\u6027\u80fd\u4f18\u5316\u4e4b\u5916\uff0c\u7ecf\u5e38\u8981\u6392\u67e5\u6574\u4f53\u9875\u9762\u6027\u80fd\u74f6\u9888\u70b9\uff0c\u5c24\u5176\u662f\u7ef4\u62a4\u4e00\u4e9b\u6027\u80fd\u505a\u5f97\u5e76\u4e0d\u597d\u7684\u65e7\u4ee3\u7801\u65f6\u3002"),Object(c.b)("p",null,"React \u6027\u80fd\u8c03\u8bd5\u662f\u9762\u5bf9\u8fd9\u79cd\u95ee\u9898\u7684\u5fc5\u4fee\u8bfe\uff0c\u501f\u52a9 ",Object(c.b)("a",{parentName:"p",href:"https://addyosmani.com/blog/profiling-react-js/"},"Profiling React.js Performance")," \u8fd9\u7bc7\u6587\u7ae0\u4e00\u8d77\u5b66\u4e60\u4e00\u4e0b\u8fd9\u4e2a\u6280\u80fd\u5427\u3002"),Object(c.b)("h2",{id:"2-\u7cbe\u8bfb"},"2 \u7cbe\u8bfb"),Object(c.b)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u4f17\u591a\u6027\u80fd\u68c0\u6d4b\u5de5\u5177\u4e0e\u65b9\u6cd5\u3002"),Object(c.b)("h3",{id:"react-profiler"},"React Profiler"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Profiler")," \u8fd9\u4e2a API \u662f\u4e00\u79cd\u8fd0\u884c\u65f6 Debug \u7684\u8865\u5145\uff0c\u53ef\u4ee5\u901a\u8fc7\u5176 callback \u62ff\u5230\u7ec4\u4ef6\u6e32\u67d3\u4fe1\u606f\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'const Movies = ({ movies, addToQueue }) => (\n  <React.Profiler id="Movies" onRender={callback}>\n    <div />\n  </React.Profiler>\n);\n\nfunction callback(\n  id,\n  phase,\n  actualTime,\n  baseTime,\n  startTime,\n  commitTime,\n  interactions\n) {}\n')),Object(c.b)("p",null,"\u8fd9\u4e2a callback \u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u6267\u884c\uff0c\u6e32\u67d3\u5206\u4e3a\u521d\u59cb\u5316\u548c\u66f4\u65b0\u9636\u6bb5\uff0c\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"phase")," \u533a\u5206\uff0c\u4e0b\u9762\u662f\u53c2\u6570\u8be6\u7ec6\u8bf4\u660e\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"id: \u4f20\u5165\u7684 id\u3002"),Object(c.b)("li",{parentName:"ul"},'phase: "mount" \u6216 "update"\uff0c\u8868\u793a\u66f4\u65b0\u72b6\u6001\u3002'),Object(c.b)("li",{parentName:"ul"},"actualDuration: \u5b9e\u9645\u6e32\u67d3\u8017\u65f6\u3002"),Object(c.b)("li",{parentName:"ul"},"baseDuration: \u6ca1\u6709\u4f7f\u7528 memo \u65f6\u7684\u6e32\u67d3\u9884\u8ba1\u8017\u65f6\u3002"),Object(c.b)("li",{parentName:"ul"},"startTime: \u5f00\u59cb\u6e32\u67d3\u7684\u65f6\u95f4\u3002"),Object(c.b)("li",{parentName:"ul"},"commitTime: React \u63d0\u4ea4\u66f4\u65b0\u7684\u65f6\u95f4"),Object(c.b)("li",{parentName:"ul"},"interactions: \u4f55\u79cd\u539f\u56e0\u5bfc\u81f4\u7684\u6e32\u67d3\uff0c\u6bd4\u5982 ",Object(c.b)("inlineCode",{parentName:"li"},"setState")," \u6216 hooks changed \u4e4b\u7c7b\u3002")),Object(c.b)("p",null,"\u6ce8\u610f\u5c3d\u91cf\u4e0d\u8981\u8f7b\u6613\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"Profiler")," \u68c0\u6d4b\u6027\u80fd\uff0c\u56e0\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"Profiler")," \u672c\u8eab\u4e5f\u4f1a\u6d88\u8017\u6027\u80fd\u3002"),Object(c.b)("p",null,"\u5982\u679c\u4e0d\u60f3\u83b7\u5f97\u8fd9\u4e48\u8be6\u7ec6\u7684\u6e32\u67d3\u8017\u65f6\uff0c\u6216\u8005\u4e0d\u60f3\u63d0\u524d\u5728\u4ee3\u7801\u4e2d\u57cb\u70b9\uff0c\u53ef\u4ee5\u5229\u7528 DevTools \u7684 Profiler \u67e5\u770b\u66f4\u76f4\u89c2\u66f4\u7b80\u6d01\u7684\u6e32\u67d3\u8017\u65f6\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412101335.png",alt:null})),Object(c.b)("p",null,"\u5176\u4e2d Ranked \u53ef\u4ee5\u5c55\u793a\u6309\u7167\u6e32\u67d3\u8017\u65f6\u6392\u5e8f\u540e\u7684\u7ed3\u679c\uff0cInterations \u9700\u8981\u914d\u5408 Tracing API \u4f7f\u7528\uff0c\u5728\u540e\u9762\u4f1a\u63d0\u5230\u3002"),Object(c.b)("h3",{id:"tracing-api"},"Tracing API"),Object(c.b)("p",null,"\u5229\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"scheduler/tracing")," \u63d0\u4f9b\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"trace")," API\uff0c\u6211\u4eec\u53ef\u4ee5\u8bb0\u5f55\u67d0\u4e2a\u52a8\u4f5c\u7684\u8017\u65f6\uff0c\u6bd4\u5982 \u201c\u70b9\u51fb\u6dfb\u52a0\u6309\u94ae\u6536\u85cf\u4e00\u4e2a\u7535\u5f71\u201d \u8017\u65f6\u591a\u4e45\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import { render } from "react-dom";\nimport { unstable_trace as trace } from "scheduler/tracing";\n\nclass MyComponent extends Component {\n  addMovieButtonClick = (event) => {\n    trace("Add To Movies Queue click", performance.now(), () => {\n      this.setState({ itemAddedToQueue: true });\n    });\n  };\n}\n')),Object(c.b)("p",null,"\u5728 Interations \u4e2d\u53ef\u4ee5\u770b\u5230\u52a8\u4f5c\u89e6\u53d1\u7684\u8017\u65f6\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412101359.png",alt:null})),Object(c.b)("p",null,"\u8fd9\u4e2a\u52a8\u4f5c\u8fd8\u53ef\u4ee5\u662f\u6e32\u67d3\uff0c\u6bd4\u5982\u53ef\u4ee5\u8bb0\u5f55 ReactDOM \u6e32\u67d3\u7684\u8017\u65f6\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import { unstable_trace as trace } from "scheduler/tracing";\n\ntrace("initial render", performance.now(), () => {\n  ReactDom.render(<App />, document.getElementById("app"));\n});\n')),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412101455.png",alt:null})),Object(c.b)("p",null,"\u751a\u81f3\u8fd8\u53ef\u4ee5\u8ffd\u8e2a\u5f02\u6b65\u7684\u8017\u65f6\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import {\n  unstable_trace as trace,\n  unstable_wrap as wrap,\n} from "scheduler/tracing";\n\ntrace("Some event", performance.now(), () => {\n  setTimeout(\n    wrap(() => {\n      // \u5f02\u6b65\u64cd\u4f5c\n    })\n  );\n});\n')),Object(c.b)("p",null,"\u6709\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"Profiler")," \u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"trace")," \u8fd9\u4e24\u4ef6\u6b66\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u76d1\u63a7\u4efb\u610f\u5143\u7d20\u7684\u6e32\u67d3\u8017\u65f6\u4e0e\u4ea4\u4e92\u8017\u65f6\uff0c\u51e0\u4e4e\u53ef\u4ee5\u6db5\u76d6\u6240\u6709\u6027\u80fd\u76d1\u63a7\u9700\u8981\u3002"),Object(c.b)("h3",{id:"puppeteer"},"Puppeteer"),Object(c.b)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u5229\u7528 Puppeteer \u5b9e\u73b0\u81ea\u52a8\u5316\u64cd\u4f5c\u5e76\u6253\u5370\u62a5\u544a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'const puppeteer = require("puppeteer");\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  const navigationPromise = page.waitForNavigation();\n  await page.goto("https://react-movies-queue.glitch.me/");\n  await page.setViewport({ width: 1276, height: 689 });\n  await navigationPromise;\n\n  const addMovieToQueueBtn =\n    "li:nth-child(3) > .card > .card__info > div > .button";\n  await page.waitForSelector(addMovieToQueueBtn);\n\n  // Begin profiling...\n  await page.tracing.start({ path: "profile.json" });\n  // Click the button\n  await page.click(addMovieToQueueBtn);\n  // Stop profliling\n  await page.tracing.stop();\n\n  await browser.close();\n})();\n')),Object(c.b)("p",null,"\u9996\u5148\u5229\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"puppeteer")," \u521b\u5efa\u4e00\u4e2a\u6d4f\u89c8\u5668\uff0c\u65b0\u5efa\u4e00\u4e2a\u9875\u9762\u5e76\u6253\u5f00 ",Object(c.b)("inlineCode",{parentName:"p"},"https://react-movies-queue.glitch.me/")," \u8fd9\u4e2a URL\uff0c\u7b49\u5f85\u9875\u9762\u52a0\u8f7d\u5b8c\u6bd5\u540e\u5229\u7528 DOM \u9009\u62e9\u5668\u627e\u5230\u6309\u94ae\uff0c\u5229\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"page.click")," API \u6a21\u62df\u70b9\u51fb\u8fd9\u4e2a\u6309\u94ae\uff0c\u5e76\u5728\u524d\u540e\u5229\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"page.tracing")," \u8bb0\u5f55\u6027\u80fd\u53d8\u5316\uff0c\u5e76\u5c06\u8fd9\u4e2a\u6587\u4ef6\u4e0a\u4f20\u5230 DevTools Performance \u9762\u677f\uff0c\u5c31\u4f1a\u5f97\u5230\u4e00\u4efd\u81ea\u52a8\u7684\u6027\u80fd\u68c0\u6d4b\u62a5\u544a\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412101511.png",alt:null})),Object(c.b)("p",null,"\u8fd9\u5f20\u56fe\u76f8\u5f53\u91cd\u8981\uff0c\u662f\u6d4f\u89c8\u5668\u7efc\u5408\u8fd0\u884c\u5f00\u9500\u5206\u6790\u7684\u5229\u5668\uff0c\u6700\u4e0a\u9762\u5206\u4e3a 4 \u4e2a\u90e8\u5206\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"FPS\uff1a\u6bcf\u79d2\u5e27\u6570\uff0c\u7eff\u8272\u7ad6\u7ebf\u8d8a\u9ad8\u8868\u793a FPS \u8d8a\u9ad8\uff0c\u51fa\u73b0\u7ea2\u7ebf\u5219\u8868\u793a\u51fa\u73b0\u4e86\u5361\u987f\u3002"),Object(c.b)("li",{parentName:"ul"},"CPU\uff1aCPU \u8d44\u6e90\uff0c\u7528\u9762\u79ef\u56fe\u5c55\u793a\u6d88\u8017 CPU \u8d44\u6e90\u7684\u4e8b\u4ef6\u3002"),Object(c.b)("li",{parentName:"ul"},"NET\uff1a\u7f51\u7edc\u6d88\u8017\uff0c\u6bcf\u6761\u6a2a\u6760\u8868\u793a\u4e00\u79cd\u8d44\u6e90\u7684\u52a0\u8f7d\u3002"),Object(c.b)("li",{parentName:"ul"},"HEAP\uff1a\u5185\u5b58\u6c34\u4f4d\uff0c\u7531\u4e8e\u77ed\u65f6\u95f4\u5185\u770b\u4e0d\u51fa\u6765\u662f\u5426\u4f1a\u5185\u5b58\u6ea2\u51fa\uff0c\u4e00\u822c\u53ea\u7528\u6765\u7b80\u5355\u770b\u770b\u5185\u5b58\u6d88\u8017\u662f\u5426\u7b26\u5408\u9884\u671f\uff0c\u5bf9\u4e8e\u5185\u5b58\u6ea2\u51fa\u7684\u68c0\u6d4b\u9700\u8981\u7528\u6301\u7eed\u76d1\u63a7\u4e0a\u62a5\u7684\u65b9\u5f0f\u3002")),Object(c.b)("p",null,"\u4e0b\u9762\u4f1a\u6709\u4e00\u5f20 Network \u8be6\u7ec6\u56fe\u89e3\uff0c\u6bd4\u5982\u8fd9\u5f20\u56fe\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412101537.png",alt:null})),Object(c.b)("p",null,"\u7ec6\u7ebf\u8868\u793a\u7b49\u5f85\u7684\u65f6\u95f4\uff0c\u7c97\u7ebf\u8868\u793a\u5b9e\u9645\u52a0\u8f7d\u7684\u60c5\u51b5\uff0c\u5176\u4e2d\u6d45\u8272\u90e8\u5206\u8868\u793a\u670d\u52a1\u5668\u7b49\u5f85\u65f6\u95f4\uff0c\u5373\u4ece\u53d1\u9001\u4e0b\u8f7d\u8bf7\u6c42\u5230\u670d\u52a1\u5668\u54cd\u5e94\u7b2c\u4e00\u4e2a\u5b57\u8282\u7684\u65f6\u95f4\u3002\u8fd9\u90e8\u5206\u53ef\u4ee5\u770b\u51fa\u8d44\u6e90\u5e76\u884c\u52a0\u8f7d\u963b\u585e\u60c5\u51b5\u4ee5\u53ca\u8d44\u6e90\u670d\u52a1\u5668\u54cd\u5e94\u65f6\u95f4\u662f\u5426\u5b58\u5728\u95ee\u9898\u3002"),Object(c.b)("p",null,"Timings \u5c55\u793a\u4e86\u51e0\u4e2a\u91cd\u8981\u65f6\u95f4\u8282\u70b9\uff0c\u8fd9\u91cc\u5217\u4e3e\u4e00\u90e8\u5206\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"FP\uff1aFirst Paint\uff0c\u7b2c\u4e00\u6b21\u7ed8\u5236\u3002"),Object(c.b)("li",{parentName:"ul"},"FCP\uff1aFirst Contentful Paint\uff0c\u7b2c\u4e00\u6b21\u5185\u5bb9\u7ed8\u5236\u3002"),Object(c.b)("li",{parentName:"ul"},"LCP\uff1aLargest Contentful Paint\uff0c\u6700\u5927\u5185\u5bb9\u7ed8\u5236\u3002"),Object(c.b)("li",{parentName:"ul"},"DCL\uff1aDocument Content Loaded\uff0cDOM \u5185\u5bb9\u52a0\u8f7d\u5b8c\u6bd5\u3002")),Object(c.b)("p",null,"\u518d\u4e0b\u9762\u662f JS \u8ba1\u7b97\u6d88\u8017\uff0c\u7528\u4e86\u4e00\u5f20\u706b\u7130\u56fe\uff0c\u706b\u7130\u56fe\u662f\u6027\u80fd\u5206\u6790\u7684\u5e38\u7528\u53ef\u89c6\u5316\u5de5\u5177\u3002\u4ee5\u4e0b\u9762\u8fd9\u5f20\u56fe\u4e3a\u4f8b\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210412101557.png",alt:null})),Object(c.b)("p",null,"\u770b\u706b\u7130\u56fe\u9996\u5148\u770b\u8de8\u5ea6\u6700\u957f\u7684\u51fd\u6570\uff0c\u4e5f\u5c31\u662f\u6700\u957f\u7684\u90a3\u6761\u7ebf\uff0c\u8fd9\u662f\u6700\u8017\u65f6\u7684\u90e8\u5206\uff0c\u4ece\u5de6\u5230\u53f3\u662f\u6d4f\u89c8\u5668\u811a\u672c\u7684\u8c03\u7528\u987a\u5e8f\uff0c\u4ece\u4e0a\u5230\u4e0b\u662f\u51fd\u6570\u5d4c\u5957\u7684\u987a\u5e8f\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u9f20\u6807\u4f4d\u7f6e\u7684 34 \u8fd9\u4e2a\u51fd\u6570\u867d\u7136\u957f\uff0c\u4f46\u5e76\u4e0d\u662f\u6027\u80fd\u74f6\u9888\uff0c\u56e0\u4e3a\u4e0b\u9762\u6267\u884c\u7684 n \u51fd\u6570\u957f\u5ea6\u548c\u5b83\u4e00\u6837\uff0c\u8868\u793a 34 \u51fd\u6570\u7684\u6027\u80fd\u51e0\u4e4e\u65e0\u635f\u8017\uff0c\u5176\u6027\u80fd\u7531\u5176\u8c03\u7528\u7684 n \u51fd\u6570\u51b3\u5b9a\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u8fd9\u79cd\u65b9\u5f0f\u4e00\u6b65\u6b65\u6392\u67e5\u5230\u53f6\u5b50\u7ed3\u70b9\uff0c\u627e\u5230\u5bf9\u6027\u80fd\u5f71\u54cd\u6700\u5927\u7684\u5143\u5b50\u51fd\u6570\u3002"),Object(c.b)("h3",{id:"user-timing-api"},"User Timing API"),Object(c.b)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u5229\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"performance.mark")," \u81ea\u5b9a\u4e49\u6027\u80fd\u68c0\u6d4b\u8282\u70b9\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'// Record the time before running a task\nperformance.mark("Movies:updateStart");\n// Do some work\n\n// Record the time after running a task\nperformance.mark("Movies:updateEnd");\n\n// Measure the difference between the start and end of the task\nperformance.measure("moviesRender", "Movies:updateStart", "Movies:updateEnd");\n')),Object(c.b)("p",null,"\u8fd9\u4e9b\u8282\u70b9\u53ef\u4ee5\u5728\u4e0a\u9762\u4ecb\u7ecd\u7684 Performance \u9762\u677f\u4e2d\u5c55\u793a\u51fa\u6765\u7528\u4e8e\u81ea\u5b9a\u4e49\u5206\u6790\u3002"),Object(c.b)("h2",{id:"3-\u603b\u7ed3"},"3 \u603b\u7ed3"),Object(c.b)("p",null,"\u5229\u7528 Performance \u8fdb\u884c\u901a\u7528\u6027\u80fd\u5206\u6790\uff0c\u5229\u7528 React Profiler \u8fdb\u884c React \u5b9a\u5236\u6027\u80fd\u5206\u6790\uff0c\u8fd9\u4e24\u4e2a\u7ed3\u5408\u5728\u4e00\u8d77\u51e0\u4e4e\u53ef\u4ee5\u5b8c\u6210\u4efb\u4f55\u6027\u80fd\u68c0\u6d4b\u3002"),Object(c.b)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u9996\u5148\u5e94\u8be5\u7528 React Profiler \u8fdb\u884c React \u5c42\u9762\u7684\u95ee\u9898\u7b5b\u67e5\uff0c\u8fd9\u6837\u66f4\u76f4\u89c2\uff0c\u66f4\u5bb9\u6613\u5b9a\u4f4d\u95ee\u9898\u3002\u5982\u679c\u67d0\u4e9b\u95ee\u9898\u8df3\u51fa\u4e86 React \u6846\u67b6\u8303\u56f4\uff0c\u6216\u8005\u4e0d\u518d\u80fd\u4ee5\u7ec4\u4ef6\u7c92\u5ea6\u8fdb\u884c\u5ea6\u91cf\uff0c\u6211\u4eec\u53ef\u4ee5\u56de\u5230 Performance \u9762\u677f\u8fdb\u884c\u901a\u7528\u6027\u80fd\u5206\u6790\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/247"},"\u7cbe\u8bfb\u300aReact \u6027\u80fd\u8c03\u8bd5\u300b \xb7 Issue #247 \xb7 dt-fe/weekly"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(c.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(c.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}b.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||c;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);