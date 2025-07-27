# GIT 
## Undo actions
- `git commit --amend`: edit the most recent commit and its message with text editor
- `git commit --amend -m "message"`: edit the commit message without needing an editor, the new message `"message"` replaces the previous commit message immediately
- `git restore --staged <file>` : unstage a file from Staging Area to Working Directory
- `git reset HEAD~1` : undo the last commit from Local Repository to Working Directory
```javascript
// ex:
C1: git commit -m "add file1, file2"

C2: git commit -m "add file3"

C3: git commit -m "add file4"
--

git reset HEAD~1   // undo C3

git add file4   // add file4 to Staging Area

git restore --staged file4   // remove file4 from Staging Area, move it back to an "unstaged" state
```

---
## Branching model
- `git branch <branch_name>` : create a new branch with name <branch_name> & **NOT** switch to it (still remain on current branch)
- `git checkout <branch_name>` : switch to an existing branch <branch_name>
- `git checkout -b <branch_name>` : create a new branch with name <branch_name> & switch to it in one command

```
Tips: Always create a new branch before executing a command copied from the internet
```

---
## Checkout to a revision
- `git checkout <revision>` - to revert to a specific revision
```javascript
// ex:
commit a4edc4d5c2c17e1bb47c8d3b10efb74721412d4b (HEAD -> main, origin/main)
Author: PW-Bella <bellantn93@gmail.com>
Date:   Sun Jul 20 13:59:44 2025 +0700

    feat: add js exercises of lesson-2

--
git checkout a4edc4d5c2c17e1bb47c8d3b10efb74721412d4b
```

---
## GitIgnore
- `.gitignore` = GitIgnore : include files or directories that Git should ignore
```javascript
// ex: 
.gitignore file:

password.txt   // file name
security/     // folder name
```

---
# JAVASCRIPT BASIC
## Conventions
| Conventions | Usage |
|----------|----------|
| snake_case    |   | 
| kebab-case    |  file name | 
| camelCase    |  variable name  | 
| PascalCase    | class name  | 

---
## Format of console.log
- `console.log` with `'` and `"`
```javascript
console.log('Toi la Bella');
console.log("Toi la Trang");
```

```javascript
let name = Bella;

console.log(`Toi ten la ${name}`);        // Toi ten la Bella
console.log("Toi ten la " + name + "");   // Toi ten la Bella
```

---
## Object
- **Structure** 
```javascript
let/const <ten_object> = {
    <thuoc_tinh>: <gia_tri>,
}
```
- **Example**
```javascript
let user = {"name": Bella, "age": 31, "email": "bellantn93@gmail.com"};

console.log("name = " + user.name);      // name = Bella
```
```javascript
const product = {
    "name": "laptop",
    "price": 500,
    "isWindow": false,
    "manufacturer": {
        "name": "Apple",
        "year": 2024
    }
}

console.log("manufacturer name = " + product.manufacturer.name);      // manufacturer name = Apple

console.log("price = " + product["price"]);        // price = 500

console.log("manufacturer year = " + product["manufacturer"]["year"]);      // manufacturer year = 2024
```

- **Modify existing properties** - *Note: Even with `const`, you can modify the contents of the object because `const` only ensures the variable binding cannot change*
```javascript
const student = {
    name: "Bella",
    age: 32,
}

student.age = 21;    // OK
student = {"name": "Alex", "age": 21};    // error
```

- **Add object's attributes**
```javascript
let bike = {
    make: 'Yamaha',
    model: 'YZF-R3'
};

bike.color = "Blue";
bike["price new"] = 100;

console.log(bike);

--Output:
{make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}
```

- **Delete object's attributes**
```javascript
let employee = {
    name: 'Le Van C',
    age: 30,
    department: 'HR'
};

delete employee.age;
console.log(employee);

--Output:
{name: 'Le Van C', department: 'HR'}
```

---
## Logical operation
- `&&` - cả 2 vế của mệnh đề `đều` đúng
- `||` - `một trong` 2 vế đúng
- `!` - đảo `ngược` lại giá trị của mệnh đề

```javascript
const a = true;
const b = false;

let c = a && b;
let d = a || b;

console.log(c); // false
console.log(d); // true

let e = !c;

console.log(e); // true
```

---
## Array
- **Create an array**
```javascript
const favoriteColors = ["Orange", "Blue", "Black", "White", false, 200];
```
- **Access the array using index**
```javascript
console.log(favoriteColors[0]);    // Orange
```
- **Return the number of elements using `length`**
```javascript
console.log(favoriteColors.length);     // 6
```
- **Integrate with `for`**
```javascript
for (let i = 0; i < favoriteColors.length; i++) {
    console.log (favoriteColors[i]);
}

--Output: 
Orange
Blue
Black
White
false
200
```

- **Retrieve the index of an element: `indexOf`**
```javascript
console.log(favoriteColors.indexOf("Black")); // 2
console.log(favoriteColors.indexOf("Red")); // -1
```

- **Add elements to the array: `push`**
```javascript
const arr = [1, 2];
arr.push(3);

console.log(arr);

--Output:
[1, 2, 3]
```

---
## Function
- **Structure**
```javascript
function <nameFunction>() {
    // code
}
```

- **Function không có parameter, không có return**
```javascript
function sayHello() {
  console.log("Hello, world!");
}

sayHello(); // Gọi hàm, in ra "Hello, world!"
```

- **Function không có parameter, có return**
```javascript
function getGreeting() {
  return "Hello, world!";
}

const greeting = getGreeting(); // Gọi hàm và dùng biến để hứng giá trị trả về

console.log(greeting); // In ra: "Hello, world!"
```

- **Function có parameter, không có return**
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Bella); // Gọi hàm và truyền tham số vào, in ra: "Hello, Bella!"
```

- **Function có parameter, có return**
```javascript
function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(5, 10); // Gọi hàm và lưu giá trị trả về

console.log(sum); // In ra: 15
```
