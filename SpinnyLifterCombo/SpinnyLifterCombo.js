
"use strict";

function SpinnyLifterCombo(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:25, leading:25};
  
  //Setting maximum variables
  
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  //create home button
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  //create back button
  
  this.BackButton = new BackButton(backAction);
  this.addActor(this.BackButton);
  
  //add title
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Spinny Lifters", {size:70, leading:50});
  this.addActor(this.title);
   
  //slide to control speed for lifter 1//
  
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.1, // x position
                           windowHeight*0.5, // y position
                           windowWidth*0.37, // size of slider
                           0, // min value of slider
                           100, // max value of slider
                           0, // default value of slider
                            this.fixedChangePosition.bind(this)); // action to call on slider change
  this.fixedPositionSlider.sliderImage(logo); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider); // adds slider to scene
  
  //slide label for lifter 1//
  
  this.fixedSlideLabel = new Label(
                       windowWidth*0.28, // x position
                       windowHeight*0.42, // y position
                       " Lifter 1 Speed\n\n\n0                                           100", // text
                       {size: windowWidth*0.03, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene
  
  //slide to control speed for lifter 2// 
  
  this.fixedPositionSlider2 =  new Slider(
                           windowWidth*0.54, // x position
                           windowHeight*0.5, // y position
                           windowWidth*0.37, // size of slider
                           0, // min value of slider
                           100, // max value of slider
                           0, // default value of slider
                            this.fixedChangePosition2.bind(this)); // action to call on slider change
  this.fixedPositionSlider2.sliderImage(logo); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider2); // adds slider to scene
  
  //slide label for lifter 2//
  
  this.fixedSlideLabel = new Label(
                       windowWidth*0.725, // x position
                       windowHeight*0.42, // y position
                       "Lifter 2 Speed\n\n\n0                                           100", // text
                       {size: windowWidth*0.03, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene
  
}

_inherits(SpinnyLifterCombo, Scene);

 ///////////////////////////////SPINNY LIFTER FUNCTIONS///////////////////////////////
 
//change state into SPINNYLIFTER//

SpinnyLifterCombo.prototype.setup = function(){
  console.log("Changed state to SPINNYLIFTER");
  manager.changeState(STATE_SPINNYLIFTER);
}

//update slider 1 position

SpinnyLifterCombo.prototype.fixedChangePosition = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  //manager.change(SPINNYLIFTER.master.values.DCMotorSpeed, slidePosition);
}

//update slider 2 position

SpinnyLifterCombo.prototype.fixedChangePosition2 = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  //manager.change(SPINNYLIFTER2.master.values.DCMotorSpeed, slidePosition);
}

SpinnyLifterCombo.prototype.finishedAction = function() {
  stage.resume();
}

function backAction(){
  manager.changeState(STATE_IDLE);
  console.log("back button pressed");
  stage.transitionTo('SpinnyLifterMenuScene');
}
