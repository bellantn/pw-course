// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
// a. Sản phẩm 1: 2 sản phẩm
// b. Sản phẩm 2: 3 sản phẩm
// c. Sản phẩm 3: 1 sản phẩm

import { test } from "@playwright/test";

test("Test case 2", async ({ page }) => {
  await test.step("Navigate to page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on Product page link", async () => {
    await page.locator("//a[@href='02-xpath-product-page.html']").click();
  });

  await test.step("Add 2 product 1 to cart", async () => {
    await page.locator("//button[@data-product-id='1']").click();
    await page.locator("//button[@data-product-id='1']").click();
  });

  await test.step("Add 3 product 2 to cart", async () => {
    await page.locator("//button[@data-product-id='2']").dblclick();
    await page.locator("//button[@data-product-id='2']").click();
  });

  await test.step("Add 1 product 3 to cart", async () => {
    await page.locator("//button[@data-product-id='3']").click();
  });
});
