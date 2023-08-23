import{defaultValue,defined,destroyObject,DeveloperError,EventHelper,SceneMode}from"@cesium/engine";import knockout from"../ThirdParty/knockout.js";import createCommand from"../createCommand.js";function SceneModePickerViewModel(e,o){if(!defined(e))throw new DeveloperError("scene is required.");this._scene=e;const t=this;this._eventHelper=new EventHelper,this._eventHelper.add(e.morphStart,(function(e,o,i,n){t.sceneMode=i,t.dropDownVisible=!1})),this._duration=defaultValue(o,2),this.sceneMode=e.mode,this.dropDownVisible=!1,this.tooltip2D="2D",this.tooltip3D="3D",this.tooltipColumbusView="Columbus View",knockout.track(this,["sceneMode","dropDownVisible","tooltip2D","tooltip3D","tooltipColumbusView"]),this.selectedTooltip=void 0,knockout.defineProperty(this,"selectedTooltip",(function(){const e=t.sceneMode;return e===SceneMode.SCENE2D?t.tooltip2D:e===SceneMode.SCENE3D?t.tooltip3D:t.tooltipColumbusView})),this._toggleDropDown=createCommand((function(){t.dropDownVisible=!t.dropDownVisible})),this._morphTo2D=createCommand((function(){e.morphTo2D(t._duration)})),this._morphTo3D=createCommand((function(){e.morphTo3D(t._duration)})),this._morphToColumbusView=createCommand((function(){e.morphToColumbusView(t._duration)})),this._sceneMode=SceneMode}Object.defineProperties(SceneModePickerViewModel.prototype,{scene:{get:function(){return this._scene}},duration:{get:function(){return this._duration},set:function(e){if(e<0)throw new DeveloperError("duration value must be positive.");this._duration=e}},toggleDropDown:{get:function(){return this._toggleDropDown}},morphTo2D:{get:function(){return this._morphTo2D}},morphTo3D:{get:function(){return this._morphTo3D}},morphToColumbusView:{get:function(){return this._morphToColumbusView}}}),SceneModePickerViewModel.prototype.isDestroyed=function(){return!1},SceneModePickerViewModel.prototype.destroy=function(){this._eventHelper.removeAll(),destroyObject(this)};export default SceneModePickerViewModel;