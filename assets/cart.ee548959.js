import{r as u,a as p,j as d,F as D,N as L,L as S,c as te,b as ne}from"./index.d6dfecee.js";import{n as j,i as re,a as ae,b as oe,c as ie,d as de,e as le,f as se,g as ce,h as ue,j as pe,k as me,l as fe,m as ge,o as he,p as xe,q as be,r as ve,s as Ee,t as ye,u as Ae,v as we,w as Ie,x as Ne,y as Pe,z as Oe,A as Ce,B as _e,C as De,D as Se,E as je,F as Te,G as Be}from"./img32.91efd692.js";import{G as Re,A as Me}from"./index.esm.fd6bcc5f.js";function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k(Object(t),!0).forEach(function(r){f(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function w(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Z(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,n,t){return n&&Z(e.prototype,n),t&&Z(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(){return b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b.apply(this,arguments)}function H(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&B(e,n)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},A(e)}function B(e,n){return B=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},B(e,n)}function He(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $e(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function N(e,n){if(e==null)return{};var t=$e(e,n),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(t[r]=e[r]))}return t}function x(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(e,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function $(e){var n=He();return function(){var r=A(e),o;if(n){var i=A(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ke(this,o)}}function Ze(e,n){return We(e)||Ue(e,n)||W(e,n)||Ve()}function Fe(e){return Le(e)||Ge(e)||W(e)||qe()}function Le(e){if(Array.isArray(e))return R(e)}function We(e){if(Array.isArray(e))return e}function Ge(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ue(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],o=!0,i=!1,l,s;try{for(t=t.call(e);!(o=(l=t.next()).done)&&(r.push(l.value),!(n&&r.length===n));o=!0);}catch(c){i=!0,s=c}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw s}}return r}}function W(e,n){if(!!e){if(typeof e=="string")return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(e,n)}}function R(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function qe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ke=I(function e(n){var t=this,r=n.expanded,o=r===void 0?[]:r,i=n.allowMultipleExpanded,l=i===void 0?!1:i,s=n.allowZeroExpanded,c=s===void 0?!1:s;w(this,e),f(this,"expanded",void 0),f(this,"allowMultipleExpanded",void 0),f(this,"allowZeroExpanded",void 0),f(this,"toggleExpanded",function(a){if(t.isItemDisabled(a))return t;var m=t.isItemExpanded(a);return m?t.augment({expanded:t.expanded.filter(function(h){return h!==a})}):t.augment({expanded:t.allowMultipleExpanded?[].concat(Fe(t.expanded),[a]):[a]})}),f(this,"isItemDisabled",function(a){var m=t.isItemExpanded(a),h=t.expanded.length===1;return Boolean(m&&!t.allowZeroExpanded&&h)}),f(this,"isItemExpanded",function(a){return t.expanded.indexOf(a)!==-1}),f(this,"getPanelAttributes",function(a,m){var h=m!=null?m:t.isItemExpanded(a);return{role:t.allowMultipleExpanded?void 0:"region","aria-hidden":t.allowMultipleExpanded?!h:void 0,"aria-labelledby":t.getButtonId(a),id:t.getPanelId(a),hidden:h?void 0:!0}}),f(this,"getHeadingAttributes",function(){return{role:"heading"}}),f(this,"getButtonAttributes",function(a,m){var h=m!=null?m:t.isItemExpanded(a),g=t.isItemDisabled(a);return{id:t.getButtonId(a),"aria-disabled":g,"aria-expanded":h,"aria-controls":t.getPanelId(a),role:"button",tabIndex:0}}),f(this,"getPanelId",function(a){return"accordion__panel-".concat(a)}),f(this,"getButtonId",function(a){return"accordion__heading-".concat(a)}),f(this,"augment",function(a){return new e(T({expanded:t.expanded,allowMultipleExpanded:t.allowMultipleExpanded,allowZeroExpanded:t.allowZeroExpanded},a))}),this.expanded=o,this.allowMultipleExpanded=l,this.allowZeroExpanded=c}),G=u.exports.createContext(null),U=function(e){H(t,e);var n=$(t);function t(){var r;w(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=n.call.apply(n,[this].concat(i)),f(x(r),"state",new Ke({expanded:r.props.preExpanded,allowMultipleExpanded:r.props.allowMultipleExpanded,allowZeroExpanded:r.props.allowZeroExpanded})),f(x(r),"toggleExpanded",function(s){r.setState(function(c){return c.toggleExpanded(s)},function(){r.props.onChange&&r.props.onChange(r.state.expanded)})}),f(x(r),"isItemDisabled",function(s){return r.state.isItemDisabled(s)}),f(x(r),"isItemExpanded",function(s){return r.state.isItemExpanded(s)}),f(x(r),"getPanelAttributes",function(s,c){return r.state.getPanelAttributes(s,c)}),f(x(r),"getHeadingAttributes",function(){return r.state.getHeadingAttributes()}),f(x(r),"getButtonAttributes",function(s,c){return r.state.getButtonAttributes(s,c)}),r}return I(t,[{key:"render",value:function(){var o=this.state,i=o.allowZeroExpanded,l=o.allowMultipleExpanded;return u.exports.createElement(G.Provider,{value:{allowMultipleExpanded:l,allowZeroExpanded:i,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(u.exports.PureComponent);f(U,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var q=function(e){H(t,e);var n=$(t);function t(){var r;w(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=n.call.apply(n,[this].concat(i)),f(x(r),"renderChildren",function(s){return s?r.props.children(s):null}),r}return I(t,[{key:"render",value:function(){return u.exports.createElement(G.Consumer,null,this.renderChildren)}}]),t}(u.exports.PureComponent),ze=["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"],Je=function(n){var t=n.className,r=t===void 0?"accordion":t,o=n.allowMultipleExpanded,i=n.allowZeroExpanded,l=n.onChange,s=n.preExpanded,c=N(n,ze);return u.exports.createElement(U,{preExpanded:s,allowMultipleExpanded:o,allowZeroExpanded:i,onChange:l},u.exports.createElement("div",b({"data-accordion-component":"Accordion",className:r},c)))},M;(function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"})(M||(M={}));var V=M,_=0;function Qe(){var e=_;return _=_+1,"raa-".concat(e)}var Xe=u.exports.useId||Qe,Ye=/[\u0009\u000a\u000c\u000d\u0020]/g;function E(e){return e===""||Ye.test(e)?(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1):!0}var K=u.exports.createContext(null),et=function(n){var t=n.children,r=n.uuid,o=n.accordionContext,i=n.dangerouslySetExpanded,l=function(){o.toggleExpanded(r)},s=function(a){var m=i!=null?i:a.isItemExpanded(r),h=a.isItemDisabled(r),g=a.getPanelAttributes(r,i),y=a.getHeadingAttributes(r),C=a.getButtonAttributes(r,i);return u.exports.createElement(K.Provider,{value:{uuid:r,expanded:m,disabled:h,toggleExpanded:l,panelAttributes:g,headingAttributes:y,buttonAttributes:C}},t)};return u.exports.createElement(q,null,s)},tt=function(n){return u.exports.createElement(q,null,function(t){return u.exports.createElement(et,b({},n,{accordionContext:t}))})},P=function(n){var t=n.children,r=function(i){return i?t(i):null};return u.exports.createElement(K.Consumer,null,r)},nt=["uuid","dangerouslySetExpanded","className","activeClassName"],z=function(n){var t=n.uuid,r=n.dangerouslySetExpanded,o=n.className,i=o===void 0?"accordion__item":o,l=n.activeClassName,s=N(n,nt),c=u.exports.useState(Xe()),a=Ze(c,1),m=a[0],h=t!=null?t:m,g=function(C){var Y=C.expanded,ee=Y&&l?l:i;return u.exports.createElement("div",b({"data-accordion-component":"AccordionItem",className:ee},s))};return E(h.toString()),s.id&&E(s.id),u.exports.createElement(tt,{uuid:h,dangerouslySetExpanded:r},u.exports.createElement(P,null,g))};z.displayName=V.AccordionItem;function J(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:J(e.parentElement))}function O(e){var n=J(e);return n&&Array.from(n.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}function rt(e){var n=O(e)||[],t=n[0];t&&t.focus()}function at(e){var n=O(e)||[],t=n[n.length-1];t&&t.focus()}function ot(e){var n=O(e)||[],t=n.indexOf(e);if(t!==-1){var r=n[t+1];r&&r.focus()}}function it(e){var n=O(e)||[],t=n.indexOf(e);if(t!==-1){var r=n[t-1];r&&r.focus()}}var v={END:"End",ENTER:"Enter",HOME:"Home",SPACE:" ",SPACE_DEPRECATED:"Spacebar",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},dt=["toggleExpanded","className"],lt=function(n){var t=n.toggleExpanded,r=n.className,o=r===void 0?"accordion__button":r,i=N(n,dt),l=function(c){var a=c.key;if((a===v.ENTER||a===v.SPACE||a===v.SPACE_DEPRECATED)&&(c.preventDefault(),t()),c.target instanceof HTMLElement)switch(a){case v.HOME:{c.preventDefault(),rt(c.target);break}case v.END:{c.preventDefault(),at(c.target);break}case v.LEFT:case v.UP:{c.preventDefault(),it(c.target);break}case v.RIGHT:case v.DOWN:{c.preventDefault(),ot(c.target);break}}};return i.id&&E(i.id),u.exports.createElement("div",b({className:o},i,{role:"button",tabIndex:0,onClick:t,onKeyDown:l,"data-accordion-component":"AccordionItemButton"}))},st=function(n){return u.exports.createElement(P,null,function(t){var r=t.toggleExpanded,o=t.buttonAttributes;return u.exports.createElement(lt,b({toggleExpanded:r},n,o))})},ct={className:"accordion__heading","aria-level":3},ut=`AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

\u201CThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201D

`,Q=function(e){H(t,e);var n=$(t);function t(){var r;w(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=n.call.apply(n,[this].concat(i)),f(x(r),"ref",void 0),f(x(r),"setRef",function(s){r.ref=s}),r}return I(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return u.exports.createElement("div",b({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(o){if(o===void 0)throw new Error("ref is undefined");if(!(o.childElementCount===1&&o.firstElementChild&&o.firstElementChild.getAttribute("data-accordion-component")==="AccordionItemButton"))throw new Error(ut)}}]),t}(u.exports.PureComponent);f(Q,"defaultProps",ct);var X=function(n){return u.exports.createElement(P,null,function(t){var r=t.headingAttributes;return n.id&&E(n.id),u.exports.createElement(Q,b({},n,r))})};X.displayName=V.AccordionItemHeading;var pt=["className","region","id"],mt=function(n){var t=n.className,r=t===void 0?"accordion__panel":t,o=n.region,i=n.id,l=N(n,pt),s=function(a){var m=a.panelAttributes;i&&E(i);var h=T(T({},m),{},{"aria-labelledby":o?m["aria-labelledby"]:void 0});return u.exports.createElement("div",b({"data-accordion-component":"AccordionItemPanel",className:r},l,h,{role:o?"region":void 0}))};return u.exports.createElement(P,null,s)};const F=()=>p("div",{className:"md:max-w-xl mt-7 ",children:[d("h1",{className:"font-semibold text-2xl border-black border-b-2  p-3",children:"Informaci\xF3n de tu orden"}),d(Je,{allowMultipleExpanded:!1,children:[{heading:"Pol\xEDtica de Reembolso",content:"Los productos adquiridos por esta via tienen un tiempo m\xE1ximo de  3 meses para ser devueltos en caso de presentar un problema."},{heading:"Tiempo de entrega estimado",content:"Los tiempos de entrega suelen estar sujetos a un conjunto de factores, por lo que los tiempos de entrega pueden variar de una semana hasta 1 mes."},{heading:"Garant\xEDa",content:"Todos nuestros productos tiene una garant\xEDa de 3 meses, siempre y cuando el equipo presente problemas de fabrica, (no aceptamos equipos da\xF1ados, mojados etc)."}].map(n=>p(z,{className:"text-gray-400 m-4 border-b-2 text-lg border-gray-300 pb-2 ",children:[d(X,{children:d(st,{className:"text-base font-medium",children:n.heading})}),d(mt,{className:"text-gray-400 p-2",children:n.content})]},j()))})]}),ft=()=>p(D,{children:[d(L,{}),p("div",{className:"h-full flex justify-center gap-4 items-center flex-col ",children:[" ",d("strong",{className:"tex-5xl",children:"\u{1F62D}"}),d("h1",{className:"text-2xl  md:text-2xl text-center",children:"Necesitas iniciar sesi\xF3n para poder acceder al carrito"})," ",d(S,{className:"btnRed",to:"/login",children:"Iniciar Secci\xF3n"})," "]})]}),bt=()=>{const{carrito:e,setCarrito:n,setLogin:t,logInState:r}=u.exports.useContext(te);let o=0;e.map(a=>{o+=a.subtotal});const i=a=>{n(e.filter(m=>m.id!==a))},l=a=>{const m=Number(document.getElementById(`classID-${a}`).value)-1;console.log(m);const h=e.map(g=>g.id==a?{...g,cantidad:g.cantidad-1,subtotal:g.precio*m}:g);n(g=>g.every(y=>y.cantidad>=1)?h:g)},s=a=>{const m=Number(document.getElementById(`classID-${a}`).value)+1,h=e.map(g=>g.id==a?{...g,cantidad:g.cantidad+1,subtotal:g.precio*m}:g);n(h)},c=a=>{switch(a){case 1:return Be;case 2:return Te;case 3:return je;case 4:return Se;case 5:return De;case 6:return _e;case 7:return Ce;case 8:return Oe;case 9:return Pe;case 10:return Ne;case 11:return Ie;case 12:return we;case 13:return Ae;case 14:return ye;case 15:return Ee;case 16:return ve;case 17:return be;case 18:return xe;case 19:return he;case 20:return ge;case 21:return fe;case 22:return me;case 23:return pe;case 24:return ue;case 25:return ce;case 26:return se;case 27:return le;case 28:return de;case 29:return ie;case 30:return oe;case 31:return ae;case 32:return re}};return d(D,{children:r.logIn?p(D,{children:[d(L,{}),p("main",{className:" md:pt-20 md:paddings mb-4",children:[p("div",{className:"flex justify-around  flex-col md:flex-row bg",children:[p("section",{id:"cart",className:"  ",children:[d("h2",{className:"font-semibold text-4xl mt-4 mb-4",children:"Tu carrito"}),d(S,{to:"/tienda",className:"pt-2 pb-2 h-6",children:"\xBFA\xFAn no terminas de comprar? \xA1sigue comprando!"}),d("div",{className:"h-96 divCarrito",children:e.map(a=>p("div",{"data-testid":"imgsCarrito",className:"flex justify-between  min-w-[560px] max-w-[760px] m-4 md:m-0  border-b-2 border-gray-500 p-1",children:[d("div",{className:"w-40 h-40 aspect-video bg-white p-2",children:d("img",{src:c(a.id),alt:"",className:"w-full h-full "})}),p("div",{className:"h-full flex-1 flex flex-col  gap-2 p-2 md:p-4 text-black",children:[d("h4",{className:"font-bold text-2xl ",children:a.img}),p("strong",{className:"font-normal  ",children:["Capacidad: ",d("strong",{children:a.capacidad})," "]}),p("strong",{className:"flex gap-2  font-normal",children:["Cantidad:"," ",p("div",{className:"flex pl-1 pr-1  items-center  border border-seconday",children:[" ",d("span",{onClick:()=>l(a.id),children:d(Re,{})})," ",d("input",{id:`classID-${a.id}`,readOnly:!0,className:"bg-[#2D3033]  w-10 text-center flex-1 focus:outline-none  ",value:a.cantidad})," ",p("span",{onClick:()=>s(a.id),children:[" ",d(Me,{})," "]})," "]})," "]}),p("strong",{className:"block ",children:["$",a.precio]})]}),d("div",{className:"flex items-end",children:d("button",{onClick:()=>i(a.id),className:"underline font-medium text-black",children:"Eliminar"})})]},j()))}),d("div",{className:"hidden md:block",children:d(F,{})})]}),p("section",{className:"md:w-[40%] p-4  ",children:[d("h1",{className:"text-2xl font-semibold mt-6 mb-6 ",children:"Resumen de tu carrito"}),d("input",{type:"text",className:"md:w-3/5 w-full  h-10 bg-[#2D3033] border border-seconday focus:outline-none indent-1 ",placeholder:"Ingresa tu c\xF3digo de descuento"}),p("div",{className:"",children:[e.map(a=>p("div",{className:"flex justify-between md:w-3/5 mt-6 mb-6 ",children:[p("strong",{className:"font-normal",children:[a.img,":"]}),p("strong",{children:["$",a.subtotal]})]},j())),p("div",{className:"flex justify-between md:w-3/5 mt-6 mb-6 ",children:[d("strong",{children:"Subtotal:"}),p("strong",{children:["$",o]})]}),p("div",{className:"flex justify-between md:w-3/5 border-b-2 mt-6 mb-6  border-black pb-2",children:[d("strong",{children:"Envio:"}),d("strong",{children:"$20"})]}),p("div",{className:"flex justify-between md:w-3/5 mt-6 mb-6  ",children:[d("strong",{children:"Total:"}),p("strong",{children:["$",o+20]})]})]}),d(S,{to:"/gracias",className:"btnRed font-medium bg-seconday  w-full md:w-3/5",children:"Efectuar Compra"})]})]}),p("div",{className:"md:hidden ml-2 mr-2",children:[" ",d(F,{})," "]})]}),d(ne,{})]}):d(ft,{})})};export{bt as default};
