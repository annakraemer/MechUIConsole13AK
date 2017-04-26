'use strict';
var FishyTitleScene;

//replace GameX everywhere with the name of your game you are using this for

function FishyMenu() {
  Scene.call(this);

  attrs = {size:50, leading:50};

  var startSceneButtons = ["Play Game", "Demo", "Instructions"];
  var startSceneActions = [this.startScenePlayAction.bind(this), this.startSceneDemoAction.bind(this), this.startSceneInstructionAction.bind(this)];

  FishyTitleScene = new ButtonsScene("Fishy Tank", loadImage("PathToImageYouWant.png"), startSceneButtons, startSceneActions, null, null);

  stage.addScene('FishyTitleScene', FishyTitleScene)
  //IMPORTANT: to access and transition to this scene, you need to use stage.transitionTo('FishyTitleScene'), NOT the name of this file
}

_inherits(FishyMenu, Scene);

FishyMenu.prototype.startScenePlayAction = function() {
  //play button action
  stage.transitionTo('FishyTank');
}

FishyMenu.prototype.startSceneDemoAction = function() {
  //demo button action, should transition to control scene while paused
  FISHYTANK.master.events.spinTank();
}

FishyMenu.prototype.startSceneInstructionAction = function() {
  //instructions button action
}
