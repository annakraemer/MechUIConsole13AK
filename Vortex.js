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
  
  /*//This button speeds up the vortex
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
  this.addActor(this.restart); // Adds button "actor" to the scene*/

  //slide to control speed
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.26, // x position
                           windowHeight*0.73, // y position
                           windowWidth*0.5, // size of slider
                           0, // min value of slider
                           200, // max value of slider
                           0, // default value of slider
                            this.fixedChangePosition.bind(this)); // action to call on slider change
  this.fixedPositionSlider.sliderImage(logo); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider); // adds slider to scene
  
  this.fixedSlideLabel = new Label(
                       windowWidth*0.5, // x position
                       windowHeight*0.67, // y position
                       "Speed\n\n\n0                                           100", // text
                       {size: windowWidth*0.03, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene

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

Vortex.prototype.fixedChangePosition = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  //manager.change(MAGNETICVORTEX.master.values.distance, slidePosition);
  //console.log("Curret value of the variable is " + PERPETUALBALLEVENT.master.values.railPosition);
}

Vortex.prototype.finishedAction = function() {
  stage.resume();
}