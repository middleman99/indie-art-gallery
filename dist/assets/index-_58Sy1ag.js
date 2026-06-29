function MT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yy={exports:{}},Xl={},Xy={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),UT=Symbol.for("react.portal"),FT=Symbol.for("react.fragment"),BT=Symbol.for("react.strict_mode"),zT=Symbol.for("react.profiler"),$T=Symbol.for("react.provider"),WT=Symbol.for("react.context"),HT=Symbol.for("react.forward_ref"),qT=Symbol.for("react.suspense"),KT=Symbol.for("react.memo"),GT=Symbol.for("react.lazy"),um=Symbol.iterator;function QT(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var Jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zy=Object.assign,ev={};function es(t,e,n){this.props=t,this.context=e,this.refs=ev,this.updater=n||Jy}es.prototype.isReactComponent={};es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tv(){}tv.prototype=es.prototype;function pd(t,e,n){this.props=t,this.context=e,this.refs=ev,this.updater=n||Jy}var md=pd.prototype=new tv;md.constructor=pd;Zy(md,es.prototype);md.isPureReactComponent=!0;var cm=Array.isArray,nv=Object.prototype.hasOwnProperty,gd={current:null},rv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nv.call(e,r)&&!rv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Lo,type:t,key:s,ref:o,props:i,_owner:gd.current}}function YT(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function XT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hm=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XT(""+t.key):e.toString(36)}function Ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lo:case UT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ic(o,0):r,cm(i)?(n="",t!=null&&(n=t.replace(hm,"$&/")+"/"),Ha(i,e,n,"",function(c){return c})):i!=null&&(yd(i)&&(i=YT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ic(s,l);o+=Ha(s,e,n,u,i)}else if(u=QT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ic(s,l++),o+=Ha(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var r=[],i=0;return Ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},qa={transition:null},ZT={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:qa,ReactCurrentOwner:gd};function sv(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=es;Z.Fragment=FT;Z.Profiler=zT;Z.PureComponent=pd;Z.StrictMode=BT;Z.Suspense=qT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;Z.act=sv;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)nv.call(e,u)&&!rv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Lo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:WT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$T,_context:t},t.Consumer=t};Z.createElement=iv;Z.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:HT,render:t}};Z.isValidElement=yd;Z.lazy=function(t){return{$$typeof:GT,_payload:{_status:-1,_result:t},_init:JT}};Z.memo=function(t,e){return{$$typeof:KT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};Z.unstable_act=sv;Z.useCallback=function(t,e){return ct.current.useCallback(t,e)};Z.useContext=function(t){return ct.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ct.current.useEffect(t,e)};Z.useId=function(){return ct.current.useId()};Z.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ct.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};Z.useRef=function(t){return ct.current.useRef(t)};Z.useState=function(t){return ct.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ct.current.useTransition()};Z.version="18.3.1";Xy.exports=Z;var L=Xy.exports;const ov=jT(L),eI=MT({__proto__:null,default:ov},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tI=L,nI=Symbol.for("react.element"),rI=Symbol.for("react.fragment"),iI=Object.prototype.hasOwnProperty,sI=tI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oI={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iI.call(e,r)&&!oI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nI,type:t,key:s,ref:o,props:i,_owner:sI.current}}Xl.Fragment=rI;Xl.jsx=av;Xl.jsxs=av;Yy.exports=Xl;var p=Yy.exports,qc={},lv={exports:{}},kt={},uv={exports:{}},cv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var J=z.length;z.push(G);e:for(;0<J;){var ye=J-1>>>1,ue=z[ye];if(0<i(ue,G))z[ye]=G,z[J]=ue,J=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],J=z.pop();if(J!==G){z[0]=J;e:for(var ye=0,ue=z.length,Re=ue>>>1;ye<Re;){var hn=2*(ye+1)-1,dn=z[hn],fn=hn+1,pn=z[fn];if(0>i(dn,J))fn<ue&&0>i(pn,dn)?(z[ye]=pn,z[fn]=J,ye=fn):(z[ye]=dn,z[hn]=J,ye=hn);else if(fn<ue&&0>i(pn,J))z[ye]=pn,z[fn]=J,ye=fn;else break e}}return G}function i(z,G){var J=z.sortIndex-G.sortIndex;return J!==0?J:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,y=3,T=!1,x=!1,P=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function D(z){if(P=!1,A(z),!x)if(n(u)!==null)x=!0,us(U);else{var G=n(c);G!==null&&cn(D,G.startTime-z)}}function U(z,G){x=!1,P&&(P=!1,v(_),_=-1),T=!0;var J=y;try{for(A(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!C());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,y=m.priorityLevel;var ue=ye(m.expirationTime<=G);G=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(u)&&r(u),A(G)}else r(u);m=n(u)}if(m!==null)var Re=!0;else{var hn=n(c);hn!==null&&cn(D,hn.startTime-G),Re=!1}return Re}finally{m=null,y=J,T=!1}}var F=!1,S=null,_=-1,I=5,k=-1;function C(){return!(t.unstable_now()-k<I)}function b(){if(S!==null){var z=t.unstable_now();k=z;var G=!0;try{G=S(!0,z)}finally{G?R():(F=!1,S=null)}}else F=!1}var R;if(typeof w=="function")R=function(){w(b)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Sr=xt.port2;xt.port1.onmessage=b,R=function(){Sr.postMessage(null)}}else R=function(){E(b,0)};function us(z){S=z,F||(F=!0,R())}function cn(z,G){_=E(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||T||(x=!0,us(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var J=y;y=G;try{return z()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=y;y=z;try{return G()}finally{y=J}},t.unstable_scheduleCallback=function(z,G,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=J+ue,z={id:f++,callback:G,priorityLevel:z,startTime:J,expirationTime:ue,sortIndex:-1},J>ye?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(P?(v(_),_=-1):P=!0,cn(D,J-ye))):(z.sortIndex=ue,e(u,z),x||T||(x=!0,us(U))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var G=y;return function(){var J=y;y=G;try{return z.apply(this,arguments)}finally{y=J}}}})(cv);uv.exports=cv;var aI=uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI=L,At=aI;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hv=new Set,ro={};function ti(t,e){Ui(t,e),Ui(t+"Capture",e)}function Ui(t,e){for(ro[t]=e,t=0;t<e.length;t++)hv.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,uI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},fm={};function cI(t){return Kc.call(fm,t)?!0:Kc.call(dm,t)?!1:uI.test(t)?fm[t]=!0:(dm[t]=!0,!1)}function hI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dI(t,e,n,r){if(e===null||typeof e>"u"||hI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function _d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,_d);qe[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,_d);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,_d);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dI(e,n,i,r)&&(n=null),r||i===null?cI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=lI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),dv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),pv=Symbol.for("react.offscreen"),pm=Symbol.iterator;function Is(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,sc;function Ds(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var oc=!1;function ac(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function fI(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function Xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case Gc:return"Profiler";case Ed:return"StrictMode";case Qc:return"Suspense";case Yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fv:return(t.displayName||"Context")+".Consumer";case dv:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:Xc(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return Xc(t(e))}catch{}}return null}function pI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xc(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mI(t){var e=mv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=mI(t))}function gv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yv(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function Zc(t,e){yv(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&eh(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eh(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Os(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function vv(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _v(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_v(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,wv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gI=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){gI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function Ev(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function Tv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ev(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rh(t,e){if(e){if(yI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sh=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oh=null,Pi=null,Ni=null;function _m(t){if(t=jo(t)){if(typeof oh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=nu(e),oh(t.stateNode,t.type,e))}}function Iv(t){Pi?Ni?Ni.push(t):Ni=[t]:Pi=t}function Sv(){if(Pi){var t=Pi,e=Ni;if(Ni=Pi=null,_m(t),e)for(t=0;t<e.length;t++)_m(e[t])}}function Av(t,e){return t(e)}function kv(){}var lc=!1;function Rv(t,e,n){if(lc)return t(e,n);lc=!0;try{return Av(t,e,n)}finally{lc=!1,(Pi!==null||Ni!==null)&&(kv(),Sv())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ah=!1;if(kn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){ah=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{ah=!1}function vI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var $s=!1,dl=null,fl=!1,lh=null,_I={onError:function(t){$s=!0,dl=t}};function wI(t,e,n,r,i,s,o,l,u){$s=!1,dl=null,vI.apply(_I,arguments)}function EI(t,e,n,r,i,s,o,l,u){if(wI.apply(this,arguments),$s){if($s){var c=dl;$s=!1,dl=null}else throw Error(j(198));fl||(fl=!0,lh=c)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wm(t){if(ni(t)!==t)throw Error(j(188))}function TI(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wm(i),t;if(s===r)return wm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Cv(t){return t=TI(t),t!==null?Pv(t):null}function Pv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pv(t);if(e!==null)return e;t=t.sibling}return null}var Nv=At.unstable_scheduleCallback,Em=At.unstable_cancelCallback,II=At.unstable_shouldYield,SI=At.unstable_requestPaint,Ce=At.unstable_now,AI=At.unstable_getCurrentPriorityLevel,Ad=At.unstable_ImmediatePriority,bv=At.unstable_UserBlockingPriority,pl=At.unstable_NormalPriority,kI=At.unstable_LowPriority,Dv=At.unstable_IdlePriority,Jl=null,Zt=null;function RI(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:PI,xI=Math.log,CI=Math.LN2;function PI(t){return t>>>=0,t===0?32:31-(xI(t)/CI|0)|0}var Sa=64,Aa=4194304;function Ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ls(l):(s&=o,s!==0&&(r=Ls(s)))}else o=n&~i,o!==0?r=Ls(o):s!==0&&(r=Ls(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function NI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=NI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function uh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ov(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function DI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vv,Rd,Mv,jv,Uv,ch=!1,ka=[],er=null,tr=null,nr=null,oo=new Map,ao=new Map,$n=[],OI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function As(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=jo(e),e!==null&&Rd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LI(t,e,n,r,i){switch(e){case"focusin":return er=As(er,t,e,n,r,i),!0;case"dragenter":return tr=As(tr,t,e,n,r,i),!0;case"mouseover":return nr=As(nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oo.set(s,As(oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ao.set(s,As(ao.get(s)||null,t,e,n,r,i)),!0}return!1}function Fv(t){var e=br(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=xv(n),e!==null){t.blockedOn=e,Uv(t.priority,function(){Mv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sh=r,n.target.dispatchEvent(r),sh=null}else return e=jo(n),e!==null&&Rd(e),t.blockedOn=n,!1;e.shift()}return!0}function Im(t,e,n){Ka(t)&&n.delete(e)}function VI(){ch=!1,er!==null&&Ka(er)&&(er=null),tr!==null&&Ka(tr)&&(tr=null),nr!==null&&Ka(nr)&&(nr=null),oo.forEach(Im),ao.forEach(Im)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,ch||(ch=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,VI)))}function lo(t){function e(i){return ks(i,t)}if(0<ka.length){ks(ka[0],t);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&ks(er,t),tr!==null&&ks(tr,t),nr!==null&&ks(nr,t),oo.forEach(e),ao.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)Fv(n),n.blockedOn===null&&$n.shift()}var bi=On.ReactCurrentBatchConfig,gl=!0;function MI(t,e,n,r){var i=ae,s=bi.transition;bi.transition=null;try{ae=1,xd(t,e,n,r)}finally{ae=i,bi.transition=s}}function jI(t,e,n,r){var i=ae,s=bi.transition;bi.transition=null;try{ae=4,xd(t,e,n,r)}finally{ae=i,bi.transition=s}}function xd(t,e,n,r){if(gl){var i=hh(t,e,n,r);if(i===null)_c(t,e,r,yl,n),Tm(t,r);else if(LI(i,t,e,n,r))r.stopPropagation();else if(Tm(t,r),e&4&&-1<OI.indexOf(t)){for(;i!==null;){var s=jo(i);if(s!==null&&Vv(s),s=hh(t,e,n,r),s===null&&_c(t,e,r,yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _c(t,e,r,null,n)}}var yl=null;function hh(t,e,n,r){if(yl=null,t=Sd(r),t=br(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function Bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AI()){case Ad:return 1;case bv:return 4;case pl:case kI:return 16;case Dv:return 536870912;default:return 16}default:return 16}}var Yn=null,Cd=null,Ga=null;function zv(){if(Ga)return Ga;var t,e=Cd,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ga=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function Sm(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:Sm,this.isPropagationStopped=Sm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=Rt(ts),Mo=we({},ts,{view:0,detail:0}),UI=Rt(Mo),cc,hc,Rs,Zl=we({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(cc=t.screenX-Rs.screenX,hc=t.screenY-Rs.screenY):hc=cc=0,Rs=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),Am=Rt(Zl),FI=we({},Zl,{dataTransfer:0}),BI=Rt(FI),zI=we({},Mo,{relatedTarget:0}),dc=Rt(zI),$I=we({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),WI=Rt($I),HI=we({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qI=Rt(HI),KI=we({},ts,{data:0}),km=Rt(KI),GI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YI[t])?!!e[t]:!1}function Nd(){return XI}var JI=we({},Mo,{key:function(t){if(t.key){var e=GI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nd,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZI=Rt(JI),e1=we({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Rt(e1),t1=we({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nd}),n1=Rt(t1),r1=we({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=Rt(r1),s1=we({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o1=Rt(s1),a1=[9,13,27,32],bd=kn&&"CompositionEvent"in window,Ws=null;kn&&"documentMode"in document&&(Ws=document.documentMode);var l1=kn&&"TextEvent"in window&&!Ws,$v=kn&&(!bd||Ws&&8<Ws&&11>=Ws),xm=" ",Cm=!1;function Wv(t,e){switch(t){case"keyup":return a1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function u1(t,e){switch(t){case"compositionend":return Hv(e);case"keypress":return e.which!==32?null:(Cm=!0,xm);case"textInput":return t=e.data,t===xm&&Cm?null:t;default:return null}}function c1(t,e){if(vi)return t==="compositionend"||!bd&&Wv(t,e)?(t=zv(),Ga=Cd=Yn=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $v&&e.locale!=="ko"?null:e.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h1[t.type]:e==="textarea"}function qv(t,e,n,r){Iv(r),e=vl(e,"onChange"),0<e.length&&(n=new Pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,uo=null;function d1(t){r_(t,0)}function eu(t){var e=Ei(t);if(gv(e))return t}function f1(t,e){if(t==="change")return e}var Kv=!1;if(kn){var fc;if(kn){var pc="oninput"in document;if(!pc){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),pc=typeof Nm.oninput=="function"}fc=pc}else fc=!1;Kv=fc&&(!document.documentMode||9<document.documentMode)}function bm(){Hs&&(Hs.detachEvent("onpropertychange",Gv),uo=Hs=null)}function Gv(t){if(t.propertyName==="value"&&eu(uo)){var e=[];qv(e,uo,t,Sd(t)),Rv(d1,e)}}function p1(t,e,n){t==="focusin"?(bm(),Hs=e,uo=n,Hs.attachEvent("onpropertychange",Gv)):t==="focusout"&&bm()}function m1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(uo)}function g1(t,e){if(t==="click")return eu(e)}function y1(t,e){if(t==="input"||t==="change")return eu(e)}function v1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:v1;function co(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Om(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function Qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yv(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _1(t){var e=Yv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qv(n.ownerDocument.documentElement,n)){if(r!==null&&Dd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Om(n,s);var o=Om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w1=kn&&"documentMode"in document&&11>=document.documentMode,_i=null,dh=null,qs=null,fh=!1;function Lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fh||_i==null||_i!==hl(r)||(r=_i,"selectionStart"in r&&Dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&co(qs,r)||(qs=r,r=vl(dh,"onSelect"),0<r.length&&(e=new Pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},mc={},Xv={};kn&&(Xv=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function tu(t){if(mc[t])return mc[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xv)return mc[t]=e[n];return t}var Jv=tu("animationend"),Zv=tu("animationiteration"),e_=tu("animationstart"),t_=tu("transitionend"),n_=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){n_.set(t,e),ti(e,[t])}for(var gc=0;gc<Vm.length;gc++){var yc=Vm[gc],E1=yc.toLowerCase(),T1=yc[0].toUpperCase()+yc.slice(1);_r(E1,"on"+T1)}_r(Jv,"onAnimationEnd");_r(Zv,"onAnimationIteration");_r(e_,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(t_,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EI(r,e,void 0,t),t.currentTarget=null}function r_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,c),s=u}}}if(fl)throw t=lh,fl=!1,lh=null,t}function fe(t,e){var n=e[vh];n===void 0&&(n=e[vh]=new Set);var r=t+"__bubble";n.has(r)||(i_(e,t,2,!1),n.add(r))}function vc(t,e,n){var r=0;e&&(r|=4),i_(n,t,r,e)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[Ca]){t[Ca]=!0,hv.forEach(function(n){n!=="selectionchange"&&(I1.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ca]||(e[Ca]=!0,vc("selectionchange",!1,e))}}function i_(t,e,n,r){switch(Bv(e)){case 1:var i=MI;break;case 4:i=jI;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _c(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Rv(function(){var c=s,f=Sd(n),m=[];e:{var y=n_.get(t);if(y!==void 0){var T=Pd,x=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":T=ZI;break;case"focusin":x="focus",T=dc;break;case"focusout":x="blur",T=dc;break;case"beforeblur":case"afterblur":T=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=BI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=n1;break;case Jv:case Zv:case e_:T=WI;break;case t_:T=i1;break;case"scroll":T=UI;break;case"wheel":T=o1;break;case"copy":case"cut":case"paste":T=qI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Rm}var P=(e&4)!==0,E=!P&&t==="scroll",v=P?y!==null?y+"Capture":null:y;P=[];for(var w=c,A;w!==null;){A=w;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,v!==null&&(D=so(w,v),D!=null&&P.push(fo(w,D,A)))),E)break;w=w.return}0<P.length&&(y=new T(y,x,null,n,f),m.push({event:y,listeners:P}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",y&&n!==sh&&(x=n.relatedTarget||n.fromElement)&&(br(x)||x[Rn]))break e;if((T||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,T?(x=n.relatedTarget||n.toElement,T=c,x=x?br(x):null,x!==null&&(E=ni(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(T=null,x=c),T!==x)){if(P=Am,D="onMouseLeave",v="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Rm,D="onPointerLeave",v="onPointerEnter",w="pointer"),E=T==null?y:Ei(T),A=x==null?y:Ei(x),y=new P(D,w+"leave",T,n,f),y.target=E,y.relatedTarget=A,D=null,br(f)===c&&(P=new P(v,w+"enter",x,n,f),P.target=A,P.relatedTarget=E,D=P),E=D,T&&x)t:{for(P=T,v=x,w=0,A=P;A;A=di(A))w++;for(A=0,D=v;D;D=di(D))A++;for(;0<w-A;)P=di(P),w--;for(;0<A-w;)v=di(v),A--;for(;w--;){if(P===v||v!==null&&P===v.alternate)break t;P=di(P),v=di(v)}P=null}else P=null;T!==null&&jm(m,y,T,P,!1),x!==null&&E!==null&&jm(m,E,x,P,!0)}}e:{if(y=c?Ei(c):window,T=y.nodeName&&y.nodeName.toLowerCase(),T==="select"||T==="input"&&y.type==="file")var U=f1;else if(Pm(y))if(Kv)U=y1;else{U=m1;var F=p1}else(T=y.nodeName)&&T.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=g1);if(U&&(U=U(t,c))){qv(m,U,n,f);break e}F&&F(t,y,c),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&eh(y,"number",y.value)}switch(F=c?Ei(c):window,t){case"focusin":(Pm(F)||F.contentEditable==="true")&&(_i=F,dh=c,qs=null);break;case"focusout":qs=dh=_i=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,Lm(m,n,f);break;case"selectionchange":if(w1)break;case"keydown":case"keyup":Lm(m,n,f)}var S;if(bd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else vi?Wv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&($v&&n.locale!=="ko"&&(vi||_!=="onCompositionStart"?_==="onCompositionEnd"&&vi&&(S=zv()):(Yn=f,Cd="value"in Yn?Yn.value:Yn.textContent,vi=!0)),F=vl(c,_),0<F.length&&(_=new km(_,t,null,n,f),m.push({event:_,listeners:F}),S?_.data=S:(S=Hv(n),S!==null&&(_.data=S)))),(S=l1?u1(t,n):c1(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(f=new km("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=S))}r_(m,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=so(t,n),s!=null&&r.unshift(fo(t,s,i)),s=so(t,e),s!=null&&r.push(fo(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=so(n,s),u!=null&&o.unshift(fo(n,u,l))):i||(u=so(n,s),u!=null&&o.push(fo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,A1=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(A1,"")}function Pa(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(j(425))}function _l(){}var ph=null,mh=null;function gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(x1)}:yh;function x1(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);lo(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),Yt="__reactFiber$"+ns,po="__reactProps$"+ns,Rn="__reactContainer$"+ns,vh="__reactEvents$"+ns,C1="__reactListeners$"+ns,P1="__reactHandles$"+ns;function br(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[Yt])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function jo(t){return t=t[Yt]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function nu(t){return t[po]||null}var _h=[],Ti=-1;function wr(t){return{current:t}}function pe(t){0>Ti||(t.current=_h[Ti],_h[Ti]=null,Ti--)}function he(t,e){Ti++,_h[Ti]=t.current,t.current=e}var fr={},rt=wr(fr),mt=wr(!1),$r=fr;function Fi(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function wl(){pe(mt),pe(rt)}function zm(t,e,n){if(rt.current!==fr)throw Error(j(168));he(rt,e),he(mt,n)}function s_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,pI(t)||"Unknown",i));return we({},n,r)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,$r=rt.current,he(rt,t),he(mt,mt.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=s_(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,pe(mt),pe(rt),he(rt,t)):pe(mt),he(mt,n)}var vn=null,ru=!1,Ec=!1;function o_(t){vn===null?vn=[t]:vn.push(t)}function N1(t){ru=!0,o_(t)}function Er(){if(!Ec&&vn!==null){Ec=!0;var t=0,e=ae;try{var n=vn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,ru=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),Nv(Ad,Er),i}finally{ae=e,Ec=!1}}return null}var Ii=[],Si=0,Tl=null,Il=0,Ct=[],Pt=0,Wr=null,_n=1,wn="";function Cr(t,e){Ii[Si++]=Il,Ii[Si++]=Tl,Tl=t,Il=e}function a_(t,e,n){Ct[Pt++]=_n,Ct[Pt++]=wn,Ct[Pt++]=Wr,Wr=t;var r=_n;t=wn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-Ft(e)+i|n<<i|r,wn=s+t}else _n=1<<s|n<<i|r,wn=t}function Od(t){t.return!==null&&(Cr(t,1),a_(t,1,0))}function Ld(t){for(;t===Tl;)Tl=Ii[--Si],Ii[Si]=null,Il=Ii[--Si],Ii[Si]=null;for(;t===Wr;)Wr=Ct[--Pt],Ct[Pt]=null,wn=Ct[--Pt],Ct[Pt]=null,_n=Ct[--Pt],Ct[Pt]=null}var St=null,Et=null,me=!1,Ut=null;function l_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Et=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:_n,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Et=null,!0):!1;default:return!1}}function wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eh(t){if(me){var e=Et;if(e){var n=e;if(!Wm(t,e)){if(wh(t))throw Error(j(418));e=rr(n.nextSibling);var r=St;e&&Wm(t,e)?l_(r,n):(t.flags=t.flags&-4097|2,me=!1,St=t)}}else{if(wh(t))throw Error(j(418));t.flags=t.flags&-4097|2,me=!1,St=t}}}function Hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Na(t){if(t!==St)return!1;if(!me)return Hm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gh(t.type,t.memoizedProps)),e&&(e=Et)){if(wh(t))throw u_(),Error(j(418));for(;e;)l_(t,e),e=rr(e.nextSibling)}if(Hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=St?rr(t.stateNode.nextSibling):null;return!0}function u_(){for(var t=Et;t;)t=rr(t.nextSibling)}function Bi(){Et=St=null,me=!1}function Vd(t){Ut===null?Ut=[t]:Ut.push(t)}var b1=On.ReactCurrentBatchConfig;function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function c_(t){function e(v,w){if(t){var A=v.deletions;A===null?(v.deletions=[w],v.flags|=16):A.push(w)}}function n(v,w){if(!t)return null;for(;w!==null;)e(v,w),w=w.sibling;return null}function r(v,w){for(v=new Map;w!==null;)w.key!==null?v.set(w.key,w):v.set(w.index,w),w=w.sibling;return v}function i(v,w){return v=ar(v,w),v.index=0,v.sibling=null,v}function s(v,w,A){return v.index=A,t?(A=v.alternate,A!==null?(A=A.index,A<w?(v.flags|=2,w):A):(v.flags|=2,w)):(v.flags|=1048576,w)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,w,A,D){return w===null||w.tag!==6?(w=xc(A,v.mode,D),w.return=v,w):(w=i(w,A),w.return=v,w)}function u(v,w,A,D){var U=A.type;return U===yi?f(v,w,A.props.children,D,A.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Bn&&qm(U)===w.type)?(D=i(w,A.props),D.ref=xs(v,w,A),D.return=v,D):(D=nl(A.type,A.key,A.props,null,v.mode,D),D.ref=xs(v,w,A),D.return=v,D)}function c(v,w,A,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Cc(A,v.mode,D),w.return=v,w):(w=i(w,A.children||[]),w.return=v,w)}function f(v,w,A,D,U){return w===null||w.tag!==7?(w=Ur(A,v.mode,D,U),w.return=v,w):(w=i(w,A),w.return=v,w)}function m(v,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=xc(""+w,v.mode,A),w.return=v,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ea:return A=nl(w.type,w.key,w.props,null,v.mode,A),A.ref=xs(v,null,w),A.return=v,A;case gi:return w=Cc(w,v.mode,A),w.return=v,w;case Bn:var D=w._init;return m(v,D(w._payload),A)}if(Os(w)||Is(w))return w=Ur(w,v.mode,A,null),w.return=v,w;ba(v,w)}return null}function y(v,w,A,D){var U=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:l(v,w,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ea:return A.key===U?u(v,w,A,D):null;case gi:return A.key===U?c(v,w,A,D):null;case Bn:return U=A._init,y(v,w,U(A._payload),D)}if(Os(A)||Is(A))return U!==null?null:f(v,w,A,D,null);ba(v,A)}return null}function T(v,w,A,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return v=v.get(A)||null,l(w,v,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ea:return v=v.get(D.key===null?A:D.key)||null,u(w,v,D,U);case gi:return v=v.get(D.key===null?A:D.key)||null,c(w,v,D,U);case Bn:var F=D._init;return T(v,w,A,F(D._payload),U)}if(Os(D)||Is(D))return v=v.get(A)||null,f(w,v,D,U,null);ba(w,D)}return null}function x(v,w,A,D){for(var U=null,F=null,S=w,_=w=0,I=null;S!==null&&_<A.length;_++){S.index>_?(I=S,S=null):I=S.sibling;var k=y(v,S,A[_],D);if(k===null){S===null&&(S=I);break}t&&S&&k.alternate===null&&e(v,S),w=s(k,w,_),F===null?U=k:F.sibling=k,F=k,S=I}if(_===A.length)return n(v,S),me&&Cr(v,_),U;if(S===null){for(;_<A.length;_++)S=m(v,A[_],D),S!==null&&(w=s(S,w,_),F===null?U=S:F.sibling=S,F=S);return me&&Cr(v,_),U}for(S=r(v,S);_<A.length;_++)I=T(S,v,_,A[_],D),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?_:I.key),w=s(I,w,_),F===null?U=I:F.sibling=I,F=I);return t&&S.forEach(function(C){return e(v,C)}),me&&Cr(v,_),U}function P(v,w,A,D){var U=Is(A);if(typeof U!="function")throw Error(j(150));if(A=U.call(A),A==null)throw Error(j(151));for(var F=U=null,S=w,_=w=0,I=null,k=A.next();S!==null&&!k.done;_++,k=A.next()){S.index>_?(I=S,S=null):I=S.sibling;var C=y(v,S,k.value,D);if(C===null){S===null&&(S=I);break}t&&S&&C.alternate===null&&e(v,S),w=s(C,w,_),F===null?U=C:F.sibling=C,F=C,S=I}if(k.done)return n(v,S),me&&Cr(v,_),U;if(S===null){for(;!k.done;_++,k=A.next())k=m(v,k.value,D),k!==null&&(w=s(k,w,_),F===null?U=k:F.sibling=k,F=k);return me&&Cr(v,_),U}for(S=r(v,S);!k.done;_++,k=A.next())k=T(S,v,_,k.value,D),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?_:k.key),w=s(k,w,_),F===null?U=k:F.sibling=k,F=k);return t&&S.forEach(function(b){return e(v,b)}),me&&Cr(v,_),U}function E(v,w,A,D){if(typeof A=="object"&&A!==null&&A.type===yi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ea:e:{for(var U=A.key,F=w;F!==null;){if(F.key===U){if(U=A.type,U===yi){if(F.tag===7){n(v,F.sibling),w=i(F,A.props.children),w.return=v,v=w;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Bn&&qm(U)===F.type){n(v,F.sibling),w=i(F,A.props),w.ref=xs(v,F,A),w.return=v,v=w;break e}n(v,F);break}else e(v,F);F=F.sibling}A.type===yi?(w=Ur(A.props.children,v.mode,D,A.key),w.return=v,v=w):(D=nl(A.type,A.key,A.props,null,v.mode,D),D.ref=xs(v,w,A),D.return=v,v=D)}return o(v);case gi:e:{for(F=A.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(v,w.sibling),w=i(w,A.children||[]),w.return=v,v=w;break e}else{n(v,w);break}else e(v,w);w=w.sibling}w=Cc(A,v.mode,D),w.return=v,v=w}return o(v);case Bn:return F=A._init,E(v,w,F(A._payload),D)}if(Os(A))return x(v,w,A,D);if(Is(A))return P(v,w,A,D);ba(v,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(v,w.sibling),w=i(w,A),w.return=v,v=w):(n(v,w),w=xc(A,v.mode,D),w.return=v,v=w),o(v)):n(v,w)}return E}var zi=c_(!0),h_=c_(!1),Sl=wr(null),Al=null,Ai=null,Md=null;function jd(){Md=Ai=Al=null}function Ud(t){var e=Sl.current;pe(Sl),t._currentValue=e}function Th(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){Al=t,Md=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(Al===null)throw Error(j(308));Ai=t,Al.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var Dr=null;function Fd(t){Dr===null?Dr=[t]:Dr.push(t)}function d_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fd(e)):(n.next=i.next,i.next=n),e.interleaved=n,xn(t,r)}function xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xn(t,n)}return i=r.interleaved,i===null?(e.next=e,Fd(r)):(e.next=i.next,i.next=e),r.interleaved=e,xn(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}function Km(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kl(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var y=l.lane,T=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(y=e,T=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){m=x.call(T,m,y);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,y=typeof x=="function"?x.call(T,m,y):x,y==null)break e;m=we({},m,y);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else T={eventTime:T,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=T,u=m):f=f.next=T,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=m}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Uo={},en=wr(Uo),mo=wr(Uo),go=wr(Uo);function Or(t){if(t===Uo)throw Error(j(174));return t}function zd(t,e){switch(he(go,e),he(mo,t),he(en,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nh(e,t)}pe(en),he(en,e)}function $i(){pe(en),pe(mo),pe(go)}function p_(t){Or(go.current);var e=Or(en.current),n=nh(e,t.type);e!==n&&(he(mo,t),he(en,n))}function $d(t){mo.current===t&&(pe(en),pe(mo))}var ve=wr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tc=[];function Wd(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var Xa=On.ReactCurrentDispatcher,Ic=On.ReactCurrentBatchConfig,Hr=0,_e=null,De=null,je=null,xl=!1,Ks=!1,yo=0,D1=0;function Xe(){throw Error(j(321))}function Hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function qd(t,e,n,r,i,s){if(Hr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xa.current=t===null||t.memoizedState===null?M1:j1,t=n(r,i),Ks){s=0;do{if(Ks=!1,yo=0,25<=s)throw Error(j(301));s+=1,je=De=null,e.updateQueue=null,Xa.current=U1,t=n(r,i)}while(Ks)}if(Xa.current=Cl,e=De!==null&&De.next!==null,Hr=0,je=De=_e=null,xl=!1,e)throw Error(j(300));return t}function Kd(){var t=yo!==0;return yo=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?_e.memoizedState=je=t:je=je.next=t,je}function Ot(){if(De===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=je===null?_e.memoizedState:je.next;if(e!==null)je=e,De=t;else{if(t===null)throw Error(j(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},je===null?_e.memoizedState=je=t:je=je.next=t}return je}function vo(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Hr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=f,qr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ac(t){var e=Ot(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function m_(){}function g_(t,e){var n=_e,r=Ot(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Gd(__.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,_o(9,v_.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(j(349));Hr&30||y_(n,e,i)}return i}function y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v_(t,e,n,r){e.value=n,e.getSnapshot=r,w_(e)&&E_(t)}function __(t,e,n){return n(function(){w_(e)&&E_(t)})}function w_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function E_(t){var e=xn(t,1);e!==null&&Bt(e,t,1,-1)}function Qm(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=V1.bind(null,_e,t),[e.memoizedState,t]}function _o(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function T_(){return Ot().memoizedState}function Ja(t,e,n,r){var i=Qt();_e.flags|=t,i.memoizedState=_o(1|e,n,void 0,r===void 0?null:r)}function iu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Hd(r,o.deps)){i.memoizedState=_o(e,n,s,r);return}}_e.flags|=t,i.memoizedState=_o(1|e,n,s,r)}function Ym(t,e){return Ja(8390656,8,t,e)}function Gd(t,e){return iu(2048,8,t,e)}function I_(t,e){return iu(4,2,t,e)}function S_(t,e){return iu(4,4,t,e)}function A_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k_(t,e,n){return n=n!=null?n.concat([t]):null,iu(4,4,A_.bind(null,e,t),n)}function Qd(){}function R_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function C_(t,e,n){return Hr&21?($t(n,e)||(n=Ov(),_e.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function O1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Ic.transition;Ic.transition={};try{t(!1),e()}finally{ae=n,Ic.transition=r}}function P_(){return Ot().memoizedState}function L1(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N_(t))b_(e,n);else if(n=d_(t,e,n,r),n!==null){var i=ut();Bt(n,t,r,i),D_(n,e,r)}}function V1(t,e,n){var r=or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N_(t))b_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,Fd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=d_(t,e,i,r),n!==null&&(i=ut(),Bt(n,t,r,i),D_(n,e,r))}}function N_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function b_(t,e){Ks=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}var Cl={readContext:Dt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},M1={readContext:Dt,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:Ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4194308,4,A_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ja(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=L1.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:Qd,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=O1.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Qt();if(me){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ue===null)throw Error(j(349));Hr&30||y_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ym(__.bind(null,r,s,t),[t]),r.flags|=2048,_o(9,v_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Ue.identifierPrefix;if(me){var n=wn,r=_n;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=D1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j1={readContext:Dt,useCallback:R_,useContext:Dt,useEffect:Gd,useImperativeHandle:k_,useInsertionEffect:I_,useLayoutEffect:S_,useMemo:x_,useReducer:Sc,useRef:T_,useState:function(){return Sc(vo)},useDebugValue:Qd,useDeferredValue:function(t){var e=Ot();return C_(e,De.memoizedState,t)},useTransition:function(){var t=Sc(vo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:P_,unstable_isNewReconciler:!1},U1={readContext:Dt,useCallback:R_,useContext:Dt,useEffect:Gd,useImperativeHandle:k_,useInsertionEffect:I_,useLayoutEffect:S_,useMemo:x_,useReducer:Ac,useRef:T_,useState:function(){return Ac(vo)},useDebugValue:Qd,useDeferredValue:function(t){var e=Ot();return De===null?e.memoizedState=t:C_(e,De.memoizedState,t)},useTransition:function(){var t=Ac(vo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:P_,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ih(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var su={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=or(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Bt(e,t,i,r),Ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=or(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Bt(e,t,i,r),Ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=or(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ir(t,i,r),e!==null&&(Bt(e,t,r,n),Ya(e,t,r))}};function Xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!co(n,r)||!co(i,s):!0}function O_(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=gt(e)?$r:rt.current,r=e.contextTypes,s=(r=r!=null)?Fi(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=su,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&su.enqueueReplaceState(e,e.state,null)}function Sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=gt(e)?$r:rt.current,i.context=Fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ih(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&su.enqueueReplaceState(i,i.state,null),kl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=fI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ah(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F1=typeof WeakMap=="function"?WeakMap:Map;function L_(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nl||(Nl=!0,Lh=r),Ah(t,e)},n}function V_(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ah(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ah(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new F1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eS.bind(null,t,e,n),e.then(t,t))}function eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var B1=On.ReactCurrentOwner,pt=!1;function lt(t,e,n,r){e.child=t===null?h_(e,null,n,r):zi(e,t.child,n,r)}function ng(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=qd(t,e,n,r,s,i),n=Kd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(me&&n&&Od(e),e.flags|=1,lt(t,e,r,i),e.child)}function rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M_(t,e,s,r,i)):(t=nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function M_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(co(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return kh(t,e,n,r,i)}function j_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ri,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ri,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Ri,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Ri,wt),wt|=r;return lt(t,e,i,n),e.child}function U_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kh(t,e,n,r,i){var s=gt(n)?$r:rt.current;return s=Fi(e,s),Di(e,i),n=qd(t,e,n,r,s,i),r=Kd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(me&&r&&Od(e),e.flags|=1,lt(t,e,n,i),e.child)}function ig(t,e,n,r,i){if(gt(n)){var s=!0;El(e)}else s=!1;if(Di(e,i),e.stateNode===null)Za(t,e),O_(e,n,r),Sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=gt(n)?$r:rt.current,c=Fi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Jm(e,o,r,c),zn=!1;var y=e.memoizedState;o.state=y,kl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||mt.current||zn?(typeof f=="function"&&(Ih(e,n,f,r),u=e.memoizedState),(l=zn||Xm(e,n,l,r,y,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,f_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=gt(n)?$r:rt.current,u=Fi(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&Jm(e,o,r,u),zn=!1,y=e.memoizedState,o.state=y,kl(e,r,o,i);var x=e.memoizedState;l!==m||y!==x||mt.current||zn?(typeof T=="function"&&(Ih(e,n,T,r),x=e.memoizedState),(c=zn||Xm(e,n,c,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Rh(t,e,n,r,s,i)}function Rh(t,e,n,r,i,s){U_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),Cn(t,e,s);r=e.stateNode,B1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,s),e.child=zi(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function F_(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),zd(t,e.containerInfo)}function sg(t,e,n,r,i){return Bi(),Vd(i),e.flags|=256,lt(t,e,n,r),e.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function B_(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(ve,i&1),t===null)return Eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ch(n),e.memoizedState=xh,t):Yd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return z1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ar(l,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xh,r}return s=t.child,t=s.sibling,r=ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yd(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,r){return r!==null&&Vd(r),zi(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kc(Error(j(422))),Da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lu({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=Ch(o),e.memoizedState=xh,s);if(!(e.mode&1))return Da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=kc(s,r,void 0),Da(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xn(t,i),Bt(r,t,i,-1))}return nf(),r=kc(Error(j(421))),Da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=rr(i.nextSibling),St=e,me=!0,Ut=null,t!==null&&(Ct[Pt++]=_n,Ct[Pt++]=wn,Ct[Pt++]=Wr,_n=t.id,wn=t.overflow,Wr=e),e=Yd(e,r.children),e.flags|=4096,e)}function og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Th(t.return,e,n)}function Rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function z_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,n,e);else if(t.tag===19)og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rc(e,!0,n,null,s);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $1(t,e,n){switch(e.tag){case 3:F_(e),Bi();break;case 5:p_(e);break;case 1:gt(e.type)&&El(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Sl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?B_(t,e,n):(he(ve,ve.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);he(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return z_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,j_(t,e,n)}return Cn(t,e,n)}var $_,Ph,W_,H_;$_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ph=function(){};W_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Or(en.current);var s=null;switch(n){case"input":i=Jc(t,i),r=Jc(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=th(t,i),r=th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}rh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};H_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function W1(t,e,n){var r=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return gt(e.type)&&wl(),Je(e),null;case 3:return r=e.stateNode,$i(),pe(mt),pe(rt),Wd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(jh(Ut),Ut=null))),Ph(t,e),Je(e),null;case 5:$d(e);var i=Or(go.current);if(n=e.type,t!==null&&e.stateNode!=null)W_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Je(e),null}if(t=Or(en.current),Na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[po]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Vs.length;i++)fe(Vs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":mm(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":ym(r,s),fe("invalid",r)}rh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,l,t),i=["children",""+l]):ro.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ta(r),gm(r,s,!0);break;case"textarea":Ta(r),vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_v(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[po]=r,$_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ih(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vs.length;i++)fe(Vs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":mm(t,r),i=Jc(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",t);break;case"textarea":ym(t,r),i=th(t,r),fe("invalid",t);break;default:i=r}rh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Tv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&io(t,u):typeof u=="number"&&io(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&wd(t,s,u,o))}switch(n){case"input":Ta(t),gm(t,r,!1);break;case"textarea":Ta(t),vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)H_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Or(go.current),Or(en.current),Na(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Je(e),null;case 13:if(pe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&Et!==null&&e.mode&1&&!(e.flags&128))u_(),Bi(),e.flags|=98560,s=!1;else if(s=Na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Yt]=e}else Bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Ut!==null&&(jh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Le===0&&(Le=3):nf())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return $i(),Ph(t,e),t===null&&ho(e.stateNode.containerInfo),Je(e),null;case 10:return Ud(e.type._context),Je(e),null;case 17:return gt(e.type)&&wl(),Je(e),null;case 19:if(pe(ve),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Hi&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Je(e),null}else 2*Ce()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ve.current,he(ve,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return tf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function H1(t,e){switch(Ld(e),e.tag){case 1:return gt(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),pe(mt),pe(rt),Wd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(pe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ve),null;case 4:return $i(),null;case 10:return Ud(e.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var Oa=!1,tt=!1,q1=typeof WeakSet=="function"?WeakSet:Set,$=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Nh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var ag=!1;function K1(t,e){if(ph=gl,t=Yv(),Dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,y=null;t:for(;;){for(var T;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)y=m,m=T;for(;;){if(m===t)break t;if(y===n&&++c===i&&(l=o),y===s&&++f===r&&(u=o),(T=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(mh={focusedElem:t,selectionRange:n},gl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,E=x.memoizedState,v=e.stateNode,w=v.getSnapshotBeforeUpdate(e.elementType===e.type?P:Mt(e.type,P),E);v.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Ie(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=ag,ag=!1,x}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nh(e,n,s)}i=i.next}while(i!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q_(t){var e=t.alternate;e!==null&&(t.alternate=null,q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[po],delete e[vh],delete e[C1],delete e[P1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function K_(t){return t.tag===5||t.tag===3||t.tag===4}function lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var Be=null,jt=!1;function Un(t,e,n){for(n=n.child;n!==null;)G_(t,e,n),n=n.sibling}function G_(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:tt||ki(n,e);case 6:var r=Be,i=jt;Be=null,Un(t,e,n),Be=r,jt=i,Be!==null&&(jt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(jt?(t=Be,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),lo(t)):wc(Be,n.stateNode));break;case 4:r=Be,i=jt,Be=n.stateNode.containerInfo,jt=!0,Un(t,e,n),Be=r,jt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nh(n,e,o),i=i.next}while(i!==r)}Un(t,e,n);break;case 1:if(!tt&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Un(t,e,n),tt=r):Un(t,e,n);break;default:Un(t,e,n)}}function ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new q1),e.forEach(function(r){var i=nS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,jt=!1;break e;case 3:Be=l.stateNode.containerInfo,jt=!0;break e;case 4:Be=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if(Be===null)throw Error(j(160));G_(s,o,i),Be=null,jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Kt(t),r&4){try{Gs(3,t,t.return),ou(3,t)}catch(P){Ie(t,t.return,P)}try{Gs(5,t,t.return)}catch(P){Ie(t,t.return,P)}}break;case 1:Vt(e,t),Kt(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Vt(e,t),Kt(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var i=t.stateNode;try{io(i,"")}catch(P){Ie(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&yv(i,s),ih(l,o);var c=ih(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Tv(i,m):f==="dangerouslySetInnerHTML"?wv(i,m):f==="children"?io(i,m):wd(i,f,m,c)}switch(l){case"input":Zc(i,s);break;case"textarea":vv(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Ci(i,!!s.multiple,T,!1):y!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[po]=s}catch(P){Ie(t,t.return,P)}}break;case 6:if(Vt(e,t),Kt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ie(t,t.return,P)}}break;case 3:if(Vt(e,t),Kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(P){Ie(t,t.return,P)}break;case 4:Vt(e,t),Kt(t);break;case 13:Vt(e,t),Kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zd=Ce())),r&4&&ug(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||f,Vt(e,t),tt=c):Vt(e,t),Kt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(y=$,T=y.child,y.tag){case 0:case 11:case 14:case 15:Gs(4,y,y.return);break;case 1:ki(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Ie(r,n,P)}}break;case 5:ki(y,y.return);break;case 22:if(y.memoizedState!==null){hg(m);continue}}T!==null?(T.return=y,$=T):hg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ev("display",o))}catch(P){Ie(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ie(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Vt(e,t),Kt(t),r&4&&ug(t);break;case 21:break;default:Vt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(K_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(io(i,""),r.flags&=-33);var s=lg(t);Oh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lg(t);Dh(t,l,o);break;default:throw Error(j(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G1(t,e,n){$=t,Y_(t)}function Y_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Oa;var c=tt;if(Oa=o,(tt=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?dg(i):u!==null?(u.return=o,$=u):dg(i);for(;s!==null;)$=s,Y_(s),s=s.sibling;$=i,Oa=l,tt=c}cg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):cg(t)}}function cg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&lo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}tt||e.flags&512&&bh(e)}catch(y){Ie(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function hg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function dg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{bh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{bh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var Q1=Math.ceil,Pl=On.ReactCurrentDispatcher,Xd=On.ReactCurrentOwner,bt=On.ReactCurrentBatchConfig,ie=0,Ue=null,Ne=null,We=0,wt=0,Ri=wr(0),Le=0,wo=null,qr=0,au=0,Jd=0,Qs=null,dt=null,Zd=0,Hi=1/0,yn=null,Nl=!1,Lh=null,sr=null,La=!1,Xn=null,bl=0,Ys=0,Vh=null,el=-1,tl=0;function ut(){return ie&6?Ce():el!==-1?el:el=Ce()}function or(t){return t.mode&1?ie&2&&We!==0?We&-We:b1.transition!==null?(tl===0&&(tl=Ov()),tl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Bv(t.type)),t):1}function Bt(t,e,n,r){if(50<Ys)throw Ys=0,Vh=null,Error(j(185));Vo(t,n,r),(!(ie&2)||t!==Ue)&&(t===Ue&&(!(ie&2)&&(au|=n),Le===4&&Wn(t,We)),yt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Hi=Ce()+500,ru&&Er()))}function yt(t,e){var n=t.callbackNode;bI(t,e);var r=ml(t,t===Ue?We:0);if(r===0)n!==null&&Em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Em(n),e===1)t.tag===0?N1(fg.bind(null,t)):o_(fg.bind(null,t)),R1(function(){!(ie&6)&&Er()}),n=null;else{switch(Lv(r)){case 1:n=Ad;break;case 4:n=bv;break;case 16:n=pl;break;case 536870912:n=Dv;break;default:n=pl}n=i0(n,X_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X_(t,e){if(el=-1,tl=0,ie&6)throw Error(j(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=ml(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dl(t,r);else{e=r;var i=ie;ie|=2;var s=Z_();(Ue!==t||We!==e)&&(yn=null,Hi=Ce()+500,jr(t,e));do try{J1();break}catch(l){J_(t,l)}while(!0);jd(),Pl.current=s,ie=i,Ne!==null?e=0:(Ue=null,We=0,e=Le)}if(e!==0){if(e===2&&(i=uh(t),i!==0&&(r=i,e=Mh(t,i))),e===1)throw n=wo,jr(t,0),Wn(t,r),yt(t,Ce()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Y1(i)&&(e=Dl(t,r),e===2&&(s=uh(t),s!==0&&(r=s,e=Mh(t,s))),e===1))throw n=wo,jr(t,0),Wn(t,r),yt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Pr(t,dt,yn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=Zd+500-Ce(),10<e)){if(ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yh(Pr.bind(null,t,dt,yn),e);break}Pr(t,dt,yn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){t.timeoutHandle=yh(Pr.bind(null,t,dt,yn),r);break}Pr(t,dt,yn);break;case 5:Pr(t,dt,yn);break;default:throw Error(j(329))}}}return yt(t,Ce()),t.callbackNode===n?X_.bind(null,t):null}function Mh(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=dt,dt=n,e!==null&&jh(e)),t}function jh(t){dt===null?dt=t:dt.push.apply(dt,t)}function Y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~Jd,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function fg(t){if(ie&6)throw Error(j(327));Oi();var e=ml(t,0);if(!(e&1))return yt(t,Ce()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var r=uh(t);r!==0&&(e=r,n=Mh(t,r))}if(n===1)throw n=wo,jr(t,0),Wn(t,e),yt(t,Ce()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,dt,yn),yt(t,Ce()),null}function ef(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Hi=Ce()+500,ru&&Er())}}function Kr(t){Xn!==null&&Xn.tag===0&&!(ie&6)&&Oi();var e=ie;ie|=1;var n=bt.transition,r=ae;try{if(bt.transition=null,ae=1,t)return t()}finally{ae=r,bt.transition=n,ie=e,!(ie&6)&&Er()}}function tf(){wt=Ri.current,pe(Ri)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,k1(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:$i(),pe(mt),pe(rt),Wd();break;case 5:$d(r);break;case 4:$i();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:Ud(r.type._context);break;case 22:case 23:tf()}n=n.return}if(Ue=t,Ne=t=ar(t.current,null),We=wt=e,Le=0,wo=null,Jd=au=qr=0,dt=Qs=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function J_(t,e){do{var n=Ne;try{if(jd(),Xa.current=Cl,xl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Hr=0,je=De=_e=null,Ks=!1,yo=0,Xd.current=null,n===null||n.return===null){Le=1,wo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=eg(o);if(T!==null){T.flags&=-257,tg(T,o,l,s,e),T.mode&1&&Zm(s,c,e),e=T,u=c;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){Zm(s,c,e),nf();break e}u=Error(j(426))}}else if(me&&l.mode&1){var E=eg(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),tg(E,o,l,s,e),Vd(Wi(u,l));break e}}s=u=Wi(u,l),Le!==4&&(Le=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=L_(s,u,e);Km(s,v);break e;case 1:l=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(sr===null||!sr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=V_(s,l,e);Km(s,D);break e}}s=s.return}while(s!==null)}t0(n)}catch(U){e=U,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function Z_(){var t=Pl.current;return Pl.current=Cl,t===null?Cl:t}function nf(){(Le===0||Le===3||Le===2)&&(Le=4),Ue===null||!(qr&268435455)&&!(au&268435455)||Wn(Ue,We)}function Dl(t,e){var n=ie;ie|=2;var r=Z_();(Ue!==t||We!==e)&&(yn=null,jr(t,e));do try{X1();break}catch(i){J_(t,i)}while(!0);if(jd(),ie=n,Pl.current=r,Ne!==null)throw Error(j(261));return Ue=null,We=0,Le}function X1(){for(;Ne!==null;)e0(Ne)}function J1(){for(;Ne!==null&&!II();)e0(Ne)}function e0(t){var e=r0(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?t0(t):Ne=e,Xd.current=null}function t0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H1(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ne=null;return}}else if(n=W1(n,e,wt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Le===0&&(Le=5)}function Pr(t,e,n){var r=ae,i=bt.transition;try{bt.transition=null,ae=1,Z1(t,e,n,r)}finally{bt.transition=i,ae=r}return null}function Z1(t,e,n,r){do Oi();while(Xn!==null);if(ie&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DI(t,s),t===Ue&&(Ne=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,i0(pl,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,Xd.current=null,K1(t,n),Q_(n,t),_1(mh),gl=!!ph,mh=ph=null,t.current=n,G1(n),SI(),ie=l,ae=o,bt.transition=s}else t.current=n;if(La&&(La=!1,Xn=t,bl=i),s=t.pendingLanes,s===0&&(sr=null),RI(n.stateNode),yt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,t=Lh,Lh=null,t;return bl&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===Vh?Ys++:(Ys=0,Vh=t):Ys=0,Er(),null}function Oi(){if(Xn!==null){var t=Lv(bl),e=bt.transition,n=ae;try{if(bt.transition=null,ae=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,bl=0,ie&6)throw Error(j(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Gs(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var y=f.sibling,T=f.return;if(q_(f),f===c){$=null;break}if(y!==null){y.return=T,$=y;break}$=T}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var E=P.sibling;P.sibling=null,P=E}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var w=t.current;for($=w;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=w;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ou(9,l)}}catch(U){Ie(l,l.return,U)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(ie=i,Er(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Jl,t)}catch{}r=!0}return r}finally{ae=n,bt.transition=e}}return!1}function pg(t,e,n){e=Wi(n,e),e=L_(t,e,1),t=ir(t,e,1),e=ut(),t!==null&&(Vo(t,1,e),yt(t,e))}function Ie(t,e,n){if(t.tag===3)pg(t,t,n);else for(;e!==null;){if(e.tag===3){pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=Wi(n,t),t=V_(e,t,1),e=ir(e,t,1),t=ut(),e!==null&&(Vo(e,1,t),yt(e,t));break}}e=e.return}}function eS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(Le===4||Le===3&&(We&130023424)===We&&500>Ce()-Zd?jr(t,0):Jd|=n),yt(t,e)}function n0(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=ut();t=xn(t,e),t!==null&&(Vo(t,e,n),yt(t,n))}function tS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n0(t,n)}function nS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),n0(t,n)}var r0;r0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,$1(t,e,n);pt=!!(t.flags&131072)}else pt=!1,me&&e.flags&1048576&&a_(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var i=Fi(e,rt.current);Di(e,n),i=qd(null,e,r,t,i,n);var s=Kd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,El(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bd(e),i.updater=su,e.stateNode=i,i._reactInternals=e,Sh(e,r,t,n),e=Rh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Od(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iS(r),t=Mt(r,t),i){case 0:e=kh(null,e,r,t,n);break e;case 1:e=ig(null,e,r,t,n);break e;case 11:e=ng(null,e,r,t,n);break e;case 14:e=rg(null,e,r,Mt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ig(t,e,r,i,n);case 3:e:{if(F_(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,f_(t,e),kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(j(423)),e),e=sg(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(j(424)),e),e=sg(t,e,r,n,i);break e}else for(Et=rr(e.stateNode.containerInfo.firstChild),St=e,me=!0,Ut=null,n=h_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){e=Cn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return p_(e),t===null&&Eh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gh(r,i)?o=null:s!==null&&gh(r,s)&&(e.flags|=32),U_(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&Eh(e),null;case 13:return B_(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ng(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Sl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!mt.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Th(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Th(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=Dt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),rg(t,e,r,i,n);case 15:return M_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Za(t,e),e.tag=1,gt(r)?(t=!0,El(e)):t=!1,Di(e,n),O_(e,r,i),Sh(e,r,i,n),Rh(null,e,r,!0,t,n);case 19:return z_(t,e,n);case 22:return j_(t,e,n)}throw Error(j(156,e.tag))};function i0(t,e){return Nv(t,e)}function rS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new rS(t,e,n,r)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iS(t){if(typeof t=="function")return rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===Id)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return Ur(n.children,i,s,e);case Ed:o=8,i|=8;break;case Gc:return t=Nt(12,n,e,i|2),t.elementType=Gc,t.lanes=s,t;case Qc:return t=Nt(13,n,e,i),t.elementType=Qc,t.lanes=s,t;case Yc:return t=Nt(19,n,e,i),t.elementType=Yc,t.lanes=s,t;case pv:return lu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dv:o=10;break e;case fv:o=9;break e;case Td:o=11;break e;case Id:o=14;break e;case Bn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=pv,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sf(t,e,n,r,i,s,o,l,u){return t=new sS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),t}function oS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s0(t){if(!t)return fr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(gt(n))return s_(t,n,e)}return e}function o0(t,e,n,r,i,s,o,l,u){return t=sf(n,r,!0,t,i,s,o,l,u),t.context=s0(null),n=t.current,r=ut(),i=or(n),s=Sn(r,i),s.callback=e??null,ir(n,s,i),t.current.lanes=i,Vo(t,i,r),yt(t,r),t}function uu(t,e,n,r){var i=e.current,s=ut(),o=or(i);return n=s0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(i,e,o),t!==null&&(Bt(t,i,o,s),Ya(t,i,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function of(t,e){mg(t,e),(t=t.alternate)&&mg(t,e)}function aS(){return null}var a0=typeof reportError=="function"?reportError:function(t){console.error(t)};function af(t){this._internalRoot=t}cu.prototype.render=af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));uu(t,e,null,null)};cu.prototype.unmount=af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){uu(null,t,null,null)}),e[Rn]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=jv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&Fv(t)}};function lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gg(){}function lS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ol(o);s.call(c)}}var o=o0(e,r,t,0,null,!1,!1,"",gg);return t._reactRootContainer=o,t[Rn]=o.current,ho(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ol(u);l.call(c)}}var u=sf(t,0,!1,null,null,!1,!1,"",gg);return t._reactRootContainer=u,t[Rn]=u.current,ho(t.nodeType===8?t.parentNode:t),Kr(function(){uu(e,u,n,r)}),u}function du(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ol(o);l.call(u)}}uu(e,o,t,i)}else o=lS(n,e,t,i,r);return Ol(o)}Vv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ls(e.pendingLanes);n!==0&&(kd(e,n|1),yt(e,Ce()),!(ie&6)&&(Hi=Ce()+500,Er()))}break;case 13:Kr(function(){var r=xn(t,1);if(r!==null){var i=ut();Bt(r,t,1,i)}}),of(t,1)}};Rd=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var n=ut();Bt(e,t,134217728,n)}of(t,134217728)}};Mv=function(t){if(t.tag===13){var e=or(t),n=xn(t,e);if(n!==null){var r=ut();Bt(n,t,e,r)}of(t,e)}};jv=function(){return ae};Uv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};oh=function(t,e,n){switch(e){case"input":if(Zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nu(r);if(!i)throw Error(j(90));gv(r),Zc(r,i)}}}break;case"textarea":vv(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};Av=ef;kv=Kr;var uS={usingClientEntryPoint:!1,Events:[jo,Ei,nu,Iv,Sv,ef]},Ps={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cS={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||aS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{Jl=Va.inject(cS),Zt=Va}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lf(e))throw Error(j(200));return oS(t,e,null,n)};kt.createRoot=function(t,e){if(!lf(t))throw Error(j(299));var n=!1,r="",i=a0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sf(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,ho(t.nodeType===8?t.parentNode:t),new af(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Cv(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return Kr(t)};kt.hydrate=function(t,e,n){if(!hu(e))throw Error(j(200));return du(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!lf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=a0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o0(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cu(e)};kt.render=function(t,e,n){if(!hu(e))throw Error(j(200));return du(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!hu(t))throw Error(j(40));return t._reactRootContainer?(Kr(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};kt.unstable_batchedUpdates=ef;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return du(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function l0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l0)}catch(t){console.error(t)}}l0(),lv.exports=kt;var hS=lv.exports,yg=hS;qc.createRoot=yg.createRoot,qc.hydrateRoot=yg.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eo.apply(null,arguments)}var Jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jn||(Jn={}));const vg="popstate";function dS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Uh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:u0(i)}return pS(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function uf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fS(){return Math.random().toString(36).substr(2,8)}function _g(t,e){return{usr:t.state,key:t.key,idx:e}}function Uh(t,e,n,r){return n===void 0&&(n=null),Eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?rs(e):e,{state:n,key:e&&e.key||r||fS()})}function u0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function rs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Jn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Eo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Jn.Pop;let E=f(),v=E==null?null:E-c;c=E,u&&u({action:l,location:P.location,delta:v})}function y(E,v){l=Jn.Push;let w=Uh(P.location,E,v);c=f()+1;let A=_g(w,c),D=P.createHref(w);try{o.pushState(A,"",D)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(D)}s&&u&&u({action:l,location:P.location,delta:1})}function T(E,v){l=Jn.Replace;let w=Uh(P.location,E,v);c=f();let A=_g(w,c),D=P.createHref(w);o.replaceState(A,"",D),s&&u&&u({action:l,location:P.location,delta:0})}function x(E){let v=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof E=="string"?E:u0(E);return w=w.replace(/ $/,"%20"),be(v,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,v)}let P={get action(){return l},get location(){return t(i,o)},listen(E){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(vg,m),u=E,()=>{i.removeEventListener(vg,m),u=null}},createHref(E){return e(i,E)},createURL:x,encodeLocation(E){let v=x(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:y,replace:T,go(E){return o.go(E)}};return P}var wg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wg||(wg={}));function mS(t,e,n){return n===void 0&&(n="/"),gS(t,e,n)}function gS(t,e,n,r){let i=typeof e=="string"?rs(e):e,s=d0(i.pathname||"/",n);if(s==null)return null;let o=c0(t);yS(o);let l=null,u=CS(s);for(let c=0;l==null&&c<o.length;++c)l=kS(o[c],u);return l}function c0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Fr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),c0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:SS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of h0(s.path))i(s,o,u)}),e}function h0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=h0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function yS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vS=/^:[\w-]+$/,_S=3,wS=2,ES=1,TS=10,IS=-2,Eg=t=>t==="*";function SS(t,e){let n=t.split("/"),r=n.length;return n.some(Eg)&&(r+=IS),e&&(r+=wS),n.filter(i=>!Eg(i)).reduce((i,s)=>i+(vS.test(s)?_S:s===""?ES:TS),r)}function AS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=RS({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),y=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Fr([s,m.pathname]),pathnameBase:OS(Fr([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=Fr([s,m.pathnameBase]))}return o}function RS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:y,isOptional:T}=f;if(y==="*"){let P=l[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const x=l[m];return T&&!x?c[y]=void 0:c[y]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function xS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),uf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function CS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return uf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function d0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const PS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NS=t=>PS.test(t);function bS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?rs(t):t,s;if(n)if(NS(n))s=n;else{if(n.includes("//")){let o=n;n=m0(n),uf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Tg(n.substring(1),"/"):s=Tg(n,e)}else s=e;return{pathname:s,search:LS(r),hash:VS(i)}}function Tg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function f0(t,e){let n=DS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function p0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=rs(t):(i=Eo({},t),be(!i.pathname||!i.pathname.includes("?"),Pc("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Pc("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Pc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=bS(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const m0=t=>t.replace(/\/\/+/g,"/"),Fr=t=>m0(t.join("/")),OS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function MS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const g0=["post","put","patch","delete"];new Set(g0);const jS=["get",...g0];new Set(jS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},To.apply(null,arguments)}const cf=L.createContext(null),US=L.createContext(null),Fo=L.createContext(null),fu=L.createContext(null),ri=L.createContext({outlet:null,matches:[],isDataRoute:!1}),y0=L.createContext(null);function Bo(){return L.useContext(fu)!=null}function pu(){return Bo()||be(!1),L.useContext(fu).location}function v0(t){L.useContext(Fo).static||L.useLayoutEffect(t)}function Ht(){let{isDataRoute:t}=L.useContext(ri);return t?JS():FS()}function FS(){Bo()||be(!1);let t=L.useContext(cf),{basename:e,future:n,navigator:r}=L.useContext(Fo),{matches:i}=L.useContext(ri),{pathname:s}=pu(),o=JSON.stringify(f0(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return v0(()=>{l.current=!0}),L.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=p0(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Fr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function BS(t,e){return zS(t,e)}function zS(t,e,n,r){Bo()||be(!1);let{navigator:i}=L.useContext(Fo),{matches:s}=L.useContext(ri),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=pu(),f;if(e){var m;let E=typeof e=="string"?rs(e):e;u==="/"||(m=E.pathname)!=null&&m.startsWith(u)||be(!1),f=E}else f=c;let y=f.pathname||"/",T=y;if(u!=="/"){let E=u.replace(/^\//,"").split("/");T="/"+y.replace(/^\//,"").split("/").slice(E.length).join("/")}let x=mS(t,{pathname:T}),P=KS(x&&x.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:Fr([u,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?u:Fr([u,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&P?L.createElement(fu.Provider,{value:{location:To({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Jn.Pop}},P):P}function $S(){let t=XS(),e=MS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const WS=L.createElement($S,null);class HS extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(ri.Provider,{value:this.props.routeContext},L.createElement(y0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qS(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(cf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(ri.Provider,{value:e},r)}function KS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||be(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:y,errors:T}=n,x=m.route.loader&&y[m.route.id]===void 0&&(!T||T[m.route.id]===void 0);if(m.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,y)=>{let T,x=!1,P=null,E=null;n&&(T=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||WS,u&&(c<0&&y===0?(ZS("route-fallback"),x=!0,E=null):c===y&&(x=!0,E=m.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,y+1)),w=()=>{let A;return T?A=P:x?A=E:m.route.Component?A=L.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=f,L.createElement(qS,{match:m,routeContext:{outlet:f,matches:v,isDataRoute:n!=null},children:A})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?L.createElement(HS,{location:n.location,revalidation:n.revalidation,component:P,error:T,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):w()},null)}var _0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_0||{}),w0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(w0||{});function GS(t){let e=L.useContext(cf);return e||be(!1),e}function QS(t){let e=L.useContext(US);return e||be(!1),e}function YS(t){let e=L.useContext(ri);return e||be(!1),e}function E0(t){let e=YS(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function XS(){var t;let e=L.useContext(y0),n=QS(),r=E0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function JS(){let{router:t}=GS(_0.UseNavigateStable),e=E0(w0.UseNavigateStable),n=L.useRef(!1);return v0(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,To({fromRouteId:e},s)))},[t,e])}const Ig={};function ZS(t,e,n){Ig[t]||(Ig[t]=!0)}function eA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Io(t){let{to:e,replace:n,state:r,relative:i}=t;Bo()||be(!1);let{future:s,static:o}=L.useContext(Fo),{matches:l}=L.useContext(ri),{pathname:u}=pu(),c=Ht(),f=p0(e,f0(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return L.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function Gt(t){be(!1)}function tA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jn.Pop,navigator:s,static:o=!1,future:l}=t;Bo()&&be(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:To({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=rs(r));let{pathname:f="/",search:m="",hash:y="",state:T=null,key:x="default"}=r,P=L.useMemo(()=>{let E=d0(f,u);return E==null?null:{location:{pathname:E,search:m,hash:y,state:T,key:x},navigationType:i}},[u,f,m,y,T,x,i]);return P==null?null:L.createElement(Fo.Provider,{value:c},L.createElement(fu.Provider,{children:n,value:P}))}function nA(t){let{children:e,location:n}=t;return BS(Fh(e),n)}new Promise(()=>{});function Fh(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,Fh(r.props.children,s));return}r.type!==Gt&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const rA="6";try{window.__reactRouterVersion=rA}catch{}const iA="startTransition",Sg=eI[iA];function sA(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=dS({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=L.useCallback(m=>{c&&Sg?Sg(()=>u(m)):u(m)},[u,c]);return L.useLayoutEffect(()=>o.listen(f),[o,f]),L.useEffect(()=>eA(r),[r]),L.createElement(tA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Ag;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ag||(Ag={}));var kg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kg||(kg={}));var Rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},I0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(y=64)),r.push(n[f],n[m],n[y],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new aA;const y=s<<2|l>>4;if(r.push(y),c!==64){const T=l<<4&240|c>>2;if(r.push(T),m!==64){const x=c<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lA=function(t){const e=T0(t);return I0.encodeByteArray(e,!0)},Ll=function(t){return lA(t).replace(/\./g,"")},S0=function(t){try{return I0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=()=>uA().__FIREBASE_DEFAULTS__,hA=()=>{if(typeof process>"u"||typeof Rg>"u")return;const t=Rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S0(t[1]);return e&&JSON.parse(e)},mu=()=>{try{return cA()||hA()||dA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A0=t=>{var e,n;return(n=(e=mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k0=t=>{const e=A0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},R0=()=>{var t;return(t=mu())===null||t===void 0?void 0:t.config},x0=t=>{var e;return(e=mu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ll(JSON.stringify(n)),Ll(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function mA(){var t;const e=(t=mu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _A(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wA(){return!mA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function EA(){try{return typeof indexedDB=="object"}catch{return!1}}function TA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IA,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new un(i,l,r)}}function SA(t,e){return t.replace(AA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AA=/\{\$([^}]+)}/g;function kA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xg(s)&&xg(o)){if(!Vl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function RA(t,e){const n=new xA(t,e);return n.subscribe.bind(n)}class xA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nc),i.error===void 0&&(i.error=Nc),i.complete===void 0&&(i.complete=Nc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bA(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NA(t){return t===Nr?void 0:t}function bA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const OA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},LA=te.INFO,VA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},MA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hf{constructor(e){this.name=e,this._logLevel=LA,this._logHandler=MA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const jA=(t,e)=>e.some(n=>t instanceof n);let Cg,Pg;function UA(){return Cg||(Cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FA(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P0=new WeakMap,Bh=new WeakMap,N0=new WeakMap,bc=new WeakMap,df=new WeakMap;function BA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&P0.set(n,t)}).catch(()=>{}),df.set(e,t),e}function zA(t){if(Bh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bh.set(t,e)}let zh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $A(t){zh=t(zh)}function WA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dc(this),e,...n);return N0.set(r,e.sort?e.sort():[e]),lr(r)}:FA().includes(t)?function(...e){return t.apply(Dc(this),e),lr(P0.get(this))}:function(...e){return lr(t.apply(Dc(this),e))}}function HA(t){return typeof t=="function"?WA(t):(t instanceof IDBTransaction&&zA(t),jA(t,UA())?new Proxy(t,zh):t)}function lr(t){if(t instanceof IDBRequest)return BA(t);if(bc.has(t))return bc.get(t);const e=HA(t);return e!==t&&(bc.set(t,e),df.set(e,t)),e}const Dc=t=>df.get(t);function qA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const KA=["get","getKey","getAll","getAllKeys","count"],GA=["put","add","delete","clear"],Oc=new Map;function Ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Oc.set(e,s),s}$A(t=>({...t,get:(e,n,r)=>Ng(e,n)||t.get(e,n,r),has:(e,n)=>!!Ng(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",bg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new hf("@firebase/app"),XA="@firebase/app-compat",JA="@firebase/analytics-compat",ZA="@firebase/analytics",ek="@firebase/app-check-compat",tk="@firebase/app-check",nk="@firebase/auth",rk="@firebase/auth-compat",ik="@firebase/database",sk="@firebase/data-connect",ok="@firebase/database-compat",ak="@firebase/functions",lk="@firebase/functions-compat",uk="@firebase/installations",ck="@firebase/installations-compat",hk="@firebase/messaging",dk="@firebase/messaging-compat",fk="@firebase/performance",pk="@firebase/performance-compat",mk="@firebase/remote-config",gk="@firebase/remote-config-compat",yk="@firebase/storage",vk="@firebase/storage-compat",_k="@firebase/firestore",wk="@firebase/vertexai-preview",Ek="@firebase/firestore-compat",Tk="firebase",Ik="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="[DEFAULT]",Sk={[$h]:"fire-core",[XA]:"fire-core-compat",[ZA]:"fire-analytics",[JA]:"fire-analytics-compat",[tk]:"fire-app-check",[ek]:"fire-app-check-compat",[nk]:"fire-auth",[rk]:"fire-auth-compat",[ik]:"fire-rtdb",[sk]:"fire-data-connect",[ok]:"fire-rtdb-compat",[ak]:"fire-fn",[lk]:"fire-fn-compat",[uk]:"fire-iid",[ck]:"fire-iid-compat",[hk]:"fire-fcm",[dk]:"fire-fcm-compat",[fk]:"fire-perf",[pk]:"fire-perf-compat",[mk]:"fire-rc",[gk]:"fire-rc-compat",[yk]:"fire-gcs",[vk]:"fire-gcs-compat",[_k]:"fire-fst",[Ek]:"fire-fst-compat",[wk]:"fire-vertex","fire-js":"fire-js",[Tk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Map,Ak=new Map,Hh=new Map;function Dg(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(Hh.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Hh.set(e,t);for(const n of Ml.values())Dg(n,t);for(const n of Ak.values())Dg(n,t);return!0}function gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new zo("app","Firebase",kk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=Ik;function b0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=R0()),!n)throw ur.create("no-options");const s=Ml.get(i);if(s){if(Vl(n,s.options)&&Vl(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new DA(i);for(const u of Hh.values())o.addComponent(u);const l=new Rk(n,r,o);return Ml.set(i,l),l}function ff(t=Wh){const e=Ml.get(t);if(!e&&t===Wh&&R0())return b0();if(!e)throw ur.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let i=(r=Sk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(l.join(" "));return}Gr(new pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="firebase-heartbeat-database",Ck=1,So="firebase-heartbeat-store";let Lc=null;function D0(){return Lc||(Lc=qA(xk,Ck,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(So)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function Pk(t){try{const n=(await D0()).transaction(So),r=await n.objectStore(So).get(O0(t));return await n.done,r}catch(e){if(e instanceof un)Pn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function Og(t,e){try{const r=(await D0()).transaction(So,"readwrite");await r.objectStore(So).put(e,O0(t)),await r.done}catch(n){if(n instanceof un)Pn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function O0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=1024,bk=30*24*60*60*1e3;class Dk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=bk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lg(),{heartbeatsToSend:r,unsentEntries:i}=Ok(this._heartbeatsCache.heartbeats),s=Ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Pn.warn(n),""}}}function Lg(){return new Date().toISOString().substring(0,10)}function Ok(t,e=Nk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EA()?TA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vg(t){return Ll(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){Gr(new pr("platform-logger",e=>new QA(e),"PRIVATE")),Gr(new pr("heartbeat",e=>new Dk(e),"PRIVATE")),tn($h,bg,t),tn($h,bg,"esm2017"),tn("fire-js","")}Vk("");function pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function L0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mk=L0,V0=new zo("auth","Firebase",L0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new hf("@firebase/auth");function jk(t,...e){jl.logLevel<=te.WARN&&jl.warn(`Auth (${ii}): ${t}`,...e)}function rl(t,...e){jl.logLevel<=te.ERROR&&jl.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw mf(t,...e)}function nn(t,...e){return mf(t,...e)}function M0(t,e,n){const r=Object.assign(Object.assign({},Mk()),{[e]:n});return new zo("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return M0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return V0.create(t,...e)}function K(t,e,...n){if(!t)throw mf(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function Nn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uk(){return Mg()==="http:"||Mg()==="https:"}function Mg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uk()||yA()||"connection"in navigator)?navigator.onLine:!0}function Bk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=pA()||vA()}get(){return Fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new Wo(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,i={}){return U0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=$o(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return gA()||(c.referrerPolicy="no-referrer"),j0.fetch()(F0(t,t.config.apiHost,n,l),c)})}async function U0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zk),e);try{const i=new Hk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ma(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw M0(t,f,c);Wt(t,f)}}catch(i){if(i instanceof un)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function Ho(t,e,n,r,i={}){const s=await Ln(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gf(t.config,i):`${t.config.apiScheme}://${i}`}function Wk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),$k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function jg(t){return t!==void 0&&t.enterprise!==void 0}class qk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Kk(t,e){return Ln(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function B0(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qk(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=yf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xs(Vc(i.auth_time)),issuedAtTime:Xs(Vc(i.iat)),expirationTime:Xs(Vc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function yf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=S0(n);return i?JSON.parse(i):(rl("Failed to decode base64 JWT payload"),null)}catch(i){return rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ug(t){const e=yf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&Yk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qi(t,B0(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?z0(s.providerUserInfo):[],l=Zk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Kh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function Jk(t){const e=Se(t);await Ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function z0(t){return t.map(e=>{var{providerId:n}=e,r=pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e){const n=await U0(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",j0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tR(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Ug(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Li;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qk(this,e)}reload(){return Jk(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await qi(this,Gk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:D,isAnonymous:U,providerData:F,stsTokenManager:S}=n;K(A&&S,e,"internal-error");const _=Li.fromJSON(this.name,S);K(typeof A=="string",e,"internal-error"),Fn(m,e.name),Fn(y,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),Fn(T,e.name),Fn(x,e.name),Fn(P,e.name),Fn(E,e.name),Fn(v,e.name),Fn(w,e.name);const I=new Tn({uid:A,auth:e,email:y,emailVerified:D,displayName:m,isAnonymous:U,photoURL:x,phoneNumber:T,tenantId:P,stsTokenManager:_,createdAt:v,lastLoginAt:w});return F&&Array.isArray(F)&&(I.providerData=F.map(k=>Object.assign({},k))),E&&(I._redirectEventId=E),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const s=new Tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ul(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?z0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Li;l.updateFromIdToken(r);const u=new Tn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Map;function In(t){Nn(t instanceof Function,"Expected a class definition");let e=Fg.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$0.type="NONE";const Bg=$0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=il(this.userKey,i.apiKey,s),this.fullPersistenceKey=il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(In(Bg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||In(Bg);const o=il(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const m=Tn._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Vi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q0(e))return"Blackberry";if(Y0(e))return"Webos";if(H0(e))return"Safari";if((e.includes("chrome/")||q0(e))&&!e.includes("edge/"))return"Chrome";if(G0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function W0(t=it()){return/firefox\//i.test(t)}function H0(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q0(t=it()){return/crios\//i.test(t)}function K0(t=it()){return/iemobile/i.test(t)}function G0(t=it()){return/android/i.test(t)}function Q0(t=it()){return/blackberry/i.test(t)}function Y0(t=it()){return/webos/i.test(t)}function vf(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nR(t=it()){var e;return vf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rR(){return _A()&&document.documentMode===10}function X0(t=it()){return vf(t)||G0(t)||Y0(t)||Q0(t)||/windows phone/i.test(t)||K0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t,e=[]){let n;switch(t){case"Browser":n=zg(it());break;case"Worker":n=`${zg(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=6;class aR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $g(this),this.idTokenSubscription=new $g(this),this.beforeStateQueue=new iR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await B0(this,{idToken:e}),r=await Tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(An(this));const n=e?Se(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sR(this),n=new aR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function si(t){return Se(t)}class $g{constructor(e){this.auth=e,this.observer=null,this.addObserver=RA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uR(t){yu=t}function Z0(t){return yu.loadJS(t)}function cR(){return yu.recaptchaEnterpriseScript}function hR(){return yu.gapiScript}function dR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fR="recaptcha-enterprise",pR="NO_RECAPTCHA";class mR{constructor(e){this.type=fR,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Kk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new qk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;jg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(pR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&jg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=cR();u.length!==0&&(u+=l),Z0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Wg(t,e,n,r=!1){const i=new mR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t,e){const n=gu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vl(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function yR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vR(t,e,n){const r=si(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ew(e),{host:o,port:l}=_R(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),wR()}function ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _R(t){const e=ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hg(o)}}}function Hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function ER(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function SR(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends _f{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gh(e,n,"signInWithPassword",TR);case"emailLink":return IR(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gh(e,r,"signUpPassword",ER);case"emailLink":return SR(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="http://localhost";class Qr extends _f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:AR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RR(t){const e=Ms(js(t)).link,n=e?Ms(js(e)).deep_link_id:null,r=Ms(js(t)).deep_link_id;return(r?Ms(js(r)).link:null)||r||n||e||t}class wf{constructor(e){var n,r,i,s,o,l;const u=Ms(js(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=kR((i=u.mode)!==null&&i!==void 0?i:null);K(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=RR(e);try{return new wf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,n){return Ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wf.parseLink(n);return K(r,"argument-error"),Ao._fromEmailAndCode(e,r.code,r.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends qo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends qo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends qo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e){return Ho(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tn._fromIdTokenResponse(e,r,i),o=qg(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qg(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends un{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fl(e,n,r,i)}}function nw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(t,s,e,r):s})}async function CR(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await qi(t,nw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=yf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(t,e,n=!1){if(Xt(t.app))return Promise.reject(An(t));const r="signIn",i=await nw(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function NR(t,e){return rw(si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bR(t,e,n){if(Xt(t.app))return Promise.reject(An(t));const r=si(t),o=await Gh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iw(t),u}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function DR(t,e,n){return Xt(t.app)?Promise.reject(An(t)):NR(Se(t),is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qi(r,OR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VR(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function MR(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function jR(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function UR(t){return Se(t).signOut()}const Bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=1e3,BR=10;class ow extends sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ow.type="LOCAL";const zR=ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw extends sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aw.type="SESSION";const lw=aw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await $R(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Ef("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function HR(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function qR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GR(){return uw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="firebaseLocalStorageDb",QR=1,zl="firebaseLocalStorage",hw="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _u(t,e){return t.transaction([zl],e?"readwrite":"readonly").objectStore(zl)}function YR(){const t=indexedDB.deleteDatabase(cw);return new Ko(t).toPromise()}function Qh(){const t=indexedDB.open(cw,QR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zl,{keyPath:hw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zl)?e(r):(r.close(),await YR(),e(await Qh()))})})}async function Kg(t,e,n){const r=_u(t,!0).put({[hw]:e,value:n});return new Ko(r).toPromise()}async function XR(t,e){const n=_u(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Gg(t,e){const n=_u(t,!0).delete(e);return new Ko(n).toPromise()}const JR=800,ZR=3;class dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(GR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qR(),!this.activeServiceWorker)return;this.sender=new WR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qh();return await Kg(e,Bl,"1"),await Gg(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_u(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dw.type="LOCAL";const ex=dw;new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t,e){return e?In(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends _f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nx(t){return rw(t.auth,new Tf(t),t.bypassAuthState)}function rx(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),PR(n,new Tf(t),t.bypassAuthState)}async function ix(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),CR(n,new Tf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nx;case"linkViaPopup":case"linkViaRedirect":return ix;case"reauthViaPopup":case"reauthViaRedirect":return rx;default:Wt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=new Wo(2e3,1e4);class xi extends fw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sx.get())};e()}}xi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox="pendingRedirect",sl=new Map;class ax extends fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await lx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lx(t,e){const n=hx(e),r=cx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ux(t,e){sl.set(t._key(),e)}function cx(t){return In(t._redirectPersistence)}function hx(t){return il(ox,t.config.apiKey,t.name)}async function dx(t,e,n=!1){if(Xt(t.app))return Promise.reject(An(t));const r=si(t),i=tx(r,e),o=await new ax(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=10*60*1e3;class px{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(e))}saveEventToCache(e){this.cachedEventUids.add(Qg(e)),this.lastProcessedEventTime=Date.now()}}function Qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gx(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vx=/^https?/;async function _x(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gx(t);for(const n of e)try{if(wx(n))return}catch{}Wt(t,"unauthorized-domain")}function wx(t){const e=qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vx.test(n))return!1;if(yx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=new Wo(3e4,6e4);function Yg(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tx(t){return new Promise((e,n)=>{var r,i,s;function o(){Yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yg(),n(nn(t,"network-request-failed"))},timeout:Ex.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const l=dR("iframefcb");return rn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},Z0(`${hR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ol=null,e})}let ol=null;function Ix(t){return ol=ol||Tx(t),ol}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=new Wo(5e3,15e3),Ax="__/auth/iframe",kx="emulator/auth/iframe",Rx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cx(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gf(e,kx):`https://${t.config.authDomain}/${Ax}`,r={apiKey:e.apiKey,appName:t.name,v:ii},i=xx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function Px(t){const e=await Ix(t),n=rn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Cx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=rn().setTimeout(()=>{s(o)},Sx.get());function u(){rn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bx=500,Dx=600,Ox="_blank",Lx="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vx(t,e,n,r=bx,i=Dx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Nx),{width:r.toString(),height:i.toString(),top:s,left:o}),c=it().toLowerCase();n&&(l=q0(c)?Ox:n),W0(c)&&(e=e||Lx,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[T,x])=>`${y}${T}=${x},`,"");if(nR(c)&&l!=="_self")return Mx(e||"",l),new Xg(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new Xg(m)}function Mx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="__/auth/handler",Ux="emulator/auth/handler",Fx=encodeURIComponent("fac");async function Jg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:i};if(e instanceof tw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof qo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Fx}=${encodeURIComponent(u)}`:"";return`${Bx(t)}?${$o(l).slice(1)}${c}`}function Bx({config:t}){return t.emulator?gf(t,Ux):`https://${t.authDomain}/${jx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="webStorageSupport";class zx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lw,this._completeRedirectFn=dx,this._overrideRedirectResult=ux}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jg(e,n,r,qh(),i);return Vx(e,o,Ef())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jg(e,n,r,qh(),i);return HR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Px(e),r=new px(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mc];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_x(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X0()||H0()||vf()}}const $x=zx;var Zg="@firebase/auth",ey="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qx(t){Gr(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J0(t)},c=new lR(r,i,s,u);return yR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new pr("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new Wx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Zg,ey,Hx(t)),tn(Zg,ey,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=5*60,Gx=x0("authIdTokenMaxAge")||Kx;let ty=null;const Qx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gx)return;const i=n==null?void 0:n.token;ty!==i&&(ty=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yx(t=ff()){const e=gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gR(t,{popupRedirectResolver:$x,persistence:[ex,zR,lw]}),r=x0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Qx(s.toString());MR(n,o,()=>o(n.currentUser)),VR(n,l=>o(l))}}const i=A0("auth");return i&&vR(n,`http://${i}`),n}function Xx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Xx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qx("Browser");var ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,mw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function I(){}I.prototype=_.prototype,S.D=_.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(k,C,b){for(var R=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)R[xt-2]=arguments[xt];return _.prototype[C].apply(k,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,I){I||(I=0);var k=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)k[C]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(C=0;16>C;++C)k[C]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=S.g[0],I=S.g[1],C=S.g[2];var b=S.g[3],R=_+(b^I&(C^b))+k[0]+3614090360&4294967295;_=I+(R<<7&4294967295|R>>>25),R=b+(C^_&(I^C))+k[1]+3905402710&4294967295,b=_+(R<<12&4294967295|R>>>20),R=C+(I^b&(_^I))+k[2]+606105819&4294967295,C=b+(R<<17&4294967295|R>>>15),R=I+(_^C&(b^_))+k[3]+3250441966&4294967295,I=C+(R<<22&4294967295|R>>>10),R=_+(b^I&(C^b))+k[4]+4118548399&4294967295,_=I+(R<<7&4294967295|R>>>25),R=b+(C^_&(I^C))+k[5]+1200080426&4294967295,b=_+(R<<12&4294967295|R>>>20),R=C+(I^b&(_^I))+k[6]+2821735955&4294967295,C=b+(R<<17&4294967295|R>>>15),R=I+(_^C&(b^_))+k[7]+4249261313&4294967295,I=C+(R<<22&4294967295|R>>>10),R=_+(b^I&(C^b))+k[8]+1770035416&4294967295,_=I+(R<<7&4294967295|R>>>25),R=b+(C^_&(I^C))+k[9]+2336552879&4294967295,b=_+(R<<12&4294967295|R>>>20),R=C+(I^b&(_^I))+k[10]+4294925233&4294967295,C=b+(R<<17&4294967295|R>>>15),R=I+(_^C&(b^_))+k[11]+2304563134&4294967295,I=C+(R<<22&4294967295|R>>>10),R=_+(b^I&(C^b))+k[12]+1804603682&4294967295,_=I+(R<<7&4294967295|R>>>25),R=b+(C^_&(I^C))+k[13]+4254626195&4294967295,b=_+(R<<12&4294967295|R>>>20),R=C+(I^b&(_^I))+k[14]+2792965006&4294967295,C=b+(R<<17&4294967295|R>>>15),R=I+(_^C&(b^_))+k[15]+1236535329&4294967295,I=C+(R<<22&4294967295|R>>>10),R=_+(C^b&(I^C))+k[1]+4129170786&4294967295,_=I+(R<<5&4294967295|R>>>27),R=b+(I^C&(_^I))+k[6]+3225465664&4294967295,b=_+(R<<9&4294967295|R>>>23),R=C+(_^I&(b^_))+k[11]+643717713&4294967295,C=b+(R<<14&4294967295|R>>>18),R=I+(b^_&(C^b))+k[0]+3921069994&4294967295,I=C+(R<<20&4294967295|R>>>12),R=_+(C^b&(I^C))+k[5]+3593408605&4294967295,_=I+(R<<5&4294967295|R>>>27),R=b+(I^C&(_^I))+k[10]+38016083&4294967295,b=_+(R<<9&4294967295|R>>>23),R=C+(_^I&(b^_))+k[15]+3634488961&4294967295,C=b+(R<<14&4294967295|R>>>18),R=I+(b^_&(C^b))+k[4]+3889429448&4294967295,I=C+(R<<20&4294967295|R>>>12),R=_+(C^b&(I^C))+k[9]+568446438&4294967295,_=I+(R<<5&4294967295|R>>>27),R=b+(I^C&(_^I))+k[14]+3275163606&4294967295,b=_+(R<<9&4294967295|R>>>23),R=C+(_^I&(b^_))+k[3]+4107603335&4294967295,C=b+(R<<14&4294967295|R>>>18),R=I+(b^_&(C^b))+k[8]+1163531501&4294967295,I=C+(R<<20&4294967295|R>>>12),R=_+(C^b&(I^C))+k[13]+2850285829&4294967295,_=I+(R<<5&4294967295|R>>>27),R=b+(I^C&(_^I))+k[2]+4243563512&4294967295,b=_+(R<<9&4294967295|R>>>23),R=C+(_^I&(b^_))+k[7]+1735328473&4294967295,C=b+(R<<14&4294967295|R>>>18),R=I+(b^_&(C^b))+k[12]+2368359562&4294967295,I=C+(R<<20&4294967295|R>>>12),R=_+(I^C^b)+k[5]+4294588738&4294967295,_=I+(R<<4&4294967295|R>>>28),R=b+(_^I^C)+k[8]+2272392833&4294967295,b=_+(R<<11&4294967295|R>>>21),R=C+(b^_^I)+k[11]+1839030562&4294967295,C=b+(R<<16&4294967295|R>>>16),R=I+(C^b^_)+k[14]+4259657740&4294967295,I=C+(R<<23&4294967295|R>>>9),R=_+(I^C^b)+k[1]+2763975236&4294967295,_=I+(R<<4&4294967295|R>>>28),R=b+(_^I^C)+k[4]+1272893353&4294967295,b=_+(R<<11&4294967295|R>>>21),R=C+(b^_^I)+k[7]+4139469664&4294967295,C=b+(R<<16&4294967295|R>>>16),R=I+(C^b^_)+k[10]+3200236656&4294967295,I=C+(R<<23&4294967295|R>>>9),R=_+(I^C^b)+k[13]+681279174&4294967295,_=I+(R<<4&4294967295|R>>>28),R=b+(_^I^C)+k[0]+3936430074&4294967295,b=_+(R<<11&4294967295|R>>>21),R=C+(b^_^I)+k[3]+3572445317&4294967295,C=b+(R<<16&4294967295|R>>>16),R=I+(C^b^_)+k[6]+76029189&4294967295,I=C+(R<<23&4294967295|R>>>9),R=_+(I^C^b)+k[9]+3654602809&4294967295,_=I+(R<<4&4294967295|R>>>28),R=b+(_^I^C)+k[12]+3873151461&4294967295,b=_+(R<<11&4294967295|R>>>21),R=C+(b^_^I)+k[15]+530742520&4294967295,C=b+(R<<16&4294967295|R>>>16),R=I+(C^b^_)+k[2]+3299628645&4294967295,I=C+(R<<23&4294967295|R>>>9),R=_+(C^(I|~b))+k[0]+4096336452&4294967295,_=I+(R<<6&4294967295|R>>>26),R=b+(I^(_|~C))+k[7]+1126891415&4294967295,b=_+(R<<10&4294967295|R>>>22),R=C+(_^(b|~I))+k[14]+2878612391&4294967295,C=b+(R<<15&4294967295|R>>>17),R=I+(b^(C|~_))+k[5]+4237533241&4294967295,I=C+(R<<21&4294967295|R>>>11),R=_+(C^(I|~b))+k[12]+1700485571&4294967295,_=I+(R<<6&4294967295|R>>>26),R=b+(I^(_|~C))+k[3]+2399980690&4294967295,b=_+(R<<10&4294967295|R>>>22),R=C+(_^(b|~I))+k[10]+4293915773&4294967295,C=b+(R<<15&4294967295|R>>>17),R=I+(b^(C|~_))+k[1]+2240044497&4294967295,I=C+(R<<21&4294967295|R>>>11),R=_+(C^(I|~b))+k[8]+1873313359&4294967295,_=I+(R<<6&4294967295|R>>>26),R=b+(I^(_|~C))+k[15]+4264355552&4294967295,b=_+(R<<10&4294967295|R>>>22),R=C+(_^(b|~I))+k[6]+2734768916&4294967295,C=b+(R<<15&4294967295|R>>>17),R=I+(b^(C|~_))+k[13]+1309151649&4294967295,I=C+(R<<21&4294967295|R>>>11),R=_+(C^(I|~b))+k[4]+4149444226&4294967295,_=I+(R<<6&4294967295|R>>>26),R=b+(I^(_|~C))+k[11]+3174756917&4294967295,b=_+(R<<10&4294967295|R>>>22),R=C+(_^(b|~I))+k[2]+718787259&4294967295,C=b+(R<<15&4294967295|R>>>17),R=I+(b^(C|~_))+k[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+C&4294967295,S.g[3]=S.g[3]+b&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var I=_-this.blockSize,k=this.B,C=this.h,b=0;b<_;){if(C==0)for(;b<=I;)i(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<_;)if(k[C++]=S.charCodeAt(b++),C==this.blockSize){i(this,k),C=0;break}}else for(;b<_;)if(k[C++]=S[b++],C==this.blockSize){i(this,k),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var I=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=I&255,I/=256;for(this.u(S),S=Array(16),_=I=0;4>_;++_)for(var k=0;32>k;k+=8)S[I++]=this.g[_]>>>k&255;return S};function s(S,_){var I=l;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=_(S)}function o(S,_){this.h=_;for(var I=[],k=!0,C=S.length-1;0<=C;C--){var b=S[C]|0;k&&b==_||(I[C]=b,k=!1)}this.g=I}var l={};function u(S){return-128<=S&&128>S?s(S,function(_){return new o([_|0],0>_?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return m;if(0>S)return E(c(-S));for(var _=[],I=1,k=0;S>=I;k++)_[k]=S/I|0,I*=4294967296;return new o(_,0)}function f(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return E(f(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),k=m,C=0;C<S.length;C+=8){var b=Math.min(8,S.length-C),R=parseInt(S.substring(C,C+b),_);8>b?(b=c(Math.pow(_,b)),k=k.j(b).add(c(R))):(k=k.j(I),k=k.add(c(R)))}return k}var m=u(0),y=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-E(this).m();for(var S=0,_=1,I=0;I<this.g.length;I++){var k=this.i(I);S+=(0<=k?k:4294967296+k)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(P(this))return"-"+E(this).toString(S);for(var _=c(Math.pow(S,6)),I=this,k="";;){var C=D(I,_).g;I=v(I,C.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=C,x(I))return b+k;for(;6>b.length;)b="0"+b;k=b+k}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function P(S){return S.h==-1}t.l=function(S){return S=v(this,S),P(S)?-1:x(S)?0:1};function E(S){for(var _=S.g.length,I=[],k=0;k<_;k++)I[k]=~S.g[k];return new o(I,~S.h).add(y)}t.abs=function(){return P(this)?E(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],k=0,C=0;C<=_;C++){var b=k+(this.i(C)&65535)+(S.i(C)&65535),R=(b>>>16)+(this.i(C)>>>16)+(S.i(C)>>>16);k=R>>>16,b&=65535,R&=65535,I[C]=R<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function v(S,_){return S.add(E(_))}t.j=function(S){if(x(this)||x(S))return m;if(P(this))return P(S)?E(this).j(E(S)):E(E(this).j(S));if(P(S))return E(this.j(E(S)));if(0>this.l(T)&&0>S.l(T))return c(this.m()*S.m());for(var _=this.g.length+S.g.length,I=[],k=0;k<2*_;k++)I[k]=0;for(k=0;k<this.g.length;k++)for(var C=0;C<S.g.length;C++){var b=this.i(k)>>>16,R=this.i(k)&65535,xt=S.i(C)>>>16,Sr=S.i(C)&65535;I[2*k+2*C]+=R*Sr,w(I,2*k+2*C),I[2*k+2*C+1]+=b*Sr,w(I,2*k+2*C+1),I[2*k+2*C+1]+=R*xt,w(I,2*k+2*C+1),I[2*k+2*C+2]+=b*xt,w(I,2*k+2*C+2)}for(k=0;k<_;k++)I[k]=I[2*k+1]<<16|I[2*k];for(k=_;k<2*_;k++)I[k]=0;return new o(I,0)};function w(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function A(S,_){this.g=S,this.h=_}function D(S,_){if(x(_))throw Error("division by zero");if(x(S))return new A(m,m);if(P(S))return _=D(E(S),_),new A(E(_.g),E(_.h));if(P(_))return _=D(S,E(_)),new A(E(_.g),_.h);if(30<S.g.length){if(P(S)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var I=y,k=_;0>=k.l(S);)I=U(I),k=U(k);var C=F(I,1),b=F(k,1);for(k=F(k,2),I=F(I,2);!x(k);){var R=b.add(k);0>=R.l(S)&&(C=C.add(I),b=R),k=F(k,1),I=F(I,1)}return _=v(S,C.j(_)),new A(C,_)}for(C=m;0<=S.l(_);){for(I=Math.max(1,Math.floor(S.m()/_.m())),k=Math.ceil(Math.log(I)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),b=c(I),R=b.j(_);P(R)||0<R.l(S);)I-=k,b=c(I),R=b.j(_);x(b)&&(b=y),C=C.add(b),S=v(S,R)}return new A(C,S)}t.A=function(S){return D(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],k=0;k<_;k++)I[k]=this.i(k)&S.i(k);return new o(I,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],k=0;k<_;k++)I[k]=this.i(k)|S.i(k);return new o(I,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],k=0;k<_;k++)I[k]=this.i(k)^S.i(k);return new o(I,this.h^S.h)};function U(S){for(var _=S.g.length+1,I=[],k=0;k<_;k++)I[k]=S.i(k)<<1|S.i(k-1)>>>31;return new o(I,S.h)}function F(S,_){var I=_>>5;_%=32;for(var k=S.g.length-I,C=[],b=0;b<k;b++)C[b]=0<_?S.i(b+I)>>>_|S.i(b+I+1)<<32-_:S.i(b+I);return new o(C,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Br=o}).apply(typeof ny<"u"?ny:typeof self<"u"?self:typeof window<"u"?window:{});var ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gw,Us,yw,al,Yh,vw,_w,ww;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ja=="object"&&ja];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,N={next:function(){if(!g&&d<a.length){var O=d++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function m(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function y(a,h,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function T(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function x(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,N,O){for(var B=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)B[ce-2]=arguments[ce];return h.prototype[N].apply(g,B)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function E(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const N=a.length||0,O=g.length||0;a.length=N+O;for(let B=0;B<O;B++)a[N+B]=g[B]}else a.push(g)}}class v{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var U=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function F(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function S(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function _(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,h){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let O=0;O<I.length;O++)d=I[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function C(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function b(a){l.setTimeout(()=>{throw a},0)}function R(){var a=G;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class xt{constructor(){this.h=this.g=null}add(h,d){const g=Sr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Sr=new v(()=>new us,a=>a.reset());class us{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let cn,z=!1,G=new xt,J=()=>{const a=l.Promise.resolve(void 0);cn=()=>{a.then(ye)}};var ye=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(d){b(d)}var h=Sr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var hn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function dn(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(U){e:{try{D(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:fn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}x(dn,Re);var fn={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pn="closure_listenable_"+(1e6*Math.random()|0),oT=0;function aT(a,h,d,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=N,this.key=++oT,this.da=this.fa=!1}function na(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ra(a){this.src=a,this.g={},this.h=0}ra.prototype.add=function(a,h,d,g,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Vu(a,h,g,N);return-1<B?(h=a[B],d||(h.fa=!1)):(h=new aT(h,this.src,O,!!g,N),h.fa=d,a.push(h)),h};function Lu(a,h){var d=h.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=N)&&Array.prototype.splice.call(g,N,1),O&&(na(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Vu(a,h,d,g){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==g)return N}return-1}var Mu="closure_lm_"+(1e6*Math.random()|0),ju={};function cp(a,h,d,g,N){if(Array.isArray(h)){for(var O=0;O<h.length;O++)cp(a,h[O],d,g,N);return null}return d=fp(d),a&&a[pn]?a.K(h,d,c(g)?!!g.capture:!1,N):lT(a,h,d,!1,g,N)}function lT(a,h,d,g,N,O){if(!h)throw Error("Invalid event type");var B=c(N)?!!N.capture:!!N,ce=Fu(a);if(ce||(a[Mu]=ce=new ra(a)),d=ce.add(h,d,g,B,O),d.proxy)return d;if(g=uT(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)hn||(N=B),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(dp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uT(){function a(d){return h.call(a.src,a.listener,d)}const h=cT;return a}function hp(a,h,d,g,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)hp(a,h[O],d,g,N);else g=c(g)?!!g.capture:!!g,d=fp(d),a&&a[pn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],d=Vu(O,d,g,N),-1<d&&(na(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Fu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vu(h,d,g,N)),(d=-1<a?h[a]:null)&&Uu(d))}function Uu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[pn])Lu(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(dp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Fu(h))?(Lu(d,a),d.h==0&&(d.src=null,h[Mu]=null)):na(a)}}}function dp(a){return a in ju?ju[a]:ju[a]="on"+a}function cT(a,h){if(a.da)a=!0;else{h=new dn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&Uu(a),a=d.call(g,h)}return a}function Fu(a){return a=a[Mu],a instanceof ra?a:null}var Bu="__closure_events_fn_"+(1e9*Math.random()>>>0);function fp(a){return typeof a=="function"?a:(a[Bu]||(a[Bu]=function(h){return a.handleEvent(h)}),a[Bu])}function Ge(){ue.call(this),this.i=new ra(this),this.M=this,this.F=null}x(Ge,ue),Ge.prototype[pn]=!0,Ge.prototype.removeEventListener=function(a,h,d,g){hp(this,a,h,d,g)};function st(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var N=h;h=new Re(g,a),k(h,N)}if(N=!0,d)for(var O=d.length-1;0<=O;O--){var B=h.g=d[O];N=ia(B,g,!0,h)&&N}if(B=h.g=a,N=ia(B,g,!0,h)&&N,N=ia(B,g,!1,h)&&N,d)for(O=0;O<d.length;O++)B=h.g=d[O],N=ia(B,g,!1,h)&&N}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)na(d[g]);delete a.g[h],a.h--}}this.F=null},Ge.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ge.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ia(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,O=0;O<h.length;++O){var B=h[O];if(B&&!B.da&&B.capture==d){var ce=B.listener,Fe=B.ha||B.src;B.fa&&Lu(a.i,B),N=ce.call(Fe,g)!==!1&&N}}return N&&!g.defaultPrevented}function pp(a,h,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function mp(a){a.g=pp(()=>{a.g=null,a.i&&(a.i=!1,mp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class hT extends ue{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:mp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(a){ue.call(this),this.h=a,this.g={}}x(cs,ue);var gp=[];function yp(a){F(a.g,function(h,d){this.g.hasOwnProperty(d)&&Uu(h)},a),a.g={}}cs.prototype.N=function(){cs.aa.N.call(this),yp(this)},cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zu=l.JSON.stringify,dT=l.JSON.parse,fT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function $u(){}$u.prototype.h=null;function vp(a){return a.h||(a.h=a.i())}function _p(){}var hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wu(){Re.call(this,"d")}x(Wu,Re);function Hu(){Re.call(this,"c")}x(Hu,Re);var Ar={},wp=null;function sa(){return wp=wp||new Ge}Ar.La="serverreachability";function Ep(a){Re.call(this,Ar.La,a)}x(Ep,Re);function ds(a){const h=sa();st(h,new Ep(h))}Ar.STAT_EVENT="statevent";function Tp(a,h){Re.call(this,Ar.STAT_EVENT,a),this.stat=h}x(Tp,Re);function ot(a){const h=sa();st(h,new Tp(h,a))}Ar.Ma="timingevent";function Ip(a,h){Re.call(this,Ar.Ma,a),this.size=h}x(Ip,Re);function fs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function pT(a,h,d,g,N,O){a.info(function(){if(a.g)if(O)for(var B="",ce=O.split("&"),Fe=0;Fe<ce.length;Fe++){var se=ce[Fe].split("=");if(1<se.length){var Qe=se[0];se=se[1];var Ye=Qe.split("_");B=2<=Ye.length&&Ye[1]=="type"?B+(Qe+"="+se+"&"):B+(Qe+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+d+`
`+B})}function mT(a,h,d,g,N,O,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+d+`
`+O+" "+B})}function li(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+yT(a,d)+(g?" "+g:"")})}function gT(a,h){a.info(function(){return"TIMEOUT: "+h})}ps.prototype.info=function(){};function yT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return zu(d)}catch{return h}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qu;function aa(){}x(aa,$u),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},qu=new aa;function Vn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ap}function Ap(){this.i=null,this.g="",this.h=!1}var kp={},Ku={};function Gu(a,h,d){a.L=1,a.v=ha(mn(h)),a.m=d,a.P=!0,Rp(a,null)}function Rp(a,h){a.F=Date.now(),la(a),a.A=mn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Bp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Ap,a.g=sm(a.j,d?h:null,!a.m),0<a.O&&(a.M=new hT(y(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(gp[0]=N.toString()),N=gp);for(var O=0;O<N.length;O++){var B=cp(d,N[O],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ds(),pT(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const h=this.M;h&&gn(a)==3?h.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=gn(this.g);var h=this.g.Ba();const hi=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Gp(this.g)))){this.J||Ye!=4||h==7||(h==8||0>=hi?ds(3):ds(2)),Qu(this);var d=this.g.Z();this.X=d;t:if(xp(this)){var g=Gp(this.g);a="";var N=g.length,O=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),ms(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==N-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,mT(this.i,this.u,this.A,this.l,this.R,Ye,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Fe=this.g;if((ce=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ce)){var se=ce;break t}}se=null}if(d=se)li(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yu(this,d);else{this.o=!1,this.s=3,ot(12),kr(this),ms(this);break e}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<B.length;)if(Lt=vT(this,B),Lt==Ku){Ye==4&&(this.s=4,ot(14),d=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==kp){this.s=4,ot(15),li(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else li(this.i,this.l,Lt,null),Yu(this,Lt);if(xp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||B.length!=0||this.h.h||(this.s=1,ot(16),d=!1),this.o=this.o&&d,!d)li(this.i,this.l,B,"[Invalid Chunked Response]"),kr(this),ms(this);else if(0<B.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),nc(Qe),Qe.M=!0,ot(11))}}else li(this.i,this.l,B,null),Yu(this,B);Ye==4&&kr(this),this.o&&!this.J&&(Ye==4?tm(this.j,this):(this.o=!1,la(this)))}else LT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),kr(this),ms(this)}}}catch{}finally{}};function xp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Ku:(d=Number(h.substring(d,g)),isNaN(d)?kp:(g+=1,g+d>h.length?Ku:(h=h.slice(g,g+d),a.C=g+d,h)))}Vn.prototype.cancel=function(){this.J=!0,kr(this)};function la(a){a.S=Date.now()+a.I,Cp(a,a.I)}function Cp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fs(y(a.ba,a),h)}function Qu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(gT(this.i,this.A),this.L!=2&&(ds(),ot(17)),kr(this),this.s=2,ms(this)):Cp(this,this.S-a)};function ms(a){a.j.G==0||a.J||tm(a.j,a)}function kr(a){Qu(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,yp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Yu(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Xu(d.h,a))){if(!a.K&&Xu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ya(d),ma(d);else break e;tc(d),ot(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=fs(y(d.Za,d),6e3));if(1>=bp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else xr(d,11)}else if((a.K||d.g==a)&&ya(d),!w(h))for(N=d.Da.g.parse(h),h=0;h<N.length;h++){let se=N[h];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Qe=se[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Ye=se[4];Ye!=null&&(d.Aa=Ye,d.j.info("SVER="+d.Aa));const hi=se[5];hi!=null&&typeof hi=="number"&&0<hi&&(g=1.5*hi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Lt=a.g;if(Lt){const _a=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_a){var O=g.h;O.g||_a.indexOf("spdy")==-1&&_a.indexOf("quic")==-1&&_a.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ju(O,O.h),O.h=null))}if(g.D){const rc=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;rc&&(g.ya=rc,de(g.I,g.D,rc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=a;if(g.qa=im(g,g.J?g.ia:null,g.W),B.K){Dp(g.h,B);var ce=B,Fe=g.L;Fe&&(ce.I=Fe),ce.B&&(Qu(ce),la(ce)),g.g=B}else Zp(g);0<d.i.length&&ga(d)}else se[0]!="stop"&&se[0]!="close"||xr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?xr(d,7):ec(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}ds(4)}catch{}}var _T=class{constructor(a,h){this.g=a,this.map=h}};function Pp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Np(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bp(a){return a.h?1:a.g?a.g.size:0}function Xu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ju(a,h){a.g?a.g.add(h):a.h=h}function Dp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Pp.prototype.cancel=function(){if(this.i=Op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Op(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function wT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function ET(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Lp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=ET(a),g=wT(a),N=g.length,O=0;O<N;O++)h.call(void 0,g[O],d&&d[O],a)}var Vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),N=null;if(0<=g){var O=a[d].substring(0,g);N=a[d].substring(g+1)}else O=a[d];h(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Rr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Rr){this.h=a.h,ua(this,a.j),this.o=a.o,this.g=a.g,ca(this,a.s),this.l=a.l;var h=a.i,d=new vs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Mp(this,d),this.m=a.m}else a&&(h=String(a).match(Vp))?(this.h=!1,ua(this,h[1]||"",!0),this.o=gs(h[2]||""),this.g=gs(h[3]||"",!0),ca(this,h[4]),this.l=gs(h[5]||"",!0),Mp(this,h[6]||"",!0),this.m=gs(h[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}Rr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ys(h,jp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ys(h,jp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ys(d,d.charAt(0)=="/"?AT:ST,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ys(d,RT)),a.join("")};function mn(a){return new Rr(a)}function ua(a,h,d){a.j=d?gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ca(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Mp(a,h,d){h instanceof vs?(a.i=h,xT(a.i,a.h)):(d||(h=ys(h,kT)),a.i=new vs(h,a.h))}function de(a,h,d){a.i.set(h,d)}function ha(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ys(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,IT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function IT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jp=/[#\/\?@]/g,ST=/[#\?:]/g,AT=/[#\?]/g,kT=/[#\?@]/g,RT=/#/g;function vs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&TT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=vs.prototype,t.add=function(a,h){Mn(this),this.i=null,a=ui(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Up(a,h){Mn(a),h=ui(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fp(a,h){return Mn(a),h=ui(a,h),a.g.has(h)}t.forEach=function(a,h){Mn(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(h,N,g,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const N=a[g];for(let O=0;O<N.length;O++)d.push(h[g])}return d},t.V=function(a){Mn(this);let h=[];if(typeof a=="string")Fp(this,a)&&(h=h.concat(this.g.get(ui(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Mn(this),this.i=null,a=ui(this,a),Fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bp(a,h,d){Up(a,h),0<d.length&&(a.i=null,a.g.set(ui(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const O=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var N=O;B[g]!==""&&(N+="="+encodeURIComponent(String(B[g]))),a.push(N)}}return this.i=a.join("&")};function ui(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function xT(a,h){h&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(d,g){var N=g.toLowerCase();g!=N&&(Up(this,g),Bp(this,N,d))},a)),a.j=h}function CT(a,h){const d=new ps;if(l.Image){const g=new Image;g.onload=T(jn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=T(jn,d,"TestLoadImage: error",!1,h,g),g.onabort=T(jn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=T(jn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function PT(a,h){const d=new ps,g=new AbortController,N=setTimeout(()=>{g.abort(),jn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(N),O.ok?jn(d,"TestPingServer: ok",!0,h):jn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),jn(d,"TestPingServer: error",!1,h)})}function jn(a,h,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function NT(){this.g=new fT}function bT(a,h,d){const g=d||"";try{Lp(a,function(N,O){let B=N;c(N)&&(B=zu(N)),h.push(g+O+"="+encodeURIComponent(B))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function da(a){this.l=a.Ub||null,this.j=a.eb||!1}x(da,$u),da.prototype.g=function(){return new fa(this.l,this.j)},da.prototype.i=function(a){return function(){return a}}({});function fa(a,h){Ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(fa,Ge),t=fa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?_s(this):ws(this),this.readyState==3&&zp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,_s(this))},t.Qa=function(a){this.g&&(this.response=a,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ws(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $p(a){let h="";return F(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Zu(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=$p(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):de(a,h,d))}function Te(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Te,Ge);var DT=/^https?$/i,OT=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qu.g(),this.v=this.o?vp(this.o):vp(qu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Wp(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(OT,h,void 0))||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Wp(this,O)}};function Wp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Hp(a),pa(a)}function Hp(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qp(this):this.bb())},t.bb=function(){qp(this)};function qp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)pp(a.Ea,0,a);else if(st(a,"readystatechange"),gn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=B===0){var N=String(a.D).match(Vp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!DT.test(N?N.toLowerCase():"")}d=g}if(d)st(a,"complete"),st(a,"success");else{a.m=6;try{var O=2<gn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Hp(a)}}finally{pa(a)}}}}function pa(a,h){if(a.g){Kp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||st(a,"ready");try{d.onreadystatechange=g}catch{}}}function Kp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),dT(h)}};function Gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function LT(a){const h={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=C(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[N]||[];h[N]=O,O.push(d)}S(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Qp(a){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,a),this.cb=Es("retryDelaySeedMs",1e4,a),this.Wa=Es("forwardChannelMaxRetries",2,a),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Pp(a&&a.concurrentRequestLimit),this.Da=new NT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){ot(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=im(this,null,this.W),ga(this)};function ec(a){if(Yp(a),a.G==3){var h=a.U++,d=mn(a.I);if(de(d,"SID",a.K),de(d,"RID",h),de(d,"TYPE","terminate"),Ts(a,d),h=new Vn(a,a.j,h),h.L=2,h.v=ha(mn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=sm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),la(h)}rm(a)}function ma(a){a.g&&(nc(a),a.g.cancel(),a.g=null)}function Yp(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!Np(a.h)&&!a.s){a.s=!0;var h=a.Ga;cn||J(),z||(cn(),z=!0),G.add(h,a),a.B=0}}function VT(a,h){return bp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fs(y(a.Ga,a,h),nm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Vn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),k(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Jp(this,N,h),d=mn(this.I),de(d,"RID",a),de(d,"CVER",22),this.D&&de(d,"X-HTTP-Session-Id",this.D),Ts(this,d),O&&(this.O?h="headers="+encodeURIComponent(String($p(O)))+"&"+h:this.m&&Zu(d,this.m,O)),Ju(this.h,N),this.Ua&&de(d,"TYPE","init"),this.P?(de(d,"$req",h),de(d,"SID","null"),N.T=!0,Gu(N,d,null)):Gu(N,d,h),this.G=2}}else this.G==3&&(a?Xp(this,a):this.i.length==0||Np(this.h)||Xp(this))};function Xp(a,h){var d;h?d=h.l:d=a.U++;const g=mn(a.I);de(g,"SID",a.K),de(g,"RID",d),de(g,"AID",a.T),Ts(a,g),a.m&&a.o&&Zu(g,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Jp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ju(a.h,d),Gu(d,g,h)}function Ts(a,h){a.H&&F(a.H,function(d,g){de(h,g,d)}),a.l&&Lp({},function(d,g){de(h,g,d)})}function Jp(a,h,d){d=Math.min(a.i.length,d);var g=a.l?y(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const B=["count="+d];O==-1?0<d?(O=N[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let ce=!0;for(let Fe=0;Fe<d;Fe++){let se=N[Fe].g;const Qe=N[Fe].map;if(se-=O,0>se)O=Math.max(0,N[Fe].g-100),ce=!1;else try{bT(Qe,B,"req"+se+"_")}catch{g&&g(Qe)}}if(ce){g=B.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Zp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;cn||J(),z||(cn(),z=!0),G.add(h,a),a.v=0}}function tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fs(y(a.Fa,a),nm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,em(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),ma(this),em(this))};function nc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function em(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=mn(a.qa);de(h,"RID","rpc"),de(h,"SID",a.K),de(h,"AID",a.T),de(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(h,"TO",a.ja),de(h,"TYPE","xmlhttp"),Ts(a,h),a.m&&a.o&&Zu(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ha(mn(h)),d.m=null,d.P=!0,Rp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ma(this),tc(this),ot(19))};function ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tm(a,h){var d=null;if(a.g==h){ya(a),nc(a),a.g=null;var g=2}else if(Xu(a.h,h))d=h.D,Dp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;g=sa(),st(g,new Ip(g,d)),ga(a)}else Zp(a);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&VT(a,h)||g==2&&tc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),N){case 1:xr(a,5);break;case 4:xr(a,10);break;case 3:xr(a,6);break;default:xr(a,2)}}}function nm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function xr(a,h){if(a.j.info("Error code "+h),h==2){var d=y(a.fb,a),g=a.Xa;const N=!g;g=new Rr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ua(g,"https"),ha(g),N?CT(g.toString(),d):PT(g.toString(),d)}else ot(2);a.G=0,a.l&&a.l.sa(h),rm(a),Yp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function rm(a){if(a.G=0,a.ka=[],a.l){const h=Op(a.h);(h.length!=0||a.i.length!=0)&&(E(a.ka,h),E(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function im(a,h,d){var g=d instanceof Rr?mn(d):new Rr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ca(g,g.s);else{var N=l.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var O=new Rr(null);g&&ua(O,g),h&&(O.g=h),N&&ca(O,N),d&&(O.l=d),g=O}return d=a.D,h=a.ya,d&&h&&de(g,d,h),de(g,"VER",a.la),Ts(a,g),g}function sm(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Te(new da({eb:d})):new Te(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function om(){}t=om.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function va(){}va.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Ge.call(this),this.g=new Qp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ci(this)}x(_t,Ge),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){ec(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=zu(a),a=d);h.i.push(new _T(h.Ya++,a)),h.G==3&&ga(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,_t.aa.N.call(this)};function am(a){Wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(am,Wu);function lm(){Hu.call(this),this.status=1}x(lm,Hu);function ci(a){this.g=a}x(ci,om),ci.prototype.ua=function(){st(this.g,"a")},ci.prototype.ta=function(a){st(this.g,new am(a))},ci.prototype.sa=function(a){st(this.g,new lm)},ci.prototype.ra=function(){st(this.g,"b")},va.prototype.createWebChannel=va.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,ww=function(){return new va},_w=function(){return sa()},vw=Ar,Yh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,al=oa,Sp.COMPLETE="complete",yw=Sp,_p.EventType=hs,hs.OPEN="a",hs.CLOSE="b",hs.ERROR="c",hs.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,Us=_p,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,gw=Te}).apply(typeof ja<"u"?ja:typeof self<"u"?self:typeof window<"u"?window:{});const ry="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new hf("@firebase/firestore");function Ns(){return Xr.logLevel}function W(t,...e){if(Xr.logLevel<=te.DEBUG){const n=e.map(If);Xr.debug(`Firestore (${ss}): ${t}`,...n)}}function bn(t,...e){if(Xr.logLevel<=te.ERROR){const n=e.map(If);Xr.error(`Firestore (${ss}): ${t}`,...n)}}function Ki(t,...e){if(Xr.logLevel<=te.WARN){const n=e.map(If);Xr.warn(`Firestore (${ss}): ${t}`,...n)}}function If(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function le(t,e){t||Q()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Zx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eC{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new Ew(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new et(e)}}class tC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new rC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ve(0,0))}static max(){return new Y(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ko.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ko?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends ko{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const oC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends ko{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return oC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ge.fromString(e))}static fromName(e){return new q(ge.fromString(e).popFirst(5))}static empty(){return new q(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ge(e.slice()))}}function aC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new mr(i,q.empty(),e)}function lC(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(Y.min(),q.empty(),-1)}static max(){return new mr(Y.max(),q.empty(),-1)}}function uC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==cC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function dC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sf.oe=-1;function wu(t){return t==null}function $l(t){return t===0&&1/t==-1/0}function fC(t){return typeof t=="number"&&Number.isInteger(t)&&!$l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Iw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ua(this.root,e,this.comparator,!0)}}class Ua{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sy(this.data.getIterator())}getIteratorFrom(e){return new sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new He($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const pC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(le(!!t),typeof t=="string"){let e=0;const n=pC.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kf(t){const e=t.mapValue.fields.__previous_value__;return Af(e)?kf(e):e}function Ro(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa={mapValue:{}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Af(t)?4:yC(t)?9007199254740991:gC(t)?10:11:Q()}function an(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gr(i.timestampValue),l=gr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?$l(o)===$l(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Gi(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(iy(o)!==iy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!an(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function Co(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function Qi(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return oy(t.timestampValue,e.timestampValue);case 4:return oy(Ro(t),Ro(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Jr(s),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=oe(l[c],u[c]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(xe(s.latitude),xe(o.latitude));return l!==0?l:oe(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ay(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const m=s.fields||{},y=o.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=y.value)===null||u===void 0?void 0:u.arrayValue,P=oe(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:ay(T,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Fa.mapValue&&o===Fa.mapValue)return 0;if(s===Fa.mapValue)return 1;if(o===Fa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=oe(u[m],f[m]);if(y!==0)return y;const T=Qi(l[u[m]],c[f[m]]);if(T!==0)return T}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=gr(t),r=gr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function ay(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Qi(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Yi(t){return Xh(t)}function Xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Xh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Xh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Jh(t){return!!t&&"integerValue"in t}function Rf(t){return!!t&&"arrayValue"in t}function ly(t){return!!t&&"nullValue"in t}function uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ll(t){return!!t&&"mapValue"in t}function gC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Js(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(Js(this.value))}}function Aw(t){const e=[];return oi(t.fields,(n,r)=>{const i=new $e([n]);if(ll(r)){const s=Aw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,Y.min(),Y.min(),Y.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,Y.min(),Y.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Y.min(),Y.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.position=e,this.inclusive=n}}function cy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function vC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{}class Oe extends kw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wC(e,n,r):n==="array-contains"?new IC(e,r):n==="in"?new SC(e,r):n==="not-in"?new AC(e,r):n==="array-contains-any"?new kC(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new EC(e,r):new TC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qi(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends kw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return Rw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rw(t){return t.op==="and"}function xw(t){return _C(t)&&Rw(t)}function _C(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Zh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Yi(t.value);if(xw(t))return t.filters.map(e=>Zh(e)).join(",");{const e=t.filters.map(n=>Zh(n)).join(",");return`${t.op}(${e})`}}function Cw(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)}(t,e):t instanceof ln?function(r,i){return i instanceof ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Cw(o,i.filters[l]),!0):!1}(t,e):void Q()}function Pw(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Yi(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(Pw).join(" ,")+"}"}(t):"Filter"}class wC extends Oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class EC extends Oe{constructor(e,n){super(e,"in",n),this.keys=Nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TC extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=Nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class IC extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rf(n)&&Co(n.arrayValue,this.value)}}class SC extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class AC extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class kC extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function dy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new RC(t,e,n,r,i,s,o)}function xf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Yi(r)).join(",")),e.ue=n}return e.ue}function Cf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hy(t.startAt,e.startAt)&&hy(t.endAt,e.endAt)}function ed(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xC(t,e,n,r,i,s,o,l){return new Eu(t,e,n,r,i,s,o,l)}function Pf(t){return new Eu(t)}function fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CC(t){return t.collectionGroup!==null}function Zs(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Hl(s,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new Hl($e.keyField(),r))}return e.ce}function sn(t){const e=X(t);return e.le||(e.le=PC(e,Zs(t))),e.le}function PC(t,e){if(t.limitType==="F")return dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Hl(i.field,s)});const n=t.endAt?new Wl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wl(t.startAt.position,t.startAt.inclusive):null;return dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function td(t,e,n){return new Eu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tu(t,e){return Cf(sn(t),sn(e))&&t.limitType===e.limitType}function bw(t){return`${xf(sn(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Pw(i)).join(", ")}]`),wu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Yi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Yi(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Zs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=cy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Zs(r),i)||r.endAt&&!function(o,l,u){const c=cy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Zs(r),i))}(t,e)}function NC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dw(t){return(e,n)=>{let r=!1;for(const i of Zs(t)){const s=bC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Qi(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Iw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new Ee(q.comparator);function Dn(){return DC}const Ow=new Ee(q.comparator);function Fs(...t){let e=Ow;for(const n of t)e=e.insert(n.key,n);return e}function Lw(t){let e=Ow;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return eo()}function Vw(){return eo()}function eo(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const OC=new Ee(q.comparator),LC=new He(q.comparator);function ee(...t){let e=LC;for(const n of t)e=e.add(n);return e}const VC=new He(oe);function MC(){return VC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$l(e)?"-0":e}}function Mw(t){return{integerValue:""+t}}function jC(t,e){return fC(e)?Mw(e):Nf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this._=void 0}}function UC(t,e,n){return t instanceof Po?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Af(s)&&(s=kf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof No?Uw(t,e):t instanceof bo?Fw(t,e):function(i,s){const o=jw(i,s),l=py(o)+py(i.Pe);return Jh(o)&&Jh(i.Pe)?Mw(l):Nf(i.serializer,l)}(t,e)}function FC(t,e,n){return t instanceof No?Uw(t,e):t instanceof bo?Fw(t,e):n}function jw(t,e){return t instanceof ql?function(r){return Jh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Po extends Su{}class No extends Su{constructor(e){super(),this.elements=e}}function Uw(t,e){const n=Bw(e);for(const r of t.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends Su{constructor(e){super(),this.elements=e}}function Fw(t,e){let n=Bw(e);for(const r of t.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class ql extends Su{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function py(t){return xe(t.integerValue||t.doubleValue)}function Bw(t){return Rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.field=e,this.transform=n}}function zC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof No&&i instanceof No||r instanceof bo&&i instanceof bo?Gi(r.elements,i.elements,an):r instanceof ql&&i instanceof ql?an(r.Pe,i.Pe):r instanceof Po&&i instanceof Po}(t.transform,e.transform)}class $C{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Au{}function zw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ww(t.key,zt.none()):new Yo(t.key,t.data,zt.none());{const n=t.data,r=ft.empty();let i=new He($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new Tt(i.toArray()),zt.none())}}function WC(t,e,n){t instanceof Yo?function(i,s,o){const l=i.value.clone(),u=gy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(i,s,o){if(!ul(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=gy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($w(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function to(t,e,n,r){return t instanceof Yo?function(s,o,l,u){if(!ul(s.precondition,o))return l;const c=s.value.clone(),f=yy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(s,o,l,u){if(!ul(s.precondition,o))return l;const c=yy(s.fieldTransforms,u,o),f=o.data;return f.setAll($w(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return ul(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function HC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=jw(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function my(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gi(r,i,(s,o)=>zC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Au{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends Au{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gy(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,FC(o,l,n[i]))}return r}function yy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,UC(s,o,e))}return r}class Ww extends Au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qC extends Au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=zw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,(n,r)=>my(n,r))&&Gi(this.baseMutations,e.baseMutations,(n,r)=>my(n,r))}}class bf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=function(){return OC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ne;function YC(t){switch(t){default:return Q();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Hw(t){if(t===void 0)return bn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Pe.OK:return M.OK;case Pe.CANCELLED:return M.CANCELLED;case Pe.UNKNOWN:return M.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return M.INTERNAL;case Pe.UNAVAILABLE:return M.UNAVAILABLE;case Pe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Pe.NOT_FOUND:return M.NOT_FOUND;case Pe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Pe.ABORTED:return M.ABORTED;case Pe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Pe.DATA_LOSS:return M.DATA_LOSS;default:return Q()}}(ne=Pe||(Pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=new Br([4294967295,4294967295],0);function vy(t){const e=XC().encode(t),n=new mw;return n.update(e),new Uint8Array(n.digest())}function _y(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Br([n,r],0),new Br([i,s],0)]}class Df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Br.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Br.fromNumber(r)));return i.compare(JC)===1&&(i=new Br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vy(e),[r,i]=_y(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Df(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=vy(e),[r,i]=_y(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ku(Y.min(),i,new Ee(oe),Dn(),ee())}}class Xo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class qw{constructor(e,n){this.targetId=e,this.me=n}}class Kw{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wy{constructor(){this.fe=0,this.ge=Ty(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Xo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ty()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ZC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=Ey(),this.Qe=new Ee(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ed(s))if(r===0){const o=new q(s.path);this.Ue(n,o,nt.newNoDocument(o,Y.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof Sw)return Ki("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Df(o,i,s)}catch(u){return Ki(u instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ed(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ku(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=Ey(),this.Qe=new Ee(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new wy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new wy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ey(){return new Ee(q.comparator)}function Ty(){return new Ee(q.comparator)}const eP={asc:"ASCENDING",desc:"DESCENDING"},tP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nP={and:"AND",or:"OR"};class rP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nd(t,e){return t.useProto3Json||wu(e)?e:{value:e}}function Kl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iP(t,e){return Kl(t,e.toTimestamp())}function on(t){return le(!!t),Y.fromTimestamp(function(n){const r=gr(n);return new Ve(r.seconds,r.nanos)}(t))}function Of(t,e){return rd(t,e).canonicalString()}function rd(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qw(t){const e=ge.fromString(t);return le(eE(e)),e}function id(t,e){return Of(t.databaseId,e.path)}function jc(t,e){const n=Qw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Xw(n))}function Yw(t,e){return Of(t.databaseId,e)}function sP(t){const e=Qw(t);return e.length===4?ge.emptyPath():Xw(e)}function sd(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xw(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Iy(t,e,n){return{name:id(t,e),fields:n.value.mapValue.fields}}function oP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(le(f===void 0||typeof f=="string"),Ke.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:Hw(c.code);return new H(f,c.message||"")}(o);n=new Kw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jc(t,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):Y.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new cl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jc(t,r.document),s=r.readTime?on(r.readTime):Y.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new cl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jc(t,r.document),s=r.removedTargetIds||[];n=new cl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QC(i,s),l=r.targetId;n=new qw(l,o)}}return n}function aP(t,e){let n;if(e instanceof Yo)n={update:Iy(t,e.key,e.value)};else if(e instanceof Ww)n={delete:id(t,e.key)};else if(e instanceof Ir)n={update:Iy(t,e.key,e.data),updateMask:gP(e.fieldMask)};else{if(!(e instanceof qC))return Q();n={verify:id(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ql)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function lP(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?on(i.updateTime):on(s);return o.isEqual(Y.min())&&(o=on(s)),new $C(o,i.transformResults||[])}(n,e))):[]}function uP(t,e){return{documents:[Yw(t,e.path)]}}function cP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yw(t,i);const s=function(c){if(c.length!==0)return Zw(ln.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(y){return{field:pi(y.field),direction:fP(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=nd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function hP(t){let e=sP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=Jw(m);return y instanceof ln&&xw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(x){return new Hl(mi(x.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,wu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,T=m.values||[];return new Wl(T,y)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const y=!m.before,T=m.values||[];return new Wl(T,y)}(n.endAt)),xC(e,i,o,s,l,"F",u,c)}function dP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mi(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mi(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mi(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>Jw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function fP(t){return eP[t]}function pP(t){return tP[t]}function mP(t){return nP[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return $e.fromServerFormat(t.fieldPath)}function Zw(t){return t instanceof Oe?function(n){if(n.op==="=="){if(uy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NAN"}};if(ly(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NAN"}};if(ly(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(n.field),op:pP(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(i=>Zw(i));return r.length===1?r[0]:{compositeFilter:{op:mP(n.op),filters:r}}}(t):Q()}function gP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.ct=e}}function vP(t){const e=hP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?td(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.un=new wP}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(mr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class wP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Xi(0)}static kn(){return new Xi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&to(r.mutation,i,Tt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=eo(),l=function(){return eo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Ir)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),to(f.mutation,c,f.mutation.getFieldMask(),Ve.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new TP(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=eo();let i=new Ee((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Tt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=Vw();f.forEach(y=>{if(!s.has(y)){const T=zw(n.get(y),r.get(y));T!==null&&m.set(y,T),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Lr());let l=-1,u=s;return o.next(c=>V.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(f=>({batchId:l,changes:Lw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fs();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(m,y){return new Eu(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let l=Fs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&to(f.mutation,c,Tt.empty(),Ve.now()),Iu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:vP(i.bundledQuery),readTime:on(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this.overlays=new Ee(q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Lr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Lr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Lr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GC(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Tr=new He(Me.Er),this.dr=new He(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new ge([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new ge([])),r=new Me(n,e),i=new Me(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Me.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(oe);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Me(new q(s),0);let l=new He(oe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.Mr=e,this.docs=function(){return new Ee(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||uC(lC(f),r)<=0||(i.has(f.key)||Iu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CP(this)}getSize(e){return V.resolve(this.size)}}class CP extends EP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.persistence=e,this.Nr=new os(n=>xf(n),Cf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lf,this.targetCount=0,this.kr=Xi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Xi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Sf(0),this.Kr=!1,this.Kr=!0,this.$r=new kP,this.referenceDelegate=e(this),this.Ur=new PP(this),this.indexManager=new _P,this.remoteDocumentCache=function(i){return new xP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new yP(n),this.Gr=new SP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new RP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new bP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class bP extends hC{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Jr=new Lf,this.Yr=null}static Zr(e){return new Vf(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wA()?8:dC(it())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new DP;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ns()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Ns()<=te.DEBUG&&W("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ns()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):V.resolve())}Yi(e,n){if(fy(n))return V.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=td(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,td(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return fy(n)||i.isEqual(Y.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Ns()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(n)),this.rs(e,o,n,aC(i,-1)).next(l=>l))})}ts(e,n){let r=new He(Dw(e));return n.forEach((i,s)=>{Iu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ns()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",fi(n)),this.Ji.getDocumentsMatchingQuery(e,n,mr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(oe),this._s=new os(s=>xf(s),Cf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function VP(t,e,n,r){return new LP(t,e,n,r)}async function tE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function MP(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,y=m.keys();let T=V.resolve();return y.forEach(x=>{T=T.next(()=>f.getEntry(u,x)).next(P=>{const E=c.docVersions.get(x);le(E!==null),P.version.compareTo(E)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function nE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function jP(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let T=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(m,T),function(P,E,v){return P.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(y,T,f)&&l.push(n.Ur.updateTargetData(s,T))});let u=Dn(),c=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(UP(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function UP(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function FP(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BP(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function od(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Sy(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=X(u),y=m._s.get(f);return y!==void 0?V.resolve(m.os.get(y)):m.Ur.getTargetData(c,f)}(r,o,sn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(zP(r,NC(e),l),{documents:l,Ts:s})))}function zP(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Ay{constructor(){this.activeTargetIds=MC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $P{constructor(){this.so=new Ay,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ay,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba=null;function Uc(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class KP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Uc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ki("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=HP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Uc();return new Promise((o,l)=>{const u=new gw;u.setWithCredentials(!0),u.listenOnce(yw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case al.NO_ERROR:const f=u.getResponseJson();W(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case al.TIMEOUT:W(Ze,`RPC '${e}' ${s} timed out`),l(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const m=u.getStatus();if(W(Ze,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const T=y==null?void 0:y.error;if(T&&T.status&&T.message){const x=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(T.status);l(new H(x,T.message))}else l(new H(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(M.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{W(Ze,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Uc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ww(),l=_w(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Ze,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,T=!1;const x=new qP({Io:E=>{T?W(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(y||(W(Ze,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),W(Ze,`RPC '${e}' stream ${i} sending:`,E),m.send(E))},To:()=>m.close()}),P=(E,v,w)=>{E.listen(v,A=>{try{w(A)}catch(D){setTimeout(()=>{throw D},0)}})};return P(m,Us.EventType.OPEN,()=>{T||(W(Ze,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),P(m,Us.EventType.CLOSE,()=>{T||(T=!0,W(Ze,`RPC '${e}' stream ${i} transport closed`),x.So())}),P(m,Us.EventType.ERROR,E=>{T||(T=!0,Ki(Ze,`RPC '${e}' stream ${i} transport errored:`,E),x.So(new H(M.UNAVAILABLE,"The operation could not be completed")))}),P(m,Us.EventType.MESSAGE,E=>{var v;if(!T){const w=E.data[0];le(!!w);const A=w,D=A.error||((v=A[0])===null||v===void 0?void 0:v.error);if(D){W(Ze,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let F=function(I){const k=Pe[I];if(k!==void 0)return Hw(k)}(U),S=D.message;F===void 0&&(F=M.INTERNAL,S="Unknown error status: "+U+" with message "+D.message),T=!0,x.So(new H(F,S)),m.close()}else W(Ze,`RPC '${e}' stream ${i} received:`,w),x.bo(w)}}),P(l,vw.STAT_EVENT,E=>{E.stat===Yh.PROXY?W(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Yh.NOPROXY&&W(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){return new rP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GP extends iE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=oP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?on(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=sd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ed(u)?{documents:uP(s,u)}:{query:cP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Gw(s,o.resumeToken);const c=nd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Kl(s,o.snapshotVersion.toTimestamp());const c=nd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=dP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=sd(this.serializer),n.removeTarget=e,this.a_(n)}}class QP extends iE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=lP(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=sd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,rd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,rd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class XP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(bn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ai(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await Jo(c),c.q_.set("Unknown"),c.L_.delete(4),await xu(c)}(this))})}),this.q_=new XP(r,i)}}async function xu(t){if(ai(t))for(const e of t.B_)await e(!0)}async function Jo(t){for(const e of t.B_)await e(!1)}function sE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Bf(n)?Ff(n):as(n).r_()&&Uf(n,e))}function jf(t,e){const n=X(t),r=as(n);n.N_.delete(e),r.r_()&&oE(n,e),n.N_.size===0&&(r.r_()?r.o_():ai(n)&&n.q_.set("Unknown"))}function Uf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}as(t).A_(e)}function oE(t,e){t.Q_.xe(e),as(t).R_(e)}function Ff(t){t.Q_=new ZC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),as(t).start(),t.q_.v_()}function Bf(t){return ai(t)&&!as(t).n_()&&t.N_.size>0}function ai(t){return X(t).L_.size===0}function aE(t){t.Q_=void 0}async function ZP(t){t.q_.set("Online")}async function e2(t){t.N_.forEach((e,n)=>{Uf(t,e)})}async function t2(t,e){aE(t),Bf(t)?(t.q_.M_(e),Ff(t)):t.q_.set("Unknown")}async function n2(t,e,n){if(t.q_.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gl(t,r)}else if(e instanceof cl?t.Q_.Ke(e):e instanceof qw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await nE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ke.EMPTY_BYTE_STRING,f.snapshotVersion)),oE(s,u);const m=new Zn(f.target,u,c,f.sequenceNumber);Uf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Gl(t,r)}}async function Gl(t,e,n){if(!Qo(e))throw e;t.L_.add(1),await Jo(t),t.q_.set("Offline"),n||(n=()=>nE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await xu(t)})}function lE(t,e){return e().catch(n=>Gl(t,n,e))}async function Cu(t){const e=X(t),n=yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;r2(e);)try{const i=await FP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,i2(e,i)}catch(i){await Gl(e,i)}uE(e)&&cE(e)}function r2(t){return ai(t)&&t.O_.length<10}function i2(t,e){t.O_.push(e);const n=yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function uE(t){return ai(t)&&!yr(t).n_()&&t.O_.length>0}function cE(t){yr(t).start()}async function s2(t){yr(t).p_()}async function o2(t){const e=yr(t);for(const n of t.O_)e.m_(n.mutations)}async function a2(t,e,n){const r=t.O_.shift(),i=bf.from(r,e,n);await lE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cu(t)}async function l2(t,e){e&&yr(t).V_&&await async function(r,i){if(function(o){return YC(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();yr(r).s_(),await lE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cu(r)}}(t,e),uE(t)&&cE(t)}async function Ry(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ai(n);n.L_.add(3),await Jo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await xu(n)}async function u2(t,e){const n=X(t);e?(n.L_.delete(2),await xu(n)):e||(n.L_.add(2),await Jo(n),n.q_.set("Unknown"))}function as(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new GP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ZP.bind(null,t),Ro:e2.bind(null,t),mo:t2.bind(null,t),d_:n2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Bf(t)?Ff(t):t.q_.set("Unknown")):(await t.K_.stop(),aE(t))})),t.K_}function yr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new QP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:s2.bind(null,t),mo:l2.bind(null,t),f_:o2.bind(null,t),g_:a2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Cu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new zf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $f(t,e){if(bn("AsyncQueue",`${e}: ${t}`),Qo(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.W_=new Ee(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ji{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ji(e,n,ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class h2{constructor(){this.queries=Cy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Cy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function Cy(){return new os(t=>bw(t),Tu)}async function d2(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new c2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=$f(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Wf(n)}async function f2(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function p2(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Wf(n)}function m2(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Wf(t){t.Y_.forEach(e=>{e.next()})}var ad,Py;(Py=ad||(ad={})).ea="default",Py.Cache="cache";class g2{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ad.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.key=e}}class dE{constructor(e){this.key=e}}class y2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Dw(e),this.Ra=new ji(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new xy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),T=Iu(this.query,m)?m:null,x=!!y&&this.mutatedKeys.has(y.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let E=!1;y&&T?y.data.isEqual(T.data)?x!==P&&(r.track({type:3,doc:T}),E=!0):this.ga(y,T)||(r.track({type:2,doc:T}),E=!0,(u&&this.Aa(T,u)>0||c&&this.Aa(T,c)<0)&&(l=!0)):!y&&T?(r.track({type:0,doc:T}),E=!0):y&&!T&&(r.track({type:1,doc:y}),E=!0,(u||c)&&(l=!0)),E&&(T?(o=o.add(T),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(T,x){const P=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(T)-P(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ji(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new xy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new dE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new hE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ji.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class v2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _2{constructor(e){this.key=e,this.va=!1}}class w2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new os(l=>bw(l),Tu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(q.comparator),this.Na=new Map,this.La=new Lf,this.Ba={},this.ka=new Map,this.qa=Xi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function E2(t,e,n=!0){const r=vE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await fE(r,e,n,!0),i}async function T2(t,e){const n=vE(t);await fE(n,e,!0,!1)}async function fE(t,e,n,r){const i=await BP(t.localStore,sn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await I2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&sE(t.remoteStore,i),l}async function I2(t,e,n,r,i){t.Ka=(m,y,T)=>async function(P,E,v,w){let A=E.view.ma(v);A.ns&&(A=await Sy(P.localStore,E.query,!1).then(({documents:S})=>E.view.ma(S,A)));const D=w&&w.targetChanges.get(E.targetId),U=w&&w.targetMismatches.get(E.targetId)!=null,F=E.view.applyChanges(A,P.isPrimaryClient,D,U);return by(P,E.targetId,F.wa),F.snapshot}(t,m,y,T);const s=await Sy(t.localStore,e,!0),o=new y2(e,s.Ts),l=o.ma(s.documents),u=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);by(t,n,c.wa);const f=new v2(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function S2(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Tu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await od(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&jf(r.remoteStore,i.targetId),ld(r,i.targetId)}).catch(Go)):(ld(r,i.targetId),await od(r.localStore,i.targetId,!0))}async function A2(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jf(n.remoteStore,r.targetId))}async function k2(t,e,n){const r=D2(t);try{const i=await function(o,l){const u=X(o),c=Ve.now(),f=l.reduce((T,x)=>T.add(x.key),ee());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let x=Dn(),P=ee();return u.cs.getEntries(T,f).next(E=>{x=E,x.forEach((v,w)=>{w.isValidDocument()||(P=P.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,x)).next(E=>{m=E;const v=[];for(const w of l){const A=HC(w,m.get(w.key).overlayedDocument);A!=null&&v.push(new Ir(w.key,A,Aw(A.value.mapValue),zt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,v,l)}).next(E=>{y=E;const v=E.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(T,E.batchId,v)})}).then(()=>({batchId:y.batchId,changes:Lw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ee(oe)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Zo(r,i.changes),await Cu(r.remoteStore)}catch(i){const s=$f(i,"Failed to persist write");n.reject(s)}}async function pE(t,e){const n=X(t);try{const r=await jP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?le(o.va):i.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await Zo(n,r,e)}catch(r){await Go(r)}}function Ny(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(c=!0)}),c&&Wf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function R2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(q.comparator);o=o.insert(s,nt.newNoDocument(s,Y.min()));const l=ee().add(s),u=new ku(Y.min(),new Map,new Ee(oe),o,l);await pE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Hf(r)}else await od(r.localStore,e,!1).then(()=>ld(r,e,n)).catch(Go)}async function x2(t,e){const n=X(t),r=e.batch.batchId;try{const i=await MP(n.localStore,e);gE(n,r,null),mE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,i)}catch(i){await Go(i)}}async function C2(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(le(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);gE(r,e,n),mE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,i)}catch(i){await Go(i)}}function mE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function gE(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||yE(t,r)})}function yE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(jf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Hf(t))}function by(t,e,n){for(const r of n)r instanceof hE?(t.La.addReference(r.key,e),P2(t,r)):r instanceof dE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||yE(t,r.key)):Q()}function P2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Hf(t))}function Hf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new _2(n)),t.Oa=t.Oa.insert(n,r),sE(t.remoteStore,new Zn(sn(Pf(n.path)),r,"TargetPurposeLimboResolution",Sf.oe))}}async function Zo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Mf.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,y=>V.forEach(y.$i,T=>f.persistence.referenceDelegate.addReference(m,y.targetId,T)).next(()=>V.forEach(y.Ui,T=>f.persistence.referenceDelegate.removeReference(m,y.targetId,T)))))}catch(m){if(!Qo(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const y=m.targetId;if(!m.fromCache){const T=f.os.get(y),x=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(y,P)}}}(r.localStore,s))}async function N2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await tE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.hs)}}function b2(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function vE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=R2.bind(null,e),e.Ca.d_=p2.bind(null,e.eventManager),e.Ca.$a=m2.bind(null,e.eventManager),e}function D2(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C2.bind(null,e),e}class Ql{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ru(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return VP(this.persistence,new OP,e.initialUser,this.serializer)}Ga(e){return new NP(Vf.Zr,this.serializer)}Wa(e){return new $P}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ql.provider={build:()=>new Ql};class ud{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=N2.bind(null,this.syncEngine),await u2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new h2}()}createDatastore(e){const n=Ru(e.databaseInfo.databaseId),r=function(s){return new KP(s)}(e.databaseInfo);return function(s,o,l,u){return new YP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new JP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ny(this.syncEngine,n,0),function(){return ky.D()?new ky:new WP}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new w2(i,s,o,l,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Jo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ud.provider={build:()=>new ud};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Tw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await V2(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ry(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ry(e.remoteStore,i)),t._onlineComponents=e}async function V2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ki("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new Ql)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Bc(t,new Ql);return t._offlineComponents}async function _E(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Dy(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Dy(t,new ud))),t._onlineComponents}function M2(t){return _E(t).then(e=>e.syncEngine)}async function j2(t){const e=await _E(t),n=e.eventManager;return n.onListen=E2.bind(null,e.syncEngine),n.onUnlisten=S2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=T2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=A2.bind(null,e.syncEngine),n}function U2(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new O2({next:y=>{f.Za(),o.enqueueAndForget(()=>f2(s,m));const T=y.docs.has(l);!T&&y.fromCache?c.reject(new H(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&y.fromCache&&u&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new g2(Pf(l.path),f,{includeMetadataChanges:!0,_a:!0});return d2(s,m)}(await j2(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function F2(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ly(t){if(!q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vy(t){if(q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qf(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new My({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new My(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jx;switch(r.type){case"firstParty":return new nC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oy.get(n);r&&(W("ComponentProvider","Removing Datastore"),Oy.delete(n),r.terminate())}(this),Promise.resolve()}}function B2(t,e,n,r={}){var i;const s=(t=vr(t,Pu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=C0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}t._authCredentials=new Zx(new Ew(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kf(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class hr extends Kf{constructor(e,n,r){super(e,n,Pf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new q(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function z2(t,e,...n){if(t=Se(t),EE("collection","path",e),t instanceof Pu){const r=ge.fromString(e,...n);return Vy(r),new hr(t,null,r)}{if(!(t instanceof vt||t instanceof hr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Vy(r),new hr(t.firestore,null,r)}}function Vr(t,e,...n){if(t=Se(t),arguments.length===1&&(e=Tw.newId()),EE("doc","path",e),t instanceof Pu){const r=ge.fromString(e,...n);return Ly(r),new vt(t,null,new q(r))}{if(!(t instanceof vt||t instanceof hr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Ly(r),new vt(t.firestore,t instanceof hr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rE(this,"async_queue_retry"),this.Vu=()=>{const r=Fc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new cr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Qo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=zf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ea extends Pu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new jy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jy(e),this._firestoreClient=void 0,await e}}}function $2(t,e){const n=typeof t=="object"?t:ff(),r=typeof t=="string"?t:"(default)",i=gu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=k0("firestore");s&&B2(i,...s)}return i}function TE(t){if(t._terminated)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||W2(t),t._firestoreClient}function W2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new mC(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,wE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new L2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zi(Ke.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zi(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=/^__.*__$/;class q2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class IE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function SE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Yf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Yl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(SE(this.Cu)&&H2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class K2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ru(e)}Qu(e,n,r,i=!1){return new Yf({Cu:e,methodName:n,qu:r,path:$e.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xf(t){const e=t._freezeSettings(),n=Ru(t._databaseId);return new K2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Zf("Data must be an object, but it was:",o,r);const l=kE(r,o);let u,c;if(s.merge)u=new Tt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=cd(e,m,n);if(!o.contains(y))throw new H(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);xE(f,y)||f.push(y)}u=new Tt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new q2(new ft(l),u,c)}class Du extends bu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Du}}class Jf extends bu{_toFieldTransform(e){return new BC(e.path,new Po)}isEqual(e){return e instanceof Jf}}function G2(t,e,n,r){const i=t.Qu(1,e,n);Zf("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();oi(r,(u,c)=>{const f=ep(e,u,n);c=Se(c);const m=i.Nu(f);if(c instanceof Du)s.push(f);else{const y=Ou(c,m);y!=null&&(s.push(f),o.set(f,y))}});const l=new Tt(s);return new IE(o,l,i.fieldTransforms)}function Q2(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[cd(e,r,n)],u=[i];if(s.length%2!=0)throw new H(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(cd(e,s[y])),u.push(s[y+1]);const c=[],f=ft.empty();for(let y=l.length-1;y>=0;--y)if(!xE(c,l[y])){const T=l[y];let x=u[y];x=Se(x);const P=o.Nu(T);if(x instanceof Du)c.push(T);else{const E=Ou(x,P);E!=null&&(c.push(T),f.set(T,E))}}const m=new Tt(c);return new IE(f,m,o.fieldTransforms)}function Ou(t,e){if(RE(t=Se(t)))return Zf("Unsupported field value:",e,t),kE(t,e);if(t instanceof bu)return function(r,i){if(!SE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ou(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:Kl(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kl(i.serializer,s)}}if(r instanceof Gf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zi)return{bytesValue:Gw(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Of(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Qf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Nf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${qf(r)}`)}(t,e)}function kE(t,e){const n={};return Iw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,i)=>{const s=Ou(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function RE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Gf||t instanceof Zi||t instanceof vt||t instanceof bu||t instanceof Qf)}function Zf(t,e,n){if(!RE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function cd(t,e,n){if((e=Se(e))instanceof Nu)return e._internalPath;if(typeof e=="string")return ep(t,e);throw Yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y2=new RegExp("[~\\*/\\[\\]]");function ep(t,e,n){if(e.search(Y2)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nu(...e.split("."))._internalPath}catch{throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(M.INVALID_ARGUMENT,l+t+u)}function xE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(PE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class X2 extends CE{data(){return super.data()}}function PE(t,e){return typeof e=="string"?ep(t,e):e instanceof Nu?e._internalPath:e._delegate._internalPath}class J2{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>xe(o.doubleValue));return new Qf(s)}convertGeoPoint(e){return new Gf(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=gr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);le(eE(r));const i=new xo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bE extends CE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eN(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(PE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class eN extends bE{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){t=vr(t,vt);const e=vr(t.firestore,ea);return U2(TE(e),t._key).then(n=>iN(e,t,n))}class tN extends J2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function nN(t,e,n){t=vr(t,vt);const r=vr(t.firestore,ea),i=NE(t.converter,e);return tp(r,[AE(Xf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function DE(t,e,n,...r){t=vr(t,vt);const i=vr(t.firestore,ea),s=Xf(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof Nu?Q2(s,"updateDoc",t._key,e,n,r):G2(s,"updateDoc",t._key,e),tp(i,[o.toMutation(t._key,zt.exists(!0))])}function rN(t,e){const n=vr(t.firestore,ea),r=Vr(t),i=NE(t.converter,e);return tp(n,[AE(Xf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function tp(t,e){return function(r,i){const s=new cr;return r.asyncQueue.enqueueAndForget(async()=>k2(await M2(r),i,s)),s.promise}(TE(t),e)}function iN(t,e,n){const r=n.docs.get(e._key),i=new tN(t);return new bE(t,i,e._key,r,new Z2(n.hasPendingWrites,n.fromCache),e.converter)}function OE(){return new Jf("serverTimestamp")}(function(e,n=!0){(function(i){ss=i})(ii),Gr(new pr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ea(new eC(r.getProvider("auth-internal")),new iC(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),tn(ry,"4.7.3",e),tn(ry,"4.7.3","esm2017")})();var sN="firebase",oN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(sN,oN,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="firebasestorage.googleapis.com",VE="storageBucket",aN=2*60*1e3,lN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends un{constructor(e,n,r=0){super($c(e),`Firebase Storage: ${n} (${$c(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function $c(t){return"storage/"+t}function np(){const t="An unknown error occurred, please check the error payload for server response.";return new ke(Ae.UNKNOWN,t)}function uN(t){return new ke(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function cN(t){return new ke(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(Ae.UNAUTHENTICATED,t)}function dN(){return new ke(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function fN(t){return new ke(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function pN(){return new ke(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mN(){return new ke(Ae.CANCELED,"User canceled the upload/download.")}function gN(t){return new ke(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function yN(t){return new ke(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vN(){return new ke(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+VE+"' property when initializing the app?")}function _N(){return new ke(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wN(){return new ke(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function EN(t){return new ke(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hd(t){return new ke(Ae.INVALID_ARGUMENT,t)}function ME(){return new ke(Ae.APP_DELETED,"The Firebase app was deleted.")}function TN(t){return new ke(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function no(t,e){return new ke(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bs(t){throw new ke(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=It.makeFromUrl(e,n)}catch{return new It(e,"")}if(r.path==="")return r;throw yN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",T=new RegExp(`^https?://${m}/${f}/b/${i}/o${y}`,"i"),x={bucket:1,path:3},P=n===LE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",v=new RegExp(`^https?://${P}/${i}/${E}`,"i"),A=[{regex:l,indices:u,postModify:s},{regex:T,indices:x,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<A.length;D++){const U=A[D],F=U.regex.exec(e);if(F){const S=F[U.indices.bucket];let _=F[U.indices.path];_||(_=""),r=new It(S,_),U.postModify(r);break}}if(r==null)throw gN(e);return r}}class IN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...E){c||(c=!0,e.apply(null,E))}function m(E){i=setTimeout(()=>{i=null,t(T,u())},E)}function y(){s&&clearTimeout(s)}function T(E,...v){if(c){y();return}if(E){y(),f.call(null,E,...v);return}if(u()||o){y(),f.call(null,E,...v);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,m(A)}let x=!1;function P(E){x||(x=!0,y(),!c&&(i!==null?(E||(l=2),clearTimeout(i),m(0)):E||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function AN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){return t!==void 0}function RN(t){return typeof t=="object"&&!Array.isArray(t)}function rp(t){return typeof t=="string"||t instanceof String}function Uy(t){return ip()&&t instanceof Blob}function ip(){return typeof Blob<"u"}function Fy(t,e,n,r){if(r<e)throw hd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var zr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zr||(zr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,n,r,i,s,o,l,u,c,f,m,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,x)=>{this.resolve_=T,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new za(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===zr.NO_ERROR,u=s.getStatus();if(!l||xN(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===zr.ABORT;r(!1,new za(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new za(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());kN(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=np();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?ME():mN();o(u)}else{const u=pN();o(u)}};this.canceled_?n(!1,new za(!1,null,!0)):this.backoffId_=SN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class za{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function DN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ON(t,e,n,r,i,s,o=!0){const l=jE(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return bN(c,e),PN(c,n),NN(c,s),DN(c,r),new CN(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VN(...t){const e=LN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ip())return new Blob(t);throw new ke(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function MN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){if(typeof atob>"u")throw EN("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wc{constructor(e,n){this.data=e,this.contentType=n||null}}function UN(t,e){switch(t){case Jt.RAW:return new Wc(UE(e));case Jt.BASE64:case Jt.BASE64URL:return new Wc(FE(t,e));case Jt.DATA_URL:return new Wc(BN(e),zN(e))}throw np()}function UE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function FN(t){let e;try{e=decodeURIComponent(t)}catch{throw no(Jt.DATA_URL,"Malformed data URL.")}return UE(e)}function FE(t,e){switch(t){case Jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw no(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw no(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jN(e)}catch(i){throw i.message.includes("polyfill")?i:no(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw no(Jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=$N(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function BN(t){const e=new BE(t);return e.base64?FE(Jt.BASE64,e.rest):FN(e.rest)}function zN(t){return new BE(t).contentType}function $N(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){let r=0,i="";Uy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Uy(this.data_)){const r=this.data_,i=MN(r,e,n);return i===null?null:new Qn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qn(r,!0)}}static getBlob(...e){if(ip()){const n=e.map(r=>r instanceof Qn?r.data_:r);return new Qn(VN.apply(null,n))}else{const n=e.map(o=>rp(o)?UN(Jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Qn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){let e;try{e=JSON.parse(t)}catch{return null}return RN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $E(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t,e){return e}class at{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||qN}}let $a=null;function KN(t){return!rp(t)||t.length<2?t:$E(t)}function WE(){if($a)return $a;const t=[];t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));function e(s,o){return KN(o)}const n=new at("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new at("size");return i.xform=r,t.push(i),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),$a=t,$a}function GN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new It(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function QN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return GN(r,t),r}function HE(t,e,n){const r=zE(e);return r===null?null:QN(t,r,n)}function YN(t,e,n,r){const i=zE(e);if(i===null||!rp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,m=t.fullPath,y="/b/"+o(f)+"/o/"+o(m),T=sp(y,n,r),x=jE({alt:"media",token:c});return T+x})[0]}function XN(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class qE{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){if(!t)throw np()}function JN(t,e){function n(r,i){const s=HE(t,i,e);return KE(s!==null),s}return n}function ZN(t,e){function n(r,i){const s=HE(t,i,e);return KE(s!==null),YN(s,i,t.host,t._protocol)}return n}function GE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=dN():i=hN():n.getStatus()===402?i=cN(t.bucket):n.getStatus()===403?i=fN(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function eb(t){const e=GE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=uN(t.path)),s.serverResponse=i.serverResponse,s}return n}function tb(t,e,n){const r=e.fullServerUrl(),i=sp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new qE(i,s,ZN(t,n),o);return l.errorHandler=eb(e),l}function nb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function rb(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=nb(null,e)),r}function ib(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let D=0;D<2;D++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=rb(e,r,i),f=XN(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,y=`\r
--`+u+"--",T=Qn.getBlob(m,r,y);if(T===null)throw _N();const x={name:c.fullPath},P=sp(s,t.host,t._protocol),E="POST",v=t.maxUploadRetryTime,w=new qE(P,E,JN(t,n),v);return w.urlParams=x,w.headers=o,w.body=T.uploadData(),w.errorHandler=GE(e),w}class sb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw bs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ob extends sb{initXhr(){this.xhr_.responseType="text"}}function QE(){return new ob}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this._service=e,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ei(e,n)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $E(this._location.path)}get storage(){return this._service}get parent(){const e=WN(this._location.path);if(e===null)return null;const n=new It(this._location.bucket,e);return new ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw TN(e)}}function ab(t,e,n){t._throwIfRoot("uploadBytes");const r=ib(t.storage,t._location,WE(),new Qn(e,!0),n);return t.storage.makeRequestWithTokens(r,QE).then(i=>({metadata:i,ref:t}))}function lb(t){t._throwIfRoot("getDownloadURL");const e=tb(t.storage,t._location,WE());return t.storage.makeRequestWithTokens(e,QE).then(n=>{if(n===null)throw wN();return n})}function ub(t,e){const n=HN(t._location.path,e),r=new It(t._location.bucket,n);return new ei(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){return/^[A-Za-z]+:\/\//.test(t)}function hb(t,e){return new ei(t,e)}function YE(t,e){if(t instanceof op){const n=t;if(n._bucket==null)throw vN();const r=new ei(n,n._bucket);return e!=null?YE(r,e):r}else return e!==void 0?ub(t,e):t}function db(t,e){if(e&&cb(e)){if(t instanceof op)return hb(t,e);throw hd("To use ref(service, url), the first argument must be a Storage instance.")}else return YE(t,e)}function By(t,e){const n=e==null?void 0:e[VE];return n==null?null:It.makeFromBucketSpec(n,t)}function fb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:C0(i,t.app.options.projectId))}class op{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=LE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=aN,this._maxUploadRetryTime=lN,this._requests=new Set,i!=null?this._bucket=It.makeFromBucketSpec(i,this._host):this._bucket=By(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=By(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ei(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new IN(ME());{const o=ON(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const zy="@firebase/storage",$y="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="storage";function pb(t,e,n){return t=Se(t),ab(t,e,n)}function mb(t){return t=Se(t),lb(t)}function gb(t,e){return t=Se(t),db(t,e)}function yb(t=ff(),e){t=Se(t);const r=gu(t,XE).getImmediate({identifier:e}),i=k0("storage");return i&&vb(r,...i),r}function vb(t,e,n,r={}){fb(t,e,n,r)}function _b(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new op(n,r,i,e,ii)}function wb(){Gr(new pr(XE,_b,"PUBLIC").setMultipleInstances(!0)),tn(zy,$y,""),tn(zy,$y,"esm2017")}wb();const Eb={apiKey:"AIzaSyBesk-hxqNhYJkCo7P2B4X0wNokua4fd10",authDomain:"indie-art-gallery.firebaseapp.com",projectId:"indie-art-gallery",storageBucket:"indie-art-gallery.firebasestorage.app",messagingSenderId:"116485687316",appId:"1:116485687316:web:86743ce58b50ba43f8bf01"},ap=b0(Eb),Wa=Yx(ap),Mr=$2(ap),Tb=yb(ap),JE=L.createContext(null);function Ib({children:t}){const[e,n]=L.useState(null),[r,i]=L.useState(null),[s,o]=L.useState(!0);L.useEffect(()=>jR(Wa,async x=>{if(x){n(x);const P=await zc(Vr(Mr,"users",x.uid));if(P.exists()){const E=P.data();i(E)}}else n(null),i(null);o(!1)}),[]);async function l({email:T,password:x,displayName:P,role:E}){const v=await bR(Wa,T,x);await LR(v.user,{displayName:P});const w={uid:v.user.uid,email:T,displayName:P,role:E,bio:"",avatarUrl:"",artTypes:[],instagram:"",website:"",stripeAccountId:null,isBanned:!1,isVerified:!1,followerCount:0,totalSales:0,createdAt:OE()};return await nN(Vr(Mr,"users",v.user.uid),w),i(w),v}async function u({email:T,password:x}){const P=await DR(Wa,T,x),E=await zc(Vr(Mr,"users",P.user.uid));return E.exists()&&i(E.data()),P}async function c(){await UR(Wa),i(null)}async function f(){if(!e)return;const T=await zc(Vr(Mr,"users",e.uid));T.exists()&&i(T.data())}const m=(r==null?void 0:r.role)==="artist"||(r==null?void 0:r.role)==="both",y=(r==null?void 0:r.email)==="manager@middlemanmerchants.com";return p.jsx(JE.Provider,{value:{user:e,profile:r,loading:s,isArtist:m,isAdmin:y,signup:l,login:u,logout:c,refreshProfile:f},children:t})}const qt=()=>L.useContext(JE);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZE=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ab={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>L.createElement("svg",{ref:u,...Ab,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:ZE("lucide",i),...l},[...o.map(([c,f])=>L.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(t,e)=>{const n=L.forwardRef(({className:r,...i},s)=>L.createElement(kb,{ref:s,iconNode:e,className:ZE(`lucide-${Sb(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=re("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=re("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=re("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=re("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=re("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=re("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=re("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=re("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=re("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=re("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=re("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=re("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=re("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=re("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=re("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=re("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=re("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=re("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=re("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=re("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=re("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=re("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=re("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=re("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=re("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=re("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=re("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=re("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=re("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=re("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),iT=L.createContext(null);function Yb({children:t}){const[e,n]=L.useState([]),r=L.useCallback((s,o="info",l=3500)=>{const u=Date.now();n(c=>[...c,{id:u,message:s,type:o}]),setTimeout(()=>n(c=>c.filter(f=>f.id!==u)),l)},[]),i={success:s=>r(s,"success"),error:s=>r(s,"error"),info:s=>r(s,"info")};return p.jsxs(iT.Provider,{value:i,children:[t,p.jsx("div",{className:"toast-container",children:e.map(s=>p.jsxs("div",{className:`toast ${s.type}`,children:[s.type==="success"&&p.jsx(dd,{size:16,color:"var(--green-ok)"}),s.type==="error"&&p.jsx(Pb,{size:16,color:"var(--red-err)"}),s.type==="info"&&p.jsx(Mb,{size:16,color:"var(--slate)"}),p.jsx("span",{children:s.message})]},s.id))})]})}const ta=()=>L.useContext(iT),qy=[{label:"Discover",icon:Vb,path:"/"},{label:"Live",icon:Do,path:"/live"},{label:"Store",icon:Oo,path:"/store"},{label:"Profile",icon:Qb,path:"/profile"}];function Xb(){const t=Ht(),{pathname:e}=pu(),{isAdmin:n}=qt(),r=n?[...qy,{label:"Admin",icon:Ub,path:"/admin"}]:qy;return p.jsx("nav",{className:"bottom-nav",children:r.map(({label:i,icon:s,path:o})=>p.jsxs("button",{className:`nav-item ${e===o?"active":""}`,onClick:()=>t(o),"aria-label":i,children:[p.jsx(s,{size:22,strokeWidth:e===o?2.5:1.8}),i]},o))})}function ls({title:t,showSearch:e=!1,back:n=!1}){const r=Ht(),{user:i}=qt();return p.jsxs("header",{className:"topbar",children:[n?p.jsx("button",{onClick:()=>r(-1),style:{background:"none",border:"none",color:"var(--cream)",cursor:"pointer",display:"flex",alignItems:"center",gap:6},children:"← Back"}):p.jsxs("div",{className:"topbar-logo",children:["Indie",p.jsx("span",{children:"Art"})]}),t&&p.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-lg)",position:"absolute",left:"50%",transform:"translateX(-50%)"},children:t}),p.jsxs("div",{className:"flex gap-3 items-center",children:[e&&p.jsx("button",{onClick:()=>r("/search"),style:{background:"none",border:"none",color:"var(--slate)",cursor:"pointer"},children:p.jsx(tT,{size:20})}),i&&p.jsx("button",{onClick:()=>r("/notifications"),style:{background:"none",border:"none",color:"var(--slate)",cursor:"pointer",position:"relative"},children:p.jsx(Rb,{size:20})})]})]})}const Ky=["🎨","🖼️","🎭","✏️","🖌️","🎪","🌈","🎬"];function up({piece:t}){var r;const e=Ht(),n=Ky[((r=t.id)==null?void 0:r.charCodeAt(0))%Ky.length]||"🎨";return p.jsxs("div",{className:"art-card",onClick:()=>e(`/piece/${t.id}`),children:[t.imageUrl?p.jsx("img",{src:t.imageUrl,alt:t.title,className:"art-card-img"}):p.jsx("div",{className:"art-card-img-placeholder",children:n}),p.jsxs("div",{className:"art-card-body",children:[p.jsx("div",{className:"art-card-title truncate",children:t.title}),p.jsxs("div",{className:"art-card-artist truncate",children:["by ",t.artistName]}),p.jsxs("div",{className:"flex items-center justify-between mt-2",children:[p.jsx("div",{className:`art-card-price ${t.listingType==="auction"?"auction":""}`,children:t.listingType==="auction"?`Bid: $${t.currentBid||t.startingBid}`:`$${t.price}`}),p.jsx("button",{onClick:i=>{i.stopPropagation()},style:{background:"none",border:"none",color:"var(--slate)",cursor:"pointer",padding:2},children:p.jsx(Lb,{size:14})})]})]})]})}function sT({show:t}){const e=Ht();return p.jsxs("div",{className:"live-card",onClick:()=>e(`/live/${t.id}`),style:{minWidth:160},children:[t.thumbnailUrl&&p.jsx("img",{src:t.thumbnailUrl,alt:t.artistName,className:"live-card-thumb"}),p.jsxs("div",{className:"live-card-top",children:[p.jsxs("span",{className:"badge badge-live",children:[p.jsx("span",{className:"live-dot",style:{width:6,height:6}}),"LIVE"]}),p.jsxs("span",{className:"viewer-count",children:[p.jsx(fd,{size:10}),t.viewerCount||0]})]}),p.jsxs("div",{className:"live-card-overlay",children:[p.jsx("div",{style:{fontSize:"var(--text-xs)",fontWeight:700,marginBottom:2},children:t.artistName}),p.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--slate)"},children:t.title})]})]})}const Jb=["All","Painting","Drawing","Digital","Photography","Sculpture","Textile","Mixed Media","Print"],Zb=[{id:"a1",title:"Golden Hour",artistName:"Maya R.",price:280,listingType:"fixed",artType:"Painting"},{id:"a2",title:"Neon Dreams",artistName:"Dev K.",currentBid:120,startingBid:80,listingType:"auction",artType:"Digital"},{id:"a3",title:"Untitled No. 7",artistName:"Sara L.",price:95,listingType:"fixed",artType:"Drawing"},{id:"a4",title:"City Pulse",artistName:"James O.",currentBid:340,startingBid:200,listingType:"auction",artType:"Photography"},{id:"a5",title:"Soul Fragment",artistName:"Nia P.",price:175,listingType:"fixed",artType:"Mixed Media"},{id:"a6",title:"Bloom",artistName:"Chen W.",price:420,listingType:"fixed",artType:"Textile"}],eD=[{id:"s1",artistName:"Maya R.",title:"Painting Live Drop",viewerCount:84},{id:"s2",artistName:"Dev K.",title:"Digital Art Auction",viewerCount:217},{id:"s3",artistName:"Nia P.",title:"Mixed Media Session",viewerCount:41}];function tD(){const[t,e]=L.useState("All"),[n,r]=L.useState(Zb),[i,s]=L.useState(eD),[o,l]=L.useState("trending"),u=t==="All"?n:n.filter(c=>c.artType===t);return p.jsxs("div",{className:"page",children:[p.jsx(ls,{showSearch:!0}),p.jsxs("div",{className:"grain-overlay",style:{background:"linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal3) 100%)",padding:"var(--sp-8) var(--sp-4) var(--sp-10)",position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",top:-60,right:-60,width:200,height:200,background:"radial-gradient(circle, rgba(255,77,77,0.18) 0%, transparent 70%)",pointerEvents:"none"}}),p.jsx("div",{style:{position:"absolute",bottom:-40,left:-40,width:180,height:180,background:"radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",pointerEvents:"none"}}),p.jsxs("div",{style:{position:"relative",zIndex:2},children:[p.jsx("p",{style:{fontSize:"var(--text-xs)",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--coral)",marginBottom:"var(--sp-2)"},children:"Original art only"}),p.jsxs("h1",{style:{fontSize:"clamp(2rem, 8vw, 3.5rem)",marginBottom:"var(--sp-4)"},children:["The gallery",p.jsx("br",{}),"is always open."]}),p.jsx("p",{style:{color:"var(--slate)",maxWidth:340,fontSize:"var(--text-sm)"},children:"Buy one-of-a-kind pieces from independent artists — live or anytime."})]})]}),p.jsxs("div",{className:"container",style:{paddingTop:"var(--sp-6)"},children:[i.length>0&&p.jsxs("section",{style:{marginBottom:"var(--sp-8)"},children:[p.jsxs("div",{className:"section-header",children:[p.jsxs("span",{className:"section-title flex items-center gap-2",children:[p.jsx("span",{className:"live-dot"})," Live Now"]}),p.jsx("a",{href:"/live",className:"section-link",children:"See all"})]}),p.jsx("div",{style:{display:"flex",gap:"var(--sp-3)",overflowX:"auto",paddingBottom:"var(--sp-2)",scrollbarWidth:"none"},children:i.map(c=>p.jsx(sT,{show:c},c.id))})]}),p.jsx("div",{className:"flex gap-2 mb-4",children:[{key:"trending",label:"Trending",icon:Db},{key:"new",label:"New",icon:qb},{key:"ending",label:"Ending Soon",icon:Nb}].map(({key:c,label:f,icon:m})=>p.jsxs("button",{className:`chip ${o===c?"selected":""}`,onClick:()=>l(c),style:{display:"flex",alignItems:"center",gap:4},children:[p.jsx(m,{size:11})," ",f]},c))}),p.jsx("div",{className:"chips mb-4",style:{overflowX:"auto",flexWrap:"nowrap",paddingBottom:4},children:Jb.map(c=>p.jsx("button",{className:`chip ${t===c?"selected":""}`,onClick:()=>e(c),style:{flexShrink:0},children:c},c))}),p.jsx("div",{className:"art-grid",children:u.map(c=>p.jsx(up,{piece:c},c.id))}),u.length===0&&p.jsxs("div",{className:"text-center",style:{padding:"var(--sp-16) 0",color:"var(--slate)"},children:[p.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"var(--sp-4)"},children:"🎨"}),p.jsxs("p",{children:["No ",t," pieces yet."]}),p.jsx("p",{style:{fontSize:"var(--text-sm)",marginTop:4},children:"Be the first to list one!"})]})]})]})}const Hc=[{id:"s1",artistName:"Maya R.",title:"Painting Live Drop",viewerCount:84,artType:"Painting"},{id:"s2",artistName:"Dev K.",title:"Digital Art Auction",viewerCount:217,artType:"Digital"},{id:"s3",artistName:"Nia P.",title:"Mixed Media Session",viewerCount:41,artType:"Mixed Media"},{id:"s4",artistName:"James O.",title:"Photography & Prints",viewerCount:129,artType:"Photography"}],nD=[{id:"u1",artistName:"Sara L.",title:"Ink Drawing Drop",scheduledFor:"Today at 7 PM ET",artType:"Drawing"},{id:"u2",artistName:"Chen W.",title:"Textile Art Showcase",scheduledFor:"Tomorrow at 2 PM ET",artType:"Textile"},{id:"u3",artistName:"Alex T.",title:"Large Format Paintings",scheduledFor:"Sat at 6 PM ET",artType:"Painting"}];function rD(){const{user:t,isArtist:e}=qt(),n=Ht();return p.jsxs("div",{className:"page",children:[p.jsx(ls,{}),p.jsxs("div",{className:"container",style:{paddingTop:"var(--sp-4)"},children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsxs("h1",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)",display:"flex",alignItems:"center",gap:"var(--sp-3)"},children:[p.jsx("span",{className:"live-dot"})," Live Shows"]}),e&&p.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>n("/go-live"),children:[p.jsx(Do,{size:14})," Go Live"]})]}),Hc.length>0?p.jsxs("section",{style:{marginBottom:"var(--sp-8)"},children:[p.jsxs("div",{className:"section-header",children:[p.jsx("span",{className:"section-title",style:{fontSize:"var(--text-lg)"},children:"On Now"}),p.jsxs("span",{style:{fontSize:"var(--text-xs)",color:"var(--slate)"},children:[Hc.length," live"]})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--sp-3)"},children:Hc.map(r=>p.jsx(sT,{show:r},r.id))})]}):p.jsxs("div",{style:{textAlign:"center",padding:"var(--sp-10) 0",color:"var(--slate)",marginBottom:"var(--sp-8)"},children:[p.jsx(Do,{size:32,style:{margin:"0 auto var(--sp-4)",opacity:.3}}),p.jsx("p",{children:"No one is live right now."}),e&&p.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:"var(--sp-4)"},onClick:()=>n("/go-live"),children:"Be the first to go live"})]}),p.jsxs("section",{children:[p.jsx("div",{className:"section-header",children:p.jsxs("span",{className:"section-title",style:{fontSize:"var(--text-lg)",display:"flex",alignItems:"center",gap:8},children:[p.jsx(xb,{size:18})," Upcoming"]})}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--sp-3)"},children:nD.map(r=>p.jsxs("div",{style:{padding:"var(--sp-4)",background:"rgba(255,255,255,0.04)",borderRadius:"var(--r-md)",border:"1px solid rgba(255,248,240,0.08)",display:"flex",alignItems:"center",gap:"var(--sp-4)"},children:[p.jsx("div",{style:{width:44,height:44,borderRadius:"var(--r-sm)",background:"rgba(255,77,77,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",flexShrink:0},children:"🎨"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:600,fontSize:"var(--text-sm)",marginBottom:2},children:r.artistName}),p.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--slate)"},children:r.title})]}),p.jsxs("div",{style:{textAlign:"right",flexShrink:0},children:[p.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--gold)",fontWeight:600},children:r.scheduledFor}),p.jsx("button",{style:{marginTop:4,fontSize:"var(--text-xs)",color:"var(--coral)",background:"none",border:"none",cursor:"pointer",padding:0},children:"Remind me"})]})]},r.id))})]}),!t&&p.jsxs("div",{style:{marginTop:"var(--sp-8)",padding:"var(--sp-6)",background:"rgba(255,77,77,0.08)",borderRadius:"var(--r-lg)",border:"1px solid rgba(255,77,77,0.2)",textAlign:"center"},children:[p.jsx("p",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-lg)",marginBottom:"var(--sp-3)"},children:"Ready to bid?"}),p.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--slate)",marginBottom:"var(--sp-4)"},children:"Create a free account to join live shows and bid on art."}),p.jsx("button",{className:"btn btn-primary",onClick:()=>n("/auth"),children:"Join Indie Art Gallery"})]})]})]})}const iD=[{id:"b1",title:"Golden Hour",artistName:"Maya R.",price:280,listingType:"fixed",artType:"Painting",medium:"Acrylic on canvas"},{id:"b2",title:"Neon Dreams",artistName:"Dev K.",currentBid:120,startingBid:80,listingType:"auction",artType:"Digital"},{id:"b3",title:"Untitled No. 7",artistName:"Sara L.",price:95,listingType:"fixed",artType:"Drawing"},{id:"b4",title:"City Pulse",artistName:"James O.",currentBid:340,startingBid:200,listingType:"auction",artType:"Photography"},{id:"b5",title:"Soul Fragment",artistName:"Nia P.",price:175,listingType:"fixed",artType:"Mixed Media"},{id:"b6",title:"Bloom",artistName:"Chen W.",price:420,listingType:"fixed",artType:"Textile"},{id:"b7",title:"Dark Matter",artistName:"Alex T.",price:680,listingType:"fixed",artType:"Painting"},{id:"b8",title:"Frequency",artistName:"Jo M.",currentBid:55,startingBid:40,listingType:"auction",artType:"Digital"}],sD=[{value:"new",label:"Newest"},{value:"price-asc",label:"Price: Low to High"},{value:"price-desc",label:"Price: High to Low"},{value:"bids",label:"Most Bids"}],oD=["All","Painting","Drawing","Digital","Photography","Sculpture","Textile","Mixed Media","Print"],aD=["All","Buy Now","Auction"];function lD(){const[t,e]=L.useState(""),[n,r]=L.useState("All"),[i,s]=L.useState("All"),[o,l]=L.useState("new"),[u,c]=L.useState(!1),f=iD.filter(m=>{const y=!t||m.title.toLowerCase().includes(t.toLowerCase())||m.artistName.toLowerCase().includes(t.toLowerCase()),T=n==="All"||m.artType===n,x=i==="All"||(i==="Buy Now"?m.listingType==="fixed":m.listingType==="auction");return y&&T&&x});return p.jsxs("div",{className:"page",children:[p.jsx(ls,{}),p.jsxs("div",{className:"container",style:{paddingTop:"var(--sp-4)"},children:[p.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)",marginBottom:"var(--sp-4)"},children:"Browse Art"}),p.jsxs("div",{style:{position:"relative",marginBottom:"var(--sp-3)"},children:[p.jsx(tT,{size:16,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--slate)"}}),p.jsx("input",{className:"input",type:"text",placeholder:"Search by title or artist…",value:t,onChange:m=>e(m.target.value),style:{paddingLeft:40}})]}),p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsxs("button",{className:`chip ${u?"selected":""}`,onClick:()=>c(m=>!m),style:{display:"flex",alignItems:"center",gap:6},children:[p.jsx(Hb,{size:12})," Filters",(n!=="All"||i!=="All")&&p.jsx("span",{style:{background:"var(--coral)",color:"#fff",borderRadius:"50%",width:16,height:16,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:[n!=="All",i!=="All"].filter(Boolean).length})]}),p.jsx("select",{className:"input",value:o,onChange:m=>l(m.target.value),style:{width:"auto",padding:"8px 12px",fontSize:"var(--text-xs)"},children:sD.map(m=>p.jsx("option",{value:m.value,children:m.label},m.value))})]}),u&&p.jsxs("div",{style:{marginBottom:"var(--sp-4)",padding:"var(--sp-4)",background:"rgba(255,255,255,0.04)",borderRadius:"var(--r-md)",border:"1px solid rgba(255,248,240,0.08)"},children:[p.jsxs("div",{style:{marginBottom:"var(--sp-3)"},children:[p.jsx("div",{className:"input-label",style:{marginBottom:"var(--sp-2)"},children:"Art Type"}),p.jsx("div",{className:"chips",children:oD.map(m=>p.jsx("button",{className:`chip ${n===m?"selected":""}`,onClick:()=>r(m),children:m},m))})]}),p.jsxs("div",{children:[p.jsx("div",{className:"input-label",style:{marginBottom:"var(--sp-2)"},children:"Listing Type"}),p.jsx("div",{className:"chips",children:aD.map(m=>p.jsx("button",{className:`chip ${i===m?"selected":""}`,onClick:()=>s(m),children:m},m))})]}),(n!=="All"||i!=="All")&&p.jsx("button",{onClick:()=>{r("All"),s("All")},style:{marginTop:"var(--sp-3)",fontSize:"var(--text-xs)",color:"var(--coral)",background:"none",border:"none",cursor:"pointer",padding:0},children:"Clear all filters"})]}),p.jsxs("div",{style:{marginBottom:"var(--sp-3)",fontSize:"var(--text-xs)",color:"var(--slate)"},children:[f.length," ",f.length===1?"piece":"pieces"," found"]}),f.length>0?p.jsx("div",{className:"art-grid",children:f.map(m=>p.jsx(up,{piece:m},m.id))}):p.jsxs("div",{style:{textAlign:"center",padding:"var(--sp-16) 0",color:"var(--slate)"},children:[p.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"var(--sp-4)"},children:"🔍"}),p.jsx("p",{children:"No results. Try a different search or filter."})]})]})]})}const uD=["Painting","Drawing","Digital","Photography","Sculpture","Textile","Mixed Media","Print","Installation","Other"],Gy=[{id:"p1",title:"Golden Hour",artistName:"You",price:280,listingType:"fixed"},{id:"p2",title:"Neon Dreams",artistName:"You",currentBid:120,startingBid:80,listingType:"auction"}];function cD(){var P;const{user:t,profile:e,isArtist:n,logout:r}=qt(),i=Ht(),s=ta(),[o,l]=L.useState(!1),[u,c]=L.useState(!1),[f,m]=L.useState({bio:(e==null?void 0:e.bio)||"",instagram:(e==null?void 0:e.instagram)||"",website:(e==null?void 0:e.website)||"",artTypes:(e==null?void 0:e.artTypes)||[]});if(!t)return p.jsxs("div",{className:"page",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--sp-4)",minHeight:"80vh"},children:[p.jsx("div",{style:{fontSize:"3rem"},children:"🎨"}),p.jsx("h2",{style:{fontFamily:"var(--font-display)"},children:"Join Indie Art Gallery"}),p.jsx("p",{style:{color:"var(--slate)",textAlign:"center",maxWidth:280},children:"Sign in to manage your profile, list art, and go live."}),p.jsx("button",{className:"btn btn-primary btn-lg",onClick:()=>i("/auth"),children:"Sign In / Join Free"})]});const y=((P=e==null?void 0:e.displayName)==null?void 0:P.split(" ").map(E=>E[0]).join("").toUpperCase().slice(0,2))||"?";async function T(){c(!0);try{await DE(Vr(Mr,"users",t.uid),f),s.success("Profile saved."),l(!1)}catch{s.error("Could not save. Try again.")}finally{c(!1)}}function x(E){m(v=>({...v,artTypes:v.artTypes.includes(E)?v.artTypes.filter(w=>w!==E):[...v.artTypes,E]}))}return p.jsx("div",{className:"page",style:{paddingTop:"var(--sp-6)"},children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--sp-4)"},children:[p.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[p.jsx("div",{className:"avatar avatar-lg",style:{border:"3px solid var(--charcoal2)",fontSize:"var(--text-xl)"},children:y}),p.jsx("button",{style:{position:"absolute",bottom:0,right:0,width:24,height:24,borderRadius:"50%",background:"var(--coral)",border:"2px solid var(--charcoal)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:p.jsx(Cb,{size:11,color:"#fff"})})]}),p.jsxs("div",{style:{display:"flex",gap:"var(--sp-2)"},children:[p.jsxs("button",{className:"btn btn-ghost btn-sm",onClick:()=>l(E=>!E),children:[p.jsx(Wb,{size:13})," Edit"]}),p.jsx("button",{className:"btn btn-ghost btn-sm",onClick:async()=>{await r(),i("/auth")},children:p.jsx(Fb,{size:13})})]})]}),p.jsxs("div",{style:{marginBottom:"var(--sp-4)"},children:[p.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)"},children:e==null?void 0:e.displayName}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--sp-2)",marginTop:"var(--sp-2)",flexWrap:"wrap"},children:[(e==null?void 0:e.role)&&p.jsx("span",{className:"badge badge-slate",style:{textTransform:"capitalize"},children:e.role}),n&&p.jsx("span",{className:"badge badge-gold",children:"Artist"}),n&&(e==null?void 0:e.stripeAccountId)&&p.jsx("span",{className:"badge",style:{background:"rgba(46,204,113,0.15)",color:"var(--green-ok)"},children:"Payouts Active"})]}),(e==null?void 0:e.bio)&&p.jsx("p",{style:{marginTop:"var(--sp-3)",fontSize:"var(--text-sm)",color:"var(--slate)",lineHeight:1.6},children:e.bio})]}),p.jsx("div",{style:{display:"flex",gap:"var(--sp-4)",paddingBottom:"var(--sp-4)",borderBottom:"1px solid rgba(255,248,240,0.08)",marginBottom:"var(--sp-4)"},children:[["0","Listed"],["0","Sold"],["0","Followers"]].map(([E,v])=>p.jsxs("div",{style:{textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-xl)",fontWeight:700,color:"var(--coral)"},children:E}),p.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--slate)",textTransform:"uppercase",letterSpacing:"0.08em"},children:v})]},v))}),o&&p.jsxs("div",{style:{marginBottom:"var(--sp-6)",padding:"var(--sp-5)",background:"rgba(255,255,255,0.04)",borderRadius:"var(--r-lg)",border:"1px solid rgba(255,248,240,0.08)"},children:[p.jsx("h4",{style:{marginBottom:"var(--sp-4)"},children:"Edit Profile"}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--sp-4)"},children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Bio"}),p.jsx("textarea",{className:"input",placeholder:"Tell the world about your art",value:f.bio,onChange:E=>m(v=>({...v,bio:E.target.value}))})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Instagram"}),p.jsx("input",{className:"input",type:"text",placeholder:"@handle",value:f.instagram,onChange:E=>m(v=>({...v,instagram:E.target.value}))})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Website"}),p.jsx("input",{className:"input",type:"url",placeholder:"https://yoursite.com",value:f.website,onChange:E=>m(v=>({...v,website:E.target.value}))})]}),n&&p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Art Types"}),p.jsx("div",{className:"chips",style:{marginTop:"var(--sp-2)"},children:uD.map(E=>p.jsx("button",{className:`chip ${f.artTypes.includes(E)?"selected":""}`,onClick:()=>x(E),type:"button",children:E},E))})]}),p.jsxs("div",{style:{display:"flex",gap:"var(--sp-3)"},children:[p.jsx("button",{className:"btn btn-ghost",onClick:()=>l(!1),style:{flex:1},children:"Cancel"}),p.jsx("button",{className:"btn btn-primary",onClick:T,disabled:u,style:{flex:2},children:u?"Saving":"Save Profile"})]})]})]}),n&&p.jsxs("div",{style:{marginBottom:"var(--sp-6)",display:"flex",flexDirection:"column",gap:"var(--sp-3)"},children:[p.jsxs("div",{style:{display:"flex",gap:"var(--sp-3)"},children:[p.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:()=>i("/list"),children:[p.jsx(Hy,{size:16})," List Art"]}),p.jsxs("button",{className:"btn btn-gold",style:{flex:1},onClick:()=>i("/go-live"),children:[p.jsx(Do,{size:16})," Go Live"]})]}),p.jsxs("button",{className:"btn btn-ghost btn-full",onClick:()=>i("/connect-stripe"),children:[p.jsx(eT,{size:16}),e!=null&&e.stripeAccountId?"Manage Payouts":"Connect Bank Account to Get Paid"]})]}),n&&p.jsxs("section",{children:[p.jsxs("div",{className:"section-header",children:[p.jsx("span",{className:"section-title",children:"My Listings"}),p.jsxs("a",{href:"/list",className:"section-link",style:{display:"flex",alignItems:"center",gap:4},children:[p.jsx(Hy,{size:12})," Add"]})]}),Gy.length>0?p.jsx("div",{className:"art-grid",children:Gy.map(E=>p.jsx(up,{piece:E},E.id))}):p.jsxs("div",{style:{padding:"var(--sp-10) 0",textAlign:"center",color:"var(--slate)"},children:[p.jsx(Kb,{size:32,style:{margin:"0 auto var(--sp-4)",opacity:.4}}),p.jsx("p",{children:"No listings yet."}),p.jsx("button",{className:"btn btn-primary btn-sm",style:{marginTop:"var(--sp-4)"},onClick:()=>i("/list"),children:"List your first piece"})]})]})]})})}const hD=[{value:"buyer",label:"Buyer",desc:"Discover and collect art",icon:Oo},{value:"artist",label:"Artist",desc:"Sell your original work",icon:$b},{value:"both",label:"Artist + Buyer",desc:"Buy and sell on the platform",icon:jb}];function dD(){const[t,e]=L.useState("login"),[n,r]=L.useState(1),[i,s]=L.useState(!1),[o,l]=L.useState(!1),[u,c]=L.useState({email:"",password:"",displayName:"",role:""}),{login:f,signup:m}=qt(),y=ta(),T=Ht(),x=(v,w)=>c(A=>({...A,[v]:w}));async function P(v){v.preventDefault(),l(!0);try{await f({email:u.email,password:u.password}),T("/")}catch(w){y.error(w.message.includes("invalid")?"Wrong email or password.":w.message)}finally{l(!1)}}async function E(v){if(v.preventDefault(),!u.role){y.error("Pick a role to continue.");return}l(!0);try{await m(u),y.success("Welcome to Indie Art Gallery!"),T("/")}catch(w){y.error(w.message.includes("email-already")?"That email is already in use.":w.message)}finally{l(!1)}}return p.jsxs("div",{style:{minHeight:"100dvh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"var(--sp-6)",position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,background:"radial-gradient(ellipse at 70% 20%, rgba(255,77,77,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(255,215,0,0.08) 0%, transparent 60%)",pointerEvents:"none"}}),p.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:420,margin:"0 auto",width:"100%"},children:[p.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--sp-8)"},children:[p.jsxs("div",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-3xl)",fontWeight:900,letterSpacing:"-0.04em",lineHeight:1},children:["Indie",p.jsx("span",{style:{color:"var(--coral)"},children:"Art"})]}),p.jsx("div",{style:{color:"var(--slate)",fontSize:"var(--text-xs)",letterSpacing:"0.12em",textTransform:"uppercase",marginTop:6},children:"Gallery"})]}),p.jsx("div",{style:{display:"flex",background:"rgba(255,255,255,0.05)",borderRadius:"var(--r-full)",padding:4,marginBottom:"var(--sp-6)"},children:["login","signup"].map(v=>p.jsx("button",{onClick:()=>{e(v),r(1)},style:{flex:1,padding:"10px 0",border:"none",cursor:"pointer",borderRadius:"var(--r-full)",fontSize:"var(--text-sm)",fontWeight:600,fontFamily:"var(--font-body)",letterSpacing:"0.04em",textTransform:"capitalize",background:t===v?"var(--coral)":"transparent",color:t===v?"#fff":"var(--slate)",transition:"all var(--t-fast)"},children:v==="login"?"Sign In":"Join Free"},v))}),t==="login"&&p.jsxs("form",{onSubmit:P,style:{display:"flex",flexDirection:"column",gap:"var(--sp-4)"},children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Email"}),p.jsx("input",{className:"input",type:"email",placeholder:"your@email.com",required:!0,value:u.email,onChange:v=>x("email",v.target.value)})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Password"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("input",{className:"input",type:i?"text":"password",placeholder:"••••••••",required:!0,value:u.password,onChange:v=>x("password",v.target.value),style:{paddingRight:48}}),p.jsx("button",{type:"button",onClick:()=>s(v=>!v),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"var(--slate)",cursor:"pointer"},children:i?p.jsx(Wy,{size:16}):p.jsx(fd,{size:16})})]})]}),p.jsx("button",{className:"btn btn-primary btn-lg btn-full",type:"submit",disabled:o,children:o?"Signing in…":"Sign In"})]}),t==="signup"&&n===1&&p.jsxs("form",{onSubmit:v=>{v.preventDefault(),r(2)},style:{display:"flex",flexDirection:"column",gap:"var(--sp-4)"},children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Display Name"}),p.jsx("input",{className:"input",type:"text",placeholder:"How the world knows you",required:!0,value:u.displayName,onChange:v=>x("displayName",v.target.value)})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Email"}),p.jsx("input",{className:"input",type:"email",placeholder:"your@email.com",required:!0,value:u.email,onChange:v=>x("email",v.target.value)})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Password"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("input",{className:"input",type:i?"text":"password",placeholder:"Min 8 characters",required:!0,minLength:8,value:u.password,onChange:v=>x("password",v.target.value),style:{paddingRight:48}}),p.jsx("button",{type:"button",onClick:()=>s(v=>!v),style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"var(--slate)",cursor:"pointer"},children:i?p.jsx(Wy,{size:16}):p.jsx(fd,{size:16})})]})]}),p.jsx("button",{className:"btn btn-primary btn-lg btn-full",type:"submit",children:"Continue →"})]}),t==="signup"&&n===2&&p.jsxs("form",{onSubmit:E,style:{display:"flex",flexDirection:"column",gap:"var(--sp-4)"},children:[p.jsxs("div",{style:{marginBottom:"var(--sp-2)"},children:[p.jsx("h3",{style:{fontFamily:"var(--font-display)",marginBottom:4},children:"How are you joining?"}),p.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--slate)"},children:"You can always change this later."})]}),hD.map(({value:v,label:w,desc:A,icon:D})=>p.jsxs("div",{onClick:()=>x("role",v),style:{display:"flex",alignItems:"center",gap:"var(--sp-4)",padding:"var(--sp-4)",border:`2px solid ${u.role===v?"var(--coral)":"rgba(255,248,240,0.1)"}`,borderRadius:"var(--r-md)",background:u.role===v?"var(--coral-soft)":"transparent",cursor:"pointer",transition:"all var(--t-fast)"},children:[p.jsx("div",{style:{width:42,height:42,borderRadius:"var(--r-md)",background:u.role===v?"var(--coral)":"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(D,{size:20,color:u.role===v?"#fff":"var(--slate)"})}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:600,fontSize:"var(--text-sm)"},children:w}),p.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--slate)"},children:A})]})]},v)),p.jsxs("div",{className:"flex gap-3",style:{marginTop:"var(--sp-2)"},children:[p.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>r(1),style:{flex:1},children:"← Back"}),p.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:2},disabled:!u.role||o,children:o?"Creating account…":"Create Account"})]})]}),p.jsxs("p",{style:{textAlign:"center",fontSize:"var(--text-xs)",color:"var(--slate)",marginTop:"var(--sp-6)",lineHeight:1.6},children:["By joining, you agree to our ",p.jsx("span",{style:{color:"var(--coral)"},children:"Terms of Service"})," and ",p.jsx("span",{style:{color:"var(--coral)"},children:"Community Rules"}),". All art must be your own original work."]})]})]})}const fD=["Painting","Drawing","Digital","Photography","Sculpture","Textile","Mixed Media","Print","Installation","Other"];function pD(){const{user:t,profile:e}=qt(),n=ta(),r=Ht(),i=L.useRef(),[s,o]=L.useState({title:"",description:"",artType:"",medium:"",dimensions:"",year:new Date().getFullYear().toString(),listingType:"fixed",price:"",startingBid:"",auctionDuration:"24",deliveryType:"physical",allowOffers:!1,isOriginal:!1}),[l,u]=L.useState(null),[c,f]=L.useState(null),[m,y]=L.useState(!1),T=(E,v)=>o(w=>({...w,[E]:v}));function x(E){const v=E.target.files[0];if(v){if(v.size>10*1024*1024){n.error("Image must be under 10MB.");return}u(v),f(URL.createObjectURL(v))}}async function P(E){if(E.preventDefault(),!s.isOriginal){n.error("Confirm this is your original work.");return}if(!s.artType){n.error("Select an art type.");return}y(!0);try{let v="";if(l){const D=gb(Tb,`art/${t.uid}/${Date.now()}_${l.name}`),U=await pb(D,l);v=await mb(U.ref)}const w={...s,price:s.listingType==="fixed"?parseFloat(s.price):null,startingBid:s.listingType==="auction"?parseFloat(s.startingBid):null,currentBid:null,imageUrl:v,artistId:t.uid,artistName:(e==null?void 0:e.displayName)||"Unknown Artist",status:"active",bidCount:0,viewCount:0,wishlistCount:0,createdAt:OE(),soldAt:null,buyerId:null},A=await rN(z2(Mr,"listings"),w);n.success("Listing published!"),r(`/piece/${A.id}`)}catch(v){n.error("Could not publish. Try again."),console.error(v)}finally{y(!1)}}return p.jsxs("div",{className:"page",children:[p.jsx(ls,{title:"List a Piece",back:!0}),p.jsx("div",{className:"container",style:{paddingTop:"var(--sp-6)",maxWidth:560},children:p.jsxs("form",{onSubmit:P,style:{display:"flex",flexDirection:"column",gap:"var(--sp-5)"},children:[p.jsxs("div",{children:[p.jsx("div",{className:"input-label",style:{marginBottom:"var(--sp-3)"},children:"Artwork Photo *"}),c?p.jsxs("div",{style:{position:"relative"},children:[p.jsx("img",{src:c,alt:"Preview",style:{width:"100%",maxHeight:320,objectFit:"contain",borderRadius:"var(--r-md)",background:"rgba(255,255,255,0.04)"}}),p.jsx("button",{type:"button",onClick:()=>{u(null),f(null)},style:{position:"absolute",top:8,right:8,background:"rgba(0,0,0,0.7)",border:"none",color:"#fff",borderRadius:"var(--r-full)",padding:"4px 10px",cursor:"pointer",fontSize:"var(--text-xs)"},children:"Change"})]}):p.jsxs("div",{onClick:()=>{var E;return(E=i.current)==null?void 0:E.click()},style:{border:"2px dashed rgba(255,248,240,0.15)",borderRadius:"var(--r-md)",padding:"var(--sp-10)",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--sp-3)",cursor:"pointer",transition:"border-color var(--t-fast)"},onMouseEnter:E=>E.currentTarget.style.borderColor="var(--coral)",onMouseLeave:E=>E.currentTarget.style.borderColor="rgba(255,248,240,0.15)",children:[p.jsx(Gb,{size:28,color:"var(--slate)"}),p.jsx("span",{style:{color:"var(--slate)",fontSize:"var(--text-sm)"},children:"Tap to upload photo"}),p.jsx("span",{style:{color:"var(--slate)",fontSize:"var(--text-xs)"},children:"JPG, PNG, WEBP — Max 10MB"})]}),p.jsx("input",{ref:i,type:"file",accept:"image/*",onChange:x,style:{display:"none"}})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Title *"}),p.jsx("input",{className:"input",required:!0,placeholder:"What's this piece called?",value:s.title,onChange:E=>T("title",E.target.value)})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Description"}),p.jsx("textarea",{className:"input",placeholder:"Tell buyers about this piece — what inspired it, your process, materials…",value:s.description,onChange:E=>T("description",E.target.value)})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Art Type *"}),p.jsx("div",{className:"chips",children:fD.map(E=>p.jsx("button",{type:"button",className:`chip ${s.artType===E?"selected":""}`,onClick:()=>T("artType",E),children:E},E))})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--sp-3)"},children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Medium"}),p.jsx("input",{className:"input",placeholder:"Oil on canvas…",value:s.medium,onChange:E=>T("medium",E.target.value)})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Year"}),p.jsx("input",{className:"input",type:"number",min:"1900",max:"2099",value:s.year,onChange:E=>T("year",E.target.value)})]})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Dimensions (optional)"}),p.jsx("input",{className:"input",placeholder:'e.g. 24" × 36" or 8.5" × 11"',value:s.dimensions,onChange:E=>T("dimensions",E.target.value)})]}),p.jsx("div",{className:"divider"}),p.jsxs("div",{children:[p.jsx("div",{className:"input-label",style:{marginBottom:"var(--sp-3)"},children:"Delivery Type *"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--sp-3)"},children:[{value:"physical",label:"Physical",desc:"Buyer pays shipping",icon:zb},{value:"digital",label:"Digital",desc:"File unlocks on payment",icon:Bb}].map(({value:E,label:v,desc:w,icon:A})=>p.jsxs("div",{onClick:()=>T("deliveryType",E),style:{padding:"var(--sp-4)",border:`2px solid ${s.deliveryType===E?"var(--coral)":"rgba(255,248,240,0.1)"}`,borderRadius:"var(--r-md)",cursor:"pointer",background:s.deliveryType===E?"var(--coral-soft)":"transparent",transition:"all var(--t-fast)",display:"flex",flexDirection:"column",gap:4},children:[p.jsx(A,{size:18,color:s.deliveryType===E?"var(--coral)":"var(--slate)"}),p.jsx("div",{style:{fontWeight:600,fontSize:"var(--text-sm)"},children:v}),p.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--slate)"},children:w})]},E))})]}),p.jsx("div",{className:"divider"}),p.jsxs("div",{children:[p.jsx("div",{className:"input-label",style:{marginBottom:"var(--sp-3)"},children:"Listing Type *"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--sp-3)"},children:[{value:"fixed",label:"Fixed Price",desc:"Set your price",icon:lp},{value:"auction",label:"Auction",desc:"Let buyers bid",icon:Ob}].map(({value:E,label:v,desc:w,icon:A})=>p.jsxs("div",{onClick:()=>T("listingType",E),style:{padding:"var(--sp-4)",border:`2px solid ${s.listingType===E?"var(--coral)":"rgba(255,248,240,0.1)"}`,borderRadius:"var(--r-md)",cursor:"pointer",background:s.listingType===E?"var(--coral-soft)":"transparent",transition:"all var(--t-fast)",display:"flex",flexDirection:"column",gap:4},children:[p.jsx(A,{size:18,color:s.listingType===E?"var(--coral)":"var(--slate)"}),p.jsx("div",{style:{fontWeight:600,fontSize:"var(--text-sm)"},children:v}),p.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--slate)"},children:w})]},E))})]}),s.listingType==="fixed"&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Price (USD) *"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("span",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--slate)",fontFamily:"var(--font-mono)"},children:"$"}),p.jsx("input",{className:"input",type:"number",min:"1",step:"0.01",required:!0,placeholder:"0.00",value:s.price,onChange:E=>T("price",E.target.value),style:{paddingLeft:28}})]})]}),p.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--sp-3)",cursor:"pointer",fontSize:"var(--text-sm)"},children:[p.jsx("input",{type:"checkbox",checked:s.allowOffers,onChange:E=>T("allowOffers",E.target.checked),style:{width:18,height:18,accentColor:"var(--coral)",cursor:"pointer"}}),"Allow buyers to make offers"]})]}),s.listingType==="auction"&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Starting Bid (USD) *"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("span",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--slate)",fontFamily:"var(--font-mono)"},children:"$"}),p.jsx("input",{className:"input",type:"number",min:"1",step:"0.01",required:!0,placeholder:"0.00",value:s.startingBid,onChange:E=>T("startingBid",E.target.value),style:{paddingLeft:28}})]})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Auction Duration"}),p.jsxs("select",{className:"input",value:s.auctionDuration,onChange:E=>T("auctionDuration",E.target.value),children:[p.jsx("option",{value:"12",children:"12 hours"}),p.jsx("option",{value:"24",children:"24 hours"}),p.jsx("option",{value:"48",children:"48 hours"}),p.jsx("option",{value:"72",children:"3 days"}),p.jsx("option",{value:"168",children:"7 days"})]})]})]}),p.jsx("div",{className:"divider"}),p.jsxs("div",{style:{padding:"var(--sp-4)",background:"var(--gold-soft)",borderRadius:"var(--r-md)",border:"1px solid rgba(255,215,0,0.2)"},children:[p.jsx("div",{style:{fontSize:"var(--text-xs)",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"var(--sp-2)"},children:"Platform Fee"}),p.jsxs("div",{style:{fontSize:"var(--text-sm)",color:"var(--cream)",lineHeight:1.6},children:[s.price&&parseFloat(s.price)>=500?"4% on sales $500+":s.price&&parseFloat(s.price)>=100?"6% on sales $100–$499":"8% on sales under $100"," ","— deducted from your payout after delivery is confirmed."]})]}),p.jsxs("label",{style:{display:"flex",alignItems:"flex-start",gap:"var(--sp-3)",cursor:"pointer",fontSize:"var(--text-sm)",lineHeight:1.5},children:[p.jsx("input",{type:"checkbox",required:!0,checked:s.isOriginal,onChange:E=>T("isOriginal",E.target.checked),style:{width:18,height:18,accentColor:"var(--coral)",cursor:"pointer",flexShrink:0,marginTop:2}}),"I confirm this is my original work and I own all rights to sell it. Fraud results in permanent ban."]}),p.jsx("button",{className:"btn btn-primary btn-lg btn-full",type:"submit",disabled:m,children:m?"Publishing…":"Publish Listing"})]})})]})}const mD=[{label:"Total Users",value:"0",icon:rT,color:"var(--coral)"},{label:"Active Listings",value:"0",icon:Oo,color:"var(--gold)"},{label:"Total Revenue",value:"$0",icon:lp,color:"var(--green-ok)"},{label:"Flagged Users",value:"0",icon:nT,color:"#FF8C00"}];function gD(){const{isAdmin:t,profile:e}=qt(),n=Ht();ta();const[r,i]=L.useState("overview"),[s,o]=L.useState([]);return L.useEffect(()=>{t||n("/")},[t]),t?p.jsxs("div",{className:"page",children:[p.jsx(ls,{title:"Admin",back:!0}),p.jsxs("div",{className:"container",style:{paddingTop:"var(--sp-4)"},children:[p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--sp-3)",marginBottom:"var(--sp-6)"},children:mD.map(({label:l,value:u,icon:c,color:f})=>p.jsxs("div",{style:{padding:"var(--sp-4)",background:"rgba(255,255,255,0.04)",borderRadius:"var(--r-md)",border:"1px solid rgba(255,248,240,0.08)"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--sp-2)",marginBottom:"var(--sp-2)"},children:[p.jsx(c,{size:14,color:f}),p.jsx("span",{style:{fontSize:"var(--text-xs)",color:"var(--slate)",textTransform:"uppercase",letterSpacing:"0.06em"},children:l})]}),p.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"var(--text-2xl)",fontWeight:700,color:f},children:u})]},l))}),p.jsx("div",{className:"flex gap-2 mb-6",children:["overview","users","listings","payouts"].map(l=>p.jsx("button",{className:`chip ${r===l?"selected":""}`,onClick:()=>i(l),style:{textTransform:"capitalize"},children:l},l))}),r==="overview"&&p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--sp-4)"},children:[p.jsxs("div",{style:{padding:"var(--sp-5)",background:"rgba(255,255,255,0.04)",borderRadius:"var(--r-md)",border:"1px solid rgba(255,248,240,0.08)"},children:[p.jsxs("h4",{style:{marginBottom:"var(--sp-3)",display:"flex",alignItems:"center",gap:8},children:[p.jsx(Do,{size:16,color:"var(--coral)"})," Live Activity"]}),p.jsx("p",{style:{color:"var(--slate)",fontSize:"var(--text-sm)"},children:"No shows currently live."})]}),p.jsxs("div",{style:{padding:"var(--sp-5)",background:"rgba(255,255,255,0.04)",borderRadius:"var(--r-md)",border:"1px solid rgba(255,248,240,0.08)"},children:[p.jsxs("h4",{style:{marginBottom:"var(--sp-3)",display:"flex",alignItems:"center",gap:8},children:[p.jsx(Oo,{size:16,color:"var(--gold)"})," Recent Sales"]}),p.jsx("p",{style:{color:"var(--slate)",fontSize:"var(--text-sm)"},children:"No sales yet."})]}),p.jsxs("div",{style:{padding:"var(--sp-5)",background:"rgba(255,255,255,0.04)",borderRadius:"var(--r-md)",border:"1px solid rgba(255,248,240,0.08)"},children:[p.jsxs("h4",{style:{marginBottom:"var(--sp-3)",display:"flex",alignItems:"center",gap:8},children:[p.jsx(nT,{size:16,color:"#FF8C00"})," Flagged / Reports"]}),p.jsx("p",{style:{color:"var(--slate)",fontSize:"var(--text-sm)"},children:"No active reports."})]})]}),r==="users"&&p.jsx("div",{children:p.jsxs("div",{style:{padding:"var(--sp-6)",textAlign:"center",color:"var(--slate)"},children:[p.jsx(rT,{size:32,style:{margin:"0 auto var(--sp-3)",opacity:.3}}),p.jsx("p",{children:"User list loads from Firebase when real accounts are created."})]})}),r==="listings"&&p.jsx("div",{children:p.jsxs("div",{style:{padding:"var(--sp-6)",textAlign:"center",color:"var(--slate)"},children:[p.jsx(Oo,{size:32,style:{margin:"0 auto var(--sp-3)",opacity:.3}}),p.jsx("p",{children:"All active listings will appear here."})]})}),r==="payouts"&&p.jsx("div",{children:p.jsxs("div",{style:{padding:"var(--sp-6)",textAlign:"center",color:"var(--slate)"},children:[p.jsx(lp,{size:32,style:{margin:"0 auto var(--sp-3)",opacity:.3}}),p.jsx("p",{children:"Pending and completed payouts will appear here."})]})})]})]}):null}function yD(){const{user:t,profile:e,refreshProfile:n}=qt(),r=ta(),i=Ht(),[s,o]=L.useState(!1),l=!!(e!=null&&e.stripeAccountId);async function u(){o(!0);try{const c=await fetch("/.netlify/functions/stripe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"create_account",data:{}})}),{accountId:f}=await c.json();await DE(Vr(Mr,"users",t.uid),{stripeAccountId:f});const m=await fetch("/.netlify/functions/stripe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"create_account_link",data:{accountId:f,returnUrl:window.location.origin}})}),{url:y}=await m.json();window.location.href=y}catch(c){r.error("Could not connect Stripe. Try again."),console.error(c)}finally{o(!1)}}return p.jsxs("div",{className:"page",children:[p.jsx(ls,{title:"Get Paid",back:!0}),p.jsx("div",{className:"container",style:{paddingTop:"var(--sp-8)",maxWidth:480},children:l?p.jsxs("div",{style:{textAlign:"center",padding:"var(--sp-10) 0"},children:[p.jsx(dd,{size:48,color:"var(--green-ok)",style:{margin:"0 auto var(--sp-4)"}}),p.jsx("h2",{style:{fontFamily:"var(--font-display)",marginBottom:"var(--sp-3)"},children:"You're set up to get paid"}),p.jsx("p",{style:{color:"var(--slate)",fontSize:"var(--text-sm)",marginBottom:"var(--sp-6)"},children:"Your Stripe account is connected. You'll receive payouts after buyers confirm delivery."}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>i("/profile"),children:"Back to Profile"})]}):p.jsxs("div",{children:[p.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--sp-8)"},children:[p.jsx("div",{style:{width:72,height:72,borderRadius:"var(--r-lg)",background:"rgba(255,77,77,0.1)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto var(--sp-4)"},children:p.jsx(eT,{size:32,color:"var(--coral)"})}),p.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-2xl)",marginBottom:"var(--sp-3)"},children:"Connect your bank account"}),p.jsx("p",{style:{color:"var(--slate)",fontSize:"var(--text-sm)",lineHeight:1.7},children:"We use Stripe to send your earnings directly to your bank account. It's free and takes about 2 minutes."})]}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--sp-3)",marginBottom:"var(--sp-8)"},children:["Free to set up — no monthly fees","Payouts after buyer confirms delivery","Stripe handles all security and compliance","Earnings deposited directly to your bank"].map(c=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--sp-3)",fontSize:"var(--text-sm)"},children:[p.jsx(dd,{size:16,color:"var(--green-ok)",style:{flexShrink:0}}),c]},c))}),p.jsxs("button",{className:"btn btn-primary btn-lg btn-full",onClick:u,disabled:s,children:[p.jsx(bb,{size:16}),s?"Connecting…":"Connect with Stripe"]}),p.jsx("p",{style:{textAlign:"center",fontSize:"var(--text-xs)",color:"var(--slate)",marginTop:"var(--sp-4)"},children:"You'll be redirected to Stripe to complete setup safely."})]})})]})}function Qy({children:t}){const{user:e,loading:n}=qt();return n?p.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100dvh",color:"var(--slate)"},children:"Loading…"}):e?t:p.jsx(Io,{to:"/auth",replace:!0})}function vD({children:t}){const{user:e,isArtist:n,loading:r}=qt();return r?null:e?n?t:p.jsx(Io,{to:"/profile",replace:!0}):p.jsx(Io,{to:"/auth",replace:!0})}function _D(){const{user:t}=qt();return p.jsxs(p.Fragment,{children:[p.jsxs(nA,{children:[p.jsx(Gt,{path:"/",element:p.jsx(tD,{})}),p.jsx(Gt,{path:"/live",element:p.jsx(rD,{})}),p.jsx(Gt,{path:"/store",element:p.jsx(lD,{})}),p.jsx(Gt,{path:"/auth",element:t?p.jsx(Io,{to:"/",replace:!0}):p.jsx(dD,{})}),p.jsx(Gt,{path:"/profile",element:p.jsx(cD,{})}),p.jsx(Gt,{path:"/list",element:p.jsx(vD,{children:p.jsx(pD,{})})}),p.jsx(Gt,{path:"/connect-stripe",element:p.jsx(Qy,{children:p.jsx(yD,{})})}),p.jsx(Gt,{path:"/admin",element:p.jsx(Qy,{children:p.jsx(gD,{})})}),p.jsx(Gt,{path:"*",element:p.jsx(Io,{to:"/",replace:!0})})]}),!["/auth"].includes(window.location.pathname)&&p.jsx(Xb,{})]})}qc.createRoot(document.getElementById("root")).render(p.jsx(ov.StrictMode,{children:p.jsx(sA,{children:p.jsx(Ib,{children:p.jsx(Yb,{children:p.jsx(_D,{})})})})}));
