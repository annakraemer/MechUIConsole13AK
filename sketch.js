//sketch.js - ACTUAL, created by Anna K.
//Included SpeedometerPage1 with the Fishy Tank, no clue if it works with the hardware - Anna 3rd period 

var homeButtonImage;
var buttonSize;

var sliderImage;

function preload()
{
  //sliderImage = loadImage("/libs/images/redcircle.png");
}

var stage = new Stage();
var manager;
var STATE_IDLE = 0;

var openingScene,
AdminSketch,
BCSketch,
SpeedometerPage1,
SpeedometerPage2,
SwishyBoats,
Vortex;

function setup()
{
  resizeCanvas(windowWidth, windowHeight);
  initMenuVariables();
  
  //manager = new Manager();
  
  attrs = {fill:0, size:50, align:CENTER, style:NORMAL, leading:50};
  
  resizeCanvas(windowWidth, windowHeight);
  
  buttonSize = windowWidth / 6.5;
  
  openingScene = new ConsoleOpeningScene(startGame);
  stage.addScene('ConsoleOpeningScene', openingScene);
  
  var pickGameButtonNames = ["Fishy Tank", "Swishy Boats", "Magnetic Vortex", "Spinny Lifter"];
  //fix images here
  //var pickGameButtonImages = [loadImage("CUPPic.png"), loadImage("gyroPic.png"), loadImage("wheelPic.png"), loadImage("COAMPic.png")];
  var pickGameButtonActions = [FishyTankAction, SwishyBoatsAction, VortexAction, SpinnyLifterAction];
  
   menuScene = new ButtonsScene("Pick A Game", 
                                  null,
                                  pickGameButtonNames,
                                  pickGameButtonActions,
                                  function() {stage.transitionTo('ConsoleOpeningScene');},
                                  null,
                                  {size:50, leading:50});
  menuScene.addActor(new AdminButton(adminAction));
  stage.addScene("menuScene", menuScene);
  
  BCSketch = new BCSketch(manager, stage);
  stage.addScene('BCSketch', BCSketch);
  
  AdminSketch = new AdminSketch(manager, stage, BCSketch, pickGameButtonNames, pickGameButtonActions);
  stage.addScene('AdminSketch', AdminSketch);
  
  SpeedometerPage1 = new SpeedometerPage1();
  stage.addScene('SpeedometerPage1', SpeedometerPage1);
  
  SwishyBoats = new SwishyBoats();
  stage.addScene('SwishyBoats', SwishyBoats);
  
  Vortex = new Vortex();
  stage.addScene("Vortex", Vortex);
  
  stage.transitionTo('ConsoleOpeningScene');

}

function draw() {
  stage.draw();
}

function startGame(){
  stage.transitionTo('menuScene');
}

function homeAction(){
  manager.changeState(STATE_IDLE);
  stage.transitionTo('menuScene');
  console.log("home button clicked");
}

function adminAction() {
  manager.changeState(STATE_IDLE);
  stage.transitionTo('AdminKeyPadScene');
  console.log("admin button");
}

function openingSceneAction() {
  console.log("Console Opening Scene");
  stage.transitionTo('ConsoleInstructionScene');
}


function FishyTankAction(){
  console.log("Fishy Tank Action");
  stage.transitionTo('SpeedometerPage1');
}


function SpinnyLifterAction (){
  console.log("Spinny Lifter Action");
  //SpinnyLifter2Action
}

function SwishyBoatsAction(){
  console.log("Swishy Boats Action");
  stage.transitionTo('SwishyBoats');
}
  
  function VortexAction(){
  console.log("Vortex Action")
  stage.transitionTo('Vortex');
  manager.changeState(STATE_MAGNETICVORTEX);
  }


window.touchStarted = stage.touchStarted.bind(stage);
window.touchMoved = stage.touchMoved.bind(stage);
window.touchEnded = stage.touchEnded.bind(stage);
window.mousePressed = stage.mousePressed.bind(stage);
window.mouseDragged = stage.mouseDragged.bind(stage);
window.mouseReleased = stage.mouseReleased.bind(stage);