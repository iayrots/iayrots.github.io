"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[25481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var i=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:1},p="Components Basics",s={unversionedId:"basics/components-basics",id:"basics/components-basics",title:"Components Basics",description:"Learn about the structure of an individual component and figure out how to use",source:"@site/docs/angular-ui-kit/basics/components-basics.mdx",sourceDirName:"basics",slug:"/basics/components-basics",permalink:"/angular-ui-kit/basics/components-basics",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Design System",permalink:"/angular-ui-kit/design-system"},next:{title:"Prerequisite",permalink:"/angular-ui-kit/basics/pre-requisite"}},d={},c=[{value:"Usage Guide",id:"usage-guide",level:2},{value:"Write less code",id:"write-less-code",level:3},{value:"Using individual components",id:"using-individual-components",level:3},{value:"Default Props",id:"default-props",level:2},{value:"Component Specific Props",id:"component-specific-props",level:2},{value:"Button variants",id:"button-variants",level:3},{value:"Participant components",id:"participant-components",level:3},{value:"Grid Components",id:"grid-components",level:3},{value:"Parent Grid Component",id:"parent-grid-component",level:4},{value:"Normal Grid Components",id:"normal-grid-components",level:4},{value:"DyteSimpleGrid",id:"dytesimplegrid",level:5},{value:"DyteSimpleGrid",id:"dytesimplegrid-1",level:5},{value:"DyteMixedGrid",id:"dytemixedgrid",level:5},{value:"Example for SimpleGrid",id:"example-for-simplegrid",level:5}],m={toc:c};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,i.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"components-basics"},"Components Basics"),(0,i.kt)("p",null,"Learn about the structure of an individual component and figure out how to use\nthe UI Kit effectively."),(0,i.kt)("h2",{id:"usage-guide"},"Usage Guide"),(0,i.kt)("p",null,"With the UI Kit, we provide a few set of ways to use it, depending on your needs\nand use case."),(0,i.kt)("h3",{id:"write-less-code"},"Write less code"),(0,i.kt)("p",null,"You can use the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"<dyte-meeting />")," monolith component in case you want\nto write less code and not handle all the states and components rendering."),(0,i.kt)("p",null,"It takes care of all of it and loads the entire meeting UI from your preset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <dyte-meeting id=\"my-meeting\"></dyte-meeting>\n\n  <script>\n    const init = async () => {\n      const meeting = await DyteClient.init({\n        authToken: '',\n        defaults: {\n          audio: true,\n          video: true,\n        },\n      });\n\n      document.getElementById('my-meeting').meeting = meeting;\n    };\n\n    init();\n  <\/script>\n</body>\n")),(0,i.kt)("h3",{id:"using-individual-components"},"Using individual components"),(0,i.kt)("p",null,"If you wish to integrate UI Kit components into your UI at various parts, you\ncan use the individual components."),(0,i.kt)("p",null,"Here is a basic example which renders a grid if you join the meeting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="app">\n  <div id="joining">Joining...</div>\n\n  <div id="joined-screen" style="display: none;">\n    <dyte-grid id="my-grid" class="dyte"></dyte-grid>\n    <dyte-mic-toggle class="dyte"></dyte-mic-toggle>\n    <dyte-camera-toggle class="dyte"></dyte-camera-toggle>\n  </div>\n</div>\n\n<script>\n  // load meeting\n  const app = document.getElementById(\'app\');\n\n  function passMeeting() {\n    const els = document.getElementsByClassName(\'dyte\');\n    for (const el of els) {\n      el.meeting = meeting;\n    }\n  }\n\n  function handleApp() {\n    meeting.self.on(\'roomJoined\', () => {\n      document.getElementById(\'joining\').remove();\n      const joinedScreen = document.getElementById(\'joined-screen\');\n      joinedScreen.style.display = \'block\';\n      passMeeting();\n    });\n  }\n\n  handleApp();\n<\/script>\n')),(0,i.kt)("h2",{id:"default-props"},"Default Props"),(0,i.kt)("p",null,"Most of the components accept a set of a ",(0,i.kt)("strong",{parentName:"p"},"Default Props")," for essential\nfeatures such as meeting data, meeting APIs, UI Configuration,\ninternationalisation & icons."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Prop"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meeting")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The web-core ",(0,i.kt)("inlineCode",{parentName:"td"},"DyteClient")," object. Contains all the meeting specific data & APIs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"../reference/interfaces/UIConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"UI Config"))," config")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"t")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../reference/#dytei18n"},"i18n helper")," method")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"iconPack")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../reference/#iconpack"},(0,i.kt)("inlineCode",{parentName:"a"},"IconPack"))," object")))),(0,i.kt)("p",null,"Here is a simple example of how you pass these props to components, here a\n",(0,i.kt)("inlineCode",{parentName:"p"},"DyteGrid"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const gridEl = document.createElement('dyte-grid');\n\ngridEl.meeting = meeting;\ngridEl.config = config;\ngridEl.t = t;\ngridEl.iconPack = iconPack;\n")),(0,i.kt)("h2",{id:"component-specific-props"},"Component Specific Props"),(0,i.kt)("p",null,"Each component also has a set of props specifically."),(0,i.kt)("p",null,"Here are some examples:"),(0,i.kt)("h3",{id:"button-variants"},"Button variants"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<dyte-button>Primary Button (Default)</dyte-button>\n<dyte-button variant="secondary">Secondary button</dyte-button>\n<dyte-button variant="danger">Danger button</dyte-button>\n<dyte-button variant="ghost">Ghost button</dyte-button>\n')),(0,i.kt)("h3",{id:"participant-components"},"Participant components"),(0,i.kt)("p",null,"These are components which depend on a single participant object or a\nparticipant list."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"meeting.self")," and participant objects from ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.participants")," can be passed\nas a participant to this prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const nameTagSelf = document.createElement('dyte-grid');\nconst nameTagSelfWithYou = nameTagSelf.cloneNode(true);\n\nnameTagSelf.participant = nameTagSelfWithYou.participant = participant;\n\n// You should also pass the `meeting` object to see the\n// `(you)` text in name tag to identify self\nnameTagSelfWithYou.meeting = meeting;\n")),(0,i.kt)("h3",{id:"grid-components"},"Grid Components"),(0,i.kt)("p",null,"We have a set of grid components that help you to have any kind of grid you\nwish."),(0,i.kt)("p",null,"There are two types of grid components, so that the grid can be easily extended\nand modularized."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent Grid component - ",(0,i.kt)("inlineCode",{parentName:"li"},"dyte-grid")),(0,i.kt)("li",{parentName:"ul"},"Normal Grid components - ",(0,i.kt)("inlineCode",{parentName:"li"},"dyte-simple-grid"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dyte-mixed-grid"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"dyte-spotlight-grid"))),(0,i.kt)("h4",{id:"parent-grid-component"},"Parent Grid Component"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteGrid")," component is a monolith component which handles all grid related\nevents and data on it's own and passes the following props to it's children."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Prop"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"participants[]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Active Participants")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pinnedParticipants[]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pinned Participants")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"screenShareParticipants[]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Participants who are screen sharing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"plugins[]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Active Plugins")))),(0,i.kt)("p",null,"These props are passed to it's children which it computes from the UI Config\nwhich is passed to it. By default it will use the default UI Config."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Try changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"aspectRatio")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gap")," props.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Pass meeting object to this component too! --\x3e\n<dyte-grid aspect-ratio="16:9" gap="8" size="sm"></dyte-grid>\n')),(0,i.kt)("h4",{id:"normal-grid-components"},"Normal Grid Components"),(0,i.kt)("p",null,"These components just accept the props mentioned above and render the UI."),(0,i.kt)("p",null,"Read more about them in their Reference pages."),(0,i.kt)("h5",{id:"dytesimplegrid"},"DyteSimpleGrid"),(0,i.kt)("p",null,"Accepts: ",(0,i.kt)("inlineCode",{parentName:"p"},"participants"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pinnedParticipants"),"."),(0,i.kt)("p",null,"This grid renders just the ParticipantTiles of the participants you pass to it.\nIt also brings ",(0,i.kt)("inlineCode",{parentName:"p"},"pinnedParticipants")," to the start of the grid."),(0,i.kt)("h5",{id:"dytesimplegrid-1"},"DyteSimpleGrid"),(0,i.kt)("p",null,"Accepts: ",(0,i.kt)("inlineCode",{parentName:"p"},"participants"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pinnedParticipants"),"."),(0,i.kt)("p",null,"This grid renders the ParticipantTiles of the participants and\npinnedParticipants in separate grids."),(0,i.kt)("p",null,"Pinned participants are in spotlight area, i.e; larger grid."),(0,i.kt)("h5",{id:"dytemixedgrid"},"DyteMixedGrid"),(0,i.kt)("p",null,"Accepts: ",(0,i.kt)("inlineCode",{parentName:"p"},"participants"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pinnedParticipants"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"screenShareParticipants"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"."),(0,i.kt)("p",null,"This grid renders screenshares as well as plugins in the main larger view and\nrenders a smaller grid on the right side which is configurable via the UI\nConfig. You can use SimleGrid or SpotlightGrid here."),(0,i.kt)("p",null,"If you just want to render ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," twice in a SimpleGrid:"),(0,i.kt)("h5",{id:"example-for-simplegrid"},"Example for SimpleGrid"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// load meeting\n\nconst simpleGrid = document.createElement('dyte-simple-grid');\nsimpleGrid.aspectRatio = '1:1';\nsimpleGrid.gap = 8;\nsimpleGrid.participants = [meeting.self, meeting.self];\n")))}u.isMDXComponent=!0}}]);