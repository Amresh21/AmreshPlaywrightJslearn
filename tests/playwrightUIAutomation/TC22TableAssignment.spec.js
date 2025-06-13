import { test, expect } from "@playwright/test";


async function printNameAndPrice(page) {
  const tableLoc = page.locator("#productTable");
  const rows = tableLoc.locator("tbody tr");

  const rowCount = await rows.count();
  console.log("Number of Row - ", rowCount);
  for (let i = 0; i < rowCount; i++) {
    const name = await rows.nth(i).locator("td").nth(1).innerText();
    const price = await rows.nth(i).locator("td").nth(2).innerText();
    console.log(`Name: ${name}, Price: ${price}`);
  }
}

async function clickSecondCheckbox(page) {
  const tableLoc = page.locator("#productTable");

  const secondCheckbox = await tableLoc.locator("tbody tr").nth(1).locator("//td/input[@type='checkbox']");
   secondCheckbox.check();
   await page.waitForTimeout(500);
   console.log("The second checkbox is clicked");
 /*  if (secondCheckbox.isVisible()) {
    secondCheckbox.check();
  } */
}

test("Pagination Product Table - Print and Select", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/"); 

  const totalPages = await page.locator("//ul[@id='pagination']/li").count();
  console.log("Total Number of Pages: " + totalPages);

  for (let i = 1; i <= totalPages; i++) {
    console.log(`--- Page ${i} ---`);

    await printNameAndPrice(page);
    await clickSecondCheckbox(page);

    if (i <totalPages) {
      await page.locator(`//a[normalize-space()="${i + 1}"]`).click();
      await page.waitForTimeout(3000);
    }
  }
  page.close();
});
