(()=>{"use strict";var e,t,r,a,o,n={5579:(e,t,r)=>{var a=r(6880);const{cc:o}=(0,a.Z)({sat:{enabledTags:["Weather"]}});o.sats.addFromTleUrls([["data/tle/groups/cubesat.txt",["Cubesat"]],["data/tle/groups/globalstar.txt",["Globalstar"]],["data/tle/groups/gnss.txt",["GNSS"]],["data/tle/groups/iridium-NEXT.txt",["IridiumNEXT"]],["data/tle/groups/last-30-days.txt",["New"]],["data/tle/groups/oneweb.txt",["OneWeb"]],["data/tle/groups/planet.txt",["Planet"]],["data/tle/groups/resource.txt",["Resource"]],["data/tle/groups/science.txt",["Science"]],["data/tle/groups/spire.txt",["Spire"]],["data/tle/groups/starlink.txt",["Starlink"]],["data/tle/groups/stations.txt",["Stations"]],["data/tle/groups/weather.txt",["Weather"]]])}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=n,e=[],s.O=(t,r,a,o)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);s.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,s.d(o,n),o},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>"js/"+e+"."+{486:"d51612c4",514:"4262be0d",645:"1dbbd366",800:"4f369cc8"}[e]+".js",s.miniCssF=e=>{},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="SatVis:",s.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var i,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==o+r){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",o+r),i.src=e),a[e]=[t];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var o=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.j=826,(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../"})(),(()=>{var e={826:0};s.f.j=(t,r)=>{var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=s.p+s.u(t),i=new Error;s.l(n,(r=>{if(s.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[n,i,l]=r,u=0;if(n.some((t=>0!==e[t]))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var d=l(s)}for(t&&t(r);u<n.length;u++)o=n[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},r=globalThis.webpackChunkSatVis=globalThis.webpackChunkSatVis||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=s.O(void 0,[802,216,261],(()=>s(5579)));l=s.O(l)})();
//# sourceMappingURL=index.87a1b671.js.map