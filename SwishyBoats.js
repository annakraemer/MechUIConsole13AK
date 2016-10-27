//Scene: SwishyBoats created by Anna
//what can we do with the boats??
//need an event to stop the boats, I don't think that's a thing right now

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
  
  //This button runs the boats
  /*this.runBoats = new TextButton(
                                    windowWidth*0.3 - 100, // x position
									windowHeight*0.5 - 50, // y position
									400, // width of button
									120, // height of button
									YELLOW, // color of button
									"Run Boats", // text on button
									attrs, // text attributes
									this.runBoatsAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.runBoats); // Adds button "actor" to the scene
  
  //This button stops the boats
  this.stopBoats = new TextButton(
                                    windowWidth*0.6 - 100, // x position
									windowHeight*0.5 - 50, // y position
									400, // width of button
									120, // height of button
									RED, // color of button
									"Stop Boats", // text on button
									attrs, // text attributes
									this.stopBoatsAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.stopBoats); // Adds button "actor" to the scene*/

  //PUT IN PICTURE FOR BUTTON
  this.demo = new TextButton(
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         350, // width of button
									         100, // height of button
									         RED, // color of button
									         "Demo", // text on button
									         attrs, // text attributes
									         this.demoAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo); // Adds button "actor" to the scene
  
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
  //DO NOT IMPLEMENT THE EVENT IS NOT WORKING
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
