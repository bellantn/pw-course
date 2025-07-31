import { test } from '@playwright/test';

let addNewXpath = "//input[@id='new-task']";
let addTaskBtn = "//button[@id='add-task']";

test('Test 03', async ({ page }) => {
   await test.step('Truy cập trang Playwright Material', async () => {
      await page.goto("https://material.playwrightvn.com/");
   });

   await test.step('Click vào Bài học 3: Todo page', async () => {
      await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
   });

   await test.step('Thêm mới 100 todo item có nội dung "Todo <i>"', async () => {
      for (let i = 1; i <= 100; i++) {
         await page.locator(addNewXpath).fill(`Todo ${i}`);
         await page.locator(addTaskBtn).click();
      }
   });

   await test.step('Xóa các todo có số lẻ', async () => {
      page.on('dialog', async dialog => dialog.accept());

      for (let j = 1; j <= 100; j += 2) {
         let delBtn = `//button[@id="todo-${j}-delete"]`;
         await page.click(delBtn);
      }
   });
});