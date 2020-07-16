/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

//Creating "Person" Constructor initializing "Name" and "Age"
//Write a Person Constructor that initializes `name` and `age` from arguments.
function Person(name, age) {
  this.name = name;
  this.age = age;
  //creating Array "stomach"
  //All instances of Person should initialize with an empty `stomach` array.
  this.stomach = [];
}

//Creating constructive function for eating edibles until 10 items are in stomach
//Give instances of Person the ability to `.eat("someFood")`:
// + When eating an edible, it should be pushed into the `stomach`.
Person.prototype.eat = function (edible) {
  //For loop to push to "stomach" array until 10 items
  // + The `eat` method should have no effect if there are 10 items in the `stomach`.
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
}

//Creating "poop" function that clears "stomach" array
//- Give instances of Person the ability to `.poop()`:
//+ When an instance poops, its `stomach` should empty.
Person.prototype.poop = function () {
  this.stomach = [];
}

//- Give instances of Person a method `.toString()`:
//+ It should return a string with `name` and `age`. Example: "Mary, 50"
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

//- Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
//- All instances built with Car:
function Car(model, milesPerGallon) {
  //Assigning car model
  this.model = model;
  //Assigning MPG variable
  this.milesPerGallon = milesPerGallon;
  //+ should initialize with an `tank` at 0
  this.tank = 0;
  //+ should initialize with an `odometer` at 0
  this.odometer = 0;
}

//Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
};

//- STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
Car.prototype.drive = function(distance){
  //Establishing how many driving miles are available based on gas in tank
  const milesTilEmpty = this.tank * this.milesPerGallon;
  //Creating if statement for having gas or running out
  if (distance <= milesTilEmpty) {
    this.odometer = this.odometer = distance;
    this.tank = this.tank - (distance / this.milesPerGallon);
  }else{
    this.odometer = this.odometer + milesTilEmpty;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

//Write a Baby constructor subclassing Person.
//Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

//Besides the methods on Person.prototype, babies have the ability to `.play()`:
Baby.prototype = Object.create(Person.prototype);
//+ Should return a string "Playing with x", x being the favorite toy.
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global Binding

  Global binding when "this" is called will show pretty much everything of javascript. its the entire thing.

  2. Implicit Binding

  is when you use a period or "dot" and it becomes that object, this.name etc...

  3. New Binding

  This is when it refers to a new constructor e.g. const cats = new catFur('long'); etc...

  4. Explicit Binding

  Basically is like an over ride, using .cal or .apply

*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}

//
//
// Repl.it exercise
//
//


// const yourObject = {
//   name: 'Dan Frehner',
//   city: 'Salt Lake City',
//   favoriteFood: 'Burritos'
// }

// const thingsYouEnjoy = ['Mountain Biking', 'Javascript', 'Snowboarding', 'Rafting', 'Movies', 'Music']

// function tellUsAboutYourself(thing1, thing2, thing3){;
// this.name = yourObject.name;
// this.city = yourObject.city;
// this.favoriteFood = yourObject.favoriteFood;
//   return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
// }
// tellUsAboutYourself(thingsYouEnjoy[0], thingsYouEnjoy[1], thingsYouEnjoy[2]);
