# DESCRIPTION
In the pw-course repository, create a folder named lesson-3. Add a file named key-takeaways.txt to it, listing the knowledge and concepts you learned in session 3

# KEY TAKEAWAYS
## Git 
### Undo actions
- `git commit --amend`: edit the commit message with text editor
- `git commit --amend -m "message"`: edit the commit message without needing an editor, the new message `"message"` replaces the previous commit message immediately
- `git restore --staged <file>` : unstage a file from Staging Area to Working Directory
- `git reset HEAD~1` : undo the last commit from Local Repository to Working Directory
```
ex:
C1: git commit -m "add file1, file2"
C2: git commit -m "add file3"
C3: git commit -m "add file4"
--
git reset HEAD~1   //undo C3
git add file4   //add file4 to Staging Area
git restore --staged file4   //remove file4 from Staging Area, move it back to an "unstaged" state
```

### Branching model
- `git branch <ten_branch>` : create a new branch with name <ten_branch> & NOT switch to it (still remain on current branch)
- `git checkout <ten_branch>` : switch to an existing branch <ten_branch>
- `git checkout -b <ten_branch>` : create a new branch with name <ten_branch> & switch to it in one command
```
Tips: Always create a new branch before executing a command copied from the internet
```
### GitIgnore
- `.gitignore` = GitIgnore : include files or directories that Git should ignore
```
Example .gitignore File:

password.txt   //file name
security/     //folder name
```



## Javascript basic
### Conventions
| Conventions | Usage |
|----------|----------|
| snake_case    |   | 
| kebab-case    |  file name | 
| camelCase    |  variable name  | 
| PascalCase    | class name  | 


### Format of console.log
- `console.log` with `'` and `"`
```
console.log('Toi la Bella');
```

```
console.log("Toi la Trang");
```

```
console.log("Toi la Trang");
```

```
let name = Bella;

console.log(`Toi ten la ${name}`);        //Toi ten la Bella
console.log("Toi ten la " + name + "");   //Toi ten la Bella
```


### Object and array
- **Structure** 
```
let/const <ten_object> = {
    <thuoc_tinh>: <gia_tri>,
}
```
- **Example**
```
let user = {"name": Bella, "age": 31, "email": "bellantn93@gmail.com"};

console.log("name = " + user.name);      //name = Bella
```
```
const product = {
    "name": "laptop",
    "price": 500,
    "isWindow": false,
    "manufacturer": {
        "name": "Apple",
        "year": 2024
    }
}

console.log("manufacturer name = " + product.manufacturer.name);      //manufacturer name = Apple
console.log("price = ",product["price"]);        //price = 500
```

- **Modify existing properties** - *Note: Even with `const`, you can modify the contents of the object because `const` only ensures the variable binding cannot change*
```
user.age = 21;
product["manufacturer"]["year"] = 2025;

product = {"name": "macbook"};    //error
```
- **Delete object's attributes**
```
let employee = {
    name: 'Le Van C',
    age: 30,
    department: 'HR'
};

delete employee.age;
console.log(employee);

Output:
{name: 'Le Van C', department: 'HR'}
```

### Logical operation
- `&&` - cả 2 vế của mệnh đề `đều` đúng
- `||` - `một trong` 2 vế đúng
- `!` - đảo `ngược` lại giá trị của mệnh đề
### Array
- Create
```
const favoriteColors = ["Orange", "Blue", "Black", "White"];
```
- Access using index
```
console.log(favoriteColors[0]);    //Orange
```
- Return the number of elements using `length`
```
console.log(favoriteColors.length);     //4
```
- Interate with `for`
```
for (let i = 0; i < favoriteColors.length; i++) {
    console.log (favoriteColors[i]);
}

Output: 
Orange
Blue
Black
White
```
### Function
- Structure
```
function <nameFunction>() {
    // code
}
```

### Scope of variable


### Advance condition

## Git
`git checkout <revision>` - to revert to a specific revision
```
git checkout 070745d6c000d2a90740dcf97ee5db3f9418cc1f
```