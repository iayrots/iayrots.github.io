"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[74842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3734:(e,t,n)=>{n.d(t,{ZP:()=>p});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={toc:[{value:"Quickstart",id:"quickstart",level:2},{value:"Objective",id:"objective",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"Step 2: Configuring Android &amp; iOS permissions",id:"step-2-configuring-android--ios-permissions",level:2},{value:"Step 3: Configure a Dyte meeting",id:"step-3-configure-a-dyte-meeting",level:2},{value:"Step 4: Initialize the SDK",id:"step-4-initialize-the-sdk",level:2},{value:"Step 5: Launch the meeting UI",id:"step-5-launch-the-meeting-ui",level:2}]};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},l,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"quickstart"},"Quickstart"),(0,r.kt)("span",{class:"mb-2 block"},"This quickstart shows how to add Dyte's ",n.product," SDK to your Flutter applications"),(0,r.kt)("span",{class:"mb-2 block"},"Further down this guide we also explain how Dyte's UI component library can help to build your UI faster with components specially made for"," ",n.product," applications."),(0,r.kt)("p",null,"You can also checkout our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dyte-io/mobile-samples#samples"},"sample code")," for Flutter. You can clone\nand run a sample application from the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dyte-io/mobile-samples"},"Android Samples GitHub repository"),"."),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"You'll learn how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the Dyte client side SDKs"),(0,r.kt)("li",{parentName:"ul"},"Initialize Dyte Client"),(0,r.kt)("li",{parentName:"ul"},"Bringing up a UI"),(0,r.kt)("li",{parentName:"ul"},"Go live!")),(0,r.kt)("h2",{id:"before-getting-started"},"Before Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you've a mechanism to get ",(0,r.kt)("inlineCode",{parentName:"li"},"authToken")," from your server side which you would have received as part of ",(0,r.kt)("a",{parentName:"li",href:"/develop/til/reactjs/build-live-video-app#step-5-add-participants"},"Add Participant")," call.")),(0,r.kt)("h2",{id:"step-1-install-the-sdk"},"Step 1: Install the SDK"),(0,r.kt)("p",null,"Install the SDK from ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev"},"pub.dev"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nflutter pub add dyte_uikit\n\n")),(0,r.kt)("h2",{id:"step-2-configuring-android--ios-permissions"},"Step 2: Configuring Android & iOS permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"android"},(0,r.kt)("strong",{parentName:"h3"},"Android")),(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"compileSdkVersion 33")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"minSdkVersion 21")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file at ",(0,r.kt)("inlineCode",{parentName:"p"},"<project root>/android/app/build.gradle")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"  defaultConfig {\n        ...\n\n        compileSdkVersion 33\n        minSdkVersion 21\n\n        ...\n    }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"ios"},(0,r.kt)("strong",{parentName:"h3"},"iOS")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Set minimum deployment target for your Flutter app to 13.0 or higher.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-<Swift>"},"platform :ios, '13.0'\n")),(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Add the following keys to your ",(0,r.kt)("inlineCode",{parentName:"li"},"Info.plist")," file, located in ",(0,r.kt)("inlineCode",{parentName:"li"},"<project root>/ios/Runner/Info.plist")," :")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-<Swift>"},"/* Attach the permission to use camera & microphone. */\n\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n")))),(0,r.kt)("h2",{id:"step-3-configure-a-dyte-meeting"},"Step 3: Configure a Dyte meeting"),(0,r.kt)("p",null,"To initiate Dyte Meeting for any participant you just need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken")," as an argument. You can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken")," via the ",(0,r.kt)("a",{parentName:"p",href:"https://iayrots.github.io/api?v=v2#/operations/add_participant"},"Add Participant API"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authToken")),(0,r.kt)("td",{parentName:"tr",align:null},"After you've created the meeting, ",(0,r.kt)("br",null)," add each participant to the meeting ",(0,r.kt)("br",null)," using the ",(0,r.kt)("a",{parentName:"td",href:"https://iayrots.github.io/api?v=v2#/operations/add_participant"},"Add Participant API"),(0,r.kt)("br",null)," (The presetName created earlier ",(0,r.kt)("br",null)," must be passed in the body ",(0,r.kt)("br",null)," of the Add Participant API request) ",(0,r.kt)("br",null)," The API response contains the ",(0,r.kt)("inlineCode",{parentName:"td"},"authToken"),".")))),(0,r.kt)("p",null,"After getting the ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken"),", you need to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingInfoV2")," object as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final meetingInfoV2 = DyteMeetingInfoV2(authToken: '<auth_token>');\n")),(0,r.kt)("h2",{id:"step-4-initialize-the-sdk"},"Step 4: Initialize the SDK"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteUIKit")," is the main class of the SDK. It is the entry point and the only\nclass required to initialize Dyte UI Kit SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"/* Passing the DyteMeetingInfoV2 object `meetingInfoV2` you created in the Step 3,\n   and your context in `clientContext` parameter. */\n\nfinal DyteUIKit uiKit = DyteUIKit(\n  meetingInfo: meetingInfoV2,\n  clientContext: context,\n  configurations: configurations, //optional\n);\n")),(0,r.kt)("h2",{id:"step-5-launch-the-meeting-ui"},"Step 5: Launch the meeting UI"),(0,r.kt)("p",null,"To launch the meeting UI all you need to do is call the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadUI()")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteUIKit")," object which will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Widget"),". You can push this widget as a page to start the flow of prebuilt Flutter UI Kit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dyte_uikit/dyte_uikit.dart';\nimport 'package:flutter/material.dart';\n\nclass DyteMeetingPage extends StatelessWidget {\n  const DyteMeetingPage({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    ...\n    // Push this widget as page in your app\n    return uiKit.loadUI();\n  }\n}\n\n")),(0,r.kt)("p",null,"Voila! You're all done."),(0,r.kt)("div",{id:"one",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",flex:"1 1 0",justifyContent:"center"}},["/static/mobile/0.x.x/flutter-setup-page.png","/static/mobile/0.x.x/flutter-video-call.png","/static/mobile/0.x.x/flutter-participant-list.png","/static/mobile/0.x.x/flutter-advanced-features.png","/static/mobile/0.x.x/flutter-chat.png"].map((e=>(0,r.kt)("img",{src:e,alt:"Image 1",width:"220",padding:"10",margin:"10 3",style:{margin:"10px",borderRadius:"8px"}})))))}p.isMDXComponent=!0},23279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905),i=n(3734);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={title:"Flutter",sidebar_position:6},u=void 0,s={unversionedId:"til/unity3d/client-setup/flutter",id:"til/unity3d/client-setup/flutter",title:"Flutter",description:"",source:"@site/docs/develop/til/unity3d/client-setup/flutter.mdx",sourceDirName:"til/unity3d/client-setup",slug:"/til/unity3d/client-setup/flutter",permalink:"/develop/til/unity3d/client-setup/flutter",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:6,frontMatter:{title:"Flutter",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/develop/til/unity3d/client-setup/ios"},next:{title:"Overview",permalink:"/develop/til/vscode/vscode-overview"}},c={},d=[],m={toc:d};function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{product:"Voice Conferencing",mdxType:"Quickstart"}))}f.isMDXComponent=!0}}]);