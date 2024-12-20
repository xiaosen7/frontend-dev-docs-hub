(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{3914:function(n,s){n.exports={content:["article",["p","Except ",["a",{title:null,href:"/docs/react/customize-theme"},"less customize theme"],", We also provide CSS Variable version to enable dynamic theme. You can check on ",["a",{title:null,href:"/components/config-provider/#components-config-provider-demo-theme"},"ConfigProvider"]," demo."],["h2","Caveats"],["ul",["li",["p","This function depends on CSS Variables. Please check the ",["a",{title:null,href:"https://caniuse.com/css-variables"},"browser compatibility"],"."]],["li",["p","This function requires at least ",["code","antd@4.17.0-alpha.0"],"."]]],["h2","How to use"],["h3","Import antd.variable.min.css"],["p","Replace your import style file with CSS Variable version:"],["pre",{lang:"diff",highlighted:`<span class="token deleted">-- import 'antd/dist/antd.min.css';</span>
<span class="token inserted">++ import 'antd/dist/antd.variable.min.css';</span>`},["code",`-- import 'antd/dist/antd.min.css';
++ import 'antd/dist/antd.variable.min.css';`]],["p","Note: You need remove ",["code","babel-plugin-import"]," for the dynamic theme."],["h3","Static config"],["p","Call ConfigProvider static function to modify theme color:"],["pre",{lang:"ts",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token punctuation">:</span> <span class="token string">'#25b864'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});`]],["h2","Conflict resolve"],["p","CSS Variable use ",["code","--ant"]," prefix by default. When exist multiple antd style file in your project, you can modify prefix to fix it."],["h3","Adjust"],["p","Modify ",["code","prefixCls"]," on the root of ConfigProvider:"],["pre",{lang:"tsx",highlighted:`import { ConfigProvider } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>ConfigProvider prefixCls<span class="token operator">=</span><span class="token string">"custom"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>MyApp <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ConfigProvider<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`},["code",`import { ConfigProvider } from 'antd';

export default () => (
  <ConfigProvider prefixCls="custom">
    <MyApp />
  </ConfigProvider>
);`]],["p","Also need call the static function to modify ",["code","prefixCls"],":"],["pre",{lang:"ts",highlighted:`ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token punctuation">:</span> <span class="token string">'custom'</span><span class="token punctuation">,</span>
  theme<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token punctuation">:</span> <span class="token string">'#25b864'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`ConfigProvider.config({
  prefixCls: 'custom',
  theme: {
    primaryColor: '#25b864',
  },
});`]],["h3","Compile less"],["p","Since prefix modified. Origin ",["code","antd.variable.css"]," should also be replaced:"],["pre",{lang:"bash",highlighted:'lessc --js --modify-var<span class="token operator">=</span><span class="token string">"ant-prefix=custom"</span> antd/dist/antd.variable.less modified.css'},["code",'lessc --js --modify-var="ant-prefix=custom" antd/dist/antd.variable.less modified.css']],["h3","Related changes"],["p","In order to implement CSS Variable and maintain original usage compatibility, we added ",["code","@root-entry-name: xxx;"]," entry injection to the ",["code","dist/antd.xxx.less"]," file to support less dynamic loading of the corresponding less file. Under normal circumstances, you do not need to pay attention to this change. However, if your project directly references the less file in the ",["code","lib|es"]," directory. You need to configure ",["code","@root-entry-name: default;"]," (or ",["code","@root-entry-name: variable;"],") at the entry of less so that less can find the correct entry."],["p","In addition, we migrated ",["code","@import'motion'"]," and ",["code","@import'reset'"]," in ",["code","lib|es/style/minxins/index.less"]," to ",["code","lib|es/style/themes/xxx.less"]," In, because these two files rely on theme-related variables. If you use the relevant internal method, please adjust it yourself. Of course, we still recommend using the ",["code","antd.less"]," files in the ",["code","dist"]," directory directly instead of calling internal files, because they are often affected by refactoring."]],meta:{order:7.1,title:"Dynamic Theme (Experimental)",filename:"docs/react/customize-theme-variable.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Caveats",title:"Caveats"},"Caveats"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-to-use",title:"How to use"},"How to use"]],["li",["a",{className:"bisheng-toc-h2",href:"#Conflict-resolve",title:"Conflict resolve"},"Conflict resolve"]]]}}}]);
