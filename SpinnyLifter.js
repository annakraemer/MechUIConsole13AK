//Scene: SpinnyLifter - Anna
//This is for the first spinnylifter, I think for the next arrow button we should have it go to the 2nd spinny lifter

"use strict";

function SpinnyLifter(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:25, leading:25};
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Spinny Lifter", {size:70, leading:50});
  this.addActor(this.title);
  
  //this.nextButton = new NextButton(this.runCommand.bind(this));
  //this.addActor(this.nextButton);

    /////////////////////////////// BUTTON AND SLIDER /////////////////////////////////
  
  //demo button
  //PUT IN PICTURE FOR BUTTON
  this.demo1 = new TextButton(
                           windowWidth*0.475 - 100, // x position
									         windowHeight*0.8 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Demo 1", // text on button
									         attrs, // text attributes
									         this.demo1Action.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo1); // Adds button "actor" to the scene

  //slide to control speed
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.26, // x position
                           windowHeight*0.5, // y position
                           windowWidth*0.5, // size of slider
                           0, // min value of slider
                           100, // max value of slider
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

_inherits(SpinnyLifter, Scene);

  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

SpinnyLifter.prototype.setup = function(){
  console.log("Changed state to SPINNYLIFTER");
  manager.changeState(STATE_SPINNYLIFTER);
}

//demo button action
SpinnyLifter.prototype.demo1Action = function() {
  console.log ("Demo button");
  SPINNYLIFTER.master.events.cycleBall;
}

//update slider position
SpinnyLifter.prototype.fixedChangePosition = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  //manager.change(SPINNYLIFTER.master.values.DCMotorSpeed, slidePosition);
}

SpinnyLifter.prototype.finishedAction = function() {
  stage.resume();
}