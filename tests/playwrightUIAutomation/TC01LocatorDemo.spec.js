import { test, expect } from '@playwright/test';

//BROWER
//CONTEXT
//PAGE
//https://www.saucedemo.com/
test('Validate the secret sauce demo website', async ({ page }) => {
  
  await page.goto('/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Amresh');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Chakkarapani');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('600100');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

});


test('Validate the secret sauce demo website with Invalid username', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauc');
    await page.locator('[data-test="login-button"]').click();

  });

test('Checking with Invalid Credentials', async ({ page }) => {
  await page.goto('https://saucelabs.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Sign in' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://accounts.saucelabs.com/am/XUI/#login/');
  await page1.getByRole('textbox', { name: 'User Name' }).fill('dsfsdf');
  await page1.getByRole('textbox', { name: 'User Name' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Password' }).fill('sdffsdf');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await page1.getByText('User name/password').click();
});