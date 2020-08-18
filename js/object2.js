// var _ = require("lodash");

//Write another Constructor Function

function SuperMan(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

SuperMan.prototype = new Person();

var pm = new SuperMan("Super", "Man");
console.log(pm.sayName());

function Person(firstName, lastName) {
  var fstName = firstName;
  var lstName = lastName;

  this.setFirstName = function (firstName) {
    fstName = firstName;
  };
  this.getFirstName = function () {
    return fstName;
  };

  this.setLastName = function (lastName) {
    lstName = lastName;
  };
  this.getLastName = function () {
    return lstName;
  };
  this.sayName = function () {
    return this.getFirstName() + " " + this.getLastName();
  };
}
var person = new Person("Anh", "Em");
console.log(person.getFirstName());
console.log(person.sayName());

function tangQua(qua) {
  return console.log("Da tang " + qua);
}
function oNha(vo, tangQua) {
  var qua = "Qua da nhan";
  tangQua(qua);
}
oNha("Linh", tangQua);

var firstName = "Cuong",
  lastName = "Nguyen";

function showName() {
  console.log(this.lastName + " " + this.firstName);
}

var person = {
  firstName: "Cuong",
  lastName: "Nguyen",
  friends: ["Minh", "Khoa", "Manh", "Vu"],
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  showFriends: function () {
    for (var i = 0; i < this.friends.length; i++) {
      console.log(this.firstName + " have friend are " + this.friends[i]);
    }
  },
  showFriendThis: function () {
    this.friends.forEach(function (item) {
      console.log(this.firstName + " have friend are " + item);
    });
  },
};

person.showName();
var showNameFunc = person.showName.bind(person);
console.log("Function showName is ");
showNameFunc();
// person.showFriendThis();
// person.showFriends();

// $("button").click(person.showName);

// //Dung anonymous function

// $("button").click(function () {
//   person.showName();
// });

// $("button").click(person.showName.bind(person));

var students = [
  { Name: "Hoang", Age: 20 },
  { Name: "Minh", Age: 50 },
  { Name: "Sang", Age: 50 },
  { Name: "Long", Age: 27 },
  { Name: "Khoa", Age: 10 },
];

var result = students.filter((ele) => ele.Age > 20);
console.log("Result is " + result[0].Name);

var allStudentLarger5 = students.every(function (ele) {
  return ele.Age > 5;
});

var anyStudentLager5 = students.some(function (ele) {
  return ele.Age > 100;
});

console.log(allStudentLarger5);
console.log(anyStudentLager5);

var names = students.map((st) => st.Name);
console.log(names);
var found = students.find(function (st) {
  return st.Age === 10;
});

var index = students.findIndex(function (st) {
  return st.Age === 50;
});
console.log(found);
console.log(index);

function log(level, time, message) {
  console.log(level + "-" + time + ":" + message);
}
function logErrToday(message) {
  log("Error", "Today", message);
}

var logErr = log.bind(null, "error", "today");

logErr("bug");
logErrToday("bug");

// Tìm max bằng cách gọi hàm Math.max
var test1 = Math.max(4, 3, 2, 10);

// Thay vì gọi trực tiếp hàm Math.max, ta có thể dùng call
// Set this bằng null
var test2 = Math.max.call(null, 4, 3, 2, 10);

// Apply tương tự call, nhưng không truyền lần lượt
// Mà truyền một array chứa toàn bộ các tham số
var test3 = Math.max.apply(null, [4, 3, 2, 10]);

var test4 = Math.max.apply(null, [1, 2, 3, 4]);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

function test(firstParam, secondParam, thirdParam) {
  var arguments = [firstParam, secondParam, thirdParam];
  var args = Array.apply(null, arguments);
  console.log(args);
}

test(1, 2, 3); // [1, 2, 3]

var computer = {
  accessWeb: function (site) {
    // Đi tới site nào đó
    console.log("Go to: " + site);
  },
};

var oldFunction = computer.accessWeb;

computer.accessWeb = function () {
  console.log("Con gà bắt đầu vào web");
  oldFunction.apply(null, arguments); // giữ nguyên hàm cũ
  console.log("Con gà đã vào web");
};

computer.accessWeb("thiendia.com");
