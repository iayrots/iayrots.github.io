"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[93490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Create Custom Recording App Using Recording SDKs",sidebar_position:12,sidebar_class_name:"hidden"},p=void 0,s={unversionedId:"projects/urbanbase/create-record-app-using-sdks",id:"projects/urbanbase/create-record-app-using-sdks",title:"Create Custom Recording App Using Recording SDKs",description:"When you join a Dyte meeting, the meeting layout is automatically designed to optimize your experience. This includes focusing on shared content and highlighting active speakers, while participants are shown in small thumbnail views. When you start recording the meeting, it is recorded with the same layout using the default UI kit component called DyteGrid.",source:"@site/docs/develop/projects/urbanbase/create-record-app-using-sdks.mdx",sourceDirName:"projects/urbanbase",slug:"/projects/urbanbase/create-record-app-using-sdks",permalink:"/develop/projects/urbanbase/create-record-app-using-sdks",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:12,frontMatter:{title:"Create Custom Recording App Using Recording SDKs",sidebar_position:12,sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Interactive Recordings with Timed Metadata",permalink:"/develop/projects/urbanbase/interactive-recording"},next:{title:"KaonMedia (Kaon Group)",permalink:"/develop/projects/kaonmedia/"}},c={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Methods",id:"methods",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:3},{value:"Step 2: Import the <code>DyteRecording</code> object",id:"step-2-import-the-dyterecording-object",level:3},{value:"Step 3: Create the <code>DyteRecording</code> object",id:"step-3-create-the-dyterecording-object",level:3},{value:"Step 4: Initialize the recording SDK",id:"step-4-initialize-the-recording-sdk",level:3},{value:"(Optional) Step 5: Manually start the recording",id:"optional-step-5-manually-start-the-recording",level:3},{value:"(Optional) Step 6: Manually stop the recording",id:"optional-step-6-manually-stop-the-recording",level:3},{value:"Step 7: Deploy the recording app",id:"step-7-deploy-the-recording-app",level:3},{value:"Step 8: Specify the custom URL",id:"step-8-specify-the-custom-url",level:3}],u={toc:d};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you join a Dyte meeting, the meeting layout is automatically designed to optimize your experience. This includes focusing on shared content and highlighting active speakers, while participants are shown in small thumbnail views. When you start recording the meeting, it is recorded with the same layout using the default UI kit component called ",(0,r.kt)("a",{parentName:"p",href:"/react-ui-kit/components/dyte-grid"},"DyteGrid"),"."),(0,r.kt)("p",null,"If you wish to have a customized layout for your recording application, Dyte's custom recording SDKs provide the flexibility to tailor the appearance of your recordings according to your preferences. You can choose from options like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Show only active speaker view"),(0,r.kt)("li",{parentName:"ul"},"Shared screen with thumbnail gallery view"),(0,r.kt)("li",{parentName:"ul"},"Shared screen with large active speaker thumbnail"),(0,r.kt)("li",{parentName:"ul"},"Shared screen without active speaker or gallery view"),(0,r.kt)("li",{parentName:"ul"},"Customized background for your recording"),(0,r.kt)("li",{parentName:"ul"},"Portrait layout, and so on and so forth")),(0,r.kt)("p",null,"Let\u2019s dive in to understand the steps involved in creating a custom appearance for your Dyte recording app."),(0,r.kt)("p",null,"The custom recording SDKs are used on top of the ",(0,r.kt)("a",{parentName:"p",href:"/react-ui-kit"},"UI kit")," or ",(0,r.kt)("a",{parentName:"p",href:"/ui-kit"},"Vanilla JS"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteRecording")," class is used for managing the recording functionality within the SDK."),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"constructor(options)")),(0,r.kt)("p",null,"Creates an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteRecording")," class."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options (object)"),": The options object."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"options (object)")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.waitTimeMs (number)")),(0,r.kt)("td",{parentName:"tr",align:null},"The time (in milliseconds) to wait after all peers have left before leaving the meeting. This option is ignored if ",(0,r.kt)("inlineCode",{parentName:"td"},"autoStop")," is set to true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.autoStart (boolean)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true if you want to manually call the ",(0,r.kt)("inlineCode",{parentName:"td"},"startRecording")," function. By default, the ",(0,r.kt)("inlineCode",{parentName:"td"},"autoStart")," parameter is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". If you wish to delay the start of the recording, you can set the value of this parameter to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),". In that case, you can manually call the ",(0,r.kt)("inlineCode",{parentName:"td"},"startRecording()")," function later. Note that there is a timeout of 2 minutes associated with the ",(0,r.kt)("inlineCode",{parentName:"td"},"startRecording()")," method. If this method is not called within 2 minutes of the WebSocket connection being established, the recording process will encounter an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.autoStop (boolean)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true if you want to disable automatic peer leave and manually call the ",(0,r.kt)("inlineCode",{parentName:"td"},"stopRecording")," function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.scanInterval (number)")),(0,r.kt)("td",{parentName:"tr",align:null},"The interval (in milliseconds) between scans for automatic peer leave.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.devMode (boolean)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true to enable development mode, which enables logs and disables certain functionality. Also you must ensure that this is set this to true when testing your recording-app locally.")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"init(client: DyteClient)\n")),(0,r.kt)("p",null,"Initiates the SDK by providing a ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteClient")," object. Call this after creating the meeting object and before calling ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.joinRoom()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"startRecording();\n")),(0,r.kt)("p",null,"Manually starts the recording. Ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"autoStart")," is passed as true in the constructor options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"stopRecording();\n")),(0,r.kt)("p",null,"Manually stops the recording. Ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"autoStop")," is passed as true in the constructor options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"cleanup();\n")),(0,r.kt)("p",null,"Performs cleanup tasks after leaving the meeting, such as clearing added listeners and closing WebSocket connections."),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("p",null,"Perform the following steps to create the recording app for your Dyte meetings."),(0,r.kt)("h3",{id:"step-1-install-the-sdk"},"Step 1: Install the SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm i @dytesdk/recording-sdk\n")),(0,r.kt)("h3",{id:"step-2-import-the-dyterecording-object"},"Step 2: Import the ",(0,r.kt)("inlineCode",{parentName:"h3"},"DyteRecording")," object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import DyteRecording from '@dytesdk/recording-sdk';\n")),(0,r.kt)("h3",{id:"step-3-create-the-dyterecording-object"},"Step 3: Create the ",(0,r.kt)("inlineCode",{parentName:"h3"},"DyteRecording")," object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const recordingSdk = new DyteRecording(options);\n")),(0,r.kt)("h3",{id:"step-4-initialize-the-recording-sdk"},"Step 4: Initialize the recording SDK"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," after creating the meeting object and before ",(0,r.kt)("inlineCode",{parentName:"p"},"joinRoom")," is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Call this after you have called initMeeting\nawait recordingSdk.init();\n")),(0,r.kt)("h3",{id:"optional-step-5-manually-start-the-recording"},"(Optional) Step 5: Manually start the recording"),(0,r.kt)("p",null,"To manually start the recording, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"startRecording()")," function. For example, you want to start a recording after you have loaded your UI content in the app and ",(0,r.kt)("inlineCode",{parentName:"p"},"autoStart")," is not set to true. In such cases, you can manually call the ",(0,r.kt)("inlineCode",{parentName:"p"},"startRecording()")," function when you are ready to begin the recording."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This throws an exception if autoStart is set to false.\nawait recordingSdk.startRecording();\n")),(0,r.kt)("h3",{id:"optional-step-6-manually-stop-the-recording"},"(Optional) Step 6: Manually stop the recording"),(0,r.kt)("p",null,"To manually stop the recording, use ",(0,r.kt)("inlineCode",{parentName:"p"},"stopRecording"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This throws an exception if autoStop is set to false.\nawait recordingSdk.stopRecording();\n")),(0,r.kt)("p",null,"Once ",(0,r.kt)("inlineCode",{parentName:"p"},"stopRecording")," is called, the recorder in your recording app will exit after a few seconds. After this point, you won't be able to perform any further actions within your recording app."),(0,r.kt)("h3",{id:"step-7-deploy-the-recording-app"},"Step 7: Deploy the recording app"),(0,r.kt)("p",null,"Once you've created the app, deploy it using a platform like ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/get-started"},"Vercel"),". Make sure to note the URL where you have deployed the app, as you will have to enter this URL in Dyte's recording API."),(0,r.kt)("h3",{id:"step-8-specify-the-custom-url"},"Step 8: Specify the custom URL"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/api#/operations/start_recording"},"Start Recording a Meeting")," API, provide the custom URL (obtained from the previous step) to indicate the location of your deployed app."))}m.isMDXComponent=!0}}]);