'use strict';

var VortexTitleScene, VortexWheel;


function VortexSketch() {
  Scene.call(this);

  attrs = {size:50, leading:50};

  var startSceneButtons = ["Play Game", "Demo", "Instructions"];
  var startSceneActions = [this.startScenePlayAction.bind(this), this.startSceneDemoAction.bind(this), this.startSceneInstructionAction.bind(this)];

  VortexTitleScene = new ButtonsScene("MAGNETIC VORTEX", loadImage("PathToImageYouWant.png"), startSceneButtons, startSceneActions, null, null);
  stage.addScene('VortexTitleScene', VortexTitleScene);

  VortexWheel = new VortexWheel();
  stage.addScene('VortexWheel', VortexWheel);
}

_inherits(VortexSketch, Scene);

VortexSketch.prototype.startScenePlayAction = function() {
  stage.transitionTo('VortexWheel');
}

VortexSketch.prototype.startSceneDemoAction = function() {
  MAGNETICVORTEX.master.events.demo();
}

VortexSketch.prototype.startSceneInstructionAction = function() {
  //instructions button action
}
