
"use strict";

function SpinnyLifterCombo(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:25, leading:25};
  
  //Setting maximum variables
  
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Spinny Lifters", {size:70, leading:50});
  this.addActor(this.title);
  
  //demo 1 button
  
  this.demo1 = new TextButton(
                           windowWidth*0.235 - 100, // x position
									         windowHeight*0.8 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Demo 1", // text on button
									         attrs, // text attributes
									         this.demo1Action.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo1); // Adds button "actor" to the scene
  
  //demo 2 button
  
  this.demo2 = new TextButton(
                           windowWidth*0.69 - 100, // x position
									         windowHeight*0.8 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Demo 2", // text on button
									         attrs, // text attributes
									         this.demo2Action.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo2); // Adds button "actor" to the scene
  
  //slide to control speed for lifter 1
  
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
  
  //slide label 1 
  
  this.fixedSlideLabel = new Label(
                       windowWidth*0.28, // x position
                       windowHeight*0.42, // y position
                       " Lifter 1 Speed\n\n\n0                                           100", // text
                       {size: windowWidth*0.03, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene
  
  //slide to control speed for lifter 2 
  
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
  
  //slide label 2 
  
  this.fixedSlideLabel = new Label(
                       windowWidth*0.725, // x position
                       windowHeight*0.42, // y position
                       "Lifter 2 Speed\n\n\n0                                           100", // text
                       {size: windowWidth*0.03, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene
  
}


_inherits(SpinnyLifterCombo, Scene);


SpinnyLifterCombo.prototype.setup = function(){
  console.log("Changed state to SPINNYLIFTER");
  manager.changeState(STATE_SPINNYLIFTER);
}

//demo 1 button action

SpinnyLifterCombo.prototype.demo1Action = function() {
  console.log ("Demo  1 button");
  SPINNYLIFTER.master.events.cycleBall();
}

//demo 2 button action

SpinnyLifterCombo.prototype.demo2Action = function() {
  console.log ("Demo 2 button");
  SPINNYLIFTER2.master.events.cycleBall();
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
