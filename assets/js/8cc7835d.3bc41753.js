"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[47363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=i,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={sidebar_position:3},c="Meetings",l={unversionedId:"meetings",id:"meetings",title:"Meetings",description:"The CLI allows you to perform some basic functions with meetings, including",source:"@site/docs/cli/meetings.mdx",sourceDirName:".",slug:"/meetings",permalink:"/cli/meetings",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/cli/getting-started"},next:{title:"Recordings",permalink:"/cli/recording"}},p={},u=[{value:"Creating a meeting",id:"creating-a-meeting",level:2},{value:"Viewing a meeting&#39;s sessions",id:"viewing-a-meetings-sessions",level:2}],g={toc:u};function m(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meetings"},"Meetings"),(0,r.kt)("p",null,"The CLI allows you to perform some basic functions with meetings, including\ncreating a meeting and viewing its sessions."),(0,r.kt)("p",null,"More functionality will make its way here soon."),(0,r.kt)("h2",{id:"creating-a-meeting"},"Creating a meeting"),(0,r.kt)("p",null,"Creating a meeting is as simple as running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dyte meetings create\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cli-meetings-create",src:n(30214).Z+"#terminal",width:"1124",height:"674"})," ",(0,r.kt)("em",{parentName:"p"},"Creating a\nmeeting")),(0,r.kt)("h2",{id:"viewing-a-meetings-sessions"},"Viewing a meeting's sessions"),(0,r.kt)("p",null,"You can view a meeting's sessions by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dyte meetings info\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cli-meetings-info",src:n(85288).Z,width:"2596",height:"294"})," ",(0,r.kt)("em",{parentName:"p"},"Viewing meeting info")))}m.isMDXComponent=!0},30214:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cli-meetings-create-dcd356021f8c575bb8df36c2f25fbe57.png"},85288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cli-meetings-info-9575b9e418cb6073816463c54894ef30.png"}}]);