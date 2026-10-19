import { expect, test } from "@playwright/test";
import { allPublicSlugs } from "../lib/site-data";

const publicRoutes = ["/", ...allPublicSlugs.map((slug) => `/${slug}`)];

test("every implemented route responds with an accessible document", async ({ page }) => {
  for (const route of publicRoutes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
    expect(await page.title(), route).toContain("Sky Secure");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), route).toBeTruthy();
  }
});

test("home navigation exposes route links and browser history works", async ({ page }) => {
  await page.goto("/");
  const internalLinks = await page.locator('a[href^="/"]').evaluateAll((links) => Array.from(new Set(links.map((link) => link.getAttribute("href")))).filter(Boolean));
  expect(internalLinks).toContain("/about-us");
  expect(internalLinks).toContain("/contact-us");
  await page.getByRole("link", { name: "About Us" }).first().click();
  await expect(page).toHaveURL(/about-us/);
  await page.goBack();
  await expect(page).toHaveURL(/127\.0\.0\.1:3000\/$/);
});

test("desktop dropdowns and mobile navigation are keyboard and click accessible", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  const mainNav = page.getByRole("navigation", { name: "Main navigation" });
  const solutionButton = mainNav.getByRole("button", { name: /Our Solutions/ });
  await solutionButton.click();
  await expect(solutionButton).toHaveAttribute("aria-expanded", "true");
  await expect(mainNav.getByRole("link", { name: "Home Solutions" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(solutionButton).toHaveAttribute("aria-expanded", "false");

  await page.setViewportSize({ width: 375, height: 812 });
  const menuButton = page.getByRole("button", { name: "Toggle navigation" });
  await menuButton.click();
  await expect(page.locator("#primary-navigation")).toHaveClass(/is-open/);
  await expect(page.getByRole("link", { name: "Contact Us" }).first()).toBeVisible();
  await menuButton.click();
  await expect(page.locator("#primary-navigation")).not.toHaveClass(/is-open/);
});
