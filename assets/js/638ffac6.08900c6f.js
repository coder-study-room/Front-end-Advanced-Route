(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var o=n(3),r=n(7),a=(n(0),n(385)),s={title:"79. \u7cbe\u8bfb\u300aReact Hooks\u300b",id:"079",hide_title:!0},c={unversionedId:"079",id:"079",isDocsHomePage:!1,title:"79. \u7cbe\u8bfb\u300aReact Hooks\u300b",description:"1 \u5f15\u8a00",source:"@site/weekly/079.\u7cbe\u8bfb\u300aReact Hooks\u300b.md",slug:"/079",permalink:"/weekly/079",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/079.\u7cbe\u8bfb\u300aReact Hooks\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617870333,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"78. \u7cbe\u8bfb\u300a\u624b\u5199 SQL \u7f16\u8bd1\u5668 - \u6027\u80fd\u4f18\u5316\u4e4b\u7f13\u5b58\u300b",permalink:"/weekly/078"},next:{title:"80. \u7cbe\u8bfb\u300a\u600e\u4e48\u7528 React Hooks \u9020\u8f6e\u5b50\u300b",permalink:"/weekly/080"}},p=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u6982\u8ff0",id:"2-\u6982\u8ff0",children:[{value:"\u5229\u7528 useState \u521b\u5efa Redux",id:"\u5229\u7528-usestate-\u521b\u5efa-redux",children:[]},{value:"\u5229\u7528 useEffect \u4ee3\u66ff\u4e00\u4e9b\u751f\u547d\u5468\u671f",id:"\u5229\u7528-useeffect-\u4ee3\u66ff\u4e00\u4e9b\u751f\u547d\u5468\u671f",children:[]}]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"Hooks \u5e26\u6765\u7684\u7ea6\u5b9a",id:"hooks-\u5e26\u6765\u7684\u7ea6\u5b9a",children:[]},{value:"\u72b6\u6001\u4e0e UI \u7684\u754c\u9650\u4f1a\u8d8a\u6765\u8d8a\u6e05\u6670",id:"\u72b6\u6001\u4e0e-ui-\u7684\u754c\u9650\u4f1a\u8d8a\u6765\u8d8a\u6e05\u6670",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]},{value:"5 \u66f4\u591a\u8ba8\u8bba",id:"5-\u66f4\u591a\u8ba8\u8bba",children:[]}],u={toc:p};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(a.b)("p",null,"React Hooks \u662f React ",Object(a.b)("inlineCode",{parentName:"p"},"16.7.0-alpha")," \u7248\u672c\u63a8\u51fa\u7684\u65b0\u7279\u6027\uff0c\u60f3\u5c1d\u8bd5\u7684\u540c\u5b66\u5b89\u88c5\u6b64\u7248\u672c\u5373\u53ef\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"React Hooks \u8981\u89e3\u51b3\u7684\u95ee\u9898\u662f\u72b6\u6001\u5171\u4eab"),"\uff0c\u662f\u7ee7 ",Object(a.b)("a",{parentName:"p",href:"https://reactjs.org/docs/render-props.html"},"render-props")," \u548c ",Object(a.b)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"higher-order components")," \u4e4b\u540e\u7684\u7b2c\u4e09\u79cd\u72b6\u6001\u5171\u4eab\u65b9\u6848\uff0c\u4e0d\u4f1a\u4ea7\u751f JSX \u5d4c\u5957\u5730\u72f1\u95ee\u9898\u3002"),Object(a.b)("p",null,"\u72b6\u6001\u5171\u4eab\u53ef\u80fd\u63cf\u8ff0\u7684\u4e0d\u6070\u5f53\uff0c\u79f0\u4e3a",Object(a.b)("strong",{parentName:"p"},"\u72b6\u6001\u903b\u8f91\u590d\u7528"),"\u4f1a\u66f4\u6070\u5f53\uff0c\u56e0\u4e3a\u53ea\u5171\u4eab\u6570\u636e\u5904\u7406\u903b\u8f91\uff0c\u4e0d\u4f1a\u5171\u4eab\u6570\u636e\u672c\u8eab\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4e0d\u4e45\u524d\u7cbe\u8bfb\u5206\u4eab\u8fc7\u7684\u4e00\u7bc7 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/blob/master/75.%E7%B2%BE%E8%AF%BB%E3%80%8AEpitath%20%E6%BA%90%E7%A0%81%20-%20renderProps%20%E6%96%B0%E7%94%A8%E6%B3%95%E3%80%8B.md"},"Epitath \u6e90\u7801 - renderProps \u65b0\u7528\u6cd5")," \u5c31\u662f\u89e3\u51b3 JSX \u5d4c\u5957\u95ee\u9898\uff0c\u6709\u4e86 React Hooks \u4e4b\u540e\uff0c\u8fd9\u4e2a\u95ee\u9898\u5c31\u88ab\u5b98\u65b9\u6b63\u5f0f\u89e3\u51b3\u4e86\u3002")),Object(a.b)("p",null,"\u4e3a\u4e86\u66f4\u5feb\u7406\u89e3 React Hooks \u662f\u4ec0\u4e48\uff0c\u5148\u770b\u7b14\u8005\u5f15\u7528\u7684\u4e0b\u9762\u4e00\u6bb5 renderProps \u4ee3\u7801\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  return (\n    <Toggle initial={false}>\n      {({ on, toggle }) => (\n        <Button type="primary" onClick={toggle}> Open Modal </Button>\n        <Modal visible={on} onOk={toggle} onCancel={toggle} />\n      )}\n    </Toggle>\n  )\n}\n')),Object(a.b)("p",null,"\u6070\u5de7\uff0cReact Hooks \u89e3\u51b3\u7684\u4e5f\u662f\u8fd9\u4e2a\u95ee\u9898\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <>\n      <Button type="primary" onClick={() => setOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal\n        visible={open}\n        onOk={() => setOpen(false)}\n        onCancel={() => setOpen(false)}\n      />\n    </>\n  );\n}\n')),Object(a.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0cReact Hooks \u5c31\u50cf\u4e00\u4e2a\u5185\u7f6e\u7684\u6253\u5e73 renderProps \u5e93\uff0c\u6211\u4eec\u53ef\u4ee5\u968f\u65f6\u521b\u5efa\u4e00\u4e2a\u503c\uff0c\u4e0e\u4fee\u6539\u8fd9\u4e2a\u503c\u7684\u65b9\u6cd5\u3002\u770b\u4e0a\u53bb\u50cf function \u5f62\u5f0f\u7684 setState\uff0c\u5176\u5b9e\u8fd9\u7b49\u4ef7\u4e8e\u4f9d\u8d56\u6ce8\u5165\uff0c\u4e0e\u4f7f\u7528 setState \u76f8\u6bd4\uff0c",Object(a.b)("strong",{parentName:"p"},"\u8fd9\u4e2a\u7ec4\u4ef6\u662f\u6ca1\u6709\u72b6\u6001\u7684"),"\u3002"),Object(a.b)("h2",{id:"2-\u6982\u8ff0"},"2 \u6982\u8ff0"),Object(a.b)("p",null,"React Hooks \u5e26\u6765\u7684\u597d\u5904\u4e0d\u4ec5\u662f \u201c\u66f4 FP\uff0c\u66f4\u65b0\u7c92\u5ea6\u66f4\u7ec6\uff0c\u4ee3\u7801\u66f4\u6e05\u6670\u201d\uff0c\u8fd8\u6709\u5982\u4e0b\u4e09\u4e2a\u7279\u6027\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u591a\u4e2a\u72b6\u6001\u4e0d\u4f1a\u4ea7\u751f\u5d4c\u5957\uff0c\u5199\u6cd5\u8fd8\u662f\u5e73\u94fa\u7684\uff08renderProps \u53ef\u4ee5\u901a\u8fc7 compose \u89e3\u51b3\uff0c\u53ef\u4e0d\u4f46\u4f7f\u7528\u7565\u4e3a\u7e41\u7410\uff0c\u800c\u4e14\u56e0\u4e3a\u5f3a\u5236\u5c01\u88c5\u4e00\u4e2a\u65b0\u5bf9\u8c61\u800c\u589e\u52a0\u4e86\u5b9e\u4f53\u6570\u91cf\uff09\u3002"),Object(a.b)("li",{parentName:"ol"},"Hooks \u53ef\u4ee5\u5f15\u7528\u5176\u4ed6 Hooks\u3002"),Object(a.b)("li",{parentName:"ol"},"\u66f4\u5bb9\u6613\u5c06\u7ec4\u4ef6\u7684 UI \u4e0e\u72b6\u6001\u5206\u79bb\u3002")),Object(a.b)("p",null,"\u7b2c\u4e8c\u70b9\u5c55\u5f00\u8bf4\u4e00\u4e0b\uff1aHooks \u53ef\u4ee5\u5f15\u7528\u5176\u4ed6 Hooks\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u4e48\u505a\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import { useState, useEffect } from "react";\n\n// \u5e95\u5c42 Hooks, \u8fd4\u56de\u5e03\u5c14\u503c\uff1a\u662f\u5426\u5728\u7ebf\nfunction useFriendStatusBoolean(friendID) {\n  const [isOnline, setIsOnline] = useState(null);\n\n  function handleStatusChange(status) {\n    setIsOnline(status.isOnline);\n  }\n\n  useEffect(() => {\n    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);\n    return () => {\n      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);\n    };\n  });\n\n  return isOnline;\n}\n\n// \u4e0a\u5c42 Hooks\uff0c\u6839\u636e\u5728\u7ebf\u72b6\u6001\u8fd4\u56de\u5b57\u7b26\u4e32\uff1aLoading... or Online or Offline\nfunction useFriendStatusString(props) {\n  const isOnline = useFriendStatusBoolean(props.friend.id);\n\n  if (isOnline === null) {\n    return "Loading...";\n  }\n  return isOnline ? "Online" : "Offline";\n}\n\n// \u4f7f\u7528\u4e86\u5e95\u5c42 Hooks \u7684 UI\nfunction FriendListItem(props) {\n  const isOnline = useFriendStatusBoolean(props.friend.id);\n\n  return (\n    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>\n  );\n}\n\n// \u4f7f\u7528\u4e86\u4e0a\u5c42 Hooks \u7684 UI\nfunction FriendListStatus(props) {\n  const status = useFriendStatusString(props);\n\n  return <li>{status}</li>;\n}\n')),Object(a.b)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6709\u4e24\u4e2a Hooks\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"useFriendStatusBoolean")," \u4e0e ",Object(a.b)("inlineCode",{parentName:"p"},"useFriendStatusString"),", ",Object(a.b)("inlineCode",{parentName:"p"},"useFriendStatusString")," \u662f\u5229\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"useFriendStatusBoolean")," \u751f\u6210\u7684\u65b0 Hook\uff0c\u8fd9\u4e24\u4e2a Hook \u53ef\u4ee5\u7ed9\u4e0d\u540c\u7684 UI\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"FriendListItem"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"FriendListStatus")," \u4f7f\u7528\uff0c\u800c\u56e0\u4e3a\u4e24\u4e2a Hooks \u6570\u636e\u662f\u8054\u52a8\u7684\uff0c\u56e0\u6b64\u4e24\u4e2a UI \u7684\u72b6\u6001\u4e5f\u662f\u8054\u52a8\u7684\u3002"),Object(a.b)("p",null,"\u987a\u5e26\u4e00\u63d0\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u4e5f\u53ef\u4ee5\u7528\u6765\u7406\u89e3 ",Object(a.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/48264713"},"\u5bf9 React Hooks \u7684\u4e00\u4e9b\u601d\u8003")," \u4e00\u6587\u7684\u90a3\u53e5\u8bdd\uff1a",Object(a.b)("strong",{parentName:"p"},"\u201c\u6709\u72b6\u6001\u7684\u7ec4\u4ef6\u6ca1\u6709\u6e32\u67d3\uff0c\u6709\u6e32\u67d3\u7684\u7ec4\u4ef6\u6ca1\u6709\u72b6\u6001\u201d"),"\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"useFriendStatusBoolean")," \u4e0e ",Object(a.b)("inlineCode",{parentName:"li"},"useFriendStatusString")," \u662f\u6709\u72b6\u6001\u7684\u7ec4\u4ef6\uff08\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"useState"),"\uff09\uff0c\u6ca1\u6709\u6e32\u67d3\uff08\u8fd4\u56de\u975e UI \u7684\u503c\uff09\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4f5c\u4e3a ",Object(a.b)("strong",{parentName:"li"},"Custom Hooks")," \u88ab\u4efb\u4f55 UI \u7ec4\u4ef6\u8c03\u7528\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"FriendListItem")," \u4e0e ",Object(a.b)("inlineCode",{parentName:"li"},"FriendListStatus")," \u662f\u6709\u6e32\u67d3\u7684\u7ec4\u4ef6\uff08\u8fd4\u56de\u4e86 JSX\uff09\uff0c\u6ca1\u6709\u72b6\u6001\uff08\u6ca1\u6709\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"useState"),"\uff09\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570 UI \u7ec4\u4ef6\uff0c")),Object(a.b)("h3",{id:"\u5229\u7528-usestate-\u521b\u5efa-redux"},"\u5229\u7528 useState \u521b\u5efa Redux"),Object(a.b)("p",null,"Redux \u7684\u7cbe\u9ad3\u5c31\u662f Reducer\uff0c\u800c\u5229\u7528 React Hooks \u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u4e00\u4e2a Redux \u673a\u5236\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"// \u8fd9\u5c31\u662f Redux\nfunction useReducer(reducer, initialState) {\n  const [state, setState] = useState(initialState);\n\n  function dispatch(action) {\n    const nextState = reducer(state, action);\n    setState(nextState);\n  }\n\n  return [state, dispatch];\n}\n")),Object(a.b)("p",null,"\u8fd9\u4e2a\u81ea\u5b9a\u4e49 Hook \u7684 value \u90e8\u5206\u5f53\u4f5c redux \u7684 state\uff0csetValue \u90e8\u5206\u5f53\u4f5c redux \u7684 dispatch\uff0c\u5408\u8d77\u6765\u5c31\u662f\u4e00\u4e2a redux\u3002\u800c react-redux \u7684 connect \u90e8\u5206\u505a\u7684\u4e8b\u60c5\u4e0e Hook \u8c03\u7528\u4e00\u6837\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'// \u4e00\u4e2a Action\nfunction useTodos() {\n  const [todos, dispatch] = useReducer(todosReducer, []);\n\n  function handleAddClick(text) {\n    dispatch({ type: "add", text });\n  }\n\n  return [todos, { handleAddClick }];\n}\n\n// \u7ed1\u5b9a Todos \u7684 UI\nfunction TodosUI() {\n  const [todos, actions] = useTodos();\n  return (\n    <>\n      {todos.map((todo, index) => (\n        <div>{todo.text}</div>\n      ))}\n      <button onClick={actions.handleAddClick}>Add Todo</button>\n    </>\n  );\n}\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useReducer")," \u5df2\u7ecf\u4f5c\u4e3a\u4e00\u4e2a\u5185\u7f6e Hooks \u4e86\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u67e5\u9605\u6240\u6709 ",Object(a.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html"},"\u5185\u7f6e Hooks"),"\u3002"),Object(a.b)("p",null,"\u4e0d\u8fc7\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6bcf\u6b21 ",Object(a.b)("inlineCode",{parentName:"p"},"useReducer")," \u6216\u8005\u81ea\u5df1\u7684 Custom Hooks \u90fd\u4e0d\u4f1a\u6301\u4e45\u5316\u6570\u636e\uff0c\u6240\u4ee5\u6bd4\u5982\u6211\u4eec\u521b\u5efa\u4e24\u4e2a App\uff0cApp1 \u4e0e App2:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"function App1() {\n  const [todos, actions] = useTodos();\n\n  return <span>todo count: {todos.length}</span>;\n}\n\nfunction App2() {\n  const [todos, actions] = useTodos();\n\n  return <span>todo count: {todos.length}</span>;\n}\n\nfunction All() {\n  return (\n    <>\n      <App1 />\n      <App2 />\n    </>\n  );\n}\n")),Object(a.b)("p",null,"\u8fd9\u4e24\u4e2a\u5b9e\u4f8b\u540c\u65f6\u6e32\u67d3\u65f6\uff0c\u5e76\u4e0d\u662f\u5171\u4eab\u4e00\u4e2a todos \u5217\u8868\uff0c\u800c\u662f\u5206\u522b\u5b58\u5728\u4e24\u4e2a\u72ec\u7acb todos \u5217\u8868\u3002\u4e5f\u5c31\u662f React Hooks \u53ea\u63d0\u4f9b\u72b6\u6001\u5904\u7406\u65b9\u6cd5\uff0c\u4e0d\u4f1a\u6301\u4e45\u5316\u72b6\u6001\u3002"),Object(a.b)("p",null,"\u5982\u679c\u8981\u771f\u6b63\u5b9e\u73b0\u4e00\u4e2a Redux \u529f\u80fd\uff0c\u4e5f\u5c31\u662f\u5168\u5c40\u7ef4\u6301\u4e00\u4e2a\u72b6\u6001\uff0c\u4efb\u4f55\u7ec4\u4ef6 ",Object(a.b)("inlineCode",{parentName:"p"},"useReducer")," \u90fd\u4f1a\u8bbf\u95ee\u5230\u540c\u4e00\u4efd\u6570\u636e\uff0c\u53ef\u4ee5\u548c ",Object(a.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecontext"},"useContext")," \u4e00\u8d77\u4f7f\u7528\u3002"),Object(a.b)("p",null,"\u5927\u4f53\u601d\u8def\u662f\u5229\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"useContext")," \u5171\u4eab\u4e00\u4efd\u6570\u636e\uff0c\u4f5c\u4e3a Custom Hooks \u7684\u6570\u636e\u6e90\u3002\u5177\u4f53\u5b9e\u73b0\u53ef\u4ee5\u53c2\u8003 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebookincubator/redux-react-hook/blob/master/src/index.ts"},"redux-react-hook"),"\u3002"),Object(a.b)("h3",{id:"\u5229\u7528-useeffect-\u4ee3\u66ff\u4e00\u4e9b\u751f\u547d\u5468\u671f"},"\u5229\u7528 useEffect \u4ee3\u66ff\u4e00\u4e9b\u751f\u547d\u5468\u671f"),Object(a.b)("p",null,"\u5728 useState \u4f4d\u7f6e\u9644\u8fd1\uff0c\u53ef\u4ee5\u4f7f\u7528 useEffect \u5904\u7406\u526f\u4f5c\u7528\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  const subscription = props.source.subscribe();\n  return () => {\n    // Clean up the subscription\n    subscription.unsubscribe();\n  };\n});\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," \u7684\u4ee3\u7801\u65e2\u4f1a\u5728\u521d\u59cb\u5316\u65f6\u5019\u6267\u884c\uff0c\u4e5f\u4f1a\u5728\u540e\u7eed\u6bcf\u6b21 rerender \u65f6\u6267\u884c\uff0c\u800c\u8fd4\u56de\u503c\u5728\u6790\u6784\u65f6\u6267\u884c\u3002\u8fd9\u4e2a\u66f4\u591a\u5e26\u6765\u7684\u662f\u4fbf\u5229\uff0c\u5bf9\u6bd4\u4e00\u4e0b React \u7248 G2 \u8c03\u7528\u6d41\u7a0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"class Component extends React.PureComponent<Props, State> {\n  private chart: G2.Chart = null;\n  private rootDomRef: React.ReactInstance = null;\n\n  componentDidMount() {\n    this.rootDom = ReactDOM.findDOMNode(this.rootDomRef) as HTMLDivElement;\n\n    this.chart = new G2.Chart({\n      container: this.rootDom,\n      forceFit: true,\n      height: 300\n    });\n    this.freshChart(this.props);\n  }\n\n  componentWillReceiveProps(nextProps: Props) {\n    this.freshChart(nextProps);\n  }\n\n  componentWillUnmount() {\n    this.chart.destroy();\n  }\n\n  freshChart(props: Props) {\n    // do something\n    this.chart.render();\n  }\n\n  render() {\n    return <div ref={ref => (this.rootDomRef = ref)} />;\n  }\n}\n")),Object(a.b)("p",null,"\u7528 React Hooks \u53ef\u4ee5\u8fd9\u4e48\u505a\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const ref = React.useRef(null);\n  let chart: G2.Chart = null;\n\n  React.useEffect(() => {\n    chart = new G2.Chart({\n      container: ReactDOM.findDOMNode(ref.current) as HTMLDivElement,\n      width: 500,\n      height: 500\n    });\n\n    // do something\n    chart.render();\n\n    return () => chart.destroy();\n  }, []);\n\n  return <div ref={ref} />;\n}\n")),Object(a.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u5c06\u7ec6\u788e\u7684\u4ee3\u7801\u7247\u6bb5\u7ed3\u5408\u6210\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684\u4ee3\u7801\u5757\uff0c\u66f4\u6613\u7ef4\u62a4\u3002"),Object(a.b)("p",null,"\u73b0\u5728\u4ecb\u7ecd\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," ",Object(a.b)("inlineCode",{parentName:"p"},"useContext")," ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," ",Object(a.b)("inlineCode",{parentName:"p"},"useRef")," \u7b49\u5e38\u7528 hooks\uff0c\u66f4\u591a\u53ef\u4ee5\u67e5\u9605\uff1a",Object(a.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html"},"\u5185\u7f6e Hooks"),"\uff0c\u76f8\u4fe1\u4e0d\u4e45\u7684\u672a\u6765\uff0c\u8fd9\u4e9b API \u53c8\u4f1a\u6210\u4e3a\u4e00\u5957\u65b0\u7684\u524d\u7aef\u89c4\u8303\u3002"),Object(a.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(a.b)("h3",{id:"hooks-\u5e26\u6765\u7684\u7ea6\u5b9a"},"Hooks \u5e26\u6765\u7684\u7ea6\u5b9a"),Object(a.b)("p",null,'Hook \u51fd\u6570\u5fc5\u987b\u4ee5 "use" \u547d\u540d\u5f00\u5934\uff0c\u56e0\u4e3a\u8fd9\u6837\u624d\u65b9\u4fbf eslint \u505a\u68c0\u67e5\uff0c\u9632\u6b62\u7528 condition \u5224\u65ad\u5305\u88f9 useHook \u8bed\u53e5\u3002'),Object(a.b)("p",null,"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u7528 condition \u5305\u88f9 useHook \u8bed\u53e5\uff0c\u8be6\u60c5\u53ef\u4ee5\u89c1 ",Object(a.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html#explanation"},"\u5b98\u65b9\u6587\u6863"),"\uff0c\u8fd9\u91cc\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u3002"),Object(a.b)("p",null,"React Hooks \u5e76\u4e0d\u662f\u901a\u8fc7 Proxy \u6216\u8005 getters \u5b9e\u73b0\u7684\uff08\u5177\u4f53\u53ef\u4ee5\u770b\u8fd9\u7bc7\u6587\u7ae0 ",Object(a.b)("a",{parentName:"p",href:"https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e"},"React hooks: not magic, just arrays"),"\uff09\uff0c\u800c\u662f\u901a\u8fc7\u94fe\u8868\u5b9e\u73b0\u7684\uff0c\u6bcf\u6b21 ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," \u90fd\u4f1a\u6539\u53d8\u4e0b\u6807\uff0c\u5982\u679c ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," \u88ab\u5305\u88f9\u5728 condition \u4e2d\uff0c\u90a3\u6bcf\u6b21\u6267\u884c\u7684\u4e0b\u6807\u5c31\u53ef\u80fd\u5bf9\u4e0d\u4e0a\uff0c\u5bfc\u81f4 ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," \u5bfc\u51fa\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"setter")," \u66f4\u65b0\u9519\u6570\u636e\u3002"),Object(a.b)("p",null,"\u867d\u7136\u6709 ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"eslint-plugin-react-hooks")," \u63d2\u4ef6\u4fdd\u9a7e\u62a4\u822a\uff0c\u4f46\u8fd9\u7b2c\u4e00\u6b21\u5c06 \u201c\u7ea6\u5b9a\u4f18\u5148\u201d \u7406\u5ff5\u5f15\u5165\u4e86 React \u6846\u67b6\u4e2d\uff0c\u5e26\u6765\u4e86\u524d\u6240\u672a\u6709\u7684",Object(a.b)("strong",{parentName:"p"},"\u4ee3\u7801\u547d\u540d\u548c\u987a\u5e8f\u9650\u5236"),"\uff08\u51fd\u6570\u547d\u540d\u906d\u5230\u5b98\u65b9\u9650\u5236\uff0cJS \u81ea\u7531\u4e3b\u4e49\u8005\u4e5f\u8bb8\u4f1a\u66b4\u8df3\u5982\u96f7\uff09\uff0c\u4f46\u5e26\u6765\u7684\u4fbf\u5229\u4e5f\u662f\u524d\u6240\u672a\u6709\u7684\uff08\u6ca1\u6709\u6bd4 React Hooks \u66f4\u597d\u7684\u72b6\u6001\u5171\u4eab\u65b9\u6848\u4e86\uff0c\u7ea6\u5b9a\u5e26\u6765\u63d0\u6548\uff0c\u81ea\u7531\u7684\u4ee3\u4ef7\u5c31\u662f\u56de\u5230 renderProps or HOC\uff0c\u5404\u56e2\u961f\u53ef\u4ee5\u81ea\u884c\u8bc4\u4f30\uff09\u3002"),Object(a.b)("p",null,"\u7b14\u8005\u8ba4\u4e3a\uff0cReact Hooks \u7684\u8bde\u751f\uff0c\u4e5f\u8bb8\u6765\u81ea\u4e8e\u8fd9\u4e2a\u7075\u611f\uff1a\u201c\u4e0d\u5982\u901a\u8fc7\u589e\u52a0\u4e00\u4e9b\u7ea6\u5b9a\uff0c\u5f7b\u5e95\u89e3\u51b3\u72b6\u6001\u5171\u4eab\u95ee\u9898\u5427\uff01\u201d"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"React \u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\u811a\u624b\u67b6 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/zeit/next.js"},"nextjs")," ",Object(a.b)("a",{parentName:"p",href:"https://github.com/umijs/umi"},"umi")," \u4ee5\u53ca\u7b14\u8005\u7684 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/prijs/pri"},"pri")," \u90fd\u901a\u8fc7\u6709 \u201c\u7ea6\u5b9a\u8def\u7531\u201d \u7684\u529f\u80fd\uff0c\u5927\u5927\u964d\u4f4e\u4e86\u8def\u7531\u914d\u7f6e\u590d\u6742\u5ea6\uff0c",Object(a.b)("strong",{parentName:"p"},"\u90a3\u4e48 React Hooks \u5c31\u50cf\u4ee3\u7801\u7ea7\u522b\u7684\u7ea6\u5b9a"),"\uff0c\u5927\u5927\u964d\u4f4e\u4e86\u4ee3\u7801\u590d\u6742\u5ea6\u3002")),Object(a.b)("h3",{id:"\u72b6\u6001\u4e0e-ui-\u7684\u754c\u9650\u4f1a\u8d8a\u6765\u8d8a\u6e05\u6670"},"\u72b6\u6001\u4e0e UI \u7684\u754c\u9650\u4f1a\u8d8a\u6765\u8d8a\u6e05\u6670"),Object(a.b)("p",null,"\u56e0\u4e3a React Hooks \u7684\u7279\u6027\uff0c\u5982\u679c\u4e00\u4e2a Hook \u4e0d\u4ea7\u751f UI\uff0c\u90a3\u4e48\u5b83\u53ef\u4ee5\u6c38\u8fdc\u88ab\u5176\u4ed6 Hook \u5c01\u88c5\uff0c\u867d\u7136\u5141\u8bb8\u6709\u526f\u4f5c\u7528\uff0c\u4f46\u662f\u88ab\u5305\u88f9\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," \u91cc\uff0c\u603b\u4f53\u6765\u8bf4\u8fd8\u662f\u633a\u51fd\u6570\u5f0f\u7684\u3002\u800c Hooks \u8981\u96c6\u4e2d\u5728 UI \u51fd\u6570\u9876\u90e8\u5199\uff0c\u4e5f\u5f88\u5bb9\u6613\u517b\u6210\u4e66\u5199\u65e0\u72b6\u6001 UI \u7ec4\u4ef6\u7684\u597d\u4e60\u60ef\uff0c\u8df5\u884c \u201c\u72b6\u6001\u4e0e UI \u5206\u5f00\u201d \u8fd9\u4e2a\u7406\u5ff5\u4f1a\u66f4\u5bb9\u6613\u3002"),Object(a.b)("p",null,"\u4e0d\u8fc7\u8fd9\u4e2a\u7406\u5ff5\u7a0d\u5fae\u6709\u70b9\u8e69\u811a\u7684\u5730\u65b9\uff0c\u90a3\u5c31\u662f \u201c\u72b6\u6001\u201d \u5230\u5e95\u662f\u4ec0\u4e48\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const [count, setCount] = useCount();\n  return <span>{count}</span>;\n}\n")),Object(a.b)("p",null,"\u6211\u4eec\u77e5\u9053 ",Object(a.b)("inlineCode",{parentName:"p"},"useCount")," \u7b97\u662f\u65e0\u72b6\u6001\u7684\uff0c\u56e0\u4e3a React Hooks \u672c\u8d28\u5c31\u662f renderProps \u6216\u8005 HOC \u7684\u53e6\u4e00\u79cd\u5199\u6cd5\uff0c\u6362\u6210 renderProps \u5c31\u597d\u7406\u89e3\u4e86\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"<Count>{(count, setCount) => <App count={count} setCount={setCount} />}</Count>;\n\nfunction App(props) {\n  return <span>{props.count}</span>;\n}\n")),Object(a.b)("p",null,"\u53ef\u4ee5\u770b\u5230 App \u7ec4\u4ef6\u662f\u65e0\u72b6\u6001\u7684\uff0c\u8f93\u51fa\u5b8c\u5168\u7531\u8f93\u5165\uff08Props\uff09\u51b3\u5b9a\u3002"),Object(a.b)("p",null,"\u90a3\u4e48\u6709\u72b6\u6001\u65e0 UI \u7684\u7ec4\u4ef6\u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"useCount")," \u4e86\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"function useCount() {\n  const [count, setCount] = useState(0);\n  return [count, setCount];\n}\n")),Object(a.b)("p",null,"\u6709\u72b6\u6001\u7684\u5730\u65b9\u5e94\u8be5\u6307 ",Object(a.b)("inlineCode",{parentName:"p"},"useState(0)")," \u8fd9\u53e5\uff0c\u4e0d\u8fc7\u8fd9\u53e5\u548c\u65e0\u72b6\u6001 UI \u7ec4\u4ef6 App \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"useCount()")," \u5f88\u50cf\uff0c\u65e2\u7136 React \u628a ",Object(a.b)("inlineCode",{parentName:"p"},"useCount")," \u6210\u4e3a\u81ea\u5b9a\u4e49 Hook\uff0c\u90a3\u4e48 ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," \u5c31\u662f\u5b98\u65b9 Hook\uff0c\u5177\u6709\u4e00\u6837\u7684\u5b9a\u4e49\uff0c\u56e0\u6b64\u53ef\u4ee5\u8ba4\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"useCount")," \u662f\u65e0\u72b6\u6001\u7684\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"useState")," \u4e5f\u662f\u4e00\u5c42 renderProps\uff0c\u6700\u7ec8\u7684\u72b6\u6001\u5176\u5b9e\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," \u8fd9\u4e2a React \u5185\u7f6e\u7684\u7ec4\u4ef6\u3002"),Object(a.b)("p",null,"\u6211\u4eec\u770b renderProps \u5d4c\u5957\u7684\u8868\u8fbe\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'<UseState>\n  {(count, setCount) => (\n    <UseCount>\n      {" "}\n      {/**\u867d\u7136\u662f\u900f\u4f20\uff0c\u4f46\u7ed9 count \u505a\u4e86\u53bb\u91cd\uff0c\u4e0d\u53ef\u8c13\u6ca1\u6709\u4f5c\u7528 */}\n      {(count, setCount) => <App count={count} setCount={setCount} />}\n    </UseCount>\n  )}\n</UseState>\n')),Object(a.b)("p",null,"\u80fd\u786e\u5b9a\u7684\u662f\uff0cApp \u4e00\u5b9a\u6709 UI\uff0c\u800c\u4e0a\u9762\u4e24\u5c42\u7236\u7ea7\u7ec4\u4ef6\u4e00\u5b9a\u6ca1\u6709 UI\u3002\u4e3a\u4e86\u6700\u4f73\u5b9e\u8df5\uff0c\u6211\u4eec\u5c3d\u91cf\u907f\u514d App \u81ea\u5df1\u7ef4\u62a4\u72b6\u6001\uff0c\u800c\u5176\u7236\u7ea7\u7684 RenderProps \u7ec4\u4ef6\u53ef\u4ee5\u7ef4\u62a4\u72b6\u6001\uff08\u4e5f\u53ef\u4ee5\u4e0d\u7ef4\u62a4\u72b6\u6001\uff0c\u505a\u4e2a\u4e8c\u4f20\u624b\uff09\u3002\u56e0\u6b64\u53ef\u4ee5\u8003\u8651\u5728 \u201c\u6709\u72b6\u6001\u7684\u7ec4\u4ef6\u6ca1\u6709\u6e32\u67d3\uff0c\u6709\u6e32\u67d3\u7684\u7ec4\u4ef6\u6ca1\u6709\u72b6\u6001\u201d \u8fd9\u53e5\u8bdd\u540e\u9762\u52a0\u4e00\u53e5\uff1a\u6ca1\u6e32\u67d3\u7684\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u6ca1\u72b6\u6001\u3002"),Object(a.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(a.b)("p",null,"\u628a React Hooks \u5f53\u4f5c\u66f4\u4fbf\u6377\u7684 RenderProps \u53bb\u7528\u5427\uff0c\u867d\u7136\u5199\u6cd5\u770b\u4e0a\u53bb\u662f\u5185\u90e8\u7ef4\u62a4\u4e86\u4e00\u4e2a\u72b6\u6001\uff0c\u4f46\u5176\u5b9e\u7b49\u4ef7\u4e8e\u6ce8\u5165\u3001Connect\u3001HOC\u3001\u6216\u8005 renderProps\uff0c\u90a3\u4e48\u5982\u6b64\u4e00\u6765\uff0c\u4f7f\u7528 renderProps \u7684\u95e8\u69db\u4f1a\u5927\u5927\u964d\u4f4e\uff0c\u56e0\u4e3a Hooks \u7528\u8d77\u6765\u5b9e\u5728\u662f\u592a\u65b9\u4fbf\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u62bd\u8c61\u5927\u91cf Custom Hooks\uff0c\u8ba9\u4ee3\u7801\u66f4\u52a0 FP\uff0c\u540c\u65f6\u4e5f\u4e0d\u4f1a\u589e\u52a0\u5d4c\u5957\u5c42\u7ea7\u3002"),Object(a.b)("h2",{id:"5-\u66f4\u591a\u8ba8\u8bba"},"5 \u66f4\u591a\u8ba8\u8bba"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(a.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/111"},"\u7cbe\u8bfb\u300aReact Hooks\u300b \xb7 Issue #111 \xb7 dt-fe/weekly"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(a.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")))}i.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),i=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=i(n),d=o,O=l["".concat(s,".").concat(d)]||l[d]||b[d]||a;return n?r.a.createElement(O,c(c({ref:t},u),{},{components:n})):r.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);