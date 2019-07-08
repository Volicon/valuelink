!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t.NestedLink={},t.React)}(this,function(t,e){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=Array.prototype,u=Object.prototype;function i(t){if(t&&"object"==typeof t)switch(Object.getPrototypeOf(t)){case o:return c;case u:return s}return a}var a={clone:function(t){return t},map:function(t,e){return[]},remove:function(t){return t}},s={map:function(t,e){var n=[];for(var r in t.value){var o=e(t.at(r),r);void 0===o||n.push(o)}return n},remove:function(t,e){return delete t[e],t},clone:function(t){var e={};for(var n in t)e[n]=t[n];return e}},c={clone:function(t){return t.slice()},remove:function(t,e){return t.splice(e,1),t},map:function(t,e){for(var n=t.value.length,r=Array(n),o=0,u=0;o<n;o++){var i=e(t.at(o),o);void 0===i||(r[u++]=i)}return r.length===u||(r.length=u),r}},f=function(){function t(t){this.value=t}return t.value=function(t,e){return new p(t,e)},t.getValues=function(t){return g(t,"value")},Object.defineProperty(t.prototype,"current",{get:function(){return this.value},set:function(t){this.set(t)},enumerable:!0,configurable:!0}),t.getErrors=function(t){return g(t,"error")},t.hasErrors=function(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e].error)return!0;return!1},t.setValues=function(t,e){if(e)for(var n in t){var r=m(n);if(e.hasOwnProperty(r)){var o=e[r];void 0===o||t[n].set(o)}}},t.prototype.onChange=function(t){var e=this;return new l(this,function(n){t(n),e.set(n)})},Object.defineProperty(t.prototype,"props",{get:function(){var t=this;return"boolean"==typeof this.value?{checked:this.value,onChange:function(e){return t.set(Boolean(e.target.checked))}}:{value:this.value,onChange:function(e){return t.set(e.target.value)}}},enumerable:!0,configurable:!0}),t.prototype.update=function(t,e){var n=t(this.clone(),e);void 0===n||this.set(n)},t.prototype.pipe=function(t){var e=this;return new l(this,function(n){var r=t(n,e.value);void 0===r||e.set(r)})},t.prototype.action=function(t){var e=this;return function(n){return e.update(t,n)}},t.prototype.equals=function(t){return new v(this,t)},t.prototype.enabled=function(t){return new h(this,t||"")},t.prototype.contains=function(t){return new y(this,t)},t.prototype.push=function(){var t=c.clone(this.value);Array.prototype.push.apply(t,arguments),this.set(t)},t.prototype.unshift=function(){var t=c.clone(this.value);Array.prototype.unshift.apply(t,arguments),this.set(t)},t.prototype.splice=function(){var t=c.clone(this.value);Array.prototype.splice.apply(t,arguments),this.set(t)},t.prototype.map=function(t){return i(this.value).map(this,t)},t.prototype.removeAt=function(t){var e=this.value,n=i(e);this.set(n.remove(n.clone(e),t))},t.prototype.at=function(t){return new k(this,t)},t.prototype.clone=function(){var t=this.value;return i(t).clone(t)},t.prototype.pick=function(){for(var t={},e=arguments.length?arguments:Object.keys(this.value),n=0;n<e.length;n++){var r=e[n];t[r]=new k(this,r)}return t},t.prototype.$links=function(){var t={},e=this.value;for(var n in e)e.hasOwnProperty(n)&&(t["$"+n]=new k(this,n));return t},t.prototype.check=function(t,e){return this.error||t(this.value)||(this.error=e||t.error||d),this},t}(),p=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return r(e,t),e.prototype.set=function(t){},e}(f),l=function(t){function e(e,n){var r=t.call(this,e.value)||this;r.set=n;var o=e.error;return o&&(r.error=o),r}return r(e,t),e.prototype.set=function(t){},e}(f),v=function(t){function e(e,n){var r=t.call(this,e.value===n)||this;return r.parent=e,r.truthyValue=n,r}return r(e,t),e.prototype.set=function(t){this.parent.set(t?this.truthyValue:null)},e}(f),h=function(t){function e(e,n){var r=t.call(this,null!=e.value)||this;return r.parent=e,r.defaultValue=n,r}return r(e,t),e.prototype.set=function(t){this.parent.set(t?this.defaultValue:null)},e}(f),y=function(t){function e(e,n){var r=t.call(this,e.value.indexOf(n)>=0)||this;return r.parent=e,r.element=n,r}return r(e,t),e.prototype.set=function(t){var e=this,n=Boolean(t);if(this.value!==n){var r=this.parent.value,o=t?r.concat(this.element):r.filter(function(t){return t!==e.element});this.parent.set(o)}},e}(f),d="Invalid value",k=function(t){function e(e,n){var r=t.call(this,e.value[n])||this;return r.parent=e,r.key=n,r}return r(e,t),e.prototype.remove=function(){this.parent.removeAt(this.key)},e.prototype.set=function(t){var e=this;this.value!==t&&this.parent.update(function(n){return n[e.key]=t,n})},e}(f);function g(t,e){var n={};for(var r in t)if(t.hasOwnProperty(r)){var o=t[r][e];void 0!==o&&(n[m(r)]=o)}return n}function m(t){return"$"===t[0]?t.slice(1):t}var w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.links=null,e}return r(e,t),e.prototype.linkAt=function(t){return this.$at(t)},e.prototype.$at=function(t){var e=this.state[t],n=this.links||(this.links={}),r=n[t];return r&&r.value===e?r:n[t]=new O(this,t,e)},e.prototype.linkAll=function(){return this.state$.apply(this,arguments)},e.prototype.state$=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=this.state,r=this.links||(this.links={}),o=0,u=t.length?t:Object.keys(n);o<u.length;o++){var i=u[o],a=n[i],s=r[i];s&&s.value===a||(r[i]=new O(this,i,a))}return r},e}(e.Component),O=function(t){function e(e,n,r){var o=t.call(this,r)||this;return o.component=e,o.key=n,o}return r(e,t),e.prototype.set=function(t){var e={};e[this.key]=t,this.component.setState(e)},e}(f),b=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return r(e,t),e.prototype.set=function(t){},e.prototype.update=function(t,e){this.set(function(n){var r=i(n).clone(n),o=t(r,e);return void 0===o?n:o})},e}(f);function S(t){var n=e.useState(t),r=n[0],o=n[1];return new b(r,o)}function L(t){var n=e.useState(t),r=n[0],o=n[1],u=j();return new b(r,function(t){return u.current&&o(t)})}function j(){var t=e.useRef(!0);return e.useEffect(function(){return function(){return t.current=!1}},[]),t}function A(t){var n=t instanceof f?t.value:t,r=S(n);return e.useEffect(function(){return r.set(n)},[n]),r}function P(t){var n=t instanceof f?t.value:t,r=L(n);return e.useEffect(function(){return r.set(n)},[n]),r}t.default=f,t.LinkedComponent=w,t.StateLink=O,t.Link=f,t.CustomLink=p,t.CloneLink=l,t.EqualsLink=v,t.EnabledLink=h,t.ContainsLink=y,t.LinkAt=k,t.UseStateLink=b,t.useLink=S,t.useStateRef=S,t.useSafeStateRef=L,t.useBoundStateRef=A,t.useSafeBoundStateRef=P,t.useSafeLink=L,t.useIsMountedRef=j,t.useBoundLink=A,t.useSafeBoundLink=P,t.useLocalStorage=function(t,n){var r=e.useRef();r.current=n,e.useEffect(function(){var e=JSON.parse(localStorage.getItem(t)||"{}");return f.setValues(r.current,e),function(){var e=f.getValues(r.current);localStorage.setItem(t,JSON.stringify(e))}},[])},t.useIO=function(t,n){void 0===n&&(n=[]);var r=L(null);return e.useEffect(function(){r.set(function(t){return(t||0)+1}),t().finally(function(){return r.set(function(t){return t-1})})},n),null!==r.value&&!r.value},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
