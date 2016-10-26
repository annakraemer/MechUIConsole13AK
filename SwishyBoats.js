//Scene: SwishyBoats created by Anna
//what can we do with the boats?? - Right now it's just start and stop buttons
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
  this.runBoats = new TextButton(
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
  this.addActor(this.stopBoats); // Adds button "actor" to the scene


}

_inherits(SwishyBoats, Scene);

  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

SwishyBoats.prototype.setup = function(){
  console.log("Changed state to SWISHYBOATS");
  manager.changeState(STATE_SWISHYBOATS);
}

SwishyBoats.prototype.runBoatsAction = function() {
  console.log ("run boats");
  //IDK what the demo does for the boats
  SWISHYBOATS.master.events.cycleBall();
}

SwishyBoats.prototype.stopBoatsAction = function() {
  console.log ("stop boats");
  //WE DON'T HAVE AN EVENT FOR THIS WE SHOULD DO THAT
}
