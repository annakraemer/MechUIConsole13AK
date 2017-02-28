<<<<<<< HEAD:FishyTank/SpeedometerPage2.js
function SpeedometerPage2()
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
  this.title = new Label(this.titleLabelXPos, this.titleLabelYPos, "Create a Tornado", attrs);
  
  this.speedometer = new Speedometer(this.speedometerXPos, this.speedometerYPos, this.speedometerWidth, this.speedometerWidth, this.speedometerFunction.bind(this), this.speedometerDeadZone, this.speedometerScalar, this.speedometerMinAngle, this.speedometerMaxAngle);
  this.speedometer.z = 10;
  
  this.nextButton = new NextButton(this.runCommand.bind(this));
  this.homeButton = new HomeButton(homeAction);
  
  this.addActor(this.background);
  
  this.addActor(this.speedometer);
  this.addActor(this.nextButton);
  this.addActor(this.title);
  this.addActor(this.homeButton);
  
}

_inherits(SpeedometerPage2, Scene);

SpeedometerPage2.prototype.setup = function()
{
  manager.changeState(STATE_MAGNETICVORTEX);
}

SpeedometerPage2.prototype.speedometerFunction = function(angle)
{
  console.log("posVal " + angle);
  var speedValue = (angle - 135)*(10000/270);
  
  manager.change(MAGNETICVORTEX.master.values.DCMotorSpeed, speedValue);

  //this should send a speed to the motor to tell it how fast to go
  //no value needs to be returned
};

SpeedometerPage2.prototype.runCommand = function()
{
  this.speedometer.displayAngle = this.speedometerMinAngle;
  stage.transitionTo('ConsoleOpeningScene');
};

=======
function SpeedometerPage2()
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
  this.title = new Label(this.titleLabelXPos, this.titleLabelYPos, "Create a Tornado", attrs);
  
  this.speedometer = new Speedometer(this.speedometerXPos, this.speedometerYPos, this.speedometerWidth, this.speedometerWidth, this.speedometerFunction.bind(this), this.speedometerDeadZone, this.speedometerScalar, this.speedometerMinAngle, this.speedometerMaxAngle);
  this.speedometer.z = 10;
  
  this.nextButton = new NextButton(this.runCommand.bind(this));
  this.homeButton = new HomeButton(homeAction);
  
  this.addActor(this.background);
  
  this.addActor(this.speedometer);
  this.addActor(this.nextButton);
  this.addActor(this.title);
  this.addActor(this.homeButton);
  
}

_inherits(SpeedometerPage2, Scene);

SpeedometerPage2.prototype.setup = function()
{
  manager.changeState(STATE_MAGNETICVORTEX);
}

SpeedometerPage2.prototype.speedometerFunction = function(angle)
{
  console.log("posVal " + angle);
  var speedValue = (angle - 135)*(10000/270);
  
  manager.change(MAGNETICVORTEX.master.values.DCMotorSpeed, speedValue);

  //this should send a speed to the motor to tell it how fast to go
  //no value needs to be returned
};

SpeedometerPage2.prototype.runCommand = function()
{
  this.speedometer.displayAngle = this.speedometerMinAngle;
  stage.transitionTo('ConsoleOpeningScene');
};

>>>>>>> ef02057bacb477f488cedbfd385f84cca62489e7:Speedometer/SpeedometerPage2.js
