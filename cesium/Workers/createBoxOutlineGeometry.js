define(["./Transforms-e2d4a55a","./Matrix3-41c58dde","./Check-6ede7e26","./ComponentDatatype-cf1fa08e","./defaultValue-fe22d8c0","./GeometryAttribute-13da9466","./GeometryAttributes-ad136444","./GeometryOffsetAttribute-9ad0019c","./Math-0a2ac845","./Matrix2-e1298525","./RuntimeError-ef395448","./combine-d9581036","./WebGLConstants-0b1ce7ba"],(function(e,t,n,a,i,r,o,s,u,f,m,c,d){"use strict";const y=new t.Cartesian3;function p(e){const a=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).minimum,r=e.maximum;if(n.Check.typeOf.object("min",a),n.Check.typeOf.object("max",r),i.defined(e.offsetAttribute)&&e.offsetAttribute===s.GeometryOffsetAttribute.TOP)throw new n.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._min=t.Cartesian3.clone(a),this._max=t.Cartesian3.clone(r),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}p.fromDimensions=function(e){const a=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).dimensions;n.Check.typeOf.object("dimensions",a),n.Check.typeOf.number.greaterThanOrEquals("dimensions.x",a.x,0),n.Check.typeOf.number.greaterThanOrEquals("dimensions.y",a.y,0),n.Check.typeOf.number.greaterThanOrEquals("dimensions.z",a.z,0);const r=t.Cartesian3.multiplyByScalar(a,.5,new t.Cartesian3);return new p({minimum:t.Cartesian3.negate(r,new t.Cartesian3),maximum:r,offsetAttribute:e.offsetAttribute})},p.fromAxisAlignedBoundingBox=function(e){return n.Check.typeOf.object("boundindBox",e),new p({minimum:e.minimum,maximum:e.maximum})},p.packedLength=2*t.Cartesian3.packedLength+1,p.pack=function(e,a,r){return n.Check.typeOf.object("value",e),n.Check.defined("array",a),r=i.defaultValue(r,0),t.Cartesian3.pack(e._min,a,r),t.Cartesian3.pack(e._max,a,r+t.Cartesian3.packedLength),a[r+2*t.Cartesian3.packedLength]=i.defaultValue(e._offsetAttribute,-1),a};const b=new t.Cartesian3,C=new t.Cartesian3,l={minimum:b,maximum:C,offsetAttribute:void 0};return p.unpack=function(e,a,r){n.Check.defined("array",e),a=i.defaultValue(a,0);const o=t.Cartesian3.unpack(e,a,b),s=t.Cartesian3.unpack(e,a+t.Cartesian3.packedLength,C),u=e[a+2*t.Cartesian3.packedLength];return i.defined(r)?(r._min=t.Cartesian3.clone(o,r._min),r._max=t.Cartesian3.clone(s,r._max),r._offsetAttribute=-1===u?void 0:u,r):(l.offsetAttribute=-1===u?void 0:u,new p(l))},p.createGeometry=function(n){const u=n._min,f=n._max;if(t.Cartesian3.equals(u,f))return;const m=new o.GeometryAttributes,c=new Uint16Array(24),d=new Float64Array(24);d[0]=u.x,d[1]=u.y,d[2]=u.z,d[3]=f.x,d[4]=u.y,d[5]=u.z,d[6]=f.x,d[7]=f.y,d[8]=u.z,d[9]=u.x,d[10]=f.y,d[11]=u.z,d[12]=u.x,d[13]=u.y,d[14]=f.z,d[15]=f.x,d[16]=u.y,d[17]=f.z,d[18]=f.x,d[19]=f.y,d[20]=f.z,d[21]=u.x,d[22]=f.y,d[23]=f.z,m.position=new r.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d}),c[0]=4,c[1]=5,c[2]=5,c[3]=6,c[4]=6,c[5]=7,c[6]=7,c[7]=4,c[8]=0,c[9]=1,c[10]=1,c[11]=2,c[12]=2,c[13]=3,c[14]=3,c[15]=0,c[16]=0,c[17]=4,c[18]=1,c[19]=5,c[20]=2,c[21]=6,c[22]=3,c[23]=7;const p=t.Cartesian3.subtract(f,u,y),b=.5*t.Cartesian3.magnitude(p);if(i.defined(n._offsetAttribute)){const e=d.length,t=n._offsetAttribute===s.GeometryOffsetAttribute.NONE?0:1,i=new Uint8Array(e/3).fill(t);m.applyOffset=new r.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}return new r.Geometry({attributes:m,indices:c,primitiveType:r.PrimitiveType.LINES,boundingSphere:new e.BoundingSphere(t.Cartesian3.ZERO,b),offsetAttribute:n._offsetAttribute})},function(e,t){return i.defined(t)&&(e=p.unpack(e,t)),p.createGeometry(e)}}));