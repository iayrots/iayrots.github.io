"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"Introducing chat",description:"Send and receive chat messages in a meeting.",sidebar_position:1,tags:["mobile-core","chat"]},s="Introducing chat",l={unversionedId:"chat/introduction",id:"chat/introduction",title:"Introducing chat",description:"Send and receive chat messages in a meeting.",source:"@site/docs/android-core/chat/introduction.mdx",sourceDirName:"chat",slug:"/chat/introduction",permalink:"/android-core/chat/introduction",draft:!1,tags:[{label:"mobile-core",permalink:"/android-core/tags/mobile-core"},{label:"chat",permalink:"/android-core/tags/chat"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:1,frontMatter:{title:"Introducing chat",description:"Send and receive chat messages in a meeting.",sidebar_position:1,tags:["mobile-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Room Connection Events",permalink:"/android-core/room/room-connection-events"},next:{title:"Sending a chat message",permalink:"/android-core/chat/sending-a-chat-message"}},p={},u=[],d={toc:u};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introducing-chat"},"Introducing chat"),(0,r.kt)("p",null,"The meeting chat object is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat"),", which has methods for\nsending and receiving messages. There are 3 types of messages that can be sent\nin chat - text messages, images, and files."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat.messages")," array contains all the messages that have been sent\nin the chat. This is an array of objects, where each object is of type\n",(0,r.kt)("inlineCode",{parentName:"p"},"DyteChatMessage"),"."),(0,r.kt)("p",null,"We support three types of chat messages, they are as follows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Text Message"),(0,r.kt)("li",{parentName:"ul"},"Image Message"),(0,r.kt)("li",{parentName:"ul"},"File Message")),(0,r.kt)("p",null,"All above objects are of type ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteChatMessage")," along with their own class\nvariables."))}f.isMDXComponent=!0}}]);