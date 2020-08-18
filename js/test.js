// Hàm chính
function freetutsDotNet() {
  this.age = 3;

  this.add = function () {
    this.age++;
  };
}

// Tạo mới đối tượng domain
var domain = new freetutsDotNet();

// Hàm thực hiện callback function
function domainChanger(fnc) {
  fnc();
}
//// SỬ DỤNG ////
console.log(domain.age); // kết quả là 3
//domainChanger(domain.add); // gọi hàm domain.add với mục đích tăng age lên 4
console.log(domain.age); // nhưng kết quả vẫn là số 3
alert(domain.age);
