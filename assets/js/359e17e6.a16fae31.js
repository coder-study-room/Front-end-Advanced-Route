(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(295)),p={title:"012.\u7cbe\u8bfb React \u9ad8\u9636\u7ec4\u4ef6",id:"012"},c={unversionedId:"012",id:"012",isDocsHomePage:!1,title:"012.\u7cbe\u8bfb React \u9ad8\u9636\u7ec4\u4ef6",description:"\u672c\u671f\u7cbe\u8bfb\u6587\u7ae0\u662f\uff1aReact Higher Order Components in depth",source:"@site/weekly/012.\u7cbe\u8bfb React \u9ad8\u9636\u7ec4\u4ef6.md",slug:"/012",permalink:"/weekly/012",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/012.\u7cbe\u8bfb React \u9ad8\u9636\u7ec4\u4ef6.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617861888,formattedLastUpdatedAt:"4/8/2021",sidebar:"weekly",previous:{title:"011.\u7cbe\u8bfb\u524d\u7aef\u8c03\u8bd5\u6280\u5de7",permalink:"/weekly/011"},next:{title:"013.This \u5e26\u6765\u7684\u56f0\u60d1",permalink:"/weekly/013"}},l=[{value:"1 \u5f15\u8a00",id:"1-\u5f15\u8a00",children:[]},{value:"2 \u5185\u5bb9\u6982\u8981",id:"2-\u5185\u5bb9\u6982\u8981",children:[]},{value:"3 \u7cbe\u8bfb",id:"3-\u7cbe\u8bfb",children:[{value:"HOC \u7684\u9002\u7528\u8303\u56f4",id:"hoc-\u7684\u9002\u7528\u8303\u56f4",children:[]},{value:"HOC \u7684\u5177\u4f53\u5b9e\u8df5",id:"hoc-\u7684\u5177\u4f53\u5b9e\u8df5",children:[]}]},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[]}],i={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u672c\u671f\u7cbe\u8bfb\u6587\u7ae0\u662f\uff1a",Object(o.b)("a",{parentName:"p",href:"https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e"},"React Higher Order Components in depth")),Object(o.b)("h2",{id:"1-\u5f15\u8a00"},"1 \u5f15\u8a00"),Object(o.b)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\uff08 higher-order component \uff0cHOC \uff09\u662f React \u4e2d\u590d\u7528\u7ec4\u4ef6\u903b\u8f91\u7684\u4e00\u79cd\u8fdb\u9636\u6280\u5de7\u3002\u5b83\u672c\u8eab\u5e76\u4e0d\u662f React \u7684 API\uff0c\u800c\u662f\u4e00\u79cd React \u7ec4\u4ef6\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4f17\u591a\u7684 React \u5e93\u5df2\u7ecf\u8bc1\u660e\u4e86\u5b83\u7684\u4ef7\u503c\uff0c\u4f8b\u5982\u8033\u719f\u80fd\u8be6\u7684 react-redux\u3002"),Object(o.b)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u7684\u6982\u5ff5\u5176\u5b9e\u5e76\u4e0d\u96be\uff0c\u6211\u4eec\u80fd\u901a\u8fc7\u7c7b\u6bd4\u9ad8\u9636\u51fd\u6570\u8fc5\u901f\u638c\u63e1\u3002\u9ad8\u9636\u51fd\u6570\u662f\u628a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u5230\u51fd\u6570\u4e2d\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u3002\u8fd9\u91cc\u6211\u4eec\u628a\u51fd\u6570\u66ff\u6362\u4e3a\u7ec4\u4ef6\uff0c\u5c31\u662f\u9ad8\u9636\u7ec4\u4ef6\u4e86\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"const EnhancedComponent = higherOrderComponent(WrappedComponent);")),Object(o.b)("p",null,"\u5f53\u7136\u4e86\u89e3\u9ad8\u9636\u7ec4\u4ef6\u7684\u6982\u5ff5\u53ea\u662f\u4e07\u91cc\u957f\u5f81\u7b2c\u4e00\u6b65\uff0c\u7cbe\u8bfb\u6587\u7ae0\u5728\u9610\u8ff0\u5176\u6982\u5ff5\u4e0e\u5b9e\u73b0\u5916\uff0c\u4e5f\u5f3a\u8c03\u4e86\u5176\u91cd\u8981\u6027\u4e0e\u5c40\u9650\u6027\uff0c\u4ee5\u53ca\u4e0e\u5176\u4ed6\u65b9\u6848\u7684\u6bd4\u8f83\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u6765\u9886\u7565\u5427\u3002"),Object(o.b)("h2",{id:"2-\u5185\u5bb9\u6982\u8981"},"2 \u5185\u5bb9\u6982\u8981"),Object(o.b)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u5e38\u89c1\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f Props Proxy\uff0c\u5b83\u80fd\u591f\u5bf9 WrappedComponent \u7684 props \u8fdb\u884c\u64cd\u4f5c\uff0c\u63d0\u53d6 WrappedComponent state \u4ee5\u53ca\u4f7f\u7528\u5176\u4ed6\u5143\u7d20\u6765\u5305\u88f9 WrappedComponent\u3002Props Proxy \u4f5c\u4e3a\u4e00\u5c42\u4ee3\u7406\uff0c\u5177\u6709\u9694\u79bb\u7684\u4f5c\u7528\uff0c\u56e0\u6b64\u4f20\u5165 WrappedComponent \u7684 ref \u5c06\u65e0\u6cd5\u8bbf\u95ee\u5230\u5176\u672c\u8eab\uff0c\u9700\u8981\u5728 Props Proxy \u5185\u5b8c\u6210\u4e2d\u8f6c\uff0c\u5177\u4f53\u53ef\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\uff0creact-redux \u4e5f\u662f\u8fd9\u6837\u5b9e\u73b0\u7684\u3002"),Object(o.b)("p",null,"\u6b64\u5916\u5404\u4e2a Props Proxy \u7684\u9ed8\u8ba4\u540d\u79f0\u662f\u76f8\u540c\u7684\uff0c\u9700\u8981\u6839\u636e WrappedComponent \u6765\u8fdb\u884c\u4e0d\u540c\u547d\u540d\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function ppHOC(WrappedComponent) {\n  return class PP extends React.Component {\n    // \u5b9e\u73b0 HOC \u4e0d\u540c\u7684\u547d\u540d\n    static displayName = `HOC(${WrappedComponent.displayName})`;\n\n    getWrappedInstance() {\n      return this.wrappedInstance;\n    }\n\n    // \u5b9e\u73b0 ref \u7684\u8bbf\u95ee\n    setWrappedInstance(ref) {\n      this.wrappedInstance = ref;\n    }\n\n    render() {\n      return <WrappedComponent {\n        ...this.props,\n        ref: this.setWrappedInstance.bind(this),\n      } />\n    }\n  }\n}\n\n@ppHOC\nclass Example extends React.Component {\n  static displayName = 'Example';\n  handleClick() { ... }\n  ...\n}\n\nclass App extends React.Component {\n  handleClick() {\n    this.refs.example.getWrappedInstance().handleClick();\n  }\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick.bind(this)}>\u6309\u94ae</button>\n        <Example ref=\"example\" />\n      </div>  \n    );\n  }\n}\n")),Object(o.b)("p",null,"\u53e6\u4e00\u79cd\u662f Inheritance Inversion\uff0cHOC \u7c7b\u7ee7\u627f\u4e86 WrappedComponent\uff0c\u610f\u5473\u7740\u53ef\u4ee5\u8bbf\u95ee\u5230 WrappedComponent \u7684 state\u3001props\u3001\u751f\u547d\u5468\u671f\u548c render \u7b49\u65b9\u6cd5\u3002\u5982\u679c\u5728 HOC \u4e2d\u5b9a\u4e49\u4e86\u4e0e WrappedComponent \u540c\u540d\u65b9\u6cd5\uff0c\u5c06\u4f1a\u53d1\u751f\u8986\u76d6\uff0c\u5c31\u5fc5\u987b\u624b\u52a8\u901a\u8fc7 super \u8fdb\u884c\u8c03\u7528\u4e86\u3002\u901a\u8fc7\u5b8c\u5168\u64cd\u4f5c WrappedComponent \u7684 render \u65b9\u6cd5\u8fd4\u56de\u7684\u5143\u7d20\u6811\uff0c\u53ef\u4ee5\u771f\u6b63\u5b9e\u73b0\u6e32\u67d3\u52ab\u6301\u3002\u8fd9\u79cd\u65b9\u6848\u4f9d\u7136\u662f\u7ee7\u627f\u7684\u601d\u60f3\uff0c\u5bf9\u4e8e WrappedComponent \u4e5f\u6709\u8f83\u5f3a\u7684\u4fb5\u5165\u6027\uff0c\u56e0\u6b64\u5e76\u4e0d\u5e38\u89c1\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function ppHOC(WrappedComponent) {\n  return class ExampleEnhance extends WrappedComponent {\n    ...\n    componentDidMount() {\n      super.componentDidMount();\n    }\n    componentWillUnmount() {\n      super.componentWillUnmount();\n    }\n    render() {\n      ...\n      return super.render();\n    }\n  }\n}\n")),Object(o.b)("h2",{id:"3-\u7cbe\u8bfb"},"3 \u7cbe\u8bfb"),Object(o.b)("p",null,"\u672c\u6b21\u63d0\u51fa\u72ec\u5230\u89c2\u70b9\u7684\u540c\u5b66\u6709\uff1a\n",Object(o.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/turbe-xue"},"@monkingxue")," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/alcat2008"},"@alcat2008")," ",Object(o.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/BlackGanglion"},"@\u6de1\u82cd")," ",Object(o.b)("a",{parentName:"p",href:"https://www.zhihu.com/people/camsong"},"@camsong"),"\uff0c\u7cbe\u8bfb\u7531\u6b64\u5f52\u7eb3\u3002"),Object(o.b)("h3",{id:"hoc-\u7684\u9002\u7528\u8303\u56f4"},"HOC \u7684\u9002\u7528\u8303\u56f4"),Object(o.b)("p",null,"\u5bf9\u6bd4 HOC \u8303\u5f0f ",Object(o.b)("inlineCode",{parentName:"p"},"compose(render)(state)")," \u4e0e\u7236\u7ec4\u4ef6\uff08Parent Component\uff09\u7684\u8303\u5f0f ",Object(o.b)("inlineCode",{parentName:"p"},"render(render(state))"),"\uff0c\u5982\u679c\u5b8c\u5168\u5229\u7528 HOC \u6765\u5b9e\u73b0 React \u7684 implement\uff0c\u5c06\u64cd\u4f5c\u4e0e view \u5206\u79bb\uff0c\u4e5f\u672a\u5c1d\u4e0d\u53ef\uff0c\u4f46\u5374\u4e0d\u4f18\u96c5\u3002HOC \u672c\u8d28\u4e0a\u662f\u7edf\u4e00\u529f\u80fd\u62bd\u8c61\uff0c\u5f3a\u8c03\u903b\u8f91\u4e0e UI \u5206\u79bb\u3002\u4f46\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u524d\u7aef\u65e0\u6cd5\u9003\u79bb DOM \uff0c\u800c\u903b\u8f91\u4e0e DOM \u7684\u76f8\u5173\u6027\u4e3b\u8981\u5448\u73b0 3 \u79cd\u5173\u8054\u5f62\u5f0f\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4e0e DOM \u76f8\u5173\uff0c\u5efa\u8bae\u4f7f\u7528\u7236\u7ec4\u4ef6\uff0c\u7c7b\u4f3c\u4e8e\u539f\u751f HTML \u7f16\u5199"),Object(o.b)("li",{parentName:"ul"},"\u4e0e DOM \u4e0d\u76f8\u5173\uff0c\u5982\u6821\u9a8c\u3001\u6743\u9650\u3001\u8bf7\u6c42\u53d1\u9001\u3001\u6570\u636e\u8f6c\u6362\u8fd9\u7c7b\uff0c\u901a\u8fc7\u6570\u636e\u53d8\u5316\u95f4\u63a5\u63a7\u5236 DOM\uff0c\u53ef\u4ee5\u4f7f\u7528 HOC \u62bd\u8c61"),Object(o.b)("li",{parentName:"ul"},"\u4ea4\u53c9\u7684\u90e8\u5206\uff0cDOM \u76f8\u5173\uff0c\u4f46\u53ef\u4ee5\u505a\u5230\u5b8c\u5168\u5185\u805a\uff0c\u5373\u8fd9\u4e9b DOM \u4e0d\u4f1a\u548c\u5916\u90e8\u6709\u5173\u8054\uff0c\u5747\u53ef")),Object(o.b)("p",null,"DOM \u7684\u6e32\u67d3\u9002\u5408\u4f7f\u7528\u7236\u7ec4\u4ef6\uff0c\u8fd9\u662f React JSX \u539f\u751f\u652f\u6301\u7684\u65b9\u5f0f\uff0c\u6e05\u6670\u6613\u61c2\u3002\u6700\u597d\u662f\u80fd\u5c01\u88c5\u6210\u6728\u5076\u7ec4\u4ef6\uff08Dumb Component\uff09\u3002HOC \u9002\u5408\u505a DOM \u4e0d\u76f8\u5173\u53c8\u662f\u591a\u4e2a\u7ec4\u4ef6\u5171\u6027\u7684\u64cd\u4f5c\u3002\u5982 Form \u4e2d\uff0cvalidator \u6821\u9a8c\u64cd\u4f5c\u5c31\u662f\u7eaf\u6570\u636e\u64cd\u4f5c\u7684\uff0c\u653e\u5230\u4e86 HOC \u4e2d\u3002\u4f46 validator \u4fe1\u606f\u6ca1\u6709\u653e\u5230 HOC \u4e2d\u3002\u4f46\u5982\u679c\u80fd\u628a Error \u4fe1\u606f\u5c55\u793a\u8fd9\u4e9b\u903b\u8f91\u80fd\u591f\u5b8c\u5168\u9694\u79bb\uff0c\u4e5f\u53ef\u4ee5\u653e\u5230 HOC \u4e2d\uff08\u53ef\u7ed3\u5408\u4e0b\u4e00\u5c0f\u8282 Form \u5177\u4f53\u5b9e\u8df5\u8be6\u7ec6\u4e86\u89e3\uff09\u3002\n\u6570\u636e\u8bf7\u6c42\u662f\u53e6\u4e00\u7c7b DOM \u4e0d\u76f8\u5173\u7684\u573a\u666f\uff0c",Object(o.b)("a",{parentName:"p",href:"https://github.com/heroku/react-refetch"},"react-refetch")," \u7684\u5b9e\u73b0\u5c31\u662f\u4f7f\u7528\u4e86 HOC\uff0c\u505a\u5230\u4e86\u9ad8\u6548\u548c\u4f18\u96c5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"connect(props => ({\n  usersFetch: `/users?status=${props.status}&page=${props.page}`,\n  userStatsFetch: { url: `/users/stats`, force: true }\n}))(UsersList)\n")),Object(o.b)("h3",{id:"hoc-\u7684\u5177\u4f53\u5b9e\u8df5"},"HOC \u7684\u5177\u4f53\u5b9e\u8df5"),Object(o.b)("p",null,"HOC \u5728\u771f\u5b9e\u573a\u666f\u4e0b\u7684\u8fd0\u884c\u975e\u5e38\u591a\uff0c\u4e4b\u524d\u7b14\u8005\u5728 ",Object(o.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/22054582"},"\u57fa\u4e8e Decorator \u7684\u7ec4\u4ef6\u6269\u5c55\u5b9e\u8df5")," \u4e00\u6587\u4e2d\u4e5f\u63d0\u8fc7\u4f7f\u7528\u9ad8\u9636\u7ec4\u4ef6\u5c06\u66f4\u7ec6\u7c92\u5ea6\u7684\u7ec4\u4ef6\u7ec4\u5408\u6210 Selector \u4e0e Search\u3002\u7ed3\u5408\u7cbe\u8bfb\u6587\u7ae0\uff0c\u8fd9\u6b21\u8ba9\u6211\u4eec\u901a\u8fc7 Form \u7ec4\u4ef6\u7684\u62bd\u8c61\u6765\u8868\u73b0 HOC \u5177\u6709\u7684\u826f\u597d\u6269\u5c55\u673a\u5236\u3002"),Object(o.b)("p",null,"Form \u4e2d\u4f1a\u5305\u542b\u5404\u79cd\u4e0d\u540c\u7684\u7ec4\u4ef6\uff0c\u5e38\u89c1\u7684\u6709 Input\u3001Selector\u3001Checkbox \u7b49\u7b49\uff0c\u4e5f\u4f1a\u6709\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u52a0\u5165\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002Form \u7075\u6d3b\u591a\u53d8\uff0c\u4ece\u529f\u80fd\u4e0a\u770b\uff0c\u8868\u5355\u6821\u9a8c\u53ef\u80fd\u4e3a\u5355\u7ec4\u4ef6\u503c\u6821\u9a8c\uff0c\u4e5f\u53ef\u80fd\u4e3a\u5168\u8868\u5355\u503c\u6821\u9a8c\uff0c\u53ef\u80fd\u4e3a\u5e38\u89c4\u68c0\u9a8c\uff0c\u6bd4\u5982\uff1a\u975e\u7a7a\u3001\u8f93\u5165\u9650\u5236\uff0c\u4e5f\u53ef\u80fd\u9700\u8981\u4e0e\u670d\u52a1\u7aef\u914d\u5408\uff0c\u751a\u81f3\u9700\u8981\u6839\u636e\u4e1a\u52a1\u7279\u70b9\u8fdb\u884c\u5b9a\u5236\u3002\u4ece UI \u4e0a\u770b\uff0c\u68c0\u9a8c\u7ed3\u679c\u663e\u793a\u7684\u4f4d\u7f6e\uff0c\u53ef\u80fd\u5728\u7ec4\u4ef6\u4e0b\u65b9\uff0c\u4e5f\u53ef\u80fd\u662f\u5728\u7ec4\u4ef6\u53f3\u4fa7\u3002"),Object(o.b)("p",null,"\u76f4\u63a5\u88f8\u5199 Form\uff0c\u65e0\u7591\u662f\u673a\u68b0\u800c\u53c8\u91cd\u590d\u7684\u3002\u5c06 Form \u4e2d\u7ec4\u4ef6\u7684 value \u7ecf\u8fc7 validator\uff0c\u628a value\uff0cvalidator \u4ea7\u751f\u7684 error \u4fe1\u606f\u50a8\u5b58\u5230 state \u6216 redux store \u4e2d\uff0c\u7136\u540e\u5728 view \u5c42\u5b8c\u6210\u663e\u793a\u3002\u8fd9\u6761\u8def\u5927\u5bb6\u90fd\u662f\u76f8\u540c\u7684\uff0c\u53ef\u4ee5\u8fdb\u884c\u590d\u7528\uff0c\u53ea\u662f\u6211\u4eec\u9762\u5bf9\u7684\u662f\u4e0d\u540c\u7684\u7ec4\u4ef6\uff0c\u4e0d\u540c\u7684 validator\uff0c\u4e0d\u540c\u7684 view \u800c\u5df2\u3002\u5bf9\u4e8e Form \u800c\u8a00\uff0c\u65e2\u8981\u6ee1\u8db3\u901a\u7528\uff0c\u53c8\u8981\u6ee1\u8db3\u90e8\u5206\u4e2a\u6027\u5316\u7684\u9700\u6c42\uff0c\u4ee5\u5f80\u5355\u7eaf\u7684\u914d\u7f6e\u5316\u53ea\u4f1a\u8ba9\u4f7f\u7528\u6108\u52a0\u7e41\u7410\uff0c\u6211\u4eec\u6240\u9700\u8981\u62bd\u8c61\u7684\u662f Form \u529f\u80fd\u800c\u975e UI\uff0c\u56e0\u6b64\u901a\u8fc7 HOC \u9488\u5bf9 Form \u7684\u529f\u80fd\u8fdb\u884c\u63d0\u53d6\u5c31\u6210\u4e3a\u4e86\u5fc5\u7136\u3002"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/9314735/27116337-3f1f16a8-5103-11e7-8dc6-c7197e1b1eab.png",alt:"image"})),Object(o.b)("p",null,"\u81f3\u4e8e HOC \u5728 Form \u4e0a\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u9996\u5148\u5c06\u8868\u5355\u4e2d\u7684\u7ec4\u4ef6\uff08Input\u3001Selector...\uff09\u4e0e\u76f8\u5e94 validator \u4e0e\u7ec4\u4ef6\u503c\u56de\u8c03\u51fd\u6570\u540d\uff08trigger\uff09\u4f20\u5165 Decorator\uff0c\u5c06 validator \u4e0e trigger \u76f8\u7ed1\u5b9a\u3002Decorator \u5b8c\u6210\u4e86\u5404\u79cd\u4e0d\u540c\u7ec4\u4ef6\u4e0e Form \u5185\u7f6e Store \u95f4 value \u7684\u4f20\u9012\u3001\u6821\u9a8c\u529f\u80fd\u7684\u62bd\u8c61\uff0c\u5373\u7cbe\u8bfb\u6587\u7ae0\u4e2d\u63d0\u5230 Props Proxy \u65b9\u5f0f\u7684\u5176\u4e2d\u4e24\u79cd\u4f5c\u7528\uff1a",Object(o.b)("strong",{parentName:"p"},"\u63d0\u53d6 state")," \u4e0e ",Object(o.b)("strong",{parentName:"p"},"\u64cd\u4f5c props")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function formFactoryFactory({\n  validator,\n  trigger = 'onChange',\n  ...\n}) {\n  return FormFactory(WrappedComponent) {\n    return class Decorator extends React.Component {\n      getBind(trigger, validator) {\n        ...\n      }\n      render() {\n        const newProps = {\n          ...this.props,\n          [trigger]: this.getBind(trigger, validator),\n          ...\n        }\n        return <WrappedComponent {...newProps} />\n      }\n    }\n  }\n}\n\n// \u8c03\u7528\nformFactoryFactory({\n  validator: (value) => {\n    return value !== '';\n  }\n})(<Input placeholder=\"\u8bf7\u8f93\u5165...\" />)\n")),Object(o.b)("p",null,"\u5f53\u7136\u4e3a\u4e86\u8003\u8651\u4e2a\u6027\u5316\u9700\u6c42\uff0cForm Store \u4e5f\u5411\u5916\u66b4\u9732\u5f88\u591a API\uff0c\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u548c\u4fee\u6539 value\u3001error \u7684\u503c\u3002\u73b0\u5728\u6211\u4eec\u9700\u8981\u5bf9\u4e00\u4e2a\u8868\u5355\u7684\u6240\u6709\u503c\u63d0\u4ea4\u5230\u540e\u7aef\u8fdb\u884c\u6821\u9a8c\uff0c\u6839\u636e\u540e\u7aef\u8fd4\u56de\uff0c\u5206\u522b\u5217\u51fa\u5404\u9879\u7684\u6821\u9a8c\u9519\u8bef\u4fe1\u606f\uff0c\u5c31\u9700\u8981\u501f\u52a9\u76f8\u5e94\u9879\u7684 setError \u53bb\u5b8c\u6210\u4e86\u3002"),Object(o.b)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u53c2\u8003\u4e86 ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-component/form"},"rc-form")," \u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u6709\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u9605\u8bfb\u5176\u6e90\u7801\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { createForm } from 'rc-form';\n\nclass Form extends React.Component {\n  submit = () => {\n    this.props.form.validateFields((error, value) => {\n      console.log(error, value);\n    });\n  }\n\n  render() {\n    const { getFieldError, getFieldDecorator } = this.props.form;\n    const errors = getFieldError('required');\n    return (\n      <div>\n        {getFieldDecorator('required', {\n          rules: [{ required: true }],\n        })(<Input />)}\n        {errors ? errors.join(',') : null}\n        <button onClick={this.submit}>submit</button>\n      </div>\n    );\n  }\n}\n\nexport createForm()(Form);\n")),Object(o.b)("h2",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),Object(o.b)("p",null,"React \u59cb\u7ec8\u5f3a\u8c03\u7ec4\u5408\u4f18\u4e8e\u7ee7\u627f\u7684\u7406\u5ff5\uff0c\u671f\u671b\u901a\u8fc7\u590d\u7528\u5c0f\u7ec4\u4ef6\u6765\u6784\u5efa\u5927\u7ec4\u4ef6\u4f7f\u5f97\u5f00\u53d1\u53d8\u5f97\u7b80\u5355\u800c\u53c8\u9ad8\u6548\uff0c\u4e0e\u4f20\u7edf\u9762\u5411\u5bf9\u8c61\u601d\u60f3\u662f\u622a\u7136\u4e0d\u540c\u7684\u3002\u9ad8\u9636\u51fd\u6570\uff08HOC\uff09\u7684\u51fa\u73b0\u66ff\u4ee3\u4e86\u539f\u6709 Mixin \u4fb5\u5165\u5f0f\u7684\u65b9\u6848\uff0c\u5bf9\u6bd4\u9690\u5f0f\u7684 Mixin \u6216\u662f\u7ee7\u627f\uff0cHOC \u80fd\u591f\u5728 Devtools \u4e2d\u663e\u793a\u51fa\u6765\uff0c\u6ee1\u8db3\u62bd\u8c61\u4e4b\u4f59\uff0c\u4e5f\u65b9\u4fbf\u4e86\u5f00\u53d1\u4e0e\u6d4b\u8bd5\u3002\u5f53\u7136\uff0c\u4e0d\u53ef\u8fc7\u5ea6\u62bd\u8c61\u662f\u6211\u4eec\u59cb\u7ec8\u8981\u79c9\u6301\u7684\u539f\u5219\u3002\u5e0c\u671b\u8bfb\u8005\u901a\u8fc7\u672c\u6b21\u9605\u8bfb\u4e0e\u8ba8\u8bba\uff0c\u80fd\u7ed3\u5408\u81ea\u5df1\u5177\u4f53\u7684\u4e1a\u52a1\u5f00\u53d1\u573a\u666f\uff0c\u83b7\u5f97\u4e00\u4e9b\u542f\u53d1\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(o.b)("a",{parentName:"p",href:"http://github.com/dt-fe/weekly/issues/18"},"\u7cbe\u8bfb\u300a\u6df1\u5165\u7406\u89e3 React \u9ad8\u9636\u7ec4\u4ef6\u300b \xb7 Issue #18 \xb7 dt-fe/weekly"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7",Object(o.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u6bcf\u5468\u4e94\u53d1\u5e03\u3002")))}s.isMDXComponent=!0},295:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),s=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:n},i),{},{components:t})):a.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=t[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);