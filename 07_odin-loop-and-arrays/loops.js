function isBigEnough(value) {
  return value > 10;
}

// console.log([2, 4, 7, 9, 12, 15].filter(isBigEnough));

const array1 = [-3, -2, -1, 0, 1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 17];

const isPrime = (number) => {
  for (let i = 2; number > i; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

// console.log(array1.filter(isPrime));

const fruits = ["apples", "banana", "grapes", "mango", "orange"];

function searchFilter(array, query) {
  const result = array.filter((arr) => arr.includes(query));

  console.log(result);
}

// searchFilter(fruits, "ana");

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "cherries", quantity: 5 },
  { name: "coconut", quantity: 4 },
  { name: "grapes", quantity: 7 },
];

function searchInventory(search, query) {
  const findInventory = search.find((element) => element.name === query);
  let result = `${findInventory.name} has ${findInventory.quantity} fruits in the basket`;
  if (findInventory) {
    return result;
  }
  return "NO INVENTORY";
}

console.log(searchInventory(inventory, "coconut"));
