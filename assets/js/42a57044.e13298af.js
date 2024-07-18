/*! For license information please see 42a57044.e13298af.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[770884],{702304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=r(824246),o=r(511151);const i={id:"provider",title:"Bitbucket Server Authentication Provider",sidebar_label:"Bitbucket Server",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage"},c=void 0,u={id:"auth/bitbucketServer/provider",title:"Bitbucket Server Authentication Provider",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/bitbucketServer/provider.md",sourceDirName:"auth/bitbucketServer",slug:"/auth/bitbucketServer/provider",permalink:"/docs/auth/bitbucketServer/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/bitbucketServer/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Bitbucket Server Authentication Provider",sidebar_label:"Bitbucket Server",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Bitbucket",permalink:"/docs/auth/bitbucket/provider"},next:{title:"Cloudflare Access",permalink:"/docs/auth/cloudflare/provider"}},a={},s=[{value:"Create an Application Link in Bitbucket Server",id:"create-an-application-link-in-bitbucket-server",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2},{value:"Using Bitbucket Server for sign-in",id:"using-bitbucket-server-for-sign-in",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Backstage ",(0,n.jsx)(t.code,{children:"core-plugin-api"})," package comes with a Bitbucket Server authentication provider that can authenticate\nusers using Bitbucket Server. This does ",(0,n.jsx)(t.strong,{children:"NOT"})," work with Bitbucket Cloud."]}),"\n",(0,n.jsx)(t.h2,{id:"create-an-application-link-in-bitbucket-server",children:"Create an Application Link in Bitbucket Server"}),"\n",(0,n.jsxs)(t.p,{children:["To add Bitbucket Server authentication, you must create an incoming application link. Follow the steps described in\nthe ",(0,n.jsx)(t.a,{href:"https://confluence.atlassian.com/bitbucketserver/configure-an-incoming-link-1108483657.html",children:"Bitbucket Server documentation"}),"\nto create one."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,n.jsx)(t.code,{children:"app-config.yaml"})," under the root ",(0,n.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    bitbucketServer:\n      development:\n        host: bitbucket.org\n        clientId: ${AUTH_BITBUCKET_SERVER_CLIENT_ID}\n        clientSecret: ${AUTH_BITBUCKET_SERVER_CLIENT_SECRET}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The Bitbucket Server provider is a structure with two configuration keys:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"clientId"}),": The client ID that was generated by Bitbucket, e.g. ",(0,n.jsx)(t.code,{children:"b0f868455c15dcdff5c5fb5d173ae684"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"clientSecret"}),": The client secret tied to the generated client ID."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,n.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,n.jsx)(t.code,{children:"bitbucketServerAuthApi"})," reference and ",(0,n.jsx)(t.code,{children:"SignInPage"})," component as shown\nin ",(0,n.jsx)(t.a,{href:"/docs/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"using-bitbucket-server-for-sign-in",children:"Using Bitbucket Server for sign-in"}),"\n",(0,n.jsxs)(t.p,{children:["In order to use the Bitbucket Server provider for sign-in, you must configure it with a ",(0,n.jsx)(t.code,{children:"signIn.resolver"}),". See\nthe ",(0,n.jsx)(t.a,{href:"/docs/auth/identity-resolver",children:"Sign-In Resolver documentation"})," for more details on how this is done. Note that for the\nBitbucket Server provider, you'll want to use ",(0,n.jsx)(t.code,{children:"bitbucketServer"})," as the provider ID,\nand ",(0,n.jsx)(t.code,{children:"providers.bitbucketServer.create"})," for the provider factory."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," plugin also comes with a built-in resolver that can be used if desired.\nThe ",(0,n.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"})," identifies users by matching their Bitbucket Server email address to the email\naddress of ",(0,n.jsx)(t.code,{children:"User"})," entities in the catalog. Note that you must populate your catalog with matching entities or users will\nnot be able to sign in with this resolver."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:u.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,b={};function y(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function k(){}function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var g=m.prototype=new k;g.constructor=m,v(g,y.prototype),g.isPureReactComponent=!0;var _=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,i={},c=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,o)&&!x.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:r,type:e,key:c,ref:u,props:i,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function B(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,i,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return c=c(a=e),e=""===i?"."+B(a,0):i,_(c)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),R(c,t,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),t.push(c)),1;if(a=0,i=""===i?".":i+":",_(e))for(var s=0;s<e.length;s++){var l=i+B(u=e[s],s);a+=R(u,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)a+=R(u=u.value,t,o,l=i+B(u,s++),c);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function T(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},A={transition:null},O={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:A,ReactCurrentOwner:j};t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=c,t.PureComponent=m,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=v({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)S.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:r,type:e.type,key:i,ref:c,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>c});var n=r(667294);const o={},i=n.createContext(o);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);