define(["exports","./Transforms-e2d4a55a","./Matrix2-e1298525","./Matrix3-41c58dde","./ComponentDatatype-cf1fa08e","./CylinderGeometryLibrary-7bf291b4","./defaultValue-fe22d8c0","./Check-6ede7e26","./GeometryAttribute-13da9466","./GeometryAttributes-ad136444","./GeometryOffsetAttribute-9ad0019c","./IndexDatatype-2643aa47","./Math-0a2ac845","./VertexFormat-030f11ff"],(function(t,e,r,o,n,a,i,s,u,f,d,m,l,p){"use strict";const c=new r.Cartesian2,y=new o.Cartesian3,b=new o.Cartesian3,A=new o.Cartesian3,h=new o.Cartesian3;function w(t){const e=(t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT)).length,r=t.topRadius,o=t.bottomRadius,n=i.defaultValue(t.vertexFormat,p.VertexFormat.DEFAULT),a=i.defaultValue(t.slices,128);if(!i.defined(e))throw new s.DeveloperError("options.length must be defined.");if(!i.defined(r))throw new s.DeveloperError("options.topRadius must be defined.");if(!i.defined(o))throw new s.DeveloperError("options.bottomRadius must be defined.");if(a<3)throw new s.DeveloperError("options.slices must be greater than or equal to 3.");if(i.defined(t.offsetAttribute)&&t.offsetAttribute===d.GeometryOffsetAttribute.TOP)throw new s.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=e,this._topRadius=r,this._bottomRadius=o,this._vertexFormat=p.VertexFormat.clone(n),this._slices=a,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}w.packedLength=p.VertexFormat.packedLength+5,w.pack=function(t,e,r){if(!i.defined(t))throw new s.DeveloperError("value is required");if(!i.defined(e))throw new s.DeveloperError("array is required");return r=i.defaultValue(r,0),p.VertexFormat.pack(t._vertexFormat,e,r),r+=p.VertexFormat.packedLength,e[r++]=t._length,e[r++]=t._topRadius,e[r++]=t._bottomRadius,e[r++]=t._slices,e[r]=i.defaultValue(t._offsetAttribute,-1),e};const g=new p.VertexFormat,v={vertexFormat:g,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};let x;w.unpack=function(t,e,r){if(!i.defined(t))throw new s.DeveloperError("array is required");e=i.defaultValue(e,0);const o=p.VertexFormat.unpack(t,e,g);e+=p.VertexFormat.packedLength;const n=t[e++],a=t[e++],u=t[e++],f=t[e++],d=t[e];return i.defined(r)?(r._vertexFormat=p.VertexFormat.clone(o,r._vertexFormat),r._length=n,r._topRadius=a,r._bottomRadius=u,r._slices=f,r._offsetAttribute=-1===d?void 0:d,r):(v.length=n,v.topRadius=a,v.bottomRadius=u,v.slices=f,v.offsetAttribute=-1===d?void 0:d,new w(v))},w.createGeometry=function(t){let s=t._length;const p=t._topRadius,w=t._bottomRadius,g=t._vertexFormat,v=t._slices;if(s<=0||p<0||w<0||0===p&&0===w)return;const x=v+v,_=v+x,C=x+x,F=a.CylinderGeometryLibrary.computePositions(s,p,w,v,!0),D=g.st?new Float32Array(2*C):void 0,G=g.normal?new Float32Array(3*C):void 0,R=g.tangent?new Float32Array(3*C):void 0,O=g.bitangent?new Float32Array(3*C):void 0;let V;const T=g.normal||g.tangent||g.bitangent;if(T){const t=g.tangent||g.bitangent;let e=0,r=0,n=0;const a=Math.atan2(w-p,s),i=y;i.z=Math.sin(a);const u=Math.cos(a);let f=A,d=b;for(V=0;V<v;V++){const a=V/v*l.CesiumMath.TWO_PI,s=u*Math.cos(a),m=u*Math.sin(a);T&&(i.x=s,i.y=m,t&&(f=o.Cartesian3.normalize(o.Cartesian3.cross(o.Cartesian3.UNIT_Z,i,f),f)),g.normal&&(G[e++]=i.x,G[e++]=i.y,G[e++]=i.z,G[e++]=i.x,G[e++]=i.y,G[e++]=i.z),g.tangent&&(R[r++]=f.x,R[r++]=f.y,R[r++]=f.z,R[r++]=f.x,R[r++]=f.y,R[r++]=f.z),g.bitangent&&(d=o.Cartesian3.normalize(o.Cartesian3.cross(i,f,d),d),O[n++]=d.x,O[n++]=d.y,O[n++]=d.z,O[n++]=d.x,O[n++]=d.y,O[n++]=d.z))}for(V=0;V<v;V++)g.normal&&(G[e++]=0,G[e++]=0,G[e++]=-1),g.tangent&&(R[r++]=1,R[r++]=0,R[r++]=0),g.bitangent&&(O[n++]=0,O[n++]=-1,O[n++]=0);for(V=0;V<v;V++)g.normal&&(G[e++]=0,G[e++]=0,G[e++]=1),g.tangent&&(R[r++]=1,R[r++]=0,R[r++]=0),g.bitangent&&(O[n++]=0,O[n++]=1,O[n++]=0)}const E=12*v-12,L=m.IndexDatatype.createTypedArray(C,E);let P=0,M=0;for(V=0;V<v-1;V++)L[P++]=M,L[P++]=M+2,L[P++]=M+3,L[P++]=M,L[P++]=M+3,L[P++]=M+1,M+=2;for(L[P++]=x-2,L[P++]=0,L[P++]=1,L[P++]=x-2,L[P++]=1,L[P++]=x-1,V=1;V<v-1;V++)L[P++]=x+V+1,L[P++]=x+V,L[P++]=x;for(V=1;V<v-1;V++)L[P++]=_,L[P++]=_+V,L[P++]=_+V+1;let k=0;if(g.st){const t=Math.max(p,w);for(V=0;V<C;V++){const e=o.Cartesian3.fromArray(F,3*V,h);D[k++]=(e.x+t)/(2*t),D[k++]=(e.y+t)/(2*t)}}const z=new f.GeometryAttributes;g.position&&(z.position=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F})),g.normal&&(z.normal=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),g.tangent&&(z.tangent=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})),g.bitangent&&(z.bitangent=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),g.st&&(z.st=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D})),c.x=.5*s,c.y=Math.max(w,p);const N=new e.BoundingSphere(o.Cartesian3.ZERO,r.Cartesian2.magnitude(c));if(i.defined(t._offsetAttribute)){s=F.length;const e=t._offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1,r=new Uint8Array(s/3).fill(e);z.applyOffset=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}return new u.Geometry({attributes:z,indices:L,primitiveType:u.PrimitiveType.TRIANGLES,boundingSphere:N,offsetAttribute:t._offsetAttribute})},w.getUnitCylinder=function(){return i.defined(x)||(x=w.createGeometry(new w({topRadius:1,bottomRadius:1,length:1,vertexFormat:p.VertexFormat.POSITION_ONLY}))),x},t.CylinderGeometry=w}));