"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2818],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9731:function(t,e,n){n.r(e),n.d(e,{default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c={unversionedId:"goctl/installation",id:"goctl/installation",isDocsHomePage:!1,title:"Goctl \u5b89\u88c5",description:"\u524d\u8a00",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/goctl/installation.md",sourceDirName:"goctl",slug:"/goctl/installation",permalink:"/cn/docs/goctl/installation",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/goctl/installation.md",version:"current",lastUpdatedAt:1660900199,formattedLastUpdatedAt:"8/19/2022",frontMatter:{},sidebar:"goctl",previous:{title:"Goctl \u7b80\u4ecb",permalink:"/cn/docs/goctl/goctl"},next:{title:"API \u6307\u4ee4",permalink:"/cn/docs/goctl/api"}},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u5b89\u88c5(mac&amp;linux)",id:"\u5b89\u88c5maclinux",children:[]}],s={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"Goctl\u5728go-zero\u9879\u76ee\u5f00\u53d1\u7740\u6709\u7740\u5f88\u5927\u7684\u4f5c\u7528\uff0c\u5176\u53ef\u4ee5\u6709\u6548\u7684\u5e2e\u52a9\u5f00\u53d1\u8005\u5927\u5927\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u51cf\u5c11\u4ee3\u7801\u7684\u51fa\u9519\u7387\uff0c\u7f29\u77ed\u4e1a\u52a1\u5f00\u53d1\u7684\u5de5\u4f5c\u91cf\uff0c\u66f4\u591a\u7684Goctl\u7684\u4ecb\u7ecd\u8bf7\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"goctl"},"Goctl\u4ecb\u7ecd"),",\n\u5728\u8fd9\u91cc\u6211\u4eec\u5f3a\u70c8\u63a8\u8350\u5927\u5bb6\u5b89\u88c5\uff0c\u56e0\u4e3a\u540e\u7eed\u6f14\u793a\u4f8b\u5b50\u4e2d\u6211\u4eec\u5927\u90e8\u5206\u90fd\u4f1a\u4ee5goctl\u8fdb\u884c\u6f14\u793a\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5maclinux"},"\u5b89\u88c5(mac&linux)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5b89\u88c5"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="\u4e0b\u8f7d\u5b89\u88c5"',title:'"\u4e0b\u8f7d\u5b89\u88c5"'},"# Go 1.15 \u53ca\u4e4b\u524d\u7248\u672c\nGO111MODULE=on GOPROXY=https://goproxy.cn/,direct go get -u github.com/zeromicro/go-zero/tools/goctl@latest\n\n# Go 1.16 \u53ca\u4ee5\u540e\u7248\u672c\nGOPROXY=https://goproxy.cn/,direct go install github.com/zeromicro/go-zero/tools/goctl@latest\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u73af\u5883\u53d8\u91cf\u68c0\u6d4b"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"go get")," \u4e0b\u8f7d\u7f16\u8bd1\u540e\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," \u76ee\u5f55\u4e0b\uff0c\u8981\u786e\u4fdd",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),"\u5df2\u7ecf\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="\u6dfb\u52a0\u73af\u5883\u53d8\u91cf"',title:'"\u6dfb\u52a0\u73af\u5883\u53d8\u91cf"'},"$ sudo vim /etc/paths\n")),(0,o.kt)("p",{parentName:"li"},"\u5728\u6700\u540e\u4e00\u884c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$GOPATH/bin\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH")," \u4e3a\u4f60\u672c\u673a\u4e0a\u7684\u6587\u4ef6\u5730\u5740"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u7ed3\u679c\u9a8c\u8bc1",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="\u6253\u5370 goctl \u7248\u672c"',title:'"\u6253\u5370',goctl:!0,'\u7248\u672c"':!0},"$ goctl -v\ngoctl version 1.1.4 darwin/amd64\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"windows\u7528\u6237\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u8bf7\u81ea\u884cgoogle"))))}m.isMDXComponent=!0}}]);