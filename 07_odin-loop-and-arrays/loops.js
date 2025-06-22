function isBigEnough(value) {
  return value > 10;
}

console.log([2, 4, 7, 9, 12, 15].filter(isBigEnough));
