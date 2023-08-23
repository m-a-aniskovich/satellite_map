define(["exports","./Matrix2-e1298525","./Matrix3-41c58dde","./Check-6ede7e26","./defaultValue-fe22d8c0","./Transforms-e2d4a55a"],(function(e,t,n,i,h,c){"use strict";function r(e,t,n,i){this.x=h.defaultValue(e,0),this.y=h.defaultValue(t,0),this.width=h.defaultValue(n,0),this.height=h.defaultValue(i,0)}r.packedLength=4,r.pack=function(e,t,n){return i.Check.typeOf.object("value",e),i.Check.defined("array",t),n=h.defaultValue(n,0),t[n++]=e.x,t[n++]=e.y,t[n++]=e.width,t[n]=e.height,t},r.unpack=function(e,t,n){return i.Check.defined("array",e),t=h.defaultValue(t,0),h.defined(n)||(n=new r),n.x=e[t++],n.y=e[t++],n.width=e[t++],n.height=e[t],n},r.fromPoints=function(e,t){if(h.defined(t)||(t=new r),!h.defined(e)||0===e.length)return t.x=0,t.y=0,t.width=0,t.height=0,t;const n=e.length;let i=e[0].x,c=e[0].y,d=e[0].x,a=e[0].y;for(let t=1;t<n;t++){const n=e[t],h=n.x,r=n.y;i=Math.min(h,i),d=Math.max(h,d),c=Math.min(r,c),a=Math.max(r,a)}return t.x=i,t.y=c,t.width=d-i,t.height=a-c,t};const d=new c.GeographicProjection,a=new n.Cartographic,o=new n.Cartographic;r.fromRectangle=function(e,n,i){if(h.defined(i)||(i=new r),!h.defined(e))return i.x=0,i.y=0,i.width=0,i.height=0,i;const c=(n=h.defaultValue(n,d)).project(t.Rectangle.southwest(e,a)),u=n.project(t.Rectangle.northeast(e,o));return t.Cartesian2.subtract(u,c,u),i.x=c.x,i.y=c.y,i.width=u.x,i.height=u.y,i},r.clone=function(e,t){if(h.defined(e))return h.defined(t)?(t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,t):new r(e.x,e.y,e.width,e.height)},r.union=function(e,t,n){i.Check.typeOf.object("left",e),i.Check.typeOf.object("right",t),h.defined(n)||(n=new r);const c=Math.min(e.x,t.x),d=Math.min(e.y,t.y),a=Math.max(e.x+e.width,t.x+t.width),o=Math.max(e.y+e.height,t.y+t.height);return n.x=c,n.y=d,n.width=a-c,n.height=o-d,n},r.expand=function(e,t,n){i.Check.typeOf.object("rectangle",e),i.Check.typeOf.object("point",t),n=r.clone(e,n);const h=t.x-n.x,c=t.y-n.y;return h>n.width?n.width=h:h<0&&(n.width-=h,n.x=t.x),c>n.height?n.height=c:c<0&&(n.height-=c,n.y=t.y),n},r.intersect=function(e,t){i.Check.typeOf.object("left",e),i.Check.typeOf.object("right",t);const n=e.x,h=e.y,r=t.x,d=t.y;return n>r+t.width||n+e.width<r||h+e.height<d||h>d+t.height?c.Intersect.OUTSIDE:c.Intersect.INTERSECTING},r.equals=function(e,t){return e===t||h.defined(e)&&h.defined(t)&&e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height},r.prototype.clone=function(e){return r.clone(this,e)},r.prototype.intersect=function(e){return r.intersect(this,e)},r.prototype.equals=function(e){return r.equals(this,e)},e.BoundingRectangle=r}));