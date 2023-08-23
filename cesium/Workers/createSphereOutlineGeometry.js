define(["./defaultValue-fe22d8c0","./Matrix3-41c58dde","./Check-6ede7e26","./EllipsoidOutlineGeometry-c045678d","./Math-0a2ac845","./Transforms-e2d4a55a","./Matrix2-e1298525","./RuntimeError-ef395448","./combine-d9581036","./ComponentDatatype-cf1fa08e","./WebGLConstants-0b1ce7ba","./GeometryAttribute-13da9466","./GeometryAttributes-ad136444","./GeometryOffsetAttribute-9ad0019c","./IndexDatatype-2643aa47"],(function(e,i,t,n,o,r,a,s,d,l,c,u,m,p,y){"use strict";function G(t){const o=e.defaultValue(t.radius,1),r={radii:new i.Cartesian3(o,o,o),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,subdivisions:t.subdivisions};this._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(r),this._workerName="createSphereOutlineGeometry"}G.packedLength=n.EllipsoidOutlineGeometry.packedLength,G.pack=function(e,i,o){return t.Check.typeOf.object("value",e),n.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,o)};const f=new n.EllipsoidOutlineGeometry,k={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return G.unpack=function(t,o,r){const a=n.EllipsoidOutlineGeometry.unpack(t,o,f);return k.stackPartitions=a._stackPartitions,k.slicePartitions=a._slicePartitions,k.subdivisions=a._subdivisions,e.defined(r)?(i.Cartesian3.clone(a._radii,k.radii),r._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(k),r):(k.radius=a._radii.x,new G(k))},G.createGeometry=function(e){return n.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=G.unpack(i,t)),G.createGeometry(i)}}));