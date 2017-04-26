'use strict';

var FishyTitleScene, FishyTank;


function FishySketch() {
  Scene.call(this);

  attrs = {size:50, leading:50};

  var startSceneButtons = ["Play Game", "Demo", "Instructions"];
  var startSceneActions = [this.startScenePlayAction.bind(this), this.startSceneDemoAction.bind(this), this.startSceneInstructionAction.bind(this)];

  FishyTitleScene = new ButtonsScene("FISHY TANK", loadImage("PathToImageYouWant.png"), startSceneButtons, startSceneActions, null, null);
  stage.addScene('FishyTitleScene', FishyTitleScene);

  FishyTank = new FishyTank();
  stage.addScene('FishyTank', FishyTank);
}

_inherits(FishySketch, Scene);

FishySketch.prototype.startScenePlayAction = function() {
  stage.transitionTo('FishyTank');
}

FishySketch.prototype.startSceneDemoAction = function() {
   FISHYTANK.master.events.spinTank();
}

FishySketch.prototype.startSceneInstructionAction = function() {
  //instructions button action
}
