<<<<<<< HEAD

"use strict";

function SpinnyLifterMenuScene() {
  
  /////////////////////////////////BASIC SETUP/////////////////////////////////
  
  Scene.call(this);
  
  attrs = {size:50, leading:25};

 //Setting maximum variables
 
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Spinny Lifter Menu", {size:70, leading:45});
  this.addActor(this.title);
  
 /////////////////////////////// BUTTONS /////////////////////////////////
  
 //demo lifter 1 button// 
  
 this.demo1 = new TextButton(
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.4 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Demo 1", // text on button
									         attrs, // text attributes
									         this.demo1Action.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo1); // Adds button "actor" to the scene
  
  //demo lifter 2 button//
  
  this.demo2 = new TextButton(
                           windowWidth*0.6 - 100, // x position
									         windowHeight*0.4 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Demo 2", // text on button
									         attrs, // text attributes
									         this.demo2Action.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo2); // Adds button "actor" to the scene
  
  //manally play game button//
  
  this.manual = new TextButton(
                           windowWidth*0.395 - 100, // x position
									         windowHeight*0.63 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Play Game", // text on button
									         attrs, // text attributes
									         this.manualAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.manual); // Adds button "actor" to the scene
  
}

_inherits(SpinnyLifterMenuScene, Scene);

//change state to SPINNYLIFTER//

SpinnyLifterMenuScene.prototype.setup = function(){
  console.log("Changed state to SPINNYLIFTER");
  manager.changeState(STATE_SPINNYLIFTER);
}

//run lifter 1's demo function//

SpinnyLifterMenuScene.prototype.demo1Action = function() {
  console.log ("Demo  1 button");
  //SPINNYLIFTER.master.events.cycleBall();
}

//run lifter 2's demo function//

SpinnyLifterMenuScene.prototype.demo2Action = function() {
  console.log ("Demo 2 button");
  //SPINNYLIFTER.master.events.cycleBall();
}

//transition to manual game control scene//

SpinnyLifterMenuScene.prototype.manualAction = function() {
  console.log("manual transition");
  stage.transitionTo('SpinnyLifterCombo');
}
=======

"use strict";

function SpinnyLifterMenuScene() {
  
  /////////////////////////////////BASIC SETUP/////////////////////////////////
  
  Scene.call(this);
  
  attrs = {size:50, leading:25};

 //Setting maximum variables
 
  this.maxDistance = 200;
  
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Spinny Lifter Menu", {size:70, leading:45});
  this.addActor(this.title);
  
 /////////////////////////////// BUTTONS /////////////////////////////////
  
 //demo lifter 1 button// 
  
 this.demo1 = new TextButton(
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.4 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Demo 1", // text on button
									         attrs, // text attributes
									         this.demo1Action.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo1); // Adds button "actor" to the scene
  
  //demo lifter 2 button//
  
  this.demo2 = new TextButton(
                           windowWidth*0.6 - 100, // x position
									         windowHeight*0.4 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Demo 2", // text on button
									         attrs, // text attributes
									         this.demo2Action.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.demo2); // Adds button "actor" to the scene
  
  //manally play game button//
  
  this.manual = new TextButton(
                           windowWidth*0.395 - 100, // x position
									         windowHeight*0.63 - 50, // y position
									         500, // width of button
									         150, // height of button
									         BLUE, // color of button
									         " Play Game", // text on button
									         attrs, // text attributes
									         this.manualAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.manual); // Adds button "actor" to the scene
  
}

_inherits(SpinnyLifterMenuScene, Scene);

//change state to SPINNYLIFTER//

SpinnyLifterMenuScene.prototype.setup = function(){
  console.log("Changed state to SPINNYLIFTER");
  manager.changeState(STATE_SPINNYLIFTER);
}

//run lifter 1's demo function//

SpinnyLifterMenuScene.prototype.demo1Action = function() {
  console.log ("Demo  1 button");
  //SPINNYLIFTER.master.events.cycleBall();
}

//run lifter 2's demo function//

SpinnyLifterMenuScene.prototype.demo2Action = function() {
  console.log ("Demo 2 button");
  //SPINNYLIFTER.master.events.cycleBall();
}

//transition to manual game control scene//

SpinnyLifterMenuScene.prototype.manualAction = function() {
  console.log("manual transition");
  stage.transitionTo('SpinnyLifterCombo');
}
>>>>>>> ef02057bacb477f488cedbfd385f84cca62489e7
