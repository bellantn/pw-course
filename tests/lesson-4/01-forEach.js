const numbers = [1, 2, 3];


/*
1. In lần lượt từng phần tử của numbers
*/
numbers.forEach((value) => {
    console.log(value);
})


/*
2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
*/
// Tính tổng
let sum = 0;
numbers.forEach((value) => {
    sum = sum + value;
})

console.log(`Tổng của numbers là: ${sum}`);

// Tìm giá trị lớn nhất
function findMax(a, b, c) {
    let arr = [a, b, c];
    let max = arr[0];
    arr.forEach((num) => {
        if (num > max) {
            max = num;
        }
    })
    return max;
}

console.log(`Giá trị lớn nhất của numbers là: ${findMax(1, 2, 3)}`);

// Tìm giá trị nhỏ nhất
function findMin(a, b, c) {
    let arr = [a, b, c];
    let min = arr[0];
    arr.forEach((num) => {
        if (num < min) {
            min = num;
        }
    })
    return min;
}

console.log(`Giá trị nhỏ nhất của numbers là: ${findMin(1, 2, 3)}`);


/*
3. Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
*/
let newNumbers = [];
numbers.forEach((value) => {
    newNumbers.push(value * 2);
})
console.log(newNumbers);