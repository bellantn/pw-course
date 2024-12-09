//1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì
const height = 1.58;
const weight = 57;
const bmi = weight / (height * height);

function calBMI() {
  if (bmi < 18.5) return "Thiếu cân";
  if (bmi < 25) return "Bình thường";
  if (bmi < 30) return "Thừa cân";
  if (bmi >= 30) return "Béo phì";
}

console.log(calBMI());

//2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;

function convertTemp(temp, type) {
  if (type === "C") {
    return (temp * 9) / 5 + 32;
  }
  if (type === "F") {
    return ((temp - 32) * 5) / 9;
  }
}
//Từ độ C sang độ F
console.log("37 độ C = " + convertTemp(37, "C") + " độ F");

//Từ độ F sang độ C
console.log("120 độ F = " + convertTemp(120, "F") + " độ C");

//3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
const arr = [1, 2, 3, 4, 5];
function calSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const result3 = calSum(arr);
console.log(result3);

//4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
function isPrime(number) {
  if ((number > 2 && number % 2 === 0) || number <= 1) {
    return false;
  } else {
    let squareRoot = Math.sqrt(number);
    for (let i = 2; i <= squareRoot; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}
function filterPrimeNumber() {
  const arr = [1, 9, 0, 4, 5, 3, 2, 11, 6, 7, 10];
  const primeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }
  return primeNumbers;
}
const arrayPrimeNumber = filterPrimeNumber();
console.log(`result: ${arrayPrimeNumber}`);

//5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
//Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail
const users = [
  { name: "A", email: "userA@gmail.com" },
  { name: "B", email: "userB@gmail.com" },
  { name: "C", email: "userC@gmail.com" },
  { name: "D", email: "userD@gmail.com" },
];
function updateEmail(name, newEmail) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      //kiểm tra tên
      users[i].email = newEmail; //cập nhật email
      return `Đã update thành công email của ${name}`;
    }
  }
  return `Không tìm thấy ${name} trong danh sách users`;
}

console.log(updateEmail("A", "newemailA@hotmail.com"));
console.log(users);

//6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
//Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
const students = [
  { name: "Alex", score: 85 },
  { name: "Bella", score: 100 },
  { name: "Justin", score: 95 },
];
function calAvrScore(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].score;
  }
  const avrScore = sum / students.length;
  return avrScore;
}

const result6 = calAvrScore(students);
console.log(result6);

//7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
//Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }
const cart = [
  { name: "product 1", price: 100 },
  { name: "product 2", price: 0 },
  { name: "product 3", price: 200 },
];

function checkProductPrice(cart) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].price <= 0) {
      return false;
    }
  }
  return true;
}

console.log(checkProductPrice(cart));

//8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.
function isOpened(h) {
  if (h >= 9 && h < 21) {
    return "Open";
  } else {
    return "Closed";
  }
}
console.log(isOpened(7));
console.log(isOpened(15));
console.log(isOpened(23));

//9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
function price(age) {
  if (age <= 5) {
    return "Trẻ em dưới 5 tuổi miễn phí";
  }
  if (age >= 18) {
    return "Người lớn từ 18 tuổi trở lên là 100k";
  } else {
    return "Trẻ em từ 6 đến 17 tuổi là 50k";
  }
}

console.log(price(3));
console.log(price(31));
console.log(price(6));

//10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.
const month = 11;
switch (month) {
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
}

//11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>= 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
function studentGrade(score) {
  if (score >= 8) {
    return "Học sinh giỏi";
  }
  if (score >= 6.5 && score < 8) {
    return "Học sinh khá";
  }
  if (score >= 5 && score < 6.5) {
    return "Học sinh trung bình";
  }
  if (score < 5) {
    return "Học sinh yếu";
  }
}

console.log(studentGrade(10));
console.log(studentGrade(3));
console.log(studentGrade(5));
console.log(studentGrade(7));

//12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function weatherStatus(temp) {
  if (temp >= 30) {
    return "Trời nóng";
  }
  if (temp < 20) {
    return "Trời lạnh";
  } else {
    return "Trời mát";
  }
}
const temp = 18;
console.log("Nhiệt độ là " + temp + " nên " + weatherStatus(temp));
