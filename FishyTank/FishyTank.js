"use strict";

function FishyTank(){

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
  
  this.BackButton = new BackButton(backAction);
  this.addActor(this.BackButton);
  
  //add title
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Centripetal Force", {size:70, leading:50});
  this.addActor(this.title);
  
  //set dimensions on the speedometer
  this.speedometerWidth = windowWidth/2.67;
  this.speedometerXPos = windowWidth/2 - (this.speedometerWidth / 2);
  this.speedometerYPos = windowHeight/2 - (this.speedometerWidth / 2);
  this.speedometerDeadZone = 25;
  this.speedometerScalar = 1;
  this.speedometerMinAngle = 135;
  this.speedometerMaxAngle = 45;
  
  this.speedometer = new Speedometer(this.speedometerXPos, this.speedometerYPos, this.speedometerWidth, this.speedometerWidth, this.speedometerFunction.bind(this), this.speedometerDeadZone, this.speedometerScalar, this.speedometerMinAngle, this.speedometerMaxAngle);
  this.speedometer.z = 10;
  this.addActor(this.speedometer);
}

_inherits(FishyTank, Scene);

//change state to FISHYTANK//
FishyTank.prototype.setup = function(){
manager.changeState(STATE_FISHYTANK);
}

//change speed to that set on the speedometer//

FishyTank.prototype.speedometerFunction = function(angle){
  var offOrOn = (angle - 135) / 270;
  var rescale = offOrOn * 40 + 20;
 
  console.log(angle);
  console.log(rescale);
  manager.change(FISHYTANK.master.values.fishyMotorSpeed, rescale);
}

FishyTank.prototype.runCommand = function(){
  this.speedometer.displayAngle = this.speedometerMinAngle;
  console.log("next button clicked on speedometer page");
}

function backAction(){
  manager.changeState(STATE_IDLE);
  console.log("back button pressed");
  stage.transitionTo('FishyTankMenuScene');
}