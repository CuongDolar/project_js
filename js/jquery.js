// Hàm tạo chuỗi mật khẩu
function createPassword(callback) {
  return callback("freetuts.net");
}

// Sử dụng
var password = createPassword(function (secret) {
  return secret;
});
// var pass = createPassword("123456");
// console.log(pass);
console.log(password);

var domainInfo = {
  name: "freetuts.net",
  setName: function (name) {
    this.name = name;
  },
  showName: function () {
    console.log("Name is " + this.name);
  },
};

function test(callback, callbackObject) {
  var name = "Nguyen Dinh Cuong";
  callback.call(callbackObject, name);
}

test(domainInfo.setName, domainInfo);
console.log(domainInfo.name);
domainInfo.showName();

var person = {
  firstName: "Hoang",
  lastName: "Pham",
  friends: ["Minh", "Sang", "Khoa", "Hoang"],
  showFriendFixed: function () {
    //var personObj = this; //Gán giá trị this vào biến personObj
    var personObj = this;
    this.friends.forEach(function (fr) {
      console.log(personObj.firstName + " have a friend named " + fr);
    });
  },
  showNameByArowfunction: function () {
    this.friends.forEach((fr) =>
      console.log(this.firstName + " have friends are " + fr)
    );
  },
  showName: function () {
    console.log("Name is " + this.firstName);
  },
};

var firstName = person.showName;
firstName();

function test(firstParam, secondParam, thirdParam) {
  var args =
    arguments.length === 1 ? arguments[0] : Array.apply(null, arguments);
  console.log(args);
}
person.showNameByArowfunction();
test(1, 2, 3); // [1, 2, 3]

function mutifly(a, b) {
  var b = typeof b !== "undefined" ? b : 1;
  return a * b;
}
function mutifly1(a, b = 1) {
  return a * b;
}
console.log(mutifly(3));
console.log(mutifly1(5));
function f(x, ...y) {
  // y ở đây là array, chứa ["hello", true, false]
  return x * y.length;
}

f(3, "hello", true, "ttt");
console.log(f(3, "hello", true, false));

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " make a noise");
  }
}

class Duck extends Animal {
  speak() {
    console.log(this.name + " make a quac quac");
  }
}
var animal = new Animal("Duck");
var duck = new Duck("Donan");
animal.speak();
duck.speak();

// var obj = {
//   first_Name,
//   last_Name,
//   showName: function () {
//     console.log(this.first_Name + " " + this.last_Name);
//   },
// };
// obj.first_Name = "Cuong";
// obj.last_Name = "Nguyen";
// obj.showName();

const people = {
  first_Name: "Anh",
  last_Name: "Thu",
};

var { first_Name, last_Name } = people;

console.log(first_Name);
console.log(last_Name);

var { first_Name: fn, last_Name: ln } = people; //fn: Hoang, ln: Pham

console.log(fn);
console.log(ln);

function f(x, y, z) {
  return x + y + z;
}
f([1, 2, 3]) == 6;

console.log(f(1, 2, 3));

var numbers = [1, 2, 3, 4, 5, 6];

for (let i of numbers) console.log(i);

numbers.forEach(function (num) {
  console.log(num);
});

// people.firstName = "Cuong";
// console.log(people.firstName);

// let arr = [1, 2, 3, 4, 5];
// for (let i in arr) console.log(arr[i]);

// const a = 1;
// console.log(a);

// function foo() {
//   let bar = "bar";
//   console.log(typeof bar);
// }

// foo();

// console.log(people["lastName"]);

// const { height, width } = { 1: 2 };

// console.log(height);

var s = new Set();
s.add("Nguyen").add("Dinh").add("Cuong");

console.log(s.size);
console.log(s.has("hello"));

var promise = new Promise(function (resolve, reject) {
  if (true) {
    resolve("Stuff worker");
  } else reject(Error("It Broke"));
});

promise.then(
  function (result) {
    console.log(result);
  },
  function (err) {
    console.log(err); // Error: "It broke"
  }
);
//Maps

var map = new Map();
map.set("Linh", 24);
map.set("Hoang", 25);
map.set("Cuong", 35);
console.log(map.get("Hoang"));

// Hàm này trả ra lời hứa chứ không phải chiếc BMW
function hứa_cho_có() {
  return Promise((thuc_hien_loi_hua, that_hua) => {
    // Sau 1 thời gian dài dài dàiiiiiii
    // Nếu vui bố mẹ sẽ thực hiện lời hứa
    if (vui) {
      thuc_hien_loi_hua("Xe BMW");
      // Lúc này trạng thái của lời hứa là fulfilled
    } else {
      that_hua("Xe dap");
      // Lúc này trạng thái của lời hứa là rejected
    }
  });
}
// Lời hứa bây giờ đang là pendding
// Nếu được thực hiện, bạn có "Xe BMW"
// Nếu bị reject, bạn có "Xe đạp"
var promise = hứa_cho_có();
promise
  .then((xe_bmw) => {
    console.log("Được chiếc BMW vui quá");
  })
  .catch((xe_dap) => {
    console.log("Được chiếc xe đạp ....");
  });
xin_mẹ_mua_xe
  .then(chở_gái_đi_chơi)
  .then(chở_gái_vào_hotel)
  .then(function () {
    /*Làm gì đó, ai biết*/
  });
// Khi một function bị lỗi, promise bị reject (thất hứa)
function chở_gái_vào_hotel() {
  return Promise((response, reject) => {
    reject("Xin lỗi hôm nay em đèn đỏ");
  });
}

xin_mẹ_mua_xe
  .then(chở_gái_đi_chơi)
  .then(chở_gái_vào_hotel)
  .then(function () {
    /*Làm gì đó, ai biết*/
  })
  .catch(function (err) {
    console.log(err); //"Xin lỗi hôm nay em đèn đỏ"
    console.log("xui vl");
  });
// Ba hàm này phải được thực hiện "cùng lúc"
// chứ không phải "lần lượt"
var sờ_trên = new Promise((resolve, reject) => {
  resolve("Phê trên");
});
var sờ_dưới = new Promise((resolve, reject) => {
  resolve("Phê dưới");
});
var sờ_tùm_lum = new Promise((resolve, reject) => {
  resolve("Phê tùm lum chỗ");
});

// Truyền 1 array chứa toàn bộ promise vào hàm Promise.all
// Hàm này trả ra 1 promise, tổng hợp kết quả của các promise đưa vào
Promise.all([sờ_trên, sờ_dưới, sờ_tùm_lum]).then(function (result) {
  console.log(result); // ["Phê trên", "Phê dưới", "Phê tùm lum chỗ"]
  // Phê xong làm gì ai biết
});
