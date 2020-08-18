// var Circle = require("./circle");
// var circle1 = new Circle(0, 0, 1);
// var circle2 = new Circle(0, 2, 1);
// console.log(circle1.isOverlapped(circle2));

// var circle3 = new Circle(0, 0, 3);
// console.log(circle1.isOverlapped(circle3));

// var circle4 = new Circle(5, 5, 1);
// console.log(circle1.isOverlapped(circle4));

// let name;
// console.log(name);

function onClick() {
  const name = "Cuong";
  window.alert("Hôm nay trời nắng đẹp");
  document.getElementById("demo").style.display = "block";
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").innerHTML = Date();
  console.log(typeof new Date());
  console.log(typeof NaN);
  console.log(typeof null);
  console.log(typeof name);
}

function onClickClass() {
  document.getElementsByClassName("object_tag").style.color = "orange";
  console.log(5 + 6);
  document.get;
}

function showFullName() {
  let result = document.getElementsByName("Cuong").length;
  document.getElementById("fullName").innerHTML = result;
}

function showArr() {
  for (let i = 0; i < 5; i++)
    for (let j = 0; j < 5; j++) {
      if (i == 2 && j == 2) continue;
      console.log(i + " " + j);
    }
}
