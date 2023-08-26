"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[88352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,f=g["".concat(c,".").concat(d)]||g[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},81151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Introducing chat",description:"Send and receive chat messages in a meeting.",sidebar_position:1,tags:["web-core","chat"]},c="Introducing chat",l={unversionedId:"chat/introduction",id:"chat/introduction",title:"Introducing chat",description:"Send and receive chat messages in a meeting.",source:"@site/docs/react-web-core/chat/introduction.mdx",sourceDirName:"chat",slug:"/chat/introduction",permalink:"/react-web-core/chat/introduction",draft:!1,tags:[{label:"web-core",permalink:"/react-web-core/tags/web-core"},{label:"chat",permalink:"/react-web-core/tags/chat"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:1,frontMatter:{title:"Introducing chat",description:"Send and receive chat messages in a meeting.",sidebar_position:1,tags:["web-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Participant Events",permalink:"/react-web-core/participants/events"},next:{title:"Sending a chat message",permalink:"/react-web-core/chat/sending-a-chat-message"}},p={},u=[],g={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introducing-chat"},"Introducing chat"),(0,r.kt)("p",null,"The meeting chat object is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat"),", which has methods for\nsending and receiving messages. There are 3 types of messages that can be sent\nin chat - text messages, images, and files."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.chat.messages")," array contains all the messages that have been sent\nin the chat. This is an array of objects, where each object is of type\n",(0,r.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,r.kt)("p",null,"The type ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," is defined in the following manner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface BaseMessage<T extends MessageType> {\n  type: T;\n  userId: string;\n  displayName: string;\n  time: Date;\n  id: string;\n  isEdited?: boolean;\n  read?: boolean;\n  pluginId?: string;\n  pinned?: boolean;\n  targetUserIds?: string[];\n}\n\ninterface TextMessage extends BaseMessage<MessageType.text> {\n  message: string;\n}\n\ninterface ImageMessage extends BaseMessage<MessageType.image> {\n  link: string;\n}\n\ninterface FileMessage extends BaseMessage<MessageType.file> {\n  name: string;\n  size: number;\n  link: string;\n}\n\ntype Message = TextMessage | ImageMessage | FileMessage;\n")))}d.isMDXComponent=!0}}]);