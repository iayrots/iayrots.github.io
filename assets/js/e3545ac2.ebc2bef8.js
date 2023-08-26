"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[24488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>O});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A=r.createContext({}),c=function(e){var t=r.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(A.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,A=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),O=i,p=u["".concat(A,".").concat(O)]||u[O]||d[O]||a;return n?r.createElement(p,o(o({ref:t},s),{},{components:n})):r.createElement(p,o({ref:t},s))}));function O(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95175:(e,t,n)=>{n.d(t,{ZP:()=>A});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={toc:[{value:"Quickstart",id:"quickstart",level:2},{value:"Objective",id:"objective",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"Step 2: Initialisation configuration",id:"step-2-initialisation-configuration",level:2},{value:"Step 3: Initialize the SDK",id:"step-3-initialize-the-sdk",level:2},{value:"Step 4: Launch the meeting UI",id:"step-4-launch-the-meeting-ui",level:2},{value:"Proguard Builds",id:"proguard-builds",level:3}]};function A(e){var{components:t}=e,A=o(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},l,A),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"quickstart"},"Quickstart"),(0,r.kt)("span",{class:"mb-2 block"},"This quickstart shows how to add Dyte's ",A.product," SDK to your Android applications"),(0,r.kt)("span",{class:"mb-2 block"},"Further down this guide we also explain how Dyte's UI component library can help to build your UI faster with components specially made for"," ",A.product," applications."),(0,r.kt)("p",null,"You can also checkout our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dyte-io/mobile-samples#samples"},"sample code")," for Android. You can clone\nand run a sample application from the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dyte-io/mobile-samples"},"Android Samples GitHub repository"),"."),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"You'll learn how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the Dyte client side SDKs"),(0,r.kt)("li",{parentName:"ul"},"Initialize Dyte Client"),(0,r.kt)("li",{parentName:"ul"},"Bringing up a UI"),(0,r.kt)("li",{parentName:"ul"},"Go live!")),(0,r.kt)("h2",{id:"before-getting-started"},"Before Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you've a mechanism to get ",(0,r.kt)("inlineCode",{parentName:"li"},"authToken")," from your server side which you would have received as part of ",(0,r.kt)("a",{parentName:"li",href:"/develop/til/reactjs/build-live-video-app#step-5-add-participants"},"Add Participant")," call.")),(0,r.kt)("h2",{id:"step-1-install-the-sdk"},"Step 1: Install the SDK"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the SDK using maven central dependency.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"  // other dependencies here\n  implementation 'io.dyte:uikit:1.13.0'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the following permissions to the AndroidManifest.xml file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.BLUETOOTH" />\n<uses-permission android:name="android.permission.WAKE_LOCK" />\n<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n')),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Release builds (or any other Proguard builds) require an additional setup step, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#proguard-builds"},"Proguard Builds")," section.")),(0,r.kt)("h2",{id:"step-2-initialisation-configuration"},"Step 2: Initialisation configuration"),(0,r.kt)("p",null,"Set the properties in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingInfoV2")," class. You just need to provide\nthe participant's ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authToken")),(0,r.kt)("td",{parentName:"tr",align:null},"After you've created the meeting, ",(0,r.kt)("br",null)," add each participant to the meeting ",(0,r.kt)("br",null)," using the ",(0,r.kt)("a",{parentName:"td",href:"https://iayrots.github.io/api?v=v2#/operations/add_participant"},"Add Participant API"),(0,r.kt)("br",null)," (The presetName created earlier ",(0,r.kt)("br",null)," must be passed in the body ",(0,r.kt)("br",null)," of the Add Participant API request) ",(0,r.kt)("br",null)," The API response contains the ",(0,r.kt)("inlineCode",{parentName:"td"},"authToken"),".")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val meetingInfo = DyteMeetingInfoV2(\n                    authToken = '<auth_token>',\n                  )\n")),(0,r.kt)("h2",{id:"step-3-initialize-the-sdk"},"Step 3: Initialize the SDK"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteUIKitBuilder")," is the main class of the SDK. It is the entry point and\nthe only class required to initialize Dyte SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val dyteUIKitInfo = DyteUIKitInfo(\n  activity = this,\n  dyteMeetingInfo = meetingInfo\n)\nval dyteUIKit = DyteUIKitBuilder.build(dyteUIKitInfo)\n")),(0,r.kt)("h2",{id:"step-4-launch-the-meeting-ui"},"Step 4: Launch the meeting UI"),(0,r.kt)("p",null,"To launch the meeting UI all you need to do is call ",(0,r.kt)("inlineCode",{parentName:"p"},"startMeeting()")," which will take\ncare of everything for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"dyteUIKit.startMeeting()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"meeting UI screenshot with labeled parts",src:n(28910).Z,width:"270",height:"540"}),"\n",(0,r.kt)("img",{alt:"meeting UI screenshot with labeled parts",src:n(27847).Z,width:"270",height:"540"}),"\n",(0,r.kt)("img",{alt:"meeting UI screenshot with labeled parts",src:n(34108).Z,width:"270",height:"540"})),(0,r.kt)("h3",{id:"proguard-builds"},"Proguard Builds"),(0,r.kt)("p",null,"Perform the following steps, for Android release builds/proguard builds:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"/android/app/proguard-rules.pro")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Keep `Companion` object fields of serializable classes.\n# This avoids serializer lookup through `getDeclaredClasses` as done for named companion objects.\n-if @kotlinx.serialization.Serializable class **\n-keepclassmembers class <1> {\n   static <1>$Companion Companion;\n}\n\n# Keep `serializer()` on companion objects (both default and named) of serializable classes.\n-if @kotlinx.serialization.Serializable class ** {\n   static **$* *;\n}\n-keepclassmembers class <2>$<3> {\n   kotlinx.serialization.KSerializer serializer(...);\n}\n\n# keep webrtc classes\n-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n\n# keep ktor classes\n-keep class io.ktor.** { *; }\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the following to your ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," to import the proguard\nconfiguration.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"buildTypes {\n        release {\n            ...\n            ...\n            ...\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n        }\n    }\n")))}A.isMDXComponent=!0},18439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>A,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905),i=n(95175);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const A={title:"Android",sidebar_position:4},c=void 0,s={unversionedId:"til/unity3d/client-setup/android",id:"til/unity3d/client-setup/android",title:"Android",description:"",source:"@site/docs/develop/til/unity3d/client-setup/android.mdx",sourceDirName:"til/unity3d/client-setup",slug:"/til/unity3d/client-setup/android",permalink:"/develop/til/unity3d/client-setup/android",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:4,frontMatter:{title:"Android",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/develop/til/unity3d/client-setup/react"},next:{title:"iOS",permalink:"/develop/til/unity3d/client-setup/ios"}},d={},u=[],O={toc:u};function p(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},O,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{product:"Live Video",mdxType:"Quickstart"}))}p.isMDXComponent=!0},34108:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},27847:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},28910:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);