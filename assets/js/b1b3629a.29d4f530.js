(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(385)),c={title:"16. CSS Animations vs Web Animations API",id:"016",hide_title:!0},o={unversionedId:"016",id:"016",isDocsHomePage:!1,title:"16. CSS Animations vs Web Animations API",description:"\u672c\u671f\u7cbe\u8bfb\u6587\u7ae0 CSS Animations vs Web Animations API | CSS-Tricks",source:"@site/weekly/016.CSS Animations vs Web Animations API.md",slug:"/016",permalink:"/weekly/016",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/016.CSS Animations vs Web Animations API.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"15. \u7cbe\u8bfb TC39 \u4e0e ECMAScript \u63d0\u6848",permalink:"/weekly/015"},next:{title:"17. \u7cbe\u8bfb\u300a\u5982\u4f55\u5b89\u5168\u5730\u4f7f\u7528 React context\u300b",permalink:"/weekly/017"}},l=[{value:"1. \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2. \u5185\u5bb9\u6982\u8981",id:"2-\u5185\u5bb9\u6982\u8981",children:[{value:"1. event \u65b9\u5f0f",id:"1-event-\u65b9\u5f0f",children:[]},{value:"2. promise \u65b9\u5f0f",id:"2-promise-\u65b9\u5f0f",children:[]}]},{value:"3. \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"WAAPI \u4f18\u96c5\u7b80\u6d01",id:"waapi-\u4f18\u96c5\u7b80\u6d01",children:[]},{value:"\u4f4e\u8026\u5408",id:"\u4f4e\u8026\u5408",children:[]},{value:"\u517c\u5bb9\u6027\u548c\u6d41\u7545\u5ea6",id:"\u517c\u5bb9\u6027\u548c\u6d41\u7545\u5ea6",children:[]}]},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u6587\u7ae0 ",Object(i.b)("a",{parentName:"p",href:"https://css-tricks.com/css-animations-vs-web-animations-api/"},"CSS Animations vs Web Animations API | CSS-Tricks")),Object(i.b)("p",null,"\u8bd1\u6587\u5730\u5740 ",Object(i.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/27867539?refer=FrontendMagazine"},"CSS Animation \u4e0e Web Animation API \u4e4b\u4e89")),Object(i.b)("h2",{id:"1-\u5f15\u8a00"},"1. \u5f15\u8a00"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408175938.png",alt:null})),Object(i.b)("p",null,"\u524d\u7aef\u662f\u4e00\u4e2a\u5f88\u795e\u5947\u7684\u5de5\u79cd\uff0c\u4e00\u4e2a\u5408\u683c\u7684\u524d\u7aef\u81f3\u5c11\u8981\u719f\u7ec3\u7684\u4f7f\u7528 3 \u4e2a\u6280\u80fd\uff0chtml\u3001css \u548c javascript\u3002\u5728\u4f20\u7edf\u7684\u524d\u7aef\u5f00\u53d1\u9886\u57df\u5b83\u4eec\u4e09\u4e2a\u5927\u591a\u65f6\u5019\u662f\u5404\u53f8\u5176\u804c\uff0c\u5206\u522b\u8d1f\u8d23\u5e03\u5c40\u3001\u6837\u5f0f\u4ee5\u53ca\u4ea4\u4e92\u3002\u800c\u5728\u5f53\u4ee3\u7684\u524d\u7aef\u5f00\u53d1\u4e2d\uff0c\u7531\u4e8e\u591a\u79cd\u539f\u56e0 javascript \u505a\u7684\u4e8b\u60c5\u6108\u6765\u6108\u591a\uff0c\u5927\u6709\u4e00\u7edf\u5168\u6808\u4e4b\u52bf\u3002\u670d\u52a1\u7aef\u7684 nodejs\uff0c\u8ba9\u524d\u7aef\u540c\u5b66\u53ef\u4ee5\u7528\u81ea\u5df1\u7684\u8bed\u8a00\u6765\u5f00\u53d1 server\u3002\u5373\u4fbf\u662f\u5728\u524d\u7aef\uff0c\u6211\u4eec\u73b0\u5728\u597d\u50cf\u4e5f\u5f88\u5c11\u5199 html \u4e86\uff0c\u5728 React \u4e2d\u51fa\u6765\u4e86 JSX\uff0c\u5728\u5176\u4ed6\u7684\u5f00\u53d1\u4f53\u7cfb\u4e2d\u4e5f\u6709\u4e0e\u4e4b\u7c7b\u4f3c\u7684\u524d\u7aef\u6a21\u677f\u4ee3\u66ff\u4e86 html\u3002\u6211\u4eec\u597d\u50cf\u4e5f\u5f88\u5c11\u5199 css \u4e86\uff0csass\u3001less\u3001stylus \u7b49\u9884\u5904\u7406\u5668\u4ee5\u53ca css in js \u51fa\u73b0\u3002\u6b64\u5916\uff0c\u5f88\u591a css \u9886\u57df\u7684\u7684\u5de5\u4f5c\u4e5f\u53ef\u4ee5\u901a\u8fc7 javascript \u4ee5\u66f4\u52a0\u4f18\u96c5\u548c\u9ad8\u6548\u7684\u65b9\u5f0f\u5b9e\u73b0\u3002\u4eca\u5929\u6211\u4eec\u6765\u4e00\u8d77\u804a\u804a CSS \u52a8\u753b\u4e0e WEB Animation API \u7684\u4f18\u52a3\u3002"),Object(i.b)("h2",{id:"2-\u5185\u5bb9\u6982\u8981"},"2. \u5185\u5bb9\u6982\u8981"),Object(i.b)("p",null,"JavaScript \u89c4\u8303\u786e\u5b9e\u501f\u9274\u4e86\u5f88\u591a\u793e\u533a\u5185\u7684\u4f18\u79c0\u7c7b\u5e93\uff0c\u901a\u8fc7\u539f\u751f\u5b9e\u73b0\u7684\u65b9\u5f0f\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\u3002WAAPI \u63d0\u4f9b\u4e86\u4e0e jQuery \u7c7b\u4f3c\u7684\u8bed\u6cd5\uff0c\u540c\u65f6\u4e5f\u505a\u4e86\u5f88\u591a\u8865\u5145\uff0c\u4f7f\u5f97\u5176\u66f4\u52a0\u7684\u5f3a\u5927\u3002\u540c\u65f6 W3C \u5b98\u65b9\u4e5f\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86 ",Object(i.b)("a",{parentName:"p",href:"https://github.com/web-animations/web-animations-js/tree/master"},"web-animations/web-animations-js")," polyfill\u3002\u4e0b\u9762\u7b80\u5355\u56de\u987e\u4e0b\u6587\u7ae0\u5185\u5bb9\uff1a"),Object(i.b)("p",null,"WAAPI \u63d0\u4f9b\u4e86\u5f88\u7b80\u6d01\u660e\u4e86\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728 dom \u5143\u7d20\u4e0a\u76f4\u63a5\u8c03\u7528 animate \u51fd\u6570\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"var element = document.querySelector('.animate-me');\nvar animation = element.animate(keyframes, 1000);\n")),Object(i.b)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\u6570\u7ec4\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u8868\u793a\u52a8\u753b\u4e2d\u7684\u4e00\u5e27\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"var keyframes = [\n  { opacity: 0 },\n  { opacity: 1 }\n];\n")),Object(i.b)("p",null,"\u8fd9\u4e0e css \u4e2d\u7684 keyframe \u5b9a\u4e49\u7c7b\u4f3c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-css"},"0% {\n  opacity: 0;\n}\n100% {\n  opacity: 1;\n}\n")),Object(i.b)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f duration\uff0c\u8868\u793a\u52a8\u753b\u7684\u65f6\u95f4\u3002\u540c\u65f6\u4e5f\u652f\u6301\u5728\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e2d\u4f20\u5165\u914d\u7f6e\u9879\u6765\u6307\u5b9a\u7f13\u52a8\u65b9\u5f0f\u3001\u5faa\u73af\u6b21\u6570\u7b49\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"var options = {\n  iterations: Infinity, // \u52a8\u753b\u7684\u91cd\u590d\u6b21\u6570\uff0c\u9ed8\u8ba4\u662f 1\n  iterationStart: 0, // \u7528\u4e8e\u6307\u5b9a\u52a8\u753b\u5f00\u59cb\u7684\u8282\u70b9\uff0c\u9ed8\u8ba4\u662f 0\n  delay: 0, // \u52a8\u753b\u5ef6\u8fdf\u5f00\u59cb\u7684\u6beb\u79d2\u6570\uff0c\u9ed8\u8ba4 0\n  endDelay: 0, // \u52a8\u753b\u7ed3\u675f\u540e\u5ef6\u8fdf\u7684\u6beb\u79d2\u6570\uff0c\u9ed8\u8ba4 0\n  direction: 'alternate', // \u52a8\u753b\u7684\u65b9\u5411 \u9ed8\u8ba4\u662f\u6309\u7167\u4e00\u4e2a\u65b9\u5411\u7684\u52a8\u753b\uff0calternate \u5219\u8868\u793a\u4ea4\u66ff\n  duration: 700, // \u52a8\u753b\u6301\u7eed\u65f6\u95f4\uff0c\u9ed8\u8ba4 0\n  fill: 'forwards', // \u662f\u5426\u5728\u52a8\u753b\u7ed3\u675f\u65f6\u56de\u5230\u5143\u7d20\u5f00\u59cb\u52a8\u753b\u524d\u7684\u72b6\u6001\n  easing: 'ease-out', // \u7f13\u52a8\u65b9\u5f0f\uff0c\u9ed8\u8ba4 \"linear\"\n};\n")),Object(i.b)("p",null,"\u6709\u4e86\u8fd9\u4e9b\u914d\u7f6e\u9879\uff0c\u57fa\u672c\u53ef\u4ee5\u6ee1\u8db3\u5f00\u53d1\u8005\u7684\u52a8\u753b\u9700\u6c42\u3002\u540c\u65f6\uff0c\u6587\u4e2d\u4e5f\u63d0\u5230\u4e86\u5728 WAAPI \u4e2d\u5f88\u591a\u4e13\u4e1a\u672f\u8bed\u4e0e CSS \u53d8\u91cf\u6709\u6240\u4e0d\u540c\uff0c\u4e0d\u8fc7\u8fd9\u4e9b\u53d8\u5316\u4e5f\u66f4\u663e\u7b80\u6d01\u3002"),Object(i.b)("p",null,"\u5728 dom \u5143\u7d20\u4e0a\u8c03\u7528 animate \u51fd\u6570\u4e4b\u540e\u8fd4\u56de animation \u5bf9\u8c61\uff0c\u6216\u8005\u901a\u8fc7 ele.getAnimation \u65b9\u6cd5\u83b7\u53d6 dom \u4e0a\u7684 animation \u5bf9\u8c61\u3002\u501f\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7 promise \u548c event \u4e24\u79cd\u65b9\u5f0f\u5bf9\u52a8\u753b\u8fdb\u884c\u64cd\u4f5c\uff1a"),Object(i.b)("h3",{id:"1-event-\u65b9\u5f0f"},"1. event \u65b9\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"myAnimation.onfinish = function() {\n  element.remove();\n}\n")),Object(i.b)("h3",{id:"2-promise-\u65b9\u5f0f"},"2. promise \u65b9\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"myAnimation.finished.then(() =>\n  element.remove())\n")),Object(i.b)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u76f8\u5bf9 dom \u4e8b\u4ef6\u83b7\u53d6\u66f4\u52a0\u7684\u7b80\u6d01\u4f18\u96c5\u3002"),Object(i.b)("h2",{id:"3-\u7cbe\u8bfb"},"3. \u7cbe\u8bfb"),Object(i.b)("p",null,"\u53c2\u4e0e\u672c\u6b21\u7cbe\u5ea6\u7684\u540c\u5b66\u4e3b\u8981\u6765\u81ea ",Object(i.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/FrontendMagazine"},"\u524d\u7aef\u5916\u520a\u8bc4\u8bba - \u77e5\u4e4e\u4e13\u680f")," \u7684\u7559\u8a00\uff0c\u8be5\u90e8\u5206\u4e3b\u8981\u7531\u6587\u7ae0\u8bc4\u8bba\u603b\u7ed3\u800c\u51fa\u3002"),Object(i.b)("h3",{id:"waapi-\u4f18\u96c5\u7b80\u6d01"},"WAAPI \u4f18\u96c5\u7b80\u6d01"),Object(i.b)("p",null,"web animation \u7684 api \u8bbe\u8ba1\u4f18\u96c5\u800c\u53c8\u5168\u9762\u3002\u6587\u4e2d\u6bd4\u5bf9\u4e86\u5e38\u89c1\u7684 WAAPI \u4e0e CSS Animation \u5bf9\u7167\u5173\u7cfb\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 WAAPI \u66f4\u52a0\u7b80\u6d01\uff0c\u800c\u4e14\u8bed\u6cd5\u4e0a\u4e5f\u66f4\u52a0\u5bb9\u6613\u4e3a\u5f00\u53d1\u8005\u63a5\u53d7\u3002\u786e\u5b9e\uff0c\u5728\u5199\u4e00\u4e9b\u590d\u6742\u7684\u52a8\u753b\u903b\u8f91\u65f6\uff0c\u9700\u8981\u7075\u6d3b\u63a7\u5236\u6027\u5f3a\u7684\u63a5\u53e3\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u5904\u7406\u4e32\u8fde\u591a\u4e2a\u52a8\u753b\u3001\u622a\u53d6\u5b8c\u6574\u52a8\u753b\u7684\u4e00\u90e8\u5206\u65f6\u66f4\u52a0\u65b9\u4fbf\u3002\u5982\u679c\u975e\u8981\u8bf4\u6709\u4ec0\u4e48\u52a3\u52bf\uff0c\u4e2a\u4eba\u5728\u5f00\u53d1\u4e2d\u611f\u89c9 keyframe \u7684\u5f88\u591a\u53ea\u90fd\u53ea\u80fd\u4f7f\u7528\u5b57\u7b26\u4e32\uff0c\u4e0d\u8fc7\u8fd9\u4e5f\u662f\u5c06 css \u5199\u5728 js \u4e2d\u6700\u5e38\u89c1\u7684\u4e00\u79cd\u65b9\u5f0f\u4e86\u3002"),Object(i.b)("h3",{id:"\u4f4e\u8026\u5408"},"\u4f4e\u8026\u5408"),Object(i.b)("p",null,"CSS \u52a8\u753b\u4e2d\uff0c\u5982\u679c\u9700\u8981\u63a7\u5236\u52a8\u753b\u6216\u8005\u8fc7\u6e21\u7684\u5f00\u59cb\u6216\u7ed3\u675f\u53ea\u80fd\u901a\u8fc7\u76f8\u5e94\u7684 dom \u4e8b\u4ef6\u6765\u76d1\u542c\uff0c\u5e76\u4e14\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u64cd\u4f5c\uff0c\u8fd9\u4e5f\u662f\u53d7 CSS \u672c\u8eab\u8bed\u8a00\u7279\u6027\u7ea6\u675f\u6240\u81f4\u3002\u4e5f\u5c31\u662f\u8bf4\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u60f3\u8981\u5b8c\u6210\u4e00\u4e2a\u52a8\u753b\u9700\u8981\u7ed3\u5408 CSS \u548c JS \u6765\u5171\u540c\u5b8c\u6210\u3002\u4f7f\u7528 WAAPI \u5219\u6709 promise \u548c event \u4e24\u79cd\u65b9\u5f0f\u4e0e\u76d1\u542c dom \u4e8b\u4ef6\u76f8\u5bf9\u5e94\u3002\u4ece\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u548c\u5b8c\u6574\u6027\u4e0a\u770b WAAPI \u6709\u81ea\u8eab\u8bed\u8a00\u4e0a\u7684\u4f18\u52bf\u3002"),Object(i.b)("h3",{id:"\u517c\u5bb9\u6027\u548c\u6d41\u7545\u5ea6"},"\u517c\u5bb9\u6027\u548c\u6d41\u7545\u5ea6"),Object(i.b)("p",null,"\u517c\u5bb9\u6027\u4e0a WAAPI \u5e38\u7528\u65b9\u6cd5\u5df2\u7ecf\u517c\u5bb9\u4e86\u5927\u90e8\u5206\u73b0\u4ee3\u7684\u6d4f\u89c8\u5668\u3002\u5982\u679c\u60f3\u73b0\u5728\u5c31\u73a9\u73a9 WAAPI\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684 polyfill\u3002\u800c CSS \u52a8\u753b\u6211\u4eec\u4e5f\u7528\u4e86\u5f88\u4e45\uff0c\u57fa\u672c\u4f5c\u4e3a\u4e00\u79cd\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e2d\u63d0\u5347\u4f53\u9a8c\u7684\u65b9\u5f0f\uff0c\u5bf9\u4e8e\u8001\u65e7\u7684\u6d4f\u89c8\u5668\u53ea\u80fd\u7528\u4e00\u4e9b\u4f18\u96c5\u7684\u964d\u7ea7\u65b9\u6848\u3002\u81f3\u4e8e\u6d41\u7545\u5ea6\u7684\u95ee\u9898\uff0c\u6587\u4e2d\u4e5f\u63d0\u5230\u6027\u80fd\u4e0e CSS \u52a8\u753b\u4e00\u822c\uff0c\u800c\u4e14\u63d0\u4f9b\u4e86\u6027\u80fd\u4f18\u5316\u7684\u65b9\u6848\u3002"),Object(i.b)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),Object(i.b)("p",null,"\u76ee\u524d\u770b\u6765\uff0cCSS \u52a8\u753b\u53ef\u4ee5\u505a\u5230\u7684\uff0c\u4f7f\u7528 WAAPI \u540c\u6837\u53ef\u4ee5\u5b9e\u73b0\u3002\u81f3\u4e8e\u6d4f\u89c8\u5668\u652f\u6301\u95ee\u9898\uff0cWAAPI \u5c1a\u9700\u8981 polyfill \u652f\u6301\uff0c\u4e0d\u8fc7 CSS \u52a8\u753b\u4e5f\u540c\u6837\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\u3002\u53ef\u80fd\u73b0\u5728\u65b0\u7684 API \u7684\u63a5\u53d7\u5ea6\u8fd8\u4e0d\u591f\uff0c\u4f46\u6b63\u5982\u6587\u7ae0\u7ed3\u5c3e\u5904\u6240\u8bf4\uff1a\u300e\u73b0\u6709\u7684\u89c4\u8303\u548c\u5b9e\u73b0\u770b\u8d77\u6765\u66f4\u50cf\u662f\u4e00\u9879\u4f1f\u5927\u4e8b\u4e1a\u7684\u8d77\u70b9\u3002\u300f"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(i.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/22"},"\u7cbe\u8bfb\u300aCSS Animations vs Web Animations API\u300b \xb7 Issue #22 \xb7 dt-fe/weekly")),Object(i.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(i.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}p.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);