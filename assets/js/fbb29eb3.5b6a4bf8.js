/*! For license information please see fbb29eb3.5b6a4bf8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[477661],{400459:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=r(824246),o=r(511151);const a={id:"plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap"},i=void 0,s={id:"reference/plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap",permalink:"/docs/reference/plugin-catalog-backend-module-ldap",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap"}},l={},d=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})]}),"\n",(0,t.jsx)(n.p,{children:"A Backstage catalog backend module that helps integrate towards LDAP"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapclient",children:"LdapClient"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.p,{children:["Basic wrapper for the ",(0,t.jsx)(n.code,{children:"ldapjs"})," library."]}),(0,t.jsx)(n.p,{children:"Helps out with promisifying calls, paging, binding etc."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"})}),(0,t.jsx)(n.td,{children:"Reads user and group entries out of an LDAP service, and provides them as User and Group entities for the catalog."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor",children:"LdapOrgReaderProcessor"})}),(0,t.jsx)(n.td,{children:"Extracts teams and users out of an LDAP server."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer",children:"defaultGroupTransformer(vendor, config, entry)"})}),(0,t.jsx)(n.td,{children:"The default implementation of the transformation from an LDAP entry to a Group entity."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultusertransformer",children:"defaultUserTransformer(vendor, config, entry)"})}),(0,t.jsx)(n.td,{children:"The default implementation of the transformation from an LDAP entry to a User entity."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.mapstringattr",children:"mapStringAttr(entry, vendor, attributeName, setter)"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"Maps a single-valued attribute to a consumer."}),(0,t.jsx)(n.p,{children:"This helper can be useful when implementing a user or group transformer."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldaplegacyconfig",children:"readLdapLegacyConfig(config)"})}),(0,t.jsx)(n.td,{children:"Parses configuration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldaporg",children:"readLdapOrg(client, userConfig, groupConfig, options)"})}),(0,t.jsx)(n.td,{children:"Reads users and groups out of an LDAP provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readproviderconfigs",children:"readProviderConfigs(config)"})}),(0,t.jsx)(n.td,{children:"Parses all configured providers."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions",children:"LdapOrgEntityProviderLegacyOptions"})}),(0,t.jsxs)(n.td,{children:["Options for ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint",children:"LdapOrgEntityProviderTransformsExtensionPoint"})}),(0,t.jsxs)(n.td,{children:["Interface for ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint",children:"LdapOrgEntityProviderTransformsExtensionPoint"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.catalogmoduleldaporgentityprovider",children:"catalogModuleLdapOrgEntityProvider"})}),(0,t.jsx)(n.td,{children:"Registers the LdapOrgEntityProvider with the catalog processing extension point."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_dn_annotation",children:"LDAP_DN_ANNOTATION"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"The name of an entity annotation, that references the DN of the LDAP object it was ingested from."}),(0,t.jsx)(n.p,{children:"The DN is the fully qualified name that identifies the item; for example, for an item with the DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with that full string as its value."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation",children:"LDAP_RDN_ANNOTATION"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"The name of an entity annotation, that references the RDN of the LDAP object it was ingested from."}),(0,t.jsx)(n.p,{children:'The RDN is the name of the leftmost attribute that identifies the item; for example, for an item with the fully qualified DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with the value "john".'})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_uuid_annotation",children:"LDAP_UUID_ANNOTATION"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"The name of an entity annotation, that references the UUID of the LDAP object it was ingested from."}),(0,t.jsx)(n.p,{children:"The UUID is the globally unique ID that identifies the item; for example, for an item with the UUID 76ef928a-b251-1037-9840-d78227f36a7e, the generated entity would have this annotation, with that full string as its value."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint",children:"ldapOrgEntityProviderTransformsExtensionPoint"})}),(0,t.jsx)(n.td,{children:"Extension point used to customize the transforms used by the module."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.bindconfig",children:"BindConfig"})}),(0,t.jsx)(n.td,{children:"The settings to use for the a command."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.groupconfig",children:"GroupConfig"})}),(0,t.jsx)(n.td,{children:"The settings that govern the reading and interpretation of groups."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"})}),(0,t.jsx)(n.td,{children:"Customize the ingested Group entity"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovideroptions",children:"LdapOrgEntityProviderOptions"})}),(0,t.jsxs)(n.td,{children:["Options for ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapproviderconfig",children:"LdapProviderConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single LDAP provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapvendor",children:"LdapVendor"})}),(0,t.jsx)(n.td,{children:"An LDAP Vendor handles unique nuances between different vendors."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.tlsconfig",children:"TLSConfig"})}),(0,t.jsx)(n.td,{children:"TLS settings"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.userconfig",children:"UserConfig"})}),(0,t.jsx)(n.td,{children:"The settings that govern the reading and interpretation of users."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"})}),(0,t.jsx)(n.td,{children:"Customize the ingested User entity"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,a={},d=null,c=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:c,props:a,_owner:s.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,x={};function j(e,n,r){this.props=e,this.context=n,this.refs=x,this.updater=r||h}function m(){}function y(e,n,r){this.props=e,this.context=n,this.refs=x,this.updater=r||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=j.prototype;var b=y.prototype=new m;b.constructor=y,g(b,j.prototype),b.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,t){var o,a={},i=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)k.call(n,o)&&!P.hasOwnProperty(o)&&(a[o]=n[o]);var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];a.children=d}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:_.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function T(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case t:l=!0}}if(l)return i=i(l=e),e=""===a?"."+T(l,0):a,v(i)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),C(i,n,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),n.push(i)),1;if(l=0,a=""===a?".":a+":",v(e))for(var d=0;d<e.length;d++){var c=a+T(s=e[d],d);l+=C(s,n,o,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),d=0;!(s=e.next()).done;)l+=C(s=s.value,n,o,c=a+T(s,d++),i);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function D(e,n,r){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function L(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var S={current:null},R={transition:null},A={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:R,ReactCurrentOwner:_};n.Children={map:D,forEach:function(e,n,r){D(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return D(e,(function(){n++})),n},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=j,n.Fragment=o,n.Profiler=i,n.PureComponent=y,n.StrictMode=a,n.Suspense=c,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,s=_.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)k.call(n,d)&&!P.hasOwnProperty(d)&&(o[d]=void 0===n[d]&&void 0!==l?l[d]:n[d])}var d=arguments.length-2;if(1===d)o.children=t;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:L}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=R.transition;R.transition={};try{e()}finally{R.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return S.current.useCallback(e,n)},n.useContext=function(e){return S.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return S.current.useDeferredValue(e)},n.useEffect=function(e,n){return S.current.useEffect(e,n)},n.useId=function(){return S.current.useId()},n.useImperativeHandle=function(e,n,r){return S.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return S.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return S.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return S.current.useMemo(e,n)},n.useReducer=function(e,n,r){return S.current.useReducer(e,n,r)},n.useRef=function(e){return S.current.useRef(e)},n.useState=function(e){return S.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return S.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return S.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(667294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);