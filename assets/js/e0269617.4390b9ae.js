"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[75544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,v=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return r?a.createElement(v,i(i({ref:t},m),{},{components:r})):a.createElement(v,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={title:"Livestream objects & methods",description:"Livestream object containing all livestream related data and methods.",sidebar_position:2,tags:["android-core","livestream"]},s=void 0,c={unversionedId:"livestream/dyte-livestream-object",id:"livestream/dyte-livestream-object",title:"Livestream objects & methods",description:"Livestream object containing all livestream related data and methods.",source:"@site/docs/android-core/livestream/dyte-livestream-object.mdx",sourceDirName:"livestream",slug:"/livestream/dyte-livestream-object",permalink:"/android-core/livestream/dyte-livestream-object",draft:!1,tags:[{label:"android-core",permalink:"/android-core/tags/android-core"},{label:"livestream",permalink:"/android-core/tags/livestream"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:2,frontMatter:{title:"Livestream objects & methods",description:"Livestream object containing all livestream related data and methods.",sidebar_position:2,tags:["android-core","livestream"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/android-core/livestream/introduction"},next:{title:"Livestream event listeners",permalink:"/android-core/livestream/dyte-livestream-listener"}},m={},u=[{value:"Objects",id:"objects",level:2},{value:"roomName String",id:"roomname-string",level:3},{value:"state LiveStreamState",id:"state-livestreamstate",level:3},{value:"stage requests List<DyteLiveStreamStageRequestPeer>",id:"stage-requests-listdytelivestreamstagerequestpeer",level:3},{value:"liveStreamUrl String",id:"livestreamurl-string",level:3},{value:"<strong>Host Controls Methods</strong>",id:"host-controls-methods",level:2},{value:"Accept request",id:"accept-request",level:3},{value:"Reject request",id:"reject-request",level:3},{value:"Accept all requests",id:"accept-all-requests",level:3},{value:"Reject all requests",id:"reject-all-requests",level:3}],p={toc:u};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DyteLivestream")," object obtained by ",(0,a.kt)("inlineCode",{parentName:"p"},"dyteMobileClient.livestream")," method. The objects and methods it contains are defined below."),(0,a.kt)("h2",{id:"objects"},"Objects"),(0,a.kt)("h3",{id:"roomname-string"},"roomName ","[",(0,a.kt)("em",{parentName:"h3"},"String"),"]"),(0,a.kt)("p",null,"The name of the room.",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"state-livestreamstate"},"state ","[",(0,a.kt)("em",{parentName:"h3"},"LiveStreamState"),"]"),(0,a.kt)("p",null,"The current status of the livestream, possible values can be: ",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LiveStreamState.NONE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LiveStreamState.STARTING")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LiveStreamState.STARTED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LiveStreamState.STOPPING")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LiveStreamState.STOPPED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LiveStreamState.ERRORED"))),(0,a.kt)("h3",{id:"stage-requests-listdytelivestreamstagerequestpeer"},"stage requests ","[",(0,a.kt)("em",{parentName:"h3"},(0,a.kt)("em",{parentName:"em"},"List","<","DyteLiveStreamStageRequestPeer",">")),"]"),(0,a.kt)("p",null,"object accessed via ",(0,a.kt)("inlineCode",{parentName:"p"},"dyteMobileClient.livestream.stageRequestPeers")," contains the list of requests to join the stage. Each request contains 3 properties:",(0,a.kt)("br",null)),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"peerId"),": ","[",(0,a.kt)("em",{parentName:"li"},"String"),"]"," The peerId of the user who requested to join the stage."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"userId"),": ","[",(0,a.kt)("em",{parentName:"li"},"String"),"]"," The userId of the user who requested to join the stage."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"displayName"),": ","[",(0,a.kt)("em",{parentName:"li"},"String"),"]"," The display name of the user who requested to join the stage.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("h3",{id:"livestreamurl-string"},"liveStreamUrl ","[",(0,a.kt)("em",{parentName:"h3"},"String"),"]"),(0,a.kt)("p",null,"List of URL which can be used to consume livestream."),(0,a.kt)("h2",{id:"host-controls-methods"},(0,a.kt)("strong",{parentName:"h2"},"Host Controls Methods")),(0,a.kt)("p",null,"Dyte\u2019s stage management APIs allow hosts to receive and manage stage requests as well as leave and join the stage."),(0,a.kt)("h3",{id:"accept-request"},"Accept request"),(0,a.kt)("p",null,"This method lets the host accept a request to join the stage. It takes the ",(0,a.kt)("em",{parentName:"p"},"DyteLiveStreamStageRequestPeer.id")," as an argument whose request has to be accepted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"dyteMobileClient.livestream.acceptRequest(peer.id);\n")),(0,a.kt)("h3",{id:"reject-request"},"Reject request"),(0,a.kt)("p",null,"This method lets the host reject a request to join the stage. It takes the ",(0,a.kt)("em",{parentName:"p"},"DyteLiveStreamStageRequestPeer.id")," as an argument whose request has to be rejected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"dyteMobileClient.livestream.rejectRequest(peer.id);\n")),(0,a.kt)("h3",{id:"accept-all-requests"},"Accept all requests"),(0,a.kt)("p",null,"This method lets the host accept all the requests to join the stage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"dyteMobileClient.livestream.acceptAll();\n")),(0,a.kt)("h3",{id:"reject-all-requests"},"Reject all requests"),(0,a.kt)("p",null,"This method lets the host reject all the requests to join the stage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"dyteMobileClient.livestream.rejectAll();\n")))}d.isMDXComponent=!0}}]);