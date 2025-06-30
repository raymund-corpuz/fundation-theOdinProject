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
