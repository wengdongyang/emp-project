(self.webpackChunk_emp_react_base=self.webpackChunk_emp_react_base||[]).push([["src_components_index_ts"],{67228:function(t){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}},22858:function(t){t.exports=function(t){if(Array.isArray(t))return t}},67154:function(t){function r(){return t.exports=r=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},r.apply(this,arguments)}t.exports=r},13884:function(t){t.exports=function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,u=void 0;try{for(var a,c=t[Symbol.iterator]();!(e=(a=c.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(t){o=!0,u=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw u}}return n}}},80521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},6479:function(t,r,n){var e=n(37316);t.exports=function(t,r){if(null==t)return{};var n,o,u=e(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}},37316:function(t){t.exports=function(t,r){if(null==t)return{};var n,e,o={},u=Object.keys(t);for(e=0;e<u.length;e++)n=u[e],r.indexOf(n)>=0||(o[n]=t[n]);return o}},63038:function(t,r,n){var e=n(22858),o=n(13884),u=n(60379),a=n(80521);t.exports=function(t,r){return e(t)||o(t,r)||u(t,r)||a()}},60379:function(t,r,n){var e=n(67228);t.exports=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}},76938:function(t,r,n){"use strict";n.r(r),n.d(r,{AsEmpty:function(){return p},AsIcon:function(){return e.Z},AsInput:function(){return y}});var e=n(77928),o=n(67154),u=n.n(o),a=n(63038),c=n.n(a),i=n(6479),f=n.n(i),l=n(22491),s=n.n(l),p=function(t){var r=t.src,n=t.defaultSource,e=t.alt,o=f()(t,["src","defaultSource","alt"]),a=(0,l.useState)(r||n||""),i=c()(a,2),p=i[0],y=i[1];return(0,l.useEffect)((function(){y(r||n||"")}),[r]),s().createElement("img",u()({src:p,alt:e,onError:function(){y(n||"")}},o))},y=function(t){var r=t.defaultValue,n=f()(t,["defaultValue"]);return s().createElement("input",u()({value:r},n))}}}]);