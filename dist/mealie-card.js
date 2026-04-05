function e(e,t,i,a){var r,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),r=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new n(i,e,a)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,m=globalThis,u=m.trustedTypes,g=u?u.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&d(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:r}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const n=a?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{if(i)e.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of a){const a=document.createElement("style"),r=t.litNonce;void 0!==r&&a.setAttribute("nonce",r),a.textContent=i.cssText,e.appendChild(a)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a;const n=r.fromAttribute(t,e.type);this[a]=n??this._$Ej?.get(a)??n,this._$Em=null}}requestUpdate(e,t,i,a=!1,r){if(void 0!==e){const n=this.constructor;if(!1===a&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??b)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,f?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");const z=globalThis,x=e=>e,k=z.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+M,C=`<${S}>`,R=document,D=()=>R.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,P="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,L=/>/g,O=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,B=/"/g,H=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,q=R.createTreeWalker(R,129);function G(e,t){if(!j(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,a=[];let r,n=2===t?"<svg>":3===t?"<math>":"",o=I;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===I?"!--"===l[1]?o=U:void 0!==l[1]?o=L:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=r??I,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?O:'"'===l[3]?B:N):o===B||o===N?o=O:o===U||o===L?o=I:(o=O,r=void 0);const p=o===O&&e[t+1].startsWith("/>")?" ":"";n+=o===I?i+C:d>=0?(a.push(s),i.slice(0,d)+A+i.slice(d)+M+p):i+M+(-2===d?t:p)}return[G(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class Q{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let r=0,n=0;const o=e.length-1,s=this.parts,[l,d]=Z(e,t);if(this.el=Q.createElement(l,i),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=q.nextNode())&&s.length<o;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(A)){const t=d[n++],i=a.getAttribute(e).split(M),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?te:"?"===o[1]?ie:"@"===o[1]?ae:ee}),a.removeAttribute(e)}else e.startsWith(M)&&(s.push({type:6,index:r}),a.removeAttribute(e));if(H.test(a.tagName)){const e=a.textContent.split(M),t=e.length-1;if(t>0){a.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],D()),q.nextNode(),s.push({type:2,index:++r});a.append(e[t],D())}}}else if(8===a.nodeType)if(a.data===S)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=a.data.indexOf(M,e+1));)s.push({type:7,index:r}),e+=M.length-1}r++}}static createElement(e,t){const i=R.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,a){if(t===F)return t;let r=void 0!==a?i._$Co?.[a]:i._$Cl;const n=T(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=r:i._$Cl=r),void 0!==r&&(t=J(e,r._$AS(e,t.values),r,a)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??R).importNode(t,!0);q.currentNode=a;let r=q.nextNode(),n=0,o=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new X(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new re(r,this,e)),this._$AV.push(t),s=i[++o]}n!==s?.index&&(r=q.nextNode(),n++)}return q.currentNode=R,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>j(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new Y(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Q(e)),t}k(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const r of e)a===t.length?t.push(i=new X(this.O(D()),this.O(D()),this,this.options)):i=t[a],i._$AI(r),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,a){const r=this.strings;let n=!1;if(void 0===r)e=J(this,e,t,0),n=!T(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const a=e;let o,s;for(e=r[0],o=0;o<r.length-1;o++)s=J(this,a[i+o],t,o),s===F&&(s=this._$AH[o]),n||=!T(s)||s!==this._$AH[o],s===W?e=W:e!==W&&(e+=(s??"")+r[o+1]),this._$AH[o]=s}n&&!a&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ae extends ee{constructor(e,t,i,a,r){super(e,t,i,a,r),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??W)===F)return;const i=this._$AH,a=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==W&&(i===W||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const ne=z.litHtmlPolyfillSupport;ne?.(Q,X),(z.litHtmlVersions??=[]).push("3.3.2");const oe=globalThis;let se=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let r=a._$litPart$;if(void 0===r){const e=i?.renderBefore??null;a._$litPart$=r=new X(t.insertBefore(D(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};se._$litElement$=!0,se.finalized=!0,oe.litElementHydrateSupport?.({LitElement:se});const le=oe.litElementPolyfillSupport;le?.({LitElement:se}),(oe.litElementVersions??=[]).push("4.2.2");const de=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},pe=(e=ce,t,i)=>{const{kind:a,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,r,e,!0,i)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const r=this[a];t.call(this,i),this.requestUpdate(a,r,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};function he(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function _e(e){return he({...e,state:!0,attribute:!1})}var me,ue,ge=function(e){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"})};function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(me||(me={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ue||(ue={}));var ye=function(e,t,i,a){a=a||{},i=null==i?{}:i;var r=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return r.detail=i,e.dispatchEvent(r),r};const ve="mealie",be={show_image:!1,show_rating:!1,show_servings:!1,show_prep_time:!0,show_total_time:!0,show_perform_time:!0,show_description:!1},$e={url:"",group:"home"},we={type:"custom:mealie-mealplan-card",entry_types:[],layout:"vertical",recipes_layout:"vertical",day_offset:0,...be,...$e},ze={type:"custom:mealie-recipe-card",result_limit:10,...be,...$e};function xe(e,t,i){if(!e)throw new Error(i);const a={...e};for(const e in t)a[e]=a[e]??t[e];return a}var ke={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Vis dagens måltider",name_recipes:"Mealie Opskrifter",description_recipes:"Vis dine opskrifter fra Mealie-instansen",view_recipe:"Vis opskrift",delete_mealplan:"Fjern fra plan"},Ee={no_recipe:"Ingen opskrift",no_mealplan:"Intet måltid",today:"I dag",breakfast:"Morgenmad",lunch:"Frokost",dinner:"Aftensmad",side:"Tilbehør",dessert:"Dessert",drink:"Drik",snack:"Snack"},Ae={add_to_mealplan:"Tilføj til måltidsplan",add_recipe_to_mealplan:"Tilføj til måltidsplan",select_date:"Vælg en dato",select_meal_type:"Måltidstype",recipe_added_success:"Opskrift tilføjet til plan",cancel:"Annuller",close:"Luk",add:"Tilføj",mealplan_deleted_success:"Måltid fjernet fra plan",confirm_delete_title:"Fjern dette måltid?",confirm_delete_message:"Denne handling kan ikke fortrydes.",confirm:"Bekræft",ingredients:"Ingredienser",instructions:"Vejledning",times:"Tider",prep_time:"Forberedelse",cooking_time:"Tilberedning",total_time:"Total"},Me={number_of_days:"For at konfigurere kalendervisningen:\n• 0 = i dag\n• 1 = i morgen\n• 2 = i overmorgen\n• osv...",no_url:"Konfigurer Mealie URL for at aktivere billeder og opskriftslinks."},Se={invalid_config:"Ugyldig konfiguration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fejl ved indlæsning af konfiguration",error_loading:"Fejl ved indlæsning af data",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fejl ved sletning af måltid"},Ce={integration:"Mealie integration",entry_types:"Måltidstyper der skal vises",loading:"Indlæser...",mealie_url:"Mealie URL",number_of_recipes:"Antal opskrifter der skal vises",number_of_recipes_helper:"Antal opskrifter der skal vises (standard 10).",settings_recipes_card:"Visningskonfiguration",settings_title_layout:"Layout",show_image:"Vis billede",show_rating:"Vis bedømmelse",show_servings:"Portioner & Mængde",show_description:"Vis beskrivelse",show_prep_time:"Vis forberedelsestid",show_cooking_time:"Vis tilberedningstid",show_total_time:"Vis total tid",layout_recipes_horizontal:"vandret",layout_recipes_vertical:"lodret",recipes_layout:"Måltidsvisning",day_offset:"dag"},Re={hour:"time",hours:"timer",minute:"minut",minutes:"minutter",hour_short:"t",minute_short:"min"},De={cards:ke,common:Ee,dialog:Ae,info:Me,error:Se,editor:Ce,time:Re},Te={name_mealplan:"Mealie Speiseplan",description_mealplan:"Heutige Mahlzeiten anzeigen",name_recipes:"Mealie Rezepte",description_recipes:"Zeigen Sie Ihre Rezepte von der Mealie-Instanz an",view_recipe:"Rezept anzeigen",delete_mealplan:"Aus dem Plan löschen"},je={no_recipe:"Kein Rezept",no_mealplan:"Keine Mahlzeit",today:"Heute",breakfast:"Frühstück",lunch:"Mittagessen",dinner:"Abendessen",side:"Beilage",dessert:"Dessert",drink:"Getränk",snack:"Snack"},Pe={add_to_mealplan:"Zum Speiseplan hinzufügen",add_recipe_to_mealplan:"zum Speiseplan hinzufügen",select_date:"Datum auswählen",select_meal_type:"Mahlzeittyp",recipe_added_success:"Rezept zum Plan hinzugefügt",cancel:"Abbrechen",close:"Schließen",add:"Hinzufügen",mealplan_deleted_success:"Mahlzeit aus dem Plan entfernt",confirm_delete_title:"Diese Mahlzeit entfernen?",confirm_delete_message:"Diese Aktion kann nicht rückgängig gemacht werden.",confirm:"Bestätigen",ingredients:"Zutaten",instructions:"Anleitung",times:"Zeiten",prep_time:"Vorbereitung",cooking_time:"Kochen",total_time:"Gesamt"},Ie={number_of_days:"So konfigurieren Sie die Kalenderanzeige:\n• 0 = heute\n• 1 = morgen\n• 2 = übermorgen\n• usw...",no_url:"Konfigurieren Sie die Mealie-URL, um Bilder und Rezeptlinks zu aktivieren."},Ue={invalid_config:"Ungültige Konfiguration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fehler beim Laden der Konfiguration",error_loading:"Fehler beim Laden der Daten",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fehler beim Löschen der Mahlzeit"},Le={integration:"Mealie integration",entry_types:"Anzuzeigende Mahlzeittypen",loading:"Wird geladen...",mealie_url:"Mealie URL",number_of_recipes:"Anzahl der anzuzeigenden Rezepte",number_of_recipes_helper:"Anzahl der anzuzeigenden Rezepte (Standard 10).",settings_recipes_card:"Anzeigekonfiguration",settings_title_layout:"Layout",show_image:"Bild anzeigen",show_rating:"Bewertung anzeigen",show_servings:"Portionen & Menge",show_description:"Beschreibung anzeigen",show_prep_time:"Vorbereitungszeit anzeigen",show_cooking_time:"Kochzeit anzeigen",show_total_time:"Gesamtzeit anzeigen",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertikal",recipes_layout:"Mahlzeitenanzeige",day_offset:"Tag"},Oe={hour:"Stunde",hours:"Stunden",minute:"Minute",minutes:"Minuten",hour_short:"Std",minute_short:"Min"},Ne={cards:Te,common:je,dialog:Pe,info:Ie,error:Ue,editor:Le,time:Oe},Be={name_mealplan:"Mealie Meal Plan",description_mealplan:"Display today's meals",name_recipes:"Mealie Recipes",description_recipes:"Display your recipes from Mealie instance",view_recipe:"View recipe",delete_mealplan:"Delete from plan"},He={no_recipe:"No recipe",no_mealplan:"No meal",today:"Today",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",side:"Side",dessert:"Dessert",drink:"Drink",snack:"Snack"},Ve={add_to_mealplan:"Add to meal plan",add_recipe_to_mealplan:"Add to meal plan",select_date:"Select a date",select_meal_type:"Meal type",recipe_added_success:"Recipe added to plan",cancel:"Cancel",close:"Close",add:"Add",mealplan_deleted_success:"Meal removed from plan",confirm_delete_title:"Remove this meal?",confirm_delete_message:"This action cannot be undone.",confirm:"Confirm",ingredients:"Ingredients",instructions:"Instructions",times:"Times",prep_time:"Preparation",cooking_time:"Cooking",total_time:"Total"},Fe={number_of_days:"To configure the calendar display:\n• 0 = today\n• 1 = tomorrow\n• 2 = day after tomorrow\n• etc...",no_url:"Configure Mealie URL to enable images and recipe links."},We={invalid_config:"Invalid configuration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Error loading configuration",error_loading:"Error loading data",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Error deleting meal"},Ke={integration:"Mealie integration",entry_types:"Meal types to display",loading:"Loading...",mealie_url:"Mealie URL",number_of_recipes:"Number of recipes to display",number_of_recipes_helper:"Number of recipes to display (default 10).",settings_recipes_card:"Display configuration",settings_title_layout:"Layout",show_image:"Show image",show_rating:"Show rating",show_servings:"Serving & Quantity",show_description:"Show description",show_prep_time:"Show preparation time",show_cooking_time:"Show cooking time",show_total_time:"Show total time",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Meals display",day_offset:"day"},qe={hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},Ge={cards:Be,common:He,dialog:Ve,info:Fe,error:We,editor:Ke,time:qe},Ze={name_mealplan:"Plan de Comidas Mealie",description_mealplan:"Mostrar las comidas del día",name_recipes:"Recetas Mealie",description_recipes:"Mostrar tus recetas desde la instancia Mealie",view_recipe:"Ver receta",delete_mealplan:"Eliminar del plan"},Qe={no_recipe:"Ninguna receta",no_mealplan:"Ninguna comida",today:"Hoy",breakfast:"Desayuno",lunch:"Almuerzo",dinner:"Cena",side:"Acompañamiento",dessert:"Postre",drink:"Bebida",snack:"Merienda"},Je={add_to_mealplan:"Añadir al plan de comidas",add_recipe_to_mealplan:"Añadir al plan de comidas",select_date:"Seleccionar una fecha",select_meal_type:"Tipo de comida",recipe_added_success:"Receta añadida al plan",cancel:"Cancelar",close:"Cerrar",add:"Añadir",mealplan_deleted_success:"Comida eliminada del plan",confirm_delete_title:"¿Eliminar esta comida?",confirm_delete_message:"Esta acción no se puede deshacer.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instrucciones",times:"Tiempos",prep_time:"Preparación",cooking_time:"Cocción",total_time:"Total"},Ye={number_of_days:"Para configurar la visualización del calendario:\n• 0 = hoy\n• 1 = mañana\n• 2 = pasado mañana\n• etc...",no_url:"Configure la URL de Mealie para activar las imágenes y los enlaces a las recetas."},Xe={invalid_config:"Configuración inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Error al cargar la configuración",error_loading:"Error al cargar datos",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Error al eliminar la comida"},et={integration:"Mealie integration",entry_types:"Tipos de comida a mostrar",loading:"Cargando...",mealie_url:"URL de Mealie",number_of_recipes:"Número de recetas a mostrar",number_of_recipes_helper:"Número de recetas a mostrar (predeterminado 10).",settings_recipes_card:"Configuración de visualización",settings_title_layout:"Diseño",show_image:"Mostrar imagen",show_rating:"Mostrar valoración",show_servings:"Porciones y Cantidad",show_description:"Mostrar descripción",show_prep_time:"Mostrar tiempo de preparación",show_cooking_time:"Mostrar tiempo de cocción",show_total_time:"Mostrar tiempo total",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Visualización de comidas",day_offset:"día"},tt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},it={cards:Ze,common:Qe,dialog:Je,info:Ye,error:Xe,editor:et,time:tt},at={name_mealplan:"Repas Mealie",description_mealplan:"Afficher les repas du jour",name_recipes:"Recettes Mealie",description_recipes:"Afficher vos recettes depuis l'instance Mealie",view_recipe:"Voir la recette",delete_mealplan:"Supprimer du planning"},rt={no_recipe:"Aucune recette",no_mealplan:"Aucun repas",today:"Aujourd'hui",breakfast:"Petit-déjeuner",lunch:"Déjeuner",dinner:"Dîner",side:"Accompagnement",dessert:"Dessert",drink:"Boisson",snack:"Collation"},nt={add_to_mealplan:"Ajouter la recette au planning",add_recipe_to_mealplan:"Ajouter au planning",select_date:"Sélectionner une date",select_meal_type:"Type de repas",recipe_added_success:"Recette ajoutée au planning",cancel:"Annuler",close:"Fermer",add:"Ajouter",mealplan_deleted_success:"Repas supprimé du planning",confirm_delete_title:"Supprimer ce repas ?",confirm_delete_message:"Cette action est irréversible.",confirm:"Confirmer",ingredients:"Ingrédients",instructions:"Instructions",times:"Temps",prep_time:"Préparation",cooking_time:"Cuisson",total_time:"Total"},ot={number_of_days:"Pour configurer l'affichage du calendrier :\n• 0 = aujourd'hui\n• 1 = demain\n• 2 = après-demain\n• etc...",no_url:"Configurez l'URL Mealie pour activer les images et les liens vers les recettes."},st={invalid_config:"Configuration invalide",no_integration:"Sélectionnez une intégration Mealie",missing_config:"Erreur de chargement de la configuration",error_loading:"Erreur de chargement des données",error_adding_recipe:"Erreur lors de l'ajout de la recette",invalid_date:"Date invalide",invalid_entry_type:"Type de repas invalide",error_deleting_mealplan:"Erreur lors de la suppression du repas"},lt={integration:"Intégration Mealie",entry_types:"Types de repas à afficher",loading:"Chargement...",mealie_url:"URL Mealie",number_of_recipes:"Nombre de recettes à afficher",number_of_recipes_helper:"Nombre de recettes à afficher (par défaut 10).",settings_recipes_card:"Configuration de l'affichage",settings_title_layout:"Disposition",show_image:"Image",show_rating:"Note",show_servings:"Portion & Quantité",show_description:"Description",show_prep_time:"Temps de préparation",show_cooking_time:"Temps de cuisson",show_total_time:"Temps total",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Affichage des repas",day_offset:"jour"},dt={hour:"heure",hours:"heures",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},ct={cards:at,common:rt,dialog:nt,info:ot,error:st,editor:lt,time:dt},pt={name_mealplan:"Piano Pasti Mealie",description_mealplan:"Visualizza i pasti del giorno",name_recipes:"Ricette Mealie",description_recipes:"Visualizza le tue ricette dall'istanza Mealie",view_recipe:"Vedi ricetta",delete_mealplan:"Elimina dal piano"},ht={no_recipe:"Nessuna ricetta",no_mealplan:"Nessun pasto",today:"Oggi",breakfast:"Colazione",lunch:"Pranzo",dinner:"Cena",side:"Contorno",dessert:"Dolce",drink:"Bevanda",snack:"Spuntino"},_t={add_to_mealplan:"Aggiungi al piano pasti",add_recipe_to_mealplan:"Aggiungi al piano pasti",select_date:"Seleziona una data",select_meal_type:"Tipo di pasto",recipe_added_success:"Ricetta aggiunta al piano",cancel:"Annulla",close:"Chiudi",add:"Aggiungi",mealplan_deleted_success:"Pasto rimosso dal piano",confirm_delete_title:"Rimuovere questo pasto?",confirm_delete_message:"Questa azione non può essere annullata.",confirm:"Conferma",ingredients:"Ingredienti",instructions:"Istruzioni",times:"Tempi",prep_time:"Preparazione",cooking_time:"Cottura",total_time:"Totale"},mt={number_of_days:"Per configurare la visualizzazione del calendario:\n• 0 = oggi\n• 1 = domani\n• 2 = dopodomani\n• ecc...",no_url:"Configura l'URL Mealie per attivare le immagini e i link alle ricette."},ut={invalid_config:"Configurazione non valida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Errore di caricamento della configurazione",error_loading:"Errore di caricamento dei dati",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Errore durante l'eliminazione del pasto"},gt={integration:"Mealie integration",entry_types:"Tipi di pasto da visualizzare",loading:"Caricamento...",mealie_url:"URL Mealie",number_of_recipes:"Numero di ricette da visualizzare",number_of_recipes_helper:"Numero di ricette da visualizzare (predefinito 10).",settings_recipes_card:"Configurazione della visualizzazione",settings_title_layout:"Layout",show_image:"Mostra immagine",show_rating:"Mostra valutazione",show_servings:"Porzioni e Quantità",show_description:"Mostra descrizione",show_prep_time:"Mostra tempo di preparazione",show_cooking_time:"Mostra tempo di cottura",show_total_time:"Mostra tempo totale",layout_recipes_horizontal:"orizzontale",layout_recipes_vertical:"verticale",recipes_layout:"Visualizzazione pasti",day_offset:"giorno"},ft={hour:"ora",hours:"ore",minute:"minuto",minutes:"minuti",hour_short:"h",minute_short:"min"},yt={cards:pt,common:ht,dialog:_t,info:mt,error:ut,editor:gt,time:ft},vt={name_mealplan:"Mealie Maaltijdplan",description_mealplan:"Toon de maaltijden van vandaag",name_recipes:"Mealie Recepten",description_recipes:"Toon je recepten van de Mealie-instantie",view_recipe:"Recept bekijken",delete_mealplan:"Verwijder uit plan"},bt={no_recipe:"Geen recept",no_mealplan:"Geen maaltijd",today:"Vandaag",breakfast:"Ontbijt",lunch:"Lunch",dinner:"Diner",side:"Bijgerecht",dessert:"Dessert",drink:"Drank",snack:"Snack"},$t={add_to_mealplan:"Toevoegen aan maaltijdplan",add_recipe_to_mealplan:"toevoegen aan maaltijdplan",select_date:"Selecteer een datum",select_meal_type:"Maaltijdtype",recipe_added_success:"Recept toegevoegd aan plan",cancel:"Annuleren",close:"Sluiten",add:"Toevoegen",mealplan_deleted_success:"Maaltijd verwijderd uit plan",confirm_delete_title:"Deze maaltijd verwijderen?",confirm_delete_message:"Deze actie kan niet ongedaan worden gemaakt.",confirm:"Bevestigen",ingredients:"Ingrediënten",instructions:"Instructies",times:"Tijden",prep_time:"Voorbereiding",cooking_time:"Koken",total_time:"Totaal"},wt={number_of_days:"Om de kalenderweergave te configureren:\n• 0 = vandaag\n• 1 = morgen\n• 2 = overmorgen\n• enz...",no_url:"Configureer Mealie URL om afbeeldingen en receptlinks in te schakelen."},zt={invalid_config:"Ongeldige configuratie",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fout bij laden van configuratie",error_loading:"Fout bij laden van gegevens",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fout bij verwijderen van maaltijd"},xt={integration:"Mealie integration",entry_types:"Maaltijdtypen om weer te geven",loading:"Laden...",mealie_url:"Mealie URL",number_of_recipes:"Aantal weer te geven recepten",number_of_recipes_helper:"Aantal weer te geven recepten (standaard 10).",settings_recipes_card:"Weergaveconfiguratie",settings_title_layout:"Indeling",show_image:"Afbeelding weergeven",show_rating:"Beoordeling weergeven",show_servings:"Porties & Hoeveelheid",show_description:"Beschrijving weergeven",show_prep_time:"Voorbereidingstijd weergeven",show_cooking_time:"Kooktijd weergeven",show_total_time:"Totale tijd weergeven",layout_recipes_horizontal:"horizontaal",layout_recipes_vertical:"verticaal",recipes_layout:"Maaltijdenweergave",day_offset:"dag"},kt={hour:"uur",hours:"uur",minute:"minuut",minutes:"minuten",hour_short:"u",minute_short:"min"},Et={cards:vt,common:bt,dialog:$t,info:wt,error:zt,editor:xt,time:kt},At={name_mealplan:"Plan Posiłków Mealie",description_mealplan:"Wyświetl dzisiejsze posiłki",name_recipes:"Przepisy Mealie",description_recipes:"Wyświetl swoje przepisy z instancji Mealie",view_recipe:"Wyświetl przepis",delete_mealplan:"Usuń z planu"},Mt={no_recipe:"Brak przepisu",no_mealplan:"Brak posiłku",today:"Dzisiaj",breakfast:"Śniadanie",lunch:"Obiad",dinner:"Kolacja",side:"Dodatek",dessert:"Deser",drink:"Napój",snack:"Przekąska"},St={add_to_mealplan:"Dodaj do planu posiłków",add_recipe_to_mealplan:"Dodaj do planu posiłków",select_date:"Wybierz datę",select_meal_type:"Typ posiłku",recipe_added_success:"Przepis dodany do planu",cancel:"Anuluj",close:"Zamknij",add:"Dodaj",mealplan_deleted_success:"Posiłek usunięty z planu",confirm_delete_title:"Usunąć ten posiłek?",confirm_delete_message:"Tej akcji nie można cofnąć.",confirm:"Potwierdź",ingredients:"Składniki",instructions:"Instrukcje",times:"Czasy",prep_time:"Przygotowanie",cooking_time:"Gotowanie",total_time:"Łącznie"},Ct={number_of_days:"Aby skonfigurować wyświetlanie kalendarza:\n• 0 = dzisiaj\n• 1 = jutro\n• 2 = pojutrze\n• itd...",no_url:"Skonfiguruj adres URL Mealie, aby włączyć obrazy i linki do przepisów."},Rt={invalid_config:"Nieprawidłowa konfiguracja",no_integration:"Select a Mealie integration in the card settings",missing_config:"Błąd ładowania konfiguracji",error_loading:"Błąd ładowania danych",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Błąd podczas usuwania posiłku"},Dt={integration:"Mealie integration",entry_types:"Typy posiłków do wyświetlenia",loading:"Ładowanie...",mealie_url:"URL Mealie",number_of_recipes:"Liczba przepisów do wyświetlenia",number_of_recipes_helper:"Liczba przepisów do wyświetlenia (domyślnie 10).",settings_recipes_card:"Konfiguracja wyświetlania",settings_title_layout:"Układ",show_image:"Pokaż obraz",show_rating:"Pokaż ocenę",show_servings:"Porcje i ilość",show_description:"Pokaż opis",show_prep_time:"Pokaż czas przygotowania",show_cooking_time:"Pokaż czas gotowania",show_total_time:"Pokaż całkowity czas",layout_recipes_horizontal:"poziomy",layout_recipes_vertical:"pionowy",recipes_layout:"Wyświetlanie posiłków",day_offset:"dzień"},Tt={hour:"godzina",hours:"godziny",minute:"minuta",minutes:"minuty",hour_short:"godz",minute_short:"min"},jt={cards:At,common:Mt,dialog:St,info:Ct,error:Rt,editor:Dt,time:Tt},Pt={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Exibir as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Exibir suas receitas da instância Mealie",view_recipe:"Ver receita",delete_mealplan:"Remover do plano"},It={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Café da manhã",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche"},Ut={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",close:"Fechar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm_delete_message:"Esta ação não pode ser desfeita.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparo",cooking_time:"Cozimento",total_time:"Total"},Lt={number_of_days:"Para configurar a exibição do calendário:\n• 0 = hoje\n• 1 = amanhã\n• 2 = depois de amanhã\n• etc...",no_url:"Configure a URL Mealie para ativar imagens e links para receitas."},Ot={invalid_config:"Configuração inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Erro ao remover refeição"},Nt={integration:"Mealie integration",entry_types:"Tipos de refeição para exibir",loading:"Carregando...",mealie_url:"URL do Mealie",number_of_recipes:"Número de receitas para exibir",number_of_recipes_helper:"Número de receitas para exibir (padrão 10).",settings_recipes_card:"Configuração de exibição",settings_title_layout:"Layout",show_image:"Exibir imagem",show_rating:"Exibir avaliação",show_servings:"Porções e Quantidade",show_description:"Exibir descrição",show_prep_time:"Exibir tempo de preparo",show_cooking_time:"Exibir tempo de cozimento",show_total_time:"Exibir tempo total",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Exibição de refeições",day_offset:"dia"},Bt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},Ht={cards:Pt,common:It,dialog:Ut,info:Lt,error:Ot,editor:Nt,time:Bt},Vt={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Mostrar as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Mostrar as suas receitas da instância Mealie",view_recipe:"Ver receita",delete_mealplan:"Remover do plano"},Ft={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Pequeno-almoço",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche"},Wt={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",close:"Fechar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm_delete_message:"Esta ação não pode ser desfeita.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparação",cooking_time:"Cozimento",total_time:"Total"},Kt={number_of_days:"Para configurar a exibição do calendário:\n• 0 = hoje\n• 1 = amanhã\n• 2 = depois de amanhã\n• etc...",no_url:"Configure o URL Mealie para ativar imagens e links para receitas."},qt={invalid_config:"Configuração inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Erro ao remover refeição"},Gt={integration:"Mealie integration",entry_types:"Tipos de refeição a exibir",loading:"A carregar...",mealie_url:"URL do Mealie",number_of_recipes:"Número de receitas a exibir",number_of_recipes_helper:"Número de receitas a exibir (padrão 10).",settings_recipes_card:"Configuração de exibição",settings_title_layout:"Disposição",show_image:"Mostrar imagem",show_rating:"Mostrar avaliação",show_servings:"Porções e quantidade",show_description:"Mostrar descrição",show_prep_time:"Mostrar tempo de preparação",show_cooking_time:"Mostrar tempo de cozedura",show_total_time:"Mostrar tempo total",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Exibição de refeições",day_offset:"dia"},Zt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},Qt={cards:Vt,common:Ft,dialog:Wt,info:Kt,error:qt,editor:Gt,time:Zt},Jt={name_mealplan:"Plan de Mese Mealie",description_mealplan:"Afișează mesele zilei",name_recipes:"Rețete Mealie",description_recipes:"Afișează rețetele tale din instanța Mealie",view_recipe:"Vezi rețeta",delete_mealplan:"Șterge din plan"},Yt={no_recipe:"Nicio rețetă",no_mealplan:"Nicio masă",today:"Astăzi",breakfast:"Micul dejun",lunch:"Prânz",dinner:"Cină",side:"Garnitură",dessert:"Desert",drink:"Băutură",snack:"Gustare"},Xt={add_to_mealplan:"Adaugă la planul de mese",add_recipe_to_mealplan:"Adaugă la planul de mese",select_date:"Selectează o dată",select_meal_type:"Tipul mesei",recipe_added_success:"Rețetă adăugată la plan",cancel:"Anulează",close:"Închide",add:"Adaugă",mealplan_deleted_success:"Masă ștearsă din plan",confirm_delete_title:"Ștergeți această masă?",confirm_delete_message:"Această acțiune nu poate fi anulată.",confirm:"Confirmă",ingredients:"Ingrediente",instructions:"Instrucțiuni",times:"Timpi",prep_time:"Pregătire",cooking_time:"Gătit",total_time:"Total"},ei={number_of_days:"Pentru a configura afișarea calendarului:\n• 0 = astăzi\n• 1 = mâine\n• 2 = poimâine\n• etc...",no_url:"Configurează URL-ul Mealie pentru a activa imaginile și linkurile către rețete."},ti={invalid_config:"Configurare invalidă",no_integration:"Select a Mealie integration in the card settings",missing_config:"Eroare la încărcarea configurației",error_loading:"Eroare la încărcarea datelor",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Eroare la ștergerea mesei"},ii={integration:"Mealie integration",entry_types:"Tipuri de mese de afișat",loading:"Se încarcă...",mealie_url:"URL Mealie",number_of_recipes:"Număr de rețete de afișat",number_of_recipes_helper:"Număr de rețete de afișat (implicit 10).",settings_recipes_card:"Configurare afișare",settings_title_layout:"Aspect",show_image:"Afișează imaginea",show_rating:"Afișează evaluarea",show_servings:"Porții și Cantitate",show_description:"Afișează descrierea",show_prep_time:"Afișează timpul de preparare",show_cooking_time:"Afișează timpul de gătit",show_total_time:"Afișează timpul total",layout_recipes_horizontal:"orizontal",layout_recipes_vertical:"vertical",recipes_layout:"Afișare mese",day_offset:"zi"},ai={hour:"oră",hours:"ore",minute:"minut",minutes:"minute",hour_short:"h",minute_short:"min"},ri={cards:Jt,common:Yt,dialog:Xt,info:ei,error:ti,editor:ii,time:ai};const ni={da:Object.freeze({__proto__:null,cards:ke,common:Ee,default:De,dialog:Ae,editor:Ce,error:Se,info:Me,time:Re}),de:Object.freeze({__proto__:null,cards:Te,common:je,default:Ne,dialog:Pe,editor:Le,error:Ue,info:Ie,time:Oe}),en:Object.freeze({__proto__:null,cards:Be,common:He,default:Ge,dialog:Ve,editor:Ke,error:We,info:Fe,time:qe}),es:Object.freeze({__proto__:null,cards:Ze,common:Qe,default:it,dialog:Je,editor:et,error:Xe,info:Ye,time:tt}),fr:Object.freeze({__proto__:null,cards:at,common:rt,default:ct,dialog:nt,editor:lt,error:st,info:ot,time:dt}),it:Object.freeze({__proto__:null,cards:pt,common:ht,default:yt,dialog:_t,editor:gt,error:ut,info:mt,time:ft}),nl:Object.freeze({__proto__:null,cards:vt,common:bt,default:Et,dialog:$t,editor:xt,error:zt,info:wt,time:kt}),pl:Object.freeze({__proto__:null,cards:At,common:Mt,default:jt,dialog:St,editor:Dt,error:Rt,info:Ct,time:Tt}),"pt-BR":Object.freeze({__proto__:null,cards:Pt,common:It,default:Ht,dialog:Ut,editor:Nt,error:Ot,info:Lt,time:Bt}),pt:Object.freeze({__proto__:null,cards:Vt,common:Ft,default:Qt,dialog:Wt,editor:Gt,error:qt,info:Kt,time:Zt}),ro:Object.freeze({__proto__:null,cards:Jt,common:Yt,default:ri,dialog:Xt,editor:ii,error:ti,info:ei,time:ai})};function oi(e,t){try{return e.split(".").reduce((e,t)=>e[t],ni[t])}catch{return}}function si(e,t,i,a){const r=oi(t,e)??oi(t,"en")??t;return i&&a?r.replace(i,a):r}const li={breakfast:1,lunch:2,dinner:3,side:4,dessert:5,drink:6,snack:7};let di=null,ci=null,pi=null;function hi(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function _i(e,t){const[i,a,r]=e.split("-").map(Number),n=new Date(i,a-1,r),o=new Date;return o.setHours(0,0,0,0),n.getTime()===o.getTime()?si(t.locale?.language??"en","common.today"):function(e,t){return ge(t).format(e)}(n,t.locale)}function mi(e,t="en"){if(!e)return"";const i=e.toLowerCase().trim(),{hourPattern:a,minutePattern:r}=function(e){if(di===e&&ci&&pi)return{hourPattern:ci,minutePattern:pi};const t=[si(e,"time.hour"),si(e,"time.hours")].filter(Boolean),i=[si(e,"time.minute"),si(e,"time.minutes")].filter(Boolean);return di=e,ci=new RegExp(`(\\d+)\\s*(?:${t.join("|")})`,"i"),pi=new RegExp(`(\\d+)\\s*(?:${i.join("|")})`,"i"),{hourPattern:ci,minutePattern:pi}}(t),n=i.match(a),o=i.match(r);if(!n&&!o)return i.replace(/\s+/g," ").trim();const s=[];return n&&s.push(`${n[1]} ${si(t,"time.hour_short")}`),o&&s.push(`${o[1]} ${si(t,"time.minute_short")}`),s.join(" ")}function ui(e,t="en"){if(!e)return"";return{breakfast:si(t,"common.breakfast"),lunch:si(t,"common.lunch"),dinner:si(t,"common.dinner"),side:si(t,"common.side"),dessert:si(t,"common.dessert"),drink:si(t,"common.drink"),snack:si(t,"common.snack")}[e]||e.toUpperCase()}function gi(e,t){const i=t instanceof Error?t.message:si("en","error.error_loading");return new Error(`${si("en",e)}: ${i}`)}async function fi(e){const t=await e.callWS({type:"config_entries/get",domain:ve}),i=t[0]?.entry_id;if(!i)throw new Error(si("en","error.missing_config"));return i}async function yi(e,t,i,a){const r=a||await fi(e),n=await e.callService(ve,t,{config_entry_id:r,...i},void 0,void 0,!0);return n?.response??null}async function vi(e,t={}){try{const i=await yi(e,"get_recipes",{result_limit:t.resultLimit||10},t.configEntryId);return i?.recipes?.items||[]}catch(e){throw gi("error.error_loading",e)}}async function bi(e,t={}){try{const{startDate:i,endDate:a}=function(e,t,i){const a=hi(new Date);if(void 0!==e){const t=new Date;t.setDate(t.getDate()+e);const i=hi(t);return e>=0?{startDate:a,endDate:i}:{startDate:i,endDate:a}}return{startDate:t??a,endDate:i??t??a}}(t.days,t.startDate,t.endDate),r=await yi(e,"get_mealplan",{start_date:i,end_date:a},t.configEntryId);return(r?.mealplan||[]).sort((e,t)=>(li[e.entry_type]||999)-(li[t.entry_type]||999))}catch(e){throw gi("error.error_loading",e)}}function $i(e){const t=e.currentTarget;t&&t.classList.toggle("portrait",t.naturalHeight>t.naturalWidth)}const wi=o`
  ha-card {
    background: inherit;
  }

  a {
    text-decoration: none;
  }

  .card-content {
    display: grid;
    padding: var(--ha-space-2);
    gap: 10px;
  }

  .date-label {
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-heading);
    padding: 8px 0px 0px 8px;
    color: var(--ha-color-text-secondary);
    border-bottom: 1px solid var(--ha-button-neutral-light-color);
  }

  .recipes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 10px;
    padding: 4px;
  }

  .recipes-horizontal {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 10px;
    padding: 4px;
  }

  .recipes-vertical {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .recipe-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
    max-width: 100%;
    z-index: 0;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-name {
    margin-top: 45px;
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
    border-radius: 0;
    overflow: hidden;
    z-index: 0;
  }

  .recipe-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
    z-index: 0;
  }

  .recipe-type {
    background: var(--primary-color);
    color: var(--text-primary-color);
    padding: 0 5px;
    border-radius: 4px;
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-bold);
    text-transform: uppercase;
    display: inline-block;
    position: absolute;
    z-index: 10;
    top: 8px;
    left: 8px;
  }

  .recipe-name {
    margin: 3px 3px 0px 10px;
    color: var(--ha-color-text-link);
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-body);
    line-height: 1.8;
  }

  .recipe-description {
    text-align: center;
    margin: 10px;
    font-size: 13px;
    color: var(--ha-color-text-secondary);
    line-height: 1.4;
  }

  .star-rating {
    display: inline-flex;
    align-items: center;
    align-self: center;
    gap: 2px;
  }

  .star-rating ha-icon {
    --mdc-icon-size: 16px;
    color: var(--warning-color, #ffbc04ff);
  }

  .recipe-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 5px 0;
  }

  .recipe-info {
    display: flex;
    flex-direction: column;
  }

  .time-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid var(--ha-button-neutral-light-color);
    padding: 4px 5px;
    border-radius: 6px;
    transition: 0.2s;
  }

  .time-value {
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .servings-badge {
    display: flex;
    align-items: center;
    align-self: center;
  }

  .servings-value {
    font-size: 12px;
    font-weight: 500;
    margin-top: 2px;
    margin-left: 2px;
    color: var(--primary-text-color);
  }

  .card-buttons {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 10;
    pointer-events: auto;
  }

  .add-to-mealplan-button,
  .view-recipe-button {
    background: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }

  .delete-mealplan-button {
    background: var(--error-color, #db4437);
    color: var(--text-primary-color);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }

  .add-to-mealplan-button:hover,
  .view-recipe-button:hover,
  .delete-mealplan-button:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .delete-mealplan-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .add-to-mealplan-button ha-icon,
  .view-recipe-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .time-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 2px 0;
    border-bottom: 1px solid var(--divider-color, var(--ha-button-neutral-light-color));
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
    font-size: var(--ha-font-size-m);
    color: var(--ha-color-text-secondary);
  }

  .time-row-value {
    font-size: var(--ha-font-size-m);
    font-weight: var(--ha-font-weight-body);
    color: var(--ha-color-text-secondary);
  }

  [slot="headerTitle"] {
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    font-size: 1.15rem;
}
  }

  .recipe-name-highlight {
    padding-top: 3px;
    color: var(--secondary-text-color);
    font-weight: var(--ha-font-weight-heading);
    display: block;
    font-size: 1.25rem;
  }

  .dialog-body {
    display: flex;
    flex-direction: column;
  }

  .dialog-body ha-selector {
    width: 100%;
    max-width: 100%;
  }

  .dial-recipe-name {
    margin: 3px 3px 0px 35px;
    color: var(--ha-color-text-link);
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-body);
    line-height: 1.8;
  }

  .dial-recipe-date {
    margin: 6px 3px 0px 35px;
    color: var(--ha-color-text);
    font-weight: var(--ha-font-weight-body);
  }

  details {
    border: 1px solid var(--divider-color, var(--ha-button-neutral-light-color));
    border-radius: 8px;
    overflow: hidden;
    margin: 5px 0;
  }

  .details {
    border: 0px;
    padding: 0 10px;
  }

  .details-content {
    padding: 5px 10px;
  }

  .details-content ul,
  .details-content ol {
    margin: 0;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .details-content li {
    font-size: 13px;
    color: var(--primary-text-color);
    line-height: 1.4;
  }

  .detail-image {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin: 0px auto 20px;
    background-color: var(--secondary-background-color);
    transition: height 0.3s ease;
  }

  summary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--secondary-background-color);
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--primary-text-color);
    list-style: none;
    user-select: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "";
    margin-left: auto;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--primary-text-color);
    transition: transform 0.2s;
  }

  details[open] summary::after {
    transform: rotate(180deg);
  }

  summary ha-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
  }

  .loading {
    text-align: center;
    padding: 24px;
    color: var(--secondary-text-color);
  }
`;function zi(e,t){if(!e.image)return null;if(e.image.startsWith("/")||e.image.startsWith("http"))return e.image;if(!t)return null;return`${t.replace(/\/$/,"")}/api/media/recipes/${e.recipe_id||e.slug}/images/original.webp`}class xi extends se{constructor(){super(...arguments),this.error=null,this._loading=!1,this._initialized=!1}localize(e,t,i){return si(this.hass?.locale?.language??"en",e,t,i)}willUpdate(e){super.willUpdate(e),e.has("hass")&&this.hass&&function(e,t,i,a){void 0===a&&(a=!1),e._themes||(e._themes={});var r=t.default_theme;("default"===i||i&&t.themes[i])&&(r=i);var n=fe({},e._themes);if("default"!==r){var o=t.themes[r];Object.keys(o).forEach(function(t){var i="--"+t;e._themes[i]="",n[i]=o[t]})}if(e.updateStyles?e.updateStyles(n):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,n),a){var s=document.querySelector("meta[name=theme-color]");if(s){s.hasAttribute("default-content")||s.setAttribute("default-content",s.getAttribute("content"));var l=n["--primary-color"]||s.getAttribute("default-content");s.setAttribute("content",l)}}}(this,this.hass.themes,this.hass.selectedTheme),!this.hass||this._initialized||this._loading||this.loadData()}renderLoading(){return V`
      <ha-card>
        <div class="card-content">
          <div class="loading">${this.localize("editor.loading")}</div>
        </div>
      </ha-card>
    `}renderError(){return V`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="error">${this.error}</ha-alert>
        </div>
      </ha-card>
    `}renderEmptyState(e){return V`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="info">${e}</ha-alert>
        </div>
      </ha-card>
    `}renderRecipeImage(e,t){if(!t)return W;const i=zi(e,this.config?.url);if(!i)return W;const a=i.startsWith("/")?`${this.hass.auth.data.hassUrl}${i}`:i;return V`
      <div class="recipe-card-image">
        <img src="${a}" alt="${e.name}" class="recipe-image" loading="lazy" @error=${this.handleImageError} @load=${$i} />
      </div>
    `}renderRecipeName(e){return V`<h4 class="recipe-name">${e.name??e.title}</h4>`}renderRecipeDescription(e,t){return t&&e?V`<div class="recipe-description">${e}</div>`:W}renderRecipeTimes(e,t,i,a){const r=this.hass?.locale?.language,n=[t&&e.prep_time?{icon:"mdi:knife",label:this.localize("dialog.prep_time"),value:mi(e.prep_time,r)}:null,i&&e.perform_time?{icon:"mdi:pot-steam",label:this.localize("dialog.cooking_time"),value:mi(e.perform_time,r)}:null,a&&e.total_time?{icon:"mdi:clock-time-three-outline",label:this.localize("dialog.total_time"),value:mi(e.total_time,r)}:null].filter(Boolean);return V`${n.length?V`<details class="details" open>
          <summary style="display:none"></summary>
          ${n.map(e=>V`
              <div class="time-row">
                <ha-icon class="time-row-icon" icon=${e.icon}></ha-icon>
                <span class="time-row-label">${e.label}</span>
                <span class="time-row-value">${e.value}</span>
              </div>
            `)}
        </details>`:W}`}renderTimeBadge(e,t){return V`
      <span class="time-badge">
        <ha-icon icon="${e}"></ha-icon>
        <span class="time-value">${t}</span>
      </span>
    `}renderStarRating(e,t){return e&&t&&e?V`
          <span class="star-rating">
            ${Array.from({length:5},(e,t)=>t+1).map(t=>V`<ha-icon icon=${e>=t?"mdi:star":e>=t-.5?"mdi:star-half-full":"mdi:star-outline"}></ha-icon>`)}
          </span>
        `:W}renderServings(e,t){return e&&t&&e?V`<span class="servings-badge">
          <ha-icon icon="mdi:circle-slice-1"></ha-icon>
          <span class="servings-value">${e}</span>
        </span>`:W}handleError(e){this.error=e instanceof Error?e.message:this.localize("error.error_loading")}renderDetailsSection(e,t,i){return V`
      <details open>
        <summary><ha-icon icon=${e}></ha-icon>${t}</summary>
        <div class="details-content">${i}</div>
      </details>
    `}handleImageError(e){const t=e.target.parentElement;t&&t.remove()}}xi.styles=wi,e([he({attribute:!1})],xi.prototype,"hass",void 0),e([_e()],xi.prototype,"error",void 0),e([_e()],xi.prototype,"_loading",void 0),e([_e()],xi.prototype,"_initialized",void 0);const ki=["breakfast","lunch","dinner","side","dessert","drink","snack"];function Ei(e,t,i,a,r=!1){return V`
    <ha-formfield alignEnd spaceBetween .label=${i} .disabled=${r}>
      <ha-switch
        .checked=${t}
        .disabled=${r}
        @change=${e=>a(e.target.checked)}
      ></ha-switch>
    </ha-formfield>
  `}function Ai(e,t,i,a,r,n){return V`
    <ha-selector
      .hass=${e}
      .selector=${{number:{min:a,max:r,mode:"box",step:1}}}
      .value=${t??a}
      .label=${i}
      @value-changed=${e=>n(e.detail.value)}
    ></ha-selector>
  `}const Mi=o`
  ha-expansion-panel + ha-expansion-panel,
  ha-form + ha-expansion-panel,
  ha-expansion-panel + ha-form {
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  ha-formfield {
    display: block;
    width: 100%;
    min-height: 40px;
  }
  .settings-fields {
    padding-bottom: 8px;
  }
  .settings-fields ha-selector:first-child {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .settings-fields ha-formfield:first-child {
    padding-top: 8px;
  }

  .entry-type-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 0;
  }
  .entry-chip {
    padding: 4px 12px;
    border-radius: 16px;
    border: 1px solid var(--outline-color);
    background: none;
    color: var(--primary-text-color);
    cursor: pointer;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    transition:
      background 0.15s,
      color 0.15s,
      border-color 0.15s;
  }
  .entry-chip.active {
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-color: var(--primary-color);
  }
`;class Si extends se{constructor(){super(...arguments),this._imageIsHash=void 0,this._imageCheckEntry="__unset__",this._computeLabel=e=>({config_entry_id:this.localize("editor.integration")}[e.name]??e.name)}setConfig(e){this.config={...e}}localize(e,t,i){return si(this.hass?.locale?.language??"en",e,t,i)}updated(e){if(super.updated(e),!this.hass||!this.config)return;const t=this.config.config_entry_id??null;t!==this._imageCheckEntry&&(this._imageCheckEntry=t,this._imageIsHash=void 0,this._checkImageFormat())}async _checkImageFormat(){try{const e=await vi(this.hass,{configEntryId:this.config?.config_entry_id??void 0,resultLimit:1}),t=e[0]?.image;this._imageIsHash=!t||!(t.startsWith("/")||t.startsWith("http"))}catch{this._imageIsHash=!0}}get _schemaTop(){return[{type:"expandable",title:this.localize("editor.integration"),icon:"mdi:connection",schema:[{name:"config_entry_id",selector:{config_entry:{integration:"mealie"}}}]}]}_toggleBool(e,t){this.config={...this.config,[e]:t},ye(this,"config-changed",{config:this.config})}_setValue(e,t){this.config={...this.config,[e]:t},ye(this,"config-changed",{config:this.config})}_valueChanged(e){const t={...e.detail.value};t.config_entry_id||(t.show_image=!1),this.config=t,ye(this,"config-changed",{config:this.config})}renderEditorLoading(){return V`<div>${this.localize("editor.loading")}</div>`}renderTopForm(){return V`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaTop}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}renderDisplayOptions(e){return V`
      ${this._imageIsHash?(t=this.hass,i=this.config.url,a=this.localize("editor.mealie_url"),r=e=>this._setValue("url",e||void 0),V`
    <ha-selector
      .hass=${t}
      .selector=${{text:{}}}
      .value=${i??""}
      .label=${a}
      @value-changed=${e=>r(e.detail.value)}
    ></ha-selector>
  `):W}
      ${Ei(this.hass,!!this.config.show_image,this.localize("editor.show_image"),e=>this._toggleBool("show_image",e),!e)}
      ${Ei(this.hass,!!this.config.show_rating,this.localize("editor.show_rating"),e=>this._toggleBool("show_rating",e))}
      ${Ei(this.hass,!!this.config.show_servings,this.localize("editor.show_servings"),e=>this._toggleBool("show_servings",e))}
      ${Ei(this.hass,!!this.config.show_description,this.localize("editor.show_description"),e=>this._toggleBool("show_description",e))}
      ${Ei(this.hass,!!this.config.show_prep_time,this.localize("editor.show_prep_time"),e=>this._toggleBool("show_prep_time",e))}
      ${Ei(this.hass,!!this.config.show_perform_time,this.localize("editor.show_cooking_time"),e=>this._toggleBool("show_perform_time",e))}
      ${Ei(this.hass,!!this.config.show_total_time,this.localize("editor.show_total_time"),e=>this._toggleBool("show_total_time",e))}
    `;var t,i,a,r}}Si.styles=Mi,e([he({attribute:!1})],Si.prototype,"hass",void 0),e([_e()],Si.prototype,"config",void 0),e([_e()],Si.prototype,"_imageIsHash",void 0);let Ci=class extends Si{get _entryTypeOptions(){return ki.map(e=>({value:e,label:this.localize(`common.${e}`)}))}_renderEntryTypes(){const e=new Set(this.config.entry_types??[]);return V`
      <div class="entry-type-chips">
        ${this._entryTypeOptions.map(({value:t,label:i})=>V`
            <button class="entry-chip ${e.has(t)?"active":""}" @click=${()=>this._toggleEntryType(t)}>${i}</button>
          `)}
      </div>
    `}get _schemaLayout(){return[{type:"expandable",title:this.localize("editor.settings_title_layout"),icon:"mdi:view-grid-outline",schema:[{name:"recipes_layout",selector:{select:{options:[{value:"horizontal",label:this.localize("editor.layout_recipes_horizontal")},{value:"vertical",label:this.localize("editor.layout_recipes_vertical")}]}}}]}]}render(){if(!this.hass||!this.config)return this.renderEditorLoading();const e=!!this.config.config_entry_id;return V`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.entry_types")}>
        <ha-icon slot="leading-icon" icon="mdi:silverware-fork-knife"></ha-icon>
        ${this._renderEntryTypes()}
      </ha-expansion-panel>
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${this.renderDisplayOptions(e)}
          ${Ai(this.hass,this.config.day_offset,this.localize("editor.day_offset"),0,30,e=>this._setValue("day_offset",Number(e)))}
        </div>
      </ha-expansion-panel>
      <ha-form .hass=${this.hass} .data=${this.config} .schema=${this._schemaLayout} @value-changed=${this._valueChanged}></ha-form>
    `}_toggleEntryType(e){const t=new Set(this.config.entry_types??[]);t.has(e)?t.delete(e):t.add(e),this.config={...this.config,entry_types:[...t]},ye(this,"config-changed",{config:this.config})}};Ci=e([de("mealie-card-editor")],Ci);let Ri=class extends xi{constructor(){super(...arguments),this.config={},this.recipe=null,this.configEntryId=null,this.open=!1,this._detail=null}updated(e){super.updated(e),e.has("open")&&this.open&&this.recipe&&!this._detail&&!this._loading&&this.loadData(),e.has("recipe")&&this.recipe&&this.open&&(this._detail=null,this.loadData())}async loadData(){if(this.open&&this.recipe&&this.hass){this._loading=!0,this.error=null;try{this._detail=await async function(e,t,i){try{const a=await yi(e,"get_recipe",{recipe_id:t},i);return a?.recipe??a??null}catch(e){throw gi("error.error_loading",e)}}(this.hass,this.recipe.slug??this.recipe.recipe_id,this.configEntryId??void 0),this._initialized=!0}catch(e){this.handleError(e)}finally{this._loading=!1}}}_close(){this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!1,composed:!1}))}_renderIngredient(e){const t=e.display??e.note??[e.quantity,e.unit,e.food?.name].filter(Boolean).join(" ");return V`<li>${t}</li>`}_renderInstruction(e,t){const i=e.text??"";return V`<li>${e.title?V`<strong>${e.title}: </strong>`:""}${i}</li>`}_renderDetail(){const e=this._detail,t=this.hass?.locale?.language,i=[e.prep_time?{icon:"mdi:knife",label:this.localize("dialog.prep_time"),value:mi(e.prep_time,t)}:null,e.perform_time?{icon:"mdi:pot-steam",label:this.localize("dialog.cooking_time"),value:mi(e.perform_time,t)}:null,e.total_time?{icon:"mdi:clock-time-three-outline",label:this.localize("dialog.total_time"),value:mi(e.total_time,t)}:null].filter(Boolean);return V`
      <div class="dialog-body">
        ${this.renderRecipeImage(e,this.config?.show_image)}

        <div class="recipe-meta">
          ${this.renderStarRating(e.rating,this.config.show_rating)} ${this.renderServings(e.recipe_servings,this.config.show_servings)}
        </div>

        ${i.length?this.renderDetailsSection("mdi:clock-outline",this.localize("dialog.times"),V`${i.map(e=>V`
                  <div class="time-row">
                    <ha-icon class="time-row-icon" icon=${e.icon}></ha-icon>
                    <span class="time-row-label">${e.label}</span>
                    <span class="time-row-value">${e.value}</span>
                  </div>
                `)}`):W}
        ${e.ingredients?.length?this.renderDetailsSection("mdi:food-apple",this.localize("dialog.ingredients"),V`<ul>
                ${e.ingredients.map(e=>this._renderIngredient(e))}
              </ul>`):W}
        ${e.instructions?.length?this.renderDetailsSection("mdi:chef-hat",this.localize("dialog.instructions"),V`<ol>
                ${e.instructions.map((e,t)=>this._renderInstruction(e,t))}
              </ol>`):W}
      </div>
    `}render(){return this.open&&this.recipe?V`
      <ha-dialog .open=${!0} width="medium" .hass=${this.hass} @closed=${this._close}>
        <div slot="headerTitle" class="header-container">
          <span class="recipe-name-highlight">${this.recipe.name}</span>
        </div>
        ${this._loading?V`<div class="loading">${this.localize("editor.loading")}</div>`:W}
        ${this.error?V`<div class="error">${this.error}</div>`:W} ${this._detail?this._renderDetail():W}
      </ha-dialog>
    `:W}};Ri.styles=wi,e([he({attribute:!1})],Ri.prototype,"config",void 0),e([he({attribute:!1})],Ri.prototype,"recipe",void 0),e([he()],Ri.prototype,"configEntryId",void 0),e([he({type:Boolean})],Ri.prototype,"open",void 0),e([he()],Ri.prototype,"effectiveUrl",void 0),e([_e()],Ri.prototype,"_detail",void 0),Ri=e([de("mealie-recipe-dialog")],Ri);class Di extends xi{constructor(){super(...arguments),this.recipes=[],this._dialogRecipe=null,this._confirmDeleteEntry=null,this._onMealplanUpdated=()=>{this._initialized=!1,this.loadData()}}get _canDeleteMealplan(){return!!this.hass?.services?.[ve]?.delete_mealplan}connectedCallback(){super.connectedCallback(),this._initialized=!1,window.addEventListener("mealie-mealplan-updated",this._onMealplanUpdated)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mealie-mealplan-updated",this._onMealplanUpdated)}setConfig(e){this.config=function(e){return xe(e,we,"Invalid configuration for mealie-mealplan-card")}(e),this._initialized=!1,this.error=null,this.hass&&this.loadData()}static getConfigElement(){return document.createElement("mealie-card-editor")}static getStubConfig(){return we}async loadData(){if(this.hass&&this.config&&!this._loading&&!this._initialized&&this.config.config_entry_id){this._loading=!0,this.error=null;try{const e=this.config.day_offset??0,t=new Date;t.setDate(t.getDate()+e);const i=hi(t);let a=[...await bi(this.hass,{configEntryId:this.config.config_entry_id,startDate:i,endDate:i})];this.config.entry_types?.length&&(a=a.filter(e=>this.config.entry_types.includes(e.entry_type))),this.recipes=a,this._initialized=!0}catch(e){this.handleError(e)}finally{this._loading=!1}}}render(){return this.hass&&this.config?this.config.config_entry_id?this._loading?this.renderLoading():this.error?this.renderError():this.recipes?.length?V`
      <ha-card>
        ${this.renderDateHeader()}
        <div class="card-content">
          <div class="${"horizontal"===this.config.recipes_layout?"recipes-horizontal":"recipes-vertical"}">
            ${this.recipes.map(e=>this.renderRecipeCard(e))}
          </div>
        </div>
        <mealie-recipe-dialog
          .hass=${this.hass}
          .recipe=${this._dialogRecipe}
          .configEntryId=${this.config.config_entry_id}
          .config=${this.config}
          ?open=${!!this._dialogRecipe}
          @dialog-closed=${()=>{this._dialogRecipe=null}}
        ></mealie-recipe-dialog>
        ${this._renderConfirmDeleteDialog()}
      </ha-card>
    `:this.renderEmptyState(this.localize("common.no_mealplan")):this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}renderDateHeader(){const e=this.recipes[0]?.mealplan_date;return e?V`<div class="date-label">${_i(e,this.hass)}</div>`:W}_renderConfirmDeleteDialog(){const e=this._confirmDeleteEntry;return V`
      <ha-dialog
        .open=${null!==e}
        .hass=${this.hass}
        width="small"
        @closed=${()=>{this._confirmDeleteEntry=null}}
      >
        <div slot="headerTitle">${this.localize("dialog.confirm_delete_title")}</div>
        <div>
          ${e?V`
                <div>
                  <div class="recipe-type">${ui(e.entryType,this.hass?.locale?.language)}</div>
                  <div class="dial-recipe-date">${_i(e.date,this.hass)}</div>
                  <div class="dial-recipe-name">${e.name}</div>
                </div>
              `:W}
        </div>
        <ha-dialog-footer slot="footer">
          <ha-button
            size="small"
            variant="danger"
            appearance="accent"
            slot="secondaryAction"
            @click=${()=>{this._confirmDeleteEntry=null}}
          >
            ${this.localize("dialog.cancel")}
          </ha-button>
          <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${()=>this._handleDelete()}>
            ${this.localize("dialog.confirm")}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `}async _handleDelete(){const e=this._confirmDeleteEntry?.id??null;if(this._confirmDeleteEntry=null,null!==e)try{await async function(e,t,i){try{const a=i||await fi(e);await e.callService(ve,"delete_mealplan",{config_entry_id:a,mealplan_id:String(t)})}catch(e){throw gi("error.error_deleting_mealplan",e)}}(this.hass,e,this.config.config_entry_id??void 0),ye(this,"hass-notification",{message:this.localize("dialog.mealplan_deleted_success")}),this._initialized=!1,this.loadData()}catch{ye(this,"hass-notification",{message:this.localize("error.error_deleting_mealplan")})}}renderRecipeCard(e){return V`
      <div class="recipe-card">
        <div class="recipe-card-body">
          <div class="recipe-type">${ui(e.entry_type,this.hass?.locale?.language)}</div>
          ${e.recipe?this.renderRecipeWithData(e.recipe,e):this.renderRecipeWithoutData(e)}
        </div>
      </div>
    `}renderRecipeWithData(e,t){return V`
      ${this.renderCardButtons(e,t)} ${this.renderRecipeImage(e,this.config.show_image)}
      <div class="recipe-info">
        ${this.renderRecipeName(e)}

        <div class="recipe-meta">
          ${this.renderStarRating(e.rating,this.config.show_rating)} ${this.renderServings(e.recipe_servings,this.config.show_servings)}
        </div>
        ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
      </div>
      ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
    `}renderRecipeWithoutData(e){return V`
      <div class="card-buttons">
        ${this._canDeleteMealplan?V`<button
          class="delete-mealplan-button"
          title="${this.localize("cards.delete_mealplan")}"
          @click=${()=>{this._confirmDeleteEntry={id:e.mealplan_id,name:e.title??"",entryType:e.entry_type,date:e.mealplan_date}}}
        >
          <ha-icon icon="mdi:trash-can-outline"></ha-icon>
        </button>`:W}
      </div>
      <div class="recipe-info">${this.renderRecipeName(e)} ${this.renderRecipeDescription(e.description??"",!0)}</div>
    `}renderCardButtons(e,t){return V`
      <div class="card-buttons">
        <button
          class="view-recipe-button"
          title="${this.localize("cards.view_recipe")}"
          @click=${()=>{this._dialogRecipe=e}}
        >
          <ha-icon icon="mdi:book-open-variant"></ha-icon>
        </button>
        ${this._canDeleteMealplan?V`<button
          class="delete-mealplan-button"
          title="${this.localize("cards.delete_mealplan")}"
          @click=${()=>{this._confirmDeleteEntry={id:t.mealplan_id,name:e.name,entryType:t.entry_type,date:t.mealplan_date}}}
        >
          <ha-icon icon="mdi:trash-can-outline"></ha-icon>
        </button>`:W}
      </div>
    `}}Di.styles=wi,e([_e()],Di.prototype,"config",void 0),e([_e()],Di.prototype,"recipes",void 0),e([_e()],Di.prototype,"_dialogRecipe",void 0),e([_e()],Di.prototype,"_confirmDeleteEntry",void 0);let Ti=class extends Si{render(){if(!this.hass||!this.config)return this.renderEditorLoading();const e=!!this.config.config_entry_id;return V`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${this.renderDisplayOptions(e)}
          ${Ai(this.hass,this.config.result_limit,this.localize("editor.number_of_recipes"),1,100,e=>this._setValue("result_limit",e))}
        </div>
      </ha-expansion-panel>
    `}};Ti=e([de("mealie-recipe-card-editor")],Ti);let ji=class extends se{constructor(){super(...arguments),this.recipe=null,this.configEntryId=null,this.open=!1,this._date="",this._entryType="dinner",this._submitting=!1,this._handleAdd=async()=>{if(this.recipe&&this._date&&this._entryType&&this.hass){this._submitting=!0;try{await async function(e,t){try{const i=t.configEntryId||await fi(e);await e.callService(ve,"set_mealplan",{config_entry_id:i,date:t.date,entry_type:t.entryType,...t.recipeId&&{recipe_id:t.recipeId},...t.noteTitle&&{note_title:t.noteTitle},...t.noteText&&{note_text:t.noteText}})}catch(e){throw gi("error.error_adding_recipe",e)}}(this.hass,{date:this._date,entryType:this._entryType,recipeId:this.recipe.recipe_id,configEntryId:this.configEntryId??void 0}),ye(this,"hass-notification",{message:this.localize("dialog.recipe_added_success")}),window.dispatchEvent(new CustomEvent("mealie-mealplan-updated")),this._close()}catch(e){ye(this,"hass-notification",{message:e instanceof Error?e.message:this.localize("error.error_adding_recipe")})}finally{this._submitting=!1}}}}localize(e,t,i){return si(this.hass?.locale?.language??"en",e,t,i)}updated(e){super.updated(e),e.has("open")&&this.open&&(this._date=hi(new Date),this._entryType="dinner",this._submitting=!1)}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!1,composed:!1}))}_renderImage(){const e=zi(this.recipe,this.effectiveUrl);if(!e)return W;const t=e.startsWith("/")?`${this.hass.auth.data.hassUrl}${e}`:e;return V`
      <img
        class="detail-image"
        src=${t}
        alt=${this.recipe.name}
        @error=${e=>{e.target.style.display="none"}}
        @load=${e=>$i(e)}
      />
    `}_renderDateSelector(){return V`
      <ha-selector
        .hass=${this.hass}
        .selector=${{date:{}}}
        .value=${this._date}
        .label=${this.localize("dialog.select_date")}
        @value-changed=${e=>{this._date=e.detail.value}}
      ></ha-selector>
    `}_renderMealTypeSelector(){const e=ki.map(e=>({value:e,label:this.localize(`common.${e}`)}));return V`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:e}}}
        .value=${this._entryType}
        .label=${this.localize("dialog.select_meal_type")}
        @value-changed=${e=>{this._entryType=e.detail.value}}
      ></ha-selector>
    `}_renderFooter(){return V`
      <ha-dialog-footer slot="footer">
        <ha-button
          slot="primaryAction"
          size="small"
          variant="brand"
          appearance="accent"
          @click=${this._handleAdd}
          ?disabled=${!this._date||!this._entryType||this._submitting}
        >
          ${this._submitting?"...":this.localize("dialog.add")}
        </ha-button>
      </ha-dialog-footer>
    `}render(){return this.recipe?V`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <div slot="headerTitle" class="header-container">
          <span class="title-prefix"> ${this.localize("dialog.add_recipe_to_mealplan")} </span>
          <span class="recipe-name-highlight">${this.recipe.name}</span>
        </div>

        <div class="dialog-body">${this._renderImage()} ${this._renderDateSelector()} ${this._renderMealTypeSelector()}</div>

        ${this._renderFooter()}
      </ha-dialog>
    `:W}};ji.styles=wi,e([he({attribute:!1})],ji.prototype,"hass",void 0),e([he({attribute:!1})],ji.prototype,"recipe",void 0),e([he()],ji.prototype,"configEntryId",void 0),e([he({type:Boolean})],ji.prototype,"open",void 0),e([he()],ji.prototype,"effectiveUrl",void 0),e([_e()],ji.prototype,"_date",void 0),e([_e()],ji.prototype,"_entryType",void 0),e([_e()],ji.prototype,"_submitting",void 0),ji=e([de("mealie-mealplan-dialog")],ji);class Pi extends xi{constructor(){super(...arguments),this.recipes=[],this._mealplanRecipe=null,this._dialogRecipe=null}setConfig(e){this.config=function(e){return xe(e,ze,"Invalid configuration for mealie-recipe-card")}(e),this._initialized=!1,this.hass&&this.loadData()}async loadData(){if(this.hass&&!this._loading&&!this._initialized&&this.config?.config_entry_id){this._loading=!0,this.error=null;try{this.recipes=await vi(this.hass,{configEntryId:this.config.config_entry_id,resultLimit:this.config.result_limit??10}),this._initialized=!0}catch(e){this.handleError(e),this._initialized=!0}finally{this._loading=!1}}}static getConfigElement(){return document.createElement("mealie-recipe-card-editor")}static getStubConfig(){return{...ze}}render(){return this.config?this.config.config_entry_id?this._loading?this.renderLoading():this.error?this.renderError():this.recipes?.length?V`
      ${this.renderRecipes()}
      <mealie-mealplan-dialog
        .hass=${this.hass}
        .recipe=${this._mealplanRecipe}
        .configEntryId=${this.config.config_entry_id}
        .effectiveUrl=${this.config.url}
        ?open=${!!this._mealplanRecipe}
        @dialog-closed=${()=>{this._mealplanRecipe=null}}
      ></mealie-mealplan-dialog>
      <mealie-recipe-dialog
        .hass=${this.hass}
        .recipe=${this._dialogRecipe}
        .configEntryId=${this.config.config_entry_id}
        .config=${this.config}
        ?open=${!!this._dialogRecipe}
        @dialog-closed=${()=>{this._dialogRecipe=null}}
      ></mealie-recipe-dialog>
    `:this.renderEmptyState(this.localize("common.no_recipe")):this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}renderRecipes(){return V`
      <ha-card>
        <div class="card-content">
          <div class="recipes-container">${this.recipes.map(e=>this.renderRecipe(e))}</div>
        </div>
      </ha-card>
    `}renderCardButtons(e){return V`
      <div class="card-buttons">
        <button
          class="add-to-mealplan-button"
          @click=${t=>{t.preventDefault(),t.stopPropagation(),this._mealplanRecipe=e}}
          title="${this.localize("dialog.add_to_mealplan")}"
        >
          <ha-icon icon="mdi:calendar-plus"></ha-icon>
        </button>
        <button
          class="view-recipe-button"
          title="${this.localize("cards.view_recipe")}"
          @click=${()=>{this._dialogRecipe=e}}
        >
          <ha-icon icon="mdi:book-open-variant"></ha-icon>
        </button>
      </div>
    `}renderRecipeInfo(e){return V`
      <div class="recipe-info">
        ${this.renderRecipeName(e)}
        <div class="recipe-meta">
          ${this.renderStarRating(e.rating,this.config.show_rating)}
          ${this.renderServings(e.recipe_servings,this.config.show_servings)}
        </div>
        ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
        ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
      </div>
    `}renderRecipe(e){return V`
      <div class="recipe-card">
        ${this.renderCardButtons(e)} ${this.renderRecipeImage(e,this.config.show_image)} ${this.renderRecipeInfo(e)}
      </div>
    `}}Pi.styles=wi,e([_e()],Pi.prototype,"config",void 0),e([_e()],Pi.prototype,"recipes",void 0),e([_e()],Pi.prototype,"_mealplanRecipe",void 0),e([_e()],Pi.prototype,"_dialogRecipe",void 0);customElements.get("mealie-mealplan-card")||customElements.define("mealie-mealplan-card",Di),customElements.get("mealie-recipe-card")||customElements.define("mealie-recipe-card",Pi),window.customCards=window.customCards||[];[{type:"mealie-mealplan-card",name:`${si("en","cards.name_mealplan")}`,description:`${si("en","cards.description_mealplan")}`,configurable:!0,preview:!1,documentationURL:"https://github.com/domodom30/mealie-card"},{type:"mealie-recipe-card",name:`${si("en","cards.name_recipes")}`,description:`${si("en","cards.description_recipes")}`,configurable:!0,preview:!1,documentationURL:"https://github.com/domodom30/mealie-card"}].forEach(e=>{window.customCards?.some(t=>t.type===e.type)||window.customCards?.push(e)}),console.info("%c MEALIE-CARD %c 3.0.3","color: white; background: orange; font-weight: 700;","color: orange; background: white; font-weight: 700;");export{Di as MealieMealplanCard,Pi as MealieRecipeCard};
