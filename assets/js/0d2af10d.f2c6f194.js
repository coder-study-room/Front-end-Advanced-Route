(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{385:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,p(p({ref:t},i),{},{components:n})):r.a.createElement(m,p({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(385)),l={title:"40. \u7cbe\u8bfb\u300a\u521d\u63a2 Reason \u4e0e GraphQL\u300b",id:"040",hide_title:!0},p={unversionedId:"040",id:"040",isDocsHomePage:!1,title:"40. \u7cbe\u8bfb\u300a\u521d\u63a2 Reason \u4e0e GraphQL\u300b",description:"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a",source:"@site/weekly/040.\u7cbe\u8bfb\u300a\u521d\u63a2 Reason \u4e0e GraphQL\u300b.md",slug:"/040",permalink:"/weekly/040",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/040.\u7cbe\u8bfb\u300a\u521d\u63a2 Reason \u4e0e GraphQL\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617868529,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"39. \u7cbe\u8bfb\u300a\u5168\u94fe\u8def\u4f53\u9a8c\u6d4f\u89c8\u5668\u6316\u77ff\u300b",permalink:"/weekly/039"},next:{title:"41. \u7cbe\u8bfb\u300aAnt Design 3.0 \u80cc\u540e\u7684\u6545\u4e8b\u300b",permalink:"/weekly/041"}},c=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u5185\u5bb9\u6982\u8981",id:"2-\u5185\u5bb9\u6982\u8981",children:[{value:"\u4e00\u5207\u7686\u6a21\u5757",id:"\u4e00\u5207\u7686\u6a21\u5757",children:[]},{value:"\u5185\u7f6e\u4e0d\u53ef\u53d8\u6570\u636e\u7c7b\u578b\u68c0\u6d4b",id:"\u5185\u7f6e\u4e0d\u53ef\u53d8\u6570\u636e\u7c7b\u578b\u68c0\u6d4b",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"graphql",id:"graphql",children:[]},{value:"reason",id:"reason",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]},{value:"5 \u66f4\u591a\u8ba8\u8bba",id:"5-\u66f4\u591a\u8ba8\u8bba",children:[]}],i={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u7684\u6587\u7ae0\u662f\uff1a"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://dev-blog.apollodata.com/exploring-reason-and-graphql-ff877df60d2a"},"Exploring Reason and GraphQL")),Object(o.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(o.b)("p",null,"2018 \u5e74\u4e86\uff0cReason \u751f\u6001\u53d1\u5c55\u4e86\u4e0d\u5c11\uff0c\u800c\u4e14\u6b63\u597d\u770b\u5230\u4e00\u7bc7\u6587\u7ae0\u7684\u4f5c\u8005\u4e5f\u62b1\u7740\u8fd9\u79cd\u5fc3\u6001\u5c1d\u9c9c React + graphql\uff0c\u7d22\u6027\u8c03\u7814\u4e00\u4e0b\uff0c\u770b\u770b\u8fd9\u5957\u524d\u6cbf\u7684\u65b9\u6848\u662f\u5426\u6709\u843d\u5730\u5bf9\u53ef\u80fd\u6027\u3002"),Object(o.b)("h2",{id:"2-\u5185\u5bb9\u6982\u8981"},"2 \u5185\u5bb9\u6982\u8981"),Object(o.b)("h3",{id:"\u4e00\u5207\u7686\u6a21\u5757"},"\u4e00\u5207\u7686\u6a21\u5757"),Object(o.b)("p",null,"\u5728 reason \u4e2d\uff0c\u4e00\u5207\u7686\u6a21\u5757\uff0c\u800c\u4e14\u4e0d\u9700\u8981\u624b\u52a8\u7533\u660e\u5bfc\u51fa\u4e0e\u5f15\u7528\uff0c\u8fd9\u4e2a\u662f js \u7684\u75db\u70b9\u3002\u4ee5\u4e0b\u9762\u7684\u4ee3\u7801\u4e3a\u4f8b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-reason"},'open Data;\n\nlet typeDef = {|\n  type Author {\n    id: Int!\n    firstName: String\n    lastName: String\n    posts: [Post] # the list of Posts by this author\n  }\n|};\n\ntype resolvers = {. "posts": Js.Array.t(post)};\n\nlet resolvers = {\n  "posts": (author: Data.author) =>\n    Js.Array.filter((post) => post##authorId === author##id, posts)\n};\n')),Object(o.b)("p",null,"\u7b2c\u4e00\u884c\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"open")," \u7c7b\u4f3c js \u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"import"),"\uff0c\u4e0d\u540c\u7684\u662f\uff0cjs \u4e2d\u9700\u8981\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"Data.post")," \u8bbf\u95ee\u5bf9\u8c61\uff0c\u800c reason \u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee ",Object(o.b)("inlineCode",{parentName:"p"},"post"),"\u3002\u4e0d\u8fc7\u4e5f\u53ef\u4ee5\u8865\u5168\u5f15\u7528\uff0c\u6bd4\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"Data.author"),"\u3002"),Object(o.b)("p",null,"\u5728\u5b9a\u4e49 graphQL \u7c7b\u578b\u65f6\uff0cgraphql-tools \u5141\u8bb8\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"[Post]")," \u7684\u8bed\u6cd5\u5c06\u6587\u7ae0\u5bf9\u8c61\u5173\u8054\u5230\u4f5c\u8005\u3002"),Object(o.b)("h3",{id:"\u5185\u7f6e\u4e0d\u53ef\u53d8\u6570\u636e\u7c7b\u578b\u68c0\u6d4b"},"\u5185\u7f6e\u4e0d\u53ef\u53d8\u6570\u636e\u7c7b\u578b\u68c0\u6d4b"),Object(o.b)("p",null,"reason \u4e2d\uff0c\u4e00\u5207\u7c7b\u578b\u90fd\u662f immutable \u7684\uff0c\u5982\u679c\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801\u76f4\u63a5\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"p"},"post.votes"),"\uff0c\u5219\u4f1a\u62a5\u9519\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-reason"},"Mutation: {\n  upvotePost: (_, { postId }) => {\n    const post = find(posts, { id: postId });\n    if (!post) {\n      throw new Error(`Couldn't find post with id ${postId}`);\n    }\n    post.votes += 1;\n    return post;\n  },\n},\n")),Object(o.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," \u544a\u8bc9\u7f16\u8bd1\u5668\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"votes")," \u53ef\u80fd\u662f mutable \u7684\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-reason"},'type post = {. "id": int, "authorId": int, "title": string, "votes": ref(int)};\n')),Object(o.b)("p",null,"\u6700\u540e\u4f5c\u8005\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 ",Object(o.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/example.html"},"apollo-server")," \u642d\u5efa\u540e\u7aef\u4ee3\u7801\uff0c\u4e0e reason \u7ed3\u5408\u4f7f\u7528\u3002"),Object(o.b)("p",null,"\u6211\u8bd5\u4e86\u4e0b\uff0c\u771f\u7684\u975e\u5e38\u65b9\u4fbf\uff0c\u540e\u7aef\u5b9a\u4e49\u597d\u63a5\u53e3\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4efd\u5728\u7ebf\u6587\u6863\u4f9b\u524d\u7aef\u67e5\u8be2\uff0c\u5b8c\u5168\u5c4f\u853d\u4e86\u63a5\u53e3\u8fd9\u4e00\u5c42\uff0c\u53ea\u8981\u641c\u7d22\u8981\u67e5\u8be2\u7684\u5143\u7d20\u5373\u53ef\u3002"),Object(o.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(o.b)("h3",{id:"graphql"},"graphql"),Object(o.b)("p",null,"\u524d\u7aef\u540e\u6c9f\u901a\u6210\u672c\u4e00\u76f4\u662f\u4e2a\u95ee\u9898\uff0c\u4ee5\u81f3\u4e8e\u5f88\u591a\u56e2\u961f\u60f3\u505a\u4e00\u4e2a \u201c\u63a5\u53e3\u67e5\u8be2\u5e73\u53f0\u201d \u4e4b\u7c7b\u7684\u7cfb\u7edf\u3002"),Object(o.b)("p",null,"\u5f53\u7136\uff0c\u65e0\u8bba\u662f\u89e3\u6790\u540e\u7aef\u4ee3\u7801\u4e5f\u597d\uff0c\u5e73\u53f0\u5f55\u5165\u4e5f\u597d\uff0c\u8fd8\u662f mock \u5e73\u53f0\u53cd\u63a8\uff0c\u90fd\u4e0d\u592a\u7406\u60f3\uff1a"),Object(o.b)("p",null,"\u89e3\u6790\u540e\u7aef\u4ee3\u7801\uff0c\u5de5\u4f5c\u91cf\u6bd4\u8f83\u5927\uff0c\u800c\u4e14\u8fd8\u9700\u8981\u7ea6\u5b9a\u4e00\u4e9b\u683c\u5f0f\uff0c\u5176\u5b9e\u8d8a\u505a\u8d8a\u50cf graphql\uff0c\u6295\u5165\u7684\u8bdd\u8fd8\u4e0d\u5982\u8003\u8651\u4f7f\u7528 graphql\u3002"),Object(o.b)("p",null,"\u4e00\u6761\u6761\u63a5\u53e3\u5f55\u5165\u65b9\u6848\u662f\u53ef\u884c\u7684\uff0c\u6280\u672f\u6210\u672c\u4e5f\u51e0\u4e4e\u4e3a\u96f6\uff0c\u4f46\u95ee\u9898\u662f\u540e\u7eed\u4ee3\u7801\u53d8\u52a8\u4f1a\u5bfc\u81f4\u5e73\u53f0\u4e0e\u5b9e\u9645\u63a5\u53e3\u4e0d\u4e00\u81f4\uff0c\u6216\u8005\u67d0\u4e9b\u9879\u76ee\u751a\u81f3\u7ed5\u8fc7\u4e86\u63a5\u53e3\u5f55\u5165\uff0c\u5bfc\u81f4\u4e00\u4e9b\u63a5\u53e3\u6e38\u79bb\u5728\u5e73\u53f0\u4e4b\u5916\uff0c\u65e0\u6cd5\u805a\u5408\u7ba1\u7406\u3002"),Object(o.b)("p",null,"\u5148\u901a\u8fc7 mock \u5e73\u53f0\u8054\u8c03\uff0c\u518d\u8bfb\u53d6 mock \u5e73\u53f0\u6570\u636e\uff0c\u751f\u6210\u63a5\u53e3\u5217\u8868\u540c\u6837\u5b58\u5728\u540e\u7aef\u4ee3\u7801\u53d8\u52a8\u5bfc\u81f4 mock \u7ed3\u6784\u8fc7\u671f\u7684\u95ee\u9898\u3002"),Object(o.b)("p",null,"\u5982\u679c\u4e0d\u8003\u8651\u9700\u6c42\u53d8\u52a8\uff0c\u540e\u7aef\u91c7\u7528 graphql \u5176\u5b9e\u662f\u6210\u672c\u6700\u5c0f\u7684\u9009\u62e9\uff0c\u5176\u4e00\u662f\u7c7b\u4f3c ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-server")," \u8fd9\u7c7b\u6846\u67b6\u505a\u4e86\u4e00\u4e2a IDE \u4f9b\u67e5\u8be2\u5b9e\u4f53\uff0c\u540c\u65f6\u7ed5\u8fc7\u4e86\u63a5\u53e3\uff0c\u76f4\u63a5\u66b4\u9732\u6570\u636e\uff0c\u6548\u7387\u66f4\u9ad8\u3002\u5176\u4e8c\u662f\u53ef\u4ee5\u505a\u5230\u4ee3\u7801\u53d8\u52a8\u540e\u6587\u6863\u5b9e\u65f6\u540c\u6b65\uff0c\u53ea\u8981\u540e\u7aef\u4ee3\u7801\u66f4\u65b0\uff0c\u6587\u6863\u4e5f\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002"),Object(o.b)("p",null,"\u4e0d\u8fc7\u5bf9\u4e8e\u540e\u7aef\u4ee3\u7801\u5e76\u4e0d\u638c\u63e1\u5728\u524d\u7aef\u7684\u56e2\u961f\u6765\u8bf4\uff0c\u5982\u679c\u4e0d\u63a8\u52a8\u540e\u7aef\u6539\u9020\u6210 graphql\uff0c\u662f\u65e0\u6cd5\u4eab\u53d7\u5230\u8fd9\u4e2a\u597d\u5904\u7684\uff0c\u8fd9\u65f6\u5982\u679c\u642d\u5efa\u4e00\u4e2a node \u7248 graphql \u6865\u6881\uff0c\u90a3\u53c8\u5982\u4f55\u8854\u63a5\u8fd9\u4e2a\u6865\u6881\u4e0e\u540e\u7aef\u5462\uff1f\u6240\u4ee5\u4f7f\u7528 graphql \u7684\u82e5\u4e0d\u662f\u7b2c\u4e00\u624b\u540e\u7aef\u4ee3\u7801\uff0c\u4f7f\u7528\u540e\u4e5f\u4e0d\u4f1a\u6709\u591a\u5c11\u6548\u679c\u3002"),Object(o.b)("p",null,"\u66f4\u591a\u7ec6\u8282\u53ef\u4ee5\u8bbf\u95ee ",Object(o.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/20638731"},"GraphQL and Relay \u6d45\u6790"),"\uff0c\u90a3\u7bc7\u662f\u57fa\u4e8e relay \u7684\uff0c\u73b0\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-server")," \u770b\u4e0a\u53bb\u662f\u66f4\u8f7b\u91cf\u7ea7\u7684\u65b9\u6848\u3002"),Object(o.b)("h3",{id:"reason"},"reason"),Object(o.b)("p",null,"\u6700\u8fd1\u7684 3.0 \u7248\u672c\u4f7f\u7528 JavaScript \u7684 application/abstraction \u8bed\u6cd5\u4ee3\u66ff\u4e86 OCaml \u7684\u8bed\u6cd5\uff0c\u770b\u4e0a\u53bb\u7a0d\u5fae\u987a\u773c\u4e00\u4e9b\u4e86\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-reason"},"myFunction(arg1, arg2) // 3.0 \u8bed\u6cd5\nmyFunction arg1 arg2   // 2.0 \u8bed\u6cd5\n")),Object(o.b)("p",null,"\u80fd\u770b\u51fa\u6765 reason \u5728\u5f80 js \u5f00\u53d1\u793e\u533a\u9760\uff0c\u4e0d\u8fc7\u5927\u90e8\u5206\u8bed\u6cd5\u5bf9 js \u5f00\u53d1\u8005\u90fd\u6bd4\u8f83\u964c\u751f\uff0c\u76f8\u6bd4\u4e8e typescript\uff0c\u8df3\u8dc3\u6027\u6709\u70b9\u592a\u5927\u4e86\u3002"),Object(o.b)("h4",{id:"reason-react"},"reason react"),Object(o.b)("p",null,"\u4f7f\u7528 reason \u5199\u4e00\u4e2a react \u7ec4\u4ef6\u662f\u8fd9\u6837\u7684\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-reason"},'let component = ReasonReact.reducerComponent("Greeting");\n\nlet make = (~name, _children) => {\n  ...component,\n  initialState: () => 0, /* here, state is an `int` */\n  render: (self) => {\n    let greeting =\n      "Hello " ++ name ++ ". You\'ve clicked the button " ++ string_of_int(self.state) ++ " time(s)!";\n    <div>{ReasonReact.stringToElement(greeting)}</div>\n  }\n};\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"~name")," \u79f0\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"Labeled Arguments"),"\uff0c\u4e5f\u5c31\u662f\uff0c\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u53ef\u4ee5\u65e0\u89c6\u987a\u5e8f\uff0c\u663e\u793a\u6307\u5b9a\u5165\u53c2\u540d\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"make(~name=5)"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"initialState")," \u5bf9\u5e94 reactjs \u4e2d ",Object(o.b)("inlineCode",{parentName:"p"},"state"),"\uff0c\u5176\u4ed6\u4e0e reactjs \u90fd\u5f88\u50cf\u3002"),Object(o.b)("h4",{id:"reason-react-\u66f4\u65b0-state"},"reason react \u66f4\u65b0 state"),Object(o.b)("p",null,"\u76f8\u6bd4 react \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"setState"),"\uff0creason react \u63d0\u4f9b\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"reducer")," \u652f\u6301\uff0c\u8fd9\u91cc\u53ef\u4ee5\u7c7b\u6bd4\u5230 redux\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-reason"},'let make = (_children) => {\n  ...component,\n  initialState: () => {count: 0, show: false},\n  reducer: (action, state) =>\n    switch (action) {\n    | Click => ReasonReact.Update({...state, count: state.count + 1})\n    | Toggle => ReasonReact.Update({...state, show: ! state.show})\n    },\n  render: (self) => {\n    let message = "Clicked " ++ string_of_int(self.state.count) ++ " times(s)";\n    <div>\n      <MyDialog\n        onClick={_event => self.send(Click)}\n        onSubmit={_event => self.send(Toggle)}\n      />\n      {ReasonReact.stringToElement(message)}\n    </div>\n  }\n};\n')),Object(o.b)("p",null,"\u9664\u4e86\u7c7b\u578b\u63d0\u793a\u652f\u6301\u6a21\u5f0f\u5339\u914d\uff08",Object(o.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/32112508"},"ts \u4e5f\u652f\u6301\u4e86"),"\uff09\u6bd4\u8f83\u5b8c\u7f8e\u4e4b\u5916\uff0c\u5176\u4ed6\u548c redux \u8fd8\u771f\u6ca1\u5565\u533a\u522b\u3002"),Object(o.b)("p",null,"\u81f3\u4e8e immutable \u7279\u6027\uff0creason \u672c\u8eab\u4e5f\u53ea\u652f\u6301 immutable \u68c0\u6d4b\u800c\u5df2\uff0c\u540c\u65f6\u652f\u6301\u4e86\u7ed3\u6784\u8bed\u6cd5\uff0c\u53ef\u4ee5\u8f83\u4e3a\u65b9\u4fbf\u8fdb\u884c immutable \u8ba1\u7b97\uff08es \u4e5f\u652f\u6301\u4e86\uff09\u3002"),Object(o.b)("p",null,"\u5982\u679c\u60f3\u5728\u590d\u6742\u573a\u666f\u6df1\u5165\u4f7f\u7528 immutable\uff0c\u53ef\u4ee5\u770b\u770b\u8fd9\u4e2a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reasonml-community/bs-immutablejs"},"Reason + BuckleScript bindings to Immutable.js"),"\u3002"),Object(o.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(o.b)("p",null,"graphql \u5f88\u60ca\u8273\uff0c\u4f46\u5982\u679c\u4e0d\u80fd\u5e94\u7528\u5230\u540e\u7aef\u7b2c\u4e00\u624b\u4ee3\u7801\u5c31\u6ca1\u4ec0\u4e48\u7528\u3002"),Object(o.b)("p",null,"reason \u6574\u4f53\u770b\u4e0a\u53bb\u6bd4\u521d\u7248 react + redux \u751f\u6001\u5f3a\u5927\u4e86\u592a\u591a\uff0c\u4f46\u662f\u4e0e\u73b0\u5728\u7684\u524d\u7aef\u751f\u6001\u94fe typescript + react + redux* \u6700\u65b0\u7279\u5f81\u6bd4\u8d77\u6765\uff0c\u552f\u4e00\u60ca\u8273\u7684\u5730\u65b9\uff0c\u5c31\u662f\u5bf9 ",Object(o.b)("inlineCode",{parentName:"p"},"ocaml")," \u7528\u6237\u8f83\u4e3a\u53cb\u597d\uff0c\u53e6\u5916\u5728\u5404\u5927\u652f\u6301\u7f16\u8bd1\u5230 js \u8bed\u8a00\uff0c\u7eb7\u7eb7\u652f\u6301 Assembly \u7f16\u8bd1\u540e\uff0c\u8fd9\u4e9b\u8bed\u8a00\u66f4\u52a0\u8d8b\u540c\u4e86\uff0c\u76f8\u6bd4\u4e4b\u4e0b ts \u66f4\u9002\u5408\u7528\u5728\u751f\u4ea7\u73af\u5883\u3002"),Object(o.b)("h2",{id:"5-\u66f4\u591a\u8ba8\u8bba"},"5 \u66f4\u591a\u8ba8\u8bba"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(o.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/56"},"\u7cbe\u8bfb\u300a\u521d\u63a2 Reason \u4e0e GraphQL\u300b \xb7 Issue #56 \xb7 dt-fe/weekly"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(o.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}s.isMDXComponent=!0}}]);