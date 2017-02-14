//scene that allows the magnetic vortex be controlled by a wheel for position rather than speed

"use strict"

function VortexWheel(){

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
  
  //title the scene
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Magnetic Vortex", {size:70, leading:50});
  this.addActor(this.title);
  
  //create wheel
  //function Wheel(x, y, width, height, onChange, deadZoneSize, scaler, minAngle, maxAngle)
  var wheelSize = 350;
  this.wheel = new ImageWheel(windowWidth*0.5 - wheelSize/2, windowHeight*0.5 - wheelSize/2, wheelSize, wheelSize, this.MoveToAngleAction.bind(this), 0,2,0,10000000000000000000000000000000); //max angle is so large so as to allow the dial to spin all the way around many times
  this.addActor(this.wheel);
  
}

_inherits(VortexWheel, Scene);

 ///////////////////////////////MAGNETIC VORTEX FUNCTIONS///////////////////////////////

VortexWheel.prototype.setup = function(){
  console.log("Changed state to MAGNETICVORTEX");
  manager.changeState(STATE_MAGNETICVORTEX);
}

//move the vortex to the value of the dial in UI
VortexWheel.prototype.MoveToAngleAction = function(dialValue){
  console.log(dialValue);
 // manager.change(MAGNETICVORTEX.master.values.dialPosition,dialValue);
  console.log("After: " + MAGNETICVORTEX.master.values.dialPosition)
}

VortexWheel.prototype.finishedAction = function() {
  stage.resume();
}
