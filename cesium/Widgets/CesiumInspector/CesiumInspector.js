import{defined,destroyObject,DeveloperError,getElement}from"@cesium/engine";import knockout from"../ThirdParty/knockout.js";import InspectorShared from"../InspectorShared.js";import CesiumInspectorViewModel from"./CesiumInspectorViewModel.js";function CesiumInspector(e,t){if(!defined(e))throw new DeveloperError("container is required.");if(!defined(t))throw new DeveloperError("scene is required.");e=getElement(e);const i=document.createElement("div"),n=new CesiumInspectorViewModel(t,i);this._viewModel=n,this._container=e;const c=document.createElement("div");this._element=c;const s=document.createElement("div");s.textContent="Cesium Inspector",s.className="cesium-cesiumInspector-button",s.setAttribute("data-bind","click: toggleDropDown"),c.appendChild(s),c.className="cesium-cesiumInspector",c.setAttribute("data-bind",'css: { "cesium-cesiumInspector-visible" : dropDownVisible, "cesium-cesiumInspector-hidden" : !dropDownVisible }'),e.appendChild(this._element);const d=document.createElement("div");d.className="cesium-cesiumInspector-dropDown",c.appendChild(d);const a=InspectorShared.createSection,r=InspectorShared.createCheckbox,o=a(d,"General","generalVisible","toggleGeneral"),p=r("Show Frustums","frustums"),m=document.createElement("div");m.className="cesium-cesiumInspector-frustumStatistics",m.setAttribute("data-bind","visible: frustums, html: frustumStatisticText"),p.appendChild(m),o.appendChild(p),o.appendChild(r("Show Frustum Planes","frustumPlanes")),o.appendChild(r("Performance Display","performance")),i.className="cesium-cesiumInspector-performanceDisplay",o.appendChild(i);const u=document.createElement("div");u.className="cesium-cesiumInspector-shaderCache",u.setAttribute("data-bind","html: shaderCacheText"),o.appendChild(u);const l=document.createElement("div");o.appendChild(l);const h=document.createElement("span");h.setAttribute("data-bind",'html: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frustum:"'),l.appendChild(h);const b=document.createElement("span");b.setAttribute("data-bind","text: depthFrustumText"),l.appendChild(b);const C=document.createElement("input");C.type="button",C.value="-",C.className="cesium-cesiumInspector-pickButton",C.setAttribute("data-bind","click: decrementDepthFrustum"),l.appendChild(C);const v=document.createElement("input");v.type="button",v.value="+",v.className="cesium-cesiumInspector-pickButton",v.setAttribute("data-bind","click: incrementDepthFrustum"),l.appendChild(v);const k=a(d,"Primitives","primitivesVisible","togglePrimitives"),E=document.createElement("div");E.className="cesium-cesiumInspector-pickSection",k.appendChild(E);const I=document.createElement("input");I.type="button",I.value="Pick a primitive",I.className="cesium-cesiumInspector-pickButton",I.setAttribute("data-bind",'css: {"cesium-cesiumInspector-pickButtonHighlight" : pickPrimitiveActive}, click: pickPrimitive');let f=document.createElement("div");f.className="cesium-cesiumInspector-center",f.appendChild(I),E.appendChild(f),E.appendChild(r("Show bounding sphere","primitiveBoundingSphere","hasPickedPrimitive")),E.appendChild(r("Show reference frame","primitiveReferenceFrame","hasPickedPrimitive")),this._primitiveOnly=r("Show only selected","filterPrimitive","hasPickedPrimitive"),E.appendChild(this._primitiveOnly);const N=a(d,"Terrain","terrainVisible","toggleTerrain"),S=document.createElement("div");S.className="cesium-cesiumInspector-pickSection",N.appendChild(S);const w=document.createElement("input");w.type="button",w.value="Pick a tile",w.className="cesium-cesiumInspector-pickButton",w.setAttribute("data-bind",'css: {"cesium-cesiumInspector-pickButtonHighlight" : pickTileActive}, click: pickTile'),f=document.createElement("div"),f.appendChild(w),f.className="cesium-cesiumInspector-center",S.appendChild(f);const y=document.createElement("div");S.appendChild(y);const g=document.createElement("input");g.type="button",g.value="Parent",g.className="cesium-cesiumInspector-pickButton",g.setAttribute("data-bind","click: selectParent");const P=document.createElement("input");P.type="button",P.value="NW",P.className="cesium-cesiumInspector-pickButton",P.setAttribute("data-bind","click: selectNW");const A=document.createElement("input");A.type="button",A.value="NE",A.className="cesium-cesiumInspector-pickButton",A.setAttribute("data-bind","click: selectNE");const T=document.createElement("input");T.type="button",T.value="SW",T.className="cesium-cesiumInspector-pickButton",T.setAttribute("data-bind","click: selectSW");const B=document.createElement("input");B.type="button",B.value="SE",B.className="cesium-cesiumInspector-pickButton",B.setAttribute("data-bind","click: selectSE");const D=document.createElement("div");D.className="cesium-cesiumInspector-tileText",y.className="cesium-cesiumInspector-frustumStatistics",y.appendChild(D),y.setAttribute("data-bind","visible: hasPickedTile"),D.setAttribute("data-bind","html: tileText");const _=document.createElement("div");_.className="cesium-cesiumInspector-relativeText",_.textContent="Select relative:",y.appendChild(_);const x=document.createElement("table"),V=document.createElement("tr"),F=document.createElement("tr"),M=document.createElement("td");M.appendChild(g);const j=document.createElement("td");j.appendChild(P);const O=document.createElement("td");O.appendChild(A),V.appendChild(M),V.appendChild(j),V.appendChild(O);const W=document.createElement("td"),q=document.createElement("td");q.appendChild(T);const G=document.createElement("td");G.appendChild(B),F.appendChild(W),F.appendChild(q),F.appendChild(G),x.appendChild(V),x.appendChild(F),y.appendChild(x),S.appendChild(r("Show bounding volume","tileBoundingSphere","hasPickedTile")),S.appendChild(r("Show only selected","filterTile","hasPickedTile")),N.appendChild(r("Wireframe","wireframe")),N.appendChild(r("Suspend LOD update","suspendUpdates")),N.appendChild(r("Show tile coordinates","tileCoordinates")),knockout.applyBindings(n,this._element)}Object.defineProperties(CesiumInspector.prototype,{container:{get:function(){return this._container}},viewModel:{get:function(){return this._viewModel}}}),CesiumInspector.prototype.isDestroyed=function(){return!1},CesiumInspector.prototype.destroy=function(){return knockout.cleanNode(this._element),this._container.removeChild(this._element),this.viewModel.destroy(),destroyObject(this)};export default CesiumInspector;