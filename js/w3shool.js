console.log("Hello \
Dolly!");
var x = new String("John");
var y = new String("John");
console.log(x == y);
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

console.log(pos);
var str = "Apple, Banana, Kiwi";
var res = str.substr(0, 6);

console.log(res);
str = "Please visit Microsoft and Microsoft!";
str = str.toLocaleLowerCase();
str = str.replace(/microsoft/g, "W3Schools");
console.log(str);
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

console.log(text3);

var text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

console.log(text);

var str = "       Hello World!        ";
console.log(str.trim());
console.log(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}

var str = "       Hello World!        ";
console.log(str.trim());
var str = "HELLO WORLD";
console.log(str[0]);

console.log(typeof str);

var txt = "a,b,c,d,e";
var x = txt.split(",");
console.log(x);

console.log((0.1 * 10 + 0.2 * 10) / 10);
var myNumber = 2;
while (myNumber != Infinity) {
  myNumber *= myNumber;
  console.log(myNumber);
}
var myNumber = 32;
console.log(myNumber.toString(10)); // returns 32
console.log(myNumber.toString(32)); // returns 10
console.log(myNumber.toString(16)); // returns 20
console.log(myNumber.toString(8)); // returns 40
console.log(myNumber.toString(2)); // returns 100000

var x = 9.656;
console.log(x.toExponential(2)); // returns 9.66e+0
console.log(x.toExponential(4)); // returns 9.6560e+0
console.log(x.toExponential(6));
var x = 9.656;
console.log(x.toFixed(2));

console.log(Number(new Date("2017-09-30")));

var max = Number.MAX_VALUE;
var min = Number.MIN_VALUE;
var pos = Number.POSITIVE_INFINITY;
var neg = Number.NEGATIVE_INFINITY;

console.log("Result in number");
console.log(max);
console.log(min);
console.log(pos);
console.log(neg);

// fruits.forEach(function (item) {
//   console.log(item);
// });

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length; // person.length will return 0
var y = person["lastName"];

console.log(x);
console.log(y);
var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.pop());
fruits.push("Lemon");

delete fruits[0];
console.log(fruits);
console.log(fruits[0]);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  console.log("swap " + a + " with " + b);
  return 0.5 - Math.random();
});
console.log(points);

function myArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  console.log(len);
  while (len--) {
    console.log(len);
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

let num_max = myArrayMax(points);
console.log(num_max);
