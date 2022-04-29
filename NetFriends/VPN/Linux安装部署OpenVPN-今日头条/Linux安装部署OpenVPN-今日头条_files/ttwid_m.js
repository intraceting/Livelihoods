(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"0718a297274f7ebd88bd":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var n=r("d7c625d1f2819028b697");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i={NODE_CLIENT:false,NODE_ADMIN:false,SDK_VERSION:"${JSCORE_VERSION}"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var a=function(e,t){if(!e)throw o(t)};var o=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s=function(e){var t=[];var r=0;for(var n=0;n<e.length;n++){var i=e.charCodeAt(n);if(i<128)t[r++]=i;else if(i<2048){t[r++]=i>>6|192;t[r++]=63&i|128}else if(55296===(64512&i)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))){i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n));t[r++]=i>>18|240;t[r++]=i>>12&63|128;t[r++]=i>>6&63|128;t[r++]=63&i|128}else{t[r++]=i>>12|224;t[r++]=i>>6&63|128;t[r++]=63&i|128}}return t};var c=function(e){var t=[];var r=0,n=0;while(r<e.length){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var a=e[r++];var o=e[r++];var s=e[r++];var c=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(c>>10));t[n++]=String.fromCharCode(56320+(1023&c))}else{var a=e[r++];var o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")};var u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz"+"0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_;var n=[];for(var i=0;i<e.length;i+=3){var a=e[i];var o=i+1<e.length;var s=o?e[i+1]:0;var c=i+2<e.length;var u=c?e[i+2]:0;var f=a>>2;var l=(3&a)<<4|s>>4;var d=(15&s)<<2|u>>6;var p=63&u;if(!c){p=64;if(!o)d=64}n.push(r[f],r[l],r[d],r[p])}return n.join("")},encodeString:function(e,t){if(this.HAS_NATIVE_SUPPORT&&!t)return btoa(e);return this.encodeByteArray(s(e),t)},decodeString:function(e,t){if(this.HAS_NATIVE_SUPPORT&&!t)return atob(e);return c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();var r=t?this.charToByteMapWebSafe_:this.charToByteMap_;var n=[];for(var i=0;i<e.length;){var a=r[e.charAt(i++)];var o=i<e.length;var s=o?r[e.charAt(i)]:0;++i;var c=i<e.length;var u=c?r[e.charAt(i)]:64;++i;var f=i<e.length;var l=f?r[e.charAt(i)]:64;++i;if(null==a||null==s||null==u||null==l)throw Error();var d=a<<2|s>>4;n.push(d);if(64!==u){var p=s<<4&240|u>>2;n.push(p);if(64!==l){var h=u<<6&192|l;n.push(h)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={};this.charToByteMap_={};this.byteToCharMapWebSafe_={};this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++){this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e);this.charToByteMap_[this.byteToCharMap_[e]]=e;this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e);this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e;if(e>=this.ENCODED_VALS_BASE.length){this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e;this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e}}}}};var f=function(e){var t=s(e);return u.encodeByteArray(t,true)};var l=function(e){try{return u.decodeString(e,true)}catch(t){void 0}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var r=t;return new Date(r.getTime());case Object:if(void 0===e)e={};break;case Array:e=[];break;default:return t}for(var n in t){if(!t.hasOwnProperty(n))continue;e[n]=p(e[n],t[n])}return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h=function(){function e(){var e=this;this.reject=function(){};this.resolve=function(){};this.promise=new Promise((function(t,r){e.resolve=t;e.reject=r}))}e.prototype.wrapCallback=function(e){var t=this;return function(r,n){if(r)t.reject(r);else t.resolve(n);if("function"===typeof e){t.promise.catch((function(){}));if(1===e.length)e(r);else e(r,n)}}};return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){if("undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"])return navigator["userAgent"];else return""}function b(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function g(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return false}}function m(){return"object"===typeof self&&self.self===self}function y(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function _(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return v().indexOf("Electron/")>=0}function E(){var e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return v().indexOf("MSAppHost/")>=0}function S(){return true===i.NODE_CLIENT||true===i.NODE_ADMIN}function C(){return!g()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){return"indexedDB"in self&&null!=indexedDB}function j(){return new Promise((function(e,t){try{var r=true;var n="validate-browser-context-for-indexeddb-analytics-module";var i=window.indexedDB.open(n);i.onsuccess=function(){i.result.close();if(!r)window.indexedDB.deleteDatabase(n);e(true)};i.onupgradeneeded=function(){r=false};i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(a){t(a)}}))}function I(){if(!navigator||!navigator.cookieEnabled)return false;return true}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N="FirebaseError";var T=function(e){n.__extends(t,e);function t(r,n){var i=e.call(this,n)||this;i.code=r;i.name=N;Object.setPrototypeOf(i,t.prototype);if(Error.captureStackTrace)Error.captureStackTrace(i,x.prototype.create);return i}return t}(Error);var x=function(){function e(e,t,r){this.service=e;this.serviceName=t;this.errors=r}e.prototype.create=function(e){var t=[];for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=t[0]||{};var i=this.service+"/"+e;var a=this.errors[e];var o=a?R(a,n):"Error";var s=this.serviceName+": "+o+" ("+i+").";var c=new T(i,s);for(var u=0,f=Object.keys(n);u<f.length;u++){var l=f[u];if("_"!==l.slice(-1)){if(l in c)void 0;c[l]=n[l]}}return c};return e}();function R(e,t){return e.replace(D,(function(e,r){var n=t[r];return null!=n?String(n):"<"+r+"?>"}))}var D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return JSON.parse(e)}function P(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k=function(e){var t={},r={},n={},i="";try{var a=e.split(".");t=L(l(a[0])||"");r=L(l(a[1])||"");i=a[2];n=r["d"]||{};delete r["d"]}catch(o){}return{header:t,claims:r,data:n,signature:i}};var B=function(e){var t=k(e).claims;var r=Math.floor((new Date).getTime()/1e3);var n=0,i=0;if("object"===typeof t){if(t.hasOwnProperty("nbf"))n=t["nbf"];else if(t.hasOwnProperty("iat"))n=t["iat"];if(t.hasOwnProperty("exp"))i=t["exp"];else i=n+86400}return!!r&&!!n&&!!i&&r>=n&&r<=i};var F=function(e){var t=k(e).claims;if("object"===typeof t&&t.hasOwnProperty("iat"))return t["iat"];return null};var M=function(e){var t=k(e),r=t.claims;return!!r&&"object"===typeof r&&r.hasOwnProperty("iat")};var U=function(e){var t=k(e).claims;return"object"===typeof t&&true===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function H(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];else return}function q(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return false;return true}function z(e,t,r){var n={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))n[i]=t.call(r,e[i],i,e);return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){var t=[];var r=function(e,r){if(Array.isArray(r))r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}));else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))};for(var n=0,i=Object.entries(e);n<i.length;n++){var a=i[n],o=a[0],s=a[1];r(o,s)}return t.length?"&"+t.join("&"):""}function K(e){var t={};var r=e.replace(/^\?/,"").split("&");r.forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}}));return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $=function(){function e(){this.chain_=[];this.buf_=[];this.W_=[];this.pad_=[];this.inbuf_=0;this.total_=0;this.blockSize=512/8;this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193;this.chain_[1]=4023233417;this.chain_[2]=2562383102;this.chain_[3]=271733878;this.chain_[4]=3285377520;this.inbuf_=0;this.total_=0};e.prototype.compress_=function(e,t){if(!t)t=0;var r=this.W_;if("string"===typeof e)for(var n=0;n<16;n++){r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3);t+=4}else for(var n=0;n<16;n++){r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3];t+=4}for(var n=16;n<80;n++){var i=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(i<<1|i>>>31)}var a=this.chain_[0];var o=this.chain_[1];var s=this.chain_[2];var c=this.chain_[3];var u=this.chain_[4];var f,l;for(var n=0;n<80;n++){if(n<40)if(n<20){f=c^o&(s^c);l=1518500249}else{f=o^s^c;l=1859775393}else if(n<60){f=o&s|c&(o|s);l=2400959708}else{f=o^s^c;l=3395469782}var i=(a<<5|a>>>27)+f+u+l+r[n]&4294967295;u=c;c=s;s=4294967295&(o<<30|o>>>2);o=a;a=i}this.chain_[0]=this.chain_[0]+a&4294967295;this.chain_[1]=this.chain_[1]+o&4294967295;this.chain_[2]=this.chain_[2]+s&4294967295;this.chain_[3]=this.chain_[3]+c&4294967295;this.chain_[4]=this.chain_[4]+u&4294967295};e.prototype.update=function(e,t){if(null==e)return;if(void 0===t)t=e.length;var r=t-this.blockSize;var n=0;var i=this.buf_;var a=this.inbuf_;while(n<t){if(0===a)while(n<=r){this.compress_(e,n);n+=this.blockSize}if("string"===typeof e)while(n<t){i[a]=e.charCodeAt(n);++a;++n;if(a===this.blockSize){this.compress_(i);a=0;break}}else while(n<t){i[a]=e[n];++a;++n;if(a===this.blockSize){this.compress_(i);a=0;break}}}this.inbuf_=a;this.total_+=t};e.prototype.digest=function(){var e=[];var t=8*this.total_;if(this.inbuf_<56)this.update(this.pad_,56-this.inbuf_);else this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--){this.buf_[r]=255&t;t/=256}this.compress_(this.buf_);var n=0;for(var r=0;r<5;r++)for(var i=24;i>=0;i-=8){e[n]=this.chain_[r]>>i&255;++n}return e};return e}();function J(e,t){var r=new G(e,t);return r.subscribe.bind(r)}var G=function(){function e(e,t){var r=this;this.observers=[];this.unsubscribes=[];this.observerCount=0;this.task=Promise.resolve();this.finalized=false;this.onNoObservers=t;this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))};e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)}));this.close(e)};e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()}));this.close()};e.prototype.subscribe=function(e,t,r){var n=this;var i;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");if(Y(e,["next","error","complete"]))i=e;else i={next:e,error:t,complete:r};if(void 0===i.next)i.next=Z;if(void 0===i.error)i.error=Z;if(void 0===i.complete)i.complete=Z;var a=this.unsubscribeOne.bind(this,this.observers.length);if(this.finalized)this.task.then((function(){try{if(n.finalError)i.error(n.finalError);else i.complete()}catch(e){}return}));this.observers.push(i);return a};e.prototype.unsubscribeOne=function(e){if(void 0===this.observers||void 0===this.observers[e])return;delete this.observers[e];this.observerCount-=1;if(0===this.observerCount&&void 0!==this.onNoObservers)this.onNoObservers(this)};e.prototype.forEachObserver=function(e){if(this.finalized)return;for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)};e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(n){if("undefined"!==typeof console&&console.error)void 0}}))};e.prototype.close=function(e){var t=this;if(this.finalized)return;this.finalized=true;if(void 0!==e)this.finalError=e;this.task.then((function(){t.observers=void 0;t.onNoObservers=void 0}))};return e}();function X(e,t){return function(){var r=[];for(var n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(true).then((function(){e.apply(void 0,r)})).catch((function(e){if(t)t(e)}))}}function Y(e,t){if("object"!==typeof e||null===e)return false;for(var r=0,n=t;r<n.length;r++){var i=n[r];if(i in e&&"function"===typeof e[i])return true}return false}function Z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q=function(e,t,r,n){var i;if(n<t)i="at least "+t;else if(n>r)i=0===r?"none":"no more than "+r;if(i){var a=e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+i+".";throw new Error(a)}};function ee(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var i=e+" failed: ";i+=n+" argument ";return i}function te(e,t,r,n){if(n&&!r)return;if("string"!==typeof r)throw new Error(ee(e,t,n)+"must be a valid firebase namespace.")}function re(e,t,r,n){if(n&&!r)return;if("function"!==typeof r)throw new Error(ee(e,t,n)+"must be a valid function.")}function ne(e,t,r,n){if(n&&!r)return;if("object"!==typeof r||null===r)throw new Error(ee(e,t,n)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie=function(e){var t=[];var r=0;for(var n=0;n<e.length;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319){var o=i-55296;n++;a(n<e.length,"Surrogate pair missing trail surrogate.");var s=e.charCodeAt(n)-56320;i=65536+(o<<10)+s}if(i<128)t[r++]=i;else if(i<2048){t[r++]=i>>6|192;t[r++]=63&i|128}else if(i<65536){t[r++]=i>>12|224;t[r++]=i>>6&63|128;t[r++]=63&i|128}else{t[r++]=i>>18|240;t[r++]=i>>12&63|128;t[r++]=i>>6&63|128;t[r++]=63&i|128}}return t};var ae=function(e){var t=0;for(var r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<128)t++;else if(n<2048)t+=2;else if(n>=55296&&n<=56319){t+=4;r++}else t+=3}return t};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe=1e3;var se=2;var ce=4*60*60*1e3;var ue=.5;function fe(e,t,r){if(void 0===t)t=oe;if(void 0===r)r=se;var n=t*Math.pow(r,e);var i=Math.round(ue*n*(Math.random()-.5)*2);return Math.min(ce,n+i)}t.CONSTANTS=i;t.Deferred=h;t.ErrorFactory=x;t.FirebaseError=T;t.MAX_VALUE_MILLIS=ce;t.RANDOM_FACTOR=ue;t.Sha1=$;t.areCookiesEnabled=I;t.assert=a;t.assertionError=o;t.async=X;t.base64=u;t.base64Decode=l;t.base64Encode=f;t.calculateBackoffMillis=fe;t.contains=V;t.createSubscribe=J;t.decode=k;t.deepCopy=d;t.deepExtend=p;t.errorPrefix=ee;t.getUA=v;t.isAdmin=U;t.isBrowser=m;t.isBrowserExtension=y;t.isElectron=w;t.isEmpty=q;t.isIE=E;t.isIndexedDBAvailable=A;t.isMobileCordova=b;t.isNode=g;t.isNodeSdk=S;t.isReactNative=_;t.isSafari=C;t.isUWP=O;t.isValidFormat=M;t.isValidTimestamp=B;t.issuedAtTime=F;t.jsonEval=L;t.map=z;t.querystring=W;t.querystringDecode=K;t.safeGet=H;t.stringLength=ae;t.stringToByteArray=ie;t.stringify=P;t.validateArgCount=Q;t.validateCallback=re;t.validateContextObject=ne;t.validateIndexedDBOpenable=j;t.validateNamespace=te}).call(this,r("8d2e5dc4d0d8f66a72c4"))},"14d32ac33415d31fe77c":function(e,t,r){"use strict";var n=r("54b16333e25b66271488");var i=r("b708c925d51f0e78abde");var a=r("888b26706614c243e128");var o=r("3820de998ec937aebbc7");var s=r("b3383ba0ca94a1027927");function c(e){var t=new a(e);var r=i(a.prototype.request,t);n.extend(r,a.prototype,t);n.extend(r,t);return r}var u=c(s);u.Axios=a;u.create=function e(t){return c(o(u.defaults,t))};u.Cancel=r("449c309fcff3d41a7ea2");u.CancelToken=r("7878ae582630965b59d1");u.isCancel=r("92e2e9ea8bfb876e7a50");u.all=function e(t){return Promise.all(t)};u.spread=r("7418e059ae9abf403274");u.isAxiosError=r("993b761421ed960c0dd5");e.exports=u;e.exports.default=u},"1517d5fd7a66619811ae":function(e,t,r){"use strict";var n=r("54b16333e25b66271488");e.exports=function e(t,r,i){n.forEach(i,(function e(n){t=n(t,r)}));return t}},"2535a684f351f511d22b":function(e,t,r){"use strict";var n=r("54b16333e25b66271488");e.exports=function e(t,r){n.forEach(t,(function e(n,i){if(i!==r&&i.toUpperCase()===r.toUpperCase()){t[r]=n;delete t[i]}}))}},"28a99c90e0f4755a71e5":function(e,t,r){"use strict";e.exports=function e(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t}},"2cdc38a8ac4466d2071c":function(e,t,r){"use strict";var n=r("8e3ec0f46efb7e16d283");var i=r("28a99c90e0f4755a71e5");e.exports=function e(t,r){if(t&&!n(r))return i(t,r);return r}},"3820de998ec937aebbc7":function(e,t,r){"use strict";var n=r("54b16333e25b66271488");e.exports=function e(t,r){r=r||{};var i={};var a=["url","method","data"];var o=["headers","auth","proxy","params"];var s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"];var c=["validateStatus"];function u(e,t){if(n.isPlainObject(e)&&n.isPlainObject(t))return n.merge(e,t);else if(n.isPlainObject(t))return n.merge({},t);else if(n.isArray(t))return t.slice();return t}function f(e){if(!n.isUndefined(r[e]))i[e]=u(t[e],r[e]);else if(!n.isUndefined(t[e]))i[e]=u(void 0,t[e])}n.forEach(a,(function e(t){if(!n.isUndefined(r[t]))i[t]=u(void 0,r[t])}));n.forEach(o,f);n.forEach(s,(function e(a){if(!n.isUndefined(r[a]))i[a]=u(void 0,r[a]);else if(!n.isUndefined(t[a]))i[a]=u(void 0,t[a])}));n.forEach(c,(function e(n){if(n in r)i[n]=u(t[n],r[n]);else if(n in t)i[n]=u(void 0,t[n])}));var l=a.concat(o).concat(s).concat(c);var d=Object.keys(t).concat(Object.keys(r)).filter((function e(t){return-1===l.indexOf(t)}));n.forEach(d,f);return i}},"3bb78169942ff9025484":function(e,t,r){"use strict";r.r(t);r.d(t,"LogLevel",(function(){return o}));r.d(t,"Logger",(function(){return l}));r.d(t,"setLogLevel",(function(){return d}));r.d(t,"setUserLogHandler",(function(){return p}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function n(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)n[i]=a[o];return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;var a=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG";e[e["VERBOSE"]=1]="VERBOSE";e[e["INFO"]=2]="INFO";e[e["WARN"]=3]="WARN";e[e["ERROR"]=4]="ERROR";e[e["SILENT"]=5]="SILENT"})(o||(o={}));var s={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT};var c=o.INFO;var u=(i={},i[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i);var f=function(e,t){var r=[];for(var n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(t<e.logLevel)return;var i=(new Date).toISOString();var a=u[t];if(a)void 0;else throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")};var l=function(){function e(e){this.name=e;this._logLevel=c;this._logHandler=f;this._userLogHandler=null;a.push(this)}Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:false,configurable:true});e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?s[e]:e};Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:false,configurable:true});e.prototype.debug=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,o.DEBUG],e));this._logHandler.apply(this,n([this,o.DEBUG],e))};e.prototype.log=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,o.VERBOSE],e));this._logHandler.apply(this,n([this,o.VERBOSE],e))};e.prototype.info=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,o.INFO],e));this._logHandler.apply(this,n([this,o.INFO],e))};e.prototype.warn=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,o.WARN],e));this._logHandler.apply(this,n([this,o.WARN],e))};e.prototype.error=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,o.ERROR],e));this._logHandler.apply(this,n([this,o.ERROR],e))};return e}();function d(e){a.forEach((function(t){t.setLogLevel(e)}))}function p(e,t){var r=function(r){var n=null;if(t&&t.level)n=s[t.level];if(null===e)r.userLogHandler=null;else r.userLogHandler=function(t,r){var i=[];for(var a=2;a<arguments.length;a++)i[a-2]=arguments[a];var s=i.map((function(e){if(null==e)return null;else if("string"===typeof e)return e;else if("number"===typeof e||"boolean"===typeof e)return e.toString();else if(e instanceof Error)return e.message;else try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");if(r>=(null!==n&&void 0!==n?n:t.logLevel))e({level:o[r].toLowerCase(),message:s,args:i,type:t.name})}};for(var n=0,i=a;n<i.length;n++){var c=i[n];r(c)}}},"449c309fcff3d41a7ea2":function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function e(){return"Cancel"+(this.message?": "+this.message:"")};n.prototype.__CANCEL__=true;e.exports=n},"54b16333e25b66271488":function(e,t,r){"use strict";var n=r("b708c925d51f0e78abde");var i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function o(e){return"undefined"===typeof e}function s(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;if("undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView)t=ArrayBuffer.isView(e);else t=e&&e.buffer&&e.buffer instanceof ArrayBuffer;return t}function l(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==i.call(e))return false;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function v(e){return"[object Date]"===i.call(e)}function b(e){return"[object File]"===i.call(e)}function g(e){return"[object Blob]"===i.call(e)}function m(e){return"[object Function]"===i.call(e)}function y(e){return p(e)&&m(e.pipe)}function _(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function E(){if("undefined"!==typeof navigator&&("ReactNative"===navigator.product||"NativeScript"===navigator.product||"NS"===navigator.product))return false;return"undefined"!==typeof window&&"undefined"!==typeof document}function O(e,t){if(null===e||"undefined"===typeof e)return;if("object"!==typeof e)e=[e];if(a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))t.call(null,e[i],i,e)}function S(){var e={};function t(t,r){if(h(e[r])&&h(t))e[r]=S(e[r],t);else if(h(t))e[r]=S({},t);else if(a(t))e[r]=t.slice();else e[r]=t}for(var r=0,n=arguments.length;r<n;r++)O(arguments[r],t);return e}function C(e,t,r){O(t,(function t(i,a){if(r&&"function"===typeof i)e[a]=n(i,r);else e[a]=i}));return e}function A(e){if(65279===e.charCodeAt(0))e=e.slice(1);return e}e.exports={isArray:a,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:f,isString:l,isNumber:d,isObject:p,isPlainObject:h,isUndefined:o,isDate:v,isFile:b,isBlob:g,isFunction:m,isStream:y,isURLSearchParams:_,isStandardBrowserEnv:E,forEach:O,merge:S,extend:C,trim:w,stripBOM:A}},"661a7f5bb92d360b00fc":function(e,t,r){"use strict";var n=r("54b16333e25b66271488");e.exports=n.isStandardBrowserEnv()?function e(){var t=/(msie|trident)/i.test(navigator.userAgent);var r=document.createElement("a");var i;function a(e){var n=e;if(t){r.setAttribute("href",n);n=r.href}r.setAttribute("href",n);return{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}i=a(window.location.href);return function e(t){var r=n.isString(t)?a(t):t;return r.protocol===i.protocol&&r.host===i.host}}():function e(){return function e(){return true}}()},"6a69aa1ae723b5d1f894":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n;(function(e){e[e["COOKIE_READ_DEFAULT"]=0]="COOKIE_READ_DEFAULT";e[e["COOKIE_READ_TEA_PRIOR"]=1]="COOKIE_READ_TEA_PRIOR"})(n=t.CookieReadConfigEnum||(t.CookieReadConfigEnum={}))},"6f3731e98f9509881d1a":function(e,t,r){"use strict";var n=r("a7c5536396f2fdc3ec98");e.exports=function e(t,r,i){var a=i.config.validateStatus;if(!i.status||!a||a(i.status))t(i);else r(n("Request failed with status code "+i.status,i.config,null,i.request,i))}},"7418e059ae9abf403274":function(e,t,r){"use strict";e.exports=function e(t){return function e(r){return t.apply(null,r)}}},"7878ae582630965b59d1":function(e,t,r){"use strict";var n=r("449c309fcff3d41a7ea2");function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function e(r){t=r}));var r=this;e((function e(i){if(r.reason)return;r.reason=new n(i);t(r.reason)}))}i.prototype.throwIfRequested=function e(){if(this.reason)throw this.reason};i.source=function e(){var t;var r=new i((function e(r){t=r}));return{token:r,cancel:t}};e.exports=i},"86e2276f6b649ca52841":function(e,t,r){"use strict";var n=r("54b16333e25b66271488");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function e(t,r,a){if(!r)return t;var o;if(a)o=a(r);else if(n.isURLSearchParams(r))o=r.toString();else{var s=[];n.forEach(r,(function e(t,r){if(null===t||"undefined"===typeof t)return;if(n.isArray(t))r+="[]";else t=[t];n.forEach(t,(function e(t){if(n.isDate(t))t=t.toISOString();else if(n.isObject(t))t=JSON.stringify(t);s.push(i(r)+"="+i(t))}))}));o=s.join("&")}if(o){var c=t.indexOf("#");if(-1!==c)t=t.slice(0,c);t+=(-1===t.indexOf("?")?"?":"&")+o}return t}},"876c6ac38d000d813494":function(e,t,r){"use strict";var n=r("54b16333e25b66271488");var i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function e(t){var r={};var a;var o;var s;if(!t)return r;n.forEach(t.split("\n"),(function e(t){s=t.indexOf(":");a=n.trim(t.substr(0,s)).toLowerCase();o=n.trim(t.substr(s+1));if(a){if(r[a]&&i.indexOf(a)>=0)return;if("set-cookie"===a)r[a]=(r[a]?r[a]:[]).concat([o]);else r[a]=r[a]?r[a]+", "+o:o}}));return r}},"888b26706614c243e128":function(e,t,r){"use strict";var n=r("54b16333e25b66271488");var i=r("86e2276f6b649ca52841");var a=r("e70bb154504cb283633b");var o=r("e759938188324e641243");var s=r("3820de998ec937aebbc7");function c(e){this.defaults=e;this.interceptors={request:new a,response:new a}}c.prototype.request=function e(t){if("string"===typeof t){t=arguments[1]||{};t.url=arguments[0]}else t=t||{};t=s(this.defaults,t);if(t.method)t.method=t.method.toLowerCase();else if(this.defaults.method)t.method=this.defaults.method.toLowerCase();else t.method="get";var r=[o,void 0];var n=Promise.resolve(t);this.interceptors.request.forEach((function e(t){r.unshift(t.fulfilled,t.rejected)}));this.interceptors.response.forEach((function e(t){r.push(t.fulfilled,t.rejected)}));while(r.length)n=n.then(r.shift(),r.shift());return n};c.prototype.getUri=function e(t){t=s(this.defaults,t);return i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")};n.forEach(["delete","get","head","options"],(function e(t){c.prototype[t]=function(e,r){return this.request(s(r||{},{method:t,url:e,data:(r||{}).data}))}}));n.forEach(["post","put","patch"],(function e(t){c.prototype[t]=function(e,r,n){return this.request(s(n||{},{method:t,url:e,data:r}))}}));e.exports=c},"896cf1b61dea254f9102":function(e,t,r){"use strict";e.exports=function e(t,r,n,i,a){t.config=r;if(n)t.code=n;t.request=i;t.response=a;t.isAxiosError=true;t.toJSON=function e(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}};return t}},"89ba929c38d306d9606e":function(e,t,r){"use strict";var n=r("d7aeecaac6359becf083");function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=i(n);var o="firebase";var s="7.24.0";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */a["default"].registerVersion(o,s,"app");e.exports=a["default"]},"8e3ec0f46efb7e16d283":function(e,t,r){"use strict";e.exports=function e(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},"92e2e9ea8bfb876e7a50":function(e,t,r){"use strict";e.exports=function e(t){return!!(t&&t.__CANCEL__)}},"993b761421ed960c0dd5":function(e,t,r){"use strict";e.exports=function e(t){return"object"===typeof t&&true===t.isAxiosError}},"9b6650a046270e743bbd":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r("d7c625d1f2819028b697");var i=n.__importDefault(r("7a1eeed1211a72788b85"));i.default.polyfill();var a=r("bb01eee5d2c2fa334b83");t.TtWid=a.TtWid},a7c5536396f2fdc3ec98:function(e,t,r){"use strict";var n=r("896cf1b61dea254f9102");e.exports=function e(t,r,i,a,o){var s=new Error(t);return n(s,r,i,a,o)}},a96abe811275515be5bf:function(e,t,r){"use strict";var n=r("54b16333e25b66271488");var i=r("6f3731e98f9509881d1a");var a=r("c6bd12d023e8c37cf292");var o=r("86e2276f6b649ca52841");var s=r("2cdc38a8ac4466d2071c");var c=r("876c6ac38d000d813494");var u=r("661a7f5bb92d360b00fc");var f=r("a7c5536396f2fdc3ec98");e.exports=function e(t){return new Promise((function e(r,l){var d=t.data;var p=t.headers;if(n.isFormData(d))delete p["Content-Type"];var h=new XMLHttpRequest;if(t.auth){var v=t.auth.username||"";var b=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.Authorization="Basic "+btoa(v+":"+b)}var g=s(t.baseURL,t.url);h.open(t.method.toUpperCase(),o(g,t.params,t.paramsSerializer),true);h.timeout=t.timeout;h.onreadystatechange=function e(){if(!h||4!==h.readyState)return;if(0===h.status&&!(h.responseURL&&0===h.responseURL.indexOf("file:")))return;var n="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null;var a=!t.responseType||"text"===t.responseType?h.responseText:h.response;var o={data:a,status:h.status,statusText:h.statusText,headers:n,config:t,request:h};i(r,l,o);h=null};h.onabort=function e(){if(!h)return;l(f("Request aborted",t,"ECONNABORTED",h));h=null};h.onerror=function e(){l(f("Network Error",t,null,h));h=null};h.ontimeout=function e(){var r="timeout of "+t.timeout+"ms exceeded";if(t.timeoutErrorMessage)r=t.timeoutErrorMessage;l(f(r,t,"ECONNABORTED",h));h=null};if(n.isStandardBrowserEnv()){var m=(t.withCredentials||u(g))&&t.xsrfCookieName?a.read(t.xsrfCookieName):void 0;if(m)p[t.xsrfHeaderName]=m}if("setRequestHeader"in h)n.forEach(p,(function e(t,r){if("undefined"===typeof d&&"content-type"===r.toLowerCase())delete p[r];else h.setRequestHeader(r,t)}));if(!n.isUndefined(t.withCredentials))h.withCredentials=!!t.withCredentials;if(t.responseType)try{h.responseType=t.responseType}catch(y){if("json"!==t.responseType)throw y}if("function"===typeof t.onDownloadProgress)h.addEventListener("progress",t.onDownloadProgress);if("function"===typeof t.onUploadProgress&&h.upload)h.upload.addEventListener("progress",t.onUploadProgress);if(t.cancelToken)t.cancelToken.promise.then((function e(t){if(!h)return;h.abort();l(t);h=null}));if(!d)d=null;h.send(d)}))}},b3383ba0ca94a1027927:function(e,t,r){"use strict";(function(t){var n=r("54b16333e25b66271488");var i=r("2535a684f351f511d22b");var a={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){if(!n.isUndefined(e)&&n.isUndefined(e["Content-Type"]))e["Content-Type"]=t}function s(){var e;if("undefined"!==typeof XMLHttpRequest)e=r("a96abe811275515be5bf");else if("undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))e=r("a96abe811275515be5bf");return e}var c={adapter:s(),transformRequest:[function e(t,r){i(r,"Accept");i(r,"Content-Type");if(n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t))return t;if(n.isArrayBufferView(t))return t.buffer;if(n.isURLSearchParams(t)){o(r,"application/x-www-form-urlencoded;charset=utf-8");return t.toString()}if(n.isObject(t)){o(r,"application/json;charset=utf-8");return JSON.stringify(t)}return t}],transformResponse:[function e(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(r){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function e(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}};n.forEach(["delete","get","head"],(function e(t){c.headers[t]={}}));n.forEach(["post","put","patch"],(function e(t){c.headers[t]=n.merge(a)}));e.exports=c}).call(this,r("005244bbe93dd44dd60f"))},b708c925d51f0e78abde:function(e,t,r){"use strict";e.exports=function e(t,r){return function e(){var n=new Array(arguments.length);for(var i=0;i<n.length;i++)n[i]=arguments[i];return t.apply(r,n)}}},bb01eee5d2c2fa334b83:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r("d7c625d1f2819028b697");var i=n.__importDefault(r("dfc711a5435c89e06b1d"));var a=n.__importDefault(r("89ba929c38d306d9606e"));r("c5ee3a311b266595ccc9");var o=r("6a69aa1ae723b5d1f894");var s=3e3;var c={timeout:s,withCredentials:true,headers:{"content-type":"application/x-www-form-urlencoded"}};var u={apiKey:"AIzaSyCuM3x-qGZoez2mBUq1_RcNrRFysHdRxfY",authDomain:"byted-ucenter.firebaseapp.com",databaseURL:"https://byted-ucenter.firebaseio.com",projectId:"byted-ucenter",storageBucket:"byted-ucenter.appspot.com",messagingSenderId:"995120244681",appId:"1:995120244681:web:d175caeb43de4353deea18"};var f=function(){function e(e){var t=this;this.hostMap={cn:"https://ttwid.bytedance.com",va:"https://ttwid-va.byteoversea.com",sg:"https://ttwid-sg.byteoversea.com"};this.host="";this.installations=null;this.fid="";if(!e.region)e.region="cn";if("undefined"===typeof e.union)e.union=true;if("undefined"===typeof e.needFid)e.needFid=true;if(e.host)this.host=e.host;this.options=e;try{if(e.needFid){var r=a.default.initializeApp(u,"byted-webapp-register");var n=r.installations();if(n){this.installations=n;n.getId().then((function(e){if(void 0===e)e="";t.fid=e}))}}}catch(i){}}e.prototype.checkWebId=function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,r,a,s,u,f,l,d,d,p,h;return n.__generator(this,(function(v){switch(v.label){case 0:v.trys.push([0,14,,15]);t=e||o.CookieReadConfigEnum.COOKIE_READ_DEFAULT;r="";if(!this.options.needFid)return[3,3];a=this.fid;if(a)return[3,2];return[4,this.getInstanceId()];case 1:a=v.sent();v.label=2;case 2:r=a;v.label=3;case 3:return[4,i.default.post(this.host+"/ttwid/check/",n.__assign(n.__assign({},this.options),{fid:r,migrate_priority:t}),c)];case 4:s=v.sent();u=s.data,f=void 0===u?null:u;if(!(f&&f.status_code>1001))return[3,12];l=f.migrate_info;v.label=5;case 5:v.trys.push([5,10,,11]);if(!this.options.union)return[3,7];return[4,this.registerUnionWebId({migrate_info:l,fid:r})];case 6:d=v.sent();return[2,d];case 7:return[4,this.registerOpenWebId({migrate_info:l,fid:r})];case 8:d=v.sent();return[2,d];case 9:return[3,11];case 10:p=v.sent();return[2,f||s];case 11:return[3,13];case 12:return[2,f||s];case 13:return[3,15];case 14:h=v.sent();throw h;case 15:return[2]}}))}))};e.prototype.checkWebIdFromTea=function(){return n.__awaiter(this,void 0,void 0,(function(){var e,t,r,i,a,s,c;return n.__generator(this,(function(n){switch(n.label){case 0:n.trys.push([0,2,,3]);e=localStorage&&localStorage.getItem("__tea_cache_tokens_"+this.options.aid)||"";t=e&&JSON.parse(e)||{};r=t.web_id,i=void 0===r?"":r;if(i){a=new Date(Date.now()+24*60*60*1e3).toUTCString();document.cookie="_tea_web_id="+i+"; expires="+a+"; path=/;"}return[4,this.checkWebId(o.CookieReadConfigEnum.COOKIE_READ_TEA_PRIOR)];case 1:s=n.sent();return[2,s];case 2:c=n.sent();throw c;case 3:return[2]}}))}))};e.prototype.registerUnionWebId=function(e,t){return n.__awaiter(this,void 0,void 0,(function(){var r,a,o,s,u,f,l,d,p,h,v,b,g,m,y;return n.__generator(this,(function(_){switch(_.label){case 0:_.trys.push([0,6,,7]);r=this.options,a=r.region,o=void 0===a?"cn":a,s=r.unionHost,u=void 0===s?"":s,f=r.cbUrlProtocol,l=void 0===f?"":f;d=u||this.hostMap[o];return[4,i.default.post(d+"/ttwid/union/register/",n.__assign(n.__assign({},this.options),e),c)];case 1:p=_.sent();h=p.data,v=void 0===h?null:h;if(!(v&&v.redirect_url))return[3,5];_.label=2;case 2:_.trys.push([2,4,,5]);b=v.redirect_url;if(l&&b)b=b.replace(/^https?/,l);return[4,i.default.get(b,c)];case 3:g=_.sent();if(t)return[2,t(null,g.data||{})];return[2,g.data||{}];case 4:m=_.sent();if(t)return[2,t(m,v||{})];return[2,v];case 5:if(t)return[2,t(new Error("ttwid union register error"))];throw new Error("ttwid union register error");case 6:y=_.sent();if(t)return[2,t(y)];throw y;case 7:return[2]}}))}))};e.prototype.registerOpenWebId=function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,r;return n.__generator(this,(function(a){switch(a.label){case 0:a.trys.push([0,2,,3]);return[4,i.default.post(this.host+"/ttwid/register/",n.__assign(n.__assign({},this.options),e),c)];case 1:t=a.sent();return[2,t.data];case 2:r=a.sent();throw r;case 3:return[2]}}))}))};e.prototype.getInstanceId=function(){return n.__awaiter(this,void 0,void 0,(function(){var e=this;return n.__generator(this,(function(t){if(this.installations)return[2,new Promise((function(t,r){return n.__awaiter(e,void 0,void 0,(function(){var e,r;return n.__generator(this,(function(n){switch(n.label){case 0:setTimeout((function(){t("")}),2e3);n.label=1;case 1:n.trys.push([1,3,,4]);return[4,this.installations.getId()];case 2:e=n.sent();this.fid=e||"";t(e||"");return[3,4];case 3:r=n.sent();this.fid="";throw r;case 4:return[2]}}))}))}))];return[2,""]}))}))};e.prototype.deleteInstallation=function(){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(e){try{this.installations&&this.installations.delete()}catch(t){throw t}return[2]}))}))};return e}();t.TtWid=f},c2bc7d94d47c5ded8328:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r("d7c625d1f2819028b697");var i=r("0718a297274f7ebd88bd");var a=function(){function e(e,t,r){this.name=e;this.instanceFactory=t;this.type=r;this.multipleInstances=false;this.serviceProps={};this.instantiationMode="LAZY"}e.prototype.setInstantiationMode=function(e){this.instantiationMode=e;return this};e.prototype.setMultipleInstances=function(e){this.multipleInstances=e;return this};e.prototype.setServiceProps=function(e){this.serviceProps=e;return this};return e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s=function(){function e(e,t){this.name=e;this.container=t;this.component=null;this.instances=new Map;this.instancesDeferred=new Map}e.prototype.get=function(e){if(void 0===e)e=o;var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new i.Deferred;this.instancesDeferred.set(t,r);try{var n=this.getOrInitializeService(t);if(n)r.resolve(n)}catch(a){}}return this.instancesDeferred.get(t).promise};e.prototype.getImmediate=function(e){var t=n.__assign({identifier:o,optional:false},e),r=t.identifier,i=t.optional;var a=this.normalizeInstanceIdentifier(r);try{var s=this.getOrInitializeService(a);if(!s){if(i)return null;throw Error("Service "+this.name+" is not available")}return s}catch(c){if(i)return null;else throw c}};e.prototype.getComponent=function(){return this.component};e.prototype.setComponent=function(e){var t,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");this.component=e;if(u(e))try{this.getOrInitializeService(o)}catch(p){}try{for(var i=n.__values(this.instancesDeferred.entries()),a=i.next();!a.done;a=i.next()){var s=n.__read(a.value,2),c=s[0],f=s[1];var l=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService(l);f.resolve(d)}catch(p){}}}catch(h){t={error:h}}finally{try{if(a&&!a.done&&(r=i.return))r.call(i)}finally{if(t)throw t.error}}};e.prototype.clearInstance=function(e){if(void 0===e)e=o;this.instancesDeferred.delete(e);this.instances.delete(e)};e.prototype.delete=function(){return n.__awaiter(this,void 0,void 0,(function(){var e;return n.__generator(this,(function(t){switch(t.label){case 0:e=Array.from(this.instances.values());return[4,Promise.all(n.__spread(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:t.sent();return[2]}}))}))};e.prototype.isComponentSet=function(){return null!=this.component};e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);if(!t&&this.component){t=this.component.instanceFactory(this.container,c(e));this.instances.set(e,t)}return t||null};e.prototype.normalizeInstanceIdentifier=function(e){if(this.component)return this.component.multipleInstances?e:o;else return e};return e}();function c(e){return e===o?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f=function(){function e(e){this.name=e;this.providers=new Map}e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)};e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())this.providers.delete(e.name);this.addComponent(e)};e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new s(e,this);this.providers.set(e,t);return t};e.prototype.getProviders=function(){return Array.from(this.providers.values())};return e}();t.Component=a;t.ComponentContainer=f;t.Provider=s},c5ee3a311b266595ccc9:function(e,t,r){"use strict";r.r(t);var n=r("d7aeecaac6359becf083");var i=r.n(n);var a=r("c2bc7d94d47c5ded8328");var o=r("d7c625d1f2819028b697");var s=r("0718a297274f7ebd88bd");var c=r("2c5a5ea9b95521ddc6f6");var u="@firebase/installations";var f="0.4.17";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=1e4;var d="w:"+f;var p="FIS_v2";var h="https://firebaseinstallations.googleapis.com/v1";var v=60*60*1e3;var b="installations";var g="Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;var y=(m={},m["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',m["not-registered"]="Firebase Installation is not registered.",m["installation-not-found"]="Firebase Installation not found.",m["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',m["app-offline"]="Could not process request. Application offline.",m["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",m);var _=new s["ErrorFactory"](b,g,y);function w(e){return e instanceof s["FirebaseError"]&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){var t=e.projectId;return h+"/projects/"+t+"/installations"}function O(e){return{token:e.token,requestStatus:2,expiresIn:I(e.expiresIn),creationTime:Date.now()}}function S(e,t){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r,n;return Object(o["__generator"])(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:r=i.sent();n=r.error;return[2,_.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}}))}))}function C(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function A(e,t){var r=t.refreshToken;var n=C(e);n.append("Authorization",N(r));return n}function j(e){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(o["__generator"])(this,(function(r){switch(r.label){case 0:return[4,e()];case 1:t=r.sent();if(t.status>=500&&t.status<600)return[2,e()];return[2,t]}}))}))}function I(e){return Number(e.replace("s","000"))}function N(e){return p+" "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){var r=t.fid;return Object(o["__awaiter"])(this,void 0,void 0,(function(){var t,n,i,a,s,c,u;return Object(o["__generator"])(this,(function(o){switch(o.label){case 0:t=E(e);n=C(e);i={fid:r,authVersion:p,appId:e.appId,sdkVersion:d};a={method:"POST",headers:n,body:JSON.stringify(i)};return[4,j((function(){return fetch(t,a)}))];case 1:s=o.sent();if(!s.ok)return[3,3];return[4,s.json()];case 2:c=o.sent();u={fid:c.fid||r,registrationStatus:2,refreshToken:c.refreshToken,authToken:O(c.authToken)};return[2,u];case 3:return[4,S("Create Installation",s)];case 4:throw o.sent()}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){var t=btoa(String.fromCharCode.apply(String,Object(o["__spread"])(e)));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D=/^[cdef][\w-]{21}$/;var L="";function P(){try{var e=new Uint8Array(17);var t=self.crypto||self.msCrypto;t.getRandomValues(e);e[0]=112+e[0]%16;var r=k(e);return D.test(r)?r:L}catch(n){return L}}function k(e){var t=R(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F=new Map;function M(e,t){var r=B(e);H(r,t);q(r,t)}function U(e,t){W();var r=B(e);var n=F.get(r);if(!n){n=new Set;F.set(r,n)}n.add(t)}function V(e,t){var r=B(e);var n=F.get(r);if(!n)return;n.delete(t);if(0===n.size)F.delete(r);K()}function H(e,t){var r,n;var i=F.get(e);if(!i)return;try{for(var a=Object(o["__values"])(i),s=a.next();!s.done;s=a.next()){var c=s.value;c(t)}}catch(u){r={error:u}}finally{try{if(s&&!s.done&&(n=a.return))n.call(a)}finally{if(r)throw r.error}}}function q(e,t){var r=W();if(r)r.postMessage({key:e,fid:t});K()}var z=null;function W(){if(!z&&"BroadcastChannel"in self){z=new BroadcastChannel("[Firebase] FID Change");z.onmessage=function(e){H(e.data.key,e.data.fid)}}return z}function K(){if(0===F.size&&z){z.close();z=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $="firebase-installations-database";var J=1;var G="firebase-installations-store";var X=null;function Y(){if(!X)X=Object(c["openDb"])($,J,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(G)}}));return X}function Z(e,t){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r,n,i,a,s;return Object(o["__generator"])(this,(function(o){switch(o.label){case 0:r=B(e);return[4,Y()];case 1:n=o.sent();i=n.transaction(G,"readwrite");a=i.objectStore(G);return[4,a.get(r)];case 2:s=o.sent();return[4,a.put(t,r)];case 3:o.sent();return[4,i.complete];case 4:o.sent();if(!s||s.fid!==t.fid)M(e,t.fid);return[2,t]}}))}))}function Q(e){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var t,r,n;return Object(o["__generator"])(this,(function(i){switch(i.label){case 0:t=B(e);return[4,Y()];case 1:r=i.sent();n=r.transaction(G,"readwrite");return[4,n.objectStore(G).delete(t)];case 2:i.sent();return[4,n.complete];case 3:i.sent();return[2]}}))}))}function ee(e,t){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r,n,i,a,s,c;return Object(o["__generator"])(this,(function(o){switch(o.label){case 0:r=B(e);return[4,Y()];case 1:n=o.sent();i=n.transaction(G,"readwrite");a=i.objectStore(G);return[4,a.get(r)];case 2:s=o.sent();c=t(s);if(!(void 0===c))return[3,4];return[4,a.delete(r)];case 3:o.sent();return[3,6];case 4:return[4,a.put(c,r)];case 5:o.sent();o.label=6;case 6:return[4,i.complete];case 7:o.sent();if(c&&(!s||s.fid!==c.fid))M(e,c.fid);return[2,c]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var t,r;var n;return Object(o["__generator"])(this,(function(i){switch(i.label){case 0:return[4,ee(e,(function(r){var n=re(r);var i=ne(e,n);t=i.registrationPromise;return i.installationEntry}))];case 1:r=i.sent();if(!(r.fid===L))return[3,3];n={};return[4,t];case 2:return[2,(n.installationEntry=i.sent(),n)];case 3:return[2,{installationEntry:r,registrationPromise:t}]}}))}))}function re(e){var t=e||{fid:P(),registrationStatus:0};return se(t)}function ne(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var r=Promise.reject(_.create("app-offline"));return{installationEntry:t,registrationPromise:r}}var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};var i=ie(e,n);return{installationEntry:n,registrationPromise:i}}else if(1===t.registrationStatus)return{installationEntry:t,registrationPromise:ae(e)};else return{installationEntry:t}}function ie(e,t){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r,n;return Object(o["__generator"])(this,(function(i){switch(i.label){case 0:i.trys.push([0,2,,7]);return[4,T(e,t)];case 1:r=i.sent();return[2,Z(e,r)];case 2:n=i.sent();if(!(w(n)&&409===n.serverCode))return[3,4];return[4,Q(e)];case 3:i.sent();return[3,6];case 4:return[4,Z(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent();i.label=6;case 6:throw n;case 7:return[2]}}))}))}function ae(e){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var t,r,n,i;return Object(o["__generator"])(this,(function(a){switch(a.label){case 0:return[4,oe(e)];case 1:t=a.sent();a.label=2;case 2:if(!(1===t.registrationStatus))return[3,5];return[4,x(100)];case 3:a.sent();return[4,oe(e)];case 4:t=a.sent();return[3,2];case 5:if(!(0===t.registrationStatus))return[3,7];return[4,te(e)];case 6:r=a.sent(),n=r.installationEntry,i=r.registrationPromise;if(i)return[2,i];else return[2,n];case 7:return[2,t]}}))}))}function oe(e){return ee(e,(function(e){if(!e)throw _.create("installation-not-found");return se(e)}))}function se(e){if(ce(e))return{fid:e.fid,registrationStatus:0};return e}function ce(e){return 1===e.registrationStatus&&e.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){var r=e.appConfig,n=e.platformLoggerProvider;return Object(o["__awaiter"])(this,void 0,void 0,(function(){var e,i,a,s,c,u,f,l;return Object(o["__generator"])(this,(function(o){switch(o.label){case 0:e=fe(r,t);i=A(r,t);a=n.getImmediate({optional:true});if(a)i.append("x-firebase-client",a.getPlatformInfoString());s={installation:{sdkVersion:d}};c={method:"POST",headers:i,body:JSON.stringify(s)};return[4,j((function(){return fetch(e,c)}))];case 1:u=o.sent();if(!u.ok)return[3,3];return[4,u.json()];case 2:f=o.sent();l=O(f);return[2,l];case 3:return[4,S("Generate Auth Token",u)];case 4:throw o.sent()}}))}))}function fe(e,t){var r=t.fid;return E(e)+"/"+r+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){if(void 0===t)t=false;return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r,n,i,a;return Object(o["__generator"])(this,(function(o){switch(o.label){case 0:return[4,ee(e.appConfig,(function(n){if(!ve(n))throw _.create("not-registered");var i=n.authToken;if(!t&&be(i))return n;else if(1===i.requestStatus){r=de(e,t);return n}else{if(!navigator.onLine)throw _.create("app-offline");var a=me(n);r=he(e,a);return a}}))];case 1:n=o.sent();if(!r)return[3,3];return[4,r];case 2:a=o.sent();return[3,4];case 3:a=n.authToken;o.label=4;case 4:i=a;return[2,i]}}))}))}function de(e,t){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r,n;return Object(o["__generator"])(this,(function(i){switch(i.label){case 0:return[4,pe(e.appConfig)];case 1:r=i.sent();i.label=2;case 2:if(!(1===r.authToken.requestStatus))return[3,5];return[4,x(100)];case 3:i.sent();return[4,pe(e.appConfig)];case 4:r=i.sent();return[3,2];case 5:n=r.authToken;if(0===n.requestStatus)return[2,le(e,t)];else return[2,n]}}))}))}function pe(e){return ee(e,(function(e){if(!ve(e))throw _.create("not-registered");var t=e.authToken;if(ye(t))return Object(o["__assign"])(Object(o["__assign"])({},e),{authToken:{requestStatus:0}});return e}))}function he(e,t){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r,n,i,n;return Object(o["__generator"])(this,(function(a){switch(a.label){case 0:a.trys.push([0,3,,8]);return[4,ue(e,t)];case 1:r=a.sent();n=Object(o["__assign"])(Object(o["__assign"])({},t),{authToken:r});return[4,Z(e.appConfig,n)];case 2:a.sent();return[2,r];case 3:i=a.sent();if(!(w(i)&&(401===i.serverCode||404===i.serverCode)))return[3,5];return[4,Q(e.appConfig)];case 4:a.sent();return[3,7];case 5:n=Object(o["__assign"])(Object(o["__assign"])({},t),{authToken:{requestStatus:0}});return[4,Z(e.appConfig,n)];case 6:a.sent();a.label=7;case 7:throw i;case 8:return[2]}}))}))}function ve(e){return void 0!==e&&2===e.registrationStatus}function be(e){return 2===e.requestStatus&&!ge(e)}function ge(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+v}function me(e){var t={requestStatus:1,requestTime:Date.now()};return Object(o["__assign"])(Object(o["__assign"])({},e),{authToken:t})}function ye(e){return 1===e.requestStatus&&e.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var t,r,n;return Object(o["__generator"])(this,(function(i){switch(i.label){case 0:return[4,te(e.appConfig)];case 1:t=i.sent(),r=t.installationEntry,n=t.registrationPromise;if(n)n.catch(console.error);else le(e).catch(console.error);return[2,r.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t){if(void 0===t)t=false;return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r;return Object(o["__generator"])(this,(function(n){switch(n.label){case 0:return[4,Ee(e.appConfig)];case 1:n.sent();return[4,le(e,t)];case 2:r=n.sent();return[2,r.token]}}))}))}function Ee(e){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(o["__generator"])(this,(function(r){switch(r.label){case 0:return[4,te(e)];case 1:t=r.sent().registrationPromise;if(!t)return[3,3];return[4,t];case 2:r.sent();r.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var r,n,i,a;return Object(o["__generator"])(this,(function(o){switch(o.label){case 0:r=Se(e,t);n=A(e,t);i={method:"DELETE",headers:n};return[4,j((function(){return fetch(r,i)}))];case 1:a=o.sent();if(!!a.ok)return[3,3];return[4,S("Delete Installation",a)];case 2:throw o.sent();case 3:return[2]}}))}))}function Se(e,t){var r=t.fid;return E(e)+"/"+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var t,r;return Object(o["__generator"])(this,(function(n){switch(n.label){case 0:t=e.appConfig;return[4,ee(t,(function(e){if(e&&0===e.registrationStatus)return;return e}))];case 1:r=n.sent();if(!r)return[3,6];if(!(1===r.registrationStatus))return[3,2];throw _.create("delete-pending-registration");case 2:if(!(2===r.registrationStatus))return[3,6];if(!!navigator.onLine)return[3,3];throw _.create("app-offline");case 3:return[4,Oe(t,r)];case 4:n.sent();return[4,Q(t)];case 5:n.sent();n.label=6;case 6:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t){var r=e.appConfig;U(r,t);return function(){V(r,t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){var t,r;if(!e||!e.options)throw Ie("App Configuration");if(!e.name)throw Ie("App Name");var n=["projectId","apiKey","appId"];try{for(var i=Object(o["__values"])(n),a=i.next();!a.done;a=i.next()){var s=a.value;if(!e.options[s])throw Ie(s)}}catch(c){t={error:c}}finally{try{if(a&&!a.done&&(r=i.return))r.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ie(e){return _.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){var t="installations";e.INTERNAL.registerComponent(new a["Component"](t,(function(e){var t=e.getProvider("app").getImmediate();var r=je(t);var n=e.getProvider("platform-logger");var i={appConfig:r,platformLoggerProvider:n};var a={app:t,getId:function(){return _e(i)},getToken:function(e){return we(i,e)},delete:function(){return Ce(i)},onIdChange:function(e){return Ae(i,e)}};return a}),"PUBLIC"));e.registerVersion(u,f)}Ne(i.a)},c6bd12d023e8c37cf292:function(e,t,r){"use strict";var n=r("54b16333e25b66271488");e.exports=n.isStandardBrowserEnv()?function e(){return{write:function e(t,r,i,a,o,s){var c=[];c.push(t+"="+encodeURIComponent(r));if(n.isNumber(i))c.push("expires="+new Date(i).toGMTString());if(n.isString(a))c.push("path="+a);if(n.isString(o))c.push("domain="+o);if(true===s)c.push("secure");document.cookie=c.join("; ")},read:function e(t){var r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function e(t){this.write(t,"",Date.now()-864e5)}}}():function e(){return{write:function e(){},read:function e(){return null},remove:function e(){}}}()},d7aeecaac6359becf083:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r("d7c625d1f2819028b697");var i=r("0718a297274f7ebd88bd");var a=r("c2bc7d94d47c5ded8328");var o=r("3bb78169942ff9025484");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s;var c=(s={},s["no-app"]="No Firebase App '{$appName}' has been created - "+"call Firebase App.initializeApp()",s["bad-app-name"]="Illegal App name: '{$appName}",s["duplicate-app"]="Firebase App named '{$appName}' already exists",s["app-deleted"]="Firebase App named '{$appName}' already deleted",s["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a "+"Firebase App instance.",s["invalid-log-argument"]="First argument to `onLog` must be null or a function.",s);var u=new i.ErrorFactory("app","Firebase",c);var f="@firebase/app";var l="0.6.11";var d="@firebase/analytics";var p="@firebase/auth";var h="@firebase/database";var v="@firebase/functions";var b="@firebase/installations";var g="@firebase/messaging";var m="@firebase/performance";var y="@firebase/remote-config";var _="@firebase/storage";var w="@firebase/firestore";var E="firebase-wrapper";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;var S="[DEFAULT]";var C=(O={},O[f]="fire-core",O[d]="fire-analytics",O[p]="fire-auth",O[h]="fire-rtdb",O[v]="fire-fn",O[b]="fire-iid",O[g]="fire-fcm",O[m]="fire-perf",O[y]="fire-rc",O[_]="fire-gcs",O[w]="fire-fst",O["fire-js"]="fire-js",O[E]="fire-js-all",O);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A=new o.Logger("@firebase/app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j=function(){function e(e,t,r){var o,s;var c=this;this.firebase_=r;this.isDeleted_=false;this.name_=t.name;this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||false;this.options_=i.deepCopy(e);this.container=new a.ComponentContainer(t.name);this._addComponent(new a.Component("app",(function(){return c}),"PUBLIC"));try{for(var u=n.__values(this.firebase_.INTERNAL.components.values()),f=u.next();!f.done;f=u.next()){var l=f.value;this._addComponent(l)}}catch(d){o={error:d}}finally{try{if(f&&!f.done&&(s=u.return))s.call(u)}finally{if(o)throw o.error}}}Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){this.checkDestroyed_();return this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_();this.automaticDataCollectionEnabled_=e},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"name",{get:function(){this.checkDestroyed_();return this.name_},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"options",{get:function(){this.checkDestroyed_();return this.options_},enumerable:false,configurable:true});e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_();t()})).then((function(){e.firebase_.INTERNAL.removeApp(e.name_);return Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=true}))};e.prototype._getService=function(e,t){if(void 0===t)t=S;this.checkDestroyed_();return this.container.getProvider(e).getImmediate({identifier:t})};e.prototype._removeServiceInstance=function(e,t){if(void 0===t)t=S;this.container.getProvider(e).clearInstance(t)};e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){A.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}};e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)};e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw u.create("app-deleted",{appName:this.name_})};return e}();j.prototype.name&&j.prototype.options||j.prototype.delete||void 0;var I="7.20.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){var t={};var r=new Map;var s={__esModule:true,initializeApp:l,app:f,registerVersion:h,setLogLevel:o.setLogLevel,onLog:v,apps:null,SDK_VERSION:I,INTERNAL:{registerComponent:p,removeApp:c,components:r,useAsService:b}};s["default"]=s;Object.defineProperty(s,"apps",{get:d});function c(e){delete t[e]}function f(e){e=e||S;if(!i.contains(t,e))throw u.create("no-app",{appName:e});return t[e]}f["App"]=e;function l(r,n){if(void 0===n)n={};if("object"!==typeof n||null===n){var a=n;n={name:a}}var o=n;if(void 0===o.name)o.name=S;var c=o.name;if("string"!==typeof c||!c)throw u.create("bad-app-name",{appName:String(c)});if(i.contains(t,c))throw u.create("duplicate-app",{appName:c});var f=new e(r,o,s);t[c]=f;return f}function d(){return Object.keys(t).map((function(e){return t[e]}))}function p(a){var o,c;var l=a.name;if(r.has(l)){A.debug("There were multiple attempts to register component "+l+".");return"PUBLIC"===a.type?s[l]:null}r.set(l,a);if("PUBLIC"===a.type){var d=function(e){if(void 0===e)e=f();if("function"!==typeof e[l])throw u.create("invalid-app-argument",{appName:l});return e[l]()};if(void 0!==a.serviceProps)i.deepExtend(d,a.serviceProps);s[l]=d;e.prototype[l]=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this._getService.bind(this,l);return r.apply(this,a.multipleInstances?e:[])}}try{for(var p=n.__values(Object.keys(t)),h=p.next();!h.done;h=p.next()){var v=h.value;t[v]._addComponent(a)}}catch(b){o={error:b}}finally{try{if(h&&!h.done&&(c=p.return))c.call(p)}finally{if(o)throw o.error}}return"PUBLIC"===a.type?s[l]:null}function h(e,t,r){var n;var i=null!==(n=C[e])&&void 0!==n?n:e;if(r)i+="-"+r;var o=i.match(/\s|\//);var s=t.match(/\s|\//);if(o||s){var c=['Unable to register library "'+i+'" with version "'+t+'":'];if(o)c.push('library name "'+i+'" contains illegal characters (whitespace or "/")');if(o&&s)c.push("and");if(s)c.push('version name "'+t+'" contains illegal characters (whitespace or "/")');A.warn(c.join(" "));return}p(new a.Component(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))}function v(e,t){if(null!==e&&"function"!==typeof e)throw u.create("invalid-log-argument",{appName:name});o.setUserLogHandler(e,t)}function b(e,t){if("serverAuth"===t)return null;var r=t;return r}return s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e=N(j);e.INTERNAL=n.__assign(n.__assign({},e.INTERNAL),{createFirebaseNamespace:T,extendNamespace:t,createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend});function t(t){i.deepExtend(e,t)}return e}var x=T();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R=function(){function e(e){this.container=e}e.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map((function(e){if(D(e)){var t=e.getImmediate();return t.library+"/"+t.version}else return null})).filter((function(e){return e})).join(" ")};return e}();function D(e){var t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){e.INTERNAL.registerComponent(new a.Component("platform-logger",(function(e){return new R(e)}),"PRIVATE"));e.registerVersion(f,l,t);e.registerVersion("fire-js","")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(i.isBrowser()&&void 0!==self.firebase){A.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var P=self.firebase.SDK_VERSION;if(P&&P.indexOf("LITE")>=0)A.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var k=x.initializeApp;x.initializeApp=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];if(i.isNode())A.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ');return k.apply(void 0,e)};var B=x;L(B);t.default=B;t.firebase=B},dfc711a5435c89e06b1d:function(e,t,r){e.exports=r("14d32ac33415d31fe77c")},e70bb154504cb283633b:function(e,t,r){"use strict";var n=r("54b16333e25b66271488");function i(){this.handlers=[]}i.prototype.use=function e(t,r){this.handlers.push({fulfilled:t,rejected:r});return this.handlers.length-1};i.prototype.eject=function e(t){if(this.handlers[t])this.handlers[t]=null};i.prototype.forEach=function e(t){n.forEach(this.handlers,(function e(r){if(null!==r)t(r)}))};e.exports=i},e759938188324e641243:function(e,t,r){"use strict";var n=r("54b16333e25b66271488");var i=r("1517d5fd7a66619811ae");var a=r("92e2e9ea8bfb876e7a50");var o=r("b3383ba0ca94a1027927");function s(e){if(e.cancelToken)e.cancelToken.throwIfRequested()}e.exports=function e(t){s(t);t.headers=t.headers||{};t.data=i(t.data,t.headers,t.transformRequest);t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers);n.forEach(["delete","get","head","post","put","patch","common"],(function e(r){delete t.headers[r]}));var r=t.adapter||o.adapter;return r(t).then((function e(r){s(t);r.data=i(r.data,r.headers,t.transformResponse);return r}),(function e(r){if(!a(r)){s(t);if(r&&r.response)r.response.data=i(r.response.data,r.response.headers,t.transformResponse)}return Promise.reject(r)}))}}}]);
//# sourceMappingURL=ttwid_m.4711a70a.js.map