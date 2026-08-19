const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let s=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=a.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&a.set(i,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new s(a,e,i)},n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,_=globalThis,g=_.trustedTypes,u=g?g.emptyScript:"",m=_.reactiveElementPolyfillSupport,f=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>!o(e,t),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&l(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const r=a?.call(this);s?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,t=[...c(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,a)=>{if(t)i.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of a){const a=document.createElement("style"),s=e.litNonce;void 0!==s&&a.setAttribute("nonce",s),a.textContent=t.cssText,i.appendChild(a)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=a;const r=s.fromAttribute(t,e.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,t,i,a=!1,s){if(void 0!==e){const r=this.constructor;if(!1===a&&(s=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??v)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:s},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,m?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,z=e=>e,k=$.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+I,R=`<${A}>`,S=document,M=()=>S.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,C="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,O=/>/g,N=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,U=/"/g,F=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),H=new WeakMap,q=S.createTreeWalker(S,129);function K(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,a=[];let s,r=2===t?"<svg>":3===t?"<math>":"",n=j;for(let t=0;t<i;t++){const i=e[t];let o,l,d=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===j?"!--"===l[1]?n=P:void 0!==l[1]?n=O:void 0!==l[2]?(F.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=s??j,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?N:'"'===l[3]?U:L):n===U||n===L?n=N:n===P||n===O?n=j:(n=N,s=void 0);const p=n===N&&e[t+1].startsWith("/>")?" ":"";r+=n===j?i+R:d>=0?(a.push(o),i.slice(0,d)+E+i.slice(d)+I+p):i+I+(-2===d?t:p)}return[K(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class Z{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let s=0,r=0;const n=e.length-1,o=this.parts,[l,d]=G(e,t);if(this.el=Z.createElement(l,i),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=q.nextNode())&&o.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(E)){const t=d[r++],i=a.getAttribute(e).split(I),n=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?ee:"?"===n[1]?te:"@"===n[1]?ie:X}),a.removeAttribute(e)}else e.startsWith(I)&&(o.push({type:6,index:s}),a.removeAttribute(e));if(F.test(a.tagName)){const e=a.textContent.split(I),t=e.length-1;if(t>0){a.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],M()),q.nextNode(),o.push({type:2,index:++s});a.append(e[t],M())}}}else if(8===a.nodeType)if(a.data===A)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=a.data.indexOf(I,e+1));)o.push({type:7,index:s}),e+=I.length-1}s++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,a){if(t===B)return t;let s=void 0!==a?i._$Co?.[a]:i._$Cl;const r=T(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=s:i._$Cl=s),void 0!==s&&(t=Q(e,s._$AS(e,t.values),s,a)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??S).importNode(t,!0);q.currentNode=a;let s=q.nextNode(),r=0,n=0,o=i[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new Y(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new ae(s,this,e)),this._$AV.push(t),o=i[++n]}r!==o?.index&&(s=q.nextNode(),r++)}return q.currentNode=S,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new J(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return void 0===t&&H.set(e.strings,t=new Z(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const s of e)a===t.length?t.push(i=new Y(this.O(M()),this.O(M()),this,this.options)):i=t[a],i._$AI(s),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=z(e).nextSibling;z(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,a){const s=this.strings;let r=!1;if(void 0===s)e=Q(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==B,r&&(this._$AH=e);else{const a=e;let n,o;for(e=s[0],n=0;n<s.length-1;n++)o=Q(this,a[i+n],t,n),o===B&&(o=this._$AH[n]),r||=!T(o)||o!==this._$AH[n],o===W?e=W:e!==W&&(e+=(o??"")+s[n+1]),this._$AH[n]=o}r&&!a&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ie extends X{constructor(e,t,i,a,s){super(e,t,i,a,s),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??W)===B)return;const i=this._$AH,a=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==W&&(i===W||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const se=$.litHtmlPolyfillSupport;se?.(Z,Y),($.litHtmlVersions??=[]).push("3.3.3");const re=globalThis;class ne extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let s=a._$litPart$;if(void 0===s){const e=i?.renderBefore??null;a._$litPart$=s=new Y(t.insertBefore(M(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}ne._$litElement$=!0,ne.finalized=!0,re.litElementHydrateSupport?.({LitElement:ne});const oe=re.litElementPolyfillSupport;oe?.({LitElement:ne}),(re.litElementVersions??=[]).push("4.2.2");const le={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},de=(e=le,t,i)=>{const{kind:a,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,s,e,!0,i)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const s=this[a];t.call(this,i),this.requestUpdate(a,s,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};function ce(e){return(t,i)=>"object"==typeof i?de(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function pe(e){return ce({...e,state:!0,attribute:!1})}const he="mealie",_e={show_image:!1,show_rating:!1,show_servings:!1,show_prep_time:!0,show_total_time:!0,show_perform_time:!0,show_description:!1},ge="home",ue={url:"",recipe_view:"dialog",mealie_group_slug:ge},me={type:"custom:mealie-mealplan-card",entry_types:[],recipes_layout:"vertical",days_layout:"vertical",days_to_show:1,day_offset:0,show_random_button:!0,show_note_button:!0,default_shopping_list_id:"",..._e,...ue},fe={type:"custom:mealie-recipe-card",result_limit:10,show_search:!1,show_favorites_only:!1,show_favorite:!1,show_import_button:!1,default_shopping_list_id:"",..._e,...ue};function ye(e,t){const i={...e};for(const e of Object.keys(t))i[e]=i[e]??t[e];return i}const ve=["breakfast","lunch","dinner","side","dessert","drink","snack"];var be={name_mealplan:"Mealie Måltidsplan",description_mealplan:"Vis dagens måltider",name_recipes:"Mealie Opskrifter",description_recipes:"Vis dine opskrifter fra Mealie-instansen",view_recipe:"Vis opskrift",delete_mealplan:"Fjern fra plan",edit_mealplan:"Rediger måltidsplan",random_mealplan:"Tilfældigt måltid"},we={no_recipe:"Ingen opskrift",no_mealplan:"Intet måltid",today:"I dag",breakfast:"Morgenmad",lunch:"Frokost",dinner:"Aftensmad",side:"Tilbehør",dessert:"Dessert",drink:"Drik",snack:"Snack",search_placeholder:"Søg opskrifter..."},$e={add_to_mealplan:"Tilføj til måltidsplan",add_recipe_to_mealplan:"Tilføj til måltidsplan",select_date:"Vælg en dato",select_meal_type:"Måltidstype",recipe_added_success:"Opskrift tilføjet til plan",cancel:"Annuller",close:"Luk",add:"Tilføj",mealplan_deleted_success:"Måltid fjernet fra plan",confirm_delete_title:"Fjern dette måltid?",confirm_delete_message:"Denne handling kan ikke fortrydes.",confirm:"Bekræft",ingredients:"Ingredienser",instructions:"Vejledning",times:"Tider",prep_time:"Forberedelse",cooking_time:"Tilberedning",total_time:"Total",add_note_to_mealplan:"Tilføj en note",note_title:"Titel",note_text:"Note (valgfri)",note_added_success:"Note tilføjet til plan",servings:"Portioner",decrease_servings:"Færre portioner",increase_servings:"Flere portioner",edit_mealplan:"Rediger måltidsplan",mealplan_updated_success:"Måltidsplan opdateret",save:"Gem",add_favorite:"Tilføj til favoritter",remove_favorite:"Fjern fra favoritter",add_to_shopping_list:"Tilføj til indkøbsliste",select_shopping_list:"Vælg indkøbsliste",shopping_list_quantity:"Mængdemultiplikator",recipe_added_to_shopping_list:"Opskrift tilføjet til indkøbsliste",no_shopping_lists:"Ingen indkøbslister tilgængelige",no_ingredients:"Ingen ingredienser tilgængelige",next:"Næste",back:"Tilbage",select_all:"Vælg alle",deselect_all:"Fravælg alle",import_recipe:"Importer opskrift",import_url:"Opskrift-URL",import_include_tags:"Inkluder tags",import:"Importer",recipe_imported_success:"Opskrift importeret",open_in_mealie:"Åbn i Mealie"},ze={no_url:"Konfigurer Mealie URL for at aktivere billeder og opskriftslinks."},ke={invalid_config:"Ugyldig konfiguration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fejl ved indlæsning af konfiguration",error_loading:"Fejl ved indlæsning af data",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fejl ved sletning af måltid",error_updating_mealplan:"Fejl ved opdatering af måltidsplan"},xe={integration:"Mealie integration",entry_types:"Måltidstyper der skal vises",loading:"Indlæser...",mealie_url:"Mealie URL",number_of_recipes:"Antal opskrifter der skal vises",number_of_recipes_helper:"Antal opskrifter der skal vises (standard 10).",settings_recipes_card:"Visningskonfiguration",settings_infos:"Opskriftsinformation",settings_image:"Billede",settings_times:"Tider",settings_title_layout:"Layout",show_image:"Vis billede",show_rating:"Vis bedømmelse",show_favorite:"Vis favorit",show_servings:"Portioner & Mængde",show_description:"Vis beskrivelse",show_prep_time:"Vis forberedelsestid",show_cooking_time:"Vis tilberedningstid",show_total_time:"Vis total tid",days_layout:"Placering af dage",layout_vertical:"Lodret",layout_horizontal:"Måltider side om side",layout_side_by_side:"Dage side om side",layout_days_and_meals_side_by_side:"Dage og måltider side om side",days_to_show:"Antal dage der skal vises",day_offset:"Startdags-forskydning",days_count:"{count} dage",show_search:"Søgelinje",show_favorites_only:"Kun favoritter",show_import_button:"Vis importknap",show_random_button:"Vis knap til tilfældig måltid",settings_meal_actions:"Måltidshandlinger",show_note_button:"Vis knap Tilføj note",settings_recipe_view:"Åbning af opskrifter",recipe_view:"Åbn opskriften i",recipe_view_dialog:"Dialog i kortet",recipe_view_webview:"Integreret Mealie-visning",recipe_view_browser:"Ny browserfane",mealie_group_slug:"Mealie-gruppe (slug)"},Ee={hour:"time",hours:"timer",minute:"minut",minutes:"minutter",hour_short:"t",minute_short:"min"},Ie={cards:be,common:we,dialog:$e,info:ze,error:ke,editor:xe,time:Ee},Ae={name_mealplan:"Mealie Speiseplan",description_mealplan:"Heutige Mahlzeiten anzeigen",name_recipes:"Mealie Rezepte",description_recipes:"Zeigen Sie Ihre Rezepte von der Mealie-Instanz an",view_recipe:"Rezept anzeigen",delete_mealplan:"Aus dem Plan löschen",edit_mealplan:"Eintrag bearbeiten",random_mealplan:"Zufälliges Gericht"},Re={no_recipe:"Kein Rezept",no_mealplan:"Keine Mahlzeit",today:"Heute",breakfast:"Frühstück",lunch:"Mittagessen",dinner:"Abendessen",side:"Beilage",dessert:"Dessert",drink:"Getränk",snack:"Snack",search_placeholder:"Rezepte suchen..."},Se={add_to_mealplan:"Zum Speiseplan hinzufügen",add_recipe_to_mealplan:"zum Speiseplan hinzufügen",select_date:"Datum auswählen",select_meal_type:"Mahlzeittyp",recipe_added_success:"Rezept zum Plan hinzugefügt",cancel:"Abbrechen",close:"Schließen",add:"Hinzufügen",mealplan_deleted_success:"Mahlzeit aus dem Plan entfernt",confirm_delete_title:"Diese Mahlzeit entfernen?",confirm_delete_message:"Diese Aktion kann nicht rückgängig gemacht werden.",confirm:"Bestätigen",ingredients:"Zutaten",instructions:"Anleitung",times:"Zeiten",prep_time:"Vorbereitung",cooking_time:"Kochen",total_time:"Gesamt",add_note_to_mealplan:"Notiz hinzufügen",note_title:"Titel",note_text:"Notiz (optional)",note_added_success:"Notiz zum Plan hinzugefügt",servings:"Portionen",decrease_servings:"Weniger Portionen",increase_servings:"Mehr Portionen",edit_mealplan:"Eintrag bearbeiten",mealplan_updated_success:"Eintrag aktualisiert",save:"Speichern",add_favorite:"Zu Favoriten hinzufügen",remove_favorite:"Aus Favoriten entfernen",add_to_shopping_list:"Zur Einkaufsliste hinzufügen",select_shopping_list:"Einkaufsliste auswählen",shopping_list_quantity:"Mengenmultiplikator",recipe_added_to_shopping_list:"Rezept zur Einkaufsliste hinzugefügt",no_shopping_lists:"Keine Einkaufslisten verfügbar",no_ingredients:"Keine Zutaten verfügbar",next:"Weiter",back:"Zurück",select_all:"Alle auswählen",deselect_all:"Alle abwählen",import_recipe:"Rezept importieren",import_url:"Rezept-URL",import_include_tags:"Tags einschließen",import:"Importieren",recipe_imported_success:"Rezept importiert",open_in_mealie:"In Mealie öffnen"},Me={no_url:"Konfigurieren Sie die Mealie-URL, um Bilder und Rezeptlinks zu aktivieren."},Te={invalid_config:"Ungültige Konfiguration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fehler beim Laden der Konfiguration",error_loading:"Fehler beim Laden der Daten",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fehler beim Löschen der Mahlzeit",error_updating_mealplan:"Fehler beim Aktualisieren des Speiseplans"},De={integration:"Mealie integration",entry_types:"Anzuzeigende Mahlzeittypen",loading:"Wird geladen...",mealie_url:"Mealie URL",number_of_recipes:"Anzahl der anzuzeigenden Rezepte",number_of_recipes_helper:"Anzahl der anzuzeigenden Rezepte (Standard 10).",settings_recipes_card:"Anzeigekonfiguration",settings_infos:"Rezeptinfos",settings_image:"Bild",settings_times:"Zeiten",settings_title_layout:"Layout",show_image:"Bild anzeigen",show_rating:"Bewertung anzeigen",show_favorite:"Favorit anzeigen",show_servings:"Portionen & Menge",show_description:"Beschreibung anzeigen",show_prep_time:"Vorbereitungszeit anzeigen",show_cooking_time:"Kochzeit anzeigen",show_total_time:"Gesamtzeit anzeigen",days_layout:"Anordnung der Tage",layout_vertical:"Vertikal",layout_horizontal:"Mahlzeiten nebeneinander",layout_side_by_side:"Tage nebeneinander",layout_days_and_meals_side_by_side:"Tage und Mahlzeiten nebeneinander",days_to_show:"Anzahl anzuzeigender Tage",day_offset:"Startversatz (Tage)",days_count:"{count} Tage",show_search:"Suchleiste",show_favorites_only:"Nur Favoriten",show_import_button:"Import-Schaltfläche anzeigen",show_random_button:"Zufalls-Mahlzeit-Schaltfläche anzeigen",settings_meal_actions:"Mahlzeiten-Aktionen",show_note_button:"Notiz-Button anzeigen",settings_recipe_view:"Öffnen von Rezepten",recipe_view:"Rezept öffnen in",recipe_view_dialog:"Dialog in der Karte",recipe_view_webview:"Eingebettete Mealie-Ansicht",recipe_view_browser:"Neuer Browser-Tab",mealie_group_slug:"Mealie-Gruppe (Slug)"},Ce={hour:"Stunde",hours:"Stunden",minute:"Minute",minutes:"Minuten",hour_short:"Std",minute_short:"Min"},je={cards:Ae,common:Re,dialog:Se,info:Me,error:Te,editor:De,time:Ce},Pe={name_mealplan:"Mealie Meal Plan",description_mealplan:"Display today's meals",name_recipes:"Mealie Recipes",description_recipes:"Display your recipes from Mealie instance",view_recipe:"View recipe",delete_mealplan:"Delete from plan",edit_mealplan:"Edit meal plan entry",random_mealplan:"Random meal"},Oe={no_recipe:"No recipe",no_mealplan:"No meal",today:"Today",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",side:"Side",dessert:"Dessert",drink:"Drink",snack:"Snack",search_placeholder:"Search recipes..."},Ne={add_to_mealplan:"Add to meal plan",add_recipe_to_mealplan:"Add to meal plan",select_date:"Select a date",select_meal_type:"Meal type",recipe_added_success:"Recipe added to plan",cancel:"Cancel",close:"Close",add:"Add",mealplan_deleted_success:"Meal removed from plan",confirm_delete_title:"Remove this meal?",confirm_delete_message:"This action cannot be undone.",confirm:"Confirm",ingredients:"Ingredients",instructions:"Instructions",times:"Times",prep_time:"Preparation",cooking_time:"Cooking",total_time:"Total",add_note_to_mealplan:"Add a note",note_title:"Title",note_text:"Note (optional)",note_added_success:"Note added to plan",servings:"Servings",decrease_servings:"Decrease servings",increase_servings:"Increase servings",edit_mealplan:"Edit meal plan entry",mealplan_updated_success:"Meal plan entry updated",save:"Save",add_favorite:"Add to favorites",remove_favorite:"Remove from favorites",add_to_shopping_list:"Add to shopping list",select_shopping_list:"Select shopping list",shopping_list_quantity:"Quantity multiplier",recipe_added_to_shopping_list:"Recipe added to shopping list",no_shopping_lists:"No shopping lists available",no_ingredients:"No ingredients available",next:"Next",back:"Back",select_all:"Select all",deselect_all:"Deselect all",import_recipe:"Import recipe",import_url:"Recipe URL",import_include_tags:"Include tags",import:"Import",recipe_imported_success:"Recipe imported",open_in_mealie:"Open in Mealie"},Le={no_url:"Configure Mealie URL to enable images and recipe links."},Ue={invalid_config:"Invalid configuration",no_integration:"Select a Mealie integration in the card settings",missing_config:"Error loading configuration",error_loading:"Error loading data",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Error deleting meal",error_updating_mealplan:"Error updating meal plan"},Fe={integration:"Mealie integration",entry_types:"Meal types to display",loading:"Loading...",mealie_url:"Mealie URL",number_of_recipes:"Number of recipes to display",number_of_recipes_helper:"Number of recipes to display (default 10).",settings_recipes_card:"Display configuration",settings_infos:"Recipe details",settings_image:"Image",settings_times:"Times",settings_title_layout:"Layout",show_image:"Show image",show_rating:"Show rating",show_favorite:"Favorite recipe",show_servings:"Serving & Quantity",show_description:"Show description",show_prep_time:"Show preparation time",show_cooking_time:"Show cooking time",show_total_time:"Show total time",days_layout:"Days layout",layout_vertical:"Vertical",layout_horizontal:"Meals side by side",layout_side_by_side:"Days side by side",layout_days_and_meals_side_by_side:"Days and meals side by side",days_to_show:"Number of days to display",day_offset:"Start day offset",days_count:"{count} days",show_search:"Search bar",show_favorites_only:"Favorites only",show_import_button:"Show import button",show_random_button:"Show random meal button",settings_meal_actions:"Meal actions",show_note_button:"Show add note button",settings_recipe_view:"Opening recipes",recipe_view:"Open the recipe in",recipe_view_dialog:"Dialog inside the card",recipe_view_webview:"Embedded Mealie view",recipe_view_browser:"New browser tab",mealie_group_slug:"Mealie group (slug)"},Ve={hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},Be={cards:Pe,common:Oe,dialog:Ne,info:Le,error:Ue,editor:Fe,time:Ve},We={name_mealplan:"Plan de Comidas Mealie",description_mealplan:"Mostrar las comidas del día",name_recipes:"Recetas Mealie",description_recipes:"Mostrar tus recetas desde la instancia Mealie",view_recipe:"Ver receta",delete_mealplan:"Eliminar del plan",edit_mealplan:"Editar entrada del plan",random_mealplan:"Comida aleatoria"},He={no_recipe:"Ninguna receta",no_mealplan:"Ninguna comida",today:"Hoy",breakfast:"Desayuno",lunch:"Almuerzo",dinner:"Cena",side:"Acompañamiento",dessert:"Postre",drink:"Bebida",snack:"Merienda",search_placeholder:"Buscar recetas..."},qe={add_to_mealplan:"Añadir al plan de comidas",add_recipe_to_mealplan:"Añadir al plan de comidas",select_date:"Seleccionar una fecha",select_meal_type:"Tipo de comida",recipe_added_success:"Receta añadida al plan",cancel:"Cancelar",close:"Cerrar",add:"Añadir",mealplan_deleted_success:"Comida eliminada del plan",confirm_delete_title:"¿Eliminar esta comida?",confirm_delete_message:"Esta acción no se puede deshacer.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instrucciones",times:"Tiempos",prep_time:"Preparación",cooking_time:"Cocción",total_time:"Total",add_note_to_mealplan:"Añadir una nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota añadida al plan",servings:"Porciones",decrease_servings:"Reducir porciones",increase_servings:"Aumentar porciones",edit_mealplan:"Editar entrada del plan",mealplan_updated_success:"Entrada del plan actualizada",save:"Guardar",add_favorite:"Añadir a favoritos",remove_favorite:"Eliminar de favoritos",add_to_shopping_list:"Añadir a la lista de la compra",select_shopping_list:"Seleccionar lista de la compra",shopping_list_quantity:"Multiplicador de cantidad",recipe_added_to_shopping_list:"Receta añadida a la lista de la compra",no_shopping_lists:"No hay listas de la compra disponibles",no_ingredients:"No hay ingredientes disponibles",next:"Siguiente",back:"Atrás",select_all:"Seleccionar todo",deselect_all:"Deseleccionar todo",import_recipe:"Importar receta",import_url:"URL de la receta",import_include_tags:"Incluir etiquetas",import:"Importar",recipe_imported_success:"Receta importada",open_in_mealie:"Abrir en Mealie"},Ke={no_url:"Configure la URL de Mealie para activar las imágenes y los enlaces a las recetas."},Ge={invalid_config:"Configuración inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Error al cargar la configuración",error_loading:"Error al cargar datos",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Error al eliminar la comida",error_updating_mealplan:"Error al actualizar el plan de comidas"},Ze={integration:"Mealie integration",entry_types:"Tipos de comida a mostrar",loading:"Cargando...",mealie_url:"URL de Mealie",number_of_recipes:"Número de recetas a mostrar",number_of_recipes_helper:"Número de recetas a mostrar (predeterminado 10).",settings_recipes_card:"Configuración de visualización",settings_infos:"Información",settings_image:"Imagen",settings_times:"Tiempos",settings_title_layout:"Diseño",show_image:"Mostrar imagen",show_rating:"Mostrar valoración",show_favorite:"Mostrar favorito",show_servings:"Porciones y Cantidad",show_description:"Mostrar descripción",show_prep_time:"Mostrar tiempo de preparación",show_cooking_time:"Mostrar tiempo de cocción",show_total_time:"Mostrar tiempo total",days_layout:"Disposición de los días",layout_vertical:"Vertical",layout_horizontal:"Comidas en paralelo",layout_side_by_side:"Días en paralelo",layout_days_and_meals_side_by_side:"Días y comidas en paralelo",days_to_show:"Número de días a mostrar",day_offset:"Desplazamiento del día inicial",days_count:"{count} días",show_search:"Barra de búsqueda",show_favorites_only:"Solo favoritos",show_import_button:"Mostrar botón de importación",show_random_button:"Mostrar botón de comida aleatoria",settings_meal_actions:"Acciones de comidas",show_note_button:"Mostrar botón Añadir nota",settings_recipe_view:"Apertura de recetas",recipe_view:"Abrir la receta en",recipe_view_dialog:"Diálogo dentro de la tarjeta",recipe_view_webview:"Vista Mealie integrada",recipe_view_browser:"Nueva pestaña del navegador",mealie_group_slug:"Grupo de Mealie (slug)"},Qe={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},Je={cards:We,common:He,dialog:qe,info:Ke,error:Ge,editor:Ze,time:Qe},Ye={name_mealplan:"Repas Mealie",description_mealplan:"Afficher les repas du jour",name_recipes:"Recettes Mealie",description_recipes:"Afficher vos recettes depuis l'instance Mealie",view_recipe:"Voir la recette",delete_mealplan:"Supprimer du planning",edit_mealplan:"Modifier l'entrée du planning",random_mealplan:"Repas aléatoire"},Xe={no_recipe:"Aucune recette",no_mealplan:"Aucun repas",today:"Aujourd'hui",breakfast:"Petit-déjeuner",lunch:"Déjeuner",dinner:"Dîner",side:"Accompagnement",dessert:"Dessert",drink:"Boisson",snack:"Collation",search_placeholder:"Rechercher une recette..."},et={add_to_mealplan:"Ajouter la recette au planning",add_recipe_to_mealplan:"Ajouter au planning",select_date:"Sélectionner une date",select_meal_type:"Type de repas",recipe_added_success:"Recette ajoutée au planning",cancel:"Annuler",close:"Fermer",add:"Ajouter",mealplan_deleted_success:"Repas supprimé du planning",confirm_delete_title:"Supprimer ce repas ?",confirm_delete_message:"Cette action est irréversible.",confirm:"Confirmer",ingredients:"Ingrédients",instructions:"Instructions",times:"Temps",prep_time:"Préparation",cooking_time:"Cuisson",total_time:"Total",add_note_to_mealplan:"Ajouter une note",note_title:"Titre",note_text:"Note (facultatif)",note_added_success:"Note ajoutée au planning",servings:"Portions",decrease_servings:"Diminuer les portions",increase_servings:"Augmenter les portions",edit_mealplan:"Modifier l'entrée du planning",mealplan_updated_success:"Entrée du planning mise à jour",save:"Enregistrer",add_favorite:"Ajouter aux favoris",remove_favorite:"Retirer des favoris",add_to_shopping_list:"Ajouter à la liste de courses",select_shopping_list:"Sélectionner une liste de courses",shopping_list_quantity:"Multiplicateur de quantité",recipe_added_to_shopping_list:"Recette ajoutée à la liste de courses",no_shopping_lists:"Aucune liste de courses disponible",no_ingredients:"Aucun ingrédient disponible",next:"Suivant",back:"Retour",select_all:"Tout sélectionner",deselect_all:"Tout désélectionner",import_recipe:"Importer une recette",import_url:"URL de la recette",import_include_tags:"Inclure les tags",import:"Importer",recipe_imported_success:"Recette importée",open_in_mealie:"Ouvrir dans Mealie"},tt={no_url:"Configurez l'URL Mealie pour activer les images et les liens vers les recettes."},it={invalid_config:"Configuration invalide",no_integration:"Sélectionnez une intégration Mealie",missing_config:"Erreur de chargement de la configuration",error_loading:"Erreur de chargement des données",error_adding_recipe:"Erreur lors de l'ajout de la recette",invalid_date:"Date invalide",invalid_entry_type:"Type de repas invalide",error_deleting_mealplan:"Erreur lors de la suppression du repas",error_updating_mealplan:"Erreur lors de la mise à jour du repas"},at={integration:"Intégration Mealie",entry_types:"Types de repas à afficher",loading:"Chargement...",mealie_url:"URL Mealie",number_of_recipes:"Nombre de recettes à afficher",number_of_recipes_helper:"Nombre de recettes à afficher (par défaut 10).",settings_recipes_card:"Configuration de l'affichage",settings_infos:"Informations",settings_image:"Image",settings_times:"Temps",settings_title_layout:"Disposition",show_image:"Image",show_rating:"Note",show_favorite:"Ajouter au favoris",show_servings:"Portion & Quantité",show_description:"Description",show_prep_time:"Temps de préparation",show_cooking_time:"Temps de cuisson",show_total_time:"Temps total",days_layout:"Disposition des jours",layout_vertical:"Vertical",layout_horizontal:"Repas côte à côte",layout_side_by_side:"Jours côte à côte",layout_days_and_meals_side_by_side:"Jours et repas côte à côte",days_to_show:"Nombre de jours à afficher",day_offset:"Décalage du jour de départ",days_count:"{count} jours",show_search:"Barre de recherche",show_favorites_only:"Favoris uniquement",show_import_button:"Bouton d'import de recette",show_random_button:"Afficher le bouton repas aléatoire",settings_meal_actions:"Action sur les repas",show_note_button:"Afficher le bouton Ajouter une note",settings_recipe_view:"Ouverture des recettes",recipe_view:"Ouvrir la recette dans",recipe_view_dialog:"Dialogue dans la carte",recipe_view_webview:"Vue Mealie intégrée",recipe_view_browser:"Nouvel onglet du navigateur",mealie_group_slug:"Groupe Mealie (slug)"},st={hour:"heure",hours:"heures",minute:"minute",minutes:"minutes",hour_short:"h",minute_short:"min"},rt={cards:Ye,common:Xe,dialog:et,info:tt,error:it,editor:at,time:st},nt={name_mealplan:"Piano Pasti Mealie",description_mealplan:"Visualizza i pasti del giorno",name_recipes:"Ricette Mealie",description_recipes:"Visualizza le tue ricette dall'istanza Mealie",view_recipe:"Vedi ricetta",delete_mealplan:"Elimina dal piano",edit_mealplan:"Modifica voce del piano",random_mealplan:"Pasto casuale"},ot={no_recipe:"Nessuna ricetta",no_mealplan:"Nessun pasto",today:"Oggi",breakfast:"Colazione",lunch:"Pranzo",dinner:"Cena",side:"Contorno",dessert:"Dolce",drink:"Bevanda",snack:"Spuntino",search_placeholder:"Cerca ricette..."},lt={add_to_mealplan:"Aggiungi al piano pasti",add_recipe_to_mealplan:"Aggiungi al piano pasti",select_date:"Seleziona una data",select_meal_type:"Tipo di pasto",recipe_added_success:"Ricetta aggiunta al piano",cancel:"Annulla",close:"Chiudi",add:"Aggiungi",mealplan_deleted_success:"Pasto rimosso dal piano",confirm_delete_title:"Rimuovere questo pasto?",confirm_delete_message:"Questa azione non può essere annullata.",confirm:"Conferma",ingredients:"Ingredienti",instructions:"Istruzioni",times:"Tempi",prep_time:"Preparazione",cooking_time:"Cottura",total_time:"Totale",add_note_to_mealplan:"Aggiungi una nota",note_title:"Titolo",note_text:"Nota (opzionale)",note_added_success:"Nota aggiunta al piano",servings:"Porzioni",decrease_servings:"Riduci porzioni",increase_servings:"Aumenta porzioni",edit_mealplan:"Modifica voce del piano",mealplan_updated_success:"Voce del piano aggiornata",save:"Salva",add_favorite:"Aggiungi ai preferiti",remove_favorite:"Rimuovi dai preferiti",add_to_shopping_list:"Aggiungi alla lista della spesa",select_shopping_list:"Seleziona lista della spesa",shopping_list_quantity:"Moltiplicatore di quantità",recipe_added_to_shopping_list:"Ricetta aggiunta alla lista della spesa",no_shopping_lists:"Nessuna lista della spesa disponibile",no_ingredients:"Nessun ingrediente disponibile",next:"Avanti",back:"Indietro",select_all:"Seleziona tutto",deselect_all:"Deseleziona tutto",import_recipe:"Importa ricetta",import_url:"URL ricetta",import_include_tags:"Includi tag",import:"Importa",recipe_imported_success:"Ricetta importata",open_in_mealie:"Apri in Mealie"},dt={no_url:"Configura l'URL Mealie per attivare le immagini e i link alle ricette."},ct={invalid_config:"Configurazione non valida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Errore di caricamento della configurazione",error_loading:"Errore di caricamento dei dati",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Errore durante l'eliminazione del pasto",error_updating_mealplan:"Errore durante l'aggiornamento del piano pasti"},pt={integration:"Mealie integration",entry_types:"Tipi di pasto da visualizzare",loading:"Caricamento...",mealie_url:"URL Mealie",number_of_recipes:"Numero di ricette da visualizzare",number_of_recipes_helper:"Numero di ricette da visualizzare (predefinito 10).",settings_recipes_card:"Configurazione della visualizzazione",settings_infos:"Informazioni",settings_image:"Immagine",settings_times:"Tempi",settings_title_layout:"Layout",show_image:"Mostra immagine",show_rating:"Mostra valutazione",show_favorite:"Mostra preferito",show_servings:"Porzioni e Quantità",show_description:"Mostra descrizione",show_prep_time:"Mostra tempo di preparazione",show_cooking_time:"Mostra tempo di cottura",show_total_time:"Mostra tempo totale",days_layout:"Disposizione dei giorni",layout_vertical:"Verticale",layout_horizontal:"Pasti affiancati",layout_side_by_side:"Giorni affiancati",layout_days_and_meals_side_by_side:"Giorni e pasti affiancati",days_to_show:"Numero di giorni da mostrare",day_offset:"Scostamento giorno iniziale",days_count:"{count} giorni",show_search:"Barra di ricerca",show_favorites_only:"Solo preferiti",show_import_button:"Mostra pulsante di importazione",show_random_button:"Mostra pulsante pasto casuale",settings_meal_actions:"Azioni sui pasti",show_note_button:"Mostra pulsante Aggiungi nota",settings_recipe_view:"Apertura delle ricette",recipe_view:"Apri la ricetta in",recipe_view_dialog:"Finestra nella scheda",recipe_view_webview:"Vista Mealie integrata",recipe_view_browser:"Nuova scheda del browser",mealie_group_slug:"Gruppo Mealie (slug)"},ht={hour:"ora",hours:"ore",minute:"minuto",minutes:"minuti",hour_short:"h",minute_short:"min"},_t={cards:nt,common:ot,dialog:lt,info:dt,error:ct,editor:pt,time:ht},gt={name_mealplan:"Mealie Maaltijdplan",description_mealplan:"Toon de maaltijden van vandaag",name_recipes:"Mealie Recepten",description_recipes:"Toon je recepten van de Mealie-instantie",view_recipe:"Recept bekijken",delete_mealplan:"Verwijder uit plan",edit_mealplan:"Maaltijdplan bewerken",random_mealplan:"Willekeurige maaltijd"},ut={no_recipe:"Geen recept",no_mealplan:"Geen maaltijd",today:"Vandaag",breakfast:"Ontbijt",lunch:"Lunch",dinner:"Diner",side:"Bijgerecht",dessert:"Dessert",drink:"Drank",snack:"Snack",search_placeholder:"Recepten zoeken..."},mt={add_to_mealplan:"Toevoegen aan maaltijdplan",add_recipe_to_mealplan:"toevoegen aan maaltijdplan",select_date:"Selecteer een datum",select_meal_type:"Maaltijdtype",recipe_added_success:"Recept toegevoegd aan plan",cancel:"Annuleren",close:"Sluiten",add:"Toevoegen",mealplan_deleted_success:"Maaltijd verwijderd uit plan",confirm_delete_title:"Deze maaltijd verwijderen?",confirm_delete_message:"Deze actie kan niet ongedaan worden gemaakt.",confirm:"Bevestigen",ingredients:"Ingrediënten",instructions:"Instructies",times:"Tijden",prep_time:"Voorbereiding",cooking_time:"Koken",total_time:"Totaal",add_note_to_mealplan:"Notitie toevoegen",note_title:"Titel",note_text:"Notitie (optioneel)",note_added_success:"Notitie toegevoegd aan plan",servings:"Porties",decrease_servings:"Minder porties",increase_servings:"Meer porties",edit_mealplan:"Maaltijdplan bewerken",mealplan_updated_success:"Maaltijdplan bijgewerkt",save:"Opslaan",add_favorite:"Toevoegen aan favorieten",remove_favorite:"Verwijderen uit favorieten",add_to_shopping_list:"Toevoegen aan boodschappenlijst",select_shopping_list:"Selecteer boodschappenlijst",shopping_list_quantity:"Hoeveelheidsmultiplier",recipe_added_to_shopping_list:"Recept toegevoegd aan boodschappenlijst",no_shopping_lists:"Geen boodschappenlijsten beschikbaar",no_ingredients:"Geen ingrediënten beschikbaar",next:"Volgende",back:"Terug",select_all:"Alles selecteren",deselect_all:"Alles deselecteren",import_recipe:"Recept importeren",import_url:"Recept-URL",import_include_tags:"Tags opnemen",import:"Importeren",recipe_imported_success:"Recept geïmporteerd",open_in_mealie:"Openen in Mealie"},ft={no_url:"Configureer Mealie URL om afbeeldingen en receptlinks in te schakelen."},yt={invalid_config:"Ongeldige configuratie",no_integration:"Select a Mealie integration in the card settings",missing_config:"Fout bij laden van configuratie",error_loading:"Fout bij laden van gegevens",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Fout bij verwijderen van maaltijd",error_updating_mealplan:"Fout bij bijwerken van maaltijdplan"},vt={integration:"Mealie integration",entry_types:"Maaltijdtypen om weer te geven",loading:"Laden...",mealie_url:"Mealie URL",number_of_recipes:"Aantal weer te geven recepten",number_of_recipes_helper:"Aantal weer te geven recepten (standaard 10).",settings_recipes_card:"Weergaveconfiguratie",settings_infos:"Receptinformatie",settings_image:"Afbeelding",settings_times:"Tijden",settings_title_layout:"Indeling",show_image:"Afbeelding weergeven",show_rating:"Beoordeling weergeven",show_favorite:"Favoriet tonen",show_servings:"Porties & Hoeveelheid",show_description:"Beschrijving weergeven",show_prep_time:"Voorbereidingstijd weergeven",show_cooking_time:"Kooktijd weergeven",show_total_time:"Totale tijd weergeven",days_layout:"Indeling van dagen",layout_vertical:"Verticaal",layout_horizontal:"Maaltijden naast elkaar",layout_side_by_side:"Dagen naast elkaar",layout_days_and_meals_side_by_side:"Dagen en maaltijden naast elkaar",days_to_show:"Aantal weer te geven dagen",day_offset:"Startdag-offset",days_count:"{count} dagen",show_search:"Zoekbalk",show_favorites_only:"Alleen favorieten",show_import_button:"Importknop weergeven",show_random_button:"Willekeurige maaltijdknop weergeven",settings_meal_actions:"Maaltijdacties",show_note_button:"Knop Notitie toevoegen tonen",settings_recipe_view:"Recepten openen",recipe_view:"Recept openen in",recipe_view_dialog:"Dialoog in de kaart",recipe_view_webview:"Ingebouwde Mealie-weergave",recipe_view_browser:"Nieuw browsertabblad",mealie_group_slug:"Mealie-groep (slug)"},bt={hour:"uur",hours:"uur",minute:"minuut",minutes:"minuten",hour_short:"u",minute_short:"min"},wt={cards:gt,common:ut,dialog:mt,info:ft,error:yt,editor:vt,time:bt},$t={name_mealplan:"Plan Posiłków Mealie",description_mealplan:"Wyświetl dzisiejsze posiłki",name_recipes:"Przepisy Mealie",description_recipes:"Wyświetl swoje przepisy z instancji Mealie",view_recipe:"Wyświetl przepis",delete_mealplan:"Usuń z planu",edit_mealplan:"Edytuj wpis planu",random_mealplan:"Losowy posiłek"},zt={no_recipe:"Brak przepisu",no_mealplan:"Brak posiłku",today:"Dzisiaj",breakfast:"Śniadanie",lunch:"Obiad",dinner:"Kolacja",side:"Dodatek",dessert:"Deser",drink:"Napój",snack:"Przekąska",search_placeholder:"Szukaj przepisów..."},kt={add_to_mealplan:"Dodaj do planu posiłków",add_recipe_to_mealplan:"Dodaj do planu posiłków",select_date:"Wybierz datę",select_meal_type:"Typ posiłku",recipe_added_success:"Przepis dodany do planu",cancel:"Anuluj",close:"Zamknij",add:"Dodaj",mealplan_deleted_success:"Posiłek usunięty z planu",confirm_delete_title:"Usunąć ten posiłek?",confirm_delete_message:"Tej akcji nie można cofnąć.",confirm:"Potwierdź",ingredients:"Składniki",instructions:"Instrukcje",times:"Czasy",prep_time:"Przygotowanie",cooking_time:"Gotowanie",total_time:"Łącznie",add_note_to_mealplan:"Dodaj notatkę",note_title:"Tytuł",note_text:"Notatka (opcjonalna)",note_added_success:"Notatka dodana do planu",servings:"Porcje",decrease_servings:"Zmniejsz porcje",increase_servings:"Zwiększ porcje",edit_mealplan:"Edytuj wpis planu",mealplan_updated_success:"Wpis planu zaktualizowany",save:"Zapisz",add_favorite:"Dodaj do ulubionych",remove_favorite:"Usuń z ulubionych",add_to_shopping_list:"Dodaj do listy zakupów",select_shopping_list:"Wybierz listę zakupów",shopping_list_quantity:"Mnożnik ilości",recipe_added_to_shopping_list:"Przepis dodany do listy zakupów",no_shopping_lists:"Brak dostępnych list zakupów",no_ingredients:"Brak dostępnych składników",next:"Dalej",back:"Wstecz",select_all:"Zaznacz wszystko",deselect_all:"Odznacz wszystko",import_recipe:"Importuj przepis",import_url:"URL przepisu",import_include_tags:"Uwzględnij tagi",import:"Importuj",recipe_imported_success:"Przepis zaimportowany",open_in_mealie:"Otwórz w Mealie"},xt={no_url:"Skonfiguruj adres URL Mealie, aby włączyć obrazy i linki do przepisów."},Et={invalid_config:"Nieprawidłowa konfiguracja",no_integration:"Select a Mealie integration in the card settings",missing_config:"Błąd ładowania konfiguracji",error_loading:"Błąd ładowania danych",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Błąd podczas usuwania posiłku",error_updating_mealplan:"Błąd podczas aktualizacji planu posiłków"},It={integration:"Mealie integration",entry_types:"Typy posiłków do wyświetlenia",loading:"Ładowanie...",mealie_url:"URL Mealie",number_of_recipes:"Liczba przepisów do wyświetlenia",number_of_recipes_helper:"Liczba przepisów do wyświetlenia (domyślnie 10).",settings_recipes_card:"Konfiguracja wyświetlania",settings_infos:"Informacje o przepisie",settings_image:"Obraz",settings_times:"Czasy",settings_title_layout:"Układ",show_image:"Pokaż obraz",show_rating:"Pokaż ocenę",show_favorite:"Pokaż ulubione",show_servings:"Porcje i ilość",show_description:"Pokaż opis",show_prep_time:"Pokaż czas przygotowania",show_cooking_time:"Pokaż czas gotowania",show_total_time:"Pokaż całkowity czas",days_layout:"Układ dni",layout_vertical:"Pionowo",layout_horizontal:"Posiłki obok siebie",layout_side_by_side:"Dni obok siebie",layout_days_and_meals_side_by_side:"Dni i posiłki obok siebie",days_to_show:"Liczba dni do wyświetlenia",day_offset:"Przesunięcie dnia startowego",days_count:"{count} dni",show_search:"Pasek wyszukiwania",show_favorites_only:"Tylko ulubione",show_import_button:"Pokaż przycisk importu",show_random_button:"Pokaż przycisk losowego posiłku",settings_meal_actions:"Akcje posiłków",show_note_button:"Pokaż przycisk Dodaj notatkę",settings_recipe_view:"Otwieranie przepisów",recipe_view:"Otwórz przepis w",recipe_view_dialog:"Okno w karcie",recipe_view_webview:"Wbudowany widok Mealie",recipe_view_browser:"Nowa karta przeglądarki",mealie_group_slug:"Grupa Mealie (slug)"},At={hour:"godzina",hours:"godziny",minute:"minuta",minutes:"minuty",hour_short:"godz",minute_short:"min"},Rt={cards:$t,common:zt,dialog:kt,info:xt,error:Et,editor:It,time:At},St={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Exibir as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Exibir suas receitas da instância Mealie",view_recipe:"Ver receita",delete_mealplan:"Remover do plano",edit_mealplan:"Editar entrada do plano",random_mealplan:"Refeição aleatória"},Mt={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Café da manhã",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche",search_placeholder:"Pesquisar receitas..."},Tt={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",close:"Fechar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm_delete_message:"Esta ação não pode ser desfeita.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparo",cooking_time:"Cozimento",total_time:"Total",add_note_to_mealplan:"Adicionar uma nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota adicionada ao plano",servings:"Porções",decrease_servings:"Diminuir porções",increase_servings:"Aumentar porções",edit_mealplan:"Editar entrada do plano",mealplan_updated_success:"Entrada do plano atualizada",save:"Salvar",add_favorite:"Adicionar aos favoritos",remove_favorite:"Remover dos favoritos",add_to_shopping_list:"Adicionar à lista de compras",select_shopping_list:"Selecionar lista de compras",shopping_list_quantity:"Multiplicador de quantidade",recipe_added_to_shopping_list:"Receita adicionada à lista de compras",no_shopping_lists:"Nenhuma lista de compras disponível",no_ingredients:"Nenhum ingrediente disponível",next:"Próximo",back:"Voltar",select_all:"Selecionar tudo",deselect_all:"Desmarcar tudo",import_recipe:"Importar receita",import_url:"URL da receita",import_include_tags:"Incluir tags",import:"Importar",recipe_imported_success:"Receita importada",open_in_mealie:"Abrir no Mealie"},Dt={no_url:"Configure a URL Mealie para ativar imagens e links para receitas."},Ct={invalid_config:"Configuração inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Erro ao remover refeição",error_updating_mealplan:"Erro ao atualizar plano de refeições"},jt={integration:"Mealie integration",entry_types:"Tipos de refeição para exibir",loading:"Carregando...",mealie_url:"URL do Mealie",number_of_recipes:"Número de receitas para exibir",number_of_recipes_helper:"Número de receitas para exibir (padrão 10).",settings_recipes_card:"Configuração de exibição",settings_infos:"Informações da receita",settings_image:"Imagem",settings_times:"Tempos",settings_title_layout:"Layout",show_image:"Exibir imagem",show_rating:"Exibir avaliação",show_favorite:"Mostrar favorito",show_servings:"Porções e Quantidade",show_description:"Exibir descrição",show_prep_time:"Exibir tempo de preparo",show_cooking_time:"Exibir tempo de cozimento",show_total_time:"Exibir tempo total",days_layout:"Disposição dos dias",layout_vertical:"Vertical",layout_horizontal:"Refeições lado a lado",layout_side_by_side:"Dias lado a lado",layout_days_and_meals_side_by_side:"Dias e refeições lado a lado",days_to_show:"Número de dias a exibir",day_offset:"Deslocamento do dia inicial",days_count:"{count} dias",show_search:"Barra de pesquisa",show_favorites_only:"Apenas favoritos",show_import_button:"Mostrar botão de importação",show_random_button:"Mostrar botão de refeição aleatória",settings_meal_actions:"Ações das refeições",show_note_button:"Mostrar botão Adicionar nota",settings_recipe_view:"Abertura de receitas",recipe_view:"Abrir a receita em",recipe_view_dialog:"Diálogo no cartão",recipe_view_webview:"Visualização Mealie integrada",recipe_view_browser:"Nova aba do navegador",mealie_group_slug:"Grupo do Mealie (slug)"},Pt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},Ot={cards:St,common:Mt,dialog:Tt,info:Dt,error:Ct,editor:jt,time:Pt},Nt={name_mealplan:"Plano de Refeições Mealie",description_mealplan:"Mostrar as refeições do dia",name_recipes:"Receitas Mealie",description_recipes:"Mostrar as suas receitas da instância Mealie",view_recipe:"Ver receita",delete_mealplan:"Remover do plano",edit_mealplan:"Editar entrada do plano",random_mealplan:"Refeição aleatória"},Lt={no_recipe:"Nenhuma receita",no_mealplan:"Nenhuma refeição",today:"Hoje",breakfast:"Pequeno-almoço",lunch:"Almoço",dinner:"Jantar",side:"Acompanhamento",dessert:"Sobremesa",drink:"Bebida",snack:"Lanche",search_placeholder:"Pesquisar receitas..."},Ut={add_to_mealplan:"Adicionar ao plano de refeições",add_recipe_to_mealplan:"Adicionar ao plano de refeições",select_date:"Selecionar uma data",select_meal_type:"Tipo de refeição",recipe_added_success:"Receita adicionada ao plano",cancel:"Cancelar",close:"Fechar",add:"Adicionar",mealplan_deleted_success:"Refeição removida do plano",confirm_delete_title:"Remover esta refeição?",confirm_delete_message:"Esta ação não pode ser desfeita.",confirm:"Confirmar",ingredients:"Ingredientes",instructions:"Instruções",times:"Tempos",prep_time:"Preparação",cooking_time:"Cozimento",total_time:"Total",add_note_to_mealplan:"Adicionar uma nota",note_title:"Título",note_text:"Nota (opcional)",note_added_success:"Nota adicionada ao plano",servings:"Porções",decrease_servings:"Diminuir porções",increase_servings:"Aumentar porções",edit_mealplan:"Editar entrada do plano",mealplan_updated_success:"Entrada do plano atualizada",save:"Guardar",add_favorite:"Adicionar aos favoritos",remove_favorite:"Remover dos favoritos",add_to_shopping_list:"Adicionar à lista de compras",select_shopping_list:"Selecionar lista de compras",shopping_list_quantity:"Multiplicador de quantidade",recipe_added_to_shopping_list:"Receita adicionada à lista de compras",no_shopping_lists:"Nenhuma lista de compras disponível",no_ingredients:"Nenhum ingrediente disponível",next:"Próximo",back:"Voltar",select_all:"Selecionar tudo",deselect_all:"Desselecionar tudo",import_recipe:"Importar receita",import_url:"URL da receita",import_include_tags:"Incluir tags",import:"Importar",recipe_imported_success:"Receita importada",open_in_mealie:"Abrir no Mealie"},Ft={no_url:"Configure o URL Mealie para ativar imagens e links para receitas."},Vt={invalid_config:"Configuração inválida",no_integration:"Select a Mealie integration in the card settings",missing_config:"Erro ao carregar a configuração",error_loading:"Erro ao carregar dados",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Erro ao remover refeição",error_updating_mealplan:"Erro ao atualizar plano de refeições"},Bt={integration:"Mealie integration",entry_types:"Tipos de refeição a exibir",loading:"A carregar...",mealie_url:"URL do Mealie",number_of_recipes:"Número de receitas a exibir",number_of_recipes_helper:"Número de receitas a exibir (padrão 10).",settings_recipes_card:"Configuração de exibição",settings_infos:"Informações da receita",settings_image:"Imagem",settings_times:"Tempos",settings_title_layout:"Disposição",show_image:"Mostrar imagem",show_rating:"Mostrar avaliação",show_favorite:"Mostrar favorito",show_servings:"Porções e quantidade",show_description:"Mostrar descrição",show_prep_time:"Mostrar tempo de preparação",show_cooking_time:"Mostrar tempo de cozedura",show_total_time:"Mostrar tempo total",days_layout:"Disposição dos dias",layout_vertical:"Vertical",layout_horizontal:"Refeições lado a lado",layout_side_by_side:"Dias lado a lado",layout_days_and_meals_side_by_side:"Dias e refeições lado a lado",days_to_show:"Número de dias a exibir",day_offset:"Deslocamento do dia inicial",days_count:"{count} dias",show_search:"Barra de pesquisa",show_favorites_only:"Apenas favoritos",show_import_button:"Mostrar botão de importação",show_random_button:"Mostrar botão de refeição aleatória",settings_meal_actions:"Ações das refeições",show_note_button:"Mostrar botão Adicionar nota",settings_recipe_view:"Abertura de receitas",recipe_view:"Abrir a receita em",recipe_view_dialog:"Diálogo no cartão",recipe_view_webview:"Vista Mealie integrada",recipe_view_browser:"Novo separador do navegador",mealie_group_slug:"Grupo do Mealie (slug)"},Wt={hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",hour_short:"h",minute_short:"min"},Ht={cards:Nt,common:Lt,dialog:Ut,info:Ft,error:Vt,editor:Bt,time:Wt},qt={name_mealplan:"Plan de Mese Mealie",description_mealplan:"Afișează mesele zilei",name_recipes:"Rețete Mealie",description_recipes:"Afișează rețetele tale din instanța Mealie",view_recipe:"Vezi rețeta",delete_mealplan:"Șterge din plan",edit_mealplan:"Editează intrarea din plan",random_mealplan:"Masă aleatorie"},Kt={no_recipe:"Nicio rețetă",no_mealplan:"Nicio masă",today:"Astăzi",breakfast:"Micul dejun",lunch:"Prânz",dinner:"Cină",side:"Garnitură",dessert:"Desert",drink:"Băutură",snack:"Gustare",search_placeholder:"Caută rețete..."},Gt={add_to_mealplan:"Adaugă la planul de mese",add_recipe_to_mealplan:"Adaugă la planul de mese",select_date:"Selectează o dată",select_meal_type:"Tipul mesei",recipe_added_success:"Rețetă adăugată la plan",cancel:"Anulează",close:"Închide",add:"Adaugă",mealplan_deleted_success:"Masă ștearsă din plan",confirm_delete_title:"Ștergeți această masă?",confirm_delete_message:"Această acțiune nu poate fi anulată.",confirm:"Confirmă",ingredients:"Ingrediente",instructions:"Instrucțiuni",times:"Timpi",prep_time:"Pregătire",cooking_time:"Gătit",total_time:"Total",add_note_to_mealplan:"Adaugă o notă",note_title:"Titlu",note_text:"Notă (opțional)",note_added_success:"Notă adăugată la plan",servings:"Porții",decrease_servings:"Reduce porțiile",increase_servings:"Crește porțiile",edit_mealplan:"Editează intrarea din plan",mealplan_updated_success:"Intrare din plan actualizată",save:"Salvează",add_favorite:"Adaugă la favorite",remove_favorite:"Elimină din favorite",add_to_shopping_list:"Adaugă la lista de cumpărături",select_shopping_list:"Selectează lista de cumpărături",shopping_list_quantity:"Multiplicator de cantitate",recipe_added_to_shopping_list:"Rețetă adăugată la lista de cumpărături",no_shopping_lists:"Nicio listă de cumpărături disponibilă",no_ingredients:"Niciun ingredient disponibil",next:"Înainte",back:"Înapoi",select_all:"Selectează tot",deselect_all:"Deselectează tot",import_recipe:"Importă rețetă",import_url:"URL rețetă",import_include_tags:"Include etichete",import:"Importă",recipe_imported_success:"Rețetă importată",open_in_mealie:"Deschide în Mealie"},Zt={no_url:"Configurează URL-ul Mealie pentru a activa imaginile și linkurile către rețete."},Qt={invalid_config:"Configurare invalidă",no_integration:"Select a Mealie integration in the card settings",missing_config:"Eroare la încărcarea configurației",error_loading:"Eroare la încărcarea datelor",error_adding_recipe:"Error adding recipe",invalid_date:"Invalid date",invalid_entry_type:"Invalid meal type",error_deleting_mealplan:"Eroare la ștergerea mesei",error_updating_mealplan:"Eroare la actualizarea planului de mese"},Jt={integration:"Mealie integration",entry_types:"Tipuri de mese de afișat",loading:"Se încarcă...",mealie_url:"URL Mealie",number_of_recipes:"Număr de rețete de afișat",number_of_recipes_helper:"Număr de rețete de afișat (implicit 10).",settings_recipes_card:"Configurare afișare",settings_infos:"Informații rețetă",settings_image:"Imagine",settings_times:"Timpuri",settings_title_layout:"Aspect",show_image:"Afișează imaginea",show_rating:"Afișează evaluarea",show_favorite:"Arată favorit",show_servings:"Porții și Cantitate",show_description:"Afișează descrierea",show_prep_time:"Afișează timpul de preparare",show_cooking_time:"Afișează timpul de gătit",show_total_time:"Afișează timpul total",days_layout:"Dispunerea zilelor",layout_vertical:"Vertical",layout_horizontal:"Mese alăturate",layout_side_by_side:"Zile alăturate",layout_days_and_meals_side_by_side:"Zile și mese alăturate",days_to_show:"Numărul de zile de afișat",day_offset:"Decalaj zi de început",days_count:"{count} zile",show_search:"Bara de căutare",show_favorites_only:"Doar favorite",show_import_button:"Afișează butonul de import",show_random_button:"Afișează butonul de masă aleatorie",settings_meal_actions:"Acțiuni pentru mese",show_note_button:"Afișează butonul Adaugă notă",settings_recipe_view:"Deschiderea rețetelor",recipe_view:"Deschide rețeta în",recipe_view_dialog:"Dialog în card",recipe_view_webview:"Vizualizare Mealie integrată",recipe_view_browser:"Filă nouă de browser",mealie_group_slug:"Grup Mealie (slug)"},Yt={hour:"oră",hours:"ore",minute:"minut",minutes:"minute",hour_short:"h",minute_short:"min"},Xt={cards:qt,common:Kt,dialog:Gt,info:Zt,error:Qt,editor:Jt,time:Yt};const ei={da:Object.freeze({__proto__:null,cards:be,common:we,default:Ie,dialog:$e,editor:xe,error:ke,info:ze,time:Ee}),de:Object.freeze({__proto__:null,cards:Ae,common:Re,default:je,dialog:Se,editor:De,error:Te,info:Me,time:Ce}),en:Object.freeze({__proto__:null,cards:Pe,common:Oe,default:Be,dialog:Ne,editor:Fe,error:Ue,info:Le,time:Ve}),es:Object.freeze({__proto__:null,cards:We,common:He,default:Je,dialog:qe,editor:Ze,error:Ge,info:Ke,time:Qe}),fr:Object.freeze({__proto__:null,cards:Ye,common:Xe,default:rt,dialog:et,editor:at,error:it,info:tt,time:st}),it:Object.freeze({__proto__:null,cards:nt,common:ot,default:_t,dialog:lt,editor:pt,error:ct,info:dt,time:ht}),nl:Object.freeze({__proto__:null,cards:gt,common:ut,default:wt,dialog:mt,editor:vt,error:yt,info:ft,time:bt}),pl:Object.freeze({__proto__:null,cards:$t,common:zt,default:Rt,dialog:kt,editor:It,error:Et,info:xt,time:At}),"pt-BR":Object.freeze({__proto__:null,cards:St,common:Mt,default:Ot,dialog:Tt,editor:jt,error:Ct,info:Dt,time:Pt}),pt:Object.freeze({__proto__:null,cards:Nt,common:Lt,default:Ht,dialog:Ut,editor:Bt,error:Vt,info:Ft,time:Wt}),ro:Object.freeze({__proto__:null,cards:qt,common:Kt,default:Xt,dialog:Gt,editor:Jt,error:Qt,info:Zt,time:Yt})};function ti(e,t){const i=ei[t];if(!i)return;const a=e.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,i);return"string"==typeof a?a:void 0}function ii(e,t,i,a){const s=ti(t,e)??ti(t,"en")??t;return i&&a?s.replace(i,a):s}const ai=[[.125,"⅛"],[.25,"¼"],[1/3,"⅓"],[.375,"⅜"],[.5,"½"],[.625,"⅝"],[2/3,"⅔"],[.75,"¾"],[.875,"⅞"]];let si=null,ri=null,ni=null;function oi(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function li(e,t="en"){if(!e)return"";const i=e.toLowerCase().trim(),{hourPattern:a,minutePattern:s}=function(e){if(si===e&&ri&&ni)return{hourPattern:ri,minutePattern:ni};const t=[ii(e,"time.hour"),ii(e,"time.hours")].filter(Boolean).map(oi),i=[ii(e,"time.minute"),ii(e,"time.minutes")].filter(Boolean).map(oi);return si=e,ri=new RegExp(`(\\d+)\\s*(?:${t.join("|")})`,"i"),ni=new RegExp(`(\\d+)\\s*(?:${i.join("|")})`,"i"),{hourPattern:ri,minutePattern:ni}}(t),r=i.match(a),n=i.match(s);if(!r&&!n)return i.replace(/\s+/g," ").trim();const o=[];return r&&o.push(`${r[1]} ${ii(t,"time.hour_short")}`),n&&o.push(`${n[1]} ${ii(t,"time.minute_short")}`),o.join(" ")}function di(e,t="en"){if(!e)return"";const i=`common.${e}`,a=ii(t,i);return a!==i?a:e.toUpperCase()}function ci(e){return ve.map(t=>({value:t,label:e(`common.${t}`)}))}function pi(e,t=1,i=!0,a="en"){const s=function(e){if(!e)return"";if("string"==typeof e){if(e.trimStart().startsWith("{"))try{const t=JSON.parse(e);return(t.use_abbreviation??t.useAbbreviation)&&t.abbreviation?t.abbreviation:t.name??""}catch{if(/['"]use_abbreviation['"]\s*:\s*True/.test(e)||/'useAbbreviation'\s*:\s*True/.test(e)){const t=e.match(/['"]abbreviation['"]\s*:\s*'([^']+)'/);if(t?.[1])return t[1]}const t=e.match(/['"]name['"]\s*:\s*'([^']*)'/);return t?.[1]??""}return e}return e.use_abbreviation&&e.abbreviation?e.abbreviation:e.name??""}(e.unit),r=null!=e.quantity&&0!==e.quantity;if(!r&&!e.food?.name)return e.note??e.display??"";const n=r?function(e,t="en"){const i=Math.floor(e),a=e-i;if(a<.02)return i>0?String(i):"0";const s=ai.find(([e])=>Math.abs(a-e)<.02);return s?i>0?`${i} ${s[1]}`:s[1]:new Intl.NumberFormat(t,{maximumFractionDigits:2,useGrouping:!1}).format(e)}(e.quantity*t,a):null,o=[n,s||null,e.food?.name??null].filter(Boolean).join(" ");return i&&e.note?`${o} (${e.note})`:o}class hi extends Error{constructor(e,t){super(e),this.name="MealieActionError",this.translationKey=e,this.reason=t}get detail(){return this.reason instanceof Error?this.reason.message:""}}const _i={breakfast:1,lunch:2,dinner:3,side:4,dessert:5,drink:6,snack:7};async function gi(e,t){try{return await t()}catch(t){throw t instanceof hi?t:new hi(e,t)}}async function ui(e,t){const i=t||await async function(e){const t=await e.callWS({type:"config_entries/get",domain:he}),i=(t.find(e=>"loaded"===e.state)??t[0])?.entry_id;if(!i)throw new hi("error.missing_config");return i}(e);if(!i)throw new hi("error.missing_config");return i}async function mi(e,t,i,a){const s=await ui(e,a);await e.callService(he,t,{config_entry_id:s,...i},void 0,!1)}async function fi(e,t,i,a){const s=await ui(e,a),r=await e.callService(he,t,{config_entry_id:s,...i},void 0,!1,!0);return r?.response??null}function yi(e){return e?.recipe??null}function vi(e){const t={date:e.date,entry_type:e.entryType};return e.recipeId?{...t,recipe_id:e.recipeId}:{...t,note_title:e.noteTitle,...e.noteText&&{note_text:e.noteText}}}function bi(e,t={}){return gi("error.error_loading",async()=>{const i={result_limit:t.resultLimit??10};t.search&&(i.search_terms=t.search);const a=await fi(e,"get_recipes",i,t.configEntryId);return a?.recipes?.items??[]})}function wi(e,t,i){return gi("error.error_loading",async()=>yi(await fi(e,"get_recipe",{recipe_id:t},i)))}function $i(e,t){return gi("error.error_adding_recipe",()=>mi(e,"set_mealplan",vi(t),t.configEntryId))}async function zi(e,t){const i=await e.callWS({type:"config/entity_registry/list"});return new Map(i.filter(e=>e.platform===he&&e.entity_id.startsWith("todo.")&&(!t||e.config_entry_id===t)).map(e=>[e.unique_id,e.entity_id]))}const ki=new Map;function xi(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Ei(e,t){const[i,a,s]=e.split("-").map(Number),r=new Date(i,a-1,s),n=new Date;return n.setHours(0,0,0,0),r.getTime()===n.getTime()?ii(t.locale?.language??"en","common.today"):function(e){let t=ki.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric"}),ki.set(e,t)),t}(t.locale?.language??"en").format(r)}const Ii="mealie-mealplan-updated",Ai="mealie-recipes-updated",Ri="mealie-recipe-rated",Si="mealie-favorite-toggled";function Mi(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}function Ti(e,t){return window.addEventListener(e,t),()=>window.removeEventListener(e,t)}function Di(e,t){const i=e=>t(e.detail);return window.addEventListener(e,i),()=>window.removeEventListener(e,i)}const Ci=r`
  ha-card {
    background: inherit;
  }

  ha-icon-button {
    --ha-icon-button-size: 35px;
    --mdc-icon-button-size: 35px;
    --mdc-icon-size: 20px;
    background-color: color-mix(in srgb, var(--primary-color) 70%, transparent);
    color: var(--text-primary-color);
    border-radius: 50%;
  }

  .days-vertical {
    display: flex;
    flex-direction: column;
    gap: var(--ha-space-3, 12px);
  }

  .days-horizontal {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--ha-space-3, 12px);
    align-items: start;
  }

  .day-section {
    display: flex;
    flex-direction: column;
  }

  .card-content {
    display: grid;
    padding: var(--ha-space-2);
    gap: 10px;
  }

  .card-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 10px;
    border-radius: 10px;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .date-label {
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-heading);
    padding: 6px 0px 6px 10px;
    color: var(--primary-text-color);
    border-bottom: none;
  }

  .favorite-button {
    background: none;
    color: var(--primary-text-color);
  }

  .recipes-container,
  .recipes-horizontal {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
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
    display: flex;
    flex-direction: column;
    box-shadow: var(--bar-box-shadow);
    background: var(--wa-color-neutral-fill-normal)
    z-index: 0;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-card-body {
    padding-top: 32px;
  }

  .recipe-card:not(:has(.recipe-card-image)) .card-buttons {
    flex-direction: row;
    justify-content: center;
    order: 2;
    padding: 4px 8px 8px 8px;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-title {
    order: 1;
    padding: 0 8px;
  }

  .recipe-card:not(:has(.recipe-card-image)) .recipe-times {
    order: 3;
    padding: 0 18px;
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
    border-radius: 0;
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
    background: no-repeat center / 28%
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23888"><path d="M21.9 21.9l-8.5-8.5L2.1 2.1.69 3.51 3 5.83V19a2 2 0 002 2h13.17l2.31 2.31zM5 18l3.5-4.5 2.5 3L12.17 15l3 3zm16-1.17V5a2 2 0 00-2-2H7.83z"/></svg>');
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
    z-index: 2;
    top: 8px;
    left: 8px;
  }

  .recipe-name {
    margin: 3px 3px 0px 10px;
    color: var(--ha-color-text-link);
    text-transform: uppercase;
    font-weight: var(--ha-font-weight-body);
  }

  .recipe-description {
    text-align: center;
    margin: 10px;
    font-size: var(--ha-font-size-m);
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
    color: var(--warning-color);
  }

  .recipe-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 5px 0;
  }

  .recipe-title {
    display: flex;
    flex-direction: column;
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
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-medium);
    margin-top: 2px;
    margin-left: 2px;
    color: var(--primary-text-color);
  }

  .card-buttons {
    display: flex;
    flex-direction: row;
    gap: 2px;
    pointer-events: auto;
    z-index: 2;
  }

  .recipe-card-image .card-buttons {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    flex-direction: row;
    justify-content: center;
  }

  .delete-mealplan-button {
    background-color: var(--error-color);
  }

  .card-toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .card-toolbar mealie-recipe-search {
    flex: 1;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .interactive-rating ha-icon {
    --mdc-icon-size: 20px;
    color: var(--warning-color);
    transition: transform 0.1s;
  }

  .interactive-rating ha-icon:hover {
    transform: scale(1.2);
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

  .dialog-body {
    display: flex;
    flex-direction: column;
    gap: 6px;
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
    gap: 8px;
}

  .dialog-type {
    background: var(--primary-color);
    color: var(--text-primary-color);
    padding: 0 5px;
    border-radius: 4px;
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-bold);
    text-transform: uppercase;
    display: inline-block;
  }

  .dialog-body ha-selector {
    width: 100%;
    max-width: 100%;
  }

  .recipe-times {
    padding: 0 10px;
    margin: 5px 0;
  }

  .details-title {
    color: var(--secondary-text-color);
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
    font-size: var(--ha-font-size-m);
    color: var(--primary-text-color);
    line-height: 1.4;
  }

  .detail-image {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    margin: 0px auto 20px;
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
    padding: 24px;
    color: var(--secondary-text-color);
  }

  .dialog-servings-control {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0 10px 0;
  }

  .dialog-servings-btn {
    --ha-icon-button-size: 30px;
    --mdc-icon-button-size: 30px;
    --mdc-icon-size: 16px;
  }

  .dialog-servings-btn[disabled] {
    color: var(--disabled-color, var(--secondary-text-color));
  }

  .dialog-servings-value {
    font-size: var(--ha-font-size-m, 0.875rem);
    color: var(--primary-text-color);
    min-width: 72px;
    text-align: center;
    user-select: none;
  }

  .ingredient-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0 6px 0;
    border-bottom: 1px solid var(--divider-color, var(--ha-button-neutral-light-color));
    margin-bottom: 4px;
  }

  .ingredient-list-title {
    font-size: var(--ha-font-size-m);
    font-weight: var(--ha-font-weight-bold);
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
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-bold);
    color: var(--secondary-text-color);
    text-transform: uppercase;
    padding: 8px 4px 2px 4px;
  }

  .ingredient-item {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    border-radius: 4px;
    padding: 2px 4px;
    transition: background 0.1s;
  }

  .ingredient-item:hover {
    background: var(--secondary-background-color);
  }

  .ingredient-item-text {
    font-size: var(--ha-font-size-m);
    color: var(--primary-text-color);
    flex: 1;
  }
`,ji=(e,t,i,a)=>{const s={},r=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,e.dispatchEvent(r),r},Pi={shopping_list:"add_recipe_to_shopping_list",interactive_rating:"rate_recipe",favorites:"add_recipe_favorite",import_recipe:"import_recipe",random_mealplan:"set_random_mealplan",edit_mealplan:"update_mealplan",delete_mealplan:"delete_mealplan"};function Oi(e,t){return!!e?.services?.[he]?.[Pi[t]]}function Ni(e){if(!e)return!1;try{const{protocol:t}=new URL(e);return"http:"===t||"https:"===t}catch{return!1}}function Li(e){window.open(e,"_blank","noopener,noreferrer")}const Ui={tiny:"tiny-original.webp",min:"min-original.webp",original:"original.webp"};const Fi=e=>class extends e{constructor(){super(...arguments),this.localize=(e,t,i)=>ii(this.hass?.locale?.language??"en",e,t,i),this.localizeError=(e,t="error.error_loading")=>{if(e instanceof hi){const t=this.localize(e.translationKey);return e.detail?`${t}: ${e.detail}`:t}return e instanceof Error&&e.message?e.message:this.localize(t)}}},Vi=()=>{},Bi=e=>customElements.get(e)?Vi:(e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})(e);var Wi=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,qi=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?Hi(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&Wi(t,i,r),r};let Ki=class extends ne{constructor(){super(...arguments),this.rating=0,this.interactive=!1,this.updating=!1,this._hovered=0}_emit(e){this.updating||this.dispatchEvent(new CustomEvent("rate-selected",{detail:{rating:e},bubbles:!1,composed:!1}))}render(){return this.interactive?this._renderInteractive():this._renderReadonly()}_renderReadonly(){const e=this.rating;return V`
      <span class="star-rating">
        ${Ki.STARS.map(t=>V`<ha-icon icon=${e>=t?"mdi:star":e>=t-.5?"mdi:star-half-full":"mdi:star-outline"}></ha-icon>`)}
      </span>
    `}_renderInteractive(){const e=this._hovered||this.rating;return V`
      <span
        class="star-rating interactive-rating"
        @mouseleave=${()=>{this._hovered=0}}
      >
        ${Ki.STARS.map(t=>{const i=e>=t;return V`
            <ha-icon
              class="star-icon ${i?"star-filled":"star-empty"}"
              icon=${i?"mdi:star":"mdi:star-outline"}
              @mouseenter=${()=>{this._hovered=t}}
              @click=${()=>this._emit(t)}
              style="cursor:${this.updating?"wait":"pointer"}"
            ></ha-icon>
          `})}
      </span>
    `}};Ki.styles=Ci,Ki.STARS=[1,2,3,4,5],qi([ce({type:Number})],Ki.prototype,"rating",2),qi([ce({type:Boolean})],Ki.prototype,"interactive",2),qi([ce({type:Boolean})],Ki.prototype,"updating",2),qi([pe()],Ki.prototype,"_hovered",2),Ki=qi([Bi("mealie-star-rating")],Ki);var Gi=Object.defineProperty,Zi=(e,t,i,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&Gi(t,i,r),r};function Qi(e){e.currentTarget.parentElement?.classList.remove("image-loading")}function Ji(e){const t=e.currentTarget.parentElement;t&&(t.classList.remove("image-loading"),t.classList.add("image-error"))}function Yi(e,t,i){const a=function(e,t,i="min"){if(e.image&&((a=e.image).startsWith("/")&&!a.startsWith("//")||a.startsWith("http")))return e.image;var a;if(!t)return null;const s=t.replace(/\/$/,""),r=e.recipe_id||e.slug;return r?`${s}/api/media/recipes/${encodeURIComponent(r)}/images/${Ui[i]}`:null}(t,i.url,i.variant??"min");if(!a)return W;const s=function(e,t){return t.startsWith("/")?`${e.auth.data.hassUrl}${t}`:t}(e,a);if(!function(e){if(e.startsWith("//"))return!1;if(e.startsWith("/"))return!0;try{const{protocol:t}=new URL(e);return"http:"===t||"https:"===t}catch{return!1}}(s))return W;const r=function(e){return!e.image}(t)&&i.onImageMissing?i.onImageMissing:Ji;return V`
    <div class="${i.containerClass} image-loading">
      <img
        src=${s}
        alt=${t.name??t.title??""}
        class="${i.imgClass}"
        loading="lazy"
        decoding="async"
        @load=${Qi}
        @error=${r}
      />
      ${i.overlay??W}
    </div>
  `}const Xi=e=>{class t extends(Fi(e)){constructor(){super(...arguments),this.error=null,this._loading=!1,this._initialized=!1,this._ratings=new Map,this._updatingRatings=new Set,this._favorites=new Map,this._updatingFavorites=new Set,this._missingImages=new Set}supports(e){return Oi(this.hass,e)}get baseConfig(){return this.config??{}}recipeWebUrl(e){return function(e,t,i){if(!Ni(e)||!t)return null;const a=e.replace(/\/$/,""),s=i?.trim()||ge;return`${a}/g/${encodeURIComponent(s)}/r/${encodeURIComponent(t)}`}(this.baseConfig.url,e?.slug,this.baseConfig.mealie_group_slug)}openRecipe(e){if("browser"!==this.baseConfig.recipe_view)return!0;const t=this.recipeWebUrl(e);return!t||(Li(t),!1)}handleError(e){this.error=this.localizeError(e)}_markImageMissing(e){this._missingImages.has(e)||(this._missingImages=new Set(this._missingImages).add(e))}renderRecipeImage(e,t,i=W){if(!t)return W;const a=e.slug??e.recipe_id;return a&&this._missingImages.has(a)?W:Yi(this.hass,e,{url:this.baseConfig.url,variant:"min",containerClass:"recipe-card-image",imgClass:"recipe-image",onImageMissing:a?()=>this._markImageMissing(a):void 0,overlay:i})}renderIconButton(e){return V`
        <ha-icon-button class=${e.className} .label=${this.localize(e.labelKey)} @click=${e.onClick}>
          <ha-icon icon=${e.icon}></ha-icon>
        </ha-icon-button>
      `}renderCardButtons(e){return V`<div class="card-buttons">${e.map(e=>this.renderIconButton(e))}</div>`}renderRecipeMedia(e,t,i){const a=i.length?this.renderCardButtons(i):W,s=this.renderRecipeImage(e,t,a);return s!==W?s:a}renderRecipeName(e){return V`<h4 class="recipe-name">${e.name??e.title}</h4>`}renderRecipeDescription(e,t){return t&&e?V`<div class="recipe-description">${e}</div>`:W}buildTimeRows(e,t=!0,i=!0,a=!0){const s=this.hass?.locale?.language;return[t&&e.prep_time?{icon:"mdi:knife",label:this.localize("dialog.prep_time"),value:li(e.prep_time,s)}:null,i&&e.perform_time?{icon:"mdi:pot-steam",label:this.localize("dialog.cooking_time"),value:li(e.perform_time,s)}:null,a&&e.total_time?{icon:"mdi:clock-time-three-outline",label:this.localize("dialog.total_time"),value:li(e.total_time,s)}:null].filter(Boolean)}renderTimeRows(e){return V`${e.map(e=>V`
          <div class="time-row">
            <ha-icon class="time-row-icon" icon=${e.icon}></ha-icon>
            <span class="time-row-label">${e.label}</span>
            <span class="time-row-value">${e.value}</span>
          </div>
        `)}`}renderRecipeTimes(e,t,i,a){const s=this.buildTimeRows(e,t,i,a);return s.length?V`<div class="recipe-times">${this.renderTimeRows(s)}</div>`:W}async _setRating(e,t,i){if(!e||!this.hass)return;if(this._updatingRatings.has(e))return;const a=this._ratings.get(e)??0;this._ratings=new Map(this._ratings).set(e,t),this._updatingRatings=new Set(this._updatingRatings).add(e);try{await function(e,t,i,a){return gi("error.error_loading",()=>{if(!t)throw new hi("error.error_loading");return mi(e,"rate_recipe",{recipe_slug:t,rating:i},a)})}(this.hass,e,t,i),Mi(Ri,{slug:e,rating:t})}catch{this._ratings=new Map(this._ratings).set(e,a),ji(this,"hass-notification",{message:this.localize("error.error_loading")})}finally{const t=new Set(this._updatingRatings);t.delete(e),this._updatingRatings=t}}async _toggleFavorite(e,t){if(!e||!this.hass)return;if(this._updatingFavorites.has(e))return;const i=this._favorites.get(e)??!1,a=!i;this._favorites=new Map(this._favorites).set(e,a),this._updatingFavorites=new Set(this._updatingFavorites).add(e),Mi(Si,{slug:e,favorite:a});try{await(a?function(e,t,i){return gi("error.error_loading",()=>{if(!t)throw new hi("error.error_loading");return mi(e,"add_recipe_favorite",{recipe_slug:t},i)})}(this.hass,e,t??void 0):function(e,t,i){return gi("error.error_loading",()=>{if(!t)throw new hi("error.error_loading");return mi(e,"remove_recipe_favorite",{recipe_slug:t},i)})}(this.hass,e,t??void 0))}catch{this._favorites=new Map(this._favorites).set(e,i),Mi(Si,{slug:e,favorite:i}),ji(this,"hass-notification",{message:this.localize("error.error_loading")})}finally{const t=new Set(this._updatingFavorites);t.delete(e),this._updatingFavorites=t}}renderFavoriteButton(e,t,i){if(!t||!this.supports("favorites"))return W;const a=e?.slug;if(!a)return W;const s=this._favorites.get(a)??!1;return V`
        <ha-icon-button
          class="favorite-button"
          .label=${s?this.localize("dialog.remove_favorite"):this.localize("dialog.add_favorite")}
          .disabled=${this._updatingFavorites.has(a)}
          @click=${e=>{e.stopPropagation(),this._toggleFavorite(a,i)}}
        >
          <ha-icon icon=${s?"mdi:heart":"mdi:heart-outline"}></ha-icon>
        </ha-icon-button>
      `}_renderInteractiveRating(e,t,i){if(!t)return W;const a=e?.slug;if(!a||!this.supports("interactive_rating"))return this.renderStarRating(e?.rating??void 0,t);const s=this._updatingRatings.has(a),r=s?this._ratings.get(a)??e?.rating??0:e?.rating??0;return V`
        <mealie-star-rating
          interactive
          .rating=${r}
          ?updating=${s}
          @rate-selected=${e=>{this._setRating(a,e.detail.rating,i??void 0)}}
        ></mealie-star-rating>
      `}renderStarRating(e,t){return t?V`<mealie-star-rating .rating=${e??0}></mealie-star-rating>`:W}renderServings(e,t){return e&&t?V`<span class="servings-badge">
        <ha-icon icon="mdi:circle-slice-1"></ha-icon>
        <span class="servings-value">${e}</span>
      </span>`:W}renderDetailsSection(e,t,i){return V`
        <ha-expansion-panel outlined expanded>
          <ha-icon slot="leading-icon" icon=${e}></ha-icon>
          <span slot="header" class="details-title">${t}</span>
          <div class="details-content">${i}</div>
        </ha-expansion-panel>
      `}}return Zi([pe()],t.prototype,"error"),Zi([pe()],t.prototype,"_loading"),Zi([pe()],t.prototype,"_initialized"),Zi([pe()],t.prototype,"_ratings"),Zi([pe()],t.prototype,"_updatingRatings"),Zi([pe()],t.prototype,"_favorites"),Zi([pe()],t.prototype,"_updatingFavorites"),Zi([pe()],t.prototype,"_missingImages"),t};var ea=Object.defineProperty;class ta extends(Xi(ne)){constructor(){super(...arguments),this._watchSignature=""}watchedEntityIds(){return[]}hasOpenDialog(){return!1}getCardSize(){return 1+2*(this.itemCount()||1)}getGridOptions(){return{rows:"auto",min_columns:6}}findMealieEntities(e){const t=this.hass,i=this.config?.config_entry_id??null,a=t?.entities,s=`${e}.`;if(!a){const e=t?.states??{};return Object.keys(e).filter(e=>e.startsWith(s)&&e.includes("mealie"))}const r=t?.devices;return Object.keys(a).filter(e=>{if(!e.startsWith(s))return!1;const t=a[e];if(!t||"mealie"!==t.platform)return!1;if(i){if(t.config_entry_id)return t.config_entry_id===i;const e=t.device_id&&r?r[t.device_id]:void 0;if(e?.config_entries)return e.config_entries.includes(i)}return!0})}_registryRef(){const e=this.hass;return e?.entities??e?.states}_getWatchedEntityIds(){const e=this.config?.config_entry_id??null,t=this._registryRef();return this._watchedIds&&this._watchedIdsKey===e&&this._watchedRegistryRef===t||(this._watchedIdsKey=e,this._watchedRegistryRef=t,this._watchedIds=this.watchedEntityIds()),this._watchedIds}_computeWatchSignature(){const e=this._getWatchedEntityIds();if(!e.length)return"";const t=this.hass?.states??{};return e.map(e=>{const i=t[e];return i?`${e}=${i.state}@${i.last_updated}`:`${e}=∅`}).join("|")}_reload(){this._initialized=!1,this.loadData()}_watchedStateChanged(){if(this._loading)return!1;const e=this._computeWatchSignature();return!!e&&e!==this._watchSignature}_maybeRefreshOnEntityChange(){if(this._loading)return;const e=this._computeWatchSignature();e&&(this.error?e!==this._watchSignature&&(this._watchSignature=e,this.error=null,this._reload()):this._initialized&&(this._watchSignature?e!==this._watchSignature&&(this._watchSignature=e,this._reload()):this._watchSignature=e))}disconnectedCallback(){super.disconnectedCallback(),this._watchSignature="",this._watchedIds=void 0,this._watchedIdsKey=void 0,this._watchedRegistryRef=void 0}willUpdate(e){if(super.willUpdate(e),e.has("hass")&&this.hass){const t=e.get("hass");t&&t.themes===this.hass.themes&&t.selectedTheme===this.hass.selectedTheme||((e,t,i)=>{e._themes||(e._themes={});let a=t.default_theme;("default"===i||i&&t.themes[i])&&(a=i);const s={...e._themes};if("default"!==a){const i=t.themes[a];Object.keys(i).forEach(t=>{const a=`--${t}`;e._themes[a]="",s[a]=i[t]})}if(e.updateStyles)return void e.updateStyles(s);const r=window.ShadyCSS;r&&r.styleSubtree(e,s)})(this,this.hass.themes,this.hass.selectedTheme),this._maybeRefreshOnEntityChange()}!this.hass||this._initialized||this._loading||this.error||this.loadData()}shouldUpdate(e){if(e.size>1||!e.has("hass"))return!0;const t=e.get("hass");return!t||(t.locale!==this.hass.locale||t.themes!==this.hass.themes||t.selectedTheme!==this.hass.selectedTheme||t.services!==this.hass.services||this.hasOpenDialog()||this._watchedStateChanged())}renderLoading(){return V`
      <ha-card>
        <div class="card-content">
          <div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>
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
    `}}function ia(e,t,i,a=!1){return V`
    <ha-formfield alignEnd spaceBetween .label=${t} .disabled=${a}>
      <ha-switch .checked=${e} .disabled=${a} @change=${e=>i(e.target.checked)}></ha-switch>
    </ha-formfield>
  `}function aa(e,t,i,a){return V`
    <ha-selector
      .hass=${e}
      .selector=${{text:{}}}
      .value=${t??""}
      .label=${i}
      @value-changed=${e=>a(e.detail.value)}
    ></ha-selector>
  `}ta.styles=Ci,((e,t,i)=>{for(var a,s=void 0,r=e.length-1;r>=0;r--)(a=e[r])&&(s=a(t,i,s)||s);s&&ea(t,i,s)})([ce({attribute:!1})],ta.prototype,"hass");const sa=r`
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
`;var ra=Object.defineProperty,na=(e,t,i,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&ra(t,i,r),r};const oa=new Map;class la extends(Fi(ne)){constructor(){super(...arguments),this._imageIsHash=void 0,this._imageCheckEntry="__unset__",this._computeLabel=e=>({config_entry_id:this.localize("editor.integration")}[e.name]??e.name)}setConfig(e){this.config={...e}}updated(e){if(super.updated(e),!this.hass||!this.config)return;const t=this.config.config_entry_id??null;t!==this._imageCheckEntry&&(this._imageCheckEntry=t,this._imageIsHash=void 0,t&&this._refreshImageFormat(t))}async _refreshImageFormat(e){const t=await async function(e,t){const i=oa.get(t);if(void 0!==i)return i;let a;try{a=await bi(e,{configEntryId:t,resultLimit:1})}catch{return!0}const s=a[0]?.image,r=!s||!(s.startsWith("/")||s.startsWith("http"));return oa.set(t,r),r}(this.hass,e);this._imageCheckEntry===e&&(this._imageIsHash=t)}get _needsMealieUrl(){return!!this._imageIsHash||"dialog"!==this.config.recipe_view}get _showImageAllowed(){return!!this.config?.config_entry_id&&(void 0!==this._imageIsHash&&(!this._imageIsHash||Ni(this.config.url)))}get _schemaTop(){return[{type:"expandable",title:this.localize("editor.integration"),icon:"mdi:connection",schema:[{name:"config_entry_id",selector:{config_entry:{integration:"mealie"}}}]}]}_setValue(e,t){this.config={...this.config,[e]:t},ji(this,"config-changed",{config:this.config})}_valueChanged(e){const t={...e.detail.value};t.config_entry_id||(t.show_image=!1),this.config=t,ji(this,"config-changed",{config:this.config})}renderEditorLoading(){return V`<div>${this.localize("editor.loading")}</div>`}renderTopForm(){return V`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schemaTop}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}renderInfosDisplayOptions(){return V`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_infos")}>
        <ha-icon slot="leading-icon" icon="mdi:information-box-outline"></ha-icon>
        <div class="settings-fields">${this.renderInfosDisplayFields()}</div>
      </ha-expansion-panel>
    `}renderInfosDisplayFields(){return V`
      ${ia(!!this.config.show_rating,this.localize("editor.show_rating"),e=>this._setValue("show_rating",e))}
      ${ia(!!this.config.show_servings,this.localize("editor.show_servings"),e=>this._setValue("show_servings",e))}
      ${ia(!!this.config.show_description,this.localize("editor.show_description"),e=>this._setValue("show_description",e))}
    `}renderImageDisplayOptions(){const e=this._showImageAllowed;return V`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_image")}>
        <ha-icon slot="leading-icon" icon="mdi:image-outline"></ha-icon>
        <div class="settings-fields">
          ${this._needsMealieUrl?aa(this.hass,this.config.url,this.localize("editor.mealie_url"),e=>{const t=e||void 0;this.config={...this.config,url:t,show_image:!!Ni(t)&&this.config.show_image},ji(this,"config-changed",{config:this.config})}):W}
          ${ia(!!this.config.show_image&&e,this.localize("editor.show_image"),e=>this._setValue("show_image",e),!e)}
        </div>
      </ha-expansion-panel>
    `}renderRecipeViewOptions(){const e=this.config.recipe_view??"dialog";return V`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipe_view")}>
        <ha-icon slot="leading-icon" icon="mdi:book-open-variant"></ha-icon>
        <div class="settings-fields">
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{mode:"dropdown",options:[{value:"dialog",label:this.localize("editor.recipe_view_dialog")},{value:"webview",label:this.localize("editor.recipe_view_webview")},{value:"browser",label:this.localize("editor.recipe_view_browser")}]}}}
            .value=${e}
            .label=${this.localize("editor.recipe_view")}
            @value-changed=${e=>this._setValue("recipe_view",e.detail.value)}
          ></ha-selector>
          ${"dialog"===e?W:V`
                ${Ni(this.config.url)?W:V`<ha-alert alert-type="info">${this.localize("info.no_url")}</ha-alert>`}
                ${aa(this.hass,this.config.mealie_group_slug??ge,this.localize("editor.mealie_group_slug"),e=>this._setValue("mealie_group_slug",e||ge))}
              `}
        </div>
      </ha-expansion-panel>
    `}renderTimesDisplayOptions(){return V`
      <ha-expansion-panel outlined .header=${this.localize("editor.settings_times")}>
        <ha-icon slot="leading-icon" icon="mdi:timer-settings-outline"></ha-icon>
        <div class="settings-fields">
          ${ia(!!this.config.show_prep_time,this.localize("editor.show_prep_time"),e=>this._setValue("show_prep_time",e))}
          ${ia(!!this.config.show_perform_time,this.localize("editor.show_cooking_time"),e=>this._setValue("show_perform_time",e))}
          ${ia(!!this.config.show_total_time,this.localize("editor.show_total_time"),e=>this._setValue("show_total_time",e))}
        </div>
      </ha-expansion-panel>
    `}}la.styles=sa,na([ce({attribute:!1})],la.prototype,"hass"),na([pe()],la.prototype,"config"),na([pe()],la.prototype,"_imageIsHash");var da=Object.getOwnPropertyDescriptor;let ca=class extends la{constructor(){super(...arguments),this._layoutChanged=e=>{const{layout_mode:t,...i}=e.detail.value,a={...i};a.days_to_show=Number(a.days_to_show),a.days_layout="side_by_side"===t||"both"===t?"horizontal":"vertical",a.recipes_layout="horizontal"===t||"both"===t?"horizontal":"vertical",a.config_entry_id||(a.show_image=!1),this.config=a,ji(this,"config-changed",{config:this.config})},this._computeLayoutLabel=e=>({days_to_show:this.localize("editor.days_to_show"),day_offset:this.localize("editor.day_offset"),layout_mode:this.localize("editor.days_layout")}[e.name]??e.name)}get _daysToShowOptions(){return Array.from({length:7},(e,t)=>{const i=t+1;return{value:String(i),label:1===i?this.localize("common.today"):this.localize("editor.days_count","{count}",String(i))}})}get _schemaLayout(){return[{type:"expandable",title:this.localize("editor.settings_title_layout"),icon:"mdi:view-grid-outline",schema:[{name:"days_to_show",selector:{select:{mode:"dropdown",options:this._daysToShowOptions}}},{name:"day_offset",selector:{number:{min:0,max:30,mode:"box",step:1}}},{name:"layout_mode",selector:{select:{mode:"dropdown",options:[{value:"vertical",label:this.localize("editor.layout_vertical")},{value:"horizontal",label:this.localize("editor.layout_horizontal")},{value:"side_by_side",label:this.localize("editor.layout_side_by_side")},{value:"both",label:this.localize("editor.layout_days_and_meals_side_by_side")}]}}}]}]}_toggleEntryType(e){const t=new Set(this.config.entry_types??[]);t.has(e)?t.delete(e):t.add(e),this.config={...this.config,entry_types:[...t]},ji(this,"config-changed",{config:this.config})}_renderEntryTypes(){const e=new Set(this.config.entry_types??[]);return V`
      <div class="entry-type-chips">
        ${ci(this.localize).map(({value:t,label:i})=>V`
            <button class="entry-chip ${e.has(t)?"active":""}" @click=${()=>this._toggleEntryType(t)}>${i}</button>
          `)}
      </div>
    `}render(){return this.hass&&this.config?V`
      ${this.renderTopForm()}
      <ha-expansion-panel outlined .header=${this.localize("editor.entry_types")}>
        <ha-icon slot="leading-icon" icon="mdi:silverware-fork-knife"></ha-icon>
        ${this._renderEntryTypes()}
      </ha-expansion-panel>

      ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()} ${this.renderRecipeViewOptions()}

      <ha-expansion-panel outlined .header=${this.localize("editor.settings_meal_actions")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${ia(this.config.show_random_button??!0,this.localize("editor.show_random_button"),e=>this._setValue("show_random_button",e))}
          ${ia(this.config.show_note_button??!0,this.localize("editor.show_note_button"),e=>this._setValue("show_note_button",e))}
        </div>
      </ha-expansion-panel>
      <ha-form
        .hass=${this.hass}
        .data=${{...this.config,days_to_show:String(this.config.days_to_show??1),layout_mode:this._layoutMode()}}
        .schema=${this._schemaLayout}
        .computeLabel=${this._computeLayoutLabel}
        @value-changed=${this._layoutChanged}
      ></ha-form>
    `:this.renderEditorLoading()}_layoutMode(){const e="horizontal"===this.config.days_layout,t="horizontal"===this.config.recipes_layout;return e?t?"both":"side_by_side":t?"horizontal":"vertical"}};ca=((e,t,i,a)=>{for(var s,r=a>1?void 0:a?da(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(r)||r);return r})([Bi("mealie-card-editor")],ca);var pa=Object.defineProperty,ha=(e,t,i,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&pa(t,i,r),r};class _a extends(Fi(ne)){constructor(){super(...arguments),this.configEntryId=null,this.open=!1,this._submitting=!1,this._close=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!1,composed:!1}))}}onOpen(){}updated(e){super.updated(e),e.has("open")&&this.open&&(this._submitting=!1,this.onOpen())}async submit(e){if(!this._submitting){this._submitting=!0;try{await e.run(),ji(this,"hass-notification",{message:"function"==typeof e.success?e.success():this.localize(e.success)}),e.signal&&(t=e.signal,window.dispatchEvent(new CustomEvent(t))),!1!==e.closeOnSuccess&&this._close()}catch(t){ji(this,"hass-notification",{message:this.localizeError(t,e.errorKey)})}finally{this._submitting=!1}var t}}renderDateSelector(e,t){return V`
      <ha-selector
        .hass=${this.hass}
        .selector=${{date:{}}}
        .value=${e}
        .label=${this.localize("dialog.select_date")}
        @value-changed=${e=>t(e.detail.value)}
      ></ha-selector>
    `}renderEntryTypeSelector(e,t){return V`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:ci(this.localize)}}}
        .value=${e}
        .label=${this.localize("dialog.select_meal_type")}
        @value-changed=${e=>t(e.detail.value)}
      ></ha-selector>
    `}renderTextSelector(e,t,i,a=!1){return V`
      <ha-selector
        .hass=${this.hass}
        .selector=${{text:a?{multiline:!0}:{}}}
        .value=${e}
        .label=${this.localize(t)}
        .required=${!1}
        @value-changed=${e=>i(e.detail.value)}
      ></ha-selector>
    `}renderPrimaryFooter(e,t,i){return V`
      <ha-dialog-footer slot="footer">
        <ha-button slot="primaryAction" size="small" variant="brand" appearance="accent" @click=${t} ?disabled=${i}>
          ${this._submitting?"...":this.localize(e)}
        </ha-button>
      </ha-dialog-footer>
    `}}_a.styles=Ci,ha([ce({attribute:!1})],_a.prototype,"hass"),ha([ce()],_a.prototype,"configEntryId"),ha([ce({type:Boolean})],_a.prototype,"open"),ha([pe()],_a.prototype,"_submitting");var ga=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,ma=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?ua(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&ga(t,i,r),r};let fa=class extends _a{constructor(){super(...arguments),this.recipe=null,this.defaultShoppingListId=null,this._step=1,this._shoppingListId="",this._shoppingEntityId="",this._quantity=1,this._lists=[],this._loadingLists=!1,this._listsError=null,this._loadingIngredients=!1,this._ingredients=[],this._rawIngredients=[],this._handleAdd=()=>{const e=this.recipe?.recipe_id;if(!e||!this._shoppingListId||!this.hass)return;const t=this._selectables,i=0===t.length||t.every(e=>e.selected);this.submit({run:()=>{return i||!this._canSelectIngredients?(t=this.hass,a={configEntryId:this.configEntryId??void 0,shoppingListId:this._shoppingListId,recipeId:e,quantity:this._quantity},gi("error.error_loading",()=>mi(t,"add_recipe_to_shopping_list",{shopping_list_id:a.shoppingListId,recipe_id:a.recipeId,...void 0!==a.quantity&&{recipe_increment_quantity:a.quantity}},a.configEntryId))):function(e,t){return gi("error.error_loading",async()=>{const i=e,a=async()=>{const e=(await i.callService(he,"get_shopping_list_items",{},{entity_id:t.shoppingEntityId},!1,!0)).response;return e?.[t.shoppingEntityId]?.items??[]},s=new Set((await a()).map(e=>e.item_id));await mi(e,"add_recipe_to_shopping_list",{shopping_list_id:t.shoppingListId,recipe_id:t.recipeId,recipe_increment_quantity:t.quantity},t.configEntryId);const r=(await a()).filter(e=>!s.has(e.item_id)),n=[];for(const e of t.deselectedIngredients){const i=e.food?.food_id??null;let a=i?r.find(e=>e.food_id===i&&!n.includes(e.item_id)):void 0;if(!a){const i=pi(e,t.quantity,!0,t.language??"en").toLowerCase().trim();a=r.find(e=>!n.includes(e.item_id)&&(e.note?.toLowerCase().trim()===i||e.display?.toLowerCase().trim()===i))}a&&n.push(a.item_id)}n.length>0&&await i.callService("todo","remove_item",{item:n},{entity_id:t.shoppingEntityId},!1)})}(this.hass,{configEntryId:this.configEntryId??void 0,shoppingListId:this._shoppingListId,shoppingEntityId:this._shoppingEntityId,recipeId:e,quantity:this._quantity,deselectedIngredients:this._deselectedIngredients(),language:this.hass?.locale?.language??"en"});var t,a},success:"dialog.recipe_added_to_shopping_list",errorKey:"error.error_loading"})}}onOpen(){this._step=1,this._quantity=1,this._ingredients=[],this._rawIngredients=[],this._loadLists()}async _loadLists(){this._loadingLists=!0,this._listsError=null;try{this._lists=await(e=this.hass,t=this.configEntryId??void 0,gi("error.error_loading",async()=>{const[i,a]=await Promise.all([fi(e,"get_shopping_lists",{},t),zi(e,t)]),s=e=>{for(const[t,i]of a)if(t.endsWith(`_${e}`))return i;return""};return(i?.shopping_lists??[]).map(e=>({id:e.list_id,name:e.name,entity_id:s(e.list_id)}))}))}catch(e){return this._lists=[],void(this._listsError=this.localizeError(e))}finally{this._loadingLists=!1}var e,t;if(!this._lists.length)return;const i=this.defaultShoppingListId?this._lists.find(e=>e.id===this.defaultShoppingListId):void 0,a=i??this._lists[0];this._shoppingListId=a.id,this._shoppingEntityId=a.entity_id}async _resolveIngredients(){if(this.recipe?.ingredients?.length)return this.recipe.ingredients;const e=this.recipe?.slug??this.recipe?.recipe_id;if(!e)return[];const t=await wi(this.hass,e,this.configEntryId??void 0);return t?.ingredients??[]}async _handleNext(){if(!this._loadingIngredients){this._step=2,this._loadingIngredients=!0;try{this._rawIngredients=await this._resolveIngredients(),this._ingredients=this._rawIngredients.map(e=>{const t=!(!e.title||e.food);return{text:t?e.title:pi(e,this._quantity,!0,this.hass?.locale?.language??"en"),selected:!t,isTitle:t}})}catch{this._ingredients=[],this._rawIngredients=[]}finally{this._loadingIngredients=!1}}}_toggleIngredient(e){this._ingredients=this._ingredients.map((t,i)=>i===e?{...t,selected:!t.selected}:t)}_toggleAll(){const e=this._selectables.every(e=>e.selected);this._ingredients=this._ingredients.map(t=>t.isTitle?t:{...t,selected:!e})}get _selectables(){return this._ingredients.filter(e=>!e.isTitle)}get _canSelectIngredients(){return!!this._shoppingEntityId}_deselectedIngredients(){return this._rawIngredients.filter((e,t)=>{const i=this._ingredients[t];return!!i&&!i.isTitle&&!i.selected})}render(){if(!this.open||!this.recipe)return W;const e=2===this._step||!this._canSelectIngredients,t=1===this._step?!!this._shoppingListId&&this._lists.length>0&&!this._loadingIngredients&&(!e||!!this.recipe.recipe_id&&!this._submitting):!!this.recipe.recipe_id&&!this._submitting&&!this._loadingIngredients&&(0===this._ingredients.length||this._selectables.some(e=>e.selected));return V`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.add_to_shopping_list")}</span>

        <div class="dialog-body">${1===this._step?this._renderStep1():this._renderStep2()}</div>

        <ha-dialog-footer slot="footer">
          ${2===this._step?V`
                <ha-button
                  slot="secondaryAction"
                  size="small"
                  variant="danger"
                  appearance="accent"
                  @click=${()=>{this._step=1}}
                >
                  ${this.localize("dialog.back")}
                </ha-button>
              `:W}
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
    `}_renderStep1(){return this._loadingLists?V`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`:this._listsError?V`<ha-alert alert-type="error">${this._listsError}</ha-alert>`:this._lists.length?V`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:this._lists.map(e=>({value:e.id,label:e.name}))}}}
        .value=${this._shoppingListId}
        .label=${this.localize("dialog.select_shopping_list")}
        @value-changed=${e=>{this._shoppingListId=e.detail.value,this._shoppingEntityId=this._lists.find(t=>t.id===e.detail.value)?.entity_id??""}}
      ></ha-selector>

      <ha-selector
        .hass=${this.hass}
        .selector=${{number:{min:.25,max:10,step:.25,mode:"slider"}}}
        .value=${this._quantity}
        .label=${this.localize("dialog.shopping_list_quantity")}
        @value-changed=${e=>{this._quantity=e.detail.value}}
      ></ha-selector>
    `:V`<ha-alert alert-type="info">${this.localize("dialog.no_shopping_lists")}</ha-alert>`}_renderStep2(){if(this._loadingIngredients)return V`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`;if(!this._ingredients.length)return V`<ha-alert alert-type="info">${this.localize("dialog.no_ingredients")}</ha-alert>`;const e=this._selectables.every(e=>e.selected);return V`
      <div class="ingredient-list-header">
        <span class="ingredient-list-title">${this.localize("dialog.ingredients")}</span>
        <ha-checkbox .checked=${e} @change=${this._toggleAll}>${this.localize("dialog.select_all")}</ha-checkbox>
      </div>
      <div class="ingredient-list">
        ${this._ingredients.map((e,t)=>e.isTitle?V`<div class="ingredient-section-title">${e.text}</div>`:V`
                <label class="ingredient-item">
                  <ha-checkbox .checked=${e.selected} @change=${()=>this._toggleIngredient(t)}></ha-checkbox>
                  <span class="ingredient-item-text">${e.text}</span>
                </label>
              `)}
      </div>
    `}};ma([ce({attribute:!1})],fa.prototype,"recipe",2),ma([ce()],fa.prototype,"defaultShoppingListId",2),ma([pe()],fa.prototype,"_step",2),ma([pe()],fa.prototype,"_shoppingListId",2),ma([pe()],fa.prototype,"_shoppingEntityId",2),ma([pe()],fa.prototype,"_quantity",2),ma([pe()],fa.prototype,"_lists",2),ma([pe()],fa.prototype,"_loadingLists",2),ma([pe()],fa.prototype,"_listsError",2),ma([pe()],fa.prototype,"_loadingIngredients",2),ma([pe()],fa.prototype,"_ingredients",2),fa=ma([Bi("mealie-shopping-list-dialog")],fa);var ya=Object.defineProperty,va=Object.getOwnPropertyDescriptor,ba=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?va(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&ya(t,i,r),r};let wa=class extends(Xi(_a)){constructor(){super(...arguments),this.config={},this.recipe=null,this.isFavorite=null,this.defaultShoppingListId=null,this._detail=null,this._servings=0,this._shoppingDialogOpen=!1,this._webviewCard=null,this._baseServings=0,this._loadToken=0,this._unsubscribers=[]}get _slug(){return this._detail?.slug??this.recipe?.slug}get _webUrl(){return this.recipeWebUrl(this.recipe)}get _isWebview(){return"webview"===this.config.recipe_view&&!!this._webUrl&&!!window.loadCardHelpers}connectedCallback(){super.connectedCallback(),this._unsubscribers=[Di(Ri,({slug:e,rating:t})=>{this._detail?.slug===e&&(this._detail={...this._detail,rating:t})}),Di(Si,({slug:e,favorite:t})=>{this._favorites.get(e)!==t&&(this._favorites=new Map(this._favorites).set(e,t))})]}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[]}onOpen(){this._shoppingDialogOpen=!1}updated(e){super.updated(e),e.has("hass")&&this._webviewCard&&(this._webviewCard.hass=this.hass),this.open&&this.recipe&&(e.has("recipe")&&(this._detail=null,this._webviewCard=null),(e.has("open")||e.has("recipe"))&&(this._isWebview?this._webviewCard||this._loadWebview():this._detail||this.loadData()))}async _loadWebview(){const e=this._webUrl,t=window.loadCardHelpers;if(!e||!t)return;const i=this._loadToken+=1;this._loading=!0,this.error=null;try{const a=await t(),s=await a.createCardElement({type:"iframe",url:e,aspect_ratio:"125%"});if(i!==this._loadToken)return;s.hass=this.hass,this._webviewCard=s}catch(e){if(i!==this._loadToken)return;this.handleError(e)}finally{i===this._loadToken&&(this._loading=!1)}}async loadData(){if(!this.open||!this.recipe||!this.hass)return;const e=this.recipe.slug??this.recipe.recipe_id;if(!e)return;const t=this._loadToken+=1;this._loading=!0,this.error=null;try{const i=await wi(this.hass,e,this.configEntryId??void 0);if(t!==this._loadToken)return;this._detail=i,this._baseServings=i?.recipe_servings??0,this._servings=this._baseServings;const a=this._slug;a&&(this._favorites=new Map(this._favorites).set(a,this.isFavorite??this._favorites.get(a)??!1)),this._initialized=!0}catch(e){if(t!==this._loadToken)return;this.handleError(e)}finally{t===this._loadToken&&(this._loading=!1)}}_renderServingsControl(){return this._baseServings<=0?W:V`
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
    `}_renderIngredient(e){const t=this._baseServings>0?this._servings/this._baseServings:1;return V`<li>${pi(e,t,!1,this.hass?.locale?.language??"en")}</li>`}_renderInstruction(e){return V`<li>${e.title?V`<strong>${e.title}: </strong>`:""}${e.text??""}</li>`}_renderDetail(){const e=this._detail,t=this.buildTimeRows(e);return V`
      <div class="dialog-body">
        ${this.renderRecipeImage(e,!!this.config?.show_image)}

        <div class="recipe-meta">
          ${this.renderFavoriteButton(e,this.config.show_favorite??!1,this.configEntryId)}
          ${this._renderInteractiveRating(this._detail,!!this.config?.show_rating,this.configEntryId)}
          ${this.renderServings(e.recipe_servings,!!this.config.show_servings)}
        </div>

        ${t.length?this.renderDetailsSection("mdi:clock-outline",this.localize("dialog.times"),this.renderTimeRows(t)):W}
        ${e.ingredients?.length?this.renderDetailsSection("mdi:food-apple",this.localize("dialog.ingredients"),V`${this._renderServingsControl()}
                <ul>
                  ${e.ingredients.map(e=>this._renderIngredient(e))}
                </ul>`):W}
        ${e.instructions?.length?this.renderDetailsSection("mdi:chef-hat",this.localize("dialog.instructions"),V`<ol>
                ${e.instructions.map(e=>this._renderInstruction(e))}
              </ol>`):W}
      </div>
    `}_renderWebview(){return this._webviewCard?V`<div class="recipe-webview">${this._webviewCard}</div>`:W}_renderOpenInMealieButton(){const e=this._webUrl;return e&&"webview"===this.config.recipe_view?V`
      <ha-icon-button slot="headerActionItems" .label=${this.localize("dialog.open_in_mealie")} @click=${()=>Li(e)}>
        <ha-icon icon="mdi:open-in-new"></ha-icon>
      </ha-icon-button>
    `:W}render(){return this.open&&this.recipe?V`
      <ha-dialog .open=${!0} width="medium" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        ${this._renderOpenInMealieButton()}
        ${this._slug&&this.supports("shopping_list")?V`
              <ha-icon-button
                slot="headerActionItems"
                .label=${this.localize("dialog.add_to_shopping_list")}
                @click=${()=>{this._shoppingDialogOpen=!0}}
              >
                <ha-icon icon="mdi:cart-plus"></ha-icon>
              </ha-icon-button>
            `:W}
        ${this._loading?V`<div class="loading"><ha-spinner size="medium"></ha-spinner>${this.localize("editor.loading")}</div>`:W}
        ${this.error?V`<ha-alert alert-type="error">${this.error}</ha-alert>`:W}
        ${this._isWebview?this._renderWebview():this._detail?this._renderDetail():W}
      </ha-dialog>

      <mealie-shopping-list-dialog
        .hass=${this.hass}
        .recipe=${this._detail??this.recipe}
        .configEntryId=${this.configEntryId}
        .defaultShoppingListId=${this.defaultShoppingListId}
        ?open=${this._shoppingDialogOpen}
        @dialog-closed=${()=>{this._shoppingDialogOpen=!1}}
      ></mealie-shopping-list-dialog>
    `:W}};ba([ce({attribute:!1})],wa.prototype,"config",2),ba([ce({attribute:!1})],wa.prototype,"recipe",2),ba([ce({attribute:!1})],wa.prototype,"isFavorite",2),ba([ce()],wa.prototype,"defaultShoppingListId",2),ba([pe()],wa.prototype,"_detail",2),ba([pe()],wa.prototype,"_servings",2),ba([pe()],wa.prototype,"_shoppingDialogOpen",2),ba([pe()],wa.prototype,"_webviewCard",2),wa=ba([Bi("mealie-recipe-dialog")],wa);var $a=Object.defineProperty,za=Object.getOwnPropertyDescriptor,ka=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?za(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&$a(t,i,r),r};let xa=class extends _a{constructor(){super(...arguments),this.date=null,this._date="",this._entryType="dinner",this._title="",this._text="",this._handleAdd=()=>{this._date&&this._entryType&&this._title.trim()&&this.hass&&this.submit({run:()=>$i(this.hass,{date:this._date,entryType:this._entryType,noteTitle:this._title.trim(),noteText:this._text.trim()||void 0,configEntryId:this.configEntryId??void 0}),success:"dialog.note_added_success",errorKey:"error.error_adding_recipe",signal:Ii})}}onOpen(){this._date=this.date??xi(new Date),this._entryType="dinner",this._title="",this._text=""}render(){return this.open?V`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.add_note_to_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
          ${this.renderTextSelector(this._title,"dialog.note_title",e=>this._title=e)}
          ${this.renderTextSelector(this._text,"dialog.note_text",e=>this._text=e,!0)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._date||!this._entryType||!this._title.trim()||this._submitting)}
      </ha-dialog>
    `:W}};ka([ce()],xa.prototype,"date",2),ka([pe()],xa.prototype,"_date",2),ka([pe()],xa.prototype,"_entryType",2),ka([pe()],xa.prototype,"_title",2),ka([pe()],xa.prototype,"_text",2),xa=ka([Bi("mealie-mealplan-note-dialog")],xa);var Ea=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,Aa=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?Ia(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&Ea(t,i,r),r};let Ra=class extends _a{constructor(){super(...arguments),this.targetDate="",this._date="",this._entryType="dinner",this._handleAdd=()=>{this._date&&this._entryType&&this.hass&&this.submit({run:()=>{return e=this.hass,t={date:this._date,entryType:this._entryType,configEntryId:this.configEntryId??void 0},gi("error.error_adding_recipe",()=>mi(e,"set_random_mealplan",{date:t.date,entry_type:t.entryType},t.configEntryId));var e,t},success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:Ii})}}onOpen(){this._date=this.targetDate||xi(new Date),this._entryType="dinner"}render(){return this.open?V`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("cards.random_mealplan")}</span>

        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:W}};Aa([ce()],Ra.prototype,"targetDate",2),Aa([pe()],Ra.prototype,"_date",2),Aa([pe()],Ra.prototype,"_entryType",2),Ra=Aa([Bi("mealie-mealplan-random-dialog")],Ra);var Sa=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,Ta=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?Ma(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&Sa(t,i,r),r};let Da=class extends _a{constructor(){super(...arguments),this.planRecipe=null,this._date="",this._entryType="dinner",this._title="",this._text="",this._handleSave=()=>{if(!(this.planRecipe&&this._date&&this._entryType&&this.hass))return;const e={configEntryId:this.configEntryId??void 0,mealplanId:this.planRecipe.mealplan_id,date:this._date,entryType:this._entryType};if(this._isNote){const t=this._title.trim();if(!t)return;return void this._save({...e,noteTitle:t,noteText:this._text.trim()||void 0})}const t=this.planRecipe.recipe?.recipe_id;t&&this._save({...e,recipeId:t})}}get _isNote(){return!this.planRecipe?.recipe}onOpen(){this.planRecipe&&(this._date=this.planRecipe.mealplan_date,this._entryType=this.planRecipe.entry_type,this._title=this.planRecipe.title??"",this._text=this.planRecipe.description??"")}_save(e){this.submit({run:()=>function(e,t){return gi("error.error_updating_mealplan",()=>mi(e,"update_mealplan",{mealplan_id:t.mealplanId,...vi(t)},t.configEntryId))}(this.hass,e),success:"dialog.mealplan_updated_success",errorKey:"error.error_updating_mealplan",signal:Ii})}render(){if(!this.open||!this.planRecipe)return W;const e=this._isNote?"":V`<span slot="headerTitle">${this.planRecipe.recipe?.name??""}</span>`;return V`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        ${e}
        <span slot="headerSubtitle">${this.localize("dialog.edit_mealplan")}</span>
        
        <div class="dialog-body">
          ${this.renderDateSelector(this._date,e=>this._date=e)} ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
          ${this._isNote?V`
                ${this.renderTextSelector(this._title,"dialog.note_title",e=>this._title=e)}
                ${this.renderTextSelector(this._text,"dialog.note_text",e=>this._text=e,!0)}
              `:""}
        </div>

        ${this.renderPrimaryFooter("dialog.save",this._handleSave,!this._date||!this._entryType||(this._isNote?!this._title.trim():!this.planRecipe.recipe?.recipe_id)||this._submitting)}
      </ha-dialog>
    `}};Ta([ce({attribute:!1})],Da.prototype,"planRecipe",2),Ta([pe()],Da.prototype,"_date",2),Ta([pe()],Da.prototype,"_entryType",2),Ta([pe()],Da.prototype,"_title",2),Ta([pe()],Da.prototype,"_text",2),Da=Ta([Bi("mealie-mealplan-edit-dialog")],Da);var Ca=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Pa=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?ja(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&Ca(t,i,r),r};let Oa=class extends _a{constructor(){super(...arguments),this.entry=null,this._handleDelete=()=>{this.entry&&this.hass&&this.submit({run:()=>{return e=this.hass,t=this.entry.id,i=this.configEntryId??void 0,gi("error.error_deleting_mealplan",()=>mi(e,"delete_mealplan",{mealplan_id:t},i));var e,t,i},success:"dialog.mealplan_deleted_success",errorKey:"error.error_deleting_mealplan",signal:Ii})}}render(){return this.open&&this.entry?V`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.entry.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.confirm_delete_title")}</span>

        <div class="dialog-body-recipe">
          <span class="dialog-type">${di(this.entry.entryType,this.hass?.locale?.language)}</span>
          <span class="dialog-label">${Ei(this.entry.date,this.hass)}</span>
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
    `:W}};Pa([ce({attribute:!1})],Oa.prototype,"entry",2),Oa=Pa([Bi("mealie-mealplan-delete-dialog")],Oa);var Na=Object.defineProperty,La=(e,t,i,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&Na(t,i,r),r};class Ua extends ta{constructor(){super(...arguments),this.recipes=[],this._dialogRecipe=null,this._confirmDeleteEntry=null,this._noteDialogDate=null,this._randomDialogDate=null,this._editDialogEntry=null,this._shoppingRecipe=null,this._unsubscribers=[]}get _showRandomButton(){return this.supports("random_mealplan")&&(this.config.show_random_button??!0)}get _showNoteButton(){return this.config.show_note_button??!0}get _dateRange(){return function(e,t=0){const i=Math.max(1,Math.floor(e)),a=Math.floor(t),s=new Date;return Array.from({length:i},(e,t)=>xi(new Date(s.getFullYear(),s.getMonth(),s.getDate()+a+t)))}(this.config.days_to_show??1,this.config.day_offset??0)}_groupByDate(){const e=new Map;for(const t of this.recipes){const i=e.get(t.mealplan_date);i?i.push(t):e.set(t.mealplan_date,[t])}return e}_scheduleMidnightRefresh(){this._clearMidnightTimer();const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,5,0);this._midnightTimer=setTimeout(()=>{this._reload(),this._scheduleMidnightRefresh()},t.getTime()-e.getTime())}_clearMidnightTimer(){this._midnightTimer&&(clearTimeout(this._midnightTimer),this._midnightTimer=void 0)}watchedEntityIds(){return this.findMealieEntities("calendar")}itemCount(){return this.recipes?.length??0}hasOpenDialog(){return!!(this._dialogRecipe||this._shoppingRecipe||this._editDialogEntry||this._confirmDeleteEntry||this._noteDialogDate||this._randomDialogDate)}connectedCallback(){super.connectedCallback(),this._unsubscribers=[Ti(Ii,()=>this._reload()),Di(Ri,({slug:e,rating:t})=>{this.recipes=this.recipes.map(i=>i.recipe?.slug===e?{...i,recipe:{...i.recipe,rating:t}}:i)})],this._scheduleMidnightRefresh()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[],this._clearMidnightTimer()}setConfig(e){this.config=function(e){return ye(e,me)}(e),this._initialized=!1,this.error=null,this.hass&&this.loadData()}static getConfigElement(){return document.createElement("mealie-card-editor")}static getStubConfig(){return me}async loadData(){if(this.hass&&this.config&&!this._loading&&!this._initialized&&this.config.config_entry_id){this._loading=!0,this.error=null;try{const i=this._dateRange,a=await(e=this.hass,t={configEntryId:this.config.config_entry_id,startDate:i[0],endDate:i[i.length-1]},gi("error.error_loading",async()=>{const i=await fi(e,"get_mealplan",{start_date:t.startDate,end_date:t.endDate},t.configEntryId);return(i?.mealplan??[]).sort((e,t)=>(_i[e.entry_type]||999)-(_i[t.entry_type]||999))})),s=this.config.entry_types;this.recipes=s?.length?a.filter(e=>s.includes(e.entry_type)):a,this._initialized=!0}catch(e){this.handleError(e)}finally{this._loading=!1}var e,t}}render(){if(!this.hass||!this.config)return this.renderLoading();if(!this.config.config_entry_id)return this.renderEmptyState(this.localize("error.no_integration"));if(this._loading)return this.renderLoading();if(this.error)return this.renderError();const e=this._groupByDate();return V`
      <ha-card>
        <div class="${"horizontal"===this.config.days_layout?"days-horizontal":"days-vertical"}">
          ${this._dateRange.map(t=>this._renderDaySection(t,e.get(t)??[]))}
        </div>
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
      </ha-card>
    `}_renderDaySection(e,t){return V`
      <div class="day-section">
        ${this._renderDayHeader(e)}
        <div class="card-content">
          ${t.length?V`<div class="${"horizontal"===this.config.recipes_layout?"recipes-horizontal":"recipes-vertical"}">
                ${t.map(e=>this._renderRecipeCard(e))}
              </div>`:V`<ha-alert alert-type="info">${this.localize("common.no_mealplan")}</ha-alert>`}
        </div>
      </div>
    `}_renderDayHeader(e){return V`
      <div class="card-header-row">
        <div class="date-label">${Ei(e,this.hass)}</div>
        <div class="header-actions">
          ${this._showRandomButton?this.renderIconButton({className:"add-note-icon-button",labelKey:"cards.random_mealplan",icon:"mdi:dice-6",onClick:()=>{this._randomDialogDate=e}}):W}
          ${this._showNoteButton?this.renderIconButton({className:"add-note-icon-button",labelKey:"dialog.add_note_to_mealplan",icon:"mdi:note-plus-outline",onClick:()=>{this._noteDialogDate=e}}):W}
        </div>
      </div>
    `}_renderRecipeCard(e){return V`
      <div class="recipe-card">
        <div class="recipe-card-body">
          <div class="recipe-type">${di(e.entry_type,this.hass?.locale?.language)}</div>
          ${e.recipe?this._renderRecipeWithData(e.recipe,e):this._renderRecipeWithoutData(e)}
        </div>
      </div>
    `}_mealplanActions(e,t){const i=[];return this.supports("edit_mealplan")&&i.push({className:"edit-mealplan-button",labelKey:"cards.edit_mealplan",icon:"mdi:pencil",onClick:()=>{this._editDialogEntry=e}}),this.supports("delete_mealplan")&&i.push({className:"delete-mealplan-button",labelKey:"cards.delete_mealplan",icon:"mdi:trash-can-outline",onClick:()=>{this._confirmDeleteEntry={id:e.mealplan_id,name:t,entryType:e.entry_type,date:e.mealplan_date}}}),i}_renderRecipeWithData(e,t){const i=[{className:"view-recipe-button",labelKey:"cards.view_recipe",icon:"mdi:book-open-variant",onClick:()=>{this.openRecipe(e)&&(this._dialogRecipe=e)}}];return this.supports("shopping_list")&&i.push({className:"shopping-list-button",labelKey:"dialog.add_to_shopping_list",icon:"mdi:cart-plus",onClick:()=>{this._shoppingRecipe=e}}),i.push(...this._mealplanActions(t,e.name)),V`
      ${this.renderRecipeMedia(e,this.config.show_image,i)}
      <div class="recipe-title">
        ${this.renderRecipeName(e)}
        <div class="recipe-meta">
          ${this._renderInteractiveRating(e,this.config.show_rating,this.config.config_entry_id)}
          ${this.renderServings(e.recipe_servings,this.config.show_servings)}
        </div>
        ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
      </div>
      ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
    `}_renderRecipeWithoutData(e){return V`
      ${this.renderRecipeMedia(e,!1,this._mealplanActions(e,e.title??""))}
      <div class="recipe-title">${this.renderRecipeName(e)} </div> <div class="recipe-meta"> ${this.renderRecipeDescription(e.description??"",!0)}</div>
    `}}La([pe()],Ua.prototype,"config"),La([pe()],Ua.prototype,"recipes"),La([pe()],Ua.prototype,"_dialogRecipe"),La([pe()],Ua.prototype,"_confirmDeleteEntry"),La([pe()],Ua.prototype,"_noteDialogDate"),La([pe()],Ua.prototype,"_randomDialogDate"),La([pe()],Ua.prototype,"_editDialogEntry"),La([pe()],Ua.prototype,"_shoppingRecipe");var Fa=Object.getOwnPropertyDescriptor;let Va=class extends la{get _favoritesSupported(){return Oi(this.hass,"favorites")}renderInfosDisplayFields(){return V`
      ${super.renderInfosDisplayFields()}
      ${this._favoritesSupported?ia(!!this.config.show_favorite,this.localize("editor.show_favorite"),e=>this._setValue("show_favorite",e)):W}
    `}render(){return this.hass&&this.config?V`
      ${this.renderTopForm()} ${this.renderImageDisplayOptions()} ${this.renderInfosDisplayOptions()} ${this.renderTimesDisplayOptions()}
      ${this.renderRecipeViewOptions()}

      <ha-expansion-panel outlined .header=${this.localize("editor.settings_recipes_card")}>
        <ha-icon slot="leading-icon" icon="mdi:tune"></ha-icon>
        <div class="settings-fields">
          ${e=this.hass,t=this.config.result_limit,i=this.localize("editor.number_of_recipes"),a=1,s=100,r=e=>this._setValue("result_limit",e),V`
    <ha-selector
      .hass=${e}
      .selector=${{number:{min:a,max:s,mode:"box",step:1}}}
      .value=${t??a}
      .label=${i}
      @value-changed=${e=>r(e.detail.value)}
    ></ha-selector>
  `}
          ${ia(!!this.config.show_search,this.localize("editor.show_search"),e=>this._setValue("show_search",e))}
          ${this._favoritesSupported?ia(!!this.config.show_favorites_only,this.localize("editor.show_favorites_only"),e=>this._setValue("show_favorites_only",e)):W}
          ${ia(!!this.config.show_import_button,this.localize("editor.show_import_button"),e=>this._setValue("show_import_button",e))}
        </div>
      </ha-expansion-panel>
    `:this.renderEditorLoading();var e,t,i,a,s,r}};Va=((e,t,i,a)=>{for(var s,r=a>1?void 0:a?Fa(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(r)||r);return r})([Bi("mealie-recipe-card-editor")],Va);var Ba=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,Ha=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?Wa(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&Ba(t,i,r),r};let qa=class extends _a{constructor(){super(...arguments),this.recipe=null,this._date="",this._entryType="dinner",this._imageMissing=!1,this._handleAdd=()=>{const e=this.recipe?.recipe_id;e&&this._date&&this._entryType&&this.hass&&this.submit({run:()=>$i(this.hass,{date:this._date,entryType:this._entryType,recipeId:e,configEntryId:this.configEntryId??void 0}),success:"dialog.recipe_added_success",errorKey:"error.error_adding_recipe",signal:Ii})}}onOpen(){this._date=xi(new Date),this._entryType="dinner",this._imageMissing=!1}_renderImage(){return!this.recipe||this._imageMissing?W:Yi(this.hass,this.recipe,{url:this.effectiveUrl,variant:"original",containerClass:"detail-image",imgClass:"detail-image-img",onImageMissing:()=>{this._imageMissing=!0}})}render(){return this.recipe?V`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.recipe.name}</span>
        <span slot="headerSubtitle">${this.localize("dialog.add_recipe_to_mealplan")}</span>

        <div class="dialog-body">
          ${this._renderImage()} ${this.renderDateSelector(this._date,e=>this._date=e)}
          ${this.renderEntryTypeSelector(this._entryType,e=>this._entryType=e)}
        </div>

        ${this.renderPrimaryFooter("dialog.add",this._handleAdd,!this.recipe.recipe_id||!this._date||!this._entryType||this._submitting)}
      </ha-dialog>
    `:W}};Ha([ce({attribute:!1})],qa.prototype,"recipe",2),Ha([ce()],qa.prototype,"effectiveUrl",2),Ha([pe()],qa.prototype,"_date",2),Ha([pe()],qa.prototype,"_entryType",2),Ha([pe()],qa.prototype,"_imageMissing",2),qa=Ha([Bi("mealie-mealplan-dialog")],qa);var Ka=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,Za=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?Ga(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&Ka(t,i,r),r};let Qa=class extends ne{constructor(){super(...arguments),this.value="",this.placeholder=""}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent("search-changed",{detail:{value:e},bubbles:!1,composed:!1}))}_onInput(e){this._emit(e.target.value)}_clear(){this._emit("")}render(){return customElements.get("ha-input-search")?this._renderInputSearch():this._renderTextfield()}_renderInputSearch(){return V`
      <ha-input-search appearance="outlined" .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}></ha-input-search>
    `}_renderTextfield(){return V`
      <ha-textfield icon .iconTrailing=${!!this.value} .value=${this.value} .placeholder=${this.placeholder} @input=${this._onInput}>
        <ha-icon slot="leadingIcon" icon="mdi:magnify"></ha-icon>
        ${this.value?V`
              <ha-icon-button slot="trailingIcon" .label=${this.placeholder} @click=${this._clear}>
                <ha-icon icon="mdi:close"></ha-icon>
              </ha-icon-button>
            `:W}
      </ha-textfield>
    `}};Qa.styles=r`
    ha-input-search {
      display: block;
      width: 100%;
      --ha-input-search-height: 40px;
    }

    ha-textfield {
      width: 100%;
    }
  `,Za([ce()],Qa.prototype,"value",2),Za([ce()],Qa.prototype,"placeholder",2),Qa=Za([Bi("mealie-recipe-search")],Qa);var Ja=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,Xa=(e,t,i,a)=>{for(var s,r=a>1?void 0:a?Ya(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(a?s(t,i,r):s(r))||r);return a&&r&&Ja(t,i,r),r};let es=class extends _a{constructor(){super(...arguments),this._url="",this._includeTags=!1,this._importedName=null,this._handleImport=()=>{this._url.trim()&&this.hass&&(this._importedName=null,this.submit({run:async()=>{const e=await(t=this.hass,i={url:this._url.trim(),includeTags:this._includeTags,configEntryId:this.configEntryId??void 0},gi("error.error_loading",async()=>yi(await fi(t,"import_recipe",{url:i.url,...i.includeTags&&{include_tags:!0}},i.configEntryId))));var t,i;this._importedName=e?.name??e?.slug??""},success:()=>`${this.localize("dialog.recipe_imported_success")}${this._importedName?`: ${this._importedName}`:""}`,errorKey:"error.error_loading",signal:Ai,closeOnSuccess:!1}))}}onOpen(){this._url="",this._includeTags=!1,this._importedName=null}render(){return this.open?V`
      <ha-dialog .open=${this.open} width="small" .hass=${this.hass} @closed=${this._close}>
        <span slot="headerTitle">${this.localize("dialog.import_recipe")}</span>

        <div class="dialog-body">
          <ha-selector
            .hass=${this.hass}
            .selector=${{text:{type:"url"}}}
            .value=${this._url}
            .label=${this.localize("dialog.import_url")}
            @value-changed=${e=>{this._url=e.detail.value}}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${{boolean:{}}}
            .value=${this._includeTags}
            .label=${this.localize("dialog.import_include_tags")}
            @value-changed=${e=>{this._includeTags=e.detail.value}}
          ></ha-selector>

          ${this._importedName?V`<ha-alert alert-type="success">${this.localize("dialog.recipe_imported_success")}: <strong>${this._importedName}</strong></ha-alert>`:W}
        </div>

        ${this.renderPrimaryFooter("dialog.import",this._handleImport,!this._url.trim()||this._submitting)}
      </ha-dialog>
    `:W}};Xa([pe()],es.prototype,"_url",2),Xa([pe()],es.prototype,"_includeTags",2),Xa([pe()],es.prototype,"_importedName",2),es=Xa([Bi("mealie-recipe-import-dialog")],es);var ts=Object.defineProperty,is=(e,t,i,a)=>{for(var s,r=void 0,n=e.length-1;n>=0;n--)(s=e[n])&&(r=s(t,i,r)||r);return r&&ts(t,i,r),r};class as extends ta{constructor(){super(...arguments),this.recipes=[],this._mealplanRecipe=null,this._dialogRecipe=null,this._searchQuery="",this._importDialogOpen=!1,this._shoppingRecipe=null,this._searchDebounce=null,this._favoriteRecipesCache=null,this._favoriteIdsCache=null,this._unsubscribers=[]}connectedCallback(){super.connectedCallback(),this._unsubscribers=[Ti(Ai,()=>this._reload()),Di(Ri,({slug:e,rating:t})=>{this.recipes=this.recipes.map(i=>i.slug===e?{...i,rating:t}:i)}),Di(Si,({slug:e,favorite:t})=>{this._favoriteIdsCache=null,this._favorites.get(e)!==t&&(this._favorites=new Map(this._favorites).set(e,t)),this.config?.show_favorites_only&&this._favoriteRecipesCache&&(this.recipes=this._visibleFavoriteRecipes())})]}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribers.forEach(e=>e()),this._unsubscribers=[],this._searchDebounce&&(clearTimeout(this._searchDebounce),this._searchDebounce=null)}setConfig(e){this.config=function(e){return ye(e,fe)}(e),this._invalidateFavoriteCaches(),this._initialized=!1,this.hass&&this.loadData()}watchedEntityIds(){return this.findMealieEntities("sensor").filter(e=>e.endsWith("_recipes"))}itemCount(){return this.recipes?.length??0}hasOpenDialog(){return!!this._dialogRecipe||!!this._mealplanRecipe||!!this._shoppingRecipe||this._importDialogOpen}_invalidateFavoriteCaches(){this._favoriteRecipesCache=null,this._favoriteIdsCache=null}_reload(){this._invalidateFavoriteCaches(),super._reload()}async loadData(){if(this.hass&&!this._loading&&!this._initialized&&this.config?.config_entry_id){this._loading=!0,this.error=null;try{this.recipes=this.config.show_favorites_only&&this.supports("favorites")?await this._loadFavoriteRecipes():await this._loadAllRecipes(),this._initialized=!0}catch(e){this.handleError(e)}finally{this._loading=!1}}}async _favoriteIds(){if(!this.supports("favorites"))return new Set;if(!this._favoriteIdsCache){const i=await(e=this.hass,t=this.config.config_entry_id??void 0,gi("error.error_loading",async()=>{const i=await fi(e,"get_recipe_favorites",{},t);return i?.favorites??[]}));this._favoriteIdsCache=new Set(i.map(e=>e.recipe_id))}var e,t;return this._favoriteIdsCache}async _loadFavoriteRecipes(){if(!this._favoriteRecipesCache){const e=await this._favoriteIds(),t=await bi(this.hass,{configEntryId:this.config.config_entry_id??void 0,resultLimit:9999});this._favoriteRecipesCache=t.filter(t=>e.has(t.recipe_id??"")),this.config.show_favorite&&(this._favorites=new Map(this._favoriteRecipesCache.map(e=>[e.slug,!0])))}return this._visibleFavoriteRecipes()}_visibleFavoriteRecipes(){const e=this._favoriteRecipesCache??[];return this._applyFavoriteSearch(e.filter(e=>!1!==this._favorites.get(e.slug)))}async _loadAllRecipes(){const e=await bi(this.hass,{configEntryId:this.config.config_entry_id??void 0,resultLimit:this.config.result_limit??10,search:this._searchQuery||void 0});if(this.config.show_favorite&&this.supports("favorites")){const t=await this._favoriteIds();this._favorites=new Map(e.map(e=>[e.slug,t.has(e.recipe_id??"")]))}return e}_applyFavoriteSearch(e){const t=this._searchQuery.toLowerCase();return t?e.filter(e=>e.name?.toLowerCase().includes(t)):e}_onSearch(e){this._searchQuery=e,this.config.show_favorites_only&&this._favoriteRecipesCache?this.recipes=this._visibleFavoriteRecipes():(this._searchDebounce&&clearTimeout(this._searchDebounce),this._searchDebounce=setTimeout(()=>{this._initialized=!1,this.loadData()},300))}static getConfigElement(){return document.createElement("mealie-recipe-card-editor")}static getStubConfig(){return{...fe}}render(){if(!this.config)return this.renderLoading();if(!this.config.config_entry_id)return this.renderEmptyState(this.localize("error.no_integration"));if(this._loading)return this.renderLoading();if(this.error)return this.renderError();const e=this.recipes?.length?V`<div class="recipes-container">${this.recipes.map(e=>this._renderRecipe(e))}</div>`:V`<ha-alert alert-type="info">${this.localize("common.no_recipe")}</ha-alert>`;return V`${this._renderCardShell(e)} ${this._renderDialogs()}`}_renderDialogs(){return V`
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
    `}_renderCardShell(e){return V`
      <ha-card>
        <div class="card-content">${this._renderToolbar()} ${e}</div>
      </ha-card>
    `}_renderToolbar(){const e=this.config.show_search??!1,t=this.config.show_import_button&&this.supports("import_recipe");return e||t?V`
      <div class="card-toolbar">
        ${e?V`<mealie-recipe-search
              .value=${this._searchQuery}
              .placeholder=${this.localize("common.search_placeholder")}
              @search-changed=${e=>this._onSearch(e.detail.value)}
            ></mealie-recipe-search>`:W}
        ${t?V`<ha-icon-button
                    .label=${this.localize("dialog.import_recipe")}
                    @click=${()=>{this._importDialogOpen=!0}}
                  >
                    <ha-icon icon="mdi:cloud-download"></ha-icon>
                  </ha-icon-button>`:W}
      </div>
    `:W}_recipeActions(e){const t=[{className:"add-to-mealplan-button",labelKey:"dialog.add_to_mealplan",icon:"mdi:calendar-plus",onClick:()=>{this._mealplanRecipe=e}}];return this.supports("shopping_list")&&t.push({className:"shopping-list-button",labelKey:"dialog.add_to_shopping_list",icon:"mdi:cart-plus",onClick:()=>{this._shoppingRecipe=e}}),t.push({className:"view-recipe-button",labelKey:"cards.view_recipe",icon:"mdi:book-open-variant",onClick:()=>{this.openRecipe(e)&&(this._dialogRecipe=e)}}),t}_renderRecipeInfo(e){return V`
      <div class="recipe-title">
        ${this.renderRecipeName(e)}
        <div class="recipe-meta">
          ${this.renderFavoriteButton(e,this.config.show_favorite??!1,this.config.config_entry_id)}
          ${this._renderInteractiveRating(e,this.config.show_rating,this.config.config_entry_id)}
          ${this.renderServings(e.recipe_servings,this.config.show_servings)}
        </div>
        ${this.renderRecipeDescription(e.description??"",this.config.show_description)}
      </div>
    `}_renderRecipe(e){return V`
      <div class="recipe-card">
        ${this.renderRecipeMedia(e,this.config.show_image,this._recipeActions(e))} ${this._renderRecipeInfo(e)}
        ${this.renderRecipeTimes(e,this.config.show_prep_time,this.config.show_perform_time,this.config.show_total_time)}
      </div>
    `}}is([pe()],as.prototype,"config"),is([pe()],as.prototype,"recipes"),is([pe()],as.prototype,"_mealplanRecipe"),is([pe()],as.prototype,"_dialogRecipe"),is([pe()],as.prototype,"_searchQuery"),is([pe()],as.prototype,"_importDialogOpen"),is([pe()],as.prototype,"_shoppingRecipe");customElements.get("mealie-mealplan-card")||customElements.define("mealie-mealplan-card",Ua),customElements.get("mealie-recipe-card")||customElements.define("mealie-recipe-card",as),window.customCards=window.customCards||[];[{type:"mealie-mealplan-card",name:`${ii("en","cards.name_mealplan")}`,description:`${ii("en","cards.description_mealplan")}`,configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"},{type:"mealie-recipe-card",name:`${ii("en","cards.name_recipes")}`,description:`${ii("en","cards.description_recipes")}`,configurable:!0,preview:!0,documentationURL:"https://github.com/domodom30/mealie-card"}].forEach(e=>{window.customCards?.some(t=>t.type===e.type)||window.customCards?.push(e)}),console.info("%c MEALIE-CARD %c 3.0.5","color: white; background: orange; font-weight: 700;","color: orange; background: white; font-weight: 700;");export{Ua as MealieMealplanCard,as as MealieRecipeCard};
