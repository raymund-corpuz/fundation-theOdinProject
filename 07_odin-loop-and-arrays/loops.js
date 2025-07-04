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
  { name: "banana", quantity: 10 },
];

function searchInventory(search, query) {
  const findInventory = search.find((element) => element.name === query);
  let result = `${findInventory.name} has ${findInventory.quantity} fruits in the basket`;
  if (findInventory) {
    return result;
  }
  return "NO INVENTORY";
}

// console.log(searchInventory(inventory, "banana"));

const arrayFindIndex = [55, 12, 8, 103];

const arrayFindIndexNumber = (element) => element > 13;

// console.log(arrayFindIndex.findIndex(arrayFindIndexNumber));

//FOR IN LOOP ==========================================>
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multipyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      return (obj[key] *= 2);
    }
  }
}
multipyNumeric(menu);

console.log(menu);

//CONTINUE =========================>
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  // console.log(i);
}

//ARRAY METHODS - SPLICE ==============================>
let arr = ["I ", "study", "Javascript", "right", "now"];
const remove = arr.splice(0, 3, "Lets", "dance");
// console.log(arr + " original");
// console.log(remove + " modified");

//SLICE METHOD ====================================>
let sliceArr = ["R", "A", "Y", "M", "U", "N", "D"];
let sliceRes = sliceArr.slice(1, 3);
// console.log(sliceRes);

//CONCAT METHOD ======================================>
let concatArr = [1, 2, 3, 4, 5, 6, 7];

// console.log(
//   concatArr.concat([4, 5, 6, 7, 8, 9, 10, 11], [2, 4, 13, 15, 16, 25, 16])

//FOREACH METHOD ================================================>
const forEachItem = ["item1", "item2", "item3", "item4"];
const forEachArr = [];

forEachItem.forEach((item) => {
  forEachArr.push(item + " AWESOME");
});

console.log(...forEachArr);

//FOREACH CONSTRUCTOR OBJECT (OOP) ==================================>
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }

  add(array) {
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const forEachConstructorObj = new Counter();
forEachConstructorObj.add([2, 5, 9]);
// console.log(forEachConstructorObj.count);
// console.log(forEachConstructorObj.sum);

//FOREACH FLATTEN AN ARRAY ========================>
const forEachFlattenArray = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...forEachFlattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

const forEachNested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
// console.log(forEachFlattenArray(forEachNested));

//FIND ARRAY METHOD ==============================>
let findUser = [
  { id: 1, name: "John" },
  { id: 2, name: "Pette" },
  { id: 3, name: "Mary" },
  { id: 4, name: "Johny" },
];

let userFindId = findUser.find((item) => item.id === 2);
console.log(userFindId);

//FINDINDEX ARRAY METHOD ==============================>
let findIndexUser = [
  { id: 1, name: "John" },
  { id: 2, name: "Pette" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];
let findIndexUserResult = findIndexUser.findIndex(
  (item) => item.name === "John"
);

console.log(findIndexUserResult);

//FILTER ARRAY METHOD ====================================>
let filterUser = [
  { id: 1, name: "John" },
  { id: 2, name: "Pette" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

let filterUserResult = filterUser.filter((item) => item.id < 3);
console.log(filterUserResult);

// MAP ARRAY METHOD ===================================>
let mapLength = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);

console.log(mapLength);

//SORT ARRAY METHOD =====================================>
let sortArray = [1, 2, 15, 16, 331, 123, 12, 111];

let sortedArray = sortArray.sort((a, b) => {
  return a === b ? 0 : a > b ? 1 : -1;
});

console.log(sortedArray);

//REVERSE ARRAY METHOD ====================================>
let reverseArray = [1, 2, 3, 4, 5, 6, 7, 8];

let reversedArray = reverseArray.reverse();
console.log(reversedArray);

//THISARGS FILTER METHOD ==================================>
let thisArgsArmy = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let thisArgsUser = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 },
  { age: 32 },
  { age: 24 },
];

let thisArgsSoldiers = thisArgsUser.filter(thisArgsArmy.canJoin, thisArgsArmy);

// console.log(thisArgsSoldiers);

//REDUCE METHOD =======================================>

const reduceRawNumbers = [32, 41, 3, 15, 12, 34];
const runReduceNumber = reduceRawNumbers.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(runReduceNumber);

// REDUCE-FILTER METHOD ================================>
const reduceFilterNumbers = [12, 14, 1, 23, 16, 17, 9, 3];
const runReduceFilterNumbers = reduceFilterNumbers.reduce((result, current) => {
  if (current >= 15 && current <= 25) {
    result.push(current);
  }

  return result;
}, []);

console.log(runReduceFilterNumbers);

// REDUCE OBJECT METHOD ================================>
const reduceObjPeople = [
  { name: "Dom Perry", age: 35 },
  { name: "Andrew Wilksons", age: 47 },
  { name: "Brian Walker", age: 27 },
];

const runReduceObj = reduceObjPeople.reduce((res, curr) => {
  if (curr.age >= 30 && curr.age <= 40) {
    res[curr.name] = curr.age;
  }
  return res;
}, {});

console.log(runReduceObj);

//MAP OBJECT ==================================>
const mapContacts = new Map();
mapContacts.set("Raymund", {
  phone: "213-555-1234",
  address: "Nama, Pozorrubio",
});

console.log(mapContacts.has("Jessie"));
console.log(mapContacts.has("Raymund"));
mapContacts.set("Hillary", {
  phone: "617-555-4321",
  address: "Nama, Pozorrubio",
});
console.log(mapContacts.get("Raymund"));

console.log(mapContacts);

// MAP WITH FOR OF
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const [key, value] of myMap.entries()) {
  console.log(`${key}=${value}`);
}

myMap.forEach((value, key) => {
  console.log(`${key}=${value}`);
});

const evenTripleSum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenTripleSumResult = evenTripleSum
  .filter((item) => {
    return item % 2 === 0;
  })
  .map((item) => {
    return item * 3;
  })
  .reduce((result, current) => {
    return result + current;
  }, 0);

console.log(evenTripleSumResult);

// REMOVE THE DASH ================================>

function removeDashFunc(word) {
  const removeDathSplit = word
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
  return removeDathSplit;
}

console.log(removeDashFunc("background-color-to-day"));

//SORT IN DECREASING ORDER =============================>
let sortDecreasingOrder = [5, 2, 1, -10, 8];

sortDecreasingOrder.sort((a, b) => b - a);
console.log(sortDecreasingOrder);
