import{$ as F,f as K,e as E,i as ee,ai as Se,m as te,a3 as Ne,r as i,C as L,l as de,c as P,ar as Oe,X as we,ag as Pe,ah as je,W as Ie,af as Ee,R as O,o as Me,as as Re,p as Be,at as Te,ak as He,a2 as _e,al as qe,au as ze,v as A,I as Le,a1 as Fe,x as X,y as ue,E as Ae,D as Z,B as D,_ as me,t as Ve,V as We,a8 as De,av as Ge,j as f,N as Xe,A as Qe}from"./index-rd09DNLi.js";import{F as R,I as Ue}from"./index-Iwi_JrOa.js";import{a as ke,d as Je,A as Ye,f as Ze,e as Ke,D as et,T as tt,s as nt,h as ot,o as at,r as it,B as Y}from"./index-sT0Ovbw4.js";import{R as rt}from"./RightOutlined-xQhvP3va.js";const st=e=>{const{componentCls:t,notificationMarginEdge:o,animationMaxHeight:n}=e,a=`${t}-notice`,r=new F("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),d=new F("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),s=new F("antNotificationBottomFadeIn",{"0%":{bottom:e.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),l=new F("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[t]:{[`&${t}-top, &${t}-bottom`]:{marginInline:0,[a]:{marginInline:"auto auto"}},[`&${t}-top`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:d}},[`&${t}-bottom`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:s}},[`&${t}-topRight, &${t}-bottomRight`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:r}},[`&${t}-topLeft, &${t}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:o,_skip_check_:!0},[a]:{marginInlineEnd:"auto",marginInlineStart:0},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:l}}}}},lt=st,ct=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],dt={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},ut=(e,t)=>{const{componentCls:o}=e;return{[`${o}-${t}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[t.startsWith("top")?"top":"bottom"]:0,[dt[t]]:{value:0,_skip_check_:!0}}}}},mt=e=>{const t={};for(let o=1;o<e.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${e.componentCls}-notice`]:{opacity:0,transition:`opacity ${e.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},t)},pt=e=>{const t={};for(let o=1;o<e.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={background:e.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},t)},ft=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-stack`]:{[`& > ${t}-notice-wrapper`]:Object.assign({transition:`all ${e.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},mt(e))},[`${t}-stack:not(${t}-stack-expanded)`]:{[`& > ${t}-notice-wrapper`]:Object.assign({},pt(e))},[`${t}-stack${t}-stack-expanded`]:{[`& > ${t}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${e.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:e.margin,width:"100%",insetInline:0,bottom:e.calc(e.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},ct.map(o=>ut(e,o)).reduce((o,n)=>Object.assign(Object.assign({},o),n),{}))},gt=ft,pe=e=>{const{iconCls:t,componentCls:o,boxShadow:n,fontSizeLG:a,notificationMarginBottom:r,borderRadiusLG:d,colorSuccess:s,colorInfo:l,colorWarning:u,colorError:v,colorTextHeading:h,notificationBg:m,notificationPadding:p,notificationMarginEdge:$,fontSize:y,lineHeight:C,width:c,notificationIconSize:b,colorText:S}=e,g=`${o}-notice`;return{position:"relative",marginBottom:r,marginInlineStart:"auto",background:m,borderRadius:d,boxShadow:n,[g]:{padding:p,width:c,maxWidth:`calc(100vw - ${E(e.calc($).mul(2).equal())})`,overflow:"hidden",lineHeight:C,wordWrap:"break-word"},[`${o}-close-icon`]:{fontSize:y,cursor:"pointer"},[`${g}-message`]:{marginBottom:e.marginXS,color:h,fontSize:a,lineHeight:e.lineHeightLG},[`${g}-description`]:{fontSize:y,color:S},[`${g}-closable ${g}-message`]:{paddingInlineEnd:e.paddingLG},[`${g}-with-icon ${g}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.calc(e.marginSM).add(b).equal(),fontSize:a},[`${g}-with-icon ${g}-description`]:{marginInlineStart:e.calc(e.marginSM).add(b).equal(),fontSize:y},[`${g}-icon`]:{position:"absolute",fontSize:b,lineHeight:1,[`&-success${t}`]:{color:s},[`&-info${t}`]:{color:l},[`&-warning${t}`]:{color:u},[`&-error${t}`]:{color:v}},[`${g}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.closeBtnHoverBg}},[`${g}-btn`]:{float:"right",marginTop:e.marginSM}}},ht=e=>{const{componentCls:t,notificationMarginBottom:o,notificationMarginEdge:n,motionDurationMid:a,motionEaseInOut:r}=e,d=`${t}-notice`,s=new F("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:o},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[t]:Object.assign(Object.assign({},ee(e)),{position:"fixed",zIndex:e.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${t}-hook-holder`]:{position:"relative"},[`${t}-fade-appear-prepare`]:{opacity:"0 !important"},[`${t}-fade-enter, ${t}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:r,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${t}-fade-leave`]:{animationTimingFunction:r,animationFillMode:"both",animationDuration:a,animationPlayState:"paused"},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationPlayState:"running"},[`${t}-fade-leave${t}-fade-leave-active`]:{animationName:s,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${d}-btn`]:{float:"left"}}})},{[t]:{[`${d}-wrapper`]:Object.assign({},pe(e))}}]},fe=e=>({zIndexPopup:e.zIndexPopupBase+Se+50,width:384,closeBtnHoverBg:e.wireframe?"transparent":e.colorFillContent}),ge=e=>{const t=e.paddingMD,o=e.paddingLG;return te(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:t,notificationPaddingHorizontal:o,notificationIconSize:e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),notificationCloseButtonSize:e.calc(e.controlHeightLG).mul(.55).equal(),notificationMarginBottom:e.margin,notificationPadding:`${E(e.paddingMD)} ${E(e.paddingContentHorizontalLG)}`,notificationMarginEdge:e.marginLG,animationMaxHeight:150,notificationStackLayer:3})},he=K("Notification",e=>{const t=ge(e);return[ht(t),lt(t),gt(t)]},fe),bt=Ne(["Notification","PurePanel"],e=>{const t=`${e.componentCls}-notice`,o=ge(e);return{[`${t}-pure-panel`]:Object.assign(Object.assign({},pe(o)),{width:o.width,maxWidth:`calc(100vw - ${E(e.calc(o.notificationMarginEdge).mul(2).equal())})`,margin:0})}},fe);var vt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function ne(e,t){return t===null||t===!1?null:t||i.createElement("span",{className:`${e}-close-x`},i.createElement(we,{className:`${e}-close-icon`}))}const yt={success:Pe,info:je,error:Ie,warning:Ee},be=e=>{const{prefixCls:t,icon:o,type:n,message:a,description:r,btn:d,role:s="alert"}=e;let l=null;return o?l=i.createElement("span",{className:`${t}-icon`},o):n&&(l=i.createElement(yt[n]||null,{className:P(`${t}-icon`,`${t}-icon-${n}`)})),i.createElement("div",{className:P({[`${t}-with-icon`]:l}),role:s},l,i.createElement("div",{className:`${t}-message`},a),i.createElement("div",{className:`${t}-description`},r),d&&i.createElement("div",{className:`${t}-btn`},d))},xt=e=>{const{prefixCls:t,className:o,icon:n,type:a,message:r,description:d,btn:s,closable:l=!0,closeIcon:u,className:v}=e,h=vt(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:m}=i.useContext(L),p=t||m("notification"),$=`${p}-notice`,y=de(p),[C,c,b]=he(p,y);return C(i.createElement("div",{className:P(`${$}-pure-panel`,c,o,b,y)},i.createElement(bt,{prefixCls:p}),i.createElement(Oe,Object.assign({},h,{prefixCls:p,eventKey:"pure",duration:null,closable:l,className:P({notificationClassName:v}),closeIcon:ne(p,u),content:i.createElement(be,{prefixCls:$,icon:n,type:a,message:r,description:d,btn:s})}))))},$t=xt;function Ct(e,t,o){let n;switch(e){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:t,bottom:"auto"};break;case"topLeft":n={left:0,top:t,bottom:"auto"};break;case"topRight":n={right:0,top:t,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:o};break;case"bottomLeft":n={left:0,top:"auto",bottom:o};break;default:n={right:0,top:"auto",bottom:o};break}return n}function St(e){return{motionName:`${e}-fade`}}var Nt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const ae=24,Ot=4.5,wt="topRight",Pt=e=>{let{children:t,prefixCls:o}=e;const n=de(o),[a,r,d]=he(o,n);return a(O.createElement(Te,{classNames:{list:P(r,d,n)}},t))},jt=(e,t)=>{let{prefixCls:o,key:n}=t;return O.createElement(Pt,{prefixCls:o,key:n},e)},It=O.forwardRef((e,t)=>{const{top:o,bottom:n,prefixCls:a,getContainer:r,maxCount:d,rtl:s,onAllRemoved:l,stack:u,duration:v}=e,{getPrefixCls:h,getPopupContainer:m,notification:p,direction:$}=i.useContext(L),[,y]=Me(),C=a||h("notification"),c=N=>Ct(N,o??ae,n??ae),b=()=>P({[`${C}-rtl`]:s??$==="rtl"}),S=()=>St(C),[g,x]=Re({prefixCls:C,style:c,className:b,motion:S,closable:!0,closeIcon:ne(C),duration:v??Ot,getContainer:()=>(r==null?void 0:r())||(m==null?void 0:m())||document.body,maxCount:d,onAllRemoved:l,renderNotifications:jt,stack:u===!1?!1:{threshold:typeof u=="object"?u==null?void 0:u.threshold:void 0,offset:8,gap:y.margin}});return O.useImperativeHandle(t,()=>Object.assign(Object.assign({},g),{prefixCls:C,notification:p})),x});function ve(e){const t=O.useRef(null);return Be(),[O.useMemo(()=>{const n=s=>{var l;if(!t.current)return;const{open:u,prefixCls:v,notification:h}=t.current,m=`${v}-notice`,{message:p,description:$,icon:y,type:C,btn:c,className:b,style:S,role:g="alert",closeIcon:x}=s,N=Nt(s,["message","description","icon","type","btn","className","style","role","closeIcon"]),j=ne(m,typeof x<"u"?x:h==null?void 0:h.closeIcon);return u(Object.assign(Object.assign({placement:(l=e==null?void 0:e.placement)!==null&&l!==void 0?l:wt},N),{content:O.createElement(be,{prefixCls:m,icon:y,type:C,message:p,description:$,btn:c,role:g}),className:P(C&&`${m}-${C}`,b,h==null?void 0:h.className),style:Object.assign(Object.assign({},h==null?void 0:h.style),S),closeIcon:j,closable:!!j}))},r={open:n,destroy:s=>{var l,u;s!==void 0?(l=t.current)===null||l===void 0||l.close(s):(u=t.current)===null||u===void 0||u.destroy()}};return["success","info","warning","error"].forEach(s=>{r[s]=l=>n(Object.assign(Object.assign({},l),{type:s}))}),r},[]),O.createElement(It,Object.assign({key:"notification-holder"},e,{ref:t}))]}function Et(e){return ve(e)}const Q=e=>e?typeof e=="function"?e():e:null,Mt=e=>{const{componentCls:t,popoverColor:o,titleMinWidth:n,fontWeightStrong:a,innerPadding:r,boxShadowSecondary:d,colorTextHeading:s,borderRadiusLG:l,zIndexPopup:u,titleMarginBottom:v,colorBgElevated:h,popoverBg:m,titleBorderBottom:p,innerContentPadding:$,titlePadding:y}=e;return[{[t]:Object.assign(Object.assign({},ee(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:u,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":h,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:m,backgroundClip:"padding-box",borderRadius:l,boxShadow:d,padding:r},[`${t}-title`]:{minWidth:n,marginBottom:v,color:s,fontWeight:a,borderBottom:p,padding:y},[`${t}-inner-content`]:{color:o,padding:$}})},Je(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},Rt=e=>{const{componentCls:t}=e;return{[t]:Ye.map(o=>{const n=e[`${o}6`];return{[`&${t}-${o}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}},Bt=e=>{const{lineWidth:t,controlHeight:o,fontHeight:n,padding:a,wireframe:r,zIndexPopupBase:d,borderRadiusLG:s,marginXS:l,lineType:u,colorSplit:v,paddingSM:h}=e,m=o-n,p=m/2,$=m/2-t,y=a;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:d+30},Ze(e)),Ke({contentRadius:s,limitVerticalRadius:!0})),{innerPadding:r?0:12,titleMarginBottom:r?0:l,titlePadding:r?`${p}px ${y}px ${$}px`:0,titleBorderBottom:r?`${t}px ${u} ${v}`:"none",innerContentPadding:r?`${h}px ${y}px`:0})},ye=K("Popover",e=>{const{colorBgElevated:t,colorText:o}=e,n=te(e,{popoverBg:t,popoverColor:o});return[Mt(n),Rt(n),ke(n,"zoom-big")]},Bt,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var Tt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Ht=(e,t,o)=>!t&&!o?null:i.createElement(i.Fragment,null,t&&i.createElement("div",{className:`${e}-title`},Q(t)),i.createElement("div",{className:`${e}-inner-content`},Q(o))),_t=e=>{const{hashId:t,prefixCls:o,className:n,style:a,placement:r="top",title:d,content:s,children:l}=e;return i.createElement("div",{className:P(t,o,`${o}-pure`,`${o}-placement-${r}`,n),style:a},i.createElement("div",{className:`${o}-arrow`}),i.createElement(et,Object.assign({},e,{className:t,prefixCls:o}),l||Ht(o,d,s)))},qt=e=>{const{prefixCls:t,className:o}=e,n=Tt(e,["prefixCls","className"]),{getPrefixCls:a}=i.useContext(L),r=a("popover",t),[d,s,l]=ye(r);return d(i.createElement(_t,Object.assign({},n,{prefixCls:r,hashId:s,className:P(o,l)})))},zt=qt;var Lt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Ft=e=>{let{title:t,content:o,prefixCls:n}=e;return i.createElement(i.Fragment,null,t&&i.createElement("div",{className:`${n}-title`},Q(t)),i.createElement("div",{className:`${n}-inner-content`},Q(o)))},xe=i.forwardRef((e,t)=>{const{prefixCls:o,title:n,content:a,overlayClassName:r,placement:d="top",trigger:s="hover",mouseEnterDelay:l=.1,mouseLeaveDelay:u=.1,overlayStyle:v={}}=e,h=Lt(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:m}=i.useContext(L),p=m("popover",o),[$,y,C]=ye(p),c=m(),b=P(r,y,C);return $(i.createElement(tt,Object.assign({placement:d,trigger:s,mouseEnterDelay:l,mouseLeaveDelay:u,overlayStyle:v},h,{prefixCls:p,overlayClassName:b,ref:t,overlay:n||a?i.createElement(Ft,{prefixCls:p,title:n,content:a}):null,transitionName:nt(c,"zoom-big",h.transitionName),"data-popover-inject":!0})))});xe._InternalPanelDoNotUseOrYouWillBeFired=zt;const At=xe;let M=null,G=e=>e(),U=[],V={};function ie(){const{getContainer:e,rtl:t,maxCount:o,top:n,bottom:a}=V,r=(e==null?void 0:e())||document.body;return{getContainer:()=>r,rtl:t,maxCount:o,top:n,bottom:a}}const Vt=O.forwardRef((e,t)=>{const{notificationConfig:o,sync:n}=e,{getPrefixCls:a}=i.useContext(L),r=V.prefixCls||a("notification"),d=i.useContext(ze),[s,l]=ve(Object.assign(Object.assign(Object.assign({},o),{prefixCls:r}),d.notification));return O.useEffect(n,[]),O.useImperativeHandle(t,()=>{const u=Object.assign({},s);return Object.keys(u).forEach(v=>{u[v]=function(){return n(),s[v].apply(s,arguments)}}),{instance:u,sync:n}}),l}),Wt=O.forwardRef((e,t)=>{const[o,n]=O.useState(ie),a=()=>{n(ie)};O.useEffect(a,[]);const r=qe(),d=r.getRootPrefixCls(),s=r.getIconPrefixCls(),l=r.getTheme(),u=O.createElement(Vt,{ref:t,sync:a,notificationConfig:o});return O.createElement(_e,{prefixCls:d,iconPrefixCls:s,theme:l},r.holderRender?r.holderRender(u):u)});function oe(){if(!M){const e=document.createDocumentFragment(),t={fragment:e};M=t,G(()=>{He(O.createElement(Wt,{ref:o=>{const{instance:n,sync:a}=o||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=a,oe())})}}),e)});return}M.instance&&(U.forEach(e=>{switch(e.type){case"open":{G(()=>{M.instance.open(Object.assign(Object.assign({},V),e.config))});break}case"destroy":G(()=>{M==null||M.instance.destroy(e.key)});break}}),U=[])}function Dt(e){V=Object.assign(Object.assign({},V),e),G(()=>{var t;(t=M==null?void 0:M.sync)===null||t===void 0||t.call(M)})}function $e(e){U.push({type:"open",config:e}),oe()}function Gt(e){U.push({type:"destroy",key:e}),oe()}const Xt=["success","info","warning","error"],Qt={open:$e,destroy:Gt,config:Dt,useNotification:Et,_InternalPanelDoNotUseOrYouWillBeFired:$t},Ce=Qt;Xt.forEach(e=>{Ce[e]=t=>$e(Object.assign(Object.assign({},t),{type:e}))});var re=function(t){return t?{left:t.offsetLeft,right:t.parentElement.clientWidth-t.clientWidth-t.offsetLeft,width:t.clientWidth}:null},z=function(t){return t!==void 0?"".concat(t,"px"):void 0};function Ut(e){var t=e.prefixCls,o=e.containerRef,n=e.value,a=e.getValueIndex,r=e.motionName,d=e.onMotionStart,s=e.onMotionEnd,l=e.direction,u=i.useRef(null),v=i.useState(n),h=A(v,2),m=h[0],p=h[1],$=function(H){var B,w=a(H),T=(B=o.current)===null||B===void 0?void 0:B.querySelectorAll(".".concat(t,"-item"))[w];return(T==null?void 0:T.offsetParent)&&T},y=i.useState(null),C=A(y,2),c=C[0],b=C[1],S=i.useState(null),g=A(S,2),x=g[0],N=g[1];Le(function(){if(m!==n){var I=$(m),H=$(n),B=re(I),w=re(H);p(n),b(B),N(w),I&&H?d():s()}},[n]);var j=i.useMemo(function(){return z(l==="rtl"?-(c==null?void 0:c.right):c==null?void 0:c.left)},[l,c]),_=i.useMemo(function(){return z(l==="rtl"?-(x==null?void 0:x.right):x==null?void 0:x.left)},[l,x]),k=function(){return{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},W=function(){return{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},J=function(){b(null),N(null),s()};return!c||!x?null:i.createElement(Fe,{visible:!0,motionName:r,motionAppear:!0,onAppearStart:k,onAppearActive:W,onVisibleChanged:J},function(I,H){var B=I.className,w=I.style,T=X(X({},w),{},{"--thumb-start-left":j,"--thumb-start-width":z(c==null?void 0:c.width),"--thumb-active-left":_,"--thumb-active-width":z(x==null?void 0:x.width)}),q={ref:ue(u,H),style:T,className:P("".concat(t,"-thumb"),B)};return i.createElement("div",q)})}var kt=["prefixCls","direction","options","disabled","defaultValue","value","onChange","className","motionName"];function Jt(e){if(typeof e.title<"u")return e.title;if(me(e.label)!=="object"){var t;return(t=e.label)===null||t===void 0?void 0:t.toString()}}function Yt(e){return e.map(function(t){if(me(t)==="object"&&t!==null){var o=Jt(t);return X(X({},t),{},{title:o})}return{label:t==null?void 0:t.toString(),title:t==null?void 0:t.toString(),value:t}})}var Zt=function(t){var o=t.prefixCls,n=t.className,a=t.disabled,r=t.checked,d=t.label,s=t.title,l=t.value,u=t.onChange,v=function(m){a||u(m,l)};return i.createElement("label",{className:P(n,D({},"".concat(o,"-item-disabled"),a))},i.createElement("input",{className:"".concat(o,"-item-input"),type:"radio",disabled:a,checked:r,onChange:v}),i.createElement("div",{className:"".concat(o,"-item-label"),title:s},d))},Kt=i.forwardRef(function(e,t){var o,n,a=e.prefixCls,r=a===void 0?"rc-segmented":a,d=e.direction,s=e.options,l=s===void 0?[]:s,u=e.disabled,v=e.defaultValue,h=e.value,m=e.onChange,p=e.className,$=p===void 0?"":p,y=e.motionName,C=y===void 0?"thumb-motion":y,c=Ae(e,kt),b=i.useRef(null),S=i.useMemo(function(){return ue(b,t)},[b,t]),g=i.useMemo(function(){return Yt(l)},[l]),x=ot((o=g[0])===null||o===void 0?void 0:o.value,{value:h,defaultValue:v}),N=A(x,2),j=N[0],_=N[1],k=i.useState(!1),W=A(k,2),J=W[0],I=W[1],H=function(T,q){u||(_(q),m==null||m(q))},B=at(c,["children"]);return i.createElement("div",Z({},B,{className:P(r,(n={},D(n,"".concat(r,"-rtl"),d==="rtl"),D(n,"".concat(r,"-disabled"),u),n),$),ref:S}),i.createElement("div",{className:"".concat(r,"-group")},i.createElement(Ut,{prefixCls:r,value:j,containerRef:b,motionName:"".concat(r,"-").concat(C),direction:d,getValueIndex:function(T){return g.findIndex(function(q){return q.value===T})},onMotionStart:function(){I(!0)},onMotionEnd:function(){I(!1)}}),g.map(function(w){return i.createElement(Zt,Z({},w,{key:w.value,prefixCls:r,className:P(w.className,"".concat(r,"-item"),D({},"".concat(r,"-item-selected"),w.value===j&&!J)),checked:w.value===j,onChange:H,disabled:!!u||!!w.disabled}))})))}),en=Kt;function se(e,t){return{[`${e}, ${e}:hover, ${e}:focus`]:{color:t.colorTextDisabled,cursor:"not-allowed"}}}function le(e){return{backgroundColor:e.itemSelectedBg,boxShadow:e.boxShadowTertiary}}const tn=Object.assign({overflow:"hidden"},Ve),nn=e=>{const{componentCls:t}=e,o=e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(),n=e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(),a=e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ee(e)),{display:"inline-block",padding:e.trackPadding,color:e.itemColor,background:e.trackBg,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,[`${t}-group`]:{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",width:"100%"},[`&${t}-rtl`]:{direction:"rtl"},[`&${t}-block`]:{display:"flex"},[`&${t}-block ${t}-item`]:{flex:1,minWidth:0},[`${t}-item`]:{position:"relative",textAlign:"center",cursor:"pointer",transition:`color ${e.motionDurationMid} ${e.motionEaseInOut}`,borderRadius:e.borderRadiusSM,transform:"translateZ(0)","&-selected":Object.assign(Object.assign({},le(e)),{color:e.itemSelectedColor}),"&::after":{content:'""',position:"absolute",zIndex:-1,width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",transition:`background-color ${e.motionDurationMid}`,pointerEvents:"none"},[`&:hover:not(${t}-item-selected):not(${t}-item-disabled)`]:{color:e.itemHoverColor,"&::after":{backgroundColor:e.itemHoverBg}},[`&:active:not(${t}-item-selected):not(${t}-item-disabled)`]:{color:e.itemHoverColor,"&::after":{backgroundColor:e.itemActiveBg}},"&-label":Object.assign({minHeight:o,lineHeight:E(o),padding:`0 ${E(e.segmentedPaddingHorizontal)}`},tn),"&-icon + *":{marginInlineStart:e.calc(e.marginSM).div(2).equal()},"&-input":{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}},[`${t}-thumb`]:Object.assign(Object.assign({},le(e)),{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:`${E(e.paddingXXS)} 0`,borderRadius:e.borderRadiusSM,[`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]:{backgroundColor:"transparent"}}),[`&${t}-lg`]:{borderRadius:e.borderRadiusLG,[`${t}-item-label`]:{minHeight:n,lineHeight:E(n),padding:`0 ${E(e.segmentedPaddingHorizontal)}`,fontSize:e.fontSizeLG},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadius}},[`&${t}-sm`]:{borderRadius:e.borderRadiusSM,[`${t}-item-label`]:{minHeight:a,lineHeight:E(a),padding:`0 ${E(e.segmentedPaddingHorizontalSM)}`},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadiusXS}}}),se(`&-disabled ${t}-item`,e)),se(`${t}-item-disabled`,e)),{[`${t}-thumb-motion-appear-active`]:{transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOut}, width ${e.motionDurationSlow} ${e.motionEaseInOut}`,willChange:"transform, width"}})}},on=e=>{const{colorTextLabel:t,colorText:o,colorFillSecondary:n,colorBgElevated:a,colorFill:r,lineWidthBold:d,colorBgLayout:s}=e;return{trackPadding:d,trackBg:s,itemColor:t,itemHoverColor:o,itemHoverBg:n,itemSelectedBg:a,itemActiveBg:r,itemSelectedColor:o}},an=K("Segmented",e=>{const{lineWidth:t,calc:o}=e,n=te(e,{segmentedPaddingHorizontal:o(e.controlPaddingHorizontal).sub(t).equal(),segmentedPaddingHorizontalSM:o(e.controlPaddingHorizontalSM).sub(t).equal()});return[nn(n)]},on);var ce=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function rn(e){return typeof e=="object"&&!!(e!=null&&e.icon)}const sn=i.forwardRef((e,t)=>{const{prefixCls:o,className:n,rootClassName:a,block:r,options:d=[],size:s="middle",style:l}=e,u=ce(e,["prefixCls","className","rootClassName","block","options","size","style"]),{getPrefixCls:v,direction:h,segmented:m}=i.useContext(L),p=v("segmented",o),[$,y,C]=an(p),c=it(s),b=i.useMemo(()=>d.map(x=>{if(rn(x)){const{icon:N,label:j}=x,_=ce(x,["icon","label"]);return Object.assign(Object.assign({},_),{label:i.createElement(i.Fragment,null,i.createElement("span",{className:`${p}-item-icon`},N),j&&i.createElement("span",null,j))})}return x}),[d,p]),S=P(n,a,m==null?void 0:m.className,{[`${p}-block`]:r,[`${p}-sm`]:c==="small",[`${p}-lg`]:c==="large"},y,C),g=Object.assign(Object.assign({},m==null?void 0:m.style),l);return $(i.createElement(en,Object.assign({},u,{className:S,style:g,options:b,ref:t,prefixCls:p,direction:h})))}),ln=sn,cn=ln;var dn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};const un=dn;var mn=function(t,o){return i.createElement(We,Z({},t,{ref:o,icon:un}))};const pn=i.forwardRef(mn),vn=()=>{const[e,t]=Ce.useNotification(),[o,n]=De.useMessage(),[a]=R.useForm(),[r,d]=Ge(),s=i.useMemo(()=>r.get("type")||"all",[r]),l=i.useMemo(()=>{const c=r.get("topics");return c?c.split(","):[]},[r]),[u,v]=i.useState([]),h=R.useWatch("type",a)||"all",[m,p]=i.useState(!1),$=c=>{const b=c.match(/\d+/);if(b){const S=b[0];navigator.clipboard.writeText(S),o.success("Copied!")}},y=c=>{let b=null;if(c.type!=="all"&&(b=c.topics.map(S=>S==null?void 0:S.trim()).filter(Boolean),!b.length)){o.error("Please select at least one topic");return}p(!1),d(b?{type:c.type,topics:b.join(",")}:{type:c.type})},C=i.useCallback(async()=>{v([]);try{const c=new URLSearchParams;c.set("type",s),s!=="all"&&c.set("topics",l.join(","));const S=await(await fetch(`/messages?${c.toString()}`)).json();v(S);const g=new WebSocket(`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`);return g.onopen=()=>{g.onmessage=x=>{const N=JSON.parse(x.data);N.type==="subscribe:success"||N.type==="unsubscribe:success"?o.success(N.data.message):N.type==="notification"&&(e.success({message:`To: ${N.data.topic}`,description:N.data.message,onClick:()=>{$(N.data.message)}}),v(j=>{const _=j.slice(0,99);return[N.data,..._]}))},g.send(JSON.stringify({type:"subscribe",data:{type:s,topics:l}}))},g}catch(c){console.error(c)}},[s,l]);return i.useEffect(()=>{a.setFieldsValue({type:s,topics:l});let c;C().then(b=>{c=b}),c&&(c.close(),v([]))},[s,l]),f.jsxs("div",{children:[f.jsx("header",{className:"h-15 flex items-center shadow",children:f.jsxs("div",{className:"container max-w-240 px-2 mx-auto flex justify-between items-center",children:[f.jsx(Xe,{to:Qe.Dashboard,className:"text-2xl font-bold text-primary",children:"Fake SMS"}),f.jsx(At,{open:m,trigger:"click",onOpenChange:p,content:f.jsxs(R,{className:"w-64",form:a,onFinish:y,children:[f.jsx(R.Item,{name:"type",children:f.jsx(cn,{options:["all","apps","phones"]})}),h!=="all"&&f.jsx(R.Item,{name:"topics",noStyle:!0,className:"!mb-0",children:f.jsx(R.List,{name:"topics",children:(c,{add:b,remove:S})=>f.jsxs(f.Fragment,{children:[c.map(g=>f.jsx(R.Item,{noStyle:!0,children:f.jsxs("div",{className:"flex items-center space-x-2 w-full",children:[f.jsx(R.Item,{className:"flex-1",...g,children:f.jsx(Ue,{placeholder:h==="phones"?"eg: 13800138000":"eg: QJhIneQFNcITXgqkyklQuVRXtJWBB5u4"})}),f.jsx("div",{className:"mb-6",children:f.jsx(pn,{onClick:()=>S(g.name)})})]})},g.key)),f.jsx(R.Item,{children:f.jsx(Y,{type:"dashed",onClick:()=>b(),block:!0,children:"Add"})})]})})}),f.jsx(R.Item,{className:"!mb-0",children:f.jsx(Y,{type:"primary",htmlType:"submit",className:"w-full",children:"Subscribe"})})]}),children:f.jsxs(Y,{type:"text",className:"inline-flex items-center text-primary",children:["Listen to: ",s," ",f.jsx(rt,{className:"ml-1"})," "]})})]})}),f.jsx("main",{className:"container max-w-240 mx-auto mt-10 px-2",children:f.jsxs("div",{className:"divide-y divide-border",children:[u.map(c=>f.jsxs("div",{className:"py-2 px-3 text-sm cursor-pointer hover:bg-background-hover",onClick:()=>$(c.message),children:[f.jsxs("div",{className:"flex items-center text-sm italic text-muted",children:["To:(",f.jsx("span",{className:"text-muted-foreground",children:c.topic}),")",f.jsx("span",{className:"ml-auto",children:c.createdAt})]}),f.jsxs("div",{className:"mt-1 flex items-center text-base",children:[f.jsxs("svg",{className:"mt-2px",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:[f.jsx("title",{children:"Message"}),f.jsx("path",{fill:"currentColor",d:"M8 10.77q.31 0 .54-.23q.23-.23.23-.54q0-.31-.23-.54q-.23-.23-.54-.23q-.31 0-.54.23q-.23.23-.23.54q0 .31.23.54q.23.23.54.23m4 0q.31 0 .54-.23q.23-.23.23-.54q0-.31-.23-.54q-.23-.23-.54-.23q-.31 0-.54.23q-.23.23-.23.54q0 .31.23.54q.23.23.54.23m4 0q.31 0 .54-.23q.23-.23.23-.54q0-.31-.23-.54q-.23-.23-.54-.23q-.31 0-.54.23q-.23.23-.23.54q0 .31.23.54q.23.23.54.23M6.077 17l-1.704 1.704q-.379.379-.876.174Q3 18.673 3 18.133V4.615q0-.69.463-1.152Q3.925 3 4.615 3h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.153q-.463.462-1.153.462zm-.427-1h13.735q.23 0 .423-.192q.192-.193.192-.423V4.615q0-.23-.192-.423Q19.615 4 19.385 4H4.615q-.23 0-.423.192Q4 4.385 4 4.615v13.03zM4 16V4z"})]}),f.jsx("span",{className:"ml-1",children:c.message})]})]},c.pushId)),!u.length&&f.jsx("div",{className:"my-20 text-center text-sm text-muted",children:"No messages yet"})]})}),n,t]})};export{vn as default};
