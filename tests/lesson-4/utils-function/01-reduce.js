const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

/*
6.1 Tính tổng các giá trị trong scores. 
*/
let sum = scores.reduce((total, score) => total + score, 0);

console.log(`Tổng các giá trị trong scores là: ${sum}`);


/*
6.2 Tính tích các giá trị trong numbers.
*/
let product = numbers.reduce((total, num) => total * num, 1);

console.log(`Tích các giá trị trong numbers là: ${product}`);


/*
6.3 Tính tổng các giá trị trong expenses.
*/
let totalExpense = expenses.reduce((total, expense) => total + expense, 0);

console.log(`Tổng các giá trị trong expenses là: ${totalExpense}`)