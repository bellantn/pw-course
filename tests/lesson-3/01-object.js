/*
1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
year=2021. Sau đó in ra năm sản xuất của xe.
*/
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}

console.log(car.year) // cách 1
console.log(car["year"]); // cách 2

/*
2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc
tính street, city, country). In ra tên đường của người này.
*/
let person = {
    name: "John",
    address: {
        street: "Nguyễn Đình Chiểu",
        city: "Hồ Chí Minh",
        country: "Việt Nam"
    }
}

console.log(person.address.street); // cách 1
console.log(person["address"]["street"]); // cách 2

/*
3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
object với 2 thuộc tính kiểu number: math và english
*/
let student = {
    name: "Mary",
    grades: {
        math: 9.5,
        english: 2
    }
}

console.log(student["grades"]["math"]);

/*
4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
volume, brightness. Thay đổi volume và in ra object mới.
*/
const settings = {
    volume: "medium",
    brightness: 75
}

settings.volume = "low";
console.log(settings);

/*
5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
*/
let bike = {
    model: "Hector",
    year: 2025
}

bike.color = "silver";
console.log(bike);

/*
6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi
object này
*/
let employee = {
    name: "Andy",
    age: 21
}

delete employee.age;
console.log(employee);

/*
7. Một trường học có các lớp học và học sinh như sau:
○ classA: An, Bình, Châu
○ classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
tên các học sinh
Vd:
const school = { classA: ["Giang"]...}
*/
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}

console.log(school);