(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return b}));var s=n(3),c=n(7),l=(n(0),n(468)),r={title:"7. \u7cbe\u8bfb \u8bf7\u505c\u6b62 css-in-js \u7684\u884c\u4e3a",id:"007",hide_title:!0},o={unversionedId:"007",id:"007",isDocsHomePage:!1,title:"7. \u7cbe\u8bfb \u8bf7\u505c\u6b62 css-in-js \u7684\u884c\u4e3a",description:"\u672c\u5468\u7cbe\u8bfb\u6587\u7ae0\uff1a\u8bf7\u505c\u6b62 css-in-js \u7684\u884c\u4e3a",source:"@site/weekly/007.\u7cbe\u8bfb \u8bf7\u505c\u6b62 css-in-js \u7684\u884c\u4e3a.md",slug:"/007",permalink:"/weekly/007",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/007.\u7cbe\u8bfb \u8bf7\u505c\u6b62 css-in-js \u7684\u884c\u4e3a.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"6. \u7cbe\u8bfbJavaScript\u9519\u8bef\u5806\u6808\u5904\u7406",permalink:"/weekly/006"},next:{title:"8. \u7cbe\u8bfb\u5165\u5751React\u524d\u6ca1\u6709\u4eba\u4f1a\u544a\u8bc9\u4f60\u7684\u4e8b",permalink:"/weekly/008"}},a=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u5185\u5bb9\u6982\u8981",id:"2-\u5185\u5bb9\u6982\u8981",children:[{value:"styled-components",id:"styled-components",children:[]},{value:"css-modules",id:"css-modules",children:[]},{value:"react-css-modules",id:"react-css-modules",children:[]},{value:"\u6587\u7ae0\u5185\u5bb9",id:"\u6587\u7ae0\u5185\u5bb9",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"Styled-components \u4f18\u7f3a\u70b9",id:"styled-components-\u4f18\u7f3a\u70b9",children:[]},{value:"css-modules \u4f18\u7f3a\u70b9",id:"css-modules-\u4f18\u7f3a\u70b9",children:[]},{value:"\u5173\u4e8e scss/less",id:"\u5173\u4e8e-scssless",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],i={toc:a};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(s.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u672c\u5468\u7cbe\u8bfb\u6587\u7ae0\uff1a",Object(l.b)("a",{parentName:"p",href:"https://hackernoon.com/stop-using-css-in-javascript-for-web-development-fa32fb873dcc"},"\u8bf7\u505c\u6b62 css-in-js \u7684\u884c\u4e3a")),Object(l.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210408175154.png",alt:null})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8fd9\u7bc7\u6587\u7ae0\u8868\u9762\u662f\u5728\u8bb2 CSS in JS\uff0c\u5b9e\u9645\u4e0a\u662f CSS Modules \u652f\u6301\u8005\u4e0e styled-components \u62e5\u8db8\u4e4b\u95f4\u7684\u5507\u67aa\u820c\u5251\u3001\u4f60\u6765\u6211\u5f80\u3002\u4ece 2014 \u5e74 Vjeux \u7684\u6f14\u8bb2\u5f00\u59cb\uff0ccss-in-js \u7684\u8f6e\u5b50\u5c42\u51fa\u4e0d\u7a77\u3002\u7ec8\u4e8e\u8fc7\u4e86\u4e09\u5e74\uff0c\u9e21\u8840\u65f6\u671f\u5df2\u7ecf\u6162\u6162\u8fc7\u53bb\uff0c\u5927\u5bb6\u5f00\u59cb\u51b7\u9759\u601d\u8003\u4e86\u3002")),Object(l.b)("h2",{id:"2-\u5185\u5bb9\u6982\u8981"},"2 \u5185\u5bb9\u6982\u8981"),Object(l.b)("h3",{id:"styled-components"},"styled-components"),Object(l.b)("p",null,"styled-components \u5229\u7528 ES6 \u7684 tagged template \u8bed\u6cd5\u521b\u5efa react \u7eaf\u6837\u5f0f\u7ec4\u4ef6\u3002\u6d88\u9664\u4e86\u4eba\u8089\u5728 dom \u548c css \u4e4b\u95f4\u505a\u6620\u5c04\u548c\u5207\u6362\u7684\u75db\u82e6\uff0c\u5e76\u4e14\u6709\u5927\u90e8\u5206\u7f16\u8f91\u5668\u63d2\u4ef6\u7684\u5927\u529b\u652f\u6301\uff08\u8bed\u6cd5\u9ad8\u4eae\u7b49\uff09\u3002\u6b64\u5916\uff0cstyled-components \u5728 ReactNaive \u4e2d\u5c24\u5176\u9002\u7528\u3002"),Object(l.b)("p",null,"styled-components \u7b80\u5355\u6613\u5b66\uff0c\u5f15\u7528\u5b98\u65b9\u6e90\u7801\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nimport styled from 'styled-components';\n\nconst Title = styled.h1`\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n`;\n\n<Title>\n  Hello World, this is my first styled component!\n</Title>\n")),Object(l.b)("h3",{id:"css-modules"},"css-modules"),Object(l.b)("p",null,"\u987e\u540d\u601d\u4e49\uff0ccss-modules \u5c06 css \u4ee3\u7801\u6a21\u5757\u5316\uff0c\u53ef\u4ee5\u5f88\u65b9\u9762\u7684\u907f\u514d\u672c\u6a21\u5757\u6837\u5f0f\u88ab\u6c61\u67d3\u3002\u5e76\u4e14\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u590d\u7528 css \u4ee3\u7801\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-css"},"// \u5168\u5c40\u53d8\u91cf\n:global(.className) {\n  background-color: blue;\n}\n\n// \u672c\u5730\u53d8\u91cf\uff0c\u5176\u5b83\u6a21\u5757\u65e0\u6cd5\u6c61\u67d3\n.className {\n  background-color: blue;\n}\n\n.title {\n  // \u590d\u7528 className \u7c7b\u7684\u6837\u5f0f\n  composes: className;\n  color: red;\n}\n")),Object(l.b)("h3",{id:"react-css-modules"},"react-css-modules"),Object(l.b)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u6587\u7ae0\u7684\u4f5c\u8005\u4e5f\u662f ",Object(l.b)("a",{parentName:"p",href:"https://github.com/gajus/react-css-modules"},"react-css-modules")," \u7684\u4f5c\u8005\u3002"),Object(l.b)("p",null,"react-css-modules \u4ee3\u7801\u793a\u4f8b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport CSSModules from 'react-css-modules';\nimport styles from './table.css';\n\nclass Table extends React.Component {\n    render () {\n        return <div styleName='table'>\n            <div styleName='row'>\n                <div styleName='cell'>A0</div>\n                <div styleName='cell'>B0</div>\n            </div>\n        </div>;\n    }\n}\n\nexport default CSSModules(Table, styles);\n")),Object(l.b)("p",null,"react-css-modules \u5f15\u5165\u4e86 styleName\uff0c\u5c06\u672c\u5730\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf\u5f88\u6e05\u6670\u7684\u5206\u5f00\u3002\u5e76\u4e14\u4e5f\u907f\u514d\u4e86\u6bcf\u6b21\u5bf9 styles \u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u672c\u5730 className \u540d\u4e5f\u4e0d\u7528\u603b\u662f\u5199\u6210 camelCase\u3002"),Object(l.b)("p",null,"\u53e6\u5916\uff0c\u4f7f\u7528 react-css-modules\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8986\u76d6\u672c\u5730\u53d8\u91cf\u7684\u6837\u5f0f\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plain"},"import customStyles from './table-custom-styles.css';\n\n<Table styles={customStyles} />;\n")),Object(l.b)("h3",{id:"\u6587\u7ae0\u5185\u5bb9"},"\u6587\u7ae0\u5185\u5bb9"),Object(l.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(l.b)("p",null,"\u53c2\u4e0e\u672c\u6b21\u7cbe\u8bfb\u7684\u540c\u5b66\u6709 ",Object(l.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/huang-zi-yi-83/answers"},"\u9ec4\u5b50\u6bc5"),"\uff0c",Object(l.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/yangsen/answers"},"\u6768\u68ee")," \u548c ",Object(l.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/camsong/answers"},"camsong"),"\u3002\u8be5\u90e8\u5206\u7531\u4ed6\u4eec\u7684\u89c2\u70b9\u603b\u7ed3\u800c\u51fa\u3002"),Object(l.b)("p",null,"CSS \u672c\u8eab\u6709\u4e0d\u5c11\u7f3a\u9677\uff0c\u5982\u4e66\u5199\u7e41\u7410\uff08\u4e0d\u652f\u6301\u5d4c\u5957\uff09\u3001\u6837\u5f0f\u6613\u51b2\u7a81\uff08\u6ca1\u6709\u4f5c\u7528\u57df\u6982\u5ff5\uff09\u3001\u7f3a\u5c11\u53d8\u91cf\uff08\u4e0d\u4fbf\u4e8e\u4e00\u952e\u6362\u4e3b\u9898\uff09\u7b49\u4e0d\u4e00\u800c\u8db3\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u793e\u533a\u91cc\u7684\u89e3\u51b3\u65b9\u6848\u4e5f\u662f\u51fa\u4e86\u4e00\u832c\u53c8\u4e00\u832c\uff0c\u4ece\u6700\u65e9\u7684 CSS prepocessor\uff08SASS\u3001LESS\u3001Stylus\uff09\u5230\u540e\u6765\u7684\u540e\u8d77\u4e4b\u79c0 PostCSS\uff0c\u518d\u5230 CSS Modules\u3001Styled-Components \u7b49\u3002\u66f4\u6709\u751a\u8005\uff0c\u6709\u4eba\u7ef4\u62a4\u4e86\u4e00\u4efd\u5b8c\u6574\u7684 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/MicheleBertoli/css-in-js"},"CSS in JS \u6280\u672f\u65b9\u6848\u7684\u5bf9\u6bd4"),"\u3002\u622a\u81f3\u76ee\u524d\uff0c\u5df2\u6709 49 \u79cd\u4e4b\u591a\u3002"),Object(l.b)("h3",{id:"styled-components-\u4f18\u7f3a\u70b9"},"Styled-components \u4f18\u7f3a\u70b9"),Object(l.b)("h4",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),Object(l.b)("h5",{id:"\u4f7f\u7528\u6210\u672c\u4f4e"},"\u4f7f\u7528\u6210\u672c\u4f4e"),Object(l.b)("p",null,"\u5982\u679c\u662f\u8981\u505a\u4e00\u4e2a\u7ec4\u4ef6\u5e93\uff0c\u8ba9\u4f7f\u7528\u65b9\u62ff\u7740 npm \u5c31\u80fd\u76f4\u63a5\u7528\uff0c\u6837\u5f0f\u5168\u90e8\u81ea\u5df1\u641e\u5b9a\uff0c\u4e0d\u9700\u8981\u4f9d\u8d56\u5176\u5b83\u7ec4\u4ef6\uff0c\u5982 react-dnd \u8fd9\u79cd\uff0c\u6bd4\u8f83\u9002\u5408\u3002"),Object(l.b)("h5",{id:"\u66f4\u9002\u5408\u8de8\u5e73\u53f0"},"\u66f4\u9002\u5408\u8de8\u5e73\u53f0"),Object(l.b)("p",null,"\u9002\u7528\u4e8e react-native \u8fd9\u7c7b\u672c\u8eab\u5c31\u6ca1\u6709 css \u7684\u8fd0\u884c\u73af\u5883\u3002"),Object(l.b)("h4",{id:"\u7f3a\u9677"},"\u7f3a\u9677"),Object(l.b)("h5",{id:"\u7f3a\u4e4f\u6269\u5c55\u6027"},"\u7f3a\u4e4f\u6269\u5c55\u6027"),Object(l.b)("p",null,"\u6837\u5f0f\u5c31\u50cf\u5c0f\u5b69\u7684\u8138\uff0c\u8bf4\u53d8\u5c31\u53d8\u3002\u6bd4\u5982\u662f\u6700\u7b80\u5355\u7684 button\uff0c\u53ef\u80fd\u5728\u7528\u7684\u65f6\u5019\u7531\u4e8e\u573a\u666f\u4e0d\u540c\uff0c\u5c31\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684 font-size\uff0cheight\uff0cwidth\uff0cborder \u7b49\u7b49\uff0c\u5982\u679c\u5168\u90e8\u4f7f\u7528 css-in-js \u90a3\u5c06\u9700\u8981\u628a\u6bcf\u4e2a\u6837\u5f0f\u90fd\u53d8\u6210 props\uff0c\u5982\u679c\u8fd9\u4e2a\u7ec4\u4ef6\u7684 dom \u8fd8\u6709\u591a\u5c42\u7ea7\u5462\uff1f\u4f60\u662f\u65e0\u6cd5\u628a\u6240\u6709\u6837\u5f0f\u90fd\u6dfb\u52a0\u5230 props \u4e2d\u3002\u540c\u65f6\u4e5f\u4e0d\u80fd\u5168\u90e8\u8bbe\u7f6e\u6210\u53d8\u91cf\uff0c\u90a3\u5c31\u4e27\u5931\u4e86\u5355\u72ec\u5b9a\u5236\u67d0\u4e2a\u7ec4\u4ef6\u7684\u80fd\u529b\u3002css-in-js \u751f\u6210\u7684 className \u901a\u5e38\u662f\u4e0d\u7a33\u5b9a\u7684\u968f\u673a\u4e32\uff0c\u8fd9\u5c31\u7ed9\u5916\u90e8\u60f3\u7075\u6d3b\u8986\u76d6\u6837\u5f0f\u589e\u52a0\u4e86\u56f0\u96be\u3002"),Object(l.b)("h3",{id:"css-modules-\u4f18\u7f3a\u70b9"},"css-modules \u4f18\u7f3a\u70b9"),Object(l.b)("h4",{id:"\u4f18\u70b9-1"},"\u4f18\u70b9"),Object(l.b)("p",null,"1\u3001CSS Modules \u53ef\u4ee5\u6709\u6548\u907f\u514d\u5168\u5c40\u6c61\u67d3\u548c\u6837\u5f0f\u51b2\u7a81\uff0c\u80fd\u6700\u5927\u5316\u5730\u7ed3\u5408\u73b0\u6709 CSS \u751f\u6001\u548c JS \u6a21\u5757\u5316\u80fd\u529b"),Object(l.b)("p",null,"2\u3001\u4e0e SCSS \u5bf9\u6bd4\uff0c\u53ef\u4ee5\u907f\u514d className \u7684\u5c42\u7ea7\u5d4c\u5957\uff0c\u53ea\u4f7f\u7528\u4e00\u4e2a className \u5c31\u80fd\u628a\u6240\u6709\u6837\u5f0f\u5b9a\u4e49\u597d\u3002"),Object(l.b)("h4",{id:"\u7f3a\u70b9\uff1a"},"\u7f3a\u70b9\uff1a"),Object(l.b)("p",null,"1\u3001\u4e0e\u7ec4\u4ef6\u5e93\u96be\u4ee5\u914d\u5408"),Object(l.b)("p",null,"2\u3001\u4f1a\u5e26\u6765\u4e00\u4e9b\u4f7f\u7528\u6210\u672c\uff0c\u672c\u5730\u6837\u5f0f\u8986\u76d6\u56f0\u96be\uff0c\u5199\u5230\u6700\u540e\u53ef\u80fd\u4e00\u76f4\u5728\u7528 :global\u3002"),Object(l.b)("h3",{id:"\u5173\u4e8e-scssless"},"\u5173\u4e8e scss/less"),Object(l.b)("p",null,"\u65e0\u8bba\u662f sass \u8fd8\u662f less \u90fd\u6709\u4e00\u5957\u81ea\u5df1\u7684\u8bed\u6cd5\uff0cpostcss \u66f4\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u8bed\u6cd5\uff0c\u81ea\u521b\u7684\u8bed\u6cd5\u6700\u5927\u7279\u70b9\u5c31\u662f\u96f7\u540c\uff0c\u683c\u5f0f\u53c8\u4e0d\u4e00\u81f4\uff0c\u589e\u52a0\u4e86\u65e0\u610f\u4e49\u7684\u5b66\u4e60\u6210\u672c\u3002\u6211\u4eec\u66f4\u5e0c\u671b\u53bb\u5b66\u4e60\u548c\u4f7f\u7528\u4e07\u53d8\u4e0d\u79bb\u5176\u5b97\u7684\u4e1c\u897f\uff0c\u800c\u4e0d\u613f\u610f\u4f7f\u7528\u5404\u79cd\u5b9a\u5236\u7684\u201c\u8bed\u6cd5\u7cd6\u201d\u6765\u201c\u63d0\u9ad8\u6548\u7387\u201d\u3002"),Object(l.b)("p",null,"\u5c31 css \u53d8\u91cf\u4e0e js \u901a\u4fe1\u800c\u8a00\uff0c\u867d\u7136\u8349\u6848\u5df2\u7ecf\u8003\u8651\u5230\u4e86\u8fd9\u4e00\u70b9\uff0c\u901a\u8fc7\u8868\u8fbe\u5f0f\u4e0e attribute \u901a\u4fe1\uff0c\u4f7f\u7528 js \u4e0e attribute \u540c\u6b65\u3002\u4e0d\u96be\u60f3\u8c61\uff0c\u8fd9\u79cd\u60c5\u51b5\u7ef4\u62a4\u7684\u53d8\u91cf\u503c\u6700\u7ec8\u662f\u5b58\u50a8\u5728 js \u4e2d\u66f4\u52a0\u59a5\u5f53\uff0c\u7136\u800c scss \u7ed9\u5927\u5bb6\u5e26\u6765\u7684 css first \u601d\u60f3\u6839\u6df1\u8482\u56fa\uff0c\u5bfc\u81f4\u8bb8\u591a\u57fa\u7840\u5e93\u7684\u53d8\u91cf\u5b8c\u5168\u5b58\u50a8\u5728 _variable.scss \u6587\u4ef6\u4e2d\uff0c\u73b0\u5728\u65e0\u8bba\u662f\u60f3\u9002\u5e94 css \u7684\u65b0\u7279\u6027\uff0c\u8fd8\u4f7f\u7528 css-in-js \u90fd\u6709\u5de8\u5927\u7684\u6210\u672c\uff0c\u5bfc\u81f4\u9879\u76ee\u51e0\u4e4e\u65e0\u6cd5\u8fc1\u79fb\u3002\u53cd\u8fc7\u6765\uff0c\u5982\u679c\u53d8\u91cf\u5b58\u50a8\u5728 js \u4e2d\uff0c\u5c31\u50cf\u8349\u6848\u4e2d\u8bf4\u7684\u4e00\u6837\u8f7b\u5de7\uff0c\u4f60\u53ea\u8981\u6362\u4e00\u79cd\u65b9\u5f0f\u5b9e\u73b0 css \u5c31\u884c\u4e86\u3002"),Object(l.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(l.b)("p",null,"\u5728\u4f17\u591a\u89e3\u51b3\u65b9\u6848\u4e2d\uff0c\u6ca1\u6709\u7edd\u5bf9\u7684\u4f18\u52a3\u3002\u8fd8\u662f\u8981\u7ed3\u5408\u81ea\u5df1\u7684\u573a\u666f\u6765\u51b3\u5b9a\u3002"),Object(l.b)("p",null,"\u6211\u4eec\u56e2\u961f\u5728\u4f7f\u7528\u8fc7 scss \u548c css modules \u540e\uff0c\u4ecd\u7136\u53c8\u91cd\u65b0\u9009\u62e9\u4e86\u4f7f\u7528 scss\u3002css modules \u867d\u7136\u6709\u6548\u89e3\u51b3\u4e86\u6837\u5f0f\u51b2\u7a81\u7684\u95ee\u9898\uff0c\u4f46\u662f\u5e26\u6765\u7684\u4f7f\u7528\u6210\u672c\u4e5f\u5f88\u5927\u3002\u5c24\u5176\u662f\u5728\u5199\u52a8\u753b\uff08keyframe\uff09\u7684\u65f6\u5019\uff0c\u8bed\u6cd5\u5c24\u5176\u5947\u602a\uff0c\u603b\u662f\u51fa\u9519\uff0c\u96be\u4ee5\u8c03\u8bd5\u3002\u5e76\u4e14\u6211\u4eec\u56e2\u961f\u5728\u5f00\u53d1\u65f6\uff0c\u56e0\u4e3a\u5927\u5bb6\u4e66\u5199\u89c4\u8303\uff0c\u4e5f\u4ece\u6765\u6ca1\u6709\u78b0\u5230\u8fc7\u6837\u5f0f\u51b2\u7a81\u7684\u95ee\u9898\u3002"),Object(l.b)("p",null,"Styled-components \u7b14\u8005\u672a\u66fe\u4f7f\u7528\u8fc7\uff0c\u4f46\u5b83\u6d88\u9664\u4eba\u8089\u5728 dom \u548c css \u4e4b\u95f4\u505a\u6620\u5c04\u7684\u4f18\u70b9\uff0c\u975e\u5e38\u5438\u5f15\u6211\u3002\u800c\u5bf9\u4e8e\u6837\u5f0f\u6269\u5c55\u7684\u95ee\u9898\uff0c\u5176\u5b9e\u4e5f\u6709",Object(l.b)("a",{parentName:"p",href:"https://github.com/styled-components/styled-components#user-content-overriding-component-styles"},"\u6bd4\u8f83\u4f18\u96c5\u7684\u65b9\u5f0f"),"\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const CustomedButton = styled(Button)`\n  color: customedColor;\n`;\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(l.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}b.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var s=n(0),c=n.n(s);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,c=function(e,t){if(null==e)return{};var n,s,c={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),b=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,r=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),p=b(n),u=s,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||l;return n?c.a.createElement(m,o(o({ref:t},i),{},{components:n})):c.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var i=2;i<l;i++)r[i]=n[i];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);