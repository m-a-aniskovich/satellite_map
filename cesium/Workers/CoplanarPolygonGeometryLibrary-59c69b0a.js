define(["exports","./Matrix2-e1298525","./Matrix3-41c58dde","./Check-6ede7e26","./OrientedBoundingBox-29fb0fcd"],(function(e,n,t,i,r){"use strict";const a={},o=new t.Cartesian3,s=new t.Cartesian3,u=new t.Cartesian3,c=new t.Cartesian3,d=new r.OrientedBoundingBox;function C(e,i,r,a,s){const u=t.Cartesian3.subtract(e,i,o),c=t.Cartesian3.dot(r,u),d=t.Cartesian3.dot(a,u);return n.Cartesian2.fromElements(c,d,s)}a.validOutline=function(e){i.Check.defined("positions",e);const n=r.OrientedBoundingBox.fromPoints(e,d).halfAxes,a=t.Matrix3.getColumn(n,0,s),o=t.Matrix3.getColumn(n,1,u),C=t.Matrix3.getColumn(n,2,c),l=t.Cartesian3.magnitude(a),f=t.Cartesian3.magnitude(o),m=t.Cartesian3.magnitude(C);return!(0===l&&(0===f||0===m)||0===f&&0===m)},a.computeProjectTo2DArguments=function(e,n,a,o){i.Check.defined("positions",e),i.Check.defined("centerResult",n),i.Check.defined("planeAxis1Result",a),i.Check.defined("planeAxis2Result",o);const C=r.OrientedBoundingBox.fromPoints(e,d),l=C.halfAxes,f=t.Matrix3.getColumn(l,0,s),m=t.Matrix3.getColumn(l,1,u),g=t.Matrix3.getColumn(l,2,c),x=t.Cartesian3.magnitude(f),h=t.Cartesian3.magnitude(m),M=t.Cartesian3.magnitude(g),B=Math.min(x,h,M);if(0===x&&(0===h||0===M)||0===h&&0===M)return!1;let P,p;return B!==h&&B!==M||(P=f),B===x?P=m:B===M&&(p=m),B!==x&&B!==h||(p=g),t.Cartesian3.normalize(P,a),t.Cartesian3.normalize(p,o),t.Cartesian3.clone(C.center,n),!0},a.createProjectPointsTo2DFunction=function(e,n,t){return function(i){const r=new Array(i.length);for(let a=0;a<i.length;a++)r[a]=C(i[a],e,n,t);return r}},a.createProjectPointTo2DFunction=function(e,n,t){return function(i,r){return C(i,e,n,t,r)}};var l=a;e.CoplanarPolygonGeometryLibrary=l}));