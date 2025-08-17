// @ts-check
import { test, expect } from '@playwright/test';

test('component should match snapshot', async ({ page }) => {
  await page.goto('iframe.html?globals=&args=&id=components-button--primary');
  const root = page.locator('#storybook-root button')
  const innerHTML = (await root.innerHTML()).replace(/<\!--.*?-->/g, "");
  expect(innerHTML).toMatchSnapshot()
});


test('component should match screenshot', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-button--primary');
  await expect(page).toHaveScreenshot()
});
