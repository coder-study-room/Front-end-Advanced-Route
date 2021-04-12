(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),b=(n(0),n(468)),c={title:"3. \u7cbe\u8bfb\u524d\u540e\u7aef\u6e32\u67d3\u4e4b\u4e89",id:"003",hide_title:!0},l={unversionedId:"003",id:"003",isDocsHomePage:!1,title:"3. \u7cbe\u8bfb\u524d\u540e\u7aef\u6e32\u67d3\u4e4b\u4e89",description:"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1aHere's why Client-side Rendering Won",source:"@site/weekly/003.\u7cbe\u8bfb\u524d\u540e\u7aef\u6e32\u67d3\u4e4b\u4e89.md",slug:"/003",permalink:"/weekly/003",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/003.\u7cbe\u8bfb\u524d\u540e\u7aef\u6e32\u67d3\u4e4b\u4e89.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"2. \u7cbe\u8bfb\u6a21\u6001\u6846\u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/weekly/002"},next:{title:"4. \u7cbe\u8bfbAsyncAwait\u4f18\u8d8a\u4e4b\u5904",permalink:"/weekly/004"}},p=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u5185\u5bb9\u6982\u8981",id:"2-\u5185\u5bb9\u6982\u8981",children:[]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"\u524d\u7aef\u6e32\u67d3\u9047\u5230\u7684\u95ee\u9898",id:"\u524d\u7aef\u6e32\u67d3\u9047\u5230\u7684\u95ee\u9898",children:[]},{value:"\u540c\u6784\u7684\u4f18\u70b9",id:"\u540c\u6784\u7684\u4f18\u70b9",children:[]},{value:"\u540c\u6784\u5e76\u6ca1\u6709\u60f3\u50cf\u4e2d\u90a3\u4e48\u7f8e",id:"\u540c\u6784\u5e76\u6ca1\u6709\u60f3\u50cf\u4e2d\u90a3\u4e48\u7f8e",children:[]},{value:"\u9996\u5c4f\u4f18\u5316",id:"\u9996\u5c4f\u4f18\u5316",children:[]}]},{value:"3 \u603b\u7ed3",id:"3-\u603b\u7ed3",children:[{value:"\u9644\uff1aNext.js \u4f53\u9a8c",id:"\u9644\uff1anextjs-\u4f53\u9a8c",children:[]}]}],o={toc:p};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a",Object(b.b)("a",{parentName:"p",href:"https://medium.freecodecamp.com/heres-why-client-side-rendering-won-46a349fadb52"},"Here's why Client-side Rendering Won")),Object(b.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408174839.png",alt:null})),Object(b.b)("p",null,"\u6211\u4e3a\u4ec0\u4e48\u8981\u9009\u8fd9\u7bc7\u6587\u7ae0\u5462\uff1f"),Object(b.b)("p",null,"\u5341\u5e74\u524d\uff0c\u51e0\u4e4e\u6240\u6709\u7f51\u7ad9\u90fd\u4f7f\u7528 ASP\u3001Java\u3001PHP \u8fd9\u7c7b\u505a\u540e\u7aef\u6e32\u67d3\uff0c\u4f46\u540e\u6765\u968f\u7740 jQuery\u3001Angular\u3001React\u3001Vue \u7b49 JS \u6846\u67b6\u7684\u5d1b\u8d77\uff0c\u5f00\u59cb\u8f6c\u5411\u4e86\u524d\u7aef\u6e32\u67d3\u3002\u4ece 2014 \u5e74\u8d77\u53c8\u5f00\u59cb\u6d41\u884c\u4e86\u540c\u6784\u6e32\u67d3\uff0c\u53f7\u79f0\u662f\u672a\u6765\uff0c\u96c6\u6210\u4e86\u524d\u540e\u7aef\u6e32\u67d3\u7684\u4f18\u70b9\uff0c\u4f46\u8f6c\u773c\u95f4\u4e09\u5e74\u8fc7\u53bb\u4e86\uff0c\u5f88\u591a\u5f53\u65f6\u58ee\u5fc3\u6ee1\u6ee1\u7684\u6846\u67b6\uff08",Object(b.b)("a",{parentName:"p",href:"https://github.com/rendrjs/rendr"},"rendr"),"\u3001",Object(b.b)("a",{parentName:"p",href:"https://github.com/lazojs/lazo"},"Lazo"),"\uff09\u4ece\u5148\u9a71\u53d8\u6210\u4e86\u5148\u70c8\u3002\u540c\u6784\u5230\u5e95\u662f\u4e0d\u662f\u672a\u6765\uff1f\u81ea\u5df1\u7684\u9879\u76ee\u8be5\u5982\u4f55\u9009\u578b\uff1f\u6211\u60f3\u4e0d\u5e94\u8be5\u53ea\u505c\u7559\u5728\u8ffd\u6c42\u70ed\u95e8\u548c\u62d8\u6ce5\u4e8e\u56fa\u5b9a\u6a21\u5f0f\u4e0a\uff0c\u5ffd\u7565\u4e86\u524d\u540e\u7aef\u6e32\u67d3\u4e4b\u201c\u4e89\u201d\u7684\u201c\u6838\u5fc3\u70b9\u201d\uff0c\u5173\u6ce8\u5982\u4f55\u63d0\u5347\u201c\u7528\u6237\u4f53\u9a8c\u201d\u3002"),Object(b.b)("p",null,"\u539f\u6587\u5206\u6790\u4e86\u524d\u7aef\u6e32\u67d3\u7684\u4f18\u52bf\uff0c\u5e76\u6ca1\u6709\u8fdb\u884c\u6df1\u5165\u63a2\u8ba8\u3002\u6211\u60f3\u4ee5\u5b83\u4e3a\u5207\u5165\u53e3\u6765\u6df1\u5165\u63a2\u8ba8\u4e00\u4e0b\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u660e\u786e\u4e09\u4e2a\u6982\u5ff5\uff1a\u300c\u540e\u7aef\u6e32\u67d3\u300d\u6307\u4f20\u7edf\u7684 ASP\u3001Java \u6216 PHP \u7684\u6e32\u67d3\u673a\u5236\uff1b\u300c\u524d\u7aef\u6e32\u67d3\u300d\u6307\u4f7f\u7528 JS \u6765\u6e32\u67d3\u9875\u9762\u5927\u90e8\u5206\u5185\u5bb9\uff0c\u4ee3\u8868\u662f\u73b0\u5728\u6d41\u884c\u7684 SPA \u5355\u9875\u9762\u5e94\u7528\uff1b\u300c\u540c\u6784\u6e32\u67d3\u300d\u6307\u524d\u540e\u7aef\u5171\u7528 JS\uff0c\u9996\u6b21\u6e32\u67d3\u65f6\u4f7f\u7528 Node.js \u6765\u76f4\u51fa HTML\u3002\u4e00\u822c\u6765\u8bf4\u540c\u6784\u6e32\u67d3\u662f\u4ecb\u4e8e\u524d\u540e\u7aef\u4e2d\u7684\u5171\u6709\u90e8\u5206\u3002")),Object(b.b)("h2",{id:"2-\u5185\u5bb9\u6982\u8981"},"2 \u5185\u5bb9\u6982\u8981"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u524d\u7aef\u6e32\u67d3\u7684\u4f18\u52bf")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5c40\u90e8\u5237\u65b0\u3002\u65e0\u9700\u6bcf\u6b21\u90fd\u8fdb\u884c\u5b8c\u6574\u9875\u9762\u8bf7\u6c42"),Object(b.b)("li",{parentName:"ul"},"\u61d2\u52a0\u8f7d\u3002\u5982\u5728\u9875\u9762\u521d\u59cb\u65f6\u53ea\u52a0\u8f7d\u53ef\u89c6\u533a\u57df\u5185\u7684\u6570\u636e\uff0c\u6eda\u52a8\u540e rp \u52a0\u8f7d\u5176\u5b83\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7 react-lazyload \u5b9e\u73b0"),Object(b.b)("li",{parentName:"ul"},"\u5bcc\u4ea4\u4e92\u3002\u4f7f\u7528 JS \u5b9e\u73b0\u5404\u79cd\u9177\u70ab\u6548\u679c"),Object(b.b)("li",{parentName:"ul"},"\u8282\u7ea6\u670d\u52a1\u5668\u6210\u672c\u3002\u7701\u7535\u7701\u94b1\uff0cJS \u652f\u6301 CDN \u90e8\u7f72\uff0c\u4e14\u90e8\u7f72\u6781\u5176\u7b80\u5355\uff0c\u53ea\u9700\u8981\u670d\u52a1\u5668\u652f\u6301\u9759\u6001\u6587\u4ef6\u5373\u53ef"),Object(b.b)("li",{parentName:"ul"},"\u5929\u751f\u7684\u5173\u6ce8\u5206\u79bb\u8bbe\u8ba1\u3002\u670d\u52a1\u5668\u6765\u8bbf\u95ee\u6570\u636e\u5e93\u63d0\u4f9b\u63a5\u53e3\uff0cJS \u53ea\u5173\u6ce8\u6570\u636e\u83b7\u53d6\u548c\u5c55\u73b0"),Object(b.b)("li",{parentName:"ul"},"JS \u4e00\u6b21\u5b66\u4e60\uff0c\u5230\u5904\u4f7f\u7528\u3002\u53ef\u4ee5\u7528\u6765\u5f00\u53d1 Web\u3001Serve\u3001Mobile\u3001Desktop \u7c7b\u578b\u7684\u5e94\u7528")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u540e\u7aef\u6e32\u67d3\u7684\u4f18\u52bf")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6e32\u67d3\u4e0d\u9700\u8981\u5148\u4e0b\u8f7d\u4e00\u5806 js \u548c css \u540e\u624d\u80fd\u770b\u5230\u9875\u9762\uff08\u9996\u5c4f\u6027\u80fd\uff09"),Object(b.b)("li",{parentName:"ul"},"SEO"),Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6e32\u67d3\u4e0d\u7528\u5173\u5fc3\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u95ee\u9898\uff08\u968f\u7740\u6d4f\u89c8\u5668\u53d1\u5c55\uff0c\u8fd9\u4e2a\u4f18\u70b9\u9010\u6e10\u6d88\u5931\uff09"),Object(b.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7535\u91cf\u4e0d\u7ed9\u529b\u7684\u624b\u673a\u6216\u5e73\u677f\uff0c\u51cf\u5c11\u5728\u5ba2\u6237\u7aef\u7684\u7535\u91cf\u6d88\u8017\u5f88\u91cd\u8981")),Object(b.b)("p",null,"\u4ee5\u4e0a\u670d\u52a1\u7aef\u4f18\u52bf\u5176\u5b9e\u53ea\u6709\u9996\u5c4f\u6027\u80fd\u548c SEO \u4e24\u70b9\u6bd4\u8f83\u7a81\u51fa\u3002\u4f46\u73b0\u5728\u8fd9\u4e24\u70b9\u4e5f\u6162\u6162\u53d8\u5f97\u5fae\u4e0d\u8db3\u9053\u4e86\u3002React \u8fd9\u7c7b\u652f\u6301\u540c\u6784\u7684\u6846\u67b6\u5df2\u7ecf\u80fd\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c24\u5176\u662f Next.js \u8ba9\u540c\u6784\u5f00\u53d1\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002\u8fd8\u6709\u9759\u6001\u7ad9\u70b9\u7684\u6e32\u67d3\uff0c\u4f46\u8fd9\u7c7b\u5e94\u7528\u672c\u8eab\u590d\u6742\u5ea6\u4f4e\uff0c\u5f88\u591a\u524d\u7aef\u6846\u67b6\u5df2\u7ecf\u80fd\u5b8c\u5168\u56ca\u62ec\u3002"),Object(b.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(b.b)("p",null,"\u672c\u6b21\u63d0\u51fa\u72ec\u5230\u89c2\u70b9\u7684\u540c\u5b66\u6709\uff1a",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//github.com/javie007"},"@javie007")," ",Object(b.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/c93b7957f6308990c7e3b16103c9356b"},"@\u6768\u68ee")," ",Object(b.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/6c772f9726a914ed4a4b90c88010461c"},"@\u6d41\u5f62")," ",Object(b.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/078cc0fb15845759ad8295b0f0e50099"},"@camsong")," ",Object(b.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/turbe-xue"},"@Turbe Xue")," ",Object(b.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/5ac53c9c0484e83672e1c1716bdf0ff9"},"@\u6de1\u82cd")," ",Object(b.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/38c3c75795824de1bc5d99cff904a832"},"@\u7559\u5f71")," ",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//github.com/FrankFang"},"@FrankFang")," ",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//github.com/alcat2008"},"@alcat2008")," ",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//github.com/xile611"},"@xile611")," ",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//github.com/twobin"},"@twobin")," ",Object(b.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/3ec85a04bc9eaa35b1830874cc463a52"},"@\u9ec4\u5b50\u6bc5")," \u7cbe\u8bfb\u7531\u6b64\u5f52\u7eb3\u3002"),Object(b.b)("p",null,"\u5927\u5bb6\u5bf9\u524d\u7aef\u548c\u540e\u7aef\u6e32\u67d3\u7684\u73b0\u72b6\u57fa\u672c\u8fbe\u6210\u5171\u8bc6\u3002\u5373\u524d\u7aef\u6e32\u67d3\u662f\u672a\u6765\u8d8b\u52bf\uff0c\u4f46\u524d\u7aef\u6e32\u67d3\u9047\u5230\u4e86\u9996\u5c4f\u6027\u80fd\u548c SEO \u7684\u95ee\u9898\u3002\u5bf9\u4e8e\u540c\u6784\u4e89\u8bae\u6700\u591a\uff0c\u5728\u6b64\u6211\u5f52\u7eb3\u4e00\u4e0b\u3002"),Object(b.b)("h3",{id:"\u524d\u7aef\u6e32\u67d3\u9047\u5230\u7684\u95ee\u9898"},"\u524d\u7aef\u6e32\u67d3\u9047\u5230\u7684\u95ee\u9898"),Object(b.b)("p",null,"\u524d\u7aef\u6e32\u67d3\u4e3b\u8981\u9762\u4e34\u7684\u95ee\u9898\u6709\u4e24\u4e2a ",Object(b.b)("strong",{parentName:"p"},"SEO"),"\u3001",Object(b.b)("strong",{parentName:"p"},"\u9996\u5c4f\u6027\u80fd"),"\u3002"),Object(b.b)("p",null,"SEO \u5f88\u597d\u7406\u89e3\u3002\u7531\u4e8e\u4f20\u7edf\u7684\u641c\u7d22\u5f15\u64ce\u53ea\u4f1a\u4ece HTML \u4e2d\u6293\u53d6\u6570\u636e\uff0c\u5bfc\u81f4\u524d\u7aef\u6e32\u67d3\u7684\u9875\u9762\u65e0\u6cd5\u88ab\u6293\u53d6\u3002\u524d\u7aef\u6e32\u67d3\u5e38\u4f7f\u7528\u7684 SPA \u4f1a\u628a\u6240\u6709 JS \u6574\u4f53\u6253\u5305\uff0c\u65e0\u6cd5\u5ffd\u89c6\u7684\u95ee\u9898\u5c31\u662f\u6587\u4ef6\u592a\u5927\uff0c\u5bfc\u81f4\u6e32\u67d3\u524d\u7b49\u5f85\u5f88\u957f\u65f6\u95f4\u3002\u7279\u522b\u662f\u7f51\u901f\u5dee\u7684\u65f6\u5019\uff0c\u8ba9\u7528\u6237\u7b49\u5f85\u767d\u5c4f\u7ed3\u675f\u5e76\u975e\u4e00\u4e2a\u5f88\u597d\u7684\u4f53\u9a8c\u3002"),Object(b.b)("h3",{id:"\u540c\u6784\u7684\u4f18\u70b9"},"\u540c\u6784\u7684\u4f18\u70b9"),Object(b.b)("p",null,"\u540c\u6784\u6070\u6070\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u524d\u7aef\u6e32\u67d3\u9047\u5230\u7684\u95ee\u9898\u624d\u4ea7\u751f\u7684\uff0c\u81f3 2014 \u5e74\u5e95\u4f34\u968f\u7740 React \u7684\u5d1b\u8d77\u800c\u88ab\u8ba4\u4e3a\u662f\u524d\u7aef\u6846\u67b6\u5e94\u5177\u5907\u7684\u4e00\u5927\u6740\u5668\uff0c\u4ee5\u81f3\u4e8e\u5f53\u65f6\u5f88\u591a\u4eba\u4e3a\u4e86\u7528\u6b64\u7279\u6027\u800c",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/"},"\u653e\u5f03 Angular 1 \u800c\u8f6c\u5411 React"),"\u3002\u7136\u800c\u8fd1 3 \u5e74\u8fc7\u53bb\u4e86\uff0c\u5f88\u591a\u4ea7\u54c1\u9010\u6e10\u4ece\u5168\u6808\u540c\u6784\u7684\u7406\u60f3\u5316\u9010\u6e10\u8f6c\u5230\u9996\u5c4f\u6216\u90e8\u5206\u540c\u6784\u3002\u8ba9\u6211\u4eec\u518d\u4e00\u6b21\u601d\u8003\u540c\u6784\u7684\u4f18\u70b9\u771f\u662f\u4f18\u70b9\u5417\uff1f"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u6709\u52a9\u4e8e SEO")),Object(b.b)("p",null,"\u9996\u5148\u786e\u5b9a\u4f60\u7684\u5e94\u7528\u662f\u5426\u90fd\u8981\u505a SEO\uff0c\u5982\u679c\u662f\u4e00\u4e2a\u540e\u53f0\u5e94\u7528\uff0c\u90a3\u4e48\u53ea\u8981\u9996\u9875\u505a\u4e00\u4e9b\u9759\u6001\u5185\u5bb9\u5ba3\u5bfc\u5c31\u53ef\u4ee5\u4e86\u3002\u5982\u679c\u662f\u5185\u5bb9\u578b\u7684\u7f51\u7ad9\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u4e13\u95e8\u505a\u4e00\u4e9b\u9875\u9762\u7ed9\u641c\u7d22\u5f15\u64ce\n\u65f6\u5230\u4eca\u65e5\uff0c\u8c37\u6b4c\u5df2\u7ecf\u80fd\u591f\u53ef\u4ee5\u5728\u722c\u866b\u4e2d\u6267\u884c JS ",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//webmasters.googleblog.com/2014/05/understanding-web-pages-better.html"},"\u50cf\u6d4f\u89c8\u5668\u4e00\u6837\u7406\u89e3\u7f51\u9875\u5185\u5bb9"),"\uff0c\u53ea\u9700\u8981\u5f80\u5e38\u4e00\u6837\u4f7f\u7528 JS \u548c CSS \u5373\u53ef\u3002\u5e76\u4e14\u5c3d\u91cf\u4f7f\u7528\u65b0\u89c4\u8303\uff0c\u4f7f\u7528 pushstate \u6765\u66ff\u4ee3\u4ee5\u524d\u7684 hashstate\u3002\u4e0d\u540c\u7684\u641c\u7d22\u5f15\u64ce\u7684\u722c\u866b\u8fd8\u4e0d\u4e00\u6837\uff0c\u8981\u505a\u4e00\u4e9b\u914d\u7f6e\u7684\u5de5\u4f5c\uff0c\u800c\u4e14\u53ef\u80fd\u8981\u7ecf\u5e38\u5173\u6ce8\u6570\u636e\uff0c\u6709\u6ce2\u52a8\u90a3\u4e48\u53ef\u80fd\u5c31\u9700\u8981\u66f4\u65b0\u3002\u7b2c\u4e8c\u662f\u8be5\u505a sitemap \u7684\u8fd8\u5f97\u505a\u3002\u76f8\u4fe1\u672a\u6765\u5373\u4f7f\u662f\u7eaf\u524d\u7aef\u6e32\u67d3\u7684\u9875\u9762\uff0c\u722c\u866b\u4e5f\u80fd\u5f88\u597d\u7684\u89e3\u6790\u3002"),Object(b.b)("ol",{start:2},Object(b.b)("li",{parentName:"ol"},"\u5171\u7528\u524d\u7aef\u4ee3\u7801\uff0c\u8282\u7701\u5f00\u53d1\u65f6\u95f4")),Object(b.b)("p",null,"\u5176\u5b9e\u540c\u6784\u5e76\u6ca1\u6709\u8282\u7701\u524d\u7aef\u7684\u5f00\u53d1\u91cf\uff0c\u53ea\u662f\u628a\u4e00\u90e8\u5206\u524d\u7aef\u4ee3\u7801\u62ff\u5230\u670d\u52a1\u7aef\u6267\u884c\u3002\u800c\u4e14\u4e3a\u4e86\u540c\u6784\u8fd8\u8981\u5904\u5904\u517c\u5bb9 Node.js \u4e0d\u540c\u7684\u6267\u884c\u73af\u5883\u3002\u6709\u989d\u5916\u6210\u672c\uff0c\u8fd9\u4e5f\u662f\u540e\u9762\u4f1a\u5177\u4f53\u8c08\u5230\u7684\u3002"),Object(b.b)("ol",{start:3},Object(b.b)("li",{parentName:"ol"},"\u63d0\u9ad8\u9996\u5c4f\u6027\u80fd")),Object(b.b)("p",null,"\u7531\u4e8e SPA \u6253\u5305\u751f\u6210\u7684 JS \u5f80\u5f80\u90fd\u6bd4\u8f83\u5927\uff0c\u4f1a\u5bfc\u81f4\u9875\u9762\u52a0\u8f7d\u540e\u82b1\u8d39\u5f88\u957f\u7684\u65f6\u95f4\u6765\u89e3\u6790\uff0c\u4e5f\u5c31\u9020\u6210\u4e86\u767d\u5c4f\u95ee\u9898\u3002\u670d\u52a1\u7aef\u6e32\u67d3\u53ef\u4ee5\u9884\u5148\u4f7f\u5230\u6570\u636e\u5e76\u6e32\u67d3\u6210\u6700\u7ec8 HTML \u76f4\u63a5\u5c55\u793a\uff0c\u7406\u60f3\u60c5\u51b5\u4e0b\u80fd\u907f\u514d\u767d\u5c4f\u95ee\u9898\u3002\u5728\u6211\u53c2\u8003\u8fc7\u7684\u4e00\u4e9b\u4ea7\u54c1\u4e2d\uff0c\u5f88\u591a\u9875\u9762\u9700\u8981\u83b7\u53d6\u5341\u51e0\u4e2a\u63a5\u53e3\u7684\u6570\u636e\uff0c\u5355\u662f\u6570\u636e\u83b7\u53d6\u7684\u65f6\u5019\u90fd\u4f1a\u82b1\u8d39\u6570\u79d2\u949f\uff0c\u8fd9\u6837\u5168\u90e8\u4f7f\u7528\u540c\u6784\u53cd\u800c\u4f1a\u53d8\u6162\u3002"),Object(b.b)("h3",{id:"\u540c\u6784\u5e76\u6ca1\u6709\u60f3\u50cf\u4e2d\u90a3\u4e48\u7f8e"},"\u540c\u6784\u5e76\u6ca1\u6709\u60f3\u50cf\u4e2d\u90a3\u4e48\u7f8e"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u6027\u80fd")),Object(b.b)("p",null,"\u628a\u539f\u6765\u653e\u5728\u51e0\u767e\u4e07\u6d4f\u89c8\u5668\u7aef\u7684\u5de5\u4f5c\u62ff\u8fc7\u6765\u7ed9\u4f60\u51e0\u53f0\u670d\u52a1\u5668\u505a\uff0c\u8fd9\u8fd8\u662f\u82b1\u633a\u591a\u8ba1\u7b97\u529b\u7684\u3002\u5c24\u5176\u662f\u6d89\u53ca\u5230\u56fe\u8868\u7c7b\u9700\u8981\u5927\u91cf\u8ba1\u7b97\u7684\u573a\u666f\u3002\u8fd9\u65b9\u9762\u8c03\u4f18\uff0c\u53ef\u4ee5\u53c2\u8003 ",Object(b.b)("a",{parentName:"p",href:"https://medium.com/walmartlabs/reactjs-ssr-profiling-and-caching-5d8e9e49240c"},"walmart \u7684\u8c03\u4f18\u7b56\u7565"),"\u3002"),Object(b.b)("p",null,"\u4e2a\u6027\u5316\u7684\u7f13\u5b58\u662f\u9047\u5230\u7684\u53e6\u5916\u4e00\u4e2a\u95ee\u9898\u3002\u53ef\u4ee5\u628a\u6bcf\u4e2a\u7528\u6237\u4e2a\u6027\u5316\u4fe1\u606f\u7f13\u5b58\u5230\u6d4f\u89c8\u5668\uff0c\u8fd9\u662f\u4e00\u4e2a\u5929\u751f\u7684\u5206\u5e03\u5f0f\u7f13\u5b58\u7cfb\u7edf\u3002\u6211\u4eec\u6709\u4e2a\u6570\u636e\u7c7b\u5e94\u7528\u901a\u8fc7\u5728\u6d4f\u89c8\u5668\u5408\u7406\u8bbe\u7f6e\u7f13\u5b58\uff0c\u53cc\u5341\u4e00\u5f53\u5929\u8282\u7701\u4e86 70% \u7684\u8bf7\u6c42\u91cf\u3002\u8bd5\u60f3\u5982\u679c\u8fd9\u4e9b\u7f13\u5b58\u5168\u90e8\u653e\u5230\u670d\u52a1\u5668\u5b58\u50a8\uff0c\u9700\u8981\u7684\u5b58\u50a8\u7a7a\u95f4\u548c\u8ba1\u7b97\u90fd\u662f\u5f88\u975e\u5e38\u5927\u3002"),Object(b.b)("ol",{start:2},Object(b.b)("li",{parentName:"ol"},"\u4e0d\u5bb9\u5ffd\u89c6\u7684\u670d\u52a1\u5668\u7aef\u548c\u6d4f\u89c8\u5668\u73af\u5883\u5dee\u5f02")),Object(b.b)("p",null,"\u524d\u7aef\u4ee3\u7801\u5728\u7f16\u5199\u65f6\u5e76\u6ca1\u6709\u8fc7\u591a\u7684\u8003\u8651\u540e\u7aef\u6e32\u67d3\u7684\u60c5\u666f\uff0c\u56e0\u6b64\u5404\u79cd BOM \u5bf9\u8c61\u548c DOM API \u90fd\u662f\u62ff\u6765\u5373\u7528\u3002\u8fd9\u4ece\u5ba2\u89c2\u5c42\u9762\u4e5f\u589e\u52a0\u4e86\u540c\u6784\u6e32\u67d3\u7684\u96be\u5ea6\u3002\u6211\u4eec\u4e3b\u8981\u9047\u5230\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"document \u7b49\u5bf9\u8c61\u627e\u4e0d\u5230\u7684\u95ee\u9898"),Object(b.b)("li",{parentName:"ul"},"DOM \u8ba1\u7b97\u62a5\u9519\u7684\u95ee\u9898"),Object(b.b)("li",{parentName:"ul"},"\u524d\u7aef\u6e32\u67d3\u548c\u670d\u52a1\u7aef\u6e32\u67d3\u5185\u5bb9\u4e0d\u4e00\u81f4\u7684\u95ee\u9898")),Object(b.b)("p",null,"\u7531\u4e8e\u524d\u7aef\u4ee3\u7801\u4f7f\u7528\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"window")," \u5728 node \u73af\u5883\u662f\u4e0d\u5b58\u5728\u7684\uff0c\u6240\u4ee5\u8981 mock window\uff0c\u5176\u4e2d\u6700\u91cd\u8981\u7684\u662f cookie\uff0cuserAgent\uff0clocation\u3002\u4f46\u662f\u7531\u4e8e\u6bcf\u4e2a\u7528\u6237\u8bbf\u95ee\u65f6\u662f\u4e0d\u4e00\u6837\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"window"),"\uff0c\u90a3\u4e48\u5c31\u610f\u5473\u7740\u4f60\u5f97\u6bcf\u6b21\u90fd\u66f4\u65b0 ",Object(b.b)("inlineCode",{parentName:"p"},"window"),"\u3002\n\u800c\u670d\u52a1\u7aef\u7531\u4e8e js require \u7684 cache \u673a\u5236\uff0c\u9020\u6210\u524d\u7aef\u4ee3\u7801\u9664\u4e86\u5177\u4f53\u6e32\u67d3\u90e8\u5206\u90fd\u53ea\u4f1a\u52a0\u8f7d\u4e00\u904d\u3002\u8fd9\u65f6\u5019 ",Object(b.b)("inlineCode",{parentName:"p"},"window")," \u5c31\u5f97\u4e0d\u5230\u66f4\u65b0\u4e86\u3002\u6240\u4ee5\u8981\u5f15\u5165\u4e00\u4e2a\u5408\u9002\u7684\u66f4\u65b0\u673a\u5236\uff0c\u6bd4\u5982\u628a\u8bfb\u53d6\u6539\u6210\u6bcf\u6b21\u7528\u7684\u65f6\u5019\u518d\u8bfb\u53d6\u3002"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"export const isSsr = () => (\n  !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout)\n);\n")),Object(b.b)("p",null,"\u539f\u56e0\u662f\u5f88\u591a DOM \u8ba1\u7b97\u5728 SSR \u7684\u65f6\u5019\u662f\u65e0\u6cd5\u8fdb\u884c\u7684\uff0c\u6d89\u53ca\u5230 DOM \u8ba1\u7b97\u7684\u7684\u5185\u5bb9\u4e0d\u53ef\u80fd\u505a\u5230 SSR \u548c CSR \u5b8c\u5168\u4e00\u81f4\uff0c\u8fd9\u79cd\u4e0d\u4e00\u81f4\u53ef\u80fd\u4f1a\u5e26\u6765\u9875\u9762\u7684\u95ea\u52a8\u3002"),Object(b.b)("ol",{start:3},Object(b.b)("li",{parentName:"ol"},"\u5185\u5b58\u6ea2\u51fa")),Object(b.b)("p",null,"\u524d\u7aef\u4ee3\u7801\u7531\u4e8e\u6d4f\u89c8\u5668\u73af\u5883\u5237\u65b0\u4e00\u904d\u5185\u5b58\u91cd\u7f6e\u7684\u5929\u7136\u4f18\u52bf\uff0c\u5bf9\u5185\u5b58\u6ea2\u51fa\u7684\u98ce\u9669\u5e76\u6ca1\u6709\u8003\u8651\u5145\u5206\u3002\n\u6bd4\u5982\u5728 React \u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"componentWillMount")," \u91cc\u505a\u7ed1\u5b9a\u4e8b\u4ef6\u5c31\u4f1a\u53d1\u751f\u5185\u5b58\u6ea2\u51fa\uff0c\u56e0\u4e3a React \u7684\u8bbe\u8ba1\u662f\u540e\u7aef\u6e32\u67d3\u53ea\u4f1a\u8fd0\u884c ",Object(b.b)("inlineCode",{parentName:"p"},"componentDidMount")," \u4e4b\u524d\u7684\u64cd\u4f5c\uff0c\u800c\u4e0d\u4f1a\u8fd0\u884c ",Object(b.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," \u65b9\u6cd5\uff08\u4e00\u822c\u89e3\u7ed1\u4e8b\u4ef6\u5728\u8fd9\u91cc\uff09\u3002"),Object(b.b)("ol",{start:4},Object(b.b)("li",{parentName:"ol"},"\u5f02\u6b65\u64cd\u4f5c")),Object(b.b)("p",null,"\u524d\u7aef\u53ef\u4ee5\u505a\u975e\u5e38\u590d\u6742\u7684\u8bf7\u6c42\u5408\u5e76\u548c\u5ef6\u8fdf\u5904\u7406\uff0c\u4f46\u4e3a\u4e86\u540c\u6784\uff0c\u6240\u6709\u8fd9\u4e9b\u8bf7\u6c42\u90fd\u5728\u9884\u5148\u62ff\u5230\u7ed3\u679c\u624d\u4f1a\u6e32\u67d3\u3002\u800c\u5f80\u5f80\u8fd9\u4e9b\u8bf7\u6c42\u662f\u6709\u5f88\u591a\u4f9d\u8d56\u6761\u4ef6\u7684\uff0c\u5f88\u96be\u8c03\u548c\u3002\u7eaf React \u7684\u65b9\u5f0f\u4f1a\u628a\u8fd9\u4e9b\u6570\u636e\u4ee5\u57cb\u70b9\u7684\u65b9\u5f0f\u6253\u5230\u9875\u9762\u4e0a\uff0c\u524d\u7aef\u4e0d\u518d\u53d1\u8bf7\u6c42\uff0c\u4f46\u4ecd\u7136\u518d\u6e32\u67d3\u4e00\u904d\u6765\u6bd4\u5bf9\u6570\u636e\u3002\u9020\u6210\u7684\u7ed3\u679c\u662f\u6d41\u7a0b\u590d\u6742\uff0c\u5927\u89c4\u6a21\u4f7f\u7528\u6210\u672c\u9ad8\u3002\u5e78\u8fd0\u7684\u662f Next.js \u89e3\u51b3\u4e86\u8fd9\u4e00\u4e9b\uff0c\u540e\u9762\u4f1a\u8c08\u5230\u3002"),Object(b.b)("ol",{start:5},Object(b.b)("li",{parentName:"ol"},"simple store\uff08redux\uff09")),Object(b.b)("p",null,"\u8fd9\u4e2a store \u662f\u5fc5\u987b\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u585e\u5230\u524d\u7aef\uff0c\u6240\u4ee5\u590d\u6742\u7c7b\u578b\u662f\u65e0\u6cd5\u8f6c\u4e49\u6210\u5b57\u7b26\u4e32\u7684\uff0c\u6bd4\u5982 function\u3002"),Object(b.b)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u540c\u6784\u6e32\u67d3\u5b9e\u65bd\u96be\u5ea6\u5927\uff0c\u4e0d\u591f\u4f18\u96c5\uff0c\u65e0\u8bba\u5728\u524d\u7aef\u8fd8\u662f\u670d\u52a1\u7aef\uff0c\u90fd\u9700\u8981\u989d\u5916\u6539\u9020\u3002"),Object(b.b)("h3",{id:"\u9996\u5c4f\u4f18\u5316"},"\u9996\u5c4f\u4f18\u5316"),Object(b.b)("p",null,"\u518d\u56de\u5230\u524d\u7aef\u6e32\u67d3\u9047\u5230\u9996\u5c4f\u6e32\u67d3\u95ee\u9898\uff0c\u9664\u4e86\u540c\u6784\u5c31\u6ca1\u6709\u5176\u5b83\u89e3\u6cd5\u4e86\u5417\uff1f\u603b\u7ed3\u4ee5\u4e0b\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e09\u6b65\u89e3\u51b3"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u5206\u62c6\u6253\u5305")),Object(b.b)("p",null,"\u73b0\u5728\u6d41\u884c\u7684\u8def\u7531\u5e93\u5982 react-router \u5bf9\u5206\u62c6\u6253\u5305\u90fd\u6709\u5f88\u597d\u7684\u652f\u6301\u3002\u53ef\u4ee5\u6309\u7167\u9875\u9762\u5bf9\u5305\u8fdb\u884c\u5206\u62c6\uff0c\u5e76\u5728\u9875\u9762\u5207\u6362\u65f6\u52a0\u4e0a\u4e00\u4e9b loading \u548c transition \u6548\u679c\u3002"),Object(b.b)("ol",{start:2},Object(b.b)("li",{parentName:"ol"},"\u4ea4\u4e92\u4f18\u5316")),Object(b.b)("p",null,"\u9996\u6b21\u6e32\u67d3\u7684\u95ee\u9898\u53ef\u4ee5\u7528\u66f4\u597d\u7684\u4ea4\u4e92\u6765\u89e3\u51b3\uff0c\u5148\u770b\u4e0b linkedin \u7684\u6e32\u67d3"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408174913.png",alt:null})),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408174936.png",alt:null})),Object(b.b)("p",null,"\u6709\u4ec0\u4e48\u611f\u53d7\uff0c\u975e\u5e38\u81ea\u7136\uff0c\u6253\u5f00\u6e32\u67d3\u5e76\u6ca1\u6709\u767d\u5c4f\uff0c\u6709\u4e24\u6bb5\u52a0\u8f7d\u52a8\u753b\uff0c\u7b2c\u4e00\u6bb5\u50cf\u662f\u52a0\u8f7d\u8d44\u6e90\uff0c\u7b2c\u4e8c\u6bb5\u662f\u4e00\u4e2a\u52a0\u8f7d\u5360\u4f4d\u5668\uff0c\u8fc7\u53bb\u6211\u4eec\u4f1a\u7528 loading \u6548\u679c\uff0c\u4f46\u8fc7\u6e21\u6027\u4e0d\u597d\u3002\u8fd1\u5e74\u6d41\u884c Skeleton Screen \u6548\u679c\u3002\u5176\u5b9e\u5c31\u662f\u5728\u767d\u5c4f\u65e0\u6cd5\u907f\u514d\u7684\u65f6\u5019\uff0c\u4e3a\u4e86\u89e3\u51b3\u7b49\u5f85\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u767d\u5c4f\u6216\u8005\u754c\u9762\u95ea\u70c1\u9020\u6210\u7684\u5272\u88c2\u611f\u5e26\u6765\u7684\u89e3\u51b3\u65b9\u6848\u3002"),Object(b.b)("ol",{start:3},Object(b.b)("li",{parentName:"ol"},"\u90e8\u5206\u540c\u6784")),Object(b.b)("p",null,"\u90e8\u5206\u540c\u6784\u53ef\u4ee5\u964d\u4f4e\u6210\u529f\u540c\u65f6\u5229\u7528\u540c\u6784\u7684\u4f18\u70b9\uff0c\u5982\u628a\u6838\u5fc3\u7684\u90e8\u5206\u5982\u83dc\u5355\u901a\u8fc7\u540c\u6784\u7684\u65b9\u5f0f\u4f18\u5148\u6e32\u67d3\u51fa\u6765\u3002\u6211\u4eec\u73b0\u5728\u7684\u505a\u6cd5\u5c31\u662f\u4f7f\u7528\u540c\u6784\u628a\u83dc\u5355\u548c\u9875\u9762\u9aa8\u67b6\u6e32\u67d3\u51fa\u6765\u3002\u7ed9\u7528\u6237\u63d0\u793a\u4fe1\u606f\uff0c\u51cf\u5c11\u65e0\u7aef\u7684\u7b49\u5f85\u65f6\u95f4\u3002"),Object(b.b)("p",null,"\u76f8\u4fe1\u6709\u4e86\u4ee5\u4e0a\u4e09\u6b65\u4e4b\u540e\uff0c\u9996\u5c4f\u95ee\u9898\u5df2\u7ecf\u80fd\u6709\u5f88\u5927\u6539\u89c2\u3002\u76f8\u5bf9\u6765\u8bf4\u4f53\u9a8c\u63d0\u5347\u548c\u540c\u6784\u4e0d\u5206\u4f2f\u4ef2\uff0c\u800c\u4e14\u76f8\u5bf9\u6765\u8bf4\u5bf9\u539f\u6765\u67b6\u6784\u7834\u574f\u6027\u5c0f\uff0c\u5165\u4fb5\u6027\u5c0f\u3002\u662f\u6211\u6bd4\u8f83\u63a8\u5d07\u7684\u65b9\u6848\u3002"),Object(b.b)("h2",{id:"3-\u603b\u7ed3"},"3 \u603b\u7ed3"),Object(b.b)("p",null,"\u6211\u4eec\u8d5e\u6210\u5ba2\u6237\u7aef\u6e32\u67d3\u662f\u672a\u6765\u7684\u4e3b\u8981\u65b9\u5411\uff0c\u670d\u52a1\u7aef\u5219\u4f1a\u4e13\u6ce8\u4e8e\u5728\u6570\u636e\u548c\u4e1a\u52a1\u5904\u7406\u4e0a\u7684\u4f18\u52bf\u3002\u4f46\u7531\u4e8e\u65e5\u8d8b\u590d\u6742\u7684\u8f6f\u786c\u4ef6\u73af\u5883\u548c\u7528\u6237\u4f53\u9a8c\u66f4\u9ad8\u7684\u8ffd\u6c42\uff0c\u4e5f\u4e0d\u80fd\u53ea\u62d8\u6ce5\u4e8e\u5b8c\u5168\u7684\u5ba2\u6237\u7aef\u6e32\u67d3\u3002\u540c\u6784\u6e32\u67d3\u770b\u4f3c\u7f8e\u597d\uff0c\u4f46\u4ee5\u76ee\u524d\u7684\u53d1\u5c55\u7a0b\u5ea6\u6765\u770b\uff0c\u5728\u5927\u578b\u9879\u76ee\u4e2d\u8fd8\u4e0d\u5177\u6709\u8db3\u591f\u7684\u5e94\u7528\u4ef7\u503c\uff0c\u4f46\u4e0d\u59a8\u788d\u90e8\u5206\u4f7f\u7528\u6765\u4f18\u5316\u9996\u5c4f\u6027\u80fd\u3002\u505a\u540c\u6784\u4e4b\u524d \uff0c\u4e00\u5b9a\u8981\u8003\u8651\u5230\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u7684\u73af\u5883\u5dee\u5f02\uff0c\u7ad9\u5728\u66f4\u9ad8\u5c42\u9762\u8003\u8651\u3002"),Object(b.b)("h3",{id:"\u9644\uff1anextjs-\u4f53\u9a8c"},"\u9644\uff1aNext.js \u4f53\u9a8c"),Object(b.b)("p",null,"Next.js \u662f\u65f6\u4e0b\u975e\u5e38\u6d41\u884c\u7684\u57fa\u4e8e React \u7684\u540c\u6784\u5f00\u53d1\u6846\u67b6\u3002\u4f5c\u8005\u4e4b\u4e00\u5c31\u662f\u5927\u540d\u9f0e\u9f0e\u7684 Socket.io \u7684\u4f5c\u8005 ",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//github.com/rauchg"},"Guillermo Rauch"),"\u3002\u5b83\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4eae\u70b9\u7279\u522b\u5438\u5f15\u6211\uff1a"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u5de7\u5999\u5730\u7528\u6807\u51c6\u5316\u7684\u89e3\u51b3\u4e86\u8bf7\u6c42\u7684\u95ee\u9898\u3002\u540c\u6784\u548c\u9875\u9762\u5f00\u53d1\u7c7b\u4f3c\uff0c\u5f02\u6b65\u662f\u4e2a\u5927\u96be\u9898\uff0c\u5f02\u6b65\u4e2d\u96be\u70b9\u53c8\u5728\u63a5\u53e3\u8bf7\u6c42\u3002Next.js \u7ed9\u7ec4\u4ef6\u65b0\u589e\u4e86 getInitialProps \u65b9\u6cd5\u6765\u4e13\u95e8\u5904\u7406\u521d\u59cb\u5316\u8bf7\u6c42\uff0c\u518d\u4e5f\u4e0d\u7528\u624b\u52a8\u5f80\u9875\u9762\u4e0a\u585e DATA \u548c\u8c03\u7528 ReactDOMServer.renderToString"),Object(b.b)("li",{parentName:"ol"},"\u4f7f\u7528 ",Object(b.b)("a",{parentName:"li",href:"https://github.com/zeit/styled-jsx"},"styled-jsx")," \u89e3\u51b3\u4e86 css-in-js \u7684\u95ee\u9898\u3002\u8fd9\u79cd\u65b9\u6848\u867d\u7136\u4e0d\u50cf styled-component \u90a3\u6837\u5f3a\u5927\uff0c\u4f46\u8db3\u591f\u7b80\u5355\uff0c\u53ef\u4ee5\u8bf4\u662f\u6700\u5c0f\u7684\u6210\u672c\u89e3\u51b3\u4e86\u95ee\u9898"),Object(b.b)("li",{parentName:"ol"},"Fast by default\u3002\u9875\u9762\u9ed8\u8ba4\u62c6\u5206\u6587\u4ef6\u65b9\u5f0f\u6253\u5305\uff0c\u652f\u6301 Prefetch \u9875\u9762\u9884\u52a0\u8f7d")),Object(b.b)("p",null,"\u5168\u5bb6\u6876\u5f0f\u7684\u7684\u89e3\u51b3\u65b9\u6848\u3002\u7b80\u6d01\u6e05\u6670\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u8fd9\u4e00\u70b9 Redux \u7b49\u6846\u67b6\u771f\u5e94\u8be5\u5b66\u4e00\u5b66\u3002\u4e0d\u8fc7\u5168\u5bb6\u6876\u7684\u65b9\u6848\u6bd4\u8f83\u9002\u5408\u5168\u65b0\u9879\u76ee\u4f7f\u7528\uff0c\u65e7\u9879\u76ee\u4f7f\u7528\u8981\u8bc4\u4f30\u597d\u6210\u672c"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(b.b)("a",{parentName:"p",href:"http://link.zhihu.com/?target=https%3A//github.com/dt-fe/weekly/issues/5"},"\u524d\u540e\u7aef\u6e32\u67d3\u4e4b\u4e89 \xb7 Issue #5 \xb7 dt-fe/weekly"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(b.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}i.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,O=u["".concat(c,".").concat(m)]||u[m]||j[m]||b;return n?r.a.createElement(O,l(l({ref:t},o),{},{components:n})):r.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);