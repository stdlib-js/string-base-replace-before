// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,e,n){var i;if(!r(s))throw new TypeError(t("null3R",s));if(!r(e))throw new TypeError(t("null3L",e));if(!r(n))throw new TypeError(t("nullB6",n));return i=s.indexOf(e),""===s||""===e||""===n||i<0?s:n+s.substring(i)}export{s as default};
//# sourceMappingURL=index.mjs.map
