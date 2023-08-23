define(["exports","./Transforms-e2d4a55a","./Matrix3-41c58dde","./ComponentDatatype-cf1fa08e","./defaultValue-fe22d8c0","./Check-6ede7e26","./GeometryAttribute-13da9466","./GeometryAttributes-ad136444","./GeometryOffsetAttribute-9ad0019c","./IndexDatatype-2643aa47","./Math-0a2ac845"],(function(e,t,i,o,n,r,a,s,u,m,f){"use strict";const l=new i.Cartesian3(1,1,1),d=Math.cos,c=Math.sin;function C(e){e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT);const t=n.defaultValue(e.radii,l),o=n.defaultValue(e.innerRadii,t),a=n.defaultValue(e.minimumClock,0),s=n.defaultValue(e.maximumClock,f.CesiumMath.TWO_PI),m=n.defaultValue(e.minimumCone,0),d=n.defaultValue(e.maximumCone,f.CesiumMath.PI),c=Math.round(n.defaultValue(e.stackPartitions,10)),C=Math.round(n.defaultValue(e.slicePartitions,8)),p=Math.round(n.defaultValue(e.subdivisions,128));if(c<1)throw new r.DeveloperError("options.stackPartitions cannot be less than 1");if(C<0)throw new r.DeveloperError("options.slicePartitions cannot be less than 0");if(p<0)throw new r.DeveloperError("options.subdivisions must be greater than or equal to zero.");if(n.defined(e.offsetAttribute)&&e.offsetAttribute===u.GeometryOffsetAttribute.TOP)throw new r.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._radii=i.Cartesian3.clone(t),this._innerRadii=i.Cartesian3.clone(o),this._minimumClock=a,this._maximumClock=s,this._minimumCone=m,this._maximumCone=d,this._stackPartitions=c,this._slicePartitions=C,this._subdivisions=p,this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}C.packedLength=2*i.Cartesian3.packedLength+8,C.pack=function(e,t,o){if(!n.defined(e))throw new r.DeveloperError("value is required");if(!n.defined(t))throw new r.DeveloperError("array is required");return o=n.defaultValue(o,0),i.Cartesian3.pack(e._radii,t,o),o+=i.Cartesian3.packedLength,i.Cartesian3.pack(e._innerRadii,t,o),o+=i.Cartesian3.packedLength,t[o++]=e._minimumClock,t[o++]=e._maximumClock,t[o++]=e._minimumCone,t[o++]=e._maximumCone,t[o++]=e._stackPartitions,t[o++]=e._slicePartitions,t[o++]=e._subdivisions,t[o]=n.defaultValue(e._offsetAttribute,-1),t};const p=new i.Cartesian3,h=new i.Cartesian3,_={radii:p,innerRadii:h,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};C.unpack=function(e,t,o){if(!n.defined(e))throw new r.DeveloperError("array is required");t=n.defaultValue(t,0);const a=i.Cartesian3.unpack(e,t,p);t+=i.Cartesian3.packedLength;const s=i.Cartesian3.unpack(e,t,h);t+=i.Cartesian3.packedLength;const u=e[t++],m=e[t++],f=e[t++],l=e[t++],d=e[t++],c=e[t++],y=e[t++],b=e[t];return n.defined(o)?(o._radii=i.Cartesian3.clone(a,o._radii),o._innerRadii=i.Cartesian3.clone(s,o._innerRadii),o._minimumClock=u,o._maximumClock=m,o._minimumCone=f,o._maximumCone=l,o._stackPartitions=d,o._slicePartitions=c,o._subdivisions=y,o._offsetAttribute=-1===b?void 0:b,o):(_.minimumClock=u,_.maximumClock=m,_.minimumCone=f,_.maximumCone=l,_.stackPartitions=d,_.slicePartitions=c,_.subdivisions=y,_.offsetAttribute=-1===b?void 0:b,new C(_))},C.createGeometry=function(e){const r=e._radii;if(r.x<=0||r.y<=0||r.z<=0)return;const l=e._innerRadii;if(l.x<=0||l.y<=0||l.z<=0)return;const C=e._minimumClock,p=e._maximumClock,h=e._minimumCone,_=e._maximumCone,y=e._subdivisions,b=i.Ellipsoid.fromCartesian3(r);let k=e._slicePartitions+1,A=e._stackPartitions+1;k=Math.round(k*Math.abs(p-C)/f.CesiumMath.TWO_PI),A=Math.round(A*Math.abs(_-h)/f.CesiumMath.PI),k<2&&(k=2),A<2&&(A=2);let v=0,w=1;const P=l.x!==r.x||l.y!==r.y||l.z!==r.z;let x=!1,E=!1;P&&(w=2,h>0&&(x=!0,v+=k),_<Math.PI&&(E=!0,v+=k));const M=y*w*(A+k),D=new Float64Array(3*M),g=2*(M+v-(k+A)*w),V=m.IndexDatatype.createTypedArray(M,g);let G,O,T,z,I=0;const L=new Array(A),R=new Array(A);for(G=0;G<A;G++)z=h+G*(_-h)/(A-1),L[G]=c(z),R[G]=d(z);const N=new Array(y),q=new Array(y);for(G=0;G<y;G++)T=C+G*(p-C)/(y-1),N[G]=c(T),q[G]=d(T);for(G=0;G<A;G++)for(O=0;O<y;O++)D[I++]=r.x*L[G]*q[O],D[I++]=r.y*L[G]*N[O],D[I++]=r.z*R[G];if(P)for(G=0;G<A;G++)for(O=0;O<y;O++)D[I++]=l.x*L[G]*q[O],D[I++]=l.y*L[G]*N[O],D[I++]=l.z*R[G];for(L.length=y,R.length=y,G=0;G<y;G++)z=h+G*(_-h)/(y-1),L[G]=c(z),R[G]=d(z);for(N.length=k,q.length=k,G=0;G<k;G++)T=C+G*(p-C)/(k-1),N[G]=c(T),q[G]=d(T);for(G=0;G<y;G++)for(O=0;O<k;O++)D[I++]=r.x*L[G]*q[O],D[I++]=r.y*L[G]*N[O],D[I++]=r.z*R[G];if(P)for(G=0;G<y;G++)for(O=0;O<k;O++)D[I++]=l.x*L[G]*q[O],D[I++]=l.y*L[G]*N[O],D[I++]=l.z*R[G];for(I=0,G=0;G<A*w;G++){const e=G*y;for(O=0;O<y-1;O++)V[I++]=e+O,V[I++]=e+O+1}let B=A*y*w;for(G=0;G<k;G++)for(O=0;O<y-1;O++)V[I++]=B+G+O*k,V[I++]=B+G+(O+1)*k;if(P)for(B=A*y*w+k*y,G=0;G<k;G++)for(O=0;O<y-1;O++)V[I++]=B+G+O*k,V[I++]=B+G+(O+1)*k;if(P){let e=A*y*w,t=e+y*k;if(x)for(G=0;G<k;G++)V[I++]=e+G,V[I++]=t+G;if(E)for(e+=y*k-k,t+=y*k-k,G=0;G<k;G++)V[I++]=e+G,V[I++]=t+G}const S=new s.GeometryAttributes({position:new a.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:D})});if(n.defined(e._offsetAttribute)){const t=D.length,i=e._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,n=new Uint8Array(t/3).fill(i);S.applyOffset=new a.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new a.Geometry({attributes:S,indices:V,primitiveType:a.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromEllipsoid(b),offsetAttribute:e._offsetAttribute})},e.EllipsoidOutlineGeometry=C}));