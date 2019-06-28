!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=1)}([function(t,e,r){"use strict";var n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,a="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in self,s="ArrayBuffer"in self;if(s)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(t){return t&&-1<u.indexOf(Object.prototype.toString.call(t))};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function b(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:a&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&a&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||f(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=y(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=c(t),e=l(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[c(t)]},h.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},h.prototype.set=function(t,e){this.map[c(t)]=l(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),d(r)},h.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),d(e)},h.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),d(r)},o&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t,e){var r=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=function(t){var e=t.toUpperCase();return-1<w.indexOf(e)?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function x(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(r),decodeURIComponent(n))}}),o}function A(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},m.call(g.prototype),m.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];A.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var T=self.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function U(i,s){return new Promise(function(r,t){var e=new g(i,s);if(e.signal&&e.signal.aborted)return t(new T("Aborted","AbortError"));var n=new XMLHttpRequest;function o(){n.abort()}n.onload=function(){var t={status:n.status,statusText:n.statusText,headers:function(t){var o=new h;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var n=e.join(":").trim();o.append(r,n)}}),o}(n.getAllResponseHeaders()||"")};t.url="responseURL"in n?n.responseURL:t.headers.get("X-Request-URL");var e="response"in n?n.response:n.responseText;r(new A(e,t))},n.onerror=function(){t(new TypeError("Network request failed"))},n.ontimeout=function(){t(new TypeError("Network request failed"))},n.onabort=function(){t(new T("Aborted","AbortError"))},n.open(e.method,e.url,!0),"include"===e.credentials?n.withCredentials=!0:"omit"===e.credentials&&(n.withCredentials=!1),"responseType"in n&&a&&(n.responseType="blob"),e.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",o),n.onreadystatechange=function(){4===n.readyState&&e.signal.removeEventListener("abort",o)}),n.send(void 0===e._bodyInit?null:e._bodyInit)})}U.polyfill=!0,self.fetch||(self.fetch=U,self.Headers=h,self.Request=g,self.Response=A),r.d(e,"b",function(){return O}),r.d(e,"a",function(){return _});var j=function(t,e){e=e||window.location.href,t=t.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}("useMockApi")?"http://localhost:3001/":"/";function O(){return function(t){return fetch(j+t).then(B,R)}("users")}function _(t){return function(t){var e=new Request(j+t,{method:"DELETE"});return fetch(e).then(B,R)}("users/".concat(t))}function B(t){return t.json()}function R(t){console.log(t)}},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";r.r(e),function(n){r(4);var o=r(0);Object(o.b)().then(function(t){var e="";t.forEach(function(t){e+='<tr>\n      <td><a href="#" data-id="'.concat(t.id,'" class="deleteUser">Delete</a></td>\n      <td>').concat(t.id,"</td>\n      <td>").concat(t.firstName,"</td>\n      <td>").concat(t.lastName,"</td>\n      <td>").concat(t.email,"</td>\n      </tr>")}),n.document.getElementById("users").innerHTML=e;var r=n.document.getElementsByClassName("deleteUser");Array.from(r,function(t){t.onclick=function(t){var e=t.target;t.preventDefault(),Object(o.a)(e.attributes["data-id"].value);var r=e.parentNode.parentNode;r.parentNode.removeChild(r)}})})}.call(this,r(3))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(5);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(7)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(6)(!1)).push([t.i,"body {\n  font-family: sans-serif;\n  color: blueviolet;\n}\n\ntable th {\n  padding: 5px;\n}\n",""])},function(t,e,r){"use strict";t.exports=function(r){var s=[];return s.toString=function(){return this.map(function(t){var e=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,r);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},s.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];null!=o&&(r[o]=!0)}for(n=0;n<t.length;n++){var i=t[n];null!=i[0]&&r[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),s.push(i))}},s}},function(t,e,n){var r,o,i,u={},f=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=(i={},function(t,e){if("function"==typeof t)return t();if(void 0===i[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}i[t]=r}return i[t]}),a=null,c=0,l=[],d=n(8);function h(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=u[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(w(n.parts[i],e))}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(w(n.parts[i],e));u[n.id]={id:n.id,refs:1,parts:s}}}}function p(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function y(t,e){var r=s(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,r);r.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);0<=e&&l.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),y(t,e),e}function m(e,r){Object.keys(r).forEach(function(t){e.setAttribute(t,r[t])})}function w(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;r=a=a||v(t),n=A.bind(null,r,s,!1),o=A.bind(null,r,s,!0)}else o=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),y(t,e),e}(t),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=d(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,r,t),function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(t),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),function(){b(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}t.exports=function(t,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(s=s||{}).attrs="object"==typeof s.attrs?s.attrs:{},s.singleton||"boolean"==typeof s.singleton||(s.singleton=f()),s.insertInto||(s.insertInto="head"),s.insertAt||(s.insertAt="bottom");var a=p(t,s);return h(a,s),function(t){for(var e=[],r=0;r<a.length;r++){var n=a[r];(o=u[n.id]).refs--,e.push(o)}t&&h(p(t,s),s);for(r=0;r<e.length;r++){var o;if(0===(o=e[r]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete u[o.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function A(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,i=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,n=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n)?t:(r=0===n.indexOf("//")?n:0===n.indexOf("/")?o+n:i+n.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);
//# sourceMappingURL=bundle.js.map