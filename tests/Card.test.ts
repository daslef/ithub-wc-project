import { test, expect } from "@playwright/test";

const path = "/iframe.html?args=&globals=&id=components-card--card-default";

test.beforeEach(async ({ page }) => {
  await page.goto(path);
});

test("компонент определён", async ({ page }) => {
  const componentElement = page.locator("card-component");
  expect(componentElement).toBeDefined();
});

test("карточка содержит заголовок h3", async ({ page }) => {
  const titleElement = page.locator("h3");
  await expect(titleElement).toBeVisible();
});

test("карточка содержит заголовок с текстом Food", async ({ page }) => {
  const titleElementText = await page.locator("h3").innerText();
  expect(titleElementText).toBe("Food");
});
