function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

Circle.prototype.isOverlapped = function (cir) {
  if (this.x === cir.x && this.y === cir.y && this.radius === cir.radius)
    return -1;
  else {
    var distance = Math.sqrt(
      Math.pow(this.x - cir.x, 2) + Math.pow(this.y - cir.y, 2)
    );
    var maxRadius = this.radius > cir.radius ? this.radius : cir.radius;
    if (distance > maxRadius) return 1;
    else if (distance === this.radius + cir.radius) return 0;
  }
};
module.exports = Circle;
