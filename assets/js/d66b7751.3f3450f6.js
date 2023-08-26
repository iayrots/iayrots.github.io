"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[90998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>d});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Recording",description:"Control recordings in a meeting.",sidebar_position:9,tags:["rn-core","recording"]},l="Recording",p={unversionedId:"recording",id:"recording",title:"Recording",description:"Control recordings in a meeting.",source:"@site/docs/rn-core/recording.mdx",sourceDirName:".",slug:"/recording",permalink:"/rn-core/recording",draft:!1,tags:[{label:"rn-core",permalink:"/rn-core/tags/rn-core"},{label:"recording",permalink:"/rn-core/tags/recording"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:9,frontMatter:{title:"Recording",description:"Control recordings in a meeting.",sidebar_position:9,tags:["rn-core","recording"]},sidebar:"tutorialSidebar",previous:{title:"Other methods",permalink:"/rn-core/plugins/extra"},next:{title:"Livestreaming Stage Management APIs",permalink:"/rn-core/livestreaming/state-management-apis"}},s={},d=[{value:"Start a recording",id:"start-a-recording",level:2},{value:"Stop a recording",id:"stop-a-recording",level:2},{value:"Check active recording state",id:"check-active-recording-state",level:2}],u={toc:d};function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recording"},"Recording"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"meeting.recording")," object can be used start and stop recordings in a\nmeeting. You can also get the current status of a recording using this API."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"meeting.recording")," object has the following properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"recordingState"),": Indicates the current recording state of the meeting.")),(0,n.kt)("h2",{id:"start-a-recording"},"Start a recording"),(0,n.kt)("p",null,"To start a recording, you can call the ",(0,n.kt)("inlineCode",{parentName:"p"},"start")," method in the ",(0,n.kt)("inlineCode",{parentName:"p"},"meeting.recording"),"\nobject. The valid states are ",(0,n.kt)("inlineCode",{parentName:"p"},"IDLE"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"STARTING"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"RECORDING"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"STOPPING"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await meeting.recording.start();\n")),(0,n.kt)("h2",{id:"stop-a-recording"},"Stop a recording"),(0,n.kt)("p",null,"Call ",(0,n.kt)("inlineCode",{parentName:"p"},"meeting.recording.stop()")," to stop the active recording."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await meeting.recording.stop();\n")),(0,n.kt)("h2",{id:"check-active-recording-state"},"Check active recording state"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"meeting.recording.recordingState")," property describes the current state of\nthe recording. The valid states are ",(0,n.kt)("inlineCode",{parentName:"p"},"IDLE"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"STARTING"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"RECORDING"),", and\n",(0,n.kt)("inlineCode",{parentName:"p"},"STOPPING"),"."))}g.isMDXComponent=!0}}]);