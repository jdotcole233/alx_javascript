#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
    if (w <= 0 || h <= 0) {
      return {}
    }
  }

  print () {
    for (let row = 0; row < this.height; row++) {
      let msg = '';
      for (let column = 0; column < this.width; column++) {
        msg += 'X';
      }
      console.log(msg);
    }
  }

  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
