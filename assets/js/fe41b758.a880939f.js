"use strict";(self.webpackChunkdapr_handbook=self.webpackChunkdapr_handbook||[]).push([[834],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6454:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],o={},p="\u8d44\u6e90\u7ed1\u5b9a",d={unversionedId:"dev/bindings",id:"dev/bindings",title:"\u8d44\u6e90\u7ed1\u5b9a",description:"\u524d\u8a00",source:"@site/docs/02-dev/03-bindings.md",sourceDirName:"02-dev",slug:"/dev/bindings",permalink:"/docs/dev/bindings",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"dev",previous:{title:"\u53d1\u5e03\u8ba2\u9605",permalink:"/docs/dev/pubsub"},next:{title:"\u6267\u884c\u7ec4\u4ef6",permalink:"/docs/dev/actor"}},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u7279\u6027",id:"\u7279\u6027",children:[{value:"\u8f93\u5165\u7ed1\u5b9a",id:"\u8f93\u5165\u7ed1\u5b9a",children:[],level:3},{value:"\u8f93\u51fa\u7ed1\u5b9a",id:"\u8f93\u51fa\u7ed1\u5b9a",children:[],level:3}],level:2},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",children:[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",children:[],level:3},{value:"\u914d\u7f6e\u7ec4\u4ef6",id:"\u914d\u7f6e\u7ec4\u4ef6",children:[{value:"Localhost",id:"localhost",children:[],level:4},{value:"Kubernetes",id:"kubernetes",children:[],level:4}],level:3},{value:"\u8ba2\u9605\u6d88\u606f",id:"\u8ba2\u9605\u6d88\u606f",children:[],level:3},{value:"\u53d1\u5e03\u6d88\u606f",id:"\u53d1\u5e03\u6d88\u606f",children:[],level:3}],level:2}],s={toc:c};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8d44\u6e90\u7ed1\u5b9a"},"\u8d44\u6e90\u7ed1\u5b9a"),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u5927\u578b\u7cfb\u7edf\u5efa\u8bbe\uff0c\u4f1a\u9047\u5230\u5f88\u591a\u5f02\u6784\u7684\u7cfb\u7edf\uff1a\u4e0d\u540c\u5e73\u53f0\u548c\u4f9b\u5e94\u5546\u7684\u6570\u636e\u5b58\u50a8\u3001\u6d88\u606f\u7cfb\u7edf\u548c web \u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 Dapr ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8d44\u6e90\u7ed1\u5b9a"),"\uff0c\u4f60\u7684\u4e1a\u52a1\u670d\u52a1\u53ef\u4ee5\u76f4\u63a5\u4e0e\u5916\u90e8\u5e94\u7528\u7a0b\u5e8f\u7684\u5916\u90e8\u8d44\u6e90\u96c6\u6210\u3002\u6765\u81ea\u5916\u90e8\u7cfb\u7edf\u7684\u4e8b\u4ef6\u53ef\u80fd\u4f1a\u89e6\u53d1\u670d\u52a1\u4e2d\u4f20\u9012\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u64cd\u4f5c\u3002 \u7136\u540e\uff0c\u4f60\u7684\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7\u5728\u53e6\u4e00\u4e2a\u5916\u90e8\u7cfb\u7edf\u4e2d\u89e6\u53d1\u4e8b\u4ef6\u6765\u5c55\u5f00\u64cd\u4f5c\uff0c\u540c\u65f6\u4f20\u9012\u4e0a\u4e0b\u6587\u6709\u6548\u8d1f\u8f7d\u4fe1\u606f\u3002 \u4f60\u7684\u670d\u52a1\u4e0d\u9700\u8981\u8026\u5408\u6216\u8bc6\u522b\u5916\u90e8\u8d44\u6e90\u5c31\u8fdb\u884c\u901a\u4fe1\u3002 \u8be5\u7ba1\u9053\u5c01\u88c5\u5728\u9884\u5b9a\u4e49\u7684 Dapr \u7ec4\u4ef6\u4e2d\u3002\u8981\u4f7f\u7528\u7684 Dapr \u7ec4\u4ef6\u53ef\u5728\u8fd0\u884c\u65f6\u8f7b\u677e\u5730\u8fdb\u884c\u4ea4\u6362\uff0c\u65e0\u9700\u66f4\u6539\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u6b64\u64cd\u4f5c\u7684\u4e00\u822c\u903b\u8f91\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2276).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e4d\u4e00\u770b\uff0c\u8d44\u6e90\u7ed1\u5b9a\u884c\u4e3a\u53ef\u80fd\u4e0e\u672c\u4e66\u524d\u9762\u4ecb\u7ecd\u7684 ",(0,r.kt)("em",{parentName:"p"},"\u53d1\u5e03\u8ba2\u9605")," \u6a21\u5f0f\u7c7b\u4f3c\u3002 \u5c3d\u7ba1\u5b83\u4eec\u6709\u76f8\u4f3c\u4e4b\u5904\uff0c\u4f46\u4e5f\u6709\u4e0d\u540c\u4e4b\u5904\u3002",(0,r.kt)("em",{parentName:"p"},"\u53d1\u5e03\u8ba2\u9605")," \u4fa7\u91cd\u4e8e\u670d\u52a1\u4e4b\u95f4\u7684\u5f02\u6b65\u901a\u4fe1\u3002 \u8d44\u6e90\u7ed1\u5b9a\u5177\u6709\u66f4\u5927\u7684\u8303\u56f4\u3002 \u5b83\u4fa7\u91cd\u4e8e\u8f6f\u4ef6\u5e73\u53f0\u4e4b\u95f4\u7684\u7cfb\u7edf\u4e92\u64cd\u4f5c\u6027\u3002 \u5728\u4e0d\u540c\u7684\u5e94\u7528\u7a0b\u5e8f\u3001\u6570\u636e\u5b58\u50a8\u548c\u5fae\u670d\u52a1\u5e94\u7528\u7a0b\u5e8f\u4e4b\u5916\u7684\u670d\u52a1\u4e4b\u95f4\u4ea4\u6362\u4fe1\u606f\u3002"))),(0,r.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("h3",{id:"\u8f93\u5165\u7ed1\u5b9a"},"\u8f93\u5165\u7ed1\u5b9a"),(0,r.kt)("p",null,"\u8f93\u5165\u7ed1\u5b9a\u901a\u8fc7\u5916\u90e8\u8d44\u6e90\u7684\u4f20\u5165\u4e8b\u4ef6\u6d88\u606f\u3002 \u82e5\u8981\u63a5\u6536\u4e8b\u4ef6\u548c\u6570\u636e\uff0c\u8bf7\u4ece\u670d\u52a1\u4e2d\u6ce8\u518c\u4e00\u4e2a\u5c06\u6210\u4e3a \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f \u7684\u516c\u5171\u7ec8\u7ed3\u70b9\u3002 \u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5456).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dapr sidecar \u8bfb\u53d6\u7ed1\u5b9a\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u8ba2\u9605\u4e3a\u5916\u90e8\u8d44\u6e90\u6307\u5b9a\u7684\u4e8b\u4ef6\u3002 \u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u4e8b\u4ef6\u6e90\u662f\u4e00\u4e2a Twitter \u5e10\u6237\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u5728 Twitter \u4e0a\u53d1\u5e03\u4e86\u5339\u914d\u7684\u63a8\u6587\u65f6\uff0c\u5728 Dapr sidecar \u4e2d\u8fd0\u884c\u7684\u7ed1\u5b9a\u7ec4\u4ef6\u4f1a\u9009\u53d6\u5b83\u5e76\u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"Dapr sidecar \u8c03\u7528\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f ",(0,r.kt)("inlineCode",{parentName:"li"},"/tweet")," \uff0c\u8fd9\u5fc5\u987b\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpPost")," \u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5904\u7406\u4e8b\u4ef6\u540e\uff0c\u670d\u52a1\u5c06\u8fd4\u56de HTTP \u72b6\u6001\u7801 ",(0,r.kt)("inlineCode",{parentName:"li"},"200 OK")," \u3002")),(0,r.kt)("h3",{id:"\u8f93\u51fa\u7ed1\u5b9a"},"\u8f93\u51fa\u7ed1\u5b9a"),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed1\u5b9a\u80fd\u591f\u89e6\u53d1\u8c03\u7528\u5916\u90e8\u8d44\u6e90\u4e8b\u4ef6\u3002 \u540c\u6837\uff0c\u9700\u8981\u5148\u7f16\u5199\u7ed1\u5b9a\u914d\u7f6e YAML \u6587\u4ef6\u3002\u4e00\u65e6\u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u8be5\u4e8b\u4ef6\u5728\u5e94\u7528\u7a0b\u5e8f\u7684 Dapr sidecar \u4e0a\u8c03\u7528\u7ed1\u5b9a API\u3002\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6505).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dapr \u8bfb\u53d6\u7ed1\u5b9a\u914d\u7f6e\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5173\u5982\u4f55\u8fde\u63a5\u5230\u5916\u90e8\u8d44\u6e90\u7684\u4fe1\u606f\u3002 \u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5916\u90e8\u8d44\u6e90\u662f Twilio \u7684 SMS \u5e10\u6237\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7a0b\u5e8f\u8c03\u7528 sidecar \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1.0/bindings/sms")," \u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u4f7f\u7528 HTTP POST \u6765\u8c03\u7528 API\u3002 \u8fd8\u53ef\u4ee5\u4f7f\u7528 gRPC\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 Dapr sidecar \u4e2d\u8fd0\u884c\u7684\u7ed1\u5b9a\u7ec4\u4ef6\u4f1a\u8c03\u7528\u5916\u90e8\u6d88\u606f\u7cfb\u7edf\u6765\u53d1\u9001\u6d88\u606f\u3002 \u6d88\u606f\u5c06\u5305\u542b POST \u8bf7\u6c42\u4e2d\u4f20\u9012\u7684\u6570\u636e\u3002")),(0,r.kt)("h2",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),(0,r.kt)("p",null,"\u672c\u7bc7\u57fa\u4e8e MQTT \u6d88\u606f\u4e2d\u95f4\u4ef6\u6280\u672f\uff0c\u8bb2\u89e3\u5982\u4f55\u5f00\u53d1.net\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("p",null,"\u90e8\u7f72MQTT\u6d88\u606f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d --name emqx -p 1883:1883 -p 18083:18083 emqx/emqx\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"EMQ X \u662f\u4e00\u6b3e\u5b8c\u5168\u5f00\u6e90\uff0c\u9ad8\u5ea6\u53ef\u4f38\u7f29\uff0c\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0f MQTT \u6d88\u606f\u670d\u52a1\u5668\uff0c\u9002\u7528\u4e8e IoT\u3001M2M \u548c\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u5904\u7406\u5343\u4e07\u7ea7\u522b\u7684\u5e76\u53d1\u5ba2\u6237\u7aef\u3002"))),(0,r.kt)("h3",{id:"\u914d\u7f6e\u7ec4\u4ef6"},"\u914d\u7f6e\u7ec4\u4ef6"),(0,r.kt)("h4",{id:"localhost"},"Localhost"),(0,r.kt)("p",null,"\u5f53\u5728\u5355\u673a\u6a21\u5f0f\u4e0b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dapr init")," \u65f6\uff0cDapr CLI\u4f1a\u81ea\u52a8\u63d0\u4f9b\u4e00\u4e2a\u72b6\u6001\u5b58\u50a8(Redis)\uff0c\u5e76\u5728components\u76ee\u5f55\u4e2d\u521b\u5efa\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"binding.yaml")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728Linux/MacOS\u4e0a\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.dapr/components"),"\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u5728Windows\u4e0a\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%/.dapr/components"),"\u3002")),(0,r.kt)("h4",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"\u5728 Kubernetes \u4e2d\u90e8\u7f72\u4e0b\u9762\u7684\u6587\u4ef6  ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f binding.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="binding.yaml"',title:'"binding.yaml"'},'apiVersion: dapr.io/v1alpha1\nkind: Component\nmetadata:\n  name: mybinding\nspec:\n  type: bindings.mqtt\n  version: v1\n  metadata:\n  - name: url\n    value: mqtt://localhost:1883\n  - name: topic\n    value: mytopic\n  - name: consumerID\n    value: "{uuid}"\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5176\u4ed6\u914d\u7f6e\u8be6\u89c1\u8fd9\u91cc")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://docs.dapr.io/reference/components-reference/supported-bindings/mqtt/#spec-metadata-fields"},"https://docs.dapr.io/reference/components-reference/supported-bindings/mqtt/#spec-metadata-fields")))),(0,r.kt)("h3",{id:"\u8ba2\u9605\u6d88\u606f"},"\u8ba2\u9605\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[HttpPost("/mybinding")]\npublic ActionResult MsgIn([FromBody] WeatherForecast data)\n{\n    Console.WriteLine($"message received at {data.Date.ToLongTimeString()}.");\n    return Ok();\n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"MsgIn"),"\u65b9\u6cd5\u9700\u8981\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpPost")," \u8bf7\u6c42\uff0c\u53c2\u6570\u5728Body\u91cc\u9762\u3002"))),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0cDapr \u5c06\u5728\u4e8b\u4ef6\u53d1\u751f\u662f\u8c03\u7528 /mybinding \u63a5\u53e3\u3002"),(0,r.kt)("h3",{id:"\u53d1\u5e03\u6d88\u606f"},"\u53d1\u5e03\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[HttpGet]\npublic async Task<ActionResult> MsgOut()\n{\n    await _daprClient.InvokeBindingAsync("mybinding", "create", new WeatherForecast { Date = DateTime.Now });\n    return Ok();\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"create")," \u4e3a\u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u64cd\u4f5c\u3002 \u5e38\u89c1\u64cd\u4f5c\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"list"),"\u3002")),(0,r.kt)("p",null,"\u901a\u8fc7swagger\u53d1\u9001\u6d88\u606f\uff0c\u540c\u65f6\u4f60\u4e5f\u4f1a\u6536\u5230\u5982\u4e0b\u6d88\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"== APP == message received at 12:57:31.\n")))}m.isMDXComponent=!0},2276:function(e,t,n){t.Z=n.p+"assets/images/bindings-bb66e14c02e7c88ffaf2a2fcf3080abe.png"},5456:function(e,t,n){t.Z=n.p+"assets/images/input-binding-flow-a4c1fceb19ccd42f127f41e864124ad4.png"},6505:function(e,t,n){t.Z=n.p+"assets/images/output-binding-flow-8f63aae21dc42ac5527e959845912c82.png"}}]);