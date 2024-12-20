// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”.
// a. Thêm mới 100 todo item có nội dung “Todo <i>”
// b. Xoá các todo có số lẻ

import { test } from "@playwright/test";

test("Test case 3", async ({ page }) => {
  // Navigate to https://material.playwrightvn.com/
  await test.step("Navigate to page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  // Click on Todo Page link
  await test.step("Click on Todo page link", async () => {
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
  });

  // Add 100 todo items
  await test.step("Add 100 todo items", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });

  // Delete odd numbered todo items
  await test.step("Delete odd numbered todo items", async () => {
    // Register dialog event once to handle confirmation dialog
    page.on("dialog", async (dialog) => dialog.accept());

    // Get list of all todos
    const todos = await page.locator("//li");
    const count = await todos.count(); 
    // Loop from end to start to avoid skipping items after deletion
    for (let i = count - 1; i >= 0; i--) {
      const todoText = await todos.nth(i).locator("span").textContent(); // Get todo text

      if (todoText) {
        // Check if todoText is not null
        const todoNumber = parseInt(todoText.replace("Todo ", ""), 10); // Extract number from "Todo <i>"

        if (todoNumber % 2 !== 0) {
          // Check if odd number -> delete todo
          await todos
            .nth(i)
            .locator("xpath=.//button[contains(@onclick,'deleteTask')]")
            .click();
        }
      }
    }
  });
});
