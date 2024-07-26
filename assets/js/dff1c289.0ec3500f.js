"use strict";(self.webpackChunkquic_framework=self.webpackChunkquic_framework||[]).push([[724],{8043:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(4848),r=n(8453);const s={sidebar_position:1},i="\u6846\u67b6\u7ed3\u6784",a={id:"tutorial-extras/manage-docs-versions",title:"\u6846\u67b6\u7ed3\u6784",description:"\u6846\u67b6\u672c\u8eab\u662f\u57fa\u4e8egolang\u539f\u751f\u7684net/http\u548cgo-quic\u5305\u8fdb\u884c\u6574\u5408\u5c01\u88c5\u7684\uff0c\u6240\u4ee5\u5728\u6027\u80fd\u65b9\u9762\u7406\u8bba\u4e0a\u5e94\u8be5\u662f\u548c\u73b0\u5728golang\u5e38\u7528\u6846\u67b6\u6027\u80fd\u5dee\u4e0d\u591a\u7684(\u65e0\u8bba\u662f\u5e76\u53d1\u8fd8\u662f\u5360\u7528)\uff0c\u751a\u81f3\u53ef\u80fd\u4f18\u4e8e\u73b0\u6709\u7684\u6846\u67b6(\u56e0\u4e3a\u76ee\u524d\u529f\u80fd\u4e0d\u662f\u5f88\u591a\uff0c\u672a\u6765\u529f\u80fd\u4e5f\u4e0d\u4f1a\u65b0\u589e\u592a\u591a)",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",draft:!1,unlisted:!1,editUrl:"https://github.com/QuicFrameworkDoc/doc/tree/main/docs/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6742\u4e03\u6742\u516b",permalink:"/docs/category/\u6742\u4e03\u6742\u516b"}},c={},d=[{value:"\u9879\u76ee\u67b6\u6784",id:"\u9879\u76ee\u67b6\u6784",level:2}];function u(t){const e={h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u6846\u67b6\u7ed3\u6784",children:"\u6846\u67b6\u7ed3\u6784"}),"\n",(0,o.jsx)(e.p,{children:"\u6846\u67b6\u672c\u8eab\u662f\u57fa\u4e8egolang\u539f\u751f\u7684net/http\u548cgo-quic\u5305\u8fdb\u884c\u6574\u5408\u5c01\u88c5\u7684\uff0c\u6240\u4ee5\u5728\u6027\u80fd\u65b9\u9762\u7406\u8bba\u4e0a\u5e94\u8be5\u662f\u548c\u73b0\u5728golang\u5e38\u7528\u6846\u67b6\u6027\u80fd\u5dee\u4e0d\u591a\u7684(\u65e0\u8bba\u662f\u5e76\u53d1\u8fd8\u662f\u5360\u7528)\uff0c\u751a\u81f3\u53ef\u80fd\u4f18\u4e8e\u73b0\u6709\u7684\u6846\u67b6(\u56e0\u4e3a\u76ee\u524d\u529f\u80fd\u4e0d\u662f\u5f88\u591a\uff0c\u672a\u6765\u529f\u80fd\u4e5f\u4e0d\u4f1a\u65b0\u589e\u592a\u591a)"}),"\n",(0,o.jsx)(e.p,{children:"\u6846\u67b6\u672c\u8eab\u7ed3\u6784\u5341\u5206\u7b80\u5355\uff0c\u8fd9\u70b9\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u6e90\u7801\u7684\u7ed3\u6784\u770b\u51fa\u6765\uff0c\u6574\u4f53\u662f\u57fa\u4e8e\u524d\u7f00\u8def\u7531\u6811\u6765\u8fdb\u884c\u5b9e\u73b0\u7684\uff0c\u4f46\u5728\u4e2d\u95f4\u505a\u4e86\u4e00\u5b9a\u7684\u4f18\u5316\u4ee5\u53ca\u62d3\u5c55\uff0c\u6bd4\u5982:\n\u57fa\u4e8e\u53cd\u5c04\u5bf9\u4e8e\u53c2\u6570\u8fdb\u884c\u6ce8\u5165\u4f20\u53c2/\u81ea\u5b9a\u4e49\u89e3\u6790str\u6765\u89e3\u6790\u591a\u7ea7path\u4f20\u53c2/\u81ea\u5b9a\u4e49\u6ce8\u91ca..."}),"\n",(0,o.jsx)(e.h2,{id:"\u9879\u76ee\u67b6\u6784",children:"\u9879\u76ee\u67b6\u6784"}),"\n",(0,o.jsx)(e.p,{children:"\u5176\u5b9e\u56e0\u4e3a\u6211\u672c\u8eab\u5bf9\u4e8e\u8f6f\u4ef6\u67b6\u6784\u4e0d\u662f\u5f88\u7cbe\u901a\uff0c\u5e76\u4e14\u6211\u8ba4\u4e3a\uff0c\u67b6\u6784\u90fd\u662f\u5728\u4e0d\u65ad\u7684\u66f4\u65b0\u7684\uff0c\u6240\u4ee5\uff0c\u4e3a\u4e86\u4e0d\u7ed9\u4f7f\u7528\u8005\u540e\u7eed\u8f6f\u4ef6\u67b6\u6784\u5347\u7ea7\u5e26\u6765\u4e0d\u5fc5\u8981\u7684\u9ebb\u70e6\uff0c\n\u5c31\u6ca1\u6709\u6307\u5b9a\u8bf4\uff0c\u63a8\u8350\u6307\u5b9a\u7684\u67b6\u6784\uff0c\u4eceJavaEE\u5f00\u59cb\u7684MVC\u67b6\u6784\uff0c\u5230\u73b0\u5728\u5e38\u7528\u7684DDD\u67b6\u6784\uff0c\u53ef\u80fd\u672a\u6765\u8fd8\u6709\u4e00\u4e9b\u975e\u5206\u5c42\u7684\u67b6\u6784...\u6bcf\u6b21\u67b6\u6784\u7684\u5347\u7ea7\u6240\u5e26\u6765\u7684\n\u96be\u5ea6\u4e0d\u4e9a\u4e8e\u91cd\u5199\u6574\u4e2a\u8f6f\u4ef6\uff0c\u6240\u4ee5\u672c\u6846\u67b6\u4e5f\u4e0d\u4f1a\u6709\u63a8\u8350\u7684\u9879\u76ee\u67b6\u6784\uff0c\u6216\u8005\u8bf4\uff0c\u63a8\u8350\u7684\u9879\u76ee\u67b6\u6784\u662f\u5f53\u524d\u5e38\u7528\u7684\u9879\u76ee\u67b6\u6784"})]})}function l(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var o=n(6540);const r={},s=o.createContext(r);function i(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);