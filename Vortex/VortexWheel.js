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
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Magnetic Vortex", {size:70, leading:50});
  this.addActor(this.title);
  
  /*
 
  var wheelSize = 350;
  this.location = new Speedometer(windowWidth*0.20 - wheelSize/2, windowHeight/2 - wheelSize/2,
     wheelSize, wheelSize, this.locationAction.bind(this), 0, 1, 135, 45);
  this.locationLabel = new Label(windowWidth*0.20, windowHeight/2 + 150, "Degrees: 0 ", attrs);
  this.addActor(this.location);
  this.addActor(this.locationLabel); //creates the speedometer object in this scene, as well as a label for the value of it

	this.location.displayAngle = 270;
  this.location.onChange(270);
  */
  
  
  //function Speedometer(x, y, width, height, onChange, deadZoneSize, scaler, minAngle, maxAngle) {-
  var wheelSize = 350;
  this.wheel = new Speedometer(windowWidth*0.5 - wheelSize/2, windowHeight*0.75 - wheelSize/2, wheelSize, wheelSize, this.MoveToAngleAction.bind(this), 0, 1, 135, 45);
  this.addActor(this.wheel);

}

_inherits(VortexWheel, Scene);


VortexWheel.prototype.setup = function(){
  console.log("Changed state to MAGNETICVORTEX");
  manager.changeState(STATE_MAGNETICVORTEX);
}


VortexWheel.prototype.MoveToAngleAction = function(dialValue){
  console.log(dialValue);
  manager.change(MAGNETICVORTEX.master.values.dialPosition,dialValue);
  console.log("After: " + MAGNETICVORTEX.master.values.dialPosition)
}

VortexWheel.prototype.finishedAction = function() {
  stage.resume();
}
