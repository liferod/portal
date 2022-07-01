"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[4689],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7616:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s={unversionedId:"blog/showcase/shorturl",id:"blog/showcase/shorturl",isDocsHomePage:!1,title:"Rapid development of microservices",description:"0. Why building microservices are so difficult",source:"@site/docs/blog/showcase/shorturl.md",sourceDirName:"blog/showcase",slug:"/blog/showcase/shorturl",permalink:"/docs/blog/showcase/shorturl",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/showcase/shorturl.md",version:"current",lastUpdatedAt:1656686642,formattedLastUpdatedAt:"7/1/2022",frontMatter:{},sidebar:"blog",previous:{title:"TimingWheel",permalink:"/docs/blog/principle/timing-wheel"},next:{title:"Enterprise RPC framework zRPC",permalink:"/docs/blog/showcase/zrpc"}},p=[{value:"0. Why building microservices are so difficult",id:"0-why-building-microservices-are-so-difficult",children:[]},{value:"1. What is a shorturl service",id:"1-what-is-a-shorturl-service",children:[]},{value:"2. Architecture of shorturl microservice",id:"2-architecture-of-shorturl-microservice",children:[]},{value:"3. goctl generated code overview",id:"3-goctl-generated-code-overview",children:[]},{value:"4. Get started",id:"4-get-started",children:[]},{value:"5. Write code for API Gateway",id:"5-write-code-for-api-gateway",children:[]},{value:"6. Write code for transform rpc service",id:"6-write-code-for-transform-rpc-service",children:[]},{value:"7. Modify API Gateway to call transform rpc service",id:"7-modify-api-gateway-to-call-transform-rpc-service",children:[]},{value:"8. Define the database schema, generate the code for CRUD+cache",id:"8-define-the-database-schema-generate-the-code-for-crudcache",children:[]},{value:"9. Modify shorten/expand rpc to call crud+cache",id:"9-modify-shortenexpand-rpc-to-call-crudcache",children:[]},{value:"10. Call shorten and expand services",id:"10-call-shorten-and-expand-services",children:[]},{value:"11. Benchmark",id:"11-benchmark",children:[]},{value:"12. Full code",id:"12-full-code",children:[]},{value:"13. Conclusion",id:"13-conclusion",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"0-why-building-microservices-are-so-difficult"},"0. Why building microservices are so difficult"),(0,o.kt)("p",null,"To build a well working microservice, we need lots of knowledges from different aspects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"basic functionalities"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"concurrency control and rate limit, to avoid being brought down by unexpected inbound"),(0,o.kt)("li",{parentName:"ol"},"service discovery, make sure new or terminated nodes are detected asap"),(0,o.kt)("li",{parentName:"ol"},"load balancing, balance the traffic base on the throughput of nodes"),(0,o.kt)("li",{parentName:"ol"},"timeout control, avoid the nodes continue to process the timed out requests"),(0,o.kt)("li",{parentName:"ol"},"circuit breaker, load shedding, fail fast, protects the failure nodes to recover asap"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"advanced functionalities"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"authorization, make sure users can only access their own data"),(0,o.kt)("li",{parentName:"ol"},"tracing, to understand the whole system and locate the specific problem quickly"),(0,o.kt)("li",{parentName:"ol"},"logging, collects data and helps to backtrace problems"),(0,o.kt)("li",{parentName:"ol"},"observability, no metrics, no optimization")))),(0,o.kt)("p",null,"For any point listed above, we need a long article to describe the theory and the implementation. But for us, the developers, it\u2019s very difficult to understand all the concepts and make it happen in our systems. Although, we can use the frameworks that have been well served busy sites. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},"go-zero")," is born for this purpose, especially for cloud-native microservice systems."),(0,o.kt)("p",null,"As well, we always adhere to the idea that ",(0,o.kt)("strong",{parentName:"p"},"prefer tools over conventions and documents"),". We hope to reduce the boilerplate code as much as possible, and let developers focus on developing the business related code. For this purpose, we developed the tool  ",(0,o.kt)("inlineCode",{parentName:"p"},"goctl"),"."),(0,o.kt)("p",null,"Let\u2019s take the shorturl microservice as a quick example to demonstrate how to quickly create microservices by using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},"go-zero"),". After finishing this tutorial, you\u2019ll find that it\u2019s so easy to write microservices!"),(0,o.kt)("h2",{id:"1-what-is-a-shorturl-service"},"1. What is a shorturl service"),(0,o.kt)("p",null,"A shorturl service is that it converts a long url into a short one, by well designed algorithms."),(0,o.kt)("p",null,"Writting this shorturl service is to demonstrate the complete flow of creating a microservice by using go-zero. But algorithms and detail implementations are quite simplified, and this shorturl service is not suitable for production use."),(0,o.kt)("h2",{id:"2-architecture-of-shorturl-microservice"},"2. Architecture of shorturl microservice"),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/shorturl-arch.png",alt:"\u67b6\u6784\u56fe",width:"800"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In this tutorial, I only use one rpc service, transform, to demonstrate. It\u2019s not telling that one API Gateway only can call one RPC service, it\u2019s only for simplicity here."),(0,o.kt)("li",{parentName:"ul"},"In production, we should try best to isolate the data belongs to services, that means each service should only use its own database.")),(0,o.kt)("h2",{id:"3-goctl-generated-code-overview"},"3. goctl generated code overview"),(0,o.kt)("p",null,"All modules with green background are generated, and will be enabled when necessary. The modules with red background are handwritten code, which is typically business logic code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"API Gateway"),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/shorturl-api.png",alt:"api",width:"800"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"RPC"),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/shorturl-rpc.png",alt:"\u67b6\u6784\u56fe",width:"800"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"model"),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/shorturl-model.png",alt:"model",width:"800"}))),(0,o.kt)("p",null,"And now, let\u2019s walk through the complete flow of quickly create a microservice with go-zero."),(0,o.kt)("h2",{id:"4-get-started"},"4. Get started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"install etcd, mysql, redis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"install protoc-gen-go"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"go get -u github.com/golang/protobuf/protoc-gen-go@v1.3.2\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"install goctl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"GO111MODULE=on go get -u github.com/zeromicro/go-zero/tools/goctl\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"create the working dir ",(0,o.kt)("inlineCode",{parentName:"p"},"shorturl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"shorturl/api")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mkdir -p shorturl/api\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"in ",(0,o.kt)("inlineCode",{parentName:"p"},"shorturl")," dir, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"go mod init shorturl")," to initialize ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"module shorturl\n\ngo 1.15\n\nrequire (\n  github.com/golang/mock v1.4.3\n  github.com/golang/protobuf v1.4.2\n  github.com/zeromicro/go-zero v1.3.0\n  golang.org/x/net v0.0.0-20200707034311-ab3426394381\n  google.golang.org/grpc v1.29.1\n)\n")))),(0,o.kt)("h2",{id:"5-write-code-for-api-gateway"},"5. Write code for API Gateway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"use goctl to generate ",(0,o.kt)("inlineCode",{parentName:"p"},"api/shorturl.api")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"goctl api -o shorturl.api\n")),(0,o.kt)("p",{parentName:"li"},"for simplicity, the leading ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," block is removed, and the code looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type (\n    expandReq {\n        shorten string `form:"shorten"`\n    }\n\n    expandResp {\n        url string `json:"url"`\n    }\n)\n\ntype (\n    shortenReq {\n        url string `form:"url"`\n    }\n\n    shortenResp {\n        shorten string `json:"shorten"`\n    }\n)\n\nservice shorturl-api {\n    @server(\n        handler: ShortenHandler\n    )\n    get /shorten(shortenReq) returns(shortenResp)\n\n    @server(\n        handler: ExpandHandler\n    )\n    get /expand(expandReq) returns(expandResp)\n}\n')),(0,o.kt)("p",{parentName:"li"},"the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," keyword is the same as that in go, service is used to define get/post/head/delete api requests, described below:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"service shorturl-api {")," defines the service name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@server")," defines the properties that used in server side"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"handler")," defines the handler name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get /shorten(shortenReq) returns(shortenResp)")," defines this is a GET request, the request parameters, and the response parameters"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"generate the code for API Gateway by using goctl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"goctl api go -api shorturl.api -dir .\n")),(0,o.kt)("p",{parentName:"li"},"the generated file structure looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},".\n\u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 shorturl-api.yaml         // configuration file\n\u2502\xa0\xa0 \u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 config.go             // configuration definition\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 handler\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 expandhandler.go      // implements expandHandler\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 routes.go             // routes definition\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 shortenhandler.go     // implements shortenHandler\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 expandlogic.go        // implements ExpandLogic\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 shortenlogic.go       // implements ShortenLogic\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 svc\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 servicecontext.go     // defines ServiceContext\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 types\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 types.go              // defines request/response\n\u2502\xa0\xa0 \u251c\u2500\u2500 shorturl.api\n\u2502\xa0\xa0 \u2514\u2500\u2500 shorturl.go                   // main entrance\n\u251c\u2500\u2500 go.mod\n\u2514\u2500\u2500 go.sum\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"start API Gateway service, listens on port 8888 by default"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go run shorturl.go -f etc/shorturl-api.yaml\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"test API Gateway service"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://localhost:8888/shorten?url=http://www.xiaoheiban.cn"\n')),(0,o.kt)("p",{parentName:"li"},"response like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Thu, 27 Aug 2020 14:31:39 GMT\nContent-Length: 15\n\n{"shortUrl":""}\n')),(0,o.kt)("p",{parentName:"li"},"You can see that the API Gateway service did nothing except returned a zero value. And let\u2019s implement the business logic in rpc service.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"you can modify ",(0,o.kt)("inlineCode",{parentName:"p"},"internal/svc/servicecontext.go")," to pass dependencies if needed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"implement logic in package ",(0,o.kt)("inlineCode",{parentName:"p"},"internal/logic"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"you can use goctl to generate code for clients base on the .api file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"till now, the client engineer can work with the api, don\u2019t need to wait for the implementation of server side"))),(0,o.kt)("h2",{id:"6-write-code-for-transform-rpc-service"},"6. Write code for transform rpc service"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"under directory ",(0,o.kt)("inlineCode",{parentName:"li"},"shorturl")," create dir ",(0,o.kt)("inlineCode",{parentName:"li"},"rpc"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"under directory ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/transform")," create ",(0,o.kt)("inlineCode",{parentName:"p"},"transform.proto")," file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"goctl rpc template -o transform.proto\n")),(0,o.kt)("p",{parentName:"li"},"edit the file and make the code looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage transform;\n\noption go_package = "./pb";\n\nmessage expandReq {\n    string shorten = 1;\n}\n\nmessage expandResp {\n    string url = 1;\n}\n\nmessage shortenReq {\n    string url = 1;\n}\n\nmessage shortenResp {\n    string shorten = 1;\n}\n\nservice transformer {\n    rpc expand(expandReq) returns(expandResp);\n    rpc shorten(shortenReq) returns(shortenResp);\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"use goctl to generate the rpc code, execute the following command in ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/transofrm")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc protoc transform.proto --go_out=. --go-grpc_out=. --zrpc_out=.\n")),(0,o.kt)("p",{parentName:"li"},"the generated file structure looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"rpc/transform\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 transform.yaml              // configuration file\n\u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 config.go               // configuration definition\n\u2502\xa0\xa0 \u251c\u2500\u2500 logic\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 expandlogic.go          // implements expand logic\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 shortenlogic.go         // implements shorten logic\n\u2502\xa0\xa0 \u251c\u2500\u2500 server\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 transformerserver.go    // rpc handler\n\u2502\xa0\xa0 \u2514\u2500\u2500 svc\n\u2502\xa0\xa0     \u2514\u2500\u2500 servicecontext.go       // defines service context, like dependencies\n\u251c\u2500\u2500 pb\n\u2502\xa0\xa0 \u251c\u2500\u2500 transform.pb.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 transform_grpc.pb.go\n\u251c\u2500\u2500 transform.go                    // rpc main entrance\n\u251c\u2500\u2500 transform.proto\n\u2514\u2500\u2500 transformer\n    \u251c\u2500\u2500 transformer.go              // defines how rpc clients call this service\n    \u251c\u2500\u2500 transformer_mock.go         // mock file, for test purpose\n    \u2514\u2500\u2500 types.go                    // request/response definition\n")),(0,o.kt)("p",{parentName:"li"},"just run it, looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go run transform.go -f etc/transform.yaml\nStarting rpc server at 127.0.0.1:8080...\n")),(0,o.kt)("p",{parentName:"li"},"you can change the listening port in file ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/transform.yaml"),"."))),(0,o.kt)("h2",{id:"7-modify-api-gateway-to-call-transform-rpc-service"},"7. Modify API Gateway to call transform rpc service"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"shorturl-api.yaml"),", add the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Transform:\n  Etcd:\n    Hosts:\n      - localhost:2379\n    Key: transform.rpc\n")),(0,o.kt)("p",{parentName:"li"},"automatically discover the transform service by using etcd.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify the file ",(0,o.kt)("inlineCode",{parentName:"p"},"internal/config/config.go"),", add dependency on transform service:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    rest.RestConf\n    Transform zrpc.RpcClientConf     // manual code\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify the file ",(0,o.kt)("inlineCode",{parentName:"p"},"internal/svc/servicecontext.go"),", like below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceContext struct {\n    Config    config.Config\n    Transformer transformer.Transformer  // manual code\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        Config:    c,\n    Transformer: transformer.NewTransformer(zrpc.MustNewClient(c.Transform)), // manual code\n    }\n}\n")),(0,o.kt)("p",{parentName:"li"},"passing the dependencies among services within ServiceContext.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify the method ",(0,o.kt)("inlineCode",{parentName:"p"},"Expand")," in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"internal/logic/expandlogic.go"),", looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (l *ExpandLogic) Expand(req types.ExpandReq) (*types.ExpandResp, error) {\n  // manual code start\n    resp, err := l.svcCtx.Transformer.Expand(l.ctx, &transformer.ExpandReq{\n        Shorten: req.Shorten,\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    return &types.ExpandResp{\n        Url: resp.Url,\n    }, nil\n  // manual code stop\n}\n")),(0,o.kt)("p",{parentName:"li"},"by calling the method ",(0,o.kt)("inlineCode",{parentName:"p"},"Expand")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"transformer")," to restore the shortened url.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify the file ",(0,o.kt)("inlineCode",{parentName:"p"},"internal/logic/shortenlogic.go"),", looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (l *ShortenLogic) Shorten(req types.ShortenReq) (*types.ShortenResp, error) {\n  // manual code start\n    resp, err := l.svcCtx.Transformer.Shorten(l.ctx, &transformer.ShortenReq{\n        Url: req.Url,\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    return &types.ShortenResp{\n        Shorten: resp.Shorten,\n    }, nil\n  // manual code stop\n}\n")),(0,o.kt)("p",{parentName:"li"},"by calling the method ",(0,o.kt)("inlineCode",{parentName:"p"},"Shorten")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"transformer")," to shorten the url."))),(0,o.kt)("p",null,"Till now, we\u2019ve done the modification of API Gateway. All the manually added code are marked."),(0,o.kt)("h2",{id:"8-define-the-database-schema-generate-the-code-for-crudcache"},"8. Define the database schema, generate the code for CRUD+cache"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"under shorturl, create the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/transform/model"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir -p rpc/transform/model"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"under the directory rpc/transform/model create the file called shorturl.sql`, contents as below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `shorturl`\n(\n  `shorten` varchar(255) NOT NULL COMMENT 'shorten key',\n  `url` varchar(255) NOT NULL COMMENT 'original url',\n  PRIMARY KEY(`shorten`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"create DB and table"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create database gozero;\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"source shorturl.sql;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"under the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/transform/model")," execute the following command to genrate CRUD+cache code, ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," means using ",(0,o.kt)("inlineCode",{parentName:"p"},"redis cache")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"goctl model mysql ddl -c -src shorturl.sql -dir .\n")),(0,o.kt)("p",{parentName:"li"},"you can also generate the code from the database url by using ",(0,o.kt)("inlineCode",{parentName:"p"},"datasource")," subcommand instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ddl")),(0,o.kt)("p",{parentName:"li"},"the generated file structure looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"rpc/transform/model\n\u251c\u2500\u2500 shorturl.sql\n\u251c\u2500\u2500 shorturlmodel.go              // CRUD+cache code\n\u2514\u2500\u2500 vars.go                       // const and var definition\n")))),(0,o.kt)("h2",{id:"9-modify-shortenexpand-rpc-to-call-crudcache"},"9. Modify shorten/expand rpc to call crud+cache"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/transform/etc/transform.yaml"),", add the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"DataSource: root:@tcp(localhost:3306)/gozero\nTable: shorturl\nCache:\n  - Host: localhost:6379\n")),(0,o.kt)("p",{parentName:"li"},"you can use multiple redis as cache. redis node and cluster are both supported.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/transform/internal/config.go"),", like below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    zrpc.RpcServerConf\n    DataSource string             // manual code\n    Table      string             // manual code\n    Cache      cache.CacheConf    // manual code\n}\n")),(0,o.kt)("p",{parentName:"li"},"added the configuration for mysql and redis cache.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/transform/internal/svc/servicecontext.go"),", like below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceContext struct {\n  c     config.Config\n  Model model.ShorturlModel   // manual code\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        c:             c,\n        Model: model.NewShorturlModel(sqlx.NewMysql(c.DataSource), c.Cache), // manual code\n    }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/transform/internal/logic/expandlogic.go"),", like below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (l *ExpandLogic) Expand(in *transform.ExpandReq) (*transform.ExpandResp, error) {\n    // manual code start\n    res, err := l.svcCtx.Model.FindOne(l.ctx, in.Shorten)\n    if err != nil {\n        return nil, err\n    }\n\n    return &transform.ExpandResp{\n        Url: res.Url,\n    }, nil\n    // manual code stop\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"modify ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc/shorten/internal/logic/shortenlogic.go"),", looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (l *ShortenLogic) Shorten(in *transform.ShortenReq) (*transform.ShortenResp, error) {\n  // manual code start, generates shorturl\n  key := hash.Md5Hex([]byte(in.Url))[:6]\n  object, _ := l.svcCtx.Model.FindOne(l.ctx, key)\n  if object != nil {\n    return &transform.ShortenResp{\n      Shorten: key,\n    }, nil\n  }\n\n  _, err := l.svcCtx.Model.Insert(l.ctx, &model.Shorturl{\n        Shorten: key,\n        Url:     in.Url,\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    return &transform.ShortenResp{\n        Shorten: key,\n    }, nil\n  // manual code stop\n}\n")),(0,o.kt)("p",{parentName:"li"},"till now, we finished modifing the code, all the modified code is marked."))),(0,o.kt)("h2",{id:"10-call-shorten-and-expand-services"},"10. Call shorten and expand services"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"call shorten api"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://localhost:8888/shorten?url=http://www.xiaoheiban.cn"\n')),(0,o.kt)("p",{parentName:"li"},"response like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sat, 29 Aug 2020 10:49:49 GMT\nContent-Length: 21\n\n{"shorten":"f35b2a"}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"call expand api"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://localhost:8888/expand?shorten=f35b2a"\n')),(0,o.kt)("p",{parentName:"li"},"response like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sat, 29 Aug 2020 10:51:53 GMT\nContent-Length: 34\n\n{"url":"http://www.xiaoheiban.cn"}\n')))),(0,o.kt)("h2",{id:"11-benchmark"},"11. Benchmark"),(0,o.kt)("p",null,"Because benchmarking the write requests depends on the write throughput of mysql, we only benchmarked the expand api. We read the data from mysql and cache it in redis. I chose 100 hot keys hardcoded in shorten.lua to generate the benchmark."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/shorturl-benchmark.png",alt:"Benchmark"})),(0,o.kt)("p",null,"as shown above, in my MacBook Pro, the QPS is like 30K+."),(0,o.kt)("h2",{id:"12-full-code"},"12. Full code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/tree/main/shorturl"},"https://github.com/zeromicro/zero-examples/tree/main/shorturl")),(0,o.kt)("h2",{id:"13-conclusion"},"13. Conclusion"),(0,o.kt)("p",null,"We always adhere to ",(0,o.kt)("strong",{parentName:"p"},"prefer tools over conventions and documents"),"."),(0,o.kt)("p",null,"go-zero is not only a framework, but also a tool to simplify and standardize the building of micoservice systems."),(0,o.kt)("p",null,"We not only keep the framework simple, but also encapsulate the complexity into the framework. And the developers are free from building the difficult and boilerplate code. Then we get the rapid development and less failure."),(0,o.kt)("p",null,"For the generated code by goctl, lots of microservice components are included, like concurrency control, adaptive circuit breaker, adaptive load shedding, auto cache control etc. And it\u2019s easy to deal with the busy sites."),(0,o.kt)("p",null,"If you have any ideas that can help us to improve the productivity, tell me any time! \ud83d\udc4f"))}m.isMDXComponent=!0}}]);