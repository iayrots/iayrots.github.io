"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[21752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),g=p(n),c=l,s=g["".concat(o,".").concat(c)]||g[c]||m[c]||r;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const u={sidebar_position:12,web_core_version:"1.2.0"},o=void 0,p={unversionedId:"reference/DytePlugin",id:"reference/DytePlugin",title:"DytePlugin",description:"The DytePlugin module represents a single plugin in the meeting. A plugin can be",source:"@site/docs/web-core/reference/DytePlugin.md",sourceDirName:"reference",slug:"/reference/DytePlugin",permalink:"/web-core/reference/DytePlugin",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:12,frontMatter:{sidebar_position:12,web_core_version:"1.2.0"},sidebar:"tutorialSidebar",previous:{title:"DyteLivestream",permalink:"/web-core/reference/DyteLivestream"},next:{title:"DyteThemePreset",permalink:"/web-core/reference/DyteThemePreset"}},d={},m=[{value:"plugin.sendIframeEvent(message)",id:"pluginsendiframeeventmessage",level:3},{value:"plugin.sendData(payload)",id:"pluginsenddatapayload",level:3},{value:"plugin.removePluginView(viewId)",id:"pluginremovepluginviewviewid",level:3},{value:"plugin.addPluginView(iframe, viewId)",id:"pluginaddpluginviewiframe-viewid",level:3},{value:"plugin.activateForSelf()",id:"pluginactivateforself",level:3},{value:"plugin.deactivateForSelf()",id:"plugindeactivateforself",level:3},{value:"<del>plugin.enable()</del>",id:"pluginenable",level:3},{value:"<del>plugin.disable()</del>",id:"plugindisable",level:3},{value:"plugin.activate()",id:"pluginactivate",level:3},{value:"plugin.deactivate()",id:"plugindeactivate",level:3}],g={toc:m};function c(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"module_DytePlugin"}),(0,a.kt)("p",null,"The DytePlugin module represents a single plugin in the meeting. A plugin can be\nobtained from one of the plugin arrays in ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.plugins"),". For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const plugin1 = meeting.plugins.active.get(pluginId);\nconst plugin2 = meeting.plugins.all.get(pluginId);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin"},"DytePlugin"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin+sendIframeEvent"},".sendIframeEvent(message)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin+sendData"},".sendData(payload)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin+removePluginView"},".removePluginView(viewId)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin+addPluginView"},".addPluginView(iframe, viewId)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin+activateForSelf"},".activateForSelf()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin+deactivateForSelf"},".deactivateForSelf()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},(0,a.kt)("a",{parentName:"del",href:"#module_DytePlugin+enable"},".enable()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},(0,a.kt)("a",{parentName:"del",href:"#module_DytePlugin+disable"},".disable()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin+activate"},".activate()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_DytePlugin+deactivate"},".deactivate()"))))),(0,a.kt)("a",{name:"module_DytePlugin+sendIframeEvent"}),(0,a.kt)("h3",{id:"pluginsendiframeeventmessage"},"plugin.sendIframeEvent(message)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},"Socket message forwarded to this plugin.")))),(0,a.kt)("a",{name:"module_DytePlugin+sendData"}),(0,a.kt)("h3",{id:"pluginsenddatapayload"},"plugin.sendData(payload)"),(0,a.kt)("p",null,"This method is used to send arbitrary data to the plugin."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payload"),(0,a.kt)("td",{parentName:"tr",align:null},"The payload that you want to send inside the plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payload.eventName"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the event. This is used to listen for the event in plugin SDK.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payload.data"),(0,a.kt)("td",{parentName:"tr",align:null},"Data you wish to emit. It can assume any data type.")))),(0,a.kt)("a",{name:"module_DytePlugin+removePluginView"}),(0,a.kt)("h3",{id:"pluginremovepluginviewviewid"},"plugin.removePluginView(viewId)"),(0,a.kt)("p",null,"This method is used for cleaning up event listeners attached to an iframe. It\nmust be used before the iframe is removed from the DOM."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"viewId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"default")),(0,a.kt)("td",{parentName:"tr",align:null},"ID of the view corresponding to this iframe. Default is 'default'.")))),(0,a.kt)("a",{name:"module_DytePlugin+addPluginView"}),(0,a.kt)("h3",{id:"pluginaddpluginviewiframe-viewid"},"plugin.addPluginView(iframe, viewId)"),(0,a.kt)("p",null,"This method adds the communication layer between the plugin inside the iframe and\nthe core application (meeting object) in the main window."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iframe"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Iframe element to display this plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"viewId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"default")),(0,a.kt)("td",{parentName:"tr",align:null},"ID of the view corresponding to this iframe. Default is 'default'.")))),(0,a.kt)("a",{name:"module_DytePlugin+activateForSelf"}),(0,a.kt)("h3",{id:"pluginactivateforself"},"plugin.activateForSelf()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin")),"  "),(0,a.kt)("a",{name:"module_DytePlugin+deactivateForSelf"}),(0,a.kt)("h3",{id:"plugindeactivateforself"},"plugin.deactivateForSelf()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin")),"  "),(0,a.kt)("a",{name:"module_DytePlugin+enable"}),(0,a.kt)("h3",{id:"pluginenable"},(0,a.kt)("del",{parentName:"h3"},"plugin.enable()")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Deprecated"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin")),"  "),(0,a.kt)("a",{name:"module_DytePlugin+disable"}),(0,a.kt)("h3",{id:"plugindisable"},(0,a.kt)("del",{parentName:"h3"},"plugin.disable()")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Deprecated"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin")),"  "),(0,a.kt)("a",{name:"module_DytePlugin+activate"}),(0,a.kt)("h3",{id:"pluginactivate"},"plugin.activate()"),(0,a.kt)("p",null,"Activate this plugin for all participants."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin")),"  "),(0,a.kt)("a",{name:"module_DytePlugin+deactivate"}),(0,a.kt)("h3",{id:"plugindeactivate"},"plugin.deactivate()"),(0,a.kt)("p",null,"Deactivate this plugin for all participants."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,a.kt)("code",null,"DytePlugin"))))}c.isMDXComponent=!0}}]);