"use strict";(self.webpackChunkdapr_handbook=self.webpackChunkdapr_handbook||[]).push([[141],{7585:function(a,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return l},default:function(){return g}});var e=r(3117),n=r(102),o=(r(7294),r(3905)),p=["components"],i={slug:"1e414e7ad2fb68e8d5dc620a6",title:"\u4e00\u5e74\u589e\u52a0 1.2w \u661f\uff0cDapr \u80fd\u5426\u5f15\u9886\u4e91\u539f\u751f\u4e2d\u95f4\u4ef6\u7684\u672a\u6765\uff1f",image:"https://i.imgur.com/mErPwqL.png",author:"\u963f\u91cc\u5df4\u5df4\u4e91\u539f\u751f",author_url:"https://www.infoq.cn/profile/A596F6AB163277",author_image_url:"https://static001.geekbang.org/account/avatar/00/17/8d/29/ece299c3.jpg?x-oss-process=image/resize,w_200,h_200",tags:["Dapr"]},u=void 0,c={permalink:"/blog/1e414e7ad2fb68e8d5dc620a6",source:"@site/blog/2021-05-12-ali-talk-Dapr.md",title:"\u4e00\u5e74\u589e\u52a0 1.2w \u661f\uff0cDapr \u80fd\u5426\u5f15\u9886\u4e91\u539f\u751f\u4e2d\u95f4\u4ef6\u7684\u672a\u6765\uff1f",description:"\u4f5c\u8005 | \u6556\u5c0f\u5251  \u963f\u91cc\u4e91\u9ad8\u7ea7\u6280\u672f\u4e13\u5bb6\u3001Dapr Maintainer",date:"2021-05-12T00:00:00.000Z",formattedDate:"May 12, 2021",tags:[{label:"Dapr",permalink:"/blog/tags/dapr"}],readingTime:33.47,truncated:!0,authors:[{name:"\u963f\u91cc\u5df4\u5df4\u4e91\u539f\u751f",url:"https://www.infoq.cn/profile/A596F6AB163277",imageURL:"https://static001.geekbang.org/account/avatar/00/17/8d/29/ece299c3.jpg?x-oss-process=image/resize,w_200,h_200"}]},s={authorsImageUrls:[void 0]},l=[],d={toc:l};function g(a){var t=a.components,r=(0,n.Z)(a,p);return(0,o.kt)("wrapper",(0,e.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005 | \u6556\u5c0f\u5251  \u963f\u91cc\u4e91\u9ad8\u7ea7\u6280\u672f\u4e13\u5bb6\u3001Dapr Maintainer")),(0,o.kt)("p",null,"Dapr \u662f 2019 \u5e74 10 \u6708\u5fae\u8f6f\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u8fd0\u884c\u65f6\uff0c\u5728\u4eca\u5e74 2 \u6708\u4efd\u521a\u521a\u53d1\u5e03\u4e86 v1.0 \u6b63\u5f0f\u7248\u672c\u3002\u867d\u7136\u63a8\u51fa\u81f3\u4eca\u4e0d\u8fc7\u4e00\u5e74\u534a\u65f6\u95f4\uff0c\u4f46 Dapr \u53d1\u5c55\u52bf\u5934\u5341\u5206\u8fc5\u731b\uff0c\u76ee\u524d\u5df2\u7ecf\u5728 GitHub \u4e0a\u6536\u83b7\u4e86 1.2w \u661f\u3002\u963f\u91cc\u662f Dapr \u5f00\u6e90\u9879\u76ee\u7684\u6df1\u5ea6\u53c2\u4e0e\u8005\u548c\u65e9\u671f\u91c7\u7528\u8005\uff0c\u7387\u5148\u8fdb\u884c\u4e86\u751f\u4ea7\u843d\u5730\uff0c\u96c6\u56e2\u5185\u90e8\u6709\u5341\u51e0\u4e2a\u5e94\u7528\u5728\u4f7f\u7528 Dapr\uff1b\u76ee\u524d\u5df2\u6709 2 \u4f4d Dapr \u6210\u5458\uff0c\u662f Dapr \u9879\u76ee\u4e2d\u9664\u5fae\u8f6f\u4e4b\u5916\u4ee3\u7801\u8d21\u732e\u6700\u591a\u7684\u516c\u53f8\u3002"),(0,o.kt)("p",null,"\u867d\u7136 Dapr \u5728\u56fd\u5916\u6709\u5f88\u9ad8\u7684\u5173\u6ce8\u5ea6\uff0c\u4f46\u5728\u56fd\u5185\u77e5\u540d\u5ea6\u975e\u5e38\u4f4e\uff0c\u800c\u4e14\u73b0\u6709\u7684\u5c11\u91cf Dapr \u8d44\u6599\u4e5f\u504f\u65b0\u95fb\u8d44\u8baf\u548c\u7b80\u5355\u4ecb\u7ecd\uff0c\u7f3a\u4e4f\u5bf9 Dapr \u7684\u6df1\u5ea6\u89e3\u8bfb\u3002\u5728 Dapr v1.0 \u53d1\u5e03\u4e4b\u9645\uff0c\u6211\u5e0c\u671b\u53ef\u4ee5\u901a\u8fc7\u8fd9\u7bc7\u6587\u7ae0\u5e2e\u52a9\u5927\u5bb6\u5bf9 Dapr \u5f62\u6210\u4e00\u4e2a\u51c6\u786e\u7684\u8ba4\u77e5\uff1a\u638c\u63e1 Dapr \u9879\u76ee\u7684\u53d1\u5c55\u8109\u7edc\uff0c\u4e86\u89e3\u5176\u6838\u5fc3\u4ef7\u503c\u548c\u613f\u666f\uff0c\u9886\u609f Dapr \u9879\u76ee\u80cc\u540e\u7684\u201c\u9053\u4e4b\u6240\u5728\u201d\u2014\u2014 \u4e91\u539f\u751f\u3002"))}g.isMDXComponent=!0}}]);