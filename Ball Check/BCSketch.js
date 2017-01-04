//BCSketch, UI

"use strict";
var BCScene, errorScene;
var ballSensorArr, noBallChecked1, noBallChecked2, noBallChecked3, noBallChecked4;
var nextScene, nextState, previousTimeout;
var desiredLoc, lastLoc;
var checkingEnabled, checkBallCalled;
var displayMessage;
var amibReadyCount;
var amibs, amibReadyArr;
var managerStates;
var managerName, stageName;

var timeoutValue = 10000;

//CONSIDER REWRITING THIS TO SPLIT IT INTO TWO FILES: THE CUSTOMIZED CODE AND THE LIBRARY CODE
function BCSketch(managerName, stageName)
{
  console.log("created BCSketch");
  
  this.managerName = managerName;
  this.stageName = stageName;
  
  this.managerStates = [true, true, true, true, true, true, true, true];
  
  ballSensorArr = [0,0,0,0];
  desiredLoc = 0;
  this.lastLoc = 0;
    
  this.amibs = ['AMIB1', 'AMIB2', 'AMIB3']
  this.amibReadyArr = [false, false, false];
  
  //call 'this.checkingEnabled = false' to disable checking
  this.checkingEnabled = true;
  
  this.noBallChecked1 = false;
  this.noBallChecked2 = false;
  this.noBallChecked3 = false;
  this.noBallChecked4 = false; // added new noBallChecked variable for every location
  
  //makes sure checkBall was called and not just change state
  this.checkBallCalled = false;
  
  attrs = {fill:0, size:50, align:CENTER, style:NORMAL, leading:50};
  
  this.errorScene = new ErrorScene('ErrorScene', "Error!", null);
  stage.addScene('ErrorScene', this.errorScene);

  this.managerName.setEventHandler(BALLCHECK.tablet.events.resume, this.resumeAction.bind(this));
  this.managerName.setEventHandler(BALLCHECK.tablet.events.checkBallDone, this.moveBall.bind(this)); 
  this.managerName.setEventHandler(BALLCHECK.tablet.events.amib1Ready, this.amib1ReadyState.bind(this));
  this.managerName.setEventHandler(BALLCHECK.tablet.events.amib2Ready, this.amib2ReadyState.bind(this));
  this.managerName.setEventHandler(BALLCHECK.tablet.events.amib3Ready, this.amib3ReadyState.bind(this));
  this.managerName.setEventHandler(BALLCHECK.tablet.events.amib1NotReady, this.amib1NotReadyState.bind(this));
  this.managerName.setEventHandler(BALLCHECK.tablet.events.amib2NotReady, this.amib2NotReadyState.bind(this));
  this.managerName.setEventHandler(BALLCHECK.tablet.events.amib3NotReady, this.amib3NotReadyState.bind(this));
  
}
_inherits(BCSketch, Scene);

/*
* This will change the state into STATE_BALLCHECK
* which will wait until all AMIBs are ready
*/
BCSketch.prototype.checkBall = function() {
  desiredLoc = arguments[0];
  nextScene = arguments[1];
  nextState = arguments[2];
  displayMessage = arguments[3]; 

  previousTimeout = stage.activeScene.timeoutTime;
  stage.activeScene.timeoutTime = timeoutValue;
  stage.activeScene.resetTimeout();    
    
  if(!this.checkingEnabled) {
    BCSketch.finished();
    return;
  }
    
  //Enable all states
  for(var i = 0; i < this.managerStates.length; i++) {
    this.managerStates[i] = this.managerName.statesEnabled[i];
    this.managerName.statesEnabled[i] = true;
  }
  
  console.log("check ball");
  this.checkBallCalled = true;
  
  this.managerName.forceChangeState(STATE_BALLCHECK);

  previousTimeout = this.stageName.activeScene.timeoutTime;
  this.stageName.activeScene.timeoutTime = timeoutValue;
  this.stageName.activeScene.resetTimeout();
  console.log("leaving checkBall");
}

/*
* This will get the sensors status
*/

//this isn't working
BCSketch.prototype.checkSensors = function() {
  if(this.checkBallCalled) {
    if(this.checkingEnabled) {
      console.log("called checkBall Action");
      this.checkBallCalled = false;

      if(!(typeof displayMessage === "undefined")) this.stageName.pause(displayMessage);
      else this.stageName.pause("Checking for Ball");
    
      BALLCHECK.master.events.checkSensors();
      console.log("checked sensors");
    }
    else {
      BCSketch.finished();
    } 
  }
}

/*
* This will actually move the ball depending
* on the sensor values when the AMIBs are ready
*/
BCSketch.prototype.moveBall = function() {
  //load ball sensor values
  console.log("Loading values");
  for(var i = 0; i < ballSensorArr.length; i++) {
    ballSensorArr[i] = BALLCHECK.tablet.values['ballSense' + (i+1)].value;
    console.log("Ball Sensor " + (i+1) + ": " + ballSensorArr[i] + " : " + BALLCHECK.tablet.values['ballSense' + (i+1)].value);
    if(ballSensorArr[i] && (typeof displayMessage === "undefined")) {
      this.stageName.pause("Cycling Ball Location " + (i+1));
      this.lastLoc = (i+1);
    }
  }
  
  //check for multiple balls
  console.log("checking for multiple balls");
  var multiBall = false;
  var numBalls = 0;
  for(var i = 0; i < ballSensorArr.length; i++) {
    if(ballSensorArr[i])
      numBalls++;
  }
  if(numBalls > 1) {
    BCSketch.multiBall();
    return;
  }
  
  //check for no ball
  console.log("checking for no ball");
  var noBall = true;
  for(var i = 0; i < ballSensorArr.length; i++) {
    if(ballSensorArr[i])
      noBall = false;
  }
  if(noBall) {
    if(this.lastLoc == 1)
      BCSketch.noBall();
    else if(this.lastLoc == 2)
      BCSketch.noBall2();
    else if(this.lastLoc == 3)
      BCSketch.noBall3();
    else if(this.lastLoc == 4)
      BCSketch.noBall4();
    else
      BCSketch.noBall();
    return;
  }
  
  this.noBallChecked1 = false;
  this.noBallChecked2 = false;
  this.noBallChecked3 = false;
  this.noBallChecked4 = false;
  
  //check for ball at desiredLoc
  console.log("checking desired location: " + desiredLoc);
  if(ballSensorArr[(desiredLoc-1)]) {
    console.log("ball in desired loc");
    BCSketch.finished();
    return;
  }
     
  //check ball locations and move ball
  console.log("checking all locations");
  if(ballSensorArr[0])
    BCSketch.ballLoc1Cycle();
  else if(ballSensorArr[1])
    BCSketch.ballLoc2Cycle();  
  else if(ballSensorArr[2])
    BCSketch.ballLoc3Cycle();  
  else if(ballSensorArr[3])
    BCSketch.ballLoc4Cycle();

  setTimeout(function() {
    BCSketch.waitForBall(desiredLoc, nextScene, nextState, displayMessage);
  }, 2000);
}

//This will wait for the ball to move locations before taking action
BCSketch.prototype.waitForBall = function() {
  console.log("called check sensors");
  this.managerName.forceChangeState(STATE_BALLCHECK);
  
  previousTimeout = this.stageName.activeScene.timeoutTime;
  this.stageName.activeScene.timeoutTime = timeoutValue;
  this.stageName.activeScene.resetTimeout();
  
  desiredLoc = arguments[0];
  nextScene = arguments[1];
  nextState = arguments[2];
  displayMessage = arguments[3];
  
  BALLCHECK.master.events.waitForBall();
}

BCSketch.prototype.ballLoc1Cycle = function() {
  console.log("cycling ballLoc1");
  this.managerName.forceChangeState(STATE_SPINNYLIFTER);
  SPINNYLIFTER.master.events.cycleBall();
}

BCSketch.prototype.ballLoc2Cycle = function() {
  console.log("cycling ballLoc2");
  this.managerName.forceChangeState(STATE_SWISHYBOATS);
  SWISHYBOATS.master.events.cycleBall();
}

BCSketch.prototype.ballLoc3Cycle = function() {
  console.log("cycling ballLoc3");
  this.managerName.forceChangeState(STATE_SPINNYLIFTER2);
  SPINNYLIFTER2.master.events.cycleBall();
}

BCSketch.prototype.ballLoc4Cycle = function() {
  console.log("cycling ballLoc4");
  this.managerName.forceChangeState(STATE_MAGNETICVORTEX);
  MAGNETICVORTEX.master.events.startSensor();
}

BCSketch.prototype.resumeAction = function() {
  console.log("resumed");
  
  this.stageName.activeScene.timeoutTime = previousTimeout;
  this.stageName.activeScene.resetTimeout();
  
  if(!(typeof arguments[0] === "undefined")) desiredLoc = arguments[0];
  if(!(typeof arguments[1] === "undefined")) nextScene = arguments[1];
  if(!(typeof arguments[2] === "undefined")) nextState = arguments[2];
  if(!(typeof arguments[3] === "undefined")) displayMessage = arguments[3];
  
  this.checkBallCalled = true;
  BCSketch.checkBall(desiredLoc, nextScene, nextState, displayMessage);
}

/*
* Needs to be customized by choosing what
* events are called in the case that no ball
* is sensed. (This doesnt necessarily mean there
* isnt a ball on the tracks, it may be stuck)
* There are two methods because there are two
* places that need to be cycled, and we want to check
* if the ball has been found in between them
*/

BCSketch.prototype.noBall = function() {
  if(!this.noBallChecked1) {
    this.noBallChecked1 = true;
    this.stageName.pause("No Ball: Cycling First Location");
    
    //could be stuck in spinnylifter 1
    BCSketch.ballLoc1Cycle();

    BCSketch.resumeAction();
  }
  else {
    BCSketch.noBall2();
  }
}

BCSketch.prototype.noBall2 = function() {
  if(!this.noBallChecked2) {
    this.noBallChecked2 = true;
    this.stageName.pause("No Ball: Cycling Second Location");
    
    //could be stuck in swishy boats
    BCSketch.ballLoc2Cycle();

    BCSketch.resumeAction();
  }
  else {
    BCSketch.noBall3();
  }
}

BCSketch.prototype.noBall3 = function() {
  if(!this.noBallChecked3) {
    this.noBallChecked3 = true;
    this.stageName.pause("No Ball: Cycling Third Location");
    
    //could be stuck in spinnylifter 2
    BCSketch.ballLoc3Cycle();

    BCSketch.resumeAction();
  }
  
  else {
    BCSketch.noBall4();
  }
}
BCSketch.prototype.noBall4 = function() {
  if(!this.noBallChecked4) {
    this.noBallChecked4 = true;
    this.stageName.pause("No Ball: Cycling Fourth Location");
    
    BCSketch.ballLoc4Cycle();

    BCSketch.resumeAction();
  }
  else{
    this.stageName.resume();
    this.errorScene.addErrorMessage("Ball off Track");
    this.stageName.transitionTo('ErrorScene');
    //number of these booleans
    this.noBallChecked1 = false;
    this.noBallChecked2 = false;
    this.noBallChecked3 = false;
    this.noBallChecked4 = false;
  }
}

BCSketch.prototype.multiBall = function() {
  this.stageName.resume();
  this.errorScene.addErrorMessage("Too many balls");
  //this.errorScene.clearErrors();
  this.stageName.transitionTo('ErrorScene');
}

BCSketch.prototype.finished = function() {
  console.log("Transition to " + nextScene);
  this.stageName.resume();
   
  for(var i = 0; i < this.managerStates.length; i++) {
    this.managerName.statesEnabled[i] = this.managerStates[i];
  }
  
  try {this.stageName.activeScene.resetScene(); } //Requires your scene to have a function named resetScene
  catch(error) {console.log("No reset scene function");}
  this.stageName.activeScene.timeoutTime = previousTimeout;
  this.stageName.activeScene.resetTimeout();
  if(!(typeof nextScene === "undefined")) this.managerName.forceChangeState(nextState);
  if(!(typeof nextState === "undefined")) this.stageName.transitionTo(nextScene);
}

//These are to make sure all amibs are in STATE_BALLCHECK
//Add or remove functions depening on number of AMIBS
BCSketch.prototype.amib1ReadyState = function() {
  this.updateReadiness(1, true);
}

BCSketch.prototype.amib2ReadyState = function() {
  this.updateReadiness(2, true);
}

BCSketch.prototype.amib3ReadyState = function() {
  this.updateReadiness(3, true);
}

BCSketch.prototype.amib1NotReadyState = function() {
  this.updateReadiness(1, false);
}

BCSketch.prototype.amib2NotReadyState = function() {
  this.updateReadiness(2, false);
}

BCSketch.prototype.amib3NotReadyState = function() {
  this.updateReadiness(3, false);
}

BCSketch.prototype.updateReadiness = function(amibNumber, readiness)
{
  var amibIndex = amibNumber - 1;
  this.amibReadyArr[amibIndex] = readiness;
  
  var readyText = "";
  if(readiness) readyText = " ready to check ball";
  else readyText = " not ready to check ball";
  
  console.log(this.amibs[amibIndex] + readyText);
  
  var readyToCheckSensors = true;
  for(var i = 0; i < this.amibReadyArr.length; i++) readyToCheckSensors = readyToCheckSensors & this.amibReadyArr[i];
  
  if(readyToCheckSensors)
    BCSketch.checkSensors();
}

BCSketch.prototype.getSensorAmount = function() {
  return ballSensorArr.length;
}