//Scene: Vortex - created by Anna
//NOT READY - 6th period

"use strict";

function Vortex(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:25, leading:25};
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Magnetic Vortex", {size:70, leading:50});
  this.addActor(this.title);

    /////////////////////////////// BUTTONS /////////////////////////////////
  
  //This button speeds up the vortex
  var fastSpeedValue;
  this.speedUp = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									BLUE, // color of button
									"Speed Up!", // text on button
									attrs, // text attributes
									this.speedUpAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.speedUp); // Adds button "actor" to the scene
  
  //This button slows down the vortex
  var slowSpeedValue;
  this.slowDown = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									BLUE, // color of button
									"Speed Up!", // text on button
									attrs, // text attributes
									this.slowDownAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.slowDown); // Adds button "actor" to the scene

  
  //This button restarts the vortex
  var restartValue
  this.restart = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									BLUE, // color of button
									"Speed Up!", // text on button
									attrs, // text attributes
									this.restartAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.restart); // Adds button "actor" to the scene


}

_inherits(Vortex, Scene);

  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

Vortex.prototype.setup = function(){
  console.log("Changed state to MAGNETICVORTEX");
  manager.changeState(STATE_MAGNETICVORTEX);
}

Vortex.prototype.speedUpAction = function() {
  console.log ("Speed Up Action");
  //No clue if this works
  MAGNETICVORTEX.master.values(DCMotorSpeed = fastSpeedValue);
}

Vortex.prototype.slowDownAction = function() {
  console.log ("Slow Down Action");
  //No clue if this works
  MAGNETICVORTEX.master.values(DCMotorSpeed = slowSpeedValue);
}

Vortex.prototype.restartAction = function() {
  console.log ("restart Action");
  //No clue if this works
  MAGNETICVORTEX.master.values(DCMotorSpeed = restartValue);
}