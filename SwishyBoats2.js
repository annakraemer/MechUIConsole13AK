//SwishyBoats2: Created by Sophia
// Create generic menu button scene for SwishyBoats - manual and demo
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
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Swishy Boats Manual", {size:70, leading:50});
  this.addActor(this.title);
  
  leftBoat = loadImage("/libs/images/leftBoat.png");
  
  //////////////////////////// Slider Implementation ///////////////////////

  
 //slide to control speed - still am working on finding the correct dimensions for each of the sliders
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.675 - 100, // x position .18
                           windowHeight*0.3 - 45, // y position
                           windowWidth*0.35, // size of slider
                           0, // min value of slider
                           100, // max value of slider
                           100, // default value of slider
                           this.fixedChangePosition.bind(this)); // action to call on slider change
  this.fixedPositionSlider.sliderImage(rightBoat); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider); // adds slider to scene, need to figure out how to input the images of the boats into the scene 
  //this.fixedPositionSlider.loadImg(leftBoat);  
  //slider label for Boat 1 position
  this.fixedSlideLabel = new Label(
                       windowWidth*.675 - 100, // x position .25
                       windowHeight*0.3 - 60, // y position .42
                       "Boat 1 Position", // text
                       {size: windowWidth*0.035, leading: windowHeight*0.09}); // text attributes, windowWidth = 0.045, windowHeight = 0.09
  this.addActor(this.fixedSlideLabel); // adds text to scene
  
   //slide to control speed
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.475 - 100, // x position .26
                           windowHeight*0.45 - 52, // y position .5
                           windowWidth*0.35, // size of slider .5
                           0, // min value of slider
                           100, // max value of slider
                           100, // default value of slider
                           this.fixedChangePosition.bind(this)); // action to call on slider change
  this.fixedPositionSlider.sliderImage(leftBoat); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider); // adds slider to scene
  
  //slider label for Boat 2 position
  this.fixedSlideLabel = new Label(
                       windowWidth*0.475 - 100, // x position
                       windowHeight*0.45 - 70, // y position
                       "Boat 2 Position", // text
                       {size: windowWidth*0.035, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene
  
   //slide to control speed
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.675 - 100, // x position
                           windowHeight*0.6 - 2, // y position
                           windowWidth*0.35, // size of slider
                           0, // min value of slider
                           100, // max value of slider
                           0, // default value of slider
                           this.fixedChangePosition.bind(this)); // action to call on slider change
  this.fixedPositionSlider.sliderImage(rightBoat); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider); // adds slider to scene
  
  //slider label for Boat 3 position 
  this.fixedSlideLabel = new Label(
                       windowWidth*0.675 - 100, // x position
                       windowHeight*0.6 - 10, // y position
                       "Boat 3 Position", // text
                       {size: windowWidth*0.035, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene
  
   //slide to control speed
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.475 - 100, // x position
                           windowHeight*0.85 - 40, // y position
                           windowWidth*0.35, // size of slider
                           0, // min value of slider
                           100, // max value of slider
                           100, // default value of slider
                           this.fixedChangePosition.bind(this)); // action to call on slider change
  this.fixedPositionSlider.sliderImage(leftBoat); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider); // adds slide to scene
 
   this.fixedSlideLabel = new Label(
                       windowWidth*0.475 - 100, // x position
                       windowHeight*0.85 - 50, // y position
                       "Boat 4 Position", // text
                       {size: windowWidth*0.035, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene
}

_inherits(SwishyBoats2, Scene);


//update slider position
SwishyBoats2.prototype.fixedChangePosition = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  manager.change(SWISHYBOATS.master.values.boat1Pos, slidePosition);
}
  