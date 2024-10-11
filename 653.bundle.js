"use strict";
(self["webpackChunkbundle_creator"] = self["webpackChunkbundle_creator"] || []).push([[653],{

/***/ 9034:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WcmModal: () => (/* binding */ WcmModal),
  WcmQrCode: () => (/* binding */ WcmQrCode)
});

;// ./node_modules/@walletconnect/modal-ui/node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window,css_tag_e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class css_tag_o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(css_tag_e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new css_tag_o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new css_tag_o(n,t,s)},S=(s,n)=>{css_tag_e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=css_tag_t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=css_tag_e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window,reactive_element_r=reactive_element_e.trustedTypes,h=reactive_element_r?reactive_element_r.emptyScript:"",reactive_element_o=reactive_element_e.reactiveElementPolyfillSupport,reactive_element_n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_n,reflect:!1,hasChanged:a},d="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty(d))return!1;this[d]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:reactive_element_n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:reactive_element_n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==reactive_element_o||reactive_element_o({ReactiveElement:u}),(null!==(reactive_element_s=reactive_element_e.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:reactive_element_e.reactiveElementVersions=[]).push("1.6.3");
//# sourceMappingURL=reactive-element.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=window,lit_html_s=lit_html_i.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o="$lit$",lit_html_n=`lit$${(Math.random()+"").slice(9)}$`,lit_html_l="?"+lit_html_n,lit_html_h=`<${lit_html_l}>`,lit_html_r=document,lit_html_u=()=>lit_html_r.createComment(""),lit_html_d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_c=Array.isArray,v=t=>lit_html_c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),lit_html_a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${lit_html_a}(?:([^\\s"'>=/]+)(${lit_html_a}*=${lit_html_a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_e?lit_html_e.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+lit_html_h:v>=0?(e.push(d),s.slice(0,v)+lit_html_o+s.slice(v)+lit_html_n+w):s+lit_html_n+(-2===v?(e.push(void 0),i):w)}return[P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(lit_html_o)||i.startsWith(lit_html_n)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+lit_html_o).split(lit_html_n),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k})}else v.push({type:6,index:r})}for(const i of t)h.removeAttribute(i)}if(y.test(h.tagName)){const t=h.textContent.split(lit_html_n),i=t.length-1;if(i>0){h.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],lit_html_u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],lit_html_u())}}}else if(8===h.nodeType)if(h.data===lit_html_l)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(lit_html_n,t+1));)v.push({type:7,index:r}),t+=lit_html_n.length-1}r++}}static createElement(t,i){const s=lit_html_r.createElement("template");return s.innerHTML=t,s}}function lit_html_S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=lit_html_d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=lit_html_S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h]}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++)}return C.currentNode=lit_html_r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=lit_html_S(this,t,i),lit_html_d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&lit_html_d(this._$AH)?this._$AA.nextSibling.data=t:this.$(lit_html_r.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){lit_html_c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(lit_html_u()),this.k(lit_html_u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=lit_html_S(this,t,i,0),n=!lit_html_d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=lit_html_S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!lit_html_d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const I=lit_html_s?lit_html_s.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=lit_html_S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){lit_html_S(this,t)}}const j={O:lit_html_o,P:lit_html_n,A:lit_html_l,C:1,M:V,L:M,R:v,D:lit_html_S,I:R,V:k,H:L,N:z,U:H,F:Z},B=lit_html_i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(lit_html_t=lit_html_i.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:lit_html_i.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(lit_html_u(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};
//# sourceMappingURL=lit-html.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.3.3");
//# sourceMappingURL=lit-element.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/@lit/reactive-element/decorators/custom-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const custom_element_e=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n);
//# sourceMappingURL=custom-element.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/@lit/reactive-element/decorators/property.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const property_i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}},property_e=(i,e,n)=>{e.constructor.createProperty(n,i)};function property_n(n){return(t,o)=>void 0!==o?property_e(n,t,o):property_i(n,t)}
//# sourceMappingURL=property.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/@lit/reactive-element/decorators/state.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_t(t){return property_n({...t,state:!0})}
//# sourceMappingURL=state.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var query_assigned_elements_n;const query_assigned_elements_e=null!=(null===(query_assigned_elements_n=window.HTMLSlotElement)||void 0===query_assigned_elements_n?void 0:query_assigned_elements_n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function query_assigned_elements_l(n){const{slot:l,selector:t}=null!=n?n:{};return o({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?query_assigned_elements_e(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-elements.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function query_assigned_nodes_o(o,n,r){let l,s=o;return"object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?t({slot:s,flatten:n,selector:r}):e({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-nodes.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/lit-html/directives/class-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const class_map_o=directive_e(class extends directive_i{constructor(t){var i;if(super(t),t.type!==directive_t.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)))}return T}});
//# sourceMappingURL=class-map.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/lit/directives/class-map.js

//# sourceMappingURL=class-map.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/modal-core/dist/index.js
var dist = __webpack_require__(5761);
;// ./node_modules/@motionone/utils/dist/defaults.es.js
const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease",
};



;// ./node_modules/@motionone/utils/dist/time.es.js
const time = {
    ms: (seconds) => seconds * 1000,
    s: (milliseconds) => milliseconds / 1000,
};



;// ./node_modules/@motionone/utils/dist/noop.es.js
const noop = () => { };
const noopReturn = (v) => v;



;// ./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished")
        return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) {
            animation.stop();
        }
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    }
    catch (e) { }
}



;// ./node_modules/@motionone/dom/dist/animate/utils/controls.es.js



const createAnimation = (factory) => factory();
const withControls = (animationFactory, options, duration = defaults.duration) => {
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options,
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */
const getActiveAnimation = (state) => state.animations[0];
const controls = {
    get: (target, key) => {
        const activeAnimation = getActiveAnimation(target);
        switch (key) {
            case "duration":
                return target.duration;
            case "currentTime":
                return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) {
                    target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
                }
                return target.finished;
            case "stop":
                return () => {
                    target.animations.forEach((animation) => stopAnimation(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */
                return (callback) => {
                    target.animations.forEach((animation) => callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) ===
                    "undefined"
                    ? undefined
                    : () => target.animations.forEach((animation) => animation[key]());
        }
    },
    set: (target, key, value) => {
        switch (key) {
            case "currentTime":
                value = time.ms(value);
            // Fall-through
            case "playbackRate":
                for (let i = 0; i < target.animations.length; i++) {
                    target.animations[i][key] = value;
                }
                return true;
        }
        return false;
    },
};
const selectFinished = (animation) => animation.finished;



;// ./node_modules/@motionone/utils/dist/is-easing-generator.es.js
const isEasingGenerator = (easing) => typeof easing === "object" &&
    Boolean(easing.createAnimation);



;// ./node_modules/@motionone/utils/dist/is-number.es.js
const is_number_es_isNumber = (value) => typeof value === "number";



;// ./node_modules/@motionone/utils/dist/is-easing-list.es.js


const isEasingList = (easing) => Array.isArray(easing) && !is_number_es_isNumber(easing[0]);



;// ./node_modules/@motionone/utils/dist/mix.es.js
const mix = (min, max, progress) => -progress * min + progress * max + min;



;// ./node_modules/@motionone/utils/dist/progress.es.js
const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);



;// ./node_modules/@motionone/utils/dist/offset.es.js



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = progress(0, remaining, i);
        offset.push(mix(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [0];
    fillOffset(offset, length - 1);
    return offset;
}



;// ./node_modules/@motionone/utils/dist/wrap.es.js
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};



;// ./node_modules/@motionone/utils/dist/easing.es.js



function getEasingForSegment(easing, i) {
    return isEasingList(easing) ? easing[wrap(0, easing.length, i)] : easing;
}



;// ./node_modules/@motionone/utils/dist/clamp.es.js
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);



;// ./node_modules/@motionone/utils/dist/interpolate.es.js







function interpolate(output, input = defaultOffset(output.length), easing = noopReturn) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */
    const remainder = length - input.length;
    remainder > 0 && fillOffset(input, remainder);
    return (t) => {
        let i = 0;
        for (; i < length - 2; i++) {
            if (t < input[i + 1])
                break;
        }
        let progressInRange = clamp(0, 1, progress(input[i], input[i + 1], t));
        const segmentEasing = getEasingForSegment(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return mix(output[i], output[i + 1], progressInRange);
    };
}



;// ./node_modules/@motionone/easing/dist/cubic-bezier.es.js


/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return noopReturn;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}



;// ./node_modules/@motionone/easing/dist/steps.es.js


const steps = (steps, direction = "end") => (progress) => {
    progress =
        direction === "end"
            ? Math.min(progress, 0.999)
            : Math.max(progress, 0.001);
    const expanded = progress * steps;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / steps);
};



;// ./node_modules/@motionone/utils/dist/is-function.es.js
const isFunction = (value) => typeof value === "function";



;// ./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js


const isCubicBezier = (easing) => Array.isArray(easing) && is_number_es_isNumber(easing[0]);



;// ./node_modules/@motionone/animation/dist/utils/easing.es.js



const namedEasings = {
    ease: cubicBezier(0.25, 0.1, 0.25, 1.0),
    "ease-in": cubicBezier(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": cubicBezier(0.42, 0.0, 0.58, 1.0),
    "ease-out": cubicBezier(0.0, 0.0, 0.58, 1.0),
};
const functionArgsRegex = /\((.*?)\)/;
function easing_es_getEasingFunction(definition) {
    // If already an easing function, return
    if (isFunction(definition))
        return definition;
    // If an easing curve definition, return bezier function
    if (isCubicBezier(definition))
        return cubicBezier(...definition);
    // If we have a predefined easing function, return
    const namedEasing = namedEasings[definition];
    if (namedEasing)
        return namedEasing;
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return steps(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return noopReturn;
}



;// ./node_modules/@motionone/animation/dist/Animation.es.js



class Animation {
    constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, offset, direction = "normal", autoplay = true, } = {}) {
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = noopReturn;
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || defaults.easing;
        if (isEasingGenerator(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = isEasingList(easing) ? noopReturn : easing_es_getEasingFunction(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(easing_es_getEasingFunction) : noopReturn);
        this.tick = (timestamp) => {
            var _a;
            // TODO: Temporary fix for OptionsResolver typing
            delay = delay;
            let t = 0;
            if (this.pauseTime !== undefined) {
                t = this.pauseTime;
            }
            else {
                t = (timestamp - this.startTime) * this.rate;
            }
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */
            if (this.playState === "finished" && this.pauseTime === undefined) {
                t = this.totalDuration;
            }
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" ||
                (direction === "alternate" && iterationIsOdd) ||
                (direction === "alternate-reverse" && !iterationIsOdd)) {
                iterationProgress = 1 - iterationProgress;
            }
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined &&
                (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
            }
            else if (this.playState !== "idle") {
                this.frameRequestId = requestAnimationFrame(this.tick);
            }
        };
        if (autoplay)
            this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) {
            this.startTime = now - this.pauseTime;
        }
        else if (!this.startTime) {
            this.startTime = now;
        }
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) {
            cancelAnimationFrame(this.frameRequestId);
        }
        (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() { }
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) {
            this.pauseTime = t;
        }
        else {
            this.startTime = performance.now() - t / this.rate;
        }
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}



;// ./node_modules/hey-listen/dist/hey-listen.es.js
var warning = function () { };
var invariant = function () { };
if (false) {}



;// ./node_modules/@motionone/types/dist/MotionValue.es.js
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */
class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => { });
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}



;// ./node_modules/@motionone/dom/dist/animate/data.es.js


const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) {
        data.set(element, {
            transforms: [],
            values: new Map(),
        });
    }
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) {
        motionValues.set(name, new MotionValue());
    }
    return motionValues.get(name);
}



;// ./node_modules/@motionone/utils/dist/array.es.js
function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}



;// ./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js



/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
const axes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
const order = ["translate", "scale", "rotate", "skew"];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v) => v + "deg",
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v) => v + "px",
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: noopReturn,
    },
    skew: rotation,
};
const transformDefinitions = new Map();
const asTransformCssVar = (name) => `--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */
const transforms = ["x", "y", "z"];
order.forEach((name) => {
    axes.forEach((axis) => {
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
const compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */
const transformLookup = new Set(transforms);
const isTransform = (name) => transformLookup.has(name);
const addTransformToElement = (element, name) => {
    // Map x to translateX etc
    if (transformAlias[name])
        name = transformAlias[name];
    const { transforms } = getAnimationData(element);
    addUniqueItem(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */
    element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms) => transforms
    .sort(compareTransformOrder)
    .reduce(transformListToString, "")
    .trim();
const transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;



;// ./node_modules/@motionone/dom/dist/animate/utils/css-var.es.js


const isCssVar = (name) => name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name))
        return;
    registeredProperties.add(name);
    try {
        const { syntax, initialValue } = transformDefinitions.has(name)
            ? transformDefinitions.get(name)
            : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue,
        });
    }
    catch (e) { }
}



;// ./node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js
const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
const featureTests = {
    cssRegisterProperty: () => typeof CSS !== "undefined" &&
        Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
        try {
            testAnimation({ opacity: [1] });
        }
        catch (e) {
            return false;
        }
        return true;
    },
    finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 0.001 }).finished),
    linearEasing: () => {
        try {
            testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
        }
        catch (e) {
            return false;
        }
        return true;
    },
};
const results = {};
const supports = {};
for (const key in featureTests) {
    supports[key] = () => {
        if (results[key] === undefined)
            results[key] =
                featureTests[key]();
        return results[key];
    };
}



;// ./node_modules/@motionone/dom/dist/animate/utils/easing.es.js



// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration) => {
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for (let i = 0; i < numPoints; i++) {
        points += easing(progress(0, numPoints - 1, i)) + ", ";
    }
    return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration) => {
    if (isFunction(easing)) {
        return supports.linearEasing()
            ? `linear(${generateLinearEasingPoints(easing, duration)})`
            : defaults.easing;
    }
    else {
        return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
    }
};
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;



;// ./node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js
function hydrateKeyframes(keyframes, readInitialValue) {
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] === null) {
            keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
        }
    }
    return keyframes;
}
const keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];



;// ./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js


function getStyleName(key) {
    if (transformAlias[key])
        key = transformAlias[key];
    return isTransform(key) ? asTransformCssVar(key) : key;
}



;// ./node_modules/@motionone/dom/dist/animate/style.es.js




const style = {
    get: (element, name) => {
        name = getStyleName(name);
        let value = isCssVar(name)
            ? element.style.getPropertyValue(name)
            : getComputedStyle(element)[name];
        // TODO Decide if value can be 0
        if (!value && value !== 0) {
            const definition = transformDefinitions.get(name);
            if (definition)
                value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value) => {
        name = getStyleName(name);
        if (isCssVar(name)) {
            element.style.setProperty(name, value);
        }
        else {
            element.style[name] = value;
        }
    },
};



;// ./node_modules/@motionone/utils/dist/is-string.es.js
const isString = (value) => typeof value === "string";



;// ./node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js


function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
    const finalKeyframe = keyframes[keyframes.length - 1];
    if (isString(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit)
            toUnit = (value) => value + unit;
    }
    return toUnit;
}



;// ./node_modules/@motionone/dom/dist/animate/animate-style.es.js












function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, easing = defaults.easing, persist = false, direction, offset, allowWebkitAcceleration = false, autoplay = true, } = options;
    const data = getAnimationData(element);
    const valueIsTransform = isTransform(key);
    let canAnimateNatively = supports.waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */
    valueIsTransform && addTransformToElement(element, key);
    const name = getStyleName(key);
    const motionValue = getMotionValue(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */
    const definition = transformDefinitions.get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */
    stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) &&
        options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */
    return () => {
        const readInitialValue = () => { var _a, _b; return (_b = (_a = style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0; };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */
        let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */
        const toUnit = getUnitConverter(keyframes, definition);
        if (isEasingGenerator(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */
        if (isCssVar(name)) {
            if (supports.cssRegisterProperty()) {
                registerCssVariable(name);
            }
            else {
                canAnimateNatively = false;
            }
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */
        if (valueIsTransform &&
            !supports.linearEasing() &&
            (isFunction(easing) || (isEasingList(easing) && easing.some(isFunction)))) {
            canAnimateNatively = false;
        }
        /**
         * If we can animate this value with WAAPI, do so.
         */
        if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */
            if (definition) {
                keyframes = keyframes.map((value) => is_number_es_isNumber(value) ? definition.toDefaultUnit(value) : value);
            }
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */
            if (keyframes.length === 1 &&
                (!supports.partialKeyframes() || isRecording)) {
                keyframes.unshift(readInitialValue());
            }
            const animationOptions = {
                delay: time.ms(delay),
                duration: time.ms(duration),
                endDelay: time.ms(endDelay),
                easing: !isEasingList(easing)
                    ? convertEasing(easing, duration)
                    : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both",
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: isEasingList(easing)
                    ? easing.map((thisEasing) => convertEasing(thisEasing, duration))
                    : undefined,
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */
            if (!animation.finished) {
                animation.finished = new Promise((resolve, reject) => {
                    animation.onfinish = resolve;
                    animation.oncancel = reject;
                });
            }
            const target = keyframes[keyframes.length - 1];
            animation.finished
                .then(() => {
                if (persist)
                    return;
                // Apply styles to target
                style.set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            })
                .catch(noop);
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */
            if (!allowWebkitAcceleration)
                animation.playbackRate = 1.000001;
            /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */
        }
        else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */
            keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */
            if (keyframes.length === 1) {
                keyframes.unshift(parseFloat(readInitialValue()));
            }
            animation = new AnimationPolyfill((latest) => {
                style.set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), { duration,
                easing }));
        }
        else {
            const target = keyframes[keyframes.length - 1];
            style.set(element, name, definition && is_number_es_isNumber(target)
                ? definition.toDefaultUnit(target)
                : target);
        }
        if (isRecording) {
            record(element, key, keyframes, {
                duration,
                delay: delay,
                easing,
                repeat,
                offset,
            }, "motion-one");
        }
        motionValue.setAnimation(animation);
        if (animation && !autoplay)
            animation.pause();
        return animation;
    };
}



;// ./node_modules/@motionone/dom/dist/animate/utils/options.es.js
const getOptions = (options, key) => 
/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */
options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);



;// ./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = document.querySelectorAll(elements));
            elements = selectorCache[elements];
        }
        else {
            elements = document.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}



;// ./node_modules/@motionone/dom/dist/utils/stagger.es.js



function stagger(duration = 0.1, { start = 0, from = 0, easing } = {}) {
    return (i, total) => {
        const fromIndex = isNumber(from) ? from : getFromIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = getEasingFunction(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function getFromIndex(from, total) {
    if (from === "first") {
        return 0;
    }
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function resolveOption(option, i, total) {
    return isFunction(option) ? option(i, total) : option;
}



;// ./node_modules/@motionone/dom/dist/animate/create-animate.es.js







function createAnimate(AnimatePolyfill) {
    return function animate(elements, keyframes, options = {}) {
        elements = resolveElements(elements);
        const numElements = elements.length;
        invariant(Boolean(numElements), "No valid element provided.");
        invariant(Boolean(keyframes), "No keyframes defined.");
        /**
         * Create and start new animations
         */
        const animationFactories = [];
        for (let i = 0; i < numElements; i++) {
            const element = elements[i];
            for (const key in keyframes) {
                const valueOptions = getOptions(options, key);
                valueOptions.delay = resolveOption(valueOptions.delay, i, numElements);
                const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
                animationFactories.push(animation);
            }
        }
        return withControls(animationFactories, options, 
        /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */
        options.duration);
    };
}



;// ./node_modules/@motionone/dom/dist/animate/index.es.js



const animate = createAnimate(Animation);



;// ./node_modules/motion/dist/animate.es.js




function animateProgress(target, options = {}) {
    return withControls([
        () => {
            const animation = new Animation(target, [0, 1], options);
            animation.finished.catch(() => { });
            return animation;
        },
    ], options, options.duration);
}
function animate_es_animate(target, keyframesOrOptions, options) {
    const factory = isFunction(target) ? animateProgress : animate;
    return factory(target, keyframesOrOptions, options);
}



;// ./node_modules/@walletconnect/modal-ui/node_modules/lit-html/directives/if-defined.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const if_defined_l=l=>null!=l?l:A;
//# sourceMappingURL=if-defined.js.map

;// ./node_modules/@walletconnect/modal-ui/node_modules/lit/directives/if-defined.js

//# sourceMappingURL=if-defined.js.map

// EXTERNAL MODULE: ./node_modules/qrcode/lib/browser.js
var browser = __webpack_require__(7583);
;// ./node_modules/@walletconnect/modal-ui/dist/index.js









var __defProp$y = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp$y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function themeModeVariables() {
  var _a;
  const themeMode = (_a = dist/* ThemeCtrl */.lH.state.themeMode) != null ? _a : "dark";
  const themeModePresets = {
    light: {
      foreground: { 1: `rgb(20,20,20)`, 2: `rgb(121,134,134)`, 3: `rgb(158,169,169)` },
      background: { 1: `rgb(255,255,255)`, 2: `rgb(241,243,243)`, 3: `rgb(228,231,231)` },
      overlay: "rgba(0,0,0,0.1)"
    },
    dark: {
      foreground: { 1: `rgb(228,231,231)`, 2: `rgb(148,158,158)`, 3: `rgb(110,119,119)` },
      background: { 1: `rgb(20,20,20)`, 2: `rgb(39,42,42)`, 3: `rgb(59,64,64)` },
      overlay: "rgba(255,255,255,0.1)"
    }
  };
  const themeModeColors = themeModePresets[themeMode];
  return {
    "--wcm-color-fg-1": themeModeColors.foreground[1],
    "--wcm-color-fg-2": themeModeColors.foreground[2],
    "--wcm-color-fg-3": themeModeColors.foreground[3],
    "--wcm-color-bg-1": themeModeColors.background[1],
    "--wcm-color-bg-2": themeModeColors.background[2],
    "--wcm-color-bg-3": themeModeColors.background[3],
    "--wcm-color-overlay": themeModeColors.overlay
  };
}
function themeVariablesPresets() {
  return {
    "--wcm-accent-color": "#3396FF",
    "--wcm-accent-fill-color": "#FFFFFF",
    "--wcm-z-index": "89",
    "--wcm-background-color": "#3396FF",
    "--wcm-background-border-radius": "8px",
    "--wcm-container-border-radius": "30px",
    "--wcm-wallet-icon-border-radius": "15px",
    "--wcm-wallet-icon-large-border-radius": "30px",
    "--wcm-wallet-icon-small-border-radius": "7px",
    "--wcm-input-border-radius": "28px",
    "--wcm-button-border-radius": "10px",
    "--wcm-notification-border-radius": "36px",
    "--wcm-secondary-button-border-radius": "28px",
    "--wcm-icon-button-border-radius": "50%",
    "--wcm-button-hover-highlight-border-radius": "10px",
    "--wcm-text-big-bold-size": "20px",
    "--wcm-text-big-bold-weight": "600",
    "--wcm-text-big-bold-line-height": "24px",
    "--wcm-text-big-bold-letter-spacing": "-0.03em",
    "--wcm-text-big-bold-text-transform": "none",
    "--wcm-text-xsmall-bold-size": "10px",
    "--wcm-text-xsmall-bold-weight": "700",
    "--wcm-text-xsmall-bold-line-height": "12px",
    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
    "--wcm-text-xsmall-bold-text-transform": "uppercase",
    "--wcm-text-xsmall-regular-size": "12px",
    "--wcm-text-xsmall-regular-weight": "600",
    "--wcm-text-xsmall-regular-line-height": "14px",
    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
    "--wcm-text-xsmall-regular-text-transform": "none",
    "--wcm-text-small-thin-size": "14px",
    "--wcm-text-small-thin-weight": "500",
    "--wcm-text-small-thin-line-height": "16px",
    "--wcm-text-small-thin-letter-spacing": "-0.03em",
    "--wcm-text-small-thin-text-transform": "none",
    "--wcm-text-small-regular-size": "14px",
    "--wcm-text-small-regular-weight": "600",
    "--wcm-text-small-regular-line-height": "16px",
    "--wcm-text-small-regular-letter-spacing": "-0.03em",
    "--wcm-text-small-regular-text-transform": "none",
    "--wcm-text-medium-regular-size": "16px",
    "--wcm-text-medium-regular-weight": "600",
    "--wcm-text-medium-regular-line-height": "20px",
    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
    "--wcm-text-medium-regular-text-transform": "none",
    "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    "--wcm-font-feature-settings": `'tnum' on, 'lnum' on, 'case' on`,
    "--wcm-success-color": "rgb(38,181,98)",
    "--wcm-error-color": "rgb(242, 90, 103)",
    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
    "--wcm-overlay-backdrop-filter": "none"
  };
}
const ThemeUtil = {
  getPreset(key) {
    return themeVariablesPresets()[key];
  },
  setTheme() {
    const root = document.querySelector(":root");
    const { themeVariables } = dist/* ThemeCtrl */.lH.state;
    if (root) {
      const variables = __spreadValues(__spreadValues(__spreadValues({}, themeModeVariables()), themeVariablesPresets()), themeVariables);
      Object.entries(variables).forEach(([key, val]) => root.style.setProperty(key, val));
    }
  },
  globalCss: i`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
};

const styles$t = i`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;

var __defProp$x = Object.defineProperty;
var __getOwnPropDesc$x = Object.getOwnPropertyDescriptor;
var __decorateClass$x = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$x(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$x(target, key, result);
  return result;
};
let WcmButton = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.iconLeft = void 0;
    this.iconRight = void 0;
    this.onClick = () => null;
    this.variant = "default";
  }
  // -- render ------------------------------------------------------- //
  render() {
    const classes = {
      "wcm-icon-left": this.iconLeft !== void 0,
      "wcm-icon-right": this.iconRight !== void 0,
      "wcm-ghost": this.variant === "ghost",
      "wcm-outline": this.variant === "outline"
    };
    let textColor = "inverse";
    if (this.variant === "ghost") {
      textColor = "secondary";
    }
    if (this.variant === "outline") {
      textColor = "accent";
    }
    return x`<button class="${class_map_o(classes)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${textColor}"><slot></slot></wcm-text>${this.iconRight}</button>`;
  }
};
WcmButton.styles = [ThemeUtil.globalCss, styles$t];
__decorateClass$x([
  property_n({ type: Boolean })
], WcmButton.prototype, "disabled", 2);
__decorateClass$x([
  property_n()
], WcmButton.prototype, "iconLeft", 2);
__decorateClass$x([
  property_n()
], WcmButton.prototype, "iconRight", 2);
__decorateClass$x([
  property_n()
], WcmButton.prototype, "onClick", 2);
__decorateClass$x([
  property_n()
], WcmButton.prototype, "variant", 2);
WcmButton = __decorateClass$x([
  custom_element_e("wcm-button")
], WcmButton);

const styles$s = i`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;

var __defProp$w = Object.defineProperty;
var __getOwnPropDesc$w = Object.getOwnPropertyDescriptor;
var __decorateClass$w = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$w(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$w(target, key, result);
  return result;
};
let WcmButtonBig = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.variant = "primary";
  }
  // -- render ------------------------------------------------------- //
  render() {
    const classes = {
      "wcm-secondary": this.variant === "secondary"
    };
    return x`<button ?disabled="${this.disabled}" class="${class_map_o(classes)}"><slot></slot></button>`;
  }
};
WcmButtonBig.styles = [ThemeUtil.globalCss, styles$s];
__decorateClass$w([
  property_n({ type: Boolean })
], WcmButtonBig.prototype, "disabled", 2);
__decorateClass$w([
  property_n()
], WcmButtonBig.prototype, "variant", 2);
WcmButtonBig = __decorateClass$w([
  custom_element_e("wcm-button-big")
], WcmButtonBig);

const styles$r = i`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;

var __defProp$v = Object.defineProperty;
var __getOwnPropDesc$v = Object.getOwnPropertyDescriptor;
var __decorateClass$v = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$v(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$v(target, key, result);
  return result;
};
let WcmInfoFooter = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    return x`<div><slot></slot></div>`;
  }
};
WcmInfoFooter.styles = [ThemeUtil.globalCss, styles$r];
WcmInfoFooter = __decorateClass$v([
  custom_element_e("wcm-info-footer")
], WcmInfoFooter);

const SvgUtil = {
  CROSS_ICON: b`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
  WALLET_CONNECT_LOGO: b`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
  WALLET_CONNECT_ICON: b`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
  WALLET_CONNECT_ICON_COLORED: b`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
  BACK_ICON: b`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
  COPY_ICON: b`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
  RETRY_ICON: b`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
  DESKTOP_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
  MOBILE_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
  ARROW_DOWN_ICON: b`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
  ARROW_UP_RIGHT_ICON: b`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
  ARROW_RIGHT_ICON: b`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
  QRCODE_ICON: b`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
  SCAN_ICON: b`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
  CHECKMARK_ICON: b`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
  SEARCH_ICON: b`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
  WALLET_PLACEHOLDER: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
  GLOBE_ICON: b`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
};

const styles$q = i`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;

var __defProp$u = Object.defineProperty;
var __getOwnPropDesc$u = Object.getOwnPropertyDescriptor;
var __decorateClass$u = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$u(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$u(target, key, result);
  return result;
};
let WcmModalBackcard = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    return x`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${SvgUtil.WALLET_CONNECT_LOGO} <button @click="${dist/* ModalCtrl */.D8.close}">${SvgUtil.CROSS_ICON}</button></div>`;
  }
};
WcmModalBackcard.styles = [ThemeUtil.globalCss, styles$q];
WcmModalBackcard = __decorateClass$u([
  custom_element_e("wcm-modal-backcard")
], WcmModalBackcard);

const styles$p = i`main{padding:20px;padding-top:0;width:100%}`;

var __defProp$t = Object.defineProperty;
var __getOwnPropDesc$t = Object.getOwnPropertyDescriptor;
var __decorateClass$t = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$t(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$t(target, key, result);
  return result;
};
let WcmModalContent = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    return x`<main><slot></slot></main>`;
  }
};
WcmModalContent.styles = [ThemeUtil.globalCss, styles$p];
WcmModalContent = __decorateClass$t([
  custom_element_e("wcm-modal-content")
], WcmModalContent);

const styles$o = i`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;

var __defProp$s = Object.defineProperty;
var __getOwnPropDesc$s = Object.getOwnPropertyDescriptor;
var __decorateClass$s = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$s(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$s(target, key, result);
  return result;
};
let WcmModalFooter = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    return x`<footer><slot></slot></footer>`;
  }
};
WcmModalFooter.styles = [ThemeUtil.globalCss, styles$o];
WcmModalFooter = __decorateClass$s([
  custom_element_e("wcm-modal-footer")
], WcmModalFooter);

const styles$n = i`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;

var __defProp$r = Object.defineProperty;
var __getOwnPropDesc$r = Object.getOwnPropertyDescriptor;
var __decorateClass$r = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$r(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$r(target, key, result);
  return result;
};
let WcmModalHeader = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.title = "";
    this.onAction = void 0;
    this.actionIcon = void 0;
    this.border = false;
  }
  // -- private ------------------------------------------------------ //
  backBtnTemplate() {
    return x`<button class="wcm-back-btn" @click="${dist/* RouterCtrl */.jL.goBack}">${SvgUtil.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return x`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  // -- render ------------------------------------------------------- //
  render() {
    const classes = {
      "wcm-border": this.border
    };
    const backBtn = dist/* RouterCtrl */.jL.state.history.length > 1;
    const content = this.title ? x`<wcm-text variant="big-bold">${this.title}</wcm-text>` : x`<slot></slot>`;
    return x`<header class="${class_map_o(classes)}">${backBtn ? this.backBtnTemplate() : null} ${content} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
WcmModalHeader.styles = [ThemeUtil.globalCss, styles$n];
__decorateClass$r([
  property_n()
], WcmModalHeader.prototype, "title", 2);
__decorateClass$r([
  property_n()
], WcmModalHeader.prototype, "onAction", 2);
__decorateClass$r([
  property_n()
], WcmModalHeader.prototype, "actionIcon", 2);
__decorateClass$r([
  property_n({ type: Boolean })
], WcmModalHeader.prototype, "border", 2);
WcmModalHeader = __decorateClass$r([
  custom_element_e("wcm-modal-header")
], WcmModalHeader);

const UiUtil = {
  MOBILE_BREAKPOINT: 600,
  WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
  EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
  getShadowRootElement(root, selector) {
    const el = root.renderRoot.querySelector(selector);
    if (!el) {
      throw new Error(`${selector} not found`);
    }
    return el;
  },
  getWalletIcon({ id, image_id }) {
    const { walletImages } = dist/* ConfigCtrl */.mb.state;
    if (walletImages == null ? void 0 : walletImages[id]) {
      return walletImages[id];
    } else if (image_id) {
      return dist/* ExplorerCtrl */.pV.getWalletImageUrl(image_id);
    }
    return "";
  },
  getWalletName(name, short = false) {
    return short && name.length > 8 ? `${name.substring(0, 8)}..` : name;
  },
  isMobileAnimation() {
    return window.innerWidth <= UiUtil.MOBILE_BREAKPOINT;
  },
  async preloadImage(src) {
    const imagePromise = new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.crossOrigin = "anonymous";
      image.src = src;
    });
    return Promise.race([imagePromise, dist/* CoreUtil */.Ao.wait(3e3)]);
  },
  getErrorMessage(err) {
    return err instanceof Error ? err.message : "Unknown Error";
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debounce(func, timeout = 500) {
    let timer = void 0;
    return (...args) => {
      function next() {
        func(...args);
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(next, timeout);
    };
  },
  handleMobileLinking(wallet, target = "_self") {
    const { walletConnectUri } = dist/* OptionsCtrl */.IN.state;
    const { mobile, name } = wallet;
    const nativeUrl = mobile == null ? void 0 : mobile.native;
    const universalUrl = mobile == null ? void 0 : mobile.universal;
    UiUtil.setRecentWallet(wallet);
    function onRedirect(uri) {
      if (nativeUrl) {
        const href = dist/* CoreUtil */.Ao.formatNativeUrl(nativeUrl, uri, name);
        dist/* CoreUtil */.Ao.openHref(href, target);
      } else if (universalUrl) {
        const href = dist/* CoreUtil */.Ao.formatUniversalUrl(universalUrl, uri, name);
        dist/* CoreUtil */.Ao.openHref(href, target);
      }
    }
    if (walletConnectUri) {
      onRedirect(walletConnectUri);
    }
  },
  handleAndroidLinking() {
    const { walletConnectUri } = dist/* OptionsCtrl */.IN.state;
    if (walletConnectUri) {
      dist/* CoreUtil */.Ao.setWalletConnectAndroidDeepLink(walletConnectUri);
      dist/* CoreUtil */.Ao.openHref(walletConnectUri, dist/* CoreUtil */.Ao.isTelegram() ? "_blank" : "_self");
    }
  },
  async handleUriCopy() {
    const { walletConnectUri } = dist/* OptionsCtrl */.IN.state;
    if (walletConnectUri) {
      try {
        await navigator.clipboard.writeText(walletConnectUri);
        dist/* ToastCtrl */.dC.openToast("Link copied", "success");
      } catch (e) {
        dist/* ToastCtrl */.dC.openToast("Failed to copy", "error");
      }
    }
  },
  getCustomImageUrls() {
    const { walletImages } = dist/* ConfigCtrl */.mb.state;
    const walletUrls = Object.values(walletImages != null ? walletImages : {});
    return Object.values(walletUrls);
  },
  truncate(value, strLen = 8) {
    if (value.length <= strLen) {
      return value;
    }
    return `${value.substring(0, 4)}...${value.substring(value.length - 4)}`;
  },
  setRecentWallet(wallet) {
    try {
      localStorage.setItem(UiUtil.WCM_RECENT_WALLET_DATA, JSON.stringify(wallet));
    } catch (e) {
      console.info("Unable to set recent wallet");
    }
  },
  getRecentWallet() {
    try {
      const wallet = localStorage.getItem(UiUtil.WCM_RECENT_WALLET_DATA);
      if (wallet) {
        const json = JSON.parse(wallet);
        return json;
      }
      return void 0;
    } catch (e) {
      console.info("Unable to get recent wallet");
    }
    return void 0;
  },
  caseSafeIncludes(str1, str2) {
    return str1.toUpperCase().includes(str2.toUpperCase());
  },
  openWalletExplorerUrl() {
    dist/* CoreUtil */.Ao.openHref(UiUtil.EXPLORER_WALLET_URL, "_blank");
  },
  getCachedRouterWalletPlatforms() {
    const { desktop, mobile } = dist/* CoreUtil */.Ao.getWalletRouterData();
    const isDesktop = Boolean(desktop == null ? void 0 : desktop.native);
    const isWeb = Boolean(desktop == null ? void 0 : desktop.universal);
    const isMobile = Boolean(mobile == null ? void 0 : mobile.native) || Boolean(mobile == null ? void 0 : mobile.universal);
    return { isDesktop, isMobile, isWeb };
  },
  goToConnectingView(wallet) {
    dist/* RouterCtrl */.jL.setData({ Wallet: wallet });
    const isMobileDevice = dist/* CoreUtil */.Ao.isMobile();
    const { isDesktop, isWeb, isMobile } = UiUtil.getCachedRouterWalletPlatforms();
    if (isMobileDevice) {
      if (isMobile) {
        dist/* RouterCtrl */.jL.push("MobileConnecting");
        if (!dist/* CoreUtil */.Ao.isAndroid() && dist/* CoreUtil */.Ao.isTelegram()) {
          this.handleMobileLinking(wallet, "_blank");
        }
      } else if (isWeb) {
        dist/* RouterCtrl */.jL.push("WebConnecting");
      } else {
        dist/* RouterCtrl */.jL.push("InstallWallet");
      }
    } else if (isDesktop) {
      dist/* RouterCtrl */.jL.push("DesktopConnecting");
    } else if (isWeb) {
      dist/* RouterCtrl */.jL.push("WebConnecting");
    } else if (isMobile) {
      dist/* RouterCtrl */.jL.push("MobileQrcodeConnecting");
    } else {
      dist/* RouterCtrl */.jL.push("InstallWallet");
    }
  }
};

const styles$m = i`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;

var __defProp$q = Object.defineProperty;
var __getOwnPropDesc$q = Object.getOwnPropertyDescriptor;
var __decorateClass$q = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$q(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$q(target, key, result);
  return result;
};
let WcmModalRouter = class extends lit_element_s {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super();
    this.view = dist/* RouterCtrl */.jL.state.view;
    this.prevView = dist/* RouterCtrl */.jL.state.view;
    // -- private ------------------------------------------------------ //
    this.unsubscribe = void 0;
    this.oldHeight = "0px";
    this.resizeObserver = void 0;
    this.unsubscribe = dist/* RouterCtrl */.jL.subscribe((routerState) => {
      if (this.view !== routerState.view) {
        this.onChangeRoute();
      }
    });
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(([conetnt]) => {
      const newHeight = `${conetnt.contentRect.height}px`;
      if (this.oldHeight !== "0px") {
        animate_es_animate(this.routerEl, { height: [this.oldHeight, newHeight] }, { duration: 0.2 });
      }
      this.oldHeight = newHeight;
    });
    this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.unsubscribe) == null ? void 0 : _a.call(this);
    (_b = this.resizeObserver) == null ? void 0 : _b.disconnect();
  }
  get routerEl() {
    return UiUtil.getShadowRootElement(this, ".wcm-router");
  }
  get contentEl() {
    return UiUtil.getShadowRootElement(this, ".wcm-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return x`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
      case "DesktopConnecting":
        return x`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
      case "MobileConnecting":
        return x`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
      case "WebConnecting":
        return x`<wcm-web-connecting-view></wcm-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return x`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
      case "WalletExplorer":
        return x`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
      case "Qrcode":
        return x`<wcm-qrcode-view></wcm-qrcode-view>`;
      case "InstallWallet":
        return x`<wcm-install-wallet-view></wcm-install-wallet-view>`;
      default:
        return x`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await animate_es_animate(
      this.routerEl,
      { opacity: [1, 0], scale: [1, 1.02] },
      { duration: 0.15, delay: 0.1 }
    ).finished;
    this.view = dist/* RouterCtrl */.jL.state.view;
    animate_es_animate(this.routerEl, { opacity: [0, 1], scale: [0.99, 1] }, { duration: 0.37, delay: 0.05 });
  }
  // -- render ------------------------------------------------------- //
  render() {
    return x`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
  }
};
WcmModalRouter.styles = [ThemeUtil.globalCss, styles$m];
__decorateClass$q([
  state_t()
], WcmModalRouter.prototype, "view", 2);
__decorateClass$q([
  state_t()
], WcmModalRouter.prototype, "prevView", 2);
WcmModalRouter = __decorateClass$q([
  custom_element_e("wcm-modal-router")
], WcmModalRouter);

const styles$l = i`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;

var __defProp$p = Object.defineProperty;
var __getOwnPropDesc$p = Object.getOwnPropertyDescriptor;
var __decorateClass$p = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$p(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$p(target, key, result);
  return result;
};
let WcmModalToast = class extends lit_element_s {
  constructor() {
    super();
    this.open = false;
    // -- private ------------------------------------------------------ //
    this.unsubscribe = void 0;
    this.timeout = void 0;
    this.unsubscribe = dist/* ToastCtrl */.dC.subscribe((newState) => {
      if (newState.open) {
        this.open = true;
        this.timeout = setTimeout(() => dist/* ToastCtrl */.dC.closeToast(), 2200);
      } else {
        this.open = false;
        clearTimeout(this.timeout);
      }
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.unsubscribe) == null ? void 0 : _a.call(this);
    clearTimeout(this.timeout);
    dist/* ToastCtrl */.dC.closeToast();
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { message, variant } = dist/* ToastCtrl */.dC.state;
    const classes = {
      "wcm-success": variant === "success",
      "wcm-error": variant === "error"
    };
    return this.open ? x`<div class="${class_map_o(classes)}">${variant === "success" ? SvgUtil.CHECKMARK_ICON : null} ${variant === "error" ? SvgUtil.CROSS_ICON : null}<wcm-text variant="small-regular">${message}</wcm-text></div>` : null;
  }
};
WcmModalToast.styles = [ThemeUtil.globalCss, styles$l];
__decorateClass$p([
  state_t()
], WcmModalToast.prototype, "open", 2);
WcmModalToast = __decorateClass$p([
  custom_element_e("wcm-modal-toast")
], WcmModalToast);

const CONNECTING_ERROR_MARGIN = 0.1;
const CIRCLE_SIZE_MODIFIER = 2.5;
const QRCODE_MATRIX_MARGIN = 7;
function isAdjecentDots(cy, otherCy, cellSize) {
  if (cy === otherCy) {
    return false;
  }
  const diff = cy - otherCy < 0 ? otherCy - cy : cy - otherCy;
  return diff <= cellSize + CONNECTING_ERROR_MARGIN;
}
function getMatrix(value, errorCorrectionLevel) {
  const arr = Array.prototype.slice.call(
    browser.create(value, { errorCorrectionLevel }).modules.data,
    0
  );
  const sqrt = Math.sqrt(arr.length);
  return arr.reduce(
    (rows, key, index) => (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows,
    []
  );
}
const QrCodeUtil = {
  generate(uri, size, logoSize) {
    const dotColor = "#141414";
    const edgeColor = "#ffffff";
    const dots = [];
    const matrix = getMatrix(uri, "Q");
    const cellSize = size / matrix.length;
    const qrList = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];
    qrList.forEach(({ x, y }) => {
      const x1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * x;
      const y1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * y;
      const borderRadius = 0.45;
      for (let i = 0; i < qrList.length; i += 1) {
        const dotSize = cellSize * (QRCODE_MATRIX_MARGIN - i * 2);
        dots.push(
          b`<rect fill="${i % 2 === 0 ? dotColor : edgeColor}" height="${dotSize}" rx="${dotSize * borderRadius}" ry="${dotSize * borderRadius}" width="${dotSize}" x="${x1 + cellSize * i}" y="${y1 + cellSize * i}">`
        );
      }
    });
    const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
    const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
    const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
    const circles = [];
    matrix.forEach((row, i) => {
      row.forEach((_, j) => {
        if (matrix[i][j]) {
          if (!(i < QRCODE_MATRIX_MARGIN && j < QRCODE_MATRIX_MARGIN || i > matrix.length - (QRCODE_MATRIX_MARGIN + 1) && j < QRCODE_MATRIX_MARGIN || i < QRCODE_MATRIX_MARGIN && j > matrix.length - (QRCODE_MATRIX_MARGIN + 1))) {
            if (!(i > matrixMiddleStart && i < matrixMiddleEnd && j > matrixMiddleStart && j < matrixMiddleEnd)) {
              const cx = i * cellSize + cellSize / 2;
              const cy = j * cellSize + cellSize / 2;
              circles.push([cx, cy]);
            }
          }
        }
      });
    });
    const circlesToConnect = {};
    circles.forEach(([cx, cy]) => {
      if (circlesToConnect[cx]) {
        circlesToConnect[cx].push(cy);
      } else {
        circlesToConnect[cx] = [cy];
      }
    });
    Object.entries(circlesToConnect).map(([cx, cys]) => {
      const newCys = cys.filter(
        (cy) => cys.every((otherCy) => !isAdjecentDots(cy, otherCy, cellSize))
      );
      return [Number(cx), newCys];
    }).forEach(([cx, cys]) => {
      cys.forEach((cy) => {
        dots.push(
          b`<circle cx="${cx}" cy="${cy}" fill="${dotColor}" r="${cellSize / CIRCLE_SIZE_MODIFIER}">`
        );
      });
    });
    Object.entries(circlesToConnect).filter(([_, cys]) => cys.length > 1).map(([cx, cys]) => {
      const newCys = cys.filter((cy) => cys.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
      return [Number(cx), newCys];
    }).map(([cx, cys]) => {
      cys.sort((a, b) => a < b ? -1 : 1);
      const groups = [];
      for (const cy of cys) {
        const group = groups.find(
          (item) => item.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize))
        );
        if (group) {
          group.push(cy);
        } else {
          groups.push([cy]);
        }
      }
      return [cx, groups.map((item) => [item[0], item[item.length - 1]])];
    }).forEach(([cx, groups]) => {
      groups.forEach(([y1, y2]) => {
        dots.push(
          b`<line x1="${cx}" x2="${cx}" y1="${y1}" y2="${y2}" stroke="${dotColor}" stroke-width="${cellSize / (CIRCLE_SIZE_MODIFIER / 2)}" stroke-linecap="round">`
        );
      });
    });
    return dots;
  }
};

const styles$k = i`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;

var __defProp$o = Object.defineProperty;
var __getOwnPropDesc$o = Object.getOwnPropertyDescriptor;
var __decorateClass$o = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$o(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$o(target, key, result);
  return result;
};
let WcmQrCode = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.uri = "";
    this.size = 0;
    this.imageId = void 0;
    this.walletId = void 0;
    this.imageUrl = void 0;
  }
  // -- private ------------------------------------------------------ //
  svgTemplate() {
    const isLightMode = dist/* ThemeCtrl */.lH.state.themeMode === "light";
    const size = isLightMode ? this.size : this.size - 18 * 2;
    return b`<svg height="${size}" width="${size}">${QrCodeUtil.generate(this.uri, size, size / 4)}</svg>`;
  }
  // -- render ------------------------------------------------------- //
  render() {
    const classes = {
      "wcm-dark": dist/* ThemeCtrl */.lH.state.themeMode === "dark"
    };
    return x`<div style="${`width: ${this.size}px`}" class="${class_map_o(classes)}">${this.walletId || this.imageUrl ? x`<wcm-wallet-image walletId="${if_defined_l(this.walletId)}" imageId="${if_defined_l(this.imageId)}" imageUrl="${if_defined_l(this.imageUrl)}"></wcm-wallet-image>` : SvgUtil.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
  }
};
WcmQrCode.styles = [ThemeUtil.globalCss, styles$k];
__decorateClass$o([
  property_n()
], WcmQrCode.prototype, "uri", 2);
__decorateClass$o([
  property_n({ type: Number })
], WcmQrCode.prototype, "size", 2);
__decorateClass$o([
  property_n()
], WcmQrCode.prototype, "imageId", 2);
__decorateClass$o([
  property_n()
], WcmQrCode.prototype, "walletId", 2);
__decorateClass$o([
  property_n()
], WcmQrCode.prototype, "imageUrl", 2);
WcmQrCode = __decorateClass$o([
  custom_element_e("wcm-qrcode")
], WcmQrCode);

const styles$j = i`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;

var __defProp$n = Object.defineProperty;
var __getOwnPropDesc$n = Object.getOwnPropertyDescriptor;
var __decorateClass$n = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$n(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$n(target, key, result);
  return result;
};
let WcmSearchInput = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.onChange = () => null;
  }
  // -- render ------------------------------------------------------- //
  render() {
    return x`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${SvgUtil.SEARCH_ICON}`;
  }
};
WcmSearchInput.styles = [ThemeUtil.globalCss, styles$j];
__decorateClass$n([
  property_n()
], WcmSearchInput.prototype, "onChange", 2);
WcmSearchInput = __decorateClass$n([
  custom_element_e("wcm-search-input")
], WcmSearchInput);

const styles$i = i`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;

var __defProp$m = Object.defineProperty;
var __getOwnPropDesc$m = Object.getOwnPropertyDescriptor;
var __decorateClass$m = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$m(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$m(target, key, result);
  return result;
};
let WcmSpinner = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    return x`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
WcmSpinner.styles = [ThemeUtil.globalCss, styles$i];
WcmSpinner = __decorateClass$m([
  custom_element_e("wcm-spinner")
], WcmSpinner);

const styles$h = i`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;

var __defProp$l = Object.defineProperty;
var __getOwnPropDesc$l = Object.getOwnPropertyDescriptor;
var __decorateClass$l = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$l(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$l(target, key, result);
  return result;
};
let WcmText = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.variant = "medium-regular";
    this.color = "primary";
  }
  // -- render ------------------------------------------------------- //
  render() {
    const classes = {
      "wcm-big-bold": this.variant === "big-bold",
      "wcm-medium-regular": this.variant === "medium-regular",
      "wcm-small-regular": this.variant === "small-regular",
      "wcm-small-thin": this.variant === "small-thin",
      "wcm-xsmall-regular": this.variant === "xsmall-regular",
      "wcm-xsmall-bold": this.variant === "xsmall-bold",
      "wcm-color-primary": this.color === "primary",
      "wcm-color-secondary": this.color === "secondary",
      "wcm-color-tertiary": this.color === "tertiary",
      "wcm-color-inverse": this.color === "inverse",
      "wcm-color-accnt": this.color === "accent",
      "wcm-color-error": this.color === "error"
    };
    return x`<span><slot class="${class_map_o(classes)}"></slot></span>`;
  }
};
WcmText.styles = [ThemeUtil.globalCss, styles$h];
__decorateClass$l([
  property_n()
], WcmText.prototype, "variant", 2);
__decorateClass$l([
  property_n()
], WcmText.prototype, "color", 2);
WcmText = __decorateClass$l([
  custom_element_e("wcm-text")
], WcmText);

const styles$g = i`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;

var __defProp$k = Object.defineProperty;
var __getOwnPropDesc$k = Object.getOwnPropertyDescriptor;
var __decorateClass$k = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$k(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$k(target, key, result);
  return result;
};
let WcmWalletButton = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.onClick = () => null;
    this.name = "";
    this.walletId = "";
    this.label = void 0;
    this.imageId = void 0;
    this.installed = false;
    this.recent = false;
  }
  // -- private ------------------------------------------------------ //
  sublabelTemplate() {
    if (this.recent) {
      return x`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>`;
    } else if (this.installed) {
      return x`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>`;
    }
    return null;
  }
  handleClick() {
    dist/* EventsCtrl */.vZ.click({ name: "WALLET_BUTTON", walletId: this.walletId });
    this.onClick();
  }
  // -- render ------------------------------------------------------- //
  render() {
    var _a;
    return x`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${if_defined_l(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(_a = this.label) != null ? _a : UiUtil.getWalletName(this.name, true)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
  }
};
WcmWalletButton.styles = [ThemeUtil.globalCss, styles$g];
__decorateClass$k([
  property_n()
], WcmWalletButton.prototype, "onClick", 2);
__decorateClass$k([
  property_n()
], WcmWalletButton.prototype, "name", 2);
__decorateClass$k([
  property_n()
], WcmWalletButton.prototype, "walletId", 2);
__decorateClass$k([
  property_n()
], WcmWalletButton.prototype, "label", 2);
__decorateClass$k([
  property_n()
], WcmWalletButton.prototype, "imageId", 2);
__decorateClass$k([
  property_n({ type: Boolean })
], WcmWalletButton.prototype, "installed", 2);
__decorateClass$k([
  property_n({ type: Boolean })
], WcmWalletButton.prototype, "recent", 2);
WcmWalletButton = __decorateClass$k([
  custom_element_e("wcm-wallet-button")
], WcmWalletButton);

const styles$f = i`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;

var __defProp$j = Object.defineProperty;
var __getOwnPropDesc$j = Object.getOwnPropertyDescriptor;
var __decorateClass$j = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$j(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$j(target, key, result);
  return result;
};
let WcmWalletImage = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.walletId = "";
    this.imageId = void 0;
    this.imageUrl = void 0;
  }
  // -- render ------------------------------------------------------- //
  render() {
    var _a;
    const src = ((_a = this.imageUrl) == null ? void 0 : _a.length) ? this.imageUrl : UiUtil.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return x`${src.length ? x`<div><img crossorigin="anonymous" src="${src}" alt="${this.id}"></div>` : SvgUtil.WALLET_PLACEHOLDER}`;
  }
};
WcmWalletImage.styles = [ThemeUtil.globalCss, styles$f];
__decorateClass$j([
  property_n()
], WcmWalletImage.prototype, "walletId", 2);
__decorateClass$j([
  property_n()
], WcmWalletImage.prototype, "imageId", 2);
__decorateClass$j([
  property_n()
], WcmWalletImage.prototype, "imageUrl", 2);
WcmWalletImage = __decorateClass$j([
  custom_element_e("wcm-wallet-image")
], WcmWalletImage);

var __defProp$i = Object.defineProperty;
var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
var __decorateClass$i = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$i(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$i(target, key, result);
  return result;
};
let WcmExplorerContext = class extends lit_element_s {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super();
    this.preload = true;
    this.preloadData();
  }
  // -- private ------------------------------------------------------ //
  async loadImages(images) {
    try {
      if (images == null ? void 0 : images.length) {
        await Promise.all(images.map(async (url) => UiUtil.preloadImage(url)));
      }
    } catch (e) {
      console.info("Unsuccessful attempt at preloading some images", images);
    }
  }
  async preloadListings() {
    if (dist/* ConfigCtrl */.mb.state.enableExplorer) {
      await dist/* ExplorerCtrl */.pV.getRecomendedWallets();
      dist/* OptionsCtrl */.IN.setIsDataLoaded(true);
      const { recomendedWallets } = dist/* ExplorerCtrl */.pV.state;
      const walletImgs = recomendedWallets.map((wallet) => UiUtil.getWalletIcon(wallet));
      await this.loadImages(walletImgs);
    } else {
      dist/* OptionsCtrl */.IN.setIsDataLoaded(true);
    }
  }
  async preloadCustomImages() {
    const images = UiUtil.getCustomImageUrls();
    await this.loadImages(images);
  }
  async preloadData() {
    try {
      if (this.preload) {
        this.preload = false;
        await Promise.all([this.preloadListings(), this.preloadCustomImages()]);
      }
    } catch (err) {
      console.error(err);
      dist/* ToastCtrl */.dC.openToast("Failed preloading", "error");
    }
  }
};
__decorateClass$i([
  state_t()
], WcmExplorerContext.prototype, "preload", 2);
WcmExplorerContext = __decorateClass$i([
  custom_element_e("wcm-explorer-context")
], WcmExplorerContext);

var __defProp$h = Object.defineProperty;
var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
var __decorateClass$h = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$h(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$h(target, key, result);
  return result;
};
let WcmThemeContext = class extends lit_element_s {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super();
    // -- private ------------------------------------------------------ //
    this.unsubscribeTheme = void 0;
    ThemeUtil.setTheme();
    this.unsubscribeTheme = dist/* ThemeCtrl */.lH.subscribe(ThemeUtil.setTheme);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.unsubscribeTheme) == null ? void 0 : _a.call(this);
  }
};
WcmThemeContext = __decorateClass$h([
  custom_element_e("wcm-theme-context")
], WcmThemeContext);

const styles$e = i`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;

var __defProp$g = Object.defineProperty;
var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
var __decorateClass$g = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$g(target, key, result);
  return result;
};
let WcmAndroidWalletSelection = class extends lit_element_s {
  // -- private ------------------------------------------------------ //
  onGoToQrcode() {
    dist/* RouterCtrl */.jL.push("Qrcode");
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { recomendedWallets } = dist/* ExplorerCtrl */.pV.state;
    const wallets = [...recomendedWallets, ...recomendedWallets];
    const recomendedCount = dist/* CoreUtil */.Ao.RECOMMENDED_WALLET_AMOUNT * 2;
    return x`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${SvgUtil.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${SvgUtil.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(recomendedCount)].map((_, index) => {
      const wallet = wallets[index % wallets.length];
      return wallet ? x`<wcm-wallet-image walletId="${wallet.id}" imageId="${wallet.image_id}"></wcm-wallet-image>` : SvgUtil.WALLET_PLACEHOLDER;
    })}</div><wcm-button-big @click="${UiUtil.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
  }
};
WcmAndroidWalletSelection.styles = [ThemeUtil.globalCss, styles$e];
WcmAndroidWalletSelection = __decorateClass$g([
  custom_element_e("wcm-android-wallet-selection")
], WcmAndroidWalletSelection);

const styles$d = i`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;

var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$f = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$f(target, key, result);
  return result;
};
let WcmConnectorWaiting = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.walletId = void 0;
    this.imageId = void 0;
    this.isError = false;
    this.isStale = false;
    this.label = "";
  }
  // -- private ------------------------------------------------------ //
  svgLoaderTemplate() {
    var _a, _b;
    const ICON_SIZE = 88;
    const DH_ARRAY = 317;
    const DH_OFFSET = 425;
    const radius = (_b = (_a = dist/* ThemeCtrl */.lH.state.themeVariables) == null ? void 0 : _a["--wcm-wallet-icon-large-border-radius"]) != null ? _b : ThemeUtil.getPreset("--wcm-wallet-icon-large-border-radius");
    let numRadius = 0;
    if (radius.includes("%")) {
      numRadius = ICON_SIZE / 100 * parseInt(radius, 10);
    } else {
      numRadius = parseInt(radius, 10);
    }
    numRadius *= 1.17;
    const dashArray = DH_ARRAY - numRadius * 1.57;
    const dashOffset = DH_OFFSET - numRadius * 1.8;
    return x`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${numRadius}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${dashArray}" stroke-dashoffset="${dashOffset}"></use></svg>`;
  }
  // -- render ------------------------------------------------------- //
  render() {
    const classes = {
      "wcm-error": this.isError,
      "wcm-stale": this.isStale
    };
    return x`<div class="${class_map_o(classes)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${if_defined_l(this.walletId)}" imageId="${if_defined_l(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
  }
};
WcmConnectorWaiting.styles = [ThemeUtil.globalCss, styles$d];
__decorateClass$f([
  property_n()
], WcmConnectorWaiting.prototype, "walletId", 2);
__decorateClass$f([
  property_n()
], WcmConnectorWaiting.prototype, "imageId", 2);
__decorateClass$f([
  property_n({ type: Boolean })
], WcmConnectorWaiting.prototype, "isError", 2);
__decorateClass$f([
  property_n({ type: Boolean })
], WcmConnectorWaiting.prototype, "isStale", 2);
__decorateClass$f([
  property_n()
], WcmConnectorWaiting.prototype, "label", 2);
WcmConnectorWaiting = __decorateClass$f([
  custom_element_e("wcm-connector-waiting")
], WcmConnectorWaiting);

const DataUtil = {
  manualWallets() {
    var _a, _b;
    const { mobileWallets, desktopWallets } = dist/* ConfigCtrl */.mb.state;
    const recentWalletId = (_a = DataUtil.recentWallet()) == null ? void 0 : _a.id;
    const platformWallets = dist/* CoreUtil */.Ao.isMobile() ? mobileWallets : desktopWallets;
    const wallets = platformWallets == null ? void 0 : platformWallets.filter((wallet) => recentWalletId !== wallet.id);
    return (_b = dist/* CoreUtil */.Ao.isMobile() ? wallets == null ? void 0 : wallets.map(({ id, name, links }) => ({ id, name, mobile: links, links })) : wallets == null ? void 0 : wallets.map(({ id, name, links }) => ({ id, name, desktop: links, links }))) != null ? _b : [];
  },
  recentWallet() {
    return UiUtil.getRecentWallet();
  },
  recomendedWallets(skipRecent = false) {
    var _a;
    const recentWalletId = skipRecent ? void 0 : (_a = DataUtil.recentWallet()) == null ? void 0 : _a.id;
    const { recomendedWallets } = dist/* ExplorerCtrl */.pV.state;
    const wallets = recomendedWallets.filter((wallet) => recentWalletId !== wallet.id);
    return wallets;
  }
};

const TemplateUtil = {
  onConnecting(data) {
    UiUtil.goToConnectingView(data);
  },
  manualWalletsTemplate() {
    const wallets = DataUtil.manualWallets();
    return wallets.map(
      (wallet) => x`<wcm-wallet-button walletId="${wallet.id}" name="${wallet.name}" .onClick="${() => this.onConnecting(wallet)}"></wcm-wallet-button>`
    );
  },
  recomendedWalletsTemplate(skipRecent = false) {
    const wallets = DataUtil.recomendedWallets(skipRecent);
    return wallets.map(
      (wallet) => x`<wcm-wallet-button name="${wallet.name}" walletId="${wallet.id}" imageId="${wallet.image_id}" .onClick="${() => this.onConnecting(wallet)}"></wcm-wallet-button>`
    );
  },
  recentWalletTemplate() {
    const wallet = DataUtil.recentWallet();
    if (!wallet) {
      return void 0;
    }
    return x`<wcm-wallet-button name="${wallet.name}" walletId="${wallet.id}" imageId="${if_defined_l(wallet.image_id)}" .recent="${true}" .onClick="${() => this.onConnecting(wallet)}"></wcm-wallet-button>`;
  }
};

const styles$c = i`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;

var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __decorateClass$e = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$e(target, key, result);
  return result;
};
let WcmDesktopWalletSelection = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    const { explorerExcludedWalletIds, enableExplorer } = dist/* ConfigCtrl */.mb.state;
    const isExplorerWallets = explorerExcludedWalletIds !== "ALL" && enableExplorer;
    const manualTemplate = TemplateUtil.manualWalletsTemplate();
    const recomendedTemplate = TemplateUtil.recomendedWalletsTemplate();
    const recentTemplate = TemplateUtil.recentWalletTemplate();
    let templates = [recentTemplate, ...manualTemplate, ...recomendedTemplate];
    templates = templates.filter(Boolean);
    const isViewAll = templates.length > 4 || isExplorerWallets;
    let wallets = [];
    if (isViewAll) {
      wallets = templates.slice(0, 3);
    } else {
      wallets = templates;
    }
    const isWallets = Boolean(wallets.length);
    return x`<wcm-modal-header .border="${true}" title="Connect your wallet" .onAction="${UiUtil.handleUriCopy}" .actionIcon="${SvgUtil.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${SvgUtil.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${SvgUtil.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${isWallets ? x`<wcm-modal-footer><div class="wcm-desktop-title">${SvgUtil.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${wallets} ${isViewAll ? x`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
  }
};
WcmDesktopWalletSelection.styles = [ThemeUtil.globalCss, styles$c];
WcmDesktopWalletSelection = __decorateClass$e([
  custom_element_e("wcm-desktop-wallet-selection")
], WcmDesktopWalletSelection);

const styles$b = i`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;

var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$d = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$d(target, key, result);
  return result;
};
let WcmLegalNotice = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    const { termsOfServiceUrl, privacyPolicyUrl } = dist/* ConfigCtrl */.mb.state;
    const isLegal = termsOfServiceUrl != null ? termsOfServiceUrl : privacyPolicyUrl;
    if (!isLegal) {
      return null;
    }
    return x`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${termsOfServiceUrl ? x`<a href="${termsOfServiceUrl}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${termsOfServiceUrl && privacyPolicyUrl ? "and" : null} ${privacyPolicyUrl ? x`<a href="${privacyPolicyUrl}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>`;
  }
};
WcmLegalNotice.styles = [ThemeUtil.globalCss, styles$b];
WcmLegalNotice = __decorateClass$d([
  custom_element_e("wcm-legal-notice")
], WcmLegalNotice);

const styles$a = i`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;

var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$c = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$c(target, key, result);
  return result;
};
let WcmMobileWalletSelection = class extends lit_element_s {
  // -- private ------------------------------------------------------ //
  onQrcode() {
    dist/* RouterCtrl */.jL.push("Qrcode");
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { explorerExcludedWalletIds, enableExplorer } = dist/* ConfigCtrl */.mb.state;
    const isExplorerWallets = explorerExcludedWalletIds !== "ALL" && enableExplorer;
    const manualTemplate = TemplateUtil.manualWalletsTemplate();
    const recomendedTemplate = TemplateUtil.recomendedWalletsTemplate();
    const recentTemplate = TemplateUtil.recentWalletTemplate();
    let templates = [recentTemplate, ...manualTemplate, ...recomendedTemplate];
    templates = templates.filter(Boolean);
    const isViewAll = templates.length > 8 || isExplorerWallets;
    let wallets = [];
    if (isViewAll) {
      wallets = templates.slice(0, 7);
    } else {
      wallets = templates;
    }
    const isWallets = Boolean(wallets.length);
    return x`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${SvgUtil.QRCODE_ICON}"></wcm-modal-header>${isWallets ? x`<wcm-modal-content><div>${wallets} ${isViewAll ? x`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
  }
};
WcmMobileWalletSelection.styles = [ThemeUtil.globalCss, styles$a];
WcmMobileWalletSelection = __decorateClass$c([
  custom_element_e("wcm-mobile-wallet-selection")
], WcmMobileWalletSelection);

const styles$9 = i`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;

var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$b(target, key, result);
  return result;
};
let WcmModal = class extends lit_element_s {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super();
    this.open = false;
    this.active = false;
    // -- private ------------------------------------------------------ //
    this.unsubscribeModal = void 0;
    this.abortController = void 0;
    this.unsubscribeModal = dist/* ModalCtrl */.D8.subscribe((modalState) => {
      if (modalState.open) {
        this.onOpenModalEvent();
      } else {
        this.onCloseModalEvent();
      }
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.unsubscribeModal) == null ? void 0 : _a.call(this);
  }
  get overlayEl() {
    return UiUtil.getShadowRootElement(this, ".wcm-overlay");
  }
  get containerEl() {
    return UiUtil.getShadowRootElement(this, ".wcm-container");
  }
  toggleBodyScroll(enabled) {
    const body = document.querySelector("body");
    if (body) {
      if (enabled) {
        const wcmStyles = document.getElementById("wcm-styles");
        wcmStyles == null ? void 0 : wcmStyles.remove();
      } else {
        document.head.insertAdjacentHTML(
          "beforeend",
          `<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>`
        );
      }
    }
  }
  onCloseModal(event) {
    if (event.target === event.currentTarget) {
      dist/* ModalCtrl */.D8.close();
    }
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(false);
    this.addKeyboardEvents();
    this.open = true;
    setTimeout(async () => {
      const animation = UiUtil.isMobileAnimation() ? { y: ["50vh", "0vh"] } : { scale: [0.98, 1] };
      const delay = 0.1;
      const duration = 0.2;
      await Promise.all([
        animate_es_animate(this.overlayEl, { opacity: [0, 1] }, { delay, duration }).finished,
        animate_es_animate(this.containerEl, animation, { delay, duration }).finished
      ]);
      this.active = true;
    }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(true);
    this.removeKeyboardEvents();
    const animation = UiUtil.isMobileAnimation() ? { y: ["0vh", "50vh"] } : { scale: [1, 0.98] };
    const duration = 0.2;
    await Promise.all([
      animate_es_animate(this.overlayEl, { opacity: [1, 0] }, { duration }).finished,
      animate_es_animate(this.containerEl, animation, { duration }).finished
    ]);
    this.containerEl.removeAttribute("style");
    this.active = false;
    this.open = false;
  }
  addKeyboardEvents() {
    this.abortController = new AbortController();
    window.addEventListener(
      "keydown",
      (event) => {
        var _a;
        if (event.key === "Escape") {
          dist/* ModalCtrl */.D8.close();
        } else if (event.key === "Tab") {
          if (!((_a = event.target) == null ? void 0 : _a.tagName.includes("wcm-"))) {
            this.containerEl.focus();
          }
        }
      },
      this.abortController
    );
    this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var _a;
    (_a = this.abortController) == null ? void 0 : _a.abort();
    this.abortController = void 0;
  }
  // -- render ------------------------------------------------------- //
  render() {
    const classes = {
      "wcm-overlay": true,
      "wcm-active": this.active
    };
    return x`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${class_map_o(classes)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? x`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
  }
};
WcmModal.styles = [ThemeUtil.globalCss, styles$9];
__decorateClass$b([
  state_t()
], WcmModal.prototype, "open", 2);
__decorateClass$b([
  state_t()
], WcmModal.prototype, "active", 2);
WcmModal = __decorateClass$b([
  custom_element_e("wcm-modal")
], WcmModal);

const styles$8 = i`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;

var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$a(target, key, result);
  return result;
};
let WcmPlatformSelection = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.isMobile = false;
    this.isDesktop = false;
    this.isWeb = false;
    this.isRetry = false;
  }
  // -- private ------------------------------------------------------ //
  onMobile() {
    const isMobile = dist/* CoreUtil */.Ao.isMobile();
    if (isMobile) {
      dist/* RouterCtrl */.jL.replace("MobileConnecting");
    } else {
      dist/* RouterCtrl */.jL.replace("MobileQrcodeConnecting");
    }
  }
  onDesktop() {
    dist/* RouterCtrl */.jL.replace("DesktopConnecting");
  }
  onWeb() {
    dist/* RouterCtrl */.jL.replace("WebConnecting");
  }
  // -- render ------------------------------------------------------- //
  render() {
    return x`<div>${this.isRetry ? x`<slot></slot>` : null} ${this.isMobile ? x`<wcm-button .onClick="${this.onMobile}" .iconLeft="${SvgUtil.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? x`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${SvgUtil.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? x`<wcm-button .onClick="${this.onWeb}" .iconLeft="${SvgUtil.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
  }
};
WcmPlatformSelection.styles = [ThemeUtil.globalCss, styles$8];
__decorateClass$a([
  property_n({ type: Boolean })
], WcmPlatformSelection.prototype, "isMobile", 2);
__decorateClass$a([
  property_n({ type: Boolean })
], WcmPlatformSelection.prototype, "isDesktop", 2);
__decorateClass$a([
  property_n({ type: Boolean })
], WcmPlatformSelection.prototype, "isWeb", 2);
__decorateClass$a([
  property_n({ type: Boolean })
], WcmPlatformSelection.prototype, "isRetry", 2);
WcmPlatformSelection = __decorateClass$a([
  custom_element_e("wcm-platform-selection")
], WcmPlatformSelection);

const styles$7 = i`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;

var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$9(target, key, result);
  return result;
};
let WcmViewAllWalletsButton = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  onClick() {
    dist/* RouterCtrl */.jL.push("WalletExplorer");
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { recomendedWallets } = dist/* ExplorerCtrl */.pV.state;
    const manualWallets = DataUtil.manualWallets();
    const reversedWallets = [...recomendedWallets, ...manualWallets].reverse().slice(0, 4);
    return x`<button @click="${this.onClick}"><div class="wcm-icons">${reversedWallets.map((wallet) => {
      const explorerImg = UiUtil.getWalletIcon(wallet);
      if (explorerImg) {
        return x`<img crossorigin="anonymous" src="${explorerImg}">`;
      }
      const src = UiUtil.getWalletIcon({ id: wallet.id });
      return src ? x`<img crossorigin="anonymous" src="${src}">` : SvgUtil.WALLET_PLACEHOLDER;
    })} ${[...Array(4 - reversedWallets.length)].map(() => SvgUtil.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
  }
};
WcmViewAllWalletsButton.styles = [ThemeUtil.globalCss, styles$7];
WcmViewAllWalletsButton = __decorateClass$9([
  custom_element_e("wcm-view-all-wallets-button")
], WcmViewAllWalletsButton);

const styles$6 = i`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;

var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$8(target, key, result);
  return result;
};
let WcmWalletConnectQr = class extends lit_element_s {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super();
    this.walletId = "";
    this.imageId = "";
    this.uri = "";
    setTimeout(() => {
      const { walletConnectUri } = dist/* OptionsCtrl */.IN.state;
      this.uri = walletConnectUri;
    }, 0);
  }
  // -- private ------------------------------------------------------ //
  get overlayEl() {
    return UiUtil.getShadowRootElement(this, ".wcm-qr-container");
  }
  // -- render ------------------------------------------------------- //
  render() {
    return x`<div class="wcm-qr-container">${this.uri ? x`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${if_defined_l(this.walletId)}" imageId="${if_defined_l(this.imageId)}"></wcm-qrcode>` : x`<wcm-spinner></wcm-spinner>`}</div>`;
  }
};
WcmWalletConnectQr.styles = [ThemeUtil.globalCss, styles$6];
__decorateClass$8([
  property_n()
], WcmWalletConnectQr.prototype, "walletId", 2);
__decorateClass$8([
  property_n()
], WcmWalletConnectQr.prototype, "imageId", 2);
__decorateClass$8([
  state_t()
], WcmWalletConnectQr.prototype, "uri", 2);
WcmWalletConnectQr = __decorateClass$8([
  custom_element_e("wcm-walletconnect-qr")
], WcmWalletConnectQr);

var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target, key, result);
  return result;
};
let WcmConnectWalletView = class extends lit_element_s {
  // -- private ------------------------------------------------------ //
  viewTemplate() {
    if (dist/* CoreUtil */.Ao.isAndroid() && !dist/* CoreUtil */.Ao.isTelegram()) {
      return x`<wcm-android-wallet-selection></wcm-android-wallet-selection>`;
    }
    if (dist/* CoreUtil */.Ao.isMobile()) {
      return x`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>`;
    }
    return x`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
  }
  // -- render ------------------------------------------------------- //
  render() {
    return x`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
  }
};
WcmConnectWalletView.styles = [ThemeUtil.globalCss];
WcmConnectWalletView = __decorateClass$7([
  custom_element_e("wcm-connect-wallet-view")
], WcmConnectWalletView);

const styles$5 = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;

var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$6(target, key, result);
  return result;
};
let WcmDesktopConnectingView = class extends lit_element_s {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super();
    this.isError = false;
    this.openDesktopApp();
  }
  // -- private ------------------------------------------------------ //
  onFormatAndRedirect(uri) {
    const { desktop, name } = dist/* CoreUtil */.Ao.getWalletRouterData();
    const nativeUrl = desktop == null ? void 0 : desktop.native;
    const universalUrl = desktop == null ? void 0 : desktop.universal;
    if (nativeUrl) {
      const href = dist/* CoreUtil */.Ao.formatNativeUrl(nativeUrl, uri, name);
      dist/* CoreUtil */.Ao.openHref(href, "_self");
    } else if (universalUrl) {
      const href = dist/* CoreUtil */.Ao.formatUniversalUrl(universalUrl, uri, name);
      dist/* CoreUtil */.Ao.openHref(href, "_blank");
    }
  }
  openDesktopApp() {
    const { walletConnectUri } = dist/* OptionsCtrl */.IN.state;
    const routerData = dist/* CoreUtil */.Ao.getWalletRouterData();
    UiUtil.setRecentWallet(routerData);
    if (walletConnectUri) {
      this.onFormatAndRedirect(walletConnectUri);
    }
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { name, id, image_id } = dist/* CoreUtil */.Ao.getWalletRouterData();
    const { isMobile, isWeb } = UiUtil.getCachedRouterWalletPlatforms();
    return x`<wcm-modal-header title="${name}" .onAction="${UiUtil.handleUriCopy}" .actionIcon="${SvgUtil.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${id}" imageId="${if_defined_l(image_id)}" label="${`Continue in ${name}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${name} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${isMobile}" .isWeb="${isWeb}" .isRetry="${true}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${SvgUtil.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
WcmDesktopConnectingView.styles = [ThemeUtil.globalCss, styles$5];
__decorateClass$6([
  state_t()
], WcmDesktopConnectingView.prototype, "isError", 2);
WcmDesktopConnectingView = __decorateClass$6([
  custom_element_e("wcm-desktop-connecting-view")
], WcmDesktopConnectingView);

const styles$4 = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;

var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
let WcmInstallWalletView = class extends lit_element_s {
  // -- private ------------------------------------------------------ //
  onInstall(uri) {
    if (uri) {
      dist/* CoreUtil */.Ao.openHref(uri, "_blank");
    }
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { name, id, image_id, homepage } = dist/* CoreUtil */.Ao.getWalletRouterData();
    return x`<wcm-modal-header title="${name}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${id}" imageId="${if_defined_l(image_id)}" label="Not Detected" .isStale="${true}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${name} to continue. If multiple browser extensions are installed, disable non ${name} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(homepage)}" .iconLeft="${SvgUtil.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
  }
};
WcmInstallWalletView.styles = [ThemeUtil.globalCss, styles$4];
WcmInstallWalletView = __decorateClass$5([
  custom_element_e("wcm-install-wallet-view")
], WcmInstallWalletView);

const styles$3 = i`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;

var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
let WcmMobileConnectingView = class extends lit_element_s {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super();
    this.isError = false;
    this.openMobileApp();
  }
  // -- private ------------------------------------------------------ //
  onFormatAndRedirect(uri, forceUniversalUrl = false) {
    const { mobile, name } = dist/* CoreUtil */.Ao.getWalletRouterData();
    const nativeUrl = mobile == null ? void 0 : mobile.native;
    const universalUrl = mobile == null ? void 0 : mobile.universal;
    const target = dist/* CoreUtil */.Ao.isTelegram() ? "_blank" : "_self";
    uri = dist/* CoreUtil */.Ao.isTelegram() && dist/* CoreUtil */.Ao.isAndroid() ? encodeURIComponent(uri) : uri;
    if (nativeUrl && !forceUniversalUrl) {
      const href = dist/* CoreUtil */.Ao.formatNativeUrl(nativeUrl, uri, name);
      dist/* CoreUtil */.Ao.openHref(href, target);
    } else if (universalUrl) {
      const href = dist/* CoreUtil */.Ao.formatUniversalUrl(universalUrl, uri, name);
      dist/* CoreUtil */.Ao.openHref(href, target);
    }
  }
  openMobileApp(forceUniversalUrl = false) {
    const { walletConnectUri } = dist/* OptionsCtrl */.IN.state;
    const routerData = dist/* CoreUtil */.Ao.getWalletRouterData();
    if (walletConnectUri) {
      this.onFormatAndRedirect(walletConnectUri, forceUniversalUrl);
    }
    UiUtil.setRecentWallet(routerData);
  }
  onGoToAppStore(downloadUrl) {
    if (downloadUrl) {
      dist/* CoreUtil */.Ao.openHref(downloadUrl, "_blank");
    }
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { name, id, image_id, app, mobile } = dist/* CoreUtil */.Ao.getWalletRouterData();
    const { isWeb } = UiUtil.getCachedRouterWalletPlatforms();
    const downloadUrl = app == null ? void 0 : app.ios;
    const universalUrl = mobile == null ? void 0 : mobile.universal;
    return x`<wcm-modal-header title="${name}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${id}" imageId="${if_defined_l(image_id)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${isWeb}" .isRetry="${true}"><wcm-button .onClick="${() => this.openMobileApp(false)}" .iconRight="${SvgUtil.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${universalUrl ? x`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(true)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${id}" imageId="${if_defined_l(image_id)}"></wcm-wallet-image><wcm-text>${`Get ${name}`}</wcm-text></div><wcm-button .iconRight="${SvgUtil.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(downloadUrl)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
  }
};
WcmMobileConnectingView.styles = [ThemeUtil.globalCss, styles$3];
__decorateClass$4([
  state_t()
], WcmMobileConnectingView.prototype, "isError", 2);
WcmMobileConnectingView = __decorateClass$4([
  custom_element_e("wcm-mobile-connecting-view")
], WcmMobileConnectingView);

const styles$2 = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;

var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let WcmMobileQrConnectingView = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    const { name, id, image_id } = dist/* CoreUtil */.Ao.getWalletRouterData();
    const { isDesktop, isWeb } = UiUtil.getCachedRouterWalletPlatforms();
    return x`<wcm-modal-header title="${name}" .onAction="${UiUtil.handleUriCopy}" .actionIcon="${SvgUtil.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${id}" imageId="${if_defined_l(image_id)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${name} app`}</wcm-text><wcm-platform-selection .isDesktop="${isDesktop}" .isWeb="${isWeb}"></wcm-platform-selection></wcm-info-footer>`;
  }
};
WcmMobileQrConnectingView.styles = [ThemeUtil.globalCss, styles$2];
WcmMobileQrConnectingView = __decorateClass$3([
  custom_element_e("wcm-mobile-qr-connecting-view")
], WcmMobileQrConnectingView);

var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let WcmQrcodeView = class extends lit_element_s {
  // -- render ------------------------------------------------------- //
  render() {
    return x`<wcm-modal-header title="Scan the code" .onAction="${UiUtil.handleUriCopy}" .actionIcon="${SvgUtil.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
  }
};
WcmQrcodeView.styles = [ThemeUtil.globalCss];
WcmQrcodeView = __decorateClass$2([
  custom_element_e("wcm-qrcode-view")
], WcmQrcodeView);

const styles$1 = i`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
const PAGE_ENTRIES = 40;
let WcmWalletExplorerView = class extends lit_element_s {
  constructor() {
    super(...arguments);
    this.loading = !dist/* ExplorerCtrl */.pV.state.wallets.listings.length;
    this.firstFetch = !dist/* ExplorerCtrl */.pV.state.wallets.listings.length;
    this.search = "";
    this.endReached = false;
    this.intersectionObserver = void 0;
    this.searchDebounce = UiUtil.debounce((value) => {
      if (value.length >= 1) {
        this.firstFetch = true;
        this.endReached = false;
        this.search = value;
        dist/* ExplorerCtrl */.pV.resetSearch();
        this.fetchWallets();
      } else if (this.search) {
        this.search = "";
        this.endReached = this.isLastPage();
        dist/* ExplorerCtrl */.pV.resetSearch();
      }
    });
  }
  // -- lifecycle ---------------------------------------------------- //
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.intersectionObserver) == null ? void 0 : _a.disconnect();
  }
  // -- private ------------------------------------------------------ //
  get placeholderEl() {
    return UiUtil.getShadowRootElement(this, ".wcm-placeholder-block");
  }
  createPaginationObserver() {
    this.intersectionObserver = new IntersectionObserver(([element]) => {
      if (element.isIntersecting && !(this.search && this.firstFetch)) {
        this.fetchWallets();
      }
    });
    this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets, search } = dist/* ExplorerCtrl */.pV.state;
    const { listings, total } = this.search ? search : wallets;
    return total <= PAGE_ENTRIES || listings.length >= total;
  }
  async fetchWallets() {
    var _a;
    const { wallets, search } = dist/* ExplorerCtrl */.pV.state;
    const { listings, total, page } = this.search ? search : wallets;
    if (!this.endReached && (this.firstFetch || total > PAGE_ENTRIES && listings.length < total)) {
      try {
        this.loading = true;
        const chains = (_a = dist/* OptionsCtrl */.IN.state.chains) == null ? void 0 : _a.join(",");
        const { listings: newListings } = await dist/* ExplorerCtrl */.pV.getWallets({
          page: this.firstFetch ? 1 : page + 1,
          entries: PAGE_ENTRIES,
          search: this.search,
          version: 2,
          chains
        });
        const explorerImages = newListings.map((wallet) => UiUtil.getWalletIcon(wallet));
        await Promise.all([
          ...explorerImages.map(async (url) => UiUtil.preloadImage(url)),
          dist/* CoreUtil */.Ao.wait(300)
        ]);
        this.endReached = this.isLastPage();
      } catch (err) {
        console.error(err);
        dist/* ToastCtrl */.dC.openToast(UiUtil.getErrorMessage(err), "error");
      } finally {
        this.loading = false;
        this.firstFetch = false;
      }
    }
  }
  onConnect(listing) {
    if (dist/* CoreUtil */.Ao.isAndroid()) {
      UiUtil.handleMobileLinking(listing);
    } else {
      UiUtil.goToConnectingView(listing);
    }
  }
  onSearchChange(event) {
    const { value } = event.target;
    this.searchDebounce(value);
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { wallets, search } = dist/* ExplorerCtrl */.pV.state;
    const { listings } = this.search ? search : wallets;
    const isLoading = this.loading && !listings.length;
    const isSearch = this.search.length >= 3;
    let manualWallets = TemplateUtil.manualWalletsTemplate();
    let recomendedWallets = TemplateUtil.recomendedWalletsTemplate(true);
    if (isSearch) {
      manualWallets = manualWallets.filter(
        ({ values }) => UiUtil.caseSafeIncludes(values[0], this.search)
      );
      recomendedWallets = recomendedWallets.filter(
        ({ values }) => UiUtil.caseSafeIncludes(values[0], this.search)
      );
    }
    const isEmpty = !this.loading && !listings.length && !recomendedWallets.length;
    const classes = {
      "wcm-loading": isLoading,
      "wcm-end-reached": this.endReached || !this.loading,
      "wcm-empty": isEmpty
    };
    return x`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${class_map_o(classes)}"><div class="wcm-grid">${isLoading ? null : manualWallets} ${isLoading ? null : recomendedWallets} ${isLoading ? null : listings.map(
      (listing) => x`${listing ? x`<wcm-wallet-button imageId="${listing.image_id}" name="${listing.name}" walletId="${listing.id}" .onClick="${() => this.onConnect(listing)}"></wcm-wallet-button>` : null}`
    )}</div><div class="wcm-placeholder-block">${isEmpty ? x`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!isEmpty && this.loading ? x`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
  }
};
WcmWalletExplorerView.styles = [ThemeUtil.globalCss, styles$1];
__decorateClass$1([
  state_t()
], WcmWalletExplorerView.prototype, "loading", 2);
__decorateClass$1([
  state_t()
], WcmWalletExplorerView.prototype, "firstFetch", 2);
__decorateClass$1([
  state_t()
], WcmWalletExplorerView.prototype, "search", 2);
__decorateClass$1([
  state_t()
], WcmWalletExplorerView.prototype, "endReached", 2);
WcmWalletExplorerView = __decorateClass$1([
  custom_element_e("wcm-wallet-explorer-view")
], WcmWalletExplorerView);

const styles = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let WcmWebConnectingView = class extends lit_element_s {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super();
    this.isError = false;
    this.openWebWallet();
  }
  // -- private ------------------------------------------------------ //
  onFormatAndRedirect(uri) {
    const { desktop, name } = dist/* CoreUtil */.Ao.getWalletRouterData();
    const universalUrl = desktop == null ? void 0 : desktop.universal;
    if (universalUrl) {
      const href = dist/* CoreUtil */.Ao.formatUniversalUrl(universalUrl, uri, name);
      dist/* CoreUtil */.Ao.openHref(href, "_blank");
    }
  }
  openWebWallet() {
    const { walletConnectUri } = dist/* OptionsCtrl */.IN.state;
    const routerData = dist/* CoreUtil */.Ao.getWalletRouterData();
    UiUtil.setRecentWallet(routerData);
    if (walletConnectUri) {
      this.onFormatAndRedirect(walletConnectUri);
    }
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { name, id, image_id } = dist/* CoreUtil */.Ao.getWalletRouterData();
    const { isMobile, isDesktop } = UiUtil.getCachedRouterWalletPlatforms();
    const isMobilePlatform = dist/* CoreUtil */.Ao.isMobile();
    return x`<wcm-modal-header title="${name}" .onAction="${UiUtil.handleUriCopy}" .actionIcon="${SvgUtil.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${id}" imageId="${if_defined_l(image_id)}" label="${`Continue in ${name}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${name} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${isMobile}" .isDesktop="${isMobilePlatform ? false : isDesktop}" .isRetry="${true}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${SvgUtil.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
WcmWebConnectingView.styles = [ThemeUtil.globalCss, styles];
__decorateClass([
  state_t()
], WcmWebConnectingView.prototype, "isError", 2);
WcmWebConnectingView = __decorateClass([
  custom_element_e("wcm-web-connecting-view")
], WcmWebConnectingView);


//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtdWkvbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9jc3MtdGFnLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L21vZGFsLXVpL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvcmVhY3RpdmUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9tb2RhbC11aS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtdWkvbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L21vZGFsLXVpL25vZGVfbW9kdWxlcy9saXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtdWkvbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L21vZGFsLXVpL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9tb2RhbC11aS9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtdWkvbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L21vZGFsLXVpL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9tb2RhbC11aS9ub2RlX21vZHVsZXMvbGl0L2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtdWkvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9tb2RhbC11aS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtdWkvbm9kZV9tb2R1bGVzL2xpdC9kaXJlY3RpdmVzL2NsYXNzLW1hcC5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3V0aWxzL2Rpc3QvZGVmYXVsdHMuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS91dGlscy9kaXN0L3RpbWUuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS91dGlscy9kaXN0L25vb3AuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9kb20vZGlzdC9hbmltYXRlL3V0aWxzL3N0b3AtYW5pbWF0aW9uLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZG9tL2Rpc3QvYW5pbWF0ZS91dGlscy9jb250cm9scy5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3V0aWxzL2Rpc3QvaXMtZWFzaW5nLWdlbmVyYXRvci5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3V0aWxzL2Rpc3QvaXMtbnVtYmVyLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdXRpbHMvZGlzdC9pcy1lYXNpbmctbGlzdC5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3V0aWxzL2Rpc3QvbWl4LmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdXRpbHMvZGlzdC9wcm9ncmVzcy5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3V0aWxzL2Rpc3Qvb2Zmc2V0LmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdXRpbHMvZGlzdC93cmFwLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdXRpbHMvZGlzdC9lYXNpbmcuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS91dGlscy9kaXN0L2NsYW1wLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdXRpbHMvZGlzdC9pbnRlcnBvbGF0ZS5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2Vhc2luZy9kaXN0L2N1YmljLWJlemllci5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2Vhc2luZy9kaXN0L3N0ZXBzLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdXRpbHMvZGlzdC9pcy1mdW5jdGlvbi5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3V0aWxzL2Rpc3QvaXMtY3ViaWMtYmV6aWVyLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvYW5pbWF0aW9uL2Rpc3QvdXRpbHMvZWFzaW5nLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvYW5pbWF0aW9uL2Rpc3QvQW5pbWF0aW9uLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL2hleS1saXN0ZW4vZGlzdC9oZXktbGlzdGVuLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdHlwZXMvZGlzdC9Nb3Rpb25WYWx1ZS5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2RvbS9kaXN0L2FuaW1hdGUvZGF0YS5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3V0aWxzL2Rpc3QvYXJyYXkuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9kb20vZGlzdC9hbmltYXRlL3V0aWxzL3RyYW5zZm9ybXMuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9kb20vZGlzdC9hbmltYXRlL3V0aWxzL2Nzcy12YXIuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9kb20vZGlzdC9hbmltYXRlL3V0aWxzL2ZlYXR1cmUtZGV0ZWN0aW9uLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZG9tL2Rpc3QvYW5pbWF0ZS91dGlscy9lYXNpbmcuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9kb20vZGlzdC9hbmltYXRlL3V0aWxzL2tleWZyYW1lcy5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2RvbS9kaXN0L2FuaW1hdGUvdXRpbHMvZ2V0LXN0eWxlLW5hbWUuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9kb20vZGlzdC9hbmltYXRlL3N0eWxlLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvdXRpbHMvZGlzdC9pcy1zdHJpbmcuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9kb20vZGlzdC9hbmltYXRlL3V0aWxzL2dldC11bml0LmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZG9tL2Rpc3QvYW5pbWF0ZS9hbmltYXRlLXN0eWxlLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZG9tL2Rpc3QvYW5pbWF0ZS91dGlscy9vcHRpb25zLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZG9tL2Rpc3QvdXRpbHMvcmVzb2x2ZS1lbGVtZW50cy5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL2RvbS9kaXN0L3V0aWxzL3N0YWdnZXIuZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9kb20vZGlzdC9hbmltYXRlL2NyZWF0ZS1hbmltYXRlLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZG9tL2Rpc3QvYW5pbWF0ZS9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9tb3Rpb24vZGlzdC9hbmltYXRlLmVzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L21vZGFsLXVpL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kaXJlY3RpdmVzL2lmLWRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtdWkvbm9kZV9tb2R1bGVzL2xpdC9kaXJlY3RpdmVzL2lmLWRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtdWkvZGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHQ9d2luZG93LGU9dC5TaGFkb3dSb290JiYodm9pZCAwPT09dC5TaGFkeUNTU3x8dC5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpJiZcImFkb3B0ZWRTdHlsZVNoZWV0c1wiaW4gRG9jdW1lbnQucHJvdG90eXBlJiZcInJlcGxhY2VcImluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLHM9U3ltYm9sKCksbj1uZXcgV2Vha01hcDtjbGFzcyBve2NvbnN0cnVjdG9yKHQsZSxuKXtpZih0aGlzLl8kY3NzUmVzdWx0JD0hMCxuIT09cyl0aHJvdyBFcnJvcihcIkNTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuXCIpO3RoaXMuY3NzVGV4dD10LHRoaXMudD1lfWdldCBzdHlsZVNoZWV0KCl7bGV0IHQ9dGhpcy5vO2NvbnN0IHM9dGhpcy50O2lmKGUmJnZvaWQgMD09PXQpe2NvbnN0IGU9dm9pZCAwIT09cyYmMT09PXMubGVuZ3RoO2UmJih0PW4uZ2V0KHMpKSx2b2lkIDA9PT10JiYoKHRoaXMubz10PW5ldyBDU1NTdHlsZVNoZWV0KS5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpLGUmJm4uc2V0KHMsdCkpfXJldHVybiB0fXRvU3RyaW5nKCl7cmV0dXJuIHRoaXMuY3NzVGV4dH19Y29uc3Qgcj10PT5uZXcgbyhcInN0cmluZ1wiPT10eXBlb2YgdD90OnQrXCJcIix2b2lkIDAscyksaT0odCwuLi5lKT0+e2NvbnN0IG49MT09PXQubGVuZ3RoP3RbMF06ZS5yZWR1Y2UoKChlLHMsbik9PmUrKHQ9PntpZighMD09PXQuXyRjc3NSZXN1bHQkKXJldHVybiB0LmNzc1RleHQ7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpcmV0dXJuIHQ7dGhyb3cgRXJyb3IoXCJWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogXCIrdCtcIi4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXQgdGFrZSBjYXJlIHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LlwiKX0pKHMpK3RbbisxXSksdFswXSk7cmV0dXJuIG5ldyBvKG4sdCxzKX0sUz0ocyxuKT0+e2U/cy5hZG9wdGVkU3R5bGVTaGVldHM9bi5tYXAoKHQ9PnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0P3Q6dC5zdHlsZVNoZWV0KSk6bi5mb3JFYWNoKChlPT57Y29uc3Qgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksbz10LmxpdE5vbmNlO3ZvaWQgMCE9PW8mJm4uc2V0QXR0cmlidXRlKFwibm9uY2VcIixvKSxuLnRleHRDb250ZW50PWUuY3NzVGV4dCxzLmFwcGVuZENoaWxkKG4pfSkpfSxjPWU/dD0+dDp0PT50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldD8odD0+e2xldCBlPVwiXCI7Zm9yKGNvbnN0IHMgb2YgdC5jc3NSdWxlcyllKz1zLmNzc1RleHQ7cmV0dXJuIHIoZSl9KSh0KTp0O2V4cG9ydHtvIGFzIENTU1Jlc3VsdCxTIGFzIGFkb3B0U3R5bGVzLGkgYXMgY3NzLGMgYXMgZ2V0Q29tcGF0aWJsZVN0eWxlLGUgYXMgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzLHIgYXMgdW5zYWZlQ1NTfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy10YWcuanMubWFwXG4iLCJpbXBvcnR7Z2V0Q29tcGF0aWJsZVN0eWxlIGFzIHQsYWRvcHRTdHlsZXMgYXMgaX1mcm9tXCIuL2Nzcy10YWcuanNcIjtleHBvcnR7Q1NTUmVzdWx0LGFkb3B0U3R5bGVzLGNzcyxnZXRDb21wYXRpYmxlU3R5bGUsc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzLHVuc2FmZUNTU31mcm9tXCIuL2Nzcy10YWcuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL3ZhciBzO2NvbnN0IGU9d2luZG93LHI9ZS50cnVzdGVkVHlwZXMsaD1yP3IuZW1wdHlTY3JpcHQ6XCJcIixvPWUucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0LG49e3RvQXR0cmlidXRlKHQsaSl7c3dpdGNoKGkpe2Nhc2UgQm9vbGVhbjp0PXQ/aDpudWxsO2JyZWFrO2Nhc2UgT2JqZWN0OmNhc2UgQXJyYXk6dD1udWxsPT10P3Q6SlNPTi5zdHJpbmdpZnkodCl9cmV0dXJuIHR9LGZyb21BdHRyaWJ1dGUodCxpKXtsZXQgcz10O3N3aXRjaChpKXtjYXNlIEJvb2xlYW46cz1udWxsIT09dDticmVhaztjYXNlIE51bWJlcjpzPW51bGw9PT10P251bGw6TnVtYmVyKHQpO2JyZWFrO2Nhc2UgT2JqZWN0OmNhc2UgQXJyYXk6dHJ5e3M9SlNPTi5wYXJzZSh0KX1jYXRjaCh0KXtzPW51bGx9fXJldHVybiBzfX0sYT0odCxpKT0+aSE9PXQmJihpPT1pfHx0PT10KSxsPXthdHRyaWJ1dGU6ITAsdHlwZTpTdHJpbmcsY29udmVydGVyOm4scmVmbGVjdDohMSxoYXNDaGFuZ2VkOmF9LGQ9XCJmaW5hbGl6ZWRcIjtjbGFzcyB1IGV4dGVuZHMgSFRNTEVsZW1lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuXyRFaT1uZXcgTWFwLHRoaXMuaXNVcGRhdGVQZW5kaW5nPSExLHRoaXMuaGFzVXBkYXRlZD0hMSx0aGlzLl8kRWw9bnVsbCx0aGlzLl8kRXUoKX1zdGF0aWMgYWRkSW5pdGlhbGl6ZXIodCl7dmFyIGk7dGhpcy5maW5hbGl6ZSgpLChudWxsIT09KGk9dGhpcy5oKSYmdm9pZCAwIT09aT9pOnRoaXMuaD1bXSkucHVzaCh0KX1zdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3RoaXMuZmluYWxpemUoKTtjb25zdCB0PVtdO3JldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKChpLHMpPT57Y29uc3QgZT10aGlzLl8kRXAocyxpKTt2b2lkIDAhPT1lJiYodGhpcy5fJEV2LnNldChlLHMpLHQucHVzaChlKSl9KSksdH1zdGF0aWMgY3JlYXRlUHJvcGVydHkodCxpPWwpe2lmKGkuc3RhdGUmJihpLmF0dHJpYnV0ZT0hMSksdGhpcy5maW5hbGl6ZSgpLHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KHQsaSksIWkubm9BY2Nlc3NvciYmIXRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KHQpKXtjb25zdCBzPVwic3ltYm9sXCI9PXR5cGVvZiB0P1N5bWJvbCgpOlwiX19cIit0LGU9dGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IodCxzLGkpO3ZvaWQgMCE9PWUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSx0LGUpfX1zdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHQsaSxzKXtyZXR1cm57Z2V0KCl7cmV0dXJuIHRoaXNbaV19LHNldChlKXtjb25zdCByPXRoaXNbdF07dGhpc1tpXT1lLHRoaXMucmVxdWVzdFVwZGF0ZSh0LHIscyl9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfX1zdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKHQpe3JldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmdldCh0KXx8bH1zdGF0aWMgZmluYWxpemUoKXtpZih0aGlzLmhhc093blByb3BlcnR5KGQpKXJldHVybiExO3RoaXNbZF09ITA7Y29uc3QgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7aWYodC5maW5hbGl6ZSgpLHZvaWQgMCE9PXQuaCYmKHRoaXMuaD1bLi4udC5oXSksdGhpcy5lbGVtZW50UHJvcGVydGllcz1uZXcgTWFwKHQuZWxlbWVudFByb3BlcnRpZXMpLHRoaXMuXyRFdj1uZXcgTWFwLHRoaXMuaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpKXtjb25zdCB0PXRoaXMucHJvcGVydGllcyxpPVsuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KSwuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpXTtmb3IoY29uc3QgcyBvZiBpKXRoaXMuY3JlYXRlUHJvcGVydHkocyx0W3NdKX1yZXR1cm4gdGhpcy5lbGVtZW50U3R5bGVzPXRoaXMuZmluYWxpemVTdHlsZXModGhpcy5zdHlsZXMpLCEwfXN0YXRpYyBmaW5hbGl6ZVN0eWxlcyhpKXtjb25zdCBzPVtdO2lmKEFycmF5LmlzQXJyYXkoaSkpe2NvbnN0IGU9bmV3IFNldChpLmZsYXQoMS8wKS5yZXZlcnNlKCkpO2Zvcihjb25zdCBpIG9mIGUpcy51bnNoaWZ0KHQoaSkpfWVsc2Ugdm9pZCAwIT09aSYmcy5wdXNoKHQoaSkpO3JldHVybiBzfXN0YXRpYyBfJEVwKHQsaSl7Y29uc3Qgcz1pLmF0dHJpYnV0ZTtyZXR1cm4hMT09PXM/dm9pZCAwOlwic3RyaW5nXCI9PXR5cGVvZiBzP3M6XCJzdHJpbmdcIj09dHlwZW9mIHQ/dC50b0xvd2VyQ2FzZSgpOnZvaWQgMH1fJEV1KCl7dmFyIHQ7dGhpcy5fJEVfPW5ldyBQcm9taXNlKCh0PT50aGlzLmVuYWJsZVVwZGF0aW5nPXQpKSx0aGlzLl8kQUw9bmV3IE1hcCx0aGlzLl8kRWcoKSx0aGlzLnJlcXVlc3RVcGRhdGUoKSxudWxsPT09KHQ9dGhpcy5jb25zdHJ1Y3Rvci5oKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT50KHRoaXMpKSl9YWRkQ29udHJvbGxlcih0KXt2YXIgaSxzOyhudWxsIT09KGk9dGhpcy5fJEVTKSYmdm9pZCAwIT09aT9pOnRoaXMuXyRFUz1bXSkucHVzaCh0KSx2b2lkIDAhPT10aGlzLnJlbmRlclJvb3QmJnRoaXMuaXNDb25uZWN0ZWQmJihudWxsPT09KHM9dC5ob3N0Q29ubmVjdGVkKXx8dm9pZCAwPT09c3x8cy5jYWxsKHQpKX1yZW1vdmVDb250cm9sbGVyKHQpe3ZhciBpO251bGw9PT0oaT10aGlzLl8kRVMpfHx2b2lkIDA9PT1pfHxpLnNwbGljZSh0aGlzLl8kRVMuaW5kZXhPZih0KT4+PjAsMSl9XyRFZygpe3RoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoKHQsaSk9Pnt0aGlzLmhhc093blByb3BlcnR5KGkpJiYodGhpcy5fJEVpLnNldChpLHRoaXNbaV0pLGRlbGV0ZSB0aGlzW2ldKX0pKX1jcmVhdGVSZW5kZXJSb290KCl7dmFyIHQ7Y29uc3Qgcz1udWxsIT09KHQ9dGhpcy5zaGFkb3dSb290KSYmdm9pZCAwIT09dD90OnRoaXMuYXR0YWNoU2hhZG93KHRoaXMuY29uc3RydWN0b3Iuc2hhZG93Um9vdE9wdGlvbnMpO3JldHVybiBpKHMsdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50U3R5bGVzKSxzfWNvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7dm9pZCAwPT09dGhpcy5yZW5kZXJSb290JiYodGhpcy5yZW5kZXJSb290PXRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpKSx0aGlzLmVuYWJsZVVwZGF0aW5nKCEwKSxudWxsPT09KHQ9dGhpcy5fJEVTKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT57dmFyIGk7cmV0dXJuIG51bGw9PT0oaT10Lmhvc3RDb25uZWN0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSl9ZW5hYmxlVXBkYXRpbmcodCl7fWRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7bnVsbD09PSh0PXRoaXMuXyRFUyl8fHZvaWQgMD09PXR8fHQuZm9yRWFjaCgodD0+e3ZhciBpO3JldHVybiBudWxsPT09KGk9dC5ob3N0RGlzY29ubmVjdGVkKXx8dm9pZCAwPT09aT92b2lkIDA6aS5jYWxsKHQpfSkpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0LGkscyl7dGhpcy5fJEFLKHQscyl9XyRFTyh0LGkscz1sKXt2YXIgZTtjb25zdCByPXRoaXMuY29uc3RydWN0b3IuXyRFcCh0LHMpO2lmKHZvaWQgMCE9PXImJiEwPT09cy5yZWZsZWN0KXtjb25zdCBoPSh2b2lkIDAhPT0obnVsbD09PShlPXMuY29udmVydGVyKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS50b0F0dHJpYnV0ZSk/cy5jb252ZXJ0ZXI6bikudG9BdHRyaWJ1dGUoaSxzLnR5cGUpO3RoaXMuXyRFbD10LG51bGw9PWg/dGhpcy5yZW1vdmVBdHRyaWJ1dGUocik6dGhpcy5zZXRBdHRyaWJ1dGUocixoKSx0aGlzLl8kRWw9bnVsbH19XyRBSyh0LGkpe3ZhciBzO2NvbnN0IGU9dGhpcy5jb25zdHJ1Y3RvcixyPWUuXyRFdi5nZXQodCk7aWYodm9pZCAwIT09ciYmdGhpcy5fJEVsIT09cil7Y29uc3QgdD1lLmdldFByb3BlcnR5T3B0aW9ucyhyKSxoPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29udmVydGVyP3tmcm9tQXR0cmlidXRlOnQuY29udmVydGVyfTp2b2lkIDAhPT0obnVsbD09PShzPXQuY29udmVydGVyKXx8dm9pZCAwPT09cz92b2lkIDA6cy5mcm9tQXR0cmlidXRlKT90LmNvbnZlcnRlcjpuO3RoaXMuXyRFbD1yLHRoaXNbcl09aC5mcm9tQXR0cmlidXRlKGksdC50eXBlKSx0aGlzLl8kRWw9bnVsbH19cmVxdWVzdFVwZGF0ZSh0LGkscyl7bGV0IGU9ITA7dm9pZCAwIT09dCYmKCgocz1zfHx0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyh0KSkuaGFzQ2hhbmdlZHx8YSkodGhpc1t0XSxpKT8odGhpcy5fJEFMLmhhcyh0KXx8dGhpcy5fJEFMLnNldCh0LGkpLCEwPT09cy5yZWZsZWN0JiZ0aGlzLl8kRWwhPT10JiYodm9pZCAwPT09dGhpcy5fJEVDJiYodGhpcy5fJEVDPW5ldyBNYXApLHRoaXMuXyRFQy5zZXQodCxzKSkpOmU9ITEpLCF0aGlzLmlzVXBkYXRlUGVuZGluZyYmZSYmKHRoaXMuXyRFXz10aGlzLl8kRWooKSl9YXN5bmMgXyRFaigpe3RoaXMuaXNVcGRhdGVQZW5kaW5nPSEwO3RyeXthd2FpdCB0aGlzLl8kRV99Y2F0Y2godCl7UHJvbWlzZS5yZWplY3QodCl9Y29uc3QgdD10aGlzLnNjaGVkdWxlVXBkYXRlKCk7cmV0dXJuIG51bGwhPXQmJmF3YWl0IHQsIXRoaXMuaXNVcGRhdGVQZW5kaW5nfXNjaGVkdWxlVXBkYXRlKCl7cmV0dXJuIHRoaXMucGVyZm9ybVVwZGF0ZSgpfXBlcmZvcm1VcGRhdGUoKXt2YXIgdDtpZighdGhpcy5pc1VwZGF0ZVBlbmRpbmcpcmV0dXJuO3RoaXMuaGFzVXBkYXRlZCx0aGlzLl8kRWkmJih0aGlzLl8kRWkuZm9yRWFjaCgoKHQsaSk9PnRoaXNbaV09dCkpLHRoaXMuXyRFaT12b2lkIDApO2xldCBpPSExO2NvbnN0IHM9dGhpcy5fJEFMO3RyeXtpPXRoaXMuc2hvdWxkVXBkYXRlKHMpLGk/KHRoaXMud2lsbFVwZGF0ZShzKSxudWxsPT09KHQ9dGhpcy5fJEVTKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT57dmFyIGk7cmV0dXJuIG51bGw9PT0oaT10Lmhvc3RVcGRhdGUpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSksdGhpcy51cGRhdGUocykpOnRoaXMuXyRFaygpfWNhdGNoKHQpe3Rocm93IGk9ITEsdGhpcy5fJEVrKCksdH1pJiZ0aGlzLl8kQUUocyl9d2lsbFVwZGF0ZSh0KXt9XyRBRSh0KXt2YXIgaTtudWxsPT09KGk9dGhpcy5fJEVTKXx8dm9pZCAwPT09aXx8aS5mb3JFYWNoKCh0PT57dmFyIGk7cmV0dXJuIG51bGw9PT0oaT10Lmhvc3RVcGRhdGVkKXx8dm9pZCAwPT09aT92b2lkIDA6aS5jYWxsKHQpfSkpLHRoaXMuaGFzVXBkYXRlZHx8KHRoaXMuaGFzVXBkYXRlZD0hMCx0aGlzLmZpcnN0VXBkYXRlZCh0KSksdGhpcy51cGRhdGVkKHQpfV8kRWsoKXt0aGlzLl8kQUw9bmV3IE1hcCx0aGlzLmlzVXBkYXRlUGVuZGluZz0hMX1nZXQgdXBkYXRlQ29tcGxldGUoKXtyZXR1cm4gdGhpcy5nZXRVcGRhdGVDb21wbGV0ZSgpfWdldFVwZGF0ZUNvbXBsZXRlKCl7cmV0dXJuIHRoaXMuXyRFX31zaG91bGRVcGRhdGUodCl7cmV0dXJuITB9dXBkYXRlKHQpe3ZvaWQgMCE9PXRoaXMuXyRFQyYmKHRoaXMuXyRFQy5mb3JFYWNoKCgodCxpKT0+dGhpcy5fJEVPKGksdGhpc1tpXSx0KSkpLHRoaXMuXyRFQz12b2lkIDApLHRoaXMuXyRFaygpfXVwZGF0ZWQodCl7fWZpcnN0VXBkYXRlZCh0KXt9fXVbZF09ITAsdS5lbGVtZW50UHJvcGVydGllcz1uZXcgTWFwLHUuZWxlbWVudFN0eWxlcz1bXSx1LnNoYWRvd1Jvb3RPcHRpb25zPXttb2RlOlwib3BlblwifSxudWxsPT1vfHxvKHtSZWFjdGl2ZUVsZW1lbnQ6dX0pLChudWxsIT09KHM9ZS5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucykmJnZvaWQgMCE9PXM/czplLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zPVtdKS5wdXNoKFwiMS42LjNcIik7ZXhwb3J0e3UgYXMgUmVhY3RpdmVFbGVtZW50LG4gYXMgZGVmYXVsdENvbnZlcnRlcixhIGFzIG5vdEVxdWFsfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciB0O2NvbnN0IGk9d2luZG93LHM9aS50cnVzdGVkVHlwZXMsZT1zP3MuY3JlYXRlUG9saWN5KFwibGl0LWh0bWxcIix7Y3JlYXRlSFRNTDp0PT50fSk6dm9pZCAwLG89XCIkbGl0JFwiLG49YGxpdCQkeyhNYXRoLnJhbmRvbSgpK1wiXCIpLnNsaWNlKDkpfSRgLGw9XCI/XCIrbixoPWA8JHtsfT5gLHI9ZG9jdW1lbnQsdT0oKT0+ci5jcmVhdGVDb21tZW50KFwiXCIpLGQ9dD0+bnVsbD09PXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LGM9QXJyYXkuaXNBcnJheSx2PXQ9PmModCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG51bGw9PXQ/dm9pZCAwOnRbU3ltYm9sLml0ZXJhdG9yXSksYT1cIlsgXFx0XFxuXFxmXFxyXVwiLGY9LzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nLF89Ly0tPi9nLG09Lz4vZyxwPVJlZ0V4cChgPnwke2F9KD86KFteXFxcXHNcIic+PS9dKykoJHthfSo9JHthfSooPzpbXiBcXHRcXG5cXGZcXHJcIidcXGA8Pj1dfChcInwnKXwpKXwkKWAsXCJnXCIpLGc9LycvZywkPS9cIi9nLHk9L14oPzpzY3JpcHR8c3R5bGV8dGV4dGFyZWF8dGl0bGUpJC9pLHc9dD0+KGksLi4ucyk9Pih7XyRsaXRUeXBlJDp0LHN0cmluZ3M6aSx2YWx1ZXM6c30pLHg9dygxKSxiPXcoMiksVD1TeW1ib2wuZm9yKFwibGl0LW5vQ2hhbmdlXCIpLEE9U3ltYm9sLmZvcihcImxpdC1ub3RoaW5nXCIpLEU9bmV3IFdlYWtNYXAsQz1yLmNyZWF0ZVRyZWVXYWxrZXIociwxMjksbnVsbCwhMSk7ZnVuY3Rpb24gUCh0LGkpe2lmKCFBcnJheS5pc0FycmF5KHQpfHwhdC5oYXNPd25Qcm9wZXJ0eShcInJhd1wiKSl0aHJvdyBFcnJvcihcImludmFsaWQgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVwiKTtyZXR1cm4gdm9pZCAwIT09ZT9lLmNyZWF0ZUhUTUwoaSk6aX1jb25zdCBWPSh0LGkpPT57Y29uc3Qgcz10Lmxlbmd0aC0xLGU9W107bGV0IGwscj0yPT09aT9cIjxzdmc+XCI6XCJcIix1PWY7Zm9yKGxldCBpPTA7aTxzO2krKyl7Y29uc3Qgcz10W2ldO2xldCBkLGMsdj0tMSxhPTA7Zm9yKDthPHMubGVuZ3RoJiYodS5sYXN0SW5kZXg9YSxjPXUuZXhlYyhzKSxudWxsIT09Yyk7KWE9dS5sYXN0SW5kZXgsdT09PWY/XCIhLS1cIj09PWNbMV0/dT1fOnZvaWQgMCE9PWNbMV0/dT1tOnZvaWQgMCE9PWNbMl0/KHkudGVzdChjWzJdKSYmKGw9UmVnRXhwKFwiPC9cIitjWzJdLFwiZ1wiKSksdT1wKTp2b2lkIDAhPT1jWzNdJiYodT1wKTp1PT09cD9cIj5cIj09PWNbMF0/KHU9bnVsbCE9bD9sOmYsdj0tMSk6dm9pZCAwPT09Y1sxXT92PS0yOih2PXUubGFzdEluZGV4LWNbMl0ubGVuZ3RoLGQ9Y1sxXSx1PXZvaWQgMD09PWNbM10/cDonXCInPT09Y1szXT8kOmcpOnU9PT0kfHx1PT09Zz91PXA6dT09PV98fHU9PT1tP3U9ZjoodT1wLGw9dm9pZCAwKTtjb25zdCB3PXU9PT1wJiZ0W2krMV0uc3RhcnRzV2l0aChcIi8+XCIpP1wiIFwiOlwiXCI7cis9dT09PWY/cytoOnY+PTA/KGUucHVzaChkKSxzLnNsaWNlKDAsdikrbytzLnNsaWNlKHYpK24rdyk6cytuKygtMj09PXY/KGUucHVzaCh2b2lkIDApLGkpOncpfXJldHVybltQKHQscisodFtzXXx8XCI8Pz5cIikrKDI9PT1pP1wiPC9zdmc+XCI6XCJcIikpLGVdfTtjbGFzcyBOe2NvbnN0cnVjdG9yKHtzdHJpbmdzOnQsXyRsaXRUeXBlJDppfSxlKXtsZXQgaDt0aGlzLnBhcnRzPVtdO2xldCByPTAsZD0wO2NvbnN0IGM9dC5sZW5ndGgtMSx2PXRoaXMucGFydHMsW2EsZl09Vih0LGkpO2lmKHRoaXMuZWw9Ti5jcmVhdGVFbGVtZW50KGEsZSksQy5jdXJyZW50Tm9kZT10aGlzLmVsLmNvbnRlbnQsMj09PWkpe2NvbnN0IHQ9dGhpcy5lbC5jb250ZW50LGk9dC5maXJzdENoaWxkO2kucmVtb3ZlKCksdC5hcHBlbmQoLi4uaS5jaGlsZE5vZGVzKX1mb3IoO251bGwhPT0oaD1DLm5leHROb2RlKCkpJiZ2Lmxlbmd0aDxjOyl7aWYoMT09PWgubm9kZVR5cGUpe2lmKGguaGFzQXR0cmlidXRlcygpKXtjb25zdCB0PVtdO2Zvcihjb25zdCBpIG9mIGguZ2V0QXR0cmlidXRlTmFtZXMoKSlpZihpLmVuZHNXaXRoKG8pfHxpLnN0YXJ0c1dpdGgobikpe2NvbnN0IHM9ZltkKytdO2lmKHQucHVzaChpKSx2b2lkIDAhPT1zKXtjb25zdCB0PWguZ2V0QXR0cmlidXRlKHMudG9Mb3dlckNhc2UoKStvKS5zcGxpdChuKSxpPS8oWy4/QF0pPyguKikvLmV4ZWMocyk7di5wdXNoKHt0eXBlOjEsaW5kZXg6cixuYW1lOmlbMl0sc3RyaW5nczp0LGN0b3I6XCIuXCI9PT1pWzFdP0g6XCI/XCI9PT1pWzFdP0w6XCJAXCI9PT1pWzFdP3o6a30pfWVsc2Ugdi5wdXNoKHt0eXBlOjYsaW5kZXg6cn0pfWZvcihjb25zdCBpIG9mIHQpaC5yZW1vdmVBdHRyaWJ1dGUoaSl9aWYoeS50ZXN0KGgudGFnTmFtZSkpe2NvbnN0IHQ9aC50ZXh0Q29udGVudC5zcGxpdChuKSxpPXQubGVuZ3RoLTE7aWYoaT4wKXtoLnRleHRDb250ZW50PXM/cy5lbXB0eVNjcmlwdDpcIlwiO2ZvcihsZXQgcz0wO3M8aTtzKyspaC5hcHBlbmQodFtzXSx1KCkpLEMubmV4dE5vZGUoKSx2LnB1c2goe3R5cGU6MixpbmRleDorK3J9KTtoLmFwcGVuZCh0W2ldLHUoKSl9fX1lbHNlIGlmKDg9PT1oLm5vZGVUeXBlKWlmKGguZGF0YT09PWwpdi5wdXNoKHt0eXBlOjIsaW5kZXg6cn0pO2Vsc2V7bGV0IHQ9LTE7Zm9yKDstMSE9PSh0PWguZGF0YS5pbmRleE9mKG4sdCsxKSk7KXYucHVzaCh7dHlwZTo3LGluZGV4OnJ9KSx0Kz1uLmxlbmd0aC0xfXIrK319c3RhdGljIGNyZWF0ZUVsZW1lbnQodCxpKXtjb25zdCBzPXIuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3JldHVybiBzLmlubmVySFRNTD10LHN9fWZ1bmN0aW9uIFModCxpLHM9dCxlKXt2YXIgbyxuLGwsaDtpZihpPT09VClyZXR1cm4gaTtsZXQgcj12b2lkIDAhPT1lP251bGw9PT0obz1zLl8kQ28pfHx2b2lkIDA9PT1vP3ZvaWQgMDpvW2VdOnMuXyRDbDtjb25zdCB1PWQoaSk/dm9pZCAwOmkuXyRsaXREaXJlY3RpdmUkO3JldHVybihudWxsPT1yP3ZvaWQgMDpyLmNvbnN0cnVjdG9yKSE9PXUmJihudWxsPT09KG49bnVsbD09cj92b2lkIDA6ci5fJEFPKXx8dm9pZCAwPT09bnx8bi5jYWxsKHIsITEpLHZvaWQgMD09PXU/cj12b2lkIDA6KHI9bmV3IHUodCksci5fJEFUKHQscyxlKSksdm9pZCAwIT09ZT8obnVsbCE9PShsPShoPXMpLl8kQ28pJiZ2b2lkIDAhPT1sP2w6aC5fJENvPVtdKVtlXT1yOnMuXyRDbD1yKSx2b2lkIDAhPT1yJiYoaT1TKHQsci5fJEFTKHQsaS52YWx1ZXMpLHIsZSkpLGl9Y2xhc3MgTXtjb25zdHJ1Y3Rvcih0LGkpe3RoaXMuXyRBVj1bXSx0aGlzLl8kQU49dm9pZCAwLHRoaXMuXyRBRD10LHRoaXMuXyRBTT1pfWdldCBwYXJlbnROb2RlKCl7cmV0dXJuIHRoaXMuXyRBTS5wYXJlbnROb2RlfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfXUodCl7dmFyIGk7Y29uc3R7ZWw6e2NvbnRlbnQ6c30scGFydHM6ZX09dGhpcy5fJEFELG89KG51bGwhPT0oaT1udWxsPT10P3ZvaWQgMDp0LmNyZWF0aW9uU2NvcGUpJiZ2b2lkIDAhPT1pP2k6cikuaW1wb3J0Tm9kZShzLCEwKTtDLmN1cnJlbnROb2RlPW87bGV0IG49Qy5uZXh0Tm9kZSgpLGw9MCxoPTAsdT1lWzBdO2Zvcig7dm9pZCAwIT09dTspe2lmKGw9PT11LmluZGV4KXtsZXQgaTsyPT09dS50eXBlP2k9bmV3IFIobixuLm5leHRTaWJsaW5nLHRoaXMsdCk6MT09PXUudHlwZT9pPW5ldyB1LmN0b3Iobix1Lm5hbWUsdS5zdHJpbmdzLHRoaXMsdCk6Nj09PXUudHlwZSYmKGk9bmV3IFoobix0aGlzLHQpKSx0aGlzLl8kQVYucHVzaChpKSx1PWVbKytoXX1sIT09KG51bGw9PXU/dm9pZCAwOnUuaW5kZXgpJiYobj1DLm5leHROb2RlKCksbCsrKX1yZXR1cm4gQy5jdXJyZW50Tm9kZT1yLG99dih0KXtsZXQgaT0wO2Zvcihjb25zdCBzIG9mIHRoaXMuXyRBVil2b2lkIDAhPT1zJiYodm9pZCAwIT09cy5zdHJpbmdzPyhzLl8kQUkodCxzLGkpLGkrPXMuc3RyaW5ncy5sZW5ndGgtMik6cy5fJEFJKHRbaV0pKSxpKyt9fWNsYXNzIFJ7Y29uc3RydWN0b3IodCxpLHMsZSl7dmFyIG87dGhpcy50eXBlPTIsdGhpcy5fJEFIPUEsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQUE9dCx0aGlzLl8kQUI9aSx0aGlzLl8kQU09cyx0aGlzLm9wdGlvbnM9ZSx0aGlzLl8kQ3A9bnVsbD09PShvPW51bGw9PWU/dm9pZCAwOmUuaXNDb25uZWN0ZWQpfHx2b2lkIDA9PT1vfHxvfWdldCBfJEFVKCl7dmFyIHQsaTtyZXR1cm4gbnVsbCE9PShpPW51bGw9PT0odD10aGlzLl8kQU0pfHx2b2lkIDA9PT10P3ZvaWQgMDp0Ll8kQVUpJiZ2b2lkIDAhPT1pP2k6dGhpcy5fJENwfWdldCBwYXJlbnROb2RlKCl7bGV0IHQ9dGhpcy5fJEFBLnBhcmVudE5vZGU7Y29uc3QgaT10aGlzLl8kQU07cmV0dXJuIHZvaWQgMCE9PWkmJjExPT09KG51bGw9PXQ/dm9pZCAwOnQubm9kZVR5cGUpJiYodD1pLnBhcmVudE5vZGUpLHR9Z2V0IHN0YXJ0Tm9kZSgpe3JldHVybiB0aGlzLl8kQUF9Z2V0IGVuZE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFCfV8kQUkodCxpPXRoaXMpe3Q9Uyh0aGlzLHQsaSksZCh0KT90PT09QXx8bnVsbD09dHx8XCJcIj09PXQ/KHRoaXMuXyRBSCE9PUEmJnRoaXMuXyRBUigpLHRoaXMuXyRBSD1BKTp0IT09dGhpcy5fJEFIJiZ0IT09VCYmdGhpcy5fKHQpOnZvaWQgMCE9PXQuXyRsaXRUeXBlJD90aGlzLmcodCk6dm9pZCAwIT09dC5ub2RlVHlwZT90aGlzLiQodCk6dih0KT90aGlzLlQodCk6dGhpcy5fKHQpfWsodCl7cmV0dXJuIHRoaXMuXyRBQS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHRoaXMuXyRBQil9JCh0KXt0aGlzLl8kQUghPT10JiYodGhpcy5fJEFSKCksdGhpcy5fJEFIPXRoaXMuayh0KSl9Xyh0KXt0aGlzLl8kQUghPT1BJiZkKHRoaXMuXyRBSCk/dGhpcy5fJEFBLm5leHRTaWJsaW5nLmRhdGE9dDp0aGlzLiQoci5jcmVhdGVUZXh0Tm9kZSh0KSksdGhpcy5fJEFIPXR9Zyh0KXt2YXIgaTtjb25zdHt2YWx1ZXM6cyxfJGxpdFR5cGUkOmV9PXQsbz1cIm51bWJlclwiPT10eXBlb2YgZT90aGlzLl8kQUModCk6KHZvaWQgMD09PWUuZWwmJihlLmVsPU4uY3JlYXRlRWxlbWVudChQKGUuaCxlLmhbMF0pLHRoaXMub3B0aW9ucykpLGUpO2lmKChudWxsPT09KGk9dGhpcy5fJEFIKXx8dm9pZCAwPT09aT92b2lkIDA6aS5fJEFEKT09PW8pdGhpcy5fJEFILnYocyk7ZWxzZXtjb25zdCB0PW5ldyBNKG8sdGhpcyksaT10LnUodGhpcy5vcHRpb25zKTt0LnYocyksdGhpcy4kKGkpLHRoaXMuXyRBSD10fX1fJEFDKHQpe2xldCBpPUUuZ2V0KHQuc3RyaW5ncyk7cmV0dXJuIHZvaWQgMD09PWkmJkUuc2V0KHQuc3RyaW5ncyxpPW5ldyBOKHQpKSxpfVQodCl7Yyh0aGlzLl8kQUgpfHwodGhpcy5fJEFIPVtdLHRoaXMuXyRBUigpKTtjb25zdCBpPXRoaXMuXyRBSDtsZXQgcyxlPTA7Zm9yKGNvbnN0IG8gb2YgdCllPT09aS5sZW5ndGg/aS5wdXNoKHM9bmV3IFIodGhpcy5rKHUoKSksdGhpcy5rKHUoKSksdGhpcyx0aGlzLm9wdGlvbnMpKTpzPWlbZV0scy5fJEFJKG8pLGUrKztlPGkubGVuZ3RoJiYodGhpcy5fJEFSKHMmJnMuXyRBQi5uZXh0U2libGluZyxlKSxpLmxlbmd0aD1lKX1fJEFSKHQ9dGhpcy5fJEFBLm5leHRTaWJsaW5nLGkpe3ZhciBzO2ZvcihudWxsPT09KHM9dGhpcy5fJEFQKXx8dm9pZCAwPT09c3x8cy5jYWxsKHRoaXMsITEsITAsaSk7dCYmdCE9PXRoaXMuXyRBQjspe2NvbnN0IGk9dC5uZXh0U2libGluZzt0LnJlbW92ZSgpLHQ9aX19c2V0Q29ubmVjdGVkKHQpe3ZhciBpO3ZvaWQgMD09PXRoaXMuXyRBTSYmKHRoaXMuXyRDcD10LG51bGw9PT0oaT10aGlzLl8kQVApfHx2b2lkIDA9PT1pfHxpLmNhbGwodGhpcyx0KSl9fWNsYXNzIGt7Y29uc3RydWN0b3IodCxpLHMsZSxvKXt0aGlzLnR5cGU9MSx0aGlzLl8kQUg9QSx0aGlzLl8kQU49dm9pZCAwLHRoaXMuZWxlbWVudD10LHRoaXMubmFtZT1pLHRoaXMuXyRBTT1lLHRoaXMub3B0aW9ucz1vLHMubGVuZ3RoPjJ8fFwiXCIhPT1zWzBdfHxcIlwiIT09c1sxXT8odGhpcy5fJEFIPUFycmF5KHMubGVuZ3RoLTEpLmZpbGwobmV3IFN0cmluZyksdGhpcy5zdHJpbmdzPXMpOnRoaXMuXyRBSD1BfWdldCB0YWdOYW1lKCl7cmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQUkodCxpPXRoaXMscyxlKXtjb25zdCBvPXRoaXMuc3RyaW5ncztsZXQgbj0hMTtpZih2b2lkIDA9PT1vKXQ9Uyh0aGlzLHQsaSwwKSxuPSFkKHQpfHx0IT09dGhpcy5fJEFIJiZ0IT09VCxuJiYodGhpcy5fJEFIPXQpO2Vsc2V7Y29uc3QgZT10O2xldCBsLGg7Zm9yKHQ9b1swXSxsPTA7bDxvLmxlbmd0aC0xO2wrKyloPVModGhpcyxlW3MrbF0saSxsKSxoPT09VCYmKGg9dGhpcy5fJEFIW2xdKSxufHwobj0hZChoKXx8aCE9PXRoaXMuXyRBSFtsXSksaD09PUE/dD1BOnQhPT1BJiYodCs9KG51bGwhPWg/aDpcIlwiKStvW2wrMV0pLHRoaXMuXyRBSFtsXT1ofW4mJiFlJiZ0aGlzLmoodCl9aih0KXt0PT09QT90aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk6dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsbnVsbCE9dD90OlwiXCIpfX1jbGFzcyBIIGV4dGVuZHMga3tjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy50eXBlPTN9aih0KXt0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXT10PT09QT92b2lkIDA6dH19Y29uc3QgST1zP3MuZW1wdHlTY3JpcHQ6XCJcIjtjbGFzcyBMIGV4dGVuZHMga3tjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy50eXBlPTR9aih0KXt0JiZ0IT09QT90aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSxJKTp0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSl9fWNsYXNzIHogZXh0ZW5kcyBre2NvbnN0cnVjdG9yKHQsaSxzLGUsbyl7c3VwZXIodCxpLHMsZSxvKSx0aGlzLnR5cGU9NX1fJEFJKHQsaT10aGlzKXt2YXIgcztpZigodD1udWxsIT09KHM9Uyh0aGlzLHQsaSwwKSkmJnZvaWQgMCE9PXM/czpBKT09PVQpcmV0dXJuO2NvbnN0IGU9dGhpcy5fJEFILG89dD09PUEmJmUhPT1BfHx0LmNhcHR1cmUhPT1lLmNhcHR1cmV8fHQub25jZSE9PWUub25jZXx8dC5wYXNzaXZlIT09ZS5wYXNzaXZlLG49dCE9PUEmJihlPT09QXx8byk7byYmdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLHRoaXMsZSksbiYmdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLHRoaXMsdCksdGhpcy5fJEFIPXR9aGFuZGxlRXZlbnQodCl7dmFyIGkscztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl8kQUg/dGhpcy5fJEFILmNhbGwobnVsbCE9PShzPW51bGw9PT0oaT10aGlzLm9wdGlvbnMpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmhvc3QpJiZ2b2lkIDAhPT1zP3M6dGhpcy5lbGVtZW50LHQpOnRoaXMuXyRBSC5oYW5kbGVFdmVudCh0KX19Y2xhc3MgWntjb25zdHJ1Y3Rvcih0LGkscyl7dGhpcy5lbGVtZW50PXQsdGhpcy50eXBlPTYsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQU09aSx0aGlzLm9wdGlvbnM9c31nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX1fJEFJKHQpe1ModGhpcyx0KX19Y29uc3Qgaj17TzpvLFA6bixBOmwsQzoxLE06VixMOk0sUjp2LEQ6UyxJOlIsVjprLEg6TCxOOnosVTpILEY6Wn0sQj1pLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnQ7bnVsbD09Qnx8QihOLFIpLChudWxsIT09KHQ9aS5saXRIdG1sVmVyc2lvbnMpJiZ2b2lkIDAhPT10P3Q6aS5saXRIdG1sVmVyc2lvbnM9W10pLnB1c2goXCIyLjguMFwiKTtjb25zdCBEPSh0LGkscyk9Pnt2YXIgZSxvO2NvbnN0IG49bnVsbCE9PShlPW51bGw9PXM/dm9pZCAwOnMucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09ZT9lOmk7bGV0IGw9bi5fJGxpdFBhcnQkO2lmKHZvaWQgMD09PWwpe2NvbnN0IHQ9bnVsbCE9PShvPW51bGw9PXM/dm9pZCAwOnMucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09bz9vOm51bGw7bi5fJGxpdFBhcnQkPWw9bmV3IFIoaS5pbnNlcnRCZWZvcmUodSgpLHQpLHQsdm9pZCAwLG51bGwhPXM/czp7fSl9cmV0dXJuIGwuXyRBSSh0KSxsfTtleHBvcnR7aiBhcyBfJExILHggYXMgaHRtbCxUIGFzIG5vQ2hhbmdlLEEgYXMgbm90aGluZyxEIGFzIHJlbmRlcixiIGFzIHN2Z307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXBcbiIsImltcG9ydHtSZWFjdGl2ZUVsZW1lbnQgYXMgdH1mcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0e3JlbmRlciBhcyBlLG5vQ2hhbmdlIGFzIGl9ZnJvbVwibGl0LWh0bWxcIjtleHBvcnQqZnJvbVwibGl0LWh0bWxcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL3ZhciBsLG87Y29uc3Qgcj10O2NsYXNzIHMgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnJlbmRlck9wdGlvbnM9e2hvc3Q6dGhpc30sdGhpcy5fJERvPXZvaWQgMH1jcmVhdGVSZW5kZXJSb290KCl7dmFyIHQsZTtjb25zdCBpPXN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtyZXR1cm4gbnVsbCE9PSh0PShlPXRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09dHx8KGUucmVuZGVyQmVmb3JlPWkuZmlyc3RDaGlsZCksaX11cGRhdGUodCl7Y29uc3QgaT10aGlzLnJlbmRlcigpO3RoaXMuaGFzVXBkYXRlZHx8KHRoaXMucmVuZGVyT3B0aW9ucy5pc0Nvbm5lY3RlZD10aGlzLmlzQ29ubmVjdGVkKSxzdXBlci51cGRhdGUodCksdGhpcy5fJERvPWUoaSx0aGlzLnJlbmRlclJvb3QsdGhpcy5yZW5kZXJPcHRpb25zKX1jb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O3N1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCksbnVsbD09PSh0PXRoaXMuXyREbyl8fHZvaWQgMD09PXR8fHQuc2V0Q29ubmVjdGVkKCEwKX1kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O3N1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCksbnVsbD09PSh0PXRoaXMuXyREbyl8fHZvaWQgMD09PXR8fHQuc2V0Q29ubmVjdGVkKCExKX1yZW5kZXIoKXtyZXR1cm4gaX19cy5maW5hbGl6ZWQ9ITAscy5fJGxpdEVsZW1lbnQkPSEwLG51bGw9PT0obD1nbG9iYWxUaGlzLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCl8fHZvaWQgMD09PWx8fGwuY2FsbChnbG9iYWxUaGlzLHtMaXRFbGVtZW50OnN9KTtjb25zdCBuPWdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydDtudWxsPT1ufHxuKHtMaXRFbGVtZW50OnN9KTtjb25zdCBoPXtfJEFLOih0LGUsaSk9Pnt0Ll8kQUsoZSxpKX0sXyRBTDp0PT50Ll8kQUx9OyhudWxsIT09KG89Z2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMpJiZ2b2lkIDAhPT1vP286Z2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnM9W10pLnB1c2goXCIzLjMuM1wiKTtleHBvcnR7cyBhcyBMaXRFbGVtZW50LHIgYXMgVXBkYXRpbmdFbGVtZW50LGggYXMgXyRMRX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtZWxlbWVudC5qcy5tYXBcbiIsImltcG9ydFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0XCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtZWxlbWVudC9saXQtZWxlbWVudC5qc1wiO2V4cG9ydCpmcm9tXCJsaXQtaHRtbC9pcy1zZXJ2ZXIuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBlPWU9Pm49PlwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KChlLG4pPT4oY3VzdG9tRWxlbWVudHMuZGVmaW5lKGUsbiksbikpKGUsbik6KChlLG4pPT57Y29uc3R7a2luZDp0LGVsZW1lbnRzOnN9PW47cmV0dXJue2tpbmQ6dCxlbGVtZW50czpzLGZpbmlzaGVyKG4pe2N1c3RvbUVsZW1lbnRzLmRlZmluZShlLG4pfX19KShlLG4pO2V4cG9ydHtlIGFzIGN1c3RvbUVsZW1lbnR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWVsZW1lbnQuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IGk9KGksZSk9PlwibWV0aG9kXCI9PT1lLmtpbmQmJmUuZGVzY3JpcHRvciYmIShcInZhbHVlXCJpbiBlLmRlc2NyaXB0b3IpP3suLi5lLGZpbmlzaGVyKG4pe24uY3JlYXRlUHJvcGVydHkoZS5rZXksaSl9fTp7a2luZDpcImZpZWxkXCIsa2V5OlN5bWJvbCgpLHBsYWNlbWVudDpcIm93blwiLGRlc2NyaXB0b3I6e30sb3JpZ2luYWxLZXk6ZS5rZXksaW5pdGlhbGl6ZXIoKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmluaXRpYWxpemVyJiYodGhpc1tlLmtleV09ZS5pbml0aWFsaXplci5jYWxsKHRoaXMpKX0sZmluaXNoZXIobil7bi5jcmVhdGVQcm9wZXJ0eShlLmtleSxpKX19LGU9KGksZSxuKT0+e2UuY29uc3RydWN0b3IuY3JlYXRlUHJvcGVydHkobixpKX07ZnVuY3Rpb24gbihuKXtyZXR1cm4odCxvKT0+dm9pZCAwIT09bz9lKG4sdCxvKTppKG4sdCl9ZXhwb3J0e24gYXMgcHJvcGVydHl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcGVydHkuanMubWFwXG4iLCJpbXBvcnR7cHJvcGVydHkgYXMgcn1mcm9tXCIuL3Byb3BlcnR5LmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9mdW5jdGlvbiB0KHQpe3JldHVybiByKHsuLi50LHN0YXRlOiEwfSl9ZXhwb3J0e3QgYXMgc3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGUuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyBvfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIG47Y29uc3QgZT1udWxsIT0obnVsbD09PShuPXdpbmRvdy5IVE1MU2xvdEVsZW1lbnQpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnByb3RvdHlwZS5hc3NpZ25lZEVsZW1lbnRzKT8obyxuKT0+by5hc3NpZ25lZEVsZW1lbnRzKG4pOihvLG4pPT5vLmFzc2lnbmVkTm9kZXMobikuZmlsdGVyKChvPT5vLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpKTtmdW5jdGlvbiBsKG4pe2NvbnN0e3Nsb3Q6bCxzZWxlY3Rvcjp0fT1udWxsIT1uP246e307cmV0dXJuIG8oe2Rlc2NyaXB0b3I6bz0+KHtnZXQoKXt2YXIgbztjb25zdCByPVwic2xvdFwiKyhsP2BbbmFtZT0ke2x9XWA6XCI6bm90KFtuYW1lXSlcIiksaT1udWxsPT09KG89dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09bz92b2lkIDA6by5xdWVyeVNlbGVjdG9yKHIpLHM9bnVsbCE9aT9lKGksbik6W107cmV0dXJuIHQ/cy5maWx0ZXIoKG89Pm8ubWF0Y2hlcyh0KSkpOnN9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7bCBhcyBxdWVyeUFzc2lnbmVkRWxlbWVudHN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyBlfWZyb21cIi4vYmFzZS5qc1wiO2ltcG9ydHtxdWVyeUFzc2lnbmVkRWxlbWVudHMgYXMgdH1mcm9tXCIuL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9mdW5jdGlvbiBvKG8sbixyKXtsZXQgbCxzPW87cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG8/KHM9by5zbG90LGw9byk6bD17ZmxhdHRlbjpufSxyP3Qoe3Nsb3Q6cyxmbGF0dGVuOm4sc2VsZWN0b3I6cn0pOmUoe2Rlc2NyaXB0b3I6ZT0+KHtnZXQoKXt2YXIgZSx0O2NvbnN0IG89XCJzbG90XCIrKHM/YFtuYW1lPSR7c31dYDpcIjpub3QoW25hbWVdKVwiKSxuPW51bGw9PT0oZT10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnF1ZXJ5U2VsZWN0b3Iobyk7cmV0dXJuIG51bGwhPT0odD1udWxsPT1uP3ZvaWQgMDpuLmFzc2lnbmVkTm9kZXMobCkpJiZ2b2lkIDAhPT10P3Q6W119LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7byBhcyBxdWVyeUFzc2lnbmVkTm9kZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtbm9kZXMuanMubWFwXG4iLCJleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvc3RhdGUuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvZXZlbnQtb3B0aW9ucy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtbm9kZXMuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29yYXRvcnMuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHQ9e0FUVFJJQlVURToxLENISUxEOjIsUFJPUEVSVFk6MyxCT09MRUFOX0FUVFJJQlVURTo0LEVWRU5UOjUsRUxFTUVOVDo2fSxlPXQ9PiguLi5lKT0+KHtfJGxpdERpcmVjdGl2ZSQ6dCx2YWx1ZXM6ZX0pO2NsYXNzIGl7Y29uc3RydWN0b3IodCl7fWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQVQodCxlLGkpe3RoaXMuXyRDdD10LHRoaXMuXyRBTT1lLHRoaXMuXyRDaT1pfV8kQVModCxlKXtyZXR1cm4gdGhpcy51cGRhdGUodCxlKX11cGRhdGUodCxlKXtyZXR1cm4gdGhpcy5yZW5kZXIoLi4uZSl9fWV4cG9ydHtpIGFzIERpcmVjdGl2ZSx0IGFzIFBhcnRUeXBlLGUgYXMgZGlyZWN0aXZlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXBcbiIsImltcG9ydHtub0NoYW5nZSBhcyB0fWZyb21cIi4uL2xpdC1odG1sLmpzXCI7aW1wb3J0e2RpcmVjdGl2ZSBhcyBpLERpcmVjdGl2ZSBhcyBzLFBhcnRUeXBlIGFzIHJ9ZnJvbVwiLi4vZGlyZWN0aXZlLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9jb25zdCBvPWkoY2xhc3MgZXh0ZW5kcyBze2NvbnN0cnVjdG9yKHQpe3ZhciBpO2lmKHN1cGVyKHQpLHQudHlwZSE9PXIuQVRUUklCVVRFfHxcImNsYXNzXCIhPT10Lm5hbWV8fChudWxsPT09KGk9dC5zdHJpbmdzKXx8dm9pZCAwPT09aT92b2lkIDA6aS5sZW5ndGgpPjIpdGhyb3cgRXJyb3IoXCJgY2xhc3NNYXAoKWAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLlwiKX1yZW5kZXIodCl7cmV0dXJuXCIgXCIrT2JqZWN0LmtleXModCkuZmlsdGVyKChpPT50W2ldKSkuam9pbihcIiBcIikrXCIgXCJ9dXBkYXRlKGksW3NdKXt2YXIgcixvO2lmKHZvaWQgMD09PXRoaXMuaXQpe3RoaXMuaXQ9bmV3IFNldCx2b2lkIDAhPT1pLnN0cmluZ3MmJih0aGlzLm50PW5ldyBTZXQoaS5zdHJpbmdzLmpvaW4oXCIgXCIpLnNwbGl0KC9cXHMvKS5maWx0ZXIoKHQ9PlwiXCIhPT10KSkpKTtmb3IoY29uc3QgdCBpbiBzKXNbdF0mJiEobnVsbD09PShyPXRoaXMubnQpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmhhcyh0KSkmJnRoaXMuaXQuYWRkKHQpO3JldHVybiB0aGlzLnJlbmRlcihzKX1jb25zdCBlPWkuZWxlbWVudC5jbGFzc0xpc3Q7dGhpcy5pdC5mb3JFYWNoKCh0PT57dCBpbiBzfHwoZS5yZW1vdmUodCksdGhpcy5pdC5kZWxldGUodCkpfSkpO2Zvcihjb25zdCB0IGluIHMpe2NvbnN0IGk9ISFzW3RdO2k9PT10aGlzLml0Lmhhcyh0KXx8KG51bGw9PT0obz10aGlzLm50KXx8dm9pZCAwPT09bz92b2lkIDA6by5oYXModCkpfHwoaT8oZS5hZGQodCksdGhpcy5pdC5hZGQodCkpOihlLnJlbW92ZSh0KSx0aGlzLml0LmRlbGV0ZSh0KSkpfXJldHVybiB0fX0pO2V4cG9ydHtvIGFzIGNsYXNzTWFwfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsYXNzLW1hcC5qcy5tYXBcbiIsImV4cG9ydCpmcm9tXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xhc3MtbWFwLmpzLm1hcFxuIiwiY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgZHVyYXRpb246IDAuMyxcbiAgICBkZWxheTogMCxcbiAgICBlbmREZWxheTogMCxcbiAgICByZXBlYXQ6IDAsXG4gICAgZWFzaW5nOiBcImVhc2VcIixcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRzIH07XG4iLCJjb25zdCB0aW1lID0ge1xuICAgIG1zOiAoc2Vjb25kcykgPT4gc2Vjb25kcyAqIDEwMDAsXG4gICAgczogKG1pbGxpc2Vjb25kcykgPT4gbWlsbGlzZWNvbmRzIC8gMTAwMCxcbn07XG5cbmV4cG9ydCB7IHRpbWUgfTtcbiIsImNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5jb25zdCBub29wUmV0dXJuID0gKHYpID0+IHY7XG5cbmV4cG9ydCB7IG5vb3AsIG5vb3BSZXR1cm4gfTtcbiIsImZ1bmN0aW9uIHN0b3BBbmltYXRpb24oYW5pbWF0aW9uLCBuZWVkc0NvbW1pdCA9IHRydWUpIHtcbiAgICBpZiAoIWFuaW1hdGlvbiB8fCBhbmltYXRpb24ucGxheVN0YXRlID09PSBcImZpbmlzaGVkXCIpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBTdXBwcmVzcyBlcnJvciB0aHJvd24gYnkgV0FBUElcbiAgICB0cnkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uLnN0b3ApIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZWVkc0NvbW1pdCAmJiBhbmltYXRpb24uY29tbWl0U3R5bGVzKCk7XG4gICAgICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHsgfVxufVxuXG5leHBvcnQgeyBzdG9wQW5pbWF0aW9uIH07XG4iLCJpbXBvcnQgeyBkZWZhdWx0cywgbm9vcCwgdGltZSB9IGZyb20gJ0Btb3Rpb25vbmUvdXRpbHMnO1xuaW1wb3J0IHsgc3RvcEFuaW1hdGlvbiB9IGZyb20gJy4vc3RvcC1hbmltYXRpb24uZXMuanMnO1xuXG5jb25zdCBjcmVhdGVBbmltYXRpb24gPSAoZmFjdG9yeSkgPT4gZmFjdG9yeSgpO1xuY29uc3Qgd2l0aENvbnRyb2xzID0gKGFuaW1hdGlvbkZhY3RvcnksIG9wdGlvbnMsIGR1cmF0aW9uID0gZGVmYXVsdHMuZHVyYXRpb24pID0+IHtcbiAgICByZXR1cm4gbmV3IFByb3h5KHtcbiAgICAgICAgYW5pbWF0aW9uczogYW5pbWF0aW9uRmFjdG9yeS5tYXAoY3JlYXRlQW5pbWF0aW9uKS5maWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBvcHRpb25zLFxuICAgIH0sIGNvbnRyb2xzKTtcbn07XG4vKipcbiAqIFRPRE86XG4gKiBDdXJyZW50bHkgdGhpcyByZXR1cm5zIHRoZSBmaXJzdCBhbmltYXRpb24sIGlkZWFsbHkgaXQgd291bGQgcmV0dXJuXG4gKiB0aGUgZmlyc3QgYWN0aXZlIGFuaW1hdGlvbi5cbiAqL1xuY29uc3QgZ2V0QWN0aXZlQW5pbWF0aW9uID0gKHN0YXRlKSA9PiBzdGF0ZS5hbmltYXRpb25zWzBdO1xuY29uc3QgY29udHJvbHMgPSB7XG4gICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQW5pbWF0aW9uID0gZ2V0QWN0aXZlQW5pbWF0aW9uKHRhcmdldCk7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwiZHVyYXRpb25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmR1cmF0aW9uO1xuICAgICAgICAgICAgY2FzZSBcImN1cnJlbnRUaW1lXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWUucygoYWN0aXZlQW5pbWF0aW9uID09PSBudWxsIHx8IGFjdGl2ZUFuaW1hdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aXZlQW5pbWF0aW9uW2tleV0pIHx8IDApO1xuICAgICAgICAgICAgY2FzZSBcInBsYXliYWNrUmF0ZVwiOlxuICAgICAgICAgICAgY2FzZSBcInBsYXlTdGF0ZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBhY3RpdmVBbmltYXRpb24gPT09IG51bGwgfHwgYWN0aXZlQW5pbWF0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY3RpdmVBbmltYXRpb25ba2V5XTtcbiAgICAgICAgICAgIGNhc2UgXCJmaW5pc2hlZFwiOlxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LmZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5maW5pc2hlZCA9IFByb21pc2UuYWxsKHRhcmdldC5hbmltYXRpb25zLm1hcChzZWxlY3RGaW5pc2hlZCkpLmNhdGNoKG5vb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmZpbmlzaGVkO1xuICAgICAgICAgICAgY2FzZSBcInN0b3BcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuYW5pbWF0aW9ucy5mb3JFYWNoKChhbmltYXRpb24pID0+IHN0b3BBbmltYXRpb24oYW5pbWF0aW9uKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgXCJmb3JFYWNoTmF0aXZlXCI6XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVGhpcyBpcyBmb3IgaW50ZXJuYWwgdXNlIG9ubHksIGZpcmUgYSBjYWxsYmFjayBmb3IgZWFjaFxuICAgICAgICAgICAgICAgICAqIHVuZGVybHlpbmcgYW5pbWF0aW9uLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHJldHVybiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uKSA9PiBjYWxsYmFjayhhbmltYXRpb24sIHRhcmdldCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgKGFjdGl2ZUFuaW1hdGlvbiA9PT0gbnVsbCB8fCBhY3RpdmVBbmltYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGl2ZUFuaW1hdGlvbltrZXldKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6ICgpID0+IHRhcmdldC5hbmltYXRpb25zLmZvckVhY2goKGFuaW1hdGlvbikgPT4gYW5pbWF0aW9uW2tleV0oKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cnJlbnRUaW1lXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aW1lLm1zKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIEZhbGwtdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBcInBsYXliYWNrUmF0ZVwiOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmFuaW1hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvbnNbaV1ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbn07XG5jb25zdCBzZWxlY3RGaW5pc2hlZCA9IChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5maW5pc2hlZDtcblxuZXhwb3J0IHsgY29udHJvbHMsIHdpdGhDb250cm9scyB9O1xuIiwiY29uc3QgaXNFYXNpbmdHZW5lcmF0b3IgPSAoZWFzaW5nKSA9PiB0eXBlb2YgZWFzaW5nID09PSBcIm9iamVjdFwiICYmXG4gICAgQm9vbGVhbihlYXNpbmcuY3JlYXRlQW5pbWF0aW9uKTtcblxuZXhwb3J0IHsgaXNFYXNpbmdHZW5lcmF0b3IgfTtcbiIsImNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG5cbmV4cG9ydCB7IGlzTnVtYmVyIH07XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4vaXMtbnVtYmVyLmVzLmpzJztcblxuY29uc3QgaXNFYXNpbmdMaXN0ID0gKGVhc2luZykgPT4gQXJyYXkuaXNBcnJheShlYXNpbmcpICYmICFpc051bWJlcihlYXNpbmdbMF0pO1xuXG5leHBvcnQgeyBpc0Vhc2luZ0xpc3QgfTtcbiIsImNvbnN0IG1peCA9IChtaW4sIG1heCwgcHJvZ3Jlc3MpID0+IC1wcm9ncmVzcyAqIG1pbiArIHByb2dyZXNzICogbWF4ICsgbWluO1xuXG5leHBvcnQgeyBtaXggfTtcbiIsImNvbnN0IHByb2dyZXNzID0gKG1pbiwgbWF4LCB2YWx1ZSkgPT4gbWF4IC0gbWluID09PSAwID8gMSA6ICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcblxuZXhwb3J0IHsgcHJvZ3Jlc3MgfTtcbiIsImltcG9ydCB7IG1peCB9IGZyb20gJy4vbWl4LmVzLmpzJztcbmltcG9ydCB7IHByb2dyZXNzIH0gZnJvbSAnLi9wcm9ncmVzcy5lcy5qcyc7XG5cbmZ1bmN0aW9uIGZpbGxPZmZzZXQob2Zmc2V0LCByZW1haW5pbmcpIHtcbiAgICBjb25zdCBtaW4gPSBvZmZzZXRbb2Zmc2V0Lmxlbmd0aCAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHJlbWFpbmluZzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldFByb2dyZXNzID0gcHJvZ3Jlc3MoMCwgcmVtYWluaW5nLCBpKTtcbiAgICAgICAgb2Zmc2V0LnB1c2gobWl4KG1pbiwgMSwgb2Zmc2V0UHJvZ3Jlc3MpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWZhdWx0T2Zmc2V0KGxlbmd0aCkge1xuICAgIGNvbnN0IG9mZnNldCA9IFswXTtcbiAgICBmaWxsT2Zmc2V0KG9mZnNldCwgbGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIG9mZnNldDtcbn1cblxuZXhwb3J0IHsgZGVmYXVsdE9mZnNldCwgZmlsbE9mZnNldCB9O1xuIiwiY29uc3Qgd3JhcCA9IChtaW4sIG1heCwgdikgPT4ge1xuICAgIGNvbnN0IHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgICByZXR1cm4gKCgoKHYgLSBtaW4pICUgcmFuZ2VTaXplKSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUpICsgbWluO1xufTtcblxuZXhwb3J0IHsgd3JhcCB9O1xuIiwiaW1wb3J0IHsgaXNFYXNpbmdMaXN0IH0gZnJvbSAnLi9pcy1lYXNpbmctbGlzdC5lcy5qcyc7XG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAnLi93cmFwLmVzLmpzJztcblxuZnVuY3Rpb24gZ2V0RWFzaW5nRm9yU2VnbWVudChlYXNpbmcsIGkpIHtcbiAgICByZXR1cm4gaXNFYXNpbmdMaXN0KGVhc2luZykgPyBlYXNpbmdbd3JhcCgwLCBlYXNpbmcubGVuZ3RoLCBpKV0gOiBlYXNpbmc7XG59XG5cbmV4cG9ydCB7IGdldEVhc2luZ0ZvclNlZ21lbnQgfTtcbiIsImNvbnN0IGNsYW1wID0gKG1pbiwgbWF4LCB2KSA9PiBNYXRoLm1pbihNYXRoLm1heCh2LCBtaW4pLCBtYXgpO1xuXG5leHBvcnQgeyBjbGFtcCB9O1xuIiwiaW1wb3J0IHsgbWl4IH0gZnJvbSAnLi9taXguZXMuanMnO1xuaW1wb3J0IHsgbm9vcFJldHVybiB9IGZyb20gJy4vbm9vcC5lcy5qcyc7XG5pbXBvcnQgeyBmaWxsT2Zmc2V0LCBkZWZhdWx0T2Zmc2V0IH0gZnJvbSAnLi9vZmZzZXQuZXMuanMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3MgfSBmcm9tICcuL3Byb2dyZXNzLmVzLmpzJztcbmltcG9ydCB7IGdldEVhc2luZ0ZvclNlZ21lbnQgfSBmcm9tICcuL2Vhc2luZy5lcy5qcyc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4vY2xhbXAuZXMuanMnO1xuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShvdXRwdXQsIGlucHV0ID0gZGVmYXVsdE9mZnNldChvdXRwdXQubGVuZ3RoKSwgZWFzaW5nID0gbm9vcFJldHVybikge1xuICAgIGNvbnN0IGxlbmd0aCA9IG91dHB1dC5sZW5ndGg7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIGlucHV0IGxlbmd0aCBpcyBsb3dlciB0aGFuIHRoZSBvdXRwdXQgd2VcbiAgICAgKiBmaWxsIHRoZSBpbnB1dCB0byBtYXRjaC4gVGhpcyBjdXJyZW50bHkgYXNzdW1lcyB0aGUgaW5wdXRcbiAgICAgKiBpcyBhbiBhbmltYXRpb24gcHJvZ3Jlc3MgdmFsdWUgc28gaXMgYSBnb29kIGNhbmRpZGF0ZSBmb3JcbiAgICAgKiBtb3Zpbmcgb3V0c2lkZSB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3QgcmVtYWluZGVyID0gbGVuZ3RoIC0gaW5wdXQubGVuZ3RoO1xuICAgIHJlbWFpbmRlciA+IDAgJiYgZmlsbE9mZnNldChpbnB1dCwgcmVtYWluZGVyKTtcbiAgICByZXR1cm4gKHQpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgaWYgKHQgPCBpbnB1dFtpICsgMV0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb2dyZXNzSW5SYW5nZSA9IGNsYW1wKDAsIDEsIHByb2dyZXNzKGlucHV0W2ldLCBpbnB1dFtpICsgMV0sIHQpKTtcbiAgICAgICAgY29uc3Qgc2VnbWVudEVhc2luZyA9IGdldEVhc2luZ0ZvclNlZ21lbnQoZWFzaW5nLCBpKTtcbiAgICAgICAgcHJvZ3Jlc3NJblJhbmdlID0gc2VnbWVudEVhc2luZyhwcm9ncmVzc0luUmFuZ2UpO1xuICAgICAgICByZXR1cm4gbWl4KG91dHB1dFtpXSwgb3V0cHV0W2kgKyAxXSwgcHJvZ3Jlc3NJblJhbmdlKTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBpbnRlcnBvbGF0ZSB9O1xuIiwiaW1wb3J0IHsgbm9vcFJldHVybiB9IGZyb20gJ0Btb3Rpb25vbmUvdXRpbHMnO1xuXG4vKlxuICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG5cbiAgVGhpcyBoYXMgYmVlbiBtb2RpZmllZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9zcmMvaW5kZXguanNcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgXG4gIEkndmUgcmVtb3ZlZCB0aGUgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgYWxnbyBiZWNhdXNlIGluIGJlbmNobWFya2luZyBpdFxuICB3YXNuJ3Qgbm90aWNpYWJseSBmYXN0ZXIgdGhhbiBiaW5hcnlTdWJkaXZpc2lvbiwgaW5kZWVkIHJlbW92aW5nIGl0XG4gIHVzdWFsbHkgaW1wcm92ZWQgdGltZXMsIGRlcGVuZGluZyBvbiB0aGUgY3VydmUuXG5cbiAgSSBhbHNvIHJlbW92ZWQgdGhlIGxvb2t1cCB0YWJsZSwgYXMgZm9yIHRoZSBhZGRlZCBidW5kbGUgc2l6ZSBhbmQgbG9vcCB3ZSdyZVxuICBvbmx5IGN1dHRpbmcgfjQgb3Igc28gc3ViZGl2aXNpb24gaXRlcmF0aW9ucy4gSSBidW1wZWQgdGhlIG1heCBpdGVyYXRpb25zIHVwXG4gIHRvIDEyIHRvIGNvbXBlbnNhdGUgYW5kIHRoaXMgc3RpbGwgdGVuZGVkIHRvIGJlIGZhc3RlciBmb3Igbm8gcGVyY2VpdmFibGVcbiAgbG9zcyBpbiBhY2N1cmFjeS5cblxuICBVc2FnZVxuICAgIGNvbnN0IGVhc2VPdXQgPSBjdWJpY0JlemllciguMTcsLjY3LC44MywuNjcpO1xuICAgIGNvbnN0IHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG4vLyBSZXR1cm5zIHgodCkgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgeSh0KSBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuY29uc3QgY2FsY0JlemllciA9ICh0LCBhMSwgYTIpID0+ICgoKDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTEpICogdCArICgzLjAgKiBhMiAtIDYuMCAqIGExKSkgKiB0ICsgMy4wICogYTEpICogdDtcbmNvbnN0IHN1YmRpdmlzaW9uUHJlY2lzaW9uID0gMC4wMDAwMDAxO1xuY29uc3Qgc3ViZGl2aXNpb25NYXhJdGVyYXRpb25zID0gMTI7XG5mdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoeCwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCwgbVgxLCBtWDIpIHtcbiAgICBsZXQgY3VycmVudFg7XG4gICAgbGV0IGN1cnJlbnRUO1xuICAgIGxldCBpID0gMDtcbiAgICBkbyB7XG4gICAgICAgIGN1cnJlbnRUID0gbG93ZXJCb3VuZCArICh1cHBlckJvdW5kIC0gbG93ZXJCb3VuZCkgLyAyLjA7XG4gICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0geDtcbiAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICB1cHBlckJvdW5kID0gY3VycmVudFQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb3dlckJvdW5kID0gY3VycmVudFQ7XG4gICAgICAgIH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBzdWJkaXZpc2lvblByZWNpc2lvbiAmJlxuICAgICAgICArK2kgPCBzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMpO1xuICAgIHJldHVybiBjdXJyZW50VDtcbn1cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgIC8vIElmIHRoaXMgaXMgYSBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBsaW5lYXIgZWFzaW5nXG4gICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKVxuICAgICAgICByZXR1cm4gbm9vcFJldHVybjtcbiAgICBjb25zdCBnZXRURm9yWCA9IChhWCkgPT4gYmluYXJ5U3ViZGl2aWRlKGFYLCAwLCAxLCBtWDEsIG1YMik7XG4gICAgLy8gSWYgYW5pbWF0aW9uIGlzIGF0IHN0YXJ0L2VuZCwgcmV0dXJuIHQgd2l0aG91dCBlYXNpbmdcbiAgICByZXR1cm4gKHQpID0+IHQgPT09IDAgfHwgdCA9PT0gMSA/IHQgOiBjYWxjQmV6aWVyKGdldFRGb3JYKHQpLCBtWTEsIG1ZMik7XG59XG5cbmV4cG9ydCB7IGN1YmljQmV6aWVyIH07XG4iLCJpbXBvcnQgeyBjbGFtcCB9IGZyb20gJ0Btb3Rpb25vbmUvdXRpbHMnO1xuXG5jb25zdCBzdGVwcyA9IChzdGVwcywgZGlyZWN0aW9uID0gXCJlbmRcIikgPT4gKHByb2dyZXNzKSA9PiB7XG4gICAgcHJvZ3Jlc3MgPVxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiZW5kXCJcbiAgICAgICAgICAgID8gTWF0aC5taW4ocHJvZ3Jlc3MsIDAuOTk5KVxuICAgICAgICAgICAgOiBNYXRoLm1heChwcm9ncmVzcywgMC4wMDEpO1xuICAgIGNvbnN0IGV4cGFuZGVkID0gcHJvZ3Jlc3MgKiBzdGVwcztcbiAgICBjb25zdCByb3VuZGVkID0gZGlyZWN0aW9uID09PSBcImVuZFwiID8gTWF0aC5mbG9vcihleHBhbmRlZCkgOiBNYXRoLmNlaWwoZXhwYW5kZWQpO1xuICAgIHJldHVybiBjbGFtcCgwLCAxLCByb3VuZGVkIC8gc3RlcHMpO1xufTtcblxuZXhwb3J0IHsgc3RlcHMgfTtcbiIsImNvbnN0IGlzRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xuXG5leHBvcnQgeyBpc0Z1bmN0aW9uIH07XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4vaXMtbnVtYmVyLmVzLmpzJztcblxuY29uc3QgaXNDdWJpY0JlemllciA9IChlYXNpbmcpID0+IEFycmF5LmlzQXJyYXkoZWFzaW5nKSAmJiBpc051bWJlcihlYXNpbmdbMF0pO1xuXG5leHBvcnQgeyBpc0N1YmljQmV6aWVyIH07XG4iLCJpbXBvcnQgeyBjdWJpY0Jlemllciwgc3RlcHMgfSBmcm9tICdAbW90aW9ub25lL2Vhc2luZyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0N1YmljQmV6aWVyLCBub29wUmV0dXJuIH0gZnJvbSAnQG1vdGlvbm9uZS91dGlscyc7XG5cbmNvbnN0IG5hbWVkRWFzaW5ncyA9IHtcbiAgICBlYXNlOiBjdWJpY0JlemllcigwLjI1LCAwLjEsIDAuMjUsIDEuMCksXG4gICAgXCJlYXNlLWluXCI6IGN1YmljQmV6aWVyKDAuNDIsIDAuMCwgMS4wLCAxLjApLFxuICAgIFwiZWFzZS1pbi1vdXRcIjogY3ViaWNCZXppZXIoMC40MiwgMC4wLCAwLjU4LCAxLjApLFxuICAgIFwiZWFzZS1vdXRcIjogY3ViaWNCZXppZXIoMC4wLCAwLjAsIDAuNTgsIDEuMCksXG59O1xuY29uc3QgZnVuY3Rpb25BcmdzUmVnZXggPSAvXFwoKC4qPylcXCkvO1xuZnVuY3Rpb24gZ2V0RWFzaW5nRnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgIC8vIElmIGFscmVhZHkgYW4gZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5cbiAgICBpZiAoaXNGdW5jdGlvbihkZWZpbml0aW9uKSlcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgLy8gSWYgYW4gZWFzaW5nIGN1cnZlIGRlZmluaXRpb24sIHJldHVybiBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoaXNDdWJpY0JlemllcihkZWZpbml0aW9uKSlcbiAgICAgICAgcmV0dXJuIGN1YmljQmV6aWVyKC4uLmRlZmluaXRpb24pO1xuICAgIC8vIElmIHdlIGhhdmUgYSBwcmVkZWZpbmVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJuXG4gICAgY29uc3QgbmFtZWRFYXNpbmcgPSBuYW1lZEVhc2luZ3NbZGVmaW5pdGlvbl07XG4gICAgaWYgKG5hbWVkRWFzaW5nKVxuICAgICAgICByZXR1cm4gbmFtZWRFYXNpbmc7XG4gICAgLy8gSWYgdGhpcyBpcyBhIHN0ZXBzIGZ1bmN0aW9uLCBhdHRlbXB0IHRvIGNyZWF0ZSBlYXNpbmcgY3VydmVcbiAgICBpZiAoZGVmaW5pdGlvbi5zdGFydHNXaXRoKFwic3RlcHNcIikpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IGZ1bmN0aW9uQXJnc1JlZ2V4LmV4ZWMoZGVmaW5pdGlvbik7XG4gICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzQXJyYXkgPSBhcmdzWzFdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIHJldHVybiBzdGVwcyhwYXJzZUZsb2F0KGFyZ3NBcnJheVswXSksIGFyZ3NBcnJheVsxXS50cmltKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub29wUmV0dXJuO1xufVxuXG5leHBvcnQgeyBnZXRFYXNpbmdGdW5jdGlvbiB9O1xuIiwiaW1wb3J0IHsgbm9vcFJldHVybiwgZGVmYXVsdHMsIGlzRWFzaW5nR2VuZXJhdG9yLCBpc0Vhc2luZ0xpc3QsIGludGVycG9sYXRlIH0gZnJvbSAnQG1vdGlvbm9uZS91dGlscyc7XG5pbXBvcnQgeyBnZXRFYXNpbmdGdW5jdGlvbiB9IGZyb20gJy4vdXRpbHMvZWFzaW5nLmVzLmpzJztcblxuY2xhc3MgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihvdXRwdXQsIGtleWZyYW1lcyA9IFswLCAxXSwgeyBlYXNpbmcsIGR1cmF0aW9uOiBpbml0aWFsRHVyYXRpb24gPSBkZWZhdWx0cy5kdXJhdGlvbiwgZGVsYXkgPSBkZWZhdWx0cy5kZWxheSwgZW5kRGVsYXkgPSBkZWZhdWx0cy5lbmREZWxheSwgcmVwZWF0ID0gZGVmYXVsdHMucmVwZWF0LCBvZmZzZXQsIGRpcmVjdGlvbiA9IFwibm9ybWFsXCIsIGF1dG9wbGF5ID0gdHJ1ZSwgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5yYXRlID0gMTtcbiAgICAgICAgdGhpcy50ID0gMDtcbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lc3RhbXAgPSBudWxsO1xuICAgICAgICB0aGlzLmVhc2luZyA9IG5vb3BSZXR1cm47XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgICAgICB0aGlzLnRvdGFsRHVyYXRpb24gPSAwO1xuICAgICAgICB0aGlzLnJlcGVhdCA9IDA7XG4gICAgICAgIHRoaXMucGxheVN0YXRlID0gXCJpZGxlXCI7XG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICBlYXNpbmcgPSBlYXNpbmcgfHwgZGVmYXVsdHMuZWFzaW5nO1xuICAgICAgICBpZiAoaXNFYXNpbmdHZW5lcmF0b3IoZWFzaW5nKSkge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tID0gZWFzaW5nLmNyZWF0ZUFuaW1hdGlvbihrZXlmcmFtZXMpO1xuICAgICAgICAgICAgZWFzaW5nID0gY3VzdG9tLmVhc2luZztcbiAgICAgICAgICAgIGtleWZyYW1lcyA9IGN1c3RvbS5rZXlmcmFtZXMgfHwga2V5ZnJhbWVzO1xuICAgICAgICAgICAgaW5pdGlhbER1cmF0aW9uID0gY3VzdG9tLmR1cmF0aW9uIHx8IGluaXRpYWxEdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICAgICAgdGhpcy5lYXNpbmcgPSBpc0Vhc2luZ0xpc3QoZWFzaW5nKSA/IG5vb3BSZXR1cm4gOiBnZXRFYXNpbmdGdW5jdGlvbihlYXNpbmcpO1xuICAgICAgICB0aGlzLnVwZGF0ZUR1cmF0aW9uKGluaXRpYWxEdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IGludGVycG9sYXRlJDEgPSBpbnRlcnBvbGF0ZShrZXlmcmFtZXMsIG9mZnNldCwgaXNFYXNpbmdMaXN0KGVhc2luZykgPyBlYXNpbmcubWFwKGdldEVhc2luZ0Z1bmN0aW9uKSA6IG5vb3BSZXR1cm4pO1xuICAgICAgICB0aGlzLnRpY2sgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAvLyBUT0RPOiBUZW1wb3JhcnkgZml4IGZvciBPcHRpb25zUmVzb2x2ZXIgdHlwaW5nXG4gICAgICAgICAgICBkZWxheSA9IGRlbGF5O1xuICAgICAgICAgICAgbGV0IHQgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VUaW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0ID0gdGhpcy5wYXVzZVRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gKHRpbWVzdGFtcCAtIHRoaXMuc3RhcnRUaW1lKSAqIHRoaXMucmF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudCA9IHQ7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHNlY29uZHNcbiAgICAgICAgICAgIHQgLz0gMTAwMDtcbiAgICAgICAgICAgIC8vIFJlYmFzZSBvbiBkZWxheVxuICAgICAgICAgICAgdCA9IE1hdGgubWF4KHQgLSBkZWxheSwgMCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHRoaXMgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZCwgc2V0IHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAqIHRvIHRoZSB0b3RhbCBkdXJhdGlvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheVN0YXRlID09PSBcImZpbmlzaGVkXCIgJiYgdGhpcy5wYXVzZVRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHQgPSB0aGlzLnRvdGFsRHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCB0aGUgY3VycmVudCBwcm9ncmVzcyAoMC0xKSBvZiB0aGUgYW5pbWF0aW9uLiBJZiB0IGlzID5cbiAgICAgICAgICAgICAqIHRoYW4gZHVyYXRpb24gd2UnbGwgZ2V0IHZhbHVlcyBsaWtlIDIuNSAobWlkd2F5IHRocm91Z2ggdGhlXG4gICAgICAgICAgICAgKiB0aGlyZCBpdGVyYXRpb24pXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gdCAvIHRoaXMuZHVyYXRpb247XG4gICAgICAgICAgICAvLyBUT0RPIHByb2dyZXNzICs9IGl0ZXJhdGlvblN0YXJ0XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCB0aGUgY3VycmVudCBpdGVyYXRpb24gKDAgaW5kZXhlZCkuIEZvciBpbnN0YW5jZSB0aGUgZmxvb3Igb2ZcbiAgICAgICAgICAgICAqIDIuNSBpcyAyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgY3VycmVudEl0ZXJhdGlvbiA9IE1hdGguZmxvb3IocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIGl0ZXJhdGlvbiBieSB0YWtpbmcgdGhlIHJlbWFpbmRlclxuICAgICAgICAgICAgICogc28gMi41IGlzIDAuNSB0aHJvdWdoIGl0ZXJhdGlvbiAyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxldCBpdGVyYXRpb25Qcm9ncmVzcyA9IHByb2dyZXNzICUgMS4wO1xuICAgICAgICAgICAgaWYgKCFpdGVyYXRpb25Qcm9ncmVzcyAmJiBwcm9ncmVzcyA+PSAxKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uUHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBpdGVyYXRpb24gcHJvZ3Jlc3MgaXMgMSB3ZSBjb3VudCB0aGF0IGFzIHRoZSBlbmRcbiAgICAgICAgICAgICAqIG9mIHRoZSBwcmV2aW91cyBpdGVyYXRpb24uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGl0ZXJhdGlvblByb2dyZXNzID09PSAxICYmIGN1cnJlbnRJdGVyYXRpb24tLTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV2ZXJzZSBwcm9ncmVzcyBpZiB3ZSdyZSBub3QgcnVubmluZyBpbiBcIm5vcm1hbFwiIGRpcmVjdGlvblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBpdGVyYXRpb25Jc09kZCA9IGN1cnJlbnRJdGVyYXRpb24gJSAyO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyZXZlcnNlXCIgfHxcbiAgICAgICAgICAgICAgICAoZGlyZWN0aW9uID09PSBcImFsdGVybmF0ZVwiICYmIGl0ZXJhdGlvbklzT2RkKSB8fFxuICAgICAgICAgICAgICAgIChkaXJlY3Rpb24gPT09IFwiYWx0ZXJuYXRlLXJldmVyc2VcIiAmJiAhaXRlcmF0aW9uSXNPZGQpKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uUHJvZ3Jlc3MgPSAxIC0gaXRlcmF0aW9uUHJvZ3Jlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwID0gdCA+PSB0aGlzLnRvdGFsRHVyYXRpb24gPyAxIDogTWF0aC5taW4oaXRlcmF0aW9uUHJvZ3Jlc3MsIDEpO1xuICAgICAgICAgICAgY29uc3QgbGF0ZXN0ID0gaW50ZXJwb2xhdGUkMSh0aGlzLmVhc2luZyhwKSk7XG4gICAgICAgICAgICBvdXRwdXQobGF0ZXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQW5pbWF0aW9uRmluaXNoZWQgPSB0aGlzLnBhdXNlVGltZSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKHRoaXMucGxheVN0YXRlID09PSBcImZpbmlzaGVkXCIgfHwgdCA+PSB0aGlzLnRvdGFsRHVyYXRpb24gKyBlbmREZWxheSk7XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpb25GaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheVN0YXRlID0gXCJmaW5pc2hlZFwiO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMucmVzb2x2ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywgbGF0ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheVN0YXRlICE9PSBcImlkbGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGF1dG9wbGF5KVxuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZSA9IFwicnVubmluZ1wiO1xuICAgICAgICBpZiAodGhpcy5wYXVzZVRpbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBub3cgLSB0aGlzLnBhdXNlVGltZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5zdGFydFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbm93O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FuY2VsVGltZXN0YW1wID0gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIHRoaXMucGF1c2VUaW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmZyYW1lUmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljayk7XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBsYXlTdGF0ZSA9IFwicGF1c2VkXCI7XG4gICAgICAgIHRoaXMucGF1c2VUaW1lID0gdGhpcy50O1xuICAgIH1cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMucGxheVN0YXRlID0gXCJmaW5pc2hlZFwiO1xuICAgICAgICB0aGlzLnRpY2soMCk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5wbGF5U3RhdGUgPSBcImlkbGVcIjtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVSZXF1ZXN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZVJlcXVlc3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgKF9hID0gdGhpcy5yZWplY3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGZhbHNlKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy50aWNrKHRoaXMuY2FuY2VsVGltZXN0YW1wKTtcbiAgICB9XG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5yYXRlICo9IC0xO1xuICAgIH1cbiAgICBjb21taXRTdHlsZXMoKSB7IH1cbiAgICB1cGRhdGVEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMudG90YWxEdXJhdGlvbiA9IGR1cmF0aW9uICogKHRoaXMucmVwZWF0ICsgMSk7XG4gICAgfVxuICAgIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudDtcbiAgICB9XG4gICAgc2V0IGN1cnJlbnRUaW1lKHQpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VUaW1lICE9PSB1bmRlZmluZWQgfHwgdGhpcy5yYXRlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlVGltZSA9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdCAvIHRoaXMucmF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgcGxheWJhY2tSYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYXRlO1xuICAgIH1cbiAgICBzZXQgcGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICAgICAgdGhpcy5yYXRlID0gcmF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEFuaW1hdGlvbiB9O1xuIiwidmFyIHdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7IH07XHJcbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbiAoKSB7IH07XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICB3YXJuaW5nID0gZnVuY3Rpb24gKGNoZWNrLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKCFjaGVjayAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBpbnZhcmlhbnQgPSBmdW5jdGlvbiAoY2hlY2ssIG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cbmV4cG9ydCB7IGludmFyaWFudCwgd2FybmluZyB9O1xuIiwiLyoqXG4gKiBUaGUgTW90aW9uVmFsdWUgdHJhY2tzIHRoZSBzdGF0ZSBvZiBhIHNpbmdsZSBhbmltYXRhYmxlXG4gKiB2YWx1ZS4gQ3VycmVudGx5LCB1cGRhdGVkQXQgYW5kIGN1cnJlbnQgYXJlIHVudXNlZC4gVGhlXG4gKiBsb25nIHRlcm0gaWRlYSBpcyB0byB1c2UgdGhpcyB0byBtaW5pbWlzZSB0aGUgbnVtYmVyXG4gKiBvZiBET00gcmVhZHMsIGFuZCB0byBhYnN0cmFjdCB0aGUgRE9NIGludGVyYWN0aW9ucyBoZXJlLlxuICovXG5jbGFzcyBNb3Rpb25WYWx1ZSB7XG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICAgICAgYW5pbWF0aW9uID09PSBudWxsIHx8IGFuaW1hdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYW5pbWF0aW9uLmZpbmlzaGVkLnRoZW4oKCkgPT4gdGhpcy5jbGVhckFuaW1hdGlvbigpKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH1cbiAgICBjbGVhckFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdlbmVyYXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdGlvblZhbHVlIH07XG4iLCJpbXBvcnQgeyBNb3Rpb25WYWx1ZSB9IGZyb20gJ0Btb3Rpb25vbmUvdHlwZXMnO1xuXG5jb25zdCBkYXRhID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIGdldEFuaW1hdGlvbkRhdGEoZWxlbWVudCkge1xuICAgIGlmICghZGF0YS5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgZGF0YS5zZXQoZWxlbWVudCwge1xuICAgICAgICAgICAgdHJhbnNmb3JtczogW10sXG4gICAgICAgICAgICB2YWx1ZXM6IG5ldyBNYXAoKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmdldChlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGdldE1vdGlvblZhbHVlKG1vdGlvblZhbHVlcywgbmFtZSkge1xuICAgIGlmICghbW90aW9uVmFsdWVzLmhhcyhuYW1lKSkge1xuICAgICAgICBtb3Rpb25WYWx1ZXMuc2V0KG5hbWUsIG5ldyBNb3Rpb25WYWx1ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vdGlvblZhbHVlcy5nZXQobmFtZSk7XG59XG5cbmV4cG9ydCB7IGdldEFuaW1hdGlvbkRhdGEsIGdldE1vdGlvblZhbHVlIH07XG4iLCJmdW5jdGlvbiBhZGRVbmlxdWVJdGVtKGFycmF5LCBpdGVtKSB7XG4gICAgYXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gLTEgJiYgYXJyYXkucHVzaChpdGVtKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICBpbmRleCA+IC0xICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5leHBvcnQgeyBhZGRVbmlxdWVJdGVtLCByZW1vdmVJdGVtIH07XG4iLCJpbXBvcnQgeyBub29wUmV0dXJuLCBhZGRVbmlxdWVJdGVtIH0gZnJvbSAnQG1vdGlvbm9uZS91dGlscyc7XG5pbXBvcnQgeyBnZXRBbmltYXRpb25EYXRhIH0gZnJvbSAnLi4vZGF0YS5lcy5qcyc7XG5cbi8qKlxuICogQSBsaXN0IG9mIGFsbCB0cmFuc2Zvcm1hYmxlIGF4ZXMuIFdlJ2xsIHVzZSB0aGlzIGxpc3QgdG8gZ2VuZXJhdGVkIGEgdmVyc2lvblxuICogb2YgZWFjaCBheGVzIGZvciBlYWNoIHRyYW5zZm9ybS5cbiAqL1xuY29uc3QgYXhlcyA9IFtcIlwiLCBcIlhcIiwgXCJZXCIsIFwiWlwiXTtcbi8qKlxuICogQW4gb3JkZXJlZCBhcnJheSBvZiBlYWNoIHRyYW5zZm9ybWFibGUgdmFsdWUuIEJ5IGRlZmF1bHQsIHRyYW5zZm9ybSB2YWx1ZXNcbiAqIHdpbGwgYmUgc29ydGVkIHRvIHRoaXMgb3JkZXIuXG4gKi9cbmNvbnN0IG9yZGVyID0gW1widHJhbnNsYXRlXCIsIFwic2NhbGVcIiwgXCJyb3RhdGVcIiwgXCJza2V3XCJdO1xuY29uc3QgdHJhbnNmb3JtQWxpYXMgPSB7XG4gICAgeDogXCJ0cmFuc2xhdGVYXCIsXG4gICAgeTogXCJ0cmFuc2xhdGVZXCIsXG4gICAgejogXCJ0cmFuc2xhdGVaXCIsXG59O1xuY29uc3Qgcm90YXRpb24gPSB7XG4gICAgc3ludGF4OiBcIjxhbmdsZT5cIixcbiAgICBpbml0aWFsVmFsdWU6IFwiMGRlZ1wiLFxuICAgIHRvRGVmYXVsdFVuaXQ6ICh2KSA9PiB2ICsgXCJkZWdcIixcbn07XG5jb25zdCBiYXNlVHJhbnNmb3JtUHJvcGVydGllcyA9IHtcbiAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgc3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcbiAgICAgICAgaW5pdGlhbFZhbHVlOiBcIjBweFwiLFxuICAgICAgICB0b0RlZmF1bHRVbml0OiAodikgPT4gdiArIFwicHhcIixcbiAgICB9LFxuICAgIHJvdGF0ZTogcm90YXRpb24sXG4gICAgc2NhbGU6IHtcbiAgICAgICAgc3ludGF4OiBcIjxudW1iZXI+XCIsXG4gICAgICAgIGluaXRpYWxWYWx1ZTogMSxcbiAgICAgICAgdG9EZWZhdWx0VW5pdDogbm9vcFJldHVybixcbiAgICB9LFxuICAgIHNrZXc6IHJvdGF0aW9uLFxufTtcbmNvbnN0IHRyYW5zZm9ybURlZmluaXRpb25zID0gbmV3IE1hcCgpO1xuY29uc3QgYXNUcmFuc2Zvcm1Dc3NWYXIgPSAobmFtZSkgPT4gYC0tbW90aW9uLSR7bmFtZX1gO1xuLyoqXG4gKiBHZW5lcmF0ZSBhIGxpc3Qgb2YgZXZlcnkgcG9zc2libGUgdHJhbnNmb3JtIGtleVxuICovXG5jb25zdCB0cmFuc2Zvcm1zID0gW1wieFwiLCBcInlcIiwgXCJ6XCJdO1xub3JkZXIuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGF4ZXMuZm9yRWFjaCgoYXhpcykgPT4ge1xuICAgICAgICB0cmFuc2Zvcm1zLnB1c2gobmFtZSArIGF4aXMpO1xuICAgICAgICB0cmFuc2Zvcm1EZWZpbml0aW9ucy5zZXQoYXNUcmFuc2Zvcm1Dc3NWYXIobmFtZSArIGF4aXMpLCBiYXNlVHJhbnNmb3JtUHJvcGVydGllc1tuYW1lXSk7XG4gICAgfSk7XG59KTtcbi8qKlxuICogQSBmdW5jdGlvbiB0byB1c2Ugd2l0aCBBcnJheS5zb3J0IHRvIHNvcnQgdHJhbnNmb3JtIGtleXMgYnkgdGhlaXIgZGVmYXVsdCBvcmRlci5cbiAqL1xuY29uc3QgY29tcGFyZVRyYW5zZm9ybU9yZGVyID0gKGEsIGIpID0+IHRyYW5zZm9ybXMuaW5kZXhPZihhKSAtIHRyYW5zZm9ybXMuaW5kZXhPZihiKTtcbi8qKlxuICogUHJvdmlkZSBhIHF1aWNrIHdheSB0byBjaGVjayBpZiBhIHN0cmluZyBpcyB0aGUgbmFtZSBvZiBhIHRyYW5zZm9ybVxuICovXG5jb25zdCB0cmFuc2Zvcm1Mb29rdXAgPSBuZXcgU2V0KHRyYW5zZm9ybXMpO1xuY29uc3QgaXNUcmFuc2Zvcm0gPSAobmFtZSkgPT4gdHJhbnNmb3JtTG9va3VwLmhhcyhuYW1lKTtcbmNvbnN0IGFkZFRyYW5zZm9ybVRvRWxlbWVudCA9IChlbGVtZW50LCBuYW1lKSA9PiB7XG4gICAgLy8gTWFwIHggdG8gdHJhbnNsYXRlWCBldGNcbiAgICBpZiAodHJhbnNmb3JtQWxpYXNbbmFtZV0pXG4gICAgICAgIG5hbWUgPSB0cmFuc2Zvcm1BbGlhc1tuYW1lXTtcbiAgICBjb25zdCB7IHRyYW5zZm9ybXMgfSA9IGdldEFuaW1hdGlvbkRhdGEoZWxlbWVudCk7XG4gICAgYWRkVW5pcXVlSXRlbSh0cmFuc2Zvcm1zLCBuYW1lKTtcbiAgICAvKipcbiAgICAgKiBUT0RPOiBBbiBvcHRpbWlzYXRpb24gaGVyZSBjb3VsZCBiZSB0byBjYWNoZSB0aGUgdHJhbnNmb3JtIGluIGVsZW1lbnQgZGF0YVxuICAgICAqIGFuZCBvbmx5IHVwZGF0ZSBpZiB0aGlzIGhhcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYnVpbGRUcmFuc2Zvcm1UZW1wbGF0ZSh0cmFuc2Zvcm1zKTtcbn07XG5jb25zdCBidWlsZFRyYW5zZm9ybVRlbXBsYXRlID0gKHRyYW5zZm9ybXMpID0+IHRyYW5zZm9ybXNcbiAgICAuc29ydChjb21wYXJlVHJhbnNmb3JtT3JkZXIpXG4gICAgLnJlZHVjZSh0cmFuc2Zvcm1MaXN0VG9TdHJpbmcsIFwiXCIpXG4gICAgLnRyaW0oKTtcbmNvbnN0IHRyYW5zZm9ybUxpc3RUb1N0cmluZyA9ICh0ZW1wbGF0ZSwgbmFtZSkgPT4gYCR7dGVtcGxhdGV9ICR7bmFtZX0odmFyKCR7YXNUcmFuc2Zvcm1Dc3NWYXIobmFtZSl9KSlgO1xuXG5leHBvcnQgeyBhZGRUcmFuc2Zvcm1Ub0VsZW1lbnQsIGFzVHJhbnNmb3JtQ3NzVmFyLCBheGVzLCBidWlsZFRyYW5zZm9ybVRlbXBsYXRlLCBjb21wYXJlVHJhbnNmb3JtT3JkZXIsIGlzVHJhbnNmb3JtLCB0cmFuc2Zvcm1BbGlhcywgdHJhbnNmb3JtRGVmaW5pdGlvbnMgfTtcbiIsImltcG9ydCB7IHRyYW5zZm9ybURlZmluaXRpb25zIH0gZnJvbSAnLi90cmFuc2Zvcm1zLmVzLmpzJztcblxuY29uc3QgaXNDc3NWYXIgPSAobmFtZSkgPT4gbmFtZS5zdGFydHNXaXRoKFwiLS1cIik7XG5jb25zdCByZWdpc3RlcmVkUHJvcGVydGllcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJlZ2lzdGVyQ3NzVmFyaWFibGUobmFtZSkge1xuICAgIGlmIChyZWdpc3RlcmVkUHJvcGVydGllcy5oYXMobmFtZSkpXG4gICAgICAgIHJldHVybjtcbiAgICByZWdpc3RlcmVkUHJvcGVydGllcy5hZGQobmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBzeW50YXgsIGluaXRpYWxWYWx1ZSB9ID0gdHJhbnNmb3JtRGVmaW5pdGlvbnMuaGFzKG5hbWUpXG4gICAgICAgICAgICA/IHRyYW5zZm9ybURlZmluaXRpb25zLmdldChuYW1lKVxuICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgQ1NTLnJlZ2lzdGVyUHJvcGVydHkoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGluaGVyaXRzOiBmYWxzZSxcbiAgICAgICAgICAgIHN5bnRheCxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7IH1cbn1cblxuZXhwb3J0IHsgaXNDc3NWYXIsIHJlZ2lzdGVyQ3NzVmFyaWFibGUsIHJlZ2lzdGVyZWRQcm9wZXJ0aWVzIH07XG4iLCJjb25zdCB0ZXN0QW5pbWF0aW9uID0gKGtleWZyYW1lcywgb3B0aW9ucykgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5hbmltYXRlKGtleWZyYW1lcywgb3B0aW9ucyk7XG5jb25zdCBmZWF0dXJlVGVzdHMgPSB7XG4gICAgY3NzUmVnaXN0ZXJQcm9wZXJ0eTogKCkgPT4gdHlwZW9mIENTUyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChDU1MsIFwicmVnaXN0ZXJQcm9wZXJ0eVwiKSxcbiAgICB3YWFwaTogKCkgPT4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoRWxlbWVudC5wcm90b3R5cGUsIFwiYW5pbWF0ZVwiKSxcbiAgICBwYXJ0aWFsS2V5ZnJhbWVzOiAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0ZXN0QW5pbWF0aW9uKHsgb3BhY2l0eTogWzFdIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBmaW5pc2hlZDogKCkgPT4gQm9vbGVhbih0ZXN0QW5pbWF0aW9uKHsgb3BhY2l0eTogWzAsIDFdIH0sIHsgZHVyYXRpb246IDAuMDAxIH0pLmZpbmlzaGVkKSxcbiAgICBsaW5lYXJFYXNpbmc6ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRlc3RBbmltYXRpb24oeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBcImxpbmVhcigwLCAxKVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbn07XG5jb25zdCByZXN1bHRzID0ge307XG5jb25zdCBzdXBwb3J0cyA9IHt9O1xuZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZVRlc3RzKSB7XG4gICAgc3VwcG9ydHNba2V5XSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHNba2V5XSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmVzdWx0c1trZXldID1cbiAgICAgICAgICAgICAgICBmZWF0dXJlVGVzdHNba2V5XSgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0c1trZXldO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHN1cHBvcnRzIH07XG4iLCJpbXBvcnQgeyBpc0Z1bmN0aW9uLCBkZWZhdWx0cywgaXNDdWJpY0JlemllciwgcHJvZ3Jlc3MgfSBmcm9tICdAbW90aW9ub25lL3V0aWxzJztcbmltcG9ydCB7IHN1cHBvcnRzIH0gZnJvbSAnLi9mZWF0dXJlLWRldGVjdGlvbi5lcy5qcyc7XG5cbi8vIENyZWF0ZSBhIGxpbmVhciBlYXNpbmcgcG9pbnQgZm9yIGV2ZXJ5IHggc2Vjb25kXG5jb25zdCByZXNvbHV0aW9uID0gMC4wMTU7XG5jb25zdCBnZW5lcmF0ZUxpbmVhckVhc2luZ1BvaW50cyA9IChlYXNpbmcsIGR1cmF0aW9uKSA9PiB7XG4gICAgbGV0IHBvaW50cyA9IFwiXCI7XG4gICAgY29uc3QgbnVtUG9pbnRzID0gTWF0aC5yb3VuZChkdXJhdGlvbiAvIHJlc29sdXRpb24pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUG9pbnRzOyBpKyspIHtcbiAgICAgICAgcG9pbnRzICs9IGVhc2luZyhwcm9ncmVzcygwLCBudW1Qb2ludHMgLSAxLCBpKSkgKyBcIiwgXCI7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHMuc3Vic3RyaW5nKDAsIHBvaW50cy5sZW5ndGggLSAyKTtcbn07XG5jb25zdCBjb252ZXJ0RWFzaW5nID0gKGVhc2luZywgZHVyYXRpb24pID0+IHtcbiAgICBpZiAoaXNGdW5jdGlvbihlYXNpbmcpKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0cy5saW5lYXJFYXNpbmcoKVxuICAgICAgICAgICAgPyBgbGluZWFyKCR7Z2VuZXJhdGVMaW5lYXJFYXNpbmdQb2ludHMoZWFzaW5nLCBkdXJhdGlvbil9KWBcbiAgICAgICAgICAgIDogZGVmYXVsdHMuZWFzaW5nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzQ3ViaWNCZXppZXIoZWFzaW5nKSA/IGN1YmljQmV6aWVyQXNTdHJpbmcoZWFzaW5nKSA6IGVhc2luZztcbiAgICB9XG59O1xuY29uc3QgY3ViaWNCZXppZXJBc1N0cmluZyA9IChbYSwgYiwgYywgZF0pID0+IGBjdWJpYy1iZXppZXIoJHthfSwgJHtifSwgJHtjfSwgJHtkfSlgO1xuXG5leHBvcnQgeyBjb252ZXJ0RWFzaW5nLCBjdWJpY0JlemllckFzU3RyaW5nLCBnZW5lcmF0ZUxpbmVhckVhc2luZ1BvaW50cyB9O1xuIiwiZnVuY3Rpb24gaHlkcmF0ZUtleWZyYW1lcyhrZXlmcmFtZXMsIHJlYWRJbml0aWFsVmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleWZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa2V5ZnJhbWVzW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgICBrZXlmcmFtZXNbaV0gPSBpID8ga2V5ZnJhbWVzW2kgLSAxXSA6IHJlYWRJbml0aWFsVmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5ZnJhbWVzO1xufVxuY29uc3Qga2V5ZnJhbWVzTGlzdCA9IChrZXlmcmFtZXMpID0+IEFycmF5LmlzQXJyYXkoa2V5ZnJhbWVzKSA/IGtleWZyYW1lcyA6IFtrZXlmcmFtZXNdO1xuXG5leHBvcnQgeyBoeWRyYXRlS2V5ZnJhbWVzLCBrZXlmcmFtZXNMaXN0IH07XG4iLCJpbXBvcnQgeyBpc1RyYW5zZm9ybSwgYXNUcmFuc2Zvcm1Dc3NWYXIsIHRyYW5zZm9ybUFsaWFzIH0gZnJvbSAnLi90cmFuc2Zvcm1zLmVzLmpzJztcblxuZnVuY3Rpb24gZ2V0U3R5bGVOYW1lKGtleSkge1xuICAgIGlmICh0cmFuc2Zvcm1BbGlhc1trZXldKVxuICAgICAgICBrZXkgPSB0cmFuc2Zvcm1BbGlhc1trZXldO1xuICAgIHJldHVybiBpc1RyYW5zZm9ybShrZXkpID8gYXNUcmFuc2Zvcm1Dc3NWYXIoa2V5KSA6IGtleTtcbn1cblxuZXhwb3J0IHsgZ2V0U3R5bGVOYW1lIH07XG4iLCJpbXBvcnQgeyBpc0Nzc1ZhciB9IGZyb20gJy4vdXRpbHMvY3NzLXZhci5lcy5qcyc7XG5pbXBvcnQgeyBnZXRTdHlsZU5hbWUgfSBmcm9tICcuL3V0aWxzL2dldC1zdHlsZS1uYW1lLmVzLmpzJztcbmltcG9ydCB7IHRyYW5zZm9ybURlZmluaXRpb25zIH0gZnJvbSAnLi91dGlscy90cmFuc2Zvcm1zLmVzLmpzJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgZ2V0OiAoZWxlbWVudCwgbmFtZSkgPT4ge1xuICAgICAgICBuYW1lID0gZ2V0U3R5bGVOYW1lKG5hbWUpO1xuICAgICAgICBsZXQgdmFsdWUgPSBpc0Nzc1ZhcihuYW1lKVxuICAgICAgICAgICAgPyBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgICAgICAgIDogZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtuYW1lXTtcbiAgICAgICAgLy8gVE9ETyBEZWNpZGUgaWYgdmFsdWUgY2FuIGJlIDBcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHRyYW5zZm9ybURlZmluaXRpb25zLmdldChuYW1lKTtcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uKVxuICAgICAgICAgICAgICAgIHZhbHVlID0gZGVmaW5pdGlvbi5pbml0aWFsVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbmFtZSA9IGdldFN0eWxlTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKGlzQ3NzVmFyKG5hbWUpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgeyBzdHlsZSB9O1xuIiwiY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcblxuZXhwb3J0IHsgaXNTdHJpbmcgfTtcbiIsImltcG9ydCB7IG5vb3BSZXR1cm4sIGlzU3RyaW5nIH0gZnJvbSAnQG1vdGlvbm9uZS91dGlscyc7XG5cbmZ1bmN0aW9uIGdldFVuaXRDb252ZXJ0ZXIoa2V5ZnJhbWVzLCBkZWZpbml0aW9uKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCB0b1VuaXQgPSAoZGVmaW5pdGlvbiA9PT0gbnVsbCB8fCBkZWZpbml0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWZpbml0aW9uLnRvRGVmYXVsdFVuaXQpIHx8IG5vb3BSZXR1cm47XG4gICAgY29uc3QgZmluYWxLZXlmcmFtZSA9IGtleWZyYW1lc1trZXlmcmFtZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGlzU3RyaW5nKGZpbmFsS2V5ZnJhbWUpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSAoKF9hID0gZmluYWxLZXlmcmFtZS5tYXRjaCgvKC0/W1xcZC5dKykoW2EteiVdKikvKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzJdKSB8fCBcIlwiO1xuICAgICAgICBpZiAodW5pdClcbiAgICAgICAgICAgIHRvVW5pdCA9ICh2YWx1ZSkgPT4gdmFsdWUgKyB1bml0O1xuICAgIH1cbiAgICByZXR1cm4gdG9Vbml0O1xufVxuXG5leHBvcnQgeyBnZXRVbml0Q29udmVydGVyIH07XG4iLCJpbXBvcnQgeyBnZXRBbmltYXRpb25EYXRhLCBnZXRNb3Rpb25WYWx1ZSB9IGZyb20gJy4vZGF0YS5lcy5qcyc7XG5pbXBvcnQgeyBpc0Nzc1ZhciwgcmVnaXN0ZXJDc3NWYXJpYWJsZSB9IGZyb20gJy4vdXRpbHMvY3NzLXZhci5lcy5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0cywgaXNFYXNpbmdHZW5lcmF0b3IsIGlzRnVuY3Rpb24sIGlzRWFzaW5nTGlzdCwgaXNOdW1iZXIsIHRpbWUsIG5vb3AgfSBmcm9tICdAbW90aW9ub25lL3V0aWxzJztcbmltcG9ydCB7IGlzVHJhbnNmb3JtLCBhZGRUcmFuc2Zvcm1Ub0VsZW1lbnQsIHRyYW5zZm9ybURlZmluaXRpb25zIH0gZnJvbSAnLi91dGlscy90cmFuc2Zvcm1zLmVzLmpzJztcbmltcG9ydCB7IGNvbnZlcnRFYXNpbmcgfSBmcm9tICcuL3V0aWxzL2Vhc2luZy5lcy5qcyc7XG5pbXBvcnQgeyBzdXBwb3J0cyB9IGZyb20gJy4vdXRpbHMvZmVhdHVyZS1kZXRlY3Rpb24uZXMuanMnO1xuaW1wb3J0IHsgaHlkcmF0ZUtleWZyYW1lcywga2V5ZnJhbWVzTGlzdCB9IGZyb20gJy4vdXRpbHMva2V5ZnJhbWVzLmVzLmpzJztcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnLi9zdHlsZS5lcy5qcyc7XG5pbXBvcnQgeyBnZXRTdHlsZU5hbWUgfSBmcm9tICcuL3V0aWxzL2dldC1zdHlsZS1uYW1lLmVzLmpzJztcbmltcG9ydCB7IHN0b3BBbmltYXRpb24gfSBmcm9tICcuL3V0aWxzL3N0b3AtYW5pbWF0aW9uLmVzLmpzJztcbmltcG9ydCB7IGdldFVuaXRDb252ZXJ0ZXIgfSBmcm9tICcuL3V0aWxzL2dldC11bml0LmVzLmpzJztcblxuZnVuY3Rpb24gZ2V0RGV2VG9vbHNSZWNvcmQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5fX01PVElPTl9ERVZfVE9PTFNfUkVDT1JEO1xufVxuZnVuY3Rpb24gYW5pbWF0ZVN0eWxlKGVsZW1lbnQsIGtleSwga2V5ZnJhbWVzRGVmaW5pdGlvbiwgb3B0aW9ucyA9IHt9LCBBbmltYXRpb25Qb2x5ZmlsbCkge1xuICAgIGNvbnN0IHJlY29yZCA9IGdldERldlRvb2xzUmVjb3JkKCk7XG4gICAgY29uc3QgaXNSZWNvcmRpbmcgPSBvcHRpb25zLnJlY29yZCAhPT0gZmFsc2UgJiYgcmVjb3JkO1xuICAgIGxldCBhbmltYXRpb247XG4gICAgbGV0IHsgZHVyYXRpb24gPSBkZWZhdWx0cy5kdXJhdGlvbiwgZGVsYXkgPSBkZWZhdWx0cy5kZWxheSwgZW5kRGVsYXkgPSBkZWZhdWx0cy5lbmREZWxheSwgcmVwZWF0ID0gZGVmYXVsdHMucmVwZWF0LCBlYXNpbmcgPSBkZWZhdWx0cy5lYXNpbmcsIHBlcnNpc3QgPSBmYWxzZSwgZGlyZWN0aW9uLCBvZmZzZXQsIGFsbG93V2Via2l0QWNjZWxlcmF0aW9uID0gZmFsc2UsIGF1dG9wbGF5ID0gdHJ1ZSwgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZGF0YSA9IGdldEFuaW1hdGlvbkRhdGEoZWxlbWVudCk7XG4gICAgY29uc3QgdmFsdWVJc1RyYW5zZm9ybSA9IGlzVHJhbnNmb3JtKGtleSk7XG4gICAgbGV0IGNhbkFuaW1hdGVOYXRpdmVseSA9IHN1cHBvcnRzLndhYXBpKCk7XG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBhbiBpbmRpdmlkdWFsIHRyYW5zZm9ybSwgd2UgbmVlZCB0byBtYXAgaXRzXG4gICAgICoga2V5IHRvIGEgQ1NTIHZhcmlhYmxlIGFuZCB1cGRhdGUgdGhlIGVsZW1lbnQncyB0cmFuc2Zvcm0gc3R5bGVcbiAgICAgKi9cbiAgICB2YWx1ZUlzVHJhbnNmb3JtICYmIGFkZFRyYW5zZm9ybVRvRWxlbWVudChlbGVtZW50LCBrZXkpO1xuICAgIGNvbnN0IG5hbWUgPSBnZXRTdHlsZU5hbWUoa2V5KTtcbiAgICBjb25zdCBtb3Rpb25WYWx1ZSA9IGdldE1vdGlvblZhbHVlKGRhdGEudmFsdWVzLCBuYW1lKTtcbiAgICAvKipcbiAgICAgKiBHZXQgZGVmaW5pdGlvbiBvZiB2YWx1ZSwgdGhpcyB3aWxsIGJlIHVzZWQgdG8gY29udmVydCBudW1lcmljYWxcbiAgICAgKiBrZXlmcmFtZXMgaW50byB0aGUgZGVmYXVsdCB2YWx1ZSB0eXBlLlxuICAgICAqL1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSB0cmFuc2Zvcm1EZWZpbml0aW9ucy5nZXQobmFtZSk7XG4gICAgLyoqXG4gICAgICogU3RvcCB0aGUgY3VycmVudCBhbmltYXRpb24sIGlmIGFueS4gQmVjYXVzZSB0aGlzIHdpbGwgdHJpZ2dlclxuICAgICAqIGNvbW1pdFN0eWxlcyAoRE9NIHdyaXRlcykgYW5kIHdlIG1pZ2h0IGxhdGVyIHRyaWdnZXIgRE9NIHJlYWRzLFxuICAgICAqIHRoaXMgaXMgZmlyZWQgbm93IGFuZCB3ZSByZXR1cm4gYSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZVxuICAgICAqIHRoZSBhY3R1YWwgYW5pbWF0aW9uIHRoYXQgY2FuIGdldCBjYWxsZWQgaW4gYmF0Y2gsXG4gICAgICovXG4gICAgc3RvcEFuaW1hdGlvbihtb3Rpb25WYWx1ZS5hbmltYXRpb24sICEoaXNFYXNpbmdHZW5lcmF0b3IoZWFzaW5nKSAmJiBtb3Rpb25WYWx1ZS5nZW5lcmF0b3IpICYmXG4gICAgICAgIG9wdGlvbnMucmVjb3JkICE9PSBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQmF0Y2hhYmxlIGZhY3RvcnkgZnVuY3Rpb24gY29udGFpbmluZyBhbGwgRE9NIHJlYWRzLlxuICAgICAqL1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRJbml0aWFsVmFsdWUgPSAoKSA9PiB7IHZhciBfYSwgX2I7IHJldHVybiAoX2IgPSAoX2EgPSBzdHlsZS5nZXQoZWxlbWVudCwgbmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGRlZmluaXRpb24gPT09IG51bGwgfHwgZGVmaW5pdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVmaW5pdGlvbi5pbml0aWFsVmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDA7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXBsYWNlIG51bGwgdmFsdWVzIHdpdGggdGhlIHByZXZpb3VzIGtleWZyYW1lIHZhbHVlLCBvciByZWFkXG4gICAgICAgICAqIGl0IGZyb20gdGhlIERPTSBpZiBpdCdzIHRoZSBmaXJzdCBrZXlmcmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIGxldCBrZXlmcmFtZXMgPSBoeWRyYXRlS2V5ZnJhbWVzKGtleWZyYW1lc0xpc3Qoa2V5ZnJhbWVzRGVmaW5pdGlvbiksIHJlYWRJbml0aWFsVmFsdWUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRGV0ZWN0IHVuaXQgdHlwZSBvZiBrZXlmcmFtZXMuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0b1VuaXQgPSBnZXRVbml0Q29udmVydGVyKGtleWZyYW1lcywgZGVmaW5pdGlvbik7XG4gICAgICAgIGlmIChpc0Vhc2luZ0dlbmVyYXRvcihlYXNpbmcpKSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b20gPSBlYXNpbmcuY3JlYXRlQW5pbWF0aW9uKGtleWZyYW1lcywga2V5ICE9PSBcIm9wYWNpdHlcIiwgcmVhZEluaXRpYWxWYWx1ZSwgbmFtZSwgbW90aW9uVmFsdWUpO1xuICAgICAgICAgICAgZWFzaW5nID0gY3VzdG9tLmVhc2luZztcbiAgICAgICAgICAgIGtleWZyYW1lcyA9IGN1c3RvbS5rZXlmcmFtZXMgfHwga2V5ZnJhbWVzO1xuICAgICAgICAgICAgZHVyYXRpb24gPSBjdXN0b20uZHVyYXRpb24gfHwgZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoaXMgaXMgYSBDU1MgdmFyaWFibGUgd2UgbmVlZCB0byByZWdpc3RlciBpdCB3aXRoIHRoZSBicm93c2VyXG4gICAgICAgICAqIGJlZm9yZSBpdCBjYW4gYmUgYW5pbWF0ZWQgbmF0aXZlbHkuIFdlIGFsc28gc2V0IGl0IHdpdGggc2V0UHJvcGVydHlcbiAgICAgICAgICogcmF0aGVyIHRoYW4gZGlyZWN0bHkgb250byB0aGUgZWxlbWVudC5zdHlsZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaXNDc3NWYXIobmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0cy5jc3NSZWdpc3RlclByb3BlcnR5KCkpIHtcbiAgICAgICAgICAgICAgICByZWdpc3RlckNzc1ZhcmlhYmxlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FuQW5pbWF0ZU5hdGl2ZWx5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlJ3ZlIGJlZW4gcGFzc2VkIGEgY3VzdG9tIGVhc2luZyBmdW5jdGlvbiwgYW5kIHRoaXMgYnJvd3NlclxuICAgICAgICAgKiBkb2VzICoqbm90Kiogc3VwcG9ydCBsaW5lYXIoKSBlYXNpbmcsIGFuZCB0aGUgdmFsdWUgaXMgYSB0cmFuc2Zvcm1cbiAgICAgICAgICogKGFuZCB0aHVzIGEgcHVyZSBudW1iZXIpIHdlIGNhbiBzdGlsbCBzdXBwb3J0IHRoZSBjdXN0b20gZWFzaW5nXG4gICAgICAgICAqIGJ5IGZhbGxpbmcgYmFjayB0byB0aGUgYW5pbWF0aW9uIHBvbHlmaWxsLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHZhbHVlSXNUcmFuc2Zvcm0gJiZcbiAgICAgICAgICAgICFzdXBwb3J0cy5saW5lYXJFYXNpbmcoKSAmJlxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oZWFzaW5nKSB8fCAoaXNFYXNpbmdMaXN0KGVhc2luZykgJiYgZWFzaW5nLnNvbWUoaXNGdW5jdGlvbikpKSkge1xuICAgICAgICAgICAgY2FuQW5pbWF0ZU5hdGl2ZWx5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlIGNhbiBhbmltYXRlIHRoaXMgdmFsdWUgd2l0aCBXQUFQSSwgZG8gc28uXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoY2FuQW5pbWF0ZU5hdGl2ZWx5KSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnZlcnQgbnVtYmVycyB0byBkZWZhdWx0IHZhbHVlIHR5cGVzLiBDdXJyZW50bHkgdGhpcyBvbmx5IHN1cHBvcnRzXG4gICAgICAgICAgICAgKiB0cmFuc2Zvcm1zIGJ1dCBpdCBjb3VsZCBhbHNvIHN1cHBvcnQgb3RoZXIgdmFsdWUgdHlwZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAga2V5ZnJhbWVzID0ga2V5ZnJhbWVzLm1hcCgodmFsdWUpID0+IGlzTnVtYmVyKHZhbHVlKSA/IGRlZmluaXRpb24udG9EZWZhdWx0VW5pdCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgcGFydGlhbC9pbXBsaWNpdCBrZXlmcmFtZXMgd2UgbmVlZCB0b1xuICAgICAgICAgICAgICogZXhwbGljaXRseSBwcm92aWRlIG9uZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKGtleWZyYW1lcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgICAoIXN1cHBvcnRzLnBhcnRpYWxLZXlmcmFtZXMoKSB8fCBpc1JlY29yZGluZykpIHtcbiAgICAgICAgICAgICAgICBrZXlmcmFtZXMudW5zaGlmdChyZWFkSW5pdGlhbFZhbHVlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBkZWxheTogdGltZS5tcyhkZWxheSksXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRpbWUubXMoZHVyYXRpb24pLFxuICAgICAgICAgICAgICAgIGVuZERlbGF5OiB0aW1lLm1zKGVuZERlbGF5KSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICFpc0Vhc2luZ0xpc3QoZWFzaW5nKVxuICAgICAgICAgICAgICAgICAgICA/IGNvbnZlcnRFYXNpbmcoZWFzaW5nLCBkdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IHJlcGVhdCArIDEsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJib3RoXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBbbmFtZV06IGtleWZyYW1lcyxcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBpc0Vhc2luZ0xpc3QoZWFzaW5nKVxuICAgICAgICAgICAgICAgICAgICA/IGVhc2luZy5tYXAoKHRoaXNFYXNpbmcpID0+IGNvbnZlcnRFYXNpbmcodGhpc0Vhc2luZywgZHVyYXRpb24pKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0sIGFuaW1hdGlvbk9wdGlvbnMpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQb2x5ZmlsbCBmaW5pc2hlZCBQcm9taXNlIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBpdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoIWFuaW1hdGlvbi5maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5maW5pc2hlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm9uZmluaXNoID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm9uY2FuY2VsID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0ga2V5ZnJhbWVzW2tleWZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5maW5pc2hlZFxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVyc2lzdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHN0eWxlcyB0byB0YXJnZXRcbiAgICAgICAgICAgICAgICBzdHlsZS5zZXQoZWxlbWVudCwgbmFtZSwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgZmlsbCBtb2RlcyBkb24ndCBwZXJzaXN0XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2gobm9vcCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoaXMgZm9yY2VzIFdlYmtpdCB0byBydW4gYW5pbWF0aW9ucyBvbiB0aGUgbWFpbiB0aHJlYWQgYnkgZXhwbG9pdGluZ1xuICAgICAgICAgICAgICogdGhpcyBjb25kaXRpb246XG4gICAgICAgICAgICAgKiBodHRwczovL3RyYWMud2Via2l0Lm9yZy9icm93c2VyL3dlYmtpdC90cnVuay9Tb3VyY2UvV2ViQ29yZS9wbGF0Zm9ybS9ncmFwaGljcy9jYS9HcmFwaGljc0xheWVyQ0EuY3BwP3Jldj0yODEyMzgjTDEwOTlcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBUaGlzIGZpeGVzIFdlYmtpdCdzIHRpbWluZyBidWdzLCBsaWtlIGFjY2VsZXJhdGVkIGFuaW1hdGlvbnMgZmFsbGluZ1xuICAgICAgICAgICAgICogb3V0IG9mIHN5bmMgd2l0aCBtYWluIHRocmVhZCBhbmltYXRpb25zIGFuZCBtYXNzaXZlIGRlbGF5cyBpbiBzdGFydGluZ1xuICAgICAgICAgICAgICogYWNjZWxlcmF0ZWQgYW5pbWF0aW9ucyBpbiBXS1dlYlZpZXcuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICghYWxsb3dXZWJraXRBY2NlbGVyYXRpb24pXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnBsYXliYWNrUmF0ZSA9IDEuMDAwMDAxO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB3ZSBjYW4ndCBhbmltYXRlIHRoZSB2YWx1ZSBuYXRpdmVseSB0aGVuIHdlIGNhbiBmYWxsYmFjayB0byB0aGUgbnVtYmVycy1vbmx5XG4gICAgICAgICAgICAgKiBwb2x5ZmlsbCBmb3IgdHJhbnNmb3Jtcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFuaW1hdGlvblBvbHlmaWxsICYmIHZhbHVlSXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgYW55IGtleWZyYW1lIGlzIGEgc3RyaW5nIChiZWNhdXNlIHdlIG1lYXN1cmVkIGl0IGZyb20gdGhlIERPTSksIHdlIG5lZWQgdG8gY29udmVydFxuICAgICAgICAgICAgICogaXQgaW50byBhIG51bWJlciBiZWZvcmUgcGFzc2luZyB0byB0aGUgQW5pbWF0aW9uIHBvbHlmaWxsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBrZXlmcmFtZXMgPSBrZXlmcmFtZXMubWFwKCh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSBrZXlmcmFtZSwgd2UgbmVlZCB0byBjcmVhdGUgYW4gaW5pdGlhbCBrZXlmcmFtZSBieSByZWFkaW5nXG4gICAgICAgICAgICAgKiB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIHRoZSBET00uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChrZXlmcmFtZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAga2V5ZnJhbWVzLnVuc2hpZnQocGFyc2VGbG9hdChyZWFkSW5pdGlhbFZhbHVlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25Qb2x5ZmlsbCgobGF0ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0KGVsZW1lbnQsIG5hbWUsIHRvVW5pdCA/IHRvVW5pdChsYXRlc3QpIDogbGF0ZXN0KTtcbiAgICAgICAgICAgIH0sIGtleWZyYW1lcywgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwgeyBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICBlYXNpbmcgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0ga2V5ZnJhbWVzW2tleWZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHN0eWxlLnNldChlbGVtZW50LCBuYW1lLCBkZWZpbml0aW9uICYmIGlzTnVtYmVyKHRhcmdldClcbiAgICAgICAgICAgICAgICA/IGRlZmluaXRpb24udG9EZWZhdWx0VW5pdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgOiB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlY29yZGluZykge1xuICAgICAgICAgICAgcmVjb3JkKGVsZW1lbnQsIGtleSwga2V5ZnJhbWVzLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgICAgICAgICAgIGVhc2luZyxcbiAgICAgICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgfSwgXCJtb3Rpb24tb25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIG1vdGlvblZhbHVlLnNldEFuaW1hdGlvbihhbmltYXRpb24pO1xuICAgICAgICBpZiAoYW5pbWF0aW9uICYmICFhdXRvcGxheSlcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGFuaW1hdGVTdHlsZSB9O1xuIiwiY29uc3QgZ2V0T3B0aW9ucyA9IChvcHRpb25zLCBrZXkpID0+IFxuLyoqXG4gKiBUT0RPOiBNYWtlIHRlc3QgZm9yIHRoaXNcbiAqIEFsd2F5cyByZXR1cm4gYSBuZXcgb2JqZWN0IG90aGVyd2lzZSBkZWxheSBpcyBvdmVyd3JpdHRlbiBieSByZXN1bHRzIG9mIHN0YWdnZXJcbiAqIGFuZCB0aGlzIHJlc3VsdHMgaW4gbm8gc3RhZ2dlclxuICovXG5vcHRpb25zW2tleV0gPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCBvcHRpb25zW2tleV0pIDogT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cbmV4cG9ydCB7IGdldE9wdGlvbnMgfTtcbiIsImZ1bmN0aW9uIHJlc29sdmVFbGVtZW50cyhlbGVtZW50cywgc2VsZWN0b3JDYWNoZSkge1xuICAgIHZhciBfYTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChzZWxlY3RvckNhY2hlKSB7XG4gICAgICAgICAgICAoX2EgPSBzZWxlY3RvckNhY2hlW2VsZW1lbnRzXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHNlbGVjdG9yQ2FjaGVbZWxlbWVudHNdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cykpO1xuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvckNhY2hlW2VsZW1lbnRzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIGVtcHR5IGFycmF5XG4gICAgICovXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudHMgfHwgW10pO1xufVxuXG5leHBvcnQgeyByZXNvbHZlRWxlbWVudHMgfTtcbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc0Z1bmN0aW9uIH0gZnJvbSAnQG1vdGlvbm9uZS91dGlscyc7XG5pbXBvcnQgeyBnZXRFYXNpbmdGdW5jdGlvbiB9IGZyb20gJ0Btb3Rpb25vbmUvYW5pbWF0aW9uJztcblxuZnVuY3Rpb24gc3RhZ2dlcihkdXJhdGlvbiA9IDAuMSwgeyBzdGFydCA9IDAsIGZyb20gPSAwLCBlYXNpbmcgfSA9IHt9KSB7XG4gICAgcmV0dXJuIChpLCB0b3RhbCkgPT4ge1xuICAgICAgICBjb25zdCBmcm9tSW5kZXggPSBpc051bWJlcihmcm9tKSA/IGZyb20gOiBnZXRGcm9tSW5kZXgoZnJvbSwgdG90YWwpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKGZyb21JbmRleCAtIGkpO1xuICAgICAgICBsZXQgZGVsYXkgPSBkdXJhdGlvbiAqIGRpc3RhbmNlO1xuICAgICAgICBpZiAoZWFzaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBtYXhEZWxheSA9IHRvdGFsICogZHVyYXRpb247XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdGdW5jdGlvbiA9IGdldEVhc2luZ0Z1bmN0aW9uKGVhc2luZyk7XG4gICAgICAgICAgICBkZWxheSA9IGVhc2luZ0Z1bmN0aW9uKGRlbGF5IC8gbWF4RGVsYXkpICogbWF4RGVsYXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgZGVsYXk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEZyb21JbmRleChmcm9tLCB0b3RhbCkge1xuICAgIGlmIChmcm9tID09PSBcImZpcnN0XCIpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSB0b3RhbCAtIDE7XG4gICAgICAgIHJldHVybiBmcm9tID09PSBcImxhc3RcIiA/IGxhc3RJbmRleCA6IGxhc3RJbmRleCAvIDI7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbihvcHRpb24sIGksIHRvdGFsKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob3B0aW9uKSA/IG9wdGlvbihpLCB0b3RhbCkgOiBvcHRpb247XG59XG5cbmV4cG9ydCB7IGdldEZyb21JbmRleCwgcmVzb2x2ZU9wdGlvbiwgc3RhZ2dlciB9O1xuIiwiaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAnaGV5LWxpc3Rlbic7XG5pbXBvcnQgeyBhbmltYXRlU3R5bGUgfSBmcm9tICcuL2FuaW1hdGUtc3R5bGUuZXMuanMnO1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gJy4vdXRpbHMvb3B0aW9ucy5lcy5qcyc7XG5pbXBvcnQgeyByZXNvbHZlRWxlbWVudHMgfSBmcm9tICcuLi91dGlscy9yZXNvbHZlLWVsZW1lbnRzLmVzLmpzJztcbmltcG9ydCB7IHdpdGhDb250cm9scyB9IGZyb20gJy4vdXRpbHMvY29udHJvbHMuZXMuanMnO1xuaW1wb3J0IHsgcmVzb2x2ZU9wdGlvbiB9IGZyb20gJy4uL3V0aWxzL3N0YWdnZXIuZXMuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRlKEFuaW1hdGVQb2x5ZmlsbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBhbmltYXRlKGVsZW1lbnRzLCBrZXlmcmFtZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBlbGVtZW50cyA9IHJlc29sdmVFbGVtZW50cyhlbGVtZW50cyk7XG4gICAgICAgIGNvbnN0IG51bUVsZW1lbnRzID0gZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBpbnZhcmlhbnQoQm9vbGVhbihudW1FbGVtZW50cyksIFwiTm8gdmFsaWQgZWxlbWVudCBwcm92aWRlZC5cIik7XG4gICAgICAgIGludmFyaWFudChCb29sZWFuKGtleWZyYW1lcyksIFwiTm8ga2V5ZnJhbWVzIGRlZmluZWQuXCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGFuZCBzdGFydCBuZXcgYW5pbWF0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uRmFjdG9yaWVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRWxlbWVudHM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ga2V5ZnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVPcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBrZXkpO1xuICAgICAgICAgICAgICAgIHZhbHVlT3B0aW9ucy5kZWxheSA9IHJlc29sdmVPcHRpb24odmFsdWVPcHRpb25zLmRlbGF5LCBpLCBudW1FbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gYW5pbWF0ZVN0eWxlKGVsZW1lbnQsIGtleSwga2V5ZnJhbWVzW2tleV0sIHZhbHVlT3B0aW9ucywgQW5pbWF0ZVBvbHlmaWxsKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25GYWN0b3JpZXMucHVzaChhbmltYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aXRoQ29udHJvbHMoYW5pbWF0aW9uRmFjdG9yaWVzLCBvcHRpb25zLCBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRPRE86XG4gICAgICAgICAqIElmIGVhc2luZyBpcyBzZXQgdG8gc3ByaW5nIG9yIGdsaWRlLCBkdXJhdGlvbiB3aWxsIGJlIGR5bmFtaWNhbGx5XG4gICAgICAgICAqIGdlbmVyYXRlZC4gSWRlYWxseSB3ZSB3b3VsZCBkeW5hbWljYWxseSBnZW5lcmF0ZSB0aGlzIGZyb21cbiAgICAgICAgICogYW5pbWF0aW9uLmVmZmVjdC5nZXRDb21wdXRlZFRpbWluZygpLmR1cmF0aW9uIGJ1dCB0aGlzIGlzbid0XG4gICAgICAgICAqIHN1cHBvcnRlZCBpbiBpT1MxMyBvciBvdXIgbnVtYmVyIHBvbHlmaWxsLiBQZXJoYXBzIGl0J3MgcG9zc2libGVcbiAgICAgICAgICogdG8gUHJveHkgYW5pbWF0aW9ucyByZXR1cm5lZCBmcm9tIGFuaW1hdGVTdHlsZSB0aGF0IGhhcyBkdXJhdGlvblxuICAgICAgICAgKiBhcyBhIGdldHRlci5cbiAgICAgICAgICovXG4gICAgICAgIG9wdGlvbnMuZHVyYXRpb24pO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUFuaW1hdGUgfTtcbiIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ0Btb3Rpb25vbmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZUFuaW1hdGUgfSBmcm9tICcuL2NyZWF0ZS1hbmltYXRlLmVzLmpzJztcblxuY29uc3QgYW5pbWF0ZSA9IGNyZWF0ZUFuaW1hdGUoQW5pbWF0aW9uKTtcblxuZXhwb3J0IHsgYW5pbWF0ZSB9O1xuIiwiaW1wb3J0IHsgYW5pbWF0ZSBhcyBhbmltYXRlJDEsIHdpdGhDb250cm9scyB9IGZyb20gJ0Btb3Rpb25vbmUvZG9tJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICdAbW90aW9ub25lL3V0aWxzJztcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ0Btb3Rpb25vbmUvYW5pbWF0aW9uJztcblxuZnVuY3Rpb24gYW5pbWF0ZVByb2dyZXNzKHRhcmdldCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHdpdGhDb250cm9scyhbXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGFyZ2V0LCBbMCwgMV0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgYW5pbWF0aW9uLmZpbmlzaGVkLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgICAgICB9LFxuICAgIF0sIG9wdGlvbnMsIG9wdGlvbnMuZHVyYXRpb24pO1xufVxuZnVuY3Rpb24gYW5pbWF0ZSh0YXJnZXQsIGtleWZyYW1lc09yT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBpc0Z1bmN0aW9uKHRhcmdldCkgPyBhbmltYXRlUHJvZ3Jlc3MgOiBhbmltYXRlJDE7XG4gICAgcmV0dXJuIGZhY3RvcnkodGFyZ2V0LCBrZXlmcmFtZXNPck9wdGlvbnMsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgeyBhbmltYXRlLCBhbmltYXRlUHJvZ3Jlc3MgfTtcbiIsImltcG9ydHtub3RoaW5nIGFzIHR9ZnJvbVwiLi4vbGl0LWh0bWwuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL2NvbnN0IGw9bD0+bnVsbCE9bD9sOnQ7ZXhwb3J0e2wgYXMgaWZEZWZpbmVkfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlmLWRlZmluZWQuanMubWFwXG4iLCJleHBvcnQqZnJvbVwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZi1kZWZpbmVkLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3NzLCBMaXRFbGVtZW50LCBodG1sLCBzdmcgYXMgc3ZnJDEgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQsIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy9jbGFzcy1tYXAuanMnO1xuaW1wb3J0IHsgVGhlbWVDdHJsLCBNb2RhbEN0cmwsIFJvdXRlckN0cmwsIENvbmZpZ0N0cmwsIEV4cGxvcmVyQ3RybCwgQ29yZVV0aWwsIE9wdGlvbnNDdHJsLCBUb2FzdEN0cmwsIEV2ZW50c0N0cmwgfSBmcm9tICdAd2FsbGV0Y29ubmVjdC9tb2RhbC1jb3JlJztcbmltcG9ydCB7IHN2ZyB9IGZyb20gJ2xpdC1odG1sJztcbmltcG9ydCB7IGFuaW1hdGUgfSBmcm9tICdtb3Rpb24nO1xuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qcyc7XG5pbXBvcnQgUVJDb2RlVXRpbCBmcm9tICdxcmNvZGUnO1xuXG52YXIgX19kZWZQcm9wJHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3AkeShvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xuZnVuY3Rpb24gdGhlbWVNb2RlVmFyaWFibGVzKCkge1xuICB2YXIgX2E7XG4gIGNvbnN0IHRoZW1lTW9kZSA9IChfYSA9IFRoZW1lQ3RybC5zdGF0ZS50aGVtZU1vZGUpICE9IG51bGwgPyBfYSA6IFwiZGFya1wiO1xuICBjb25zdCB0aGVtZU1vZGVQcmVzZXRzID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICBmb3JlZ3JvdW5kOiB7IDE6IGByZ2IoMjAsMjAsMjApYCwgMjogYHJnYigxMjEsMTM0LDEzNClgLCAzOiBgcmdiKDE1OCwxNjksMTY5KWAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHsgMTogYHJnYigyNTUsMjU1LDI1NSlgLCAyOiBgcmdiKDI0MSwyNDMsMjQzKWAsIDM6IGByZ2IoMjI4LDIzMSwyMzEpYCB9LFxuICAgICAgb3ZlcmxheTogXCJyZ2JhKDAsMCwwLDAuMSlcIlxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgZm9yZWdyb3VuZDogeyAxOiBgcmdiKDIyOCwyMzEsMjMxKWAsIDI6IGByZ2IoMTQ4LDE1OCwxNTgpYCwgMzogYHJnYigxMTAsMTE5LDExOSlgIH0sXG4gICAgICBiYWNrZ3JvdW5kOiB7IDE6IGByZ2IoMjAsMjAsMjApYCwgMjogYHJnYigzOSw0Miw0MilgLCAzOiBgcmdiKDU5LDY0LDY0KWAgfSxcbiAgICAgIG92ZXJsYXk6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjEpXCJcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRoZW1lTW9kZUNvbG9ycyA9IHRoZW1lTW9kZVByZXNldHNbdGhlbWVNb2RlXTtcbiAgcmV0dXJuIHtcbiAgICBcIi0td2NtLWNvbG9yLWZnLTFcIjogdGhlbWVNb2RlQ29sb3JzLmZvcmVncm91bmRbMV0sXG4gICAgXCItLXdjbS1jb2xvci1mZy0yXCI6IHRoZW1lTW9kZUNvbG9ycy5mb3JlZ3JvdW5kWzJdLFxuICAgIFwiLS13Y20tY29sb3ItZmctM1wiOiB0aGVtZU1vZGVDb2xvcnMuZm9yZWdyb3VuZFszXSxcbiAgICBcIi0td2NtLWNvbG9yLWJnLTFcIjogdGhlbWVNb2RlQ29sb3JzLmJhY2tncm91bmRbMV0sXG4gICAgXCItLXdjbS1jb2xvci1iZy0yXCI6IHRoZW1lTW9kZUNvbG9ycy5iYWNrZ3JvdW5kWzJdLFxuICAgIFwiLS13Y20tY29sb3ItYmctM1wiOiB0aGVtZU1vZGVDb2xvcnMuYmFja2dyb3VuZFszXSxcbiAgICBcIi0td2NtLWNvbG9yLW92ZXJsYXlcIjogdGhlbWVNb2RlQ29sb3JzLm92ZXJsYXlcbiAgfTtcbn1cbmZ1bmN0aW9uIHRoZW1lVmFyaWFibGVzUHJlc2V0cygpIHtcbiAgcmV0dXJuIHtcbiAgICBcIi0td2NtLWFjY2VudC1jb2xvclwiOiBcIiMzMzk2RkZcIixcbiAgICBcIi0td2NtLWFjY2VudC1maWxsLWNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiLS13Y20tei1pbmRleFwiOiBcIjg5XCIsXG4gICAgXCItLXdjbS1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzMzOTZGRlwiLFxuICAgIFwiLS13Y20tYmFja2dyb3VuZC1ib3JkZXItcmFkaXVzXCI6IFwiOHB4XCIsXG4gICAgXCItLXdjbS1jb250YWluZXItYm9yZGVyLXJhZGl1c1wiOiBcIjMwcHhcIixcbiAgICBcIi0td2NtLXdhbGxldC1pY29uLWJvcmRlci1yYWRpdXNcIjogXCIxNXB4XCIsXG4gICAgXCItLXdjbS13YWxsZXQtaWNvbi1sYXJnZS1ib3JkZXItcmFkaXVzXCI6IFwiMzBweFwiLFxuICAgIFwiLS13Y20td2FsbGV0LWljb24tc21hbGwtYm9yZGVyLXJhZGl1c1wiOiBcIjdweFwiLFxuICAgIFwiLS13Y20taW5wdXQtYm9yZGVyLXJhZGl1c1wiOiBcIjI4cHhcIixcbiAgICBcIi0td2NtLWJ1dHRvbi1ib3JkZXItcmFkaXVzXCI6IFwiMTBweFwiLFxuICAgIFwiLS13Y20tbm90aWZpY2F0aW9uLWJvcmRlci1yYWRpdXNcIjogXCIzNnB4XCIsXG4gICAgXCItLXdjbS1zZWNvbmRhcnktYnV0dG9uLWJvcmRlci1yYWRpdXNcIjogXCIyOHB4XCIsXG4gICAgXCItLXdjbS1pY29uLWJ1dHRvbi1ib3JkZXItcmFkaXVzXCI6IFwiNTAlXCIsXG4gICAgXCItLXdjbS1idXR0b24taG92ZXItaGlnaGxpZ2h0LWJvcmRlci1yYWRpdXNcIjogXCIxMHB4XCIsXG4gICAgXCItLXdjbS10ZXh0LWJpZy1ib2xkLXNpemVcIjogXCIyMHB4XCIsXG4gICAgXCItLXdjbS10ZXh0LWJpZy1ib2xkLXdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwiLS13Y20tdGV4dC1iaWctYm9sZC1saW5lLWhlaWdodFwiOiBcIjI0cHhcIixcbiAgICBcIi0td2NtLXRleHQtYmlnLWJvbGQtbGV0dGVyLXNwYWNpbmdcIjogXCItMC4wM2VtXCIsXG4gICAgXCItLXdjbS10ZXh0LWJpZy1ib2xkLXRleHQtdHJhbnNmb3JtXCI6IFwibm9uZVwiLFxuICAgIFwiLS13Y20tdGV4dC14c21hbGwtYm9sZC1zaXplXCI6IFwiMTBweFwiLFxuICAgIFwiLS13Y20tdGV4dC14c21hbGwtYm9sZC13ZWlnaHRcIjogXCI3MDBcIixcbiAgICBcIi0td2NtLXRleHQteHNtYWxsLWJvbGQtbGluZS1oZWlnaHRcIjogXCIxMnB4XCIsXG4gICAgXCItLXdjbS10ZXh0LXhzbWFsbC1ib2xkLWxldHRlci1zcGFjaW5nXCI6IFwiMC4wMmVtXCIsXG4gICAgXCItLXdjbS10ZXh0LXhzbWFsbC1ib2xkLXRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCIsXG4gICAgXCItLXdjbS10ZXh0LXhzbWFsbC1yZWd1bGFyLXNpemVcIjogXCIxMnB4XCIsXG4gICAgXCItLXdjbS10ZXh0LXhzbWFsbC1yZWd1bGFyLXdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwiLS13Y20tdGV4dC14c21hbGwtcmVndWxhci1saW5lLWhlaWdodFwiOiBcIjE0cHhcIixcbiAgICBcIi0td2NtLXRleHQteHNtYWxsLXJlZ3VsYXItbGV0dGVyLXNwYWNpbmdcIjogXCItMC4wM2VtXCIsXG4gICAgXCItLXdjbS10ZXh0LXhzbWFsbC1yZWd1bGFyLXRleHQtdHJhbnNmb3JtXCI6IFwibm9uZVwiLFxuICAgIFwiLS13Y20tdGV4dC1zbWFsbC10aGluLXNpemVcIjogXCIxNHB4XCIsXG4gICAgXCItLXdjbS10ZXh0LXNtYWxsLXRoaW4td2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCItLXdjbS10ZXh0LXNtYWxsLXRoaW4tbGluZS1oZWlnaHRcIjogXCIxNnB4XCIsXG4gICAgXCItLXdjbS10ZXh0LXNtYWxsLXRoaW4tbGV0dGVyLXNwYWNpbmdcIjogXCItMC4wM2VtXCIsXG4gICAgXCItLXdjbS10ZXh0LXNtYWxsLXRoaW4tdGV4dC10cmFuc2Zvcm1cIjogXCJub25lXCIsXG4gICAgXCItLXdjbS10ZXh0LXNtYWxsLXJlZ3VsYXItc2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcIi0td2NtLXRleHQtc21hbGwtcmVndWxhci13ZWlnaHRcIjogXCI2MDBcIixcbiAgICBcIi0td2NtLXRleHQtc21hbGwtcmVndWxhci1saW5lLWhlaWdodFwiOiBcIjE2cHhcIixcbiAgICBcIi0td2NtLXRleHQtc21hbGwtcmVndWxhci1sZXR0ZXItc3BhY2luZ1wiOiBcIi0wLjAzZW1cIixcbiAgICBcIi0td2NtLXRleHQtc21hbGwtcmVndWxhci10ZXh0LXRyYW5zZm9ybVwiOiBcIm5vbmVcIixcbiAgICBcIi0td2NtLXRleHQtbWVkaXVtLXJlZ3VsYXItc2l6ZVwiOiBcIjE2cHhcIixcbiAgICBcIi0td2NtLXRleHQtbWVkaXVtLXJlZ3VsYXItd2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCItLXdjbS10ZXh0LW1lZGl1bS1yZWd1bGFyLWxpbmUtaGVpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwiLS13Y20tdGV4dC1tZWRpdW0tcmVndWxhci1sZXR0ZXItc3BhY2luZ1wiOiBcIi0wLjAzZW1cIixcbiAgICBcIi0td2NtLXRleHQtbWVkaXVtLXJlZ3VsYXItdGV4dC10cmFuc2Zvcm1cIjogXCJub25lXCIsXG4gICAgXCItLXdjbS1mb250LWZhbWlseVwiOiBcIi1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIFVidW50dSwgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZlwiLFxuICAgIFwiLS13Y20tZm9udC1mZWF0dXJlLXNldHRpbmdzXCI6IGAndG51bScgb24sICdsbnVtJyBvbiwgJ2Nhc2UnIG9uYCxcbiAgICBcIi0td2NtLXN1Y2Nlc3MtY29sb3JcIjogXCJyZ2IoMzgsMTgxLDk4KVwiLFxuICAgIFwiLS13Y20tZXJyb3ItY29sb3JcIjogXCJyZ2IoMjQyLCA5MCwgMTAzKVwiLFxuICAgIFwiLS13Y20tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gICAgXCItLXdjbS1vdmVybGF5LWJhY2tkcm9wLWZpbHRlclwiOiBcIm5vbmVcIlxuICB9O1xufVxuY29uc3QgVGhlbWVVdGlsID0ge1xuICBnZXRQcmVzZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoZW1lVmFyaWFibGVzUHJlc2V0cygpW2tleV07XG4gIH0sXG4gIHNldFRoZW1lKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIik7XG4gICAgY29uc3QgeyB0aGVtZVZhcmlhYmxlcyB9ID0gVGhlbWVDdHJsLnN0YXRlO1xuICAgIGlmIChyb290KSB7XG4gICAgICBjb25zdCB2YXJpYWJsZXMgPSBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7fSwgdGhlbWVNb2RlVmFyaWFibGVzKCkpLCB0aGVtZVZhcmlhYmxlc1ByZXNldHMoKSksIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHZhcmlhYmxlcykuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4gcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbCkpO1xuICAgIH1cbiAgfSxcbiAgZ2xvYmFsQ3NzOiBjc3NgKiw6OmFmdGVyLDo6YmVmb3Jle21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1zdHlsZTpub3JtYWw7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVTcGVlZDstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59YnV0dG9ue2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfUBtZWRpYSAoaG92ZXI6aG92ZXIpIGFuZCAocG9pbnRlcjpmaW5lKXtidXR0b246YWN0aXZle3RyYW5zaXRpb246YWxsIC4xcyBlYXNlO3RyYW5zZm9ybTpzY2FsZSguOTMpfX1idXR0b246OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yLC4ycyBlYXNlfWJ1dHRvbjpkaXNhYmxlZHtjdXJzb3I6bm90LWFsbG93ZWR9YnV0dG9uIHN2ZyxidXR0b24gd2NtLXRleHR7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfWlucHV0e2JvcmRlcjpub25lO291dGxpbmU6MDthcHBlYXJhbmNlOm5vbmV9aW1ne2Rpc3BsYXk6YmxvY2t9OjpzZWxlY3Rpb257Y29sb3I6dmFyKC0td2NtLWFjY2VudC1maWxsLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLXdjbS1hY2NlbnQtY29sb3IpfWBcbn07XG5cbmNvbnN0IHN0eWxlcyR0ID0gY3NzYGJ1dHRvbntib3JkZXItcmFkaXVzOnZhcigtLXdjbS1zZWNvbmRhcnktYnV0dG9uLWJvcmRlci1yYWRpdXMpO2hlaWdodDoyOHB4O3BhZGRpbmc6MCAxMHB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWFjY2VudC1jb2xvcil9YnV0dG9uIHBhdGh7ZmlsbDp2YXIoLS13Y20tYWNjZW50LWZpbGwtY29sb3IpfWJ1dHRvbjo6YWZ0ZXJ7Ym9yZGVyLXJhZGl1czppbmhlcml0O2JvcmRlcjoxcHggc29saWQgdmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfWJ1dHRvbjpkaXNhYmxlZDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ud2NtLWljb24tbGVmdCBzdmd7bWFyZ2luLXJpZ2h0OjVweH0ud2NtLWljb24tcmlnaHQgc3Zne21hcmdpbi1sZWZ0OjVweH1idXR0b246YWN0aXZlOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1vdmVybGF5KX0ud2NtLWdob3N0LC53Y20tZ2hvc3Q6YWN0aXZlOjphZnRlciwud2NtLW91dGxpbmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ud2NtLWdob3N0OmFjdGl2ZXtvcGFjaXR5Oi41fUBtZWRpYShob3Zlcjpob3Zlcil7YnV0dG9uOmhvdmVyOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1vdmVybGF5KX0ud2NtLWdob3N0OmhvdmVyOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS53Y20tZ2hvc3Q6aG92ZXJ7b3BhY2l0eTouNX19YnV0dG9uOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLWJnLTMpO3BvaW50ZXItZXZlbnRzOm5vbmV9LndjbS1naG9zdDo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS53Y20tZ2hvc3QgcGF0aHtmaWxsOnZhcigtLXdjbS1jb2xvci1mZy0yKX0ud2NtLW91dGxpbmUgcGF0aHtmaWxsOnZhcigtLXdjbS1hY2NlbnQtY29sb3IpfS53Y20tb3V0bGluZTpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O29wYWNpdHk6LjV9YDtcblxudmFyIF9fZGVmUHJvcCR4ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkeCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJHggPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkeCh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkeCh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtQnV0dG9uID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pY29uTGVmdCA9IHZvaWQgMDtcbiAgICB0aGlzLmljb25SaWdodCA9IHZvaWQgMDtcbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiBudWxsO1xuICAgIHRoaXMudmFyaWFudCA9IFwiZGVmYXVsdFwiO1xuICB9XG4gIC8vIC0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJ3Y20taWNvbi1sZWZ0XCI6IHRoaXMuaWNvbkxlZnQgIT09IHZvaWQgMCxcbiAgICAgIFwid2NtLWljb24tcmlnaHRcIjogdGhpcy5pY29uUmlnaHQgIT09IHZvaWQgMCxcbiAgICAgIFwid2NtLWdob3N0XCI6IHRoaXMudmFyaWFudCA9PT0gXCJnaG9zdFwiLFxuICAgICAgXCJ3Y20tb3V0bGluZVwiOiB0aGlzLnZhcmlhbnQgPT09IFwib3V0bGluZVwiXG4gICAgfTtcbiAgICBsZXQgdGV4dENvbG9yID0gXCJpbnZlcnNlXCI7XG4gICAgaWYgKHRoaXMudmFyaWFudCA9PT0gXCJnaG9zdFwiKSB7XG4gICAgICB0ZXh0Q29sb3IgPSBcInNlY29uZGFyeVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy52YXJpYW50ID09PSBcIm91dGxpbmVcIikge1xuICAgICAgdGV4dENvbG9yID0gXCJhY2NlbnRcIjtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGJ1dHRvbiBjbGFzcz1cIiR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCIgP2Rpc2FibGVkPVwiJHt0aGlzLmRpc2FibGVkfVwiIEBjbGljaz1cIiR7dGhpcy5vbkNsaWNrfVwiPiR7dGhpcy5pY29uTGVmdH08d2NtLXRleHQgdmFyaWFudD1cInNtYWxsLXJlZ3VsYXJcIiBjb2xvcj1cIiR7dGV4dENvbG9yfVwiPjxzbG90Pjwvc2xvdD48L3djbS10ZXh0PiR7dGhpcy5pY29uUmlnaHR9PC9idXR0b24+YDtcbiAgfVxufTtcbldjbUJ1dHRvbi5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJHRdO1xuX19kZWNvcmF0ZUNsYXNzJHgoW1xuICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFdjbUJ1dHRvbi5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkeChbXG4gIHByb3BlcnR5KClcbl0sIFdjbUJ1dHRvbi5wcm90b3R5cGUsIFwiaWNvbkxlZnRcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkeChbXG4gIHByb3BlcnR5KClcbl0sIFdjbUJ1dHRvbi5wcm90b3R5cGUsIFwiaWNvblJpZ2h0XCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJHgoW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21CdXR0b24ucHJvdG90eXBlLCBcIm9uQ2xpY2tcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkeChbXG4gIHByb3BlcnR5KClcbl0sIFdjbUJ1dHRvbi5wcm90b3R5cGUsIFwidmFyaWFudFwiLCAyKTtcbldjbUJ1dHRvbiA9IF9fZGVjb3JhdGVDbGFzcyR4KFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1idXR0b25cIilcbl0sIFdjbUJ1dHRvbik7XG5cbmNvbnN0IHN0eWxlcyRzID0gY3NzYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfWJ1dHRvbntwYWRkaW5nOjAgMTVweCAxcHg7aGVpZ2h0OjQwcHg7Ym9yZGVyLXJhZGl1czp2YXIoLS13Y20tYnV0dG9uLWJvcmRlci1yYWRpdXMpO2NvbG9yOnZhcigtLXdjbS1hY2NlbnQtZmlsbC1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS13Y20tYWNjZW50LWNvbG9yKX1idXR0b246OmFmdGVye2NvbnRlbnQ6Jyc7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOmluaGVyaXQ7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlO2JvcmRlcjoxcHggc29saWQgdmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfWJ1dHRvbjphY3RpdmU6OmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfWJ1dHRvbjpkaXNhYmxlZHtwYWRkaW5nLWJvdHRvbTowO2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLWJnLTMpO2NvbG9yOnZhcigtLXdjbS1jb2xvci1mZy0zKX0ud2NtLXNlY29uZGFyeXtjb2xvcjp2YXIoLS13Y20tYWNjZW50LWNvbG9yKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS53Y20tc2Vjb25kYXJ5OjphZnRlcntkaXNwbGF5Om5vbmV9QG1lZGlhKGhvdmVyOmhvdmVyKXtidXR0b246aG92ZXI6OmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfX1gO1xuXG52YXIgX19kZWZQcm9wJHcgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyR3ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkdyA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyR3KHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCR3KHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21CdXR0b25CaWcgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhcmlhbnQgPSBcInByaW1hcnlcIjtcbiAgfVxuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFwid2NtLXNlY29uZGFyeVwiOiB0aGlzLnZhcmlhbnQgPT09IFwic2Vjb25kYXJ5XCJcbiAgICB9O1xuICAgIHJldHVybiBodG1sYDxidXR0b24gP2Rpc2FibGVkPVwiJHt0aGlzLmRpc2FibGVkfVwiIGNsYXNzPVwiJHtjbGFzc01hcChjbGFzc2VzKX1cIj48c2xvdD48L3Nsb3Q+PC9idXR0b24+YDtcbiAgfVxufTtcbldjbUJ1dHRvbkJpZy5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJHNdO1xuX19kZWNvcmF0ZUNsYXNzJHcoW1xuICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFdjbUJ1dHRvbkJpZy5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkdyhbXG4gIHByb3BlcnR5KClcbl0sIFdjbUJ1dHRvbkJpZy5wcm90b3R5cGUsIFwidmFyaWFudFwiLCAyKTtcbldjbUJ1dHRvbkJpZyA9IF9fZGVjb3JhdGVDbGFzcyR3KFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1idXR0b24tYmlnXCIpXG5dLCBXY21CdXR0b25CaWcpO1xuXG5jb25zdCBzdHlsZXMkciA9IGNzc2A6aG9zdHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1iZy0yKTtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS13Y20tY29sb3ItYmctMyl9ZGl2e3BhZGRpbmc6MTBweCAyMHB4O2Rpc3BsYXk6aW5oZXJpdDtmbGV4LWRpcmVjdGlvbjppbmhlcml0O2FsaWduLWl0ZW1zOmluaGVyaXQ7d2lkdGg6aW5oZXJpdDtqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdH1gO1xuXG52YXIgX19kZWZQcm9wJHYgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyR2ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkdiA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyR2KHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCR2KHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21JbmZvRm9vdGVyID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2PmA7XG4gIH1cbn07XG5XY21JbmZvRm9vdGVyLnN0eWxlcyA9IFtUaGVtZVV0aWwuZ2xvYmFsQ3NzLCBzdHlsZXMkcl07XG5XY21JbmZvRm9vdGVyID0gX19kZWNvcmF0ZUNsYXNzJHYoW1xuICBjdXN0b21FbGVtZW50KFwid2NtLWluZm8tZm9vdGVyXCIpXG5dLCBXY21JbmZvRm9vdGVyKTtcblxuY29uc3QgU3ZnVXRpbCA9IHtcbiAgQ1JPU1NfSUNPTjogc3ZnYDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiPjxwYXRoIGQ9XCJNOS45NCAxMUEuNzUuNzUgMCAxIDAgMTEgOS45NEw3LjQxNCA2LjM1M2EuNS41IDAgMCAxIDAtLjcwOEwxMSAyLjA2MUEuNzUuNzUgMCAxIDAgOS45NCAxTDYuMzUzIDQuNTg2YS41LjUgMCAwIDEtLjcwOCAwTDIuMDYxIDFBLjc1Ljc1IDAgMCAwIDEgMi4wNmwzLjU4NiAzLjU4NmEuNS41IDAgMCAxIDAgLjcwOEwxIDkuOTM5QS43NS43NSAwIDEgMCAyLjA2IDExbDMuNTg2LTMuNTg2YS41LjUgMCAwIDEgLjcwOCAwTDkuOTM5IDExWlwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPmAsXG4gIFdBTExFVF9DT05ORUNUX0xPR086IHN2Z2A8c3ZnIHdpZHRoPVwiMTc4XCIgaGVpZ2h0PVwiMjlcIiB2aWV3Qm94PVwiMCAwIDE3OCAyOVwiIGlkPVwid2NtLXdjLWxvZ29cIj48cGF0aCBkPVwiTTEwLjY4MyA3LjkyNmM1LjI4NC01LjE3IDEzLjg1LTUuMTcgMTkuMTM0IDBsLjYzNi42MjNhLjY1Mi42NTIgMCAwIDEgMCAuOTM2bC0yLjE3NiAyLjEyOWEuMzQzLjM0MyAwIDAgMS0uNDc4IDBsLS44NzUtLjg1N2MtMy42ODYtMy42MDctOS42NjItMy42MDctMTMuMzQ4IDBsLS45MzcuOTE4YS4zNDMuMzQzIDAgMCAxLS40NzkgMGwtMi4xNzUtMi4xM2EuNjUyLjY1MiAwIDAgMSAwLS45MzZsLjY5OC0uNjgzWm0yMy42MzMgNC40MDMgMS45MzUgMS44OTVhLjY1Mi42NTIgMCAwIDEgMCAuOTM2bC04LjczIDguNTQzYS42ODcuNjg3IDAgMCAxLS45NTYgMEwyMC4zNyAxNy42NGEuMTcyLjE3MiAwIDAgMC0uMjM5IDBsLTYuMTk1IDYuMDYzYS42ODcuNjg3IDAgMCAxLS45NTcgMGwtOC43My04LjU0M2EuNjUyLjY1MiAwIDAgMSAwLS45MzZsMS45MzYtMS44OTVhLjY4Ny42ODcgMCAwIDEgLjk1NyAwbDYuMTk2IDYuMDY0YS4xNzIuMTcyIDAgMCAwIC4yMzkgMGw2LjE5NS02LjA2NGEuNjg3LjY4NyAwIDAgMSAuOTU3IDBsNi4xOTYgNi4wNjRhLjE3Mi4xNzIgMCAwIDAgLjI0IDBsNi4xOTUtNi4wNjRhLjY4Ny42ODcgMCAwIDEgLjk1NiAwWk00OC4wOTMgMjAuOTQ4bDIuMzM4LTkuMzU1Yy4xMzktLjUxNS4yNTgtMS4wNy40MTYtMS45NDIuMTIuODcyLjI1OCAxLjQyNy4zNTcgMS45NDJsMi4wMjIgOS4zNTVoNC4xODFsMy41MjgtMTMuODc0aC0zLjIxbC0xLjk0MyA4LjUyM2EyNC44MjUgMjQuODI1IDAgMCAwLS40NTYgMi40NTdjLS4xNTgtLjkzMS0uMzE3LTEuNjI1LS40OTUtMi40MzhsLTEuODgzLTguNTQyaC00LjIwMWwtMi4wNDIgOC41NDJhNDEuMjA0IDQxLjIwNCAwIDAgMC0uNDc1IDIuNDM4IDQxLjIwOCA0MS4yMDggMCAwIDAtLjQ3Ni0yLjQzOGwtMS45MDMtOC41NDJoLTMuMzQ5bDMuNTA4IDEzLjg3NGg0LjA4M1pNNjMuMzMgMjEuMzA0YzEuNTg1IDAgMi41OTYtLjY1NCAzLjExLTEuNjA1LS4wNTkuMjk3LS4wNzguNTk1LS4wNzguODkydi4zNTdoMi42NTVWMTUuMjJjMC0yLjczNS0xLjI0OC00LjMyLTQuMy00LjMyLTIuNjM2IDAtNC4zNiAxLjQ2Ni00LjUyIDMuNDg3aDIuOTE0Yy4xLS44OTEuNzM0LTEuNDI2IDEuNzA1LTEuNDI2LjkxMSAwIDEuNDA3LjUxNSAxLjQwNyAxLjExIDAgLjQzNS0uMjU4LjY5My0xLjAzLjc5MmwtMS4zODguMTU5Yy0yLjA2MS4yNTctMy44MjUgMS4wMS0zLjgyNSAzLjE5IDAgMS45ODIgMS42NDUgMy4wOTIgMy4zNSAzLjA5MlptLjg5MS0yLjA0MWMtLjc3MyAwLTEuMzQ4LS40MzYtMS4zNDgtMS4xOSAwLS43MzMuNjU1LTEuMDkgMS42NDUtMS4yNjhsLjY3NC0uMTE5Yy41NzUtLjExOC44OTItLjIxOCAxLjA5LS4zOTZ2LjkxMmMwIDEuMjI4LS44OTIgMi4wNi0yLjA2IDIuMDZaTTcwLjM5OCA3LjA3NHYxMy44NzRoMi44NzRWNy4wNzRoLTIuODc0Wk03NC45MzQgNy4wNzR2MTMuODc0aDIuODc0VjcuMDc0aC0yLjg3NFpNODQuMDggMjEuMzA0YzIuNzM1IDAgNC41LTEuNTQ2IDQuNjk3LTMuNTY3aC0yLjg5M2MtLjEzOS44OTItLjg5MiAxLjM4Ny0xLjgwNCAxLjM4Ny0xLjIyOCAwLTIuMTItLjk5LTIuMTQtMi4zNThoNi44OTd2LS41NTVjMC0zLjIxLTEuNzY0LTUuMzEyLTQuODE2LTUuMzEyLTIuOTMzIDAtNC45OTQgMi4wNjItNC45OTQgNS4xNzMgMCAzLjM3IDIuMTIgNS4yMzIgNS4wNTMgNS4yMzJabS0yLjE2LTYuNDIxYy4xMTktMS4xMS45MzItMS45MjIgMi4wODEtMS45MjIgMS4xMSAwIDEuODgzLjc3MiAxLjkwMyAxLjkyMkg4MS45MlpNOTQuOTIgMjEuMTQ2Yy42MzMgMCAxLjI0OC0uMSAxLjUyNS0uMTc5di0yLjE4Yy0uMjE4LjA0LS40NzUuMDYtLjY5My4wNi0xLjA1IDAtMS40MjctLjU5NS0xLjQyNy0xLjU2NnYtMy44MDVoMi4zMzh2LTIuMjRoLTIuMzM4VjcuNzg4SDkxLjQ3djMuNDQ4SDg5LjM3djIuMjRoMi4xdjQuMjAxYzAgMi4zIDEuMTUgMy40NjkgMy40NSAzLjQ2OVpNMTA0LjYyIDIxLjMwNGMzLjkyNCAwIDYuMzAyLTIuMjk5IDYuNTk5LTUuNjA4aC0zLjExMWMtLjIzOCAxLjgwMy0xLjUwNiAzLjAzMi0zLjM2OSAzLjAzMi0yLjIgMC0zLjc0Ni0xLjc4NC0zLjc0Ni00Ljc5NiAwLTIuOTUzIDEuNjA1LTQuNjM4IDMuODA1LTQuNjM4IDEuODgzIDAgMi45NTMgMS4xNSAzLjE3MSAyLjgzNGgzLjE5MWMtLjMxNy0zLjQ0OC0yLjg1NC01LjQxLTYuMzQyLTUuNDEtMy45ODQgMC03LjAzNiAyLjY5NS03LjAzNiA3LjIxNCAwIDQuNjc3IDIuNjc2IDcuMzcyIDYuODM4IDcuMzcyWk0xMTcuNDQ5IDIxLjMwNGMyLjk5MyAwIDUuMTE0LTEuODgyIDUuMTE0LTUuMTcyIDAtMy4yMy0yLjEyMS01LjIzMy01LjExNC01LjIzMy0yLjk3MiAwLTUuMDkzIDIuMDAyLTUuMDkzIDUuMjMzIDAgMy4yOSAyLjEwMSA1LjE3MiA1LjA5MyA1LjE3MlptMC0yLjIyYy0xLjMyNyAwLTIuMTgtMS4wOS0yLjE4LTIuOTUyIDAtMS45MDMuODkyLTIuOTczIDIuMTgtMi45NzMgMS4zMDggMCAyLjIgMS4wNyAyLjIgMi45NzMgMCAxLjg2Mi0uODcyIDIuOTUzLTIuMiAyLjk1M1pNMTI2LjU2OSAyMC45NDh2LTUuNjg5YzAtMS4yMDguNzUzLTIuMSAxLjgyMy0yLjEgMS4wMTEgMCAxLjYwNi43NzMgMS42MDYgMi4wNnY1LjcyOWgyLjg3M3YtNi4xNDRjMC0yLjMzOS0xLjIyOS0zLjkwNS0zLjQyOC0zLjkwNS0xLjUyNiAwLTIuNDU4LjczNC0yLjk1MyAxLjYwNmE1LjMxIDUuMzEgMCAwIDAgLjA3OS0uODkydi0uMzc3aC0yLjg3NHY5LjcxMmgyLjg3NFpNMTM3LjQ2NCAyMC45NDh2LTUuNjg5YzAtMS4yMDguNzUzLTIuMSAxLjgyMy0yLjEgMS4wMTEgMCAxLjYwNi43NzMgMS42MDYgMi4wNnY1LjcyOWgyLjg3M3YtNi4xNDRjMC0yLjMzOS0xLjIyOC0zLjkwNS0zLjQyOC0zLjkwNS0xLjUyNiAwLTIuNDU4LjczNC0yLjk1MyAxLjYwNmE1LjMxIDUuMzEgMCAwIDAgLjA3OS0uODkydi0uMzc3aC0yLjg3NHY5LjcxMmgyLjg3NFpNMTQ5Ljk0OSAyMS4zMDRjMi43MzUgMCA0LjQ5OS0xLjU0NiA0LjY5Ny0zLjU2N2gtMi44OTNjLS4xMzkuODkyLS44OTIgMS4zODctMS44MDQgMS4zODctMS4yMjggMC0yLjEyLS45OS0yLjE0LTIuMzU4aDYuODk3di0uNTU1YzAtMy4yMS0xLjc2NC01LjMxMi00LjgxNi01LjMxMi0yLjkzMyAwLTQuOTk0IDIuMDYyLTQuOTk0IDUuMTczIDAgMy4zNyAyLjEyIDUuMjMyIDUuMDUzIDUuMjMyWm0tMi4xNi02LjQyMWMuMTE5LTEuMTEuOTMyLTEuOTIyIDIuMDgxLTEuOTIyIDEuMTEgMCAxLjg4My43NzIgMS45MDMgMS45MjJoLTMuOTg0Wk0xNjAuODc2IDIxLjMwNGMzLjAxMyAwIDQuNjU4LTEuNjQ1IDQuOTc1LTQuMjAxaC0yLjg3NGMtLjA5OSAxLjA3LS43MTMgMS45ODItMi4wMDEgMS45ODItMS4zMDkgMC0yLjItMS4yMS0yLjItMi45OTMgMC0xLjk0MiAxLjAzLTIuOTMzIDIuMjU5LTIuOTMzIDEuMjA5IDAgMS44MDMuODcyIDEuODgzIDEuODgyaDIuODczYy0uMjE4LTIuMzU4LTEuODIzLTQuMTQyLTQuNzc2LTQuMTQyLTIuODc0IDAtNS4xNTMgMS45MDMtNS4xNTMgNS4xOTMgMCAzLjI1IDEuOTIzIDUuMjEyIDUuMDE0IDUuMjEyWk0xNzIuMDY3IDIxLjE0NmMuNjM0IDAgMS4yNDgtLjEgMS41MjYtLjE3OXYtMi4xOGMtLjIxOC4wNC0uNDc2LjA2LS42OTQuMDYtMS4wNSAwLTEuNDI3LS41OTUtMS40MjctMS41NjZ2LTMuODA1aDIuMzM5di0yLjI0aC0yLjMzOVY3Ljc4OGgtMi44NTR2My40NDhoLTIuMXYyLjI0aDIuMXY0LjIwMWMwIDIuMyAxLjE1IDMuNDY5IDMuNDQ5IDMuNDY5WlwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPmAsXG4gIFdBTExFVF9DT05ORUNUX0lDT046IHN2Z2A8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjggMjBcIj48ZyBjbGlwLXBhdGg9XCJ1cmwoI2EpXCI+PHBhdGggZD1cIk03LjM4NiA2LjQ4MmMzLjY1My0zLjU3NiA5LjU3NS0zLjU3NiAxMy4yMjggMGwuNDQuNDNhLjQ1MS40NTEgMCAwIDEgMCAuNjQ4TDE5LjU1IDkuMDMzYS4yMzcuMjM3IDAgMCAxLS4zMyAwbC0uNjA2LS41OTJjLTIuNTQ4LTIuNDk2LTYuNjgtMi40OTYtOS4yMjggMGwtLjY0OC42MzRhLjIzNy4yMzcgMCAwIDEtLjMzIDBMNi45MDIgNy42MDJhLjQ1MS40NTEgMCAwIDEgMC0uNjQ3bC40ODMtLjQ3M1ptMTYuMzM4IDMuMDQ2IDEuMzM5IDEuMzFhLjQ1MS40NTEgMCAwIDEgMCAuNjQ4bC02LjAzNSA1LjkwOWEuNDc1LjQ3NSAwIDAgMS0uNjYyIDBMMTQuMDgzIDEzLjJhLjExOS4xMTkgMCAwIDAtLjE2NiAwbC00LjI4MyA0LjE5NGEuNDc1LjQ3NSAwIDAgMS0uNjYyIDBsLTYuMDM1LTUuOTFhLjQ1MS40NTEgMCAwIDEgMC0uNjQ3bDEuMzM4LTEuMzFhLjQ3NS40NzUgMCAwIDEgLjY2MiAwbDQuMjgzIDQuMTk0Yy4wNDYuMDQ0LjEyLjA0NC4xNjYgMGw0LjI4My00LjE5NGEuNDc1LjQ3NSAwIDAgMSAuNjYyIDBsNC4yODMgNC4xOTRjLjA0Ni4wNDQuMTIuMDQ0LjE2NiAwbDQuMjgzLTQuMTk0YS40NzUuNDc1IDAgMCAxIC42NjIgMFpcIiBmaWxsPVwiIzAwMDAwMFwiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPVwiYVwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0wIDBoMjh2MjBIMHpcIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+YCxcbiAgV0FMTEVUX0NPTk5FQ1RfSUNPTl9DT0xPUkVEOiBzdmdgPHN2ZyB3aWR0aD1cIjk2XCIgaGVpZ2h0PVwiOTZcIiBmaWxsPVwibm9uZVwiPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0yNS4zMjIgMzMuNTk3YzEyLjUyNS0xMi4yNjMgMzIuODMtMTIuMjYzIDQ1LjM1NSAwbDEuNTA3IDEuNDc2YTEuNTQ3IDEuNTQ3IDAgMCAxIDAgMi4yMmwtNS4xNTYgNS4wNDhhLjgxNC44MTQgMCAwIDEtMS4xMzQgMGwtMi4wNzQtMi4wM2MtOC43MzctOC41NTUtMjIuOTAzLTguNTU1LTMxLjY0IDBsLTIuMjIyIDIuMTc1YS44MTQuODE0IDAgMCAxLTEuMTM0IDBsLTUuMTU2LTUuMDQ5YTEuNTQ3IDEuNTQ3IDAgMCAxIDAtMi4yMmwxLjY1NC0xLjYyWm01Ni4wMTkgMTAuNDQgNC41ODkgNC40OTRhMS41NDcgMS41NDcgMCAwIDEgMCAyLjIybC0yMC42OTMgMjAuMjZhMS42MjggMS42MjggMCAwIDEtMi4yNjcgMEw0OC4yODMgNTYuNjMyYS40MDcuNDA3IDAgMCAwLS41NjcgMEwzMy4wMyA3MS4wMTJhMS42MjggMS42MjggMCAwIDEtMi4yNjggMEwxMC4wNyA1MC43NWExLjU0NyAxLjU0NyAwIDAgMSAwLTIuMjJsNC41OS00LjQ5NGExLjYyOCAxLjYyOCAwIDAgMSAyLjI2NyAwbDE0LjY4NyAxNC4zOGMuMTU2LjE1My40MS4xNTMuNTY3IDBsMTQuNjg1LTE0LjM4YTEuNjI4IDEuNjI4IDAgMCAxIDIuMjY4IDBsMTQuNjg3IDE0LjM4Yy4xNTYuMTUzLjQxLjE1My41NjcgMGwxNC42ODYtMTQuMzhhMS42MjggMS42MjggMCAwIDEgMi4yNjggMFpcIi8+PHBhdGggc3Ryb2tlPVwiIzAwMFwiIGQ9XCJNMjUuNjcyIDMzLjk1NGMxMi4zMy0xMi4wNzIgMzIuMzI1LTEyLjA3MiA0NC42NTUgMGwxLjUwOCAxLjQ3NmExLjA0NyAxLjA0NyAwIDAgMSAwIDEuNTA2bC01LjE1NyA1LjA0OGEuMzE0LjMxNCAwIDAgMS0uNDM0IDBsLTIuMDc0LTIuMDNjLTguOTMyLTguNzQ2LTIzLjQwOS04Ljc0Ni0zMi4zNCAwbC0yLjIyMiAyLjE3NGEuMzE0LjMxNCAwIDAgMS0uNDM0IDBsLTUuMTU3LTUuMDQ4YTEuMDQ3IDEuMDQ3IDAgMCAxIDAtMS41MDZsMS42NTUtMS42MlptNTUuMzE5IDEwLjQ0IDQuNTkgNC40OTRhMS4wNDcgMS4wNDcgMCAwIDEgMCAxLjUwNmwtMjAuNjk0IDIwLjI2YTEuMTI4IDEuMTI4IDAgMCAxLTEuNTY4IDBsLTE0LjY4Ni0xNC4zOGEuOTA3LjkwNyAwIDAgMC0xLjI2NyAwTDMyLjY4IDcwLjY1NWExLjEyOCAxLjEyOCAwIDAgMS0xLjU2OCAwTDEwLjQyIDUwLjM5NGExLjA0NyAxLjA0NyAwIDAgMSAwLTEuNTA2bDQuNTktNC40OTNhMS4xMjggMS4xMjggMCAwIDEgMS41NjcgMGwxNC42ODcgMTQuMzc5YS45MDcuOTA3IDAgMCAwIDEuMjY2IDBsLS4zNS0uMzU3LjM1LjM1NyAxNC42ODYtMTQuMzhhMS4xMjggMS4xMjggMCAwIDEgMS41NjggMGwxNC42ODcgMTQuMzhhLjkwNy45MDcgMCAwIDAgMS4yNjcgMGwxNC42ODYtMTQuMzhhMS4xMjggMS4xMjggMCAwIDEgMS41NjggMFpcIi8+PC9zdmc+YCxcbiAgQkFDS19JQ09OOiBzdmdgPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDEwIDE4XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguNzM1LjE3OWEuNzUuNzUgMCAwIDEgLjA4NyAxLjA1N0wyLjkyIDguMTkyYTEuMjUgMS4yNSAwIDAgMCAwIDEuNjE3bDUuOTAyIDYuOTU2YS43NS43NSAwIDEgMS0xLjE0NC45N0wxLjc3NiAxMC43OGEyLjc1IDIuNzUgMCAwIDEgMC0zLjU1OUw3LjY3OC4yNjVBLjc1Ljc1IDAgMCAxIDguNzM1LjE4WlwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPmAsXG4gIENPUFlfSUNPTjogc3ZnYDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZmlsbD1cIm5vbmVcIj48cGF0aCBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcuMDEgNy4wMWMuMDMtMS41NDUuMTM4LTIuNS41MzUtMy4yOEE1IDUgMCAwIDEgOS43MyAxLjU0NUMxMC44IDEgMTIuMiAxIDE1IDFjMi44IDAgNC4yIDAgNS4yNy41NDVhNSA1IDAgMCAxIDIuMTg1IDIuMTg1QzIzIDQuOCAyMyA2LjIgMjMgOWMwIDIuOCAwIDQuMi0uNTQ1IDUuMjdhNSA1IDAgMCAxLTIuMTg1IDIuMTg1Yy0uNzguMzk3LTEuNzM1LjUwNS0zLjI4LjUzNGwtLjAwMS4wMWMtLjAzIDEuNTQtLjEzOCAyLjQ5My0uNTM0IDMuMjdhNSA1IDAgMCAxLTIuMTg1IDIuMTg2QzEzLjIgMjMgMTEuOCAyMyA5IDIzYy0yLjggMC00LjIgMC01LjI3LS41NDVhNSA1IDAgMCAxLTIuMTg1LTIuMTg1QzEgMTkuMiAxIDE3LjggMSAxNWMwLTIuOCAwLTQuMi41NDUtNS4yN0E1IDUgMCAwIDEgMy43MyA3LjU0NUM0LjUwOCA3LjE0OSA1LjQ2IDcuMDQgNyA3LjAxaC4wMVpNMTUgMTUuNWMtMS40MjUgMC0yLjQwMy0uMDAxLTMuMTYyLS4wNjMtLjc0LS4wNi0xLjEzOS0uMTcyLTEuNDI3LS4zMTlhMy41IDMuNSAwIDAgMS0xLjUzLTEuNTI5Yy0uMTQ2LS4yODgtLjI1Ny0uNjg2LS4zMTgtMS40MjdDOC41MDEgMTEuNDAzIDguNSAxMC40MjUgOC41IDljMC0xLjQyNS4wMDEtMi40MDMuMDYzLTMuMTYyLjA2LS43NC4xNzItMS4xMzkuMzE4LTEuNDI3YTMuNSAzLjUgMCAwIDEgMS41My0xLjUzYy4yODgtLjE0Ni42ODYtLjI1NyAxLjQyNy0uMzE4Ljc1OS0uMDYyIDEuNzM3LS4wNjMgMy4xNjItLjA2MyAxLjQyNSAwIDIuNDAzLjAwMSAzLjE2Mi4wNjMuNzQuMDYgMS4xMzkuMTcyIDEuNDI3LjMxOGEzLjUgMy41IDAgMCAxIDEuNTMgMS41M2MuMTQ2LjI4OC4yNTcuNjg2LjMxOCAxLjQyNy4wNjIuNzU5LjA2MyAxLjczNy4wNjMgMy4xNjIgMCAxLjQyNS0uMDAxIDIuNDAzLS4wNjMgMy4xNjItLjA2Ljc0LS4xNzIgMS4xMzktLjMxOSAxLjQyN2EzLjUgMy41IDAgMCAxLTEuNTI5IDEuNTNjLS4yODguMTQ2LS42ODYuMjU3LTEuNDI3LjMxOC0uNzU5LjA2Mi0xLjczNy4wNjMtMy4xNjIuMDYzWk03IDguNTExYy0uNDQ0LjAwOS0uODI1LjAyNS0xLjE2Mi4wNTItLjc0LjA2LTEuMTM5LjE3Mi0xLjQyNy4zMThhMy41IDMuNSAwIDAgMC0xLjUzIDEuNTNjLS4xNDYuMjg4LS4yNTcuNjg2LS4zMTggMS40MjctLjA2Mi43NTktLjA2MyAxLjczNy0uMDYzIDMuMTYyIDAgMS40MjUuMDAxIDIuNDAzLjA2MyAzLjE2Mi4wNi43NC4xNzIgMS4xMzkuMzE4IDEuNDI3YTMuNSAzLjUgMCAwIDAgMS41MyAxLjUzYy4yODguMTQ2LjY4Ni4yNTcgMS40MjcuMzE4Ljc1OS4wNjIgMS43MzcuMDYzIDMuMTYyLjA2MyAxLjQyNSAwIDIuNDAzLS4wMDEgMy4xNjItLjA2My43NC0uMDYgMS4xMzktLjE3MiAxLjQyNy0uMzE5YTMuNSAzLjUgMCAwIDAgMS41My0xLjUzYy4xNDYtLjI4Ny4yNTctLjY4NS4zMTgtMS40MjYuMDI3LS4zMzcuMDQzLS43MTguMDUyLTEuMTYySDE1Yy0yLjggMC00LjIgMC01LjI3LS41NDVhNSA1IDAgMCAxLTIuMTg1LTIuMTg1QzcgMTMuMiA3IDExLjggNyA5di0uNDg5WlwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+YCxcbiAgUkVUUllfSUNPTjogc3ZnYDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNSAxNlwiPjxwYXRoIGQ9XCJNNi40NjQgMi4wM0EuNzUuNzUgMCAwIDAgNS40MDMuOTdMMi4wOCA0LjI5M2ExIDEgMCAwIDAgMCAxLjQxNEw1LjQwMyA5LjAzYS43NS43NSAwIDAgMCAxLjA2LTEuMDZMNC42NzIgNi4xNzdhLjI1LjI1IDAgMCAxIC4xNzctLjQyN2gyLjA4NWE0IDQgMCAxIDEtMy45MyA0Ljc0NmMtLjA3Ny0uNDA3LS40MDUtLjc0Ni0uODItLjc0Ni0uNDE0IDAtLjc1NS4zMzgtLjcuNzQ4YTUuNTAxIDUuNTAxIDAgMSAwIDUuNDUtNi4yNDhINC44NDhhLjI1LjI1IDAgMCAxLS4xNzctLjQyN0w2LjQ2NCAyLjAzWlwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPmAsXG4gIERFU0tUT1BfSUNPTjogc3ZnYDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDUuOThjMC0xLjg1IDAtMi43NzUuMzk0LTMuNDY2YTMgMyAwIDAgMSAxLjEyLTEuMTJDMi4yMDQgMSAzLjEzIDEgNC45OCAxaDYuMDRjMS44NSAwIDIuNzc1IDAgMy40NjYuMzk0YTMgMyAwIDAgMSAxLjEyIDEuMTJDMTYgMy4yMDQgMTYgNC4xMyAxNiA1Ljk4djEuMDRjMCAxLjg1IDAgMi43NzUtLjM5NCAzLjQ2NmEzIDMgMCAwIDEtMS4xMiAxLjEyQzEzLjc5NiAxMiAxMi44NyAxMiAxMS4wMiAxMkg0Ljk4Yy0xLjg1IDAtMi43NzUgMC0zLjQ2Ni0uMzk0YTMgMyAwIDAgMS0xLjEyLTEuMTJDMCA5Ljc5NiAwIDguODcgMCA3LjAyVjUuOThaTTQuOTggMi41aDYuMDRjLjk1MyAwIDEuNTY4LjAwMSAyLjAzNC4wNDMuNDQ2LjA0LjYwOC4xMDguNjkuMTU0YTEuNSAxLjUgMCAwIDEgLjU1OS41NmMuMDQ2LjA4LjExNC4yNDMuMTU0LjY5LjA0Mi40NjUuMDQzIDEuMDguMDQzIDIuMDMzdjEuMDRjMCAuOTUyLS4wMDEgMS41NjgtLjA0MyAyLjAzNC0uMDQuNDQ2LS4xMDguNjA4LS4xNTQuNjlhMS40OTkgMS40OTkgMCAwIDEtLjU2LjU1OWMtLjA4LjA0Ni0uMjQzLjExNC0uNjkuMTU0LS40NjYuMDQyLTEuMDguMDQzLTIuMDMzLjA0M0g0Ljk4Yy0uOTUyIDAtMS41NjgtLjAwMS0yLjAzNC0uMDQzLS40NDYtLjA0LS42MDgtLjEwOC0uNjktLjE1NGExLjUgMS41IDAgMCAxLS41NTktLjU2Yy0uMDQ2LS4wOC0uMTE0LS4yNDMtLjE1NC0uNjktLjA0Mi0uNDY1LS4wNDMtMS4wOC0uMDQzLTIuMDMzVjUuOThjMC0uOTUyLjAwMS0xLjU2OC4wNDMtMi4wMzQuMDQtLjQ0Ni4xMDgtLjYwOC4xNTQtLjY5YTEuNSAxLjUgMCAwIDEgLjU2LS41NTljLjA4LS4wNDYuMjQzLS4xMTQuNjktLjE1NC40NjUtLjA0MiAxLjA4LS4wNDMgMi4wMzMtLjA0M1pcIiBmaWxsPVwiI2ZmZlwiLz48cGF0aCBkPVwiTTQgMTQuMjVhLjc1Ljc1IDAgMCAxIC43NS0uNzVoNi41YS43NS43NSAwIDAgMSAwIDEuNWgtNi41YS43NS43NSAwIDAgMS0uNzUtLjc1WlwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPmAsXG4gIE1PQklMRV9JQ09OOiBzdmdgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk02Ljc1IDVhMS4yNSAxLjI1IDAgMSAwIDAtMi41IDEuMjUgMS4yNSAwIDAgMCAwIDIuNVpcIiBmaWxsPVwiI2ZmZlwiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMyA0Ljk4YzAtMS44NSAwLTIuNzc1LjM5NC0zLjQ2NmEzIDMgMCAwIDEgMS4xMi0xLjEyQzUuMjA0IDAgNi4xMzYgMCA4IDBzMi43OTUgMCAzLjQ4Ni4zOTRhMyAzIDAgMCAxIDEuMTIgMS4xMkMxMyAyLjIwNCAxMyAzLjEzIDEzIDQuOTh2Ni4wNGMwIDEuODUgMCAyLjc3NS0uMzk0IDMuNDY2YTMgMyAwIDAgMS0xLjEyIDEuMTJDMTAuNzk2IDE2IDkuODY0IDE2IDggMTZzLTIuNzk1IDAtMy40ODYtLjM5NGEzIDMgMCAwIDEtMS4xMi0xLjEyQzMgMTMuNzk2IDMgMTIuODcgMyAxMS4wMlY0Ljk4Wm04LjUgMHY2LjA0YzAgLjk1My0uMDAxIDEuNTY4LS4wNDMgMi4wMzQtLjA0LjQ0Ni0uMTA4LjYwOC0uMTU0LjY5YTEuNDk5IDEuNDk5IDAgMCAxLS41Ni41NTljLS4wOC4wNDUtLjI0Mi4xMTMtLjY5My4xNTQtLjQ3LjA0Mi0xLjA5MS4wNDMtMi4wNS4wNDMtLjk1OSAwLTEuNTgtLjAwMS0yLjA1LS4wNDMtLjQ1LS4wNC0uNjEzLS4xMDktLjY5My0uMTU0YTEuNSAxLjUgMCAwIDEtLjU2LS41NmMtLjA0Ni0uMDgtLjExNC0uMjQzLS4xNTQtLjY5LS4wNDItLjQ2Ni0uMDQzLTEuMDgtLjA0My0yLjAzM1Y0Ljk4YzAtLjk1Mi4wMDEtMS41NjguMDQzLTIuMDM0LjA0LS40NDYuMTA4LS42MDguMTU0LS42OWExLjUgMS41IDAgMCAxIC41Ni0uNTU5Yy4wOC0uMDQ1LjI0My0uMTEzLjY5My0uMTU0QzYuNDIgMS41MDEgNy4wNDEgMS41IDggMS41Yy45NTkgMCAxLjU4LjAwMSAyLjA1LjA0My40NS4wNC42MTMuMTA5LjY5My4xNTRhMS41IDEuNSAwIDAgMSAuNTYuNTZjLjA0Ni4wOC4xMTQuMjQzLjE1NC42OS4wNDIuNDY1LjA0MyAxLjA4LjA0MyAyLjAzM1pcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5gLFxuICBBUlJPV19ET1dOX0lDT046IHN2Z2A8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIj48cGF0aCBkPVwiTTIuMjggNy40N2EuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDUuMjUgNS4yNWEuNzUuNzUgMCAwIDAgMS4wNiAwbDUuMjUtNS4yNWEuNzUuNzUgMCAwIDAtMS4wNi0xLjA2bC0zLjU0NCAzLjU0M2EuMjUuMjUgMCAwIDEtLjQyNi0uMTc3Vi43NWEuNzUuNzUgMCAwIDAtMS41IDB2MTAuMDg2YS4yNS4yNSAwIDAgMS0uNDI3LjE3NkwyLjI4IDcuNDdaXCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+YCxcbiAgQVJST1dfVVBfUklHSFRfSUNPTjogc3ZnYDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE0XCIgZmlsbD1cIm5vbmVcIj48cGF0aCBkPVwiTTQuNSAxLjc1QS43NS43NSAwIDAgMSA1LjI1IDFIMTJhMS41IDEuNSAwIDAgMSAxLjUgMS41djYuNzVhLjc1Ljc1IDAgMCAxLTEuNSAwVjQuMTY0YS4yNS4yNSAwIDAgMC0uNDI3LS4xNzZMNC4wNjEgMTEuNUEuNzUuNzUgMCAwIDEgMyAxMC40NGw3LjUxMy03LjUxM2EuMjUuMjUgMCAwIDAtLjE3Ny0uNDI3SDUuMjVhLjc1Ljc1IDAgMCAxLS43NS0uNzVaXCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+YCxcbiAgQVJST1dfUklHSFRfSUNPTjogc3ZnYDxzdmcgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDYgMTRcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMi4xODEgMS4wOTlhLjc1Ljc1IDAgMCAxIDEuMDI0LjI3OWwyLjQzMyA0LjI1OGEyLjc1IDIuNzUgMCAwIDEgMCAyLjcyOWwtMi40MzMgNC4yNTdhLjc1Ljc1IDAgMSAxLTEuMzAzLS43NDRMNC4zMzUgNy42MmExLjI1IDEuMjUgMCAwIDAgMC0xLjI0TDEuOTAyIDIuMTIyYS43NS43NSAwIDAgMSAuMjgtMS4wMjNaXCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+YCxcbiAgUVJDT0RFX0lDT046IHN2Z2A8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjUgMjRcIj48cGF0aCBkPVwiTTIzLjc0OCA5YS43NDguNzQ4IDAgMCAwIC43NDgtLjc1MmMtLjAxOC0yLjU5Ni0uMTI4LTQuMDctLjc4NC01LjIyYTYgNiAwIDAgMC0yLjI0LTIuMjRjLTEuMTUtLjY1Ni0yLjYyNC0uNzY2LTUuMjItLjc4NGEuNzQ4Ljc0OCAwIDAgMC0uNzUyLjc0OGMwIC40MTQuMzM1Ljc0OS43NDguNzUyIDEuMDE1LjAwNyAxLjgyLjAyOCAyLjQ5NC4wODguOTk1LjA5IDEuNTYxLjI1NiAxLjk4OC41LjcuMzk4IDEuMjguOTc4IDEuNjc5IDEuNjc4LjI0My40MjcuNDEuOTkzLjQ5OCAxLjk4OC4wNjEuNjc1LjA4MiAxLjQ3OS4wOSAyLjQ5M2EuNzUzLjc1MyAwIDAgMCAuNzUuNzQ5Wk0zLjUyNy43ODhDNC42NzcuMTMyIDYuMTUyLjAyMiA4Ljc0Ny4wMDRBLjc0OC43NDggMCAwIDEgOS41Ljc1MmEuNzUzLjc1MyAwIDAgMS0uNzQ5Ljc1MmMtMS4wMTQuMDA3LTEuODE4LjAyOC0yLjQ5My4wODgtLjk5NS4wOS0xLjU2MS4yNTYtMS45ODguNS0uNy4zOTgtMS4yOC45NzgtMS42NzkgMS42NzgtLjI0My40MjctLjQxLjk5My0uNDk5IDEuOTg4LS4wNi42NzUtLjA4MSAxLjQ3OS0uMDg4IDIuNDkzQS43NTMuNzUzIDAgMCAxIDEuMjUyIDlhLjc0OC43NDggMCAwIDEtLjc0OC0uNzUyYy4wMTgtMi41OTYuMTI4LTQuMDcuNzg0LTUuMjJhNiA2IDAgMCAxIDIuMjQtMi4yNFpNMS4yNTIgMTVhLjc0OC43NDggMCAwIDAtLjc0OC43NTJjLjAxOCAyLjU5Ni4xMjggNC4wNy43ODQgNS4yMmE2IDYgMCAwIDAgMi4yNCAyLjI0YzEuMTUuNjU2IDIuNjI0Ljc2NiA1LjIyLjc4NGEuNzQ4Ljc0OCAwIDAgMCAuNzUyLS43NDguNzUzLjc1MyAwIDAgMC0uNzQ5LS43NTJjLTEuMDE0LS4wMDctMS44MTgtLjAyOC0yLjQ5My0uMDg5LS45OTUtLjA4OS0xLjU2MS0uMjU1LTEuOTg4LS40OThhNC41IDQuNSAwIDAgMS0xLjY3OS0xLjY4Yy0uMjQzLS40MjYtLjQxLS45OTItLjQ5OS0xLjk4Ny0uMDYtLjY3NS0uMDgxLTEuNDc5LS4wODgtMi40OTNBLjc1My43NTMgMCAwIDAgMS4yNTIgMTVaTTIyLjk5NiAxNS43NDlhLjc1My43NTMgMCAwIDEgLjc1Mi0uNzQ5Yy40MTUgMCAuNzUxLjMzOC43NDguNzUyLS4wMTggMi41OTYtLjEyOCA0LjA3LS43ODQgNS4yMmE2IDYgMCAwIDEtMi4yNCAyLjI0Yy0xLjE1LjY1Ni0yLjYyNC43NjYtNS4yMi43ODRhLjc0OC43NDggMCAwIDEtLjc1Mi0uNzQ4YzAtLjQxNC4zMzUtLjc0OS43NDgtLjc1MiAxLjAxNS0uMDA3IDEuODItLjAyOCAyLjQ5NC0uMDg5Ljk5NS0uMDg5IDEuNTYxLS4yNTUgMS45ODgtLjQ5OGE0LjUgNC41IDAgMCAwIDEuNjc5LTEuNjhjLjI0My0uNDI2LjQxLS45OTIuNDk4LTEuOTg3LjA2MS0uNjc1LjA4Mi0xLjQ3OS4wOS0yLjQ5M1pcIiBmaWxsPVwiI2ZmZlwiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNyA0YTIuNSAyLjUgMCAwIDAtMi41IDIuNXYyQTIuNSAyLjUgMCAwIDAgNyAxMWgyYTIuNSAyLjUgMCAwIDAgMi41LTIuNXYtMkEyLjUgMi41IDAgMCAwIDkgNEg3Wm0yIDEuNUg3YTEgMSAwIDAgMC0xIDF2MmExIDEgMCAwIDAgMSAxaDJhMSAxIDAgMCAwIDEtMXYtMmExIDEgMCAwIDAtMS0xWk0xMy41IDYuNUEyLjUgMi41IDAgMCAxIDE2IDRoMmEyLjUgMi41IDAgMCAxIDIuNSAyLjV2MkEyLjUgMi41IDAgMCAxIDE4IDExaC0yYTIuNSAyLjUgMCAwIDEtMi41LTIuNXYtMlptMi41LTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMWgtMmExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFaTTcgMTNhMi41IDIuNSAwIDAgMC0yLjUgMi41djJBMi41IDIuNSAwIDAgMCA3IDIwaDJhMi41IDIuNSAwIDAgMCAyLjUtMi41di0yQTIuNSAyLjUgMCAwIDAgOSAxM0g3Wm0yIDEuNUg3YTEgMSAwIDAgMC0xIDF2MmExIDEgMCAwIDAgMSAxaDJhMSAxIDAgMCAwIDEtMXYtMmExIDEgMCAwIDAtMS0xWlwiIGZpbGw9XCIjZmZmXCIvPjxwYXRoIGQ9XCJNMTMuNSAxNS41YzAtLjQ2NSAwLS42OTcuMDM4LS44OWEyIDIgMCAwIDEgMS41NzItMS41NzJDMTUuMzAzIDEzIDE1LjUzNSAxMyAxNiAxM3YyLjVoLTIuNVpNMTggMTNjLjQ2NSAwIC42OTcgMCAuODkuMDM4YTIgMiAwIDAgMSAxLjU3MiAxLjU3MmMuMDM4LjE5My4wMzguNDI1LjAzOC44OUgxOFYxM1pNMTggMTcuNWgyLjVjMCAuNDY1IDAgLjY5Ny0uMDM4Ljg5YTIgMiAwIDAgMS0xLjU3MiAxLjU3MkMxOC42OTcgMjAgMTguNDY1IDIwIDE4IDIwdi0yLjVaTTEzLjUgMTcuNUgxNlYyMGMtLjQ2NSAwLS42OTcgMC0uODktLjAzOGEyIDIgMCAwIDEtMS41NzItMS41NzJjLS4wMzgtLjE5My0uMDM4LS40MjUtLjAzOC0uODlaXCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+YCxcbiAgU0NBTl9JQ09OOiBzdmdgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwibm9uZVwiPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0xMCAxNS4yMTZjMCAuNDIyLjM0Ny43NjMuNzY4Ljc0IDEuMjAyLS4wNjQgMi4wMjUtLjIyMiAyLjcxLS42MTNhNS4wMDEgNS4wMDEgMCAwIDAgMS44NjUtMS44NjZjLjM5LS42ODQuNTQ5LTEuNTA3LjYxMy0yLjcwOWEuNzM1LjczNSAwIDAgMC0uNzQtLjc2OC43NjguNzY4IDAgMCAwLS43Ni43MzJjLS4wMDkuMTU3LS4wMi4zMDYtLjAzMi40NDctLjA3My44MTItLjIwNiAxLjI0NC0uMzg0IDEuNTU1LS4zMS41NDUtLjc2MS45OTYtMS4zMDYgMS4zMDYtLjMxMS4xNzgtLjc0My4zMTEtMS41NTUuMzg0LS4xNDEuMDEzLS4yOS4wMjMtLjQ0Ny4wMzJhLjc2OC43NjggMCAwIDAtLjczMi43NlpNMTAgLjc4NGMwIC40MDcuMzI1LjczNy43MzIuNzYuMTU3LjAwOS4zMDYuMDIuNDQ3LjAzMi44MTIuMDczIDEuMjQ0LjIwNiAxLjU1NS4zODRhMy41IDMuNSAwIDAgMSAxLjMwNiAxLjMwNmMuMTc4LjMxMS4zMTEuNzQzLjM4NCAxLjU1NS4wMTMuMTQyLjAyMy4yOS4wMzIuNDQ3YS43NjguNzY4IDAgMCAwIC43Ni43MzIuNzM0LjczNCAwIDAgMCAuNzQtLjc2OGMtLjA2NC0xLjIwMi0uMjIyLTIuMDI1LS42MTMtMi43MUE1IDUgMCAwIDAgMTMuNDc3LjY1OGMtLjY4NC0uMzktMS41MDctLjU0OS0yLjcwOS0uNjEzYS43MzUuNzM1IDAgMCAwLS43NjguNzRaTTUuMjMyLjA0NEEuNzM1LjczNSAwIDAgMSA2IC43ODRhLjc2OC43NjggMCAwIDEtLjczMi43NmMtLjE1Ny4wMDktLjMwNS4wMi0uNDQ3LjAzMi0uODEyLjA3My0xLjI0NC4yMDYtMS41NTUuMzg0QTMuNSAzLjUgMCAwIDAgMS45NiAzLjI2NmMtLjE3OC4zMTEtLjMxMS43NDMtLjM4NCAxLjU1NS0uMDEzLjE0Mi0uMDIzLjI5LS4wMzIuNDQ3QS43NjguNzY4IDAgMCAxIC43ODQgNmEuNzM1LjczNSAwIDAgMS0uNzQtLjc2OGMuMDY0LTEuMjAyLjIyMi0yLjAyNS42MTMtMi43MUE1IDUgMCAwIDEgMi41MjMuNjU4QzMuMjA3LjI2NyA0LjAzLjEwOCA1LjIzMy4wNDRaTTUuMjY4IDE0LjQ1NmEuNzY4Ljc2OCAwIDAgMSAuNzMyLjc2LjczNC43MzQgMCAwIDEtLjc2OC43NGMtMS4yMDItLjA2NC0yLjAyNS0uMjIyLTIuNzEtLjYxM2E1IDUgMCAwIDEtMS44NjUtMS44NjZjLS4zOS0uNjg0LS41NDktMS41MDctLjYxMy0yLjcwOUEuNzM1LjczNSAwIDAgMSAuNzg0IDEwYy40MDcgMCAuNzM3LjMyNS43Ni43MzIuMDA5LjE1Ny4wMi4zMDYuMDMyLjQ0Ny4wNzMuODEyLjIwNiAxLjI0NC4zODQgMS41NTVhMy41IDMuNSAwIDAgMCAxLjMwNiAxLjMwNmMuMzExLjE3OC43NDMuMzExIDEuNTU1LjM4NC4xNDIuMDEzLjI5LjAyMy40NDcuMDMyWlwiLz48L3N2Zz5gLFxuICBDSEVDS01BUktfSUNPTjogc3ZnYDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMyAxMlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMi4xNTUuMTMyYS43NS43NSAwIDAgMSAuMjMyIDEuMDM1TDUuODIxIDExLjUzNWExIDEgMCAwIDEtMS42MjYuMDlMLjY2NSA3LjIxYS43NS43NSAwIDEgMSAxLjE3LS45MzdMNC43MSA5Ljg2N2EuMjUuMjUgMCAwIDAgLjQwNi0uMDIzTDExLjEyLjM2NGEuNzUuNzUgMCAwIDEgMS4wMzUtLjIzMlpcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5gLFxuICBTRUFSQ0hfSUNPTjogc3ZnYDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIxXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjQzMiAxMy45OTJjLS4zNTQtLjM1My0uOTEtLjM4Mi0xLjM1LS4xNDZhNS41IDUuNSAwIDEgMSAyLjI2NS0yLjI2NWMtLjIzNy40NDEtLjIwOC45OTcuMTQ1IDEuMzVsMy4yOTYgMy4yOTZhLjc1Ljc1IDAgMSAxLTEuMDYgMS4wNjFsLTMuMjk2LTMuMjk2Wm0uMDYtNWE0IDQgMCAxIDEtOCAwIDQgNCAwIDAgMSA4IDBaXCIgZmlsbD1cIiM5NDlFOUVcIi8+PC9zdmc+YCxcbiAgV0FMTEVUX1BMQUNFSE9MREVSOiBzdmdgPHN2ZyB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgNjAgNjBcIj48ZyBjbGlwLXBhdGg9XCJ1cmwoI3EpXCI+PHBhdGggaWQ9XCJ3YWxsZXQtcGxhY2Vob2xkZXItZmlsbFwiIGZpbGw9XCIjZmZmXCIgZD1cIk0wIDI0LjljMC05LjI1MSAwLTEzLjg3NyAxLjk3LTE3LjMzMmExNSAxNSAwIDAgMSA1LjU5OC01LjU5N0MxMS4wMjMgMCAxNS42NDggMCAyNC45IDBoMTAuMmM5LjI1MiAwIDEzLjg3NyAwIDE3LjMzMiAxLjk3YTE1IDE1IDAgMCAxIDUuNTk3IDUuNTk4QzYwIDExLjAyMyA2MCAxNS42NDggNjAgMjQuOXYxMC4yYzAgOS4yNTIgMCAxMy44NzctMS45NyAxNy4zMzJhMTUuMDAxIDE1LjAwMSAwIDAgMS01LjU5OCA1LjU5N0M0OC45NzcgNjAgNDQuMzUyIDYwIDM1LjEgNjBIMjQuOWMtOS4yNTEgMC0xMy44NzcgMC0xNy4zMzItMS45N2ExNSAxNSAwIDAgMS01LjU5Ny01LjU5OEMwIDQ4Ljk3NyAwIDQ0LjM1MiAwIDM1LjFWMjQuOVpcIi8+PHBhdGggaWQ9XCJ3YWxsZXQtcGxhY2Vob2xkZXItZGFzaFwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2UtZGFzaGFycmF5PVwiNCA0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgZD1cIk0uMDQgNDEuNzA4YTIzMS41OTggMjMxLjU5OCAwIDAgMS0uMDM5LTQuNDAzbC43NS0uMDAxTC43NSAzNS4xdi0yLjU1SDB2LTUuMWguNzVWMjQuOWwuMDAxLTIuMjA0aC0uNzVjLjAwMy0xLjYxNy4wMTEtMy4wNzcuMDM5LTQuNDA0bC43NS4wMTZjLjAzNC0xLjY1LjA5OS0zLjA4LjIxOC00LjM0M2wtLjc0Ni0uMDdjLjE1OC0xLjY3OC40MTItMy4wODMuODItNC4zMTZsLjcxMy4yMzZjLjIyNC0uNjc5LjQ5Ny0xLjI5Ni44MjctMS44NzVhMTQuMjUgMTQuMjUgMCAwIDEgMS4wNS0xLjU4NUwzLjA3NiA1LjlBMTUgMTUgMCAwIDEgNS45IDMuMDc2bC40NTUuNTk2YTE0LjI1IDE0LjI1IDAgMCAxIDEuNTg1LTEuMDVjLjU3OS0uMzMgMS4xOTYtLjYwMyAxLjg3NS0uODI3bC0uMjM2LS43MTJDMTAuODEyLjY3NCAxMi4yMTcuNDIgMTMuODk1LjI2MmwuMDcuNzQ2QzE1LjIzLjg5IDE2LjY2LjgyNCAxOC4zMDguNzlsLS4wMTYtLjc1QzE5LjYyLjAxMiAyMS4wOC4wMDQgMjIuNjk1LjAwMWwuMDAxLjc1TDI0LjkuNzVoMi41NVYwaDUuMXYuNzVoMi41NWwyLjIwNC4wMDF2LS43NWMxLjYxNy4wMDMgMy4wNzcuMDExIDQuNDA0LjAzOWwtLjAxNi43NWMxLjY1LjAzNCAzLjA4LjA5OSA0LjM0My4yMThsLjA3LS43NDZjMS42NzguMTU4IDMuMDgzLjQxMiA0LjMxNi44MmwtLjIzNi43MTNjLjY3OS4yMjQgMS4yOTYuNDk3IDEuODc1LjgyN2ExNC4yNCAxNC4yNCAwIDAgMSAxLjU4NSAxLjA1bC40NTUtLjU5NkExNC45OTkgMTQuOTk5IDAgMCAxIDU2LjkyNCA1LjlsLS41OTYuNDU1Yy4zODQuNTAyLjczNSAxLjAzMiAxLjA1IDEuNTg1LjMzLjU3OS42MDIgMS4xOTYuODI3IDEuODc1bC43MTItLjIzNmMuNDA5IDEuMjMzLjY2MyAyLjYzOC44MjIgNC4zMTZsLS43NDcuMDdjLjExOSAxLjI2NC4xODQgMi42OTQuMjE4IDQuMzQzbC43NS0uMDE2Yy4wMjggMS4zMjcuMDM2IDIuNzg3LjAzOSA0LjQwM2wtLjc1LjAwMS4wMDEgMi4yMDR2Mi41NUg2MHY1LjFoLS43NXYyLjU1bC0uMDAxIDIuMjA0aC43NWEyMzEuNDMxIDIzMS40MzEgMCAwIDEtLjAzOSA0LjQwNGwtLjc1LS4wMTZjLS4wMzQgMS42NS0uMDk5IDMuMDgtLjIxOCA0LjM0M2wuNzQ3LjA3Yy0uMTU5IDEuNjc4LS40MTMgMy4wODMtLjgyMiA0LjMxNmwtLjcxMi0uMjM2YTEwLjI1NSAxMC4yNTUgMCAwIDEtLjgyNyAxLjg3NSAxNC4yNDIgMTQuMjQyIDAgMCAxLTEuMDUgMS41ODVsLjU5Ni40NTVhMTQuOTk3IDE0Ljk5NyAwIDAgMS0yLjgyNCAyLjgyNGwtLjQ1NS0uNTk2Yy0uNTAyLjM4NC0xLjAzMi43MzUtMS41ODUgMS4wNS0uNTc5LjMzLTEuMTk2LjYwMi0xLjg3NS44MjdsLjIzNi43MTJjLTEuMjMzLjQwOS0yLjYzOC42NjMtNC4zMTYuODIybC0uMDctLjc0N2MtMS4yNjQuMTE5LTIuNjk0LjE4NC00LjM0My4yMThsLjAxNi43NWMtMS4zMjcuMDI4LTIuNzg3LjAzNi00LjQwMy4wMzlsLS4wMDEtLjc1LTIuMjA0LjAwMWgtMi41NVY2MGgtNS4xdi0uNzVIMjQuOWwtMi4yMDQtLjAwMXYuNzVhMjMxLjQzMSAyMzEuNDMxIDAgMCAxLTQuNDA0LS4wMzlsLjAxNi0uNzVjLTEuNjUtLjAzNC0zLjA4LS4wOTktNC4zNDMtLjIxOGwtLjA3Ljc0N2MtMS42NzgtLjE1OS0zLjA4My0uNDEzLTQuMzE2LS44MjJsLjIzNi0uNzEyYTEwLjI1OCAxMC4yNTggMCAwIDEtMS44NzUtLjgyNyAxNC4yNTIgMTQuMjUyIDAgMCAxLTEuNTg1LTEuMDVsLS40NTUuNTk2QTE0Ljk5OSAxNC45OTkgMCAwIDEgMy4wNzYgNTQuMWwuNTk2LS40NTVhMTQuMjQgMTQuMjQgMCAwIDEtMS4wNS0xLjU4NSAxMC4yNTkgMTAuMjU5IDAgMCAxLS44MjctMS44NzVsLS43MTIuMjM2Qy42NzQgNDkuMTg4LjQyIDQ3Ljc4My4yNjIgNDYuMTA1bC43NDYtLjA3Qy44OSA0NC43Ny44MjQgNDMuMzQuNzkgNDEuNjkybC0uNzUuMDE2WlwiLz48cGF0aCBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTM1LjY0MyAzMi4xNDVjLS4yOTctLjc0My0uNDQ1LTEuMTE0LS40MDEtMS4yNzVhLjQyLjQyIDAgMCAxIC4xODItLjI3Yy4xMzQtLjEuNDYzLS4xIDEuMTIzLS4xLjc0MiAwIDEuNDk5LjA0NiAyLjIzNi0uMDVhNiA2IDAgMCAwIDUuMTY2LTUuMTY2Yy4wNTEtLjM5LjA1MS0uODU1LjA1MS0xLjc4NCAwLS45MjggMC0xLjM5My0uMDUxLTEuNzgzYTYgNiAwIDAgMC01LjE2Ni01LjE2NWMtLjM5LS4wNTItLjg1NC0uMDUyLTEuNzgzLS4wNTJoLTcuNzJjLTQuOTM0IDAtNy40MDEgMC05LjI0NCAxLjA1MWE4IDggMCAwIDAtMi45ODUgMi45ODZDMTYuMDU3IDIyLjI4IDE2LjAwMyAyNC41OCAxNiAyOSAxNS45OTggMzEuMDc1IDE2IDMzLjE1IDE2IDM1LjIyNEE3Ljc3OCA3Ljc3OCAwIDAgMCAyMy43NzggNDNIMjguNWMxLjM5NCAwIDIuMDkgMCAyLjY3LS4xMTZhNiA2IDAgMCAwIDQuNzE1LTQuNzE0Yy4xMTUtLjU4LjExNS0xLjMwMS4xMTUtMi43NDQgMC0xLjMxIDAtMS45NjQtLjExNC0yLjQ5YTQuOTk4IDQuOTk4IDAgMCAwLS4yNDMtLjc5MlpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPjxwYXRoIGZpbGw9XCIjOUVBOUE5XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzcgMThoLTcuNzJjLTIuNDk0IDAtNC4yNjYuMDAyLTUuNjQ3LjEyNi0xLjM2MS4xMjItMi4xOTcuMzU0LTIuODU0LjcyOGE2LjUgNi41IDAgMCAwLTIuNDI1IDIuNDI2Yy0uMzc1LjY1Ny0uNjA3IDEuNDkyLS43MjkgMi44NTMtLjExIDEuMjMzLS4xMjMgMi43NzctLjEyNSA0Ljg2NyAwIC43IDAgMS4wNS4wOTcgMS4xODEuMDk2LjEzLjE4Mi4xODEuMzQzLjIuMTYzLjAyLjUxOC0uMTggMS4yMjktLjU4MWE2LjE5NSA2LjE5NSAwIDAgMSAzLjA1My0uOEgzN2MuOTc3IDAgMS4zMi0uMDAzIDEuNTg3LS4wMzhhNC41IDQuNSAwIDAgMCAzLjg3NC0zLjg3NGMuMDM2LS4yNjguMDM5LS42MTEuMDM5LTEuNTg4IDAtLjk3Ni0uMDAzLTEuMzE5LS4wMzgtMS41ODdhNC41IDQuNSAwIDAgMC0zLjg3NS0zLjg3NEMzOC4zMiAxOC4wMDQgMzcuOTc3IDE4IDM3IDE4Wm0tNy4zNjQgMTIuNWgtNy40MTRhNC43MjIgNC43MjIgMCAwIDAtNC43MjIgNC43MjMgNi4yNzggNi4yNzggMCAwIDAgNi4yNzggNi4yNzhIMjguNWMxLjQ2NiAwIDEuOTgtLjAwOCAyLjM3OC0uMDg3YTQuNSA0LjUgMCAwIDAgMy41MzUtMy41MzZjLjA4LS4zOTcuMDg3LS45MzMuMDg3LTIuNDUxIDAtMS4zOTEtLjAwOS0xLjg0My0uMDgtMi4xN2EzLjUgMy41IDAgMCAwLTIuNjc2LTIuNjc2Yy0uMzI4LS4wNzItLjc2Mi0uMDgtMi4xMDgtLjA4WlwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD1cInFcIj48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMCAwaDYwdjYwSDB6XCIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPmAsXG4gIEdMT0JFX0lDT046IHN2Z2A8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGw9XCIjZmZmXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTUuNSA4YTcuNSA3LjUgMCAxIDEtMTUgMCA3LjUgNy41IDAgMCAxIDE1IDBabS0yLjExMy43NWMuMzAxIDAgLjUzNS4yNjQuNDcuNTU4YTYuMDEgNi4wMSAwIDAgMS0yLjg2NyAzLjg5NmMtLjIwMy4xMTYtLjQyLS4xMDMtLjMzNC0uMzIuNDA5LTEuMDE4LjY5MS0yLjI3NC43OTctMy42NTdhLjUxMi41MTIgMCAwIDEgLjUwNy0uNDc3aDEuNDI3Wm0uNDctMi4wNThjLjA2NS4yOTQtLjE2OS41NTgtLjQ3LjU1OEgxMS45NmEuNTEyLjUxMiAwIDAgMS0uNTA3LS40NzdjLS4xMDYtMS4zODMtLjM4OS0yLjYzOC0uNzk3LTMuNjU2LS4wODctLjIxNy4xMy0uNDM3LjMzMy0uMzJhNi4wMSA2LjAxIDAgMCAxIDIuODY4IDMuODk1Wm0tNC40MDIuNTU4Yy4yODYgMCAuNTE1LS4yNC40OS0uNTI1LS4xMjEtMS4zNjEtLjQyOS0yLjUzNC0uODMtMy4zOTMtLjI3OS0uNi0uNTQ5LS45My0uNzUzLTEuMTEyYS41MzUuNTM1IDAgMCAwLS43MjQgMGMtLjIwNC4xODItLjQ3NC41MTMtLjc1NCAxLjExMi0uNC44NTktLjcwOCAyLjAzMi0uODI4IDMuMzkzYS40ODYuNDg2IDAgMCAwIC40OS41MjVoMi45MDlabS01LjQxNSAwYy4yNjcgMCAuNDg2LS4yMS41MDctLjQ3Ny4xMDYtMS4zODMuMzg5LTIuNjM4Ljc5Ny0zLjY1Ni4wODctLjIxNy0uMTMtLjQzNy0uMzMzLS4zMmE2LjAxIDYuMDEgMCAwIDAtMi44NjggMy44OTVjLS4wNjUuMjk0LjE2OS41NTguNDcuNTU4SDQuMDRaTTIuMTQzIDkuMzA4Yy0uMDY1LS4yOTQuMTY5LS41NTguNDctLjU1OEg0LjA0Yy4yNjcgMCAuNDg2LjIxLjUwNy40NzcuMTA2IDEuMzgzLjM4OSAyLjYzOS43OTcgMy42NTcuMDg3LjIxNy0uMTMuNDM2LS4zMzMuMzJhNi4wMSA2LjAxIDAgMCAxLTIuODY4LTMuODk2Wm0zLjkxMy0uMDMzYS40ODYuNDg2IDAgMCAxIC40OS0uNTI1aDIuOTA5Yy4yODYgMCAuNTE1LjI0LjQ5LjUyNS0uMTIxIDEuMzYxLS40MjggMi41MzUtLjgzIDMuMzk0LS4yNzkuNi0uNTQ5LjkzLS43NTMgMS4xMTJhLjUzNS41MzUgMCAwIDEtLjcyNCAwYy0uMjA0LS4xODItLjQ3NC0uNTEzLS43NTQtMS4xMTItLjQtLjg1OS0uNzA4LTIuMDMzLS44MjgtMy4zOTRaXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz5gXG59O1xuXG5jb25zdCBzdHlsZXMkcSA9IGNzc2Aud2NtLXRvb2xiYXItcGxhY2Vob2xkZXJ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7aGVpZ2h0OjEwMHB4O2JvcmRlci1yYWRpdXM6Y2FsYyh2YXIoLS13Y20tYmFja2dyb3VuZC1ib3JkZXItcmFkaXVzKSAqIC45KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1iYWNrZ3JvdW5kLWNvbG9yKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9LndjbS10b29sYmFye2hlaWdodDozOHB4O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46NXB4IDE1cHggNXB4IDVweDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXJ9LndjbS10b29sYmFyIGltZywud2NtLXRvb2xiYXIgc3Zne2hlaWdodDoyOHB4O29iamVjdC1wb3NpdGlvbjpsZWZ0IGNlbnRlcjtvYmplY3QtZml0OmNvbnRhaW59I3djbS13Yy1sb2dvIHBhdGh7ZmlsbDp2YXIoLS13Y20tYWNjZW50LWZpbGwtY29sb3IpfWJ1dHRvbnt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2JvcmRlci1yYWRpdXM6dmFyKC0td2NtLWljb24tYnV0dG9uLWJvcmRlci1yYWRpdXMpO2JvcmRlcjowO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1iZy0xKTtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS13Y20tY29sb3Itb3ZlcmxheSl9YnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1iZy0yKX1idXR0b24gc3Zne2Rpc3BsYXk6YmxvY2s7b2JqZWN0LXBvc2l0aW9uOmNlbnRlcn1idXR0b24gcGF0aHtmaWxsOnZhcigtLXdjbS1jb2xvci1mZy0xKX0ud2NtLXRvb2xiYXIgZGl2e2Rpc3BsYXk6ZmxleH1AbWVkaWEoaG92ZXI6aG92ZXIpe2J1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1iZy0yKX19YDtcblxudmFyIF9fZGVmUHJvcCR1ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkdSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJHUgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkdSh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkdSh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtTW9kYWxCYWNrY2FyZCA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIC0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwid2NtLXRvb2xiYXItcGxhY2Vob2xkZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwid2NtLXRvb2xiYXJcIj4ke1N2Z1V0aWwuV0FMTEVUX0NPTk5FQ1RfTE9HT30gPGJ1dHRvbiBAY2xpY2s9XCIke01vZGFsQ3RybC5jbG9zZX1cIj4ke1N2Z1V0aWwuQ1JPU1NfSUNPTn08L2J1dHRvbj48L2Rpdj5gO1xuICB9XG59O1xuV2NtTW9kYWxCYWNrY2FyZC5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJHFdO1xuV2NtTW9kYWxCYWNrY2FyZCA9IF9fZGVjb3JhdGVDbGFzcyR1KFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1tb2RhbC1iYWNrY2FyZFwiKVxuXSwgV2NtTW9kYWxCYWNrY2FyZCk7XG5cbmNvbnN0IHN0eWxlcyRwID0gY3NzYG1haW57cGFkZGluZzoyMHB4O3BhZGRpbmctdG9wOjA7d2lkdGg6MTAwJX1gO1xuXG52YXIgX19kZWZQcm9wJHQgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyR0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkdCA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyR0KHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCR0KHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21Nb2RhbENvbnRlbnQgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPG1haW4+PHNsb3Q+PC9zbG90PjwvbWFpbj5gO1xuICB9XG59O1xuV2NtTW9kYWxDb250ZW50LnN0eWxlcyA9IFtUaGVtZVV0aWwuZ2xvYmFsQ3NzLCBzdHlsZXMkcF07XG5XY21Nb2RhbENvbnRlbnQgPSBfX2RlY29yYXRlQ2xhc3MkdChbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tbW9kYWwtY29udGVudFwiKVxuXSwgV2NtTW9kYWxDb250ZW50KTtcblxuY29uc3Qgc3R5bGVzJG8gPSBjc3NgZm9vdGVye3BhZGRpbmc6MTBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmluaGVyaXQ7anVzdGlmeS1jb250ZW50OmluaGVyaXQ7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0td2NtLWNvbG9yLWJnLTIpfWA7XG5cbnZhciBfX2RlZlByb3AkcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjJHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZGVjb3JhdGVDbGFzcyRzID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjJHModGFyZ2V0LCBrZXkpIDogdGFyZ2V0O1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxLCBkZWNvcmF0b3I7IGkgPj0gMDsgaS0tKVxuICAgIGlmIChkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgcmVzdWx0ID0gKGtpbmQgPyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHJlc3VsdCkgOiBkZWNvcmF0b3IocmVzdWx0KSkgfHwgcmVzdWx0O1xuICBpZiAoa2luZCAmJiByZXN1bHQpXG4gICAgX19kZWZQcm9wJHModGFyZ2V0LCBrZXksIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xubGV0IFdjbU1vZGFsRm9vdGVyID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxmb290ZXI+PHNsb3Q+PC9zbG90PjwvZm9vdGVyPmA7XG4gIH1cbn07XG5XY21Nb2RhbEZvb3Rlci5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJG9dO1xuV2NtTW9kYWxGb290ZXIgPSBfX2RlY29yYXRlQ2xhc3MkcyhbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tbW9kYWwtZm9vdGVyXCIpXG5dLCBXY21Nb2RhbEZvb3Rlcik7XG5cbmNvbnN0IHN0eWxlcyRuID0gY3NzYGhlYWRlcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzoyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlfS53Y20tYm9yZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLXdjbS1jb2xvci1iZy0yKTttYXJnaW4tYm90dG9tOjIwcHh9aGVhZGVyIGJ1dHRvbntwYWRkaW5nOjE1cHggMjBweH1oZWFkZXIgYnV0dG9uOmFjdGl2ZXtvcGFjaXR5Oi41fUBtZWRpYShob3Zlcjpob3Zlcil7aGVhZGVyIGJ1dHRvbjpob3ZlcntvcGFjaXR5Oi41fX0ud2NtLWJhY2stYnRue3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MH0ud2NtLWFjdGlvbi1idG57cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MH1wYXRoe2ZpbGw6dmFyKC0td2NtLWFjY2VudC1jb2xvcil9YDtcblxudmFyIF9fZGVmUHJvcCRyID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJHIgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2Mkcih0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3Akcih0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtTW9kYWxIZWFkZXIgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudGl0bGUgPSBcIlwiO1xuICAgIHRoaXMub25BY3Rpb24gPSB2b2lkIDA7XG4gICAgdGhpcy5hY3Rpb25JY29uID0gdm9pZCAwO1xuICAgIHRoaXMuYm9yZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgYmFja0J0blRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYDxidXR0b24gY2xhc3M9XCJ3Y20tYmFjay1idG5cIiBAY2xpY2s9XCIke1JvdXRlckN0cmwuZ29CYWNrfVwiPiR7U3ZnVXRpbC5CQUNLX0lDT059PC9idXR0b24+YDtcbiAgfVxuICBhY3Rpb25CdG5UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGA8YnV0dG9uIGNsYXNzPVwid2NtLWFjdGlvbi1idG5cIiBAY2xpY2s9XCIke3RoaXMub25BY3Rpb259XCI+JHt0aGlzLmFjdGlvbkljb259PC9idXR0b24+YDtcbiAgfVxuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFwid2NtLWJvcmRlclwiOiB0aGlzLmJvcmRlclxuICAgIH07XG4gICAgY29uc3QgYmFja0J0biA9IFJvdXRlckN0cmwuc3RhdGUuaGlzdG9yeS5sZW5ndGggPiAxO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnRpdGxlID8gaHRtbGA8d2NtLXRleHQgdmFyaWFudD1cImJpZy1ib2xkXCI+JHt0aGlzLnRpdGxlfTwvd2NtLXRleHQ+YCA6IGh0bWxgPHNsb3Q+PC9zbG90PmA7XG4gICAgcmV0dXJuIGh0bWxgPGhlYWRlciBjbGFzcz1cIiR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCI+JHtiYWNrQnRuID8gdGhpcy5iYWNrQnRuVGVtcGxhdGUoKSA6IG51bGx9ICR7Y29udGVudH0gJHt0aGlzLm9uQWN0aW9uID8gdGhpcy5hY3Rpb25CdG5UZW1wbGF0ZSgpIDogbnVsbH08L2hlYWRlcj5gO1xuICB9XG59O1xuV2NtTW9kYWxIZWFkZXIuc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlcyRuXTtcbl9fZGVjb3JhdGVDbGFzcyRyKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtTW9kYWxIZWFkZXIucHJvdG90eXBlLCBcInRpdGxlXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJHIoW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21Nb2RhbEhlYWRlci5wcm90b3R5cGUsIFwib25BY3Rpb25cIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkcihbXG4gIHByb3BlcnR5KClcbl0sIFdjbU1vZGFsSGVhZGVyLnByb3RvdHlwZSwgXCJhY3Rpb25JY29uXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJHIoW1xuICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFdjbU1vZGFsSGVhZGVyLnByb3RvdHlwZSwgXCJib3JkZXJcIiwgMik7XG5XY21Nb2RhbEhlYWRlciA9IF9fZGVjb3JhdGVDbGFzcyRyKFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1tb2RhbC1oZWFkZXJcIilcbl0sIFdjbU1vZGFsSGVhZGVyKTtcblxuY29uc3QgVWlVdGlsID0ge1xuICBNT0JJTEVfQlJFQUtQT0lOVDogNjAwLFxuICBXQ01fUkVDRU5UX1dBTExFVF9EQVRBOiBcIldDTV9SRUNFTlRfV0FMTEVUX0RBVEFcIixcbiAgRVhQTE9SRVJfV0FMTEVUX1VSTDogXCJodHRwczovL2V4cGxvcmVyLndhbGxldGNvbm5lY3QuY29tLz90eXBlPXdhbGxldFwiLFxuICBnZXRTaGFkb3dSb290RWxlbWVudChyb290LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IGVsID0gcm9vdC5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfSxcbiAgZ2V0V2FsbGV0SWNvbih7IGlkLCBpbWFnZV9pZCB9KSB7XG4gICAgY29uc3QgeyB3YWxsZXRJbWFnZXMgfSA9IENvbmZpZ0N0cmwuc3RhdGU7XG4gICAgaWYgKHdhbGxldEltYWdlcyA9PSBudWxsID8gdm9pZCAwIDogd2FsbGV0SW1hZ2VzW2lkXSkge1xuICAgICAgcmV0dXJuIHdhbGxldEltYWdlc1tpZF07XG4gICAgfSBlbHNlIGlmIChpbWFnZV9pZCkge1xuICAgICAgcmV0dXJuIEV4cGxvcmVyQ3RybC5nZXRXYWxsZXRJbWFnZVVybChpbWFnZV9pZCk7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9LFxuICBnZXRXYWxsZXROYW1lKG5hbWUsIHNob3J0ID0gZmFsc2UpIHtcbiAgICByZXR1cm4gc2hvcnQgJiYgbmFtZS5sZW5ndGggPiA4ID8gYCR7bmFtZS5zdWJzdHJpbmcoMCwgOCl9Li5gIDogbmFtZTtcbiAgfSxcbiAgaXNNb2JpbGVBbmltYXRpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDw9IFVpVXRpbC5NT0JJTEVfQlJFQUtQT0lOVDtcbiAgfSxcbiAgYXN5bmMgcHJlbG9hZEltYWdlKHNyYykge1xuICAgIGNvbnN0IGltYWdlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtpbWFnZVByb21pc2UsIENvcmVVdGlsLndhaXQoM2UzKV0pO1xuICB9LFxuICBnZXRFcnJvck1lc3NhZ2UoZXJyKSB7XG4gICAgcmV0dXJuIGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcIlVua25vd24gRXJyb3JcIjtcbiAgfSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgZGVib3VuY2UoZnVuYywgdGltZW91dCA9IDUwMCkge1xuICAgIGxldCB0aW1lciA9IHZvaWQgMDtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChuZXh0LCB0aW1lb3V0KTtcbiAgICB9O1xuICB9LFxuICBoYW5kbGVNb2JpbGVMaW5raW5nKHdhbGxldCwgdGFyZ2V0ID0gXCJfc2VsZlwiKSB7XG4gICAgY29uc3QgeyB3YWxsZXRDb25uZWN0VXJpIH0gPSBPcHRpb25zQ3RybC5zdGF0ZTtcbiAgICBjb25zdCB7IG1vYmlsZSwgbmFtZSB9ID0gd2FsbGV0O1xuICAgIGNvbnN0IG5hdGl2ZVVybCA9IG1vYmlsZSA9PSBudWxsID8gdm9pZCAwIDogbW9iaWxlLm5hdGl2ZTtcbiAgICBjb25zdCB1bml2ZXJzYWxVcmwgPSBtb2JpbGUgPT0gbnVsbCA/IHZvaWQgMCA6IG1vYmlsZS51bml2ZXJzYWw7XG4gICAgVWlVdGlsLnNldFJlY2VudFdhbGxldCh3YWxsZXQpO1xuICAgIGZ1bmN0aW9uIG9uUmVkaXJlY3QodXJpKSB7XG4gICAgICBpZiAobmF0aXZlVXJsKSB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBDb3JlVXRpbC5mb3JtYXROYXRpdmVVcmwobmF0aXZlVXJsLCB1cmksIG5hbWUpO1xuICAgICAgICBDb3JlVXRpbC5vcGVuSHJlZihocmVmLCB0YXJnZXQpO1xuICAgICAgfSBlbHNlIGlmICh1bml2ZXJzYWxVcmwpIHtcbiAgICAgICAgY29uc3QgaHJlZiA9IENvcmVVdGlsLmZvcm1hdFVuaXZlcnNhbFVybCh1bml2ZXJzYWxVcmwsIHVyaSwgbmFtZSk7XG4gICAgICAgIENvcmVVdGlsLm9wZW5IcmVmKGhyZWYsIHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3YWxsZXRDb25uZWN0VXJpKSB7XG4gICAgICBvblJlZGlyZWN0KHdhbGxldENvbm5lY3RVcmkpO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlQW5kcm9pZExpbmtpbmcoKSB7XG4gICAgY29uc3QgeyB3YWxsZXRDb25uZWN0VXJpIH0gPSBPcHRpb25zQ3RybC5zdGF0ZTtcbiAgICBpZiAod2FsbGV0Q29ubmVjdFVyaSkge1xuICAgICAgQ29yZVV0aWwuc2V0V2FsbGV0Q29ubmVjdEFuZHJvaWREZWVwTGluayh3YWxsZXRDb25uZWN0VXJpKTtcbiAgICAgIENvcmVVdGlsLm9wZW5IcmVmKHdhbGxldENvbm5lY3RVcmksIENvcmVVdGlsLmlzVGVsZWdyYW0oKSA/IFwiX2JsYW5rXCIgOiBcIl9zZWxmXCIpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgaGFuZGxlVXJpQ29weSgpIHtcbiAgICBjb25zdCB7IHdhbGxldENvbm5lY3RVcmkgfSA9IE9wdGlvbnNDdHJsLnN0YXRlO1xuICAgIGlmICh3YWxsZXRDb25uZWN0VXJpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3YWxsZXRDb25uZWN0VXJpKTtcbiAgICAgICAgVG9hc3RDdHJsLm9wZW5Ub2FzdChcIkxpbmsgY29waWVkXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgVG9hc3RDdHJsLm9wZW5Ub2FzdChcIkZhaWxlZCB0byBjb3B5XCIsIFwiZXJyb3JcIik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXRDdXN0b21JbWFnZVVybHMoKSB7XG4gICAgY29uc3QgeyB3YWxsZXRJbWFnZXMgfSA9IENvbmZpZ0N0cmwuc3RhdGU7XG4gICAgY29uc3Qgd2FsbGV0VXJscyA9IE9iamVjdC52YWx1ZXMod2FsbGV0SW1hZ2VzICE9IG51bGwgPyB3YWxsZXRJbWFnZXMgOiB7fSk7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMod2FsbGV0VXJscyk7XG4gIH0sXG4gIHRydW5jYXRlKHZhbHVlLCBzdHJMZW4gPSA4KSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBzdHJMZW4pIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGAke3ZhbHVlLnN1YnN0cmluZygwLCA0KX0uLi4ke3ZhbHVlLnN1YnN0cmluZyh2YWx1ZS5sZW5ndGggLSA0KX1gO1xuICB9LFxuICBzZXRSZWNlbnRXYWxsZXQod2FsbGV0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVpVXRpbC5XQ01fUkVDRU5UX1dBTExFVF9EQVRBLCBKU09OLnN0cmluZ2lmeSh3YWxsZXQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmluZm8oXCJVbmFibGUgdG8gc2V0IHJlY2VudCB3YWxsZXRcIik7XG4gICAgfVxuICB9LFxuICBnZXRSZWNlbnRXYWxsZXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdhbGxldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVpVXRpbC5XQ01fUkVDRU5UX1dBTExFVF9EQVRBKTtcbiAgICAgIGlmICh3YWxsZXQpIHtcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2Uod2FsbGV0KTtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhcIlVuYWJsZSB0byBnZXQgcmVjZW50IHdhbGxldFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfSxcbiAgY2FzZVNhZmVJbmNsdWRlcyhzdHIxLCBzdHIyKSB7XG4gICAgcmV0dXJuIHN0cjEudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhzdHIyLnRvVXBwZXJDYXNlKCkpO1xuICB9LFxuICBvcGVuV2FsbGV0RXhwbG9yZXJVcmwoKSB7XG4gICAgQ29yZVV0aWwub3BlbkhyZWYoVWlVdGlsLkVYUExPUkVSX1dBTExFVF9VUkwsIFwiX2JsYW5rXCIpO1xuICB9LFxuICBnZXRDYWNoZWRSb3V0ZXJXYWxsZXRQbGF0Zm9ybXMoKSB7XG4gICAgY29uc3QgeyBkZXNrdG9wLCBtb2JpbGUgfSA9IENvcmVVdGlsLmdldFdhbGxldFJvdXRlckRhdGEoKTtcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSBCb29sZWFuKGRlc2t0b3AgPT0gbnVsbCA/IHZvaWQgMCA6IGRlc2t0b3AubmF0aXZlKTtcbiAgICBjb25zdCBpc1dlYiA9IEJvb2xlYW4oZGVza3RvcCA9PSBudWxsID8gdm9pZCAwIDogZGVza3RvcC51bml2ZXJzYWwpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gQm9vbGVhbihtb2JpbGUgPT0gbnVsbCA/IHZvaWQgMCA6IG1vYmlsZS5uYXRpdmUpIHx8IEJvb2xlYW4obW9iaWxlID09IG51bGwgPyB2b2lkIDAgOiBtb2JpbGUudW5pdmVyc2FsKTtcbiAgICByZXR1cm4geyBpc0Rlc2t0b3AsIGlzTW9iaWxlLCBpc1dlYiB9O1xuICB9LFxuICBnb1RvQ29ubmVjdGluZ1ZpZXcod2FsbGV0KSB7XG4gICAgUm91dGVyQ3RybC5zZXREYXRhKHsgV2FsbGV0OiB3YWxsZXQgfSk7XG4gICAgY29uc3QgaXNNb2JpbGVEZXZpY2UgPSBDb3JlVXRpbC5pc01vYmlsZSgpO1xuICAgIGNvbnN0IHsgaXNEZXNrdG9wLCBpc1dlYiwgaXNNb2JpbGUgfSA9IFVpVXRpbC5nZXRDYWNoZWRSb3V0ZXJXYWxsZXRQbGF0Zm9ybXMoKTtcbiAgICBpZiAoaXNNb2JpbGVEZXZpY2UpIHtcbiAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICBSb3V0ZXJDdHJsLnB1c2goXCJNb2JpbGVDb25uZWN0aW5nXCIpO1xuICAgICAgICBpZiAoIUNvcmVVdGlsLmlzQW5kcm9pZCgpICYmIENvcmVVdGlsLmlzVGVsZWdyYW0oKSkge1xuICAgICAgICAgIHRoaXMuaGFuZGxlTW9iaWxlTGlua2luZyh3YWxsZXQsIFwiX2JsYW5rXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzV2ViKSB7XG4gICAgICAgIFJvdXRlckN0cmwucHVzaChcIldlYkNvbm5lY3RpbmdcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXJDdHJsLnB1c2goXCJJbnN0YWxsV2FsbGV0XCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNEZXNrdG9wKSB7XG4gICAgICBSb3V0ZXJDdHJsLnB1c2goXCJEZXNrdG9wQ29ubmVjdGluZ1wiKTtcbiAgICB9IGVsc2UgaWYgKGlzV2ViKSB7XG4gICAgICBSb3V0ZXJDdHJsLnB1c2goXCJXZWJDb25uZWN0aW5nXCIpO1xuICAgIH0gZWxzZSBpZiAoaXNNb2JpbGUpIHtcbiAgICAgIFJvdXRlckN0cmwucHVzaChcIk1vYmlsZVFyY29kZUNvbm5lY3RpbmdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlckN0cmwucHVzaChcIkluc3RhbGxXYWxsZXRcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzdHlsZXMkbSA9IGNzc2Aud2NtLXJvdXRlcntvdmVyZmxvdzpoaWRkZW47d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS53Y20tY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufWA7XG5cbnZhciBfX2RlZlByb3AkcSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjJHEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZGVjb3JhdGVDbGFzcyRxID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjJHEodGFyZ2V0LCBrZXkpIDogdGFyZ2V0O1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxLCBkZWNvcmF0b3I7IGkgPj0gMDsgaS0tKVxuICAgIGlmIChkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgcmVzdWx0ID0gKGtpbmQgPyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHJlc3VsdCkgOiBkZWNvcmF0b3IocmVzdWx0KSkgfHwgcmVzdWx0O1xuICBpZiAoa2luZCAmJiByZXN1bHQpXG4gICAgX19kZWZQcm9wJHEodGFyZ2V0LCBrZXksIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xubGV0IFdjbU1vZGFsUm91dGVyID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gLS0gbGlmZWN5Y2xlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZpZXcgPSBSb3V0ZXJDdHJsLnN0YXRlLnZpZXc7XG4gICAgdGhpcy5wcmV2VmlldyA9IFJvdXRlckN0cmwuc3RhdGUudmlldztcbiAgICAvLyAtLSBwcml2YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSB2b2lkIDA7XG4gICAgdGhpcy5vbGRIZWlnaHQgPSBcIjBweFwiO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSB2b2lkIDA7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IFJvdXRlckN0cmwuc3Vic2NyaWJlKChyb3V0ZXJTdGF0ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMudmlldyAhPT0gcm91dGVyU3RhdGUudmlldykge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUm91dGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoW2NvbmV0bnRdKSA9PiB7XG4gICAgICBjb25zdCBuZXdIZWlnaHQgPSBgJHtjb25ldG50LmNvbnRlbnRSZWN0LmhlaWdodH1weGA7XG4gICAgICBpZiAodGhpcy5vbGRIZWlnaHQgIT09IFwiMHB4XCIpIHtcbiAgICAgICAgYW5pbWF0ZSh0aGlzLnJvdXRlckVsLCB7IGhlaWdodDogW3RoaXMub2xkSGVpZ2h0LCBuZXdIZWlnaHRdIH0sIHsgZHVyYXRpb246IDAuMiB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMub2xkSGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgIH0pO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICAoX2EgPSB0aGlzLnVuc3Vic2NyaWJlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAoX2IgPSB0aGlzLnJlc2l6ZU9ic2VydmVyKSA9PSBudWxsID8gdm9pZCAwIDogX2IuZGlzY29ubmVjdCgpO1xuICB9XG4gIGdldCByb3V0ZXJFbCgpIHtcbiAgICByZXR1cm4gVWlVdGlsLmdldFNoYWRvd1Jvb3RFbGVtZW50KHRoaXMsIFwiLndjbS1yb3V0ZXJcIik7XG4gIH1cbiAgZ2V0IGNvbnRlbnRFbCgpIHtcbiAgICByZXR1cm4gVWlVdGlsLmdldFNoYWRvd1Jvb3RFbGVtZW50KHRoaXMsIFwiLndjbS1jb250ZW50XCIpO1xuICB9XG4gIHZpZXdUZW1wbGF0ZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudmlldykge1xuICAgICAgY2FzZSBcIkNvbm5lY3RXYWxsZXRcIjpcbiAgICAgICAgcmV0dXJuIGh0bWxgPHdjbS1jb25uZWN0LXdhbGxldC12aWV3Pjwvd2NtLWNvbm5lY3Qtd2FsbGV0LXZpZXc+YDtcbiAgICAgIGNhc2UgXCJEZXNrdG9wQ29ubmVjdGluZ1wiOlxuICAgICAgICByZXR1cm4gaHRtbGA8d2NtLWRlc2t0b3AtY29ubmVjdGluZy12aWV3Pjwvd2NtLWRlc2t0b3AtY29ubmVjdGluZy12aWV3PmA7XG4gICAgICBjYXNlIFwiTW9iaWxlQ29ubmVjdGluZ1wiOlxuICAgICAgICByZXR1cm4gaHRtbGA8d2NtLW1vYmlsZS1jb25uZWN0aW5nLXZpZXc+PC93Y20tbW9iaWxlLWNvbm5lY3Rpbmctdmlldz5gO1xuICAgICAgY2FzZSBcIldlYkNvbm5lY3RpbmdcIjpcbiAgICAgICAgcmV0dXJuIGh0bWxgPHdjbS13ZWItY29ubmVjdGluZy12aWV3Pjwvd2NtLXdlYi1jb25uZWN0aW5nLXZpZXc+YDtcbiAgICAgIGNhc2UgXCJNb2JpbGVRcmNvZGVDb25uZWN0aW5nXCI6XG4gICAgICAgIHJldHVybiBodG1sYDx3Y20tbW9iaWxlLXFyLWNvbm5lY3Rpbmctdmlldz48L3djbS1tb2JpbGUtcXItY29ubmVjdGluZy12aWV3PmA7XG4gICAgICBjYXNlIFwiV2FsbGV0RXhwbG9yZXJcIjpcbiAgICAgICAgcmV0dXJuIGh0bWxgPHdjbS13YWxsZXQtZXhwbG9yZXItdmlldz48L3djbS13YWxsZXQtZXhwbG9yZXItdmlldz5gO1xuICAgICAgY2FzZSBcIlFyY29kZVwiOlxuICAgICAgICByZXR1cm4gaHRtbGA8d2NtLXFyY29kZS12aWV3Pjwvd2NtLXFyY29kZS12aWV3PmA7XG4gICAgICBjYXNlIFwiSW5zdGFsbFdhbGxldFwiOlxuICAgICAgICByZXR1cm4gaHRtbGA8d2NtLWluc3RhbGwtd2FsbGV0LXZpZXc+PC93Y20taW5zdGFsbC13YWxsZXQtdmlldz5gO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGh0bWxgPGRpdj5Ob3QgRm91bmQ8L2Rpdj5gO1xuICAgIH1cbiAgfVxuICBhc3luYyBvbkNoYW5nZVJvdXRlKCkge1xuICAgIGF3YWl0IGFuaW1hdGUoXG4gICAgICB0aGlzLnJvdXRlckVsLFxuICAgICAgeyBvcGFjaXR5OiBbMSwgMF0sIHNjYWxlOiBbMSwgMS4wMl0gfSxcbiAgICAgIHsgZHVyYXRpb246IDAuMTUsIGRlbGF5OiAwLjEgfVxuICAgICkuZmluaXNoZWQ7XG4gICAgdGhpcy52aWV3ID0gUm91dGVyQ3RybC5zdGF0ZS52aWV3O1xuICAgIGFuaW1hdGUodGhpcy5yb3V0ZXJFbCwgeyBvcGFjaXR5OiBbMCwgMV0sIHNjYWxlOiBbMC45OSwgMV0gfSwgeyBkdXJhdGlvbjogMC4zNywgZGVsYXk6IDAuMDUgfSk7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJ3Y20tcm91dGVyXCI+PGRpdiBjbGFzcz1cIndjbS1jb250ZW50XCI+JHt0aGlzLnZpZXdUZW1wbGF0ZSgpfTwvZGl2PjwvZGl2PmA7XG4gIH1cbn07XG5XY21Nb2RhbFJvdXRlci5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJG1dO1xuX19kZWNvcmF0ZUNsYXNzJHEoW1xuICBzdGF0ZSgpXG5dLCBXY21Nb2RhbFJvdXRlci5wcm90b3R5cGUsIFwidmlld1wiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRxKFtcbiAgc3RhdGUoKVxuXSwgV2NtTW9kYWxSb3V0ZXIucHJvdG90eXBlLCBcInByZXZWaWV3XCIsIDIpO1xuV2NtTW9kYWxSb3V0ZXIgPSBfX2RlY29yYXRlQ2xhc3MkcShbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tbW9kYWwtcm91dGVyXCIpXG5dLCBXY21Nb2RhbFJvdXRlcik7XG5cbmNvbnN0IHN0eWxlcyRsID0gY3NzYGRpdntoZWlnaHQ6MzZweDt3aWR0aDptYXgtY29udGVudDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzo5cHggMTVweCAxMXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMnB4O2JveC1zaGFkb3c6MCA2cHggMTRweCAtNnB4IHJnYmEoMTAsMTYsMzEsLjMpLDAgMTBweCAzMnB4IC00cHggcmdiYSgxMCwxNiwzMSwuMTUpO3otaW5kZXg6MjtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtwb2ludGVyLWV2ZW50czpub25lO2JhY2tkcm9wLWZpbHRlcjpibHVyKDIwcHgpIHNhdHVyYXRlKDEuOCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KSBzYXR1cmF0ZSgxLjgpO2JvcmRlci1yYWRpdXM6dmFyKC0td2NtLW5vdGlmaWNhdGlvbi1ib3JkZXItcmFkaXVzKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXdjbS1jb2xvci1vdmVybGF5KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1vdmVybGF5KX1zdmd7bWFyZ2luLXJpZ2h0OjVweH1ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCl7ZGl2e2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLWJnLTMpfX0ud2NtLXN1Y2Nlc3MgcGF0aHtmaWxsOnZhcigtLXdjbS1hY2NlbnQtY29sb3IpfS53Y20tZXJyb3IgcGF0aHtmaWxsOnZhcigtLXdjbS1lcnJvci1jb2xvcil9YDtcblxudmFyIF9fZGVmUHJvcCRwID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJHAgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkcCh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkcCh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtTW9kYWxUb2FzdCA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gdm9pZCAwO1xuICAgIHRoaXMudGltZW91dCA9IHZvaWQgMDtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gVG9hc3RDdHJsLnN1YnNjcmliZSgobmV3U3RhdGUpID0+IHtcbiAgICAgIGlmIChuZXdTdGF0ZS5vcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gVG9hc3RDdHJsLmNsb3NlVG9hc3QoKSwgMjIwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHRoaXMudW5zdWJzY3JpYmUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIFRvYXN0Q3RybC5jbG9zZVRvYXN0KCk7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgdmFyaWFudCB9ID0gVG9hc3RDdHJsLnN0YXRlO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBcIndjbS1zdWNjZXNzXCI6IHZhcmlhbnQgPT09IFwic3VjY2Vzc1wiLFxuICAgICAgXCJ3Y20tZXJyb3JcIjogdmFyaWFudCA9PT0gXCJlcnJvclwiXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5vcGVuID8gaHRtbGA8ZGl2IGNsYXNzPVwiJHtjbGFzc01hcChjbGFzc2VzKX1cIj4ke3ZhcmlhbnQgPT09IFwic3VjY2Vzc1wiID8gU3ZnVXRpbC5DSEVDS01BUktfSUNPTiA6IG51bGx9ICR7dmFyaWFudCA9PT0gXCJlcnJvclwiID8gU3ZnVXRpbC5DUk9TU19JQ09OIDogbnVsbH08d2NtLXRleHQgdmFyaWFudD1cInNtYWxsLXJlZ3VsYXJcIj4ke21lc3NhZ2V9PC93Y20tdGV4dD48L2Rpdj5gIDogbnVsbDtcbiAgfVxufTtcbldjbU1vZGFsVG9hc3Quc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlcyRsXTtcbl9fZGVjb3JhdGVDbGFzcyRwKFtcbiAgc3RhdGUoKVxuXSwgV2NtTW9kYWxUb2FzdC5wcm90b3R5cGUsIFwib3BlblwiLCAyKTtcbldjbU1vZGFsVG9hc3QgPSBfX2RlY29yYXRlQ2xhc3MkcChbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tbW9kYWwtdG9hc3RcIilcbl0sIFdjbU1vZGFsVG9hc3QpO1xuXG5jb25zdCBDT05ORUNUSU5HX0VSUk9SX01BUkdJTiA9IDAuMTtcbmNvbnN0IENJUkNMRV9TSVpFX01PRElGSUVSID0gMi41O1xuY29uc3QgUVJDT0RFX01BVFJJWF9NQVJHSU4gPSA3O1xuZnVuY3Rpb24gaXNBZGplY2VudERvdHMoY3ksIG90aGVyQ3ksIGNlbGxTaXplKSB7XG4gIGlmIChjeSA9PT0gb3RoZXJDeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBkaWZmID0gY3kgLSBvdGhlckN5IDwgMCA/IG90aGVyQ3kgLSBjeSA6IGN5IC0gb3RoZXJDeTtcbiAgcmV0dXJuIGRpZmYgPD0gY2VsbFNpemUgKyBDT05ORUNUSU5HX0VSUk9SX01BUkdJTjtcbn1cbmZ1bmN0aW9uIGdldE1hdHJpeCh2YWx1ZSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgY29uc3QgYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgUVJDb2RlVXRpbC5jcmVhdGUodmFsdWUsIHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgfSkubW9kdWxlcy5kYXRhLFxuICAgIDBcbiAgKTtcbiAgY29uc3Qgc3FydCA9IE1hdGguc3FydChhcnIubGVuZ3RoKTtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoXG4gICAgKHJvd3MsIGtleSwgaW5kZXgpID0+IChpbmRleCAlIHNxcnQgPT09IDAgPyByb3dzLnB1c2goW2tleV0pIDogcm93c1tyb3dzLmxlbmd0aCAtIDFdLnB1c2goa2V5KSkgJiYgcm93cyxcbiAgICBbXVxuICApO1xufVxuY29uc3QgUXJDb2RlVXRpbCA9IHtcbiAgZ2VuZXJhdGUodXJpLCBzaXplLCBsb2dvU2l6ZSkge1xuICAgIGNvbnN0IGRvdENvbG9yID0gXCIjMTQxNDE0XCI7XG4gICAgY29uc3QgZWRnZUNvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgY29uc3QgZG90cyA9IFtdO1xuICAgIGNvbnN0IG1hdHJpeCA9IGdldE1hdHJpeCh1cmksIFwiUVwiKTtcbiAgICBjb25zdCBjZWxsU2l6ZSA9IHNpemUgLyBtYXRyaXgubGVuZ3RoO1xuICAgIGNvbnN0IHFyTGlzdCA9IFtcbiAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICB7IHg6IDAsIHk6IDEgfVxuICAgIF07XG4gICAgcXJMaXN0LmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgICBjb25zdCB4MSA9IChtYXRyaXgubGVuZ3RoIC0gUVJDT0RFX01BVFJJWF9NQVJHSU4pICogY2VsbFNpemUgKiB4O1xuICAgICAgY29uc3QgeTEgPSAobWF0cml4Lmxlbmd0aCAtIFFSQ09ERV9NQVRSSVhfTUFSR0lOKSAqIGNlbGxTaXplICogeTtcbiAgICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IDAuNDU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHFyTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBkb3RTaXplID0gY2VsbFNpemUgKiAoUVJDT0RFX01BVFJJWF9NQVJHSU4gLSBpICogMik7XG4gICAgICAgIGRvdHMucHVzaChcbiAgICAgICAgICBzdmckMWA8cmVjdCBmaWxsPVwiJHtpICUgMiA9PT0gMCA/IGRvdENvbG9yIDogZWRnZUNvbG9yfVwiIGhlaWdodD1cIiR7ZG90U2l6ZX1cIiByeD1cIiR7ZG90U2l6ZSAqIGJvcmRlclJhZGl1c31cIiByeT1cIiR7ZG90U2l6ZSAqIGJvcmRlclJhZGl1c31cIiB3aWR0aD1cIiR7ZG90U2l6ZX1cIiB4PVwiJHt4MSArIGNlbGxTaXplICogaX1cIiB5PVwiJHt5MSArIGNlbGxTaXplICogaX1cIj5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY2xlYXJBcmVuYVNpemUgPSBNYXRoLmZsb29yKChsb2dvU2l6ZSArIDI1KSAvIGNlbGxTaXplKTtcbiAgICBjb25zdCBtYXRyaXhNaWRkbGVTdGFydCA9IG1hdHJpeC5sZW5ndGggLyAyIC0gY2xlYXJBcmVuYVNpemUgLyAyO1xuICAgIGNvbnN0IG1hdHJpeE1pZGRsZUVuZCA9IG1hdHJpeC5sZW5ndGggLyAyICsgY2xlYXJBcmVuYVNpemUgLyAyIC0gMTtcbiAgICBjb25zdCBjaXJjbGVzID0gW107XG4gICAgbWF0cml4LmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKF8sIGopID0+IHtcbiAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSkge1xuICAgICAgICAgIGlmICghKGkgPCBRUkNPREVfTUFUUklYX01BUkdJTiAmJiBqIDwgUVJDT0RFX01BVFJJWF9NQVJHSU4gfHwgaSA+IG1hdHJpeC5sZW5ndGggLSAoUVJDT0RFX01BVFJJWF9NQVJHSU4gKyAxKSAmJiBqIDwgUVJDT0RFX01BVFJJWF9NQVJHSU4gfHwgaSA8IFFSQ09ERV9NQVRSSVhfTUFSR0lOICYmIGogPiBtYXRyaXgubGVuZ3RoIC0gKFFSQ09ERV9NQVRSSVhfTUFSR0lOICsgMSkpKSB7XG4gICAgICAgICAgICBpZiAoIShpID4gbWF0cml4TWlkZGxlU3RhcnQgJiYgaSA8IG1hdHJpeE1pZGRsZUVuZCAmJiBqID4gbWF0cml4TWlkZGxlU3RhcnQgJiYgaiA8IG1hdHJpeE1pZGRsZUVuZCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3ggPSBpICogY2VsbFNpemUgKyBjZWxsU2l6ZSAvIDI7XG4gICAgICAgICAgICAgIGNvbnN0IGN5ID0gaiAqIGNlbGxTaXplICsgY2VsbFNpemUgLyAyO1xuICAgICAgICAgICAgICBjaXJjbGVzLnB1c2goW2N4LCBjeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgY2lyY2xlc1RvQ29ubmVjdCA9IHt9O1xuICAgIGNpcmNsZXMuZm9yRWFjaCgoW2N4LCBjeV0pID0+IHtcbiAgICAgIGlmIChjaXJjbGVzVG9Db25uZWN0W2N4XSkge1xuICAgICAgICBjaXJjbGVzVG9Db25uZWN0W2N4XS5wdXNoKGN5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNpcmNsZXNUb0Nvbm5lY3RbY3hdID0gW2N5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZW50cmllcyhjaXJjbGVzVG9Db25uZWN0KS5tYXAoKFtjeCwgY3lzXSkgPT4ge1xuICAgICAgY29uc3QgbmV3Q3lzID0gY3lzLmZpbHRlcihcbiAgICAgICAgKGN5KSA9PiBjeXMuZXZlcnkoKG90aGVyQ3kpID0+ICFpc0FkamVjZW50RG90cyhjeSwgb3RoZXJDeSwgY2VsbFNpemUpKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBbTnVtYmVyKGN4KSwgbmV3Q3lzXTtcbiAgICB9KS5mb3JFYWNoKChbY3gsIGN5c10pID0+IHtcbiAgICAgIGN5cy5mb3JFYWNoKChjeSkgPT4ge1xuICAgICAgICBkb3RzLnB1c2goXG4gICAgICAgICAgc3ZnJDFgPGNpcmNsZSBjeD1cIiR7Y3h9XCIgY3k9XCIke2N5fVwiIGZpbGw9XCIke2RvdENvbG9yfVwiIHI9XCIke2NlbGxTaXplIC8gQ0lSQ0xFX1NJWkVfTU9ESUZJRVJ9XCI+YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgT2JqZWN0LmVudHJpZXMoY2lyY2xlc1RvQ29ubmVjdCkuZmlsdGVyKChbXywgY3lzXSkgPT4gY3lzLmxlbmd0aCA+IDEpLm1hcCgoW2N4LCBjeXNdKSA9PiB7XG4gICAgICBjb25zdCBuZXdDeXMgPSBjeXMuZmlsdGVyKChjeSkgPT4gY3lzLnNvbWUoKG90aGVyQ3kpID0+IGlzQWRqZWNlbnREb3RzKGN5LCBvdGhlckN5LCBjZWxsU2l6ZSkpKTtcbiAgICAgIHJldHVybiBbTnVtYmVyKGN4KSwgbmV3Q3lzXTtcbiAgICB9KS5tYXAoKFtjeCwgY3lzXSkgPT4ge1xuICAgICAgY3lzLnNvcnQoKGEsIGIpID0+IGEgPCBiID8gLTEgOiAxKTtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xuICAgICAgZm9yIChjb25zdCBjeSBvZiBjeXMpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBncm91cHMuZmluZChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5zb21lKChvdGhlckN5KSA9PiBpc0FkamVjZW50RG90cyhjeSwgb3RoZXJDeSwgY2VsbFNpemUpKVxuICAgICAgICApO1xuICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICBncm91cC5wdXNoKGN5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncm91cHMucHVzaChbY3ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFtjeCwgZ3JvdXBzLm1hcCgoaXRlbSkgPT4gW2l0ZW1bMF0sIGl0ZW1baXRlbS5sZW5ndGggLSAxXV0pXTtcbiAgICB9KS5mb3JFYWNoKChbY3gsIGdyb3Vwc10pID0+IHtcbiAgICAgIGdyb3Vwcy5mb3JFYWNoKChbeTEsIHkyXSkgPT4ge1xuICAgICAgICBkb3RzLnB1c2goXG4gICAgICAgICAgc3ZnJDFgPGxpbmUgeDE9XCIke2N4fVwiIHgyPVwiJHtjeH1cIiB5MT1cIiR7eTF9XCIgeTI9XCIke3kyfVwiIHN0cm9rZT1cIiR7ZG90Q29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiJHtjZWxsU2l6ZSAvIChDSVJDTEVfU0laRV9NT0RJRklFUiAvIDIpfVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIj5gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZG90cztcbiAgfVxufTtcblxuY29uc3Qgc3R5bGVzJGsgPSBjc3NgQGtleWZyYW1lcyBmYWRlSW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1kaXZ7cG9zaXRpb246cmVsYXRpdmU7dXNlci1zZWxlY3Q6bm9uZTtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjthc3BlY3QtcmF0aW86MS8xO2FuaW1hdGlvbjpmYWRlSW4gZWFzZSAuMnN9LndjbS1kYXJre2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOnZhcigtLXdjbS1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7cGFkZGluZzoxOHB4O2JveC1zaGFkb3c6MCAycHggNXB4ICMwMDB9c3ZnOmZpcnN0LWNoaWxkLHdjbS13YWxsZXQtaW1hZ2V7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpfXdjbS13YWxsZXQtaW1hZ2V7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKX13Y20td2FsbGV0LWltYWdle3dpZHRoOjI1JTtoZWlnaHQ6MjUlO2JvcmRlci1yYWRpdXM6dmFyKC0td2NtLXdhbGxldC1pY29uLWJvcmRlci1yYWRpdXMpfXN2ZzpmaXJzdC1jaGlsZHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKC45KX1zdmc6Zmlyc3QtY2hpbGQgcGF0aDpmaXJzdC1jaGlsZHtmaWxsOnZhcigtLXdjbS1hY2NlbnQtY29sb3IpfXN2ZzpmaXJzdC1jaGlsZCBwYXRoOmxhc3QtY2hpbGR7c3Ryb2tlOnZhcigtLXdjbS1jb2xvci1vdmVybGF5KX1gO1xuXG52YXIgX19kZWZQcm9wJG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyRvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkbyA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyRvKHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCRvKHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21RckNvZGUgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudXJpID0gXCJcIjtcbiAgICB0aGlzLnNpemUgPSAwO1xuICAgIHRoaXMuaW1hZ2VJZCA9IHZvaWQgMDtcbiAgICB0aGlzLndhbGxldElkID0gdm9pZCAwO1xuICAgIHRoaXMuaW1hZ2VVcmwgPSB2b2lkIDA7XG4gIH1cbiAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgc3ZnVGVtcGxhdGUoKSB7XG4gICAgY29uc3QgaXNMaWdodE1vZGUgPSBUaGVtZUN0cmwuc3RhdGUudGhlbWVNb2RlID09PSBcImxpZ2h0XCI7XG4gICAgY29uc3Qgc2l6ZSA9IGlzTGlnaHRNb2RlID8gdGhpcy5zaXplIDogdGhpcy5zaXplIC0gMTggKiAyO1xuICAgIHJldHVybiBzdmckMWA8c3ZnIGhlaWdodD1cIiR7c2l6ZX1cIiB3aWR0aD1cIiR7c2l6ZX1cIj4ke1FyQ29kZVV0aWwuZ2VuZXJhdGUodGhpcy51cmksIHNpemUsIHNpemUgLyA0KX08L3N2Zz5gO1xuICB9XG4gIC8vIC0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJ3Y20tZGFya1wiOiBUaGVtZUN0cmwuc3RhdGUudGhlbWVNb2RlID09PSBcImRhcmtcIlxuICAgIH07XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBzdHlsZT1cIiR7YHdpZHRoOiAke3RoaXMuc2l6ZX1weGB9XCIgY2xhc3M9XCIke2NsYXNzTWFwKGNsYXNzZXMpfVwiPiR7dGhpcy53YWxsZXRJZCB8fCB0aGlzLmltYWdlVXJsID8gaHRtbGA8d2NtLXdhbGxldC1pbWFnZSB3YWxsZXRJZD1cIiR7aWZEZWZpbmVkKHRoaXMud2FsbGV0SWQpfVwiIGltYWdlSWQ9XCIke2lmRGVmaW5lZCh0aGlzLmltYWdlSWQpfVwiIGltYWdlVXJsPVwiJHtpZkRlZmluZWQodGhpcy5pbWFnZVVybCl9XCI+PC93Y20td2FsbGV0LWltYWdlPmAgOiBTdmdVdGlsLldBTExFVF9DT05ORUNUX0lDT05fQ09MT1JFRH0gJHt0aGlzLnN2Z1RlbXBsYXRlKCl9PC9kaXY+YDtcbiAgfVxufTtcbldjbVFyQ29kZS5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJGtdO1xuX19kZWNvcmF0ZUNsYXNzJG8oW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21RckNvZGUucHJvdG90eXBlLCBcInVyaVwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRvKFtcbiAgcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbl0sIFdjbVFyQ29kZS5wcm90b3R5cGUsIFwic2l6ZVwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRvKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtUXJDb2RlLnByb3RvdHlwZSwgXCJpbWFnZUlkXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJG8oW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21RckNvZGUucHJvdG90eXBlLCBcIndhbGxldElkXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJG8oW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21RckNvZGUucHJvdG90eXBlLCBcImltYWdlVXJsXCIsIDIpO1xuV2NtUXJDb2RlID0gX19kZWNvcmF0ZUNsYXNzJG8oW1xuICBjdXN0b21FbGVtZW50KFwid2NtLXFyY29kZVwiKVxuXSwgV2NtUXJDb2RlKTtcblxuY29uc3Qgc3R5bGVzJGogPSBjc3NgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjI4cHg7d2lkdGg6ODAlfWlucHV0e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bGluZS1oZWlnaHQ6MjhweCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czp2YXIoLS13Y20taW5wdXQtYm9yZGVyLXJhZGl1cyk7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LCdTZWdvZSBVSScsUm9ib3RvLFVidW50dSwnSGVsdmV0aWNhIE5ldWUnLHNhbnMtc2VyaWY7Zm9udC1mZWF0dXJlLXNldHRpbmdzOidjYXNlJyBvbjtmb250LXdlaWdodDo1MDA7Zm9udC1zaXplOjE2cHg7bGV0dGVyLXNwYWNpbmc6LS4wM2VtO3BhZGRpbmc6MCAxMHB4IDAgMzRweDt0cmFuc2l0aW9uOi4ycyBhbGwgZWFzZTtjb2xvcjp2YXIoLS13Y20tY29sb3ItZmctMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS13Y20tY29sb3ItYmctMyk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpO2NhcmV0LWNvbG9yOnZhcigtLXdjbS1hY2NlbnQtY29sb3IpfWlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS13Y20tY29sb3ItZmctMil9c3Zne2xlZnQ6MTBweDt0b3A6NHB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjBweDtoZWlnaHQ6MjBweH1pbnB1dDpmb2N1cy13aXRoaW57Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0td2NtLWFjY2VudC1jb2xvcil9cGF0aHtmaWxsOnZhcigtLXdjbS1jb2xvci1mZy0yKX1gO1xuXG52YXIgX19kZWZQcm9wJG4gPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyRuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkbiA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyRuKHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCRuKHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21TZWFyY2hJbnB1dCA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5vbkNoYW5nZSA9ICgpID0+IG51bGw7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxpbnB1dCB0eXBlPVwidGV4dFwiIEBpbnB1dD1cIiR7dGhpcy5vbkNoYW5nZX1cIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCB3YWxsZXRzXCI+ICR7U3ZnVXRpbC5TRUFSQ0hfSUNPTn1gO1xuICB9XG59O1xuV2NtU2VhcmNoSW5wdXQuc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlcyRqXTtcbl9fZGVjb3JhdGVDbGFzcyRuKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtU2VhcmNoSW5wdXQucHJvdG90eXBlLCBcIm9uQ2hhbmdlXCIsIDIpO1xuV2NtU2VhcmNoSW5wdXQgPSBfX2RlY29yYXRlQ2xhc3MkbihbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tc2VhcmNoLWlucHV0XCIpXG5dLCBXY21TZWFyY2hJbnB1dCk7XG5cbmNvbnN0IHN0eWxlcyRpID0gY3NzYEBrZXlmcmFtZXMgcm90YXRlezEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGRhc2h7MCV7c3Ryb2tlLWRhc2hhcnJheToxLDE1MDtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5OjkwLDE1MDtzdHJva2UtZGFzaG9mZnNldDotMzV9MTAwJXtzdHJva2UtZGFzaGFycmF5OjkwLDE1MDtzdHJva2UtZGFzaG9mZnNldDotMTI0fX1zdmd7YW5pbWF0aW9uOnJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfXN2ZyBjaXJjbGV7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7YW5pbWF0aW9uOmRhc2ggMS41cyBlYXNlIGluZmluaXRlO3N0cm9rZTp2YXIoLS13Y20tYWNjZW50LWNvbG9yKX1gO1xuXG52YXIgX19kZWZQcm9wJG0gPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyRtID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkbSA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyRtKHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCRtKHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21TcGlubmVyID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxzdmcgdmlld0JveD1cIjAgMCA1MCA1MFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxjaXJjbGUgY3g9XCIyNVwiIGN5PVwiMjVcIiByPVwiMjBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2U9XCIjZmZmXCIvPjwvc3ZnPmA7XG4gIH1cbn07XG5XY21TcGlubmVyLnN0eWxlcyA9IFtUaGVtZVV0aWwuZ2xvYmFsQ3NzLCBzdHlsZXMkaV07XG5XY21TcGlubmVyID0gX19kZWNvcmF0ZUNsYXNzJG0oW1xuICBjdXN0b21FbGVtZW50KFwid2NtLXNwaW5uZXJcIilcbl0sIFdjbVNwaW5uZXIpO1xuXG5jb25zdCBzdHlsZXMkaCA9IGNzc2BzcGFue2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtZmFtaWx5OnZhcigtLXdjbS1mb250LWZhbWlseSk7Zm9udC1mZWF0dXJlLXNldHRpbmdzOnZhcigtLXdjbS1mb250LWZlYXR1cmUtc2V0dGluZ3MpfS53Y20teHNtYWxsLWJvbGR7Zm9udC1mYW1pbHk6dmFyKC0td2NtLXRleHQteHNtYWxsLWJvbGQtZm9udC1mYW1pbHkpO2ZvbnQtd2VpZ2h0OnZhcigtLXdjbS10ZXh0LXhzbWFsbC1ib2xkLXdlaWdodCk7Zm9udC1zaXplOnZhcigtLXdjbS10ZXh0LXhzbWFsbC1ib2xkLXNpemUpO2xpbmUtaGVpZ2h0OnZhcigtLXdjbS10ZXh0LXhzbWFsbC1ib2xkLWxpbmUtaGVpZ2h0KTtsZXR0ZXItc3BhY2luZzp2YXIoLS13Y20tdGV4dC14c21hbGwtYm9sZC1sZXR0ZXItc3BhY2luZyk7dGV4dC10cmFuc2Zvcm06dmFyKC0td2NtLXRleHQteHNtYWxsLWJvbGQtdGV4dC10cmFuc2Zvcm0pfS53Y20teHNtYWxsLXJlZ3VsYXJ7Zm9udC1mYW1pbHk6dmFyKC0td2NtLXRleHQteHNtYWxsLXJlZ3VsYXItZm9udC1mYW1pbHkpO2ZvbnQtd2VpZ2h0OnZhcigtLXdjbS10ZXh0LXhzbWFsbC1yZWd1bGFyLXdlaWdodCk7Zm9udC1zaXplOnZhcigtLXdjbS10ZXh0LXhzbWFsbC1yZWd1bGFyLXNpemUpO2xpbmUtaGVpZ2h0OnZhcigtLXdjbS10ZXh0LXhzbWFsbC1yZWd1bGFyLWxpbmUtaGVpZ2h0KTtsZXR0ZXItc3BhY2luZzp2YXIoLS13Y20tdGV4dC14c21hbGwtcmVndWxhci1sZXR0ZXItc3BhY2luZyk7dGV4dC10cmFuc2Zvcm06dmFyKC0td2NtLXRleHQteHNtYWxsLXJlZ3VsYXItdGV4dC10cmFuc2Zvcm0pfS53Y20tc21hbGwtdGhpbntmb250LWZhbWlseTp2YXIoLS13Y20tdGV4dC1zbWFsbC10aGluLWZvbnQtZmFtaWx5KTtmb250LXdlaWdodDp2YXIoLS13Y20tdGV4dC1zbWFsbC10aGluLXdlaWdodCk7Zm9udC1zaXplOnZhcigtLXdjbS10ZXh0LXNtYWxsLXRoaW4tc2l6ZSk7bGluZS1oZWlnaHQ6dmFyKC0td2NtLXRleHQtc21hbGwtdGhpbi1saW5lLWhlaWdodCk7bGV0dGVyLXNwYWNpbmc6dmFyKC0td2NtLXRleHQtc21hbGwtdGhpbi1sZXR0ZXItc3BhY2luZyk7dGV4dC10cmFuc2Zvcm06dmFyKC0td2NtLXRleHQtc21hbGwtdGhpbi10ZXh0LXRyYW5zZm9ybSl9LndjbS1zbWFsbC1yZWd1bGFye2ZvbnQtZmFtaWx5OnZhcigtLXdjbS10ZXh0LXNtYWxsLXJlZ3VsYXItZm9udC1mYW1pbHkpO2ZvbnQtd2VpZ2h0OnZhcigtLXdjbS10ZXh0LXNtYWxsLXJlZ3VsYXItd2VpZ2h0KTtmb250LXNpemU6dmFyKC0td2NtLXRleHQtc21hbGwtcmVndWxhci1zaXplKTtsaW5lLWhlaWdodDp2YXIoLS13Y20tdGV4dC1zbWFsbC1yZWd1bGFyLWxpbmUtaGVpZ2h0KTtsZXR0ZXItc3BhY2luZzp2YXIoLS13Y20tdGV4dC1zbWFsbC1yZWd1bGFyLWxldHRlci1zcGFjaW5nKTt0ZXh0LXRyYW5zZm9ybTp2YXIoLS13Y20tdGV4dC1zbWFsbC1yZWd1bGFyLXRleHQtdHJhbnNmb3JtKX0ud2NtLW1lZGl1bS1yZWd1bGFye2ZvbnQtZmFtaWx5OnZhcigtLXdjbS10ZXh0LW1lZGl1bS1yZWd1bGFyLWZvbnQtZmFtaWx5KTtmb250LXdlaWdodDp2YXIoLS13Y20tdGV4dC1tZWRpdW0tcmVndWxhci13ZWlnaHQpO2ZvbnQtc2l6ZTp2YXIoLS13Y20tdGV4dC1tZWRpdW0tcmVndWxhci1zaXplKTtsaW5lLWhlaWdodDp2YXIoLS13Y20tdGV4dC1tZWRpdW0tcmVndWxhci1saW5lLWhlaWdodCk7bGV0dGVyLXNwYWNpbmc6dmFyKC0td2NtLXRleHQtbWVkaXVtLXJlZ3VsYXItbGV0dGVyLXNwYWNpbmcpO3RleHQtdHJhbnNmb3JtOnZhcigtLXdjbS10ZXh0LW1lZGl1bS1yZWd1bGFyLXRleHQtdHJhbnNmb3JtKX0ud2NtLWJpZy1ib2xke2ZvbnQtZmFtaWx5OnZhcigtLXdjbS10ZXh0LWJpZy1ib2xkLWZvbnQtZmFtaWx5KTtmb250LXdlaWdodDp2YXIoLS13Y20tdGV4dC1iaWctYm9sZC13ZWlnaHQpO2ZvbnQtc2l6ZTp2YXIoLS13Y20tdGV4dC1iaWctYm9sZC1zaXplKTtsaW5lLWhlaWdodDp2YXIoLS13Y20tdGV4dC1iaWctYm9sZC1saW5lLWhlaWdodCk7bGV0dGVyLXNwYWNpbmc6dmFyKC0td2NtLXRleHQtYmlnLWJvbGQtbGV0dGVyLXNwYWNpbmcpO3RleHQtdHJhbnNmb3JtOnZhcigtLXdjbS10ZXh0LWJpZy1ib2xkLXRleHQtdHJhbnNmb3JtKX06aG9zdCgqKXtjb2xvcjp2YXIoLS13Y20tY29sb3ItZmctMSl9LndjbS1jb2xvci1wcmltYXJ5e2NvbG9yOnZhcigtLXdjbS1jb2xvci1mZy0xKX0ud2NtLWNvbG9yLXNlY29uZGFyeXtjb2xvcjp2YXIoLS13Y20tY29sb3ItZmctMil9LndjbS1jb2xvci10ZXJ0aWFyeXtjb2xvcjp2YXIoLS13Y20tY29sb3ItZmctMyl9LndjbS1jb2xvci1pbnZlcnNle2NvbG9yOnZhcigtLXdjbS1hY2NlbnQtZmlsbC1jb2xvcil9LndjbS1jb2xvci1hY2NudHtjb2xvcjp2YXIoLS13Y20tYWNjZW50LWNvbG9yKX0ud2NtLWNvbG9yLWVycm9ye2NvbG9yOnZhcigtLXdjbS1lcnJvci1jb2xvcil9YDtcblxudmFyIF9fZGVmUHJvcCRsID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkbCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJGwgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkbCh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkbCh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtVGV4dCA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy52YXJpYW50ID0gXCJtZWRpdW0tcmVndWxhclwiO1xuICAgIHRoaXMuY29sb3IgPSBcInByaW1hcnlcIjtcbiAgfVxuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFwid2NtLWJpZy1ib2xkXCI6IHRoaXMudmFyaWFudCA9PT0gXCJiaWctYm9sZFwiLFxuICAgICAgXCJ3Y20tbWVkaXVtLXJlZ3VsYXJcIjogdGhpcy52YXJpYW50ID09PSBcIm1lZGl1bS1yZWd1bGFyXCIsXG4gICAgICBcIndjbS1zbWFsbC1yZWd1bGFyXCI6IHRoaXMudmFyaWFudCA9PT0gXCJzbWFsbC1yZWd1bGFyXCIsXG4gICAgICBcIndjbS1zbWFsbC10aGluXCI6IHRoaXMudmFyaWFudCA9PT0gXCJzbWFsbC10aGluXCIsXG4gICAgICBcIndjbS14c21hbGwtcmVndWxhclwiOiB0aGlzLnZhcmlhbnQgPT09IFwieHNtYWxsLXJlZ3VsYXJcIixcbiAgICAgIFwid2NtLXhzbWFsbC1ib2xkXCI6IHRoaXMudmFyaWFudCA9PT0gXCJ4c21hbGwtYm9sZFwiLFxuICAgICAgXCJ3Y20tY29sb3ItcHJpbWFyeVwiOiB0aGlzLmNvbG9yID09PSBcInByaW1hcnlcIixcbiAgICAgIFwid2NtLWNvbG9yLXNlY29uZGFyeVwiOiB0aGlzLmNvbG9yID09PSBcInNlY29uZGFyeVwiLFxuICAgICAgXCJ3Y20tY29sb3ItdGVydGlhcnlcIjogdGhpcy5jb2xvciA9PT0gXCJ0ZXJ0aWFyeVwiLFxuICAgICAgXCJ3Y20tY29sb3ItaW52ZXJzZVwiOiB0aGlzLmNvbG9yID09PSBcImludmVyc2VcIixcbiAgICAgIFwid2NtLWNvbG9yLWFjY250XCI6IHRoaXMuY29sb3IgPT09IFwiYWNjZW50XCIsXG4gICAgICBcIndjbS1jb2xvci1lcnJvclwiOiB0aGlzLmNvbG9yID09PSBcImVycm9yXCJcbiAgICB9O1xuICAgIHJldHVybiBodG1sYDxzcGFuPjxzbG90IGNsYXNzPVwiJHtjbGFzc01hcChjbGFzc2VzKX1cIj48L3Nsb3Q+PC9zcGFuPmA7XG4gIH1cbn07XG5XY21UZXh0LnN0eWxlcyA9IFtUaGVtZVV0aWwuZ2xvYmFsQ3NzLCBzdHlsZXMkaF07XG5fX2RlY29yYXRlQ2xhc3MkbChbXG4gIHByb3BlcnR5KClcbl0sIFdjbVRleHQucHJvdG90eXBlLCBcInZhcmlhbnRcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkbChbXG4gIHByb3BlcnR5KClcbl0sIFdjbVRleHQucHJvdG90eXBlLCBcImNvbG9yXCIsIDIpO1xuV2NtVGV4dCA9IF9fZGVjb3JhdGVDbGFzcyRsKFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS10ZXh0XCIpXG5dLCBXY21UZXh0KTtcblxuY29uc3Qgc3R5bGVzJGcgPSBjc3NgYnV0dG9ue3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czp2YXIoLS13Y20tYnV0dG9uLWhvdmVyLWhpZ2hsaWdodC1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydH1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfUBtZWRpYShob3Zlcjpob3Zlcil7YnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfX1idXR0b24+ZGl2e3dpZHRoOjgwcHg7cGFkZGluZzo1cHggMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcn13Y20tdGV4dHt3aWR0aDoxMDAlO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LWFsaWduOmNlbnRlcn13Y20td2FsbGV0LWltYWdle2hlaWdodDo2MHB4O3dpZHRoOjYwcHg7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7Ym9yZGVyLXJhZGl1czp2YXIoLS13Y20td2FsbGV0LWljb24tYm9yZGVyLXJhZGl1cyk7bWFyZ2luLWJvdHRvbTo1cHh9LndjbS1zdWJsYWJlbHttYXJnaW4tdG9wOjJweH1gO1xuXG52YXIgX19kZWZQcm9wJGsgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyRrID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkayA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyRrKHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCRrKHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21XYWxsZXRCdXR0b24gPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMub25DbGljayA9ICgpID0+IG51bGw7XG4gICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICB0aGlzLndhbGxldElkID0gXCJcIjtcbiAgICB0aGlzLmxhYmVsID0gdm9pZCAwO1xuICAgIHRoaXMuaW1hZ2VJZCA9IHZvaWQgMDtcbiAgICB0aGlzLmluc3RhbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVjZW50ID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgc3VibGFiZWxUZW1wbGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWNlbnQpIHtcbiAgICAgIHJldHVybiBodG1sYDx3Y20tdGV4dCBjbGFzcz1cIndjbS1zdWJsYWJlbFwiIHZhcmlhbnQ9XCJ4c21hbGwtYm9sZFwiIGNvbG9yPVwidGVydGlhcnlcIj5SRUNFTlQ8L3djbS10ZXh0PmA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbGxlZCkge1xuICAgICAgcmV0dXJuIGh0bWxgPHdjbS10ZXh0IGNsYXNzPVwid2NtLXN1YmxhYmVsXCIgdmFyaWFudD1cInhzbWFsbC1ib2xkXCIgY29sb3I9XCJ0ZXJ0aWFyeVwiPklOU1RBTExFRDwvd2NtLXRleHQ+YDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgRXZlbnRzQ3RybC5jbGljayh7IG5hbWU6IFwiV0FMTEVUX0JVVFRPTlwiLCB3YWxsZXRJZDogdGhpcy53YWxsZXRJZCB9KTtcbiAgICB0aGlzLm9uQ2xpY2soKTtcbiAgfVxuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBodG1sYDxidXR0b24gQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XCI+PGRpdj48d2NtLXdhbGxldC1pbWFnZSB3YWxsZXRJZD1cIiR7dGhpcy53YWxsZXRJZH1cIiBpbWFnZUlkPVwiJHtpZkRlZmluZWQodGhpcy5pbWFnZUlkKX1cIj48L3djbS13YWxsZXQtaW1hZ2U+PHdjbS10ZXh0IHZhcmlhbnQ9XCJ4c21hbGwtcmVndWxhclwiPiR7KF9hID0gdGhpcy5sYWJlbCkgIT0gbnVsbCA/IF9hIDogVWlVdGlsLmdldFdhbGxldE5hbWUodGhpcy5uYW1lLCB0cnVlKX08L3djbS10ZXh0PiR7dGhpcy5zdWJsYWJlbFRlbXBsYXRlKCl9PC9kaXY+PC9idXR0b24+YDtcbiAgfVxufTtcbldjbVdhbGxldEJ1dHRvbi5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJGddO1xuX19kZWNvcmF0ZUNsYXNzJGsoW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21XYWxsZXRCdXR0b24ucHJvdG90eXBlLCBcIm9uQ2xpY2tcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkayhbXG4gIHByb3BlcnR5KClcbl0sIFdjbVdhbGxldEJ1dHRvbi5wcm90b3R5cGUsIFwibmFtZVwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRrKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtV2FsbGV0QnV0dG9uLnByb3RvdHlwZSwgXCJ3YWxsZXRJZFwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRrKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtV2FsbGV0QnV0dG9uLnByb3RvdHlwZSwgXCJsYWJlbFwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRrKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtV2FsbGV0QnV0dG9uLnByb3RvdHlwZSwgXCJpbWFnZUlkXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJGsoW1xuICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFdjbVdhbGxldEJ1dHRvbi5wcm90b3R5cGUsIFwiaW5zdGFsbGVkXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJGsoW1xuICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFdjbVdhbGxldEJ1dHRvbi5wcm90b3R5cGUsIFwicmVjZW50XCIsIDIpO1xuV2NtV2FsbGV0QnV0dG9uID0gX19kZWNvcmF0ZUNsYXNzJGsoW1xuICBjdXN0b21FbGVtZW50KFwid2NtLXdhbGxldC1idXR0b25cIilcbl0sIFdjbVdhbGxldEJ1dHRvbik7XG5cbmNvbnN0IHN0eWxlcyRmID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2t9ZGl2e292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOmluaGVyaXQ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1vdmVybGF5KX1zdmd7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1kaXY6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7Ym9yZGVyLXJhZGl1czppbmhlcml0O2JvcmRlcjoxcHggc29saWQgdmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfWRpdiBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyO29iamVjdC1wb3NpdGlvbjpjZW50ZXJ9I3dhbGxldC1wbGFjZWhvbGRlci1maWxse2ZpbGw6dmFyKC0td2NtLWNvbG9yLWJnLTMpfSN3YWxsZXQtcGxhY2Vob2xkZXItZGFzaHtzdHJva2U6dmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfWA7XG5cbnZhciBfX2RlZlByb3AkaiA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjJGogPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZGVjb3JhdGVDbGFzcyRqID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjJGoodGFyZ2V0LCBrZXkpIDogdGFyZ2V0O1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxLCBkZWNvcmF0b3I7IGkgPj0gMDsgaS0tKVxuICAgIGlmIChkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgcmVzdWx0ID0gKGtpbmQgPyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHJlc3VsdCkgOiBkZWNvcmF0b3IocmVzdWx0KSkgfHwgcmVzdWx0O1xuICBpZiAoa2luZCAmJiByZXN1bHQpXG4gICAgX19kZWZQcm9wJGoodGFyZ2V0LCBrZXksIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xubGV0IFdjbVdhbGxldEltYWdlID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLndhbGxldElkID0gXCJcIjtcbiAgICB0aGlzLmltYWdlSWQgPSB2b2lkIDA7XG4gICAgdGhpcy5pbWFnZVVybCA9IHZvaWQgMDtcbiAgfVxuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHNyYyA9ICgoX2EgPSB0aGlzLmltYWdlVXJsKSA9PSBudWxsID8gdm9pZCAwIDogX2EubGVuZ3RoKSA/IHRoaXMuaW1hZ2VVcmwgOiBVaVV0aWwuZ2V0V2FsbGV0SWNvbih7IGlkOiB0aGlzLndhbGxldElkLCBpbWFnZV9pZDogdGhpcy5pbWFnZUlkIH0pO1xuICAgIHJldHVybiBodG1sYCR7c3JjLmxlbmd0aCA/IGh0bWxgPGRpdj48aW1nIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgc3JjPVwiJHtzcmN9XCIgYWx0PVwiJHt0aGlzLmlkfVwiPjwvZGl2PmAgOiBTdmdVdGlsLldBTExFVF9QTEFDRUhPTERFUn1gO1xuICB9XG59O1xuV2NtV2FsbGV0SW1hZ2Uuc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlcyRmXTtcbl9fZGVjb3JhdGVDbGFzcyRqKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtV2FsbGV0SW1hZ2UucHJvdG90eXBlLCBcIndhbGxldElkXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJGooW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21XYWxsZXRJbWFnZS5wcm90b3R5cGUsIFwiaW1hZ2VJZFwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRqKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtV2FsbGV0SW1hZ2UucHJvdG90eXBlLCBcImltYWdlVXJsXCIsIDIpO1xuV2NtV2FsbGV0SW1hZ2UgPSBfX2RlY29yYXRlQ2xhc3MkaihbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20td2FsbGV0LWltYWdlXCIpXG5dLCBXY21XYWxsZXRJbWFnZSk7XG5cbnZhciBfX2RlZlByb3AkaSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjJGkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZGVjb3JhdGVDbGFzcyRpID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjJGkodGFyZ2V0LCBrZXkpIDogdGFyZ2V0O1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxLCBkZWNvcmF0b3I7IGkgPj0gMDsgaS0tKVxuICAgIGlmIChkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgcmVzdWx0ID0gKGtpbmQgPyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHJlc3VsdCkgOiBkZWNvcmF0b3IocmVzdWx0KSkgfHwgcmVzdWx0O1xuICBpZiAoa2luZCAmJiByZXN1bHQpXG4gICAgX19kZWZQcm9wJGkodGFyZ2V0LCBrZXksIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xubGV0IFdjbUV4cGxvcmVyQ29udGV4dCA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIC0tIGxpZmVjeWNsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcmVsb2FkID0gdHJ1ZTtcbiAgICB0aGlzLnByZWxvYWREYXRhKCk7XG4gIH1cbiAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgYXN5bmMgbG9hZEltYWdlcyhpbWFnZXMpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGltYWdlcyA9PSBudWxsID8gdm9pZCAwIDogaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChpbWFnZXMubWFwKGFzeW5jICh1cmwpID0+IFVpVXRpbC5wcmVsb2FkSW1hZ2UodXJsKSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhcIlVuc3VjY2Vzc2Z1bCBhdHRlbXB0IGF0IHByZWxvYWRpbmcgc29tZSBpbWFnZXNcIiwgaW1hZ2VzKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgcHJlbG9hZExpc3RpbmdzKCkge1xuICAgIGlmIChDb25maWdDdHJsLnN0YXRlLmVuYWJsZUV4cGxvcmVyKSB7XG4gICAgICBhd2FpdCBFeHBsb3JlckN0cmwuZ2V0UmVjb21lbmRlZFdhbGxldHMoKTtcbiAgICAgIE9wdGlvbnNDdHJsLnNldElzRGF0YUxvYWRlZCh0cnVlKTtcbiAgICAgIGNvbnN0IHsgcmVjb21lbmRlZFdhbGxldHMgfSA9IEV4cGxvcmVyQ3RybC5zdGF0ZTtcbiAgICAgIGNvbnN0IHdhbGxldEltZ3MgPSByZWNvbWVuZGVkV2FsbGV0cy5tYXAoKHdhbGxldCkgPT4gVWlVdGlsLmdldFdhbGxldEljb24od2FsbGV0KSk7XG4gICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZXMod2FsbGV0SW1ncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9wdGlvbnNDdHJsLnNldElzRGF0YUxvYWRlZCh0cnVlKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgcHJlbG9hZEN1c3RvbUltYWdlcygpIHtcbiAgICBjb25zdCBpbWFnZXMgPSBVaVV0aWwuZ2V0Q3VzdG9tSW1hZ2VVcmxzKCk7XG4gICAgYXdhaXQgdGhpcy5sb2FkSW1hZ2VzKGltYWdlcyk7XG4gIH1cbiAgYXN5bmMgcHJlbG9hZERhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLnByZWxvYWQpIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnByZWxvYWRMaXN0aW5ncygpLCB0aGlzLnByZWxvYWRDdXN0b21JbWFnZXMoKV0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgVG9hc3RDdHJsLm9wZW5Ub2FzdChcIkZhaWxlZCBwcmVsb2FkaW5nXCIsIFwiZXJyb3JcIik7XG4gICAgfVxuICB9XG59O1xuX19kZWNvcmF0ZUNsYXNzJGkoW1xuICBzdGF0ZSgpXG5dLCBXY21FeHBsb3JlckNvbnRleHQucHJvdG90eXBlLCBcInByZWxvYWRcIiwgMik7XG5XY21FeHBsb3JlckNvbnRleHQgPSBfX2RlY29yYXRlQ2xhc3MkaShbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tZXhwbG9yZXItY29udGV4dFwiKVxuXSwgV2NtRXhwbG9yZXJDb250ZXh0KTtcblxudmFyIF9fZGVmUHJvcCRoID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkaCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJGggPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkaCh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkaCh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtVGhlbWVDb250ZXh0ID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gLS0gbGlmZWN5Y2xlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyAtLSBwcml2YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIHRoaXMudW5zdWJzY3JpYmVUaGVtZSA9IHZvaWQgMDtcbiAgICBUaGVtZVV0aWwuc2V0VGhlbWUoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlVGhlbWUgPSBUaGVtZUN0cmwuc3Vic2NyaWJlKFRoZW1lVXRpbC5zZXRUaGVtZSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHRoaXMudW5zdWJzY3JpYmVUaGVtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gIH1cbn07XG5XY21UaGVtZUNvbnRleHQgPSBfX2RlY29yYXRlQ2xhc3MkaChbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tdGhlbWUtY29udGV4dFwiKVxuXSwgV2NtVGhlbWVDb250ZXh0KTtcblxuY29uc3Qgc3R5bGVzJGUgPSBjc3NgQGtleWZyYW1lcyBzY3JvbGx7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC03MHB4ICogOSksMCwwKX19LndjbS1zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3cteDpoaWRkZW47cGFkZGluZzoxMHB4IDA7bWFyZ2luOjAgLTIwcHg7d2lkdGg6Y2FsYygxMDAlICsgNDBweCl9LndjbS10cmFja3tkaXNwbGF5OmZsZXg7d2lkdGg6Y2FsYyg3MHB4ICogMTgpO2FuaW1hdGlvbjpzY3JvbGwgMjBzIGxpbmVhciBpbmZpbml0ZTtvcGFjaXR5Oi43fS53Y20tdHJhY2sgc3Zne21hcmdpbjowIDVweH13Y20td2FsbGV0LWltYWdle3dpZHRoOjYwcHg7aGVpZ2h0OjYwcHg7bWFyZ2luOjAgNXB4O2JvcmRlci1yYWRpdXM6dmFyKC0td2NtLXdhbGxldC1pY29uLWJvcmRlci1yYWRpdXMpfS53Y20tZ3JpZHtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg0LDgwcHgpO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS53Y20tdGl0bGV7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjEwcHh9LndjbS10aXRsZSBzdmd7bWFyZ2luLXJpZ2h0OjZweH0ud2NtLXRpdGxlIHBhdGh7ZmlsbDp2YXIoLS13Y20tYWNjZW50LWNvbG9yKX13Y20tbW9kYWwtZm9vdGVyIC53Y20tdGl0bGV7cGFkZGluZzowIDEwcHh9d2NtLWJ1dHRvbi1iaWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO2ZpbHRlcjpkcm9wLXNoYWRvdygwIDAgMTdweCB2YXIoLS13Y20tY29sb3ItYmctMSkpfXdjbS1pbmZvLWZvb3RlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO3BhZGRpbmc6NXB4IDB9d2NtLWluZm8tZm9vdGVyIHdjbS10ZXh0e3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MTVweH0jd2FsbGV0LXBsYWNlaG9sZGVyLWZpbGx7ZmlsbDp2YXIoLS13Y20tY29sb3ItYmctMyl9I3dhbGxldC1wbGFjZWhvbGRlci1kYXNoe3N0cm9rZTp2YXIoLS13Y20tY29sb3Itb3ZlcmxheSl9YDtcblxudmFyIF9fZGVmUHJvcCRnID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkZyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJGcgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkZyh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkZyh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtQW5kcm9pZFdhbGxldFNlbGVjdGlvbiA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIC0tIHByaXZhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIG9uR29Ub1FyY29kZSgpIHtcbiAgICBSb3V0ZXJDdHJsLnB1c2goXCJRcmNvZGVcIik7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmVjb21lbmRlZFdhbGxldHMgfSA9IEV4cGxvcmVyQ3RybC5zdGF0ZTtcbiAgICBjb25zdCB3YWxsZXRzID0gWy4uLnJlY29tZW5kZWRXYWxsZXRzLCAuLi5yZWNvbWVuZGVkV2FsbGV0c107XG4gICAgY29uc3QgcmVjb21lbmRlZENvdW50ID0gQ29yZVV0aWwuUkVDT01NRU5ERURfV0FMTEVUX0FNT1VOVCAqIDI7XG4gICAgcmV0dXJuIGh0bWxgPHdjbS1tb2RhbC1oZWFkZXIgdGl0bGU9XCJDb25uZWN0IHlvdXIgd2FsbGV0XCIgLm9uQWN0aW9uPVwiJHt0aGlzLm9uR29Ub1FyY29kZX1cIiAuYWN0aW9uSWNvbj1cIiR7U3ZnVXRpbC5RUkNPREVfSUNPTn1cIj48L3djbS1tb2RhbC1oZWFkZXI+PHdjbS1tb2RhbC1jb250ZW50PjxkaXYgY2xhc3M9XCJ3Y20tdGl0bGVcIj4ke1N2Z1V0aWwuTU9CSUxFX0lDT059PHdjbS10ZXh0IHZhcmlhbnQ9XCJzbWFsbC1yZWd1bGFyXCIgY29sb3I9XCJhY2NlbnRcIj5XYWxsZXRDb25uZWN0PC93Y20tdGV4dD48L2Rpdj48ZGl2IGNsYXNzPVwid2NtLXNsaWRlclwiPjxkaXYgY2xhc3M9XCJ3Y20tdHJhY2tcIj4ke1suLi5BcnJheShyZWNvbWVuZGVkQ291bnQpXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB3YWxsZXQgPSB3YWxsZXRzW2luZGV4ICUgd2FsbGV0cy5sZW5ndGhdO1xuICAgICAgcmV0dXJuIHdhbGxldCA/IGh0bWxgPHdjbS13YWxsZXQtaW1hZ2Ugd2FsbGV0SWQ9XCIke3dhbGxldC5pZH1cIiBpbWFnZUlkPVwiJHt3YWxsZXQuaW1hZ2VfaWR9XCI+PC93Y20td2FsbGV0LWltYWdlPmAgOiBTdmdVdGlsLldBTExFVF9QTEFDRUhPTERFUjtcbiAgICB9KX08L2Rpdj48d2NtLWJ1dHRvbi1iaWcgQGNsaWNrPVwiJHtVaVV0aWwuaGFuZGxlQW5kcm9pZExpbmtpbmd9XCI+PHdjbS10ZXh0IHZhcmlhbnQ9XCJtZWRpdW0tcmVndWxhclwiIGNvbG9yPVwiaW52ZXJzZVwiPlNlbGVjdCBXYWxsZXQ8L3djbS10ZXh0Pjwvd2NtLWJ1dHRvbi1iaWc+PC9kaXY+PC93Y20tbW9kYWwtY29udGVudD48d2NtLWluZm8tZm9vdGVyPjx3Y20tdGV4dCBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzbWFsbC10aGluXCI+Q2hvb3NlIFdhbGxldENvbm5lY3QgdG8gc2VlIHN1cHBvcnRlZCBhcHBzIG9uIHlvdXIgZGV2aWNlPC93Y20tdGV4dD48L3djbS1pbmZvLWZvb3Rlcj5gO1xuICB9XG59O1xuV2NtQW5kcm9pZFdhbGxldFNlbGVjdGlvbi5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJGVdO1xuV2NtQW5kcm9pZFdhbGxldFNlbGVjdGlvbiA9IF9fZGVjb3JhdGVDbGFzcyRnKFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1hbmRyb2lkLXdhbGxldC1zZWxlY3Rpb25cIilcbl0sIFdjbUFuZHJvaWRXYWxsZXRTZWxlY3Rpb24pO1xuXG5jb25zdCBzdHlsZXMkZCA9IGNzc2BAa2V5ZnJhbWVzIGxvYWRpbmd7dG97c3Ryb2tlLWRhc2hvZmZzZXQ6MH19QGtleWZyYW1lcyBzaGFrZXsxMCUsOTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMXB4LDAsMCl9MjAlLDgwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMXB4LDAsMCl9MzAlLDUwJSw3MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0ycHgsMCwwKX00MCUsNjAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgycHgsMCwwKX19Omhvc3R7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXJ9ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjExMHB4O2hlaWdodDoxMTBweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjQwcHggMCAyMHB4IDA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX1zdmd7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTEwcHg7aGVpZ2h0OjExMHB4O2ZpbGw6bm9uZTtzdHJva2U6dHJhbnNwYXJlbnQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLXdpZHRoOjJweDt0b3A6MDtsZWZ0OjB9dXNle3N0cm9rZTp2YXIoLS13Y20tYWNjZW50LWNvbG9yKTthbmltYXRpb246bG9hZGluZyAxcyBsaW5lYXIgaW5maW5pdGV9d2NtLXdhbGxldC1pbWFnZXtib3JkZXItcmFkaXVzOnZhcigtLXdjbS13YWxsZXQtaWNvbi1sYXJnZS1ib3JkZXItcmFkaXVzKTt3aWR0aDo5MHB4O2hlaWdodDo5MHB4fXdjbS10ZXh0e21hcmdpbi1ib3R0b206NDBweH0ud2NtLWVycm9yIHN2Z3tzdHJva2U6dmFyKC0td2NtLWVycm9yLWNvbG9yKX0ud2NtLWVycm9yIHVzZXtkaXNwbGF5Om5vbmV9LndjbS1lcnJvcnthbmltYXRpb246c2hha2UgLjRzIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGh9LndjbS1zdGFsZSBzdmcsLndjbS1zdGFsZSB1c2V7ZGlzcGxheTpub25lfWA7XG5cbnZhciBfX2RlZlByb3AkZiA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjJGYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZGVjb3JhdGVDbGFzcyRmID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjJGYodGFyZ2V0LCBrZXkpIDogdGFyZ2V0O1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxLCBkZWNvcmF0b3I7IGkgPj0gMDsgaS0tKVxuICAgIGlmIChkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgcmVzdWx0ID0gKGtpbmQgPyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHJlc3VsdCkgOiBkZWNvcmF0b3IocmVzdWx0KSkgfHwgcmVzdWx0O1xuICBpZiAoa2luZCAmJiByZXN1bHQpXG4gICAgX19kZWZQcm9wJGYodGFyZ2V0LCBrZXksIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xubGV0IFdjbUNvbm5lY3RvcldhaXRpbmcgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMud2FsbGV0SWQgPSB2b2lkIDA7XG4gICAgdGhpcy5pbWFnZUlkID0gdm9pZCAwO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuaXNTdGFsZSA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSBcIlwiO1xuICB9XG4gIC8vIC0tIHByaXZhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHN2Z0xvYWRlclRlbXBsYXRlKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgSUNPTl9TSVpFID0gODg7XG4gICAgY29uc3QgREhfQVJSQVkgPSAzMTc7XG4gICAgY29uc3QgREhfT0ZGU0VUID0gNDI1O1xuICAgIGNvbnN0IHJhZGl1cyA9IChfYiA9IChfYSA9IFRoZW1lQ3RybC5zdGF0ZS50aGVtZVZhcmlhYmxlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hW1wiLS13Y20td2FsbGV0LWljb24tbGFyZ2UtYm9yZGVyLXJhZGl1c1wiXSkgIT0gbnVsbCA/IF9iIDogVGhlbWVVdGlsLmdldFByZXNldChcIi0td2NtLXdhbGxldC1pY29uLWxhcmdlLWJvcmRlci1yYWRpdXNcIik7XG4gICAgbGV0IG51bVJhZGl1cyA9IDA7XG4gICAgaWYgKHJhZGl1cy5pbmNsdWRlcyhcIiVcIikpIHtcbiAgICAgIG51bVJhZGl1cyA9IElDT05fU0laRSAvIDEwMCAqIHBhcnNlSW50KHJhZGl1cywgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBudW1SYWRpdXMgPSBwYXJzZUludChyYWRpdXMsIDEwKTtcbiAgICB9XG4gICAgbnVtUmFkaXVzICo9IDEuMTc7XG4gICAgY29uc3QgZGFzaEFycmF5ID0gREhfQVJSQVkgLSBudW1SYWRpdXMgKiAxLjU3O1xuICAgIGNvbnN0IGRhc2hPZmZzZXQgPSBESF9PRkZTRVQgLSBudW1SYWRpdXMgKiAxLjg7XG4gICAgcmV0dXJuIGh0bWxgPHN2ZyB2aWV3Qm94PVwiMCAwIDExMCAxMTBcIiB3aWR0aD1cIjExMFwiIGhlaWdodD1cIjExMFwiPjxyZWN0IGlkPVwid2NtLWxvYWRlclwiIHg9XCIyXCIgeT1cIjJcIiB3aWR0aD1cIjEwNlwiIGhlaWdodD1cIjEwNlwiIHJ4PVwiJHtudW1SYWRpdXN9XCIvPjx1c2UgeGxpbms6aHJlZj1cIiN3Y20tbG9hZGVyXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjEwNiAke2Rhc2hBcnJheX1cIiBzdHJva2UtZGFzaG9mZnNldD1cIiR7ZGFzaE9mZnNldH1cIj48L3VzZT48L3N2Zz5gO1xuICB9XG4gIC8vIC0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJ3Y20tZXJyb3JcIjogdGhpcy5pc0Vycm9yLFxuICAgICAgXCJ3Y20tc3RhbGVcIjogdGhpcy5pc1N0YWxlXG4gICAgfTtcbiAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiJHtjbGFzc01hcChjbGFzc2VzKX1cIj4ke3RoaXMuc3ZnTG9hZGVyVGVtcGxhdGUoKX08d2NtLXdhbGxldC1pbWFnZSB3YWxsZXRJZD1cIiR7aWZEZWZpbmVkKHRoaXMud2FsbGV0SWQpfVwiIGltYWdlSWQ9XCIke2lmRGVmaW5lZCh0aGlzLmltYWdlSWQpfVwiPjwvd2NtLXdhbGxldC1pbWFnZT48L2Rpdj48d2NtLXRleHQgdmFyaWFudD1cIm1lZGl1bS1yZWd1bGFyXCIgY29sb3I9XCIke3RoaXMuaXNFcnJvciA/IFwiZXJyb3JcIiA6IFwicHJpbWFyeVwifVwiPiR7dGhpcy5pc0Vycm9yID8gXCJDb25uZWN0aW9uIGRlY2xpbmVkXCIgOiB0aGlzLmxhYmVsfTwvd2NtLXRleHQ+YDtcbiAgfVxufTtcbldjbUNvbm5lY3RvcldhaXRpbmcuc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlcyRkXTtcbl9fZGVjb3JhdGVDbGFzcyRmKFtcbiAgcHJvcGVydHkoKVxuXSwgV2NtQ29ubmVjdG9yV2FpdGluZy5wcm90b3R5cGUsIFwid2FsbGV0SWRcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkZihbXG4gIHByb3BlcnR5KClcbl0sIFdjbUNvbm5lY3RvcldhaXRpbmcucHJvdG90eXBlLCBcImltYWdlSWRcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkZihbXG4gIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgV2NtQ29ubmVjdG9yV2FpdGluZy5wcm90b3R5cGUsIFwiaXNFcnJvclwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRmKFtcbiAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBXY21Db25uZWN0b3JXYWl0aW5nLnByb3RvdHlwZSwgXCJpc1N0YWxlXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJGYoW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21Db25uZWN0b3JXYWl0aW5nLnByb3RvdHlwZSwgXCJsYWJlbFwiLCAyKTtcbldjbUNvbm5lY3RvcldhaXRpbmcgPSBfX2RlY29yYXRlQ2xhc3MkZihbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tY29ubmVjdG9yLXdhaXRpbmdcIilcbl0sIFdjbUNvbm5lY3RvcldhaXRpbmcpO1xuXG5jb25zdCBEYXRhVXRpbCA9IHtcbiAgbWFudWFsV2FsbGV0cygpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHsgbW9iaWxlV2FsbGV0cywgZGVza3RvcFdhbGxldHMgfSA9IENvbmZpZ0N0cmwuc3RhdGU7XG4gICAgY29uc3QgcmVjZW50V2FsbGV0SWQgPSAoX2EgPSBEYXRhVXRpbC5yZWNlbnRXYWxsZXQoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmlkO1xuICAgIGNvbnN0IHBsYXRmb3JtV2FsbGV0cyA9IENvcmVVdGlsLmlzTW9iaWxlKCkgPyBtb2JpbGVXYWxsZXRzIDogZGVza3RvcFdhbGxldHM7XG4gICAgY29uc3Qgd2FsbGV0cyA9IHBsYXRmb3JtV2FsbGV0cyA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm1XYWxsZXRzLmZpbHRlcigod2FsbGV0KSA9PiByZWNlbnRXYWxsZXRJZCAhPT0gd2FsbGV0LmlkKTtcbiAgICByZXR1cm4gKF9iID0gQ29yZVV0aWwuaXNNb2JpbGUoKSA/IHdhbGxldHMgPT0gbnVsbCA/IHZvaWQgMCA6IHdhbGxldHMubWFwKCh7IGlkLCBuYW1lLCBsaW5rcyB9KSA9PiAoeyBpZCwgbmFtZSwgbW9iaWxlOiBsaW5rcywgbGlua3MgfSkpIDogd2FsbGV0cyA9PSBudWxsID8gdm9pZCAwIDogd2FsbGV0cy5tYXAoKHsgaWQsIG5hbWUsIGxpbmtzIH0pID0+ICh7IGlkLCBuYW1lLCBkZXNrdG9wOiBsaW5rcywgbGlua3MgfSkpKSAhPSBudWxsID8gX2IgOiBbXTtcbiAgfSxcbiAgcmVjZW50V2FsbGV0KCkge1xuICAgIHJldHVybiBVaVV0aWwuZ2V0UmVjZW50V2FsbGV0KCk7XG4gIH0sXG4gIHJlY29tZW5kZWRXYWxsZXRzKHNraXBSZWNlbnQgPSBmYWxzZSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCByZWNlbnRXYWxsZXRJZCA9IHNraXBSZWNlbnQgPyB2b2lkIDAgOiAoX2EgPSBEYXRhVXRpbC5yZWNlbnRXYWxsZXQoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmlkO1xuICAgIGNvbnN0IHsgcmVjb21lbmRlZFdhbGxldHMgfSA9IEV4cGxvcmVyQ3RybC5zdGF0ZTtcbiAgICBjb25zdCB3YWxsZXRzID0gcmVjb21lbmRlZFdhbGxldHMuZmlsdGVyKCh3YWxsZXQpID0+IHJlY2VudFdhbGxldElkICE9PSB3YWxsZXQuaWQpO1xuICAgIHJldHVybiB3YWxsZXRzO1xuICB9XG59O1xuXG5jb25zdCBUZW1wbGF0ZVV0aWwgPSB7XG4gIG9uQ29ubmVjdGluZyhkYXRhKSB7XG4gICAgVWlVdGlsLmdvVG9Db25uZWN0aW5nVmlldyhkYXRhKTtcbiAgfSxcbiAgbWFudWFsV2FsbGV0c1RlbXBsYXRlKCkge1xuICAgIGNvbnN0IHdhbGxldHMgPSBEYXRhVXRpbC5tYW51YWxXYWxsZXRzKCk7XG4gICAgcmV0dXJuIHdhbGxldHMubWFwKFxuICAgICAgKHdhbGxldCkgPT4gaHRtbGA8d2NtLXdhbGxldC1idXR0b24gd2FsbGV0SWQ9XCIke3dhbGxldC5pZH1cIiBuYW1lPVwiJHt3YWxsZXQubmFtZX1cIiAub25DbGljaz1cIiR7KCkgPT4gdGhpcy5vbkNvbm5lY3Rpbmcod2FsbGV0KX1cIj48L3djbS13YWxsZXQtYnV0dG9uPmBcbiAgICApO1xuICB9LFxuICByZWNvbWVuZGVkV2FsbGV0c1RlbXBsYXRlKHNraXBSZWNlbnQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHdhbGxldHMgPSBEYXRhVXRpbC5yZWNvbWVuZGVkV2FsbGV0cyhza2lwUmVjZW50KTtcbiAgICByZXR1cm4gd2FsbGV0cy5tYXAoXG4gICAgICAod2FsbGV0KSA9PiBodG1sYDx3Y20td2FsbGV0LWJ1dHRvbiBuYW1lPVwiJHt3YWxsZXQubmFtZX1cIiB3YWxsZXRJZD1cIiR7d2FsbGV0LmlkfVwiIGltYWdlSWQ9XCIke3dhbGxldC5pbWFnZV9pZH1cIiAub25DbGljaz1cIiR7KCkgPT4gdGhpcy5vbkNvbm5lY3Rpbmcod2FsbGV0KX1cIj48L3djbS13YWxsZXQtYnV0dG9uPmBcbiAgICApO1xuICB9LFxuICByZWNlbnRXYWxsZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB3YWxsZXQgPSBEYXRhVXRpbC5yZWNlbnRXYWxsZXQoKTtcbiAgICBpZiAoIXdhbGxldCkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPHdjbS13YWxsZXQtYnV0dG9uIG5hbWU9XCIke3dhbGxldC5uYW1lfVwiIHdhbGxldElkPVwiJHt3YWxsZXQuaWR9XCIgaW1hZ2VJZD1cIiR7aWZEZWZpbmVkKHdhbGxldC5pbWFnZV9pZCl9XCIgLnJlY2VudD1cIiR7dHJ1ZX1cIiAub25DbGljaz1cIiR7KCkgPT4gdGhpcy5vbkNvbm5lY3Rpbmcod2FsbGV0KX1cIj48L3djbS13YWxsZXQtYnV0dG9uPmA7XG4gIH1cbn07XG5cbmNvbnN0IHN0eWxlcyRjID0gY3NzYC53Y20tZ3JpZHtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg0LDgwcHgpO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS53Y20tZGVza3RvcC10aXRsZSwud2NtLW1vYmlsZS10aXRsZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS53Y20tbW9iaWxlLXRpdGxle2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbi1ib3R0b206MjBweDttYXJnaW4tdG9wOi0xMHB4fS53Y20tZGVza3RvcC10aXRsZXttYXJnaW4tYm90dG9tOjEwcHg7cGFkZGluZzowIDEwcHh9LndjbS1zdWJ0aXRsZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS53Y20tc3VidGl0bGU6bGFzdC1jaGlsZCBwYXRoe2ZpbGw6dmFyKC0td2NtLWNvbG9yLWZnLTMpfS53Y20tZGVza3RvcC10aXRsZSBzdmcsLndjbS1tb2JpbGUtdGl0bGUgc3Zne21hcmdpbi1yaWdodDo2cHh9LndjbS1kZXNrdG9wLXRpdGxlIHBhdGgsLndjbS1tb2JpbGUtdGl0bGUgcGF0aHtmaWxsOnZhcigtLXdjbS1hY2NlbnQtY29sb3IpfWA7XG5cbnZhciBfX2RlZlByb3AkZSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjJGUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZGVjb3JhdGVDbGFzcyRlID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjJGUodGFyZ2V0LCBrZXkpIDogdGFyZ2V0O1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxLCBkZWNvcmF0b3I7IGkgPj0gMDsgaS0tKVxuICAgIGlmIChkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgcmVzdWx0ID0gKGtpbmQgPyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHJlc3VsdCkgOiBkZWNvcmF0b3IocmVzdWx0KSkgfHwgcmVzdWx0O1xuICBpZiAoa2luZCAmJiByZXN1bHQpXG4gICAgX19kZWZQcm9wJGUodGFyZ2V0LCBrZXksIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xubGV0IFdjbURlc2t0b3BXYWxsZXRTZWxlY3Rpb24gPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBleHBsb3JlckV4Y2x1ZGVkV2FsbGV0SWRzLCBlbmFibGVFeHBsb3JlciB9ID0gQ29uZmlnQ3RybC5zdGF0ZTtcbiAgICBjb25zdCBpc0V4cGxvcmVyV2FsbGV0cyA9IGV4cGxvcmVyRXhjbHVkZWRXYWxsZXRJZHMgIT09IFwiQUxMXCIgJiYgZW5hYmxlRXhwbG9yZXI7XG4gICAgY29uc3QgbWFudWFsVGVtcGxhdGUgPSBUZW1wbGF0ZVV0aWwubWFudWFsV2FsbGV0c1RlbXBsYXRlKCk7XG4gICAgY29uc3QgcmVjb21lbmRlZFRlbXBsYXRlID0gVGVtcGxhdGVVdGlsLnJlY29tZW5kZWRXYWxsZXRzVGVtcGxhdGUoKTtcbiAgICBjb25zdCByZWNlbnRUZW1wbGF0ZSA9IFRlbXBsYXRlVXRpbC5yZWNlbnRXYWxsZXRUZW1wbGF0ZSgpO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSBbcmVjZW50VGVtcGxhdGUsIC4uLm1hbnVhbFRlbXBsYXRlLCAuLi5yZWNvbWVuZGVkVGVtcGxhdGVdO1xuICAgIHRlbXBsYXRlcyA9IHRlbXBsYXRlcy5maWx0ZXIoQm9vbGVhbik7XG4gICAgY29uc3QgaXNWaWV3QWxsID0gdGVtcGxhdGVzLmxlbmd0aCA+IDQgfHwgaXNFeHBsb3JlcldhbGxldHM7XG4gICAgbGV0IHdhbGxldHMgPSBbXTtcbiAgICBpZiAoaXNWaWV3QWxsKSB7XG4gICAgICB3YWxsZXRzID0gdGVtcGxhdGVzLnNsaWNlKDAsIDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YWxsZXRzID0gdGVtcGxhdGVzO1xuICAgIH1cbiAgICBjb25zdCBpc1dhbGxldHMgPSBCb29sZWFuKHdhbGxldHMubGVuZ3RoKTtcbiAgICByZXR1cm4gaHRtbGA8d2NtLW1vZGFsLWhlYWRlciAuYm9yZGVyPVwiJHt0cnVlfVwiIHRpdGxlPVwiQ29ubmVjdCB5b3VyIHdhbGxldFwiIC5vbkFjdGlvbj1cIiR7VWlVdGlsLmhhbmRsZVVyaUNvcHl9XCIgLmFjdGlvbkljb249XCIke1N2Z1V0aWwuQ09QWV9JQ09OfVwiPjwvd2NtLW1vZGFsLWhlYWRlcj48d2NtLW1vZGFsLWNvbnRlbnQ+PGRpdiBjbGFzcz1cIndjbS1tb2JpbGUtdGl0bGVcIj48ZGl2IGNsYXNzPVwid2NtLXN1YnRpdGxlXCI+JHtTdmdVdGlsLk1PQklMRV9JQ09OfTx3Y20tdGV4dCB2YXJpYW50PVwic21hbGwtcmVndWxhclwiIGNvbG9yPVwiYWNjZW50XCI+TW9iaWxlPC93Y20tdGV4dD48L2Rpdj48ZGl2IGNsYXNzPVwid2NtLXN1YnRpdGxlXCI+JHtTdmdVdGlsLlNDQU5fSUNPTn08d2NtLXRleHQgdmFyaWFudD1cInNtYWxsLXJlZ3VsYXJcIiBjb2xvcj1cInNlY29uZGFyeVwiPlNjYW4gd2l0aCB5b3VyIHdhbGxldDwvd2NtLXRleHQ+PC9kaXY+PC9kaXY+PHdjbS13YWxsZXRjb25uZWN0LXFyPjwvd2NtLXdhbGxldGNvbm5lY3QtcXI+PC93Y20tbW9kYWwtY29udGVudD4ke2lzV2FsbGV0cyA/IGh0bWxgPHdjbS1tb2RhbC1mb290ZXI+PGRpdiBjbGFzcz1cIndjbS1kZXNrdG9wLXRpdGxlXCI+JHtTdmdVdGlsLkRFU0tUT1BfSUNPTn08d2NtLXRleHQgdmFyaWFudD1cInNtYWxsLXJlZ3VsYXJcIiBjb2xvcj1cImFjY2VudFwiPkRlc2t0b3A8L3djbS10ZXh0PjwvZGl2PjxkaXYgY2xhc3M9XCJ3Y20tZ3JpZFwiPiR7d2FsbGV0c30gJHtpc1ZpZXdBbGwgPyBodG1sYDx3Y20tdmlldy1hbGwtd2FsbGV0cy1idXR0b24+PC93Y20tdmlldy1hbGwtd2FsbGV0cy1idXR0b24+YCA6IG51bGx9PC9kaXY+PC93Y20tbW9kYWwtZm9vdGVyPmAgOiBudWxsfWA7XG4gIH1cbn07XG5XY21EZXNrdG9wV2FsbGV0U2VsZWN0aW9uLnN0eWxlcyA9IFtUaGVtZVV0aWwuZ2xvYmFsQ3NzLCBzdHlsZXMkY107XG5XY21EZXNrdG9wV2FsbGV0U2VsZWN0aW9uID0gX19kZWNvcmF0ZUNsYXNzJGUoW1xuICBjdXN0b21FbGVtZW50KFwid2NtLWRlc2t0b3Atd2FsbGV0LXNlbGVjdGlvblwiKVxuXSwgV2NtRGVza3RvcFdhbGxldFNlbGVjdGlvbik7XG5cbmNvbnN0IHN0eWxlcyRiID0gY3NzYGRpdntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1iZy0yKTtwYWRkaW5nOjEwcHggMjBweCAxNXB4IDIwcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0td2NtLWNvbG9yLWJnLTMpO3RleHQtYWxpZ246Y2VudGVyfWF7Y29sb3I6dmFyKC0td2NtLWFjY2VudC1jb2xvcik7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtkaXNwbGF5OmlubGluZX1hOmFjdGl2ZXtvcGFjaXR5Oi44fUBtZWRpYShob3Zlcjpob3Zlcil7YTpob3ZlcntvcGFjaXR5Oi44fX1gO1xuXG52YXIgX19kZWZQcm9wJGQgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyRkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkZCA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyRkKHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCRkKHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21MZWdhbE5vdGljZSA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIC0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRlcm1zT2ZTZXJ2aWNlVXJsLCBwcml2YWN5UG9saWN5VXJsIH0gPSBDb25maWdDdHJsLnN0YXRlO1xuICAgIGNvbnN0IGlzTGVnYWwgPSB0ZXJtc09mU2VydmljZVVybCAhPSBudWxsID8gdGVybXNPZlNlcnZpY2VVcmwgOiBwcml2YWN5UG9saWN5VXJsO1xuICAgIGlmICghaXNMZWdhbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXY+PHdjbS10ZXh0IHZhcmlhbnQ9XCJzbWFsbC1yZWd1bGFyXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5CeSBjb25uZWN0aW5nIHlvdXIgd2FsbGV0IHRvIHRoaXMgYXBwLCB5b3UgYWdyZWUgdG8gdGhlIGFwcCdzICR7dGVybXNPZlNlcnZpY2VVcmwgPyBodG1sYDxhIGhyZWY9XCIke3Rlcm1zT2ZTZXJ2aWNlVXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPmAgOiBudWxsfSAke3Rlcm1zT2ZTZXJ2aWNlVXJsICYmIHByaXZhY3lQb2xpY3lVcmwgPyBcImFuZFwiIDogbnVsbH0gJHtwcml2YWN5UG9saWN5VXJsID8gaHRtbGA8YSBocmVmPVwiJHtwcml2YWN5UG9saWN5VXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5Qcml2YWN5IFBvbGljeTwvYT5gIDogbnVsbH08L3djbS10ZXh0PjwvZGl2PmA7XG4gIH1cbn07XG5XY21MZWdhbE5vdGljZS5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJGJdO1xuV2NtTGVnYWxOb3RpY2UgPSBfX2RlY29yYXRlQ2xhc3MkZChbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tbGVnYWwtbm90aWNlXCIpXG5dLCBXY21MZWdhbE5vdGljZSk7XG5cbmNvbnN0IHN0eWxlcyRhID0gY3NzYGRpdntkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg0LDgwcHgpO21hcmdpbjowIC0xMHB4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3Jvdy1nYXA6MTBweH1gO1xuXG52YXIgX19kZWZQcm9wJGMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyRjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkYyA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyRjKHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCRjKHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21Nb2JpbGVXYWxsZXRTZWxlY3Rpb24gPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSBwcml2YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBvblFyY29kZSgpIHtcbiAgICBSb3V0ZXJDdHJsLnB1c2goXCJRcmNvZGVcIik7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZXhwbG9yZXJFeGNsdWRlZFdhbGxldElkcywgZW5hYmxlRXhwbG9yZXIgfSA9IENvbmZpZ0N0cmwuc3RhdGU7XG4gICAgY29uc3QgaXNFeHBsb3JlcldhbGxldHMgPSBleHBsb3JlckV4Y2x1ZGVkV2FsbGV0SWRzICE9PSBcIkFMTFwiICYmIGVuYWJsZUV4cGxvcmVyO1xuICAgIGNvbnN0IG1hbnVhbFRlbXBsYXRlID0gVGVtcGxhdGVVdGlsLm1hbnVhbFdhbGxldHNUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IHJlY29tZW5kZWRUZW1wbGF0ZSA9IFRlbXBsYXRlVXRpbC5yZWNvbWVuZGVkV2FsbGV0c1RlbXBsYXRlKCk7XG4gICAgY29uc3QgcmVjZW50VGVtcGxhdGUgPSBUZW1wbGF0ZVV0aWwucmVjZW50V2FsbGV0VGVtcGxhdGUoKTtcbiAgICBsZXQgdGVtcGxhdGVzID0gW3JlY2VudFRlbXBsYXRlLCAuLi5tYW51YWxUZW1wbGF0ZSwgLi4ucmVjb21lbmRlZFRlbXBsYXRlXTtcbiAgICB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGNvbnN0IGlzVmlld0FsbCA9IHRlbXBsYXRlcy5sZW5ndGggPiA4IHx8IGlzRXhwbG9yZXJXYWxsZXRzO1xuICAgIGxldCB3YWxsZXRzID0gW107XG4gICAgaWYgKGlzVmlld0FsbCkge1xuICAgICAgd2FsbGV0cyA9IHRlbXBsYXRlcy5zbGljZSgwLCA3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FsbGV0cyA9IHRlbXBsYXRlcztcbiAgICB9XG4gICAgY29uc3QgaXNXYWxsZXRzID0gQm9vbGVhbih3YWxsZXRzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGh0bWxgPHdjbS1tb2RhbC1oZWFkZXIgdGl0bGU9XCJDb25uZWN0IHlvdXIgd2FsbGV0XCIgLm9uQWN0aW9uPVwiJHt0aGlzLm9uUXJjb2RlfVwiIC5hY3Rpb25JY29uPVwiJHtTdmdVdGlsLlFSQ09ERV9JQ09OfVwiPjwvd2NtLW1vZGFsLWhlYWRlcj4ke2lzV2FsbGV0cyA/IGh0bWxgPHdjbS1tb2RhbC1jb250ZW50PjxkaXY+JHt3YWxsZXRzfSAke2lzVmlld0FsbCA/IGh0bWxgPHdjbS12aWV3LWFsbC13YWxsZXRzLWJ1dHRvbj48L3djbS12aWV3LWFsbC13YWxsZXRzLWJ1dHRvbj5gIDogbnVsbH08L2Rpdj48L3djbS1tb2RhbC1jb250ZW50PmAgOiBudWxsfWA7XG4gIH1cbn07XG5XY21Nb2JpbGVXYWxsZXRTZWxlY3Rpb24uc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlcyRhXTtcbldjbU1vYmlsZVdhbGxldFNlbGVjdGlvbiA9IF9fZGVjb3JhdGVDbGFzcyRjKFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1tb2JpbGUtd2FsbGV0LXNlbGVjdGlvblwiKVxuXSwgV2NtTW9iaWxlV2FsbGV0U2VsZWN0aW9uKTtcblxuY29uc3Qgc3R5bGVzJDkgPSBjc3NgOmhvc3R7YWxsOmluaXRpYWx9LndjbS1vdmVybGF5e3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6dmFyKC0td2NtLXotaW5kZXgpO292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS13Y20tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yKTtiYWNrZHJvcC1maWx0ZXI6dmFyKC0td2NtLW92ZXJsYXktYmFja2Ryb3AtZmlsdGVyKX1AbWVkaWEobWF4LWhlaWdodDo3MjBweCkgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpey53Y20tb3ZlcmxheXtvdmVyZmxvdzpzY3JvbGw7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjIwcHggMH19LndjbS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30ud2NtLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTttYXgtd2lkdGg6MzYwcHg7d2lkdGg6MTAwJTtvdXRsaW5lOjA7Ym9yZGVyLXJhZGl1czp2YXIoLS13Y20tYmFja2dyb3VuZC1ib3JkZXItcmFkaXVzKSB2YXIoLS13Y20tYmFja2dyb3VuZC1ib3JkZXItcmFkaXVzKSB2YXIoLS13Y20tY29udGFpbmVyLWJvcmRlci1yYWRpdXMpIHZhcigtLXdjbS1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS13Y20tY29sb3Itb3ZlcmxheSk7b3ZlcmZsb3c6aGlkZGVufS53Y20tY2FyZHt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6dmFyKC0td2NtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtvdmVyZmxvdzpoaWRkZW47Ym94LXNoYWRvdzowIDZweCAxNHB4IC02cHggcmdiYSgxMCwxNiwzMSwuMTIpLDAgMTBweCAzMnB4IC00cHggcmdiYSgxMCwxNiwzMSwuMSksMCAwIDAgMXB4IHZhcigtLXdjbS1jb2xvci1vdmVybGF5KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdjbS1jb2xvci1iZy0xKTtjb2xvcjp2YXIoLS13Y20tY29sb3ItZmctMSl9QG1lZGlhKG1heC13aWR0aDo2MDBweCl7LndjbS1jb250YWluZXJ7bWF4LXdpZHRoOjQ0MHB4O2JvcmRlci1yYWRpdXM6dmFyKC0td2NtLWJhY2tncm91bmQtYm9yZGVyLXJhZGl1cykgdmFyKC0td2NtLWJhY2tncm91bmQtYm9yZGVyLXJhZGl1cykgMCAwfS53Y20tY2FyZHtib3JkZXItcmFkaXVzOnZhcigtLXdjbS1jb250YWluZXItYm9yZGVyLXJhZGl1cykgdmFyKC0td2NtLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKSAwIDB9LndjbS1vdmVybGF5e2FsaWduLWl0ZW1zOmZsZXgtZW5kfX1AbWVkaWEobWF4LXdpZHRoOjQ0MHB4KXsud2NtLWNvbnRhaW5lcntib3JkZXI6MH19YDtcblxudmFyIF9fZGVmUHJvcCRiID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkYiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJGIgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkYih0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkYih0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtTW9kYWwgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSBsaWZlY3ljbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICB0aGlzLnVuc3Vic2NyaWJlTW9kYWwgPSB2b2lkIDA7XG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSB2b2lkIDA7XG4gICAgdGhpcy51bnN1YnNjcmliZU1vZGFsID0gTW9kYWxDdHJsLnN1YnNjcmliZSgobW9kYWxTdGF0ZSkgPT4ge1xuICAgICAgaWYgKG1vZGFsU3RhdGUub3Blbikge1xuICAgICAgICB0aGlzLm9uT3Blbk1vZGFsRXZlbnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DbG9zZU1vZGFsRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gdGhpcy51bnN1YnNjcmliZU1vZGFsKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgfVxuICBnZXQgb3ZlcmxheUVsKCkge1xuICAgIHJldHVybiBVaVV0aWwuZ2V0U2hhZG93Um9vdEVsZW1lbnQodGhpcywgXCIud2NtLW92ZXJsYXlcIik7XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsKCkge1xuICAgIHJldHVybiBVaVV0aWwuZ2V0U2hhZG93Um9vdEVsZW1lbnQodGhpcywgXCIud2NtLWNvbnRhaW5lclwiKTtcbiAgfVxuICB0b2dnbGVCb2R5U2Nyb2xsKGVuYWJsZWQpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgaWYgKGJvZHkpIHtcbiAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHdjbVN0eWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2NtLXN0eWxlc1wiKTtcbiAgICAgICAgd2NtU3R5bGVzID09IG51bGwgPyB2b2lkIDAgOiB3Y21TdHlsZXMucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICAgIGA8c3R5bGUgaWQ9XCJ3Y20tc3R5bGVzXCI+aHRtbCxib2R5e3RvdWNoLWFjdGlvbjpub25lO292ZXJmbG93OmhpZGRlbjtvdmVyc2Nyb2xsLWJlaGF2aW9yOmNvbnRhaW47fTwvc3R5bGU+YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkNsb3NlTW9kYWwoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBNb2RhbEN0cmwuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgb25PcGVuTW9kYWxFdmVudCgpIHtcbiAgICB0aGlzLnRvZ2dsZUJvZHlTY3JvbGwoZmFsc2UpO1xuICAgIHRoaXMuYWRkS2V5Ym9hcmRFdmVudHMoKTtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gVWlVdGlsLmlzTW9iaWxlQW5pbWF0aW9uKCkgPyB7IHk6IFtcIjUwdmhcIiwgXCIwdmhcIl0gfSA6IHsgc2NhbGU6IFswLjk4LCAxXSB9O1xuICAgICAgY29uc3QgZGVsYXkgPSAwLjE7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IDAuMjtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgYW5pbWF0ZSh0aGlzLm92ZXJsYXlFbCwgeyBvcGFjaXR5OiBbMCwgMV0gfSwgeyBkZWxheSwgZHVyYXRpb24gfSkuZmluaXNoZWQsXG4gICAgICAgIGFuaW1hdGUodGhpcy5jb250YWluZXJFbCwgYW5pbWF0aW9uLCB7IGRlbGF5LCBkdXJhdGlvbiB9KS5maW5pc2hlZFxuICAgICAgXSk7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfSwgMCk7XG4gIH1cbiAgYXN5bmMgb25DbG9zZU1vZGFsRXZlbnQoKSB7XG4gICAgdGhpcy50b2dnbGVCb2R5U2Nyb2xsKHRydWUpO1xuICAgIHRoaXMucmVtb3ZlS2V5Ym9hcmRFdmVudHMoKTtcbiAgICBjb25zdCBhbmltYXRpb24gPSBVaVV0aWwuaXNNb2JpbGVBbmltYXRpb24oKSA/IHsgeTogW1wiMHZoXCIsIFwiNTB2aFwiXSB9IDogeyBzY2FsZTogWzEsIDAuOThdIH07XG4gICAgY29uc3QgZHVyYXRpb24gPSAwLjI7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgYW5pbWF0ZSh0aGlzLm92ZXJsYXlFbCwgeyBvcGFjaXR5OiBbMSwgMF0gfSwgeyBkdXJhdGlvbiB9KS5maW5pc2hlZCxcbiAgICAgIGFuaW1hdGUodGhpcy5jb250YWluZXJFbCwgYW5pbWF0aW9uLCB7IGR1cmF0aW9uIH0pLmZpbmlzaGVkXG4gICAgXSk7XG4gICAgdGhpcy5jb250YWluZXJFbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG4gIGFkZEtleWJvYXJkRXZlbnRzKCkge1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgTW9kYWxDdHJsLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICAgICAgaWYgKCEoKF9hID0gZXZlbnQudGFyZ2V0KSA9PSBudWxsID8gdm9pZCAwIDogX2EudGFnTmFtZS5pbmNsdWRlcyhcIndjbS1cIikpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckVsLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXJcbiAgICApO1xuICAgIHRoaXMuY29udGFpbmVyRWwuZm9jdXMoKTtcbiAgfVxuICByZW1vdmVLZXlib2FyZEV2ZW50cygpIHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gdGhpcy5hYm9ydENvbnRyb2xsZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYS5hYm9ydCgpO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gdm9pZCAwO1xuICB9XG4gIC8vIC0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJ3Y20tb3ZlcmxheVwiOiB0cnVlLFxuICAgICAgXCJ3Y20tYWN0aXZlXCI6IHRoaXMuYWN0aXZlXG4gICAgfTtcbiAgICByZXR1cm4gaHRtbGA8d2NtLWV4cGxvcmVyLWNvbnRleHQ+PC93Y20tZXhwbG9yZXItY29udGV4dD48d2NtLXRoZW1lLWNvbnRleHQ+PC93Y20tdGhlbWUtY29udGV4dD48ZGl2IGlkPVwid2NtLW1vZGFsXCIgY2xhc3M9XCIke2NsYXNzTWFwKGNsYXNzZXMpfVwiIEBjbGljaz1cIiR7dGhpcy5vbkNsb3NlTW9kYWx9XCIgcm9sZT1cImFsZXJ0ZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIj48ZGl2IGNsYXNzPVwid2NtLWNvbnRhaW5lclwiIHRhYmluZGV4PVwiMFwiPiR7dGhpcy5vcGVuID8gaHRtbGA8d2NtLW1vZGFsLWJhY2tjYXJkPjwvd2NtLW1vZGFsLWJhY2tjYXJkPjxkaXYgY2xhc3M9XCJ3Y20tY2FyZFwiPjx3Y20tbW9kYWwtcm91dGVyPjwvd2NtLW1vZGFsLXJvdXRlcj48d2NtLW1vZGFsLXRvYXN0Pjwvd2NtLW1vZGFsLXRvYXN0PjwvZGl2PmAgOiBudWxsfTwvZGl2PjwvZGl2PmA7XG4gIH1cbn07XG5XY21Nb2RhbC5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJDldO1xuX19kZWNvcmF0ZUNsYXNzJGIoW1xuICBzdGF0ZSgpXG5dLCBXY21Nb2RhbC5wcm90b3R5cGUsIFwib3BlblwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRiKFtcbiAgc3RhdGUoKVxuXSwgV2NtTW9kYWwucHJvdG90eXBlLCBcImFjdGl2ZVwiLCAyKTtcbldjbU1vZGFsID0gX19kZWNvcmF0ZUNsYXNzJGIoW1xuICBjdXN0b21FbGVtZW50KFwid2NtLW1vZGFsXCIpXG5dLCBXY21Nb2RhbCk7XG5cbmNvbnN0IHN0eWxlcyQ4ID0gY3NzYGRpdntkaXNwbGF5OmZsZXg7bWFyZ2luLXRvcDoxNXB4fXNsb3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgNXB4fXdjbS1idXR0b257bWFyZ2luOjAgNXB4fWA7XG5cbnZhciBfX2RlZlByb3AkYSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjJGEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZGVjb3JhdGVDbGFzcyRhID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjJGEodGFyZ2V0LCBrZXkpIDogdGFyZ2V0O1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxLCBkZWNvcmF0b3I7IGkgPj0gMDsgaS0tKVxuICAgIGlmIChkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgcmVzdWx0ID0gKGtpbmQgPyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHJlc3VsdCkgOiBkZWNvcmF0b3IocmVzdWx0KSkgfHwgcmVzdWx0O1xuICBpZiAoa2luZCAmJiByZXN1bHQpXG4gICAgX19kZWZQcm9wJGEodGFyZ2V0LCBrZXksIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xubGV0IFdjbVBsYXRmb3JtU2VsZWN0aW9uID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzTW9iaWxlID0gZmFsc2U7XG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBmYWxzZTtcbiAgICB0aGlzLmlzV2ViID0gZmFsc2U7XG4gICAgdGhpcy5pc1JldHJ5ID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgb25Nb2JpbGUoKSB7XG4gICAgY29uc3QgaXNNb2JpbGUgPSBDb3JlVXRpbC5pc01vYmlsZSgpO1xuICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgUm91dGVyQ3RybC5yZXBsYWNlKFwiTW9iaWxlQ29ubmVjdGluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyQ3RybC5yZXBsYWNlKFwiTW9iaWxlUXJjb2RlQ29ubmVjdGluZ1wiKTtcbiAgICB9XG4gIH1cbiAgb25EZXNrdG9wKCkge1xuICAgIFJvdXRlckN0cmwucmVwbGFjZShcIkRlc2t0b3BDb25uZWN0aW5nXCIpO1xuICB9XG4gIG9uV2ViKCkge1xuICAgIFJvdXRlckN0cmwucmVwbGFjZShcIldlYkNvbm5lY3RpbmdcIik7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxkaXY+JHt0aGlzLmlzUmV0cnkgPyBodG1sYDxzbG90Pjwvc2xvdD5gIDogbnVsbH0gJHt0aGlzLmlzTW9iaWxlID8gaHRtbGA8d2NtLWJ1dHRvbiAub25DbGljaz1cIiR7dGhpcy5vbk1vYmlsZX1cIiAuaWNvbkxlZnQ9XCIke1N2Z1V0aWwuTU9CSUxFX0lDT059XCIgdmFyaWFudD1cIm91dGxpbmVcIj5Nb2JpbGU8L3djbS1idXR0b24+YCA6IG51bGx9ICR7dGhpcy5pc0Rlc2t0b3AgPyBodG1sYDx3Y20tYnV0dG9uIC5vbkNsaWNrPVwiJHt0aGlzLm9uRGVza3RvcH1cIiAuaWNvbkxlZnQ9XCIke1N2Z1V0aWwuREVTS1RPUF9JQ09OfVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+RGVza3RvcDwvd2NtLWJ1dHRvbj5gIDogbnVsbH0gJHt0aGlzLmlzV2ViID8gaHRtbGA8d2NtLWJ1dHRvbiAub25DbGljaz1cIiR7dGhpcy5vbldlYn1cIiAuaWNvbkxlZnQ9XCIke1N2Z1V0aWwuR0xPQkVfSUNPTn1cIiB2YXJpYW50PVwib3V0bGluZVwiPldlYjwvd2NtLWJ1dHRvbj5gIDogbnVsbH08L2Rpdj5gO1xuICB9XG59O1xuV2NtUGxhdGZvcm1TZWxlY3Rpb24uc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlcyQ4XTtcbl9fZGVjb3JhdGVDbGFzcyRhKFtcbiAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBXY21QbGF0Zm9ybVNlbGVjdGlvbi5wcm90b3R5cGUsIFwiaXNNb2JpbGVcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkYShbXG4gIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgV2NtUGxhdGZvcm1TZWxlY3Rpb24ucHJvdG90eXBlLCBcImlzRGVza3RvcFwiLCAyKTtcbl9fZGVjb3JhdGVDbGFzcyRhKFtcbiAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBXY21QbGF0Zm9ybVNlbGVjdGlvbi5wcm90b3R5cGUsIFwiaXNXZWJcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkYShbXG4gIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgV2NtUGxhdGZvcm1TZWxlY3Rpb24ucHJvdG90eXBlLCBcImlzUmV0cnlcIiwgMik7XG5XY21QbGF0Zm9ybVNlbGVjdGlvbiA9IF9fZGVjb3JhdGVDbGFzcyRhKFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1wbGF0Zm9ybS1zZWxlY3Rpb25cIilcbl0sIFdjbVBsYXRmb3JtU2VsZWN0aW9uKTtcblxuY29uc3Qgc3R5bGVzJDcgPSBjc3NgYnV0dG9ue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzo1cHggMTBweDtib3JkZXItcmFkaXVzOnZhcigtLXdjbS1idXR0b24taG92ZXItaGlnaGxpZ2h0LWJvcmRlci1yYWRpdXMpO2hlaWdodDoxMDAlO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS53Y20taWNvbnN7d2lkdGg6NjBweDtoZWlnaHQ6NjBweDtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7cGFkZGluZzo3cHg7Ym9yZGVyLXJhZGl1czp2YXIoLS13Y20td2FsbGV0LWljb24tYm9yZGVyLXJhZGl1cyk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206NXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLWJnLTIpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLXdjbS1jb2xvci1vdmVybGF5KX1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfUBtZWRpYShob3Zlcjpob3Zlcil7YnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0td2NtLWNvbG9yLW92ZXJsYXkpfX0ud2NtLWljb25zIGltZ3t3aWR0aDoyMXB4O2hlaWdodDoyMXB4O29iamVjdC1maXQ6Y292ZXI7b2JqZWN0LXBvc2l0aW9uOmNlbnRlcjtib3JkZXItcmFkaXVzOmNhbGModmFyKC0td2NtLXdhbGxldC1pY29uLWJvcmRlci1yYWRpdXMpLyAyKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXdjbS1jb2xvci1vdmVybGF5KX0ud2NtLWljb25zIHN2Z3t3aWR0aDoyMXB4O2hlaWdodDoyMXB4fS53Y20taWNvbnMgaW1nOm50aC1jaGlsZCgxKSwud2NtLWljb25zIGltZzpudGgtY2hpbGQoMiksLndjbS1pY29ucyBzdmc6bnRoLWNoaWxkKDEpLC53Y20taWNvbnMgc3ZnOm50aC1jaGlsZCgyKXttYXJnaW4tYm90dG9tOjRweH13Y20tdGV4dHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfSN3YWxsZXQtcGxhY2Vob2xkZXItZmlsbHtmaWxsOnZhcigtLXdjbS1jb2xvci1iZy0zKX0jd2FsbGV0LXBsYWNlaG9sZGVyLWRhc2h7c3Ryb2tlOnZhcigtLXdjbS1jb2xvci1vdmVybGF5KX1gO1xuXG52YXIgX19kZWZQcm9wJDkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyQ5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkOSA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyQ5KHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCQ5KHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21WaWV3QWxsV2FsbGV0c0J1dHRvbiA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIC0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIG9uQ2xpY2soKSB7XG4gICAgUm91dGVyQ3RybC5wdXNoKFwiV2FsbGV0RXhwbG9yZXJcIik7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmVjb21lbmRlZFdhbGxldHMgfSA9IEV4cGxvcmVyQ3RybC5zdGF0ZTtcbiAgICBjb25zdCBtYW51YWxXYWxsZXRzID0gRGF0YVV0aWwubWFudWFsV2FsbGV0cygpO1xuICAgIGNvbnN0IHJldmVyc2VkV2FsbGV0cyA9IFsuLi5yZWNvbWVuZGVkV2FsbGV0cywgLi4ubWFudWFsV2FsbGV0c10ucmV2ZXJzZSgpLnNsaWNlKDAsIDQpO1xuICAgIHJldHVybiBodG1sYDxidXR0b24gQGNsaWNrPVwiJHt0aGlzLm9uQ2xpY2t9XCI+PGRpdiBjbGFzcz1cIndjbS1pY29uc1wiPiR7cmV2ZXJzZWRXYWxsZXRzLm1hcCgod2FsbGV0KSA9PiB7XG4gICAgICBjb25zdCBleHBsb3JlckltZyA9IFVpVXRpbC5nZXRXYWxsZXRJY29uKHdhbGxldCk7XG4gICAgICBpZiAoZXhwbG9yZXJJbWcpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPGltZyBjcm9zc29yaWdpbj1cImFub255bW91c1wiIHNyYz1cIiR7ZXhwbG9yZXJJbWd9XCI+YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNyYyA9IFVpVXRpbC5nZXRXYWxsZXRJY29uKHsgaWQ6IHdhbGxldC5pZCB9KTtcbiAgICAgIHJldHVybiBzcmMgPyBodG1sYDxpbWcgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiBzcmM9XCIke3NyY31cIj5gIDogU3ZnVXRpbC5XQUxMRVRfUExBQ0VIT0xERVI7XG4gICAgfSl9ICR7Wy4uLkFycmF5KDQgLSByZXZlcnNlZFdhbGxldHMubGVuZ3RoKV0ubWFwKCgpID0+IFN2Z1V0aWwuV0FMTEVUX1BMQUNFSE9MREVSKX08L2Rpdj48d2NtLXRleHQgdmFyaWFudD1cInhzbWFsbC1yZWd1bGFyXCI+VmlldyBBbGw8L3djbS10ZXh0PjwvYnV0dG9uPmA7XG4gIH1cbn07XG5XY21WaWV3QWxsV2FsbGV0c0J1dHRvbi5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJDddO1xuV2NtVmlld0FsbFdhbGxldHNCdXR0b24gPSBfX2RlY29yYXRlQ2xhc3MkOShbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tdmlldy1hbGwtd2FsbGV0cy1idXR0b25cIilcbl0sIFdjbVZpZXdBbGxXYWxsZXRzQnV0dG9uKTtcblxuY29uc3Qgc3R5bGVzJDYgPSBjc3NgLndjbS1xci1jb250YWluZXJ7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YXNwZWN0LXJhdGlvOjEvMX1gO1xuXG52YXIgX19kZWZQcm9wJDggPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyQ4ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkOCA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyQ4KHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCQ4KHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21XYWxsZXRDb25uZWN0UXIgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSBsaWZlY3ljbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMud2FsbGV0SWQgPSBcIlwiO1xuICAgIHRoaXMuaW1hZ2VJZCA9IFwiXCI7XG4gICAgdGhpcy51cmkgPSBcIlwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyB3YWxsZXRDb25uZWN0VXJpIH0gPSBPcHRpb25zQ3RybC5zdGF0ZTtcbiAgICAgIHRoaXMudXJpID0gd2FsbGV0Q29ubmVjdFVyaTtcbiAgICB9LCAwKTtcbiAgfVxuICAvLyAtLSBwcml2YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBnZXQgb3ZlcmxheUVsKCkge1xuICAgIHJldHVybiBVaVV0aWwuZ2V0U2hhZG93Um9vdEVsZW1lbnQodGhpcywgXCIud2NtLXFyLWNvbnRhaW5lclwiKTtcbiAgfVxuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cIndjbS1xci1jb250YWluZXJcIj4ke3RoaXMudXJpID8gaHRtbGA8d2NtLXFyY29kZSBzaXplPVwiJHt0aGlzLm92ZXJsYXlFbC5vZmZzZXRXaWR0aH1cIiB1cmk9XCIke3RoaXMudXJpfVwiIHdhbGxldElkPVwiJHtpZkRlZmluZWQodGhpcy53YWxsZXRJZCl9XCIgaW1hZ2VJZD1cIiR7aWZEZWZpbmVkKHRoaXMuaW1hZ2VJZCl9XCI+PC93Y20tcXJjb2RlPmAgOiBodG1sYDx3Y20tc3Bpbm5lcj48L3djbS1zcGlubmVyPmB9PC9kaXY+YDtcbiAgfVxufTtcbldjbVdhbGxldENvbm5lY3RRci5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJDZdO1xuX19kZWNvcmF0ZUNsYXNzJDgoW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21XYWxsZXRDb25uZWN0UXIucHJvdG90eXBlLCBcIndhbGxldElkXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJDgoW1xuICBwcm9wZXJ0eSgpXG5dLCBXY21XYWxsZXRDb25uZWN0UXIucHJvdG90eXBlLCBcImltYWdlSWRcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkOChbXG4gIHN0YXRlKClcbl0sIFdjbVdhbGxldENvbm5lY3RRci5wcm90b3R5cGUsIFwidXJpXCIsIDIpO1xuV2NtV2FsbGV0Q29ubmVjdFFyID0gX19kZWNvcmF0ZUNsYXNzJDgoW1xuICBjdXN0b21FbGVtZW50KFwid2NtLXdhbGxldGNvbm5lY3QtcXJcIilcbl0sIFdjbVdhbGxldENvbm5lY3RRcik7XG5cbnZhciBfX2RlZlByb3AkNyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjJDcgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZGVjb3JhdGVDbGFzcyQ3ID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjJDcodGFyZ2V0LCBrZXkpIDogdGFyZ2V0O1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxLCBkZWNvcmF0b3I7IGkgPj0gMDsgaS0tKVxuICAgIGlmIChkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgcmVzdWx0ID0gKGtpbmQgPyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHJlc3VsdCkgOiBkZWNvcmF0b3IocmVzdWx0KSkgfHwgcmVzdWx0O1xuICBpZiAoa2luZCAmJiByZXN1bHQpXG4gICAgX19kZWZQcm9wJDcodGFyZ2V0LCBrZXksIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xubGV0IFdjbUNvbm5lY3RXYWxsZXRWaWV3ID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdmlld1RlbXBsYXRlKCkge1xuICAgIGlmIChDb3JlVXRpbC5pc0FuZHJvaWQoKSAmJiAhQ29yZVV0aWwuaXNUZWxlZ3JhbSgpKSB7XG4gICAgICByZXR1cm4gaHRtbGA8d2NtLWFuZHJvaWQtd2FsbGV0LXNlbGVjdGlvbj48L3djbS1hbmRyb2lkLXdhbGxldC1zZWxlY3Rpb24+YDtcbiAgICB9XG4gICAgaWYgKENvcmVVdGlsLmlzTW9iaWxlKCkpIHtcbiAgICAgIHJldHVybiBodG1sYDx3Y20tbW9iaWxlLXdhbGxldC1zZWxlY3Rpb24+PC93Y20tbW9iaWxlLXdhbGxldC1zZWxlY3Rpb24+YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPHdjbS1kZXNrdG9wLXdhbGxldC1zZWxlY3Rpb24+PC93Y20tZGVza3RvcC13YWxsZXQtc2VsZWN0aW9uPmA7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy52aWV3VGVtcGxhdGUoKX08d2NtLWxlZ2FsLW5vdGljZT48L3djbS1sZWdhbC1ub3RpY2U+YDtcbiAgfVxufTtcbldjbUNvbm5lY3RXYWxsZXRWaWV3LnN0eWxlcyA9IFtUaGVtZVV0aWwuZ2xvYmFsQ3NzXTtcbldjbUNvbm5lY3RXYWxsZXRWaWV3ID0gX19kZWNvcmF0ZUNsYXNzJDcoW1xuICBjdXN0b21FbGVtZW50KFwid2NtLWNvbm5lY3Qtd2FsbGV0LXZpZXdcIilcbl0sIFdjbUNvbm5lY3RXYWxsZXRWaWV3KTtcblxuY29uc3Qgc3R5bGVzJDUgPSBjc3Ngd2NtLWluZm8tZm9vdGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7cGFkZGluZzo1cHggMH13Y20tdGV4dHt0ZXh0LWFsaWduOmNlbnRlcn1gO1xuXG52YXIgX19kZWZQcm9wJDYgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyQ2ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkNiA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyQ2KHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCQ2KHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21EZXNrdG9wQ29ubmVjdGluZ1ZpZXcgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSBsaWZlY3ljbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMub3BlbkRlc2t0b3BBcHAoKTtcbiAgfVxuICAvLyAtLSBwcml2YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBvbkZvcm1hdEFuZFJlZGlyZWN0KHVyaSkge1xuICAgIGNvbnN0IHsgZGVza3RvcCwgbmFtZSB9ID0gQ29yZVV0aWwuZ2V0V2FsbGV0Um91dGVyRGF0YSgpO1xuICAgIGNvbnN0IG5hdGl2ZVVybCA9IGRlc2t0b3AgPT0gbnVsbCA/IHZvaWQgMCA6IGRlc2t0b3AubmF0aXZlO1xuICAgIGNvbnN0IHVuaXZlcnNhbFVybCA9IGRlc2t0b3AgPT0gbnVsbCA/IHZvaWQgMCA6IGRlc2t0b3AudW5pdmVyc2FsO1xuICAgIGlmIChuYXRpdmVVcmwpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSBDb3JlVXRpbC5mb3JtYXROYXRpdmVVcmwobmF0aXZlVXJsLCB1cmksIG5hbWUpO1xuICAgICAgQ29yZVV0aWwub3BlbkhyZWYoaHJlZiwgXCJfc2VsZlwiKTtcbiAgICB9IGVsc2UgaWYgKHVuaXZlcnNhbFVybCkge1xuICAgICAgY29uc3QgaHJlZiA9IENvcmVVdGlsLmZvcm1hdFVuaXZlcnNhbFVybCh1bml2ZXJzYWxVcmwsIHVyaSwgbmFtZSk7XG4gICAgICBDb3JlVXRpbC5vcGVuSHJlZihocmVmLCBcIl9ibGFua1wiKTtcbiAgICB9XG4gIH1cbiAgb3BlbkRlc2t0b3BBcHAoKSB7XG4gICAgY29uc3QgeyB3YWxsZXRDb25uZWN0VXJpIH0gPSBPcHRpb25zQ3RybC5zdGF0ZTtcbiAgICBjb25zdCByb3V0ZXJEYXRhID0gQ29yZVV0aWwuZ2V0V2FsbGV0Um91dGVyRGF0YSgpO1xuICAgIFVpVXRpbC5zZXRSZWNlbnRXYWxsZXQocm91dGVyRGF0YSk7XG4gICAgaWYgKHdhbGxldENvbm5lY3RVcmkpIHtcbiAgICAgIHRoaXMub25Gb3JtYXRBbmRSZWRpcmVjdCh3YWxsZXRDb25uZWN0VXJpKTtcbiAgICB9XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgaWQsIGltYWdlX2lkIH0gPSBDb3JlVXRpbC5nZXRXYWxsZXRSb3V0ZXJEYXRhKCk7XG4gICAgY29uc3QgeyBpc01vYmlsZSwgaXNXZWIgfSA9IFVpVXRpbC5nZXRDYWNoZWRSb3V0ZXJXYWxsZXRQbGF0Zm9ybXMoKTtcbiAgICByZXR1cm4gaHRtbGA8d2NtLW1vZGFsLWhlYWRlciB0aXRsZT1cIiR7bmFtZX1cIiAub25BY3Rpb249XCIke1VpVXRpbC5oYW5kbGVVcmlDb3B5fVwiIC5hY3Rpb25JY29uPVwiJHtTdmdVdGlsLkNPUFlfSUNPTn1cIj48L3djbS1tb2RhbC1oZWFkZXI+PHdjbS1tb2RhbC1jb250ZW50Pjx3Y20tY29ubmVjdG9yLXdhaXRpbmcgd2FsbGV0SWQ9XCIke2lkfVwiIGltYWdlSWQ9XCIke2lmRGVmaW5lZChpbWFnZV9pZCl9XCIgbGFiZWw9XCIke2BDb250aW51ZSBpbiAke25hbWV9Li4uYH1cIiAuaXNFcnJvcj1cIiR7dGhpcy5pc0Vycm9yfVwiPjwvd2NtLWNvbm5lY3Rvci13YWl0aW5nPjwvd2NtLW1vZGFsLWNvbnRlbnQ+PHdjbS1pbmZvLWZvb3Rlcj48d2NtLXRleHQgY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwic21hbGwtdGhpblwiPiR7YENvbm5lY3Rpb24gY2FuIGNvbnRpbnVlIGxvYWRpbmcgaWYgJHtuYW1lfSBpcyBub3QgaW5zdGFsbGVkIG9uIHlvdXIgZGV2aWNlYH08L3djbS10ZXh0Pjx3Y20tcGxhdGZvcm0tc2VsZWN0aW9uIC5pc01vYmlsZT1cIiR7aXNNb2JpbGV9XCIgLmlzV2ViPVwiJHtpc1dlYn1cIiAuaXNSZXRyeT1cIiR7dHJ1ZX1cIj48d2NtLWJ1dHRvbiAub25DbGljaz1cIiR7dGhpcy5vcGVuRGVza3RvcEFwcC5iaW5kKHRoaXMpfVwiIC5pY29uUmlnaHQ9XCIke1N2Z1V0aWwuUkVUUllfSUNPTn1cIj5SZXRyeTwvd2NtLWJ1dHRvbj48L3djbS1wbGF0Zm9ybS1zZWxlY3Rpb24+PC93Y20taW5mby1mb290ZXI+YDtcbiAgfVxufTtcbldjbURlc2t0b3BDb25uZWN0aW5nVmlldy5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJDVdO1xuX19kZWNvcmF0ZUNsYXNzJDYoW1xuICBzdGF0ZSgpXG5dLCBXY21EZXNrdG9wQ29ubmVjdGluZ1ZpZXcucHJvdG90eXBlLCBcImlzRXJyb3JcIiwgMik7XG5XY21EZXNrdG9wQ29ubmVjdGluZ1ZpZXcgPSBfX2RlY29yYXRlQ2xhc3MkNihbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20tZGVza3RvcC1jb25uZWN0aW5nLXZpZXdcIilcbl0sIFdjbURlc2t0b3BDb25uZWN0aW5nVmlldyk7XG5cbmNvbnN0IHN0eWxlcyQ0ID0gY3NzYHdjbS1pbmZvLWZvb3RlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO3BhZGRpbmc6NXB4IDB9d2NtLXRleHR7dGV4dC1hbGlnbjpjZW50ZXJ9d2NtLWJ1dHRvbnttYXJnaW4tdG9wOjE1cHh9YDtcblxudmFyIF9fZGVmUHJvcCQ1ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkNSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJDUgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkNSh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkNSh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtSW5zdGFsbFdhbGxldFZpZXcgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSBwcml2YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBvbkluc3RhbGwodXJpKSB7XG4gICAgaWYgKHVyaSkge1xuICAgICAgQ29yZVV0aWwub3BlbkhyZWYodXJpLCBcIl9ibGFua1wiKTtcbiAgICB9XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgaWQsIGltYWdlX2lkLCBob21lcGFnZSB9ID0gQ29yZVV0aWwuZ2V0V2FsbGV0Um91dGVyRGF0YSgpO1xuICAgIHJldHVybiBodG1sYDx3Y20tbW9kYWwtaGVhZGVyIHRpdGxlPVwiJHtuYW1lfVwiPjwvd2NtLW1vZGFsLWhlYWRlcj48d2NtLW1vZGFsLWNvbnRlbnQ+PHdjbS1jb25uZWN0b3Itd2FpdGluZyB3YWxsZXRJZD1cIiR7aWR9XCIgaW1hZ2VJZD1cIiR7aWZEZWZpbmVkKGltYWdlX2lkKX1cIiBsYWJlbD1cIk5vdCBEZXRlY3RlZFwiIC5pc1N0YWxlPVwiJHt0cnVlfVwiPjwvd2NtLWNvbm5lY3Rvci13YWl0aW5nPjwvd2NtLW1vZGFsLWNvbnRlbnQ+PHdjbS1pbmZvLWZvb3Rlcj48d2NtLXRleHQgY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwic21hbGwtdGhpblwiPiR7YERvd25sb2FkICR7bmFtZX0gdG8gY29udGludWUuIElmIG11bHRpcGxlIGJyb3dzZXIgZXh0ZW5zaW9ucyBhcmUgaW5zdGFsbGVkLCBkaXNhYmxlIG5vbiAke25hbWV9IG9uZXMgYW5kIHRyeSBhZ2FpbmB9PC93Y20tdGV4dD48d2NtLWJ1dHRvbiAub25DbGljaz1cIiR7KCkgPT4gdGhpcy5vbkluc3RhbGwoaG9tZXBhZ2UpfVwiIC5pY29uTGVmdD1cIiR7U3ZnVXRpbC5BUlJPV19ET1dOX0lDT059XCI+RG93bmxvYWQ8L3djbS1idXR0b24+PC93Y20taW5mby1mb290ZXI+YDtcbiAgfVxufTtcbldjbUluc3RhbGxXYWxsZXRWaWV3LnN0eWxlcyA9IFtUaGVtZVV0aWwuZ2xvYmFsQ3NzLCBzdHlsZXMkNF07XG5XY21JbnN0YWxsV2FsbGV0VmlldyA9IF9fZGVjb3JhdGVDbGFzcyQ1KFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1pbnN0YWxsLXdhbGxldC12aWV3XCIpXG5dLCBXY21JbnN0YWxsV2FsbGV0Vmlldyk7XG5cbmNvbnN0IHN0eWxlcyQzID0gY3NzYHdjbS13YWxsZXQtaW1hZ2V7Ym9yZGVyLXJhZGl1czp2YXIoLS13Y20td2FsbGV0LWljb24tbGFyZ2UtYm9yZGVyLXJhZGl1cyk7d2lkdGg6OTZweDtoZWlnaHQ6OTZweDttYXJnaW4tYm90dG9tOjIwcHh9d2NtLWluZm8tZm9vdGVye2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlfS53Y20tYXBwLXN0b3Jle2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS53Y20tYXBwLXN0b3JlIHdjbS13YWxsZXQtaW1hZ2V7bWFyZ2luLXJpZ2h0OjEwcHg7bWFyZ2luLWJvdHRvbTowO3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7Ym9yZGVyLXJhZGl1czp2YXIoLS13Y20td2FsbGV0LWljb24tc21hbGwtYm9yZGVyLXJhZGl1cyl9LndjbS1hcHAtc3RvcmUgZGl2e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LndjbS1hcHAtc3RvcmUgd2NtLWJ1dHRvbnttYXJnaW4tcmlnaHQ6LTEwcHh9LndjbS1ub3Rle2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzo1cHggMH0ud2NtLW5vdGUgd2NtLXRleHR7dGV4dC1hbGlnbjpjZW50ZXJ9d2NtLXBsYXRmb3JtLXNlbGVjdGlvbnttYXJnaW4tdG9wOi0xNXB4fS53Y20tbm90ZSB3Y20tdGV4dHttYXJnaW4tdG9wOjE1cHh9LndjbS1ub3RlIHdjbS10ZXh0IHNwYW57Y29sb3I6dmFyKC0td2NtLWFjY2VudC1jb2xvcil9YDtcblxudmFyIF9fZGVmUHJvcCQ0ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkNCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJDQgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkNCh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkNCh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtTW9iaWxlQ29ubmVjdGluZ1ZpZXcgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSBsaWZlY3ljbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMub3Blbk1vYmlsZUFwcCgpO1xuICB9XG4gIC8vIC0tIHByaXZhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIG9uRm9ybWF0QW5kUmVkaXJlY3QodXJpLCBmb3JjZVVuaXZlcnNhbFVybCA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBtb2JpbGUsIG5hbWUgfSA9IENvcmVVdGlsLmdldFdhbGxldFJvdXRlckRhdGEoKTtcbiAgICBjb25zdCBuYXRpdmVVcmwgPSBtb2JpbGUgPT0gbnVsbCA/IHZvaWQgMCA6IG1vYmlsZS5uYXRpdmU7XG4gICAgY29uc3QgdW5pdmVyc2FsVXJsID0gbW9iaWxlID09IG51bGwgPyB2b2lkIDAgOiBtb2JpbGUudW5pdmVyc2FsO1xuICAgIGNvbnN0IHRhcmdldCA9IENvcmVVdGlsLmlzVGVsZWdyYW0oKSA/IFwiX2JsYW5rXCIgOiBcIl9zZWxmXCI7XG4gICAgdXJpID0gQ29yZVV0aWwuaXNUZWxlZ3JhbSgpICYmIENvcmVVdGlsLmlzQW5kcm9pZCgpID8gZW5jb2RlVVJJQ29tcG9uZW50KHVyaSkgOiB1cmk7XG4gICAgaWYgKG5hdGl2ZVVybCAmJiAhZm9yY2VVbml2ZXJzYWxVcmwpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSBDb3JlVXRpbC5mb3JtYXROYXRpdmVVcmwobmF0aXZlVXJsLCB1cmksIG5hbWUpO1xuICAgICAgQ29yZVV0aWwub3BlbkhyZWYoaHJlZiwgdGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXZlcnNhbFVybCkge1xuICAgICAgY29uc3QgaHJlZiA9IENvcmVVdGlsLmZvcm1hdFVuaXZlcnNhbFVybCh1bml2ZXJzYWxVcmwsIHVyaSwgbmFtZSk7XG4gICAgICBDb3JlVXRpbC5vcGVuSHJlZihocmVmLCB0YXJnZXQpO1xuICAgIH1cbiAgfVxuICBvcGVuTW9iaWxlQXBwKGZvcmNlVW5pdmVyc2FsVXJsID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IHdhbGxldENvbm5lY3RVcmkgfSA9IE9wdGlvbnNDdHJsLnN0YXRlO1xuICAgIGNvbnN0IHJvdXRlckRhdGEgPSBDb3JlVXRpbC5nZXRXYWxsZXRSb3V0ZXJEYXRhKCk7XG4gICAgaWYgKHdhbGxldENvbm5lY3RVcmkpIHtcbiAgICAgIHRoaXMub25Gb3JtYXRBbmRSZWRpcmVjdCh3YWxsZXRDb25uZWN0VXJpLCBmb3JjZVVuaXZlcnNhbFVybCk7XG4gICAgfVxuICAgIFVpVXRpbC5zZXRSZWNlbnRXYWxsZXQocm91dGVyRGF0YSk7XG4gIH1cbiAgb25Hb1RvQXBwU3RvcmUoZG93bmxvYWRVcmwpIHtcbiAgICBpZiAoZG93bmxvYWRVcmwpIHtcbiAgICAgIENvcmVVdGlsLm9wZW5IcmVmKGRvd25sb2FkVXJsLCBcIl9ibGFua1wiKTtcbiAgICB9XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgaWQsIGltYWdlX2lkLCBhcHAsIG1vYmlsZSB9ID0gQ29yZVV0aWwuZ2V0V2FsbGV0Um91dGVyRGF0YSgpO1xuICAgIGNvbnN0IHsgaXNXZWIgfSA9IFVpVXRpbC5nZXRDYWNoZWRSb3V0ZXJXYWxsZXRQbGF0Zm9ybXMoKTtcbiAgICBjb25zdCBkb3dubG9hZFVybCA9IGFwcCA9PSBudWxsID8gdm9pZCAwIDogYXBwLmlvcztcbiAgICBjb25zdCB1bml2ZXJzYWxVcmwgPSBtb2JpbGUgPT0gbnVsbCA/IHZvaWQgMCA6IG1vYmlsZS51bml2ZXJzYWw7XG4gICAgcmV0dXJuIGh0bWxgPHdjbS1tb2RhbC1oZWFkZXIgdGl0bGU9XCIke25hbWV9XCI+PC93Y20tbW9kYWwtaGVhZGVyPjx3Y20tbW9kYWwtY29udGVudD48d2NtLWNvbm5lY3Rvci13YWl0aW5nIHdhbGxldElkPVwiJHtpZH1cIiBpbWFnZUlkPVwiJHtpZkRlZmluZWQoaW1hZ2VfaWQpfVwiIGxhYmVsPVwiVGFwICdPcGVuJyB0byBjb250aW51ZeKAplwiIC5pc0Vycm9yPVwiJHt0aGlzLmlzRXJyb3J9XCI+PC93Y20tY29ubmVjdG9yLXdhaXRpbmc+PC93Y20tbW9kYWwtY29udGVudD48d2NtLWluZm8tZm9vdGVyIGNsYXNzPVwid2NtLW5vdGVcIj48d2NtLXBsYXRmb3JtLXNlbGVjdGlvbiAuaXNXZWI9XCIke2lzV2VifVwiIC5pc1JldHJ5PVwiJHt0cnVlfVwiPjx3Y20tYnV0dG9uIC5vbkNsaWNrPVwiJHsoKSA9PiB0aGlzLm9wZW5Nb2JpbGVBcHAoZmFsc2UpfVwiIC5pY29uUmlnaHQ9XCIke1N2Z1V0aWwuUkVUUllfSUNPTn1cIj5SZXRyeTwvd2NtLWJ1dHRvbj48L3djbS1wbGF0Zm9ybS1zZWxlY3Rpb24+JHt1bml2ZXJzYWxVcmwgPyBodG1sYDx3Y20tdGV4dCBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzbWFsbC10aGluXCI+U3RpbGwgZG9lc24ndCB3b3JrPyA8c3BhbiB0YWJpbmRleD1cIjBcIiBAY2xpY2s9XCIkeygpID0+IHRoaXMub3Blbk1vYmlsZUFwcCh0cnVlKX1cIj5UcnkgdGhpcyBhbHRlcm5hdGUgbGluazwvc3Bhbj48L3djbS10ZXh0PmAgOiBudWxsfTwvd2NtLWluZm8tZm9vdGVyPjx3Y20taW5mby1mb290ZXIgY2xhc3M9XCJ3Y20tYXBwLXN0b3JlXCI+PGRpdj48d2NtLXdhbGxldC1pbWFnZSB3YWxsZXRJZD1cIiR7aWR9XCIgaW1hZ2VJZD1cIiR7aWZEZWZpbmVkKGltYWdlX2lkKX1cIj48L3djbS13YWxsZXQtaW1hZ2U+PHdjbS10ZXh0PiR7YEdldCAke25hbWV9YH08L3djbS10ZXh0PjwvZGl2Pjx3Y20tYnV0dG9uIC5pY29uUmlnaHQ9XCIke1N2Z1V0aWwuQVJST1dfUklHSFRfSUNPTn1cIiAub25DbGljaz1cIiR7KCkgPT4gdGhpcy5vbkdvVG9BcHBTdG9yZShkb3dubG9hZFVybCl9XCIgdmFyaWFudD1cImdob3N0XCI+QXBwIFN0b3JlPC93Y20tYnV0dG9uPjwvd2NtLWluZm8tZm9vdGVyPmA7XG4gIH1cbn07XG5XY21Nb2JpbGVDb25uZWN0aW5nVmlldy5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJDNdO1xuX19kZWNvcmF0ZUNsYXNzJDQoW1xuICBzdGF0ZSgpXG5dLCBXY21Nb2JpbGVDb25uZWN0aW5nVmlldy5wcm90b3R5cGUsIFwiaXNFcnJvclwiLCAyKTtcbldjbU1vYmlsZUNvbm5lY3RpbmdWaWV3ID0gX19kZWNvcmF0ZUNsYXNzJDQoW1xuICBjdXN0b21FbGVtZW50KFwid2NtLW1vYmlsZS1jb25uZWN0aW5nLXZpZXdcIilcbl0sIFdjbU1vYmlsZUNvbm5lY3RpbmdWaWV3KTtcblxuY29uc3Qgc3R5bGVzJDIgPSBjc3Ngd2NtLWluZm8tZm9vdGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7cGFkZGluZzo1cHggMH13Y20tdGV4dHt0ZXh0LWFsaWduOmNlbnRlcn1gO1xuXG52YXIgX19kZWZQcm9wJDMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyQzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2RlY29yYXRlQ2xhc3MkMyA9IChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwga2luZCkgPT4ge1xuICB2YXIgcmVzdWx0ID0ga2luZCA+IDEgPyB2b2lkIDAgOiBraW5kID8gX19nZXRPd25Qcm9wRGVzYyQzKHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCQzKHRhcmdldCwga2V5LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmxldCBXY21Nb2JpbGVRckNvbm5lY3RpbmdWaWV3ID0gY2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgaWQsIGltYWdlX2lkIH0gPSBDb3JlVXRpbC5nZXRXYWxsZXRSb3V0ZXJEYXRhKCk7XG4gICAgY29uc3QgeyBpc0Rlc2t0b3AsIGlzV2ViIH0gPSBVaVV0aWwuZ2V0Q2FjaGVkUm91dGVyV2FsbGV0UGxhdGZvcm1zKCk7XG4gICAgcmV0dXJuIGh0bWxgPHdjbS1tb2RhbC1oZWFkZXIgdGl0bGU9XCIke25hbWV9XCIgLm9uQWN0aW9uPVwiJHtVaVV0aWwuaGFuZGxlVXJpQ29weX1cIiAuYWN0aW9uSWNvbj1cIiR7U3ZnVXRpbC5DT1BZX0lDT059XCI+PC93Y20tbW9kYWwtaGVhZGVyPjx3Y20tbW9kYWwtY29udGVudD48d2NtLXdhbGxldGNvbm5lY3QtcXIgd2FsbGV0SWQ9XCIke2lkfVwiIGltYWdlSWQ9XCIke2lmRGVmaW5lZChpbWFnZV9pZCl9XCI+PC93Y20td2FsbGV0Y29ubmVjdC1xcj48L3djbS1tb2RhbC1jb250ZW50Pjx3Y20taW5mby1mb290ZXI+PHdjbS10ZXh0IGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cInNtYWxsLXRoaW5cIj4ke2BTY2FuIHRoaXMgUVIgQ29kZSB3aXRoIHlvdXIgcGhvbmUncyBjYW1lcmEgb3IgaW5zaWRlICR7bmFtZX0gYXBwYH08L3djbS10ZXh0Pjx3Y20tcGxhdGZvcm0tc2VsZWN0aW9uIC5pc0Rlc2t0b3A9XCIke2lzRGVza3RvcH1cIiAuaXNXZWI9XCIke2lzV2VifVwiPjwvd2NtLXBsYXRmb3JtLXNlbGVjdGlvbj48L3djbS1pbmZvLWZvb3Rlcj5gO1xuICB9XG59O1xuV2NtTW9iaWxlUXJDb25uZWN0aW5nVmlldy5zdHlsZXMgPSBbVGhlbWVVdGlsLmdsb2JhbENzcywgc3R5bGVzJDJdO1xuV2NtTW9iaWxlUXJDb25uZWN0aW5nVmlldyA9IF9fZGVjb3JhdGVDbGFzcyQzKFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1tb2JpbGUtcXItY29ubmVjdGluZy12aWV3XCIpXG5dLCBXY21Nb2JpbGVRckNvbm5lY3RpbmdWaWV3KTtcblxudmFyIF9fZGVmUHJvcCQyID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJDIgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkMih0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkMih0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtUXJjb2RlVmlldyA9IGNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIC0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8d2NtLW1vZGFsLWhlYWRlciB0aXRsZT1cIlNjYW4gdGhlIGNvZGVcIiAub25BY3Rpb249XCIke1VpVXRpbC5oYW5kbGVVcmlDb3B5fVwiIC5hY3Rpb25JY29uPVwiJHtTdmdVdGlsLkNPUFlfSUNPTn1cIj48L3djbS1tb2RhbC1oZWFkZXI+PHdjbS1tb2RhbC1jb250ZW50Pjx3Y20td2FsbGV0Y29ubmVjdC1xcj48L3djbS13YWxsZXRjb25uZWN0LXFyPjwvd2NtLW1vZGFsLWNvbnRlbnQ+YDtcbiAgfVxufTtcbldjbVFyY29kZVZpZXcuc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3NdO1xuV2NtUXJjb2RlVmlldyA9IF9fZGVjb3JhdGVDbGFzcyQyKFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS1xcmNvZGUtdmlld1wiKVxuXSwgV2NtUXJjb2RlVmlldyk7XG5cbmNvbnN0IHN0eWxlcyQxID0gY3NzYHdjbS1tb2RhbC1jb250ZW50e2hlaWdodDpjbGFtcCgyMDBweCw2MHZoLDYwMHB4KTtkaXNwbGF5OmJsb2NrO292ZXJmbG93OnNjcm9sbDtzY3JvbGxiYXItd2lkdGg6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tdG9wOjFweH0ud2NtLWdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNCw4MHB4KTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW46LTE1cHggLTEwcHg7cGFkZGluZy10b3A6MjBweH13Y20tbW9kYWwtY29udGVudDo6YWZ0ZXIsd2NtLW1vZGFsLWNvbnRlbnQ6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmZpeGVkO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDoxO3dpZHRoOjEwMCU7aGVpZ2h0OjIwcHg7b3BhY2l0eToxfXdjbS1tb2RhbC1jb250ZW50OjpiZWZvcmV7Ym94LXNoYWRvdzowIC0xcHggMCAwIHZhcigtLXdjbS1jb2xvci1iZy0xKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh2YXIoLS13Y20tY29sb3ItYmctMSkscmdiYSgyNTUsMjU1LDI1NSwwKSl9d2NtLW1vZGFsLWNvbnRlbnQ6OmFmdGVye2JveC1zaGFkb3c6MCAxcHggMCAwIHZhcigtLXdjbS1jb2xvci1iZy0xKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDApLHZhcigtLXdjbS1jb2xvci1iZy0xKSk7dG9wOmNhbGMoMTAwJSAtIDIwcHgpfXdjbS1tb2RhbC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9LndjbS1wbGFjZWhvbGRlci1ibG9ja3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjEwMHB4O292ZXJmbG93OmhpZGRlbn0ud2NtLWVtcHR5LC53Y20tbG9hZGluZ3tkaXNwbGF5OmZsZXh9LndjbS1sb2FkaW5nIC53Y20tcGxhY2Vob2xkZXItYmxvY2t7aGVpZ2h0OjEwMCV9LndjbS1lbmQtcmVhY2hlZCAud2NtLXBsYWNlaG9sZGVyLWJsb2Nre2hlaWdodDowO29wYWNpdHk6MH0ud2NtLWVtcHR5IC53Y20tcGxhY2Vob2xkZXItYmxvY2t7b3BhY2l0eToxO2hlaWdodDoxMDAlfXdjbS13YWxsZXQtYnV0dG9ue21hcmdpbjpjYWxjKCgxMDAlIC0gNjBweCkvIDMpIDB9YDtcblxudmFyIF9fZGVmUHJvcCQxID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MkMSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzJDEgPSAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGtpbmQpID0+IHtcbiAgdmFyIHJlc3VsdCA9IGtpbmQgPiAxID8gdm9pZCAwIDoga2luZCA/IF9fZ2V0T3duUHJvcERlc2MkMSh0YXJnZXQsIGtleSkgOiB0YXJnZXQ7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDEsIGRlY29yYXRvcjsgaSA+PSAwOyBpLS0pXG4gICAgaWYgKGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV0pXG4gICAgICByZXN1bHQgPSAoa2luZCA/IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcmVzdWx0KSA6IGRlY29yYXRvcihyZXN1bHQpKSB8fCByZXN1bHQ7XG4gIGlmIChraW5kICYmIHJlc3VsdClcbiAgICBfX2RlZlByb3AkMSh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5jb25zdCBQQUdFX0VOVFJJRVMgPSA0MDtcbmxldCBXY21XYWxsZXRFeHBsb3JlclZpZXcgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMubG9hZGluZyA9ICFFeHBsb3JlckN0cmwuc3RhdGUud2FsbGV0cy5saXN0aW5ncy5sZW5ndGg7XG4gICAgdGhpcy5maXJzdEZldGNoID0gIUV4cGxvcmVyQ3RybC5zdGF0ZS53YWxsZXRzLmxpc3RpbmdzLmxlbmd0aDtcbiAgICB0aGlzLnNlYXJjaCA9IFwiXCI7XG4gICAgdGhpcy5lbmRSZWFjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IHZvaWQgMDtcbiAgICB0aGlzLnNlYXJjaERlYm91bmNlID0gVWlVdGlsLmRlYm91bmNlKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIHRoaXMuZmlyc3RGZXRjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5kUmVhY2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHZhbHVlO1xuICAgICAgICBFeHBsb3JlckN0cmwucmVzZXRTZWFyY2goKTtcbiAgICAgICAgdGhpcy5mZXRjaFdhbGxldHMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBcIlwiO1xuICAgICAgICB0aGlzLmVuZFJlYWNoZWQgPSB0aGlzLmlzTGFzdFBhZ2UoKTtcbiAgICAgICAgRXhwbG9yZXJDdHJsLnJlc2V0U2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gLS0gbGlmZWN5Y2xlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlUGFnaW5hdGlvbk9ic2VydmVyKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYS5kaXNjb25uZWN0KCk7XG4gIH1cbiAgLy8gLS0gcHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgZ2V0IHBsYWNlaG9sZGVyRWwoKSB7XG4gICAgcmV0dXJuIFVpVXRpbC5nZXRTaGFkb3dSb290RWxlbWVudCh0aGlzLCBcIi53Y20tcGxhY2Vob2xkZXItYmxvY2tcIik7XG4gIH1cbiAgY3JlYXRlUGFnaW5hdGlvbk9ic2VydmVyKCkge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtlbGVtZW50XSkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaXNJbnRlcnNlY3RpbmcgJiYgISh0aGlzLnNlYXJjaCAmJiB0aGlzLmZpcnN0RmV0Y2gpKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hXYWxsZXRzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMucGxhY2Vob2xkZXJFbCk7XG4gIH1cbiAgaXNMYXN0UGFnZSgpIHtcbiAgICBjb25zdCB7IHdhbGxldHMsIHNlYXJjaCB9ID0gRXhwbG9yZXJDdHJsLnN0YXRlO1xuICAgIGNvbnN0IHsgbGlzdGluZ3MsIHRvdGFsIH0gPSB0aGlzLnNlYXJjaCA/IHNlYXJjaCA6IHdhbGxldHM7XG4gICAgcmV0dXJuIHRvdGFsIDw9IFBBR0VfRU5UUklFUyB8fCBsaXN0aW5ncy5sZW5ndGggPj0gdG90YWw7XG4gIH1cbiAgYXN5bmMgZmV0Y2hXYWxsZXRzKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7IHdhbGxldHMsIHNlYXJjaCB9ID0gRXhwbG9yZXJDdHJsLnN0YXRlO1xuICAgIGNvbnN0IHsgbGlzdGluZ3MsIHRvdGFsLCBwYWdlIH0gPSB0aGlzLnNlYXJjaCA/IHNlYXJjaCA6IHdhbGxldHM7XG4gICAgaWYgKCF0aGlzLmVuZFJlYWNoZWQgJiYgKHRoaXMuZmlyc3RGZXRjaCB8fCB0b3RhbCA+IFBBR0VfRU5UUklFUyAmJiBsaXN0aW5ncy5sZW5ndGggPCB0b3RhbCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IGNoYWlucyA9IChfYSA9IE9wdGlvbnNDdHJsLnN0YXRlLmNoYWlucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmpvaW4oXCIsXCIpO1xuICAgICAgICBjb25zdCB7IGxpc3RpbmdzOiBuZXdMaXN0aW5ncyB9ID0gYXdhaXQgRXhwbG9yZXJDdHJsLmdldFdhbGxldHMoe1xuICAgICAgICAgIHBhZ2U6IHRoaXMuZmlyc3RGZXRjaCA/IDEgOiBwYWdlICsgMSxcbiAgICAgICAgICBlbnRyaWVzOiBQQUdFX0VOVFJJRVMsXG4gICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICB2ZXJzaW9uOiAyLFxuICAgICAgICAgIGNoYWluc1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZXhwbG9yZXJJbWFnZXMgPSBuZXdMaXN0aW5ncy5tYXAoKHdhbGxldCkgPT4gVWlVdGlsLmdldFdhbGxldEljb24od2FsbGV0KSk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAuLi5leHBsb3JlckltYWdlcy5tYXAoYXN5bmMgKHVybCkgPT4gVWlVdGlsLnByZWxvYWRJbWFnZSh1cmwpKSxcbiAgICAgICAgICBDb3JlVXRpbC53YWl0KDMwMClcbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMuZW5kUmVhY2hlZCA9IHRoaXMuaXNMYXN0UGFnZSgpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgVG9hc3RDdHJsLm9wZW5Ub2FzdChVaVV0aWwuZ2V0RXJyb3JNZXNzYWdlKGVyciksIFwiZXJyb3JcIik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJzdEZldGNoID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uQ29ubmVjdChsaXN0aW5nKSB7XG4gICAgaWYgKENvcmVVdGlsLmlzQW5kcm9pZCgpKSB7XG4gICAgICBVaVV0aWwuaGFuZGxlTW9iaWxlTGlua2luZyhsaXN0aW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVWlVdGlsLmdvVG9Db25uZWN0aW5nVmlldyhsaXN0aW5nKTtcbiAgICB9XG4gIH1cbiAgb25TZWFyY2hDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5zZWFyY2hEZWJvdW5jZSh2YWx1ZSk7XG4gIH1cbiAgLy8gLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2FsbGV0cywgc2VhcmNoIH0gPSBFeHBsb3JlckN0cmwuc3RhdGU7XG4gICAgY29uc3QgeyBsaXN0aW5ncyB9ID0gdGhpcy5zZWFyY2ggPyBzZWFyY2ggOiB3YWxsZXRzO1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHRoaXMubG9hZGluZyAmJiAhbGlzdGluZ3MubGVuZ3RoO1xuICAgIGNvbnN0IGlzU2VhcmNoID0gdGhpcy5zZWFyY2gubGVuZ3RoID49IDM7XG4gICAgbGV0IG1hbnVhbFdhbGxldHMgPSBUZW1wbGF0ZVV0aWwubWFudWFsV2FsbGV0c1RlbXBsYXRlKCk7XG4gICAgbGV0IHJlY29tZW5kZWRXYWxsZXRzID0gVGVtcGxhdGVVdGlsLnJlY29tZW5kZWRXYWxsZXRzVGVtcGxhdGUodHJ1ZSk7XG4gICAgaWYgKGlzU2VhcmNoKSB7XG4gICAgICBtYW51YWxXYWxsZXRzID0gbWFudWFsV2FsbGV0cy5maWx0ZXIoXG4gICAgICAgICh7IHZhbHVlcyB9KSA9PiBVaVV0aWwuY2FzZVNhZmVJbmNsdWRlcyh2YWx1ZXNbMF0sIHRoaXMuc2VhcmNoKVxuICAgICAgKTtcbiAgICAgIHJlY29tZW5kZWRXYWxsZXRzID0gcmVjb21lbmRlZFdhbGxldHMuZmlsdGVyKFxuICAgICAgICAoeyB2YWx1ZXMgfSkgPT4gVWlVdGlsLmNhc2VTYWZlSW5jbHVkZXModmFsdWVzWzBdLCB0aGlzLnNlYXJjaClcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGlzRW1wdHkgPSAhdGhpcy5sb2FkaW5nICYmICFsaXN0aW5ncy5sZW5ndGggJiYgIXJlY29tZW5kZWRXYWxsZXRzLmxlbmd0aDtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJ3Y20tbG9hZGluZ1wiOiBpc0xvYWRpbmcsXG4gICAgICBcIndjbS1lbmQtcmVhY2hlZFwiOiB0aGlzLmVuZFJlYWNoZWQgfHwgIXRoaXMubG9hZGluZyxcbiAgICAgIFwid2NtLWVtcHR5XCI6IGlzRW1wdHlcbiAgICB9O1xuICAgIHJldHVybiBodG1sYDx3Y20tbW9kYWwtaGVhZGVyPjx3Y20tc2VhcmNoLWlucHV0IC5vbkNoYW5nZT1cIiR7dGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpfVwiPjwvd2NtLXNlYXJjaC1pbnB1dD48L3djbS1tb2RhbC1oZWFkZXI+PHdjbS1tb2RhbC1jb250ZW50IGNsYXNzPVwiJHtjbGFzc01hcChjbGFzc2VzKX1cIj48ZGl2IGNsYXNzPVwid2NtLWdyaWRcIj4ke2lzTG9hZGluZyA/IG51bGwgOiBtYW51YWxXYWxsZXRzfSAke2lzTG9hZGluZyA/IG51bGwgOiByZWNvbWVuZGVkV2FsbGV0c30gJHtpc0xvYWRpbmcgPyBudWxsIDogbGlzdGluZ3MubWFwKFxuICAgICAgKGxpc3RpbmcpID0+IGh0bWxgJHtsaXN0aW5nID8gaHRtbGA8d2NtLXdhbGxldC1idXR0b24gaW1hZ2VJZD1cIiR7bGlzdGluZy5pbWFnZV9pZH1cIiBuYW1lPVwiJHtsaXN0aW5nLm5hbWV9XCIgd2FsbGV0SWQ9XCIke2xpc3RpbmcuaWR9XCIgLm9uQ2xpY2s9XCIkeygpID0+IHRoaXMub25Db25uZWN0KGxpc3RpbmcpfVwiPjwvd2NtLXdhbGxldC1idXR0b24+YCA6IG51bGx9YFxuICAgICl9PC9kaXY+PGRpdiBjbGFzcz1cIndjbS1wbGFjZWhvbGRlci1ibG9ja1wiPiR7aXNFbXB0eSA/IGh0bWxgPHdjbS10ZXh0IHZhcmlhbnQ9XCJiaWctYm9sZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+Tm8gcmVzdWx0cyBmb3VuZDwvd2NtLXRleHQ+YCA6IG51bGx9ICR7IWlzRW1wdHkgJiYgdGhpcy5sb2FkaW5nID8gaHRtbGA8d2NtLXNwaW5uZXI+PC93Y20tc3Bpbm5lcj5gIDogbnVsbH08L2Rpdj48L3djbS1tb2RhbC1jb250ZW50PmA7XG4gIH1cbn07XG5XY21XYWxsZXRFeHBsb3JlclZpZXcuc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlcyQxXTtcbl9fZGVjb3JhdGVDbGFzcyQxKFtcbiAgc3RhdGUoKVxuXSwgV2NtV2FsbGV0RXhwbG9yZXJWaWV3LnByb3RvdHlwZSwgXCJsb2FkaW5nXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJDEoW1xuICBzdGF0ZSgpXG5dLCBXY21XYWxsZXRFeHBsb3JlclZpZXcucHJvdG90eXBlLCBcImZpcnN0RmV0Y2hcIiwgMik7XG5fX2RlY29yYXRlQ2xhc3MkMShbXG4gIHN0YXRlKClcbl0sIFdjbVdhbGxldEV4cGxvcmVyVmlldy5wcm90b3R5cGUsIFwic2VhcmNoXCIsIDIpO1xuX19kZWNvcmF0ZUNsYXNzJDEoW1xuICBzdGF0ZSgpXG5dLCBXY21XYWxsZXRFeHBsb3JlclZpZXcucHJvdG90eXBlLCBcImVuZFJlYWNoZWRcIiwgMik7XG5XY21XYWxsZXRFeHBsb3JlclZpZXcgPSBfX2RlY29yYXRlQ2xhc3MkMShbXG4gIGN1c3RvbUVsZW1lbnQoXCJ3Y20td2FsbGV0LWV4cGxvcmVyLXZpZXdcIilcbl0sIFdjbVdhbGxldEV4cGxvcmVyVmlldyk7XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2B3Y20taW5mby1mb290ZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtwYWRkaW5nOjVweCAwfXdjbS10ZXh0e3RleHQtYWxpZ246Y2VudGVyfWA7XG5cbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19kZWNvcmF0ZUNsYXNzID0gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBraW5kKSA9PiB7XG4gIHZhciByZXN1bHQgPSBraW5kID4gMSA/IHZvaWQgMCA6IGtpbmQgPyBfX2dldE93blByb3BEZXNjKHRhcmdldCwga2V5KSA6IHRhcmdldDtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMSwgZGVjb3JhdG9yOyBpID49IDA7IGktLSlcbiAgICBpZiAoZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXSlcbiAgICAgIHJlc3VsdCA9IChraW5kID8gZGVjb3JhdG9yKHRhcmdldCwga2V5LCByZXN1bHQpIDogZGVjb3JhdG9yKHJlc3VsdCkpIHx8IHJlc3VsdDtcbiAgaWYgKGtpbmQgJiYgcmVzdWx0KVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIGtleSwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgV2NtV2ViQ29ubmVjdGluZ1ZpZXcgPSBjbGFzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyAtLSBsaWZlY3ljbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMub3BlbldlYldhbGxldCgpO1xuICB9XG4gIC8vIC0tIHByaXZhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIG9uRm9ybWF0QW5kUmVkaXJlY3QodXJpKSB7XG4gICAgY29uc3QgeyBkZXNrdG9wLCBuYW1lIH0gPSBDb3JlVXRpbC5nZXRXYWxsZXRSb3V0ZXJEYXRhKCk7XG4gICAgY29uc3QgdW5pdmVyc2FsVXJsID0gZGVza3RvcCA9PSBudWxsID8gdm9pZCAwIDogZGVza3RvcC51bml2ZXJzYWw7XG4gICAgaWYgKHVuaXZlcnNhbFVybCkge1xuICAgICAgY29uc3QgaHJlZiA9IENvcmVVdGlsLmZvcm1hdFVuaXZlcnNhbFVybCh1bml2ZXJzYWxVcmwsIHVyaSwgbmFtZSk7XG4gICAgICBDb3JlVXRpbC5vcGVuSHJlZihocmVmLCBcIl9ibGFua1wiKTtcbiAgICB9XG4gIH1cbiAgb3BlbldlYldhbGxldCgpIHtcbiAgICBjb25zdCB7IHdhbGxldENvbm5lY3RVcmkgfSA9IE9wdGlvbnNDdHJsLnN0YXRlO1xuICAgIGNvbnN0IHJvdXRlckRhdGEgPSBDb3JlVXRpbC5nZXRXYWxsZXRSb3V0ZXJEYXRhKCk7XG4gICAgVWlVdGlsLnNldFJlY2VudFdhbGxldChyb3V0ZXJEYXRhKTtcbiAgICBpZiAod2FsbGV0Q29ubmVjdFVyaSkge1xuICAgICAgdGhpcy5vbkZvcm1hdEFuZFJlZGlyZWN0KHdhbGxldENvbm5lY3RVcmkpO1xuICAgIH1cbiAgfVxuICAvLyAtLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBpZCwgaW1hZ2VfaWQgfSA9IENvcmVVdGlsLmdldFdhbGxldFJvdXRlckRhdGEoKTtcbiAgICBjb25zdCB7IGlzTW9iaWxlLCBpc0Rlc2t0b3AgfSA9IFVpVXRpbC5nZXRDYWNoZWRSb3V0ZXJXYWxsZXRQbGF0Zm9ybXMoKTtcbiAgICBjb25zdCBpc01vYmlsZVBsYXRmb3JtID0gQ29yZVV0aWwuaXNNb2JpbGUoKTtcbiAgICByZXR1cm4gaHRtbGA8d2NtLW1vZGFsLWhlYWRlciB0aXRsZT1cIiR7bmFtZX1cIiAub25BY3Rpb249XCIke1VpVXRpbC5oYW5kbGVVcmlDb3B5fVwiIC5hY3Rpb25JY29uPVwiJHtTdmdVdGlsLkNPUFlfSUNPTn1cIj48L3djbS1tb2RhbC1oZWFkZXI+PHdjbS1tb2RhbC1jb250ZW50Pjx3Y20tY29ubmVjdG9yLXdhaXRpbmcgd2FsbGV0SWQ9XCIke2lkfVwiIGltYWdlSWQ9XCIke2lmRGVmaW5lZChpbWFnZV9pZCl9XCIgbGFiZWw9XCIke2BDb250aW51ZSBpbiAke25hbWV9Li4uYH1cIiAuaXNFcnJvcj1cIiR7dGhpcy5pc0Vycm9yfVwiPjwvd2NtLWNvbm5lY3Rvci13YWl0aW5nPjwvd2NtLW1vZGFsLWNvbnRlbnQ+PHdjbS1pbmZvLWZvb3Rlcj48d2NtLXRleHQgY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwic21hbGwtdGhpblwiPiR7YCR7bmFtZX0gd2ViIGFwcCBoYXMgb3BlbmVkIGluIGEgbmV3IHRhYi4gR28gdGhlcmUsIGFjY2VwdCB0aGUgY29ubmVjdGlvbiwgYW5kIGNvbWUgYmFja2B9PC93Y20tdGV4dD48d2NtLXBsYXRmb3JtLXNlbGVjdGlvbiAuaXNNb2JpbGU9XCIke2lzTW9iaWxlfVwiIC5pc0Rlc2t0b3A9XCIke2lzTW9iaWxlUGxhdGZvcm0gPyBmYWxzZSA6IGlzRGVza3RvcH1cIiAuaXNSZXRyeT1cIiR7dHJ1ZX1cIj48d2NtLWJ1dHRvbiAub25DbGljaz1cIiR7dGhpcy5vcGVuV2ViV2FsbGV0LmJpbmQodGhpcyl9XCIgLmljb25SaWdodD1cIiR7U3ZnVXRpbC5SRVRSWV9JQ09OfVwiPlJldHJ5PC93Y20tYnV0dG9uPjwvd2NtLXBsYXRmb3JtLXNlbGVjdGlvbj48L3djbS1pbmZvLWZvb3Rlcj5gO1xuICB9XG59O1xuV2NtV2ViQ29ubmVjdGluZ1ZpZXcuc3R5bGVzID0gW1RoZW1lVXRpbC5nbG9iYWxDc3MsIHN0eWxlc107XG5fX2RlY29yYXRlQ2xhc3MoW1xuICBzdGF0ZSgpXG5dLCBXY21XZWJDb25uZWN0aW5nVmlldy5wcm90b3R5cGUsIFwiaXNFcnJvclwiLCAyKTtcbldjbVdlYkNvbm5lY3RpbmdWaWV3ID0gX19kZWNvcmF0ZUNsYXNzKFtcbiAgY3VzdG9tRWxlbWVudChcIndjbS13ZWItY29ubmVjdGluZy12aWV3XCIpXG5dLCBXY21XZWJDb25uZWN0aW5nVmlldyk7XG5cbmV4cG9ydCB7IFdjbU1vZGFsLCBXY21RckNvZGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9