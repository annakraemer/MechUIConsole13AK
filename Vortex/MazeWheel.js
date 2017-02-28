'use strict';

function MazeWheel(x, y, width, height, onChange, deadZoneSize, scaler, minAngle, maxAngle, onStop) {
    Wheel.call(this, x, y, width, height, onChange, deadZoneSize, scaler, minAngle, maxAngle);
    this.displayAngle = 0;
    this.counter = 0;
    this.onStop = onStop;
}

_inherits(MazeWheel, Wheel);

MazeWheel.prototype.MazeWheelImage = function MazeWheelImage(img){
  this.MazeWheelIcon = img;
}

MazeWheel.prototype.touchMoved = function touchMoved(t, prevAngle) {
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