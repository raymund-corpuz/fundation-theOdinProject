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
