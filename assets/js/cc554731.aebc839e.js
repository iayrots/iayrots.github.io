"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[99860],{39239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var r=n(3905),a=n(93070),o=n(50551);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"Installation",description:"Install rn-core.",sidebar_position:1,slug:"/",tags:["rn-core","installation","setup"]},u="Installation",d={unversionedId:"installation",id:"installation",title:"Installation",description:"Install rn-core.",source:"@site/docs/rn-core/installation.mdx",sourceDirName:".",slug:"/",permalink:"/rn-core/",draft:!1,tags:[{label:"rn-core",permalink:"/rn-core/tags/rn-core"},{label:"installation",permalink:"/rn-core/tags/installation"},{label:"setup",permalink:"/rn-core/tags/setup"}],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:1,frontMatter:{title:"Installation",description:"Install rn-core.",sidebar_position:1,slug:"/",tags:["rn-core","installation","setup"]},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/rn-core/quickstart"}},c={},m=[],g={toc:m};function y(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"node-pm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},"Install the SDK using npm.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @dytesdk/react-native-core react-native-webrtc\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},"Install the SDK using yarn.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @dytesdk/react-native-core react-native-webrtc\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/@dytesdk%2Freact-native-core"},(0,r.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/@dytesdk%2Freact-native-core.svg",alt:"npm version"}))),(0,r.kt)(a.Z,{groupId:"mobile-pm",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The below instructions are for the release builds, debug builds should work\nwithout any additional steps.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit your ",(0,r.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")," and add the following line")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"android.enableDexingArtifactTransform.desugaring=false\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create / append to the file ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/proguard-rules.pro"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"In your ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," edit the release configuration and add the\nfollowing line importing the proguard configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"buildTypes {\n  release {\n    ...\n    ...\n    ...\n    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n  }\n}\n\n"))),(0,r.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"iOS minimum version 12.0",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We support minimum OS version ",(0,r.kt)("inlineCode",{parentName:"p"},"12.0")," for our iOS SDK.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your podfile and make sure your platform is set to ios 12")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '12.0'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the fonts and permission entries in ",(0,r.kt)("inlineCode",{parentName:"li"},"info.plist"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSBluetoothPeripheralUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSBluetoothAlwaysUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n<key>NSPhotoLibraryUsageDescription</key>\n<string>For people to share, we need access to your photos.</string>\n<key>UIViewControllerBasedStatusBarAppearance</key>\n<false/>\n")))))}y.isMDXComponent=!0}}]);