webpackJsonp([6],{0:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=u(r),f=n(13),i=n(18),a=u(i),l=n(101),c=u(l),d=n(352),s=u(d);(0,f.render)(o.default.createElement(a.default,{tokenizer:c.default}),document.getElementById("naive-mount")),(0,f.render)(o.default.createElement(a.default,{tokenizer:s.default}),document.getElementById("treebank-mount"))},14:function(t,e,n){"use strict";var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=n(22),o="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,f=r||o||Function("return this")();t.exports=f},17:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=t.value,n=void 0===e?"":e,u=t.placeholder,r=void 0===u?null:u,o=t.status,i=void 0===o?"default":o,a=t.onChange,l=void 0===a?Function.prototype:a,c=t.faded,d=void 0!==c&&c,s="bar-textarea";return"error"===i?s+=" error":"success"===i&&(s+=" success"),f.default.createElement("div",null,f.default.createElement("textarea",{placeholder:r,onChange:l,value:n,className:i+(d?" faded":"")}),f.default.createElement("span",{className:s}))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(1),f=u(o)},18:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=u(r),f=n(12),i=n(11),a=u(i),l=n(17),c=u(l),d=(0,f.compose)((0,f.withState)("input","setInput",""),(0,f.withState)("training","setTraining",function(t){return t.training||""})),s=d(function(t){var e=t.tokenizer,n=t.input,u=t.setInput,r=t.training,f=t.setTraining,i=t.textarea,l=void 0!==i&&i,d=t.trained,s=void 0!==d&&d,b=t.flow,y=void 0===b||b,p=l?c.default:a.default,m=void 0;return m=s?n?e(r)(n):[]:n?e(n):[],o.default.createElement("div",{style:{width:"55%"}},o.default.createElement("div",null,s&&o.default.createElement(c.default,{placeholder:"Enter training text here...",value:r,onChange:function(t){return f(t.target.value)},faded:!0}),o.default.createElement(p,{placeholder:"Enter raw text here to test the tokenizer...",value:n,onChange:function(t){return u(t.target.value)}}),o.default.createElement("p",{style:{width:"100%"}},m.map(function(t){return y?o.default.createElement("span",{className:"token",style:{float:"left"}},t):o.default.createElement("div",{className:"token"},t)}))),o.default.createElement("div",{style:{clear:"both"}}))});e.default=s},19:function(t,e,n){"use strict";var u=n(14),r=u.Symbol;t.exports=r},20:function(t,e){"use strict";function n(t,e){for(var n=-1,u=t?t.length:0,r=Array(u);++n<u;)r[n]=e(t[n],n,t);return r}t.exports=n},21:function(t,e,n){"use strict";function u(t){if("string"==typeof t)return t;if(f(t))return o(t,u)+"";if(i(t))return c?c.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}var r=n(19),o=n(20),f=n(23),i=n(25),a=1/0,l=r?r.prototype:void 0,c=l?l.toString:void 0;t.exports=u},22:function(t,e){(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u="object"==("undefined"==typeof e?"undefined":n(e))&&e&&e.Object===Object&&e;t.exports=u}).call(e,function(){return this}())},23:function(t,e){"use strict";var n=Array.isArray;t.exports=n},24:function(t,e){"use strict";function n(t){return null!=t&&"object"==("undefined"==typeof t?"undefined":u(t))}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=n},25:function(t,e,n){"use strict";function u(t){return"symbol"==("undefined"==typeof t?"undefined":r(t))||o(t)&&a.call(t)==f}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(24),f="[object Symbol]",i=Object.prototype,a=i.toString;t.exports=u},26:function(t,e,n){"use strict";function u(t){return null==t?"":r(t)}var r=n(21);t.exports=u},61:function(t,e){"use strict";function n(t){return t.match(u)||[]}var u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=n},63:function(t,e){"use strict";function n(t){return u.test(t)}var u=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=n},64:function(t,e){"use strict";function n(t){return t.match(T)||[]}var u="\\ud800-\\udfff",r="\\u0300-\\u036f\\ufe20-\\ufe23",o="\\u20d0-\\u20f0",f="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",a="\\xac\\xb1\\xd7\\xf7",l="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",c="\\u2000-\\u206f",d=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="A-Z\\xc0-\\xd6\\xd8-\\xde",b="\\ufe0e\\ufe0f",y=a+l+c+d,p="['’]",m="["+y+"]",v="["+r+o+"]",g="\\d+",x="["+f+"]",$="["+i+"]",S="[^"+u+y+g+f+i+s+"]",h="\\ud83c[\\udffb-\\udfff]",E="(?:"+v+"|"+h+")",j="[^"+u+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",w="[\\ud800-\\udbff][\\udc00-\\udfff]",z="["+s+"]",M="\\u200d",A="(?:"+$+"|"+S+")",O="(?:"+z+"|"+S+")",k="(?:"+p+"(?:d|ll|m|re|s|t|ve))?",Z="(?:"+p+"(?:D|LL|M|RE|S|T|VE))?",N=E+"?",C="["+b+"]?",I="(?:"+M+"(?:"+[j,_,w].join("|")+")"+C+N+")*",L=C+N+I,P="(?:"+[x,_,w].join("|")+")"+L,T=RegExp([z+"?"+$+"+"+k+"(?="+[m,z,"$"].join("|")+")",O+"+"+Z+"(?="+[m,z+A,"$"].join("|")+")",z+"?"+A+"+"+k,z+"+"+Z,g,P].join("|"),"g");t.exports=n},65:function(t,e,n){"use strict";function u(t,e,n){return t=f(t),e=n?void 0:e,void 0===e?o(t)?i(t):r(t):t.match(e)||[]}var r=n(61),o=n(63),f=n(26),i=n(64);t.exports=u},101:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(65),o=u(r);e.default=o.default},352:function(t,e){"use strict";function n(t,e,n){for(var u=0,r=t.length;u<r;u++)n=n.replace(t[u],e);return n}function u(t,e){for(var n=0,u=t.length;n<u;n++)e=e.replace(t[n][0],t[n][1]);return e}function r(t){t=u(a,t),t=u(l,t),t=u(c,t),t=" "+t+" ",t=u(d,t),t=n(o," $1 $2 ",t),t=n(f," $1 $2 ",t),t=n(i," $1 $2 $3 ",t);var e=t.split(/\s+/).map(function(t){return t.trim()}).filter(function(t){return t});return e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=[/\b(can)(not)\b/gi,/\b(d)('ye)\b/gi,/\b(gim)(me)\b/gi,/\b(gon)(na)\b/gi,/\b(got)(ta)\b/gi,/\b(lem)(me)\b/gi,/\b(mor)('n)\b/gi,/\b(wan)(na) "/gi],f=[/ ('t)(is)\b/gi,/ ('t)(was)\b/gi],i=[/\b(whad)(dd)(ya)\b/gi,/\b(wha)(t)(cha)\b/gi],a=[[/^"/g,"``"],[/(``)/g," $1 "],[/([ (\[{<])"/g,"$1 `` "]],l=[[/([:,])([^\d])/g," $1 $2"],[/([:,]$)/g," $1 "],[/\.\.\./g," ... "],[/([;@#$%&])/g," $1 "],[/([^\.])(\.)([\]\)}>"']*)\s*$/g,"$1 $2$3 "],[/([?!])/g," $1 "],[/([^'])' /g,"$1 ' "]],c=[[/([\]\[\(\)\{\}\<\>])/g," $1 "],[/--/g," -- "]],d=[[/"/g," '' "],[/(\S)('')/g,"$1 $2 "],[/([^' ])('[sS]|'[mM]|'[dD]|') /g,"$1 $2 "],[/([^' ])('ll|'LL|'re|'RE|'ve|'VE|n't|N'T) /g,"$1 $2 "]]}});