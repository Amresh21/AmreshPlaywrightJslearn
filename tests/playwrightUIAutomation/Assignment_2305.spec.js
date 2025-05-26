import { test, expect } from '@playwright/test';

let name = `Amresh${Date.now()}`;

test.beforeEach("Login Into the System", async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[placeholder='Username']").fill('Admin');
    await page.locator("input[placeholder='Password']").fill('admin123');
    
    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForTimeout(5000);
    await page.screenshot({path:`./screenshots/fullpageScreenshot${Date.now()}.png`,fullPage:true});

})


test("Add a new user from user Management", async ({page})=>{

    await page.locator("//span[text()='Admin']").click();
    await page.locator("//button[normalize-space()='Add']").click();
    await page.waitForTimeout(2000);
    await page.locator("(//div[@class='oxd-select-wrapper']/div)[1]").click();
    await page.waitForSelector('div[role="listbox"]', { state: 'visible' });
    await page.waitForSelector('//div[@role="option"]//span[text()="Admin"]');
    await page.click('//div[@role="option"]//span[text()="Admin"]');
    await page.getByPlaceholder("Type for hints...").fill("Radha");
    await page.waitForTimeout(4000);
    const suggestion = page.locator('//div[@role="listbox"]//span[contains(text(),"Radha  Gupta")]');
    await suggestion.waitFor({ timeout: 5000 });
    await suggestion.click();
    await page.locator("(//div[@class='oxd-select-wrapper']/div)[2]").click();
    await page.waitForSelector('div[role="listbox"]', { state: 'visible' });
    await page.waitForSelector('//div[@role="option"]//span[text()="Enabled"]', { timeout: 5000 });
    await page.click('//div[@role="option"]//span[text()="Enabled"]');
    await page.locator("(//label[text()='Username']/following::input)[1]").fill(name);
    await page.locator("(//input[@type='password'])[1]").fill('Secret123');
    await page.locator("(//input[@type='password'])[2]").fill('Secret123');
    await page.screenshot({path:`./screenshots/fullpageScreenshot${Date.now()}.png`,fullPage:true});
    await page.getByRole('button',{name:'Save'}).click();
    await page.waitForTimeout(2000);
    const toastMessage = page.locator('//p[text()="Successfully Saved"]');
    await toastMessage.waitFor({ state: 'visible', timeout: 3000 });
    expect(toastMessage).toHaveText('Successfully Saved');
    await page.screenshot({path:`./screenshots/fullpageScreenshot${Date.now()}.png`,fullPage:true});

})



test('Delete the user from user management', async ({ page }) => {
    await page.locator("//span[text()='Admin']").click();
    const dynamicXPath = `(//div[text()='${name}']/preceding::i[contains(@class,'oxd-icon bi-check')])[1]`;
    await page.locator(dynamicXPath).click(); 
    await page.screenshot({path:`./screenshots/fullpageScreenshot${Date.now()}.png`,fullPage:true});
    await page.getByRole('button', { name: 'Delete Selected' }).click();
    await page.getByRole('button', { name: 'Yes, Delete' }).click();
    const toastMessage = page.locator('//p[text()="Successfully Deleted"]');
    await toastMessage.waitFor({ state: 'visible', timeout: 5000 });
    expect(toastMessage).toHaveText('Successfully Deleted');
    await page.screenshot({path:`./screenshots/fullpageScreenshot${Date.now()}.png`,fullPage:true});


});
test.afterEach("Closing the Browser", async ({page})=>{

    await page.close();

})