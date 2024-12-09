# DESCRIPTION

In the pw-course repository, create a folder named lesson-3. Add a file named key-takeaways.txt to it, listing the knowledge and concepts you learned in session 4

# KEY TAKEAWAYS

## Javascript

### Scope of variable - var & let
- var: scope is for global
```
for (var i = 0; i < 5; i++) {
   console.log(i);
}

console.log(i);   // i = 5
```

- let: scope is in `{}`
```
for (let i = 0; i < 5; i++) {
   console.log(i);
}

console.log(i);  // error: i is not defined
```

### Advanced condition
- if ... else
```
if (condition) {
    // run code when condition = true
} else {
   // run code when condition = false
}
```

- if ... else if ... if
```
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
```
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
```
Example: Kiem tra cac ngay trong tuan va in ra ten thu cua ngay
---
let ngay = 2;
switch (ngay) {
    case 1:
        console.log("Thu hai");
        break;
    case 2:
        console.log("Thu ba");
        break;
    case 3:
        console.log("Thu tu");
        break;
}
```


### Comparison
- Equality Operator: `==` và `!=`
- Strict Equality Operator: `===` và `!==`

```
const a = "5" === 5; // type & value
const b = "5" == 5; // value

console.log(a);   // false
console.log(b);   // true
```

```
const c = "5" != 5; 

console.log(c); // false
```
- Compare `==` and `===`

| Biểu thức | Kết quả với == | Kết quả với === | Giải thích |
|----------|----------|----------|----------|
| `5 == "5"`    | true  | false   |  `==` chuyển đổi type, `===` thì không  |
| `0 == false`	 |  true | false | `==` chuyển đổi false thành 0 |
| `null == undefined`	 |  true | false | `==` xem chúng tương đương |
| `true == 1`	 |  true | false | `==` chuyển đổi true bằng 1 |
| `0 == false`	 |  true | false | `==` chuyển đổi false thành 0 |
| `5 === 5`	 |  true | true | Type và value giống nhau | 

### Advanced loop
- for ... in: lặp các thuộc tính trong object & truy cập đến những index trong array

**For Object**
```
let products = {
    Banana: 20,
    Apple: 30,
    Orange: 15
}

for (let property in products) {
    console.log(property);   // Banana    Apple    Orange
}

console.log(products.Banana);    // 20
console.log(products["Banana"]);    // 20
console.log(products[property]);    // 20   30   15
```

- forEach

**Structure**
```
array.forEach((value, index) => {
    // code here
})
```

**Example**
```
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

- for ... of

**Structure**
```
for (const value of arr) {
    // code here
}
```
**Example**
```
const colors = ["Red", "Blue", "Black"];

for (const color of colors) {
    console.log(color);    // Red    Blue    Black
}
```
**Example: String is also an array**
```
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

- continue
```
for (let i = 0, i <=5, i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);    // 1  3  5 -> thoã điều kiện if mới continue chạy tiếp vòng lặp, không thoã sẽ thoát ra chạy dòng console.log tiếp theo
}
```

- break
```
const arr = [11, 22, 55];

for (let i = 0, i < arr.length, i++) {
    if (arr[i] % 2 === 0) {
        break;
    }
    console.log(arr[i]);  // 11 -> thoả điều kiện if nên break luôn thoát ra khỏi vòng lặp luôn - rồi chạy dòng tiếp theo là console.log, không thoả điều kiện thì chạy tiếp vòng lăp for 
}
```
