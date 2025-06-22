function isBigEnough(value) {
  return value > 10;
}

console.log([2, 4, 7, 9, 12, 15].filter(isBigEnough));

const array1 = [-3, -2, -1, 0, 1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 17];

const isPrime = (number) => {
  for (let i = 2; number > i; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

console.log(array1.filter(isPrime));
