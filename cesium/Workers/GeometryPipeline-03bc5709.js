define(["exports","./AttributeCompression-f9f6c717","./Matrix2-e1298525","./Matrix3-41c58dde","./Check-6ede7e26","./defaultValue-fe22d8c0","./Math-0a2ac845","./Transforms-e2d4a55a","./ComponentDatatype-cf1fa08e","./EncodedCartesian3-57415c8a","./GeometryAttribute-13da9466","./IndexDatatype-2643aa47","./IntersectionTests-85350792","./Plane-4c3d403b"],(function(e,t,r,n,i,a,o,s,u,l,p,c,d,f){"use strict";const m=new n.Cartesian3,y=new n.Cartesian3,h=new n.Cartesian3,v={calculateACMR:function(e){const t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).indices;let r=e.maximumIndex;const n=a.defaultValue(e.cacheSize,24);if(!a.defined(t))throw new i.DeveloperError("indices is required.");const o=t.length;if(o<3||o%3!=0)throw new i.DeveloperError("indices length must be a multiple of three.");if(r<=0)throw new i.DeveloperError("maximumIndex must be greater than zero.");if(n<3)throw new i.DeveloperError("cacheSize must be greater than two.");if(!a.defined(r)){r=0;let e=0,n=t[e];for(;e<o;)n>r&&(r=n),++e,n=t[e]}const s=[];for(let e=0;e<r+1;e++)s[e]=0;let u=n+1;for(let e=0;e<o;++e)u-s[t[e]]>n&&(s[t[e]]=u,++u);return(u-n+1)/(o/3)},tipsify:function(e){const t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,n=a.defaultValue(e.cacheSize,24);let o;function s(e,t,r,n,i,a,s){let u,l=-1,p=-1,c=0;for(;c<r.length;){const e=r[c];n[e].numLiveTriangles&&(u=0,i-n[e].timeStamp+2*n[e].numLiveTriangles<=t&&(u=i-n[e].timeStamp),(u>p||-1===p)&&(p=u,l=e)),++c}return-1===l?function(e,t,r,n){for(;t.length>=1;){const r=t[t.length-1];if(t.splice(t.length-1,1),e[r].numLiveTriangles>0)return r}for(;o<n;){if(e[o].numLiveTriangles>0)return++o,o-1;++o}return-1}(n,a,0,s):l}if(!a.defined(t))throw new i.DeveloperError("indices is required.");const u=t.length;if(u<3||u%3!=0)throw new i.DeveloperError("indices length must be a multiple of three.");if(r<=0)throw new i.DeveloperError("maximumIndex must be greater than zero.");if(n<3)throw new i.DeveloperError("cacheSize must be greater than two.");let l=0,p=0,c=t[p];const d=u;if(a.defined(r))l=r+1;else{for(;p<d;)c>l&&(l=c),++p,c=t[p];if(-1===l)return 0;++l}const f=[];let m;for(m=0;m<l;m++)f[m]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};p=0;let y=0;for(;p<d;)f[t[p]].vertexTriangles.push(y),++f[t[p]].numLiveTriangles,f[t[p+1]].vertexTriangles.push(y),++f[t[p+1]].numLiveTriangles,f[t[p+2]].vertexTriangles.push(y),++f[t[p+2]].numLiveTriangles,++y,p+=3;let h=0,v=n+1;o=1;let C=[];const b=[];let w,g,T=0;const A=[],E=u/3,x=[];for(m=0;m<E;m++)x[m]=!1;let D,P;for(;-1!==h;){C=[],g=f[h],P=g.vertexTriangles.length;for(let e=0;e<P;++e)if(y=g.vertexTriangles[e],!x[y]){x[y]=!0,p=y+y+y;for(let e=0;e<3;++e)D=t[p],C.push(D),b.push(D),A[T]=D,++T,w=f[D],--w.numLiveTriangles,v-w.timeStamp>n&&(w.timeStamp=v,++v),++p}h=s(0,n,C,f,v,b,l)}return A}};var C=v;const b={};function w(e,t,r,n,i){e[t++]=r,e[t++]=n,e[t++]=n,e[t++]=i,e[t++]=i,e[t]=r}function g(e){const t={};for(const r in e)if(e.hasOwnProperty(r)&&a.defined(e[r])&&a.defined(e[r].values)){const n=e[r];t[r]=new p.GeometryAttribute({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return t}function T(e,t,r){for(const n in t)if(t.hasOwnProperty(n)&&a.defined(t[n])&&a.defined(t[n].values)){const i=t[n];for(let t=0;t<i.componentsPerAttribute;++t)e[n].values.push(i.values[r*i.componentsPerAttribute+t])}}b.toWireframe=function(e){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");const t=e.indices;if(a.defined(t)){switch(e.primitiveType){case p.PrimitiveType.TRIANGLES:e.indices=function(e){const t=e.length,r=t/3*6,n=c.IndexDatatype.createTypedArray(t,r);let i=0;for(let r=0;r<t;r+=3,i+=6)w(n,i,e[r],e[r+1],e[r+2]);return n}(t);break;case p.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){const t=e.length;if(t>=3){const r=6*(t-2),n=c.IndexDatatype.createTypedArray(t,r);w(n,0,e[0],e[1],e[2]);let i=6;for(let r=3;r<t;++r,i+=6)w(n,i,e[r-1],e[r],e[r-2]);return n}return new Uint16Array}(t);break;case p.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(e.length>0){const t=e.length-1,r=6*(t-1),n=c.IndexDatatype.createTypedArray(t,r),i=e[0];let a=0;for(let r=1;r<t;++r,a+=6)w(n,a,i,e[r],e[r+1]);return n}return new Uint16Array}(t);break;default:throw new i.DeveloperError("geometry.primitiveType must be TRIANGLES, TRIANGLE_STRIP, or TRIANGLE_FAN.")}e.primitiveType=p.PrimitiveType.LINES}return e},b.createLineSegmentsForVectors=function(e,t,r){if(t=a.defaultValue(t,"normal"),!a.defined(e))throw new i.DeveloperError("geometry is required.");if(!a.defined(e.attributes.position))throw new i.DeveloperError("geometry.attributes.position is required.");if(!a.defined(e.attributes[t]))throw new i.DeveloperError(`geometry.attributes must have an attribute with the same name as the attributeName parameter, ${t}.`);r=a.defaultValue(r,1e4);const n=e.attributes.position.values,o=e.attributes[t].values,l=n.length,c=new Float64Array(2*l);let d,f=0;for(let e=0;e<l;e+=3)c[f++]=n[e],c[f++]=n[e+1],c[f++]=n[e+2],c[f++]=n[e]+o[e]*r,c[f++]=n[e+1]+o[e+1]*r,c[f++]=n[e+2]+o[e+2]*r;const m=e.boundingSphere;return a.defined(m)&&(d=new s.BoundingSphere(m.center,m.radius+r)),new p.Geometry({attributes:{position:new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c})},primitiveType:p.PrimitiveType.LINES,boundingSphere:d})},b.createAttributeLocations=function(e){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");const t=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],r=e.attributes,n={};let o,s=0;const u=t.length;for(o=0;o<u;++o){const e=t[o];a.defined(r[e])&&(n[e]=s++)}for(const e in r)r.hasOwnProperty(e)&&!a.defined(n[e])&&(n[e]=s++);return n},b.reorderForPreVertexCache=function(e){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");const t=p.Geometry.computeNumberOfVertices(e),r=e.indices;if(a.defined(r)){const n=new Int32Array(t);for(let e=0;e<t;e++)n[e]=-1;const i=r,o=i.length,s=c.IndexDatatype.createTypedArray(t,o);let l,p=0,d=0,f=0;for(;p<o;)l=n[i[p]],-1!==l?s[d]=l:(l=i[p],n[l]=f,s[d]=f,++f),++p,++d;e.indices=s;const m=e.attributes;for(const e in m)if(m.hasOwnProperty(e)&&a.defined(m[e])&&a.defined(m[e].values)){const r=m[e],i=r.values;let a=0;const o=r.componentsPerAttribute,s=u.ComponentDatatype.createTypedArray(r.componentDatatype,f*o);for(;a<t;){const e=n[a];if(-1!==e)for(let t=0;t<o;t++)s[o*e+t]=i[o*a+t];++a}r.values=s}}return e},b.reorderForPostVertexCache=function(e,t){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");const r=e.indices;if(e.primitiveType===p.PrimitiveType.TRIANGLES&&a.defined(r)){const n=r.length;let i=0;for(let e=0;e<n;e++)r[e]>i&&(i=r[e]);e.indices=C.tipsify({indices:r,maximumIndex:i,cacheSize:t})}return e},b.fitToUnsignedShortIndices=function(e){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");if(a.defined(e.indices)&&e.primitiveType!==p.PrimitiveType.TRIANGLES&&e.primitiveType!==p.PrimitiveType.LINES&&e.primitiveType!==p.PrimitiveType.POINTS)throw new i.DeveloperError("geometry.primitiveType must equal to PrimitiveType.TRIANGLES, PrimitiveType.LINES, or PrimitiveType.POINTS.");const t=[],r=p.Geometry.computeNumberOfVertices(e);if(a.defined(e.indices)&&r>=o.CesiumMath.SIXTY_FOUR_KILOBYTES){let r=[],n=[],i=0,s=g(e.attributes);const u=e.indices,l=u.length;let c;e.primitiveType===p.PrimitiveType.TRIANGLES?c=3:e.primitiveType===p.PrimitiveType.LINES?c=2:e.primitiveType===p.PrimitiveType.POINTS&&(c=1);for(let d=0;d<l;d+=c){for(let t=0;t<c;++t){const o=u[d+t];let l=r[o];a.defined(l)||(l=i++,r[o]=l,T(s,e.attributes,o)),n.push(l)}i+c>=o.CesiumMath.SIXTY_FOUR_KILOBYTES&&(t.push(new p.Geometry({attributes:s,indices:n,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),r=[],n=[],i=0,s=g(e.attributes))}0!==n.length&&t.push(new p.Geometry({attributes:s,indices:n,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};const A=new n.Cartesian3,E=new n.Cartographic;b.projectTo2D=function(e,t,r,o,l){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");if(!a.defined(t))throw new i.DeveloperError("attributeName is required.");if(!a.defined(r))throw new i.DeveloperError("attributeName3D is required.");if(!a.defined(o))throw new i.DeveloperError("attributeName2D is required.");if(!a.defined(e.attributes[t]))throw new i.DeveloperError(`geometry must have attribute matching the attributeName argument: ${t}.`);if(e.attributes[t].componentDatatype!==u.ComponentDatatype.DOUBLE)throw new i.DeveloperError("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");const c=e.attributes[t],d=(l=a.defined(l)?l:new s.GeographicProjection).ellipsoid,f=c.values,m=new Float64Array(f.length);let y=0;for(let e=0;e<f.length;e+=3){const t=n.Cartesian3.fromArray(f,e,A),r=d.cartesianToCartographic(t,E);if(!a.defined(r))throw new i.DeveloperError(`Could not project point (${t.x}, ${t.y}, ${t.z}) to 2D.`);const o=l.project(r,A);m[y++]=o.x,m[y++]=o.y,m[y++]=o.z}return e.attributes[r]=c,e.attributes[o]=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m}),delete e.attributes[t],e};const x={high:0,low:0};b.encodeAttribute=function(e,t,r,n){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");if(!a.defined(t))throw new i.DeveloperError("attributeName is required.");if(!a.defined(r))throw new i.DeveloperError("attributeHighName is required.");if(!a.defined(n))throw new i.DeveloperError("attributeLowName is required.");if(!a.defined(e.attributes[t]))throw new i.DeveloperError(`geometry must have attribute matching the attributeName argument: ${t}.`);if(e.attributes[t].componentDatatype!==u.ComponentDatatype.DOUBLE)throw new i.DeveloperError("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");const o=e.attributes[t],s=o.values,c=s.length,d=new Float32Array(c),f=new Float32Array(c);for(let e=0;e<c;++e)l.EncodedCartesian3.encode(s[e],x),d[e]=x.high,f[e]=x.low;const m=o.componentsPerAttribute;return e.attributes[r]=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:m,values:d}),e.attributes[n]=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:m,values:f}),delete e.attributes[t],e};let D=new n.Cartesian3;function P(e,t){if(a.defined(t)){const i=t.values,a=i.length;for(let t=0;t<a;t+=3)n.Cartesian3.unpack(i,t,D),r.Matrix4.multiplyByPoint(e,D,D),n.Cartesian3.pack(D,i,t)}}function I(e,t){if(a.defined(t)){const r=t.values,i=r.length;for(let t=0;t<i;t+=3)n.Cartesian3.unpack(r,t,D),n.Matrix3.multiplyByVector(e,D,D),D=n.Cartesian3.normalize(D,D),n.Cartesian3.pack(D,r,t)}}const S=new r.Matrix4,N=new n.Matrix3;b.transformToWorldCoordinates=function(e){if(!a.defined(e))throw new i.DeveloperError("instance is required.");const t=e.modelMatrix;if(r.Matrix4.equals(t,r.Matrix4.IDENTITY))return e;const n=e.geometry.attributes;P(t,n.position),P(t,n.prevPosition),P(t,n.nextPosition),(a.defined(n.normal)||a.defined(n.tangent)||a.defined(n.bitangent))&&(r.Matrix4.inverse(t,S),r.Matrix4.transpose(S,S),r.Matrix4.getMatrix3(S,N),I(N,n.normal),I(N,n.tangent),I(N,n.bitangent));const o=e.geometry.boundingSphere;return a.defined(o)&&(e.geometry.boundingSphere=s.BoundingSphere.transform(o,t,o)),e.modelMatrix=r.Matrix4.clone(r.Matrix4.IDENTITY),e};const O=new n.Cartesian3;function L(e,t){const o=e.length;let l,d,f,m;const y=e[0].modelMatrix,h=a.defined(e[0][t].indices),v=e[0][t].primitiveType;for(d=1;d<o;++d){if(!r.Matrix4.equals(e[d].modelMatrix,y))throw new i.DeveloperError("All instances must have the same modelMatrix.");if(a.defined(e[d][t].indices)!==h)throw new i.DeveloperError("All instance geometries must have an indices or not have one.");if(e[d][t].primitiveType!==v)throw new i.DeveloperError("All instance geometries must have the same primitiveType.")}const C=function(e,t){const r=e.length,n={},i=e[0][t].attributes;let o;for(o in i)if(i.hasOwnProperty(o)&&a.defined(i[o])&&a.defined(i[o].values)){const s=i[o];let l=s.values.length,c=!0;for(let n=1;n<r;++n){const r=e[n][t].attributes[o];if(!a.defined(r)||s.componentDatatype!==r.componentDatatype||s.componentsPerAttribute!==r.componentsPerAttribute||s.normalize!==r.normalize){c=!1;break}l+=r.values.length}c&&(n[o]=new p.GeometryAttribute({componentDatatype:s.componentDatatype,componentsPerAttribute:s.componentsPerAttribute,normalize:s.normalize,values:u.ComponentDatatype.createTypedArray(s.componentDatatype,l)}))}return n}(e,t);let b,w,g,T;for(l in C)if(C.hasOwnProperty(l))for(b=C[l].values,m=0,d=0;d<o;++d)for(w=e[d][t].attributes[l].values,g=w.length,f=0;f<g;++f)b[m++]=w[f];if(h){let r=0;for(d=0;d<o;++d)r+=e[d][t].indices.length;const n=p.Geometry.computeNumberOfVertices(new p.Geometry({attributes:C,primitiveType:p.PrimitiveType.POINTS})),i=c.IndexDatatype.createTypedArray(n,r);let a=0,s=0;for(d=0;d<o;++d){const r=e[d][t].indices,n=r.length;for(m=0;m<n;++m)i[a++]=s+r[m];s+=p.Geometry.computeNumberOfVertices(e[d][t])}T=i}let A,E=new n.Cartesian3,x=0;for(d=0;d<o;++d){if(A=e[d][t].boundingSphere,!a.defined(A)){E=void 0;break}n.Cartesian3.add(A.center,E,E)}if(a.defined(E))for(n.Cartesian3.divideByScalar(E,o,E),d=0;d<o;++d){A=e[d][t].boundingSphere;const r=n.Cartesian3.magnitude(n.Cartesian3.subtract(A.center,E,O))+A.radius;r>x&&(x=r)}return new p.Geometry({attributes:C,indices:T,primitiveType:v,boundingSphere:a.defined(E)?new s.BoundingSphere(E,x):void 0})}b.combineInstances=function(e){if(!a.defined(e)||e.length<1)throw new i.DeveloperError("instances is required and must have length greater than zero.");const t=[],r=[],n=e.length;for(let i=0;i<n;++i){const n=e[i];a.defined(n.geometry)?t.push(n):a.defined(n.westHemisphereGeometry)&&a.defined(n.eastHemisphereGeometry)&&r.push(n)}const o=[];return t.length>0&&o.push(L(t,"geometry")),r.length>0&&(o.push(L(r,"westHemisphereGeometry")),o.push(L(r,"eastHemisphereGeometry"))),o};const z=new n.Cartesian3,M=new n.Cartesian3,G=new n.Cartesian3,q=new n.Cartesian3;b.computeNormal=function(e){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");if(!a.defined(e.attributes.position)||!a.defined(e.attributes.position.values))throw new i.DeveloperError("geometry.attributes.position.values is required.");if(!a.defined(e.indices))throw new i.DeveloperError("geometry.indices is required.");if(e.indices.length<2||e.indices.length%3!=0)throw new i.DeveloperError("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==p.PrimitiveType.TRIANGLES)throw new i.DeveloperError("geometry.primitiveType must be PrimitiveType.TRIANGLES.");const t=e.indices,r=e.attributes,s=r.position.values,l=r.position.values.length/3,c=t.length,d=new Array(l),f=new Array(c/3),m=new Array(c);let y;for(y=0;y<l;y++)d[y]={indexOffset:0,count:0,currentCount:0};let h=0;for(y=0;y<c;y+=3){const e=t[y],r=t[y+1],i=t[y+2],a=3*e,o=3*r,u=3*i;M.x=s[a],M.y=s[a+1],M.z=s[a+2],G.x=s[o],G.y=s[o+1],G.z=s[o+2],q.x=s[u],q.y=s[u+1],q.z=s[u+2],d[e].count++,d[r].count++,d[i].count++,n.Cartesian3.subtract(G,M,G),n.Cartesian3.subtract(q,M,q),f[h]=n.Cartesian3.cross(G,q,new n.Cartesian3),h++}let v,C=0;for(y=0;y<l;y++)d[y].indexOffset+=C,C+=d[y].count;for(h=0,y=0;y<c;y+=3){v=d[t[y]];let e=v.indexOffset+v.currentCount;m[e]=h,v.currentCount++,v=d[t[y+1]],e=v.indexOffset+v.currentCount,m[e]=h,v.currentCount++,v=d[t[y+2]],e=v.indexOffset+v.currentCount,m[e]=h,v.currentCount++,h++}const b=new Float32Array(3*l);for(y=0;y<l;y++){const e=3*y;if(v=d[y],n.Cartesian3.clone(n.Cartesian3.ZERO,z),v.count>0){for(h=0;h<v.count;h++)n.Cartesian3.add(z,f[m[v.indexOffset+h]],z);n.Cartesian3.equalsEpsilon(n.Cartesian3.ZERO,z,o.CesiumMath.EPSILON10)&&n.Cartesian3.clone(f[m[v.indexOffset]],z)}n.Cartesian3.equalsEpsilon(n.Cartesian3.ZERO,z,o.CesiumMath.EPSILON10)&&(z.z=1),n.Cartesian3.normalize(z,z),b[e]=z.x,b[e+1]=z.y,b[e+2]=z.z}return e.attributes.normal=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),e};const R=new n.Cartesian3,V=new n.Cartesian3,B=new n.Cartesian3;b.computeTangentAndBitangent=function(e){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");const t=e.attributes,r=e.indices;if(!a.defined(t.position)||!a.defined(t.position.values))throw new i.DeveloperError("geometry.attributes.position.values is required.");if(!a.defined(t.normal)||!a.defined(t.normal.values))throw new i.DeveloperError("geometry.attributes.normal.values is required.");if(!a.defined(t.st)||!a.defined(t.st.values))throw new i.DeveloperError("geometry.attributes.st.values is required.");if(!a.defined(r))throw new i.DeveloperError("geometry.indices is required.");if(r.length<2||r.length%3!=0)throw new i.DeveloperError("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==p.PrimitiveType.TRIANGLES)throw new i.DeveloperError("geometry.primitiveType must be PrimitiveType.TRIANGLES.");const o=e.attributes.position.values,s=e.attributes.normal.values,l=e.attributes.st.values,c=e.attributes.position.values.length/3,d=r.length,f=new Array(3*c);let m,y,h,v;for(m=0;m<f.length;m++)f[m]=0;for(m=0;m<d;m+=3){const e=r[m],t=r[m+1],n=r[m+2];y=3*e,h=3*t,v=3*n;const i=2*e,a=2*t,s=2*n,u=o[y],p=o[y+1],c=o[y+2],d=l[i],C=l[i+1],b=l[a+1]-C,w=l[s+1]-C,g=1/((l[a]-d)*w-(l[s]-d)*b),T=(w*(o[h]-u)-b*(o[v]-u))*g,A=(w*(o[h+1]-p)-b*(o[v+1]-p))*g,E=(w*(o[h+2]-c)-b*(o[v+2]-c))*g;f[y]+=T,f[y+1]+=A,f[y+2]+=E,f[h]+=T,f[h+1]+=A,f[h+2]+=E,f[v]+=T,f[v+1]+=A,f[v+2]+=E}const C=new Float32Array(3*c),b=new Float32Array(3*c);for(m=0;m<c;m++){y=3*m,h=y+1,v=y+2;const e=n.Cartesian3.fromArray(s,y,R),t=n.Cartesian3.fromArray(f,y,B),r=n.Cartesian3.dot(e,t);n.Cartesian3.multiplyByScalar(e,r,V),n.Cartesian3.normalize(n.Cartesian3.subtract(t,V,t),t),C[y]=t.x,C[h]=t.y,C[v]=t.z,n.Cartesian3.normalize(n.Cartesian3.cross(e,t,t),t),b[y]=t.x,b[h]=t.y,b[v]=t.z}return e.attributes.tangent=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C}),e.attributes.bitangent=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),e};const k=new r.Cartesian2,F=new n.Cartesian3,_=new n.Cartesian3,U=new n.Cartesian3;let Y=new r.Cartesian2;function Z(e,t){Math.abs(e.y)<o.CesiumMath.EPSILON6&&(e.y=t?-o.CesiumMath.EPSILON6:o.CesiumMath.EPSILON6)}b.compressVertices=function(e){if(!a.defined(e))throw new i.DeveloperError("geometry is required.");const o=e.attributes.extrudeDirection;let s,l;if(a.defined(o)){const r=o.values;l=r.length/3;const i=new Float32Array(2*l);let a=0;for(s=0;s<l;++s)n.Cartesian3.fromArray(r,3*s,F),n.Cartesian3.equals(F,n.Cartesian3.ZERO)?a+=2:(Y=t.AttributeCompression.octEncodeInRange(F,65535,Y),i[a++]=Y.x,i[a++]=Y.y);return e.attributes.compressedAttributes=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:i}),delete e.attributes.extrudeDirection,e}const c=e.attributes.normal,d=e.attributes.st,f=a.defined(c),m=a.defined(d);if(!f&&!m)return e;const y=e.attributes.tangent,h=e.attributes.bitangent,v=a.defined(y),C=a.defined(h);let b,w,g,T;f&&(b=c.values),m&&(w=d.values),v&&(g=y.values),C&&(T=h.values),l=(f?b.length:w.length)/(f?3:2);let A=l,E=m&&f?2:1;E+=v||C?1:0,A*=E;const x=new Float32Array(A);let D=0;for(s=0;s<l;++s){m&&(r.Cartesian2.fromArray(w,2*s,k),x[D++]=t.AttributeCompression.compressTextureCoordinates(k));const e=3*s;f&&a.defined(g)&&a.defined(T)?(n.Cartesian3.fromArray(b,e,F),n.Cartesian3.fromArray(g,e,_),n.Cartesian3.fromArray(T,e,U),t.AttributeCompression.octPack(F,_,U,k),x[D++]=k.x,x[D++]=k.y):(f&&(n.Cartesian3.fromArray(b,e,F),x[D++]=t.AttributeCompression.octEncodeFloat(F)),v&&(n.Cartesian3.fromArray(g,e,F),x[D++]=t.AttributeCompression.octEncodeFloat(F)),C&&(n.Cartesian3.fromArray(T,e,F),x[D++]=t.AttributeCompression.octEncodeFloat(F)))}return e.attributes.compressedAttributes=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:E,values:x}),f&&delete e.attributes.normal,m&&delete e.attributes.st,C&&delete e.attributes.bitangent,v&&delete e.attributes.tangent,e};const H=new n.Cartesian3;function W(e,t,r,i){n.Cartesian3.add(e,n.Cartesian3.multiplyByScalar(n.Cartesian3.subtract(t,e,H),e.y/(e.y-t.y),H),r),n.Cartesian3.clone(r,i),Z(r,!0),Z(i,!1)}const $=new n.Cartesian3,X=new n.Cartesian3,j=new n.Cartesian3,J=new n.Cartesian3,K={positions:new Array(7),indices:new Array(9)};function Q(e,t,r){if(e.x>=0||t.x>=0||r.x>=0)return;!function(e,t,r){if(0!==e.y&&0!==t.y&&0!==r.y)return Z(e,e.y<0),Z(t,t.y<0),void Z(r,r.y<0);const n=Math.abs(e.y),i=Math.abs(t.y),a=Math.abs(r.y);let s;s=n>i?n>a?o.CesiumMath.sign(e.y):o.CesiumMath.sign(r.y):i>a?o.CesiumMath.sign(t.y):o.CesiumMath.sign(r.y);const u=s<0;Z(e,u),Z(t,u),Z(r,u)}(e,t,r);const n=e.y<0,i=t.y<0,a=r.y<0;let s=0;s+=n?1:0,s+=i?1:0,s+=a?1:0;const u=K.indices;1===s?(u[1]=3,u[2]=4,u[5]=6,u[7]=6,u[8]=5,n?(W(e,t,$,j),W(e,r,X,J),u[0]=0,u[3]=1,u[4]=2,u[6]=1):i?(W(t,r,$,j),W(t,e,X,J),u[0]=1,u[3]=2,u[4]=0,u[6]=2):a&&(W(r,e,$,j),W(r,t,X,J),u[0]=2,u[3]=0,u[4]=1,u[6]=0)):2===s&&(u[2]=4,u[4]=4,u[5]=3,u[7]=5,u[8]=6,n?i?a||(W(r,e,$,j),W(r,t,X,J),u[0]=0,u[1]=1,u[3]=0,u[6]=2):(W(t,r,$,j),W(t,e,X,J),u[0]=2,u[1]=0,u[3]=2,u[6]=1):(W(e,t,$,j),W(e,r,X,J),u[0]=1,u[1]=2,u[3]=1,u[6]=0));const l=K.positions;return l[0]=e,l[1]=t,l[2]=r,l.length=3,1!==s&&2!==s||(l[3]=$,l[4]=X,l[5]=j,l[6]=J,l.length=7),K}function ee(e,t){const r=e.attributes;if(0===r.position.values.length)return;for(const e in r)if(r.hasOwnProperty(e)&&a.defined(r[e])&&a.defined(r[e].values)){const t=r[e];t.values=u.ComponentDatatype.createTypedArray(t.componentDatatype,t.values)}const n=p.Geometry.computeNumberOfVertices(e);return e.indices=c.IndexDatatype.createTypedArray(n,e.indices),t&&(e.boundingSphere=s.BoundingSphere.fromVertices(r.position.values)),e}function te(e){const t=e.attributes,r={};for(const e in t)if(t.hasOwnProperty(e)&&a.defined(t[e])&&a.defined(t[e].values)){const n=t[e];r[e]=new p.GeometryAttribute({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return new p.Geometry({attributes:r,indices:[],primitiveType:e.primitiveType})}function re(e,t,r){const n=a.defined(e.geometry.boundingSphere);t=ee(t,n),r=ee(r,n),a.defined(r)&&!a.defined(t)?e.geometry=r:!a.defined(r)&&a.defined(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=r,e.geometry=void 0)}function ne(e,t){const r=new e,n=new e,i=new e;return function(a,o,s,u,l,p,c,d){const f=e.fromArray(l,a*t,r),m=e.fromArray(l,o*t,n),y=e.fromArray(l,s*t,i);e.multiplyByScalar(f,u.x,f),e.multiplyByScalar(m,u.y,m),e.multiplyByScalar(y,u.z,y);const h=e.add(f,m,f);e.add(h,y,h),d&&e.normalize(h,h),e.pack(h,p,c*t)}}const ie=ne(r.Cartesian4,4),ae=ne(n.Cartesian3,3),oe=ne(r.Cartesian2,2),se=function(e,t,r,n,i,a,s){const u=i[e]*n.x,l=i[t]*n.y,p=i[r]*n.z;a[s]=u+l+p>o.CesiumMath.EPSILON6?1:0},ue=new n.Cartesian3,le=new n.Cartesian3,pe=new n.Cartesian3,ce=new n.Cartesian3;function de(e,t,s,u,l,p,c,d,f,v,C,b,w,g,T,A){if(!(a.defined(p)||a.defined(c)||a.defined(d)||a.defined(f)||a.defined(v)||0!==g))return;const E=function(e,t,s,u,l){let p,c,d,f,v,C,b,w;if(i.Check.defined("point",e),i.Check.defined("p0",t),i.Check.defined("p1",s),i.Check.defined("p2",u),a.defined(l)||(l=new n.Cartesian3),a.defined(t.z)){if(n.Cartesian3.equalsEpsilon(e,t,o.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_X,l);if(n.Cartesian3.equalsEpsilon(e,s,o.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_Y,l);if(n.Cartesian3.equalsEpsilon(e,u,o.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_Z,l);p=n.Cartesian3.subtract(s,t,m),c=n.Cartesian3.subtract(u,t,y),d=n.Cartesian3.subtract(e,t,h),f=n.Cartesian3.dot(p,p),v=n.Cartesian3.dot(p,c),C=n.Cartesian3.dot(p,d),b=n.Cartesian3.dot(c,c),w=n.Cartesian3.dot(c,d)}else{if(r.Cartesian2.equalsEpsilon(e,t,o.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_X,l);if(r.Cartesian2.equalsEpsilon(e,s,o.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_Y,l);if(r.Cartesian2.equalsEpsilon(e,u,o.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_Z,l);p=r.Cartesian2.subtract(s,t,m),c=r.Cartesian2.subtract(u,t,y),d=r.Cartesian2.subtract(e,t,h),f=r.Cartesian2.dot(p,p),v=r.Cartesian2.dot(p,c),C=r.Cartesian2.dot(p,d),b=r.Cartesian2.dot(c,c),w=r.Cartesian2.dot(c,d)}l.y=b*C-v*w,l.z=f*w-v*C;const g=f*b-v*v;if(0!==g)return l.y/=g,l.z/=g,l.x=1-l.y-l.z,l}(u,n.Cartesian3.fromArray(l,3*e,ue),n.Cartesian3.fromArray(l,3*t,le),n.Cartesian3.fromArray(l,3*s,pe),ce);if(a.defined(E)){if(a.defined(p)&&ae(e,t,s,E,p,b.normal.values,A,!0),a.defined(v)){const r=n.Cartesian3.fromArray(v,3*e,ue),i=n.Cartesian3.fromArray(v,3*t,le),a=n.Cartesian3.fromArray(v,3*s,pe);let o;n.Cartesian3.multiplyByScalar(r,E.x,r),n.Cartesian3.multiplyByScalar(i,E.y,i),n.Cartesian3.multiplyByScalar(a,E.z,a),n.Cartesian3.equals(r,n.Cartesian3.ZERO)&&n.Cartesian3.equals(i,n.Cartesian3.ZERO)&&n.Cartesian3.equals(a,n.Cartesian3.ZERO)?(o=ue,o.x=0,o.y=0,o.z=0):(o=n.Cartesian3.add(r,i,r),n.Cartesian3.add(o,a,o),n.Cartesian3.normalize(o,o)),n.Cartesian3.pack(o,b.extrudeDirection.values,3*A)}if(a.defined(C)&&se(e,t,s,E,C,b.applyOffset.values,A),a.defined(c)&&ae(e,t,s,E,c,b.tangent.values,A,!0),a.defined(d)&&ae(e,t,s,E,d,b.bitangent.values,A,!0),a.defined(f)&&oe(e,t,s,E,f,b.st.values,A),g>0)for(let r=0;r<g;r++){const n=w[r];fe(e,t,s,E,A,T[n],b[n])}}}function fe(e,t,r,n,i,a,o){const s=a.componentsPerAttribute,u=a.values,l=o.values;switch(s){case 4:ie(e,t,r,n,u,l,i,!1);break;case 3:ae(e,t,r,n,u,l,i,!1);break;case 2:oe(e,t,r,n,u,l,i,!1);break;default:l[i]=u[e]*n.x+u[t]*n.y+u[r]*n.z}}function me(e,t,r,n,i,a){const o=e.position.values.length/3;if(-1!==i){const s=n[i],u=r[s];return-1===u?(r[s]=o,e.position.values.push(a.x,a.y,a.z),t.push(o),o):(t.push(u),u)}return e.position.values.push(a.x,a.y,a.z),t.push(o),o}const ye={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function he(e){const t=e.geometry,r=t.attributes,i=r.position.values,o=a.defined(r.normal)?r.normal.values:void 0,s=a.defined(r.bitangent)?r.bitangent.values:void 0,u=a.defined(r.tangent)?r.tangent.values:void 0,l=a.defined(r.st)?r.st.values:void 0,p=a.defined(r.extrudeDirection)?r.extrudeDirection.values:void 0,c=a.defined(r.applyOffset)?r.applyOffset.values:void 0,d=t.indices,f=[];for(const e in r)r.hasOwnProperty(e)&&!ye[e]&&a.defined(r[e])&&f.push(e);const m=f.length,y=te(t),h=te(t);let v,C,b,w,g;const T=[];T.length=i.length/3;const A=[];for(A.length=i.length/3,g=0;g<T.length;++g)T[g]=-1,A[g]=-1;const E=d.length;for(g=0;g<E;g+=3){const e=d[g],t=d[g+1],E=d[g+2];let x=n.Cartesian3.fromArray(i,3*e),D=n.Cartesian3.fromArray(i,3*t),P=n.Cartesian3.fromArray(i,3*E);const I=Q(x,D,P);if(a.defined(I)&&I.positions.length>3){const n=I.positions,a=I.indices,x=a.length;for(let D=0;D<x;++D){const x=a[D],P=n[x];P.y<0?(v=h.attributes,C=h.indices,b=T):(v=y.attributes,C=y.indices,b=A),w=me(v,C,b,d,x<3?g+x:-1,P),de(e,t,E,P,i,o,u,s,l,p,c,v,f,m,r,w)}}else a.defined(I)&&(x=I.positions[0],D=I.positions[1],P=I.positions[2]),x.y<0?(v=h.attributes,C=h.indices,b=T):(v=y.attributes,C=y.indices,b=A),w=me(v,C,b,d,g,x),de(e,t,E,x,i,o,u,s,l,p,c,v,f,m,r,w),w=me(v,C,b,d,g+1,D),de(e,t,E,D,i,o,u,s,l,p,c,v,f,m,r,w),w=me(v,C,b,d,g+2,P),de(e,t,E,P,i,o,u,s,l,p,c,v,f,m,r,w)}re(e,h,y)}const ve=f.Plane.fromPointNormal(n.Cartesian3.ZERO,n.Cartesian3.UNIT_Y),Ce=new n.Cartesian3,be=new n.Cartesian3;function we(e,t,r,i,s,u,l){if(!a.defined(l))return;const p=n.Cartesian3.fromArray(i,3*e,ue);n.Cartesian3.equalsEpsilon(p,r,o.CesiumMath.EPSILON10)?u.applyOffset.values[s]=l[e]:u.applyOffset.values[s]=l[t]}function ge(e){const t=e.geometry,r=t.attributes,i=r.position.values,s=a.defined(r.applyOffset)?r.applyOffset.values:void 0,u=t.indices,l=te(t),p=te(t);let c;const f=u.length,m=[];m.length=i.length/3;const y=[];for(y.length=i.length/3,c=0;c<m.length;++c)m[c]=-1,y[c]=-1;for(c=0;c<f;c+=2){const e=u[c],t=u[c+1],r=n.Cartesian3.fromArray(i,3*e,ue),f=n.Cartesian3.fromArray(i,3*t,le);let h;Math.abs(r.y)<o.CesiumMath.EPSILON6&&(r.y<0?r.y=-o.CesiumMath.EPSILON6:r.y=o.CesiumMath.EPSILON6),Math.abs(f.y)<o.CesiumMath.EPSILON6&&(f.y<0?f.y=-o.CesiumMath.EPSILON6:f.y=o.CesiumMath.EPSILON6);let v=l.attributes,C=l.indices,b=y,w=p.attributes,g=p.indices,T=m;const A=d.IntersectionTests.lineSegmentPlane(r,f,ve,pe);if(a.defined(A)){const a=n.Cartesian3.multiplyByScalar(n.Cartesian3.UNIT_Y,5*o.CesiumMath.EPSILON9,Ce);r.y<0&&(n.Cartesian3.negate(a,a),v=p.attributes,C=p.indices,b=m,w=l.attributes,g=l.indices,T=y);const d=n.Cartesian3.add(A,a,be);h=me(v,C,b,u,c,r),we(e,t,r,i,h,v,s),h=me(v,C,b,u,-1,d),we(e,t,d,i,h,v,s),n.Cartesian3.negate(a,a),n.Cartesian3.add(A,a,d),h=me(w,g,T,u,-1,d),we(e,t,d,i,h,w,s),h=me(w,g,T,u,c+1,f),we(e,t,f,i,h,w,s)}else{let n,a,o;r.y<0?(n=p.attributes,a=p.indices,o=m):(n=l.attributes,a=l.indices,o=y),h=me(n,a,o,u,c,r),we(e,t,r,i,h,n,s),h=me(n,a,o,u,c+1,f),we(e,t,f,i,h,n,s)}}re(e,p,l)}const Te=new r.Cartesian2,Ae=new r.Cartesian2,Ee=new n.Cartesian3,xe=new n.Cartesian3,De=new n.Cartesian3,Pe=new n.Cartesian3,Ie=new n.Cartesian3,Se=new n.Cartesian3,Ne=new r.Cartesian4;function Oe(e){const t=e.attributes,r=t.position.values,i=t.prevPosition.values,a=t.nextPosition.values,o=r.length;for(let e=0;e<o;e+=3){const t=n.Cartesian3.unpack(r,e,Ee);if(t.x>0)continue;const s=n.Cartesian3.unpack(i,e,xe);(t.y<0&&s.y>0||t.y>0&&s.y<0)&&(e-3>0?(i[e]=r[e-3],i[e+1]=r[e-2],i[e+2]=r[e-1]):n.Cartesian3.pack(t,i,e));const u=n.Cartesian3.unpack(a,e,De);(t.y<0&&u.y>0||t.y>0&&u.y<0)&&(e+3<o?(a[e]=r[e+3],a[e+1]=r[e+4],a[e+2]=r[e+5]):n.Cartesian3.pack(t,a,e))}}const Le=5*o.CesiumMath.EPSILON9,ze=o.CesiumMath.EPSILON6;b.splitLongitude=function(e){if(!a.defined(e))throw new i.DeveloperError("instance is required.");const t=e.geometry,u=t.boundingSphere;if(a.defined(u)&&(u.center.x-u.radius>0||s.BoundingSphere.intersectPlane(u,f.Plane.ORIGIN_ZX_PLANE)!==s.Intersect.INTERSECTING))return e;if(t.geometryType!==p.GeometryType.NONE)switch(t.geometryType){case p.GeometryType.POLYLINES:!function(e){const t=e.geometry,i=t.attributes,s=i.position.values,u=i.prevPosition.values,l=i.nextPosition.values,p=i.expandAndWidth.values,c=a.defined(i.st)?i.st.values:void 0,f=a.defined(i.color)?i.color.values:void 0,m=te(t),y=te(t);let h,v,C,b=!1;const w=s.length/3;for(h=0;h<w;h+=4){const e=h,t=h+2,i=n.Cartesian3.fromArray(s,3*e,Ee),w=n.Cartesian3.fromArray(s,3*t,xe);if(Math.abs(i.y)<ze)for(i.y=ze*(w.y<0?-1:1),s[3*h+1]=i.y,s[3*(h+1)+1]=i.y,v=3*e;v<3*e+12;v+=3)u[v]=s[3*h],u[v+1]=s[3*h+1],u[v+2]=s[3*h+2];if(Math.abs(w.y)<ze)for(w.y=ze*(i.y<0?-1:1),s[3*(h+2)+1]=w.y,s[3*(h+3)+1]=w.y,v=3*e;v<3*e+12;v+=3)l[v]=s[3*(h+2)],l[v+1]=s[3*(h+2)+1],l[v+2]=s[3*(h+2)+2];let g=m.attributes,T=m.indices,A=y.attributes,E=y.indices;const x=d.IntersectionTests.lineSegmentPlane(i,w,ve,Pe);if(a.defined(x)){b=!0;const s=n.Cartesian3.multiplyByScalar(n.Cartesian3.UNIT_Y,Le,Ie);i.y<0&&(n.Cartesian3.negate(s,s),g=y.attributes,T=y.indices,A=m.attributes,E=m.indices);const d=n.Cartesian3.add(x,s,Se);g.position.values.push(i.x,i.y,i.z,i.x,i.y,i.z),g.position.values.push(d.x,d.y,d.z),g.position.values.push(d.x,d.y,d.z),g.prevPosition.values.push(u[3*e],u[3*e+1],u[3*e+2]),g.prevPosition.values.push(u[3*e+3],u[3*e+4],u[3*e+5]),g.prevPosition.values.push(i.x,i.y,i.z,i.x,i.y,i.z),g.nextPosition.values.push(d.x,d.y,d.z),g.nextPosition.values.push(d.x,d.y,d.z),g.nextPosition.values.push(d.x,d.y,d.z),g.nextPosition.values.push(d.x,d.y,d.z),n.Cartesian3.negate(s,s),n.Cartesian3.add(x,s,d),A.position.values.push(d.x,d.y,d.z),A.position.values.push(d.x,d.y,d.z),A.position.values.push(w.x,w.y,w.z,w.x,w.y,w.z),A.prevPosition.values.push(d.x,d.y,d.z),A.prevPosition.values.push(d.x,d.y,d.z),A.prevPosition.values.push(d.x,d.y,d.z),A.prevPosition.values.push(d.x,d.y,d.z),A.nextPosition.values.push(w.x,w.y,w.z,w.x,w.y,w.z),A.nextPosition.values.push(l[3*t],l[3*t+1],l[3*t+2]),A.nextPosition.values.push(l[3*t+3],l[3*t+4],l[3*t+5]);const D=r.Cartesian2.fromArray(p,2*e,Te),P=Math.abs(D.y);g.expandAndWidth.values.push(-1,P,1,P),g.expandAndWidth.values.push(-1,-P,1,-P),A.expandAndWidth.values.push(-1,P,1,P),A.expandAndWidth.values.push(-1,-P,1,-P);let I=n.Cartesian3.magnitudeSquared(n.Cartesian3.subtract(x,i,De));if(I/=n.Cartesian3.magnitudeSquared(n.Cartesian3.subtract(w,i,De)),a.defined(f)){const n=r.Cartesian4.fromArray(f,4*e,Ne),i=r.Cartesian4.fromArray(f,4*t,Ne),a=o.CesiumMath.lerp(n.x,i.x,I),s=o.CesiumMath.lerp(n.y,i.y,I),u=o.CesiumMath.lerp(n.z,i.z,I),l=o.CesiumMath.lerp(n.w,i.w,I);for(v=4*e;v<4*e+8;++v)g.color.values.push(f[v]);for(g.color.values.push(a,s,u,l),g.color.values.push(a,s,u,l),A.color.values.push(a,s,u,l),A.color.values.push(a,s,u,l),v=4*t;v<4*t+8;++v)A.color.values.push(f[v])}if(a.defined(c)){const n=r.Cartesian2.fromArray(c,2*e,Te),i=r.Cartesian2.fromArray(c,2*(h+3),Ae),a=o.CesiumMath.lerp(n.x,i.x,I);for(v=2*e;v<2*e+4;++v)g.st.values.push(c[v]);for(g.st.values.push(a,n.y),g.st.values.push(a,i.y),A.st.values.push(a,n.y),A.st.values.push(a,i.y),v=2*t;v<2*t+4;++v)A.st.values.push(c[v])}C=g.position.values.length/3-4,T.push(C,C+2,C+1),T.push(C+1,C+2,C+3),C=A.position.values.length/3-4,E.push(C,C+2,C+1),E.push(C+1,C+2,C+3)}else{let e,t;for(i.y<0?(e=y.attributes,t=y.indices):(e=m.attributes,t=m.indices),e.position.values.push(i.x,i.y,i.z),e.position.values.push(i.x,i.y,i.z),e.position.values.push(w.x,w.y,w.z),e.position.values.push(w.x,w.y,w.z),v=3*h;v<3*h+12;++v)e.prevPosition.values.push(u[v]),e.nextPosition.values.push(l[v]);for(v=2*h;v<2*h+8;++v)e.expandAndWidth.values.push(p[v]),a.defined(c)&&e.st.values.push(c[v]);if(a.defined(f))for(v=4*h;v<4*h+16;++v)e.color.values.push(f[v]);C=e.position.values.length/3-4,t.push(C,C+2,C+1),t.push(C+1,C+2,C+3)}}b&&(Oe(y),Oe(m)),re(e,y,m)}(e);break;case p.GeometryType.TRIANGLES:he(e);break;case p.GeometryType.LINES:ge(e)}else(function(e){switch(e.primitiveType){case p.PrimitiveType.TRIANGLE_FAN:return function(e){const t=p.Geometry.computeNumberOfVertices(e);if(t<3)throw new i.DeveloperError("The number of vertices must be at least three.");const r=c.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=1,r[1]=0,r[2]=2;let n=3;for(let e=3;e<t;++e)r[n++]=e-1,r[n++]=0,r[n++]=e;return e.indices=r,e.primitiveType=p.PrimitiveType.TRIANGLES,e}(e);case p.PrimitiveType.TRIANGLE_STRIP:return function(e){const t=p.Geometry.computeNumberOfVertices(e);if(t<3)throw new i.DeveloperError("The number of vertices must be at least 3.");const r=c.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=0,r[1]=1,r[2]=2,t>3&&(r[3]=0,r[4]=2,r[5]=3);let n=6;for(let e=3;e<t-1;e+=2)r[n++]=e,r[n++]=e-1,r[n++]=e+1,e+2<t&&(r[n++]=e,r[n++]=e+1,r[n++]=e+2);return e.indices=r,e.primitiveType=p.PrimitiveType.TRIANGLES,e}(e);case p.PrimitiveType.TRIANGLES:return function(e){if(a.defined(e.indices))return e;const t=p.Geometry.computeNumberOfVertices(e);if(t<3)throw new i.DeveloperError("The number of vertices must be at least three.");if(t%3!=0)throw new i.DeveloperError("The number of vertices must be a multiple of three.");const r=c.IndexDatatype.createTypedArray(t,t);for(let e=0;e<t;++e)r[e]=e;return e.indices=r,e}(e);case p.PrimitiveType.LINE_STRIP:return function(e){const t=p.Geometry.computeNumberOfVertices(e);if(t<2)throw new i.DeveloperError("The number of vertices must be at least two.");const r=c.IndexDatatype.createTypedArray(t,2*(t-1));r[0]=0,r[1]=1;let n=2;for(let e=2;e<t;++e)r[n++]=e-1,r[n++]=e;return e.indices=r,e.primitiveType=p.PrimitiveType.LINES,e}(e);case p.PrimitiveType.LINE_LOOP:return function(e){const t=p.Geometry.computeNumberOfVertices(e);if(t<2)throw new i.DeveloperError("The number of vertices must be at least two.");const r=c.IndexDatatype.createTypedArray(t,2*t);r[0]=0,r[1]=1;let n=2;for(let e=2;e<t;++e)r[n++]=e-1,r[n++]=e;return r[n++]=t-1,r[n]=0,e.indices=r,e.primitiveType=p.PrimitiveType.LINES,e}(e);case p.PrimitiveType.LINES:return function(e){if(a.defined(e.indices))return e;const t=p.Geometry.computeNumberOfVertices(e);if(t<2)throw new i.DeveloperError("The number of vertices must be at least two.");if(t%2!=0)throw new i.DeveloperError("The number of vertices must be a multiple of 2.");const r=c.IndexDatatype.createTypedArray(t,t);for(let e=0;e<t;++e)r[e]=e;return e.indices=r,e}(e)}})(t),t.primitiveType===p.PrimitiveType.TRIANGLES?he(e):t.primitiveType===p.PrimitiveType.LINES&&ge(e);return e};var Me=b;e.GeometryPipeline=Me}));