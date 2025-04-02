var Xg=t=>{throw TypeError(t)};var Kd=(t,e,n)=>e.has(t)||Xg("Cannot "+n);var te=(t,e,n)=>(Kd(t,e,"read from private field"),n?n.call(t):e.get(t)),at=(t,e,n)=>e.has(t)?Xg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),$e=(t,e,n,r)=>(Kd(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Yt=(t,e,n)=>(Kd(t,e,"access private method"),n);var Kl=(t,e,n,r)=>({set _(i){$e(t,e,i,n)},get _(){return te(t,e,r)}});function hT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ny(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ly={exports:{}},Ju={},Dy={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),pT=Symbol.for("react.portal"),mT=Symbol.for("react.fragment"),gT=Symbol.for("react.strict_mode"),vT=Symbol.for("react.profiler"),xT=Symbol.for("react.provider"),yT=Symbol.for("react.context"),_T=Symbol.for("react.forward_ref"),ST=Symbol.for("react.suspense"),wT=Symbol.for("react.memo"),ET=Symbol.for("react.lazy"),Yg=Symbol.iterator;function MT(t){return t===null||typeof t!="object"?null:(t=Yg&&t[Yg]||t["@@iterator"],typeof t=="function"?t:null)}var Iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oy=Object.assign,Uy={};function ca(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||Iy}ca.prototype.isReactComponent={};ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fy(){}Fy.prototype=ca.prototype;function qp(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||Iy}var Kp=qp.prototype=new Fy;Kp.constructor=qp;Oy(Kp,ca.prototype);Kp.isPureReactComponent=!0;var qg=Array.isArray,ky=Object.prototype.hasOwnProperty,Qp={current:null},By={key:!0,ref:!0,__self:!0,__source:!0};function zy(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ky.call(e,r)&&!By.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nl,type:t,key:o,ref:s,props:i,_owner:Qp.current}}function bT(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function TT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kg=/\/+/g;function Qd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TT(""+t.key):e.toString(36)}function Wc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Nl:case pT:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Qd(s,0):r,qg(i)?(n="",t!=null&&(n=t.replace(Kg,"$&/")+"/"),Wc(i,e,n,"",function(c){return c})):i!=null&&(Zp(i)&&(i=bT(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Kg,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",qg(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Qd(o,a);s+=Wc(o,e,n,l,i)}else if(l=MT(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Qd(o,a++),s+=Wc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ql(t,e,n){if(t==null)return t;var r=[],i=0;return Wc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function CT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},$c={transition:null},AT={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:$c,ReactCurrentOwner:Qp};function Hy(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Ql,forEach:function(t,e,n){Ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ql(t,function(){e++}),e},toArray:function(t){return Ql(t,function(e){return e})||[]},only:function(t){if(!Zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=ca;Ze.Fragment=mT;Ze.Profiler=vT;Ze.PureComponent=qp;Ze.StrictMode=gT;Ze.Suspense=ST;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AT;Ze.act=Hy;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Oy({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Qp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ky.call(e,l)&&!By.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Nl,type:t.type,key:i,ref:o,props:r,_owner:s}};Ze.createContext=function(t){return t={$$typeof:yT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xT,_context:t},t.Consumer=t};Ze.createElement=zy;Ze.createFactory=function(t){var e=zy.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:_T,render:t}};Ze.isValidElement=Zp;Ze.lazy=function(t){return{$$typeof:ET,_payload:{_status:-1,_result:t},_init:CT}};Ze.memo=function(t,e){return{$$typeof:wT,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=$c.transition;$c.transition={};try{t()}finally{$c.transition=e}};Ze.unstable_act=Hy;Ze.useCallback=function(t,e){return pn.current.useCallback(t,e)};Ze.useContext=function(t){return pn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return pn.current.useEffect(t,e)};Ze.useId=function(){return pn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return pn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Ze.useRef=function(t){return pn.current.useRef(t)};Ze.useState=function(t){return pn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return pn.current.useTransition()};Ze.version="18.3.1";Dy.exports=Ze;var S=Dy.exports;const fe=Ny(S),Vy=hT({__proto__:null,default:fe},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT=S,PT=Symbol.for("react.element"),NT=Symbol.for("react.fragment"),LT=Object.prototype.hasOwnProperty,DT=RT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IT={key:!0,ref:!0,__self:!0,__source:!0};function Gy(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)LT.call(e,r)&&!IT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PT,type:t,key:o,ref:s,props:i,_owner:DT.current}}Ju.Fragment=NT;Ju.jsx=Gy;Ju.jsxs=Gy;Ly.exports=Ju;var _=Ly.exports,jy={exports:{}},kn={},Wy={exports:{}},$y={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,I){var O=L.length;L.push(I);e:for(;0<O;){var H=O-1>>>1,W=L[H];if(0<i(W,I))L[H]=I,L[O]=W,O=H;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var I=L[0],O=L.pop();if(O!==I){L[0]=O;e:for(var H=0,W=L.length,G=W>>>1;H<G;){var Z=2*(H+1)-1,ce=L[Z],oe=Z+1,ee=L[oe];if(0>i(ce,O))oe<W&&0>i(ee,ce)?(L[H]=ee,L[oe]=O,H=oe):(L[H]=ce,L[Z]=O,H=Z);else if(oe<W&&0>i(ee,O))L[H]=ee,L[oe]=O,H=oe;else break e}}return I}function i(L,I){var O=L.sortIndex-I.sortIndex;return O!==0?O:L.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,f=null,d=3,g=!1,v=!1,m=!1,p=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=L)r(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function w(L){if(m=!1,y(L),!v)if(n(l)!==null)v=!0,k(b);else{var I=n(c);I!==null&&$(w,I.startTime-L)}}function b(L,I){v=!1,m&&(m=!1,h(D),D=-1),g=!0;var O=d;try{for(y(I),f=n(l);f!==null&&(!(f.expirationTime>I)||L&&!B());){var H=f.callback;if(typeof H=="function"){f.callback=null,d=f.priorityLevel;var W=H(f.expirationTime<=I);I=t.unstable_now(),typeof W=="function"?f.callback=W:f===n(l)&&r(l),y(I)}else r(l);f=n(l)}if(f!==null)var G=!0;else{var Z=n(c);Z!==null&&$(w,Z.startTime-I),G=!1}return G}finally{f=null,d=O,g=!1}}var T=!1,E=null,D=-1,M=5,C=-1;function B(){return!(t.unstable_now()-C<M)}function F(){if(E!==null){var L=t.unstable_now();C=L;var I=!0;try{I=E(!0,L)}finally{I?Q():(T=!1,E=null)}}else T=!1}var Q;if(typeof x=="function")Q=function(){x(F)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,z=N.port2;N.port1.onmessage=F,Q=function(){z.postMessage(null)}}else Q=function(){p(F,0)};function k(L){E=L,T||(T=!0,Q())}function $(L,I){D=p(function(){L(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,k(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var O=d;d=I;try{return L()}finally{d=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=d;d=L;try{return I()}finally{d=O}},t.unstable_scheduleCallback=function(L,I,O){var H=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?H+O:H):O=H,L){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,L={id:u++,callback:I,priorityLevel:L,startTime:O,expirationTime:W,sortIndex:-1},O>H?(L.sortIndex=O,e(c,L),n(l)===null&&L===n(c)&&(m?(h(D),D=-1):m=!0,$(w,O-H))):(L.sortIndex=W,e(l,L),v||g||(v=!0,k(b))),L},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(L){var I=d;return function(){var O=d;d=I;try{return L.apply(this,arguments)}finally{d=O}}}})($y);Wy.exports=$y;var OT=Wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UT=S,Fn=OT;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xy=new Set,rl={};function Bo(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(rl[t]=e,t=0;t<e.length;t++)Xy.add(e[t])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=Object.prototype.hasOwnProperty,FT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qg={},Zg={};function kT(t){return xh.call(Zg,t)?!0:xh.call(Qg,t)?!1:FT.test(t)?Zg[t]=!0:(Qg[t]=!0,!1)}function BT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zT(t,e,n,r){if(e===null||typeof e>"u"||BT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jp=/[\-:]([a-z])/g;function em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jp,em);$t[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jp,em);$t[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jp,em);$t[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function tm(t,e,n,r){var i=$t.hasOwnProperty(e)?$t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zT(e,n,i,r)&&(n=null),r||i===null?kT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var si=UT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zl=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),yh=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),qy=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),im=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),Ky=Symbol.for("react.offscreen"),Jg=Symbol.iterator;function Ea(t){return t===null||typeof t!="object"?null:(t=Jg&&t[Jg]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Zd;function ka(t){if(Zd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zd=e&&e[1]||""}return`
`+Zd+t}var Jd=!1;function ef(t,e){if(!t||Jd)return"";Jd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Jd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function HT(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=ef(t.type,!1),t;case 11:return t=ef(t.type.render,!1),t;case 1:return t=ef(t.type,!0),t;default:return""}}function wh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case yh:return"Profiler";case nm:return"StrictMode";case _h:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qy:return(t.displayName||"Context")+".Consumer";case Yy:return(t._context.displayName||"Context")+".Provider";case rm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case im:return e=t.displayName||null,e!==null?e:wh(t.type)||"Memo";case xi:e=t._payload,t=t._init;try{return wh(t(e))}catch{}}return null}function VT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wh(e);case 8:return e===nm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GT(t){var e=Qy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=GT(t))}function Zy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eh(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ev(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jy(t,e){e=e.checked,e!=null&&tm(t,"checked",e,!1)}function Mh(t,e){Jy(t,e);var n=Gi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&bh(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bh(t,e,n){(e!=="number"||cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ba=Array.isArray;function As(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ba(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function e_(t,e){var n=Gi(e.value),r=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ec,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ec=ec||document.createElement("div"),ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ec.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function il(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jT=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(t){jT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$a[e]=$a[t]})});function r_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$a.hasOwnProperty(t)&&$a[t]?(""+e).trim():e+"px"}function i_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var WT=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ah(t,e){if(e){if(WT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ph=null;function om(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nh=null,Rs=null,Ps=null;function iv(t){if(t=Il(t)){if(typeof Nh!="function")throw Error(se(280));var e=t.stateNode;e&&(e=id(e),Nh(t.stateNode,t.type,e))}}function o_(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function s_(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,iv(t),e)for(t=0;t<e.length;t++)iv(e[t])}}function a_(t,e){return t(e)}function l_(){}var tf=!1;function c_(t,e,n){if(tf)return t(e,n);tf=!0;try{return a_(t,e,n)}finally{tf=!1,(Rs!==null||Ps!==null)&&(l_(),s_())}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var r=id(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Lh=!1;if(Qr)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Lh=!1}function $T(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Xa=!1,uu=null,du=!1,Dh=null,XT={onError:function(t){Xa=!0,uu=t}};function YT(t,e,n,r,i,o,s,a,l){Xa=!1,uu=null,$T.apply(XT,arguments)}function qT(t,e,n,r,i,o,s,a,l){if(YT.apply(this,arguments),Xa){if(Xa){var c=uu;Xa=!1,uu=null}else throw Error(se(198));du||(du=!0,Dh=c)}}function zo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ov(t){if(zo(t)!==t)throw Error(se(188))}function KT(t){var e=t.alternate;if(!e){if(e=zo(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ov(i),t;if(o===r)return ov(i),e;o=o.sibling}throw Error(se(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(se(189))}}if(n.alternate!==r)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function d_(t){return t=KT(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var h_=Fn.unstable_scheduleCallback,sv=Fn.unstable_cancelCallback,QT=Fn.unstable_shouldYield,ZT=Fn.unstable_requestPaint,Rt=Fn.unstable_now,JT=Fn.unstable_getCurrentPriorityLevel,sm=Fn.unstable_ImmediatePriority,p_=Fn.unstable_UserBlockingPriority,fu=Fn.unstable_NormalPriority,eC=Fn.unstable_LowPriority,m_=Fn.unstable_IdlePriority,ed=null,Pr=null;function tC(t){if(Pr&&typeof Pr.onCommitFiberRoot=="function")try{Pr.onCommitFiberRoot(ed,t,void 0,(t.current.flags&128)===128)}catch{}}var hr=Math.clz32?Math.clz32:iC,nC=Math.log,rC=Math.LN2;function iC(t){return t>>>=0,t===0?32:31-(nC(t)/rC|0)|0}var tc=64,nc=4194304;function za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=za(a):(o&=s,o!==0&&(r=za(o)))}else s=n&~i,s!==0?r=za(s):o!==0&&(r=za(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-hr(e),i=1<<n,r|=t[n],e&=~i;return r}function oC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-hr(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=oC(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=tc;return tc<<=1,!(tc&4194240)&&(tc=64),t}function nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hr(e),t[e]=n}function aC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-hr(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-hr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var lt=0;function v_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var x_,lm,y_,__,S_,Oh=!1,rc=[],Li=null,Di=null,Ii=null,sl=new Map,al=new Map,_i=[],lC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function av(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(e.pointerId)}}function ba(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Il(e),e!==null&&lm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cC(t,e,n,r,i){switch(e){case"focusin":return Li=ba(Li,t,e,n,r,i),!0;case"dragenter":return Di=ba(Di,t,e,n,r,i),!0;case"mouseover":return Ii=ba(Ii,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return sl.set(o,ba(sl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,al.set(o,ba(al.get(o)||null,t,e,n,r,i)),!0}return!1}function w_(t){var e=go(t.target);if(e!==null){var n=zo(e);if(n!==null){if(e=n.tag,e===13){if(e=u_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){y_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ph=r,n.target.dispatchEvent(r),Ph=null}else return e=Il(n),e!==null&&lm(e),t.blockedOn=n,!1;e.shift()}return!0}function lv(t,e,n){Xc(t)&&n.delete(e)}function uC(){Oh=!1,Li!==null&&Xc(Li)&&(Li=null),Di!==null&&Xc(Di)&&(Di=null),Ii!==null&&Xc(Ii)&&(Ii=null),sl.forEach(lv),al.forEach(lv)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,uC)))}function ll(t){function e(i){return Ta(i,t)}if(0<rc.length){Ta(rc[0],t);for(var n=1;n<rc.length;n++){var r=rc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Li!==null&&Ta(Li,t),Di!==null&&Ta(Di,t),Ii!==null&&Ta(Ii,t),sl.forEach(e),al.forEach(e),n=0;n<_i.length;n++)r=_i[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_i.length&&(n=_i[0],n.blockedOn===null);)w_(n),n.blockedOn===null&&_i.shift()}var Ns=si.ReactCurrentBatchConfig,pu=!0;function dC(t,e,n,r){var i=lt,o=Ns.transition;Ns.transition=null;try{lt=1,cm(t,e,n,r)}finally{lt=i,Ns.transition=o}}function fC(t,e,n,r){var i=lt,o=Ns.transition;Ns.transition=null;try{lt=4,cm(t,e,n,r)}finally{lt=i,Ns.transition=o}}function cm(t,e,n,r){if(pu){var i=Uh(t,e,n,r);if(i===null)hf(t,e,r,mu,n),av(t,r);else if(cC(i,t,e,n,r))r.stopPropagation();else if(av(t,r),e&4&&-1<lC.indexOf(t)){for(;i!==null;){var o=Il(i);if(o!==null&&x_(o),o=Uh(t,e,n,r),o===null&&hf(t,e,r,mu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else hf(t,e,r,null,n)}}var mu=null;function Uh(t,e,n,r){if(mu=null,t=om(r),t=go(t),t!==null)if(e=zo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=u_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mu=t,null}function E_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JT()){case sm:return 1;case p_:return 4;case fu:case eC:return 16;case m_:return 536870912;default:return 16}default:return 16}}var Ci=null,um=null,Yc=null;function M_(){if(Yc)return Yc;var t,e=um,n=e.length,r,i="value"in Ci?Ci.value:Ci.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Yc=i.slice(t,1<r?1-r:void 0)}function qc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ic(){return!0}function cv(){return!1}function Bn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ic:cv,this.isPropagationStopped=cv,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dm=Bn(ua),Dl=Mt({},ua,{view:0,detail:0}),hC=Bn(Dl),rf,of,Ca,td=Mt({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ca&&(Ca&&t.type==="mousemove"?(rf=t.screenX-Ca.screenX,of=t.screenY-Ca.screenY):of=rf=0,Ca=t),rf)},movementY:function(t){return"movementY"in t?t.movementY:of}}),uv=Bn(td),pC=Mt({},td,{dataTransfer:0}),mC=Bn(pC),gC=Mt({},Dl,{relatedTarget:0}),sf=Bn(gC),vC=Mt({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),xC=Bn(vC),yC=Mt({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_C=Bn(yC),SC=Mt({},ua,{data:0}),dv=Bn(SC),wC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MC[t])?!!e[t]:!1}function fm(){return bC}var TC=Mt({},Dl,{key:function(t){if(t.key){var e=wC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fm,charCode:function(t){return t.type==="keypress"?qc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CC=Bn(TC),AC=Mt({},td,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fv=Bn(AC),RC=Mt({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fm}),PC=Bn(RC),NC=Mt({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),LC=Bn(NC),DC=Mt({},td,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IC=Bn(DC),OC=[9,13,27,32],hm=Qr&&"CompositionEvent"in window,Ya=null;Qr&&"documentMode"in document&&(Ya=document.documentMode);var UC=Qr&&"TextEvent"in window&&!Ya,b_=Qr&&(!hm||Ya&&8<Ya&&11>=Ya),hv=" ",pv=!1;function T_(t,e){switch(t){case"keyup":return OC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function FC(t,e){switch(t){case"compositionend":return C_(e);case"keypress":return e.which!==32?null:(pv=!0,hv);case"textInput":return t=e.data,t===hv&&pv?null:t;default:return null}}function kC(t,e){if(ms)return t==="compositionend"||!hm&&T_(t,e)?(t=M_(),Yc=um=Ci=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b_&&e.locale!=="ko"?null:e.data;default:return null}}var BC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BC[t.type]:e==="textarea"}function A_(t,e,n,r){o_(r),e=gu(e,"onChange"),0<e.length&&(n=new dm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qa=null,cl=null;function zC(t){B_(t,0)}function nd(t){var e=xs(t);if(Zy(e))return t}function HC(t,e){if(t==="change")return e}var R_=!1;if(Qr){var af;if(Qr){var lf="oninput"in document;if(!lf){var gv=document.createElement("div");gv.setAttribute("oninput","return;"),lf=typeof gv.oninput=="function"}af=lf}else af=!1;R_=af&&(!document.documentMode||9<document.documentMode)}function vv(){qa&&(qa.detachEvent("onpropertychange",P_),cl=qa=null)}function P_(t){if(t.propertyName==="value"&&nd(cl)){var e=[];A_(e,cl,t,om(t)),c_(zC,e)}}function VC(t,e,n){t==="focusin"?(vv(),qa=e,cl=n,qa.attachEvent("onpropertychange",P_)):t==="focusout"&&vv()}function GC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nd(cl)}function jC(t,e){if(t==="click")return nd(e)}function WC(t,e){if(t==="input"||t==="change")return nd(e)}function $C(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gr=typeof Object.is=="function"?Object.is:$C;function ul(t,e){if(gr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xh.call(e,i)||!gr(t[i],e[i]))return!1}return!0}function xv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yv(t,e){var n=xv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xv(n)}}function N_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?N_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L_(){for(var t=window,e=cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cu(t.document)}return e}function pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XC(t){var e=L_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&N_(n.ownerDocument.documentElement,n)){if(r!==null&&pm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=yv(n,o);var s=yv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var YC=Qr&&"documentMode"in document&&11>=document.documentMode,gs=null,Fh=null,Ka=null,kh=!1;function _v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kh||gs==null||gs!==cu(r)||(r=gs,"selectionStart"in r&&pm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ka&&ul(Ka,r)||(Ka=r,r=gu(Fh,"onSelect"),0<r.length&&(e=new dm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gs)))}function oc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},cf={},D_={};Qr&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function rd(t){if(cf[t])return cf[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D_)return cf[t]=e[n];return t}var I_=rd("animationend"),O_=rd("animationiteration"),U_=rd("animationstart"),F_=rd("transitionend"),k_=new Map,Sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){k_.set(t,e),Bo(e,[t])}for(var uf=0;uf<Sv.length;uf++){var df=Sv[uf],qC=df.toLowerCase(),KC=df[0].toUpperCase()+df.slice(1);Ki(qC,"on"+KC)}Ki(I_,"onAnimationEnd");Ki(O_,"onAnimationIteration");Ki(U_,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(F_,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);Bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function wv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qT(r,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;wv(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;wv(i,a,c),o=l}}}if(du)throw t=Dh,du=!1,Dh=null,t}function vt(t,e){var n=e[Gh];n===void 0&&(n=e[Gh]=new Set);var r=t+"__bubble";n.has(r)||(z_(e,t,2,!1),n.add(r))}function ff(t,e,n){var r=0;e&&(r|=4),z_(n,t,r,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function dl(t){if(!t[sc]){t[sc]=!0,Xy.forEach(function(n){n!=="selectionchange"&&(QC.has(n)||ff(n,!1,t),ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sc]||(e[sc]=!0,ff("selectionchange",!1,e))}}function z_(t,e,n,r){switch(E_(e)){case 1:var i=dC;break;case 4:i=fC;break;default:i=cm}n=i.bind(null,e,n,t),i=void 0,!Lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=go(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}c_(function(){var c=o,u=om(n),f=[];e:{var d=k_.get(t);if(d!==void 0){var g=dm,v=t;switch(t){case"keypress":if(qc(n)===0)break e;case"keydown":case"keyup":g=CC;break;case"focusin":v="focus",g=sf;break;case"focusout":v="blur",g=sf;break;case"beforeblur":case"afterblur":g=sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=PC;break;case I_:case O_:case U_:g=xC;break;case F_:g=LC;break;case"scroll":g=hC;break;case"wheel":g=IC;break;case"copy":case"cut":case"paste":g=_C;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fv}var m=(e&4)!==0,p=!m&&t==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var x=c,y;x!==null;){y=x;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,h!==null&&(w=ol(x,h),w!=null&&m.push(fl(x,w,y)))),p)break;x=x.return}0<m.length&&(d=new g(d,v,null,n,u),f.push({event:d,listeners:m}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Ph&&(v=n.relatedTarget||n.fromElement)&&(go(v)||v[Zr]))break e;if((g||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?go(v):null,v!==null&&(p=zo(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(m=uv,w="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(m=fv,w="onPointerLeave",h="onPointerEnter",x="pointer"),p=g==null?d:xs(g),y=v==null?d:xs(v),d=new m(w,x+"leave",g,n,u),d.target=p,d.relatedTarget=y,w=null,go(u)===c&&(m=new m(h,x+"enter",v,n,u),m.target=y,m.relatedTarget=p,w=m),p=w,g&&v)t:{for(m=g,h=v,x=0,y=m;y;y=$o(y))x++;for(y=0,w=h;w;w=$o(w))y++;for(;0<x-y;)m=$o(m),x--;for(;0<y-x;)h=$o(h),y--;for(;x--;){if(m===h||h!==null&&m===h.alternate)break t;m=$o(m),h=$o(h)}m=null}else m=null;g!==null&&Ev(f,d,g,m,!1),v!==null&&p!==null&&Ev(f,p,v,m,!0)}}e:{if(d=c?xs(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var b=HC;else if(mv(d))if(R_)b=WC;else{b=GC;var T=VC}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=jC);if(b&&(b=b(t,c))){A_(f,b,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&bh(d,"number",d.value)}switch(T=c?xs(c):window,t){case"focusin":(mv(T)||T.contentEditable==="true")&&(gs=T,Fh=c,Ka=null);break;case"focusout":Ka=Fh=gs=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,_v(f,n,u);break;case"selectionchange":if(YC)break;case"keydown":case"keyup":_v(f,n,u)}var E;if(hm)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ms?T_(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(b_&&n.locale!=="ko"&&(ms||D!=="onCompositionStart"?D==="onCompositionEnd"&&ms&&(E=M_()):(Ci=u,um="value"in Ci?Ci.value:Ci.textContent,ms=!0)),T=gu(c,D),0<T.length&&(D=new dv(D,t,null,n,u),f.push({event:D,listeners:T}),E?D.data=E:(E=C_(n),E!==null&&(D.data=E)))),(E=UC?FC(t,n):kC(t,n))&&(c=gu(c,"onBeforeInput"),0<c.length&&(u=new dv("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=E))}B_(f,e)})}function fl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ol(t,n),o!=null&&r.unshift(fl(t,o,i)),o=ol(t,e),o!=null&&r.push(fl(t,o,i))),t=t.return}return r}function $o(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ev(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ol(n,o),l!=null&&s.unshift(fl(n,l,a))):i||(l=ol(n,o),l!=null&&s.push(fl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var ZC=/\r\n?/g,JC=/\u0000|\uFFFD/g;function Mv(t){return(typeof t=="string"?t:""+t).replace(ZC,`
`).replace(JC,"")}function ac(t,e,n){if(e=Mv(e),Mv(t)!==e&&n)throw Error(se(425))}function vu(){}var Bh=null,zh=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vh=typeof setTimeout=="function"?setTimeout:void 0,eA=typeof clearTimeout=="function"?clearTimeout:void 0,bv=typeof Promise=="function"?Promise:void 0,tA=typeof queueMicrotask=="function"?queueMicrotask:typeof bv<"u"?function(t){return bv.resolve(null).then(t).catch(nA)}:Vh;function nA(t){setTimeout(function(){throw t})}function pf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ll(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ll(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),Cr="__reactFiber$"+da,hl="__reactProps$"+da,Zr="__reactContainer$"+da,Gh="__reactEvents$"+da,rA="__reactListeners$"+da,iA="__reactHandles$"+da;function go(t){var e=t[Cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zr]||n[Cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tv(t);t!==null;){if(n=t[Cr])return n;t=Tv(t)}return e}t=n,n=t.parentNode}return null}function Il(t){return t=t[Cr]||t[Zr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function id(t){return t[hl]||null}var jh=[],ys=-1;function Qi(t){return{current:t}}function yt(t){0>ys||(t.current=jh[ys],jh[ys]=null,ys--)}function mt(t,e){ys++,jh[ys]=t.current,t.current=e}var ji={},nn=Qi(ji),Sn=Qi(!1),Ro=ji;function Ks(t,e){var n=t.type.contextTypes;if(!n)return ji;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wn(t){return t=t.childContextTypes,t!=null}function xu(){yt(Sn),yt(nn)}function Cv(t,e,n){if(nn.current!==ji)throw Error(se(168));mt(nn,e),mt(Sn,n)}function H_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(se(108,VT(t)||"Unknown",i));return Mt({},n,r)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,Ro=nn.current,mt(nn,t),mt(Sn,Sn.current),!0}function Av(t,e,n){var r=t.stateNode;if(!r)throw Error(se(169));n?(t=H_(t,e,Ro),r.__reactInternalMemoizedMergedChildContext=t,yt(Sn),yt(nn),mt(nn,t)):yt(Sn),mt(Sn,n)}var Wr=null,od=!1,mf=!1;function V_(t){Wr===null?Wr=[t]:Wr.push(t)}function oA(t){od=!0,V_(t)}function Zi(){if(!mf&&Wr!==null){mf=!0;var t=0,e=lt;try{var n=Wr;for(lt=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wr=null,od=!1}catch(i){throw Wr!==null&&(Wr=Wr.slice(t+1)),h_(sm,Zi),i}finally{lt=e,mf=!1}}return null}var _s=[],Ss=0,_u=null,Su=0,jn=[],Wn=0,Po=null,Xr=1,Yr="";function co(t,e){_s[Ss++]=Su,_s[Ss++]=_u,_u=t,Su=e}function G_(t,e,n){jn[Wn++]=Xr,jn[Wn++]=Yr,jn[Wn++]=Po,Po=t;var r=Xr;t=Yr;var i=32-hr(r)-1;r&=~(1<<i),n+=1;var o=32-hr(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xr=1<<32-hr(e)+i|n<<i|r,Yr=o+t}else Xr=1<<o|n<<i|r,Yr=t}function mm(t){t.return!==null&&(co(t,1),G_(t,1,0))}function gm(t){for(;t===_u;)_u=_s[--Ss],_s[Ss]=null,Su=_s[--Ss],_s[Ss]=null;for(;t===Po;)Po=jn[--Wn],jn[Wn]=null,Yr=jn[--Wn],jn[Wn]=null,Xr=jn[--Wn],jn[Wn]=null}var In=null,Dn=null,_t=!1,cr=null;function j_(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Dn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Po!==null?{id:Xr,overflow:Yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Dn=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $h(t){if(_t){var e=Dn;if(e){var n=e;if(!Rv(t,e)){if(Wh(t))throw Error(se(418));e=Oi(n.nextSibling);var r=In;e&&Rv(t,e)?j_(r,n):(t.flags=t.flags&-4097|2,_t=!1,In=t)}}else{if(Wh(t))throw Error(se(418));t.flags=t.flags&-4097|2,_t=!1,In=t}}}function Pv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function lc(t){if(t!==In)return!1;if(!_t)return Pv(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=Dn)){if(Wh(t))throw W_(),Error(se(418));for(;e;)j_(t,e),e=Oi(e.nextSibling)}if(Pv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=In?Oi(t.stateNode.nextSibling):null;return!0}function W_(){for(var t=Dn;t;)t=Oi(t.nextSibling)}function Qs(){Dn=In=null,_t=!1}function vm(t){cr===null?cr=[t]:cr.push(t)}var sA=si.ReactCurrentBatchConfig;function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var r=n.stateNode}if(!r)throw Error(se(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function cc(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nv(t){var e=t._init;return e(t._payload)}function $_(t){function e(h,x){if(t){var y=h.deletions;y===null?(h.deletions=[x],h.flags|=16):y.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function r(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function i(h,x){return h=Bi(h,x),h.index=0,h.sibling=null,h}function o(h,x,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<x?(h.flags|=2,x):y):(h.flags|=2,x)):(h.flags|=1048576,x)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,x,y,w){return x===null||x.tag!==6?(x=wf(y,h.mode,w),x.return=h,x):(x=i(x,y),x.return=h,x)}function l(h,x,y,w){var b=y.type;return b===ps?u(h,x,y.props.children,w,y.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xi&&Nv(b)===x.type)?(w=i(x,y.props),w.ref=Aa(h,x,y),w.return=h,w):(w=nu(y.type,y.key,y.props,null,h.mode,w),w.ref=Aa(h,x,y),w.return=h,w)}function c(h,x,y,w){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Ef(y,h.mode,w),x.return=h,x):(x=i(x,y.children||[]),x.return=h,x)}function u(h,x,y,w,b){return x===null||x.tag!==7?(x=Mo(y,h.mode,w,b),x.return=h,x):(x=i(x,y),x.return=h,x)}function f(h,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=wf(""+x,h.mode,y),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zl:return y=nu(x.type,x.key,x.props,null,h.mode,y),y.ref=Aa(h,null,x),y.return=h,y;case hs:return x=Ef(x,h.mode,y),x.return=h,x;case xi:var w=x._init;return f(h,w(x._payload),y)}if(Ba(x)||Ea(x))return x=Mo(x,h.mode,y,null),x.return=h,x;cc(h,x)}return null}function d(h,x,y,w){var b=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(h,x,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zl:return y.key===b?l(h,x,y,w):null;case hs:return y.key===b?c(h,x,y,w):null;case xi:return b=y._init,d(h,x,b(y._payload),w)}if(Ba(y)||Ea(y))return b!==null?null:u(h,x,y,w,null);cc(h,y)}return null}function g(h,x,y,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(y)||null,a(x,h,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Zl:return h=h.get(w.key===null?y:w.key)||null,l(x,h,w,b);case hs:return h=h.get(w.key===null?y:w.key)||null,c(x,h,w,b);case xi:var T=w._init;return g(h,x,y,T(w._payload),b)}if(Ba(w)||Ea(w))return h=h.get(y)||null,u(x,h,w,b,null);cc(x,w)}return null}function v(h,x,y,w){for(var b=null,T=null,E=x,D=x=0,M=null;E!==null&&D<y.length;D++){E.index>D?(M=E,E=null):M=E.sibling;var C=d(h,E,y[D],w);if(C===null){E===null&&(E=M);break}t&&E&&C.alternate===null&&e(h,E),x=o(C,x,D),T===null?b=C:T.sibling=C,T=C,E=M}if(D===y.length)return n(h,E),_t&&co(h,D),b;if(E===null){for(;D<y.length;D++)E=f(h,y[D],w),E!==null&&(x=o(E,x,D),T===null?b=E:T.sibling=E,T=E);return _t&&co(h,D),b}for(E=r(h,E);D<y.length;D++)M=g(E,h,D,y[D],w),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?D:M.key),x=o(M,x,D),T===null?b=M:T.sibling=M,T=M);return t&&E.forEach(function(B){return e(h,B)}),_t&&co(h,D),b}function m(h,x,y,w){var b=Ea(y);if(typeof b!="function")throw Error(se(150));if(y=b.call(y),y==null)throw Error(se(151));for(var T=b=null,E=x,D=x=0,M=null,C=y.next();E!==null&&!C.done;D++,C=y.next()){E.index>D?(M=E,E=null):M=E.sibling;var B=d(h,E,C.value,w);if(B===null){E===null&&(E=M);break}t&&E&&B.alternate===null&&e(h,E),x=o(B,x,D),T===null?b=B:T.sibling=B,T=B,E=M}if(C.done)return n(h,E),_t&&co(h,D),b;if(E===null){for(;!C.done;D++,C=y.next())C=f(h,C.value,w),C!==null&&(x=o(C,x,D),T===null?b=C:T.sibling=C,T=C);return _t&&co(h,D),b}for(E=r(h,E);!C.done;D++,C=y.next())C=g(E,h,D,C.value,w),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?D:C.key),x=o(C,x,D),T===null?b=C:T.sibling=C,T=C);return t&&E.forEach(function(F){return e(h,F)}),_t&&co(h,D),b}function p(h,x,y,w){if(typeof y=="object"&&y!==null&&y.type===ps&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Zl:e:{for(var b=y.key,T=x;T!==null;){if(T.key===b){if(b=y.type,b===ps){if(T.tag===7){n(h,T.sibling),x=i(T,y.props.children),x.return=h,h=x;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xi&&Nv(b)===T.type){n(h,T.sibling),x=i(T,y.props),x.ref=Aa(h,T,y),x.return=h,h=x;break e}n(h,T);break}else e(h,T);T=T.sibling}y.type===ps?(x=Mo(y.props.children,h.mode,w,y.key),x.return=h,h=x):(w=nu(y.type,y.key,y.props,null,h.mode,w),w.ref=Aa(h,x,y),w.return=h,h=w)}return s(h);case hs:e:{for(T=y.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(h,x.sibling),x=i(x,y.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=Ef(y,h.mode,w),x.return=h,h=x}return s(h);case xi:return T=y._init,p(h,x,T(y._payload),w)}if(Ba(y))return v(h,x,y,w);if(Ea(y))return m(h,x,y,w);cc(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(h,x.sibling),x=i(x,y),x.return=h,h=x):(n(h,x),x=wf(y,h.mode,w),x.return=h,h=x),s(h)):n(h,x)}return p}var Zs=$_(!0),X_=$_(!1),wu=Qi(null),Eu=null,ws=null,xm=null;function ym(){xm=ws=Eu=null}function _m(t){var e=wu.current;yt(wu),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Eu=t,xm=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Zn(t){var e=t._currentValue;if(xm!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Eu===null)throw Error(se(308));ws=t,Eu.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var vo=null;function Sm(t){vo===null?vo=[t]:vo.push(t)}function Y_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jr(t,r)}function Jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yi=!1;function wm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,tt&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jr(t,n)}return i=r.interleaved,i===null?(e.next=e,Sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jr(t,n)}function Kc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,am(t,n)}}function Lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mu(t,e,n,r){var i=t.updateQueue;yi=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,u=c=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,m=a;switch(d=e,g=n,m.tag){case 1:if(v=m.payload,typeof v=="function"){f=v.call(g,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,d=typeof v=="function"?v.call(g,f,d):v,d==null)break e;f=Mt({},f,d);break e;case 2:yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=f):u=u.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Lo|=s,t.lanes=s,t.memoizedState=f}}function Dv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(se(191,i));i.call(r)}}}var Ol={},Nr=Qi(Ol),pl=Qi(Ol),ml=Qi(Ol);function xo(t){if(t===Ol)throw Error(se(174));return t}function Em(t,e){switch(mt(ml,e),mt(pl,t),mt(Nr,Ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ch(e,t)}yt(Nr),mt(Nr,e)}function Js(){yt(Nr),yt(pl),yt(ml)}function K_(t){xo(ml.current);var e=xo(Nr.current),n=Ch(e,t.type);e!==n&&(mt(pl,t),mt(Nr,n))}function Mm(t){pl.current===t&&(yt(Nr),yt(pl))}var wt=Qi(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gf=[];function bm(){for(var t=0;t<gf.length;t++)gf[t]._workInProgressVersionPrimary=null;gf.length=0}var Qc=si.ReactCurrentDispatcher,vf=si.ReactCurrentBatchConfig,No=0,Et=null,Lt=null,zt=null,Tu=!1,Qa=!1,gl=0,aA=0;function qt(){throw Error(se(321))}function Tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gr(t[n],e[n]))return!1;return!0}function Cm(t,e,n,r,i,o){if(No=o,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qc.current=t===null||t.memoizedState===null?dA:fA,t=n(r,i),Qa){o=0;do{if(Qa=!1,gl=0,25<=o)throw Error(se(301));o+=1,zt=Lt=null,e.updateQueue=null,Qc.current=hA,t=n(r,i)}while(Qa)}if(Qc.current=Cu,e=Lt!==null&&Lt.next!==null,No=0,zt=Lt=Et=null,Tu=!1,e)throw Error(se(300));return t}function Am(){var t=gl!==0;return gl=0,t}function wr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Et.memoizedState=zt=t:zt=zt.next=t,zt}function Jn(){if(Lt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=zt===null?Et.memoizedState:zt.next;if(e!==null)zt=e,Lt=t;else{if(t===null)throw Error(se(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},zt===null?Et.memoizedState=zt=t:zt=zt.next=t}return zt}function vl(t,e){return typeof e=="function"?e(t):e}function xf(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var r=Lt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((No&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Et.lanes|=u,Lo|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,gr(r,e.memoizedState)||(_n=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Et.lanes|=o,Lo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yf(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);gr(o,e.memoizedState)||(_n=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Q_(){}function Z_(t,e){var n=Et,r=Jn(),i=e(),o=!gr(r.memoizedState,i);if(o&&(r.memoizedState=i,_n=!0),r=r.queue,Rm(tS.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,xl(9,eS.bind(null,n,r,i,e),void 0,null),Vt===null)throw Error(se(349));No&30||J_(n,e,i)}return i}function J_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eS(t,e,n,r){e.value=n,e.getSnapshot=r,nS(e)&&rS(t)}function tS(t,e,n){return n(function(){nS(e)&&rS(t)})}function nS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gr(t,n)}catch{return!0}}function rS(t){var e=Jr(t,1);e!==null&&pr(e,t,1,-1)}function Iv(t){var e=wr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:t},e.queue=t,t=t.dispatch=uA.bind(null,Et,t),[e.memoizedState,t]}function xl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function iS(){return Jn().memoizedState}function Zc(t,e,n,r){var i=wr();Et.flags|=t,i.memoizedState=xl(1|e,n,void 0,r===void 0?null:r)}function sd(t,e,n,r){var i=Jn();r=r===void 0?null:r;var o=void 0;if(Lt!==null){var s=Lt.memoizedState;if(o=s.destroy,r!==null&&Tm(r,s.deps)){i.memoizedState=xl(e,n,o,r);return}}Et.flags|=t,i.memoizedState=xl(1|e,n,o,r)}function Ov(t,e){return Zc(8390656,8,t,e)}function Rm(t,e){return sd(2048,8,t,e)}function oS(t,e){return sd(4,2,t,e)}function sS(t,e){return sd(4,4,t,e)}function aS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lS(t,e,n){return n=n!=null?n.concat([t]):null,sd(4,4,aS.bind(null,e,t),n)}function Pm(){}function cS(t,e){var n=Jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uS(t,e){var n=Jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dS(t,e,n){return No&21?(gr(n,e)||(n=g_(),Et.lanes|=n,Lo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function lA(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var r=vf.transition;vf.transition={};try{t(!1),e()}finally{lt=n,vf.transition=r}}function fS(){return Jn().memoizedState}function cA(t,e,n){var r=ki(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hS(t))pS(e,n);else if(n=Y_(t,e,n,r),n!==null){var i=hn();pr(n,t,r,i),mS(n,e,r)}}function uA(t,e,n){var r=ki(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hS(t))pS(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,gr(a,s)){var l=e.interleaved;l===null?(i.next=i,Sm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Y_(t,e,i,r),n!==null&&(i=hn(),pr(n,t,r,i),mS(n,e,r))}}function hS(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function pS(t,e){Qa=Tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,am(t,n)}}var Cu={readContext:Zn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},dA={readContext:Zn,useCallback:function(t,e){return wr().memoizedState=[t,e===void 0?null:e],t},useContext:Zn,useEffect:Ov,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4194308,4,aS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zc(4,2,t,e)},useMemo:function(t,e){var n=wr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cA.bind(null,Et,t),[r.memoizedState,t]},useRef:function(t){var e=wr();return t={current:t},e.memoizedState=t},useState:Iv,useDebugValue:Pm,useDeferredValue:function(t){return wr().memoizedState=t},useTransition:function(){var t=Iv(!1),e=t[0];return t=lA.bind(null,t[1]),wr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Et,i=wr();if(_t){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Vt===null)throw Error(se(349));No&30||J_(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Ov(tS.bind(null,r,o,t),[t]),r.flags|=2048,xl(9,eS.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=wr(),e=Vt.identifierPrefix;if(_t){var n=Yr,r=Xr;n=(r&~(1<<32-hr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fA={readContext:Zn,useCallback:cS,useContext:Zn,useEffect:Rm,useImperativeHandle:lS,useInsertionEffect:oS,useLayoutEffect:sS,useMemo:uS,useReducer:xf,useRef:iS,useState:function(){return xf(vl)},useDebugValue:Pm,useDeferredValue:function(t){var e=Jn();return dS(e,Lt.memoizedState,t)},useTransition:function(){var t=xf(vl)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Q_,useSyncExternalStore:Z_,useId:fS,unstable_isNewReconciler:!1},hA={readContext:Zn,useCallback:cS,useContext:Zn,useEffect:Rm,useImperativeHandle:lS,useInsertionEffect:oS,useLayoutEffect:sS,useMemo:uS,useReducer:yf,useRef:iS,useState:function(){return yf(vl)},useDebugValue:Pm,useDeferredValue:function(t){var e=Jn();return Lt===null?e.memoizedState=t:dS(e,Lt.memoizedState,t)},useTransition:function(){var t=yf(vl)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Q_,useSyncExternalStore:Z_,useId:fS,unstable_isNewReconciler:!1};function or(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ad={isMounted:function(t){return(t=t._reactInternals)?zo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=hn(),i=ki(t),o=Kr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ui(t,o,i),e!==null&&(pr(e,t,i,r),Kc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=hn(),i=ki(t),o=Kr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ui(t,o,i),e!==null&&(pr(e,t,i,r),Kc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),r=ki(t),i=Kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ui(t,i,r),e!==null&&(pr(e,t,r,n),Kc(e,t,r))}};function Uv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ul(n,r)||!ul(i,o):!0}function gS(t,e,n){var r=!1,i=ji,o=e.contextType;return typeof o=="object"&&o!==null?o=Zn(o):(i=wn(e)?Ro:nn.current,r=e.contextTypes,o=(r=r!=null)?Ks(t,i):ji),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ad,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Fv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ad.enqueueReplaceState(e,e.state,null)}function qh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Zn(o):(o=wn(e)?Ro:nn.current,i.context=Ks(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Yh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ad.enqueueReplaceState(i,i.state,null),Mu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ea(t,e){try{var n="",r=e;do n+=HT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function _f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pA=typeof WeakMap=="function"?WeakMap:Map;function vS(t,e,n){n=Kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ru||(Ru=!0,sp=r),Kh(t,e)},n}function xS(t,e,n){n=Kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Kh(t,e),typeof r!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function kv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=AA.bind(null,t,e,n),e.then(t,t))}function Bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kr(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var mA=si.ReactCurrentOwner,_n=!1;function un(t,e,n,r){e.child=t===null?X_(e,null,n,r):Zs(e,t.child,n,r)}function Hv(t,e,n,r,i){n=n.render;var o=e.ref;return Ls(e,i),r=Cm(t,e,n,r,o,i),n=Am(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ei(t,e,i)):(_t&&n&&mm(e),e.flags|=1,un(t,e,r,i),e.child)}function Vv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!km(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,yS(t,e,o,r,i)):(t=nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ul,n(s,r)&&t.ref===e.ref)return ei(t,e,i)}return e.flags|=1,t=Bi(o,r),t.ref=e.ref,t.return=e,e.child=t}function yS(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ul(o,r)&&t.ref===e.ref)if(_n=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,ei(t,e,i)}return Qh(t,e,n,r,i)}function _S(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Ms,Nn),Nn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Ms,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,mt(Ms,Nn),Nn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,mt(Ms,Nn),Nn|=r;return un(t,e,i,n),e.child}function SS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qh(t,e,n,r,i){var o=wn(n)?Ro:nn.current;return o=Ks(e,o),Ls(e,i),n=Cm(t,e,n,r,o,i),r=Am(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ei(t,e,i)):(_t&&r&&mm(e),e.flags|=1,un(t,e,n,i),e.child)}function Gv(t,e,n,r,i){if(wn(n)){var o=!0;yu(e)}else o=!1;if(Ls(e,i),e.stateNode===null)Jc(t,e),gS(e,n,r),qh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=wn(n)?Ro:nn.current,c=Ks(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Fv(e,s,r,c),yi=!1;var d=e.memoizedState;s.state=d,Mu(e,r,s,i),l=e.memoizedState,a!==r||d!==l||Sn.current||yi?(typeof u=="function"&&(Yh(e,n,u,r),l=e.memoizedState),(a=yi||Uv(e,n,a,r,d,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,q_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:or(e.type,a),s.props=c,f=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=wn(n)?Ro:nn.current,l=Ks(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Fv(e,s,r,l),yi=!1,d=e.memoizedState,s.state=d,Mu(e,r,s,i);var v=e.memoizedState;a!==f||d!==v||Sn.current||yi?(typeof g=="function"&&(Yh(e,n,g,r),v=e.memoizedState),(c=yi||Uv(e,n,c,r,d,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Zh(t,e,n,r,o,i)}function Zh(t,e,n,r,i,o){SS(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Av(e,n,!1),ei(t,e,o);r=e.stateNode,mA.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Zs(e,t.child,null,o),e.child=Zs(e,null,a,o)):un(t,e,a,o),e.memoizedState=r.state,i&&Av(e,n,!0),e.child}function wS(t){var e=t.stateNode;e.pendingContext?Cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cv(t,e.context,!1),Em(t,e.containerInfo)}function jv(t,e,n,r,i){return Qs(),vm(i),e.flags|=256,un(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function ES(t,e,n){var r=e.pendingProps,i=wt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),mt(wt,i&1),t===null)return $h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ud(s,r,0,null),t=Mo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ep(n),e.memoizedState=Jh,t):Nm(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gA(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Bi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Bi(a,o):(o=Mo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?ep(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return o=t.child,t=o.sibling,r=Bi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nm(t,e){return e=ud({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uc(t,e,n,r){return r!==null&&vm(r),Zs(e,t.child,null,n),t=Nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gA(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=_f(Error(se(422))),uc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=ud({mode:"visible",children:r.children},i,0,null),o=Mo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Zs(e,t.child,null,s),e.child.memoizedState=ep(s),e.memoizedState=Jh,o);if(!(e.mode&1))return uc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(se(419)),r=_f(o,r,void 0),uc(t,e,s,r)}if(a=(s&t.childLanes)!==0,_n||a){if(r=Vt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jr(t,i),pr(r,t,i,-1))}return Fm(),r=_f(Error(se(421))),uc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RA.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Dn=Oi(i.nextSibling),In=e,_t=!0,cr=null,t!==null&&(jn[Wn++]=Xr,jn[Wn++]=Yr,jn[Wn++]=Po,Xr=t.id,Yr=t.overflow,Po=e),e=Nm(e,r.children),e.flags|=4096,e)}function Wv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function Sf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function MS(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(un(t,e,r.children,n),r=wt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wv(t,n,e);else if(t.tag===19)Wv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(mt(wt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sf(e,!0,n,null,o);break;case"together":Sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vA(t,e,n){switch(e.tag){case 3:wS(e),Qs();break;case 5:K_(e);break;case 1:wn(e.type)&&yu(e);break;case 4:Em(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;mt(wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(mt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?ES(t,e,n):(mt(wt,wt.current&1),t=ei(t,e,n),t!==null?t.sibling:null);mt(wt,wt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return MS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),mt(wt,wt.current),r)break;return null;case 22:case 23:return e.lanes=0,_S(t,e,n)}return ei(t,e,n)}var bS,tp,TS,CS;bS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tp=function(){};TS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xo(Nr.current);var o=null;switch(n){case"input":i=Eh(t,i),r=Eh(t,r),o=[];break;case"select":i=Mt({},i,{value:void 0}),r=Mt({},r,{value:void 0}),o=[];break;case"textarea":i=Th(t,i),r=Th(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vu)}Ah(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(rl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(rl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};CS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ra(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xA(t,e,n){var r=e.pendingProps;switch(gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return wn(e.type)&&xu(),Kt(e),null;case 3:return r=e.stateNode,Js(),yt(Sn),yt(nn),bm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cr!==null&&(cp(cr),cr=null))),tp(t,e),Kt(e),null;case 5:Mm(e);var i=xo(ml.current);if(n=e.type,t!==null&&e.stateNode!=null)TS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(se(166));return Kt(e),null}if(t=xo(Nr.current),lc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Cr]=e,r[hl]=o,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",r),vt("close",r);break;case"iframe":case"object":case"embed":vt("load",r);break;case"video":case"audio":for(i=0;i<Ha.length;i++)vt(Ha[i],r);break;case"source":vt("error",r);break;case"img":case"image":case"link":vt("error",r),vt("load",r);break;case"details":vt("toggle",r);break;case"input":ev(r,o),vt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},vt("invalid",r);break;case"textarea":nv(r,o),vt("invalid",r)}Ah(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",""+a]):rl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&vt("scroll",r)}switch(n){case"input":Jl(r),tv(r,o,!0);break;case"textarea":Jl(r),rv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Cr]=e,t[hl]=r,bS(t,e,!1,!1),e.stateNode=t;e:{switch(s=Rh(n,r),n){case"dialog":vt("cancel",t),vt("close",t),i=r;break;case"iframe":case"object":case"embed":vt("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ha.length;i++)vt(Ha[i],t);i=r;break;case"source":vt("error",t),i=r;break;case"img":case"image":case"link":vt("error",t),vt("load",t),i=r;break;case"details":vt("toggle",t),i=r;break;case"input":ev(t,r),i=Eh(t,r),vt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Mt({},r,{value:void 0}),vt("invalid",t);break;case"textarea":nv(t,r),i=Th(t,r),vt("invalid",t);break;default:i=r}Ah(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?i_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&il(t,l):typeof l=="number"&&il(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(rl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&vt("scroll",t):l!=null&&tm(t,o,l,s))}switch(n){case"input":Jl(t),tv(t,r,!1);break;case"textarea":Jl(t),rv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?As(t,!!r.multiple,o,!1):r.defaultValue!=null&&As(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)CS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(se(166));if(n=xo(ml.current),xo(Nr.current),lc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cr]=e,(o=r.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:ac(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ac(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cr]=e,e.stateNode=r}return Kt(e),null;case 13:if(yt(wt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Dn!==null&&e.mode&1&&!(e.flags&128))W_(),Qs(),e.flags|=98560,o=!1;else if(o=lc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(se(317));o[Cr]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),o=!1}else cr!==null&&(cp(cr),cr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?Dt===0&&(Dt=3):Fm())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Js(),tp(t,e),t===null&&dl(e.stateNode.containerInfo),Kt(e),null;case 10:return _m(e.type._context),Kt(e),null;case 17:return wn(e.type)&&xu(),Kt(e),null;case 19:if(yt(wt),o=e.memoizedState,o===null)return Kt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ra(o,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=bu(t),s!==null){for(e.flags|=128,Ra(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(wt,wt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Rt()>ta&&(e.flags|=128,r=!0,Ra(o,!1),e.lanes=4194304)}else{if(!r)if(t=bu(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ra(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!_t)return Kt(e),null}else 2*Rt()-o.renderingStartTime>ta&&n!==1073741824&&(e.flags|=128,r=!0,Ra(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Rt(),e.sibling=null,n=wt.current,mt(wt,r?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Um(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function yA(t,e){switch(gm(e),e.tag){case 1:return wn(e.type)&&xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),yt(Sn),yt(nn),bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mm(e),null;case 13:if(yt(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(wt),null;case 4:return Js(),null;case 10:return _m(e.type._context),null;case 22:case 23:return Um(),null;case 24:return null;default:return null}}var dc=!1,en=!1,_A=typeof WeakSet=="function"?WeakSet:Set,we=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ct(t,e,r)}else n.current=null}function np(t,e,n){try{n()}catch(r){Ct(t,e,r)}}var $v=!1;function SA(t,e){if(Bh=pu,t=L_(),pm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++c===i&&(a=s),d===o&&++u===r&&(l=s),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:t,selectionRange:n},pu=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,p=v.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?m:or(e.type,m),p);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(w){Ct(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return v=$v,$v=!1,v}function Za(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&np(e,n,o)}i=i.next}while(i!==r)}}function ld(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function AS(t){var e=t.alternate;e!==null&&(t.alternate=null,AS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cr],delete e[hl],delete e[Gh],delete e[rA],delete e[iA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function RS(t){return t.tag===5||t.tag===3||t.tag===4}function Xv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||RS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}function op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(op(t,e,n),t=t.sibling;t!==null;)op(t,e,n),t=t.sibling}var Gt=null,lr=!1;function li(t,e,n){for(n=n.child;n!==null;)PS(t,e,n),n=n.sibling}function PS(t,e,n){if(Pr&&typeof Pr.onCommitFiberUnmount=="function")try{Pr.onCommitFiberUnmount(ed,n)}catch{}switch(n.tag){case 5:en||Es(n,e);case 6:var r=Gt,i=lr;Gt=null,li(t,e,n),Gt=r,lr=i,Gt!==null&&(lr?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(lr?(t=Gt,n=n.stateNode,t.nodeType===8?pf(t.parentNode,n):t.nodeType===1&&pf(t,n),ll(t)):pf(Gt,n.stateNode));break;case 4:r=Gt,i=lr,Gt=n.stateNode.containerInfo,lr=!0,li(t,e,n),Gt=r,lr=i;break;case 0:case 11:case 14:case 15:if(!en&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&np(n,e,s),i=i.next}while(i!==r)}li(t,e,n);break;case 1:if(!en&&(Es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ct(n,e,a)}li(t,e,n);break;case 21:li(t,e,n);break;case 22:n.mode&1?(en=(r=en)||n.memoizedState!==null,li(t,e,n),en=r):li(t,e,n);break;default:li(t,e,n)}}function Yv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _A),e.forEach(function(r){var i=PA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function er(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,lr=!1;break e;case 3:Gt=a.stateNode.containerInfo,lr=!0;break e;case 4:Gt=a.stateNode.containerInfo,lr=!0;break e}a=a.return}if(Gt===null)throw Error(se(160));PS(o,s,i),Gt=null,lr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ct(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)NS(e,t),e=e.sibling}function NS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(e,t),Sr(t),r&4){try{Za(3,t,t.return),ld(3,t)}catch(m){Ct(t,t.return,m)}try{Za(5,t,t.return)}catch(m){Ct(t,t.return,m)}}break;case 1:er(e,t),Sr(t),r&512&&n!==null&&Es(n,n.return);break;case 5:if(er(e,t),Sr(t),r&512&&n!==null&&Es(n,n.return),t.flags&32){var i=t.stateNode;try{il(i,"")}catch(m){Ct(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Jy(i,o),Rh(a,s);var c=Rh(a,o);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?i_(i,f):u==="dangerouslySetInnerHTML"?n_(i,f):u==="children"?il(i,f):tm(i,u,f,c)}switch(a){case"input":Mh(i,o);break;case"textarea":e_(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?As(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?As(i,!!o.multiple,o.defaultValue,!0):As(i,!!o.multiple,o.multiple?[]:"",!1))}i[hl]=o}catch(m){Ct(t,t.return,m)}}break;case 6:if(er(e,t),Sr(t),r&4){if(t.stateNode===null)throw Error(se(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(m){Ct(t,t.return,m)}}break;case 3:if(er(e,t),Sr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ll(e.containerInfo)}catch(m){Ct(t,t.return,m)}break;case 4:er(e,t),Sr(t);break;case 13:er(e,t),Sr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Im=Rt())),r&4&&Yv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,er(e,t),en=c):er(e,t),Sr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(we=t,u=t.child;u!==null;){for(f=we=u;we!==null;){switch(d=we,g=d.child,d.tag){case 0:case 11:case 14:case 15:Za(4,d,d.return);break;case 1:Es(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(m){Ct(r,n,m)}}break;case 5:Es(d,d.return);break;case 22:if(d.memoizedState!==null){Kv(f);continue}}g!==null?(g.return=d,we=g):Kv(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r_("display",s))}catch(m){Ct(t,t.return,m)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){Ct(t,t.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:er(e,t),Sr(t),r&4&&Yv(t);break;case 21:break;default:er(e,t),Sr(t)}}function Sr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(RS(n)){var r=n;break e}n=n.return}throw Error(se(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(il(i,""),r.flags&=-33);var o=Xv(t);op(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Xv(t);ip(t,a,s);break;default:throw Error(se(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wA(t,e,n){we=t,LS(t)}function LS(t,e,n){for(var r=(t.mode&1)!==0;we!==null;){var i=we,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||dc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||en;a=dc;var c=en;if(dc=s,(en=l)&&!c)for(we=i;we!==null;)s=we,l=s.child,s.tag===22&&s.memoizedState!==null?Qv(i):l!==null?(l.return=s,we=l):Qv(i);for(;o!==null;)we=o,LS(o),o=o.sibling;we=i,dc=a,en=c}qv(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,we=o):qv(t)}}function qv(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||ld(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!en)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:or(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Dv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ll(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}en||e.flags&512&&rp(e)}catch(d){Ct(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Kv(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Qv(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ld(4,e)}catch(l){Ct(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ct(e,i,l)}}var o=e.return;try{rp(e)}catch(l){Ct(e,o,l)}break;case 5:var s=e.return;try{rp(e)}catch(l){Ct(e,s,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var EA=Math.ceil,Au=si.ReactCurrentDispatcher,Lm=si.ReactCurrentOwner,Kn=si.ReactCurrentBatchConfig,tt=0,Vt=null,Nt=null,Wt=0,Nn=0,Ms=Qi(0),Dt=0,yl=null,Lo=0,cd=0,Dm=0,Ja=null,xn=null,Im=0,ta=1/0,jr=null,Ru=!1,sp=null,Fi=null,fc=!1,Ai=null,Pu=0,el=0,ap=null,eu=-1,tu=0;function hn(){return tt&6?Rt():eu!==-1?eu:eu=Rt()}function ki(t){return t.mode&1?tt&2&&Wt!==0?Wt&-Wt:sA.transition!==null?(tu===0&&(tu=g_()),tu):(t=lt,t!==0||(t=window.event,t=t===void 0?16:E_(t.type)),t):1}function pr(t,e,n,r){if(50<el)throw el=0,ap=null,Error(se(185));Ll(t,n,r),(!(tt&2)||t!==Vt)&&(t===Vt&&(!(tt&2)&&(cd|=n),Dt===4&&Si(t,Wt)),En(t,r),n===1&&tt===0&&!(e.mode&1)&&(ta=Rt()+500,od&&Zi()))}function En(t,e){var n=t.callbackNode;sC(t,e);var r=hu(t,t===Vt?Wt:0);if(r===0)n!==null&&sv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sv(n),e===1)t.tag===0?oA(Zv.bind(null,t)):V_(Zv.bind(null,t)),tA(function(){!(tt&6)&&Zi()}),n=null;else{switch(v_(r)){case 1:n=sm;break;case 4:n=p_;break;case 16:n=fu;break;case 536870912:n=m_;break;default:n=fu}n=zS(n,DS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function DS(t,e){if(eu=-1,tu=0,tt&6)throw Error(se(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var r=hu(t,t===Vt?Wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nu(t,r);else{e=r;var i=tt;tt|=2;var o=OS();(Vt!==t||Wt!==e)&&(jr=null,ta=Rt()+500,Eo(t,e));do try{TA();break}catch(a){IS(t,a)}while(!0);ym(),Au.current=o,tt=i,Nt!==null?e=0:(Vt=null,Wt=0,e=Dt)}if(e!==0){if(e===2&&(i=Ih(t),i!==0&&(r=i,e=lp(t,i))),e===1)throw n=yl,Eo(t,0),Si(t,r),En(t,Rt()),n;if(e===6)Si(t,r);else{if(i=t.current.alternate,!(r&30)&&!MA(i)&&(e=Nu(t,r),e===2&&(o=Ih(t),o!==0&&(r=o,e=lp(t,o))),e===1))throw n=yl,Eo(t,0),Si(t,r),En(t,Rt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(se(345));case 2:uo(t,xn,jr);break;case 3:if(Si(t,r),(r&130023424)===r&&(e=Im+500-Rt(),10<e)){if(hu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){hn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vh(uo.bind(null,t,xn,jr),e);break}uo(t,xn,jr);break;case 4:if(Si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-hr(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EA(r/1960))-r,10<r){t.timeoutHandle=Vh(uo.bind(null,t,xn,jr),r);break}uo(t,xn,jr);break;case 5:uo(t,xn,jr);break;default:throw Error(se(329))}}}return En(t,Rt()),t.callbackNode===n?DS.bind(null,t):null}function lp(t,e){var n=Ja;return t.current.memoizedState.isDehydrated&&(Eo(t,e).flags|=256),t=Nu(t,e),t!==2&&(e=xn,xn=n,e!==null&&cp(e)),t}function cp(t){xn===null?xn=t:xn.push.apply(xn,t)}function MA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Si(t,e){for(e&=~Dm,e&=~cd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hr(e),r=1<<n;t[n]=-1,e&=~r}}function Zv(t){if(tt&6)throw Error(se(327));Ds();var e=hu(t,0);if(!(e&1))return En(t,Rt()),null;var n=Nu(t,e);if(t.tag!==0&&n===2){var r=Ih(t);r!==0&&(e=r,n=lp(t,r))}if(n===1)throw n=yl,Eo(t,0),Si(t,e),En(t,Rt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,uo(t,xn,jr),En(t,Rt()),null}function Om(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(ta=Rt()+500,od&&Zi())}}function Do(t){Ai!==null&&Ai.tag===0&&!(tt&6)&&Ds();var e=tt;tt|=1;var n=Kn.transition,r=lt;try{if(Kn.transition=null,lt=1,t)return t()}finally{lt=r,Kn.transition=n,tt=e,!(tt&6)&&Zi()}}function Um(){Nn=Ms.current,yt(Ms)}function Eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eA(n)),Nt!==null)for(n=Nt.return;n!==null;){var r=n;switch(gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xu();break;case 3:Js(),yt(Sn),yt(nn),bm();break;case 5:Mm(r);break;case 4:Js();break;case 13:yt(wt);break;case 19:yt(wt);break;case 10:_m(r.type._context);break;case 22:case 23:Um()}n=n.return}if(Vt=t,Nt=t=Bi(t.current,null),Wt=Nn=e,Dt=0,yl=null,Dm=cd=Lo=0,xn=Ja=null,vo!==null){for(e=0;e<vo.length;e++)if(n=vo[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}vo=null}return t}function IS(t,e){do{var n=Nt;try{if(ym(),Qc.current=Cu,Tu){for(var r=Et.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tu=!1}if(No=0,zt=Lt=Et=null,Qa=!1,gl=0,Lm.current=null,n===null||n.return===null){Dt=1,yl=e,Nt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Bv(s);if(g!==null){g.flags&=-257,zv(g,s,a,o,e),g.mode&1&&kv(o,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var m=new Set;m.add(l),e.updateQueue=m}else v.add(l);break e}else{if(!(e&1)){kv(o,c,e),Fm();break e}l=Error(se(426))}}else if(_t&&a.mode&1){var p=Bv(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),zv(p,s,a,o,e),vm(ea(l,a));break e}}o=l=ea(l,a),Dt!==4&&(Dt=2),Ja===null?Ja=[o]:Ja.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=vS(o,l,e);Lv(o,h);break e;case 1:a=l;var x=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Fi===null||!Fi.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=xS(o,a,e);Lv(o,w);break e}}o=o.return}while(o!==null)}FS(n)}catch(b){e=b,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function OS(){var t=Au.current;return Au.current=Cu,t===null?Cu:t}function Fm(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Vt===null||!(Lo&268435455)&&!(cd&268435455)||Si(Vt,Wt)}function Nu(t,e){var n=tt;tt|=2;var r=OS();(Vt!==t||Wt!==e)&&(jr=null,Eo(t,e));do try{bA();break}catch(i){IS(t,i)}while(!0);if(ym(),tt=n,Au.current=r,Nt!==null)throw Error(se(261));return Vt=null,Wt=0,Dt}function bA(){for(;Nt!==null;)US(Nt)}function TA(){for(;Nt!==null&&!QT();)US(Nt)}function US(t){var e=BS(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?FS(t):Nt=e,Lm.current=null}function FS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yA(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Nt=null;return}}else if(n=xA(n,e,Nn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Dt===0&&(Dt=5)}function uo(t,e,n){var r=lt,i=Kn.transition;try{Kn.transition=null,lt=1,CA(t,e,n,r)}finally{Kn.transition=i,lt=r}return null}function CA(t,e,n,r){do Ds();while(Ai!==null);if(tt&6)throw Error(se(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(aC(t,o),t===Vt&&(Nt=Vt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fc||(fc=!0,zS(fu,function(){return Ds(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kn.transition,Kn.transition=null;var s=lt;lt=1;var a=tt;tt|=4,Lm.current=null,SA(t,n),NS(n,t),XC(zh),pu=!!Bh,zh=Bh=null,t.current=n,wA(n),ZT(),tt=a,lt=s,Kn.transition=o}else t.current=n;if(fc&&(fc=!1,Ai=t,Pu=i),o=t.pendingLanes,o===0&&(Fi=null),tC(n.stateNode),En(t,Rt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ru)throw Ru=!1,t=sp,sp=null,t;return Pu&1&&t.tag!==0&&Ds(),o=t.pendingLanes,o&1?t===ap?el++:(el=0,ap=t):el=0,Zi(),null}function Ds(){if(Ai!==null){var t=v_(Pu),e=Kn.transition,n=lt;try{if(Kn.transition=null,lt=16>t?16:t,Ai===null)var r=!1;else{if(t=Ai,Ai=null,Pu=0,tt&6)throw Error(se(331));var i=tt;for(tt|=4,we=t.current;we!==null;){var o=we,s=o.child;if(we.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:Za(8,u,o)}var f=u.child;if(f!==null)f.return=u,we=f;else for(;we!==null;){u=we;var d=u.sibling,g=u.return;if(AS(u),u===c){we=null;break}if(d!==null){d.return=g,we=d;break}we=g}}}var v=o.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var p=m.sibling;m.sibling=null,m=p}while(m!==null)}}we=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,we=s;else e:for(;we!==null;){if(o=we,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Za(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,we=h;break e}we=o.return}}var x=t.current;for(we=x;we!==null;){s=we;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,we=y;else e:for(s=x;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ld(9,a)}}catch(b){Ct(a,a.return,b)}if(a===s){we=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,we=w;break e}we=a.return}}if(tt=i,Zi(),Pr&&typeof Pr.onPostCommitFiberRoot=="function")try{Pr.onPostCommitFiberRoot(ed,t)}catch{}r=!0}return r}finally{lt=n,Kn.transition=e}}return!1}function Jv(t,e,n){e=ea(n,e),e=vS(t,e,1),t=Ui(t,e,1),e=hn(),t!==null&&(Ll(t,1,e),En(t,e))}function Ct(t,e,n){if(t.tag===3)Jv(t,t,n);else for(;e!==null;){if(e.tag===3){Jv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fi===null||!Fi.has(r))){t=ea(n,t),t=xS(e,t,1),e=Ui(e,t,1),t=hn(),e!==null&&(Ll(e,1,t),En(e,t));break}}e=e.return}}function AA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Wt&n)===n&&(Dt===4||Dt===3&&(Wt&130023424)===Wt&&500>Rt()-Im?Eo(t,0):Dm|=n),En(t,e)}function kS(t,e){e===0&&(t.mode&1?(e=nc,nc<<=1,!(nc&130023424)&&(nc=4194304)):e=1);var n=hn();t=Jr(t,e),t!==null&&(Ll(t,e,n),En(t,n))}function RA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kS(t,n)}function PA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(se(314))}r!==null&&r.delete(e),kS(t,n)}var BS;BS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,vA(t,e,n);_n=!!(t.flags&131072)}else _n=!1,_t&&e.flags&1048576&&G_(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jc(t,e),t=e.pendingProps;var i=Ks(e,nn.current);Ls(e,n),i=Cm(null,e,r,t,i,n);var o=Am();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(r)?(o=!0,yu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wm(e),i.updater=ad,e.stateNode=i,i._reactInternals=e,qh(e,r,t,n),e=Zh(null,e,r,!0,o,n)):(e.tag=0,_t&&o&&mm(e),un(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LA(r),t=or(r,t),i){case 0:e=Qh(null,e,r,t,n);break e;case 1:e=Gv(null,e,r,t,n);break e;case 11:e=Hv(null,e,r,t,n);break e;case 14:e=Vv(null,e,r,or(r.type,t),n);break e}throw Error(se(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:or(r,i),Qh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:or(r,i),Gv(t,e,r,i,n);case 3:e:{if(wS(e),t===null)throw Error(se(387));r=e.pendingProps,o=e.memoizedState,i=o.element,q_(t,e),Mu(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ea(Error(se(423)),e),e=jv(t,e,r,n,i);break e}else if(r!==i){i=ea(Error(se(424)),e),e=jv(t,e,r,n,i);break e}else for(Dn=Oi(e.stateNode.containerInfo.firstChild),In=e,_t=!0,cr=null,n=X_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=ei(t,e,n);break e}un(t,e,r,n)}e=e.child}return e;case 5:return K_(e),t===null&&$h(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Hh(r,i)?s=null:o!==null&&Hh(r,o)&&(e.flags|=32),SS(t,e),un(t,e,s,n),e.child;case 6:return t===null&&$h(e),null;case 13:return ES(t,e,n);case 4:return Em(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zs(e,null,r,n):un(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:or(r,i),Hv(t,e,r,i,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,mt(wu,r._currentValue),r._currentValue=s,o!==null)if(gr(o.value,s)){if(o.children===i.children&&!Sn.current){e=ei(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Kr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(se(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}un(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ls(e,n),i=Zn(i),r=r(i),e.flags|=1,un(t,e,r,n),e.child;case 14:return r=e.type,i=or(r,e.pendingProps),i=or(r.type,i),Vv(t,e,r,i,n);case 15:return yS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:or(r,i),Jc(t,e),e.tag=1,wn(r)?(t=!0,yu(e)):t=!1,Ls(e,n),gS(e,r,i),qh(e,r,i,n),Zh(null,e,r,!0,t,n);case 19:return MS(t,e,n);case 22:return _S(t,e,n)}throw Error(se(156,e.tag))};function zS(t,e){return h_(t,e)}function NA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,r){return new NA(t,e,n,r)}function km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LA(t){if(typeof t=="function")return km(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rm)return 11;if(t===im)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")km(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ps:return Mo(n.children,i,o,e);case nm:s=8,i|=8;break;case yh:return t=qn(12,n,e,i|2),t.elementType=yh,t.lanes=o,t;case _h:return t=qn(13,n,e,i),t.elementType=_h,t.lanes=o,t;case Sh:return t=qn(19,n,e,i),t.elementType=Sh,t.lanes=o,t;case Ky:return ud(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yy:s=10;break e;case qy:s=9;break e;case rm:s=11;break e;case im:s=14;break e;case xi:s=16,r=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=qn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Mo(t,e,n,r){return t=qn(7,t,r,e),t.lanes=n,t}function ud(t,e,n,r){return t=qn(22,t,r,e),t.elementType=Ky,t.lanes=n,t.stateNode={isHidden:!1},t}function wf(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function Ef(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nf(0),this.expirationTimes=nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bm(t,e,n,r,i,o,s,a,l){return t=new DA(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=qn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wm(o),t}function IA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function HS(t){if(!t)return ji;t=t._reactInternals;e:{if(zo(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(wn(n))return H_(t,n,e)}return e}function VS(t,e,n,r,i,o,s,a,l){return t=Bm(n,r,!0,t,i,o,s,a,l),t.context=HS(null),n=t.current,r=hn(),i=ki(n),o=Kr(r,i),o.callback=e??null,Ui(n,o,i),t.current.lanes=i,Ll(t,i,r),En(t,r),t}function dd(t,e,n,r){var i=e.current,o=hn(),s=ki(i);return n=HS(n),e.context===null?e.context=n:e.pendingContext=n,e=Kr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ui(i,e,s),t!==null&&(pr(t,i,s,o),Kc(t,i,s)),s}function Lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zm(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function OA(){return null}var GS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hm(t){this._internalRoot=t}fd.prototype.render=Hm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));dd(t,e,null,null)};fd.prototype.unmount=Hm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Do(function(){dd(null,t,null,null)}),e[Zr]=null}};function fd(t){this._internalRoot=t}fd.prototype.unstable_scheduleHydration=function(t){if(t){var e=__();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_i.length&&e!==0&&e<_i[n].priority;n++);_i.splice(n,0,t),n===0&&w_(t)}};function Vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function t0(){}function UA(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Lu(s);o.call(c)}}var s=VS(e,r,t,0,null,!1,!1,"",t0);return t._reactRootContainer=s,t[Zr]=s.current,dl(t.nodeType===8?t.parentNode:t),Do(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Lu(l);a.call(c)}}var l=Bm(t,0,!1,null,null,!1,!1,"",t0);return t._reactRootContainer=l,t[Zr]=l.current,dl(t.nodeType===8?t.parentNode:t),Do(function(){dd(e,l,n,r)}),l}function pd(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Lu(s);a.call(l)}}dd(e,s,t,i)}else s=UA(n,e,t,i,r);return Lu(s)}x_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=za(e.pendingLanes);n!==0&&(am(e,n|1),En(e,Rt()),!(tt&6)&&(ta=Rt()+500,Zi()))}break;case 13:Do(function(){var r=Jr(t,1);if(r!==null){var i=hn();pr(r,t,1,i)}}),zm(t,1)}};lm=function(t){if(t.tag===13){var e=Jr(t,134217728);if(e!==null){var n=hn();pr(e,t,134217728,n)}zm(t,134217728)}};y_=function(t){if(t.tag===13){var e=ki(t),n=Jr(t,e);if(n!==null){var r=hn();pr(n,t,e,r)}zm(t,e)}};__=function(){return lt};S_=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Nh=function(t,e,n){switch(e){case"input":if(Mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=id(r);if(!i)throw Error(se(90));Zy(r),Mh(r,i)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};a_=Om;l_=Do;var FA={usingClientEntryPoint:!1,Events:[Il,xs,id,o_,s_,Om]},Pa={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kA={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d_(t),t===null?null:t.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||OA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{ed=hc.inject(kA),Pr=hc}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FA;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vm(e))throw Error(se(200));return IA(t,e,null,n)};kn.createRoot=function(t,e){if(!Vm(t))throw Error(se(299));var n=!1,r="",i=GS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bm(t,1,!1,null,null,n,!1,r,i),t[Zr]=e.current,dl(t.nodeType===8?t.parentNode:t),new Hm(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=d_(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return Do(t)};kn.hydrate=function(t,e,n){if(!hd(e))throw Error(se(200));return pd(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Vm(t))throw Error(se(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=GS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=VS(e,null,t,1,n??null,i,!1,o,s),t[Zr]=e.current,dl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fd(e)};kn.render=function(t,e,n){if(!hd(e))throw Error(se(200));return pd(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!hd(t))throw Error(se(40));return t._reactRootContainer?(Do(function(){pd(null,null,t,!1,function(){t._reactRootContainer=null,t[Zr]=null})}),!0):!1};kn.unstable_batchedUpdates=Om;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hd(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return pd(t,e,n,!1,r)};kn.version="18.3.1-next-f1338f8080-20240426";function jS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jS)}catch(t){console.error(t)}}jS(),jy.exports=kn;var Ho=jy.exports;const WS=Ny(Ho);var $S,n0=Ho;$S=n0.createRoot,n0.hydrateRoot;const BA=1,zA=1e6;let Mf=0;function HA(){return Mf=(Mf+1)%Number.MAX_SAFE_INTEGER,Mf.toString()}const bf=new Map,r0=t=>{if(bf.has(t))return;const e=setTimeout(()=>{bf.delete(t),tl({type:"REMOVE_TOAST",toastId:t})},zA);bf.set(t,e)},VA=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,BA)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?r0(n):t.toasts.forEach(r=>{r0(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},ru=[];let iu={toasts:[]};function tl(t){iu=VA(iu,t),ru.forEach(e=>{e(iu)})}function GA({...t}){const e=HA(),n=i=>tl({type:"UPDATE_TOAST",toast:{...i,id:e}}),r=()=>tl({type:"DISMISS_TOAST",toastId:e});return tl({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:i=>{i||r()}}}),{id:e,dismiss:r,update:n}}function fa(){const[t,e]=S.useState(iu);return S.useEffect(()=>(ru.push(e),()=>{const n=ru.indexOf(e);n>-1&&ru.splice(n,1)}),[t]),{...t,toast:GA,dismiss:n=>tl({type:"DISMISS_TOAST",toastId:n})}}function he(t,e,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function jA(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function md(...t){return e=>t.forEach(n=>jA(n,e))}function Je(...t){return S.useCallback(md(...t),t)}function WA(t,e=[]){let n=[];function r(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];function c(f){const{scope:d,children:g,...v}=f,m=(d==null?void 0:d[t][l])||a,p=S.useMemo(()=>v,Object.values(v));return _.jsx(m.Provider,{value:p,children:g})}function u(f,d){const g=(d==null?void 0:d[t][l])||a,v=S.useContext(g);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,u]}const i=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return S.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,$A(i,...e)]}function $A(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return S.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var ti=S.forwardRef((t,e)=>{const{children:n,...r}=t,i=S.Children.toArray(n),o=i.find(XA);if(o){const s=o.props.children,a=i.map(l=>l===o?S.Children.count(s)>1?S.Children.only(null):S.isValidElement(s)?s.props.children:null:l);return _.jsx(up,{...r,ref:e,children:S.isValidElement(s)?S.cloneElement(s,void 0,a):null})}return _.jsx(up,{...r,ref:e,children:n})});ti.displayName="Slot";var up=S.forwardRef((t,e)=>{const{children:n,...r}=t;if(S.isValidElement(n)){const i=qA(n);return S.cloneElement(n,{...YA(r,n.props),ref:e?md(e,i):i})}return S.Children.count(n)>1?S.Children.only(null):null});up.displayName="SlotClone";var XS=({children:t})=>_.jsx(_.Fragment,{children:t});function XA(t){return S.isValidElement(t)&&t.type===XS}function YA(t,e){const n={...e};for(const r in e){const i=t[r],o=e[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{o(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...t,...n}}function qA(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function gd(t){const e=t+"CollectionProvider",[n,r]=WA(e),[i,o]=n(e,{collectionRef:{current:null},itemMap:new Map}),s=g=>{const{scope:v,children:m}=g,p=fe.useRef(null),h=fe.useRef(new Map).current;return _.jsx(i,{scope:v,itemMap:h,collectionRef:p,children:m})};s.displayName=e;const a=t+"CollectionSlot",l=fe.forwardRef((g,v)=>{const{scope:m,children:p}=g,h=o(a,m),x=Je(v,h.collectionRef);return _.jsx(ti,{ref:x,children:p})});l.displayName=a;const c=t+"CollectionItemSlot",u="data-radix-collection-item",f=fe.forwardRef((g,v)=>{const{scope:m,children:p,...h}=g,x=fe.useRef(null),y=Je(v,x),w=o(c,m);return fe.useEffect(()=>(w.itemMap.set(x,{ref:x,...h}),()=>void w.itemMap.delete(x))),_.jsx(ti,{[u]:"",ref:y,children:p})});f.displayName=c;function d(g){const v=o(t+"CollectionConsumer",g);return fe.useCallback(()=>{const p=v.collectionRef.current;if(!p)return[];const h=Array.from(p.querySelectorAll(`[${u}]`));return Array.from(v.itemMap.values()).sort((w,b)=>h.indexOf(w.ref.current)-h.indexOf(b.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:s,Slot:l,ItemSlot:f},d,r]}function KA(t,e){const n=S.createContext(e),r=o=>{const{children:s,...a}=o,l=S.useMemo(()=>a,Object.values(a));return _.jsx(n.Provider,{value:l,children:s})};r.displayName=t+"Provider";function i(o){const s=S.useContext(n);if(s)return s;if(e!==void 0)return e;throw new Error(`\`${o}\` must be used within \`${t}\``)}return[r,i]}function ai(t,e=[]){let n=[];function r(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];const c=f=>{var h;const{scope:d,children:g,...v}=f,m=((h=d==null?void 0:d[t])==null?void 0:h[l])||a,p=S.useMemo(()=>v,Object.values(v));return _.jsx(m.Provider,{value:p,children:g})};c.displayName=o+"Provider";function u(f,d){var m;const g=((m=d==null?void 0:d[t])==null?void 0:m[l])||a,v=S.useContext(g);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return[c,u]}const i=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return S.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,QA(i,...e)]}function QA(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return S.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var ZA=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Oe=ZA.reduce((t,e)=>{const n=S.forwardRef((r,i)=>{const{asChild:o,...s}=r,a=o?ti:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(a,{...s,ref:i})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function Gm(t,e){t&&Ho.flushSync(()=>t.dispatchEvent(e))}function rn(t){const e=S.useRef(t);return S.useEffect(()=>{e.current=t}),S.useMemo(()=>(...n)=>{var r;return(r=e.current)==null?void 0:r.call(e,...n)},[])}function JA(t,e=globalThis==null?void 0:globalThis.document){const n=rn(t);S.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[n,e])}var eR="DismissableLayer",dp="dismissableLayer.update",tR="dismissableLayer.pointerDownOutside",nR="dismissableLayer.focusOutside",i0,YS=S.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Vo=S.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=t,c=S.useContext(YS),[u,f]=S.useState(null),d=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,g]=S.useState({}),v=Je(e,E=>f(E)),m=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),h=m.indexOf(p),x=u?m.indexOf(u):-1,y=c.layersWithOutsidePointerEventsDisabled.size>0,w=x>=h,b=iR(E=>{const D=E.target,M=[...c.branches].some(C=>C.contains(D));!w||M||(i==null||i(E),s==null||s(E),E.defaultPrevented||a==null||a())},d),T=oR(E=>{const D=E.target;[...c.branches].some(C=>C.contains(D))||(o==null||o(E),s==null||s(E),E.defaultPrevented||a==null||a())},d);return JA(E=>{x===c.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&a&&(E.preventDefault(),a()))},d),S.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(i0=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),o0(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=i0)}},[u,d,n,c]),S.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),o0())},[u,c]),S.useEffect(()=>{const E=()=>g({});return document.addEventListener(dp,E),()=>document.removeEventListener(dp,E)},[]),_.jsx(Oe.div,{...l,ref:v,style:{pointerEvents:y?w?"auto":"none":void 0,...t.style},onFocusCapture:he(t.onFocusCapture,T.onFocusCapture),onBlurCapture:he(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:he(t.onPointerDownCapture,b.onPointerDownCapture)})});Vo.displayName=eR;var rR="DismissableLayerBranch",qS=S.forwardRef((t,e)=>{const n=S.useContext(YS),r=S.useRef(null),i=Je(e,r);return S.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),_.jsx(Oe.div,{...t,ref:i})});qS.displayName=rR;function iR(t,e=globalThis==null?void 0:globalThis.document){const n=rn(t),r=S.useRef(!1),i=S.useRef(()=>{});return S.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let l=function(){KS(tR,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=l,e.addEventListener("click",i.current,{once:!0})):l()}else e.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",o),e.removeEventListener("click",i.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function oR(t,e=globalThis==null?void 0:globalThis.document){const n=rn(t),r=S.useRef(!1);return S.useEffect(()=>{const i=o=>{o.target&&!r.current&&KS(nR,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function o0(){const t=new CustomEvent(dp);document.dispatchEvent(t)}function KS(t,e,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?Gm(i,o):i.dispatchEvent(o)}var sR=Vo,aR=qS,on=globalThis!=null&&globalThis.document?S.useLayoutEffect:()=>{},lR="Portal",ha=S.forwardRef((t,e)=>{var a;const{container:n,...r}=t,[i,o]=S.useState(!1);on(()=>o(!0),[]);const s=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?WS.createPortal(_.jsx(Oe.div,{...r,ref:e}),s):null});ha.displayName=lR;function cR(t,e){return S.useReducer((n,r)=>e[n][r]??n,t)}var zn=t=>{const{present:e,children:n}=t,r=uR(e),i=typeof n=="function"?n({present:r.isPresent}):S.Children.only(n),o=Je(r.ref,dR(i));return typeof n=="function"||r.isPresent?S.cloneElement(i,{ref:o}):null};zn.displayName="Presence";function uR(t){const[e,n]=S.useState(),r=S.useRef({}),i=S.useRef(t),o=S.useRef("none"),s=t?"mounted":"unmounted",[a,l]=cR(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return S.useEffect(()=>{const c=pc(r.current);o.current=a==="mounted"?c:"none"},[a]),on(()=>{const c=r.current,u=i.current;if(u!==t){const d=o.current,g=pc(c);t?l("MOUNT"):g==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&d!==g?"ANIMATION_OUT":"UNMOUNT"),i.current=t}},[t,l]),on(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,f=g=>{const m=pc(r.current).includes(g.animationName);if(g.target===e&&m&&(l("ANIMATION_END"),!i.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},d=g=>{g.target===e&&(o.current=pc(r.current))};return e.addEventListener("animationstart",d),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",d),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:S.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function pc(t){return(t==null?void 0:t.animationName)||"none"}function dR(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function ni({prop:t,defaultProp:e,onChange:n=()=>{}}){const[r,i]=fR({defaultProp:e,onChange:n}),o=t!==void 0,s=o?t:r,a=rn(n),l=S.useCallback(c=>{if(o){const f=typeof c=="function"?c(t):c;f!==t&&a(f)}else i(c)},[o,t,i,a]);return[s,l]}function fR({defaultProp:t,onChange:e}){const n=S.useState(t),[r]=n,i=S.useRef(r),o=rn(e);return S.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}var hR="VisuallyHidden",Ul=S.forwardRef((t,e)=>_.jsx(Oe.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Ul.displayName=hR;var pR=Ul,jm="ToastProvider",[Wm,mR,gR]=gd("Toast"),[QS,ez]=ai("Toast",[gR]),[vR,vd]=QS(jm),ZS=t=>{const{__scopeToast:e,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=t,[a,l]=S.useState(null),[c,u]=S.useState(0),f=S.useRef(!1),d=S.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${jm}\`. Expected non-empty \`string\`.`),_.jsx(Wm.Provider,{scope:e,children:_.jsx(vR,{scope:e,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:S.useCallback(()=>u(g=>g+1),[]),onToastRemove:S.useCallback(()=>u(g=>g-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:d,children:s})})};ZS.displayName=jm;var JS="ToastViewport",xR=["F8"],fp="toast.viewportPause",hp="toast.viewportResume",ew=S.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:r=xR,label:i="Notifications ({hotkey})",...o}=t,s=vd(JS,n),a=mR(n),l=S.useRef(null),c=S.useRef(null),u=S.useRef(null),f=S.useRef(null),d=Je(e,f,s.onViewportChange),g=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=s.toastCount>0;S.useEffect(()=>{const p=h=>{var y;r.length!==0&&r.every(w=>h[w]||h.code===w)&&((y=f.current)==null||y.focus())};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[r]),S.useEffect(()=>{const p=l.current,h=f.current;if(v&&p&&h){const x=()=>{if(!s.isClosePausedRef.current){const T=new CustomEvent(fp);h.dispatchEvent(T),s.isClosePausedRef.current=!0}},y=()=>{if(s.isClosePausedRef.current){const T=new CustomEvent(hp);h.dispatchEvent(T),s.isClosePausedRef.current=!1}},w=T=>{!p.contains(T.relatedTarget)&&y()},b=()=>{p.contains(document.activeElement)||y()};return p.addEventListener("focusin",x),p.addEventListener("focusout",w),p.addEventListener("pointermove",x),p.addEventListener("pointerleave",b),window.addEventListener("blur",x),window.addEventListener("focus",y),()=>{p.removeEventListener("focusin",x),p.removeEventListener("focusout",w),p.removeEventListener("pointermove",x),p.removeEventListener("pointerleave",b),window.removeEventListener("blur",x),window.removeEventListener("focus",y)}}},[v,s.isClosePausedRef]);const m=S.useCallback(({tabbingDirection:p})=>{const x=a().map(y=>{const w=y.ref.current,b=[w,...NR(w)];return p==="forwards"?b:b.reverse()});return(p==="forwards"?x.reverse():x).flat()},[a]);return S.useEffect(()=>{const p=f.current;if(p){const h=x=>{var b,T,E;const y=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!y){const D=document.activeElement,M=x.shiftKey;if(x.target===p&&M){(b=c.current)==null||b.focus();return}const F=m({tabbingDirection:M?"backwards":"forwards"}),Q=F.findIndex(N=>N===D);Tf(F.slice(Q+1))?x.preventDefault():M?(T=c.current)==null||T.focus():(E=u.current)==null||E.focus()}};return p.addEventListener("keydown",h),()=>p.removeEventListener("keydown",h)}},[a,m]),_.jsxs(aR,{ref:l,role:"region","aria-label":i.replace("{hotkey}",g),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&_.jsx(pp,{ref:c,onFocusFromOutsideViewport:()=>{const p=m({tabbingDirection:"forwards"});Tf(p)}}),_.jsx(Wm.Slot,{scope:n,children:_.jsx(Oe.ol,{tabIndex:-1,...o,ref:d})}),v&&_.jsx(pp,{ref:u,onFocusFromOutsideViewport:()=>{const p=m({tabbingDirection:"backwards"});Tf(p)}})]})});ew.displayName=JS;var tw="ToastFocusProxy",pp=S.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=t,o=vd(tw,n);return _.jsx(Ul,{"aria-hidden":!0,tabIndex:0,...i,ref:e,style:{position:"fixed"},onFocus:s=>{var c;const a=s.relatedTarget;!((c=o.viewport)!=null&&c.contains(a))&&r()}})});pp.displayName=tw;var xd="Toast",yR="toast.swipeStart",_R="toast.swipeMove",SR="toast.swipeCancel",wR="toast.swipeEnd",nw=S.forwardRef((t,e)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...s}=t,[a=!0,l]=ni({prop:r,defaultProp:i,onChange:o});return _.jsx(zn,{present:n||a,children:_.jsx(bR,{open:a,...s,ref:e,onClose:()=>l(!1),onPause:rn(t.onPause),onResume:rn(t.onResume),onSwipeStart:he(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:he(t.onSwipeMove,c=>{const{x:u,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:he(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:he(t.onSwipeEnd,c=>{const{x:u,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});nw.displayName=xd;var[ER,MR]=QS(xd,{onClose(){}}),bR=S.forwardRef((t,e)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:f,onSwipeCancel:d,onSwipeEnd:g,...v}=t,m=vd(xd,n),[p,h]=S.useState(null),x=Je(e,N=>h(N)),y=S.useRef(null),w=S.useRef(null),b=i||m.duration,T=S.useRef(0),E=S.useRef(b),D=S.useRef(0),{onToastAdd:M,onToastRemove:C}=m,B=rn(()=>{var z;(p==null?void 0:p.contains(document.activeElement))&&((z=m.viewport)==null||z.focus()),s()}),F=S.useCallback(N=>{!N||N===1/0||(window.clearTimeout(D.current),T.current=new Date().getTime(),D.current=window.setTimeout(B,N))},[B]);S.useEffect(()=>{const N=m.viewport;if(N){const z=()=>{F(E.current),c==null||c()},k=()=>{const $=new Date().getTime()-T.current;E.current=E.current-$,window.clearTimeout(D.current),l==null||l()};return N.addEventListener(fp,k),N.addEventListener(hp,z),()=>{N.removeEventListener(fp,k),N.removeEventListener(hp,z)}}},[m.viewport,b,l,c,F]),S.useEffect(()=>{o&&!m.isClosePausedRef.current&&F(b)},[o,b,m.isClosePausedRef,F]),S.useEffect(()=>(M(),()=>C()),[M,C]);const Q=S.useMemo(()=>p?cw(p):null,[p]);return m.viewport?_.jsxs(_.Fragment,{children:[Q&&_.jsx(TR,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:Q}),_.jsx(ER,{scope:n,onClose:B,children:Ho.createPortal(_.jsx(Wm.ItemSlot,{scope:n,children:_.jsx(sR,{asChild:!0,onEscapeKeyDown:he(a,()=>{m.isFocusedToastEscapeKeyDownRef.current||B(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:_.jsx(Oe.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":m.swipeDirection,...v,ref:x,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:he(t.onKeyDown,N=>{N.key==="Escape"&&(a==null||a(N.nativeEvent),N.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,B()))}),onPointerDown:he(t.onPointerDown,N=>{N.button===0&&(y.current={x:N.clientX,y:N.clientY})}),onPointerMove:he(t.onPointerMove,N=>{if(!y.current)return;const z=N.clientX-y.current.x,k=N.clientY-y.current.y,$=!!w.current,L=["left","right"].includes(m.swipeDirection),I=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,O=L?I(0,z):0,H=L?0:I(0,k),W=N.pointerType==="touch"?10:2,G={x:O,y:H},Z={originalEvent:N,delta:G};$?(w.current=G,mc(_R,f,Z,{discrete:!1})):s0(G,m.swipeDirection,W)?(w.current=G,mc(yR,u,Z,{discrete:!1}),N.target.setPointerCapture(N.pointerId)):(Math.abs(z)>W||Math.abs(k)>W)&&(y.current=null)}),onPointerUp:he(t.onPointerUp,N=>{const z=w.current,k=N.target;if(k.hasPointerCapture(N.pointerId)&&k.releasePointerCapture(N.pointerId),w.current=null,y.current=null,z){const $=N.currentTarget,L={originalEvent:N,delta:z};s0(z,m.swipeDirection,m.swipeThreshold)?mc(wR,g,L,{discrete:!0}):mc(SR,d,L,{discrete:!0}),$.addEventListener("click",I=>I.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),TR=t=>{const{__scopeToast:e,children:n,...r}=t,i=vd(xd,e),[o,s]=S.useState(!1),[a,l]=S.useState(!1);return RR(()=>s(!0)),S.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:_.jsx(ha,{asChild:!0,children:_.jsx(Ul,{...r,children:o&&_.jsxs(_.Fragment,{children:[i.label," ",n]})})})},CR="ToastTitle",rw=S.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t;return _.jsx(Oe.div,{...r,ref:e})});rw.displayName=CR;var AR="ToastDescription",iw=S.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t;return _.jsx(Oe.div,{...r,ref:e})});iw.displayName=AR;var ow="ToastAction",sw=S.forwardRef((t,e)=>{const{altText:n,...r}=t;return n.trim()?_.jsx(lw,{altText:n,asChild:!0,children:_.jsx($m,{...r,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${ow}\`. Expected non-empty \`string\`.`),null)});sw.displayName=ow;var aw="ToastClose",$m=S.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t,i=MR(aw,n);return _.jsx(lw,{asChild:!0,children:_.jsx(Oe.button,{type:"button",...r,ref:e,onClick:he(t.onClick,i.onClose)})})});$m.displayName=aw;var lw=S.forwardRef((t,e)=>{const{__scopeToast:n,altText:r,...i}=t;return _.jsx(Oe.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:e})});function cw(t){const e=[];return Array.from(t.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&e.push(r.textContent),PR(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&e.push(s)}else e.push(...cw(r))}}),e}function mc(t,e,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?Gm(i,o):i.dispatchEvent(o)}var s0=(t,e,n=0)=>{const r=Math.abs(t.x),i=Math.abs(t.y),o=r>i;return e==="left"||e==="right"?o&&r>n:!o&&i>n};function RR(t=()=>{}){const e=rn(t);on(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[e])}function PR(t){return t.nodeType===t.ELEMENT_NODE}function NR(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Tf(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var LR=ZS,uw=ew,dw=nw,fw=rw,hw=iw,pw=sw,mw=$m;function gw(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=gw(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function vw(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=gw(t))&&(r&&(r+=" "),r+=e);return r}const a0=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,l0=vw,Xm=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return l0(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=e,s=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],f=o==null?void 0:o[c];if(u===null)return null;const d=a0(u)||a0(f);return i[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[f,d]=u;return d===void 0||(c[f]=d),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:f,className:d,...g}=u;return Object.entries(g).every(v=>{let[m,p]=v;return Array.isArray(p)?p.includes({...o,...a}[m]):{...o,...a}[m]===p})?[...c,f,d]:c},[]);return l0(t,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xw=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=S.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>S.createElement("svg",{ref:l,...IR,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:xw("lucide",i),...a},[...s.map(([c,u])=>S.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(t,e)=>{const n=S.forwardRef(({className:r,...i},o)=>S.createElement(OR,{ref:o,iconNode:e,className:xw(`lucide-${DR(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=ut("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=ut("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=ut("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=ut("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=ut("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ut("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=ut("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=ut("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=ut("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=ut("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=ut("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=ut("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=ut("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=ut("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ut("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=ut("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=ut("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=ut("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=ut("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=ut("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=ut("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=ut("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=ut("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=ut("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=ut("SendHorizontal",[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=ut("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=ut("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=ut("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ym="-",JR=t=>{const e=t2(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:s=>{const a=s.split(Ym);return a[0]===""&&a.length!==1&&a.shift(),ww(a,e)||e2(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},ww=(t,e)=>{var s;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?ww(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const o=t.join(Ym);return(s=e.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},p0=/^\[(.+)\]$/,e2=t=>{if(p0.test(t)){const e=p0.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},t2=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return r2(Object.entries(t.classGroups),n).forEach(([o,s])=>{mp(s,r,o,e)}),r},mp=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const o=i===""?e:m0(e,i);o.classGroupId=n;return}if(typeof i=="function"){if(n2(i)){mp(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{mp(s,m0(e,o),n,r)})})},m0=(t,e)=>{let n=t;return e.split(Ym).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},n2=t=>t.isThemeGetter,r2=(t,e)=>e?t.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[e+s,a])):o);return[n,i]}):t,i2=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(o,s)=>{n.set(o,s),e++,e>t&&(e=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}},Ew="!",o2=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],o=e.length,s=a=>{const l=[];let c=0,u=0,f;for(let p=0;p<a.length;p++){let h=a[p];if(c===0){if(h===i&&(r||a.slice(p,p+o)===e)){l.push(a.slice(u,p)),u=p+o;continue}if(h==="/"){f=p;continue}}h==="["?c++:h==="]"&&c--}const d=l.length===0?a:a.substring(u),g=d.startsWith(Ew),v=g?d.substring(1):d,m=f&&f>u?f-u:void 0;return{modifiers:l,hasImportantModifier:g,baseClassName:v,maybePostfixModifierPosition:m}};return n?a=>n({className:a,parseClassName:s}):s},s2=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},a2=t=>({cache:i2(t.cacheSize),parseClassName:o2(t),...JR(t)}),l2=/\s+/,c2=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,o=[],s=t.trim().split(l2);let a="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:u,hasImportantModifier:f,baseClassName:d,maybePostfixModifierPosition:g}=n(c);let v=!!g,m=r(v?d.substring(0,g):d);if(!m){if(!v){a=c+(a.length>0?" "+a:a);continue}if(m=r(d),!m){a=c+(a.length>0?" "+a:a);continue}v=!1}const p=s2(u).join(":"),h=f?p+Ew:p,x=h+m;if(o.includes(x))continue;o.push(x);const y=i(m,v);for(let w=0;w<y.length;++w){const b=y[w];o.push(h+b)}a=c+(a.length>0?" "+a:a)}return a};function u2(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Mw(e))&&(r&&(r+=" "),r+=n);return r}const Mw=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=Mw(t[r]))&&(n&&(n+=" "),n+=e);return n};function d2(t,...e){let n,r,i,o=s;function s(l){const c=e.reduce((u,f)=>f(u),t());return n=a2(c),r=n.cache.get,i=n.cache.set,o=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=c2(l,n);return i(l,u),u}return function(){return o(u2.apply(null,arguments))}}const gt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},bw=/^\[(?:([a-z-]+):)?(.+)\]$/i,f2=/^\d+\/\d+$/,h2=new Set(["px","full","screen"]),p2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,m2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,g2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,v2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,x2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ur=t=>Is(t)||h2.has(t)||f2.test(t),ci=t=>pa(t,"length",T2),Is=t=>!!t&&!Number.isNaN(Number(t)),Af=t=>pa(t,"number",Is),Na=t=>!!t&&Number.isInteger(Number(t)),y2=t=>t.endsWith("%")&&Is(t.slice(0,-1)),je=t=>bw.test(t),ui=t=>p2.test(t),_2=new Set(["length","size","percentage"]),S2=t=>pa(t,_2,Tw),w2=t=>pa(t,"position",Tw),E2=new Set(["image","url"]),M2=t=>pa(t,E2,A2),b2=t=>pa(t,"",C2),La=()=>!0,pa=(t,e,n)=>{const r=bw.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},T2=t=>m2.test(t)&&!g2.test(t),Tw=()=>!1,C2=t=>v2.test(t),A2=t=>x2.test(t),R2=()=>{const t=gt("colors"),e=gt("spacing"),n=gt("blur"),r=gt("brightness"),i=gt("borderColor"),o=gt("borderRadius"),s=gt("borderSpacing"),a=gt("borderWidth"),l=gt("contrast"),c=gt("grayscale"),u=gt("hueRotate"),f=gt("invert"),d=gt("gap"),g=gt("gradientColorStops"),v=gt("gradientColorStopPositions"),m=gt("inset"),p=gt("margin"),h=gt("opacity"),x=gt("padding"),y=gt("saturate"),w=gt("scale"),b=gt("sepia"),T=gt("skew"),E=gt("space"),D=gt("translate"),M=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",je,e],F=()=>[je,e],Q=()=>["",Ur,ci],N=()=>["auto",Is,je],z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],k=()=>["solid","dashed","dotted","double","none"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],L=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",je],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[Is,je];return{cacheSize:500,separator:":",theme:{colors:[La],spacing:[Ur,ci],blur:["none","",ui,je],brightness:H(),borderColor:[t],borderRadius:["none","","full",ui,je],borderSpacing:F(),borderWidth:Q(),contrast:H(),grayscale:I(),hueRotate:H(),invert:I(),gap:F(),gradientColorStops:[t],gradientColorStopPositions:[y2,ci],inset:B(),margin:B(),opacity:H(),padding:F(),saturate:H(),scale:H(),sepia:I(),skew:H(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",je]}],container:["container"],columns:[{columns:[ui]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...z(),je]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Na,je]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",je]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",Na,je]}],"grid-cols":[{"grid-cols":[La]}],"col-start-end":[{col:["auto",{span:["full",Na,je]},je]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[La]}],"row-start-end":[{row:["auto",{span:[Na,je]},je]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",je]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",je]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...L()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...L(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...L(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",je,e]}],"min-w":[{"min-w":[je,e,"min","max","fit"]}],"max-w":[{"max-w":[je,e,"none","full","min","max","fit","prose",{screen:[ui]},ui]}],h:[{h:[je,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[je,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[je,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[je,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ui,ci]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Af]}],"font-family":[{font:[La]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",je]}],"line-clamp":[{"line-clamp":["none",Is,Af]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ur,je]}],"list-image":[{"list-image":["none",je]}],"list-style-type":[{list:["none","disc","decimal",je]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...k(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ur,ci]}],"underline-offset":[{"underline-offset":["auto",Ur,je]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...z(),w2]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",S2]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},M2]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...k(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:k()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...k()]}],"outline-offset":[{"outline-offset":[Ur,je]}],"outline-w":[{outline:[Ur,ci]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[Ur,ci]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",ui,b2]}],"shadow-color":[{shadow:[La]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...$(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ui,je]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[y]}],sepia:[{sepia:[b]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[b]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",je]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",je]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",je]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Na,je]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",je]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ur,ci,Af]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},P2=d2(R2);function Ye(...t){return P2(vw(t))}const N2=LR,Cw=S.forwardRef(({className:t,...e},n)=>_.jsx(uw,{ref:n,className:Ye("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Cw.displayName=uw.displayName;const L2=Xm("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Aw=S.forwardRef(({className:t,variant:e,...n},r)=>_.jsx(dw,{ref:r,className:Ye(L2({variant:e}),t),...n}));Aw.displayName=dw.displayName;const D2=S.forwardRef(({className:t,...e},n)=>_.jsx(pw,{ref:n,className:Ye("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));D2.displayName=pw.displayName;const Rw=S.forwardRef(({className:t,...e},n)=>_.jsx(mw,{ref:n,className:Ye("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:_.jsx(_l,{className:"h-4 w-4"})}));Rw.displayName=mw.displayName;const Pw=S.forwardRef(({className:t,...e},n)=>_.jsx(fw,{ref:n,className:Ye("text-sm font-semibold",t),...e}));Pw.displayName=fw.displayName;const Nw=S.forwardRef(({className:t,...e},n)=>_.jsx(hw,{ref:n,className:Ye("text-sm opacity-90",t),...e}));Nw.displayName=hw.displayName;function I2(){const{toasts:t}=fa();return _.jsxs(N2,{children:[t.map(function({id:e,title:n,description:r,action:i,...o}){return _.jsxs(Aw,{...o,children:[_.jsxs("div",{className:"grid gap-1",children:[n&&_.jsx(Pw,{children:n}),r&&_.jsx(Nw,{children:r})]}),i,_.jsx(Rw,{})]},e)}),_.jsx(Cw,{})]})}var g0=["light","dark"],O2="(prefers-color-scheme: dark)",U2=S.createContext(void 0),F2={setTheme:t=>{},themes:[]},k2=()=>{var t;return(t=S.useContext(U2))!=null?t:F2};S.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:s,attrs:a,nonce:l})=>{let c=o==="system",u=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=i?g0.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",d=(v,m=!1,p=!0)=>{let h=s?s[v]:v,x=m?v+"|| ''":`'${h}'`,y="";return i&&p&&!m&&g0.includes(v)&&(y+=`d.style.colorScheme = '${v}';`),n==="class"?m||h?y+=`c.add(${x})`:y+="null":h&&(y+=`d[s](n,${x})`),y},g=t?`!function(){${u}${d(t)}}()`:r?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${O2}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}${c?"":"else{"+d(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}else{${d(o,!1,!1)};}${f}}catch(t){}}();`;return S.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:g}})});var B2=t=>{switch(t){case"success":return V2;case"info":return j2;case"warning":return G2;case"error":return W2;default:return null}},z2=Array(12).fill(0),H2=({visible:t})=>fe.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},fe.createElement("div",{className:"sonner-spinner"},z2.map((e,n)=>fe.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),V2=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),G2=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),j2=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),W2=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),$2=()=>{let[t,e]=fe.useState(document.hidden);return fe.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},gp=1,X2=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...r}=t,i=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:gp++,o=this.toasts.find(a=>a.id===i),s=t.dismissible===void 0?!0:t.dismissible;return o?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...t,id:i,title:n}),{...a,...t,id:i,dismissible:s,title:n}):a):this.addToast({title:n,...r,dismissible:s,id:i}),i},this.dismiss=t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let r=t instanceof Promise?t:t(),i=n!==void 0;return r.then(async o=>{if(q2(o)&&!o.ok){i=!1;let s=typeof e.error=="function"?await e.error(`HTTP error! status: ${o.status}`):e.error,a=typeof e.description=="function"?await e.description(`HTTP error! status: ${o.status}`):e.description;this.create({id:n,type:"error",message:s,description:a})}else if(e.success!==void 0){i=!1;let s=typeof e.success=="function"?await e.success(o):e.success,a=typeof e.description=="function"?await e.description(o):e.description;this.create({id:n,type:"success",message:s,description:a})}}).catch(async o=>{if(e.error!==void 0){i=!1;let s=typeof e.error=="function"?await e.error(o):e.error,a=typeof e.description=="function"?await e.description(o):e.description;this.create({id:n,type:"error",message:s,description:a})}}).finally(()=>{var o;i&&(this.dismiss(n),n=void 0),(o=e.finally)==null||o.call(e)}),n},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||gp++;return this.create({jsx:t(n),id:n,...e}),n},this.subscribers=[],this.toasts=[]}},Pn=new X2,Y2=(t,e)=>{let n=(e==null?void 0:e.id)||gp++;return Pn.addToast({title:t,...e,id:n}),n},q2=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",K2=Y2,Q2=()=>Pn.toasts;Object.assign(K2,{success:Pn.success,info:Pn.info,warning:Pn.warning,error:Pn.error,custom:Pn.custom,message:Pn.message,promise:Pn.promise,dismiss:Pn.dismiss,loading:Pn.loading},{getHistory:Q2});function Z2(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}Z2(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function gc(t){return t.label!==void 0}var J2=3,eP="32px",tP=4e3,nP=356,rP=14,iP=20,oP=200;function sP(...t){return t.filter(Boolean).join(" ")}var aP=t=>{var e,n,r,i,o,s,a,l,c,u;let{invert:f,toast:d,unstyled:g,interacting:v,setHeights:m,visibleToasts:p,heights:h,index:x,toasts:y,expanded:w,removeToast:b,defaultRichColors:T,closeButton:E,style:D,cancelButtonStyle:M,actionButtonStyle:C,className:B="",descriptionClassName:F="",duration:Q,position:N,gap:z,loadingIcon:k,expandByDefault:$,classNames:L,icons:I,closeButtonAriaLabel:O="Close toast",pauseWhenPageIsHidden:H,cn:W}=t,[G,Z]=fe.useState(!1),[ce,oe]=fe.useState(!1),[ee,ge]=fe.useState(!1),[xe,de]=fe.useState(!1),[Me,V]=fe.useState(0),[nt,Ce]=fe.useState(0),Ne=fe.useRef(null),ye=fe.useRef(null),rt=x===0,He=x+1<=p,R=d.type,A=d.dismissible!==!1,X=d.className||"",ae=d.descriptionClassName||"",re=fe.useMemo(()=>h.findIndex(be=>be.toastId===d.id)||0,[h,d.id]),le=fe.useMemo(()=>{var be;return(be=d.closeButton)!=null?be:E},[d.closeButton,E]),Ae=fe.useMemo(()=>d.duration||Q||tP,[d.duration,Q]),ve=fe.useRef(0),_e=fe.useRef(0),Le=fe.useRef(0),ke=fe.useRef(null),[ie,st]=N.split("-"),We=fe.useMemo(()=>h.reduce((be,Te,ne)=>ne>=re?be:be+Te.height,0),[h,re]),Be=$2(),Pe=d.invert||f,Ee=R==="loading";_e.current=fe.useMemo(()=>re*z+We,[re,We]),fe.useEffect(()=>{Z(!0)},[]),fe.useLayoutEffect(()=>{if(!G)return;let be=ye.current,Te=be.style.height;be.style.height="auto";let ne=be.getBoundingClientRect().height;be.style.height=Te,Ce(ne),m(U=>U.find(ue=>ue.toastId===d.id)?U.map(ue=>ue.toastId===d.id?{...ue,height:ne}:ue):[{toastId:d.id,height:ne,position:d.position},...U])},[G,d.title,d.description,m,d.id]);let De=fe.useCallback(()=>{oe(!0),V(_e.current),m(be=>be.filter(Te=>Te.toastId!==d.id)),setTimeout(()=>{b(d)},oP)},[d,b,m,_e]);fe.useEffect(()=>{if(d.promise&&R==="loading"||d.duration===1/0||d.type==="loading")return;let be,Te=Ae;return w||v||H&&Be?(()=>{if(Le.current<ve.current){let ne=new Date().getTime()-ve.current;Te=Te-ne}Le.current=new Date().getTime()})():Te!==1/0&&(ve.current=new Date().getTime(),be=setTimeout(()=>{var ne;(ne=d.onAutoClose)==null||ne.call(d,d),De()},Te)),()=>clearTimeout(be)},[w,v,$,d,Ae,De,d.promise,R,H,Be]),fe.useEffect(()=>{let be=ye.current;if(be){let Te=be.getBoundingClientRect().height;return Ce(Te),m(ne=>[{toastId:d.id,height:Te,position:d.position},...ne]),()=>m(ne=>ne.filter(U=>U.toastId!==d.id))}},[m,d.id]),fe.useEffect(()=>{d.delete&&De()},[De,d.delete]);function it(){return I!=null&&I.loading?fe.createElement("div",{className:"sonner-loader","data-visible":R==="loading"},I.loading):k?fe.createElement("div",{className:"sonner-loader","data-visible":R==="loading"},k):fe.createElement(H2,{visible:R==="loading"})}return fe.createElement("li",{"aria-live":d.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:ye,className:W(B,X,L==null?void 0:L.toast,(e=d==null?void 0:d.classNames)==null?void 0:e.toast,L==null?void 0:L.default,L==null?void 0:L[R],(n=d==null?void 0:d.classNames)==null?void 0:n[R]),"data-sonner-toast":"","data-rich-colors":(r=d.richColors)!=null?r:T,"data-styled":!(d.jsx||d.unstyled||g),"data-mounted":G,"data-promise":!!d.promise,"data-removed":ce,"data-visible":He,"data-y-position":ie,"data-x-position":st,"data-index":x,"data-front":rt,"data-swiping":ee,"data-dismissible":A,"data-type":R,"data-invert":Pe,"data-swipe-out":xe,"data-expanded":!!(w||$&&G),style:{"--index":x,"--toasts-before":x,"--z-index":y.length-x,"--offset":`${ce?Me:_e.current}px`,"--initial-height":$?"auto":`${nt}px`,...D,...d.style},onPointerDown:be=>{Ee||!A||(Ne.current=new Date,V(_e.current),be.target.setPointerCapture(be.pointerId),be.target.tagName!=="BUTTON"&&(ge(!0),ke.current={x:be.clientX,y:be.clientY}))},onPointerUp:()=>{var be,Te,ne,U;if(xe||!A)return;ke.current=null;let ue=Number(((be=ye.current)==null?void 0:be.style.getPropertyValue("--swipe-amount").replace("px",""))||0),me=new Date().getTime()-((Te=Ne.current)==null?void 0:Te.getTime()),Ue=Math.abs(ue)/me;if(Math.abs(ue)>=iP||Ue>.11){V(_e.current),(ne=d.onDismiss)==null||ne.call(d,d),De(),de(!0);return}(U=ye.current)==null||U.style.setProperty("--swipe-amount","0px"),ge(!1)},onPointerMove:be=>{var Te;if(!ke.current||!A)return;let ne=be.clientY-ke.current.y,U=be.clientX-ke.current.x,ue=(ie==="top"?Math.min:Math.max)(0,ne),me=be.pointerType==="touch"?10:2;Math.abs(ue)>me?(Te=ye.current)==null||Te.style.setProperty("--swipe-amount",`${ne}px`):Math.abs(U)>me&&(ke.current=null)}},le&&!d.jsx?fe.createElement("button",{"aria-label":O,"data-disabled":Ee,"data-close-button":!0,onClick:Ee||!A?()=>{}:()=>{var be;De(),(be=d.onDismiss)==null||be.call(d,d)},className:W(L==null?void 0:L.closeButton,(i=d==null?void 0:d.classNames)==null?void 0:i.closeButton)},fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},fe.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),fe.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,d.jsx||fe.isValidElement(d.title)?d.jsx||d.title:fe.createElement(fe.Fragment,null,R||d.icon||d.promise?fe.createElement("div",{"data-icon":"",className:W(L==null?void 0:L.icon,(o=d==null?void 0:d.classNames)==null?void 0:o.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||it():null,d.type!=="loading"?d.icon||(I==null?void 0:I[R])||B2(R):null):null,fe.createElement("div",{"data-content":"",className:W(L==null?void 0:L.content,(s=d==null?void 0:d.classNames)==null?void 0:s.content)},fe.createElement("div",{"data-title":"",className:W(L==null?void 0:L.title,(a=d==null?void 0:d.classNames)==null?void 0:a.title)},d.title),d.description?fe.createElement("div",{"data-description":"",className:W(F,ae,L==null?void 0:L.description,(l=d==null?void 0:d.classNames)==null?void 0:l.description)},d.description):null),fe.isValidElement(d.cancel)?d.cancel:d.cancel&&gc(d.cancel)?fe.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||M,onClick:be=>{var Te,ne;gc(d.cancel)&&A&&((ne=(Te=d.cancel).onClick)==null||ne.call(Te,be),De())},className:W(L==null?void 0:L.cancelButton,(c=d==null?void 0:d.classNames)==null?void 0:c.cancelButton)},d.cancel.label):null,fe.isValidElement(d.action)?d.action:d.action&&gc(d.action)?fe.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||C,onClick:be=>{var Te,ne;gc(d.action)&&(be.defaultPrevented||((ne=(Te=d.action).onClick)==null||ne.call(Te,be),De()))},className:W(L==null?void 0:L.actionButton,(u=d==null?void 0:d.classNames)==null?void 0:u.actionButton)},d.action.label):null))};function v0(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var lP=t=>{let{invert:e,position:n="bottom-right",hotkey:r=["altKey","KeyT"],expand:i,closeButton:o,className:s,offset:a,theme:l="light",richColors:c,duration:u,style:f,visibleToasts:d=J2,toastOptions:g,dir:v=v0(),gap:m=rP,loadingIcon:p,icons:h,containerAriaLabel:x="Notifications",pauseWhenPageIsHidden:y,cn:w=sP}=t,[b,T]=fe.useState([]),E=fe.useMemo(()=>Array.from(new Set([n].concat(b.filter(H=>H.position).map(H=>H.position)))),[b,n]),[D,M]=fe.useState([]),[C,B]=fe.useState(!1),[F,Q]=fe.useState(!1),[N,z]=fe.useState(l!=="system"?l:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),k=fe.useRef(null),$=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),L=fe.useRef(null),I=fe.useRef(!1),O=fe.useCallback(H=>{var W;(W=b.find(G=>G.id===H.id))!=null&&W.delete||Pn.dismiss(H.id),T(G=>G.filter(({id:Z})=>Z!==H.id))},[b]);return fe.useEffect(()=>Pn.subscribe(H=>{if(H.dismiss){T(W=>W.map(G=>G.id===H.id?{...G,delete:!0}:G));return}setTimeout(()=>{WS.flushSync(()=>{T(W=>{let G=W.findIndex(Z=>Z.id===H.id);return G!==-1?[...W.slice(0,G),{...W[G],...H},...W.slice(G+1)]:[H,...W]})})})}),[]),fe.useEffect(()=>{if(l!=="system"){z(l);return}l==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?z("dark"):z("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:H})=>{z(H?"dark":"light")})},[l]),fe.useEffect(()=>{b.length<=1&&B(!1)},[b]),fe.useEffect(()=>{let H=W=>{var G,Z;r.every(ce=>W[ce]||W.code===ce)&&(B(!0),(G=k.current)==null||G.focus()),W.code==="Escape"&&(document.activeElement===k.current||(Z=k.current)!=null&&Z.contains(document.activeElement))&&B(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[r]),fe.useEffect(()=>{if(k.current)return()=>{L.current&&(L.current.focus({preventScroll:!0}),L.current=null,I.current=!1)}},[k.current]),b.length?fe.createElement("section",{"aria-label":`${x} ${$}`,tabIndex:-1},E.map((H,W)=>{var G;let[Z,ce]=H.split("-");return fe.createElement("ol",{key:H,dir:v==="auto"?v0():v,tabIndex:-1,ref:k,className:s,"data-sonner-toaster":!0,"data-theme":N,"data-y-position":Z,"data-x-position":ce,style:{"--front-toast-height":`${((G=D[0])==null?void 0:G.height)||0}px`,"--offset":typeof a=="number"?`${a}px`:a||eP,"--width":`${nP}px`,"--gap":`${m}px`,...f},onBlur:oe=>{I.current&&!oe.currentTarget.contains(oe.relatedTarget)&&(I.current=!1,L.current&&(L.current.focus({preventScroll:!0}),L.current=null))},onFocus:oe=>{oe.target instanceof HTMLElement&&oe.target.dataset.dismissible==="false"||I.current||(I.current=!0,L.current=oe.relatedTarget)},onMouseEnter:()=>B(!0),onMouseMove:()=>B(!0),onMouseLeave:()=>{F||B(!1)},onPointerDown:oe=>{oe.target instanceof HTMLElement&&oe.target.dataset.dismissible==="false"||Q(!0)},onPointerUp:()=>Q(!1)},b.filter(oe=>!oe.position&&W===0||oe.position===H).map((oe,ee)=>{var ge,xe;return fe.createElement(aP,{key:oe.id,icons:h,index:ee,toast:oe,defaultRichColors:c,duration:(ge=g==null?void 0:g.duration)!=null?ge:u,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:e,visibleToasts:d,closeButton:(xe=g==null?void 0:g.closeButton)!=null?xe:o,interacting:F,position:H,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:O,toasts:b.filter(de=>de.position==oe.position),heights:D.filter(de=>de.position==oe.position),setHeights:M,expandByDefault:i,gap:m,loadingIcon:p,expanded:C,pauseWhenPageIsHidden:y,cn:w})}))})):null};const cP=({...t})=>{const{theme:e="system"}=k2();return _.jsx(lP,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})};var uP=Vy.useId||(()=>{}),dP=0;function mr(t){const[e,n]=S.useState(uP());return on(()=>{n(r=>r??String(dP++))},[t]),e?`radix-${e}`:""}const fP=["top","right","bottom","left"],Wi=Math.min,Ln=Math.max,Iu=Math.round,vc=Math.floor,$i=t=>({x:t,y:t}),hP={left:"right",right:"left",bottom:"top",top:"bottom"},pP={start:"end",end:"start"};function vp(t,e,n){return Ln(t,Wi(e,n))}function ri(t,e){return typeof t=="function"?t(e):t}function ii(t){return t.split("-")[0]}function ma(t){return t.split("-")[1]}function qm(t){return t==="x"?"y":"x"}function Km(t){return t==="y"?"height":"width"}function Xi(t){return["top","bottom"].includes(ii(t))?"y":"x"}function Qm(t){return qm(Xi(t))}function mP(t,e,n){n===void 0&&(n=!1);const r=ma(t),i=Qm(t),o=Km(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=Ou(s)),[s,Ou(s)]}function gP(t){const e=Ou(t);return[xp(t),e,xp(e)]}function xp(t){return t.replace(/start|end/g,e=>pP[e])}function vP(t,e,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?o:s;default:return[]}}function xP(t,e,n,r){const i=ma(t);let o=vP(ii(t),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),e&&(o=o.concat(o.map(xp)))),o}function Ou(t){return t.replace(/left|right|bottom|top/g,e=>hP[e])}function yP(t){return{top:0,right:0,bottom:0,left:0,...t}}function Lw(t){return typeof t!="number"?yP(t):{top:t,right:t,bottom:t,left:t}}function Uu(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function x0(t,e,n){let{reference:r,floating:i}=t;const o=Xi(e),s=Qm(e),a=Km(s),l=ii(e),c=o==="y",u=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,d=r[a]/2-i[a]/2;let g;switch(l){case"top":g={x:u,y:r.y-i.height};break;case"bottom":g={x:u,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:f};break;case"left":g={x:r.x-i.width,y:f};break;default:g={x:r.x,y:r.y}}switch(ma(e)){case"start":g[s]-=d*(n&&c?-1:1);break;case"end":g[s]+=d*(n&&c?-1:1);break}return g}const _P=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:f}=x0(c,r,l),d=r,g={},v=0;for(let m=0;m<a.length;m++){const{name:p,fn:h}=a[m],{x,y,data:w,reset:b}=await h({x:u,y:f,initialPlacement:r,placement:d,strategy:i,middlewareData:g,rects:c,platform:s,elements:{reference:t,floating:e}});u=x??u,f=y??f,g={...g,[p]:{...g[p],...w}},b&&v<=50&&(v++,typeof b=="object"&&(b.placement&&(d=b.placement),b.rects&&(c=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:f}=x0(c,d,l)),m=-1)}return{x:u,y:f,placement:d,strategy:i,middlewareData:g}};async function Sl(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:g=0}=ri(e,t),v=Lw(g),p=a[d?f==="floating"?"reference":"floating":f],h=Uu(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(p)))==null||n?p:p.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),x=f==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),w=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},b=Uu(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:y,strategy:l}):x);return{top:(h.top-b.top+v.top)/w.y,bottom:(b.bottom-h.bottom+v.bottom)/w.y,left:(h.left-b.left+v.left)/w.x,right:(b.right-h.right+v.right)/w.x}}const SP=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=ri(t,e)||{};if(c==null)return{};const f=Lw(u),d={x:n,y:r},g=Qm(i),v=Km(g),m=await s.getDimensions(c),p=g==="y",h=p?"top":"left",x=p?"bottom":"right",y=p?"clientHeight":"clientWidth",w=o.reference[v]+o.reference[g]-d[g]-o.floating[v],b=d[g]-o.reference[g],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let E=T?T[y]:0;(!E||!await(s.isElement==null?void 0:s.isElement(T)))&&(E=a.floating[y]||o.floating[v]);const D=w/2-b/2,M=E/2-m[v]/2-1,C=Wi(f[h],M),B=Wi(f[x],M),F=C,Q=E-m[v]-B,N=E/2-m[v]/2+D,z=vp(F,N,Q),k=!l.arrow&&ma(i)!=null&&N!==z&&o.reference[v]/2-(N<F?C:B)-m[v]/2<0,$=k?N<F?N-F:N-Q:0;return{[g]:d[g]+$,data:{[g]:z,centerOffset:N-z-$,...k&&{alignmentOffset:$}},reset:k}}}),wP=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...p}=ri(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const h=ii(i),x=Xi(a),y=ii(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),b=d||(y||!m?[Ou(a)]:gP(a)),T=v!=="none";!d&&T&&b.push(...xP(a,m,v,w));const E=[a,...b],D=await Sl(e,p),M=[];let C=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&M.push(D[h]),f){const N=mP(i,s,w);M.push(D[N[0]],D[N[1]])}if(C=[...C,{placement:i,overflows:M}],!M.every(N=>N<=0)){var B,F;const N=(((B=o.flip)==null?void 0:B.index)||0)+1,z=E[N];if(z)return{data:{index:N,overflows:C},reset:{placement:z}};let k=(F=C.filter($=>$.overflows[0]<=0).sort(($,L)=>$.overflows[1]-L.overflows[1])[0])==null?void 0:F.placement;if(!k)switch(g){case"bestFit":{var Q;const $=(Q=C.filter(L=>{if(T){const I=Xi(L.placement);return I===x||I==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(I=>I>0).reduce((I,O)=>I+O,0)]).sort((L,I)=>L[1]-I[1])[0])==null?void 0:Q[0];$&&(k=$);break}case"initialPlacement":k=a;break}if(i!==k)return{reset:{placement:k}}}return{}}}};function y0(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function _0(t){return fP.some(e=>t[e]>=0)}const EP=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:r="referenceHidden",...i}=ri(t,e);switch(r){case"referenceHidden":{const o=await Sl(e,{...i,elementContext:"reference"}),s=y0(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:_0(s)}}}case"escaped":{const o=await Sl(e,{...i,altBoundary:!0}),s=y0(o,n.floating);return{data:{escapedOffsets:s,escaped:_0(s)}}}default:return{}}}}};async function MP(t,e){const{placement:n,platform:r,elements:i}=t,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=ii(n),a=ma(n),l=Xi(n)==="y",c=["left","top"].includes(s)?-1:1,u=o&&l?-1:1,f=ri(e,t);let{mainAxis:d,crossAxis:g,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),l?{x:g*u,y:d*c}:{x:d*c,y:g*u}}const bP=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:o,placement:s,middlewareData:a}=e,l=await MP(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},TP=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:p=>{let{x:h,y:x}=p;return{x:h,y:x}}},...l}=ri(t,e),c={x:n,y:r},u=await Sl(e,l),f=Xi(ii(i)),d=qm(f);let g=c[d],v=c[f];if(o){const p=d==="y"?"top":"left",h=d==="y"?"bottom":"right",x=g+u[p],y=g-u[h];g=vp(x,g,y)}if(s){const p=f==="y"?"top":"left",h=f==="y"?"bottom":"right",x=v+u[p],y=v-u[h];v=vp(x,v,y)}const m=a.fn({...e,[d]:g,[f]:v});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[d]:o,[f]:s}}}}}},CP=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=ri(t,e),u={x:n,y:r},f=Xi(i),d=qm(f);let g=u[d],v=u[f];const m=ri(a,e),p=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const y=d==="y"?"height":"width",w=o.reference[d]-o.floating[y]+p.mainAxis,b=o.reference[d]+o.reference[y]-p.mainAxis;g<w?g=w:g>b&&(g=b)}if(c){var h,x;const y=d==="y"?"width":"height",w=["top","left"].includes(ii(i)),b=o.reference[f]-o.floating[y]+(w&&((h=s.offset)==null?void 0:h[f])||0)+(w?0:p.crossAxis),T=o.reference[f]+o.reference[y]+(w?0:((x=s.offset)==null?void 0:x[f])||0)-(w?p.crossAxis:0);v<b?v=b:v>T&&(v=T)}return{[d]:g,[f]:v}}}},AP=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,r;const{placement:i,rects:o,platform:s,elements:a}=e,{apply:l=()=>{},...c}=ri(t,e),u=await Sl(e,c),f=ii(i),d=ma(i),g=Xi(i)==="y",{width:v,height:m}=o.floating;let p,h;f==="top"||f==="bottom"?(p=f,h=d===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(h=f,p=d==="end"?"top":"bottom");const x=m-u.top-u.bottom,y=v-u.left-u.right,w=Wi(m-u[p],x),b=Wi(v-u[h],y),T=!e.middlewareData.shift;let E=w,D=b;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(D=y),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(E=x),T&&!d){const C=Ln(u.left,0),B=Ln(u.right,0),F=Ln(u.top,0),Q=Ln(u.bottom,0);g?D=v-2*(C!==0||B!==0?C+B:Ln(u.left,u.right)):E=m-2*(F!==0||Q!==0?F+Q:Ln(u.top,u.bottom))}await l({...e,availableWidth:D,availableHeight:E});const M=await s.getDimensions(a.floating);return v!==M.width||m!==M.height?{reset:{rects:!0}}:{}}}};function yd(){return typeof window<"u"}function ga(t){return Dw(t)?(t.nodeName||"").toLowerCase():"#document"}function On(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ir(t){var e;return(e=(Dw(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Dw(t){return yd()?t instanceof Node||t instanceof On(t).Node:!1}function vr(t){return yd()?t instanceof Element||t instanceof On(t).Element:!1}function Dr(t){return yd()?t instanceof HTMLElement||t instanceof On(t).HTMLElement:!1}function S0(t){return!yd()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof On(t).ShadowRoot}function Fl(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=xr(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function RP(t){return["table","td","th"].includes(ga(t))}function _d(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Zm(t){const e=Jm(),n=vr(t)?xr(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function PP(t){let e=Yi(t);for(;Dr(e)&&!na(e);){if(Zm(e))return e;if(_d(e))return null;e=Yi(e)}return null}function Jm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function na(t){return["html","body","#document"].includes(ga(t))}function xr(t){return On(t).getComputedStyle(t)}function Sd(t){return vr(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Yi(t){if(ga(t)==="html")return t;const e=t.assignedSlot||t.parentNode||S0(t)&&t.host||Ir(t);return S0(e)?e.host:e}function Iw(t){const e=Yi(t);return na(e)?t.ownerDocument?t.ownerDocument.body:t.body:Dr(e)&&Fl(e)?e:Iw(e)}function wl(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Iw(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),s=On(i);if(o){const a=yp(s);return e.concat(s,s.visualViewport||[],Fl(i)?i:[],a&&n?wl(a):[])}return e.concat(i,wl(i,[],n))}function yp(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ow(t){const e=xr(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=Dr(t),o=i?t.offsetWidth:n,s=i?t.offsetHeight:r,a=Iu(n)!==o||Iu(r)!==s;return a&&(n=o,r=s),{width:n,height:r,$:a}}function eg(t){return vr(t)?t:t.contextElement}function Os(t){const e=eg(t);if(!Dr(e))return $i(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Ow(e);let s=(o?Iu(n.width):n.width)/r,a=(o?Iu(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const NP=$i(0);function Uw(t){const e=On(t);return!Jm()||!e.visualViewport?NP:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function LP(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==On(t)?!1:e}function Io(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=eg(t);let s=$i(1);e&&(r?vr(r)&&(s=Os(r)):s=Os(t));const a=LP(o,n,r)?Uw(o):$i(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,u=i.width/s.x,f=i.height/s.y;if(o){const d=On(o),g=r&&vr(r)?On(r):r;let v=d,m=yp(v);for(;m&&r&&g!==v;){const p=Os(m),h=m.getBoundingClientRect(),x=xr(m),y=h.left+(m.clientLeft+parseFloat(x.paddingLeft))*p.x,w=h.top+(m.clientTop+parseFloat(x.paddingTop))*p.y;l*=p.x,c*=p.y,u*=p.x,f*=p.y,l+=y,c+=w,v=On(m),m=yp(v)}}return Uu({width:u,height:f,x:l,y:c})}function DP(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",s=Ir(r),a=e?_d(e.floating):!1;if(r===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=$i(1);const u=$i(0),f=Dr(r);if((f||!f&&!o)&&((ga(r)!=="body"||Fl(s))&&(l=Sd(r)),Dr(r))){const d=Io(r);c=Os(r),u.x=d.x+r.clientLeft,u.y=d.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function IP(t){return Array.from(t.getClientRects())}function _p(t,e){const n=Sd(t).scrollLeft;return e?e.left+n:Io(Ir(t)).left+n}function OP(t){const e=Ir(t),n=Sd(t),r=t.ownerDocument.body,i=Ln(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=Ln(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+_p(t);const a=-n.scrollTop;return xr(r).direction==="rtl"&&(s+=Ln(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function UP(t,e){const n=On(t),r=Ir(t),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const c=Jm();(!c||c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}function FP(t,e){const n=Io(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=Dr(t)?Os(t):$i(1),s=t.clientWidth*o.x,a=t.clientHeight*o.y,l=i*o.x,c=r*o.y;return{width:s,height:a,x:l,y:c}}function w0(t,e,n){let r;if(e==="viewport")r=UP(t,n);else if(e==="document")r=OP(Ir(t));else if(vr(e))r=FP(e,n);else{const i=Uw(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return Uu(r)}function Fw(t,e){const n=Yi(t);return n===e||!vr(n)||na(n)?!1:xr(n).position==="fixed"||Fw(n,e)}function kP(t,e){const n=e.get(t);if(n)return n;let r=wl(t,[],!1).filter(a=>vr(a)&&ga(a)!=="body"),i=null;const o=xr(t).position==="fixed";let s=o?Yi(t):t;for(;vr(s)&&!na(s);){const a=xr(s),l=Zm(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Fl(s)&&!l&&Fw(t,s))?r=r.filter(u=>u!==s):i=a,s=Yi(s)}return e.set(t,r),r}function BP(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const s=[...n==="clippingAncestors"?_d(e)?[]:kP(e,this._c):[].concat(n),r],a=s[0],l=s.reduce((c,u)=>{const f=w0(e,u,i);return c.top=Ln(f.top,c.top),c.right=Wi(f.right,c.right),c.bottom=Wi(f.bottom,c.bottom),c.left=Ln(f.left,c.left),c},w0(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function zP(t){const{width:e,height:n}=Ow(t);return{width:e,height:n}}function HP(t,e,n){const r=Dr(e),i=Ir(e),o=n==="fixed",s=Io(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=$i(0);if(r||!r&&!o)if((ga(e)!=="body"||Fl(i))&&(a=Sd(e)),r){const g=Io(e,!0,o,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else i&&(l.x=_p(i));let c=0,u=0;if(i&&!r&&!o){const g=i.getBoundingClientRect();u=g.top+a.scrollTop,c=g.left+a.scrollLeft-_p(i,g)}const f=s.left+a.scrollLeft-l.x-c,d=s.top+a.scrollTop-l.y-u;return{x:f,y:d,width:s.width,height:s.height}}function Rf(t){return xr(t).position==="static"}function E0(t,e){if(!Dr(t)||xr(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Ir(t)===n&&(n=n.ownerDocument.body),n}function kw(t,e){const n=On(t);if(_d(t))return n;if(!Dr(t)){let i=Yi(t);for(;i&&!na(i);){if(vr(i)&&!Rf(i))return i;i=Yi(i)}return n}let r=E0(t,e);for(;r&&RP(r)&&Rf(r);)r=E0(r,e);return r&&na(r)&&Rf(r)&&!Zm(r)?n:r||PP(t)||n}const VP=async function(t){const e=this.getOffsetParent||kw,n=this.getDimensions,r=await n(t.floating);return{reference:HP(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function GP(t){return xr(t).direction==="rtl"}const jP={convertOffsetParentRelativeRectToViewportRelativeRect:DP,getDocumentElement:Ir,getClippingRect:BP,getOffsetParent:kw,getElementRects:VP,getClientRects:IP,getDimensions:zP,getScale:Os,isElement:vr,isRTL:GP};function WP(t,e){let n=null,r;const i=Ir(t);function o(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:c,top:u,width:f,height:d}=t.getBoundingClientRect();if(a||e(),!f||!d)return;const g=vc(u),v=vc(i.clientWidth-(c+f)),m=vc(i.clientHeight-(u+d)),p=vc(c),x={rootMargin:-g+"px "+-v+"px "+-m+"px "+-p+"px",threshold:Ln(0,Wi(1,l))||1};let y=!0;function w(b){const T=b[0].intersectionRatio;if(T!==l){if(!y)return s();T?s(!1,T):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(w,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(w,x)}n.observe(t)}return s(!0),o}function $P(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=eg(t),u=i||o?[...c?wl(c):[],...wl(e)]:[];u.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const f=c&&a?WP(c,n):null;let d=-1,g=null;s&&(g=new ResizeObserver(h=>{let[x]=h;x&&x.target===c&&g&&(g.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var y;(y=g)==null||y.observe(e)})),n()}),c&&!l&&g.observe(c),g.observe(e));let v,m=l?Io(t):null;l&&p();function p(){const h=Io(t);m&&(h.x!==m.x||h.y!==m.y||h.width!==m.width||h.height!==m.height)&&n(),m=h,v=requestAnimationFrame(p)}return n(),()=>{var h;u.forEach(x=>{i&&x.removeEventListener("scroll",n),o&&x.removeEventListener("resize",n)}),f==null||f(),(h=g)==null||h.disconnect(),g=null,l&&cancelAnimationFrame(v)}}const XP=bP,YP=TP,qP=wP,KP=AP,QP=EP,M0=SP,ZP=CP,JP=(t,e,n)=>{const r=new Map,i={platform:jP,...n},o={...i.platform,_c:r};return _P(t,e,{...i,platform:o})};var ou=typeof document<"u"?S.useLayoutEffect:S.useEffect;function Fu(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,r,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!Fu(t[r],e[r]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(e,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&t.$$typeof)&&!Fu(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}function Bw(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function b0(t,e){const n=Bw(t);return Math.round(e*n)/n}function Pf(t){const e=S.useRef(t);return ou(()=>{e.current=t}),e}function eN(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,f]=S.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[d,g]=S.useState(r);Fu(d,r)||g(r);const[v,m]=S.useState(null),[p,h]=S.useState(null),x=S.useCallback(L=>{L!==T.current&&(T.current=L,m(L))},[]),y=S.useCallback(L=>{L!==E.current&&(E.current=L,h(L))},[]),w=o||v,b=s||p,T=S.useRef(null),E=S.useRef(null),D=S.useRef(u),M=l!=null,C=Pf(l),B=Pf(i),F=Pf(c),Q=S.useCallback(()=>{if(!T.current||!E.current)return;const L={placement:e,strategy:n,middleware:d};B.current&&(L.platform=B.current),JP(T.current,E.current,L).then(I=>{const O={...I,isPositioned:F.current!==!1};N.current&&!Fu(D.current,O)&&(D.current=O,Ho.flushSync(()=>{f(O)}))})},[d,e,n,B,F]);ou(()=>{c===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,f(L=>({...L,isPositioned:!1})))},[c]);const N=S.useRef(!1);ou(()=>(N.current=!0,()=>{N.current=!1}),[]),ou(()=>{if(w&&(T.current=w),b&&(E.current=b),w&&b){if(C.current)return C.current(w,b,Q);Q()}},[w,b,Q,C,M]);const z=S.useMemo(()=>({reference:T,floating:E,setReference:x,setFloating:y}),[x,y]),k=S.useMemo(()=>({reference:w,floating:b}),[w,b]),$=S.useMemo(()=>{const L={position:n,left:0,top:0};if(!k.floating)return L;const I=b0(k.floating,u.x),O=b0(k.floating,u.y);return a?{...L,transform:"translate("+I+"px, "+O+"px)",...Bw(k.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:I,top:O}},[n,a,k.floating,u.x,u.y]);return S.useMemo(()=>({...u,update:Q,refs:z,elements:k,floatingStyles:$}),[u,Q,z,k,$])}const tN=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:r,padding:i}=typeof t=="function"?t(n):t;return r&&e(r)?r.current!=null?M0({element:r.current,padding:i}).fn(n):{}:r?M0({element:r,padding:i}).fn(n):{}}}},nN=(t,e)=>({...XP(t),options:[t,e]}),rN=(t,e)=>({...YP(t),options:[t,e]}),iN=(t,e)=>({...ZP(t),options:[t,e]}),oN=(t,e)=>({...qP(t),options:[t,e]}),sN=(t,e)=>({...KP(t),options:[t,e]}),aN=(t,e)=>({...QP(t),options:[t,e]}),lN=(t,e)=>({...tN(t),options:[t,e]});var cN="Arrow",zw=S.forwardRef((t,e)=>{const{children:n,width:r=10,height:i=5,...o}=t;return _.jsx(Oe.svg,{...o,ref:e,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:_.jsx("polygon",{points:"0,0 30,0 15,10"})})});zw.displayName=cN;var uN=zw;function dN(t,e=[]){let n=[];function r(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];function c(f){const{scope:d,children:g,...v}=f,m=(d==null?void 0:d[t][l])||a,p=S.useMemo(()=>v,Object.values(v));return _.jsx(m.Provider,{value:p,children:g})}function u(f,d){const g=(d==null?void 0:d[t][l])||a,v=S.useContext(g);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,u]}const i=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return S.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,fN(i,...e)]}function fN(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return S.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}function Hw(t){const[e,n]=S.useState(void 0);return on(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}else n(void 0)},[t]),e}var tg="Popper",[Vw,Ji]=dN(tg),[hN,Gw]=Vw(tg),jw=t=>{const{__scopePopper:e,children:n}=t,[r,i]=S.useState(null);return _.jsx(hN,{scope:e,anchor:r,onAnchorChange:i,children:n})};jw.displayName=tg;var Ww="PopperAnchor",$w=S.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:r,...i}=t,o=Gw(Ww,n),s=S.useRef(null),a=Je(e,s);return S.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:_.jsx(Oe.div,{...i,ref:a})});$w.displayName=Ww;var ng="PopperContent",[pN,mN]=Vw(ng),Xw=S.forwardRef((t,e)=>{var ee,ge,xe,de,Me,V;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:f="partial",hideWhenDetached:d=!1,updatePositionStrategy:g="optimized",onPlaced:v,...m}=t,p=Gw(ng,n),[h,x]=S.useState(null),y=Je(e,nt=>x(nt)),[w,b]=S.useState(null),T=Hw(w),E=(T==null?void 0:T.width)??0,D=(T==null?void 0:T.height)??0,M=r+(o!=="center"?"-"+o:""),C=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},B=Array.isArray(c)?c:[c],F=B.length>0,Q={padding:C,boundary:B.filter(vN),altBoundary:F},{refs:N,floatingStyles:z,placement:k,isPositioned:$,middlewareData:L}=eN({strategy:"fixed",placement:M,whileElementsMounted:(...nt)=>$P(...nt,{animationFrame:g==="always"}),elements:{reference:p.anchor},middleware:[nN({mainAxis:i+D,alignmentAxis:s}),l&&rN({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?iN():void 0,...Q}),l&&oN({...Q}),sN({...Q,apply:({elements:nt,rects:Ce,availableWidth:Ne,availableHeight:ye})=>{const{width:rt,height:He}=Ce.reference,R=nt.floating.style;R.setProperty("--radix-popper-available-width",`${Ne}px`),R.setProperty("--radix-popper-available-height",`${ye}px`),R.setProperty("--radix-popper-anchor-width",`${rt}px`),R.setProperty("--radix-popper-anchor-height",`${He}px`)}}),w&&lN({element:w,padding:a}),xN({arrowWidth:E,arrowHeight:D}),d&&aN({strategy:"referenceHidden",...Q})]}),[I,O]=Kw(k),H=rn(v);on(()=>{$&&(H==null||H())},[$,H]);const W=(ee=L.arrow)==null?void 0:ee.x,G=(ge=L.arrow)==null?void 0:ge.y,Z=((xe=L.arrow)==null?void 0:xe.centerOffset)!==0,[ce,oe]=S.useState();return on(()=>{h&&oe(window.getComputedStyle(h).zIndex)},[h]),_.jsx("div",{ref:N.setFloating,"data-radix-popper-content-wrapper":"",style:{...z,transform:$?z.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[(de=L.transformOrigin)==null?void 0:de.x,(Me=L.transformOrigin)==null?void 0:Me.y].join(" "),...((V=L.hide)==null?void 0:V.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:_.jsx(pN,{scope:n,placedSide:I,onArrowChange:b,arrowX:W,arrowY:G,shouldHideArrow:Z,children:_.jsx(Oe.div,{"data-side":I,"data-align":O,...m,ref:y,style:{...m.style,animation:$?void 0:"none"}})})})});Xw.displayName=ng;var Yw="PopperArrow",gN={top:"bottom",right:"left",bottom:"top",left:"right"},qw=S.forwardRef(function(e,n){const{__scopePopper:r,...i}=e,o=mN(Yw,r),s=gN[o.placedSide];return _.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:_.jsx(uN,{...i,ref:n,style:{...i.style,display:"block"}})})});qw.displayName=Yw;function vN(t){return t!==null}var xN=t=>({name:"transformOrigin",options:t,fn(e){var p,h,x;const{placement:n,rects:r,middlewareData:i}=e,s=((p=i.arrow)==null?void 0:p.centerOffset)!==0,a=s?0:t.arrowWidth,l=s?0:t.arrowHeight,[c,u]=Kw(n),f={start:"0%",center:"50%",end:"100%"}[u],d=(((h=i.arrow)==null?void 0:h.x)??0)+a/2,g=(((x=i.arrow)==null?void 0:x.y)??0)+l/2;let v="",m="";return c==="bottom"?(v=s?f:`${d}px`,m=`${-l}px`):c==="top"?(v=s?f:`${d}px`,m=`${r.floating.height+l}px`):c==="right"?(v=`${-l}px`,m=s?f:`${g}px`):c==="left"&&(v=`${r.floating.width+l}px`,m=s?f:`${g}px`),{data:{x:v,y:m}}}});function Kw(t){const[e,n="center"]=t.split("-");return[e,n]}var rg=jw,kl=$w,wd=Xw,Ed=qw,[Md,tz]=ai("Tooltip",[Ji]),ig=Ji(),Qw="TooltipProvider",yN=700,T0="tooltip.open",[_N,Zw]=Md(Qw),Jw=t=>{const{__scopeTooltip:e,delayDuration:n=yN,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=t,[s,a]=S.useState(!0),l=S.useRef(!1),c=S.useRef(0);return S.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),_.jsx(_N,{scope:e,isOpenDelayed:s,delayDuration:n,onOpen:S.useCallback(()=>{window.clearTimeout(c.current),a(!1)},[]),onClose:S.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a(!0),r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:S.useCallback(u=>{l.current=u},[]),disableHoverableContent:i,children:o})};Jw.displayName=Qw;var eE="Tooltip",[nz,bd]=Md(eE),Sp="TooltipTrigger",SN=S.forwardRef((t,e)=>{const{__scopeTooltip:n,...r}=t,i=bd(Sp,n),o=Zw(Sp,n),s=ig(n),a=S.useRef(null),l=Je(e,a,i.onTriggerChange),c=S.useRef(!1),u=S.useRef(!1),f=S.useCallback(()=>c.current=!1,[]);return S.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),_.jsx(kl,{asChild:!0,...s,children:_.jsx(Oe.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:he(t.onPointerMove,d=>{d.pointerType!=="touch"&&!u.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:he(t.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:he(t.onPointerDown,()=>{c.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:he(t.onFocus,()=>{c.current||i.onOpen()}),onBlur:he(t.onBlur,i.onClose),onClick:he(t.onClick,i.onClose)})})});SN.displayName=Sp;var wN="TooltipPortal",[rz,EN]=Md(wN,{forceMount:void 0}),ra="TooltipContent",tE=S.forwardRef((t,e)=>{const n=EN(ra,t.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=t,s=bd(ra,t.__scopeTooltip);return _.jsx(zn,{present:r||s.open,children:s.disableHoverableContent?_.jsx(nE,{side:i,...o,ref:e}):_.jsx(MN,{side:i,...o,ref:e})})}),MN=S.forwardRef((t,e)=>{const n=bd(ra,t.__scopeTooltip),r=Zw(ra,t.__scopeTooltip),i=S.useRef(null),o=Je(e,i),[s,a]=S.useState(null),{trigger:l,onClose:c}=n,u=i.current,{onPointerInTransitChange:f}=r,d=S.useCallback(()=>{a(null),f(!1)},[f]),g=S.useCallback((v,m)=>{const p=v.currentTarget,h={x:v.clientX,y:v.clientY},x=AN(h,p.getBoundingClientRect()),y=RN(h,x),w=PN(m.getBoundingClientRect()),b=LN([...y,...w]);a(b),f(!0)},[f]);return S.useEffect(()=>()=>d(),[d]),S.useEffect(()=>{if(l&&u){const v=p=>g(p,u),m=p=>g(p,l);return l.addEventListener("pointerleave",v),u.addEventListener("pointerleave",m),()=>{l.removeEventListener("pointerleave",v),u.removeEventListener("pointerleave",m)}}},[l,u,g,d]),S.useEffect(()=>{if(s){const v=m=>{const p=m.target,h={x:m.clientX,y:m.clientY},x=(l==null?void 0:l.contains(p))||(u==null?void 0:u.contains(p)),y=!NN(h,s);x?d():y&&(d(),c())};return document.addEventListener("pointermove",v),()=>document.removeEventListener("pointermove",v)}},[l,u,s,c,d]),_.jsx(nE,{...t,ref:o})}),[bN,TN]=Md(eE,{isInside:!1}),nE=S.forwardRef((t,e)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=t,l=bd(ra,n),c=ig(n),{onClose:u}=l;return S.useEffect(()=>(document.addEventListener(T0,u),()=>document.removeEventListener(T0,u)),[u]),S.useEffect(()=>{if(l.trigger){const f=d=>{const g=d.target;g!=null&&g.contains(l.trigger)&&u()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,u]),_.jsx(Vo,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:f=>f.preventDefault(),onDismiss:u,children:_.jsxs(wd,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[_.jsx(XS,{children:r}),_.jsx(bN,{scope:n,isInside:!0,children:_.jsx(pR,{id:l.contentId,role:"tooltip",children:i||r})})]})})});tE.displayName=ra;var rE="TooltipArrow",CN=S.forwardRef((t,e)=>{const{__scopeTooltip:n,...r}=t,i=ig(n);return TN(rE,n).isInside?null:_.jsx(Ed,{...i,...r,ref:e})});CN.displayName=rE;function AN(t,e){const n=Math.abs(e.top-t.y),r=Math.abs(e.bottom-t.y),i=Math.abs(e.right-t.x),o=Math.abs(e.left-t.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function RN(t,e,n=5){const r=[];switch(e){case"top":r.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":r.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":r.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":r.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return r}function PN(t){const{top:e,right:n,bottom:r,left:i}=t;return[{x:i,y:e},{x:n,y:e},{x:n,y:r},{x:i,y:r}]}function NN(t,e){const{x:n,y:r}=t;let i=!1;for(let o=0,s=e.length-1;o<e.length;s=o++){const a=e[o].x,l=e[o].y,c=e[s].x,u=e[s].y;l>r!=u>r&&n<(c-a)*(r-l)/(u-l)+a&&(i=!i)}return i}function LN(t){const e=t.slice();return e.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),DN(e)}function DN(t){if(t.length<=1)return t.slice();const e=[];for(let r=0;r<t.length;r++){const i=t[r];for(;e.length>=2;){const o=e[e.length-1],s=e[e.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))e.pop();else break}e.push(i)}e.pop();const n=[];for(let r=t.length-1;r>=0;r--){const i=t[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var IN=Jw,iE=tE;const ON=IN,UN=S.forwardRef(({className:t,sideOffset:e=4,...n},r)=>_.jsx(iE,{ref:r,sideOffset:e,className:Ye("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));UN.displayName=iE.displayName;var Td=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Cd=typeof window>"u"||"Deno"in globalThis;function sr(){}function FN(t,e){return typeof t=="function"?t(e):t}function kN(t){return typeof t=="number"&&t>=0&&t!==1/0}function BN(t,e){return Math.max(t+(e||0)-Date.now(),0)}function C0(t,e){return typeof t=="function"?t(e):t}function zN(t,e){return typeof t=="function"?t(e):t}function A0(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=t;if(s){if(r){if(e.queryHash!==og(s,e.options))return!1}else if(!Ml(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||i&&i!==e.state.fetchStatus||o&&!o(e))}function R0(t,e){const{exact:n,status:r,predicate:i,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(n){if(El(e.options.mutationKey)!==El(o))return!1}else if(!Ml(e.options.mutationKey,o))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function og(t,e){return((e==null?void 0:e.queryKeyHashFn)||El)(t)}function El(t){return JSON.stringify(t,(e,n)=>wp(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Ml(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Ml(t[n],e[n])):!1}function oE(t,e){if(t===e)return t;const n=P0(t)&&P0(e);if(n||wp(t)&&wp(e)){const r=n?t:Object.keys(t),i=r.length,o=n?e:Object.keys(e),s=o.length,a=n?[]:{};let l=0;for(let c=0;c<s;c++){const u=n?c:o[c];(!n&&r.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=oE(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return i===s&&l===i?t:a}return e}function P0(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function wp(t){if(!N0(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!N0(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function N0(t){return Object.prototype.toString.call(t)==="[object Object]"}function HN(t){return new Promise(e=>{setTimeout(e,t)})}function VN(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?oE(t,e):e}function GN(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function jN(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var sg=Symbol();function sE(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===sg?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var yo,wi,zs,Ey,WN=(Ey=class extends Td{constructor(){super();at(this,yo);at(this,wi);at(this,zs);$e(this,zs,e=>{if(!Cd&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){te(this,wi)||this.setEventListener(te(this,zs))}onUnsubscribe(){var e;this.hasListeners()||((e=te(this,wi))==null||e.call(this),$e(this,wi,void 0))}setEventListener(e){var n;$e(this,zs,e),(n=te(this,wi))==null||n.call(this),$e(this,wi,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){te(this,yo)!==e&&($e(this,yo,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof te(this,yo)=="boolean"?te(this,yo):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},yo=new WeakMap,wi=new WeakMap,zs=new WeakMap,Ey),aE=new WN,Hs,Ei,Vs,My,$N=(My=class extends Td{constructor(){super();at(this,Hs,!0);at(this,Ei);at(this,Vs);$e(this,Vs,e=>{if(!Cd&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){te(this,Ei)||this.setEventListener(te(this,Vs))}onUnsubscribe(){var e;this.hasListeners()||((e=te(this,Ei))==null||e.call(this),$e(this,Ei,void 0))}setEventListener(e){var n;$e(this,Vs,e),(n=te(this,Ei))==null||n.call(this),$e(this,Ei,e(this.setOnline.bind(this)))}setOnline(e){te(this,Hs)!==e&&($e(this,Hs,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return te(this,Hs)}},Hs=new WeakMap,Ei=new WeakMap,Vs=new WeakMap,My),ku=new $N;function XN(){let t,e;const n=new Promise((i,o)=>{t=i,e=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),t(i)},n.reject=i=>{r({status:"rejected",reason:i}),e(i)},n}function YN(t){return Math.min(1e3*2**t,3e4)}function lE(t){return(t??"online")==="online"?ku.isOnline():!0}var cE=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Nf(t){return t instanceof cE}function uE(t){let e=!1,n=0,r=!1,i;const o=XN(),s=m=>{var p;r||(d(new cE(m)),(p=t.abort)==null||p.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>aE.isFocused()&&(t.networkMode==="always"||ku.isOnline())&&t.canRun(),u=()=>lE(t.networkMode)&&t.canRun(),f=m=>{var p;r||(r=!0,(p=t.onSuccess)==null||p.call(t,m),i==null||i(),o.resolve(m))},d=m=>{var p;r||(r=!0,(p=t.onError)==null||p.call(t,m),i==null||i(),o.reject(m))},g=()=>new Promise(m=>{var p;i=h=>{(r||c())&&m(h)},(p=t.onPause)==null||p.call(t)}).then(()=>{var m;i=void 0,r||(m=t.onContinue)==null||m.call(t)}),v=()=>{if(r)return;let m;const p=n===0?t.initialPromise:void 0;try{m=p??t.fn()}catch(h){m=Promise.reject(h)}Promise.resolve(m).then(f).catch(h=>{var T;if(r)return;const x=t.retry??(Cd?0:3),y=t.retryDelay??YN,w=typeof y=="function"?y(n,h):y,b=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,h);if(e||!b){d(h);return}n++,(T=t.onFail)==null||T.call(t,n,h),HN(w).then(()=>c()?void 0:g()).then(()=>{e?d(h):v()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():g().then(v),o)}}function qN(){let t=[],e=0,n=a=>{a()},r=a=>{a()},i=a=>setTimeout(a,0);const o=a=>{e?t.push(a):i(()=>{n(a)})},s=()=>{const a=t;t=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var fn=qN(),_o,by,dE=(by=class{constructor(){at(this,_o)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),kN(this.gcTime)&&$e(this,_o,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Cd?1/0:5*60*1e3))}clearGcTimeout(){te(this,_o)&&(clearTimeout(te(this,_o)),$e(this,_o,void 0))}},_o=new WeakMap,by),Gs,js,Gn,Jt,Rl,So,ar,Vr,Ty,KN=(Ty=class extends dE{constructor(e){super();at(this,ar);at(this,Gs);at(this,js);at(this,Gn);at(this,Jt);at(this,Rl);at(this,So);$e(this,So,!1),$e(this,Rl,e.defaultOptions),this.setOptions(e.options),this.observers=[],$e(this,Gn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,$e(this,Gs,ZN(this.options)),this.state=e.state??te(this,Gs),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=te(this,Jt))==null?void 0:e.promise}setOptions(e){this.options={...te(this,Rl),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&te(this,Gn).remove(this)}setData(e,n){const r=VN(this.state.data,e,this.options);return Yt(this,ar,Vr).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){Yt(this,ar,Vr).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r,i;const n=(r=te(this,Jt))==null?void 0:r.promise;return(i=te(this,Jt))==null||i.cancel(e),n?n.then(sr).catch(sr):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(te(this,Gs))}isActive(){return this.observers.some(e=>zN(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===sg||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!BN(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=te(this,Jt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=te(this,Jt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),te(this,Gn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(te(this,Jt)&&(te(this,So)?te(this,Jt).cancel({revert:!0}):te(this,Jt).cancelRetry()),this.scheduleGc()),te(this,Gn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Yt(this,ar,Vr).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(te(this,Jt))return te(this,Jt).continueRetry(),te(this,Jt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(d=>d.options.queryFn);f&&this.setOptions(f.options)}const r=new AbortController,i=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>($e(this,So,!0),r.signal)})},o=()=>{const f=sE(this.options,n),d={queryKey:this.queryKey,meta:this.meta};return i(d),$e(this,So,!1),this.options.persister?this.options.persister(f,d,this):f(d)},s={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};i(s),(l=this.options.behavior)==null||l.onFetch(s,this),$e(this,js,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=s.fetchOptions)==null?void 0:c.meta))&&Yt(this,ar,Vr).call(this,{type:"fetch",meta:(u=s.fetchOptions)==null?void 0:u.meta});const a=f=>{var d,g,v,m;Nf(f)&&f.silent||Yt(this,ar,Vr).call(this,{type:"error",error:f}),Nf(f)||((g=(d=te(this,Gn).config).onError)==null||g.call(d,f,this),(m=(v=te(this,Gn).config).onSettled)==null||m.call(v,this.state.data,f,this)),this.scheduleGc()};return $e(this,Jt,uE({initialPromise:n==null?void 0:n.initialPromise,fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:f=>{var d,g,v,m;if(f===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(p){a(p);return}(g=(d=te(this,Gn).config).onSuccess)==null||g.call(d,f,this),(m=(v=te(this,Gn).config).onSettled)==null||m.call(v,f,this.state.error,this),this.scheduleGc()},onError:a,onFail:(f,d)=>{Yt(this,ar,Vr).call(this,{type:"failed",failureCount:f,error:d})},onPause:()=>{Yt(this,ar,Vr).call(this,{type:"pause"})},onContinue:()=>{Yt(this,ar,Vr).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),te(this,Jt).start()}},Gs=new WeakMap,js=new WeakMap,Gn=new WeakMap,Jt=new WeakMap,Rl=new WeakMap,So=new WeakMap,ar=new WeakSet,Vr=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...QN(r.data,this.options),fetchMeta:e.meta??null};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=e.error;return Nf(i)&&i.revert&&te(this,js)?{...te(this,js),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),fn.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),te(this,Gn).notify({query:this,type:"updated",action:e})})},Ty);function QN(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:lE(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function ZN(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Er,Cy,JN=(Cy=class extends Td{constructor(e={}){super();at(this,Er);this.config=e,$e(this,Er,new Map)}build(e,n,r){const i=n.queryKey,o=n.queryHash??og(i,n);let s=this.get(o);return s||(s=new KN({cache:this,queryKey:i,queryHash:o,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(s)),s}add(e){te(this,Er).has(e.queryHash)||(te(this,Er).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=te(this,Er).get(e.queryHash);n&&(e.destroy(),n===e&&te(this,Er).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){fn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return te(this,Er).get(e)}getAll(){return[...te(this,Er).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>A0(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>A0(e,r)):n}notify(e){fn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){fn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){fn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Er=new WeakMap,Cy),Mr,cn,wo,br,gi,Ay,eL=(Ay=class extends dE{constructor(e){super();at(this,br);at(this,Mr);at(this,cn);at(this,wo);this.mutationId=e.mutationId,$e(this,cn,e.mutationCache),$e(this,Mr,[]),this.state=e.state||tL(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){te(this,Mr).includes(e)||(te(this,Mr).push(e),this.clearGcTimeout(),te(this,cn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){$e(this,Mr,te(this,Mr).filter(n=>n!==e)),this.scheduleGc(),te(this,cn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){te(this,Mr).length||(this.state.status==="pending"?this.scheduleGc():te(this,cn).remove(this))}continue(){var e;return((e=te(this,wo))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var i,o,s,a,l,c,u,f,d,g,v,m,p,h,x,y,w,b,T,E;$e(this,wo,uE({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(D,M)=>{Yt(this,br,gi).call(this,{type:"failed",failureCount:D,error:M})},onPause:()=>{Yt(this,br,gi).call(this,{type:"pause"})},onContinue:()=>{Yt(this,br,gi).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>te(this,cn).canRun(this)}));const n=this.state.status==="pending",r=!te(this,wo).canStart();try{if(!n){Yt(this,br,gi).call(this,{type:"pending",variables:e,isPaused:r}),await((o=(i=te(this,cn).config).onMutate)==null?void 0:o.call(i,e,this));const M=await((a=(s=this.options).onMutate)==null?void 0:a.call(s,e));M!==this.state.context&&Yt(this,br,gi).call(this,{type:"pending",context:M,variables:e,isPaused:r})}const D=await te(this,wo).start();return await((c=(l=te(this,cn).config).onSuccess)==null?void 0:c.call(l,D,e,this.state.context,this)),await((f=(u=this.options).onSuccess)==null?void 0:f.call(u,D,e,this.state.context)),await((g=(d=te(this,cn).config).onSettled)==null?void 0:g.call(d,D,null,this.state.variables,this.state.context,this)),await((m=(v=this.options).onSettled)==null?void 0:m.call(v,D,null,e,this.state.context)),Yt(this,br,gi).call(this,{type:"success",data:D}),D}catch(D){try{throw await((h=(p=te(this,cn).config).onError)==null?void 0:h.call(p,D,e,this.state.context,this)),await((y=(x=this.options).onError)==null?void 0:y.call(x,D,e,this.state.context)),await((b=(w=te(this,cn).config).onSettled)==null?void 0:b.call(w,void 0,D,this.state.variables,this.state.context,this)),await((E=(T=this.options).onSettled)==null?void 0:E.call(T,void 0,D,e,this.state.context)),D}finally{Yt(this,br,gi).call(this,{type:"error",error:D})}}finally{te(this,cn).runNext(this)}}},Mr=new WeakMap,cn=new WeakMap,wo=new WeakMap,br=new WeakSet,gi=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),fn.batch(()=>{te(this,Mr).forEach(r=>{r.onMutationUpdate(e)}),te(this,cn).notify({mutation:this,type:"updated",action:e})})},Ay);function tL(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Rn,Pl,Ry,nL=(Ry=class extends Td{constructor(e={}){super();at(this,Rn);at(this,Pl);this.config=e,$e(this,Rn,new Map),$e(this,Pl,Date.now())}build(e,n,r){const i=new eL({mutationCache:this,mutationId:++Kl(this,Pl)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){const n=xc(e),r=te(this,Rn).get(n)??[];r.push(e),te(this,Rn).set(n,r),this.notify({type:"added",mutation:e})}remove(e){var r;const n=xc(e);if(te(this,Rn).has(n)){const i=(r=te(this,Rn).get(n))==null?void 0:r.filter(o=>o!==e);i&&(i.length===0?te(this,Rn).delete(n):te(this,Rn).set(n,i))}this.notify({type:"removed",mutation:e})}canRun(e){var r;const n=(r=te(this,Rn).get(xc(e)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===e}runNext(e){var r;const n=(r=te(this,Rn).get(xc(e)))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){fn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...te(this,Rn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(r=>R0(n,r))}findAll(e={}){return this.getAll().filter(n=>R0(e,n))}notify(e){fn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return fn.batch(()=>Promise.all(e.map(n=>n.continue().catch(sr))))}},Rn=new WeakMap,Pl=new WeakMap,Ry);function xc(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function L0(t){return{onFetch:(e,n)=>{var u,f,d,g,v;const r=e.options,i=(d=(f=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:f.fetchMore)==null?void 0:d.direction,o=((g=e.state.data)==null?void 0:g.pages)||[],s=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let m=!1;const p=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(e.signal.aborted?m=!0:e.signal.addEventListener("abort",()=>{m=!0}),e.signal)})},h=sE(e.options,e.fetchOptions),x=async(y,w,b)=>{if(m)return Promise.reject();if(w==null&&y.pages.length)return Promise.resolve(y);const T={queryKey:e.queryKey,pageParam:w,direction:b?"backward":"forward",meta:e.options.meta};p(T);const E=await h(T),{maxPages:D}=e.options,M=b?jN:GN;return{pages:M(y.pages,E,D),pageParams:M(y.pageParams,w,D)}};if(i&&o.length){const y=i==="backward",w=y?rL:D0,b={pages:o,pageParams:s},T=w(r,b);a=await x(b,T,y)}else{const y=t??o.length;do{const w=l===0?s[0]??r.initialPageParam:D0(r,a);if(l>0&&w==null)break;a=await x(a,w),l++}while(l<y)}return a};e.options.persister?e.fetchFn=()=>{var m,p;return(p=(m=e.options).persister)==null?void 0:p.call(m,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function D0(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function rL(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var Tt,Mi,bi,Ws,$s,Ti,Xs,Ys,Py,iL=(Py=class{constructor(t={}){at(this,Tt);at(this,Mi);at(this,bi);at(this,Ws);at(this,$s);at(this,Ti);at(this,Xs);at(this,Ys);$e(this,Tt,t.queryCache||new JN),$e(this,Mi,t.mutationCache||new nL),$e(this,bi,t.defaultOptions||{}),$e(this,Ws,new Map),$e(this,$s,new Map),$e(this,Ti,0)}mount(){Kl(this,Ti)._++,te(this,Ti)===1&&($e(this,Xs,aE.subscribe(async t=>{t&&(await this.resumePausedMutations(),te(this,Tt).onFocus())})),$e(this,Ys,ku.subscribe(async t=>{t&&(await this.resumePausedMutations(),te(this,Tt).onOnline())})))}unmount(){var t,e;Kl(this,Ti)._--,te(this,Ti)===0&&((t=te(this,Xs))==null||t.call(this),$e(this,Xs,void 0),(e=te(this,Ys))==null||e.call(this),$e(this,Ys,void 0))}isFetching(t){return te(this,Tt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return te(this,Mi).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=te(this,Tt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),r=te(this,Tt).build(this,n);return t.revalidateIfStale&&r.isStaleByTime(C0(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return te(this,Tt).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=te(this,Tt).get(r.queryHash),o=i==null?void 0:i.state.data,s=FN(e,o);if(s!==void 0)return te(this,Tt).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(t,e,n){return fn.batch(()=>te(this,Tt).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=te(this,Tt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=te(this,Tt);fn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=te(this,Tt),r={type:"active",...t};return fn.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=fn.batch(()=>te(this,Tt).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(sr).catch(sr)}invalidateQueries(t={},e={}){return fn.batch(()=>{if(te(this,Tt).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=fn.batch(()=>te(this,Tt).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(sr)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(sr)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=te(this,Tt).build(this,e);return n.isStaleByTime(C0(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(sr).catch(sr)}fetchInfiniteQuery(t){return t.behavior=L0(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(sr).catch(sr)}ensureInfiniteQueryData(t){return t.behavior=L0(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return ku.isOnline()?te(this,Mi).resumePausedMutations():Promise.resolve()}getQueryCache(){return te(this,Tt)}getMutationCache(){return te(this,Mi)}getDefaultOptions(){return te(this,bi)}setDefaultOptions(t){$e(this,bi,t)}setQueryDefaults(t,e){te(this,Ws).set(El(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...te(this,Ws).values()];let n={};return e.forEach(r=>{Ml(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){te(this,$s).set(El(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...te(this,$s).values()];let n={};return e.forEach(r=>{Ml(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...te(this,bi).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=og(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===sg&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...te(this,bi).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){te(this,Tt).clear(),te(this,Mi).clear()}},Tt=new WeakMap,Mi=new WeakMap,bi=new WeakMap,Ws=new WeakMap,$s=new WeakMap,Ti=new WeakMap,Xs=new WeakMap,Ys=new WeakMap,Py),oL=S.createContext(void 0),sL=({client:t,children:e})=>(S.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),_.jsx(oL.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}var Ri;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ri||(Ri={}));const I0="popstate";function aL(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ep("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hE(i)}return cL(e,n,null,t)}function bn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lL(){return Math.random().toString(36).substr(2,8)}function O0(t,e){return{usr:t.state,key:t.key,idx:e}}function Ep(t,e,n,r){return n===void 0&&(n=null),Bu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ad(e):e,{state:n,key:e&&e.key||r||lL()})}function hE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ad(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cL(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ri.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(Bu({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function f(){a=Ri.Pop;let p=u(),h=p==null?null:p-c;c=p,l&&l({action:a,location:m.location,delta:h})}function d(p,h){a=Ri.Push;let x=Ep(m.location,p,h);c=u()+1;let y=O0(x,c),w=m.createHref(x);try{s.pushState(y,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(w)}o&&l&&l({action:a,location:m.location,delta:1})}function g(p,h){a=Ri.Replace;let x=Ep(m.location,p,h);c=u();let y=O0(x,c),w=m.createHref(x);s.replaceState(y,"",w),o&&l&&l({action:a,location:m.location,delta:0})}function v(p){let h=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof p=="string"?p:hE(p);return x=x.replace(/ $/,"%20"),bn(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let m={get action(){return a},get location(){return t(i,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(I0,f),l=p,()=>{i.removeEventListener(I0,f),l=null}},createHref(p){return e(i,p)},createURL:v,encodeLocation(p){let h=v(p);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:g,go(p){return s.go(p)}};return m}var U0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(U0||(U0={}));function uL(t,e,n){return n===void 0&&(n="/"),dL(t,e,n,!1)}function dL(t,e,n,r){let i=typeof e=="string"?Ad(e):e,o=gE(i.pathname||"/",n);if(o==null)return null;let s=pE(t);fL(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=EL(o);a=SL(s[l],c,r)}return a}function pE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(bn(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Us([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(bn(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),pE(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:yL(c,o.index),routesMeta:u})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of mE(o.path))i(o,s,l)}),e}function mE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=mE(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function fL(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_L(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hL=/^:[\w-]+$/,pL=3,mL=2,gL=1,vL=10,xL=-2,F0=t=>t==="*";function yL(t,e){let n=t.split("/"),r=n.length;return n.some(F0)&&(r+=xL),e&&(r+=mL),n.filter(i=>!F0(i)).reduce((i,o)=>i+(hL.test(o)?pL:o===""?gL:vL),r)}function _L(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function SL(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=o==="/"?e:e.slice(o.length)||"/",f=k0({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=k0({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Us([o,f.pathname]),pathnameBase:ML(Us([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=Us([o,f.pathnameBase]))}return s}function k0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wL(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:d,isOptional:g}=u;if(d==="*"){let m=a[f]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?c[d]=void 0:c[d]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function wL(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function EL(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function gE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Us=t=>t.join("/").replace(/\/\/+/g,"/"),ML=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function bL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vE=["post","put","patch","delete"];new Set(vE);const TL=["get",...vE];new Set(TL);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(this,arguments)}const CL=S.createContext(null),AL=S.createContext(null),xE=S.createContext(null),Rd=S.createContext(null),Pd=S.createContext({outlet:null,matches:[],isDataRoute:!1}),yE=S.createContext(null);function ag(){return S.useContext(Rd)!=null}function _E(){return ag()||bn(!1),S.useContext(Rd).location}function RL(t,e){return PL(t,e)}function PL(t,e,n,r){ag()||bn(!1);let{navigator:i}=S.useContext(xE),{matches:o}=S.useContext(Pd),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=_E(),u;if(e){var f;let p=typeof e=="string"?Ad(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||bn(!1),u=p}else u=c;let d=u.pathname||"/",g=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=uL(t,{pathname:g}),m=OL(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Us([l,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Us([l,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,r);return e&&m?S.createElement(Rd.Provider,{value:{location:zu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ri.Pop}},m):m}function NL(){let t=BL(),e=bL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const LL=S.createElement(NL,null);class DL extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(Pd.Provider,{value:this.props.routeContext},S.createElement(yE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IL(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(CL);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Pd.Provider,{value:e},r)}function OL(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||bn(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let f=s[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:d,errors:g}=n,v=f.route.loader&&d[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,f,d)=>{let g,v=!1,m=null,p=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,m=f.route.errorElement||LL,l&&(c<0&&d===0?(v=!0,p=null):c===d&&(v=!0,p=f.route.hydrateFallbackElement||null)));let h=e.concat(s.slice(0,d+1)),x=()=>{let y;return g?y=m:v?y=p:f.route.Component?y=S.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=u,S.createElement(IL,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?S.createElement(DL,{location:n.location,revalidation:n.revalidation,component:m,error:g,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var Mp=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Mp||{});function UL(t){let e=S.useContext(AL);return e||bn(!1),e}function FL(t){let e=S.useContext(Pd);return e||bn(!1),e}function kL(t){let e=FL(),n=e.matches[e.matches.length-1];return n.route.id||bn(!1),n.route.id}function BL(){var t;let e=S.useContext(yE),n=UL(Mp.UseRouteError),r=kL(Mp.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bp(t){bn(!1)}function zL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ri.Pop,navigator:o,static:s=!1,future:a}=t;ag()&&bn(!1);let l=e.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:l,navigator:o,static:s,future:zu({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ad(r));let{pathname:u="/",search:f="",hash:d="",state:g=null,key:v="default"}=r,m=S.useMemo(()=>{let p=gE(u,l);return p==null?null:{location:{pathname:p,search:f,hash:d,state:g,key:v},navigationType:i}},[l,u,f,d,g,v,i]);return m==null?null:S.createElement(xE.Provider,{value:c},S.createElement(Rd.Provider,{children:n,value:m}))}function HL(t){let{children:e,location:n}=t;return RL(Tp(e),n)}new Promise(()=>{});function Tp(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let o=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Tp(r.props.children,o));return}r.type!==bp&&bn(!1),!r.props.index||!r.props.children||bn(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Tp(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const VL="6";try{window.__reactRouterVersion=VL}catch{}const GL="startTransition",B0=Vy[GL];function jL(t){let{basename:e,children:n,future:r,window:i}=t,o=S.useRef();o.current==null&&(o.current=aL({window:i,v5Compat:!0}));let s=o.current,[a,l]=S.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},u=S.useCallback(f=>{c&&B0?B0(()=>l(f)):l(f)},[l,c]);return S.useLayoutEffect(()=>s.listen(u),[s,u]),S.createElement(zL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var z0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(z0||(z0={}));var H0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(H0||(H0={}));const WL=Xm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),pt=S.forwardRef(({className:t,variant:e,size:n,asChild:r=!1,...i},o)=>{const s=r?ti:"button";return _.jsx(s,{className:Ye(WL({variant:e,size:n,className:t})),ref:o,...i})});pt.displayName="Button";var Lf="focusScope.autoFocusOnMount",Df="focusScope.autoFocusOnUnmount",V0={bubbles:!1,cancelable:!0},$L="FocusScope",Bl=S.forwardRef((t,e)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...s}=t,[a,l]=S.useState(null),c=rn(i),u=rn(o),f=S.useRef(null),d=Je(e,m=>l(m)),g=S.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;S.useEffect(()=>{if(r){let m=function(y){if(g.paused||!a)return;const w=y.target;a.contains(w)?f.current=w:vi(f.current,{select:!0})},p=function(y){if(g.paused||!a)return;const w=y.relatedTarget;w!==null&&(a.contains(w)||vi(f.current,{select:!0}))},h=function(y){if(document.activeElement===document.body)for(const b of y)b.removedNodes.length>0&&vi(a)};document.addEventListener("focusin",m),document.addEventListener("focusout",p);const x=new MutationObserver(h);return a&&x.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",m),document.removeEventListener("focusout",p),x.disconnect()}}},[r,a,g.paused]),S.useEffect(()=>{if(a){j0.add(g);const m=document.activeElement;if(!a.contains(m)){const h=new CustomEvent(Lf,V0);a.addEventListener(Lf,c),a.dispatchEvent(h),h.defaultPrevented||(XL(ZL(SE(a)),{select:!0}),document.activeElement===m&&vi(a))}return()=>{a.removeEventListener(Lf,c),setTimeout(()=>{const h=new CustomEvent(Df,V0);a.addEventListener(Df,u),a.dispatchEvent(h),h.defaultPrevented||vi(m??document.body,{select:!0}),a.removeEventListener(Df,u),j0.remove(g)},0)}}},[a,c,u,g]);const v=S.useCallback(m=>{if(!n&&!r||g.paused)return;const p=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,h=document.activeElement;if(p&&h){const x=m.currentTarget,[y,w]=YL(x);y&&w?!m.shiftKey&&h===w?(m.preventDefault(),n&&vi(y,{select:!0})):m.shiftKey&&h===y&&(m.preventDefault(),n&&vi(w,{select:!0})):h===x&&m.preventDefault()}},[n,r,g.paused]);return _.jsx(Oe.div,{tabIndex:-1,...s,ref:d,onKeyDown:v})});Bl.displayName=$L;function XL(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(vi(r,{select:e}),document.activeElement!==n)return}function YL(t){const e=SE(t),n=G0(e,t),r=G0(e.reverse(),t);return[n,r]}function SE(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function G0(t,e){for(const n of t)if(!qL(n,{upTo:e}))return n}function qL(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function KL(t){return t instanceof HTMLInputElement&&"select"in t}function vi(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&KL(t)&&e&&t.select()}}var j0=QL();function QL(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=W0(t,e),t.unshift(e)},remove(e){var n;t=W0(t,e),(n=t[0])==null||n.resume()}}}function W0(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function ZL(t){return t.filter(e=>e.tagName!=="A")}var If=0;function Nd(){S.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??$0()),document.body.insertAdjacentElement("beforeend",t[1]??$0()),If++,()=>{If===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),If--}},[])}function $0(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var Ar=function(){return Ar=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ar.apply(this,arguments)};function wE(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function JL(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var su="right-scroll-bar-position",au="width-before-scroll-bar",eD="with-scroll-bars-hidden",tD="--removed-body-scroll-bar-size";function Of(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function nD(t,e){var n=S.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=e,n.facade}var rD=typeof window<"u"?S.useLayoutEffect:S.useEffect,X0=new WeakMap;function iD(t,e){var n=nD(null,function(r){return t.forEach(function(i){return Of(i,r)})});return rD(function(){var r=X0.get(n);if(r){var i=new Set(r),o=new Set(t),s=n.current;i.forEach(function(a){o.has(a)||Of(a,null)}),o.forEach(function(a){i.has(a)||Of(a,s)})}X0.set(n,t)},[t]),n}function oD(t){return t}function sD(t,e){e===void 0&&(e=oD);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(o){var s=e(o,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(a){return o(a)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(o),s=n}var l=function(){var u=s;s=[],u.forEach(o)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(u){s.push(u),c()},filter:function(u){return s=s.filter(u),n}}}};return i}function aD(t){t===void 0&&(t={});var e=sD(null);return e.options=Ar({async:!0,ssr:!1},t),e}var EE=function(t){var e=t.sideCar,n=wE(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return S.createElement(r,Ar({},n))};EE.isSideCarExport=!0;function lD(t,e){return t.useMedium(e),EE}var ME=aD(),Uf=function(){},Ld=S.forwardRef(function(t,e){var n=S.useRef(null),r=S.useState({onScrollCapture:Uf,onWheelCapture:Uf,onTouchMoveCapture:Uf}),i=r[0],o=r[1],s=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,u=t.enabled,f=t.shards,d=t.sideCar,g=t.noIsolation,v=t.inert,m=t.allowPinchZoom,p=t.as,h=p===void 0?"div":p,x=t.gapMode,y=wE(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=d,b=iD([n,e]),T=Ar(Ar({},y),i);return S.createElement(S.Fragment,null,u&&S.createElement(w,{sideCar:ME,removeScrollBar:c,shards:f,noIsolation:g,inert:v,setCallbacks:o,allowPinchZoom:!!m,lockRef:n,gapMode:x}),s?S.cloneElement(S.Children.only(a),Ar(Ar({},T),{ref:b})):S.createElement(h,Ar({},T,{className:l,ref:b}),a))});Ld.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ld.classNames={fullWidth:au,zeroRight:su};var cD=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function uD(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=cD();return e&&t.setAttribute("nonce",e),t}function dD(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function fD(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var hD=function(){var t=0,e=null;return{add:function(n){t==0&&(e=uD())&&(dD(e,n),fD(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},pD=function(){var t=hD();return function(e,n){S.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},bE=function(){var t=pD(),e=function(n){var r=n.styles,i=n.dynamic;return t(r,i),null};return e},mD={left:0,top:0,right:0,gap:0},Ff=function(t){return parseInt(t||"",10)||0},gD=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],r=e[t==="padding"?"paddingTop":"marginTop"],i=e[t==="padding"?"paddingRight":"marginRight"];return[Ff(n),Ff(r),Ff(i)]},vD=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return mD;var e=gD(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},xD=bE(),Fs="data-scroll-locked",yD=function(t,e,n,r){var i=t.left,o=t.top,s=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(eD,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(Fs,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(su,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(au,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(su," .").concat(su,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(au," .").concat(au,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Fs,`] {
    `).concat(tD,": ").concat(a,`px;
  }
`)},Y0=function(){var t=parseInt(document.body.getAttribute(Fs)||"0",10);return isFinite(t)?t:0},_D=function(){S.useEffect(function(){return document.body.setAttribute(Fs,(Y0()+1).toString()),function(){var t=Y0()-1;t<=0?document.body.removeAttribute(Fs):document.body.setAttribute(Fs,t.toString())}},[])},SD=function(t){var e=t.noRelative,n=t.noImportant,r=t.gapMode,i=r===void 0?"margin":r;_D();var o=S.useMemo(function(){return vD(i)},[i]);return S.createElement(xD,{styles:yD(o,!e,i,n?"":"!important")})},Cp=!1;if(typeof window<"u")try{var yc=Object.defineProperty({},"passive",{get:function(){return Cp=!0,!0}});window.addEventListener("test",yc,yc),window.removeEventListener("test",yc,yc)}catch{Cp=!1}var Xo=Cp?{passive:!1}:!1,wD=function(t){return t.tagName==="TEXTAREA"},TE=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!wD(t)&&n[e]==="visible")},ED=function(t){return TE(t,"overflowY")},MD=function(t){return TE(t,"overflowX")},q0=function(t,e){var n=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=CE(t,r);if(i){var o=AE(t,r),s=o[1],a=o[2];if(s>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},bD=function(t){var e=t.scrollTop,n=t.scrollHeight,r=t.clientHeight;return[e,n,r]},TD=function(t){var e=t.scrollLeft,n=t.scrollWidth,r=t.clientWidth;return[e,n,r]},CE=function(t,e){return t==="v"?ED(e):MD(e)},AE=function(t,e){return t==="v"?bD(e):TD(e)},CD=function(t,e){return t==="h"&&e==="rtl"?-1:1},AD=function(t,e,n,r,i){var o=CD(t,window.getComputedStyle(e).direction),s=o*r,a=n.target,l=e.contains(a),c=!1,u=s>0,f=0,d=0;do{var g=AE(t,a),v=g[0],m=g[1],p=g[2],h=m-p-o*v;(v||h)&&CE(t,a)&&(f+=h,d+=v),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(u&&(Math.abs(f)<1||!i)||!u&&(Math.abs(d)<1||!i))&&(c=!0),c},_c=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},K0=function(t){return[t.deltaX,t.deltaY]},Q0=function(t){return t&&"current"in t?t.current:t},RD=function(t,e){return t[0]===e[0]&&t[1]===e[1]},PD=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},ND=0,Yo=[];function LD(t){var e=S.useRef([]),n=S.useRef([0,0]),r=S.useRef(),i=S.useState(ND++)[0],o=S.useState(bE)[0],s=S.useRef(t);S.useEffect(function(){s.current=t},[t]),S.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(i));var m=JL([t.lockRef.current],(t.shards||[]).map(Q0),!0).filter(Boolean);return m.forEach(function(p){return p.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),m.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(i))})}}},[t.inert,t.lockRef.current,t.shards]);var a=S.useCallback(function(m,p){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!s.current.allowPinchZoom;var h=_c(m),x=n.current,y="deltaX"in m?m.deltaX:x[0]-h[0],w="deltaY"in m?m.deltaY:x[1]-h[1],b,T=m.target,E=Math.abs(y)>Math.abs(w)?"h":"v";if("touches"in m&&E==="h"&&T.type==="range")return!1;var D=q0(E,T);if(!D)return!0;if(D?b=E:(b=E==="v"?"h":"v",D=q0(E,T)),!D)return!1;if(!r.current&&"changedTouches"in m&&(y||w)&&(r.current=b),!b)return!0;var M=r.current||b;return AD(M,p,m,M==="h"?y:w,!0)},[]),l=S.useCallback(function(m){var p=m;if(!(!Yo.length||Yo[Yo.length-1]!==o)){var h="deltaY"in p?K0(p):_c(p),x=e.current.filter(function(b){return b.name===p.type&&(b.target===p.target||p.target===b.shadowParent)&&RD(b.delta,h)})[0];if(x&&x.should){p.cancelable&&p.preventDefault();return}if(!x){var y=(s.current.shards||[]).map(Q0).filter(Boolean).filter(function(b){return b.contains(p.target)}),w=y.length>0?a(p,y[0]):!s.current.noIsolation;w&&p.cancelable&&p.preventDefault()}}},[]),c=S.useCallback(function(m,p,h,x){var y={name:m,delta:p,target:h,should:x,shadowParent:DD(h)};e.current.push(y),setTimeout(function(){e.current=e.current.filter(function(w){return w!==y})},1)},[]),u=S.useCallback(function(m){n.current=_c(m),r.current=void 0},[]),f=S.useCallback(function(m){c(m.type,K0(m),m.target,a(m,t.lockRef.current))},[]),d=S.useCallback(function(m){c(m.type,_c(m),m.target,a(m,t.lockRef.current))},[]);S.useEffect(function(){return Yo.push(o),t.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",l,Xo),document.addEventListener("touchmove",l,Xo),document.addEventListener("touchstart",u,Xo),function(){Yo=Yo.filter(function(m){return m!==o}),document.removeEventListener("wheel",l,Xo),document.removeEventListener("touchmove",l,Xo),document.removeEventListener("touchstart",u,Xo)}},[]);var g=t.removeScrollBar,v=t.inert;return S.createElement(S.Fragment,null,v?S.createElement(o,{styles:PD(i)}):null,g?S.createElement(SD,{gapMode:t.gapMode}):null)}function DD(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const ID=lD(ME,LD);var zl=S.forwardRef(function(t,e){return S.createElement(Ld,Ar({},t,{ref:e,sideCar:ID}))});zl.classNames=Ld.classNames;var OD=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},qo=new WeakMap,Sc=new WeakMap,wc={},kf=0,RE=function(t){return t&&(t.host||RE(t.parentNode))},UD=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=RE(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},FD=function(t,e,n,r){var i=UD(e,Array.isArray(t)?t:[t]);wc[n]||(wc[n]=new WeakMap);var o=wc[n],s=[],a=new Set,l=new Set(i),c=function(f){!f||a.has(f)||(a.add(f),c(f.parentNode))};i.forEach(c);var u=function(f){!f||l.has(f)||Array.prototype.forEach.call(f.children,function(d){if(a.has(d))u(d);else try{var g=d.getAttribute(r),v=g!==null&&g!=="false",m=(qo.get(d)||0)+1,p=(o.get(d)||0)+1;qo.set(d,m),o.set(d,p),s.push(d),m===1&&v&&Sc.set(d,!0),p===1&&d.setAttribute(n,"true"),v||d.setAttribute(r,"true")}catch(h){console.error("aria-hidden: cannot operate on ",d,h)}})};return u(e),a.clear(),kf++,function(){s.forEach(function(f){var d=qo.get(f)-1,g=o.get(f)-1;qo.set(f,d),o.set(f,g),d||(Sc.has(f)||f.removeAttribute(r),Sc.delete(f)),g||f.removeAttribute(n)}),kf--,kf||(qo=new WeakMap,qo=new WeakMap,Sc=new WeakMap,wc={})}},Dd=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),i=OD(t);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),FD(r,i,n,"aria-hidden")):function(){return null}},lg="Dialog",[PE,iz]=ai(lg),[kD,yr]=PE(lg),NE=t=>{const{__scopeDialog:e,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:s=!0}=t,a=S.useRef(null),l=S.useRef(null),[c=!1,u]=ni({prop:r,defaultProp:i,onChange:o});return _.jsx(kD,{scope:e,triggerRef:a,contentRef:l,contentId:mr(),titleId:mr(),descriptionId:mr(),open:c,onOpenChange:u,onOpenToggle:S.useCallback(()=>u(f=>!f),[u]),modal:s,children:n})};NE.displayName=lg;var LE="DialogTrigger",DE=S.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=yr(LE,n),o=Je(e,i.triggerRef);return _.jsx(Oe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":dg(i.open),...r,ref:o,onClick:he(t.onClick,i.onOpenToggle)})});DE.displayName=LE;var cg="DialogPortal",[BD,IE]=PE(cg,{forceMount:void 0}),OE=t=>{const{__scopeDialog:e,forceMount:n,children:r,container:i}=t,o=yr(cg,e);return _.jsx(BD,{scope:e,forceMount:n,children:S.Children.map(r,s=>_.jsx(zn,{present:n||o.open,children:_.jsx(ha,{asChild:!0,container:i,children:s})}))})};OE.displayName=cg;var Hu="DialogOverlay",UE=S.forwardRef((t,e)=>{const n=IE(Hu,t.__scopeDialog),{forceMount:r=n.forceMount,...i}=t,o=yr(Hu,t.__scopeDialog);return o.modal?_.jsx(zn,{present:r||o.open,children:_.jsx(zD,{...i,ref:e})}):null});UE.displayName=Hu;var zD=S.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=yr(Hu,n);return _.jsx(zl,{as:ti,allowPinchZoom:!0,shards:[i.contentRef],children:_.jsx(Oe.div,{"data-state":dg(i.open),...r,ref:e,style:{pointerEvents:"auto",...r.style}})})}),Oo="DialogContent",FE=S.forwardRef((t,e)=>{const n=IE(Oo,t.__scopeDialog),{forceMount:r=n.forceMount,...i}=t,o=yr(Oo,t.__scopeDialog);return _.jsx(zn,{present:r||o.open,children:o.modal?_.jsx(HD,{...i,ref:e}):_.jsx(VD,{...i,ref:e})})});FE.displayName=Oo;var HD=S.forwardRef((t,e)=>{const n=yr(Oo,t.__scopeDialog),r=S.useRef(null),i=Je(e,n.contentRef,r);return S.useEffect(()=>{const o=r.current;if(o)return Dd(o)},[]),_.jsx(kE,{...t,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:he(t.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:he(t.onPointerDownOutside,o=>{const s=o.detail.originalEvent,a=s.button===0&&s.ctrlKey===!0;(s.button===2||a)&&o.preventDefault()}),onFocusOutside:he(t.onFocusOutside,o=>o.preventDefault())})}),VD=S.forwardRef((t,e)=>{const n=yr(Oo,t.__scopeDialog),r=S.useRef(!1),i=S.useRef(!1);return _.jsx(kE,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,a;(s=t.onCloseAutoFocus)==null||s.call(t,o),o.defaultPrevented||(r.current||(a=n.triggerRef.current)==null||a.focus(),o.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:o=>{var l,c;(l=t.onInteractOutside)==null||l.call(t,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const s=o.target;((c=n.triggerRef.current)==null?void 0:c.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&i.current&&o.preventDefault()}})}),kE=S.forwardRef((t,e)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,...s}=t,a=yr(Oo,n),l=S.useRef(null),c=Je(e,l);return Nd(),_.jsxs(_.Fragment,{children:[_.jsx(Bl,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o,children:_.jsx(Vo,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":dg(a.open),...s,ref:c,onDismiss:()=>a.onOpenChange(!1)})}),_.jsxs(_.Fragment,{children:[_.jsx(GD,{titleId:a.titleId}),_.jsx(WD,{contentRef:l,descriptionId:a.descriptionId})]})]})}),ug="DialogTitle",BE=S.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=yr(ug,n);return _.jsx(Oe.h2,{id:i.titleId,...r,ref:e})});BE.displayName=ug;var zE="DialogDescription",HE=S.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=yr(zE,n);return _.jsx(Oe.p,{id:i.descriptionId,...r,ref:e})});HE.displayName=zE;var VE="DialogClose",GE=S.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,i=yr(VE,n);return _.jsx(Oe.button,{type:"button",...r,ref:e,onClick:he(t.onClick,()=>i.onOpenChange(!1))})});GE.displayName=VE;function dg(t){return t?"open":"closed"}var jE="DialogTitleWarning",[oz,WE]=KA(jE,{contentName:Oo,titleName:ug,docsSlug:"dialog"}),GD=({titleId:t})=>{const e=WE(jE),n=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return S.useEffect(()=>{t&&(document.getElementById(t)||console.error(n))},[n,t]),null},jD="DialogDescriptionWarning",WD=({contentRef:t,descriptionId:e})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${WE(jD).contentName}}.`;return S.useEffect(()=>{var o;const i=(o=t.current)==null?void 0:o.getAttribute("aria-describedby");e&&i&&(document.getElementById(e)||console.warn(r))},[r,t,e]),null},$D=NE,XD=DE,YD=OE,$E=UE,XE=FE,YE=BE,qE=HE,KE=GE;const QE=$D,qD=XD,KD=YD,QD=KE,ZE=S.forwardRef(({className:t,...e},n)=>_.jsx($E,{ref:n,className:Ye("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));ZE.displayName=$E.displayName;const fg=S.forwardRef(({className:t,children:e,...n},r)=>_.jsxs(KD,{children:[_.jsx(ZE,{}),_.jsxs(XE,{ref:r,className:Ye("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[e,_.jsxs(KE,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[_.jsx(_l,{className:"h-4 w-4"}),_.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));fg.displayName=XE.displayName;const hg=({className:t,...e})=>_.jsx("div",{className:Ye("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});hg.displayName="DialogHeader";const pg=S.forwardRef(({className:t,...e},n)=>_.jsx(YE,{ref:n,className:Ye("text-lg font-semibold leading-none tracking-tight",t),...e}));pg.displayName=YE.displayName;const JE=S.forwardRef(({className:t,...e},n)=>_.jsx(qE,{ref:n,className:Ye("text-sm text-muted-foreground",t),...e}));JE.displayName=qE.displayName;const ZD=({isOpen:t,onClose:e})=>_.jsx(QE,{open:t,onOpenChange:e,children:_.jsxs(fg,{className:"sm:max-w-[800px] max-h-[80vh] overflow-y-auto",children:[_.jsxs(hg,{children:[_.jsx(pg,{className:"text-2xl font-bold",children:"How to Use CreateX"}),_.jsx(JE,{children:"Learn how to use our AI-powered code generator effectively"})]}),_.jsx("div",{className:"aspect-video w-full rounded-md overflow-hidden border border-border",children:_.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"Tutorial Video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),_.jsxs("div",{className:"space-y-4 mt-4",children:[_.jsx("h3",{className:"text-lg font-semibold",children:"Quick Start Guide:"}),_.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[_.jsx("li",{children:"Enter a detailed prompt describing what you want to create"}),_.jsx("li",{children:"Upload an image or provide a Figma URL (optional)"}),_.jsx("li",{children:"Adjust the generation options as needed"}),_.jsx("li",{children:'Click "Generate" to create your code'}),_.jsx("li",{children:"View and download the generated code"})]})]}),_.jsx(QD,{asChild:!0,children:_.jsx(pt,{variant:"outline",className:"mt-4",children:"Got it!"})})]})}),Vu=[{name:"default",label:"Default",cssClass:"theme-default",description:"Clean and modern design"},{name:"neubrutalism",label:"Neubrutalism",cssClass:"theme-neubrutalism",description:"Bold colors and strong contrast"},{name:"claymorphism",label:"Claymorphism",cssClass:"theme-claymorphism",description:"Soft, clay-like elements"},{name:"glassmorphism",label:"Glassmorphism",cssClass:"theme-glassmorphism",description:"Frosted glass effect"},{name:"skeumorphism",label:"Skeumorphism",cssClass:"theme-skeumorphism",description:"Real-world object inspired"},{name:"cyberpunk",label:"Cyberpunk",cssClass:"theme-cyberpunk",description:"Futuristic neon aesthetic"},{name:"neomorphism",label:"Neomorphism",cssClass:"theme-neomorphism",description:"Soft shadows and highlights"},{name:"hello-kitty",label:"Hello Kitty",cssClass:"theme-hello-kitty",description:"Cute and playful"},{name:"3d",label:"3D ThreeJS",cssClass:"theme-3d",description:"Interactive 3D elements"},{name:"minimalism",label:"Minimalism",cssClass:"theme-minimalism",description:"Simple and clean design"},{name:"material-design",label:"Material Design",cssClass:"theme-material-design",description:"Google's Material Design principles"},{name:"flat-design",label:"Flat Design",cssClass:"theme-flat-design",description:"Simplified 2D elements"},{name:"dark-mode",label:"Dark Mode UI",cssClass:"theme-dark-mode",description:"Dark theme with contrast"},{name:"corporate",label:"Corporate Aesthetics",cssClass:"theme-corporate",description:"Professional business look"}],eM=t=>{document.body.classList.remove(...Vu.map(n=>n.cssClass));const e=Vu.find(n=>n.name===t);e&&(document.body.classList.add(e.cssClass),localStorage.setItem("createx-theme",t))},Gu=()=>localStorage.getItem("createx-theme")||"default",JD=()=>{eM(Gu())},eI=t=>{localStorage.setItem("createx-prompt-theme",t)},Z0=()=>localStorage.getItem("createx-prompt-theme")||"default";var mg="Popover",[tM,sz]=ai(mg,[Ji]),Hl=Ji(),[tI,eo]=tM(mg),nM=t=>{const{__scopePopover:e,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:s=!1}=t,a=Hl(e),l=S.useRef(null),[c,u]=S.useState(!1),[f=!1,d]=ni({prop:r,defaultProp:i,onChange:o});return _.jsx(rg,{...a,children:_.jsx(tI,{scope:e,contentId:mr(),triggerRef:l,open:f,onOpenChange:d,onOpenToggle:S.useCallback(()=>d(g=>!g),[d]),hasCustomAnchor:c,onCustomAnchorAdd:S.useCallback(()=>u(!0),[]),onCustomAnchorRemove:S.useCallback(()=>u(!1),[]),modal:s,children:n})})};nM.displayName=mg;var rM="PopoverAnchor",nI=S.forwardRef((t,e)=>{const{__scopePopover:n,...r}=t,i=eo(rM,n),o=Hl(n),{onCustomAnchorAdd:s,onCustomAnchorRemove:a}=i;return S.useEffect(()=>(s(),()=>a()),[s,a]),_.jsx(kl,{...o,...r,ref:e})});nI.displayName=rM;var iM="PopoverTrigger",oM=S.forwardRef((t,e)=>{const{__scopePopover:n,...r}=t,i=eo(iM,n),o=Hl(n),s=Je(e,i.triggerRef),a=_.jsx(Oe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":uM(i.open),...r,ref:s,onClick:he(t.onClick,i.onOpenToggle)});return i.hasCustomAnchor?a:_.jsx(kl,{asChild:!0,...o,children:a})});oM.displayName=iM;var gg="PopoverPortal",[rI,iI]=tM(gg,{forceMount:void 0}),sM=t=>{const{__scopePopover:e,forceMount:n,children:r,container:i}=t,o=eo(gg,e);return _.jsx(rI,{scope:e,forceMount:n,children:_.jsx(zn,{present:n||o.open,children:_.jsx(ha,{asChild:!0,container:i,children:r})})})};sM.displayName=gg;var ia="PopoverContent",aM=S.forwardRef((t,e)=>{const n=iI(ia,t.__scopePopover),{forceMount:r=n.forceMount,...i}=t,o=eo(ia,t.__scopePopover);return _.jsx(zn,{present:r||o.open,children:o.modal?_.jsx(oI,{...i,ref:e}):_.jsx(sI,{...i,ref:e})})});aM.displayName=ia;var oI=S.forwardRef((t,e)=>{const n=eo(ia,t.__scopePopover),r=S.useRef(null),i=Je(e,r),o=S.useRef(!1);return S.useEffect(()=>{const s=r.current;if(s)return Dd(s)},[]),_.jsx(zl,{as:ti,allowPinchZoom:!0,children:_.jsx(lM,{...t,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:he(t.onCloseAutoFocus,s=>{var a;s.preventDefault(),o.current||(a=n.triggerRef.current)==null||a.focus()}),onPointerDownOutside:he(t.onPointerDownOutside,s=>{const a=s.detail.originalEvent,l=a.button===0&&a.ctrlKey===!0,c=a.button===2||l;o.current=c},{checkForDefaultPrevented:!1}),onFocusOutside:he(t.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),sI=S.forwardRef((t,e)=>{const n=eo(ia,t.__scopePopover),r=S.useRef(!1),i=S.useRef(!1);return _.jsx(lM,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,a;(s=t.onCloseAutoFocus)==null||s.call(t,o),o.defaultPrevented||(r.current||(a=n.triggerRef.current)==null||a.focus(),o.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:o=>{var l,c;(l=t.onInteractOutside)==null||l.call(t,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const s=o.target;((c=n.triggerRef.current)==null?void 0:c.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&i.current&&o.preventDefault()}})}),lM=S.forwardRef((t,e)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,disableOutsidePointerEvents:s,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:c,onInteractOutside:u,...f}=t,d=eo(ia,n),g=Hl(n);return Nd(),_.jsx(Bl,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o,children:_.jsx(Vo,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:u,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:c,onDismiss:()=>d.onOpenChange(!1),children:_.jsx(wd,{"data-state":uM(d.open),role:"dialog",id:d.contentId,...g,...f,ref:e,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),cM="PopoverClose",aI=S.forwardRef((t,e)=>{const{__scopePopover:n,...r}=t,i=eo(cM,n);return _.jsx(Oe.button,{type:"button",...r,ref:e,onClick:he(t.onClick,()=>i.onOpenChange(!1))})});aI.displayName=cM;var lI="PopoverArrow",cI=S.forwardRef((t,e)=>{const{__scopePopover:n,...r}=t,i=Hl(n);return _.jsx(Ed,{...i,...r,ref:e})});cI.displayName=lI;function uM(t){return t?"open":"closed"}var uI=nM,dI=oM,fI=sM,dM=aM;const fM=uI,hM=dI,vg=S.forwardRef(({className:t,align:e="center",sideOffset:n=4,...r},i)=>_.jsx(fI,{children:_.jsx(dM,{ref:i,align:e,sideOffset:n,className:Ye("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r})}));vg.displayName=dM.displayName;var hI=S.createContext(void 0);function Id(t){const e=S.useContext(hI);return t||e||"ltr"}function pI(t,e=[]){let n=[];function r(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];function c(f){const{scope:d,children:g,...v}=f,m=(d==null?void 0:d[t][l])||a,p=S.useMemo(()=>v,Object.values(v));return _.jsx(m.Provider,{value:p,children:g})}function u(f,d){const g=(d==null?void 0:d[t][l])||a,v=S.useContext(g);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,u]}const i=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return S.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,mI(i,...e)]}function mI(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return S.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var Bf="rovingFocusGroup.onEntryFocus",gI={bubbles:!1,cancelable:!0},Od="RovingFocusGroup",[Ap,pM,vI]=gd(Od),[xI,Ud]=pI(Od,[vI]),[yI,_I]=xI(Od),mM=S.forwardRef((t,e)=>_.jsx(Ap.Provider,{scope:t.__scopeRovingFocusGroup,children:_.jsx(Ap.Slot,{scope:t.__scopeRovingFocusGroup,children:_.jsx(SI,{...t,ref:e})})}));mM.displayName=Od;var SI=S.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:o,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:c,preventScrollOnEntryFocus:u=!1,...f}=t,d=S.useRef(null),g=Je(e,d),v=Id(o),[m=null,p]=ni({prop:s,defaultProp:a,onChange:l}),[h,x]=S.useState(!1),y=rn(c),w=pM(n),b=S.useRef(!1),[T,E]=S.useState(0);return S.useEffect(()=>{const D=d.current;if(D)return D.addEventListener(Bf,y),()=>D.removeEventListener(Bf,y)},[y]),_.jsx(yI,{scope:n,orientation:r,dir:v,loop:i,currentTabStopId:m,onItemFocus:S.useCallback(D=>p(D),[p]),onItemShiftTab:S.useCallback(()=>x(!0),[]),onFocusableItemAdd:S.useCallback(()=>E(D=>D+1),[]),onFocusableItemRemove:S.useCallback(()=>E(D=>D-1),[]),children:_.jsx(Oe.div,{tabIndex:h||T===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...t.style},onMouseDown:he(t.onMouseDown,()=>{b.current=!0}),onFocus:he(t.onFocus,D=>{const M=!b.current;if(D.target===D.currentTarget&&M&&!h){const C=new CustomEvent(Bf,gI);if(D.currentTarget.dispatchEvent(C),!C.defaultPrevented){const B=w().filter(k=>k.focusable),F=B.find(k=>k.active),Q=B.find(k=>k.id===m),z=[F,Q,...B].filter(Boolean).map(k=>k.ref.current);xM(z,u)}}b.current=!1}),onBlur:he(t.onBlur,()=>x(!1))})})}),gM="RovingFocusGroupItem",vM=S.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:o,...s}=t,a=mr(),l=o||a,c=_I(gM,n),u=c.currentTabStopId===l,f=pM(n),{onFocusableItemAdd:d,onFocusableItemRemove:g}=c;return S.useEffect(()=>{if(r)return d(),()=>g()},[r,d,g]),_.jsx(Ap.ItemSlot,{scope:n,id:l,focusable:r,active:i,children:_.jsx(Oe.span,{tabIndex:u?0:-1,"data-orientation":c.orientation,...s,ref:e,onMouseDown:he(t.onMouseDown,v=>{r?c.onItemFocus(l):v.preventDefault()}),onFocus:he(t.onFocus,()=>c.onItemFocus(l)),onKeyDown:he(t.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){c.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const m=MI(v,c.orientation,c.dir);if(m!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||v.shiftKey)return;v.preventDefault();let h=f().filter(x=>x.focusable).map(x=>x.ref.current);if(m==="last")h.reverse();else if(m==="prev"||m==="next"){m==="prev"&&h.reverse();const x=h.indexOf(v.currentTarget);h=c.loop?bI(h,x+1):h.slice(x+1)}setTimeout(()=>xM(h))}})})})});vM.displayName=gM;var wI={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function EI(t,e){return e!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function MI(t,e,n){const r=EI(t.key,n);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return wI[r]}function xM(t,e=!1){const n=document.activeElement;for(const r of t)if(r===n||(r.focus({preventScroll:e}),document.activeElement!==n))return}function bI(t,e){return t.map((n,r)=>t[(e+r)%t.length])}var yM=mM,_M=vM,Rp=["Enter"," "],TI=["ArrowDown","PageUp","Home"],SM=["ArrowUp","PageDown","End"],CI=[...TI,...SM],AI={ltr:[...Rp,"ArrowRight"],rtl:[...Rp,"ArrowLeft"]},RI={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Vl="Menu",[bl,PI,NI]=gd(Vl),[Go,wM]=ai(Vl,[NI,Ji,Ud]),Fd=Ji(),EM=Ud(),[LI,jo]=Go(Vl),[DI,Gl]=Go(Vl),MM=t=>{const{__scopeMenu:e,open:n=!1,children:r,dir:i,onOpenChange:o,modal:s=!0}=t,a=Fd(e),[l,c]=S.useState(null),u=S.useRef(!1),f=rn(o),d=Id(i);return S.useEffect(()=>{const g=()=>{u.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>u.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),_.jsx(rg,{...a,children:_.jsx(LI,{scope:e,open:n,onOpenChange:f,content:l,onContentChange:c,children:_.jsx(DI,{scope:e,onClose:S.useCallback(()=>f(!1),[f]),isUsingKeyboardRef:u,dir:d,modal:s,children:r})})})};MM.displayName=Vl;var II="MenuAnchor",xg=S.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t,i=Fd(n);return _.jsx(kl,{...i,...r,ref:e})});xg.displayName=II;var yg="MenuPortal",[OI,bM]=Go(yg,{forceMount:void 0}),TM=t=>{const{__scopeMenu:e,forceMount:n,children:r,container:i}=t,o=jo(yg,e);return _.jsx(OI,{scope:e,forceMount:n,children:_.jsx(zn,{present:n||o.open,children:_.jsx(ha,{asChild:!0,container:i,children:r})})})};TM.displayName=yg;var Qn="MenuContent",[UI,_g]=Go(Qn),CM=S.forwardRef((t,e)=>{const n=bM(Qn,t.__scopeMenu),{forceMount:r=n.forceMount,...i}=t,o=jo(Qn,t.__scopeMenu),s=Gl(Qn,t.__scopeMenu);return _.jsx(bl.Provider,{scope:t.__scopeMenu,children:_.jsx(zn,{present:r||o.open,children:_.jsx(bl.Slot,{scope:t.__scopeMenu,children:s.modal?_.jsx(FI,{...i,ref:e}):_.jsx(kI,{...i,ref:e})})})})}),FI=S.forwardRef((t,e)=>{const n=jo(Qn,t.__scopeMenu),r=S.useRef(null),i=Je(e,r);return S.useEffect(()=>{const o=r.current;if(o)return Dd(o)},[]),_.jsx(Sg,{...t,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:he(t.onFocusOutside,o=>o.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),kI=S.forwardRef((t,e)=>{const n=jo(Qn,t.__scopeMenu);return _.jsx(Sg,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),Sg=S.forwardRef((t,e)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:s,disableOutsidePointerEvents:a,onEntryFocus:l,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:d,onDismiss:g,disableOutsideScroll:v,...m}=t,p=jo(Qn,n),h=Gl(Qn,n),x=Fd(n),y=EM(n),w=PI(n),[b,T]=S.useState(null),E=S.useRef(null),D=Je(e,E,p.onContentChange),M=S.useRef(0),C=S.useRef(""),B=S.useRef(0),F=S.useRef(null),Q=S.useRef("right"),N=S.useRef(0),z=v?zl:S.Fragment,k=v?{as:ti,allowPinchZoom:!0}:void 0,$=I=>{var ee,ge;const O=C.current+I,H=w().filter(xe=>!xe.disabled),W=document.activeElement,G=(ee=H.find(xe=>xe.ref.current===W))==null?void 0:ee.textValue,Z=H.map(xe=>xe.textValue),ce=KI(Z,O,G),oe=(ge=H.find(xe=>xe.textValue===ce))==null?void 0:ge.ref.current;(function xe(de){C.current=de,window.clearTimeout(M.current),de!==""&&(M.current=window.setTimeout(()=>xe(""),1e3))})(O),oe&&setTimeout(()=>oe.focus())};S.useEffect(()=>()=>window.clearTimeout(M.current),[]),Nd();const L=S.useCallback(I=>{var H,W;return Q.current===((H=F.current)==null?void 0:H.side)&&ZI(I,(W=F.current)==null?void 0:W.area)},[]);return _.jsx(UI,{scope:n,searchRef:C,onItemEnter:S.useCallback(I=>{L(I)&&I.preventDefault()},[L]),onItemLeave:S.useCallback(I=>{var O;L(I)||((O=E.current)==null||O.focus(),T(null))},[L]),onTriggerLeave:S.useCallback(I=>{L(I)&&I.preventDefault()},[L]),pointerGraceTimerRef:B,onPointerGraceIntentChange:S.useCallback(I=>{F.current=I},[]),children:_.jsx(z,{...k,children:_.jsx(Bl,{asChild:!0,trapped:i,onMountAutoFocus:he(o,I=>{var O;I.preventDefault(),(O=E.current)==null||O.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:_.jsx(Vo,{asChild:!0,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:d,onDismiss:g,children:_.jsx(yM,{asChild:!0,...y,dir:h.dir,orientation:"vertical",loop:r,currentTabStopId:b,onCurrentTabStopIdChange:T,onEntryFocus:he(l,I=>{h.isUsingKeyboardRef.current||I.preventDefault()}),preventScrollOnEntryFocus:!0,children:_.jsx(wd,{role:"menu","aria-orientation":"vertical","data-state":GM(p.open),"data-radix-menu-content":"",dir:h.dir,...x,...m,ref:D,style:{outline:"none",...m.style},onKeyDown:he(m.onKeyDown,I=>{const H=I.target.closest("[data-radix-menu-content]")===I.currentTarget,W=I.ctrlKey||I.altKey||I.metaKey,G=I.key.length===1;H&&(I.key==="Tab"&&I.preventDefault(),!W&&G&&$(I.key));const Z=E.current;if(I.target!==Z||!CI.includes(I.key))return;I.preventDefault();const oe=w().filter(ee=>!ee.disabled).map(ee=>ee.ref.current);SM.includes(I.key)&&oe.reverse(),YI(oe)}),onBlur:he(t.onBlur,I=>{I.currentTarget.contains(I.target)||(window.clearTimeout(M.current),C.current="")}),onPointerMove:he(t.onPointerMove,Tl(I=>{const O=I.target,H=N.current!==I.clientX;if(I.currentTarget.contains(O)&&H){const W=I.clientX>N.current?"right":"left";Q.current=W,N.current=I.clientX}}))})})})})})})});CM.displayName=Qn;var BI="MenuGroup",wg=S.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t;return _.jsx(Oe.div,{role:"group",...r,ref:e})});wg.displayName=BI;var zI="MenuLabel",AM=S.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t;return _.jsx(Oe.div,{...r,ref:e})});AM.displayName=zI;var ju="MenuItem",J0="menu.itemSelect",kd=S.forwardRef((t,e)=>{const{disabled:n=!1,onSelect:r,...i}=t,o=S.useRef(null),s=Gl(ju,t.__scopeMenu),a=_g(ju,t.__scopeMenu),l=Je(e,o),c=S.useRef(!1),u=()=>{const f=o.current;if(!n&&f){const d=new CustomEvent(J0,{bubbles:!0,cancelable:!0});f.addEventListener(J0,g=>r==null?void 0:r(g),{once:!0}),Gm(f,d),d.defaultPrevented?c.current=!1:s.onClose()}};return _.jsx(RM,{...i,ref:l,disabled:n,onClick:he(t.onClick,u),onPointerDown:f=>{var d;(d=t.onPointerDown)==null||d.call(t,f),c.current=!0},onPointerUp:he(t.onPointerUp,f=>{var d;c.current||(d=f.currentTarget)==null||d.click()}),onKeyDown:he(t.onKeyDown,f=>{const d=a.searchRef.current!=="";n||d&&f.key===" "||Rp.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})});kd.displayName=ju;var RM=S.forwardRef((t,e)=>{const{__scopeMenu:n,disabled:r=!1,textValue:i,...o}=t,s=_g(ju,n),a=EM(n),l=S.useRef(null),c=Je(e,l),[u,f]=S.useState(!1),[d,g]=S.useState("");return S.useEffect(()=>{const v=l.current;v&&g((v.textContent??"").trim())},[o.children]),_.jsx(bl.ItemSlot,{scope:n,disabled:r,textValue:i??d,children:_.jsx(_M,{asChild:!0,...a,focusable:!r,children:_.jsx(Oe.div,{role:"menuitem","data-highlighted":u?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...o,ref:c,onPointerMove:he(t.onPointerMove,Tl(v=>{r?s.onItemLeave(v):(s.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:he(t.onPointerLeave,Tl(v=>s.onItemLeave(v))),onFocus:he(t.onFocus,()=>f(!0)),onBlur:he(t.onBlur,()=>f(!1))})})})}),HI="MenuCheckboxItem",PM=S.forwardRef((t,e)=>{const{checked:n=!1,onCheckedChange:r,...i}=t;return _.jsx(OM,{scope:t.__scopeMenu,checked:n,children:_.jsx(kd,{role:"menuitemcheckbox","aria-checked":Wu(n)?"mixed":n,...i,ref:e,"data-state":Mg(n),onSelect:he(i.onSelect,()=>r==null?void 0:r(Wu(n)?!0:!n),{checkForDefaultPrevented:!1})})})});PM.displayName=HI;var NM="MenuRadioGroup",[VI,GI]=Go(NM,{value:void 0,onValueChange:()=>{}}),LM=S.forwardRef((t,e)=>{const{value:n,onValueChange:r,...i}=t,o=rn(r);return _.jsx(VI,{scope:t.__scopeMenu,value:n,onValueChange:o,children:_.jsx(wg,{...i,ref:e})})});LM.displayName=NM;var DM="MenuRadioItem",IM=S.forwardRef((t,e)=>{const{value:n,...r}=t,i=GI(DM,t.__scopeMenu),o=n===i.value;return _.jsx(OM,{scope:t.__scopeMenu,checked:o,children:_.jsx(kd,{role:"menuitemradio","aria-checked":o,...r,ref:e,"data-state":Mg(o),onSelect:he(r.onSelect,()=>{var s;return(s=i.onValueChange)==null?void 0:s.call(i,n)},{checkForDefaultPrevented:!1})})})});IM.displayName=DM;var Eg="MenuItemIndicator",[OM,jI]=Go(Eg,{checked:!1}),UM=S.forwardRef((t,e)=>{const{__scopeMenu:n,forceMount:r,...i}=t,o=jI(Eg,n);return _.jsx(zn,{present:r||Wu(o.checked)||o.checked===!0,children:_.jsx(Oe.span,{...i,ref:e,"data-state":Mg(o.checked)})})});UM.displayName=Eg;var WI="MenuSeparator",FM=S.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t;return _.jsx(Oe.div,{role:"separator","aria-orientation":"horizontal",...r,ref:e})});FM.displayName=WI;var $I="MenuArrow",kM=S.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t,i=Fd(n);return _.jsx(Ed,{...i,...r,ref:e})});kM.displayName=$I;var XI="MenuSub",[az,BM]=Go(XI),Va="MenuSubTrigger",zM=S.forwardRef((t,e)=>{const n=jo(Va,t.__scopeMenu),r=Gl(Va,t.__scopeMenu),i=BM(Va,t.__scopeMenu),o=_g(Va,t.__scopeMenu),s=S.useRef(null),{pointerGraceTimerRef:a,onPointerGraceIntentChange:l}=o,c={__scopeMenu:t.__scopeMenu},u=S.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return S.useEffect(()=>u,[u]),S.useEffect(()=>{const f=a.current;return()=>{window.clearTimeout(f),l(null)}},[a,l]),_.jsx(xg,{asChild:!0,...c,children:_.jsx(RM,{id:i.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":i.contentId,"data-state":GM(n.open),...t,ref:md(e,i.onTriggerChange),onClick:f=>{var d;(d=t.onClick)==null||d.call(t,f),!(t.disabled||f.defaultPrevented)&&(f.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:he(t.onPointerMove,Tl(f=>{o.onItemEnter(f),!f.defaultPrevented&&!t.disabled&&!n.open&&!s.current&&(o.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{n.onOpenChange(!0),u()},100))})),onPointerLeave:he(t.onPointerLeave,Tl(f=>{var g,v;u();const d=(g=n.content)==null?void 0:g.getBoundingClientRect();if(d){const m=(v=n.content)==null?void 0:v.dataset.side,p=m==="right",h=p?-5:5,x=d[p?"left":"right"],y=d[p?"right":"left"];o.onPointerGraceIntentChange({area:[{x:f.clientX+h,y:f.clientY},{x,y:d.top},{x:y,y:d.top},{x:y,y:d.bottom},{x,y:d.bottom}],side:m}),window.clearTimeout(a.current),a.current=window.setTimeout(()=>o.onPointerGraceIntentChange(null),300)}else{if(o.onTriggerLeave(f),f.defaultPrevented)return;o.onPointerGraceIntentChange(null)}})),onKeyDown:he(t.onKeyDown,f=>{var g;const d=o.searchRef.current!=="";t.disabled||d&&f.key===" "||AI[r.dir].includes(f.key)&&(n.onOpenChange(!0),(g=n.content)==null||g.focus(),f.preventDefault())})})})});zM.displayName=Va;var HM="MenuSubContent",VM=S.forwardRef((t,e)=>{const n=bM(Qn,t.__scopeMenu),{forceMount:r=n.forceMount,...i}=t,o=jo(Qn,t.__scopeMenu),s=Gl(Qn,t.__scopeMenu),a=BM(HM,t.__scopeMenu),l=S.useRef(null),c=Je(e,l);return _.jsx(bl.Provider,{scope:t.__scopeMenu,children:_.jsx(zn,{present:r||o.open,children:_.jsx(bl.Slot,{scope:t.__scopeMenu,children:_.jsx(Sg,{id:a.contentId,"aria-labelledby":a.triggerId,...i,ref:c,align:"start",side:s.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:u=>{var f;s.isUsingKeyboardRef.current&&((f=l.current)==null||f.focus()),u.preventDefault()},onCloseAutoFocus:u=>u.preventDefault(),onFocusOutside:he(t.onFocusOutside,u=>{u.target!==a.trigger&&o.onOpenChange(!1)}),onEscapeKeyDown:he(t.onEscapeKeyDown,u=>{s.onClose(),u.preventDefault()}),onKeyDown:he(t.onKeyDown,u=>{var g;const f=u.currentTarget.contains(u.target),d=RI[s.dir].includes(u.key);f&&d&&(o.onOpenChange(!1),(g=a.trigger)==null||g.focus(),u.preventDefault())})})})})})});VM.displayName=HM;function GM(t){return t?"open":"closed"}function Wu(t){return t==="indeterminate"}function Mg(t){return Wu(t)?"indeterminate":t?"checked":"unchecked"}function YI(t){const e=document.activeElement;for(const n of t)if(n===e||(n.focus(),document.activeElement!==e))return}function qI(t,e){return t.map((n,r)=>t[(e+r)%t.length])}function KI(t,e,n){const i=e.length>1&&Array.from(e).every(c=>c===e[0])?e[0]:e,o=n?t.indexOf(n):-1;let s=qI(t,Math.max(o,0));i.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.toLowerCase().startsWith(i.toLowerCase()));return l!==n?l:void 0}function QI(t,e){const{x:n,y:r}=t;let i=!1;for(let o=0,s=e.length-1;o<e.length;s=o++){const a=e[o].x,l=e[o].y,c=e[s].x,u=e[s].y;l>r!=u>r&&n<(c-a)*(r-l)/(u-l)+a&&(i=!i)}return i}function ZI(t,e){if(!e)return!1;const n={x:t.clientX,y:t.clientY};return QI(n,e)}function Tl(t){return e=>e.pointerType==="mouse"?t(e):void 0}var JI=MM,e3=xg,t3=TM,n3=CM,r3=wg,i3=AM,o3=kd,s3=PM,a3=LM,l3=IM,c3=UM,u3=FM,d3=kM,f3=zM,h3=VM,bg="DropdownMenu",[p3,lz]=ai(bg,[wM]),gn=wM(),[m3,jM]=p3(bg),WM=t=>{const{__scopeDropdownMenu:e,children:n,dir:r,open:i,defaultOpen:o,onOpenChange:s,modal:a=!0}=t,l=gn(e),c=S.useRef(null),[u=!1,f]=ni({prop:i,defaultProp:o,onChange:s});return _.jsx(m3,{scope:e,triggerId:mr(),triggerRef:c,contentId:mr(),open:u,onOpenChange:f,onOpenToggle:S.useCallback(()=>f(d=>!d),[f]),modal:a,children:_.jsx(JI,{...l,open:u,onOpenChange:f,dir:r,modal:a,children:n})})};WM.displayName=bg;var $M="DropdownMenuTrigger",XM=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...i}=t,o=jM($M,n),s=gn(n);return _.jsx(e3,{asChild:!0,...s,children:_.jsx(Oe.button,{type:"button",id:o.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":o.open?o.contentId:void 0,"data-state":o.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...i,ref:md(e,o.triggerRef),onPointerDown:he(t.onPointerDown,a=>{!r&&a.button===0&&a.ctrlKey===!1&&(o.onOpenToggle(),o.open||a.preventDefault())}),onKeyDown:he(t.onKeyDown,a=>{r||(["Enter"," "].includes(a.key)&&o.onOpenToggle(),a.key==="ArrowDown"&&o.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(a.key)&&a.preventDefault())})})})});XM.displayName=$M;var g3="DropdownMenuPortal",YM=t=>{const{__scopeDropdownMenu:e,...n}=t,r=gn(e);return _.jsx(t3,{...r,...n})};YM.displayName=g3;var qM="DropdownMenuContent",KM=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=jM(qM,n),o=gn(n),s=S.useRef(!1);return _.jsx(n3,{id:i.contentId,"aria-labelledby":i.triggerId,...o,...r,ref:e,onCloseAutoFocus:he(t.onCloseAutoFocus,a=>{var l;s.current||(l=i.triggerRef.current)==null||l.focus(),s.current=!1,a.preventDefault()}),onInteractOutside:he(t.onInteractOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0,u=l.button===2||c;(!i.modal||u)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});KM.displayName=qM;var v3="DropdownMenuGroup",QM=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(r3,{...i,...r,ref:e})});QM.displayName=v3;var x3="DropdownMenuLabel",ZM=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(i3,{...i,...r,ref:e})});ZM.displayName=x3;var y3="DropdownMenuItem",JM=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(o3,{...i,...r,ref:e})});JM.displayName=y3;var _3="DropdownMenuCheckboxItem",eb=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(s3,{...i,...r,ref:e})});eb.displayName=_3;var S3="DropdownMenuRadioGroup",w3=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(a3,{...i,...r,ref:e})});w3.displayName=S3;var E3="DropdownMenuRadioItem",tb=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(l3,{...i,...r,ref:e})});tb.displayName=E3;var M3="DropdownMenuItemIndicator",nb=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(c3,{...i,...r,ref:e})});nb.displayName=M3;var b3="DropdownMenuSeparator",rb=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(u3,{...i,...r,ref:e})});rb.displayName=b3;var T3="DropdownMenuArrow",C3=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(d3,{...i,...r,ref:e})});C3.displayName=T3;var A3="DropdownMenuSubTrigger",ib=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(f3,{...i,...r,ref:e})});ib.displayName=A3;var R3="DropdownMenuSubContent",ob=S.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=gn(n);return _.jsx(h3,{...i,...r,ref:e,style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});ob.displayName=R3;var P3=WM,N3=XM,L3=YM,sb=KM,D3=QM,ab=ZM,lb=JM,cb=eb,ub=tb,db=nb,fb=rb,hb=ib,pb=ob;const mb=P3,gb=N3,I3=D3,O3=S.forwardRef(({className:t,inset:e,children:n,...r},i)=>_.jsxs(hb,{ref:i,className:Ye("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",e&&"pl-8",t),...r,children:[n,_.jsx(FR,{className:"ml-auto h-4 w-4"})]}));O3.displayName=hb.displayName;const U3=S.forwardRef(({className:t,...e},n)=>_.jsx(pb,{ref:n,className:Ye("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...e}));U3.displayName=pb.displayName;const Tg=S.forwardRef(({className:t,sideOffset:e=4,...n},r)=>_.jsx(L3,{children:_.jsx(sb,{ref:r,sideOffset:e,className:Ye("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})}));Tg.displayName=sb.displayName;const bs=S.forwardRef(({className:t,inset:e,...n},r)=>_.jsx(lb,{ref:r,className:Ye("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e&&"pl-8",t),...n}));bs.displayName=lb.displayName;const F3=S.forwardRef(({className:t,children:e,checked:n,...r},i)=>_.jsxs(cb,{ref:i,className:Ye("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:n,...r,children:[_.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:_.jsx(db,{children:_.jsx(Du,{className:"h-4 w-4"})})}),e]}));F3.displayName=cb.displayName;const k3=S.forwardRef(({className:t,children:e,...n},r)=>_.jsxs(ub,{ref:r,className:Ye("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[_.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:_.jsx(db,{children:_.jsx(BR,{className:"h-2 w-2 fill-current"})})}),e]}));k3.displayName=ub.displayName;const vb=S.forwardRef(({className:t,inset:e,...n},r)=>_.jsx(ab,{ref:r,className:Ye("px-2 py-1.5 text-sm font-semibold",e&&"pl-8",t),...n}));vb.displayName=ab.displayName;const xb=S.forwardRef(({className:t,...e},n)=>_.jsx(fb,{ref:n,className:Ye("-mx-1 my-1 h-px bg-muted",t),...e}));xb.displayName=fb.displayName;const Pp=({currentTheme:t,onThemeChange:e,variant:n="default",scope:r="global"})=>{const[i,o]=S.useState(!1),s=a=>{r==="global"?eM(a):eI(a),e(a),o(!1)};return n==="compact"?_.jsxs(mb,{children:[_.jsx(gb,{asChild:!0,children:_.jsxs(pt,{variant:"outline",size:"sm",className:"h-8 border border-black shadow-lg bg-white dark:bg-gray-900",children:[_.jsx(f0,{className:"h-4 w-4 mr-1"}),_.jsx("span",{children:"Theme"})]})}),_.jsxs(Tg,{className:"w-56",children:[_.jsx(vb,{children:"Select Theme"}),_.jsx(xb,{}),_.jsx(I3,{className:"max-h-[calc(100vh-120px)] overflow-y-auto",children:Vu.map(a=>_.jsxs(bs,{className:"flex items-center justify-between cursor-pointer",onClick:()=>s(a.name),children:[_.jsx("span",{children:a.label}),t===a.name&&_.jsx(Du,{className:"h-4 w-4 ml-2"})]},a.name))})]})]}):_.jsxs(fM,{open:i,onOpenChange:o,children:[_.jsx(hM,{asChild:!0,children:_.jsxs(pt,{variant:"ghost",size:"sm",className:"text-primary-foreground hover:bg-primary/20",children:[_.jsx(f0,{className:"h-5 w-5 mr-2"}),_.jsx("span",{children:"Theme"})]})}),_.jsx(vg,{className:"w-64 p-2",children:_.jsxs("div",{className:"space-y-1",children:[_.jsx("h4",{className:"font-medium mb-2 pl-2",children:"Select Theme"}),_.jsx("div",{className:"max-h-[calc(100vh-200px)] overflow-y-auto",children:Vu.map(a=>_.jsxs("button",{className:`w-full flex items-center justify-between px-2 py-2 text-sm rounded-md ${t===a.name?"bg-primary text-primary-foreground":"hover:bg-muted"}`,onClick:()=>s(a.name),children:[_.jsx("div",{className:"flex items-center",children:_.jsx("span",{children:a.label})}),t===a.name&&_.jsx(Du,{className:"h-4 w-4"})]},a.name))})]})})]})},B3=()=>{const[t,e]=S.useState(!1),[n,r]=S.useState(Gu()),[i,o]=S.useState(!1);return _.jsxs("header",{className:"bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between border-b border-primary/10",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(VR,{className:"h-6 w-6"}),_.jsx("h1",{className:"text-xl font-bold",children:"CreateX"})]}),_.jsx("button",{className:"md:hidden text-primary-foreground",onClick:()=>o(!i),children:_.jsx(WR,{className:"h-6 w-6"})}),_.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[_.jsxs(pt,{variant:"ghost",size:"sm",className:"text-primary-foreground hover:bg-primary/20",onClick:()=>e(!0),children:[_.jsx(c0,{className:"h-5 w-5 mr-2"}),_.jsx("span",{children:"Tutorial"})]}),_.jsx(Pp,{currentTheme:n,onThemeChange:r}),_.jsxs(pt,{variant:"ghost",size:"sm",className:"text-primary-foreground hover:bg-primary/20",children:[_.jsx(u0,{className:"h-5 w-5 mr-2"}),_.jsx("span",{children:"GitHub"})]}),_.jsx(pt,{variant:"ghost",size:"sm",className:"text-primary-foreground hover:bg-primary/20",children:_.jsx(h0,{className:"h-5 w-5"})}),_.jsx("a",{href:"https://www.instagram.com/21xengineers/",children:_.jsx("img",{src:"https://scontent.cdninstagram.com/v/t51.2885-19/487394471_562033109622064_314570516759369498_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=104&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=GKtcBDp0xL4Q7kNvgGn8KZa&_nc_oc=AdkSLKEaNfKen_6o6MzoOwGYnqlc0EiKxTNNpcvTw33tpK9MlmYc2eWKs9k4q2ffDOM&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYGR4-TjDGYrS9T2LuQ0GMWq7MeR-p7E9k7uwr_06228HA&oe=67F033FD",alt:"21xE",className:"h-10 rounded-full"})})]}),i&&_.jsxs("div",{className:"absolute top-16 right-6 bg-primary p-4 rounded-lg shadow-lg flex flex-col items-start gap-3 md:hidden",children:[_.jsxs(pt,{variant:"ghost",size:"sm",className:"text-primary-foreground hover:bg-primary/20",onClick:()=>e(!0),children:[_.jsx(c0,{className:"h-5 w-5 mr-2"}),_.jsx("span",{children:"Tutorial"})]}),_.jsx(Pp,{currentTheme:n,onThemeChange:r}),_.jsxs(pt,{variant:"ghost",size:"sm",className:"text-primary-foreground hover:bg-primary/20",children:[_.jsx(u0,{className:"h-5 w-5 mr-2"}),_.jsx("span",{children:"GitHub"})]}),_.jsx(pt,{variant:"ghost",size:"sm",className:"text-primary-foreground hover:bg-primary/20",children:_.jsx(h0,{className:"h-5 w-5"})}),_.jsx("a",{href:"https://www.instagram.com/21xengineers/",children:_.jsx("img",{src:"https://scontent.cdninstagram.com/v/t51.2885-19/487394471_562033109622064_314570516759369498_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=104&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=GKtcBDp0xL4Q7kNvgGn8KZa&_nc_oc=AdkSLKEaNfKen_6o6MzoOwGYnqlc0EiKxTNNpcvTw33tpK9MlmYc2eWKs9k4q2ffDOM&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYGR4-TjDGYrS9T2LuQ0GMWq7MeR-p7E9k7uwr_06228HA&oe=67F033FD",alt:"21xE",className:"h-10 rounded-full"})})]}),_.jsx(ZD,{isOpen:t,onClose:()=>e(!1)})]})},z3=({code:t})=>{const{toast:e}=fa(),n=()=>{navigator.clipboard.writeText(t),e({title:"Code copied",description:"Code has been copied to clipboard",duration:2e3})};return _.jsxs("div",{className:"flex flex-col h-full",children:[_.jsxs("div",{className:"bg-muted py-2 px-4 border-b flex items-center justify-between",children:[_.jsx("h2",{className:"font-semibold",children:"Generated Code"}),_.jsxs(pt,{variant:"ghost",size:"sm",onClick:n,children:[_.jsx(_w,{className:"h-4 w-4 mr-2"}),"Copy"]})]}),_.jsx("div",{className:"flex-1 overflow-auto bg-muted/50 p-4",children:_.jsx("pre",{className:"text-sm font-mono",children:t})})]})},H3=({output:t,currentTheme:e="default"})=>{const n=S.useRef(null),{toast:r}=fa();S.useEffect(()=>{var a;if(t&&n.current)try{const l=n.current,c=l.contentDocument||((a=l.contentWindow)==null?void 0:a.document);c&&(c.open(),c.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Preview</title>
                <style>
                  :root {
                    color-scheme: light dark;
                  }
                  
                  body { 
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    margin: 0;
                    padding: 16px;
                    line-height: 1.5;
                  }
                  
                  * {
                    box-sizing: border-box;
                  }
                  
                  img {
                    max-width: 100%;
                    height: auto;
                  }
                  
                  pre, code {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                    font-size: 0.9em;
                    background: rgba(0,0,0,0.05);
                    border-radius: 4px;
                    padding: 0.2em 0.4em;
                  }
                  
                  pre {
                    padding: 1em;
                    overflow-x: auto;
                  }
                  
                  pre code {
                    background: transparent;
                    padding: 0;
                  }
                  
                  a {
                    color: #2563eb;
                    text-decoration: none;
                  }
                  
                  a:hover {
                    text-decoration: underline;
                  }
                  
                  button, input, select, textarea {
                    font-family: inherit;
                  }
                  
                  h1, h2, h3, h4, h5, h6 {
                    margin-top: 1.5em;
                    margin-bottom: 0.5em;
                    line-height: 1.25;
                  }
                  
                  h1:first-child, h2:first-child, h3:first-child {
                    margin-top: 0;
                  }
                  
                  p {
                    margin-top: 0;
                    margin-bottom: 1em;

                  /* Theme: Neubrutalism */
                  .theme-neubrutalism {
                    background-color: white;
                    color: black;
                    font-family: sans-serif;
                  }
                  
                  .theme-neubrutalism button, 
                  .theme-neubrutalism input, 
                  .theme-neubrutalism select {
                    border: 2px solid black;
                    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
                    transition: all 0.2s;
                  }
                  
                  /* Theme: Claymorphism */
                  .theme-claymorphism {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-claymorphism button, 
                  .theme-claymorphism .card {
                    box-shadow: 5px 5px 20px rgba(0,0,0,0.07), -5px -5px 20px rgba(255,255,255,0.7);
                    background-color: rgba(255,255,255,0.7);
                    border: 1px solid rgba(0,0,0,0.1);
                  }
                  
                  /* Theme: Glassmorphism */
                  .theme-glassmorphism {
                    background-image: linear-gradient(45deg, #a5f3fc, #c4b5fd);
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-glassmorphism button, 
                  .theme-glassmorphism .card {
                    backdrop-filter: blur(10px);
                    background-color: rgba(255,255,255,0.3);
                    border: 1px solid rgba(255,255,255,0.4);
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                  }
                  
                  /* Theme: Skeumorphism */
                  .theme-skeumorphism {
                    background-color: #fafafa;
                    color: #1a1a1a;
                    font-family: serif;
                  }
                  
                  .theme-skeumorphism button {
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.3), 0 3px 7px rgba(0,0,0,0.1);
                    background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), transparent);
                  }
                  
                  /* Theme: Cyberpunk */
                  .theme-cyberpunk {
                    background-color: #0c0c14;
                    background-image: linear-gradient(0deg, #0c0c14 0%, #0f172a 100%);
                    color: #f8fafc;
                    font-family: monospace;
                  }
                  
                  .theme-cyberpunk h1, 
                  .theme-cyberpunk h2, 
                  .theme-cyberpunk h3 {
                    color: #ec4899;
                  }
                  
                  .theme-cyberpunk button {
                    border: 1px solid #ec4899;
                    color: #ec4899;
                    box-shadow: 0 0 10px rgba(255,0,245,0.7);
                  }
                  
                  /* Theme: Neomorphism */
                  .theme-neomorphism {
                    background-color: #e0e5ec;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-neomorphism button, 
                  .theme-neomorphism .card {
                    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
                    background-color: #e0e5ec;
                    border: 0;
                  }
                  
                  /* Theme: Hello Kitty */
                  .theme-hello-kitty {
                    background-color: #fff5f7;
                    color: #4a1d2a;
                    font-family: sans-serif;
                    background-image: 
                      radial-gradient(circle at 20% 20%, rgba(255, 182, 193, 0.3) 0%, transparent 30%), 
                      radial-gradient(circle at 80% 80%, rgba(255, 182, 193, 0.3) 0%, transparent 30%);
                  }
                  
                  .theme-hello-kitty h1, 
                  .theme-hello-kitty h2, 
                  .theme-hello-kitty h3 {
                    color: #f472b6;
                  }
                  
                  .theme-hello-kitty button {
                    border-radius: 9999px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    border: 2px solid rgba(255,255,255,0.5);
                  }
                  
                  /* Theme: 3D */
                  .theme-3d {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  /* Theme: Minimalism */
                  .theme-minimalism {
                    background-color: white;
                    color: black;
                    font-family: sans-serif;
                  }
                  
                  .theme-minimalism button {
                    border-radius: 0;
                    border: 0;
                    box-shadow: none;
                  }
                  
                  /* Theme: Material Design */
                  .theme-material-design {
                    background-color: #fafafa;
                    color: #333333;
                    font-family: sans-serif;
                  }
                  
                  .theme-material-design button {
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    transition: all 0.2s;
                  }
                  
                  /* Theme: Flat Design */
                  .theme-flat-design {
                    background-color: #f8fafc;
                    color: #334155;
                    font-family: sans-serif;
                  }
                  
                  .theme-flat-design button {
                    box-shadow: none;
                    border: 0;
                  }
                  
                  /* Theme: Dark Mode UI */
                  .theme-dark-mode {
                    background-color: #1a202c;
                    color: #e2e8f0;
                    font-family: sans-serif;
                  }
                  
                  .theme-dark-mode button {
                    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
                    border: 1px solid #4a5568;
                  }
                  
                  /* Theme: Corporate Aesthetics */
                  .theme-corporate {
                    background-color: white;
                    color: #334155;
                    font-family: serif;
                  }
                  
                  .theme-corporate button {
                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                    border: 1px solid #e2e8f0;
                    font-weight: 500;
                  }
                </style>
              </head>
              <body class="theme-${e}">
                ${t}
              </body>
            </html>
          `),c.close())}catch(l){console.error("Error rendering output:",l),r({variant:"destructive",title:"Rendering Error",description:"Failed to render the output. The generated code may have errors."})}},[t,r,e]);const i=()=>{var a;if(n.current)try{const l=n.current,c=l.contentDocument||((a=l.contentWindow)==null?void 0:a.document);c&&(c.open(),c.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Preview</title>
                <style>
                  :root {
                    color-scheme: light dark;
                  }
                  
                  body { 
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    margin: 0;
                    padding: 16px;
                    line-height: 1.5;
                  }
                  
                  * {
                    box-sizing: border-box;
                  }
                  
                  img {
                    max-width: 100%;
                    height: auto;
                  }
                  
                  pre, code {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                    font-size: 0.9em;
                    background: rgba(0,0,0,0.05);
                    border-radius: 4px;
                    padding: 0.2em 0.4em;
                  }
                  
                  pre {
                    padding: 1em;
                    overflow-x: auto;
                  }
                  
                  pre code {
                    background: transparent;
                    padding: 0;
                  }
                  
                  a {
                    color: #2563eb;
                    text-decoration: none;
                  }
                  
                  a:hover {
                    text-decoration: underline;
                  }
                  
                  button, input, select, textarea {
                    font-family: inherit;
                  }
                  
                  h1, h2, h3, h4, h5, h6 {
                    margin-top: 1.5em;
                    margin-bottom: 0.5em;
                    line-height: 1.25;
                  }
                  
                  h1:first-child, h2:first-child, h3:first-child {
                    margin-top: 0;
                  }
                  
                  p {
                    margin-top: 0;
                    margin-bottom: 1em;

                  /* Theme: Neubrutalism */
                  .theme-neubrutalism {
                    background-color: white;
                    color: black;
                    font-family: sans-serif;
                  }
                  
                  .theme-neubrutalism button, 
                  .theme-neubrutalism input, 
                  .theme-neubrutalism select {
                    border: 2px solid black;
                    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
                    transition: all 0.2s;
                  }
                  
                  /* Theme: Claymorphism */
                  .theme-claymorphism {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-claymorphism button, 
                  .theme-claymorphism .card {
                    box-shadow: 5px 5px 20px rgba(0,0,0,0.07), -5px -5px 20px rgba(255,255,255,0.7);
                    background-color: rgba(255,255,255,0.7);
                    border: 1px solid rgba(0,0,0,0.1);
                  }
                  
                  /* Theme: Glassmorphism */
                  .theme-glassmorphism {
                    background-image: linear-gradient(45deg, #a5f3fc, #c4b5fd);
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-glassmorphism button, 
                  .theme-glassmorphism .card {
                    backdrop-filter: blur(10px);
                    background-color: rgba(255,255,255,0.3);
                    border: 1px solid rgba(255,255,255,0.4);
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                  }
                  
                  /* Theme: Skeumorphism */
                  .theme-skeumorphism {
                    background-color: #fafafa;
                    color: #1a1a1a;
                    font-family: serif;
                  }
                  
                  .theme-skeumorphism button {
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.3), 0 3px 7px rgba(0,0,0,0.1);
                    background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), transparent);
                  }
                  
                  /* Theme: Cyberpunk */
                  .theme-cyberpunk {
                    background-color: #0c0c14;
                    background-image: linear-gradient(0deg, #0c0c14 0%, #0f172a 100%);
                    color: #f8fafc;
                    font-family: monospace;
                  }
                  
                  .theme-cyberpunk h1, 
                  .theme-cyberpunk h2, 
                  .theme-cyberpunk h3 {
                    color: #ec4899;
                  }
                  
                  .theme-cyberpunk button {
                    border: 1px solid #ec4899;
                    color: #ec4899;
                    box-shadow: 0 0 10px rgba(255,0,245,0.7);
                  }
                  
                  /* Theme: Neomorphism */
                  .theme-neomorphism {
                    background-color: #e0e5ec;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-neomorphism button, 
                  .theme-neomorphism .card {
                    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
                    background-color: #e0e5ec;
                    border: 0;
                  }
                  
                  /* Theme: Hello Kitty */
                  .theme-hello-kitty {
                    background-color: #fff5f7;
                    color: #4a1d2a;
                    font-family: sans-serif;
                    background-image: 
                      radial-gradient(circle at 20% 20%, rgba(255, 182, 193, 0.3) 0%, transparent 30%), 
                      radial-gradient(circle at 80% 80%, rgba(255, 182, 193, 0.3) 0%, transparent 30%);
                  }
                  
                  .theme-hello-kitty h1, 
                  .theme-hello-kitty h2, 
                  .theme-hello-kitty h3 {
                    color: #f472b6;
                  }
                  
                  .theme-hello-kitty button {
                    border-radius: 9999px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    border: 2px solid rgba(255,255,255,0.5);
                  }
                  
                  /* Theme: 3D */
                  .theme-3d {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  /* Theme: Minimalism */
                  .theme-minimalism {
                    background-color: white;
                    color: black;
                    font-family: sans-serif;
                  }
                  
                  .theme-minimalism button {
                    border-radius: 0;
                    border: 0;
                    box-shadow: none;
                  }
                  
                  /* Theme: Material Design */
                  .theme-material-design {
                    background-color: #fafafa;
                    color: #333333;
                    font-family: sans-serif;
                  }
                  
                  .theme-material-design button {
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    transition: all 0.2s;
                  }
                  
                  /* Theme: Flat Design */
                  .theme-flat-design {
                    background-color: #f8fafc;
                    color: #334155;
                    font-family: sans-serif;
                  }
                  
                  .theme-flat-design button {
                    box-shadow: none;
                    border: 0;
                  }
                  
                  /* Theme: Dark Mode UI */
                  .theme-dark-mode {
                    background-color: #1a202c;
                    color: #e2e8f0;
                    font-family: sans-serif;
                  }
                  
                  .theme-dark-mode button {
                    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
                    border: 1px solid #4a5568;
                  }
                  
                  /* Theme: Corporate Aesthetics */
                  .theme-corporate {
                    background-color: white;
                    color: #334155;
                    font-family: serif;
                  }
                  
                  .theme-corporate button {
                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                    border: 1px solid #e2e8f0;
                    font-weight: 500;
                  }
                </style>
              </head>
              <body class="theme-${e}">
                ${t}
              </body>
            </html>
          `),c.close()),r({title:"Code executed",description:"The code has been executed in the preview."})}catch(l){console.error("Error running code:",l),r({variant:"destructive",title:"Execution Error",description:"Failed to run the code. The generated code may have errors."})}},o=()=>{n.current&&(n.current.src="about:blank",setTimeout(()=>{var a;if(t&&n.current){const l=n.current,c=l.contentDocument||((a=l.contentWindow)==null?void 0:a.document);c&&(c.open(),c.write(`
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <title>Preview</title>
                  <style>
                    :root {
                      color-scheme: light dark;
                    }
                    
                    body { 
                      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                      margin: 0;
                      padding: 16px;
                      line-height: 1.5;
                    }
                    
                    * {
                      box-sizing: border-box;
                    }
                    
                    img {
                      max-width: 100%;
                      height: auto;
                    }
                    
                    pre, code {
                      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                      font-size: 0.9em;
                      background: rgba(0,0,0,0.05);
                      border-radius: 4px;
                      padding: 0.2em 0.4em;
                    }
                    
                    pre {
                      padding: 1em;
                      overflow-x: auto;
                    }
                    
                    pre code {
                      background: transparent;
                      padding: 0;
                    }
                    
                    a {
                      color: #2563eb;
                      text-decoration: none;
                    }
                    
                    a:hover {
                      text-decoration: underline;
                    }
                    
                    button, input, select, textarea {
                      font-family: inherit;
                    }
                    
                    h1, h2, h3, h4, h5, h6 {
                      margin-top: 1.5em;
                      margin-bottom: 0.5em;
                      line-height: 1.25;
                    }
                    
                    h1:first-child, h2:first-child, h3:first-child {
                      margin-top: 0;
                    }
                    
                    p {
                      margin-top: 0;
                      margin-bottom: 1em;

                  /* Theme: Neubrutalism */
                  .theme-neubrutalism {
                    background-color: white;
                    color: black;
                    font-family: sans-serif;
                  }
                  
                  .theme-neubrutalism button, 
                  .theme-neubrutalism input, 
                  .theme-neubrutalism select {
                    border: 2px solid black;
                    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
                    transition: all 0.2s;
                  }
                  
                  /* Theme: Claymorphism */
                  .theme-claymorphism {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-claymorphism button, 
                  .theme-claymorphism .card {
                    box-shadow: 5px 5px 20px rgba(0,0,0,0.07), -5px -5px 20px rgba(255,255,255,0.7);
                    background-color: rgba(255,255,255,0.7);
                    border: 1px solid rgba(0,0,0,0.1);
                  }
                  
                  /* Theme: Glassmorphism */
                  .theme-glassmorphism {
                    background-image: linear-gradient(45deg, #a5f3fc, #c4b5fd);
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-glassmorphism button, 
                  .theme-glassmorphism .card {
                    backdrop-filter: blur(10px);
                    background-color: rgba(255,255,255,0.3);
                    border: 1px solid rgba(255,255,255,0.4);
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                  }
                  
                  /* Theme: Skeumorphism */
                  .theme-skeumorphism {
                    background-color: #fafafa;
                    color: #1a1a1a;
                    font-family: serif;
                  }
                  
                  .theme-skeumorphism button {
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.3), 0 3px 7px rgba(0,0,0,0.1);
                    background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), transparent);
                  }
                  
                  /* Theme: Cyberpunk */
                  .theme-cyberpunk {
                    background-color: #0c0c14;
                    background-image: linear-gradient(0deg, #0c0c14 0%, #0f172a 100%);
                    color: #f8fafc;
                    font-family: monospace;
                  }
                  
                  .theme-cyberpunk h1, 
                  .theme-cyberpunk h2, 
                  .theme-cyberpunk h3 {
                    color: #ec4899;
                  }
                  
                  .theme-cyberpunk button {
                    border: 1px solid #ec4899;
                    color: #ec4899;
                    box-shadow: 0 0 10px rgba(255,0,245,0.7);
                  }
                  
                  /* Theme: Neomorphism */
                  .theme-neomorphism {
                    background-color: #e0e5ec;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  .theme-neomorphism button, 
                  .theme-neomorphism .card {
                    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
                    background-color: #e0e5ec;
                    border: 0;
                  }
                  
                  /* Theme: Hello Kitty */
                  .theme-hello-kitty {
                    background-color: #fff5f7;
                    color: #4a1d2a;
                    font-family: sans-serif;
                    background-image: 
                      radial-gradient(circle at 20% 20%, rgba(255, 182, 193, 0.3) 0%, transparent 30%), 
                      radial-gradient(circle at 80% 80%, rgba(255, 182, 193, 0.3) 0%, transparent 30%);
                  }
                  
                  .theme-hello-kitty h1, 
                  .theme-hello-kitty h2, 
                  .theme-hello-kitty h3 {
                    color: #f472b6;
                  }
                  
                  .theme-hello-kitty button {
                    border-radius: 9999px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    border: 2px solid rgba(255,255,255,0.5);
                  }
                  
                  /* Theme: 3D */
                  .theme-3d {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    font-family: sans-serif;
                  }
                  
                  /* Theme: Minimalism */
                  .theme-minimalism {
                    background-color: white;
                    color: black;
                    font-family: sans-serif;
                  }
                  
                  .theme-minimalism button {
                    border-radius: 0;
                    border: 0;
                    box-shadow: none;
                  }
                  
                  /* Theme: Material Design */
                  .theme-material-design {
                    background-color: #fafafa;
                    color: #333333;
                    font-family: sans-serif;
                  }
                  
                  .theme-material-design button {
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    transition: all 0.2s;
                  }
                  
                  /* Theme: Flat Design */
                  .theme-flat-design {
                    background-color: #f8fafc;
                    color: #334155;
                    font-family: sans-serif;
                  }
                  
                  .theme-flat-design button {
                    box-shadow: none;
                    border: 0;
                  }
                  
                  /* Theme: Dark Mode UI */
                  .theme-dark-mode {
                    background-color: #1a202c;
                    color: #e2e8f0;
                    font-family: sans-serif;
                  }
                  
                  .theme-dark-mode button {
                    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
                    border: 1px solid #4a5568;
                  }
                  
                  /* Theme: Corporate Aesthetics */
                  .theme-corporate {
                    background-color: white;
                    color: #334155;
                    font-family: serif;
                  }
                  
                  .theme-corporate button {
                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                    border: 1px solid #e2e8f0;
                    font-weight: 500;
                  }
                </style>
              </head>
              <body class="theme-${e}">
                ${t}
              </body>
            </html>
          `),c.close())}r({title:"Preview refreshed",description:"The preview has been refreshed."})},100))},s=()=>{if(n.current)try{const a=n.current;a.requestFullscreen&&a.requestFullscreen()}catch(a){console.error("Error entering fullscreen:",a),r({variant:"destructive",title:"Fullscreen Error",description:"Failed to enter fullscreen mode."})}};return _.jsxs("div",{className:"flex flex-col h-full bg-white dark:bg-gray-950 overflow-hidden",children:[_.jsxs("div",{className:"bg-muted py-2 px-4 border-b flex items-center justify-between",children:[_.jsx("h2",{className:"font-semibold",children:"Output Preview"}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx(pt,{variant:"ghost",size:"sm",onClick:i,className:"hover:bg-gray-100 dark:hover:bg-gray-800",children:_.jsx(YR,{className:"h-4 w-4 mr-2"})}),_.jsx(pt,{variant:"ghost",size:"sm",onClick:o,className:"hover:bg-gray-100 dark:hover:bg-gray-800",children:_.jsx(KR,{className:"h-4 w-4 mr-2"})}),_.jsxs(pt,{variant:"ghost",size:"sm",onClick:s,className:"hover:bg-gray-100 dark:hover:bg-gray-800",children:[_.jsx(jR,{className:"h-4 w-4 mr-2"}),"Fullscreen"]})]})]}),_.jsx("div",{className:"flex-1 overflow-hidden bg-white dark:bg-gray-900 rounded-md shadow-inner",children:t?_.jsx("iframe",{ref:n,title:"Output Preview",className:"w-full h-full border-none bg-white dark:bg-gray-900",sandbox:"allow-scripts allow-same-origin"}):_.jsxs("div",{className:"h-full flex flex-col items-center justify-center p-6 text-center",children:[_.jsx("div",{className:"rounded-full bg-muted/50 p-4 mb-4",children:_.jsx(Sw,{className:"h-8 w-8 text-muted-foreground"})}),_.jsx("p",{className:"text-muted-foreground font-medium",children:"Generate code to see the preview"}),_.jsx("p",{className:"text-sm text-muted-foreground max-w-md mt-2",children:"Enter a prompt below and click the send button to generate HTML that will be displayed here."})]})})]})},yb=S.forwardRef(({className:t,...e},n)=>_.jsx("textarea",{className:Ye("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));yb.displayName="Textarea";function ex(t,[e,n]){return Math.min(n,Math.max(e,t))}function _b(t){const e=S.useRef({value:t,previous:t});return S.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}var V3=[" ","Enter","ArrowUp","ArrowDown"],G3=[" ","Enter"],jl="Select",[Bd,zd,j3]=gd(jl),[va,cz]=ai(jl,[j3,Ji]),Hd=Ji(),[W3,to]=va(jl),[$3,X3]=va(jl),Sb=t=>{const{__scopeSelect:e,children:n,open:r,defaultOpen:i,onOpenChange:o,value:s,defaultValue:a,onValueChange:l,dir:c,name:u,autoComplete:f,disabled:d,required:g,form:v}=t,m=Hd(e),[p,h]=S.useState(null),[x,y]=S.useState(null),[w,b]=S.useState(!1),T=Id(c),[E=!1,D]=ni({prop:r,defaultProp:i,onChange:o}),[M,C]=ni({prop:s,defaultProp:a,onChange:l}),B=S.useRef(null),F=p?v||!!p.closest("form"):!0,[Q,N]=S.useState(new Set),z=Array.from(Q).map(k=>k.props.value).join(";");return _.jsx(rg,{...m,children:_.jsxs(W3,{required:g,scope:e,trigger:p,onTriggerChange:h,valueNode:x,onValueNodeChange:y,valueNodeHasChildren:w,onValueNodeHasChildrenChange:b,contentId:mr(),value:M,onValueChange:C,open:E,onOpenChange:D,dir:T,triggerPointerDownPosRef:B,disabled:d,children:[_.jsx(Bd.Provider,{scope:e,children:_.jsx($3,{scope:t.__scopeSelect,onNativeOptionAdd:S.useCallback(k=>{N($=>new Set($).add(k))},[]),onNativeOptionRemove:S.useCallback(k=>{N($=>{const L=new Set($);return L.delete(k),L})},[]),children:n})}),F?_.jsxs($b,{"aria-hidden":!0,required:g,tabIndex:-1,name:u,autoComplete:f,value:M,onChange:k=>C(k.target.value),disabled:d,form:v,children:[M===void 0?_.jsx("option",{value:""}):null,Array.from(Q)]},z):null]})})};Sb.displayName=jl;var wb="SelectTrigger",Eb=S.forwardRef((t,e)=>{const{__scopeSelect:n,disabled:r=!1,...i}=t,o=Hd(n),s=to(wb,n),a=s.disabled||r,l=Je(e,s.onTriggerChange),c=zd(n),u=S.useRef("touch"),[f,d,g]=Xb(m=>{const p=c().filter(y=>!y.disabled),h=p.find(y=>y.value===s.value),x=Yb(p,m,h);x!==void 0&&s.onValueChange(x.value)}),v=m=>{a||(s.onOpenChange(!0),g()),m&&(s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})};return _.jsx(kl,{asChild:!0,...o,children:_.jsx(Oe.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":Wb(s.value)?"":void 0,...i,ref:l,onClick:he(i.onClick,m=>{m.currentTarget.focus(),u.current!=="mouse"&&v(m)}),onPointerDown:he(i.onPointerDown,m=>{u.current=m.pointerType;const p=m.target;p.hasPointerCapture(m.pointerId)&&p.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(v(m),m.preventDefault())}),onKeyDown:he(i.onKeyDown,m=>{const p=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&d(m.key),!(p&&m.key===" ")&&V3.includes(m.key)&&(v(),m.preventDefault())})})})});Eb.displayName=wb;var Mb="SelectValue",bb=S.forwardRef((t,e)=>{const{__scopeSelect:n,className:r,style:i,children:o,placeholder:s="",...a}=t,l=to(Mb,n),{onValueNodeHasChildrenChange:c}=l,u=o!==void 0,f=Je(e,l.onValueNodeChange);return on(()=>{c(u)},[c,u]),_.jsx(Oe.span,{...a,ref:f,style:{pointerEvents:"none"},children:Wb(l.value)?_.jsx(_.Fragment,{children:s}):o})});bb.displayName=Mb;var Y3="SelectIcon",Tb=S.forwardRef((t,e)=>{const{__scopeSelect:n,children:r,...i}=t;return _.jsx(Oe.span,{"aria-hidden":!0,...i,ref:e,children:r||"▼"})});Tb.displayName=Y3;var q3="SelectPortal",Cb=t=>_.jsx(ha,{asChild:!0,...t});Cb.displayName=q3;var Uo="SelectContent",Ab=S.forwardRef((t,e)=>{const n=to(Uo,t.__scopeSelect),[r,i]=S.useState();if(on(()=>{i(new DocumentFragment)},[]),!n.open){const o=r;return o?Ho.createPortal(_.jsx(Rb,{scope:t.__scopeSelect,children:_.jsx(Bd.Slot,{scope:t.__scopeSelect,children:_.jsx("div",{children:t.children})})}),o):null}return _.jsx(Pb,{...t,ref:e})});Ab.displayName=Uo;var ir=10,[Rb,no]=va(Uo),K3="SelectContentImpl",Pb=S.forwardRef((t,e)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:o,onPointerDownOutside:s,side:a,sideOffset:l,align:c,alignOffset:u,arrowPadding:f,collisionBoundary:d,collisionPadding:g,sticky:v,hideWhenDetached:m,avoidCollisions:p,...h}=t,x=to(Uo,n),[y,w]=S.useState(null),[b,T]=S.useState(null),E=Je(e,ee=>w(ee)),[D,M]=S.useState(null),[C,B]=S.useState(null),F=zd(n),[Q,N]=S.useState(!1),z=S.useRef(!1);S.useEffect(()=>{if(y)return Dd(y)},[y]),Nd();const k=S.useCallback(ee=>{const[ge,...xe]=F().map(V=>V.ref.current),[de]=xe.slice(-1),Me=document.activeElement;for(const V of ee)if(V===Me||(V==null||V.scrollIntoView({block:"nearest"}),V===ge&&b&&(b.scrollTop=0),V===de&&b&&(b.scrollTop=b.scrollHeight),V==null||V.focus(),document.activeElement!==Me))return},[F,b]),$=S.useCallback(()=>k([D,y]),[k,D,y]);S.useEffect(()=>{Q&&$()},[Q,$]);const{onOpenChange:L,triggerPointerDownPosRef:I}=x;S.useEffect(()=>{if(y){let ee={x:0,y:0};const ge=de=>{var Me,V;ee={x:Math.abs(Math.round(de.pageX)-(((Me=I.current)==null?void 0:Me.x)??0)),y:Math.abs(Math.round(de.pageY)-(((V=I.current)==null?void 0:V.y)??0))}},xe=de=>{ee.x<=10&&ee.y<=10?de.preventDefault():y.contains(de.target)||L(!1),document.removeEventListener("pointermove",ge),I.current=null};return I.current!==null&&(document.addEventListener("pointermove",ge),document.addEventListener("pointerup",xe,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ge),document.removeEventListener("pointerup",xe,{capture:!0})}}},[y,L,I]),S.useEffect(()=>{const ee=()=>L(!1);return window.addEventListener("blur",ee),window.addEventListener("resize",ee),()=>{window.removeEventListener("blur",ee),window.removeEventListener("resize",ee)}},[L]);const[O,H]=Xb(ee=>{const ge=F().filter(Me=>!Me.disabled),xe=ge.find(Me=>Me.ref.current===document.activeElement),de=Yb(ge,ee,xe);de&&setTimeout(()=>de.ref.current.focus())}),W=S.useCallback((ee,ge,xe)=>{const de=!z.current&&!xe;(x.value!==void 0&&x.value===ge||de)&&(M(ee),de&&(z.current=!0))},[x.value]),G=S.useCallback(()=>y==null?void 0:y.focus(),[y]),Z=S.useCallback((ee,ge,xe)=>{const de=!z.current&&!xe;(x.value!==void 0&&x.value===ge||de)&&B(ee)},[x.value]),ce=r==="popper"?Np:Nb,oe=ce===Np?{side:a,sideOffset:l,align:c,alignOffset:u,arrowPadding:f,collisionBoundary:d,collisionPadding:g,sticky:v,hideWhenDetached:m,avoidCollisions:p}:{};return _.jsx(Rb,{scope:n,content:y,viewport:b,onViewportChange:T,itemRefCallback:W,selectedItem:D,onItemLeave:G,itemTextRefCallback:Z,focusSelectedItem:$,selectedItemText:C,position:r,isPositioned:Q,searchRef:O,children:_.jsx(zl,{as:ti,allowPinchZoom:!0,children:_.jsx(Bl,{asChild:!0,trapped:x.open,onMountAutoFocus:ee=>{ee.preventDefault()},onUnmountAutoFocus:he(i,ee=>{var ge;(ge=x.trigger)==null||ge.focus({preventScroll:!0}),ee.preventDefault()}),children:_.jsx(Vo,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:ee=>ee.preventDefault(),onDismiss:()=>x.onOpenChange(!1),children:_.jsx(ce,{role:"listbox",id:x.contentId,"data-state":x.open?"open":"closed",dir:x.dir,onContextMenu:ee=>ee.preventDefault(),...h,...oe,onPlaced:()=>N(!0),ref:E,style:{display:"flex",flexDirection:"column",outline:"none",...h.style},onKeyDown:he(h.onKeyDown,ee=>{const ge=ee.ctrlKey||ee.altKey||ee.metaKey;if(ee.key==="Tab"&&ee.preventDefault(),!ge&&ee.key.length===1&&H(ee.key),["ArrowUp","ArrowDown","Home","End"].includes(ee.key)){let de=F().filter(Me=>!Me.disabled).map(Me=>Me.ref.current);if(["ArrowUp","End"].includes(ee.key)&&(de=de.slice().reverse()),["ArrowUp","ArrowDown"].includes(ee.key)){const Me=ee.target,V=de.indexOf(Me);de=de.slice(V+1)}setTimeout(()=>k(de)),ee.preventDefault()}})})})})})})});Pb.displayName=K3;var Q3="SelectItemAlignedPosition",Nb=S.forwardRef((t,e)=>{const{__scopeSelect:n,onPlaced:r,...i}=t,o=to(Uo,n),s=no(Uo,n),[a,l]=S.useState(null),[c,u]=S.useState(null),f=Je(e,E=>u(E)),d=zd(n),g=S.useRef(!1),v=S.useRef(!0),{viewport:m,selectedItem:p,selectedItemText:h,focusSelectedItem:x}=s,y=S.useCallback(()=>{if(o.trigger&&o.valueNode&&a&&c&&m&&p&&h){const E=o.trigger.getBoundingClientRect(),D=c.getBoundingClientRect(),M=o.valueNode.getBoundingClientRect(),C=h.getBoundingClientRect();if(o.dir!=="rtl"){const Me=C.left-D.left,V=M.left-Me,nt=E.left-V,Ce=E.width+nt,Ne=Math.max(Ce,D.width),ye=window.innerWidth-ir,rt=ex(V,[ir,Math.max(ir,ye-Ne)]);a.style.minWidth=Ce+"px",a.style.left=rt+"px"}else{const Me=D.right-C.right,V=window.innerWidth-M.right-Me,nt=window.innerWidth-E.right-V,Ce=E.width+nt,Ne=Math.max(Ce,D.width),ye=window.innerWidth-ir,rt=ex(V,[ir,Math.max(ir,ye-Ne)]);a.style.minWidth=Ce+"px",a.style.right=rt+"px"}const B=d(),F=window.innerHeight-ir*2,Q=m.scrollHeight,N=window.getComputedStyle(c),z=parseInt(N.borderTopWidth,10),k=parseInt(N.paddingTop,10),$=parseInt(N.borderBottomWidth,10),L=parseInt(N.paddingBottom,10),I=z+k+Q+L+$,O=Math.min(p.offsetHeight*5,I),H=window.getComputedStyle(m),W=parseInt(H.paddingTop,10),G=parseInt(H.paddingBottom,10),Z=E.top+E.height/2-ir,ce=F-Z,oe=p.offsetHeight/2,ee=p.offsetTop+oe,ge=z+k+ee,xe=I-ge;if(ge<=Z){const Me=B.length>0&&p===B[B.length-1].ref.current;a.style.bottom="0px";const V=c.clientHeight-m.offsetTop-m.offsetHeight,nt=Math.max(ce,oe+(Me?G:0)+V+$),Ce=ge+nt;a.style.height=Ce+"px"}else{const Me=B.length>0&&p===B[0].ref.current;a.style.top="0px";const nt=Math.max(Z,z+m.offsetTop+(Me?W:0)+oe)+xe;a.style.height=nt+"px",m.scrollTop=ge-Z+m.offsetTop}a.style.margin=`${ir}px 0`,a.style.minHeight=O+"px",a.style.maxHeight=F+"px",r==null||r(),requestAnimationFrame(()=>g.current=!0)}},[d,o.trigger,o.valueNode,a,c,m,p,h,o.dir,r]);on(()=>y(),[y]);const[w,b]=S.useState();on(()=>{c&&b(window.getComputedStyle(c).zIndex)},[c]);const T=S.useCallback(E=>{E&&v.current===!0&&(y(),x==null||x(),v.current=!1)},[y,x]);return _.jsx(J3,{scope:n,contentWrapper:a,shouldExpandOnScrollRef:g,onScrollButtonChange:T,children:_.jsx("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:w},children:_.jsx(Oe.div,{...i,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})});Nb.displayName=Q3;var Z3="SelectPopperPosition",Np=S.forwardRef((t,e)=>{const{__scopeSelect:n,align:r="start",collisionPadding:i=ir,...o}=t,s=Hd(n);return _.jsx(wd,{...s,...o,ref:e,align:r,collisionPadding:i,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Np.displayName=Z3;var[J3,Cg]=va(Uo,{}),Lp="SelectViewport",Lb=S.forwardRef((t,e)=>{const{__scopeSelect:n,nonce:r,...i}=t,o=no(Lp,n),s=Cg(Lp,n),a=Je(e,o.onViewportChange),l=S.useRef(0);return _.jsxs(_.Fragment,{children:[_.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),_.jsx(Bd.Slot,{scope:n,children:_.jsx(Oe.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:a,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:he(i.onScroll,c=>{const u=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:d}=s;if(d!=null&&d.current&&f){const g=Math.abs(l.current-u.scrollTop);if(g>0){const v=window.innerHeight-ir*2,m=parseFloat(f.style.minHeight),p=parseFloat(f.style.height),h=Math.max(m,p);if(h<v){const x=h+g,y=Math.min(v,x),w=x-y;f.style.height=y+"px",f.style.bottom==="0px"&&(u.scrollTop=w>0?w:0,f.style.justifyContent="flex-end")}}}l.current=u.scrollTop})})})]})});Lb.displayName=Lp;var Db="SelectGroup",[eO,tO]=va(Db),nO=S.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t,i=mr();return _.jsx(eO,{scope:n,id:i,children:_.jsx(Oe.div,{role:"group","aria-labelledby":i,...r,ref:e})})});nO.displayName=Db;var Ib="SelectLabel",Ob=S.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t,i=tO(Ib,n);return _.jsx(Oe.div,{id:i.id,...r,ref:e})});Ob.displayName=Ib;var $u="SelectItem",[rO,Ub]=va($u),Fb=S.forwardRef((t,e)=>{const{__scopeSelect:n,value:r,disabled:i=!1,textValue:o,...s}=t,a=to($u,n),l=no($u,n),c=a.value===r,[u,f]=S.useState(o??""),[d,g]=S.useState(!1),v=Je(e,x=>{var y;return(y=l.itemRefCallback)==null?void 0:y.call(l,x,r,i)}),m=mr(),p=S.useRef("touch"),h=()=>{i||(a.onValueChange(r),a.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return _.jsx(rO,{scope:n,value:r,disabled:i,textId:m,isSelected:c,onItemTextChange:S.useCallback(x=>{f(y=>y||((x==null?void 0:x.textContent)??"").trim())},[]),children:_.jsx(Bd.ItemSlot,{scope:n,value:r,disabled:i,textValue:u,children:_.jsx(Oe.div,{role:"option","aria-labelledby":m,"data-highlighted":d?"":void 0,"aria-selected":c&&d,"data-state":c?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...s,ref:v,onFocus:he(s.onFocus,()=>g(!0)),onBlur:he(s.onBlur,()=>g(!1)),onClick:he(s.onClick,()=>{p.current!=="mouse"&&h()}),onPointerUp:he(s.onPointerUp,()=>{p.current==="mouse"&&h()}),onPointerDown:he(s.onPointerDown,x=>{p.current=x.pointerType}),onPointerMove:he(s.onPointerMove,x=>{var y;p.current=x.pointerType,i?(y=l.onItemLeave)==null||y.call(l):p.current==="mouse"&&x.currentTarget.focus({preventScroll:!0})}),onPointerLeave:he(s.onPointerLeave,x=>{var y;x.currentTarget===document.activeElement&&((y=l.onItemLeave)==null||y.call(l))}),onKeyDown:he(s.onKeyDown,x=>{var w;((w=l.searchRef)==null?void 0:w.current)!==""&&x.key===" "||(G3.includes(x.key)&&h(),x.key===" "&&x.preventDefault())})})})})});Fb.displayName=$u;var Ga="SelectItemText",kb=S.forwardRef((t,e)=>{const{__scopeSelect:n,className:r,style:i,...o}=t,s=to(Ga,n),a=no(Ga,n),l=Ub(Ga,n),c=X3(Ga,n),[u,f]=S.useState(null),d=Je(e,h=>f(h),l.onItemTextChange,h=>{var x;return(x=a.itemTextRefCallback)==null?void 0:x.call(a,h,l.value,l.disabled)}),g=u==null?void 0:u.textContent,v=S.useMemo(()=>_.jsx("option",{value:l.value,disabled:l.disabled,children:g},l.value),[l.disabled,l.value,g]),{onNativeOptionAdd:m,onNativeOptionRemove:p}=c;return on(()=>(m(v),()=>p(v)),[m,p,v]),_.jsxs(_.Fragment,{children:[_.jsx(Oe.span,{id:l.textId,...o,ref:d}),l.isSelected&&s.valueNode&&!s.valueNodeHasChildren?Ho.createPortal(o.children,s.valueNode):null]})});kb.displayName=Ga;var Bb="SelectItemIndicator",zb=S.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t;return Ub(Bb,n).isSelected?_.jsx(Oe.span,{"aria-hidden":!0,...r,ref:e}):null});zb.displayName=Bb;var Dp="SelectScrollUpButton",Hb=S.forwardRef((t,e)=>{const n=no(Dp,t.__scopeSelect),r=Cg(Dp,t.__scopeSelect),[i,o]=S.useState(!1),s=Je(e,r.onScrollButtonChange);return on(()=>{if(n.viewport&&n.isPositioned){let a=function(){const c=l.scrollTop>0;o(c)};const l=n.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[n.viewport,n.isPositioned]),i?_.jsx(Gb,{...t,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop-l.offsetHeight)}}):null});Hb.displayName=Dp;var Ip="SelectScrollDownButton",Vb=S.forwardRef((t,e)=>{const n=no(Ip,t.__scopeSelect),r=Cg(Ip,t.__scopeSelect),[i,o]=S.useState(!1),s=Je(e,r.onScrollButtonChange);return on(()=>{if(n.viewport&&n.isPositioned){let a=function(){const c=l.scrollHeight-l.clientHeight,u=Math.ceil(l.scrollTop)<c;o(u)};const l=n.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[n.viewport,n.isPositioned]),i?_.jsx(Gb,{...t,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop+l.offsetHeight)}}):null});Vb.displayName=Ip;var Gb=S.forwardRef((t,e)=>{const{__scopeSelect:n,onAutoScroll:r,...i}=t,o=no("SelectScrollButton",n),s=S.useRef(null),a=zd(n),l=S.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return S.useEffect(()=>()=>l(),[l]),on(()=>{var u;const c=a().find(f=>f.ref.current===document.activeElement);(u=c==null?void 0:c.ref.current)==null||u.scrollIntoView({block:"nearest"})},[a]),_.jsx(Oe.div,{"aria-hidden":!0,...i,ref:e,style:{flexShrink:0,...i.style},onPointerDown:he(i.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:he(i.onPointerMove,()=>{var c;(c=o.onItemLeave)==null||c.call(o),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:he(i.onPointerLeave,()=>{l()})})}),iO="SelectSeparator",jb=S.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t;return _.jsx(Oe.div,{"aria-hidden":!0,...r,ref:e})});jb.displayName=iO;var Op="SelectArrow",oO=S.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t,i=Hd(n),o=to(Op,n),s=no(Op,n);return o.open&&s.position==="popper"?_.jsx(Ed,{...i,...r,ref:e}):null});oO.displayName=Op;function Wb(t){return t===""||t===void 0}var $b=S.forwardRef((t,e)=>{const{value:n,...r}=t,i=S.useRef(null),o=Je(e,i),s=_b(n);return S.useEffect(()=>{const a=i.current,l=window.HTMLSelectElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==n&&u){const f=new Event("change",{bubbles:!0});u.call(a,n),a.dispatchEvent(f)}},[s,n]),_.jsx(Ul,{asChild:!0,children:_.jsx("select",{...r,ref:o,defaultValue:n})})});$b.displayName="BubbleSelect";function Xb(t){const e=rn(t),n=S.useRef(""),r=S.useRef(0),i=S.useCallback(s=>{const a=n.current+s;e(a),function l(c){n.current=c,window.clearTimeout(r.current),c!==""&&(r.current=window.setTimeout(()=>l(""),1e3))}(a)},[e]),o=S.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return S.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,o]}function Yb(t,e,n){const i=e.length>1&&Array.from(e).every(c=>c===e[0])?e[0]:e,o=n?t.indexOf(n):-1;let s=sO(t,Math.max(o,0));i.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.textValue.toLowerCase().startsWith(i.toLowerCase()));return l!==n?l:void 0}function sO(t,e){return t.map((n,r)=>t[(e+r)%t.length])}var aO=Sb,qb=Eb,lO=bb,cO=Tb,uO=Cb,Kb=Ab,dO=Lb,Qb=Ob,Zb=Fb,fO=kb,hO=zb,Jb=Hb,e1=Vb,t1=jb;const pO=aO,mO=lO,n1=S.forwardRef(({className:t,children:e,...n},r)=>_.jsxs(qb,{ref:r,className:Ye("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...n,children:[e,_.jsx(cO,{asChild:!0,children:_.jsx(yw,{className:"h-4 w-4 opacity-50"})})]}));n1.displayName=qb.displayName;const r1=S.forwardRef(({className:t,...e},n)=>_.jsx(Jb,{ref:n,className:Ye("flex cursor-default items-center justify-center py-1",t),...e,children:_.jsx(kR,{className:"h-4 w-4"})}));r1.displayName=Jb.displayName;const i1=S.forwardRef(({className:t,...e},n)=>_.jsx(e1,{ref:n,className:Ye("flex cursor-default items-center justify-center py-1",t),...e,children:_.jsx(yw,{className:"h-4 w-4"})}));i1.displayName=e1.displayName;const o1=S.forwardRef(({className:t,children:e,position:n="popper",...r},i)=>_.jsx(uO,{children:_.jsxs(Kb,{ref:i,className:Ye("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:n,...r,children:[_.jsx(r1,{}),_.jsx(dO,{className:Ye("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:e}),_.jsx(i1,{})]})}));o1.displayName=Kb.displayName;const gO=S.forwardRef(({className:t,...e},n)=>_.jsx(Qb,{ref:n,className:Ye("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...e}));gO.displayName=Qb.displayName;const ja=S.forwardRef(({className:t,children:e,...n},r)=>_.jsxs(Zb,{ref:r,className:Ye("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[_.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:_.jsx(hO,{children:_.jsx(Du,{className:"h-4 w-4"})})}),_.jsx(fO,{children:e})]}));ja.displayName=Zb.displayName;const vO=S.forwardRef(({className:t,...e},n)=>_.jsx(t1,{ref:n,className:Ye("-mx-1 my-1 h-px bg-muted",t),...e}));vO.displayName=t1.displayName;var xO="Label",s1=S.forwardRef((t,e)=>_.jsx(Oe.label,{...t,ref:e,onMouseDown:n=>{var i;n.target.closest("button, input, select, textarea")||((i=t.onMouseDown)==null||i.call(t,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));s1.displayName=xO;var a1=s1;const yO=Xm("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),fs=S.forwardRef(({className:t,...e},n)=>_.jsx(a1,{ref:n,className:Ye(yO(),t),...e}));fs.displayName=a1.displayName;const Up=S.forwardRef(({className:t,type:e,...n},r)=>_.jsx("input",{type:e,className:Ye("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...n}));Up.displayName="Input";var Ag="Tabs",[_O,uz]=ai(Ag,[Ud]),l1=Ud(),[SO,Rg]=_O(Ag),c1=S.forwardRef((t,e)=>{const{__scopeTabs:n,value:r,onValueChange:i,defaultValue:o,orientation:s="horizontal",dir:a,activationMode:l="automatic",...c}=t,u=Id(a),[f,d]=ni({prop:r,onChange:i,defaultProp:o});return _.jsx(SO,{scope:n,baseId:mr(),value:f,onValueChange:d,orientation:s,dir:u,activationMode:l,children:_.jsx(Oe.div,{dir:u,"data-orientation":s,...c,ref:e})})});c1.displayName=Ag;var u1="TabsList",d1=S.forwardRef((t,e)=>{const{__scopeTabs:n,loop:r=!0,...i}=t,o=Rg(u1,n),s=l1(n);return _.jsx(yM,{asChild:!0,...s,orientation:o.orientation,dir:o.dir,loop:r,children:_.jsx(Oe.div,{role:"tablist","aria-orientation":o.orientation,...i,ref:e})})});d1.displayName=u1;var f1="TabsTrigger",h1=S.forwardRef((t,e)=>{const{__scopeTabs:n,value:r,disabled:i=!1,...o}=t,s=Rg(f1,n),a=l1(n),l=g1(s.baseId,r),c=v1(s.baseId,r),u=r===s.value;return _.jsx(_M,{asChild:!0,...a,focusable:!i,active:u,children:_.jsx(Oe.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":c,"data-state":u?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:l,...o,ref:e,onMouseDown:he(t.onMouseDown,f=>{!i&&f.button===0&&f.ctrlKey===!1?s.onValueChange(r):f.preventDefault()}),onKeyDown:he(t.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&s.onValueChange(r)}),onFocus:he(t.onFocus,()=>{const f=s.activationMode!=="manual";!u&&!i&&f&&s.onValueChange(r)})})})});h1.displayName=f1;var p1="TabsContent",m1=S.forwardRef((t,e)=>{const{__scopeTabs:n,value:r,forceMount:i,children:o,...s}=t,a=Rg(p1,n),l=g1(a.baseId,r),c=v1(a.baseId,r),u=r===a.value,f=S.useRef(u);return S.useEffect(()=>{const d=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(d)},[]),_.jsx(zn,{present:i||u,children:({present:d})=>_.jsx(Oe.div,{"data-state":u?"active":"inactive","data-orientation":a.orientation,role:"tabpanel","aria-labelledby":l,hidden:!d,id:c,tabIndex:0,...s,ref:e,style:{...t.style,animationDuration:f.current?"0s":void 0},children:d&&o})})});m1.displayName=p1;function g1(t,e){return`${t}-trigger-${e}`}function v1(t,e){return`${t}-content-${e}`}var wO=c1,x1=d1,y1=h1,_1=m1;const EO=wO,S1=S.forwardRef(({className:t,...e},n)=>_.jsx(x1,{ref:n,className:Ye("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...e}));S1.displayName=x1.displayName;const Fp=S.forwardRef(({className:t,...e},n)=>_.jsx(y1,{ref:n,className:Ye("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...e}));Fp.displayName=y1.displayName;const kp=S.forwardRef(({className:t,...e},n)=>_.jsx(_1,{ref:n,className:Ye("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...e}));kp.displayName=_1.displayName;var Pg="Switch",[MO,dz]=ai(Pg),[bO,TO]=MO(Pg),w1=S.forwardRef((t,e)=>{const{__scopeSwitch:n,name:r,checked:i,defaultChecked:o,required:s,disabled:a,value:l="on",onCheckedChange:c,form:u,...f}=t,[d,g]=S.useState(null),v=Je(e,y=>g(y)),m=S.useRef(!1),p=d?u||!!d.closest("form"):!0,[h=!1,x]=ni({prop:i,defaultProp:o,onChange:c});return _.jsxs(bO,{scope:n,checked:h,disabled:a,children:[_.jsx(Oe.button,{type:"button",role:"switch","aria-checked":h,"aria-required":s,"data-state":b1(h),"data-disabled":a?"":void 0,disabled:a,value:l,...f,ref:v,onClick:he(t.onClick,y=>{x(w=>!w),p&&(m.current=y.isPropagationStopped(),m.current||y.stopPropagation())})}),p&&_.jsx(CO,{control:d,bubbles:!m.current,name:r,value:l,checked:h,required:s,disabled:a,form:u,style:{transform:"translateX(-100%)"}})]})});w1.displayName=Pg;var E1="SwitchThumb",M1=S.forwardRef((t,e)=>{const{__scopeSwitch:n,...r}=t,i=TO(E1,n);return _.jsx(Oe.span,{"data-state":b1(i.checked),"data-disabled":i.disabled?"":void 0,...r,ref:e})});M1.displayName=E1;var CO=t=>{const{control:e,checked:n,bubbles:r=!0,...i}=t,o=S.useRef(null),s=_b(n),a=Hw(e);return S.useEffect(()=>{const l=o.current,c=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(c,"checked").set;if(s!==n&&f){const d=new Event("click",{bubbles:r});f.call(l,n),l.dispatchEvent(d)}},[s,n,r]),_.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:o,style:{...t.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function b1(t){return t?"checked":"unchecked"}var T1=w1,AO=M1;const C1=S.forwardRef(({className:t,...e},n)=>_.jsx(T1,{className:Ye("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...e,ref:n,children:_.jsx(AO,{className:Ye("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));C1.displayName=T1.displayName;const RO=({onFileSelect:t,onClear:e,selectedFile:n,className:r})=>{const[i,o]=S.useState(!1),s=u=>{u.preventDefault(),u.stopPropagation(),o(!0)},a=u=>{u.preventDefault(),u.stopPropagation(),o(!1)},l=u=>{if(u.preventDefault(),u.stopPropagation(),o(!1),u.dataTransfer.files&&u.dataTransfer.files.length>0){const f=u.dataTransfer.files[0];f.type.startsWith("image/")&&t(f)}},c=u=>{if(u.target.files&&u.target.files.length>0){const f=u.target.files[0];f.type.startsWith("image/")&&t(f)}};return _.jsxs("div",{className:Ye("relative",r),children:[n?_.jsxs("div",{className:"relative border border-border rounded-md overflow-hidden",children:[_.jsx("img",{src:URL.createObjectURL(n),alt:"Selected file",className:"w-full h-auto max-h-40 object-contain bg-gray-100 dark:bg-gray-800"}),_.jsx(pt,{variant:"destructive",size:"icon",className:"absolute top-1 right-1 w-6 h-6 rounded-full",onClick:e,children:_.jsx(_l,{className:"h-3 w-3"})})]}):_.jsxs("div",{className:Ye("border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transition-colors",i?"border-primary bg-primary/5":"border-gray-300 dark:border-gray-700","hover:border-primary hover:bg-primary/5"),onDragOver:s,onDragLeave:a,onDrop:l,onClick:()=>{var u;return(u=document.getElementById("file-upload"))==null?void 0:u.click()},children:[_.jsx(zR,{className:"h-8 w-8 text-gray-400 dark:text-gray-500 mb-2"}),_.jsxs("p",{className:"text-sm text-center text-gray-500 dark:text-gray-400",children:["Drag & drop an image or ",_.jsx("span",{className:"text-primary",children:"browse"})]})]}),_.jsx("input",{id:"file-upload",type:"file",accept:"image/*",className:"hidden",onChange:c})]})},PO=({onSubmit:t,isLoading:e,currentPromptTheme:n,onPromptThemeChange:r,previousPrompt:i,previousOptions:o,previousImageData:s,previousFigmaUrl:a})=>{const[l,c]=S.useState(""),[u,f]=S.useState(!1),[d,g]=S.useState(null),{toast:v}=fa(),[m,p]=S.useState({framework:"html",includeCSS:!0,includeJS:!0,responsive:!0,temperature:.2,theme:n}),[h,x]=S.useState(!1),[y,w]=S.useState(null),[b,T]=S.useState(""),[E,D]=S.useState(!1),[M,C]=S.useState("image"),[B,F]=S.useState(null);S.useEffect(()=>{const O=window.SpeechRecognition||window.webkitSpeechRecognition;if(O){const H=new O;H.continuous=!0,H.interimResults=!0,H.lang="en-US",H.onresult=W=>{const G=Array.from(W.results).map(Z=>Z[0].transcript).join("");W.results[W.resultIndex].isFinal&&c(Z=>(Z?Z+" ":"")+G)},H.onerror=W=>{console.error("Speech recognition error:",W.error),v({variant:"destructive",title:"Speech Recognition Error",description:`Error: ${W.error}. Please try again.`}),f(!1)},H.onend=()=>{f(!1)},g(H)}else console.warn("Speech recognition not supported in this browser");return()=>{d&&d.stop()}},[v]),S.useEffect(()=>{p(O=>({...O,theme:n}))},[n]),S.useEffect(()=>{if(y){const O=new FileReader;O.onload=H=>{var W;(W=H.target)!=null&&W.result&&F(H.target.result)},O.readAsDataURL(y)}else F(null)},[y]);const Q=O=>{if(O.preventDefault(),!l.trim()&&!y&&!b&&!h){v({variant:"destructive",title:"Input required",description:"Please enter a prompt, upload an image, or provide a Figma URL."});return}if(h&&!i){v({variant:"destructive",title:"No previous generation",description:"There is no previous generation to continue from."});return}if(y&&B)t(l.trim(),m,B,void 0,h);else if(b){if(!b.includes("figma.com")){v({variant:"destructive",title:"Invalid Figma URL",description:"Please enter a valid Figma URL."});return}t(l.trim(),m,void 0,b,h)}else t(l.trim(),m,void 0,void 0,h);D(!1)},N=(O,H)=>{p(W=>({...W,[O]:H}))},z=O=>{N("theme",O),r(O)},k=async()=>{if(u)d&&d.stop(),f(!1),v({title:"Voice recording stopped",description:"Your speech has been converted to text."});else try{if(!d){v({variant:"destructive",title:"Speech Recognition Not Available",description:"Your browser does not support speech recognition."});return}await navigator.mediaDevices.getUserMedia({audio:!0}),d.start(),f(!0),v({title:"Voice recording started",description:"Speak now. Your voice will be converted to text."})}catch(O){console.error("Error accessing microphone:",O),v({variant:"destructive",title:"Microphone Error",description:"Could not access your microphone. Please check permissions."})}},$=()=>{w(null),F(null)},L=()=>{T("")},I=()=>{const O=!h;x(O),O&&o&&(p(o),s?F(s):a&&T(a))};return _.jsx("form",{onSubmit:Q,className:"p-4 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800",children:_.jsxs("div",{className:"flex flex-col gap-2",children:[_.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[_.jsxs(pO,{value:m.framework,onValueChange:O=>N("framework",O),children:[_.jsx(n1,{className:"w-[140px] h-8",children:_.jsx(mO,{placeholder:"Framework"})}),_.jsxs(o1,{children:[_.jsx(ja,{value:"html",children:"HTML/CSS/JS"}),_.jsx(ja,{value:"react",children:"React"}),_.jsx(ja,{value:"vue",children:"Vue"}),_.jsx(ja,{value:"svelte",children:"Svelte"})]})]}),_.jsx(Pp,{currentTheme:n,onThemeChange:z,variant:"compact",scope:"prompt"}),i&&_.jsxs("div",{className:"flex items-center space-x-2",children:[_.jsx(C1,{id:"continuation-mode",checked:h,onCheckedChange:I}),_.jsxs(fs,{htmlFor:"continuation-mode",className:"flex items-center text-sm",children:[_.jsx(qR,{className:"h-3.5 w-3.5 mr-1"}),"Continue Previous"]})]}),_.jsxs(fM,{children:[_.jsx(hM,{asChild:!0,children:_.jsxs(pt,{variant:"outline",size:"sm",className:"h-8",children:[_.jsx(ZR,{className:"h-4 w-4 mr-2"}),"Advanced Options"]})}),_.jsx(vg,{className:"w-80",children:_.jsxs("div",{className:"grid gap-4",children:[_.jsxs("div",{className:"space-y-2",children:[_.jsx("h4",{className:"font-medium leading-none",children:"Generation Options"}),_.jsx("p",{className:"text-sm text-muted-foreground",children:"Customize how your code is generated"})]}),_.jsxs("div",{className:"grid gap-2",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx(fs,{htmlFor:"includeCSS",children:"Include CSS"}),_.jsx("input",{type:"checkbox",id:"includeCSS",checked:m.includeCSS,onChange:O=>N("includeCSS",O.target.checked),className:"h-4 w-4"})]}),_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx(fs,{htmlFor:"includeJS",children:"Include JavaScript"}),_.jsx("input",{type:"checkbox",id:"includeJS",checked:m.includeJS,onChange:O=>N("includeJS",O.target.checked),className:"h-4 w-4"})]}),_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx(fs,{htmlFor:"responsive",children:"Responsive Design"}),_.jsx("input",{type:"checkbox",id:"responsive",checked:m.responsive,onChange:O=>N("responsive",O.target.checked),className:"h-4 w-4"})]}),_.jsxs("div",{className:"space-y-1",children:[_.jsxs(fs,{htmlFor:"temp",children:["Creativity (Temperature): ",m.temperature]}),_.jsx(Up,{id:"temp",type:"range",min:"0",max:"1",step:"0.1",value:m.temperature,onChange:O=>N("temperature",parseFloat(O.target.value))})]})]})]})})]})]}),h&&i&&_.jsxs("div",{className:"bg-muted/40 p-2 rounded-md text-sm border border-muted",children:[_.jsx("p",{className:"font-medium mb-1",children:"Continuing from previous prompt:"}),_.jsx("p",{className:"text-muted-foreground",children:i})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx(yb,{value:l,onChange:O=>c(O.target.value),placeholder:h?"Describe what changes you want to make to the previous generation...":"Describe the app or component you want to create...",className:"min-h-[60px] border border-black shadow-lg flex-1 resize-none rounded-lg focus:border-primary dark:bg-gray-900"}),_.jsxs("div",{className:"flex flex-col gap-2",children:[_.jsxs("div",{className:"flex justify-around",children:[_.jsxs(QE,{open:E,onOpenChange:D,children:[_.jsx(qD,{asChild:!0,children:_.jsx(pt,{type:"button",variant:"outline",size:"icon",className:`${y||b?"bg-primary/10 text-primary border-primary/20":"hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:_.jsx(d0,{className:"h-5 w-5"})})}),_.jsxs(fg,{className:"sm:max-w-[425px]",children:[_.jsx(hg,{children:_.jsx(pg,{children:"Add Design Source"})}),_.jsxs(EO,{value:M,className:"w-full",onValueChange:O=>C(O),children:[_.jsxs(S1,{className:"grid w-full grid-cols-2",children:[_.jsx(Fp,{value:"image",children:"Upload Image"}),_.jsx(Fp,{value:"figma",children:"Figma URL"})]}),_.jsx(kp,{value:"image",className:"py-4",children:_.jsx(RO,{onFileSelect:w,onClear:$,selectedFile:y})}),_.jsx(kp,{value:"figma",className:"py-4",children:_.jsxs("div",{className:"relative",children:[_.jsx(Up,{type:"url",placeholder:"Paste your Figma design URL here",value:b,onChange:O=>T(O.target.value)}),b&&_.jsx(pt,{type:"button",variant:"ghost",size:"icon",className:"absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6",onClick:L,children:_.jsx(_l,{className:"h-4 w-4"})})]})})]}),_.jsxs("div",{className:"flex justify-end gap-2 mt-4",children:[_.jsx(pt,{type:"button",variant:"outline",onClick:()=>D(!1),children:"Cancel"}),_.jsx(pt,{type:"button",onClick:()=>D(!1),disabled:!(y||b),children:"Add"})]})]})]}),_.jsx(pt,{type:"button",variant:"outline",size:"icon",onClick:k,className:`${u?"bg-red-100 text-red-600 border-red-300 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800":"hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:u?_.jsx($R,{className:"h-5 w-5"}):_.jsx(XR,{className:"h-5 w-5"})})]}),_.jsxs(pt,{type:"submit",disabled:e||l.trim()===""&&!y&&!b&&!h,className:"h-full border border-black shadow-lg",children:[e?_.jsx("div",{className:"animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full border-black shadow-lg"}):_.jsx(QR,{className:"h-5 w-5"}),h?"Update":"Create !"]})]})]}),(y||b)&&_.jsxs("div",{className:"flex items-center gap-2 py-1 px-2 bg-primary/5 border border-primary/20 rounded text-sm",children:[y&&_.jsxs(_.Fragment,{children:[_.jsx(d0,{className:"h-3 w-3 text-primary"}),_.jsx("span",{className:"truncate",children:y.name})]}),b&&_.jsxs(_.Fragment,{children:[_.jsx(GR,{className:"h-3 w-3 text-primary"}),_.jsx("span",{className:"truncate",children:b})]}),_.jsx(pt,{type:"button",variant:"ghost",size:"icon",className:"h-5 w-5 ml-auto",onClick:y?$:L,children:_.jsx(_l,{className:"h-3 w-3"})})]})]})})},NO=({code:t})=>{const{toast:e}=fa(),n=()=>{navigator.clipboard.writeText(t),e({title:"Code copied to clipboard",description:"You can now paste the code in your editor."})},r=(i,o="HTML")=>{const s=document.createElement("a");let a=t;i==="jsx"||i==="tsx"?a=`import React from 'react';

export default function Component() {
  return (
    ${t}
  );
}`:i==="vue"?a=`<template>
  ${t}
</template>

<script>
export default {
  name: 'GeneratedComponent'
}
<\/script>`:i==="svelte"&&(a=`<script>
  // Your script here
<\/script>

${t}

<style>
  /* Your styles here */
</style>`);const l=new Blob([a],{type:"text/plain"});s.href=URL.createObjectURL(l),s.download=`generated-component.${i}`,document.body.appendChild(s),s.click(),document.body.removeChild(s),e({title:`Downloaded as ${o} file`,description:`Your code has been saved as generated-component.${i}`})};return _.jsxs("div",{className:"flex flex-wrap gap-2 p-2 border-t border-gray-200",children:[_.jsxs(pt,{variant:"outline",size:"sm",onClick:n,children:[_.jsx(_w,{className:"h-4 w-4 mr-2"}),"Copy Code"]}),_.jsxs(pt,{variant:"outline",size:"sm",onClick:()=>r("html"),children:[_.jsx(Sw,{className:"h-4 w-4 mr-2"}),"Download HTML"]}),_.jsxs(mb,{children:[_.jsx(gb,{asChild:!0,children:_.jsxs(pt,{variant:"outline",size:"sm",children:[_.jsx(HR,{className:"h-4 w-4 mr-2"}),"Export as Framework"]})}),_.jsxs(Tg,{children:[_.jsxs(bs,{onClick:()=>r("jsx","React"),children:[_.jsx(Cf,{className:"h-4 w-4 mr-2"}),"React (.jsx)"]}),_.jsxs(bs,{onClick:()=>r("tsx","React TypeScript"),children:[_.jsx(UR,{className:"h-4 w-4 mr-2"}),"React TypeScript (.tsx)"]}),_.jsxs(bs,{onClick:()=>r("vue","Vue"),children:[_.jsx(Cf,{className:"h-4 w-4 mr-2"}),"Vue (.vue)"]}),_.jsxs(bs,{onClick:()=>r("svelte","Svelte"),children:[_.jsx(Cf,{className:"h-4 w-4 mr-2"}),"Svelte (.svelte)"]})]})]})]})},Ng="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",Lg="AIzaSyAPlrPwNCLm9dkguZ7fJ3PVM-h1RZpSXpc",LO=async(t,e=.2)=>{try{const n=await fetch(`${Ng}?key=${Lg}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`You are a code generation assistant. Create functional HTML code based on this prompt: ${t}. 
                The HTML should be complete and self-contained with CSS. You can use inline JavaScript if needed.
                Return the code with markdown formatting using the format: \`\`\`html <YOUR CODE HERE> \`\`\``}]}],generationConfig:{temperature:e,topK:40,topP:.95,maxOutputTokens:8192}})});if(!n.ok){const i=await n.text();throw new Error(`API error: ${n.status} - ${i}`)}const r=await n.json();if(!r.candidates||r.candidates.length===0||!r.candidates[0].content.parts[0].text)throw new Error("No code generated");return r.candidates[0].content.parts[0].text}catch(n){throw console.error("Error generating code:",n),n}},DO=async(t,e,n=.2)=>{try{const r=await fetch(`${Ng}?key=${Lg}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`You are a code generation assistant. Generate HTML/CSS code that recreates the design shown in the image. ${t?`Additional instructions: ${t}`:""}
                The HTML should be complete and self-contained with CSS. You can use inline JavaScript if needed.
                Return the code with markdown formatting using the format: \`\`\`html <YOUR CODE HERE> \`\`\``},{inline_data:{mime_type:"image/jpeg",data:e.split(",")[1]}}]}],generationConfig:{temperature:n,topK:40,topP:.95,maxOutputTokens:8192}})});if(!r.ok){const o=await r.text();throw new Error(`API error: ${r.status} - ${o}`)}const i=await r.json();if(!i.candidates||i.candidates.length===0||!i.candidates[0].content.parts[0].text)throw new Error("No code generated from image");return i.candidates[0].content.parts[0].text}catch(r){throw console.error("Error generating code from image:",r),r}},IO=async(t,e,n=.2)=>{try{const r=await fetch(`${Ng}?key=${Lg}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`You are a code generation assistant. Create functional HTML code based on this Figma design URL: ${t}. 
                ${e?`Additional instructions: ${e}`:""}
                The HTML should be complete and self-contained with CSS. Analyze the design carefully and recreate it as closely as possible.
                You can use inline JavaScript if needed. Return the code with markdown formatting using the format: \`\`\`html <YOUR CODE HERE> \`\`\``}]}],generationConfig:{temperature:n,topK:40,topP:.95,maxOutputTokens:8192}})});if(!r.ok){const o=await r.text();throw new Error(`API error: ${r.status} - ${o}`)}const i=await r.json();if(!i.candidates||i.candidates.length===0||!i.candidates[0].content.parts[0].text)throw new Error("No code generated from Figma design");return i.candidates[0].content.parts[0].text}catch(r){throw console.error("Error generating code from Figma:",r),r}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dg="160",OO=0,tx=1,UO=2,A1=1,FO=2,Gr=3,qi=0,Mn=1,$r=2,zi=0,ks=1,nx=2,rx=3,ix=4,kO=5,po=100,BO=101,zO=102,ox=103,sx=104,HO=200,VO=201,GO=202,jO=203,Bp=204,zp=205,WO=206,$O=207,XO=208,YO=209,qO=210,KO=211,QO=212,ZO=213,JO=214,eU=0,tU=1,nU=2,Xu=3,rU=4,iU=5,oU=6,sU=7,Ig=0,aU=1,lU=2,Hi=0,cU=1,uU=2,dU=3,fU=4,hU=5,pU=6,R1=300,oa=301,sa=302,Hp=303,Vp=304,Vd=306,Gp=1e3,dr=1001,jp=1002,dn=1003,ax=1004,zf=1005,$n=1006,mU=1007,Cl=1008,Vi=1009,gU=1010,vU=1011,Og=1012,P1=1013,Pi=1014,Ni=1015,Al=1016,N1=1017,L1=1018,bo=1020,xU=1021,fr=1023,yU=1024,_U=1025,To=1026,aa=1027,SU=1028,D1=1029,wU=1030,I1=1031,O1=1033,Hf=33776,Vf=33777,Gf=33778,jf=33779,lx=35840,cx=35841,ux=35842,dx=35843,U1=36196,fx=37492,hx=37496,px=37808,mx=37809,gx=37810,vx=37811,xx=37812,yx=37813,_x=37814,Sx=37815,wx=37816,Ex=37817,Mx=37818,bx=37819,Tx=37820,Cx=37821,Wf=36492,Ax=36494,Rx=36495,EU=36283,Px=36284,Nx=36285,Lx=36286,F1=3e3,Co=3001,MU=3200,bU=3201,k1=0,TU=1,Yn="",jt="srgb",oi="srgb-linear",Ug="display-p3",Gd="display-p3-linear",Yu="linear",xt="srgb",qu="rec709",Ku="p3",Ko=7680,Dx=519,CU=512,AU=513,RU=514,B1=515,PU=516,NU=517,LU=518,DU=519,Ix=35044,Ox="300 es",Wp=1035,qr=2e3,Qu=2001;class xa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,$p=180/Math.PI;function Wl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]).toLowerCase()}function yn(t,e,n){return Math.max(e,Math.min(n,t))}function IU(t,e){return(t%e+e)%e}function Xf(t,e,n){return(1-n)*t+n*e}function Ux(t){return(t&t-1)===0&&t!==0}function Xp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Da(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,r,i,o,s,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,s,a,l,c)}set(e,n,r,i,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],u=r[4],f=r[7],d=r[2],g=r[5],v=r[8],m=i[0],p=i[3],h=i[6],x=i[1],y=i[4],w=i[7],b=i[2],T=i[5],E=i[8];return o[0]=s*m+a*x+l*b,o[3]=s*p+a*y+l*T,o[6]=s*h+a*w+l*E,o[1]=c*m+u*x+f*b,o[4]=c*p+u*y+f*T,o[7]=c*h+u*w+f*E,o[2]=d*m+g*x+v*b,o[5]=d*p+g*y+v*T,o[8]=d*h+g*w+v*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-r*o*u+r*a*l+i*o*c-i*s*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*s-a*c,d=a*l-u*o,g=c*o-s*l,v=n*f+r*d+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=f*m,e[1]=(i*c-u*r)*m,e[2]=(a*r-i*s)*m,e[3]=d*m,e[4]=(u*n-i*l)*m,e[5]=(i*o-a*n)*m,e[6]=g*m,e[7]=(r*l-c*n)*m,e[8]=(s*n-r*o)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yf.makeScale(e,n)),this}rotate(e){return this.premultiply(Yf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yf=new Qe;function z1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OU(){const t=Zu("canvas");return t.style.display="block",t}const Fx={};function nl(t){t in Fx||(Fx[t]=!0,console.warn(t))}const kx=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bx=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ec={[oi]:{transfer:Yu,primaries:qu,toReference:t=>t,fromReference:t=>t},[jt]:{transfer:xt,primaries:qu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Gd]:{transfer:Yu,primaries:Ku,toReference:t=>t.applyMatrix3(Bx),fromReference:t=>t.applyMatrix3(kx)},[Ug]:{transfer:xt,primaries:Ku,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Bx),fromReference:t=>t.applyMatrix3(kx).convertLinearToSRGB()}},UU=new Set([oi,Gd]),ct={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!UU.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=Ec[e].toReference,i=Ec[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ec[t].primaries},getTransfer:function(t){return t===Yn?Yu:Ec[t].transfer}};function Bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qo;class H1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qo===void 0&&(Qo=Zu("canvas")),Qo.width=e.width,Qo.height=e.height;const r=Qo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Qo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=Bs(o[s]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bs(n[r]/255)*255):n[r]=Bs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FU=0;class V1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FU++}),this.uuid=Wl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(Kf(i[s].image)):o.push(Kf(i[s]))}else o=Kf(i);r.url=o}return n||(e.images[this.uuid]=r),r}}function Kf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?H1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kU=0;class Un extends xa{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=dr,i=dr,o=$n,s=Cl,a=fr,l=Vi,c=Un.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kU++}),this.uuid=Wl(),this.name="",this.source=new V1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Co?jt:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gp:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case jp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gp:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case jp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?Co:F1}set encoding(e){nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Co?jt:Yn}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=R1;Un.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,i=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*n+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*n+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*n+s[7]*r+s[11]*i+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,o;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],g=l[5],v=l[9],m=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(v+p)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,w=(g+1)/2,b=(h+1)/2,T=(u+d)/4,E=(f+m)/4,D=(v+p)/4;return y>w&&y>b?y<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(y),i=T/r,o=E/r):w>b?w<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(w),r=T/i,o=D/i):b<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(b),r=E/o,i=D/o),this.set(r,i,o,n),this}let x=Math.sqrt((p-v)*(p-v)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-v)/x,this.y=(f-m)/x,this.z=(d-u)/x,this.w=Math.acos((c+g+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BU extends xa{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const i={width:e,height:n,depth:1};r.encoding!==void 0&&(nl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Co?jt:Yn),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Un(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new V1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fo extends BU{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class G1 extends Un{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zU extends Un{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,o,s,a){let l=r[i+0],c=r[i+1],u=r[i+2],f=r[i+3];const d=o[s+0],g=o[s+1],v=o[s+2],m=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=v,e[n+3]=m;return}if(f!==m||l!==d||c!==g||u!==v){let p=1-a;const h=l*d+c*g+u*v+f*m,x=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const b=Math.sqrt(y),T=Math.atan2(b,h*x);p=Math.sin(p*T)/b,a=Math.sin(a*T)/b}const w=a*x;if(l=l*p+d*w,c=c*p+g*w,u=u*p+v*w,f=f*p+m*w,p===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,r,i,o,s){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],f=o[s],d=o[s+1],g=o[s+2],v=o[s+3];return e[n]=a*v+u*f+l*g-c*d,e[n+1]=l*v+u*d+c*f-a*g,e[n+2]=c*v+u*g+a*d-l*f,e[n+3]=u*v-a*f-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),f=a(o/2),d=l(r/2),g=l(i/2),v=l(o/2);switch(s){case"XYZ":this._x=d*u*f+c*g*v,this._y=c*g*f-d*u*v,this._z=c*u*v+d*g*f,this._w=c*u*f-d*g*v;break;case"YXZ":this._x=d*u*f+c*g*v,this._y=c*g*f-d*u*v,this._z=c*u*v-d*g*f,this._w=c*u*f+d*g*v;break;case"ZXY":this._x=d*u*f-c*g*v,this._y=c*g*f+d*u*v,this._z=c*u*v+d*g*f,this._w=c*u*f-d*g*v;break;case"ZYX":this._x=d*u*f-c*g*v,this._y=c*g*f+d*u*v,this._z=c*u*v-d*g*f,this._w=c*u*f+d*g*v;break;case"YZX":this._x=d*u*f+c*g*v,this._y=c*g*f+d*u*v,this._z=c*u*v-d*g*f,this._w=c*u*f-d*g*v;break;case"XZY":this._x=d*u*f-c*g*v,this._y=c*g*f-d*u*v,this._z=c*u*v+d*g*f,this._w=c*u*f+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=r+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(o-c)*g,this._z=(s-i)*g}else if(r>a&&r>f){const g=2*Math.sqrt(1+r-a-f);this._w=(u-l)/g,this._x=.25*g,this._y=(i+s)/g,this._z=(o+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-r-f);this._w=(o-c)/g,this._x=(i+s)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-r-a);this._w=(s-i)/g,this._x=(o+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+s*a+i*c-o*l,this._y=i*u+s*l+o*a-r*c,this._z=o*u+s*c+r*l-i*a,this._w=s*u-r*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*r+n*this._x,this._y=g*i+n*this._y,this._z=g*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=s*f+this._w*d,this._x=r*f+this._x*d,this._y=i*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(i),r*Math.sin(o),r*Math.cos(o),n*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6]*i,this.y=o[1]*n+o[4]*r+o[7]*i,this.z=o[2]*n+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*n+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*n+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*n+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*i-a*r),u=2*(a*n-o*i),f=2*(o*r-s*n);return this.x=n+l*c+s*f-a*u,this.y=r+l*u+a*c-o*f,this.z=i+l*f+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i,this.y=o[1]*n+o[5]*r+o[9]*i,this.z=o[2]*n+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=i*l-o*a,this.y=o*s-r*l,this.z=r*a-i*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new K,zx=new $l;class Xl{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(tr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(tr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=tr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,tr):tr.fromBufferAttribute(o,s),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),bc.subVectors(this.max,Ia),Zo.subVectors(e.a,Ia),Jo.subVectors(e.b,Ia),es.subVectors(e.c,Ia),di.subVectors(Jo,Zo),fi.subVectors(es,Jo),oo.subVectors(Zo,es);let n=[0,-di.z,di.y,0,-fi.z,fi.y,0,-oo.z,oo.y,di.z,0,-di.x,fi.z,0,-fi.x,oo.z,0,-oo.x,-di.y,di.x,0,-fi.y,fi.x,0,-oo.y,oo.x,0];return!Zf(n,Zo,Jo,es,bc)||(n=[1,0,0,0,1,0,0,0,1],!Zf(n,Zo,Jo,es,bc))?!1:(Tc.crossVectors(di,fi),n=[Tc.x,Tc.y,Tc.z],Zf(n,Zo,Jo,es,bc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fr=[new K,new K,new K,new K,new K,new K,new K,new K],tr=new K,Mc=new Xl,Zo=new K,Jo=new K,es=new K,di=new K,fi=new K,oo=new K,Ia=new K,bc=new K,Tc=new K,so=new K;function Zf(t,e,n,r,i){for(let o=0,s=t.length-3;o<=s;o+=3){so.fromArray(t,o);const a=i.x*Math.abs(so.x)+i.y*Math.abs(so.y)+i.z*Math.abs(so.z),l=e.dot(so),c=n.dot(so),u=r.dot(so);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const HU=new Xl,Oa=new K,Jf=new K;class Fg{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):HU.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const n=Oa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Oa,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Jf)),this.expandByPoint(Oa.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kr=new K,eh=new K,Cc=new K,hi=new K,th=new K,Ac=new K,nh=new K;class VU{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=kr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,n),kr.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){eh.copy(e).add(n).multiplyScalar(.5),Cc.copy(n).sub(e).normalize(),hi.copy(this.origin).sub(eh);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Cc),a=hi.dot(this.direction),l=-hi.dot(Cc),c=hi.lengthSq(),u=Math.abs(1-s*s);let f,d,g,v;if(u>0)if(f=s*l-a,d=s*a-l,v=o*u,f>=0)if(d>=-v)if(d<=v){const m=1/u;f*=m,d*=m,g=f*(f+s*d+2*a)+d*(s*f+d+2*l)+c}else d=o,f=Math.max(0,-(s*d+a)),g=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(s*d+a)),g=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),g=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-o,-l),o),g=d*(d+2*l)+c):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),g=-f*f+d*(d+2*l)+c);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),g=-f*f+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(eh).addScaledVector(Cc,d),g}intersectSphere(e,n){kr.subVectors(e.center,this.origin);const r=kr.dot(this.direction),i=kr.dot(kr)-r*r,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,n,r,i,o){th.subVectors(n,e),Ac.subVectors(r,e),nh.crossVectors(th,Ac);let s=this.direction.dot(nh),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Ac.crossVectors(hi,Ac));if(l<0)return null;const c=a*this.direction.dot(th.cross(hi));if(c<0||l+c>s)return null;const u=-a*hi.dot(nh);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,r,i,o,s,a,l,c,u,f,d,g,v,m,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,s,a,l,c,u,f,d,g,v,m,p)}set(e,n,r,i,o,s,a,l,c,u,f,d,g,v,m,p){const h=this.elements;return h[0]=e,h[4]=n,h[8]=r,h[12]=i,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=g,h[7]=v,h[11]=m,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/ts.setFromMatrixColumn(e,0).length(),o=1/ts.setFromMatrixColumn(e,1).length(),s=1/ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*u,g=s*f,v=a*u,m=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=g+v*c,n[5]=d-m*c,n[9]=-a*l,n[2]=m-d*c,n[6]=v+g*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*u,g=l*f,v=c*u,m=c*f;n[0]=d+m*a,n[4]=v*a-g,n[8]=s*c,n[1]=s*f,n[5]=s*u,n[9]=-a,n[2]=g*a-v,n[6]=m+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*u,g=l*f,v=c*u,m=c*f;n[0]=d-m*a,n[4]=-s*f,n[8]=v+g*a,n[1]=g+v*a,n[5]=s*u,n[9]=m-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*u,g=s*f,v=a*u,m=a*f;n[0]=l*u,n[4]=v*c-g,n[8]=d*c+m,n[1]=l*f,n[5]=m*c+d,n[9]=g*c-v,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,g=s*c,v=a*l,m=a*c;n[0]=l*u,n[4]=m-d*f,n[8]=v*f+g,n[1]=f,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=g*f+v,n[10]=d-m*f}else if(e.order==="XZY"){const d=s*l,g=s*c,v=a*l,m=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+m,n[5]=s*u,n[9]=g*f-v,n[2]=v*f-g,n[6]=a*u,n[10]=m*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GU,e,jU)}lookAt(e,n,r){const i=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),pi.crossVectors(r,Cn),pi.lengthSq()===0&&(Math.abs(r.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),pi.crossVectors(r,Cn)),pi.normalize(),Rc.crossVectors(Cn,pi),i[0]=pi.x,i[4]=Rc.x,i[8]=Cn.x,i[1]=pi.y,i[5]=Rc.y,i[9]=Cn.y,i[2]=pi.z,i[6]=Rc.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],u=r[1],f=r[5],d=r[9],g=r[13],v=r[2],m=r[6],p=r[10],h=r[14],x=r[3],y=r[7],w=r[11],b=r[15],T=i[0],E=i[4],D=i[8],M=i[12],C=i[1],B=i[5],F=i[9],Q=i[13],N=i[2],z=i[6],k=i[10],$=i[14],L=i[3],I=i[7],O=i[11],H=i[15];return o[0]=s*T+a*C+l*N+c*L,o[4]=s*E+a*B+l*z+c*I,o[8]=s*D+a*F+l*k+c*O,o[12]=s*M+a*Q+l*$+c*H,o[1]=u*T+f*C+d*N+g*L,o[5]=u*E+f*B+d*z+g*I,o[9]=u*D+f*F+d*k+g*O,o[13]=u*M+f*Q+d*$+g*H,o[2]=v*T+m*C+p*N+h*L,o[6]=v*E+m*B+p*z+h*I,o[10]=v*D+m*F+p*k+h*O,o[14]=v*M+m*Q+p*$+h*H,o[3]=x*T+y*C+w*N+b*L,o[7]=x*E+y*B+w*z+b*I,o[11]=x*D+y*F+w*k+b*O,o[15]=x*M+y*Q+w*$+b*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],g=e[14],v=e[3],m=e[7],p=e[11],h=e[15];return v*(+o*l*f-i*c*f-o*a*d+r*c*d+i*a*g-r*l*g)+m*(+n*l*g-n*c*d+o*s*d-i*s*g+i*c*u-o*l*u)+p*(+n*c*f-n*a*g-o*s*f+r*s*g+o*a*u-r*c*u)+h*(-i*a*u-n*l*f+n*a*d+i*s*f-r*s*d+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],g=e[11],v=e[12],m=e[13],p=e[14],h=e[15],x=f*p*c-m*d*c+m*l*g-a*p*g-f*l*h+a*d*h,y=v*d*c-u*p*c-v*l*g+s*p*g+u*l*h-s*d*h,w=u*m*c-v*f*c+v*a*g-s*m*g-u*a*h+s*f*h,b=v*f*l-u*m*l-v*a*d+s*m*d+u*a*p-s*f*p,T=n*x+r*y+i*w+o*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=x*E,e[1]=(m*d*o-f*p*o-m*i*g+r*p*g+f*i*h-r*d*h)*E,e[2]=(a*p*o-m*l*o+m*i*c-r*p*c-a*i*h+r*l*h)*E,e[3]=(f*l*o-a*d*o-f*i*c+r*d*c+a*i*g-r*l*g)*E,e[4]=y*E,e[5]=(u*p*o-v*d*o+v*i*g-n*p*g-u*i*h+n*d*h)*E,e[6]=(v*l*o-s*p*o-v*i*c+n*p*c+s*i*h-n*l*h)*E,e[7]=(s*d*o-u*l*o+u*i*c-n*d*c-s*i*g+n*l*g)*E,e[8]=w*E,e[9]=(v*f*o-u*m*o-v*r*g+n*m*g+u*r*h-n*f*h)*E,e[10]=(s*m*o-v*a*o+v*r*c-n*m*c-s*r*h+n*a*h)*E,e[11]=(u*a*o-s*f*o-u*r*c+n*f*c+s*r*g-n*a*g)*E,e[12]=b*E,e[13]=(u*m*i-v*f*i+v*r*d-n*m*d-u*r*p+n*f*p)*E,e[14]=(v*a*i-s*m*i-v*r*l+n*m*l+s*r*p-n*a*p)*E,e[15]=(s*f*i-u*a*i+u*r*l-n*f*l-s*r*d+n*a*d)*E,this}scale(e){const n=this.elements,r=e.x,i=e.y,o=e.z;return n[0]*=r,n[4]*=i,n[8]*=o,n[1]*=r,n[5]*=i,n[9]*=o,n[2]*=r,n[6]*=i,n[10]*=o,n[3]*=r,n[7]*=i,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),o=1-r,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*s,0,c*l-i*a,u*l+i*s,o*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,f=a+a,d=o*c,g=o*u,v=o*f,m=s*u,p=s*f,h=a*f,x=l*c,y=l*u,w=l*f,b=r.x,T=r.y,E=r.z;return i[0]=(1-(m+h))*b,i[1]=(g+w)*b,i[2]=(v-y)*b,i[3]=0,i[4]=(g-w)*T,i[5]=(1-(d+h))*T,i[6]=(p+x)*T,i[7]=0,i[8]=(v+y)*E,i[9]=(p-x)*E,i[10]=(1-(d+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let o=ts.set(i[0],i[1],i[2]).length();const s=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],nr.copy(this);const c=1/o,u=1/s,f=1/a;return nr.elements[0]*=c,nr.elements[1]*=c,nr.elements[2]*=c,nr.elements[4]*=u,nr.elements[5]*=u,nr.elements[6]*=u,nr.elements[8]*=f,nr.elements[9]*=f,nr.elements[10]*=f,n.setFromRotationMatrix(nr),r.x=o,r.y=s,r.z=a,this}makePerspective(e,n,r,i,o,s,a=qr){const l=this.elements,c=2*o/(n-e),u=2*o/(r-i),f=(n+e)/(n-e),d=(r+i)/(r-i);let g,v;if(a===qr)g=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Qu)g=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,o,s,a=qr){const l=this.elements,c=1/(n-e),u=1/(r-i),f=1/(s-o),d=(n+e)*c,g=(r+i)*u;let v,m;if(a===qr)v=(s+o)*f,m=-2*f;else if(a===Qu)v=o*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=m,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ts=new K,nr=new It,GU=new K(0,0,0),jU=new K(1,1,1),pi=new K,Rc=new K,Cn=new K,Hx=new It,Vx=new $l;class jd{constructor(e=0,n=0,r=0,i=jd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,o=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],g=i[10];switch(n){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-yn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Hx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hx,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vx.setFromEuler(this),this.setFromQuaternion(Vx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jd.DEFAULT_ORDER="XYZ";class j1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WU=0;const Gx=new K,ns=new $l,Br=new It,Pc=new K,Ua=new K,$U=new K,XU=new $l,jx=new K(1,0,0),Wx=new K(0,1,0),$x=new K(0,0,1),YU={type:"added"},qU={type:"removed"};class tn extends xa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WU++}),this.uuid=Wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new K,n=new jd,r=new $l,i=new K(1,1,1);function o(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new Qe}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(jx,e)}rotateY(e){return this.rotateOnAxis(Wx,e)}rotateZ(e){return this.rotateOnAxis($x,e)}translateOnAxis(e,n){return Gx.copy(e).applyQuaternion(this.quaternion),this.position.add(Gx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jx,e)}translateY(e){return this.translateOnAxis(Wx,e)}translateZ(e){return this.translateOnAxis($x,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Pc.copy(e):Pc.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(Ua,Pc,this.up):Br.lookAt(Pc,Ua,this.up),this.quaternion.setFromRotationMatrix(Br),i&&(Br.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(Br),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(YU)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qU)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,$U),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,XU,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const o=n[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++){const a=i[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),g=s(e.animations),v=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),d.length>0&&(r.skeletons=d),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=i,r;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}tn.DEFAULT_UP=new K(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new K,zr=new K,rh=new K,Hr=new K,rs=new K,is=new K,Xx=new K,ih=new K,oh=new K,sh=new K;let Nc=!1;class ur{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),rr.subVectors(e,n),i.cross(rr);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,n,r,i,o){rr.subVectors(i,n),zr.subVectors(r,n),rh.subVectors(e,n);const s=rr.dot(rr),a=rr.dot(zr),l=rr.dot(rh),c=zr.dot(zr),u=zr.dot(rh),f=s*c-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,g=(c*l-a*u)*d,v=(s*u-a*l)*d;return o.set(1-g-v,v,g)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Hr)===null?!1:Hr.x>=0&&Hr.y>=0&&Hr.x+Hr.y<=1}static getUV(e,n,r,i,o,s,a,l){return Nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nc=!0),this.getInterpolation(e,n,r,i,o,s,a,l)}static getInterpolation(e,n,r,i,o,s,a,l){return this.getBarycoord(e,n,r,i,Hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Hr.x),l.addScaledVector(s,Hr.y),l.addScaledVector(a,Hr.z),l)}static isFrontFacing(e,n,r,i){return rr.subVectors(r,n),zr.subVectors(e,n),rr.cross(zr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),rr.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ur.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,i,o){return Nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nc=!0),ur.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}getInterpolation(e,n,r,i,o){return ur.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}containsPoint(e){return ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,o=this.c;let s,a;rs.subVectors(i,r),is.subVectors(o,r),ih.subVectors(e,r);const l=rs.dot(ih),c=is.dot(ih);if(l<=0&&c<=0)return n.copy(r);oh.subVectors(e,i);const u=rs.dot(oh),f=is.dot(oh);if(u>=0&&f<=u)return n.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(r).addScaledVector(rs,s);sh.subVectors(e,o);const g=rs.dot(sh),v=is.dot(sh);if(v>=0&&g<=v)return n.copy(o);const m=g*c-l*v;if(m<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(r).addScaledVector(is,a);const p=u*v-g*f;if(p<=0&&f-u>=0&&g-v>=0)return Xx.subVectors(o,i),a=(f-u)/(f-u+(g-v)),n.copy(i).addScaledVector(Xx,a);const h=1/(p+m+d);return s=m*h,a=d*h,n.copy(r).addScaledVector(rs,s).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function ah(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,ct.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=ct.workingColorSpace){if(e=IU(e,1),n=yn(n,0,1),r=yn(r,0,1),n===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+n):r+n-r*n,s=2*r-o;this.r=ah(s,o,e+1/3),this.g=ah(s,o,e),this.b=ah(s,o,e-1/3)}return ct.toWorkingColorSpace(this,i),this}setStyle(e,n=jt){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jt){const r=W1[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=qf(e.r),this.g=qf(e.g),this.b=qf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ct.fromWorkingColorSpace(Zt.copy(this),e),Math.round(yn(Zt.r*255,0,255))*65536+Math.round(yn(Zt.g*255,0,255))*256+Math.round(yn(Zt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(Zt.copy(this),n);const r=Zt.r,i=Zt.g,o=Zt.b,s=Math.max(r,i,o),a=Math.min(r,i,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=u<=.5?f/(s+a):f/(2-s-a),s){case r:l=(i-o)/f+(i<o?6:0);break;case i:l=(o-r)/f+2;break;case o:l=(r-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=jt){ct.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,r=Zt.g,i=Zt.b;return e!==jt?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+n,mi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mi),e.getHSL(Lc);const r=Xf(mi.h,Lc.h,n),i=Xf(mi.s,Lc.s,n),o=Xf(mi.l,Lc.l,n);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*n+o[3]*r+o[6]*i,this.g=o[1]*n+o[4]*r+o[7]*i,this.b=o[2]*n+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new et;et.NAMES=W1;let KU=0;class ya extends xa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KU++}),this.uuid=Wl(),this.name="",this.type="Material",this.blending=ks,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bp,this.blendDst=zp,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Xu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==qi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bp&&(r.blendSrc=this.blendSrc),this.blendDst!==zp&&(r.blendDst=this.blendDst),this.blendEquation!==po&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xu&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ko&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ko&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ko&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=n[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $1 extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new K,Dc=new ot;class Lr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ix,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Dc.fromBufferAttribute(this,n),Dc.applyMatrix3(e),this.setXY(n,Dc.x,Dc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Da(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=vn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Da(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Da(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Da(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Da(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),r=vn(r,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,o){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),r=vn(r,this.array),i=vn(i,this.array),o=vn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ix&&(e.usage=this.usage),e}}class X1 extends Lr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Y1 extends Lr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ao extends Lr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let QU=0;const Vn=new It,lh=new tn,os=new K,An=new Xl,Fa=new Xl,Bt=new K;class Wo extends xa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QU++}),this.uuid=Wl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z1(e)?Y1:X1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new Qe().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,r){return Vn.makeTranslation(e,n,r),this.applyMatrix4(Vn),this}scale(e,n,r){return Vn.makeScale(e,n,r),this.applyMatrix4(Vn),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ao(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const o=n[r];An.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fg);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Fa.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(An.min,Fa.min),An.expandByPoint(Bt),Bt.addVectors(An.max,Fa.max),An.expandByPoint(Bt)):(An.expandByPoint(Fa.min),An.expandByPoint(Fa.max))}An.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)Bt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(Bt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),Bt.add(os)),i=Math.max(i,r.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=n.position.array,o=n.normal.array,s=n.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lr(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new K,u[C]=new K;const f=new K,d=new K,g=new K,v=new ot,m=new ot,p=new ot,h=new K,x=new K;function y(C,B,F){f.fromArray(i,C*3),d.fromArray(i,B*3),g.fromArray(i,F*3),v.fromArray(s,C*2),m.fromArray(s,B*2),p.fromArray(s,F*2),d.sub(f),g.sub(f),m.sub(v),p.sub(v);const Q=1/(m.x*p.y-p.x*m.y);isFinite(Q)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(g,-m.y).multiplyScalar(Q),x.copy(g).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(Q),c[C].add(h),c[B].add(h),c[F].add(h),u[C].add(x),u[B].add(x),u[F].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:r.length}]);for(let C=0,B=w.length;C<B;++C){const F=w[C],Q=F.start,N=F.count;for(let z=Q,k=Q+N;z<k;z+=3)y(r[z+0],r[z+1],r[z+2])}const b=new K,T=new K,E=new K,D=new K;function M(C){E.fromArray(o,C*3),D.copy(E);const B=c[C];b.copy(B),b.sub(E.multiplyScalar(E.dot(B))).normalize(),T.crossVectors(D,B);const Q=T.dot(u[C])<0?-1:1;l[C*4]=b.x,l[C*4+1]=b.y,l[C*4+2]=b.z,l[C*4+3]=Q}for(let C=0,B=w.length;C<B;++C){const F=w[C],Q=F.start,N=F.count;for(let z=Q,k=Q+N;z<k;z+=3)M(r[z+0]),M(r[z+1]),M(r[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Lr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let d=0,g=r.count;d<g;d++)r.setXYZ(d,0,0,0);const i=new K,o=new K,s=new K,a=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),s.fromBufferAttribute(n,p),u.subVectors(s,o),f.subVectors(i,o),u.cross(f),a.fromBufferAttribute(r,v),l.fromBufferAttribute(r,m),c.fromBufferAttribute(r,p),a.add(u),l.add(u),c.add(u),r.setXYZ(v,a.x,a.y,a.z),r.setXYZ(m,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)i.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),u.subVectors(s,o),f.subVectors(i,o),u.cross(f),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let g=0,v=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?g=l[m]*a.data.stride+a.offset:g=l[m]*u;for(let h=0;h<u;h++)d[v++]=c[g++]}return new Lr(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wo,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],g=e(d,r);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],f=o[c];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yx=new It,ao=new VU,Ic=new Fg,qx=new K,ss=new K,as=new K,ls=new K,ch=new K,Oc=new K,Uc=new ot,Fc=new ot,kc=new ot,Kx=new K,Qx=new K,Zx=new K,Bc=new K,zc=new K;class Rr extends tn{constructor(e=new Wo,n=new $1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){Oc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],f=o[l];u!==0&&(ch.fromBufferAttribute(f,e),s?Oc.addScaledVector(ch,u):Oc.addScaledVector(ch.sub(n),u))}n.add(Oc)}return n}raycast(e,n){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(o),ao.copy(e.ray).recast(e.near),!(Ic.containsPoint(ao.origin)===!1&&(ao.intersectSphere(Ic,qx)===null||ao.origin.distanceToSquared(qx)>(e.far-e.near)**2))&&(Yx.copy(o).invert(),ao.copy(e.ray).applyMatrix4(Yx),!(r.boundingBox!==null&&ao.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ao)))}_computeIntersections(e,n,r){let i;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,m=d.length;v<m;v++){const p=d[v],h=s[p.materialIndex],x=Math.max(p.start,g.start),y=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let w=x,b=y;w<b;w+=3){const T=a.getX(w),E=a.getX(w+1),D=a.getX(w+2);i=Hc(this,h,e,r,c,u,f,T,E,D),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,n.push(i))}}else{const v=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let p=v,h=m;p<h;p+=3){const x=a.getX(p),y=a.getX(p+1),w=a.getX(p+2);i=Hc(this,s,e,r,c,u,f,x,y,w),i&&(i.faceIndex=Math.floor(p/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,m=d.length;v<m;v++){const p=d[v],h=s[p.materialIndex],x=Math.max(p.start,g.start),y=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let w=x,b=y;w<b;w+=3){const T=w,E=w+1,D=w+2;i=Hc(this,h,e,r,c,u,f,T,E,D),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,n.push(i))}}else{const v=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let p=v,h=m;p<h;p+=3){const x=p,y=p+1,w=p+2;i=Hc(this,s,e,r,c,u,f,x,y,w),i&&(i.faceIndex=Math.floor(p/3),n.push(i))}}}}function ZU(t,e,n,r,i,o,s,a){let l;if(e.side===Mn?l=r.intersectTriangle(s,o,i,!0,a):l=r.intersectTriangle(i,o,s,e.side===qi,a),l===null)return null;zc.copy(a),zc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zc);return c<n.near||c>n.far?null:{distance:c,point:zc.clone(),object:t}}function Hc(t,e,n,r,i,o,s,a,l,c){t.getVertexPosition(a,ss),t.getVertexPosition(l,as),t.getVertexPosition(c,ls);const u=ZU(t,e,n,r,ss,as,ls,Bc);if(u){i&&(Uc.fromBufferAttribute(i,a),Fc.fromBufferAttribute(i,l),kc.fromBufferAttribute(i,c),u.uv=ur.getInterpolation(Bc,ss,as,ls,Uc,Fc,kc,new ot)),o&&(Uc.fromBufferAttribute(o,a),Fc.fromBufferAttribute(o,l),kc.fromBufferAttribute(o,c),u.uv1=ur.getInterpolation(Bc,ss,as,ls,Uc,Fc,kc,new ot),u.uv2=u.uv1),s&&(Kx.fromBufferAttribute(s,a),Qx.fromBufferAttribute(s,l),Zx.fromBufferAttribute(s,c),u.normal=ur.getInterpolation(Bc,ss,as,ls,Kx,Qx,Zx,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new K,materialIndex:0};ur.getNormal(ss,as,ls,f.normal),u.face=f}return u}class _a extends Wo{constructor(e=1,n=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};const a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],f=[];let d=0,g=0;v("z","y","x",-1,-1,r,n,e,s,o,0),v("z","y","x",1,-1,r,n,-e,s,o,1),v("x","z","y",1,1,e,r,n,i,s,2),v("x","z","y",1,-1,e,r,-n,i,s,3),v("x","y","z",1,-1,e,n,r,i,o,4),v("x","y","z",-1,-1,e,n,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new Ao(c,3)),this.setAttribute("normal",new Ao(u,3)),this.setAttribute("uv",new Ao(f,2));function v(m,p,h,x,y,w,b,T,E,D,M){const C=w/E,B=b/D,F=w/2,Q=b/2,N=T/2,z=E+1,k=D+1;let $=0,L=0;const I=new K;for(let O=0;O<k;O++){const H=O*B-Q;for(let W=0;W<z;W++){const G=W*C-F;I[m]=G*x,I[p]=H*y,I[h]=N,c.push(I.x,I.y,I.z),I[m]=0,I[p]=0,I[h]=T>0?1:-1,u.push(I.x,I.y,I.z),f.push(W/E),f.push(1-O/D),$+=1}}for(let O=0;O<D;O++)for(let H=0;H<E;H++){const W=d+H+z*O,G=d+H+z*(O+1),Z=d+(H+1)+z*(O+1),ce=d+(H+1)+z*O;l.push(W,G,ce),l.push(G,Z,ce),L+=6}a.addGroup(g,L,M),g+=L,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const r=la(t[n]);for(const i in r)e[i]=r[i]}return e}function JU(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function q1(t){return t.getRenderTarget()===null?t.outputColorSpace:ct.workingColorSpace}const eF={clone:la,merge:ln};var tF=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nF=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ko extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tF,this.fragmentShader=nF,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=JU(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?n.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[i]={type:"m4",value:s.toArray()}:n.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class K1 extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=qr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xn extends K1{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$p*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $p*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,i,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($f*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*i/l,n-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class rF extends tn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xn(cs,us,e,n);i.layers=this.layers,this.add(i);const o=new Xn(cs,us,e,n);o.layers=this.layers,this.add(o);const s=new Xn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new Xn(cs,us,e,n);a.layers=this.layers,this.add(a);const l=new Xn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new Xn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===qr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,o),e.setRenderTarget(r,1,i),e.render(n,s),e.setRenderTarget(r,2,i),e.render(n,a),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=m,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(f,d,g),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class Q1 extends Un{constructor(e,n,r,i,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:oa,super(e,n,r,i,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iF extends Fo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];n.encoding!==void 0&&(nl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Co?jt:Yn),this.texture=new Q1(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _a(5,5,5),o=new ko({name:"CubemapFromEquirect",uniforms:la(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mn,blending:zi});o.uniforms.tEquirect.value=n;const s=new Rr(i,o),a=n.minFilter;return n.minFilter===Cl&&(n.minFilter=$n),new rF(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,r,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,r,i);e.setRenderTarget(o)}}const uh=new K,oF=new K,sF=new Qe;class fo{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=uh.subVectors(r,n).cross(oF.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(uh),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||sF.getNormalMatrix(e),i=this.coplanarPoint(uh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lo=new Fg,Vc=new K;class kg{constructor(e=new fo,n=new fo,r=new fo,i=new fo,o=new fo,s=new fo){this.planes=[e,n,r,i,o,s]}set(e,n,r,i,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=qr){const r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],g=i[8],v=i[9],m=i[10],p=i[11],h=i[12],x=i[13],y=i[14],w=i[15];if(r[0].setComponents(l-o,d-c,p-g,w-h).normalize(),r[1].setComponents(l+o,d+c,p+g,w+h).normalize(),r[2].setComponents(l+s,d+u,p+v,w+x).normalize(),r[3].setComponents(l-s,d-u,p-v,w-x).normalize(),r[4].setComponents(l-a,d-f,p-m,w-y).normalize(),n===qr)r[5].setComponents(l+a,d+f,p+m,w+y).normalize();else if(n===Qu)r[5].setComponents(a,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lo)}intersectsSprite(e){return lo.center.set(0,0,0),lo.radius=.7071067811865476,lo.applyMatrix4(e.matrixWorld),this.intersectsSphere(lo)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Vc.x=i.normal.x>0?e.max.x:e.min.x,Vc.y=i.normal.y>0?e.max.y:e.min.y,Vc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z1(){let t=null,e=!1,n=null,r=null;function i(o,s){n(o,s),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function aF(t,e){const n=e.isWebGL2,r=new WeakMap;function i(c,u){const f=c.array,d=c.usage,g=f.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,f,d),c.onUploadCallback();let m;if(f instanceof Float32Array)m=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)m=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=t.SHORT;else if(f instanceof Uint32Array)m=t.UNSIGNED_INT;else if(f instanceof Int32Array)m=t.INT;else if(f instanceof Int8Array)m=t.BYTE;else if(f instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function o(c,u,f){const d=u.array,g=u._updateRange,v=u.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&v.length===0&&t.bufferSubData(f,0,d),v.length!==0){for(let m=0,p=v.length;m<p;m++){const h=v[m];n?t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(t.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);if(f===void 0)r.set(c,i(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,c,u),f.version=c.version}}return{get:s,remove:a,update:l}}class Bg extends Wo{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const o=e/2,s=n/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=n/l,g=[],v=[],m=[],p=[];for(let h=0;h<u;h++){const x=h*d-s;for(let y=0;y<c;y++){const w=y*f-o;v.push(w,-x,0),m.push(0,0,1),p.push(y/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const y=x+c*h,w=x+c*(h+1),b=x+1+c*(h+1),T=x+1+c*h;g.push(y,w,T),g.push(w,b,T)}this.setIndex(g),this.setAttribute("position",new Ao(v,3)),this.setAttribute("normal",new Ao(m,3)),this.setAttribute("uv",new Ao(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bg(e.width,e.height,e.widthSegments,e.heightSegments)}}var lF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cF=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fF=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pF=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gF=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_F=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SF=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wF=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EF=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,MF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,PF=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NF=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LF=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DF=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kF="gl_FragColor = linearToOutputTexel( gl_FragColor );",BF=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VF=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$F=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qF=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KF=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,QF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JF=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ek=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tk=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nk=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rk=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ik=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ok=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sk=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ak=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lk=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ck=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uk=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dk=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fk=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hk=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pk=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mk=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gk=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vk=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xk=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yk=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_k=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sk=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wk=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ek=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mk=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bk=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tk=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ck=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ak=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rk=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pk=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nk=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lk=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dk=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ik=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ok=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uk=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fk=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kk=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bk=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zk=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hk=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vk=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gk=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jk=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wk=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$k=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xk=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yk=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qk=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kk=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qk=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zk=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jk=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,m4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,v4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:lF,alphahash_pars_fragment:cF,alphamap_fragment:uF,alphamap_pars_fragment:dF,alphatest_fragment:fF,alphatest_pars_fragment:hF,aomap_fragment:pF,aomap_pars_fragment:mF,batching_pars_vertex:gF,batching_vertex:vF,begin_vertex:xF,beginnormal_vertex:yF,bsdfs:_F,iridescence_fragment:SF,bumpmap_pars_fragment:wF,clipping_planes_fragment:EF,clipping_planes_pars_fragment:MF,clipping_planes_pars_vertex:bF,clipping_planes_vertex:TF,color_fragment:CF,color_pars_fragment:AF,color_pars_vertex:RF,color_vertex:PF,common:NF,cube_uv_reflection_fragment:LF,defaultnormal_vertex:DF,displacementmap_pars_vertex:IF,displacementmap_vertex:OF,emissivemap_fragment:UF,emissivemap_pars_fragment:FF,colorspace_fragment:kF,colorspace_pars_fragment:BF,envmap_fragment:zF,envmap_common_pars_fragment:HF,envmap_pars_fragment:VF,envmap_pars_vertex:GF,envmap_physical_pars_fragment:tk,envmap_vertex:jF,fog_vertex:WF,fog_pars_vertex:$F,fog_fragment:XF,fog_pars_fragment:YF,gradientmap_pars_fragment:qF,lightmap_fragment:KF,lightmap_pars_fragment:QF,lights_lambert_fragment:ZF,lights_lambert_pars_fragment:JF,lights_pars_begin:ek,lights_toon_fragment:nk,lights_toon_pars_fragment:rk,lights_phong_fragment:ik,lights_phong_pars_fragment:ok,lights_physical_fragment:sk,lights_physical_pars_fragment:ak,lights_fragment_begin:lk,lights_fragment_maps:ck,lights_fragment_end:uk,logdepthbuf_fragment:dk,logdepthbuf_pars_fragment:fk,logdepthbuf_pars_vertex:hk,logdepthbuf_vertex:pk,map_fragment:mk,map_pars_fragment:gk,map_particle_fragment:vk,map_particle_pars_fragment:xk,metalnessmap_fragment:yk,metalnessmap_pars_fragment:_k,morphcolor_vertex:Sk,morphnormal_vertex:wk,morphtarget_pars_vertex:Ek,morphtarget_vertex:Mk,normal_fragment_begin:bk,normal_fragment_maps:Tk,normal_pars_fragment:Ck,normal_pars_vertex:Ak,normal_vertex:Rk,normalmap_pars_fragment:Pk,clearcoat_normal_fragment_begin:Nk,clearcoat_normal_fragment_maps:Lk,clearcoat_pars_fragment:Dk,iridescence_pars_fragment:Ik,opaque_fragment:Ok,packing:Uk,premultiplied_alpha_fragment:Fk,project_vertex:kk,dithering_fragment:Bk,dithering_pars_fragment:zk,roughnessmap_fragment:Hk,roughnessmap_pars_fragment:Vk,shadowmap_pars_fragment:Gk,shadowmap_pars_vertex:jk,shadowmap_vertex:Wk,shadowmask_pars_fragment:$k,skinbase_vertex:Xk,skinning_pars_vertex:Yk,skinning_vertex:qk,skinnormal_vertex:Kk,specularmap_fragment:Qk,specularmap_pars_fragment:Zk,tonemapping_fragment:Jk,tonemapping_pars_fragment:e4,transmission_fragment:t4,transmission_pars_fragment:n4,uv_pars_fragment:r4,uv_pars_vertex:i4,uv_vertex:o4,worldpos_vertex:s4,background_vert:a4,background_frag:l4,backgroundCube_vert:c4,backgroundCube_frag:u4,cube_vert:d4,cube_frag:f4,depth_vert:h4,depth_frag:p4,distanceRGBA_vert:m4,distanceRGBA_frag:g4,equirect_vert:v4,equirect_frag:x4,linedashed_vert:y4,linedashed_frag:_4,meshbasic_vert:S4,meshbasic_frag:w4,meshlambert_vert:E4,meshlambert_frag:M4,meshmatcap_vert:b4,meshmatcap_frag:T4,meshnormal_vert:C4,meshnormal_frag:A4,meshphong_vert:R4,meshphong_frag:P4,meshphysical_vert:N4,meshphysical_frag:L4,meshtoon_vert:D4,meshtoon_frag:I4,points_vert:O4,points_frag:U4,shadow_vert:F4,shadow_frag:k4,sprite_vert:B4,sprite_frag:z4},pe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Tr={basic:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ln([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ln([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ln([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ln([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ln([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ln([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:ln([pe.common,pe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:ln([pe.lights,pe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Tr.physical={uniforms:ln([Tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Gc={r:0,b:0,g:0};function H4(t,e,n,r,i,o,s){const a=new et(0);let l=o===!0?0:1,c,u,f=null,d=0,g=null;function v(p,h){let x=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?n:e).get(y)),y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?r.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Vd)?(u===void 0&&(u=new Rr(new _a(1,1,1),new ko({name:"BackgroundCubeMaterial",uniforms:la(Tr.backgroundCube.uniforms),vertexShader:Tr.backgroundCube.vertexShader,fragmentShader:Tr.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ct.getTransfer(y.colorSpace)!==xt,(f!==y||d!==y.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rr(new Bg(2,2),new ko({name:"BackgroundMaterial",uniforms:la(Tr.background.uniforms),vertexShader:Tr.background.vertexShader,fragmentShader:Tr.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ct.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,h){p.getRGB(Gc,q1(t)),r.buffers.color.setClear(Gc.r,Gc.g,Gc.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:v}}function V4(t,e,n,r){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||o!==null,a={},l=p(null);let c=l,u=!1;function f(N,z,k,$,L){let I=!1;if(s){const O=m($,k,z);c!==O&&(c=O,g(c.object)),I=h(N,$,k,L),I&&x(N,$,k,L)}else{const O=z.wireframe===!0;(c.geometry!==$.id||c.program!==k.id||c.wireframe!==O)&&(c.geometry=$.id,c.program=k.id,c.wireframe=O,I=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(I||u)&&(u=!1,D(N,z,k,$),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function d(){return r.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function g(N){return r.isWebGL2?t.bindVertexArray(N):o.bindVertexArrayOES(N)}function v(N){return r.isWebGL2?t.deleteVertexArray(N):o.deleteVertexArrayOES(N)}function m(N,z,k){const $=k.wireframe===!0;let L=a[N.id];L===void 0&&(L={},a[N.id]=L);let I=L[z.id];I===void 0&&(I={},L[z.id]=I);let O=I[$];return O===void 0&&(O=p(d()),I[$]=O),O}function p(N){const z=[],k=[],$=[];for(let L=0;L<i;L++)z[L]=0,k[L]=0,$[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:$,object:N,attributes:{},index:null}}function h(N,z,k,$){const L=c.attributes,I=z.attributes;let O=0;const H=k.getAttributes();for(const W in H)if(H[W].location>=0){const Z=L[W];let ce=I[W];if(ce===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;O++}return c.attributesNum!==O||c.index!==$}function x(N,z,k,$){const L={},I=z.attributes;let O=0;const H=k.getAttributes();for(const W in H)if(H[W].location>=0){let Z=I[W];Z===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),L[W]=ce,O++}c.attributes=L,c.attributesNum=O,c.index=$}function y(){const N=c.newAttributes;for(let z=0,k=N.length;z<k;z++)N[z]=0}function w(N){b(N,0)}function b(N,z){const k=c.newAttributes,$=c.enabledAttributes,L=c.attributeDivisors;k[N]=1,$[N]===0&&(t.enableVertexAttribArray(N),$[N]=1),L[N]!==z&&((r.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),L[N]=z)}function T(){const N=c.newAttributes,z=c.enabledAttributes;for(let k=0,$=z.length;k<$;k++)z[k]!==N[k]&&(t.disableVertexAttribArray(k),z[k]=0)}function E(N,z,k,$,L,I,O){O===!0?t.vertexAttribIPointer(N,z,k,L,I):t.vertexAttribPointer(N,z,k,$,L,I)}function D(N,z,k,$){if(r.isWebGL2===!1&&(N.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const L=$.attributes,I=k.getAttributes(),O=z.defaultAttributeValues;for(const H in I){const W=I[H];if(W.location>=0){let G=L[H];if(G===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const Z=G.normalized,ce=G.itemSize,oe=n.get(G);if(oe===void 0)continue;const ee=oe.buffer,ge=oe.type,xe=oe.bytesPerElement,de=r.isWebGL2===!0&&(ge===t.INT||ge===t.UNSIGNED_INT||G.gpuType===P1);if(G.isInterleavedBufferAttribute){const Me=G.data,V=Me.stride,nt=G.offset;if(Me.isInstancedInterleavedBuffer){for(let Ce=0;Ce<W.locationSize;Ce++)b(W.location+Ce,Me.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)w(W.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let Ce=0;Ce<W.locationSize;Ce++)E(W.location+Ce,ce/W.locationSize,ge,Z,V*xe,(nt+ce/W.locationSize*Ce)*xe,de)}else{if(G.isInstancedBufferAttribute){for(let Me=0;Me<W.locationSize;Me++)b(W.location+Me,G.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Me=0;Me<W.locationSize;Me++)w(W.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let Me=0;Me<W.locationSize;Me++)E(W.location+Me,ce/W.locationSize,ge,Z,ce*xe,ce/W.locationSize*Me*xe,de)}}else if(O!==void 0){const Z=O[H];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(W.location,Z);break;case 3:t.vertexAttrib3fv(W.location,Z);break;case 4:t.vertexAttrib4fv(W.location,Z);break;default:t.vertexAttrib1fv(W.location,Z)}}}}T()}function M(){F();for(const N in a){const z=a[N];for(const k in z){const $=z[k];for(const L in $)v($[L].object),delete $[L];delete z[k]}delete a[N]}}function C(N){if(a[N.id]===void 0)return;const z=a[N.id];for(const k in z){const $=z[k];for(const L in $)v($[L].object),delete $[L];delete z[k]}delete a[N.id]}function B(N){for(const z in a){const k=a[z];if(k[N.id]===void 0)continue;const $=k[N.id];for(const L in $)v($[L].object),delete $[L];delete k[N.id]}}function F(){Q(),u=!0,c!==l&&(c=l,g(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:w,disableUnusedAttributes:T}}function G4(t,e,n,r){const i=r.isWebGL2;let o;function s(u){o=u}function a(u,f){t.drawArrays(o,u,f),n.update(f,o,1)}function l(u,f,d){if(d===0)return;let g,v;if(i)g=t,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](o,u,f,d),n.update(f,o,d)}function c(u,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(u[v],f[v]);else{g.multiDrawArraysWEBGL(o,u,0,f,0,d);let v=0;for(let m=0;m<d;m++)v+=f[m];n.update(v,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function j4(t,e,n){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,w=s||e.has("OES_texture_float"),b=y&&w,T=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:b,maxSamples:T}}function W4(t){const e=this;let n=null,r=0,i=!1,o=!1;const s=new fo,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||r!==0||i;return i=d,r=f.length,g},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,g){const v=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,h=t.get(f);if(!i||v===null||v.length===0||o&&!p)o?u(null):c();else{const x=o?0:r,y=x*4;let w=h.clippingState||null;l.value=w,w=u(v,d,y,g);for(let b=0;b!==y;++b)w[b]=n[b];h.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,d,g,v){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,v!==!0||p===null){const h=g+m*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,w=g;y!==m;++y,w+=4)s.copy(f[y]).applyMatrix4(x,a),s.normal.toArray(p,w),p[w+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function $4(t){let e=new WeakMap;function n(s,a){return a===Hp?s.mapping=oa:a===Vp&&(s.mapping=sa),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===Hp||a===Vp)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new iF(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",i),n(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}class J1 extends K1{constructor(e=-1,n=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,s=r+e,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,Jx=[.125,.215,.35,.446,.526,.582],mo=20,dh=new J1,ey=new et;let fh=null,hh=0,ph=0;const ho=(1+Math.sqrt(5))/2,ds=1/ho,ty=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,ho,ds),new K(0,ho,-ds),new K(ds,0,ho),new K(-ds,0,ho),new K(ho,ds,0),new K(-ho,ds,0)];class ny{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,hh,ph),e.scissorTest=!1,jc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===oa||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Al,format:fr,colorSpace:oi,depthBuffer:!1},i=ry(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ry(e,n,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X4(o)),this._blurMaterial=Y4(o,e,n)}return i}_compileMaterial(e){const n=new Rr(this._lodPlanes[0],e);this._renderer.compile(n,dh)}_sceneToCubeUV(e,n,r,i){const a=new Xn(90,1,n,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ey),u.toneMapping=Hi,u.autoClear=!1;const g=new $1({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),v=new Rr(new _a,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(ey),m=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;jc(i,x*y,h>2?y:0,y,y),u.setRenderTarget(i),m&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===oa||e.mapping===sa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iy());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new Rr(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;jc(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(s,dh)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=ty[(i-1)%ty.length];this._blur(e,i-1,i,o,s)}n.autoClear=r}_blur(e,n,r,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,n,r,i,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Rr(this._lodPlanes[i],c),d=c.uniforms,g=this._sizeLods[r]-1,v=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*mo-1),m=o/v,p=isFinite(o)?1+Math.floor(u*m):mo;p>mo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mo}`);const h=[];let x=0;for(let E=0;E<mo;++E){const D=E/m,M=Math.exp(-D*D/2);h.push(M),E===0?x+=M:E<p&&(x+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-r;const w=this._sizeLods[i],b=3*w*(i>y-Ts?i-y+Ts:0),T=4*(this._cubeSize-w);jc(n,b,T,3*w,2*w),l.setRenderTarget(n),l.render(f,dh)}}function X4(t){const e=[],n=[],r=[];let i=t;const o=t-Ts+1+Jx.length;for(let s=0;s<o;s++){const a=Math.pow(2,i);n.push(a);let l=1/a;s>t-Ts?l=Jx[s-t+Ts-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,v=6,m=3,p=2,h=1,x=new Float32Array(m*v*g),y=new Float32Array(p*v*g),w=new Float32Array(h*v*g);for(let T=0;T<g;T++){const E=T%3*2/3-1,D=T>2?0:-1,M=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];x.set(M,m*v*T),y.set(d,p*v*T);const C=[T,T,T,T,T,T];w.set(C,h*v*T)}const b=new Wo;b.setAttribute("position",new Lr(x,m)),b.setAttribute("uv",new Lr(y,p)),b.setAttribute("faceIndex",new Lr(w,h)),e.push(b),i>Ts&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ry(t,e,n){const r=new Fo(t,e,n);return r.texture.mapping=Vd,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function jc(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function Y4(t,e,n){const r=new Float32Array(mo),i=new K(0,1,0);return new ko({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function iy(){return new ko({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function oy(){return new ko({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function zg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q4(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hp||l===Vp,u=l===oa||l===sa;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new ny(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){n===null&&(n=new ny(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:s}}function K4(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function Q4(t,e,n,r){const i={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const m=d.morphAttributes[v];for(let p=0,h=m.length;p<h;p++)e.remove(m[p])}d.removeEventListener("dispose",s),delete i[d.id];const g=o.get(d);g&&(e.remove(g),o.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const m=g[v];for(let p=0,h=m.length;p<h;p++)e.update(m[p],t.ARRAY_BUFFER)}}function c(f){const d=[],g=f.index,v=f.attributes.position;let m=0;if(g!==null){const x=g.array;m=g.version;for(let y=0,w=x.length;y<w;y+=3){const b=x[y+0],T=x[y+1],E=x[y+2];d.push(b,T,T,E,E,b)}}else if(v!==void 0){const x=v.array;m=v.version;for(let y=0,w=x.length/3-1;y<w;y+=3){const b=y+0,T=y+1,E=y+2;d.push(b,T,T,E,E,b)}}else return;const p=new(z1(d)?Y1:X1)(d,1);p.version=m;const h=o.get(f);h&&e.remove(h),o.set(f,p)}function u(f){const d=o.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Z4(t,e,n,r){const i=r.isWebGL2;let o;function s(g){o=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function u(g,v){t.drawElements(o,v,a,g*l),n.update(v,o,1)}function f(g,v,m){if(m===0)return;let p,h;if(i)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](o,v,a,g*l,m),n.update(v,o,m)}function d(g,v,m){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<m;h++)this.render(g[h]/l,v[h]);else{p.multiDrawElementsWEBGL(o,v,0,a,g,0,m);let h=0;for(let x=0;x<m;x++)h+=v[x];n.update(h,o,1)}}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function J4(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function e5(t,e){return t[0]-e[0]}function t5(t,e){return Math.abs(e[1])-Math.abs(t[1])}function n5(t,e,n){const r={},i=new Float32Array(8),o=new WeakMap,s=new Ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=v!==void 0?v.length:0;let p=o.get(u);if(p===void 0||p.count!==m){let z=function(){Q.dispose(),o.delete(u),u.removeEventListener("dispose",z)};var g=z;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),w===!0&&(M=2),b===!0&&(M=3);let C=u.attributes.position.count*M,B=1;C>e.maxTextureSize&&(B=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const F=new Float32Array(C*B*4*m),Q=new G1(F,C,B,m);Q.type=Ni,Q.needsUpdate=!0;const N=M*4;for(let k=0;k<m;k++){const $=T[k],L=E[k],I=D[k],O=C*B*4*k;for(let H=0;H<$.count;H++){const W=H*N;y===!0&&(s.fromBufferAttribute($,H),F[O+W+0]=s.x,F[O+W+1]=s.y,F[O+W+2]=s.z,F[O+W+3]=0),w===!0&&(s.fromBufferAttribute(L,H),F[O+W+4]=s.x,F[O+W+5]=s.y,F[O+W+6]=s.z,F[O+W+7]=0),b===!0&&(s.fromBufferAttribute(I,H),F[O+W+8]=s.x,F[O+W+9]=s.y,F[O+W+10]=s.z,F[O+W+11]=I.itemSize===4?s.w:1)}}p={count:m,texture:Q,size:new ot(C,B)},o.set(u,p),u.addEventListener("dispose",z)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const x=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let m=r[u.id];if(m===void 0||m.length!==v){m=[];for(let w=0;w<v;w++)m[w]=[w,0];r[u.id]=m}for(let w=0;w<v;w++){const b=m[w];b[0]=w,b[1]=d[w]}m.sort(t5);for(let w=0;w<8;w++)w<v&&m[w][1]?(a[w][0]=m[w][0],a[w][1]=m[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(e5);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const b=a[w],T=b[0],E=b[1];T!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+w)!==p[T]&&u.setAttribute("morphTarget"+w,p[T]),h&&u.getAttribute("morphNormal"+w)!==h[T]&&u.setAttribute("morphNormal"+w,h[T]),i[w]=E,x+=E):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),h&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),i[w]=0)}const y=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",i)}}return{update:l}}function r5(t,e,n,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class eT extends Un{constructor(e,n,r,i,o,s,a,l,c,u){if(u=u!==void 0?u:To,u!==To&&u!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===To&&(r=Pi),r===void 0&&u===aa&&(r=bo),super(null,i,o,s,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const tT=new Un,nT=new eT(1,1);nT.compareFunction=B1;const rT=new G1,iT=new zU,oT=new Q1,sy=[],ay=[],ly=new Float32Array(16),cy=new Float32Array(9),uy=new Float32Array(4);function Sa(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let o=sy[i];if(o===void 0&&(o=new Float32Array(i),sy[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Wd(t,e){let n=ay[e];n===void 0&&(n=new Int32Array(e),ay[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function i5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function o5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function s5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function a5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function l5(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,r))return;uy.set(r),t.uniformMatrix2fv(this.addr,!1,uy),Ut(n,r)}}function c5(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,r))return;cy.set(r),t.uniformMatrix3fv(this.addr,!1,cy),Ut(n,r)}}function u5(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,r))return;ly.set(r),t.uniformMatrix4fv(this.addr,!1,ly),Ut(n,r)}}function d5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function f5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function h5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function p5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function m5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function g5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function v5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function x5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function y5(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);const o=this.type===t.SAMPLER_2D_SHADOW?nT:tT;n.setTexture2D(e||o,i)}function _5(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||iT,i)}function S5(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||oT,i)}function w5(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||rT,i)}function E5(t){switch(t){case 5126:return i5;case 35664:return o5;case 35665:return s5;case 35666:return a5;case 35674:return l5;case 35675:return c5;case 35676:return u5;case 5124:case 35670:return d5;case 35667:case 35671:return f5;case 35668:case 35672:return h5;case 35669:case 35673:return p5;case 5125:return m5;case 36294:return g5;case 36295:return v5;case 36296:return x5;case 35678:case 36198:case 36298:case 36306:case 35682:return y5;case 35679:case 36299:case 36307:return _5;case 35680:case 36300:case 36308:case 36293:return S5;case 36289:case 36303:case 36311:case 36292:return w5}}function M5(t,e){t.uniform1fv(this.addr,e)}function b5(t,e){const n=Sa(e,this.size,2);t.uniform2fv(this.addr,n)}function T5(t,e){const n=Sa(e,this.size,3);t.uniform3fv(this.addr,n)}function C5(t,e){const n=Sa(e,this.size,4);t.uniform4fv(this.addr,n)}function A5(t,e){const n=Sa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function R5(t,e){const n=Sa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function P5(t,e){const n=Sa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function N5(t,e){t.uniform1iv(this.addr,e)}function L5(t,e){t.uniform2iv(this.addr,e)}function D5(t,e){t.uniform3iv(this.addr,e)}function I5(t,e){t.uniform4iv(this.addr,e)}function O5(t,e){t.uniform1uiv(this.addr,e)}function U5(t,e){t.uniform2uiv(this.addr,e)}function F5(t,e){t.uniform3uiv(this.addr,e)}function k5(t,e){t.uniform4uiv(this.addr,e)}function B5(t,e,n){const r=this.cache,i=e.length,o=Wd(n,i);Ot(r,o)||(t.uniform1iv(this.addr,o),Ut(r,o));for(let s=0;s!==i;++s)n.setTexture2D(e[s]||tT,o[s])}function z5(t,e,n){const r=this.cache,i=e.length,o=Wd(n,i);Ot(r,o)||(t.uniform1iv(this.addr,o),Ut(r,o));for(let s=0;s!==i;++s)n.setTexture3D(e[s]||iT,o[s])}function H5(t,e,n){const r=this.cache,i=e.length,o=Wd(n,i);Ot(r,o)||(t.uniform1iv(this.addr,o),Ut(r,o));for(let s=0;s!==i;++s)n.setTextureCube(e[s]||oT,o[s])}function V5(t,e,n){const r=this.cache,i=e.length,o=Wd(n,i);Ot(r,o)||(t.uniform1iv(this.addr,o),Ut(r,o));for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||rT,o[s])}function G5(t){switch(t){case 5126:return M5;case 35664:return b5;case 35665:return T5;case 35666:return C5;case 35674:return A5;case 35675:return R5;case 35676:return P5;case 5124:case 35670:return N5;case 35667:case 35671:return L5;case 35668:case 35672:return D5;case 35669:case 35673:return I5;case 5125:return O5;case 36294:return U5;case 36295:return F5;case 36296:return k5;case 35678:case 36198:case 36298:case 36306:case 35682:return B5;case 35679:case 36299:case 36307:return z5;case 35680:case 36300:case 36308:case 36293:return H5;case 36289:case 36303:case 36311:case 36292:return V5}}class j5{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=E5(n.type)}}class W5{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=G5(n.type)}}class $5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const a=i[o];a.setValue(e,n[a.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function dy(t,e){t.seq.push(e),t.map[e.id]=e}function X5(t,e,n){const r=t.name,i=r.length;for(mh.lastIndex=0;;){const o=mh.exec(r),s=mh.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){dy(n,c===void 0?new j5(a,t,e):new W5(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new $5(a),dy(n,f)),n=f}}}class lu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(n,i),s=e.getUniformLocation(n,o.name);X5(o,s,this)}}setValue(e,n,r,i){const o=this.map[n];o!==void 0&&o.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in n&&r.push(s)}return r}}function fy(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const Y5=37297;let q5=0;function K5(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=i;s<o;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return r.join(`
`)}function Q5(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let r;switch(e===n?r="":e===Ku&&n===qu?r="LinearDisplayP3ToLinearSRGB":e===qu&&n===Ku&&(r="LinearSRGBToLinearDisplayP3"),t){case oi:case Gd:return[r,"LinearTransferOETF"];case jt:case Ug:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function hy(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+i+`

`+K5(t.getShaderSource(e),s)}else return i}function Z5(t,e){const n=Q5(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function J5(t,e){let n;switch(e){case cU:n="Linear";break;case uU:n="Reinhard";break;case dU:n="OptimizedCineon";break;case fU:n="ACESFilmic";break;case pU:n="AgX";break;case hU:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function eB(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function tB(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function nB(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function rB(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=t.getActiveAttrib(e,i),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Cs(t){return t!==""}function py(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function my(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iB=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yp(t){return t.replace(iB,sB)}const oB=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sB(t,e){let n=Xe[e];if(n===void 0){const r=oB.get(e);if(r!==void 0)n=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yp(n)}const aB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gy(t){return t.replace(aB,lB)}function lB(t,e,n,r){let i="";for(let o=parseInt(e);o<parseInt(n);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function vy(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cB(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===A1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===FO?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gr&&(e="SHADOWMAP_TYPE_VSM"),e}function uB(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case oa:case sa:e="ENVMAP_TYPE_CUBE";break;case Vd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dB(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function fB(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ig:e="ENVMAP_BLENDING_MULTIPLY";break;case aU:e="ENVMAP_BLENDING_MIX";break;case lU:e="ENVMAP_BLENDING_ADD";break}return e}function hB(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function pB(t,e,n,r){const i=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=cB(n),c=uB(n),u=dB(n),f=fB(n),d=hB(n),g=n.isWebGL2?"":eB(n),v=tB(n),m=nB(o),p=i.createProgram();let h,x,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Cs).join(`
`),h.length>0&&(h+=`
`),x=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Cs).join(`
`),x.length>0&&(x+=`
`)):(h=[vy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),x=[g,vy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Hi?J5("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Z5("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cs).join(`
`)),s=Yp(s),s=py(s,n),s=my(s,n),a=Yp(a),a=py(a,n),a=my(a,n),s=gy(s),a=gy(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=y+h+s,b=y+x+a,T=fy(i,i.VERTEX_SHADER,w),E=fy(i,i.FRAGMENT_SHADER,b);i.attachShader(p,T),i.attachShader(p,E),n.index0AttributeName!==void 0?i.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(F){if(t.debug.checkShaderErrors){const Q=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(T).trim(),z=i.getShaderInfoLog(E).trim();let k=!0,$=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,p,T,E);else{const L=hy(i,T,"vertex"),I=hy(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+L+`
`+I)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(N===""||z==="")&&($=!1);$&&(F.diagnostics={runnable:k,programLog:Q,vertexShader:{log:N,prefix:h},fragmentShader:{log:z,prefix:x}})}i.deleteShader(T),i.deleteShader(E),M=new lu(i,p),C=rB(i,p)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,Y5)),B},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=q5++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=E,this}let mB=0;class gB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new vB(e),n.set(e,r)),r}}class vB{constructor(e){this.id=mB++,this.code=e,this.usedTimes=0}}function xB(t,e,n,r,i,o,s){const a=new j1,l=new gB,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return M===0?"uv":`uv${M}`}function p(M,C,B,F,Q){const N=F.fog,z=Q.geometry,k=M.isMeshStandardMaterial?F.environment:null,$=(M.isMeshStandardMaterial?n:e).get(M.envMap||k),L=$&&$.mapping===Vd?$.image.height:null,I=v[M.type];M.precision!==null&&(g=i.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const O=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,H=O!==void 0?O.length:0;let W=0;z.morphAttributes.position!==void 0&&(W=1),z.morphAttributes.normal!==void 0&&(W=2),z.morphAttributes.color!==void 0&&(W=3);let G,Z,ce,oe;if(I){const sn=Tr[I];G=sn.vertexShader,Z=sn.fragmentShader}else G=M.vertexShader,Z=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const ee=t.getRenderTarget(),ge=Q.isInstancedMesh===!0,xe=Q.isBatchedMesh===!0,de=!!M.map,Me=!!M.matcap,V=!!$,nt=!!M.aoMap,Ce=!!M.lightMap,Ne=!!M.bumpMap,ye=!!M.normalMap,rt=!!M.displacementMap,He=!!M.emissiveMap,R=!!M.metalnessMap,A=!!M.roughnessMap,X=M.anisotropy>0,ae=M.clearcoat>0,re=M.iridescence>0,le=M.sheen>0,Ae=M.transmission>0,ve=X&&!!M.anisotropyMap,_e=ae&&!!M.clearcoatMap,Le=ae&&!!M.clearcoatNormalMap,ke=ae&&!!M.clearcoatRoughnessMap,ie=re&&!!M.iridescenceMap,st=re&&!!M.iridescenceThicknessMap,We=le&&!!M.sheenColorMap,Be=le&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,Ee=!!M.specularColorMap,De=!!M.specularIntensityMap,it=Ae&&!!M.transmissionMap,be=Ae&&!!M.thicknessMap,Te=!!M.gradientMap,ne=!!M.alphaMap,U=M.alphaTest>0,ue=!!M.alphaHash,me=!!M.extensions,Ue=!!z.attributes.uv1,Ie=!!z.attributes.uv2,dt=!!z.attributes.uv3;let ft=Hi;return M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ft=t.toneMapping),{isWebGL2:u,shaderID:I,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Z,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:xe,instancing:ge,instancingColor:ge&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:oi,map:de,matcap:Me,envMap:V,envMapMode:V&&$.mapping,envMapCubeUVHeight:L,aoMap:nt,lightMap:Ce,bumpMap:Ne,normalMap:ye,displacementMap:d&&rt,emissiveMap:He,normalMapObjectSpace:ye&&M.normalMapType===TU,normalMapTangentSpace:ye&&M.normalMapType===k1,metalnessMap:R,roughnessMap:A,anisotropy:X,anisotropyMap:ve,clearcoat:ae,clearcoatMap:_e,clearcoatNormalMap:Le,clearcoatRoughnessMap:ke,iridescence:re,iridescenceMap:ie,iridescenceThicknessMap:st,sheen:le,sheenColorMap:We,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:Ee,specularIntensityMap:De,transmission:Ae,transmissionMap:it,thicknessMap:be,gradientMap:Te,opaque:M.transparent===!1&&M.blending===ks,alphaMap:ne,alphaTest:U,alphaHash:ue,combine:M.combine,mapUv:de&&m(M.map.channel),aoMapUv:nt&&m(M.aoMap.channel),lightMapUv:Ce&&m(M.lightMap.channel),bumpMapUv:Ne&&m(M.bumpMap.channel),normalMapUv:ye&&m(M.normalMap.channel),displacementMapUv:rt&&m(M.displacementMap.channel),emissiveMapUv:He&&m(M.emissiveMap.channel),metalnessMapUv:R&&m(M.metalnessMap.channel),roughnessMapUv:A&&m(M.roughnessMap.channel),anisotropyMapUv:ve&&m(M.anisotropyMap.channel),clearcoatMapUv:_e&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&m(M.sheenRoughnessMap.channel),specularMapUv:Pe&&m(M.specularMap.channel),specularColorMapUv:Ee&&m(M.specularColorMap.channel),specularIntensityMapUv:De&&m(M.specularIntensityMap.channel),transmissionMapUv:it&&m(M.transmissionMap.channel),thicknessMapUv:be&&m(M.thicknessMap.channel),alphaMapUv:ne&&m(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ye||X),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Ie,vertexUv3s:dt,pointsUvs:Q.isPoints===!0&&!!z.attributes.uv&&(de||ne),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:W,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:ft,useLegacyLights:t._useLegacyLights,decodeVideoTexture:de&&M.map.isVideoTexture===!0&&ct.getTransfer(M.map.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$r,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&M.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)C.push(B),C.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(x(C,M),y(C,M),C.push(t.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function x(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function w(M){const C=v[M.type];let B;if(C){const F=Tr[C];B=eF.clone(F.uniforms)}else B=M.uniforms;return B}function b(M,C){let B;for(let F=0,Q=c.length;F<Q;F++){const N=c[F];if(N.cacheKey===C){B=N,++B.usedTimes;break}}return B===void 0&&(B=new pB(t,C,M,o),c.push(B)),B}function T(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:D}}function yB(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function r(o,s,a){t.get(o)[s]=a}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function _B(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yy(){const t=[];let e=0;const n=[],r=[],i=[];function o(){e=0,n.length=0,r.length=0,i.length=0}function s(f,d,g,v,m,p){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:g,groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=g,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=m,h.group=p),e++,h}function a(f,d,g,v,m,p){const h=s(f,d,g,v,m,p);g.transmission>0?r.push(h):g.transparent===!0?i.push(h):n.push(h)}function l(f,d,g,v,m,p){const h=s(f,d,g,v,m,p);g.transmission>0?r.unshift(h):g.transparent===!0?i.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||_B),r.length>1&&r.sort(d||xy),i.length>1&&i.sort(d||xy)}function u(){for(let f=e,d=t.length;f<d;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:r,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function SB(){let t=new WeakMap;function e(r,i){const o=t.get(r);let s;return o===void 0?(s=new yy,t.set(r,[s])):i>=o.length?(s=new yy,o.push(s)):s=o[i],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function wB(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new et};break;case"SpotLight":n={position:new K,direction:new K,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function EB(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MB=0;function bB(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TB(t,e){const n=new wB,r=EB(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const o=new K,s=new It,a=new It;function l(u,f){let d=0,g=0,v=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let m=0,p=0,h=0,x=0,y=0,w=0,b=0,T=0,E=0,D=0,M=0;u.sort(bB);const C=f===!0?Math.PI:1;for(let F=0,Q=u.length;F<Q;F++){const N=u[F],z=N.color,k=N.intensity,$=N.distance,L=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=z.r*k*C,g+=z.g*k*C,v+=z.b*k*C;else if(N.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(N.sh.coefficients[I],k);M++}else if(N.isDirectionalLight){const I=n.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*C),N.castShadow){const O=N.shadow,H=r.get(N);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=L,i.directionalShadowMatrix[m]=N.shadow.matrix,w++}i.directional[m]=I,m++}else if(N.isSpotLight){const I=n.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(z).multiplyScalar(k*C),I.distance=$,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,i.spot[h]=I;const O=N.shadow;if(N.map&&(i.spotLightMap[E]=N.map,E++,O.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[h]=O.matrix,N.castShadow){const H=r.get(N);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.spotShadow[h]=H,i.spotShadowMap[h]=L,T++}h++}else if(N.isRectAreaLight){const I=n.get(N);I.color.copy(z).multiplyScalar(k),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=I,x++}else if(N.isPointLight){const I=n.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*C),I.distance=N.distance,I.decay=N.decay,N.castShadow){const O=N.shadow,H=r.get(N);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=L,i.pointShadowMatrix[p]=N.shadow.matrix,b++}i.point[p]=I,p++}else if(N.isHemisphereLight){const I=n.get(N);I.skyColor.copy(N.color).multiplyScalar(k*C),I.groundColor.copy(N.groundColor).multiplyScalar(k*C),i.hemi[y]=I,y++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=v;const B=i.hash;(B.directionalLength!==m||B.pointLength!==p||B.spotLength!==h||B.rectAreaLength!==x||B.hemiLength!==y||B.numDirectionalShadows!==w||B.numPointShadows!==b||B.numSpotShadows!==T||B.numSpotMaps!==E||B.numLightProbes!==M)&&(i.directional.length=m,i.spot.length=h,i.rectArea.length=x,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+E-D,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=M,B.directionalLength=m,B.pointLength=p,B.spotLength=h,B.rectAreaLength=x,B.hemiLength=y,B.numDirectionalShadows=w,B.numPointShadows=b,B.numSpotShadows=T,B.numSpotMaps=E,B.numLightProbes=M,i.version=MB++)}function c(u,f){let d=0,g=0,v=0,m=0,p=0;const h=f.matrixWorldInverse;for(let x=0,y=u.length;x<y;x++){const w=u[x];if(w.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(h),d++}else if(w.isSpotLight){const b=i.spot[v];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(h),v++}else if(w.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(h),a.identity(),s.copy(w.matrixWorld),s.premultiply(h),a.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(h),g++}else if(w.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:i}}function _y(t,e){const n=new TB(t,e),r=[],i=[];function o(){r.length=0,i.length=0}function s(f){r.push(f)}function a(f){i.push(f)}function l(f){n.setup(r,f)}function c(f){n.setupView(r,f)}return{init:o,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function CB(t,e){let n=new WeakMap;function r(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new _y(t,e),n.set(o,[l])):s>=a.length?(l=new _y(t,e),a.push(l)):l=a[s],l}function i(){n=new WeakMap}return{get:r,dispose:i}}class AB extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MU,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RB extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LB(t,e,n){let r=new kg;const i=new ot,o=new ot,s=new Ht,a=new AB({depthPacking:bU}),l=new RB,c={},u=n.maxTextureSize,f={[qi]:Mn,[Mn]:qi,[$r]:$r},d=new ko({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:PB,fragmentShader:NB}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new Wo;v.setAttribute("position",new Lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Rr(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A1;let h=this.type;this.render=function(T,E,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=t.getRenderTarget(),C=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),F=t.state;F.setBlending(zi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Q=h!==Gr&&this.type===Gr,N=h===Gr&&this.type!==Gr;for(let z=0,k=T.length;z<k;z++){const $=T[z],L=$.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const I=L.getFrameExtents();if(i.multiply(I),o.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/I.x),i.x=o.x*I.x,L.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/I.y),i.y=o.y*I.y,L.mapSize.y=o.y)),L.map===null||Q===!0||N===!0){const H=this.type!==Gr?{minFilter:dn,magFilter:dn}:{};L.map!==null&&L.map.dispose(),L.map=new Fo(i.x,i.y,H),L.map.texture.name=$.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const O=L.getViewportCount();for(let H=0;H<O;H++){const W=L.getViewport(H);s.set(o.x*W.x,o.y*W.y,o.x*W.z,o.y*W.w),F.viewport(s),L.updateMatrices($,H),r=L.getFrustum(),w(E,D,L.camera,$,this.type)}L.isPointLightShadow!==!0&&this.type===Gr&&x(L,D),L.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(M,C,B)};function x(T,E){const D=e.update(m);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fo(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(E,null,D,d,m,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(E,null,D,g,m,null)}function y(T,E,D,M){let C=null;const B=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)C=B;else if(C=D.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=C.uuid,Q=E.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let z=N[Q];z===void 0&&(z=C.clone(),N[Q]=z,E.addEventListener("dispose",b)),C=z}if(C.visible=E.visible,C.wireframe=E.wireframe,M===Gr?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:f[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,D.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=t.properties.get(C);F.light=D}return C}function w(T,E,D,M,C){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Gr)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const Q=e.update(T),N=T.material;if(Array.isArray(N)){const z=Q.groups;for(let k=0,$=z.length;k<$;k++){const L=z[k],I=N[L.materialIndex];if(I&&I.visible){const O=y(T,I,M,C);T.onBeforeShadow(t,T,E,D,Q,O,L),t.renderBufferDirect(D,null,Q,O,T,L),T.onAfterShadow(t,T,E,D,Q,O,L)}}}else if(N.visible){const z=y(T,N,M,C);T.onBeforeShadow(t,T,E,D,Q,z,null),t.renderBufferDirect(D,null,Q,z,T,null),T.onAfterShadow(t,T,E,D,Q,z,null)}}const F=T.children;for(let Q=0,N=F.length;Q<N;Q++)w(F[Q],E,D,M,C)}function b(T){T.target.removeEventListener("dispose",b);for(const D in c){const M=c[D],C=T.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function DB(t,e,n){const r=n.isWebGL2;function i(){let U=!1;const ue=new Ht;let me=null;const Ue=new Ht(0,0,0,0);return{setMask:function(Ie){me!==Ie&&!U&&(t.colorMask(Ie,Ie,Ie,Ie),me=Ie)},setLocked:function(Ie){U=Ie},setClear:function(Ie,dt,ft,Ft,sn){sn===!0&&(Ie*=Ft,dt*=Ft,ft*=Ft),ue.set(Ie,dt,ft,Ft),Ue.equals(ue)===!1&&(t.clearColor(Ie,dt,ft,Ft),Ue.copy(ue))},reset:function(){U=!1,me=null,Ue.set(-1,0,0,0)}}}function o(){let U=!1,ue=null,me=null,Ue=null;return{setTest:function(Ie){Ie?xe(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Ie){ue!==Ie&&!U&&(t.depthMask(Ie),ue=Ie)},setFunc:function(Ie){if(me!==Ie){switch(Ie){case eU:t.depthFunc(t.NEVER);break;case tU:t.depthFunc(t.ALWAYS);break;case nU:t.depthFunc(t.LESS);break;case Xu:t.depthFunc(t.LEQUAL);break;case rU:t.depthFunc(t.EQUAL);break;case iU:t.depthFunc(t.GEQUAL);break;case oU:t.depthFunc(t.GREATER);break;case sU:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Ie}},setLocked:function(Ie){U=Ie},setClear:function(Ie){Ue!==Ie&&(t.clearDepth(Ie),Ue=Ie)},reset:function(){U=!1,ue=null,me=null,Ue=null}}}function s(){let U=!1,ue=null,me=null,Ue=null,Ie=null,dt=null,ft=null,Ft=null,sn=null;return{setTest:function(ht){U||(ht?xe(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(ht){ue!==ht&&!U&&(t.stencilMask(ht),ue=ht)},setFunc:function(ht,an,_r){(me!==ht||Ue!==an||Ie!==_r)&&(t.stencilFunc(ht,an,_r),me=ht,Ue=an,Ie=_r)},setOp:function(ht,an,_r){(dt!==ht||ft!==an||Ft!==_r)&&(t.stencilOp(ht,an,_r),dt=ht,ft=an,Ft=_r)},setLocked:function(ht){U=ht},setClear:function(ht){sn!==ht&&(t.clearStencil(ht),sn=ht)},reset:function(){U=!1,ue=null,me=null,Ue=null,Ie=null,dt=null,ft=null,Ft=null,sn=null}}}const a=new i,l=new o,c=new s,u=new WeakMap,f=new WeakMap;let d={},g={},v=new WeakMap,m=[],p=null,h=!1,x=null,y=null,w=null,b=null,T=null,E=null,D=null,M=new et(0,0,0),C=0,B=!1,F=null,Q=null,N=null,z=null,k=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=I>=1):O.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=I>=2);let H=null,W={};const G=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),ce=new Ht().fromArray(G),oe=new Ht().fromArray(Z);function ee(U,ue,me,Ue){const Ie=new Uint8Array(4),dt=t.createTexture();t.bindTexture(U,dt),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ft=0;ft<me;ft++)r&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(ue+ft,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return dt}const ge={};ge[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ge[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(t.DEPTH_TEST),l.setFunc(Xu),He(!1),R(tx),xe(t.CULL_FACE),ye(zi);function xe(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function de(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Me(U,ue){return g[U]!==ue?(t.bindFramebuffer(U,ue),g[U]=ue,r&&(U===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ue),U===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function V(U,ue){let me=m,Ue=!1;if(U)if(me=v.get(ue),me===void 0&&(me=[],v.set(ue,me)),U.isWebGLMultipleRenderTargets){const Ie=U.texture;if(me.length!==Ie.length||me[0]!==t.COLOR_ATTACHMENT0){for(let dt=0,ft=Ie.length;dt<ft;dt++)me[dt]=t.COLOR_ATTACHMENT0+dt;me.length=Ie.length,Ue=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,Ue=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function nt(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const Ce={[po]:t.FUNC_ADD,[BO]:t.FUNC_SUBTRACT,[zO]:t.FUNC_REVERSE_SUBTRACT};if(r)Ce[ox]=t.MIN,Ce[sx]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ce[ox]=U.MIN_EXT,Ce[sx]=U.MAX_EXT)}const Ne={[HO]:t.ZERO,[VO]:t.ONE,[GO]:t.SRC_COLOR,[Bp]:t.SRC_ALPHA,[qO]:t.SRC_ALPHA_SATURATE,[XO]:t.DST_COLOR,[WO]:t.DST_ALPHA,[jO]:t.ONE_MINUS_SRC_COLOR,[zp]:t.ONE_MINUS_SRC_ALPHA,[YO]:t.ONE_MINUS_DST_COLOR,[$O]:t.ONE_MINUS_DST_ALPHA,[KO]:t.CONSTANT_COLOR,[QO]:t.ONE_MINUS_CONSTANT_COLOR,[ZO]:t.CONSTANT_ALPHA,[JO]:t.ONE_MINUS_CONSTANT_ALPHA};function ye(U,ue,me,Ue,Ie,dt,ft,Ft,sn,ht){if(U===zi){h===!0&&(de(t.BLEND),h=!1);return}if(h===!1&&(xe(t.BLEND),h=!0),U!==kO){if(U!==x||ht!==B){if((y!==po||T!==po)&&(t.blendEquation(t.FUNC_ADD),y=po,T=po),ht)switch(U){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nx:t.blendFunc(t.ONE,t.ONE);break;case rx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ix:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nx:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ix:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,b=null,E=null,D=null,M.set(0,0,0),C=0,x=U,B=ht}return}Ie=Ie||ue,dt=dt||me,ft=ft||Ue,(ue!==y||Ie!==T)&&(t.blendEquationSeparate(Ce[ue],Ce[Ie]),y=ue,T=Ie),(me!==w||Ue!==b||dt!==E||ft!==D)&&(t.blendFuncSeparate(Ne[me],Ne[Ue],Ne[dt],Ne[ft]),w=me,b=Ue,E=dt,D=ft),(Ft.equals(M)===!1||sn!==C)&&(t.blendColor(Ft.r,Ft.g,Ft.b,sn),M.copy(Ft),C=sn),x=U,B=!1}function rt(U,ue){U.side===$r?de(t.CULL_FACE):xe(t.CULL_FACE);let me=U.side===Mn;ue&&(me=!me),He(me),U.blending===ks&&U.transparent===!1?ye(zi):ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ue=U.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),X(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){F!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),F=U)}function R(U){U!==OO?(xe(t.CULL_FACE),U!==Q&&(U===tx?t.cullFace(t.BACK):U===UO?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),Q=U}function A(U){U!==N&&(L&&t.lineWidth(U),N=U)}function X(U,ue,me){U?(xe(t.POLYGON_OFFSET_FILL),(z!==ue||k!==me)&&(t.polygonOffset(ue,me),z=ue,k=me)):de(t.POLYGON_OFFSET_FILL)}function ae(U){U?xe(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function re(U){U===void 0&&(U=t.TEXTURE0+$-1),H!==U&&(t.activeTexture(U),H=U)}function le(U,ue,me){me===void 0&&(H===null?me=t.TEXTURE0+$-1:me=H);let Ue=W[me];Ue===void 0&&(Ue={type:void 0,texture:void 0},W[me]=Ue),(Ue.type!==U||Ue.texture!==ue)&&(H!==me&&(t.activeTexture(me),H=me),t.bindTexture(U,ue||ge[U]),Ue.type=U,Ue.texture=ue)}function Ae(){const U=W[H];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ve(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){ce.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function it(U){oe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),oe.copy(U))}function be(U,ue){let me=f.get(ue);me===void 0&&(me=new WeakMap,f.set(ue,me));let Ue=me.get(U);Ue===void 0&&(Ue=t.getUniformBlockIndex(ue,U.name),me.set(U,Ue))}function Te(U,ue){const Ue=f.get(ue).get(U);u.get(ue)!==Ue&&(t.uniformBlockBinding(ue,Ue,U.__bindingPointIndex),u.set(ue,Ue))}function ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),r===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},H=null,W={},g={},v=new WeakMap,m=[],p=null,h=!1,x=null,y=null,w=null,b=null,T=null,E=null,D=null,M=new et(0,0,0),C=0,B=!1,F=null,Q=null,N=null,z=null,k=null,ce.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xe,disable:de,bindFramebuffer:Me,drawBuffers:V,useProgram:nt,setBlending:ye,setMaterial:rt,setFlipSided:He,setCullFace:R,setLineWidth:A,setPolygonOffset:X,setScissorTest:ae,activeTexture:re,bindTexture:le,unbindTexture:Ae,compressedTexImage2D:ve,compressedTexImage3D:_e,texImage2D:Pe,texImage3D:Ee,updateUBOMapping:be,uniformBlockBinding:Te,texStorage2D:We,texStorage3D:Be,texSubImage2D:Le,texSubImage3D:ke,compressedTexSubImage2D:ie,compressedTexSubImage3D:st,scissor:De,viewport:it,reset:ne}}function IB(t,e,n,r,i,o,s){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,A){return g?new OffscreenCanvas(R,A):Zu("canvas")}function m(R,A,X,ae){let re=1;if((R.width>ae||R.height>ae)&&(re=ae/Math.max(R.width,R.height)),re<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=A?Xp:Math.floor,Ae=le(re*R.width),ve=le(re*R.height);f===void 0&&(f=v(Ae,ve));const _e=X?v(Ae,ve):f;return _e.width=Ae,_e.height=ve,_e.getContext("2d").drawImage(R,0,0,Ae,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ae+"x"+ve+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Ux(R.width)&&Ux(R.height)}function h(R){return a?!1:R.wrapS!==dr||R.wrapT!==dr||R.minFilter!==dn&&R.minFilter!==$n}function x(R,A){return R.generateMipmaps&&A&&R.minFilter!==dn&&R.minFilter!==$n}function y(R){t.generateMipmap(R)}function w(R,A,X,ae,re=!1){if(a===!1)return A;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=A;if(A===t.RED&&(X===t.FLOAT&&(le=t.R32F),X===t.HALF_FLOAT&&(le=t.R16F),X===t.UNSIGNED_BYTE&&(le=t.R8)),A===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(le=t.R8UI),X===t.UNSIGNED_SHORT&&(le=t.R16UI),X===t.UNSIGNED_INT&&(le=t.R32UI),X===t.BYTE&&(le=t.R8I),X===t.SHORT&&(le=t.R16I),X===t.INT&&(le=t.R32I)),A===t.RG&&(X===t.FLOAT&&(le=t.RG32F),X===t.HALF_FLOAT&&(le=t.RG16F),X===t.UNSIGNED_BYTE&&(le=t.RG8)),A===t.RGBA){const Ae=re?Yu:ct.getTransfer(ae);X===t.FLOAT&&(le=t.RGBA32F),X===t.HALF_FLOAT&&(le=t.RGBA16F),X===t.UNSIGNED_BYTE&&(le=Ae===xt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function b(R,A,X){return x(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==$n?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){return R===dn||R===ax||R===zf?t.NEAREST:t.LINEAR}function E(R){const A=R.target;A.removeEventListener("dispose",E),M(A),A.isVideoTexture&&u.delete(A)}function D(R){const A=R.target;A.removeEventListener("dispose",D),B(A)}function M(R){const A=r.get(R);if(A.__webglInit===void 0)return;const X=R.source,ae=d.get(X);if(ae){const re=ae[A.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(R),Object.keys(ae).length===0&&d.delete(X)}r.remove(R)}function C(R){const A=r.get(R);t.deleteTexture(A.__webglTexture);const X=R.source,ae=d.get(X);delete ae[A.__cacheKey],s.memory.textures--}function B(R){const A=R.texture,X=r.get(R),ae=r.get(A);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(X.__webglFramebuffer[re]))for(let le=0;le<X.__webglFramebuffer[re].length;le++)t.deleteFramebuffer(X.__webglFramebuffer[re][le]);else t.deleteFramebuffer(X.__webglFramebuffer[re]);X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[re])}else{if(Array.isArray(X.__webglFramebuffer))for(let re=0;re<X.__webglFramebuffer.length;re++)t.deleteFramebuffer(X.__webglFramebuffer[re]);else t.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let re=0,le=A.length;re<le;re++){const Ae=r.get(A[re]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),s.memory.textures--),r.remove(A[re])}r.remove(A),r.remove(R)}let F=0;function Q(){F=0}function N(){const R=F;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function z(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function k(R,A){const X=r.get(R);if(R.isVideoTexture&&rt(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(X,R,A);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+A)}function $(R,A){const X=r.get(R);if(R.version>0&&X.__version!==R.version){ce(X,R,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+A)}function L(R,A){const X=r.get(R);if(R.version>0&&X.__version!==R.version){ce(X,R,A);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+A)}function I(R,A){const X=r.get(R);if(R.version>0&&X.__version!==R.version){oe(X,R,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+A)}const O={[Gp]:t.REPEAT,[dr]:t.CLAMP_TO_EDGE,[jp]:t.MIRRORED_REPEAT},H={[dn]:t.NEAREST,[ax]:t.NEAREST_MIPMAP_NEAREST,[zf]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[mU]:t.LINEAR_MIPMAP_NEAREST,[Cl]:t.LINEAR_MIPMAP_LINEAR},W={[CU]:t.NEVER,[DU]:t.ALWAYS,[AU]:t.LESS,[B1]:t.LEQUAL,[RU]:t.EQUAL,[LU]:t.GEQUAL,[PU]:t.GREATER,[NU]:t.NOTEQUAL};function G(R,A,X){if(X?(t.texParameteri(R,t.TEXTURE_WRAP_S,O[A.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,O[A.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,O[A.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,H[A.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,H[A.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(A.wrapS!==dr||A.wrapT!==dr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(A.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==dn&&A.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,W[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===dn||A.minFilter!==zf&&A.minFilter!==Cl||A.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Al&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(t.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function Z(R,A){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",E));const ae=A.source;let re=d.get(ae);re===void 0&&(re={},d.set(ae,re));const le=z(A);if(le!==R.__cacheKey){re[le]===void 0&&(re[le]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,X=!0),re[le].usedTimes++;const Ae=re[R.__cacheKey];Ae!==void 0&&(re[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&C(A)),R.__cacheKey=le,R.__webglTexture=re[le].texture}return X}function ce(R,A,X){let ae=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=t.TEXTURE_3D);const re=Z(R,A),le=A.source;n.bindTexture(ae,R.__webglTexture,t.TEXTURE0+X);const Ae=r.get(le);if(le.version!==Ae.__version||re===!0){n.activeTexture(t.TEXTURE0+X);const ve=ct.getPrimaries(ct.workingColorSpace),_e=A.colorSpace===Yn?null:ct.getPrimaries(A.colorSpace),Le=A.colorSpace===Yn||ve===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const ke=h(A)&&p(A.image)===!1;let ie=m(A.image,ke,!1,i.maxTextureSize);ie=He(A,ie);const st=p(ie)||a,We=o.convert(A.format,A.colorSpace);let Be=o.convert(A.type),Pe=w(A.internalFormat,We,Be,A.colorSpace,A.isVideoTexture);G(ae,A,st);let Ee;const De=A.mipmaps,it=a&&A.isVideoTexture!==!0&&Pe!==U1,be=Ae.__version===void 0||re===!0,Te=b(A,ie,st);if(A.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?A.type===Ni?Pe=t.DEPTH_COMPONENT32F:A.type===Pi?Pe=t.DEPTH_COMPONENT24:A.type===bo?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:A.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===To&&Pe===t.DEPTH_COMPONENT&&A.type!==Og&&A.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Pi,Be=o.convert(A.type)),A.format===aa&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,A.type!==bo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=bo,Be=o.convert(A.type))),be&&(it?n.texStorage2D(t.TEXTURE_2D,1,Pe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,We,Be,null));else if(A.isDataTexture)if(De.length>0&&st){it&&be&&n.texStorage2D(t.TEXTURE_2D,Te,Pe,De[0].width,De[0].height);for(let ne=0,U=De.length;ne<U;ne++)Ee=De[ne],it?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,We,Be,Ee.data):n.texImage2D(t.TEXTURE_2D,ne,Pe,Ee.width,Ee.height,0,We,Be,Ee.data);A.generateMipmaps=!1}else it?(be&&n.texStorage2D(t.TEXTURE_2D,Te,Pe,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,We,Be,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,We,Be,ie.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Pe,De[0].width,De[0].height,ie.depth);for(let ne=0,U=De.length;ne<U;ne++)Ee=De[ne],A.format!==fr?We!==null?it?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Ee.width,Ee.height,ie.depth,We,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Pe,Ee.width,Ee.height,ie.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Ee.width,Ee.height,ie.depth,We,Be,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Pe,Ee.width,Ee.height,ie.depth,0,We,Be,Ee.data)}else{it&&be&&n.texStorage2D(t.TEXTURE_2D,Te,Pe,De[0].width,De[0].height);for(let ne=0,U=De.length;ne<U;ne++)Ee=De[ne],A.format!==fr?We!==null?it?n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,We,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,We,Be,Ee.data):n.texImage2D(t.TEXTURE_2D,ne,Pe,Ee.width,Ee.height,0,We,Be,Ee.data)}else if(A.isDataArrayTexture)it?(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Pe,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,We,Be,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,We,Be,ie.data);else if(A.isData3DTexture)it?(be&&n.texStorage3D(t.TEXTURE_3D,Te,Pe,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,We,Be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,We,Be,ie.data);else if(A.isFramebufferTexture){if(be)if(it)n.texStorage2D(t.TEXTURE_2D,Te,Pe,ie.width,ie.height);else{let ne=ie.width,U=ie.height;for(let ue=0;ue<Te;ue++)n.texImage2D(t.TEXTURE_2D,ue,Pe,ne,U,0,We,Be,null),ne>>=1,U>>=1}}else if(De.length>0&&st){it&&be&&n.texStorage2D(t.TEXTURE_2D,Te,Pe,De[0].width,De[0].height);for(let ne=0,U=De.length;ne<U;ne++)Ee=De[ne],it?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,We,Be,Ee):n.texImage2D(t.TEXTURE_2D,ne,Pe,We,Be,Ee);A.generateMipmaps=!1}else it?(be&&n.texStorage2D(t.TEXTURE_2D,Te,Pe,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Be,ie)):n.texImage2D(t.TEXTURE_2D,0,Pe,We,Be,ie);x(A,st)&&y(ae),Ae.__version=le.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function oe(R,A,X){if(A.image.length!==6)return;const ae=Z(R,A),re=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+X);const le=r.get(re);if(re.version!==le.__version||ae===!0){n.activeTexture(t.TEXTURE0+X);const Ae=ct.getPrimaries(ct.workingColorSpace),ve=A.colorSpace===Yn?null:ct.getPrimaries(A.colorSpace),_e=A.colorSpace===Yn||Ae===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=A.isCompressedTexture||A.image[0].isCompressedTexture,ke=A.image[0]&&A.image[0].isDataTexture,ie=[];for(let ne=0;ne<6;ne++)!Le&&!ke?ie[ne]=m(A.image[ne],!1,!0,i.maxCubemapSize):ie[ne]=ke?A.image[ne].image:A.image[ne],ie[ne]=He(A,ie[ne]);const st=ie[0],We=p(st)||a,Be=o.convert(A.format,A.colorSpace),Pe=o.convert(A.type),Ee=w(A.internalFormat,Be,Pe,A.colorSpace),De=a&&A.isVideoTexture!==!0,it=le.__version===void 0||ae===!0;let be=b(A,st,We);G(t.TEXTURE_CUBE_MAP,A,We);let Te;if(Le){De&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Ee,st.width,st.height);for(let ne=0;ne<6;ne++){Te=ie[ne].mipmaps;for(let U=0;U<Te.length;U++){const ue=Te[U];A.format!==fr?Be!==null?De?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,U,0,0,ue.width,ue.height,Be,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,U,Ee,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,U,0,0,ue.width,ue.height,Be,Pe,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,U,Ee,ue.width,ue.height,0,Be,Pe,ue.data)}}}else{Te=A.mipmaps,De&&it&&(Te.length>0&&be++,n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Ee,ie[0].width,ie[0].height));for(let ne=0;ne<6;ne++)if(ke){De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ie[ne].width,ie[ne].height,Be,Pe,ie[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ee,ie[ne].width,ie[ne].height,0,Be,Pe,ie[ne].data);for(let U=0;U<Te.length;U++){const me=Te[U].image[ne].image;De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,U+1,0,0,me.width,me.height,Be,Pe,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,U+1,Ee,me.width,me.height,0,Be,Pe,me.data)}}else{De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Be,Pe,ie[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ee,Be,Pe,ie[ne]);for(let U=0;U<Te.length;U++){const ue=Te[U];De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,U+1,0,0,Be,Pe,ue.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,U+1,Ee,Be,Pe,ue.image[ne])}}}x(A,We)&&y(t.TEXTURE_CUBE_MAP),le.__version=re.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ee(R,A,X,ae,re,le){const Ae=o.convert(X.format,X.colorSpace),ve=o.convert(X.type),_e=w(X.internalFormat,Ae,ve,X.colorSpace);if(!r.get(A).__hasExternalTextures){const ke=Math.max(1,A.width>>le),ie=Math.max(1,A.height>>le);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,le,_e,ke,ie,A.depth,0,Ae,ve,null):n.texImage2D(re,le,_e,ke,ie,0,Ae,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ye(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,re,r.get(X).__webglTexture,0,Ne(A)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,re,r.get(X).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(R,A,X){if(t.bindRenderbuffer(t.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ae=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(X||ye(A)){const re=A.depthTexture;re&&re.isDepthTexture&&(re.type===Ni?ae=t.DEPTH_COMPONENT32F:re.type===Pi&&(ae=t.DEPTH_COMPONENT24));const le=Ne(A);ye(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ae,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ae,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ae=Ne(A);X&&ye(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,A.width,A.height):ye(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ae=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0;re<ae.length;re++){const le=ae[re],Ae=o.convert(le.format,le.colorSpace),ve=o.convert(le.type),_e=w(le.internalFormat,Ae,ve,le.colorSpace),Le=Ne(A);X&&ye(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,_e,A.width,A.height):ye(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,_e,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,_e,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const ae=r.get(A.depthTexture).__webglTexture,re=Ne(A);if(A.depthTexture.format===To)ye(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(A.depthTexture.format===aa)ye(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function de(R){const A=r.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xe(A.__webglFramebuffer,R)}else if(X){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]=t.createRenderbuffer(),ge(A.__webglDepthbuffer[ae],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),ge(A.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(R,A,X){const ae=r.get(R);A!==void 0&&ee(ae.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&de(R)}function V(R){const A=R.texture,X=r.get(R),ae=r.get(A);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=A.version,s.memory.textures++);const re=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,Ae=p(R)||a;if(re){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let _e=0;_e<A.mipmaps.length;_e++)X.__webglFramebuffer[ve][_e]=t.createFramebuffer()}else X.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<A.mipmaps.length;ve++)X.__webglFramebuffer[ve]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(le)if(i.drawBuffers){const ve=R.texture;for(let _e=0,Le=ve.length;_e<Le;_e++){const ke=r.get(ve[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ye(R)===!1){const ve=le?A:[A];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _e=0;_e<ve.length;_e++){const Le=ve[_e];X.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[_e]);const ke=o.convert(Le.format,Le.colorSpace),ie=o.convert(Le.type),st=w(Le.internalFormat,ke,ie,Le.colorSpace,R.isXRRenderTarget===!0),We=Ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,st,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,X.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(X.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),G(t.TEXTURE_CUBE_MAP,A,Ae);for(let ve=0;ve<6;ve++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)ee(X.__webglFramebuffer[ve][_e],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,_e);else ee(X.__webglFramebuffer[ve],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(A,Ae)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ve=R.texture;for(let _e=0,Le=ve.length;_e<Le;_e++){const ke=ve[_e],ie=r.get(ke);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),G(t.TEXTURE_2D,ke,Ae),ee(X.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),x(ke,Ae)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ve=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ve,ae.__webglTexture),G(ve,A,Ae),a&&A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)ee(X.__webglFramebuffer[_e],R,A,t.COLOR_ATTACHMENT0,ve,_e);else ee(X.__webglFramebuffer,R,A,t.COLOR_ATTACHMENT0,ve,0);x(A,Ae)&&y(ve),n.unbindTexture()}R.depthBuffer&&de(R)}function nt(R){const A=p(R)||a,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ae=0,re=X.length;ae<re;ae++){const le=X[ae];if(x(le,A)){const Ae=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=r.get(le).__webglTexture;n.bindTexture(Ae,ve),y(Ae),n.unbindTexture()}}}function Ce(R){if(a&&R.samples>0&&ye(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ae=R.height;let re=t.COLOR_BUFFER_BIT;const le=[],Ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=r.get(R),_e=R.isWebGLMultipleRenderTargets===!0;if(_e)for(let Le=0;Le<A.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Le=0;Le<A.length;Le++){le.push(t.COLOR_ATTACHMENT0+Le),R.depthBuffer&&le.push(Ae);const ke=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Le]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ae])),_e){const ie=r.get(A[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,X,ae,0,0,X,ae,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<A.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Le]);const ke=r.get(A[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(i.maxSamples,R.samples)}function ye(R){const A=r.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rt(R){const A=s.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function He(R,A){const X=R.colorSpace,ae=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Wp||X!==oi&&X!==Yn&&(ct.getTransfer(X)===xt?a===!1?e.has("EXT_sRGB")===!0&&ae===fr?(R.format=Wp,R.minFilter=$n,R.generateMipmaps=!1):A=H1.sRGBToLinear(A):(ae!==fr||re!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}this.allocateTextureUnit=N,this.resetTextureUnits=Q,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=L,this.setTextureCube=I,this.rebindTextures=Me,this.setupRenderTarget=V,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ye}function OB(t,e,n){const r=n.isWebGL2;function i(o,s=Yn){let a;const l=ct.getTransfer(s);if(o===Vi)return t.UNSIGNED_BYTE;if(o===N1)return t.UNSIGNED_SHORT_4_4_4_4;if(o===L1)return t.UNSIGNED_SHORT_5_5_5_1;if(o===gU)return t.BYTE;if(o===vU)return t.SHORT;if(o===Og)return t.UNSIGNED_SHORT;if(o===P1)return t.INT;if(o===Pi)return t.UNSIGNED_INT;if(o===Ni)return t.FLOAT;if(o===Al)return r?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===xU)return t.ALPHA;if(o===fr)return t.RGBA;if(o===yU)return t.LUMINANCE;if(o===_U)return t.LUMINANCE_ALPHA;if(o===To)return t.DEPTH_COMPONENT;if(o===aa)return t.DEPTH_STENCIL;if(o===Wp)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===SU)return t.RED;if(o===D1)return t.RED_INTEGER;if(o===wU)return t.RG;if(o===I1)return t.RG_INTEGER;if(o===O1)return t.RGBA_INTEGER;if(o===Hf||o===Vf||o===Gf||o===jf)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Hf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Vf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Gf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Hf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Vf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Gf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===jf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===lx||o===cx||o===ux||o===dx)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===lx)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===cx)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ux)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===dx)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===U1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===fx||o===hx)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===fx)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===hx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===px||o===mx||o===gx||o===vx||o===xx||o===yx||o===_x||o===Sx||o===wx||o===Ex||o===Mx||o===bx||o===Tx||o===Cx)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===px)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===mx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===gx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===vx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===xx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===yx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===_x)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Sx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===wx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Ex)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Mx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===bx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Tx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Cx)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Wf||o===Ax||o===Rx)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Wf)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ax)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Rx)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===EU||o===Px||o===Nx||o===Lx)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Wf)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Px)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Nx)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lx)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===bo?r?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:i}}class UB extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wa extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FB={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const p=n.getJointPose(m,r),h=this._getHandJoint(c,m);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,v=.005;c.inputState.pinching&&d>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FB)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Wa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class kB extends xa{constructor(e,n){super();const r=this;let i=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,g=null,v=null;const m=n.getContextAttributes();let p=null,h=null;const x=[],y=[],w=new ot;let b=null;const T=new Xn;T.layers.enable(1),T.viewport=new Ht;const E=new Xn;E.layers.enable(2),E.viewport=new Ht;const D=[T,E],M=new UB;M.layers.enable(1),M.layers.enable(2);let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=x[G];return Z===void 0&&(Z=new gh,x[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=x[G];return Z===void 0&&(Z=new gh,x[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=x[G];return Z===void 0&&(Z=new gh,x[G]=Z),Z.getHandSpace()};function F(G){const Z=y.indexOf(G.inputSource);if(Z===-1)return;const ce=x[Z];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||s),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function Q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",N);for(let G=0;G<x.length;G++){const Z=y[G];Z!==null&&(y[G]=null,x[G].disconnect(Z))}C=null,B=null,e.setRenderTarget(p),g=null,d=null,f=null,i=null,h=null,W.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(i,n,Z),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),h=new Fo(g.framebufferWidth,g.framebufferHeight,{format:fr,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ce=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=m.stencil?aa:To,ce=m.stencil?bo:Pi);const ee={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:o};f=new XRWebGLBinding(i,n),d=f.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Fo(d.textureWidth,d.textureHeight,{format:fr,type:Vi,depthTexture:new eT(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ge=e.properties.get(h);ge.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),W.setContext(i),W.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(G){for(let Z=0;Z<G.removed.length;Z++){const ce=G.removed[Z],oe=y.indexOf(ce);oe>=0&&(y[oe]=null,x[oe].disconnect(ce))}for(let Z=0;Z<G.added.length;Z++){const ce=G.added[Z];let oe=y.indexOf(ce);if(oe===-1){for(let ge=0;ge<x.length;ge++)if(ge>=y.length){y.push(ce),oe=ge;break}else if(y[ge]===null){y[ge]=ce,oe=ge;break}if(oe===-1)break}const ee=x[oe];ee&&ee.connect(ce)}}const z=new K,k=new K;function $(G,Z,ce){z.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(ce.matrixWorld);const oe=z.distanceTo(k),ee=Z.projectionMatrix.elements,ge=ce.projectionMatrix.elements,xe=ee[14]/(ee[10]-1),de=ee[14]/(ee[10]+1),Me=(ee[9]+1)/ee[5],V=(ee[9]-1)/ee[5],nt=(ee[8]-1)/ee[0],Ce=(ge[8]+1)/ge[0],Ne=xe*nt,ye=xe*Ce,rt=oe/(-nt+Ce),He=rt*-nt;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(He),G.translateZ(rt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const R=xe+rt,A=de+rt,X=Ne-He,ae=ye+(oe-He),re=Me*de/A*R,le=V*de/A*R;G.projectionMatrix.makePerspective(X,ae,re,le,R,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function L(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;M.near=E.near=T.near=G.near,M.far=E.far=T.far=G.far,(C!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,B=M.far);const Z=G.parent,ce=M.cameras;L(M,Z);for(let oe=0;oe<ce.length;oe++)L(ce[oe],Z);ce.length===2?$(M,T,E):M.projectionMatrix.copy(T.projectionMatrix),I(G,M,Z)};function I(G,Z,ce){ce===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=$p*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)};let O=null;function H(G,Z){if(u=Z.getViewerPose(c||s),v=Z,u!==null){const ce=u.views;g!==null&&(e.setRenderTargetFramebuffer(h,g.framebuffer),e.setRenderTarget(h));let oe=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let ee=0;ee<ce.length;ee++){const ge=ce[ee];let xe=null;if(g!==null)xe=g.getViewport(ge);else{const Me=f.getViewSubImage(d,ge);xe=Me.viewport,ee===0&&(e.setRenderTargetTextures(h,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(h))}let de=D[ee];de===void 0&&(de=new Xn,de.layers.enable(ee),de.viewport=new Ht,D[ee]=de),de.matrix.fromArray(ge.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ge.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(xe.x,xe.y,xe.width,xe.height),ee===0&&(M.matrix.copy(de.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(de)}}for(let ce=0;ce<x.length;ce++){const oe=y[ce],ee=x[ce];oe!==null&&ee!==void 0&&ee.update(oe,Z,c||s)}O&&O(G,Z),Z.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Z}),v=null}const W=new Z1;W.setAnimationLoop(H),this.setAnimationLoop=function(G){O=G},this.dispose=function(){}}}function BB(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function r(p,h){h.color.getRGB(p.fogColor.value,q1(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,x,y,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(p,h):h.isMeshToonMaterial?(o(p,h),f(p,h)):h.isMeshPhongMaterial?(o(p,h),u(p,h)):h.isMeshStandardMaterial?(o(p,h),d(p,h),h.isMeshPhysicalMaterial&&g(p,h,w)):h.isMeshMatcapMaterial?(o(p,h),v(p,h)):h.isMeshDepthMaterial?o(p,h):h.isMeshDistanceMaterial?(o(p,h),m(p,h)):h.isMeshNormalMaterial?o(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,x,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Mn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Mn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y,n(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,x,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*x,p.scale.value=y*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function g(p,h,x){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function m(p,h){const x=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function zB(t,e,n,r){let i={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){const w=y.program;r.uniformBlockBinding(x,w)}function c(x,y){let w=i[x.id];w===void 0&&(v(x),w=u(x),i[x.id]=w,x.addEventListener("dispose",p));const b=y.program;r.updateUBOMapping(x,b);const T=e.render.frame;o[x.id]!==T&&(d(x),o[x.id]=T)}function u(x){const y=f();x.__bindingPointIndex=y;const w=t.createBuffer(),b=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,w),w}function f(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],w=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,E=w.length;T<E;T++){const D=Array.isArray(w[T])?w[T]:[w[T]];for(let M=0,C=D.length;M<C;M++){const B=D[M];if(g(B,T,M,b)===!0){const F=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let N=0;for(let z=0;z<Q.length;z++){const k=Q[z],$=m(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,F+N,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,B.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,y,w,b){const T=x.value,E=y+"_"+w;if(b[E]===void 0)return typeof T=="number"||typeof T=="boolean"?b[E]=T:b[E]=T.clone(),!0;{const D=b[E];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return b[E]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function v(x){const y=x.uniforms;let w=0;const b=16;for(let E=0,D=y.length;E<D;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let C=0,B=M.length;C<B;C++){const F=M[C],Q=Array.isArray(F.value)?F.value:[F.value];for(let N=0,z=Q.length;N<z;N++){const k=Q[N],$=m(k),L=w%b;L!==0&&b-L<$.boundary&&(w+=b-L),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=$.storage}}}const T=w%b;return T>0&&(w+=b-T),x.__size=w,x.__cache={},this}function m(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const w=s.indexOf(y.__bindingPointIndex);s.splice(w,1),t.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function h(){for(const x in i)t.deleteBuffer(i[x]);s=[],i={},o={}}return{bind:l,update:c,dispose:h}}class sT{constructor(e={}){const{canvas:n=OU(),context:r=null,depth:i=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;r!==null?d=r.getContextAttributes().alpha:d=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const y=this;let w=!1,b=0,T=0,E=null,D=-1,M=null;const C=new Ht,B=new Ht;let F=null;const Q=new et(0);let N=0,z=n.width,k=n.height,$=1,L=null,I=null;const O=new Ht(0,0,z,k),H=new Ht(0,0,z,k);let W=!1;const G=new kg;let Z=!1,ce=!1,oe=null;const ee=new It,ge=new ot,xe=new K,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return E===null?$:1}let V=r;function nt(P,j){for(let q=0;q<P.length;q++){const J=P[q],Y=n.getContext(J,j);if(Y!==null)return Y}return null}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dg}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",ue,!1),V===null){const j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),V=nt(j,P),V===null)throw nt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ce,Ne,ye,rt,He,R,A,X,ae,re,le,Ae,ve,_e,Le,ke,ie,st,We,Be,Pe,Ee,De,it;function be(){Ce=new K4(V),Ne=new j4(V,Ce,e),Ce.init(Ne),Ee=new OB(V,Ce,Ne),ye=new DB(V,Ce,Ne),rt=new J4(V),He=new yB,R=new IB(V,Ce,ye,He,Ne,Ee,rt),A=new $4(y),X=new q4(y),ae=new aF(V,Ne),De=new V4(V,Ce,ae,Ne),re=new Q4(V,ae,rt,De),le=new r5(V,re,ae,rt),We=new n5(V,Ne,R),ke=new W4(He),Ae=new xB(y,A,X,Ce,Ne,De,ke),ve=new BB(y,He),_e=new SB,Le=new CB(Ce,Ne),st=new H4(y,A,X,ye,le,d,l),ie=new LB(y,le,Ne),it=new zB(V,rt,Ne,ye),Be=new G4(V,Ce,rt,Ne),Pe=new Z4(V,Ce,rt,Ne),rt.programs=Ae.programs,y.capabilities=Ne,y.extensions=Ce,y.properties=He,y.renderLists=_e,y.shadowMap=ie,y.state=ye,y.info=rt}be();const Te=new kB(y,V);this.xr=Te,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=Ce.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ce.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(P){P!==void 0&&($=P,this.setSize(z,k,!1))},this.getSize=function(P){return P.set(z,k)},this.setSize=function(P,j,q=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,k=j,n.width=Math.floor(P*$),n.height=Math.floor(j*$),q===!0&&(n.style.width=P+"px",n.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(z*$,k*$).floor()},this.setDrawingBufferSize=function(P,j,q){z=P,k=j,$=q,n.width=Math.floor(P*q),n.height=Math.floor(j*q),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(O)},this.setViewport=function(P,j,q,J){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,j,q,J),ye.viewport(C.copy(O).multiplyScalar($).floor())},this.getScissor=function(P){return P.copy(H)},this.setScissor=function(P,j,q,J){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,j,q,J),ye.scissor(B.copy(H).multiplyScalar($).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(P){ye.setScissorTest(W=P)},this.setOpaqueSort=function(P){L=P},this.setTransparentSort=function(P){I=P},this.getClearColor=function(P){return P.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(P=!0,j=!0,q=!0){let J=0;if(P){let Y=!1;if(E!==null){const Se=E.texture.format;Y=Se===O1||Se===I1||Se===D1}if(Y){const Se=E.texture.type,Re=Se===Vi||Se===Pi||Se===Og||Se===bo||Se===N1||Se===L1,Fe=st.getClearColor(),ze=st.getClearAlpha(),qe=Fe.r,Ve=Fe.g,Ge=Fe.b;Re?(g[0]=qe,g[1]=Ve,g[2]=Ge,g[3]=ze,V.clearBufferuiv(V.COLOR,0,g)):(v[0]=qe,v[1]=Ve,v[2]=Ge,v[3]=ze,V.clearBufferiv(V.COLOR,0,v))}else J|=V.COLOR_BUFFER_BIT}j&&(J|=V.DEPTH_BUFFER_BIT),q&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),_e.dispose(),Le.dispose(),He.dispose(),A.dispose(),X.dispose(),le.dispose(),De.dispose(),it.dispose(),Ae.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",sn),Te.removeEventListener("sessionend",ht),oe&&(oe.dispose(),oe=null),an.stop()};function ne(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const P=rt.autoReset,j=ie.enabled,q=ie.autoUpdate,J=ie.needsUpdate,Y=ie.type;be(),rt.autoReset=P,ie.enabled=j,ie.autoUpdate=q,ie.needsUpdate=J,ie.type=Y}function ue(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function me(P){const j=P.target;j.removeEventListener("dispose",me),Ue(j)}function Ue(P){Ie(P),He.remove(P)}function Ie(P){const j=He.get(P).programs;j!==void 0&&(j.forEach(function(q){Ae.releaseProgram(q)}),P.isShaderMaterial&&Ae.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,q,J,Y,Se){j===null&&(j=de);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=cT(P,j,q,J,Y);ye.setMaterial(J,Re);let ze=q.index,qe=1;if(J.wireframe===!0){if(ze=re.getWireframeAttribute(q),ze===void 0)return;qe=2}const Ve=q.drawRange,Ge=q.attributes.position;let At=Ve.start*qe,Tn=(Ve.start+Ve.count)*qe;Se!==null&&(At=Math.max(At,Se.start*qe),Tn=Math.min(Tn,(Se.start+Se.count)*qe)),ze!==null?(At=Math.max(At,0),Tn=Math.min(Tn,ze.count)):Ge!=null&&(At=Math.max(At,0),Tn=Math.min(Tn,Ge.count));const kt=Tn-At;if(kt<0||kt===1/0)return;De.setup(Y,J,Fe,q,ze);let Or,St=Be;if(ze!==null&&(Or=ae.get(ze),St=Pe,St.setIndex(Or)),Y.isMesh)J.wireframe===!0?(ye.setLineWidth(J.wireframeLinewidth*Me()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(Y.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),ye.setLineWidth(Ke*Me()),Y.isLineSegments?St.setMode(V.LINES):Y.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else Y.isPoints?St.setMode(V.POINTS):Y.isSprite&&St.setMode(V.TRIANGLES);if(Y.isBatchedMesh)St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)St.renderInstances(At,kt,Y.count);else if(q.isInstancedBufferGeometry){const Ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,$d=Math.min(q.instanceCount,Ke);St.renderInstances(At,kt,$d)}else St.render(At,kt)};function dt(P,j,q){P.transparent===!0&&P.side===$r&&P.forceSinglePass===!1?(P.side=Mn,P.needsUpdate=!0,ql(P,j,q),P.side=qi,P.needsUpdate=!0,ql(P,j,q),P.side=$r):ql(P,j,q)}this.compile=function(P,j,q=null){q===null&&(q=P),p=Le.get(q),p.init(),x.push(p),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),P!==q&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(y._useLegacyLights);const J=new Set;return P.traverse(function(Y){const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Fe=Se[Re];dt(Fe,q,Y),J.add(Fe)}else dt(Se,q,Y),J.add(Se)}),x.pop(),p=null,J},this.compileAsync=function(P,j,q=null){const J=this.compile(P,j,q);return new Promise(Y=>{function Se(){if(J.forEach(function(Re){He.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){Y(P);return}setTimeout(Se,10)}Ce.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ft=null;function Ft(P){ft&&ft(P)}function sn(){an.stop()}function ht(){an.start()}const an=new Z1;an.setAnimationLoop(Ft),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(P){ft=P,Te.setAnimationLoop(P),P===null?an.stop():an.start()},Te.addEventListener("sessionstart",sn),Te.addEventListener("sessionend",ht),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(j),j=Te.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,j,E),p=Le.get(P,x.length),p.init(),x.push(p),ee.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G.setFromProjectionMatrix(ee),ce=this.localClippingEnabled,Z=ke.init(this.clippingPlanes,ce),m=_e.get(P,h.length),m.init(),h.push(m),_r(P,j,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(L,I),this.info.render.frame++,Z===!0&&ke.beginShadows();const q=p.state.shadowsArray;if(ie.render(q,P,j),Z===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(m,P),p.setupLights(y._useLegacyLights),j.isArrayCamera){const J=j.cameras;for(let Y=0,Se=J.length;Y<Se;Y++){const Re=J[Y];Hg(m,P,Re,Re.viewport)}}else Hg(m,P,j);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(y,P,j),De.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,h.pop(),h.length>0?m=h[h.length-1]:m=null};function _r(P,j,q,J){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){J&&xe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ee);const Re=le.update(P),Fe=P.material;Fe.visible&&m.push(P,Re,Fe,q,xe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||G.intersectsObject(P))){const Re=le.update(P),Fe=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xe.copy(P.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),xe.copy(Re.boundingSphere.center)),xe.applyMatrix4(P.matrixWorld).applyMatrix4(ee)),Array.isArray(Fe)){const ze=Re.groups;for(let qe=0,Ve=ze.length;qe<Ve;qe++){const Ge=ze[qe],At=Fe[Ge.materialIndex];At&&At.visible&&m.push(P,Re,At,q,xe.z,Ge)}}else Fe.visible&&m.push(P,Re,Fe,q,xe.z,null)}}const Se=P.children;for(let Re=0,Fe=Se.length;Re<Fe;Re++)_r(Se[Re],j,q,J)}function Hg(P,j,q,J){const Y=P.opaque,Se=P.transmissive,Re=P.transparent;p.setupLightsView(q),Z===!0&&ke.setGlobalState(y.clippingPlanes,q),Se.length>0&&lT(Y,Se,j,q),J&&ye.viewport(C.copy(J)),Y.length>0&&Yl(Y,j,q),Se.length>0&&Yl(Se,j,q),Re.length>0&&Yl(Re,j,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function lT(P,j,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Se=Ne.isWebGL2;oe===null&&(oe=new Fo(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Al:Vi,minFilter:Cl,samples:Se?4:0})),y.getDrawingBufferSize(ge),Se?oe.setSize(ge.x,ge.y):oe.setSize(Xp(ge.x),Xp(ge.y));const Re=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(Q),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const Fe=y.toneMapping;y.toneMapping=Hi,Yl(P,q,J),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe);let ze=!1;for(let qe=0,Ve=j.length;qe<Ve;qe++){const Ge=j[qe],At=Ge.object,Tn=Ge.geometry,kt=Ge.material,Or=Ge.group;if(kt.side===$r&&At.layers.test(J.layers)){const St=kt.side;kt.side=Mn,kt.needsUpdate=!0,Vg(At,q,J,Tn,kt,Or),kt.side=St,kt.needsUpdate=!0,ze=!0}}ze===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe)),y.setRenderTarget(Re),y.setClearColor(Q,N),y.toneMapping=Fe}function Yl(P,j,q){const J=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Se=P.length;Y<Se;Y++){const Re=P[Y],Fe=Re.object,ze=Re.geometry,qe=J===null?Re.material:J,Ve=Re.group;Fe.layers.test(q.layers)&&Vg(Fe,j,q,ze,qe,Ve)}}function Vg(P,j,q,J,Y,Se){P.onBeforeRender(y,j,q,J,Y,Se),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(y,j,q,J,P,Se),Y.transparent===!0&&Y.side===$r&&Y.forceSinglePass===!1?(Y.side=Mn,Y.needsUpdate=!0,y.renderBufferDirect(q,j,J,Y,P,Se),Y.side=qi,Y.needsUpdate=!0,y.renderBufferDirect(q,j,J,Y,P,Se),Y.side=$r):y.renderBufferDirect(q,j,J,Y,P,Se),P.onAfterRender(y,j,q,J,Y,Se)}function ql(P,j,q){j.isScene!==!0&&(j=de);const J=He.get(P),Y=p.state.lights,Se=p.state.shadowsArray,Re=Y.state.version,Fe=Ae.getParameters(P,Y.state,Se,j,q),ze=Ae.getProgramCacheKey(Fe);let qe=J.programs;J.environment=P.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(P.isMeshStandardMaterial?X:A).get(P.envMap||J.environment),qe===void 0&&(P.addEventListener("dispose",me),qe=new Map,J.programs=qe);let Ve=qe.get(ze);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===Re)return jg(P,Fe),Ve}else Fe.uniforms=Ae.getUniforms(P),P.onBuild(q,Fe,y),P.onBeforeCompile(Fe,y),Ve=Ae.acquireProgram(Fe,ze),qe.set(ze,Ve),J.uniforms=Fe.uniforms;const Ge=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ge.clippingPlanes=ke.uniform),jg(P,Fe),J.needsLights=dT(P),J.lightsStateVersion=Re,J.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.directionalShadowMap.value=Y.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotShadowMap.value=Y.state.spotShadowMap,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMap.value=Y.state.pointShadowMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function Gg(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=lu.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function jg(P,j){const q=He.get(P);q.outputColorSpace=j.outputColorSpace,q.batching=j.batching,q.instancing=j.instancing,q.instancingColor=j.instancingColor,q.skinning=j.skinning,q.morphTargets=j.morphTargets,q.morphNormals=j.morphNormals,q.morphColors=j.morphColors,q.morphTargetsCount=j.morphTargetsCount,q.numClippingPlanes=j.numClippingPlanes,q.numIntersection=j.numClipIntersection,q.vertexAlphas=j.vertexAlphas,q.vertexTangents=j.vertexTangents,q.toneMapping=j.toneMapping}function cT(P,j,q,J,Y){j.isScene!==!0&&(j=de),R.resetTextureUnits();const Se=j.fog,Re=J.isMeshStandardMaterial?j.environment:null,Fe=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:oi,ze=(J.isMeshStandardMaterial?X:A).get(J.envMap||Re),qe=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!q.morphAttributes.position,At=!!q.morphAttributes.normal,Tn=!!q.morphAttributes.color;let kt=Hi;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(kt=y.toneMapping);const Or=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=Or!==void 0?Or.length:0,Ke=He.get(J),$d=p.state.lights;if(Z===!0&&(ce===!0||P!==M)){const Hn=P===M&&J.id===D;ke.setState(J,P,Hn)}let bt=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==$d.state.version||Ke.outputColorSpace!==Fe||Y.isBatchedMesh&&Ke.batching===!1||!Y.isBatchedMesh&&Ke.batching===!0||Y.isInstancedMesh&&Ke.instancing===!1||!Y.isInstancedMesh&&Ke.instancing===!0||Y.isSkinnedMesh&&Ke.skinning===!1||!Y.isSkinnedMesh&&Ke.skinning===!0||Y.isInstancedMesh&&Ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ke.instancingColor===!1&&Y.instanceColor!==null||Ke.envMap!==ze||J.fog===!0&&Ke.fog!==Se||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ke.numPlanes||Ke.numIntersection!==ke.numIntersection)||Ke.vertexAlphas!==qe||Ke.vertexTangents!==Ve||Ke.morphTargets!==Ge||Ke.morphNormals!==At||Ke.morphColors!==Tn||Ke.toneMapping!==kt||Ne.isWebGL2===!0&&Ke.morphTargetsCount!==St)&&(bt=!0):(bt=!0,Ke.__version=J.version);let ro=Ke.currentProgram;bt===!0&&(ro=ql(J,j,Y));let Wg=!1,wa=!1,Xd=!1;const Xt=ro.getUniforms(),io=Ke.uniforms;if(ye.useProgram(ro.program)&&(Wg=!0,wa=!0,Xd=!0),J.id!==D&&(D=J.id,wa=!0),Wg||M!==P){Xt.setValue(V,"projectionMatrix",P.projectionMatrix),Xt.setValue(V,"viewMatrix",P.matrixWorldInverse);const Hn=Xt.map.cameraPosition;Hn!==void 0&&Hn.setValue(V,xe.setFromMatrixPosition(P.matrixWorld)),Ne.logarithmicDepthBuffer&&Xt.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Xt.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,wa=!0,Xd=!0)}if(Y.isSkinnedMesh){Xt.setOptional(V,Y,"bindMatrix"),Xt.setOptional(V,Y,"bindMatrixInverse");const Hn=Y.skeleton;Hn&&(Ne.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),Xt.setValue(V,"boneTexture",Hn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Xt.setOptional(V,Y,"batchingTexture"),Xt.setValue(V,"batchingTexture",Y._matricesTexture,R));const Yd=q.morphAttributes;if((Yd.position!==void 0||Yd.normal!==void 0||Yd.color!==void 0&&Ne.isWebGL2===!0)&&We.update(Y,q,ro),(wa||Ke.receiveShadow!==Y.receiveShadow)&&(Ke.receiveShadow=Y.receiveShadow,Xt.setValue(V,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(io.envMap.value=ze,io.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),wa&&(Xt.setValue(V,"toneMappingExposure",y.toneMappingExposure),Ke.needsLights&&uT(io,Xd),Se&&J.fog===!0&&ve.refreshFogUniforms(io,Se),ve.refreshMaterialUniforms(io,J,$,k,oe),lu.upload(V,Gg(Ke),io,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(lu.upload(V,Gg(Ke),io,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Xt.setValue(V,"center",Y.center),Xt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),Xt.setValue(V,"normalMatrix",Y.normalMatrix),Xt.setValue(V,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Hn=J.uniformsGroups;for(let qd=0,fT=Hn.length;qd<fT;qd++)if(Ne.isWebGL2){const $g=Hn[qd];it.update($g,ro),it.bind($g,ro)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ro}function uT(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function dT(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,j,q){He.get(P.texture).__webglTexture=j,He.get(P.depthTexture).__webglTexture=q;const J=He.get(P);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=q===void 0,J.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,j){const q=He.get(P);q.__webglFramebuffer=j,q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,q=0){E=P,b=j,T=q;let J=!0,Y=null,Se=!1,Re=!1;if(P){const ze=He.get(P);ze.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(V.FRAMEBUFFER,null),J=!1):ze.__webglFramebuffer===void 0?R.setupRenderTarget(P):ze.__hasExternalTextures&&R.rebindTextures(P,He.get(P.texture).__webglTexture,He.get(P.depthTexture).__webglTexture);const qe=P.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Re=!0);const Ve=He.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ve[j])?Y=Ve[j][q]:Y=Ve[j],Se=!0):Ne.isWebGL2&&P.samples>0&&R.useMultisampledRTT(P)===!1?Y=He.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[q]:Y=Ve,C.copy(P.viewport),B.copy(P.scissor),F=P.scissorTest}else C.copy(O).multiplyScalar($).floor(),B.copy(H).multiplyScalar($).floor(),F=W;if(ye.bindFramebuffer(V.FRAMEBUFFER,Y)&&Ne.drawBuffers&&J&&ye.drawBuffers(P,Y),ye.viewport(C),ye.scissor(B),ye.setScissorTest(F),Se){const ze=He.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,q)}else if(Re){const ze=He.get(P.texture),qe=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.__webglTexture,q||0,qe)}D=-1},this.readRenderTargetPixels=function(P,j,q,J,Y,Se,Re){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=He.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){ye.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const ze=P.texture,qe=ze.format,Ve=ze.type;if(qe!==fr&&Ee.convert(qe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===Al&&(Ce.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ve!==Vi&&Ee.convert(Ve)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Ni&&(Ne.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-J&&q>=0&&q<=P.height-Y&&V.readPixels(j,q,J,Y,Ee.convert(qe),Ee.convert(Ve),Se)}finally{const ze=E!==null?He.get(E).__webglFramebuffer:null;ye.bindFramebuffer(V.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(P,j,q=0){const J=Math.pow(2,-q),Y=Math.floor(j.image.width*J),Se=Math.floor(j.image.height*J);R.setTexture2D(j,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,P.x,P.y,Y,Se),ye.unbindTexture()},this.copyTextureToTexture=function(P,j,q,J=0){const Y=j.image.width,Se=j.image.height,Re=Ee.convert(q.format),Fe=Ee.convert(q.type);R.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment),j.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,J,P.x,P.y,Y,Se,Re,Fe,j.image.data):j.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,J,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Re,j.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,J,P.x,P.y,Re,Fe,j.image),J===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(P,j,q,J,Y=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=P.max.x-P.min.x+1,Re=P.max.y-P.min.y+1,Fe=P.max.z-P.min.z+1,ze=Ee.convert(J.format),qe=Ee.convert(J.type);let Ve;if(J.isData3DTexture)R.setTexture3D(J,0),Ve=V.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)R.setTexture2DArray(J,0),Ve=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);const Ge=V.getParameter(V.UNPACK_ROW_LENGTH),At=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Tn=V.getParameter(V.UNPACK_SKIP_PIXELS),kt=V.getParameter(V.UNPACK_SKIP_ROWS),Or=V.getParameter(V.UNPACK_SKIP_IMAGES),St=q.isCompressedTexture?q.mipmaps[Y]:q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,St.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,P.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,P.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,P.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Ve,Y,j.x,j.y,j.z,Se,Re,Fe,ze,qe,St.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ve,Y,j.x,j.y,j.z,Se,Re,Fe,ze,St.data)):V.texSubImage3D(Ve,Y,j.x,j.y,j.z,Se,Re,Fe,ze,qe,St),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ge),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Tn),V.pixelStorei(V.UNPACK_SKIP_ROWS,kt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Or),Y===0&&J.generateMipmaps&&V.generateMipmap(Ve),ye.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),ye.unbindTexture()},this.resetState=function(){b=0,T=0,E=null,ye.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ug?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===Gd?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?Co:F1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Co?jt:oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class HB extends sT{}HB.prototype.isWebGL1Renderer=!0;class VB extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class GB extends ya{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k1,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aT extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const vh=new It,Sy=new K,wy=new K;class jB{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kg,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Sy.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sy),wy.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wy),n.updateMatrixWorld(),vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WB extends jB{constructor(){super(new J1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $B extends aT{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new WB}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class XB extends aT{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dg);const YB=({isEnabled:t})=>{const e=S.useRef(null),n=S.useRef(null),r=S.useRef(null),i=S.useRef(null),o=S.useRef(null);return S.useEffect(()=>{if(!t||!e.current)return;const s=new VB;n.current=s;const a=new Xn(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=5,r.current=a;const l=new sT({alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(0,0),e.current.appendChild(l.domElement),i.current=l;const c=new XB(4210752);s.add(c);const u=new $B(16777215,1);u.position.set(1,1,1),s.add(u);const f=new Wa;s.add(f);for(let v=0;v<20;v++){const m=Math.random()*.5+.1,p=new _a(m,m,m),h=new et;h.setHSL(Math.random(),.7,.5);const x=new GB({color:h,transparent:!0,opacity:.7}),y=new Rr(p,x);y.position.x=(Math.random()-.5)*10,y.position.y=(Math.random()-.5)*10,y.position.z=(Math.random()-.5)*10,y.rotationSpeed={x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},f.add(y)}const d=()=>{!n.current||!r.current||!i.current||(f.children.forEach(v=>{v.rotation.x+=v.rotationSpeed.x,v.rotation.y+=v.rotationSpeed.y,v.rotation.z+=v.rotationSpeed.z}),f.rotation.y+=.001,i.current.render(n.current,r.current),o.current=requestAnimationFrame(d))};d();const g=()=>{!r.current||!i.current||(r.current.aspect=window.innerWidth/window.innerHeight,r.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),o.current!==null&&cancelAnimationFrame(o.current),i.current&&e.current&&e.current.removeChild(i.current.domElement),n.current&&n.current.traverse(v=>{v instanceof Rr&&(v.geometry.dispose(),v.material instanceof ya?v.material.dispose():Array.isArray(v.material)&&v.material.forEach(m=>m.dispose()))})}},[t]),t?_.jsx("div",{ref:e,className:"fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"}):null},qB=()=>{const[t,e]=S.useState("// Your generated code will appear here"),[n,r]=S.useState(""),[i,o]=S.useState(!1),{toast:s}=fa(),[a,l]=S.useState(!0),[c,u]=S.useState(Gu()),[f,d]=S.useState(Z0()),[g,v]=S.useState(""),[m,p]=S.useState(null),[h,x]=S.useState(void 0),[y,w]=S.useState(void 0);S.useEffect(()=>{JD();const T=()=>{const E=Gu();u(E);const D=Z0();d(D)};return window.addEventListener("storage",T),()=>window.removeEventListener("storage",T)},[]);const b=async(T,E,D,M,C=!1)=>{o(!0);try{let B="";C&&g?B=`I previously asked you to: "${g}"

Now, I want to modify it with these changes: ${T}
Please keep the original structure and elements, but update them according to my new request.

Technical requirements:
- Framework: ${E.framework}
- Include CSS: ${E.includeCSS?"Yes":"No"}
- Include JavaScript: ${E.includeJS?"Yes":"No"}
- Make responsive: ${E.responsive?"Yes":"No"}`:B=`${T||"Convert this to code"}
      
Technical requirements:
- Framework: ${E.framework}
- Include CSS: ${E.includeCSS?"Yes":"No"}
- Include JavaScript: ${E.includeJS?"Yes":"No"}
- Make responsive: ${E.responsive?"Yes":"No"}`;let F="";D?(F=await DO(B,D,E.temperature),s({title:"Processing image",description:"Generating code from your image..."})):M?(F=await IO(M,B,E.temperature),s({title:"Processing Figma design",description:"Generating code from your Figma URL..."})):F=await LO(B,E.temperature),e(F);let Q=F;const N=F.match(/```html\s*([\s\S]*?)\s*```/);N&&N[1]?Q=N[1].trim():Q=F,r(Q),v(T),p(E),x(D),w(M),window.innerWidth<768&&l(!0),s({title:C?"Code updated successfully":"Code generated successfully",description:C?"Your code has been updated based on your modifications.":"Your code has been generated based on your input."})}catch(B){console.error("Error generating code:",B),s({variant:"destructive",title:"Error generating code",description:"There was an issue processing your request."})}finally{o(!1)}};return _.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsx(B3,{}),_.jsx(YB,{isEnabled:c==="3d"}),_.jsxs("div",{className:"md:hidden flex justify-center p-2",children:[_.jsx("button",{className:`px-4 py-2 text-sm ${a?"bg-primary text-white":"bg-gray-200 text-black"}`,onClick:()=>l(!0),children:"Output Viewer"}),_.jsx("button",{className:`px-4 py-2 text-sm ${a?"bg-gray-200 text-black":"bg-primary text-white"} ml-2`,onClick:()=>l(!1),children:"Code Viewer"})]}),_.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[_.jsxs("div",{className:`w-full md:w-1/2 h-full flex flex-col ${a?"":"hidden md:flex"}`,children:[_.jsx("div",{className:"flex-1 overflow-auto",children:_.jsx(H3,{output:n,currentTheme:f})}),t&&t!=="// Your generated code will appear here"&&_.jsx(NO,{code:t})]}),_.jsx("div",{className:`w-full md:w-1/2 h-full ${a?"hidden md:flex":""}`,children:_.jsx(z3,{code:t})})]}),_.jsx("div",{className:"border border-black m-5 shadow-lg",children:_.jsx(PO,{onSubmit:b,isLoading:i,currentPromptTheme:f,onPromptThemeChange:d,previousPrompt:g,previousOptions:m,previousImageData:h,previousFigmaUrl:y})}),_.jsxs("footer",{className:"bg-primary text-primary-foreground py-2 px-6 flex flex-col md:flex-row justify-between items-center",children:[_.jsxs("div",{className:"flex items-center space-x-2",children:[_.jsx("span",{className:"text-sm",children:"Powered by"}),_.jsx("a",{href:"https://svvaap.in",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:underline",children:_.jsx("img",{src:"https://svvaap.in/assets/logo_dark-DGRfYr3V.png",alt:"Svvaap Logo",className:"h-6"})})]}),_.jsxs("div",{className:"text-center text-sm my-2 md:my-0 font-bold",children:["Your Ideas, Our AI.",_.jsx("br",{}),_.jsx("span",{className:"font-semibold",children:"AI Partner - Google Gemini"})]}),_.jsx("div",{className:"hidden md:block",children:_.jsx("a",{href:"https://www.instagram.com/21xengineers/",target:"_blank",rel:"noopener noreferrer",className:"text-l font-bold hover:underline",children:"21xEngineers"})})]})]})},KB=()=>{const t=_E();return S.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:_.jsxs("div",{className:"text-center",children:[_.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),_.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),_.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},QB=new iL,ZB=()=>_.jsx(sL,{client:QB,children:_.jsxs(ON,{children:[_.jsx(I2,{}),_.jsx(cP,{}),_.jsx(jL,{children:_.jsxs(HL,{children:[_.jsx(bp,{path:"/",element:_.jsx(qB,{})}),_.jsx(bp,{path:"*",element:_.jsx(KB,{})})]})})]})});$S(document.getElementById("root")).render(_.jsx(ZB,{}));
