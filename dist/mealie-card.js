function e(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new r(i,e,a)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,m=globalThis,u=m.trustedTypes,g=u?u.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&d(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:n}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const r=a?.call(this);n?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{if(i)e.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of a){const a=document.createElement("style"),n=t.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=i.cssText,e.appendChild(a)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a;const r=n.fromAttribute(t,e.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const a=this.constructor,n=this[e];if(i??=a.getPropertyOptions(e),!((i.hasChanged??b)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,f?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.1.1");const z=globalThis,x=z.trustedTypes,k=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+A,S=`<${M}>`,C=document,R=()=>C.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,j="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,L=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,N=/"/g,B=/^(?:script|style|textarea|title)$/i,H=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),F=new WeakMap,K=C.createTreeWalker(C,129);function q(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,a=[];let n,r=2===t?"<svg>":3===t?"<math>":"",o=I;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===I?"!--"===l[1]?o=P:void 0!==l[1]?o=U:void 0!==l[2]?(B.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=L):void 0!==l[3]&&(o=L):o===L?">"===l[0]?(o=n??I,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?L:'"'===l[3]?N:O):o===N||o===O?o=L:o===P||o===U?o=I:(o=L,n=void 0);const p=o===L&&e[t+1].startsWith("/>")?" ":"";r+=o===I?i+S:d>=0?(a.push(s),i.slice(0,d)+E+i.slice(d)+A+p):i+A+(-2===d?t:p)}return[q(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class Z{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,r=0;const o=e.length-1,s=this.parts,[l,d]=G(e,t);if(this.el=Z.createElement(l,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=K.nextNode())&&s.length<o;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(E)){const t=d[r++],i=a.getAttribute(e).split(A),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?ee:"?"===o[1]?te:"@"===o[1]?ie:X}),a.removeAttribute(e)}else e.startsWith(A)&&(s.push({type:6,index:n}),a.removeAttribute(e));if(B.test(a.tagName)){const e=a.textContent.split(A),t=e.length-1;if(t>0){a.textContent=x?x.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],R()),K.nextNode(),s.push({type:2,index:++n});a.append(e[t],R())}}}else if(8===a.nodeType)if(a.data===M)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(A,e+1));)s.push({type:7,index:n}),e+=A.length-1}n++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,a){if(t===V)return t;let n=void 0!==a?i._$Co?.[a]:i._$Cl;const r=T(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(t=Q(e,n._$AS(e,t.values),n,a)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??C).importNode(t,!0);K.currentNode=a;let n=K.nextNode(),r=0,o=0,s=i[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new Y(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ae(n,this,e)),this._$AV.push(t),s=i[++o]}r!==s?.index&&(n=K.nextNode(),r++)}return K.currentNode=C,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new J(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new Z(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new Y(this.O(R()),this.O(R()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,a){const n=this.strings;let r=!1;if(void 0===n)e=Q(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==V,r&&(this._$AH=e);else{const a=e;let o,s;for(e=n[0],o=0;o<n.length-1;o++)s=Q(this,a[i+o],t,o),s===V&&(s=this._$AH[o]),r||=!T(s)||s!==this._$AH[o],s===W?e=W:e!==W&&(e+=(s??"")+n[o+1]),this._$AH[o]=s}r&&!a&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ie extends X{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??W)===V)return;const i=this._$AH,a=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==W&&(i===W||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const ne=z.litHtmlPolyfillSupport;ne?.(Z,Y),(z.litHtmlVersions??=[]).push("3.3.1");const re=globalThis;let oe=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let n=a._$litPart$;if(void 0===n){const e=i?.renderBefore??null;a._$litPart$=n=new Y(t.insertBefore(R(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};oe._$litElement$=!0,oe.finalized=!0,re.litElementHydrateSupport?.({LitElement:oe});const se=re.litElementPolyfillSupport;se?.({LitElement:oe}),(re.litElementVersions??=[]).push("4.2.1");const le=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},ce=(e=de,t,i)=>{const{kind:a,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,n,e)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const n=this[a];t.call(this,i),this.requestUpdate(a,n,e)}}throw Error("Unsupported decorator location: "+a)};function pe(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function he(e){return pe({...e,state:!0,attribute:!1})}var _e,me,ue=function(e){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"})};function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(_e||(_e={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(me||(me={}));var fe=function(e,t,i,a){a=a||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=i,e.dispatchEvent(n),n};const ye="mealie",ve={show_image:!1,show_rating:!1,show_servings:!1,show_prep_time:!0,show_total_time:!0,show_perform_time:!0,show_description:!1},be={url:"",group:"home"},we={type:"custom:mealie-mealplan-card",entry_types:[],layout:"vertical",recipes_layout:"vertical",day_offset:0,...ve,...be},$e={type:"custom:mealie-recipe-card",result_limit:10,...ve,...be};function ze(e,t,i){if(!e)throw new Error(i);const a={...e};for(const e in t)a[e]=a[e]??t[e];return a}var xe={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Vis dagens måltider",name_recipes:"Mealie Opskrifter",description_recipes:"Vis dine opskrifter fra Mealie-instansen",view_recipe:"Vis opskrift",delete_mealplan:"Fjern fra plan"},ke={no_recipe:"Ingen opskrift",no_mealplan:"Intet måltid",today:"I dag",breakfast:"Morgenmad",lunch:"Frokost",dinner:"Aftensmad",side:"Tilbehør",dessert:"Dessert",drink:"Drik",snack:"Snack"},Ee={add_to_mealplan:"Tilføj til måltidsplan",add_recipe_to_mealplan:"Tilføj til måltidsplan",select_date:"Vælg en dato",select_meal_type:"Måltidstype",recipe_added_success:"Opskrift tilføjet til plan",cancel:"Annuller",close:"Luk",add:"Tilføj",mealplan_deleted_success:"Måltid fjernet fra plan",confirm_delete_title:"Fjern dette måltid?",confirm_delete_message:"Denne handling kan ikke fortrydes.",confirm:"Bekræft",ingredients:"Ingredienser",instructions:"Vejledning",times:"Tider",prep_time:"Forberedelse",cooking_time:"Tilberedning",total_time:"Total"},Ae={number_of_days:"For at konfigurere kalendervisningen:\n• 0 = i dag\n• 1 = i morgen\n• 2 = i overmorgen\n• osv...",no_url:"Konfigurer Mealie URL for at aktivere billeder og opskriftslinks."},Me={invalid_config:"Ugyldig konfiguration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fejl ved indlæsning af konfiguration",error_loading:"Fejl ved indlæsning af data",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fejl ved sletning af måltid"},Se={integration:"Mealie integration",entry_types:"Måltidstyper der skal vises",loading:"Indlæser...",mealie_url:"Mealie URL",number_of_recipes:"Antal opskrifter der skal vises",number_of_recipes_helper:"Antal opskrifter der skal vises (standard 10).",settings_recipes_card:"Visningskonfiguration",settings_title_layout:"Layout",show_image:"Vis billede",show_rating:"Vis bedømmelse",show_servings:"Portioner & Mængde",show_description:"Vis beskrivelse",show_prep_time:"Vis forberedelsestid",show_cooking_time:"Vis tilberedningstid",show_total_time:"Vis total tid",layout_recipes_horizontal:"vandret",layout_recipes_vertical:"lodret",recipes_layout:"Måltidsvisning",day_offset:"dag"},Ce={hour:"time",hours:"timer",minute:"minut",minutes:"minutter",hour_short:"t",minute_short:"min"},Re={cards:xe,common:ke,dialog:Ee,info:Ae,error:Me,editor:Se,time:Ce},Te={name_mealplan:"Mealie Speiseplan",description_mealplan:"Heutige Mahlzeiten anzeigen",name_recipes:"Mealie Rezepte",description_recipes:"Zeigen Sie Ihre Rezepte von der Mealie-Instanz an",view_recipe:"Rezept anzeigen",delete_mealplan:"Aus dem Plan löschen"},De={no_recipe:"Kein Rezept",no_mealplan:"Keine Mahlzeit",today:"Heute",breakfast:"Frühstück",lunch:"Mittagessen",dinner:"Abendessen",side:"Beilage",dessert:"Dessert",drink:"Getränk",snack:"Snack"},je={add_to_mealplan:"Zum Speiseplan hinzufügen",add_recipe_to_mealplan:"zum Speiseplan hinzufügen",select_date:"Datum auswählen",select_meal_type:"Mahlzeittyp",recipe_added_success:"Rezept zum Plan hinzugefügt",cancel:"Abbrechen",close:"Schließen",add:"Hinzufügen",mealplan_deleted_success:"Mahlzeit aus dem Plan entfernt",confirm_delete_title:"Diese Mahlzeit entfernen?",confirm_delete_message:"Diese Aktion kann nicht rückgängig gemacht werden.",confirm:"Bestätigen",ingredients:"Zutaten",instructions:"Anleitung",times:"Zeiten",prep_time:"Vorbereitung",cooking_time:"Kochen",total_time:"Gesamt"},Ie={number_of_days:"So konfigurieren Sie die Kalenderanzeige:\n• 0 = heute\n• 1 = morgen\n• 2 = übermorgen\n• usw...",no_url:"Konfigurieren Sie die Mealie-URL, um Bilder und Rezeptlinks zu aktivieren."},Pe={invalid_config:"Ungültige Konfiguration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fehler beim Laden der Konfiguration",error_loading:"Fehler beim Laden der Daten",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fehler beim Löschen der Mahlzeit"},Ue={integration:"Mealie integration",entry_types:"Anzuzeigende Mahlzeittypen",loading:"Wird geladen...",mealie_url:"Mealie URL",number_of_recipes:"Anzahl der anzuzeigenden Rezepte",number_of_recipes_helper:"Anzahl der anzuzeigenden Rezepte (Standard 10).",settings_recipes_card:"Anzeigekonfiguration",settings_title_layout:"Layout",show_image:"Bild anzeigen",show_rating:"Bewertung anzeigen",show_servings:"Portionen & Menge",show_description:"Beschreibung anzeigen",show_prep_time:"Vorbereitungszeit anzeigen",show_cooking_time:"Kochzeit anzeigen",show_total_time:"Gesamtzeit anzeigen",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertikal",recipes_layout:"Mahlzeitenanzeige",day_offset:"Tag"},Le={hour:"Stunde",hours:"Stunden",minute:"Minute",minutes:"Minuten",hour_short:"Std",minute_short:"Min"},Oe={cards:Te,common:De,dialog:je,info:Ie,error:Pe,editor:Ue,time:Le},Ne={name_mealplan:"Mealie Meal Plan",description_mealplan:"Display today's meals",name_recipes:"Mealie Recipes",description_recipes:"Display your recipes from Mealie instance",view_recipe:"View recipe",delete_mealplan:"Delete from plan"},Be={no_recipe:"No recipe",no_mealplan:"No meal",today:"Today",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",side:"Side",dessert:"Dessert",drink:"Drink",snack:"Snack"},He={add_to_mealplan:"Add to meal plan",add_recipe_to_mealplan:"Add to meal plan",select_date:"Select a date",select_meal_type:"Meal type",recipe_added_success:"Recipe added to plan",cancel:"Cancel",close:"Close",add:"Add",mealplan_deleted_success:"Meal removed from plan",confirm_delete_title:"Remove this meal?",confirm_delete_message:"This action cannot be undone.",confirm:"Confirm",ingredients:"Ingredients",instructions:"Instructions",times:"Times",prep_time:"Preparation",cooking_time:"Cooking",total_time:"Total"},Ve={number_of_days:"To configure the calendar display:\n• 0 = today\n• 1 = tomorrow\n• 2 = day after tomorrow\n• etc...",no_url:"Configure Mealie URL to enable images and recipe links."},We={invalid_config:"Invalid configuration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Error loading configuration",error_loading:"Error loading data",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Error deleting meal"},Fe={integration:"Mealie integration",entry_types:"Meal types to display",loading:"Loading...",mealie_url:"Mealie URL",number_of_recipes:"Number of recipes to display",number_of_recipes_helper:"Number of recipes to display (default 10).",settings_recipes_card:"Display configuration",settings_title_layout:"Layout",show_image:"Show image",show_rating:"Show rating",show_servings:"Serving & Quantity",show_description:"Show description",show_prep_time:"Show preparation time",show_cooking_time:"Show cooking time",show_total_time:"Show total time",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Meals display",day_offset:"day"},Ke={hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},qe={cards:Ne,common:Be,dialog:He,info:Ve,error:We,editor:Fe,time:Ke},Ge={name_mealplan:"Plan de Comidas Mealie",description_mealplan:"Mostrar las comidas del día",name_recipes:"Recetas Mealie",description_recipes:"Mostrar tus recetas desde la instancia Mealie",view_recipe:"Ver receta",delete_mealplan:"Eliminar del plan"},Ze={no_recipe:"Ninguna receta",no_mealplan:"Ninguna comida",today:"Hoy",breakfast:"Desayuno",lunch:"Almuerzo",dinner:"Cena",side:"Acompañamiento",dessert:"Postre",drink:"Bebida",snack:"Merienda"},Qe={add_to_mealplan:"Añadir al plan de comidas",add_recipe_to_mealplan:"Añadir al plan de comidas",select_date:"Seleccionar una fecha",select_meal_type:"Tipo de comida",recipe_added_success:"Receta añadida al plan",cancel:"Cancelar",close:"Cerrar",add:"Añadir",mealplan_deleted_success:"Comida eliminada del plan",confirm_delete_title:"¿Eliminar esta comida?",confirm_delete_message:"Esta acción no se puede deshacer.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instrucciones",times:"Tiempos",prep_time:"Preparación",cooking_time:"Cocción",total_time:"Total"},Je={number_of_days:"Para configurar la visualización del calendario:\n• 0 = hoy\n• 1 = mañana\n• 2 = pasado mañana\n• etc...",no_url:"Configure la URL de Mealie para activar las imágenes y los enlaces a las recetas."},Ye={invalid_config:"Configuración inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Error al cargar la configuración",error_loading:"Error al cargar datos",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Error al eliminar la comida"},Xe={integration:"Mealie integration",entry_types:"Tipos de comida a mostrar",loading:"Cargando...",mealie_url:"URL de Mealie",number_of_recipes:"Número de recetas a mostrar",number_of_recipes_helper:"Número de recetas a mostrar (predeterminado 10).",settings_recipes_card:"Configuración de visualización",settings_title_layout:"Diseño",show_image:"Mostrar imagen",show_rating:"Mostrar valoración",show_servings:"Porciones y Cantidad",show_description:"Mostrar descripción",show_prep_time:"Mostrar tiempo de preparación",show_cooking_time:"Mostrar tiempo de cocción",show_total_time:"Mostrar tiempo total",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Visualización de comidas",day_offset:"día"},et={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},tt={cards:Ge,common:Ze,dialog:Qe,info:Je,error:Ye,editor:Xe,time:et},it={name_mealplan:"Repas Mealie",description_mealplan:"Afficher les repas du jour",name_recipes:"Recettes Mealie",description_recipes:"Afficher vos recettes depuis l'instance Mealie",view_recipe:"Voir la recette",delete_mealplan:"Supprimer du planning"},at={no_recipe:"Aucune recette",no_mealplan:"Aucun repas",today:"Aujourd'hui",breakfast:"Petit-déjeuner",lunch:"Déjeuner",dinner:"Dîner",side:"Accompagnement",dessert:"Dessert",drink:"Boisson",snack:"Collation"},nt={add_to_mealplan:"Ajouter la recette au planning",add_recipe_to_mealplan:"Ajouter au planning",select_date:"Sélectionner une date",select_meal_type:"Type de repas",recipe_added_success:"Recette ajoutée au planning",cancel:"Annuler",close:"Fermer",add:"Ajouter",mealplan_deleted_success:"Repas supprimé du planning",confirm_delete_title:"Supprimer ce repas ?",confirm_delete_message:"Cette action est irréversible.",confirm:"Confirmer",ingredients:"Ingrédients",instructions:"Instructions",times:"Temps",prep_time:"Préparation",cooking_time:"Cuisson",total_time:"Total"},rt={number_of_days:"Pour configurer l'affichage du calendrier :\n• 0 = aujourd'hui\n• 1 = demain\n• 2 = après-demain\n• etc...",no_url:"Configurez l'URL Mealie pour activer les images et les liens vers les recettes."},ot={invalid_config:"Configuration invalide",no_integration:"Sélectionnez une intégration Mealie",missing_config:"Erreur de chargement de la configuration",error_loading:"Erreur de chargement des données",error_adding_recipe:"Erreur lors de l'ajout de la recette",invalid_date:"Date invalide",invalid_entry_type:"Type de repas invalide",error_deleting_mealplan:"Erreur lors de la suppression du repas"},st={integration:"Intégration Mealie",entry_types:"Types de repas à afficher",loading:"Chargement...",mealie_url:"URL Mealie",number_of_recipes:"Nombre de recettes à afficher",number_of_recipes_helper:"Nombre de recettes à afficher (par défaut 10).",settings_recipes_card:"Configuration de l'affichage",settings_title_layout:"Disposition",show_image:"Image",show_rating:"Note",show_servings:"Portion & Quantité",show_description:"Description",show_prep_time:"Temps de préparation",show_cooking_time:"Temps de cuisson",show_total_time:"Temps total",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Affichage des repas",day_offset:"jour"},lt={hour:"heure",hours:"heures",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},dt={cards:it,common:at,dialog:nt,info:rt,error:ot,editor:st,time:lt},ct={name_mealplan:"Piano Pasti Mealie",description_mealplan:"Visualizza i pasti del giorno",name_recipes:"Ricette Mealie",description_recipes:"Visualizza le tue ricette dall'istanza Mealie",view_recipe:"Vedi ricetta",delete_mealplan:"Elimina dal piano"},pt={no_recipe:"Nessuna ricetta",no_mealplan:"Nessun pasto",today:"Oggi",breakfast:"Colazione",lunch:"Pranzo",dinner:"Cena",side:"Contorno",dessert:"Dolce",drink:"Bevanda",snack:"Spuntino"},ht={add_to_mealplan:"Aggiungi al piano pasti",add_recipe_to_mealplan:"Aggiungi al piano pasti",select_date:"Seleziona una data",select_meal_type:"Tipo di pasto",recipe_added_success:"Ricetta aggiunta al piano",cancel:"Annulla",close:"Chiudi",add:"Aggiungi",mealplan_deleted_success:"Pasto rimosso dal piano",confirm_delete_title:"Rimuovere questo pasto?",confirm_delete_message:"Questa azione non può essere annullata.",confirm:"Conferma",ingredients:"Ingredienti",instructions:"Istruzioni",times:"Tempi",prep_time:"Preparazione",cooking_time:"Cottura",total_time:"Totale"},_t={number_of_days:"Per configurare la visualizzazione del calendario:\n• 0 = oggi\n• 1 = domani\n• 2 = dopodomani\n• ecc...",no_url:"Configura l'URL Mealie per attivare le immagini e i link alle ricette."},mt={invalid_config:"Configurazione non valida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Errore di caricamento della configurazione",error_loading:"Errore di caricamento dei dati",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Errore durante l'eliminazione del pasto"},ut={integration:"Mealie integration",entry_types:"Tipi di pasto da visualizzare",loading:"Caricamento...",mealie_url:"URL Mealie",number_of_recipes:"Numero di ricette da visualizzare",number_of_recipes_helper:"Numero di ricette da visualizzare (predefinito 10).",settings_recipes_card:"Configurazione della visualizzazione",settings_title_layout:"Layout",show_image:"Mostra immagine",show_rating:"Mostra valutazione",show_servings:"Porzioni e Quantità",show_description:"Mostra descrizione",show_prep_time:"Mostra tempo di preparazione",show_cooking_time:"Mostra tempo di cottura",show_total_time:"Mostra tempo totale",layout_recipes_horizontal:"orizzontale",layout_recipes_vertical:"verticale",recipes_layout:"Visualizzazione pasti",day_offset:"giorno"},gt={hour:"ora",hours:"ore",minute:"minuto",minutes:"minuti",hour_short:"h",minute_short:"min"},ft={cards:ct,common:pt,dialog:ht,info:_t,error:mt,editor:ut,time:gt},yt={name_mealplan:"Mealie Maaltijdplan",description_mealplan:"Toon de maaltijden van vandaag",name_recipes:"Mealie Recepten",description_recipes:"Toon je recepten van de Mealie-instantie",view_recipe:"Recept bekijken",delete_mealplan:"Verwijder uit plan"},vt={no_recipe:"Geen recept",no_mealplan:"Geen maaltijd",today:"Vandaag",breakfast:"Ontbijt",lunch:"Lunch",dinner:"Diner",side:"Bijgerecht",dessert:"Dessert",drink:"Drank",snack:"Snack"},bt={add_to_mealplan:"Toevoegen aan maaltijdplan",add_recipe_to_mealplan:"toevoegen aan maaltijdplan",select_date:"Selecteer een datum",select_meal_type:"Maaltijdtype",recipe_added_success:"Recept toegevoegd aan plan",cancel:"Annuleren",close:"Sluiten",add:"Toevoegen",mealplan_deleted_success:"Maaltijd verwijderd uit plan",confirm_delete_title:"Deze maaltijd verwijderen?",confirm_delete_message:"Deze actie kan niet ongedaan worden gemaakt.",confirm:"Bevestigen",ingredients:"Ingrediënten",instructions:"Instructies",times:"Tijden",prep_time:"Voorbereiding",cooking_time:"Koken",total_time:"Totaal"},wt={number_of_days:"Om de kalenderweergave te configureren:\n• 0 = vandaag\n• 1 = morgen\n• 2 = overmorgen\n• enz...",no_url:"Configureer Mealie URL om afbeeldingen en receptlinks in te schakelen."},$t={invalid_config:"Ongeldige configuratie",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fout bij laden van configuratie",error_loading:"Fout bij laden van gegevens",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fout bij verwijderen van maaltijd"},zt={integration:"Mealie integration",entry_types:"Maaltijdtypen om weer te geven",loading:"Laden...",mealie_url:"Mealie URL",number_of_recipes:"Aantal weer te geven recepten",number_of_recipes_helper:"Aantal weer te geven recepten (standaard 10).",settings_recipes_card:"Weergaveconfiguratie",settings_title_layout:"Indeling",show_image:"Afbeelding weergeven",show_rating:"Beoordeling weergeven",show_servings:"Porties & Hoeveelheid",show_description:"Beschrijving weergeven",show_prep_time:"Voorbereidingstijd weergeven",show_cooking_time:"Kooktijd weergeven",show_total_time:"Totale tijd weergeven",layout_recipes_horizontal:"horizontaal",layout_recipes_vertical:"verticaal",recipes_layout:"Maaltijdenweergave",day_offset:"dag"},xt={hour:"uur",hours:"uur",minute:"minuut",minutes:"minuten",hour_short:"u",minute_short:"min"},kt={cards:yt,common:vt,dialog:bt,info:wt,error:$t,editor:zt,time:xt},Et={name_mealplan:"Plan Posiłków Mealie",description_mealplan:"Wyświetl dzisiejsze posiłki",name_recipes:"Przepisy Mealie",description_recipes:"Wyświetl swoje przepisy z instancji Mealie",view_recipe:"Wyświetl przepis",delete_mealplan:"Usuń z planu"},At={no_recipe:"Brak przepisu",no_mealplan:"Brak posiłku",today:"Dzisiaj",breakfast:"Śniadanie",lunch:"Obiad",dinner:"Kolacja",side:"Dodatek",dessert:"Deser",drink:"Napój",snack:"Przekąska"},Mt={add_to_mealplan:"Dodaj do planu posiłków",add_recipe_to_mealplan:"Dodaj do planu posiłków",select_date:"Wybierz datę",select_meal_type:"Typ posiłku",recipe_added_success:"Przepis dodany do planu",cancel:"Anuluj",close:"Zamknij",add:"Dodaj",mealplan_deleted_success:"Posiłek usunięty z planu",confirm_delete_title:"Usunąć ten posiłek?",confirm_delete_message:"Tej akcji nie można cofnąć.",confirm:"Potwierdź",ingredients:"Składniki",instructions:"Instrukcje",times:"Czasy",prep_time:"Przygotowanie",cooking_time:"Gotowanie",total_time:"Łącznie"},St={number_of_days:"Aby skonfigurować wyświetlanie kalendarza:\n• 0 = dzisiaj\n• 1 = jutro\n• 2 = pojutrze\n• itd...",no_url:"Skonfiguruj adres URL Mealie, aby włączyć obrazy i linki do przepisów."},Ct={invalid_config:"Nieprawidłowa konfiguracja",no_integration:"Select a Mealie integration in the card settings",missing_config:"Błąd ładowania konfiguracji",error_loading:"Błąd ładowania danych",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Błąd podczas usuwania posiłku"},Rt={integration:"Mealie integration",entry_types:"Typy posiłków do wyświetlenia",loading:"Ładowanie...",mealie_url:"URL Mealie",number_of_recipes:"Liczba przepisów do wyświetlenia",number_of_recipes_helper:"Liczba przepisów do wyświetlenia (domyślnie 10).",settings_recipes_card:"Konfiguracja wyświetlania",settings_title_layout:"Układ",show_image:"Pokaż obraz",show_rating:"Pokaż ocenę",show_servings:"Porcje i ilość",show_description:"Pokaż opis",show_prep_time:"Pokaż czas przygotowania",show_cooking_time:"Pokaż czas gotowania",show_total_time:"Pokaż całkowity czas",layout_recipes_horizontal:"poziomy",layout_recipes_vertical:"pionowy",recipes_layout:"Wyświetlanie posiłków",day_offset:"dzień"},Tt={hour:"godzina",hours:"godziny",minute:"minuta",minutes:"minuty",hour_short:"godz",minute_short:"min"},Dt={cards:Et,common:At,dialog:Mt,info:St,error:Ct,editor:Rt,time:Tt},jt={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Exibir as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Exibir suas receitas da instância Mealie",view_recipe:"Ver receita",delete_mealplan:"Remover do plano"},It={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Café da manhã",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche"},Pt={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",close:"Fechar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm_delete_message:"Esta ação não pode ser desfeita.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparo",cooking_time:"Cozimento",total_time:"Total"},Ut={number_of_days:"Para configurar a exibição do calendário:\n• 0 = hoje\n• 1 = amanhã\n• 2 = depois de amanhã\n• etc...",no_url:"Configure a URL Mealie para ativar imagens e links para receitas."},Lt={invalid_config:"Configuração inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Erro ao remover refeição"},Ot={integration:"Mealie integration",entry_types:"Tipos de refeição para exibir",loading:"Carregando...",mealie_url:"URL do Mealie",number_of_recipes:"Número de receitas para exibir",number_of_recipes_helper:"Número de receitas para exibir (padrão 10).",settings_recipes_card:"Configuração de exibição",settings_title_layout:"Layout",show_image:"Exibir imagem",show_rating:"Exibir avaliação",show_servings:"Porções e Quantidade",show_description:"Exibir descrição",show_prep_time:"Exibir tempo de preparo",show_cooking_time:"Exibir tempo de cozimento",show_total_time:"Exibir tempo total",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Exibição de refeições",day_offset:"dia"},Nt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},Bt={cards:jt,common:It,dialog:Pt,info:Ut,error:Lt,editor:Ot,time:Nt},Ht={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Mostrar as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Mostrar as suas receitas da instância Mealie",view_recipe:"Ver receita",delete_mealplan:"Remover do plano"},Vt={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Pequeno-almoço",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche"},Wt={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",close:"Fechar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm_delete_message:"Esta ação não pode ser desfeita.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparação",cooking_time:"Cozimento",total_time:"Total"},Ft={number_of_days:"Para configurar a exibição do calendário:\n• 0 = hoje\n• 1 = amanhã\n• 2 = depois de amanhã\n• etc...",no_url:"Configure o URL Mealie para ativar imagens e links para receitas."},Kt={invalid_config:"Configuração inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Erro ao remover refeição"},qt={integration:"Mealie integration",entry_types:"Tipos de refeição a exibir",loading:"A carregar...",mealie_url:"URL do Mealie",number_of_recipes:"Número de receitas a exibir",number_of_recipes_helper:"Número de receitas a exibir (padrão 10).",settings_recipes_card:"Configuração de exibição",settings_title_layout:"Disposição",show_image:"Mostrar imagem",show_rating:"Mostrar avaliação",show_servings:"Porções e quantidade",show_description:"Mostrar descrição",show_prep_time:"Mostrar tempo de preparação",show_cooking_time:"Mostrar tempo de cozedura",show_total_time:"Mostrar tempo total",layout_recipes_horizontal:"horizontal",layout_recipes_vertical:"vertical",recipes_layout:"Exibição de refeições",day_offset:"dia"},Gt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},Zt={cards:Ht,common:Vt,dialog:Wt,info:Ft,error:Kt,editor:qt,time:Gt},Qt={name_mealplan:"Plan de Mese Mealie",description_mealplan:"Afișează mesele zilei",name_recipes:"Rețete Mealie",description_recipes:"Afișează rețetele tale din instanța Mealie",view_recipe:"Vezi rețeta",delete_mealplan:"Șterge din plan"},Jt={no_recipe:"Nicio rețetă",no_mealplan:"Nicio masă",today:"Astăzi",breakfast:"Micul dejun",lunch:"Prânz",dinner:"Cină",side:"Garnitură",dessert:"Desert",drink:"Băutură",snack:"Gustare"},Yt={add_to_mealplan:"Adaugă la planul de mese",add_recipe_to_mealplan:"Adaugă la planul de mese",select_date:"Selectează o dată",select_meal_type:"Tipul mesei",recipe_added_success:"Rețetă adăugată la plan",cancel:"Anulează",close:"Închide",add:"Adaugă",mealplan_deleted_success:"Masă ștearsă din plan",confirm_delete_title:"Ștergeți această masă?",confirm_delete_message:"Această acțiune nu poate fi anulată.",confirm:"Confirmă",ingredients:"Ingrediente",instructions:"Instrucțiuni",times:"Timpi",prep_time:"Pregătire",cooking_time:"Gătit",total_time:"Total"},Xt={number_of_days:"Pentru a configura afișarea calendarului:\n• 0 = astăzi\n• 1 = mâine\n• 2 = poimâine\n• etc...",no_url:"Configurează URL-ul Mealie pentru a activa imaginile și linkurile către rețete."},ei={invalid_config:"Configurare invalidă",no_integration:"Select a Mealie integration in the card settings",missing_config:"Eroare la încărcarea configurației",error_loading:"Eroare la încărcarea datelor",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Eroare la ștergerea mesei"},ti={integration:"Mealie integration",entry_types:"Tipuri de mese de afișat",loading:"Se încarcă...",mealie_url:"URL Mealie",number_of_recipes:"Număr de rețete de afișat",number_of_recipes_helper:"Număr de rețete de afișat (implicit 10).",settings_recipes_card:"Configurare afișare",settings_title_layout:"Aspect",show_image:"Afișează imaginea",show_rating:"Afișează evaluarea",show_servings:"Porții și Cantitate",show_description:"Afișează descrierea",show_prep_time:"Afișează timpul de preparare",show_cooking_time:"Afișează timpul de gătit",show_total_time:"Afișează timpul total",layout_recipes_horizontal:"orizontal",layout_recipes_vertical:"vertical",recipes_layout:"Afișare mese",day_offset:"zi"},ii={hour:"oră",hours:"ore",minute:"minut",minutes:"minute",hour_short:"h",minute_short:"min"},ai={cards:Qt,common:Jt,dialog:Yt,info:Xt,error:ei,editor:ti,time:ii};const ni={da:Object.freeze({__proto__:null,cards:xe,common:ke,default:Re,dialog:Ee,editor:Se,error:Me,info:Ae,time:Ce}),de:Object.freeze({__proto__:null,cards:Te,common:De,default:Oe,dialog:je,editor:Ue,error:Pe,info:Ie,time:Le}),en:Object.freeze({__proto__:null,cards:Ne,common:Be,default:qe,dialog:He,editor:Fe,error:We,info:Ve,time:Ke}),es:Object.freeze({__proto__:null,cards:Ge,common:Ze,default:tt,dialog:Qe,editor:Xe,error:Ye,info:Je,time:et}),fr:Object.freeze({__proto__:null,cards:it,common:at,default:dt,dialog:nt,editor:st,error:ot,info:rt,time:lt}),it:Object.freeze({__proto__:null,cards:ct,common:pt,default:ft,dialog:ht,editor:ut,error:mt,info:_t,time:gt}),nl:Object.freeze({__proto__:null,cards:yt,common:vt,default:kt,dialog:bt,editor:zt,error:$t,info:wt,time:xt}),pl:Object.freeze({__proto__:null,cards:Et,common:At,default:Dt,dialog:Mt,editor:Rt,error:Ct,info:St,time:Tt}),"pt-BR":Object.freeze({__proto__:null,cards:jt,common:It,default:Bt,dialog:Pt,editor:Ot,error:Lt,info:Ut,time:Nt}),pt:Object.freeze({__proto__:null,cards:Ht,common:Vt,default:Zt,dialog:Wt,editor:qt,error:Kt,info:Ft,time:Gt}),ro:Object.freeze({__proto__:null,cards:Qt,common:Jt,default:ai,dialog:Yt,editor:ti,error:ei,info:Xt,time:ii})};function ri(e,t){try{return e.split(".").reduce((e,t)=>e[t],ni[t])}catch{return}}function oi(e,t,i,a){const n=ri(t,e)??ri(t,"en")??t;return i&&a?n.replace(i,a):n}const si={breakfast:1,lunch:2,dinner:3,side:4,dessert:5,drink:6,snack:7};let li=null,di=null,ci=null;function pi(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function hi(e,t){const[i,a,n]=e.split("-").map(Number),r=new Date(i,a-1,n),o=new Date;return o.setHours(0,0,0,0),r.getTime()===o.getTime()?oi(t.locale?.language??"en","common.today"):function(e,t){return ue(t).format(e)}(r,t.locale)}function _i(e,t="en"){if(!e)return"";const i=e.toLowerCase().trim(),{hourPattern:a,minutePattern:n}=function(e){if(li===e&&di&&ci)return{hourPattern:di,minutePattern:ci};const t=[oi(e,"time.hour"),oi(e,"time.hours")].filter(Boolean),i=[oi(e,"time.minute"),oi(e,"time.minutes")].filter(Boolean);return li=e,di=new RegExp(`(\\d+)\\s*(?:${t.join("|")})`,"i"),ci=new RegExp(`(\\d+)\\s*(?:${i.join("|")})`,"i"),{hourPattern:di,minutePattern:ci}}(t),r=i.match(a),o=i.match(n);if(!r&&!o)return i.replace(/\s+/g," ").trim();const s=[];return r&&s.push(`${r[1]} ${oi(t,"time.hour_short")}`),o&&s.push(`${o[1]} ${oi(t,"time.minute_short")}`),s.join(" ")}function mi(e,t="en"){if(!e)return"";return{breakfast:oi(t,"common.breakfast"),lunch:oi(t,"common.lunch"),dinner:oi(t,"common.dinner"),side:oi(t,"common.side"),dessert:oi(t,"common.dessert"),drink:oi(t,"common.drink"),snack:oi(t,"common.snack")}[e]||e.toUpperCase()}function ui(e,t){const i=t instanceof Error?t.message:oi("en","error.error_loading");return new Error(`${oi("en",e)}: ${i}`)}async function gi(e){const t=await e.callWS({type:"config_entries/get",domain:ye}),i=t[0]?.entry_id;if(!i)throw new Error(oi("en","error.missing_config"));return i}async function fi(e,t,i,a){const n=a||await gi(e),r=await e.callService(ye,t,{config_entry_id:n,...i},void 0,void 0,!0);return r?.response??null}async function yi(e,t={}){try{const i=await fi(e,"get_recipes",{result_limit:t.resultLimit||10},t.configEntryId);return i?.recipes?.items||[]}catch(e){throw ui("error.error_loading",e)}}async function vi(e,t={}){try{const{startDate:i,endDate:a}=function(e,t,i){const a=pi(new Date);if(void 0!==e){const t=new Date;t.setDate(t.getDate()+e);const i=pi(t);return e>=0?{startDate:a,endDate:i}:{startDate:i,endDate:a}}return{startDate:t??a,endDate:i??t??a}}(t.days,t.startDate,t.endDate),n=await fi(e,"get_mealplan",{start_date:i,end_date:a},t.configEntryId);return(n?.mealplan||[]).sort((e,t)=>(si[e.entry_type]||999)-(si[t.entry_type]||999))}catch(e){throw ui("error.error_loading",e)}}function bi(e){const t=e.currentTarget;t&&t.classList.toggle("portrait",t.naturalHeight>t.naturalWidth)}const wi=o`
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
`;function $i(e,t){if(!e.image)return null;if(e.image.startsWith("/")||e.image.startsWith("http"))return e.image;if(!t)return null;return`${t.replace(/\/$/,"")}/api/media/recipes/${e.recipe_id||e.slug}/images/original.webp`}class zi extends oe{constructor(){super(...arguments),this.error=null,this._loading=!1,this._initialized=!1,this._watchSignature=""}localize(e,t,i){return oi(this.hass?.locale?.language??"en",e,t,i)}watchedEntityIds(){return[]}findMealieEntities(e){const t=this.hass,i=this.config?.config_entry_id??null,a=t?.entities,n=`${e}.`;if(!a){const e=t?.states??{};return Object.keys(e).filter(e=>e.startsWith(n)&&e.includes("mealie"))}const r=t?.devices;return Object.keys(a).filter(e=>{if(!e.startsWith(n))return!1;const t=a[e];if(!t||"mealie"!==t.platform)return!1;if(i){if(t.config_entry_id)return t.config_entry_id===i;const e=t.device_id&&r?r[t.device_id]:void 0;if(e?.config_entries)return e.config_entries.includes(i)}return!0})}_getWatchedEntityIds(){const e=this.config?.config_entry_id??null;return void 0!==this._watchedIds&&this._watchedIdsKey===e&&0!==this._watchedIds.length||(this._watchedIdsKey=e,this._watchedIds=this.watchedEntityIds()),this._watchedIds}_computeWatchSignature(){const e=this._getWatchedEntityIds();if(!e.length)return"";const t=this.hass?.states??{};return e.map(e=>{const i=t[e];return i?`${e}=${i.state}@${i.last_updated}`:`${e}=∅`}).join("|")}_maybeRefreshOnEntityChange(){if(!this._initialized||this._loading)return;const e=this._computeWatchSignature();e&&(this._watchSignature?e!==this._watchSignature&&(this._watchSignature=e,this._initialized=!1,this.loadData()):this._watchSignature=e)}disconnectedCallback(){super.disconnectedCallback(),this._watchSignature="",this._watchedIds=void 0,this._watchedIdsKey=void 0}willUpdate(e){super.willUpdate(e),e.has("hass")&&this.hass&&(!function(e,t,i,a){void 0===a&&(a=!1),e._themes||(e._themes={});var n=t.default_theme;("default"===i||i&&t.themes[i])&&(n=i);var r=ge({},e._themes);if("default"!==n){var o=t.themes[n];Object.keys(o).forEach(function(t){var i="--"+t;e._themes[i]="",r[i]=o[t]})}if(e.updateStyles?e.updateStyles(r):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,r),a){var s=document.querySelector("meta[name=theme-color]");if(s){s.hasAttribute("default-content")||s.setAttribute("default-content",s.getAttribute("content"));var l=r["--primary-color"]||s.getAttribute("default-content");s.setAttribute("content",l)}}}(this,this.hass.themes,this.hass.selectedTheme),this._maybeRefreshOnEntityChange()),!this.hass||this._initialized||this._loading||this.loadData()}renderLoading(){return H`
      <ha-card>
        <div class="card-content">
          <div class="loading">${this.localize("editor.loading")}</div>
        </div>
      </ha-card>
    `}renderError(){return H`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="error">${this.error}</ha-alert>
        </div>
      </ha-card>
    `}renderEmptyState(e){return H`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="info">${e}</ha-alert>
        </div>
      </ha-card>
    `}renderRecipeImage(e,t){if(!t)return W;const i=$i(e,this.config?.url);if(!i)return W;const a=i.startsWith("/")?`${this.hass.auth.data.hassUrl}${i}`:i;return H`
      <div class="recipe-card-image">
        <img src="${a}" alt="${e.name}" class="recipe-image" loading="lazy" @error=${this.handleImageError} @load=${bi} />
      </div>
    `}renderRecipeName(e){return H`<h4 class="recipe-name">${e.name??e.title}</h4>`}renderRecipeDescription(e,t){return t&&e?H`<div class="recipe-description">${e}</div>`:W}renderRecipeTimes(e,t,i,a){const n=this.hass?.locale?.language,r=[t&&e.prep_time?{icon:"mdi:knife",label:this.localize("dialog.prep_time"),value:_i(e.prep_time,n)}:null,i&&e.perform_time?{icon:"mdi:pot-steam",label:this.localize("dialog.cooking_time"),value:_i(e.perform_time,n)}:null,a&&e.total_time?{icon:"mdi:clock-time-three-outline",label:this.localize("dialog.total_time"),value:_i(e.total_time,n)}:null].filter(Boolean);return H`${r.length?H`<details class="details" open>
          <summary style="display:none"></summary>
          ${r.map(e=>H`
              <div class="time-row">
                <ha-icon class="time-row-icon" icon=${e.icon}></ha-icon>
                <span class="time-row-label">${e.label}</span>
                <span class="time-row-value">${e.value}</span>
              </div>
            `)}
        </details>`:W}`}renderTimeBadge(e,t){return H`
      <span class="time-badge">
        <ha-icon icon="${e}"></ha-icon>
        <span class="time-value">${t}</span>
      </span>
    `}renderStarRating(e,t){return e&&t&&e?H`
          <span class="star-rating">
            ${Array.from({length:5},(e,t)=>t+1).map(t=>H`<ha-icon icon=${e>=t?"mdi:star":e>=t-.5?"mdi:star-half-full":"mdi:star-outline"}></ha-icon>`)}
          </span>
        `:W}renderServings(e,t){return e&&t&&e?H`<span class="servings-badge">
          <ha-icon icon="mdi:circle-slice-1"></ha-icon>
          <span class="servings-value">${e}</span>
        </span>`:W}handleError(e){this.error=e instanceof Error?e.message:this.localize("error.error_loading")}renderDetailsSection(e,t,i){return H`
      <details open>
        <summary><ha-icon icon=${e}></ha-icon>${t}</summary>
        <div class="details-content">${i}</div>
      </details>
    `}handleImageError(e){const t=e.target.parentElement;t&&t.remove()}}zi.styles=wi,e([pe({attribute:!1})],zi.prototype,"hass",void 0),e([he()],zi.prototype,"error",void 0),e([he()],zi.prototype,"_loading",void 0),e([he()],zi.prototype,"_initialized",void 0);const xi=["breakfast","lunch","dinner","side","dessert","drink","snack"];function ki(e,t,i,a,n=!1){return H`
    <ha-formfield alignEnd spaceBetween .label=${i} .disabled=${n}>
      <ha-switch
        .checked=${t}
        .disabled=${n}
        @change=${e=>a(e.target.checked)}
      ></ha-switch>
    </ha-formfield>
  `}function Ei(e,t,i,a,n,r){return H`
    <ha-selector
      .hass=${e}
      .selector=${{number:{min:a,max:n,mode:"box",step:1}}}
      .value=${t??a}
      .label=${i}
      @value-changed=${e=>r(e.detail.value)}
    ></ha-selector>
  `}const Ai=o`
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
`;class Mi extends oe{constructor(){super(...arguments),this._imageIsHash=void 0,this._imageCheckEntry="__unset__",this._computeLabel=e=>({config_entry_id:this.localize("editor.integration")}[e.name]??e.name)}setConfig(e){this.config={...e}}localize(e,t,i){return oi(this.hass?.locale?.language??"en",e,t,i)}updated(e){if(super.updated(e),!this.hass||!this.config)return;const t=this.config.config_entry_id??null;t!==this._imageCheckEntry&&(this._imageCheckEntry=t,this._imageIsHash=void 0,this._checkImageFormat())}async _checkImageFormat(){try{const e=await yi(this.hass,{configEntryId:this.config?.config_entry_id??void 0,resultLimit:1}),t=e[0]?.image;this._imageIsHash=!t||!(t.startsWith("/")||t.startsWith("http"))}catch{this._imageIsHash=!0}}get _schemaTop(){return[{type:"expandable",title:this.localize("editor.integration"),icon:"mdi:connection",schema:[{name:"config_entry_id",selector:{config_entry:{integration:"mealie"}}}]}]}_toggleBool(e,t){this.config={...this.config,[e]:t},fe(this,"config-changed",{config:this.config})}_setValue(e,t){this.config={...this.config,[e]:t},fe(this,"config-changed",{config:this.config})}_valueChanged(e){const t={...e.detail.value};t.config_entry_id||(t.show_image=!1),this.config=t,fe(this,"config-changed",{config:this.config})}renderEditorLoading(){return H`<div>${this.localize("editor.loading")}</div>`}renderTopForm(){return H`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaTop}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}renderDisplayOptions(e){return H`
      ${this._imageIsHash?(t=this.hass,i=this.config.url,a=this.localize("editor.mealie_url"),n=e=>this._setValue("url",e||void 0),H`
    <ha-selector
      .hass=${t}
      .selector=${{text:{}}}
      .value=${i??""}
      .label=${a}
      @value-changed=${e=>n(e.detail.value)}
    ></ha-selector>
  `):W}
      ${ki(this.hass,!!this.config.show_image,this.localize("editor.show_image"),e=>this._toggleBool("show_image",e),!e)}
      ${ki(this.hass,!!this.config.show_rating,this.localize("editor.show_rating"),e=>this._toggleBool("show_rating",e))}
      ${ki(this.hass,!!this.config.show_servings,this.localize("editor.show_servings"),e=>this._toggleBool("show_servings",e))}
      ${ki(this.hass,!!this.config.show_description,this.localize("editor.show_description"),e=>this._toggleBool("show_description",e))}
      ${ki(this.hass,!!this.config.show_prep_time,this.localize("editor.show_prep_time"),e=>this._toggleBool("show_prep_time",e))}
      ${ki(this.hass,!!this.config.show_perform_time,this.localize("editor.show_cooking_time"),e=>this._toggleBool("show_perform_time",e))}
      ${ki(this.hass,!!this.config.show_total_time,this.localize("editor.show_total_time"),e=>this._toggleBool("show_total_time",e))}
    `;var t,i,a,n}}Mi.styles=Ai,e([pe({attribute:!1})],Mi.prototype,"hass",void 0),e([he()],Mi.prototype,"config",void 0),e([he()],Mi.prototype,"_imageIsHash",void 0);let Si=class extends Mi{get _entryTypeOptions(){return xi.map(e=>({value:e,label:this.localize(`common.${e}`)}))}_renderEntryTypes(){const e=new Set(this.config.entry_types??[]);return H`
      <div class="entry-type-chips">
        ${this._entryTypeOptions.map(({value:t,label:i})=>H`
            <button class="entry-chip ${e.has(t)?"active":""}" @click=${()=>this._toggleEntryType(t)}>${i}</button>
          `)}
      </div>
    `}get _schemaLayout(){return[{type:"expandable",title:this.localize("editor.settings_title_layout"),icon:"mdi:view-grid-outline",schema:[{name:"recipes_layout",selector:{select:{options:[{value:"horizontal",label:this.localize("editor.layout_recipes_horizontal")},{value:"vertical",label:this.localize("editor.layout_recipes_vertical")}]}}}]}]}render(){if(!this.hass||!this.config)return this.renderEditorLoading();const e=!!this.config.config_entry_id;return H`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.entry_types")}>
        <ha-icon slot="leading-icon" icon="mdi:silverware-fork-knife"></ha-icon>
        ${this._renderEntryTypes()}
      </ha-expansion-panel>
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${this.renderDisplayOptions(e)}
          ${Ei(this.hass,this.config.day_offset,this.localize("editor.day_offset"),0,30,e=>this._setValue("day_offset",Number(e)))}
        </div>
      </ha-expansion-panel>
      <ha-form .hass=${this.hass} .data=${this.config} .schema=${this._schemaLayout} @value-changed=${this._valueChanged}></ha-form>
    `}_toggleEntryType(e){const t=new Set(this.config.entry_types??[]);t.has(e)?t.delete(e):t.add(e),this.config={...this.config,entry_types:[...t]},fe(this,"config-changed",{config:this.config})}};Si=e([le("mealie-card-editor")],Si);let Ci=class extends zi{constructor(){super(...arguments),this.config={},this.recipe=null,this.configEntryId=null,this.open=!1,this._detail=null}updated(e){super.updated(e),e.has("open")&&this.open&&this.recipe&&!this._detail&&!this._loading&&this.loadData(),e.has("recipe")&&this.recipe&&this.open&&(this._detail=null,this.loadData())}async loadData(){if(this.open&&this.recipe&&this.hass){this._loading=!0,this.error=null;try{this._detail=await async function(e,t,i){try{const a=await fi(e,"get_recipe",{recipe_id:t},i);return a?.recipe??a??null}catch(e){throw ui("error.error_loading",e)}}(this.hass,this.recipe.slug??this.recipe.recipe_id,this.configEntryId??void 0),this._initialized=!0}catch(e){this.handleError(e)}finally{this._loading=!1}}}_close(){this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!1,composed:!1}))}_renderIngredient(e){const t=e.display??e.note??[e.quantity,e.unit,e.food?.name].filter(Boolean).join(" ");return H`<li>${t}</li>`}_renderInstruction(e,t){const i=e.text??"";return H`<li>${e.title?H`<strong>${e.title}: </strong>`:""}${i}</li>`}_renderDetail(){const e=this._detail,t=this.hass?.locale?.language,i=[e.prep_time?{icon:"mdi:knife",label:this.localize("dialog.prep_time"),value:_i(e.prep_time,t)}:null,e.perform_time?{icon:"mdi:pot-steam",label:this.localize("dialog.cooking_time"),value:_i(e.perform_time,t)}:null,e.total_time?{icon:"mdi:clock-time-three-outline",label:this.localize("dialog.total_time"),value:_i(e.total_time,t)}:null].filter(Boolean);return H`
      <div class="dialog-body">
        ${this.renderRecipeImage(e,this.config?.show_image)}

        <div class="recipe-meta">
          ${this.renderStarRating(e.rating,this.config.show_rating)} ${this.renderServings(e.recipe_servings,this.config.show_servings)}
        </div>

        ${i.length?this.renderDetailsSection("mdi:clock-outline",this.localize("dialog.times"),H`${i.map(e=>H`
                  <div class="time-row">
                    <ha-icon class="time-row-icon" icon=${e.icon}></ha-icon>
                    <span class="time-row-label">${e.label}</span>
                    <span class="time-row-value">${e.value}</span>
                  </div>
                `)}`):W}
        ${e.ingredients?.length?this.renderDetailsSection("mdi:food-apple",this.localize("dialog.ingredients"),H`<ul>
                ${e.ingredients.map(e=>this._renderIngredient(e))}
              </ul>`):W}
        ${e.instructions?.length?this.renderDetailsSection("mdi:chef-hat",this.localize("dialog.instructions"),H`<ol>
                ${e.instructions.map((e,t)=>this._renderInstruction(e,t))}
              </ol>`):W}
      </div>
    `}render(){return this.open&&this.recipe?H`
      <ha-dialog .open=${!0} width="medium" .hass=${this.hass} @closed=${this._close}>
        <div slot="headerTitle" class="header-container">
          <span class="recipe-name-highlight">${this.recipe.name}</span>
        </div>
        ${this._loading?H`<div class="loading">${this.localize("editor.loading")}</div>`:W}
        ${this.error?H`<div class="error">${this.error}</div>`:W} ${this._detail?this._renderDetail():W}
      </ha-dialog>
    `:W}};Ci.styles=wi,e([pe({attribute:!1})],Ci.prototype,"config",void 0),e([pe({attribute:!1})],Ci.prototype,"recipe",void 0),e([pe()],Ci.prototype,"configEntryId",void 0),e([pe({type:Boolean})],Ci.prototype,"open",void 0),e([pe()],Ci.prototype,"effectiveUrl",void 0),e([he()],Ci.prototype,"_detail",void 0),Ci=e([le("mealie-recipe-dialog")],Ci);class Ri extends zi{constructor(){super(...arguments),this.recipes=[],this._dialogRecipe=null,this._confirmDeleteEntry=null,this._onMealplanUpdated=()=>{this._initialized=!1,this.loadData()}}get _canDeleteMealplan(){return!!this.hass?.services?.[ye]?.delete_mealplan}_scheduleMidnightRefresh(){this._clearMidnightTimer();const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,5,0);this._midnightTimer=setTimeout(()=>{this._initialized=!1,this.loadData(),this._scheduleMidnightRefresh()},t.getTime()-e.getTime())}_clearMidnightTimer(){this._midnightTimer&&(clearTimeout(this._midnightTimer),this._midnightTimer=void 0)}watchedEntityIds(){return this.findMealieEntities("calendar")}connectedCallback(){super.connectedCallback(),this._initialized=!1,window.addEventListener("mealie-mealplan-updated",this._onMealplanUpdated),this._scheduleMidnightRefresh()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mealie-mealplan-updated",this._onMealplanUpdated),this._clearMidnightTimer()}setConfig(e){this.config=function(e){return ze(e,we,"Invalid configuration for mealie-mealplan-card")}(e),this._initialized=!1,this.error=null,this.hass&&this.loadData()}static getConfigElement(){return document.createElement("mealie-card-editor")}static getStubConfig(){return we}async loadData(){if(this.hass&&this.config&&!this._loading&&!this._initialized&&this.config.config_entry_id){this._loading=!0,this.error=null;try{const e=this.config.day_offset??0,t=new Date;t.setDate(t.getDate()+e);const i=pi(t);let a=[...await vi(this.hass,{configEntryId:this.config.config_entry_id,startDate:i,endDate:i})];this.config.entry_types?.length&&(a=a.filter(e=>this.config.entry_types.includes(e.entry_type))),this.recipes=a,this._initialized=!0}catch(e){this.handleError(e)}finally{this._loading=!1}}}render(){return this.hass&&this.config?this.config.config_entry_id?this._loading?this.renderLoading():this.error?this.renderError():this.recipes?.length?H`
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
    `:this.renderEmptyState(this.localize("common.no_mealplan")):this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}renderDateHeader(){const e=this.recipes[0]?.mealplan_date;return e?H`<div class="date-label">${hi(e,this.hass)}</div>`:W}_renderConfirmDeleteDialog(){const e=this._confirmDeleteEntry;return H`
      <ha-dialog
        .open=${null!==e}
        .hass=${this.hass}
        width="small"
        @closed=${()=>{this._confirmDeleteEntry=null}}
      >
        <div slot="headerTitle">${this.localize("dialog.confirm_delete_title")}</div>
        <div>
          ${e?H`
                <div>
                  <div class="recipe-type">${mi(e.entryType,this.hass?.locale?.language)}</div>
                  <div class="dial-recipe-date">${hi(e.date,this.hass)}</div>
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
    `}async _handleDelete(){const e=this._confirmDeleteEntry?.id??null;if(this._confirmDeleteEntry=null,null!==e)try{await async function(e,t,i){try{const a=i||await gi(e);await e.callService(ye,"delete_mealplan",{config_entry_id:a,mealplan_id:String(t)})}catch(e){throw ui("error.error_deleting_mealplan",e)}}(this.hass,e,this.config.config_entry_id??void 0),fe(this,"hass-notification",{message:this.localize("dialog.mealplan_deleted_success")}),this._initialized=!1,this.loadData()}catch{fe(this,"hass-notification",{message:this.localize("error.error_deleting_mealplan")})}}renderRecipeCard(e){return H`
      <div class="recipe-card">
        <div class="recipe-card-body">
          <div class="recipe-type">${mi(e.entry_type,this.hass?.locale?.language)}</div>
          ${e.recipe?this.renderRecipeWithData(e.recipe,e):this.renderRecipeWithoutData(e)}
        </div>
      </div>
    `}renderRecipeWithData(e,t){return H`
      ${this.renderCardButtons(e,t)} ${this.renderRecipeImage(e,this.config.show_image)}
      <div class="recipe-info">
        ${this.renderRecipeName(e)}

        <div class="recipe-meta">
          ${this.renderStarRating(e.rating,this.config.show_rating)} ${this.renderServings(e.recipe_servings,this.config.show_servings)}
        </div>
        ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
      </div>
      ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
    `}renderRecipeWithoutData(e){return H`
      <div class="card-buttons">
        ${this._canDeleteMealplan?H`<button
          class="delete-mealplan-button"
          title="${this.localize("cards.delete_mealplan")}"
          @click=${()=>{this._confirmDeleteEntry={id:e.mealplan_id,name:e.title??"",entryType:e.entry_type,date:e.mealplan_date}}}
        >
          <ha-icon icon="mdi:trash-can-outline"></ha-icon>
        </button>`:W}
      </div>
      <div class="recipe-info">${this.renderRecipeName(e)} ${this.renderRecipeDescription(e.description??"",!0)}</div>
    `}renderCardButtons(e,t){return H`
      <div class="card-buttons">
        <button
          class="view-recipe-button"
          title="${this.localize("cards.view_recipe")}"
          @click=${()=>{this._dialogRecipe=e}}
        >
          <ha-icon icon="mdi:book-open-variant"></ha-icon>
        </button>
        ${this._canDeleteMealplan?H`<button
          class="delete-mealplan-button"
          title="${this.localize("cards.delete_mealplan")}"
          @click=${()=>{this._confirmDeleteEntry={id:t.mealplan_id,name:e.name,entryType:t.entry_type,date:t.mealplan_date}}}
        >
          <ha-icon icon="mdi:trash-can-outline"></ha-icon>
        </button>`:W}
      </div>
    `}}Ri.styles=wi,e([he()],Ri.prototype,"config",void 0),e([he()],Ri.prototype,"recipes",void 0),e([he()],Ri.prototype,"_dialogRecipe",void 0),e([he()],Ri.prototype,"_confirmDeleteEntry",void 0);let Ti=class extends Mi{render(){if(!this.hass||!this.config)return this.renderEditorLoading();const e=!!this.config.config_entry_id;return H`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${this.renderDisplayOptions(e)}
          ${Ei(this.hass,this.config.result_limit,this.localize("editor.number_of_recipes"),1,100,e=>this._setValue("result_limit",e))}
        </div>
      </ha-expansion-panel>
    `}};Ti=e([le("mealie-recipe-card-editor")],Ti);let Di=class extends oe{constructor(){super(...arguments),this.recipe=null,this.configEntryId=null,this.open=!1,this._date="",this._entryType="dinner",this._submitting=!1,this._handleAdd=async()=>{if(this.recipe&&this._date&&this._entryType&&this.hass){this._submitting=!0;try{await async function(e,t){try{const i=t.configEntryId||await gi(e);await e.callService(ye,"set_mealplan",{config_entry_id:i,date:t.date,entry_type:t.entryType,...t.recipeId&&{recipe_id:t.recipeId},...t.noteTitle&&{note_title:t.noteTitle},...t.noteText&&{note_text:t.noteText}})}catch(e){throw ui("error.error_adding_recipe",e)}}(this.hass,{date:this._date,entryType:this._entryType,recipeId:this.recipe.recipe_id,configEntryId:this.configEntryId??void 0}),fe(this,"hass-notification",{message:this.localize("dialog.recipe_added_success")}),window.dispatchEvent(new CustomEvent("mealie-mealplan-updated")),this._close()}catch(e){fe(this,"hass-notification",{message:e instanceof Error?e.message:this.localize("error.error_adding_recipe")})}finally{this._submitting=!1}}}}localize(e,t,i){return oi(this.hass?.locale?.language??"en",e,t,i)}updated(e){super.updated(e),e.has("open")&&this.open&&(this._date=pi(new Date),this._entryType="dinner",this._submitting=!1)}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!1,composed:!1}))}_renderImage(){const e=$i(this.recipe,this.effectiveUrl);if(!e)return W;const t=e.startsWith("/")?`${this.hass.auth.data.hassUrl}${e}`:e;return H`
      <img
        class="detail-image"
        src=${t}
        alt=${this.recipe.name}
        @error=${e=>{e.target.style.display="none"}}
        @load=${e=>bi(e)}
      />
    `}_renderDateSelector(){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{date:{}}}
        .value=${this._date}
        .label=${this.localize("dialog.select_date")}
        @value-changed=${e=>{this._date=e.detail.value}}
      ></ha-selector>
    `}_renderMealTypeSelector(){const e=xi.map(e=>({value:e,label:this.localize(`common.${e}`)}));return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:e}}}
        .value=${this._entryType}
        .label=${this.localize("dialog.select_meal_type")}
        @value-changed=${e=>{this._entryType=e.detail.value}}
      ></ha-selector>
    `}_renderFooter(){return H`
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
    `}render(){return this.recipe?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <div slot="headerTitle" class="header-container">
          <span class="title-prefix"> ${this.localize("dialog.add_recipe_to_mealplan")} </span>
          <span class="recipe-name-highlight">${this.recipe.name}</span>
        </div>

        <div class="dialog-body">${this._renderImage()} ${this._renderDateSelector()} ${this._renderMealTypeSelector()}</div>

        ${this._renderFooter()}
      </ha-dialog>
    `:W}};Di.styles=wi,e([pe({attribute:!1})],Di.prototype,"hass",void 0),e([pe({attribute:!1})],Di.prototype,"recipe",void 0),e([pe()],Di.prototype,"configEntryId",void 0),e([pe({type:Boolean})],Di.prototype,"open",void 0),e([pe()],Di.prototype,"effectiveUrl",void 0),e([he()],Di.prototype,"_date",void 0),e([he()],Di.prototype,"_entryType",void 0),e([he()],Di.prototype,"_submitting",void 0),Di=e([le("mealie-mealplan-dialog")],Di);class ji extends zi{constructor(){super(...arguments),this.recipes=[],this._mealplanRecipe=null,this._dialogRecipe=null}setConfig(e){this.config=function(e){return ze(e,$e,"Invalid configuration for mealie-recipe-card")}(e),this._initialized=!1,this.hass&&this.loadData()}watchedEntityIds(){return this.findMealieEntities("sensor")}async loadData(){if(this.hass&&!this._loading&&!this._initialized&&this.config?.config_entry_id){this._loading=!0,this.error=null;try{this.recipes=await yi(this.hass,{configEntryId:this.config.config_entry_id,resultLimit:this.config.result_limit??10}),this._initialized=!0}catch(e){this.handleError(e),this._initialized=!0}finally{this._loading=!1}}}static getConfigElement(){return document.createElement("mealie-recipe-card-editor")}static getStubConfig(){return{...$e}}render(){return this.config?this.config.config_entry_id?this._loading?this.renderLoading():this.error?this.renderError():this.recipes?.length?H`
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
    `:this.renderEmptyState(this.localize("common.no_recipe")):this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}renderRecipes(){return H`
      <ha-card>
        <div class="card-content">
          <div class="recipes-container">${this.recipes.map(e=>this.renderRecipe(e))}</div>
        </div>
      </ha-card>
    `}renderCardButtons(e){return H`
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
    `}renderRecipeInfo(e){return H`
      <div class="recipe-info">
        ${this.renderRecipeName(e)}
        <div class="recipe-meta">
          ${this.renderStarRating(e.rating,this.config.show_rating)}
          ${this.renderServings(e.recipe_servings,this.config.show_servings)}
        </div>
        ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
        ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
      </div>
    `}renderRecipe(e){return H`
      <div class="recipe-card">
        ${this.renderCardButtons(e)} ${this.renderRecipeImage(e,this.config.show_image)} ${this.renderRecipeInfo(e)}
      </div>
    `}}ji.styles=wi,e([he()],ji.prototype,"config",void 0),e([he()],ji.prototype,"recipes",void 0),e([he()],ji.prototype,"_mealplanRecipe",void 0),e([he()],ji.prototype,"_dialogRecipe",void 0);customElements.get("mealie-mealplan-card")||customElements.define("mealie-mealplan-card",Ri),customElements.get("mealie-recipe-card")||customElements.define("mealie-recipe-card",ji),window.customCards=window.customCards||[];[{type:"mealie-mealplan-card",name:`${oi("en","cards.name_mealplan")}`,description:`${oi("en","cards.description_mealplan")}`,configurable:!0,preview:!1,documentationURL:"https://github.com/domodom30/mealie-card"},{type:"mealie-recipe-card",name:`${oi("en","cards.name_recipes")}`,description:`${oi("en","cards.description_recipes")}`,configurable:!0,preview:!1,documentationURL:"https://github.com/domodom30/mealie-card"}].forEach(e=>{window.customCards?.some(t=>t.type===e.type)||window.customCards?.push(e)}),console.info("%c MEALIE-CARD %c 3.1.0","color: white; background: orange; font-weight: 700;","color: orange; background: white; font-weight: 700;");export{Ri as MealieMealplanCard,ji as MealieRecipeCard};
