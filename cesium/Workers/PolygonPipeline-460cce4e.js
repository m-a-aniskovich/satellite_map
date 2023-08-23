define(["exports","./Math-0a2ac845","./Matrix2-e1298525","./Matrix3-41c58dde","./Check-6ede7e26","./ComponentDatatype-cf1fa08e","./defaultValue-fe22d8c0","./EllipsoidRhumbLine-ef872433","./GeometryAttribute-13da9466","./WebGLConstants-0b1ce7ba"],(function(e,t,n,r,a,i,s,o,u,x){"use strict";var p={exports:{}};function l(e,t,n){n=n||2;var r,a,i,s,o,u,x,p=t&&t.length,l=p?t[0]*n:e.length,c=h(e,0,l,n,!0),y=[];if(!c||c.next===c.prev)return y;if(p&&(c=function(e,t,n,r){var a,i,s,o=[];for(a=0,i=t.length;a<i;a++)(s=h(e,t[a]*r,a<i-1?t[a+1]*r:e.length,r,!1))===s.next&&(s.steiner=!0),o.push(A(s));for(o.sort(m),a=0;a<o.length;a++)n=g(o[a],n);return n}(e,t,c,n)),e.length>80*n){r=i=e[0],a=s=e[1];for(var d=n;d<l;d+=n)(o=e[d])<r&&(r=o),(u=e[d+1])<a&&(a=u),o>i&&(i=o),u>s&&(s=u);x=0!==(x=Math.max(i-r,s-a))?32767/x:0}return f(c,y,n,r,a,x,0),y}function h(e,t,n,r,a){var i,s;if(a===B(e,t,n,r)>0)for(i=t;i<n;i+=r)s=T(i,e[i],e[i+1],s);else for(i=n-r;i>=t;i-=r)s=T(i,e[i],e[i+1],s);return s&&O(s,s.next)&&(k(s),s=s.next),s}function c(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!O(r,r.next)&&0!==S(r.prev,r,r.next))r=r.next;else{if(k(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function f(e,t,n,r,a,i,s){if(e){!s&&i&&function(e,t,n,r){var a=e;do{0===a.z&&(a.z=w(a.x,a.y,t,n,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next}while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,function(e){var t,n,r,a,i,s,o,u,x=1;do{for(n=e,e=null,i=null,s=0;n;){for(s++,r=n,o=0,t=0;t<x&&(o++,r=r.nextZ);t++);for(u=x;o>0||u>0&&r;)0!==o&&(0===u||!r||n.z<=r.z)?(a=n,n=n.nextZ,o--):(a=r,r=r.nextZ,u--),i?i.nextZ=a:e=a,a.prevZ=i,i=a;n=r}i.nextZ=null,x*=2}while(s>1)}(a)}(e,r,a,i);for(var o,u,x=e;e.prev!==e.next;)if(o=e.prev,u=e.next,i?d(e,r,a,i):y(e))t.push(o.i/n|0),t.push(e.i/n|0),t.push(u.i/n|0),k(e),e=u.next,x=u.next;else if((e=u)===x){s?1===s?f(e=C(c(e),t,n),t,n,r,a,i,2):2===s&&v(e,t,n,r,a,i):f(c(e),t,n,r,a,i,1);break}}}function y(e){var t=e.prev,n=e,r=e.next;if(S(t,n,r)>=0)return!1;for(var a=t.x,i=n.x,s=r.x,o=t.y,u=n.y,x=r.y,p=a<i?a<s?a:s:i<s?i:s,l=o<u?o<x?o:x:u<x?u:x,h=a>i?a>s?a:s:i>s?i:s,c=o>u?o>x?o:x:u>x?u:x,f=r.next;f!==t;){if(f.x>=p&&f.x<=h&&f.y>=l&&f.y<=c&&E(a,o,i,u,s,x,f.x,f.y)&&S(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function d(e,t,n,r){var a=e.prev,i=e,s=e.next;if(S(a,i,s)>=0)return!1;for(var o=a.x,u=i.x,x=s.x,p=a.y,l=i.y,h=s.y,c=o<u?o<x?o:x:u<x?u:x,f=p<l?p<h?p:h:l<h?l:h,y=o>u?o>x?o:x:u>x?u:x,d=p>l?p>h?p:h:l>h?l:h,C=w(c,f,t,n,r),v=w(y,d,t,n,r),m=e.prevZ,g=e.nextZ;m&&m.z>=C&&g&&g.z<=v;){if(m.x>=c&&m.x<=y&&m.y>=f&&m.y<=d&&m!==a&&m!==s&&E(o,p,u,l,x,h,m.x,m.y)&&S(m.prev,m,m.next)>=0)return!1;if(m=m.prevZ,g.x>=c&&g.x<=y&&g.y>=f&&g.y<=d&&g!==a&&g!==s&&E(o,p,u,l,x,h,g.x,g.y)&&S(g.prev,g,g.next)>=0)return!1;g=g.nextZ}for(;m&&m.z>=C;){if(m.x>=c&&m.x<=y&&m.y>=f&&m.y<=d&&m!==a&&m!==s&&E(o,p,u,l,x,h,m.x,m.y)&&S(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;g&&g.z<=v;){if(g.x>=c&&g.x<=y&&g.y>=f&&g.y<=d&&g!==a&&g!==s&&E(o,p,u,l,x,h,g.x,g.y)&&S(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function C(e,t,n){var r=e;do{var a=r.prev,i=r.next.next;!O(a,i)&&Z(a,r,r.next,i)&&L(a,i)&&L(i,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),k(r),k(r.next),r=e=i),r=r.next}while(r!==e);return c(r)}function v(e,t,n,r,a,i){var s=e;do{for(var o=s.next.next;o!==s.prev;){if(s.i!==o.i&&M(s,o)){var u=R(s,o);return s=c(s,s.next),u=c(u,u.next),f(s,t,n,r,a,i,0),void f(u,t,n,r,a,i,0)}o=o.next}s=s.next}while(s!==e)}function m(e,t){return e.x-t.x}function g(e,t){var n=function(e,t){var n,r=t,a=e.x,i=e.y,s=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var o=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=a&&o>s&&(s=o,n=r.x<r.next.x?r:r.next,o===a))return n}r=r.next}while(r!==t);if(!n)return null;var u,x=n,p=n.x,l=n.y,h=1/0;r=n;do{a>=r.x&&r.x>=p&&a!==r.x&&E(i<l?a:s,i,p,l,i<l?s:a,i,r.x,r.y)&&(u=Math.abs(i-r.y)/(a-r.x),L(r,e)&&(u<h||u===h&&(r.x>n.x||r.x===n.x&&b(n,r)))&&(n=r,h=u)),r=r.next}while(r!==x);return n}(e,t);if(!n)return t;var r=R(n,e);return c(r,r.next),c(n,n.next)}function b(e,t){return S(e.prev,e,t.prev)<0&&S(t.next,e,e.next)<0}function w(e,t,n,r,a){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*a|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*a|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function A(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function E(e,t,n,r,a,i,s,o){return(a-s)*(t-o)>=(e-s)*(i-o)&&(e-s)*(r-o)>=(n-s)*(t-o)&&(n-s)*(i-o)>=(a-s)*(r-o)}function M(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Z(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(L(e,t)&&L(t,e)&&function(e,t){var n=e,r=!1,a=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&a<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(S(e.prev,e,t.prev)||S(e,t.prev,t))||O(e,t)&&S(e.prev,e,e.next)>0&&S(t.prev,t,t.next)>0)}function S(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function O(e,t){return e.x===t.x&&e.y===t.y}function Z(e,t,n,r){var a=D(S(e,t,n)),i=D(S(e,t,r)),s=D(S(n,r,e)),o=D(S(n,r,t));return a!==i&&s!==o||!(0!==a||!z(e,n,t))||!(0!==i||!z(e,r,t))||!(0!==s||!z(n,e,r))||!(0!==o||!z(n,t,r))}function z(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function D(e){return e>0?1:e<0?-1:0}function L(e,t){return S(e.prev,e,e.next)<0?S(e,t,e.next)>=0&&S(e,e.prev,t)>=0:S(e,t,e.prev)<0||S(e,e.next,t)<0}function R(e,t){var n=new G(e.i,e.x,e.y),r=new G(t.i,t.x,t.y),a=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=a,a.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function T(e,t,n,r){var a=new G(e,t,n);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function k(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function G(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B(e,t,n,r){for(var a=0,i=t,s=n-r;i<n;i+=r)a+=(e[s]-e[i])*(e[i+1]+e[s+1]),s=i;return a}p.exports=l,p.exports.default=l,l.deviation=function(e,t,n,r){var a=t&&t.length,i=a?t[0]*n:e.length,s=Math.abs(B(e,0,i,n));if(a)for(var o=0,u=t.length;o<u;o++){var x=t[o]*n,p=o<u-1?t[o+1]*n:e.length;s-=Math.abs(B(e,x,p,n))}var l=0;for(o=0;o<r.length;o+=3){var h=r[o]*n,c=r[o+1]*n,f=r[o+2]*n;l+=Math.abs((e[h]-e[f])*(e[c+1]-e[h+1])-(e[h]-e[c])*(e[f+1]-e[h+1]))}return 0===s&&0===l?0:Math.abs((l-s)/s)},l.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,a=0;a<e.length;a++){for(var i=0;i<e[a].length;i++)for(var s=0;s<t;s++)n.vertices.push(e[a][i][s]);a>0&&(r+=e[a-1].length,n.holes.push(r))}return n};var W=p.exports,P=t.getDefaultExportFromCjs(W);const $={CLOCKWISE:x.WebGLConstants.CW,COUNTER_CLOCKWISE:x.WebGLConstants.CCW,validate:function(e){return e===$.CLOCKWISE||e===$.COUNTER_CLOCKWISE}};var I=Object.freeze($);const q=new r.Cartesian3,N=new r.Cartesian3,U={computeArea2D:function(e){a.Check.defined("positions",e),a.Check.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);const t=e.length;let n=0;for(let r=t-1,a=0;a<t;r=a++){const t=e[r],i=e[a];n+=t.x*i.y-i.x*t.y}return.5*n},computeWindingOrder2D:function(e){return U.computeArea2D(e)>0?I.COUNTER_CLOCKWISE:I.CLOCKWISE},triangulate:function(e,t){a.Check.defined("positions",e);const r=n.Cartesian2.packArray(e);return P(r,t,2)}},_=new r.Cartesian3,F=new r.Cartesian3,K=new r.Cartesian3,V=new r.Cartesian3,j=new r.Cartesian3,H=new r.Cartesian3,J=new r.Cartesian3,Q=new n.Cartesian2,X=new n.Cartesian2,Y=new n.Cartesian2,ee=new n.Cartesian2;U.computeSubdivision=function(e,o,x,p,l){l=s.defaultValue(l,t.CesiumMath.RADIANS_PER_DEGREE);const h=s.defined(p);a.Check.typeOf.object("ellipsoid",e),a.Check.defined("positions",o),a.Check.defined("indices",x),a.Check.typeOf.number.greaterThanOrEquals("indices.length",x.length,3),a.Check.typeOf.number.equals("indices.length % 3","0",x.length%3,0),a.Check.typeOf.number.greaterThan("granularity",l,0);const c=x.slice(0);let f;const y=o.length,d=new Array(3*y),C=new Array(2*y);let v=0,m=0;for(f=0;f<y;f++){const e=o[f];if(d[v++]=e.x,d[v++]=e.y,d[v++]=e.z,h){const e=p[f];C[m++]=e.x,C[m++]=e.y}}const g=[],b={},w=e.maximumRadius,A=t.CesiumMath.chordLength(l,w),E=A*A;for(;c.length>0;){const e=c.pop(),t=c.pop(),a=c.pop(),i=r.Cartesian3.fromArray(d,3*a,_),o=r.Cartesian3.fromArray(d,3*t,F),u=r.Cartesian3.fromArray(d,3*e,K);let x,p,l;h&&(x=n.Cartesian2.fromArray(C,2*a,Q),p=n.Cartesian2.fromArray(C,2*t,X),l=n.Cartesian2.fromArray(C,2*e,Y));const y=r.Cartesian3.multiplyByScalar(r.Cartesian3.normalize(i,V),w,V),v=r.Cartesian3.multiplyByScalar(r.Cartesian3.normalize(o,j),w,j),m=r.Cartesian3.multiplyByScalar(r.Cartesian3.normalize(u,H),w,H),A=r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(y,v,J)),M=r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(v,m,J)),S=r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(m,y,J)),O=Math.max(A,M,S);let Z,z,D;O>E?A===O?(Z=`${Math.min(a,t)} ${Math.max(a,t)}`,f=b[Z],s.defined(f)||(z=r.Cartesian3.add(i,o,J),r.Cartesian3.multiplyByScalar(z,.5,z),d.push(z.x,z.y,z.z),f=d.length/3-1,b[Z]=f,h&&(D=n.Cartesian2.add(x,p,ee),n.Cartesian2.multiplyByScalar(D,.5,D),C.push(D.x,D.y))),c.push(a,f,e),c.push(f,t,e)):M===O?(Z=`${Math.min(t,e)} ${Math.max(t,e)}`,f=b[Z],s.defined(f)||(z=r.Cartesian3.add(o,u,J),r.Cartesian3.multiplyByScalar(z,.5,z),d.push(z.x,z.y,z.z),f=d.length/3-1,b[Z]=f,h&&(D=n.Cartesian2.add(p,l,ee),n.Cartesian2.multiplyByScalar(D,.5,D),C.push(D.x,D.y))),c.push(t,f,a),c.push(f,e,a)):S===O&&(Z=`${Math.min(e,a)} ${Math.max(e,a)}`,f=b[Z],s.defined(f)||(z=r.Cartesian3.add(u,i,J),r.Cartesian3.multiplyByScalar(z,.5,z),d.push(z.x,z.y,z.z),f=d.length/3-1,b[Z]=f,h&&(D=n.Cartesian2.add(l,x,ee),n.Cartesian2.multiplyByScalar(D,.5,D),C.push(D.x,D.y))),c.push(e,f,t),c.push(f,a,t)):(g.push(a),g.push(t),g.push(e))}const M={attributes:{position:new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d})},indices:g,primitiveType:u.PrimitiveType.TRIANGLES};return h&&(M.attributes.st=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:C})),new u.Geometry(M)};const te=new r.Cartographic,ne=new r.Cartographic,re=new r.Cartographic,ae=new r.Cartographic;U.computeRhumbLineSubdivision=function(e,x,p,l,h){h=s.defaultValue(h,t.CesiumMath.RADIANS_PER_DEGREE);const c=s.defined(l);a.Check.typeOf.object("ellipsoid",e),a.Check.defined("positions",x),a.Check.defined("indices",p),a.Check.typeOf.number.greaterThanOrEquals("indices.length",p.length,3),a.Check.typeOf.number.equals("indices.length % 3","0",p.length%3,0),a.Check.typeOf.number.greaterThan("granularity",h,0);const f=p.slice(0);let y;const d=x.length,C=new Array(3*d),v=new Array(2*d);let m=0,g=0;for(y=0;y<d;y++){const e=x[y];if(C[m++]=e.x,C[m++]=e.y,C[m++]=e.z,c){const e=l[y];v[g++]=e.x,v[g++]=e.y}}const b=[],w={},A=e.maximumRadius,E=t.CesiumMath.chordLength(h,A),M=new o.EllipsoidRhumbLine(void 0,void 0,e),S=new o.EllipsoidRhumbLine(void 0,void 0,e),O=new o.EllipsoidRhumbLine(void 0,void 0,e);for(;f.length>0;){const t=f.pop(),a=f.pop(),i=f.pop(),o=r.Cartesian3.fromArray(C,3*i,_),u=r.Cartesian3.fromArray(C,3*a,F),x=r.Cartesian3.fromArray(C,3*t,K);let p,l,h;c&&(p=n.Cartesian2.fromArray(v,2*i,Q),l=n.Cartesian2.fromArray(v,2*a,X),h=n.Cartesian2.fromArray(v,2*t,Y));const d=e.cartesianToCartographic(o,te),m=e.cartesianToCartographic(u,ne),g=e.cartesianToCartographic(x,re);M.setEndPoints(d,m);const A=M.surfaceDistance;S.setEndPoints(m,g);const Z=S.surfaceDistance;O.setEndPoints(g,d);const z=O.surfaceDistance,D=Math.max(A,Z,z);let L,R,T,k,G;D>E?A===D?(L=`${Math.min(i,a)} ${Math.max(i,a)}`,y=w[L],s.defined(y)||(R=M.interpolateUsingFraction(.5,ae),T=.5*(d.height+m.height),k=r.Cartesian3.fromRadians(R.longitude,R.latitude,T,e,J),C.push(k.x,k.y,k.z),y=C.length/3-1,w[L]=y,c&&(G=n.Cartesian2.add(p,l,ee),n.Cartesian2.multiplyByScalar(G,.5,G),v.push(G.x,G.y))),f.push(i,y,t),f.push(y,a,t)):Z===D?(L=`${Math.min(a,t)} ${Math.max(a,t)}`,y=w[L],s.defined(y)||(R=S.interpolateUsingFraction(.5,ae),T=.5*(m.height+g.height),k=r.Cartesian3.fromRadians(R.longitude,R.latitude,T,e,J),C.push(k.x,k.y,k.z),y=C.length/3-1,w[L]=y,c&&(G=n.Cartesian2.add(l,h,ee),n.Cartesian2.multiplyByScalar(G,.5,G),v.push(G.x,G.y))),f.push(a,y,i),f.push(y,t,i)):z===D&&(L=`${Math.min(t,i)} ${Math.max(t,i)}`,y=w[L],s.defined(y)||(R=O.interpolateUsingFraction(.5,ae),T=.5*(g.height+d.height),k=r.Cartesian3.fromRadians(R.longitude,R.latitude,T,e,J),C.push(k.x,k.y,k.z),y=C.length/3-1,w[L]=y,c&&(G=n.Cartesian2.add(h,p,ee),n.Cartesian2.multiplyByScalar(G,.5,G),v.push(G.x,G.y))),f.push(t,y,a),f.push(y,i,a)):(b.push(i),b.push(a),b.push(t))}const Z={attributes:{position:new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:C})},indices:b,primitiveType:u.PrimitiveType.TRIANGLES};return c&&(Z.attributes.st=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:v})),new u.Geometry(Z)},U.scaleToGeodeticHeight=function(e,t,n,a){n=s.defaultValue(n,r.Ellipsoid.WGS84);let i=q,o=N;if(t=s.defaultValue(t,0),a=s.defaultValue(a,!0),s.defined(e)){const s=e.length;for(let u=0;u<s;u+=3)r.Cartesian3.fromArray(e,u,o),a&&(o=n.scaleToGeodeticSurface(o,o)),0!==t&&(i=n.geodeticSurfaceNormal(o,i),r.Cartesian3.multiplyByScalar(i,t,i),r.Cartesian3.add(o,i,o)),e[u]=o.x,e[u+1]=o.y,e[u+2]=o.z}return e};var ie=U;e.PolygonPipeline=ie,e.WindingOrder=I}));