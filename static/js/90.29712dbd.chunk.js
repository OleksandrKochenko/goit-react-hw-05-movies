"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[90],{90:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(439),u=r(791),a=r(87),c=r(433),s=r(861),i=r(757),o=r.n(i),f=r(689),p=r(390),l=r(184),d=function(t){var e=t.query,r=(0,u.useState)([]),i=(0,n.Z)(r,2),d=i[0],h=i[1],v=(0,f.TH)();return(0,u.useEffect)((function(){function t(){return(t=(0,s.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.ls)(e);case 2:if(0!==(r=t.sent).results.length){t.next=8;break}return alert("There is no movies for this query"),t.abrupt("return");case 8:h((function(){return(0,c.Z)(r.results)}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{style:{margin:"0 10px"},children:['Search list of "',e,'"']}),d.length>0&&(0,l.jsx)("ul",{children:d.map((function(t){return(0,l.jsx)("li",{id:t.id,children:(0,l.jsx)(a.rU,{to:"".concat(t.id),state:{from:v},children:t.title})},t.id)}))})]})},h=function(){var t,e=(0,a.lr)(),r=(0,n.Z)(e,2),c=r[0],s=r[1],i=null!==(t=c.get("q"))&&void 0!==t?t:"",o=(0,u.useState)(i),f=(0,n.Z)(o,2),p=f[0],h=f[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{style:{margin:"0 10px"},onSubmit:function(t){t.preventDefault(),h(i.trim())},children:[(0,l.jsx)("input",{value:i,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(t){""===t.target.value?s({}):s({q:t.target.value})}}),(0,l.jsx)("button",{type:"submit",children:" Search "})]}),(0,l.jsx)("hr",{}),""!==p&&(0,l.jsx)(d,{query:p})]})}},390:function(t,e,r){r.d(e,{DD:function(){return s},Hx:function(){return p},Y5:function(){return o},ls:function(){return i},uV:function(){return f}});var n=r(861),u=r(757),a=r.n(u),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"9a450fbd652c62e887bc78d79e7a75f2",language:"en-US",include_adult:!1};var s=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"trending/movie/day",t.next=3,c.Z.get("trending/movie/day");case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"search/movie",r={params:{query:e}},t.next=4,c.Z.get("search/movie",r);case 4:return n=t.sent,t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e),t.next=3,c.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e,"/credits"),t.next=3,c.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e,"/reviews"),t.next=3,c.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=90.29712dbd.chunk.js.map