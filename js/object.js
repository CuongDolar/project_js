// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.showName = function () {
//     console.log(this.firstName + " " + this.lastName);
//   };
// }

function Person() {}
Person.prototype.firstName = "Cuong";
Person.prototype.lastName = "Nguyen";
Person.prototype.showName = function () {
  console.log(this.firstName + " " + this.lastName);
};

var per1 = new Person();
console.log(per1.firstName);
per1.showName();

// var psn = new Object();
// psn.firstName = "Hoang";
// psn.lastName = "Pham";
// psn.showName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

var person = {
  firstName: "Hoang",
  lastName: "Pham",
  50: "Hi", // Property có tên là số, không dùng dotNotation được
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

console.log(person.firstName);
console.log(person["firstName"]);

console.log(person["50"]);
//console.log(person.50);

for (let prop in person) {
  console.log(prop);
}

delete person.lastName;
person.lNam = "Linh";

console.log(person.lastName);
console.log(person.lNam);

var result = JSON.stringify(person);
console.log(result);

var jsonString = '{"firstName" : "Cuong","lastName": "Nguyen"}';

var psn = JSON.parse(jsonString);
console.log(psn.firstName + " " + psn.lastName);

function Person() {
  this.firstName = "Cuong";
  this.lastName = "Nguyen";
  this.sayName = function () {
    return this.firstName + " " + this.lastName;
  };
}

//Write another Constructor Function

function SuperMan(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

SuperMan.prototype = new Person();

var pm = new SuperMan("Super", "Man");
pm.sayName();

Person.prototype.toString = function () {
  return this.firstName + " " + this.lastName;
};

// var people = new People("Cuong", "Nguyen");
// console.log("The person is " + people);

// var str = "abc";
// String.prototype.duplicate = function () {
//   return this + this;
// };
// console.log(str.duplicate());
