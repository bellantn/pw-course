// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
// 1
// 2
// 3
const arr1 = [1, 2, 3];
arr1.forEach((value) => {
  console.log(value);
});

// 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
const arr2 = [1, 2, 3, 4, 5];
let sum = 0;
let max = arr2[0];
let min = arr2[0];
arr2.forEach((value) => {
  sum += value;
  if (value > max) {
    max = value;
  }
  if (value < min) {
    min = value;
  }
});

console.log(`Tổng = ${sum}`);
console.log(`Giá trị lớn nhất = ${max}`);
console.log(`Giá trị nhỏ nhất = ${min}`);

// 3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]
const arr3 = [1, 2, 3, 4, 5];
const newArr = [];

arr3.forEach((value) => {
  newArr.push(value * 2);
});
console.log(newArr);
