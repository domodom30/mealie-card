/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4=globalThis,e$3=t$4.ShadowRoot&&(void 0===t$4.ShadyCSS||t$4.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$5=new WeakMap;let n$4 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$4("string"==typeof t?t:t+"",void 0,s$3),i$6=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$4(o,t,s$3)},S$1=(s,o)=>{if(e$3)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$4.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$3=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$5,defineProperty:e$2,getOwnPropertyDescriptor:h$2,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$4,getPrototypeOf:n$3}=Object,a$1=globalThis,c$2=a$1.trustedTypes,l$1=c$2?c$2.emptyScript:"",p$2=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$3={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$5(t,s),b$1={attribute:true,type:String,converter:u$3,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$2(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$3(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$3(s));}else void 0!==s&&i.push(c$3(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$3).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$3;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$2?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,i$4=t=>t,s$2=t$3.trustedTypes,e$1=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,h$1="$lit$",o$3=`lit$${Math.random().toFixed(9).slice(2)}$`,n$2="?"+o$3,r$2=`<${n$2}>`,l=document,c$1=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u$2=Array.isArray,d=t=>u$2(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$1=/>/g,p$1=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u$2(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v$1;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v$1?"!--"===u[1]?c=_:void 0!==u[1]?c=m$1:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p$1):void 0!==u[3]&&(c=p$1):c===p$1?">"===u[0]?(c=n??v$1,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p$1:'"'===u[3]?$:g):c===$||c===g?c=p$1:c===_||c===m$1?c=v$1:(c=p$1,n=void 0);const x=c===p$1&&t[i+1].startsWith("/>")?" ":"";l+=c===v$1?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h$1+s.slice(d)+o$3+x):s+o$3+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h$1)){const i=v[a++],s=r.getAttribute(t).split(o$3),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$3)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$3),i=t.length-1;if(i>0){r.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c$1()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c$1());}}}else if(8===r.nodeType)if(r.data===n$2)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$3,t+1));)d.push({type:7,index:l}),t+=o$3.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M$1(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M$1(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M$1(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c$1()),this.O(c$1()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$4(t).nextSibling;i$4(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M$1(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M$1(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M$1(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M$1(this,t);}}const j={I:k},B=t$3.litHtmlPolyfillSupport;B?.(S,k),(t$3.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c$1(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=globalThis;let i$3 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$3._$litElement$=true,i$3["finalized"]=true,s$1.litElementHydrateSupport?.({LitElement:i$3});const o$2=s$1.litElementPolyfillSupport;o$2?.({LitElement:i$3});(s$1.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:true,type:String,converter:u$3,reflect:false,hasChanged:f$1},r$1=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n$1(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n$1({...r,state:true,attribute:false})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1={ATTRIBUTE:1,CHILD:2},e=t=>(...e)=>({_$litDirective$:t,values:e});let i$2 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n="important",i$1=" !"+n,o=e(class extends i$2{constructor(t){if(super(t),t.type!==t$1.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i$1);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e;}}return E}});

const MEALIE_DOMAIN = "mealie";
const DEFAULT_RESULT_LIMIT = 9999;
const FAVORITES_FETCH_LIMIT = 9999;
const ADD_RECIPE_RESULT_LIMIT = 30;
const SEARCH_DEBOUNCE_MS = 300;
const COMMON_DISPLAY_DEFAULTS = {
  show_image: false,
  show_rating: false,
  show_servings: false,
  show_prep_time: true,
  show_total_time: true,
  show_perform_time: true,
  show_description: false
};
const DEFAULT_MEALIE_GROUP_SLUG = "home";
const COMMON_BASE_DEFAULTS = {
  url: "",
  recipe_view: "dialog",
  mealie_group_slug: DEFAULT_MEALIE_GROUP_SLUG
};
const DEFAULT_MEALPLAN_CONFIG = {
  type: "custom:mealie-mealplan-card",
  entry_types: [],
  recipes_layout: "vertical",
  days_layout: "vertical",
  day_offset: 0,
  recipes_columns: 2,
  days_columns: 2,
  show_add_recipe_button: true,
  show_random_button: true,
  show_note_button: true,
  show_view_recipe_button: true,
  show_shopping_list_button: true,
  show_edit_mealplan_button: true,
  show_delete_mealplan_button: true,
  default_shopping_list_id: "",
  ...COMMON_DISPLAY_DEFAULTS,
  ...COMMON_BASE_DEFAULTS
};
const DEFAULT_RECIPE_CONFIG = {
  type: "custom:mealie-recipe-card",
  result_limit: DEFAULT_RESULT_LIMIT,
  show_search: false,
  show_favorites_only: false,
  show_favorite: false,
  show_import_button: false,
  default_shopping_list_id: "",
  ...COMMON_DISPLAY_DEFAULTS,
  ...COMMON_BASE_DEFAULTS
};
function normalizeConfig(config, defaults) {
  const result = { ...config };
  for (const key of Object.keys(defaults)) {
    result[key] = result[key] ?? defaults[key];
  }
  return result;
}
function normalizeTodayConfig(config) {
  return normalizeConfig(config, DEFAULT_MEALPLAN_CONFIG);
}
function normalizeRecipeConfig(config) {
  return normalizeConfig(config, DEFAULT_RECIPE_CONFIG);
}

const ENTRY_TYPES = ["breakfast", "lunch", "dinner", "side", "dessert", "drink", "snack"];

var cards$b = {
	name_mealplan: "Mealie Måltidsplan",
	description_mealplan: "Vis dagens måltider",
	name_recipes: "Mealie Opskrifter",
	description_recipes: "Vis dine opskrifter fra Mealie-instansen",
	view_recipe: "Vis opskrift",
	day_actions: "Dagens handlinger",
	recipe_actions: "Opskriftshandlinger",
	delete_mealplan: "Fjern fra plan",
	edit_mealplan: "Rediger måltidsplan",
	random_mealplan: "Tilfældigt måltid"
};
var common$d = {
	no_recipe: "Ingen opskrift",
	no_mealplan: "Intet måltid",
	today: "I dag",
	breakfast: "Morgenmad",
	lunch: "Frokost",
	dinner: "Aftensmad",
	side: "Tilbehør",
	dessert: "Dessert",
	drink: "Drik",
	snack: "Snack",
	search_placeholder: "Søg opskrifter..."
};
var dialog$c = {
	add_to_mealplan: "Tilføj til måltidsplan",
	add_recipe_to_mealplan: "Tilføj til måltidsplan",
	select_date: "Vælg en dato",
	select_meal_type: "Måltidstype",
	select_recipe: "Vælg en opskrift",
	view_as_list: "Listevisning",
	view_as_grid: "Gittervisning",
	recipe_added_success: "Opskrift tilføjet til plan",
	cancel: "Annuller",
	add: "Tilføj",
	mealplan_deleted_success: "Måltid fjernet fra plan",
	confirm_delete_title: "Fjern dette måltid?",
	confirm: "Bekræft",
	ingredients: "Ingredienser",
	instructions: "Vejledning",
	times: "Tider",
	prep_time: "Forberedelse",
	cooking_time: "Tilberedning",
	total_time: "Total",
	add_note_to_mealplan: "Tilføj en note",
	note_title: "Titel",
	note_text: "Note (valgfri)",
	note_added_success: "Note tilføjet til plan",
	servings: "Portioner",
	decrease_servings: "Færre portioner",
	increase_servings: "Flere portioner",
	edit_mealplan: "Rediger måltidsplan",
	mealplan_updated_success: "Måltidsplan opdateret",
	save: "Gem",
	add_favorite: "Tilføj til favoritter",
	remove_favorite: "Fjern fra favoritter",
	add_to_shopping_list: "Tilføj til indkøbsliste",
	select_shopping_list: "Vælg indkøbsliste",
	shopping_list_quantity: "Mængdemultiplikator",
	recipe_added_to_shopping_list: "Opskrift tilføjet til indkøbsliste",
	no_shopping_lists: "Ingen indkøbslister tilgængelige",
	no_ingredients: "Ingen ingredienser tilgængelige",
	next: "Næste",
	back: "Tilbage",
	select_all: "Vælg alle",
	import_recipe: "Importer opskrift",
	import_url: "Opskrift-URL",
	import_include_tags: "Inkluder tags",
	"import": "Importer",
	recipe_imported_success: "Opskrift importeret",
	open_in_mealie: "Åbn i Mealie"
};
var info$b = {
	no_url: "Konfigurer Mealie URL for at aktivere billeder og opskriftslinks."
};
var error$b = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Fejl ved indlæsning af konfiguration",
	error_loading: "Fejl ved indlæsning af data",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Fejl ved sletning af måltid",
	error_updating_mealplan: "Fejl ved opdatering af måltidsplan"
};
var editor$b = {
	integration: "Mealie integration",
	entry_types: "Måltidstyper der skal vises",
	loading: "Indlæser...",
	mealie_url: "Mealie URL",
	image_url: "Billed-URL eller lokal sti (valgfri)",
	number_of_recipes: "Antal opskrifter der skal vises",
	settings_recipes_card: "Visningskonfiguration",
	settings_infos: "Opskriftsinformation",
	settings_image: "Billede",
	settings_times: "Tider",
	settings_title_layout: "Layout",
	show_image: "Vis billede",
	show_rating: "Vis bedømmelse",
	show_favorite: "Vis favorit",
	show_servings: "Portioner & Mængde",
	show_description: "Vis beskrivelse",
	show_prep_time: "Vis forberedelsestid",
	show_cooking_time: "Vis tilberedningstid",
	show_total_time: "Vis total tid",
	layout_mode: "Visning",
	days_columns: "Kolonner med dage",
	recipes_columns: "Kolonner med måltider",
	layout_vertical: "Lodret",
	layout_horizontal: "Måltider side om side",
	layout_side_by_side: "Dage side om side",
	layout_days_and_meals_side_by_side: "Dage og måltider side om side",
	days_range: "Viste dage",
	days_range_helper: "Et tal (f.eks. 3 = om 3 dage) eller et interval (f.eks. 0-6 = i dag og de 6 følgende dage)",
	show_search: "Søgelinje",
	show_favorites_only: "Kun favoritter",
	show_import_button: "Vis importknap",
	show_random_button: "Vis knap til tilfældig måltid",
	settings_meal_actions: "Måltidshandlinger",
	settings_recipe_actions: "Handlinger på opskrifter",
	show_add_recipe_button: "Vis knap Tilføj opskrift",
	show_note_button: "Vis knap Tilføj note",
	settings_recipe_view: "Åbning af opskrifter",
	recipe_view: "Åbn opskriften i",
	recipe_view_dialog: "Dialog i kortet",
	recipe_view_webview: "Integreret Mealie-visning",
	recipe_view_browser: "Ny browserfane",
	mealie_group_slug: "Mealie-gruppe (slug)",
	settings_language: "Sprog",
	language: "Sprog",
	language_auto: "Automatisk (Home Assistant-sprog)",
	language_helper: "Tilsidesætter Home Assistant-sproget for dette kort, f.eks. for at bruge en regional variant som fr-CA."
};
var time$b = {
	hour: "time",
	hours: "timer",
	minute: "minut",
	minutes: "minutter",
	hour_short: "t",
	minute_short: "min"
};
var da = {
	cards: cards$b,
	common: common$d,
	dialog: dialog$c,
	info: info$b,
	error: error$b,
	editor: editor$b,
	time: time$b
};

var da$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$b,
  common: common$d,
  default: da,
  dialog: dialog$c,
  editor: editor$b,
  error: error$b,
  info: info$b,
  time: time$b
});

var cards$a = {
	name_mealplan: "Mealie Speiseplan",
	description_mealplan: "Heutige Mahlzeiten anzeigen",
	name_recipes: "Mealie Rezepte",
	description_recipes: "Zeigen Sie Ihre Rezepte von der Mealie-Instanz an",
	view_recipe: "Rezept anzeigen",
	day_actions: "Aktionen des Tages",
	recipe_actions: "Rezeptaktionen",
	delete_mealplan: "Aus dem Plan löschen",
	edit_mealplan: "Eintrag bearbeiten",
	random_mealplan: "Zufälliges Gericht"
};
var common$c = {
	no_recipe: "Kein Rezept",
	no_mealplan: "Keine Mahlzeit",
	today: "Heute",
	breakfast: "Frühstück",
	lunch: "Mittagessen",
	dinner: "Abendessen",
	side: "Beilage",
	dessert: "Dessert",
	drink: "Getränk",
	snack: "Snack",
	search_placeholder: "Rezepte suchen..."
};
var dialog$b = {
	add_to_mealplan: "Zum Speiseplan hinzufügen",
	add_recipe_to_mealplan: "zum Speiseplan hinzufügen",
	select_date: "Datum auswählen",
	select_meal_type: "Mahlzeittyp",
	select_recipe: "Rezept auswählen",
	view_as_list: "Listenansicht",
	view_as_grid: "Rasteransicht",
	recipe_added_success: "Rezept zum Plan hinzugefügt",
	cancel: "Abbrechen",
	add: "Hinzufügen",
	mealplan_deleted_success: "Mahlzeit aus dem Plan entfernt",
	confirm_delete_title: "Diese Mahlzeit entfernen?",
	confirm: "Bestätigen",
	ingredients: "Zutaten",
	instructions: "Anleitung",
	times: "Zeiten",
	prep_time: "Vorbereitung",
	cooking_time: "Kochen",
	total_time: "Gesamt",
	add_note_to_mealplan: "Notiz hinzufügen",
	note_title: "Titel",
	note_text: "Notiz (optional)",
	note_added_success: "Notiz zum Plan hinzugefügt",
	servings: "Portionen",
	decrease_servings: "Weniger Portionen",
	increase_servings: "Mehr Portionen",
	edit_mealplan: "Eintrag bearbeiten",
	mealplan_updated_success: "Eintrag aktualisiert",
	save: "Speichern",
	add_favorite: "Zu Favoriten hinzufügen",
	remove_favorite: "Aus Favoriten entfernen",
	add_to_shopping_list: "Zur Einkaufsliste hinzufügen",
	select_shopping_list: "Einkaufsliste auswählen",
	shopping_list_quantity: "Mengenmultiplikator",
	recipe_added_to_shopping_list: "Rezept zur Einkaufsliste hinzugefügt",
	no_shopping_lists: "Keine Einkaufslisten verfügbar",
	no_ingredients: "Keine Zutaten verfügbar",
	next: "Weiter",
	back: "Zurück",
	select_all: "Alle auswählen",
	import_recipe: "Rezept importieren",
	import_url: "Rezept-URL",
	import_include_tags: "Tags einschließen",
	"import": "Importieren",
	recipe_imported_success: "Rezept importiert",
	open_in_mealie: "In Mealie öffnen"
};
var info$a = {
	no_url: "Konfigurieren Sie die Mealie-URL, um Bilder und Rezeptlinks zu aktivieren."
};
var error$a = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Fehler beim Laden der Konfiguration",
	error_loading: "Fehler beim Laden der Daten",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Fehler beim Löschen der Mahlzeit",
	error_updating_mealplan: "Fehler beim Aktualisieren des Speiseplans"
};
var editor$a = {
	integration: "Mealie integration",
	entry_types: "Anzuzeigende Mahlzeittypen",
	loading: "Wird geladen...",
	mealie_url: "Mealie URL",
	image_url: "Bild-URL oder lokaler Pfad (optional)",
	number_of_recipes: "Anzahl der anzuzeigenden Rezepte",
	settings_recipes_card: "Anzeigekonfiguration",
	settings_infos: "Rezeptinfos",
	settings_image: "Bild",
	settings_times: "Zeiten",
	settings_title_layout: "Layout",
	show_image: "Bild anzeigen",
	show_rating: "Bewertung anzeigen",
	show_favorite: "Favorit anzeigen",
	show_servings: "Portionen & Menge",
	show_description: "Beschreibung anzeigen",
	show_prep_time: "Vorbereitungszeit anzeigen",
	show_cooking_time: "Kochzeit anzeigen",
	show_total_time: "Gesamtzeit anzeigen",
	layout_mode: "Anordnung",
	days_columns: "Spalten für Tage",
	recipes_columns: "Spalten für Mahlzeiten",
	layout_vertical: "Vertikal",
	layout_horizontal: "Mahlzeiten nebeneinander",
	layout_side_by_side: "Tage nebeneinander",
	layout_days_and_meals_side_by_side: "Tage und Mahlzeiten nebeneinander",
	days_range: "Angezeigte Tage",
	days_range_helper: "Eine Zahl (z. B. 3 = in 3 Tagen) oder ein Bereich (z. B. 0-6 = heute und die 6 folgenden Tage)",
	show_search: "Suchleiste",
	show_favorites_only: "Nur Favoriten",
	show_import_button: "Import-Schaltfläche anzeigen",
	show_random_button: "Zufalls-Mahlzeit-Schaltfläche anzeigen",
	settings_meal_actions: "Mahlzeiten-Aktionen",
	settings_recipe_actions: "Aktionen für Rezepte",
	show_add_recipe_button: "Rezept-Button anzeigen",
	show_note_button: "Notiz-Button anzeigen",
	settings_recipe_view: "Öffnen von Rezepten",
	recipe_view: "Rezept öffnen in",
	recipe_view_dialog: "Dialog in der Karte",
	recipe_view_webview: "Eingebettete Mealie-Ansicht",
	recipe_view_browser: "Neuer Browser-Tab",
	mealie_group_slug: "Mealie-Gruppe (Slug)",
	settings_language: "Sprache",
	language: "Sprache",
	language_auto: "Automatisch (Home-Assistant-Sprache)",
	language_helper: "Überschreibt die Home-Assistant-Sprache für diese Karte, z. B. für eine regionale Variante wie fr-CA."
};
var time$a = {
	hour: "Stunde",
	hours: "Stunden",
	minute: "Minute",
	minutes: "Minuten",
	hour_short: "Std",
	minute_short: "Min"
};
var de = {
	cards: cards$a,
	common: common$c,
	dialog: dialog$b,
	info: info$a,
	error: error$a,
	editor: editor$a,
	time: time$a
};

var de$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$a,
  common: common$c,
  default: de,
  dialog: dialog$b,
  editor: editor$a,
  error: error$a,
  info: info$a,
  time: time$a
});

var cards$9 = {
	name_mealplan: "Mealie Meal Plan",
	description_mealplan: "Display today's meals",
	name_recipes: "Mealie Recipes",
	description_recipes: "Display your recipes from Mealie instance",
	view_recipe: "View recipe",
	day_actions: "Day actions",
	recipe_actions: "Recipe actions",
	delete_mealplan: "Delete from plan",
	edit_mealplan: "Edit meal plan entry",
	random_mealplan: "Random meal"
};
var common$b = {
	no_recipe: "No recipe",
	no_mealplan: "No meal",
	today: "Today",
	breakfast: "Breakfast",
	lunch: "Lunch",
	dinner: "Dinner",
	side: "Side",
	dessert: "Dessert",
	drink: "Drink",
	snack: "Snack",
	search_placeholder: "Search recipes..."
};
var dialog$a = {
	add_to_mealplan: "Add to meal plan",
	add_recipe_to_mealplan: "Add to meal plan",
	select_date: "Select a date",
	select_meal_type: "Meal type",
	select_recipe: "Select a recipe",
	view_as_list: "List view",
	view_as_grid: "Grid view",
	recipe_added_success: "Recipe added to plan",
	cancel: "Cancel",
	add: "Add",
	mealplan_deleted_success: "Meal removed from plan",
	confirm_delete_title: "Remove this meal?",
	confirm: "Confirm",
	ingredients: "Ingredients",
	instructions: "Instructions",
	times: "Times",
	prep_time: "Preparation",
	cooking_time: "Cooking",
	total_time: "Total",
	add_note_to_mealplan: "Add a note",
	note_title: "Title",
	note_text: "Note (optional)",
	note_added_success: "Note added to plan",
	servings: "Servings",
	decrease_servings: "Decrease servings",
	increase_servings: "Increase servings",
	edit_mealplan: "Edit meal plan entry",
	mealplan_updated_success: "Meal plan entry updated",
	save: "Save",
	add_favorite: "Add to favorites",
	remove_favorite: "Remove from favorites",
	add_to_shopping_list: "Add to shopping list",
	select_shopping_list: "Select shopping list",
	shopping_list_quantity: "Quantity multiplier",
	recipe_added_to_shopping_list: "Recipe added to shopping list",
	no_shopping_lists: "No shopping lists available",
	no_ingredients: "No ingredients available",
	next: "Next",
	back: "Back",
	select_all: "Select all",
	import_recipe: "Import recipe",
	import_url: "Recipe URL",
	import_include_tags: "Include tags",
	"import": "Import",
	recipe_imported_success: "Recipe imported",
	open_in_mealie: "Open in Mealie"
};
var info$9 = {
	no_url: "Configure Mealie URL to enable images and recipe links."
};
var error$9 = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Error loading configuration",
	error_loading: "Error loading data",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Error deleting meal",
	error_updating_mealplan: "Error updating meal plan"
};
var editor$9 = {
	integration: "Mealie integration",
	entry_types: "Meal types to display",
	loading: "Loading...",
	mealie_url: "Mealie URL",
	image_url: "Image URL or local path (optional)",
	number_of_recipes: "Number of recipes to display",
	settings_recipes_card: "Display configuration",
	settings_infos: "Recipe details",
	settings_image: "Image",
	settings_times: "Times",
	settings_title_layout: "Layout",
	show_image: "Show image",
	show_rating: "Show rating",
	show_favorite: "Favorite recipe",
	show_servings: "Serving & Quantity",
	show_description: "Show description",
	show_prep_time: "Show preparation time",
	show_cooking_time: "Show cooking time",
	show_total_time: "Show total time",
	layout_mode: "Layout",
	days_columns: "Day columns",
	recipes_columns: "Meal columns",
	layout_vertical: "Vertical",
	layout_horizontal: "Meals side by side",
	layout_side_by_side: "Days side by side",
	layout_days_and_meals_side_by_side: "Days and meals side by side",
	days_range: "Days shown",
	days_range_helper: "A number (e.g. 3 = 3 days from now) or a range (e.g. 0-6 = today and the next 6 days)",
	show_search: "Search bar",
	show_favorites_only: "Favorites only",
	show_import_button: "Show import button",
	show_random_button: "Show random meal button",
	settings_meal_actions: "Meal actions",
	settings_recipe_actions: "Recipe actions",
	show_add_recipe_button: "Show add recipe button",
	show_note_button: "Show add note button",
	settings_recipe_view: "Opening recipes",
	recipe_view: "Open the recipe in",
	recipe_view_dialog: "Dialog inside the card",
	recipe_view_webview: "Embedded Mealie view",
	recipe_view_browser: "New browser tab",
	mealie_group_slug: "Mealie group (slug)",
	settings_language: "Language",
	language: "Language",
	language_auto: "Automatic (Home Assistant language)",
	language_helper: "Overrides the Home Assistant language for this card, e.g. to use a regional variant such as fr-CA."
};
var time$9 = {
	hour: "hour",
	hours: "hours",
	minute: "minute",
	minutes: "minutes",
	hour_short: "h",
	minute_short: "min"
};
var en = {
	cards: cards$9,
	common: common$b,
	dialog: dialog$a,
	info: info$9,
	error: error$9,
	editor: editor$9,
	time: time$9
};

var en$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$9,
  common: common$b,
  default: en,
  dialog: dialog$a,
  editor: editor$9,
  error: error$9,
  info: info$9,
  time: time$9
});

var cards$8 = {
	name_mealplan: "Plan de Comidas Mealie",
	description_mealplan: "Mostrar las comidas del día",
	name_recipes: "Recetas Mealie",
	description_recipes: "Mostrar tus recetas desde la instancia Mealie",
	view_recipe: "Ver receta",
	day_actions: "Acciones del día",
	recipe_actions: "Acciones de la receta",
	delete_mealplan: "Eliminar del plan",
	edit_mealplan: "Editar entrada del plan",
	random_mealplan: "Comida aleatoria"
};
var common$a = {
	no_recipe: "Ninguna receta",
	no_mealplan: "Ninguna comida",
	today: "Hoy",
	breakfast: "Desayuno",
	lunch: "Almuerzo",
	dinner: "Cena",
	side: "Acompañamiento",
	dessert: "Postre",
	drink: "Bebida",
	snack: "Merienda",
	search_placeholder: "Buscar recetas..."
};
var dialog$9 = {
	add_to_mealplan: "Añadir al plan de comidas",
	add_recipe_to_mealplan: "Añadir al plan de comidas",
	select_date: "Seleccionar una fecha",
	select_meal_type: "Tipo de comida",
	select_recipe: "Seleccionar una receta",
	view_as_list: "Vista de lista",
	view_as_grid: "Vista de cuadrícula",
	recipe_added_success: "Receta añadida al plan",
	cancel: "Cancelar",
	add: "Añadir",
	mealplan_deleted_success: "Comida eliminada del plan",
	confirm_delete_title: "¿Eliminar esta comida?",
	confirm: "Confirmar",
	ingredients: "Ingredientes",
	instructions: "Instrucciones",
	times: "Tiempos",
	prep_time: "Preparación",
	cooking_time: "Cocción",
	total_time: "Total",
	add_note_to_mealplan: "Añadir una nota",
	note_title: "Título",
	note_text: "Nota (opcional)",
	note_added_success: "Nota añadida al plan",
	servings: "Porciones",
	decrease_servings: "Reducir porciones",
	increase_servings: "Aumentar porciones",
	edit_mealplan: "Editar entrada del plan",
	mealplan_updated_success: "Entrada del plan actualizada",
	save: "Guardar",
	add_favorite: "Añadir a favoritos",
	remove_favorite: "Eliminar de favoritos",
	add_to_shopping_list: "Añadir a la lista de la compra",
	select_shopping_list: "Seleccionar lista de la compra",
	shopping_list_quantity: "Multiplicador de cantidad",
	recipe_added_to_shopping_list: "Receta añadida a la lista de la compra",
	no_shopping_lists: "No hay listas de la compra disponibles",
	no_ingredients: "No hay ingredientes disponibles",
	next: "Siguiente",
	back: "Atrás",
	select_all: "Seleccionar todo",
	import_recipe: "Importar receta",
	import_url: "URL de la receta",
	import_include_tags: "Incluir etiquetas",
	"import": "Importar",
	recipe_imported_success: "Receta importada",
	open_in_mealie: "Abrir en Mealie"
};
var info$8 = {
	no_url: "Configure la URL de Mealie para activar las imágenes y los enlaces a las recetas."
};
var error$8 = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Error al cargar la configuración",
	error_loading: "Error al cargar datos",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Error al eliminar la comida",
	error_updating_mealplan: "Error al actualizar el plan de comidas"
};
var editor$8 = {
	integration: "Mealie integration",
	entry_types: "Tipos de comida a mostrar",
	loading: "Cargando...",
	mealie_url: "URL de Mealie",
	image_url: "URL o ruta local de las imágenes (opcional)",
	number_of_recipes: "Número de recetas a mostrar",
	settings_recipes_card: "Configuración de visualización",
	settings_infos: "Información",
	settings_image: "Imagen",
	settings_times: "Tiempos",
	settings_title_layout: "Diseño",
	show_image: "Mostrar imagen",
	show_rating: "Mostrar valoración",
	show_favorite: "Mostrar favorito",
	show_servings: "Porciones y Cantidad",
	show_description: "Mostrar descripción",
	show_prep_time: "Mostrar tiempo de preparación",
	show_cooking_time: "Mostrar tiempo de cocción",
	show_total_time: "Mostrar tiempo total",
	layout_mode: "Disposición",
	days_columns: "Columnas de días",
	recipes_columns: "Columnas de comidas",
	layout_vertical: "Vertical",
	layout_horizontal: "Comidas en paralelo",
	layout_side_by_side: "Días en paralelo",
	layout_days_and_meals_side_by_side: "Días y comidas en paralelo",
	days_range: "Días mostrados",
	days_range_helper: "Un número (p. ej. 3 = dentro de 3 días) o un intervalo (p. ej. 0-6 = hoy y los 6 días siguientes)",
	show_search: "Barra de búsqueda",
	show_favorites_only: "Solo favoritos",
	show_import_button: "Mostrar botón de importación",
	show_random_button: "Mostrar botón de comida aleatoria",
	settings_meal_actions: "Acciones de comidas",
	settings_recipe_actions: "Acciones sobre las recetas",
	show_add_recipe_button: "Mostrar botón Añadir receta",
	show_note_button: "Mostrar botón Añadir nota",
	settings_recipe_view: "Apertura de recetas",
	recipe_view: "Abrir la receta en",
	recipe_view_dialog: "Diálogo dentro de la tarjeta",
	recipe_view_webview: "Vista Mealie integrada",
	recipe_view_browser: "Nueva pestaña del navegador",
	mealie_group_slug: "Grupo de Mealie (slug)",
	settings_language: "Idioma",
	language: "Idioma",
	language_auto: "Automático (idioma de Home Assistant)",
	language_helper: "Sustituye el idioma de Home Assistant para esta tarjeta, por ejemplo para usar una variante regional como fr-CA."
};
var time$8 = {
	hour: "hora",
	hours: "horas",
	minute: "minuto",
	minutes: "minutos",
	hour_short: "h",
	minute_short: "min"
};
var es = {
	cards: cards$8,
	common: common$a,
	dialog: dialog$9,
	info: info$8,
	error: error$8,
	editor: editor$8,
	time: time$8
};

var es$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$8,
  common: common$a,
  default: es,
  dialog: dialog$9,
  editor: editor$8,
  error: error$8,
  info: info$8,
  time: time$8
});

var common$9 = {
	lunch: "Dîner",
	dinner: "Souper"
};
var frBE = {
	common: common$9
};

var fr_be = /*#__PURE__*/Object.freeze({
  __proto__: null,
  common: common$9,
  default: frBE
});

var common$8 = {
	breakfast: "Déjeuner",
	lunch: "Dîner",
	dinner: "Souper"
};
var dialog$8 = {
	add_to_shopping_list: "Ajouter à la liste d'épicerie",
	select_shopping_list: "Sélectionner une liste d'épicerie",
	recipe_added_to_shopping_list: "Recette ajoutée à la liste d'épicerie",
	no_shopping_lists: "Aucune liste d'épicerie disponible"
};
var frCA = {
	common: common$8,
	dialog: dialog$8
};

var fr_ca = /*#__PURE__*/Object.freeze({
  __proto__: null,
  common: common$8,
  default: frCA,
  dialog: dialog$8
});

var cards$7 = {
	name_mealplan: "Repas Mealie",
	description_mealplan: "Afficher les repas du jour",
	name_recipes: "Recettes Mealie",
	description_recipes: "Afficher vos recettes depuis l'instance Mealie",
	view_recipe: "Voir la recette",
	day_actions: "Actions du jour",
	recipe_actions: "Actions de la recette",
	delete_mealplan: "Supprimer du planning",
	edit_mealplan: "Modifier l'entrée du planning",
	random_mealplan: "Repas aléatoire"
};
var common$7 = {
	no_recipe: "Aucune recette",
	no_mealplan: "Aucun repas",
	today: "Aujourd'hui",
	breakfast: "Petit-déjeuner",
	lunch: "Déjeuner",
	dinner: "Dîner",
	side: "Accompagnement",
	dessert: "Dessert",
	drink: "Boisson",
	snack: "Collation",
	search_placeholder: "Rechercher une recette..."
};
var dialog$7 = {
	add_to_mealplan: "Ajouter la recette au planning",
	add_recipe_to_mealplan: "Ajouter au planning",
	select_date: "Sélectionner une date",
	select_meal_type: "Type de repas",
	select_recipe: "Sélectionner une recette",
	view_as_list: "Vue liste",
	view_as_grid: "Vue grille",
	recipe_added_success: "Recette ajoutée au planning",
	cancel: "Annuler",
	add: "Ajouter",
	mealplan_deleted_success: "Repas supprimé du planning",
	confirm_delete_title: "Supprimer ce repas ?",
	confirm: "Confirmer",
	ingredients: "Ingrédients",
	instructions: "Instructions",
	times: "Temps",
	prep_time: "Préparation",
	cooking_time: "Cuisson",
	total_time: "Total",
	add_note_to_mealplan: "Ajouter une note",
	note_title: "Titre",
	note_text: "Note (facultatif)",
	note_added_success: "Note ajoutée au planning",
	servings: "Portions",
	decrease_servings: "Diminuer les portions",
	increase_servings: "Augmenter les portions",
	edit_mealplan: "Modifier l'entrée du planning",
	mealplan_updated_success: "Entrée du planning mise à jour",
	save: "Enregistrer",
	add_favorite: "Ajouter aux favoris",
	remove_favorite: "Retirer des favoris",
	add_to_shopping_list: "Ajouter à la liste de courses",
	select_shopping_list: "Sélectionner une liste de courses",
	shopping_list_quantity: "Multiplicateur de quantité",
	recipe_added_to_shopping_list: "Recette ajoutée à la liste de courses",
	no_shopping_lists: "Aucune liste de courses disponible",
	no_ingredients: "Aucun ingrédient disponible",
	next: "Suivant",
	back: "Retour",
	select_all: "Tout sélectionner",
	import_recipe: "Importer une recette",
	import_url: "URL de la recette",
	import_include_tags: "Inclure les tags",
	"import": "Importer",
	recipe_imported_success: "Recette importée",
	open_in_mealie: "Ouvrir dans Mealie"
};
var info$7 = {
	no_url: "Configurez l'URL Mealie pour activer les images et les liens vers les recettes."
};
var error$7 = {
	no_integration: "Sélectionnez une intégration Mealie",
	missing_config: "Erreur de chargement de la configuration",
	error_loading: "Erreur de chargement des données",
	error_adding_recipe: "Erreur lors de l'ajout de la recette",
	error_deleting_mealplan: "Erreur lors de la suppression du repas",
	error_updating_mealplan: "Erreur lors de la mise à jour du repas"
};
var editor$7 = {
	integration: "Intégration Mealie",
	entry_types: "Types de repas à afficher",
	loading: "Chargement...",
	mealie_url: "URL Mealie",
	image_url: "URL ou chemin local des images (facultatif)",
	number_of_recipes: "Nombre de recettes à afficher",
	settings_recipes_card: "Configuration de l'affichage",
	settings_infos: "Informations",
	settings_image: "Image",
	settings_times: "Temps",
	settings_title_layout: "Disposition",
	show_image: "Image",
	show_rating: "Note",
	show_favorite: "Ajouter au favoris",
	show_servings: "Portion & Quantité",
	show_description: "Description",
	show_prep_time: "Temps de préparation",
	show_cooking_time: "Temps de cuisson",
	show_total_time: "Temps total",
	layout_mode: "Disposition",
	days_columns: "Colonnes de jours",
	recipes_columns: "Colonnes de repas",
	layout_vertical: "Vertical",
	layout_horizontal: "Repas côte à côte",
	layout_side_by_side: "Jours côte à côte",
	layout_days_and_meals_side_by_side: "Jours et repas côte à côte",
	days_range: "Jours affichés",
	days_range_helper: "Un nombre (ex. 3 = J+3) ou une plage (ex. 0-6 = aujourd'hui et les 6 jours suivants)",
	show_search: "Barre de recherche",
	show_favorites_only: "Favoris uniquement",
	show_import_button: "Bouton d'import de recette",
	show_random_button: "Afficher le bouton repas aléatoire",
	settings_meal_actions: "Action sur les repas",
	settings_recipe_actions: "Actions sur les recettes",
	show_add_recipe_button: "Afficher le bouton Ajouter une recette",
	show_note_button: "Afficher le bouton Ajouter une note",
	settings_recipe_view: "Ouverture des recettes",
	recipe_view: "Ouvrir la recette dans",
	recipe_view_dialog: "Dialogue dans la carte",
	recipe_view_webview: "Vue Mealie intégrée",
	recipe_view_browser: "Nouvel onglet du navigateur",
	mealie_group_slug: "Groupe Mealie (slug)",
	settings_language: "Langue",
	language: "Langue",
	language_auto: "Automatique (langue de Home Assistant)",
	language_helper: "Remplace la langue de Home Assistant pour cette carte, par exemple pour utiliser une variante régionale comme fr-CA."
};
var time$7 = {
	hour: "heure",
	hours: "heures",
	minute: "minute",
	minutes: "minutes",
	hour_short: "h",
	minute_short: "min"
};
var fr = {
	cards: cards$7,
	common: common$7,
	dialog: dialog$7,
	info: info$7,
	error: error$7,
	editor: editor$7,
	time: time$7
};

var fr$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$7,
  common: common$7,
  default: fr,
  dialog: dialog$7,
  editor: editor$7,
  error: error$7,
  info: info$7,
  time: time$7
});

var cards$6 = {
	name_mealplan: "Piano Pasti Mealie",
	description_mealplan: "Visualizza i pasti del giorno",
	name_recipes: "Ricette Mealie",
	description_recipes: "Visualizza le tue ricette dall'istanza Mealie",
	view_recipe: "Vedi ricetta",
	day_actions: "Azioni del giorno",
	recipe_actions: "Azioni della ricetta",
	delete_mealplan: "Elimina dal piano",
	edit_mealplan: "Modifica voce del piano",
	random_mealplan: "Pasto casuale"
};
var common$6 = {
	no_recipe: "Nessuna ricetta",
	no_mealplan: "Nessun pasto",
	today: "Oggi",
	breakfast: "Colazione",
	lunch: "Pranzo",
	dinner: "Cena",
	side: "Contorno",
	dessert: "Dolce",
	drink: "Bevanda",
	snack: "Spuntino",
	search_placeholder: "Cerca ricette..."
};
var dialog$6 = {
	add_to_mealplan: "Aggiungi al piano pasti",
	add_recipe_to_mealplan: "Aggiungi al piano pasti",
	select_date: "Seleziona una data",
	select_meal_type: "Tipo di pasto",
	select_recipe: "Seleziona una ricetta",
	view_as_list: "Vista elenco",
	view_as_grid: "Vista griglia",
	recipe_added_success: "Ricetta aggiunta al piano",
	cancel: "Annulla",
	add: "Aggiungi",
	mealplan_deleted_success: "Pasto rimosso dal piano",
	confirm_delete_title: "Rimuovere questo pasto?",
	confirm: "Conferma",
	ingredients: "Ingredienti",
	instructions: "Istruzioni",
	times: "Tempi",
	prep_time: "Preparazione",
	cooking_time: "Cottura",
	total_time: "Totale",
	add_note_to_mealplan: "Aggiungi una nota",
	note_title: "Titolo",
	note_text: "Nota (opzionale)",
	note_added_success: "Nota aggiunta al piano",
	servings: "Porzioni",
	decrease_servings: "Riduci porzioni",
	increase_servings: "Aumenta porzioni",
	edit_mealplan: "Modifica voce del piano",
	mealplan_updated_success: "Voce del piano aggiornata",
	save: "Salva",
	add_favorite: "Aggiungi ai preferiti",
	remove_favorite: "Rimuovi dai preferiti",
	add_to_shopping_list: "Aggiungi alla lista della spesa",
	select_shopping_list: "Seleziona lista della spesa",
	shopping_list_quantity: "Moltiplicatore di quantità",
	recipe_added_to_shopping_list: "Ricetta aggiunta alla lista della spesa",
	no_shopping_lists: "Nessuna lista della spesa disponibile",
	no_ingredients: "Nessun ingrediente disponibile",
	next: "Avanti",
	back: "Indietro",
	select_all: "Seleziona tutto",
	import_recipe: "Importa ricetta",
	import_url: "URL ricetta",
	import_include_tags: "Includi tag",
	"import": "Importa",
	recipe_imported_success: "Ricetta importata",
	open_in_mealie: "Apri in Mealie"
};
var info$6 = {
	no_url: "Configura l'URL Mealie per attivare le immagini e i link alle ricette."
};
var error$6 = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Errore di caricamento della configurazione",
	error_loading: "Errore di caricamento dei dati",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Errore durante l'eliminazione del pasto",
	error_updating_mealplan: "Errore durante l'aggiornamento del piano pasti"
};
var editor$6 = {
	integration: "Mealie integration",
	entry_types: "Tipi di pasto da visualizzare",
	loading: "Caricamento...",
	mealie_url: "URL Mealie",
	image_url: "URL o percorso locale delle immagini (facoltativo)",
	number_of_recipes: "Numero di ricette da visualizzare",
	settings_recipes_card: "Configurazione della visualizzazione",
	settings_infos: "Informazioni",
	settings_image: "Immagine",
	settings_times: "Tempi",
	settings_title_layout: "Layout",
	show_image: "Mostra immagine",
	show_rating: "Mostra valutazione",
	show_favorite: "Mostra preferito",
	show_servings: "Porzioni e Quantità",
	show_description: "Mostra descrizione",
	show_prep_time: "Mostra tempo di preparazione",
	show_cooking_time: "Mostra tempo di cottura",
	show_total_time: "Mostra tempo totale",
	layout_mode: "Disposizione",
	days_columns: "Colonne dei giorni",
	recipes_columns: "Colonne dei pasti",
	layout_vertical: "Verticale",
	layout_horizontal: "Pasti affiancati",
	layout_side_by_side: "Giorni affiancati",
	layout_days_and_meals_side_by_side: "Giorni e pasti affiancati",
	days_range: "Giorni mostrati",
	days_range_helper: "Un numero (es. 3 = fra 3 giorni) o un intervallo (es. 0-6 = oggi e i 6 giorni successivi)",
	show_search: "Barra di ricerca",
	show_favorites_only: "Solo preferiti",
	show_import_button: "Mostra pulsante di importazione",
	show_random_button: "Mostra pulsante pasto casuale",
	settings_meal_actions: "Azioni sui pasti",
	settings_recipe_actions: "Azioni sulle ricette",
	show_add_recipe_button: "Mostra pulsante Aggiungi ricetta",
	show_note_button: "Mostra pulsante Aggiungi nota",
	settings_recipe_view: "Apertura delle ricette",
	recipe_view: "Apri la ricetta in",
	recipe_view_dialog: "Finestra nella scheda",
	recipe_view_webview: "Vista Mealie integrata",
	recipe_view_browser: "Nuova scheda del browser",
	mealie_group_slug: "Gruppo Mealie (slug)",
	settings_language: "Lingua",
	language: "Lingua",
	language_auto: "Automatica (lingua di Home Assistant)",
	language_helper: "Sostituisce la lingua di Home Assistant per questa scheda, ad esempio per usare una variante regionale come fr-CA."
};
var time$6 = {
	hour: "ora",
	hours: "ore",
	minute: "minuto",
	minutes: "minuti",
	hour_short: "h",
	minute_short: "min"
};
var it = {
	cards: cards$6,
	common: common$6,
	dialog: dialog$6,
	info: info$6,
	error: error$6,
	editor: editor$6,
	time: time$6
};

var it$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$6,
  common: common$6,
  default: it,
  dialog: dialog$6,
  editor: editor$6,
  error: error$6,
  info: info$6,
  time: time$6
});

var cards$5 = {
	name_mealplan: "Mealie Maaltijdplan",
	description_mealplan: "Toon de maaltijden van vandaag",
	name_recipes: "Mealie Recepten",
	description_recipes: "Toon je recepten van de Mealie-instantie",
	view_recipe: "Recept bekijken",
	day_actions: "Acties voor de dag",
	recipe_actions: "Receptacties",
	delete_mealplan: "Verwijder uit plan",
	edit_mealplan: "Maaltijdplan bewerken",
	random_mealplan: "Willekeurige maaltijd"
};
var common$5 = {
	no_recipe: "Geen recept",
	no_mealplan: "Geen maaltijd",
	today: "Vandaag",
	breakfast: "Ontbijt",
	lunch: "Lunch",
	dinner: "Diner",
	side: "Bijgerecht",
	dessert: "Dessert",
	drink: "Drank",
	snack: "Snack",
	search_placeholder: "Recepten zoeken..."
};
var dialog$5 = {
	add_to_mealplan: "Toevoegen aan maaltijdplan",
	add_recipe_to_mealplan: "toevoegen aan maaltijdplan",
	select_date: "Selecteer een datum",
	select_meal_type: "Maaltijdtype",
	select_recipe: "Selecteer een recept",
	view_as_list: "Lijstweergave",
	view_as_grid: "Rasterweergave",
	recipe_added_success: "Recept toegevoegd aan plan",
	cancel: "Annuleren",
	add: "Toevoegen",
	mealplan_deleted_success: "Maaltijd verwijderd uit plan",
	confirm_delete_title: "Deze maaltijd verwijderen?",
	confirm: "Bevestigen",
	ingredients: "Ingrediënten",
	instructions: "Instructies",
	times: "Tijden",
	prep_time: "Voorbereiding",
	cooking_time: "Koken",
	total_time: "Totaal",
	add_note_to_mealplan: "Notitie toevoegen",
	note_title: "Titel",
	note_text: "Notitie (optioneel)",
	note_added_success: "Notitie toegevoegd aan plan",
	servings: "Porties",
	decrease_servings: "Minder porties",
	increase_servings: "Meer porties",
	edit_mealplan: "Maaltijdplan bewerken",
	mealplan_updated_success: "Maaltijdplan bijgewerkt",
	save: "Opslaan",
	add_favorite: "Toevoegen aan favorieten",
	remove_favorite: "Verwijderen uit favorieten",
	add_to_shopping_list: "Toevoegen aan boodschappenlijst",
	select_shopping_list: "Selecteer boodschappenlijst",
	shopping_list_quantity: "Hoeveelheidsmultiplier",
	recipe_added_to_shopping_list: "Recept toegevoegd aan boodschappenlijst",
	no_shopping_lists: "Geen boodschappenlijsten beschikbaar",
	no_ingredients: "Geen ingrediënten beschikbaar",
	next: "Volgende",
	back: "Terug",
	select_all: "Alles selecteren",
	import_recipe: "Recept importeren",
	import_url: "Recept-URL",
	import_include_tags: "Tags opnemen",
	"import": "Importeren",
	recipe_imported_success: "Recept geïmporteerd",
	open_in_mealie: "Openen in Mealie"
};
var info$5 = {
	no_url: "Configureer Mealie URL om afbeeldingen en receptlinks in te schakelen."
};
var error$5 = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Fout bij laden van configuratie",
	error_loading: "Fout bij laden van gegevens",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Fout bij verwijderen van maaltijd",
	error_updating_mealplan: "Fout bij bijwerken van maaltijdplan"
};
var editor$5 = {
	integration: "Mealie integration",
	entry_types: "Maaltijdtypen om weer te geven",
	loading: "Laden...",
	mealie_url: "Mealie URL",
	image_url: "Afbeeldings-URL of lokaal pad (optioneel)",
	number_of_recipes: "Aantal weer te geven recepten",
	settings_recipes_card: "Weergaveconfiguratie",
	settings_infos: "Receptinformatie",
	settings_image: "Afbeelding",
	settings_times: "Tijden",
	settings_title_layout: "Indeling",
	show_image: "Afbeelding weergeven",
	show_rating: "Beoordeling weergeven",
	show_favorite: "Favoriet tonen",
	show_servings: "Porties & Hoeveelheid",
	show_description: "Beschrijving weergeven",
	show_prep_time: "Voorbereidingstijd weergeven",
	show_cooking_time: "Kooktijd weergeven",
	show_total_time: "Totale tijd weergeven",
	layout_mode: "Indeling",
	days_columns: "Kolommen met dagen",
	recipes_columns: "Kolommen met maaltijden",
	layout_vertical: "Verticaal",
	layout_horizontal: "Maaltijden naast elkaar",
	layout_side_by_side: "Dagen naast elkaar",
	layout_days_and_meals_side_by_side: "Dagen en maaltijden naast elkaar",
	days_range: "Getoonde dagen",
	days_range_helper: "Een getal (bijv. 3 = over 3 dagen) of een bereik (bijv. 0-6 = vandaag en de 6 volgende dagen)",
	show_search: "Zoekbalk",
	show_favorites_only: "Alleen favorieten",
	show_import_button: "Importknop weergeven",
	show_random_button: "Willekeurige maaltijdknop weergeven",
	settings_meal_actions: "Maaltijdacties",
	settings_recipe_actions: "Acties op recepten",
	show_add_recipe_button: "Knop Recept toevoegen tonen",
	show_note_button: "Knop Notitie toevoegen tonen",
	settings_recipe_view: "Recepten openen",
	recipe_view: "Recept openen in",
	recipe_view_dialog: "Dialoog in de kaart",
	recipe_view_webview: "Ingebouwde Mealie-weergave",
	recipe_view_browser: "Nieuw browsertabblad",
	mealie_group_slug: "Mealie-groep (slug)",
	settings_language: "Taal",
	language: "Taal",
	language_auto: "Automatisch (taal van Home Assistant)",
	language_helper: "Overschrijft de taal van Home Assistant voor deze kaart, bijvoorbeeld om een regionale variant zoals fr-CA te gebruiken."
};
var time$5 = {
	hour: "uur",
	hours: "uur",
	minute: "minuut",
	minutes: "minuten",
	hour_short: "u",
	minute_short: "min"
};
var nl = {
	cards: cards$5,
	common: common$5,
	dialog: dialog$5,
	info: info$5,
	error: error$5,
	editor: editor$5,
	time: time$5
};

var nl$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$5,
  common: common$5,
  default: nl,
  dialog: dialog$5,
  editor: editor$5,
  error: error$5,
  info: info$5,
  time: time$5
});

var cards$4 = {
	name_mealplan: "Plan Posiłków Mealie",
	description_mealplan: "Wyświetl dzisiejsze posiłki",
	name_recipes: "Przepisy Mealie",
	description_recipes: "Wyświetl swoje przepisy z instancji Mealie",
	view_recipe: "Wyświetl przepis",
	day_actions: "Akcje dnia",
	recipe_actions: "Akcje przepisu",
	delete_mealplan: "Usuń z planu",
	edit_mealplan: "Edytuj wpis planu",
	random_mealplan: "Losowy posiłek"
};
var common$4 = {
	no_recipe: "Brak przepisu",
	no_mealplan: "Brak posiłku",
	today: "Dzisiaj",
	breakfast: "Śniadanie",
	lunch: "Obiad",
	dinner: "Kolacja",
	side: "Dodatek",
	dessert: "Deser",
	drink: "Napój",
	snack: "Przekąska",
	search_placeholder: "Szukaj przepisów..."
};
var dialog$4 = {
	add_to_mealplan: "Dodaj do planu posiłków",
	add_recipe_to_mealplan: "Dodaj do planu posiłków",
	select_date: "Wybierz datę",
	select_meal_type: "Typ posiłku",
	select_recipe: "Wybierz przepis",
	view_as_list: "Widok listy",
	view_as_grid: "Widok siatki",
	recipe_added_success: "Przepis dodany do planu",
	cancel: "Anuluj",
	add: "Dodaj",
	mealplan_deleted_success: "Posiłek usunięty z planu",
	confirm_delete_title: "Usunąć ten posiłek?",
	confirm: "Potwierdź",
	ingredients: "Składniki",
	instructions: "Instrukcje",
	times: "Czasy",
	prep_time: "Przygotowanie",
	cooking_time: "Gotowanie",
	total_time: "Łącznie",
	add_note_to_mealplan: "Dodaj notatkę",
	note_title: "Tytuł",
	note_text: "Notatka (opcjonalna)",
	note_added_success: "Notatka dodana do planu",
	servings: "Porcje",
	decrease_servings: "Zmniejsz porcje",
	increase_servings: "Zwiększ porcje",
	edit_mealplan: "Edytuj wpis planu",
	mealplan_updated_success: "Wpis planu zaktualizowany",
	save: "Zapisz",
	add_favorite: "Dodaj do ulubionych",
	remove_favorite: "Usuń z ulubionych",
	add_to_shopping_list: "Dodaj do listy zakupów",
	select_shopping_list: "Wybierz listę zakupów",
	shopping_list_quantity: "Mnożnik ilości",
	recipe_added_to_shopping_list: "Przepis dodany do listy zakupów",
	no_shopping_lists: "Brak dostępnych list zakupów",
	no_ingredients: "Brak dostępnych składników",
	next: "Dalej",
	back: "Wstecz",
	select_all: "Zaznacz wszystko",
	import_recipe: "Importuj przepis",
	import_url: "URL przepisu",
	import_include_tags: "Uwzględnij tagi",
	"import": "Importuj",
	recipe_imported_success: "Przepis zaimportowany",
	open_in_mealie: "Otwórz w Mealie"
};
var info$4 = {
	no_url: "Skonfiguruj adres URL Mealie, aby włączyć obrazy i linki do przepisów."
};
var error$4 = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Błąd ładowania konfiguracji",
	error_loading: "Błąd ładowania danych",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Błąd podczas usuwania posiłku",
	error_updating_mealplan: "Błąd podczas aktualizacji planu posiłków"
};
var editor$4 = {
	integration: "Mealie integration",
	entry_types: "Typy posiłków do wyświetlenia",
	loading: "Ładowanie...",
	mealie_url: "URL Mealie",
	image_url: "URL lub ścieżka lokalna obrazów (opcjonalnie)",
	number_of_recipes: "Liczba przepisów do wyświetlenia",
	settings_recipes_card: "Konfiguracja wyświetlania",
	settings_infos: "Informacje o przepisie",
	settings_image: "Obraz",
	settings_times: "Czasy",
	settings_title_layout: "Układ",
	show_image: "Pokaż obraz",
	show_rating: "Pokaż ocenę",
	show_favorite: "Pokaż ulubione",
	show_servings: "Porcje i ilość",
	show_description: "Pokaż opis",
	show_prep_time: "Pokaż czas przygotowania",
	show_cooking_time: "Pokaż czas gotowania",
	show_total_time: "Pokaż całkowity czas",
	layout_mode: "Układ",
	days_columns: "Kolumny dni",
	recipes_columns: "Kolumny posiłków",
	layout_vertical: "Pionowo",
	layout_horizontal: "Posiłki obok siebie",
	layout_side_by_side: "Dni obok siebie",
	layout_days_and_meals_side_by_side: "Dni i posiłki obok siebie",
	days_range: "Wyświetlane dni",
	days_range_helper: "Liczba (np. 3 = za 3 dni) lub zakres (np. 0-6 = dziś i 6 kolejnych dni)",
	show_search: "Pasek wyszukiwania",
	show_favorites_only: "Tylko ulubione",
	show_import_button: "Pokaż przycisk importu",
	show_random_button: "Pokaż przycisk losowego posiłku",
	settings_meal_actions: "Akcje posiłków",
	settings_recipe_actions: "Akcje na przepisach",
	show_add_recipe_button: "Pokaż przycisk Dodaj przepis",
	show_note_button: "Pokaż przycisk Dodaj notatkę",
	settings_recipe_view: "Otwieranie przepisów",
	recipe_view: "Otwórz przepis w",
	recipe_view_dialog: "Okno w karcie",
	recipe_view_webview: "Wbudowany widok Mealie",
	recipe_view_browser: "Nowa karta przeglądarki",
	mealie_group_slug: "Grupa Mealie (slug)",
	settings_language: "Język",
	language: "Język",
	language_auto: "Automatyczny (język Home Assistant)",
	language_helper: "Zastępuje język Home Assistant dla tej karty, np. aby użyć wariantu regionalnego, takiego jak fr-CA."
};
var time$4 = {
	hour: "godzina",
	hours: "godziny",
	minute: "minuta",
	minutes: "minuty",
	hour_short: "godz",
	minute_short: "min"
};
var pl = {
	cards: cards$4,
	common: common$4,
	dialog: dialog$4,
	info: info$4,
	error: error$4,
	editor: editor$4,
	time: time$4
};

var pl$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$4,
  common: common$4,
  default: pl,
  dialog: dialog$4,
  editor: editor$4,
  error: error$4,
  info: info$4,
  time: time$4
});

var cards$3 = {
	name_mealplan: "Plano de Refeições Mealie",
	description_mealplan: "Exibir as refeições do dia",
	name_recipes: "Receitas Mealie",
	description_recipes: "Exibir suas receitas da instância Mealie",
	view_recipe: "Ver receita",
	day_actions: "Ações do dia",
	recipe_actions: "Ações da receita",
	delete_mealplan: "Remover do plano",
	edit_mealplan: "Editar entrada do plano",
	random_mealplan: "Refeição aleatória"
};
var common$3 = {
	no_recipe: "Nenhuma receita",
	no_mealplan: "Nenhuma refeição",
	today: "Hoje",
	breakfast: "Café da manhã",
	lunch: "Almoço",
	dinner: "Jantar",
	side: "Acompanhamento",
	dessert: "Sobremesa",
	drink: "Bebida",
	snack: "Lanche",
	search_placeholder: "Pesquisar receitas..."
};
var dialog$3 = {
	add_to_mealplan: "Adicionar ao plano de refeições",
	add_recipe_to_mealplan: "Adicionar ao plano de refeições",
	select_date: "Selecionar uma data",
	select_meal_type: "Tipo de refeição",
	select_recipe: "Selecionar uma receita",
	view_as_list: "Visualização em lista",
	view_as_grid: "Visualização em grade",
	recipe_added_success: "Receita adicionada ao plano",
	cancel: "Cancelar",
	add: "Adicionar",
	mealplan_deleted_success: "Refeição removida do plano",
	confirm_delete_title: "Remover esta refeição?",
	confirm: "Confirmar",
	ingredients: "Ingredientes",
	instructions: "Instruções",
	times: "Tempos",
	prep_time: "Preparo",
	cooking_time: "Cozimento",
	total_time: "Total",
	add_note_to_mealplan: "Adicionar uma nota",
	note_title: "Título",
	note_text: "Nota (opcional)",
	note_added_success: "Nota adicionada ao plano",
	servings: "Porções",
	decrease_servings: "Diminuir porções",
	increase_servings: "Aumentar porções",
	edit_mealplan: "Editar entrada do plano",
	mealplan_updated_success: "Entrada do plano atualizada",
	save: "Salvar",
	add_favorite: "Adicionar aos favoritos",
	remove_favorite: "Remover dos favoritos",
	add_to_shopping_list: "Adicionar à lista de compras",
	select_shopping_list: "Selecionar lista de compras",
	shopping_list_quantity: "Multiplicador de quantidade",
	recipe_added_to_shopping_list: "Receita adicionada à lista de compras",
	no_shopping_lists: "Nenhuma lista de compras disponível",
	no_ingredients: "Nenhum ingrediente disponível",
	next: "Próximo",
	back: "Voltar",
	select_all: "Selecionar tudo",
	import_recipe: "Importar receita",
	import_url: "URL da receita",
	import_include_tags: "Incluir tags",
	"import": "Importar",
	recipe_imported_success: "Receita importada",
	open_in_mealie: "Abrir no Mealie"
};
var info$3 = {
	no_url: "Configure a URL Mealie para ativar imagens e links para receitas."
};
var error$3 = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Erro ao carregar a configuração",
	error_loading: "Erro ao carregar dados",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Erro ao remover refeição",
	error_updating_mealplan: "Erro ao atualizar plano de refeições"
};
var editor$3 = {
	integration: "Mealie integration",
	entry_types: "Tipos de refeição para exibir",
	loading: "Carregando...",
	mealie_url: "URL do Mealie",
	image_url: "URL ou caminho local das imagens (opcional)",
	number_of_recipes: "Número de receitas para exibir",
	settings_recipes_card: "Configuração de exibição",
	settings_infos: "Informações da receita",
	settings_image: "Imagem",
	settings_times: "Tempos",
	settings_title_layout: "Layout",
	show_image: "Exibir imagem",
	show_rating: "Exibir avaliação",
	show_favorite: "Mostrar favorito",
	show_servings: "Porções e Quantidade",
	show_description: "Exibir descrição",
	show_prep_time: "Exibir tempo de preparo",
	show_cooking_time: "Exibir tempo de cozimento",
	show_total_time: "Exibir tempo total",
	layout_mode: "Disposição",
	days_columns: "Colunas de dias",
	recipes_columns: "Colunas de refeições",
	layout_vertical: "Vertical",
	layout_horizontal: "Refeições lado a lado",
	layout_side_by_side: "Dias lado a lado",
	layout_days_and_meals_side_by_side: "Dias e refeições lado a lado",
	days_range: "Dias exibidos",
	days_range_helper: "Um número (ex.: 3 = daqui a 3 dias) ou um intervalo (ex.: 0-6 = hoje e os 6 dias seguintes)",
	show_search: "Barra de pesquisa",
	show_favorites_only: "Apenas favoritos",
	show_import_button: "Mostrar botão de importação",
	show_random_button: "Mostrar botão de refeição aleatória",
	settings_meal_actions: "Ações das refeições",
	settings_recipe_actions: "Ações nas receitas",
	show_add_recipe_button: "Mostrar botão Adicionar receita",
	show_note_button: "Mostrar botão Adicionar nota",
	settings_recipe_view: "Abertura de receitas",
	recipe_view: "Abrir a receita em",
	recipe_view_dialog: "Diálogo no cartão",
	recipe_view_webview: "Visualização Mealie integrada",
	recipe_view_browser: "Nova aba do navegador",
	mealie_group_slug: "Grupo do Mealie (slug)",
	settings_language: "Idioma",
	language: "Idioma",
	language_auto: "Automático (idioma do Home Assistant)",
	language_helper: "Substitui o idioma do Home Assistant para este cartão, por exemplo para usar uma variante regional como fr-CA."
};
var time$3 = {
	hour: "hora",
	hours: "horas",
	minute: "minuto",
	minutes: "minutos",
	hour_short: "h",
	minute_short: "min"
};
var ptBR = {
	cards: cards$3,
	common: common$3,
	dialog: dialog$3,
	info: info$3,
	error: error$3,
	editor: editor$3,
	time: time$3
};

var pt_br = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$3,
  common: common$3,
  default: ptBR,
  dialog: dialog$3,
  editor: editor$3,
  error: error$3,
  info: info$3,
  time: time$3
});

var cards$2 = {
	name_mealplan: "Plano de Refeições Mealie",
	description_mealplan: "Mostrar as refeições do dia",
	name_recipes: "Receitas Mealie",
	description_recipes: "Mostrar as suas receitas da instância Mealie",
	view_recipe: "Ver receita",
	day_actions: "Ações do dia",
	recipe_actions: "Ações da receita",
	delete_mealplan: "Remover do plano",
	edit_mealplan: "Editar entrada do plano",
	random_mealplan: "Refeição aleatória"
};
var common$2 = {
	no_recipe: "Nenhuma receita",
	no_mealplan: "Nenhuma refeição",
	today: "Hoje",
	breakfast: "Pequeno-almoço",
	lunch: "Almoço",
	dinner: "Jantar",
	side: "Acompanhamento",
	dessert: "Sobremesa",
	drink: "Bebida",
	snack: "Lanche",
	search_placeholder: "Pesquisar receitas..."
};
var dialog$2 = {
	add_to_mealplan: "Adicionar ao plano de refeições",
	add_recipe_to_mealplan: "Adicionar ao plano de refeições",
	select_date: "Selecionar uma data",
	select_meal_type: "Tipo de refeição",
	select_recipe: "Selecionar uma receita",
	view_as_list: "Vista de lista",
	view_as_grid: "Vista de grelha",
	recipe_added_success: "Receita adicionada ao plano",
	cancel: "Cancelar",
	add: "Adicionar",
	mealplan_deleted_success: "Refeição removida do plano",
	confirm_delete_title: "Remover esta refeição?",
	confirm: "Confirmar",
	ingredients: "Ingredientes",
	instructions: "Instruções",
	times: "Tempos",
	prep_time: "Preparação",
	cooking_time: "Cozimento",
	total_time: "Total",
	add_note_to_mealplan: "Adicionar uma nota",
	note_title: "Título",
	note_text: "Nota (opcional)",
	note_added_success: "Nota adicionada ao plano",
	servings: "Porções",
	decrease_servings: "Diminuir porções",
	increase_servings: "Aumentar porções",
	edit_mealplan: "Editar entrada do plano",
	mealplan_updated_success: "Entrada do plano atualizada",
	save: "Guardar",
	add_favorite: "Adicionar aos favoritos",
	remove_favorite: "Remover dos favoritos",
	add_to_shopping_list: "Adicionar à lista de compras",
	select_shopping_list: "Selecionar lista de compras",
	shopping_list_quantity: "Multiplicador de quantidade",
	recipe_added_to_shopping_list: "Receita adicionada à lista de compras",
	no_shopping_lists: "Nenhuma lista de compras disponível",
	no_ingredients: "Nenhum ingrediente disponível",
	next: "Próximo",
	back: "Voltar",
	select_all: "Selecionar tudo",
	import_recipe: "Importar receita",
	import_url: "URL da receita",
	import_include_tags: "Incluir tags",
	"import": "Importar",
	recipe_imported_success: "Receita importada",
	open_in_mealie: "Abrir no Mealie"
};
var info$2 = {
	no_url: "Configure o URL Mealie para ativar imagens e links para receitas."
};
var error$2 = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Erro ao carregar a configuração",
	error_loading: "Erro ao carregar dados",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Erro ao remover refeição",
	error_updating_mealplan: "Erro ao atualizar plano de refeições"
};
var editor$2 = {
	integration: "Mealie integration",
	entry_types: "Tipos de refeição a exibir",
	loading: "A carregar...",
	mealie_url: "URL do Mealie",
	image_url: "URL ou caminho local das imagens (opcional)",
	number_of_recipes: "Número de receitas a exibir",
	settings_recipes_card: "Configuração de exibição",
	settings_infos: "Informações da receita",
	settings_image: "Imagem",
	settings_times: "Tempos",
	settings_title_layout: "Disposição",
	show_image: "Mostrar imagem",
	show_rating: "Mostrar avaliação",
	show_favorite: "Mostrar favorito",
	show_servings: "Porções e quantidade",
	show_description: "Mostrar descrição",
	show_prep_time: "Mostrar tempo de preparação",
	show_cooking_time: "Mostrar tempo de cozedura",
	show_total_time: "Mostrar tempo total",
	layout_mode: "Disposição",
	days_columns: "Colunas de dias",
	recipes_columns: "Colunas de refeições",
	layout_vertical: "Vertical",
	layout_horizontal: "Refeições lado a lado",
	layout_side_by_side: "Dias lado a lado",
	layout_days_and_meals_side_by_side: "Dias e refeições lado a lado",
	days_range: "Dias apresentados",
	days_range_helper: "Um número (ex.: 3 = daqui a 3 dias) ou um intervalo (ex.: 0-6 = hoje e os 6 dias seguintes)",
	show_search: "Barra de pesquisa",
	show_favorites_only: "Apenas favoritos",
	show_import_button: "Mostrar botão de importação",
	show_random_button: "Mostrar botão de refeição aleatória",
	settings_meal_actions: "Ações das refeições",
	settings_recipe_actions: "Ações nas receitas",
	show_add_recipe_button: "Mostrar botão Adicionar receita",
	show_note_button: "Mostrar botão Adicionar nota",
	settings_recipe_view: "Abertura de receitas",
	recipe_view: "Abrir a receita em",
	recipe_view_dialog: "Diálogo no cartão",
	recipe_view_webview: "Vista Mealie integrada",
	recipe_view_browser: "Novo separador do navegador",
	mealie_group_slug: "Grupo do Mealie (slug)",
	settings_language: "Idioma",
	language: "Idioma",
	language_auto: "Automático (idioma do Home Assistant)",
	language_helper: "Substitui o idioma do Home Assistant para este cartão, por exemplo para usar uma variante regional como fr-CA."
};
var time$2 = {
	hour: "hora",
	hours: "horas",
	minute: "minuto",
	minutes: "minutos",
	hour_short: "h",
	minute_short: "min"
};
var pt = {
	cards: cards$2,
	common: common$2,
	dialog: dialog$2,
	info: info$2,
	error: error$2,
	editor: editor$2,
	time: time$2
};

var pt$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$2,
  common: common$2,
  default: pt,
  dialog: dialog$2,
  editor: editor$2,
  error: error$2,
  info: info$2,
  time: time$2
});

var cards$1 = {
	name_mealplan: "Plan de Mese Mealie",
	description_mealplan: "Afișează mesele zilei",
	name_recipes: "Rețete Mealie",
	description_recipes: "Afișează rețetele tale din instanța Mealie",
	view_recipe: "Vezi rețeta",
	day_actions: "Acțiunile zilei",
	recipe_actions: "Acțiuni rețetă",
	delete_mealplan: "Șterge din plan",
	edit_mealplan: "Editează intrarea din plan",
	random_mealplan: "Masă aleatorie"
};
var common$1 = {
	no_recipe: "Nicio rețetă",
	no_mealplan: "Nicio masă",
	today: "Astăzi",
	breakfast: "Micul dejun",
	lunch: "Prânz",
	dinner: "Cină",
	side: "Garnitură",
	dessert: "Desert",
	drink: "Băutură",
	snack: "Gustare",
	search_placeholder: "Caută rețete..."
};
var dialog$1 = {
	add_to_mealplan: "Adaugă la planul de mese",
	add_recipe_to_mealplan: "Adaugă la planul de mese",
	select_date: "Selectează o dată",
	select_meal_type: "Tipul mesei",
	select_recipe: "Selectează o rețetă",
	view_as_list: "Vizualizare listă",
	view_as_grid: "Vizualizare grilă",
	recipe_added_success: "Rețetă adăugată la plan",
	cancel: "Anulează",
	add: "Adaugă",
	mealplan_deleted_success: "Masă ștearsă din plan",
	confirm_delete_title: "Ștergeți această masă?",
	confirm: "Confirmă",
	ingredients: "Ingrediente",
	instructions: "Instrucțiuni",
	times: "Timpi",
	prep_time: "Pregătire",
	cooking_time: "Gătit",
	total_time: "Total",
	add_note_to_mealplan: "Adaugă o notă",
	note_title: "Titlu",
	note_text: "Notă (opțional)",
	note_added_success: "Notă adăugată la plan",
	servings: "Porții",
	decrease_servings: "Reduce porțiile",
	increase_servings: "Crește porțiile",
	edit_mealplan: "Editează intrarea din plan",
	mealplan_updated_success: "Intrare din plan actualizată",
	save: "Salvează",
	add_favorite: "Adaugă la favorite",
	remove_favorite: "Elimină din favorite",
	add_to_shopping_list: "Adaugă la lista de cumpărături",
	select_shopping_list: "Selectează lista de cumpărături",
	shopping_list_quantity: "Multiplicator de cantitate",
	recipe_added_to_shopping_list: "Rețetă adăugată la lista de cumpărături",
	no_shopping_lists: "Nicio listă de cumpărături disponibilă",
	no_ingredients: "Niciun ingredient disponibil",
	next: "Înainte",
	back: "Înapoi",
	select_all: "Selectează tot",
	import_recipe: "Importă rețetă",
	import_url: "URL rețetă",
	import_include_tags: "Include etichete",
	"import": "Importă",
	recipe_imported_success: "Rețetă importată",
	open_in_mealie: "Deschide în Mealie"
};
var info$1 = {
	no_url: "Configurează URL-ul Mealie pentru a activa imaginile și linkurile către rețete."
};
var error$1 = {
	no_integration: "Select a Mealie integration in the card settings",
	missing_config: "Eroare la încărcarea configurației",
	error_loading: "Eroare la încărcarea datelor",
	error_adding_recipe: "Error adding recipe",
	error_deleting_mealplan: "Eroare la ștergerea mesei",
	error_updating_mealplan: "Eroare la actualizarea planului de mese"
};
var editor$1 = {
	integration: "Mealie integration",
	entry_types: "Tipuri de mese de afișat",
	loading: "Se încarcă...",
	mealie_url: "URL Mealie",
	image_url: "URL sau cale locală pentru imagini (opțional)",
	number_of_recipes: "Număr de rețete de afișat",
	settings_recipes_card: "Configurare afișare",
	settings_infos: "Informații rețetă",
	settings_image: "Imagine",
	settings_times: "Timpuri",
	settings_title_layout: "Aspect",
	show_image: "Afișează imaginea",
	show_rating: "Afișează evaluarea",
	show_favorite: "Arată favorit",
	show_servings: "Porții și Cantitate",
	show_description: "Afișează descrierea",
	show_prep_time: "Afișează timpul de preparare",
	show_cooking_time: "Afișează timpul de gătit",
	show_total_time: "Afișează timpul total",
	layout_mode: "Dispunere",
	days_columns: "Coloane de zile",
	recipes_columns: "Coloane de mese",
	layout_vertical: "Vertical",
	layout_horizontal: "Mese alăturate",
	layout_side_by_side: "Zile alăturate",
	layout_days_and_meals_side_by_side: "Zile și mese alăturate",
	days_range: "Zile afișate",
	days_range_helper: "Un număr (ex. 3 = peste 3 zile) sau un interval (ex. 0-6 = azi și următoarele 6 zile)",
	show_search: "Bara de căutare",
	show_favorites_only: "Doar favorite",
	show_import_button: "Afișează butonul de import",
	show_random_button: "Afișează butonul de masă aleatorie",
	settings_meal_actions: "Acțiuni pentru mese",
	settings_recipe_actions: "Acțiuni asupra rețetelor",
	show_add_recipe_button: "Afișează butonul Adaugă rețetă",
	show_note_button: "Afișează butonul Adaugă notă",
	settings_recipe_view: "Deschiderea rețetelor",
	recipe_view: "Deschide rețeta în",
	recipe_view_dialog: "Dialog în card",
	recipe_view_webview: "Vizualizare Mealie integrată",
	recipe_view_browser: "Filă nouă de browser",
	mealie_group_slug: "Grup Mealie (slug)",
	settings_language: "Limbă",
	language: "Limbă",
	language_auto: "Automat (limba Home Assistant)",
	language_helper: "Înlocuiește limba Home Assistant pentru acest card, de exemplu pentru a folosi o variantă regională precum fr-CA."
};
var time$1 = {
	hour: "oră",
	hours: "ore",
	minute: "minut",
	minutes: "minute",
	hour_short: "h",
	minute_short: "min"
};
var ro = {
	cards: cards$1,
	common: common$1,
	dialog: dialog$1,
	info: info$1,
	error: error$1,
	editor: editor$1,
	time: time$1
};

var ro$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards$1,
  common: common$1,
  default: ro,
  dialog: dialog$1,
  editor: editor$1,
  error: error$1,
  info: info$1,
  time: time$1
});

var cards = {
	name_mealplan: "Mealie Måltidsplan",
	description_mealplan: "Visa dagens måltider",
	name_recipes: "Mealie Recept",
	description_recipes: "Visa dina recept från Mealie-instansen",
	view_recipe: "Visa recept",
	day_actions: "Dagens åtgärder",
	recipe_actions: "Receptåtgärder",
	delete_mealplan: "Ta bort från planen",
	edit_mealplan: "Redigera måltidsplanering",
	random_mealplan: "Slumpmässig måltid"
};
var common = {
	no_recipe: "Inget recept",
	no_mealplan: "Ingen måltid",
	today: "Idag",
	breakfast: "Frukost",
	lunch: "Lunch",
	dinner: "Middag",
	side: "Tillbehör",
	dessert: "Efterrätt",
	drink: "Dryck",
	snack: "Mellanmål",
	search_placeholder: "Sök recept..."
};
var dialog = {
	add_to_mealplan: "Lägg till i måltidsplanen",
	add_recipe_to_mealplan: "Lägg till i måltidsplanen",
	select_date: "Välj ett datum",
	select_meal_type: "Måltidstyp",
	select_recipe: "Välj ett recept",
	view_as_list: "Listvy",
	view_as_grid: "Rutnätsvy",
	recipe_added_success: "Receptet har lagts till i planen",
	cancel: "Avbryt",
	add: "Lägg till",
	mealplan_deleted_success: "Måltiden har tagits bort från planen",
	confirm_delete_title: "Ta bort den här måltiden?",
	confirm: "Bekräfta",
	ingredients: "Ingredienser",
	instructions: "Instruktioner",
	times: "Tider",
	prep_time: "Förberedelse",
	cooking_time: "Tillagning",
	total_time: "Totalt",
	add_note_to_mealplan: "Lägg till en anteckning",
	note_title: "Rubrik",
	note_text: "Anteckning (valfritt)",
	note_added_success: "Anteckningen har lagts till i planen",
	servings: "Portioner",
	decrease_servings: "Minska antal portioner",
	increase_servings: "Öka antal portioner",
	edit_mealplan: "Redigera måltidsplanering",
	mealplan_updated_success: "Måltidsplaneringen har uppdaterats",
	save: "Spara",
	add_favorite: "Lägg till i favoriter",
	remove_favorite: "Ta bort från favoriter",
	add_to_shopping_list: "Lägg till i inköpslista",
	select_shopping_list: "Välj inköpslista",
	shopping_list_quantity: "Antalsmultiplikator",
	recipe_added_to_shopping_list: "Receptet har lagts till i inköpslistan",
	no_shopping_lists: "Inga inköpslistor tillgängliga",
	no_ingredients: "Inga ingredienser tillgängliga",
	next: "Nästa",
	back: "Tillbaka",
	select_all: "Markera alla",
	import_recipe: "Importera recept",
	import_url: "Receptets URL",
	import_include_tags: "Inkludera taggar",
	"import": "Importera",
	recipe_imported_success: "Receptet har importerats",
	open_in_mealie: "Öppna i Mealie"
};
var info = {
	no_url: "Konfigurera Mealie-URL för att aktivera bilder och receptlänkar."
};
var error = {
	no_integration: "Välj en Mealie-integration i kortets inställningar",
	missing_config: "Fel vid inläsning av konfiguration",
	error_loading: "Fel vid inläsning av data",
	error_adding_recipe: "Fel när receptet skulle läggas till",
	error_deleting_mealplan: "Fel när måltiden skulle tas bort",
	error_updating_mealplan: "Fel när måltidsplanen skulle uppdateras"
};
var editor = {
	integration: "Mealie-integration",
	entry_types: "Måltidstyper som ska visas",
	loading: "Laddar...",
	mealie_url: "Mealie-URL",
	image_url: "Bild-URL eller lokal sökväg (valfritt)",
	number_of_recipes: "Antal recept som ska visas",
	settings_recipes_card: "Visningsinställningar",
	settings_infos: "Receptdetaljer",
	settings_image: "Bild",
	settings_times: "Tider",
	settings_title_layout: "Layout",
	show_image: "Visa bild",
	show_rating: "Visa betyg",
	show_favorite: "Favoritrecept",
	show_servings: "Portioner och mängd",
	show_description: "Visa beskrivning",
	show_prep_time: "Visa förberedelsetid",
	show_cooking_time: "Visa tillagningstid",
	show_total_time: "Visa total tid",
	layout_mode: "Layout",
	days_columns: "Dagskolumner",
	recipes_columns: "Måltidskolumner",
	layout_vertical: "Vertikal",
	layout_horizontal: "Måltider sida vid sida",
	layout_side_by_side: "Dagar sida vid sida",
	layout_days_and_meals_side_by_side: "Dagar och måltider sida vid sida",
	days_range: "Dagar som visas",
	days_range_helper: "Ett antal (t.ex. 3 = 3 dagar från idag) eller ett intervall (t.ex. 0-6 = idag och de följande 6 dagarna)",
	show_search: "Sökfält",
	show_favorites_only: "Endast favoriter",
	show_import_button: "Visa importknapp",
	show_random_button: "Visa knapp för slumpmässig måltid",
	settings_meal_actions: "Måltidsåtgärder",
	settings_recipe_actions: "Receptåtgärder",
	show_add_recipe_button: "Visa knapp för att lägga till recept",
	show_note_button: "Visa knapp för att lägga till anteckning",
	settings_recipe_view: "Öppna recept",
	recipe_view: "Öppna receptet i",
	recipe_view_dialog: "Dialogruta i kortet",
	recipe_view_webview: "Inbäddad Mealie-vy",
	recipe_view_browser: "Ny webbläsarflik",
	mealie_group_slug: "Mealie-grupp (slug)",
	settings_language: "Språk",
	language: "Språk",
	language_auto: "Automatiskt (Home Assistants språk)",
	language_helper: "Ersätter Home Assistants språk för detta kort, t.ex. för att använda en regional variant som fr-CA."
};
var time = {
	hour: "timme",
	hours: "timmar",
	minute: "minut",
	minutes: "minuter",
	hour_short: "h",
	minute_short: "min"
};
var sv = {
	cards: cards,
	common: common,
	dialog: dialog,
	info: info,
	error: error,
	editor: editor,
	time: time
};

var sv$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cards: cards,
  common: common,
  default: sv,
  dialog: dialog,
  editor: editor,
  error: error,
  info: info,
  time: time
});

const DEFAULT_LANG = "en";
const languages = {
  da: da$1,
  de: de$1,
  en: en$1,
  es: es$1,
  fr: fr$1,
  "fr-BE": fr_be,
  "fr-CA": fr_ca,
  it: it$1,
  nl: nl$1,
  pl: pl$1,
  "pt-BR": pt_br,
  pt: pt$1,
  ro: ro$1,
  sv: sv$1
};
function getTranslation(key, lang) {
  const tree = languages[lang];
  if (!tree) return void 0;
  const value = key.split(".").reduce((obj, k) => obj && typeof obj === "object" ? obj[k] : void 0, tree);
  return typeof value === "string" ? value : void 0;
}
const SUPPORTED_LANGUAGES = Object.keys(languages).sort();
function languageChain(lang) {
  const base = lang.split("-")[0];
  return [.../* @__PURE__ */ new Set([lang, base, DEFAULT_LANG])];
}
function localizeForLang(lang, key, search, replace) {
  let translation;
  for (const candidate of languageChain(lang)) {
    translation = getTranslation(key, candidate);
    if (translation !== void 0) break;
  }
  translation ?? (translation = key);
  return search && replace ? translation.replace(search, replace) : translation;
}

const FRACTIONS = [
  [0.125, "\u215B"],
  [0.25, "\xBC"],
  [1 / 3, "\u2153"],
  [0.375, "\u215C"],
  [0.5, "\xBD"],
  [0.625, "\u215D"],
  [2 / 3, "\u2154"],
  [0.75, "\xBE"],
  [0.875, "\u215E"]
];
const FRACTION_TOLERANCE = 0.02;
const timePatternsByLang = /* @__PURE__ */ new Map();
function escapeRegExp(term) {
  return term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildTimePatterns(lang) {
  const hourTerms = [localizeForLang(lang, "time.hour"), localizeForLang(lang, "time.hours")].filter(Boolean).map(escapeRegExp);
  const minuteTerms = [localizeForLang(lang, "time.minute"), localizeForLang(lang, "time.minutes")].filter(Boolean).map(escapeRegExp);
  return {
    hourPattern: new RegExp(`(\\d+)\\s*(?:${hourTerms.join("|")})`, "i"),
    minutePattern: new RegExp(`(\\d+)\\s*(?:${minuteTerms.join("|")})`, "i")
  };
}
function getTimePatterns(lang) {
  let patterns = timePatternsByLang.get(lang);
  if (!patterns) {
    patterns = buildTimePatterns(lang);
    timePatternsByLang.set(lang, patterns);
  }
  return patterns;
}
function formatTime(time, lang = "en") {
  if (!time) return "";
  const formatted = time.toLowerCase().trim();
  const { hourPattern, minutePattern } = getTimePatterns(lang);
  const hourMatch = formatted.match(hourPattern);
  const minuteMatch = formatted.match(minutePattern);
  if (!hourMatch && !minuteMatch) {
    return formatted.replace(/\s+/g, " ").trim();
  }
  const parts = [];
  if (hourMatch) parts.push(`${hourMatch[1]} ${localizeForLang(lang, "time.hour_short")}`);
  if (minuteMatch) parts.push(`${minuteMatch[1]} ${localizeForLang(lang, "time.minute_short")}`);
  return parts.join(" ");
}
function getEntryTypeLabel(entryType, lang = "en") {
  if (!entryType) return "";
  const key = `common.${entryType}`;
  const label = localizeForLang(lang, key);
  return label !== key ? label : entryType.toUpperCase();
}
function entryTypeOptions(localize) {
  return ENTRY_TYPES.map((value) => ({ value, label: localize(`common.${value}`) }));
}
function formatQuantity(n, lang = "en") {
  const whole = Math.floor(n);
  const decimal = n - whole;
  if (decimal < FRACTION_TOLERANCE) return whole > 0 ? String(whole) : "0";
  const match = FRACTIONS.find(([val]) => Math.abs(decimal - val) < FRACTION_TOLERANCE);
  if (match) return whole > 0 ? `${whole} ${match[1]}` : match[1];
  return new Intl.NumberFormat(lang, { maximumFractionDigits: 2, useGrouping: false }).format(n);
}
function getUnitName(unit) {
  if (!unit) return "";
  if (typeof unit === "string") {
    if (unit.trimStart().startsWith("{")) {
      try {
        const parsed = JSON.parse(unit);
        const useAbbrev = parsed.use_abbreviation ?? parsed.useAbbreviation;
        if (useAbbrev && parsed.abbreviation) return parsed.abbreviation;
        return parsed.name ?? "";
      } catch {
        const useAbbrev = /['"]use_abbreviation['"]\s*:\s*True/.test(unit) || /'useAbbreviation'\s*:\s*True/.test(unit);
        if (useAbbrev) {
          const abbrevMatch = unit.match(/['"]abbreviation['"]\s*:\s*'([^']+)'/);
          if (abbrevMatch?.[1]) return abbrevMatch[1];
        }
        const nameMatch = unit.match(/['"]name['"]\s*:\s*'([^']*)'/);
        return nameMatch?.[1] ?? "";
      }
    }
    return unit;
  }
  if (unit.use_abbreviation && unit.abbreviation) return unit.abbreviation;
  return unit.name ?? "";
}
function formatIngredientText(ing, scale = 1, appendNote = true, lang = "en") {
  const unitName = getUnitName(ing.unit);
  const hasQty = ing.quantity != null && ing.quantity !== 0;
  if (!hasQty && !ing.food?.name) return ing.note ?? ing.display ?? "";
  const qtyStr = hasQty ? formatQuantity(ing.quantity * scale, lang) : null;
  const text = [qtyStr, unitName || null, ing.food?.name ?? null].filter(Boolean).join(" ");
  return appendNote && ing.note ? `${text} (${ing.note})` : text;
}

class MealieActionError extends Error {
  constructor(translationKey, reason) {
    super(translationKey);
    this.name = "MealieActionError";
    this.translationKey = translationKey;
    this.reason = reason;
  }
  get detail() {
    return this.reason instanceof Error ? this.reason.message : "";
  }
}

function entryTypeRank(entryType) {
  const rank = ENTRY_TYPES.indexOf(entryType);
  return rank === -1 ? ENTRY_TYPES.length : rank;
}
async function withMealieError(key, run) {
  try {
    return await run();
  } catch (err) {
    throw err instanceof MealieActionError ? err : new MealieActionError(key, err);
  }
}
async function getMealieConfigEntryId(hass) {
  const entries = await hass.callWS({
    type: "config_entries/get",
    domain: MEALIE_DOMAIN
  });
  const entry_id = (entries.find((e) => e.state === "loaded") ?? entries[0])?.entry_id;
  if (!entry_id) throw new MealieActionError("error.missing_config");
  return entry_id;
}
async function resolveEntryId(hass, configEntryId) {
  return configEntryId || getMealieConfigEntryId(hass);
}
async function invokeMealieService(hass, service, serviceData, configEntryId, returnResponse) {
  const entryId = await resolveEntryId(hass, configEntryId);
  return hass.callService(MEALIE_DOMAIN, service, { config_entry_id: entryId, ...serviceData }, void 0, false, returnResponse);
}
async function callMealieService(hass, service, serviceData, configEntryId) {
  await invokeMealieService(hass, service, serviceData, configEntryId);
}
async function callMealieServiceWithResponse(hass, service, serviceData, configEntryId) {
  const result = await invokeMealieService(hass, service, serviceData, configEntryId, true);
  return result?.response ?? null;
}
function unwrapRecipe(response) {
  return response?.recipe ?? null;
}
function buildMealplanPayload(options) {
  const base = { date: options.date, entry_type: options.entryType };
  if (options.recipeId) return { ...base, recipe_id: options.recipeId };
  return { ...base, note_title: options.noteTitle, ...options.noteText && { note_text: options.noteText } };
}
function getMealieRecipes(hass, options = {}) {
  return withMealieError("error.error_loading", async () => {
    const serviceData = { result_limit: options.resultLimit ?? DEFAULT_RESULT_LIMIT };
    if (options.search) serviceData.search_terms = options.search;
    const response = await callMealieServiceWithResponse(hass, "get_recipes", serviceData, options.configEntryId);
    return response?.recipes?.items ?? [];
  });
}
function getMealPlan(hass, options) {
  return withMealieError("error.error_loading", async () => {
    const response = await callMealieServiceWithResponse(
      hass,
      "get_mealplan",
      { start_date: options.startDate, end_date: options.endDate },
      options.configEntryId
    );
    return (response?.mealplan ?? []).sort((a, b) => entryTypeRank(a.entry_type) - entryTypeRank(b.entry_type));
  });
}
function getRecipe(hass, recipeSlug, configEntryId) {
  return withMealieError(
    "error.error_loading",
    async () => unwrapRecipe(await callMealieServiceWithResponse(hass, "get_recipe", { recipe_id: recipeSlug }, configEntryId))
  );
}
function importRecipe(hass, options) {
  return withMealieError(
    "error.error_loading",
    async () => unwrapRecipe(
      await callMealieServiceWithResponse(
        hass,
        "import_recipe",
        { url: options.url, ...options.includeTags && { include_tags: true } },
        options.configEntryId
      )
    )
  );
}
function addToMealplan(hass, options) {
  return withMealieError("error.error_adding_recipe", () => callMealieService(hass, "set_mealplan", buildMealplanPayload(options), options.configEntryId));
}
function updateMealplanEntry(hass, options) {
  return withMealieError(
    "error.error_updating_mealplan",
    () => callMealieService(hass, "update_mealplan", { mealplan_id: options.mealplanId, ...buildMealplanPayload(options) }, options.configEntryId)
  );
}
function deleteMealplanEntry(hass, mealplanId, configEntryId) {
  return withMealieError("error.error_deleting_mealplan", () => callMealieService(hass, "delete_mealplan", { mealplan_id: mealplanId }, configEntryId));
}
function setRandomMealplan(hass, options) {
  return withMealieError(
    "error.error_adding_recipe",
    () => callMealieService(hass, "set_random_mealplan", { date: options.date, entry_type: options.entryType }, options.configEntryId)
  );
}
function getRecipeFavorites(hass, configEntryId) {
  return withMealieError("error.error_loading", async () => {
    const response = await callMealieServiceWithResponse(hass, "get_recipe_favorites", {}, configEntryId);
    return response?.favorites ?? [];
  });
}
function addRecipeFavorite(hass, slug, configEntryId) {
  return withMealieError("error.error_loading", () => {
    if (!slug) throw new MealieActionError("error.error_loading");
    return callMealieService(hass, "add_recipe_favorite", { recipe_slug: slug }, configEntryId);
  });
}
function removeRecipeFavorite(hass, slug, configEntryId) {
  return withMealieError("error.error_loading", () => {
    if (!slug) throw new MealieActionError("error.error_loading");
    return callMealieService(hass, "remove_recipe_favorite", { recipe_slug: slug }, configEntryId);
  });
}
function rateRecipe(hass, slug, rating, configEntryId) {
  return withMealieError("error.error_loading", () => {
    if (!slug) throw new MealieActionError("error.error_loading");
    return callMealieService(hass, "rate_recipe", { recipe_slug: slug, rating }, configEntryId);
  });
}
function addRecipeToShoppingList(hass, options) {
  return withMealieError(
    "error.error_loading",
    () => callMealieService(
      hass,
      "add_recipe_to_shopping_list",
      {
        shopping_list_id: options.shoppingListId,
        recipe_id: options.recipeId,
        ...options.quantity !== void 0 && { recipe_increment_quantity: options.quantity }
      },
      options.configEntryId
    )
  );
}
function addRecipeToShoppingListPartial(hass, options) {
  return withMealieError("error.error_loading", async () => {
    const getItems = async () => {
      const result = await hass.callService(MEALIE_DOMAIN, "get_shopping_list_items", {}, { entity_id: options.shoppingEntityId }, false, true);
      const byEntity = result.response;
      return byEntity?.[options.shoppingEntityId]?.items ?? [];
    };
    const beforeIds = new Set((await getItems()).map((i) => i.item_id));
    await callMealieService(
      hass,
      "add_recipe_to_shopping_list",
      {
        shopping_list_id: options.shoppingListId,
        recipe_id: options.recipeId,
        recipe_increment_quantity: options.quantity
      },
      options.configEntryId
    );
    const newItems = (await getItems()).filter((i) => !beforeIds.has(i.item_id));
    const toDelete = [];
    for (const ing of options.deselectedIngredients) {
      const foodId = ing.food?.food_id ?? null;
      let match = foodId ? newItems.find((i) => i.food_id === foodId && !toDelete.includes(i.item_id)) : void 0;
      if (!match) {
        const ingText = formatIngredientText(ing, options.quantity, true, options.language ?? "en").toLowerCase().trim();
        match = newItems.find((i) => !toDelete.includes(i.item_id) && (i.note?.toLowerCase().trim() === ingText || i.display?.toLowerCase().trim() === ingText));
      }
      if (match) toDelete.push(match.item_id);
    }
    if (toDelete.length > 0) {
      await hass.callService("todo", "remove_item", { item: toDelete }, { entity_id: options.shoppingEntityId }, false);
    }
  });
}
async function getTodoEntityIdsByListId(hass, configEntryId) {
  const entries = await hass.callWS({ type: "config/entity_registry/list" });
  return new Map(
    entries.filter((e) => e.platform === MEALIE_DOMAIN && e.entity_id.startsWith("todo.") && (!configEntryId || e.config_entry_id === configEntryId)).map((e) => [e.unique_id, e.entity_id])
  );
}
function getMealieShoppingLists(hass, configEntryId) {
  return withMealieError("error.error_loading", async () => {
    const [response, entityIds] = await Promise.all([
      callMealieServiceWithResponse(hass, "get_shopping_lists", {}, configEntryId),
      getTodoEntityIdsByListId(hass, configEntryId)
    ]);
    const entityIdFor = (listId) => {
      for (const [uniqueId, entityId] of entityIds) {
        if (uniqueId.endsWith(`_${listId}`)) return entityId;
      }
      return "";
    };
    return (response?.shopping_lists ?? []).map((list) => ({
      id: list.list_id,
      name: list.name,
      entity_id: entityIdFor(list.list_id)
    }));
  });
}

function isHttpUrl(url) {
  if (!url) return false;
  try {
    const { protocol } = new URL(url);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}
function isLocalPath(url) {
  return !!url && url.startsWith("/") && !url.startsWith("//");
}
function isImageSource(url) {
  return isHttpUrl(url) || isLocalPath(url);
}
const imageBaseUrlsByConfig = /* @__PURE__ */ new WeakMap();
function computeImageBaseUrls(config) {
  const candidates = [isImageSource(config.image_url) ? config.image_url : void 0, config.url];
  return [...new Set(candidates.filter((url) => !!url))];
}
function imageBaseUrls(config) {
  let urls = imageBaseUrlsByConfig.get(config);
  if (!urls) {
    urls = computeImageBaseUrls(config);
    imageBaseUrlsByConfig.set(config, urls);
  }
  return urls;
}
function buildRecipeWebUrl(baseUrl, slug, groupSlug) {
  if (!isHttpUrl(baseUrl) || !slug) return null;
  const base = baseUrl.replace(/\/$/, "");
  const group = groupSlug?.trim() || DEFAULT_MEALIE_GROUP_SLUG;
  return `${base}/g/${encodeURIComponent(group)}/r/${encodeURIComponent(slug)}`;
}
function openRecipeInBrowser(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

const weekdayFormatters = /* @__PURE__ */ new Map();
function getWeekdayFormatter(language) {
  let formatter = weekdayFormatters.get(language);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(language, { weekday: "long", month: "long", day: "numeric" });
    weekdayFormatters.set(language, formatter);
  }
  return formatter;
}
function getLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function getDateRange(days, offset = 0) {
  const count = Math.max(1, Math.floor(days));
  const start = Math.floor(offset);
  const base = /* @__PURE__ */ new Date();
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(base.getFullYear(), base.getMonth(), base.getDate() + start + index);
    return getLocalDateString(date);
  });
}
const DAY_RANGE_PATTERN = /^(\d{1,3})\s*-\s*(\d{1,3})$/;
const MAX_RANGE_DAYS = 31;
function resolveDayRange(offset, daysToShow) {
  const fallbackCount = Math.max(1, Math.floor(daysToShow || 1));
  if (typeof offset === "number") return { start: Math.max(0, Math.floor(offset)), count: fallbackCount };
  if (typeof offset !== "string") return { start: 0, count: fallbackCount };
  const trimmed = offset.trim();
  const range = DAY_RANGE_PATTERN.exec(trimmed);
  if (range) {
    const first = Number(range[1]);
    const last = Number(range[2]);
    return { start: Math.min(first, last), count: Math.min(MAX_RANGE_DAYS, Math.abs(last - first) + 1) };
  }
  if (/^\d{1,3}$/.test(trimmed)) return { start: Number(trimmed), count: fallbackCount };
  return { start: 0, count: fallbackCount };
}
function dateFormatWithDay(dateString, hass) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  if (date.getTime() === today.getTime()) {
    return localizeForLang(hass.locale?.language ?? "en", "common.today");
  }
  return getWeekdayFormatter(hass.locale?.language ?? "en").format(date);
}

const MEALPLAN_UPDATED = "mealie-mealplan-updated";
const RECIPES_UPDATED = "mealie-recipes-updated";
const RECIPE_RATED = "mealie-recipe-rated";
const FAVORITE_TOGGLED = "mealie-favorite-toggled";
const signalRevisions = {
  [MEALPLAN_UPDATED]: 0,
  [RECIPES_UPDATED]: 0
};
function mealieSignalRevision(name) {
  return signalRevisions[name];
}
function emitMealieSignal(name) {
  signalRevisions[name] += 1;
  window.dispatchEvent(new CustomEvent(name));
}
function emitMealieEvent(name, detail) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}
function subscribeMealieSignal(name, handler) {
  window.addEventListener(name, handler);
  return () => window.removeEventListener(name, handler);
}
function subscribeMealieEvent(name, handler) {
  const listener = (e) => handler(e.detail);
  window.addEventListener(name, listener);
  return () => window.removeEventListener(name, listener);
}

const cardStyles = i$6`
  .days-wrapper {
    container-type: inline-size;
    transition: opacity var(--ha-animation-duration-fast, 150ms) ease-in-out;
  }

  ha-icon-button {
    --ha-icon-button-size: 35px;
    --mdc-icon-button-size: 35px;
    --mdc-icon-size: 20px;
    color: var(--text-primary-color);
    border-radius: var(--ha-border-radius-circle, 50%);
  }

  ha-icon-button.plain-icon-button {
    color: var(--primary-text-color);
    background: none;
  }

  .days-vertical {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-3, 12px);
  }

  .days-horizontal {
    display: grid;
    grid-template-columns: repeat(var(--mealie-day-columns, 2), minmax(0, 1fr));
    gap: var(--ha-space-3, 12px);
    align-items: start;
  }

  @container (max-width: 420px) {
    .days-horizontal {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  .day-section {
    display: flex;
    flex-direction: column;
    container-type: inline-size;
  }

  .card-content {
    display: grid;
    padding: var(--ha-space-2, 8px);
    gap: var(--ha-space-2, 8px);
  }

  .card-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: var(--ha-space-3, 12px);
    gap: var(--ha-space-2, 8px);
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: var(--ha-space-1, 4px);
  }

  .date-label {
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-bold, 700);
    text-align: center;
    padding: var(--ha-space-2, 8px) var(--ha-space-3, 12px);
    color: var(--primary-text-color);
    box-shadow: var(--ha-box-shadow-s);
  }

  .favorite-button {
    background: none;
    color: var(--error-color);
  }

  .recipes-wrapper {
    container-type: inline-size;
    transition: opacity var(--ha-animation-duration-fast, 150ms) ease-in-out;
  }

  .days-wrapper[aria-busy='true'],
  .recipes-wrapper[aria-busy='true'],
  .recipe-picker[aria-busy='true'] {
    opacity: 0.6;
  }

  .recipe-picker {
    max-height: 320px;
    overflow-y: auto;
    transition: opacity var(--ha-animation-duration-fast, 150ms) ease-in-out;
  }

  .recipe-options-list {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-1, 4px);
  }

  .recipe-options-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: var(--ha-space-2, 8px);
  }

  .recipe-option {
    display: flex;
    align-items: center;
    gap: var(--ha-space-2, 8px);
    padding: var(--ha-space-1, 4px);
    font: inherit;
    font-size: var(--ha-font-size-m, 14px);
    color: var(--primary-text-color);
    text-align: start;
    background: none;
    border: 1px solid var(--divider-color);
    border-radius: var(--ha-border-radius-md, 8px);
    cursor: pointer;
  }

  .recipe-option:hover {
    background: var(--secondary-background-color);
  }

  .recipe-option.selected {
    border-color: var(--primary-color);
    background: color-mix(in srgb, var(--primary-color) 12%, transparent);
  }

  .recipe-option:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }

  .recipe-options-grid .recipe-option {
    flex-direction: column;
    align-items: stretch;
    gap: var(--ha-space-1, 4px);
    text-align: center;
  }

  .recipe-thumb {
    position: relative;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: var(--ha-border-radius-sm, 4px);
    background: var(--secondary-background-color);
  }

  .recipe-options-grid .recipe-thumb {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
  }

  .recipe-thumb-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .recipe-option-name {
    overflow-wrap: anywhere;
  }

  .recipes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(160px, 100%), 1fr));
    gap: var(--ha-space-2, 8px);
    padding: var(--ha-space-1, 4px);
  }

  @container (min-width: 420px) {
    .recipes-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @container (min-width: 570px) {
    .recipes-container {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }

  @container (min-width: 1100px) {
    .recipes-container {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
  }

  .recipes-horizontal {
    display: grid;
    grid-template-columns: repeat(var(--mealie-recipe-columns, 2), minmax(0, 1fr));
    gap: var(--ha-space-2, 8px);
    padding: var(--ha-space-1, 4px);
  }

  @container (max-width: 380px) {
    .recipes-horizontal {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @container (min-width: 381px) and (max-width: 570px) {
    .recipes-horizontal {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .recipes-vertical {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-2, 8px);
    width: 100%;
  }

  .recipe-card {
    position: relative;
    border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px));
    display: flex;
    flex-direction: column;
    box-shadow: var(--ha-card-box-shadow, var(--bar-box-shadow));
    background: transparent;
    z-index: 0;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-card-body {
    padding-top: var(--ha-space-8, 32px);
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-title {
    order: 1;
    padding: 0 var(--ha-space-10, 40px);
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-meta,
  .recipe-card:not(:has(.recipe-card-image)) .recipe-description {
    order: 1;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-times {
    order: 3;
    padding: 0 var(--ha-space-4, 16px);
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-name {
    margin-top: 0;
  }

  .recipe-card-body {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0;
  }

  .recipe-card-image {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    height: 0;
    flex-shrink: 0;
    border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px)) var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px)) 0 0;
    overflow: hidden;
    background: var(--secondary-background-color);
    z-index: 0;
  }

  .image-loading::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--primary-text-color) 8%, transparent) 50%, transparent 100%);
    animation: mealie-image-shimmer 1.2s ease-in-out infinite;
    z-index: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .image-loading::after {
      animation: none;
    }
  }

  .image-error {
    background: var(--secondary-background-color);
  }

  .image-error img {
    display: none;
  }

  .image-error::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--secondary-text-color);
    mask: no-repeat center / 28%
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.9 21.9l-8.5-8.5L2.1 2.1.69 3.51 3 5.83V19a2 2 0 002 2h13.17l2.31 2.31zM5 18l3.5-4.5 2.5 3L12.17 15l3 3zm16-1.17V5a2 2 0 00-2-2H7.83z"/></svg>');
    opacity: 0.5;
    z-index: 1;
  }

  @keyframes mealie-image-shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .recipe-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform var(--ha-animation-duration-normal, 250ms) ease;
    z-index: 0;
  }

  .recipe-type,
  .dialog-type {
    background: var(--primary-color);
    color: var(--text-primary-color);
    padding: 0 var(--ha-space-1, 4px);
    border-radius: var(--ha-border-radius-sm, 4px);
    font-size: var(--ha-font-size-s, 12px);
    font-weight: var(--ha-font-weight-bold, 700);
    text-transform: uppercase;
    display: inline-block;
  }

  .recipe-type {
    position: absolute;
    z-index: 2;
    top: var(--ha-space-2, 8px);
    left: var(--ha-space-2, 8px);
  }

  .recipe-name {
    margin: 3px var(--ha-space-3, 12px) 0;
    color: var(--primary-color);
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-bold, 700);
  }

  .recipe-description {
    text-align: center;
    margin: var(--ha-space-3, 12px);
    font-size: var(--ha-font-size-m, 14px);
    color: var(--secondary-text-color);
    line-height: var(--ha-line-height-normal, 1.6);
  }

  .recipe-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--ha-space-2, 8px);
  }

  .recipe-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .recipe-content-vertical::-webkit-scrollbar {
    width: 5px;
  }
  
  .recipe-content-vertical::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .recipe-content-vertical::-webkit-scrollbar-thumb {
    background: var(--secondary-text-color);
    border-radius: 5px;
  }
  .recipe-panels{
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }
  .recipe-panel-vertical {
    width: 100%;
  }
  .recipe-content-vertical {
    max-height: 50vh;
    width: calc(100% - 31px);
    overflow-x: auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
  }
  @media (max-width: 600px) {
    .recipe-panels {
      flex-direction: column;
    }
    .recipe-content-vertical {
        max-height: none;
        overflow-y: visible
        width: 100%;
    }
  }
  .recipe-card {
    cursor: pointer;
    -webkit-touch-callout: none;
  }
  
  .recipe-card img {
    -webkit-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .servings-badge {
    display: flex;
    align-items: center;
    align-self: center;
  }

  .servings-badge ha-icon {
    --mdc-icon-size: 16px;
  }

  .servings-value {
    font-size: var(--ha-font-size-s, 12px);
    font-weight: var(--ha-font-weight-medium, 500);
    margin-top: 2px;
    margin-left: 2px;
    color: var(--primary-text-color);
  }

  .card-buttons {
    position: absolute;
    top: var(--ha-space-1, 4px);
    right: var(--ha-space-1, 4px);
    z-index: 2;
    border-radius: var(--ha-border-radius-circle, 50%);
    background: color-mix(in srgb, var(--ha-color-fill-primary-loud-active, var(--ha-color-fill-primary-loud-active)) 80%, transparent);
  }

  .card-toolbar {
    display: flex;
    align-items: center;
    gap: var(--ha-space-2, 8px);
    margin-bottom: var(--ha-space-2, 8px);
  }

  .card-toolbar mealie-recipe-search {
    flex: 1;
  }

  .time-row {
    display: flex;
    align-items: center;
    gap: var(--ha-space-2, 8px);
    padding: 2px 0;
    border-bottom: 1px solid var(--divider-color);
  }

  .time-row:last-child {
    border-bottom: none;
  }

  .time-row-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
    flex-shrink: 0;
  }

  .time-row-label {
    flex: 1 1 0%;
    font-size: var(--ha-font-size-m, 14px);
    color: var(--secondary-text-color);
  }

  .time-row-value {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--ha-font-weight-body, 400);
    color: var(--secondary-text-color);
  }

  .dialog-body {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-2, 8px);
  }

  .recipe-webview {
    max-height: 70vh;
    overflow: auto;
  }

  .recipe-webview ha-card {
    box-shadow: none;
    border: none;
    background: none;
  }

  .dialog-body-recipe {
    display: flex;
    align-items: center;
    gap: var(--ha-space-2, 8px);
  }

  .dialog-body ha-selector {
    width: 100%;
    max-width: 100%;
  }

  .recipe-times {
    padding: 0 var(--ha-space-3, 12px);
    margin: var(--ha-space-1, 4px) 0;
  }

  .details-title {
    color: var(--secondary-text-color);
  }

  .details-content {
    padding: var(--ha-space-1, 4px) var(--ha-space-3, 12px);
  }

  .details-content ul,
  .details-content ol {
    margin: 0;
    padding-left: var(--ha-space-5, 20px);
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-2, 8px);
  }

  .details-content li {
    font-size: var(--ha-font-size-m, 14px);
    color: var(--primary-text-color);
    line-height: var(--ha-line-height-normal, 1.6);
  }

  .detail-image {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: var(--ha-border-radius-md, 8px);
    margin: 0 auto var(--ha-space-5, 20px);
    background-color: var(--secondary-background-color);
  }

  .detail-image-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .loading {
    text-align: center;
    padding: var(--ha-space-6, 24px);
    color: var(--secondary-text-color);
  }

  .dialog-servings-control {
    display: flex;
    align-items: center;
    gap: var(--ha-space-2, 8px);
    padding: var(--ha-space-2, 8px) 0 var(--ha-space-3, 12px) 0;
  }

  .dialog-servings-btn {
    --ha-icon-button-size: 30px;
    --mdc-icon-button-size: 30px;
    --mdc-icon-size: 16px;
  }

  .dialog-servings-btn[disabled] {
    color: var(--disabled-text-color, var(--secondary-text-color));
  }

  .dialog-servings-value {
    font-size: var(--ha-font-size-m, 14px);
    color: var(--primary-text-color);
    min-width: 72px;
    text-align: center;
    user-select: none;
  }

  .ingredient-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--ha-space-1, 4px) 0 var(--ha-space-2, 8px) 0;
    border-bottom: 1px solid var(--divider-color);
    margin-bottom: var(--ha-space-1, 4px);
  }

  .ingredient-list-title {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--ha-font-weight-bold, 700);
    color: var(--primary-text-color);
    text-transform: uppercase;
  }

  .ingredient-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
  }

  .ingredient-section-title {
    font-size: var(--ha-font-size-s, 12px);
    font-weight: var(--ha-font-weight-bold, 700);
    color: var(--secondary-text-color);
    text-transform: uppercase;
    padding: var(--ha-space-2, 8px) var(--ha-space-1, 4px) 2px var(--ha-space-1, 4px);
  }

  .ingredient-item {
    display: flex;
    align-items: center;
    gap: var(--ha-space-1, 4px);
    cursor: pointer;
    border-radius: var(--ha-border-radius-sm, 4px);
    padding: 2px var(--ha-space-1, 4px);
    transition: background var(--ha-animation-duration-instant, 75ms);
  }

  .ingredient-item:hover {
    background: var(--secondary-background-color);
  }

  .ingredient-item-text {
    font-size: var(--ha-font-size-m, 14px);
    color: var(--primary-text-color);
    flex: 1;
  }
`;

const fireEvent = (node, type, detail, options) => {
  const opts = {};
  const event = new Event(type, {
    bubbles: opts.bubbles === void 0 ? true : opts.bubbles,
    cancelable: Boolean(opts.cancelable),
    composed: opts.composed === void 0 ? true : opts.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

const FEATURE_SERVICES = {
  shopping_list: "add_recipe_to_shopping_list",
  interactive_rating: "rate_recipe",
  favorites: "add_recipe_favorite",
  import_recipe: "import_recipe",
  random_mealplan: "set_random_mealplan",
  edit_mealplan: "update_mealplan",
  delete_mealplan: "delete_mealplan"
};
function isFeatureSupported(hass, feature) {
  return !!hass?.services?.[MEALIE_DOMAIN]?.[FEATURE_SERVICES[feature]];
}

const VARIANT_FILE = {
  tiny: "tiny-original.webp",
  min: "min-original.webp",
  original: "original.webp"
};
function isDirectImageRef(image) {
  return isLocalPath(image) || image.startsWith("http");
}
function buildLocalImageUrl(base, recipe, variant) {
  if (!recipe.recipe_id) return null;
  return `${base}/${encodeURIComponent(recipe.recipe_id)}/images/${VARIANT_FILE[variant]}`;
}
function buildMealieMediaUrl(base, recipe, variant) {
  const id = recipe.recipe_id || recipe.slug;
  if (!id) return null;
  return `${base}/api/media/recipes/${encodeURIComponent(id)}/images/${VARIANT_FILE[variant]}`;
}
function buildRecipeImageUrl(recipe, imageBase, variant) {
  const base = imageBase.replace(/\/$/, "");
  return isLocalPath(base) ? buildLocalImageUrl(base, recipe, variant) : buildMealieMediaUrl(base, recipe, variant);
}
function buildRecipeImageUrls(recipe, imageBases, variant = "min") {
  if (recipe.image && isDirectImageRef(recipe.image)) {
    return [recipe.image];
  }
  return imageBases.map((base) => buildRecipeImageUrl(recipe, base, variant)).filter((url) => !!url);
}
function resolveImageSrc(hass, imageUrl) {
  return imageUrl.startsWith("/") ? `${hass.auth.data.hassUrl}${imageUrl}` : imageUrl;
}

const LocalizableMixin = (superClass) => {
  class LocalizableElement extends superClass {
    constructor() {
      super(...arguments);
      this.localize = (key, search, replace) => localizeForLang(this.hass?.locale?.language ?? "en", key, search, replace);
      this.localizeError = (err, fallbackKey = "error.error_loading") => {
        if (err instanceof MealieActionError) {
          const label = this.localize(err.translationKey);
          return err.detail ? `${label}: ${err.detail}` : label;
        }
        return err instanceof Error && err.message ? err.message : this.localize(fallbackKey);
      };
    }
  }
  return LocalizableElement;
};

const noop = () => void 0;
const defineOnce = (tag) => customElements.get(tag) ? noop : t$2(tag);

var __defProp$g = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$i = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$g(target, key, result);
  return result;
};
let MealieStarRating = class extends i$3 {
  constructor() {
    super(...arguments);
    this.rating = 0;
    this.interactive = false;
    this.updating = false;
    this._hovered = 0;
  }
  _emit(rating) {
    if (this.updating) return;
    this.dispatchEvent(new CustomEvent("rate-selected", { detail: { rating }, bubbles: false, composed: false }));
  }
  render() {
    return this.interactive ? this._renderInteractive() : this._renderReadonly();
  }
  _renderReadonly() {
    const rating = this.rating;
    return b`
      <span class="star-rating">
        ${MealieStarRating.STARS.map((i) => {
      const icon = rating >= i ? "mdi:star" : rating >= i - 0.5 ? "mdi:star-half-full" : "mdi:star-outline";
      return b`<ha-icon icon=${icon}></ha-icon>`;
    })}
      </span>
    `;
  }
  _renderInteractive() {
    const display = this._hovered || this.rating;
    return b`
      <span
        class="star-rating interactive-rating ${this.updating ? "updating" : ""}"
        @mouseleave=${() => {
      this._hovered = 0;
    }}
      >
        ${MealieStarRating.STARS.map((i) => {
      const filled = display >= i;
      return b`
            <ha-icon
              icon=${filled ? "mdi:star" : "mdi:star-outline"}
              @mouseenter=${() => {
        this._hovered = i;
      }}
              @click=${() => this._emit(i)}
            ></ha-icon>
          `;
    })}
      </span>
    `;
  }
};
MealieStarRating.styles = i$6`
    .star-rating {
      display: inline-flex;
      align-items: center;
      align-self: center;
      gap: 2px;
    }

    .star-rating ha-icon {
      --mdc-icon-size: 16px;
      color: var(--warning-color);
    }

    .interactive-rating ha-icon {
      --mdc-icon-size: 20px;
      cursor: pointer;
      transition: transform var(--ha-animation-duration-instant, 75ms);
    }

    .interactive-rating.updating ha-icon {
      cursor: wait;
    }

    .interactive-rating ha-icon:hover {
      transform: scale(1.2);
    }
  `;
MealieStarRating.STARS = [1, 2, 3, 4, 5];
__decorateClass$i([
  n$1({ type: Number })
], MealieStarRating.prototype, "rating", 2);
__decorateClass$i([
  n$1({ type: Boolean })
], MealieStarRating.prototype, "interactive", 2);
__decorateClass$i([
  n$1({ type: Boolean })
], MealieStarRating.prototype, "updating", 2);
__decorateClass$i([
  r()
], MealieStarRating.prototype, "_hovered", 2);
MealieStarRating = __decorateClass$i([
  defineOnce("mealie-star-rating")
], MealieStarRating);

var __defProp$f = Object.defineProperty;
var __decorateClass$h = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result) __defProp$f(target, key, result);
  return result;
};
function onRecipeImageLoad(e) {
  e.currentTarget.parentElement?.classList.remove("image-loading");
}
function onRecipeImageError(e) {
  const container = e.currentTarget.parentElement;
  if (container) {
    container.classList.remove("image-loading");
    container.classList.add("image-error");
  }
}
function isImageInferredFromId(recipe) {
  return !recipe.image;
}
function nextImageSourceOnError(sources, onExhausted) {
  return (e) => {
    const img = e.currentTarget;
    const next = sources[sources.indexOf(img.getAttribute("src") ?? "") + 1];
    if (next) img.src = next;
    else onExhausted(e);
  };
}
function renderRecipeImageTemplate(hass, recipe, opts) {
  const sources = [
    ...new Set(
      buildRecipeImageUrls(recipe, opts.urls, opts.variant ?? "min").map((url) => resolveImageSrc(hass, url)).filter(isImageSource)
    )
  ];
  if (!sources.length) return A;
  const onExhausted = isImageInferredFromId(recipe) && opts.onImageMissing ? opts.onImageMissing : onRecipeImageError;
  return b`
    <div class="${opts.containerClass} image-loading">
      <img
        src=${sources[0]}
        alt=${recipe.name ?? recipe.title ?? ""}
        class="${opts.imgClass}"
        loading="lazy"
        decoding="async"
        @load=${onRecipeImageLoad}
        @error=${nextImageSourceOnError(sources, onExhausted)}
      />
    </div>
  `;
}
const RecipeRenderMixin = (superClass) => {
  class RecipeRenderElement extends LocalizableMixin(superClass) {
    constructor() {
      super(...arguments);
      this.error = null;
      this._loading = false;
      this._initialized = false;
      this._ratings = /* @__PURE__ */ new Map();
      this._updatingRatings = /* @__PURE__ */ new Set();
      this._favorites = /* @__PURE__ */ new Map();
      this._updatingFavorites = /* @__PURE__ */ new Set();
      this._missingImages = /* @__PURE__ */ new Set();
    }
    supports(feature) {
      return isFeatureSupported(this.hass, feature);
    }
    get baseConfig() {
      return this.config ?? {};
    }
    recipeWebUrl(recipe) {
      return buildRecipeWebUrl(this.baseConfig.url, recipe?.slug, this.baseConfig.mealie_group_slug);
    }
    openRecipe(recipe) {
      if (this.baseConfig.recipe_view !== "browser") return true;
      const url = this.recipeWebUrl(recipe);
      if (!url) return true;
      openRecipeInBrowser(url);
      return false;
    }
    handleError(err) {
      this.error = this.localizeError(err);
    }
    _markImageMissing(key) {
      if (this._missingImages.has(key)) return;
      this._missingImages = new Set(this._missingImages).add(key);
    }
    renderRecipeImage(recipe, showImage) {
      if (!showImage) return A;
      const key = recipe.slug ?? recipe.recipe_id;
      if (key && this._missingImages.has(key)) return A;
      return renderRecipeImageTemplate(this.hass, recipe, {
        urls: imageBaseUrls(this.baseConfig),
        variant: "min",
        containerClass: "recipe-card-image",
        imgClass: "recipe-image",
        onImageMissing: key ? () => this._markImageMissing(key) : void 0
      });
    }
    renderActionsMenu(actions, labelKey) {
      if (!actions.length) return A;
      return b`
        <ha-dropdown @wa-select=${(ev) => actions[Number(ev.detail.item.value)]?.onClick()}>
          <ha-icon-button class="plain-icon-button" slot="trigger" .label=${this.localize(labelKey)}>
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </ha-icon-button>
          ${actions.map(
        (action, index) => b`
              <ha-dropdown-item variant=${action.variant ?? A} value=${index}>
                <ha-icon slot="icon" icon=${action.icon}></ha-icon>
                ${this.localize(action.labelKey)}
              </ha-dropdown-item>
            `
      )}
        </ha-dropdown>
      `;
    }
    renderCardButtons(actions) {
      if (!actions.length) return A;
      return b`<div class="card-buttons">${this.renderActionsMenu(actions, "cards.recipe_actions")}</div>`;
    }
    renderRecipeMedia(recipe, showImage, actions) {
      return b`${this.renderRecipeImage(recipe, showImage)}${this.renderCardButtons(actions)}`;
    }
    renderRecipeName(recipe) {
      return b`<h4 class="recipe-name">${recipe.name ?? recipe.title}</h4>`;
    }
    renderRecipeDescription(description, showDescription) {
      return showDescription && description ? b`<div class="recipe-description">${description}</div>` : A;
    }
    buildTimeRows(recipe, showPrepTime = true, showPerformTime = true, showTotalTime = true) {
      const lang = this.hass?.locale?.language;
      return [
        showPrepTime && recipe.prep_time ? { icon: "mdi:knife", label: this.localize("dialog.prep_time"), value: formatTime(recipe.prep_time, lang) } : null,
        showPerformTime && recipe.perform_time ? { icon: "mdi:pot-steam", label: this.localize("dialog.cooking_time"), value: formatTime(recipe.perform_time, lang) } : null,
        showTotalTime && recipe.total_time ? { icon: "mdi:clock-time-three-outline", label: this.localize("dialog.total_time"), value: formatTime(recipe.total_time, lang) } : null
      ].filter(Boolean);
    }
    renderTimeRows(rows) {
      return b`${rows.map(
        (t) => b`
          <div class="time-row">
            <ha-icon class="time-row-icon" icon=${t.icon}></ha-icon>
            <span class="time-row-label">${t.label}</span>
            <span class="time-row-value">${t.value}</span>
          </div>
        `
      )}`;
    }
    renderRecipeTimes(recipe, showPrepTime, showPerformTime, showTotalTime) {
      const timeRows = this.buildTimeRows(recipe, showPrepTime, showPerformTime, showTotalTime);
      if (!timeRows.length) return A;
      return b`<div class="recipe-times">${this.renderTimeRows(timeRows)}</div>`;
    }
    async _setRating(slug, rating, configEntryId) {
      if (!slug || !this.hass) return;
      if (this._updatingRatings.has(slug)) return;
      const previous = this._ratings.get(slug) ?? 0;
      this._ratings = new Map(this._ratings).set(slug, rating);
      this._updatingRatings = new Set(this._updatingRatings).add(slug);
      try {
        await rateRecipe(this.hass, slug, rating, configEntryId);
        emitMealieEvent(RECIPE_RATED, { slug, rating });
      } catch {
        this._ratings = new Map(this._ratings).set(slug, previous);
        fireEvent(this, "hass-notification", { message: this.localize("error.error_loading") });
      } finally {
        const done = new Set(this._updatingRatings);
        done.delete(slug);
        this._updatingRatings = done;
      }
    }
    async _toggleFavorite(slug, configEntryId) {
      if (!slug || !this.hass) return;
      if (this._updatingFavorites.has(slug)) return;
      const current = this._favorites.get(slug) ?? false;
      const newFav = !current;
      this._favorites = new Map(this._favorites).set(slug, newFav);
      this._updatingFavorites = new Set(this._updatingFavorites).add(slug);
      emitMealieEvent(FAVORITE_TOGGLED, { slug, favorite: newFav });
      try {
        await (newFav ? addRecipeFavorite(this.hass, slug, configEntryId ?? void 0) : removeRecipeFavorite(this.hass, slug, configEntryId ?? void 0));
      } catch {
        this._favorites = new Map(this._favorites).set(slug, current);
        emitMealieEvent(FAVORITE_TOGGLED, { slug, favorite: current });
        fireEvent(this, "hass-notification", { message: this.localize("error.error_loading") });
      } finally {
        const done = new Set(this._updatingFavorites);
        done.delete(slug);
        this._updatingFavorites = done;
      }
    }
    renderFavoriteButton(recipe, showFavorite, configEntryId) {
      if (!showFavorite || !this.supports("favorites")) return A;
      const slug = recipe?.slug;
      if (!slug) return A;
      const isFav = this._favorites.get(slug) ?? false;
      return b`
        <ha-icon-button
          class="favorite-button"
          .label=${isFav ? this.localize("dialog.remove_favorite") : this.localize("dialog.add_favorite")}
          .disabled=${this._updatingFavorites.has(slug)}
          @click=${(e) => {
        e.stopPropagation();
        void this._toggleFavorite(slug, configEntryId);
      }}
        >
          <ha-icon icon=${isFav ? "mdi:heart" : "mdi:heart-outline"}></ha-icon>
        </ha-icon-button>
      `;
    }
    _renderInteractiveRating(recipe, showRating, configEntryId) {
      if (!showRating) return A;
      const slug = recipe?.slug;
      if (!slug || !this.supports("interactive_rating")) return this.renderStarRating(recipe?.rating ?? void 0, showRating);
      const updating = this._updatingRatings.has(slug);
      const current = updating ? this._ratings.get(slug) ?? recipe?.rating ?? 0 : recipe?.rating ?? 0;
      return b`
        <mealie-star-rating
          interactive
          .rating=${current}
          ?updating=${updating}
          @rate-selected=${(e) => void this._setRating(slug, e.detail.rating, configEntryId ?? void 0)}
        ></mealie-star-rating>
      `;
    }
    renderStarRating(rating, showRating) {
      return showRating ? b`<mealie-star-rating .rating=${rating ?? 0}></mealie-star-rating>` : A;
    }
    renderServings(servings, showServings) {
      if (!servings || !showServings) return A;
      return b`<span class="servings-badge">
        <ha-icon icon="mdi:circle-slice-1"></ha-icon>
        <span class="servings-value">${servings}</span>
      </span>`;
    }
    renderDetailsSection(icon, label, content, panelClass, contentClass) {
      return b`
        <ha-expansion-panel class="${panelClass ?? ""}" outlined expanded>
          <ha-icon slot="leading-icon" icon=${icon}></ha-icon>
          <span slot="header" class="details-title">${label}</span>
          <div class="details-content ${contentClass ?? ""}">${content}</div>
        </ha-expansion-panel>
      `;
    }
  }
  __decorateClass$h([
    r()
  ], RecipeRenderElement.prototype, "error");
  __decorateClass$h([
    r()
  ], RecipeRenderElement.prototype, "_loading");
  __decorateClass$h([
    r()
  ], RecipeRenderElement.prototype, "_initialized");
  __decorateClass$h([
    r()
  ], RecipeRenderElement.prototype, "_ratings");
  __decorateClass$h([
    r()
  ], RecipeRenderElement.prototype, "_updatingRatings");
  __decorateClass$h([
    r()
  ], RecipeRenderElement.prototype, "_favorites");
  __decorateClass$h([
    r()
  ], RecipeRenderElement.prototype, "_updatingFavorites");
  __decorateClass$h([
    r()
  ], RecipeRenderElement.prototype, "_missingImages");
  return RecipeRenderElement;
};

const localeCache = /* @__PURE__ */ new WeakMap();
function overrideLocale(locale, language) {
  let perLanguage = localeCache.get(locale);
  if (!perLanguage) {
    perLanguage = /* @__PURE__ */ new Map();
    localeCache.set(locale, perLanguage);
  }
  let derived = perLanguage.get(language);
  if (!derived) {
    derived = { ...locale, language };
    perLanguage.set(language, derived);
  }
  return derived;
}
function canonicalLanguage(language) {
  if (!language) return void 0;
  try {
    return Intl.getCanonicalLocales(language)[0];
  } catch {
    return void 0;
  }
}
function withLanguage(hass, language) {
  const canonical = canonicalLanguage(language);
  if (!hass?.locale || !canonical || hass.locale.language === canonical) return hass;
  return { ...hass, locale: overrideLocale(hass.locale, canonical) };
}

var __defProp$e = Object.defineProperty;
var __decorateClass$g = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result) __defProp$e(target, key, result);
  return result;
};
const STALE_AFTER_MS = 3e4;
class MealieBaseCard extends RecipeRenderMixin(i$3) {
  constructor() {
    super(...arguments);
    this._watchSignature = "";
    this._unsubscribers = [];
    this._seenRevision = 0;
    this._pendingReload = false;
    this._lastLoadedAt = 0;
    this._onVisibilityChange = () => {
      if (document.visibilityState === "visible") this._catchUp();
    };
  }
  refreshSignal() {
    return null;
  }
  subscribeExtras() {
    return [];
  }
  watchedEntityIds() {
    return [];
  }
  hasOpenDialog() {
    return false;
  }
  getCardSize() {
    return 1 + (this.itemCount() || 1) * 2;
  }
  getGridOptions() {
    return { rows: "auto", min_columns: 6 };
  }
  findMealieEntities(domain) {
    const hass = this.hass;
    const configEntryId = this.config?.config_entry_id ?? null;
    const entities = hass?.entities;
    const prefix = `${domain}.`;
    if (!entities) {
      const states = hass?.states ?? {};
      return Object.keys(states).filter((id) => id.startsWith(prefix) && id.includes("mealie"));
    }
    const devices = hass?.devices;
    return Object.keys(entities).filter((id) => {
      if (!id.startsWith(prefix)) return false;
      const ent = entities[id];
      if (!ent || ent.platform !== "mealie") return false;
      if (configEntryId) {
        if (ent.config_entry_id) return ent.config_entry_id === configEntryId;
        const dev = ent.device_id && devices ? devices[ent.device_id] : void 0;
        if (dev?.config_entries) return dev.config_entries.includes(configEntryId);
      }
      return true;
    });
  }
  _registryRef() {
    const hass = this.hass;
    return hass?.entities ?? hass?.states;
  }
  _getWatchedEntityIds() {
    const key = this.config?.config_entry_id ?? null;
    const registryRef = this._registryRef();
    if (!this._watchedIds || this._watchedIdsKey !== key || this._watchedRegistryRef !== registryRef) {
      this._watchedIdsKey = key;
      this._watchedRegistryRef = registryRef;
      this._watchedIds = this.watchedEntityIds();
    }
    return this._watchedIds;
  }
  _computeWatchSignature() {
    const ids = this._getWatchedEntityIds();
    if (!ids.length) return "";
    const states = this.hass?.states ?? {};
    return ids.map((id) => {
      const s = states[id];
      return s ? `${id}=${s.state}@${s.last_updated}` : `${id}=\u2205`;
    }).join("|");
  }
  async loadData() {
    if (!this.hass || !this.config?.config_entry_id) return;
    if (this._loading || this._initialized) return;
    this._loading = true;
    this.error = null;
    try {
      await this.fetchData();
      this._initialized = true;
      this._lastLoadedAt = Date.now();
    } catch (err) {
      this.handleError(err);
    } finally {
      this._loading = false;
      if (this._pendingReload) {
        this._pendingReload = false;
        this._reload();
      }
    }
  }
  _reload() {
    const signal = this.refreshSignal();
    if (signal) this._seenRevision = mealieSignalRevision(signal);
    if (this._loading) {
      this._pendingReload = true;
      return;
    }
    this._initialized = false;
    void this.loadData();
  }
  _catchUp() {
    const signal = this.refreshSignal();
    const revision = signal ? mealieSignalRevision(signal) : this._seenRevision;
    const missedSignal = revision !== this._seenRevision;
    this._seenRevision = revision;
    if (!this._initialized) return;
    if (missedSignal || Date.now() - this._lastLoadedAt >= STALE_AFTER_MS) this._reload();
  }
  _watchedStateChanged() {
    if (this._loading) return false;
    const sig = this._computeWatchSignature();
    return !!sig && sig !== this._watchSignature;
  }
  _maybeRefreshOnEntityChange() {
    if (this._loading) return;
    const sig = this._computeWatchSignature();
    if (!sig) return;
    if (this.error) {
      if (sig !== this._watchSignature) {
        this._watchSignature = sig;
        this.error = null;
        this._reload();
      }
      return;
    }
    if (!this._initialized) return;
    if (!this._watchSignature) {
      this._watchSignature = sig;
      return;
    }
    if (sig !== this._watchSignature) {
      this._watchSignature = sig;
      this._reload();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    const signal = this.refreshSignal();
    this._unsubscribers = [...signal ? [subscribeMealieSignal(signal, () => this._reload())] : [], ...this.subscribeExtras()];
    document.addEventListener("visibilitychange", this._onVisibilityChange);
    this._catchUp();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("visibilitychange", this._onVisibilityChange);
    this._unsubscribers.forEach((unsubscribe) => unsubscribe());
    this._unsubscribers = [];
    this._watchSignature = "";
    this._watchedIds = void 0;
    this._watchedIdsKey = void 0;
    this._watchedRegistryRef = void 0;
  }
  willUpdate(changedProps) {
    super.willUpdate(changedProps);
    if (changedProps.has("hass") && this.hass) {
      this._maybeRefreshOnEntityChange();
    }
    if (this.hass && !this._initialized && !this._loading && !this.error) {
      void this.loadData();
    }
  }
  _applyLanguage(changedProps) {
    if (changedProps.has("hass") && this.hass !== this._localizedHass) this._rawHass = this.hass;
    if (!this._rawHass) return;
    const localized = withLanguage(this._rawHass, this.config?.language);
    this._localizedHass = localized;
    if (this.hass !== localized) this.hass = localized;
  }
  shouldUpdate(changedProps) {
    this._applyLanguage(changedProps);
    if (changedProps.size > 1 || !changedProps.has("hass")) return true;
    const oldHass = changedProps.get("hass");
    if (!oldHass) return true;
    return oldHass.locale !== this.hass.locale || oldHass.services !== this.hass.services || this.hasOpenDialog() || this._watchedStateChanged();
  }
  renderLoadingIndicator() {
    return b`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`;
  }
  renderErrorAlert() {
    return b`<ha-alert alert-type="error">${this.error}</ha-alert>`;
  }
  renderLoading() {
    return b`
      <ha-card>
        <div class="card-content">${this.renderLoadingIndicator()}</div>
      </ha-card>
    `;
  }
  renderEmptyState(message) {
    return b`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="info">${message}</ha-alert>
        </div>
      </ha-card>
    `;
  }
}
MealieBaseCard.styles = cardStyles;
__decorateClass$g([
  n$1({ attribute: false })
], MealieBaseCard.prototype, "hass");

function renderBool(value, label, onChange, disabled = false) {
  return b`
    <ha-formfield alignEnd spaceBetween .label=${label} .disabled=${disabled}>
      <ha-switch .checked=${value} .disabled=${disabled} @change=${(e) => onChange(e.target.checked)}></ha-switch>
    </ha-formfield>
  `;
}
function renderNumber(hass, value, label, min, max, onChange) {
  return b`
    <ha-selector
      .hass=${hass}
      .selector=${{ number: { min, max, mode: "box", step: 1 } }}
      .value=${value ?? min}
      .label=${label}
      .required=${false}
      @value-changed=${(e) => onChange(e.detail.value)}
    ></ha-selector>
  `;
}
function renderText(hass, value, label, onChange) {
  return b`
    <ha-selector
      .hass=${hass}
      .selector=${{ text: {} }}
      .value=${value ?? ""}
      .label=${label}
      .required=${false}
      @value-changed=${(e) => onChange(e.detail.value)}
    ></ha-selector>
  `;
}

const editorStyles = i$6`
  ha-expansion-panel + ha-expansion-panel,
  ha-form + ha-expansion-panel,
  ha-expansion-panel + ha-form {
    border-radius: var(--ha-border-radius-md, 8px);
    margin-top: var(--ha-space-2, 8px);
    margin-bottom: var(--ha-space-2, 8px);
  }
  ha-formfield {
    display: block;
    width: 100%;
    min-height: 40px;
  }
  .settings-fields {
    padding-bottom: var(--ha-space-2, 8px);
  }
  .settings-fields ha-selector:first-child {
    display: block;
    padding-top: var(--ha-space-3, 12px);
    padding-bottom: var(--ha-space-3, 12px);
  }
  .settings-fields ha-formfield:first-child {
    padding-top: var(--ha-space-2, 8px);
  }

  .entry-type-chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ha-space-2, 8px);
    padding: var(--ha-space-2, 8px) 0;
  }
  .entry-chip {
    padding: var(--ha-space-1, 4px) var(--ha-space-3, 12px);
    border-radius: var(--ha-border-radius-pill, 9999px);
    border: 1px solid var(--outline-color);
    background: none;
    color: var(--primary-text-color);
    cursor: pointer;
    font-size: var(--ha-font-size-m, 14px);
    transition:
      background var(--ha-animation-duration-fast, 150ms),
      color var(--ha-animation-duration-fast, 150ms),
      border-color var(--ha-animation-duration-fast, 150ms);
  }
  .entry-chip.active {
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-color: var(--primary-color);
  }

  .editor-version {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--ha-space-2, 8px);
    margin-top: var(--ha-space-4, 16px);
    padding-top: var(--ha-space-3, 12px);
    font-size: var(--ha-font-size-s, 12px);
    color: var(--secondary-text-color);
  }

  .editor-version-number {
    padding: 2px var(--ha-space-2, 8px);
    border-radius: var(--ha-border-radius-pill, 9999px);
    background: var(--accent-color);
    color: var(--text-accent-color, var(--black-color));
    font-weight: var(--ha-font-weight-medium, 500);
  }
`;

const version = "4.1.1";

var __defProp$d = Object.defineProperty;
var __decorateClass$f = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result) __defProp$d(target, key, result);
  return result;
};
const SUPPORT_URL = "https://ko-fi.com/A1V11ZZTPI";
const imageFormatCache = /* @__PURE__ */ new Map();
async function isHashBasedImage(hass, configEntryId) {
  const cached = imageFormatCache.get(configEntryId);
  if (cached !== void 0) return cached;
  let recipes;
  try {
    recipes = await getMealieRecipes(hass, { configEntryId, resultLimit: 1 });
  } catch {
    return true;
  }
  const image = recipes[0]?.image;
  const isHash = !image || !isDirectImageRef(image);
  imageFormatCache.set(configEntryId, isHash);
  return isHash;
}
class BaseMealieCardEditor extends LocalizableMixin(i$3) {
  constructor() {
    super(...arguments);
    this._imageIsHash = void 0;
    this._imageCheckEntry = "__unset__";
    this._computeLabel = (schema) => {
      const labels = {
        config_entry_id: this.localize("editor.integration")
      };
      return labels[schema.name] ?? schema.name;
    };
  }
  setConfig(config) {
    this.config = { ...config };
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (!this.hass || !this.config) return;
    const currentEntry = this.config.config_entry_id ?? null;
    if (currentEntry === this._imageCheckEntry) return;
    this._imageCheckEntry = currentEntry;
    this._imageIsHash = void 0;
    if (currentEntry) void this._refreshImageFormat(currentEntry);
  }
  async _refreshImageFormat(configEntryId) {
    const isHash = await isHashBasedImage(this.hass, configEntryId);
    if (this._imageCheckEntry === configEntryId) this._imageIsHash = isHash;
  }
  get _needsMealieUrl() {
    return !!this._imageIsHash || this.config.recipe_view !== "dialog";
  }
  _isImageAllowed(config) {
    if (!config?.config_entry_id) return false;
    if (this._imageIsHash === void 0) return false;
    if (this._imageIsHash) return imageBaseUrls(config).some(isImageSource);
    return true;
  }
  get _showImageAllowed() {
    return this._isImageAllowed(this.config);
  }
  get _schemaTop() {
    return [
      {
        type: "expandable",
        title: this.localize("editor.integration"),
        icon: "mdi:connection",
        schema: [
          {
            name: "config_entry_id",
            selector: { config_entry: { integration: "mealie" } }
          }
        ]
      }
    ];
  }
  _commitConfig(config) {
    this.config = config;
    fireEvent(this, "config-changed", { config });
  }
  _setValue(key, value) {
    this._commitConfig({ ...this.config, [key]: value });
  }
  _valueChanged(e) {
    const newConfig = { ...e.detail.value };
    if (!newConfig.config_entry_id) newConfig.show_image = false;
    this._commitConfig(newConfig);
  }
  renderEditorLoading() {
    return b`<div>${this.localize("editor.loading")}</div>`;
  }
  renderTopForm() {
    return b`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaTop}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
  renderInfosDisplayOptions() {
    return b`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_infos")}>
        <ha-icon slot="leading-icon" icon="mdi:information-box-outline"></ha-icon>
        <div class="settings-fields">${this.renderInfosDisplayFields()}</div>
      </ha-expansion-panel>
    `;
  }
  renderInfosDisplayFields() {
    return b`
      ${renderBool(!!this.config.show_rating, this.localize("editor.show_rating"), (v) => this._setValue("show_rating", v))}
      ${renderBool(!!this.config.show_servings, this.localize("editor.show_servings"), (v) => this._setValue("show_servings", v))}
      ${renderBool(!!this.config.show_description, this.localize("editor.show_description"), (v) => this._setValue("show_description", v))}
    `;
  }
  _setImageSource(source) {
    const wasAllowed = this._showImageAllowed;
    const config = { ...this.config, ...source };
    const allowed = this._isImageAllowed(config);
    this._commitConfig({ ...config, show_image: allowed && (!wasAllowed || !!config.show_image) });
  }
  renderImageDisplayOptions() {
    const imageAllowed = this._showImageAllowed;
    return b`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_image")}>
        <ha-icon slot="leading-icon" icon="mdi:image-outline"></ha-icon>
        <div class="settings-fields">
          ${this._needsMealieUrl ? renderText(this.hass, this.config.url, this.localize("editor.mealie_url"), (v) => this._setImageSource({ url: v || void 0 })) : A}
          ${this._imageIsHash ? renderText(this.hass, this.config.image_url, this.localize("editor.image_url"), (v) => this._setImageSource({ image_url: v || void 0 })) : A}
          ${renderBool(!!this.config.show_image && imageAllowed, this.localize("editor.show_image"), (v) => this._setValue("show_image", v), !imageAllowed)}
        </div>
      </ha-expansion-panel>
    `;
  }
  renderRecipeViewOptions() {
    const mode = this.config.recipe_view ?? "dialog";
    return b`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipe_view")}>
        <ha-icon slot="leading-icon" icon="mdi:book-open-variant"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{
      select: {
        mode: "dropdown",
        options: [
          { value: "dialog", label: this.localize("editor.recipe_view_dialog") },
          { value: "webview", label: this.localize("editor.recipe_view_webview") },
          { value: "browser", label: this.localize("editor.recipe_view_browser") }
        ]
      }
    }}
            .value=${mode}
            .label=${this.localize("editor.recipe_view")}
            .required=${false}
            @value-changed=${(e) => this._setValue("recipe_view", e.detail.value)}
          ></ha-selector>
          ${mode === "dialog" ? A : b`
                ${isHttpUrl(this.config.url) ? A : b`<ha-alert alert-type="info">${this.localize("info.no_url")}</ha-alert>`}
                ${renderText(
      this.hass,
      this.config.mealie_group_slug ?? DEFAULT_MEALIE_GROUP_SLUG,
      this.localize("editor.mealie_group_slug"),
      (v) => this._setValue("mealie_group_slug", v || DEFAULT_MEALIE_GROUP_SLUG)
    )}
              `}
        </div>
      </ha-expansion-panel>
    `;
  }
  _languageLabel(tag) {
    try {
      const name = new Intl.DisplayNames([tag], { type: "language" }).of(tag);
      return name ? `${name.charAt(0).toLocaleUpperCase(tag)}${name.slice(1)} \xB7 ${tag}` : tag;
    } catch {
      return tag;
    }
  }
  _setLanguage(value) {
    const config = { ...this.config };
    if (value && value !== "auto") config.language = value;
    else delete config.language;
    this._commitConfig(config);
  }
  renderLanguageOptions() {
    const options = [
      { value: "auto", label: this.localize("editor.language_auto") },
      ...SUPPORTED_LANGUAGES.map((tag) => ({ value: tag, label: this._languageLabel(tag) }))
    ];
    return b`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_language")}>
        <ha-icon slot="leading-icon" icon="mdi:translate"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ select: { mode: "dropdown", options } }}
            .value=${canonicalLanguage(this.config.language) ?? "auto"}
            .label=${this.localize("editor.language")}
            .helper=${this.localize("editor.language_helper")}
            .required=${false}
            @value-changed=${(e) => this._setLanguage(e.detail.value)}
          ></ha-selector>
        </div>
      </ha-expansion-panel>
    `;
  }
  renderTimesDisplayOptions() {
    return b`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_times")}>
        <ha-icon slot="leading-icon" icon="mdi:timer-settings-outline"></ha-icon>
        <div class="settings-fields">
          ${renderBool(!!this.config.show_prep_time, this.localize("editor.show_prep_time"), (v) => this._setValue("show_prep_time", v))}
          ${renderBool(!!this.config.show_perform_time, this.localize("editor.show_cooking_time"), (v) => this._setValue("show_perform_time", v))}
          ${renderBool(!!this.config.show_total_time, this.localize("editor.show_total_time"), (v) => this._setValue("show_total_time", v))}
        </div>
      </ha-expansion-panel>
    `;
  }
  renderVersion() {
    return b`
      <div class="editor-version">
        <span class="editor-version-name">Mealie Card</span>
        <span class="editor-version-number">v${version}</span>
        <a href="${SUPPORT_URL}" target="_blank"
          ><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" border="0" alt="Buy Me a Coffee at ko-fi.com"
        /></a>
      </div>
    `;
  }
}
BaseMealieCardEditor.styles = editorStyles;
__decorateClass$f([
  n$1({ attribute: false })
], BaseMealieCardEditor.prototype, "hass");
__decorateClass$f([
  r()
], BaseMealieCardEditor.prototype, "config");
__decorateClass$f([
  r()
], BaseMealieCardEditor.prototype, "_imageIsHash");

var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$e = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(result)) || result;
  return result;
};
function normalizeDayOffset$1(value) {
  const raw = String(value ?? "").trim();
  return /^\d{1,3}$/.test(raw) ? Number(raw) : raw;
}
function formatDaysRange$1(dayOffset, daysToShow) {
  if (typeof dayOffset === "string") return dayOffset;
  const start = Math.max(0, Math.floor(dayOffset ?? 0));
  const count = Math.max(1, Math.floor(daysToShow ?? 1));
  return count > 1 ? `${start}-${start + count - 1}` : String(start);
}
let MealieMealplanCardEditor = class extends BaseMealieCardEditor {
  constructor() {
    super(...arguments);
    this._localizeCardLanguage = (key) => localizeForLang(canonicalLanguage(this.config?.language) ?? this.hass?.locale?.language ?? "en", key);
    this._layoutChanged = (e) => {
      const { layout_mode, ...value } = e.detail.value;
      const newConfig = { ...value };
      newConfig.day_offset = normalizeDayOffset$1(newConfig.day_offset);
      delete newConfig.days_to_show;
      newConfig.days_columns = Number(newConfig.days_columns ?? 2);
      newConfig.recipes_columns = Number(newConfig.recipes_columns ?? 2);
      newConfig.days_layout = layout_mode === "side_by_side" || layout_mode === "both" ? "horizontal" : "vertical";
      newConfig.recipes_layout = layout_mode === "horizontal" || layout_mode === "both" ? "horizontal" : "vertical";
      if (!newConfig.config_entry_id) newConfig.show_image = false;
      this._commitConfig(newConfig);
    };
    this._computeLayoutLabel = (schema) => {
      const labels = {
        day_offset: this.localize("editor.days_range"),
        layout_mode: this.localize("editor.layout_mode"),
        days_columns: this.localize("editor.days_columns"),
        recipes_columns: this.localize("editor.recipes_columns")
      };
      return labels[schema.name] ?? schema.name;
    };
    this._computeLayoutHelper = (schema) => {
      return schema.name === "day_offset" ? this.localize("editor.days_range_helper") : void 0;
    };
  }
  get _columnsOptions() {
    return [2, 3, 4].map((count) => ({ value: String(count), label: String(count) }));
  }
  _columnsField(name) {
    return {
      name,
      selector: {
        select: {
          mode: "dropdown",
          options: this._columnsOptions
        }
      }
    };
  }
  get _schemaLayout() {
    const daysRangeField = {
      name: "day_offset",
      selector: { text: {} }
    };
    const layoutModeField = {
      name: "layout_mode",
      selector: {
        select: {
          mode: "dropdown",
          options: [
            { value: "vertical", label: this.localize("editor.layout_vertical") },
            { value: "horizontal", label: this.localize("editor.layout_horizontal") },
            { value: "side_by_side", label: this.localize("editor.layout_side_by_side") },
            { value: "both", label: this.localize("editor.layout_days_and_meals_side_by_side") }
          ]
        }
      }
    };
    return [
      {
        type: "expandable",
        title: this.localize("editor.settings_title_layout"),
        icon: "mdi:view-grid-outline",
        schema: [
          daysRangeField,
          layoutModeField,
          ...this.config.days_layout === "horizontal" ? [this._columnsField("days_columns")] : [],
          ...this.config.recipes_layout === "horizontal" ? [this._columnsField("recipes_columns")] : []
        ]
      }
    ];
  }
  _toggleEntryType(type) {
    const current = new Set(this.config.entry_types ?? []);
    if (current.has(type)) {
      current.delete(type);
    } else {
      current.add(type);
    }
    this._commitConfig({ ...this.config, entry_types: [...current] });
  }
  _renderEntryTypes() {
    const selected = new Set(this.config.entry_types ?? []);
    return b`
      <div class="entry-type-chips">
        ${entryTypeOptions(this._localizeCardLanguage).map(
      ({ value, label }) => b`
            <button class="entry-chip ${selected.has(value) ? "active" : ""}" @click=${() => this._toggleEntryType(value)}>${label}</button>
          `
    )}
      </div>
    `;
  }
  render() {
    if (!this.hass || !this.config) return this.renderEditorLoading();
    return b`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.entry_types")}>
        <ha-icon slot="leading-icon" icon="mdi:silverware-fork-knife"></ha-icon>
        ${this._renderEntryTypes()}
      </ha-expansion-panel>

      ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()} ${this.renderRecipeViewOptions()}
      ${this.renderLanguageOptions()}

      <ha-expansion-panel outlined .header=${this.localize("editor.settings_meal_actions")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${renderBool(
      this.config.show_add_recipe_button ?? true,
      this.localize("editor.show_add_recipe_button"),
      (v) => this._setValue("show_add_recipe_button", v)
    )}
          ${renderBool(this.config.show_random_button ?? true, this.localize("editor.show_random_button"), (v) => this._setValue("show_random_button", v))}
          ${renderBool(this.config.show_note_button ?? true, this.localize("editor.show_note_button"), (v) => this._setValue("show_note_button", v))}
        </div>
      </ha-expansion-panel>
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipe_actions")}>
        <ha-icon slot="leading-icon" icon="mdi:gesture-tap-button"></ha-icon>
        <div class="settings-fields">
          ${renderBool(this.config.show_view_recipe_button ?? true, this.localize("cards.view_recipe"), (v) => this._setValue("show_view_recipe_button", v))}
          ${renderBool(
      this.config.show_shopping_list_button ?? true,
      this.localize("dialog.add_to_shopping_list"),
      (v) => this._setValue("show_shopping_list_button", v),
      !isFeatureSupported(this.hass, "shopping_list")
    )}
          ${renderBool(
      this.config.show_edit_mealplan_button ?? true,
      this.localize("cards.edit_mealplan"),
      (v) => this._setValue("show_edit_mealplan_button", v),
      !isFeatureSupported(this.hass, "edit_mealplan")
    )}
          ${renderBool(
      this.config.show_delete_mealplan_button ?? true,
      this.localize("cards.delete_mealplan"),
      (v) => this._setValue("show_delete_mealplan_button", v),
      !isFeatureSupported(this.hass, "delete_mealplan")
    )}
        </div>
      </ha-expansion-panel>
      <ha-form
        .hass=${this.hass}
        .data=${{
      ...this.config,
      day_offset: formatDaysRange$1(this.config.day_offset, this.config.days_to_show),
      days_columns: String(this.config.days_columns ?? 2),
      recipes_columns: String(this.config.recipes_columns ?? 2),
      layout_mode: this._layoutMode()
    }}
        .schema=${this._schemaLayout}
        .computeLabel=${this._computeLayoutLabel}
        .computeHelper=${this._computeLayoutHelper}
        @value-changed=${this._layoutChanged}
      ></ha-form>
      ${this.renderVersion()}
    `;
  }
  _layoutMode() {
    const daysSideBySide = this.config.days_layout === "horizontal";
    const mealsSideBySide = this.config.recipes_layout === "horizontal";
    if (daysSideBySide) return mealsSideBySide ? "both" : "side_by_side";
    return mealsSideBySide ? "horizontal" : "vertical";
  }
};
MealieMealplanCardEditor = __decorateClass$e([
  defineOnce("mealie-card-editor")
], MealieMealplanCardEditor);

var __defProp$c = Object.defineProperty;
var __decorateClass$d = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result) __defProp$c(target, key, result);
  return result;
};
class MealieBaseDialog extends LocalizableMixin(i$3) {
  constructor() {
    super(...arguments);
    this.configEntryId = null;
    this.open = false;
    this._submitting = false;
    this._close = () => {
      this.open = false;
      this.dispatchEvent(new CustomEvent("dialog-closed", { bubbles: false, composed: false }));
    };
  }
  onOpen() {
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("open") && this.open) {
      this._submitting = false;
      this.onOpen();
    }
  }
  async submit(options) {
    if (this._submitting) return;
    this._submitting = true;
    try {
      await options.run();
      fireEvent(this, "hass-notification", {
        message: typeof options.success === "function" ? options.success() : this.localize(options.success)
      });
      if (options.signal) emitMealieSignal(options.signal);
      if (options.closeOnSuccess !== false) this._close();
    } catch (error) {
      fireEvent(this, "hass-notification", {
        message: this.localizeError(error, options.errorKey)
      });
    } finally {
      this._submitting = false;
    }
  }
  renderLoadingIndicator() {
    return b`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`;
  }
  renderDateSelector(value, onChange) {
    return b`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ date: {} }}
        .value=${value}
        .label=${this.localize("dialog.select_date")}
        .required=${false}
        @value-changed=${(e) => onChange(e.detail.value)}
      ></ha-selector>
    `;
  }
  renderEntryTypeSelector(value, onChange) {
    return b`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: "dropdown", options: entryTypeOptions(this.localize) } }}
        .value=${value}
        .label=${this.localize("dialog.select_meal_type")}
        .required=${false}
        @value-changed=${(e) => onChange(e.detail.value)}
      ></ha-selector>
    `;
  }
  renderTextSelector(value, labelKey, onChange, multiline = false) {
    return b`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ text: multiline ? { multiline: true } : {} }}
        .value=${value}
        .label=${this.localize(labelKey)}
        .required=${false}
        @value-changed=${(e) => onChange(e.detail.value)}
      ></ha-selector>
    `;
  }
  renderPrimaryFooter(labelKey, onClick, disabled) {
    return b`
      <ha-dialog-footer slot="footer">
        <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${onClick} ?disabled=${disabled}>
          ${this._submitting ? "..." : this.localize(labelKey)}
        </ha-button>
      </ha-dialog-footer>
    `;
  }
}
MealieBaseDialog.styles = cardStyles;
__decorateClass$d([
  n$1({ attribute: false })
], MealieBaseDialog.prototype, "hass");
__decorateClass$d([
  n$1()
], MealieBaseDialog.prototype, "configEntryId");
__decorateClass$d([
  n$1({ type: Boolean })
], MealieBaseDialog.prototype, "open");
__decorateClass$d([
  r()
], MealieBaseDialog.prototype, "_submitting");

var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$c = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$b(target, key, result);
  return result;
};
let MealieShoppingListDialog = class extends MealieBaseDialog {
  constructor() {
    super(...arguments);
    this.recipe = null;
    this.defaultShoppingListId = null;
    this._step = 1;
    this._shoppingListId = "";
    this._shoppingEntityId = "";
    this._quantity = 1;
    this._lists = [];
    this._loadingLists = false;
    this._listsError = null;
    this._loadingIngredients = false;
    this._ingredients = [];
    this._ingredientsError = null;
    this._rawIngredients = null;
    this._handleAdd = () => {
      const recipeId = this.recipe?.recipe_id;
      if (!recipeId || !this._shoppingListId || !this.hass) return;
      const selectables = this._selectables;
      const allSelected = selectables.length === 0 || selectables.every((i) => i.selected);
      void this.submit({
        run: () => allSelected || !this._canSelectIngredients ? addRecipeToShoppingList(this.hass, {
          configEntryId: this.configEntryId ?? void 0,
          shoppingListId: this._shoppingListId,
          recipeId,
          quantity: this._quantity
        }) : addRecipeToShoppingListPartial(this.hass, {
          configEntryId: this.configEntryId ?? void 0,
          shoppingListId: this._shoppingListId,
          shoppingEntityId: this._shoppingEntityId,
          recipeId,
          quantity: this._quantity,
          deselectedIngredients: this._deselectedIngredients(),
          language: this.hass?.locale?.language ?? "en"
        }),
        success: "dialog.recipe_added_to_shopping_list",
        errorKey: "error.error_loading"
      });
    };
  }
  onOpen() {
    this._step = 1;
    this._quantity = 1;
    this._ingredients = [];
    this._ingredientsError = null;
    this._rawIngredients = null;
    void this._loadLists();
  }
  async _loadLists() {
    this._loadingLists = true;
    this._listsError = null;
    try {
      this._lists = await getMealieShoppingLists(this.hass, this.configEntryId ?? void 0);
    } catch (err) {
      this._lists = [];
      this._listsError = this.localizeError(err);
      return;
    } finally {
      this._loadingLists = false;
    }
    if (!this._lists.length) return;
    const preferred = this.defaultShoppingListId ? this._lists.find((l) => l.id === this.defaultShoppingListId) : void 0;
    const selected = preferred ?? this._lists[0];
    this._shoppingListId = selected.id;
    this._shoppingEntityId = selected.entity_id;
  }
  async _resolveIngredients() {
    if (this.recipe?.ingredients?.length) return this.recipe.ingredients;
    const slug = this.recipe?.slug ?? this.recipe?.recipe_id;
    if (!slug) return [];
    const fullRecipe = await getRecipe(this.hass, slug, this.configEntryId ?? void 0);
    return fullRecipe?.ingredients ?? [];
  }
  async _handleNext() {
    if (this._loadingIngredients) return;
    this._step = 2;
    this._ingredientsError = null;
    this._ingredients = [];
    if (!this._rawIngredients) {
      this._loadingIngredients = true;
      try {
        this._rawIngredients = await this._resolveIngredients();
      } catch (err) {
        this._ingredientsError = this.localizeError(err);
        return;
      } finally {
        this._loadingIngredients = false;
      }
    }
    this._ingredients = this._toIngredientItems(this._rawIngredients);
  }
  _toIngredientItems(ingredients) {
    const language = this.hass?.locale?.language ?? "en";
    return ingredients.map((ing) => {
      const isTitle = !!(ing.title && !ing.food);
      return {
        text: isTitle ? ing.title : formatIngredientText(ing, this._quantity, true, language),
        selected: !isTitle,
        isTitle
      };
    });
  }
  _toggleIngredient(index) {
    this._ingredients = this._ingredients.map((ing, i) => i === index ? { ...ing, selected: !ing.selected } : ing);
  }
  _toggleAll() {
    const allSelected = this._selectables.every((i) => i.selected);
    this._ingredients = this._ingredients.map((ing) => ing.isTitle ? ing : { ...ing, selected: !allSelected });
  }
  get _selectables() {
    return this._ingredients.filter((i) => !i.isTitle);
  }
  get _canSelectIngredients() {
    return !!this._shoppingEntityId;
  }
  _deselectedIngredients() {
    return (this._rawIngredients ?? []).filter((_, i) => {
      const item = this._ingredients[i];
      return !!item && !item.isTitle && !item.selected;
    });
  }
  render() {
    if (!this.open || !this.recipe) return A;
    const isFinalStep = this._step === 2 || !this._canSelectIngredients;
    const canSubmit = this._step === 1 ? !!this._shoppingListId && this._lists.length > 0 && !this._loadingIngredients && (!isFinalStep || !!this.recipe.recipe_id && !this._submitting) : !!this.recipe.recipe_id && !this._submitting && !this._loadingIngredients && !this._ingredientsError && (this._ingredients.length === 0 || this._selectables.some((i) => i.selected));
    return b`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.add_to_shopping_list")}</span>

        <div class="dialog-body">${this._step === 1 ? this._renderStep1() : this._renderStep2()}</div>

        <ha-dialog-footer slot="footer">
          ${this._step === 2 ? b`
                <ha-button
                  slot="secondaryAction"
                  size="small"
                  variant="danger"
                  appearance="accent"
                  @click=${() => {
      this._step = 1;
    }}
                >
                  ${this.localize("dialog.back")}
                </ha-button>
              ` : A}
          <ha-button
            slot="primaryAction"
            size="small"
            variant="brand"
            appearance="accent"
            @click=${isFinalStep ? this._handleAdd : () => void this._handleNext()}
            ?disabled=${!canSubmit}
          >
            ${isFinalStep ? this._submitting ? "..." : this.localize("dialog.add") : this.localize("dialog.next")}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `;
  }
  _renderStep1() {
    if (this._loadingLists) return this.renderLoadingIndicator();
    if (this._listsError) return b`<ha-alert alert-type="error">${this._listsError}</ha-alert>`;
    if (!this._lists.length) return b`<ha-alert alert-type="info">${this.localize("dialog.no_shopping_lists")}</ha-alert>`;
    return b`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: "dropdown", options: this._lists.map((l) => ({ value: l.id, label: l.name })) } }}
        .value=${this._shoppingListId}
        .label=${this.localize("dialog.select_shopping_list")}
        .required=${false}
        @value-changed=${(e) => {
      this._shoppingListId = e.detail.value;
      this._shoppingEntityId = this._lists.find((l) => l.id === e.detail.value)?.entity_id ?? "";
    }}
      ></ha-selector>

      <ha-selector
        .hass=${this.hass}
        .selector=${{ number: { min: 0.25, max: 10, step: 0.25, mode: "slider" } }}
        .value=${this._quantity}
        .label=${this.localize("dialog.shopping_list_quantity")}
        .required=${false}
        @value-changed=${(e) => {
      this._quantity = e.detail.value;
    }}
      ></ha-selector>
    `;
  }
  _renderStep2() {
    if (this._loadingIngredients) return this.renderLoadingIndicator();
    if (this._ingredientsError) return b`<ha-alert alert-type="error">${this._ingredientsError}</ha-alert>`;
    if (!this._ingredients.length) {
      return b`<ha-alert alert-type="info">${this.localize("dialog.no_ingredients")}</ha-alert>`;
    }
    const allSelected = this._selectables.every((i) => i.selected);
    return b`
      <div class="ingredient-list-header">
        <span class="ingredient-list-title">${this.localize("dialog.ingredients")}</span>
        <ha-checkbox .checked=${allSelected} @change=${this._toggleAll}>${this.localize("dialog.select_all")}</ha-checkbox>
      </div>
      <div class="ingredient-list">
        ${this._ingredients.map(
      (ing, i) => ing.isTitle ? b`<div class="ingredient-section-title">${ing.text}</div>` : b`
                <label class="ingredient-item">
                  <ha-checkbox .checked=${ing.selected} @change=${() => this._toggleIngredient(i)}></ha-checkbox>
                  <span class="ingredient-item-text">${ing.text}</span>
                </label>
              `
    )}
      </div>
    `;
  }
};
__decorateClass$c([
  n$1({ attribute: false })
], MealieShoppingListDialog.prototype, "recipe", 2);
__decorateClass$c([
  n$1()
], MealieShoppingListDialog.prototype, "defaultShoppingListId", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_step", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_shoppingListId", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_shoppingEntityId", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_quantity", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_lists", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_loadingLists", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_listsError", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_loadingIngredients", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_ingredients", 2);
__decorateClass$c([
  r()
], MealieShoppingListDialog.prototype, "_ingredientsError", 2);
MealieShoppingListDialog = __decorateClass$c([
  defineOnce("mealie-shopping-list-dialog")
], MealieShoppingListDialog);

var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$a(target, key, result);
  return result;
};
let MealieRecipeDialog = class extends RecipeRenderMixin(MealieBaseDialog) {
  constructor() {
    super(...arguments);
    this.config = {};
    this.recipe = null;
    this.isFavorite = null;
    this.defaultShoppingListId = null;
    this._detail = null;
    this._servings = 0;
    this._shoppingDialogOpen = false;
    this._webviewCard = null;
    this._baseServings = 0;
    this._loadToken = 0;
    this._unsubscribers = [];
  }
  get _slug() {
    return this._detail?.slug ?? this.recipe?.slug;
  }
  get _webUrl() {
    return this.recipeWebUrl(this.recipe);
  }
  get _isWebview() {
    return this.config.recipe_view === "webview" && !!this._webUrl && !!window.loadCardHelpers;
  }
  connectedCallback() {
    super.connectedCallback();
    this._unsubscribers = [
      subscribeMealieEvent(RECIPE_RATED, ({ slug, rating }) => {
        if (this._detail?.slug === slug) {
          this._detail = { ...this._detail, rating };
        }
      }),
      subscribeMealieEvent(FAVORITE_TOGGLED, ({ slug, favorite }) => {
        if (this._favorites.get(slug) === favorite) return;
        this._favorites = new Map(this._favorites).set(slug, favorite);
      })
    ];
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubscribers.forEach((unsubscribe) => unsubscribe());
    this._unsubscribers = [];
  }
  onOpen() {
    this._shoppingDialogOpen = false;
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("hass") && this._webviewCard) this._webviewCard.hass = this.hass;
    if (!this.open || !this.recipe) return;
    if (changedProps.has("recipe")) {
      this._detail = null;
      this._webviewCard = null;
    }
    if (!changedProps.has("open") && !changedProps.has("recipe")) return;
    if (this._isWebview) {
      if (!this._webviewCard) void this._loadWebview();
      return;
    }
    if (!this._detail) void this.loadData();
  }
  async _loadWebview() {
    const url = this._webUrl;
    const loadHelpers = window.loadCardHelpers;
    if (!url || !loadHelpers) return;
    const token = this._loadToken += 1;
    this._loading = true;
    this.error = null;
    try {
      const helpers = await loadHelpers();
      const card = await helpers.createCardElement({ type: "iframe", url, aspect_ratio: "125%" });
      if (token !== this._loadToken) return;
      card.hass = this.hass;
      this._webviewCard = card;
    } catch (err) {
      if (token !== this._loadToken) return;
      this.handleError(err);
    } finally {
      if (token === this._loadToken) this._loading = false;
    }
  }
  async loadData() {
    if (!this.open || !this.recipe || !this.hass) return;
    const recipeId = this.recipe.slug ?? this.recipe.recipe_id;
    if (!recipeId) return;
    const token = this._loadToken += 1;
    this._loading = true;
    this.error = null;
    try {
      const detail = await getRecipe(this.hass, recipeId, this.configEntryId ?? void 0);
      if (token !== this._loadToken) return;
      this._detail = detail;
      this._baseServings = detail?.recipe_servings ?? 0;
      this._servings = this._baseServings;
      const slug = this._slug;
      if (slug) {
        this._favorites = new Map(this._favorites).set(slug, this.isFavorite ?? this._favorites.get(slug) ?? false);
      }
      this._initialized = true;
    } catch (err) {
      if (token !== this._loadToken) return;
      this.handleError(err);
    } finally {
      if (token === this._loadToken) this._loading = false;
    }
  }
  _renderServingsControl() {
    if (this._baseServings <= 0) return A;
    return b`
      <div class="dialog-servings-control">
        <ha-icon-button
          class="dialog-servings-btn"
          .label=${this.localize("dialog.decrease_servings")}
          .disabled=${this._servings <= 1}
          @click=${() => {
      this._servings = Math.max(1, this._servings - 1);
    }}
        >
          <ha-icon icon="mdi:minus"></ha-icon>
        </ha-icon-button>
        <span class="dialog-servings-value">${this._servings} ${this.localize("dialog.servings")}</span>
        <ha-icon-button
          class="dialog-servings-btn"
          .label=${this.localize("dialog.increase_servings")}
          @click=${() => {
      this._servings = this._servings + 1;
    }}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }
  _renderIngredient(ing) {
    const scale = this._baseServings > 0 ? this._servings / this._baseServings : 1;
    return b`<li>${formatIngredientText(ing, scale, false, this.hass?.locale?.language ?? "en")}</li>`;
  }
  _renderInstruction(ins) {
    return b`<li>${ins.title ? b`<strong>${ins.title}: </strong>` : ""}${ins.text ?? ""}</li>`;
  }
  _renderDetail() {
    const recipe = this._detail;
    const timeRows = this.buildTimeRows(recipe);
    return b`
      <div class="dialog-body">
        ${this.renderRecipeImage(recipe, !!this.config?.show_image)}

        <div class="recipe-meta">
          ${this.renderFavoriteButton(recipe, this.config.show_favorite ?? false, this.configEntryId)}
          ${this._renderInteractiveRating(this._detail, !!this.config?.show_rating, this.configEntryId)}
          ${this.renderServings(recipe.recipe_servings, !!this.config.show_servings)}
        </div>

        ${timeRows.length ? this.renderDetailsSection("mdi:clock-outline", this.localize("dialog.times"), this.renderTimeRows(timeRows)) : A}
        <div class="recipe-panels">
          ${recipe.ingredients?.length ? this.renderDetailsSection(
      "mdi:food-apple",
      this.localize("dialog.ingredients"),
      b`${this._renderServingsControl()}
                  <ul>
                    ${recipe.ingredients.map((ing) => this._renderIngredient(ing))}
                  </ul>`,
      "recipe-panel-vertical",
      "recipe-content-vertical"
    ) : A}
          ${recipe.instructions?.length ? this.renderDetailsSection(
      "mdi:chef-hat",
      this.localize("dialog.instructions"),
      b`<ol>
                  ${recipe.instructions.map((ins) => this._renderInstruction(ins))}
                </ol>`,
      "recipe-panel-vertical",
      "recipe-content-vertical"
    ) : A}
        </div>
      </div>
    `;
  }
  _renderWebview() {
    return this._webviewCard ? b`<div class="recipe-webview">${this._webviewCard}</div>` : A;
  }
  _renderOpenInMealieButton() {
    const url = this._webUrl;
    if (!url || this.config.recipe_view !== "webview") return A;
    return b`
      <ha-icon-button slot="headerActionItems" .label=${this.localize("dialog.open_in_mealie")} @click=${() => openRecipeInBrowser(url)}>
        <ha-icon icon="mdi:open-in-new"></ha-icon>
      </ha-icon-button>
    `;
  }
  render() {
    if (!this.open || !this.recipe) return A;
    return b`
      <ha-dialog .open=${true} width="large" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        ${this._renderOpenInMealieButton()}
        ${this._slug && this.supports("shopping_list") ? b`
              <ha-icon-button
                slot="headerActionItems"
                .label=${this.localize("dialog.add_to_shopping_list")}
                @click=${() => {
      this._shoppingDialogOpen = true;
    }}
              >
                <ha-icon icon="mdi:cart-plus"></ha-icon>
              </ha-icon-button>
            ` : A}
        ${this._loading ? this.renderLoadingIndicator() : A} ${this.error ? b`<ha-alert alert-type="error">${this.error}</ha-alert>` : A}
        ${this._isWebview ? this._renderWebview() : this._detail ? this._renderDetail() : A}
      </ha-dialog>

      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._detail ?? this.recipe}
        .configEntryId=${this.configEntryId}
        .defaultShoppingListId=${this.defaultShoppingListId}
        ?open=${this._shoppingDialogOpen}
        @dialog-closed=${() => {
      this._shoppingDialogOpen = false;
    }}
      ></mealie-shopping-list-dialog>
    `;
  }
};
__decorateClass$b([
  n$1({ attribute: false })
], MealieRecipeDialog.prototype, "config", 2);
__decorateClass$b([
  n$1({ attribute: false })
], MealieRecipeDialog.prototype, "recipe", 2);
__decorateClass$b([
  n$1({ attribute: false })
], MealieRecipeDialog.prototype, "isFavorite", 2);
__decorateClass$b([
  n$1()
], MealieRecipeDialog.prototype, "defaultShoppingListId", 2);
__decorateClass$b([
  r()
], MealieRecipeDialog.prototype, "_detail", 2);
__decorateClass$b([
  r()
], MealieRecipeDialog.prototype, "_servings", 2);
__decorateClass$b([
  r()
], MealieRecipeDialog.prototype, "_shoppingDialogOpen", 2);
__decorateClass$b([
  r()
], MealieRecipeDialog.prototype, "_webviewCard", 2);
MealieRecipeDialog = __decorateClass$b([
  defineOnce("mealie-recipe-dialog")
], MealieRecipeDialog);

var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$9(target, key, result);
  return result;
};
let MealieMealplanNoteDialog = class extends MealieBaseDialog {
  constructor() {
    super(...arguments);
    this.date = null;
    this._date = "";
    this._entryType = "dinner";
    this._title = "";
    this._text = "";
    this._handleAdd = () => {
      if (!this._date || !this._entryType || !this._title.trim() || !this.hass) return;
      void this.submit({
        run: () => addToMealplan(this.hass, {
          date: this._date,
          entryType: this._entryType,
          noteTitle: this._title.trim(),
          noteText: this._text.trim() || void 0,
          configEntryId: this.configEntryId ?? void 0
        }),
        success: "dialog.note_added_success",
        errorKey: "error.error_adding_recipe",
        signal: MEALPLAN_UPDATED
      });
    };
  }
  onOpen() {
    this._date = this.date ?? getLocalDateString(/* @__PURE__ */ new Date());
    this._entryType = "dinner";
    this._title = "";
    this._text = "";
  }
  render() {
    if (!this.open) return A;
    return b`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_note_to_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date, (v) => this._date = v)} ${this.renderEntryTypeSelector(this._entryType, (v) => this._entryType = v)}
          ${this.renderTextSelector(this._title, "dialog.note_title", (v) => this._title = v)}
          ${this.renderTextSelector(this._text, "dialog.note_text", (v) => this._text = v, true)}
        </div>

        ${this.renderPrimaryFooter("dialog.add", this._handleAdd, !this._date || !this._entryType || !this._title.trim() || this._submitting)}
      </ha-dialog>
    `;
  }
};
__decorateClass$a([
  n$1()
], MealieMealplanNoteDialog.prototype, "date", 2);
__decorateClass$a([
  r()
], MealieMealplanNoteDialog.prototype, "_date", 2);
__decorateClass$a([
  r()
], MealieMealplanNoteDialog.prototype, "_entryType", 2);
__decorateClass$a([
  r()
], MealieMealplanNoteDialog.prototype, "_title", 2);
__decorateClass$a([
  r()
], MealieMealplanNoteDialog.prototype, "_text", 2);
MealieMealplanNoteDialog = __decorateClass$a([
  defineOnce("mealie-mealplan-note-dialog")
], MealieMealplanNoteDialog);

var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$8(target, key, result);
  return result;
};
let MealieMealplanRandomDialog = class extends MealieBaseDialog {
  constructor() {
    super(...arguments);
    this.targetDate = "";
    this._date = "";
    this._entryType = "dinner";
    this._handleAdd = () => {
      if (!this._date || !this._entryType || !this.hass) return;
      void this.submit({
        run: () => setRandomMealplan(this.hass, {
          date: this._date,
          entryType: this._entryType,
          configEntryId: this.configEntryId ?? void 0
        }),
        success: "dialog.recipe_added_success",
        errorKey: "error.error_adding_recipe",
        signal: MEALPLAN_UPDATED
      });
    };
  }
  onOpen() {
    this._date = this.targetDate || getLocalDateString(/* @__PURE__ */ new Date());
    this._entryType = "dinner";
  }
  render() {
    if (!this.open) return A;
    return b`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("cards.random_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date, (v) => this._date = v)} ${this.renderEntryTypeSelector(this._entryType, (v) => this._entryType = v)}
        </div>

        ${this.renderPrimaryFooter("dialog.add", this._handleAdd, !this._date || !this._entryType || this._submitting)}
      </ha-dialog>
    `;
  }
};
__decorateClass$9([
  n$1()
], MealieMealplanRandomDialog.prototype, "targetDate", 2);
__decorateClass$9([
  r()
], MealieMealplanRandomDialog.prototype, "_date", 2);
__decorateClass$9([
  r()
], MealieMealplanRandomDialog.prototype, "_entryType", 2);
MealieMealplanRandomDialog = __decorateClass$9([
  defineOnce("mealie-mealplan-random-dialog")
], MealieMealplanRandomDialog);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {I:t}=j,i=o=>o,s=()=>document.createComment(""),v=(o,n,e)=>{const l=o._$AA.parentNode,d=void 0===n?o._$AB:n._$AA;if(void 0===e){const i=l.insertBefore(s(),d),n=l.insertBefore(s(),d);e=new t(i,n,o,o.options);}else {const t=e._$AB.nextSibling,n=e._$AM,c=n!==o;if(c){let t;e._$AQ?.(o),e._$AM=o,void 0!==e._$AP&&(t=o._$AU)!==n._$AU&&e._$AP(t);}if(t!==d||c){let o=e._$AA;for(;o!==t;){const t=i(o).nextSibling;i(l).insertBefore(o,d),o=t;}}}return e},u$1=(o,t,i=o)=>(o._$AI(t,i),o),m={},p=(o,t=m)=>o._$AH=t,M=o=>o._$AH,h=o=>{o._$AR(),o._$AA.remove();};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=e(class extends i$2{constructor(e){if(super(e),e.type!==t$1.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.dt(e,s,t).values}update(s,[t,r,c]){const d=M(s),{values:p$1,keys:a}=this.dt(t,r,c);if(!Array.isArray(d))return this.ut=a,p$1;const h$1=this.ut??=[],v$1=[];let m,y,x=0,j=d.length-1,k=0,w=p$1.length-1;for(;x<=j&&k<=w;)if(null===d[x])x++;else if(null===d[j])j--;else if(h$1[x]===a[k])v$1[k]=u$1(d[x],p$1[k]),x++,k++;else if(h$1[j]===a[w])v$1[w]=u$1(d[j],p$1[w]),j--,w--;else if(h$1[x]===a[w])v$1[w]=u$1(d[x],p$1[w]),v(s,v$1[w+1],d[x]),x++,w--;else if(h$1[j]===a[k])v$1[k]=u$1(d[j],p$1[k]),v(s,d[x],d[j]),j--,k++;else if(void 0===m&&(m=u(a,k,w),y=u(h$1,x,j)),m.has(h$1[x]))if(m.has(h$1[j])){const e=y.get(a[k]),t=void 0!==e?d[e]:null;if(null===t){const e=v(s,d[x]);u$1(e,p$1[k]),v$1[k]=e;}else v$1[k]=u$1(t,p$1[k]),v(s,d[x],t),d[e]=null;k++;}else h(d[j]),j--;else h(d[x]),x++;for(;k<=w;){const e=v(s,v$1[w+1]);u$1(e,p$1[k]),v$1[k++]=e;}for(;x<=j;){const e=d[x++];null!==e&&h(e);}return this.ut=a,p(s,v$1),E}});

var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$7(target, key, result);
  return result;
};
let MealieRecipeSearch = class extends i$3 {
  constructor() {
    super(...arguments);
    this.value = "";
    this.placeholder = "";
  }
  _emit(value) {
    this.value = value;
    this.dispatchEvent(new CustomEvent("search-changed", { detail: { value }, bubbles: false, composed: false }));
  }
  _onInput(e) {
    this._emit(e.target.value);
  }
  _clear() {
    this._emit("");
  }
  render() {
    return customElements.get("ha-input-search") ? this._renderInputSearch() : this._renderTextfield();
  }
  _renderInputSearch() {
    return b` <ha-input-search appearance="outlined" .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}></ha-input-search> `;
  }
  _renderTextfield() {
    return b`
      <ha-textfield icon .iconTrailing=${!!this.value} .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}>
        <ha-icon slot="leadingIcon" icon="mdi:magnify"></ha-icon>
        ${this.value ? b`
              <ha-icon-button slot="trailingIcon" .label=${this.placeholder} @click=${this._clear}>
                <ha-icon icon="mdi:close"></ha-icon>
              </ha-icon-button>
            ` : A}
      </ha-textfield>
    `;
  }
};
MealieRecipeSearch.styles = i$6`
    ha-input-search {
      display: block;
      width: 100%;
      --ha-input-search-height: 40px;
      --card-background-color: transparent;
    }

    ha-textfield {
      width: 100%;
      --input-fill-color: transparent;
    }
  `;
__decorateClass$8([
  n$1()
], MealieRecipeSearch.prototype, "value", 2);
__decorateClass$8([
  n$1()
], MealieRecipeSearch.prototype, "placeholder", 2);
MealieRecipeSearch = __decorateClass$8([
  defineOnce("mealie-recipe-search")
], MealieRecipeSearch);

var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$6(target, key, result);
  return result;
};
const PICKER_VIEW_STORAGE_KEY = "mealie-card:add-recipe-view";
function loadPickerView() {
  try {
    return localStorage.getItem(PICKER_VIEW_STORAGE_KEY) === "grid" ? "grid" : "list";
  } catch {
    return "list";
  }
}
function savePickerView(view) {
  try {
    localStorage.setItem(PICKER_VIEW_STORAGE_KEY, view);
  } catch {
    return;
  }
}
function selectableRecipes(recipes) {
  return recipes.filter((recipe) => !!recipe.recipe_id);
}
function toRecipeOptions(recipes) {
  return recipes.map((recipe) => ({ value: recipe.recipe_id, label: recipe.name }));
}
let MealieMealplanAddRecipeDialog = class extends MealieBaseDialog {
  constructor() {
    super(...arguments);
    this.date = null;
    this.imageBaseUrls = [];
    this.showImage = false;
    this._date = "";
    this._entryType = "dinner";
    this._recipes = [];
    this._recipeId = "";
    this._searching = false;
    this._view = loadPickerView();
    this._searchDebounce = null;
    this._searchRequest = 0;
    this._toggleView = () => {
      this._view = this._view === "list" ? "grid" : "list";
      savePickerView(this._view);
    };
    this._handleAdd = () => {
      const recipeId = this._recipeId;
      if (!recipeId || !this._date || !this._entryType || !this.hass) return;
      void this.submit({
        run: () => addToMealplan(this.hass, {
          date: this._date,
          entryType: this._entryType,
          recipeId,
          configEntryId: this.configEntryId ?? void 0
        }),
        success: "dialog.recipe_added_success",
        errorKey: "error.error_adding_recipe",
        signal: MEALPLAN_UPDATED
      });
    };
  }
  onOpen() {
    this._date = this.date ?? getLocalDateString(/* @__PURE__ */ new Date());
    this._entryType = "dinner";
    this._recipes = [];
    this._recipeId = "";
    this._cancelPendingSearch();
    void this._search("");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._cancelPendingSearch();
  }
  _cancelPendingSearch() {
    if (!this._searchDebounce) return;
    clearTimeout(this._searchDebounce);
    this._searchDebounce = null;
  }
  _onSearch(value) {
    this._cancelPendingSearch();
    this._searchDebounce = setTimeout(() => {
      this._searchDebounce = null;
      void this._search(value.trim());
    }, SEARCH_DEBOUNCE_MS);
  }
  async _search(query) {
    const request = ++this._searchRequest;
    this._searching = true;
    let recipes = [];
    try {
      recipes = await getMealieRecipes(this.hass, {
        configEntryId: this.configEntryId ?? void 0,
        resultLimit: ADD_RECIPE_RESULT_LIMIT,
        search: query || void 0
      });
    } catch (error) {
      if (this.open && request === this._searchRequest) fireEvent(this, "hass-notification", { message: this.localizeError(error) });
    }
    if (request !== this._searchRequest) return;
    this._searching = false;
    this._showRecipes(recipes);
  }
  _showRecipes(recipes) {
    this._recipes = selectableRecipes(recipes);
    if (!this._recipes.some((recipe) => recipe.recipe_id === this._recipeId)) this._recipeId = "";
  }
  _renderViewToggle() {
    if (!this.showImage) return A;
    const isList = this._view === "list";
    return b`
      <ha-icon-button .label=${this.localize(isList ? "dialog.view_as_grid" : "dialog.view_as_list")} @click=${this._toggleView}>
        <ha-icon icon=${isList ? "mdi:view-grid-outline" : "mdi:view-list-outline"}></ha-icon>
      </ha-icon-button>
    `;
  }
  _renderRecipeSelector() {
    return b`
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { mode: "list", options: toRecipeOptions(this._recipes) } }}
        .value=${this._recipeId}
        .label=${this.localize("dialog.select_recipe")}
        .required=${false}
        @value-changed=${(e) => {
      this._recipeId = e.detail.value;
    }}
      ></ha-selector>
    `;
  }
  _renderThumbnail(recipe) {
    const image = renderRecipeImageTemplate(this.hass, recipe, {
      urls: this.imageBaseUrls,
      variant: "tiny",
      containerClass: "recipe-thumb",
      imgClass: "recipe-thumb-img"
    });
    return image === A ? b`<div class="recipe-thumb image-error"></div>` : image;
  }
  _renderRecipeOption(recipe) {
    const selected = recipe.recipe_id === this._recipeId;
    return b`
      <button
        type="button"
        role="radio"
        class="recipe-option ${selected ? "selected" : ""}"
        aria-checked=${selected ? "true" : "false"}
        @click=${() => {
      this._recipeId = recipe.recipe_id;
    }}
      >
        ${this._renderThumbnail(recipe)}
        <span class="recipe-option-name">${recipe.name}</span>
      </button>
    `;
  }
  _renderRecipeOptions() {
    return b`
      <div class="recipe-options-${this._view}" role="radiogroup" aria-label=${this.localize("dialog.select_recipe")}>
        ${c(
      this._recipes,
      (recipe) => recipe.recipe_id,
      (recipe) => this._renderRecipeOption(recipe)
    )}
      </div>
    `;
  }
  _renderRecipePicker() {
    if (!this._recipes.length) {
      return this._searching ? this.renderLoadingIndicator() : b`<ha-alert alert-type="info">${this.localize("common.no_recipe")}</ha-alert>`;
    }
    return b`
      <div class="recipe-picker" aria-busy=${this._searching ? "true" : "false"}>
        ${this.showImage ? this._renderRecipeOptions() : this._renderRecipeSelector()}
      </div>
    `;
  }
  render() {
    if (!this.open) return A;
    return b`
      <ha-dialog .open=${this.open} width="medium" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_recipe_to_mealplan")}</span>

        <div class="dialog-body">
          <div class="card-toolbar">
            <mealie-recipe-search
              .placeholder=${this.localize("common.search_placeholder")}
              @search-changed=${(e) => this._onSearch(e.detail.value)}
            ></mealie-recipe-search>
            ${this._renderViewToggle()}
          </div>
          ${this._renderRecipePicker()} ${this.renderDateSelector(this._date, (v) => this._date = v)}
          ${this.renderEntryTypeSelector(this._entryType, (v) => this._entryType = v)}
        </div>

        ${this.renderPrimaryFooter("dialog.add", this._handleAdd, !this._recipeId || !this._date || !this._entryType || this._submitting)}
      </ha-dialog>
    `;
  }
};
__decorateClass$7([
  n$1()
], MealieMealplanAddRecipeDialog.prototype, "date", 2);
__decorateClass$7([
  n$1({ attribute: false })
], MealieMealplanAddRecipeDialog.prototype, "imageBaseUrls", 2);
__decorateClass$7([
  n$1({ type: Boolean })
], MealieMealplanAddRecipeDialog.prototype, "showImage", 2);
__decorateClass$7([
  r()
], MealieMealplanAddRecipeDialog.prototype, "_date", 2);
__decorateClass$7([
  r()
], MealieMealplanAddRecipeDialog.prototype, "_entryType", 2);
__decorateClass$7([
  r()
], MealieMealplanAddRecipeDialog.prototype, "_recipes", 2);
__decorateClass$7([
  r()
], MealieMealplanAddRecipeDialog.prototype, "_recipeId", 2);
__decorateClass$7([
  r()
], MealieMealplanAddRecipeDialog.prototype, "_searching", 2);
__decorateClass$7([
  r()
], MealieMealplanAddRecipeDialog.prototype, "_view", 2);
MealieMealplanAddRecipeDialog = __decorateClass$7([
  defineOnce("mealie-mealplan-add-recipe-dialog")
], MealieMealplanAddRecipeDialog);

var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$5(target, key, result);
  return result;
};
let MealieMealplanEditDialog = class extends MealieBaseDialog {
  constructor() {
    super(...arguments);
    this.planRecipe = null;
    this._date = "";
    this._entryType = "dinner";
    this._title = "";
    this._text = "";
    this._handleSave = () => {
      if (!this.planRecipe || !this._date || !this._entryType || !this.hass) return;
      const common = {
        configEntryId: this.configEntryId ?? void 0,
        mealplanId: String(this.planRecipe.mealplan_id),
        date: this._date,
        entryType: this._entryType
      };
      if (this._isNote) {
        const noteTitle = this._title.trim();
        if (!noteTitle) return;
        this._save({ ...common, noteTitle, noteText: this._text.trim() || void 0 });
        return;
      }
      const recipeId = this.planRecipe.recipe?.recipe_id;
      if (!recipeId) return;
      this._save({ ...common, recipeId });
    };
  }
  get _isNote() {
    return !this.planRecipe?.recipe;
  }
  onOpen() {
    if (!this.planRecipe) return;
    this._date = this.planRecipe.mealplan_date;
    this._entryType = this.planRecipe.entry_type;
    this._title = this.planRecipe.title ?? "";
    this._text = this.planRecipe.description ?? "";
  }
  _save(options) {
    void this.submit({
      run: () => updateMealplanEntry(this.hass, options),
      success: "dialog.mealplan_updated_success",
      errorKey: "error.error_updating_mealplan",
      signal: MEALPLAN_UPDATED
    });
  }
  render() {
    if (!this.open || !this.planRecipe) return A;
    const recipeNameBlock = !this._isNote ? b`<span slot="headerTitle">${this.planRecipe.recipe?.name ?? ""}</span>` : "";
    return b`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        ${recipeNameBlock}
        <span slot="headerSubtitle">${this.localize("dialog.edit_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date, (v) => this._date = v)} ${this.renderEntryTypeSelector(this._entryType, (v) => this._entryType = v)}
          ${this._isNote ? b`
                ${this.renderTextSelector(this._title, "dialog.note_title", (v) => this._title = v)}
                ${this.renderTextSelector(this._text, "dialog.note_text", (v) => this._text = v, true)}
              ` : ""}
        </div>

        ${this.renderPrimaryFooter(
      "dialog.save",
      this._handleSave,
      !this._date || !this._entryType || (this._isNote ? !this._title.trim() : !this.planRecipe.recipe?.recipe_id) || this._submitting
    )}
      </ha-dialog>
    `;
  }
};
__decorateClass$6([
  n$1({ attribute: false })
], MealieMealplanEditDialog.prototype, "planRecipe", 2);
__decorateClass$6([
  r()
], MealieMealplanEditDialog.prototype, "_date", 2);
__decorateClass$6([
  r()
], MealieMealplanEditDialog.prototype, "_entryType", 2);
__decorateClass$6([
  r()
], MealieMealplanEditDialog.prototype, "_title", 2);
__decorateClass$6([
  r()
], MealieMealplanEditDialog.prototype, "_text", 2);
MealieMealplanEditDialog = __decorateClass$6([
  defineOnce("mealie-mealplan-edit-dialog")
], MealieMealplanEditDialog);

var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$4(target, key, result);
  return result;
};
let MealieMealplanDeleteDialog = class extends MealieBaseDialog {
  constructor() {
    super(...arguments);
    this.entry = null;
    this._handleDelete = () => {
      if (!this.entry || !this.hass) return;
      void this.submit({
        run: () => deleteMealplanEntry(this.hass, String(this.entry.id), this.configEntryId ?? void 0),
        success: "dialog.mealplan_deleted_success",
        errorKey: "error.error_deleting_mealplan",
        signal: MEALPLAN_UPDATED
      });
    };
  }
  render() {
    if (!this.open || !this.entry) return A;
    return b`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.entry.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.confirm_delete_title")}</span>

        <div class="dialog-body-recipe">
          <span class="dialog-type">${getEntryTypeLabel(this.entry.entryType, this.hass?.locale?.language)}</span>
          <span class="dialog-label">${dateFormatWithDay(this.entry.date, this.hass)}</span>
        </div>

        <ha-dialog-footer slot="footer">
          <ha-button size="small" variant="danger" appearance="accent" slot="secondaryAction" @click=${this._close}>
            ${this.localize("dialog.cancel")}
          </ha-button>
          <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${this._handleDelete} ?disabled=${this._submitting}>
            ${this._submitting ? "..." : this.localize("dialog.confirm")}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `;
  }
};
__decorateClass$5([
  n$1({ attribute: false })
], MealieMealplanDeleteDialog.prototype, "entry", 2);
MealieMealplanDeleteDialog = __decorateClass$5([
  defineOnce("mealie-mealplan-delete-dialog")
], MealieMealplanDeleteDialog);

var __defProp$3 = Object.defineProperty;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result) __defProp$3(target, key, result);
  return result;
};
class MealieMealplanCard extends MealieBaseCard {
  constructor() {
    super(...arguments);
    this.recipes = [];
    this._dialogRecipe = null;
    this._confirmDeleteEntry = null;
    this._noteDialogDate = null;
    this._randomDialogDate = null;
    this._addRecipeDate = null;
    this._editDialogEntry = null;
    this._shoppingRecipe = null;
  }
  get _showAddRecipeButton() {
    return this.config.show_add_recipe_button ?? true;
  }
  get _showRandomButton() {
    return this.supports("random_mealplan") && (this.config.show_random_button ?? true);
  }
  get _showNoteButton() {
    return this.config.show_note_button ?? true;
  }
  get _showViewRecipeButton() {
    return this.config.show_view_recipe_button ?? true;
  }
  get _showShoppingListButton() {
    return this.supports("shopping_list") && (this.config.show_shopping_list_button ?? true);
  }
  get _showEditMealplanButton() {
    return this.supports("edit_mealplan") && (this.config.show_edit_mealplan_button ?? true);
  }
  get _showDeleteMealplanButton() {
    return this.supports("delete_mealplan") && (this.config.show_delete_mealplan_button ?? true);
  }
  get _dateRange() {
    const { start, count } = resolveDayRange(this.config.day_offset, this.config.days_to_show ?? 1);
    return getDateRange(count, start);
  }
  get _daysHorizontal() {
    return this.config.days_layout === "horizontal";
  }
  get _recipesHorizontal() {
    return this.config.recipes_layout === "horizontal";
  }
  _columnStyle(horizontal, property, columns) {
    return horizontal ? o({ [property]: String(Math.max(1, Math.floor(columns ?? 2))) }) : A;
  }
  _groupByDate() {
    const groups = /* @__PURE__ */ new Map();
    for (const entry of this.recipes) {
      const existing = groups.get(entry.mealplan_date);
      if (existing) existing.push(entry);
      else groups.set(entry.mealplan_date, [entry]);
    }
    return groups;
  }
  _scheduleMidnightRefresh() {
    this._clearMidnightTimer();
    const now = /* @__PURE__ */ new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 5, 0);
    this._midnightTimer = setTimeout(() => {
      this._reload();
      this._scheduleMidnightRefresh();
    }, nextMidnight.getTime() - now.getTime());
  }
  _clearMidnightTimer() {
    if (this._midnightTimer) {
      clearTimeout(this._midnightTimer);
      this._midnightTimer = void 0;
    }
  }
  watchedEntityIds() {
    return this.findMealieEntities("calendar");
  }
  itemCount() {
    return this.recipes.length;
  }
  hasOpenDialog() {
    return !!this._dialogRecipe || !!this._shoppingRecipe || !!this._editDialogEntry || !!this._confirmDeleteEntry || !!this._noteDialogDate || !!this._randomDialogDate || !!this._addRecipeDate;
  }
  refreshSignal() {
    return MEALPLAN_UPDATED;
  }
  subscribeExtras() {
    return [
      subscribeMealieEvent(RECIPE_RATED, ({ slug, rating }) => {
        this.recipes = this.recipes.map((entry) => entry.recipe?.slug === slug ? { ...entry, recipe: { ...entry.recipe, rating } } : entry);
      })
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this._scheduleMidnightRefresh();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._clearMidnightTimer();
  }
  setConfig(config) {
    this.config = normalizeTodayConfig(config);
    this._reload();
  }
  static getConfigElement() {
    return document.createElement("mealie-card-editor");
  }
  static getStubConfig() {
    return { ...DEFAULT_MEALPLAN_CONFIG };
  }
  async fetchData() {
    const range = this._dateRange;
    const mealPlanData = await getMealPlan(this.hass, {
      configEntryId: this.config.config_entry_id ?? void 0,
      startDate: range[0],
      endDate: range[range.length - 1]
    });
    const entryTypes = this.config.entry_types;
    this.recipes = entryTypes?.length ? mealPlanData.filter((item) => entryTypes.includes(item.entry_type)) : mealPlanData;
  }
  render() {
    if (!this.hass || !this.config) return this.renderLoading();
    if (!this.config.config_entry_id) return this.renderEmptyState(this.localize("error.no_integration"));
    return b`<ha-card>${this._renderContent()} ${this._renderDialogs()}</ha-card>`;
  }
  _renderContent() {
    if (this.error) return b`<div class="card-content">${this.renderErrorAlert()}</div>`;
    if ((this._loading || !this._initialized) && !this.recipes.length) return b`<div class="card-content">${this.renderLoadingIndicator()}</div>`;
    const groups = this._groupByDate();
    return b`
      <div class="days-wrapper" aria-busy=${this._loading ? "true" : "false"}>
        <div
          class="${this._daysHorizontal ? "days-horizontal" : "days-vertical"}"
          style=${this._columnStyle(this._daysHorizontal, "--mealie-day-columns", this.config.days_columns)}
        >
          ${this._dateRange.map((date) => this._renderDaySection(date, groups.get(date) ?? []))}
        </div>
      </div>
    `;
  }
  _renderDialogs() {
    return b`
      <mealie-recipe-dialog
        .hass=${this.hass}
        .recipe=${this._dialogRecipe}
        .configEntryId=${this.config.config_entry_id}
        .config=${this.config}
        .defaultShoppingListId=${this.config.default_shopping_list_id ?? null}
        ?open=${!!this._dialogRecipe}
        @dialog-closed=${() => {
      this._dialogRecipe = null;
    }}
      ></mealie-recipe-dialog>
      <mealie-mealplan-note-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        .date=${this._noteDialogDate}
        ?open=${!!this._noteDialogDate}
        @dialog-closed=${() => {
      this._noteDialogDate = null;
    }}
      ></mealie-mealplan-note-dialog>
      <mealie-mealplan-random-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        .targetDate=${this._randomDialogDate}
        ?open=${!!this._randomDialogDate}
        @dialog-closed=${() => {
      this._randomDialogDate = null;
    }}
      ></mealie-mealplan-random-dialog>
      <mealie-mealplan-add-recipe-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        .date=${this._addRecipeDate}
        .imageBaseUrls=${imageBaseUrls(this.config)}
        .showImage=${this.config.show_image}
        ?open=${!!this._addRecipeDate}
        @dialog-closed=${() => {
      this._addRecipeDate = null;
    }}
      ></mealie-mealplan-add-recipe-dialog>
      <mealie-mealplan-edit-dialog
        .hass=${this.hass}
        .planRecipe=${this._editDialogEntry}
        .configEntryId=${this.config.config_entry_id}
        ?open=${!!this._editDialogEntry}
        @dialog-closed=${() => {
      this._editDialogEntry = null;
    }}
      ></mealie-mealplan-edit-dialog>
      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._shoppingRecipe}
        .configEntryId=${this.config.config_entry_id}
        .defaultShoppingListId=${this.config.default_shopping_list_id ?? null}
        ?open=${!!this._shoppingRecipe}
        @dialog-closed=${() => {
      this._shoppingRecipe = null;
    }}
      ></mealie-shopping-list-dialog>
      <mealie-mealplan-delete-dialog
        .hass=${this.hass}
        .entry=${this._confirmDeleteEntry}
        .configEntryId=${this.config.config_entry_id}
        ?open=${!!this._confirmDeleteEntry}
        @dialog-closed=${() => {
      this._confirmDeleteEntry = null;
    }}
      ></mealie-mealplan-delete-dialog>
    `;
  }
  _renderDaySection(date, entries) {
    return b`
      <div class="day-section">
        ${this._renderDayHeader(date)}
        <div class="card-content">
          ${entries.length ? b`<div
                class="${this._recipesHorizontal ? "recipes-horizontal" : "recipes-vertical"}"
                style=${this._columnStyle(this._recipesHorizontal, "--mealie-recipe-columns", this.config.recipes_columns)}
              >
                ${entries.map((planRecipe) => this._renderRecipeCard(planRecipe))}
              </div>` : b`<ha-alert alert-type="info">${this.localize("common.no_mealplan")}</ha-alert>`}
        </div>
      </div>
    `;
  }
  _renderDayHeader(date) {
    return b`
      <div class="card-header-row">
        <div class="date-label">${dateFormatWithDay(date, this.hass)}</div>
        <div class="header-actions">${this.renderActionsMenu(this._dayActions(date), "cards.day_actions")}</div>
      </div>
    `;
  }
  _dayActions(date) {
    const actions = [];
    if (this._showAddRecipeButton) {
      actions.push({
        labelKey: "dialog.add_recipe_to_mealplan",
        icon: "mdi:calendar-plus",
        onClick: () => {
          this._addRecipeDate = date;
        }
      });
    }
    if (this._showRandomButton) {
      actions.push({
        labelKey: "cards.random_mealplan",
        icon: "mdi:dice-6",
        onClick: () => {
          this._randomDialogDate = date;
        }
      });
    }
    if (this._showNoteButton) {
      actions.push({
        labelKey: "dialog.add_note_to_mealplan",
        icon: "mdi:note-plus-outline",
        onClick: () => {
          this._noteDialogDate = date;
        }
      });
    }
    return actions;
  }
  _renderRecipeCard(planRecipe) {
    return b`
      <div class="recipe-card">
        <div class="recipe-card-body">
          <div class="recipe-type">${getEntryTypeLabel(planRecipe.entry_type, this.hass?.locale?.language)}</div>
          ${planRecipe.recipe ? this._renderRecipeWithData(planRecipe.recipe, planRecipe) : this._renderRecipeWithoutData(planRecipe)}
        </div>
      </div>
    `;
  }
  _mealplanActions(planRecipe, name) {
    const actions = [];
    if (this._showEditMealplanButton) {
      actions.push({
        labelKey: "cards.edit_mealplan",
        icon: "mdi:pencil",
        onClick: () => {
          this._editDialogEntry = planRecipe;
        }
      });
    }
    if (this._showDeleteMealplanButton) {
      actions.push({
        labelKey: "cards.delete_mealplan",
        icon: "mdi:trash-can-outline",
        variant: "danger",
        onClick: () => {
          this._confirmDeleteEntry = {
            id: planRecipe.mealplan_id,
            name,
            entryType: planRecipe.entry_type,
            date: planRecipe.mealplan_date
          };
        }
      });
    }
    return actions;
  }
  _renderRecipeWithData(recipe, planRecipe) {
    const actions = [];
    if (this._showViewRecipeButton) {
      actions.push({
        labelKey: "cards.view_recipe",
        icon: "mdi:book-open-variant",
        onClick: () => {
          if (this.openRecipe(recipe)) this._dialogRecipe = recipe;
        }
      });
    }
    if (this._showShoppingListButton) {
      actions.push({
        labelKey: "dialog.add_to_shopping_list",
        icon: "mdi:cart-plus",
        onClick: () => {
          this._shoppingRecipe = recipe;
        }
      });
    }
    actions.push(...this._mealplanActions(planRecipe, recipe.name));
    return b`
      ${this.renderRecipeMedia(recipe, this.config.show_image, actions)}
      <div class="recipe-title">${this.renderRecipeName(recipe)}</div>
      <div class="recipe-meta">
        ${this._renderInteractiveRating(recipe, this.config.show_rating, this.config.config_entry_id)}
        ${this.renderServings(recipe.recipe_servings, this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(recipe.description ?? "", this.config.show_description)}
      ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
    `;
  }
  _renderRecipeWithoutData(planRecipe) {
    return b`
      ${this.renderRecipeMedia(planRecipe, false, this._mealplanActions(planRecipe, planRecipe.title ?? ""))}
      <div class="recipe-title">${this.renderRecipeName(planRecipe)}</div>
      ${this.renderRecipeDescription(planRecipe.description ?? "", true)}
    `;
  }
}
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "config");
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "recipes");
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "_dialogRecipe");
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "_confirmDeleteEntry");
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "_noteDialogDate");
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "_randomDialogDate");
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "_addRecipeDate");
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "_editDialogEntry");
__decorateClass$4([
  r()
], MealieMealplanCard.prototype, "_shoppingRecipe");

var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(result)) || result;
  return result;
};
let MealieRecipeCardEditor = class extends BaseMealieCardEditor {
  get _favoritesSupported() {
    return isFeatureSupported(this.hass, "favorites");
  }
  renderInfosDisplayFields() {
    return b`
      ${super.renderInfosDisplayFields()}
      ${this._favoritesSupported ? renderBool(!!this.config.show_favorite, this.localize("editor.show_favorite"), (v) => this._setValue("show_favorite", v)) : A}
    `;
  }
  render() {
    if (!this.hass || !this.config) return this.renderEditorLoading();
    return b`
      ${this.renderTopForm()} ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()}
      ${this.renderRecipeViewOptions()} ${this.renderLanguageOptions()}

      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${renderNumber(this.hass, this.config.result_limit, this.localize("editor.number_of_recipes"), 1, 100, (v) => this._setValue("result_limit", v))}
          ${renderBool(!!this.config.show_search, this.localize("editor.show_search"), (v) => this._setValue("show_search", v))}
          ${this._favoritesSupported ? renderBool(!!this.config.show_favorites_only, this.localize("editor.show_favorites_only"), (v) => this._setValue("show_favorites_only", v)) : A}
          ${renderBool(!!this.config.show_import_button, this.localize("editor.show_import_button"), (v) => this._setValue("show_import_button", v))}
        </div>
      </ha-expansion-panel>
      ${this.renderVersion()}
    `;
  }
};
MealieRecipeCardEditor = __decorateClass$3([
  defineOnce("mealie-recipe-card-editor")
], MealieRecipeCardEditor);

var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$2(target, key, result);
  return result;
};
let MealieMealplanDialog = class extends MealieBaseDialog {
  constructor() {
    super(...arguments);
    this.recipe = null;
    this.imageBaseUrls = [];
    this._date = "";
    this._entryType = "dinner";
    this._imageMissing = false;
    this._handleAdd = () => {
      const recipeId = this.recipe?.recipe_id;
      if (!recipeId || !this._date || !this._entryType || !this.hass) return;
      void this.submit({
        run: () => addToMealplan(this.hass, {
          date: this._date,
          entryType: this._entryType,
          recipeId,
          configEntryId: this.configEntryId ?? void 0
        }),
        success: "dialog.recipe_added_success",
        errorKey: "error.error_adding_recipe",
        signal: MEALPLAN_UPDATED
      });
    };
  }
  onOpen() {
    this._date = getLocalDateString(/* @__PURE__ */ new Date());
    this._entryType = "dinner";
    this._imageMissing = false;
  }
  _renderImage() {
    if (!this.recipe || this._imageMissing) return A;
    return renderRecipeImageTemplate(this.hass, this.recipe, {
      urls: this.imageBaseUrls,
      variant: "original",
      containerClass: "detail-image",
      imgClass: "detail-image-img",
      onImageMissing: () => {
        this._imageMissing = true;
      }
    });
  }
  render() {
    if (!this.recipe) return A;
    return b`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.add_recipe_to_mealplan")}</span>

        <div class="dialog-body">
          ${this._renderImage()} ${this.renderDateSelector(this._date, (v) => this._date = v)}
          ${this.renderEntryTypeSelector(this._entryType, (v) => this._entryType = v)}
        </div>

        ${this.renderPrimaryFooter("dialog.add", this._handleAdd, !this.recipe.recipe_id || !this._date || !this._entryType || this._submitting)}
      </ha-dialog>
    `;
  }
};
__decorateClass$2([
  n$1({ attribute: false })
], MealieMealplanDialog.prototype, "recipe", 2);
__decorateClass$2([
  n$1({ attribute: false })
], MealieMealplanDialog.prototype, "imageBaseUrls", 2);
__decorateClass$2([
  r()
], MealieMealplanDialog.prototype, "_date", 2);
__decorateClass$2([
  r()
], MealieMealplanDialog.prototype, "_entryType", 2);
__decorateClass$2([
  r()
], MealieMealplanDialog.prototype, "_imageMissing", 2);
MealieMealplanDialog = __decorateClass$2([
  defineOnce("mealie-mealplan-dialog")
], MealieMealplanDialog);

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
let MealieRecipeImportDialog = class extends MealieBaseDialog {
  constructor() {
    super(...arguments);
    this._url = "";
    this._includeTags = false;
    this._importedName = null;
    this._handleImport = () => {
      if (!this._url.trim() || !this.hass) return;
      this._importedName = null;
      void this.submit({
        run: async () => {
          const recipe = await importRecipe(this.hass, {
            url: this._url.trim(),
            includeTags: this._includeTags,
            configEntryId: this.configEntryId ?? void 0
          });
          this._importedName = recipe?.name ?? recipe?.slug ?? "";
        },
        success: () => `${this.localize("dialog.recipe_imported_success")}${this._importedName ? `: ${this._importedName}` : ""}`,
        errorKey: "error.error_loading",
        signal: RECIPES_UPDATED,
        closeOnSuccess: false
      });
    };
  }
  onOpen() {
    this._url = "";
    this._includeTags = false;
    this._importedName = null;
  }
  render() {
    if (!this.open) return A;
    return b`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.import_recipe")}</span>

        <div class="dialog-body">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ text: { type: "url" } }}
            .value=${this._url}
            .label=${this.localize("dialog.import_url")}
            .required=${false}
            @value-changed=${(e) => {
      this._url = e.detail.value;
    }}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${{ boolean: {} }}
            .value=${this._includeTags}
            .label=${this.localize("dialog.import_include_tags")}
            .required=${false}
            @value-changed=${(e) => {
      this._includeTags = e.detail.value;
    }}
          ></ha-selector>

          ${this._importedName ? b`<ha-alert alert-type="success">${this.localize("dialog.recipe_imported_success")}: <strong>${this._importedName}</strong></ha-alert>` : A}
        </div>

        ${this.renderPrimaryFooter("dialog.import", this._handleImport, !this._url.trim() || this._submitting)}
      </ha-dialog>
    `;
  }
};
__decorateClass$1([
  r()
], MealieRecipeImportDialog.prototype, "_url", 2);
__decorateClass$1([
  r()
], MealieRecipeImportDialog.prototype, "_includeTags", 2);
__decorateClass$1([
  r()
], MealieRecipeImportDialog.prototype, "_importedName", 2);
MealieRecipeImportDialog = __decorateClass$1([
  defineOnce("mealie-recipe-import-dialog")
], MealieRecipeImportDialog);

var __defProp = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result) __defProp(target, key, result);
  return result;
};
class MealieRecipeCard extends MealieBaseCard {
  constructor() {
    super(...arguments);
    this.recipes = [];
    this._mealplanRecipe = null;
    this._dialogRecipe = null;
    this._searchQuery = "";
    this._importDialogOpen = false;
    this._shoppingRecipe = null;
    this._searchDebounce = null;
    this._favoriteRecipesCache = null;
    this._favoriteIdsCache = null;
    this._ignoreRecipeClicksUntil = 0;
  }
  refreshSignal() {
    return RECIPES_UPDATED;
  }
  subscribeExtras() {
    return [
      subscribeMealieEvent(RECIPE_RATED, ({ slug, rating }) => {
        this.recipes = this.recipes.map((r) => r.slug === slug ? { ...r, rating } : r);
      }),
      subscribeMealieEvent(FAVORITE_TOGGLED, ({ slug, favorite }) => {
        this._favoriteIdsCache = null;
        if (this._favorites.get(slug) !== favorite) {
          this._favorites = new Map(this._favorites).set(slug, favorite);
        }
        if (this.config?.show_favorites_only && this._favoriteRecipesCache) {
          this.recipes = this._visibleFavoriteRecipes();
        }
      })
    ];
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._searchDebounce) {
      clearTimeout(this._searchDebounce);
      this._searchDebounce = null;
    }
  }
  setConfig(config) {
    this.config = normalizeRecipeConfig(config);
    this._reload();
  }
  watchedEntityIds() {
    return this.findMealieEntities("sensor").filter((id) => id.endsWith("_recipes"));
  }
  itemCount() {
    return this.recipes.length;
  }
  hasOpenDialog() {
    return !!this._dialogRecipe || !!this._mealplanRecipe || !!this._shoppingRecipe || this._importDialogOpen;
  }
  _invalidateFavoriteCaches() {
    this._favoriteRecipesCache = null;
    this._favoriteIdsCache = null;
  }
  _reload() {
    this._invalidateFavoriteCaches();
    super._reload();
  }
  async fetchData() {
    this.recipes = this.config.show_favorites_only && this.supports("favorites") ? await this._loadFavoriteRecipes() : await this._loadAllRecipes();
  }
  async _favoriteIds() {
    if (!this.supports("favorites")) return /* @__PURE__ */ new Set();
    if (!this._favoriteIdsCache) {
      const favs = await getRecipeFavorites(this.hass, this.config.config_entry_id ?? void 0);
      this._favoriteIdsCache = new Set(favs.map((f) => f.recipe_id));
    }
    return this._favoriteIdsCache;
  }
  async _loadFavoriteRecipes() {
    if (!this._favoriteRecipesCache) {
      const favIds = await this._favoriteIds();
      const allRecipes = await getMealieRecipes(this.hass, {
        configEntryId: this.config.config_entry_id ?? void 0,
        resultLimit: FAVORITES_FETCH_LIMIT
      });
      this._favoriteRecipesCache = allRecipes.filter((r) => favIds.has(r.recipe_id ?? ""));
      if (this.config.show_favorite) {
        this._favorites = new Map(this._favoriteRecipesCache.map((r) => [r.slug, true]));
      }
    }
    return this._visibleFavoriteRecipes();
  }
  _visibleFavoriteRecipes() {
    const cached = this._favoriteRecipesCache ?? [];
    return this._applyFavoriteSearch(cached.filter((r) => this._favorites.get(r.slug) !== false));
  }
  async _loadAllRecipes() {
    const withFavorites = this.config.show_favorite && this.supports("favorites");
    const [recipes, favIds] = await Promise.all([
      getMealieRecipes(this.hass, {
        configEntryId: this.config.config_entry_id ?? void 0,
        resultLimit: this.config.result_limit ?? DEFAULT_RESULT_LIMIT,
        search: this._searchQuery || void 0
      }),
      withFavorites ? this._favoriteIds() : null
    ]);
    if (favIds) {
      this._favorites = new Map(recipes.map((r) => [r.slug, favIds.has(r.recipe_id ?? "")]));
    }
    return recipes;
  }
  _applyFavoriteSearch(list) {
    const query = this._searchQuery.toLowerCase();
    return query ? list.filter((r) => r.name?.toLowerCase().includes(query)) : list;
  }
  _onSearch(value) {
    this._searchQuery = value;
    if (this.config.show_favorites_only && this._favoriteRecipesCache) {
      this.recipes = this._visibleFavoriteRecipes();
      return;
    }
    if (this._searchDebounce) clearTimeout(this._searchDebounce);
    this._searchDebounce = setTimeout(() => this._reload(), SEARCH_DEBOUNCE_MS);
  }
  static getConfigElement() {
    return document.createElement("mealie-recipe-card-editor");
  }
  static getStubConfig() {
    return { ...DEFAULT_RECIPE_CONFIG };
  }
  render() {
    if (!this.config) return this.renderLoading();
    if (!this.config.config_entry_id) return this.renderEmptyState(this.localize("error.no_integration"));
    return b`${this._renderCardShell(this._renderContent())} ${this._renderDialogs()}`;
  }
  _renderContent() {
    if (this.error) return this.renderErrorAlert();
    const hasRecipes = !!this.recipes?.length;
    if ((this._loading || !this._initialized) && !hasRecipes) return this.renderLoadingIndicator();
    if (!hasRecipes) return b`<ha-alert alert-type="info">${this.localize("common.no_recipe")}</ha-alert>`;
    return b`<div class="recipes-wrapper" aria-busy=${this._loading ? "true" : "false"}>
      <div class="recipes-container">${this.recipes.map((recipe) => this._renderRecipe(recipe))}</div>
    </div>`;
  }
  _renderDialogs() {
    return b`
      <mealie-mealplan-dialog
        .hass=${this.hass}
        .recipe=${this._mealplanRecipe}
        .configEntryId=${this.config.config_entry_id}
        .imageBaseUrls=${imageBaseUrls(this.config)}
        ?open=${!!this._mealplanRecipe}
        @dialog-closed=${() => {
      this._ignoreRecipeClicksUntil = Date.now() + 300;
      this._mealplanRecipe = null;
    }}
      ></mealie-mealplan-dialog>
      <mealie-recipe-dialog
        .hass=${this.hass}
        .recipe=${this._dialogRecipe}
        .configEntryId=${this.config.config_entry_id}
        .config=${this.config}
        .isFavorite=${this._dialogRecipe?.slug ? this._favorites.get(this._dialogRecipe.slug) ?? false : null}
        .defaultShoppingListId=${this.config.default_shopping_list_id ?? null}
        ?open=${!!this._dialogRecipe}
        @dialog-closed=${() => {
      this._ignoreRecipeClicksUntil = Date.now() + 300;
      this._dialogRecipe = null;
    }}
      ></mealie-recipe-dialog>
      <mealie-recipe-import-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        ?open=${this._importDialogOpen}
        @dialog-closed=${() => {
      this._ignoreRecipeClicksUntil = Date.now() + 300;
      this._importDialogOpen = false;
    }}
      ></mealie-recipe-import-dialog>
      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._shoppingRecipe}
        .configEntryId=${this.config.config_entry_id}
        .defaultShoppingListId=${this.config.default_shopping_list_id ?? null}
        ?open=${!!this._shoppingRecipe}
        @dialog-closed=${() => {
      this._ignoreRecipeClicksUntil = Date.now() + 300;
      this._shoppingRecipe = null;
    }}
      ></mealie-shopping-list-dialog>
    `;
  }
  _renderCardShell(content) {
    return b`
      <ha-card>
        <div class="card-content">${this._renderToolbar()} ${content}</div>
      </ha-card>
    `;
  }
  _renderToolbar() {
    const showSearch = this.config.show_search ?? false;
    const showImport = this.config.show_import_button && this.supports("import_recipe");
    if (!showSearch && !showImport) return A;
    return b`
      <div class="card-toolbar">
        ${showSearch ? b`<mealie-recipe-search
              .value=${this._searchQuery}
              .placeholder=${this.localize("common.search_placeholder")}
              @search-changed=${(e) => this._onSearch(e.detail.value)}
            ></mealie-recipe-search>` : A}
        ${showImport ? b`<ha-icon-button
                    .label=${this.localize("dialog.import_recipe")}
                    @click=${() => {
      this._importDialogOpen = true;
    }}
                  >
                    <ha-icon icon="mdi:cloud-download"></ha-icon>
                  </ha-icon-button>` : A}
      </div>
    `;
  }
  _recipeActions(recipe) {
    const actions = [
      {
        labelKey: "dialog.add_to_mealplan",
        icon: "mdi:calendar-plus",
        onClick: () => {
          this._mealplanRecipe = recipe;
        }
      }
    ];
    if (this.supports("shopping_list")) {
      actions.push({
        labelKey: "dialog.add_to_shopping_list",
        icon: "mdi:cart-plus",
        onClick: () => {
          this._shoppingRecipe = recipe;
        }
      });
    }
    actions.push({
      labelKey: "cards.view_recipe",
      icon: "mdi:book-open-variant",
      onClick: () => {
        if (this.openRecipe(recipe)) this._dialogRecipe = recipe;
      }
    });
    return actions;
  }
  _renderRecipeInfo(recipe) {
    return b`
      <div class="recipe-title">${this.renderRecipeName(recipe)}</div>
      <div class="recipe-meta">
        ${this.renderFavoriteButton(recipe, this.config.show_favorite ?? false, this.config.config_entry_id)}
        ${this._renderInteractiveRating(recipe, this.config.show_rating, this.config.config_entry_id)}
        ${this.renderServings(recipe.recipe_servings, this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(recipe.description ?? "", this.config.show_description)}
    `;
  }
  _renderRecipe(recipe) {
    return b`
      <div
        class="recipe-card"
        @click=${(e) => this._handleRecipeClick(e, recipe)}
      >
        ${this.renderRecipeMedia(recipe, this.config.show_image, this._recipeActions(recipe))} ${this._renderRecipeInfo(recipe)}
        ${this.renderRecipeTimes(recipe, this.config.show_prep_time, this.config.show_perform_time, this.config.show_total_time)}
      </div>
    `;
  }
  _handleRecipeClick(e, recipe) {
    if (Date.now() < this._ignoreRecipeClicksUntil) return;
    if (this._dialogRecipe) return;
    if (e.target.closest(".card-buttons")) return;
    if (this._clickTimer !== void 0) {
      clearTimeout(this._clickTimer);
      this._clickTimer = void 0;
      this._mealplanRecipe = recipe;
      return;
    }
    this._clickTimer = setTimeout(() => {
      this._clickTimer = void 0;
      if (this.openRecipe(recipe)) {
        this._dialogRecipe = recipe;
      }
    }, 300);
  }
}
__decorateClass([
  r()
], MealieRecipeCard.prototype, "config");
__decorateClass([
  r()
], MealieRecipeCard.prototype, "recipes");
__decorateClass([
  r()
], MealieRecipeCard.prototype, "_mealplanRecipe");
__decorateClass([
  r()
], MealieRecipeCard.prototype, "_dialogRecipe");
__decorateClass([
  r()
], MealieRecipeCard.prototype, "_searchQuery");
__decorateClass([
  r()
], MealieRecipeCard.prototype, "_importDialogOpen");
__decorateClass([
  r()
], MealieRecipeCard.prototype, "_shoppingRecipe");

if (!customElements.get("mealie-mealplan-card")) {
  customElements.define("mealie-mealplan-card", MealieMealplanCard);
}
if (!customElements.get("mealie-recipe-card")) {
  customElements.define("mealie-recipe-card", MealieRecipeCard);
}
window.customCards = window.customCards || [];
const cardConfigs = [
  {
    type: "mealie-mealplan-card",
    name: localizeForLang("en", "cards.name_mealplan"),
    description: localizeForLang("en", "cards.description_mealplan"),
    configurable: true,
    preview: true,
    documentationURL: "https://github.com/domodom30/mealie-card"
  },
  {
    type: "mealie-recipe-card",
    name: localizeForLang("en", "cards.name_recipes"),
    description: localizeForLang("en", "cards.description_recipes"),
    configurable: true,
    preview: true,
    documentationURL: "https://github.com/domodom30/mealie-card"
  }
];
cardConfigs.forEach((card) => {
  if (!window.customCards?.some((c) => c.type === card.type)) {
    window.customCards?.push(card);
  }
});
console.info(`%c MEALIE-CARD %c ${version}`, "color: white; background: orange; font-weight: 700;", "color: orange; background: white; font-weight: 700;");

export { MealieMealplanCard, MealieRecipeCard };
//# sourceMappingURL=mealie-card.js.map
