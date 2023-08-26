"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[46069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,v=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(v,i(i({ref:t},c),{},{components:n})):o.createElement(v,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Set Up Webhooks to Receive Real-time Updates",sidebar_position:2},p="Set Up Webhooks to Receive Real-time Updates",l={unversionedId:"projects/etc/webhooks-and-events",id:"projects/etc/webhooks-and-events",title:"Set Up Webhooks to Receive Real-time Updates",description:"This topic explains how to set up webhooks to receive real-time updates for",source:"@site/docs/develop/projects/etc/webhooks-and-events.mdx",sourceDirName:"projects/etc",slug:"/projects/etc/webhooks-and-events",permalink:"/develop/projects/etc/webhooks-and-events",draft:!1,tags:[],version:"current",lastUpdatedAt:1693040325,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 26\uc77c",sidebarPosition:2,frontMatter:{title:"Set Up Webhooks to Receive Real-time Updates",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Webhooks Overview",permalink:"/develop/projects/etc/webhooks-overview"},next:{title:"Webhook Events List",permalink:"/develop/projects/etc/webhook-events"}},c={},d=[{value:"Step 1: Identify the events to monitor",id:"step-1-identify-the-events-to-monitor",level:3},{value:"Step 2: Create a webhook endpoint",id:"step-2-create-a-webhook-endpoint",level:3},{value:"Step 3: Handle requests from Dyte",id:"step-3-handle-requests-from-dyte",level:3},{value:"Register your Endpoint",id:"register-your-endpoint",level:4},{value:"Check for <code>dyte-uuid</code> Header",id:"check-for-dyte-uuid-header",level:4},{value:"Return a <code>2xx</code> Response",id:"return-a-2xx-response",level:4},{value:"Built-in Retries",id:"built-in-retries",level:4},{value:"Step 4: Secure your webhooks (recommended)",id:"step-4-secure-your-webhooks-recommended",level:3},{value:"Sample code",id:"sample-code",level:4},{value:"Step 5: Register your HTTPS URL",id:"step-5-register-your-https-url",level:3},{value:"See also",id:"see-also",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},h=u("Tabs"),v=u("TabItem"),m={toc:d};function y(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-webhooks-to-receive-real-time-updates"},"Set Up Webhooks to Receive Real-time Updates"),(0,o.kt)("p",null,"This topic explains how to set up webhooks to receive real-time updates for\nspecific events. Refer\n",(0,o.kt)("a",{parentName:"p",href:"/develop/projects/etc/webhook-events"},"View Webhook Events List")," to view the list of\nevents for which notifications can be sent. Setting up a webhook to start\nreceiving notifications in your application involves the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify the events you want to monitor and the event payloads you want to\nparse."),(0,o.kt)("li",{parentName:"ol"},"Create a webhook endpoint as an HTTP endpoint (URL) on your backend\napplication. Creating a webhook endpoint is no different from creating any\nother API route on your backend. It's an HTTP or HTTPS endpoint on your\nserver with a URL. You can use a single endpoint to handle multiple event\ntypes at once, or you can set up individual endpoints for specific events."),(0,o.kt)("li",{parentName:"ol"},"Handle requests from Dyte by parsing each event object and returning 2xx\nresponse status codes."),(0,o.kt)("li",{parentName:"ol"},"Deploy your webhook endpoint so it\u2019s a publicly accessible HTTPS URL."),(0,o.kt)("li",{parentName:"ol"},"Register your publicly accessible HTTPS URL using the Dyte\n",(0,o.kt)("a",{parentName:"li",href:"https://dev.dyte.io"},"developer portal")," or Webhook APIs.")),(0,o.kt)("h3",{id:"step-1-identify-the-events-to-monitor"},"Step 1: Identify the events to monitor"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/develop/projects/etc/webhook-events"},"events overview guide")," to identify the\nevents your webhook endpoint needs to parse."),(0,o.kt)("h3",{id:"step-2-create-a-webhook-endpoint"},"Step 2: Create a webhook endpoint"),(0,o.kt)("p",null,"Set up an HTTP endpoint that can accept webhook requests with a POST method. For\nexample, this route in express is a map to a Node.js webhook function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\napp.post('/webhook', express.json({ type: 'application/json' }), (req, res) => {\n  const event = request.body;\n  // ... do further processing\n});\n")),(0,o.kt)("h3",{id:"step-3-handle-requests-from-dyte"},"Step 3: Handle requests from Dyte"),(0,o.kt)("p",null,"Your endpoint must be configured to receive events for the type of event\nnotifications you want to receive. Dyte sends events to your webhook endpoint as\npart of a POST request with a JSON payload."),(0,o.kt)("h4",{id:"register-your-endpoint"},"Register your Endpoint"),(0,o.kt)("p",null,"You can register your endpoint as a webhook and listen for specific events using\nour ",(0,o.kt)("a",{parentName:"p",href:"https://dev.dyte.io"},"dev portal")," or by making an API request. For example,\nto receive all events, you can make a request like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.dyte.io/v2/webhooks\' \\\n--header \'Authorization: Basic WRiOmQyNzBmYjJmOGNiNGUzZWY1MGI1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "All events webhook",\n    "url": "<your endpoint here>",\n    "events": [\n        "meeting.started",\n        "meeting.ended",\n        "meeting.participantJoined",\n        "meeting.participantLeft",\n        "recording.statusUpdate",\n        "livestreaming.statusUpdate"\n    ]\n}\'\n')),(0,o.kt)("p",null,"For more information, check out the\n",(0,o.kt)("a",{parentName:"p",href:"/api/?v=v2#/operations/addWebhook"},"webhooks API reference"),"."),(0,o.kt)("h4",{id:"check-for-dyte-uuid-header"},"Check for ",(0,o.kt)("inlineCode",{parentName:"h4"},"dyte-uuid")," Header"),(0,o.kt)("p",null,"Each webhook will have a unique value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dyte-uuid")," header. You can use\nthese to ensure you don't process any retries."),(0,o.kt)("h4",{id:"return-a-2xx-response"},"Return a ",(0,o.kt)("inlineCode",{parentName:"h4"},"2xx")," Response"),(0,o.kt)("p",null,"Your endpoint must quickly (within 3 seconds) return a successful status code (",(0,o.kt)("inlineCode",{parentName:"p"},"2xx"),") prior to any\ncomplex logic that could cause a timeout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/webhook', express.json({ type: 'application/json' }), (req, res) => {\n  const event = request.body;\n  // ... do further processing\n  res.status(200).send();\n  // ... perform heavy tasks\n  return;\n});\n")),(0,o.kt)("h4",{id:"built-in-retries"},"Built-in Retries"),(0,o.kt)("p",null,"Dyte webhooks have built-in retry methods for ",(0,o.kt)("inlineCode",{parentName:"p"},"3xx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"4xx")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," response\nstatus codes. If Dyte doesn't receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"2xx")," response status code for an event within 3 seconds,\nwe mark the event as failed and retry up to 5 times."),(0,o.kt)("h3",{id:"step-4-secure-your-webhooks-recommended"},"Step 4: Secure your webhooks (recommended)"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"/develop/projects/etc/signatures"},"webhook signatures")," to verify that Dyte\ngenerated a webhook request and that it didn't come from a malicious server\npretending to be Dyte."),(0,o.kt)("h4",{id:"sample-code"},"Sample code"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(v,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\napp.post('/webhook', express.json({ type: 'application/json' }), (req, res) => {\n  // verify signature\n  // ...\n\n  // parse event body\n  switch (req.body.event) {\n    case 'meeting.participantJoined':\n      const { meeting, participant } = req.body;\n      // Then define and call a method to handle the joined participant\n      // handleParticipantJoined(meeting, participant);\n      break;\n    case 'recording.statusUpdate':\n      const { meeting, recording } = req.body;\n      // Then define and call a method to handle the recording status update\n      // handleRecordingUpdate(meeting, recording);\n      break;\n    // ... handle other event types\n    default:\n      console.log(`Unhandled event type ${event.type}`);\n  }\n});\n\napp.listen(8000, () => console.log('Running on port 8000'));\n")))),(0,o.kt)("h3",{id:"step-5-register-your-https-url"},"Step 5: Register your HTTPS URL"),(0,o.kt)("p",null,"Register your publicly accessible HTTPS URL using the\n",(0,o.kt)("a",{parentName:"p",href:"https://dev.dyte.io"},"Dyte developer portal")," or\n",(0,o.kt)("a",{parentName:"p",href:"/api/?v=v2#/operations/addWebhook"},"Webhook APIs"),"."),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/develop/projects/etc/webhook-events"},"Events overview guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/?v=v2#/operations/addWebhook"},"Webhooks API reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/develop/projects/etc/signatures"},"Webhook signatures"))))}y.isMDXComponent=!0}}]);