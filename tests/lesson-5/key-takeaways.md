# FUNCTION ADVANCE
## Lambda function (Arrow function)
- Structure
```javascript
(parameters) => {
    // code here
}
```
> *Note: dùng cho function ít logic*

- Examples
```javascript
// Có parameter
const product = (a, b) => {
    return a * b;
}

console.log(product(4, 5)) // Output: 20
```

```javascript
// Không có parameter
const greet = () => {
    console.log("Hello K16");
}

greet (); // Output: Hello K16
```

```javascript
let numbers = [1, 2, 3, 4, 5];
let result = number.map (num => num * 4);

console.log(result); // Output: [4, 8, 12, 16, 20]
```
> *Note: ít sử dụng, dùng cho function ít logic, phức tạp quá không nên dùng, code sẽ rối*

---
## Anonymous functions
- Structure
```javascript
function (parameters) {
    // code here
}
```

> *Note: hàm không có tên, thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác*

- Examples
```javascript
let greet = function () {
    console.log("Hello K16");
}

greet(); // Output: Hello K16
```

---
# DOM
## DOM = Document Object Model
- Thẻ mở - thẻ đóng: 
```
<option>United States</option> 
- Open tag: <option
- Close tag: /option>
- Text: United States


<option value="usa">United States</option>
- Open tag: <option
- Close tag: /option>
- Property: value
- Value: "usa"
- Text: United States
```

- Thẻ tự đóng
```
<img src="image.jpg" alt="Image description"/>

<br>
```

---
**Common HTML tags**
1. Thẻ cấu trúc (Structural Tags)
- `<div>` (viết tắt của devide): chia các khối nội dung trong trang web 

2. Thẻ định dạng văn bản (Text Content Tags)
- `<h1></h1>` đến `<h6></h6>`(viết tắt của heading): tạo ra các header phân cấp theo thứ tự từ lớn đến bé
- `<ul>`: Danh sách không thứ tự (bullet points)
- `<ol>`: Danh sách có thứ tự (số thứ tự)
- `<li>`: Mục trong danh sách

3. Thẻ biểu mẫu (Form Tags)
- `<form></form>`: chứa 1 biểu mẫu thông tin
- `<input>`: chứa trường nhập dữ liệu: **text, email, radio, checkbox, file, color, range, date**
- `<textarea>`: khung nhập văn bản dạng to, nhiều dòng
- `radio button`: tạo nút chọn một trong 2 & không click vào để uncheck được (radio)
- `<checkbox>`: tạo nút chọn nhiều chọn lựa, có thể uncheck được (checkbox)
- `<list>` & `<dropdown>`: hiển thị danh sách và menu thả xuống
- `<select>` và `<option>`: danh sách thả xuống và lựa chọn trong danh sách thả xuống
- `<button>`: tạo nút bấm
- `<data picker>`: tạo bộ chọn ngày (có `type="date"`)
- `<slider>`: tạo thanh trượt (có `type="range"`)

4. Thẻ bảng (Table Tags)
- `<table>`: hiển thị bảng dữ liệu
- `<thead>`: phần đầu bảng
- `<th>`(table heading): ô tiêu đề trong bảng - in đậm căn giữa

- `<tbody>`: phần thân bảng
- `<tr>` (table row): dòng trong bảng
- `<td>` (table data): ô trong bảng

5. Thẻ nhúng (Embedded Content Tags)
- `<img>`: Chèn hình ảnh.
- `<iframe>`: Nhúng nội dung từ một trang web khác. (có `src="url"`)


---
# SELECTOR
- Xpath selector
- CSS selector
- Playwrights selector

---
## Xpath selector
- XPath = XML Path
- Có 2 lọại:

`Tuyệt đối:`: đi dọc theo cây DOM, bắt đầu bằng `/`
```
/html/body/div/
```
`Tương đối`: tìm dựa vào đặc tính, bắt đầu bằng `//`
```
//div[@id="usa"]
```

---
## Tips to get the Xpath
- text() dùng để tìm ra phần tử có giá trị tương ứng

>`<div @class="playwright">This is a text</div>`
```
XPath: //div[text()='This is a text']
```

- contains(): `contains(<giá trị>, <giá trị contains>)`

> `<div> Tôi là Alex </div>` // Text này có 1 ký tự space ở đầu và ở đuôi

> `<div> Bây giờ là: 08:07 </div>` // Thời gian sẽ tuỳ vào thời điểm truy cập trang web

```
//div[contains(text(), 'Tôi là Alex')]

//div[contains(text(), 'Bây giờ là:')]
```

---
# PLAYWRIGHT BASIC SYNTAX
- **test** : khai báo 1 test
```typescript
import { test } from '@playwright/test';

test ('<ten test>', async ({ page }) => {
    // code của test
});
```

- **step** : khai báo từng step của test case (đơn vị nhỏ hơn test) - nên mapping với step trong test case manual

```typescript
await test.step ('<ten step>', async () => {
    //code here
});
```

```typescript
test ('<Test 01>', async ({ page }) => {
    await test.step ('Step 01', async () => {
       //code here
    });

    await test.step ('Step 02', async () => {
       //code here
    });
});
```

## Basic actions
- Navigate
```typescript
await page.goto('https://pw-practice.playwrightvn.com/');
```

---
- Click
```typescript
test ('Click', async ({ page }) => {
    await test.step ('Single click', async () => {
       // Single click
       await page.locator("//button").click();
    });

    await test.step ('Double click', async () => {
       // Double click
       await page.locator("//button").dblclick();
       await page.locator("//button").click({
            clickCount: 2
       });
    });

    await test.step ('Right click', async () => {
       // Right click
       await page.locator("//button").click({
            button: 'right'
        });
    });

    await test.step ('Shift + click', async () => {
       // Click chuột kèm bấm phím khác
       await page.locator("//button").click({
            modifiers: ['Shift'],
        });
    });
});
```

---
- Input
```typescript
// Fill
   await page.locator("//input").fill('Playwright Viet Nam');
   await page.fill("//input", 'Playwright Viet Nam');

// pressSequentially
   await page.locator("//input").pressSequentially('Playwright Viet Nam', {
      delay: 100,
   });
```

---
- Hover
```typescript
    await page.locator("<xpath here>").hover();
```

---
- Radio/Checkbox
```typescript
// Lấy giá trị hiện tại đang là check hay không:
   const isChecked =
   page.locator("//input").isChecked();


// Check/ uncheck
   page.locator("//input").check();
   page.locator("//input").setChecked(false);
```
> *`setChecked(false)`: chỉ work với Checkbox thôi, không apply cho Radio button*

---
- Select option
```typescript
await page.locator("//select[@id='country']").selectOption(australia);
```

> *Hàm `select option` của PW build chỉ work với cặp thẻ `select` & `option`*

---
- Set input file
```typescript
await page.locator("//input[@id='profile']").setInputFile("<file_path>");
```
> *File phải được đưa vào repo (`tests/test-data/file.img`) và push lên Github*

---
- Confirmation dialog
```typescript
page.on('dialog', async dialog => dialog.accept());
await page.click("//button[text()='Delete']");
```