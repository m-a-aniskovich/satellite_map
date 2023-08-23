define(["./AxisAlignedBoundingBox-4bfd84f3","./Matrix2-e1298525","./Matrix3-41c58dde","./defaultValue-fe22d8c0","./TerrainEncoding-c8e029a2","./IndexDatatype-2643aa47","./Math-0a2ac845","./Check-6ede7e26","./Transforms-e2d4a55a","./WebMercatorProjection-13ed1a6e","./createTaskProcessorWorker","./RuntimeError-ef395448","./AttributeCompression-f9f6c717","./ComponentDatatype-cf1fa08e","./WebGLConstants-0b1ce7ba","./combine-d9581036"],(function(e,t,r,n,o,i,a,s,c,h,d,u,l,I,m,g){"use strict";function T(){s.DeveloperError.throwInstantiationError()}Object.defineProperties(T.prototype,{errorEvent:{get:s.DeveloperError.throwInstantiationError},credit:{get:s.DeveloperError.throwInstantiationError},tilingScheme:{get:s.DeveloperError.throwInstantiationError},hasWaterMask:{get:s.DeveloperError.throwInstantiationError},hasVertexNormals:{get:s.DeveloperError.throwInstantiationError},availability:{get:s.DeveloperError.throwInstantiationError}});const f=[];T.getRegularGridIndices=function(e,t){if(e*t>=a.CesiumMath.FOUR_GIGABYTES)throw new s.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=f[e];n.defined(r)||(f[e]=r=[]);let o=r[t];return n.defined(o)||(o=e*t<a.CesiumMath.SIXTY_FOUR_KILOBYTES?r[t]=new Uint16Array((e-1)*(t-1)*6):r[t]=new Uint32Array((e-1)*(t-1)*6),y(e,t,o,0)),o};const E=[];T.getRegularGridIndicesAndEdgeIndices=function(e,t){if(e*t>=a.CesiumMath.FOUR_GIGABYTES)throw new s.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=E[e];n.defined(r)||(E[e]=r=[]);let o=r[t];if(!n.defined(o)){const n=T.getRegularGridIndices(e,t),i=w(e,t),a=i.westIndicesSouthToNorth,s=i.southIndicesEastToWest,c=i.eastIndicesNorthToSouth,h=i.northIndicesWestToEast;o=r[t]={indices:n,westIndicesSouthToNorth:a,southIndicesEastToWest:s,eastIndicesNorthToSouth:c,northIndicesWestToEast:h}}return o};const p=[];function w(e,t){const r=new Array(t),n=new Array(e),o=new Array(t),i=new Array(e);let a;for(a=0;a<e;++a)i[a]=a,n[a]=e*t-1-a;for(a=0;a<t;++a)o[a]=(a+1)*e-1,r[a]=(t-a-1)*e;return{westIndicesSouthToNorth:r,southIndicesEastToWest:n,eastIndicesNorthToSouth:o,northIndicesWestToEast:i}}function y(e,t,r,n){let o=0;for(let i=0;i<t-1;++i){for(let t=0;t<e-1;++t){const t=o,i=t+e,a=i+1,s=t+1;r[n++]=t,r[n++]=i,r[n++]=s,r[n++]=s,r[n++]=i,r[n++]=a,++o}++o}}function N(e,t,r,n){let o=e[0];const i=e.length;for(let a=1;a<i;++a){const i=e[a];r[n++]=o,r[n++]=i,r[n++]=t,r[n++]=t,r[n++]=i,r[n++]=t+1,o=i,++t}return n}T.getRegularGridAndSkirtIndicesAndEdgeIndices=function(e,t){if(e*t>=a.CesiumMath.FOUR_GIGABYTES)throw new s.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=p[e];n.defined(r)||(p[e]=r=[]);let o=r[t];if(!n.defined(o)){const n=e*t,a=(e-1)*(t-1)*6,s=2*e+2*t,c=n+s,h=a+6*Math.max(0,s-4),d=w(e,t),u=d.westIndicesSouthToNorth,l=d.southIndicesEastToWest,I=d.eastIndicesNorthToSouth,m=d.northIndicesWestToEast,g=i.IndexDatatype.createTypedArray(c,h);y(e,t,g,0),T.addSkirtIndices(u,l,I,m,n,g,a),o=r[t]={indices:g,westIndicesSouthToNorth:u,southIndicesEastToWest:l,eastIndicesNorthToSouth:I,northIndicesWestToEast:m,indexCountWithoutSkirts:a}}return o},T.addSkirtIndices=function(e,t,r,n,o,i,a){let s=o;a=N(e,s,i,a),s+=e.length,a=N(t,s,i,a),s+=t.length,a=N(r,s,i,a),s+=r.length,N(n,s,i,a)},T.heightmapTerrainQuality=.25,T.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(e,t,r){return 2*e.maximumRadius*Math.PI*T.heightmapTerrainQuality/(t*r)},T.prototype.requestTileGeometry=s.DeveloperError.throwInstantiationError,T.prototype.getLevelMaximumGeometricError=s.DeveloperError.throwInstantiationError,T.prototype.getTileDataAvailable=s.DeveloperError.throwInstantiationError,T.prototype.loadTileDataAvailability=s.DeveloperError.throwInstantiationError;const M=32767,S=new r.Cartesian3,b=new r.Cartesian3,x=new r.Cartesian3,A=new r.Cartographic,C=new t.Cartesian2;function v(e,n,o,i,s,c,h,d,u){let l=Number.POSITIVE_INFINITY;const I=s.north,m=s.south;let g=s.east;const T=s.west;g<T&&(g+=a.CesiumMath.TWO_PI);const f=e.length;for(let s=0;s<f;++s){const f=e[s],E=o[f],p=i[f];A.longitude=a.CesiumMath.lerp(T,g,p.x),A.latitude=a.CesiumMath.lerp(m,I,p.y),A.height=E-n;const w=c.cartographicToCartesian(A,S);t.Matrix4.multiplyByPoint(h,w,w),r.Cartesian3.minimumByComponent(w,d,d),r.Cartesian3.maximumByComponent(w,u,u),l=Math.min(l,A.height)}return l}function W(e,t,r,o,i,s,c,d,u,l,I,m,g,T){const f=n.defined(c),E=u.north,p=u.south;let w=u.east;const y=u.west;w<y&&(w+=a.CesiumMath.TWO_PI);const N=r.length;for(let n=0;n<N;++n){const u=r[n],N=i[u],M=s[u];A.longitude=a.CesiumMath.lerp(y,w,M.x)+g,A.latitude=a.CesiumMath.lerp(p,E,M.y)+T,A.height=N-l;const b=d.cartographicToCartesian(A,S);if(f){const e=2*u;C.x=c[e],C.y=c[e+1]}let x,v;o.hasWebMercatorT&&(x=(h.WebMercatorProjection.geodeticLatitudeToMercatorAngle(A.latitude)-I)*m),o.hasGeodeticSurfaceNormals&&(v=d.geodeticSurfaceNormal(b)),t=o.encode(e,t,b,M,A.height,C,x,v)}}function P(e,t){let r;return"function"==typeof e.slice&&(r=e.slice(),"function"!=typeof r.sort&&(r=void 0)),n.defined(r)||(r=Array.prototype.slice.call(e)),r.sort(t),r}return d((function(s,d){const u=s.quantizedVertices,l=u.length/3,I=s.octEncodedNormals,m=s.westIndices.length+s.eastIndices.length+s.southIndices.length+s.northIndices.length,g=s.includeWebMercatorT,f=s.exaggeration,E=s.exaggerationRelativeHeight,p=1!==f,w=t.Rectangle.clone(s.rectangle),y=w.west,N=w.south,D=w.east,G=w.north,F=r.Ellipsoid.clone(s.ellipsoid),k=s.minimumHeight,_=s.maximumHeight,Y=s.relativeToCenter,H=c.Transforms.eastNorthUpToFixedFrame(Y,F),O=t.Matrix4.inverseTransformation(H,new t.Matrix4);let B,V;g&&(B=h.WebMercatorProjection.geodeticLatitudeToMercatorAngle(N),V=1/(h.WebMercatorProjection.geodeticLatitudeToMercatorAngle(G)-B));const R=u.subarray(0,l),L=u.subarray(l,2*l),U=u.subarray(2*l,3*l),j=n.defined(I),z=new Array(l),q=new Array(l),Q=new Array(l),K=g?new Array(l):[],X=p?new Array(l):[],Z=b;Z.x=Number.POSITIVE_INFINITY,Z.y=Number.POSITIVE_INFINITY,Z.z=Number.POSITIVE_INFINITY;const J=x;J.x=Number.NEGATIVE_INFINITY,J.y=Number.NEGATIVE_INFINITY,J.z=Number.NEGATIVE_INFINITY;let $=Number.POSITIVE_INFINITY,ee=Number.NEGATIVE_INFINITY,te=Number.POSITIVE_INFINITY,re=Number.NEGATIVE_INFINITY;for(let e=0;e<l;++e){const n=R[e],o=L[e],i=n/M,s=o/M,c=a.CesiumMath.lerp(k,_,U[e]/M);A.longitude=a.CesiumMath.lerp(y,D,i),A.latitude=a.CesiumMath.lerp(N,G,s),A.height=c,$=Math.min(A.longitude,$),ee=Math.max(A.longitude,ee),te=Math.min(A.latitude,te),re=Math.max(A.latitude,re);const d=F.cartographicToCartesian(A);z[e]=new t.Cartesian2(i,s),q[e]=c,Q[e]=d,g&&(K[e]=(h.WebMercatorProjection.geodeticLatitudeToMercatorAngle(A.latitude)-B)*V),p&&(X[e]=F.geodeticSurfaceNormal(d)),t.Matrix4.multiplyByPoint(O,d,S),r.Cartesian3.minimumByComponent(S,Z,Z),r.Cartesian3.maximumByComponent(S,J,J)}const ne=P(s.westIndices,(function(e,t){return z[e].y-z[t].y})),oe=P(s.eastIndices,(function(e,t){return z[t].y-z[e].y})),ie=P(s.southIndices,(function(e,t){return z[t].x-z[e].x})),ae=P(s.northIndices,(function(e,t){return z[e].x-z[t].x}));let se;k<0&&(se=new o.EllipsoidalOccluder(F).computeHorizonCullingPointPossiblyUnderEllipsoid(Y,Q,k));let ce=k;ce=Math.min(ce,v(s.westIndices,s.westSkirtHeight,q,z,w,F,O,Z,J)),ce=Math.min(ce,v(s.southIndices,s.southSkirtHeight,q,z,w,F,O,Z,J)),ce=Math.min(ce,v(s.eastIndices,s.eastSkirtHeight,q,z,w,F,O,Z,J)),ce=Math.min(ce,v(s.northIndices,s.northSkirtHeight,q,z,w,F,O,Z,J));const he=new e.AxisAlignedBoundingBox(Z,J,Y),de=new o.TerrainEncoding(Y,he,ce,_,H,j,g,p,f,E),ue=de.stride,le=new Float32Array(l*ue+m*ue);let Ie=0;for(let e=0;e<l;++e){if(j){const t=2*e;C.x=I[t],C.y=I[t+1]}Ie=de.encode(le,Ie,Q[e],z[e],q[e],C,K[e],X[e])}const me=Math.max(0,2*(m-4)),ge=s.indices.length+3*me,Te=i.IndexDatatype.createTypedArray(l+m,ge);Te.set(s.indices,0);const fe=1e-4,Ee=(ee-$)*fe,pe=(re-te)*fe,we=-Ee,ye=Ee,Ne=pe,Me=-pe;let Se=l*ue;return W(le,Se,ne,de,q,z,I,F,w,s.westSkirtHeight,B,V,we,0),Se+=s.westIndices.length*ue,W(le,Se,ie,de,q,z,I,F,w,s.southSkirtHeight,B,V,0,Me),Se+=s.southIndices.length*ue,W(le,Se,oe,de,q,z,I,F,w,s.eastSkirtHeight,B,V,ye,0),Se+=s.eastIndices.length*ue,W(le,Se,ae,de,q,z,I,F,w,s.northSkirtHeight,B,V,0,Ne),T.addSkirtIndices(ne,ie,oe,ae,l,Te,s.indices.length),d.push(le.buffer,Te.buffer),{vertices:le.buffer,indices:Te.buffer,westIndicesSouthToNorth:ne,southIndicesEastToWest:ie,eastIndicesNorthToSouth:oe,northIndicesWestToEast:ae,vertexStride:ue,center:Y,minimumHeight:k,maximumHeight:_,occludeePointInScaledSpace:se,encoding:de,indexCountWithoutSkirts:s.indices.length}}))}));