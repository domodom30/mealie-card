const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let r=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=a.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&a.set(i,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new r(a,e,i)},n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:_}=Object,h=globalThis,u=h.trustedTypes,g=u?u.emptyScript:"",m=h.reactiveElementPolyfillSupport,f=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!o(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&l(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:r}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const s=a?.call(this);r?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,a)=>{if(t)i.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of a){const a=document.createElement("style"),r=e.litNonce;void 0!==r&&a.setAttribute("nonce",r),a.textContent=t.cssText,i.appendChild(a)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a;const s=r.fromAttribute(t,e.type);this[a]=s??this._$Ej?.get(a)??s,this._$Em=null}}requestUpdate(e,t,i,a=!1,r){if(void 0!==e){const s=this.constructor;if(!1===a&&(r=this[e]),i??=s.getPropertyOptions(e),!((i.hasChanged??y)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:r},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,m?.({ReactiveElement:w}),(h.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=e=>e,x=$.trustedTypes,z=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+T,I=`<${M}>`,S=document,R=()=>S.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,C="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,P=/>/g,O=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,U=/"/g,V=/^(?:script|style|textarea|title)$/i,H=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,K=S.createTreeWalker(S,129);function W(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}class G{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let r=0,s=0;const n=e.length-1,o=this.parts,[l,c]=((e,t)=>{const i=e.length-1,a=[];let r,s=2===t?"<svg>":3===t?"<math>":"",n=j;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===j?"!--"===l[1]?n=L:void 0!==l[1]?n=P:void 0!==l[2]?(V.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=O):void 0!==l[3]&&(n=O):n===O?">"===l[0]?(n=r??j,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?O:'"'===l[3]?U:N):n===U||n===N?n=O:n===L||n===P?n=j:(n=O,r=void 0);const p=n===O&&e[t+1].startsWith("/>")?" ":"";s+=n===j?i+I:c>=0?(a.push(o),i.slice(0,c)+A+i.slice(c)+T+p):i+T+(-2===c?t:p)}return[W(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]})(e,t);if(this.el=G.createElement(l,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=K.nextNode())&&o.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(A)){const t=c[s++],i=a.getAttribute(e).split(T),n=/([.?@])?(.*)/.exec(t);o.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?X:"?"===n[1]?ee:"@"===n[1]?te:Y}),a.removeAttribute(e)}else e.startsWith(T)&&(o.push({type:6,index:r}),a.removeAttribute(e));if(V.test(a.tagName)){const e=a.textContent.split(T),t=e.length-1;if(t>0){a.textContent=x?x.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],R()),K.nextNode(),o.push({type:2,index:++r});a.append(e[t],R())}}}else if(8===a.nodeType)if(a.data===M)o.push({type:2,index:r});else{let e=-1;for(;-1!==(e=a.data.indexOf(T,e+1));)o.push({type:7,index:r}),e+=T.length-1}r++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,a){if(t===F)return t;let r=void 0!==a?i._$Co?.[a]:i._$Cl;const s=E(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e),r._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=r:i._$Cl=r),void 0!==r&&(t=Z(e,r._$AS(e,t.values),r,a)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??S).importNode(t,!0);K.currentNode=a;let r=K.nextNode(),s=0,n=0,o=i[0];for(;void 0!==o;){if(s===o.index){let t;2===o.type?t=new J(r,r.nextSibling,this,e):1===o.type?t=new o.ctor(r,o.name,o.strings,this,e):6===o.type&&(t=new ie(r,this,e)),this._$AV.push(t),o=i[++n]}s!==o?.index&&(r=K.nextNode(),s++)}return K.currentNode=S,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),E(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new Q(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new G(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const r of e)a===t.length?t.push(i=new J(this.O(R()),this.O(R()),this,this.options)):i=t[a],i._$AI(r),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(e,t=this,i,a){const r=this.strings;let s=!1;if(void 0===r)e=Z(this,e,t,0),s=!E(e)||e!==this._$AH&&e!==F,s&&(this._$AH=e);else{const a=e;let n,o;for(e=r[0],n=0;n<r.length-1;n++)o=Z(this,a[i+n],t,n),o===F&&(o=this._$AH[n]),s||=!E(o)||o!==this._$AH[n],o===B?e=B:e!==B&&(e+=(o??"")+r[n+1]),this._$AH[n]=o}s&&!a&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class ee extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class te extends Y{constructor(e,t,i,a,r){super(e,t,i,a,r),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??B)===F)return;const i=this._$AH,a=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==B&&(i===B||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ae={I:J},re=$.litHtmlPolyfillSupport;re?.(G,J),($.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;let ne=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let r=a._$litPart$;if(void 0===r){const e=i?.renderBefore??null;a._$litPart$=r=new J(t.insertBefore(R(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};ne._$litElement$=!0,ne.finalized=!0,se.litElementHydrateSupport?.({LitElement:ne});const oe=se.litElementPolyfillSupport;oe?.({LitElement:ne}),(se.litElementVersions??=[]).push("4.2.2");const le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ce=(e=le,t,i)=>{const{kind:a,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,r,e,!0,i)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const r=this[a];t.call(this,i),this.requestUpdate(a,r,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};function de(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function pe(e){return de({...e,state:!0,attribute:!1})}const _e=1,he=2,ue=6,ge=e=>(...t)=>({_$litDirective$:e,values:t});let me=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const fe="important",ve=" !"+fe,ye=ge(class extends me{constructor(e){if(super(e),e.type!==_e||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const a=e[i];return null==a?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const a=t[e];if(null!=a){this.ft.add(e);const t="string"==typeof a&&a.endsWith(ve);e.includes("-")||t?i.setProperty(e,t?a.slice(0,-11):a,t?fe:""):i[e]=a}}return F}}),be="mealie",we=9999,$e="view_recipe",ke="add_to_mealplan",xe="view_recipe",ze="edit_mealplan",Ae="none",Te={show_image:!1,show_rating:!1,show_servings:!1,show_prep_time:!0,show_total_time:!0,show_perform_time:!0,show_description:!1},Me="home",Ie={url:"",recipe_view:"dialog",mealie_group_slug:Me},Se={type:"custom:mealie-mealplan-card",entry_types:[],recipes_layout:"vertical",days_layout:"vertical",day_offset:0,recipes_columns:2,days_columns:2,show_add_recipe_button:!0,show_random_button:!0,show_note_button:!0,show_recipe_menu:!0,show_view_recipe_button:!0,show_shopping_list_button:!0,show_edit_mealplan_button:!0,show_delete_mealplan_button:!0,default_shopping_list_id:"",recipe_tap_action:xe,recipe_hold_action:ze,recipe_double_tap_action:Ae,...Te,...Ie},Re={type:"custom:mealie-recipe-card",result_limit:we,show_search:!1,show_favorites_only:!1,show_favorite:!1,show_import_button:!1,show_recipe_menu:!0,show_view_recipe_button:!0,show_add_to_mealplan_button:!0,show_shopping_list_button:!0,default_shopping_list_id:"",recipe_tap_action:$e,recipe_hold_action:ke,recipe_double_tap_action:Ae,...Te,...Ie};function Ee(e,t){const i={...e};for(const e of Object.keys(t))i[e]=i[e]??t[e];return i}const De=["breakfast","lunch","dinner","side","dessert","drink","snack"];var Ce={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Vis dagens måltider",name_recipes:"Mealie Opskrifter",description_recipes:"Vis dine opskrifter fra Mealie-instansen",view_recipe:"Vis opskrift",day_actions:"Dagens handlinger",recipe_actions:"Opskriftshandlinger",delete_mealplan:"Fjern fra plan",edit_mealplan:"Rediger måltidsplan",random_mealplan:"Tilfældigt måltid"},je={no_recipe:"Ingen opskrift",no_mealplan:"Intet måltid",today:"I dag",breakfast:"Morgenmad",lunch:"Frokost",dinner:"Aftensmad",side:"Tilbehør",dessert:"Dessert",drink:"Drik",snack:"Snack",search_placeholder:"Søg opskrifter..."},Le={add_to_mealplan:"Tilføj til måltidsplan",add_recipe_to_mealplan:"Tilføj til måltidsplan",select_date:"Vælg en dato",select_meal_type:"Måltidstype",select_recipe:"Vælg en opskrift",view_as_list:"Listevisning",view_as_grid:"Gittervisning",recipe_added_success:"Opskrift tilføjet til plan",cancel:"Annuller",add:"Tilføj",mealplan_deleted_success:"Måltid fjernet fra plan",confirm_delete_title:"Fjern dette måltid?",confirm:"Bekræft",ingredients:"Ingredienser",instructions:"Vejledning",times:"Tider",prep_time:"Forberedelse",cooking_time:"Tilberedning",total_time:"Total",add_note_to_mealplan:"Tilføj en note",note_title:"Titel",note_text:"Note (valgfri)",note_added_success:"Note tilføjet til plan",servings:"Portioner",decrease_servings:"Færre portioner",increase_servings:"Flere portioner",edit_mealplan:"Rediger måltidsplan",mealplan_updated_success:"Måltidsplan opdateret",save:"Gem",add_favorite:"Tilføj til favoritter",remove_favorite:"Fjern fra favoritter",add_to_shopping_list:"Tilføj til indkøbsliste",select_shopping_list:"Vælg indkøbsliste",shopping_list_quantity:"Mængdemultiplikator",recipe_added_to_shopping_list:"Opskrift tilføjet til indkøbsliste",no_shopping_lists:"Ingen indkøbslister tilgængelige",no_ingredients:"Ingen ingredienser tilgængelige",next:"Næste",back:"Tilbage",select_all:"Vælg alle",import_recipe:"Importer opskrift",import_url:"Opskrift-URL",import_include_tags:"Inkluder tags",import:"Importer",recipe_imported_success:"Opskrift importeret",open_in_mealie:"Åbn i Mealie",start_cooking:"Start madlavningstilstand",exit_cooking:"Afslut madlavningstilstand",step:"Trin",previous_step:"Forrige",next_step:"Næste",step_ingredients:"Til dette trin",add_timer:"Timer",start_timer:"Start timer",dismiss_timer:"Luk timer",timer_done:"Timer færdig: {timer}"},Pe={no_url:"Konfigurer Mealie URL for at aktivere billeder og opskriftslinks."},Oe={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fejl ved indlæsning af konfiguration",error_loading:"Fejl ved indlæsning af data",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fejl ved sletning af måltid",error_updating_mealplan:"Fejl ved opdatering af måltidsplan"},Ne={integration:"Mealie integration",entry_types:"Måltidstyper der skal vises",loading:"Indlæser...",mealie_url:"Mealie URL",image_url:"Billed-URL eller lokal sti (valgfri)",number_of_recipes:"Antal opskrifter der skal vises",settings_recipes_card:"Visningskonfiguration",settings_infos:"Opskriftsinformation",settings_image:"Billede",settings_times:"Tider",settings_title_layout:"Layout",show_image:"Vis billede",show_rating:"Vis bedømmelse",show_favorite:"Vis favorit",show_servings:"Portioner & Mængde",show_description:"Vis beskrivelse",show_prep_time:"Vis forberedelsestid",show_cooking_time:"Vis tilberedningstid",show_total_time:"Vis total tid",layout_mode:"Visning",days_columns:"Kolonner med dage",recipes_columns:"Kolonner med måltider",layout_vertical:"Lodret",layout_horizontal:"Måltider side om side",layout_side_by_side:"Dage side om side",layout_days_and_meals_side_by_side:"Dage og måltider side om side",days_range:"Viste dage",days_range_helper:"Et tal (f.eks. 3 = om 3 dage) eller et interval (f.eks. 0-6 = i dag og de 6 følgende dage)",show_search:"Søgelinje",show_favorites_only:"Kun favoritter",show_import_button:"Vis importknap",show_random_button:"Vis knap til tilfældig måltid",settings_meal_actions:"Måltidshandlinger",settings_recipe_actions:"Handlinger på opskrifter",show_add_recipe_button:"Vis knap Tilføj opskrift",show_note_button:"Vis knap Tilføj note",settings_recipe_view:"Åbning af opskrifter",recipe_view:"Åbn opskriften i",recipe_view_dialog:"Dialog i kortet",recipe_view_webview:"Integreret Mealie-visning",recipe_view_browser:"Ny browserfane",recipe_tap_action:"Tryk på en opskrift",recipe_hold_action:"Langt tryk på en opskrift",recipe_double_tap_action:"Dobbelttryk på en opskrift",recipe_action_none:"Ingenting",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Vis knappen til menuen ⋮",mealie_group_slug:"Mealie-gruppe (slug)",settings_language:"Sprog",language:"Sprog",language_auto:"Automatisk (Home Assistant-sprog)",language_helper:"Tilsidesætter Home Assistant-sproget for dette kort, f.eks. for at bruge en regional variant som fr-CA."},Ue={hour:"time",hours:"timer",minute:"minut",minutes:"minutter",hour_short:"t",minute_short:"min"},Ve={cards:Ce,common:je,dialog:Le,info:Pe,error:Oe,editor:Ne,time:Ue},He=Object.freeze({__proto__:null,cards:Ce,common:je,default:Ve,dialog:Le,editor:Ne,error:Oe,info:Pe,time:Ue}),Fe={name_mealplan:"Mealie Speiseplan",description_mealplan:"Heutige Mahlzeiten anzeigen",name_recipes:"Mealie Rezepte",description_recipes:"Zeigen Sie Ihre Rezepte von der Mealie-Instanz an",view_recipe:"Rezept anzeigen",day_actions:"Aktionen des Tages",recipe_actions:"Rezeptaktionen",delete_mealplan:"Aus dem Plan löschen",edit_mealplan:"Eintrag bearbeiten",random_mealplan:"Zufälliges Gericht"},Be={no_recipe:"Kein Rezept",no_mealplan:"Keine Mahlzeit",today:"Heute",breakfast:"Frühstück",lunch:"Mittagessen",dinner:"Abendessen",side:"Beilage",dessert:"Dessert",drink:"Getränk",snack:"Snack",search_placeholder:"Rezepte suchen..."},qe={add_to_mealplan:"Zum Speiseplan hinzufügen",add_recipe_to_mealplan:"zum Speiseplan hinzufügen",select_date:"Datum auswählen",select_meal_type:"Mahlzeittyp",select_recipe:"Rezept auswählen",view_as_list:"Listenansicht",view_as_grid:"Rasteransicht",recipe_added_success:"Rezept zum Plan hinzugefügt",cancel:"Abbrechen",add:"Hinzufügen",mealplan_deleted_success:"Mahlzeit aus dem Plan entfernt",confirm_delete_title:"Diese Mahlzeit entfernen?",confirm:"Bestätigen",ingredients:"Zutaten",instructions:"Anleitung",times:"Zeiten",prep_time:"Vorbereitung",cooking_time:"Kochen",total_time:"Gesamt",add_note_to_mealplan:"Notiz hinzufügen",note_title:"Titel",note_text:"Notiz (optional)",note_added_success:"Notiz zum Plan hinzugefügt",servings:"Portionen",decrease_servings:"Weniger Portionen",increase_servings:"Mehr Portionen",edit_mealplan:"Eintrag bearbeiten",mealplan_updated_success:"Eintrag aktualisiert",save:"Speichern",add_favorite:"Zu Favoriten hinzufügen",remove_favorite:"Aus Favoriten entfernen",add_to_shopping_list:"Zur Einkaufsliste hinzufügen",select_shopping_list:"Einkaufsliste auswählen",shopping_list_quantity:"Mengenmultiplikator",recipe_added_to_shopping_list:"Rezept zur Einkaufsliste hinzugefügt",no_shopping_lists:"Keine Einkaufslisten verfügbar",no_ingredients:"Keine Zutaten verfügbar",next:"Weiter",back:"Zurück",select_all:"Alle auswählen",import_recipe:"Rezept importieren",import_url:"Rezept-URL",import_include_tags:"Tags einschließen",import:"Importieren",recipe_imported_success:"Rezept importiert",open_in_mealie:"In Mealie öffnen",start_cooking:"Kochmodus starten",exit_cooking:"Kochmodus beenden",step:"Schritt",previous_step:"Zurück",next_step:"Weiter",step_ingredients:"Für diesen Schritt",add_timer:"Timer",start_timer:"Timer starten",dismiss_timer:"Timer schließen",timer_done:"Timer abgelaufen: {timer}"},Ke={no_url:"Konfigurieren Sie die Mealie-URL, um Bilder und Rezeptlinks zu aktivieren."},We={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fehler beim Laden der Konfiguration",error_loading:"Fehler beim Laden der Daten",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fehler beim Löschen der Mahlzeit",error_updating_mealplan:"Fehler beim Aktualisieren des Speiseplans"},Ge={integration:"Mealie integration",entry_types:"Anzuzeigende Mahlzeittypen",loading:"Wird geladen...",mealie_url:"Mealie URL",image_url:"Bild-URL oder lokaler Pfad (optional)",number_of_recipes:"Anzahl der anzuzeigenden Rezepte",settings_recipes_card:"Anzeigekonfiguration",settings_infos:"Rezeptinfos",settings_image:"Bild",settings_times:"Zeiten",settings_title_layout:"Layout",show_image:"Bild anzeigen",show_rating:"Bewertung anzeigen",show_favorite:"Favorit anzeigen",show_servings:"Portionen & Menge",show_description:"Beschreibung anzeigen",show_prep_time:"Vorbereitungszeit anzeigen",show_cooking_time:"Kochzeit anzeigen",show_total_time:"Gesamtzeit anzeigen",layout_mode:"Anordnung",days_columns:"Spalten für Tage",recipes_columns:"Spalten für Mahlzeiten",layout_vertical:"Vertikal",layout_horizontal:"Mahlzeiten nebeneinander",layout_side_by_side:"Tage nebeneinander",layout_days_and_meals_side_by_side:"Tage und Mahlzeiten nebeneinander",days_range:"Angezeigte Tage",days_range_helper:"Eine Zahl (z. B. 3 = in 3 Tagen) oder ein Bereich (z. B. 0-6 = heute und die 6 folgenden Tage)",show_search:"Suchleiste",show_favorites_only:"Nur Favoriten",show_import_button:"Import-Schaltfläche anzeigen",show_random_button:"Zufalls-Mahlzeit-Schaltfläche anzeigen",settings_meal_actions:"Mahlzeiten-Aktionen",settings_recipe_actions:"Aktionen für Rezepte",show_add_recipe_button:"Rezept-Button anzeigen",show_note_button:"Notiz-Button anzeigen",settings_recipe_view:"Öffnen von Rezepten",recipe_view:"Rezept öffnen in",recipe_view_dialog:"Dialog in der Karte",recipe_view_webview:"Eingebettete Mealie-Ansicht",recipe_view_browser:"Neuer Browser-Tab",recipe_tap_action:"Tippen auf ein Rezept",recipe_hold_action:"Langes Drücken auf ein Rezept",recipe_double_tap_action:"Doppeltippen auf ein Rezept",recipe_action_none:"Nichts",settings_recipe_menu:"Menü ⋮",show_recipe_menu:"Schaltfläche für das Menü ⋮ anzeigen",mealie_group_slug:"Mealie-Gruppe (Slug)",settings_language:"Sprache",language:"Sprache",language_auto:"Automatisch (Home-Assistant-Sprache)",language_helper:"Überschreibt die Home-Assistant-Sprache für diese Karte, z. B. für eine regionale Variante wie fr-CA."},Ze={hour:"Stunde",hours:"Stunden",minute:"Minute",minutes:"Minuten",hour_short:"Std",minute_short:"Min"},Qe={cards:Fe,common:Be,dialog:qe,info:Ke,error:We,editor:Ge,time:Ze},Je=Object.freeze({__proto__:null,cards:Fe,common:Be,default:Qe,dialog:qe,editor:Ge,error:We,info:Ke,time:Ze}),Ye={name_mealplan:"Mealie Meal Plan",description_mealplan:"Display today's meals",name_recipes:"Mealie Recipes",description_recipes:"Display your recipes from Mealie instance",view_recipe:"View recipe",day_actions:"Day actions",recipe_actions:"Recipe actions",delete_mealplan:"Delete from plan",edit_mealplan:"Edit meal plan entry",random_mealplan:"Random meal"},Xe={no_recipe:"No recipe",no_mealplan:"No meal",today:"Today",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",side:"Side",dessert:"Dessert",drink:"Drink",snack:"Snack",search_placeholder:"Search recipes..."},et={add_to_mealplan:"Add to meal plan",add_recipe_to_mealplan:"Add to meal plan",select_date:"Select a date",select_meal_type:"Meal type",select_recipe:"Select a recipe",view_as_list:"List view",view_as_grid:"Grid view",recipe_added_success:"Recipe added to plan",cancel:"Cancel",add:"Add",mealplan_deleted_success:"Meal removed from plan",confirm_delete_title:"Remove this meal?",confirm:"Confirm",ingredients:"Ingredients",instructions:"Instructions",times:"Times",prep_time:"Preparation",cooking_time:"Cooking",total_time:"Total",add_note_to_mealplan:"Add a note",note_title:"Title",note_text:"Note (optional)",note_added_success:"Note added to plan",servings:"Servings",decrease_servings:"Decrease servings",increase_servings:"Increase servings",edit_mealplan:"Edit meal plan entry",mealplan_updated_success:"Meal plan entry updated",save:"Save",add_favorite:"Add to favorites",remove_favorite:"Remove from favorites",add_to_shopping_list:"Add to shopping list",select_shopping_list:"Select shopping list",shopping_list_quantity:"Quantity multiplier",recipe_added_to_shopping_list:"Recipe added to shopping list",no_shopping_lists:"No shopping lists available",no_ingredients:"No ingredients available",next:"Next",back:"Back",select_all:"Select all",import_recipe:"Import recipe",import_url:"Recipe URL",import_include_tags:"Include tags",import:"Import",recipe_imported_success:"Recipe imported",open_in_mealie:"Open in Mealie",start_cooking:"Start cooking mode",exit_cooking:"Exit cooking mode",step:"Step",previous_step:"Previous",next_step:"Next",step_ingredients:"For this step",add_timer:"Timer",start_timer:"Start timer",dismiss_timer:"Dismiss timer",timer_done:"Timer finished: {timer}"},tt={no_url:"Configure Mealie URL to enable images and recipe links."},it={no_integration:"Select a Mealie integration in the card settings",missing_config:"Error loading configuration",error_loading:"Error loading data",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Error deleting meal",error_updating_mealplan:"Error updating meal plan"},at={integration:"Mealie integration",entry_types:"Meal types to display",loading:"Loading...",mealie_url:"Mealie URL",image_url:"Image URL or local path (optional)",number_of_recipes:"Number of recipes to display",settings_recipes_card:"Display configuration",settings_infos:"Recipe details",settings_image:"Image",settings_times:"Times",settings_title_layout:"Layout",show_image:"Show image",show_rating:"Show rating",show_favorite:"Favorite recipe",show_servings:"Serving & Quantity",show_description:"Show description",show_prep_time:"Show preparation time",show_cooking_time:"Show cooking time",show_total_time:"Show total time",layout_mode:"Layout",days_columns:"Day columns",recipes_columns:"Meal columns",layout_vertical:"Vertical",layout_horizontal:"Meals side by side",layout_side_by_side:"Days side by side",layout_days_and_meals_side_by_side:"Days and meals side by side",days_range:"Days shown",days_range_helper:"A number (e.g. 3 = 3 days from now) or a range (e.g. 0-6 = today and the next 6 days)",show_search:"Search bar",show_favorites_only:"Favorites only",show_import_button:"Show import button",show_random_button:"Show random meal button",settings_meal_actions:"Meal actions",settings_recipe_actions:"Recipe actions",show_add_recipe_button:"Show add recipe button",show_note_button:"Show add note button",settings_recipe_view:"Opening recipes",recipe_view:"Open the recipe in",recipe_view_dialog:"Dialog inside the card",recipe_view_webview:"Embedded Mealie view",recipe_view_browser:"New browser tab",recipe_tap_action:"Tap on a recipe",recipe_hold_action:"Long press on a recipe",recipe_double_tap_action:"Double tap on a recipe",recipe_action_none:"Nothing",settings_recipe_menu:"⋮ menu",show_recipe_menu:"Show the ⋮ menu button",mealie_group_slug:"Mealie group (slug)",settings_language:"Language",language:"Language",language_auto:"Automatic (Home Assistant language)",language_helper:"Overrides the Home Assistant language for this card, e.g. to use a regional variant such as fr-CA."},rt={hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},st={cards:Ye,common:Xe,dialog:et,info:tt,error:it,editor:at,time:rt},nt=Object.freeze({__proto__:null,cards:Ye,common:Xe,default:st,dialog:et,editor:at,error:it,info:tt,time:rt}),ot={name_mealplan:"Plan de Comidas Mealie",description_mealplan:"Mostrar las comidas del día",name_recipes:"Recetas Mealie",description_recipes:"Mostrar tus recetas desde la instancia Mealie",view_recipe:"Ver receta",day_actions:"Acciones del día",recipe_actions:"Acciones de la receta",delete_mealplan:"Eliminar del plan",edit_mealplan:"Editar entrada del plan",random_mealplan:"Comida aleatoria"},lt={no_recipe:"Ninguna receta",no_mealplan:"Ninguna comida",today:"Hoy",breakfast:"Desayuno",lunch:"Almuerzo",dinner:"Cena",side:"Acompañamiento",dessert:"Postre",drink:"Bebida",snack:"Merienda",search_placeholder:"Buscar recetas..."},ct={add_to_mealplan:"Añadir al plan de comidas",add_recipe_to_mealplan:"Añadir al plan de comidas",select_date:"Seleccionar una fecha",select_meal_type:"Tipo de comida",select_recipe:"Seleccionar una receta",view_as_list:"Vista de lista",view_as_grid:"Vista de cuadrícula",recipe_added_success:"Receta añadida al plan",cancel:"Cancelar",add:"Añadir",mealplan_deleted_success:"Comida eliminada del plan",confirm_delete_title:"¿Eliminar esta comida?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instrucciones",times:"Tiempos",prep_time:"Preparación",cooking_time:"Cocción",total_time:"Total",add_note_to_mealplan:"Añadir una nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota añadida al plan",servings:"Porciones",decrease_servings:"Reducir porciones",increase_servings:"Aumentar porciones",edit_mealplan:"Editar entrada del plan",mealplan_updated_success:"Entrada del plan actualizada",save:"Guardar",add_favorite:"Añadir a favoritos",remove_favorite:"Eliminar de favoritos",add_to_shopping_list:"Añadir a la lista de la compra",select_shopping_list:"Seleccionar lista de la compra",shopping_list_quantity:"Multiplicador de cantidad",recipe_added_to_shopping_list:"Receta añadida a la lista de la compra",no_shopping_lists:"No hay listas de la compra disponibles",no_ingredients:"No hay ingredientes disponibles",next:"Siguiente",back:"Atrás",select_all:"Seleccionar todo",import_recipe:"Importar receta",import_url:"URL de la receta",import_include_tags:"Incluir etiquetas",import:"Importar",recipe_imported_success:"Receta importada",open_in_mealie:"Abrir en Mealie",start_cooking:"Iniciar modo cocina",exit_cooking:"Salir del modo cocina",step:"Paso",previous_step:"Anterior",next_step:"Siguiente",step_ingredients:"Para este paso",add_timer:"Temporizador",start_timer:"Iniciar temporizador",dismiss_timer:"Cerrar temporizador",timer_done:"Temporizador terminado: {timer}"},dt={no_url:"Configure la URL de Mealie para activar las imágenes y los enlaces a las recetas."},pt={no_integration:"Select a Mealie integration in the card settings",missing_config:"Error al cargar la configuración",error_loading:"Error al cargar datos",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Error al eliminar la comida",error_updating_mealplan:"Error al actualizar el plan de comidas"},_t={integration:"Mealie integration",entry_types:"Tipos de comida a mostrar",loading:"Cargando...",mealie_url:"URL de Mealie",image_url:"URL o ruta local de las imágenes (opcional)",number_of_recipes:"Número de recetas a mostrar",settings_recipes_card:"Configuración de visualización",settings_infos:"Información",settings_image:"Imagen",settings_times:"Tiempos",settings_title_layout:"Diseño",show_image:"Mostrar imagen",show_rating:"Mostrar valoración",show_favorite:"Mostrar favorito",show_servings:"Porciones y Cantidad",show_description:"Mostrar descripción",show_prep_time:"Mostrar tiempo de preparación",show_cooking_time:"Mostrar tiempo de cocción",show_total_time:"Mostrar tiempo total",layout_mode:"Disposición",days_columns:"Columnas de días",recipes_columns:"Columnas de comidas",layout_vertical:"Vertical",layout_horizontal:"Comidas en paralelo",layout_side_by_side:"Días en paralelo",layout_days_and_meals_side_by_side:"Días y comidas en paralelo",days_range:"Días mostrados",days_range_helper:"Un número (p. ej. 3 = dentro de 3 días) o un intervalo (p. ej. 0-6 = hoy y los 6 días siguientes)",show_search:"Barra de búsqueda",show_favorites_only:"Solo favoritos",show_import_button:"Mostrar botón de importación",show_random_button:"Mostrar botón de comida aleatoria",settings_meal_actions:"Acciones de comidas",settings_recipe_actions:"Acciones sobre las recetas",show_add_recipe_button:"Mostrar botón Añadir receta",show_note_button:"Mostrar botón Añadir nota",settings_recipe_view:"Apertura de recetas",recipe_view:"Abrir la receta en",recipe_view_dialog:"Diálogo dentro de la tarjeta",recipe_view_webview:"Vista Mealie integrada",recipe_view_browser:"Nueva pestaña del navegador",recipe_tap_action:"Toque en una receta",recipe_hold_action:"Pulsación larga en una receta",recipe_double_tap_action:"Doble toque en una receta",recipe_action_none:"Nada",settings_recipe_menu:"Menú ⋮",show_recipe_menu:"Mostrar el botón del menú ⋮",mealie_group_slug:"Grupo de Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma de Home Assistant)",language_helper:"Sustituye el idioma de Home Assistant para esta tarjeta, por ejemplo para usar una variante regional como fr-CA."},ht={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},ut={cards:ot,common:lt,dialog:ct,info:dt,error:pt,editor:_t,time:ht},gt=Object.freeze({__proto__:null,cards:ot,common:lt,default:ut,dialog:ct,editor:_t,error:pt,info:dt,time:ht}),mt={lunch:"Dîner",dinner:"Souper"},ft={common:mt},vt=Object.freeze({__proto__:null,common:mt,default:ft}),yt={breakfast:"Déjeuner",lunch:"Dîner",dinner:"Souper"},bt={add_to_shopping_list:"Ajouter à la liste d'épicerie",select_shopping_list:"Sélectionner une liste d'épicerie",recipe_added_to_shopping_list:"Recette ajoutée à la liste d'épicerie",no_shopping_lists:"Aucune liste d'épicerie disponible"},wt={common:yt,dialog:bt},$t=Object.freeze({__proto__:null,common:yt,default:wt,dialog:bt}),kt={name_mealplan:"Repas Mealie",description_mealplan:"Afficher les repas du jour",name_recipes:"Recettes Mealie",description_recipes:"Afficher vos recettes depuis l'instance Mealie",view_recipe:"Voir la recette",day_actions:"Actions du jour",recipe_actions:"Actions de la recette",delete_mealplan:"Supprimer du planning",edit_mealplan:"Modifier l'entrée du planning",random_mealplan:"Repas aléatoire"},xt={no_recipe:"Aucune recette",no_mealplan:"Aucun repas",today:"Aujourd'hui",breakfast:"Petit-déjeuner",lunch:"Déjeuner",dinner:"Dîner",side:"Accompagnement",dessert:"Dessert",drink:"Boisson",snack:"Collation",search_placeholder:"Rechercher une recette..."},zt={add_to_mealplan:"Ajouter la recette au planning",add_recipe_to_mealplan:"Ajouter au planning",select_date:"Sélectionner une date",select_meal_type:"Type de repas",select_recipe:"Sélectionner une recette",view_as_list:"Vue liste",view_as_grid:"Vue grille",recipe_added_success:"Recette ajoutée au planning",cancel:"Annuler",add:"Ajouter",mealplan_deleted_success:"Repas supprimé du planning",confirm_delete_title:"Supprimer ce repas ?",confirm:"Confirmer",ingredients:"Ingrédients",instructions:"Instructions",times:"Temps",prep_time:"Préparation",cooking_time:"Cuisson",total_time:"Total",add_note_to_mealplan:"Ajouter une note",note_title:"Titre",note_text:"Note (facultatif)",note_added_success:"Note ajoutée au planning",servings:"Portions",decrease_servings:"Diminuer les portions",increase_servings:"Augmenter les portions",edit_mealplan:"Modifier l'entrée du planning",mealplan_updated_success:"Entrée du planning mise à jour",save:"Enregistrer",add_favorite:"Ajouter aux favoris",remove_favorite:"Retirer des favoris",add_to_shopping_list:"Ajouter à la liste de courses",select_shopping_list:"Sélectionner une liste de courses",shopping_list_quantity:"Multiplicateur de quantité",recipe_added_to_shopping_list:"Recette ajoutée à la liste de courses",no_shopping_lists:"Aucune liste de courses disponible",no_ingredients:"Aucun ingrédient disponible",next:"Suivant",back:"Retour",select_all:"Tout sélectionner",import_recipe:"Importer une recette",import_url:"URL de la recette",import_include_tags:"Inclure les tags",import:"Importer",recipe_imported_success:"Recette importée",open_in_mealie:"Ouvrir dans Mealie",start_cooking:"Lancer le mode cuisine",exit_cooking:"Quitter le mode cuisine",step:"Étape",previous_step:"Précédent",next_step:"Suivant",step_ingredients:"Pour cette étape",add_timer:"Minuteur",start_timer:"Démarrer le minuteur",dismiss_timer:"Fermer le minuteur",timer_done:"Minuteur terminé : {timer}"},At={no_url:"Configurez l'URL Mealie pour activer les images et les liens vers les recettes."},Tt={no_integration:"Sélectionnez une intégration Mealie",missing_config:"Erreur de chargement de la configuration",error_loading:"Erreur de chargement des données",error_adding_recipe:"Erreur lors de l'ajout de la recette",error_deleting_mealplan:"Erreur lors de la suppression du repas",error_updating_mealplan:"Erreur lors de la mise à jour du repas"},Mt={integration:"Intégration Mealie",entry_types:"Types de repas à afficher",loading:"Chargement...",mealie_url:"URL Mealie",image_url:"URL ou chemin local des images (facultatif)",number_of_recipes:"Nombre de recettes à afficher",settings_recipes_card:"Configuration de l'affichage",settings_infos:"Informations",settings_image:"Image",settings_times:"Temps",settings_title_layout:"Disposition",show_image:"Image",show_rating:"Note",show_favorite:"Ajouter au favoris",show_servings:"Portion & Quantité",show_description:"Description",show_prep_time:"Temps de préparation",show_cooking_time:"Temps de cuisson",show_total_time:"Temps total",layout_mode:"Disposition",days_columns:"Colonnes de jours",recipes_columns:"Colonnes de repas",layout_vertical:"Vertical",layout_horizontal:"Repas côte à côte",layout_side_by_side:"Jours côte à côte",layout_days_and_meals_side_by_side:"Jours et repas côte à côte",days_range:"Jours affichés",days_range_helper:"Un nombre (ex. 3 = J+3) ou une plage (ex. 0-6 = aujourd'hui et les 6 jours suivants)",show_search:"Barre de recherche",show_favorites_only:"Favoris uniquement",show_import_button:"Bouton d'import de recette",show_random_button:"Afficher le bouton repas aléatoire",settings_meal_actions:"Action sur les repas",settings_recipe_actions:"Actions sur les recettes",show_add_recipe_button:"Afficher le bouton Ajouter une recette",show_note_button:"Afficher le bouton Ajouter une note",settings_recipe_view:"Ouverture des recettes",recipe_view:"Ouvrir la recette dans",recipe_view_dialog:"Dialogue dans la carte",recipe_view_webview:"Vue Mealie intégrée",recipe_view_browser:"Nouvel onglet du navigateur",recipe_tap_action:"Appui sur une recette",recipe_hold_action:"Appui long sur une recette",recipe_double_tap_action:"Double appui sur une recette",recipe_action_none:"Rien",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Afficher le bouton du menu ⋮",mealie_group_slug:"Groupe Mealie (slug)",settings_language:"Langue",language:"Langue",language_auto:"Automatique (langue de Home Assistant)",language_helper:"Remplace la langue de Home Assistant pour cette carte, par exemple pour utiliser une variante régionale comme fr-CA."},It={hour:"heure",hours:"heures",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},St={cards:kt,common:xt,dialog:zt,info:At,error:Tt,editor:Mt,time:It},Rt={name_mealplan:"Piano Pasti Mealie",description_mealplan:"Visualizza i pasti del giorno",name_recipes:"Ricette Mealie",description_recipes:"Visualizza le tue ricette dall'istanza Mealie",view_recipe:"Vedi ricetta",day_actions:"Azioni del giorno",recipe_actions:"Azioni della ricetta",delete_mealplan:"Elimina dal piano",edit_mealplan:"Modifica voce del piano",random_mealplan:"Pasto casuale"},Et={no_recipe:"Nessuna ricetta",no_mealplan:"Nessun pasto",today:"Oggi",breakfast:"Colazione",lunch:"Pranzo",dinner:"Cena",side:"Contorno",dessert:"Dolce",drink:"Bevanda",snack:"Spuntino",search_placeholder:"Cerca ricette..."},Dt={add_to_mealplan:"Aggiungi al piano pasti",add_recipe_to_mealplan:"Aggiungi al piano pasti",select_date:"Seleziona una data",select_meal_type:"Tipo di pasto",select_recipe:"Seleziona una ricetta",view_as_list:"Vista elenco",view_as_grid:"Vista griglia",recipe_added_success:"Ricetta aggiunta al piano",cancel:"Annulla",add:"Aggiungi",mealplan_deleted_success:"Pasto rimosso dal piano",confirm_delete_title:"Rimuovere questo pasto?",confirm:"Conferma",ingredients:"Ingredienti",instructions:"Istruzioni",times:"Tempi",prep_time:"Preparazione",cooking_time:"Cottura",total_time:"Totale",add_note_to_mealplan:"Aggiungi una nota",note_title:"Titolo",note_text:"Nota (opzionale)",note_added_success:"Nota aggiunta al piano",servings:"Porzioni",decrease_servings:"Riduci porzioni",increase_servings:"Aumenta porzioni",edit_mealplan:"Modifica voce del piano",mealplan_updated_success:"Voce del piano aggiornata",save:"Salva",add_favorite:"Aggiungi ai preferiti",remove_favorite:"Rimuovi dai preferiti",add_to_shopping_list:"Aggiungi alla lista della spesa",select_shopping_list:"Seleziona lista della spesa",shopping_list_quantity:"Moltiplicatore di quantità",recipe_added_to_shopping_list:"Ricetta aggiunta alla lista della spesa",no_shopping_lists:"Nessuna lista della spesa disponibile",no_ingredients:"Nessun ingrediente disponibile",next:"Avanti",back:"Indietro",select_all:"Seleziona tutto",import_recipe:"Importa ricetta",import_url:"URL ricetta",import_include_tags:"Includi tag",import:"Importa",recipe_imported_success:"Ricetta importata",open_in_mealie:"Apri in Mealie",start_cooking:"Avvia modalità cucina",exit_cooking:"Esci dalla modalità cucina",step:"Passaggio",previous_step:"Precedente",next_step:"Successivo",step_ingredients:"Per questo passaggio",add_timer:"Timer",start_timer:"Avvia timer",dismiss_timer:"Chiudi timer",timer_done:"Timer terminato: {timer}"},Ct={no_url:"Configura l'URL Mealie per attivare le immagini e i link alle ricette."},jt={no_integration:"Select a Mealie integration in the card settings",missing_config:"Errore di caricamento della configurazione",error_loading:"Errore di caricamento dei dati",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Errore durante l'eliminazione del pasto",error_updating_mealplan:"Errore durante l'aggiornamento del piano pasti"},Lt={integration:"Mealie integration",entry_types:"Tipi di pasto da visualizzare",loading:"Caricamento...",mealie_url:"URL Mealie",image_url:"URL o percorso locale delle immagini (facoltativo)",number_of_recipes:"Numero di ricette da visualizzare",settings_recipes_card:"Configurazione della visualizzazione",settings_infos:"Informazioni",settings_image:"Immagine",settings_times:"Tempi",settings_title_layout:"Layout",show_image:"Mostra immagine",show_rating:"Mostra valutazione",show_favorite:"Mostra preferito",show_servings:"Porzioni e Quantità",show_description:"Mostra descrizione",show_prep_time:"Mostra tempo di preparazione",show_cooking_time:"Mostra tempo di cottura",show_total_time:"Mostra tempo totale",layout_mode:"Disposizione",days_columns:"Colonne dei giorni",recipes_columns:"Colonne dei pasti",layout_vertical:"Verticale",layout_horizontal:"Pasti affiancati",layout_side_by_side:"Giorni affiancati",layout_days_and_meals_side_by_side:"Giorni e pasti affiancati",days_range:"Giorni mostrati",days_range_helper:"Un numero (es. 3 = fra 3 giorni) o un intervallo (es. 0-6 = oggi e i 6 giorni successivi)",show_search:"Barra di ricerca",show_favorites_only:"Solo preferiti",show_import_button:"Mostra pulsante di importazione",show_random_button:"Mostra pulsante pasto casuale",settings_meal_actions:"Azioni sui pasti",settings_recipe_actions:"Azioni sulle ricette",show_add_recipe_button:"Mostra pulsante Aggiungi ricetta",show_note_button:"Mostra pulsante Aggiungi nota",settings_recipe_view:"Apertura delle ricette",recipe_view:"Apri la ricetta in",recipe_view_dialog:"Finestra nella scheda",recipe_view_webview:"Vista Mealie integrata",recipe_view_browser:"Nuova scheda del browser",recipe_tap_action:"Tocco su una ricetta",recipe_hold_action:"Pressione prolungata su una ricetta",recipe_double_tap_action:"Doppio tocco su una ricetta",recipe_action_none:"Niente",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostra il pulsante del menu ⋮",mealie_group_slug:"Gruppo Mealie (slug)",settings_language:"Lingua",language:"Lingua",language_auto:"Automatica (lingua di Home Assistant)",language_helper:"Sostituisce la lingua di Home Assistant per questa scheda, ad esempio per usare una variante regionale come fr-CA."},Pt={hour:"ora",hours:"ore",minute:"minuto",minutes:"minuti",hour_short:"h",minute_short:"min"},Ot={cards:Rt,common:Et,dialog:Dt,info:Ct,error:jt,editor:Lt,time:Pt},Nt={name_mealplan:"Mealie Maaltijdplan",description_mealplan:"Toon de maaltijden van vandaag",name_recipes:"Mealie Recepten",description_recipes:"Toon je recepten van de Mealie-instantie",view_recipe:"Recept bekijken",day_actions:"Acties voor de dag",recipe_actions:"Receptacties",delete_mealplan:"Verwijder uit plan",edit_mealplan:"Maaltijdplan bewerken",random_mealplan:"Willekeurige maaltijd"},Ut={no_recipe:"Geen recept",no_mealplan:"Geen maaltijd",today:"Vandaag",breakfast:"Ontbijt",lunch:"Lunch",dinner:"Diner",side:"Bijgerecht",dessert:"Dessert",drink:"Drank",snack:"Snack",search_placeholder:"Recepten zoeken..."},Vt={add_to_mealplan:"Toevoegen aan maaltijdplan",add_recipe_to_mealplan:"toevoegen aan maaltijdplan",select_date:"Selecteer een datum",select_meal_type:"Maaltijdtype",select_recipe:"Selecteer een recept",view_as_list:"Lijstweergave",view_as_grid:"Rasterweergave",recipe_added_success:"Recept toegevoegd aan plan",cancel:"Annuleren",add:"Toevoegen",mealplan_deleted_success:"Maaltijd verwijderd uit plan",confirm_delete_title:"Deze maaltijd verwijderen?",confirm:"Bevestigen",ingredients:"Ingrediënten",instructions:"Instructies",times:"Tijden",prep_time:"Voorbereiding",cooking_time:"Koken",total_time:"Totaal",add_note_to_mealplan:"Notitie toevoegen",note_title:"Titel",note_text:"Notitie (optioneel)",note_added_success:"Notitie toegevoegd aan plan",servings:"Porties",decrease_servings:"Minder porties",increase_servings:"Meer porties",edit_mealplan:"Maaltijdplan bewerken",mealplan_updated_success:"Maaltijdplan bijgewerkt",save:"Opslaan",add_favorite:"Toevoegen aan favorieten",remove_favorite:"Verwijderen uit favorieten",add_to_shopping_list:"Toevoegen aan boodschappenlijst",select_shopping_list:"Selecteer boodschappenlijst",shopping_list_quantity:"Hoeveelheidsmultiplier",recipe_added_to_shopping_list:"Recept toegevoegd aan boodschappenlijst",no_shopping_lists:"Geen boodschappenlijsten beschikbaar",no_ingredients:"Geen ingrediënten beschikbaar",next:"Volgende",back:"Terug",select_all:"Alles selecteren",import_recipe:"Recept importeren",import_url:"Recept-URL",import_include_tags:"Tags opnemen",import:"Importeren",recipe_imported_success:"Recept geïmporteerd",open_in_mealie:"Openen in Mealie",start_cooking:"Kookmodus starten",exit_cooking:"Kookmodus verlaten",step:"Stap",previous_step:"Vorige",next_step:"Volgende",step_ingredients:"Voor deze stap",add_timer:"Timer",start_timer:"Timer starten",dismiss_timer:"Timer sluiten",timer_done:"Timer afgelopen: {timer}"},Ht={no_url:"Configureer Mealie URL om afbeeldingen en receptlinks in te schakelen."},Ft={no_integration:"Select a Mealie integration in the card settings",missing_config:"Fout bij laden van configuratie",error_loading:"Fout bij laden van gegevens",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Fout bij verwijderen van maaltijd",error_updating_mealplan:"Fout bij bijwerken van maaltijdplan"},Bt={integration:"Mealie integration",entry_types:"Maaltijdtypen om weer te geven",loading:"Laden...",mealie_url:"Mealie URL",image_url:"Afbeeldings-URL of lokaal pad (optioneel)",number_of_recipes:"Aantal weer te geven recepten",settings_recipes_card:"Weergaveconfiguratie",settings_infos:"Receptinformatie",settings_image:"Afbeelding",settings_times:"Tijden",settings_title_layout:"Indeling",show_image:"Afbeelding weergeven",show_rating:"Beoordeling weergeven",show_favorite:"Favoriet tonen",show_servings:"Porties & Hoeveelheid",show_description:"Beschrijving weergeven",show_prep_time:"Voorbereidingstijd weergeven",show_cooking_time:"Kooktijd weergeven",show_total_time:"Totale tijd weergeven",layout_mode:"Indeling",days_columns:"Kolommen met dagen",recipes_columns:"Kolommen met maaltijden",layout_vertical:"Verticaal",layout_horizontal:"Maaltijden naast elkaar",layout_side_by_side:"Dagen naast elkaar",layout_days_and_meals_side_by_side:"Dagen en maaltijden naast elkaar",days_range:"Getoonde dagen",days_range_helper:"Een getal (bijv. 3 = over 3 dagen) of een bereik (bijv. 0-6 = vandaag en de 6 volgende dagen)",show_search:"Zoekbalk",show_favorites_only:"Alleen favorieten",show_import_button:"Importknop weergeven",show_random_button:"Willekeurige maaltijdknop weergeven",settings_meal_actions:"Maaltijdacties",settings_recipe_actions:"Acties op recepten",show_add_recipe_button:"Knop Recept toevoegen tonen",show_note_button:"Knop Notitie toevoegen tonen",settings_recipe_view:"Recepten openen",recipe_view:"Recept openen in",recipe_view_dialog:"Dialoog in de kaart",recipe_view_webview:"Ingebouwde Mealie-weergave",recipe_view_browser:"Nieuw browsertabblad",recipe_tap_action:"Tikken op een recept",recipe_hold_action:"Lang drukken op een recept",recipe_double_tap_action:"Dubbeltikken op een recept",recipe_action_none:"Niets",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Knop voor het menu ⋮ tonen",mealie_group_slug:"Mealie-groep (slug)",settings_language:"Taal",language:"Taal",language_auto:"Automatisch (taal van Home Assistant)",language_helper:"Overschrijft de taal van Home Assistant voor deze kaart, bijvoorbeeld om een regionale variant zoals fr-CA te gebruiken."},qt={hour:"uur",hours:"uur",minute:"minuut",minutes:"minuten",hour_short:"u",minute_short:"min"},Kt={cards:Nt,common:Ut,dialog:Vt,info:Ht,error:Ft,editor:Bt,time:qt},Wt={name_mealplan:"Plan Posiłków Mealie",description_mealplan:"Wyświetl dzisiejsze posiłki",name_recipes:"Przepisy Mealie",description_recipes:"Wyświetl swoje przepisy z instancji Mealie",view_recipe:"Wyświetl przepis",day_actions:"Akcje dnia",recipe_actions:"Akcje przepisu",delete_mealplan:"Usuń z planu",edit_mealplan:"Edytuj wpis planu",random_mealplan:"Losowy posiłek"},Gt={no_recipe:"Brak przepisu",no_mealplan:"Brak posiłku",today:"Dzisiaj",breakfast:"Śniadanie",lunch:"Obiad",dinner:"Kolacja",side:"Dodatek",dessert:"Deser",drink:"Napój",snack:"Przekąska",search_placeholder:"Szukaj przepisów..."},Zt={add_to_mealplan:"Dodaj do planu posiłków",add_recipe_to_mealplan:"Dodaj do planu posiłków",select_date:"Wybierz datę",select_meal_type:"Typ posiłku",select_recipe:"Wybierz przepis",view_as_list:"Widok listy",view_as_grid:"Widok siatki",recipe_added_success:"Przepis dodany do planu",cancel:"Anuluj",add:"Dodaj",mealplan_deleted_success:"Posiłek usunięty z planu",confirm_delete_title:"Usunąć ten posiłek?",confirm:"Potwierdź",ingredients:"Składniki",instructions:"Instrukcje",times:"Czasy",prep_time:"Przygotowanie",cooking_time:"Gotowanie",total_time:"Łącznie",add_note_to_mealplan:"Dodaj notatkę",note_title:"Tytuł",note_text:"Notatka (opcjonalna)",note_added_success:"Notatka dodana do planu",servings:"Porcje",decrease_servings:"Zmniejsz porcje",increase_servings:"Zwiększ porcje",edit_mealplan:"Edytuj wpis planu",mealplan_updated_success:"Wpis planu zaktualizowany",save:"Zapisz",add_favorite:"Dodaj do ulubionych",remove_favorite:"Usuń z ulubionych",add_to_shopping_list:"Dodaj do listy zakupów",select_shopping_list:"Wybierz listę zakupów",shopping_list_quantity:"Mnożnik ilości",recipe_added_to_shopping_list:"Przepis dodany do listy zakupów",no_shopping_lists:"Brak dostępnych list zakupów",no_ingredients:"Brak dostępnych składników",next:"Dalej",back:"Wstecz",select_all:"Zaznacz wszystko",import_recipe:"Importuj przepis",import_url:"URL przepisu",import_include_tags:"Uwzględnij tagi",import:"Importuj",recipe_imported_success:"Przepis zaimportowany",open_in_mealie:"Otwórz w Mealie",start_cooking:"Uruchom tryb gotowania",exit_cooking:"Zakończ tryb gotowania",step:"Krok",previous_step:"Poprzedni",next_step:"Następny",step_ingredients:"Do tego kroku",add_timer:"Minutnik",start_timer:"Uruchom minutnik",dismiss_timer:"Zamknij minutnik",timer_done:"Minutnik zakończony: {timer}"},Qt={no_url:"Skonfiguruj adres URL Mealie, aby włączyć obrazy i linki do przepisów."},Jt={no_integration:"Select a Mealie integration in the card settings",missing_config:"Błąd ładowania konfiguracji",error_loading:"Błąd ładowania danych",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Błąd podczas usuwania posiłku",error_updating_mealplan:"Błąd podczas aktualizacji planu posiłków"},Yt={integration:"Mealie integration",entry_types:"Typy posiłków do wyświetlenia",loading:"Ładowanie...",mealie_url:"URL Mealie",image_url:"URL lub ścieżka lokalna obrazów (opcjonalnie)",number_of_recipes:"Liczba przepisów do wyświetlenia",settings_recipes_card:"Konfiguracja wyświetlania",settings_infos:"Informacje o przepisie",settings_image:"Obraz",settings_times:"Czasy",settings_title_layout:"Układ",show_image:"Pokaż obraz",show_rating:"Pokaż ocenę",show_favorite:"Pokaż ulubione",show_servings:"Porcje i ilość",show_description:"Pokaż opis",show_prep_time:"Pokaż czas przygotowania",show_cooking_time:"Pokaż czas gotowania",show_total_time:"Pokaż całkowity czas",layout_mode:"Układ",days_columns:"Kolumny dni",recipes_columns:"Kolumny posiłków",layout_vertical:"Pionowo",layout_horizontal:"Posiłki obok siebie",layout_side_by_side:"Dni obok siebie",layout_days_and_meals_side_by_side:"Dni i posiłki obok siebie",days_range:"Wyświetlane dni",days_range_helper:"Liczba (np. 3 = za 3 dni) lub zakres (np. 0-6 = dziś i 6 kolejnych dni)",show_search:"Pasek wyszukiwania",show_favorites_only:"Tylko ulubione",show_import_button:"Pokaż przycisk importu",show_random_button:"Pokaż przycisk losowego posiłku",settings_meal_actions:"Akcje posiłków",settings_recipe_actions:"Akcje na przepisach",show_add_recipe_button:"Pokaż przycisk Dodaj przepis",show_note_button:"Pokaż przycisk Dodaj notatkę",settings_recipe_view:"Otwieranie przepisów",recipe_view:"Otwórz przepis w",recipe_view_dialog:"Okno w karcie",recipe_view_webview:"Wbudowany widok Mealie",recipe_view_browser:"Nowa karta przeglądarki",recipe_tap_action:"Dotknięcie przepisu",recipe_hold_action:"Długie naciśnięcie przepisu",recipe_double_tap_action:"Dwukrotne dotknięcie przepisu",recipe_action_none:"Nic",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Pokaż przycisk menu ⋮",mealie_group_slug:"Grupa Mealie (slug)",settings_language:"Język",language:"Język",language_auto:"Automatyczny (język Home Assistant)",language_helper:"Zastępuje język Home Assistant dla tej karty, np. aby użyć wariantu regionalnego, takiego jak fr-CA."},Xt={hour:"godzina",hours:"godziny",minute:"minuta",minutes:"minuty",hour_short:"godz",minute_short:"min"},ei={cards:Wt,common:Gt,dialog:Zt,info:Qt,error:Jt,editor:Yt,time:Xt},ti={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Exibir as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Exibir suas receitas da instância Mealie",view_recipe:"Ver receita",day_actions:"Ações do dia",recipe_actions:"Ações da receita",delete_mealplan:"Remover do plano",edit_mealplan:"Editar entrada do plano",random_mealplan:"Refeição aleatória"},ii={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Café da manhã",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche",search_placeholder:"Pesquisar receitas..."},ai={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",select_recipe:"Selecionar uma receita",view_as_list:"Visualização em lista",view_as_grid:"Visualização em grade",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparo",cooking_time:"Cozimento",total_time:"Total",add_note_to_mealplan:"Adicionar uma nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota adicionada ao plano",servings:"Porções",decrease_servings:"Diminuir porções",increase_servings:"Aumentar porções",edit_mealplan:"Editar entrada do plano",mealplan_updated_success:"Entrada do plano atualizada",save:"Salvar",add_favorite:"Adicionar aos favoritos",remove_favorite:"Remover dos favoritos",add_to_shopping_list:"Adicionar à lista de compras",select_shopping_list:"Selecionar lista de compras",shopping_list_quantity:"Multiplicador de quantidade",recipe_added_to_shopping_list:"Receita adicionada à lista de compras",no_shopping_lists:"Nenhuma lista de compras disponível",no_ingredients:"Nenhum ingrediente disponível",next:"Próximo",back:"Voltar",select_all:"Selecionar tudo",import_recipe:"Importar receita",import_url:"URL da receita",import_include_tags:"Incluir tags",import:"Importar",recipe_imported_success:"Receita importada",open_in_mealie:"Abrir no Mealie",start_cooking:"Iniciar modo de cozinha",exit_cooking:"Sair do modo de cozinha",step:"Passo",previous_step:"Anterior",next_step:"Próximo",step_ingredients:"Para este passo",add_timer:"Timer",start_timer:"Iniciar timer",dismiss_timer:"Fechar timer",timer_done:"Timer finalizado: {timer}"},ri={no_url:"Configure a URL Mealie para ativar imagens e links para receitas."},si={no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Erro ao remover refeição",error_updating_mealplan:"Erro ao atualizar plano de refeições"},ni={integration:"Mealie integration",entry_types:"Tipos de refeição para exibir",loading:"Carregando...",mealie_url:"URL do Mealie",image_url:"URL ou caminho local das imagens (opcional)",number_of_recipes:"Número de receitas para exibir",settings_recipes_card:"Configuração de exibição",settings_infos:"Informações da receita",settings_image:"Imagem",settings_times:"Tempos",settings_title_layout:"Layout",show_image:"Exibir imagem",show_rating:"Exibir avaliação",show_favorite:"Mostrar favorito",show_servings:"Porções e Quantidade",show_description:"Exibir descrição",show_prep_time:"Exibir tempo de preparo",show_cooking_time:"Exibir tempo de cozimento",show_total_time:"Exibir tempo total",layout_mode:"Disposição",days_columns:"Colunas de dias",recipes_columns:"Colunas de refeições",layout_vertical:"Vertical",layout_horizontal:"Refeições lado a lado",layout_side_by_side:"Dias lado a lado",layout_days_and_meals_side_by_side:"Dias e refeições lado a lado",days_range:"Dias exibidos",days_range_helper:"Um número (ex.: 3 = daqui a 3 dias) ou um intervalo (ex.: 0-6 = hoje e os 6 dias seguintes)",show_search:"Barra de pesquisa",show_favorites_only:"Apenas favoritos",show_import_button:"Mostrar botão de importação",show_random_button:"Mostrar botão de refeição aleatória",settings_meal_actions:"Ações das refeições",settings_recipe_actions:"Ações nas receitas",show_add_recipe_button:"Mostrar botão Adicionar receita",show_note_button:"Mostrar botão Adicionar nota",settings_recipe_view:"Abertura de receitas",recipe_view:"Abrir a receita em",recipe_view_dialog:"Diálogo no cartão",recipe_view_webview:"Visualização Mealie integrada",recipe_view_browser:"Nova aba do navegador",recipe_tap_action:"Toque em uma receita",recipe_hold_action:"Toque longo em uma receita",recipe_double_tap_action:"Toque duplo em uma receita",recipe_action_none:"Nada",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostrar o botão do menu ⋮",mealie_group_slug:"Grupo do Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma do Home Assistant)",language_helper:"Substitui o idioma do Home Assistant para este cartão, por exemplo para usar uma variante regional como fr-CA."},oi={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},li={cards:ti,common:ii,dialog:ai,info:ri,error:si,editor:ni,time:oi},ci={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Mostrar as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Mostrar as suas receitas da instância Mealie",view_recipe:"Ver receita",day_actions:"Ações do dia",recipe_actions:"Ações da receita",delete_mealplan:"Remover do plano",edit_mealplan:"Editar entrada do plano",random_mealplan:"Refeição aleatória"},di={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Pequeno-almoço",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche",search_placeholder:"Pesquisar receitas..."},pi={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",select_recipe:"Selecionar uma receita",view_as_list:"Vista de lista",view_as_grid:"Vista de grelha",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparação",cooking_time:"Cozimento",total_time:"Total",add_note_to_mealplan:"Adicionar uma nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota adicionada ao plano",servings:"Porções",decrease_servings:"Diminuir porções",increase_servings:"Aumentar porções",edit_mealplan:"Editar entrada do plano",mealplan_updated_success:"Entrada do plano atualizada",save:"Guardar",add_favorite:"Adicionar aos favoritos",remove_favorite:"Remover dos favoritos",add_to_shopping_list:"Adicionar à lista de compras",select_shopping_list:"Selecionar lista de compras",shopping_list_quantity:"Multiplicador de quantidade",recipe_added_to_shopping_list:"Receita adicionada à lista de compras",no_shopping_lists:"Nenhuma lista de compras disponível",no_ingredients:"Nenhum ingrediente disponível",next:"Próximo",back:"Voltar",select_all:"Selecionar tudo",import_recipe:"Importar receita",import_url:"URL da receita",import_include_tags:"Incluir tags",import:"Importar",recipe_imported_success:"Receita importada",open_in_mealie:"Abrir no Mealie",start_cooking:"Iniciar modo de cozinha",exit_cooking:"Sair do modo de cozinha",step:"Passo",previous_step:"Anterior",next_step:"Seguinte",step_ingredients:"Para este passo",add_timer:"Temporizador",start_timer:"Iniciar temporizador",dismiss_timer:"Fechar temporizador",timer_done:"Temporizador terminado: {timer}"},_i={no_url:"Configure o URL Mealie para ativar imagens e links para receitas."},hi={no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Erro ao remover refeição",error_updating_mealplan:"Erro ao atualizar plano de refeições"},ui={integration:"Mealie integration",entry_types:"Tipos de refeição a exibir",loading:"A carregar...",mealie_url:"URL do Mealie",image_url:"URL ou caminho local das imagens (opcional)",number_of_recipes:"Número de receitas a exibir",settings_recipes_card:"Configuração de exibição",settings_infos:"Informações da receita",settings_image:"Imagem",settings_times:"Tempos",settings_title_layout:"Disposição",show_image:"Mostrar imagem",show_rating:"Mostrar avaliação",show_favorite:"Mostrar favorito",show_servings:"Porções e quantidade",show_description:"Mostrar descrição",show_prep_time:"Mostrar tempo de preparação",show_cooking_time:"Mostrar tempo de cozedura",show_total_time:"Mostrar tempo total",layout_mode:"Disposição",days_columns:"Colunas de dias",recipes_columns:"Colunas de refeições",layout_vertical:"Vertical",layout_horizontal:"Refeições lado a lado",layout_side_by_side:"Dias lado a lado",layout_days_and_meals_side_by_side:"Dias e refeições lado a lado",days_range:"Dias apresentados",days_range_helper:"Um número (ex.: 3 = daqui a 3 dias) ou um intervalo (ex.: 0-6 = hoje e os 6 dias seguintes)",show_search:"Barra de pesquisa",show_favorites_only:"Apenas favoritos",show_import_button:"Mostrar botão de importação",show_random_button:"Mostrar botão de refeição aleatória",settings_meal_actions:"Ações das refeições",settings_recipe_actions:"Ações nas receitas",show_add_recipe_button:"Mostrar botão Adicionar receita",show_note_button:"Mostrar botão Adicionar nota",settings_recipe_view:"Abertura de receitas",recipe_view:"Abrir a receita em",recipe_view_dialog:"Diálogo no cartão",recipe_view_webview:"Vista Mealie integrada",recipe_view_browser:"Novo separador do navegador",recipe_tap_action:"Toque numa receita",recipe_hold_action:"Toque longo numa receita",recipe_double_tap_action:"Toque duplo numa receita",recipe_action_none:"Nada",settings_recipe_menu:"Menu ⋮",show_recipe_menu:"Mostrar o botão do menu ⋮",mealie_group_slug:"Grupo do Mealie (slug)",settings_language:"Idioma",language:"Idioma",language_auto:"Automático (idioma do Home Assistant)",language_helper:"Substitui o idioma do Home Assistant para este cartão, por exemplo para usar uma variante regional como fr-CA."},gi={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},mi={cards:ci,common:di,dialog:pi,info:_i,error:hi,editor:ui,time:gi},fi={name_mealplan:"Plan de Mese Mealie",description_mealplan:"Afișează mesele zilei",name_recipes:"Rețete Mealie",description_recipes:"Afișează rețetele tale din instanța Mealie",view_recipe:"Vezi rețeta",day_actions:"Acțiunile zilei",recipe_actions:"Acțiuni rețetă",delete_mealplan:"Șterge din plan",edit_mealplan:"Editează intrarea din plan",random_mealplan:"Masă aleatorie"},vi={no_recipe:"Nicio rețetă",no_mealplan:"Nicio masă",today:"Astăzi",breakfast:"Micul dejun",lunch:"Prânz",dinner:"Cină",side:"Garnitură",dessert:"Desert",drink:"Băutură",snack:"Gustare",search_placeholder:"Caută rețete..."},yi={add_to_mealplan:"Adaugă la planul de mese",add_recipe_to_mealplan:"Adaugă la planul de mese",select_date:"Selectează o dată",select_meal_type:"Tipul mesei",select_recipe:"Selectează o rețetă",view_as_list:"Vizualizare listă",view_as_grid:"Vizualizare grilă",recipe_added_success:"Rețetă adăugată la plan",cancel:"Anulează",add:"Adaugă",mealplan_deleted_success:"Masă ștearsă din plan",confirm_delete_title:"Ștergeți această masă?",confirm:"Confirmă",ingredients:"Ingrediente",instructions:"Instrucțiuni",times:"Timpi",prep_time:"Pregătire",cooking_time:"Gătit",total_time:"Total",add_note_to_mealplan:"Adaugă o notă",note_title:"Titlu",note_text:"Notă (opțional)",note_added_success:"Notă adăugată la plan",servings:"Porții",decrease_servings:"Reduce porțiile",increase_servings:"Crește porțiile",edit_mealplan:"Editează intrarea din plan",mealplan_updated_success:"Intrare din plan actualizată",save:"Salvează",add_favorite:"Adaugă la favorite",remove_favorite:"Elimină din favorite",add_to_shopping_list:"Adaugă la lista de cumpărături",select_shopping_list:"Selectează lista de cumpărături",shopping_list_quantity:"Multiplicator de cantitate",recipe_added_to_shopping_list:"Rețetă adăugată la lista de cumpărături",no_shopping_lists:"Nicio listă de cumpărături disponibilă",no_ingredients:"Niciun ingredient disponibil",next:"Înainte",back:"Înapoi",select_all:"Selectează tot",import_recipe:"Importă rețetă",import_url:"URL rețetă",import_include_tags:"Include etichete",import:"Importă",recipe_imported_success:"Rețetă importată",open_in_mealie:"Deschide în Mealie",start_cooking:"Pornește modul de gătit",exit_cooking:"Ieși din modul de gătit",step:"Pasul",previous_step:"Anterior",next_step:"Următorul",step_ingredients:"Pentru acest pas",add_timer:"Cronometru",start_timer:"Pornește cronometrul",dismiss_timer:"Închide cronometrul",timer_done:"Cronometru terminat: {timer}"},bi={no_url:"Configurează URL-ul Mealie pentru a activa imaginile și linkurile către rețete."},wi={no_integration:"Select a Mealie integration in the card settings",missing_config:"Eroare la încărcarea configurației",error_loading:"Eroare la încărcarea datelor",error_adding_recipe:"Error adding recipe",error_deleting_mealplan:"Eroare la ștergerea mesei",error_updating_mealplan:"Eroare la actualizarea planului de mese"},$i={integration:"Mealie integration",entry_types:"Tipuri de mese de afișat",loading:"Se încarcă...",mealie_url:"URL Mealie",image_url:"URL sau cale locală pentru imagini (opțional)",number_of_recipes:"Număr de rețete de afișat",settings_recipes_card:"Configurare afișare",settings_infos:"Informații rețetă",settings_image:"Imagine",settings_times:"Timpuri",settings_title_layout:"Aspect",show_image:"Afișează imaginea",show_rating:"Afișează evaluarea",show_favorite:"Arată favorit",show_servings:"Porții și Cantitate",show_description:"Afișează descrierea",show_prep_time:"Afișează timpul de preparare",show_cooking_time:"Afișează timpul de gătit",show_total_time:"Afișează timpul total",layout_mode:"Dispunere",days_columns:"Coloane de zile",recipes_columns:"Coloane de mese",layout_vertical:"Vertical",layout_horizontal:"Mese alăturate",layout_side_by_side:"Zile alăturate",layout_days_and_meals_side_by_side:"Zile și mese alăturate",days_range:"Zile afișate",days_range_helper:"Un număr (ex. 3 = peste 3 zile) sau un interval (ex. 0-6 = azi și următoarele 6 zile)",show_search:"Bara de căutare",show_favorites_only:"Doar favorite",show_import_button:"Afișează butonul de import",show_random_button:"Afișează butonul de masă aleatorie",settings_meal_actions:"Acțiuni pentru mese",settings_recipe_actions:"Acțiuni asupra rețetelor",show_add_recipe_button:"Afișează butonul Adaugă rețetă",show_note_button:"Afișează butonul Adaugă notă",settings_recipe_view:"Deschiderea rețetelor",recipe_view:"Deschide rețeta în",recipe_view_dialog:"Dialog în card",recipe_view_webview:"Vizualizare Mealie integrată",recipe_view_browser:"Filă nouă de browser",recipe_tap_action:"Atingere pe o rețetă",recipe_hold_action:"Apăsare lungă pe o rețetă",recipe_double_tap_action:"Atingere dublă pe o rețetă",recipe_action_none:"Nimic",settings_recipe_menu:"Meniu ⋮",show_recipe_menu:"Afișează butonul meniului ⋮",mealie_group_slug:"Grup Mealie (slug)",settings_language:"Limbă",language:"Limbă",language_auto:"Automat (limba Home Assistant)",language_helper:"Înlocuiește limba Home Assistant pentru acest card, de exemplu pentru a folosi o variantă regională precum fr-CA."},ki={hour:"oră",hours:"ore",minute:"minut",minutes:"minute",hour_short:"h",minute_short:"min"},xi={cards:fi,common:vi,dialog:yi,info:bi,error:wi,editor:$i,time:ki},zi={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Visa dagens måltider",name_recipes:"Mealie Recept",description_recipes:"Visa dina recept från Mealie-instansen",view_recipe:"Visa recept",day_actions:"Dagens åtgärder",recipe_actions:"Receptåtgärder",delete_mealplan:"Ta bort från planen",edit_mealplan:"Redigera måltidsplanering",random_mealplan:"Slumpmässig måltid"},Ai={no_recipe:"Inget recept",no_mealplan:"Ingen måltid",today:"Idag",breakfast:"Frukost",lunch:"Lunch",dinner:"Middag",side:"Tillbehör",dessert:"Efterrätt",drink:"Dryck",snack:"Mellanmål",search_placeholder:"Sök recept..."},Ti={add_to_mealplan:"Lägg till i måltidsplanen",add_recipe_to_mealplan:"Lägg till i måltidsplanen",select_date:"Välj ett datum",select_meal_type:"Måltidstyp",select_recipe:"Välj ett recept",view_as_list:"Listvy",view_as_grid:"Rutnätsvy",recipe_added_success:"Receptet har lagts till i planen",cancel:"Avbryt",add:"Lägg till",mealplan_deleted_success:"Måltiden har tagits bort från planen",confirm_delete_title:"Ta bort den här måltiden?",confirm:"Bekräfta",ingredients:"Ingredienser",instructions:"Instruktioner",times:"Tider",prep_time:"Förberedelse",cooking_time:"Tillagning",total_time:"Totalt",add_note_to_mealplan:"Lägg till en anteckning",note_title:"Rubrik",note_text:"Anteckning (valfritt)",note_added_success:"Anteckningen har lagts till i planen",servings:"Portioner",decrease_servings:"Minska antal portioner",increase_servings:"Öka antal portioner",edit_mealplan:"Redigera måltidsplanering",mealplan_updated_success:"Måltidsplaneringen har uppdaterats",save:"Spara",add_favorite:"Lägg till i favoriter",remove_favorite:"Ta bort från favoriter",add_to_shopping_list:"Lägg till i inköpslista",select_shopping_list:"Välj inköpslista",shopping_list_quantity:"Antalsmultiplikator",recipe_added_to_shopping_list:"Receptet har lagts till i inköpslistan",no_shopping_lists:"Inga inköpslistor tillgängliga",no_ingredients:"Inga ingredienser tillgängliga",next:"Nästa",back:"Tillbaka",select_all:"Markera alla",import_recipe:"Importera recept",import_url:"Receptets URL",import_include_tags:"Inkludera taggar",import:"Importera",recipe_imported_success:"Receptet har importerats",open_in_mealie:"Öppna i Mealie",start_cooking:"Starta matlagningsläge",exit_cooking:"Avsluta matlagningsläge",step:"Steg",previous_step:"Föregående",next_step:"Nästa",step_ingredients:"För detta steg",add_timer:"Timer",start_timer:"Starta timer",dismiss_timer:"Stäng timer",timer_done:"Timer klar: {timer}"},Mi={no_url:"Konfigurera Mealie-URL för att aktivera bilder och receptlänkar."},Ii={no_integration:"Välj en Mealie-integration i kortets inställningar",missing_config:"Fel vid inläsning av konfiguration",error_loading:"Fel vid inläsning av data",error_adding_recipe:"Fel när receptet skulle läggas till",error_deleting_mealplan:"Fel när måltiden skulle tas bort",error_updating_mealplan:"Fel när måltidsplanen skulle uppdateras"},Si={integration:"Mealie-integration",entry_types:"Måltidstyper som ska visas",loading:"Laddar...",mealie_url:"Mealie-URL",image_url:"Bild-URL eller lokal sökväg (valfritt)",number_of_recipes:"Antal recept som ska visas",settings_recipes_card:"Visningsinställningar",settings_infos:"Receptdetaljer",settings_image:"Bild",settings_times:"Tider",settings_title_layout:"Layout",show_image:"Visa bild",show_rating:"Visa betyg",show_favorite:"Favoritrecept",show_servings:"Portioner och mängd",show_description:"Visa beskrivning",show_prep_time:"Visa förberedelsetid",show_cooking_time:"Visa tillagningstid",show_total_time:"Visa total tid",layout_mode:"Layout",days_columns:"Dagskolumner",recipes_columns:"Måltidskolumner",layout_vertical:"Vertikal",layout_horizontal:"Måltider sida vid sida",layout_side_by_side:"Dagar sida vid sida",layout_days_and_meals_side_by_side:"Dagar och måltider sida vid sida",days_range:"Dagar som visas",days_range_helper:"Ett antal (t.ex. 3 = 3 dagar från idag) eller ett intervall (t.ex. 0-6 = idag och de följande 6 dagarna)",show_search:"Sökfält",show_favorites_only:"Endast favoriter",show_import_button:"Visa importknapp",show_random_button:"Visa knapp för slumpmässig måltid",settings_meal_actions:"Måltidsåtgärder",settings_recipe_actions:"Receptåtgärder",show_add_recipe_button:"Visa knapp för att lägga till recept",show_note_button:"Visa knapp för att lägga till anteckning",settings_recipe_view:"Öppna recept",recipe_view:"Öppna receptet i",recipe_view_dialog:"Dialogruta i kortet",recipe_view_webview:"Inbäddad Mealie-vy",recipe_view_browser:"Ny webbläsarflik",recipe_tap_action:"Tryck på ett recept",recipe_hold_action:"Långt tryck på ett recept",recipe_double_tap_action:"Dubbeltryck på ett recept",recipe_action_none:"Ingenting",settings_recipe_menu:"Meny ⋮",show_recipe_menu:"Visa knappen för menyn ⋮",mealie_group_slug:"Mealie-grupp (slug)",settings_language:"Språk",language:"Språk",language_auto:"Automatiskt (Home Assistants språk)",language_helper:"Ersätter Home Assistants språk för detta kort, t.ex. för att använda en regional variant som fr-CA."},Ri={hour:"timme",hours:"timmar",minute:"minut",minutes:"minuter",hour_short:"h",minute_short:"min"},Ei={cards:zi,common:Ai,dialog:Ti,info:Mi,error:Ii,editor:Si,time:Ri};const Di={da:He,de:Je,en:nt,es:gt,fr:Object.freeze({__proto__:null,cards:kt,common:xt,default:St,dialog:zt,editor:Mt,error:Tt,info:At,time:It}),"fr-BE":vt,"fr-CA":$t,it:Object.freeze({__proto__:null,cards:Rt,common:Et,default:Ot,dialog:Dt,editor:Lt,error:jt,info:Ct,time:Pt}),nl:Object.freeze({__proto__:null,cards:Nt,common:Ut,default:Kt,dialog:Vt,editor:Bt,error:Ft,info:Ht,time:qt}),pl:Object.freeze({__proto__:null,cards:Wt,common:Gt,default:ei,dialog:Zt,editor:Yt,error:Jt,info:Qt,time:Xt}),"pt-BR":Object.freeze({__proto__:null,cards:ti,common:ii,default:li,dialog:ai,editor:ni,error:si,info:ri,time:oi}),pt:Object.freeze({__proto__:null,cards:ci,common:di,default:mi,dialog:pi,editor:ui,error:hi,info:_i,time:gi}),ro:Object.freeze({__proto__:null,cards:fi,common:vi,default:xi,dialog:yi,editor:$i,error:wi,info:bi,time:ki}),sv:Object.freeze({__proto__:null,cards:zi,common:Ai,default:Ei,dialog:Ti,editor:Si,error:Ii,info:Mi,time:Ri})};function Ci(e,t){const i=Di[t];if(!i)return;const a=e.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,i);return"string"==typeof a?a:void 0}const ji=Object.keys(Di).sort();function Li(e,t,i,a){let r;for(const i of function(e){const t=e.split("-")[0];return[...new Set([e,t,"en"])]}(e))if(r=Ci(t,i),void 0!==r)break;return r??(r=t),i&&a?r.replace(i,a):r}const Pi=[[.125,"⅛"],[.25,"¼"],[1/3,"⅓"],[.375,"⅜"],[.5,"½"],[.625,"⅝"],[2/3,"⅔"],[.75,"¾"],[.875,"⅞"]],Oi=new Map;function Ni(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ui(e){let t=Oi.get(e);return t||(t=function(e){const t=[Li(e,"time.hour"),Li(e,"time.hours")].filter(Boolean).map(Ni),i=[Li(e,"time.minute"),Li(e,"time.minutes")].filter(Boolean).map(Ni);return{hourPattern:new RegExp(`(\\d+)\\s*(?:${t.join("|")})`,"i"),minutePattern:new RegExp(`(\\d+)\\s*(?:${i.join("|")})`,"i")}}(e),Oi.set(e,t)),t}function Vi(e,t="en"){if(!e)return"";const i=e.toLowerCase().trim(),{hourPattern:a,minutePattern:r}=Ui(t),s=i.match(a),n=i.match(r);if(!s&&!n)return i.replace(/\s+/g," ").trim();const o=[];return s&&o.push(`${s[1]} ${Li(t,"time.hour_short")}`),n&&o.push(`${n[1]} ${Li(t,"time.minute_short")}`),o.join(" ")}function Hi(e,t="en"){if(!e)return"";const i=`common.${e}`,a=Li(t,i);return a!==i?a:e.toUpperCase()}function Fi(e){return De.map(t=>({value:t,label:e(`common.${t}`)}))}function Bi(e,t=1,i=!0,a="en"){const r=function(e){if(!e)return"";if("string"==typeof e){if(e.trimStart().startsWith("{"))try{const t=JSON.parse(e);return(t.use_abbreviation??t.useAbbreviation)&&t.abbreviation?t.abbreviation:t.name??""}catch{if(/['"]use_abbreviation['"]\s*:\s*True/.test(e)||/'useAbbreviation'\s*:\s*True/.test(e)){const t=e.match(/['"]abbreviation['"]\s*:\s*'([^']+)'/);if(t?.[1])return t[1]}const t=e.match(/['"]name['"]\s*:\s*'([^']*)'/);return t?.[1]??""}return e}return e.use_abbreviation&&e.abbreviation?e.abbreviation:e.name??""}(e.unit),s=null!=e.quantity&&0!==e.quantity;if(!s&&!e.food?.name)return e.note??e.display??"";const n=s?function(e,t="en"){const i=Math.floor(e),a=e-i;if(a<.02)return i>0?String(i):"0";const r=Pi.find(([e])=>Math.abs(a-e)<.02);return r?i>0?`${i} ${r[1]}`:r[1]:new Intl.NumberFormat(t,{maximumFractionDigits:2,useGrouping:!1}).format(e)}(e.quantity*t,a):null,o=[n,r||null,e.food?.name??null].filter(Boolean).join(" ");return i&&e.note?`${o} (${e.note})`:o}class qi extends Error{constructor(e,t){super(e),this.name="MealieActionError",this.translationKey=e,this.reason=t}get detail(){return this.reason instanceof Error?this.reason.message:""}}function Ki(e){const t=De.indexOf(e);return-1===t?De.length:t}async function Wi(e,t){try{return await t()}catch(t){throw t instanceof qi?t:new qi(e,t)}}async function Gi(e,t){return t||async function(e){const t=await e.callWS({type:"config_entries/get",domain:be}),i=(t.find(e=>"loaded"===e.state)??t[0])?.entry_id;if(!i)throw new qi("error.missing_config");return i}(e)}async function Zi(e,t,i,a,r){const s=await Gi(e,a);return e.callService(be,t,{config_entry_id:s,...i},void 0,!1,r)}async function Qi(e,t,i,a){await Zi(e,t,i,a)}async function Ji(e,t,i,a){const r=await Zi(e,t,i,a,!0);return r?.response??null}function Yi(e){return e?.recipe??null}function Xi(e){const t={date:e.date,entry_type:e.entryType};return e.recipeId?{...t,recipe_id:e.recipeId}:{...t,note_title:e.noteTitle,...e.noteText&&{note_text:e.noteText}}}function ea(e,t={}){return Wi("error.error_loading",async()=>{const i={result_limit:t.resultLimit??we};t.search&&(i.search_terms=t.search);const a=await Ji(e,"get_recipes",i,t.configEntryId);return a?.recipes?.items??[]})}function ta(e,t,i){return Wi("error.error_loading",async()=>Yi(await Ji(e,"get_recipe",{recipe_id:t},i)))}function ia(e,t){return Wi("error.error_adding_recipe",()=>Qi(e,"set_mealplan",Xi(t),t.configEntryId))}async function aa(e,t){const i=await e.callWS({type:"config/entity_registry/list"});return new Map(i.filter(e=>e.platform===be&&e.entity_id.startsWith("todo.")&&(!t||e.config_entry_id===t)).map(e=>[e.unique_id,e.entity_id]))}function ra(e){if(!e)return!1;try{const{protocol:t}=new URL(e);return"http:"===t||"https:"===t}catch{return!1}}function sa(e){return!!e&&e.startsWith("/")&&!e.startsWith("//")}function na(e){return ra(e)||sa(e)}const oa=new WeakMap;function la(e){let t=oa.get(e);return t||(t=function(e){const t=[na(e.image_url)?e.image_url:void 0,e.url];return[...new Set(t.filter(e=>!!e))]}(e),oa.set(e,t)),t}function ca(e){window.open(e,"_blank","noopener,noreferrer")}const da=new Map;function pa(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}const _a=/^(\d{1,3})\s*-\s*(\d{1,3})$/;function ha(e,t){const[i,a,r]=e.split("-").map(Number),s=new Date(i,a-1,r),n=new Date;return n.setHours(0,0,0,0),s.getTime()===n.getTime()?Li(t.locale?.language??"en","common.today"):function(e){let t=da.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric"}),da.set(e,t)),t}(t.locale?.language??"en").format(s)}const ua="mealie-mealplan-updated",ga="mealie-recipes-updated",ma="mealie-recipe-rated",fa="mealie-favorite-toggled",va={[ua]:0,[ga]:0};function ya(e){return va[e]}function ba(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}function wa(e,t){const i=e=>t(e.detail);return window.addEventListener(e,i),()=>window.removeEventListener(e,i)}const $a=s`
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
    height: 4px;
    border-radius: 2px;
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
    font-size: var(--ha-font-size-xl, 20px);
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
    background: var(--warning-color, #ffa600);
    color: var(--text-primary-color, #fff);
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

  .cook-nav {
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    gap: var(--ha-space-2, 8px);
    padding-top: var(--ha-space-2, 8px);
    background: var(--ha-dialog-surface-background, var(--card-background-color));
  }
`,ka=(e,t,i,a)=>{const r={},s=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return s.detail=i,e.dispatchEvent(s),s},xa={shopping_list:"add_recipe_to_shopping_list",interactive_rating:"rate_recipe",favorites:"add_recipe_favorite",import_recipe:"import_recipe",random_mealplan:"set_random_mealplan",edit_mealplan:"update_mealplan",delete_mealplan:"delete_mealplan"};function za(e,t){return!!e?.services?.[be]?.[xa[t]]}const Aa={tiny:"tiny-original.webp",min:"min-original.webp",original:"original.webp"};function Ta(e){return sa(e)||e.startsWith("http")}function Ma(e,t,i){const a=t.replace(/\/$/,"");return sa(a)?function(e,t,i){return t.recipe_id?`${e}/${encodeURIComponent(t.recipe_id)}/images/${Aa[i]}`:null}(a,e,i):function(e,t,i){const a=t.recipe_id||t.slug;return a?`${e}/api/media/recipes/${encodeURIComponent(a)}/images/${Aa[i]}`:null}(a,e,i)}function Ia(e,t,i="min"){return e.image&&Ta(e.image)?[e.image]:t.map(t=>Ma(e,t,i)).filter(e=>!!e)}const Sa=e=>class extends e{constructor(){super(...arguments),this.localize=(e,t,i)=>Li(this.hass?.locale?.language??"en",e,t,i),this.localizeError=(e,t="error.error_loading")=>{if(e instanceof qi){const t=this.localize(e.translationKey);return e.detail?`${t}: ${e.detail}`:t}return e instanceof Error&&e.message?e.message:this.localize(t)}}},{I:Ra}=ae,Ea=e=>e,Da=()=>document.createComment(""),Ca=(e,t,i)=>{const a=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=a.insertBefore(Da(),r),s=a.insertBefore(Da(),r);i=new Ra(t,s,e,e.options)}else{const t=i._$AB.nextSibling,s=i._$AM,n=s!==e;if(n){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==r||n){let e=i._$AA;for(;e!==t;){const t=Ea(e).nextSibling;Ea(a).insertBefore(e,r),e=t}}}return i},ja=(e,t,i=e)=>(e._$AI(t,i),e),La={},Pa=(e,t=La)=>e._$AH=t,Oa=e=>{e._$AR(),e._$AA.remove()},Na=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),Na(e,t);return!0},Ua=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},Va=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Ba(t)}};function Ha(e){void 0!==this._$AN?(Ua(this),this._$AM=e,Va(this)):this._$AM=e}function Fa(e,t=!1,i=0){const a=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(a))for(let e=i;e<a.length;e++)Na(a[e],!1),Ua(a[e]);else null!=a&&(Na(a,!1),Ua(a));else Na(this,e)}const Ba=e=>{e.type==he&&(e._$AP??=Fa,e._$AQ??=Ha)};class qa extends me{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Va(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Na(this,e),Ua(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}function Ka(e){return!!(e.onTap||e.onHold||e.onDoubleTap)}const Wa=new Set(["Enter"," "]);const Ga=ge(class extends qa{constructor(e){if(super(e),this._handlers={},this._holdTimer=null,this._pressOrigin=null,this._holdFired=!1,this._pendingTapTimer=null,this._onPointerDown=e=>{this._holdFired=!1,this._cancelHold(),this._handlers.onHold&&0===e.button&&(this._pressOrigin={x:e.clientX,y:e.clientY},this._holdTimer=setTimeout(this._fireHold,500))},this._onPointerMove=e=>{this._pressOrigin&&Math.hypot(e.clientX-this._pressOrigin.x,e.clientY-this._pressOrigin.y)>10&&this._cancelHold()},this._fireHold=()=>{this._cancelHold(),this._holdFired=!0,this._handlers.onHold?.()},this._cancelHold=()=>{this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=null,this._pressOrigin=null},this._onContextMenu=e=>{(this._holdTimer||this._holdFired)&&(e.preventDefault(),this._holdTimer&&this._fireHold())},this._onClick=()=>{if(this._holdFired)this._holdFired=!1;else{if(this._handlers.onDoubleTap)return this._pendingTapTimer?(this._cancelPendingTap(),void this._handlers.onDoubleTap()):void(this._pendingTapTimer=setTimeout(this._firePendingTap,250));this._handlers.onTap?.()}},this._firePendingTap=()=>{this._pendingTapTimer=null,this._handlers.onTap?.()},this._onKeyDown=e=>{e.target===this._element&&!e.repeat&&Wa.has(e.key)&&this._handlers.onTap&&(e.preventDefault(),this._handlers.onTap())},e.type!==ue)throw new Error("recipePress must be bound to an element")}render(e){return B}update(e,[t]){return this._handlers=t,this._element!==e.element&&(this._element=e.element,this._listen(this._element)),B}disconnected(){this._cancelHold(),this._cancelPendingTap()}_listen(e){e.addEventListener("pointerdown",this._onPointerDown),e.addEventListener("pointermove",this._onPointerMove),e.addEventListener("pointerup",this._cancelHold),e.addEventListener("pointercancel",this._cancelHold),e.addEventListener("pointerleave",this._cancelHold),e.addEventListener("contextmenu",this._onContextMenu),e.addEventListener("click",this._onClick),e.addEventListener("keydown",this._onKeyDown)}_cancelPendingTap(){this._pendingTapTimer&&clearTimeout(this._pendingTapTimer),this._pendingTapTimer=null}}),Za=()=>{},Qa=e=>customElements.get(e)?Za:(e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})(e);var Ja=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,Xa=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?Ya(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&Ja(t,i,s),s};let er=class extends ne{constructor(){super(...arguments),this.rating=0,this.interactive=!1,this.updating=!1,this._hovered=0}_emit(e){this.updating||this.dispatchEvent(new CustomEvent("rate-selected",{detail:{rating:e},bubbles:!1,composed:!1}))}render(){return this.interactive?this._renderInteractive():this._renderReadonly()}_renderReadonly(){const e=this.rating;return H`
      <span class="star-rating">
        ${er.STARS.map(t=>H`<ha-icon icon=${e>=t?"mdi:star":e>=t-.5?"mdi:star-half-full":"mdi:star-outline"}></ha-icon>`)}
      </span>
    `}_renderInteractive(){const e=this._hovered||this.rating;return H`
      <span
        class="star-rating interactive-rating ${this.updating?"updating":""}"
        @mouseleave=${()=>{this._hovered=0}}
      >
        ${er.STARS.map(t=>H`
            <ha-icon
              icon=${e>=t?"mdi:star":"mdi:star-outline"}
              @mouseenter=${()=>{this._hovered=t}}
              @click=${()=>this._emit(t)}
            ></ha-icon>
          `)}
      </span>
    `}};er.styles=s`
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
  `,er.STARS=[1,2,3,4,5],Xa([de({type:Number})],er.prototype,"rating",2),Xa([de({type:Boolean})],er.prototype,"interactive",2),Xa([de({type:Boolean})],er.prototype,"updating",2),Xa([pe()],er.prototype,"_hovered",2),er=Xa([Qa("mealie-star-rating")],er);var tr=Object.defineProperty,ir=(e,t,i,a)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&tr(t,i,s),s};function ar(e){e.currentTarget.parentElement?.classList.remove("image-loading")}function rr(e){const t=e.currentTarget.parentElement;t&&(t.classList.remove("image-loading"),t.classList.add("image-error"))}function sr(e,t,i){const a=[...new Set(Ia(t,i.urls,i.variant??"min").map(t=>function(e,t){return t.startsWith("/")?`${e.auth.data.hassUrl}${t}`:t}(e,t)).filter(na))];if(!a.length)return B;const r=function(e){return!e.image}(t)&&i.onImageMissing?i.onImageMissing:rr;return H`
    <div class="${i.containerClass} image-loading">
      <img
        src=${a[0]}
        alt=${t.name??t.title??""}
        class="${i.imgClass}"
        loading="lazy"
        decoding="async"
        @load=${ar}
        @error=${function(e,t){return i=>{const a=i.currentTarget,r=e[e.indexOf(a.getAttribute("src")??"")+1];r?a.src=r:t(i)}}(a,r)}
      />
    </div>
  `}const nr=e=>{class t extends(Sa(e)){constructor(){super(...arguments),this.error=null,this._loading=!1,this._initialized=!1,this._ratings=new Map,this._updatingRatings=new Set,this._favorites=new Map,this._updatingFavorites=new Set,this._missingImages=new Set}supports(e){return za(this.hass,e)}get baseConfig(){return this.config??{}}recipeWebUrl(e){return function(e,t,i){if(!ra(e)||!t)return null;const a=e.replace(/\/$/,""),r=i?.trim()||Me;return`${a}/g/${encodeURIComponent(r)}/r/${encodeURIComponent(t)}`}(this.baseConfig.url,e?.slug,this.baseConfig.mealie_group_slug)}openRecipe(e){if("browser"!==this.baseConfig.recipe_view)return!0;const t=this.recipeWebUrl(e);return!t||(ca(t),!1)}handleError(e){this.error=this.localizeError(e)}_markImageMissing(e){this._missingImages.has(e)||(this._missingImages=new Set(this._missingImages).add(e))}renderRecipeImage(e,t){if(!t)return B;const i=e.slug??e.recipe_id;return i&&this._missingImages.has(i)?B:sr(this.hass,e,{urls:la(this.baseConfig),variant:"min",containerClass:"recipe-card-image",imgClass:"recipe-image",onImageMissing:i?()=>this._markImageMissing(i):void 0})}renderActionsMenu(e,t){return e.length?H`
        <ha-dropdown @wa-select=${t=>e[Number(t.detail.item.value)]?.onClick()}>
          <ha-icon-button class="plain-icon-button" slot="trigger" .label=${this.localize(t)}>
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </ha-icon-button>
          ${e.map((e,t)=>H`
              <ha-dropdown-item variant=${e.variant??B} value=${t}>
                <ha-icon slot="icon" icon=${e.icon}></ha-icon>
                ${this.localize(e.labelKey)}
              </ha-dropdown-item>
            `)}
        </ha-dropdown>
      `:B}renderCardButtons(e){return e.length?H`<div class="card-buttons">${this.renderActionsMenu(e,"cards.recipe_actions")}</div>`:B}renderPressSurface(e,t){if(!Ka(t))return B;const i=t.onTap;return H`
        <div
          class="recipe-press-surface"
          role=${i?"button":B}
          tabindex=${i?"0":B}
          aria-label=${i?e??B:B}
          ${Ga(t)}
        >
          <ha-ripple></ha-ripple>
        </div>
      `}renderRecipeMedia(e,t,i){return H`${this.renderRecipeImage(e,t)}${this.renderCardButtons(i)}`}renderRecipeName(e){return H`<h4 class="recipe-name">${e.name??e.title}</h4>`}renderRecipeDescription(e,t){return t&&e?H`<div class="recipe-description">${e}</div>`:B}buildTimeRows(e,t=!0,i=!0,a=!0){const r=this.hass?.locale?.language;return[t&&e.prep_time?{icon:"mdi:knife",label:this.localize("dialog.prep_time"),value:Vi(e.prep_time,r)}:null,i&&e.perform_time?{icon:"mdi:pot-steam",label:this.localize("dialog.cooking_time"),value:Vi(e.perform_time,r)}:null,a&&e.total_time?{icon:"mdi:clock-time-three-outline",label:this.localize("dialog.total_time"),value:Vi(e.total_time,r)}:null].filter(Boolean)}renderTimeRows(e){return H`${e.map(e=>H`
          <div class="time-row">
            <ha-icon class="time-row-icon" icon=${e.icon}></ha-icon>
            <span class="time-row-label">${e.label}</span>
            <span class="time-row-value">${e.value}</span>
          </div>
        `)}`}renderRecipeTimes(e,t,i,a){const r=this.buildTimeRows(e,t,i,a);return r.length?H`<div class="recipe-times">${this.renderTimeRows(r)}</div>`:B}async _setRating(e,t,i){if(!e||!this.hass)return;if(this._updatingRatings.has(e))return;const a=this._ratings.get(e)??0;this._ratings=new Map(this._ratings).set(e,t),this._updatingRatings=new Set(this._updatingRatings).add(e);try{await function(e,t,i,a){return Wi("error.error_loading",()=>{if(!t)throw new qi("error.error_loading");return Qi(e,"rate_recipe",{recipe_slug:t,rating:i},a)})}(this.hass,e,t,i),ba(ma,{slug:e,rating:t})}catch{this._ratings=new Map(this._ratings).set(e,a),ka(this,"hass-notification",{message:this.localize("error.error_loading")})}finally{const t=new Set(this._updatingRatings);t.delete(e),this._updatingRatings=t}}async _toggleFavorite(e,t){if(!e||!this.hass)return;if(this._updatingFavorites.has(e))return;const i=this._favorites.get(e)??!1,a=!i;this._favorites=new Map(this._favorites).set(e,a),this._updatingFavorites=new Set(this._updatingFavorites).add(e),ba(fa,{slug:e,favorite:a});try{await(a?function(e,t,i){return Wi("error.error_loading",()=>{if(!t)throw new qi("error.error_loading");return Qi(e,"add_recipe_favorite",{recipe_slug:t},i)})}(this.hass,e,t??void 0):function(e,t,i){return Wi("error.error_loading",()=>{if(!t)throw new qi("error.error_loading");return Qi(e,"remove_recipe_favorite",{recipe_slug:t},i)})}(this.hass,e,t??void 0))}catch{this._favorites=new Map(this._favorites).set(e,i),ba(fa,{slug:e,favorite:i}),ka(this,"hass-notification",{message:this.localize("error.error_loading")})}finally{const t=new Set(this._updatingFavorites);t.delete(e),this._updatingFavorites=t}}renderFavoriteButton(e,t,i){if(!t||!this.supports("favorites"))return B;const a=e?.slug;if(!a)return B;const r=this._favorites.get(a)??!1;return H`
        <ha-icon-button
          class="favorite-button"
          .label=${r?this.localize("dialog.remove_favorite"):this.localize("dialog.add_favorite")}
          .disabled=${this._updatingFavorites.has(a)}
          @click=${e=>{e.stopPropagation(),this._toggleFavorite(a,i)}}
        >
          <ha-icon icon=${r?"mdi:heart":"mdi:heart-outline"}></ha-icon>
        </ha-icon-button>
      `}_renderInteractiveRating(e,t,i){if(!t)return B;const a=e?.slug;if(!a||!this.supports("interactive_rating"))return this.renderStarRating(e?.rating??void 0,t);const r=this._updatingRatings.has(a),s=r?this._ratings.get(a)??e?.rating??0:e?.rating??0;return H`
        <mealie-star-rating
          interactive
          .rating=${s}
          ?updating=${r}
          @rate-selected=${e=>{this._setRating(a,e.detail.rating,i??void 0)}}
        ></mealie-star-rating>
      `}renderStarRating(e,t){return t?H`<mealie-star-rating .rating=${e??0}></mealie-star-rating>`:B}renderServings(e,t){return e&&t?H`<span class="servings-badge">
        <ha-icon icon="mdi:circle-slice-1"></ha-icon>
        <span class="servings-value">${e}</span>
      </span>`:B}renderDetailsSection(e,t,i){return H`
        <ha-expansion-panel outlined expanded>
          <ha-icon slot="leading-icon" icon=${e}></ha-icon>
          <span slot="header" class="details-title">${t}</span>
          <div class="details-content">${i}</div>
        </ha-expansion-panel>
      `}}return ir([pe()],t.prototype,"error"),ir([pe()],t.prototype,"_loading"),ir([pe()],t.prototype,"_initialized"),ir([pe()],t.prototype,"_ratings"),ir([pe()],t.prototype,"_updatingRatings"),ir([pe()],t.prototype,"_favorites"),ir([pe()],t.prototype,"_updatingFavorites"),ir([pe()],t.prototype,"_missingImages"),t},or=new WeakMap;function lr(e,t){let i=or.get(e);i||(i=new Map,or.set(e,i));let a=i.get(t);return a||(a={...e,language:t},i.set(t,a)),a}function cr(e){if(e)try{return Intl.getCanonicalLocales(e)[0]}catch{return}}var dr=Object.defineProperty;class pr extends(nr(ne)){constructor(){super(...arguments),this._watchSignature="",this._unsubscribers=[],this._seenRevision=0,this._pendingReload=!1,this._lastLoadedAt=0,this._onVisibilityChange=()=>{"visible"===document.visibilityState&&this._catchUp()}}refreshSignal(){return null}subscribeExtras(){return[]}watchedEntityIds(){return[]}hasOpenDialog(){return!1}getCardSize(){return 1+2*(this.itemCount()||1)}getGridOptions(){return{rows:"auto",min_columns:6}}findMealieEntities(e){const t=this.hass,i=this.config?.config_entry_id??null,a=t?.entities,r=`${e}.`;if(!a){const e=t?.states??{};return Object.keys(e).filter(e=>e.startsWith(r)&&e.includes("mealie"))}const s=t?.devices;return Object.keys(a).filter(e=>{if(!e.startsWith(r))return!1;const t=a[e];if(!t||"mealie"!==t.platform)return!1;if(i){if(t.config_entry_id)return t.config_entry_id===i;const e=t.device_id&&s?s[t.device_id]:void 0;if(e?.config_entries)return e.config_entries.includes(i)}return!0})}_registryRef(){const e=this.hass;return e?.entities??e?.states}_getWatchedEntityIds(){const e=this.config?.config_entry_id??null,t=this._registryRef();return this._watchedIds&&this._watchedIdsKey===e&&this._watchedRegistryRef===t||(this._watchedIdsKey=e,this._watchedRegistryRef=t,this._watchedIds=this.watchedEntityIds()),this._watchedIds}_computeWatchSignature(){const e=this._getWatchedEntityIds();if(!e.length)return"";const t=this.hass?.states??{};return e.map(e=>{const i=t[e];return i?`${e}=${i.state}@${i.last_updated}`:`${e}=∅`}).join("|")}async loadData(){if(this.hass&&this.config?.config_entry_id&&!this._loading&&!this._initialized){this._loading=!0,this.error=null;try{await this.fetchData(),this._initialized=!0,this._lastLoadedAt=Date.now()}catch(e){this.handleError(e)}finally{this._loading=!1,this._pendingReload&&(this._pendingReload=!1,this._reload())}}}_reload(){const e=this.refreshSignal();e&&(this._seenRevision=ya(e)),this._loading?this._pendingReload=!0:(this._initialized=!1,this.loadData())}_catchUp(){const e=this.refreshSignal(),t=e?ya(e):this._seenRevision,i=t!==this._seenRevision;this._seenRevision=t,this._initialized&&(i||Date.now()-this._lastLoadedAt>=3e4)&&this._reload()}_watchedStateChanged(){if(this._loading)return!1;const e=this._computeWatchSignature();return!!e&&e!==this._watchSignature}_maybeRefreshOnEntityChange(){if(this._loading)return;const e=this._computeWatchSignature();e&&(this.error?e!==this._watchSignature&&(this._watchSignature=e,this.error=null,this._reload()):this._initialized&&(this._watchSignature?e!==this._watchSignature&&(this._watchSignature=e,this._reload()):this._watchSignature=e))}connectedCallback(){super.connectedCallback();const e=this.refreshSignal();var t,i;this._unsubscribers=[...e?[(t=e,i=()=>this._reload(),window.addEventListener(t,i),()=>window.removeEventListener(t,i))]:[],...this.subscribeExtras()],document.addEventListener("visibilitychange",this._onVisibilityChange),this._catchUp()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this._onVisibilityChange),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[],this._watchSignature="",this._watchedIds=void 0,this._watchedIdsKey=void 0,this._watchedRegistryRef=void 0}willUpdate(e){super.willUpdate(e),e.has("hass")&&this.hass&&this._maybeRefreshOnEntityChange(),!this.hass||this._initialized||this._loading||this.error||this.loadData()}_applyLanguage(e){if(e.has("hass")&&this.hass!==this._localizedHass&&(this._rawHass=this.hass),!this._rawHass)return;const t=function(e,t){const i=cr(t);return e?.locale&&i&&e.locale.language!==i?{...e,locale:lr(e.locale,i)}:e}(this._rawHass,this.config?.language);this._localizedHass=t,this.hass!==t&&(this.hass=t)}shouldUpdate(e){if(this._applyLanguage(e),e.size>1||!e.has("hass"))return!0;const t=e.get("hass");return!t||(t.locale!==this.hass.locale||t.services!==this.hass.services||this.hasOpenDialog()||this._watchedStateChanged())}renderLoadingIndicator(){return H`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`}renderErrorAlert(){return H`<ha-alert alert-type="error">${this.error}</ha-alert>`}renderLoading(){return H`
      <ha-card>
        <div class="card-content">${this.renderLoadingIndicator()}</div>
      </ha-card>
    `}renderEmptyState(e){return H`
      <ha-card>
        <div class="card-content">
          <ha-alert alert-type="info">${e}</ha-alert>
        </div>
      </ha-card>
    `}}pr.styles=$a,((e,t,i)=>{for(var a,r=void 0,s=e.length-1;s>=0;s--)(a=e[s])&&(r=a(t,i,r)||r);r&&dr(t,i,r)})([de({attribute:!1})],pr.prototype,"hass");const _r={view_recipe:{labelKey:"cards.view_recipe",icon:"mdi:book-open-variant"},add_to_mealplan:{labelKey:"dialog.add_to_mealplan",icon:"mdi:calendar-plus"},add_to_shopping_list:{labelKey:"dialog.add_to_shopping_list",icon:"mdi:cart-plus"},edit_mealplan:{labelKey:"cards.edit_mealplan",icon:"mdi:pencil"},delete_mealplan:{labelKey:"cards.delete_mealplan",icon:"mdi:trash-can-outline",variant:"danger"}},hr={add_to_shopping_list:"shopping_list",edit_mealplan:"edit_mealplan",delete_mealplan:"delete_mealplan"},ur={view_recipe:"show_view_recipe_button",add_to_mealplan:"show_add_to_mealplan_button",add_to_shopping_list:"show_shopping_list_button",edit_mealplan:"show_edit_mealplan_button",delete_mealplan:"show_delete_mealplan_button"};function gr(e,t){return!1===t.show_recipe_menu?[]:e.filter(e=>t[ur[e]]??!0)}function mr(e,t){const i=hr[t];return!i||za(e,i)}function fr(e){return _r[e].labelKey}function vr(e,t){return e.flatMap(e=>{const i=t[e];return i?[{..._r[e],onClick:i}]:[]})}function yr(e,t){return t&&"none"!==t?e[t]:void 0}function br(e,t){return{onTap:yr(e,t.recipe_tap_action),onHold:yr(e,t.recipe_hold_action),onDoubleTap:yr(e,t.recipe_double_tap_action)}}function wr(e,t,i,a=!1){return H`
    <ha-formfield alignEnd spaceBetween .label=${t} .disabled=${a}>
      <ha-switch .checked=${e} .disabled=${a} @change=${e=>i(e.target.checked)}></ha-switch>
    </ha-formfield>
  `}function $r(e,t,i,a){return H`
    <ha-selector
      .hass=${e}
      .selector=${{text:{}}}
      .value=${t??""}
      .label=${i}
      .required=${!1}
      @value-changed=${e=>a(e.detail.value)}
    ></ha-selector>
  `}const kr=s`
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
`,xr="4.2.0";var zr=Object.defineProperty,Ar=(e,t,i,a)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&zr(t,i,s),s};const Tr=new Map;class Mr extends(Sa(ne)){constructor(){super(...arguments),this._imageIsHash=void 0,this._imageCheckEntry="__unset__",this._computeLabel=e=>({config_entry_id:this.localize("editor.integration")}[e.name]??e.name)}setConfig(e){this.config={...e}}updated(e){if(super.updated(e),!this.hass||!this.config)return;const t=this.config.config_entry_id??null;t!==this._imageCheckEntry&&(this._imageCheckEntry=t,this._imageIsHash=void 0,t&&this._refreshImageFormat(t))}async _refreshImageFormat(e){const t=await async function(e,t){const i=Tr.get(t);if(void 0!==i)return i;let a;try{a=await ea(e,{configEntryId:t,resultLimit:1})}catch{return!0}const r=a[0]?.image,s=!r||!Ta(r);return Tr.set(t,s),s}(this.hass,e);this._imageCheckEntry===e&&(this._imageIsHash=t)}get _needsMealieUrl(){return!!this._imageIsHash||"dialog"!==this.config.recipe_view}_isImageAllowed(e){return!!e?.config_entry_id&&(void 0!==this._imageIsHash&&(!this._imageIsHash||la(e).some(na)))}get _showImageAllowed(){return this._isImageAllowed(this.config)}get _schemaTop(){return[{type:"expandable",title:this.localize("editor.integration"),icon:"mdi:connection",schema:[{name:"config_entry_id",selector:{config_entry:{integration:"mealie"}}}]}]}_commitConfig(e){this.config=e,ka(this,"config-changed",{config:e})}_setValue(e,t){this._commitConfig({...this.config,[e]:t})}_valueChanged(e){const t={...e.detail.value};t.config_entry_id||(t.show_image=!1),this._commitConfig(t)}renderEditorLoading(){return H`<div>${this.localize("editor.loading")}</div>`}renderTopForm(){return H`
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
      ${wr(!!this.config.show_rating,this.localize("editor.show_rating"),e=>this._setValue("show_rating",e))}
      ${wr(!!this.config.show_servings,this.localize("editor.show_servings"),e=>this._setValue("show_servings",e))}
      ${wr(!!this.config.show_description,this.localize("editor.show_description"),e=>this._setValue("show_description",e))}
    `}_setImageSource(e){const t=this._showImageAllowed,i={...this.config,...e},a=this._isImageAllowed(i);this._commitConfig({...i,show_image:a&&(!t||!!i.show_image)})}renderImageDisplayOptions(){const e=this._showImageAllowed;return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_image")}>
        <ha-icon slot="leading-icon" icon="mdi:image-outline"></ha-icon>
        <div class="settings-fields">
          ${this._needsMealieUrl?$r(this.hass,this.config.url,this.localize("editor.mealie_url"),e=>this._setImageSource({url:e||void 0})):B}
          ${this._imageIsHash?$r(this.hass,this.config.image_url,this.localize("editor.image_url"),e=>this._setImageSource({image_url:e||void 0})):B}
          ${wr(!!this.config.show_image&&e,this.localize("editor.show_image"),e=>this._setValue("show_image",e),!e)}
        </div>
      </ha-expansion-panel>
    `}renderRecipeActionsPanel(e,t){return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipe_actions")}>
        <ha-icon slot="leading-icon" icon="mdi:gesture-tap-button"></ha-icon>
        <div class="settings-fields">
          ${this._renderPressActionFields(e,t)}
          <ha-expansion-panel outlined class="nested-panel" .header=${this.localize("editor.settings_recipe_menu")}>
            <ha-icon slot="leading-icon" icon="mdi:dots-vertical"></ha-icon>
            <div class="settings-fields">${this._renderMenuFields(e)}</div>
          </ha-expansion-panel>
        </div>
      </ha-expansion-panel>
    `}_renderPressActionFields(e,t){const i=[...e.filter(e=>mr(this.hass,e)).map(e=>({value:e,label:this.localize(fr(e))})),{value:"none",label:this.localize("editor.recipe_action_none")}];return H`
      <div class="press-action-fields">
        ${[{key:"recipe_tap_action",labelKey:"editor.recipe_tap_action"},{key:"recipe_double_tap_action",labelKey:"editor.recipe_double_tap_action"},{key:"recipe_hold_action",labelKey:"editor.recipe_hold_action"}].map(({key:e,labelKey:a})=>function(e,t,i,a,r){return H`
    <ha-selector
      .hass=${e}
      .selector=${{select:{mode:"dropdown",options:a}}}
      .value=${t}
      .label=${i}
      .required=${!1}
      @value-changed=${e=>r(e.detail.value)}
    ></ha-selector>
  `}(this.hass,this.config[e]??t[e],this.localize(a),i,t=>this._setValue(e,t||"none")))}
      </div>
    `}_renderMenuFields(e){const t=this.config.show_recipe_menu??!0;return H`
      ${wr(t,this.localize("editor.show_recipe_menu"),e=>this._setValue("show_recipe_menu",e))}
      ${e.map(e=>{const i=function(e){return ur[e]}(e);return wr(this.config[i]??!0,this.localize(fr(e)),e=>this._setValue(i,e),!t||!mr(this.hass,e))})}
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
                ${ra(this.config.url)?B:H`<ha-alert alert-type="info">${this.localize("info.no_url")}</ha-alert>`}
                ${$r(this.hass,this.config.mealie_group_slug??Me,this.localize("editor.mealie_group_slug"),e=>this._setValue("mealie_group_slug",e||Me))}
              `}
        </div>
      </ha-expansion-panel>
    `}_languageLabel(e){try{const t=new Intl.DisplayNames([e],{type:"language"}).of(e);return t?`${t.charAt(0).toLocaleUpperCase(e)}${t.slice(1)} · ${e}`:e}catch{return e}}_setLanguage(e){const t={...this.config};e&&"auto"!==e?t.language=e:delete t.language,this._commitConfig(t)}renderLanguageOptions(){const e=[{value:"auto",label:this.localize("editor.language_auto")},...ji.map(e=>({value:e,label:this._languageLabel(e)}))];return H`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_language")}>
        <ha-icon slot="leading-icon" icon="mdi:translate"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{mode:"dropdown",options:e}}}
            .value=${cr(this.config.language)??"auto"}
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
          ${wr(!!this.config.show_prep_time,this.localize("editor.show_prep_time"),e=>this._setValue("show_prep_time",e))}
          ${wr(!!this.config.show_perform_time,this.localize("editor.show_cooking_time"),e=>this._setValue("show_perform_time",e))}
          ${wr(!!this.config.show_total_time,this.localize("editor.show_total_time"),e=>this._setValue("show_total_time",e))}
        </div>
      </ha-expansion-panel>
    `}renderVersion(){return H`
      <div class="editor-version">
        <span class="editor-version-name">Mealie Card</span>
        <span class="editor-version-number">v${xr}</span>
        <a href="${"https://ko-fi.com/A1V11ZZTPI"}" target="_blank"
          ><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" border="0" alt="Buy Me a Coffee at ko-fi.com"
        /></a>
      </div>
    `}}Mr.styles=kr,Ar([de({attribute:!1})],Mr.prototype,"hass"),Ar([pe()],Mr.prototype,"config"),Ar([pe()],Mr.prototype,"_imageIsHash");var Ir=Object.getOwnPropertyDescriptor;const Sr=["view_recipe","add_to_shopping_list","edit_mealplan","delete_mealplan"],Rr={recipe_tap_action:xe,recipe_double_tap_action:Ae,recipe_hold_action:ze};function Er(e,t){if("string"==typeof e)return e;const i=Math.max(0,Math.floor(e??0)),a=Math.max(1,Math.floor(t??1));return a>1?`${i}-${i+a-1}`:String(i)}let Dr=class extends Mr{constructor(){super(...arguments),this._localizeCardLanguage=e=>Li(cr(this.config?.language)??this.hass?.locale?.language??"en",e),this._layoutChanged=e=>{const{layout_mode:t,...i}=e.detail.value,a={...i};a.day_offset=function(e){const t=String(e??"").trim();return/^\d{1,3}$/.test(t)?Number(t):t}(a.day_offset),delete a.days_to_show,a.days_columns=Number(a.days_columns??2),a.recipes_columns=Number(a.recipes_columns??2),a.days_layout="side_by_side"===t||"both"===t?"horizontal":"vertical",a.recipes_layout="horizontal"===t||"both"===t?"horizontal":"vertical",a.config_entry_id||(a.show_image=!1),this._commitConfig(a)},this._computeLayoutLabel=e=>({day_offset:this.localize("editor.days_range"),layout_mode:this.localize("editor.layout_mode"),days_columns:this.localize("editor.days_columns"),recipes_columns:this.localize("editor.recipes_columns")}[e.name]??e.name),this._computeLayoutHelper=e=>"day_offset"===e.name?this.localize("editor.days_range_helper"):void 0}get _columnsOptions(){return[2,3,4].map(e=>({value:String(e),label:String(e)}))}_columnsField(e){return{name:e,selector:{select:{mode:"dropdown",options:this._columnsOptions}}}}get _schemaLayout(){const e={name:"layout_mode",selector:{select:{mode:"dropdown",options:[{value:"vertical",label:this.localize("editor.layout_vertical")},{value:"horizontal",label:this.localize("editor.layout_horizontal")},{value:"side_by_side",label:this.localize("editor.layout_side_by_side")},{value:"both",label:this.localize("editor.layout_days_and_meals_side_by_side")}]}}};return[{type:"expandable",title:this.localize("editor.settings_title_layout"),icon:"mdi:view-grid-outline",schema:[{name:"day_offset",selector:{text:{}}},e,..."horizontal"===this.config.days_layout?[this._columnsField("days_columns")]:[],..."horizontal"===this.config.recipes_layout?[this._columnsField("recipes_columns")]:[]]}]}_toggleEntryType(e){const t=new Set(this.config.entry_types??[]);t.has(e)?t.delete(e):t.add(e),this._commitConfig({...this.config,entry_types:[...t]})}_renderEntryTypes(){const e=new Set(this.config.entry_types??[]);return H`
      <div class="entry-type-chips">
        ${Fi(this._localizeCardLanguage).map(({value:t,label:i})=>H`
            <button class="entry-chip ${e.has(t)?"active":""}" @click=${()=>this._toggleEntryType(t)}>${i}</button>
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
          ${wr(this.config.show_add_recipe_button??!0,this.localize("editor.show_add_recipe_button"),e=>this._setValue("show_add_recipe_button",e))}
          ${wr(this.config.show_random_button??!0,this.localize("editor.show_random_button"),e=>this._setValue("show_random_button",e))}
          ${wr(this.config.show_note_button??!0,this.localize("editor.show_note_button"),e=>this._setValue("show_note_button",e))}
        </div>
      </ha-expansion-panel>
      ${this.renderRecipeActionsPanel(Sr,Rr)}
      <ha-form
        .hass=${this.hass}
        .data=${{...this.config,day_offset:Er(this.config.day_offset,this.config.days_to_show),days_columns:String(this.config.days_columns??2),recipes_columns:String(this.config.recipes_columns??2),layout_mode:this._layoutMode()}}
        .schema=${this._schemaLayout}
        .computeLabel=${this._computeLayoutLabel}
        .computeHelper=${this._computeLayoutHelper}
        @value-changed=${this._layoutChanged}
      ></ha-form>
      ${this.renderVersion()}
    `:this.renderEditorLoading()}_layoutMode(){const e="horizontal"===this.config.days_layout,t="horizontal"===this.config.recipes_layout;return e?t?"both":"side_by_side":t?"horizontal":"vertical"}};Dr=((e,t,i,a)=>{for(var r,s=a>1?void 0:a?Ir(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(s)||s);return s})([Qa("mealie-card-editor")],Dr);var Cr=Object.defineProperty,jr=(e,t,i,a)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&Cr(t,i,s),s};class Lr extends(Sa(ne)){constructor(){super(...arguments),this.configEntryId=null,this.open=!1,this._submitting=!1,this._close=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!1,composed:!1}))}}onOpen(){}updated(e){super.updated(e),e.has("open")&&this.open&&(this._submitting=!1,this.onOpen())}async submit(e){if(!this._submitting){this._submitting=!0;try{await e.run(),ka(this,"hass-notification",{message:"function"==typeof e.success?e.success():this.localize(e.success)}),e.signal&&(t=e.signal,va[t]+=1,window.dispatchEvent(new CustomEvent(t))),!1!==e.closeOnSuccess&&this._close()}catch(t){ka(this,"hass-notification",{message:this.localizeError(t,e.errorKey)})}finally{this._submitting=!1}var t}}renderLoadingIndicator(){return H`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`}renderDateSelector(e,t){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{date:{}}}
        .value=${e}
        .label=${this.localize("dialog.select_date")}
        .required=${!1}
        @value-changed=${e=>t(e.detail.value)}
      ></ha-selector>
    `}renderEntryTypeSelector(e,t){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:Fi(this.localize)}}}
        .value=${e}
        .label=${this.localize("dialog.select_meal_type")}
        .required=${!1}
        @value-changed=${e=>t(e.detail.value)}
      ></ha-selector>
    `}renderTextSelector(e,t,i,a=!1){return H`
      <ha-selector
        .hass=${this.hass}
        .selector=${{text:a?{multiline:!0}:{}}}
        .value=${e}
        .label=${this.localize(t)}
        .required=${!1}
        @value-changed=${e=>i(e.detail.value)}
      ></ha-selector>
    `}renderPrimaryFooter(e,t,i){return H`
      <ha-dialog-footer slot="footer">
        <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${t} ?disabled=${i}>
          ${this._submitting?"...":this.localize(e)}
        </ha-button>
      </ha-dialog-footer>
    `}}Lr.styles=$a,jr([de({attribute:!1})],Lr.prototype,"hass"),jr([de()],Lr.prototype,"configEntryId"),jr([de({type:Boolean})],Lr.prototype,"open"),jr([pe()],Lr.prototype,"_submitting");var Pr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Nr=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?Or(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&Pr(t,i,s),s};let Ur=class extends Lr{constructor(){super(...arguments),this.recipe=null,this.defaultShoppingListId=null,this._step=1,this._shoppingListId="",this._shoppingEntityId="",this._quantity=1,this._lists=[],this._loadingLists=!1,this._listsError=null,this._loadingIngredients=!1,this._ingredients=[],this._ingredientsError=null,this._rawIngredients=null,this._handleAdd=()=>{const e=this.recipe?.recipe_id;if(!e||!this._shoppingListId||!this.hass)return;const t=this._selectables,i=0===t.length||t.every(e=>e.selected);this.submit({run:()=>{return i||!this._canSelectIngredients?(t=this.hass,a={configEntryId:this.configEntryId??void 0,shoppingListId:this._shoppingListId,recipeId:e,quantity:this._quantity},Wi("error.error_loading",()=>Qi(t,"add_recipe_to_shopping_list",{shopping_list_id:a.shoppingListId,recipe_id:a.recipeId,...void 0!==a.quantity&&{recipe_increment_quantity:a.quantity}},a.configEntryId))):function(e,t){return Wi("error.error_loading",async()=>{const i=async()=>{const i=(await e.callService(be,"get_shopping_list_items",{},{entity_id:t.shoppingEntityId},!1,!0)).response;return i?.[t.shoppingEntityId]?.items??[]},a=new Set((await i()).map(e=>e.item_id));await Qi(e,"add_recipe_to_shopping_list",{shopping_list_id:t.shoppingListId,recipe_id:t.recipeId,recipe_increment_quantity:t.quantity},t.configEntryId);const r=(await i()).filter(e=>!a.has(e.item_id)),s=[];for(const e of t.deselectedIngredients){const i=e.food?.food_id??null;let a=i?r.find(e=>e.food_id===i&&!s.includes(e.item_id)):void 0;if(!a){const i=Bi(e,t.quantity,!0,t.language??"en").toLowerCase().trim();a=r.find(e=>!s.includes(e.item_id)&&(e.note?.toLowerCase().trim()===i||e.display?.toLowerCase().trim()===i))}a&&s.push(a.item_id)}s.length>0&&await e.callService("todo","remove_item",{item:s},{entity_id:t.shoppingEntityId},!1)})}(this.hass,{configEntryId:this.configEntryId??void 0,shoppingListId:this._shoppingListId,shoppingEntityId:this._shoppingEntityId,recipeId:e,quantity:this._quantity,deselectedIngredients:this._deselectedIngredients(),language:this.hass?.locale?.language??"en"});var t,a},success:"dialog.recipe_added_to_shopping_list",errorKey:"error.error_loading"})}}onOpen(){this._step=1,this._quantity=1,this._ingredients=[],this._ingredientsError=null,this._rawIngredients=null,this._loadLists()}async _loadLists(){this._loadingLists=!0,this._listsError=null;try{this._lists=await(e=this.hass,t=this.configEntryId??void 0,Wi("error.error_loading",async()=>{const[i,a]=await Promise.all([Ji(e,"get_shopping_lists",{},t),aa(e,t)]),r=e=>{for(const[t,i]of a)if(t.endsWith(`_${e}`))return i;return""};return(i?.shopping_lists??[]).map(e=>({id:e.list_id,name:e.name,entity_id:r(e.list_id)}))}))}catch(e){return this._lists=[],void(this._listsError=this.localizeError(e))}finally{this._loadingLists=!1}var e,t;if(!this._lists.length)return;const i=this.defaultShoppingListId?this._lists.find(e=>e.id===this.defaultShoppingListId):void 0,a=i??this._lists[0];this._shoppingListId=a.id,this._shoppingEntityId=a.entity_id}async _resolveIngredients(){if(this.recipe?.ingredients?.length)return this.recipe.ingredients;const e=this.recipe?.slug??this.recipe?.recipe_id;if(!e)return[];const t=await ta(this.hass,e,this.configEntryId??void 0);return t?.ingredients??[]}async _handleNext(){if(!this._loadingIngredients){if(this._step=2,this._ingredientsError=null,this._ingredients=[],!this._rawIngredients){this._loadingIngredients=!0;try{this._rawIngredients=await this._resolveIngredients()}catch(e){return void(this._ingredientsError=this.localizeError(e))}finally{this._loadingIngredients=!1}}this._ingredients=this._toIngredientItems(this._rawIngredients)}}_toIngredientItems(e){const t=this.hass?.locale?.language??"en";return e.map(e=>{const i=!(!e.title||e.food);return{text:i?e.title:Bi(e,this._quantity,!0,t),selected:!i,isTitle:i}})}_toggleIngredient(e){this._ingredients=this._ingredients.map((t,i)=>i===e?{...t,selected:!t.selected}:t)}_toggleAll(){const e=this._selectables.every(e=>e.selected);this._ingredients=this._ingredients.map(t=>t.isTitle?t:{...t,selected:!e})}get _selectables(){return this._ingredients.filter(e=>!e.isTitle)}get _canSelectIngredients(){return!!this._shoppingEntityId}_deselectedIngredients(){return(this._rawIngredients??[]).filter((e,t)=>{const i=this._ingredients[t];return!!i&&!i.isTitle&&!i.selected})}render(){if(!this.open||!this.recipe)return B;const e=2===this._step||!this._canSelectIngredients,t=1===this._step?!!this._shoppingListId&&this._lists.length>0&&!this._loadingIngredients&&(!e||!!this.recipe.recipe_id&&!this._submitting):!!this.recipe.recipe_id&&!this._submitting&&!this._loadingIngredients&&!this._ingredientsError&&(0===this._ingredients.length||this._selectables.some(e=>e.selected));return H`
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
            ?disabled=${!t}
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
        @value-changed=${e=>{this._shoppingListId=e.detail.value,this._shoppingEntityId=this._lists.find(t=>t.id===e.detail.value)?.entity_id??""}}
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
        ${this._ingredients.map((e,t)=>e.isTitle?H`<div class="ingredient-section-title">${e.text}</div>`:H`
                <label class="ingredient-item">
                  <ha-checkbox .checked=${e.selected} @change=${()=>this._toggleIngredient(t)}></ha-checkbox>
                  <span class="ingredient-item-text">${e.text}</span>
                </label>
              `)}
      </div>
    `}};Nr([de({attribute:!1})],Ur.prototype,"recipe",2),Nr([de()],Ur.prototype,"defaultShoppingListId",2),Nr([pe()],Ur.prototype,"_step",2),Nr([pe()],Ur.prototype,"_shoppingListId",2),Nr([pe()],Ur.prototype,"_shoppingEntityId",2),Nr([pe()],Ur.prototype,"_quantity",2),Nr([pe()],Ur.prototype,"_lists",2),Nr([pe()],Ur.prototype,"_loadingLists",2),Nr([pe()],Ur.prototype,"_listsError",2),Nr([pe()],Ur.prototype,"_loadingIngredients",2),Nr([pe()],Ur.prototype,"_ingredients",2),Nr([pe()],Ur.prototype,"_ingredientsError",2),Ur=Nr([Qa("mealie-shopping-list-dialog")],Ur);const Vr={hour:3600,minute:60},Hr={hour:["time.hour","time.hours","time.hour_short"],minute:["time.minute","time.minutes","time.minute_short"]},Fr="\\d+(?:[.,]\\d+)?",Br=new Map;function qr(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Kr(e){const t=function(e){const t=new Map;for(const i of new Set([e,"en"]))for(const e of Object.keys(Hr))for(const a of Hr[e]){const r=Li(i,a).toLowerCase().trim();r&&r!==a&&!t.has(r)&&t.set(r,e)}return t}(e),i=[...t.keys()].sort((e,t)=>t.length-e.length).map(qr);return{pattern:new RegExp(`(${Fr})(?:\\s*[-–]\\s*(${Fr}))?\\s*(${i.join("|")})(?!\\p{L})`,"giu"),units:t}}function Wr(e){return Number(e.replace(",","."))}function Gr(e,t,i){return"hour"===e?.unit&&"minute"===t.unit&&!i.slice(e.end,t.start).trim()}function Zr(e){return e.seconds>0&&e.seconds<=86400}function Qr(e,t){if(!e)return[];const i=function(e,t){const i=[];for(const a of e){const e=i[i.length-1];Gr(e,a,t)?i[i.length-1]={...a,seconds:e.seconds+a.seconds,label:t.slice(e.start,a.end).trim(),start:e.start}:i.push(a)}return i.map(({seconds:e,label:t})=>({seconds:e,label:t}))}(function(e,t){const i=[];for(const a of e.matchAll(t.pattern)){const e=t.units.get(a[3].toLowerCase());if(!e||void 0===a.index)continue;const r=Wr(a[2]??a[1]);i.push({unit:e,seconds:Math.round(r*Vr[e]),label:a[0].trim(),start:a.index,end:a.index+a[0].length})}return i}(e,function(e){let t=Br.get(e);return t||(t=Kr(e),Br.set(e,t)),t}(t)),e).filter(Zr),a=new Set;return i.filter(e=>!a.has(e.seconds)&&!!a.add(e.seconds))}function Jr(e){const t=Math.max(0,Math.round(e)),i=Math.floor(t/3600),a=Math.floor(t%3600/60),r=String(t%60).padStart(2,"0");return i?`${i}:${String(a).padStart(2,"0")}:${r}`:`${a}:${r}`}class Yr{constructor(){this._sentinel=null,this._requesting=!1,this._wanted=!1}static get isSupported(){return"undefined"!=typeof navigator&&"wakeLock"in navigator}async acquire(){if(this._wanted=!0,!this._sentinel&&!this._requesting&&Yr.isSupported&&"visible"===document.visibilityState){this._requesting=!0;try{const e=await navigator.wakeLock.request("screen");if(!this._wanted)return void await e.release();this._sentinel=e,e.addEventListener("release",()=>{this._sentinel===e&&(this._sentinel=null)})}catch{this._sentinel=null}finally{this._requesting=!1}}}resume(){this._wanted&&this.acquire()}release(){this._wanted=!1;const e=this._sentinel;this._sentinel=null,e?.release().catch(()=>{})}}var Xr=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ts=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?es(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&Xr(t,i,s),s};const is=[300,150,300],as={hours:0,minutes:5,seconds:0};function rs(e){return 3600*(e.hours??0)+60*(e.minutes??0)+(e.seconds??0)}let ss=class extends(Sa(ne)){constructor(){super(...arguments),this.recipe=null,this.scale=1,this._stepIndex=0,this._timers=[],this._customDuration=as,this._showCustomTimer=!1,this._nextTimerId=0,this._wakeLock=new Yr,this._onVisibilityChange=()=>{"visible"===document.visibilityState&&(this._wakeLock.resume(),this._tick())},this._onKeyDown=e=>{if(!function(e){const t=e.composedPath()[0];return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}(e)){if("ArrowRight"===e.key)this._goTo(this._stepIndex+1);else{if("ArrowLeft"!==e.key)return;this._goTo(this._stepIndex-1)}e.preventDefault()}},this._tick=()=>{if(!this._timers.length)return;const e=Date.now(),t=[];this._timers=this._timers.map(i=>{if(i.remaining<=0)return i;const a=Math.max(0,Math.ceil((i.endsAt-e)/1e3));return 0===a&&t.push(i),a===i.remaining?i:{...i,remaining:a}}),t.forEach(e=>this._notifyTimerDone(e)),this._hasRunningTimer()||this._stopTicking()}}get _steps(){return this.recipe?.instructions??[]}get _lang(){return this.hass?.locale?.language??"en"}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDown),document.addEventListener("visibilitychange",this._onVisibilityChange),this._wakeLock.acquire()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("visibilitychange",this._onVisibilityChange),this._wakeLock.release(),this._stopTicking()}willUpdate(e){super.willUpdate(e),e.has("recipe")&&(this._stepIndex=0)}_goTo(e){this._stepIndex=Math.min(Math.max(0,e),Math.max(0,this._steps.length-1))}_startTimer(e,t){e<=0||(this._nextTimerId+=1,this._timers=[...this._timers,{id:this._nextTimerId,label:t,endsAt:Date.now()+1e3*e,remaining:e}],this._startTicking())}_dismissTimer(e){this._timers=this._timers.filter(t=>t.id!==e),this._hasRunningTimer()||this._stopTicking()}_hasRunningTimer(){return this._timers.some(e=>e.remaining>0)}_startTicking(){this._tickHandle??(this._tickHandle=setInterval(this._tick,1e3))}_stopTicking(){void 0!==this._tickHandle&&(clearInterval(this._tickHandle),this._tickHandle=void 0)}_notifyTimerDone(e){ka(this,"hass-notification",{message:this.localize("dialog.timer_done","{timer}",e.label)}),navigator.vibrate?.(is)}_startCustomTimer(){const e=rs(this._customDuration);this._startTimer(e,Jr(e)),this._showCustomTimer=!1}_stepIngredients(e){const t=new Set(e.ingredient_references??[]);return t.size?(this.recipe?.ingredients??[]).filter(e=>!!e.reference_id&&t.has(e.reference_id)):[]}_renderProgress(e,t){return H`
      <div class="cook-progress">
        <span class="cook-step-counter">${this.localize("dialog.step")} ${e+1} / ${t}</span>
        <div class="cook-progress-track">
          <div class="cook-progress-fill" style=${ye({width:(e+1)/t*100+"%"})}></div>
        </div>
      </div>
    `}_renderStepIngredients(e){const t=this._stepIngredients(e);return t.length?H`
      <div class="cook-ingredients">
        <span class="cook-section-label">${this.localize("dialog.step_ingredients")}</span>
        <ul>
          ${t.map(e=>H`<li>${Bi(e,this.scale,!1,this._lang)}</li>`)}
        </ul>
      </div>
    `:B}_renderTimerSuggestion(e){return H`
      <ha-button size="small" appearance="outlined" .title=${this.localize("dialog.start_timer")} @click=${()=>this._startTimer(e.seconds,e.label)}>
        <ha-icon slot="start" icon="mdi:timer-play-outline"></ha-icon>
        ${e.label}
      </ha-button>
    `}_renderTimerControls(e){const t=Qr(e.text,this._lang);return H`
      <div class="cook-timer-controls">
        ${t.map(e=>this._renderTimerSuggestion(e))}
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
          @value-changed=${e=>{this._customDuration=e.detail.value??as}}
        ></ha-selector>
        <ha-button size="small" variant="brand" appearance="accent" ?disabled=${rs(this._customDuration)<=0} @click=${()=>this._startCustomTimer()}>
          ${this.localize("dialog.start_timer")}
        </ha-button>
      </div>
    `}_renderTimer(e){const t=e.remaining<=0;return H`
      <div class="cook-timer ${t?"done":""}" role=${t?"alert":"timer"}>
        <ha-icon icon=${t?"mdi:bell-ring":"mdi:timer-sand"}></ha-icon>
        <span class="cook-timer-label">${e.label}</span>
        <span class="cook-timer-value">${Jr(e.remaining)}</span>
        <ha-icon-button class="cook-timer-dismiss" .label=${this.localize("dialog.dismiss_timer")} @click=${()=>this._dismissTimer(e.id)}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    `}_renderTimers(){return this._timers.length?H`<div class="cook-timers">${this._timers.map(e=>this._renderTimer(e))}</div>`:B}_renderNavigation(e,t){return H`
      <div class="cook-nav">
        <ha-button appearance="plain" ?disabled=${e<=0} @click=${()=>this._goTo(e-1)}>
          <ha-icon slot="start" icon="mdi:chevron-left"></ha-icon>
          ${this.localize("dialog.previous_step")}
        </ha-button>
        <ha-button variant="brand" appearance="accent" ?disabled=${e>=t-1} @click=${()=>this._goTo(e+1)}>
          ${this.localize("dialog.next_step")}
          <ha-icon slot="end" icon="mdi:chevron-right"></ha-icon>
        </ha-button>
      </div>
    `}render(){const e=this._steps;if(!e.length)return B;const t=Math.min(this._stepIndex,e.length-1),i=e[t];return H`
      <div class="cook-mode" tabindex="0">
        ${this._renderProgress(t,e.length)} ${i.title?H`<h3 class="cook-step-title">${i.title}</h3>`:B}
        <p class="cook-step-text">${i.text??""}</p>
        ${this._renderStepIngredients(i)} ${this._renderTimerControls(i)} ${this._renderTimers()} ${this._renderNavigation(t,e.length)}
      </div>
    `}};ss.styles=$a,ts([de({attribute:!1})],ss.prototype,"hass",2),ts([de({attribute:!1})],ss.prototype,"recipe",2),ts([de({type:Number})],ss.prototype,"scale",2),ts([pe()],ss.prototype,"_stepIndex",2),ts([pe()],ss.prototype,"_timers",2),ts([pe()],ss.prototype,"_customDuration",2),ts([pe()],ss.prototype,"_showCustomTimer",2),ss=ts([Qa("mealie-cook-mode")],ss);var ns=Object.defineProperty,os=Object.getOwnPropertyDescriptor,ls=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?os(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&ns(t,i,s),s};let cs=class extends(nr(Lr)){constructor(){super(...arguments),this.config={},this.recipe=null,this.isFavorite=null,this.defaultShoppingListId=null,this._detail=null,this._servings=0,this._shoppingDialogOpen=!1,this._webviewCard=null,this._cooking=!1,this._baseServings=0,this._loadToken=0,this._unsubscribers=[]}get _slug(){return this._detail?.slug??this.recipe?.slug}get _webUrl(){return this.recipeWebUrl(this.recipe)}get _isWebview(){return"webview"===this.config.recipe_view&&!!this._webUrl&&!!window.loadCardHelpers}get _scale(){return this._baseServings>0?this._servings/this._baseServings:1}get _canCook(){return!this._isWebview&&!!this._detail?.instructions?.length}connectedCallback(){super.connectedCallback(),this._unsubscribers=[wa(ma,({slug:e,rating:t})=>{this._detail?.slug===e&&(this._detail={...this._detail,rating:t})}),wa(fa,({slug:e,favorite:t})=>{this._favorites.get(e)!==t&&(this._favorites=new Map(this._favorites).set(e,t))})]}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[]}onOpen(){this._shoppingDialogOpen=!1,this._cooking=!1}updated(e){super.updated(e),e.has("hass")&&this._webviewCard&&(this._webviewCard.hass=this.hass),this.open&&this.recipe&&(e.has("recipe")&&(this._detail=null,this._webviewCard=null,this._cooking=!1),(e.has("open")||e.has("recipe"))&&(this._isWebview?this._webviewCard||this._loadWebview():this._detail||this.loadData()))}async _loadWebview(){const e=this._webUrl,t=window.loadCardHelpers;if(!e||!t)return;const i=this._loadToken+=1;this._loading=!0,this.error=null;try{const a=await t(),r=await a.createCardElement({type:"iframe",url:e,aspect_ratio:"125%"});if(i!==this._loadToken)return;r.hass=this.hass,this._webviewCard=r}catch(e){if(i!==this._loadToken)return;this.handleError(e)}finally{i===this._loadToken&&(this._loading=!1)}}async loadData(){if(!this.open||!this.recipe||!this.hass)return;const e=this.recipe.slug??this.recipe.recipe_id;if(!e)return;const t=this._loadToken+=1;this._loading=!0,this.error=null;try{const i=await ta(this.hass,e,this.configEntryId??void 0);if(t!==this._loadToken)return;this._detail=i,this._baseServings=i?.recipe_servings??0,this._servings=this._baseServings;const a=this._slug;a&&(this._favorites=new Map(this._favorites).set(a,this.isFavorite??this._favorites.get(a)??!1)),this._initialized=!0}catch(e){if(t!==this._loadToken)return;this.handleError(e)}finally{t===this._loadToken&&(this._loading=!1)}}_renderServingsControl(){return this._baseServings<=0?B:H`
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
    `}_renderIngredient(e){return H`<li>${Bi(e,this._scale,!1,this.hass?.locale?.language??"en")}</li>`}_renderCookToggle(){return this._canCook?H`
      <ha-icon-button
        slot="headerActionItems"
        .label=${this.localize(this._cooking?"dialog.exit_cooking":"dialog.start_cooking")}
        @click=${()=>{this._cooking=!this._cooking}}
      >
        <ha-icon icon=${this._cooking?"mdi:close-circle-outline":"mdi:chef-hat"}></ha-icon>
      </ha-icon-button>
    `:B}_renderCookMode(){return H`<mealie-cook-mode .hass=${this.hass} .recipe=${this._detail} .scale=${this._scale}></mealie-cook-mode>`}_renderBody(){return this._isWebview?this._renderWebview():this._detail?this._cooking?this._renderCookMode():this._renderDetail():B}_renderInstruction(e){return H`<li>${e.title?H`<strong>${e.title}: </strong>`:""}${e.text??""}</li>`}_renderDetail(){const e=this._detail,t=this.buildTimeRows(e);return H`
      <div class="dialog-body">
        ${this.renderRecipeImage(e,!!this.config?.show_image)}

        <div class="recipe-meta">
          ${this.renderFavoriteButton(e,this.config.show_favorite??!1,this.configEntryId)}
          ${this._renderInteractiveRating(this._detail,!!this.config?.show_rating,this.configEntryId)}
          ${this.renderServings(e.recipe_servings,!!this.config.show_servings)}
        </div>

        ${t.length?this.renderDetailsSection("mdi:clock-outline",this.localize("dialog.times"),this.renderTimeRows(t)):B}
        ${e.ingredients?.length?this.renderDetailsSection("mdi:food-apple",this.localize("dialog.ingredients"),H`${this._renderServingsControl()}
                <ul>
                  ${e.ingredients.map(e=>this._renderIngredient(e))}
                </ul>`):B}
        ${e.instructions?.length?this.renderDetailsSection("mdi:chef-hat",this.localize("dialog.instructions"),H`<ol>
                ${e.instructions.map(e=>this._renderInstruction(e))}
              </ol>`):B}
      </div>
    `}_renderWebview(){return this._webviewCard?H`<div class="recipe-webview">${this._webviewCard}</div>`:B}_renderOpenInMealieButton(){const e=this._webUrl;return e&&"webview"===this.config.recipe_view?H`
      <ha-icon-button slot="headerActionItems" .label=${this.localize("dialog.open_in_mealie")} @click=${()=>ca(e)}>
        <ha-icon icon="mdi:open-in-new"></ha-icon>
      </ha-icon-button>
    `:B}render(){return this.open&&this.recipe?H`
      <ha-dialog .open=${!0} width="medium" .hass=${this.hass} @closed=${this._close}>
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
    `:B}};ls([de({attribute:!1})],cs.prototype,"config",2),ls([de({attribute:!1})],cs.prototype,"recipe",2),ls([de({attribute:!1})],cs.prototype,"isFavorite",2),ls([de()],cs.prototype,"defaultShoppingListId",2),ls([pe()],cs.prototype,"_detail",2),ls([pe()],cs.prototype,"_servings",2),ls([pe()],cs.prototype,"_shoppingDialogOpen",2),ls([pe()],cs.prototype,"_webviewCard",2),ls([pe()],cs.prototype,"_cooking",2),cs=ls([Qa("mealie-recipe-dialog")],cs);var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,_s=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?ps(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&ds(t,i,s),s};let hs=class extends Lr{constructor(){super(...arguments),this.date=null,this._date="",this._entryType="dinner",this._title="",this._text="",this._handleAdd=()=>{this._date&&this._entryType&&this._title.trim()&&this.hass&&this.submit({run:()=>ia(this.hass,{date:this._date,entryType:this._entryType,noteTitle:this._title.trim(),noteText:this._text.trim()||void 0,configEntryId:this.configEntryId??void 0}),success:"dialog.note_added_success",errorKey:"error.error_adding_recipe",signal:ua})}}onOpen(){this._date=this.date??pa(new Date),this._entryType="dinner",this._title="",this._text=""}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_note_to_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
          ${this.renderTextSelector(this._title,"dialog.note_title",e=>this._title=e)}
          ${this.renderTextSelector(this._text,"dialog.note_text",e=>this._text=e,!0)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._date||!this._entryType||!this._title.trim()||this._submitting)}
      </ha-dialog>
    `:B}};_s([de()],hs.prototype,"date",2),_s([pe()],hs.prototype,"_date",2),_s([pe()],hs.prototype,"_entryType",2),_s([pe()],hs.prototype,"_title",2),_s([pe()],hs.prototype,"_text",2),hs=_s([Qa("mealie-mealplan-note-dialog")],hs);var us=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,ms=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?gs(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&us(t,i,s),s};let fs=class extends Lr{constructor(){super(...arguments),this.targetDate="",this._date="",this._entryType="dinner",this._handleAdd=()=>{this._date&&this._entryType&&this.hass&&this.submit({run:()=>{return e=this.hass,t={date:this._date,entryType:this._entryType,configEntryId:this.configEntryId??void 0},Wi("error.error_adding_recipe",()=>Qi(e,"set_random_mealplan",{date:t.date,entry_type:t.entryType},t.configEntryId));var e,t},success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:ua})}}onOpen(){this._date=this.targetDate||pa(new Date),this._entryType="dinner"}render(){return this.open?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("cards.random_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:B}};ms([de()],fs.prototype,"targetDate",2),ms([pe()],fs.prototype,"_date",2),ms([pe()],fs.prototype,"_entryType",2),fs=ms([Qa("mealie-mealplan-random-dialog")],fs);const vs=(e,t,i)=>{const a=new Map;for(let r=t;r<=i;r++)a.set(e[r],r);return a},ys=ge(class extends me{constructor(e){if(super(e),e.type!==he)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let a;void 0===i?i=t:void 0!==t&&(a=t);const r=[],s=[];let n=0;for(const t of e)r[n]=a?a(t,n):n,s[n]=i(t,n),n++;return{values:s,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,a]){const r=(e=>e._$AH)(e),{values:s,keys:n}=this.dt(t,i,a);if(!Array.isArray(r))return this.ut=n,s;const o=this.ut??=[],l=[];let c,d,p=0,_=r.length-1,h=0,u=s.length-1;for(;p<=_&&h<=u;)if(null===r[p])p++;else if(null===r[_])_--;else if(o[p]===n[h])l[h]=ja(r[p],s[h]),p++,h++;else if(o[_]===n[u])l[u]=ja(r[_],s[u]),_--,u--;else if(o[p]===n[u])l[u]=ja(r[p],s[u]),Ca(e,l[u+1],r[p]),p++,u--;else if(o[_]===n[h])l[h]=ja(r[_],s[h]),Ca(e,r[p],r[_]),_--,h++;else if(void 0===c&&(c=vs(n,h,u),d=vs(o,p,_)),c.has(o[p]))if(c.has(o[_])){const t=d.get(n[h]),i=void 0!==t?r[t]:null;if(null===i){const t=Ca(e,r[p]);ja(t,s[h]),l[h]=t}else l[h]=ja(i,s[h]),Ca(e,r[p],i),r[t]=null;h++}else Oa(r[_]),_--;else Oa(r[p]),p++;for(;h<=u;){const t=Ca(e,l[u+1]);ja(t,s[h]),l[h++]=t}for(;p<=_;){const e=r[p++];null!==e&&Oa(e)}return this.ut=n,Pa(e,l),F}});var bs=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,$s=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?ws(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&bs(t,i,s),s};let ks=class extends ne{constructor(){super(...arguments),this.value="",this.placeholder=""}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent("search-changed",{detail:{value:e},bubbles:!1,composed:!1}))}_onInput(e){this._emit(e.target.value)}_clear(){this._emit("")}render(){return customElements.get("ha-input-search")?this._renderInputSearch():this._renderTextfield()}_renderInputSearch(){return H` <ha-input-search appearance="outlined" .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}></ha-input-search> `}_renderTextfield(){return H`
      <ha-textfield icon .iconTrailing=${!!this.value} .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}>
        <ha-icon slot="leadingIcon" icon="mdi:magnify"></ha-icon>
        ${this.value?H`
              <ha-icon-button slot="trailingIcon" .label=${this.placeholder} @click=${this._clear}>
                <ha-icon icon="mdi:close"></ha-icon>
              </ha-icon-button>
            `:B}
      </ha-textfield>
    `}};ks.styles=s`
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
  `,$s([de()],ks.prototype,"value",2),$s([de()],ks.prototype,"placeholder",2),ks=$s([Qa("mealie-recipe-search")],ks);var xs=Object.defineProperty,zs=Object.getOwnPropertyDescriptor,As=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?zs(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&xs(t,i,s),s};const Ts="mealie-card:add-recipe-view";let Ms=class extends Lr{constructor(){super(...arguments),this.date=null,this.imageBaseUrls=[],this.showImage=!1,this._date="",this._entryType="dinner",this._recipes=[],this._recipeId="",this._searching=!1,this._view=function(){try{return"grid"===localStorage.getItem(Ts)?"grid":"list"}catch{return"list"}}(),this._searchDebounce=null,this._searchRequest=0,this._toggleView=()=>{this._view="list"===this._view?"grid":"list",function(e){try{localStorage.setItem(Ts,e)}catch{return}}(this._view)},this._handleAdd=()=>{const e=this._recipeId;e&&this._date&&this._entryType&&this.hass&&this.submit({run:()=>ia(this.hass,{date:this._date,entryType:this._entryType,recipeId:e,configEntryId:this.configEntryId??void 0}),success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:ua})}}onOpen(){this._date=this.date??pa(new Date),this._entryType="dinner",this._recipes=[],this._recipeId="",this._cancelPendingSearch(),this._search("")}disconnectedCallback(){super.disconnectedCallback(),this._cancelPendingSearch()}_cancelPendingSearch(){this._searchDebounce&&(clearTimeout(this._searchDebounce),this._searchDebounce=null)}_onSearch(e){this._cancelPendingSearch(),this._searchDebounce=setTimeout(()=>{this._searchDebounce=null,this._search(e.trim())},300)}async _search(e){const t=++this._searchRequest;this._searching=!0;let i=[];try{i=await ea(this.hass,{configEntryId:this.configEntryId??void 0,resultLimit:30,search:e||void 0})}catch(e){this.open&&t===this._searchRequest&&ka(this,"hass-notification",{message:this.localizeError(e)})}t===this._searchRequest&&(this._searching=!1,this._showRecipes(i))}_showRecipes(e){this._recipes=function(e){return e.filter(e=>!!e.recipe_id)}(e),this._recipes.some(e=>e.recipe_id===this._recipeId)||(this._recipeId="")}_renderViewToggle(){if(!this.showImage)return B;const e="list"===this._view;return H`
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
    `;var e}_renderThumbnail(e){const t=sr(this.hass,e,{urls:this.imageBaseUrls,variant:"tiny",containerClass:"recipe-thumb",imgClass:"recipe-thumb-img"});return t===B?H`<div class="recipe-thumb image-error"></div>`:t}_renderRecipeOption(e){const t=e.recipe_id===this._recipeId;return H`
      <button
        type="button"
        role="radio"
        class="recipe-option ${t?"selected":""}"
        aria-checked=${t?"true":"false"}
        @click=${()=>{this._recipeId=e.recipe_id}}
      >
        ${this._renderThumbnail(e)}
        <span class="recipe-option-name">${e.name}</span>
      </button>
    `}_renderRecipeOptions(){return H`
      <div class="recipe-options-${this._view}" role="radiogroup" aria-label=${this.localize("dialog.select_recipe")}>
        ${ys(this._recipes,e=>e.recipe_id,e=>this._renderRecipeOption(e))}
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
    `:B}};As([de()],Ms.prototype,"date",2),As([de({attribute:!1})],Ms.prototype,"imageBaseUrls",2),As([de({type:Boolean})],Ms.prototype,"showImage",2),As([pe()],Ms.prototype,"_date",2),As([pe()],Ms.prototype,"_entryType",2),As([pe()],Ms.prototype,"_recipes",2),As([pe()],Ms.prototype,"_recipeId",2),As([pe()],Ms.prototype,"_searching",2),As([pe()],Ms.prototype,"_view",2),Ms=As([Qa("mealie-mealplan-add-recipe-dialog")],Ms);var Is=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Rs=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?Ss(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&Is(t,i,s),s};let Es=class extends Lr{constructor(){super(...arguments),this.planRecipe=null,this._date="",this._entryType="dinner",this._title="",this._text="",this._handleSave=()=>{if(!(this.planRecipe&&this._date&&this._entryType&&this.hass))return;const e={configEntryId:this.configEntryId??void 0,mealplanId:String(this.planRecipe.mealplan_id),date:this._date,entryType:this._entryType};if(this._isNote){const t=this._title.trim();if(!t)return;return void this._save({...e,noteTitle:t,noteText:this._text.trim()||void 0})}const t=this.planRecipe.recipe?.recipe_id;t&&this._save({...e,recipeId:t})}}get _isNote(){return!this.planRecipe?.recipe}onOpen(){this.planRecipe&&(this._date=this.planRecipe.mealplan_date,this._entryType=this.planRecipe.entry_type,this._title=this.planRecipe.title??"",this._text=this.planRecipe.description??"")}_save(e){this.submit({run:()=>function(e,t){return Wi("error.error_updating_mealplan",()=>Qi(e,"update_mealplan",{mealplan_id:t.mealplanId,...Xi(t)},t.configEntryId))}(this.hass,e),success:"dialog.mealplan_updated_success",errorKey:"error.error_updating_mealplan",signal:ua})}render(){if(!this.open||!this.planRecipe)return B;const e=this._isNote?"":H`<span slot="headerTitle">${this.planRecipe.recipe?.name??""}</span>`;return H`
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
    `}};Rs([de({attribute:!1})],Es.prototype,"planRecipe",2),Rs([pe()],Es.prototype,"_date",2),Rs([pe()],Es.prototype,"_entryType",2),Rs([pe()],Es.prototype,"_title",2),Rs([pe()],Es.prototype,"_text",2),Es=Rs([Qa("mealie-mealplan-edit-dialog")],Es);var Ds=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,js=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?Cs(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&Ds(t,i,s),s};let Ls=class extends Lr{constructor(){super(...arguments),this.entry=null,this._handleDelete=()=>{this.entry&&this.hass&&this.submit({run:()=>{return e=this.hass,t=String(this.entry.id),i=this.configEntryId??void 0,Wi("error.error_deleting_mealplan",()=>Qi(e,"delete_mealplan",{mealplan_id:t},i));var e,t,i},success:"dialog.mealplan_deleted_success",errorKey:"error.error_deleting_mealplan",signal:ua})}}render(){return this.open&&this.entry?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.entry.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.confirm_delete_title")}</span>

        <div class="dialog-body-recipe">
          <span class="dialog-type">${Hi(this.entry.entryType,this.hass?.locale?.language)}</span>
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
    `:B}};js([de({attribute:!1})],Ls.prototype,"entry",2),Ls=js([Qa("mealie-mealplan-delete-dialog")],Ls);var Ps=Object.defineProperty,Os=(e,t,i,a)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&Ps(t,i,s),s};const Ns=["view_recipe","add_to_shopping_list","edit_mealplan","delete_mealplan"];class Us extends pr{constructor(){super(...arguments),this.recipes=[],this._dialogRecipe=null,this._confirmDeleteEntry=null,this._noteDialogDate=null,this._randomDialogDate=null,this._addRecipeDate=null,this._editDialogEntry=null,this._shoppingRecipe=null}get _showAddRecipeButton(){return this.config.show_add_recipe_button??!0}get _showRandomButton(){return this.supports("random_mealplan")&&(this.config.show_random_button??!0)}get _showNoteButton(){return this.config.show_note_button??!0}get _dateRange(){const{start:e,count:t}=function(e,t){const i=Math.max(1,Math.floor(t||1));if("number"==typeof e)return{start:Math.max(0,Math.floor(e)),count:i};if("string"!=typeof e)return{start:0,count:i};const a=e.trim(),r=_a.exec(a);if(r){const e=Number(r[1]),t=Number(r[2]);return{start:Math.min(e,t),count:Math.min(31,Math.abs(t-e)+1)}}return/^\d{1,3}$/.test(a)?{start:Number(a),count:i}:{start:0,count:i}}(this.config.day_offset,this.config.days_to_show??1);return function(e,t=0){const i=Math.max(1,Math.floor(e)),a=Math.floor(t),r=new Date;return Array.from({length:i},(e,t)=>pa(new Date(r.getFullYear(),r.getMonth(),r.getDate()+a+t)))}(t,e)}get _daysHorizontal(){return"horizontal"===this.config.days_layout}get _recipesHorizontal(){return"horizontal"===this.config.recipes_layout}_columnStyle(e,t,i){return e?ye({[t]:String(Math.max(1,Math.floor(i??2)))}):B}_groupByDate(){const e=new Map;for(const t of this.recipes){const i=e.get(t.mealplan_date);i?i.push(t):e.set(t.mealplan_date,[t])}return e}_scheduleMidnightRefresh(){this._clearMidnightTimer();const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,5,0);this._midnightTimer=setTimeout(()=>{this._reload(),this._scheduleMidnightRefresh()},t.getTime()-e.getTime())}_clearMidnightTimer(){this._midnightTimer&&(clearTimeout(this._midnightTimer),this._midnightTimer=void 0)}watchedEntityIds(){return this.findMealieEntities("calendar")}itemCount(){return this.recipes.length}hasOpenDialog(){return!!(this._dialogRecipe||this._shoppingRecipe||this._editDialogEntry||this._confirmDeleteEntry||this._noteDialogDate||this._randomDialogDate||this._addRecipeDate)}refreshSignal(){return ua}subscribeExtras(){return[wa(ma,({slug:e,rating:t})=>{this.recipes=this.recipes.map(i=>i.recipe?.slug===e?{...i,recipe:{...i.recipe,rating:t}}:i)})]}connectedCallback(){super.connectedCallback(),this._scheduleMidnightRefresh()}disconnectedCallback(){super.disconnectedCallback(),this._clearMidnightTimer()}setConfig(e){this.config=function(e){return Ee(e,Se)}(e),this._reload()}static getConfigElement(){return document.createElement("mealie-card-editor")}static getStubConfig(){return{...Se}}async fetchData(){const e=this._dateRange,t=await(i=this.hass,a={configEntryId:this.config.config_entry_id??void 0,startDate:e[0],endDate:e[e.length-1]},Wi("error.error_loading",async()=>{const e=await Ji(i,"get_mealplan",{start_date:a.startDate,end_date:a.endDate},a.configEntryId);return(e?.mealplan??[]).sort((e,t)=>Ki(e.entry_type)-Ki(t.entry_type))}));var i,a;const r=this.config.entry_types;this.recipes=r?.length?t.filter(e=>r.includes(e.entry_type)):t}render(){return this.hass&&this.config?this.config.config_entry_id?H`<ha-card>${this._renderContent()} ${this._renderDialogs()}</ha-card>`:this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}_renderContent(){if(this.error)return H`<div class="card-content">${this.renderErrorAlert()}</div>`;if((this._loading||!this._initialized)&&!this.recipes.length)return H`<div class="card-content">${this.renderLoadingIndicator()}</div>`;const e=this._groupByDate();return H`
      <div class="days-wrapper" aria-busy=${this._loading?"true":"false"}>
        <div
          class="${this._daysHorizontal?"days-horizontal":"days-vertical"}"
          style=${this._columnStyle(this._daysHorizontal,"--mealie-day-columns",this.config.days_columns)}
        >
          ${this._dateRange.map(t=>this._renderDaySection(t,e.get(t)??[]))}
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
    `}_renderDaySection(e,t){return H`
      <div class="day-section">
        ${this._renderDayHeader(e)}
        <div class="card-content">
          ${t.length?H`<div
                class="${this._recipesHorizontal?"recipes-horizontal":"recipes-vertical"}"
                style=${this._columnStyle(this._recipesHorizontal,"--mealie-recipe-columns",this.config.recipes_columns)}
              >
                ${t.map(e=>this._renderRecipeCard(e))}
              </div>`:H`<ha-alert alert-type="info">${this.localize("common.no_mealplan")}</ha-alert>`}
        </div>
      </div>
    `}_renderDayHeader(e){return H`
      <div class="card-header-row">
        <div class="date-label">${ha(e,this.hass)}</div>
        <div class="header-actions">${this.renderActionsMenu(this._dayActions(e),"cards.day_actions")}</div>
      </div>
    `}_dayActions(e){const t=[];return this._showAddRecipeButton&&t.push({labelKey:"dialog.add_recipe_to_mealplan",icon:"mdi:calendar-plus",onClick:()=>{this._addRecipeDate=e}}),this._showRandomButton&&t.push({labelKey:"cards.random_mealplan",icon:"mdi:dice-6",onClick:()=>{this._randomDialogDate=e}}),this._showNoteButton&&t.push({labelKey:"dialog.add_note_to_mealplan",icon:"mdi:note-plus-outline",onClick:()=>{this._noteDialogDate=e}}),t}_planHandlers(e){const t=e.recipe;return{view_recipe:t?()=>{this.openRecipe(t)&&(this._dialogRecipe=t)}:void 0,add_to_shopping_list:t&&this.supports("shopping_list")?()=>{this._shoppingRecipe=t}:void 0,edit_mealplan:this.supports("edit_mealplan")?()=>{this._editDialogEntry=e}:void 0,delete_mealplan:this.supports("delete_mealplan")?()=>{this._confirmDeleteEntry={id:e.mealplan_id,name:e.recipe?.name??e.title??"",entryType:e.entry_type,date:e.mealplan_date}}:void 0}}_renderRecipeCard(e){const t=this._planHandlers(e),i=br(t,this.config),a=vr(gr(Ns,this.config),t);return H`
      <div class="recipe-card ${Ka(i)?"pressable":""}">
        ${this.renderPressSurface(e.recipe?.name??e.title,i)}
        <div class="recipe-card-body">
          <div class="recipe-type">${Hi(e.entry_type,this.hass?.locale?.language)}</div>
          ${e.recipe?this._renderRecipeWithData(e.recipe,a):this._renderRecipeWithoutData(e,a)}
        </div>
      </div>
    `}_renderRecipeWithData(e,t){return H`
      ${this.renderRecipeMedia(e,this.config.show_image,t)}
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      <div class="recipe-meta">
        ${this._renderInteractiveRating(e,this.config.show_rating,this.config.config_entry_id)}
        ${this.renderServings(e.recipe_servings,this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
      ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
    `}_renderRecipeWithoutData(e,t){return H`
      ${this.renderRecipeMedia(e,!1,t)}
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      ${this.renderRecipeDescription(e.description??"",!0)}
    `}}Os([pe()],Us.prototype,"config"),Os([pe()],Us.prototype,"recipes"),Os([pe()],Us.prototype,"_dialogRecipe"),Os([pe()],Us.prototype,"_confirmDeleteEntry"),Os([pe()],Us.prototype,"_noteDialogDate"),Os([pe()],Us.prototype,"_randomDialogDate"),Os([pe()],Us.prototype,"_addRecipeDate"),Os([pe()],Us.prototype,"_editDialogEntry"),Os([pe()],Us.prototype,"_shoppingRecipe");var Vs=Object.getOwnPropertyDescriptor;const Hs=["view_recipe","add_to_mealplan","add_to_shopping_list"],Fs={recipe_tap_action:$e,recipe_double_tap_action:Ae,recipe_hold_action:ke};let Bs=class extends Mr{get _favoritesSupported(){return za(this.hass,"favorites")}renderInfosDisplayFields(){return H`
      ${super.renderInfosDisplayFields()}
      ${this._favoritesSupported?wr(!!this.config.show_favorite,this.localize("editor.show_favorite"),e=>this._setValue("show_favorite",e)):B}
    `}render(){return this.hass&&this.config?H`
      ${this.renderTopForm()} ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()}
      ${this.renderRecipeActionsPanel(Hs,Fs)} ${this.renderRecipeViewOptions()} ${this.renderLanguageOptions()}

      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${e=this.hass,t=this.config.result_limit,i=this.localize("editor.number_of_recipes"),a=1,r=100,s=e=>this._setValue("result_limit",e),H`
    <ha-selector
      .hass=${e}
      .selector=${{number:{min:a,max:r,mode:"box",step:1}}}
      .value=${t??a}
      .label=${i}
      .required=${!1}
      @value-changed=${e=>s(e.detail.value)}
    ></ha-selector>
  `}
          ${wr(!!this.config.show_search,this.localize("editor.show_search"),e=>this._setValue("show_search",e))}
          ${this._favoritesSupported?wr(!!this.config.show_favorites_only,this.localize("editor.show_favorites_only"),e=>this._setValue("show_favorites_only",e)):B}
          ${wr(!!this.config.show_import_button,this.localize("editor.show_import_button"),e=>this._setValue("show_import_button",e))}
        </div>
      </ha-expansion-panel>
      ${this.renderVersion()}
    `:this.renderEditorLoading();var e,t,i,a,r,s}};Bs=((e,t,i,a)=>{for(var r,s=a>1?void 0:a?Vs(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(s)||s);return s})([Qa("mealie-recipe-card-editor")],Bs);var qs=Object.defineProperty,Ks=Object.getOwnPropertyDescriptor,Ws=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?Ks(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&qs(t,i,s),s};let Gs=class extends Lr{constructor(){super(...arguments),this.recipe=null,this.imageBaseUrls=[],this._date="",this._entryType="dinner",this._imageMissing=!1,this._handleAdd=()=>{const e=this.recipe?.recipe_id;e&&this._date&&this._entryType&&this.hass&&this.submit({run:()=>ia(this.hass,{date:this._date,entryType:this._entryType,recipeId:e,configEntryId:this.configEntryId??void 0}),success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:ua})}}onOpen(){this._date=pa(new Date),this._entryType="dinner",this._imageMissing=!1}_renderImage(){return!this.recipe||this._imageMissing?B:sr(this.hass,this.recipe,{urls:this.imageBaseUrls,variant:"original",containerClass:"detail-image",imgClass:"detail-image-img",onImageMissing:()=>{this._imageMissing=!0}})}render(){return this.recipe?H`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.add_recipe_to_mealplan")}</span>

        <div class="dialog-body">
          ${this._renderImage()} ${this.renderDateSelector(this._date,e=>this._date=e)}
          ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this.recipe.recipe_id||!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:B}};Ws([de({attribute:!1})],Gs.prototype,"recipe",2),Ws([de({attribute:!1})],Gs.prototype,"imageBaseUrls",2),Ws([pe()],Gs.prototype,"_date",2),Ws([pe()],Gs.prototype,"_entryType",2),Ws([pe()],Gs.prototype,"_imageMissing",2),Gs=Ws([Qa("mealie-mealplan-dialog")],Gs);var Zs=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,Js=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?Qs(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&Zs(t,i,s),s};let Ys=class extends Lr{constructor(){super(...arguments),this._url="",this._includeTags=!1,this._importedName=null,this._handleImport=()=>{this._url.trim()&&this.hass&&(this._importedName=null,this.submit({run:async()=>{const e=await(t=this.hass,i={url:this._url.trim(),includeTags:this._includeTags,configEntryId:this.configEntryId??void 0},Wi("error.error_loading",async()=>Yi(await Ji(t,"import_recipe",{url:i.url,...i.includeTags&&{include_tags:!0}},i.configEntryId))));var t,i;this._importedName=e?.name??e?.slug??""},success:()=>`${this.localize("dialog.recipe_imported_success")}${this._importedName?`: ${this._importedName}`:""}`,errorKey:"error.error_loading",signal:ga,closeOnSuccess:!1}))}}onOpen(){this._url="",this._includeTags=!1,this._importedName=null}render(){return this.open?H`
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
    `:B}};Js([pe()],Ys.prototype,"_url",2),Js([pe()],Ys.prototype,"_includeTags",2),Js([pe()],Ys.prototype,"_importedName",2),Ys=Js([Qa("mealie-recipe-import-dialog")],Ys);var Xs=Object.defineProperty,en=(e,t,i,a)=>{for(var r,s=void 0,n=e.length-1;n>=0;n--)(r=e[n])&&(s=r(t,i,s)||s);return s&&Xs(t,i,s),s};const tn=["add_to_mealplan","add_to_shopping_list","view_recipe"];class an extends pr{constructor(){super(...arguments),this.recipes=[],this._mealplanRecipe=null,this._dialogRecipe=null,this._searchQuery="",this._importDialogOpen=!1,this._shoppingRecipe=null,this._searchDebounce=null,this._favoriteRecipesCache=null,this._favoriteIdsCache=null}refreshSignal(){return ga}subscribeExtras(){return[wa(ma,({slug:e,rating:t})=>{this.recipes=this.recipes.map(i=>i.slug===e?{...i,rating:t}:i)}),wa(fa,({slug:e,favorite:t})=>{this._favoriteIdsCache=null,this._favorites.get(e)!==t&&(this._favorites=new Map(this._favorites).set(e,t)),this.config?.show_favorites_only&&this._favoriteRecipesCache&&(this.recipes=this._visibleFavoriteRecipes())})]}disconnectedCallback(){super.disconnectedCallback(),this._searchDebounce&&(clearTimeout(this._searchDebounce),this._searchDebounce=null)}setConfig(e){this.config=function(e){return Ee(e,Re)}(e),this._reload()}watchedEntityIds(){return this.findMealieEntities("sensor").filter(e=>e.endsWith("_recipes"))}itemCount(){return this.recipes.length}hasOpenDialog(){return!!this._dialogRecipe||!!this._mealplanRecipe||!!this._shoppingRecipe||this._importDialogOpen}_invalidateFavoriteCaches(){this._favoriteRecipesCache=null,this._favoriteIdsCache=null}_reload(){this._invalidateFavoriteCaches(),super._reload()}async fetchData(){this.recipes=this.config.show_favorites_only&&this.supports("favorites")?await this._loadFavoriteRecipes():await this._loadAllRecipes()}async _favoriteIds(){if(!this.supports("favorites"))return new Set;if(!this._favoriteIdsCache){const i=await(e=this.hass,t=this.config.config_entry_id??void 0,Wi("error.error_loading",async()=>{const i=await Ji(e,"get_recipe_favorites",{},t);return i?.favorites??[]}));this._favoriteIdsCache=new Set(i.map(e=>e.recipe_id))}var e,t;return this._favoriteIdsCache}async _loadFavoriteRecipes(){if(!this._favoriteRecipesCache){const e=await this._favoriteIds(),t=await ea(this.hass,{configEntryId:this.config.config_entry_id??void 0,resultLimit:9999});this._favoriteRecipesCache=t.filter(t=>e.has(t.recipe_id??"")),this.config.show_favorite&&(this._favorites=new Map(this._favoriteRecipesCache.map(e=>[e.slug,!0])))}return this._visibleFavoriteRecipes()}_visibleFavoriteRecipes(){const e=this._favoriteRecipesCache??[];return this._applyFavoriteSearch(e.filter(e=>!1!==this._favorites.get(e.slug)))}async _loadAllRecipes(){const e=this.config.show_favorite&&this.supports("favorites"),[t,i]=await Promise.all([ea(this.hass,{configEntryId:this.config.config_entry_id??void 0,resultLimit:this.config.result_limit??we,search:this._searchQuery||void 0}),e?this._favoriteIds():null]);return i&&(this._favorites=new Map(t.map(e=>[e.slug,i.has(e.recipe_id??"")]))),t}_applyFavoriteSearch(e){const t=this._searchQuery.toLowerCase();return t?e.filter(e=>e.name?.toLowerCase().includes(t)):e}_onSearch(e){this._searchQuery=e,this.config.show_favorites_only&&this._favoriteRecipesCache?this.recipes=this._visibleFavoriteRecipes():(this._searchDebounce&&clearTimeout(this._searchDebounce),this._searchDebounce=setTimeout(()=>this._reload(),300))}static getConfigElement(){return document.createElement("mealie-recipe-card-editor")}static getStubConfig(){return{...Re}}render(){return this.config?this.config.config_entry_id?H`${this._renderCardShell(this._renderContent())} ${this._renderDialogs()}`:this.renderEmptyState(this.localize("error.no_integration")):this.renderLoading()}_renderContent(){if(this.error)return this.renderErrorAlert();const e=!!this.recipes?.length;return!this._loading&&this._initialized||e?e?H`<div class="recipes-wrapper" aria-busy=${this._loading?"true":"false"}>
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
    `}_renderToolbar(){const e=this.config.show_search??!1,t=this.config.show_import_button&&this.supports("import_recipe");return e||t?H`
      <div class="card-toolbar">
        ${e?H`<mealie-recipe-search
              .value=${this._searchQuery}
              .placeholder=${this.localize("common.search_placeholder")}
              @search-changed=${e=>this._onSearch(e.detail.value)}
            ></mealie-recipe-search>`:B}
        ${t?H`<ha-icon-button
                    .label=${this.localize("dialog.import_recipe")}
                    @click=${()=>{this._importDialogOpen=!0}}
                  >
                    <ha-icon icon="mdi:cloud-download"></ha-icon>
                  </ha-icon-button>`:B}
      </div>
    `:B}_recipeHandlers(e){return{add_to_mealplan:()=>{this._mealplanRecipe=e},add_to_shopping_list:this.supports("shopping_list")?()=>{this._shoppingRecipe=e}:void 0,view_recipe:()=>{this.openRecipe(e)&&(this._dialogRecipe=e)}}}_renderRecipeInfo(e){return H`
      <div class="recipe-title">${this.renderRecipeName(e)}</div>
      <div class="recipe-meta">
        ${this.renderFavoriteButton(e,this.config.show_favorite??!1,this.config.config_entry_id)}
        ${this._renderInteractiveRating(e,this.config.show_rating,this.config.config_entry_id)}
        ${this.renderServings(e.recipe_servings,this.config.show_servings)}
      </div>
      ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
    `}_renderRecipe(e){const t=this._recipeHandlers(e),i=br(t,this.config);return H`
      <div class="recipe-card ${Ka(i)?"pressable":""}">
        ${this.renderPressSurface(e.name,i)}
        ${this.renderRecipeMedia(e,this.config.show_image,vr(gr(tn,this.config),t))}
        ${this._renderRecipeInfo(e)}
        ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
      </div>
    `}}en([pe()],an.prototype,"config"),en([pe()],an.prototype,"recipes"),en([pe()],an.prototype,"_mealplanRecipe"),en([pe()],an.prototype,"_dialogRecipe"),en([pe()],an.prototype,"_searchQuery"),en([pe()],an.prototype,"_importDialogOpen"),en([pe()],an.prototype,"_shoppingRecipe"),customElements.get("mealie-mealplan-card")||customElements.define("mealie-mealplan-card",Us),customElements.get("mealie-recipe-card")||customElements.define("mealie-recipe-card",an),window.customCards=window.customCards||[];[{type:"mealie-mealplan-card",name:Li("en","cards.name_mealplan"),description:Li("en","cards.description_mealplan"),configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"},{type:"mealie-recipe-card",name:Li("en","cards.name_recipes"),description:Li("en","cards.description_recipes"),configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"}].forEach(e=>{window.customCards?.some(t=>t.type===e.type)||window.customCards?.push(e)}),console.info(`%c MEALIE-CARD %c ${xr}`,"color: white; background: orange; font-weight: 700;","color: orange; background: white; font-weight: 700;");export{Us as MealieMealplanCard,an as MealieRecipeCard};
