(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{373:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return r})),t.d(n,"default",(function(){return b}));var o=t(3),a=t(7),c=(t(0),t(385)),p={title:"95. \u7cbe\u8bfb\u300aFunction VS Class \u7ec4\u4ef6\u300b",id:"095",hide_title:!0},l={unversionedId:"095",id:"095",isDocsHomePage:!1,title:"95. \u7cbe\u8bfb\u300aFunction VS Class \u7ec4\u4ef6\u300b",description:"1. \u5f15\u8a00",source:"@site/weekly/095.\u7cbe\u8bfb\u300aFunction VS Class \u7ec4\u4ef6\u300b.md",slug:"/095",permalink:"/weekly/095",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/095.\u7cbe\u8bfb\u300aFunction VS Class \u7ec4\u4ef6\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617879406,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"94. \u7cbe\u8bfb\u300aServerless \u7ed9\u524d\u7aef\u5e26\u6765\u4e86\u4ec0\u4e48\u300b",permalink:"/weekly/094"},next:{title:"96. \u7cbe\u8bfb\u300auseEffect \u5b8c\u5168\u6307\u5357\u300b",permalink:"/weekly/096"}},r=[{value:"1. \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2. \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[{value:"Capture props",id:"capture-props",children:[]},{value:"Hooks \u4e5f\u5177\u6709 capture value \u7279\u6027",id:"hooks-\u4e5f\u5177\u6709-capture-value-\u7279\u6027",children:[]}]},{value:"3. \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"\u600e\u4e48\u66ff\u4ee3 shouldComponentUpdate",id:"\u600e\u4e48\u66ff\u4ee3-shouldcomponentupdate",children:[]},{value:"\u600e\u4e48\u66ff\u4ee3 componentDidUpdate",id:"\u600e\u4e48\u66ff\u4ee3-componentdidupdate",children:[]},{value:"\u600e\u4e48\u66ff\u4ee3 forceUpdate",id:"\u600e\u4e48\u66ff\u4ee3-forceupdate",children:[]},{value:"state \u62c6\u5206\u8fc7\u591a",id:"state-\u62c6\u5206\u8fc7\u591a",children:[]},{value:"\u83b7\u53d6\u4e0a\u4e00\u4e2a props",id:"\u83b7\u53d6\u4e0a\u4e00\u4e2a-props",children:[]},{value:"\u6027\u80fd\u6ce8\u610f\u4e8b\u9879",id:"\u6027\u80fd\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]}],s={toc:r};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-\u5f15\u8a00"},"1. \u5f15\u8a00"),Object(c.b)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u4e86\u89e3 Function \u5199\u6cd5\u7684\u7ec4\u4ef6\u5462\uff1f\u56e0\u4e3a\u5b83\u6b63\u5728\u53d8\u5f97\u8d8a\u6765\u8d8a\u91cd\u8981\u3002"),Object(c.b)("p",null,"\u90a3\u4e48 React \u4e2d ",Object(c.b)("strong",{parentName:"p"},"Function Component \u4e0e Class Component \u6709\u4f55\u4e0d\u540c\uff1f")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://overreacted.io/how-are-function-components-different-from-classes/"},"how-are-function-components-different-from-classes")," \u8fd9\u7bc7\u6587\u7ae0\u5e26\u6765\u4e86\u4e00\u4e2a\u72ec\u7279\u7684\u89c6\u89d2\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u987a\u5e26\u4e00\u63d0\uff0c\u4ee5\u540e\u4f1a\u7528 Function Component \u4ee3\u66ff Stateless Component \u7684\u8bf4\u6cd5\uff0c\u539f\u56e0\u662f\uff1a\u81ea\u4ece Hooks \u51fa\u73b0\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u529f\u80fd\u5728\u4e0d\u65ad\u4e30\u5bcc\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0d\u518d\u9700\u8981\u5f3a\u8c03\u5176\u65e0\u72b6\u6001\u7279\u6027\uff0c\u56e0\u6b64\u53eb Function Component \u66f4\u4e3a\u6070\u5f53\u3002")),Object(c.b)("h2",{id:"2-\u6982\u8ff0"},"2. \u6982\u8ff0"),Object(c.b)("p",null,"\u539f\u6587\u4e8b\u5148\u7533\u660e\uff1a\u5e76\u6ca1\u6709\u5bf9 Function \u4e0e Classes \u8fdb\u884c\u4f18\u52a3\u5bf9\u6bd4\uff0c\u800c\u4ec5\u4ec5\u8fdb\u884c\u7279\u6027\u5bf9\u6bd4\uff0c\u6240\u4ee5\u4e0d\u63a5\u53d7\u4efb\u4f55\u5410\u69fd\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8fd9\u4e24\u79cd\u5199\u6cd5\u6ca1\u6709\u597d\u574f\u4e4b\u5206\uff0c\u6027\u80fd\u5dee\u8ddd\u4e5f\u51e0\u4e4e\u53ef\u4ee5\u5ffd\u7565\uff0c\u800c\u4e14 React \u4f1a\u957f\u671f\u652f\u6301\u8fd9\u4e24\u79cd\u5199\u6cd5\u3002")),Object(c.b)("h3",{id:"capture-props"},"Capture props"),Object(c.b)("p",null,"\u5bf9\u6bd4\u4e0b\u9762\u4e24\u6bb5\u4ee3\u7801\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Class Component:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'class ProfilePage extends React.Component {\n  showMessage = () => {\n    alert("Followed " + this.props.user);\n  };\n\n  handleClick = () => {\n    setTimeout(this.showMessage, 3000);\n  };\n\n  render() {\n    return <button onClick={this.handleClick}>Follow</button>;\n  }\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Function Component:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'function ProfilePage(props) {\n  const showMessage = () => {\n    alert("Followed " + props.user);\n  };\n\n  const handleClick = () => {\n    setTimeout(showMessage, 3000);\n  };\n\n  return <button onClick={handleClick}>Follow</button>;\n}\n')),Object(c.b)("p",null,"\uff08",Object(c.b)("a",{parentName:"p",href:"https://codesandbox.io/s/pjqnl16lm7"},"\u5728\u7ebf Demo"),"\uff09"),Object(c.b)("p",null,"\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u90fd\u63cf\u8ff0\u4e86\u540c\u4e00\u4e2a\u903b\u8f91\uff1a\u70b9\u51fb\u6309\u94ae 3 \u79d2\u540e ",Object(c.b)("inlineCode",{parentName:"p"},"alert")," \u7236\u7ea7\u4f20\u5165\u7684\u7528\u6237\u540d\u3002"),Object(c.b)("p",null,"\u5982\u4e0b\u7236\u7ea7\u7ec4\u4ef6\u7684\u8c03\u7528\u65b9\u5f0f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"<ProfilePageFunction user={this.state.user} />\n<ProfilePageClass user={this.state.user} />\n")),Object(c.b)("p",null,"\u90a3\u4e48\u5f53\u70b9\u51fb\u6309\u94ae\u540e\u7684 3 \u79d2\u5185\uff0c\u7236\u7ea7\u4fee\u6539\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"this.state.user"),"\uff0c\u5f39\u51fa\u7684\u7528\u6237\u540d\u662f\u4fee\u6539\u524d\u7684\u8fd8\u662f\u4fee\u6539\u540e\u7684\u5462\uff1f"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Class Component \u5c55\u793a\u7684\u662f\u4fee\u6539\u540e\u7684\u503c\uff1a")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1N8ObMwTqK1RjSZPhXXXfOFXa-950-351.gif",alt:null})),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Function Component \u5c55\u793a\u7684\u662f\u4fee\u6539\u524d\u7684\u503c\uff1a")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1kFCmMzTpK1RjSZKPXXa3UpXa-901-293.gif",alt:null})),Object(c.b)("p",null,"\u90a3\u4e48 React \u6587\u6863\u4e2d\u63cf\u8ff0\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"props")," \u4e0d\u662f\u4e0d\u53ef\u53d8\uff08Immutable\uff09 \u6570\u636e\u5417\uff1f\u4e3a\u5565\u5728\u8fd0\u884c\u65f6\u8fd8\u4f1a\u53d1\u751f\u53d8\u5316\u5462\uff1f"),Object(c.b)("p",null,"\u539f\u56e0\u5728\u4e8e\uff0c\u867d\u7136 ",Object(c.b)("inlineCode",{parentName:"p"},"props")," \u4e0d\u53ef\u53d8\uff0c\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"this")," \u5728 Class Component \u4e2d\u662f\u53ef\u53d8\u7684\uff0c\u56e0\u6b64 ",Object(c.b)("inlineCode",{parentName:"p"},"this.props")," \u7684\u8c03\u7528\u4f1a\u5bfc\u81f4\u6bcf\u6b21\u90fd\u8bbf\u95ee\u6700\u65b0\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"props"),"\u3002"),Object(c.b)("p",null,"\u800c Function Component \u4e0d\u5b58\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"this.props")," \u7684\u8bed\u6cd5\uff0c\u56e0\u6b64 ",Object(c.b)("inlineCode",{parentName:"p"},"props")," \u603b\u662f\u4e0d\u53ef\u53d8\u7684\u3002"),Object(c.b)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3\uff0c\u7b14\u8005\u8865\u5145\u4e00\u4e9b\u4ee3\u7801\u6ce8\u89e3\uff1a"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Function Component:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function ProfilePage(props) {\n  setTimeout(() => {\n    // \u5c31\u7b97\u7236\u7ec4\u4ef6 reRender\uff0c\u8fd9\u91cc\u62ff\u5230\u7684 props \u4e5f\u662f\u521d\u59cb\u7684\n    console.log(props);\n  }, 3000);\n}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Class Component:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"class ProfilePage extends React.Component {\n  render() {\n    setTimeout(() => {\n      // \u5982\u679c\u7236\u7ec4\u4ef6 reRender\uff0cthis.props \u62ff\u5230\u7684\u6c38\u8fdc\u662f\u6700\u65b0\u7684\u3002\n      // \u5e76\u4e0d\u662f props \u53d8\u4e86\uff0c\u800c\u662f this.props \u6307\u5411\u4e86\u65b0\u7684 props\uff0c\u65e7\u7684 props \u627e\u4e0d\u5230\u4e86\n      console.log(this.props);\n    }, 3000);\n  }\n}\n")),Object(c.b)("p",null,"\u5982\u679c\u5e0c\u671b\u5728 Class Component \u6355\u83b7\u77ac\u65f6 Props\uff0c\u53ef\u4ee5\uff1a ",Object(c.b)("inlineCode",{parentName:"p"},"const props = this.props;"),"\uff0c\u4f46\u8fd9\u6837\u7684\u4ee3\u7801\u5f88\u8e69\u811a\uff0c\u6240\u4ee5\u5982\u679c\u5e0c\u671b\u62ff\u5230\u7a33\u5b9a\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"props"),"\uff0c\u4f7f\u7528 Function Component \u662f\u66f4\u597d\u7684\u9009\u62e9\u3002"),Object(c.b)("h3",{id:"hooks-\u4e5f\u5177\u6709-capture-value-\u7279\u6027"},"Hooks \u4e5f\u5177\u6709 capture value \u7279\u6027"),Object(c.b)("p",null,"\u770b\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'function MessageThread() {\n  const [message, setMessage] = useState("");\n\n  const showMessage = () => {\n    alert("You said: " + message);\n  };\n\n  const handleSendClick = () => {\n    setTimeout(showMessage, 3000);\n  };\n\n  const handleMessageChange = e => {\n    setMessage(e.target.value);\n  };\n\n  return (\n    <>\n      <input value={message} onChange={handleMessageChange} />\n      <button onClick={handleSendClick}>Send</button>\n    </>\n  );\n}\n')),Object(c.b)("p",null,"\uff08",Object(c.b)("a",{parentName:"p",href:"https://codesandbox.io/s/93m5mz9w24"},"\u5728\u7ebf Demo"),"\uff09"),Object(c.b)("p",null,"\u5728\u70b9\u51fb ",Object(c.b)("inlineCode",{parentName:"p"},"Send")," \u6309\u94ae\u540e\uff0c\u518d\u6b21\u4fee\u6539\u8f93\u5165\u6846\u7684\u503c\uff0c3 \u79d2\u540e\u7684\u8f93\u51fa\u4f9d\u7136\u662f ",Object(c.b)("strong",{parentName:"p"},"\u70b9\u51fb\u524d\u8f93\u5165\u6846\u7684\u503c"),"\u3002\u8fd9\u8bf4\u660e Hooks \u540c\u6837\u5177\u6709 capture value \u7684\u7279\u6027\u3002"),Object(c.b)("p",null,"\u5229\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u53ef\u4ee5\u89c4\u907f capture value \u7279\u6027\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'function MessageThread() {\n  const latestMessage = useRef("");\n\n  const showMessage = () => {\n    alert("You said: " + latestMessage.current);\n  };\n\n  const handleSendClick = () => {\n    setTimeout(showMessage, 3000);\n  };\n\n  const handleMessageChange = e => {\n    latestMessage.current = e.target.value;\n  };\n}\n')),Object(c.b)("p",null,"\u53ea\u8981\u5c06\u8d4b\u503c\u4e0e\u53d6\u503c\u7684\u5bf9\u8c61\u53d8\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef"),"\uff0c\u800c\u4e0d\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"useState"),"\uff0c\u5c31\u53ef\u4ee5\u8eb2\u8fc7 capture value \u7279\u6027\uff0c\u5728 3 \u79d2\u540e\u5f97\u5230\u6700\u65b0\u7684\u503c\u3002"),Object(c.b)("p",null,"\u8fd9\u8bf4\u660e\u4e86\u5229\u7528 Function Component + Hooks \u53ef\u4ee5\u5b9e\u73b0 Class Component \u505a\u4e0d\u5230\u7684 capture props\u3001capture value\uff0c\u800c\u4e14 React \u5b98\u65b9\u4e5f\u63a8\u8350 ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#do-i-need-to-rewrite-all-my-class-components"},"\u65b0\u7684\u4ee3\u7801\u4f7f\u7528 Hooks \u7f16\u5199"),"\u3002"),Object(c.b)("h2",{id:"3-\u7cbe\u8bfb"},"3. \u7cbe\u8bfb"),Object(c.b)("p",null,"\u539f\u6587 ",Object(c.b)("a",{parentName:"p",href:"https://overreacted.io/how-are-function-components-different-from-classes/"},"how-are-function-components-different-from-classes")," \u4ece\u4e00\u4e2a\u4fa7\u9762\u8bb2\u8ff0\u4e86 Function Component \u4e0e Class Component \u7684\u4e0d\u540c\u70b9\uff0c\u4e4b\u6240\u4ee5\u5c06 Function Component \u4e0e Class Component \u76f8\u63d0\u5e76\u8bba\uff0c\u51e0\u4e4e\u90fd\u8981\u5f52\u529f\u4e8e Hooks API \u7684\u51fa\u73b0\uff0c\u6709\u4e86 Hooks\uff0cFunction Component \u7684\u80fd\u529b\u624d\u5f97\u4ee5\u5411 Class Component \u770b\u9f50\u3002"),Object(c.b)("p",null,"\u5173\u4e8e React Hooks\uff0c\u4e4b\u524d\u7684\u4e24\u7bc7\u7cbe\u8bfb\u5206\u522b\u6709\u8fc7\u4ecb\u7ecd\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/master/79.%E7%B2%BE%E8%AF%BB%E3%80%8AReact%20Hooks%E3%80%8B.md"},"\u7cbe\u8bfb\u300aReact Hooks\u300b")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/dt-fe/weekly/blob/master/80.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%80%8E%E4%B9%88%E7%94%A8%20React%20Hooks%20%E9%80%A0%E8%BD%AE%E5%AD%90%E3%80%8B.md"},"\u7cbe\u8bfb\u300a\u600e\u4e48\u7528 React Hooks \u9020\u8f6e\u5b50\u300b"))),Object(c.b)("p",null,"\u4f46\u662f\uff0c\u867d\u7136 Hook \u5df2\u7ecf\u53d1\u5e03\u4e86\u7a33\u5b9a\u7248\u672c\uff0c\u4f46\u5468\u8fb9\u751f\u6001\u8ddf\u8fdb\u8fd8\u9700\u8981\u65f6\u95f4\uff08\u6bd4\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"useRouter"),"\uff09\u3001\u6700\u4f73\u5b9e\u8df5\u6574\u7406\u8fd8\u9700\u8981\u65f6\u95f4\uff0c\u56e0\u6b64\u4e0d\u5efa\u8bae\u91cd\u6784\u8001\u4ee3\u7801\u3002"),Object(c.b)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u4f7f\u7528 Function Component\uff0c\u5efa\u8bae\u65f6\u5e38\u4e0e Class Component \u7684\u529f\u80fd\u505a\u5bf9\u6bd4\uff0c\u65b9\u4fbf\u7406\u89e3\u548c\u8bb0\u5fc6\u3002"),Object(c.b)("p",null,"\u4e0b\u9762\u6574\u7406\u4e00\u4e9b\u5e38\u89c1\u7684 Function Component \u95ee\u9898\uff1a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u975e\u5e38\u5efa\u8bae\u5b8c\u6574\u9605\u8bfb ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#do-i-need-to-rewrite-all-my-class-components"},"React Hooks FAQ"),"\u3002")),Object(c.b)("h3",{id:"\u600e\u4e48\u66ff\u4ee3-shouldcomponentupdate"},"\u600e\u4e48\u66ff\u4ee3 shouldComponentUpdate"),Object(c.b)("p",null,"\u8bf4\u5b9e\u8bdd\uff0cFunction Component \u66ff\u4ee3 ",Object(c.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," \u7684\u65b9\u6848\u5e76\u6ca1\u6709 Class Component \u4f18\u96c5\uff0c\u4ee3\u7801\u662f\u8fd9\u6837\u7684\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const Button = React.memo(props => {\n  // your component\n});\n")),Object(c.b)("p",null,"\u6216\u8005\u5728\u7236\u7ea7\u5c31\u76f4\u63a5\u751f\u6210\u4e00\u4e2a\u81ea\u5e26 ",Object(c.b)("inlineCode",{parentName:"p"},"memo")," \u7684\u5b50\u5143\u7d20\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function Parent({ a, b }) {\n  // Only re-rendered if `a` changes:\n  const child1 = useMemo(() => <Child1 a={a} />, [a]);\n  // Only re-rendered if `b` changes:\n  const child2 = useMemo(() => <Child2 b={b} />, [b]);\n  return (\n    <>\n      {child1}\n      {child2}\n    </>\n  );\n}\n")),Object(c.b)("p",null,"\u76f8\u6bd4\u4e4b\u4e0b\uff0cClass Component \u7684\u5199\u6cd5\u901a\u5e38\u662f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"class Button extends React.PureComponent {}\n")),Object(c.b)("p",null,"\u8fd9\u6837\u5c31\u81ea\u5e26\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"shallowEqual")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"\u3002"),Object(c.b)("h3",{id:"\u600e\u4e48\u66ff\u4ee3-componentdidupdate"},"\u600e\u4e48\u66ff\u4ee3 componentDidUpdate"),Object(c.b)("p",null,"\u7531\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," \u6bcf\u6b21 Render \u90fd\u4f1a\u6267\u884c\uff0c\u56e0\u6b64\u9700\u8981\u6a21\u62df\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"useUpdate")," \u51fd\u6570\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const mounting = useRef(true);\nuseEffect(() => {\n  if (mounting.current) {\n    mounting.current = false;\n  } else {\n    fn();\n  }\n});\n")),Object(c.b)("p",null,"\u66f4\u591a\u53ef\u4ee5\u67e5\u770b ",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/blob/master/80.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%80%8E%E4%B9%88%E7%94%A8%20React%20Hooks%20%E9%80%A0%E8%BD%AE%E5%AD%90%E3%80%8B.md#componentdidupdate"},"\u7cbe\u8bfb\u300a\u600e\u4e48\u7528 React Hooks \u9020\u8f6e\u5b50\u300b")),Object(c.b)("h3",{id:"\u600e\u4e48\u66ff\u4ee3-forceupdate"},"\u600e\u4e48\u66ff\u4ee3 forceUpdate"),Object(c.b)("p",null,"React \u5b98\u65b9\u6587\u6863\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u6848\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const [ignored, forceUpdate] = useReducer(x => x + 1, 0);\n\nfunction handleClick() {\n  forceUpdate();\n}\n")),Object(c.b)("p",null,"\u6bcf\u6b21\u6267\u884c ",Object(c.b)("inlineCode",{parentName:"p"},"dispatch")," \u65f6\uff0c\u53ea\u8981 ",Object(c.b)("inlineCode",{parentName:"p"},"state")," \u53d8\u5316\u5c31\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u66f4\u65b0\u3002\u5f53\u7136 ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u4e5f\u540c\u6837\u53ef\u4ee5\u6a21\u62df\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const useUpdate = () => useState(0)[1];\n")),Object(c.b)("p",null,"\u6211\u4eec\u77e5\u9053 ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u4e0b\u6807\u4e3a 1 \u7684\u9879\u662f\u7528\u6765\u66f4\u65b0\u6570\u636e\u7684\uff0c\u800c\u4e14\u5c31\u7b97\u6570\u636e\u6ca1\u6709\u53d8\u5316\uff0c\u8c03\u7528\u4e86\u4e5f\u4f1a\u5237\u65b0\u7ec4\u4ef6\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u628a\u8fd4\u56de\u4e00\u4e2a\u6ca1\u6709\u4fee\u6539\u6570\u503c\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"setValue"),"\uff0c\u8fd9\u6837\u5b83\u7684\u529f\u80fd\u5c31\u4ec5\u5269\u4e0b\u5237\u65b0\u7ec4\u4ef6\u4e86\u3002"),Object(c.b)("p",null,"\u66f4\u591a\u53ef\u4ee5\u67e5\u770b ",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/blob/master/80.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%80%8E%E4%B9%88%E7%94%A8%20React%20Hooks%20%E9%80%A0%E8%BD%AE%E5%AD%90%E3%80%8B.md#force-update"},"\u7cbe\u8bfb\u300a\u600e\u4e48\u7528 React Hooks \u9020\u8f6e\u5b50\u300b")),Object(c.b)("h3",{id:"state-\u62c6\u5206\u8fc7\u591a"},"state \u62c6\u5206\u8fc7\u591a"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u76ee\u524d\u7684\u4e00\u79cd\u5b9e\u8df5\uff0c\u662f\u5c06\u53d8\u91cf\u540d\u6253\u5e73\uff0c\u800c\u975e\u50cf Class Component \u4e00\u6837\u5199\u5728\u4e00\u4e2a State \u5bf9\u8c61\u91cc\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"class ClassComponent extends React.PureComponent {\n  state = {\n    left: 0,\n    top: 0,\n    width: 100,\n    height: 100\n  };\n}\n\n// VS\n\nfunction FunctionComponent {\n  const [left,setLeft] = useState(0)\n  const [top,setTop] = useState(0)\n  const [width,setWidth] = useState(100)\n  const [height,setHeight] = useState(100)\n}\n")),Object(c.b)("p",null,"\u5b9e\u9645\u4e0a\u5728 Function Component \u4e2d\u4e5f\u53ef\u4ee5\u805a\u5408\u7ba1\u7406 State\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function FunctionComponent() {\n  const [state, setState] = useState({\n    left: 0,\n    top: 0,\n    width: 100,\n    height: 100\n  });\n}\n")),Object(c.b)("p",null,"\u53ea\u662f\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u4e0d\u518d\u4f1a\u81ea\u52a8 merge\uff0c\u800c\u9700\u8981\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"...state")," \u8bed\u6cd5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"setState(state => ({ ...state, left: e.pageX, top: e.pageY }));\n")),Object(c.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u66f4\u5c11\u7684\u9ed1\u9b54\u6cd5\uff0c\u66f4\u53ef\u9884\u671f\u7684\u7ed3\u679c\u3002"),Object(c.b)("h3",{id:"\u83b7\u53d6\u4e0a\u4e00\u4e2a-props"},"\u83b7\u53d6\u4e0a\u4e00\u4e2a props"),Object(c.b)("p",null,"\u867d\u7136\u4e0d\u600e\u4e48\u5e38\u7528\uff0c\u4f46\u662f\u6bd5\u7adf Class Component \u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"componentWillReceiveProps")," \u62ff\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"previousProps")," \u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"nextProps"),"\uff0c\u5bf9\u4e8e Function Component\uff0c\u6700\u597d\u901a\u8fc7\u81ea\u5b9a\u4e49 Hooks \u65b9\u5f0f\u62ff\u5230\u4e0a\u4e00\u4e2a\u72b6\u6001\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function Counter() {\n  const [count, setCount] = useState(0);\n  const prevCount = usePrevious(count);\n  return (\n    <h1>\n      Now: {count}, before: {prevCount}\n    </h1>\n  );\n}\n\nfunction usePrevious(value) {\n  const ref = useRef();\n  useEffect(() => {\n    ref.current = value;\n  });\n  return ref.current;\n}\n")),Object(c.b)("p",null,"\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," \u5728\u7ec4\u4ef6\u6e32\u67d3\u5b8c\u6bd5\u540e\u518d\u6267\u884c\u7684\u7279\u6027\uff0c\u518d\u5229\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u7684\u53ef\u53d8\u7279\u6027\uff0c\u8ba9 ",Object(c.b)("inlineCode",{parentName:"p"},"usePrevious")," \u7684\u8fd4\u56de\u503c\u662f \u201c\u4e0a\u4e00\u6b21\u201d Render \u65f6\u7684\u3002"),Object(c.b)("p",null,"\u53ef\u89c1\uff0c\u5408\u7406\u8fd0\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," ",Object(c.b)("inlineCode",{parentName:"p"},"useRef"),"\uff0c\u53ef\u4ee5\u505a\u8bb8\u591a\u4e8b\u60c5\uff0c\u800c\u4e14\u5c01\u88c5\u6210 CustomHook \u540e\u4f7f\u7528\u8d77\u6765\u4ecd\u7136\u5f88\u65b9\u4fbf\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u672a\u6765 ",Object(c.b)("inlineCode",{parentName:"p"},"usePrevious")," \u53ef\u80fd\u6210\u4e3a\u5b98\u65b9 Hooks \u4e4b\u4e00\u3002")),Object(c.b)("h3",{id:"\u6027\u80fd\u6ce8\u610f\u4e8b\u9879"},"\u6027\u80fd\u6ce8\u610f\u4e8b\u9879"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u51fd\u6570\u7684\u53c2\u6570\u867d\u7136\u662f\u521d\u59cb\u503c\uff0c\u4f46\u7531\u4e8e\u6574\u4e2a\u51fd\u6570\u90fd\u662f Render\uff0c\u56e0\u6b64\u6bcf\u6b21\u521d\u59cb\u5316\u90fd\u4f1a\u88ab\u8c03\u7528\uff0c\u5982\u679c\u521d\u59cb\u503c\u8ba1\u7b97\u975e\u5e38\u6d88\u8017\u65f6\u95f4\uff0c\u5efa\u8bae\u4f7f\u7528\u51fd\u6570\u4f20\u5165\uff0c\u8fd9\u6837\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function FunctionComponent(props) {\n  const [rows, setRows] = useState(() => createRows(props.count));\n}\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u4e0d\u652f\u6301\u8fd9\u79cd\u7279\u6027\uff0c\u9700\u8981",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily"},"\u5199\u4e00\u4e9b\u5197\u4f59\u7684\u51fd\u5224\u5b9a\u662f\u5426\u8fdb\u884c\u8fc7\u521d\u59cb\u5316"),"\u3002")),Object(c.b)("p",null,"\u638c\u63e1\u4e86\u8fd9\u4e9b\uff0cFunction Component \u4f7f\u7528\u8d77\u6765\u4e0e Class Component \u5c31\u51e0\u4e4e\u6ca1\u6709\u5dee\u522b\u4e86\uff01"),Object(c.b)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),Object(c.b)("p",null,"Function Component \u529f\u80fd\u5df2\u7ecf\u53ef\u4ee5\u4e0e Class Component \u5ab2\u7f8e\u4e86\uff0c\u4f46\u76ee\u524d\u6700\u4f73\u5b9e\u8df5\u6bd4\u8f83\u96f6\u6563\uff0c\u5b98\u65b9\u6587\u6863\u63a8\u8350\u7684\u4e00\u4e9b\u89e3\u51b3\u601d\u8def\u751a\u81f3\u4e0d\u6bd4\u793e\u533a\u7b2c\u4e09\u65b9\u5e93\u7684\u66f4\u597d\uff0c\u53ef\u4ee5\u9884\u6599\u5230\uff0cClass Component \u7684\u529f\u80fd\u4f1a\u88ab\u4e94\u82b1\u516b\u95e8\u7684\u5b9e\u73b0\u51fa\u6765\uff0c\u90a3\u4e9b\u6ca1\u6709\u88ab\u6536\u7eb3\u8fdb\u5b98\u65b9\u7684 Hooks \u4e4d\u770b\u4e0a\u53bb\u53ef\u80fd\u4f1a\u773c\u82b1\u7f2d\u4e71\u3002"),Object(c.b)("p",null,"\u603b\u4e4b\u9009\u62e9\u4e86 Function Component \u5c31\u540c\u65f6\u9009\u62e9\u4e86\u51fd\u6570\u5f0f\u7684\u597d\u4e0e\u574f\u3002",Object(c.b)("strong",{parentName:"p"},"\u597d\u5904\u662f\u529f\u80fd\u5f3a\u5927\uff0c\u51e0\u4e4e\u53ef\u4ee5\u6a21\u62df\u51fa\u4efb\u4f55\u60f3\u8981\u7684\u529f\u80fd"),"\uff0c",Object(c.b)("strong",{parentName:"p"},"\u574f\u5904\u662f\u7531\u4e8e\u53ef\u4ee5\u7075\u6d3b\u7ec4\u5408\uff0c\u5982\u679c\u81ea\u5b9a\u4e49 Hooks \u547d\u540d\u548c\u5b9e\u73b0\u4e0d\u591f\u6807\u51c6\uff0c\u51fd\u6570\u4e0e\u51fd\u6570\u4e4b\u95f4\u5bf9\u63a5\u7684\u6c9f\u901a\u6210\u672c\u4f1a\u66f4\u5927\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/137"},"\u7cbe\u8bfb\u300aStateless VS Class \u7ec4\u4ef6\u300b \xb7 Issue #137 \xb7 dt-fe/weekly"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(c.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"special Sponsors")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://e.coding.net/?utm_source=weekly"},"DevOps \u5168\u6d41\u7a0b\u5e73\u53f0"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(c.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}b.isMDXComponent=!0},385:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),a=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=b(t),m=o,d=u["".concat(p,".").concat(m)]||u[m]||i[m]||c;return t?a.a.createElement(d,l(l({ref:n},s),{},{components:t})):a.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,p=new Array(c);p[0]=m;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var s=2;s<c;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);