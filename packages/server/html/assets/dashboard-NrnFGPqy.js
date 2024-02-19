import{r as a,C as U,c as H,b as Se,s as _e,d as We,e as f,g as Xe,t as Ve,f as ye,m as le,h as de,i as xe,T as me,k as qe,l as we,n as ue,o as Ge,z as Fe,p as Ye,R as Ue,u as Ze,q as Ke,a as Je,A as ie,j as F,N as Qe,O as et}from"./index-rd09DNLi.js";import{R as tt}from"./RightOutlined-xQhvP3va.js";import{D as ot,M as nt,u as rt,S as it,a as Oe,i as K,E as lt,b as Be,s as at,c as st,d as ct,e as dt,f as pe,g as mt,h as ut,j as pt}from"./index-vsnpN-o-.js";import{t as je,o as ee,c as te,i as Y,T as gt,N as bt,g as $t,a as Pe,u as ze,b as ft,d as vt,e as ht,f as Ct,h as It,j as St,C as yt,k as xt,l as wt,B as ge}from"./index-sT0Ovbw4.js";const Ee=a.createContext({});var Ot=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Bt=e=>{const{prefixCls:o,className:t,dashed:n}=e,r=Ot(e,["prefixCls","className","dashed"]),{getPrefixCls:l}=a.useContext(U),i=l("menu",o),s=H({[`${i}-item-divider-dashed`]:!!n},t);return a.createElement(ot,Object.assign({className:s},r))},Ne=Bt,jt=a.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),J=jt,Pt=e=>{var o;const{className:t,children:n,icon:r,title:l,danger:i}=e,{prefixCls:s,firstLevel:c,direction:d,disableMenuItemTitleTooltip:v,inlineCollapsed:p}=a.useContext(J),b=x=>{const S=a.createElement("span",{className:`${s}-title-content`},n);return(!r||Y(n)&&n.type==="span")&&n&&x&&c&&typeof n=="string"?a.createElement("div",{className:`${s}-inline-collapsed-noicon`},n.charAt(0)):S},{siderCollapsed:u}=a.useContext(Ee);let g=l;typeof l>"u"?g=c?n:"":l===!1&&(g="");const m={title:g};!u&&!p&&(m.title=null,m.open=!1);const C=je(n).length;let h=a.createElement(nt,Object.assign({},ee(e,["title","icon","danger"]),{className:H({[`${s}-item-danger`]:i,[`${s}-item-only-child`]:(r?C+1:C)===1},t),title:typeof l=="string"?l:void 0}),te(r,{className:H(Y(r)?(o=r.props)===null||o===void 0?void 0:o.className:"",`${s}-item-icon`)}),b(p));return v||(h=a.createElement(gt,Object.assign({},m,{placement:d==="rtl"?"left":"right",overlayClassName:`${s}-inline-collapsed-tooltip`}),h)),h},Te=Pt,zt=e=>{var o;const{popupClassName:t,icon:n,title:r,theme:l}=e,i=a.useContext(J),{prefixCls:s,inlineCollapsed:c,theme:d}=i,v=rt();let p;if(!n)p=c&&!v.length&&r&&typeof r=="string"?a.createElement("div",{className:`${s}-inline-collapsed-noicon`},r.charAt(0)):a.createElement("span",{className:`${s}-title-content`},r);else{const g=Y(r)&&r.type==="span";p=a.createElement(a.Fragment,null,te(n,{className:H(Y(n)?(o=n.props)===null||o===void 0?void 0:o.className:"",`${s}-item-icon`)}),g?r:a.createElement("span",{className:`${s}-title-content`},r))}const b=a.useMemo(()=>Object.assign(Object.assign({},i),{firstLevel:!1}),[i]),[u]=Se("Menu");return a.createElement(J.Provider,{value:b},a.createElement(it,Object.assign({},ee(e,["icon"]),{title:p,popupClassName:H(s,t,`${s}-${l||d}`),popupStyle:{zIndex:u}})))},He=zt;var Et=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};function ae(e){return(e||[]).map((o,t)=>{if(o&&typeof o=="object"){const n=o,{label:r,children:l,key:i,type:s}=n,c=Et(n,["label","children","key","type"]),d=i??`tmp-${t}`;return l||s==="group"?s==="group"?a.createElement(Oe,Object.assign({key:d},c,{title:r}),ae(l)):a.createElement(He,Object.assign({key:d},c,{title:r}),ae(l)):s==="divider"?a.createElement(Ne,Object.assign({key:d},c)):a.createElement(Te,Object.assign({key:d},c),r)}return null}).filter(o=>o)}function Nt(e){return a.useMemo(()=>e&&ae(e),[e])}var Tt=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Q=a.createContext(null),Ht=a.forwardRef((e,o)=>{const{children:t}=e,n=Tt(e,["children"]),r=a.useContext(Q),l=a.useMemo(()=>Object.assign(Object.assign({},r),n),[r,n.prefixCls,n.mode,n.selectable,n.rootClassName]),i=_e(t),s=We(o,i?t.ref:null);return a.createElement(Q.Provider,{value:l},a.createElement(bt,null,i?a.cloneElement(t,{ref:s}):t))}),Mt=e=>{const{componentCls:o,motionDurationSlow:t,horizontalLineHeight:n,colorSplit:r,lineWidth:l,lineType:i,itemPaddingInline:s}=e;return{[`${o}-horizontal`]:{lineHeight:n,border:0,borderBottom:`${f(l)} ${i} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${o}-item, ${o}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:s},[`> ${o}-item:hover,
        > ${o}-item-active,
        > ${o}-submenu ${o}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${o}-item, ${o}-submenu-title`]:{transition:[`border-color ${t}`,`background ${t}`].join(",")},[`${o}-submenu-arrow`]:{display:"none"}}}},Dt=e=>{let{componentCls:o,menuArrowOffset:t,calc:n}=e;return{[`${o}-rtl`]:{direction:"rtl"},[`${o}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${o}-rtl${o}-vertical,
    ${o}-submenu-rtl ${o}-vertical`]:{[`${o}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${f(n(t).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${f(t)})`}}}}},be=e=>Object.assign({},Xe(e)),$e=(e,o)=>{const{componentCls:t,itemColor:n,itemSelectedColor:r,groupTitleColor:l,itemBg:i,subMenuItemBg:s,itemSelectedBg:c,activeBarHeight:d,activeBarWidth:v,activeBarBorderWidth:p,motionDurationSlow:b,motionEaseInOut:u,motionEaseOut:g,itemPaddingInline:m,motionDurationMid:C,itemHoverColor:h,lineType:x,colorSplit:S,itemDisabledColor:B,dangerItemColor:j,dangerItemHoverColor:z,dangerItemSelectedColor:w,dangerItemActiveBg:P,dangerItemSelectedBg:y,popupBg:N,itemHoverBg:I,itemActiveBg:$,menuSubMenuBg:M,horizontalItemSelectedColor:T,horizontalItemSelectedBg:X,horizontalItemBorderRadius:k,horizontalItemHoverBg:L}=e;return{[`${t}-${o}, ${t}-${o} > ${t}`]:{color:n,background:i,[`&${t}-root:focus-visible`]:Object.assign({},be(e)),[`${t}-item-group-title`]:{color:l},[`${t}-submenu-selected`]:{[`> ${t}-submenu-title`]:{color:r}},[`${t}-item, ${t}-submenu-title`]:{color:n,[`&:not(${t}-item-disabled):focus-visible`]:Object.assign({},be(e))},[`${t}-item-disabled, ${t}-submenu-disabled`]:{color:`${B} !important`},[`${t}-item:not(${t}-item-selected):not(${t}-submenu-selected)`]:{[`&:hover, > ${t}-submenu-title:hover`]:{color:h}},[`&:not(${t}-horizontal)`]:{[`${t}-item:not(${t}-item-selected)`]:{"&:hover":{backgroundColor:I},"&:active":{backgroundColor:$}},[`${t}-submenu-title`]:{"&:hover":{backgroundColor:I},"&:active":{backgroundColor:$}}},[`${t}-item-danger`]:{color:j,[`&${t}-item:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:z}},[`&${t}-item:active`]:{background:P}},[`${t}-item a`]:{"&, &:hover":{color:"inherit"}},[`${t}-item-selected`]:{color:r,[`&${t}-item-danger`]:{color:w},"a, a:hover":{color:"inherit"}},[`& ${t}-item-selected`]:{backgroundColor:c,[`&${t}-item-danger`]:{backgroundColor:y}},[`&${t}-submenu > ${t}`]:{backgroundColor:M},[`&${t}-popup > ${t}`]:{backgroundColor:N},[`&${t}-submenu-popup > ${t}`]:{backgroundColor:N},[`&${t}-horizontal`]:Object.assign(Object.assign({},o==="dark"?{borderBottom:0}:{}),{[`> ${t}-item, > ${t}-submenu`]:{top:p,marginTop:e.calc(p).mul(-1).equal(),marginBottom:0,borderRadius:k,"&::after":{position:"absolute",insetInline:m,bottom:0,borderBottom:`${f(d)} solid transparent`,transition:`border-color ${b} ${u}`,content:'""'},"&:hover, &-active, &-open":{background:L,"&::after":{borderBottomWidth:d,borderBottomColor:T}},"&-selected":{color:T,backgroundColor:X,"&:hover":{backgroundColor:X},"&::after":{borderBottomWidth:d,borderBottomColor:T}}}}),[`&${t}-root`]:{[`&${t}-inline, &${t}-vertical`]:{borderInlineEnd:`${f(p)} ${x} ${S}`}},[`&${t}-inline`]:{[`${t}-sub${t}-inline`]:{background:s},[`${t}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${f(v)} solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${C} ${g}`,`opacity ${C} ${g}`].join(","),content:'""'},[`&${t}-item-danger`]:{"&::after":{borderInlineEndColor:w}}},[`${t}-selected, ${t}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${C} ${u}`,`opacity ${C} ${u}`].join(",")}}}}}},fe=e=>{const{componentCls:o,itemHeight:t,itemMarginInline:n,padding:r,menuArrowSize:l,marginXS:i,itemMarginBlock:s,itemWidth:c}=e,d=e.calc(l).add(r).add(i).equal();return{[`${o}-item`]:{position:"relative",overflow:"hidden"},[`${o}-item, ${o}-submenu-title`]:{height:t,lineHeight:f(t),paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:n,marginBlock:s,width:c},[`> ${o}-item,
            > ${o}-submenu > ${o}-submenu-title`]:{height:t,lineHeight:f(t)},[`${o}-item-group-list ${o}-submenu-title,
            ${o}-submenu-title`]:{paddingInlineEnd:d}}},Rt=e=>{const{componentCls:o,iconCls:t,itemHeight:n,colorTextLightSolid:r,dropdownWidth:l,controlHeightLG:i,motionDurationMid:s,motionEaseOut:c,paddingXL:d,itemMarginInline:v,fontSizeLG:p,motionDurationSlow:b,paddingXS:u,boxShadowSecondary:g,collapsedWidth:m,collapsedIconSize:C}=e,h={height:n,lineHeight:f(n),listStylePosition:"inside",listStyleType:"disc"};return[{[o]:{"&-inline, &-vertical":Object.assign({[`&${o}-root`]:{boxShadow:"none"}},fe(e))},[`${o}-submenu-popup`]:{[`${o}-vertical`]:Object.assign(Object.assign({},fe(e)),{boxShadow:g})}},{[`${o}-submenu-popup ${o}-vertical${o}-sub`]:{minWidth:l,maxHeight:`calc(100vh - ${f(e.calc(i).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${o}-inline`]:{width:"100%",[`&${o}-root`]:{[`${o}-item, ${o}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${b}`,`background ${b}`,`padding ${s} ${c}`].join(","),[`> ${o}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${o}-sub${o}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${o}-submenu > ${o}-submenu-title`]:h,[`& ${o}-item-group-title`]:{paddingInlineStart:d}},[`${o}-item`]:h}},{[`${o}-inline-collapsed`]:{width:m,[`&${o}-root`]:{[`${o}-item, ${o}-submenu ${o}-submenu-title`]:{[`> ${o}-inline-collapsed-noicon`]:{fontSize:p,textAlign:"center"}}},[`> ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-submenu > ${o}-submenu-title,
          > ${o}-submenu > ${o}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${f(e.calc(p).div(2).equal())} - ${f(v)})`,textOverflow:"clip",[`
            ${o}-submenu-arrow,
            ${o}-submenu-expand-icon
          `]:{opacity:0},[`${o}-item-icon, ${t}`]:{margin:0,fontSize:C,lineHeight:f(n),"+ span":{display:"inline-block",opacity:0}}},[`${o}-item-icon, ${t}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${o}-item-icon, ${t}`]:{display:"none"},"a, a:hover":{color:r}},[`${o}-item-group-title`]:Object.assign(Object.assign({},Ve),{paddingInline:u})}}]},ve=e=>{const{componentCls:o,motionDurationSlow:t,motionDurationMid:n,motionEaseInOut:r,motionEaseOut:l,iconCls:i,iconSize:s,iconMarginInlineEnd:c}=e;return{[`${o}-item, ${o}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${t}`,`background ${t}`,`padding ${t} ${r}`].join(","),[`${o}-item-icon, ${i}`]:{minWidth:s,fontSize:s,transition:[`font-size ${n} ${l}`,`margin ${t} ${r}`,`color ${t}`].join(","),"+ span":{marginInlineStart:c,opacity:1,transition:[`opacity ${t} ${r}`,`margin ${t}`,`color ${t}`].join(",")}},[`${o}-item-icon`]:Object.assign({},qe()),[`&${o}-item-only-child`]:{[`> ${i}, > ${o}-item-icon`]:{marginInlineEnd:0}}},[`${o}-item-disabled, ${o}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${o}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},he=e=>{const{componentCls:o,motionDurationSlow:t,motionEaseInOut:n,borderRadius:r,menuArrowSize:l,menuArrowOffset:i}=e;return{[`${o}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:l,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${t} ${n}, opacity ${t}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(l).mul(.6).equal(),height:e.calc(l).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:r,transition:[`background ${t} ${n}`,`transform ${t} ${n}`,`top ${t} ${n}`,`color ${t} ${n}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${f(e.calc(i).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${f(i)})`}}}}},At=e=>{const{antCls:o,componentCls:t,fontSize:n,motionDurationSlow:r,motionDurationMid:l,motionEaseInOut:i,paddingXS:s,padding:c,colorSplit:d,lineWidth:v,zIndexPopup:p,borderRadiusLG:b,subMenuItemBorderRadius:u,menuArrowSize:g,menuArrowOffset:m,lineType:C,groupTitleLineHeight:h,groupTitleFontSize:x}=e;return[{"":{[`${t}`]:Object.assign(Object.assign({},de()),{"&-hidden":{display:"none"}})},[`${t}-submenu-hidden`]:{display:"none"}},{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},xe(e)),de()),{marginBottom:0,paddingInlineStart:0,fontSize:n,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${t}-item`]:{flex:"none"}},[`${t}-item, ${t}-submenu, ${t}-submenu-title`]:{borderRadius:e.itemBorderRadius},[`${t}-item-group-title`]:{padding:`${f(s)} ${f(c)}`,fontSize:x,lineHeight:h,transition:`all ${r}`},[`&-horizontal ${t}-submenu`]:{transition:[`border-color ${r} ${i}`,`background ${r} ${i}`].join(",")},[`${t}-submenu, ${t}-submenu-inline`]:{transition:[`border-color ${r} ${i}`,`background ${r} ${i}`,`padding ${l} ${i}`].join(",")},[`${t}-submenu ${t}-sub`]:{cursor:"initial",transition:[`background ${r} ${i}`,`padding ${r} ${i}`].join(",")},[`${t}-title-content`]:{transition:`color ${r}`,[`> ${o}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${t}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${t}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:d,borderStyle:C,borderWidth:0,borderTopWidth:v,marginBlock:v,padding:0,"&-dashed":{borderStyle:"dashed"}}}),ve(e)),{[`${t}-item-group`]:{[`${t}-item-group-list`]:{margin:0,padding:0,[`${t}-item, ${t}-submenu-title`]:{paddingInline:`${f(e.calc(n).mul(2).equal())} ${f(c)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:p,borderRadius:b,boxShadow:"none",transformOrigin:"0 0",[`&${t}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${t}`]:Object.assign(Object.assign(Object.assign({borderRadius:b},ve(e)),he(e)),{[`${t}-item, ${t}-submenu > ${t}-submenu-title`]:{borderRadius:u},[`${t}-submenu-title::after`]:{transition:`transform ${r} ${i}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:e.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:e.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:e.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:e.paddingXS}}}),he(e)),{[`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${f(m)})`},"&::after":{transform:`rotate(45deg) translateX(${f(e.calc(m).mul(-1).equal())})`}},[`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:{transform:`translateY(${f(e.calc(g).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${f(e.calc(m).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${f(m)})`}}})},{[`${o}-layout-header`]:{[t]:{lineHeight:"inherit"}}}]},kt=e=>{var o,t,n;const{colorPrimary:r,colorError:l,colorTextDisabled:i,colorErrorBg:s,colorText:c,colorTextDescription:d,colorBgContainer:v,colorFillAlter:p,colorFillContent:b,lineWidth:u,lineWidthBold:g,controlItemBgActive:m,colorBgTextHover:C,controlHeightLG:h,lineHeight:x,colorBgElevated:S,marginXXS:B,padding:j,fontSize:z,controlHeightSM:w,fontSizeLG:P,colorTextLightSolid:y,colorErrorHover:N}=e,I=(o=e.activeBarWidth)!==null&&o!==void 0?o:0,$=(t=e.activeBarBorderWidth)!==null&&t!==void 0?t:u,M=(n=e.itemMarginInline)!==null&&n!==void 0?n:e.marginXXS,T=new me(y).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:c,itemColor:c,colorItemTextHover:c,itemHoverColor:c,colorItemTextHoverHorizontal:r,horizontalItemHoverColor:r,colorGroupTitle:d,groupTitleColor:d,colorItemTextSelected:r,itemSelectedColor:r,colorItemTextSelectedHorizontal:r,horizontalItemSelectedColor:r,colorItemBg:v,itemBg:v,colorItemBgHover:C,itemHoverBg:C,colorItemBgActive:b,itemActiveBg:m,colorSubItemBg:p,subMenuItemBg:p,colorItemBgSelected:m,itemSelectedBg:m,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:I,colorActiveBarHeight:g,activeBarHeight:g,colorActiveBarBorderSize:u,activeBarBorderWidth:$,colorItemTextDisabled:i,itemDisabledColor:i,colorDangerItemText:l,dangerItemColor:l,colorDangerItemTextHover:l,dangerItemHoverColor:l,colorDangerItemTextSelected:l,dangerItemSelectedColor:l,colorDangerItemBgActive:s,dangerItemActiveBg:s,colorDangerItemBgSelected:s,dangerItemSelectedBg:s,itemMarginInline:M,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:h,groupTitleLineHeight:x,collapsedWidth:h*2,popupBg:S,itemMarginBlock:B,itemPaddingInline:j,horizontalLineHeight:`${h*1.15}px`,iconSize:z,iconMarginInlineEnd:w-z,collapsedIconSize:P,groupTitleFontSize:z,darkItemDisabledColor:new me(y).setAlpha(.25).toRgbString(),darkItemColor:T,darkDangerItemColor:l,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:y,darkItemSelectedBg:r,darkDangerItemSelectedBg:l,darkItemHoverBg:"transparent",darkGroupTitleColor:T,darkItemHoverColor:y,darkDangerItemHoverColor:N,darkDangerItemSelectedColor:y,darkDangerItemActiveBg:l,itemWidth:I?`calc(100% + ${$}px)`:`calc(100% - ${M*2}px)`}},Lt=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return ye("Menu",r=>{const{colorBgElevated:l,colorPrimary:i,colorTextLightSolid:s,controlHeightLG:c,fontSize:d,darkItemColor:v,darkDangerItemColor:p,darkItemBg:b,darkSubMenuItemBg:u,darkItemSelectedColor:g,darkItemSelectedBg:m,darkDangerItemSelectedBg:C,darkItemHoverBg:h,darkGroupTitleColor:x,darkItemHoverColor:S,darkItemDisabledColor:B,darkDangerItemHoverColor:j,darkDangerItemSelectedColor:z,darkDangerItemActiveBg:w,popupBg:P,darkPopupBg:y}=r,N=r.calc(d).div(7).mul(5).equal(),I=le(r,{menuArrowSize:N,menuHorizontalHeight:r.calc(c).mul(1.15).equal(),menuArrowOffset:r.calc(N).mul(.25).equal(),menuSubMenuBg:l,calc:r.calc,popupBg:P}),$=le(I,{itemColor:v,itemHoverColor:S,groupTitleColor:x,itemSelectedColor:g,itemBg:b,popupBg:y,subMenuItemBg:u,itemActiveBg:"transparent",itemSelectedBg:m,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:h,itemDisabledColor:B,dangerItemColor:p,dangerItemHoverColor:j,dangerItemSelectedColor:z,dangerItemActiveBg:w,dangerItemSelectedBg:C,menuSubMenuBg:u,horizontalItemSelectedColor:s,horizontalItemSelectedBg:i});return[At(I),Mt(I),Rt(I),$e(I,"light"),$e($,"dark"),Dt(I),$t(I),K(I,"slide-up"),K(I,"slide-down"),Pe(I,"zoom-big")]},kt,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:t,unitless:{groupTitleLineHeight:!0}})(e,o)};var _t=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Wt=a.forwardRef((e,o)=>{var t,n;const r=a.useContext(Q),l=r||{},{getPrefixCls:i,getPopupContainer:s,direction:c,menu:d}=a.useContext(U),v=i(),{prefixCls:p,className:b,style:u,theme:g="light",expandIcon:m,_internalDisableMenuItemTitleTooltip:C,inlineCollapsed:h,siderCollapsed:x,items:S,children:B,rootClassName:j,mode:z,selectable:w,onClick:P,overflowedIndicatorPopupClassName:y}=e,N=_t(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),I=ee(N,["collapsedWidth"]),$=Nt(S)||B;(t=l.validator)===null||t===void 0||t.call(l,{mode:z});const M=ze(function(){var A;P==null||P.apply(void 0,arguments),(A=l.onClick)===null||A===void 0||A.call(l)}),T=l.mode||z,X=w??l.selectable,k=a.useMemo(()=>x!==void 0?x:h,[h,x]),L={horizontal:{motionName:`${v}-slide-up`},inline:ft(v),other:{motionName:`${v}-zoom-big`}},O=i("menu",p||l.prefixCls),G=we(O),[D,_,W]=Lt(O,G,!r),V=H(`${O}-${g}`,d==null?void 0:d.className,b);let R;if(typeof m=="function")R=m;else if(m===null||m===!1)R=null;else if(l.expandIcon===null||l.expandIcon===!1)R=null;else{const A=m??l.expandIcon;R=te(A,{className:H(`${O}-submenu-expand-icon`,Y(A)?(n=A.props)===null||n===void 0?void 0:n.className:"")})}const q=a.useMemo(()=>({prefixCls:O,inlineCollapsed:k||!1,direction:c,firstLevel:!0,theme:g,mode:T,disableMenuItemTitleTooltip:C}),[O,k,c,C,g]);return D(a.createElement(Q.Provider,{value:null},a.createElement(J.Provider,{value:q},a.createElement(lt,Object.assign({getPopupContainer:s,overflowedIndicator:a.createElement(Be,null),overflowedIndicatorPopupClassName:H(O,`${O}-${g}`,y),mode:T,selectable:X,onClick:M},I,{inlineCollapsed:k,style:Object.assign(Object.assign({},d==null?void 0:d.style),u),className:V,prefixCls:O,direction:c,defaultMotions:L,expandIcon:R,ref:o,rootClassName:H(j,_,l.rootClassName,W,G)}),$))))}),Xt=Wt,Z=a.forwardRef((e,o)=>{const t=a.useRef(null),n=a.useContext(Ee);return a.useImperativeHandle(o,()=>({menu:t.current,focus:r=>{var l;(l=t.current)===null||l===void 0||l.focus(r)}})),a.createElement(Xt,Object.assign({ref:t},e,n))});Z.Item=Te;Z.SubMenu=He;Z.Divider=Ne;Z.ItemGroup=Oe;const Vt=Z,qt=e=>{const{componentCls:o,menuCls:t,colorError:n,colorTextLightSolid:r}=e,l=`${t}-item`;return{[`${o}, ${o}-menu-submenu`]:{[`${t} ${l}`]:{[`&${l}-danger:not(${l}-disabled)`]:{color:n,"&:hover":{color:r,backgroundColor:n}}}}}},Gt=qt,Ft=e=>{const{componentCls:o,menuCls:t,zIndexPopup:n,dropdownArrowDistance:r,sizePopupArrow:l,antCls:i,iconCls:s,motionDurationMid:c,paddingBlock:d,fontSize:v,dropdownEdgeChildPadding:p,colorTextDisabled:b,fontSizeIcon:u,controlPaddingHorizontal:g,colorBgElevated:m}=e;return[{[o]:Object.assign(Object.assign({},xe(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:n,display:"block","&::before":{position:"absolute",insetBlock:e.calc(l).div(2).sub(r).equal(),zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${i}-btn`]:{[`& > ${s}-down, & > ${i}-btn-icon > ${s}-down`]:{fontSize:u}},[`${o}-wrap`]:{position:"relative",[`${i}-btn > ${s}-down`]:{fontSize:u},[`${s}-down::before`]:{transition:`transform ${c}`}},[`${o}-wrap-open`]:{[`${s}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottomLeft,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottomLeft,
          &${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottom,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottom,
          &${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottomRight,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottomRight`]:{animationName:at},[`&${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-topRight`]:{animationName:st},[`&${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottomRight`]:{animationName:ct},[`&${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-topRight`]:{animationName:dt}})},vt(e,m,{arrowPlacement:{top:!0,bottom:!0}}),{[`${o} ${t}`]:{position:"relative",margin:0},[`${t}-submenu-popup`]:{position:"absolute",zIndex:n,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${o}, ${o}-menu-submenu`]:{[t]:Object.assign(Object.assign({padding:p,listStyleType:"none",backgroundColor:m,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},ue(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${t}-item-group-title`]:{padding:`${f(d)} ${f(g)}`,color:e.colorTextDescription,transition:`all ${c}`},[`${t}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${t}-item-icon`]:{minWidth:v,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${t}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${c}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${t}-item, ${t}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${f(d)} ${f(g)}`,color:e.colorText,fontWeight:"normal",fontSize:v,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${c}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},ue(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:b,cursor:"not-allowed","&:hover":{color:b,backgroundColor:m,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${f(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${o}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${o}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:u,fontStyle:"normal"}}}),[`${t}-item-group-list`]:{margin:`0 ${f(e.marginXS)}`,padding:0,listStyle:"none"},[`${t}-submenu-title`]:{paddingInlineEnd:e.calc(g).add(e.fontSizeSM).equal()},[`${t}-submenu-vertical`]:{position:"relative"},[`${t}-submenu${t}-submenu-disabled ${o}-menu-submenu-title`]:{[`&, ${o}-menu-submenu-arrow-icon`]:{color:b,backgroundColor:m,cursor:"not-allowed"}},[`${t}-submenu-selected ${o}-menu-submenu-title`]:{color:e.colorPrimary}})}},[K(e,"slide-up"),K(e,"slide-down"),pe(e,"move-up"),pe(e,"move-down"),Pe(e,"zoom-big")]]},Yt=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},ht({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),Ct(e)),Ut=ye("Dropdown",e=>{const{marginXXS:o,sizePopupArrow:t,paddingXXS:n,componentCls:r}=e,l=le(e,{menuCls:`${r}-menu`,dropdownArrowDistance:e.calc(t).div(2).add(o).equal(),dropdownEdgeChildPadding:n});return[Ft(l),Gt(l)]},Yt),se=e=>{const{menu:o,arrow:t,prefixCls:n,children:r,trigger:l,disabled:i,dropdownRender:s,getPopupContainer:c,overlayClassName:d,rootClassName:v,overlayStyle:p,open:b,onOpenChange:u,visible:g,onVisibleChange:m,mouseEnterDelay:C=.15,mouseLeaveDelay:h=.1,autoAdjustOverflow:x=!0,placement:S="",overlay:B,transitionName:j}=e,{getPopupContainer:z,getPrefixCls:w,direction:P,dropdown:y}=a.useContext(U);Ye();const N=a.useMemo(()=>{const E=w();return j!==void 0?j:S.includes("top")?`${E}-slide-down`:`${E}-slide-up`},[w,S,j]),I=a.useMemo(()=>S?S.includes("Center")?S.slice(0,S.indexOf("Center")):S:P==="rtl"?"bottomRight":"bottomLeft",[S,P]),$=w("dropdown",n),M=we($),[T,X,k]=Ut($,M),[,L]=Ge(),O=a.Children.only(r),G=te(O,{className:H(`${$}-trigger`,{[`${$}-rtl`]:P==="rtl"},O.props.className),disabled:i}),D=i?[]:l;let _;D&&D.includes("contextMenu")&&(_=!0);const[W,V]=It(!1,{value:b??g}),R=ze(E=>{u==null||u(E,{source:"trigger"}),m==null||m(E),V(E)}),q=H(d,v,X,k,M,y==null?void 0:y.className,{[`${$}-rtl`]:P==="rtl"}),A=St({arrowPointAtCenter:typeof t=="object"&&t.pointAtCenter,autoAdjustOverflow:x,offset:L.marginXXS,arrowWidth:t?L.sizePopupArrow:0,borderRadius:L.borderRadius}),oe=a.useCallback(()=>{o!=null&&o.selectable&&(o!=null&&o.multiple)||(u==null||u(!1,{source:"menu"}),V(!1))},[o==null?void 0:o.selectable,o==null?void 0:o.multiple]),ne=()=>{let E;return o!=null&&o.items?E=a.createElement(Vt,Object.assign({},o)):typeof B=="function"?E=B():E=B,s&&(E=s(E)),E=a.Children.only(typeof E=="string"?a.createElement("span",null,E):E),a.createElement(Ht,{prefixCls:`${$}-menu`,rootClassName:H(k,M),expandIcon:a.createElement("span",{className:`${$}-menu-submenu-arrow`},a.createElement(tt,{className:`${$}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:oe,validator:co=>{}},E)},[ce,Le]=Se("Dropdown",p==null?void 0:p.zIndex);let re=a.createElement(mt,Object.assign({alignPoint:_},ee(e,["rootClassName"]),{mouseEnterDelay:C,mouseLeaveDelay:h,visible:W,builtinPlacements:A,arrow:!!t,overlayClassName:q,prefixCls:$,getPopupContainer:c||z,transitionName:N,trigger:D,overlay:ne,placement:I,onVisibleChange:R,overlayStyle:Object.assign(Object.assign(Object.assign({},y==null?void 0:y.style),p),{zIndex:ce})}),G);return ce&&(re=a.createElement(Fe.Provider,{value:Le},re)),T(re)};function Zt(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Kt=ut(se,"dropdown",e=>e,Zt),Jt=e=>a.createElement(Kt,Object.assign({},e),a.createElement("span",null));se._InternalPanelDoNotUseOrYouWillBeFired=Jt;const Me=se;function Ce(e){return["small","middle","large"].includes(e)}function Ie(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}const De=Ue.createContext({latestIndex:0}),Qt=De.Provider,eo=e=>{let{className:o,index:t,children:n,split:r,style:l}=e;const{latestIndex:i}=a.useContext(De);return n==null?null:a.createElement(a.Fragment,null,a.createElement("div",{className:o,style:l},n),t<i&&r&&a.createElement("span",{className:`${o}-split`},r))},to=eo;var oo=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const no=a.forwardRef((e,o)=>{var t,n;const{getPrefixCls:r,space:l,direction:i}=a.useContext(U),{size:s=(l==null?void 0:l.size)||"small",align:c,className:d,rootClassName:v,children:p,direction:b="horizontal",prefixCls:u,split:g,style:m,wrap:C=!1,classNames:h,styles:x}=e,S=oo(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[B,j]=Array.isArray(s)?s:[s,s],z=Ce(j),w=Ce(B),P=Ie(j),y=Ie(B),N=je(p,{keepEmpty:!0}),I=c===void 0&&b==="horizontal"?"center":c,$=r("space",u),[M,T,X]=xt($),k=H($,l==null?void 0:l.className,T,`${$}-${b}`,{[`${$}-rtl`]:i==="rtl",[`${$}-align-${I}`]:I,[`${$}-gap-row-${j}`]:z,[`${$}-gap-col-${B}`]:w},d,v,X),L=H(`${$}-item`,(t=h==null?void 0:h.item)!==null&&t!==void 0?t:(n=l==null?void 0:l.classNames)===null||n===void 0?void 0:n.item);let O=0;const G=N.map((W,V)=>{var R,q;W!=null&&(O=V);const A=W&&W.key||`${L}-${V}`;return a.createElement(to,{className:L,key:A,index:V,split:g,style:(R=x==null?void 0:x.item)!==null&&R!==void 0?R:(q=l==null?void 0:l.styles)===null||q===void 0?void 0:q.item},W)}),D=a.useMemo(()=>({latestIndex:O}),[O]);if(N.length===0)return null;const _={};return C&&(_.flexWrap="wrap"),!w&&y&&(_.columnGap=B),!z&&P&&(_.rowGap=j),M(a.createElement("div",Object.assign({ref:o,className:k,style:Object.assign(Object.assign(Object.assign({},_),l==null?void 0:l.style),m)},S),a.createElement(Qt,{value:D},G)))}),Re=no;Re.Compact=yt;const ro=Re;var io=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ae=e=>{const{getPopupContainer:o,getPrefixCls:t,direction:n}=a.useContext(U),{prefixCls:r,type:l="default",danger:i,disabled:s,loading:c,onClick:d,htmlType:v,children:p,className:b,menu:u,arrow:g,autoFocus:m,overlay:C,trigger:h,align:x,open:S,onOpenChange:B,placement:j,getPopupContainer:z,href:w,icon:P=a.createElement(Be,null),title:y,buttonsRender:N=ne=>ne,mouseEnterDelay:I,mouseLeaveDelay:$,overlayClassName:M,overlayStyle:T,destroyPopupOnHide:X,dropdownRender:k}=e,L=io(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),O=t("dropdown",r),G=`${O}-button`,D={menu:u,arrow:g,autoFocus:m,align:x,disabled:s,trigger:s?[]:h,onOpenChange:B,getPopupContainer:z||o,mouseEnterDelay:I,mouseLeaveDelay:$,overlayClassName:M,overlayStyle:T,destroyPopupOnHide:X,dropdownRender:k},{compactSize:_,compactItemClassnames:W}=wt(O,n),V=H(G,W,b);"overlay"in e&&(D.overlay=C),"open"in e&&(D.open=S),"placement"in e?D.placement=j:D.placement=n==="rtl"?"bottomLeft":"bottomRight";const R=a.createElement(ge,{type:l,danger:i,disabled:s,loading:c,onClick:d,htmlType:v,href:w,title:y},p),q=a.createElement(ge,{type:l,danger:i,icon:P}),[A,oe]=N([R,q]);return a.createElement(ro.Compact,Object.assign({className:V,size:_,block:!0},L),A,a.createElement(Me,Object.assign({},D),oe))};Ae.__ANT_BUTTON=!0;const lo=Ae,ke=Me;ke.Button=lo;const ao=ke,{useModal:so}=pt,bo=()=>{const e=Ze(),{pathname:o}=Ke(),{user:t,logout:n}=Je(),[r,l]=so(),i=()=>{r.confirm({title:"Confirm logout",content:"Are you sure you want to logout?",okButtonProps:{danger:!0},onOk:()=>{n()}})};return a.useEffect(()=>{o===ie.Dashboard&&e(ie.AppList,{replace:!0})},[o,e]),F.jsxs("div",{children:[F.jsx("header",{className:"h-15 flex items-center shadow",children:F.jsxs("div",{className:"container max-w-240 px-2 mx-auto flex justify-between items-center",children:[F.jsx(Qe,{to:ie.Dashboard,className:"text-2xl font-bold text-primary",children:"Fake SMS"}),F.jsx(ao,{menu:{items:[{key:"logout",label:"Logout",onClick:i}]},children:F.jsx("a",{className:"cursor-pointer",children:t==null?void 0:t.nickname})})]})}),F.jsx("main",{className:"container max-w-240 mx-auto mt-10 px-2",children:F.jsx(et,{})}),l]})};export{bo as default};
