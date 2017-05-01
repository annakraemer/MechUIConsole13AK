//SKETCH

var homeButtonImage;
var buttonSize;

var logo, rightBoat;

function preload()
{
  logo = loadImage("/libs/images/redcircle.png");
  rightBoat = loadImage("/MechUIConsole13/rightBoat.png");
  leftBoat = loadImage("/MechUIConsole13/leftBoat.png");
  useImage = loadImage("/libs/images/imagewheel.png");
}

MASTER = true;

var stage = new Stage();
var manager;
var STATE_IDLE = 0;

var openingScene,
AdminSketch,
BCSketch,
SwishyBoats,
SwishyBoats2,
SwishyBoatsMenuScene,
VortexSketch,
SpinnyLifter,
BernoulliFan,
SelectMenuScene,
BernoulliMenuScene,
SpinnyLifterMenuScene,
StartScene,
FishySketch;

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
  var pickGameButtonActions = [FishyTankAction, SwishyBoatsAction, VortexAction, SpinnyLifterAction];

  BCSketch = new BCSketch(manager, stage);
  stage.addScene('BCSketch', BCSketch);

  AdminSketch = new AdminSketch(manager, stage, BCSketch, pickGameButtonNames, pickGameButtonActions);
  stage.addScene('AdminSketch', AdminSketch);

  SelectMenuScene  = new SelectMenuScene();
  stage.addScene('SelectMenuScene', SelectMenuScene);

  SwishyBoats = new SwishyBoats();
  stage.addScene('SwishyBoats', SwishyBoats);

  SwishyBoats2 = new SwishyBoats2();
  stage.addScene('SwishyBoats2', SwishyBoats2);

  SpinnyLifterScene = new SpinnyLifterScene("TITLE!");
  stage.addScene('SpinnyLifterScene', SpinnyLifterScene);

  BernoulliFan = new BernoulliFan();
  stage.addScene('BernoulliFan', BernoulliFan);

  SpinnyLifterMenuScene = new SpinnyLifterMenuScene();
  stage.addScene('SpinnyLifterMenuScene', SpinnyLifterMenuScene);

  BernoulliMenuScene = new BernoulliMenuScene();
  stage.addScene('BernoulliMenuScene', BernoulliMenuScene);

  SwishyBoatsMenuScene = new SwishyBoatsMenuScene();
  stage.addScene('SwishyBoatsMenuScene', SwishyBoatsMenuScene);
  
  StartScene = new StartScene(startAction);
  stage.addScene("StartScene", StartScene);

  FishySketch = new FishySketch();
  stage.addScene('FishySketch', FishySketch);

  VortexSketch = new VortexSketch();
  stage.addScene('VortexSketch', VortexSketch);

  stage.transitionTo('StartScene');

}

function draw() {
  stage.draw();
}

function startAction(){
  //ball action starts
  //get status from ball stop sensor when ball action over to start new game
  stage.transitionTo('SelectMenuScene');
  console.log("Start button clicked");
}

//UNNEDED NOW
function startGame(){
  stage.transitionTo('SelectMenuScene');
}

function homeAction(){
  manager.changeState(STATE_IDLE);
  stage.transitionTo('StartScene');
  console.log("home button clicked");
}

function adminAction() {
  manager.changeState(STATE_IDLE);
  stage.transitionTo('AdminKeyPadScene');
  console.log("admin button");
}


function FishyTankAction(){
  console.log("Fishy Tank Action");
  stage.transitionTo('FishyTitleScene');
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
