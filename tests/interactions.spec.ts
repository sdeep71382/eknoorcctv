import { expect, test } from "@playwright/test";

test("hero controls, product tabs, client tabs, and testimonials change state", async ({ page }) => {
  await page.goto("/");
  const heroHeading = page.locator(".hero h1");
  const initialHeading = await heroHeading.textContent();
  await page.getByRole("button", { name: "Next slide" }).click();
  await expect(heroHeading).not.toHaveText(initialHeading || "");
  await page.getByRole("button", { name: "Pause automatic slides" }).click();
  await expect(page.getByRole("button", { name: "Resume automatic slides" })).toBeVisible();

  const productTab = page.getByRole("tab", { name: "Access Control" });
  await productTab.click();
  await expect(productTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: "Access Control" })).toContainText("Door Access Control");

  const clientTab = page.getByRole("tab", { name: "Hospitality" });
  await clientTab.click();
  await expect(clientTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: "Hospitality" })).toBeVisible();

  const nextTestimonial = page.getByRole("button", { name: "Next testimonial" });
  await nextTestimonial.click();
  await expect(page.locator(".testimonial-grid article").first()).toBeVisible();
});

test("product and client tabs are keyboard operable with arrow keys", async ({ page }) => {
  await page.goto("/");
  const cctv = page.getByRole("tab", { name: "CCTV" });
  await cctv.focus();
  await page.keyboard.press("ArrowRight");
  const accessControl = page.getByRole("tab", { name: "Access Control" });
  await expect(accessControl).toBeFocused();
  await expect(accessControl).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("End");
  await expect(page.getByRole("tab", { name: "GPS" })).toHaveAttribute("aria-selected", "true");

  const industrial = page.getByRole("tab", { name: "Industrial" });
  await industrial.focus();
  await page.keyboard.press("ArrowLeft");
  await expect(page.getByRole("tab", { name: "More" })).toHaveAttribute("aria-selected", "true");
});

test("contact form validates without transmitting data", async ({ page }) => {
  await page.goto("/contact-us");
  const form = page.locator("form");
  await form.getByRole("button", { name: "Validate Message" }).click();
  await expect(form.locator("input[name=name]")).toBeFocused();
  await form.locator("input[name=name]").fill("QA Visitor");
  await form.locator("input[name=email]").fill("qa@example.com");
  await form.locator("input[name=phone]").fill("+91 9646049911");
  await form.locator("textarea[name=message]").fill("Please share a security consultation.");
  await form.getByRole("button", { name: "Validate Message" }).click();
  await expect(page.getByRole("status")).toContainText("No data was sent");
});

test("unknown routes show the custom not-found state", async ({ page }) => {
  const response = await page.goto("/not-a-real-route");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});
