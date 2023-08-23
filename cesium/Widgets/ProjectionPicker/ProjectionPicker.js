import{defined,destroyObject,DeveloperError,FeatureDetection,getElement}from"@cesium/engine";import knockout from"../ThirdParty/knockout.js";import ProjectionPickerViewModel from"./ProjectionPickerViewModel.js";const perspectivePath="M 28.15625,10.4375 9.125,13.21875 13.75,43.25 41.75,55.09375 50.8125,37 54.5,11.9375 z m 0.125,3 19.976451,0.394265 L 43.03125,16.875 22.6875,14.28125 z M 50.971746,15.705477 47.90625,36.03125 42.53125,46 44.84375,19.3125 z M 12.625,16.03125 l 29.15625,3.6875 -2.65625,31 L 16.4375,41.125 z",orthographicPath="m 31.560594,6.5254438 -20.75,12.4687502 0.1875,24.5625 22.28125,11.8125 19.5,-12 0.65625,-0.375 0,-0.75 0.0312,-23.21875 z m 0.0625,3.125 16.65625,9.5000002 -16.125,10.28125 -17.34375,-9.71875 z m 18.96875,11.1875002 0.15625,20.65625 -17.46875,10.59375 0.15625,-20.28125 z m -37.0625,1.25 17.21875,9.625 -0.15625,19.21875 -16.9375,-9 z";function ProjectionPicker(e,t){if(!defined(e))throw new DeveloperError("container is required.");if(!defined(t))throw new DeveloperError("scene is required.");e=getElement(e);const o=new ProjectionPickerViewModel(t);o._perspectivePath=perspectivePath,o._orthographicPath=orthographicPath;const i=document.createElement("span");i.className="cesium-projectionPicker-wrapper cesium-toolbar-button",e.appendChild(i);const r=document.createElement("button");r.type="button",r.className="cesium-button cesium-toolbar-button",r.setAttribute("data-bind",'css: { "cesium-projectionPicker-buttonPerspective": !_orthographic,       "cesium-projectionPicker-buttonOrthographic": _orthographic,       "cesium-button-disabled" : sceneMode === _sceneMode.SCENE2D || _flightInProgress,        "cesium-projectionPicker-selected": dropDownVisible },attr: { title: selectedTooltip },click: toggleDropDown'),r.innerHTML='\x3c!-- ko cesiumSvgPath: { path: _perspectivePath, width: 64, height: 64, css: "cesium-projectionPicker-iconPerspective" } --\x3e\x3c!-- /ko --\x3e\x3c!-- ko cesiumSvgPath: { path: _orthographicPath, width: 64, height: 64, css: "cesium-projectionPicker-iconOrthographic" } --\x3e\x3c!-- /ko --\x3e',i.appendChild(r);const c=document.createElement("button");c.type="button",c.className="cesium-button cesium-toolbar-button cesium-projectionPicker-dropDown-icon",c.setAttribute("data-bind",'css: { "cesium-projectionPicker-visible" : (dropDownVisible && _orthographic),       "cesium-projectionPicker-none" : !_orthographic,       "cesium-projectionPicker-hidden" : !dropDownVisible },attr: { title: tooltipPerspective },click: switchToPerspective,cesiumSvgPath: { path: _perspectivePath, width: 64, height: 64 }'),i.appendChild(c);const n=document.createElement("button");n.type="button",n.className="cesium-button cesium-toolbar-button cesium-projectionPicker-dropDown-icon",n.setAttribute("data-bind",'css: { "cesium-projectionPicker-visible" : (dropDownVisible && !_orthographic),       "cesium-projectionPicker-none" : _orthographic,       "cesium-projectionPicker-hidden" : !dropDownVisible},attr: { title: tooltipOrthographic },click: switchToOrthographic,cesiumSvgPath: { path: _orthographicPath, width: 64, height: 64 }'),i.appendChild(n),knockout.applyBindings(o,i),this._viewModel=o,this._container=e,this._wrapper=i,this._closeDropDown=function(e){i.contains(e.target)||(o.dropDownVisible=!1)},FeatureDetection.supportsPointerEvents()?document.addEventListener("pointerdown",this._closeDropDown,!0):(document.addEventListener("mousedown",this._closeDropDown,!0),document.addEventListener("touchstart",this._closeDropDown,!0))}Object.defineProperties(ProjectionPicker.prototype,{container:{get:function(){return this._container}},viewModel:{get:function(){return this._viewModel}}}),ProjectionPicker.prototype.isDestroyed=function(){return!1},ProjectionPicker.prototype.destroy=function(){return this._viewModel.destroy(),FeatureDetection.supportsPointerEvents()?document.removeEventListener("pointerdown",this._closeDropDown,!0):(document.removeEventListener("mousedown",this._closeDropDown,!0),document.removeEventListener("touchstart",this._closeDropDown,!0)),knockout.cleanNode(this._wrapper),this._container.removeChild(this._wrapper),destroyObject(this)};export default ProjectionPicker;