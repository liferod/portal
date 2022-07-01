"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6301],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,d=g["".concat(i,".").concat(m)]||g[m]||s[m]||o;return n?t.createElement(d,c(c({ref:r},u),{},{components:n})):t.createElement(d,c({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2575:function(e,r,n){n.r(r),n.d(r,{default:function(){return s},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],l={title:"\u7194\u65ad\u539f\u7406\u4e0e\u5b9e\u73b0",authors:"kevwan"},i={unversionedId:"blog/governance/breaker-algorithms",id:"blog/governance/breaker-algorithms",isDocsHomePage:!1,title:"\u7194\u65ad\u539f\u7406\u4e0e\u5b9e\u73b0",description:"\u5728\u5fae\u670d\u52a1\u4e2d\u670d\u52a1\u95f4\u4f9d\u8d56\u975e\u5e38\u5e38\u89c1\uff0c\u6bd4\u5982\u8bc4\u8bba\u670d\u52a1\u4f9d\u8d56\u5ba1\u6838\u670d\u52a1\u800c\u5ba1\u6838\u670d\u52a1\u53c8\u4f9d\u8d56\u53cd\u5783\u573e\u670d\u52a1\uff0c\u5f53\u8bc4\u8bba\u670d\u52a1\u8c03\u7528\u5ba1\u6838\u670d\u52a1\u65f6\uff0c\u5ba1\u6838\u670d\u52a1\u53c8\u8c03\u7528\u53cd\u5783\u573e\u670d\u52a1\uff0c\u800c\u8fd9\u65f6\u53cd\u5783\u573e\u670d\u52a1\u8d85\u65f6\u4e86\uff0c\u7531\u4e8e\u5ba1\u6838\u670d\u52a1\u4f9d\u8d56\u53cd\u5783\u573e\u670d\u52a1\uff0c\u53cd\u5783\u573e\u670d\u52a1\u8d85\u65f6\u5bfc\u81f4\u5ba1\u6838\u670d\u52a1\u903b\u8f91\u4e00\u76f4\u7b49\u5f85\uff0c\u800c\u8fd9\u4e2a\u65f6\u5019\u8bc4\u8bba\u670d\u52a1\u53c8\u5728\u4e00\u76f4\u8c03\u7528\u5ba1\u6838\u670d\u52a1\uff0c\u5ba1\u6838\u670d\u52a1\u5c31\u6709\u53ef\u80fd\u56e0\u4e3a\u5806\u79ef\u4e86\u5927\u91cf\u8bf7\u6c42\u800c\u5bfc\u81f4\u670d\u52a1\u5b95\u673a",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/governance/breaker-algorithms.md",sourceDirName:"blog/governance",slug:"/blog/governance/breaker-algorithms",permalink:"/cn/docs/blog/governance/breaker-algorithms",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/governance/breaker-algorithms.md",version:"current",lastUpdatedAt:1656686642,formattedLastUpdatedAt:"7/1/2022",frontMatter:{title:"\u7194\u65ad\u539f\u7406\u4e0e\u5b9e\u73b0",authors:"kevwan"},sidebar:"blog",previous:{title:"bloom",permalink:"/cn/docs/blog/governance/bloom"},next:{title:"\u670d\u52a1\u81ea\u9002\u5e94\u964d\u8f7d\u4fdd\u62a4\u8bbe\u8ba1",permalink:"/cn/docs/blog/governance/loadshedding"}},p=[{value:"\u7194\u65ad\u5668\u539f\u7406",id:"\u7194\u65ad\u5668\u539f\u7406",children:[]},{value:"\u7194\u65ad\u5668\u5f15\u5165",id:"\u7194\u65ad\u5668\u5f15\u5165",children:[]},{value:"\u7194\u65ad\u5668\u5b9e\u73b0",id:"\u7194\u65ad\u5668\u5b9e\u73b0",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:p};function s(e){var r=e.components,l=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},u,l,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u4e2d\u670d\u52a1\u95f4\u4f9d\u8d56\u975e\u5e38\u5e38\u89c1\uff0c\u6bd4\u5982\u8bc4\u8bba\u670d\u52a1\u4f9d\u8d56\u5ba1\u6838\u670d\u52a1\u800c\u5ba1\u6838\u670d\u52a1\u53c8\u4f9d\u8d56\u53cd\u5783\u573e\u670d\u52a1\uff0c\u5f53\u8bc4\u8bba\u670d\u52a1\u8c03\u7528\u5ba1\u6838\u670d\u52a1\u65f6\uff0c\u5ba1\u6838\u670d\u52a1\u53c8\u8c03\u7528\u53cd\u5783\u573e\u670d\u52a1\uff0c\u800c\u8fd9\u65f6\u53cd\u5783\u573e\u670d\u52a1\u8d85\u65f6\u4e86\uff0c\u7531\u4e8e\u5ba1\u6838\u670d\u52a1\u4f9d\u8d56\u53cd\u5783\u573e\u670d\u52a1\uff0c\u53cd\u5783\u573e\u670d\u52a1\u8d85\u65f6\u5bfc\u81f4\u5ba1\u6838\u670d\u52a1\u903b\u8f91\u4e00\u76f4\u7b49\u5f85\uff0c\u800c\u8fd9\u4e2a\u65f6\u5019\u8bc4\u8bba\u670d\u52a1\u53c8\u5728\u4e00\u76f4\u8c03\u7528\u5ba1\u6838\u670d\u52a1\uff0c\u5ba1\u6838\u670d\u52a1\u5c31\u6709\u53ef\u80fd\u56e0\u4e3a\u5806\u79ef\u4e86\u5927\u91cf\u8bf7\u6c42\u800c\u5bfc\u81f4\u670d\u52a1\u5b95\u673a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"call_chain",src:n(4458).Z})),(0,o.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c\u5728\u6574\u4e2a\u8c03\u7528\u94fe\u4e2d\uff0c\u4e2d\u95f4\u7684\u67d0\u4e00\u4e2a\u73af\u8282\u51fa\u73b0\u5f02\u5e38\u5c31\u4f1a\u5f15\u8d77\u4e0a\u6e38\u8c03\u7528\u670d\u52a1\u51fa\u73b0\u4e00\u4e9b\u5217\u7684\u95ee\u9898\uff0c\u751a\u81f3\u5bfc\u81f4\u6574\u4e2a\u8c03\u7528\u94fe\u7684\u670d\u52a1\u90fd\u5b95\u673a\uff0c\u8fd9\u662f\u975e\u5e38\u53ef\u6015\u7684\u3002\u56e0\u6b64\u4e00\u4e2a\u670d\u52a1\u4f5c\u4e3a\u8c03\u7528\u65b9\u8c03\u7528\u53e6\u4e00\u4e2a\u670d\u52a1\u65f6\uff0c\u4e3a\u4e86\u9632\u6b62\u88ab\u8c03\u7528\u670d\u52a1\u51fa\u73b0\u95ee\u9898\u8fdb\u800c\u5bfc\u81f4\u8c03\u7528\u670d\u52a1\u51fa\u73b0\u95ee\u9898\uff0c\u6240\u4ee5\u8c03\u7528\u670d\u52a1\u9700\u8981\u8fdb\u884c\u81ea\u6211\u4fdd\u62a4\uff0c\u800c\u4fdd\u62a4\u7684\u5e38\u7528\u624b\u6bb5\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u7194\u65ad"))),(0,o.kt)("h3",{id:"\u7194\u65ad\u5668\u539f\u7406"},"\u7194\u65ad\u5668\u539f\u7406"),(0,o.kt)("p",null,"\u7194\u65ad\u673a\u5236\u5176\u5b9e\u662f\u53c2\u8003\u4e86\u6211\u4eec\u65e5\u5e38\u751f\u6d3b\u4e2d\u7684\u4fdd\u9669\u4e1d\u7684\u4fdd\u62a4\u673a\u5236\uff0c\u5f53\u7535\u8def\u8d85\u8d1f\u8377\u8fd0\u884c\u65f6\uff0c\u4fdd\u9669\u4e1d\u4f1a\u81ea\u52a8\u7684\u65ad\u5f00\uff0c\u4ece\u800c\u4fdd\u8bc1\u7535\u8def\u4e2d\u7684\u7535\u5668\u4e0d\u53d7\u635f\u5bb3\u3002\u800c\u670d\u52a1\u6cbb\u7406\u4e2d\u7684\u7194\u65ad\u673a\u5236\uff0c\u6307\u7684\u662f\u5728\u53d1\u8d77\u670d\u52a1\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5982\u679c\u88ab\u8c03\u7528\u65b9\u8fd4\u56de\u7684\u9519\u8bef\u7387\u8d85\u8fc7\u4e00\u5b9a\u7684\u9608\u503c\uff0c\u90a3\u4e48\u540e\u7eed\u7684\u8bf7\u6c42\u5c06\u4e0d\u4f1a\u771f\u6b63\u53d1\u8d77\u8bf7\u6c42\uff0c\u800c\u662f\u5728\u8c03\u7528\u65b9\u76f4\u63a5\u8fd4\u56de\u9519\u8bef"),(0,o.kt)("p",null,"\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u670d\u52a1\u8c03\u7528\u65b9\u4e3a\u6bcf\u4e00\u4e2a\u8c03\u7528\u670d\u52a1(\u8c03\u7528\u8def\u5f84)\u7ef4\u62a4\u4e00\u4e2a\u72b6\u6001\u673a\uff0c\u5728\u8fd9\u4e2a\u72b6\u6001\u673a\u4e2d\u6709\u4e09\u4e2a\u72b6\u6001\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5173\u95ed(Closed)\uff1a\u5728\u8fd9\u79cd\u72b6\u6001\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u8ba1\u6570\u5668\u6765\u8bb0\u5f55\u8c03\u7528\u5931\u8d25\u7684\u6b21\u6570\u548c\u603b\u7684\u8bf7\u6c42\u6b21\u6570\uff0c\u5982\u679c\u5728\u67d0\u4e2a\u65f6\u95f4\u7a97\u53e3\u5185\uff0c\u5931\u8d25\u7684\u5931\u8d25\u7387\u8fbe\u5230\u9884\u8bbe\u7684\u9608\u503c\uff0c\u5219\u5207\u6362\u5230\u65ad\u5f00\u72b6\u6001\uff0c\u6b64\u65f6\u5f00\u542f\u4e00\u4e2a\u8d85\u65f6\u65f6\u95f4\uff0c\u5f53\u5230\u8fbe\u8be5\u65f6\u95f4\u5219\u5207\u6362\u5230\u534a\u5173\u95ed\u72b6\u6001\uff0c\u8be5\u8d85\u65f6\u65f6\u95f4\u662f\u7ed9\u4e86\u7cfb\u7edf\u4e00\u6b21\u673a\u4f1a\u6765\u4fee\u6b63\u5bfc\u81f4\u8c03\u7528\u5931\u8d25\u7684\u9519\u8bef\uff0c\u4ee5\u56de\u5230\u6b63\u5e38\u7684\u5de5\u4f5c\u72b6\u6001\u3002\u5728\u5173\u95ed\u72b6\u6001\u4e0b\uff0c\u8c03\u7528\u9519\u8bef\u662f\u57fa\u4e8e\u65f6\u95f4\u7684\uff0c\u5728\u7279\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5185\u4f1a\u91cd\u7f6e\uff0c\u8fd9\u80fd\u591f\u9632\u6b62\u5076\u7136\u9519\u8bef\u5bfc\u81f4\u7194\u65ad\u5668\u8fdb\u53bb\u65ad\u5f00\u72b6\u6001"),(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00(Open)\uff1a\u5728\u8be5\u72b6\u6001\u4e0b\uff0c\u53d1\u8d77\u8bf7\u6c42\u65f6\u4f1a\u7acb\u5373\u8fd4\u56de\u9519\u8bef\uff0c\u4e00\u822c\u4f1a\u542f\u52a8\u4e00\u4e2a\u8d85\u65f6\u8ba1\u65f6\u5668\uff0c\u5f53\u8ba1\u65f6\u5668\u8d85\u65f6\u540e\uff0c\u72b6\u6001\u5207\u6362\u5230\u534a\u6253\u5f00\u72b6\u6001\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u5b9a\u671f\u7684\u63a2\u6d4b\u670d\u52a1\u662f\u5426\u6062\u590d"),(0,o.kt)("li",{parentName:"ul"},"\u534a\u6253\u5f00(Half-Open)\uff1a\u5728\u8be5\u72b6\u6001\u4e0b\uff0c\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u4e00\u5b9a\u6570\u91cf\u7684\u8bf7\u6c42\u53d1\u5f80\u88ab\u8c03\u7528\u670d\u52a1\uff0c\u5982\u679c\u8fd9\u4e9b\u8c03\u7528\u6b63\u5e38\uff0c\u90a3\u4e48\u53ef\u4ee5\u8ba4\u4e3a\u88ab\u8c03\u7528\u670d\u52a1\u5df2\u7ecf\u6062\u590d\u6b63\u5e38\uff0c\u6b64\u65f6\u7194\u65ad\u5668\u5207\u6362\u5230\u5173\u95ed\u72b6\u6001\uff0c\u540c\u65f6\u9700\u8981\u91cd\u7f6e\u8ba1\u6570\u3002\u5982\u679c\u8fd9\u90e8\u5206\u4ecd\u6709\u8c03\u7528\u5931\u8d25\u7684\u60c5\u51b5\uff0c\u5219\u8ba4\u4e3a\u88ab\u8c03\u7528\u65b9\u4ecd\u7136\u6ca1\u6709\u6062\u590d\uff0c\u7194\u65ad\u5668\u4f1a\u5207\u6362\u5230\u5173\u95ed\u72b6\u6001\uff0c\u7136\u540e\u91cd\u7f6e\u8ba1\u6570\u5668\uff0c\u534a\u6253\u5f00\u72b6\u6001\u80fd\u591f\u6709\u6548\u9632\u6b62\u6b63\u5728\u6062\u590d\u4e2d\u7684\u670d\u52a1\u88ab\u7a81\u7136\u5927\u91cf\u8bf7\u6c42\u518d\u6b21\u6253\u57ae")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"breaker_state",src:n(6910).Z})),(0,o.kt)("p",null,"\u670d\u52a1\u6cbb\u7406\u4e2d\u5f15\u5165\u7194\u65ad\u673a\u5236\uff0c\u4f7f\u5f97\u7cfb\u7edf\u66f4\u52a0\u7a33\u5b9a\u548c\u6709\u5f39\u6027\uff0c\u5728\u7cfb\u7edf\u4ece\u9519\u8bef\u4e2d\u6062\u590d\u7684\u65f6\u5019\u63d0\u4f9b\u7a33\u5b9a\u6027\uff0c\u5e76\u4e14\u51cf\u5c11\u4e86\u9519\u8bef\u5bf9\u7cfb\u7edf\u6027\u80fd\u7684\u5f71\u54cd\uff0c\u53ef\u4ee5\u5feb\u901f\u62d2\u7edd\u53ef\u80fd\u5bfc\u81f4\u9519\u8bef\u7684\u670d\u52a1\u8c03\u7528\uff0c\u800c\u4e0d\u9700\u8981\u7b49\u5f85\u771f\u6b63\u7684\u9519\u8bef\u8fd4\u56de"),(0,o.kt)("h3",{id:"\u7194\u65ad\u5668\u5f15\u5165"},"\u7194\u65ad\u5668\u5f15\u5165"),(0,o.kt)("p",null,"\u4e0a\u9762\u4ecb\u7ecd\u4e86\u7194\u65ad\u5668\u7684\u539f\u7406\uff0c\u5728\u4e86\u89e3\u5b8c\u539f\u7406\u540e\uff0c\u4f60\u662f\u5426\u6709\u601d\u8003\u6211\u4eec\u5982\u4f55\u5f15\u5165\u7194\u65ad\u5668\u5462\uff1f\u4e00\u79cd\u65b9\u6848\u662f\u5728\u4e1a\u52a1\u903b\u8f91\u4e2d\u53ef\u4ee5\u52a0\u5165\u7194\u65ad\u5668\uff0c\u4f46\u663e\u7136\u662f\u4e0d\u591f\u4f18\u96c5\u4e5f\u4e0d\u591f\u901a\u7528\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u628a\u7194\u65ad\u5668\u96c6\u6210\u5728\u6846\u67b6\u5185\uff0c\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/tree/master/zrpc"},"zRPC"),"\u6846\u67b6\u5185\u5c31\u5185\u7f6e\u4e86\u7194\u65ad\u5668"),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0c\u7194\u65ad\u5668\u4e3b\u8981\u662f\u7528\u6765\u4fdd\u62a4\u8c03\u7528\u7aef\uff0c\u8c03\u7528\u7aef\u5728\u53d1\u8d77\u8bf7\u6c42\u7684\u65f6\u5019\u9700\u8981\u5148\u7ecf\u8fc7\u7194\u65ad\u5668\uff0c\u800c\u5ba2\u6237\u7aef\u62e6\u622a\u5668\u6b63\u597d\u517c\u5177\u4e86\u8fd9\u4e2a\u8fd9\u4e2a\u529f\u80fd\uff0c\u6240\u4ee5\u5728zRPC\u6846\u67b6\u5185\u7194\u65ad\u5668\u662f\u5b9e\u73b0\u5728\u5ba2\u6237\u7aef\u62e6\u622a\u5668\u5185\uff0c\u62e6\u622a\u5668\u7684\u539f\u7406\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"interceptor",src:n(1803).Z})),(0,o.kt)("p",null,"\u5bf9\u5e94\u7684\u4ee3\u7801\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func BreakerInterceptor(ctx context.Context, method string, req, reply interface{},\n    cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {\n  // \u57fa\u4e8e\u8bf7\u6c42\u65b9\u6cd5\u8fdb\u884c\u7194\u65ad\n    breakerName := path.Join(cc.Target(), method)\n    return breaker.DoWithAcceptable(breakerName, func() error {\n    // \u771f\u6b63\u53d1\u8d77\u8c03\u7528\n        return invoker(ctx, method, req, reply, cc, opts...)\n    // codes.Acceptable\u5224\u65ad\u54ea\u79cd\u9519\u8bef\u9700\u8981\u52a0\u5165\u7194\u65ad\u9519\u8bef\u8ba1\u6570\n    }, codes.Acceptable)\n}\n")),(0,o.kt)("h3",{id:"\u7194\u65ad\u5668\u5b9e\u73b0"},"\u7194\u65ad\u5668\u5b9e\u73b0"),(0,o.kt)("p",null,"zRPC\u4e2d\u7194\u65ad\u5668\u7684\u5b9e\u73b0\u53c2\u8003\u4e86",(0,o.kt)("a",{parentName:"p",href:"https://landing.google.com/sre/sre-book/chapters/handling-overload/#eq2101"},"Google Sre\u8fc7\u8f7d\u4fdd\u62a4\u7b97\u6cd5"),"\uff0c\u8be5\u7b97\u6cd5\u7684\u539f\u7406\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u6570\u91cf(requests)\uff1a\u8c03\u7528\u65b9\u53d1\u8d77\u8bf7\u6c42\u7684\u6570\u91cf\u603b\u548c"),(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u63a5\u53d7\u6570\u91cf(accepts)\uff1a\u88ab\u8c03\u7528\u65b9\u6b63\u5e38\u5904\u7406\u7684\u8bf7\u6c42\u6570\u91cf")),(0,o.kt)("p",null,"\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e24\u4e2a\u503c\u662f\u76f8\u7b49\u7684\uff0c\u968f\u7740\u88ab\u8c03\u7528\u65b9\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\u5f00\u59cb\u62d2\u7edd\u8bf7\u6c42\uff0c\u8bf7\u6c42\u63a5\u53d7\u6570\u91cf(accepts)\u7684\u503c\u5f00\u59cb\u9010\u6e10\u5c0f\u4e8e\u8bf7\u6c42\u6570\u91cf(requests)\uff0c\u8fd9\u4e2a\u65f6\u5019\u8c03\u7528\u65b9\u53ef\u4ee5\u7ee7\u7eed\u53d1\u9001\u8bf7\u6c42\uff0c\u76f4\u5230requests = K * accepts\uff0c\u4e00\u65e6\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\uff0c\u7194\u65ad\u5668\u5c31\u56de\u6253\u5f00\uff0c\u65b0\u7684\u8bf7\u6c42\u4f1a\u5728\u672c\u5730\u4ee5\u4e00\u5b9a\u7684\u6982\u7387\u88ab\u629b\u5f03\u76f4\u63a5\u8fd4\u56de\u9519\u8bef\uff0c\u6982\u7387\u7684\u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"client_rejection2",src:n(8762).Z})),(0,o.kt)("p",null,"\u901a\u8fc7\u4fee\u6539\u7b97\u6cd5\u4e2d\u7684K(\u500d\u503c)\uff0c\u53ef\u4ee5\u8c03\u8282\u7194\u65ad\u5668\u7684\u654f\u611f\u5ea6\uff0c\u5f53\u964d\u4f4e\u8be5\u500d\u503c\u4f1a\u4f7f\u81ea\u9002\u5e94\u7194\u65ad\u7b97\u6cd5\u66f4\u654f\u611f\uff0c\u5f53\u589e\u52a0\u8be5\u500d\u503c\u4f1a\u4f7f\u5f97\u81ea\u9002\u5e94\u7194\u65ad\u7b97\u6cd5\u964d\u4f4e\u654f\u611f\u5ea6\uff0c\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5047\u8bbe\u5c06\u8c03\u7528\u65b9\u7684\u8bf7\u6c42\u4e0a\u9650\u4ece requests = 2 ",(0,o.kt)("em",{parentName:"p"}," acceptst \u8c03\u6574\u4e3a requests = 1.1 ")," accepts \u90a3\u4e48\u5c31\u610f\u5473\u7740\u8c03\u7528\u65b9\u6bcf\u5341\u4e2a\u8bf7\u6c42\u4e4b\u4e2d\u5c31\u6709\u4e00\u4e2a\u8bf7\u6c42\u4f1a\u89e6\u53d1\u7194\u65ad"),(0,o.kt)("p",null,"\u4ee3\u7801\u8def\u5f84\u4e3ago-zero/core/breaker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type googleBreaker struct {\n    k     float64  // \u500d\u503c \u9ed8\u8ba41.5\n    stat  *collection.RollingWindow // \u6ed1\u52a8\u65f6\u95f4\u7a97\u53e3\uff0c\u7528\u6765\u5bf9\u8bf7\u6c42\u5931\u8d25\u548c\u6210\u529f\u8ba1\u6570\n    proba *mathx.Proba // \u52a8\u6001\u6982\u7387\n}\n")),(0,o.kt)("p",null,"\u81ea\u9002\u5e94\u7194\u65ad\u7b97\u6cd5\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (b *googleBreaker) accept() error {\n    accepts, total := b.history()  // \u8bf7\u6c42\u63a5\u53d7\u6570\u91cf\u548c\u8bf7\u6c42\u603b\u91cf\n    weightedAccepts := b.k * float64(accepts)\n  // \u8ba1\u7b97\u4e22\u5f03\u8bf7\u6c42\u6982\u7387\n    dropRatio := math.Max(0, (float64(total-protection)-weightedAccepts)/float64(total+1))\n    if dropRatio <= 0 {\n        return nil\n    }\n    // \u52a8\u6001\u5224\u65ad\u662f\u5426\u89e6\u53d1\u7194\u65ad\n    if b.proba.TrueOnProba(dropRatio) {\n        return ErrServiceUnavailable\n    }\n\n    return nil\n}\n")),(0,o.kt)("p",null,"\u6bcf\u6b21\u53d1\u8d77\u8bf7\u6c42\u4f1a\u8c03\u7528doReq\u65b9\u6cd5\uff0c\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u9996\u5148\u901a\u8fc7accept\u6548\u9a8c\u662f\u5426\u89e6\u53d1\u7194\u65ad\uff0cacceptable\u7528\u6765\u5224\u65ad\u54ea\u4e9berror\u4f1a\u8ba1\u5165\u5931\u8d25\u8ba1\u6570\uff0c\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func Acceptable(err error) bool {\n    switch status.Code(err) {\n    case codes.DeadlineExceeded, codes.Internal, codes.Unavailable, codes.DataLoss: // \u5f02\u5e38\u8bf7\u6c42\u9519\u8bef\n        return false\n    default:\n        return true\n    }\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u8bf7\u6c42\u6b63\u5e38\u5219\u901a\u8fc7markSuccess\u628a\u8bf7\u6c42\u6570\u91cf\u548c\u8bf7\u6c42\u63a5\u53d7\u6570\u91cf\u90fd\u52a0\u4e00\uff0c\u5982\u679c\u8bf7\u6c42\u4e0d\u6b63\u5e38\u5219\u53ea\u6709\u8bf7\u6c42\u6570\u91cf\u4f1a\u52a0\u4e00"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (b *googleBreaker) doReq(req func() error, fallback func(err error) error, acceptable Acceptable) error {\n    // \u5224\u65ad\u662f\u5426\u89e6\u53d1\u7194\u65ad\n  if err := b.accept(); err != nil {\n        if fallback != nil {\n            return fallback(err)\n        } else {\n            return err\n        }\n    }\n\n    defer func() {\n        if e := recover(); e != nil {\n            b.markFailure()\n            panic(e)\n        }\n    }()\n    \n  // \u6267\u884c\u771f\u6b63\u7684\u8c03\u7528\n    err := req()\n  // \u6b63\u5e38\u8bf7\u6c42\u8ba1\u6570\n    if acceptable(err) {\n        b.markSuccess()\n    } else {\n    // \u5f02\u5e38\u8bf7\u6c42\u8ba1\u6570\n        b.markFailure()\n    }\n\n    return err\n}\n")),(0,o.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u8c03\u7528\u7aef\u53ef\u4ee5\u901a\u8fc7\u7194\u65ad\u673a\u5236\u8fdb\u884c\u81ea\u6211\u4fdd\u62a4\uff0c\u9632\u6b62\u8c03\u7528\u4e0b\u6e38\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\uff0c\u6216\u8005\u8017\u65f6\u8fc7\u957f\u5f71\u54cd\u8c03\u7528\u7aef\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u5f88\u591a\u529f\u80fd\u5b8c\u6574\u7684\u5fae\u670d\u52a1\u6846\u67b6\u90fd\u4f1a\u5185\u7f6e\u7194\u65ad\u5668\u3002\u5176\u5b9e\uff0c\u4e0d\u4ec5\u5fae\u670d\u52a1\u8c03\u7528\u4e4b\u95f4\u9700\u8981\u7194\u65ad\u5668\uff0c\u5728\u8c03\u7528\u4f9d\u8d56\u8d44\u6e90\u7684\u65f6\u5019\uff0c\u6bd4\u5982mysql\u3001redis\u7b49\u4e5f\u53ef\u4ee5\u5f15\u5165\u7194\u65ad\u5668\u7684\u673a\u5236\u3002"))}s.isMDXComponent=!0},6910:function(e,r,n){r.Z=n.p+"assets/images/breaker_state-f9def807ae18a101ee5b3ec7aab64872.png"},4458:function(e,r,n){r.Z=n.p+"assets/images/call_chain-7a675c3ca6a9a050801de0a7a9b95a20.png"},8762:function(e,r,n){r.Z=n.p+"assets/images/client_rejection2-efc7da03566a89bba55dc6cf37a8bcd3.png"},1803:function(e,r,n){r.Z=n.p+"assets/images/interceptor-9969ceb6164aca7377bcb1b668a066b7.png"}}]);