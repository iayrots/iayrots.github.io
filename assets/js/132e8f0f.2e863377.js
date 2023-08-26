"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[72473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,y=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92768:(e,t,r)=>{r.d(t,{ZP:()=>m});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},l=a("CardSection"),p=a("Card"),u=a("ReactIcon"),s=a("AngularIcon"),d=a("HTMLIcon"),f=a("SwiftIcon"),y=a("KotlinIcon"),b=a("FlutterIcon"),O={toc:[]};function m(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},O,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",null,"After integrating Dyte, the next step is to initialize your frontend by installing the SDK and initializing the frontend SDKs with the `authToken`. The `authToken` is returned by the"," ",(0,n.kt)("a",{href:r.addParticipantPath},"Add Participant API"),"."),(0,n.kt)("p",null,"Dyte offers a UI kit for utilizing design library components and a Core SDK for building a custom user interface without complex media layers. To view code samples and begin with your preferred SDK, refer to the web and mobile quickstart guides of your choice."),(0,n.kt)(l,{id:"client-setup-web",title:"Web",hasSubSections:!0,mdxType:"CardSection"},(0,n.kt)(l,{id:"web-sdk",title:"",mdxType:"CardSection"},(0,n.kt)(p,{title:"React",to:"./client-setup/react",icon:(0,n.kt)(u,{mdxType:"ReactIcon"}),mdxType:"Card"}),(0,n.kt)(p,{title:"Angular",to:"./client-setup/angular",icon:(0,n.kt)(s,{mdxType:"AngularIcon"}),mdxType:"Card"}),(0,n.kt)(p,{title:"Javascript",to:"./client-setup/javascript",icon:(0,n.kt)(d,{mdxType:"HTMLIcon"}),mdxType:"Card"}))),(0,n.kt)(l,{id:"client-setup-mobile",title:"Mobile",hasSubSections:!0,mdxType:"CardSection"},(0,n.kt)(l,{id:"mobile-sdk",title:"",mdxType:"CardSection"},(0,n.kt)(p,{title:"iOS",to:"./client-setup/ios",icon:(0,n.kt)(f,{mdxType:"SwiftIcon"}),mdxType:"Card"}),(0,n.kt)(p,{title:"Android",to:"./client-setup/android",icon:(0,n.kt)(y,{mdxType:"KotlinIcon"}),mdxType:"Card"}),(0,n.kt)(p,{title:"Flutter",to:"./client-setup/flutter",icon:(0,n.kt)(b,{mdxType:"FlutterIcon"}),mdxType:"Card"}))))}m.isMDXComponent=!0},13723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905),o=r(92768);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Client Setup"},p=void 0,u={unversionedId:"til/reactjs/client-setup/index",id:"til/reactjs/client-setup/index",title:"Client Setup",description:"",source:"@site/docs/develop/til/reactjs/client-setup/index.mdx",sourceDirName:"til/reactjs/client-setup",slug:"/til/reactjs/client-setup/",permalink:"/develop/til/reactjs/client-setup/",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",frontMatter:{title:"Client Setup"},sidebar:"tutorialSidebar",previous:{title:"Integrate Dyte",permalink:"/develop/til/reactjs/build-live-video-app"},next:{title:"React",permalink:"/develop/til/reactjs/client-setup/react"}},s={},d=[],f={toc:d};function y(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.ZP,{addParticipantPath:"/develop/til/reactjs/build-live-video-app#step-5-add-participants",mdxType:"ClientSetup"}))}y.isMDXComponent=!0}}]);