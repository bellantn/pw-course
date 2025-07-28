const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

/*
1.1 Kiểm tra tất cả giá trị trong scores có > 70 không. 
*/
let checkScore = scores.every(score => score > 70);

console.log(checkScore);


/*
1.2 Kiểm tra tất cả giá trị trong ages có > 15 không. 
*/
let checkAge = ages.every(age => age > 15);

console.log(checkAge);


/*
1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không. 
*/
let checkWord = words.every(word => word.length > 3);

console.log(checkWord);
