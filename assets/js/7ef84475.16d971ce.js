"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[26314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,g=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45086:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",sidebar_position:3,tags:["flutter-core","chat"]},i="Receive a Chat Message",l={unversionedId:"chat/receiving-chat-messages",id:"chat/receiving-chat-messages",title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",source:"@site/docs/flutter-core/chat/receiving-chat-messages.mdx",sourceDirName:"chat",slug:"/chat/receiving-chat-messages",permalink:"/flutter-core/chat/receiving-chat-messages",draft:!1,tags:[{label:"flutter-core",permalink:"/flutter-core/tags/flutter-core"},{label:"chat",permalink:"/flutter-core/tags/chat"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:3,frontMatter:{title:"Receiving chat messages",description:"Receive chat messages that has been sent in a meeting.",sidebar_position:3,tags:["flutter-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Sending a chat message",permalink:"/flutter-core/chat/sending-a-chat-message"},next:{title:"Introduction",permalink:"/flutter-core/livestream/introduction"}},p={},u=[],f={toc:u};function m(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"receive-a-chat-message"},"Receive a Chat Message"),(0,n.kt)("p",null,"To receive chat messages, implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"onChatUpdates(...)")," method from callback ",(0,n.kt)("inlineCode",{parentName:"p"},"DyteChatEventsListener"),". You can subscribe to these events by calling the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"\nclass ChatEventsListener with DyteChatEventsListener {\n\n  ...\n\n  @override\n  void onChatUpdates(List<DyteChatMessage> messages) {\n        // your code to handle new chat message\n  }\n\n  void onNewChatMessage(DyteChatMessage message) {\n      // your code to handle new chat message\n  }\n  ...\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"dyteClient.addChatEventsListener(ChatEventsListener());\n")),(0,n.kt)("p",null,"In this context, ",(0,n.kt)("inlineCode",{parentName:"p"},"messages")," refers to a list of all the chat messages in the meeting. The type of message used is ",(0,n.kt)("inlineCode",{parentName:"p"},"DyteChatMessage"),", which was introduced earlier in the ",(0,n.kt)("a",{parentName:"p",href:"/flutter-core/chat/introduction"},"introduction")," to Chat topic."),(0,n.kt)("p",null,"Whenever a chat message is received, the ",(0,n.kt)("inlineCode",{parentName:"p"},"dyteClient.chat.messages")," list is automatically updated."))}m.isMDXComponent=!0}}]);