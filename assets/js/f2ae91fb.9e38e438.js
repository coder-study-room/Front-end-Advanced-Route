(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{443:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(467)),c={title:"182. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Iterator \u8fed\u4ee3\u5668\u6a21\u5f0f\u300b",id:"182",hide_title:!0},o={unversionedId:"182",id:"182",isDocsHomePage:!1,title:"182. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Iterator \u8fed\u4ee3\u5668\u6a21\u5f0f\u300b",description:"Iterator\uff08\u8fed\u4ee3\u5668\u6a21\u5f0f\uff09\u5c5e\u4e8e\u884c\u4e3a\u578b\u6a21\u5f0f\u3002",source:"@site/weekly/182.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Iterator \u8fed\u4ee3\u5668\u6a21\u5f0f\u300b.md",slug:"/182",permalink:"/weekly/182",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/weekly/182.\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Iterator \u8fed\u4ee3\u5668\u6a21\u5f0f\u300b.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617963167,formattedLastUpdatedAt:"4/9/2021",sidebar:"weekly",previous:{title:"181. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Interpreter \u89e3\u91ca\u5668\u6a21\u5f0f\u300b",permalink:"/weekly/181"},next:{title:"183. \u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Mediator \u4e2d\u4ecb\u8005\u6a21\u5f0f\u300b",permalink:"/weekly/183"}},i=[{value:"\u4e3e\u4f8b\u5b50",id:"\u4e3e\u4f8b\u5b50",children:[{value:"generator",id:"generator",children:[]},{value:"\u6570\u7ec4\u8fed\u4ee3\u5668",id:"\u6570\u7ec4\u8fed\u4ee3\u5668",children:[]},{value:"Map \u8fed\u4ee3\u5668",id:"map-\u8fed\u4ee3\u5668",children:[]}]},{value:"\u610f\u56fe\u89e3\u91ca",id:"\u610f\u56fe\u89e3\u91ca",children:[]},{value:"\u7ed3\u6784\u56fe",id:"\u7ed3\u6784\u56fe",children:[]},{value:"\u4ee3\u7801\u4f8b\u5b50",id:"\u4ee3\u7801\u4f8b\u5b50",children:[]},{value:"\u5f0a\u7aef",id:"\u5f0a\u7aef",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],b={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Iterator\uff08\u8fed\u4ee3\u5668\u6a21\u5f0f\uff09\u5c5e\u4e8e\u884c\u4e3a\u578b\u6a21\u5f0f\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u63d0\u4f9b\u4e00\u79cd\u65b9\u6cd5\u987a\u5e8f\u8bbf\u95ee\u4e00\u4e2a\u805a\u5408\u5bf9\u8c61\u4e2d\u7684\u5404\u4e2a\u5143\u7d20\uff0c\u800c\u53c8\u4e0d\u9700\u8981\u66b4\u9732\u8be5\u5bf9\u8c61\u7684\u5185\u90e8\u8868\u793a\u3002")),Object(l.b)("p",null,"\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u8981\u89e3\u51b3\u7684\u6839\u672c\u95ee\u9898\u662f\uff0c\u805a\u5408\u7684\u79cd\u7c7b\u6709\u5f88\u591a\uff0c\u6bd4\u5982\u5bf9\u8c61\u3001\u94fe\u8868\u3001\u6570\u7ec4\u3001\u751a\u81f3\u81ea\u5b9a\u4e49\u7ed3\u6784\uff0c\u4f46\u904d\u5386\u8fd9\u4e9b\u7ed3\u6784\u65f6\uff0c\u4e0d\u540c\u7ed3\u6784\u7684\u904d\u5386\u65b9\u5f0f\u53c8\u4e0d\u540c\uff0c\u6240\u4ee5\u6211\u4eec\u5fc5\u987b\u4e86\u89e3\u6bcf\u79cd\u7ed3\u6784\u7684\u5185\u90e8\u5b9a\u4e49\u624d\u80fd\u904d\u5386\u3002"),Object(l.b)("p",null,"\u6bd4\u5982\u6570\u7ec4\u6211\u4eec\u53ef\u4ee5\u5229\u7528 length + for \u5faa\u73af\uff0c\u5bf9\u8c61\u6211\u4eec\u53ef\u4ee5 Object.keys\uff0c\u94fe\u8868\u6bd4\u8f83\u9ebb\u70e6\uff0c\u9700\u8981\u5185\u90e8\u66b4\u9732\u51fa\u5143\u7d20\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"next")," \u4ee5\u64cd\u4f5c\u6307\u5411\u4e0b\u4e00\u4e2a\u5143\u7d20\u3002"),Object(l.b)("p",null,"\u8fed\u4ee3\u5668\u6a21\u5f0f\u53ef\u4ee5\u505a\u5230\u7528\u540c\u4e00\u79cd API \u904d\u5386\u4efb\u610f\u7c7b\u578b\u805a\u5408\u5bf9\u8c61\uff0c\u4e14\u4e0d\u7528\u5173\u5fc3\u805a\u5408\u5bf9\u8c61\u7684\u5185\u90e8\u7ed3\u6784\u3002"),Object(l.b)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u548c ",Object(l.b)("inlineCode",{parentName:"p"},"Array.from")," \u6709\u70b9\u50cf\uff0c\u4f46\u5176\u5b9e\u771f\u6b63\u7684\u8fed\u4ee3\u5668\u5728 JS \u91cc\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"obj[Symbol.iterator]()"),"\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u5bf9\u8c61\u5b9e\u73b0\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"[Symbol.interator]"),"\uff0c\u5c31\u8ba4\u4e3a\u662f\u53ef\u904d\u5386\u7684\u3002"),Object(l.b)("h2",{id:"\u4e3e\u4f8b\u5b50"},"\u4e3e\u4f8b\u5b50"),Object(l.b)("p",null,"\u5982\u679c\u770b\u4e0d\u61c2\u4e0a\u9762\u7684\u610f\u56fe\u4ecb\u7ecd\uff0c\u6ca1\u6709\u5173\u7cfb\uff0c\u8bbe\u8ba1\u6a21\u5f0f\u9700\u8981\u5728\u65e5\u5e38\u5de5\u4f5c\u91cc\u7528\u8d77\u6765\uff0c\u7ed3\u5408\u4f8b\u5b50\u53ef\u4ee5\u52a0\u6df1\u4f60\u7684\u7406\u89e3\uff0c\u4e0b\u9762\u6211\u51c6\u5907\u4e86\u4e09\u4e2a\u4f8b\u5b50\uff0c\u8ba9\u4f60\u4f53\u4f1a\u4ec0\u4e48\u573a\u666f\u4e0b\u4f1a\u7528\u5230\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u3002"),Object(l.b)("p",null,"\u8fed\u4ee3\u5668\u7684\u4f8b\u5b50\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u5e73\u65f6\u5de5\u4f5c\u4e2d\u6709\u5927\u91cf\u4f7f\u7528\u5230\u3002"),Object(l.b)("h3",{id:"generator"},"generator"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"generator")," \u5929\u751f\u4e3a\u8fed\u4ee3\u5668\u7684 API\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"function* func () {\n  yield 'a';\n  yield 'b';\n  return 'c';\n}\n\nvar run = func();\nrun.next() // {value: \"a\", done: false}\nrun.next() // {value: \"b\", done: false}\nrun.next() // {value: \"c\", done: true}\n")),Object(l.b)("p",null,"\u6211\u4eec\u65e0\u9700\u5173\u5fc3 generator \u5185\u90e8\u662f\u4f55\u79cd\u5b58\u50a8\u7ed3\u6784\uff0c\u53ea\u9700\u8981\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},".next()"),"\uff0c\u5e76\u6839\u636e\u8fd4\u56de\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"done")," \u6765\u5224\u65ad\u662f\u5426\u904d\u5386\u5b8c\u5373\u53ef\u3002\u5728 generator \u7684\u573a\u666f\u4e2d\uff0c\u8fed\u4ee3\u5668\u4e0d\u4ec5\u7528\u6765\u904d\u5386\u805a\u5408\uff0c\u8fd8\u7528\u4e8e\u6267\u884c\u4ee3\u7801\u3002"),Object(l.b)("h3",{id:"\u6570\u7ec4\u8fed\u4ee3\u5668"},"\u6570\u7ec4\u8fed\u4ee3\u5668"),Object(l.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7528\u8fed\u4ee3\u5668\u7684\u65b9\u5f0f\u904d\u5386\u6570\u7ec4\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"const arr = [1, 2, 3]\nconst run = arr[Symbol.iterator]()\n\nrun.next() // {value: 1, done: false}\nrun.next() // {value: 2, done: false}\nrun.next() // {value: 2, done: false}\nrun.next() // {value: undefined, done: true}\n")),Object(l.b)("p",null,"\u53ef\u80fd\u6709\u4eba\u89c9\u5f97\u8fd9\u662f\u753b\u86c7\u6dfb\u8db3\uff0c\u56e0\u4e3a\u6bd5\u7adf\u904d\u5386\u6570\u7ec4\u7528 for \u5faa\u73af\u66f4\u65b9\u4fbf\uff0c\u4f46\u8fd9\u5c31\u662f\u8bbe\u8ba1\u6a21\u5f0f\u4e0e\u975e\u8bbe\u8ba1\u6a21\u5f0f\u601d\u7ef4\u7684\u533a\u522b\uff0c\u91cd\u8981\u7684\u4e0d\u662f\u7528\u719f\u6089\u7b80\u5355\u7684 API \u5feb\u901f\u6ee1\u8db3\u9700\u6c42\uff0c",Object(l.b)("strong",{parentName:"p"},"\u8bbe\u8ba1\u6a21\u5f0f\u5173\u6ce8\u7684\u662f\u5982\u4f55\u7edf\u4e00\u3001\u62bd\u8c61\u3001\u4f4e\u8026\u5408\u7684\u7f16\u7801"),"\u3002"),Object(l.b)("h3",{id:"map-\u8fed\u4ee3\u5668"},"Map \u8fed\u4ee3\u5668"),Object(l.b)("p",null,"Map \u5bf9\u8c61\u4e5f\u53ef\u4ee5\u7528\u8fed\u4ee3\u5668\u65b9\u5f0f\u904d\u5386\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"const citys = new Map([['\u5317\u4eac', 1], ['\u4e0a\u6d77', 2], ['\u676d\u5dde', 3]])\nconst run = citys.entries()\n\nrun.next() // {value: ['\u5317\u4eac', 1], done: false}\nrun.next() // {value: ['\u4e0a\u6d77', 2], done: false}\nrun.next() // {value: ['\u676d\u5dde', 3], done: false}\nrun.next() // {value: undefined, done: true}\n")),Object(l.b)("h2",{id:"\u610f\u56fe\u89e3\u91ca"},"\u610f\u56fe\u89e3\u91ca"),Object(l.b)("p",null,"\u4ece\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u51fa\uff0c\u867d\u7136\u7528\u8fed\u4ee3\u5668\u904d\u5386\u6570\u7ec4\u770b\u4e0a\u53bb\u6bd4 for \u5faa\u73af\u9ebb\u70e6\u4e00\u70b9\uff0c\u4f46\u5f53\u6211\u4eec\u628a\u6240\u6709\u805a\u5408\u7c7b\u578b\u653e\u5230\u4e00\u8d77\u770b\u65f6\uff0c\u53ef\u4ee5\u53d1\u73b0\u53ea\u6709\u8fed\u4ee3\u5668\u7684 API \u662f\u6700\u7edf\u4e00\u7684\uff0c\u662f\u552f\u4e00\u4e00\u4e2a\u4e0d\u9700\u8981\u5173\u5fc3\u805a\u5408\u7c7b\u578b\u5c31\u53ef\u4ee5\u5b8c\u6210\u904d\u5386\u7684\u65b9\u6848\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u610f\u56fe\uff1a\u63d0\u4f9b\u4e00\u79cd\u65b9\u6cd5\u987a\u5e8f\u8bbf\u95ee\u4e00\u4e2a\u805a\u5408\u5bf9\u8c61\u4e2d\u7684\u5404\u4e2a\u5143\u7d20\uff0c\u800c\u53c8\u4e0d\u9700\u8981\u66b4\u9732\u8be5\u5bf9\u8c61\u7684\u5185\u90e8\u8868\u793a\u3002")),Object(l.b)("p",null,"\u518d\u6765\u770b\u610f\u56fe\uff0c\u5c31\u975e\u5e38\u597d\u7406\u89e3\u4e86\uff0c\u6211\u4eec\u65e0\u9700\u5173\u5fc3 \u6570\u7ec4\u3001generator\u3001Map \u5185\u90e8\u662f\u5982\u4f55\u5b58\u50a8\u7684\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u904d\u5386\u3002\u5b9e\u9645\u4e0a\uff0c\u6df1\u7a76 generator \u5185\u90e8\u7684\u5b58\u50a8\u7ed3\u6784\u4e5f\u6ca1\u6709\u610f\u4e49\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u7528\u8fed\u4ee3\u5668\u8fdb\u884c\u904d\u5386\uff0c\u90a3\u4e48\u5bf9\u4e8e\u590d\u6742\u7ed3\u6784\u7684\u904d\u5386\u6210\u672c\u662f\u975e\u5e38\u9ad8\u7684\u3002"),Object(l.b)("h2",{id:"\u7ed3\u6784\u56fe"},"\u7ed3\u6784\u56fe"),Object(l.b)("img",{width:"500",src:"https://img.alicdn.com/imgextra/i1/O1CN01lYSkni1DgFh6V3P85_!!6000000000245-2-tps-1658-754.png"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Aggregate"),": \u805a\u5408\uff0c\u9700\u8981\u5b9a\u4e49\u521b\u5efa\u8fed\u4ee3\u5668\u7684\u63a5\u53e3\u3002\u6bd4\u5982\u524d\u7aef\u89c4\u8303\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"[Symbol.iterator]()"),"\uff0c\u6216\u8005\u8fd9\u91cc\u5b9a\u4e49\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"CreateIterator()"),"\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Iterator"),": \u8fed\u4ee3\u5668\uff0c\u5b9a\u4e49\u4e86\u8bbf\u95ee\u4e0e\u904d\u5386\u7684 API\u3002")),Object(l.b)("p",null,"\u8fed\u4ee3\u5668\u7684\u5b9a\u4e49\u5f88\u7b80\u5355\uff0c\u5b9e\u73b0\u65f6\u8981\u8003\u8651\u7684\u56e0\u7d20\u53ef\u4e0d\u5c11\uff0c\u5305\u62ec\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5065\u58ee\u6027\u3002\u5373\u8fed\u4ee3\u8fc7\u7a0b\u4e2d\u589e\u52a0\u3001\u5220\u9664\u5143\u7d20\u540e\uff0c\u8fd8\u80fd\u6b63\u5e38\u904d\u5386\u3002\u6216\u8005\u904d\u5386\u7a7a\u805a\u5408\u65f6\u4e5f\u8981\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5916\u90e8\u63a7\u5236\u8fed\u4ee3\u8fd8\u662f\u5185\u90e8\u3002\u5373\u7c7b\u4f3c KOA \u7531\u63d2\u4ef6\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"next()")," \u63a7\u5236\u8fed\u4ee3\uff0c\u8fd8\u662f\u7531\u5916\u5c42\u7edf\u4e00\u63a7\u5236\u8fed\u4ee3\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5982\u4f55\u5b9a\u4e49\u904d\u5386\u7b97\u6cd5\u3002\u5373\u4fbf\u5bf9\u4e8e\u5bf9\u8c61\u8fd9\u79cd\u7b80\u5355\u573a\u666f\uff0c\u4e5f\u5b58\u5728\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u3001\u5192\u6ce1\u4e0e\u6355\u83b7\u8fd9\u51e0\u79cd\u904d\u5386\u987a\u5e8f\uff0c\u8fed\u4ee3\u5668\u53ef\u4ee5\u63d0\u4f9b\u9009\u62e9\u6216\u8005\u62d3\u5c55\u7684\u65b9\u5f0f\uff0c\u81ea\u5b9a\u4e49\u904d\u5386\u7b97\u6cd5\u3002")),Object(l.b)("h2",{id:"\u4ee3\u7801\u4f8b\u5b50"},"\u4ee3\u7801\u4f8b\u5b50"),Object(l.b)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4f7f\u7528 typescript \u7f16\u5199\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"// \u5b9a\u4e49\u805a\u5408\u63a5\u53e3\ninterface Aggregate{\n  getIterator: () => Iterator\n}\n\n// \u5b9a\u4e49\u8fed\u4ee3\u5668\u63a5\u53e3\ninterface Iterator {\n  // \u6307\u5411\u4e0b\u4e00\u4e2a\n  next: () => void\n}\n\n// \u5b9a\u4e49\u4e00\u4e2a\u805a\u5408\nclass List implements Aggregate {\n  // \u5b58\u50a8\u5143\u7d20\n  public values: string[]\n\n  // \u6e38\u6807\n  public index: number\n\n  getIterator() {\n    return new ConcreteIterator(this);\n  }\n}\n\n// List \u7684\u8fed\u4ee3\u5668\nclass ConcreteIterator implements Iterator {\n  constructor(list: List) {\n    this.list = list\n  }\n\n  next() {\n    return this.list.values[this.list.index] // \u6ce8\u610f\u8fb9\u754c\u60c5\u51b5\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5c55\u5f00\n    this.list.index++\n  }\n}\n")),Object(l.b)("h2",{id:"\u5f0a\u7aef"},"\u5f0a\u7aef"),Object(l.b)("p",null,"\u5982\u679c\u4f60\u53ea\u662f\u904d\u5386\u6570\u7ec4\uff0c\u76f4\u63a5\u7528 for \u5faa\u73af\u4f1a\u6bd4\u8fed\u4ee3\u5668\u65b9\u4fbf\u5f88\u591a\uff0c\u6ca1\u5fc5\u8981\u4e3a\u4e86\u7528\u8bbe\u8ba1\u6a21\u5f0f\u800c\u7528\u8bbe\u8ba1\u6a21\u5f0f\u3002\u8fed\u4ee3\u5668\u4ec5\u5728\u4ee5\u4e0b\u60c5\u51b5\u53ef\u4ee5\u8003\u8651\u7528\u4e8e\u6570\u7ec4\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u8fd9\u4e2a\u6570\u7ec4\u6bd4\u8f83\u7279\u6b8a\uff0c\u662f N \u7ef4\u6570\u7ec4\uff0c\u9700\u8981\u4e00\u6b21\u6027\u904d\u5386\u5b8c\uff0c\u90a3\u4e48\u53ef\u4ee5\u7528\u8fed\u4ee3\u5668\u3002"),Object(l.b)("li",{parentName:"ol"},"\u540c\u65f6\u904d\u5386\u6570\u7ec4\u548c\u5176\u4ed6\u7c7b\u578b\u7684\u805a\u5408\uff0c\u5219\u4e0d\u8bba\u6570\u7ec4\u8fd8\u662f\u5176\u4ed6\u805a\u5408\uff0c\u90fd\u7528\u76f8\u540c\u7684\u8fed\u4ee3\u5668\u6a21\u5f0f\u904d\u5386\u6700\u597d\u3002")),Object(l.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(l.b)("p",null,"\u8fed\u4ee3\u5668\u6a21\u5f0f\u6bd4\u8f83\u597d\u7406\u89e3\uff0c\u8fd9\u91cc\u8865\u5145\u51e0\u4e2a\u76f8\u5173\u8bbe\u8ba1\u6a21\u5f0f\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8fed\u4ee3\u5668\u53ef\u4ee5\u548c\u7ec4\u5408\u6a21\u5f0f\u914d\u5408\uff0c\u5728\u7ec4\u5408\u7ed3\u6784\u5185\u8fdb\u884c\u9012\u5f52\uff0c\u8fd9\u6837\u4e00\u4e2a\u8fed\u4ee3\u5668\u5c31\u53ef\u4ee5\u904d\u5386\u5b8c\u6240\u6709\u7ec4\u5408\u3002"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u5de5\u5382\u6a21\u5f0f + \u591a\u6001\u6a21\u5f0f\uff0c\u5b9e\u4f8b\u5316\u4e0d\u540c\u7684\u8fed\u4ee3\u5668\u7684\u5b9e\u4f8b\u3002"),Object(l.b)("li",{parentName:"ul"},"\u8fed\u4ee3\u5668\u6a21\u5f0f\u8fd8\u53ef\u4ee5\u4e0e\u5907\u5fd8\u5f55\u6a21\u5f0f\u914d\u5408\u4f7f\u7528\uff0c\u5f53\u6211\u4eec\u8981\u8fd8\u539f\u8fed\u4ee3\u5668\u72b6\u6001\u65f6\uff0c\u9002\u5408\u5728\u8fed\u4ee3\u5668\u5185\u90e8\u4f7f\u7528\u5907\u5fd8\u5f55\u6a21\u5f0f\u8fdb\u884c\u72b6\u6001\u5b58\u50a8\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8ba8\u8bba\u5730\u5740\u662f\uff1a",Object(l.b)("a",{parentName:"p",href:"https://github.com/dt-fe/weekly/issues/298"},"\u7cbe\u8bfb\u300a\u8bbe\u8ba1\u6a21\u5f0f - Iterator \u8fed\u4ee3\u5668\u6a21\u5f0f\u300b\xb7 Issue #298 \xb7 dt-fe/weekly"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u8bf7 ",Object(l.b)("a",{parentName:"strong",href:"https://github.com/dt-fe/weekly"},"\u70b9\u51fb\u8fd9\u91cc"),"\uff0c\u6bcf\u5468\u90fd\u6709\u65b0\u7684\u4e3b\u9898\uff0c\u5468\u672b\u6216\u5468\u4e00\u53d1\u5e03\u3002\u524d\u7aef\u7cbe\u8bfb - \u5e2e\u4f60\u7b5b\u9009\u9760\u8c31\u7684\u5185\u5bb9\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7248\u6743\u58f0\u660e\uff1a\u81ea\u7531\u8f6c\u8f7d-\u975e\u5546\u7528-\u975e\u884d\u751f-\u4fdd\u6301\u7f72\u540d\uff08",Object(l.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"},"\u521b\u610f\u5171\u4eab 3.0 \u8bb8\u53ef\u8bc1"),"\uff09")))}u.isMDXComponent=!0},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,O=p["".concat(c,".").concat(s)]||p[s]||d[s]||l;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);