//sketch.js - ACTUAL, created by Anna K.

var homeButtonImage;
var buttonSize;

var sliderImage;

function preload()
{
  sliderImage = loadImage("/libs/images/redcircle.png");
}

var stage = new Stage();
var manager;
var STATE_IDLE = 0;

var openingScene,
AdminSketch,
BCSketch,
SpeedometerPage1,
SpeedometerPage2;

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
  
  var pickGameButtonNames = ["Blue Spinny Lifter", "Swishy Boats", "Magnetic Vortex", "Red Spinny Lifter"];
  //fix images here
  var pickGameButtonImages = [loadImage("CUPPic.png"), loadImage("gyroPic.png"), loadImage("wheelPic.png"), loadImage("COAMPic.png")];
  var pickGameButtonActions = [SpinnyLifter1Action, SwishyBoatsAction, VortexAction, SpinnyLifter2Action];
  
   menuScene = new ImageButtonsScene("Pick A Game", 
                                  null,
                                  pickGameButtonNames,
                                  pickGameButtonImages,
                                  pickGameButtonActions,
                                  'rectOutline',
                                  function() {stage.transitionTo('ConsoleOpeningScene');},
                                  null,
                                  null,
                                  null,
                                  {size:50, leading:50});
  menuScene.addActor(new AdminButton(adminAction));
  stage.addScene("menuScene", menuScene);
  
  BCSketch = new BCSketch(manager, stage);
  stage.addScene('BCSketch', BCSketch);
  
  AdminSketch = new AdminSketch(manager, stage, BCSketch, gameButtonNames, gameButtonActions);
  stage.addScene('AdminSketch', AdminSketch)
  
  stage.transitionTo('ConsoleOpeningScene');

}

function draw() {
  stage.draw();
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


function SpinnyLifter1Action(){
  console.log("Spinny Lifter Action");
  stage.tranisitonTo('SpeedometerPage1');
  //SpinnyLifter1Action
}


function SpinnyLifter2Action (){
  console.log("Spinny Lifter 2 Action");
  //SpinnyLifter2Action
}

function SwishyBoatsAction(){
  console.log("Swishy Boats Action")
  //SwishyBoatsAction
}

function VortexAction(){
  console.log("Vortex Action")
  //VortexAction
}


window.touchStarted = stage.touchStarted.bind(stage);
window.touchMoved = stage.touchMoved.bind(stage);
window.touchEnded = stage.touchEnded.bind(stage);
window.mousePressed = stage.mousePressed.bind(stage);
window.mouseDragged = stage.mouseDragged.bind(stage);
window.mouseReleased = stage.mouseReleased.bind(stage);
