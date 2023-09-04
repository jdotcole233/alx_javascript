#!/usr/bin/node

class Square extends require('./5-square') {
  charPrint (c) {
    if (!c) {
      return this.print();
    }

    for (let column = 0; column < this.height; column++) {
      console.log(c.repeat(this.width))
    }
  }
}

module.exports = Square;
