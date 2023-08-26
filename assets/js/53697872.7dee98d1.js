"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[58196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),v=a,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Livestreaming: Properties, Functions, and Events",sidebar_position:7},l=void 0,p={unversionedId:"livestreaming/livestream-apis",id:"livestreaming/livestream-apis",title:"Livestreaming: Properties, Functions, and Events",description:"This topic talks about how you can use livestreaming properties, events, and functions.",source:"@site/docs/react-web-core/livestreaming/livestream-apis.mdx",sourceDirName:"livestreaming",slug:"/livestreaming/livestream-apis",permalink:"/react-web-core/livestreaming/livestream-apis",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:7,frontMatter:{title:"Livestreaming: Properties, Functions, and Events",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Livestreaming State Management APIs",permalink:"/react-web-core/livestreaming/state-management-apis"},next:{title:"Debug System Error Codes",permalink:"/react-web-core/error-codes/error-code"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Start Livestream",id:"start-livestream",level:3},{value:"Stop Livestream",id:"stop-livestream",level:3},{value:"Events",id:"events",level:2}],m={toc:u};function v(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This topic talks about how you can use livestreaming properties, events, and functions."),(0,n.kt)("p",null,"Livestreaming is often used for events, such as concerts, conferences, and sports games, as well as for online classes, gaming, and social media platforms. It allows remote viewers to participate in the event or experience, interact with the content creators or other viewers via chat, comments, or reactions, and participate in the real-time conversation."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"playbackUrl"),": This URL allows you to watch the live video stream. It is the location of the video file and can be accessed by a HLS/LHLS player."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"status"),": The current status of the livestream. This field can assume the following values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LIVE"),(0,n.kt)("li",{parentName:"ul"},"OFFLINE"),(0,n.kt)("li",{parentName:"ul"},"ERRORED")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"viewerCount"),": The number of people viewing the livestream."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("p",null,"Use the following methods to start and stop the livestreaming."),(0,n.kt)("h3",{id:"start-livestream"},"Start Livestream"),(0,n.kt)("p",null,"Users with the permission ",(0,n.kt)("inlineCode",{parentName:"p"},"canLivestream")," set to true can start a livestream."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"await meeting.livestream.start();")),(0,n.kt)("h3",{id:"stop-livestream"},"Stop Livestream"),(0,n.kt)("p",null,"Users with the permission ",(0,n.kt)("inlineCode",{parentName:"p"},"canLivestream")," set to true can stop a livestream."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"await meeting.livestream.stop();")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("p",null,"Here is a list of events that the ",(0,n.kt)("inlineCode",{parentName:"p"},"meeting.livestream")," module emits:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Event")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"livestreamUpdate")),(0,n.kt)("td",{parentName:"tr",align:null},"This event is triggered when the state of the livestream changes, specifically when it is started or stopped.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"viewerCountUpdate")),(0,n.kt)("td",{parentName:"tr",align:null},"Emitted when a new viewer joins or a viewer leaves the livestream.")))))}v.isMDXComponent=!0}}]);