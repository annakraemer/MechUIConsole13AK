function SpeedometerPage1()
{
  this.speedometerWidth = windowWidth/2.25;
  this.speedometerXPos = windowWidth/2 - (this.speedometerWidth / 2);
  this.speedometerYPos = windowHeight/2 - (this.speedometerWidth / 2);
  this.speedometerDeadZone = 25;
  this.speedometerScalar = 1;
  this.speedometerMinAngle = 135;
  this.speedometerMaxAngle = 45;
  
  this.titleLabelXPos = windowWidth/2;
  this.titleLabelYPos = windowHeight/10;
  
  Scene.call(this);
  
  this.background = new BackgroundBorder();
  
  this.speedometer = new Speedometer(this.speedometerXPos, this.speedometerYPos, this.speedometerWidth, this.speedometerWidth, this.speedometerFunction.bind(this), this.speedometerDeadZone, this.speedometerScalar, this.speedometerMinAngle, this.speedometerMaxAngle);
  this.speedometer.z = 10;
  
  this.homeButton = new HomeButton(homeAction);
  
  
  this.title = new Label(this.titleLabelXPos, this.titleLabelYPos, "Centripital Force", attrs);
  
   this.nextButton = new NextButton(this.runCommand.bind(this));
  
  this.addActor(this.speedometer);
  this.addActor(this.nextButton);
  this.addActor(this.title);
  this.addActor(this.background);
  this.addActor(this.homeButton);
}

_inherits(SpeedometerPage1, Scene);

SpeedometerPage1.prototype.setup = function()
{
  manager.changeState(STATE_FISHYTANK);
}


SpeedometerPage1.prototype.speedometerFunction = function(angle)
{
  console.log("posVal " + angle);
  
  console.log("speed value" + (angle - 135)*(10000/270));
  var speedValue = (angle - 135)*(10000/270);
  
   manager.change(FISHYTANK.master.values.fishyStepperSpeed, speedValue);
  
  //this should send a speed to the motor to tell it how fast to go
  //no value needs to be retuned
};

SpeedometerPage1.prototype.runCommand = function()
{
  this.speedometer.displayAngle = this.speedometerMinAngle;
  console.log("next button clicked on speedometer page");
  manager.changeState(STATE_SWISHYBOATS);
  stage.transitionTo('magneticVortexStart');
};