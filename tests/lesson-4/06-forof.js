// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là
// 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.
const arr1 = [1, 2, 3, 4, 3, 55, 23];
const value = 3;
let firstIndex = -1;
let lastIndex = -1;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === value) {
    if (firstIndex === -1) {
      firstIndex = i;
    }
    lastIndex = i;
  }
}
console.log(`First index of ${value}: ${firstIndex}`);
console.log(`Last index of ${value}: ${lastIndex}`);

// 2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
// ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
// “y”, “a”, “l”, “P”] => dua vao bai tap for
const str = "Playwright";
const arr2 = [];

for (let i = str.length - 1; i >= 0; i--) {
  arr2.push(str[i]);
}
console.log(arr2);

// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
// 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
const arr3 = [1, 2, 3, 1, 2, 4, 5];
const uniqueArr = [];

for (const value of arr3) {
  if (arr3.indexOf(value) === arr3.lastIndexOf(value)) {
    uniqueArr.push(value);
  }
}

console.log(uniqueArr);
