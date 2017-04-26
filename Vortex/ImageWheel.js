'use strict';

function ImageWheel(x, y, width, height, onChange, deadZoneSize, scaler, minAngle, maxAngle, useimage) {
    Wheel.call(this, x, y, width, height, onChange, deadZoneSize, scaler, minAngle, maxAngle);
    this.displayAngle = 0;
    this.counter = 0;
    this.useImage = loadImage("/libs/images/imagewheel.png");
}

_inherits(ImageWheel, Wheel);

ImageWheel.prototype.draw = function draw() {
  translate(this.width/2, this.height/2);

  strokeWeight(0);
  fill(240);
  ellipse(0, 0, this.width, this.height);

  // create arcs so it will look like tick marks on the wheel.
  strokeWeight(2);
  stroke(150);
  rotate(radians(this.displayAngle));
  for (var i = 0; i < 360; i += 40) {
    arc(0, 0, this.width, this.height, radians(i), radians(i + 40), PIE);
  }

  strokeWeight(2);
  stroke(200);
  fill(230);
  ellipse(0, 0, this.width - 50, this.height - 50);

  strokeWeight(3);
  stroke(150);
  fill(210);
  ellipse(0, 0, this.deadZoneSize, this.deadZoneSize);
  
    Actor.prototype.draw.call(this);   //where you add the image on top of the wheel 
    image(this.useImage, -152, -152, this.width/1.15, this.height/1.15); //positions the image and determines size
  
 
};

ImageWheel.prototype.touchMoved = function touchMoved(t, prevAngle) {
  var curAngle = this._touchIsInWheel(t.x, t.y);
  if (curAngle === -1) {
    return prevAngle;
  }

  var delta = curAngle - prevAngle;
  if (delta > 180) {
    delta -= 360;
  } else if (delta < -180) {
    delta += 360;
  }

  var oldDisplayAngle = this.displayAngle;
  this.displayAngle += delta * this.scaler;
  if (this.displayAngle < this.minAngle) {
    this.displayAngle = this.minAngle;
  } else if (this.displayAngle > this.maxAngle) {
    this.displayAngle = this.maxAngle;
  }

  if (this.displayAngle !== oldDisplayAngle && this.onChange) {
    if(this.counter === 10) {
        this.onChange(this.displayAngle);
        this.counter = 0;
    }
    else {
        this.counter++;
    }
  }

  return curAngle;
};