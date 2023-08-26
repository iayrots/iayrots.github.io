"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[21763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},a=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=o,f=m["".concat(u,".").concat(y)]||m[y]||s[y]||c;return n?r.createElement(f,i(i({ref:t},a),{},{components:n})):r.createElement(f,i({ref:t},a))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={},u="dyte-menu-list",p={unversionedId:"components/dyte-menu-list",id:"components/dyte-menu-list",title:"dyte-menu-list",description:"A menu list component.",source:"@site/docs/ui-kit/components/dyte-menu-list.mdx",sourceDirName:"components",slug:"/components/dyte-menu-list",permalink:"/ui-kit/components/dyte-menu-list",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dyte-menu-item",permalink:"/ui-kit/components/dyte-menu-item"},next:{title:"dyte-menu",permalink:"/ui-kit/components/dyte-menu"}},a={},s=[{value:"Props",id:"props",level:2}],m=(y="PropsTable",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var y;const f={toc:s};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dyte-menu-list"},"dyte-menu-list"),(0,r.kt)("p",null,"A menu list component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<dyte-menu placement="top">\n  <dyte-button slot="trigger">Top Menu</dyte-button>\n  <dyte-menu-list>\n    <dyte-menu-item onclick="alert(\'You clicked alert()\')">alert()</dyte-button>\n  </dyte-menu-list>\n</dyte-menu>\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(m,{of:"dyte-menu-list",mdxType:"PropsTable"}))}d.isMDXComponent=!0}}]);