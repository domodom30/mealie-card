const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),a=new WeakMap;let s=class{constructor(e,i,a){if(this._$cssResult$=!0,a!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...i)=>{const a=1===e.length?e[0]:i.reduce((i,t,a)=>i+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+e[a+1],e[0]);return new s(a,e,t)},n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,t))(i)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:_}=Object,h=globalThis,u=h.trustedTypes,g=u?u.emptyScript:"",m=h.reactiveElementPolyfillSupport,f=(e,i)=>e,v={toAttribute(e,i){switch(i){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,i){let t=e;switch(i){case Boolean:t=null!==e;break;case Number:t=null===e?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch(e){t=null}}return t}},y=(e,i)=>!o(e,i),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=b){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const t=Symbol(),a=this.getPropertyDescriptor(e,t,i);void 0!==a&&l(this.prototype,e,a)}}static getPropertyDescriptor(e,i,t){const{get:a,set:s}=d(this.prototype,e)??{get(){return this[i]},set(e){this[i]=e}};return{get:a,set(i){const r=a?.call(this);s?.call(this,i),this.requestUpdate(e,r,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,i=[...c(e),...p(e)];for(const t of i)this.createProperty(t,e[t])}const e=this[Symbol.metadata];if(null!==e){const i=litPropertyMetadata.get(e);if(void 0!==i)for(const[e,t]of i)this.elementProperties.set(e,t)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const e of t)i.unshift(n(e))}else void 0!==e&&i.push(n(e));return i}static _$Eu(e,i){const t=i.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const t of i.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,a)=>{if(i)t.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of a){const a=document.createElement("style"),s=e.litNonce;void 0!==s&&a.setAttribute("nonce",s),a.textContent=i.cssText,t.appendChild(a)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,t){this._$AK(e,t)}_$ET(e,i){const t=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,t);if(void 0!==a&&!0===t.reflect){const s=(void 0!==t.converter?.toAttribute?t.converter:v).toAttribute(i,t.type);this._$Em=e,null==s?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(e,i){const t=this.constructor,a=t._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=t.getPropertyOptions(a),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a;const r=s.fromAttribute(i,e.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,i,t,a=!1,s){if(void 0!==e){const r=this.constructor;if(!1===a&&(s=this[e]),t??=r.getPropertyOptions(e),!((t.hasChanged??y)(s,i)||t.useDefault&&t.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,t))))return;this.C(e,i,t)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,i,{useDefault:t,reflect:a,wrapped:s},r){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??i??this[e]),!0!==s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||t||(i=void 0),this._$AL.set(e,i)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,i]of this._$Ep)this[e]=i;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[i,t]of e){const{wrapped:e}=t,a=this[i];!0!==e||this._$AL.has(i)||void 0===a||this.C(i,void 0,t,a)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(i)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,m?.({ReactiveElement:w}),(h.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,z=e=>e,k=$.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+M,I=`<${R}>`,E=document,S=()=>E.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,C="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,P=/>/g,O=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,U=/"/g,V=/^(?:script|style|textarea|title)$/i,H=(e=>(i,...t)=>({_$litType$:e,strings:i,values:t}))(1),B=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,W=E.createTreeWalker(E,129);function K(e,i){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(i):i}class G{constructor({strings:e,_$litType$:i},t){let a;this.parts=[];let s=0,r=0;const n=e.length-1,o=this.parts,[l,d]=((e,i)=>{const t=e.length-1,a=[];let s,r=2===i?"<svg>":3===i?"<math>":"",n=j;for(let i=0;i<t;i++){const t=e[i];let o,l,d=-1,c=0;for(;c<t.length&&(n.lastIndex=c,l=n.exec(t),null!==l);)c=n.lastIndex,n===j?"!--"===l[1]?n=L:void 0!==l[1]?n=P:void 0!==l[2]?(V.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=O):void 0!==l[3]&&(n=O):n===O?">"===l[0]?(n=s??j,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?O:'"'===l[3]?U:N):n===U||n===N?n=O:n===L||n===P?n=j:(n=O,s=void 0);const p=n===O&&e[i+1].startsWith("/>")?" ":"";r+=n===j?t+I:d>=0?(a.push(o),t.slice(0,d)+A+t.slice(d)+M+p):t+M+(-2===d?i:p)}return[K(e,r+(e[t]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),a]})(e,i);if(this.el=G.createElement(l,t),W.currentNode=this.el.content,2===i||3===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=W.nextNode())&&o.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(A)){const i=d[r++],t=a.getAttribute(e).split(M),n=/([.?@])?(.*)/.exec(i);o.push({type:1,index:s,name:n[2],strings:t,ctor:"."===n[1]?X:"?"===n[1]?ee:"@"===n[1]?ie:Y}),a.removeAttribute(e)}else e.startsWith(M)&&(o.push({type:6,index:s}),a.removeAttribute(e));if(V.test(a.tagName)){const e=a.textContent.split(M),i=e.length-1;if(i>0){a.textContent=k?k.emptyScript:"";for(let t=0;t<i;t++)a.append(e[t],S()),W.nextNode(),o.push({type:2,index:++s});a.append(e[i],S())}}}else if(8===a.nodeType)if(a.data===R)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=a.data.indexOf(M,e+1));)o.push({type:7,index:s}),e+=M.length-1}s++}}static createElement(e,i){const t=E.createElement("template");return t.innerHTML=e,t}}function Z(e,i,t=e,a){if(i===B)return i;let s=void 0!==a?t._$Co?.[a]:t._$Cl;const r=T(i)?void 0:i._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,t,a)),void 0!==a?(t._$Co??=[])[a]=s:t._$Cl=s),void 0!==s&&(i=Z(e,s._$AS(e,i.values),s,a)),i}class Q{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:t}=this._$AD,a=(e?.creationScope??E).importNode(i,!0);W.currentNode=a;let s=W.nextNode(),r=0,n=0,o=t[0];for(;void 0!==o;){if(r===o.index){let i;2===o.type?i=new J(s,s.nextSibling,this,e):1===o.type?i=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(i=new te(s,this,e)),this._$AV.push(i),o=t[++n]}r!==o?.index&&(s=W.nextNode(),r++)}return W.currentNode=E,a}p(e){let i=0;for(const t of this._$AV)void 0!==t&&(void 0!==t.strings?(t._$AI(e,t,i),i+=t.strings.length-2):t._$AI(e[i])),i++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,t,a){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=t,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===e?.nodeType&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Z(this,e,i),T(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:t}=e,a="number"==typeof t?this._$AC(e):(void 0===t.el&&(t.el=G.createElement(K(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===a)this._$AH.p(i);else{const e=new Q(a,this),t=e.u(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let i=q.get(e.strings);return void 0===i&&q.set(e.strings,i=new G(e)),i}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let t,a=0;for(const s of e)a===i.length?i.push(t=new J(this.O(S()),this.O(S()),this,this.options)):t=i[a],t._$AI(s),a++;a<i.length&&(this._$AR(t&&t._$AB.nextSibling,a),i.length=a)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const i=z(e).nextSibling;z(e).remove(),e=i}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,t,a,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=i,this._$AM=a,this.options=s,t.length>2||""!==t[0]||""!==t[1]?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=F}_$AI(e,i=this,t,a){const s=this.strings;let r=!1;if(void 0===s)e=Z(this,e,i,0),r=!T(e)||e!==this._$AH&&e!==B,r&&(this._$AH=e);else{const a=e;let n,o;for(e=s[0],n=0;n<s.length-1;n++)o=Z(this,a[t+n],i,n),o===B&&(o=this._$AH[n]),r||=!T(o)||o!==this._$AH[n],o===F?e=F:e!==F&&(e+=(o??"")+s[n+1]),this._$AH[n]=o}r&&!a&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class ee extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ie extends Y{constructor(e,i,t,a,s){super(e,i,t,a,s),this.type=5}_$AI(e,i=this){if((e=Z(this,e,i,0)??F)===B)return;const t=this._$AH,a=e===F&&t!==F||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,s=e!==F&&(t===F||a);a&&this.element.removeEventListener(this.name,this,t),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,i,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ae={I:J},se=$.litHtmlPolyfillSupport;se?.(G,J),($.litHtmlVersions??=[]).push("3.3.3");const re=globalThis;let ne=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,i,t)=>{const a=t?.renderBefore??i;let s=a._$litPart$;if(void 0===s){const e=t?.renderBefore??null;a._$litPart$=s=new J(i.insertBefore(S(),e),e,void 0,t??{})}return s._$AI(e),s})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};ne._$litElement$=!0,ne.finalized=!0,re.litElementHydrateSupport?.({LitElement:ne});const oe=re.litElementPolyfillSupport;oe?.({LitElement:ne}),(re.litElementVersions??=[]).push("4.2.2");const le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},de=(e=le,i,t)=>{const{kind:a,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),r.set(t.name,e),"accessor"===a){const{name:a}=t;return{set(t){const s=i.get.call(this);i.set.call(this,t),this.requestUpdate(a,s,e,!0,t)},init(i){return void 0!==i&&this.C(a,void 0,e,i),i}}}if("setter"===a){const{name:a}=t;return function(t){const s=this[a];i.call(this,t),this.requestUpdate(a,s,e,!0,t)}}throw Error("Unsupported decorator location: "+a)};function ce(e){return(i,t)=>"object"==typeof t?de(e,i,t):((e,i,t)=>{const a=i.hasOwnProperty(t);return i.constructor.createProperty(t,e),a?Object.getOwnPropertyDescriptor(i,t):void 0})(e,i,t)}function pe(e){return ce({...e,state:!0,attribute:!1})}const _e=1,he=2,ue=6,ge=e=>(...i)=>({_$litDirective$:e,values:i});let me=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,t){this._$Ct=e,this._$AM=i,this._$Ci=t}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};const fe="important",ve=" !"+fe,ye=ge(class extends me{constructor(e){if(super(e),e.type!==_e||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((i,t)=>{const a=e[t];return null==a?i:i+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[i]){const{style:t}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(i)),this.render(i);for(const e of this.ft)null==i[e]&&(this.ft.delete(e),e.includes("-")?t.removeProperty(e):t[e]=null);for(const e in i){const a=i[e];if(null!=a){this.ft.add(e);const i="string"==typeof a&&a.endsWith(ve);e.includes("-")||i?t.setProperty(e,i?a.slice(0,-11):a,i?fe:""):t[e]=a}}return B}}),be="mealie",we=9999,$e="view_recipe",ze="add_to_mealplan",ke="view_recipe",xe="edit_mealplan",Ae="none",Me={show_image:!1,show_rating:!1,show_servings:!1,show_prep_time:!0,show_total_time:!0,show_perform_time:!0,show_description:!1},Re="home",Ie={url:"",recipe_view:"dialog",mealie_group_slug:Re},Ee={type:"custom:mealie-mealplan-card",entry_types:[],recipes_layout:"vertical",days_layout:"vertical",day_offset:0,recipes_columns:2,days_columns:2,show_add_recipe_button:!0,show_random_button:!0,show_note_button:!0,show_recipe_menu:!0,show_view_recipe_button:!0,show_shopping_list_button:!0,show_edit_mealplan_button:!0,show_delete_mealplan_button:!0,default_shopping_list_id:"",recipe_tap_action:ke,recipe_hold_action:xe,recipe_double_tap_action:Ae,...Me,...Ie},Se={type:"custom:mealie-recipe-card",result_limit:we,show_search:!1,show_favorites_only:!1,show_favorite:!1,show_import_button:!1,show_recipe_menu:!0,show_view_recipe_button:!0,show_add_to_mealplan_button:!0,show_shopping_list_button:!0,default_shopping_list_id:"",recipe_tap_action:$e,recipe_hold_action:ze,recipe_double_tap_action:Ae,...Me,...Ie};function Te(e,i){const t={...e};for(const e of Object.keys(i))t[e]=t[e]??i[e];return t}const De=["breakfast","lunch","dinner","side","dessert","drink","snack"];var Ce={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Vis dagens måltider",name_recipes:"Mealie Opskrifter",description_recipes:"Vis dine opskrifter fra Mealie-instansen",view_recipe:"Vis opskrift",day_actions:"Dagens handlinger",recipe_actions:"Opskriftshandlinger",delete_mealplan:"Fjern fra plan",edit_mealplan:"Rediger måltidsplan",random_mealplan:"Tilfældigt måltid"},je={no_recipe:"Ingen opskrift",no_mealplan:"Intet måltid",today:"I dag",breakfast:"Morgenmad",lunch:"Frokost",dinner:"Aftensmad",side:"Tilbehør",dessert:"Dessert",drink:"Drik",snack:"Snack",search_placeholder:"Søg opskrifter..."},Le={add_to_mealplan:"Tilføj til måltidsplan",add_recipe_to_mealplan:"Tilføj til måltidsplan",select_date:"Vælg en dato",select_meal_type:"Måltidstype",select_recipe:"Vælg en opskrift",view_as_list:"Listevisning",view_as_grid:"Gittervisning",recipe_added_success:"Opskrift tilføjet til plan",cancel:"Annuller",add:"Tilføj",mealplan_deleted_success:"Måltid fjernet fra plan",confirm_delete_title:"Fjern dette måltid?",confirm:"Bekræft",ingredients:"Ingredienser",instructions:"Vejledning",times:"Tider",prep_time:"Forberedelse",cooking_time:"Tilberedning",total_time:"Total",add_note_to_mealplan:"Tilføj en note",note_title:"Titel",note_text:"Note (valgfri)",note_added_success:"Note tilføjet til plan",servings:"Portioner",decrease_servings:"Færre portioner",increase_servings:"Flere portioner",edit_mealplan:"Rediger måltidsplan",mealplan_updated_success:"Måltidsplan opdateret",save:"Gem",add_favorite:"Tilføj til favoritter",remove_favorite:"Fjern fra favoritter",add_to_shopping_list:"Tilføj til indkøbsliste",select_shopping_list:"Vælg indkøbsliste",shopping_list_quantity:"Mængdemultiplikator",recipe_added_to_shopping_list:"Opskrift tilføjet til indkøbsliste",no_shopping_lists:"Ingen indkøbslister tilgængelige",no_ingredients:"Ingen ingredienser tilgængelige",next:"Næste",back:"Tilbage",select_all:"Vælg alle",import_recipe:"Importer opskrift",import_url:"Opskrift-URL",import_include_tags:"Inkluder tags",import:"Importer",recipe_imported_success:"Opskrift importeret",open_in_mealie:"Åbn i Mealie"},Pe={no_url:"Konfigurer Mealie URL for at aktivere billeder og opskriftslinks."},Oe={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fejl ved indlæsning af konfiguration",error_loading:"Fejl ved indlæsning af data",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fejl ved sletning af måltid",error_updating_mealplan:"Fejl ved opdatering af måltidsplan"},Ne={integration:"Mealie integration",entry_types:"Måltidstyper der skal vises",loading:"Indlæser...",mealie_url:"Mealie URL",image_url:"Billed-URL eller lokal sti (valgfri)",number_of_recipes:"Antal opskrifter der skal vises",settings_recipes_card:"Visningskonfiguration",settings_infos:"Opskriftsinformation",settings_image:"Billede",settings_times:"Tider",settings_title_layout:"Layout",show_image:"Vis billede",show_rating:"Vis bedømmelse",show_favorite:"Vis favorit",show_servings:"Portioner & Mængde",show_description:"Vis beskrivelse",show_prep_time:"Vis forberedelsestid",show_cooking_time:"Vis tilberedningstid",show_total_time:"Vis total tid",layout_mode:"Visning",days_columns:"Kolonner med dage",recipes_columns:"Kolonner med måltider",layout_vertical:"Lodret",layout_horizontal:"Måltider side om side",layout_side_by_side:"Dage side om side",layout_days_and_meals_side_by_side:"Dage og måltider side om side",days_range:"Viste dage",days_range_helper:"Et tal (f.eks. 3 = om 3 dage) eller et interval (f.eks. 0-6 = i dag og de 6 følgende dage)",show_search:"Søgelinje",show_favorites_only:"Kun favoritter",show_import_button:"Vis importknap",show_random_button:"Vis knap til tilfældig måltid",settings_meal_actions:"Måltidshandlinger",settings_recipe_actions:"Handlinger på opskrifter",show_add_recipe_button:"Vis knap Tilføj opskrift",show_note_button:"Vis knap Tilføj note",settings_recipe_view:"Åbning af opskrifter",recipe_view:"Åbn opskriften i",recipe_view_dialog:"Dialog i kortet",recipe_view_webview:"Integreret Mealie-visning",recipe_view_browser:"Ny browserfane",recipe_tap_action:"Tryk på en opskrift",recipe_hold_action:"Langt tryk på en opskrift",recipe_double_tap_action:"Dobbelttryk på en opskrift",recipe_action_none:"Ingenting",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Vis knappen til menuen ⋮",mealie_group_slug:"Mealie-gruppe (slug)",settings_language:"Sprog",language:"Sprog",language_auto:"Automatisk (Home Assistant-sprog)",language_helper:"Tilsidesætter Home Assistant-sproget for dette kort, f.eks. for at bruge en regional variant som fr-CA."},Ue={hour:"time",hours:"timer",minute:"minut",minutes:"minutter",hour_short:"t",minute_short:"min"},Ve={cards:Ce,common:je,dialog:Le,info:Pe,error:Oe,editor:Ne,time:Ue},He=Object.freeze({__proto__:null,cards:Ce,common:je,default:Ve,dialog:Le,editor:Ne,error:Oe,info:Pe,time:Ue}),Be={name_mealplan:"Mealie Speiseplan",description_mealplan:"Heutige Mahlzeiten anzeigen",name_recipes:"Mealie Rezepte",description_recipes:"Zeigen Sie Ihre Rezepte von der Mealie-Instanz an",view_recipe:"Rezept anzeigen",day_actions:"Aktionen des Tages",recipe_actions:"Rezeptaktionen",delete_mealplan:"Aus dem Plan löschen",edit_mealplan:"Eintrag bearbeiten",random_mealplan:"Zufälliges Gericht"},Fe={no_recipe:"Kein Rezept",no_mealplan:"Keine Mahlzeit",today:"Heute",breakfast:"Frühstück",lunch:"Mittagessen",dinner:"Abendessen",side:"Beilage",dessert:"Dessert",drink:"Getränk",snack:"Snack",search_placeholder:"Rezepte suchen..."},qe={add_to_mealplan:"Zum Speiseplan hinzufügen",add_recipe_to_mealplan:"zum Speiseplan hinzufügen",select_date:"Datum auswählen",select_meal_type:"Mahlzeittyp",select_recipe:"Rezept auswählen",view_as_list:"Listenansicht",view_as_grid:"Rasteransicht",recipe_added_success:"Rezept zum Plan hinzugefügt",cancel:"Abbrechen",add:"Hinzufügen",mealplan_deleted_success:"Mahlzeit aus dem Plan entfernt",confirm_delete_title:"Diese Mahlzeit entfernen?",confirm:"Bestätigen",ingredients:"Zutaten",instructions:"Anleitung",times:"Zeiten",prep_time:"Vorbereitung",cooking_time:"Kochen",total_time:"Gesamt",add_note_to_mealplan:"Notiz hinzufügen",note_title:"Titel",note_text:"Notiz (optional)",note_added_success:"Notiz zum Plan hinzugefügt",servings:"Portionen",decrease_servings:"Weniger Portionen",increase_servings:"Mehr Portionen",edit_mealplan:"Eintrag bearbeiten",mealplan_updated_success:"Eintrag aktualisiert",save:"Speichern",add_favorite:"Zu Favoriten hinzufügen",remove_favorite:"Aus Favoriten entfernen",add_to_shopping_list:"Zur Einkaufsliste hinzufügen",select_shopping_list:"Einkaufsliste auswählen",shopping_list_quantity:"Mengenmultiplikator",recipe_added_to_shopping_list:"Rezept zur Einkaufsliste hinzugefügt",no_shopping_lists:"Keine Einkaufslisten verfügbar",no_ingredients:"Keine Zutaten verfügbar",next:"Weiter",back:"Zurück",select_all:"Alle auswählen",import_recipe:"Rezept importieren",import_url:"Rezept-URL",import_include_tags:"Tags einschließen",import:"Importieren",recipe_imported_success:"Rezept importiert",open_in_mealie:"In Mealie öffnen"},We={no_url:"Konfigurieren Sie die Mealie-URL, um Bilder und Rezeptlinks zu aktivieren."},Ke={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fehler beim Laden der Konfiguration",error_loading:"Fehler beim Laden der Daten",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fehler beim Löschen der Mahlzeit",error_updating_mealplan:"Fehler beim Aktualisieren des Speiseplans"},Ge={integration:"Mealie integration",entry_types:"Anzuzeigende Mahlzeittypen",loading:"Wird geladen...",mealie_url:"Mealie URL",image_url:"Bild-URL oder lokaler Pfad (optional)",number_of_recipes:"Anzahl der anzuzeigenden Rezepte",settings_recipes_card:"Anzeigekonfiguration",settings_infos:"Rezeptinfos",settings_image:"Bild",settings_times:"Zeiten",settings_title_layout:"Layout",show_image:"Bild anzeigen",show_rating:"Bewertung anzeigen",show_favorite:"Favorit anzeigen",show_servings:"Portionen & Menge",show_description:"Beschreibung anzeigen",show_prep_time:"Vorbereitungszeit anzeigen",show_cooking_time:"Kochzeit anzeigen",show_total_time:"Gesamtzeit anzeigen",layout_mode:"Anordnung",days_columns:"Spalten für Tage",recipes_columns:"Spalten für Mahlzeiten",layout_vertical:"Vertikal",layout_horizontal:"Mahlzeiten nebeneinander",layout_side_by_side:"Tage nebeneinander",layout_days_and_meals_side_by_side:"Tage und Mahlzeiten nebeneinander",days_range:"Angezeigte Tage",days_range_helper:"Eine Zahl (z. B. 3 = in 3 Tagen) oder ein Bereich (z. B. 0-6 = heute und die 6 folgenden Tage)",show_search:"Suchleiste",show_favorites_only:"Nur Favoriten",show_import_button:"Import-Schaltfläche anzeigen",show_random_button:"Zufalls-Mahlzeit-Schaltfläche anzeigen",settings_meal_actions:"Mahlzeiten-Aktionen",settings_recipe_actions:"Aktionen für Rezepte",show_add_recipe_button:"Rezept-Button anzeigen",show_note_button:"Notiz-Button anzeigen",settings_recipe_view:"Öffnen von Rezepten",recipe_view:"Rezept öffnen in",recipe_view_dialog:"Dialog in der Karte",recipe_view_webview:"Eingebettete Mealie-Ansicht",recipe_view_browser:"Neuer Browser-Tab",recipe_tap_action:"Tippen auf ein Rezept",recipe_hold_action:"Langes Drücken auf ein Rezept",recipe_double_tap_action:"Doppeltippen auf ein Rezept",recipe_action_none:"Nichts",settings_recipe_menu:"Menü ⋮",show_recipe_menu:"Schaltfläche für das Menü ⋮ anzeigen",mealie_group_slug:"Mealie-Gruppe (Slug)",settings_language:"Sprache",language:"Sprache",language_auto:"Automatisch (Home-Assistant-Sprache)",language_helper:"Überschreibt die Home-Assistant-Sprache für diese Karte, z. B. für eine regionale Variante wie fr-CA."},Ze={hour:"Stunde",hours:"Stunden",minute:"Minute",minutes:"Minuten",hour_short:"Std",minute_short:"Min"},Qe={cards:Be,common:Fe,dialog:qe,info:We,error:Ke,editor:Ge,time:Ze},Je=Object.freeze({__proto__:null,cards:Be,common:Fe,default:Qe,dialog:qe,editor:Ge,error:Ke,info:We,time:Ze}),Ye={name_mealplan:"Mealie Meal Plan",description_mealplan:"Display today's meals",name_recipes:"Mealie Recipes",description_recipes:"Display your recipes from Mealie instance",view_recipe:"View recipe",day_actions:"Day actions",recipe_actions:"Recipe actions",delete_mealplan:"Delete from plan",edit_mealplan:"Edit meal plan entry",random_mealplan:"Random meal"},Xe={no_recipe:"No recipe",no_mealplan:"No meal",today:"Today",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",side:"Side",dessert:"Dessert",drink:"Drink",snack:"Snack",search_placeholder:"Search recipes..."},ei={add_to_mealplan:"Add to meal plan",add_recipe_to_mealplan:"Add to meal plan",select_date:"Select a date",select_meal_type:"Meal type",select_recipe:"Select a recipe",view_as_list:"List view",view_as_grid:"Grid view",recipe_added_success:"Recipe added to plan",cancel:"Cancel",add:"Add",mealplan_deleted_success:"Meal removed from plan",confirm_delete_title:"Remove this meal?",confirm:"Confirm",ingredients:"Ingredients",instructions:"Instructions",times:"Times",prep_time:"Preparation",cooking_time:"Cooking",total_time:"Total",add_note_to_mealplan:"Add a note",note_title:"Title",note_text:"Note (optional)",note_added_success:"Note added to plan",servings:"Servings",decrease_servings:"Decrease servings",increase_servings:"Increase servings",edit_mealplan:"Edit meal plan entry",mealplan_updated_success:"Meal plan entry updated",save:"Save",add_favorite:"Add to favorites",remove_favorite:"Remove from favorites",add_to_shopping_list:"Add to shopping list",select_shopping_list:"Select shopping list",shopping_list_quantity:"Quantity multiplier",recipe_added_to_shopping_list:"Recipe added to shopping list",no_shopping_lists:"No shopping lists available",no_ingredients:"No ingredients available",next:"Next",back:"Back",select_all:"Select all",import_recipe:"Import recipe",import_url:"Recipe URL",import_include_tags:"Include tags",import:"Import",recipe_imported_success:"Recipe imported",open_in_mealie:"Open in Mealie"},ii={no_url:"Configure Mealie URL to enable images and recipe links."},ti={no_integration:"Select a Mealie integration in the card settings",missing_config:"Error loading configuration",error_loading:"Error loading data",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Error deleting meal",error_updating_mealplan:"Error updating meal plan"},ai={integration:"Mealie integration",entry_types:"Meal types to display",loading:"Loading...",mealie_url:"Mealie URL",image_url:"Image URL or local path (optional)",number_of_recipes:"Number of recipes to display",settings_recipes_card:"Display configuration",settings_infos:"Recipe details",settings_image:"Image",settings_times:"Times",settings_title_layout:"Layout",show_image:"Show image",show_rating:"Show rating",show_favorite:"Favorite recipe",show_servings:"Serving & Quantity",show_description:"Show description",show_prep_time:"Show preparation time",show_cooking_time:"Show cooking time",show_total_time:"Show total time",layout_mode:"Layout",days_columns:"Day columns",recipes_columns:"Meal columns",layout_vertical:"Vertical",layout_horizontal:"Meals side by side",layout_side_by_side:"Days side by side",layout_days_and_meals_side_by_side:"Days and meals side by side",days_range:"Days shown",days_range_helper:"A number (e.g. 3 = 3 days from now) or a range (e.g. 0-6 = today and the next 6 days)",show_search:"Search bar",show_favorites_only:"Favorites only",show_import_button:"Show import button",show_random_button:"Show random meal button",settings_meal_actions:"Meal actions",settings_recipe_actions:"Recipe actions",show_add_recipe_button:"Show add recipe button",show_note_button:"Show add note button",settings_recipe_view:"Opening recipes",recipe_view:"Open the recipe in",recipe_view_dialog:"Dialog inside the card",recipe_view_webview:"Embedded Mealie view",recipe_view_browser:"New browser tab",recipe_tap_action:"Tap on a recipe",recipe_hold_action:"Long press on a recipe",recipe_double_tap_action:"Double tap on a recipe",recipe_action_none:"Nothing",settings_recipe_menu:"⋮ menu",show_recipe_menu:"Show the ⋮ menu button",mealie_group_slug:"Mealie group (slug)",settings_language:"Language",language:"Language",language_auto:"Automatic (Home Assistant language)",language_helper:"Overrides the Home Assistant language for this card, e.g. to use a regional variant such as fr-CA."},si={hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},ri={cards:Ye,common:Xe,dialog:ei,info:ii,error:ti,editor:ai,time:si},ni=Object.freeze({__proto__:null,cards:Ye,common:Xe,default:ri,dialog:ei,editor:ai,error:ti,info:ii,time:si}),oi={name_mealplan:"Plan de Comidas Mealie",description_mealplan:"Mostrar las comidas del día",name_recipes:"Recetas Mealie",description_recipes:"Mostrar tus recetas desde la instancia Mealie",view_recipe:"Ver receta",day_actions:"Acciones del día",recipe_actions:"Acciones de la receta",delete_mealplan:"Eliminar del plan",edit_mealplan:"Editar entrada del plan",random_mealplan:"Comida aleatoria"},li={no_recipe:"Ninguna receta",no_mealplan:"Ninguna comida",today:"Hoy",breakfast:"Desayuno",lunch:"Almuerzo",dinner:"Cena",side:"Acompañamiento",dessert:"Postre",drink:"Bebida",snack:"Merienda",search_placeholder:"Buscar recetas..."},di={add_to_mealplan:"Añadir al plan de comidas",add_recipe_to_mealplan:"Añadir al plan de comidas",select_date:"Seleccionar una fecha",select_meal_type:"Tipo de comida",select_recipe:"Seleccionar una receta",view_as_list:"Vista de lista",view_as_grid:"Vista de cuadrícula",recipe_added_success:"Receta añadida al plan",cancel:"Cancelar",add:"Añadir",mealplan_deleted_success:"Comida eliminada del plan",confirm_delete_title:"¿Eliminar esta comida?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instrucciones",times:"Tiempos",prep_time:"Preparación",cooking_time:"Cocción",total_time:"Total",add_note_to_mealplan:"Añadir una nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota añadida al plan",servings:"Porciones",decrease_servings:"Reducir porciones",increase_servings:"Aumentar porciones",edit_mealplan:"Editar entrada del plan",mealplan_updated_success:"Entrada del plan actualizada",save:"Guardar",add_favorite:"Añadir a favoritos",remove_favorite:"Eliminar de favoritos",add_to_shopping_list:"Añadir a la lista de la compra",select_shopping_list:"Seleccionar lista de la compra",shopping_list_quantity:"Multiplicador de cantidad",recipe_added_to_shopping_list:"Receta añadida a la lista de la compra",no_shopping_lists:"No hay listas de la compra disponibles",no_ingredients:"No hay ingredientes disponibles",next:"Siguiente",back:"Atrás",select_all:"Seleccionar todo",import_recipe:"Importar receta",import_url:"URL de la receta",import_include_tags:"Incluir etiquetas",import:"Importar",recipe_imported_success:"Receta importada",open_in_mealie:"Abrir en Mealie"},ci={no_url:"Configure la URL de Mealie para activar las imágenes y los enlaces a las recetas."},pi={no_integration:"Select a Mealie integration in the card settings",missing_config:"Error al cargar la configuración",error_loading:"Error al cargar datos",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Error al eliminar la comida",error_updating_mealplan:"Error al actualizar el plan de comidas"},_i={integration:"Mealie integration",entry_types:"Tipos de comida a mostrar",loading:"Cargando...",mealie_url:"URL de Mealie",image_url:"URL o ruta local de las imágenes (opcional)",number_of_recipes:"Número de recetas a mostrar",settings_recipes_card:"Configuración de visualización",settings_infos:"Información",settings_image:"Imagen",settings_times:"Tiempos",settings_title_layout:"Diseño",show_image:"Mostrar imagen",show_rating:"Mostrar valoración",show_favorite:"Mostrar favorito",show_servings:"Porciones y Cantidad",show_description:"Mostrar descripción",show_prep_time:"Mostrar tiempo de preparación",show_cooking_time:"Mostrar tiempo de cocción",show_total_time:"Mostrar tiempo total",layout_mode:"Disposición",days_columns:"Columnas de días",recipes_columns:"Columnas de comidas",layout_vertical:"Vertical",layout_horizontal:"Comidas en paralelo",layout_side_by_side:"Días en paralelo",layout_days_and_meals_side_by_side:"Días y comidas en paralelo",days_range:"Días mostrados",days_range_helper:"Un número (p. ej. 3 = dentro de 3 días) o un intervalo (p. ej. 0-6 = hoy y los 6 días siguientes)",show_search:"Barra de búsqueda",show_favorites_only:"Solo favoritos",show_import_button:"Mostrar botón de importación",show_random_button:"Mostrar botón de comida aleatoria",settings_meal_actions:"Acciones de comidas",settings_recipe_actions:"Acciones sobre las recetas",show_add_recipe_button:"Mostrar botón Añadir receta",show_note_button:"Mostrar botón Añadir nota",settings_recipe_view:"Apertura de recetas",recipe_view:"Abrir la receta en",recipe_view_dialog:"Diálogo dentro de la tarjeta",recipe_view_webview:"Vista Mealie integrada",recipe_view_browser:"Nueva pestaña del navegador",recipe_tap_action:"Toque en una receta",recipe_hold_action:"Pulsación larga en una receta",recipe_double_tap_action:"Doble toque en una receta",recipe_action_none:"Nada",settings_recipe_menu:"Menú ⋮",show_recipe_menu:"Mostrar el botón del menú ⋮",mealie_group_slug:"Grupo de Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma de Home Assistant)",language_helper:"Sustituye el idioma de Home Assistant para esta tarjeta, por ejemplo para usar una variante regional como fr-CA."},hi={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},ui={cards:oi,common:li,dialog:di,info:ci,error:pi,editor:_i,time:hi},gi=Object.freeze({__proto__:null,cards:oi,common:li,default:ui,dialog:di,editor:_i,error:pi,info:ci,time:hi}),mi={lunch:"Dîner",dinner:"Souper"},fi={common:mi},vi=Object.freeze({__proto__:null,common:mi,default:fi}),yi={breakfast:"Déjeuner",lunch:"Dîner",dinner:"Souper"},bi={add_to_shopping_list:"Ajouter à la liste d'épicerie",select_shopping_list:"Sélectionner une liste d'épicerie",recipe_added_to_shopping_list:"Recette ajoutée à la liste d'épicerie",no_shopping_lists:"Aucune liste d'épicerie disponible"},wi={common:yi,dialog:bi},$i=Object.freeze({__proto__:null,common:yi,default:wi,dialog:bi}),zi={name_mealplan:"Repas Mealie",description_mealplan:"Afficher les repas du jour",name_recipes:"Recettes Mealie",description_recipes:"Afficher vos recettes depuis l'instance Mealie",view_recipe:"Voir la recette",day_actions:"Actions du jour",recipe_actions:"Actions de la recette",delete_mealplan:"Supprimer du planning",edit_mealplan:"Modifier l'entrée du planning",random_mealplan:"Repas aléatoire"},ki={no_recipe:"Aucune recette",no_mealplan:"Aucun repas",today:"Aujourd'hui",breakfast:"Petit-déjeuner",lunch:"Déjeuner",dinner:"Dîner",side:"Accompagnement",dessert:"Dessert",drink:"Boisson",snack:"Collation",search_placeholder:"Rechercher une recette..."},xi={add_to_mealplan:"Ajouter la recette au planning",add_recipe_to_mealplan:"Ajouter au planning",select_date:"Sélectionner une date",select_meal_type:"Type de repas",select_recipe:"Sélectionner une recette",view_as_list:"Vue liste",view_as_grid:"Vue grille",recipe_added_success:"Recette ajoutée au planning",cancel:"Annuler",add:"Ajouter",mealplan_deleted_success:"Repas supprimé du planning",confirm_delete_title:"Supprimer ce repas ?",confirm:"Confirmer",ingredients:"Ingrédients",instructions:"Instructions",times:"Temps",prep_time:"Préparation",cooking_time:"Cuisson",total_time:"Total",add_note_to_mealplan:"Ajouter une note",note_title:"Titre",note_text:"Note (facultatif)",note_added_success:"Note ajoutée au planning",servings:"Portions",decrease_servings:"Diminuer les portions",increase_servings:"Augmenter les portions",edit_mealplan:"Modifier l'entrée du planning",mealplan_updated_success:"Entrée du planning mise à jour",save:"Enregistrer",add_favorite:"Ajouter aux favoris",remove_favorite:"Retirer des favoris",add_to_shopping_list:"Ajouter à la liste de courses",select_shopping_list:"Sélectionner une liste de courses",shopping_list_quantity:"Multiplicateur de quantité",recipe_added_to_shopping_list:"Recette ajoutée à la liste de courses",no_shopping_lists:"Aucune liste de courses disponible",no_ingredients:"Aucun ingrédient disponible",next:"Suivant",back:"Retour",select_all:"Tout sélectionner",import_recipe:"Importer une recette",import_url:"URL de la recette",import_include_tags:"Inclure les tags",import:"Importer",recipe_imported_success:"Recette importée",open_in_mealie:"Ouvrir dans Mealie"},Ai={no_url:"Configurez l'URL Mealie pour activer les images et les liens vers les recettes."},Mi={no_integration:"Sélectionnez une intégration Mealie",missing_config:"Erreur de chargement de la configuration",error_loading:"Erreur de chargement des données",error_adding_recipe:"Erreur lors de l'ajout de la recette",error_deleting_mealplan:"Erreur lors de la suppression du repas",error_updating_mealplan:"Erreur lors de la mise à jour du repas"},Ri={integration:"Intégration Mealie",entry_types:"Types de repas à afficher",loading:"Chargement...",mealie_url:"URL Mealie",image_url:"URL ou chemin local des images (facultatif)",number_of_recipes:"Nombre de recettes à afficher",settings_recipes_card:"Configuration de l'affichage",settings_infos:"Informations",settings_image:"Image",settings_times:"Temps",settings_title_layout:"Disposition",show_image:"Image",show_rating:"Note",show_favorite:"Ajouter au favoris",show_servings:"Portion & Quantité",show_description:"Description",show_prep_time:"Temps de préparation",show_cooking_time:"Temps de cuisson",show_total_time:"Temps total",layout_mode:"Disposition",days_columns:"Colonnes de jours",recipes_columns:"Colonnes de repas",layout_vertical:"Vertical",layout_horizontal:"Repas côte à côte",layout_side_by_side:"Jours côte à côte",layout_days_and_meals_side_by_side:"Jours et repas côte à côte",days_range:"Jours affichés",days_range_helper:"Un nombre (ex. 3 = J+3) ou une plage (ex. 0-6 = aujourd'hui et les 6 jours suivants)",show_search:"Barre de recherche",show_favorites_only:"Favoris uniquement",show_import_button:"Bouton d'import de recette",show_random_button:"Afficher le bouton repas aléatoire",settings_meal_actions:"Action sur les repas",settings_recipe_actions:"Actions sur les recettes",show_add_recipe_button:"Afficher le bouton Ajouter une recette",show_note_button:"Afficher le bouton Ajouter une note",settings_recipe_view:"Ouverture des recettes",recipe_view:"Ouvrir la recette dans",recipe_view_dialog:"Dialogue dans la carte",recipe_view_webview:"Vue Mealie intégrée",recipe_view_browser:"Nouvel onglet du navigateur",recipe_tap_action:"Appui sur une recette",recipe_hold_action:"Appui long sur une recette",recipe_double_tap_action:"Double appui sur une recette",recipe_action_none:"Rien",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Afficher le bouton du menu ⋮",mealie_group_slug:"Groupe Mealie (slug)",settings_language:"Langue",language:"Langue",language_auto:"Automatique (langue de Home Assistant)",language_helper:"Remplace la langue de Home Assistant pour cette carte, par exemple pour utiliser une variante régionale comme fr-CA."},Ii={hour:"heure",hours:"heures",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},Ei={cards:zi,common:ki,dialog:xi,info:Ai,error:Mi,editor:Ri,time:Ii},Si={name_mealplan:"Piano Pasti Mealie",description_mealplan:"Visualizza i pasti del giorno",name_recipes:"Ricette Mealie",description_recipes:"Visualizza le tue ricette dall'istanza Mealie",view_recipe:"Vedi ricetta",day_actions:"Azioni del giorno",recipe_actions:"Azioni della ricetta",delete_mealplan:"Elimina dal piano",edit_mealplan:"Modifica voce del piano",random_mealplan:"Pasto casuale"},Ti={no_recipe:"Nessuna ricetta",no_mealplan:"Nessun pasto",today:"Oggi",breakfast:"Colazione",lunch:"Pranzo",dinner:"Cena",side:"Contorno",dessert:"Dolce",drink:"Bevanda",snack:"Spuntino",search_placeholder:"Cerca ricette..."},Di={add_to_mealplan:"Aggiungi al piano pasti",add_recipe_to_mealplan:"Aggiungi al piano pasti",select_date:"Seleziona una data",select_meal_type:"Tipo di pasto",select_recipe:"Seleziona una ricetta",view_as_list:"Vista elenco",view_as_grid:"Vista griglia",recipe_added_success:"Ricetta aggiunta al piano",cancel:"Annulla",add:"Aggiungi",mealplan_deleted_success:"Pasto rimosso dal piano",confirm_delete_title:"Rimuovere questo pasto?",confirm:"Conferma",ingredients:"Ingredienti",instructions:"Istruzioni",times:"Tempi",prep_time:"Preparazione",cooking_time:"Cottura",total_time:"Totale",add_note_to_mealplan:"Aggiungi una nota",note_title:"Titolo",note_text:"Nota (opzionale)",note_added_success:"Nota aggiunta al piano",servings:"Porzioni",decrease_servings:"Riduci porzioni",increase_servings:"Aumenta porzioni",edit_mealplan:"Modifica voce del piano",mealplan_updated_success:"Voce del piano aggiornata",save:"Salva",add_favorite:"Aggiungi ai preferiti",remove_favorite:"Rimuovi dai preferiti",add_to_shopping_list:"Aggiungi alla lista della spesa",select_shopping_list:"Seleziona lista della spesa",shopping_list_quantity:"Moltiplicatore di quantità",recipe_added_to_shopping_list:"Ricetta aggiunta alla lista della spesa",no_shopping_lists:"Nessuna lista della spesa disponibile",no_ingredients:"Nessun ingrediente disponibile",next:"Avanti",back:"Indietro",select_all:"Seleziona tutto",import_recipe:"Importa ricetta",import_url:"URL ricetta",import_include_tags:"Includi tag",import:"Importa",recipe_imported_success:"Ricetta importata",open_in_mealie:"Apri in Mealie"},Ci={no_url:"Configura l'URL Mealie per attivare le immagini e i link alle ricette."},ji={no_integration:"Select a Mealie integration in the card settings",missing_config:"Errore di caricamento della configurazione",error_loading:"Errore di caricamento dei dati",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Errore durante l'eliminazione del pasto",error_updating_mealplan:"Errore durante l'aggiornamento del piano pasti"},Li={integration:"Mealie integration",entry_types:"Tipi di pasto da visualizzare",loading:"Caricamento...",mealie_url:"URL Mealie",image_url:"URL o percorso locale delle immagini (facoltativo)",number_of_recipes:"Numero di ricette da visualizzare",settings_recipes_card:"Configurazione della visualizzazione",settings_infos:"Informazioni",settings_image:"Immagine",settings_times:"Tempi",settings_title_layout:"Layout",show_image:"Mostra immagine",show_rating:"Mostra valutazione",show_favorite:"Mostra preferito",show_servings:"Porzioni e Quantità",show_description:"Mostra descrizione",show_prep_time:"Mostra tempo di preparazione",show_cooking_time:"Mostra tempo di cottura",show_total_time:"Mostra tempo totale",layout_mode:"Disposizione",days_columns:"Colonne dei giorni",recipes_columns:"Colonne dei pasti",layout_vertical:"Verticale",layout_horizontal:"Pasti affiancati",layout_side_by_side:"Giorni affiancati",layout_days_and_meals_side_by_side:"Giorni e pasti affiancati",days_range:"Giorni mostrati",days_range_helper:"Un numero (es. 3 = fra 3 giorni) o un intervallo (es. 0-6 = oggi e i 6 giorni successivi)",show_search:"Barra di ricerca",show_favorites_only:"Solo preferiti",show_import_button:"Mostra pulsante di importazione",show_random_button:"Mostra pulsante pasto casuale",settings_meal_actions:"Azioni sui pasti",settings_recipe_actions:"Azioni sulle ricette",show_add_recipe_button:"Mostra pulsante Aggiungi ricetta",show_note_button:"Mostra pulsante Aggiungi nota",settings_recipe_view:"Apertura delle ricette",recipe_view:"Apri la ricetta in",recipe_view_dialog:"Finestra nella scheda",recipe_view_webview:"Vista Mealie integrata",recipe_view_browser:"Nuova scheda del browser",recipe_tap_action:"Tocco su una ricetta",recipe_hold_action:"Pressione prolungata su una ricetta",recipe_double_tap_action:"Doppio tocco su una ricetta",recipe_action_none:"Niente",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostra il pulsante del menu ⋮",mealie_group_slug:"Gruppo Mealie (slug)",settings_language:"Lingua",language:"Lingua",language_auto:"Automatica (lingua di Home Assistant)",language_helper:"Sostituisce la lingua di Home Assistant per questa scheda, ad esempio per usare una variante regionale come fr-CA."},Pi={hour:"ora",hours:"ore",minute:"minuto",minutes:"minuti",hour_short:"h",minute_short:"min"},Oi={cards:Si,common:Ti,dialog:Di,info:Ci,error:ji,editor:Li,time:Pi},Ni={name_mealplan:"Mealie Maaltijdplan",description_mealplan:"Toon de maaltijden van vandaag",name_recipes:"Mealie Recepten",description_recipes:"Toon je recepten van de Mealie-instantie",view_recipe:"Recept bekijken",day_actions:"Acties voor de dag",recipe_actions:"Receptacties",delete_mealplan:"Verwijder uit plan",edit_mealplan:"Maaltijdplan bewerken",random_mealplan:"Willekeurige maaltijd"},Ui={no_recipe:"Geen recept",no_mealplan:"Geen maaltijd",today:"Vandaag",breakfast:"Ontbijt",lunch:"Lunch",dinner:"Diner",side:"Bijgerecht",dessert:"Dessert",drink:"Drank",snack:"Snack",search_placeholder:"Recepten zoeken..."},Vi={add_to_mealplan:"Toevoegen aan maaltijdplan",add_recipe_to_mealplan:"toevoegen aan maaltijdplan",select_date:"Selecteer een datum",select_meal_type:"Maaltijdtype",select_recipe:"Selecteer een recept",view_as_list:"Lijstweergave",view_as_grid:"Rasterweergave",recipe_added_success:"Recept toegevoegd aan plan",cancel:"Annuleren",add:"Toevoegen",mealplan_deleted_success:"Maaltijd verwijderd uit plan",confirm_delete_title:"Deze maaltijd verwijderen?",confirm:"Bevestigen",ingredients:"Ingrediënten",instructions:"Instructies",times:"Tijden",prep_time:"Voorbereiding",cooking_time:"Koken",total_time:"Totaal",add_note_to_mealplan:"Notitie toevoegen",note_title:"Titel",note_text:"Notitie (optioneel)",note_added_success:"Notitie toegevoegd aan plan",servings:"Porties",decrease_servings:"Minder porties",increase_servings:"Meer porties",edit_mealplan:"Maaltijdplan bewerken",mealplan_updated_success:"Maaltijdplan bijgewerkt",save:"Opslaan",add_favorite:"Toevoegen aan favorieten",remove_favorite:"Verwijderen uit favorieten",add_to_shopping_list:"Toevoegen aan boodschappenlijst",select_shopping_list:"Selecteer boodschappenlijst",shopping_list_quantity:"Hoeveelheidsmultiplier",recipe_added_to_shopping_list:"Recept toegevoegd aan boodschappenlijst",no_shopping_lists:"Geen boodschappenlijsten beschikbaar",no_ingredients:"Geen ingrediënten beschikbaar",next:"Volgende",back:"Terug",select_all:"Alles selecteren",import_recipe:"Recept importeren",import_url:"Recept-URL",import_include_tags:"Tags opnemen",import:"Importeren",recipe_imported_success:"Recept geïmporteerd",open_in_mealie:"Openen in Mealie"},Hi={no_url:"Configureer Mealie URL om afbeeldingen en receptlinks in te schakelen."},Bi={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fout bij laden van configuratie",error_loading:"Fout bij laden van gegevens",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fout bij verwijderen van maaltijd",error_updating_mealplan:"Fout bij bijwerken van maaltijdplan"},Fi={integration:"Mealie integration",entry_types:"Maaltijdtypen om weer te geven",loading:"Laden...",mealie_url:"Mealie URL",image_url:"Afbeeldings-URL of lokaal pad (optioneel)",number_of_recipes:"Aantal weer te geven recepten",settings_recipes_card:"Weergaveconfiguratie",settings_infos:"Receptinformatie",settings_image:"Afbeelding",settings_times:"Tijden",settings_title_layout:"Indeling",show_image:"Afbeelding weergeven",show_rating:"Beoordeling weergeven",show_favorite:"Favoriet tonen",show_servings:"Porties & Hoeveelheid",show_description:"Beschrijving weergeven",show_prep_time:"Voorbereidingstijd weergeven",show_cooking_time:"Kooktijd weergeven",show_total_time:"Totale tijd weergeven",layout_mode:"Indeling",days_columns:"Kolommen met dagen",recipes_columns:"Kolommen met maaltijden",layout_vertical:"Verticaal",layout_horizontal:"Maaltijden naast elkaar",layout_side_by_side:"Dagen naast elkaar",layout_days_and_meals_side_by_side:"Dagen en maaltijden naast elkaar",days_range:"Getoonde dagen",days_range_helper:"Een getal (bijv. 3 = over 3 dagen) of een bereik (bijv. 0-6 = vandaag en de 6 volgende dagen)",show_search:"Zoekbalk",show_favorites_only:"Alleen favorieten",show_import_button:"Importknop weergeven",show_random_button:"Willekeurige maaltijdknop weergeven",settings_meal_actions:"Maaltijdacties",settings_recipe_actions:"Acties op recepten",show_add_recipe_button:"Knop Recept toevoegen tonen",show_note_button:"Knop Notitie toevoegen tonen",settings_recipe_view:"Recepten openen",recipe_view:"Recept openen in",recipe_view_dialog:"Dialoog in de kaart",recipe_view_webview:"Ingebouwde Mealie-weergave",recipe_view_browser:"Nieuw browsertabblad",recipe_tap_action:"Tikken op een recept",recipe_hold_action:"Lang drukken op een recept",recipe_double_tap_action:"Dubbeltikken op een recept",recipe_action_none:"Niets",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Knop voor het menu ⋮ tonen",mealie_group_slug:"Mealie-groep (slug)",settings_language:"Taal",language:"Taal",language_auto:"Automatisch (taal van Home Assistant)",language_helper:"Overschrijft de taal van Home Assistant voor deze kaart, bijvoorbeeld om een regionale variant zoals fr-CA te gebruiken."},qi={hour:"uur",hours:"uur",minute:"minuut",minutes:"minuten",hour_short:"u",minute_short:"min"},Wi={cards:Ni,common:Ui,dialog:Vi,info:Hi,error:Bi,editor:Fi,time:qi},Ki={name_mealplan:"Plan Posiłków Mealie",description_mealplan:"Wyświetl dzisiejsze posiłki",name_recipes:"Przepisy Mealie",description_recipes:"Wyświetl swoje przepisy z instancji Mealie",view_recipe:"Wyświetl przepis",day_actions:"Akcje dnia",recipe_actions:"Akcje przepisu",delete_mealplan:"Usuń z planu",edit_mealplan:"Edytuj wpis planu",random_mealplan:"Losowy posiłek"},Gi={no_recipe:"Brak przepisu",no_mealplan:"Brak posiłku",today:"Dzisiaj",breakfast:"Śniadanie",lunch:"Obiad",dinner:"Kolacja",side:"Dodatek",dessert:"Deser",drink:"Napój",snack:"Przekąska",search_placeholder:"Szukaj przepisów..."},Zi={add_to_mealplan:"Dodaj do planu posiłków",add_recipe_to_mealplan:"Dodaj do planu posiłków",select_date:"Wybierz datę",select_meal_type:"Typ posiłku",select_recipe:"Wybierz przepis",view_as_list:"Widok listy",view_as_grid:"Widok siatki",recipe_added_success:"Przepis dodany do planu",cancel:"Anuluj",add:"Dodaj",mealplan_deleted_success:"Posiłek usunięty z planu",confirm_delete_title:"Usunąć ten posiłek?",confirm:"Potwierdź",ingredients:"Składniki",instructions:"Instrukcje",times:"Czasy",prep_time:"Przygotowanie",cooking_time:"Gotowanie",total_time:"Łącznie",add_note_to_mealplan:"Dodaj notatkę",note_title:"Tytuł",note_text:"Notatka (opcjonalna)",note_added_success:"Notatka dodana do planu",servings:"Porcje",decrease_servings:"Zmniejsz porcje",increase_servings:"Zwiększ porcje",edit_mealplan:"Edytuj wpis planu",mealplan_updated_success:"Wpis planu zaktualizowany",save:"Zapisz",add_favorite:"Dodaj do ulubionych",remove_favorite:"Usuń z ulubionych",add_to_shopping_list:"Dodaj do listy zakupów",select_shopping_list:"Wybierz listę zakupów",shopping_list_quantity:"Mnożnik ilości",recipe_added_to_shopping_list:"Przepis dodany do listy zakupów",no_shopping_lists:"Brak dostępnych list zakupów",no_ingredients:"Brak dostępnych składników",next:"Dalej",back:"Wstecz",select_all:"Zaznacz wszystko",import_recipe:"Importuj przepis",import_url:"URL przepisu",import_include_tags:"Uwzględnij tagi",import:"Importuj",recipe_imported_success:"Przepis zaimportowany",open_in_mealie:"Otwórz w Mealie"},Qi={no_url:"Skonfiguruj adres URL Mealie, aby włączyć obrazy i linki do przepisów."},Ji={no_integration:"Select a Mealie integration in the card settings",missing_config:"Błąd ładowania konfiguracji",error_loading:"Błąd ładowania danych",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Błąd podczas usuwania posiłku",error_updating_mealplan:"Błąd podczas aktualizacji planu posiłków"},Yi={integration:"Mealie integration",entry_types:"Typy posiłków do wyświetlenia",loading:"Ładowanie...",mealie_url:"URL Mealie",image_url:"URL lub ścieżka lokalna obrazów (opcjonalnie)",number_of_recipes:"Liczba przepisów do wyświetlenia",settings_recipes_card:"Konfiguracja wyświetlania",settings_infos:"Informacje o przepisie",settings_image:"Obraz",settings_times:"Czasy",settings_title_layout:"Układ",show_image:"Pokaż obraz",show_rating:"Pokaż ocenę",show_favorite:"Pokaż ulubione",show_servings:"Porcje i ilość",show_description:"Pokaż opis",show_prep_time:"Pokaż czas przygotowania",show_cooking_time:"Pokaż czas gotowania",show_total_time:"Pokaż całkowity czas",layout_mode:"Układ",days_columns:"Kolumny dni",recipes_columns:"Kolumny posiłków",layout_vertical:"Pionowo",layout_horizontal:"Posiłki obok siebie",layout_side_by_side:"Dni obok siebie",layout_days_and_meals_side_by_side:"Dni i posiłki obok siebie",days_range:"Wyświetlane dni",days_range_helper:"Liczba (np. 3 = za 3 dni) lub zakres (np. 0-6 = dziś i 6 kolejnych dni)",show_search:"Pasek wyszukiwania",show_favorites_only:"Tylko ulubione",show_import_button:"Pokaż przycisk importu",show_random_button:"Pokaż przycisk losowego posiłku",settings_meal_actions:"Akcje posiłków",settings_recipe_actions:"Akcje na przepisach",show_add_recipe_button:"Pokaż przycisk Dodaj przepis",show_note_button:"Pokaż przycisk Dodaj notatkę",settings_recipe_view:"Otwieranie przepisów",recipe_view:"Otwórz przepis w",recipe_view_dialog:"Okno w karcie",recipe_view_webview:"Wbudowany widok Mealie",recipe_view_browser:"Nowa karta przeglądarki",recipe_tap_action:"Dotknięcie przepisu",recipe_hold_action:"Długie naciśnięcie przepisu",recipe_double_tap_action:"Dwukrotne dotknięcie przepisu",recipe_action_none:"Nic",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Pokaż przycisk menu ⋮",mealie_group_slug:"Grupa Mealie (slug)",settings_language:"Język",language:"Język",language_auto:"Automatyczny (język Home Assistant)",language_helper:"Zastępuje język Home Assistant dla tej karty, np. aby użyć wariantu regionalnego, takiego jak fr-CA."},Xi={hour:"godzina",hours:"godziny",minute:"minuta",minutes:"minuty",hour_short:"godz",minute_short:"min"},et={cards:Ki,common:Gi,dialog:Zi,info:Qi,error:Ji,editor:Yi,time:Xi},it={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Exibir as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Exibir suas receitas da instância Mealie",view_recipe:"Ver receita",day_actions:"Ações do dia",recipe_actions:"Ações da receita",delete_mealplan:"Remover do plano",edit_mealplan:"Editar entrada do plano",random_mealplan:"Refeição aleatória"},tt={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Café da manhã",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche",search_placeholder:"Pesquisar receitas..."},at={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",select_recipe:"Selecionar uma receita",view_as_list:"Visualização em lista",view_as_grid:"Visualização em grade",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparo",cooking_time:"Cozimento",total_time:"Total",add_note_to_mealplan:"Adicionar uma nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota adicionada ao plano",servings:"Porções",decrease_servings:"Diminuir porções",increase_servings:"Aumentar porções",edit_mealplan:"Editar entrada do plano",mealplan_updated_success:"Entrada do plano atualizada",save:"Salvar",add_favorite:"Adicionar aos favoritos",remove_favorite:"Remover dos favoritos",add_to_shopping_list:"Adicionar à lista de compras",select_shopping_list:"Selecionar lista de compras",shopping_list_quantity:"Multiplicador de quantidade",recipe_added_to_shopping_list:"Receita adicionada à lista de compras",no_shopping_lists:"Nenhuma lista de compras disponível",no_ingredients:"Nenhum ingrediente disponível",next:"Próximo",back:"Voltar",select_all:"Selecionar tudo",import_recipe:"Importar receita",import_url:"URL da receita",import_include_tags:"Incluir tags",import:"Importar",recipe_imported_success:"Receita importada",open_in_mealie:"Abrir no Mealie"},st={no_url:"Configure a URL Mealie para ativar imagens e links para receitas."},rt={no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Erro ao remover refeição",error_updating_mealplan:"Erro ao atualizar plano de refeições"},nt={integration:"Mealie integration",entry_types:"Tipos de refeição para exibir",loading:"Carregando...",mealie_url:"URL do Mealie",image_url:"URL ou caminho local das imagens (opcional)",number_of_recipes:"Número de receitas para exibir",settings_recipes_card:"Configuração de exibição",settings_infos:"Informações da receita",settings_image:"Imagem",settings_times:"Tempos",settings_title_layout:"Layout",show_image:"Exibir imagem",show_rating:"Exibir avaliação",show_favorite:"Mostrar favorito",show_servings:"Porções e Quantidade",show_description:"Exibir descrição",show_prep_time:"Exibir tempo de preparo",show_cooking_time:"Exibir tempo de cozimento",show_total_time:"Exibir tempo total",layout_mode:"Disposição",days_columns:"Colunas de dias",recipes_columns:"Colunas de refeições",layout_vertical:"Vertical",layout_horizontal:"Refeições lado a lado",layout_side_by_side:"Dias lado a lado",layout_days_and_meals_side_by_side:"Dias e refeições lado a lado",days_range:"Dias exibidos",days_range_helper:"Um número (ex.: 3 = daqui a 3 dias) ou um intervalo (ex.: 0-6 = hoje e os 6 dias seguintes)",show_search:"Barra de pesquisa",show_favorites_only:"Apenas favoritos",show_import_button:"Mostrar botão de importação",show_random_button:"Mostrar botão de refeição aleatória",settings_meal_actions:"Ações das refeições",settings_recipe_actions:"Ações nas receitas",show_add_recipe_button:"Mostrar botão Adicionar receita",show_note_button:"Mostrar botão Adicionar nota",settings_recipe_view:"Abertura de receitas",recipe_view:"Abrir a receita em",recipe_view_dialog:"Diálogo no cartão",recipe_view_webview:"Visualização Mealie integrada",recipe_view_browser:"Nova aba do navegador",recipe_tap_action:"Toque em uma receita",recipe_hold_action:"Toque longo em uma receita",recipe_double_tap_action:"Toque duplo em uma receita",recipe_action_none:"Nada",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostrar o botão do menu ⋮",mealie_group_slug:"Grupo do Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma do Home Assistant)",language_helper:"Substitui o idioma do Home Assistant para este cartão, por exemplo para usar uma variante regional como fr-CA."},ot={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},lt={cards:it,common:tt,dialog:at,info:st,error:rt,editor:nt,time:ot},dt={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Mostrar as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Mostrar as suas receitas da instância Mealie",view_recipe:"Ver receita",day_actions:"Ações do dia",recipe_actions:"Ações da receita",delete_mealplan:"Remover do plano",edit_mealplan:"Editar entrada do plano",random_mealplan:"Refeição aleatória"},ct={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Pequeno-almoço",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche",search_placeholder:"Pesquisar receitas..."},pt={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",select_recipe:"Selecionar uma receita",view_as_list:"Vista de lista",view_as_grid:"Vista de grelha",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparação",cooking_time:"Cozimento",total_time:"Total",add_note_to_mealplan:"Adicionar uma nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota adicionada ao plano",servings:"Porções",decrease_servings:"Diminuir porções",increase_servings:"Aumentar porções",edit_mealplan:"Editar entrada do plano",mealplan_updated_success:"Entrada do plano atualizada",save:"Guardar",add_favorite:"Adicionar aos favoritos",remove_favorite:"Remover dos favoritos",add_to_shopping_list:"Adicionar à lista de compras",select_shopping_list:"Selecionar lista de compras",shopping_list_quantity:"Multiplicador de quantidade",recipe_added_to_shopping_list:"Receita adicionada à lista de compras",no_shopping_lists:"Nenhuma lista de compras disponível",no_ingredients:"Nenhum ingrediente disponível",next:"Próximo",back:"Voltar",select_all:"Selecionar tudo",import_recipe:"Importar receita",import_url:"URL da receita",import_include_tags:"Incluir tags",import:"Importar",recipe_imported_success:"Receita importada",open_in_mealie:"Abrir no Mealie"},_t={no_url:"Configure o URL Mealie para ativar imagens e links para receitas."},ht={no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Erro ao remover refeição",error_updating_mealplan:"Erro ao atualizar plano de refeições"},ut={integration:"Mealie integration",entry_types:"Tipos de refeição a exibir",loading:"A carregar...",mealie_url:"URL do Mealie",image_url:"URL ou caminho local das imagens (opcional)",number_of_recipes:"Número de receitas a exibir",settings_recipes_card:"Configuração de exibição",settings_infos:"Informações da receita",settings_image:"Imagem",settings_times:"Tempos",settings_title_layout:"Disposição",show_image:"Mostrar imagem",show_rating:"Mostrar avaliação",show_favorite:"Mostrar favorito",show_servings:"Porções e quantidade",show_description:"Mostrar descrição",show_prep_time:"Mostrar tempo de preparação",show_cooking_time:"Mostrar tempo de cozedura",show_total_time:"Mostrar tempo total",layout_mode:"Disposição",days_columns:"Colunas de dias",recipes_columns:"Colunas de refeições",layout_vertical:"Vertical",layout_horizontal:"Refeições lado a lado",layout_side_by_side:"Dias lado a lado",layout_days_and_meals_side_by_side:"Dias e refeições lado a lado",days_range:"Dias apresentados",days_range_helper:"Um número (ex.: 3 = daqui a 3 dias) ou um intervalo (ex.: 0-6 = hoje e os 6 dias seguintes)",show_search:"Barra de pesquisa",show_favorites_only:"Apenas favoritos",show_import_button:"Mostrar botão de importação",show_random_button:"Mostrar botão de refeição aleatória",settings_meal_actions:"Ações das refeições",settings_recipe_actions:"Ações nas receitas",show_add_recipe_button:"Mostrar botão Adicionar receita",show_note_button:"Mostrar botão Adicionar nota",settings_recipe_view:"Abertura de receitas",recipe_view:"Abrir a receita em",recipe_view_dialog:"Diálogo no cartão",recipe_view_webview:"Vista Mealie integrada",recipe_view_browser:"Novo separador do navegador",recipe_tap_action:"Toque numa receita",recipe_hold_action:"Toque longo numa receita",recipe_double_tap_action:"Toque duplo numa receita",recipe_action_none:"Nada",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostrar o botão do menu ⋮",mealie_group_slug:"Grupo do Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma do Home Assistant)",language_helper:"Substitui o idioma do Home Assistant para este cartão, por exemplo para usar uma variante regional como fr-CA."},gt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},mt={cards:dt,common:ct,dialog:pt,info:_t,error:ht,editor:ut,time:gt},ft={name_mealplan:"Plan de Mese Mealie",description_mealplan:"Afișează mesele zilei",name_recipes:"Rețete Mealie",description_recipes:"Afișează rețetele tale din instanța Mealie",view_recipe:"Vezi rețeta",day_actions:"Acțiunile zilei",recipe_actions:"Acțiuni rețetă",delete_mealplan:"Șterge din plan",edit_mealplan:"Editează intrarea din plan",random_mealplan:"Masă aleatorie"},vt={no_recipe:"Nicio rețetă",no_mealplan:"Nicio masă",today:"Astăzi",breakfast:"Micul dejun",lunch:"Prânz",dinner:"Cină",side:"Garnitură",dessert:"Desert",drink:"Băutură",snack:"Gustare",search_placeholder:"Caută rețete..."},yt={add_to_mealplan:"Adaugă la planul de mese",add_recipe_to_mealplan:"Adaugă la planul de mese",select_date:"Selectează o dată",select_meal_type:"Tipul mesei",select_recipe:"Selectează o rețetă",view_as_list:"Vizualizare listă",view_as_grid:"Vizualizare grilă",recipe_added_success:"Rețetă adăugată la plan",cancel:"Anulează",add:"Adaugă",mealplan_deleted_success:"Masă ștearsă din plan",confirm_delete_title:"Ștergeți această masă?",confirm:"Confirmă",ingredients:"Ingrediente",instructions:"Instrucțiuni",times:"Timpi",prep_time:"Pregătire",cooking_time:"Gătit",total_time:"Total",add_note_to_mealplan:"Adaugă o notă",note_title:"Titlu",note_text:"Notă (opțional)",note_added_success:"Notă adăugată la plan",servings:"Porții",decrease_servings:"Reduce porțiile",increase_servings:"Crește porțiile",edit_mealplan:"Editează intrarea din plan",mealplan_updated_success:"Intrare din plan actualizată",save:"Salvează",add_favorite:"Adaugă la favorite",remove_favorite:"Elimină din favorite",add_to_shopping_list:"Adaugă la lista de cumpărături",select_shopping_list:"Selectează lista de cumpărături",shopping_list_quantity:"Multiplicator de cantitate",recipe_added_to_shopping_list:"Rețetă adăugată la lista de cumpărături",no_shopping_lists:"Nicio listă de cumpărături disponibilă",no_ingredients:"Niciun ingredient disponibil",next:"Înainte",back:"Înapoi",select_all:"Selectează tot",import_recipe:"Importă rețetă",import_url:"URL rețetă",import_include_tags:"Include etichete",import:"Importă",recipe_imported_success:"Rețetă importată",open_in_mealie:"Deschide în Mealie"},bt={no_url:"Configurează URL-ul Mealie pentru a activa imaginile și linkurile către rețete."},wt={no_integration:"Select a Mealie integration in the card settings",missing_config:"Eroare la încărcarea configurației",error_loading:"Eroare la încărcarea datelor",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Eroare la ștergerea mesei",error_updating_mealplan:"Eroare la actualizarea planului de mese"},$t={integration:"Mealie integration",entry_types:"Tipuri de mese de afișat",loading:"Se încarcă...",mealie_url:"URL Mealie",image_url:"URL sau cale locală pentru imagini (opțional)",number_of_recipes:"Număr de rețete de afișat",settings_recipes_card:"Configurare afișare",settings_infos:"Informații rețetă",settings_image:"Imagine",settings_times:"Timpuri",settings_title_layout:"Aspect",show_image:"Afișează imaginea",show_rating:"Afișează evaluarea",show_favorite:"Arată favorit",show_servings:"Porții și Cantitate",show_description:"Afișează descrierea",show_prep_time:"Afișează timpul de preparare",show_cooking_time:"Afișează timpul de gătit",show_total_time:"Afișează timpul total",layout_mode:"Dispunere",days_columns:"Coloane de zile",recipes_columns:"Coloane de mese",layout_vertical:"Vertical",layout_horizontal:"Mese alăturate",layout_side_by_side:"Zile alăturate",layout_days_and_meals_side_by_side:"Zile și mese alăturate",days_range:"Zile afișate",days_range_helper:"Un număr (ex. 3 = peste 3 zile) sau un interval (ex. 0-6 = azi și următoarele 6 zile)",show_search:"Bara de căutare",show_favorites_only:"Doar favorite",show_import_button:"Afișează butonul de import",show_random_button:"Afișează butonul de masă aleatorie",settings_meal_actions:"Acțiuni pentru mese",settings_recipe_actions:"Acțiuni asupra rețetelor",show_add_recipe_button:"Afișează butonul Adaugă rețetă",show_note_button:"Afișează butonul Adaugă notă",settings_recipe_view:"Deschiderea rețetelor",recipe_view:"Deschide rețeta în",recipe_view_dialog:"Dialog în card",recipe_view_webview:"Vizualizare Mealie integrată",recipe_view_browser:"Filă nouă de browser",recipe_tap_action:"Atingere pe o rețetă",recipe_hold_action:"Apăsare lungă pe o rețetă",recipe_double_tap_action:"Atingere dublă pe o rețetă",recipe_action_none:"Nimic",settings_recipe_menu:"Meniu ⋮",show_recipe_menu:"Afișează butonul meniului ⋮",mealie_group_slug:"Grup Mealie (slug)",settings_language:"Limbă",language:"Limbă",language_auto:"Automat (limba Home Assistant)",language_helper:"Înlocuiește limba Home Assistant pentru acest card, de exemplu pentru a folosi o variantă regională precum fr-CA."},zt={hour:"oră",hours:"ore",minute:"minut",minutes:"minute",hour_short:"h",minute_short:"min"},kt={cards:ft,common:vt,dialog:yt,info:bt,error:wt,editor:$t,time:zt},xt={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Visa dagens måltider",name_recipes:"Mealie Recept",description_recipes:"Visa dina recept från Mealie-instansen",view_recipe:"Visa recept",day_actions:"Dagens åtgärder",recipe_actions:"Receptåtgärder",delete_mealplan:"Ta bort från planen",edit_mealplan:"Redigera måltidsplanering",random_mealplan:"Slumpmässig måltid"},At={no_recipe:"Inget recept",no_mealplan:"Ingen måltid",today:"Idag",breakfast:"Frukost",lunch:"Lunch",dinner:"Middag",side:"Tillbehör",dessert:"Efterrätt",drink:"Dryck",snack:"Mellanmål",search_placeholder:"Sök recept..."},Mt={add_to_mealplan:"Lägg till i måltidsplanen",add_recipe_to_mealplan:"Lägg till i måltidsplanen",select_date:"Välj ett datum",select_meal_type:"Måltidstyp",select_recipe:"Välj ett recept",view_as_list:"Listvy",view_as_grid:"Rutnätsvy",recipe_added_success:"Receptet har lagts till i planen",cancel:"Avbryt",add:"Lägg till",mealplan_deleted_success:"Måltiden har tagits bort från planen",confirm_delete_title:"Ta bort den här måltiden?",confirm:"Bekräfta",ingredients:"Ingredienser",instructions:"Instruktioner",times:"Tider",prep_time:"Förberedelse",cooking_time:"Tillagning",total_time:"Totalt",add_note_to_mealplan:"Lägg till en anteckning",note_title:"Rubrik",note_text:"Anteckning (valfritt)",note_added_success:"Anteckningen har lagts till i planen",servings:"Portioner",decrease_servings:"Minska antal portioner",increase_servings:"Öka antal portioner",edit_mealplan:"Redigera måltidsplanering",mealplan_updated_success:"Måltidsplaneringen har uppdaterats",save:"Spara",add_favorite:"Lägg till i favoriter",remove_favorite:"Ta bort från favoriter",add_to_shopping_list:"Lägg till i inköpslista",select_shopping_list:"Välj inköpslista",shopping_list_quantity:"Antalsmultiplikator",recipe_added_to_shopping_list:"Receptet har lagts till i inköpslistan",no_shopping_lists:"Inga inköpslistor tillgängliga",no_ingredients:"Inga ingredienser tillgängliga",next:"Nästa",back:"Tillbaka",select_all:"Markera alla",import_recipe:"Importera recept",import_url:"Receptets URL",import_include_tags:"Inkludera taggar",import:"Importera",recipe_imported_success:"Receptet har importerats",open_in_mealie:"Öppna i Mealie"},Rt={no_url:"Konfigurera Mealie-URL för att aktivera bilder och receptlänkar."},It={no_integration:"Välj en Mealie-integration i kortets inställningar",missing_config:"Fel vid inläsning av konfiguration",error_loading:"Fel vid inläsning av data",error_adding_recipe:"Fel när receptet skulle läggas till",error_deleting_mealplan:"Fel när måltiden skulle tas bort",error_updating_mealplan:"Fel när måltidsplanen skulle uppdateras"},Et={integration:"Mealie-integration",entry_types:"Måltidstyper som ska visas",loading:"Laddar...",mealie_url:"Mealie-URL",image_url:"Bild-URL eller lokal sökväg (valfritt)",number_of_recipes:"Antal recept som ska visas",settings_recipes_card:"Visningsinställningar",settings_infos:"Receptdetaljer",settings_image:"Bild",settings_times:"Tider",settings_title_layout:"Layout",show_image:"Visa bild",show_rating:"Visa betyg",show_favorite:"Favoritrecept",show_servings:"Portioner och mängd",show_description:"Visa beskrivning",show_prep_time:"Visa förberedelsetid",show_cooking_time:"Visa tillagningstid",show_total_time:"Visa total tid",layout_mode:"Layout",days_columns:"Dagskolumner",recipes_columns:"Måltidskolumner",layout_vertical:"Vertikal",layout_horizontal:"Måltider sida vid sida",layout_side_by_side:"Dagar sida vid sida",layout_days_and_meals_side_by_side:"Dagar och måltider sida vid sida",days_range:"Dagar som visas",days_range_helper:"Ett antal (t.ex. 3 = 3 dagar från idag) eller ett intervall (t.ex. 0-6 = idag och de följande 6 dagarna)",show_search:"Sökfält",show_favorites_only:"Endast favoriter",show_import_button:"Visa importknapp",show_random_button:"Visa knapp för slumpmässig måltid",settings_meal_actions:"Måltidsåtgärder",settings_recipe_actions:"Receptåtgärder",show_add_recipe_button:"Visa knapp för att lägga till recept",show_note_button:"Visa knapp för att lägga till anteckning",settings_recipe_view:"Öppna recept",recipe_view:"Öppna receptet i",recipe_view_dialog:"Dialogruta i kortet",recipe_view_webview:"Inbäddad Mealie-vy",recipe_view_browser:"Ny webbläsarflik",recipe_tap_action:"Tryck på ett recept",recipe_hold_action:"Långt tryck på ett recept",recipe_double_tap_action:"Dubbeltryck på ett recept",recipe_action_none:"Ingenting",settings_recipe_menu:"Meny ⋮",show_recipe_menu:"Visa knappen för menyn ⋮",mealie_group_slug:"Mealie-grupp (slug)",settings_language:"Språk",language:"Språk",language_auto:"Automatiskt (Home Assistants språk)",language_helper:"Ersätter Home Assistants språk för detta kort, t.ex. för att använda en regional variant som fr-CA."},St={hour:"timme",hours:"timmar",minute:"minut",minutes:"minuter",hour_short:"h",minute_short:"min"},Tt={cards:xt,common:At,dialog:Mt,info:Rt,error:It,editor:Et,time:St};const Dt={da:He,de:Je,en:ni,es:gi,fr:Object.freeze({__proto__:null,cards:zi,common:ki,default:Ei,dialog:xi,editor:Ri,error:Mi,info:Ai,time:Ii}),"fr-BE":vi,"fr-CA":$i,it:Object.freeze({__proto__:null,cards:Si,common:Ti,default:Oi,dialog:Di,editor:Li,error:ji,info:Ci,time:Pi}),nl:Object.freeze({__proto__:null,cards:Ni,common:Ui,default:Wi,dialog:Vi,editor:Fi,error:Bi,info:Hi,time:qi}),pl:Object.freeze({__proto__:null,cards:Ki,common:Gi,default:et,dialog:Zi,editor:Yi,error:Ji,info:Qi,time:Xi}),"pt-BR":Object.freeze({__proto__:null,cards:it,common:tt,default:lt,dialog:at,editor:nt,error:rt,info:st,time:ot}),pt:Object.freeze({__proto__:null,cards:dt,common:ct,default:mt,dialog:pt,editor:ut,error:ht,info:_t,time:gt}),ro:Object.freeze({__proto__:null,cards:ft,common:vt,default:kt,dialog:yt,editor:$t,error:wt,info:bt,time:zt}),sv:Object.freeze({__proto__:null,cards:xt,common:At,default:Tt,dialog:Mt,editor:Et,error:It,info:Rt,time:St})};function Ct(e,i){const t=Dt[i];if(!t)return;const a=e.split(".").reduce((e,i)=>e&&"object"==typeof e?e[i]:void 0,t);return"string"==typeof a?a:void 0}const jt=Object.keys(Dt).sort();function Lt(e,i,t,a){let s;for(const t of function(e){const i=e.split("-")[0];return[...new Set([e,i,"en"])]}(e))if(s=Ct(i,t),void 0!==s)break;return s??(s=i),t&&a?s.replace(t,a):s}const Pt=[[.125,"⅛"],[.25,"¼"],[1/3,"⅓"],[.375,"⅜"],[.5,"½"],[.625,"⅝"],[2/3,"⅔"],[.75,"¾"],[.875,"⅞"]],Ot=new Map;function Nt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ut(e){let i=Ot.get(e);return i||(i=function(e){const i=[Lt(e,"time.hour"),Lt(e,"time.hours")].filter(Boolean).map(Nt),t=[Lt(e,"time.minute"),Lt(e,"time.minutes")].filter(Boolean).map(Nt);return{hourPattern:new RegExp(`(\\d+)\\s*(?:${i.join("|")})`,"i"),minutePattern:new RegExp(`(\\d+)\\s*(?:${t.join("|")})`,"i")}}(e),Ot.set(e,i)),i}function Vt(e,i="en"){if(!e)return"";const t=e.toLowerCase().trim(),{hourPattern:a,minutePattern:s}=Ut(i),r=t.match(a),n=t.match(s);if(!r&&!n)return t.replace(/\s+/g," ").trim();const o=[];return r&&o.push(`${r[1]} ${Lt(i,"time.hour_short")}`),n&&o.push(`${n[1]} ${Lt(i,"time.minute_short")}`),o.join(" ")}function Ht(e,i="en"){if(!e)return"";const t=`common.${e}`,a=Lt(i,t);return a!==t?a:e.toUpperCase()}function Bt(e){return De.map(i=>({value:i,label:e(`common.${i}`)}))}function Ft(e,i=1,t=!0,a="en"){const s=function(e){if(!e)return"";if("string"==typeof e){if(e.trimStart().startsWith("{"))try{const i=JSON.parse(e);return(i.use_abbreviation??i.useAbbreviation)&&i.abbreviation?i.abbreviation:i.name??""}catch{if(/['"]use_abbreviation['"]\s*:\s*True/.test(e)||/'useAbbreviation'\s*:\s*True/.test(e)){const i=e.match(/['"]abbreviation['"]\s*:\s*'([^']+)'/);if(i?.[1])return i[1]}const i=e.match(/['"]name['"]\s*:\s*'([^']*)'/);return i?.[1]??""}return e}return e.use_abbreviation&&e.abbreviation?e.abbreviation:e.name??""}(e.unit),r=null!=e.quantity&&0!==e.quantity;if(!r&&!e.food?.name)return e.note??e.display??"";const n=r?function(e,i="en"){const t=Math.floor(e),a=e-t;if(a<.02)return t>0?String(t):"0";const s=Pt.find(([e])=>Math.abs(a-e)<.02);return s?t>0?`${t} ${s[1]}`:s[1]:new Intl.NumberFormat(i,{maximumFractionDigits:2,useGrouping:!1}).format(e)}(e.quantity*i,a):null,o=[n,s||null,e.food?.name??null].filter(Boolean).join(" ");return t&&e.note?`${o} (${e.note})`:o}class qt extends Error{constructor(e,i){super(e),this.name="MealieActionError",this.translationKey=e,this.reason=i}get detail(){return this.reason instanceof Error?this.reason.message:""}}function Wt(e){const i=De.indexOf(e);return-1===i?De.length:i}async function Kt(e,i){try{return await i()}catch(i){throw i instanceof qt?i:new qt(e,i)}}async function Gt(e,i){return i||async function(e){const i=await e.callWS({type:"config_entries/get",domain:be}),t=(i.find(e=>"loaded"===e.state)??i[0])?.entry_id;if(!t)throw new qt("error.missing_config");return t}(e)}async function Zt(e,i,t,a,s){const r=await Gt(e,a);return e.callService(be,i,{config_entry_id:r,...t},void 0,!1,s)}async function Qt(e,i,t,a){await Zt(e,i,t,a)}async function Jt(e,i,t,a){const s=await Zt(e,i,t,a,!0);return s?.response??null}function Yt(e){return e?.recipe??null}function Xt(e){const i={date:e.date,entry_type:e.entryType};return e.recipeId?{...i,recipe_id:e.recipeId}:{...i,note_title:e.noteTitle,...e.noteText&&{note_text:e.noteText}}}function ea(e,i={}){return Kt("error.error_loading",async()=>{const t={result_limit:i.resultLimit??we};i.search&&(t.search_terms=i.search);const a=await Jt(e,"get_recipes",t,i.configEntryId);return a?.recipes?.items??[]})}function ia(e,i,t){return Kt("error.error_loading",async()=>Yt(await Jt(e,"get_recipe",{recipe_id:i},t)))}function ta(e,i){return Kt("error.error_adding_recipe",()=>Qt(e,"set_mealplan",Xt(i),i.configEntryId))}async function aa(e,i){const t=await e.callWS({type:"config/entity_registry/list"});return new Map(t.filter(e=>e.platform===be&&e.entity_id.startsWith("todo.")&&(!i||e.config_entry_id===i)).map(e=>[e.unique_id,e.entity_id]))}function sa(e){if(!e)return!1;try{const{protocol:i}=new URL(e);return"http:"===i||"https:"===i}catch{return!1}}function ra(e){return!!e&&e.startsWith("/")&&!e.startsWith("//")}function na(e){return sa(e)||ra(e)}const oa=new WeakMap;function la(e){let i=oa.get(e);return i||(i=function(e){const i=[na(e.image_url)?e.image_url:void 0,e.url];return[...new Set(i.filter(e=>!!e))]}(e),oa.set(e,i)),i}function da(e){window.open(e,"_blank","noopener,noreferrer")}const ca=new Map;function pa(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}const _a=/^(\d{1,3})\s*-\s*(\d{1,3})$/;function ha(e,i){const[t,a,s]=e.split("-").map(Number),r=new Date(t,a-1,s),n=new Date;return n.setHours(0,0,0,0),r.getTime()===n.getTime()?Lt(i.locale?.language??"en","common.today"):function(e){let i=ca.get(e);return i||(i=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric"}),ca.set(e,i)),i}(i.locale?.language??"en").format(r)}const ua="mealie-mealplan-updated",ga="mealie-recipes-updated",ma="mealie-recipe-rated",fa="mealie-favorite-toggled",va={[ua]:0,[ga]:0};function ya(e){return va[e]}function ba(e,i){window.dispatchEvent(new CustomEvent(e,{detail:i}))}function wa(e,i){const t=e=>i(e.detail);return window.addEventListener(e,t),()=>window.removeEventListener(e,t)}const $a=r`
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
`,za=(e,i,t,a)=>{const s={},r=new Event(i,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=t,e.dispatchEvent(r),r},ka={shopping_list:"add_recipe_to_shopping_list",interactive_rating:"rate_recipe",favorites:"add_recipe_favorite",import_recipe:"import_recipe",random_mealplan:"set_random_mealplan",edit_mealplan:"update_mealplan",delete_mealplan:"delete_mealplan"};function xa(e,i){return!!e?.services?.[be]?.[ka[i]]}const Aa={tiny:"tiny-original.webp",min:"min-original.webp",original:"original.webp"};function Ma(e){return ra(e)||e.startsWith("http")}function Ra(e,i,t){const a=i.replace(/\/$/,"");return ra(a)?function(e,i,t){return i.recipe_id?`${e}/${encodeURIComponent(i.recipe_id)}/images/${Aa[t]}`:null}(a,e,t):function(e,i,t){const a=i.recipe_id||i.slug;return a?`${e}/api/media/recipes/${encodeURIComponent(a)}/images/${Aa[t]}`:null}(a,e,t)}function Ia(e,i,t="min"){return e.image&&Ma(e.image)?[e.image]:i.map(i=>Ra(e,i,t)).filter(e=>!!e)}const Ea=e=>class extends e{constructor(){super(...arguments),this.localize=(e,i,t)=>Lt(this.hass?.locale?.language??"en",e,i,t),this.localizeError=(e,i="error.error_loading")=>{if(e instanceof qt){const i=this.localize(e.translationKey);return e.detail?`${i}: ${e.detail}`:i}return e instanceof Error&&e.message?e.message:this.localize(i)}}},{I:Sa}=ae,Ta=e=>e,Da=()=>document.createComment(""),Ca=(e,i,t)=>{const a=e._$AA.parentNode,s=void 0===i?e._$AB:i._$AA;if(void 0===t){const i=a.insertBefore(Da(),s),r=a.insertBefore(Da(),s);t=new Sa(i,r,e,e.options)}else{const i=t._$AB.nextSibling,r=t._$AM,n=r!==e;if(n){let i;t._$AQ?.(e),t._$AM=e,void 0!==t._$AP&&(i=e._$AU)!==r._$AU&&t._$AP(i)}if(i!==s||n){let e=t._$AA;for(;e!==i;){const i=Ta(e).nextSibling;Ta(a).insertBefore(e,s),e=i}}}return t},ja=(e,i,t=e)=>(e._$AI(i,t),e),La={},Pa=(e,i=La)=>e._$AH=i,Oa=e=>{e._$AR(),e._$AA.remove()},Na=(e,i)=>{const t=e._$AN;if(void 0===t)return!1;for(const e of t)e._$AO?.(i,!1),Na(e,i);return!0},Ua=e=>{let i,t;do{if(void 0===(i=e._$AM))break;t=i._$AN,t.delete(e),e=i}while(0===t?.size)},Va=e=>{for(let i;i=e._$AM;e=i){let t=i._$AN;if(void 0===t)i._$AN=t=new Set;else if(t.has(e))break;t.add(e),Fa(i)}};function Ha(e){void 0!==this._$AN?(Ua(this),this._$AM=e,Va(this)):this._$AM=e}function Ba(e,i=!1,t=0){const a=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(i)if(Array.isArray(a))for(let e=t;e<a.length;e++)Na(a[e],!1),Ua(a[e]);else null!=a&&(Na(a,!1),Ua(a));else Na(this,e)}const Fa=e=>{e.type==he&&(e._$AP??=Ba,e._$AQ??=Ha)};class qa extends me{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,t){super._$AT(e,i,t),Va(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(Na(this,e),Ua(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}function Wa(e){return!!(e.onTap||e.onHold||e.onDoubleTap)}const Ka=new Set(["Enter"," "]);const Ga=ge(class extends qa{constructor(e){if(super(e),this._handlers={},this._holdTimer=null,this._pressOrigin=null,this._holdFired=!1,this._pendingTapTimer=null,this._onPointerDown=e=>{this._holdFired=!1,this._cancelHold(),this._handlers.onHold&&0===e.button&&(this._pressOrigin={x:e.clientX,y:e.clientY},this._holdTimer=setTimeout(this._fireHold,500))},this._onPointerMove=e=>{this._pressOrigin&&Math.hypot(e.clientX-this._pressOrigin.x,e.clientY-this._pressOrigin.y)>10&&this._cancelHold()},this._fireHold=()=>{this._cancelHold(),this._holdFired=!0,this._handlers.onHold?.()},this._cancelHold=()=>{this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=null,this._pressOrigin=null},this._onContextMenu=e=>{(this._holdTimer||this._holdFired)&&(e.preventDefault(),this._holdTimer&&this._fireHold())},this._onClick=()=>{if(this._holdFired)this._holdFired=!1;else{if(this._handlers.onDoubleTap)return this._pendingTapTimer?(this._cancelPendingTap(),void this._handlers.onDoubleTap()):void(this._pendingTapTimer=setTimeout(this._firePendingTap,250));this._handlers.onTap?.()}},this._firePendingTap=()=>{this._pendingTapTimer=null,this._handlers.onTap?.()},this._onKeyDown=e=>{e.target===this._element&&!e.repeat&&Ka.has(e.key)&&this._handlers.onTap&&(e.preventDefault(),this._handlers.onTap())},e.type!==ue)throw new Error("recipePress must be bound to an element")}render(e){return F}update(e,[i]){return this._handlers=i,this._element!==e.element&&(this._element=e.element,this._listen(this._element)),F}disconnected(){this._cancelHold(),this._cancelPendingTap()}_listen(e){e.addEventListener("pointerdown",this._onPointerDown),e.addEventListener("pointermove",this._onPointerMove),e.addEventListener("pointerup",this._cancelHold),e.addEventListener("pointercancel",this._cancelHold),e.addEventListener("pointerleave",this._cancelHold),e.addEventListener("contextmenu",this._onContextMenu),e.addEventListener("click",this._onClick),e.addEventListener("keydown",this._onKeyDown)}_cancelPendingTap(){this._pendingTapTimer&&clearTimeout(this._pendingTapTimer),this._pendingTapTimer=null}}),Za=()=>{},Qa=e=>customElements.get(e)?Za:(e=>(i,t)=>{void 0!==t?t.addInitializer(()=>{customElements.define(e,i)}):customElements.define(e,i)})(e);var Ja=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,Xa=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?Ya(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&Ja(i,t,r),r};let es=class extends ne{constructor(){super(...arguments),this.rating=0,this.interactive=!1,this.updating=!1,this._hovered=0}_emit(e){this.updating||this.dispatchEvent(new CustomEvent("rate-selected",{detail:{rating:e},bubbles:!1,composed:!1}))}render(){return this.interactive?this._renderInteractive():this._renderReadonly()}_renderReadonly(){const e=this.rating;return H`
      <span class="star-rating">
        ${es.STARS.map(i=>H`<ha-icon icon=${e>=i?"mdi:star":e>=i-.5?"mdi:star-half-full":"mdi:star-outline"}></ha-icon>`)}
      </span>
    `}_renderInteractive(){const e=this._hovered||this.rating;return H`
      <span
        class="star-rating interactive-rating ${this.updating?"updating":""}"
        @mouseleave=${()=>{this._hovered=0}}
      >
        ${es.STARS.map(i=>H`
            <ha-icon
              icon=${e>=i?"mdi:star":"mdi:star-outline"}
              @mouseenter=${()=>{this._hovered=i}}
              @click=${()=>this._emit(i)}
            ></ha-icon>
          `)}
      </span>
    `}};es.styles=r`
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
  `,es.STARS=[1,2,3,4,5],Xa([ce({type:Number})],es.prototype,"rating",2),Xa([ce({type:Boolean})],es.prototype,"interactive",2),Xa([ce({type:Boolean})],es.prototype,"updating",2),Xa([pe()],es.prototype,"_hovered",2),es=Xa([Qa("mealie-star-rating")],es);var is=Object.defineProperty,ts=(e,i,t,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(i,t,r)||r);return r&&is(i,t,r),r};function as(e){e.currentTarget.parentElement?.classList.remove("image-loading")}function ss(e){const i=e.currentTarget.parentElement;i&&(i.classList.remove("image-loading"),i.classList.add("image-error"))}function rs(e,i,t){const a=[...new Set(Ia(i,t.urls,t.variant??"min").map(i=>function(e,i){return i.startsWith("/")?`${e.auth.data.hassUrl}${i}`:i}(e,i)).filter(na))];if(!a.length)return F;const s=function(e){return!e.image}(i)&&t.onImageMissing?t.onImageMissing:ss;return H`
    <div class="${t.containerClass} image-loading">
      <img
        src=${a[0]}
        alt=${i.name??i.title??""}
        class="${t.imgClass}"
        loading="lazy"
        decoding="async"
        @load=${as}
        @error=${function(e,i){return t=>{const a=t.currentTarget,s=e[e.indexOf(a.getAttribute("src")??"")+1];s?a.src=s:i(t)}}(a,s)}
      />
    </div>
  `}const ns=e=>{class i extends(Ea(e)){constructor(){super(...arguments),this.error=null,this._loading=!1,this._initialized=!1,this._ratings=new Map,this._updatingRatings=new Set,this._favorites=new Map,this._updatingFavorites=new Set,this._missingImages=new Set}supports(e){return xa(this.hass,e)}get baseConfig(){return this.config??{}}recipeWebUrl(e){return function(e,i,t){if(!sa(e)||!i)return null;const a=e.replace(/\/$/,""),s=t?.trim()||Re;return`${a}/g/${encodeURIComponent(s)}/r/${encodeURIComponent(i)}`}(this.baseConfig.url,e?.slug,this.baseConfig.mealie_group_slug)}openRecipe(e){if("browser"!==this.baseConfig.recipe_view)return!0;const i=this.recipeWebUrl(e);return!i||(da(i),!1)}handleError(e){this.error=this.localizeError(e)}_markImageMissing(e){this._missingImages.has(e)||(this._missingImages=new Set(this._missingImages).add(e))}renderRecipeImage(e,i){if(!i)return F;const t=e.slug??e.recipe_id;return t&&this._missingImages.has(t)?F:rs(this.hass,e,{urls:la(this.baseConfig),variant:"min",containerClass:"recipe-card-image",imgClass:"recipe-image",onImageMissing:t?()=>this._markImageMissing(t):void 0})}renderActionsMenu(e,i){return e.length?H`
        <ha-dropdown @wa-select=${i=>e[Number(i.detail.item.value)]?.onClick()}>
          <ha-icon-button class="plain-icon-button" slot="trigger" .label=${this.localize(i)}>
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </ha-icon-button>
          ${e.map((e,i)=>H`
              <ha-dropdown-item variant=${e.variant??F} value=${i}>
                <ha-icon slot="icon" icon=${e.icon}></ha-icon>
                ${this.localize(e.labelKey)}
              </ha-dropdown-item>
            `)}
        </ha-dropdown>
      `:F}renderCardButtons(e){return e.length?H`<div class="card-buttons">${this.renderActionsMenu(e,"cards.recipe_actions")}</div>`:F}renderPressSurface(e,i){if(!Wa(i))return F;const t=i.onTap;return H`
        <div
          class="recipe-press-surface"
          role=${t?"button":F}
          tabindex=${t?"0":F}
          aria-label=${t?e??F:F}
          ${Ga(i)}
        >
          <ha-ripple></ha-ripple>
        </div>
      `}renderRecipeMedia(e,i,t){return H`${this.renderRecipeImage(e,i)}${this.renderCardButtons(t)}`}renderRecipeName(e){return H`<h4 class="recipe-name">${e.name??e.title}</h4>`}renderRecipeDescription(e,i){return i&&e?H`<div class="recipe-description">${e}</div>`:F}buildTimeRows(e,i=!0,t=!0,a=!0){const s=this.hass?.locale?.language;return[i&&e.prep_time?{icon:"mdi:knife",label:this.localize("dialog.prep_time"),value:Vt(e.prep_time,s)}:null,t&&e.perform_time?{icon:"mdi:pot-steam",label:this.localize("dialog.cooking_time"),value:Vt(e.perform_time,s)}:null,a&&e.total_time?{icon:"mdi:clock-time-three-outline",label:this.localize("dialog.total_time"),value:Vt(e.total_time,s)}:null].filter(Boolean)}renderTimeRows(e){return H`${e.map(e=>H`
          <div class="time-row">
            <ha-icon class="time-row-icon" icon=${e.icon}></ha-icon>
            <span class="time-row-label">${e.label}</span>
            <span class="time-row-value">${e.value}</span>
          </div>
        `)}`}renderRecipeTimes(e,i,t,a){const s=this.buildTimeRows(e,i,t,a);return s.length?H`<div class="recipe-times">${this.renderTimeRows(s)}</div>`:F}async _setRating(e,i,t){if(!e||!this.hass)return;if(this._updatingRatings.has(e))return;const a=this._ratings.get(e)??0;this._ratings=new Map(this._ratings).set(e,i),this._updatingRatings=new Set(this._updatingRatings).add(e);try{await function(e,i,t,a){return Kt("error.error_loading",()=>{if(!i)throw new qt("error.error_loading");return Qt(e,"rate_recipe",{recipe_slug:i,rating:t},a)})}(this.hass,e,i,t),ba(ma,{slug:e,rating:i})}catch{this._ratings=new Map(this._ratings).set(e,a),za(this,"hass-notification",{message:this.localize("error.error_loading")})}finally{const i=new Set(this._updatingRatings);i.delete(e),this._updatingRatings=i}}async _toggleFavorite(e,i){if(!e||!this.hass)return;if(this._updatingFavorites.has(e))return;const t=this._favorites.get(e)??!1,a=!t;this._favorites=new Map(this._favorites).set(e,a),this._updatingFavorites=new Set(this._updatingFavorites).add(e),ba(fa,{slug:e,favorite:a});try{await(a?function(e,i,t){return Kt("error.error_loading",()=>{if(!i)throw new qt("error.error_loading");return Qt(e,"add_recipe_favorite",{recipe_slug:i},t)})}(this.hass,e,i??void 0):function(e,i,t){return Kt("error.error_loading",()=>{if(!i)throw new qt("error.error_loading");return Qt(e,"remove_recipe_favorite",{recipe_slug:i},t)})}(this.hass,e,i??void 0))}catch{this._favorites=new Map(this._favorites).set(e,t),ba(fa,{slug:e,favorite:t}),za(this,"hass-notification",{message:this.localize("error.error_loading")})}finally{const i=new Set(this._updatingFavorites);i.delete(e),this._updatingFavorites=i}}renderFavoriteButton(e,i,t){if(!i||!this.supports("favorites"))return F;const a=e?.slug;if(!a)return F;const s=this._favorites.get(a)??!1;return H`
        <ha-icon-button
          class="favorite-button"
          .label=${s?this.localize("dialog.remove_favorite"):this.localize("dialog.add_favorite")}
          .disabled=${this._updatingFavorites.has(a)}
          @click=${e=>{e.stopPropagation(),this._toggleFavorite(a,t)}}
        >
          <ha-icon icon=${s?"mdi:heart":"mdi:heart-outline"}></ha-icon>
        </ha-icon-button>
      `}_renderInteractiveRating(e,i,t){if(!i)return F;const a=e?.slug;if(!a||!this.supports("interactive_rating"))return this.renderStarRating(e?.rating??void 0,i);const s=this._updatingRatings.has(a),r=s?this._ratings.get(a)??e?.rating??0:e?.rating??0;return H`
        <mealie-star-rating
          interactive
          .rating=${r}
          ?updating=${s}
          @rate-selected=${e=>{this._setRating(a,e.detail.rating,t??void 0)}}
        ></mealie-star-rating>
      `}renderStarRating(e,i){return i?H`<mealie-star-rating .rating=${e??0}></mealie-star-rating>`:F}renderServings(e,i){return e&&i?H`<span class="servings-badge">
        <ha-icon icon="mdi:circle-slice-1"></ha-icon>
        <span class="servings-value">${e}</span>
      </span>`:F}renderDetailsSection(e,i,t){return H`
        <ha-expansion-panel outlined expanded>
          <ha-icon slot="leading-icon" icon=${e}></ha-icon>
          <span slot="header" class="details-title">${i}</span>
          <div class="details-content">${t}</div>
        </ha-expansion-panel>
      `}}return ts([pe()],i.prototype,"error"),ts([pe()],i.prototype,"_loading"),ts([pe()],i.prototype,"_initialized"),ts([pe()],i.prototype,"_ratings"),ts([pe()],i.prototype,"_updatingRatings"),ts([pe()],i.prototype,"_favorites"),ts([pe()],i.prototype,"_updatingFavorites"),ts([pe()],i.prototype,"_missingImages"),i},os=new WeakMap;function ls(e,i){let t=os.get(e);t||(t=new Map,os.set(e,t));let a=t.get(i);return a||(a={...e,language:i},t.set(i,a)),a}function ds(e){if(e)try{return Intl.getCanonicalLocales(e)[0]}catch{return}}var cs=Object.defineProperty;class ps extends(ns(ne)){constructor(){super(...arguments),this._watchSignature="",this._unsubscribers=[],this._seenRevision=0,this._pendingReload=!1,this._lastLoadedAt=0,this._onVisibilityChange=()=>{"visible"===document.visibilityState&&this._catchUp()}}refreshSignal(){return null}subscribeExtras(){return[]}watchedEntityIds(){return[]}hasOpenDialog(){return!1}getCardSize(){return 1+2*(this.itemCount()||1)}getGridOptions(){return{rows:"auto",min_columns:6}}findMealieEntities(e){const i=this.hass,t=this.config?.config_entry_id??null,a=i?.entities,s=`${e}.`;if(!a){const e=i?.states??{};return Object.keys(e).filter(e=>e.startsWith(s)&&e.includes("mealie"))}const r=i?.devices;return Object.keys(a).filter(e=>{if(!e.startsWith(s))return!1;const i=a[e];if(!i||"mealie"!==i.platform)return!1;if(t){if(i.config_entry_id)return i.config_entry_id===t;const e=i.device_id&&r?r[i.device_id]:void 0;if(e?.config_entries)return e.config_entries.includes(t)}return!0})}_registryRef(){const e=this.hass;return e?.entities??e?.states}_getWatchedEntityIds(){const e=this.config?.config_entry_id??null,i=this._registryRef();return this._watchedIds&&this._watchedIdsKey===e&&this._watchedRegistryRef===i||(this._watchedIdsKey=e,this._watchedRegistryRef=i,this._watchedIds=this.watchedEntityIds()),this._watchedIds}_computeWatchSignature(){const e=this._getWatchedEntityIds();if(!e.length)return"";const i=this.hass?.states??{};return e.map(e=>{const t=i[e];return t?`${e}=${t.state}@${t.last_updated}`:`${e}=∅`}).join("|")}async loadData(){if(this.hass&&this.config?.config_entry_id&&!this._loading&&!this._initialized){this._loading=!0,this.error=null;try{await this.fetchData(),this._initialized=!0,this._lastLoadedAt=Date.now()}catch(e){this.handleError(e)}finally{this._loading=!1,this._pendingReload&&(this._pendingReload=!1,this._reload())}}}_reload(){const e=this.refreshSignal();e&&(this._seenRevision=ya(e)),this._loading?this._pendingReload=!0:(this._initialized=!1,this.loadData())}_catchUp(){const e=this.refreshSignal(),i=e?ya(e):this._seenRevision,t=i!==this._seenRevision;this._seenRevision=i,this._initialized&&(t||Date.now()-this._lastLoadedAt>=3e4)&&this._reload()}_watchedStateChanged(){if(this._loading)return!1;const e=this._computeWatchSignature();return!!e&&e!==this._watchSignature}_maybeRefreshOnEntityChange(){if(this._loading)return;const e=this._computeWatchSignature();e&&(this.error?e!==this._watchSignature&&(this._watchSignature=e,this.error=null,this._reload()):this._initialized&&(this._watchSignature?e!==this._watchSignature&&(this._watchSignature=e,this._reload()):this._watchSignature=e))}connectedCallback(){super.connectedCallback();const e=this.refreshSignal();var i,t;this._unsubscribers=[...e?[(i=e,t=()=>this._reload(),window.addEventListener(i,t),()=>window.removeEventListener(i,t))]:[],...this.subscribeExtras()],document.addEventListener("visibilitychange",this._onVisibilityChange),this._catchUp()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this._onVisibilityChange),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[],this._watchSignature="",this._watchedIds=void 0,this._watchedIdsKey=void 0,this._watchedRegistryRef=void 0}willUpdate(e){super.willUpdate(e),e.has("hass")&&this.hass&&this._maybeRefreshOnEntityChange(),!this.hass||this._initialized||this._loading||this.error||this.loadData()}_applyLanguage(e){if(e.has("hass")&&this.hass!==this._localizedHass&&(this._rawHass=this.hass),!this._rawHass)return;const i=function(e,i){const t=ds(i);return e?.locale&&t&&e.locale.language!==t?{...e,locale:ls(e.locale,t)}:e}(this._rawHass,this.config?.language);this._localizedHass=i,this.hass!==i&&(this.hass=i)}shouldUpdate(e){if(this._applyLanguage(e),e.size>1||!e.has("hass"))return!0;const i=e.get("hass");return!i||(i.locale!==this.hass.locale||i.services!==this.hass.services||this.hasOpenDialog()||this._watchedStateChanged())}renderLoadingIndicator(){return H`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`}renderErrorAlert(){return H`<ha-alert alert-type="error">${this.error}</ha-alert>`}renderLoading(){return H`
      <ha-card>
        <div class="card-content">${this.renderLoadingIndicator()}</div>
      </ha-card>
    `}renderEmptyState(e){return H`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="info">${e}</ha-alert>
        </div>
      </ha-card>
    `}}ps.styles=$a,((e,i,t)=>{for(var a,s=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(s=a(i,t,s)||s);s&&cs(i,t,s)})([ce({attribute:!1})],ps.prototype,"hass");const _s={view_recipe:{labelKey:"cards.view_recipe",icon:"mdi:book-open-variant"},add_to_mealplan:{labelKey:"dialog.add_to_mealplan",icon:"mdi:calendar-plus"},add_to_shopping_list:{labelKey:"dialog.add_to_shopping_list",icon:"mdi:cart-plus"},edit_mealplan:{labelKey:"cards.edit_mealplan",icon:"mdi:pencil"},delete_mealplan:{labelKey:"cards.delete_mealplan",icon:"mdi:trash-can-outline",variant:"danger"}},hs={add_to_shopping_list:"shopping_list",edit_mealplan:"edit_mealplan",delete_mealplan:"delete_mealplan"},us={view_recipe:"show_view_recipe_button",add_to_mealplan:"show_add_to_mealplan_button",add_to_shopping_list:"show_shopping_list_button",edit_mealplan:"show_edit_mealplan_button",delete_mealplan:"show_delete_mealplan_button"};function gs(e,i){return!1===i.show_recipe_menu?[]:e.filter(e=>i[us[e]]??!0)}function ms(e,i){const t=hs[i];return!t||xa(e,t)}function fs(e){return _s[e].labelKey}function vs(e,i){return e.flatMap(e=>{const t=i[e];return t?[{..._s[e],onClick:t}]:[]})}function ys(e,i){return i&&"none"!==i?e[i]:void 0}function bs(e,i){return{onTap:ys(e,i.recipe_tap_action),onHold:ys(e,i.recipe_hold_action),onDoubleTap:ys(e,i.recipe_double_tap_action)}}function ws(e,i,t,a=!1){return H`
    <ha-formfield alignEnd spaceBetween .label=${i} .disabled=${a}>
      <ha-switch .checked=${e} .disabled=${a} @change=${e=>t(e.target.checked)}></ha-switch>
    </ha-formfield>
  `}function $s(e,i,t,a){return H`
    <ha-selector
      .hass=${e}
      .selector=${{text:{}}}
      .value=${i??""}
      .label=${t}
      .required=${!1}
      @value-changed=${e=>a(e.detail.value)}
    ></ha-selector>
  `}const zs=r`
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
    padding: 2px var(--ha-space-2, 8px);
    border-radius: var(--ha-border-radius-pill, 9999px);
    background: var(--accent-color);
    color: var(--text-accent-color, var(--black-color));
    font-weight: var(--ha-font-weight-medium, 500);
  }
`,ks="4.2.0";var xs=Object.defineProperty,As=(e,i,t,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(i,t,r)||r);return r&&xs(i,t,r),r};const Ms=new Map;class Rs extends(Ea(ne)){constructor(){super(...arguments),this._imageIsHash=void 0,this._imageCheckEntry="__unset__",this._computeLabel=e=>({config_entry_id:this.localize("editor.integration")}[e.name]??e.name)}setConfig(e){this.config={...e}}updated(e){if(super.updated(e),!this.hass||!this.config)return;const i=this.config.config_entry_id??null;i!==this._imageCheckEntry&&(this._imageCheckEntry=i,this._imageIsHash=void 0,i&&this._refreshImageFormat(i))}async _refreshImageFormat(e){const i=await async function(e,i){const t=Ms.get(i);if(void 0!==t)return t;let a;try{a=await ea(e,{configEntryId:i,resultLimit:1})}catch{return!0}const s=a[0]?.image,r=!s||!Ma(s);return Ms.set(i,r),r}(this.hass,e);this._imageCheckEntry===e&&(this._imageIsHash=i)}get _needsMealieUrl(){return!!this._imageIsHash||"dialog"!==this.config.recipe_view}_isImageAllowed(e){return!!e?.config_entry_id&&(void 0!==this._imageIsHash&&(!this._imageIsHash||la(e).some(na)))}get _showImageAllowed(){return this._isImageAllowed(this.config)}get _schemaTop(){return[{type:"expandable",title:this.localize("editor.integration"),icon:"mdi:connection",schema:[{name:"config_entry_id",selector:{config_entry:{integration:"mealie"}}}]}]}_commitConfig(e){this.config=e,za(this,"config-changed",{config:e})}_setValue(e,i){this._commitConfig({...this.config,[e]:i})}_valueChanged(e){const i={...e.detail.value};i.config_entry_id||(i.show_image=!1),this._commitConfig(i)}renderEditorLoading(){return H`<div>${this.localize("editor.loading")}</div>`}renderTopForm(){return H`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaTop}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}renderInfosDisplayOptions(){return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_infos")}>
        <ha-icon slot="leading-icon" icon="mdi:information-box-outline"></ha-icon>
        <div class="settings-fields">${this.renderInfosDisplayFields()}</div>
      </ha-expansion-panel>
    `}renderInfosDisplayFields(){return H`
      ${ws(!!this.config.show_rating,this.localize("editor.show_rating"),e=>this._setValue("show_rating",e))}
      ${ws(!!this.config.show_servings,this.localize("editor.show_servings"),e=>this._setValue("show_servings",e))}
      ${ws(!!this.config.show_description,this.localize("editor.show_description"),e=>this._setValue("show_description",e))}
    `}_setImageSource(e){const i=this._showImageAllowed,t={...this.config,...e},a=this._isImageAllowed(t);this._commitConfig({...t,show_image:a&&(!i||!!t.show_image)})}renderImageDisplayOptions(){const e=this._showImageAllowed;return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_image")}>
        <ha-icon slot="leading-icon" icon="mdi:image-outline"></ha-icon>
        <div class="settings-fields">
          ${this._needsMealieUrl?$s(this.hass,this.config.url,this.localize("editor.mealie_url"),e=>this._setImageSource({url:e||void 0})):F}
          ${this._imageIsHash?$s(this.hass,this.config.image_url,this.localize("editor.image_url"),e=>this._setImageSource({image_url:e||void 0})):F}
          ${ws(!!this.config.show_image&&e,this.localize("editor.show_image"),e=>this._setValue("show_image",e),!e)}
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
    `}_renderPressActionFields(e,i){const t=[...e.filter(e=>ms(this.hass,e)).map(e=>({value:e,label:this.localize(fs(e))})),{value:"none",label:this.localize("editor.recipe_action_none")}];return H`
      <div class="press-action-fields">
        ${[{key:"recipe_tap_action",labelKey:"editor.recipe_tap_action"},{key:"recipe_double_tap_action",labelKey:"editor.recipe_double_tap_action"},{key:"recipe_hold_action",labelKey:"editor.recipe_hold_action"}].map(({key:e,labelKey:a})=>function(e,i,t,a,s){return H`
    <ha-selector
      .hass=${e}
      .selector=${{select:{mode:"dropdown",options:a}}}
      .value=${i}
      .label=${t}
      .required=${!1}
      @value-changed=${e=>s(e.detail.value)}
    ></ha-selector>
  `}(this.hass,this.config[e]??i[e],this.localize(a),t,i=>this._setValue(e,i||"none")))}
      </div>
    `}_renderMenuFields(e){const i=this.config.show_recipe_menu??!0;return H`
      ${ws(i,this.localize("editor.show_recipe_menu"),e=>this._setValue("show_recipe_menu",e))}
      ${e.map(e=>{const t=function(e){return us[e]}(e);return ws(this.config[t]??!0,this.localize(fs(e)),e=>this._setValue(t,e),!i||!ms(this.hass,e))})}
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
          ${"dialog"===e?F:H`
                ${sa(this.config.url)?F:H`<ha-alert alert-type="info">${this.localize("info.no_url")}</ha-alert>`}
                ${$s(this.hass,this.config.mealie_group_slug??Re,this.localize("editor.mealie_group_slug"),e=>this._setValue("mealie_group_slug",e||Re))}
              `}
        </div>
      </ha-expansion-panel>
    `}_languageLabel(e){try{const i=new Intl.DisplayNames([e],{type:"language"}).of(e);return i?`${i.charAt(0).toLocaleUpperCase(e)}${i.slice(1)} · ${e}`:e}catch{return e}}_setLanguage(e){const i={...this.config};e&&"auto"!==e?i.language=e:delete i.language,this._commitConfig(i)}renderLanguageOptions(){const e=[{value:"auto",label:this.localize("editor.language_auto")},...jt.map(e=>({value:e,label:this._languageLabel(e)}))];return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_language")}>
        <ha-icon slot="leading-icon" icon="mdi:translate"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{mode:"dropdown",options:e}}}
            .value=${ds(this.config.language)??"auto"}
            .label=${this.localize("editor.language")}
            .helper=${this.localize("editor.language_helper")}
            .required=${!1}
            @value-changed=${e=>this._setLanguage(e.detail.value)}
          ></ha-selector>
        </div>
      </ha-expansion-panel>
    `}renderTimesDisplayOptions(){return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_times")}>
        <ha-icon slot="leading-icon" icon="mdi:timer-settings-outline"></ha-icon>
        <div class="settings-fields">
          ${ws(!!this.config.show_prep_time,this.localize("editor.show_prep_time"),e=>this._setValue("show_prep_time",e))}
          ${ws(!!this.config.show_perform_time,this.localize("editor.show_cooking_time"),e=>this._setValue("show_perform_time",e))}
          ${ws(!!this.config.show_total_time,this.localize("editor.show_total_time"),e=>this._setValue("show_total_time",e))}
        </div>
      </ha-expansion-panel>
    `}renderVersion(){return H`
      <div class="editor-version">
        <span class="editor-version-name">Mealie Card</span>
        <span class="editor-version-number">v${ks}</span>
        <a href="${"https://ko-fi.com/A1V11ZZTPI"}" target="_blank"
          ><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" border="0" alt="Buy Me a Coffee at ko-fi.com"
        /></a>
      </div>
    `}}Rs.styles=zs,As([ce({attribute:!1})],Rs.prototype,"hass"),As([pe()],Rs.prototype,"config"),As([pe()],Rs.prototype,"_imageIsHash");var Is=Object.getOwnPropertyDescriptor;const Es=["view_recipe","add_to_shopping_list","edit_mealplan","delete_mealplan"],Ss={recipe_tap_action:ke,recipe_double_tap_action:Ae,recipe_hold_action:xe};function Ts(e,i){if("string"==typeof e)return e;const t=Math.max(0,Math.floor(e??0)),a=Math.max(1,Math.floor(i??1));return a>1?`${t}-${t+a-1}`:String(t)}let Ds=class extends Rs{constructor(){super(...arguments),this._localizeCardLanguage=e=>Lt(ds(this.config?.language)??this.hass?.locale?.language??"en",e),this._layoutChanged=e=>{const{layout_mode:i,...t}=e.detail.value,a={...t};a.day_offset=function(e){const i=String(e??"").trim();return/^\d{1,3}$/.test(i)?Number(i):i}(a.day_offset),delete a.days_to_show,a.days_columns=Number(a.days_columns??2),a.recipes_columns=Number(a.recipes_columns??2),a.days_layout="side_by_side"===i||"both"===i?"horizontal":"vertical",a.recipes_layout="horizontal"===i||"both"===i?"horizontal":"vertical",a.config_entry_id||(a.show_image=!1),this._commitConfig(a)},this._computeLayoutLabel=e=>({day_offset:this.localize("editor.days_range"),layout_mode:this.localize("editor.layout_mode"),days_columns:this.localize("editor.days_columns"),recipes_columns:this.localize("editor.recipes_columns")}[e.name]??e.name),this._computeLayoutHelper=e=>"day_offset"===e.name?this.localize("editor.days_range_helper"):void 0}get _columnsOptions(){return[2,3,4].map(e=>({value:String(e),label:String(e)}))}_columnsField(e){return{name:e,selector:{select:{mode:"dropdown",options:this._columnsOptions}}}}get _schemaLayout(){const e={name:"layout_mode",selector:{select:{mode:"dropdown",options:[{value:"vertical",label:this.localize("editor.layout_vertical")},{value:"horizontal",label:this.localize("editor.layout_horizontal")},{value:"side_by_side",label:this.localize("editor.layout_side_by_side")},{value:"both",label:this.localize("editor.layout_days_and_meals_side_by_side")}]}}};return[{type:"expandable",title:this.localize("editor.settings_title_layout"),icon:"mdi:view-grid-outline",schema:[{name:"day_offset",selector:{text:{}}},e,..."horizontal"===this.config.days_layout?[this._columnsField("days_columns")]:[],..."horizontal"===this.config.recipes_layout?[this._columnsField("recipes_columns")]:[]]}]}_toggleEntryType(e){const i=new Set(this.config.entry_types??[]);i.has(e)?i.delete(e):i.add(e),this._commitConfig({...this.config,entry_types:[...i]})}_renderEntryTypes(){const e=new Set(this.config.entry_types??[]);return H`
      <div class="entry-type-chips">
        ${Bt(this._localizeCardLanguage).map(({value:i,label:t})=>H`
            <button class="entry-chip ${e.has(i)?"active":""}" @click=${()=>this._toggleEntryType(i)}>${t}</button>
          `)}
      </div>
    `}render(){return this.hass&&this.config?H`
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
          ${ws(this.config.show_add_recipe_button??!0,this.localize("editor.show_add_recipe_button"),e=>this._setValue("show_add_recipe_button",e))}
          ${ws(this.config.show_random_button??!0,this.localize("editor.show_random_button"),e=>this._setValue("show_random_button",e))}
          ${ws(this.config.show_note_button??!0,this.localize("editor.show_note_button"),e=>this._setValue("show_note_button",e))}
        </div>
      </ha-expansion-panel>
      ${this.renderRecipeActionsPanel(Es,Ss)}
      <ha-form
        .hass=${this.hass}
        .data=${{...this.config,day_offset:Ts(this.config.day_offset,this.config.days_to_show),days_columns:String(this.config.days_columns??2),recipes_columns:String(this.config.recipes_columns??2),layout_mode:this._layoutMode()}}
        .schema=${this._schemaLayout}
        .computeLabel=${this._computeLayoutLabel}
        .computeHelper=${this._computeLayoutHelper}
        @value-changed=${this._layoutChanged}
      ></ha-form>
      ${this.renderVersion()}
    `:this.renderEditorLoading()}_layoutMode(){const e="horizontal"===this.config.days_layout,i="horizontal"===this.config.recipes_layout;return e?i?"both":"side_by_side":i?"horizontal":"vertical"}};Ds=((e,i,t,a)=>{for(var s,r=a>1?void 0:a?Is(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(r)||r);return r})([Qa("mealie-card-editor")],Ds);var Cs=Object.defineProperty,js=(e,i,t,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(i,t,r)||r);return r&&Cs(i,t,r),r};class Ls extends(Ea(ne)){constructor(){super(...arguments),this.configEntryId=null,this.open=!1,this._submitting=!1,this._close=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!1,composed:!1}))}}onOpen(){}updated(e){super.updated(e),e.has("open")&&this.open&&(this._submitting=!1,this.onOpen())}async submit(e){if(!this._submitting){this._submitting=!0;try{await e.run(),za(this,"hass-notification",{message:"function"==typeof e.success?e.success():this.localize(e.success)}),e.signal&&(i=e.signal,va[i]+=1,window.dispatchEvent(new CustomEvent(i))),!1!==e.closeOnSuccess&&this._close()}catch(i){za(this,"hass-notification",{message:this.localizeError(i,e.errorKey)})}finally{this._submitting=!1}var i}}renderLoadingIndicator(){return H`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`}renderDateSelector(e,i){return H`
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
        .selector=${{select:{mode:"dropdown",options:Bt(this.localize)}}}
        .value=${e}
        .label=${this.localize("dialog.select_meal_type")}
        .required=${!1}
        @value-changed=${e=>i(e.detail.value)}
      ></ha-selector>
    `}renderTextSelector(e,i,t,a=!1){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{text:a?{multiline:!0}:{}}}
        .value=${e}
        .label=${this.localize(i)}
        .required=${!1}
        @value-changed=${e=>t(e.detail.value)}
      ></ha-selector>
    `}renderPrimaryFooter(e,i,t){return H`
      <ha-dialog-footer slot="footer">
        <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${i} ?disabled=${t}>
          ${this._submitting?"...":this.localize(e)}
        </ha-button>
      </ha-dialog-footer>
    `}}Ls.styles=$a,js([ce({attribute:!1})],Ls.prototype,"hass"),js([ce()],Ls.prototype,"configEntryId"),js([ce({type:Boolean})],Ls.prototype,"open"),js([pe()],Ls.prototype,"_submitting");var Ps=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,Ns=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?Os(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&Ps(i,t,r),r};let Us=class extends Ls{constructor(){super(...arguments),this.recipe=null,this.defaultShoppingListId=null,this._step=1,this._shoppingListId="",this._shoppingEntityId="",this._quantity=1,this._lists=[],this._loadingLists=!1,this._listsError=null,this._loadingIngredients=!1,this._ingredients=[],this._ingredientsError=null,this._rawIngredients=null,this._handleAdd=()=>{const e=this.recipe?.recipe_id;if(!e||!this._shoppingListId||!this.hass)return;const i=this._selectables,t=0===i.length||i.every(e=>e.selected);this.submit({run:()=>{return t||!this._canSelectIngredients?(i=this.hass,a={configEntryId:this.configEntryId??void 0,shoppingListId:this._shoppingListId,recipeId:e,quantity:this._quantity},Kt("error.error_loading",()=>Qt(i,"add_recipe_to_shopping_list",{shopping_list_id:a.shoppingListId,recipe_id:a.recipeId,...void 0!==a.quantity&&{recipe_increment_quantity:a.quantity}},a.configEntryId))):function(e,i){return Kt("error.error_loading",async()=>{const t=async()=>{const t=(await e.callService(be,"get_shopping_list_items",{},{entity_id:i.shoppingEntityId},!1,!0)).response;return t?.[i.shoppingEntityId]?.items??[]},a=new Set((await t()).map(e=>e.item_id));await Qt(e,"add_recipe_to_shopping_list",{shopping_list_id:i.shoppingListId,recipe_id:i.recipeId,recipe_increment_quantity:i.quantity},i.configEntryId);const s=(await t()).filter(e=>!a.has(e.item_id)),r=[];for(const e of i.deselectedIngredients){const t=e.food?.food_id??null;let a=t?s.find(e=>e.food_id===t&&!r.includes(e.item_id)):void 0;if(!a){const t=Ft(e,i.quantity,!0,i.language??"en").toLowerCase().trim();a=s.find(e=>!r.includes(e.item_id)&&(e.note?.toLowerCase().trim()===t||e.display?.toLowerCase().trim()===t))}a&&r.push(a.item_id)}r.length>0&&await e.callService("todo","remove_item",{item:r},{entity_id:i.shoppingEntityId},!1)})}(this.hass,{configEntryId:this.configEntryId??void 0,shoppingListId:this._shoppingListId,shoppingEntityId:this._shoppingEntityId,recipeId:e,quantity:this._quantity,deselectedIngredients:this._deselectedIngredients(),language:this.hass?.locale?.language??"en"});var i,a},success:"dialog.recipe_added_to_shopping_list",errorKey:"error.error_loading"})}}onOpen(){this._step=1,this._quantity=1,this._ingredients=[],this._ingredientsError=null,this._rawIngredients=null,this._loadLists()}async _loadLists(){this._loadingLists=!0,this._listsError=null;try{this._lists=await(e=this.hass,i=this.configEntryId??void 0,Kt("error.error_loading",async()=>{const[t,a]=await Promise.all([Jt(e,"get_shopping_lists",{},i),aa(e,i)]),s=e=>{for(const[i,t]of a)if(i.endsWith(`_${e}`))return t;return""};return(t?.shopping_lists??[]).map(e=>({id:e.list_id,name:e.name,entity_id:s(e.list_id)}))}))}catch(e){return this._lists=[],void(this._listsError=this.localizeError(e))}finally{this._loadingLists=!1}var e,i;if(!this._lists.length)return;const t=this.defaultShoppingListId?this._lists.find(e=>e.id===this.defaultShoppingListId):void 0,a=t??this._lists[0];this._shoppingListId=a.id,this._shoppingEntityId=a.entity_id}async _resolveIngredients(){if(this.recipe?.ingredients?.length)return this.recipe.ingredients;const e=this.recipe?.slug??this.recipe?.recipe_id;if(!e)return[];const i=await ia(this.hass,e,this.configEntryId??void 0);return i?.ingredients??[]}async _handleNext(){if(!this._loadingIngredients){if(this._step=2,this._ingredientsError=null,this._ingredients=[],!this._rawIngredients){this._loadingIngredients=!0;try{this._rawIngredients=await this._resolveIngredients()}catch(e){return void(this._ingredientsError=this.localizeError(e))}finally{this._loadingIngredients=!1}}this._ingredients=this._toIngredientItems(this._rawIngredients)}}_toIngredientItems(e){const i=this.hass?.locale?.language??"en";return e.map(e=>{const t=!(!e.title||e.food);return{text:t?e.title:Ft(e,this._quantity,!0,i),selected:!t,isTitle:t}})}_toggleIngredient(e){this._ingredients=this._ingredients.map((i,t)=>t===e?{...i,selected:!i.selected}:i)}_toggleAll(){const e=this._selectables.every(e=>e.selected);this._ingredients=this._ingredients.map(i=>i.isTitle?i:{...i,selected:!e})}get _selectables(){return this._ingredients.filter(e=>!e.isTitle)}get _canSelectIngredients(){return!!this._shoppingEntityId}_deselectedIngredients(){return(this._rawIngredients??[]).filter((e,i)=>{const t=this._ingredients[i];return!!t&&!t.isTitle&&!t.selected})}render(){if(!this.open||!this.recipe)return F;const e=2===this._step||!this._canSelectIngredients,i=1===this._step?!!this._shoppingListId&&this._lists.length>0&&!this._loadingIngredients&&(!e||!!this.recipe.recipe_id&&!this._submitting):!!this.recipe.recipe_id&&!this._submitting&&!this._loadingIngredients&&!this._ingredientsError&&(0===this._ingredients.length||this._selectables.some(e=>e.selected));return H`
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
              `:F}
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
    `}_renderStep1(){return this._loadingLists?this.renderLoadingIndicator():this._listsError?H`<ha-alert alert-type="error">${this._listsError}</ha-alert>`:this._lists.length?H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:this._lists.map(e=>({value:e.id,label:e.name}))}}}
        .value=${this._shoppingListId}
        .label=${this.localize("dialog.select_shopping_list")}
        .required=${!1}
        @value-changed=${e=>{this._shoppingListId=e.detail.value,this._shoppingEntityId=this._lists.find(i=>i.id===e.detail.value)?.entity_id??""}}
      ></ha-selector>

      <ha-selector
        .hass=${this.hass}
        .selector=${{number:{min:.25,max:10,step:.25,mode:"slider"}}}
        .value=${this._quantity}
        .label=${this.localize("dialog.shopping_list_quantity")}
        .required=${!1}
        @value-changed=${e=>{this._quantity=e.detail.value}}
      ></ha-selector>
    `:H`<ha-alert alert-type="info">${this.localize("dialog.no_shopping_lists")}</ha-alert>`}_renderStep2(){if(this._loadingIngredients)return this.renderLoadingIndicator();if(this._ingredientsError)return H`<ha-alert alert-type="error">${this._ingredientsError}</ha-alert>`;if(!this._ingredients.length)return H`<ha-alert alert-type="info">${this.localize("dialog.no_ingredients")}</ha-alert>`;const e=this._selectables.every(e=>e.selected);return H`
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
    `}};Ns([ce({attribute:!1})],Us.prototype,"recipe",2),Ns([ce()],Us.prototype,"defaultShoppingListId",2),Ns([pe()],Us.prototype,"_step",2),Ns([pe()],Us.prototype,"_shoppingListId",2),Ns([pe()],Us.prototype,"_shoppingEntityId",2),Ns([pe()],Us.prototype,"_quantity",2),Ns([pe()],Us.prototype,"_lists",2),Ns([pe()],Us.prototype,"_loadingLists",2),Ns([pe()],Us.prototype,"_listsError",2),Ns([pe()],Us.prototype,"_loadingIngredients",2),Ns([pe()],Us.prototype,"_ingredients",2),Ns([pe()],Us.prototype,"_ingredientsError",2),Us=Ns([Qa("mealie-shopping-list-dialog")],Us);var Vs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,Bs=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?Hs(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&Vs(i,t,r),r};let Fs=class extends(ns(Ls)){constructor(){super(...arguments),this.config={},this.recipe=null,this.isFavorite=null,this.defaultShoppingListId=null,this._detail=null,this._servings=0,this._shoppingDialogOpen=!1,this._webviewCard=null,this._baseServings=0,this._loadToken=0,this._unsubscribers=[]}get _slug(){return this._detail?.slug??this.recipe?.slug}get _webUrl(){return this.recipeWebUrl(this.recipe)}get _isWebview(){return"webview"===this.config.recipe_view&&!!this._webUrl&&!!window.loadCardHelpers}connectedCallback(){super.connectedCallback(),this._unsubscribers=[wa(ma,({slug:e,rating:i})=>{this._detail?.slug===e&&(this._detail={...this._detail,rating:i})}),wa(fa,({slug:e,favorite:i})=>{this._favorites.get(e)!==i&&(this._favorites=new Map(this._favorites).set(e,i))})]}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[]}onOpen(){this._shoppingDialogOpen=!1}updated(e){super.updated(e),e.has("hass")&&this._webviewCard&&(this._webviewCard.hass=this.hass),this.open&&this.recipe&&(e.has("recipe")&&(this._detail=null,this._webviewCard=null),(e.has("open")||e.has("recipe"))&&(this._isWebview?this._webviewCard||this._loadWebview():this._detail||this.loadData()))}async _loadWebview(){const e=this._webUrl,i=window.loadCardHelpers;if(!e||!i)return;const t=this._loadToken+=1;this._loading=!0,this.error=null;try{const a=await i(),s=await a.createCardElement({type:"iframe",url:e,aspect_ratio:"125%"});if(t!==this._loadToken)return;s.hass=this.hass,this._webviewCard=s}catch(e){if(t!==this._loadToken)return;this.handleError(e)}finally{t===this._loadToken&&(this._loading=!1)}}async loadData(){if(!this.open||!this.recipe||!this.hass)return;const e=this.recipe.slug??this.recipe.recipe_id;if(!e)return;const i=this._loadToken+=1;this._loading=!0,this.error=null;try{const t=await ia(this.hass,e,this.configEntryId??void 0);if(i!==this._loadToken)return;this._detail=t,this._baseServings=t?.recipe_servings??0,this._servings=this._baseServings;const a=this._slug;a&&(this._favorites=new Map(this._favorites).set(a,this.isFavorite??this._favorites.get(a)??!1)),this._initialized=!0}catch(e){if(i!==this._loadToken)return;this.handleError(e)}finally{i===this._loadToken&&(this._loading=!1)}}_renderServingsControl(){return this._baseServings<=0?F:H`
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
    `}_renderIngredient(e){const i=this._baseServings>0?this._servings/this._baseServings:1;return H`<li>${Ft(e,i,!1,this.hass?.locale?.language??"en")}</li>`}_renderInstruction(e){return H`<li>${e.title?H`<strong>${e.title}: </strong>`:""}${e.text??""}</li>`}_renderDetail(){const e=this._detail,i=this.buildTimeRows(e);return H`
      <div class="dialog-body">
        ${this.renderRecipeImage(e,!!this.config?.show_image)}

        <div class="recipe-meta">
          ${this.renderFavoriteButton(e,this.config.show_favorite??!1,this.configEntryId)}
          ${this._renderInteractiveRating(this._detail,!!this.config?.show_rating,this.configEntryId)}
          ${this.renderServings(e.recipe_servings,!!this.config.show_servings)}
        </div>

        ${i.length?this.renderDetailsSection("mdi:clock-outline",this.localize("dialog.times"),this.renderTimeRows(i)):F}
        ${e.ingredients?.length?this.renderDetailsSection("mdi:food-apple",this.localize("dialog.ingredients"),H`${this._renderServingsControl()}
                <ul>
                  ${e.ingredients.map(e=>this._renderIngredient(e))}
                </ul>`):F}
        ${e.instructions?.length?this.renderDetailsSection("mdi:chef-hat",this.localize("dialog.instructions"),H`<ol>
                ${e.instructions.map(e=>this._renderInstruction(e))}
              </ol>`):F}
      </div>
    `}_renderWebview(){return this._webviewCard?H`<div class="recipe-webview">${this._webviewCard}</div>`:F}_renderOpenInMealieButton(){const e=this._webUrl;return e&&"webview"===this.config.recipe_view?H`
      <ha-icon-button slot="headerActionItems" .label=${this.localize("dialog.open_in_mealie")} @click=${()=>da(e)}>
        <ha-icon icon="mdi:open-in-new"></ha-icon>
      </ha-icon-button>
    `:F}render(){return this.open&&this.recipe?H`
      <ha-dialog .open=${!0} width="medium" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        ${this._renderOpenInMealieButton()}
        ${this._slug&&this.supports("shopping_list")?H`
              <ha-icon-button
                slot="headerActionItems"
                .label=${this.localize("dialog.add_to_shopping_list")}
                @click=${()=>{this._shoppingDialogOpen=!0}}
              >
                <ha-icon icon="mdi:cart-plus"></ha-icon>
              </ha-icon-button>
            `:F}
        ${this._loading?this.renderLoadingIndicator():F} ${this.error?H`<ha-alert alert-type="error">${this.error}</ha-alert>`:F}
        ${this._isWebview?this._renderWebview():this._detail?this._renderDetail():F}
      </ha-dialog>

      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._detail??this.recipe}
        .configEntryId=${this.configEntryId}
        .defaultShoppingListId=${this.defaultShoppingListId}
        ?open=${this._shoppingDialogOpen}
        @dialog-closed=${()=>{this._shoppingDialogOpen=!1}}
      ></mealie-shopping-list-dialog>
    `:F}};Bs([ce({attribute:!1})],Fs.prototype,"config",2),Bs([ce({attribute:!1})],Fs.prototype,"recipe",2),Bs([ce({attribute:!1})],Fs.prototype,"isFavorite",2),Bs([ce()],Fs.prototype,"defaultShoppingListId",2),Bs([pe()],Fs.prototype,"_detail",2),Bs([pe()],Fs.prototype,"_servings",2),Bs([pe()],Fs.prototype,"_shoppingDialogOpen",2),Bs([pe()],Fs.prototype,"_webviewCard",2),Fs=Bs([Qa("mealie-recipe-dialog")],Fs);var qs=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,Ks=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?Ws(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&qs(i,t,r),r};let Gs=class extends Ls{constructor(){super(...arguments),this.date=null,this._date="",this._entryType="dinner",this._title="",this._text="",this._handleAdd=()=>{this._date&&this._entryType&&this._title.trim()&&this.hass&&this.submit({run:()=>ta(this.hass,{date:this._date,entryType:this._entryType,noteTitle:this._title.trim(),noteText:this._text.trim()||void 0,configEntryId:this.configEntryId??void 0}),success:"dialog.note_added_success",errorKey:"error.error_adding_recipe",signal:ua})}}onOpen(){this._date=this.date??pa(new Date),this._entryType="dinner",this._title="",this._text=""}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_note_to_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
          ${this.renderTextSelector(this._title,"dialog.note_title",e=>this._title=e)}
          ${this.renderTextSelector(this._text,"dialog.note_text",e=>this._text=e,!0)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._date||!this._entryType||!this._title.trim()||this._submitting)}
      </ha-dialog>
    `:F}};Ks([ce()],Gs.prototype,"date",2),Ks([pe()],Gs.prototype,"_date",2),Ks([pe()],Gs.prototype,"_entryType",2),Ks([pe()],Gs.prototype,"_title",2),Ks([pe()],Gs.prototype,"_text",2),Gs=Ks([Qa("mealie-mealplan-note-dialog")],Gs);var Zs=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,Js=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?Qs(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&Zs(i,t,r),r};let Ys=class extends Ls{constructor(){super(...arguments),this.targetDate="",this._date="",this._entryType="dinner",this._handleAdd=()=>{this._date&&this._entryType&&this.hass&&this.submit({run:()=>{return e=this.hass,i={date:this._date,entryType:this._entryType,configEntryId:this.configEntryId??void 0},Kt("error.error_adding_recipe",()=>Qt(e,"set_random_mealplan",{date:i.date,entry_type:i.entryType},i.configEntryId));var e,i},success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:ua})}}onOpen(){this._date=this.targetDate||pa(new Date),this._entryType="dinner"}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("cards.random_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:F}};Js([ce()],Ys.prototype,"targetDate",2),Js([pe()],Ys.prototype,"_date",2),Js([pe()],Ys.prototype,"_entryType",2),Ys=Js([Qa("mealie-mealplan-random-dialog")],Ys);const Xs=(e,i,t)=>{const a=new Map;for(let s=i;s<=t;s++)a.set(e[s],s);return a},er=ge(class extends me{constructor(e){if(super(e),e.type!==he)throw Error("repeat() can only be used in text expressions")}dt(e,i,t){let a;void 0===t?t=i:void 0!==i&&(a=i);const s=[],r=[];let n=0;for(const i of e)s[n]=a?a(i,n):n,r[n]=t(i,n),n++;return{values:r,keys:s}}render(e,i,t){return this.dt(e,i,t).values}update(e,[i,t,a]){const s=(e=>e._$AH)(e),{values:r,keys:n}=this.dt(i,t,a);if(!Array.isArray(s))return this.ut=n,r;const o=this.ut??=[],l=[];let d,c,p=0,_=s.length-1,h=0,u=r.length-1;for(;p<=_&&h<=u;)if(null===s[p])p++;else if(null===s[_])_--;else if(o[p]===n[h])l[h]=ja(s[p],r[h]),p++,h++;else if(o[_]===n[u])l[u]=ja(s[_],r[u]),_--,u--;else if(o[p]===n[u])l[u]=ja(s[p],r[u]),Ca(e,l[u+1],s[p]),p++,u--;else if(o[_]===n[h])l[h]=ja(s[_],r[h]),Ca(e,s[p],s[_]),_--,h++;else if(void 0===d&&(d=Xs(n,h,u),c=Xs(o,p,_)),d.has(o[p]))if(d.has(o[_])){const i=c.get(n[h]),t=void 0!==i?s[i]:null;if(null===t){const i=Ca(e,s[p]);ja(i,r[h]),l[h]=i}else l[h]=ja(t,r[h]),Ca(e,s[p],t),s[i]=null;h++}else Oa(s[_]),_--;else Oa(s[p]),p++;for(;h<=u;){const i=Ca(e,l[u+1]);ja(i,r[h]),l[h++]=i}for(;p<=_;){const e=s[p++];null!==e&&Oa(e)}return this.ut=n,Pa(e,l),B}});var ir=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,ar=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?tr(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&ir(i,t,r),r};let sr=class extends ne{constructor(){super(...arguments),this.value="",this.placeholder=""}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent("search-changed",{detail:{value:e},bubbles:!1,composed:!1}))}_onInput(e){this._emit(e.target.value)}_clear(){this._emit("")}render(){return customElements.get("ha-input-search")?this._renderInputSearch():this._renderTextfield()}_renderInputSearch(){return H` <ha-input-search appearance="outlined" .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}></ha-input-search> `}_renderTextfield(){return H`
      <ha-textfield icon .iconTrailing=${!!this.value} .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}>
        <ha-icon slot="leadingIcon" icon="mdi:magnify"></ha-icon>
        ${this.value?H`
              <ha-icon-button slot="trailingIcon" .label=${this.placeholder} @click=${this._clear}>
                <ha-icon icon="mdi:close"></ha-icon>
              </ha-icon-button>
            `:F}
      </ha-textfield>
    `}};sr.styles=r`
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
  `,ar([ce()],sr.prototype,"value",2),ar([ce()],sr.prototype,"placeholder",2),sr=ar([Qa("mealie-recipe-search")],sr);var rr=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,or=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?nr(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&rr(i,t,r),r};const lr="mealie-card:add-recipe-view";let dr=class extends Ls{constructor(){super(...arguments),this.date=null,this.imageBaseUrls=[],this.showImage=!1,this._date="",this._entryType="dinner",this._recipes=[],this._recipeId="",this._searching=!1,this._view=function(){try{return"grid"===localStorage.getItem(lr)?"grid":"list"}catch{return"list"}}(),this._searchDebounce=null,this._searchRequest=0,this._toggleView=()=>{this._view="list"===this._view?"grid":"list",function(e){try{localStorage.setItem(lr,e)}catch{return}}(this._view)},this._handleAdd=()=>{const e=this._recipeId;e&&this._date&&this._entryType&&this.hass&&this.submit({run:()=>ta(this.hass,{date:this._date,entryType:this._entryType,recipeId:e,configEntryId:this.configEntryId??void 0}),success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:ua})}}onOpen(){this._date=this.date??pa(new Date),this._entryType="dinner",this._recipes=[],this._recipeId="",this._cancelPendingSearch(),this._search("")}disconnectedCallback(){super.disconnectedCallback(),this._cancelPendingSearch()}_cancelPendingSearch(){this._searchDebounce&&(clearTimeout(this._searchDebounce),this._searchDebounce=null)}_onSearch(e){this._cancelPendingSearch(),this._searchDebounce=setTimeout(()=>{this._searchDebounce=null,this._search(e.trim())},300)}async _search(e){const i=++this._searchRequest;this._searching=!0;let t=[];try{t=await ea(this.hass,{configEntryId:this.configEntryId??void 0,resultLimit:30,search:e||void 0})}catch(e){this.open&&i===this._searchRequest&&za(this,"hass-notification",{message:this.localizeError(e)})}i===this._searchRequest&&(this._searching=!1,this._showRecipes(t))}_showRecipes(e){this._recipes=function(e){return e.filter(e=>!!e.recipe_id)}(e),this._recipes.some(e=>e.recipe_id===this._recipeId)||(this._recipeId="")}_renderViewToggle(){if(!this.showImage)return F;const e="list"===this._view;return H`
      <ha-icon-button .label=${this.localize(e?"dialog.view_as_grid":"dialog.view_as_list")} @click=${this._toggleView}>
        <ha-icon icon=${e?"mdi:view-grid-outline":"mdi:view-list-outline"}></ha-icon>
      </ha-icon-button>
    `}_renderRecipeSelector(){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"list",options:(e=this._recipes,e.map(e=>({value:e.recipe_id,label:e.name})))}}}
        .value=${this._recipeId}
        .label=${this.localize("dialog.select_recipe")}
        .required=${!1}
        @value-changed=${e=>{this._recipeId=e.detail.value}}
      ></ha-selector>
    `;var e}_renderThumbnail(e){const i=rs(this.hass,e,{urls:this.imageBaseUrls,variant:"tiny",containerClass:"recipe-thumb",imgClass:"recipe-thumb-img"});return i===F?H`<div class="recipe-thumb image-error"></div>`:i}_renderRecipeOption(e){const i=e.recipe_id===this._recipeId;return H`
      <button
        type="button"
        role="radio"
        class="recipe-option ${i?"selected":""}"
        aria-checked=${i?"true":"false"}
        @click=${()=>{this._recipeId=e.recipe_id}}
      >
        ${this._renderThumbnail(e)}
        <span class="recipe-option-name">${e.name}</span>
      </button>
    `}_renderRecipeOptions(){return H`
      <div class="recipe-options-${this._view}" role="radiogroup" aria-label=${this.localize("dialog.select_recipe")}>
        ${er(this._recipes,e=>e.recipe_id,e=>this._renderRecipeOption(e))}
      </div>
    `}_renderRecipePicker(){return this._recipes.length?H`
      <div class="recipe-picker" aria-busy=${this._searching?"true":"false"}>
        ${this.showImage?this._renderRecipeOptions():this._renderRecipeSelector()}
      </div>
    `:this._searching?this.renderLoadingIndicator():H`<ha-alert alert-type="info">${this.localize("common.no_recipe")}</ha-alert>`}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="medium" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_recipe_to_mealplan")}</span>

        <div class="dialog-body">
          <div class="card-toolbar">
            <mealie-recipe-search
              .placeholder=${this.localize("common.search_placeholder")}
              @search-changed=${e=>this._onSearch(e.detail.value)}
            ></mealie-recipe-search>
            ${this._renderViewToggle()}
          </div>
          ${this._renderRecipePicker()} ${this.renderDateSelector(this._date,e=>this._date=e)}
          ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._recipeId||!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:F}};or([ce()],dr.prototype,"date",2),or([ce({attribute:!1})],dr.prototype,"imageBaseUrls",2),or([ce({type:Boolean})],dr.prototype,"showImage",2),or([pe()],dr.prototype,"_date",2),or([pe()],dr.prototype,"_entryType",2),or([pe()],dr.prototype,"_recipes",2),or([pe()],dr.prototype,"_recipeId",2),or([pe()],dr.prototype,"_searching",2),or([pe()],dr.prototype,"_view",2),dr=or([Qa("mealie-mealplan-add-recipe-dialog")],dr);var cr=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,_r=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?pr(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&cr(i,t,r),r};let hr=class extends Ls{constructor(){super(...arguments),this.planRecipe=null,this._date="",this._entryType="dinner",this._title="",this._text="",this._handleSave=()=>{if(!(this.planRecipe&&this._date&&this._entryType&&this.hass))return;const e={configEntryId:this.configEntryId??void 0,mealplanId:String(this.planRecipe.mealplan_id),date:this._date,entryType:this._entryType};if(this._isNote){const i=this._title.trim();if(!i)return;return void this._save({...e,noteTitle:i,noteText:this._text.trim()||void 0})}const i=this.planRecipe.recipe?.recipe_id;i&&this._save({...e,recipeId:i})}}get _isNote(){return!this.planRecipe?.recipe}onOpen(){this.planRecipe&&(this._date=this.planRecipe.mealplan_date,this._entryType=this.planRecipe.entry_type,this._title=this.planRecipe.title??"",this._text=this.planRecipe.description??"")}_save(e){this.submit({run:()=>function(e,i){return Kt("error.error_updating_mealplan",()=>Qt(e,"update_mealplan",{mealplan_id:i.mealplanId,...Xt(i)},i.configEntryId))}(this.hass,e),success:"dialog.mealplan_updated_success",errorKey:"error.error_updating_mealplan",signal:ua})}render(){if(!this.open||!this.planRecipe)return F;const e=this._isNote?"":H`<span slot="headerTitle">${this.planRecipe.recipe?.name??""}</span>`;return H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        ${e}
        <span slot="headerSubtitle">${this.localize("dialog.edit_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
          ${this._isNote?H`
                ${this.renderTextSelector(this._title,"dialog.note_title",e=>this._title=e)}
                ${this.renderTextSelector(this._text,"dialog.note_text",e=>this._text=e,!0)}
              `:""}
        </div>

        ${this.renderPrimaryFooter("dialog.save",this._handleSave,!this._date||!this._entryType||(this._isNote?!this._title.trim():!this.planRecipe.recipe?.recipe_id)||this._submitting)}
      </ha-dialog>
    `}};_r([ce({attribute:!1})],hr.prototype,"planRecipe",2),_r([pe()],hr.prototype,"_date",2),_r([pe()],hr.prototype,"_entryType",2),_r([pe()],hr.prototype,"_title",2),_r([pe()],hr.prototype,"_text",2),hr=_r([Qa("mealie-mealplan-edit-dialog")],hr);var ur=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,mr=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?gr(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&ur(i,t,r),r};let fr=class extends Ls{constructor(){super(...arguments),this.entry=null,this._handleDelete=()=>{this.entry&&this.hass&&this.submit({run:()=>{return e=this.hass,i=String(this.entry.id),t=this.configEntryId??void 0,Kt("error.error_deleting_mealplan",()=>Qt(e,"delete_mealplan",{mealplan_id:i},t));var e,i,t},success:"dialog.mealplan_deleted_success",errorKey:"error.error_deleting_mealplan",signal:ua})}}render(){return this.open&&this.entry?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.entry.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.confirm_delete_title")}</span>

        <div class="dialog-body-recipe">
          <span class="dialog-type">${Ht(this.entry.entryType,this.hass?.locale?.language)}</span>
          <span class="dialog-label">${ha(this.entry.date,this.hass)}</span>
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
    `:F}};mr([ce({attribute:!1})],fr.prototype,"entry",2),fr=mr([Qa("mealie-mealplan-delete-dialog")],fr);var vr=Object.defineProperty,yr=(e,i,t,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(i,t,r)||r);return r&&vr(i,t,r),r};const br=["view_recipe","add_to_shopping_list","edit_mealplan","delete_mealplan"];class wr extends ps{constructor(){super(...arguments),this.recipes=[],this._dialogRecipe=null,this._confirmDeleteEntry=null,this._noteDialogDate=null,this._randomDialogDate=null,this._addRecipeDate=null,this._editDialogEntry=null,this._shoppingRecipe=null}get _showAddRecipeButton(){return this.config.show_add_recipe_button??!0}get _showRandomButton(){return this.supports("random_mealplan")&&(this.config.show_random_button??!0)}get _showNoteButton(){return this.config.show_note_button??!0}get _dateRange(){const{start:e,count:i}=function(e,i){const t=Math.max(1,Math.floor(i||1));if("number"==typeof e)return{start:Math.max(0,Math.floor(e)),count:t};if("string"!=typeof e)return{start:0,count:t};const a=e.trim(),s=_a.exec(a);if(s){const e=Number(s[1]),i=Number(s[2]);return{start:Math.min(e,i),count:Math.min(31,Math.abs(i-e)+1)}}return/^\d{1,3}$/.test(a)?{start:Number(a),count:t}:{start:0,count:t}}(this.config.day_offset,this.config.days_to_show??1);return function(e,i=0){const t=Math.max(1,Math.floor(e)),a=Math.floor(i),s=new Date;return Array.from({length:t},(e,i)=>pa(new Date(s.getFullYear(),s.getMonth(),s.getDate()+a+i)))}(i,e)}get _daysHorizontal(){return"horizontal"===this.config.days_layout}get _recipesHorizontal(){return"horizontal"===this.config.recipes_layout}_columnStyle(e,i,t){return e?ye({[i]:String(Math.max(1,Math.floor(t??2)))}):F}_groupByDate(){const e=new Map;for(const i of this.recipes){const t=e.get(i.mealplan_date);t?t.push(i):e.set(i.mealplan_date,[i])}return e}_scheduleMidnightRefresh(){this._clearMidnightTimer();const e=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,5,0);this._midnightTimer=setTimeout(()=>{this._reload(),this._scheduleMidnightRefresh()},i.getTime()-e.getTime())}_clearMidnightTimer(){this._midnightTimer&&(clearTimeout(this._midnightTimer),this._midnightTimer=void 0)}watchedEntityIds(){return this.findMealieEntities("calendar")}itemCount(){return this.recipes.length}hasOpenDialog(){return!!(this._dialogRecipe||this._shoppingRecipe||this._editDialogEntry||this._confirmDeleteEntry||this._noteDialogDate||this._randomDialogDate||this._addRecipeDate)}refreshSignal(){return ua}subscribeExtras(){return[wa(ma,({slug:e,rating:i})=>{this.recipes=this.recipes.map(t=>t.recipe?.slug===e?{...t,recipe:{...t.recipe,rating:i}}:t)})]}connectedCallback(){super.connectedCallback(),this._scheduleMidnightRefresh()}disconnectedCallback(){super.disconnectedCallback(),this._clearMidnightTimer()}setConfig(e){this.config=function(e){return Te(e,Ee)}(e),this._reload()}static getConfigElement(){return document.createElement("mealie-card-editor")}static getStubConfig(){return{...Ee}}async fetchData(){const e=this._dateRange,i=await(t=this.hass,a={configEntryId:this.config.config_entry_id??void 0,startDate:e[0],endDate:e[e.length-1]},Kt("error.error_loading",async()=>{const e=await Jt(t,"get_mealplan",{start_date:a.startDate,end_date:a.endDate},a.configEntryId);return(e?.mealplan??[]).sort((e,i)=>Wt(e.entry_type)-Wt(i.entry_type))}));var t,a;const s=this.config.entry_types;this.recipes=s?.length?i.filter(e=>s.includes(e.entry_type)):i}render(){return this.hass&&this.config?this.config.config_entry_id?H`<ha-card>${this._renderContent()} ${this._renderDialogs()}</ha-card>`:this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}_renderContent(){if(this.error)return H`<div class="card-content">${this.renderErrorAlert()}</div>`;if((this._loading||!this._initialized)&&!this.recipes.length)return H`<div class="card-content">${this.renderLoadingIndicator()}</div>`;const e=this._groupByDate();return H`
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
        .imageBaseUrls=${la(this.config)}
        .showImage=${this.config.show_image}
        ?open=${!!this._addRecipeDate}
        @dialog-closed=${()=>{this._addRecipeDate=null}}
      ></mealie-mealplan-add-recipe-dialog>
      <mealie-mealplan-edit-dialog
        .hass=${this.hass}
        .planRecipe=${this._editDialogEntry}
        .configEntryId=${this.config.config_entry_id}
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
        <div class="date-label">${ha(e,this.hass)}</div>
        <div class="header-actions">${this.renderActionsMenu(this._dayActions(e),"cards.day_actions")}</div>
      </div>
    `}_dayActions(e){const i=[];return this._showAddRecipeButton&&i.push({labelKey:"dialog.add_recipe_to_mealplan",icon:"mdi:calendar-plus",onClick:()=>{this._addRecipeDate=e}}),this._showRandomButton&&i.push({labelKey:"cards.random_mealplan",icon:"mdi:dice-6",onClick:()=>{this._randomDialogDate=e}}),this._showNoteButton&&i.push({labelKey:"dialog.add_note_to_mealplan",icon:"mdi:note-plus-outline",onClick:()=>{this._noteDialogDate=e}}),i}_planHandlers(e){const i=e.recipe;return{view_recipe:i?()=>{this.openRecipe(i)&&(this._dialogRecipe=i)}:void 0,add_to_shopping_list:i&&this.supports("shopping_list")?()=>{this._shoppingRecipe=i}:void 0,edit_mealplan:this.supports("edit_mealplan")?()=>{this._editDialogEntry=e}:void 0,delete_mealplan:this.supports("delete_mealplan")?()=>{this._confirmDeleteEntry={id:e.mealplan_id,name:e.recipe?.name??e.title??"",entryType:e.entry_type,date:e.mealplan_date}}:void 0}}_renderRecipeCard(e){const i=this._planHandlers(e),t=bs(i,this.config),a=vs(gs(br,this.config),i);return H`
      <div class="recipe-card ${Wa(t)?"pressable":""}">
        ${this.renderPressSurface(e.recipe?.name??e.title,t)}
        <div class="recipe-card-body">
          <div class="recipe-type">${Ht(e.entry_type,this.hass?.locale?.language)}</div>
          ${e.recipe?this._renderRecipeWithData(e.recipe,a):this._renderRecipeWithoutData(e,a)}
        </div>
      </div>
    `}_renderRecipeWithData(e,i){return H`
      ${this.renderRecipeMedia(e,this.config.show_image,i)}
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      <div class="recipe-meta">
        ${this._renderInteractiveRating(e,this.config.show_rating,this.config.config_entry_id)}
        ${this.renderServings(e.recipe_servings,this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
      ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
    `}_renderRecipeWithoutData(e,i){return H`
      ${this.renderRecipeMedia(e,!1,i)}
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      ${this.renderRecipeDescription(e.description??"",!0)}
    `}}yr([pe()],wr.prototype,"config"),yr([pe()],wr.prototype,"recipes"),yr([pe()],wr.prototype,"_dialogRecipe"),yr([pe()],wr.prototype,"_confirmDeleteEntry"),yr([pe()],wr.prototype,"_noteDialogDate"),yr([pe()],wr.prototype,"_randomDialogDate"),yr([pe()],wr.prototype,"_addRecipeDate"),yr([pe()],wr.prototype,"_editDialogEntry"),yr([pe()],wr.prototype,"_shoppingRecipe");var $r=Object.getOwnPropertyDescriptor;const zr=["view_recipe","add_to_mealplan","add_to_shopping_list"],kr={recipe_tap_action:$e,recipe_double_tap_action:Ae,recipe_hold_action:ze};let xr=class extends Rs{get _favoritesSupported(){return xa(this.hass,"favorites")}renderInfosDisplayFields(){return H`
      ${super.renderInfosDisplayFields()}
      ${this._favoritesSupported?ws(!!this.config.show_favorite,this.localize("editor.show_favorite"),e=>this._setValue("show_favorite",e)):F}
    `}render(){return this.hass&&this.config?H`
      ${this.renderTopForm()} ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()}
      ${this.renderRecipeActionsPanel(zr,kr)} ${this.renderRecipeViewOptions()} ${this.renderLanguageOptions()}

      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${e=this.hass,i=this.config.result_limit,t=this.localize("editor.number_of_recipes"),a=1,s=100,r=e=>this._setValue("result_limit",e),H`
    <ha-selector
      .hass=${e}
      .selector=${{number:{min:a,max:s,mode:"box",step:1}}}
      .value=${i??a}
      .label=${t}
      .required=${!1}
      @value-changed=${e=>r(e.detail.value)}
    ></ha-selector>
  `}
          ${ws(!!this.config.show_search,this.localize("editor.show_search"),e=>this._setValue("show_search",e))}
          ${this._favoritesSupported?ws(!!this.config.show_favorites_only,this.localize("editor.show_favorites_only"),e=>this._setValue("show_favorites_only",e)):F}
          ${ws(!!this.config.show_import_button,this.localize("editor.show_import_button"),e=>this._setValue("show_import_button",e))}
        </div>
      </ha-expansion-panel>
      ${this.renderVersion()}
    `:this.renderEditorLoading();var e,i,t,a,s,r}};xr=((e,i,t,a)=>{for(var s,r=a>1?void 0:a?$r(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(r)||r);return r})([Qa("mealie-recipe-card-editor")],xr);var Ar=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Rr=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?Mr(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&Ar(i,t,r),r};let Ir=class extends Ls{constructor(){super(...arguments),this.recipe=null,this.imageBaseUrls=[],this._date="",this._entryType="dinner",this._imageMissing=!1,this._handleAdd=()=>{const e=this.recipe?.recipe_id;e&&this._date&&this._entryType&&this.hass&&this.submit({run:()=>ta(this.hass,{date:this._date,entryType:this._entryType,recipeId:e,configEntryId:this.configEntryId??void 0}),success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:ua})}}onOpen(){this._date=pa(new Date),this._entryType="dinner",this._imageMissing=!1}_renderImage(){return!this.recipe||this._imageMissing?F:rs(this.hass,this.recipe,{urls:this.imageBaseUrls,variant:"original",containerClass:"detail-image",imgClass:"detail-image-img",onImageMissing:()=>{this._imageMissing=!0}})}render(){return this.recipe?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.add_recipe_to_mealplan")}</span>

        <div class="dialog-body">
          ${this._renderImage()} ${this.renderDateSelector(this._date,e=>this._date=e)}
          ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this.recipe.recipe_id||!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:F}};Rr([ce({attribute:!1})],Ir.prototype,"recipe",2),Rr([ce({attribute:!1})],Ir.prototype,"imageBaseUrls",2),Rr([pe()],Ir.prototype,"_date",2),Rr([pe()],Ir.prototype,"_entryType",2),Rr([pe()],Ir.prototype,"_imageMissing",2),Ir=Rr([Qa("mealie-mealplan-dialog")],Ir);var Er=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,Tr=(e,i,t,a)=>{for(var s,r=a>1?void 0:a?Sr(i,t):i,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(i,t,r):s(r))||r);return a&&r&&Er(i,t,r),r};let Dr=class extends Ls{constructor(){super(...arguments),this._url="",this._includeTags=!1,this._importedName=null,this._handleImport=()=>{this._url.trim()&&this.hass&&(this._importedName=null,this.submit({run:async()=>{const e=await(i=this.hass,t={url:this._url.trim(),includeTags:this._includeTags,configEntryId:this.configEntryId??void 0},Kt("error.error_loading",async()=>Yt(await Jt(i,"import_recipe",{url:t.url,...t.includeTags&&{include_tags:!0}},t.configEntryId))));var i,t;this._importedName=e?.name??e?.slug??""},success:()=>`${this.localize("dialog.recipe_imported_success")}${this._importedName?`: ${this._importedName}`:""}`,errorKey:"error.error_loading",signal:ga,closeOnSuccess:!1}))}}onOpen(){this._url="",this._includeTags=!1,this._importedName=null}render(){return this.open?H`
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

          ${this._importedName?H`<ha-alert alert-type="success">${this.localize("dialog.recipe_imported_success")}: <strong>${this._importedName}</strong></ha-alert>`:F}
        </div>

        ${this.renderPrimaryFooter("dialog.import",this._handleImport,!this._url.trim()||this._submitting)}
      </ha-dialog>
    `:F}};Tr([pe()],Dr.prototype,"_url",2),Tr([pe()],Dr.prototype,"_includeTags",2),Tr([pe()],Dr.prototype,"_importedName",2),Dr=Tr([Qa("mealie-recipe-import-dialog")],Dr);var Cr=Object.defineProperty,jr=(e,i,t,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(i,t,r)||r);return r&&Cr(i,t,r),r};const Lr=["add_to_mealplan","add_to_shopping_list","view_recipe"];class Pr extends ps{constructor(){super(...arguments),this.recipes=[],this._mealplanRecipe=null,this._dialogRecipe=null,this._searchQuery="",this._importDialogOpen=!1,this._shoppingRecipe=null,this._searchDebounce=null,this._favoriteRecipesCache=null,this._favoriteIdsCache=null}refreshSignal(){return ga}subscribeExtras(){return[wa(ma,({slug:e,rating:i})=>{this.recipes=this.recipes.map(t=>t.slug===e?{...t,rating:i}:t)}),wa(fa,({slug:e,favorite:i})=>{this._favoriteIdsCache=null,this._favorites.get(e)!==i&&(this._favorites=new Map(this._favorites).set(e,i)),this.config?.show_favorites_only&&this._favoriteRecipesCache&&(this.recipes=this._visibleFavoriteRecipes())})]}disconnectedCallback(){super.disconnectedCallback(),this._searchDebounce&&(clearTimeout(this._searchDebounce),this._searchDebounce=null)}setConfig(e){this.config=function(e){return Te(e,Se)}(e),this._reload()}watchedEntityIds(){return this.findMealieEntities("sensor").filter(e=>e.endsWith("_recipes"))}itemCount(){return this.recipes.length}hasOpenDialog(){return!!this._dialogRecipe||!!this._mealplanRecipe||!!this._shoppingRecipe||this._importDialogOpen}_invalidateFavoriteCaches(){this._favoriteRecipesCache=null,this._favoriteIdsCache=null}_reload(){this._invalidateFavoriteCaches(),super._reload()}async fetchData(){this.recipes=this.config.show_favorites_only&&this.supports("favorites")?await this._loadFavoriteRecipes():await this._loadAllRecipes()}async _favoriteIds(){if(!this.supports("favorites"))return new Set;if(!this._favoriteIdsCache){const t=await(e=this.hass,i=this.config.config_entry_id??void 0,Kt("error.error_loading",async()=>{const t=await Jt(e,"get_recipe_favorites",{},i);return t?.favorites??[]}));this._favoriteIdsCache=new Set(t.map(e=>e.recipe_id))}var e,i;return this._favoriteIdsCache}async _loadFavoriteRecipes(){if(!this._favoriteRecipesCache){const e=await this._favoriteIds(),i=await ea(this.hass,{configEntryId:this.config.config_entry_id??void 0,resultLimit:9999});this._favoriteRecipesCache=i.filter(i=>e.has(i.recipe_id??"")),this.config.show_favorite&&(this._favorites=new Map(this._favoriteRecipesCache.map(e=>[e.slug,!0])))}return this._visibleFavoriteRecipes()}_visibleFavoriteRecipes(){const e=this._favoriteRecipesCache??[];return this._applyFavoriteSearch(e.filter(e=>!1!==this._favorites.get(e.slug)))}async _loadAllRecipes(){const e=this.config.show_favorite&&this.supports("favorites"),[i,t]=await Promise.all([ea(this.hass,{configEntryId:this.config.config_entry_id??void 0,resultLimit:this.config.result_limit??we,search:this._searchQuery||void 0}),e?this._favoriteIds():null]);return t&&(this._favorites=new Map(i.map(e=>[e.slug,t.has(e.recipe_id??"")]))),i}_applyFavoriteSearch(e){const i=this._searchQuery.toLowerCase();return i?e.filter(e=>e.name?.toLowerCase().includes(i)):e}_onSearch(e){this._searchQuery=e,this.config.show_favorites_only&&this._favoriteRecipesCache?this.recipes=this._visibleFavoriteRecipes():(this._searchDebounce&&clearTimeout(this._searchDebounce),this._searchDebounce=setTimeout(()=>this._reload(),300))}static getConfigElement(){return document.createElement("mealie-recipe-card-editor")}static getStubConfig(){return{...Se}}render(){return this.config?this.config.config_entry_id?H`${this._renderCardShell(this._renderContent())} ${this._renderDialogs()}`:this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}_renderContent(){if(this.error)return this.renderErrorAlert();const e=!!this.recipes?.length;return!this._loading&&this._initialized||e?e?H`<div class="recipes-wrapper" aria-busy=${this._loading?"true":"false"}>
      <div class="recipes-container">${this.recipes.map(e=>this._renderRecipe(e))}</div>
    </div>`:H`<ha-alert alert-type="info">${this.localize("common.no_recipe")}</ha-alert>`:this.renderLoadingIndicator()}_renderDialogs(){return H`
      <mealie-mealplan-dialog
        .hass=${this.hass}
        .recipe=${this._mealplanRecipe}
        .configEntryId=${this.config.config_entry_id}
        .imageBaseUrls=${la(this.config)}
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
        <div class="card-content">${this._renderToolbar()} ${e}</div>
      </ha-card>
    `}_renderToolbar(){const e=this.config.show_search??!1,i=this.config.show_import_button&&this.supports("import_recipe");return e||i?H`
      <div class="card-toolbar">
        ${e?H`<mealie-recipe-search
              .value=${this._searchQuery}
              .placeholder=${this.localize("common.search_placeholder")}
              @search-changed=${e=>this._onSearch(e.detail.value)}
            ></mealie-recipe-search>`:F}
        ${i?H`<ha-icon-button
                    .label=${this.localize("dialog.import_recipe")}
                    @click=${()=>{this._importDialogOpen=!0}}
                  >
                    <ha-icon icon="mdi:cloud-download"></ha-icon>
                  </ha-icon-button>`:F}
      </div>
    `:F}_recipeHandlers(e){return{add_to_mealplan:()=>{this._mealplanRecipe=e},add_to_shopping_list:this.supports("shopping_list")?()=>{this._shoppingRecipe=e}:void 0,view_recipe:()=>{this.openRecipe(e)&&(this._dialogRecipe=e)}}}_renderRecipeInfo(e){return H`
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      <div class="recipe-meta">
        ${this.renderFavoriteButton(e,this.config.show_favorite??!1,this.config.config_entry_id)}
        ${this._renderInteractiveRating(e,this.config.show_rating,this.config.config_entry_id)}
        ${this.renderServings(e.recipe_servings,this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
    `}_renderRecipe(e){const i=this._recipeHandlers(e),t=bs(i,this.config);return H`
      <div class="recipe-card ${Wa(t)?"pressable":""}">
        ${this.renderPressSurface(e.name,t)}
        ${this.renderRecipeMedia(e,this.config.show_image,vs(gs(Lr,this.config),i))}
        ${this._renderRecipeInfo(e)}
        ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
      </div>
    `}}jr([pe()],Pr.prototype,"config"),jr([pe()],Pr.prototype,"recipes"),jr([pe()],Pr.prototype,"_mealplanRecipe"),jr([pe()],Pr.prototype,"_dialogRecipe"),jr([pe()],Pr.prototype,"_searchQuery"),jr([pe()],Pr.prototype,"_importDialogOpen"),jr([pe()],Pr.prototype,"_shoppingRecipe"),customElements.get("mealie-mealplan-card")||customElements.define("mealie-mealplan-card",wr),customElements.get("mealie-recipe-card")||customElements.define("mealie-recipe-card",Pr),window.customCards=window.customCards||[];[{type:"mealie-mealplan-card",name:Lt("en","cards.name_mealplan"),description:Lt("en","cards.description_mealplan"),configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"},{type:"mealie-recipe-card",name:Lt("en","cards.name_recipes"),description:Lt("en","cards.description_recipes"),configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"}].forEach(e=>{window.customCards?.some(i=>i.type===e.type)||window.customCards?.push(e)}),console.info(`%c MEALIE-CARD %c ${ks}`,"color: white; background: orange; font-weight: 700;","color: orange; background: white; font-weight: 700;");export{wr as MealieMealplanCard,Pr as MealieRecipeCard};
