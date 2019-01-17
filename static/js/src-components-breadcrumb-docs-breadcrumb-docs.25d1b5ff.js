(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/__docs__/components/index.ts":function(e,t,n){"use strict";var r=n("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),o=n("./node_modules/react/index.js"),a=n.n(o),c=n("./src/elements/index.ts"),i=n("./node_modules/docz/dist/index.m.js"),l=Object.assign(function(e){var t=e.primaryName,n=e.primaryColor,r=e.secondaryName,o=e.secondaryColor,l=e.url,u=void 0===l?{}:/^\/[a-z]/.test(l)?{as:i.c,to:l}:{as:"a",href:l,target:"_blank"};return a.a.createElement(c.g,null,a.a.createElement(c.s.Group,Object.assign({gapless:!0},u),a.a.createElement(c.s,{color:n},t),a.a.createElement(c.s,{color:o},r)))},{Group:function(e){var t=e.children;return a.a.createElement(c.i,{kind:"group",children:t})}}),u=function(e){var t=e.asType;return a.a.createElement(l,{primaryName:"as",primaryColor:"light",secondaryName:t,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},m=function(e){var t=e.docPath,n=void 0!==t?"https://bulma.io/documentation".concat(t):void 0,r=void 0!==t?"Bulma":"n/a",o=void 0!==t?"primary":"dark";return a.a.createElement(l,{primaryName:"docs",primaryColor:"light",secondaryName:r,secondaryColor:o,url:n})},s=function(e){var t=e.customize,n=!0===t?"yes":"no",r=!0===t?"success":"danger";return a.a.createElement(l,{primaryName:"customize",primaryColor:"light",secondaryName:n,secondaryColor:r,url:"/architecture/customize"})},p=function(e){var t=e.asType,n=e.docPath,r=e.customize;return a.a.createElement(l.Group,null,a.a.createElement(u,{asType:t}),a.a.createElement(s,{customize:r}),a.a.createElement(m,{docPath:n}))};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){return Object.keys(e).sort(function(e,t){return e<t?-1:e===t?0:1}).map(function(t){return{key:t,value:e[t]}})},v=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return r=this,o=(e=b(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==d(o)&&"function"!==typeof o?h(r):o,g(h(h(n)),"renderBody",function(){var e=n.props.props;if(void 0!==e)return a.a.createElement("tbody",null,E(e).map(function(e){var t=e.key,r=e.value;return n.renderRow(t,r)}))}),g(h(h(n)),"renderCellName",function(e){return a.a.createElement(c.r.Cell,null,a.a.createElement("code",null,e))}),g(h(h(n)),"renderCellRequired",function(e){var t={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return a.a.createElement(c.r.Cell,t)}),g(h(h(n)),"renderCellType",function(e,t){var r=n.props.components.tooltip,o=void 0===t?e:a.a.createElement(r,{text:t},e);return a.a.createElement(c.r.Cell,null,a.a.createElement("code",null,o))}),g(h(h(n)),"renderCellDescription",function(e){if(n.hasDescription)return void 0===e?a.a.createElement(c.r.Cell,null):a.a.createElement(c.r.Cell,null,e)}),g(h(h(n)),"renderCellDefaultValue",function(e){if(void 0===e)return a.a.createElement(c.r.Cell,{textColor:"grey-light"},a.a.createElement("em",null,"-"));var t="''"===e?"[Empty String]":e.replace(/\'/g,"");return a.a.createElement(c.r.Cell,null,a.a.createElement("code",null,t))}),g(h(h(n)),"renderRow",function(e,t){return a.a.createElement(c.r.Row,{key:e},n.renderCellName(e),n.renderCellType(t.typeName,t.typeTip),n.renderCellRequired(t.required),n.renderCellDefaultValue(t.defaultValue),n.renderCellDescription(t.description))}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?a.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return a.a.createElement(c.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Property"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Required"),a.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(t){return void 0!==e[t].description})}}])&&f(n.prototype,r),o&&f(n,o),t}(),O=Object(r.withMDXComponents)(v);function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={description:a.a.createElement("span",null,"the React Component or JSX Element (e.g. ",a.a.createElement("code",null,'"div"')," or"," ",a.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},w={description:a.a.createElement("span",null,"a handle to the underlying ",a.a.createElement("code",null,"React Component")," or"," ",a.a.createElement("code",null,"JSX Element")),typeName:"Ref"},_=function(e){var t=e.asType,n=e.components,r=e.customize,o=e.docPath,i=e.name,l=e.props,u={asType:t,customize:r,docPath:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.u,{as:"h4",size:4},i),a.a.createElement(p,u),a.a.createElement(v,{components:n,props:l}))},I=(Object(r.withMDXComponents)(_),Object(r.withMDXComponents)(function(e){for(var t=e.component,n=e.components,r=e.customize,o=e.docPath,c=e.props,i=t.defaultProps.as,l="string"===typeof i?i:void 0!==i.displayName?i.displayName:JSON.stringify(i),u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){B(e,t,n[t])})}return e}({as:j,ref:w},c),m=Object.keys(u),s=0;s<m.length;s++){var p=m[s],d=t.defaultProps[p];void 0!==d&&(u[p].defaultValue=JSON.stringify(d))}return a.a.createElement(_,{asType:l,components:n,customize:r,docPath:o,name:t.displayName,props:u})})),D=n("./node_modules/react-dom/index.js"),T=n.n(D);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){A(e,t,n[t])})}return e}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return r=this,o=(e=k(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==C(o)&&"function"!==typeof o?x(r):o,A(x(x(n)),"ref",a.a.createRef()),A(x(x(n)),"updateHeightEnabled",!1),A(x(x(n)),"updateHeightTimeout",void 0),A(x(x(n)),"iframeRoot",void 0),A(x(x(n)),"cloneStyles",function(){if(null!==n.ref.current&&null!==n.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),t=0;t<e.length;t++){var r=e[t];"stylesheet"===r.rel&&n.ref.current.contentDocument.head.appendChild(r.cloneNode(!0))}for(var o=Array.from(document.head.getElementsByTagName("style")),a=0;a<o.length;a++){var c=o[a];n.ref.current.contentDocument.head.appendChild(c.cloneNode(!0))}}}),A(x(x(n)),"handleLoad",function(){null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.iframeRoot=n.ref.current.contentDocument.body,n.cloneStyles(),n.forceUpdate(),n.doUpdateHeight())}),A(x(x(n)),"doUpdateHeight",function(){!0!==n.props.forceHeight&&null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.ref.current.style.height="".concat(n.ref.current.contentDocument.body.scrollHeight,"px")),n.updateHeight()}),A(x(x(n)),"updateHeight",function(){var e=n.props.updateHeightDelay;0!==e&&void 0!==e?(n.updateHeightEnabled=!0,n.updateHeightTimeout=setTimeout(n.doUpdateHeight,e)):n.updateHeightEnabled=!1}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return a.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:P({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?T.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):T.a.createPortal(e,this.iframeRoot):void 0)}}])&&z(n.prototype,r),o&&z(n,o),t}();function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}A(N,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var H={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},L=function(e){function t(){var e,n,r,o,c,i,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,m=new Array(u),s=0;s<u;s++)m[s]=arguments[s];return r=this,n=!(o=(e=M(t)).call.apply(e,[this].concat(m)))||"object"!==R(o)&&"function"!==typeof o?X(r):o,c=X(X(n)),l=function(e,t){var n;switch(R(t)){case"boolean":n=!0===t?void 0:"{false}";break;case"number":n="{".concat(t,"}");break;case"undefined":n="{undefined}";break;default:n=JSON.stringify(t)}var r="".concat(e).concat(void 0!==n?"=".concat(n):"");return a.a.createElement("code",{key:e,style:{marginRight:"10px"}},r)},(i="renderProp")in c?Object.defineProperty(c,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[i]=l,n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.index,o=t.props,i=void 0!==r&&0!==r?a.a.createElement("hr",{style:H}):void 0;return a.a.createElement(c.a,null,i,a.a.createElement(c.u,{as:"h6",size:6},Object.keys(o).map(function(t){return e.renderProp(t,o[t])})),n)}}])&&U(n.prototype,r),o&&U(n,o),t}(),J=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};n.d(t,"b",function(){return I}),n.d(t,"f",function(){return j}),n.d(t,"h",function(){return w}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return N}),n.d(t,"d",function(){return L}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return J})},"./src/components/breadcrumb/__docs__/breadcrumb.docs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),i=n("./node_modules/@fortawesome/react-fontawesome/index.es.js"),l=n("./node_modules/docz/dist/index.m.js"),u=n("./src/__docs__/components/index.ts"),m=n("./src/base/helpers/variables.ts"),s=n("./src/elements/index.ts"),p=n("./src/components/breadcrumb/breadcrumb.tsx");function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,g(t).call(this,e))).layout=null,n}var n,r,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=b(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"breadcrumb"}},"Breadcrumb"),o.a.createElement(a.MDXTag,{name:"p",components:t},"A simple ",o.a.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},"breadcrumb")," component to improve your navigation experience."),o.a.createElement(l.e,{__position:0,__code:"<Breadcrumb>\n  <Breadcrumb.Item>rbx</Breadcrumb.Item>\n  <Breadcrumb.Item>Documentation</Breadcrumb.Item>\n  <Breadcrumb.Item>Components</Breadcrumb.Item>\n  <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>\n</Breadcrumb>",__scope:{props:this?this.props:n,faBook:c.j,faHome:c.u,faPuzzlePiece:c.A,faThumbsUp:c.E,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:u.b,OptionBlock:u.d,mapEnumerable:u.g,DEFAULTS:m.a,Block:s.a,Title:s.u,Icon:s.m,Breadcrumb:p.b,BREADCRUMB_DEFAULTS:p.a}},o.a.createElement(p.b,null,o.a.createElement(p.b.Item,null,"rbx"),o.a.createElement(p.b.Item,null,"Documentation"),o.a.createElement(p.b.Item,null,"Components"),o.a.createElement(p.b.Item,{active:!0},"Breadcrumb"))),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"alignments"}},"Alignments"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"align")," prop to center or align-right the breadcrumbs.\nLeaving this prop unspecified, or setting it to ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"undefined"),", causes it to be ",o.a.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},"left")," aligned."),o.a.createElement(l.e,{__position:1,__code:"() => {\n  const alignments = [\n    { align: undefined, name: 'normal' },\n    ...BREADCRUMB_DEFAULTS.alignments.map(align => ({ align, name: align })),\n  ]\n  return alignments.map(({ align, name }, i) => (\n    <OptionBlock props={{ align }} index={i} key={i}>\n      <Breadcrumb align={align}>\n        <Breadcrumb.Item>rbx</Breadcrumb.Item>\n        <Breadcrumb.Item>Documentation</Breadcrumb.Item>\n        <Breadcrumb.Item>Components</Breadcrumb.Item>\n        <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>\n      </Breadcrumb>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:n,faBook:c.j,faHome:c.u,faPuzzlePiece:c.A,faThumbsUp:c.E,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:u.b,OptionBlock:u.d,mapEnumerable:u.g,DEFAULTS:m.a,Block:s.a,Title:s.u,Icon:s.m,Breadcrumb:p.b,BREADCRUMB_DEFAULTS:p.a}},function(){return[{align:void 0,name:"normal"}].concat(f(p.a.alignments.map(function(e){return{align:e,name:e}}))).map(function(e,t){var n=e.align;e.name;return o.a.createElement(u.d,{props:{align:n},index:t,key:t},o.a.createElement(p.b,{align:n},o.a.createElement(p.b.Item,null,"rbx"),o.a.createElement(p.b.Item,null,"Documentation"),o.a.createElement(p.b.Item,null,"Components"),o.a.createElement(p.b.Item,{active:!0},"Breadcrumb")))})}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"with-icons"}},"With icons"),o.a.createElement(a.MDXTag,{name:"p",components:t},"You can use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Icon>")," component within the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Breadcrumb.Item>")," for additional flavor."),o.a.createElement(l.e,{__position:2,__code:'<Breadcrumb>\n  <Breadcrumb.Item>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faHome} />\n    </Icon>\n    rbx\n  </Breadcrumb.Item>\n  <Breadcrumb.Item>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faBook} />\n    </Icon>\n    Documentation\n  </Breadcrumb.Item>\n  <Breadcrumb.Item>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faPuzzlePiece} />\n    </Icon>\n    Components\n  </Breadcrumb.Item>\n  <Breadcrumb.Item active>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faThumbsUp} />\n    </Icon>\n    Breadcrumb\n  </Breadcrumb.Item>\n</Breadcrumb>',__scope:{props:this?this.props:n,faBook:c.j,faHome:c.u,faPuzzlePiece:c.A,faThumbsUp:c.E,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:u.b,OptionBlock:u.d,mapEnumerable:u.g,DEFAULTS:m.a,Block:s.a,Title:s.u,Icon:s.m,Breadcrumb:p.b,BREADCRUMB_DEFAULTS:p.a}},o.a.createElement(p.b,null,o.a.createElement(p.b.Item,null,o.a.createElement(s.m,{size:"small"},o.a.createElement(i.a,{icon:c.u})),"rbx"),o.a.createElement(p.b.Item,null,o.a.createElement(s.m,{size:"small"},o.a.createElement(i.a,{icon:c.j})),"Documentation"),o.a.createElement(p.b.Item,null,o.a.createElement(s.m,{size:"small"},o.a.createElement(i.a,{icon:c.A})),"Components"),o.a.createElement(p.b.Item,{active:!0},o.a.createElement(s.m,{size:"small"},o.a.createElement(i.a,{icon:c.E})),"Breadcrumb"))),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"separators"}},"Separators"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"separator")," prop of ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Breadcrumb>")," to specify an alternative separator."),o.a.createElement(l.e,{__position:3,__code:"() => {\n  const separators = [\n    { name: 'forward-slash', separator: undefined },\n    ...BREADCRUMB_DEFAULTS.separators.map(separator => ({\n      name: separator,\n      separator,\n    })),\n  ]\n  return separators.map(({ name, separator }, i) => (\n    <OptionBlock props={{ separator }} index={i} key={i}>\n      <Breadcrumb separator={separator}>\n        <Breadcrumb.Item>breadcrumb</Breadcrumb.Item>\n        <Breadcrumb.Item>separator</Breadcrumb.Item>\n        <Breadcrumb.Item active>{name}</Breadcrumb.Item>\n      </Breadcrumb>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:n,faBook:c.j,faHome:c.u,faPuzzlePiece:c.A,faThumbsUp:c.E,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:u.b,OptionBlock:u.d,mapEnumerable:u.g,DEFAULTS:m.a,Block:s.a,Title:s.u,Icon:s.m,Breadcrumb:p.b,BREADCRUMB_DEFAULTS:p.a}},function(){return[{name:"forward-slash",separator:void 0}].concat(f(p.a.separators.map(function(e){return{name:e,separator:e}}))).map(function(e,t){var n=e.name,r=e.separator;return o.a.createElement(u.d,{props:{separator:r},index:t,key:t},o.a.createElement(p.b,{separator:r},o.a.createElement(p.b.Item,null,"breadcrumb"),o.a.createElement(p.b.Item,null,"separator"),o.a.createElement(p.b.Item,{active:!0},n)))})}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"sizes"}},"Sizes"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"size")," prop on ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Breadcrumb>")," to specify the size of the breadcrumbs."),o.a.createElement(l.e,{__position:4,__code:"() => {\n  const sizes = BREADCRUMB_DEFAULTS.sizes.map(size => ({ name: size, size }))\n  sizes.splice(1, 0, { name: 'normal', size: undefined })\n  return sizes.map(({ size, name }, i) => (\n    <OptionBlock props={{ size }} index={i} key={i}>\n      <Breadcrumb size={size}>\n        <Breadcrumb.Item>breadcrumb</Breadcrumb.Item>\n        <Breadcrumb.Item>size</Breadcrumb.Item>\n        <Breadcrumb.Item active>{name}</Breadcrumb.Item>\n      </Breadcrumb>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:n,faBook:c.j,faHome:c.u,faPuzzlePiece:c.A,faThumbsUp:c.E,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:u.b,OptionBlock:u.d,mapEnumerable:u.g,DEFAULTS:m.a,Block:s.a,Title:s.u,Icon:s.m,Breadcrumb:p.b,BREADCRUMB_DEFAULTS:p.a}},function(){var e=p.a.sizes.map(function(e){return{name:e,size:e}});return e.splice(1,0,{name:"normal",size:void 0}),e.map(function(e,t){var n=e.size,r=e.name;return o.a.createElement(u.d,{props:{size:n},index:t,key:t},o.a.createElement(p.b,{size:n},o.a.createElement(p.b.Item,null,"breadcrumb"),o.a.createElement(p.b.Item,null,"size"),o.a.createElement(p.b.Item,{active:!0},r)))})}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),o.a.createElement(u.b,{component:p.b,customize:!0,docPath:"/components/breadcrumb",props:{align:{description:"set the breadcrumb group's alignment",typeName:"string",typeTip:Object(u.g)(p.a.alignments)},separator:{description:"set the breadcrumb group's separator",typeName:"string",typeTip:Object(u.g)(p.a.separators)},size:{description:"set the breadcrumb group's size",typeName:"string",typeTip:Object(u.g)(p.a.sizes)}}}),o.a.createElement(u.b,{component:p.b.Item,docPath:"/components/breadcrumb",props:{active:{description:"marks the breadcrumb as active",typeName:"boolean"}}}))}}])&&y(n.prototype,r),d&&y(n,d),t}()},"./src/components/breadcrumb/breadcrumb.tsx":function(e,t,n){"use strict";var r=n("./node_modules/classnames/index.js"),o=n.n(r),a=n("./node_modules/prop-types/index.js"),c=n.n(a),i=n("./node_modules/react/index.js"),l=n.n(i),u=n("./src/base/index.ts"),m=n("./src/utils.ts");function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=Object(u.b)(function(e,t){var n=e.active,r=s(e,["active"]);return l.a.createElement("li",{className:o()({"is-active":n})},l.a.createElement(u.a,Object.assign({ref:t},r)))},{as:"a"});function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}p.displayName="Breadcrumb.Item",p.propTypes={active:c.a.bool},n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y});var b={alignments:Object(m.d)("centered","right"),separators:Object(m.d)("arrow","bullet","dot","succeeds"),sizes:Object(m.d)("small","medium","large")},y=Object.assign(Object(u.b)(function(e,t){var n,r=e.align,a=e.children,c=e.className,i=e.separator,m=e.size,s=f(e,["align","children","className","separator","size"]);return l.a.createElement(u.a,Object.assign({className:o()("breadcrumb",(n={},d(n,"has-".concat(i,"-separator"),i),d(n,"is-".concat(r),r),d(n,"is-".concat(m),m),n),c),ref:t},s),l.a.createElement("ul",null,a))},{as:"nav"}),{Item:p});y.displayName="Breadcrumb",y.propTypes={align:c.a.oneOfType([c.a.string,c.a.number]),separator:c.a.oneOfType([c.a.string,c.a.number]),size:c.a.oneOfType([c.a.string,c.a.number])}}}]);
//# sourceMappingURL=src-components-breadcrumb-docs-breadcrumb-docs.8e0ec64d95d67f432aa6.js.map