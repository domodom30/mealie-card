const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),s=new WeakMap;let a=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...i)=>{const s=1===e.length?e[0]:i.reduce((i,t,s)=>i+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+e[s+1],e[0]);return new a(s,e,t)},r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,t))(i)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:_}=Object,h=globalThis,g=h.trustedTypes,u=g?g.emptyScript:"",m=h.reactiveElementPolyfillSupport,f=(e,i)=>e,v={toAttribute(e,i){switch(i){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,i){let t=e;switch(i){case Boolean:t=null!==e;break;case Number:t=null===e?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch(e){t=null}}return t}},y=(e,i)=>!o(e,i),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=b){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const t=Symbol(),s=this.getPropertyDescriptor(e,t,i);void 0!==s&&l(this.prototype,e,s)}}static getPropertyDescriptor(e,i,t){const{get:s,set:a}=d(this.prototype,e)??{get(){return this[i]},set(e){this[i]=e}};return{get:s,set(i){const n=s?.call(this);a?.call(this,i),this.requestUpdate(e,n,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,i=[...c(e),...p(e)];for(const t of i)this.createProperty(t,e[t])}const e=this[Symbol.metadata];if(null!==e){const i=litPropertyMetadata.get(e);if(void 0!==i)for(const[e,t]of i)this.elementProperties.set(e,t)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const e of t)i.unshift(r(e))}else void 0!==e&&i.push(r(e));return i}static _$Eu(e,i){const t=i.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const t of i.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),a=e.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,t){this._$AK(e,t)}_$ET(e,i){const t=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,t);if(void 0!==s&&!0===t.reflect){const a=(void 0!==t.converter?.toAttribute?t.converter:v).toAttribute(i,t.type);this._$Em=e,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,i){const t=this.constructor,s=t._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=t.getPropertyOptions(s),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=s;const n=a.fromAttribute(i,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,i,t,s=!1,a){if(void 0!==e){const n=this.constructor;if(!1===s&&(a=this[e]),t??=n.getPropertyOptions(e),!((t.hasChanged??y)(a,i)||t.useDefault&&t.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,t))))return;this.C(e,i,t)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,i,{useDefault:t,reflect:s,wrapped:a},n){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??i??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||t||(i=void 0),this._$AL.set(e,i)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,i]of this._$Ep)this[e]=i;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[i,t]of e){const{wrapped:e}=t,s=this[i];!0!==e||this._$AL.has(i)||void 0===s||this.C(i,void 0,t,s)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(i)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,m?.({ReactiveElement:w}),(h.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=e=>e,z=$.trustedTypes,x=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+S,T=`<${I}>`,M=document,R=()=>M.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,C=Array.isArray,D="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,P=/>/g,O=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,V=/"/g,U=/^(?:script|style|textarea|title)$/i,H=(e=>(i,...t)=>({_$litType$:e,strings:i,values:t}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,K=M.createTreeWalker(M,129);function W(e,i){if(!C(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(i):i}class Z{constructor({strings:e,_$litType$:i},t){let s;this.parts=[];let a=0,n=0;const r=e.length-1,o=this.parts,[l,d]=((e,i)=>{const t=e.length-1,s=[];let a,n=2===i?"<svg>":3===i?"<math>":"",r=j;for(let i=0;i<t;i++){const t=e[i];let o,l,d=-1,c=0;for(;c<t.length&&(r.lastIndex=c,l=r.exec(t),null!==l);)c=r.lastIndex,r===j?"!--"===l[1]?r=L:void 0!==l[1]?r=P:void 0!==l[2]?(U.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=a??j,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?O:'"'===l[3]?V:N):r===V||r===N?r=O:r===L||r===P?r=j:(r=O,a=void 0);const p=r===O&&e[i+1].startsWith("/>")?" ":"";n+=r===j?t+T:d>=0?(s.push(o),t.slice(0,d)+A+t.slice(d)+S+p):t+S+(-2===d?i:p)}return[W(e,n+(e[t]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),s]})(e,i);if(this.el=Z.createElement(l,t),K.currentNode=this.el.content,2===i||3===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=K.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(A)){const i=d[n++],t=s.getAttribute(e).split(S),r=/([.?@])?(.*)/.exec(i);o.push({type:1,index:a,name:r[2],strings:t,ctor:"."===r[1]?X:"?"===r[1]?ee:"@"===r[1]?ie:Y}),s.removeAttribute(e)}else e.startsWith(S)&&(o.push({type:6,index:a}),s.removeAttribute(e));if(U.test(s.tagName)){const e=s.textContent.split(S),i=e.length-1;if(i>0){s.textContent=z?z.emptyScript:"";for(let t=0;t<i;t++)s.append(e[t],R()),K.nextNode(),o.push({type:2,index:++a});s.append(e[i],R())}}}else if(8===s.nodeType)if(s.data===I)o.push({type:2,index:a});else{let e=-1;for(;-1!==(e=s.data.indexOf(S,e+1));)o.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,i){const t=M.createElement("template");return t.innerHTML=e,t}}function G(e,i,t=e,s){if(i===F)return i;let a=void 0!==s?t._$Co?.[s]:t._$Cl;const n=E(i)?void 0:i._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,t,s)),void 0!==s?(t._$Co??=[])[s]=a:t._$Cl=a),void 0!==a&&(i=G(e,a._$AS(e,i.values),a,s)),i}class Q{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:t}=this._$AD,s=(e?.creationScope??M).importNode(i,!0);K.currentNode=s;let a=K.nextNode(),n=0,r=0,o=t[0];for(;void 0!==o;){if(n===o.index){let i;2===o.type?i=new J(a,a.nextSibling,this,e):1===o.type?i=new o.ctor(a,o.name,o.strings,this,e):6===o.type&&(i=new te(a,this,e)),this._$AV.push(i),o=t[++r]}n!==o?.index&&(a=K.nextNode(),n++)}return K.currentNode=M,s}p(e){let i=0;for(const t of this._$AV)void 0!==t&&(void 0!==t.strings?(t._$AI(e,t,i),i+=t.strings.length-2):t._$AI(e[i])),i++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,t,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=t,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===e?.nodeType&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=G(this,e,i),E(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>C(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:t}=e,s="number"==typeof t?this._$AC(e):(void 0===t.el&&(t.el=Z.createElement(W(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===s)this._$AH.p(i);else{const e=new Q(s,this),t=e.u(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let i=q.get(e.strings);return void 0===i&&q.set(e.strings,i=new Z(e)),i}k(e){C(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let t,s=0;for(const a of e)s===i.length?i.push(t=new J(this.O(R()),this.O(R()),this,this.options)):t=i[s],t._$AI(a),s++;s<i.length&&(this._$AR(t&&t._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const i=k(e).nextSibling;k(e).remove(),e=i}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,t,s,a){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=a,t.length>2||""!==t[0]||""!==t[1]?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=B}_$AI(e,i=this,t,s){const a=this.strings;let n=!1;if(void 0===a)e=G(this,e,i,0),n=!E(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const s=e;let r,o;for(e=a[0],r=0;r<a.length-1;r++)o=G(this,s[t+r],i,r),o===F&&(o=this._$AH[r]),n||=!E(o)||o!==this._$AH[r],o===B?e=B:e!==B&&(e+=(o??"")+a[r+1]),this._$AH[r]=o}n&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class ee extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class ie extends Y{constructor(e,i,t,s,a){super(e,i,t,s,a),this.type=5}_$AI(e,i=this){if((e=G(this,e,i,0)??B)===F)return;const t=this._$AH,s=e===B&&t!==B||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,a=e!==B&&(t===B||s);s&&this.element.removeEventListener(this.name,this,t),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,i,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const se={I:J},ae=$.litHtmlPolyfillSupport;ae?.(Z,J),($.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;let re=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,i,t)=>{const s=t?.renderBefore??i;let a=s._$litPart$;if(void 0===a){const e=t?.renderBefore??null;s._$litPart$=a=new J(i.insertBefore(R(),e),e,void 0,t??{})}return a._$AI(e),a})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};re._$litElement$=!0,re.finalized=!0,ne.litElementHydrateSupport?.({LitElement:re});const oe=ne.litElementPolyfillSupport;oe?.({LitElement:re}),(ne.litElementVersions??=[]).push("4.2.2");const le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},de=(e=le,i,t)=>{const{kind:s,metadata:a}=t;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(t.name,e),"accessor"===s){const{name:s}=t;return{set(t){const a=i.get.call(this);i.set.call(this,t),this.requestUpdate(s,a,e,!0,t)},init(i){return void 0!==i&&this.C(s,void 0,e,i),i}}}if("setter"===s){const{name:s}=t;return function(t){const a=this[s];i.call(this,t),this.requestUpdate(s,a,e,!0,t)}}throw Error("Unsupported decorator location: "+s)};function ce(e){return(i,t)=>"object"==typeof t?de(e,i,t):((e,i,t)=>{const s=i.hasOwnProperty(t);return i.constructor.createProperty(t,e),s?Object.getOwnPropertyDescriptor(i,t):void 0})(e,i,t)}function pe(e){return ce({...e,state:!0,attribute:!1})}const _e=1,he=2,ge=6,ue=e=>(...i)=>({_$litDirective$:e,values:i});let me=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,t){this._$Ct=e,this._$AM=i,this._$Ci=t}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};const fe="important",ve=" !"+fe,ye=ue(class extends me{constructor(e){if(super(e),e.type!==_e||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((i,t)=>{const s=e[t];return null==s?i:i+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[i]){const{style:t}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(i)),this.render(i);for(const e of this.ft)null==i[e]&&(this.ft.delete(e),e.includes("-")?t.removeProperty(e):t[e]=null);for(const e in i){const s=i[e];if(null!=s){this.ft.add(e);const i="string"==typeof s&&s.endsWith(ve);e.includes("-")||i?t.setProperty(e,i?s.slice(0,-11):s,i?fe:""):t[e]=s}}return F}}),be="mealie",we=9999,$e="view_recipe",ke="add_to_mealplan",ze="view_recipe",xe="edit_mealplan",Ae="none",Se={show_image:!1,show_rating:!1,show_servings:!1,show_prep_time:!0,show_total_time:!0,show_perform_time:!0,show_description:!1,show_categories:!1,show_tags:!1},Ie="home",Te={url:"",recipe_view:"dialog",mealie_group_slug:Ie},Me={type:"custom:mealie-mealplan-card",entry_types:[],recipes_layout:"vertical",days_layout:"vertical",day_offset:0,recipes_columns:2,days_columns:2,show_add_recipe_button:!0,show_random_button:!0,show_note_button:!0,show_navigation:!1,show_plan_shopping_button:!1,show_recipe_menu:!0,show_view_recipe_button:!0,show_shopping_list_button:!0,show_edit_mealplan_button:!0,show_delete_mealplan_button:!0,default_shopping_list_id:"",recipe_tap_action:ze,recipe_hold_action:xe,recipe_double_tap_action:Ae,...Se,...Te},Re={type:"custom:mealie-recipe-card",result_limit:we,show_search:!1,show_favorites_only:!1,show_favorite:!1,show_import_button:!1,show_category_filters:!1,show_tag_filters:!1,show_surprise_button:!1,sort_by:"none",page_size:0,show_recipe_menu:!0,show_view_recipe_button:!0,show_add_to_mealplan_button:!0,show_shopping_list_button:!0,default_shopping_list_id:"",recipe_tap_action:$e,recipe_hold_action:ke,recipe_double_tap_action:Ae,...Se,...Te},Ee={type:"custom:mealie-shopping-list-card",show_completed:!0,show_add_item:!0};function Ce(e,i){const t={...e};for(const e of Object.keys(i))t[e]=t[e]??i[e];return t}const De=["breakfast","lunch","dinner","side","dessert","drink","snack"],je=["none","name","rating","random"];var Le={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Vis dagens måltider",name_recipes:"Mealie Opskrifter",description_recipes:"Vis dine opskrifter fra Mealie-instansen",view_recipe:"Vis opskrift",day_actions:"Dagens handlinger",recipe_actions:"Opskriftshandlinger",delete_mealplan:"Fjern fra plan",edit_mealplan:"Rediger måltidsplan",random_mealplan:"Tilfældigt måltid",name_shopping_list:"Mealie indkøbsliste",description_shopping_list:"Afkryds og tilføj varer på en Mealie-indkøbsliste",surprise_recipe:"Overrask mig",filter_recipes:"Filtrer opskrifter",previous_period:"Forrige periode",next_period:"Næste periode",previous_page:"Forrige opskrifter",next_page:"Næste opskrifter"},Pe={no_recipe:"Ingen opskrift",no_mealplan:"Intet måltid",today:"I dag",breakfast:"Morgenmad",lunch:"Frokost",dinner:"Aftensmad",side:"Tilbehør",dessert:"Dessert",drink:"Drik",snack:"Snack",search_placeholder:"Søg opskrifter..."},Oe={add_to_mealplan:"Tilføj til måltidsplan",add_recipe_to_mealplan:"Tilføj til måltidsplan",select_date:"Vælg en dato",select_meal_type:"Måltidstype",select_recipe:"Vælg en opskrift",view_as_list:"Listevisning",view_as_grid:"Gittervisning",recipe_added_success:"Opskrift tilføjet til plan",cancel:"Annuller",add:"Tilføj",mealplan_deleted_success:"Måltid fjernet fra plan",confirm_delete_title:"Fjern dette måltid?",confirm:"Bekræft",ingredients:"Ingredienser",instructions:"Vejledning",times:"Tider",prep_time:"Forberedelse",cooking_time:"Tilberedning",total_time:"Total",add_note_to_mealplan:"Tilføj en note",note_title:"Titel",note_text:"Note (valgfri)",note_added_success:"Note tilføjet til plan",servings:"Portioner",decrease_servings:"Færre portioner",increase_servings:"Flere portioner",edit_mealplan:"Rediger måltidsplan",mealplan_updated_success:"Måltidsplan opdateret",save:"Gem",add_favorite:"Tilføj til favoritter",remove_favorite:"Fjern fra favoritter",add_to_shopping_list:"Tilføj til indkøbsliste",select_shopping_list:"Vælg indkøbsliste",shopping_list_quantity:"Mængdemultiplikator",recipe_added_to_shopping_list:"Opskrift tilføjet til indkøbsliste",no_shopping_lists:"Ingen indkøbslister tilgængelige",no_ingredients:"Ingen ingredienser tilgængelige",next:"Næste",back:"Tilbage",select_all:"Vælg alle",import_recipe:"Importer opskrift",import_url:"Opskrift-URL",import_include_tags:"Inkluder tags",import:"Importer",recipe_imported_success:"Opskrift importeret",open_in_mealie:"Åbn i Mealie",start_cooking:"Start madlavningstilstand",exit_cooking:"Afslut madlavningstilstand",step:"Trin",previous_step:"Forrige",next_step:"Næste",step_ingredients:"Til dette trin",add_timer:"Timer",start_timer:"Start timer",dismiss_timer:"Luk timer",timer_done:"Timer færdig: {timer}",add_item:"Tilføj vare",item_name:"Ny vare",completed_items:"Udført",clear_completed:"Ryd udførte",remove_item:"Fjern vare",empty_shopping_list:"Indkøbslisten er tom",all_ingredients:"Alle ingredienser",recipe_source:"Kilde",recipe_yield:"Udbytte",replace_recipe:"Erstat opskrift",add_plan_to_shopping_list:"Tilføj madplanen til indkøbslisten",planned_recipes:"Planlagte opskrifter",plan_added_to_shopping_list:"{count} opskrifter tilføjet til indkøbslisten",add_ingredients_to_shopping_list:"Tilføj {count} ingredienser til listen",ingredients_added_to_shopping_list:"{count} ingredienser tilføjet til indkøbslisten",add_ingredient_to_shopping_list:"Tilføj 1 ingrediens til listen",ingredient_added_to_shopping_list:"1 ingrediens tilføjet til indkøbslisten"},Ne={no_url:"Konfigurer Mealie URL for at aktivere billeder og opskriftslinks."},Ve={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fejl ved indlæsning af konfiguration",error_loading:"Fejl ved indlæsning af data",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fejl ved sletning af måltid",error_updating_mealplan:"Fejl ved opdatering af måltidsplan",no_shopping_list:"Ingen Mealie-indkøbsliste fundet. Vælg en i kortets indstillinger",error_updating_shopping_list:"Fejl ved opdatering af indkøbslisten",timer_action_failed:"Handling ved timerens afslutning mislykkedes"},Ue={integration:"Mealie integration",entry_types:"Måltidstyper der skal vises",loading:"Indlæser...",mealie_url:"Mealie URL",image_url:"Billed-URL eller lokal sti (valgfri)",number_of_recipes:"Antal opskrifter der skal vises",settings_recipes_card:"Visningskonfiguration",settings_infos:"Opskriftsinformation",settings_image:"Billede",settings_times:"Tider",settings_title_layout:"Layout",show_image:"Vis billede",show_rating:"Vis bedømmelse",show_favorite:"Vis favorit",show_servings:"Portioner & Mængde",show_description:"Vis beskrivelse",show_prep_time:"Vis forberedelsestid",show_cooking_time:"Vis tilberedningstid",show_total_time:"Vis total tid",layout_mode:"Visning",days_columns:"Kolonner med dage",recipes_columns:"Kolonner med måltider",layout_vertical:"Lodret",layout_horizontal:"Måltider side om side",layout_side_by_side:"Dage side om side",layout_days_and_meals_side_by_side:"Dage og måltider side om side",days_range:"Viste dage",days_range_helper:"Et tal (f.eks. 3 = om 3 dage) eller et interval (f.eks. 0-6 = i dag og de 6 følgende dage)",show_search:"Søgelinje",show_favorites_only:"Kun favoritter",show_import_button:"Vis importknap",show_random_button:"Vis knap til tilfældig måltid",settings_meal_actions:"Måltidshandlinger",settings_recipe_actions:"Handlinger på opskrifter",show_add_recipe_button:"Vis knap Tilføj opskrift",show_note_button:"Vis knap Tilføj note",settings_recipe_view:"Åbning af opskrifter",recipe_view:"Åbn opskriften i",recipe_view_dialog:"Dialog i kortet",recipe_view_webview:"Integreret Mealie-visning",recipe_view_browser:"Ny browserfane",recipe_tap_action:"Tryk på en opskrift",recipe_hold_action:"Langt tryk på en opskrift",recipe_double_tap_action:"Dobbelttryk på en opskrift",recipe_action_none:"Ingenting",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Vis knappen til menuen ⋮",mealie_group_slug:"Mealie-gruppe (slug)",settings_language:"Sprog",language:"Sprog",language_auto:"Automatisk (Home Assistant-sprog)",language_helper:"Tilsidesætter Home Assistant-sproget for dette kort, f.eks. for at bruge en regional variant som fr-CA.",shopping_list_entity:"Indkøbsliste",title:"Titel",show_completed:"Vis udførte varer",show_add_item:"Vis feltet til tilføjelse",settings_shopping_list_card:"Indstillinger for indkøbslistekort",show_categories:"Vis kategorier",show_tags:"Vis tags",show_category_filters:"Vis kategorifiltre",show_tag_filters:"Vis tag-filtre",show_surprise_button:"Vis overraskelsesknap",sort_by:"Sortér opskrifter",sort_none:"Mealie-rækkefølge",sort_name:"Navn",sort_rating:"Bedømmelse",sort_random:"Tilfældig",show_navigation:"Vis periodenavigation",show_plan_shopping_button:"Vis knap til at tilføje madplanen til indkøbslisten",settings_timers:"Timere",timer_done_action:"Handling når en timer slutter",timer_done_action_help:'Home Assistant-handling, der køres når en madlavningstimer slutter (TTS på en højttaler, notifikation…). I dens data: {timer} = varighed med ord ("5 sekunder"), {label} = navn på kortet, {step} = trinnummer, {recipe} = opskriftens navn.',page_size:"Opskrifter pr. side (0 = ingen sideopdeling)"},He={hour:"time",hours:"timer",minute:"minut",minutes:"minutter",hour_short:"t",minute_short:"min",second:"sekund",seconds:"sekunder"},Fe={cards:Le,common:Pe,dialog:Oe,info:Ne,error:Ve,editor:Ue,time:He},Be=Object.freeze({__proto__:null,cards:Le,common:Pe,default:Fe,dialog:Oe,editor:Ue,error:Ve,info:Ne,time:He}),qe={name_mealplan:"Mealie Speiseplan",description_mealplan:"Heutige Mahlzeiten anzeigen",name_recipes:"Mealie Rezepte",description_recipes:"Zeigen Sie Ihre Rezepte von der Mealie-Instanz an",view_recipe:"Rezept anzeigen",day_actions:"Aktionen des Tages",recipe_actions:"Rezeptaktionen",delete_mealplan:"Aus dem Plan löschen",edit_mealplan:"Eintrag bearbeiten",random_mealplan:"Zufälliges Gericht",name_shopping_list:"Mealie Einkaufsliste",description_shopping_list:"Artikel einer Mealie-Einkaufsliste abhaken und hinzufügen",surprise_recipe:"Überrasch mich",filter_recipes:"Rezepte filtern",previous_period:"Vorheriger Zeitraum",next_period:"Nächster Zeitraum",previous_page:"Vorherige Rezepte",next_page:"Nächste Rezepte"},Ke={no_recipe:"Kein Rezept",no_mealplan:"Keine Mahlzeit",today:"Heute",breakfast:"Frühstück",lunch:"Mittagessen",dinner:"Abendessen",side:"Beilage",dessert:"Dessert",drink:"Getränk",snack:"Snack",search_placeholder:"Rezepte suchen..."},We={add_to_mealplan:"Zum Speiseplan hinzufügen",add_recipe_to_mealplan:"zum Speiseplan hinzufügen",select_date:"Datum auswählen",select_meal_type:"Mahlzeittyp",select_recipe:"Rezept auswählen",view_as_list:"Listenansicht",view_as_grid:"Rasteransicht",recipe_added_success:"Rezept zum Plan hinzugefügt",cancel:"Abbrechen",add:"Hinzufügen",mealplan_deleted_success:"Mahlzeit aus dem Plan entfernt",confirm_delete_title:"Diese Mahlzeit entfernen?",confirm:"Bestätigen",ingredients:"Zutaten",instructions:"Anleitung",times:"Zeiten",prep_time:"Vorbereitung",cooking_time:"Kochen",total_time:"Gesamt",add_note_to_mealplan:"Notiz hinzufügen",note_title:"Titel",note_text:"Notiz (optional)",note_added_success:"Notiz zum Plan hinzugefügt",servings:"Portionen",decrease_servings:"Weniger Portionen",increase_servings:"Mehr Portionen",edit_mealplan:"Eintrag bearbeiten",mealplan_updated_success:"Eintrag aktualisiert",save:"Speichern",add_favorite:"Zu Favoriten hinzufügen",remove_favorite:"Aus Favoriten entfernen",add_to_shopping_list:"Zur Einkaufsliste hinzufügen",select_shopping_list:"Einkaufsliste auswählen",shopping_list_quantity:"Mengenmultiplikator",recipe_added_to_shopping_list:"Rezept zur Einkaufsliste hinzugefügt",no_shopping_lists:"Keine Einkaufslisten verfügbar",no_ingredients:"Keine Zutaten verfügbar",next:"Weiter",back:"Zurück",select_all:"Alle auswählen",import_recipe:"Rezept importieren",import_url:"Rezept-URL",import_include_tags:"Tags einschließen",import:"Importieren",recipe_imported_success:"Rezept importiert",open_in_mealie:"In Mealie öffnen",start_cooking:"Kochmodus starten",exit_cooking:"Kochmodus beenden",step:"Schritt",previous_step:"Zurück",next_step:"Weiter",step_ingredients:"Für diesen Schritt",add_timer:"Timer",start_timer:"Timer starten",dismiss_timer:"Timer schließen",timer_done:"Timer abgelaufen: {timer}",add_item:"Artikel hinzufügen",item_name:"Neuer Artikel",completed_items:"Erledigt",clear_completed:"Erledigte entfernen",remove_item:"Artikel entfernen",empty_shopping_list:"Die Einkaufsliste ist leer",all_ingredients:"Alle Zutaten",recipe_source:"Quelle",recipe_yield:"Ergibt",replace_recipe:"Rezept ersetzen",add_plan_to_shopping_list:"Essensplan zur Einkaufsliste hinzufügen",planned_recipes:"Geplante Rezepte",plan_added_to_shopping_list:"{count} Rezepte zur Einkaufsliste hinzugefügt",add_ingredients_to_shopping_list:"{count} Zutaten zur Liste hinzufügen",ingredients_added_to_shopping_list:"{count} Zutaten zur Einkaufsliste hinzugefügt",add_ingredient_to_shopping_list:"1 Zutat zur Liste hinzufügen",ingredient_added_to_shopping_list:"1 Zutat zur Einkaufsliste hinzugefügt"},Ze={no_url:"Konfigurieren Sie die Mealie-URL, um Bilder und Rezeptlinks zu aktivieren."},Ge={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fehler beim Laden der Konfiguration",error_loading:"Fehler beim Laden der Daten",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fehler beim Löschen der Mahlzeit",error_updating_mealplan:"Fehler beim Aktualisieren des Speiseplans",no_shopping_list:"Keine Mealie-Einkaufsliste gefunden. Wähle eine in den Karteneinstellungen aus",error_updating_shopping_list:"Fehler beim Aktualisieren der Einkaufsliste",timer_action_failed:"Aktion bei Timer-Ende fehlgeschlagen"},Qe={integration:"Mealie integration",entry_types:"Anzuzeigende Mahlzeittypen",loading:"Wird geladen...",mealie_url:"Mealie URL",image_url:"Bild-URL oder lokaler Pfad (optional)",number_of_recipes:"Anzahl der anzuzeigenden Rezepte",settings_recipes_card:"Anzeigekonfiguration",settings_infos:"Rezeptinfos",settings_image:"Bild",settings_times:"Zeiten",settings_title_layout:"Layout",show_image:"Bild anzeigen",show_rating:"Bewertung anzeigen",show_favorite:"Favorit anzeigen",show_servings:"Portionen & Menge",show_description:"Beschreibung anzeigen",show_prep_time:"Vorbereitungszeit anzeigen",show_cooking_time:"Kochzeit anzeigen",show_total_time:"Gesamtzeit anzeigen",layout_mode:"Anordnung",days_columns:"Spalten für Tage",recipes_columns:"Spalten für Mahlzeiten",layout_vertical:"Vertikal",layout_horizontal:"Mahlzeiten nebeneinander",layout_side_by_side:"Tage nebeneinander",layout_days_and_meals_side_by_side:"Tage und Mahlzeiten nebeneinander",days_range:"Angezeigte Tage",days_range_helper:"Eine Zahl (z. B. 3 = in 3 Tagen) oder ein Bereich (z. B. 0-6 = heute und die 6 folgenden Tage)",show_search:"Suchleiste",show_favorites_only:"Nur Favoriten",show_import_button:"Import-Schaltfläche anzeigen",show_random_button:"Zufalls-Mahlzeit-Schaltfläche anzeigen",settings_meal_actions:"Mahlzeiten-Aktionen",settings_recipe_actions:"Aktionen für Rezepte",show_add_recipe_button:"Rezept-Button anzeigen",show_note_button:"Notiz-Button anzeigen",settings_recipe_view:"Öffnen von Rezepten",recipe_view:"Rezept öffnen in",recipe_view_dialog:"Dialog in der Karte",recipe_view_webview:"Eingebettete Mealie-Ansicht",recipe_view_browser:"Neuer Browser-Tab",recipe_tap_action:"Tippen auf ein Rezept",recipe_hold_action:"Langes Drücken auf ein Rezept",recipe_double_tap_action:"Doppeltippen auf ein Rezept",recipe_action_none:"Nichts",settings_recipe_menu:"Menü ⋮",show_recipe_menu:"Schaltfläche für das Menü ⋮ anzeigen",mealie_group_slug:"Mealie-Gruppe (Slug)",settings_language:"Sprache",language:"Sprache",language_auto:"Automatisch (Home-Assistant-Sprache)",language_helper:"Überschreibt die Home-Assistant-Sprache für diese Karte, z. B. für eine regionale Variante wie fr-CA.",shopping_list_entity:"Einkaufsliste",title:"Titel",show_completed:"Erledigte Artikel anzeigen",show_add_item:"Eingabefeld zum Hinzufügen anzeigen",settings_shopping_list_card:"Einstellungen der Einkaufslisten-Karte",show_categories:"Kategorien anzeigen",show_tags:"Tags anzeigen",show_category_filters:"Kategoriefilter anzeigen",show_tag_filters:"Tag-Filter anzeigen",show_surprise_button:"Überraschungs-Button anzeigen",sort_by:"Rezepte sortieren",sort_none:"Mealie-Reihenfolge",sort_name:"Name",sort_rating:"Bewertung",sort_random:"Zufällig",show_navigation:"Zeitraum-Navigation anzeigen",show_plan_shopping_button:"Button zum Hinzufügen des Essensplans zur Einkaufsliste anzeigen",settings_timers:"Timer",timer_done_action:"Aktion bei Timer-Ende",timer_done_action_help:"Home-Assistant-Aktion, die beim Ablauf eines Koch-Timers ausgeführt wird (TTS auf einem Lautsprecher, Benachrichtigung…). In ihren Daten: {timer} = ausgeschriebene Dauer („5 Sekunden“), {label} = auf der Karte angezeigter Name, {step} = Schrittnummer, {recipe} = Rezeptname.",page_size:"Rezepte pro Seite (0 = keine Seitenaufteilung)"},Je={hour:"Stunde",hours:"Stunden",minute:"Minute",minutes:"Minuten",hour_short:"Std",minute_short:"Min",second:"Sekunde",seconds:"Sekunden"},Ye={cards:qe,common:Ke,dialog:We,info:Ze,error:Ge,editor:Qe,time:Je},Xe=Object.freeze({__proto__:null,cards:qe,common:Ke,default:Ye,dialog:We,editor:Qe,error:Ge,info:Ze,time:Je}),ei={name_mealplan:"Mealie Meal Plan",description_mealplan:"Display today's meals",name_recipes:"Mealie Recipes",description_recipes:"Display your recipes from Mealie instance",view_recipe:"View recipe",day_actions:"Day actions",recipe_actions:"Recipe actions",delete_mealplan:"Delete from plan",edit_mealplan:"Edit meal plan entry",random_mealplan:"Random meal",name_shopping_list:"Mealie Shopping List",description_shopping_list:"Check off and add items to a Mealie shopping list",surprise_recipe:"Surprise me",filter_recipes:"Filter recipes",previous_period:"Previous period",next_period:"Next period",previous_page:"Previous recipes",next_page:"Next recipes"},ii={no_recipe:"No recipe",no_mealplan:"No meal",today:"Today",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",side:"Side",dessert:"Dessert",drink:"Drink",snack:"Snack",search_placeholder:"Search recipes..."},ti={add_to_mealplan:"Add to meal plan",add_recipe_to_mealplan:"Add to meal plan",select_date:"Select a date",select_meal_type:"Meal type",select_recipe:"Select a recipe",view_as_list:"List view",view_as_grid:"Grid view",recipe_added_success:"Recipe added to plan",cancel:"Cancel",add:"Add",mealplan_deleted_success:"Meal removed from plan",confirm_delete_title:"Remove this meal?",confirm:"Confirm",ingredients:"Ingredients",instructions:"Instructions",times:"Times",prep_time:"Preparation",cooking_time:"Cooking",total_time:"Total",add_note_to_mealplan:"Add a note",note_title:"Title",note_text:"Note (optional)",note_added_success:"Note added to plan",servings:"Servings",decrease_servings:"Decrease servings",increase_servings:"Increase servings",edit_mealplan:"Edit meal plan entry",mealplan_updated_success:"Meal plan entry updated",save:"Save",add_favorite:"Add to favorites",remove_favorite:"Remove from favorites",add_to_shopping_list:"Add to shopping list",select_shopping_list:"Select shopping list",shopping_list_quantity:"Quantity multiplier",recipe_added_to_shopping_list:"Recipe added to shopping list",no_shopping_lists:"No shopping lists available",no_ingredients:"No ingredients available",next:"Next",back:"Back",select_all:"Select all",import_recipe:"Import recipe",import_url:"Recipe URL",import_include_tags:"Include tags",import:"Import",recipe_imported_success:"Recipe imported",open_in_mealie:"Open in Mealie",start_cooking:"Start cooking mode",exit_cooking:"Exit cooking mode",step:"Step",previous_step:"Previous",next_step:"Next",step_ingredients:"For this step",add_timer:"Timer",start_timer:"Start timer",dismiss_timer:"Dismiss timer",timer_done:"Timer finished: {timer}",add_item:"Add item",item_name:"New item",completed_items:"Completed",clear_completed:"Clear completed",remove_item:"Remove item",empty_shopping_list:"The shopping list is empty",all_ingredients:"All ingredients",recipe_source:"Source",recipe_yield:"Yield",replace_recipe:"Replace recipe",add_plan_to_shopping_list:"Add meal plan to shopping list",planned_recipes:"Planned recipes",plan_added_to_shopping_list:"{count} recipes added to the shopping list",add_ingredients_to_shopping_list:"Add {count} ingredients to the list",ingredients_added_to_shopping_list:"{count} ingredients added to the shopping list",add_ingredient_to_shopping_list:"Add 1 ingredient to the list",ingredient_added_to_shopping_list:"1 ingredient added to the shopping list"},si={no_url:"Configure Mealie URL to enable images and recipe links."},ai={no_integration:"Select a Mealie integration in the card settings",missing_config:"Error loading configuration",error_loading:"Error loading data",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Error deleting meal",error_updating_mealplan:"Error updating meal plan",no_shopping_list:"No Mealie shopping list found. Select one in the card settings",error_updating_shopping_list:"Error updating the shopping list",timer_action_failed:"Timer end action failed"},ni={integration:"Mealie integration",entry_types:"Meal types to display",loading:"Loading...",mealie_url:"Mealie URL",image_url:"Image URL or local path (optional)",number_of_recipes:"Number of recipes to display",settings_recipes_card:"Display configuration",settings_infos:"Recipe details",settings_image:"Image",settings_times:"Times",settings_title_layout:"Layout",show_image:"Show image",show_rating:"Show rating",show_favorite:"Favorite recipe",show_servings:"Serving & Quantity",show_description:"Show description",show_prep_time:"Show preparation time",show_cooking_time:"Show cooking time",show_total_time:"Show total time",layout_mode:"Layout",days_columns:"Day columns",recipes_columns:"Meal columns",layout_vertical:"Vertical",layout_horizontal:"Meals side by side",layout_side_by_side:"Days side by side",layout_days_and_meals_side_by_side:"Days and meals side by side",days_range:"Days shown",days_range_helper:"A number (e.g. 3 = 3 days from now) or a range (e.g. 0-6 = today and the next 6 days)",show_search:"Search bar",show_favorites_only:"Favorites only",show_import_button:"Show import button",show_random_button:"Show random meal button",settings_meal_actions:"Meal actions",settings_recipe_actions:"Recipe actions",show_add_recipe_button:"Show add recipe button",show_note_button:"Show add note button",settings_recipe_view:"Opening recipes",recipe_view:"Open the recipe in",recipe_view_dialog:"Dialog inside the card",recipe_view_webview:"Embedded Mealie view",recipe_view_browser:"New browser tab",recipe_tap_action:"Tap on a recipe",recipe_hold_action:"Long press on a recipe",recipe_double_tap_action:"Double tap on a recipe",recipe_action_none:"Nothing",settings_recipe_menu:"⋮ menu",show_recipe_menu:"Show the ⋮ menu button",mealie_group_slug:"Mealie group (slug)",settings_language:"Language",language:"Language",language_auto:"Automatic (Home Assistant language)",language_helper:"Overrides the Home Assistant language for this card, e.g. to use a regional variant such as fr-CA.",shopping_list_entity:"Shopping list",title:"Title",show_completed:"Show completed items",show_add_item:"Show the add item field",settings_shopping_list_card:"Shopping list card settings",show_categories:"Show categories",show_tags:"Show tags",show_category_filters:"Show category filters",show_tag_filters:"Show tag filters",show_surprise_button:"Show surprise button",sort_by:"Sort recipes",sort_none:"Mealie order",sort_name:"Name",sort_rating:"Rating",sort_random:"Random",show_navigation:"Show period navigation",show_plan_shopping_button:"Show add meal plan to shopping list button",settings_timers:"Timers",timer_done_action:"Action when a timer ends",timer_done_action_help:'Home Assistant action run when a cooking timer ends (TTS on a speaker, notification…). In its data: {timer} = duration in words ("5 seconds"), {label} = name shown on the card, {step} = step number, {recipe} = recipe name.',page_size:"Recipes per page (0 = no pagination)"},ri={hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min",second:"second",seconds:"seconds"},oi={cards:ei,common:ii,dialog:ti,info:si,error:ai,editor:ni,time:ri},li=Object.freeze({__proto__:null,cards:ei,common:ii,default:oi,dialog:ti,editor:ni,error:ai,info:si,time:ri}),di={name_mealplan:"Plan de Comidas Mealie",description_mealplan:"Mostrar las comidas del día",name_recipes:"Recetas Mealie",description_recipes:"Mostrar tus recetas desde la instancia Mealie",view_recipe:"Ver receta",day_actions:"Acciones del día",recipe_actions:"Acciones de la receta",delete_mealplan:"Eliminar del plan",edit_mealplan:"Editar entrada del plan",random_mealplan:"Comida aleatoria",name_shopping_list:"Lista de la compra Mealie",description_shopping_list:"Marca y añade artículos a una lista de la compra de Mealie",surprise_recipe:"Sorpréndeme",filter_recipes:"Filtrar recetas",previous_period:"Periodo anterior",next_period:"Periodo siguiente",previous_page:"Recetas anteriores",next_page:"Recetas siguientes"},ci={no_recipe:"Ninguna receta",no_mealplan:"Ninguna comida",today:"Hoy",breakfast:"Desayuno",lunch:"Almuerzo",dinner:"Cena",side:"Acompañamiento",dessert:"Postre",drink:"Bebida",snack:"Merienda",search_placeholder:"Buscar recetas..."},pi={add_to_mealplan:"Añadir al plan de comidas",add_recipe_to_mealplan:"Añadir al plan de comidas",select_date:"Seleccionar una fecha",select_meal_type:"Tipo de comida",select_recipe:"Seleccionar una receta",view_as_list:"Vista de lista",view_as_grid:"Vista de cuadrícula",recipe_added_success:"Receta añadida al plan",cancel:"Cancelar",add:"Añadir",mealplan_deleted_success:"Comida eliminada del plan",confirm_delete_title:"¿Eliminar esta comida?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instrucciones",times:"Tiempos",prep_time:"Preparación",cooking_time:"Cocción",total_time:"Total",add_note_to_mealplan:"Añadir una nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota añadida al plan",servings:"Porciones",decrease_servings:"Reducir porciones",increase_servings:"Aumentar porciones",edit_mealplan:"Editar entrada del plan",mealplan_updated_success:"Entrada del plan actualizada",save:"Guardar",add_favorite:"Añadir a favoritos",remove_favorite:"Eliminar de favoritos",add_to_shopping_list:"Añadir a la lista de la compra",select_shopping_list:"Seleccionar lista de la compra",shopping_list_quantity:"Multiplicador de cantidad",recipe_added_to_shopping_list:"Receta añadida a la lista de la compra",no_shopping_lists:"No hay listas de la compra disponibles",no_ingredients:"No hay ingredientes disponibles",next:"Siguiente",back:"Atrás",select_all:"Seleccionar todo",import_recipe:"Importar receta",import_url:"URL de la receta",import_include_tags:"Incluir etiquetas",import:"Importar",recipe_imported_success:"Receta importada",open_in_mealie:"Abrir en Mealie",start_cooking:"Iniciar modo cocina",exit_cooking:"Salir del modo cocina",step:"Paso",previous_step:"Anterior",next_step:"Siguiente",step_ingredients:"Para este paso",add_timer:"Temporizador",start_timer:"Iniciar temporizador",dismiss_timer:"Cerrar temporizador",timer_done:"Temporizador terminado: {timer}",add_item:"Añadir artículo",item_name:"Nuevo artículo",completed_items:"Completados",clear_completed:"Borrar completados",remove_item:"Eliminar artículo",empty_shopping_list:"La lista de la compra está vacía",all_ingredients:"Todos los ingredientes",recipe_source:"Fuente",recipe_yield:"Rendimiento",replace_recipe:"Reemplazar receta",add_plan_to_shopping_list:"Añadir el plan de comidas a la lista de compras",planned_recipes:"Recetas planificadas",plan_added_to_shopping_list:"{count} recetas añadidas a la lista de compras",add_ingredients_to_shopping_list:"Añadir {count} ingredientes a la lista",ingredients_added_to_shopping_list:"{count} ingredientes añadidos a la lista de compras",add_ingredient_to_shopping_list:"Añadir 1 ingrediente a la lista",ingredient_added_to_shopping_list:"1 ingrediente añadido a la lista de compras"},_i={no_url:"Configure la URL de Mealie para activar las imágenes y los enlaces a las recetas."},hi={no_integration:"Select a Mealie integration in the card settings",missing_config:"Error al cargar la configuración",error_loading:"Error al cargar datos",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Error al eliminar la comida",error_updating_mealplan:"Error al actualizar el plan de comidas",no_shopping_list:"No se encontró ninguna lista de la compra de Mealie. Selecciona una en los ajustes de la tarjeta",error_updating_shopping_list:"Error al actualizar la lista de la compra",timer_action_failed:"Error en la acción de fin de temporizador"},gi={integration:"Mealie integration",entry_types:"Tipos de comida a mostrar",loading:"Cargando...",mealie_url:"URL de Mealie",image_url:"URL o ruta local de las imágenes (opcional)",number_of_recipes:"Número de recetas a mostrar",settings_recipes_card:"Configuración de visualización",settings_infos:"Información",settings_image:"Imagen",settings_times:"Tiempos",settings_title_layout:"Diseño",show_image:"Mostrar imagen",show_rating:"Mostrar valoración",show_favorite:"Mostrar favorito",show_servings:"Porciones y Cantidad",show_description:"Mostrar descripción",show_prep_time:"Mostrar tiempo de preparación",show_cooking_time:"Mostrar tiempo de cocción",show_total_time:"Mostrar tiempo total",layout_mode:"Disposición",days_columns:"Columnas de días",recipes_columns:"Columnas de comidas",layout_vertical:"Vertical",layout_horizontal:"Comidas en paralelo",layout_side_by_side:"Días en paralelo",layout_days_and_meals_side_by_side:"Días y comidas en paralelo",days_range:"Días mostrados",days_range_helper:"Un número (p. ej. 3 = dentro de 3 días) o un intervalo (p. ej. 0-6 = hoy y los 6 días siguientes)",show_search:"Barra de búsqueda",show_favorites_only:"Solo favoritos",show_import_button:"Mostrar botón de importación",show_random_button:"Mostrar botón de comida aleatoria",settings_meal_actions:"Acciones de comidas",settings_recipe_actions:"Acciones sobre las recetas",show_add_recipe_button:"Mostrar botón Añadir receta",show_note_button:"Mostrar botón Añadir nota",settings_recipe_view:"Apertura de recetas",recipe_view:"Abrir la receta en",recipe_view_dialog:"Diálogo dentro de la tarjeta",recipe_view_webview:"Vista Mealie integrada",recipe_view_browser:"Nueva pestaña del navegador",recipe_tap_action:"Toque en una receta",recipe_hold_action:"Pulsación larga en una receta",recipe_double_tap_action:"Doble toque en una receta",recipe_action_none:"Nada",settings_recipe_menu:"Menú ⋮",show_recipe_menu:"Mostrar el botón del menú ⋮",mealie_group_slug:"Grupo de Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma de Home Assistant)",language_helper:"Sustituye el idioma de Home Assistant para esta tarjeta, por ejemplo para usar una variante regional como fr-CA.",shopping_list_entity:"Lista de la compra",title:"Título",show_completed:"Mostrar artículos completados",show_add_item:"Mostrar el campo para añadir",settings_shopping_list_card:"Ajustes de la tarjeta de lista de la compra",show_categories:"Mostrar categorías",show_tags:"Mostrar etiquetas",show_category_filters:"Mostrar filtros por categoría",show_tag_filters:"Mostrar filtros por etiqueta",show_surprise_button:"Mostrar botón sorpresa",sort_by:"Ordenar recetas",sort_none:"Orden de Mealie",sort_name:"Nombre",sort_rating:"Valoración",sort_random:"Aleatorio",show_navigation:"Mostrar navegación por periodos",show_plan_shopping_button:"Mostrar botón para añadir el plan a la lista de compras",settings_timers:"Temporizadores",timer_done_action:"Acción al terminar un temporizador",timer_done_action_help:"Acción de Home Assistant ejecutada al terminar un temporizador de cocina (TTS en un altavoz, notificación…). En sus datos: {timer} = duración en palabras («5 segundos»), {label} = nombre mostrado en la tarjeta, {step} = número de paso, {recipe} = nombre de la receta.",page_size:"Recetas por página (0 = sin paginación)"},ui={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min",second:"segundo",seconds:"segundos"},mi={cards:di,common:ci,dialog:pi,info:_i,error:hi,editor:gi,time:ui},fi=Object.freeze({__proto__:null,cards:di,common:ci,default:mi,dialog:pi,editor:gi,error:hi,info:_i,time:ui}),vi={lunch:"Dîner",dinner:"Souper"},yi={common:vi},bi=Object.freeze({__proto__:null,common:vi,default:yi}),wi={name_shopping_list:"Liste d'épicerie Mealie",description_shopping_list:"Cochez et ajoutez des articles à une liste d'épicerie Mealie"},$i={breakfast:"Déjeuner",lunch:"Dîner",dinner:"Souper"},ki={add_to_shopping_list:"Ajouter à la liste d'épicerie",select_shopping_list:"Sélectionner une liste d'épicerie",recipe_added_to_shopping_list:"Recette ajoutée à la liste d'épicerie",no_shopping_lists:"Aucune liste d'épicerie disponible",empty_shopping_list:"La liste d'épicerie est vide",add_plan_to_shopping_list:"Ajouter le planning à la liste d'épicerie",plan_added_to_shopping_list:"{count} recettes ajoutées à la liste d'épicerie",add_ingredients_to_shopping_list:"Ajouter {count} ingrédients à la liste",ingredients_added_to_shopping_list:"{count} ingrédients ajoutés à la liste d'épicerie",add_ingredient_to_shopping_list:"Ajouter 1 ingrédient à la liste",ingredient_added_to_shopping_list:"1 ingrédient ajouté à la liste d'épicerie"},zi={shopping_list_entity:"Liste d'épicerie",settings_shopping_list_card:"Paramètres de la carte liste d'épicerie",show_plan_shopping_button:"Afficher le bouton d'ajout du planning à la liste d'épicerie"},xi={no_shopping_list:"Aucune liste d'épicerie Mealie trouvée. Sélectionnez-en une dans les paramètres de la carte",error_updating_shopping_list:"Erreur lors de la mise à jour de la liste d'épicerie"},Ai={cards:wi,common:$i,dialog:ki,editor:zi,error:xi},Si=Object.freeze({__proto__:null,cards:wi,common:$i,default:Ai,dialog:ki,editor:zi,error:xi}),Ii={name_mealplan:"Repas Mealie",description_mealplan:"Afficher les repas du jour",name_recipes:"Recettes Mealie",description_recipes:"Afficher vos recettes depuis l'instance Mealie",view_recipe:"Voir la recette",day_actions:"Actions du jour",recipe_actions:"Actions de la recette",delete_mealplan:"Supprimer du planning",edit_mealplan:"Modifier l'entrée du planning",random_mealplan:"Repas aléatoire",name_shopping_list:"Liste de courses Mealie",description_shopping_list:"Cochez et ajoutez des articles à une liste de courses Mealie",surprise_recipe:"Surprends-moi",filter_recipes:"Filtrer les recettes",previous_period:"Période précédente",next_period:"Période suivante",previous_page:"Recettes précédentes",next_page:"Recettes suivantes"},Ti={no_recipe:"Aucune recette",no_mealplan:"Aucun repas",today:"Aujourd'hui",breakfast:"Petit-déjeuner",lunch:"Déjeuner",dinner:"Dîner",side:"Accompagnement",dessert:"Dessert",drink:"Boisson",snack:"Collation",search_placeholder:"Rechercher une recette..."},Mi={add_to_mealplan:"Ajouter la recette au planning",add_recipe_to_mealplan:"Ajouter au planning",select_date:"Sélectionner une date",select_meal_type:"Type de repas",select_recipe:"Sélectionner une recette",view_as_list:"Vue liste",view_as_grid:"Vue grille",recipe_added_success:"Recette ajoutée au planning",cancel:"Annuler",add:"Ajouter",mealplan_deleted_success:"Repas supprimé du planning",confirm_delete_title:"Supprimer ce repas ?",confirm:"Confirmer",ingredients:"Ingrédients",instructions:"Instructions",times:"Temps",prep_time:"Préparation",cooking_time:"Cuisson",total_time:"Total",add_note_to_mealplan:"Ajouter une note",note_title:"Titre",note_text:"Note (facultatif)",note_added_success:"Note ajoutée au planning",servings:"Portions",decrease_servings:"Diminuer les portions",increase_servings:"Augmenter les portions",edit_mealplan:"Modifier l'entrée du planning",mealplan_updated_success:"Entrée du planning mise à jour",save:"Enregistrer",add_favorite:"Ajouter aux favoris",remove_favorite:"Retirer des favoris",add_to_shopping_list:"Ajouter à la liste de courses",select_shopping_list:"Sélectionner une liste de courses",shopping_list_quantity:"Multiplicateur de quantité",recipe_added_to_shopping_list:"Recette ajoutée à la liste de courses",no_shopping_lists:"Aucune liste de courses disponible",no_ingredients:"Aucun ingrédient disponible",next:"Suivant",back:"Retour",select_all:"Tout sélectionner",import_recipe:"Importer une recette",import_url:"URL de la recette",import_include_tags:"Inclure les tags",import:"Importer",recipe_imported_success:"Recette importée",open_in_mealie:"Ouvrir dans Mealie",start_cooking:"Lancer le mode cuisine",exit_cooking:"Quitter le mode cuisine",step:"Étape",previous_step:"Précédent",next_step:"Suivant",step_ingredients:"Pour cette étape",add_timer:"Minuteur",start_timer:"Démarrer le minuteur",dismiss_timer:"Fermer le minuteur",timer_done:"Minuteur terminé : {timer}",add_item:"Ajouter l'article",item_name:"Nouvel article",completed_items:"Terminés",clear_completed:"Vider les terminés",remove_item:"Supprimer l'article",empty_shopping_list:"La liste de courses est vide",all_ingredients:"Tous les ingrédients",recipe_source:"Source",recipe_yield:"Rendement",replace_recipe:"Remplacer la recette",add_plan_to_shopping_list:"Ajouter le planning à la liste de courses",planned_recipes:"Recettes planifiées",plan_added_to_shopping_list:"{count} recettes ajoutées à la liste de courses",add_ingredients_to_shopping_list:"Ajouter {count} ingrédients à la liste",ingredients_added_to_shopping_list:"{count} ingrédients ajoutés à la liste de courses",add_ingredient_to_shopping_list:"Ajouter 1 ingrédient à la liste",ingredient_added_to_shopping_list:"1 ingrédient ajouté à la liste de courses"},Ri={no_url:"Configurez l'URL Mealie pour activer les images et les liens vers les recettes."},Ei={no_integration:"Sélectionnez une intégration Mealie",missing_config:"Erreur de chargement de la configuration",error_loading:"Erreur de chargement des données",error_adding_recipe:"Erreur lors de l'ajout de la recette",error_deleting_mealplan:"Erreur lors de la suppression du repas",error_updating_mealplan:"Erreur lors de la mise à jour du repas",no_shopping_list:"Aucune liste de courses Mealie trouvée. Sélectionnez-en une dans les paramètres de la carte",error_updating_shopping_list:"Erreur lors de la mise à jour de la liste de courses",timer_action_failed:"Échec de l'action de fin de minuteur"},Ci={integration:"Intégration Mealie",entry_types:"Types de repas à afficher",loading:"Chargement...",mealie_url:"URL Mealie",image_url:"URL ou chemin local des images (facultatif)",number_of_recipes:"Nombre de recettes à afficher",settings_recipes_card:"Configuration de l'affichage",settings_infos:"Informations",settings_image:"Image",settings_times:"Temps",settings_title_layout:"Disposition",show_image:"Image",show_rating:"Note",show_favorite:"Ajouter au favoris",show_servings:"Portion & Quantité",show_description:"Description",show_prep_time:"Temps de préparation",show_cooking_time:"Temps de cuisson",show_total_time:"Temps total",layout_mode:"Disposition",days_columns:"Colonnes de jours",recipes_columns:"Colonnes de repas",layout_vertical:"Vertical",layout_horizontal:"Repas côte à côte",layout_side_by_side:"Jours côte à côte",layout_days_and_meals_side_by_side:"Jours et repas côte à côte",days_range:"Jours affichés",days_range_helper:"Un nombre (ex. 3 = J+3) ou une plage (ex. 0-6 = aujourd'hui et les 6 jours suivants)",show_search:"Barre de recherche",show_favorites_only:"Favoris uniquement",show_import_button:"Bouton d'import de recette",show_random_button:"Afficher le bouton repas aléatoire",settings_meal_actions:"Action sur les repas",settings_recipe_actions:"Actions sur les recettes",show_add_recipe_button:"Afficher le bouton Ajouter une recette",show_note_button:"Afficher le bouton Ajouter une note",settings_recipe_view:"Ouverture des recettes",recipe_view:"Ouvrir la recette dans",recipe_view_dialog:"Dialogue dans la carte",recipe_view_webview:"Vue Mealie intégrée",recipe_view_browser:"Nouvel onglet du navigateur",recipe_tap_action:"Appui sur une recette",recipe_hold_action:"Appui long sur une recette",recipe_double_tap_action:"Double appui sur une recette",recipe_action_none:"Rien",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Afficher le bouton du menu ⋮",mealie_group_slug:"Groupe Mealie (slug)",settings_language:"Langue",language:"Langue",language_auto:"Automatique (langue de Home Assistant)",language_helper:"Remplace la langue de Home Assistant pour cette carte, par exemple pour utiliser une variante régionale comme fr-CA.",shopping_list_entity:"Liste de courses",title:"Titre",show_completed:"Afficher les articles terminés",show_add_item:"Afficher le champ d'ajout",settings_shopping_list_card:"Paramètres de la carte liste de courses",show_categories:"Afficher les catégories",show_tags:"Afficher les tags",show_category_filters:"Afficher les filtres par catégorie",show_tag_filters:"Afficher les filtres par tag",show_surprise_button:"Afficher le bouton surprise",sort_by:"Trier les recettes",sort_none:"Ordre de Mealie",sort_name:"Nom",sort_rating:"Note",sort_random:"Aléatoire",show_navigation:"Afficher la navigation entre périodes",show_plan_shopping_button:"Afficher le bouton d'ajout du planning à la liste de courses",settings_timers:"Minuteurs",timer_done_action:"Action à la fin d'un minuteur",timer_done_action_help:"Action Home Assistant exécutée à la fin d'un minuteur de cuisine (TTS sur une enceinte, notification…). Dans ses données : {timer} = durée en toutes lettres (« 5 secondes »), {label} = nom affiché sur la carte, {step} = numéro de l'étape, {recipe} = nom de la recette.",page_size:"Recettes par page (0 = sans pagination)"},Di={hour:"heure",hours:"heures",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min",second:"seconde",seconds:"secondes"},ji={cards:Ii,common:Ti,dialog:Mi,info:Ri,error:Ei,editor:Ci,time:Di},Li={name_mealplan:"Piano Pasti Mealie",description_mealplan:"Visualizza i pasti del giorno",name_recipes:"Ricette Mealie",description_recipes:"Visualizza le tue ricette dall'istanza Mealie",view_recipe:"Vedi ricetta",day_actions:"Azioni del giorno",recipe_actions:"Azioni della ricetta",delete_mealplan:"Elimina dal piano",edit_mealplan:"Modifica voce del piano",random_mealplan:"Pasto casuale",name_shopping_list:"Lista della spesa Mealie",description_shopping_list:"Spunta e aggiungi articoli a una lista della spesa di Mealie",surprise_recipe:"Sorprendimi",filter_recipes:"Filtra ricette",previous_period:"Periodo precedente",next_period:"Periodo successivo",previous_page:"Ricette precedenti",next_page:"Ricette successive"},Pi={no_recipe:"Nessuna ricetta",no_mealplan:"Nessun pasto",today:"Oggi",breakfast:"Colazione",lunch:"Pranzo",dinner:"Cena",side:"Contorno",dessert:"Dolce",drink:"Bevanda",snack:"Spuntino",search_placeholder:"Cerca ricette..."},Oi={add_to_mealplan:"Aggiungi al piano pasti",add_recipe_to_mealplan:"Aggiungi al piano pasti",select_date:"Seleziona una data",select_meal_type:"Tipo di pasto",select_recipe:"Seleziona una ricetta",view_as_list:"Vista elenco",view_as_grid:"Vista griglia",recipe_added_success:"Ricetta aggiunta al piano",cancel:"Annulla",add:"Aggiungi",mealplan_deleted_success:"Pasto rimosso dal piano",confirm_delete_title:"Rimuovere questo pasto?",confirm:"Conferma",ingredients:"Ingredienti",instructions:"Istruzioni",times:"Tempi",prep_time:"Preparazione",cooking_time:"Cottura",total_time:"Totale",add_note_to_mealplan:"Aggiungi una nota",note_title:"Titolo",note_text:"Nota (opzionale)",note_added_success:"Nota aggiunta al piano",servings:"Porzioni",decrease_servings:"Riduci porzioni",increase_servings:"Aumenta porzioni",edit_mealplan:"Modifica voce del piano",mealplan_updated_success:"Voce del piano aggiornata",save:"Salva",add_favorite:"Aggiungi ai preferiti",remove_favorite:"Rimuovi dai preferiti",add_to_shopping_list:"Aggiungi alla lista della spesa",select_shopping_list:"Seleziona lista della spesa",shopping_list_quantity:"Moltiplicatore di quantità",recipe_added_to_shopping_list:"Ricetta aggiunta alla lista della spesa",no_shopping_lists:"Nessuna lista della spesa disponibile",no_ingredients:"Nessun ingrediente disponibile",next:"Avanti",back:"Indietro",select_all:"Seleziona tutto",import_recipe:"Importa ricetta",import_url:"URL ricetta",import_include_tags:"Includi tag",import:"Importa",recipe_imported_success:"Ricetta importata",open_in_mealie:"Apri in Mealie",start_cooking:"Avvia modalità cucina",exit_cooking:"Esci dalla modalità cucina",step:"Passaggio",previous_step:"Precedente",next_step:"Successivo",step_ingredients:"Per questo passaggio",add_timer:"Timer",start_timer:"Avvia timer",dismiss_timer:"Chiudi timer",timer_done:"Timer terminato: {timer}",add_item:"Aggiungi articolo",item_name:"Nuovo articolo",completed_items:"Completati",clear_completed:"Rimuovi completati",remove_item:"Rimuovi articolo",empty_shopping_list:"La lista della spesa è vuota",all_ingredients:"Tutti gli ingredienti",recipe_source:"Fonte",recipe_yield:"Resa",replace_recipe:"Sostituisci ricetta",add_plan_to_shopping_list:"Aggiungi il piano pasti alla lista della spesa",planned_recipes:"Ricette pianificate",plan_added_to_shopping_list:"{count} ricette aggiunte alla lista della spesa",add_ingredients_to_shopping_list:"Aggiungi {count} ingredienti alla lista",ingredients_added_to_shopping_list:"{count} ingredienti aggiunti alla lista della spesa",add_ingredient_to_shopping_list:"Aggiungi 1 ingrediente alla lista",ingredient_added_to_shopping_list:"1 ingrediente aggiunto alla lista della spesa"},Ni={no_url:"Configura l'URL Mealie per attivare le immagini e i link alle ricette."},Vi={no_integration:"Select a Mealie integration in the card settings",missing_config:"Errore di caricamento della configurazione",error_loading:"Errore di caricamento dei dati",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Errore durante l'eliminazione del pasto",error_updating_mealplan:"Errore durante l'aggiornamento del piano pasti",no_shopping_list:"Nessuna lista della spesa Mealie trovata. Selezionane una nelle impostazioni della scheda",error_updating_shopping_list:"Errore durante l'aggiornamento della lista della spesa",timer_action_failed:"Azione di fine timer non riuscita"},Ui={integration:"Mealie integration",entry_types:"Tipi di pasto da visualizzare",loading:"Caricamento...",mealie_url:"URL Mealie",image_url:"URL o percorso locale delle immagini (facoltativo)",number_of_recipes:"Numero di ricette da visualizzare",settings_recipes_card:"Configurazione della visualizzazione",settings_infos:"Informazioni",settings_image:"Immagine",settings_times:"Tempi",settings_title_layout:"Layout",show_image:"Mostra immagine",show_rating:"Mostra valutazione",show_favorite:"Mostra preferito",show_servings:"Porzioni e Quantità",show_description:"Mostra descrizione",show_prep_time:"Mostra tempo di preparazione",show_cooking_time:"Mostra tempo di cottura",show_total_time:"Mostra tempo totale",layout_mode:"Disposizione",days_columns:"Colonne dei giorni",recipes_columns:"Colonne dei pasti",layout_vertical:"Verticale",layout_horizontal:"Pasti affiancati",layout_side_by_side:"Giorni affiancati",layout_days_and_meals_side_by_side:"Giorni e pasti affiancati",days_range:"Giorni mostrati",days_range_helper:"Un numero (es. 3 = fra 3 giorni) o un intervallo (es. 0-6 = oggi e i 6 giorni successivi)",show_search:"Barra di ricerca",show_favorites_only:"Solo preferiti",show_import_button:"Mostra pulsante di importazione",show_random_button:"Mostra pulsante pasto casuale",settings_meal_actions:"Azioni sui pasti",settings_recipe_actions:"Azioni sulle ricette",show_add_recipe_button:"Mostra pulsante Aggiungi ricetta",show_note_button:"Mostra pulsante Aggiungi nota",settings_recipe_view:"Apertura delle ricette",recipe_view:"Apri la ricetta in",recipe_view_dialog:"Finestra nella scheda",recipe_view_webview:"Vista Mealie integrata",recipe_view_browser:"Nuova scheda del browser",recipe_tap_action:"Tocco su una ricetta",recipe_hold_action:"Pressione prolungata su una ricetta",recipe_double_tap_action:"Doppio tocco su una ricetta",recipe_action_none:"Niente",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostra il pulsante del menu ⋮",mealie_group_slug:"Gruppo Mealie (slug)",settings_language:"Lingua",language:"Lingua",language_auto:"Automatica (lingua di Home Assistant)",language_helper:"Sostituisce la lingua di Home Assistant per questa scheda, ad esempio per usare una variante regionale come fr-CA.",shopping_list_entity:"Lista della spesa",title:"Titolo",show_completed:"Mostra articoli completati",show_add_item:"Mostra il campo di aggiunta",settings_shopping_list_card:"Impostazioni della scheda lista della spesa",show_categories:"Mostra categorie",show_tags:"Mostra tag",show_category_filters:"Mostra filtri per categoria",show_tag_filters:"Mostra filtri per tag",show_surprise_button:"Mostra pulsante sorpresa",sort_by:"Ordina ricette",sort_none:"Ordine di Mealie",sort_name:"Nome",sort_rating:"Valutazione",sort_random:"Casuale",show_navigation:"Mostra navigazione tra periodi",show_plan_shopping_button:"Mostra pulsante per aggiungere il piano alla lista della spesa",settings_timers:"Timer",timer_done_action:"Azione alla fine di un timer",timer_done_action_help:"Azione di Home Assistant eseguita alla fine di un timer di cucina (TTS su un altoparlante, notifica…). Nei suoi dati: {timer} = durata in lettere («5 secondi»), {label} = nome mostrato sulla scheda, {step} = numero del passaggio, {recipe} = nome della ricetta.",page_size:"Ricette per pagina (0 = nessuna paginazione)"},Hi={hour:"ora",hours:"ore",minute:"minuto",minutes:"minuti",hour_short:"h",minute_short:"min",second:"secondo",seconds:"secondi"},Fi={cards:Li,common:Pi,dialog:Oi,info:Ni,error:Vi,editor:Ui,time:Hi},Bi={name_mealplan:"Mealie Maaltijdplan",description_mealplan:"Toon de maaltijden van vandaag",name_recipes:"Mealie Recepten",description_recipes:"Toon je recepten van de Mealie-instantie",view_recipe:"Recept bekijken",day_actions:"Acties voor de dag",recipe_actions:"Receptacties",delete_mealplan:"Verwijder uit plan",edit_mealplan:"Maaltijdplan bewerken",random_mealplan:"Willekeurige maaltijd",name_shopping_list:"Mealie boodschappenlijst",description_shopping_list:"Vink artikelen af en voeg ze toe aan een Mealie-boodschappenlijst",surprise_recipe:"Verras me",filter_recipes:"Recepten filteren",previous_period:"Vorige periode",next_period:"Volgende periode",previous_page:"Vorige recepten",next_page:"Volgende recepten"},qi={no_recipe:"Geen recept",no_mealplan:"Geen maaltijd",today:"Vandaag",breakfast:"Ontbijt",lunch:"Lunch",dinner:"Diner",side:"Bijgerecht",dessert:"Dessert",drink:"Drank",snack:"Snack",search_placeholder:"Recepten zoeken..."},Ki={add_to_mealplan:"Toevoegen aan maaltijdplan",add_recipe_to_mealplan:"toevoegen aan maaltijdplan",select_date:"Selecteer een datum",select_meal_type:"Maaltijdtype",select_recipe:"Selecteer een recept",view_as_list:"Lijstweergave",view_as_grid:"Rasterweergave",recipe_added_success:"Recept toegevoegd aan plan",cancel:"Annuleren",add:"Toevoegen",mealplan_deleted_success:"Maaltijd verwijderd uit plan",confirm_delete_title:"Deze maaltijd verwijderen?",confirm:"Bevestigen",ingredients:"Ingrediënten",instructions:"Instructies",times:"Tijden",prep_time:"Voorbereiding",cooking_time:"Koken",total_time:"Totaal",add_note_to_mealplan:"Notitie toevoegen",note_title:"Titel",note_text:"Notitie (optioneel)",note_added_success:"Notitie toegevoegd aan plan",servings:"Porties",decrease_servings:"Minder porties",increase_servings:"Meer porties",edit_mealplan:"Maaltijdplan bewerken",mealplan_updated_success:"Maaltijdplan bijgewerkt",save:"Opslaan",add_favorite:"Toevoegen aan favorieten",remove_favorite:"Verwijderen uit favorieten",add_to_shopping_list:"Toevoegen aan boodschappenlijst",select_shopping_list:"Selecteer boodschappenlijst",shopping_list_quantity:"Hoeveelheidsmultiplier",recipe_added_to_shopping_list:"Recept toegevoegd aan boodschappenlijst",no_shopping_lists:"Geen boodschappenlijsten beschikbaar",no_ingredients:"Geen ingrediënten beschikbaar",next:"Volgende",back:"Terug",select_all:"Alles selecteren",import_recipe:"Recept importeren",import_url:"Recept-URL",import_include_tags:"Tags opnemen",import:"Importeren",recipe_imported_success:"Recept geïmporteerd",open_in_mealie:"Openen in Mealie",start_cooking:"Kookmodus starten",exit_cooking:"Kookmodus verlaten",step:"Stap",previous_step:"Vorige",next_step:"Volgende",step_ingredients:"Voor deze stap",add_timer:"Timer",start_timer:"Timer starten",dismiss_timer:"Timer sluiten",timer_done:"Timer afgelopen: {timer}",add_item:"Artikel toevoegen",item_name:"Nieuw artikel",completed_items:"Voltooid",clear_completed:"Voltooide wissen",remove_item:"Artikel verwijderen",empty_shopping_list:"De boodschappenlijst is leeg",all_ingredients:"Alle ingrediënten",recipe_source:"Bron",recipe_yield:"Opbrengst",replace_recipe:"Recept vervangen",add_plan_to_shopping_list:"Maaltijdplan aan boodschappenlijst toevoegen",planned_recipes:"Geplande recepten",plan_added_to_shopping_list:"{count} recepten aan de boodschappenlijst toegevoegd",add_ingredients_to_shopping_list:"{count} ingrediënten aan de lijst toevoegen",ingredients_added_to_shopping_list:"{count} ingrediënten aan de boodschappenlijst toegevoegd",add_ingredient_to_shopping_list:"1 ingrediënt aan de lijst toevoegen",ingredient_added_to_shopping_list:"1 ingrediënt aan de boodschappenlijst toegevoegd"},Wi={no_url:"Configureer Mealie URL om afbeeldingen en receptlinks in te schakelen."},Zi={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fout bij laden van configuratie",error_loading:"Fout bij laden van gegevens",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fout bij verwijderen van maaltijd",error_updating_mealplan:"Fout bij bijwerken van maaltijdplan",no_shopping_list:"Geen Mealie-boodschappenlijst gevonden. Selecteer er een in de kaartinstellingen",error_updating_shopping_list:"Fout bij het bijwerken van de boodschappenlijst",timer_action_failed:"Actie bij einde timer mislukt"},Gi={integration:"Mealie integration",entry_types:"Maaltijdtypen om weer te geven",loading:"Laden...",mealie_url:"Mealie URL",image_url:"Afbeeldings-URL of lokaal pad (optioneel)",number_of_recipes:"Aantal weer te geven recepten",settings_recipes_card:"Weergaveconfiguratie",settings_infos:"Receptinformatie",settings_image:"Afbeelding",settings_times:"Tijden",settings_title_layout:"Indeling",show_image:"Afbeelding weergeven",show_rating:"Beoordeling weergeven",show_favorite:"Favoriet tonen",show_servings:"Porties & Hoeveelheid",show_description:"Beschrijving weergeven",show_prep_time:"Voorbereidingstijd weergeven",show_cooking_time:"Kooktijd weergeven",show_total_time:"Totale tijd weergeven",layout_mode:"Indeling",days_columns:"Kolommen met dagen",recipes_columns:"Kolommen met maaltijden",layout_vertical:"Verticaal",layout_horizontal:"Maaltijden naast elkaar",layout_side_by_side:"Dagen naast elkaar",layout_days_and_meals_side_by_side:"Dagen en maaltijden naast elkaar",days_range:"Getoonde dagen",days_range_helper:"Een getal (bijv. 3 = over 3 dagen) of een bereik (bijv. 0-6 = vandaag en de 6 volgende dagen)",show_search:"Zoekbalk",show_favorites_only:"Alleen favorieten",show_import_button:"Importknop weergeven",show_random_button:"Willekeurige maaltijdknop weergeven",settings_meal_actions:"Maaltijdacties",settings_recipe_actions:"Acties op recepten",show_add_recipe_button:"Knop Recept toevoegen tonen",show_note_button:"Knop Notitie toevoegen tonen",settings_recipe_view:"Recepten openen",recipe_view:"Recept openen in",recipe_view_dialog:"Dialoog in de kaart",recipe_view_webview:"Ingebouwde Mealie-weergave",recipe_view_browser:"Nieuw browsertabblad",recipe_tap_action:"Tikken op een recept",recipe_hold_action:"Lang drukken op een recept",recipe_double_tap_action:"Dubbeltikken op een recept",recipe_action_none:"Niets",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Knop voor het menu ⋮ tonen",mealie_group_slug:"Mealie-groep (slug)",settings_language:"Taal",language:"Taal",language_auto:"Automatisch (taal van Home Assistant)",language_helper:"Overschrijft de taal van Home Assistant voor deze kaart, bijvoorbeeld om een regionale variant zoals fr-CA te gebruiken.",shopping_list_entity:"Boodschappenlijst",title:"Titel",show_completed:"Voltooide artikelen tonen",show_add_item:"Invoerveld voor toevoegen tonen",settings_shopping_list_card:"Instellingen boodschappenlijstkaart",show_categories:"Categorieën tonen",show_tags:"Tags tonen",show_category_filters:"Categoriefilters tonen",show_tag_filters:"Tagfilters tonen",show_surprise_button:"Verrassingsknop tonen",sort_by:"Recepten sorteren",sort_none:"Volgorde van Mealie",sort_name:"Naam",sort_rating:"Beoordeling",sort_random:"Willekeurig",show_navigation:"Periodenavigatie tonen",show_plan_shopping_button:"Knop om maaltijdplan aan boodschappenlijst toe te voegen tonen",settings_timers:"Timers",timer_done_action:"Actie wanneer een timer afloopt",timer_done_action_help:'Home Assistant-actie die wordt uitgevoerd wanneer een kooktimer afloopt (TTS op een speaker, melding…). In de gegevens: {timer} = duur in woorden ("5 seconden"), {label} = naam op de kaart, {step} = stapnummer, {recipe} = receptnaam.',page_size:"Recepten per pagina (0 = geen paginering)"},Qi={hour:"uur",hours:"uur",minute:"minuut",minutes:"minuten",hour_short:"u",minute_short:"min",second:"seconde",seconds:"seconden"},Ji={cards:Bi,common:qi,dialog:Ki,info:Wi,error:Zi,editor:Gi,time:Qi},Yi={name_mealplan:"Plan Posiłków Mealie",description_mealplan:"Wyświetl dzisiejsze posiłki",name_recipes:"Przepisy Mealie",description_recipes:"Wyświetl swoje przepisy z instancji Mealie",view_recipe:"Wyświetl przepis",day_actions:"Akcje dnia",recipe_actions:"Akcje przepisu",delete_mealplan:"Usuń z planu",edit_mealplan:"Edytuj wpis planu",random_mealplan:"Losowy posiłek",name_shopping_list:"Lista zakupów Mealie",description_shopping_list:"Odhaczaj i dodawaj produkty do listy zakupów Mealie",surprise_recipe:"Zaskocz mnie",filter_recipes:"Filtruj przepisy",previous_period:"Poprzedni okres",next_period:"Następny okres",previous_page:"Poprzednie przepisy",next_page:"Następne przepisy"},Xi={no_recipe:"Brak przepisu",no_mealplan:"Brak posiłku",today:"Dzisiaj",breakfast:"Śniadanie",lunch:"Obiad",dinner:"Kolacja",side:"Dodatek",dessert:"Deser",drink:"Napój",snack:"Przekąska",search_placeholder:"Szukaj przepisów..."},et={add_to_mealplan:"Dodaj do planu posiłków",add_recipe_to_mealplan:"Dodaj do planu posiłków",select_date:"Wybierz datę",select_meal_type:"Typ posiłku",select_recipe:"Wybierz przepis",view_as_list:"Widok listy",view_as_grid:"Widok siatki",recipe_added_success:"Przepis dodany do planu",cancel:"Anuluj",add:"Dodaj",mealplan_deleted_success:"Posiłek usunięty z planu",confirm_delete_title:"Usunąć ten posiłek?",confirm:"Potwierdź",ingredients:"Składniki",instructions:"Instrukcje",times:"Czasy",prep_time:"Przygotowanie",cooking_time:"Gotowanie",total_time:"Łącznie",add_note_to_mealplan:"Dodaj notatkę",note_title:"Tytuł",note_text:"Notatka (opcjonalna)",note_added_success:"Notatka dodana do planu",servings:"Porcje",decrease_servings:"Zmniejsz porcje",increase_servings:"Zwiększ porcje",edit_mealplan:"Edytuj wpis planu",mealplan_updated_success:"Wpis planu zaktualizowany",save:"Zapisz",add_favorite:"Dodaj do ulubionych",remove_favorite:"Usuń z ulubionych",add_to_shopping_list:"Dodaj do listy zakupów",select_shopping_list:"Wybierz listę zakupów",shopping_list_quantity:"Mnożnik ilości",recipe_added_to_shopping_list:"Przepis dodany do listy zakupów",no_shopping_lists:"Brak dostępnych list zakupów",no_ingredients:"Brak dostępnych składników",next:"Dalej",back:"Wstecz",select_all:"Zaznacz wszystko",import_recipe:"Importuj przepis",import_url:"URL przepisu",import_include_tags:"Uwzględnij tagi",import:"Importuj",recipe_imported_success:"Przepis zaimportowany",open_in_mealie:"Otwórz w Mealie",start_cooking:"Uruchom tryb gotowania",exit_cooking:"Zakończ tryb gotowania",step:"Krok",previous_step:"Poprzedni",next_step:"Następny",step_ingredients:"Do tego kroku",add_timer:"Minutnik",start_timer:"Uruchom minutnik",dismiss_timer:"Zamknij minutnik",timer_done:"Minutnik zakończony: {timer}",add_item:"Dodaj produkt",item_name:"Nowy produkt",completed_items:"Ukończone",clear_completed:"Wyczyść ukończone",remove_item:"Usuń produkt",empty_shopping_list:"Lista zakupów jest pusta",all_ingredients:"Wszystkie składniki",recipe_source:"Źródło",recipe_yield:"Wydajność",replace_recipe:"Zamień przepis",add_plan_to_shopping_list:"Dodaj plan posiłków do listy zakupów",planned_recipes:"Zaplanowane przepisy",plan_added_to_shopping_list:"Dodano przepisy do listy zakupów: {count}",add_ingredients_to_shopping_list:"Dodaj składniki do listy: {count}",ingredients_added_to_shopping_list:"Dodano składniki do listy zakupów: {count}",add_ingredient_to_shopping_list:"Dodaj 1 składnik do listy",ingredient_added_to_shopping_list:"Dodano 1 składnik do listy zakupów"},it={no_url:"Skonfiguruj adres URL Mealie, aby włączyć obrazy i linki do przepisów."},tt={no_integration:"Select a Mealie integration in the card settings",missing_config:"Błąd ładowania konfiguracji",error_loading:"Błąd ładowania danych",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Błąd podczas usuwania posiłku",error_updating_mealplan:"Błąd podczas aktualizacji planu posiłków",no_shopping_list:"Nie znaleziono listy zakupów Mealie. Wybierz ją w ustawieniach karty",error_updating_shopping_list:"Błąd podczas aktualizacji listy zakupów",timer_action_failed:"Akcja po zakończeniu minutnika nie powiodła się"},st={integration:"Mealie integration",entry_types:"Typy posiłków do wyświetlenia",loading:"Ładowanie...",mealie_url:"URL Mealie",image_url:"URL lub ścieżka lokalna obrazów (opcjonalnie)",number_of_recipes:"Liczba przepisów do wyświetlenia",settings_recipes_card:"Konfiguracja wyświetlania",settings_infos:"Informacje o przepisie",settings_image:"Obraz",settings_times:"Czasy",settings_title_layout:"Układ",show_image:"Pokaż obraz",show_rating:"Pokaż ocenę",show_favorite:"Pokaż ulubione",show_servings:"Porcje i ilość",show_description:"Pokaż opis",show_prep_time:"Pokaż czas przygotowania",show_cooking_time:"Pokaż czas gotowania",show_total_time:"Pokaż całkowity czas",layout_mode:"Układ",days_columns:"Kolumny dni",recipes_columns:"Kolumny posiłków",layout_vertical:"Pionowo",layout_horizontal:"Posiłki obok siebie",layout_side_by_side:"Dni obok siebie",layout_days_and_meals_side_by_side:"Dni i posiłki obok siebie",days_range:"Wyświetlane dni",days_range_helper:"Liczba (np. 3 = za 3 dni) lub zakres (np. 0-6 = dziś i 6 kolejnych dni)",show_search:"Pasek wyszukiwania",show_favorites_only:"Tylko ulubione",show_import_button:"Pokaż przycisk importu",show_random_button:"Pokaż przycisk losowego posiłku",settings_meal_actions:"Akcje posiłków",settings_recipe_actions:"Akcje na przepisach",show_add_recipe_button:"Pokaż przycisk Dodaj przepis",show_note_button:"Pokaż przycisk Dodaj notatkę",settings_recipe_view:"Otwieranie przepisów",recipe_view:"Otwórz przepis w",recipe_view_dialog:"Okno w karcie",recipe_view_webview:"Wbudowany widok Mealie",recipe_view_browser:"Nowa karta przeglądarki",recipe_tap_action:"Dotknięcie przepisu",recipe_hold_action:"Długie naciśnięcie przepisu",recipe_double_tap_action:"Dwukrotne dotknięcie przepisu",recipe_action_none:"Nic",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Pokaż przycisk menu ⋮",mealie_group_slug:"Grupa Mealie (slug)",settings_language:"Język",language:"Język",language_auto:"Automatyczny (język Home Assistant)",language_helper:"Zastępuje język Home Assistant dla tej karty, np. aby użyć wariantu regionalnego, takiego jak fr-CA.",shopping_list_entity:"Lista zakupów",title:"Tytuł",show_completed:"Pokaż ukończone produkty",show_add_item:"Pokaż pole dodawania",settings_shopping_list_card:"Ustawienia karty listy zakupów",show_categories:"Pokaż kategorie",show_tags:"Pokaż tagi",show_category_filters:"Pokaż filtry kategorii",show_tag_filters:"Pokaż filtry tagów",show_surprise_button:"Pokaż przycisk niespodzianki",sort_by:"Sortuj przepisy",sort_none:"Kolejność Mealie",sort_name:"Nazwa",sort_rating:"Ocena",sort_random:"Losowo",show_navigation:"Pokaż nawigację między okresami",show_plan_shopping_button:"Pokaż przycisk dodawania planu do listy zakupów",settings_timers:"Minutniki",timer_done_action:"Akcja po zakończeniu minutnika",timer_done_action_help:"Akcja Home Assistant wykonywana po zakończeniu minutnika kuchennego (TTS na głośniku, powiadomienie…). W jej danych: {timer} = czas zapisany słownie, {label} = nazwa widoczna na karcie, {step} = numer kroku, {recipe} = nazwa przepisu.",page_size:"Przepisy na stronę (0 = bez stronicowania)"},at={hour:"godzina",hours:"godziny",minute:"minuta",minutes:"minuty",hour_short:"godz",minute_short:"min",second:"sekunda",seconds:"sekundy"},nt={cards:Yi,common:Xi,dialog:et,info:it,error:tt,editor:st,time:at},rt={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Exibir as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Exibir suas receitas da instância Mealie",view_recipe:"Ver receita",day_actions:"Ações do dia",recipe_actions:"Ações da receita",delete_mealplan:"Remover do plano",edit_mealplan:"Editar entrada do plano",random_mealplan:"Refeição aleatória",name_shopping_list:"Lista de compras Mealie",description_shopping_list:"Marque e adicione itens a uma lista de compras do Mealie",surprise_recipe:"Me surpreenda",filter_recipes:"Filtrar receitas",previous_period:"Período anterior",next_period:"Próximo período",previous_page:"Receitas anteriores",next_page:"Próximas receitas"},ot={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Café da manhã",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche",search_placeholder:"Pesquisar receitas..."},lt={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",select_recipe:"Selecionar uma receita",view_as_list:"Visualização em lista",view_as_grid:"Visualização em grade",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparo",cooking_time:"Cozimento",total_time:"Total",add_note_to_mealplan:"Adicionar uma nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota adicionada ao plano",servings:"Porções",decrease_servings:"Diminuir porções",increase_servings:"Aumentar porções",edit_mealplan:"Editar entrada do plano",mealplan_updated_success:"Entrada do plano atualizada",save:"Salvar",add_favorite:"Adicionar aos favoritos",remove_favorite:"Remover dos favoritos",add_to_shopping_list:"Adicionar à lista de compras",select_shopping_list:"Selecionar lista de compras",shopping_list_quantity:"Multiplicador de quantidade",recipe_added_to_shopping_list:"Receita adicionada à lista de compras",no_shopping_lists:"Nenhuma lista de compras disponível",no_ingredients:"Nenhum ingrediente disponível",next:"Próximo",back:"Voltar",select_all:"Selecionar tudo",import_recipe:"Importar receita",import_url:"URL da receita",import_include_tags:"Incluir tags",import:"Importar",recipe_imported_success:"Receita importada",open_in_mealie:"Abrir no Mealie",start_cooking:"Iniciar modo de cozinha",exit_cooking:"Sair do modo de cozinha",step:"Passo",previous_step:"Anterior",next_step:"Próximo",step_ingredients:"Para este passo",add_timer:"Timer",start_timer:"Iniciar timer",dismiss_timer:"Fechar timer",timer_done:"Timer finalizado: {timer}",add_item:"Adicionar item",item_name:"Novo item",completed_items:"Concluídos",clear_completed:"Limpar concluídos",remove_item:"Remover item",empty_shopping_list:"A lista de compras está vazia",all_ingredients:"Todos os ingredientes",recipe_source:"Fonte",recipe_yield:"Rendimento",replace_recipe:"Substituir receita",add_plan_to_shopping_list:"Adicionar o plano de refeições à lista de compras",planned_recipes:"Receitas planejadas",plan_added_to_shopping_list:"{count} receitas adicionadas à lista de compras",add_ingredients_to_shopping_list:"Adicionar {count} ingredientes à lista",ingredients_added_to_shopping_list:"{count} ingredientes adicionados à lista de compras",add_ingredient_to_shopping_list:"Adicionar 1 ingrediente à lista",ingredient_added_to_shopping_list:"1 ingrediente adicionado à lista de compras"},dt={no_url:"Configure a URL Mealie para ativar imagens e links para receitas."},ct={no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Erro ao remover refeição",error_updating_mealplan:"Erro ao atualizar plano de refeições",no_shopping_list:"Nenhuma lista de compras do Mealie encontrada. Selecione uma nas configurações do cartão",error_updating_shopping_list:"Erro ao atualizar a lista de compras",timer_action_failed:"Falha na ação de fim do temporizador"},pt={integration:"Mealie integration",entry_types:"Tipos de refeição para exibir",loading:"Carregando...",mealie_url:"URL do Mealie",image_url:"URL ou caminho local das imagens (opcional)",number_of_recipes:"Número de receitas para exibir",settings_recipes_card:"Configuração de exibição",settings_infos:"Informações da receita",settings_image:"Imagem",settings_times:"Tempos",settings_title_layout:"Layout",show_image:"Exibir imagem",show_rating:"Exibir avaliação",show_favorite:"Mostrar favorito",show_servings:"Porções e Quantidade",show_description:"Exibir descrição",show_prep_time:"Exibir tempo de preparo",show_cooking_time:"Exibir tempo de cozimento",show_total_time:"Exibir tempo total",layout_mode:"Disposição",days_columns:"Colunas de dias",recipes_columns:"Colunas de refeições",layout_vertical:"Vertical",layout_horizontal:"Refeições lado a lado",layout_side_by_side:"Dias lado a lado",layout_days_and_meals_side_by_side:"Dias e refeições lado a lado",days_range:"Dias exibidos",days_range_helper:"Um número (ex.: 3 = daqui a 3 dias) ou um intervalo (ex.: 0-6 = hoje e os 6 dias seguintes)",show_search:"Barra de pesquisa",show_favorites_only:"Apenas favoritos",show_import_button:"Mostrar botão de importação",show_random_button:"Mostrar botão de refeição aleatória",settings_meal_actions:"Ações das refeições",settings_recipe_actions:"Ações nas receitas",show_add_recipe_button:"Mostrar botão Adicionar receita",show_note_button:"Mostrar botão Adicionar nota",settings_recipe_view:"Abertura de receitas",recipe_view:"Abrir a receita em",recipe_view_dialog:"Diálogo no cartão",recipe_view_webview:"Visualização Mealie integrada",recipe_view_browser:"Nova aba do navegador",recipe_tap_action:"Toque em uma receita",recipe_hold_action:"Toque longo em uma receita",recipe_double_tap_action:"Toque duplo em uma receita",recipe_action_none:"Nada",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostrar o botão do menu ⋮",mealie_group_slug:"Grupo do Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma do Home Assistant)",language_helper:"Substitui o idioma do Home Assistant para este cartão, por exemplo para usar uma variante regional como fr-CA.",shopping_list_entity:"Lista de compras",title:"Título",show_completed:"Mostrar itens concluídos",show_add_item:"Mostrar o campo de adição",settings_shopping_list_card:"Configurações do cartão de lista de compras",show_categories:"Mostrar categorias",show_tags:"Mostrar tags",show_category_filters:"Mostrar filtros por categoria",show_tag_filters:"Mostrar filtros por tag",show_surprise_button:"Mostrar botão surpresa",sort_by:"Ordenar receitas",sort_none:"Ordem do Mealie",sort_name:"Nome",sort_rating:"Avaliação",sort_random:"Aleatório",show_navigation:"Mostrar navegação entre períodos",show_plan_shopping_button:"Mostrar botão para adicionar o plano à lista de compras",settings_timers:"Temporizadores",timer_done_action:"Ação ao fim de um temporizador",timer_done_action_help:'Ação do Home Assistant executada ao fim de um temporizador de cozinha (TTS em um alto-falante, notificação…). Nos dados: {timer} = duração por extenso ("5 segundos"), {label} = nome exibido no cartão, {step} = número do passo, {recipe} = nome da receita.',page_size:"Receitas por página (0 = sem paginação)"},_t={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min",second:"segundo",seconds:"segundos"},ht={cards:rt,common:ot,dialog:lt,info:dt,error:ct,editor:pt,time:_t},gt={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Mostrar as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Mostrar as suas receitas da instância Mealie",view_recipe:"Ver receita",day_actions:"Ações do dia",recipe_actions:"Ações da receita",delete_mealplan:"Remover do plano",edit_mealplan:"Editar entrada do plano",random_mealplan:"Refeição aleatória",name_shopping_list:"Lista de compras Mealie",description_shopping_list:"Marque e adicione artigos a uma lista de compras do Mealie",surprise_recipe:"Surpreende-me",filter_recipes:"Filtrar receitas",previous_period:"Período anterior",next_period:"Período seguinte",previous_page:"Receitas anteriores",next_page:"Receitas seguintes"},ut={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Pequeno-almoço",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche",search_placeholder:"Pesquisar receitas..."},mt={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",select_recipe:"Selecionar uma receita",view_as_list:"Vista de lista",view_as_grid:"Vista de grelha",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparação",cooking_time:"Cozimento",total_time:"Total",add_note_to_mealplan:"Adicionar uma nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota adicionada ao plano",servings:"Porções",decrease_servings:"Diminuir porções",increase_servings:"Aumentar porções",edit_mealplan:"Editar entrada do plano",mealplan_updated_success:"Entrada do plano atualizada",save:"Guardar",add_favorite:"Adicionar aos favoritos",remove_favorite:"Remover dos favoritos",add_to_shopping_list:"Adicionar à lista de compras",select_shopping_list:"Selecionar lista de compras",shopping_list_quantity:"Multiplicador de quantidade",recipe_added_to_shopping_list:"Receita adicionada à lista de compras",no_shopping_lists:"Nenhuma lista de compras disponível",no_ingredients:"Nenhum ingrediente disponível",next:"Próximo",back:"Voltar",select_all:"Selecionar tudo",import_recipe:"Importar receita",import_url:"URL da receita",import_include_tags:"Incluir tags",import:"Importar",recipe_imported_success:"Receita importada",open_in_mealie:"Abrir no Mealie",start_cooking:"Iniciar modo de cozinha",exit_cooking:"Sair do modo de cozinha",step:"Passo",previous_step:"Anterior",next_step:"Seguinte",step_ingredients:"Para este passo",add_timer:"Temporizador",start_timer:"Iniciar temporizador",dismiss_timer:"Fechar temporizador",timer_done:"Temporizador terminado: {timer}",add_item:"Adicionar artigo",item_name:"Novo artigo",completed_items:"Concluídos",clear_completed:"Limpar concluídos",remove_item:"Remover artigo",empty_shopping_list:"A lista de compras está vazia",all_ingredients:"Todos os ingredientes",recipe_source:"Fonte",recipe_yield:"Rendimento",replace_recipe:"Substituir receita",add_plan_to_shopping_list:"Adicionar o plano de refeições à lista de compras",planned_recipes:"Receitas planeadas",plan_added_to_shopping_list:"{count} receitas adicionadas à lista de compras",add_ingredients_to_shopping_list:"Adicionar {count} ingredientes à lista",ingredients_added_to_shopping_list:"{count} ingredientes adicionados à lista de compras",add_ingredient_to_shopping_list:"Adicionar 1 ingrediente à lista",ingredient_added_to_shopping_list:"1 ingrediente adicionado à lista de compras"},ft={no_url:"Configure o URL Mealie para ativar imagens e links para receitas."},vt={no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Erro ao remover refeição",error_updating_mealplan:"Erro ao atualizar plano de refeições",no_shopping_list:"Nenhuma lista de compras do Mealie encontrada. Selecione uma nas definições do cartão",error_updating_shopping_list:"Erro ao atualizar a lista de compras",timer_action_failed:"Falha na ação de fim do temporizador"},yt={integration:"Mealie integration",entry_types:"Tipos de refeição a exibir",loading:"A carregar...",mealie_url:"URL do Mealie",image_url:"URL ou caminho local das imagens (opcional)",number_of_recipes:"Número de receitas a exibir",settings_recipes_card:"Configuração de exibição",settings_infos:"Informações da receita",settings_image:"Imagem",settings_times:"Tempos",settings_title_layout:"Disposição",show_image:"Mostrar imagem",show_rating:"Mostrar avaliação",show_favorite:"Mostrar favorito",show_servings:"Porções e quantidade",show_description:"Mostrar descrição",show_prep_time:"Mostrar tempo de preparação",show_cooking_time:"Mostrar tempo de cozedura",show_total_time:"Mostrar tempo total",layout_mode:"Disposição",days_columns:"Colunas de dias",recipes_columns:"Colunas de refeições",layout_vertical:"Vertical",layout_horizontal:"Refeições lado a lado",layout_side_by_side:"Dias lado a lado",layout_days_and_meals_side_by_side:"Dias e refeições lado a lado",days_range:"Dias apresentados",days_range_helper:"Um número (ex.: 3 = daqui a 3 dias) ou um intervalo (ex.: 0-6 = hoje e os 6 dias seguintes)",show_search:"Barra de pesquisa",show_favorites_only:"Apenas favoritos",show_import_button:"Mostrar botão de importação",show_random_button:"Mostrar botão de refeição aleatória",settings_meal_actions:"Ações das refeições",settings_recipe_actions:"Ações nas receitas",show_add_recipe_button:"Mostrar botão Adicionar receita",show_note_button:"Mostrar botão Adicionar nota",settings_recipe_view:"Abertura de receitas",recipe_view:"Abrir a receita em",recipe_view_dialog:"Diálogo no cartão",recipe_view_webview:"Vista Mealie integrada",recipe_view_browser:"Novo separador do navegador",recipe_tap_action:"Toque numa receita",recipe_hold_action:"Toque longo numa receita",recipe_double_tap_action:"Toque duplo numa receita",recipe_action_none:"Nada",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostrar o botão do menu ⋮",mealie_group_slug:"Grupo do Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma do Home Assistant)",language_helper:"Substitui o idioma do Home Assistant para este cartão, por exemplo para usar uma variante regional como fr-CA.",shopping_list_entity:"Lista de compras",title:"Título",show_completed:"Mostrar artigos concluídos",show_add_item:"Mostrar o campo de adição",settings_shopping_list_card:"Definições do cartão de lista de compras",show_categories:"Mostrar categorias",show_tags:"Mostrar etiquetas",show_category_filters:"Mostrar filtros por categoria",show_tag_filters:"Mostrar filtros por etiqueta",show_surprise_button:"Mostrar botão surpresa",sort_by:"Ordenar receitas",sort_none:"Ordem do Mealie",sort_name:"Nome",sort_rating:"Classificação",sort_random:"Aleatório",show_navigation:"Mostrar navegação entre períodos",show_plan_shopping_button:"Mostrar botão para adicionar o plano à lista de compras",settings_timers:"Temporizadores",timer_done_action:"Ação no fim de um temporizador",timer_done_action_help:"Ação do Home Assistant executada no fim de um temporizador de cozinha (TTS num altifalante, notificação…). Nos seus dados: {timer} = duração por extenso («5 segundos»), {label} = nome mostrado no cartão, {step} = número do passo, {recipe} = nome da receita.",page_size:"Receitas por página (0 = sem paginação)"},bt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min",second:"segundo",seconds:"segundos"},wt={cards:gt,common:ut,dialog:mt,info:ft,error:vt,editor:yt,time:bt},$t={name_mealplan:"Plan de Mese Mealie",description_mealplan:"Afișează mesele zilei",name_recipes:"Rețete Mealie",description_recipes:"Afișează rețetele tale din instanța Mealie",view_recipe:"Vezi rețeta",day_actions:"Acțiunile zilei",recipe_actions:"Acțiuni rețetă",delete_mealplan:"Șterge din plan",edit_mealplan:"Editează intrarea din plan",random_mealplan:"Masă aleatorie",name_shopping_list:"Listă de cumpărături Mealie",description_shopping_list:"Bifează și adaugă articole într-o listă de cumpărături Mealie",surprise_recipe:"Surprinde-mă",filter_recipes:"Filtrează rețetele",previous_period:"Perioada anterioară",next_period:"Perioada următoare",previous_page:"Rețetele anterioare",next_page:"Rețetele următoare"},kt={no_recipe:"Nicio rețetă",no_mealplan:"Nicio masă",today:"Astăzi",breakfast:"Micul dejun",lunch:"Prânz",dinner:"Cină",side:"Garnitură",dessert:"Desert",drink:"Băutură",snack:"Gustare",search_placeholder:"Caută rețete..."},zt={add_to_mealplan:"Adaugă la planul de mese",add_recipe_to_mealplan:"Adaugă la planul de mese",select_date:"Selectează o dată",select_meal_type:"Tipul mesei",select_recipe:"Selectează o rețetă",view_as_list:"Vizualizare listă",view_as_grid:"Vizualizare grilă",recipe_added_success:"Rețetă adăugată la plan",cancel:"Anulează",add:"Adaugă",mealplan_deleted_success:"Masă ștearsă din plan",confirm_delete_title:"Ștergeți această masă?",confirm:"Confirmă",ingredients:"Ingrediente",instructions:"Instrucțiuni",times:"Timpi",prep_time:"Pregătire",cooking_time:"Gătit",total_time:"Total",add_note_to_mealplan:"Adaugă o notă",note_title:"Titlu",note_text:"Notă (opțional)",note_added_success:"Notă adăugată la plan",servings:"Porții",decrease_servings:"Reduce porțiile",increase_servings:"Crește porțiile",edit_mealplan:"Editează intrarea din plan",mealplan_updated_success:"Intrare din plan actualizată",save:"Salvează",add_favorite:"Adaugă la favorite",remove_favorite:"Elimină din favorite",add_to_shopping_list:"Adaugă la lista de cumpărături",select_shopping_list:"Selectează lista de cumpărături",shopping_list_quantity:"Multiplicator de cantitate",recipe_added_to_shopping_list:"Rețetă adăugată la lista de cumpărături",no_shopping_lists:"Nicio listă de cumpărături disponibilă",no_ingredients:"Niciun ingredient disponibil",next:"Înainte",back:"Înapoi",select_all:"Selectează tot",import_recipe:"Importă rețetă",import_url:"URL rețetă",import_include_tags:"Include etichete",import:"Importă",recipe_imported_success:"Rețetă importată",open_in_mealie:"Deschide în Mealie",start_cooking:"Pornește modul de gătit",exit_cooking:"Ieși din modul de gătit",step:"Pasul",previous_step:"Anterior",next_step:"Următorul",step_ingredients:"Pentru acest pas",add_timer:"Cronometru",start_timer:"Pornește cronometrul",dismiss_timer:"Închide cronometrul",timer_done:"Cronometru terminat: {timer}",add_item:"Adaugă articol",item_name:"Articol nou",completed_items:"Finalizate",clear_completed:"Șterge finalizatele",remove_item:"Elimină articolul",empty_shopping_list:"Lista de cumpărături este goală",all_ingredients:"Toate ingredientele",recipe_source:"Sursă",recipe_yield:"Randament",replace_recipe:"Înlocuiește rețeta",add_plan_to_shopping_list:"Adaugă planul de mese în lista de cumpărături",planned_recipes:"Rețete planificate",plan_added_to_shopping_list:"{count} rețete adăugate în lista de cumpărături",add_ingredients_to_shopping_list:"Adaugă {count} ingrediente în listă",ingredients_added_to_shopping_list:"{count} ingrediente adăugate în lista de cumpărături",add_ingredient_to_shopping_list:"Adaugă 1 ingredient în listă",ingredient_added_to_shopping_list:"1 ingredient adăugat în lista de cumpărături"},xt={no_url:"Configurează URL-ul Mealie pentru a activa imaginile și linkurile către rețete."},At={no_integration:"Select a Mealie integration in the card settings",missing_config:"Eroare la încărcarea configurației",error_loading:"Eroare la încărcarea datelor",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Eroare la ștergerea mesei",error_updating_mealplan:"Eroare la actualizarea planului de mese",no_shopping_list:"Nu a fost găsită nicio listă de cumpărături Mealie. Selectează una în setările cardului",error_updating_shopping_list:"Eroare la actualizarea listei de cumpărături",timer_action_failed:"Acțiunea de la terminarea cronometrului a eșuat"},St={integration:"Mealie integration",entry_types:"Tipuri de mese de afișat",loading:"Se încarcă...",mealie_url:"URL Mealie",image_url:"URL sau cale locală pentru imagini (opțional)",number_of_recipes:"Număr de rețete de afișat",settings_recipes_card:"Configurare afișare",settings_infos:"Informații rețetă",settings_image:"Imagine",settings_times:"Timpuri",settings_title_layout:"Aspect",show_image:"Afișează imaginea",show_rating:"Afișează evaluarea",show_favorite:"Arată favorit",show_servings:"Porții și Cantitate",show_description:"Afișează descrierea",show_prep_time:"Afișează timpul de preparare",show_cooking_time:"Afișează timpul de gătit",show_total_time:"Afișează timpul total",layout_mode:"Dispunere",days_columns:"Coloane de zile",recipes_columns:"Coloane de mese",layout_vertical:"Vertical",layout_horizontal:"Mese alăturate",layout_side_by_side:"Zile alăturate",layout_days_and_meals_side_by_side:"Zile și mese alăturate",days_range:"Zile afișate",days_range_helper:"Un număr (ex. 3 = peste 3 zile) sau un interval (ex. 0-6 = azi și următoarele 6 zile)",show_search:"Bara de căutare",show_favorites_only:"Doar favorite",show_import_button:"Afișează butonul de import",show_random_button:"Afișează butonul de masă aleatorie",settings_meal_actions:"Acțiuni pentru mese",settings_recipe_actions:"Acțiuni asupra rețetelor",show_add_recipe_button:"Afișează butonul Adaugă rețetă",show_note_button:"Afișează butonul Adaugă notă",settings_recipe_view:"Deschiderea rețetelor",recipe_view:"Deschide rețeta în",recipe_view_dialog:"Dialog în card",recipe_view_webview:"Vizualizare Mealie integrată",recipe_view_browser:"Filă nouă de browser",recipe_tap_action:"Atingere pe o rețetă",recipe_hold_action:"Apăsare lungă pe o rețetă",recipe_double_tap_action:"Atingere dublă pe o rețetă",recipe_action_none:"Nimic",settings_recipe_menu:"Meniu ⋮",show_recipe_menu:"Afișează butonul meniului ⋮",mealie_group_slug:"Grup Mealie (slug)",settings_language:"Limbă",language:"Limbă",language_auto:"Automat (limba Home Assistant)",language_helper:"Înlocuiește limba Home Assistant pentru acest card, de exemplu pentru a folosi o variantă regională precum fr-CA.",shopping_list_entity:"Listă de cumpărături",title:"Titlu",show_completed:"Afișează articolele finalizate",show_add_item:"Afișează câmpul de adăugare",settings_shopping_list_card:"Setările cardului listă de cumpărături",show_categories:"Afișează categoriile",show_tags:"Afișează etichetele",show_category_filters:"Afișează filtrele pe categorii",show_tag_filters:"Afișează filtrele pe etichete",show_surprise_button:"Afișează butonul surpriză",sort_by:"Sortează rețetele",sort_none:"Ordinea din Mealie",sort_name:"Nume",sort_rating:"Evaluare",sort_random:"Aleatoriu",show_navigation:"Afișează navigarea între perioade",show_plan_shopping_button:"Afișează butonul de adăugare a planului în lista de cumpărături",settings_timers:"Cronometre",timer_done_action:"Acțiune la terminarea unui cronometru",timer_done_action_help:"Acțiune Home Assistant executată la terminarea unui cronometru de gătit (TTS pe o boxă, notificare…). În datele sale: {timer} = durata în cuvinte („5 secunde”), {label} = numele afișat pe card, {step} = numărul pasului, {recipe} = numele rețetei.",page_size:"Rețete pe pagină (0 = fără paginare)"},It={hour:"oră",hours:"ore",minute:"minut",minutes:"minute",hour_short:"h",minute_short:"min",second:"secundă",seconds:"secunde"},Tt={cards:$t,common:kt,dialog:zt,info:xt,error:At,editor:St,time:It},Mt={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Visa dagens måltider",name_recipes:"Mealie Recept",description_recipes:"Visa dina recept från Mealie-instansen",view_recipe:"Visa recept",day_actions:"Dagens åtgärder",recipe_actions:"Receptåtgärder",delete_mealplan:"Ta bort från planen",edit_mealplan:"Redigera måltidsplanering",random_mealplan:"Slumpmässig måltid",name_shopping_list:"Mealie inköpslista",description_shopping_list:"Bocka av och lägg till varor i en Mealie-inköpslista",surprise_recipe:"Överraska mig",filter_recipes:"Filtrera recept",previous_period:"Föregående period",next_period:"Nästa period",previous_page:"Föregående recept",next_page:"Nästa recept"},Rt={no_recipe:"Inget recept",no_mealplan:"Ingen måltid",today:"Idag",breakfast:"Frukost",lunch:"Lunch",dinner:"Middag",side:"Tillbehör",dessert:"Efterrätt",drink:"Dryck",snack:"Mellanmål",search_placeholder:"Sök recept..."},Et={add_to_mealplan:"Lägg till i måltidsplanen",add_recipe_to_mealplan:"Lägg till i måltidsplanen",select_date:"Välj ett datum",select_meal_type:"Måltidstyp",select_recipe:"Välj ett recept",view_as_list:"Listvy",view_as_grid:"Rutnätsvy",recipe_added_success:"Receptet har lagts till i planen",cancel:"Avbryt",add:"Lägg till",mealplan_deleted_success:"Måltiden har tagits bort från planen",confirm_delete_title:"Ta bort den här måltiden?",confirm:"Bekräfta",ingredients:"Ingredienser",instructions:"Instruktioner",times:"Tider",prep_time:"Förberedelse",cooking_time:"Tillagning",total_time:"Totalt",add_note_to_mealplan:"Lägg till en anteckning",note_title:"Rubrik",note_text:"Anteckning (valfritt)",note_added_success:"Anteckningen har lagts till i planen",servings:"Portioner",decrease_servings:"Minska antal portioner",increase_servings:"Öka antal portioner",edit_mealplan:"Redigera måltidsplanering",mealplan_updated_success:"Måltidsplaneringen har uppdaterats",save:"Spara",add_favorite:"Lägg till i favoriter",remove_favorite:"Ta bort från favoriter",add_to_shopping_list:"Lägg till i inköpslista",select_shopping_list:"Välj inköpslista",shopping_list_quantity:"Antalsmultiplikator",recipe_added_to_shopping_list:"Receptet har lagts till i inköpslistan",no_shopping_lists:"Inga inköpslistor tillgängliga",no_ingredients:"Inga ingredienser tillgängliga",next:"Nästa",back:"Tillbaka",select_all:"Markera alla",import_recipe:"Importera recept",import_url:"Receptets URL",import_include_tags:"Inkludera taggar",import:"Importera",recipe_imported_success:"Receptet har importerats",open_in_mealie:"Öppna i Mealie",start_cooking:"Starta matlagningsläge",exit_cooking:"Avsluta matlagningsläge",step:"Steg",previous_step:"Föregående",next_step:"Nästa",step_ingredients:"För detta steg",add_timer:"Timer",start_timer:"Starta timer",dismiss_timer:"Stäng timer",timer_done:"Timer klar: {timer}",add_item:"Lägg till vara",item_name:"Ny vara",completed_items:"Klara",clear_completed:"Rensa klara",remove_item:"Ta bort vara",empty_shopping_list:"Inköpslistan är tom",all_ingredients:"Alla ingredienser",recipe_source:"Källa",recipe_yield:"Ger",replace_recipe:"Ersätt recept",add_plan_to_shopping_list:"Lägg till matplanen i inköpslistan",planned_recipes:"Planerade recept",plan_added_to_shopping_list:"{count} recept har lagts till i inköpslistan",add_ingredients_to_shopping_list:"Lägg till {count} ingredienser i listan",ingredients_added_to_shopping_list:"{count} ingredienser har lagts till i inköpslistan",add_ingredient_to_shopping_list:"Lägg till 1 ingrediens i listan",ingredient_added_to_shopping_list:"1 ingrediens har lagts till i inköpslistan"},Ct={no_url:"Konfigurera Mealie-URL för att aktivera bilder och receptlänkar."},Dt={no_integration:"Välj en Mealie-integration i kortets inställningar",missing_config:"Fel vid inläsning av konfiguration",error_loading:"Fel vid inläsning av data",error_adding_recipe:"Fel när receptet skulle läggas till",error_deleting_mealplan:"Fel när måltiden skulle tas bort",error_updating_mealplan:"Fel när måltidsplanen skulle uppdateras",no_shopping_list:"Ingen Mealie-inköpslista hittades. Välj en i kortets inställningar",error_updating_shopping_list:"Fel vid uppdatering av inköpslistan",timer_action_failed:"Åtgärden vid timerns slut misslyckades"},jt={integration:"Mealie-integration",entry_types:"Måltidstyper som ska visas",loading:"Laddar...",mealie_url:"Mealie-URL",image_url:"Bild-URL eller lokal sökväg (valfritt)",number_of_recipes:"Antal recept som ska visas",settings_recipes_card:"Visningsinställningar",settings_infos:"Receptdetaljer",settings_image:"Bild",settings_times:"Tider",settings_title_layout:"Layout",show_image:"Visa bild",show_rating:"Visa betyg",show_favorite:"Favoritrecept",show_servings:"Portioner och mängd",show_description:"Visa beskrivning",show_prep_time:"Visa förberedelsetid",show_cooking_time:"Visa tillagningstid",show_total_time:"Visa total tid",layout_mode:"Layout",days_columns:"Dagskolumner",recipes_columns:"Måltidskolumner",layout_vertical:"Vertikal",layout_horizontal:"Måltider sida vid sida",layout_side_by_side:"Dagar sida vid sida",layout_days_and_meals_side_by_side:"Dagar och måltider sida vid sida",days_range:"Dagar som visas",days_range_helper:"Ett antal (t.ex. 3 = 3 dagar från idag) eller ett intervall (t.ex. 0-6 = idag och de följande 6 dagarna)",show_search:"Sökfält",show_favorites_only:"Endast favoriter",show_import_button:"Visa importknapp",show_random_button:"Visa knapp för slumpmässig måltid",settings_meal_actions:"Måltidsåtgärder",settings_recipe_actions:"Receptåtgärder",show_add_recipe_button:"Visa knapp för att lägga till recept",show_note_button:"Visa knapp för att lägga till anteckning",settings_recipe_view:"Öppna recept",recipe_view:"Öppna receptet i",recipe_view_dialog:"Dialogruta i kortet",recipe_view_webview:"Inbäddad Mealie-vy",recipe_view_browser:"Ny webbläsarflik",recipe_tap_action:"Tryck på ett recept",recipe_hold_action:"Långt tryck på ett recept",recipe_double_tap_action:"Dubbeltryck på ett recept",recipe_action_none:"Ingenting",settings_recipe_menu:"Meny ⋮",show_recipe_menu:"Visa knappen för menyn ⋮",mealie_group_slug:"Mealie-grupp (slug)",settings_language:"Språk",language:"Språk",language_auto:"Automatiskt (Home Assistants språk)",language_helper:"Ersätter Home Assistants språk för detta kort, t.ex. för att använda en regional variant som fr-CA.",shopping_list_entity:"Inköpslista",title:"Titel",show_completed:"Visa klara varor",show_add_item:"Visa fältet för att lägga till",settings_shopping_list_card:"Inställningar för inköpslistekort",show_categories:"Visa kategorier",show_tags:"Visa taggar",show_category_filters:"Visa kategorifilter",show_tag_filters:"Visa taggfilter",show_surprise_button:"Visa överraskningsknapp",sort_by:"Sortera recept",sort_none:"Mealies ordning",sort_name:"Namn",sort_rating:"Betyg",sort_random:"Slumpmässig",show_navigation:"Visa periodnavigering",show_plan_shopping_button:"Visa knapp för att lägga till matplanen i inköpslistan",settings_timers:"Timers",timer_done_action:"Åtgärd när en timer är klar",timer_done_action_help:'Home Assistant-åtgärd som körs när en matlagningstimer är klar (TTS på en högtalare, avisering…). I dess data: {timer} = längd i ord ("5 sekunder"), {label} = namn på kortet, {step} = stegnummer, {recipe} = receptets namn.',page_size:"Recept per sida (0 = ingen sidindelning)"},Lt={hour:"timme",hours:"timmar",minute:"minut",minutes:"minuter",hour_short:"h",minute_short:"min",second:"sekund",seconds:"sekunder"},Pt={cards:Mt,common:Rt,dialog:Et,info:Ct,error:Dt,editor:jt,time:Lt};const Ot={da:Be,de:Xe,en:li,es:fi,fr:Object.freeze({__proto__:null,cards:Ii,common:Ti,default:ji,dialog:Mi,editor:Ci,error:Ei,info:Ri,time:Di}),"fr-BE":bi,"fr-CA":Si,it:Object.freeze({__proto__:null,cards:Li,common:Pi,default:Fi,dialog:Oi,editor:Ui,error:Vi,info:Ni,time:Hi}),nl:Object.freeze({__proto__:null,cards:Bi,common:qi,default:Ji,dialog:Ki,editor:Gi,error:Zi,info:Wi,time:Qi}),pl:Object.freeze({__proto__:null,cards:Yi,common:Xi,default:nt,dialog:et,editor:st,error:tt,info:it,time:at}),"pt-BR":Object.freeze({__proto__:null,cards:rt,common:ot,default:ht,dialog:lt,editor:pt,error:ct,info:dt,time:_t}),pt:Object.freeze({__proto__:null,cards:gt,common:ut,default:wt,dialog:mt,editor:yt,error:vt,info:ft,time:bt}),ro:Object.freeze({__proto__:null,cards:$t,common:kt,default:Tt,dialog:zt,editor:St,error:At,info:xt,time:It}),sv:Object.freeze({__proto__:null,cards:Mt,common:Rt,default:Pt,dialog:Et,editor:jt,error:Dt,info:Ct,time:Lt})};function Nt(e,i){const t=Ot[i];if(!t)return;const s=e.split(".").reduce((e,i)=>e&&"object"==typeof e?e[i]:void 0,t);return"string"==typeof s?s:void 0}const Vt=Object.keys(Ot).sort();function Ut(e,i,t,s){let a;for(const t of function(e){const i=e.split("-")[0];return[...new Set([e,i,"en"])]}(e))if(a=Nt(i,t),void 0!==a)break;return a??(a=i),t&&s?a.replace(t,s):a}const Ht=[[.125,"⅛"],[.25,"¼"],[1/3,"⅓"],[.375,"⅜"],[.5,"½"],[.625,"⅝"],[2/3,"⅔"],[.75,"¾"],[.875,"⅞"]],Ft=new Map;function Bt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qt(e){let i=Ft.get(e);return i||(i=function(e){const i=[Ut(e,"time.hour"),Ut(e,"time.hours")].filter(Boolean).map(Bt),t=[Ut(e,"time.minute"),Ut(e,"time.minutes")].filter(Boolean).map(Bt);return{hourPattern:new RegExp(`(\\d+)\\s*(?:${i.join("|")})`,"i"),minutePattern:new RegExp(`(\\d+)\\s*(?:${t.join("|")})`,"i")}}(e),Ft.set(e,i)),i}const Kt=[{seconds:3600,singular:"time.hour",plural:"time.hours"},{seconds:60,singular:"time.minute",plural:"time.minutes"},{seconds:1,singular:"time.second",plural:"time.seconds"}];function Wt(e,i,t="en"){const s=e[`${i}_time_seconds`];return s&&s>0?function(e,i="en"){const t=Math.round(e/60),s=Math.floor(t/60),a=t%60,n=[];return s&&n.push(`${s} ${Ut(i,"time.hour_short")}`),!a&&s||n.push(`${a} ${Ut(i,"time.minute_short")}`),n.join(" ")}(s,t):function(e,i="en"){if(!e)return"";const t=e.toLowerCase().trim(),{hourPattern:s,minutePattern:a}=qt(i),n=t.match(s),r=t.match(a);if(!n&&!r)return t.replace(/\s+/g," ").trim();const o=[];return n&&o.push(`${n[1]} ${Ut(i,"time.hour_short")}`),r&&o.push(`${r[1]} ${Ut(i,"time.minute_short")}`),o.join(" ")}(e[`${i}_time`]??null,t)}function Zt(e,i="en"){if(!e)return"";const t=`common.${e}`,s=Ut(i,t);return s!==t?s:e.toUpperCase()}function Gt(e){return De.map(i=>({value:i,label:e(`common.${i}`)}))}function Qt(e,i=1,t=!0,s="en"){const a=function(e){if(!e)return"";if("string"==typeof e){if(e.trimStart().startsWith("{"))try{const i=JSON.parse(e);return(i.use_abbreviation??i.useAbbreviation)&&i.abbreviation?i.abbreviation:i.name??""}catch{if(/['"]use_abbreviation['"]\s*:\s*True/.test(e)||/'useAbbreviation'\s*:\s*True/.test(e)){const i=e.match(/['"]abbreviation['"]\s*:\s*'([^']+)'/);if(i?.[1])return i[1]}const i=e.match(/['"]name['"]\s*:\s*'([^']*)'/);return i?.[1]??""}return e}return e.use_abbreviation&&e.abbreviation?e.abbreviation:e.name??""}(e.unit),n=null!=e.quantity&&0!==e.quantity;if(!n&&!e.food?.name)return e.note??e.display??"";const r=n?function(e,i="en"){const t=Math.floor(e),s=e-t;if(s<.02)return t>0?String(t):"0";const a=Ht.find(([e])=>Math.abs(s-e)<.02);return a?t>0?`${t} ${a[1]}`:a[1]:new Intl.NumberFormat(i,{maximumFractionDigits:2,useGrouping:!1}).format(e)}(e.quantity*i,s):null,o=[r,a||null,e.food?.name??null].filter(Boolean).join(" ");return t&&e.note?`${o} (${e.note})`:o}class Jt extends Error{constructor(e,i){super(e),this.name="MealieActionError",this.translationKey=e,this.reason=i}get detail(){return this.reason instanceof Error?this.reason.message:""}}function Yt(e){const i=De.indexOf(e);return-1===i?De.length:i}async function Xt(e,i){try{return await i()}catch(i){throw i instanceof Jt?i:new Jt(e,i)}}async function es(e,i){return i||async function(e){const i=await e.callWS({type:"config_entries/get",domain:be}),t=(i.find(e=>"loaded"===e.state)??i[0])?.entry_id;if(!t)throw new Jt("error.missing_config");return t}(e)}async function is(e,i,t,s,a){const n=await es(e,s);return e.callService(be,i,{config_entry_id:n,...t},void 0,!1,a)}async function ts(e,i,t,s){await is(e,i,t,s)}async function ss(e,i,t,s){const a=await is(e,i,t,s,!0);return a?.response??null}function as(e){return e?.recipe??null}function ns(e){const i={date:e.date,entry_type:e.entryType};return e.recipeId?{...i,recipe_id:e.recipeId}:{...i,note_title:e.noteTitle,...e.noteText&&{note_text:e.noteText}}}function rs(e,i={}){return Xt("error.error_loading",async()=>{const t={result_limit:i.resultLimit??we};i.search&&(t.search_terms=i.search);const s=await ss(e,"get_recipes",t,i.configEntryId);return s?.recipes?.items??[]})}function os(e,i,t){return Xt("error.error_loading",async()=>as(await ss(e,"get_recipe",{recipe_id:i},t)))}function ls(e,i){return Xt("error.error_adding_recipe",()=>ts(e,"set_mealplan",ns(i),i.configEntryId))}function ds(e,i){return Xt("error.error_loading",()=>ts(e,"add_recipe_to_shopping_list",{shopping_list_id:i.shoppingListId,recipe_id:i.recipeId,...void 0!==i.quantity&&{recipe_increment_quantity:i.quantity}},i.configEntryId))}async function cs(e,i){const t=await e.callWS({type:"config/entity_registry/list"});return new Map(t.filter(e=>e.platform===be&&e.entity_id.startsWith("todo.")&&(!i||e.config_entry_id===i)).map(e=>[e.unique_id,e.entity_id]))}function ps(e){return e.slice(e.lastIndexOf("_")+1)}function _s(e,i){const t=e.states[i]?.attributes.friendly_name;return"string"==typeof t?t:i}async function hs(e,i){const t=await async function(e,i){if(!i.length||!e.services?.[be]?.get_shopping_list_items)return{};try{const t=await e.callService(be,"get_shopping_list_items",{},{entity_id:i},!1,!0);return t?.response??{}}catch{return{}}}(e,[...i.values()]);return[...i].map(([i,s])=>({id:ps(i),name:t[s]?.name||_s(e,s),entity_id:s}))}function gs(e,i,t,s={},a=!1){return e.callService("todo",i,s,{entity_id:t},!1,a)}function us(e,i,t){return Xt("error.error_updating_shopping_list",async()=>{await gs(e,"add_item",i,{item:t})})}function ms(e){if(!e)return!1;try{const{protocol:i}=new URL(e);return"http:"===i||"https:"===i}catch{return!1}}function fs(e){return!!e&&e.startsWith("/")&&!e.startsWith("//")}function vs(e){return ms(e)||fs(e)}const ys=new WeakMap;function bs(e){let i=ys.get(e);return i||(i=function(e){const i=[vs(e.image_url)?e.image_url:void 0,e.url];return[...new Set(i.filter(e=>!!e))]}(e),ys.set(e,i)),i}function ws(e){window.open(e,"_blank","noopener,noreferrer")}const $s=new Map,ks=new Map;function zs(e){const[i,t,s]=e.split("-").map(Number);return new Date(i,t-1,s)}function xs(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}const As=/^(\d{1,3})\s*-\s*(\d{1,3})$/;function Ss(e,i,t){if(e===i)return Is(e,t);const s=function(e){let i=ks.get(e);return i||(i=new Intl.DateTimeFormat(e,{month:"short",day:"numeric"}),ks.set(e,i)),i}(t.locale?.language??"en");return`${s.format(zs(e))} – ${s.format(zs(i))}`}function Is(e,i){const t=zs(e),s=new Date;return s.setHours(0,0,0,0),t.getTime()===s.getTime()?Ut(i.locale?.language??"en","common.today"):function(e){let i=$s.get(e);return i||(i=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric"}),$s.set(e,i)),i}(i.locale?.language??"en").format(t)}const Ts="mealie-mealplan-updated",Ms="mealie-recipes-updated",Rs="mealie-shopping-list-updated",Es="mealie-recipe-rated",Cs="mealie-favorite-toggled",Ds={[Ts]:0,[Ms]:0,[Rs]:0};function js(e){return Ds[e]}function Ls(e,i){window.dispatchEvent(new CustomEvent(e,{detail:i}))}function Ps(e,i){const t=e=>i(e.detail);return window.addEventListener(e,t),()=>window.removeEventListener(e,t)}const Os=n`
  .days-wrapper {
    container-type: inline-size;
    transition: opacity var(--ha-animation-duration-fast, 150ms) ease-in-out;
  }

  ha-icon-button {
    --ha-icon-button-size: 35px;
    --mdc-icon-button-size: 35px;
    --mdc-icon-size: 20px;
    color: var(--primary-color);
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

  .recipe-press-surface {
    position: absolute;
    inset: 0;
    z-index: 1;
    border-radius: inherit;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  .recipe-press-surface:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .recipe-card.pressable :is(.favorite-button, mealie-star-rating[interactive]) {
    position: relative;
    z-index: 2;
  }

  .recipe-card.pressable .recipe-type {
    pointer-events: none;
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

  .recipe-card:not(:has(.recipe-card-image)) .recipe-tags {
    order: 2;
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
    flex-wrap: wrap;
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

  .servings-badge {
    display: flex;
    align-items: center;
    align-self: center;
  }

  .servings-badge ha-icon {
    --mdc-icon-size: 16px;
  }

  .servings-value {
    white-space: nowrap;
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
    background: color-mix(in srgb, var(--ha-color-fill-primary-loud-active, var(--primary-color)) 80%, transparent);
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

  .ingredient-shopping-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: var(--ha-space-2, 8px);
    padding-top: var(--ha-space-2, 8px);
  }

  .ingredient-shopping-bar ha-selector {
    flex: 1 1 180px;
  }

  .ingredient-item:hover {
    background: var(--secondary-background-color);
  }

  .ingredient-item-text {
    font-size: var(--ha-font-size-m, 14px);
    color: var(--primary-text-color);
    flex: 1;
  }

  .cook-mode {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-4, 16px);
    outline: none;
  }

  .cook-progress {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-1, 4px);
  }

  .cook-step-counter,
  .cook-section-label {
    font-size: var(--ha-font-size-s, 12px);
    font-weight: var(--ha-font-weight-bold, 700);
    color: var(--secondary-text-color);
    text-transform: uppercase;
  }

  .cook-progress-track {
    height: var(--ha-space-1, 4px);
    border-radius: var(--ha-border-radius-pill, 9999px);
    background: var(--divider-color);
    overflow: hidden;
  }

  .cook-progress-fill {
    height: 100%;
    background: var(--primary-color);
    transition: width var(--ha-animation-duration-normal, 250ms) ease;
  }

  .cook-step-title {
    margin: 0;
    font-size: var(--ha-font-size-l, 16px);
    color: var(--primary-text-color);
  }

  .cook-step-text {
    margin: 0;
    font-size: var(--ha-font-size-l, 14px);
    line-height: var(--ha-line-height-normal, 1.5);
    color: var(--primary-text-color);
    white-space: pre-line;
  }

  .cook-ingredients ul {
    margin: var(--ha-space-1, 4px) 0 0;
    padding-left: var(--ha-space-5, 20px);
  }

  .cook-ingredients li {
    font-size: var(--ha-font-size-m, 14px);
    color: var(--primary-text-color);
  }

  .cook-timer-controls {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ha-space-2, 8px);
  }

  .cook-custom-timer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ha-space-2, 8px);
  }

  .cook-timers {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-2, 8px);
  }

  .cook-timer {
    display: flex;
    align-items: center;
    gap: var(--ha-space-2, 8px);
    padding: var(--ha-space-1, 4px) var(--ha-space-1, 4px) var(--ha-space-1, 4px) var(--ha-space-3, 12px);
    border-radius: var(--ha-border-radius-md, 8px);
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
  }

  .cook-timer.done {
    background: var(--warning-color);
    color: var(--text-primary-color);
  }

  .cook-timer-label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .cook-timer-value {
    font-variant-numeric: tabular-nums;
    font-weight: var(--ha-font-weight-bold, 700);
  }

  :host(.card-cook-timers) .cook-timers {
    padding: var(--ha-space-3, 12px) var(--ha-space-4, 16px) 0;
  }

  .cook-mode {
    touch-action: pan-y;
  }

  .ingredient-item.checked .ingredient-item-text {
    text-decoration: line-through;
    color: var(--secondary-text-color);
  }

  .dialog-ingredient-list {
    max-height: none;
    overflow-y: visible;
  }

  .dialog-ingredient-list .ingredient-item.checked .ingredient-item-text {
    text-decoration: none;
    color: var(--primary-text-color);
    font-weight: var(--ha-font-weight-medium, 500);
  }

  .recipe-source-link {
    display: inline-flex;
    align-items: center;
    gap: var(--ha-space-1, 4px);
    align-self: center;
    color: var(--primary-color);
    font-size: var(--ha-font-size-s, 12px);
    text-decoration: none;
  }

  .recipe-source-link ha-icon {
    --mdc-icon-size: 16px;
  }

  .recipe-tags {
    padding: 0 var(--ha-space-2, 8px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--ha-space-1, 4px);
  }

  .recipe-tag {
    padding: 2px var(--ha-space-2, 8px);
    border-radius: var(--ha-border-radius-pill, 9999px);
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    font-size: var(--ha-font-size-s, 12px);
    line-height: 1.5;
  }

  .plan-toolbar {
    display: flex;
    align-items: center;
    gap: var(--ha-space-2, 8px);
    padding: var(--ha-space-2, 8px) var(--ha-space-2, 8px) 0;
  }

  .recipe-pagination {
    display: flex;
    align-items: center;
    padding-top: var(--ha-space-2, 8px);
  }

  .plan-navigation {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
  }

  .plan-range-label {
    flex: 1;
    min-width: 0;
    text-align: center;
    font-weight: var(--ha-font-weight-medium, 500);
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .plan-shopping-button {
    margin-left: auto;
  }

  .recipe-filters {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ha-space-1, 4px);
    margin-bottom: var(--ha-space-2, 8px);
  }

  .filter-chip {
    border: 1px solid transparent;
    cursor: pointer;
    font-family: inherit;
  }

  .filter-chip:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }

  .filter-chip.selected {
    border-color: var(--primary-color);
    background: var(--primary-color);
    color: var(--text-primary-color);
  }

  .recipe-tag.category {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    color: var(--primary-color);
  }

  .cook-nav {
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    gap: var(--ha-space-2, 8px);
    padding-top: var(--ha-space-2, 8px);
  }

  .shopping-add-row {
    display: flex;
    align-items: center;
    gap: var(--ha-space-1, 4px);
  }

  .shopping-add-row ha-selector {
    flex: 1;
  }

  .shopping-items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .shopping-item {
    display: flex;
    align-items: center;
    gap: var(--ha-space-1, 4px);
    min-height: 48px;
    border-bottom: 1px solid var(--divider-color);
  }

  .shopping-item:last-child {
    border-bottom: none;
  }

  .shopping-item-text {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .shopping-item-summary {
    font-size: var(--ha-font-size-m, 14px);
    color: var(--primary-text-color);
    overflow-wrap: anywhere;
  }

  .shopping-item-description {
    font-size: var(--ha-font-size-s, 12px);
    color: var(--secondary-text-color);
  }

  .shopping-item.completed .shopping-item-summary {
    color: var(--secondary-text-color);
    text-decoration: line-through;
  }

  .shopping-item-remove {
    --mdc-icon-button-size: 36px;
    color: var(--secondary-text-color);
  }

  .shopping-completed {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--ha-space-2, 8px);
  }

  .shopping-completed .shopping-items {
    align-self: stretch;
  }
`,Ns=(e,i,t,s)=>{const a={},n=new Event(i,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=t,e.dispatchEvent(n),n};function Vs(e,i,t){return{key:`${e}:${i}`,kind:e,name:t}}function Us(e){return[...(e.categories??[]).map(e=>Vs("category",e.slug,e.name)),...(e.tags??[]).map(e=>Vs("tag",e.slug,e.name))]}function Hs(e,i){const t=new Set;return e&&t.add("category"),i&&t.add("tag"),t}function Fs(e,i){return e.kind!==i.kind?"category"===e.kind?-1:1:e.name.localeCompare(i.name)}const Bs={shopping_list:"add_recipe_to_shopping_list",interactive_rating:"rate_recipe",favorites:"add_recipe_favorite",import_recipe:"import_recipe",random_mealplan:"set_random_mealplan",edit_mealplan:"update_mealplan",delete_mealplan:"delete_mealplan"};function qs(e,i){return!!e?.services?.[be]?.[Bs[i]]}const Ks={tiny:"tiny-original.webp",min:"min-original.webp",original:"original.webp"};function Ws(e){return fs(e)||e.startsWith("http")}function Zs(e,i,t){const s=i.replace(/\/$/,"");return fs(s)?function(e,i,t){return i.recipe_id?`${e}/${encodeURIComponent(i.recipe_id)}/images/${Ks[t]}`:null}(s,e,t):function(e,i,t){const s=i.recipe_id||i.slug;return s?`${e}/api/media/recipes/${encodeURIComponent(s)}/images/${Ks[t]}`:null}(s,e,t)}function Gs(e,i,t="min"){return e.image&&Ws(e.image)?[e.image]:i.map(i=>Zs(e,i,t)).filter(e=>!!e)}const Qs=e=>class extends e{constructor(){super(...arguments),this.localize=(e,i,t)=>Ut(this.hass?.locale?.language??"en",e,i,t),this.localizeError=(e,i="error.error_loading")=>{if(e instanceof Jt){const i=this.localize(e.translationKey);return e.detail?`${i}: ${e.detail}`:i}return e instanceof Error&&e.message?e.message:this.localize(i)}}},{I:Js}=se,Ys=e=>e,Xs=()=>document.createComment(""),ea=(e,i,t)=>{const s=e._$AA.parentNode,a=void 0===i?e._$AB:i._$AA;if(void 0===t){const i=s.insertBefore(Xs(),a),n=s.insertBefore(Xs(),a);t=new Js(i,n,e,e.options)}else{const i=t._$AB.nextSibling,n=t._$AM,r=n!==e;if(r){let i;t._$AQ?.(e),t._$AM=e,void 0!==t._$AP&&(i=e._$AU)!==n._$AU&&t._$AP(i)}if(i!==a||r){let e=t._$AA;for(;e!==i;){const i=Ys(e).nextSibling;Ys(s).insertBefore(e,a),e=i}}}return t},ia=(e,i,t=e)=>(e._$AI(i,t),e),ta={},sa=(e,i=ta)=>e._$AH=i,aa=e=>{e._$AR(),e._$AA.remove()},na=(e,i)=>{const t=e._$AN;if(void 0===t)return!1;for(const e of t)e._$AO?.(i,!1),na(e,i);return!0},ra=e=>{let i,t;do{if(void 0===(i=e._$AM))break;t=i._$AN,t.delete(e),e=i}while(0===t?.size)},oa=e=>{for(let i;i=e._$AM;e=i){let t=i._$AN;if(void 0===t)i._$AN=t=new Set;else if(t.has(e))break;t.add(e),ca(i)}};function la(e){void 0!==this._$AN?(ra(this),this._$AM=e,oa(this)):this._$AM=e}function da(e,i=!1,t=0){const s=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(i)if(Array.isArray(s))for(let e=t;e<s.length;e++)na(s[e],!1),ra(s[e]);else null!=s&&(na(s,!1),ra(s));else na(this,e)}const ca=e=>{e.type==he&&(e._$AP??=da,e._$AQ??=la)};class pa extends me{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,t){super._$AT(e,i,t),oa(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(na(this,e),ra(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}function _a(e){return!!(e.onTap||e.onHold||e.onDoubleTap)}const ha=new Set(["Enter"," "]);const ga=ue(class extends pa{constructor(e){if(super(e),this._handlers={},this._holdTimer=null,this._pressOrigin=null,this._holdFired=!1,this._pendingTapTimer=null,this._onPointerDown=e=>{this._holdFired=!1,this._cancelHold(),this._handlers.onHold&&0===e.button&&(this._pressOrigin={x:e.clientX,y:e.clientY},this._holdTimer=setTimeout(this._fireHold,500))},this._onPointerMove=e=>{this._pressOrigin&&Math.hypot(e.clientX-this._pressOrigin.x,e.clientY-this._pressOrigin.y)>10&&this._cancelHold()},this._fireHold=()=>{this._cancelHold(),this._holdFired=!0,this._handlers.onHold?.()},this._cancelHold=()=>{this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=null,this._pressOrigin=null},this._onContextMenu=e=>{(this._holdTimer||this._holdFired)&&(e.preventDefault(),this._holdTimer&&this._fireHold())},this._onClick=()=>{if(this._holdFired)this._holdFired=!1;else{if(this._handlers.onDoubleTap)return this._pendingTapTimer?(this._cancelPendingTap(),void this._handlers.onDoubleTap()):void(this._pendingTapTimer=setTimeout(this._firePendingTap,250));this._handlers.onTap?.()}},this._firePendingTap=()=>{this._pendingTapTimer=null,this._handlers.onTap?.()},this._onKeyDown=e=>{e.target===this._element&&!e.repeat&&ha.has(e.key)&&this._handlers.onTap&&(e.preventDefault(),this._handlers.onTap())},e.type!==ge)throw new Error("recipePress must be bound to an element")}render(e){return B}update(e,[i]){return this._handlers=i,this._element!==e.element&&(this._element=e.element,this._listen(this._element)),B}disconnected(){this._cancelHold(),this._cancelPendingTap()}_listen(e){e.addEventListener("pointerdown",this._onPointerDown),e.addEventListener("pointermove",this._onPointerMove),e.addEventListener("pointerup",this._cancelHold),e.addEventListener("pointercancel",this._cancelHold),e.addEventListener("pointerleave",this._cancelHold),e.addEventListener("contextmenu",this._onContextMenu),e.addEventListener("click",this._onClick),e.addEventListener("keydown",this._onKeyDown)}_cancelPendingTap(){this._pendingTapTimer&&clearTimeout(this._pendingTapTimer),this._pendingTapTimer=null}}),ua=()=>{},ma=e=>customElements.get(e)?ua:(e=>(i,t)=>{void 0!==t?t.addInitializer(()=>{customElements.define(e,i)}):customElements.define(e,i)})(e);var fa=Object.defineProperty,va=Object.getOwnPropertyDescriptor,ya=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?va(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&fa(i,t,n),n};let ba=class extends re{constructor(){super(...arguments),this.rating=0,this.interactive=!1,this.updating=!1,this._hovered=0}_emit(e){this.updating||this.dispatchEvent(new CustomEvent("rate-selected",{detail:{rating:e},bubbles:!1,composed:!1}))}render(){return this.interactive?this._renderInteractive():this._renderReadonly()}_renderReadonly(){const e=this.rating;return H`
      <span class="star-rating">
        ${ba.STARS.map(i=>H`<ha-icon icon=${e>=i?"mdi:star":e>=i-.5?"mdi:star-half-full":"mdi:star-outline"}></ha-icon>`)}
      </span>
    `}_renderInteractive(){const e=this._hovered||this.rating;return H`
      <span
        class="star-rating interactive-rating ${this.updating?"updating":""}"
        @mouseleave=${()=>{this._hovered=0}}
      >
        ${ba.STARS.map(i=>H`
            <ha-icon
              icon=${e>=i?"mdi:star":"mdi:star-outline"}
              @mouseenter=${()=>{this._hovered=i}}
              @click=${()=>this._emit(i)}
            ></ha-icon>
          `)}
      </span>
    `}};ba.styles=n`
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
  `,ba.STARS=[1,2,3,4,5],ya([ce({type:Number})],ba.prototype,"rating",2),ya([ce({type:Boolean})],ba.prototype,"interactive",2),ya([ce({type:Boolean})],ba.prototype,"updating",2),ya([pe()],ba.prototype,"_hovered",2),ba=ya([ma("mealie-star-rating")],ba);var wa=Object.defineProperty,$a=(e,i,t,s)=>{for(var a,n=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(i,t,n)||n);return n&&wa(i,t,n),n};function ka(e){e.currentTarget.parentElement?.classList.remove("image-loading")}function za(e){const i=e.currentTarget.parentElement;i&&(i.classList.remove("image-loading"),i.classList.add("image-error"))}function xa(e,i,t){const s=[...new Set(Gs(i,t.urls,t.variant??"min").map(i=>function(e,i){return i.startsWith("/")?`${e.auth.data.hassUrl}${i}`:i}(e,i)).filter(vs))];if(!s.length)return B;const a=function(e){return!e.image}(i)&&t.onImageMissing?t.onImageMissing:za;return H`
    <div class="${t.containerClass} image-loading">
      <img
        src=${s[0]}
        alt=${i.name??i.title??""}
        class="${t.imgClass}"
        loading="lazy"
        decoding="async"
        @load=${ka}
        @error=${function(e,i){return t=>{const s=t.currentTarget,a=e[e.indexOf(s.getAttribute("src")??"")+1];a?s.src=a:i(t)}}(s,a)}
      />
    </div>
  `}const Aa=e=>{class i extends(Qs(e)){constructor(){super(...arguments),this.error=null,this._loading=!1,this._initialized=!1,this._ratings=new Map,this._updatingRatings=new Set,this._favorites=new Map,this._updatingFavorites=new Set,this._missingImages=new Set}supports(e){return qs(this.hass,e)}get baseConfig(){return this.config??{}}recipeWebUrl(e){return function(e,i,t){if(!ms(e)||!i)return null;const s=e.replace(/\/$/,""),a=t?.trim()||Ie;return`${s}/g/${encodeURIComponent(a)}/r/${encodeURIComponent(i)}`}(this.baseConfig.url,e?.slug,this.baseConfig.mealie_group_slug)}openRecipe(e){if("browser"!==this.baseConfig.recipe_view)return!0;const i=this.recipeWebUrl(e);return!i||(ws(i),!1)}handleError(e){this.error=this.localizeError(e)}_markImageMissing(e){this._missingImages.has(e)||(this._missingImages=new Set(this._missingImages).add(e))}renderRecipeImage(e,i){if(!i)return B;const t=e.slug??e.recipe_id;return t&&this._missingImages.has(t)?B:xa(this.hass,e,{urls:bs(this.baseConfig),variant:"min",containerClass:"recipe-card-image",imgClass:"recipe-image",onImageMissing:t?()=>this._markImageMissing(t):void 0})}renderActionsMenu(e,i){return e.length?H`
        <ha-dropdown @wa-select=${i=>e[Number(i.detail.item.value)]?.onClick()}>
          <ha-icon-button class="plain-icon-button" slot="trigger" .label=${this.localize(i)}>
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </ha-icon-button>
          ${e.map((e,i)=>H`
              <ha-dropdown-item variant=${e.variant??B} value=${i}>
                <ha-icon slot="icon" icon=${e.icon}></ha-icon>
                ${this.localize(e.labelKey)}
              </ha-dropdown-item>
            `)}
        </ha-dropdown>
      `:B}renderCardButtons(e){return e.length?H`<div class="card-buttons">${this.renderActionsMenu(e,"cards.recipe_actions")}</div>`:B}renderPressSurface(e,i){if(!_a(i))return B;const t=i.onTap;return H`
        <div
          class="recipe-press-surface"
          role=${t?"button":B}
          tabindex=${t?"0":B}
          aria-label=${t?e??B:B}
          ${ga(i)}
        >
          <ha-ripple></ha-ripple>
        </div>
      `}renderRecipeMedia(e,i,t){return H`${this.renderRecipeImage(e,i)}${this.renderCardButtons(t)}`}renderRecipeName(e){return H`<h4 class="recipe-name">${e.name??e.title}</h4>`}renderRecipeDescription(e,i){return i&&e?H`<div class="recipe-description">${e}</div>`:B}buildTimeRows(e,i=!0,t=!0,s=!0){const a=this.hass?.locale?.language;return[{kind:"prep",show:i,icon:"mdi:knife",labelKey:"dialog.prep_time"},{kind:"perform",show:t,icon:"mdi:pot-steam",labelKey:"dialog.cooking_time"},{kind:"total",show:s,icon:"mdi:clock-time-three-outline",labelKey:"dialog.total_time"}].flatMap(({kind:i,show:t,icon:s,labelKey:n})=>{const r=t?Wt(e,i,a):"";return r?[{icon:s,label:this.localize(n),value:r}]:[]})}renderTimeRows(e){return H`${e.map(e=>H`
          <div class="time-row">
            <ha-icon class="time-row-icon" icon=${e.icon}></ha-icon>
            <span class="time-row-label">${e.label}</span>
            <span class="time-row-value">${e.value}</span>
          </div>
        `)}`}renderRecipeTimes(e,i,t,s){const a=this.buildTimeRows(e,i,t,s);return a.length?H`<div class="recipe-times">${this.renderTimeRows(a)}</div>`:B}async _setRating(e,i,t){if(!e||!this.hass)return;if(this._updatingRatings.has(e))return;const s=this._ratings.get(e)??0;this._ratings=new Map(this._ratings).set(e,i),this._updatingRatings=new Set(this._updatingRatings).add(e);try{await function(e,i,t,s){return Xt("error.error_loading",()=>{if(!i)throw new Jt("error.error_loading");return ts(e,"rate_recipe",{recipe_slug:i,rating:t},s)})}(this.hass,e,i,t),Ls(Es,{slug:e,rating:i})}catch{this._ratings=new Map(this._ratings).set(e,s),Ns(this,"hass-notification",{message:this.localize("error.error_loading")})}finally{const i=new Set(this._updatingRatings);i.delete(e),this._updatingRatings=i}}async _toggleFavorite(e,i){if(!e||!this.hass)return;if(this._updatingFavorites.has(e))return;const t=this._favorites.get(e)??!1,s=!t;this._favorites=new Map(this._favorites).set(e,s),this._updatingFavorites=new Set(this._updatingFavorites).add(e),Ls(Cs,{slug:e,favorite:s});try{await(s?function(e,i,t){return Xt("error.error_loading",()=>{if(!i)throw new Jt("error.error_loading");return ts(e,"add_recipe_favorite",{recipe_slug:i},t)})}(this.hass,e,i??void 0):function(e,i,t){return Xt("error.error_loading",()=>{if(!i)throw new Jt("error.error_loading");return ts(e,"remove_recipe_favorite",{recipe_slug:i},t)})}(this.hass,e,i??void 0))}catch{this._favorites=new Map(this._favorites).set(e,t),Ls(Cs,{slug:e,favorite:t}),Ns(this,"hass-notification",{message:this.localize("error.error_loading")})}finally{const i=new Set(this._updatingFavorites);i.delete(e),this._updatingFavorites=i}}renderFavoriteButton(e,i,t){if(!i||!this.supports("favorites"))return B;const s=e?.slug;if(!s)return B;const a=this._favorites.get(s)??!1;return H`
        <ha-icon-button
          class="favorite-button"
          .label=${a?this.localize("dialog.remove_favorite"):this.localize("dialog.add_favorite")}
          .disabled=${this._updatingFavorites.has(s)}
          @click=${e=>{e.stopPropagation(),this._toggleFavorite(s,t)}}
        >
          <ha-icon icon=${a?"mdi:heart":"mdi:heart-outline"}></ha-icon>
        </ha-icon-button>
      `}_renderInteractiveRating(e,i,t){if(!i)return B;const s=e?.slug;if(!s||!this.supports("interactive_rating"))return this.renderStarRating(e?.rating??void 0,i);const a=this._updatingRatings.has(s),n=a?this._ratings.get(s)??e?.rating??0:e?.rating??0;return H`
        <mealie-star-rating
          interactive
          .rating=${n}
          ?updating=${a}
          @rate-selected=${e=>{this._setRating(s,e.detail.rating,t??void 0)}}
        ></mealie-star-rating>
      `}renderStarRating(e,i){return i?H`<mealie-star-rating .rating=${e??0}></mealie-star-rating>`:B}renderServings(e,i){if(!i)return B;const t=e.recipe_servings,s=function(e){const i=e.recipe_yield?.trim()??"",t=e.recipe_yield_quantity??0;return i?t>0&&!i.startsWith(String(t))?`${t} ${i}`:i:""}(e);if(!t&&!s)return B;const a=!!t&&!!s&&function(e){const i=e.recipe_yield_quantity??0;if(i>0)return i;const t=e.recipe_yield?.trim().match(/^\d+(?:[.,]\d+)?/)?.[0];return t?Number(t.replace(",",".")):0}(e)===t;return H`
        ${t&&!a?H`<span class="servings-badge" title=${this.localize("dialog.servings")}>
              <ha-icon icon="mdi:circle-slice-1"></ha-icon>
              <span class="servings-value">${t}</span>
            </span>`:B}
        ${s?H`<span class="servings-badge" title=${this.localize("dialog.recipe_yield")}>
              <ha-icon icon="mdi:basket-outline"></ha-icon>
              <span class="servings-value">${s}</span>
            </span>`:B}
      `}renderRecipeTags(e,i){const t=Hs(i.show_categories,i.show_tags);if(!t.size)return B;const s=Us(e).filter(e=>t.has(e.kind));return s.length?H`<div class="recipe-tags">
        ${s.map(e=>H`<span class="recipe-tag ${e.kind}">${e.name}</span>`)}
      </div>`:B}renderDetailsSection(e,i,t){return H`
        <ha-expansion-panel outlined expanded>
          <ha-icon slot="leading-icon" icon=${e}></ha-icon>
          <span slot="header" class="details-title">${i}</span>
          <div class="details-content">${t}</div>
        </ha-expansion-panel>
      `}}return $a([pe()],i.prototype,"error"),$a([pe()],i.prototype,"_loading"),$a([pe()],i.prototype,"_initialized"),$a([pe()],i.prototype,"_ratings"),$a([pe()],i.prototype,"_updatingRatings"),$a([pe()],i.prototype,"_favorites"),$a([pe()],i.prototype,"_updatingFavorites"),$a([pe()],i.prototype,"_missingImages"),i},Sa=new WeakMap;function Ia(e,i){let t=Sa.get(e);t||(t=new Map,Sa.set(e,t));let s=t.get(i);return s||(s={...e,language:i},t.set(i,s)),s}function Ta(e){if(e)try{return Intl.getCanonicalLocales(e)[0]}catch{return}}class Ma{constructor(){this._context=null}prime(){if(!this._context&&"function"==typeof window.AudioContext)try{this._context=new window.AudioContext}catch{this._context=null}}play(){const e=this._context;e&&e.resume().then(()=>this._scheduleBeeps(e)).catch(()=>{})}dispose(){this._context?.close().catch(()=>{}),this._context=null}_scheduleBeeps(e){const i=e.currentTime;for(let t=0;t<3;t+=1){const s=i+.35*t,a=e.createOscillator(),n=e.createGain();a.frequency.value=880,n.gain.value=.25,a.connect(n).connect(e.destination),a.start(s),a.stop(s+.2)}}}const Ra="cook-timers-changed",Ea=[300,150,300];class Ca extends EventTarget{constructor(e){super(),this._onDone=e,this._timers=[],this._nextId=0,this._alarm=new Ma,this._tick=()=>{if(!this._timers.length)return;const e=Date.now(),i=[];let t=!1;const s=this._timers.map(s=>{if(s.remaining<=0)return s;const a=Math.max(0,Math.ceil((s.endsAt-e)/1e3));if(a===s.remaining)return s;t=!0;const n={...s,remaining:a};return 0===a&&i.push(n),n});t&&this._setTimers(s),i.forEach(e=>this._notifyDone(e)),this._hasRunningTimer()||this._stopTicking()}}get timers(){return this._timers}start(e,i,t={}){e<=0||(this._alarm.prime(),this._nextId+=1,this._setTimers([...this._timers,{id:this._nextId,label:i,seconds:e,...t,endsAt:Date.now()+1e3*e,remaining:e}]),this._startTicking())}dismiss(e){this._setTimers(this._timers.filter(i=>i.id!==e)),this._hasRunningTimer()||this._stopTicking()}resume(){this._tick(),this._hasRunningTimer()&&this._startTicking()}suspend(){this._stopTicking()}dispose(){this._stopTicking(),this._alarm.dispose()}_setTimers(e){this._timers=e,this.dispatchEvent(new Event(Ra))}_hasRunningTimer(){return this._timers.some(e=>e.remaining>0)}_startTicking(){this._tickHandle??(this._tickHandle=setInterval(this._tick,1e3))}_stopTicking(){void 0!==this._tickHandle&&(clearInterval(this._tickHandle),this._tickHandle=void 0)}_notifyDone(e){this._alarm.play(),navigator.vibrate?.(Ea),this._onDone(e)}}const Da="{timer}",ja="{label}",La="{step}",Pa="{recipe}";function Oa(e,i){return"string"==typeof e?function(e,i){return Object.entries(i).reduce((e,[i,t])=>e.split(i).join(t),e)}(e,i):Array.isArray(e)?e.map(e=>Oa(e,i)):e&&"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Oa(t,i)])):e}const Na={hour:3600,minute:60},Va={hour:["time.hour","time.hours","time.hour_short"],minute:["time.minute","time.minutes","time.minute_short"]},Ua="\\d+(?:[.,]\\d+)?",Ha=new Map;function Fa(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ba(e){const i=function(e){const i=new Map;for(const t of new Set([e,"en"]))for(const e of Object.keys(Va))for(const s of Va[e]){const a=Ut(t,s).toLowerCase().trim();a&&a!==s&&!i.has(a)&&i.set(a,e)}return i}(e),t=[...i.keys()].sort((e,i)=>i.length-e.length).map(Fa);return{pattern:new RegExp(`(${Ua})(?:\\s*[-–]\\s*(${Ua}))?\\s*(${t.join("|")})(?!\\p{L})`,"giu"),units:i}}function qa(e){return Number(e.replace(",","."))}function Ka(e,i,t){return"hour"===e?.unit&&"minute"===i.unit&&!t.slice(e.end,i.start).trim()}function Wa(e){return e.seconds>0&&e.seconds<=86400}function Za(e,i){if(!e)return[];const t=function(e,i){const t=[];for(const s of e){const e=t[t.length-1];Ka(e,s,i)?t[t.length-1]={...s,seconds:e.seconds+s.seconds,label:i.slice(e.start,s.end).trim(),start:e.start}:t.push(s)}return t.map(({seconds:e,label:i})=>({seconds:e,label:i}))}(function(e,i){const t=[];for(const s of e.matchAll(i.pattern)){const e=i.units.get(s[3].toLowerCase());if(!e||void 0===s.index)continue;const a=qa(s[2]??s[1]);t.push({unit:e,seconds:Math.round(a*Na[e]),label:s[0].trim(),start:s.index,end:s.index+s[0].length})}return t}(e,function(e){let i=Ha.get(e);return i||(i=Ba(e),Ha.set(e,i)),i}(i)),e).filter(Wa),s=new Set;return t.filter(e=>!s.has(e.seconds)&&!!s.add(e.seconds))}function Ga(e){const i=Math.max(0,Math.round(e)),t=Math.floor(i/3600),s=Math.floor(i%3600/60),a=String(i%60).padStart(2,"0");return t?`${t}:${String(s).padStart(2,"0")}:${a}`:`${s}:${a}`}var Qa=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,Ya=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?Ja(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&Qa(i,t,n),n};let Xa=class extends(Qs(re)){constructor(){super(...arguments),this.store=null,this._subscribedStore=null,this._onTimersChanged=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this._subscribe(this.store)}disconnectedCallback(){super.disconnectedCallback(),this._subscribe(null)}willUpdate(e){super.willUpdate(e),e.has("store")&&this.isConnected&&this._subscribe(this.store)}_subscribe(e){e!==this._subscribedStore&&(this._subscribedStore?.removeEventListener(Ra,this._onTimersChanged),this._subscribedStore=e,e?.addEventListener(Ra,this._onTimersChanged))}_renderTimer(e){const i=e.remaining<=0;return H`
      <div class="cook-timer ${i?"done":""}" role=${i?"alert":"timer"}>
        <ha-icon icon=${i?"mdi:bell-ring":"mdi:timer-sand"}></ha-icon>
        <span class="cook-timer-label">${e.label}</span>
        <span class="cook-timer-value">${Ga(e.remaining)}</span>
        <ha-icon-button class="cook-timer-dismiss" .label=${this.localize("dialog.dismiss_timer")} @click=${()=>this.store?.dismiss(e.id)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `}render(){const e=this.store?.timers??[];return e.length?H`<div class="cook-timers">${e.map(e=>this._renderTimer(e))}</div>`:B}};Xa.styles=Os,Ya([ce({attribute:!1})],Xa.prototype,"hass",2),Ya([ce({attribute:!1})],Xa.prototype,"store",2),Xa=Ya([ma("mealie-cook-timers")],Xa);var en=Object.defineProperty;class tn extends(Aa(re)){constructor(){super(...arguments),this._watchSignature="",this._unsubscribers=[],this._seenRevision=0,this._pendingReload=!1,this._lastLoadedAt=0,this.timerStore=new Ca(e=>{Ns(this,"hass-notification",{message:this.localize("dialog.timer_done","{timer}",e.label)}),this._runTimerDoneAction(e)}),this._onVisibilityChange=()=>{"visible"===document.visibilityState&&(this.timerStore.resume(),this._catchUp())}}async _runTimerDoneAction(e){const i=function(e,i="en"){let t=Math.max(0,Math.round(e));const s=[];for(const e of Kt){const a=Math.floor(t/e.seconds);t-=a*e.seconds,a&&s.push(`${a} ${Ut(i,1===a?e.singular:e.plural)}`)}return s.join(" ")||`0 ${Ut(i,"time.seconds")}`}(e.seconds,this.hass?.locale?.language??"en");try{await async function(e,i,t){const s=function(e){if(!e||"none"===e.action)return null;const i=e.perform_action??e.service,[t,s,...a]=i?.split(".")??[];return t&&s&&!a.length?{domain:t,service:s}:null}(i);if(!s)return;const a={[Da]:t.duration,[ja]:t.label,[La]:t.step,[Pa]:t.recipe};await e.callService(s.domain,s.service,Oa(i?.data??{},a),i?.target,!1)}(this.hass,this.config?.timer_done_action,{duration:i,label:e.label,step:e.step?String(e.step):"",recipe:e.recipe??""})}catch(e){Ns(this,"hass-notification",{message:`${this.localize("error.timer_action_failed")}: ${this.localizeError(e)}`})}}refreshSignal(){return null}subscribeExtras(){return[]}watchedEntityIds(){return[]}hasOpenDialog(){return!1}canLoad(){return!!this.config?.config_entry_id}getCardSize(){return 1+2*(this.itemCount()||1)}getGridOptions(){return{rows:"auto",min_columns:6}}findMealieEntities(e){const i=this.hass,t=this.config?.config_entry_id??null,s=i?.entities,a=`${e}.`;if(!s){const e=i?.states??{};return Object.keys(e).filter(e=>e.startsWith(a)&&e.includes("mealie"))}const n=i?.devices;return Object.keys(s).filter(e=>{if(!e.startsWith(a))return!1;const i=s[e];if("mealie"!==i?.platform)return!1;if(t){if(i.config_entry_id)return i.config_entry_id===t;const e=i.device_id&&n?n[i.device_id]:void 0;if(e?.config_entries)return e.config_entries.includes(t)}return!0})}_registryRef(){const e=this.hass;return e?.entities??e?.states}_getWatchedEntityIds(){const e=this.config?.config_entry_id??null,i=this._registryRef();return this._watchedIds&&this._watchedIdsKey===e&&this._watchedRegistryRef===i||(this._watchedIdsKey=e,this._watchedRegistryRef=i,this._watchedIds=this.watchedEntityIds()),this._watchedIds}_computeWatchSignature(){const e=this._getWatchedEntityIds();if(!e.length)return"";const i=this.hass?.states??{};return e.map(e=>{const t=i[e];return t?`${e}=${t.state}@${t.last_updated}`:`${e}=∅`}).join("|")}async loadData(){if(this.hass&&this.canLoad()&&!this._loading&&!this._initialized){this._loading=!0,this.error=null;try{await this.fetchData(),this._initialized=!0,this._lastLoadedAt=Date.now()}catch(e){this.handleError(e)}finally{this._loading=!1,this._pendingReload&&(this._pendingReload=!1,this._reload())}}}_reload(){const e=this.refreshSignal();e&&(this._seenRevision=js(e)),this._loading?this._pendingReload=!0:(this._initialized=!1,this.loadData())}_catchUp(){const e=this.refreshSignal(),i=e?js(e):this._seenRevision,t=i!==this._seenRevision;this._seenRevision=i,this._initialized&&(t||Date.now()-this._lastLoadedAt>=3e4)&&this._reload()}_watchedStateChanged(){if(this._loading)return!1;const e=this._computeWatchSignature();return!!e&&e!==this._watchSignature}_maybeRefreshOnEntityChange(){if(this._loading)return;const e=this._computeWatchSignature();e&&(this.error?e!==this._watchSignature&&(this._watchSignature=e,this.error=null,this._reload()):this._initialized&&(this._watchSignature?e!==this._watchSignature&&(this._watchSignature=e,this._reload()):this._watchSignature=e))}connectedCallback(){super.connectedCallback();const e=this.refreshSignal();var i,t;this._unsubscribers=[...e?[(i=e,t=()=>this._reload(),window.addEventListener(i,t),()=>window.removeEventListener(i,t))]:[],...this.subscribeExtras()],document.addEventListener("visibilitychange",this._onVisibilityChange),this.timerStore.resume(),this._catchUp()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.timerStore.suspend(),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[],this._watchSignature="",this._watchedIds=void 0,this._watchedIdsKey=void 0,this._watchedRegistryRef=void 0}willUpdate(e){super.willUpdate(e),e.has("hass")&&this.hass&&this._maybeRefreshOnEntityChange(),!this.hass||this._initialized||this._loading||this.error||this.loadData()}_applyLanguage(e){if(e.has("hass")&&this.hass!==this._localizedHass&&(this._rawHass=this.hass),!this._rawHass)return;const i=function(e,i){const t=Ta(i);return e?.locale&&t&&e.locale.language!==t?{...e,locale:Ia(e.locale,t)}:e}(this._rawHass,this.config?.language);this._localizedHass=i,this.hass!==i&&(this.hass=i)}shouldUpdate(e){if(this._applyLanguage(e),e.size>1||!e.has("hass"))return!0;const i=e.get("hass");return!i||(i.locale!==this.hass.locale||i.services!==this.hass.services||this.hasOpenDialog()||this._watchedStateChanged())}renderCookTimers(){return H`<mealie-cook-timers class="card-cook-timers" .hass=${this.hass} .store=${this.timerStore}></mealie-cook-timers>`}renderLoadingIndicator(){return H`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`}renderErrorAlert(){return H`<ha-alert alert-type="error">${this.error}</ha-alert>`}renderLoading(){return H`
      <ha-card>
        <div class="card-content">${this.renderLoadingIndicator()}</div>
      </ha-card>
    `}renderEmptyState(e){return H`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="info">${e}</ha-alert>
        </div>
      </ha-card>
    `}}tn.styles=Os,((e,i,t)=>{for(var s,a=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(a=s(i,t,a)||a);a&&en(i,t,a)})([ce({attribute:!1})],tn.prototype,"hass");const sn={view_recipe:{labelKey:"cards.view_recipe",icon:"mdi:book-open-variant"},add_to_mealplan:{labelKey:"dialog.add_to_mealplan",icon:"mdi:calendar-plus"},add_to_shopping_list:{labelKey:"dialog.add_to_shopping_list",icon:"mdi:cart-plus"},edit_mealplan:{labelKey:"cards.edit_mealplan",icon:"mdi:pencil"},delete_mealplan:{labelKey:"cards.delete_mealplan",icon:"mdi:trash-can-outline",variant:"danger"}},an={add_to_shopping_list:"shopping_list",edit_mealplan:"edit_mealplan",delete_mealplan:"delete_mealplan"},nn={view_recipe:"show_view_recipe_button",add_to_mealplan:"show_add_to_mealplan_button",add_to_shopping_list:"show_shopping_list_button",edit_mealplan:"show_edit_mealplan_button",delete_mealplan:"show_delete_mealplan_button"};function rn(e,i){return!1===i.show_recipe_menu?[]:e.filter(e=>i[nn[e]]??!0)}function on(e,i){const t=an[i];return!t||qs(e,t)}function ln(e){return sn[e].labelKey}function dn(e,i){return e.flatMap(e=>{const t=i[e];return t?[{...sn[e],onClick:t}]:[]})}function cn(e,i){return i&&"none"!==i?e[i]:void 0}function pn(e,i){return{onTap:cn(e,i.recipe_tap_action),onHold:cn(e,i.recipe_hold_action),onDoubleTap:cn(e,i.recipe_double_tap_action)}}function _n(e,i,t,s=!1){return H`
    <label class="switch-row ${s?"disabled":""}">
      <span class="switch-label">${i}</span>
      <ha-switch
        .checked=${e}
        .disabled=${s}
        aria-label=${i}
        @change=${e=>t(e.target.checked)}
      ></ha-switch>
    </label>
  `}function hn(e,i,t,s,a,n){return H`
    <ha-selector
      .hass=${e}
      .selector=${{number:{min:s,max:a,mode:"box",step:1}}}
      .value=${i??s}
      .label=${t}
      .required=${!1}
      @value-changed=${e=>n(e.detail.value)}
    ></ha-selector>
  `}function gn(e,i,t,s){return H`
    <ha-selector
      .hass=${e}
      .selector=${{text:{}}}
      .value=${i??""}
      .label=${t}
      .required=${!1}
      @value-changed=${e=>s(e.detail.value)}
    ></ha-selector>
  `}function un(e,i,t,s,a){return H`
    <ha-selector
      .hass=${e}
      .selector=${{select:{mode:"dropdown",options:s}}}
      .value=${i}
      .label=${t}
      .required=${!1}
      @value-changed=${e=>a(e.detail.value)}
    ></ha-selector>
  `}const mn=n`
  ha-expansion-panel + ha-expansion-panel,
  ha-form + ha-expansion-panel,
  ha-expansion-panel + ha-form {
    border-radius: var(--ha-border-radius-md, 8px);
    margin-top: var(--ha-space-2, 8px);
    margin-bottom: var(--ha-space-2, 8px);
  }
  .switch-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ha-space-4, 16px);
    width: 100%;
    min-height: var(--ha-space-10, 40px);
    color: var(--primary-text-color);
    font-family: var(--ha-font-family-body, inherit);
    font-size: var(--ha-font-size-m, 14px);
    line-height: var(--ha-line-height-normal, 1.5);
    cursor: pointer;
  }
  .switch-row.disabled {
    color: var(--disabled-text-color);
    cursor: default;
  }
  .switch-label {
    flex: 1;
    min-width: 0;
  }
  .settings-fields {
    padding-bottom: var(--ha-space-2, 8px);
  }
  .settings-fields ha-selector:first-child {
    display: block;
    padding-top: var(--ha-space-3, 12px);
    padding-bottom: var(--ha-space-3, 12px);
  }
  .settings-fields .switch-row:first-child {
    padding-top: var(--ha-space-2, 8px);
  }
  .press-action-fields {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-3, 12px);
    padding: var(--ha-space-3, 12px) 0;
  }
  .settings-fields .press-action-fields ha-selector {
    padding: 0;
  }
  .nested-panel {
    margin-top: var(--ha-space-2, 8px);
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
    padding: var(--ha-space-half, 2px) var(--ha-space-2, 8px);
    border-radius: var(--ha-border-radius-pill, 9999px);
    background: var(--accent-color);
    color: var(--text-accent-color, var(--text-primary-color));
    font-weight: var(--ha-font-weight-medium, 500);
  }
`,fn="4.4.0";var vn=Object.defineProperty,yn=(e,i,t,s)=>{for(var a,n=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(i,t,n)||n);return n&&vn(i,t,n),n};class bn extends(Qs(re)){constructor(){super(...arguments),this._computeLabel=e=>this.fieldLabels()[e.name]??e.name}setConfig(e){this.config={...e}}integrationFields(){return[{name:"config_entry_id",selector:{config_entry:{integration:"mealie"}}}]}fieldLabels(){return{config_entry_id:this.localize("editor.integration")}}get _schemaTop(){return[{type:"expandable",title:this.localize("editor.integration"),icon:"mdi:connection",schema:this.integrationFields()}]}_commitConfig(e){this.config=e,Ns(this,"config-changed",{config:e})}_setValue(e,i){this._commitConfig({...this.config,[e]:i})}_valueChanged(e){this._commitConfig({...e.detail.value})}renderEditorLoading(){return H`<div>${this.localize("editor.loading")}</div>`}renderTopForm(){return H`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaTop}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_languageLabel(e){try{const i=new Intl.DisplayNames([e],{type:"language"}).of(e);return i?`${i.charAt(0).toLocaleUpperCase(e)}${i.slice(1)} · ${e}`:e}catch{return e}}_setLanguage(e){const i={...this.config};e&&"auto"!==e?i.language=e:delete i.language,this._commitConfig(i)}renderLanguageOptions(){const e=[{value:"auto",label:this.localize("editor.language_auto")},...Vt.map(e=>({value:e,label:this._languageLabel(e)}))];return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_language")}>
        <ha-icon slot="leading-icon" icon="mdi:translate"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{mode:"dropdown",options:e}}}
            .value=${Ta(this.config.language)??"auto"}
            .label=${this.localize("editor.language")}
            .helper=${this.localize("editor.language_helper")}
            .required=${!1}
            @value-changed=${e=>this._setLanguage(e.detail.value)}
          ></ha-selector>
        </div>
      </ha-expansion-panel>
    `}renderVersion(){return H`
      <div class="editor-version">
        <span class="editor-version-name">Mealie Card</span>
        <span class="editor-version-number">v${fn}</span>
        <a href="${"https://ko-fi.com/A1V11ZZTPI"}" target="_blank"
          ><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" border="0" alt="Buy Me a Coffee at ko-fi.com"
        /></a>
      </div>
    `}}bn.styles=mn,yn([ce({attribute:!1})],bn.prototype,"hass"),yn([pe()],bn.prototype,"config");var wn=Object.defineProperty;const $n=new Map;class kn extends bn{constructor(){super(...arguments),this._imageIsHash=void 0,this._imageCheckEntry="__unset__"}updated(e){if(super.updated(e),!this.hass||!this.config)return;const i=this.config.config_entry_id??null;i!==this._imageCheckEntry&&(this._imageCheckEntry=i,this._imageIsHash=void 0,i&&this._refreshImageFormat(i))}async _refreshImageFormat(e){const i=await async function(e,i){const t=$n.get(i);if(void 0!==t)return t;let s;try{s=await rs(e,{configEntryId:i,resultLimit:1})}catch{return!0}const a=s[0]?.image,n=!a||!Ws(a);return $n.set(i,n),n}(this.hass,e);this._imageCheckEntry===e&&(this._imageIsHash=i)}get _needsMealieUrl(){return!!this._imageIsHash||"dialog"!==this.config.recipe_view}_isImageAllowed(e){return!!e?.config_entry_id&&(void 0!==this._imageIsHash&&(!this._imageIsHash||bs(e).some(vs)))}get _showImageAllowed(){return this._isImageAllowed(this.config)}_valueChanged(e){const i={...e.detail.value};i.config_entry_id||(i.show_image=!1),this._commitConfig(i)}renderInfosDisplayOptions(){return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_infos")}>
        <ha-icon slot="leading-icon" icon="mdi:information-box-outline"></ha-icon>
        <div class="settings-fields">${this.renderInfosDisplayFields()}</div>
      </ha-expansion-panel>
    `}renderInfosDisplayFields(){return H`
      ${_n(!!this.config.show_rating,this.localize("editor.show_rating"),e=>this._setValue("show_rating",e))}
      ${_n(!!this.config.show_servings,this.localize("editor.show_servings"),e=>this._setValue("show_servings",e))}
      ${_n(!!this.config.show_description,this.localize("editor.show_description"),e=>this._setValue("show_description",e))}
      ${_n(!!this.config.show_categories,this.localize("editor.show_categories"),e=>this._setValue("show_categories",e))}
      ${_n(!!this.config.show_tags,this.localize("editor.show_tags"),e=>this._setValue("show_tags",e))}
    `}_setImageSource(e){const i=this._showImageAllowed,t={...this.config,...e},s=this._isImageAllowed(t);this._commitConfig({...t,show_image:s&&(!i||!!t.show_image)})}renderImageDisplayOptions(){const e=this._showImageAllowed;return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_image")}>
        <ha-icon slot="leading-icon" icon="mdi:image-outline"></ha-icon>
        <div class="settings-fields">
          ${this._needsMealieUrl?gn(this.hass,this.config.url,this.localize("editor.mealie_url"),e=>this._setImageSource({url:e||void 0})):B}
          ${this._imageIsHash?gn(this.hass,this.config.image_url,this.localize("editor.image_url"),e=>this._setImageSource({image_url:e||void 0})):B}
          ${_n(!!this.config.show_image&&e,this.localize("editor.show_image"),e=>this._setValue("show_image",e),!e)}
        </div>
      </ha-expansion-panel>
    `}renderRecipeActionsPanel(e,i){return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipe_actions")}>
        <ha-icon slot="leading-icon" icon="mdi:gesture-tap-button"></ha-icon>
        <div class="settings-fields">
          ${this._renderPressActionFields(e,i)}
          <ha-expansion-panel outlined class="nested-panel" .header=${this.localize("editor.settings_recipe_menu")}>
            <ha-icon slot="leading-icon" icon="mdi:dots-vertical"></ha-icon>
            <div class="settings-fields">${this._renderMenuFields(e)}</div>
          </ha-expansion-panel>
        </div>
      </ha-expansion-panel>
    `}_renderPressActionFields(e,i){const t=[...e.filter(e=>on(this.hass,e)).map(e=>({value:e,label:this.localize(ln(e))})),{value:"none",label:this.localize("editor.recipe_action_none")}];return H`
      <div class="press-action-fields">
        ${[{key:"recipe_tap_action",labelKey:"editor.recipe_tap_action"},{key:"recipe_double_tap_action",labelKey:"editor.recipe_double_tap_action"},{key:"recipe_hold_action",labelKey:"editor.recipe_hold_action"}].map(({key:e,labelKey:s})=>un(this.hass,this.config[e]??i[e],this.localize(s),t,i=>this._setValue(e,i||"none")))}
      </div>
    `}_renderMenuFields(e){const i=this.config.show_recipe_menu??!0;return H`
      ${_n(i,this.localize("editor.show_recipe_menu"),e=>this._setValue("show_recipe_menu",e))}
      ${e.map(e=>{const t=function(e){return nn[e]}(e);return _n(this.config[t]??!0,this.localize(ln(e)),e=>this._setValue(t,e),!i||!on(this.hass,e))})}
    `}renderRecipeViewOptions(){const e=this.config.recipe_view??"dialog";return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipe_view")}>
        <ha-icon slot="leading-icon" icon="mdi:book-open-variant"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{mode:"dropdown",options:[{value:"dialog",label:this.localize("editor.recipe_view_dialog")},{value:"webview",label:this.localize("editor.recipe_view_webview")},{value:"browser",label:this.localize("editor.recipe_view_browser")}]}}}
            .value=${e}
            .label=${this.localize("editor.recipe_view")}
            .required=${!1}
            @value-changed=${e=>this._setValue("recipe_view",e.detail.value)}
          ></ha-selector>
          ${"dialog"===e?B:H`
                ${ms(this.config.url)?B:H`<ha-alert alert-type="info">${this.localize("info.no_url")}</ha-alert>`}
                ${gn(this.hass,this.config.mealie_group_slug??Ie,this.localize("editor.mealie_group_slug"),e=>this._setValue("mealie_group_slug",e||Ie))}
              `}
        </div>
      </ha-expansion-panel>
    `}renderTimesDisplayOptions(){return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_times")}>
        <ha-icon slot="leading-icon" icon="mdi:timer-settings-outline"></ha-icon>
        <div class="settings-fields">
          ${_n(!!this.config.show_prep_time,this.localize("editor.show_prep_time"),e=>this._setValue("show_prep_time",e))}
          ${_n(!!this.config.show_perform_time,this.localize("editor.show_cooking_time"),e=>this._setValue("show_perform_time",e))}
          ${_n(!!this.config.show_total_time,this.localize("editor.show_total_time"),e=>this._setValue("show_total_time",e))}
        </div>
      </ha-expansion-panel>
    `}_setTimerDoneAction(e){const{timer_done_action:i,...t}=this.config;this._commitConfig(e&&"none"!==e.action?{...t,timer_done_action:e}:t)}renderTimerOptions(){return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_timers")}>
        <ha-icon slot="leading-icon" icon="mdi:timer-music-outline"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ui_action:{actions:["perform-action","none"],default_action:"none"}}}
            .value=${this.config.timer_done_action}
            .label=${this.localize("editor.timer_done_action")}
            .helper=${this.localize("editor.timer_done_action_help")}
            .required=${!1}
            @value-changed=${e=>this._setTimerDoneAction(e.detail.value)}
          ></ha-selector>
        </div>
      </ha-expansion-panel>
    `}}((e,i,t)=>{for(var s,a=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(a=s(i,t,a)||a);a&&wn(i,t,a)})([pe()],kn.prototype,"_imageIsHash");var zn=Object.getOwnPropertyDescriptor;const xn=["view_recipe","add_to_shopping_list","edit_mealplan","delete_mealplan"],An={recipe_tap_action:ze,recipe_double_tap_action:Ae,recipe_hold_action:xe};function Sn(e,i){if("string"==typeof e)return e;const t=Math.max(0,Math.floor(e??0)),s=Math.max(1,Math.floor(i??1));return s>1?`${t}-${t+s-1}`:String(t)}let In=class extends kn{constructor(){super(...arguments),this._localizeCardLanguage=e=>Ut(Ta(this.config?.language)??this.hass?.locale?.language??"en",e),this._layoutChanged=e=>{const{layout_mode:i,...t}=e.detail.value,s={...t};s.day_offset=function(e){const i=String(e??"").trim();return/^\d{1,3}$/.test(i)?Number(i):i}(s.day_offset),delete s.days_to_show,s.days_columns=Number(s.days_columns??2),s.recipes_columns=Number(s.recipes_columns??2),s.days_layout="side_by_side"===i||"both"===i?"horizontal":"vertical",s.recipes_layout="horizontal"===i||"both"===i?"horizontal":"vertical",s.config_entry_id||(s.show_image=!1),this._commitConfig(s)},this._computeLayoutLabel=e=>({day_offset:this.localize("editor.days_range"),layout_mode:this.localize("editor.layout_mode"),days_columns:this.localize("editor.days_columns"),recipes_columns:this.localize("editor.recipes_columns")}[e.name]??e.name),this._computeLayoutHelper=e=>"day_offset"===e.name?this.localize("editor.days_range_helper"):void 0}get _columnsOptions(){return[2,3,4].map(e=>({value:String(e),label:String(e)}))}_columnsField(e){return{name:e,selector:{select:{mode:"dropdown",options:this._columnsOptions}}}}get _schemaLayout(){const e={name:"layout_mode",selector:{select:{mode:"dropdown",options:[{value:"vertical",label:this.localize("editor.layout_vertical")},{value:"horizontal",label:this.localize("editor.layout_horizontal")},{value:"side_by_side",label:this.localize("editor.layout_side_by_side")},{value:"both",label:this.localize("editor.layout_days_and_meals_side_by_side")}]}}};return[{type:"expandable",title:this.localize("editor.settings_title_layout"),icon:"mdi:view-grid-outline",schema:[{name:"day_offset",selector:{text:{}}},e,..."horizontal"===this.config.days_layout?[this._columnsField("days_columns")]:[],..."horizontal"===this.config.recipes_layout?[this._columnsField("recipes_columns")]:[]]}]}_toggleEntryType(e){const i=new Set(this.config.entry_types??[]);i.has(e)?i.delete(e):i.add(e),this._commitConfig({...this.config,entry_types:[...i]})}_renderEntryTypes(){const e=new Set(this.config.entry_types??[]);return H`
      <div class="entry-type-chips">
        ${Gt(this._localizeCardLanguage).map(({value:i,label:t})=>H`
            <button class="entry-chip ${e.has(i)?"active":""}" @click=${()=>this._toggleEntryType(i)}>${t}</button>
          `)}
      </div>
    `}render(){return this.hass&&this.config?H`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.entry_types")}>
        <ha-icon slot="leading-icon" icon="mdi:silverware-fork-knife"></ha-icon>
        ${this._renderEntryTypes()}
      </ha-expansion-panel>

      ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()} ${this.renderTimerOptions()} ${this.renderRecipeViewOptions()}
      ${this.renderLanguageOptions()}

      <ha-expansion-panel outlined .header=${this.localize("editor.settings_meal_actions")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${_n(this.config.show_add_recipe_button??!0,this.localize("editor.show_add_recipe_button"),e=>this._setValue("show_add_recipe_button",e))}
          ${_n(this.config.show_random_button??!0,this.localize("editor.show_random_button"),e=>this._setValue("show_random_button",e))}
          ${_n(this.config.show_note_button??!0,this.localize("editor.show_note_button"),e=>this._setValue("show_note_button",e))}
          ${_n(!!this.config.show_navigation,this.localize("editor.show_navigation"),e=>this._setValue("show_navigation",e))}
          ${_n(!!this.config.show_plan_shopping_button,this.localize("editor.show_plan_shopping_button"),e=>this._setValue("show_plan_shopping_button",e),!qs(this.hass,"shopping_list"))}
        </div>
      </ha-expansion-panel>
      ${this.renderRecipeActionsPanel(xn,An)}
      <ha-form
        .hass=${this.hass}
        .data=${{...this.config,day_offset:Sn(this.config.day_offset,this.config.days_to_show),days_columns:String(this.config.days_columns??2),recipes_columns:String(this.config.recipes_columns??2),layout_mode:this._layoutMode()}}
        .schema=${this._schemaLayout}
        .computeLabel=${this._computeLayoutLabel}
        .computeHelper=${this._computeLayoutHelper}
        @value-changed=${this._layoutChanged}
      ></ha-form>
      ${this.renderVersion()}
    `:this.renderEditorLoading()}_layoutMode(){const e="horizontal"===this.config.days_layout,i="horizontal"===this.config.recipes_layout;return e?i?"both":"side_by_side":i?"horizontal":"vertical"}};In=((e,i,t,s)=>{for(var a,n=s>1?void 0:s?zn(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(n)||n);return n})([ma("mealie-card-editor")],In);class Tn{constructor(e){this._host=e,this.lists=[],this.loading=!1,this.error=null,this.selectedId="",this._request=0,e.addController(this)}get selected(){return this.lists.find(e=>e.id===this.selectedId)}hostDisconnected(){this._request+=1}select(e){this.selectedId=e,this._host.requestUpdate()}async load(e,i,t){const s=++this._request;this.loading=!0,this.error=null,this._host.requestUpdate();try{const a=await function(e,i){return Xt("error.error_loading",async()=>{if(!e.services?.[be]?.get_shopping_lists)return hs(e,await cs(e,i));const[t,s]=await Promise.all([ss(e,"get_shopping_lists",{},i),cs(e,i)]),a=e=>{for(const[i,t]of s)if(i.endsWith(`_${e}`))return t;return""};return(t?.shopping_lists??[]).map(e=>({id:e.list_id,name:e.name,entity_id:a(e.list_id)}))})}(e,i??void 0);if(s!==this._request)return;this.lists=a,this.selectedId=(a.find(e=>e.id===t)??a[0])?.id??""}catch(e){if(s!==this._request)return;this.lists=[],this.selectedId="",this.error=e}finally{s===this._request&&(this.loading=!1,this._host.requestUpdate())}}}function Mn(e,i,t){return H`
    <label class="ingredient-item ${i?"checked":""}">
      <ha-checkbox .checked=${i} @change=${t}></ha-checkbox>
      <span class="ingredient-item-text">${e}</span>
    </label>
  `}function Rn(e){return e?H`<div class="ingredient-section-title">${e}</div>`:""}var En=Object.defineProperty,Cn=(e,i,t,s)=>{for(var a,n=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(i,t,n)||n);return n&&En(i,t,n),n};class Dn extends(Qs(re)){constructor(){super(...arguments),this.configEntryId=null,this.open=!1,this._submitting=!1,this._close=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!1,composed:!1}))}}onOpen(){}updated(e){super.updated(e),e.has("open")&&this.open&&(this._submitting=!1,this.onOpen())}async submit(e){if(!this._submitting){this._submitting=!0;try{await e.run(),Ns(this,"hass-notification",{message:"function"==typeof e.success?e.success():this.localize(e.success)}),e.signal&&(i=e.signal,Ds[i]+=1,window.dispatchEvent(new CustomEvent(i))),!1!==e.closeOnSuccess&&this._close()}catch(i){Ns(this,"hass-notification",{message:this.localizeError(i,e.errorKey)})}finally{this._submitting=!1}var i}}renderLoadingIndicator(){return H`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`}renderDateSelector(e,i){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{date:{}}}
        .value=${e}
        .label=${this.localize("dialog.select_date")}
        .required=${!1}
        @value-changed=${e=>i(e.detail.value)}
      ></ha-selector>
    `}renderEntryTypeSelector(e,i){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:Gt(this.localize)}}}
        .value=${e}
        .label=${this.localize("dialog.select_meal_type")}
        .required=${!1}
        @value-changed=${e=>i(e.detail.value)}
      ></ha-selector>
    `}renderTextSelector(e,i,t,s=!1){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{text:s?{multiline:!0}:{}}}
        .value=${e}
        .label=${this.localize(i)}
        .required=${!1}
        @value-changed=${e=>t(e.detail.value)}
      ></ha-selector>
    `}renderShoppingListSelector(e){return e.loading?this.renderLoadingIndicator():e.error?H`<ha-alert alert-type="error">${this.localizeError(e.error)}</ha-alert>`:e.lists.length?H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:e.lists.map(e=>({value:e.id,label:e.name}))}}}
        .value=${e.selectedId}
        .label=${this.localize("dialog.select_shopping_list")}
        .required=${!1}
        @value-changed=${i=>e.select(i.detail.value)}
      ></ha-selector>
    `:H`<ha-alert alert-type="info">${this.localize("dialog.no_shopping_lists")}</ha-alert>`}renderPrimaryFooter(e,i,t){return H`
      <ha-dialog-footer slot="footer">
        <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${i} ?disabled=${t}>
          ${this._submitting?"...":this.localize(e)}
        </ha-button>
      </ha-dialog-footer>
    `}}Dn.styles=Os,Cn([ce({attribute:!1})],Dn.prototype,"hass"),Cn([ce()],Dn.prototype,"configEntryId"),Cn([ce({type:Boolean})],Dn.prototype,"open"),Cn([pe()],Dn.prototype,"_submitting");var jn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Pn=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?Ln(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&jn(i,t,n),n};let On=class extends Dn{constructor(){super(...arguments),this.recipe=null,this.defaultShoppingListId=null,this._step=1,this._quantity=1,this._loadingIngredients=!1,this._ingredients=[],this._ingredientsError=null,this._rawIngredients=null,this._shoppingLists=new Tn(this),this._handleAdd=()=>{const e=this.recipe?.recipe_id;if(!e||!this._shoppingListId||!this.hass)return;const i=this._selectables,t=0===i.length||i.every(e=>e.selected);this.submit({run:()=>{return t||!this._canSelectIngredients?ds(this.hass,{configEntryId:this.configEntryId??void 0,shoppingListId:this._shoppingListId,recipeId:e,quantity:this._quantity}):(i=this.hass,s={configEntryId:this.configEntryId??void 0,shoppingListId:this._shoppingListId,shoppingEntityId:this._shoppingEntityId,recipeId:e,quantity:this._quantity,deselectedIngredients:this._deselectedIngredients(),language:this.hass?.locale?.language??"en"},Xt("error.error_loading",async()=>{const e=async()=>{const e=(await i.callService(be,"get_shopping_list_items",{},{entity_id:s.shoppingEntityId},!1,!0)).response;return e?.[s.shoppingEntityId]?.items??[]},t=new Set((await e()).map(e=>e.item_id));await ts(i,"add_recipe_to_shopping_list",{shopping_list_id:s.shoppingListId,recipe_id:s.recipeId,recipe_increment_quantity:s.quantity},s.configEntryId);const a=(await e()).filter(e=>!t.has(e.item_id)),n=[];for(const e of s.deselectedIngredients){const i=e.food?.food_id??null;let t=i?a.find(e=>e.food_id===i&&!n.includes(e.item_id)):void 0;if(!t){const i=Qt(e,s.quantity,!0,s.language??"en").toLowerCase().trim();t=a.find(e=>!n.includes(e.item_id)&&(e.note?.toLowerCase().trim()===i||e.display?.toLowerCase().trim()===i))}t&&n.push(t.item_id)}n.length>0&&await i.callService("todo","remove_item",{item:n},{entity_id:s.shoppingEntityId},!1)}));var i,s},success:"dialog.recipe_added_to_shopping_list",errorKey:"error.error_loading",signal:Rs})}}get _shoppingListId(){return this._shoppingLists.selectedId}get _shoppingEntityId(){return this._shoppingLists.selected?.entity_id??""}onOpen(){this._step=1,this._quantity=1,this._ingredients=[],this._ingredientsError=null,this._rawIngredients=null,this._shoppingLists.load(this.hass,this.configEntryId,this.defaultShoppingListId)}async _resolveIngredients(){if(this.recipe?.ingredients?.length)return this.recipe.ingredients;const e=this.recipe?.slug??this.recipe?.recipe_id;if(!e)return[];const i=await os(this.hass,e,this.configEntryId??void 0);return i?.ingredients??[]}async _handleNext(){if(!this._loadingIngredients){if(this._step=2,this._ingredientsError=null,this._ingredients=[],!this._rawIngredients){this._loadingIngredients=!0;try{this._rawIngredients=await this._resolveIngredients()}catch(e){return void(this._ingredientsError=this.localizeError(e))}finally{this._loadingIngredients=!1}}this._ingredients=this._toIngredientItems(this._rawIngredients)}}_toIngredientItems(e){const i=this.hass?.locale?.language??"en";return e.map(e=>{const t=!(!e.title||e.food);return{text:t?e.title:Qt(e,this._quantity,!0,i),selected:!t,isTitle:t}})}_toggleIngredient(e){this._ingredients=this._ingredients.map((i,t)=>t===e?{...i,selected:!i.selected}:i)}_toggleAll(){const e=this._selectables.every(e=>e.selected);this._ingredients=this._ingredients.map(i=>i.isTitle?i:{...i,selected:!e})}get _selectables(){return this._ingredients.filter(e=>!e.isTitle)}get _canSelectIngredients(){return!!this._shoppingEntityId}_deselectedIngredients(){return(this._rawIngredients??[]).filter((e,i)=>{const t=this._ingredients[i];return!!t&&!t.isTitle&&!t.selected})}render(){if(!this.open||!this.recipe)return B;const e=2===this._step||!this._canSelectIngredients,i=1===this._step?!(!this._shoppingListId||this._shoppingLists.loading||this._loadingIngredients||e&&(!this.recipe.recipe_id||this._submitting)):!!this.recipe.recipe_id&&!this._submitting&&!this._loadingIngredients&&!this._ingredientsError&&(0===this._ingredients.length||this._selectables.some(e=>e.selected));return H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.add_to_shopping_list")}</span>

        <div class="dialog-body">${1===this._step?this._renderStep1():this._renderStep2()}</div>

        <ha-dialog-footer slot="footer">
          ${2===this._step?H`
                <ha-button
                  slot="secondaryAction"
                  size="small"
                  variant="danger"
                  appearance="accent"
                  @click=${()=>{this._step=1}}
                >
                  ${this.localize("dialog.back")}
                </ha-button>
              `:B}
          <ha-button
            slot="primaryAction"
            size="small"
            variant="brand"
            appearance="accent"
            @click=${e?this._handleAdd:()=>{this._handleNext()}}
            ?disabled=${!i}
          >
            ${e?this._submitting?"...":this.localize("dialog.add"):this.localize("dialog.next")}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `}_renderStep1(){const e=this.renderShoppingListSelector(this._shoppingLists);return this._shoppingLists.lists.length?H`
      ${e}

      <ha-selector
        .hass=${this.hass}
        .selector=${{number:{min:.25,max:10,step:.25,mode:"slider"}}}
        .value=${this._quantity}
        .label=${this.localize("dialog.shopping_list_quantity")}
        .required=${!1}
        @value-changed=${e=>{this._quantity=e.detail.value}}
      ></ha-selector>
    `:e}_renderStep2(){if(this._loadingIngredients)return this.renderLoadingIndicator();if(this._ingredientsError)return H`<ha-alert alert-type="error">${this._ingredientsError}</ha-alert>`;if(!this._ingredients.length)return H`<ha-alert alert-type="info">${this.localize("dialog.no_ingredients")}</ha-alert>`;const e=this._selectables.every(e=>e.selected);return H`
      <div class="ingredient-list-header">
        <span class="ingredient-list-title">${this.localize("dialog.ingredients")}</span>
        <ha-checkbox .checked=${e} @change=${this._toggleAll}>${this.localize("dialog.select_all")}</ha-checkbox>
      </div>
      <div class="ingredient-list">
        ${this._ingredients.map((e,i)=>e.isTitle?H`<div class="ingredient-section-title">${e.text}</div>`:H`
                <label class="ingredient-item">
                  <ha-checkbox .checked=${e.selected} @change=${()=>this._toggleIngredient(i)}></ha-checkbox>
                  <span class="ingredient-item-text">${e.text}</span>
                </label>
              `)}
      </div>
    `}};Pn([ce({attribute:!1})],On.prototype,"recipe",2),Pn([ce()],On.prototype,"defaultShoppingListId",2),Pn([pe()],On.prototype,"_step",2),Pn([pe()],On.prototype,"_quantity",2),Pn([pe()],On.prototype,"_loadingIngredients",2),Pn([pe()],On.prototype,"_ingredients",2),Pn([pe()],On.prototype,"_ingredientsError",2),On=Pn([ma("mealie-shopping-list-dialog")],On);class Nn{constructor(){this._sentinel=null,this._requesting=!1,this._wanted=!1}static get isSupported(){return"undefined"!=typeof navigator&&"wakeLock"in navigator}async acquire(){if(this._wanted=!0,!this._sentinel&&!this._requesting&&Nn.isSupported&&"visible"===document.visibilityState){this._requesting=!0;try{const e=await navigator.wakeLock.request("screen");if(!this._wanted)return void await e.release();this._sentinel=e,e.addEventListener("release",()=>{this._sentinel===e&&(this._sentinel=null)})}catch{this._sentinel=null}finally{this._requesting=!1}}}resume(){this._wanted&&this.acquire()}release(){this._wanted=!1;const e=this._sentinel;this._sentinel=null,e?.release().catch(()=>{})}}var Vn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,Hn=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?Un(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&Vn(i,t,n),n};const Fn={hours:0,minutes:5,seconds:0};function Bn(e){return 3600*(e.hours??0)+60*(e.minutes??0)+(e.seconds??0)}function qn(e){const i=e.composedPath()[0];return i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement||i instanceof HTMLElement&&i.isContentEditable}let Kn=class extends(Qs(re)){constructor(){super(...arguments),this.recipe=null,this.scale=1,this.timerStore=null,this.checkedIngredients=new Set,this._stepIndex=0,this._customDuration=Fn,this._showCustomTimer=!1,this._showAllIngredients=!1,this._swipeStart=null,this._wakeLock=new Nn,this._onVisibilityChange=()=>{"visible"===document.visibilityState&&this._wakeLock.resume()},this._onKeyDown=e=>{if(!qn(e)){if("ArrowRight"===e.key)this._goTo(this._stepIndex+1);else{if("ArrowLeft"!==e.key)return;this._goTo(this._stepIndex-1)}e.preventDefault()}},this._onPointerDown=e=>{e.isPrimary&&"mouse"!==e.pointerType&&!qn(e)&&(this._swipeStart={pointerId:e.pointerId,x:e.clientX,y:e.clientY})},this._onPointerUp=e=>{const i=this._swipeStart;if(this._swipeStart=null,i?.pointerId!==e.pointerId)return;const t=function(e,i){const t=i.clientX-e.x,s=i.clientY-e.y;return Math.abs(t)<50||Math.abs(t)<=Math.abs(s)?0:t<0?1:-1}(i,e);t&&this._goTo(this._stepIndex+t)},this._onPointerCancel=()=>{this._swipeStart=null}}get _steps(){return this.recipe?.instructions??[]}get _ingredients(){return this.recipe?.ingredients??[]}get _lang(){return this.hass?.locale?.language??"en"}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDown),document.addEventListener("visibilitychange",this._onVisibilityChange),this._wakeLock.acquire()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("visibilitychange",this._onVisibilityChange),this._wakeLock.release()}willUpdate(e){super.willUpdate(e),e.has("recipe")&&(this._stepIndex=0,this._showAllIngredients=!1)}_goTo(e){this._stepIndex=Math.min(Math.max(0,e),Math.max(0,this._steps.length-1))}_startTimer(e,i){this.timerStore?.start(e,i,{step:this._stepIndex+1,recipe:this.recipe?.name})}_startCustomTimer(){const e=Bn(this._customDuration);this._startTimer(e,Ga(e)),this._showCustomTimer=!1}_toggleIngredient(e){Ns(this,"ingredient-toggled",{index:e})}_stepIngredientIndexes(e){const i=new Set(e.ingredient_references??[]);return i.size?this._ingredients.flatMap((e,t)=>e.reference_id&&i.has(e.reference_id)?[t]:[]):[]}_renderIngredient(e){return Mn(Qt(this._ingredients[e],this.scale,!1,this._lang),this.checkedIngredients.has(e),()=>this._toggleIngredient(e))}_renderProgress(e,i){return H`
      <div class="cook-progress">
        <span class="cook-step-counter">${this.localize("dialog.step")} ${e+1} / ${i}</span>
        <div class="cook-progress-track">
          <div class="cook-progress-fill" style=${ye({width:(e+1)/i*100+"%"})}></div>
        </div>
      </div>
    `}_renderStepIngredients(e){const i=this._stepIngredientIndexes(e);return i.length?H`
      <div class="cook-ingredients">
        <span class="cook-section-label">${this.localize("dialog.step_ingredients")}</span>
        <div class="ingredient-list">${i.map(e=>this._renderIngredient(e))}</div>
      </div>
    `:B}_renderAllIngredients(){return this._ingredients.length?H`
      <div class="cook-ingredients">
        <ha-button
          size="small"
          appearance="plain"
          aria-expanded=${this._showAllIngredients?"true":"false"}
          @click=${()=>{this._showAllIngredients=!this._showAllIngredients}}
        >
          <ha-icon slot="start" icon=${this._showAllIngredients?"mdi:chevron-up":"mdi:food-apple"}></ha-icon>
          ${this.localize("dialog.all_ingredients")} (${this.checkedIngredients.size} / ${this._ingredients.length})
        </ha-button>
        ${this._showAllIngredients?H`<div class="ingredient-list">
              ${this._ingredients.map((e,i)=>H`${Rn(e.title)}${this._renderIngredient(i)}`)}
            </div>`:B}
      </div>
    `:B}_renderTimerSuggestion(e){return H`
      <ha-button
        size="small"
        appearance="outlined"
        .title=${this.localize("dialog.start_timer")}
        @click=${()=>this._startTimer(e.seconds,e.label)}
      >
        <ha-icon slot="start" icon="mdi:timer-play-outline"></ha-icon>
        ${e.label}
      </ha-button>
    `}_renderTimerControls(e){if(!this.timerStore)return B;const i=Za(e.text,this._lang);return H`
      <div class="cook-timer-controls">
        ${i.map(e=>this._renderTimerSuggestion(e))}
        <ha-button
          size="small"
          appearance="plain"
          @click=${()=>{this._showCustomTimer=!this._showCustomTimer}}
        >
          <ha-icon slot="start" icon="mdi:timer-plus-outline"></ha-icon>
          ${this.localize("dialog.add_timer")}
        </ha-button>
      </div>
      ${this._showCustomTimer?this._renderCustomTimer():B}
    `}_renderCustomTimer(){return H`
      <div class="cook-custom-timer">
        <ha-selector
          .hass=${this.hass}
          .selector=${{duration:{enable_second:!0}}}
          .value=${this._customDuration}
          .required=${!1}
          @value-changed=${e=>{this._customDuration=e.detail.value??Fn}}
        ></ha-selector>
        <ha-button
          size="small"
          variant="brand"
          appearance="accent"
          ?disabled=${Bn(this._customDuration)<=0}
          @click=${()=>this._startCustomTimer()}
        >
          ${this.localize("dialog.start_timer")}
        </ha-button>
      </div>
    `}_renderNavigation(e,i){return H`
      <div class="cook-nav">
        <ha-button appearance="plain" ?disabled=${e<=0} @click=${()=>this._goTo(e-1)}>
          <ha-icon slot="start" icon="mdi:chevron-left"></ha-icon>
          ${this.localize("dialog.previous_step")}
        </ha-button>
        <ha-button variant="brand" appearance="accent" ?disabled=${e>=i-1} @click=${()=>this._goTo(e+1)}>
          ${this.localize("dialog.next_step")}
          <ha-icon slot="end" icon="mdi:chevron-right"></ha-icon>
        </ha-button>
      </div>
    `}render(){const e=this._steps;if(!e.length)return B;const i=Math.min(this._stepIndex,e.length-1),t=e[i];return H`
      <div class="cook-mode" tabindex="0" @pointerdown=${this._onPointerDown} @pointerup=${this._onPointerUp} @pointercancel=${this._onPointerCancel}>
        ${this._renderProgress(i,e.length)} ${t.title?H`<h3 class="cook-step-title">${t.title}</h3>`:B}
        <p class="cook-step-text">${t.text??""}</p>
        ${this._renderStepIngredients(t)} ${this._renderTimerControls(t)}
        <mealie-cook-timers .hass=${this.hass} .store=${this.timerStore}></mealie-cook-timers>
        ${this._renderAllIngredients()} ${this._renderNavigation(i,e.length)}
      </div>
    `}};Kn.styles=Os,Hn([ce({attribute:!1})],Kn.prototype,"hass",2),Hn([ce({attribute:!1})],Kn.prototype,"recipe",2),Hn([ce({type:Number})],Kn.prototype,"scale",2),Hn([ce({attribute:!1})],Kn.prototype,"timerStore",2),Hn([ce({attribute:!1})],Kn.prototype,"checkedIngredients",2),Hn([pe()],Kn.prototype,"_stepIndex",2),Hn([pe()],Kn.prototype,"_customDuration",2),Hn([pe()],Kn.prototype,"_showCustomTimer",2),Hn([pe()],Kn.prototype,"_showAllIngredients",2),Kn=Hn([ma("mealie-cook-mode")],Kn);var Wn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Gn=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?Zn(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&Wn(i,t,n),n};let Qn=class extends(Aa(Dn)){constructor(){super(...arguments),this.config={},this.recipe=null,this.isFavorite=null,this.defaultShoppingListId=null,this.timerStore=null,this._detail=null,this._servings=0,this._shoppingDialogOpen=!1,this._webviewCard=null,this._cooking=!1,this._checkedIngredients=new Set,this._shoppingSelection=new Set,this._shoppingLists=new Tn(this),this._baseServings=0,this._loadToken=0,this._unsubscribers=[],this._onIngredientToggled=e=>{e.stopPropagation(),this._toggleIngredient(e.detail.index)}}get _slug(){return this._detail?.slug??this.recipe?.slug}get _webUrl(){return this.recipeWebUrl(this.recipe)}get _isWebview(){return"webview"===this.config.recipe_view&&!!this._webUrl&&!!window.loadCardHelpers}get _scale(){return this._baseServings>0?this._servings/this._baseServings:1}get _lang(){return this.hass?.locale?.language??"en"}get _shoppingTargets(){return this._shoppingLists.lists.filter(e=>!!e.entity_id)}get _shoppingTarget(){const e=this._shoppingLists.selected;return e?.entity_id?e:this._shoppingTargets[0]}get _canCook(){return!this._isWebview&&!!this._detail?.instructions?.length}connectedCallback(){super.connectedCallback(),this._unsubscribers=[Ps(Es,({slug:e,rating:i})=>{this._detail?.slug===e&&(this._detail={...this._detail,rating:i})}),Ps(Cs,({slug:e,favorite:i})=>{this._favorites.get(e)!==i&&(this._favorites=new Map(this._favorites).set(e,i))})]}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[]}onOpen(){this._shoppingDialogOpen=!1,this._cooking=!1,this.hass&&this._shoppingLists.load(this.hass,this.configEntryId,this.defaultShoppingListId)}updated(e){super.updated(e),e.has("hass")&&this._webviewCard&&(this._webviewCard.hass=this.hass),this.open&&this.recipe&&(e.has("recipe")&&(this._detail=null,this._webviewCard=null,this._cooking=!1,this._checkedIngredients=new Set,this._shoppingSelection=new Set),(e.has("open")||e.has("recipe"))&&(this._isWebview?this._webviewCard||this._loadWebview():this._detail||this.loadData()))}async _loadWebview(){const e=this._webUrl,i=window.loadCardHelpers;if(!e||!i)return;const t=this._loadToken+=1;this._loading=!0,this.error=null;try{const s=await i(),a=await s.createCardElement({type:"iframe",url:e,aspect_ratio:"125%"});if(t!==this._loadToken)return;a.hass=this.hass,this._webviewCard=a}catch(e){if(t!==this._loadToken)return;this.handleError(e)}finally{t===this._loadToken&&(this._loading=!1)}}async loadData(){if(!this.open||!this.recipe||!this.hass)return;const e=this.recipe.slug??this.recipe.recipe_id;if(!e)return;const i=this._loadToken+=1;this._loading=!0,this.error=null;try{const t=await os(this.hass,e,this.configEntryId??void 0);if(i!==this._loadToken)return;this._detail=t,this._baseServings=t?.recipe_servings??0,this._servings=this._baseServings;const s=this._slug;s&&(this._favorites=new Map(this._favorites).set(s,this.isFavorite??this._favorites.get(s)??!1)),this._initialized=!0}catch(e){if(i!==this._loadToken)return;this.handleError(e)}finally{i===this._loadToken&&(this._loading=!1)}}_renderServingsControl(){return this._baseServings<=0?B:H`
      <div class="dialog-servings-control">
        <ha-icon-button
          class="dialog-servings-btn"
          .label=${this.localize("dialog.decrease_servings")}
          .disabled=${this._servings<=1}
          @click=${()=>{this._servings=Math.max(1,this._servings-1)}}
        >
          <ha-icon icon="mdi:minus"></ha-icon>
        </ha-icon-button>
        <span class="dialog-servings-value">${this._servings} ${this.localize("dialog.servings")}</span>
        <ha-icon-button
          class="dialog-servings-btn"
          .label=${this.localize("dialog.increase_servings")}
          @click=${()=>{this._servings=this._servings+1}}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
        </ha-icon-button>
      </div>
    `}_toggleIngredient(e){const i=new Set(this._checkedIngredients);i.delete(e)||i.add(e),this._checkedIngredients=i}_ingredientText(e){return Qt(e,this._scale,!1,this._lang)}_toggleShoppingIngredient(e){const i=new Set(this._shoppingSelection);i.delete(e)||i.add(e),this._shoppingSelection=i}_selectedShoppingTexts(e){return(e.ingredients??[]).flatMap((e,i)=>{if(!this._shoppingSelection.has(i))return[];const t=this._ingredientText(e).trim();return t?[t]:[]})}async _addTodoItems(e,i){for(const t of i)await us(this.hass,e,t);this._shoppingSelection=new Set}_countLabel(e,i,t){return 1===t?this.localize(e):this.localize(i,"{count}",String(t))}_addSelectedIngredients(e){const i=this._shoppingTarget?.entity_id,t=this._selectedShoppingTexts(e);i&&t.length&&this.submit({run:()=>this._addTodoItems(i,t),success:()=>this._countLabel("dialog.ingredient_added_to_shopping_list","dialog.ingredients_added_to_shopping_list",t.length),errorKey:"error.error_updating_shopping_list",signal:Rs,closeOnSuccess:!1})}_renderShoppingListChoice(){const e=this._shoppingTargets;return e.some(e=>e.id===this.defaultShoppingListId)||e.length<2?B:H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:e.map(e=>({value:e.id,label:e.name}))}}}
        .value=${this._shoppingTarget?.id??""}
        .label=${this.localize("dialog.select_shopping_list")}
        .required=${!1}
        @value-changed=${e=>this._shoppingLists.select(e.detail.value)}
      ></ha-selector>
    `}_renderShoppingBar(e){const i=this._shoppingSelection.size;return i?H`
      <div class="ingredient-shopping-bar">
        ${this._renderShoppingListChoice()}
        <ha-button size="small" variant="brand" appearance="accent" ?disabled=${this._submitting} @click=${()=>this._addSelectedIngredients(e)}>
          <ha-icon slot="start" icon="mdi:cart-plus"></ha-icon>
          ${this._countLabel("dialog.add_ingredient_to_shopping_list","dialog.add_ingredients_to_shopping_list",i)}
        </ha-button>
      </div>
    `:B}_renderPlainIngredients(e){return H`<ul>
      ${e.map(e=>H`${Rn(e.title)}<li>${this._ingredientText(e)}</li>`)}
    </ul>`}_renderIngredients(e){const i=e.ingredients??[];return this._shoppingTargets.length?H`
      <div class="ingredient-list dialog-ingredient-list">
        ${i.map((e,i)=>H`${Rn(e.title)}${Mn(this._ingredientText(e),this._shoppingSelection.has(i),()=>this._toggleShoppingIngredient(i))}`)}
      </div>
      ${this._renderShoppingBar(e)}
    `:this._renderPlainIngredients(i)}_renderSourceLink(e){const i=e.original_url;return i&&ms(i)?H`
      <a class="recipe-source-link" href=${i} target="_blank" rel="noopener noreferrer">
        <ha-icon icon="mdi:link-variant"></ha-icon>${this.localize("dialog.recipe_source")}
      </a>
    `:B}_renderCookToggle(){return this._canCook?H`
      <ha-icon-button
        slot="headerActionItems"
        .label=${this.localize(this._cooking?"dialog.exit_cooking":"dialog.start_cooking")}
        @click=${()=>{this._cooking=!this._cooking}}
      >
        <ha-icon icon=${this._cooking?"mdi:close-circle-outline":"mdi:chef-hat"}></ha-icon>
      </ha-icon-button>
    `:B}_renderCookMode(){return H`
      <div class="dialog-body">
        ${this._renderServingsControl()}
        <mealie-cook-mode
          .hass=${this.hass}
          .recipe=${this._detail}
          .scale=${this._scale}
          .timerStore=${this.timerStore}
          .checkedIngredients=${this._checkedIngredients}
          @ingredient-toggled=${this._onIngredientToggled}
        ></mealie-cook-mode>
      </div>
    `}_renderBody(){return this._isWebview?this._renderWebview():this._detail?this._cooking?this._renderCookMode():this._renderDetail():B}_renderInstruction({title:e,text:i}){return H` <li>${e?H`<strong>${e}: </strong>`:""} ${i??""}</li> `}_renderDetail(){const e=this._detail,i=this.buildTimeRows(e);return H`
      <div class="dialog-body">
        ${this.renderRecipeImage(e,!!this.config?.show_image)}

        <div class="recipe-meta">
          ${this.renderFavoriteButton(e,this.config.show_favorite??!1,this.configEntryId)}
          ${this._renderInteractiveRating(this._detail,!!this.config?.show_rating,this.configEntryId)}
          ${this.renderServings(e,!!this.config.show_servings)}
        </div>
        ${this.renderRecipeTags(e,this.config)} ${this._renderSourceLink(e)}

        ${i.length?this.renderDetailsSection("mdi:clock-outline",this.localize("dialog.times"),this.renderTimeRows(i)):B}
        ${e.ingredients?.length?this.renderDetailsSection("mdi:food-apple",this.localize("dialog.ingredients"),H`${this._renderServingsControl()} ${this._renderIngredients(e)}`):B}
        ${e.instructions?.length?this.renderDetailsSection("mdi:chef-hat",this.localize("dialog.instructions"),H`<ol>
                ${e.instructions.map(e=>this._renderInstruction(e))}
              </ol>`):B}
      </div>
    `}_renderWebview(){return this._webviewCard?H`<div class="recipe-webview">${this._webviewCard}</div>`:B}_renderOpenInMealieButton(){const e=this._webUrl;return e&&"webview"===this.config.recipe_view?H`
      <ha-icon-button slot="headerActionItems" .label=${this.localize("dialog.open_in_mealie")} @click=${()=>ws(e)}>
        <ha-icon icon="mdi:open-in-new"></ha-icon>
      </ha-icon-button>
    `:B}render(){return this.open&&this.recipe?H`
      <ha-dialog .open=${!0} width="full" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        ${this._renderCookToggle()} ${this._renderOpenInMealieButton()}
        ${this._slug&&this.supports("shopping_list")?H`
              <ha-icon-button
                slot="headerActionItems"
                .label=${this.localize("dialog.add_to_shopping_list")}
                @click=${()=>{this._shoppingDialogOpen=!0}}
              >
                <ha-icon icon="mdi:cart-plus"></ha-icon>
              </ha-icon-button>
            `:B}
        ${this._loading?this.renderLoadingIndicator():B} ${this.error?H`<ha-alert alert-type="error">${this.error}</ha-alert>`:B}
        ${this._renderBody()}
      </ha-dialog>

      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._detail??this.recipe}
        .configEntryId=${this.configEntryId}
        .defaultShoppingListId=${this.defaultShoppingListId}
        ?open=${this._shoppingDialogOpen}
        @dialog-closed=${()=>{this._shoppingDialogOpen=!1}}
      ></mealie-shopping-list-dialog>
    `:B}};Gn([ce({attribute:!1})],Qn.prototype,"config",2),Gn([ce({attribute:!1})],Qn.prototype,"recipe",2),Gn([ce({attribute:!1})],Qn.prototype,"isFavorite",2),Gn([ce()],Qn.prototype,"defaultShoppingListId",2),Gn([ce({attribute:!1})],Qn.prototype,"timerStore",2),Gn([pe()],Qn.prototype,"_detail",2),Gn([pe()],Qn.prototype,"_servings",2),Gn([pe()],Qn.prototype,"_shoppingDialogOpen",2),Gn([pe()],Qn.prototype,"_webviewCard",2),Gn([pe()],Qn.prototype,"_cooking",2),Gn([pe()],Qn.prototype,"_checkedIngredients",2),Gn([pe()],Qn.prototype,"_shoppingSelection",2),Qn=Gn([ma("mealie-recipe-dialog")],Qn);var Jn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,Xn=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?Yn(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&Jn(i,t,n),n};let er=class extends Dn{constructor(){super(...arguments),this.date=null,this._date="",this._entryType="dinner",this._title="",this._text="",this._handleAdd=()=>{this._date&&this._entryType&&this._title.trim()&&this.hass&&this.submit({run:()=>ls(this.hass,{date:this._date,entryType:this._entryType,noteTitle:this._title.trim(),noteText:this._text.trim()||void 0,configEntryId:this.configEntryId??void 0}),success:"dialog.note_added_success",errorKey:"error.error_adding_recipe",signal:Ts})}}onOpen(){this._date=this.date??xs(new Date),this._entryType="dinner",this._title="",this._text=""}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_note_to_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
          ${this.renderTextSelector(this._title,"dialog.note_title",e=>this._title=e)}
          ${this.renderTextSelector(this._text,"dialog.note_text",e=>this._text=e,!0)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._date||!this._entryType||!this._title.trim()||this._submitting)}
      </ha-dialog>
    `:B}};Xn([ce()],er.prototype,"date",2),Xn([pe()],er.prototype,"_date",2),Xn([pe()],er.prototype,"_entryType",2),Xn([pe()],er.prototype,"_title",2),Xn([pe()],er.prototype,"_text",2),er=Xn([ma("mealie-mealplan-note-dialog")],er);var ir=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,sr=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?tr(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&ir(i,t,n),n};let ar=class extends Dn{constructor(){super(...arguments),this.targetDate="",this._date="",this._entryType="dinner",this._handleAdd=()=>{this._date&&this._entryType&&this.hass&&this.submit({run:()=>{return e=this.hass,i={date:this._date,entryType:this._entryType,configEntryId:this.configEntryId??void 0},Xt("error.error_adding_recipe",()=>ts(e,"set_random_mealplan",{date:i.date,entry_type:i.entryType},i.configEntryId));var e,i},success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:Ts})}}onOpen(){this._date=this.targetDate||xs(new Date),this._entryType="dinner"}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("cards.random_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:B}};sr([ce()],ar.prototype,"targetDate",2),sr([pe()],ar.prototype,"_date",2),sr([pe()],ar.prototype,"_entryType",2),ar=sr([ma("mealie-mealplan-random-dialog")],ar);const nr=(e,i,t)=>{const s=new Map;for(let a=i;a<=t;a++)s.set(e[a],a);return s},rr=ue(class extends me{constructor(e){if(super(e),e.type!==he)throw Error("repeat() can only be used in text expressions")}dt(e,i,t){let s;void 0===t?t=i:void 0!==i&&(s=i);const a=[],n=[];let r=0;for(const i of e)a[r]=s?s(i,r):r,n[r]=t(i,r),r++;return{values:n,keys:a}}render(e,i,t){return this.dt(e,i,t).values}update(e,[i,t,s]){const a=(e=>e._$AH)(e),{values:n,keys:r}=this.dt(i,t,s);if(!Array.isArray(a))return this.ut=r,n;const o=this.ut??=[],l=[];let d,c,p=0,_=a.length-1,h=0,g=n.length-1;for(;p<=_&&h<=g;)if(null===a[p])p++;else if(null===a[_])_--;else if(o[p]===r[h])l[h]=ia(a[p],n[h]),p++,h++;else if(o[_]===r[g])l[g]=ia(a[_],n[g]),_--,g--;else if(o[p]===r[g])l[g]=ia(a[p],n[g]),ea(e,l[g+1],a[p]),p++,g--;else if(o[_]===r[h])l[h]=ia(a[_],n[h]),ea(e,a[p],a[_]),_--,h++;else if(void 0===d&&(d=nr(r,h,g),c=nr(o,p,_)),d.has(o[p]))if(d.has(o[_])){const i=c.get(r[h]),t=void 0!==i?a[i]:null;if(null===t){const i=ea(e,a[p]);ia(i,n[h]),l[h]=i}else l[h]=ia(t,n[h]),ea(e,a[p],t),a[i]=null;h++}else aa(a[_]),_--;else aa(a[p]),p++;for(;h<=g;){const i=ea(e,l[g+1]);ia(i,n[h]),l[h++]=i}for(;p<=_;){const e=a[p++];null!==e&&aa(e)}return this.ut=r,sa(e,l),F}});var or=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,dr=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?lr(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&or(i,t,n),n};let cr=class extends re{constructor(){super(...arguments),this.value="",this.placeholder=""}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent("search-changed",{detail:{value:e},bubbles:!1,composed:!1}))}_onInput(e){this._emit(e.target.value)}_clear(){this._emit("")}render(){return customElements.get("ha-input-search")?this._renderInputSearch():this._renderTextfield()}_renderInputSearch(){return H` <ha-input-search appearance="outlined" .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}></ha-input-search> `}_renderTextfield(){return H`
      <ha-textfield icon .iconTrailing=${!!this.value} .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}>
        <ha-icon slot="leadingIcon" icon="mdi:magnify"></ha-icon>
        ${this.value?H`
              <ha-icon-button slot="trailingIcon" .label=${this.placeholder} @click=${this._clear}>
                <ha-icon icon="mdi:close"></ha-icon>
              </ha-icon-button>
            `:B}
      </ha-textfield>
    `}};cr.styles=n`
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
  `,dr([ce()],cr.prototype,"value",2),dr([ce()],cr.prototype,"placeholder",2),cr=dr([ma("mealie-recipe-search")],cr);var pr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,hr=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?_r(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&pr(i,t,n),n};const gr="mealie-card:add-recipe-view";let ur=class extends(Qs(re)){constructor(){super(...arguments),this.configEntryId=null,this.imageBaseUrls=[],this.showImage=!1,this.value="",this._recipes=[],this._searching=!1,this._view=function(){try{return"grid"===localStorage.getItem(gr)?"grid":"list"}catch{return"list"}}(),this._searchDebounce=null,this._searchRequest=0,this._toggleView=()=>{this._view="list"===this._view?"grid":"list",function(e){try{localStorage.setItem(gr,e)}catch{return}}(this._view)}}firstUpdated(e){super.firstUpdated(e),this._search("")}disconnectedCallback(){super.disconnectedCallback(),this._cancelPendingSearch(),this._searchRequest+=1}_cancelPendingSearch(){this._searchDebounce&&(clearTimeout(this._searchDebounce),this._searchDebounce=null)}_onSearch(e){this._cancelPendingSearch(),this._searchDebounce=setTimeout(()=>{this._searchDebounce=null,this._search(e.trim())},300)}async _search(e){const i=++this._searchRequest;this._searching=!0;let t=[];try{t=await rs(this.hass,{configEntryId:this.configEntryId??void 0,resultLimit:30,search:e||void 0})}catch(e){i===this._searchRequest&&Ns(this,"hass-notification",{message:this.localizeError(e)})}i===this._searchRequest&&(this._searching=!1,this._recipes=function(e){return e.filter(e=>!!e.recipe_id)}(t),this.value&&!this._recipes.some(e=>e.recipe_id===this.value)&&this._select(""))}_select(e){this.value=e,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_renderViewToggle(){if(!this.showImage)return B;const e="list"===this._view;return H`
      <ha-icon-button .label=${this.localize(e?"dialog.view_as_grid":"dialog.view_as_list")} @click=${this._toggleView}>
        <ha-icon icon=${e?"mdi:view-grid-outline":"mdi:view-list-outline"}></ha-icon>
      </ha-icon-button>
    `}_renderRecipeSelector(){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"list",options:(e=this._recipes,e.map(e=>({value:e.recipe_id,label:e.name})))}}}
        .value=${this.value}
        .label=${this.localize("dialog.select_recipe")}
        .required=${!1}
        @value-changed=${e=>{e.stopPropagation(),this._select(e.detail.value)}}
      ></ha-selector>
    `;var e}_renderThumbnail(e){const i=xa(this.hass,e,{urls:this.imageBaseUrls,variant:"tiny",containerClass:"recipe-thumb",imgClass:"recipe-thumb-img"});return i===B?H`<div class="recipe-thumb image-error"></div>`:i}_renderRecipeOption(e){const i=e.recipe_id===this.value;return H`
      <button
        type="button"
        role="radio"
        class="recipe-option ${i?"selected":""}"
        aria-checked=${i?"true":"false"}
        @click=${()=>this._select(e.recipe_id)}
      >
        ${this._renderThumbnail(e)}
        <span class="recipe-option-name">${e.name}</span>
      </button>
    `}_renderRecipeOptions(){return H`
      <div class="recipe-options-${this._view}" role="radiogroup" aria-label=${this.localize("dialog.select_recipe")}>
        ${rr(this._recipes,e=>e.recipe_id,e=>this._renderRecipeOption(e))}
      </div>
    `}_renderResults(){return this._recipes.length?H`
      <div class="recipe-picker" aria-busy=${this._searching?"true":"false"}>
        ${this.showImage?this._renderRecipeOptions():this._renderRecipeSelector()}
      </div>
    `:this._searching?H`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`:H`<ha-alert alert-type="info">${this.localize("common.no_recipe")}</ha-alert>`}render(){return H`
      <div class="dialog-body">
        <div class="card-toolbar">
          <mealie-recipe-search
            .placeholder=${this.localize("common.search_placeholder")}
            @search-changed=${e=>this._onSearch(e.detail.value)}
          ></mealie-recipe-search>
          ${this._renderViewToggle()}
        </div>
        ${this._renderResults()}
      </div>
    `}};ur.styles=Os,hr([ce({attribute:!1})],ur.prototype,"hass",2),hr([ce()],ur.prototype,"configEntryId",2),hr([ce({attribute:!1})],ur.prototype,"imageBaseUrls",2),hr([ce({type:Boolean})],ur.prototype,"showImage",2),hr([ce()],ur.prototype,"value",2),hr([pe()],ur.prototype,"_recipes",2),hr([pe()],ur.prototype,"_searching",2),hr([pe()],ur.prototype,"_view",2),ur=hr([ma("mealie-recipe-picker")],ur);var mr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,vr=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?fr(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&mr(i,t,n),n};let yr=class extends Dn{constructor(){super(...arguments),this.date=null,this.imageBaseUrls=[],this.showImage=!1,this._date="",this._entryType="dinner",this._recipeId="",this._handleAdd=()=>{const e=this._recipeId;e&&this._date&&this._entryType&&this.hass&&this.submit({run:()=>ls(this.hass,{date:this._date,entryType:this._entryType,recipeId:e,configEntryId:this.configEntryId??void 0}),success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:Ts})}}onOpen(){this._date=this.date??xs(new Date),this._entryType="dinner",this._recipeId=""}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="medium" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_recipe_to_mealplan")}</span>

        <div class="dialog-body">
          <mealie-recipe-picker
            .hass=${this.hass}
            .configEntryId=${this.configEntryId}
            .imageBaseUrls=${this.imageBaseUrls}
            .showImage=${this.showImage}
            .value=${this._recipeId}
            @value-changed=${e=>{this._recipeId=e.detail.value}}
          ></mealie-recipe-picker>
          ${this.renderDateSelector(this._date,e=>this._date=e)}
          ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._recipeId||!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:B}};vr([ce()],yr.prototype,"date",2),vr([ce({attribute:!1})],yr.prototype,"imageBaseUrls",2),vr([ce({type:Boolean})],yr.prototype,"showImage",2),vr([pe()],yr.prototype,"_date",2),vr([pe()],yr.prototype,"_entryType",2),vr([pe()],yr.prototype,"_recipeId",2),yr=vr([ma("mealie-mealplan-add-recipe-dialog")],yr);var br=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,$r=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?wr(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&br(i,t,n),n};let kr=class extends Dn{constructor(){super(...arguments),this.planRecipe=null,this.imageBaseUrls=[],this.showImage=!1,this._date="",this._entryType="dinner",this._title="",this._text="",this._replacingRecipe=!1,this._replacementRecipeId="",this._handleSave=()=>{if(!(this.planRecipe&&this._date&&this._entryType&&this.hass))return;const e={configEntryId:this.configEntryId??void 0,mealplanId:String(this.planRecipe.mealplan_id),date:this._date,entryType:this._entryType};if(this._isNote){const i=this._title.trim();if(!i)return;return void this._save({...e,noteTitle:i,noteText:this._text.trim()||void 0})}const i=this._recipeId;i&&this._save({...e,recipeId:i})}}get _isNote(){return!this.planRecipe?.recipe}onOpen(){this.planRecipe&&(this._date=this.planRecipe.mealplan_date,this._entryType=this.planRecipe.entry_type,this._title=this.planRecipe.title??"",this._text=this.planRecipe.description??"",this._replacingRecipe=!1,this._replacementRecipeId="")}get _recipeId(){return this._replacingRecipe&&this._replacementRecipeId||this.planRecipe?.recipe?.recipe_id||""}_save(e){this.submit({run:()=>function(e,i){return Xt("error.error_updating_mealplan",()=>ts(e,"update_mealplan",{mealplan_id:i.mealplanId,...ns(i)},i.configEntryId))}(this.hass,e),success:"dialog.mealplan_updated_success",errorKey:"error.error_updating_mealplan",signal:Ts})}_renderRecipeReplacement(){return this._replacingRecipe?H`
      <mealie-recipe-picker
        .hass=${this.hass}
        .configEntryId=${this.configEntryId}
        .imageBaseUrls=${this.imageBaseUrls}
        .showImage=${this.showImage}
        .value=${this._replacementRecipeId}
        @value-changed=${e=>{this._replacementRecipeId=e.detail.value}}
      ></mealie-recipe-picker>
    `:H`
        <ha-button
          appearance="plain"
          size="small"
          @click=${()=>{this._replacingRecipe=!0}}
        >
          <ha-icon slot="start" icon="mdi:swap-horizontal"></ha-icon>
          ${this.localize("dialog.replace_recipe")}
        </ha-button>
      `}render(){if(!this.open||!this.planRecipe)return B;const e=this._isNote?"":H`<span slot="headerTitle">${this.planRecipe.recipe?.name??""}</span>`;return H`
      <ha-dialog .open=${this.open} width=${this._replacingRecipe?"medium":"small"} .hass=${this.hass} @closed=${this._close}>
        ${e}
        <span slot="headerSubtitle">${this.localize("dialog.edit_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
          ${this._isNote?H`
                ${this.renderTextSelector(this._title,"dialog.note_title",e=>this._title=e)}
                ${this.renderTextSelector(this._text,"dialog.note_text",e=>this._text=e,!0)}
              `:this._renderRecipeReplacement()}
        </div>

        ${this.renderPrimaryFooter("dialog.save",this._handleSave,!this._date||!this._entryType||(this._isNote?!this._title.trim():!this._recipeId)||this._submitting)}
      </ha-dialog>
    `}};$r([ce({attribute:!1})],kr.prototype,"planRecipe",2),$r([ce({attribute:!1})],kr.prototype,"imageBaseUrls",2),$r([ce({type:Boolean})],kr.prototype,"showImage",2),$r([pe()],kr.prototype,"_date",2),$r([pe()],kr.prototype,"_entryType",2),$r([pe()],kr.prototype,"_title",2),$r([pe()],kr.prototype,"_text",2),$r([pe()],kr.prototype,"_replacingRecipe",2),$r([pe()],kr.prototype,"_replacementRecipeId",2),kr=$r([ma("mealie-mealplan-edit-dialog")],kr);var zr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Ar=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?xr(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&zr(i,t,n),n};let Sr=class extends Dn{constructor(){super(...arguments),this.entry=null,this._handleDelete=()=>{this.entry&&this.hass&&this.submit({run:()=>{return e=this.hass,i=String(this.entry.id),t=this.configEntryId??void 0,Xt("error.error_deleting_mealplan",()=>ts(e,"delete_mealplan",{mealplan_id:i},t));var e,i,t},success:"dialog.mealplan_deleted_success",errorKey:"error.error_deleting_mealplan",signal:Ts})}}render(){return this.open&&this.entry?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.entry.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.confirm_delete_title")}</span>

        <div class="dialog-body-recipe">
          <span class="dialog-type">${Zt(this.entry.entryType,this.hass?.locale?.language)}</span>
          <span class="dialog-label">${Is(this.entry.date,this.hass)}</span>
        </div>

        <ha-dialog-footer slot="footer">
          <ha-button size="small" variant="danger" appearance="accent" slot="secondaryAction" @click=${this._close}>
            ${this.localize("dialog.cancel")}
          </ha-button>
          <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${this._handleDelete} ?disabled=${this._submitting}>
            ${this._submitting?"...":this.localize("dialog.confirm")}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `:B}};Ar([ce({attribute:!1})],Sr.prototype,"entry",2),Sr=Ar([ma("mealie-mealplan-delete-dialog")],Sr);var Ir=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Mr=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?Tr(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&Ir(i,t,n),n};let Rr=class extends Dn{constructor(){super(...arguments),this.entries=[],this.defaultShoppingListId=null,this._recipes=[],this._excluded=new Set,this._shoppingLists=new Tn(this),this._handleAdd=()=>{const e=this._shoppingLists.selectedId,i=this._selectedRecipes;e&&i.length&&this.submit({run:()=>this._addAll(e,i),success:()=>this.localize("dialog.plan_added_to_shopping_list","{count}",String(i.length)),errorKey:"error.error_updating_shopping_list",signal:Rs})}}get _selectedRecipes(){return this._recipes.filter(e=>!this._excluded.has(e.recipeId))}onOpen(){this._recipes=function(e){const i=new Map;for(const{recipe:t}of e){const e=t?.recipe_id;if(!e)continue;const s=i.get(e);s?s.count+=1:i.set(e,{recipeId:e,name:t.name,count:1})}return[...i.values()]}(this.entries),this._excluded=new Set,this._shoppingLists.load(this.hass,this.configEntryId,this.defaultShoppingListId)}_toggleRecipe(e){const i=new Set(this._excluded);i.delete(e)||i.add(e),this._excluded=i}async _addAll(e,i){for(const t of i)await ds(this.hass,{configEntryId:this.configEntryId??void 0,shoppingListId:e,recipeId:t.recipeId,quantity:t.count})}_renderRecipe(e){const i=!this._excluded.has(e.recipeId);return H`
      <label class="ingredient-item">
        <ha-checkbox .checked=${i} @change=${()=>this._toggleRecipe(e.recipeId)}></ha-checkbox>
        <span class="ingredient-item-text">${e.name}${e.count>1?H` <strong>× ${e.count}</strong>`:B}</span>
      </label>
    `}_renderRecipes(){return this._recipes.length?H`
      <div class="ingredient-list-header">
        <span class="ingredient-list-title">${this.localize("dialog.planned_recipes")}</span>
      </div>
      <div class="ingredient-list">${this._recipes.map(e=>this._renderRecipe(e))}</div>
    `:H`<ha-alert alert-type="info">${this.localize("common.no_mealplan")}</ha-alert>`}render(){if(!this.open)return B;const e=!this._shoppingLists.selectedId||!this._selectedRecipes.length||this._submitting;return H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_plan_to_shopping_list")}</span>
        <div class="dialog-body">${this.renderShoppingListSelector(this._shoppingLists)} ${this._renderRecipes()}</div>
        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,e)}
      </ha-dialog>
    `}};Mr([ce({attribute:!1})],Rr.prototype,"entries",2),Mr([ce()],Rr.prototype,"defaultShoppingListId",2),Mr([pe()],Rr.prototype,"_recipes",2),Mr([pe()],Rr.prototype,"_excluded",2),Rr=Mr([ma("mealie-mealplan-shopping-dialog")],Rr);var Er=Object.defineProperty,Cr=(e,i,t,s)=>{for(var a,n=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(i,t,n)||n);return n&&Er(i,t,n),n};const Dr=["view_recipe","add_to_shopping_list","edit_mealplan","delete_mealplan"];class jr extends tn{constructor(){super(...arguments),this.recipes=[],this._dialogRecipe=null,this._confirmDeleteEntry=null,this._noteDialogDate=null,this._randomDialogDate=null,this._addRecipeDate=null,this._editDialogEntry=null,this._shoppingRecipe=null,this._planShoppingOpen=!1,this._pageOffset=0}get _showAddRecipeButton(){return this.config.show_add_recipe_button??!0}get _showRandomButton(){return this.supports("random_mealplan")&&(this.config.show_random_button??!0)}get _showNoteButton(){return this.config.show_note_button??!0}get _dateRange(){const{start:e,count:i}=function(e,i){const t=Math.max(1,Math.floor(i||1));if("number"==typeof e)return{start:Math.max(0,Math.floor(e)),count:t};if("string"!=typeof e)return{start:0,count:t};const s=e.trim(),a=As.exec(s);if(a){const e=Number(a[1]),i=Number(a[2]);return{start:Math.min(e,i),count:Math.min(31,Math.abs(i-e)+1)}}return/^\d{1,3}$/.test(s)?{start:Number(s),count:t}:{start:0,count:t}}(this.config.day_offset,this.config.days_to_show??1);return function(e,i=0){const t=Math.max(1,Math.floor(e)),s=Math.floor(i),a=new Date;return Array.from({length:t},(e,i)=>xs(new Date(a.getFullYear(),a.getMonth(),a.getDate()+s+i)))}(i,e+this._pageOffset*i)}get _showNavigation(){return!!this.config.show_navigation}get _showPlanShoppingButton(){return!!this.config.show_plan_shopping_button&&this.supports("shopping_list")}_goToPage(e){e!==this._pageOffset&&(this._pageOffset=e,this._reload())}get _daysHorizontal(){return"horizontal"===this.config.days_layout}get _recipesHorizontal(){return"horizontal"===this.config.recipes_layout}_columnStyle(e,i,t){return e?ye({[i]:String(Math.max(1,Math.floor(t??2)))}):B}_groupByDate(){const e=new Map;for(const i of this.recipes){const t=e.get(i.mealplan_date);t?t.push(i):e.set(i.mealplan_date,[i])}return e}_scheduleMidnightRefresh(){this._clearMidnightTimer();const e=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,5,0);this._midnightTimer=setTimeout(()=>{this._reload(),this._scheduleMidnightRefresh()},i.getTime()-e.getTime())}_clearMidnightTimer(){this._midnightTimer&&(clearTimeout(this._midnightTimer),this._midnightTimer=void 0)}watchedEntityIds(){return this.findMealieEntities("calendar")}itemCount(){return this.recipes.length}hasOpenDialog(){return!!this._dialogRecipe||!!this._shoppingRecipe||!!this._editDialogEntry||!!this._confirmDeleteEntry||!!this._noteDialogDate||!!this._randomDialogDate||!!this._addRecipeDate||this._planShoppingOpen}refreshSignal(){return Ts}subscribeExtras(){return[Ps(Es,({slug:e,rating:i})=>{this.recipes=this.recipes.map(t=>t.recipe?.slug===e?{...t,recipe:{...t.recipe,rating:i}}:t)})]}connectedCallback(){super.connectedCallback(),this._scheduleMidnightRefresh()}disconnectedCallback(){super.disconnectedCallback(),this._clearMidnightTimer()}setConfig(e){this.config=function(e){return Ce(e,Me)}(e),this._reload()}static getConfigElement(){return document.createElement("mealie-card-editor")}static getStubConfig(){return{...Me}}async fetchData(){const e=this._dateRange,i=await(t=this.hass,s={configEntryId:this.config.config_entry_id??void 0,startDate:e[0],endDate:e[e.length-1]},Xt("error.error_loading",async()=>{const e=await ss(t,"get_mealplan",{start_date:s.startDate,end_date:s.endDate},s.configEntryId);return(e?.mealplan??[]).sort((e,i)=>Yt(e.entry_type)-Yt(i.entry_type))}));var t,s;const a=this.config.entry_types;this.recipes=a?.length?i.filter(e=>a.includes(e.entry_type)):i}render(){return this.hass&&this.config?this.config.config_entry_id?H`<ha-card>${this.renderCookTimers()} ${this._renderPlanToolbar()} ${this._renderContent()} ${this._renderDialogs()}</ha-card>`:this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}_renderNavigation(e){return H`
      <div class="plan-navigation">
        <ha-icon-button .label=${this.localize("cards.previous_period")} @click=${()=>this._goToPage(this._pageOffset-1)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </ha-icon-button>
        <span class="plan-range-label">${Ss(e[0],e[e.length-1],this.hass)}</span>
        <ha-icon-button .label=${this.localize("cards.next_period")} @click=${()=>this._goToPage(this._pageOffset+1)}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </ha-icon-button>
        ${0!==this._pageOffset?H`<ha-icon-button .label=${this.localize("common.today")} @click=${()=>this._goToPage(0)}>
              <ha-icon icon="mdi:calendar-today"></ha-icon>
            </ha-icon-button>`:B}
      </div>
    `}_renderPlanToolbar(){const e=this._showNavigation,i=this._showPlanShoppingButton;return e||i?H`
      <div class="plan-toolbar">
        ${e?this._renderNavigation(this._dateRange):B}
        ${i?H`<ha-icon-button
              class="plan-shopping-button"
              .label=${this.localize("dialog.add_plan_to_shopping_list")}
              .disabled=${!this.recipes.some(e=>!!e.recipe)}
              @click=${()=>{this._planShoppingOpen=!0}}
            >
              <ha-icon icon="mdi:cart-arrow-down"></ha-icon>
            </ha-icon-button>`:B}
      </div>
    `:B}_renderContent(){if(this.error)return H`<div class="card-content">${this.renderErrorAlert()}</div>`;if((this._loading||!this._initialized)&&!this.recipes.length)return H`<div class="card-content">${this.renderLoadingIndicator()}</div>`;const e=this._groupByDate();return H`
      <div class="days-wrapper" aria-busy=${this._loading?"true":"false"}>
        <div
          class="${this._daysHorizontal?"days-horizontal":"days-vertical"}"
          style=${this._columnStyle(this._daysHorizontal,"--mealie-day-columns",this.config.days_columns)}
        >
          ${this._dateRange.map(i=>this._renderDaySection(i,e.get(i)??[]))}
        </div>
      </div>
    `}_renderDialogs(){return H`
      <mealie-recipe-dialog
        .hass=${this.hass}
        .recipe=${this._dialogRecipe}
        .configEntryId=${this.config.config_entry_id}
        .config=${this.config}
        .defaultShoppingListId=${this.config.default_shopping_list_id??null}
        .timerStore=${this.timerStore}
        ?open=${!!this._dialogRecipe}
        @dialog-closed=${()=>{this._dialogRecipe=null}}
      ></mealie-recipe-dialog>
      <mealie-mealplan-note-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        .date=${this._noteDialogDate}
        ?open=${!!this._noteDialogDate}
        @dialog-closed=${()=>{this._noteDialogDate=null}}
      ></mealie-mealplan-note-dialog>
      <mealie-mealplan-random-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        .targetDate=${this._randomDialogDate}
        ?open=${!!this._randomDialogDate}
        @dialog-closed=${()=>{this._randomDialogDate=null}}
      ></mealie-mealplan-random-dialog>
      <mealie-mealplan-add-recipe-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        .date=${this._addRecipeDate}
        .imageBaseUrls=${bs(this.config)}
        .showImage=${this.config.show_image}
        ?open=${!!this._addRecipeDate}
        @dialog-closed=${()=>{this._addRecipeDate=null}}
      ></mealie-mealplan-add-recipe-dialog>
      <mealie-mealplan-edit-dialog
        .hass=${this.hass}
        .planRecipe=${this._editDialogEntry}
        .configEntryId=${this.config.config_entry_id}
        .imageBaseUrls=${bs(this.config)}
        .showImage=${this.config.show_image}
        ?open=${!!this._editDialogEntry}
        @dialog-closed=${()=>{this._editDialogEntry=null}}
      ></mealie-mealplan-edit-dialog>
      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._shoppingRecipe}
        .configEntryId=${this.config.config_entry_id}
        .defaultShoppingListId=${this.config.default_shopping_list_id??null}
        ?open=${!!this._shoppingRecipe}
        @dialog-closed=${()=>{this._shoppingRecipe=null}}
      ></mealie-shopping-list-dialog>
      <mealie-mealplan-shopping-dialog
        .hass=${this.hass}
        .entries=${this.recipes}
        .configEntryId=${this.config.config_entry_id}
        .defaultShoppingListId=${this.config.default_shopping_list_id??null}
        ?open=${this._planShoppingOpen}
        @dialog-closed=${()=>{this._planShoppingOpen=!1}}
      ></mealie-mealplan-shopping-dialog>
      <mealie-mealplan-delete-dialog
        .hass=${this.hass}
        .entry=${this._confirmDeleteEntry}
        .configEntryId=${this.config.config_entry_id}
        ?open=${!!this._confirmDeleteEntry}
        @dialog-closed=${()=>{this._confirmDeleteEntry=null}}
      ></mealie-mealplan-delete-dialog>
    `}_renderDaySection(e,i){return H`
      <div class="day-section">
        ${this._renderDayHeader(e)}
        <div class="card-content">
          ${i.length?H`<div
                class="${this._recipesHorizontal?"recipes-horizontal":"recipes-vertical"}"
                style=${this._columnStyle(this._recipesHorizontal,"--mealie-recipe-columns",this.config.recipes_columns)}
              >
                ${i.map(e=>this._renderRecipeCard(e))}
              </div>`:H`<ha-alert alert-type="info">${this.localize("common.no_mealplan")}</ha-alert>`}
        </div>
      </div>
    `}_renderDayHeader(e){return H`
      <div class="card-header-row">
        <div class="date-label">${Is(e,this.hass)}</div>
        <div class="header-actions">${this.renderActionsMenu(this._dayActions(e),"cards.day_actions")}</div>
      </div>
    `}_dayActions(e){const i=[];return this._showAddRecipeButton&&i.push({labelKey:"dialog.add_recipe_to_mealplan",icon:"mdi:calendar-plus",onClick:()=>{this._addRecipeDate=e}}),this._showRandomButton&&i.push({labelKey:"cards.random_mealplan",icon:"mdi:dice-6",onClick:()=>{this._randomDialogDate=e}}),this._showNoteButton&&i.push({labelKey:"dialog.add_note_to_mealplan",icon:"mdi:note-plus-outline",onClick:()=>{this._noteDialogDate=e}}),i}_planHandlers(e){const i=e.recipe;return{view_recipe:i?()=>{this.openRecipe(i)&&(this._dialogRecipe=i)}:void 0,add_to_shopping_list:i&&this.supports("shopping_list")?()=>{this._shoppingRecipe=i}:void 0,edit_mealplan:this.supports("edit_mealplan")?()=>{this._editDialogEntry=e}:void 0,delete_mealplan:this.supports("delete_mealplan")?()=>{this._confirmDeleteEntry={id:e.mealplan_id,name:e.recipe?.name??e.title??"",entryType:e.entry_type,date:e.mealplan_date}}:void 0}}_renderRecipeCard(e){const i=this._planHandlers(e),t=pn(i,this.config),s=dn(rn(Dr,this.config),i);return H`
      <div class="recipe-card ${_a(t)?"pressable":""}">
        ${this.renderPressSurface(e.recipe?.name??e.title,t)}
        <div class="recipe-card-body">
          <div class="recipe-type">${Zt(e.entry_type,this.hass?.locale?.language)}</div>
          ${e.recipe?this._renderRecipeWithData(e.recipe,s):this._renderRecipeWithoutData(e,s)}
        </div>
      </div>
    `}_renderRecipeWithData(e,i){return H`
      ${this.renderRecipeMedia(e,this.config.show_image,i)}
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      <div class="recipe-meta">
        ${this._renderInteractiveRating(e,this.config.show_rating,this.config.config_entry_id)}
        ${this.renderServings(e,this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
      ${this.renderRecipeTags(e,this.config)}
      ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
    `}_renderRecipeWithoutData(e,i){return H`
      ${this.renderRecipeMedia(e,!1,i)}
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      ${this.renderRecipeDescription(e.description??"",!0)}
    `}}Cr([pe()],jr.prototype,"config"),Cr([pe()],jr.prototype,"recipes"),Cr([pe()],jr.prototype,"_dialogRecipe"),Cr([pe()],jr.prototype,"_confirmDeleteEntry"),Cr([pe()],jr.prototype,"_noteDialogDate"),Cr([pe()],jr.prototype,"_randomDialogDate"),Cr([pe()],jr.prototype,"_addRecipeDate"),Cr([pe()],jr.prototype,"_editDialogEntry"),Cr([pe()],jr.prototype,"_shoppingRecipe"),Cr([pe()],jr.prototype,"_planShoppingOpen"),Cr([pe()],jr.prototype,"_pageOffset");var Lr=Object.getOwnPropertyDescriptor;const Pr=["view_recipe","add_to_mealplan","add_to_shopping_list"],Or={recipe_tap_action:$e,recipe_double_tap_action:Ae,recipe_hold_action:ke};let Nr=class extends kn{get _favoritesSupported(){return qs(this.hass,"favorites")}renderInfosDisplayFields(){return H`
      ${super.renderInfosDisplayFields()}
      ${this._favoritesSupported?_n(!!this.config.show_favorite,this.localize("editor.show_favorite"),e=>this._setValue("show_favorite",e)):B}
    `}_sortOptions(){return je.map(e=>({value:e,label:this.localize(`editor.sort_${e}`)}))}render(){return this.hass&&this.config?H`
      ${this.renderTopForm()} ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()} ${this.renderTimerOptions()}
      ${this.renderRecipeActionsPanel(Pr,Or)} ${this.renderRecipeViewOptions()} ${this.renderLanguageOptions()}

      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${hn(this.hass,this.config.page_size??0,this.localize("editor.page_size"),0,100,e=>this._setValue("page_size",e))}
          ${this.config.page_size?B:hn(this.hass,this.config.result_limit,this.localize("editor.number_of_recipes"),1,100,e=>this._setValue("result_limit",e))}
          ${_n(!!this.config.show_search,this.localize("editor.show_search"),e=>this._setValue("show_search",e))}
          ${this._favoritesSupported?_n(!!this.config.show_favorites_only,this.localize("editor.show_favorites_only"),e=>this._setValue("show_favorites_only",e)):B}
          ${_n(!!this.config.show_import_button,this.localize("editor.show_import_button"),e=>this._setValue("show_import_button",e))}
          ${_n(!!this.config.show_category_filters,this.localize("editor.show_category_filters"),e=>this._setValue("show_category_filters",e))}
          ${_n(!!this.config.show_tag_filters,this.localize("editor.show_tag_filters"),e=>this._setValue("show_tag_filters",e))}
          ${_n(!!this.config.show_surprise_button,this.localize("editor.show_surprise_button"),e=>this._setValue("show_surprise_button",e))}
          ${un(this.hass,this.config.sort_by??"none",this.localize("editor.sort_by"),this._sortOptions(),e=>this._setValue("sort_by",e||"none"))}
        </div>
      </ha-expansion-panel>
      ${this.renderVersion()}
    `:this.renderEditorLoading()}};Nr=((e,i,t,s)=>{for(var a,n=s>1?void 0:s?Lr(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(n)||n);return n})([ma("mealie-recipe-card-editor")],Nr);var Vr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Hr=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?Ur(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&Vr(i,t,n),n};let Fr=class extends Dn{constructor(){super(...arguments),this.recipe=null,this.imageBaseUrls=[],this._date="",this._entryType="dinner",this._imageMissing=!1,this._handleAdd=()=>{const e=this.recipe?.recipe_id;e&&this._date&&this._entryType&&this.hass&&this.submit({run:()=>ls(this.hass,{date:this._date,entryType:this._entryType,recipeId:e,configEntryId:this.configEntryId??void 0}),success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:Ts})}}onOpen(){this._date=xs(new Date),this._entryType="dinner",this._imageMissing=!1}_renderImage(){return!this.recipe||this._imageMissing?B:xa(this.hass,this.recipe,{urls:this.imageBaseUrls,variant:"original",containerClass:"detail-image",imgClass:"detail-image-img",onImageMissing:()=>{this._imageMissing=!0}})}render(){return this.recipe?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.add_recipe_to_mealplan")}</span>

        <div class="dialog-body">
          ${this._renderImage()} ${this.renderDateSelector(this._date,e=>this._date=e)}
          ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this.recipe.recipe_id||!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:B}};Hr([ce({attribute:!1})],Fr.prototype,"recipe",2),Hr([ce({attribute:!1})],Fr.prototype,"imageBaseUrls",2),Hr([pe()],Fr.prototype,"_date",2),Hr([pe()],Fr.prototype,"_entryType",2),Hr([pe()],Fr.prototype,"_imageMissing",2),Fr=Hr([ma("mealie-mealplan-dialog")],Fr);var Br=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Kr=(e,i,t,s)=>{for(var a,n=s>1?void 0:s?qr(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s?a(i,t,n):a(n))||n);return s&&n&&Br(i,t,n),n};let Wr=class extends Dn{constructor(){super(...arguments),this._url="",this._includeTags=!1,this._importedName=null,this._handleImport=()=>{this._url.trim()&&this.hass&&(this._importedName=null,this.submit({run:async()=>{const e=await(i=this.hass,t={url:this._url.trim(),includeTags:this._includeTags,configEntryId:this.configEntryId??void 0},Xt("error.error_loading",async()=>as(await ss(i,"import_recipe",{url:t.url,...t.includeTags&&{include_tags:!0}},t.configEntryId))));var i,t;this._importedName=e?.name??e?.slug??""},success:()=>`${this.localize("dialog.recipe_imported_success")}${this._importedName?`: ${this._importedName}`:""}`,errorKey:"error.error_loading",signal:Ms,closeOnSuccess:!1}))}}onOpen(){this._url="",this._includeTags=!1,this._importedName=null}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.import_recipe")}</span>

        <div class="dialog-body">
          <ha-selector
            .hass=${this.hass}
            .selector=${{text:{type:"url"}}}
            .value=${this._url}
            .label=${this.localize("dialog.import_url")}
            .required=${!1}
            @value-changed=${e=>{this._url=e.detail.value}}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${{boolean:{}}}
            .value=${this._includeTags}
            .label=${this.localize("dialog.import_include_tags")}
            .required=${!1}
            @value-changed=${e=>{this._includeTags=e.detail.value}}
          ></ha-selector>

          ${this._importedName?H`<ha-alert alert-type="success">${this.localize("dialog.recipe_imported_success")}: <strong>${this._importedName}</strong></ha-alert>`:B}
        </div>

        ${this.renderPrimaryFooter("dialog.import",this._handleImport,!this._url.trim()||this._submitting)}
      </ha-dialog>
    `:B}};Kr([pe()],Wr.prototype,"_url",2),Kr([pe()],Wr.prototype,"_includeTags",2),Kr([pe()],Wr.prototype,"_importedName",2),Wr=Kr([ma("mealie-recipe-import-dialog")],Wr);var Zr=Object.defineProperty,Gr=(e,i,t,s)=>{for(var a,n=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(i,t,n)||n);return n&&Zr(i,t,n),n};const Qr=["add_to_mealplan","add_to_shopping_list","view_recipe"];function Jr(e,i){return(e.name??"").localeCompare(i.name??"")}function Yr(e,i){return(i.rating??0)-(e.rating??0)||Jr(e,i)}class Xr extends tn{constructor(){super(...arguments),this.recipes=[],this._mealplanRecipe=null,this._dialogRecipe=null,this._searchQuery="",this._importDialogOpen=!1,this._shoppingRecipe=null,this._selectedLabels=new Set,this._pageIndex=0,this._availableLabels=[],this._visibleRecipes=[],this._pageRecipes=[],this._randomRanks=new Map,this._searchDebounce=null,this._favoriteRecipesCache=null,this._favoriteIdsCache=null}refreshSignal(){return Ms}subscribeExtras(){return[Ps(Es,({slug:e,rating:i})=>{this.recipes=this.recipes.map(t=>t.slug===e?{...t,rating:i}:t)}),Ps(Cs,({slug:e,favorite:i})=>{this._favoriteIdsCache=null,this._favorites.get(e)!==i&&(this._favorites=new Map(this._favorites).set(e,i)),this.config?.show_favorites_only&&this._favoriteRecipesCache&&(this.recipes=this._visibleFavoriteRecipes())})]}disconnectedCallback(){super.disconnectedCallback(),this._searchDebounce&&(clearTimeout(this._searchDebounce),this._searchDebounce=null)}setConfig(e){this.config=function(e){return Ce(e,Re)}(e),this._reload()}watchedEntityIds(){return this.findMealieEntities("sensor").filter(e=>e.endsWith("_recipes"))}itemCount(){return this._pageRecipes.length||this.recipes.length}get _pageSize(){return Math.max(0,Math.floor(this.config?.page_size??0))}get _pageCount(){return this._pageSize?Math.max(1,Math.ceil(this._visibleRecipes.length/this._pageSize)):1}hasOpenDialog(){return!!this._dialogRecipe||!!this._mealplanRecipe||!!this._shoppingRecipe||this._importDialogOpen}_invalidateFavoriteCaches(){this._favoriteRecipesCache=null,this._favoriteIdsCache=null}_reload(){this._invalidateFavoriteCaches(),super._reload()}async fetchData(){this.recipes=this.config.show_favorites_only&&this.supports("favorites")?await this._loadFavoriteRecipes():await this._loadAllRecipes()}async _favoriteIds(){if(!this.supports("favorites"))return new Set;if(!this._favoriteIdsCache){const t=await(e=this.hass,i=this.config.config_entry_id??void 0,Xt("error.error_loading",async()=>{const t=await ss(e,"get_recipe_favorites",{},i);return t?.favorites??[]}));this._favoriteIdsCache=new Set(t.map(e=>e.recipe_id))}var e,i;return this._favoriteIdsCache}async _loadFavoriteRecipes(){if(!this._favoriteRecipesCache){const e=await this._favoriteIds(),i=await rs(this.hass,{configEntryId:this.config.config_entry_id??void 0,resultLimit:9999});this._favoriteRecipesCache=i.filter(i=>e.has(i.recipe_id??"")),this.config.show_favorite&&(this._favorites=new Map(this._favoriteRecipesCache.map(e=>[e.slug,!0])))}return this._visibleFavoriteRecipes()}_visibleFavoriteRecipes(){const e=this._favoriteRecipesCache??[];return this._applyFavoriteSearch(e.filter(e=>!1!==this._favorites.get(e.slug)))}async _loadAllRecipes(){const e=this.config.show_favorite&&this.supports("favorites"),[i,t]=await Promise.all([rs(this.hass,{configEntryId:this.config.config_entry_id??void 0,resultLimit:this._pageSize?we:this.config.result_limit??we,search:this._searchQuery||void 0}),e?this._favoriteIds():null]);return t&&(this._favorites=new Map(i.map(e=>[e.slug,t.has(e.recipe_id??"")]))),i}_applyFavoriteSearch(e){const i=this._searchQuery.toLowerCase();return i?e.filter(e=>e.name?.toLowerCase().includes(i)):e}_onSearch(e){this._searchQuery=e,this._pageIndex=0,this.config.show_favorites_only&&this._favoriteRecipesCache?this.recipes=this._visibleFavoriteRecipes():(this._searchDebounce&&clearTimeout(this._searchDebounce),this._searchDebounce=setTimeout(()=>this._reload(),300))}willUpdate(e){super.willUpdate(e),(e.has("recipes")||e.has("config"))&&this._refreshLabels(),(e.has("config")||e.has("_selectedLabels"))&&(this._pageIndex=0),(e.has("recipes")||e.has("config")||e.has("_selectedLabels"))&&(this._visibleRecipes=this._sortRecipes(this.recipes.filter(e=>function(e,i){if(!i.size)return!0;const t=new Set(Us(e).map(e=>e.key));return[...i].every(e=>t.has(e))}(e,this._selectedLabels)))),this._pageIndex=Math.min(this._pageIndex,this._pageCount-1),this._pageRecipes=this._pageSize?this._visibleRecipes.slice(this._pageIndex*this._pageSize,(this._pageIndex+1)*this._pageSize):this._visibleRecipes}_goToPage(e){this._pageIndex=Math.min(Math.max(0,e),this._pageCount-1),this.getBoundingClientRect().top<0&&this.scrollIntoView({block:"start"})}_renderPagination(){if(this._pageCount<=1)return B;const e=this._pageIndex*this._pageSize+1,i=e+this._pageRecipes.length-1;return H`
      <div class="recipe-pagination">
        <ha-icon-button .label=${this.localize("cards.previous_page")} .disabled=${this._pageIndex<=0} @click=${()=>this._goToPage(this._pageIndex-1)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </ha-icon-button>
        <span class="plan-range-label" aria-live="polite">${e}–${i} / ${this._visibleRecipes.length}</span>
        <ha-icon-button
          .label=${this.localize("cards.next_page")}
          .disabled=${this._pageIndex>=this._pageCount-1}
          @click=${()=>this._goToPage(this._pageIndex+1)}
        >
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </ha-icon-button>
      </div>
    `}_refreshLabels(){this._availableLabels=function(e,i){const t=new Map;if(!i.size)return[];for(const s of e)for(const e of Us(s))i.has(e.kind)&&!t.has(e.key)&&t.set(e.key,e);return[...t.values()].sort(Fs)}(this.recipes,Hs(this.config?.show_category_filters,this.config?.show_tag_filters));const e=new Set(this._availableLabels.map(e=>e.key)),i=[...this._selectedLabels].filter(i=>e.has(i));i.length!==this._selectedLabels.size&&(this._selectedLabels=new Set(i))}_sortRecipes(e){const i=this.config?.sort_by??"none";return"name"===i?[...e].sort(Jr):"rating"===i?[...e].sort(Yr):"random"===i?[...e].sort((e,i)=>this._randomRank(e)-this._randomRank(i)):e}_randomRank(e){let i=this._randomRanks.get(e.slug);return void 0===i&&(i=Math.random(),this._randomRanks.set(e.slug,i)),i}_toggleLabel(e){const i=new Set(this._selectedLabels);i.delete(e)||i.add(e),this._selectedLabels=i}_openSurpriseRecipe(){const e=(i=this._visibleRecipes)[Math.floor(Math.random()*i.length)];var i;e&&this._recipeHandlers(e).view_recipe?.()}static getConfigElement(){return document.createElement("mealie-recipe-card-editor")}static getStubConfig(){return{...Re}}render(){return this.config?this.config.config_entry_id?H`${this._renderCardShell(this._renderContent())} ${this._renderDialogs()}`:this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}_renderContent(){if(this.error)return this.renderErrorAlert();const e=!!this.recipes?.length;return!this._loading&&this._initialized||e?this._visibleRecipes.length?H`<div class="recipes-wrapper" aria-busy=${this._loading?"true":"false"}>
      <div class="recipes-container">${this._pageRecipes.map(e=>this._renderRecipe(e))}</div>
      ${this._renderPagination()}
    </div>`:H`<ha-alert alert-type="info">${this.localize("common.no_recipe")}</ha-alert>`:this.renderLoadingIndicator()}_renderDialogs(){return H`
      <mealie-mealplan-dialog
        .hass=${this.hass}
        .recipe=${this._mealplanRecipe}
        .configEntryId=${this.config.config_entry_id}
        .imageBaseUrls=${bs(this.config)}
        ?open=${!!this._mealplanRecipe}
        @dialog-closed=${()=>{this._mealplanRecipe=null}}
      ></mealie-mealplan-dialog>
      <mealie-recipe-dialog
        .hass=${this.hass}
        .recipe=${this._dialogRecipe}
        .configEntryId=${this.config.config_entry_id}
        .config=${this.config}
        .isFavorite=${this._dialogRecipe?.slug?this._favorites.get(this._dialogRecipe.slug)??!1:null}
        .defaultShoppingListId=${this.config.default_shopping_list_id??null}
        .timerStore=${this.timerStore}
        ?open=${!!this._dialogRecipe}
        @dialog-closed=${()=>{this._dialogRecipe=null}}
      ></mealie-recipe-dialog>
      <mealie-recipe-import-dialog
        .hass=${this.hass}
        .configEntryId=${this.config.config_entry_id}
        ?open=${this._importDialogOpen}
        @dialog-closed=${()=>{this._importDialogOpen=!1}}
      ></mealie-recipe-import-dialog>
      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._shoppingRecipe}
        .configEntryId=${this.config.config_entry_id}
        .defaultShoppingListId=${this.config.default_shopping_list_id??null}
        ?open=${!!this._shoppingRecipe}
        @dialog-closed=${()=>{this._shoppingRecipe=null}}
      ></mealie-shopping-list-dialog>
    `}_renderCardShell(e){return H`
      <ha-card>
        ${this.renderCookTimers()}
        <div class="card-content">${this._renderToolbar()} ${this._renderFilters()} ${e}</div>
      </ha-card>
    `}_renderToolbar(){const e=this.config.show_search??!1,i=this.config.show_import_button&&this.supports("import_recipe"),t=!!this.config.show_surprise_button;return e||i||t?H`
      <div class="card-toolbar">
        ${e?H`<mealie-recipe-search
              .value=${this._searchQuery}
              .placeholder=${this.localize("common.search_placeholder")}
              @search-changed=${e=>this._onSearch(e.detail.value)}
            ></mealie-recipe-search>`:B}
        ${i?H`<ha-icon-button
                    .label=${this.localize("dialog.import_recipe")}
                    @click=${()=>{this._importDialogOpen=!0}}
                  >
                    <ha-icon icon="mdi:cloud-download"></ha-icon>
                  </ha-icon-button>`:B}
        ${t?H`<ha-icon-button .label=${this.localize("cards.surprise_recipe")} .disabled=${!this._visibleRecipes.length} @click=${()=>this._openSurpriseRecipe()}>
              <ha-icon icon="mdi:dice-5"></ha-icon>
            </ha-icon-button>`:B}
      </div>
    `:B}_renderFilters(){return this._availableLabels.length?H`
      <div class="recipe-filters" role="group" aria-label=${this.localize("cards.filter_recipes")}>
        ${this._availableLabels.map(e=>{const i=this._selectedLabels.has(e.key);return H`<button
            type="button"
            class="recipe-tag filter-chip ${e.kind} ${i?"selected":""}"
            aria-pressed=${i?"true":"false"}
            @click=${()=>this._toggleLabel(e.key)}
          >
            ${e.name}
          </button>`})}
      </div>
    `:B}_recipeHandlers(e){return{add_to_mealplan:()=>{this._mealplanRecipe=e},add_to_shopping_list:this.supports("shopping_list")?()=>{this._shoppingRecipe=e}:void 0,view_recipe:()=>{this.openRecipe(e)&&(this._dialogRecipe=e)}}}_renderRecipeInfo(e){return H`
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      <div class="recipe-meta">
        ${this.renderFavoriteButton(e,this.config.show_favorite??!1,this.config.config_entry_id)}
        ${this._renderInteractiveRating(e,this.config.show_rating,this.config.config_entry_id)}
        ${this.renderServings(e,this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
      ${this.renderRecipeTags(e,this.config)}
    `}_renderRecipe(e){const i=this._recipeHandlers(e),t=pn(i,this.config);return H`
      <div class="recipe-card ${_a(t)?"pressable":""}">
        ${this.renderPressSurface(e.name,t)}
        ${this.renderRecipeMedia(e,this.config.show_image,dn(rn(Qr,this.config),i))}
        ${this._renderRecipeInfo(e)}
        ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
      </div>
    `}}Gr([pe()],Xr.prototype,"config"),Gr([pe()],Xr.prototype,"recipes"),Gr([pe()],Xr.prototype,"_mealplanRecipe"),Gr([pe()],Xr.prototype,"_dialogRecipe"),Gr([pe()],Xr.prototype,"_searchQuery"),Gr([pe()],Xr.prototype,"_importDialogOpen"),Gr([pe()],Xr.prototype,"_shoppingRecipe"),Gr([pe()],Xr.prototype,"_selectedLabels"),Gr([pe()],Xr.prototype,"_pageIndex");var eo=Object.getOwnPropertyDescriptor;let io=class extends bn{integrationFields(){return[...super.integrationFields(),{name:"entity",selector:{entity:{filter:{domain:"todo",integration:"mealie"}}}}]}fieldLabels(){return{...super.fieldLabels(),entity:this.localize("editor.shopping_list_entity")}}render(){return this.hass&&this.config?H`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_shopping_list_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${gn(this.hass,this.config.title,this.localize("editor.title"),e=>this._setValue("title",e||void 0))}
          ${_n(this.config.show_add_item??!0,this.localize("editor.show_add_item"),e=>this._setValue("show_add_item",e))}
          ${_n(this.config.show_completed??!0,this.localize("editor.show_completed"),e=>this._setValue("show_completed",e))}
        </div>
      </ha-expansion-panel>
      ${this.renderLanguageOptions()} ${this.renderVersion()}
    `:this.renderEditorLoading()}};io=((e,i,t,s)=>{for(var a,n=s>1?void 0:s?eo(i,t):i,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(n)||n);return n})([ma("mealie-shopping-list-card-editor")],io);var to=Object.defineProperty,so=(e,i,t,s)=>{for(var a,n=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(n=a(i,t,n)||n);return n&&to(i,t,n),n};function ao(e){return"completed"===e.status}class no extends tn{constructor(){super(...arguments),this._items=[],this._newItem="",this._adding=!1,this._pending=new Set,this._onAddKeyDown=e=>{"Enter"===e.key&&(e.preventDefault(),this._addItem())}}setConfig(e){this.config=function(e){return Ce(e,Ee)}(e),this._items=[],this._reload()}static getConfigElement(){return document.createElement("mealie-shopping-list-card-editor")}static getStubConfig(){return{...Ee}}getCardSize(){return 2+this._openItems.length}get _entityId(){if(this.config?.entity)return this.config.entity;const e=this.hass?.entities??this.hass?.states;return this._resolvedEntity?.registry===e&&this._resolvedEntity.config===this.config||(this._resolvedEntity={registry:e,config:this.config,entityId:this.findMealieEntities("todo")[0]}),this._resolvedEntity.entityId}get _openItems(){return this._items.filter(e=>!ao(e))}get _completedItems(){return this._items.filter(ao)}get _title(){const e=this._entityId,i=e?this.hass?.states[e]?.attributes.friendly_name:void 0;return this.config.title||("string"==typeof i?i:"")||this.localize("cards.name_shopping_list")}canLoad(){return!!this._entityId}refreshSignal(){return Rs}watchedEntityIds(){const e=this._entityId;return e?[e]:[]}itemCount(){return this._items.length}async fetchData(){const e=this._entityId;if(!e)throw new Jt("error.no_shopping_list");this._items=await function(e,i){return Xt("error.error_loading",async()=>{const t=await gs(e,"get_items",i,{status:["needs_action","completed"]},!0);return t?.response?.[i]?.items??[]})}(this.hass,e)}_setPending(e,i){const t=new Set(this._pending);e.forEach(e=>i?t.add(e):t.delete(e)),this._pending=t}async _mutate(e,i,t){const s=this._entityId;if(s&&!e.some(e=>this._pending.has(e))){this._items=i,this._setPending(e,!0);try{await t(s)}catch(e){Ns(this,"hass-notification",{message:this.localizeError(e,"error.error_updating_shopping_list")})}finally{this._setPending(e,!1),this._reload()}}}_toggleItem(e){const i=!ao(e),t=i?"completed":"needs_action";this._mutate([e.uid],this._items.map(i=>i.uid===e.uid?{...i,status:t}:i),t=>function(e,i,t,s){return Xt("error.error_updating_shopping_list",async()=>{await gs(e,"update_item",i,{item:t,status:s?"completed":"needs_action"})})}(this.hass,t,e.uid,i))}_removeItem(e){this._mutate([e.uid],this._items.filter(i=>i.uid!==e.uid),i=>function(e,i,t){return Xt("error.error_updating_shopping_list",async()=>{await gs(e,"remove_item",i,{item:t})})}(this.hass,i,[e.uid]))}_clearCompleted(){const e=this._completedItems.map(e=>e.uid);e.length&&this._mutate(e,this._openItems,e=>function(e,i){return Xt("error.error_updating_shopping_list",async()=>{await gs(e,"remove_completed_items",i)})}(this.hass,e))}async _addItem(){const e=this._entityId,i=this._newItem.trim();if(e&&i&&!this._adding){this._adding=!0;try{await us(this.hass,e,i),this._newItem="",this._reload()}catch(e){Ns(this,"hass-notification",{message:this.localizeError(e,"error.error_updating_shopping_list")})}finally{this._adding=!1}}}_renderHeader(){return H`
      <div class="card-header-row">
        <div class="date-label">${this._title}</div>
      </div>
    `}_renderAddRow(){return this.config.show_add_item?H`
      <div class="shopping-add-row">
        <ha-selector
          .hass=${this.hass}
          .selector=${{text:{}}}
          .value=${this._newItem}
          .label=${this.localize("dialog.item_name")}
          .required=${!1}
          .disabled=${this._adding}
          @value-changed=${e=>{this._newItem=e.detail.value??""}}
          @keydown=${this._onAddKeyDown}
        ></ha-selector>
        <ha-icon-button .label=${this.localize("dialog.add_item")} .disabled=${this._adding||!this._newItem.trim()} @click=${()=>{this._addItem()}}>
          <ha-icon icon="mdi:plus"></ha-icon>
        </ha-icon-button>
      </div>
    `:B}_renderItem(e){const i=this._pending.has(e.uid);return H`
      <li class="shopping-item ${ao(e)?"completed":""}">
        <ha-checkbox .checked=${ao(e)} .disabled=${i} @change=${()=>this._toggleItem(e)}></ha-checkbox>
        <div class="shopping-item-text">
          <span class="shopping-item-summary">${e.summary}</span>
          ${e.description?H`<span class="shopping-item-description">${e.description}</span>`:B}
        </div>
        <ha-icon-button class="shopping-item-remove" .label=${this.localize("dialog.remove_item")} .disabled=${i} @click=${()=>this._removeItem(e)}>
          <ha-icon icon="mdi:delete-outline"></ha-icon>
        </ha-icon-button>
      </li>
    `}_renderOpenItems(){const e=this._openItems;return e.length?H`<ul class="shopping-items">
      ${e.map(e=>this._renderItem(e))}
    </ul>`:H`<ha-alert alert-type="info">${this.localize("dialog.empty_shopping_list")}</ha-alert>`}_renderCompletedItems(){const e=this._completedItems;return this.config.show_completed&&e.length?H`
      <ha-expansion-panel outlined>
        <span slot="header" class="details-title">${this.localize("dialog.completed_items")} (${e.length})</span>
        <div class="shopping-completed">
          <ul class="shopping-items">
            ${e.map(e=>this._renderItem(e))}
          </ul>
          <ha-button size="small" appearance="plain" variant="danger" @click=${()=>this._clearCompleted()}>
            <ha-icon slot="start" icon="mdi:broom"></ha-icon>
            ${this.localize("dialog.clear_completed")}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `:B}_renderContent(){return this.error?H`<div class="card-content">${this.renderErrorAlert()}</div>`:this._initialized||this._items.length?H`<div class="card-content">${this._renderAddRow()} ${this._renderOpenItems()} ${this._renderCompletedItems()}</div>`:H`<div class="card-content">${this.renderLoadingIndicator()}</div>`}render(){return this.hass&&this.config?this._entityId?H`<ha-card>${this._renderHeader()} ${this._renderContent()}</ha-card>`:this.renderEmptyState(this.localize("error.no_shopping_list")):this.renderLoading()}}so([pe()],no.prototype,"config"),so([pe()],no.prototype,"_items"),so([pe()],no.prototype,"_newItem"),so([pe()],no.prototype,"_adding"),so([pe()],no.prototype,"_pending"),customElements.get("mealie-mealplan-card")||customElements.define("mealie-mealplan-card",jr),customElements.get("mealie-recipe-card")||customElements.define("mealie-recipe-card",Xr),customElements.get("mealie-shopping-list-card")||customElements.define("mealie-shopping-list-card",no),window.customCards=window.customCards||[];[{type:"mealie-mealplan-card",name:Ut("en","cards.name_mealplan"),description:Ut("en","cards.description_mealplan"),configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"},{type:"mealie-recipe-card",name:Ut("en","cards.name_recipes"),description:Ut("en","cards.description_recipes"),configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"},{type:"mealie-shopping-list-card",name:Ut("en","cards.name_shopping_list"),description:Ut("en","cards.description_shopping_list"),configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"}].forEach(e=>{window.customCards?.some(i=>i.type===e.type)||window.customCards?.push(e)}),console.info(`%c MEALIE-CARD %c ${fn}`,"color: white; background: orange; font-weight: 700;","color: orange; background: white; font-weight: 700;");export{jr as MealieMealplanCard,Xr as MealieRecipeCard,no as MealieShoppingListCard};
