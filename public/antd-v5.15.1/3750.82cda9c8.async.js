"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3750],{303840:function(ue,Z,l){Object.defineProperty(Z,"__esModule",{value:!0}),Z.default=void 0;const re=H(l(554434));function H(I){return I&&I.__esModule?I:{default:I}}const U=re;Z.default=U,ue.exports=U},793582:function(ue,Z,l){l.r(Z),l.d(Z,{default:function(){return bt}});var re=l(9783),H=l.n(re),U=l(513769),I=l.n(U),nr=l(805574),w=l.n(nr),lr=l(97857),A=l.n(lr),ir=l(168400),g=l.n(ir),y=l(667294),me=l(416397),Q=l(510274);function J(t){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(t)}function de(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function fe(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?de(Object(r),!0).forEach(function(o){cr(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function cr(t,e,r){return e=sr(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function sr(t){var e=ur(t,"string");return J(e)==="symbol"?e:String(e)}function ur(t,e){if(J(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(J(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ae(t,e){var r=e.generateColorPalettes,o=e.generateNeutralColorPalettes,n=t.colorSuccess,i=t.colorWarning,c=t.colorError,v=t.colorInfo,d=t.colorPrimary,f=t.colorBgBase,h=t.colorTextBase,u=r(d),s=r(n),p=r(i),b=r(c),x=r(v),C=o(f,h);return fe(fe({},C),{},{colorPrimaryBg:u[1],colorPrimaryBgHover:u[2],colorPrimaryBorder:u[3],colorPrimaryBorderHover:u[4],colorPrimaryHover:u[5],colorPrimary:u[6],colorPrimaryActive:u[7],colorPrimaryTextHover:u[8],colorPrimaryText:u[9],colorPrimaryTextActive:u[10],colorSuccessBg:s[1],colorSuccessBgHover:s[2],colorSuccessBorder:s[3],colorSuccessBorderHover:s[4],colorSuccessHover:s[5],colorSuccess:s[6],colorSuccessActive:s[7],colorSuccessTextHover:s[8],colorSuccessText:s[9],colorSuccessTextActive:s[10],colorErrorBg:b[1],colorErrorBgHover:b[2],colorErrorBorder:b[3],colorErrorBorderHover:b[4],colorErrorHover:b[5],colorError:b[6],colorErrorActive:b[7],colorErrorTextHover:b[8],colorErrorText:b[9],colorErrorTextActive:b[10],colorWarningBg:p[1],colorWarningBgHover:p[2],colorWarningBorder:p[3],colorWarningBorderHover:p[4],colorWarningHover:p[5],colorWarning:p[6],colorWarningActive:p[7],colorWarningTextHover:p[8],colorWarningText:p[9],colorWarningTextActive:p[10],colorInfoBg:x[1],colorInfoBgHover:x[2],colorInfoBorder:x[3],colorInfoBorderHover:x[4],colorInfoHover:x[5],colorInfo:x[6],colorInfoActive:x[7],colorInfoTextHover:x[8],colorInfoText:x[9],colorInfoTextActive:x[10],colorBgMask:new Q.C("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}var R=l(965516);function G(t){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(t)}function ge(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function ve(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ge(Object(r),!0).forEach(function(o){mr(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function mr(t,e,r){return e=dr(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function dr(t){var e=fr(t,"string");return G(e)==="symbol"?e:String(e)}function fr(t,e){if(G(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(G(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ar=R.Z.defaultAlgorithm,P=function(e,r){return new Q.C(e).setAlpha(r).toRgbString()},K=function(e,r){var o=new Q.C(e);return o.darken(r).toHexString()},gr=function(e){var r=(0,me.generate)(e);return{1:r[0],2:r[1],3:r[2],4:r[3],5:r[4],6:r[5],7:r[6],8:r[4],9:r[5],10:r[6]}},vr=function(e,r){var o=e||"#fff",n=r||"#000";return{colorBgBase:o,colorTextBase:n,colorText:P(n,.85),colorTextSecondary:P(n,.45),colorTextTertiary:P(n,.45),colorTextQuaternary:P(n,.25),colorFill:P(n,.06),colorFillSecondary:P(n,.04),colorFillTertiary:P(n,.03),colorFillQuaternary:P(n,.02),colorBgLayout:K(o,4),colorBgContainer:K(o,0),colorBgElevated:K(o,0),colorBgSpotlight:P(n,.85),colorBorder:K(o,15),colorBorderSecondary:K(o,6),colorSplit:P(n,.06)}},pr=function(e,r){var o=r!=null?r:Ar(e);return ve(ve({},o),Ae(r!=null?r:e,{generateColorPalettes:gr,generateNeutralColorPalettes:vr}))},pe=pr;function V(t){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(t)}function he(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function ye(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?he(Object(r),!0).forEach(function(o){hr(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function hr(t,e,r){return e=yr(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function yr(t){var e=br(t,"string");return V(e)==="symbol"?e:String(e)}function br(t,e){if(V(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(V(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xr=R.Z.darkAlgorithm,T=function(e,r){return new Q.C(e).setAlpha(r).toRgbString()},L=function(e,r){var o=new Q.C(e);return o.lighten(r).toHexString()},jr=function(e){var r=(0,me.generate)(e,{theme:"dark"});return{1:r[0],2:r[1],3:r[2],4:r[3],5:r[6],6:r[5],7:r[4],8:r[6],9:r[5],10:r[4]}},Cr=function(e,r){var o=e||"#000",n=r||"#fff";return{colorBgBase:o,colorTextBase:n,colorText:T(n,.85),colorTextSecondary:T(n,.45),colorTextTertiary:T(n,.45),colorTextQuaternary:T(n,.25),colorFill:T(n,.18),colorFillSecondary:T(n,.12),colorFillTertiary:T(n,.08),colorFillQuaternary:T(n,.04),colorBgElevated:L(o,12),colorBgContainer:L(o,8),colorBgLayout:L(o,0),colorBgSpotlight:L(o,26),colorBorder:L(o,26),colorBorderSecondary:L(o,19),colorSplit:T(n,.12)}},Sr=function(e,r){var o=r!=null?r:xr(e);return ye(ye({},o),Ae(r!=null?r:e,{generateColorPalettes:jr,generateNeutralColorPalettes:Cr}))},Pr=Sr;function X(t){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(t)}function be(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function Y(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?be(Object(r),!0).forEach(function(o){Or(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Or(t,e,r){return e=Tr(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Tr(t){var e=Br(t,"string");return X(e)==="symbol"?e:String(e)}function Br(t,e){if(X(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(X(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xe={token:{borderRadius:2,colorPrimary:"#1890ff",wireframe:!0}},je=Y(Y({},xe),{},{algorithm:pe,components:{Menu:{itemBorderRadius:0,subMenuItemBorderRadius:0,itemHoverColor:"#1890ff",itemSelectedColor:"#1890ff",itemSelectedBg:"#e6f7ff",activeBarWidth:3,itemMarginInline:0,itemHoverBg:"transparent"}}}),Rt=Y(Y({},xe),{},{algorithm:Pr,components:{Menu:{itemBorderRadius:0,subMenuItemBorderRadius:0,itemHoverColor:"transparent",itemSelectedColor:"#1890ff",itemSelectedBg:"#111b26",activeBarWidth:3,itemMarginInline:0,itemHoverBg:"transparent"}}}),$=l(639389),N=l(86198),z=l(506380),wr=l(75529),F=l(106750),Dr=l(24768),kr=l(256661),te=l(64714),Rr=l(294047),Ce=l(941346),Fr=l(371707),m=l(647759),M=l(730717),Mr=l(693967),D=l.n(Mr),Er=l(385956),Zr=l(49313),Se=l(302559),Pe=l(472638),Hr=l(438199),Oe=l(373638),Ir=l(902316),Te=l(833494),Qr=l(82225),W="#1677FF",oe="#ED4192",q=[{color:W,url:null,webp:null},{color:"#5A54F9",url:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/original",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#9E339F",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*CMCMTKV51tIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:oe,url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*s5OdR6wZZIkAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#E0282E",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HE_4Qp_XfQQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F4801A",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xTG2QbottAQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F2BD27",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*hbPfSbF-xPIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#00B96B",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*iM6CQ496P3oAAAAAAAAAAAAADrJ8AQ/fmt.webp"}],Be=q.map(function(t){var e=t.color;return e}),Lr=33;function _(t){if(!t)return null;var e=(0,M.vC)(t).toRgb(),r=q.map(function(n){var i=n.color,c=(0,M.vC)(i).toRgb(),v=Math.sqrt(Math.pow(c.r-e.r,2)+Math.pow(c.g-e.g,2)+Math.pow(c.b-e.b,2));return{color:i,dist:v}}),o=r.sort(function(n,i){return n.dist-i.dist})[0];return o.dist<=Lr?o.color:null}function Nr(t){var e,r=_(t);return r?((e=q.find(function(o){return o.color===r}))===null||e===void 0?void 0:e.url)||"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*CLp0Qqc11AkAAAAAAAAAAAAAARQnAQ":null}var a=l(785893),we,zr=(0,m.kc)(function(t){var e=t.token;return{image:(0,m.iv)(we||(we=g()([`
    transition: all `,`;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: right top;
  `])),e.motionDurationSlow)}}),ae=function(){return{opacity:1}},ne=function(){return{opacity:0}},Wr=function(e){var r=e.colorPrimary,o=e.isLight,n=(0,y.useMemo)(function(){return _(r)},[r]),i=zr(),c=i.styles,v=(0,y.useState)([]),d=w()(v,2),f=d[0],h=d[1];return y.useLayoutEffect(function(){h([n])},[n]),(0,a.jsx)(Qr.V4,{keys:f,motionName:"transition",onEnterStart:ne,onAppearStart:ne,onEnterActive:ae,onAppearActive:ae,onLeaveStart:ae,onLeaveActive:ne,motionDeadline:500,children:function(s){var p=s.key,b=s.className,x=s.style,C=D()(c.image,b),O=q.find(function(ce){return ce.color===p});if(!O||!O.url)return null;var ie=x||{},S=ie.opacity;return(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{srcSet:O.webp,type:"image/webp"}),(0,a.jsx)("source",{srcSet:O.url,type:"image/jpeg"}),(0,a.jsx)("img",{className:C,style:A()(A()({},x),{},{opacity:o?S:0}),src:O.url,alt:""})]})}})},Jr=Wr,Gr=l(719632),Kr=l.n(Gr),Vr=l(483465),Xr=l(432210),De,ke,$r=(0,m.kc)(function(t){var e=t.token,r=t.css;return{color:r(De||(De=g()([`
    width: `,`px;
    height: `,`px;
    border-radius: 100%;
    cursor: pointer;
    transition: all `,`;
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
    }

    &:focus-within {
      // need \uFF1F
    }
  `])),e.controlHeightLG/2,e.controlHeightLG/2,e.motionDurationFast),colorActive:r(ke||(ke=g()([`
    box-shadow:
      0 0 0 1px `,`,
      0 0 0 `,"px ",`;
  `])),e.colorBgContainer,e.controlOutlineWidth*2+1,e.colorPrimary)}}),Ur=function(e){var r=e.value,o=e.children,n=e.onChange,i=(0,y.useState)(r),c=w()(i,2),v=c[0],d=c[1];return(0,y.useEffect)(function(){var f=setTimeout(function(){n==null||n(v)},200);return function(){return clearTimeout(f)}},[v]),(0,y.useEffect)(function(){d(r)},[r]),(0,a.jsx)(Vr.Z,{value:v,onChange:d,presets:[{label:"PresetColors",colors:Be}],children:o})},Yr=function(e){var r=e.value,o=e.onChange,n=e.id,i=$r(),c=i.styles,v=y.useMemo(function(){var d=(0,M.vC)(r||"").toRgbString(),f=!1,h=Be.map(function(u){var s=(0,M.vC)(u).toRgbString(),p=s===d;return f=f||p,{color:u,active:p,picker:!1}});return[].concat(Kr()(h),[{color:"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",picker:!0,active:!f}])},[r]);return(0,a.jsxs)(F.Z,{gap:"large",align:"center",wrap:"wrap",children:[(0,a.jsx)(Xr.Z,{value:typeof r=="string"?r:r==null?void 0:r.toHexString(),onChange:function(f){return o==null?void 0:o(f.target.value)},style:{width:120},id:n}),(0,a.jsx)(F.Z,{gap:"middle",children:v.map(function(d){var f=d.color,h=d.active,u=d.picker,s=(0,a.jsx)("label",{className:D()(c.color,H()({},c.colorActive,h)),style:{background:f},onClick:function(){u||o==null||o(f)},children:(0,a.jsx)("input",{type:"radio",name:u?"picker":"color",tabIndex:u?-1:0,onClick:function(b){return b.stopPropagation()}})},f);return u?(0,a.jsx)(Ur,{value:r||"",onChange:o,children:s},"colorpicker-".concat(r)):s})})]})},qr=Yr,_r=l(181632),Re,Fe,et=(0,m.kc)(function(){var t=(0,Te.EI)(),e=t.carousel;return{carousel:e,container:(0,m.iv)(Re||(Re=g()([`
      position: relative;
    `]))),title:(0,m.iv)(Fe||(Fe=g()([`
      position: absolute;
      top: 15%;
      z-index: 1;
      width: 100%;
      text-align: center;
    `])))}}),le=[{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KsMrRZaciFcAAAAAAAAAAAAADrJ8AQ/original",titleColor:"rgba(0,0,0,.88)"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3FkqR6XRNgoAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cSX_RbD3k9wAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MldsRZeax6EAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*vCfCSbiI_VIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BeDBTY9UnXIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Q63XTbk8YaMAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"}];function rt(t){var e=et(),r=e.styles,o=t.id,n=t.title,i=t.description,c=(0,m.Fg)(),v=(0,y.useState)(0),d=w()(v,2),f=d[0],h=d[1];return(0,a.jsxs)("div",{className:r.container,children:[(0,a.jsxs)("div",{className:r.title,children:[(0,a.jsx)(te.Z.Title,{id:o,level:1,style:{fontWeight:900,color:le[f].titleColor,fontFamily:"AliPuHui, ".concat(c.fontFamily),fontSize:c.fontSizeHeading2},children:n}),(0,a.jsx)(te.Z.Paragraph,{style:{marginBottom:c.marginXXL,color:le[f].titleColor},children:i})]}),(0,a.jsx)(_r.Z,{className:r.carousel,afterChange:h,children:le.map(function(u,s){return(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:u.imageSrc,alt:"",style:{width:"100%"}})},s)})})]})}var tt=l(473894),ot=l(24500),at=function(e){var r=e.id,o=e.value,n=e.onChange;return(0,a.jsxs)(F.Z,{gap:"large",children:[(0,a.jsx)(tt.Z,{value:o,onChange:n,style:{width:120},min:0,formatter:function(c){return"".concat(c,"px")},parser:function(c){return c&&parseFloat(c)},id:r}),(0,a.jsx)(ot.Z,{tooltip:{open:!1},style:{width:128},min:0,value:o,max:20,onChange:n})]})},nt=at,Me,Ee,Ze={default:"https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg",dark:"https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg",lark:"https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg",comic:"https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg",v4:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original"},lt={cn:{default:"\u9ED8\u8BA4",dark:"\u6697\u9ED1",lark:"\u77E5\u8BC6\u534F\u4F5C",comic:"\u6843\u82B1\u7F18",v4:"V4 \u4E3B\u9898"},en:{default:"Default",dark:"Dark",lark:"Document",comic:"Blossom",v4:"V4 Theme"}},it=(0,m.kc)(function(t){var e=t.token,r=t.css;return{themeCard:r(Me||(Me=g()([`
    border-radius: `,`px;
    cursor: pointer;
    transition: all `,`;
    overflow: hidden;
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
      position: absolute;
    }

    img {
      vertical-align: top;
      box-shadow:
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }

    &:focus-within,
    &:hover {
      transform: scale(1.04);
    }
  `])),e.borderRadius,e.motionDurationSlow),themeCardActive:r(Ee||(Ee=g()([`
    box-shadow:
      0 0 0 1px `,`,
      0 0 0 `,"px ",`;
    &,
    &:hover:not(:focus-within) {
      transform: scale(1);
    }
  `])),e.colorBgContainer,e.controlOutlineWidth*2+1,e.colorPrimary)}}),ct=function(e){var r=e.value,o=e.id,n=e.onChange,i=it(),c=i.styles,v=(0,Se.default)(lt),d=w()(v,1),f=d[0];return(0,a.jsx)(F.Z,{gap:"large",wrap:"wrap",children:Object.keys(Ze).map(function(h,u){return(0,a.jsxs)(F.Z,{vertical:!0,gap:"small",justify:"center",align:"center",children:[(0,a.jsxs)("label",{onClick:function(){return n==null?void 0:n(h)},className:D()(c.themeCard,H()({},c.themeCardActive,r===h)),children:[(0,a.jsx)("input",{type:"radio",name:"theme",id:u===0?o:void 0}),(0,a.jsx)("img",{src:Ze[h],alt:h})]}),(0,a.jsx)("span",{children:f[h]})]},h)})})},st=ct,ut=["compact","themeType","colorPrimary"],He,Ie,Qe,Le,Ne,ze,We,Je,Ge,Ke,Ve,Xe,$e,Ue,Ye,mt=N.Z.Header,dt=N.Z.Content,ft=N.Z.Sider,At=function(){return null},gt={cn:{themeTitle:"\u5B9A\u5236\u4E3B\u9898\uFF0C\u968F\u5FC3\u6240\u6B32",themeDesc:"Ant Design 5.0 \u5F00\u653E\u66F4\u591A\u6837\u5F0F\u7B97\u6CD5\uFF0C\u8BA9\u4F60\u5B9A\u5236\u4E3B\u9898\u66F4\u7B80\u5355",customizeTheme:"\u5B9A\u5236\u4E3B\u9898",myTheme:"\u6211\u7684\u4E3B\u9898",titlePrimaryColor:"\u4E3B\u8272",titleBorderRadius:"\u5706\u89D2",titleCompact:"\u5BBD\u677E\u5EA6",default:"\u9ED8\u8BA4",compact:"\u7D27\u51D1",titleTheme:"\u4E3B\u9898",light:"\u4EAE\u8272",dark:"\u6697\u9ED1",toDef:"\u6DF1\u5EA6\u5B9A\u5236",toUse:"\u53BB\u4F7F\u7528"},en:{themeTitle:"Flexible theme customization",themeDesc:"Ant Design 5.0 enable extendable algorithm, make custom theme easier",customizeTheme:"Customize Theme",myTheme:"My Theme",titlePrimaryColor:"Primary Color",titleBorderRadius:"Border Radius",titleCompact:"Compact",titleTheme:"Theme",default:"Default",compact:"Compact",light:"Light",dark:"Dark",toDef:"More",toUse:"Apply"}},vt=(0,m.kc)(function(t){var e=t.token,r=t.cx,o=(0,Te.EI)(),n=o.carousel,i=(0,m.iv)(He||(He=g()([`
    overflow: hidden;
    background: rgba(240, 242, 245, 0.25);
    backdrop-filter: blur(50px);
    box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
    transition: all `,`;
  `])),e.motionDurationSlow);return{demo:i,otherDemo:(0,m.iv)(Ie||(Ie=g()([`
      &.`,` {
        backdrop-filter: blur(10px);
        background: rgba(247, 247, 247, 0.5);
      }
    `])),r(i)),darkDemo:(0,m.iv)(Qe||(Qe=g()([`
      &.`,` {
        background: #000;
      }
    `])),r(i)),larkDemo:(0,m.iv)(Le||(Le=g()([`
      &.`,` {
        // background: #f7f7f7;
        background: rgba(240, 242, 245, 0.65);
      }
    `])),r(i)),comicDemo:(0,m.iv)(Ne||(Ne=g()([`
      &.`,` {
        // background: #ffe4e6;
        background: rgba(240, 242, 245, 0.65);
      }
    `])),r(i)),menu:(0,m.iv)(ze||(ze=g()([`
      margin-inline-start: auto;
    `]))),darkSideMenu:(0,m.iv)(We||(We=g()([""]))),header:(0,m.iv)(Je||(Je=g()([`
      display: flex;
      align-items: center;
      border-bottom: 1px solid `,`;
      padding-inline: `,`px !important;
      height: `,`px;
      line-height: `,`px;
    `])),e.colorSplit,e.paddingLG,e.controlHeightLG*1.2,e.controlHeightLG*1.2),headerDark:(0,m.iv)(Ge||(Ge=g()([`
      border-bottom-color: rgba(255, 255, 255, 0.1);
    `]))),avatar:(0,m.iv)(Ke||(Ke=g()([`
      width: `,`px;
      height: `,`px;
      border-radius: 100%;
      background: rgba(240, 240, 240, 0.75);
      background-size: cover;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    `])),e.controlHeight,e.controlHeight),avatarDark:(0,m.iv)(Ve||(Ve=g()([`
      background: rgba(200, 200, 200, 0.3);
    `]))),logo:(0,m.iv)(Xe||(Xe=g()([`
      display: flex;
      align-items: center;
      column-gap: `,`px;

      h1 {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
      }
    `])),e.padding),logoImg:(0,m.iv)($e||($e=g()([`
      width: 30px;
      height: 30px;
      overflow: hidden;

      img {
        width: 30px;
        height: 30px;
        vertical-align: top;
      }
    `]))),transBg:(0,m.iv)(Ue||(Ue=g()([`
      background: transparent !important;
    `]))),form:(0,m.iv)(Ye||(Ye=g()([`
      width: 100%;
      margin: 0 auto;
    `]))),carousel:n}}),qe=[{key:"Design Values",label:"Design Values"},{key:"Global Styles",label:"Global Styles"},{key:"Themes",label:"Themes"},{key:"DesignPatterns",label:"Design Patterns"}],pt=[{key:"Design",label:"Design",icon:(0,a.jsx)($.FolderOutlined,{}),children:qe},{key:"Development",label:"Development",icon:(0,a.jsx)($.FolderOutlined,{})}];function ht(t,e){if(!e)return"#FFF";var r=(0,M.vC)(t),o=_(t);switch(o){case W:case oe:case"#F2BD27":return;case"#5A54F9":case"#E0282E":return"#FFF";default:return r.toHsb().b<.7?"#FFF":void 0}}var _e={themeType:"default",colorPrimary:"#1677FF",borderRadius:6,compact:"default"},er={default:{},dark:{borderRadius:2},lark:{colorPrimary:"#00B96B",borderRadius:4},comic:{colorPrimary:oe,borderRadius:16},v4:A()({},je.token)},B=function(e){return e/255};function yt(t){var e=new Q.C(t).toRgb(),r=e.r,o=e.g,n=e.b,i=B(r)*100,c=100,v=Math.max(B(r),B(o),B(n))*1e4,d=(Math.atan2(Math.sqrt(3)*(B(o)-B(n)),2*B(r)-B(o)-B(n))*180/Math.PI+360)%360;return"invert(".concat(i,"%) sepia(").concat(c,"%) saturate(").concat(v,"%) hue-rotate(").concat(d,"deg)")}function bt(){var t=vt(),e=t.styles,r=(0,m.Fg)(),o=(0,Se.default)(gt),n=w()(o,2),i=n[0],c=n[1],v=c==="cn",d=(0,Er.useLocation)(),f=d.search,h=y.useState(_e),u=w()(h,2),s=u[0],p=u[1],b=function(se,ar){y.startTransition(function(){p(A()(A()({},er[ar.themeType]),ar))})},x=s.compact,C=s.themeType,O=s.colorPrimary,ie=I()(s,ut),S=C!=="dark",ce=z.Z.useForm(),xt=w()(ce,1),rr=xt[0],jt=y.useContext(Hr.Z),Ct=jt.isMobile,k=y.useMemo(function(){return typeof O=="string"?O:O.toHexString()},[O]),St=y.useMemo(function(){var j=[S?R.Z.defaultAlgorithm:R.Z.darkAlgorithm];return x==="compact"&&j.push(R.Z.compactAlgorithm),C==="v4"&&j.push(pe),j},[S,x,C]);y.useEffect(function(){var j=A()(A()({},_e),{},{themeType:C},er[C]);p(j),rr.setFieldsValue(j)},[C]);var tr=(0,Zr.Z)();y.useEffect(function(){b({},A()(A()({},s),{},{themeType:tr?"dark":"default"}))},[tr]);var E=_(k),Pt=y.useMemo(function(){var j="transparent",se=R.Z.defaultAlgorithm(A()(A()({},R.Z.defaultConfig.token),{},{colorPrimary:k}));return C==="dark"?j="#393F4A":E===W?j="#F5F8FF":j=se.colorPrimaryHover,[j,se.colorPrimaryBgHover]},[C,E,k]),or=w()(Pt,2),Ot=or[0],Tt=or[1],Bt=y.useMemo(function(){var j=(0,M.vC)(k).toHsb();return j.b=Math.min(j.b,.7),(0,M.vC)(j).toHexString()},[k]),wt=(0,a.jsxs)(wr.ZP,{theme:{token:A()(A()({},ie),{},{colorPrimary:k}),algorithm:St,components:A()({Layout:S?{headerBg:"transparent",bodyBg:"transparent"}:{},Menu:S?{itemBg:"transparent",subMenuItemBg:"transparent",activeBarBorderWidth:0}:{}},C==="v4"?je.components:{})},children:[(0,a.jsx)(At,{}),(0,a.jsx)("div",{className:D()(e.demo,H()(H()({},e.otherDemo,S&&E!==W&&e.otherDemo),e.darkDemo,!S)),style:{borderRadius:s.borderRadius},children:(0,a.jsxs)(N.Z,{className:e.transBg,children:[(0,a.jsxs)(mt,{className:D()(e.header,e.transBg,!S&&e.headerDark),children:[(0,a.jsxs)("div",{className:e.logo,children:[(0,a.jsx)("div",{className:e.logoImg,children:(0,a.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",style:{filter:E===W?void 0:yt(Bt)},alt:""})}),(0,a.jsx)("h1",{children:"Ant Design 5.0"})]}),(0,a.jsxs)(F.Z,{className:e.menu,gap:"middle",children:[(0,a.jsx)($.BellOutlined,{}),(0,a.jsx)($.QuestionCircleOutlined,{}),(0,a.jsx)("div",{className:D()(e.avatar,C==="dark"&&e.avatarDark),style:{backgroundColor:Tt,backgroundImage:"url(".concat(Nr(E),")")}})]})]}),(0,a.jsxs)(N.Z,{className:e.transBg,hasSider:!0,children:[(0,a.jsx)(ft,{className:D()(e.transBg,"site-layout-background"),width:200,children:(0,a.jsx)(Dr.Z,{mode:"inline",className:D()(e.transBg,!S&&e.darkSideMenu),selectedKeys:["Themes"],openKeys:["Design"],style:{height:"100%",borderRight:0},items:pt,expandIcon:!1})}),(0,a.jsxs)(N.Z,{className:e.transBg,style:{padding:"0 24px 24px"},children:[(0,a.jsx)(kr.Z,{style:{margin:"16px 0"},items:[{title:(0,a.jsx)($.HomeOutlined,{})},{title:"Design",menu:{items:qe}},{title:"Themes"}]}),(0,a.jsxs)(dt,{children:[(0,a.jsx)(te.Z.Title,{level:2,children:i.customizeTheme}),(0,a.jsx)(Rr.Z,{title:i.myTheme,extra:(0,a.jsxs)(F.Z,{gap:"small",children:[(0,a.jsx)(Pe.Z,{to:(0,Oe.J1)("/theme-editor",v,f),children:(0,a.jsx)(Ce.ZP,{type:"default",children:i.toDef})}),(0,a.jsx)(Pe.Z,{to:(0,Oe.J1)("/docs/react/customize-theme",v,f),children:(0,a.jsx)(Ce.ZP,{type:"primary",children:i.toUse})})]}),children:(0,a.jsxs)(z.Z,{form:rr,initialValues:s,onValuesChange:b,labelCol:{span:3},wrapperCol:{span:21},className:e.form,children:[(0,a.jsx)(z.Z.Item,{label:i.titleTheme,name:"themeType",children:(0,a.jsx)(st,{})}),(0,a.jsx)(z.Z.Item,{label:i.titlePrimaryColor,name:"colorPrimary",children:(0,a.jsx)(qr,{})}),(0,a.jsx)(z.Z.Item,{label:i.titleBorderRadius,name:"borderRadius",children:(0,a.jsx)(nt,{})}),(0,a.jsx)(z.Z.Item,{label:i.titleCompact,name:"compact",htmlFor:"compact_default",children:(0,a.jsx)(Fr.ZP.Group,{options:[{label:i.default,value:"default",id:"compact_default"},{label:i.compact,value:"compact"}]})})]})})]})]})]})]})})]}),ee={position:"absolute"},Dt={left:"50%",transform:"translate3d(-900px, 0, 0)",top:-100,height:500},kt={right:"50%",transform:"translate3d(750px, 0, 0)",bottom:-100,height:287};return Ct?(0,a.jsx)(rt,{title:i.themeTitle,description:i.themeDesc,id:"flexible"}):(0,a.jsx)(Ir.Z,{title:i.themeTitle,titleColor:ht(k,S),description:i.themeDesc,id:"flexible",background:Ot,decoration:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{transition:"all ".concat(r.motionDurationSlow),opacity:S&&E===W?1:0},children:[(0,a.jsx)("img",{style:A()(A()({},ee),Dt),src:"https://gw.alipayobjects.com/zos/bmw-prod/bd71b0c6-f93a-4e52-9c8a-f01a9b8fe22b.svg",alt:""}),(0,a.jsx)("img",{style:A()(A()({},ee),kt),src:"https://gw.alipayobjects.com/zos/bmw-prod/84ad805a-74cb-4916-b7ba-9cdc2bdec23a.svg",alt:""})]}),(0,a.jsxs)("div",{style:{transition:"all ".concat(r.motionDurationSlow),opacity:!S||!E?1:0},children:[(0,a.jsx)("img",{style:A()(A()({},ee),{},{left:0,top:-100,height:500}),src:"https://gw.alipayobjects.com/zos/bmw-prod/a213184a-f212-4afb-beec-1e8b36bb4b8a.svg",alt:""}),(0,a.jsx)("img",{style:A()(A()({},ee),{},{right:0,bottom:-100,height:287}),src:"https://gw.alipayobjects.com/zos/bmw-prod/bb74a2fb-bff1-4d0d-8c2d-2ade0cd9bb0d.svg",alt:""})]}),(0,a.jsx)(Jr,{isLight:S,colorPrimary:k})]}),children:wt})}}}]);