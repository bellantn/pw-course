// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page”
// a. Nhập đầy đủ các thông tin, click button register

// Manual steps
// 1. Navigate to https://material.playwrightvn.com/
// 2. Click on "Bài học 1: Register Page"
// 3. Fill in Username field
// 4. Fill in Email field
// 5. Check on Female radio button
// 6. Check on Traveling checkbox
// 7. Select Technology from the list
// 8. Select United States from the dropdown list
// 9. Input Date of birth
// 10. Upload a profile picture
// 11. Input Biography
// 13. Click the "Register" button

import { test } from "@playwright/test";

test("Test case 1", async ({ page }) => {
  // Navigate to https://material.playwrightvn.com/
  await test.step("Navigate to page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  // Click on Register Page link
  await test.step("Click on Register Page link", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  // Fill in form fields
  await test.step("Fill in form fields", async () => {
    await page.locator("//input[@id='username']").fill("bellatn");
    await page.locator("//input[@id='email']").fill("bellantn93@gmail.com");
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='traveling']").check();
    await page
      .locator("//select[@id='interests']")
      .selectOption({ value: "technology" });
    await page
      .locator("//select[@id='country']")
      .selectOption({ value: "usa" });
    await page.locator("//input[@id='dob']").pressSequentially("28/01/1998", {
      delay: 100,
    });
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("data-test/profile-photo.jpeg");
    await page.locator("//textarea[@id='bio']").fill("This is a biography");
  });

  // Click the "Register" button
  await test.step("Click on Register button", async () => {
    await page.locator("//button[@type='submit']").click();
  });
});
