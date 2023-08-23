define(["./defaultValue-fe22d8c0","./Matrix3-41c58dde","./Matrix2-e1298525","./Transforms-e2d4a55a","./Check-6ede7e26","./ComponentDatatype-cf1fa08e","./GeometryAttribute-13da9466","./GeometryAttributes-ad136444","./GeometryInstance-34d9e21e","./GeometryOffsetAttribute-9ad0019c","./GeometryPipeline-03bc5709","./IndexDatatype-2643aa47","./Math-0a2ac845","./PolygonPipeline-460cce4e","./RectangleGeometryLibrary-bb378fb6","./VertexFormat-030f11ff","./RuntimeError-ef395448","./combine-d9581036","./WebGLConstants-0b1ce7ba","./AttributeCompression-f9f6c717","./EncodedCartesian3-57415c8a","./IntersectionTests-85350792","./Plane-4c3d403b","./EllipsoidRhumbLine-ef872433"],(function(t,e,n,a,o,r,i,s,l,u,c,m,p,d,g,y,f,h,b,_,A,w,x,C){"use strict";const v=new e.Cartesian3,R=new e.Cartesian3,E=new e.Cartesian3,G=new e.Cartesian3,F=new n.Rectangle,P=new n.Cartesian2,V=new a.BoundingSphere,D=new a.BoundingSphere;function L(t,e){const n=new i.Geometry({attributes:new s.GeometryAttributes,primitiveType:i.PrimitiveType.TRIANGLES});return n.attributes.position=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(n.attributes.normal=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(n.attributes.tangent=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(n.attributes.bitangent=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),n}const M=new e.Cartesian3,O=new e.Cartesian3;function T(t,n){const a=t._vertexFormat,o=t._ellipsoid,s=n.height,l=n.width,u=n.northCap,c=n.southCap;let p=0,d=s,y=s,f=0;u&&(p=1,y-=1,f+=1),c&&(d-=1,y-=1,f+=1),f+=l*y;const h=a.position?new Float64Array(3*f):void 0,b=a.st?new Float32Array(2*f):void 0;let _=0,A=0;const w=v,x=P;let C=Number.MAX_VALUE,F=Number.MAX_VALUE,V=-Number.MAX_VALUE,D=-Number.MAX_VALUE;for(let t=p;t<d;++t)for(let e=0;e<l;++e)g.RectangleGeometryLibrary.computePosition(n,o,a.st,t,e,w,x),h[_++]=w.x,h[_++]=w.y,h[_++]=w.z,a.st&&(b[A++]=x.x,b[A++]=x.y,C=Math.min(C,x.x),F=Math.min(F,x.y),V=Math.max(V,x.x),D=Math.max(D,x.y));if(u&&(g.RectangleGeometryLibrary.computePosition(n,o,a.st,0,0,w,x),h[_++]=w.x,h[_++]=w.y,h[_++]=w.z,a.st&&(b[A++]=x.x,b[A++]=x.y,C=x.x,F=x.y,V=x.x,D=x.y)),c&&(g.RectangleGeometryLibrary.computePosition(n,o,a.st,s-1,0,w,x),h[_++]=w.x,h[_++]=w.y,h[_]=w.z,a.st&&(b[A++]=x.x,b[A]=x.y,C=Math.min(C,x.x),F=Math.min(F,x.y),V=Math.max(V,x.x),D=Math.max(D,x.y))),a.st&&(C<0||F<0||V>1||D>1))for(let t=0;t<b.length;t+=2)b[t]=(b[t]-C)/(V-C),b[t+1]=(b[t+1]-F)/(D-F);const M=function(t,n,a,o){const r=t.length,i=n.normal?new Float32Array(r):void 0,s=n.tangent?new Float32Array(r):void 0,l=n.bitangent?new Float32Array(r):void 0;let u=0;const c=G,m=E;let p=R;if(n.normal||n.tangent||n.bitangent)for(let d=0;d<r;d+=3){const r=e.Cartesian3.fromArray(t,d,v),g=u+1,y=u+2;p=a.geodeticSurfaceNormal(r,p),(n.tangent||n.bitangent)&&(e.Cartesian3.cross(e.Cartesian3.UNIT_Z,p,m),e.Matrix3.multiplyByVector(o,m,m),e.Cartesian3.normalize(m,m),n.bitangent&&e.Cartesian3.normalize(e.Cartesian3.cross(p,m,c),c)),n.normal&&(i[u]=p.x,i[g]=p.y,i[y]=p.z),n.tangent&&(s[u]=m.x,s[g]=m.y,s[y]=m.z),n.bitangent&&(l[u]=c.x,l[g]=c.y,l[y]=c.z),u+=3}return L(n,{positions:t,normals:i,tangents:s,bitangents:l})}(h,a,o,n.tangentRotationMatrix);let O=6*(l-1)*(y-1);u&&(O+=3*(l-1)),c&&(O+=3*(l-1));const T=m.IndexDatatype.createTypedArray(f,O);let N,k=0,S=0;for(N=0;N<y-1;++N){for(let t=0;t<l-1;++t){const t=k,e=t+l,n=e+1,a=t+1;T[S++]=t,T[S++]=e,T[S++]=a,T[S++]=a,T[S++]=e,T[S++]=n,++k}++k}if(u||c){let t=f-1;const e=f-1;let n,a;if(u&&c&&(t=f-2),k=0,u)for(N=0;N<l-1;N++)n=k,a=n+1,T[S++]=t,T[S++]=n,T[S++]=a,++k;if(c)for(k=(y-1)*l,N=0;N<l-1;N++)n=k,a=n+1,T[S++]=n,T[S++]=e,T[S++]=a,++k}return M.indices=T,a.st&&(M.attributes.st=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:b})),M}function N(t,e,n,a,o){return t[e++]=a[n],t[e++]=a[n+1],t[e++]=a[n+2],t[e++]=o[n],t[e++]=o[n+1],t[e]=o[n+2],t}function k(t,e,n,a){return t[e++]=a[n],t[e++]=a[n+1],t[e++]=a[n],t[e]=a[n+1],t}const S=new y.VertexFormat;const I=[new e.Cartesian3,new e.Cartesian3,new e.Cartesian3,new e.Cartesian3],H=new e.Cartographic,z=new e.Cartographic;function B(t,e,a,o,r){if(0===a)return n.Rectangle.clone(t,r);const i=g.RectangleGeometryLibrary.computeOptions(t,e,a,0,F,H),s=i.height,l=i.width,u=I;return g.RectangleGeometryLibrary.computePosition(i,o,!1,0,0,u[0]),g.RectangleGeometryLibrary.computePosition(i,o,!1,0,l-1,u[1]),g.RectangleGeometryLibrary.computePosition(i,o,!1,s-1,0,u[2]),g.RectangleGeometryLibrary.computePosition(i,o,!1,s-1,l-1,u[3]),n.Rectangle.fromCartesianArray(u,o,r)}function U(a){const r=(a=t.defaultValue(a,t.defaultValue.EMPTY_OBJECT)).rectangle;if(o.Check.typeOf.object("rectangle",r),n.Rectangle.validate(r),r.north<r.south)throw new o.DeveloperError("options.rectangle.north must be greater than or equal to options.rectangle.south");const i=t.defaultValue(a.height,0),s=t.defaultValue(a.extrudedHeight,i);this._rectangle=n.Rectangle.clone(r),this._granularity=t.defaultValue(a.granularity,p.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=e.Ellipsoid.clone(t.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(i,s),this._rotation=t.defaultValue(a.rotation,0),this._stRotation=t.defaultValue(a.stRotation,0),this._vertexFormat=y.VertexFormat.clone(t.defaultValue(a.vertexFormat,y.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(i,s),this._shadowVolume=t.defaultValue(a.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=a.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}U.packedLength=n.Rectangle.packedLength+e.Ellipsoid.packedLength+y.VertexFormat.packedLength+7,U.pack=function(a,r,i){return o.Check.typeOf.object("value",a),o.Check.defined("array",r),i=t.defaultValue(i,0),n.Rectangle.pack(a._rectangle,r,i),i+=n.Rectangle.packedLength,e.Ellipsoid.pack(a._ellipsoid,r,i),i+=e.Ellipsoid.packedLength,y.VertexFormat.pack(a._vertexFormat,r,i),i+=y.VertexFormat.packedLength,r[i++]=a._granularity,r[i++]=a._surfaceHeight,r[i++]=a._rotation,r[i++]=a._stRotation,r[i++]=a._extrudedHeight,r[i++]=a._shadowVolume?1:0,r[i]=t.defaultValue(a._offsetAttribute,-1),r};const q=new n.Rectangle,Y=e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),j={rectangle:q,ellipsoid:Y,vertexFormat:S,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};U.unpack=function(a,r,i){o.Check.defined("array",a),r=t.defaultValue(r,0);const s=n.Rectangle.unpack(a,r,q);r+=n.Rectangle.packedLength;const l=e.Ellipsoid.unpack(a,r,Y);r+=e.Ellipsoid.packedLength;const u=y.VertexFormat.unpack(a,r,S);r+=y.VertexFormat.packedLength;const c=a[r++],m=a[r++],p=a[r++],d=a[r++],g=a[r++],f=1===a[r++],h=a[r];return t.defined(i)?(i._rectangle=n.Rectangle.clone(s,i._rectangle),i._ellipsoid=e.Ellipsoid.clone(l,i._ellipsoid),i._vertexFormat=y.VertexFormat.clone(u,i._vertexFormat),i._granularity=c,i._surfaceHeight=m,i._rotation=p,i._stRotation=d,i._extrudedHeight=g,i._shadowVolume=f,i._offsetAttribute=-1===h?void 0:h,i):(j.granularity=c,j.height=m,j.rotation=p,j.stRotation=d,j.extrudedHeight=g,j.shadowVolume=f,j.offsetAttribute=-1===h?void 0:h,new U(j))},U.computeRectangle=function(a,r){const i=(a=t.defaultValue(a,t.defaultValue.EMPTY_OBJECT)).rectangle;if(o.Check.typeOf.object("rectangle",i),n.Rectangle.validate(i),i.north<i.south)throw new o.DeveloperError("options.rectangle.north must be greater than or equal to options.rectangle.south");const s=t.defaultValue(a.granularity,p.CesiumMath.RADIANS_PER_DEGREE),l=t.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84);return B(i,s,t.defaultValue(a.rotation,0),l,r)};const X=new e.Matrix3,Q=new a.Quaternion,W=new e.Cartographic;U.createGeometry=function(o){if(p.CesiumMath.equalsEpsilon(o._rectangle.north,o._rectangle.south,p.CesiumMath.EPSILON10)||p.CesiumMath.equalsEpsilon(o._rectangle.east,o._rectangle.west,p.CesiumMath.EPSILON10))return;let s=o._rectangle;const f=o._ellipsoid,h=o._rotation,b=o._stRotation,_=o._vertexFormat,A=g.RectangleGeometryLibrary.computeOptions(s,o._granularity,h,b,F,H,z),w=X;if(0!==b||0!==h){const t=n.Rectangle.center(s,W),o=f.geodeticSurfaceNormalCartographic(t,M);a.Quaternion.fromAxisAngle(o,-b,Q),e.Matrix3.fromQuaternion(Q,w)}else e.Matrix3.clone(e.Matrix3.IDENTITY,w);const x=o._surfaceHeight,C=o._extrudedHeight,P=!p.CesiumMath.equalsEpsilon(x,C,0,p.CesiumMath.EPSILON2);let I,B;if(A.lonScalar=1/o._rectangle.width,A.latScalar=1/o._rectangle.height,A.tangentRotationMatrix=w,s=o._rectangle,P){I=function(n,a){const o=n._shadowVolume,s=n._offsetAttribute,g=n._vertexFormat,f=n._extrudedHeight,h=n._surfaceHeight,b=n._ellipsoid,_=a.height,A=a.width;let w;if(o){const t=y.VertexFormat.clone(g,S);t.normal=!0,n._vertexFormat=t}const x=T(n,a);o&&(n._vertexFormat=g);let C=d.PolygonPipeline.scaleToGeodeticHeight(x.attributes.position.values,h,b,!1);C=new Float64Array(C);let F=C.length;const P=2*F,V=new Float64Array(P);V.set(C);const D=d.PolygonPipeline.scaleToGeodeticHeight(x.attributes.position.values,f,b);V.set(D,F),x.attributes.position.values=V;const I=g.normal?new Float32Array(P):void 0,H=g.tangent?new Float32Array(P):void 0,z=g.bitangent?new Float32Array(P):void 0,B=g.st?new Float32Array(P/3*2):void 0;let U,q,Y;if(g.normal){for(q=x.attributes.normal.values,I.set(q),w=0;w<F;w++)q[w]=-q[w];I.set(q,F),x.attributes.normal.values=I}if(o){q=x.attributes.normal.values,g.normal||(x.attributes.normal=void 0);const t=new Float32Array(P);for(w=0;w<F;w++)q[w]=-q[w];t.set(q,F),x.attributes.extrudeDirection=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}const j=t.defined(s);if(j){const t=F/3*2;let e=new Uint8Array(t);s===u.GeometryOffsetAttribute.TOP?e=e.fill(1,0,t/2):(Y=s===u.GeometryOffsetAttribute.NONE?0:1,e=e.fill(Y)),x.attributes.applyOffset=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}if(g.tangent){const t=x.attributes.tangent.values;for(H.set(t),w=0;w<F;w++)t[w]=-t[w];H.set(t,F),x.attributes.tangent.values=H}if(g.bitangent){const t=x.attributes.bitangent.values;z.set(t),z.set(t,F),x.attributes.bitangent.values=z}g.st&&(U=x.attributes.st.values,B.set(U),B.set(U,F/3*2),x.attributes.st.values=B);const X=x.indices,Q=X.length,W=F/3,J=m.IndexDatatype.createTypedArray(P/3,2*Q);for(J.set(X),w=0;w<Q;w+=3)J[w+Q]=X[w+2]+W,J[w+1+Q]=X[w+1]+W,J[w+2+Q]=X[w]+W;x.indices=J;const Z=a.northCap,K=a.southCap;let $=_,tt=2,et=0,nt=4,at=4;Z&&(tt-=1,$-=1,et+=1,nt-=2,at-=1),K&&(tt-=1,$-=1,et+=1,nt-=2,at-=1),et+=tt*A+2*$-nt;const ot=2*(et+at);let rt=new Float64Array(3*ot);const it=o?new Float32Array(3*ot):void 0;let st=j?new Uint8Array(ot):void 0,lt=g.st?new Float32Array(2*ot):void 0;const ut=s===u.GeometryOffsetAttribute.TOP;j&&!ut&&(Y=s===u.GeometryOffsetAttribute.ALL?1:0,st=st.fill(Y));let ct=0,mt=0,pt=0,dt=0;const gt=A*$;let yt;for(w=0;w<gt;w+=A)yt=3*w,rt=N(rt,ct,yt,C,D),ct+=6,g.st&&(lt=k(lt,mt,2*w,U),mt+=4),o&&(pt+=3,it[pt++]=q[yt],it[pt++]=q[yt+1],it[pt++]=q[yt+2]),ut&&(st[dt++]=1,dt+=1);if(K){const t=Z?gt+1:gt;for(yt=3*t,w=0;w<2;w++)rt=N(rt,ct,yt,C,D),ct+=6,g.st&&(lt=k(lt,mt,2*t,U),mt+=4),o&&(pt+=3,it[pt++]=q[yt],it[pt++]=q[yt+1],it[pt++]=q[yt+2]),ut&&(st[dt++]=1,dt+=1)}else for(w=gt-A;w<gt;w++)yt=3*w,rt=N(rt,ct,yt,C,D),ct+=6,g.st&&(lt=k(lt,mt,2*w,U),mt+=4),o&&(pt+=3,it[pt++]=q[yt],it[pt++]=q[yt+1],it[pt++]=q[yt+2]),ut&&(st[dt++]=1,dt+=1);for(w=gt-1;w>0;w-=A)yt=3*w,rt=N(rt,ct,yt,C,D),ct+=6,g.st&&(lt=k(lt,mt,2*w,U),mt+=4),o&&(pt+=3,it[pt++]=q[yt],it[pt++]=q[yt+1],it[pt++]=q[yt+2]),ut&&(st[dt++]=1,dt+=1);if(Z){const t=gt;for(yt=3*t,w=0;w<2;w++)rt=N(rt,ct,yt,C,D),ct+=6,g.st&&(lt=k(lt,mt,2*t,U),mt+=4),o&&(pt+=3,it[pt++]=q[yt],it[pt++]=q[yt+1],it[pt++]=q[yt+2]),ut&&(st[dt++]=1,dt+=1)}else for(w=A-1;w>=0;w--)yt=3*w,rt=N(rt,ct,yt,C,D),ct+=6,g.st&&(lt=k(lt,mt,2*w,U),mt+=4),o&&(pt+=3,it[pt++]=q[yt],it[pt++]=q[yt+1],it[pt++]=q[yt+2]),ut&&(st[dt++]=1,dt+=1);let ft=function(t,n,a){const o=t.length,r=n.normal?new Float32Array(o):void 0,i=n.tangent?new Float32Array(o):void 0,s=n.bitangent?new Float32Array(o):void 0;let l=0,u=0,c=0,m=!0,d=G,g=E,y=R;if(n.normal||n.tangent||n.bitangent)for(let f=0;f<o;f+=6){const h=e.Cartesian3.fromArray(t,f,v),b=e.Cartesian3.fromArray(t,(f+6)%o,M);if(m){const n=e.Cartesian3.fromArray(t,(f+3)%o,O);e.Cartesian3.subtract(b,h,b),e.Cartesian3.subtract(n,h,n),y=e.Cartesian3.normalize(e.Cartesian3.cross(n,b,y),y),m=!1}e.Cartesian3.equalsEpsilon(b,h,p.CesiumMath.EPSILON10)&&(m=!0),(n.tangent||n.bitangent)&&(d=a.geodeticSurfaceNormal(h,d),n.tangent&&(g=e.Cartesian3.normalize(e.Cartesian3.cross(d,y,g),g))),n.normal&&(r[l++]=y.x,r[l++]=y.y,r[l++]=y.z,r[l++]=y.x,r[l++]=y.y,r[l++]=y.z),n.tangent&&(i[u++]=g.x,i[u++]=g.y,i[u++]=g.z,i[u++]=g.x,i[u++]=g.y,i[u++]=g.z),n.bitangent&&(s[c++]=d.x,s[c++]=d.y,s[c++]=d.z,s[c++]=d.x,s[c++]=d.y,s[c++]=d.z)}return L(n,{positions:t,normals:r,tangents:i,bitangents:s})}(rt,g,b);g.st&&(ft.attributes.st=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:lt})),o&&(ft.attributes.extrudeDirection=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:it})),j&&(ft.attributes.applyOffset=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:st}));const ht=m.IndexDatatype.createTypedArray(ot,6*et);let bt,_t,At,wt;F=rt.length/3;let xt=0;for(w=0;w<F-1;w+=2){bt=w,wt=(bt+2)%F;const t=e.Cartesian3.fromArray(rt,3*bt,M),n=e.Cartesian3.fromArray(rt,3*wt,O);e.Cartesian3.equalsEpsilon(t,n,p.CesiumMath.EPSILON10)||(_t=(bt+1)%F,At=(_t+2)%F,ht[xt++]=bt,ht[xt++]=_t,ht[xt++]=wt,ht[xt++]=wt,ht[xt++]=_t,ht[xt++]=At)}return ft.indices=ht,ft=c.GeometryPipeline.combineInstances([new l.GeometryInstance({geometry:x}),new l.GeometryInstance({geometry:ft})]),ft[0]}(o,A);const n=a.BoundingSphere.fromRectangle3D(s,f,x,D),g=a.BoundingSphere.fromRectangle3D(s,f,C,V);B=a.BoundingSphere.union(n,g)}else{if(I=T(o,A),I.attributes.position.values=d.PolygonPipeline.scaleToGeodeticHeight(I.attributes.position.values,x,f,!1),t.defined(o._offsetAttribute)){const t=I.attributes.position.values.length,e=o._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,n=new Uint8Array(t/3).fill(e);I.attributes.applyOffset=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}B=a.BoundingSphere.fromRectangle3D(s,f,x)}return _.position||delete I.attributes.position,new i.Geometry({attributes:I.attributes,indices:I.indices,primitiveType:I.primitiveType,boundingSphere:B,offsetAttribute:o._offsetAttribute})},U.createShadowVolume=function(t,e,n){const a=t._granularity,o=t._ellipsoid,r=e(a,o),i=n(a,o);return new U({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:o,stRotation:t._stRotation,granularity:a,extrudedHeight:i,height:r,vertexFormat:y.VertexFormat.POSITION_ONLY,shadowVolume:!0})};const J=new n.Rectangle,Z=[new n.Cartesian2,new n.Cartesian2,new n.Cartesian2],K=new n.Matrix2,$=new e.Cartographic;return Object.defineProperties(U.prototype,{rectangle:{get:function(){return t.defined(this._rotatedRectangle)||(this._rotatedRectangle=B(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return t.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];const e=n.Rectangle.clone(t._rectangle,J),a=t._granularity,o=t._ellipsoid,r=B(e,a,t._rotation-t._stRotation,o,J),i=Z;i[0].x=r.west,i[0].y=r.south,i[1].x=r.west,i[1].y=r.north,i[2].x=r.east,i[2].y=r.south;const s=t.rectangle,l=n.Matrix2.fromRotation(t._stRotation,K),u=n.Rectangle.center(s,$);for(let t=0;t<3;++t){const e=i[t];e.x-=u.longitude,e.y-=u.latitude,n.Matrix2.multiplyByVector(l,e,e),e.x+=u.longitude,e.y+=u.latitude,e.x=(e.x-s.west)/s.width,e.y=(e.y-s.south)/s.height}const c=i[0],m=i[1],p=i[2],d=new Array(6);return n.Cartesian2.pack(c,d),n.Cartesian2.pack(m,d,2),n.Cartesian2.pack(p,d,4),d}(this)),this._textureCoordinateRotationPoints}}}),function(a,o){return t.defined(o)&&(a=U.unpack(a,o)),a._ellipsoid=e.Ellipsoid.clone(a._ellipsoid),a._rectangle=n.Rectangle.clone(a._rectangle),U.createGeometry(a)}}));