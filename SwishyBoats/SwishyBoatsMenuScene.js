
//Scene: SwishyBoatsMenuScene created by Anna and Sophia 
//demo versus manual

"use strict";

function SwishyBoatsMenuScene() {

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:50, leading:25};
  
  //Setting maximum variables
  
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Swishy Boats Menu", {size:70, leading:50});
  this.addActor(this.title);
  
 /////////////////////////////// BUTTONS /////////////////////////////////

 // creating new buttons for demo and manual scene for user to choose between which scene to go to
  
  this.demo = new TextButton( 
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE,
                           "Demo Play",
                           attrs,
									         this.demoAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo); // Adds button "actor" to the scene
  
  this.manual = new TextButton(
                           windowWidth*0.6 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         "Play Game", // text on button
									         attrs, // text attributes
									         this.manualAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.manual); // Adds button "actor" to the scene
  
}

_inherits(SwishyBoatsMenuScene, Scene);

 ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

 //change state into SWISHYBOATS//
 
SwishyBoatsMenuScene.prototype.setup = function(){ 
  console.log("Changed state to SWISHYBOATS");
  manager.changeState(STATE_SWISHYBOATS);
}

//transition to demo scene//

SwishyBoatsMenuScene.prototype.demoAction = function() {
  console.log ("demoing cycleBall");
  SWISHYBOATS.master.events.cycleBall();
}

//transition to the manual play scene//

SwishyBoatsMenuScene.prototype.manualAction = function() {
  console.log("manual transition");
  stage.transitionTo('SwishyBoats2');
}

