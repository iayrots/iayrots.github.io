"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[89619],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(t),b=i,d=g["".concat(u,".").concat(b)]||g[b]||s[b]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>s});t(67294);var r=t(3905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={title:"Functions to enable plugins",description:"Methods on a plugin in a meeting.",sidebar_position:2,tags:["web-core","plugins"]},u="Functions to enable plugins",p={unversionedId:"plugins/enable-plugin",id:"plugins/enable-plugin",title:"Functions to enable plugins",description:"Methods on a plugin in a meeting.",source:"@site/docs/react-web-core/plugins/enable-plugin.mdx",sourceDirName:"plugins",slug:"/plugins/enable-plugin",permalink:"/react-web-core/plugins/enable-plugin",draft:!1,tags:[{label:"web-core",permalink:"/react-web-core/tags/web-core"},{label:"plugins",permalink:"/react-web-core/tags/plugins"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:2,frontMatter:{title:"Functions to enable plugins",description:"Methods on a plugin in a meeting.",sidebar_position:2,tags:["web-core","plugins"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-web-core/plugins/introduction"},next:{title:"Functions to disable plugins",permalink:"/react-web-core/plugins/disable-plugin"}},c={},s=[{value:"Add Plugin View",id:"add-plugin-view",level:3},{value:"Activate Plugins",id:"activate-plugins",level:3},{value:"<del>Enable Plugins</del>",id:"enable-plugins",level:3}],g={toc:s};function b(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functions-to-enable-plugins"},"Functions to enable plugins"),(0,r.kt)("p",null,"Each plugin in ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.plugins")," object is of type\n",(0,r.kt)("a",{parentName:"p",href:"./introduction"},(0,r.kt)("inlineCode",{parentName:"a"},"DytePlugin"))," and exposes the following functions to enable\nplugins."),(0,r.kt)("h3",{id:"add-plugin-view"},"Add Plugin View"),(0,r.kt)("p",null,"This method adds the communication layer between the plugin inside the iframe and\nthe core application (meeting object) in the main window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const plugins = meeting.plugins.all.toArray();\n\nplugins.forEach(async (plugin: DytePlugin) => {\n  const iframe = document.createElement('iframe');\n  await plugin.addPluginView(iframe);\n});\n")),(0,r.kt)("h3",{id:"activate-plugins"},"Activate Plugins"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"activate()")," method activates a plugin for all users in the meeting. When\nyou activate a plugin, it moves into the active plugins map and can be accessed\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.plugins.active"),"."),(0,r.kt)("p",null,"The snippet below displays all plugins and activates a plugin on click."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const plugins = meeting.plugins.all.toArray();\n\nplugins.forEach((plugin: DytePlugin) => {\n  const button = document.createElement('button');\n  button.innerText = plugin.name;\n  button.onclick = async () => {\n    await plugin.activate();\n  };\n  document.body.appendChild(button);\n});\n")),(0,r.kt)("p",null,"Here is another way you can activate a plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const plugins = meeting.plugins.all.toArray();\nconst plugin = plugins.find((p) => p.name === 'YouTube');\n\nawait plugin?.activate();\n")),(0,r.kt)("h3",{id:"enable-plugins"},(0,r.kt)("del",{parentName:"h3"},"Enable Plugins")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Deprecated"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"enable()")," method enables a plugin for the current user. This does not\naffect other users in the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const plugins = meeting.plugins.all.toArray();\nconst plugin = plugins.find((p) => p.name === 'YouTube');\n\nawait plugin?.enable();\n")))}b.isMDXComponent=!0}}]);