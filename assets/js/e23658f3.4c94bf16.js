"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1502],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6272:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={},c={unversionedId:"advance/jwt",id:"advance/jwt",isDocsHomePage:!1,title:"JSON Web Token (JWT)",description:"Summary",source:"@site/docs/advance/jwt.md",sourceDirName:"advance",slug:"/advance/jwt",permalink:"/docs/advance/jwt",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/jwt.md",version:"current",lastUpdatedAt:1656686642,formattedLastUpdatedAt:"7/1/2022",frontMatter:{},sidebar:"docs",previous:{title:"Business Coding",permalink:"/docs/advance/business-coding"},next:{title:"Middleware",permalink:"/docs/advance/middleware"}},l=[{value:"Summary",id:"summary",children:[]},{value:"When should you use JSON Web Tokens?",id:"when-should-you-use-json-web-tokens",children:[]},{value:"Why should we use JSON Web Tokens?",id:"why-should-we-use-json-web-tokens",children:[]},{value:"How to use jwt in go-zero",id:"how-to-use-jwt-in-go-zero",children:[{value:"user api generates jwt token",id:"user-api-generates-jwt-token",children:[]},{value:"search.api uses jwt token authentication",id:"searchapi-uses-jwt-token-authentication",children:[]},{value:"Verify jwt token",id:"verify-jwt-token",children:[]},{value:"Get the information carried in the jwt token",id:"get-the-information-carried-in-the-jwt-token",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and independent method for securely transmitting information as JSON objects between parties. Since this information is digitally signed, it can be verified and trusted. The JWT can be signed using a secret (using the HMAC algorithm) or using a public/private key pair of RSA or ECDSA.")),(0,r.kt)("h2",{id:"when-should-you-use-json-web-tokens"},"When should you use JSON Web Tokens?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Information exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed\u2014for example, using public/private key pairs\u2014you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with."))),(0,r.kt)("h2",{id:"why-should-we-use-json-web-tokens"},"Why should we use JSON Web Tokens?"),(0,r.kt)("p",null,"As JSON is less verbose than XML, when it is encoded its size is also smaller, making JWT more compact than SAML. This makes JWT a good choice to be passed in HTML and HTTP environments."),(0,r.kt)("p",null,"Security-wise, SWT can only be symmetrically signed by a shared secret using the HMAC algorithm. However, JWT and SAML tokens can use a public/private key pair in the form of a X.509 certificate for signing. Signing XML with XML Digital Signature without introducing obscure security holes is very difficult when compared to the simplicity of signing JSON."),(0,r.kt)("p",null,"JSON parsers are common in most programming languages because they map directly to objects. Conversely, XML doesn't have a natural document-to-object mapping. This makes it easier to work with JWT than SAML assertions."),(0,r.kt)("p",null,"Regarding usage, JWT is used at Internet scale. This highlights the ease of client-side processing of the JSON Web token on multiple platforms, especially mobile."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All the above content quote from ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"jwt.io")))),(0,r.kt)("h2",{id:"how-to-use-jwt-in-go-zero"},"How to use jwt in go-zero"),(0,r.kt)("p",null,"Jwt authentication is generally used at the api layer. In this demonstration project, we generate jwt token when user api logs in, and verify the user jwt token when searching api for books."),(0,r.kt)("h3",{id:"user-api-generates-jwt-token"},"user api generates jwt token"),(0,r.kt)("p",null,"Following the content of the ",(0,r.kt)("a",{parentName:"p",href:"business-coding"},"Business Coding")," chapter, we perfect the ",(0,r.kt)("inlineCode",{parentName:"p"},"getJwtToken")," method left over from the previous section, that is, generate the jwt token logic"),(0,r.kt)("h4",{id:"add-configuration-definition-and-yaml-configuration-items"},"Add configuration definition and yaml configuration items"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/internal/config/config.go\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    rest.RestConf\n    Mysql struct{\n        DataSource string\n    }\n    CacheRedis cache.CacheConf\n    Auth      struct {\n        AccessSecret string\n        AccessExpire int64\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/etc/user-api.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: user-api\nHost: 0.0.0.0\nPort: 8888\nMysql:\n  DataSource: $user:$password@tcp($url)/$db?charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai\nCacheRedis:\n  - Host: $host\n    Pass: $pass\n    Type: node\nAuth:\n  AccessSecret: $AccessSecret\n  AccessExpire: $AccessExpire\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"$AccessSecret: The easiest way to generate the key of the jwt token is to use an uuid value."),(0,r.kt)("p",{parentName:"div"},"$AccessExpire: Jwt token validity period, unit: second"),(0,r.kt)("p",{parentName:"div"},"For more configuration information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../configuration/api"},"API Configuration")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/internal/logic/loginlogic.go\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (l *LoginLogic) getJwtToken(secretKey string, iat, seconds, userId int64) (string, error) {\n  claims := make(jwt.MapClaims)\n  claims["exp"] = iat + seconds\n  claims["iat"] = iat\n  claims["userId"] = userId\n  token := jwt.New(jwt.SigningMethodHS256)\n  token.Claims = claims\n  return token.SignedString([]byte(secretKey))\n}\n')),(0,r.kt)("h3",{id:"searchapi-uses-jwt-token-authentication"},"search.api uses jwt token authentication"),(0,r.kt)("h4",{id:"write-searchapi-file"},"Write search.api file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/search.api\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'type (\n    SearchReq {\n        Name string `form:"name"`\n    }\n\n    SearchReply {\n        Name string `json:"name"`\n        Count int `json:"count"`\n    }\n)\n\n@server(\n    jwt: Auth\n)\nservice search-api {\n    @handler search\n    get /search/do (SearchReq) returns (SearchReply)\n}\n\nservice search-api {\n    @handler ping\n    get /search/ping\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"jwt: Auth"),": Enable jwt authentication"),(0,r.kt)("p",{parentName:"div"},"If the routing requires JWT authentication, you need to declare this syntax flag above the service, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"/search/do")," above"),(0,r.kt)("p",{parentName:"div"},"Routes that do not require jwt authentication do not need to be declared, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"/search/ping")," above"),(0,r.kt)("p",{parentName:"div"},"For more grammar, please read ",(0,r.kt)("a",{parentName:"p",href:"../design/grammar"},"API IDL")))),(0,r.kt)("h4",{id:"generate-code"},"Generate code"),(0,r.kt)("p",null,"As described above, there are three ways to generate code, so I won\u2019t go into details here."),(0,r.kt)("h4",{id:"add-yaml-configuration-items"},"Add yaml configuration items"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/etc/search-api.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: search-api\nHost: 0.0.0.0\nPort: 8889\nAuth:\n  AccessSecret: $AccessSecret\n  AccessExpire: $AccessExpire\n\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"$AccessSecret: This value must be consistent with the one declared in the user api."),(0,r.kt)("p",{parentName:"div"},"$AccessExpire: Valid period"),(0,r.kt)("p",{parentName:"div"},"Modify the port here to avoid conflicts with user api port 8888"))),(0,r.kt)("h3",{id:"verify-jwt-token"},"Verify jwt token"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start user api service, and login"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/user/api\n$ go run user.go -f etc/user-api.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting server at 0.0.0.0:8888...\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -X POST \\\n  http://127.0.0.1:8888/user/login \\\n  -H \'content-type: application/json\' \\\n  -d \'{\n    "username":"666",\n    "password":"123456"\n}\'\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Mon, 08 Feb 2021 10:37:54 GMT\nContent-Length: 251\n\n{"id":1,"name":"xiaoming","gender":"male","accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTI4NjcwNzQsImlhdCI6MTYxMjc4MDY3NCwidXNlcklkIjoxfQ.JKa83g9BlEW84IiCXFGwP2aSd0xF3tMnxrOzVebbt80","accessExpire":1612867074,"refreshAfter":1612823874}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the search api service, call ",(0,r.kt)("inlineCode",{parentName:"p"},"/search/do")," to verify whether the jwt authentication is passed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ go run search.go -f etc/search-api.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting server at 0.0.0.0:8889...\n")),(0,r.kt)("p",{parentName:"li"},"Let\u2019s not pass the jwt token and see the result:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET \\\n  'http://127.0.0.1:8889/search/do?name=%E8%A5%BF%E6%B8%B8%E8%AE%B0'\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 401 Unauthorized\nDate: Mon, 08 Feb 2021 10:41:57 GMT\nContent-Length: 0\n")),(0,r.kt)("p",{parentName:"li"},"Obviously, the jwt authentication failed, and the statusCode of 401 is returned. Next, let's take a jwt token (that is, the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessToken")," returned by the user login)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET \\\n  'http://127.0.0.1:8889/search/do?name=%E8%A5%BF%E6%B8%B8%E8%AE%B0' \\\n  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTI4NjcwNzQsImlhdCI6MTYxMjc4MDY3NCwidXNlcklkIjoxfQ.JKa83g9BlEW84IiCXFGwP2aSd0xF3tMnxrOzVebbt80'\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Mon, 08 Feb 2021 10:44:45 GMT\nContent-Length: 21\n\n{"name":"","count":0}\n')),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Service startup error, please check ",(0,r.kt)("a",{parentName:"p",href:"../faq/error"},"Error")))))),(0,r.kt)("p",null,"At this point, the demonstration of jwt from generation to use is complete. The authentication of jwt token is already encapsulated in go-zero. You only need to simply declare it when defining the service in the api file."),(0,r.kt)("h3",{id:"get-the-information-carried-in-the-jwt-token"},"Get the information carried in the jwt token"),(0,r.kt)("p",null,"After go-zero is parsed from the jwt token, the kv passed in when the user generates the token will be placed in the Context of http.Request intact, so we can get the value you want through the Context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim /service/search/api/internal/logic/searchlogic.go\n")),(0,r.kt)("p",null,"Add a log to output the userId parsed from jwt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (l *SearchLogic) Search(req types.SearchReq) (*types.SearchReply, error) {\n    logx.Infof("userId: %v",l.ctx.Value("userId"))// \u8fd9\u91cc\u7684key\u548c\u751f\u6210jwt token\u65f6\u4f20\u5165\u7684key\u4e00\u81f4\n    return &types.SearchReply{}, nil\n}\n')),(0,r.kt)("p",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"@timestamp":"2021-02-09T10:29:09.399+08","level":"info","content":"userId: 1"}\n')))}d.isMDXComponent=!0}}]);