//Scene: CycleBallMenuScene created by Anna
//

"use strict";

function CycleBallMenuScene() {

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:50, leading:25};
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Cycle Ball", {size:70, leading:50});
  this.addActor(this.title);

    /////////////////////////////// BUTTONS /////////////////////////////////

  
  this.cycleAll = new TextButton(
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE,
                           "Cycle All",
                           attrs,
									         this.cycleAllAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.cycleAll); // Adds button "actor" to the scene
  
  
  this.playGame = new TextButton(
                           windowWidth*0.6 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         "Play a Game", // text on button
									         attrs, // text attributes
									         this.playGameAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.playGame); // Adds button "actor" to the scene
  

  
}

_inherits(CycleBallMenuScene, Scene);

  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

CycleBallMenuScene.prototype.setup = function(){
  console.log("Transitioned to CycleBallMenuScene");
}

CycleBallMenuScene.prototype.cycleAllAction = function() {
  console.log ("cycling all");
  
  //stage.pause();
}

CycleBallMenuScene.prototype.playGameAction = function() {
  console.log("play game transition");
  stage.transitionTo('menuScene');
}

