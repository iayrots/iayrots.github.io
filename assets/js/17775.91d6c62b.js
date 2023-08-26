"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[17775],{17775:(t,e,n)=>{function o(t){return t.split("-")[0]}function i(t){return t.split("-")[1]}function r(t){return["top","bottom"].includes(o(t))?"x":"y"}function l(t){return"y"===t?"height":"width"}function c(t,e,n){let{reference:c,floating:s}=t;const a=c.x+c.width/2-s.width/2,f=c.y+c.height/2-s.height/2,u=r(e),d=l(u),m=c[d]/2-s[d]/2,g="x"===u;let h;switch(o(e)){case"top":h={x:a,y:c.y-s.height};break;case"bottom":h={x:a,y:c.y+c.height};break;case"right":h={x:c.x+c.width,y:f};break;case"left":h={x:c.x-s.width,y:f};break;default:h={x:c.x,y:c.y}}switch(i(e)){case"start":h[u]-=m*(n&&g?-1:1);break;case"end":h[u]+=m*(n&&g?-1:1)}return h}n.d(e,{a:()=>g,c:()=>et,f:()=>w,o:()=>b,s:()=>v});function s(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function a(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function f(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:f}=t,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:g=!1,padding:h=0}=e,p=s(h),y=c[g?"floating"===m?"reference":"floating":m],x=a(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:u,rootBoundary:d,strategy:f})),w="floating"===m?{...l.floating,x:o,y:i}:l.reference,b=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),v=await(null==r.isElement?void 0:r.isElement(b))&&await(null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},R=a(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:b,strategy:f}):w);return{top:(x.top-R.top+p.top)/v.y,bottom:(R.bottom-x.bottom+p.bottom)/v.y,left:(x.left-R.left+p.left)/v.x,right:(R.right-x.right+p.right)/v.x}}const u=Math.min,d=Math.max;function m(t,e,n){return d(t,u(e,n))}const g=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=null!=t?t:{},{x:c,y:a,placement:f,rects:u,platform:d}=e;if(null==n)return{};const g=s(o),h={x:c,y:a},p=r(f),y=l(p),x=await d.getDimensions(n),w="y"===p?"top":"left",b="y"===p?"bottom":"right",v=u.reference[y]+u.reference[p]-h[p]-u.floating[y],R=h[p]-u.reference[p],T=await(null==d.getOffsetParent?void 0:d.getOffsetParent(n));let L=T?"y"===p?T.clientHeight||0:T.clientWidth||0:0;0===L&&(L=u.floating[y]);const A=v/2-R/2,E=g[w],k=L-x[y]-g[b],P=L/2-x[y]/2+A,C=m(E,P,k),D=null!=i(f)&&P!=C&&u.reference[y]/2-(P<E?g[w]:g[b])-x[y]/2<0;return{[p]:h[p]-(D?P<E?E-P:k-P:0),data:{[p]:C,centerOffset:P-C}}}}),h={left:"right",right:"left",bottom:"top",top:"bottom"};function p(t){return t.replace(/left|right|bottom|top/g,(t=>h[t]))}const y={start:"end",end:"start"};function x(t){return t.replace(/start|end/g,(t=>y[t]))}const w=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:c,middlewareData:s,rects:a,initialPlacement:u,platform:d,elements:m}=e,{mainAxis:g=!0,crossAxis:h=!0,fallbackPlacements:y,fallbackStrategy:w="bestFit",flipAlignment:b=!0,...v}=t,R=o(c),T=y||(R===u||!b?[p(u)]:function(t){const e=p(t);return[x(t),e,x(e)]}(u)),L=[u,...T],A=await f(e,v),E=[];let k=(null==(n=s.flip)?void 0:n.overflows)||[];if(g&&E.push(A[R]),h){const{main:t,cross:e}=function(t,e,n){void 0===n&&(n=!1);const o=i(t),c=r(t),s=l(c);let a="x"===c?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=p(a)),{main:a,cross:p(a)}}(c,a,await(null==d.isRTL?void 0:d.isRTL(m.floating)));E.push(A[t],A[e])}if(k=[...k,{placement:c,overflows:E}],!E.every((t=>t<=0))){var P,C;const t=(null!=(P=null==(C=s.flip)?void 0:C.index)?P:0)+1,e=L[t];if(e)return{data:{index:t,overflows:k},reset:{placement:e}};let n="bottom";switch(w){case"bestFit":{var D;const t=null==(D=k.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:D[0].placement;t&&(n=t);break}case"initialPlacement":n=u}if(c!==n)return{reset:{placement:n}}}return{}}}};const b=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:l}=e,c=await async function(t,e){const{placement:n,platform:l,elements:c}=t,s=await(null==l.isRTL?void 0:l.isRTL(c.floating)),a=o(n),f=i(n),u="x"===r(n),d=["left","top"].includes(a)?-1:1,m=s&&u?-1:1,g="function"==typeof e?e(t):e;let{mainAxis:h,crossAxis:p,alignmentAxis:y}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return f&&"number"==typeof y&&(p="end"===f?-1*y:y),u?{x:p*m,y:h*d}:{x:h*d,y:p*m}}(e,t);return{x:n+c.x,y:l+c.y,data:c}}}};const v=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:l}=e,{mainAxis:c=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...u}=t,d={x:n,y:i},g=await f(e,u),h=r(o(l)),p="x"===h?"y":"x";let y=d[h],x=d[p];if(c){const t="y"===h?"bottom":"right";y=m(y+g["y"===h?"top":"left"],y,y-g[t])}if(s){const t="y"===p?"bottom":"right";x=m(x+g["y"===p?"top":"left"],x,x-g[t])}const w=a.fn({...e,[h]:y,[p]:x});return{...w,data:{x:w.x-n,y:w.y-i}}}}};function R(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function T(t){return R(t).getComputedStyle(t)}function L(t){return C(t)?(t.nodeName||"").toLowerCase():""}let A;function E(){if(A)return A;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(A=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),A):navigator.userAgent}function k(t){return t instanceof R(t).HTMLElement}function P(t){return t instanceof R(t).Element}function C(t){return t instanceof R(t).Node}function D(t){if("undefined"==typeof ShadowRoot)return!1;return t instanceof R(t).ShadowRoot||t instanceof ShadowRoot}function O(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function W(t){return["table","td","th"].includes(L(t))}function F(t){const e=/firefox/i.test(E()),n=T(t),o=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function S(){return!/^((?!chrome|android).)*safari/i.test(E())}function B(t){return["html","body","#document"].includes(L(t))}const H=Math.min,V=Math.max,M=Math.round;function N(t){const e=T(t);let n=parseFloat(e.width),o=parseFloat(e.height);const i=t.offsetWidth,r=t.offsetHeight,l=M(n)!==i||M(o)!==r;return l&&(n=i,o=r),{width:n,height:o,fallback:l}}function _(t){return P(t)?t:t.contextElement}const j={x:1,y:1};function X(t){const e=_(t);if(!k(e))return j;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=N(e);let l=(r?M(n.width):n.width)/o,c=(r?M(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}function Y(t,e,n,o){var i,r;void 0===e&&(e=!1),void 0===n&&(n=!1);const l=t.getBoundingClientRect(),c=_(t);let s=j;e&&(o?P(o)&&(s=X(o)):s=X(t));const a=c?R(c):window,f=!S()&&n;let u=(l.left+(f&&(null==(i=a.visualViewport)?void 0:i.offsetLeft)||0))/s.x,d=(l.top+(f&&(null==(r=a.visualViewport)?void 0:r.offsetTop)||0))/s.y,m=l.width/s.x,g=l.height/s.y;if(c){const t=R(c),e=o&&P(o)?R(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=X(n),e=n.getBoundingClientRect(),o=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(o.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(o.paddingTop))*t.y,u*=t.x,d*=t.y,m*=t.x,g*=t.y,u+=e.x,d+=e.y,n=R(n).frameElement}}return{width:m,height:g,top:d,right:u+m,bottom:d+g,left:u,x:u,y:d}}function q(t){return((C(t)?t.ownerDocument:t.document)||window.document).documentElement}function z(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){return Y(q(t)).left+z(t).scrollLeft}function I(t,e,n){const o=k(e),i=q(e),r=Y(t,!0,"fixed"===n,e);let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==L(e)||O(i))&&(l=z(e)),k(e)){const t=Y(e,!0);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=G(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function J(t){if("html"===L(t))return t;const e=t.assignedSlot||t.parentNode||(D(t)?t.host:null)||q(t);return D(e)?e.host:e}function K(t){return k(t)&&"fixed"!==T(t).position?t.offsetParent:null}function Q(t){const e=R(t);let n=K(t);for(;n&&W(n)&&"static"===T(n).position;)n=K(n);return n&&("html"===L(n)||"body"===L(n)&&"static"===T(n).position&&!F(n))?e:n||function(t){let e=J(t);for(;k(e)&&!B(e);){if(F(e))return e;e=J(e)}return null}(t)||e}function U(t){const e=J(t);return B(e)?t.ownerDocument.body:k(e)&&O(e)?e:U(e)}function Z(t,e){var n;void 0===e&&(e=[]);const o=U(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=R(o);return i?e.concat(r,r.visualViewport||[],O(o)?o:[]):e.concat(o,Z(o))}function $(t,e,n){return"viewport"===e?a(function(t,e){const n=R(t),o=q(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=S();(t||!t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n)):P(e)?function(t,e){const n=Y(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=k(t)?X(t):{x:1,y:1},l=t.clientWidth*r.x,c=t.clientHeight*r.y,s=i*r.x,a=o*r.y;return{top:a,left:s,right:s+l,bottom:a+c,x:s,y:a,width:l,height:c}}(e,n):a(function(t){var e;const n=q(t),o=z(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=V(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=V(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let c=-o.scrollLeft+G(t);const s=-o.scrollTop;return"rtl"===T(i||n).direction&&(c+=V(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:l,x:c,y:s}}(q(t)))}const tt={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r="clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=Z(t).filter((t=>P(t)&&"body"!==L(t))),i=null;const r="fixed"===T(t).position;let l=r?J(t):t;for(;P(l)&&!B(l);){const t=T(l),e=F(l);(r?e||i:e||"static"!==t.position||!i||!["absolute","fixed"].includes(i.position))?i=t:o=o.filter((t=>t!==l)),l=J(l)}return e.set(t,o),o}(e,this._c):[].concat(n),l=[...r,o],c=l[0],s=l.reduce(((t,n)=>{const o=$(e,n,i);return t.top=V(o.top,t.top),t.right=H(o.right,t.right),t.bottom=H(o.bottom,t.bottom),t.left=V(o.left,t.left),t}),$(e,c,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=k(n),r=q(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c={x:1,y:1};const s={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==L(n)||O(r))&&(l=z(n)),k(n))){const t=Y(n);c=X(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+s.x,y:e.y*c.y-l.scrollTop*c.y+s.y}},isElement:P,getDimensions:function(t){return N(t)},getOffsetParent:Q,getDocumentElement:q,getScale:X,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Q,r=this.getDimensions;return{reference:I(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===T(t).direction},et=(t,e,n)=>{const o=new Map,i={platform:tt,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,s=r.filter(Boolean),a=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=c(f,o,a),m=o,g={},h=0;for(let p=0;p<s.length;p++){const{name:n,fn:r}=s[p],{x:y,y:x,data:w,reset:b}=await r({x:u,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:g,rects:f,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=x?x:d,g={...g,[n]:{...g[n],...w}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(m=b.placement),b.rects&&(f=!0===b.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):b.rects),({x:u,y:d}=c(f,m,a))),p=-1)}return{x:u,y:d,placement:m,strategy:i,middlewareData:g}})(t,e,{...i,platform:r})}}}]);