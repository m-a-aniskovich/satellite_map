define(["./createTaskProcessorWorker","./defaultValue-fe22d8c0","./WebMercatorProjection-13ed1a6e","./Matrix3-41c58dde","./Math-0a2ac845","./Check-6ede7e26"],(function(e,t,n,r,o,a){"use strict";let i;function s(e,t,n,r){return r[e+t*n]}function u(e,t,n){const r=n.nativeExtent;let o=(e-r.west)/(r.east-r.west)*(n.width-1),a=(t-r.south)/(r.north-r.south)*(n.height-1);const i=Math.floor(o);let u=Math.floor(a);o-=i,a-=u;const c=i<n.width?i+1:i;let f=u<n.height?u+1:u;u=n.height-1-u,f=n.height-1-f;let l=(d=o,y=a,h=s(i,u,n.width,n.buffer),b=s(c,u,n.width,n.buffer),p=s(i,f,n.width,n.buffer),g=s(c,f,n.width,n.buffer),(h*(1-d)+b*d)*(1-y)+(p*(1-d)+g*d)*y);var d,y,h,b,p,g;return l=l*n.scale+n.offset,l}function c(e,t,o){for(let a=0;a<o.length;a++){const i=o[a].nativeExtent;let s=new r.Cartesian3;if("WebMercator"===o[a].projectionType){const i=o[a].projection._ellipsoid._radii;s=new n.WebMercatorProjection(new r.Ellipsoid(i.x,i.y,i.z)).project(new r.Cartographic(e,t,0))}else s.x=e,s.y=t;if(s.x>i.west&&s.x<i.east&&s.y>i.south&&s.y<i.north)return u(s.x,s.y,o[a])}return 0}function f(e,n,r,o,a){const i=o.num_components()*a;let s;const u=[function(){},function(){s=new e.DracoInt8Array(i),n.GetAttributeInt8ForAllPoints(r,o,s)||console.error("Bad stream");const t=new Int8Array(i);for(let e=0;e<i;++e)t[e]=s.GetValue(e);return t},function(){s=new e.DracoInt8Array(i),n.GetAttributeUInt8ForAllPoints(r,o,s)||console.error("Bad stream");const t=new Uint8Array(i);for(let e=0;e<i;++e)t[e]=s.GetValue(e);return t},function(){s=new e.DracoInt16Array(i),n.GetAttributeInt16ForAllPoints(r,o,s)||console.error("Bad stream");const t=new Int16Array(i);for(let e=0;e<i;++e)t[e]=s.GetValue(e);return t},function(){s=new e.DracoInt16Array(i),n.GetAttributeUInt16ForAllPoints(r,o,s)||console.error("Bad stream");const t=new Uint16Array(i);for(let e=0;e<i;++e)t[e]=s.GetValue(e);return t},function(){s=new e.DracoInt32Array(i),n.GetAttributeInt32ForAllPoints(r,o,s)||console.error("Bad stream");const t=new Int32Array(i);for(let e=0;e<i;++e)t[e]=s.GetValue(e);return t},function(){s=new e.DracoInt32Array(i),n.GetAttributeUInt32ForAllPoints(r,o,s)||console.error("Bad stream");const t=new Uint32Array(i);for(let e=0;e<i;++e)t[e]=s.GetValue(e);return t},function(){},function(){},function(){s=new e.DracoFloat32Array(i),n.GetAttributeFloatForAllPoints(r,o,s)||console.error("Bad stream");const t=new Float32Array(i);for(let e=0;e<i;++e)t[e]=s.GetValue(e);return t},function(){},function(){s=new e.DracoUInt8Array(i),n.GetAttributeUInt8ForAllPoints(r,o,s)||console.error("Bad stream");const t=new Uint8Array(i);for(let e=0;e<i;++e)t[e]=s.GetValue(e);return t}],c=u[o.data_type()]();return t.defined(s)&&e.destroy(s),c}const l={position:function(e,t,n){const r=3*e.vertexCount;return e.positions=new Float32Array(t,n,r),n+4*r},normal:function(e,t,n){const r=3*e.vertexCount;return e.normals=new Float32Array(t,n,r),n+4*r},uv0:function(e,t,n){const r=2*e.vertexCount;return e.uv0s=new Float32Array(t,n,r),n+4*r},color:function(e,t,n){const r=4*e.vertexCount;return e.colors=new Uint8Array(t,n,r),n+r},featureId:function(e,t,n){return n+8*e.featureCount},id:function(e,t,n){return n+8*e.featureCount},faceRange:function(e,t,n){const r=2*e.featureCount;return e.faceRange=new Uint32Array(t,n,r),n+4*r},uvRegion:function(e,t,n){const r=4*e.vertexCount;return e["uv-region"]=new Uint16Array(t,n,r),n+2*r},region:function(e,t,n){const r=4*e.vertexCount;return e["uv-region"]=new Uint16Array(t,n,r),n+2*r}};function d(e){const n=function(e,n,r,o){const a=new Uint8Array(e,0,5);return a[0]==="D".charCodeAt()&&a[1]==="R".charCodeAt()&&a[2]==="A".charCodeAt()&&a[3]==="C".charCodeAt()&&a[4]==="O".charCodeAt()?function(e){const n=i,r=new n.DecoderBuffer,o=new Uint8Array(e);r.Init(o,o.length);const a=new n.Decoder,s=a.GetEncodedGeometryType(r),u=new n.MetadataQuerier;let c,l;s===n.TRIANGULAR_MESH&&(c=new n.Mesh,l=a.DecodeBufferToMesh(r,c));const d={vertexCount:[0],featureCount:0};if(t.defined(l)&&l.ok()&&0!==c.ptr){const e=c.num_faces(),r=c.num_attributes(),o=c.num_points();d.indices=new Uint32Array(3*e);const i=d.indices;d.vertexCount[0]=o,d.scale_x=1,d.scale_y=1;const s=new n.DracoInt32Array(3);for(let t=0;t<e;++t)a.GetFaceFromMesh(c,t,s),i[3*t]=s.GetValue(0),i[3*t+1]=s.GetValue(1),i[3*t+2]=s.GetValue(2);n.destroy(s);for(let e=0;e<r;++e){const r=a.GetAttribute(c,e),i=f(n,a,c,r,o),s=r.attribute_type();let l="unknown";s===n.POSITION?l="positions":s===n.NORMAL?l="normals":s===n.COLOR?l="colors":s===n.TEX_COORD&&(l="uv0s");const y=a.GetAttributeMetadata(c,e);if(0!==y.ptr){const e=u.NumEntries(y);for(let t=0;t<e;++t){const e=u.GetEntryName(y,t);"i3s-scale_x"===e?d.scale_x=u.GetDoubleEntry(y,"i3s-scale_x"):"i3s-scale_y"===e?d.scale_y=u.GetDoubleEntry(y,"i3s-scale_y"):"i3s-attribute-type"===e&&(l=u.GetStringEntry(y,"i3s-attribute-type"))}}t.defined(d[l])&&console.log("Attribute already exists",l),d[l]=i,"feature-index"===l&&d.featureCount++}n.destroy(c)}return n.destroy(u),n.destroy(a),d}(e):function(e,n,r,o){const a={vertexCount:0},i=new DataView(e);try{let s=0;if(a.vertexCount=i.getUint32(s,1),s+=4,a.featureCount=i.getUint32(s,1),s+=4,t.defined(r))for(let n=0;n<r.attributes.length;n++)t.defined(l[r.attributes[n]])?s=l[r.attributes[n]](a,e,s):console.error("Unknown decoder for",r.attributes[n]);else{let r=n.ordering,i=n.featureAttributeOrder;t.defined(o)&&t.defined(o.geometryData)&&t.defined(o.geometryData[0])&&t.defined(o.geometryData[0].params)&&(r=Object.keys(o.geometryData[0].params.vertexAttributes),i=Object.keys(o.geometryData[0].params.featureAttributes));for(let n=0;n<r.length;n++){const o=l[r[n]];t.defined(o)||console.log(r[n]),s=o(a,e,s)}for(let n=0;n<i.length;n++){const r=l[i[n]];t.defined(r)||console.log(i[n]),s=r(a,e,s)}}}catch(e){console.error(e)}return a.scale_x=1,a.scale_y=1,a}(e,n,r,o)}(e.binaryData,e.schema,e.bufferInfo,e.featureData);t.defined(e.geoidDataList)&&e.geoidDataList.length>0&&function(e,t,n,r,a,i,s){const u=c(a.longitude,a.latitude,i);for(let s=0;s<e;++s){const e=c(a.longitude+o.CesiumMath.toRadians(n*t[3*s]),a.latitude+o.CesiumMath.toRadians(r*t[3*s+1]),i);t[3*s+2]+=e-u}}(n.vertexCount,n.positions,n.scale_x,n.scale_y,e.cartographicCenter,e.geoidDataList),function(e,n,a,i,s,u,c,f,l){if(0===e||!t.defined(n)||0===n.length)return;const d=new r.Ellipsoid(Math.sqrt(c.x),Math.sqrt(c.y),Math.sqrt(c.z));for(let c=0;c<e;++c){const e=3*c,y=e+1,h=e+2,b=new r.Cartographic;b.longitude=i.longitude+o.CesiumMath.toRadians(f*n[e]),b.latitude=i.latitude+o.CesiumMath.toRadians(l*n[y]),b.height=i.height+n[h];const p={};d.cartographicToCartesian(b,p),p.x-=s.x,p.y-=s.y,p.z-=s.z;const g={};if(r.Matrix3.multiplyByVector(u,p,g),n[e]=g.x,n[y]=g.y,n[h]=g.z,t.defined(a)){const t=new r.Cartesian3(a[e],a[y],a[h]),n={};r.Matrix3.multiplyByVector(u,t,n),a[e]=n.x,a[y]=n.y,a[h]=n.z}}}(n.vertexCount,n.positions,n.normals,e.cartographicCenter,e.cartesianCenter,e.parentRotation,e.ellipsoidRadiiSquare,n.scale_x,n.scale_y),t.defined(n.uv0s)&&t.defined(n["uv-region"])&&function(e,t,n){for(let r=0;r<e;++r){const e=n[4*r]/65535,o=n[4*r+1]/65535,a=(n[4*r+2]-n[4*r])/65535,i=(n[4*r+3]-n[4*r+1])/65535;t[2*r]*=a,t[2*r]+=e,t[2*r+1]*=i,t[2*r+1]+=o}}(n.vertexCount,n.uv0s,n["uv-region"]);const a=function(e,n,r,o,a,i){if(0===e||!t.defined(r)||0===r.length)return{buffers:[],bufferViews:[],accessors:[],meshes:[],nodes:[],nodesInScene:[]};const s=[],u=[],c=[],f=[],l=[],d=[];t.defined(n)&&(e=n.length);const y=new Uint32Array(e);if(t.defined(n))for(let t=0;t<e;++t)y[t]=n[t];else for(let t=0;t<e;++t)y[t]=t;const h=new Blob([y],{type:"application/binary"}),b=URL.createObjectURL(h),p=e,g=r.subarray(0,3*p),m=new Blob([g],{type:"application/binary"}),A=URL.createObjectURL(m);let w=Number.POSITIVE_INFINITY,I=Number.NEGATIVE_INFINITY,C=Number.POSITIVE_INFINITY,x=Number.NEGATIVE_INFINITY,L=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;for(let e=0;e<g.length/3;e++)w=Math.min(w,g[3*e+0]),I=Math.max(I,g[3*e+0]),C=Math.min(C,g[3*e+1]),x=Math.max(x,g[3*e+1]),L=Math.min(L,g[3*e+2]),R=Math.max(R,g[3*e+2]);const O=o?o.subarray(0,3*p):void 0;let v;if(t.defined(O)){const e=new Blob([O],{type:"application/binary"});v=URL.createObjectURL(e)}const _=a?a.subarray(0,2*p):void 0;let G;if(t.defined(_)){const e=new Blob([_],{type:"application/binary"});G=URL.createObjectURL(e)}const M=t.defined(i)?i.subarray(0,4*p):void 0;let U;if(t.defined(M)){const e=new Blob([M],{type:"application/binary"});U=URL.createObjectURL(e)}let V=0,D=0,N=0,T=0,E=0;const F={POSITION:0};return s.push({uri:A,byteLength:g.byteLength}),u.push({buffer:0,byteOffset:0,byteLength:g.byteLength,target:34962}),c.push({bufferView:0,byteOffset:0,componentType:5126,count:e,type:"VEC3",max:[w,C,L],min:[I,x,R]}),t.defined(v)&&(++E,V=E,F.NORMAL=V,s.push({uri:v,byteLength:O.byteLength}),u.push({buffer:V,byteOffset:0,byteLength:O.byteLength,target:34962}),c.push({bufferView:V,byteOffset:0,componentType:5126,count:e,type:"VEC3"})),t.defined(G)&&(++E,D=E,F.TEXCOORD_0=D,s.push({uri:G,byteLength:_.byteLength}),u.push({buffer:D,byteOffset:0,byteLength:_.byteLength,target:34962}),c.push({bufferView:D,byteOffset:0,componentType:5126,count:e,type:"VEC2"})),t.defined(U)&&(++E,N=E,F.COLOR_0=N,s.push({uri:U,byteLength:M.byteLength}),u.push({buffer:N,byteOffset:0,byteLength:M.byteLength,target:34962}),c.push({bufferView:N,byteOffset:0,componentType:5121,normalized:!0,count:e,type:"VEC4"})),++E,T=E,s.push({uri:b,byteLength:y.byteLength}),u.push({buffer:T,byteOffset:0,byteLength:y.byteLength,target:34963}),c.push({bufferView:T,byteOffset:0,componentType:5125,count:e,type:"SCALAR"}),f.push({primitives:[{attributes:F,indices:T,material:0}]}),d.push(0),l.push({mesh:0}),{buffers:s,bufferViews:u,accessors:c,meshes:f,nodes:l,nodesInScene:d}}(n.vertexCount,n.indices,n.positions,n.normals,n.uv0s,n.colors),s={};if(t.defined(n["feature-index"]))s.positions=n.positions,s.indices=n.indices,s.featureIndex=n["feature-index"],s.cartesianCenter=e.cartesianCenter,s.parentRotation=e.parentRotation;else if(t.defined(n.faceRange)){s.positions=n.positions,s.indices=n.indices,s.sourceURL=e.url,s.cartesianCenter=e.cartesianCenter,s.parentRotation=e.parentRotation,s.featureIndex=new Array(n.positions.length);for(let e=0;e<n.faceRange.length-1;e+=2){const t=e/2,r=n.faceRange[e],o=n.faceRange[e+1];for(let e=r;e<=o;e++)s.featureIndex[3*e]=t,s.featureIndex[3*e+1]=t,s.featureIndex[3*e+2]=t}}return a._customAttributes=s,{meshData:a}}function y(t){i=t,self.onmessage=e(d),self.postMessage(!0)}return function(e){const n=e.data.webAssemblyConfig;if(t.defined(n))return require([n.modulePath],(function(e){t.defined(n.wasmBinaryFile)?(t.defined(e)||(e=self.DracoDecoderModule),e(n).then((function(e){y(e)}))):y(e())}))}}));