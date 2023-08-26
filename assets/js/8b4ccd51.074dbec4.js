"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[6111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Frequently Asked Questions",sidebar_position:7},u=void 0,c={unversionedId:"frequently-asked-questions",id:"frequently-asked-questions",title:"Frequently Asked Questions",description:"Here are some frequently asked questions about the Plugin SDK.",source:"@site/docs/plugin-sdk/frequently-asked-questions.mdx",sourceDirName:".",slug:"/frequently-asked-questions",permalink:"/plugin-sdk/frequently-asked-questions",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:7,frontMatter:{title:"Frequently Asked Questions",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Exchange data between plugin and meeting",permalink:"/plugin-sdk/guides/exchange-data-between-plugin-and-meeting"}},s={},p=[],d={toc:p};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here are some frequently asked questions about the Plugin SDK."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"What is the difference between ",(0,r.kt)("code",null,"DytePlugin.init()")," and ",(0,r.kt)("code",null,"DytePlugin.ready()"),"?"),(0,r.kt)("p",null,(0,r.kt)("code",null,"plugin.init()")," is called to initialise the plugin and ",(0,r.kt)("code",null,"plugin.ready()")," is called when the plugin is ready to emit and receive events from the client app. ",(0,r.kt)("b",null,"Usually these events occur one after the other and the user need not manually call ",(0,r.kt)("code",null,"plugin.ready()")),"."),(0,r.kt)("p",null,(0,r.kt)("code",null,"plugin.ready()")," can be manually used to control when this communication starts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import DytePlugin from "@dytesdk/plugin-sdk";\n...\nconst plugin = await DytePlugin.init({ready: false});\n\n// .. do something\n\nplugin.ready();\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"When are participant related events fired?"),(0,r.kt)("p",null,"Peer events like ",(0,r.kt)("code",null,"peerLeft")," and ",(0,r.kt)("code",null,"peerJoined")," are only fired for when another participant leaves/joins the meeting, not for the current user."),(0,r.kt)("p",null,"These events can be called like so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import DytePlugin from \"@dytesdk/plugin-sdk\";\n...\nconst plugin = await DytePlugin.init();\n\nplugin.on('peerJoined', (peer) => {\n    console.log(peer);\n});\n\nplugin.on('peerLeft', (peer) => {\n    console.log(peer);\n});\n"))))}f.isMDXComponent=!0}}]);