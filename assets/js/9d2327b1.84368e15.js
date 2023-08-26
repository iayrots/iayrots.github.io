"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[65556],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||l;return t?i.createElement(m,a(a({ref:n},s),{},{components:t})):i.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});t(67294);var i=t(3905);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={title:"Plugins",description:"Interact with plugins in a meeting.",sidebar_position:8,tags:["mobile-core","plugins"]},c="Plugins",u={unversionedId:"plugins",id:"plugins",title:"Plugins",description:"Interact with plugins in a meeting.",source:"@site/docs/ios-core/plugins.mdx",sourceDirName:".",slug:"/plugins",permalink:"/ios-core/plugins",draft:!1,tags:[{label:"mobile-core",permalink:"/ios-core/tags/mobile-core"},{label:"plugins",permalink:"/ios-core/tags/plugins"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:8,frontMatter:{title:"Plugins",description:"Interact with plugins in a meeting.",sidebar_position:8,tags:["mobile-core","plugins"]},sidebar:"tutorialSidebar",previous:{title:"Voting on a poll",permalink:"/ios-core/polls/voting-on-a-poll"},next:{title:"Join and Leave Stage using Dyte's Webinar Platform",permalink:"/ios-core/webinar/introduction"}},s={},p=[{value:"Playing with plugins",id:"playing-with-plugins",level:2},{value:"Active plugin",id:"active-plugin",level:2},{value:"Listening to plugins in a meeting",id:"listening-to-plugins-in-a-meeting",level:2}],g={toc:p};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,i.kt)("wrapper",l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){r(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"The meetings plugins can be accessed using ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.plugins"),". It provides two\nmain objects, ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," which contains list of all Plugin objects in a\n",(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting"),". And ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," list which contains plugins which are enabled and\nare currently being used in this meeting."),(0,i.kt)("h2",{id:"playing-with-plugins"},"Playing with plugins"),(0,i.kt)("p",null,"Plugins are webviews which can be added in any view. To be able to get webview\nfrom DytePlugin one needs to first acivate a plugin. To do that all we need to\ndo is call ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.active()")," which will trigger a callback in\n",(0,i.kt)("inlineCode",{parentName:"p"},"onPluginActivated()"),". Similarly to deactivate a plugin one can call\n",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.deactivate()")," and that plugin will be deactivated in the meeting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"plugin.activate() // to activate a plugin\nplugin.deactivate()   // to deactivate a plugin\n")),(0,i.kt)("h2",{id:"active-plugin"},"Active plugin"),(0,i.kt)("p",null,"To check if a ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," is active or not in a meeting one can use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let isActive = plugin.isActive\n")),(0,i.kt)("h2",{id:"listening-to-plugins-in-a-meeting"},"Listening to plugins in a meeting"),(0,i.kt)("p",null,"To be able to listen to plugin events you need to implement a methods from\ncallback ",(0,i.kt)("inlineCode",{parentName:"p"},"DytePluginEventsListener"),". You can subscribe to these events by calling\n",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.addPluginEventsListener(dytePluginEventsListener: listener)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"extension MeetingViewModel: DytePluginEventsListener {\n\n  func onPluginActivated(plugin: DytePlugin) {\n    // your code to handle plugin activation\n  }\n\n  func onPluginDeactivated(plugin: DytePlugin) {\n    // your code to handle plugin de-activation\n  }\n\n  func onPluginFileRequest(plugin: DytePlugin) {\n    // your code to handle plugin file request\n  }\n\n  func onPluginMessage(message: [String : Kotlinx_serialization_jsonJsonElement]) {\n    // your code to handle plugin message\n  }\n}\n")))}d.isMDXComponent=!0}}]);