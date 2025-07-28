const student = {
    "name": "Alex",
    "age": 10,
    "salary": 20
};


/*
1. In tên và giá trị mỗi thuộc tính của student
*/
for (let property in student) {
    console.log(`${property} is ${student[property]}`);
}


/*
2. Tính tổng các giá trị số trong student
*/
let valueArr = [];

for (let property in student) {
    if (typeof student[property] === "number") {
        valueArr.push(student[property]);
    }
}

let sum = valueArr.reduce((total, num) => total + num, 0);
console.log(`Tổng các giá trị số trong student là ${sum}`);


/*
3. Tạo mảng chứa tên các thuộc tính của student
*/
let propertyArr = [];

for (let property in student) {
    propertyArr.push(property);
}

console.log(propertyArr);