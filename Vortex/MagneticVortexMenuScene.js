

"use strict";

function MagneticVortexMenuScene() {
  
  Scene.call(this);
  
  attrs = {size:50, leading:25};

 //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Magnetic Vortex Menu", {size:70, leading:45});
  this.addActor(this.title);
    
  // demo button
    
  this.demo = new TextButton(
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Demo ", // text on button
									         attrs, // text attributes
									         this.demoAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo); // Adds button "actor" to the scene
  
  //choose game button
  
  this.manual = new TextButton(
                           windowWidth*0.6 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Play Game", // text on button
									         attrs, // text attributes
									         this.manualAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.manual); // Adds button "actor" to the scene
  
}

_inherits(MagneticVortexMenuScene, Scene);

//button functions

//change state action

MagneticVortexMenuScene.prototype.setup = function(){
  console.log("Changed state to MAGNETICVORTEX");
  manager.changeState(STATE_MAGNETICVORTEX);
}

//demo action

MagneticVortexMenuScene.prototype.demoAction = function() {
  console.log ("Demo button");
  MAGNETICVORTEX.master.events.demo();
}

//game play action

MagneticVortexMenuScene.prototype.manualAction = function() {
  console.log("manual transition");
  stage.transitionTo('VortexWheel');
}
  