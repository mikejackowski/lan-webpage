"use strict";var precacheConfig=[["/lan-webpage/index.html","ebfab671c6ab079dc9d718c24637dd50"],["/lan-webpage/static/css/main.3eaf1018.css","1afce649897fcbf6ef37aae53a52a3ee"],["/lan-webpage/static/js/main.672e66d8.js","c25a7f1fdf8a1cde9379920a2a0b610f"],["/lan-webpage/static/media/aegis.47a1af6e.png","47a1af6eeab3a1ae86944a3832865fd1"],["/lan-webpage/static/media/alkorn.0b3b62c7.png","0b3b62c70c6754f671f02ff25773a9e3"],["/lan-webpage/static/media/budda.fc71d7d3.png","fc71d7d3bfdeca8fca7806b207ecfc95"],["/lan-webpage/static/media/doubleg.6fbd84cd.png","6fbd84cd8e9d6af47976845c69218e10"],["/lan-webpage/static/media/luq.bc6a36f7.png","bc6a36f71e303c832f7f51bb67b00833"],["/lan-webpage/static/media/mj.6f103b2c.png","6f103b2ce1baf1c79ee49f06f559fa50"],["/lan-webpage/static/media/photo1.481fc386.png","481fc386eac58567203277beaae16bcf"],["/lan-webpage/static/media/photo2.76c190c8.png","76c190c85593b3e2be7daf0feddf686e"],["/lan-webpage/static/media/shiru15.779c0bb5.png","779c0bb5d589690f40672955294105f3"],["/lan-webpage/static/media/talent.1c7145a8.png","1c7145a8f492ade65dc950bb9d9d7747"],["/lan-webpage/static/media/trophy.911f5285.svg","911f5285836f62118d95b0b0eaefed00"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/lan-webpage/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});