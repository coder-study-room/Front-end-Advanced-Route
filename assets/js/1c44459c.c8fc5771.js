(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(385)),i={title:"26. Shadow DOM\u548cVirtual DOM\u6709\u4ec0\u4e48\u533a\u522b\uff1f"},c={unversionedId:"react/iq-66",id:"react/iq-66",isDocsHomePage:!1,title:"26. Shadow DOM\u548cVirtual DOM\u6709\u4ec0\u4e48\u533a\u522b\uff1f",source:"@site/interview/react/iq-66.md",slug:"/react/iq-66",permalink:"/interview/react/iq-66",editUrl:"https://github.com/coder-study-room/Front-end-Advanced-Route/edit/master/interview/react/iq-66.md",version:"current",lastUpdatedBy:"wangweidong",lastUpdatedAt:1617870333,formattedLastUpdatedAt:"4/8/2021",sidebar:"interview",previous:{title:"25. Virtual DOM\u5982\u4f55\u5de5\u4f5c\uff1f",permalink:"/interview/react/iq-65"},next:{title:"27. React Fiber \u662f\u4ec0\u4e48\uff1f",permalink:"/interview/react/iq-67"}},u=[],p={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}))}l.isMDXComponent=!0},385:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),s=n,m=f["".concat(i,".").concat(s)]||f[s]||d[s]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);