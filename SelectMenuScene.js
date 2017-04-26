"use strict";

function SelectMenuScene() {
  
  /////////////////////////////////BASIC SETUP/////////////////////////////////
  
  Scene.call(this);
  
  attrs = {size:50, leading:25};
  
  vortexAttr = {size:46.5, leading:25};// set text size for Magnetic Vortex Button because type was too big
  

 //Setting maximum variables
 
  this.maxDistance = 200;
    
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  //create home button
  
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  //create title
  
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Choose Game ", {size:70, leading:45});
  this.addActor(this.title);

  //create admin button
  
  this.AdminButton = new AdminButton(adminAction);
  this.addActor(this.AdminButton);
  
  ////////////////////////////// BUTTONS /////////////////////////////////
  
  //Fishy Tank button
 
 this.FishyButton = new TextButton(
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.35 - 50, // y position
									         400, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Fishy Tank", // text on button
									         attrs, // text attributes
									         this.FishyButtonAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.FishyButton); // Adds button "actor" to the scene
  
  //Spinny Lifter button
  
  this.SpinnyButton = new TextButton(
                           windowWidth*0.63 - 100, // x position
									         windowHeight*0.58 - 50, // y position
									         400, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Spinny Lifter", // text on button
									         attrs, // text attributes
									         this.SpinnyButtonAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.SpinnyButton); // Adds button "actor" to the scene
  
  //Magnetic Vortex button
  
  this.VortexButton = new TextButton(
                           windowWidth*0.63 - 100, // x position
									         windowHeight*0.35 - 50, // y position
									         400, // width of button
									         100, // height of button
									         BLUE, // color of button
									         " Magnetic Vortex", // text on button
									         vortexAttr, // text attributes
									         this.VortexButtonAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.VortexButton); // Adds button "actor" to the scene
  
  //Swishy Boats button
  
  this.SwishyButton = new TextButton(
                           windowWidth*0.2 - 100, // x position
									         windowHeight*0.58 - 50, // y position
									         400, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Swishy Boats", // text on button
									         attrs, // text attributes
									         this.SwishyButtonAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.SwishyButton); // Adds button "actor" to the scene
  
  //Bernoulli Fan button
  
  this.FanButton = new TextButton(
                           windowWidth*0.425 - 100, // x position
									         windowHeight*0.8 - 50, // y position
									         400, // width of button
									         100, // height of button
									         BLUE, // color of button
									         "Bernoulli Fan", // text on button
									         attrs, // text attributes
									         this.FanButtonAction.bind(this), // action to call
									         'rect'); // shape
  this.addActor(this.FanButton); // Adds button "actor" to the scene
 
  
  }

_inherits(SelectMenuScene, Scene);



  ////////////////////////////// BUTTON FUNCTIONS /////////////////////////////////


SelectMenuScene.prototype.FishyButtonAction = function(){
  console.log("Fishy Tank Action");
  stage.transitionTo('FishyTitleScene');
}

SelectMenuScene.prototype.SpinnyButtonAction = function(){
  console.log("Spinny Lifter Action");
  stage.transitionTo('SpinnyLifterMenuScene');
}

SelectMenuScene. prototype.SwishyButtonAction = function(){
  console.log("Swishy Boats Action");
  stage.transitionTo('SwishyBoatsMenuScene');
}
  
SelectMenuScene.prototype.VortexButtonAction = function(){
  console.log("Vortex Action")
  stage.transitionTo('MagneticVortexMenuScene');
  //manager.changeState(STATE_MAGNETICVORTEX);
}

SelectMenuScene.prototype.FanButtonAction = function(){
  console.log("Fan Action")
  stage.transitionTo('BernoulliMenuScene')
}

function adminAction() {
  manager.changeState(STATE_IDLE);
  stage.transitionTo('AdminKeyPadScene');
  console.log("admin button");
}