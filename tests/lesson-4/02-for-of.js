/*
1. In lần lượt từng ký tự của str
*/
const str = "Playwright";

for (const chars of str) {
    console.log(chars);
}


/*
2. Tạo mảng đảo ngược từ str
*/
let newStr = [];
for (const chars of str) {
    newStr.push(chars);
}

console.log(newStr.reverse());


/*
3. Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
*/
const arr = [1, 2, 3, 4, 3, 55, 23];

let firstIndex = -1;
let lastIndex = -1;
let index = 0;

for (const value of arr) {
    if (value === 3) {
        if (firstIndex === -1) { // nếu chưa tìm ra firstIndex thì gán nó = index hiện tại
            firstIndex = index;
        }
        lastIndex = index; // luôn cập nhật lastIndex mỗi khi value = 3
    }
    index++;
}

console.log(`Vị trí đầu tiên của giá trị 3 trong arr là: ${firstIndex}`);
console.log(`Vị trí cuối cùng của giá trị 3 trong arr là: ${lastIndex}`);


/*
4. Lọc các phần tử xuất hiện 1 lần trong dupArr
*/
const dupArr = [1, 2, 3, 1, 2, 4, 5];
let newArr = [];

for (const value of dupArr) {
    if (dupArr.indexOf(value) === dupArr.lastIndexOf(value)) {
        newArr.push(value);
    }
}

console.log(newArr);