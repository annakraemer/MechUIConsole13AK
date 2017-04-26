function SpinnyLifterActor(x, y, width, height, onChange, deadZoneSize, scaler, maxSpeed) {
  Wheel.call(this, x, y, width, height, onChange, deadZoneSize, scaler, 0, 0);
  var d = new Date();
  this.currTime = d.getTime();
  this.prevTime = d.getTime();
  this.maxSpeed = maxSpeed === undefined ? 1000000000 : maxSpeed;
}

_inherits(SpinnyLifterActor, Wheel);

function _isInEllipse(x, y, width, height) {
  return ((x * x) / (0.25 * width * width)) + ((y * y) / (0.25 * height * height)) < 1;
}

SpinnyLifterActor.prototype._getTouchAngle = function _getTouchAngle(x, y) {
  var relX = x - this.width / 2;
  var relY = y - this.height / 2;
  if (_isInEllipse(relX, relY, this.deadZoneSize, this.deadZoneSize)) {
    return -1;
  } else {
    var mouseAngle = atan2(relY, relX);
    var currentAngle = degrees(mouseAngle);
    if (currentAngle < 0) {
      currentAngle = 360 + currentAngle;
    }
    return currentAngle;
  }
};

SpinnyLifterActor.prototype.touchMoved = function touchMoved(t, prevAngle) {
  var curAngle = this._getTouchAngle(t.x, t.y);
  if (curAngle === -1) {
    return prevAngle;
  }

  var delta = curAngle - prevAngle;
  if (delta > 0 || delta < -180 ) {
    delta = 0;
  }

  var d = new Date();
  this.currTime = d.getTime();
  var deltaT = (this.currTime - this.prevTime) / 1000;
  if (Math.abs(delta) > this.maxSpeed*deltaT)
  {
    delta = Math.sign(delta) * deltaT * this.maxSpeed;
  }
  this.prevTime = this.currTime;

  var oldDisplayAngle = this.displayAngle;
  this.displayAngle += delta * this.scaler;

  if (this.displayAngle !== oldDisplayAngle && this.onChange) {
    if ( this.tmpCounter++ === this.counter ) {
      this.onChange(this.displayAngle);
      this.tmpCounter = 0;
    }
  }

  return curAngle;

};
