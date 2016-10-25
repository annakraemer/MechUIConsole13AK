//Scene: Vortex - edited by Chloe
//FINISHED - NEEDS HW TESTING

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

    /////////////////////////////// BUTTON AND SLIDER /////////////////////////////////
  
  this.demo = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									BLUE, // color of button
									"demo", // text on button
									attrs, // text attributes
									this.demoAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.demo); // Adds button "actor" to the scene
}
  
  //slide to control speed
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.26, // x position
                           windowHeight*0.5, // y position
                           windowWidth*0.5, // size of slider
                           0, // min value of slider
                           200, // max value of slider
                           0, // default value of slider
                            this.fixedChangePosition.bind(this)); // action to call on slider change
  this.fixedPositionSlider.sliderImage(logo); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider); // adds slider to scene
  
  //slide label
  this.fixedSlideLabel = new Label(
                       windowWidth*0.5, // x position
                       windowHeight*0.42, // y position
                       "Speed\n\n\n0                                           100", // text
                       {size: windowWidth*0.045, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene

}

_inherits(Vortex, Scene);

  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

Vortex.prototype.setup = function(){
  console.log("Changed state to MAGNETICVORTEX");
  manager.changeState(STATE_MAGNETICVORTEX);
}

Vortex.prototype.demoAction = function() {
  console.log ("Demo button");
  MAGNETICVORTEX.master.events.demo;
}

Vortex.prototype.fixedChangePosition = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  manager.change(MAGNETICVORTEX.master.values.DCMotorSpeed, slidePosition);
  //console.log("Curret value of the variable is " + PERPETUALBALLEVENT.master.values.railPosition);
}

Vortex.prototype.finishedAction = function() {
  stage.resume();
}