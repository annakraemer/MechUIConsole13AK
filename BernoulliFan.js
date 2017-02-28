
//Bernoulli fan 

"use strict"

function BernoulliFan(){

 /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this);
  
  attrs = {size:25, leading:25};
  
  //Setting maximum variables
 
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  //create home button
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  //create back button  

  this.BackButton = new BackButton(backAction);
  this.addActor(this.BackButton);
  
  //title the scene
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Bernoulli Fan", {size:70, leading:50});
  this.addActor(this.title);
  
    
  this.noButton = new TextButton(
                           windowWidth*0.435 - 100, // x position
									         windowHeight*0.55 - 50, // y position
									         400, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "No Button", // text on button
									         attrs, // text attributes
									         this.noButtonAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.noButton); // Adds button "actor" to the scene
  
}
_inherits(BernoulliFan, Scene);


BernoulliFan.prototype.setup = function(){
  console.log("Changed state to BERNOULLIFAN");
 // manager.changeState(STATE_MAGNETICVORTEX);
}

BernoulliFan.prototype.noButtonAction = function(){
  console.log("Changed state to BERNOULLIFAN");
 stage.transitionTo('SelectMenuScene');
}

function backAction(){
  manager.changeState(STATE_IDLE);
  console.log("back button pressed");
  stage.transitionTo('SelectMenuScene');
}

