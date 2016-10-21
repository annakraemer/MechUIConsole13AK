"use strict"; //This causes it to be executed in "strict" mode which prevents some unsafe syntax

function ControlPanel() {
	
  /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this); //Necessary for all custom scenes calls the default Scene constructor
  
  attrs = {size:25, leading:25}; //Redefining the size of text for smaller text fields
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  //Creating the colorful "Mondrian" border and adding it to the scene
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  //Creating and adding the HomeButton and giving it the homeAction defined in sketch.js
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  //Creating and adding the title text
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Control Panel", {size:70, leading:50});
  this.addActor(this.title);
  
  /////////////////////////////// BUTTONS /////////////////////////////////
  
  // Create custom buttons to add to scene using "Textbutton" constructor
  // function TextButton(x pos, y pos, width, height, bgColor, text, textattrs, action, shape, nudge) {
  
  this.stairsOn = new TextButton(
                  windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									BLUE, // color of button
									"Stairs On", // text on button
									attrs, // text attributes
									this.stairsOnAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.stairsOn); // Adds button "actor" to the scene
  
  this.gateUp = new TextButton(
                  windowWidth*0.5 - 100,
									windowHeight*0.3 - 50,
									200,
									100,
									BLUE,
									"Gate Up",
									attrs,
									this.gateUpAction.bind(this),
									'rect'); 
  this.addActor(this.gateUp);
  
  this.pusherUp = new TextButton(
                  windowWidth*0.8 - 100,
									windowHeight*0.3 - 50,
									200,
									100,
									BLUE,
									"Pusher Up",
									attrs,
									this.pusherUpAction.bind(this),
									'rect'); 
  this.addActor(this.pusherUp);
  
  this.stairsOff = new TextButton(
                  windowWidth*0.2 - 100,
									windowHeight*0.5 - 50,
									200,
									100,
									BLUE,
									"Stairs Off",
									attrs,
									this.stairsOffAction.bind(this),
									'rect'); 
  this.addActor(this.stairsOff);
  
  this.gateDown = new TextButton(
                  windowWidth*0.5 - 100,
									windowHeight*0.5 - 50,
									200,
									100,
									BLUE,
									"Gate Down",
									attrs,
									this.gateDownAction.bind(this),
									'rect');
  this.addActor(this.gateDown);

  
  this.pusherDown = new TextButton(
                  windowWidth*0.8 - 100,
									windowHeight*0.5 - 50,
									200,
									100,
									BLUE,
									"Pusher Down",
									attrs,
									this.pusherDownAction.bind(this),
									'rect'); 
  this.addActor(this.pusherDown);
  
  this.pusherMove = new TextButton(
                  windowWidth*0.8 - 100,
									windowHeight*0.8 - 50,
									200,
									100,
									BLUE,
									"MOVE",
									attrs,
									this.pusherMoveAction.bind(this),
									'rect'); 
  this.addActor(this.pusherMove);
	

 ///////////////////////// LOADING SCENE IMPLEMENTATION ///////////////////////////////
 
  //Setting the event handler in manager for the finishedAction event on the tablet
  //All tablet events must be set up like this to link the Arduino call to the actual function
  //manager.setEventHandler(PERPETUALBALLEVENTTT.tablet.events.finishedAction, this.finishedAction.bind(this));
  
  ////////////////////////////////// TIMEOUT SCENE /////////////////////////////////////
  
  // Time out scene for when no actions are done on a scene for a period of time
  this.timeoutScene = "MenuScene"; // Transistions back to home scene if times out
  this.timeoutObject = function() { return RESET(); }; // Resets positions of actuators before moving to home scene
  // this.timeoutTime = defaultTimeoutTime; change time in miliseconds
  // this.timeoutObject = null; function to call (reset function) when transistioning
  // this.timeoutObject = function() { return stairsOnAction(); }; b/c you dont want to call function - use anon funct
  console.log("Created ControlPanel");
	
}

_inherits(ControlPanel, Scene); // NECESSARY, DO NOT FORGET - PUT AT END OF CONSTRUCTOR

///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////


// Turns on stairs
ControlPanel.prototype.stairsOnAction = function() {
  //PERPETUALBALLEVENTTT.master.events.turnOnStairs();
}

// Raises gate
ControlPanel.prototype.gateUpAction = function() {
  //PERPETUALBALLEVENTTT.master.events.raiseGate();
}

// Moves Pusher all the way up
ControlPanel.prototype.pusherUpAction = function() {
  //stage.pause("Performing Move");
  //PERPETUALBALLEVENTTT.master.events.upRail();
}

// Turns off stairs
ControlPanel.prototype.stairsOffAction = function() {
  //PERPETUALBALLEVENTTT.master.events.turnOffStairs();
}

// Lowers gate
ControlPanel.prototype.gateDownAction = function() {
  //PERPETUALBALLEVENTTT.master.events.lowerGate(); 
}

// Homes pusher / Moves pusher all the way down
ControlPanel.prototype.pusherDownAction = function() {
  //stage.pause("Performing Move");
  //PERPETUALBALLEVENTTT.master.events.downRail();
}

// Moves Pusher to Fixed Slider Position
ControlPanel.prototype.pusherMoveAction = function() {
  //stage.pause("Performing Move");
  //console.log("Curret value of slider is " + this.fixedPositionSlider.posVal); // console.log prints things out to console for trouble shooting / verification
  //manager.change(PERPETUALBALLEVENTTT.master.values.railPosition, this.fixedPositionSlider.posVal);
  // Set timeout basically a delay (funciton to call, amount to delay by)
  //setTimeout(function(){
    //PERPETUALBALLEVENTTT.master.events.moveRail();
 // }, 100); // delay by 100mS
  
}

// Changes the value "railPosition" on the arduino side in reaction to the slider changing
ControlPanel.prototype.fixedChangePosition = function(slidePosition) {
  //console.log("Curret value of Fslider is " + slidePosition);
  //manager.change(PERPETUALBALLEVENTTT.master.values.railPosition, slidePosition);
  //console.log("Curret value of the variable is " + PERPETUALBALLEVENTTT.master.values.railPosition);
  
}

// Changes the value "dynamicPosition" on the arduino side in reaction to the slider changing
ControlPanel.prototype.dynamicChangePosition = function(dynamicSlidePosition) {
  //console.log("Curret value of Dslider is " + dynamicSlidePosition);
  //manager.change(PERPETUALBALLEVENTTT.master.values.dynamicPosition, dynamicSlidePosition);
  //console.log("Curret value of the variable is " + PERPETUALBALLEVENTTT.master.values.dynamicPosition);
  
}

// Resets the machine back to default state: Everything off, pusher at home, etc
ControlPanel.prototype.RESET = function() {
  //PERPETUALBALLEVENTTT.master.events.downRail();
  //PERPETUALBALLEVENTTT.master.events.lowerGate();
  //PERPETUALBALLEVENTTT.master.events.turnOffStairs();
}

//This happens when the tablet event finishedAction() is called by the Arduino
//It simply resumes the scene
ControlPanel.prototype.finishedAction = function() {
  stage.resume();
}