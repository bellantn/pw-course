



## DOM
**DOM = Document Object Model**
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
- `radio button`: tạo nút chọn một (radio)
- `<checkbox>`: tạo nút chọn nhiều chọn lựa (checkbox)
- `<select>` và `<option>`: danh sách thả xuống và lựa chọn trong danh sách thả xuống
- `<button>`: tạo nút bấm
- `data picker`: tạo bộ chọn ngày
- `slider`: tạo thanh trượt

4. Thẻ bảng (Table Tags)
- `<table>`: hiển thị bảng dữ liệu
- `<th>`(table heading): ô tiêu đề trong bảng - in đậm căn giữa
- `<tr>` (table row): dòng trong bảng
- `<td>` (table data): ô trong bảng

5. Thẻ nhúng (Embedded Content Tags)
- `<img>`: Chèn hình ảnh.
- `<iframe>`: Nhúng nội dung từ một trang web khác.


## Selector
- Xpath selector
- CSS selector
- Playwrights selector

### Xpath selector
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
### Tips to get the XPath
- text() dùng để tìm ra phần tử có giá trị tương ứng

`<div @class="playwright">This is a text</div>`
```
XPath: //div[text()='This is a text']
```

- contains()

`<div> Tôi là Alex </div>` // Text này có 1 ký tự space ở đầu và ở đuôi
`<div> Bây giờ là: 08:07 </div>` // Thời gian sẽ tuỳ vào thời điểm truy cập trang web
```
//div[contains(text(), 'Tôi là Alex')]
//div[contains(text(), 'Bây giờ là:')]
```


## Playwright basic syntax
- **test** : khai báo 1 test
```
import { test } from '@playwright/test'

test ('<ten test>', async ({ page }) => {
    // code của test
})
```

- **step** : khai báo từng step của test case (đơn vị nhỏ hơn test)
```
await test.step ('ten step', async () => {
    //code here
})
```

```
test ('<ten test>', async ({ page }) => {
    await test.step ('ten step', asyn () => {
       //code here
    })
})
```

### Basic actions
- Navigate
```
await page.goto('https://pw-practice.playwrightvn.com/');
```
- Click
```
Single click
   await page.locator("//button").click();


Double click
   await page.locator("//button").dblclick();


Click chuột phải
   page.locator("//button").click({
     button: 'right'
   })


Click chuột kèm bấm phím khác
   page.locator("").click({
     modifiers: ['Shift'],
   })
```

- Input
```
Fill
   page.locator("//input").fill('Playwright Viet Nam');


pressSequentially
   page.locator("//input").pressSequentially('Playwright Viet Nam', {
      delay: 100,
   });
```

- Radio/Checkbox
```
Lấy giá trị hiện tại đang là check hay không:
   const isChecked =
   page.locator("//input").isChecked();


Check/ uncheck
   page.locator("//input").check();
   page.locator("//input").setChecked(false);
```

- Select option


- Set input file
```
await page.locator("//input[@id='profile']").setInputFile(<file_path>);
```

- Hover
```
await page.locator("<xpath here>").hover();
```


- Confirmation dialog
```
page.on('dialog', async dialog => dialog.accept);
await page.click("//button[text()='Delete']");
```