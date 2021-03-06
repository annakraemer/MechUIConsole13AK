//SwishyBoats2: sliders to manually move the swishyboats

"use strict";

function SwishyBoats2(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:35, leading:25};
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  //create back button
  
  this.BackButton = new BackButton(backAction);
  this.addActor(this.BackButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Swishy Boats Manual", {size:70, leading:50});
  this.addActor(this.title);
  
  
  ///////////////////////////////// SWISHY BOATS SLIDERS /////////////////////////////////

 //slide to control speed for Boat 1//                                    - still am working on finding the correct dimensions for each of the sliders
 
  this.slider1 =  new Slider(
                           windowWidth*0.555 - 100, // x position .18
                           windowHeight*0.3 - 45, // y position
                           windowWidth*0.35, // size of slider
                           0, // min value of slider
                           100, // max value of slider
                           100, // default value of slider
                           this.position1.bind(this)); // action to call on slider change
  this.slider1.sliderImage(rightBoat); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.slider1); // adds slider to scene, need to figure out how to input the images of the boats into the scene 
  
  //slider label for Boat 1 position//
  
  this.fixedSlideLabel = new Label(
                       windowWidth*.759 - 100, // x position .25
                       windowHeight*0.3 - 60, // y position .42
                       "Boat 1 Position", // text
                       {size: windowWidth*0.025, leading: windowHeight*0.09}); // text attributes, windowWidth = 0.045, windowHeight = 0.09
  this.addActor(this.fixedSlideLabel); // adds text to scene
  
  //slide to control speed for Boat 2//
   
  this.slider2 =  new Slider(
                           windowWidth*0.255 - 100, // x position .26
                           windowHeight*0.45 - 52, // y position .5
                           windowWidth*0.35, // size of slider .5
                           0, 
                           100, 
                           100, 
                           this.position2.bind(this)); 
  this.slider2.sliderImage(leftBoat);
  this.addActor(this.slider2); 
  
  //slider label for Boat 2 position//
  
  this.fixedSlideLabel = new Label(
                       windowWidth*0.457 - 100, 
                       windowHeight*0.45 - 70, 
                       "Boat 2 Position", 
                       {size: windowWidth*0.025, leading: windowHeight*0.09}); 
  this.addActor(this.fixedSlideLabel); 
  
  //slide to control speed for Boat 3//
   
  this.slider3 =  new Slider(
                           windowWidth*0.455 - 100, 
                           windowHeight*0.6 - 2, 
                           windowWidth*0.35, 
                           0, 
                           100, 
                           0, 
                           this.position3.bind(this)); 
  this.slider3.sliderImage(rightBoat); 
  this.addActor(this.slider3); 
  
  //slider label for Boat 3 position//
  
  this.fixedSlideLabel = new Label(
                       windowWidth*0.652 - 100, 
                       windowHeight*0.6 - 10, 
                       "Boat 3 Position", 
                       {size: windowWidth*0.025, leading: windowHeight*0.09}); 
  this.addActor(this.fixedSlideLabel); 
  
  //slide to control speed for Boat 4//
   
  this.slider4 =  new Slider(
                           windowWidth*0.255 - 100, 
                           windowHeight*0.85 - 40, 
                           windowWidth*0.35, 
                           0, 
                           100, 
                           100, 
                           this.position4.bind(this)); 
  this.slider4.sliderImage(leftBoat); 
  this.addActor(this.slider4); 
  
  //slider label for Boat 4 position//
  
   this.fixedSlideLabel = new Label(
                       windowWidth*0.457 - 100, 
                       windowHeight*0.85 - 50, 
                       "Boat 4 Position", 
                       {size: windowWidth*0.025, leading: windowHeight*0.09}); 
  this.addActor(this.fixedSlideLabel); 
}

_inherits(SwishyBoats2, Scene);

//update slider position on boat 1//

SwishyBoats2.prototype.position1 = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  manager.change(SWISHYBOATS.master.values.boat1Pos, slidePosition);
}

//update slider position on boat 2//

SwishyBoats2.prototype.position2 = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  manager.change(SWISHYBOATS.master.values.boat2Pos, slidePosition);
}

//update slider position on boat 3//

SwishyBoats2.prototype.position3 = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  manager.change(SWISHYBOATS.master.values.boat3Pos, slidePosition);
}

//update slider position on boat 4//

SwishyBoats2.prototype.position4 = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  manager.change(SWISHYBOATS.master.values.boat4Pos, slidePosition);
}

function backAction(){
  manager.changeState(STATE_IDLE);
  console.log("back button pressed");
  stage.transitionTo('SwishyBoatsMenuScene');
}