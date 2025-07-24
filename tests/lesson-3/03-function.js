/*
1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với
2 cặp giá trị khác nhau.
*/
function multiply(a, b) {
    console.log(a * b);
}

multiply(11, 12);
multiply(0, 10233);

/*
2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả
với 2 bộ số khác nhau.
*/
function findMin(a, b, c) {
    let arr = [a, b, c];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arr1 = [4, 56, 3];
console.log(`Giá trị nhỏ nhất trong dãy ${arr1} là ${findMin(4, 56, 3)}`);

let arr2 = [-35, 14050, 35];
console.log(`Giá trị nhỏ nhất trong dãy ${arr2} là ${findMin(-35, 14050, 35)}`);

/*
3. Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả.
*/
let students = [
    { name: "Tom", score: 9.5 },
    { name: "Jerry", score: 10 },
    { name: "Mickey", score: 9 },
    { name: "Donald", score: 8 },
    { name: "Daisy", score: 5.5 },
];

let topStudents = [];

function getTopStudents(students, threshold) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}

console.log(`Danh sách học sinh có điểm top là: ${getTopStudents(students, 9)}`);

/*
4. Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả.
*/
function calculateInterest(principal, rate, years) {
    return principal + principal * rate * years / 100;
}

let total = calculateInterest(50000000, 6.5, 0.5);
console.log(`Tổng số tiền sau khi gửi 50 triệu đồng trong 6 tháng là ${total}`);