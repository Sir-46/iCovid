(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[13],{1114:function(t,e,n){"use strict";n.r(e);var r=n(724),a=n(2),c=n.n(a),s=n(1117),u=n(1116),o=n(1115),i=n(628),p=n(1082),d=n.n(p),f=s.a.Paragraph;e.default=function(){var t=[{title:"message",dataIndex:"message",width:100,render:function(t){return c.a.createElement(d.a,{src:t})}},{title:"responseId",dataIndex:"_id",render:function(t){return c.a.createElement(f,{copyable:!0},t)}},{title:"intentId",dataIndex:"_id",render:function(t){return c.a.createElement(f,{copyable:!0},w.map((function(e){return e.responseId===t&&e._id})))}}],e=Object(a.useState)(!1),n=Object(r.a)(e,2),s=n[0],p=n[1],h=Object(a.useState)([]),l=Object(r.a)(h,2),v=l[0],m=l[1],b=Object(a.useState)([]),j=Object(r.a)(b,2),w=j[0],O=j[1];return Object(a.useEffect)((function(){p(!0),Object(i.a)().then((function(t){"success"===t.message&&O(t.data)})),Object(i.b)().then((function(t){"success"===t.message&&(m(t.data),p(!1))}))}),[]),c.a.createElement("div",null,c.a.createElement(u.a,{title:"Respone List"},c.a.createElement(o.a,{loading:s,columns:t,dataSource:v,rowKey:"message",scroll:{x:!0},pagination:{pageSize:v.length}})))}},628:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h}));var r=n(565),a=n.n(r),c=n(566),s="https://covid.thetripleinnovation.com/api",u=function(){var t=Object(c.a)(a.a.mark((function t(){var e,n,r,c,u,o,i,p=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.length>0&&void 0!==p[0]?p[0]:"POST",n=p.length>1?p[1]:void 0,r=p.length>2?p[2]:void 0,c=p.length>3&&void 0!==p[3]?p[3]:{},t.prev=4,u="".concat(s).concat(r),t.next=8,fetch(u,{headers:{Accept:"application/json",Authorization:""!==n?"Bearer "+n:""},method:e||"POST",body:"POST"===e?JSON.stringify(c):null});case 8:return o=t.sent,t.next=11,o.json();case 11:return i=t.sent,t.abrupt("return",i);case 15:return t.prev=15,t.t0=t.catch(4),t.abrupt("return",t.t0);case 18:case"end":return t.stop()}}),t,null,[[4,15]])})));return function(){return t.apply(this,arguments)}}(),o=sessionStorage.getItem("token"),i=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://covid19-cdn.workpointnews.com/api/constants.json",{method:"GET"});case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://covid19-cdn.workpointnews.com/api/cases.json",{method:"GET"});case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://covid19-cdn.workpointnews.com/api/trend/th.json",{method:"GET"});case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("POST",o,"/response/lists");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("POST",o,"/intent/lists");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=13.5e19f1d8.chunk.js.map