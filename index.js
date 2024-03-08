// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = []

}

Person.prototype.eat = function(food){
  if(this.stomach.length < 10){
    this.stomach.push(food)
    console.log(`${this.name} ate ${food}`)
} else {
  console.log(`${this.name} is full cant eat anymore`)
}
Person.prototype.poop = function(){
  return this.stomach = '' 

}
}

Person.prototype.poop = function() {
  this.stomach = [];
  console.log(`this motha trucka has pooped`)
}


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg) {
  this.model = model;
  this.mpg = mpg;
  this.tank = 0; // Initialize tank to 0 gallons
  this.odometer = 0; // Initialize odometer to 0 miles
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons; // Add gallons to the tank
  console.log(`${this.model} was filled with ${gallons} gallons.`);
};

Car.prototype.drive = function(distance) {
  const requiredFuel = distance / this.mpg; // Calculate required fuel

  if (requiredFuel > this.tank) {
    const milesDriven = this.tank * this.mpg; // Miles driven before running out
    this.odometer += milesDriven; // Update odometer
    this.tank = 0; // Empty the tank
    return `I ran out of fuel at ${this.odometer} miles!`; // Return "ran out of fuel" message
  } else {
    this.tank -= requiredFuel; // Deduct fuel used from tank
    this.odometer += distance; // Update odometer
    console.log(`${this.model} drove ${distance} miles.`);
  }
};

// Example usage
const myCar = new Car("Tesla Model S", 100);
myCar.fill(10); // Fill the tank with 10 gallons
console.log(myCar.drive(200)); // Output: Tesla Model S drove 200 miles.
console.log(myCar.drive(300)); // Output: I ran out of fuel at 200 miles!



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age , favoriteToy) {

  Person.call(this, name, age);
  this.favoriteToy = favoriteToy
}

Baby.prototype.play = function(){
  return `playing with ${this.favoriteToy}`
}

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. implicit
  2. explicit apply, call, bind
  3. new 
  4.  arrow function
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
