const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

/*
2.1 Lọc các giá trị trong scores > 80. 
*/
let newScore = scores.filter(score => score > 80);

console.log(newScore);


/*
2.2 Lọc các giá trị trong ages ≥ 18.  
*/
let newAge = ages.filter(age => age >= 18);

console.log(newAge);


/*
2.3 Lọc các từ trong words có độ dài > 5.  
*/
let newWord = words.filter(word => word.length > 5);

console.log(newWord);