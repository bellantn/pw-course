
# DESCRIPTION
In the pw-course repository, starting from lesson 1, create a markdown file in the lesson 2 folder to summarize all the knowledge

# KEY TAKEAWAYS
## Version Control System
VCS (Version Control System):
 - Local
 - Centralized
 - Distributed 

## Git
### Git & GitHub

| Git | GitHub |
|----------|----------|
| Là một phần mềm    | Là một dịch vụ web  | 
| Cài trên máy của bạn    | Host trên website  | 
| Là một commandline tool    | Là công cụ có giao diện  | 
| Là công cụ quản lý phiên bản, đưa file vào Git repository    | Là nơi để upload Git repository lên  | 
| Có các tính năng của VSC    | Có các tính năng của VSC và một số tính năng khác  | 

### Git - three states

- **Working Directory**: The current state of your files on your local machine (e.g. edit a file called example.txt, but it hasn't been added to the staging area)
- **Staging Area**: A temporary storage area where changes are prepared to be committed
- **Repository**: All commits or changes are safe and part of your version history

*Summary of Workflow*
- Modify files in the **Working Directory**
- Use `git add` to stage changes into the **Staging Area**
- Use `git commit` to save staged changes to the **Git Repository**

### Git - key takeaways 
#### Common command

| Description | Command | Note |
|----------|----------|----------|
| Initialize an empty Git repository in project directory (local repo)    | `git init` |         |
| Config for a specific repo    | `git config user.name "yourname"`  |         | 
| Config for all repo    | `git config --global user.name "yourname"`  |          |
| Add a file to staging   | `git add <path to file>`  |          |
| Add all files to staging   | `git add .` |         |
| Check file status   | `git status` | Files in **green**: located on **Staging Area**, Files in **red**: located on **Working Directory**        |
| Commit the changes with a message   | `git commit -m "message"` |         |
| Check commit history   | `git log` |         |

#### Git convention
**Commit message** 
```
<type>: <short_description>
```
**type**: type of commits
- chore: minor edits, spelling corrections, deleting unused files,...
- feat: add new feature, new test case
- fix: fix a bug in a previous test

**short description**: short description (50 characters), in English or Vietnamese

## Javascript basic
### Print "Hello World"
1. Create file: `01-hello.js`
2. Add code to file: `console.log("Hello World!");`
3. Run this command: `node lesson-2/javascript/01-hello.js`

-> Output: 
```
Hello World!
```
### Variable
```
var firstName = "Playwright";
let lastName = "Automation class";
```
- `var` khai báo lại được, `let` thì không
```
var firstName = "Bella";
var firstName = "Trang"; //OK

let firstName = "Bella";
let firstName = "Trang"; //error
```

- `var`: global scoped & `let`: block scoped {...}
- `const` để khai báo các giá trị không thể thay đổi, dùng khi biến không gán lại được
```
const name = "Bella";
console.log (name);
name = "Trang"; //error
```

### Data types
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
const name = "Bella";
const isLearningPlaywright = true;
const price = 200;
```


### Comparison operator
- So sánh hơn kém: `>`, `<`
- So sánh bằng: `==`, `===`, `!=`, `!==`, `>=`, `<=`

```
ex:
const a = 10;
const b = "10";
const c = 11;

console.log (a === b); //false - so sánh value & data type
console.log (a == b); //true - so sánh value only
console.log (a == c); //false
```

### Unary operator
- `i++` = `i+1`
- `i--` = `i-1`

```
ex:
let i = 10
i = i + 1 //i=11
console.log (i++) //i=12
```

### Arithmetic operator
- Tính toán giá trị biểu thức
- Các phép tính: `+`, `-`, `*`, `/`


### Conditional
- Structure: `if (<điều kiện>) {//code}`
- Example:
```
const tuoiBa = 40;
const tuoiMe = 38;

if (tuoiBa > tuoiMe){
    console.log ("Ba lớn hơn Mẹ")
}
```


### Loops
- Structure: `for (<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {//code}`
- Example:
```
for (let i = 1; i <= 10; i++){
    console.log ("Gía trị của i là: ", i);
}
```

## VSCode
- Format code: `Option + Shift + F`