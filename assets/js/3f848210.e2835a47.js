"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[16179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,y=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:12,web_core_version:"1.6.0"},s=void 0,c={unversionedId:"reference/DyteLivestream",id:"reference/DyteLivestream",title:"DyteLivestream",description:"The DyteLivestream module represents the state of the current livestream, and allows",source:"@site/docs/react-web-core/reference/DyteLivestream.md",sourceDirName:"reference",slug:"/reference/DyteLivestream",permalink:"/react-web-core/reference/DyteLivestream",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:12,frontMatter:{sidebar_position:12,web_core_version:"1.6.0"},sidebar:"tutorialSidebar",previous:{title:"DyteStage",permalink:"/react-web-core/reference/DyteStage"},next:{title:"DytePlugin",permalink:"/react-web-core/reference/DytePlugin"}},p={},u=[{value:"meeting.livestream.start()",id:"meetinglivestreamstart",level:3},{value:"meeting.livestream.stop()",id:"meetinglivestreamstop",level:3}],m={toc:u};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_DyteLivestream"}),(0,n.kt)("p",null,"The DyteLivestream module represents the state of the current livestream, and allows\nto start/stop live streams."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_DyteLivestream"},"DyteLivestream"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_DyteLivestream+start"},".start()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_DyteLivestream+stop"},".stop()"))))),(0,n.kt)("a",{name:"module_DyteLivestream+start"}),(0,n.kt)("h3",{id:"meetinglivestreamstart"},"meeting.livestream.start()"),(0,n.kt)("p",null,"Starts livestreaming the meeting."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_DyteLivestream"},(0,n.kt)("code",null,"DyteLivestream")),"  "),(0,n.kt)("a",{name:"module_DyteLivestream+stop"}),(0,n.kt)("h3",{id:"meetinglivestreamstop"},"meeting.livestream.stop()"),(0,n.kt)("p",null,"Stops livestreaming the meeting."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_DyteLivestream"},(0,n.kt)("code",null,"DyteLivestream"))))}f.isMDXComponent=!0}}]);