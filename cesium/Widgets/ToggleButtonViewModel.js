import{defaultValue,defined,DeveloperError}from"@cesium/engine";import knockout from"./ThirdParty/knockout.js";function ToggleButtonViewModel(e,o){if(!defined(e))throw new DeveloperError("command is required.");this._command=e,o=defaultValue(o,defaultValue.EMPTY_OBJECT),this.toggled=defaultValue(o.toggled,!1),this.tooltip=defaultValue(o.tooltip,""),knockout.track(this,["toggled","tooltip"])}Object.defineProperties(ToggleButtonViewModel.prototype,{command:{get:function(){return this._command}}});export default ToggleButtonViewModel;