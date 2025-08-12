 // @ts-check
import { test, expect } from '@playwright/test';

test('component should be visible', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-cardcomponent--card');

  await expect(page.locator('card-component')).toBeVisible()
});

test('component should have slots', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-cardcomponent--card');
  const cardComponent = page.locator('card-component')

  for (const name of ["header", "footer", "content"]) {
    expect(cardComponent.locator(`slot[name=${name}]`)).toBeDefined()
  }
});

test('component header slot should have image ', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-cardcomponent--card');
  const cardComponent = page.locator('card-component')

  const imageElement = cardComponent.locator('img[slot="header"]')
  await expect(imageElement).toBeVisible()
  await expect(imageElement).toHaveAttribute('src')
});

test('component header slot should have headline ', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-cardcomponent--card');
  const cardComponent = page.locator('card-component')

  const headlineElement = cardComponent.locator('h4[slot="header"]')
  await expect(headlineElement).toBeVisible()
  await expect(headlineElement).toHaveText("Food")
});

test('component content slot should have p with lorem', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-cardcomponent--card');
  const cardComponent = page.locator('card-component')

  const pElement = cardComponent.locator('p[slot="content"]')
  await expect(pElement).toBeVisible()
  await expect(pElement).toHaveText(/^Lorem/)
});

test('component footer slot should have link', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-cardcomponent--card');
  const cardComponent = page.locator('card-component')

  const linkElement = cardComponent.locator('a[slot="footer"]')
  await expect(linkElement).toBeVisible()
  await expect(linkElement).toHaveAttribute('href', '#')
});

test('component should match snapshot', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-cardcomponent--card');
  const root =  page.locator('#storybook-root')
  const innerHTML = await root.innerHTML();
  expect(innerHTML).toMatchSnapshot()
});


test('component should match screenshot', async ({ page }) => {
  await page.goto('/iframe.html?globals=&args=&id=components-cardcomponent--card');
  await expect(page).toHaveScreenshot()
});
