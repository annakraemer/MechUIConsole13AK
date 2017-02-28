
"use strict";

function FishyTankMenuScene() {
  /////////////////////////////////BASIC SETUP/////////////////////////////////
  Scene.call(this);
  
  attrs = {size:50, leading:25};

 //Setting maximum variables
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, " Fishy Tank Menu", {size:70, leading:45});
  this.addActor(this.title);
  
  /////////////////////////////////BUTTONS/////////////////////////////////
  
  //demo button// 
    
  this.demo = new TextButton(
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Demo ", // text on button
									         attrs, // text attributes
									         this.demoAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo); // Adds button "actor" to the scene
  
  //choose game button//
  
  this.manual = new TextButton(
                           windowWidth*0.6 - 100, // x position
									         windowHeight*0.5 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Play Game", // text on button
									         attrs, // text attributes
									         this.manualAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.manual); // Adds button "actor" to the scene
  
}

_inherits(FishyTankMenuScene, Scene);

/////////////////////////////////BUTTON FUNCTIONS/////////////////////////////////

//change state to FISHYTANK//

FishyTankMenuScene.prototype.setup = function(){
  console.log("Changed state to FISHYTANK");
  manager.changeState(STATE_FISHYTANK);
}

//run demo function// 

FishyTankMenuScene.prototype.demoAction = function() {
  console.log ("Demo button");
  //FISHYTANK.master.events.cycleBall();
}

//transition to manual control scene// 

FishyTankMenuScene.prototype.manualAction = function() {
  console.log("manual transition");
  stage.transitionTo('FishyTank');
}
