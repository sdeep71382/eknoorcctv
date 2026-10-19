import { test } from "@playwright/test";

test("representative visual regression captures at production target widths", async ({ page }, testInfo) => {
  const route = testInfo.project.name === "mobile" ? "/contact-us" : testInfo.project.name === "tablet" ? "/about-us" : "/";
  await page.goto(route);
  await page.screenshot({ path: `qa-artifacts/screenshots/${testInfo.project.name}-${route.slice(1).replaceAll("/", "-") || "home"}.png`, fullPage: true });
});
