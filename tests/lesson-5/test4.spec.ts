// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”.
// a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc,
// b. Thực hiện search theo tiêu đề bài báo bất kì.

import { expect, test } from "@playwright/test";

test("Test case 4", async ({ page }) => {
  await test.step("Navigate to page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on Personal notes page link", async () => {
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
  });

  await test.step("Add 10 notes", async () => {
    // Launch vnExpress in new tab
    const context = await page.context(); // Create new context
    const vnexpressPage = await context.newPage(); // Create new tab
    await vnexpressPage.goto("https://vnexpress.net/khoa-hoc");

    // Get the list of articles
    const articles = await vnexpressPage.locator("//article").all();

    // Loop through the first 10 articles
    for (let i = 0; i < 10; i++) {
      const title = await articles[i].locator("h3 a").textContent();
      const desc = await articles[i].locator("p.description").textContent();
      console.log(title, desc);

      // Fill in the title and description in the Personal Notes form
      //await page.locator("//input[@id='note-title']").fill(title.trim());
      if (title) {
        await page.locator("//input[@id='note-title']").fill(title.trim());
      } else {
        console.error("Title is missing");
      }

      //await page.locator("//textarea[@id='note-content']").fill(desc.trim());
      if (desc) {
        await page.locator("//textarea[@id='note-content']").fill(desc.trim());
      } else {
        console.error("Description is missing");
      }
      await page.locator("//button[@id='add-note']").click();
    }
    await vnexpressPage.close();
  });

  await test.step("Search for specific note", async () => {
    // Get the list of note titles
    const noteTitles = await page.locator(".note-title").allTextContents();

    // Use the first title for search
    const searchTitle = noteTitles[0];
    await page.locator('//input[@id="search"]').fill(searchTitle);

    // Verify the search results
    const searchResults = await page.locator(".note-title").allTextContents();
    const found = searchResults.includes(searchTitle);
    expect(found).toBeTruthy();
  });
});
