// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function n(n){var i;if(t(n))return i=n.pop(),[n,i];if(e(n))return function(t){var e,r;return 0===t.length?[t,void 0]:(r=t[e=t.length-1],[new t.constructor(t.buffer,t.byteOffset,e),r])}(n);if(null!==n&&"object"==typeof n&&"number"==typeof n.length&&r(n.length)&&n.length>=0)return function(t){var e,r;return 0===t.length?[t,void 0]:(r=t[e=t.length-1],delete t[e],t.length=e,[t,r])}(n);throw new TypeError(s("1WlBm",n))}export{n as default};
//# sourceMappingURL=index.mjs.map
