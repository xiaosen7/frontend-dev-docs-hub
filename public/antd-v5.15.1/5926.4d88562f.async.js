"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5926],{615926:function(fn,S,n){n.r(S),n.d(S,{default:function(){return sn}});var Z=n(97857),C=n.n(Z),d=n(667294),M=n(805574),L=n.n(M),N=n(168400),p=n.n(N),P=n(639389),T=n(64714),A=n(725818),R=n(941346),z=n(302281),B=n(303352),E=n(647759),H=n(154098),I=n.n(H);function Q(a){var t=a;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status==="pending"||(t.status="pending",t.then(function(e){t.status="fulfilled",t.value=e},function(e){t.status="rejected",t.reason=e})),t)}var X=Q,D=n(912444),G=n.n(D),J=n(272004),K=n.n(J),U=n(9783),V=n.n(U),W=function(){function a(){G()(this,a),V()(this,"cache",new Map)}return K()(a,[{key:"get",value:function(e){return this.cache.get(e)}},{key:"set",value:function(e,l){this.cache.set(e,l)}},{key:"promise",value:function(e,l){var o=this.get(e);if(o)return o;var r=l();return this.set(e,r),r}}]),a}(),Y=new W,k=function(t){var e,l;return typeof t=="string"?(e=function(){return I()(t).then(function(r){return r.json()})},l=t):(e=t.request,l=t.key),X(Y.promise(l,e))},w=k,b=n(302559),q=n(472638),s=n(785893),F,$,O,_=(0,E.kc)(function(a){var t=a.token,e=a.css;return{history:e(F||(F=p()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:e($||($=p()([`
    // white-space: pre;
  `]))),ref:e(O||(O=p()([`
    margin-left: `,`px;
  `])),t.marginXS)}}),nn={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function tn(a){var t=a.changelog,e=t===void 0?"":t,l=a.refs,o=l===void 0?[]:l,r=a.styles,g=d.useMemo(function(){for(var c=[],u=!1,i="",m=0;m<e.length;m+=1){var y=e[m];if(y!=="`")i+=y;else{var j=i;u&&(j=(0,s.jsx)("code",{children:j})),c.push(j),i="",u=!u}}return c.push(i),c},[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:g}),o==null?void 0:o.map(function(c){var u;return(0,s.jsxs)("a",{className:r.ref,href:c,target:"_blank",rel:"noreferrer",children:["#",(u=c.match(/^.*\/(\d+)$/))===null||u===void 0?void 0:u[1]]},c)})]})}function en(a,t){var e=w(t==="cn"?{key:"component-changelog-cn",request:function(){return n.e(2104).then(n.t.bind(n,332104,19))}}:{key:"component-changelog-en",request:function(){return n.e(5212).then(n.t.bind(n,365212,19))}});return(0,d.useMemo)(function(){var l=a.replace(/-/g,""),o=Object.keys(e).find(function(r){return r.toLowerCase()===l.toLowerCase()});return e[o]},[e,a])}function an(a){var t,e=a.pathname,l=e===void 0?"":e,o=(0,b.default)(nn),r=L()(o,2),g=r[0],c=r[1],u=d.useState(!1),i=L()(u,2),m=i[0],y=i[1],j=_(),x=j.styles,ln=((t=l.match(/\/components\/([^/]+)/))===null||t===void 0?void 0:t[1])||"",f=en(ln,c),on=d.useMemo(function(){var h={};return f==null||f.forEach(function(v){h[v.version]=h[v.version]||[],h[v.version].push(v)}),Object.keys(h).map(function(v){var un=h[v];return{children:(0,s.jsxs)(T.Z,{children:[(0,s.jsx)("h4",{children:v}),(0,s.jsx)("ul",{children:un.map(function(hn,vn){return(0,s.jsx)("li",{className:x.li,children:(0,s.jsx)(tn,C()(C()({},hn),{},{styles:x}))},vn)})})]})}})},[f]),rn=A.ZP.useBreakpoint(),cn=rn.md?"48vw":"90vw";return!f||!f.length?null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R.ZP,{className:x.history,icon:(0,s.jsx)(P.HistoryOutlined,{}),onClick:function(){y(!0)},children:g.changelog}),(0,s.jsx)(z.Z,{title:g.changelog,extra:(0,s.jsx)(q.Z,{style:{fontSize:14},to:"/changelog".concat(c==="cn"?"-cn":""),children:g.full}),open:m,width:cn,onClose:function(){y(!1)},destroyOnClose:!0,children:(0,s.jsx)(B.Z,{items:on})})]})}var sn=function(a){return(0,s.jsx)(d.Suspense,{fallback:null,children:(0,s.jsx)(an,C()({},a))})}}}]);