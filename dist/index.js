"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=u(function(O,n){
function y(r){var e,t;return r.length===0?[r,void 0]:(e=r.length-1,t=r[e],delete r[e],r.length=e,[r,t])}n.exports=y
});var v=u(function(E,i){
function g(r){var e,t,a;return r.length===0?[r,void 0]:(t=r.length-1,a=r[t],e=new r.constructor(r.buffer,r.byteOffset,t),[e,a])}i.exports=g
});var f=u(function(I,s){
var h=require('@stdlib/assert-is-array/dist'),d=require('@stdlib/assert-is-typed-array-like/dist'),q=require('@stdlib/assert-is-integer/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist'),w=p(),x=v();function A(r){var e;if(h(r))return e=r.pop(),[r,e];if(d(r))return x(r);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&q(r.length)&&r.length>=0)return w(r);throw new TypeError(m('1WlBm',r))}s.exports=A
});var T=f();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
