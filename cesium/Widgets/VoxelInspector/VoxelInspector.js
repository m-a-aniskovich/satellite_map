import{Cartesian3,Math as CesiumMath,Check,destroyObject,Ellipsoid,getElement,VoxelShapeType}from"@cesium/engine";import knockout from"../ThirdParty/knockout.js";import InspectorShared from"../InspectorShared.js";import VoxelInspectorViewModel from"./VoxelInspectorViewModel.js";function VoxelInspector(e,i){Check.defined("container",e),Check.typeOf.object("scene",i),e=getElement(e);const n=document.createElement("div"),t=new VoxelInspectorViewModel(i);this._viewModel=t,this._container=e,this._element=n;const a=document.createElement("div");a.textContent="Voxel Inspector",a.className="cesium-cesiumInspector-button",a.setAttribute("data-bind","click: toggleInspector"),n.appendChild(a),n.className="cesium-cesiumInspector cesium-VoxelInspector",n.setAttribute("data-bind",'css: { "cesium-cesiumInspector-visible" : inspectorVisible, "cesium-cesiumInspector-hidden" : !inspectorVisible}'),e.appendChild(n);const o=document.createElement("div");o.className="cesium-cesiumInspector-dropDown",n.appendChild(o);const d=InspectorShared.createSection,p=InspectorShared.createCheckbox,l=InspectorShared.createRangeInput,s=InspectorShared.createButton,r=d(o,"Display","displayVisible","toggleDisplay"),c=d(o,"Transform","transformVisible","toggleTransform"),h=d(o,"Bounds","boundsVisible","toggleBounds"),u=d(o,"Clipping","clippingVisible","toggleClipping"),g=d(o,"Shader","shaderVisible","toggleShader");r.appendChild(p("Depth Test","depthTest")),r.appendChild(p("Show","show")),r.appendChild(p("Disable Update","disableUpdate")),r.appendChild(p("Debug Draw","debugDraw")),r.appendChild(p("Jitter","jitter")),r.appendChild(p("Nearest Sampling","nearestSampling")),r.appendChild(l("Screen Space Error","screenSpaceError",0,128)),r.appendChild(l("Step Size","stepSize",0,2));const x=CesiumMath.PI;c.appendChild(l("Translation X","translationX",-10,10)),c.appendChild(l("Translation Y","translationY",-10,10)),c.appendChild(l("Translation Z","translationZ",-10,10)),c.appendChild(l("Scale X","scaleX",0,10)),c.appendChild(l("Scale Y","scaleY",0,10)),c.appendChild(l("Scale Z","scaleZ",0,10)),c.appendChild(l("Heading","angleX",-x,+x)),c.appendChild(l("Pitch","angleY",-x,+x)),c.appendChild(l("Roll","angleZ",-x,+x));const M=VoxelShapeType.getMinBounds(VoxelShapeType.BOX),C=VoxelShapeType.getMaxBounds(VoxelShapeType.BOX),m=Cartesian3.fromElements(VoxelShapeType.getMinBounds(VoxelShapeType.ELLIPSOID).x,VoxelShapeType.getMinBounds(VoxelShapeType.ELLIPSOID).y,-Ellipsoid.WGS84.maximumRadius,new Cartesian3),y=Cartesian3.fromElements(VoxelShapeType.getMaxBounds(VoxelShapeType.ELLIPSOID).x,VoxelShapeType.getMaxBounds(VoxelShapeType.ELLIPSOID).y,1e7,new Cartesian3),b=VoxelShapeType.getMinBounds(VoxelShapeType.CYLINDER),S=VoxelShapeType.getMaxBounds(VoxelShapeType.CYLINDER);makeCoordinateRange("Max X","Min X","Max Y","Min Y","Max Z","Min Z","boundsBoxMaxX","boundsBoxMinX","boundsBoxMaxY","boundsBoxMinY","boundsBoxMaxZ","boundsBoxMinZ",M,C,"shapeIsBox",h),makeCoordinateRange("Max Longitude","Min Longitude","Max Latitude","Min Latitude","Max Height","Min Height","boundsEllipsoidMaxLongitude","boundsEllipsoidMinLongitude","boundsEllipsoidMaxLatitude","boundsEllipsoidMinLatitude","boundsEllipsoidMaxHeight","boundsEllipsoidMinHeight",m,y,"shapeIsEllipsoid",h),makeCoordinateRange("Max Radius","Min Radius","Max Height","Min Height","Max Angle","Min Angle","boundsCylinderMaxRadius","boundsCylinderMinRadius","boundsCylinderMaxHeight","boundsCylinderMinHeight","boundsCylinderMaxAngle","boundsCylinderMinAngle",b,S,"shapeIsCylinder",h),makeCoordinateRange("Max X","Min X","Max Y","Min Y","Max Z","Min Z","clippingBoxMaxX","clippingBoxMinX","clippingBoxMaxY","clippingBoxMinY","clippingBoxMaxZ","clippingBoxMinZ",M,C,"shapeIsBox",u),makeCoordinateRange("Max Longitude","Min Longitude","Max Latitude","Min Latitude","Max Height","Min Height","clippingEllipsoidMaxLongitude","clippingEllipsoidMinLongitude","clippingEllipsoidMaxLatitude","clippingEllipsoidMinLatitude","clippingEllipsoidMaxHeight","clippingEllipsoidMinHeight",m,y,"shapeIsEllipsoid",u),makeCoordinateRange("Max Radius","Min Radius","Max Height","Min Height","Max Angle","Min Angle","clippingCylinderMaxRadius","clippingCylinderMinRadius","clippingCylinderMaxHeight","clippingCylinderMinHeight","clippingCylinderMaxAngle","clippingCylinderMinAngle",b,S,"shapeIsCylinder",u);const I=document.createElement("div");g.appendChild(I);const E=document.createElement("textarea");E.setAttribute("data-bind","textInput: shaderString, event: { keydown: shaderEditorKeyPress }"),I.className="cesium-cesiumInspector-styleEditor",I.appendChild(E);const V=s("Compile (Ctrl+Enter)","compileShader");I.appendChild(V);const B=document.createElement("label");B.style.display="block",B.setAttribute("data-bind","text: shaderCompilationMessage, style: {color: shaderCompilationSuccess ? 'green' : 'red'}"),I.appendChild(B),knockout.applyBindings(t,n)}function makeCoordinateRange(e,i,n,t,a,o,d,p,l,s,r,c,h,u,g,x){const M=InspectorShared.createRangeInput,C=h,m=u,y=x.appendChild(document.createElement("div"));y.setAttribute("data-bind",`if: ${g}`),y.appendChild(M(e,d,C.x,m.x)),y.appendChild(M(i,p,C.x,m.x)),y.appendChild(M(n,l,C.y,m.y)),y.appendChild(M(t,s,C.y,m.y)),y.appendChild(M(a,r,C.z,m.z)),y.appendChild(M(o,c,C.z,m.z))}Object.defineProperties(VoxelInspector.prototype,{container:{get:function(){return this._container}},viewModel:{get:function(){return this._viewModel}}}),VoxelInspector.prototype.isDestroyed=function(){return!1},VoxelInspector.prototype.destroy=function(){return knockout.cleanNode(this._element),this._container.removeChild(this._element),this.viewModel.destroy(),destroyObject(this)};export default VoxelInspector;