import { expect, test } from "@playwright/test";

test("static hero CTAs and homepage controls work", async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto("/");
  const hero = page.locator(".hero");
  await expect(hero.getByRole("img", { name: /residential society and commercial property/i })).toBeVisible();
  await expect(hero.getByRole("link", { name: /get a free quote/i })).toHaveAttribute("href", "/contact-us");
  await expect(hero.getByRole("link", { name: /explore solutions/i })).toHaveAttribute("href", "/#solutions");
  await expect(hero.getByRole("button", { name: /slide/i })).toHaveCount(0);
  await expect(hero.locator("h1 span")).toHaveText("every space");
  await expect(hero.locator("h1")).not.toContainText("<span>");

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

for (const width of [320, 375, 430, 768, 1440]) {
  test(`hero remains usable without horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 768 ? 812 : 1000 });
    await page.goto("/");
    const hero = page.locator(".hero");
    const image = hero.getByRole("img", { name: /residential society and commercial property/i });
    await expect(image).toBeVisible();
    await expect(hero.getByRole("link", { name: /get a free quote/i })).toBeVisible();
    await expect(hero.getByRole("link", { name: /explore solutions/i })).toBeVisible();
    expect(await image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  });
}

test("assigned category images appear on cards and detail pages", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".solution-card img")).toHaveCount(6);
  await expect(page.locator(".product-card img")).toHaveCount(6);

  await page.goto("/office-solutions");
  const officeImage = page.locator(".detail-visual img");
  await expect(officeImage).toBeVisible();
  expect(await officeImage.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);

  await page.goto("/analog-ip-camera");
  const cameraImage = page.locator(".detail-visual img");
  await expect(cameraImage).toBeVisible();
  expect(await cameraImage.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);

  await page.goto("/about-us");
  const aboutImages = page.locator(".about-collage img");
  await expect(aboutImages).toHaveCount(2);
  const imageHeights = await aboutImages.evaluateAll((images) => images.map((image) => image.getBoundingClientRect().height));
  expect(imageHeights.every((height) => height >= 180)).toBe(true);
  expect(await aboutImages.evaluateAll((images) => images.every((image) => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0))).toBe(true);
});

test("audited header, review link, brands, and tablet About states are clean", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page.locator(".header-cta")).toBeVisible();
  await expect(page.locator(".mobile-nav-cta")).toBeHidden();
  await expect(page.getByRole("link", { name: /google reviews/i })).toHaveCount(0);
  await expect(page.locator(".marquee [aria-hidden=true] img").first()).toHaveAttribute("alt", "");

  await page.setViewportSize({ width: 768, height: 1024 });
  const aboutGrid = page.locator(".about-grid");
  expect(await aboutGrid.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length)).toBe(1);
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
  const productTabs = page.getByRole("tablist", { name: "Product categories" }).getByRole("tab");
  await expect(productTabs.last()).toHaveAttribute("aria-selected", "true");

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
