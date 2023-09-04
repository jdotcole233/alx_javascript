#!/usr/bin/node

class Square extends require('./5-square') {
  charPrint (c) {
    if (!c) {
      this.print();
      return;
    }

    this.char = c;
    this.print();
  }
}

module.exports = Square;
