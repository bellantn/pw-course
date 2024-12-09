// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10
const student1 = {
  name: "Alex",
  age: 10,
};

for (let property in student1) {
  console.log(`${property} = ${student1[property]}`);
}

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20).
const student2 = {
  name: "Alex",
  age: 10,
  salary: 20,
};
let sum = 0;
for (let property in student2) {
  if (typeof student2[property] === "number") {
    sum += student2[property];
  }
}
console.log("Tổng các giá trị số của các thuộc tính: ", sum);

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]
const student3 = {
  name: "Alex",
  age: 10,
};

const arr = [];
for (let property in student3) {
  arr.push(property);
}
console.log("Mảng chứa tất cả các tên thuộc tính của đối tượng: ", arr);
