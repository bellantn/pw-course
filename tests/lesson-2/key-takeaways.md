# VERSION CONTROL SYSTEM
VCS: Hệ thống quản lý các phiên bản
- Local: lưu ở máy cá nhân
- Centralize: lưu ở một máy chủ tập trung
- Distributed: lưu ở nhiều máy khác nhau

---
# GIT
## Git & GitHub
| Git | GitHub |
|----------|----------|
| Là một phần mềm    | Là một dịch vụ web  | 
| Cài trên máy của bạn    | Host trên website  | 
| Là một commandline tool    | Là công cụ có giao diện  | 
| Là công cụ quản lý phiên bản, đưa file vào Git repository    | Là nơi để upload Git repository lên  | 
| Có các tính năng của VCS    | Có các tính năng của VCS và một số tính năng khác  | 

---
## Git - three states
- **Working Directory**: The current state of your files on your local machine (e.g. edit a file called example.txt, but it hasn't been added to the staging area)
- **Staging Area**: A temporary storage area where changes are prepared to be committed
- **Repository**: All commits or changes are safe and part of your version history

*Summary of Workflow*
- Modify files in the **Working Directory**
- Use `git add` to stage changes into the **Staging Area**
- Use `git commit` to save staged changes to the **Git Repository**

---
## Common commands
| Description | Command | Note |
|----------|----------|----------|
| Initialize an empty Git repository in project directory (local repo)    | `git init` |         |
| Config for a specific repo    | `git config user.name "yourname"`  |         | 
| Config for all repos    | `git config --global user.name "yourname"`  |          |
| Add a file to staging   | `git add <path_to_file>`  |          |
| Add all files to staging   | `git add .` |         |
| Check file status   | `git status` | Files in **green**: located on **Staging Area**, Files in **red**: located on **Working Directory**        |
| Commit the changes with a message   | `git commit -m "message"` |         |
| Check commit history   | `git log` |         |

---
## Commit convention
```
<type>: <short_description>
```

**type**: types of commit:
- chore: minor edits, spelling corrections, deleting unused files,...
- feat: add new feature, new test case
- fix: fix a bug in a previous test

**short description**: short description (50 characters), in English or Vietnamese

---
# JAVASCRIPT BASIC
**To run a JS file**
```
node <path_to_file>
```

---
## Hello World
```
console.log("<message>");

console.log(<variable_name>);

// ex: 
console.log("My name is: " + firstName);

console.log("My name is: ", firstName);
```

---
## Variable
```
var firstName = "Playwright";
let lastName = "Automation class";
```

- `var` khai báo lại được, `let` thì không
```
// ex:
var firstName = "Bella";
var firstName = "Trang"; // OK

let firstName = "Bella";
let firstName = "Trang"; // error
```

- `var`: global scoped & `let`: block scoped {...}
- `const` để khai báo các giá trị không thể thay đổi, dùng khi biến không gán lại được
```
// ex:
const name = "Bella";
console.log (name);
name = "Trang"; // error
```

---
## Data types
| Type | Value |
|----------|----------|
|  String   | `"Bella"`, `"Playwright"`    |
|  Number   |   `100`, `0`, `10.5`, `-10.5`  |
|  Boolean   |   `true`, `false`  |
|   Bigint  |     |
|   Undefined  |     |
|   Null  |     |
|   Symbol  |     |
|   Object  |     |

```
// ex:
const name = "Bella";
const isLearningPlaywright = true;
const price = 200;
```

---
## Comparison operator
- So sánh hơn kém: `>`, `<`
- So sánh bằng: `==`, `===`, `!=`, `!==`, `>=`, `<=`

```
// ex:
const a = 10;
const b = "10";
const c = 11;

console.log (a === b); // false - so sánh value & data type
console.log (a == b); // true - so sánh value only
console.log (a == c); // false
```

---
## Unary operator
- `i++` = `i+1`
- `i--` = `i-1`

```
// ex:
let i = 10
i = i + 1 // i = 11
console.log(i++) // i = 12
```

---
## Arithmetic operator
- Tính toán giá trị biểu thức
- Các phép tính: `+`, `-`, `*`, `/`
- **Ứng dụng:** `%` để trả về phần dư của phép tính
```
// ex:
3%3 = 0 // 3 chia hết cho 3 dư 0
3%2 = 1 // 3 không chia hết cho 2, dư 1
3%1 = 0 // 3 chia hết cho 1 dư 0
1%2 = 1 // 1 không chia hết cho 2, dư 1
100%80 = 20 // 100 không chia hết cho 80, dư 20
```

- **Ứng dụng:** tìm số chẵn - lẻ
```
// ex:
if (x % 2 === 1) {
    console.log("x là số lẻ")
};

if (x % 2 === 0) {
    console.log("x là số chẵn")
};
```

- Nối chuỗi với toán tử `+`
```
// ex:
const str1 = "Hello";
const str2 = "Playwright Viet Nam";

console.log(str1 + str2); // HelloPlaywright Viet Nam
```

---
## Conditional
- Structure: `if (<điều kiện>) { // code }`

```
// ex:
const tuoiBa = 40;
const tuoiMe = 38;

if (tuoiBa > tuoiMe) {
    console.log ("Ba lớn hơn Mẹ")
}
// result: Ba lớn hơn Mẹ
```

---
## Loops
- Structure: `for (<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) { // code }`

```
// ex:
for (let i = 1; i <= 10; i++) {
    console.log ("Gía trị của i là: ", i);
}
```

# VISUAL STUDIO CODE
- Format code: `Option + Shift + F`