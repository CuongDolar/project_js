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

Promise.all([sờ_trên, sờ_dưới, sờ_tùm_lum]).then(function (result) {
  console.log(result);
});

function sayHello() {
  return "Hello World";
}
// var greetingPromise = sayHello();
// greetingPromise.then(
//   function (greeting) {
//     console.log(greeting); // 'hello world’
//   },
//   function (error) {
//     console.error("something went wrong: ", error); // 'something went wrong: blabla’
//   }
// );

function a(str) {
  return str + "!";
}

function b(result) {
  console.log(a(result));
}

b("Cuong");
