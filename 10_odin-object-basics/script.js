let userCreateObject = new Object();
console.log(userCreateObject);
console.log("helo");

let userCreateObjectNew = {};

let userLiteral = {
  name: "John",
  age: 30,
};
console.log(userLiteral.name, userLiteral.age);

userLiteral.isAdmin = true;
console.log(userLiteral);

delete userLiteral.age;
console.log(userLiteral);

userLiteral["like birds"] = true;

console.log(userLiteral);

console.log(userLiteral["like birds"]);

let userLiteralKey = "likes birds";

userLiteral[userLiteralKey] = false;

console.log(userLiteral[userLiteralKey]);

//Computed Properties ====================================>
let fruitsComputedProperties = "apple";

let fruitsComputedPropertiesBag = {
  [fruitsComputedProperties]: 5,
};

console.log(fruitsComputedPropertiesBag.apple);

let fruitPromptComputedProperties = "apple";
let fruitPromptComputedPropertiesBag = {};

fruitPromptComputedPropertiesBag[fruitPromptComputedProperties] = 5;

console.log(fruitPromptComputedPropertiesBag[fruitPromptComputedProperties]);

let fruitPrompt = "apple";
let bagPrompt = {};

bagPrompt[fruitPrompt] = 5;

console.log(bagPrompt);

//Property Value ShortHand =======================>
function makeUserPropertyShorthand(name, age) {
  return {
    name: name,
    age: age,
  };
}

let userPropertyShorthand = makeUserPropertyShorthand("Raymund", 30);
console.log(userPropertyShorthand.name);

function makeUser(name, age) {
  return {
    name,
    age,
  };
}
let userShorthand = makeUser("raymund", 30);
console.log(userShorthand.name);

// PROPERTY NAMES LIMITATION ===========================>

let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return);

let objtest = {
  0: "test",
};

console.log(objtest[0]);
console.log(objtest["0"]);

let objProto = {};
objProto.__proto__ = 5;
console.log(objProto.__proto__);

let animalProto = {
  eats: true,
};

let rabbitProto = {
  jumps: true,
};

rabbitProto.__proto__ = animalProto;
console.log(rabbitProto.eats);
console.log(rabbitProto.jumps);

let animalProtoTwo = {
  eats: true,
  walk() {
    return "Animal walk";
  },
};

let rabbitProtoTwo = {
  jumps: true,
  __proto__: animalProtoTwo,
};

console.log(rabbitProtoTwo.walk());

let longEar = {
  earLength: 10,
  __proto__: rabbitProtoTwo,
};

console.log(longEar.walk());
console.log(longEar.jumps);

// Property existence test "in " operator =============>
let userPropertyExistence = {};
let userPropertyExistenceName = "name";
let userPropertyExistenceAge = "age";
userPropertyExistence[userPropertyExistenceName] = "John";
userPropertyExistence[userPropertyExistenceAge] = 30;
console.log(userPropertyExistence);

console.log(userPropertyExistenceAge in userPropertyExistence);
console.log(userPropertyExistenceName in userPropertyExistence);

let userPropertyExist = { age: 30 };

let keyPropertyExist = "age";
console.log(keyPropertyExist in userPropertyExist);

let objectTest = {
  test: null,
};

console.log(objectTest.test);
console.log("test" in objectTest);

// FOR IN LOOP =============================>

let userForInLoop = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in userForInLoop) {
  console.log(key);
  console.log(userForInLoop[key]);
}

//Ordered LIKE an OBJECTS

let codeOrder = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

for (let key in codeOrder) {
  console.log(key);
}

console.log(String(Math.trunc(Number("49")))); // "49", same, integer property
console.log(String(Math.trunc(Number("+49")))); // "49", not same "+49" ⇒ not integer property
console.log(String(Math.trunc(Number("1.2"))));
