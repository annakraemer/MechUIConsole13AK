//Scene: SwishyBoats created by Anna
//PROBLEMS: the demo event just keeps on repeating, no clue why. It's not hardware
//the first boat is on an event that doesn't work, so don't click it
//NEED: an event to stop the boats, I don't think that's a thing right now


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

    /////////////////////////////// BUTTONS /////////////////////////////////

  
  this.demo = new ImageButton(
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
  SWISHYBOATS.master.events.demo();
}

SwishyBoats.prototype.firstBoatAction = function() {
  console.log ("first boat");
  SWISHYBOATS.master.events.firstBoat();
  //DO NOT IMPLEMENT THIS EVENT IS NOT WORKING
}

SwishyBoats.prototype.secondBoatAction = function() {
  console.log ("second boat");
  //WE DON'T HAVE AN EVENT FOR THIS WE SHOULD DO THAT
}

SwishyBoats.prototype.thirdBoatAction = function() {
  console.log ("third boat");
  //WE DON'T HAVE AN EVENT FOR THIS WE SHOULD DO THAT
}

SwishyBoats.prototype.fourthBoatAction = function() {
  console.log ("fourth boat");
  //WE DON'T HAVE AN EVENT FOR THIS WE SHOULD DO THAT
}
