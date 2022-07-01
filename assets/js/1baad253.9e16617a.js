"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6174],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),p=o,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4759:function(e,t,r){r.r(t),r.d(t,{default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],s={},c={unversionedId:"blog/concurrency/sharedcalls",id:"blog/concurrency/sharedcalls",isDocsHomePage:!1,title:"SharedCalls",description:"go-zero microservices framework provides a lot of out-of-the-box tools, good tools not only to improve the performance of the service but also to improve the robustness of the code to avoid errors, to achieve a unified style of code for others to read and so on.",source:"@site/docs/blog/concurrency/sharedcalls.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/sharedcalls",permalink:"/docs/blog/concurrency/sharedcalls",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/concurrency/sharedcalls.md",version:"current",lastUpdatedAt:1656686642,formattedLastUpdatedAt:"7/1/2022",frontMatter:{},sidebar:"blog",previous:{title:"Redis Lock",permalink:"/docs/blog/concurrency/redis-lock"},next:{title:"TimingWheel",permalink:"/docs/blog/principle/timing-wheel"}},i=[{value:"Usage Scenarios",id:"usage-scenarios",children:[]},{value:"Key source code analysis",id:"key-source-code-analysis",children:[]},{value:"Finally",id:"finally",children:[]}],u={toc:i};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"go-zero microservices framework provides a lot of out-of-the-box tools, good tools not only to improve the performance of the service but also to improve the robustness of the code to avoid errors, to achieve a unified style of code for others to read and so on."),(0,a.kt)("p",null,"This article is about the in-process shared calls magic tool ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/core/syncx/sharedcalls.go"},"SharedCalls"),"."),(0,a.kt)("h2",{id:"usage-scenarios"},"Usage Scenarios"),(0,a.kt)("p",null,'In a concurrency scenario, there may be multiple threads (concurrent threads) requesting the same resource at the same time. If each request has to go through the resource request process, in addition to being inefficient, it will also cause concurrency pressure on the resource service. For example, if the cache is invalidated and multiple requests arrive at the same time to request a resource, the resource has been invalidated in the cache, these requests will continue to access the DB to do queries, which will cause an instant increase in database pressure. The use of SharedCalls can make multiple requests at the same time only need to initiate a call to get the result, and other requests "sit and enjoy", this design effectively reduces the concurrent pressure of resource services, and can effectively prevent cache breakdown.'),(0,a.kt)("p",null,"In a high concurrency scenario, when a hotkey cache is invalidated, multiple requests will load the resource from the database and save it to the cache at the same time, which may cause the database to be killed directly if no precautions are taken. For this scenario, the implementation has been provided in the go-zero framework, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/core/stores/sqlc/cachedsql.go"},"sqlc")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/core/stores/mongoc/cachedcollection.go"},"mongoc")," and other implementation code."),(0,a.kt)("p",null,"To simplify the demo code, we simulate the caching scenario by multiple threads going to fetch an id at the same time. As follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  const round = 5\n  var wg sync.WaitGroup\n  barrier := syncx.NewSharedCalls()\n\n  wg.Add(round)\n  for i := 0; i < round; i++ {\n    // Multiple threads executing simultaneously\n    go func() {\n      defer wg.Done()\n      // As you can see, multiple threads go to request resources on the same key, and the actual function to get the resource will only be called once\n      val, err := barrier.Do("once", func() (interface{}, error) {\n        // sleep 1 second, in order to allow multiple threads to fetch the data on the key once at the same time\n        time.Sleep(time.Second)\n        // A random id is generated\n        return stringx.RandId(), nil\n      })\n      if err != nil {\n        fmt.Println(err)\n      } else {\n        fmt.Println(val)\n      }\n    }()\n  }\n\n  wg.Wait()\n}\n')),(0,a.kt)("p",null,"Run and print the result as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"837c577b1008a0db\n837c577b1008a0db\n837c577b1008a0db\n837c577b1008a0db\n837c577b1008a0db\n")),(0,a.kt)("p",null,"It can be seen that as long as the request is initiated at the same time on the same key, it will share the same result, which is particularly useful for scenarios such as getting DB data into the cache, and can effectively prevent cache hitting."),(0,a.kt)("h2",{id:"key-source-code-analysis"},"Key source code analysis"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SharedCalls interface Provides abstraction of both Do and DoEx methods"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// SharedCalls Provides abstraction of both Do and DoEx methods\ntype SharedCalls interface {\n  Do(key string, fn func() (interface{}, error)) (interface{}, error)\n  DoEx(key string, fn func() (interface{}, error)) (interface{}, bool, error)\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SharedCalls interface specific implementation of sharedGroup"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// call represents a single request for a specified resource\ntype call struct {\n  wg  sync.WaitGroup  // Used to coordinate resource sharing between requesting goroutines\n  val interface{}     // Used to save the return value of the request\n  err error           // Used to save the errors that occurred during the request\n}\n\ntype sharedGroup struct {\n  calls map[string]*call\n  lock  sync.Mutex\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"sharedGroup\u7684Do\u65b9\u6cd5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"key parameter: can be interpreted as a unique identifier for the resource."),(0,a.kt)("li",{parentName:"ul"},"fn parameter: the real method to get the resource."),(0,a.kt)("li",{parentName:"ul"},"Processing analysis.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// When multiple requests use the Do method to request resources at the same time\nfunc (g *sharedGroup) Do(key string, fn func() (interface{}, error)) (interface{}, error) {\n  // Lock\n  g.lock.Lock()\n\n  // According to the key, get the result of the corresponding call, and save it with the variable c\n  if c, ok := g.calls[key]; ok {\n    // After getting the call, release the lock, where the call may not have actual data yet, but just an empty memory placeholder\n    g.lock.Unlock()\n    // Call wg.Wait to determine if another goroutine is requesting resources, if it blocks, it means that another goroutine is getting resources\n    c.wg.Wait()\n    // When wg.Wait is no longer blocking, it means the resource acquisition is finished and the result can be returned directly\n    return c.val, c.err\n  }\n\n  // If you don't get the result, you call the makeCall method to get the resource, note that it is still locked here to ensure that only one goroutine can call makecall\n  c := g.makeCall(key, fn)\n  // Return the result of the call\n  return c.val, c.err\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DoEx method of sharedGroup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Similar to the Do method, except that a boolean value is added to the return value to indicate whether the value was obtained directly by calling the makeCall method, or whether it was taken from a shared result")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (g *sharedGroup) DoEx(key string, fn func() (interface{}, error)) (val interface{}, fresh bool, err error) {\n  g.lock.Lock()\n  if c, ok := g.calls[key]; ok {\n    g.lock.Unlock()\n    c.wg.Wait()\n    return c.val, false, c.err\n  }\n\n  c := g.makeCall(key, fn)\n  return c.val, true, c.err\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"makeCall method of sharedGroup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This method is called by the Do and DoEx methods and is the method that actually initiates the resource request.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// There must be only one goroutine that enters the makeCall, because it has to be locked with a lock\nfunc (g *sharedGroup) makeCall(key string, fn func() (interface{}, error)) *call {\n  // Create a call structure to hold the results of this request\n  c := new(call)\n  // wg plus 1, used to notify other goroutines requesting resources to wait for the end of this resource acquisition\n  c.wg.Add(1)\n  // Put the call used to save the result into the map for other goroutines to get it\n  g.calls[key] = c\n  // Release the lock so that other requesting goroutines can get the memory placeholder for the call\n  g.lock.Unlock()\n\n  defer func() {\n    // delete key first, done later. can't reverse the order, because if reverse,\n    // another Do call might wg.Wait() without get notified with wg.Done()\n    g.lock.Lock()\n    delete(g.calls, key)\n    g.lock.Unlock()\n\n    // Call wg.Done to notify other goroutines that results can be returned, so that all requests in this batch complete the sharing of results\n    c.wg.Done()\n  }()\n\n  // Call the fn method and fill the result in the variable c\n  c.val, c.err = fn()\n  return c\n}\n")))),(0,a.kt)("h2",{id:"finally"},"Finally"),(0,a.kt)("p",null,"This article mainly introduces the SharedCalls tool in go-zero framework, and does a simple sorting out of its application scenarios and key codes, hope this article can bring you some gains."))}h.isMDXComponent=!0}}]);