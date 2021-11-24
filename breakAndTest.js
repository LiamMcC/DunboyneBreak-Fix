var Person = require("./makeup.js");
var Vehicle = require("./idea.js");
// Checks whether minimum of 3 parameters have been entered
// 
if(process.argv.length <= 1) {
  console.log("You must pass the age of the person.");
  // Exists 
  process.exit();
}
// Creates the person using the constructor function
// 
var person = new Person(2,3, false);

console.log("Person is an adult is: " + person.isAdult());
console.log("Person can have bank account is: " + person.canHaveBankAccounts());
// Sets the age of the person
// 
person.setAge(process.argv[2]);

console.log("Person is an adult is: " + person.isAdult());
console.log("Person can have bank account is: " + person.canHaveBankAccounts());

var car1 = new Vehicle("Toyota", "Avensis", 2017);
const car2 = new Vehicle("Ford", "Focus", 2001);

console.log("Car 2 is a " + car2.getAge() + " year old " + car2.make)


function liam (){
  var car1 = new Vehicle("Toyota", "Avensis", 2017);
  console.log("Function: Car 1 is a " + car1.getAge() + " year old " + car1.make)
}

liam()
