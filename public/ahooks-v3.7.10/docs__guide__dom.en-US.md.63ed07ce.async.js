(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{hrVf:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),o=n("cZeB"),r=n("rHj7"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"hooks-of-dom-specification"},l.a.createElement(o["AnchorLink"],{to:"#hooks-of-dom-specification","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Hooks of DOM specification"),l.a.createElement("p",null,"Most of the DOM Hooks will receive the ",l.a.createElement("code",null,"target")," parameter, which indicates the element to be processed."),l.a.createElement("p",null,l.a.createElement("code",null,"target")," supports three types ",l.a.createElement("code",null,"React.MutableRefObject"),", ",l.a.createElement("code",null,"HTMLElement"),", ",l.a.createElement("code",null,"() => HTMLElement"),"."),l.a.createElement("ol",null,l.a.createElement("li",null,"Support ",l.a.createElement("code",null,"React.MutableRefObject"))),l.a.createElement(r["a"],{code:"export default () => {\n  const ref = useRef(null);\n  const isHovering = useHover(ref);\n  return <div ref={ref}>{isHovering ? 'hover' : 'leaveHover'}</div>;\n};",lang:"ts"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"Support ",l.a.createElement("code",null,"HTMLElement"))),l.a.createElement(r["a"],{code:"export default () => {\n  const isHovering = useHover(document.getElementById('test'));\n  return <div id=\"test\">{isHovering ? 'hover' : 'leaveHover'}</div>;\n};",lang:"ts"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"Support ",l.a.createElement("code",null,"() => HTMLElement"),", generally applicable in SSR scenarios")),l.a.createElement(r["a"],{code:"export default () => {\n  const isHovering = useHover(() => document.getElementById('test'));\n  return <div id=\"test\">{isHovering ? 'hover' : 'leaveHover'}</div>;\n};",lang:"ts"}),l.a.createElement("p",null,"In addition, ",l.a.createElement("strong",null,"the ",l.a.createElement("code",null,"target")," of DOM Hooks supports dynamic changes"),". for example:"),l.a.createElement(r["a"],{code:"export default () => {\n  const [boolean, { toggle }] = useBoolean();\n\n  const ref = useRef(null);\n  const ref2 = useRef(null);\n\n  const isHovering = useHover(boolean ? ref : ref2);\n  return (\n    <>\n      <div ref={ref}>{isHovering ? 'hover' : 'leaveHover'}</div>\n      <div ref={ref2}>{isHovering ? 'hover' : 'leaveHover'}</div>\n    </>\n  );\n};",lang:"ts"})))}));t["default"]=e=>{var t=l.a.useContext(o["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:n})}}}]);