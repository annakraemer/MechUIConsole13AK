//Scene: SwishyBoats created by Anna

"use strict";

function SwishyBoats(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:25, leading:25};
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "SwishyBoats", {size:70, leading:50});
  this.addActor(this.title);

    /////////////////////////////// BUTTONS /////////////////////////////////
  
  //This button runs the boats
  this.runBoats = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									BLUE, // color of button
									"Speed Up!", // text on button
									attrs, // text attributes
									this.runBoatsAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.runBoats); // Adds button "actor" to the scene
  
  //This button stops the boats
  this.stopBoats = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									RED, // color of button
									"Speed Up!", // text on button
									attrs, // text attributes
									this.stopBoatsAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.stopBoats); // Adds button "actor" to the scene


}

_inherits(SwishyBoats, scene);

  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

SwishyBoats.prototype.setup = function(){
  console.log("Changed state to SWISHYBOATS");
  manager.changeState(STATE_SWISHYBOATS);
}

SwishyBoats.prototype.runBoatsAction = function() {
  console.log ("run boats");
  //IDK what the difference between demo and cycleBall is
  SWISHYBOATS.master.events.cycleBall();
}

SwishyBoats.prototype.stopBoatsAction = function() {
  console.log ("stop boats");
  //IDK what cycleEntranceStop or cycleExitStop does
  //SWISHYBOATS.master.events.cycleExitStop();
}
