import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage and contact page have no serious or critical axe violations", async ({ page }) => {
  for (const route of ["/", "/contact-us"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const severe = results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
    expect(severe, `${route}: ${JSON.stringify(severe)}`).toEqual([]);
  }
});

test("mobile keyboard flow reaches the skip link and menu control", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: /Eknoor CCTV home/ })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
});
