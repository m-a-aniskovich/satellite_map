import{Cartesian3,defined,destroyObject,DebugModelMatrixPrimitive,DeveloperError,PerformanceDisplay,Ray,Rectangle,ScreenSpaceEventHandler,ScreenSpaceEventType,TileCoordinatesImageryProvider}from"@cesium/engine";import knockout from"../ThirdParty/knockout.js";import createCommand from"../createCommand.js";function frustumStatisticsToString(e){let i;if(defined(e)){i="Command Statistics";const t=e.commandsInFrustums;for(const e in t)if(t.hasOwnProperty(e)){let r,n=parseInt(e,10);if(7===n)r="1, 2 and 3";else{const e=[];for(let i=2;i>=0;i--){const t=Math.pow(2,i);n>=t&&(e.push(i+1),n-=t)}r=e.reverse().join(" and ")}i+=`<br>&nbsp;&nbsp;&nbsp;&nbsp;${t[e]} in frustum ${r}`}i+=`<br>Total: ${e.totalCommands}`}return i}function boundDepthFrustum(e,i,t){let r=Math.min(t,i);return r=Math.max(r,e),r}const scratchPickRay=new Ray,scratchPickCartesian=new Cartesian3;function CesiumInspectorViewModel(e,i){if(!defined(e))throw new DeveloperError("scene is required");if(!defined(i))throw new DeveloperError("performanceContainer is required");const t=this,r=e.canvas,n=new ScreenSpaceEventHandler(r);this._eventHandler=n,this._scene=e,this._canvas=r,this._primitive=void 0,this._tile=void 0,this._modelMatrixPrimitive=void 0,this._performanceDisplay=void 0,this._performanceContainer=i;const s=this._scene.globe;let o;function u(e){const i=t._scene.pick({x:e.position.x,y:e.position.y});defined(i)&&(t.primitive=defined(i.collection)?i.collection:i.primitive),t._scene.requestRender(),t.pickPrimitiveActive=!1}function c(e){let i;const r=s.ellipsoid,n=t._scene.camera.getPickRay(e.position,scratchPickRay),o=s.pick(n,t._scene,scratchPickCartesian);if(defined(o)){const e=r.cartesianToCartographic(o),t=s._surface.tileProvider._tilesToRenderByTextureCount;for(let r=0;!i&&r<t.length;++r){const n=t[r];if(defined(n))for(let t=0;!i&&t<n.length;++t){const r=n[t];Rectangle.contains(r.rectangle,e)&&(i=r)}}}t.tile=i,t.pickTileActive=!1}s.depthTestAgainstTerrain=!0,this.frustums=!1,this.frustumPlanes=!1,this.performance=!1,this.shaderCacheText="",this.primitiveBoundingSphere=!1,this.primitiveReferenceFrame=!1,this.filterPrimitive=!1,this.tileBoundingSphere=!1,this.filterTile=!1,this.wireframe=!1,this.depthFrustum=1,this._numberOfFrustums=1,this.suspendUpdates=!1,this.tileCoordinates=!1,this.frustumStatisticText=!1,this.tileText="",this.hasPickedPrimitive=!1,this.hasPickedTile=!1,this.pickPrimitiveActive=!1,this.pickTileActive=!1,this.dropDownVisible=!0,this.generalVisible=!0,this.primitivesVisible=!1,this.terrainVisible=!1,this.depthFrustumText="",knockout.track(this,["frustums","frustumPlanes","performance","shaderCacheText","primitiveBoundingSphere","primitiveReferenceFrame","filterPrimitive","tileBoundingSphere","filterTile","wireframe","depthFrustum","suspendUpdates","tileCoordinates","frustumStatisticText","tileText","hasPickedPrimitive","hasPickedTile","pickPrimitiveActive","pickTileActive","dropDownVisible","generalVisible","primitivesVisible","terrainVisible","depthFrustumText"]),this._toggleDropDown=createCommand((function(){t.dropDownVisible=!t.dropDownVisible})),this._toggleGeneral=createCommand((function(){t.generalVisible=!t.generalVisible})),this._togglePrimitives=createCommand((function(){t.primitivesVisible=!t.primitivesVisible})),this._toggleTerrain=createCommand((function(){t.terrainVisible=!t.terrainVisible})),this._frustumsSubscription=knockout.getObservable(this,"frustums").subscribe((function(e){t._scene.debugShowFrustums=e,t._scene.requestRender()})),this._frustumPlanesSubscription=knockout.getObservable(this,"frustumPlanes").subscribe((function(e){t._scene.debugShowFrustumPlanes=e,t._scene.requestRender()})),this._performanceSubscription=knockout.getObservable(this,"performance").subscribe((function(e){e?t._performanceDisplay=new PerformanceDisplay({container:t._performanceContainer}):t._performanceContainer.innerHTML=""})),this._showPrimitiveBoundingSphere=createCommand((function(){return t._primitive.debugShowBoundingVolume=t.primitiveBoundingSphere,t._scene.requestRender(),!0})),this._primitiveBoundingSphereSubscription=knockout.getObservable(this,"primitiveBoundingSphere").subscribe((function(){t._showPrimitiveBoundingSphere()})),this._showPrimitiveReferenceFrame=createCommand((function(){if(t.primitiveReferenceFrame){const e=t._primitive.modelMatrix;t._modelMatrixPrimitive=new DebugModelMatrixPrimitive({modelMatrix:e}),t._scene.primitives.add(t._modelMatrixPrimitive)}else defined(t._modelMatrixPrimitive)&&(t._scene.primitives.remove(t._modelMatrixPrimitive),t._modelMatrixPrimitive=void 0);return t._scene.requestRender(),!0})),this._primitiveReferenceFrameSubscription=knockout.getObservable(this,"primitiveReferenceFrame").subscribe((function(){t._showPrimitiveReferenceFrame()})),this._doFilterPrimitive=createCommand((function(){return t.filterPrimitive?t._scene.debugCommandFilter=function(e){return!(!defined(t._modelMatrixPrimitive)||e.owner!==t._modelMatrixPrimitive._primitive)||!!defined(t._primitive)&&(e.owner===t._primitive||e.owner===t._primitive._billboardCollection||e.owner.primitive===t._primitive)}:t._scene.debugCommandFilter=void 0,!0})),this._filterPrimitiveSubscription=knockout.getObservable(this,"filterPrimitive").subscribe((function(){t._doFilterPrimitive(),t._scene.requestRender()})),this._wireframeSubscription=knockout.getObservable(this,"wireframe").subscribe((function(e){s._surface.tileProvider._debug.wireframe=e,t._scene.requestRender()})),this._depthFrustumSubscription=knockout.getObservable(this,"depthFrustum").subscribe((function(e){t._scene.debugShowDepthFrustum=e,t._scene.requestRender()})),this._incrementDepthFrustum=createCommand((function(){const e=t.depthFrustum+1;return t.depthFrustum=boundDepthFrustum(1,t._numberOfFrustums,e),t._scene.requestRender(),!0})),this._decrementDepthFrustum=createCommand((function(){const e=t.depthFrustum-1;return t.depthFrustum=boundDepthFrustum(1,t._numberOfFrustums,e),t._scene.requestRender(),!0})),this._suspendUpdatesSubscription=knockout.getObservable(this,"suspendUpdates").subscribe((function(e){s._surface._debug.suspendLodUpdate=e,e||(t.filterTile=!1)})),this._showTileCoordinates=createCommand((function(){return t.tileCoordinates&&!defined(o)?o=e.imageryLayers.addImageryProvider(new TileCoordinatesImageryProvider({tilingScheme:e.terrainProvider.tilingScheme})):!t.tileCoordinates&&defined(o)&&(e.imageryLayers.remove(o),o=void 0),!0})),this._tileCoordinatesSubscription=knockout.getObservable(this,"tileCoordinates").subscribe((function(){t._showTileCoordinates(),t._scene.requestRender()})),this._tileBoundingSphereSubscription=knockout.getObservable(this,"tileBoundingSphere").subscribe((function(){t._showTileBoundingSphere(),t._scene.requestRender()})),this._showTileBoundingSphere=createCommand((function(){return t.tileBoundingSphere?s._surface.tileProvider._debug.boundingSphereTile=t._tile:s._surface.tileProvider._debug.boundingSphereTile=void 0,t._scene.requestRender(),!0})),this._doFilterTile=createCommand((function(){return t.filterTile?(t.suspendUpdates=!0,s._surface._tilesToRender=[],defined(t._tile)&&t._tile.renderable&&s._surface._tilesToRender.push(t._tile)):t.suspendUpdates=!1,!0})),this._filterTileSubscription=knockout.getObservable(this,"filterTile").subscribe((function(){t.doFilterTile(),t._scene.requestRender()})),this._pickPrimitive=createCommand((function(){t.pickPrimitiveActive=!t.pickPrimitiveActive})),this._pickPrimitiveActiveSubscription=knockout.getObservable(this,"pickPrimitiveActive").subscribe((function(e){e?n.setInputAction(u,ScreenSpaceEventType.LEFT_CLICK):n.removeInputAction(ScreenSpaceEventType.LEFT_CLICK)})),this._pickTile=createCommand((function(){t.pickTileActive=!t.pickTileActive})),this._pickTileActiveSubscription=knockout.getObservable(this,"pickTileActive").subscribe((function(e){e?n.setInputAction(c,ScreenSpaceEventType.LEFT_CLICK):n.removeInputAction(ScreenSpaceEventType.LEFT_CLICK)})),this._removePostRenderEvent=e.postRender.addEventListener((function(){t._update()}))}Object.defineProperties(CesiumInspectorViewModel.prototype,{scene:{get:function(){return this._scene}},performanceContainer:{get:function(){return this._performanceContainer}},toggleDropDown:{get:function(){return this._toggleDropDown}},showPrimitiveBoundingSphere:{get:function(){return this._showPrimitiveBoundingSphere}},showPrimitiveReferenceFrame:{get:function(){return this._showPrimitiveReferenceFrame}},doFilterPrimitive:{get:function(){return this._doFilterPrimitive}},incrementDepthFrustum:{get:function(){return this._incrementDepthFrustum}},decrementDepthFrustum:{get:function(){return this._decrementDepthFrustum}},showTileCoordinates:{get:function(){return this._showTileCoordinates}},showTileBoundingSphere:{get:function(){return this._showTileBoundingSphere}},doFilterTile:{get:function(){return this._doFilterTile}},toggleGeneral:{get:function(){return this._toggleGeneral}},togglePrimitives:{get:function(){return this._togglePrimitives}},toggleTerrain:{get:function(){return this._toggleTerrain}},pickPrimitive:{get:function(){return this._pickPrimitive}},pickTile:{get:function(){return this._pickTile}},selectParent:{get:function(){const e=this;return createCommand((function(){e.tile=e.tile.parent}))}},selectNW:{get:function(){const e=this;return createCommand((function(){e.tile=e.tile.northwestChild}))}},selectNE:{get:function(){const e=this;return createCommand((function(){e.tile=e.tile.northeastChild}))}},selectSW:{get:function(){const e=this;return createCommand((function(){e.tile=e.tile.southwestChild}))}},selectSE:{get:function(){const e=this;return createCommand((function(){e.tile=e.tile.southeastChild}))}},primitive:{get:function(){return this._primitive},set:function(e){const i=this._primitive;e!==i&&(this.hasPickedPrimitive=!0,defined(i)&&(i.debugShowBoundingVolume=!1),this._scene.debugCommandFilter=void 0,defined(this._modelMatrixPrimitive)&&(this._scene.primitives.remove(this._modelMatrixPrimitive),this._modelMatrixPrimitive=void 0),this._primitive=e,e.show=!1,setTimeout((function(){e.show=!0}),50),this.showPrimitiveBoundingSphere(),this.showPrimitiveReferenceFrame(),this.doFilterPrimitive())}},tile:{get:function(){return this._tile},set:function(e){if(defined(e)){if(this.hasPickedTile=!0,e!==this._tile){this.tileText=`L: ${e.level} X: ${e.x} Y: ${e.y}`,this.tileText+=`<br>SW corner: ${e.rectangle.west}, ${e.rectangle.south}`,this.tileText+=`<br>NE corner: ${e.rectangle.east}, ${e.rectangle.north}`;const i=e.data;defined(i)&&defined(i.tileBoundingRegion)?this.tileText+=`<br>Min: ${i.tileBoundingRegion.minimumHeight} Max: ${i.tileBoundingRegion.maximumHeight}`:this.tileText+="<br>(Tile is not loaded)"}this._tile=e,this.showTileBoundingSphere(),this.doFilterTile()}else this.hasPickedTile=!1,this._tile=void 0}}}),CesiumInspectorViewModel.prototype._update=function(){this.frustums&&(this.frustumStatisticText=frustumStatisticsToString(this._scene.debugFrustumStatistics));const e=this._scene.numberOfFrustums;this._numberOfFrustums=e,this.depthFrustum=boundDepthFrustum(1,e,this.depthFrustum),this.depthFrustumText=`${this.depthFrustum} of ${e}`,this.performance&&this._performanceDisplay.update(),this.primitiveReferenceFrame&&(this._modelMatrixPrimitive.modelMatrix=this._primitive.modelMatrix),this.shaderCacheText=`Cached shaders: ${this._scene.context.shaderCache.numberOfShaders}`},CesiumInspectorViewModel.prototype.isDestroyed=function(){return!1},CesiumInspectorViewModel.prototype.destroy=function(){return this._eventHandler.destroy(),this._removePostRenderEvent(),this._frustumsSubscription.dispose(),this._frustumPlanesSubscription.dispose(),this._performanceSubscription.dispose(),this._primitiveBoundingSphereSubscription.dispose(),this._primitiveReferenceFrameSubscription.dispose(),this._filterPrimitiveSubscription.dispose(),this._wireframeSubscription.dispose(),this._depthFrustumSubscription.dispose(),this._suspendUpdatesSubscription.dispose(),this._tileCoordinatesSubscription.dispose(),this._tileBoundingSphereSubscription.dispose(),this._filterTileSubscription.dispose(),this._pickPrimitiveActiveSubscription.dispose(),this._pickTileActiveSubscription.dispose(),destroyObject(this)};export default CesiumInspectorViewModel;