import { test } from '@playwright/test';

let usernameXpath = "//input[@id='username']";
let emailXpath = "//input[@id='email']";
let genderXpath = "//input[@id='female']";
let hobbiesXpath = "//input[@id='traveling']";
let interestsXpath = "//select[@id='interests']";
let countryXpath = "//select[@id='country']";
let dobXpath = "//input[@id='dob']";
let profileXpath = "//input[@id='profile']";
let bioXpath = "//textarea[@id='bio']";
let ratingXpath = "//input[@id='rating']";
let newsXpath = "//input[@id='newsletter']";
let enableFeatureXpath = "//span[@class='slider round']";
let buttonXpath = "//button[text()='Register']";


test('Test 01', async ({ page }) => {
   await test.step('Truy cập trang Playwright Material', async () => {
      await page.goto("https://material.playwrightvn.com/");
   });

   await test.step('Click vào Bài học 1: Register Page', async () => {
      await page.locator("//a[contains(text(), 'Bài học 1: Register Page')]").click();
   });

   await test.step('Nhập đầy đủ các thông tin', async () => {
      await page.locator(usernameXpath).fill("Bella");
      await page.locator(emailXpath).fill("bellantn93@gmail.com");
      await page.locator(genderXpath).check();
      await page.locator(hobbiesXpath).setChecked(true);
      await page.locator(interestsXpath).selectOption("Music");
      await page.locator(countryXpath).selectOption("Canada");
      await page.locator(dobXpath).pressSequentially('28011993', {
         delay: 200,
      })
      await page.locator(profileXpath).setInputFiles("tests/lesson-5/test-data/profile.txt")
      await page.locator(bioXpath).fill("This is a biography");
      await page.locator(ratingXpath).fill("10");
      await page.locator(newsXpath).click();
      await page.locator(enableFeatureXpath).click();
   });


   await test.step('Click button register', async () => {
      await page.locator(buttonXpath).click();
   });
});