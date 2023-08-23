define(["./defaultValue-fe22d8c0","./Matrix3-41c58dde","./ArcType-2d9abbbc","./BoundingRectangle-5fd6403a","./Transforms-e2d4a55a","./Matrix2-e1298525","./Check-6ede7e26","./ComponentDatatype-cf1fa08e","./EllipsoidGeodesic-5b3623dc","./EllipsoidTangentPlane-546c0d5e","./GeometryAttribute-13da9466","./GeometryInstance-34d9e21e","./GeometryOffsetAttribute-9ad0019c","./GeometryPipeline-03bc5709","./IndexDatatype-2643aa47","./Math-0a2ac845","./PolygonGeometryLibrary-d447448d","./PolygonPipeline-460cce4e","./VertexFormat-030f11ff","./combine-d9581036","./RuntimeError-ef395448","./WebGLConstants-0b1ce7ba","./AxisAlignedBoundingBox-4bfd84f3","./IntersectionTests-85350792","./Plane-4c3d403b","./AttributeCompression-f9f6c717","./EncodedCartesian3-57415c8a","./arrayRemoveDuplicates-d2061e85","./EllipsoidRhumbLine-ef872433","./GeometryAttributes-ad136444"],(function(e,t,o,r,i,n,a,s,l,c,u,p,d,y,g,m,h,f,b,C,_,P,x,T,w,A,I,E,v,G){"use strict";const O=new t.Cartographic,H=new t.Cartographic;function D(e,t,o,r){const i=r.cartesianToCartographic(e,O).height,n=r.cartesianToCartographic(t,H);n.height=i,r.cartographicToCartesian(n,t);const a=r.cartesianToCartographic(o,H);a.height=i-100,r.cartographicToCartesian(a,o)}const V=new r.BoundingRectangle,L=new t.Cartesian3,N=new t.Cartesian3,F=new t.Cartesian3,R=new t.Cartesian3,M=new t.Cartesian3,k=new t.Cartesian3;let S=new t.Cartesian3,B=new t.Cartesian3,z=new t.Cartesian3;const U=new n.Cartesian2,W=new n.Cartesian2,Y=new t.Cartesian3,j=new i.Quaternion,Q=new t.Matrix3,q=new t.Matrix3;function K(o){const r=o.vertexFormat,a=o.geometry,l=o.shadowVolume,c=a.attributes.position.values,p=e.defined(a.attributes.st)?a.attributes.st.values:void 0;let y=c.length;const g=o.wall,h=o.top||g,f=o.bottom||g;if(r.st||r.normal||r.tangent||r.bitangent||l){const d=o.boundingRectangle,b=o.tangentPlane,C=o.ellipsoid,_=o.stRotation,P=o.perPositionHeight,x=U;x.x=d.x,x.y=d.y;const T=r.st?new Float32Array(y/3*2):void 0;let w;r.normal&&(w=P&&h&&!g?a.attributes.normal.values:new Float32Array(y));const A=r.tangent?new Float32Array(y):void 0,I=r.bitangent?new Float32Array(y):void 0,E=l?new Float32Array(y):void 0;let v=0,G=0,O=N,H=F,V=R,K=!0,Z=Q,J=q;if(0!==_){let e=i.Quaternion.fromAxisAngle(b._plane.normal,_,j);Z=t.Matrix3.fromQuaternion(e,Z),e=i.Quaternion.fromAxisAngle(b._plane.normal,-_,j),J=t.Matrix3.fromQuaternion(e,J)}else Z=t.Matrix3.clone(t.Matrix3.IDENTITY,Z),J=t.Matrix3.clone(t.Matrix3.IDENTITY,J);let X=0,$=0;h&&f&&(X=y/2,$=y/3,y/=2);for(let i=0;i<y;i+=3){const a=t.Cartesian3.fromArray(c,i,Y);if(r.st&&!e.defined(p)){let e=t.Matrix3.multiplyByVector(Z,a,L);e=C.scaleToGeodeticSurface(e,e);const o=b.projectPointOntoPlane(e,W);n.Cartesian2.subtract(o,x,o);const r=m.CesiumMath.clamp(o.x/d.width,0,1),i=m.CesiumMath.clamp(o.y/d.height,0,1);f&&(T[v+$]=r,T[v+1+$]=i),h&&(T[v]=r,T[v+1]=i),v+=2}if(r.normal||r.tangent||r.bitangent||l){const e=G+1,n=G+2;if(g){if(i+3<y){const e=t.Cartesian3.fromArray(c,i+3,M);if(K){const o=t.Cartesian3.fromArray(c,i+y,k);P&&D(a,e,o,C),t.Cartesian3.subtract(e,a,e),t.Cartesian3.subtract(o,a,o),O=t.Cartesian3.normalize(t.Cartesian3.cross(o,e,O),O),K=!1}t.Cartesian3.equalsEpsilon(e,a,m.CesiumMath.EPSILON10)&&(K=!0)}(r.tangent||r.bitangent)&&(V=C.geodeticSurfaceNormal(a,V),r.tangent&&(H=t.Cartesian3.normalize(t.Cartesian3.cross(V,O,H),H)))}else O=C.geodeticSurfaceNormal(a,O),(r.tangent||r.bitangent)&&(P&&(S=t.Cartesian3.fromArray(w,G,S),B=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,S,B),B=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(J,B,B),B),r.bitangent&&(z=t.Cartesian3.normalize(t.Cartesian3.cross(S,B,z),z))),H=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,O,H),H=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(J,H,H),H),r.bitangent&&(V=t.Cartesian3.normalize(t.Cartesian3.cross(O,H,V),V)));r.normal&&(o.wall?(w[G+X]=O.x,w[e+X]=O.y,w[n+X]=O.z):f&&(w[G+X]=-O.x,w[e+X]=-O.y,w[n+X]=-O.z),(h&&!P||g)&&(w[G]=O.x,w[e]=O.y,w[n]=O.z)),l&&(g&&(O=C.geodeticSurfaceNormal(a,O)),E[G+X]=-O.x,E[e+X]=-O.y,E[n+X]=-O.z),r.tangent&&(o.wall?(A[G+X]=H.x,A[e+X]=H.y,A[n+X]=H.z):f&&(A[G+X]=-H.x,A[e+X]=-H.y,A[n+X]=-H.z),h&&(P?(A[G]=B.x,A[e]=B.y,A[n]=B.z):(A[G]=H.x,A[e]=H.y,A[n]=H.z))),r.bitangent&&(f&&(I[G+X]=V.x,I[e+X]=V.y,I[n+X]=V.z),h&&(P?(I[G]=z.x,I[e]=z.y,I[n]=z.z):(I[G]=V.x,I[e]=V.y,I[n]=V.z))),G+=3}}r.st&&!e.defined(p)&&(a.attributes.st=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:T})),r.normal&&(a.attributes.normal=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:w})),r.tangent&&(a.attributes.tangent=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A})),r.bitangent&&(a.attributes.bitangent=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:I})),l&&(a.attributes.extrudeDirection=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E}))}if(o.extrude&&e.defined(o.offsetAttribute)){const e=c.length/3;let t=new Uint8Array(e);if(o.offsetAttribute===d.GeometryOffsetAttribute.TOP)h&&f||g?t=t.fill(1,0,e/2):h&&(t=t.fill(1));else{const e=o.offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1;t=t.fill(e)}a.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return a}const Z=new t.Cartographic,J=new t.Cartographic,X={westOverIDL:0,eastOverIDL:0};let $=new l.EllipsoidGeodesic;function ee(t,r,i,a,s){if(s=e.defaultValue(s,new n.Rectangle),!e.defined(t)||t.length<3)return s.west=0,s.north=0,s.south=0,s.east=0,s;if(i===o.ArcType.RHUMB)return n.Rectangle.fromCartesianArray(t,r,s);$.ellipsoid.equals(r)||($=new l.EllipsoidGeodesic(void 0,void 0,r)),s.west=Number.POSITIVE_INFINITY,s.east=Number.NEGATIVE_INFINITY,s.south=Number.POSITIVE_INFINITY,s.north=Number.NEGATIVE_INFINITY,X.westOverIDL=Number.POSITIVE_INFINITY,X.eastOverIDL=Number.NEGATIVE_INFINITY;const c=1/m.CesiumMath.chordLength(a,r.maximumRadius),u=t.length;let p,d=r.cartesianToCartographic(t[0],J),y=Z;for(let e=1;e<u;e++)p=y,y=d,d=r.cartesianToCartographic(t[e],p),$.setEndPoints(y,d),oe($,c,s,X);return p=y,y=d,d=r.cartesianToCartographic(t[0],p),$.setEndPoints(y,d),oe($,c,s,X),s.east-s.west>X.eastOverIDL-X.westOverIDL&&(s.west=X.westOverIDL,s.east=X.eastOverIDL,s.east>m.CesiumMath.PI&&(s.east=s.east-m.CesiumMath.TWO_PI),s.west>m.CesiumMath.PI&&(s.west=s.west-m.CesiumMath.TWO_PI)),s}const te=new t.Cartographic;function oe(e,t,o,r){const i=e.surfaceDistance,n=Math.ceil(i*t),a=n>0?i/(n-1):Number.POSITIVE_INFINITY;let s=0;for(let t=0;t<n;t++){const t=e.interpolateUsingSurfaceDistance(s,te);s+=a;const i=t.longitude,n=t.latitude;o.west=Math.min(o.west,i),o.east=Math.max(o.east,i),o.south=Math.min(o.south,n),o.north=Math.max(o.north,n);const l=i>=0?i:i+m.CesiumMath.TWO_PI;r.westOverIDL=Math.min(r.westOverIDL,l),r.eastOverIDL=Math.max(r.eastOverIDL,l)}}const re=[];function ie(t,o,r,i,n,a,s,l,u,d){const y={walls:[]};let m;if(s||l){const n=h.PolygonGeometryLibrary.createGeometryFromPositions(t,o,r,i,a,u,d),c=n.attributes.position.values,f=n.indices;let b,C;if(s&&l){const t=c.concat(c);b=t.length/3,C=g.IndexDatatype.createTypedArray(b,2*f.length),C.set(f);const o=f.length,i=b/2;for(m=0;m<o;m+=3){const e=C[m]+i,t=C[m+1]+i,r=C[m+2]+i;C[m+o]=r,C[m+1+o]=t,C[m+2+o]=e}if(n.attributes.position.values=t,a&&u.normal){const e=n.attributes.normal.values;n.attributes.normal.values=new Float32Array(t.length),n.attributes.normal.values.set(e)}if(u.st&&e.defined(r)){const e=n.attributes.st.values;n.attributes.st.values=new Float32Array(2*b),n.attributes.st.values=e.concat(e)}n.indices=C}else if(l){for(b=c.length/3,C=g.IndexDatatype.createTypedArray(b,f.length),m=0;m<f.length;m+=3)C[m]=f[m+2],C[m+1]=f[m+1],C[m+2]=f[m];n.indices=C}y.topAndBottom=new p.GeometryInstance({geometry:n})}let b=n.outerRing,C=c.EllipsoidTangentPlane.fromPoints(b,t),_=C.projectPointsOntoPlane(b,re),P=f.PolygonPipeline.computeWindingOrder2D(_);P===f.WindingOrder.CLOCKWISE&&(b=b.slice().reverse());let x=h.PolygonGeometryLibrary.computeWallGeometry(b,r,t,i,a,d);y.walls.push(new p.GeometryInstance({geometry:x}));const T=n.holes;for(m=0;m<T.length;m++){let e=T[m];C=c.EllipsoidTangentPlane.fromPoints(e,t),_=C.projectPointsOntoPlane(e,re),P=f.PolygonPipeline.computeWindingOrder2D(_),P===f.WindingOrder.COUNTER_CLOCKWISE&&(e=e.slice().reverse()),x=h.PolygonGeometryLibrary.computeWallGeometry(e,r,t,i,a,d),y.walls.push(new p.GeometryInstance({geometry:x}))}return y}function ne(r){if(a.Check.typeOf.object("options",r),a.Check.typeOf.object("options.polygonHierarchy",r.polygonHierarchy),e.defined(r.perPositionHeight)&&r.perPositionHeight&&e.defined(r.height))throw new a.DeveloperError("Cannot use both options.perPositionHeight and options.height");if(e.defined(r.arcType)&&r.arcType!==o.ArcType.GEODESIC&&r.arcType!==o.ArcType.RHUMB)throw new a.DeveloperError("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");const i=r.polygonHierarchy,s=e.defaultValue(r.vertexFormat,b.VertexFormat.DEFAULT),l=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84),c=e.defaultValue(r.granularity,m.CesiumMath.RADIANS_PER_DEGREE),u=e.defaultValue(r.stRotation,0),p=r.textureCoordinates,d=e.defaultValue(r.perPositionHeight,!1),y=d&&e.defined(r.extrudedHeight);let g=e.defaultValue(r.height,0),f=e.defaultValue(r.extrudedHeight,g);if(!y){const e=Math.max(g,f);f=Math.min(g,f),g=e}this._vertexFormat=b.VertexFormat.clone(s),this._ellipsoid=t.Ellipsoid.clone(l),this._granularity=c,this._stRotation=u,this._height=g,this._extrudedHeight=f,this._closeTop=e.defaultValue(r.closeTop,!0),this._closeBottom=e.defaultValue(r.closeBottom,!0),this._polygonHierarchy=i,this._perPositionHeight=d,this._perPositionHeightExtrude=y,this._shadowVolume=e.defaultValue(r.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=r.offsetAttribute,this._arcType=e.defaultValue(r.arcType,o.ArcType.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=p,this.packedLength=h.PolygonGeometryLibrary.computeHierarchyPackedLength(i,t.Cartesian3)+t.Ellipsoid.packedLength+b.VertexFormat.packedLength+(p?h.PolygonGeometryLibrary.computeHierarchyPackedLength(p,n.Cartesian2):1)+12}ne.fromPositions=function(t){return t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT),a.Check.defined("options.positions",t.positions),new ne({polygonHierarchy:{positions:t.positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates})},ne.pack=function(o,r,i){return a.Check.typeOf.object("value",o),a.Check.defined("array",r),i=e.defaultValue(i,0),i=h.PolygonGeometryLibrary.packPolygonHierarchy(o._polygonHierarchy,r,i,t.Cartesian3),t.Ellipsoid.pack(o._ellipsoid,r,i),i+=t.Ellipsoid.packedLength,b.VertexFormat.pack(o._vertexFormat,r,i),i+=b.VertexFormat.packedLength,r[i++]=o._height,r[i++]=o._extrudedHeight,r[i++]=o._granularity,r[i++]=o._stRotation,r[i++]=o._perPositionHeightExtrude?1:0,r[i++]=o._perPositionHeight?1:0,r[i++]=o._closeTop?1:0,r[i++]=o._closeBottom?1:0,r[i++]=o._shadowVolume?1:0,r[i++]=e.defaultValue(o._offsetAttribute,-1),r[i++]=o._arcType,e.defined(o._textureCoordinates)?i=h.PolygonGeometryLibrary.packPolygonHierarchy(o._textureCoordinates,r,i,n.Cartesian2):r[i++]=-1,r[i++]=o.packedLength,r};const ae=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),se=new b.VertexFormat,le={polygonHierarchy:{}};return ne.unpack=function(o,r,i){a.Check.defined("array",o),r=e.defaultValue(r,0);const s=h.PolygonGeometryLibrary.unpackPolygonHierarchy(o,r,t.Cartesian3);r=s.startingIndex,delete s.startingIndex;const l=t.Ellipsoid.unpack(o,r,ae);r+=t.Ellipsoid.packedLength;const c=b.VertexFormat.unpack(o,r,se);r+=b.VertexFormat.packedLength;const u=o[r++],p=o[r++],d=o[r++],y=o[r++],g=1===o[r++],m=1===o[r++],f=1===o[r++],C=1===o[r++],_=1===o[r++],P=o[r++],x=o[r++],T=-1===o[r]?void 0:h.PolygonGeometryLibrary.unpackPolygonHierarchy(o,r,n.Cartesian2);e.defined(T)?(r=T.startingIndex,delete T.startingIndex):r++;const w=o[r++];return e.defined(i)||(i=new ne(le)),i._polygonHierarchy=s,i._ellipsoid=t.Ellipsoid.clone(l,i._ellipsoid),i._vertexFormat=b.VertexFormat.clone(c,i._vertexFormat),i._height=u,i._extrudedHeight=p,i._granularity=d,i._stRotation=y,i._perPositionHeightExtrude=g,i._perPositionHeight=m,i._closeTop=f,i._closeBottom=C,i._shadowVolume=_,i._offsetAttribute=-1===P?void 0:P,i._arcType=x,i._textureCoordinates=T,i.packedLength=w,i},ne.computeRectangle=function(r,i){a.Check.typeOf.object("options",r),a.Check.typeOf.object("options.polygonHierarchy",r.polygonHierarchy);const n=e.defaultValue(r.granularity,m.CesiumMath.RADIANS_PER_DEGREE),s=e.defaultValue(r.arcType,o.ArcType.GEODESIC);if(s!==o.ArcType.GEODESIC&&s!==o.ArcType.RHUMB)throw new a.DeveloperError("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");const l=r.polygonHierarchy,c=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84);return ee(l.positions,c,s,n,i)},ne.createGeometry=function(t){const o=t._vertexFormat,r=t._ellipsoid,n=t._granularity,a=t._stRotation,l=t._polygonHierarchy,b=t._perPositionHeight,C=t._closeTop,_=t._closeBottom,P=t._arcType,x=t._textureCoordinates,T=e.defined(x);let w=l.positions;if(w.length<3)return;const A=c.EllipsoidTangentPlane.fromPoints(w,r),I=h.PolygonGeometryLibrary.polygonsFromHierarchy(l,T,A.projectPointsOntoPlane.bind(A),!b,r),E=I.hierarchy,v=I.polygons,G=T?h.PolygonGeometryLibrary.polygonsFromHierarchy(x,!0,(function(e){return e}),!1).polygons:void 0;if(0===E.length)return;w=E[0].outerRing;const O=h.PolygonGeometryLibrary.computeBoundingRectangle(A.plane.normal,A.projectPointOntoPlane.bind(A),w,a,V),H=[],D=t._height,L=t._extrudedHeight,N={perPositionHeight:b,vertexFormat:o,geometry:void 0,tangentPlane:A,boundingRectangle:O,ellipsoid:r,stRotation:a,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:P};let F;if(t._perPositionHeightExtrude||!m.CesiumMath.equalsEpsilon(D,L,0,m.CesiumMath.EPSILON2))for(N.extrude=!0,N.top=C,N.bottom=_,N.shadowVolume=t._shadowVolume,N.offsetAttribute=t._offsetAttribute,F=0;F<v.length;F++){const e=ie(r,v[F],T?G[F]:void 0,n,E[F],b,C,_,o,P);let t;C&&_?(t=e.topAndBottom,N.geometry=h.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,D,L,r,b)):C?(t=e.topAndBottom,t.geometry.attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,D,r,!b),N.geometry=t.geometry):_&&(t=e.topAndBottom,t.geometry.attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,L,r,!0),N.geometry=t.geometry),(C||_)&&(N.wall=!1,t.geometry=K(N),H.push(t));const i=e.walls;N.wall=!0;for(let e=0;e<i.length;e++){const t=i[e];N.geometry=h.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,D,L,r,b),t.geometry=K(N),H.push(t)}}else for(F=0;F<v.length;F++){const i=new p.GeometryInstance({geometry:h.PolygonGeometryLibrary.createGeometryFromPositions(r,v[F],T?G[F]:void 0,n,b,o,P)});if(i.geometry.attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(i.geometry.attributes.position.values,D,r,!b),N.geometry=i.geometry,i.geometry=K(N),e.defined(t._offsetAttribute)){const e=i.geometry.attributes.position.values.length,o=t._offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1,r=new Uint8Array(e/3).fill(o);i.geometry.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}H.push(i)}const R=y.GeometryPipeline.combineInstances(H)[0];R.attributes.position.values=new Float64Array(R.attributes.position.values),R.indices=g.IndexDatatype.createTypedArray(R.attributes.position.values.length/3,R.indices);const M=R.attributes,k=i.BoundingSphere.fromVertices(M.position.values);return o.position||delete M.position,new u.Geometry({attributes:M,indices:R.indices,primitiveType:R.primitiveType,boundingSphere:k,offsetAttribute:t._offsetAttribute})},ne.createShadowVolume=function(e,t,o){const r=e._granularity,i=e._ellipsoid,n=t(r,i),a=o(r,i);return new ne({polygonHierarchy:e._polygonHierarchy,ellipsoid:i,stRotation:e._stRotation,granularity:r,perPositionHeight:!1,extrudedHeight:n,height:a,vertexFormat:b.VertexFormat.POSITION_ONLY,shadowVolume:!0,arcType:e._arcType})},Object.defineProperties(ne.prototype,{rectangle:{get:function(){if(!e.defined(this._rectangle)){const e=this._polygonHierarchy.positions;this._rectangle=ee(e,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return e.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){const t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];const o=e._ellipsoid,r=e._polygonHierarchy.positions,i=e.rectangle;return u.Geometry._textureCoordinateRotationPoints(r,t,o,i)}(this)),this._textureCoordinateRotationPoints}}}),function(o,r){return e.defined(r)&&(o=ne.unpack(o,r)),o._ellipsoid=t.Ellipsoid.clone(o._ellipsoid),ne.createGeometry(o)}}));