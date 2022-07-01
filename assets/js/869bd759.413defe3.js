"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6543],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,u=g["".concat(p,".").concat(m)]||g[m]||d[m]||r;return n?o.createElement(u,i(i({ref:t},s),{},{components:n})):o.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9040:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},p={unversionedId:"prepare/protoc-install",id:"prepare/protoc-install",isDocsHomePage:!1,title:"protoc & protoc-gen-go installation",description:"Forward",source:"@site/docs/prepare/protoc-install.md",sourceDirName:"prepare",slug:"/prepare/protoc-install",permalink:"/docs/prepare/protoc-install",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/prepare/protoc-install.md",version:"current",lastUpdatedAt:1656686642,formattedLastUpdatedAt:"7/1/2022",frontMatter:{},sidebar:"docs",previous:{title:"Goctl Installation",permalink:"/docs/prepare/goctl-install"},next:{title:"Other",permalink:"/docs/prepare/prepare-other"}},c=[{value:"Forward",id:"forward",children:[]},{value:"way 1: install from goctl",id:"way-1-install-from-goctl",children:[]},{value:"way2: install from web page",id:"way2-install-from-web-page",children:[{value:"protoc installation",id:"protoc-installation",children:[]},{value:"protoc-gen-* installation",id:"protoc-gen--installation",children:[]}]}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"forward"},"Forward"),(0,r.kt)("p",null,"protoc is a tool written in C++, which can translate proto files into codes in the specified language. In the go-zero microservices, we use grpc to communicate between services, and the writing of grpc requires the use of protoc and the plug-in protoc-gen-go that translates into go language rpc stub code."),(0,r.kt)("p",null,"Demonstration environment of this document"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mac OS")),(0,r.kt)("h2",{id:"way-1-install-from-goctl"},"way 1: install from goctl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ goctl env check -i -f -v                                 \n[goctl-env]: preparing to check env\n\n[goctl-env]: looking up "protoc"\n[goctl-env]: "protoc" is not found in PATH\n[goctl-env]: preparing to install "protoc"\n"protoc" installed from cache\n[goctl-env]: "protoc" is already installed in "/Users/keson/go/bin/protoc"\n\n[goctl-env]: looking up "protoc-gen-go"\n[goctl-env]: "protoc-gen-go" is not found in PATH\n[goctl-env]: preparing to install "protoc-gen-go"\n"protoc-gen-go" installed from cache\n[goctl-env]: "protoc-gen-go" is already installed in "/Users/keson/go/bin/protoc-gen-go"\n\n[goctl-env]: looking up "protoc-gen-go-grpc"\n[goctl-env]: "protoc-gen-go-grpc" is not found in PATH\n[goctl-env]: preparing to install "protoc-gen-go-grpc"\n"protoc-gen-go-grpc" installed from cache\n[goctl-env]: "protoc-gen-go-grpc" is already installed in "/Users/keson/go/bin/protoc-gen-go-grpc"\n\n[goctl-env]: congratulations! your goctl environment is ready!\n')),(0,r.kt)("h2",{id:"way2-install-from-web-page"},"way2: install from web page"),(0,r.kt)("h3",{id:"protoc-installation"},"protoc installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf/releases"},"protobuf release")," page and select the compressed package file suitable for your operating system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"protoc-3.14.0-osx-x86_64.zip")," and enter ",(0,r.kt)("inlineCode",{parentName:"p"},"protoc-3.14.0-osx-x86_64")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd protoc-3.14.0-osx-x86_64/bin\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Move the started ",(0,r.kt)("inlineCode",{parentName:"p"},"protoc")," binary file to any path added to the environment variable, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),". It is not recommended putting it directly with the next path of the system."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mv protoc $GOPATH/bin\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"$GOPATH is the actual folder address of your local machine")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify the installation result"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoc --version\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"libprotoc 3.14.0\n")))),(0,r.kt)("h3",{id:"protoc-gen--installation"},"protoc-gen-* installation"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Windows may report an error, ",(0,r.kt)("inlineCode",{parentName:"p"},"A required privilege is not held by the client."),", because goctl needs to be run ",(0,r.kt)("inlineCode",{parentName:"p"},"as administrator"),' under Windows.\nThe reason is that goctl needs to be run "as administrator" under Windows.'))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download and install ",(0,r.kt)("inlineCode",{parentName:"li"},"protoc-gen-go"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ go install google.golang.org/protobuf/cmd/protoc-gen-go@latest\n$ go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest\n")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"protoc-gen-go installation failed, please read ",(0,r.kt)("a",{parentName:"p",href:"../faq/error"},"Error")))))}d.isMDXComponent=!0}}]);