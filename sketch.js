<<<<<<< HEAD
//sketch.js - ACTUAL, created by Anna K.
//
var homeButtonImage;
var buttonSize;

var logo, rightBoat;

function preload()
{
  logo = loadImage("/libs/images/redcircle.png");
  rightBoat = loadImage("/MechUIConsole13AK/rightBoat.png");
  leftBoat = loadImage("/MechUIConsole13AK/leftBoat.png");
  useImage = loadImage("/libs/images/imagewheel.png"); 
}

MASTER = true;

var stage = new Stage();
var manager;
var STATE_IDLE = 0;

var openingScene,
AdminSketch,
BCSketch,
SpeedometerPage1,
SpeedometerPage2,
SwishyBoats,
SwishyBoats2,
SwishyBoatsMenuScene,
Vortex,
FishyTank,
VortexWheel,
SpinnyLifter,
MagneticVortexMenuScene,
BernoulliFan,
FishyTankMenuScene,
SelectMenuScene,
BernoulliMenuScene,
SpinnyLifterMenuScene;

function setup()
{
  resizeCanvas(windowWidth, windowHeight);
  initMenuVariables();
  
  //manager = new Manager();
  
  attrs = {fill:0, size:50, align:CENTER, style:NORMAL, leading:50};
  
  vortexAttr = {fill:0, size:50, align:CENTER, style:NORMAL, leading:50};
  
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
  /*
  SpeedometerPage1 = new SpeedometerPage1();
  stage.addScene('SpeedometerPage1', SpeedometerPage1);
  */
  SpeedometerPage2 = new SpeedometerPage2();
  stage.addScene('SpeedometerPage2', SpeedometerPage2);
  
  SelectMenuScene  = new SelectMenuScene();
  stage.addScene('SelectMenuScene', SelectMenuScene);
  
  SwishyBoats = new SwishyBoats();
  stage.addScene('SwishyBoats', SwishyBoats);
  
  SwishyBoats2 = new SwishyBoats2();
  stage.addScene('SwishyBoats2', SwishyBoats2);
  
  FishyTank = new FishyTank();
  stage.addScene('FishyTank', FishyTank);
  
  VortexWheel = new VortexWheel();
  stage.addScene('VortexWheel', VortexWheel);
  
  SpinnyLifter = new SpinnyLifter();
  stage.addScene('SpinnyLifter', SpinnyLifter);
  
  SpinnyLifterCombo = new SpinnyLifterCombo();
  stage.addScene('SpinnyLifterCombo', SpinnyLifterCombo);
  
  BernoulliFan = new BernoulliFan();
  stage.addScene('BernoulliFan', BernoulliFan);
  
  SpinnyLifterMenuScene = new SpinnyLifterMenuScene();
  stage.addScene('SpinnyLifterMenuScene', SpinnyLifterMenuScene);
  
  BernoulliMenuScene = new BernoulliMenuScene();
  stage.addScene('BernoulliMenuScene', BernoulliMenuScene);
  
  SwishyBoatsMenuScene = new SwishyBoatsMenuScene();
  stage.addScene('SwishyBoatsMenuScene', SwishyBoatsMenuScene);
  
  MagneticVortexMenuScene = new MagneticVortexMenuScene();
  stage.addScene('MagneticVortexMenuScene', MagneticVortexMenuScene);
  
  FishyTankMenuScene = new FishyTankMenuScene();
  stage.addScene('FishyTankMenuScene', FishyTankMenuScene);
  
  
  
  stage.transitionTo('ConsoleOpeningScene');

}

function draw() {
  stage.draw();
}

function startGame(){
  stage.transitionTo('SelectMenuScene');
}

function homeAction(){
  manager.changeState(STATE_IDLE);
  stage.transitionTo('SelectMenuScene');
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
  stage.transitionTo('FishyTankMenuScene');
}


function SpinnyLifterAction (){
  console.log("Spinny Lifter Action");
  stage.transitionTo('SpinnyLifterMenuScene');
}

function SwishyBoatsAction(){
  console.log("Swishy Boats Action");
  stage.transitionTo('SwishyBoatsMenuScene');
}
  
function VortexAction(){
  console.log("Vortex Action")
  stage.transitionTo('MagneticVortexMenuScene');
  //manager.changeState(STATE_MAGNETICVORTEX);
}
 
window.touchStarted = stage.touchStarted.bind(stage);
window.touchMoved = stage.touchMoved.bind(stage);
window.touchEnded = stage.touchEnded.bind(stage);
window.mousePressed = stage.mousePressed.bind(stage);
window.mouseDragged = stage.mouseDragged.bind(stage);
window.mouseReleased = stage.mouseReleased.bind(stage);
=======
//sketch.js - ACTUAL, created by Anna K.
//
var homeButtonImage;
var buttonSize;

var logo, rightBoat;

function preload()
{
  logo = loadImage("/libs/images/redcircle.png");
  rightBoat = loadImage("/MechUIConsole13AK/rightBoat.png");
  leftBoat = loadImage("/MechUIConsole13AK/leftBoat.png");
  useImage = loadImage("/libs/images/imagewheel.png"); 
}

MASTER = true;

var stage = new Stage();
var manager;
var STATE_IDLE = 0;

var openingScene,
AdminSketch,
BCSketch,
SpeedometerPage1,
SpeedometerPage2,
SwishyBoats,
SwishyBoats2,
SwishyBoatsMenuScene,
Vortex,
FishyTank,
VortexWheel,
SpinnyLifter,
MagneticVortexMenuScene,
BernoulliFan,
FishyTankMenuScene,
SelectMenuScene,
BernoulliMenuScene,
SpinnyLifterMenuScene;

function setup()
{
  resizeCanvas(windowWidth, windowHeight);
  initMenuVariables();
  
  //manager = new Manager();
  
  attrs = {fill:0, size:50, align:CENTER, style:NORMAL, leading:50};
  
  vortexAttr = {fill:0, size:50, align:CENTER, style:NORMAL, leading:50};
  
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
  /*
  SpeedometerPage1 = new SpeedometerPage1();
  stage.addScene('SpeedometerPage1', SpeedometerPage1);
  */
  SpeedometerPage2 = new SpeedometerPage2();
  stage.addScene('SpeedometerPage2', SpeedometerPage2);
  
  SelectMenuScene  = new SelectMenuScene();
  stage.addScene('SelectMenuScene', SelectMenuScene);
  
  SwishyBoats = new SwishyBoats();
  stage.addScene('SwishyBoats', SwishyBoats);
  
  SwishyBoats2 = new SwishyBoats2();
  stage.addScene('SwishyBoats2', SwishyBoats2);
  
  FishyTank = new FishyTank();
  stage.addScene('FishyTank', FishyTank);
  
  VortexWheel = new VortexWheel();
  stage.addScene('VortexWheel', VortexWheel);
  
  SpinnyLifter = new SpinnyLifter();
  stage.addScene('SpinnyLifter', SpinnyLifter);
  
  SpinnyLifterCombo = new SpinnyLifterCombo();
  stage.addScene('SpinnyLifterCombo', SpinnyLifterCombo);
  
  BernoulliFan = new BernoulliFan();
  stage.addScene('BernoulliFan', BernoulliFan);
  
  SpinnyLifterMenuScene = new SpinnyLifterMenuScene();
  stage.addScene('SpinnyLifterMenuScene', SpinnyLifterMenuScene);
  
  BernoulliMenuScene = new BernoulliMenuScene();
  stage.addScene('BernoulliMenuScene', BernoulliMenuScene);
  
  SwishyBoatsMenuScene = new SwishyBoatsMenuScene();
  stage.addScene('SwishyBoatsMenuScene', SwishyBoatsMenuScene);
  
  MagneticVortexMenuScene = new MagneticVortexMenuScene();
  stage.addScene('MagneticVortexMenuScene', MagneticVortexMenuScene);
  
  FishyTankMenuScene = new FishyTankMenuScene();
  stage.addScene('FishyTankMenuScene', FishyTankMenuScene);
  
  
  
  stage.transitionTo('ConsoleOpeningScene');

}

function draw() {
  stage.draw();
}

function startGame(){
  stage.transitionTo('SelectMenuScene');
}

function homeAction(){
  manager.changeState(STATE_IDLE);
  stage.transitionTo('SelectMenuScene');
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
  stage.transitionTo('FishyTankMenuScene');
}


function SpinnyLifterAction (){
  console.log("Spinny Lifter Action");
  stage.transitionTo('SpinnyLifterMenuScene');
}

function SwishyBoatsAction(){
  console.log("Swishy Boats Action");
  stage.transitionTo('SwishyBoatsMenuScene');
}
  
function VortexAction(){
  console.log("Vortex Action")
  stage.transitionTo('MagneticVortexMenuScene');
  //manager.changeState(STATE_MAGNETICVORTEX);
}
 
window.touchStarted = stage.touchStarted.bind(stage);
window.touchMoved = stage.touchMoved.bind(stage);
window.touchEnded = stage.touchEnded.bind(stage);
window.mousePressed = stage.mousePressed.bind(stage);
window.mouseDragged = stage.mouseDragged.bind(stage);
window.mouseReleased = stage.mouseReleased.bind(stage);
>>>>>>> ef02057bacb477f488cedbfd385f84cca62489e7
