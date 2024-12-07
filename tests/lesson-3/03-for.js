// 1. Tính tổng từ 1 đến 100.
function calSum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}
console.log(calSum());

// 2. In bảng cửu chương từ 2 đến 9.
function bangCuuChuong() {
  for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

bangCuuChuong();

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
function createOddNumbers() {
  let arr = [];
  for (let i = 1; i <= 99; i = i + 2) {
    arr.push(i);
  }
  return arr;
}

console.log(createOddNumbers());

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user-1@example.com, user2@example.com, ..., user10@example.com).
function genEmails() {
  for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
  }
}
genEmails();

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
const arr5 = [
  { month: 1, total: 100 },
  { month: 2, total: 200 },
  { month: 3, total: 300 },
  { month: 4, total: 400 },
  { month: 5, total: 500 },
  { month: 6, total: 400 },
  { month: 7, total: 300 },
  { month: 8, total: 200 },
  { month: 9, total: 100 },
  { month: 10, total: 50 },
  { month: 11, total: 1000 },
  { month: 12, total: 0 },
];

function calRevenue(arr5) {
  let sumRevenue = 0;
  for (let i = 0; i < arr5.length; i++) {
    sumRevenue += arr5[i].total;
  }
  return sumRevenue;
}

console.log(calRevenue(arr5));
