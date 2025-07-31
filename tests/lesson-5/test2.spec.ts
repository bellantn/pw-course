import { test } from '@playwright/test';
import { count } from 'console';

let product1 = "//button[@data-product-id='1']";
let product2 = "//button[@data-product-id='2']";
let product3 = "//button[@data-product-id='3']";

test('Test 02', async ({ page }) => {
   await test.step('Truy cập trang Playwright Material', async () => {
      await page.goto("https://material.playwrightvn.com/");
   });

   await test.step('Click vào Bài học 2: Product Page', async () => {
      await page.locator("//a[contains(text(), 'Bài học 2: Product page')]").click();
   });

   await test.step('Thêm 2 sản phẩm 1', async () => {
      await page.locator(product1).click({
         clickCount: 2,
      })
   });

   await test.step('Thêm 3 sản phẩm 2', async () => {
      await page.locator(product2).click({
         clickCount: 3,
      })
   });

   await test.step('Thêm 1 sản phẩm 3', async () => {
      await page.locator(product3).click();
   });
});