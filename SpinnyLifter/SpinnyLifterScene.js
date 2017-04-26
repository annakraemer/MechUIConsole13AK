"use strict";

function SpinnyLifterScene(title){
  Scene.call(this);

  attrs = {size:25, leading:25};
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);

  this.title = new Label(windowWidth/2, windowHeight*0.16, title, {size:70, leading:50});
  this.addActor(this.title);

  var spinnersize = Math.min(windowWidth,windowHeight)/2;
  this.spinner = new SpinnyLifterActor(windowWidth/2 - spinnersize/2, windowHeight/2 - spinnersize/2, spinnersize,spinnersize,this.updateHWLifter.bind(this), 0, 1, 360);
  this.addActor(this.spinner);

}

_inherits(SpinnyLifterScene, Scene);

// ///////////////////////////////SPINNY LIFTER FUNCTIONS///////////////////////////////
// //change state into SPINNYLIFTER//
//
SpinnyLifterScene.prototype.setup = function(){
  console.log("Changed state to SPINNYLIFTER");
  manager.changeState(STATE_SPINNYLIFTER);
}

SpinnyLifterScene.prototype.updateHWLifter = function updateHWLifter(angle)
{
  manager.change(SPINNYLIFTER.master.values.rotationsteps, angle);
  console.log(angle);
}
