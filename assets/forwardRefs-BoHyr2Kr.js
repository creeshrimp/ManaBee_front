import{k as T,aN as oe,$ as Q,aE as re,p as I,aO as Ae,B as G,D as W,l as D,Z as Ee,n as O,A as N,a as f,al as $e,M as ue,ac as ce,K as Ne,L as Z,aP as ze,v,a2 as Fe,a7 as Me,aQ as Ge,f as We,a3 as De,a4 as de,a6 as qe,J as ee,m as fe,r as ve,s as Ue,aR as je,q as pe,E as P,z as Xe,W as ge,I as ae,ab as He,aI as me,Y as Ye,a0 as se,P as Je}from"./index-Bspives2.js";import{v as he,m as q,d as te,e as ye,p as be,f as Ce,r as xe,a as Se,b as we,c as ne,F as Be,y as K,G as Ie,z as Ke,u as p,w as Qe,h as Ze,g as et,s as tt,q as nt,R as at,x as st,V as X,o as H}from"./index-BDweA3nG.js";class M{constructor(o){let{x:s,y:t,width:i,height:n}=o;this.x=s,this.y=t,this.width=i,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function _t(e,o){return{x:{before:Math.max(0,o.left-e.left),after:Math.max(0,e.right-o.right)},y:{before:Math.max(0,o.top-e.top),after:Math.max(0,e.bottom-o.bottom)}}}function Vt(e){return Array.isArray(e)?new M({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function kt(e){const o=e.getBoundingClientRect(),s=getComputedStyle(e),t=s.transform;if(t){let i,n,a,l,c;if(t.startsWith("matrix3d("))i=t.slice(9,-1).split(/, /),n=+i[0],a=+i[5],l=+i[12],c=+i[13];else if(t.startsWith("matrix("))i=t.slice(7,-1).split(/, /),n=+i[0],a=+i[3],l=+i[4],c=+i[5];else return new M(o);const g=s.transformOrigin,y=o.x-l-(1-n)*parseFloat(g),b=o.y-c-(1-a)*parseFloat(g.slice(g.indexOf(" ")+1)),r=n?o.width/n:e.offsetWidth+1,d=a?o.height/a:e.offsetHeight+1;return new M({x:y,y:b,width:r,height:d})}else return new M(o)}function Rt(e,o,s){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(o,s)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(i=>{t.onfinish=()=>{i(t)}})),t}const Ot="cubic-bezier(0.4, 0, 0.2, 1)",Tt="cubic-bezier(0.0, 0, 0.2, 1)",Lt="cubic-bezier(0.4, 0, 1, 1)",it=I({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function w(e,o,s){return T()({name:e,props:it({mode:s,origin:o}),setup(t,i){let{slots:n}=i;const a={onBeforeEnter(l){t.origin&&(l.style.transformOrigin=t.origin)},onLeave(l){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:g,offsetWidth:y,offsetHeight:b}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${c}px`,l.style.left=`${g}px`,l.style.width=`${y}px`,l.style.height=`${b}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:c,top:g,left:y,width:b,height:r}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=c||"",l.style.top=g||"",l.style.left=y||"",l.style.width=b||"",l.style.height=r||""}}};return()=>{const l=t.group?oe:Q;return re(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:a},n.default)}}})}function Pe(e,o){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return T()({name:e,props:{mode:{type:String,default:s},disabled:Boolean,group:Boolean},setup(t,i){let{slots:n}=i;const a=t.group?oe:Q;return()=>re(a,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:o},n.default)}})}function _e(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Ae(`offset-${s}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[s]:a.style[s]}},onEnter(a){const l=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const c=`${a[t]}px`;a.style[s]="0",a.offsetHeight,a.style.transition=l.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[s]=c})},onAfterEnter:n,onEnterCancelled:n,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[s]:a.style[s]},a.style.overflow="hidden",a.style[s]=`${a[t]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[s]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(a){e&&a._parent&&a._parent.classList.remove(e),n(a)}function n(a){const l=a._initialStyle[s];a.style.overflow=a._initialStyle.overflow,l!=null&&(a.style[s]=l),delete a._initialStyle}}w("fab-transition","center center","out-in");w("dialog-bottom-transition");w("dialog-top-transition");const At=w("fade-transition");w("scale-transition");w("scroll-x-transition");w("scroll-x-reverse-transition");w("scroll-y-transition");w("scroll-y-reverse-transition");w("slide-x-transition");w("slide-x-reverse-transition");const Et=w("slide-y-transition");w("slide-y-reverse-transition");const $t=Pe("expand-transition",_e()),Nt=Pe("expand-x-transition",_e("",!0)),Ve=I({baseColor:String,divided:Boolean,...Ce(),...W(),...be(),...ye(),...te(),...q(),...G(),...he()},"VBtnGroup"),ie=T()({name:"VBtnGroup",props:Ve(),setup(e,o){let{slots:s}=o;const{themeClasses:t}=D(e),{densityClasses:i}=xe(e),{borderClasses:n}=Se(e),{elevationClasses:a}=we(e),{roundedClasses:l}=ne(e);Ee({VBtn:{height:"auto",baseColor:O(e,"baseColor"),color:O(e,"color"),density:O(e,"density"),flat:!0,variant:O(e,"variant")}}),N(()=>f(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,n.value,i.value,a.value,l.value,e.class],style:e.style},s))}}),lt=I({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),ot=I({value:null,disabled:Boolean,selectedClass:String},"group-item");function rt(e,o){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=ce("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=De();de(Symbol.for(`${o.description}:id`),i);const n=qe(o,null);if(!n){if(!s)return n;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${o.description}`)}const a=O(e,"value"),l=v(()=>!!(n.disabled.value||e.disabled));n.register({id:i,value:a,disabled:l},t),Z(()=>{n.unregister(i)});const c=v(()=>n.isSelected(i)),g=v(()=>n.items.value[0].id===i),y=v(()=>n.items.value[n.items.value.length-1].id===i),b=v(()=>c.value&&[n.selectedClass.value,e.selectedClass]);return ee(c,r=>{t.emit("group:selected",{value:r})},{flush:"sync"}),{id:i,isSelected:c,isFirst:g,isLast:y,toggle:()=>n.select(i,!c.value),select:r=>n.select(i,r),selectedClass:b,value:a,disabled:l,group:n}}function ut(e,o){let s=!1;const t=$e([]),i=ue(e,"modelValue",[],r=>r==null?[]:ke(t,Me(r)),r=>{const d=dt(t,r);return e.multiple?d:d[0]}),n=ce("useGroup");function a(r,d){const h=r,u=Symbol.for(`${o.description}:id`),C=Ge(u,n==null?void 0:n.vnode).indexOf(d);We(h.value)==null&&(h.value=C,h.useIndexAsValue=!0),C>-1?t.splice(C,0,h):t.push(h)}function l(r){if(s)return;c();const d=t.findIndex(h=>h.id===r);t.splice(d,1)}function c(){const r=t.find(d=>!d.disabled);r&&e.mandatory==="force"&&!i.value.length&&(i.value=[r.id])}Ne(()=>{c()}),Z(()=>{s=!0}),ze(()=>{for(let r=0;r<t.length;r++)t[r].useIndexAsValue&&(t[r].value=r)});function g(r,d){const h=t.find(u=>u.id===r);if(!(d&&(h!=null&&h.disabled)))if(e.multiple){const u=i.value.slice(),m=u.findIndex(_=>_===r),C=~m;if(d=d??!C,C&&e.mandatory&&u.length<=1||!C&&e.max!=null&&u.length+1>e.max)return;m<0&&d?u.push(r):m>=0&&!d&&u.splice(m,1),i.value=u}else{const u=i.value.includes(r);if(e.mandatory&&u)return;i.value=d??!u?[r]:[]}}function y(r){if(e.multiple,i.value.length){const d=i.value[0],h=t.findIndex(C=>C.id===d);let u=(h+r)%t.length,m=t[u];for(;m.disabled&&u!==h;)u=(u+r)%t.length,m=t[u];if(m.disabled)return;i.value=[t[u].id]}else{const d=t.find(h=>!h.disabled);d&&(i.value=[d.id])}}const b={register:a,unregister:l,selected:i,select:g,disabled:O(e,"disabled"),prev:()=>y(t.length-1),next:()=>y(1),isSelected:r=>i.value.includes(r),selectedClass:v(()=>e.selectedClass),items:v(()=>t),getItemIndex:r=>ct(t,r)};return de(o,b),b}function ct(e,o){const s=ke(e,[o]);return s.length?e.findIndex(t=>t.id===s[0]):-1}function ke(e,o){const s=[];return o.forEach(t=>{const i=e.find(a=>Fe(t,a.value)),n=e[t];(i==null?void 0:i.value)!=null?s.push(i.id):n!=null&&s.push(n.id)}),s}function dt(e,o){const s=[];return o.forEach(t=>{const i=e.findIndex(n=>n.id===t);if(~i){const n=e[i];s.push(n.value!=null?n.value:i)}}),s}const Re=Symbol.for("vuetify:v-btn-toggle"),ft=I({...Ve(),...lt()},"VBtnToggle");T()({name:"VBtnToggle",props:ft(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:s}=o;const{isSelected:t,next:i,prev:n,select:a,selected:l}=ut(e,Re);return N(()=>{const c=ie.filterProps(e);return f(ie,fe({class:["v-btn-toggle",e.class]},c,{style:e.style}),{default:()=>{var g;return[(g=s.default)==null?void 0:g.call(s,{isSelected:t,next:i,prev:n,select:a,selected:l})]}})}),{next:i,prev:n,select:a}}});function Oe(e,o){const s=ve(),t=Ue(!1);if(je){const i=new IntersectionObserver(n=>{t.value=!!n.find(a=>a.isIntersecting)},o);Z(()=>{i.disconnect()}),ee(s,(n,a)=>{a&&(i.unobserve(a),t.value=!1),n&&i.observe(n)},{flush:"post"})}return{intersectionRef:s,isIntersecting:t}}const vt=I({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...W(),...Ie(),...q({tag:"div"}),...G()},"VProgressCircular"),gt=T()({name:"VProgressCircular",props:vt(),setup(e,o){let{slots:s}=o;const t=20,i=2*Math.PI*t,n=ve(),{themeClasses:a}=D(e),{sizeClasses:l,sizeStyles:c}=Be(e),{textColorClasses:g,textColorStyles:y}=K(O(e,"color")),{textColorClasses:b,textColorStyles:r}=K(O(e,"bgColor")),{intersectionRef:d,isIntersecting:h}=Oe(),{resizeRef:u,contentRect:m}=pe(),C=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),_=v(()=>Number(e.width)),V=v(()=>c.value?Number(e.size):m.value?m.value.width:Math.max(_.value,32)),B=v(()=>t/(1-_.value/V.value)*2),R=v(()=>_.value/V.value*B.value),L=v(()=>P((100-C.value)/100*i));return Xe(()=>{d.value=n.value,u.value=n.value}),N(()=>f(e.tag,{ref:n,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},a.value,l.value,g.value,e.class],style:[c.value,y.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[f("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[f("circle",{class:["v-progress-circular__underlay",b.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":R.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),f("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":R.value,"stroke-dasharray":i,"stroke-dashoffset":L.value},null)]),s.default&&f("div",{class:"v-progress-circular__content"},[s.default({value:C.value})])]})),{}}}),le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Te=I({location:String},"location");function Le(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=ge();return{locationStyles:v(()=>{if(!e.location)return{};const{side:n,align:a}=Ke(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(g){return s?s(g):0}const c={};return n!=="center"&&(o?c[le[n]]=`calc(100% - ${l(n)}px)`:c[n]=0),a!=="center"?o?c[le[a]]=`calc(100% - ${l(a)}px)`:c[a]=0:(n==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[n]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[n]),c})}}const mt=I({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...W(),...Te({location:"top"}),...te(),...q(),...G()},"VProgressLinear"),ht=T()({name:"VProgressLinear",props:mt(),emits:{"update:modelValue":e=>!0},setup(e,o){var x;let{slots:s}=o;const t=ue(e,"modelValue"),{isRtl:i,rtlClasses:n}=ge(),{themeClasses:a}=D(e),{locationStyles:l}=Le(e),{textColorClasses:c,textColorStyles:g}=K(e,"color"),{backgroundColorClasses:y,backgroundColorStyles:b}=p(v(()=>e.bgColor||e.color)),{backgroundColorClasses:r,backgroundColorStyles:d}=p(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:u}=p(e,"color"),{roundedClasses:m}=ne(e),{intersectionRef:C,isIntersecting:_}=Oe(),V=v(()=>parseFloat(e.max)),B=v(()=>parseFloat(e.height)),R=v(()=>ae(parseFloat(e.bufferValue)/V.value*100,0,100)),L=v(()=>ae(parseFloat(t.value)/V.value*100,0,100)),k=v(()=>i.value!==e.reverse),U=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),A=He&&((x=window.matchMedia)==null?void 0:x.call(window,"(forced-colors: active)").matches);function j(S){if(!C.value)return;const{left:E,right:z,width:$}=C.value.getBoundingClientRect(),F=k.value?$-S.clientX+(z-$):S.clientX-E;t.value=Math.round(F/$*V.value)}return N(()=>f(e.tag,{ref:C,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&_.value,"v-progress-linear--reverse":k.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},m.value,a.value,n.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?P(B.value):0,"--v-progress-linear-height":P(B.value),...e.absolute?l.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:Math.min(parseFloat(t.value),V.value),onClick:e.clickable&&j},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",c.value],style:{...g.value,[k.value?"left":"right"]:P(-B.value),borderTop:`${P(B.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${P(B.value/4)})`,width:P(100-R.value,"%"),"--v-progress-linear-stream-to":P(B.value*(k.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",A?void 0:y.value],style:[b.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),f("div",{class:["v-progress-linear__buffer",A?void 0:r.value],style:[d.value,{opacity:parseFloat(e.bufferOpacity),width:P(R.value,"%")}]},null),f(Q,{name:U.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(S=>f("div",{key:S,class:["v-progress-linear__indeterminate",S,A?void 0:h.value],style:u.value},null))]):f("div",{class:["v-progress-linear__determinate",A?void 0:h.value],style:[u.value,{width:P(L.value,"%")}]},null)]}),s.default&&f("div",{class:"v-progress-linear__content"},[s.default({value:L.value,buffer:R.value})])]})),{}}}),yt=I({loading:[Boolean,String]},"loader");function bt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:me();return{loaderClasses:v(()=>({[`${o}--loading`]:e.loading}))}}function zt(e,o){var t;let{slots:s}=o;return f("div",{class:`${e.name}__loader`},[((t=s.default)==null?void 0:t.call(s,{color:e.color,isActive:e.active}))||f(ht,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Ct=["static","relative","fixed","absolute","sticky"],xt=I({position:{type:String,validator:e=>Ct.includes(e)}},"position");function St(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:me();return{positionClasses:v(()=>e.position?`${o}--${e.position}`:void 0)}}function wt(e,o){ee(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&o&&Ye(()=>{o(!0)})},{immediate:!0})}const Bt=I({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Re},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:se,appendIcon:se,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Ce(),...W(),...be(),...Ze(),...ye(),...ot(),...yt(),...Te(),...xt(),...te(),...Qe(),...Ie(),...q({tag:"button"}),...G(),...he({variant:"elevated"})},"VBtn"),Ft=T()({name:"VBtn",props:Bt(),emits:{"group:selected":e=>!0},setup(e,o){let{attrs:s,slots:t}=o;const{themeClasses:i}=D(e),{borderClasses:n}=Se(e),{densityClasses:a}=xe(e),{dimensionStyles:l}=et(e),{elevationClasses:c}=we(e),{loaderClasses:g}=bt(e),{locationStyles:y}=Le(e),{positionClasses:b}=St(e),{roundedClasses:r}=ne(e),{sizeClasses:d,sizeStyles:h}=Be(e),u=rt(e,e.symbol,!1),m=tt(e,s),C=v(()=>{var x;return e.active!==void 0?e.active:m.isLink.value?(x=m.isActive)==null?void 0:x.value:u==null?void 0:u.isSelected.value}),_=v(()=>C.value?e.activeColor??e.color:e.color),V=v(()=>{var S,E;return{color:(u==null?void 0:u.isSelected.value)&&(!m.isLink.value||((S=m.isActive)==null?void 0:S.value))||!u||((E=m.isActive)==null?void 0:E.value)?_.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:B,colorStyles:R,variantClasses:L}=nt(V),k=v(()=>(u==null?void 0:u.disabled.value)||e.disabled),U=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),A=v(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function j(x){var S;k.value||m.isLink.value&&(x.metaKey||x.ctrlKey||x.shiftKey||x.button!==0||s.target==="_blank")||((S=m.navigate)==null||S.call(m,x),u==null||u.toggle())}return wt(m,u==null?void 0:u.select),N(()=>{const x=m.isLink.value?"a":e.tag,S=!!(e.prependIcon||t.prepend),E=!!(e.appendIcon||t.append),z=!!(e.icon&&e.icon!==!0);return Je(f(x,fe({type:x==="a"?void 0:"button",class:["v-btn",u==null?void 0:u.selectedClass.value,{"v-btn--active":C.value,"v-btn--block":e.block,"v-btn--disabled":k.value,"v-btn--elevated":U.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,n.value,B.value,a.value,c.value,g.value,b.value,r.value,d.value,L.value,e.class],style:[R.value,l.value,y.value,h.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:k.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:j,value:A.value},m.linkProps),{default:()=>{var $;return[st(!0,"v-btn"),!e.icon&&S&&f("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?f(H,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):f(X,{key:"prepend-icon",icon:e.prependIcon},null)]),f("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&z?f(X,{key:"content-icon",icon:e.icon},null):f(H,{key:"content-defaults",disabled:!z,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var F;return[((F=t.default)==null?void 0:F.call(t))??e.text]}})]),!e.icon&&E&&f("span",{key:"append",class:"v-btn__append"},[t.append?f(H,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):f(X,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&f("span",{key:"loader",class:"v-btn__loader"},[(($=t.loader)==null?void 0:$.call(t))??f(gt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[at,!k.value&&e.ripple,"",{center:!!e.icon}]])}),{group:u}}}),Y=Symbol("Forwarded refs");function J(e,o){let s=e;for(;s;){const t=Reflect.getOwnPropertyDescriptor(s,o);if(t)return t;s=Object.getPrototypeOf(s)}}function Mt(e){for(var o=arguments.length,s=new Array(o>1?o-1:0),t=1;t<o;t++)s[t-1]=arguments[t];return e[Y]=s,new Proxy(e,{get(i,n){if(Reflect.has(i,n))return Reflect.get(i,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const a of s)if(a.value&&Reflect.has(a.value,n)){const l=Reflect.get(a.value,n);return typeof l=="function"?l.bind(a.value):l}}},has(i,n){if(Reflect.has(i,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const a of s)if(a.value&&Reflect.has(a.value,n))return!0;return!1},set(i,n,a){if(Reflect.has(i,n))return Reflect.set(i,n,a);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const l of s)if(l.value&&Reflect.has(l.value,n))return Reflect.set(l.value,n,a);return!1},getOwnPropertyDescriptor(i,n){var l;const a=Reflect.getOwnPropertyDescriptor(i,n);if(a)return a;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const c of s){if(!c.value)continue;const g=J(c.value,n)??("_"in c.value?J((l=c.value._)==null?void 0:l.setupState,n):void 0);if(g)return g}for(const c of s){const g=c.value&&c.value[Y];if(!g)continue;const y=g.slice();for(;y.length;){const b=y.shift(),r=J(b.value,n);if(r)return r;const d=b.value&&b.value[Y];d&&y.push(...d)}}}}})}export{M as B,zt as L,Ft as V,Te as a,$t as b,Le as c,St as d,xt as e,yt as f,Mt as g,Rt as h,Lt as i,Tt as j,Vt as k,_t as l,Bt as m,kt as n,lt as o,ut as p,At as q,rt as r,Ot as s,ot as t,bt as u,Nt as v,Et as w};
