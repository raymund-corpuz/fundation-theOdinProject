const personObject = {
  name: ["Bob", "Smith"],
  age: 32,
  work: "project Planner",
  company: "Sumi North Philippines",
  bio: function () {
    return `${this.name[0]} ${this.name[1]}`;
  },

  introduceSelf: function () {
    return `Hi I'm ${this.name[0]}`;
  },
  workExperience: function () {
    return `Hi I work at ${this.company} as a ${this.work}`;
  },
};

console.log(personObject.name);
console.log(personObject.name[0]);
console.log(personObject.age);
console.log(personObject.introduceSelf());
console.log(personObject.workExperience());

const personObjectObject = {
  name: {
    first: "Bob",
    last: "Smith",
  },
};

console.log(personObjectObject.name.first);
console.log(personObjectObject.name.last);
console.log(personObjectObject.name["first"]);
console.log(personObjectObject["name"]["last"]);

personObjectObject["eyes"] = "hazel";
personObjectObject.farewell = function () {
  return "Bye Everyone";
};

console.log(personObjectObject.eyes);
console.log(personObjectObject.farewell());

const personObjectMember = {};

const myDataName = "height";
const myDataValue = "1.75m";
const myDataNameVar = [];

personObjectMember[myDataNameVar] = myDataName;
console.log(personObjectMember[myDataNameVar]);

//CONSTRUCTOR =====================================>
function createPersonConstructor(name) {
  const obj = {};

  obj.name = name;
  obj.introduceSelf = function () {
    return `Hi I'm ${this.name}`;
  };
  return obj;
}

console.log(createPersonConstructor("Raymund"));
console.log(createPersonConstructor("Raymund").introduceSelf());

const salva = createPersonConstructor("Salva");
console.log(salva.introduceSelf());
console.log(createPersonConstructor("frankie").introduceSelf());

function PersonConstructor(name) {
  this.name = name;
  this.introduceSelf = function () {
    return `Hi  I'm ${this.name}`;
  };
}

const salvaConstructor = new PersonConstructor("Salva");
console.log(salvaConstructor.introduceSelf());
