# JAVASCRIPT
## Scope of variable - var & let
- var: scope is for global
```javascript
for (var i = 0; i < 5; i++) {
   console.log(i);
}

console.log(i);   // i = 5
```

- let: scope is in `{}`
```javascript
for (let i = 0; i < 5; i++) {
   console.log(i);
}

console.log(i);  // error: i is not defined
```

## Hoisting - var & let
- Hoisting: cơ chế default của Javascript để di chuyển tất cả các biến và các function khi mà khai báo lên đầu scope trước khi code được run
```javascript
console.log(a);
var a = 5; // undefined
```

```javascript
console.log(b);
let b = 5; // error: cannot access b
```
> => Sử dụng const hoặc let - tránh các lỗi khó phát hiện do phạm vi của biến và hoisting

---
## Advanced condition
- if ... else
```javascript
if (condition) {
    // run code when condition = true
} else {
   // run code when condition = false
}
```

- if ... else if ... if
```javascript
if (condition1) {
    // run code when condition1 = true
} else if (condition2) {
    // run code when condition2 = true
} else if (condition3) {
    // run code when condition3 = true
} else {
    // run code when all conditions = false
}
```

- switch ... case: khi cần kiểm tra các giá trị khác nhau của 1 biểu thức
```javascript
switch(bieu_thuc) {
    case gia_tri_1:
        // run code
        break;
    case gia_tri_2:
        // run code
        break;
    case gia_tri_3:
        // run code
        break;
    default:
        // run code when all cases = false    
}
```
```javascript
// ex: Kiem tra cac ngay trong tuan va in ra ten thu cua ngay
let ngay = 27;
switch (ngay) {
    case 26:
        console.log("Thu bay");
        break;
    case 27:
        console.log("Chu nhat");
        break;
    case 3:
        console.log("Thu hai");
        break;
    default:
        console.log("Ngay khong hop le");
}

// Output:
Chu nhat
```

---
## Comparison
- Equality Operator: `==` và `!=`
- Strict Equality Operator: `===` và `!==`

```javascript
const a = "5" === 5; // type & value
const b = "5" == 5; // value

console.log(a);   // false
console.log(b);   // true
```

```javascript
const c = "5" != 5; 

console.log(c); // false
```
- Compare `==` and `===`

| Biểu thức | Kết quả với == | Kết quả với === | Giải thích |
|----------|----------|----------|----------|
| `5 == "5"`    | true  | false   |  `==` chuyển đổi type, `===` thì không  |
| `0 == false`	 |  true | false | `==` chuyển đổi false thành 0 |
| `null == undefined`	 |  true | false | `==` xem chúng tương đương |
| `true == 1`	 |  true | false | `==` chuyển đổi true thành 1 |
| `0 == false`	 |  true | false | `==` chuyển đổi false thành 0 |
| `5 === 5`	 |  true | true | Type và value giống nhau | 

---
## Advanced loop
- `for ... in`: lặp các thuộc tính trong object & truy cập đến những index trong array (dùng với object nhiều hơn)

**For Object**
```javascript
let products = {
    Banana: 20,
    Apple: 30,
    Orange: 15
}

for (let property in products) { // biến chứa tất cả thuộc tính của object
    console.log(property);   // Banana    Apple    Orange
}

console.log(products.Banana);    // 20
console.log(products["Banana"]);    // 20
console.log(products[property]);    // 20   30   15
// console.log(product.property); -> khai báo biến mới property trong object và tự động gán giá trị 'undefined'
```

**For Array**
```javascript
const arr = ["a", "b", "c"];

for (let i in arr) {
    console.log(i);         // 0   1   2
    console.log(arr[i]);    // a   b   c
}
```

---
- `forEach`: dùng nhiều cho array, lấy cả **value và index** ra mà không cần dùng đến logic nào cả
**Structure**
```javascript
array.forEach((value, index) => {
    // code here
})
```

**Example**
```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((value) => {
    console.log(value);   // Apple   Banana   Orange
})

---

fruits.forEach((value, index) => {
    console.log(`Trai cay o vi tri ${index} la ${value}`); 
})

// Trai cay o vi tri so 0 la Apple
// Trai cay o vi tri so 1 la Banana
// Trai cay o vi tri so 2 la Orange
```

---
- `for ... of`: dùng cho array, dùng để lặp qua các **phần tử** của mảng
**Structure**
```javascript
for (const value of arr) {
    // code here
}
```

**Example**
```javascript
const colors = ["Red", "Blue", "Black"];

for (const color of colors) {
    console.log(color);    // Red    Blue    Black
}
```

**Example: String is also an array**
```javascript
const str = "BELLA";

for (let i = 0; i < str.length(); i++) {
    console.log(str[i]);
}

//result
B
E
L
L
A
```

---
- `continue`: bỏ qua vòng lặp & chạy đến vòng lặp tiếp theo. Nếu gặp `continue` - sẽ bỏ qua các đoạn code chạy bên dưới và chạy tiếp vòng lặp tiếp theo
```javascript
for (let i = 0, i <=5, i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);    // 1  3  5 -> thoã điều kiện if mới continue chạy tiếp vòng lặp, không thoã sẽ không gặp continue -> thoát ra chạy dòng console.log tiếp theo
}
```

---
- `break`: gặp `break` sẽ thoát ra khỏi vòng lặp luôn & KHÔNG chạy dòng code tiếp theo
```javascript
const arr = [11, 22, 55];

for (let i = 0, i < arr.length, i++) {
    if (arr[i] % 2 === 0) {
        break;
    }
    console.log(arr[i]);  // 11 -> i = 1 không thoả điều kiện nên chạy dòng tiếp theo là console.log rồi chạy tiếp vòng lặp for, qua vòng lặp thứ 2 là i = 22 thì thoả điều kiện if nên gặp `break` & thoát ra khỏi vòng lặp luôn
}
```

---
## String utils function
- `trim()`: lọại bỏ khoảng trắng ở đầu cuối (space, tab, ...)
```javascript
let str = "   K16 Playwright is awesome!    ";
console.log(str);  // Output:   K16 Playwright is awesome!    
str = str.trim();
console.log(str);  // Output: K16 Playwright is awesome!

---
console.log(str.trimStart()); // Output: K16 Playwright is awesome!    
console.log(str.trimEnd()); // Output:   K16 Playwright is awesome!
```

---
- `toLowerCase()` & `toUpperCase()`: convert ký tự in hoa thành chữ thường & ngược lại
```javascript
const str = "Hello World!";
console.log(str.toLowerCase()); // Output: "hello world!"
console.log(str.toUpperCase()); // Output: "HELLO WORLD!"
```

---
- `include()`: kiểm tra xem 1 chuỗi có chứa chuỗi con hay không, trả ra kiểu boolean
```javascript
let str = "   Javascript is awesome!    ";

console.log(str.includes("awesome")); // Output: true
console.log(str.includes("Awesome")); // Output: false
```

---
- `replace()`: dùng để thay thế 1 chuỗi con bằng 1 chuỗi khác trong 1 chuỗi
```javascript
let str = "   Javascript is awesome!    ";

str = str.replace("awesome", "fun");
console.log(str); // Output: Javascript is fun!
```

---
- `split()`: chia 1 chuỗi thành 1 mảng gồm nhiều chuỗi con
```javascript
let str = "   Javascript is awesome!    ";

let words = str.split(" ");
console.log(words); // Output: ['', '', '', 'Javascript', 'is', 'awesome!', '', '', '', '']
```

```javascript
const emails = "emailA@gmail.com, emailB@gmail.com";

const newEmails = emails.split(".");
console.log(newEmails);  // Output: ['emailA@gmail', 'com, emailB@gmail', 'com']
```

---
- `substring()`: trả về 1 phần của chuỗi, từ 1 index được chỉ định đến 1 index hoặc đến cuối chuỗi
```javascript
let str = "Hello World!";

console.log(str.substring(0, 5)); // Output: Hello
console.log(str.substring(6, 11)); // Output: World
console.log(str.substring(6)); // Output: World!
```

---
- `indexOf()`: trả về vị trí xuất hiện của 1 chuỗi con trong 1 chuỗi, trả về -1 nếu không tìm thấy
```javascript
let str = "Hello World!";

console.log(str.indexOf("World")); // Output: 6 (vi tri so 6)
console.log(str.indexOf("JS")); // Output: -1 (không tìm thấy)
```

---
## Array utils function
- `map()`: tạo ra mảng mới bằng cách áp dụng 1 hàm lên từng phần tử trong mảng gốc
```javascript
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * 2);

console.log(squared); // Output: [2, 4, 6, 8]
```

---
- `filter()`: tạo ra mảng mới chỉ bao gồm những phần tử thoả mãn cái điều hiện được chỉ định trong hàm
```javascript
let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

---
- `find()`: trả về giá trị của phần tử đầu tiên trong mảng thoả mãn điều kiện ở trong hàm callBack, không có gía trị sẽ trả về Undefined
```javascript
let numbers = [1, 2, 3, 4];
let firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // Output: 2
```

---
- `reduce()`: áp dụng hàm lên từng phần tử của mảng, theo thứ tự từ trái qua phải, để trả về 1 giá trị duy nhất
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0); 
/*
- total: biến nhận giá trị duy nhất
- num là phần tử của mảng 
- 0 là giá trị khởi tạo cho biến total
*/

console.log(sum); // Output: 10
```

---
- `some()`: kiểm tra có **ít nhất 1 phần tử** thoả mãn điều kiện được chỉ định trong hàm, trả về kiểu boolean (kiểm tra 1 vài)
```javascript
let numbers = [1, 2, 3, 4];
let hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven); // Output: true
```

---
- `every()`: kiểm tra **tất cả phần tử** có thoả mãn điều kiện được chỉ định trong hàm, trả về kiểu boolean (kiểm tra hết)
```javascript
let allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // Output: false
```

---
- `push()`: đẩy phần tử vào cuối của mảng
```javascript
let numbers = [1, 2, 3, 4];

numbers.push(5, 6, 7);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]
```

---
- `unshift()`: thêm một hoặc nhiều phần tử vào đầu của mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc
```javascript
let numbers = [1, 2, 3, 4];

numbers.unshift(5, 6, 7);
console.log(numbers); // Output: [5, 6, 7, 1, 2, 3, 4]
```

---
- `slice()`: cắt 1 phần mảng và trả về mảng mới (dùng để thêm phần tử vào 1 vị trí cụ thể - cách làm: cắt mảng làm đôi, insert vào giữa, và nối lại thành mảng)
```javascript
let numbers = [1, 2, 4, 5];

let index = 2;
let newNumbers = [
    ...number.slice(0, index),
    3,
    ...number.slice(index)
];
console.log (newNumbers); // Output: [1, 2, 3, 4, 5] - thêm số 3 vào index thứ 2 của mảng
```

---
- `shift()`: loại bỏ phần tử đầu tiên của mảng, sẽ trả về phần tử bị loại đó, phương thức này làm thay đổi độ dài của mảng
```javascript
let numbers = [1, 2, 3, 4];
let firstElement = numbers.shift();

console.log(firstElement); // Output: 1
console.log(numbers); // Output: [2, 3, 4]
```

- `sort()`: sắp xếp phần tử của mảng theo thứ tự tăng dần/giảm dần, hoặc theo hàm so sánh được cung cấp, làm thay đổi mảng ban đầu
```javascript
// sort mặc định: đổi phần tử thành chuỗi (Unicode - ASCII / UTF-16) rồi so sánh
let numbers = [1, 10, 12, 5, 6];
console.log(numbers.sort()); // Output: [1, 10, 12, 5, 6] -> chỉ chuyển thành chuỗi

---

let numbers = ["a", "w", "5", "b"];
console.log(numbers.sort()); // Output: ['5', 'a', 'b', 'w']
```

```javascript
// giảm dần
numbers.sort((a, b) => b - a);
/*
- b - a = negative => b < a -> a đứng trước b
- b - a = positive => b > a -> b đứng trước a
*/
console.log(numbers); // Output: [12, 10, 6, 5, 1] -> dùng biểu thức thì mảng không bị biến thành chuỗi, mà đi so sánh luôn 
```

```javascript
// tăng dần
numbers.sort((a, b) => a - b); 
/*
- a - b = negative => a < b -> a đứng trước b
- a - b = positive => a > b -> b đứng trước a
*/
console.log(numbers); // Output: [1, 5, 6, 10, 12]
```



