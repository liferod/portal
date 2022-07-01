"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7724],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(r),m=o,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9288:function(e,t,r){r.r(t),r.d(t,{default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},l={unversionedId:"quick-start/monolithic-service",id:"quick-start/monolithic-service",isDocsHomePage:!1,title:"Monolithic Service",description:"Forward",source:"@site/docs/quick-start/monolithic-service.md",sourceDirName:"quick-start",slug:"/quick-start/monolithic-service",permalink:"/docs/quick-start/monolithic-service",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/quick-start/monolithic-service.md",version:"current",lastUpdatedAt:1656686642,formattedLastUpdatedAt:"7/1/2022",frontMatter:{},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/quick-start/quick-start"},next:{title:"Microservices",permalink:"/docs/quick-start/micro-service"}},s=[{value:"Forward",id:"forward",children:[]},{value:"Create greet service",id:"create-greet-service",children:[]},{value:"Write logic",id:"write-logic",children:[]},{value:"Start and access the service",id:"start-and-access-the-service",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"forward"},"Forward"),(0,a.kt)("p",null,"Since go-zero integrates web/rpc, some friends in the community will ask me whether go-zero is positioned as a microservice framework.\nThe answer is no. Although go-zero integrates many functions, you can use any one of them independently, or you can develop a single service."),(0,a.kt)("p",null,"It is not that every service must adopt the design of the microservice architecture."),(0,a.kt)("h2",{id:"create-greet-service"},"Create greet service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir go-zero-demo\n$ cd go-zero-demo\n$ go mod init go-zero-demo\n$ goctl api new greet\n$ go mod tidy\nDone.\n")),(0,a.kt)("p",null,"Take a look at the structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"greet")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd greet\n$ tree\n.\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet-api.yaml\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 greet.api\n\u251c\u2500\u2500 greet.go\n\u2514\u2500\u2500 internal\n    \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n    \u251c\u2500\u2500 handler\n    \u2502\xa0\xa0 \u251c\u2500\u2500 greethandler.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 routes.go\n    \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2514\u2500\u2500 greetlogic.go\n    \u251c\u2500\u2500 svc\n    \u2502\xa0\xa0 \u2514\u2500\u2500 servicecontext.go\n    \u2514\u2500\u2500 types\n        \u2514\u2500\u2500 types.go\n")),(0,a.kt)("p",null,"It can be observed from the above directory structure that although the ",(0,a.kt)("inlineCode",{parentName:"p"},"greet"),' service is small, it has "all internal organs". Next, we can write business code in ',(0,a.kt)("inlineCode",{parentName:"p"},"greetlogic.go"),"."),(0,a.kt)("h2",{id:"write-logic"},"Write logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim greet/internal/logic/greetlogic.go\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (l *GreetLogic) Greet(req types.Request) (*types.Response, error) {\n    return &types.Response{\n        Message: "Hello go-zero",\n    }, nil\n}\n')),(0,a.kt)("h2",{id:"start-and-access-the-service"},"Start and access the service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Start service"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd greet\n$ go run greet.go -f etc/greet-api.yaml\nStarting server at 0.0.0.0:8888...\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Access service"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -X GET http://localhost:8888/from/you\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 07 Feb 2021 04:31:25 GMT\nContent-Length: 27\n\n{"message":"Hello go-zero"}\n')))),(0,a.kt)("h1",{id:"source-code"},"Source code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero-demo/tree/master/greet"},"greet source code")))}p.isMDXComponent=!0}}]);