"use strict";(self.webpackChunkquic_framework=self.webpackChunkquic_framework||[]).push([[586],{2609:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(4848),s=n(8453);const l={},o="Server",i={permalink:"/blog/Server",editUrl:"https://github.com/QuicFrameworkDoc/doc/tree/main/blog/blog/Server.md",source:"@site/blog/Server.md",title:"Server",description:"Server\u5305\u4f5c\u4e3a\u6574\u4e2a\u670d\u52a1\u7684\u63d0\u4f9b\u8005\u548c\u542f\u52a8\u5165\u53e3\uff0c\u8fd9\u91cc\u7684Server\u6307\u7684\u662f\u7a0b\u5e8f\u542f\u52a8\u548c\u521d\u59cb\u5316\u76f8\u5173\u7684\u51fd\u6570API",date:"2024-07-26T08:54:58.000Z",tags:[],readingTime:1.395,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"API\u6587\u6863",permalink:"/blog/README"}},c={authorsImageUrls:[]},d=[{value:"TLS\u542f\u52a8:",id:"tls\u542f\u52a8",level:2},{value:"\u53c2\u6570\u8bf4\u660e:",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"TSLPem\u548cTLSKey",id:"tslpem\u548ctlskey",level:4},{value:"port",id:"port",level:4},{value:"Http\u542f\u52a8",id:"http\u542f\u52a8",level:2},{value:"\u53c2\u6570\u8bf4\u660e:",id:"\u53c2\u6570\u8bf4\u660e-1",level:3},{value:"port",id:"port-1",level:4}];function h(e){const r={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Server\u5305\u4f5c\u4e3a\u6574\u4e2a\u670d\u52a1\u7684\u63d0\u4f9b\u8005\u548c\u542f\u52a8\u5165\u53e3\uff0c\u8fd9\u91cc\u7684Server\u6307\u7684\u662f\u7a0b\u5e8f\u542f\u52a8\u548c\u521d\u59cb\u5316\u76f8\u5173\u7684\u51fd\u6570API"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u76ee\u524dServer\u63d0\u4f9b\u4e86\u4e24\u4e2a\u542f\u52a8\u65b9\u5f0f:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"\u57fa\u4e8eTLS\u8bc1\u4e66\u542f\u52a8\uff0chttps\u8bbf\u95ee"}),"\n",(0,t.jsx)(r.li,{children:"Http\u542f\u52a8(\u8fd8\u5728\u6d4b\u8bd5\u4e2d\uff0c\u5c5e\u4e8efeature\u529f\u80fd)"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"tls\u542f\u52a8",children:"TLS\u542f\u52a8:"}),"\n",(0,t.jsx)(r.p,{children:"\u76f8\u5173\u51fd\u6570:"}),"\n",(0,t.jsxs)(r.p,{children:["\u521d\u59cb\u5316Server:",(0,t.jsx)(r.strong,{children:"server.NewServer(TLSPem, TLSKey, port string)"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u542f\u52a8Server:",(0,t.jsx)(r.strong,{children:"*Server.StartServer()"})]}),"\n",(0,t.jsx)(r.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e:"}),"\n",(0,t.jsx)(r.h4,{id:"tslpem\u548ctlskey",children:"TSLPem\u548cTLSKey"}),"\n",(0,t.jsx)(r.p,{children:'TSL\u8bc1\u4e66\u7684pem\u548ckey\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\u4e5f\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u5982\u679c\u6ca1\u6709\u503c\u5219\u4f20""\u5373\u53ef(\u7a7a\u503c\u4e3a\u9ed8\u8ba4\u81ea\u52a8\u751f\u6210\u8bc1\u4e66\uff0c\u751f\u6210\u81ea\u7b7e\u540d\u8bc1\u4e66)'}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u6ce8\u610f"})," TSLPem\u548cTLSKey\u5fc5\u987b\u540c\u65f6\u4f20\uff0c\u4e0d\u80fd\u53ea\u4f20\u4e00\u4e2a\uff0c\u5426\u5219\u4f1a\u542f\u52a8\u5931\u8d25"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"port",children:"port"}),"\n",(0,t.jsxs)(r.p,{children:["\u76d1\u542c\u7684\u7aef\u53e3\u53f7\uff0c\u683c\u5f0f\u4e3a: ",(0,t.jsx)(r.code,{children:":number"}),"\uff0c\u4f1a\u5360\u7528\u76ee\u6807\u7aef\u53e3\u7684TCP\u548cUDP\u7aef\u53e3\uff0c\u8bf7\u63d0\u524d\u5f00\u542f\u76ee\u6807\u7aef\u53e3\u7684\u9632\u706b\u5899\uff0c\u4ee5\u514d\u63a5\u6536\u4e0d\u5230\u5305"]}),"\n",(0,t.jsx)(r.h2,{id:"http\u542f\u52a8",children:"Http\u542f\u52a8"}),"\n",(0,t.jsxs)(r.p,{children:["\u521d\u59cb\u5316Server:",(0,t.jsx)(r.strong,{children:"server.NewHttpServer(port string)"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u542f\u52a8HttpServer:",(0,t.jsx)(r.strong,{children:"*Server.StartHttpSerer()"})]}),"\n",(0,t.jsx)(r.h3,{id:"\u53c2\u6570\u8bf4\u660e-1",children:"\u53c2\u6570\u8bf4\u660e:"}),"\n",(0,t.jsx)(r.h4,{id:"port-1",children:"port"}),"\n",(0,t.jsxs)(r.p,{children:["\u76d1\u542c\u7684\u7aef\u53e3\u53f7\uff0c\u683c\u5f0f\u4e3a: ",(0,t.jsx)(r.code,{children:":number"}),"\uff0c\u4f1a\u5360\u7528\u76ee\u6807\u7aef\u53e3\u7684TCP\u7aef\u53e3\uff0c\u8bf7\u63d0\u524d\u5f00\u542f\u76ee\u6807\u7aef\u53e3\u7684\u9632\u706b\u5899\uff0c\u4ee5\u514d\u63a5\u6536\u4e0d\u5230\u5305"]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(6540);const s={},l=t.createContext(s);function o(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);