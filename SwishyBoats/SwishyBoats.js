<<<<<<< HEAD:SwishyBoats/SwishyBoats.js
//Scene: SwishyBoats created by Anna, Edited by Sophia and Allyse` 
//NEED: split into different scenes: demo versus manual, then one with manual sliders and one with the demos here


"use strict";

function SwishyBoats(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:35, leading:25};
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Swishy Boats", {size:70, leading:50});
  this.addActor(this.title);

   leftBoat = loadImage("/libs/images/leftBoat.png");

    /////////////////////////////// BUTTONS /////////////////////////////////

  
  this.demo = new ImageButton( //I dont know what I did here lol
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         350, // width of button
									         100, // height of button
									         rightBoat,
									         this.demoAction.bind(this), // action to call
									         null); // shape
  this.addActor(this.demo); // Adds button "actor" to the scene
  
  //function (x, y, w, h, img, action, imgShadow){}
  
  this.firstBoat = new TextButton(
                           windowWidth*0.675 - 100, // x position
									         windowHeight*0.3 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Boat One", // text on button
									         attrs, // text attributes
									         this.firstBoatAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.firstBoat); // Adds button "actor" to the scene
  
  this.secondBoat = new TextButton(
                           windowWidth*0.475 - 100, // x position
									         windowHeight*0.45 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Boat Two", // text on button
									         attrs, // text attributes
									         this.secondBoatAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.secondBoat); // Adds button "actor" to the scene
  
  this.thirdBoat = new TextButton(
                           windowWidth*0.675 - 100, // x position
									         windowHeight*0.6 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Boat Three", // text on button
									         attrs, // text attributes
									         this.thirdBoatAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.thirdBoat); // Adds button "actor" to the scene

  this.fourthBoat = new TextButton(
                           windowWidth*0.475 - 100, // x position
									         windowHeight*0.75 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Boat Four", // text on button
									         attrs, // text attributes
									         this.fourthBoatAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.fourthBoat); // Adds button "actor" to the scene
  
}

_inherits(SwishyBoats, Scene);

  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

SwishyBoats.prototype.setup = function(){
  console.log("Changed state to SWISHYBOATS");
  manager.changeState(STATE_SWISHYBOATS);
}

SwishyBoats.prototype.demoAction = function() {
  console.log ("run boats");
  SWISHYBOATS.master.events.cycleBall();
}

SwishyBoats.prototype.firstBoatAction = function() {
  console.log ("first boat");
  //SWISHYBOATS.master.values.boat1Pos();
  //SWISHYBOATS.master.events.firstBoat();
  //DO NOT IMPLEMENT THIS EVENT IS NOT WORKING
}

SwishyBoats.prototype.secondBoatAction = function() {
  console.log ("second boat");
  //WE NEED TO IMPLEMENT ALLYSE'S VALUES
}

SwishyBoats.prototype.thirdBoatAction = function() {
  console.log ("third boat");
  //WE NEED TO IMPLEMENT ALLYSE'S VALUES
}

SwishyBoats.prototype.fourthBoatAction = function() {
  console.log ("fourth boat");
  //WE NEED TO IMPLEMENT ALLYSE'S VALUES
}

//update slider position
/* SwishyBoats.prototype.fixedChangePosition = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  manager.change(SWISHYBOATS.master.values.boat1Pos, slidePosition);*/
=======
//Scene: SwishyBoats created by Anna, Edited by Sophia and Allyse` 
//NEED: split into different scenes: demo versus manual, then one with manual sliders and one with the demos here


"use strict";

function SwishyBoats(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:35, leading:25};
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Swishy Boats", {size:70, leading:50});
  this.addActor(this.title);

   leftBoat = loadImage("/libs/images/leftBoat.png");

    /////////////////////////////// BUTTONS /////////////////////////////////

  
  this.demo = new ImageButton( //I dont know what I did here lol
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         350, // width of button
									         100, // height of button
									         rightBoat,
									         this.demoAction.bind(this), // action to call
									         null); // shape
  this.addActor(this.demo); // Adds button "actor" to the scene
  
  //function (x, y, w, h, img, action, imgShadow){}
  
  this.firstBoat = new TextButton(
                           windowWidth*0.675 - 100, // x position
									         windowHeight*0.3 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Boat One", // text on button
									         attrs, // text attributes
									         this.firstBoatAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.firstBoat); // Adds button "actor" to the scene
  
  this.secondBoat = new TextButton(
                           windowWidth*0.475 - 100, // x position
									         windowHeight*0.45 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Boat Two", // text on button
									         attrs, // text attributes
									         this.secondBoatAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.secondBoat); // Adds button "actor" to the scene
  
  this.thirdBoat = new TextButton(
                           windowWidth*0.675 - 100, // x position
									         windowHeight*0.6 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Boat Three", // text on button
									         attrs, // text attributes
									         this.thirdBoatAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.thirdBoat); // Adds button "actor" to the scene

  this.fourthBoat = new TextButton(
                           windowWidth*0.475 - 100, // x position
									         windowHeight*0.75 - 50, // y position
									         300, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Boat Four", // text on button
									         attrs, // text attributes
									         this.fourthBoatAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.fourthBoat); // Adds button "actor" to the scene
  
 /*  //slide to control speed
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
                       "Boat 1 Position\n\n\nleft                                           right", // text
                       {size: windowWidth*0.045, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene*/
}

_inherits(SwishyBoats, Scene);

  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

SwishyBoats.prototype.setup = function(){
  console.log("Changed state to SWISHYBOATS");
  manager.changeState(STATE_SWISHYBOATS);
}

SwishyBoats.prototype.demoAction = function() {
  console.log ("run boats");
  SWISHYBOATS.master.events.cycleBall();
}

SwishyBoats.prototype.firstBoatAction = function() {
  console.log ("first boat");
  //SWISHYBOATS.master.values.boat1Pos();
  //SWISHYBOATS.master.events.firstBoat();
  //DO NOT IMPLEMENT THIS EVENT IS NOT WORKING
}

SwishyBoats.prototype.secondBoatAction = function() {
  console.log ("second boat");
  //WE NEED TO IMPLEMENT ALLYSE'S VALUES
}

SwishyBoats.prototype.thirdBoatAction = function() {
  console.log ("third boat");
  //WE NEED TO IMPLEMENT ALLYSE'S VALUES
}

SwishyBoats.prototype.fourthBoatAction = function() {
  console.log ("fourth boat");
  //WE NEED TO IMPLEMENT ALLYSE'S VALUES
}

//update slider position
/* SwishyBoats.prototype.fixedChangePosition = function(slidePosition) {
  console.log("Current value of slider is " + slidePosition);
  manager.change(SWISHYBOATS.master.values.boat1Pos, slidePosition);*/
>>>>>>> 5042d87fd6f8f69a82a781a5f690bcc33d7ff0a2:SwishyBoats.js
