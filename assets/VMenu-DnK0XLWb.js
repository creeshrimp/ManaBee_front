import{ag as _e,ah as $e,n as ye,p as j,a as V,m as I,$ as fe,r as _,ab as $,z as he,J as R,V as W,ai as st,y as T,Y as oe,H,I as Ae,B as we,aj as We,ac as Ee,a6 as be,ak as Pe,a8 as lt,v as z,X as ct,K as ut,al as qe,am as ft,an as vt,a4 as ze,M as je,q as dt,W as Ye,s as mt,L as Ke,C as Ue,ao as gt,P as yt,Q as ht,a1 as wt,F as Et,D as bt,G as xt,a3 as St,ap as kt,aq as pe,O as Ot,ar as ie,as as At,at as Pt}from"./index-BDH8iWJ7.js";import{h as J,i as pt,s as ve,j as Ct,k as Xe,n as Ge,B as re,l as Ce,g as Tt}from"./forwardRefs-VwF6uVcR.js";import{z as Te,A as se,B as le,C as Le,D as Me,u as Lt,h as Mt,n as Bt,E as Rt,M as Ft,k as Vt,i as Dt,o as Nt}from"./index-xAJpoQmD.js";import{e as Ht,m as It,d as Je}from"./scopeId-C8WInEEY.js";const Z=new WeakMap;function _t(e,n){Object.keys(n).forEach(t=>{if(_e(t)){const o=$e(t),a=Z.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[u,i]=r;u===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),Z.has(e)||Z.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function $t(e,n){Object.keys(n).forEach(t=>{if(_e(t)){const o=$e(t),a=Z.get(e);a==null||a.forEach(r=>{const[u,i]=r;u===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(t)})}function Qe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Wt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?qt(e):xe(e))return e;e=e.parentElement}return document.scrollingElement}function te(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(xe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function xe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function qt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function zt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const jt=j({target:[Object,Array]},"v-dialog-transition"),Yt=ye()({name:"VDialogTransition",props:jt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,r){var x;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),a.style.visibility="";const{x:u,y:i,sx:l,sy:f,speed:s}=Re(e.target,a),E=J(a,[{transform:`translate(${u}px, ${i}px) scale(${l}, ${f})`,opacity:0},{}],{duration:225*s,easing:Ct});(x=Be(a))==null||x.forEach(y=>{J(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:ve})}),E.finished.then(()=>r())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,r){var x;await new Promise(y=>requestAnimationFrame(y));const{x:u,y:i,sx:l,sy:f,speed:s}=Re(e.target,a);J(a,[{},{transform:`translate(${u}px, ${i}px) scale(${l}, ${f})`,opacity:0}],{duration:125*s,easing:pt}).finished.then(()=>r()),(x=Be(a))==null||x.forEach(y=>{J(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:ve})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?V(fe,I({name:"dialog-transition"},o,{css:!1}),t):V(fe,{name:"dialog-transition"},t)}});function Be(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Re(e,n){const t=Xe(e),o=Ge(n),[a,r]=getComputedStyle(n).transformOrigin.split(" ").map(m=>parseFloat(m)),[u,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=t.left+t.width/2;u==="left"||i==="left"?l-=t.width/2:(u==="right"||i==="right")&&(l+=t.width/2);let f=t.top+t.height/2;u==="top"||i==="top"?f-=t.height/2:(u==="bottom"||i==="bottom")&&(f+=t.height/2);const s=t.width/o.width,E=t.height/o.height,x=Math.max(1,s,E),y=s/x||0,g=E/x||0,d=o.width*o.height/(window.innerWidth*window.innerHeight),c=d>.12?Math.min(1.5,(d-.12)*10+1):1;return{x:l-(a+o.left),y:f-(r+o.top),sx:y,sy:g,speed:c}}function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Kt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Fe(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return ce({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ce({x:a,y:r},n)}return ce({x:n.width/2,y:n.height/2},n)}const Ze={static:Gt,connected:Qt},Ut=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ze},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Xt(e,n){const t=_({}),o=_();$&&he(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var u,i;R(()=>e.locationStrategy,r),W(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(u=e.locationStrategy(n,e,t))==null?void 0:u.updateLocation:o.value=(i=Ze[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function a(r){var u;(u=o.value)==null||u.call(o,r)}return{contentStyles:t,updateLocation:o}}function Gt(){}function Jt(e,n){const t=Ge(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Qt(e,n,t){(Array.isArray(e.target.value)||zt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=st(()=>{const g=Te(n.location,e.isRtl.value),d=n.origin==="overlap"?g:n.origin==="auto"?se(g):Te(n.origin,e.isRtl.value);return g.side===d.side&&g.align===le(d).align?{preferredAnchor:Le(g),preferredOrigin:Le(d)}:{preferredAnchor:g,preferredOrigin:d}}),[u,i,l,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>T(()=>{const d=parseFloat(n[g]);return isNaN(d)?1/0:d})),s=T(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let E=!1;const x=new ResizeObserver(()=>{E&&y()});R([e.target,e.contentEl],(g,d)=>{let[c,m]=g,[h,w]=d;h&&!Array.isArray(h)&&x.unobserve(h),c&&!Array.isArray(c)&&x.observe(c),w&&x.unobserve(w),m&&x.observe(m)},{immediate:!0}),W(()=>{x.disconnect()});function y(){if(E=!1,requestAnimationFrame(()=>E=!0),!e.target.value||!e.contentEl.value)return;const g=Xe(e.target.value),d=Jt(e.contentEl.value,e.isRtl.value),c=te(e.contentEl.value),m=12;c.length||(c.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(d.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),d.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const h=c.reduce((C,A)=>{const b=A.getBoundingClientRect(),k=new re({x:A===document.documentElement?0:b.x,y:A===document.documentElement?0:b.y,width:A.clientWidth,height:A.clientHeight});return C?new re({x:Math.max(C.left,k.left),y:Math.max(C.top,k.top),width:Math.min(C.right,k.right)-Math.max(C.left,k.left),height:Math.min(C.bottom,k.bottom)-Math.max(C.top,k.top)}):k},void 0);h.x+=m,h.y+=m,h.width-=m*2,h.height-=m*2;let w={anchor:a.value,origin:r.value};function O(C){const A=new re(d),b=Fe(C.anchor,g),k=Fe(C.origin,A);let{x:D,y:N}=Kt(b,k);switch(C.anchor.side){case"top":N-=s.value[0];break;case"bottom":N+=s.value[0];break;case"left":D-=s.value[0];break;case"right":D+=s.value[0];break}switch(C.anchor.align){case"top":N-=s.value[1];break;case"bottom":N+=s.value[1];break;case"left":D-=s.value[1];break;case"right":D+=s.value[1];break}return A.x+=D,A.y+=N,A.width=Math.min(A.width,l.value),A.height=Math.min(A.height,f.value),{overflows:Ce(A,h),x:D,y:N}}let P=0,M=0;const p={x:0,y:0},v={x:!1,y:!1};let B=-1;for(;!(B++>10);){const{x:C,y:A,overflows:b}=O(w);P+=C,M+=A,d.x+=C,d.y+=A;{const k=Me(w.anchor),D=b.x.before||b.x.after,N=b.y.before||b.y.after;let Y=!1;if(["x","y"].forEach(L=>{if(L==="x"&&D&&!v.x||L==="y"&&N&&!v.y){const q={anchor:{...w.anchor},origin:{...w.origin}},K=L==="x"?k==="y"?le:se:k==="y"?se:le;q.anchor=K(q.anchor),q.origin=K(q.origin);const{overflows:U}=O(q);(U[L].before<=b[L].before&&U[L].after<=b[L].after||U[L].before+U[L].after<(b[L].before+b[L].after)/2)&&(w=q,Y=v[L]=!0)}}),Y)continue}b.x.before&&(P+=b.x.before,d.x+=b.x.before),b.x.after&&(P-=b.x.after,d.x-=b.x.after),b.y.before&&(M+=b.y.before,d.y+=b.y.before),b.y.after&&(M-=b.y.after,d.y-=b.y.after);{const k=Ce(d,h);p.x=h.width-k.x.before-k.x.after,p.y=h.height-k.y.before-k.y.after,P+=k.x.before,d.x+=k.x.before,M+=k.y.before,d.y+=k.y.before}break}const ae=Me(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:H(ue(M)),left:e.isRtl.value?void 0:H(ue(P)),right:e.isRtl.value?H(ue(-P)):void 0,minWidth:H(ae==="y"?Math.min(u.value,g.width):u.value),maxWidth:H(Ve(Ae(p.x,u.value===1/0?0:u.value,l.value))),maxHeight:H(Ve(Ae(p.y,i.value===1/0?0:i.value,f.value)))}),{available:p,contentBox:d}}return R(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>y()),oe(()=>{const g=y();if(!g)return;const{available:d,contentBox:c}=g;c.height>d.y&&requestAnimationFrame(()=>{y(),requestAnimationFrame(()=>{y()})})}),{updateLocation:y}}function ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ve(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let de=!0;const ne=[];function Zt(e){!de||ne.length?(ne.push(e),me()):(de=!1,e(),me())}let De=-1;function me(){cancelAnimationFrame(De),De=requestAnimationFrame(()=>{const e=ne.shift();e&&e(),ne.length?me():de=!0})}const ee={none:null,close:nn,block:on,reposition:an},en=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ee}},"VOverlay-scroll-strategies");function tn(e,n){if(!$)return;let t;we(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=We(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ee[e.scrollStrategy])==null||o.call(ee,n,e,t)}))}),W(()=>{t==null||t.stop()})}function nn(e){function n(t){e.isActive.value=!1}et(e.targetEl.value??e.contentEl.value,n)}function on(e,n){var u;const t=(u=e.root.value)==null?void 0:u.offsetParent,o=[...new Set([...te(e.targetEl.value,n.contained?t:void 0),...te(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>xe(i)&&i)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,l)=>{i.style.setProperty("--v-body-scroll-x",H(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",H(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",H(a)),i.classList.add("v-overlay-scroll-blocked")}),W(()=>{o.forEach((i,l)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),E=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-s,i.style.scrollBehavior=E}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function an(e,n,t){let o=!1,a=-1,r=-1;function u(i){Zt(()=>{var s,E;const l=performance.now();(E=(s=e.updateLocation).value)==null||E.call(s,i),o=(performance.now()-l)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{et(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{u(i)})})):u(i)})})}),W(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function et(e,n){const t=[document,...te(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),W(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const ge=Symbol.for("vuetify:v-menu"),rn=j({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...It()},"VOverlay-activator");function sn(e,n){let{isActive:t,isTop:o,contentEl:a}=n;const r=Ee("useActivator"),u=_();let i=!1,l=!1,f=!0;const s=T(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),E=T(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:x,runCloseDelay:y}=Ht(e,v=>{v===(e.openOnHover&&i||s.value&&l)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==v&&(f=!0),t.value=v)}),g=_(),d={onClick:v=>{v.stopPropagation(),u.value=v.currentTarget||v.target,t.value||(g.value=[v.clientX,v.clientY]),t.value=!t.value},onMouseenter:v=>{var B;(B=v.sourceCapabilities)!=null&&B.firesTouchEvents||(i=!0,u.value=v.currentTarget||v.target,x())},onMouseleave:v=>{i=!1,y()},onFocus:v=>{lt(v.target,":focus-visible")!==!1&&(l=!0,v.stopPropagation(),u.value=v.currentTarget||v.target,x())},onBlur:v=>{l=!1,v.stopPropagation(),y()}},c=T(()=>{const v={};return E.value&&(v.onClick=d.onClick),e.openOnHover&&(v.onMouseenter=d.onMouseenter,v.onMouseleave=d.onMouseleave),s.value&&(v.onFocus=d.onFocus,v.onBlur=d.onBlur),v}),m=T(()=>{const v={};if(e.openOnHover&&(v.onMouseenter=()=>{i=!0,x()},v.onMouseleave=()=>{i=!1,y()}),s.value&&(v.onFocusin=()=>{l=!0,x()},v.onFocusout=()=>{l=!1,y()}),e.closeOnContentClick){const B=be(ge,null);v.onClick=()=>{t.value=!1,B==null||B.closeParents()}}return v}),h=T(()=>{const v={};return e.openOnHover&&(v.onMouseenter=()=>{f&&(i=!0,f=!1,x())},v.onMouseleave=()=>{i=!1,y()}),v});R(o,v=>{var B;v&&(e.openOnHover&&!i&&(!s.value||!l)||s.value&&!l&&(!e.openOnHover||!i))&&!((B=a.value)!=null&&B.contains(document.activeElement))&&(t.value=!1)}),R(t,v=>{v||setTimeout(()=>{g.value=void 0})},{flush:"post"});const w=Pe();we(()=>{w.value&&oe(()=>{u.value=w.el})});const O=Pe(),P=T(()=>e.target==="cursor"&&g.value?g.value:O.value?O.el:tt(e.target,r)||u.value),M=T(()=>Array.isArray(P.value)?void 0:P.value);let p;return R(()=>!!e.activator,v=>{v&&$?(p=We(),p.run(()=>{ln(e,r,{activatorEl:u,activatorEvents:c})})):p&&p.stop()},{flush:"post",immediate:!0}),W(()=>{p==null||p.stop()}),{activatorEl:u,activatorRef:w,target:P,targetEl:M,targetRef:O,activatorEvents:c,contentEvents:m,scrimEvents:h}}function ln(e,n,t){let{activatorEl:o,activatorEvents:a}=t;R(()=>e.activator,(l,f)=>{if(f&&l!==f){const s=i(f);s&&u(s)}l&&oe(()=>r())},{immediate:!0}),R(()=>e.activatorProps,()=>{r()}),W(()=>{u()});function r(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;l&&_t(l,I(a.value,f))}function u(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;l&&$t(l,I(a.value,f))}function i(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=tt(l,n);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function tt(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let r=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function cn(){if(!$)return z(!1);const{ssr:e}=ct();if(e){const n=z(!1);return ut(()=>{n.value=!0}),n}else return z(!0)}const un=j({eager:Boolean},"lazy");function fn(e,n){const t=z(!1),o=T(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Ne=Symbol.for("vuetify:stack"),G=qe([]);function vn(e,n,t){const o=Ee("useStack"),a=!t,r=be(Ne,void 0),u=qe({activeChildren:new Set});ze(Ne,u);const i=z(+n.value);he(e,()=>{var E;const s=(E=G.at(-1))==null?void 0:E[1];i.value=s?s+10:+n.value,a&&G.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),W(()=>{if(a){const x=ft(G).findIndex(y=>y[0]===o.uid);G.splice(x,1)}r==null||r.activeChildren.delete(o.uid)})});const l=z(!0);a&&we(()=>{var E;const s=((E=G.at(-1))==null?void 0:E[0])===o.uid;setTimeout(()=>l.value=s)});const f=T(()=>!u.activeChildren.size);return{globalTop:vt(l),localTop:f,stackStyles:T(()=>({zIndex:i.value}))}}function dn(e){return{teleportTarget:T(()=>{const t=e();if(t===!0||!$)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=[...o.children].find(r=>r.matches(".v-overlay-container"));return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function mn(){return!0}function nt(e,n,t){if(!e||ot(e,t)===!1)return!1;const o=Qe(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function ot(e,n){return(typeof n.value=="object"&&n.value.closeConditional||mn)(e)}function gn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&nt(e,n,t)&&setTimeout(()=>{ot(e,t)&&o&&o(e)},0)}function He(e,n){const t=Qe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const yn={mounted(e,n){const t=a=>gn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=nt(a,e,n)};He(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){e._clickOutside&&(He(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function hn(e){const{modelValue:n,color:t,...o}=e;return V(fe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&V("div",I({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const at=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...rn(),...xt(),...Dt(),...un(),...Ut(),...en(),...bt(),...Vt()},"VOverlay"),Ie=ye()({name:"VOverlay",directives:{ClickOutside:yn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...at()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=Ee("VOverlay"),u=_(),i=_(),l=_(),f=je(e,"modelValue"),s=T({get:()=>f.value,set:S=>{S&&e.disabled||(f.value=S)}}),{themeClasses:E}=dt(e),{rtlClasses:x,isRtl:y}=Ye(),{hasContent:g,onAfterLeave:d}=fn(e,s),c=Lt(T(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:m,localTop:h,stackStyles:w}=vn(s,mt(e,"zIndex"),e._disableGlobalStack),{activatorEl:O,activatorRef:P,target:M,targetEl:p,targetRef:v,activatorEvents:B,contentEvents:ae,scrimEvents:C}=sn(e,{isActive:s,isTop:h,contentEl:l}),{teleportTarget:A}=dn(()=>{var X,ke,Oe;const S=e.attach||e.contained;if(S)return S;const F=((X=O==null?void 0:O.value)==null?void 0:X.getRootNode())||((Oe=(ke=r.proxy)==null?void 0:ke.$el)==null?void 0:Oe.getRootNode());return F instanceof ShadowRoot?F:!1}),{dimensionStyles:b}=Mt(e),k=cn(),{scopeId:D}=Je();R(()=>e.disabled,S=>{S&&(s.value=!1)});const{contentStyles:N,updateLocation:Y}=Xt(e,{isRtl:y,contentEl:l,target:M,isActive:s});tn(e,{root:u,contentEl:l,targetEl:p,isActive:s,updateLocation:Y});function L(S){a("click:outside",S),e.persistent?Q():s.value=!1}function q(S){return s.value&&m.value&&(!e.scrim||S.target===i.value||S instanceof MouseEvent&&S.shadowTarget===i.value)}$&&R(s,S=>{S?window.addEventListener("keydown",K):window.removeEventListener("keydown",K)},{immediate:!0}),Ke(()=>{$&&window.removeEventListener("keydown",K)});function K(S){var F,X;S.key==="Escape"&&m.value&&(e.persistent?Q():(s.value=!1,(F=l.value)!=null&&F.contains(document.activeElement)&&((X=O.value)==null||X.focus())))}const U=Bt();he(()=>e.closeOnBack,()=>{Rt(U,S=>{m.value&&s.value?(S(!1),e.persistent?Q():s.value=!1):S()})});const Se=_();R(()=>s.value&&(e.absolute||e.contained)&&A.value==null,S=>{if(S){const F=Wt(u.value);F&&F!==document.scrollingElement&&(Se.value=F.scrollTop)}});function Q(){e.noClickAnimation||l.value&&J(l.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ve})}function it(){a("afterEnter")}function rt(){d(),a("afterLeave")}return Ue(()=>{var S;return V(Et,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:s.value,targetRef:v,props:I({ref:P},B.value,e.activatorProps)}),k.value&&g.value&&V(gt,{disabled:!A.value,to:A.value},{default:()=>[V("div",I({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},E.value,x.value,e.class],style:[w.value,{"--v-overlay-opacity":e.opacity,top:H(Se.value)},e.style],ref:u},D,o),[V(hn,I({color:c,modelValue:s.value&&!!e.scrim,ref:i},C.value),null),V(Ft,{appear:!0,persisted:!0,transition:e.transition,target:M.value,onAfterEnter:it,onAfterLeave:rt},{default:()=>{var F;return[yt(V("div",I({ref:l,class:["v-overlay__content",e.contentClass],style:[b.value,N.value]},ae.value,e.contentProps),[(F=t.default)==null?void 0:F.call(t,{isActive:s})]),[[ht,s.value],[wt("click-outside"),{handler:L,closeConditional:q,include:()=>[O.value]}]])]}})])]})])}),{activatorEl:O,scrimEl:i,target:M,animateClick:Q,contentEl:l,globalTop:m,localTop:h,updateLocation:Y}}}),wn=j({id:String,submenu:Boolean,...Ot(at({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Yt}}),["absolute"])},"VMenu"),kn=ye()({name:"VMenu",props:wn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=je(e,"modelValue"),{scopeId:a}=Je(),{isRtl:r}=Ye(),u=St(),i=T(()=>e.id||`v-menu-${u}`),l=_(),f=be(ge,null),s=z(new Set);ze(ge,{register(){s.value.add(u)},unregister(){s.value.delete(u)},closeParents(c){setTimeout(()=>{var m;!s.value.size&&!e.persistent&&(c==null||(m=l.value)!=null&&m.contentEl&&!Pt(c,l.value.contentEl))&&(o.value=!1,f==null||f.closeParents())},40)}}),Ke(()=>{f==null||f.unregister(),document.removeEventListener("focusin",E)}),kt(()=>o.value=!1);async function E(c){var w,O,P;const m=c.relatedTarget,h=c.target;await oe(),o.value&&m!==h&&((w=l.value)!=null&&w.contentEl)&&((O=l.value)!=null&&O.globalTop)&&![document,l.value.contentEl].includes(h)&&!l.value.contentEl.contains(h)&&((P=pe(l.value.contentEl)[0])==null||P.focus())}R(o,c=>{c?(f==null||f.register(),$&&document.addEventListener("focusin",E,{once:!0})):(f==null||f.unregister(),$&&document.removeEventListener("focusin",E))},{immediate:!0});function x(c){f==null||f.closeParents(c)}function y(c){var m,h,w,O,P;if(!e.disabled)if(c.key==="Tab"||c.key==="Enter"&&!e.closeOnContentClick){if(c.key==="Enter"&&(c.target instanceof HTMLTextAreaElement||c.target instanceof HTMLInputElement&&c.target.closest("form")))return;c.key==="Enter"&&c.preventDefault(),At(pe((m=l.value)==null?void 0:m.contentEl,!1),c.shiftKey?"prev":"next",p=>p.tabIndex>=0)||(o.value=!1,(w=(h=l.value)==null?void 0:h.activatorEl)==null||w.focus())}else e.submenu&&c.key===(r.value?"ArrowRight":"ArrowLeft")&&(o.value=!1,(P=(O=l.value)==null?void 0:O.activatorEl)==null||P.focus())}function g(c){var h;if(e.disabled)return;const m=(h=l.value)==null?void 0:h.contentEl;m&&o.value?c.key==="ArrowDown"?(c.preventDefault(),c.stopImmediatePropagation(),ie(m,"next")):c.key==="ArrowUp"?(c.preventDefault(),c.stopImmediatePropagation(),ie(m,"prev")):e.submenu&&(c.key===(r.value?"ArrowRight":"ArrowLeft")?o.value=!1:c.key===(r.value?"ArrowLeft":"ArrowRight")&&(c.preventDefault(),ie(m,"first"))):(e.submenu?c.key===(r.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(c.key))&&(o.value=!0,c.preventDefault(),setTimeout(()=>setTimeout(()=>g(c))))}const d=T(()=>I({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-controls":i.value,onKeydown:g},e.activatorProps));return Ue(()=>{const c=Ie.filterProps(e);return V(Ie,I({ref:l,id:i.value,class:["v-menu",e.class],style:e.style},c,{modelValue:o.value,"onUpdate:modelValue":m=>o.value=m,absolute:!0,activatorProps:d.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":x,onKeydown:y},a),{activator:t.activator,default:function(){for(var m=arguments.length,h=new Array(m),w=0;w<m;w++)h[w]=arguments[w];return V(Nt,{root:"VMenu"},{default:()=>{var O;return[(O=t.default)==null?void 0:O.call(t,...h)]}})}})}),Tt({id:i,ΨopenChildren:s},l)}});export{kn as V,Yt as a,Wt as g};
