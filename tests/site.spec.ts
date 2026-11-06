import { test, expect } from "@playwright/test";

test("desktop page, images, navigation, and enquiry validation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("http://localhost:5173");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Canadian.",
  );
  for (const image of await page.locator("img").all()) {
    await expect(image).toHaveJSProperty("complete", true);
    expect(
      await image.evaluate(
        (element) => (element as HTMLImageElement).naturalWidth,
      ),
    ).toBeGreaterThan(0);
  }
  await page.getByRole("link", { name: "Start Your Journey" }).click();
  await expect(page).toHaveURL(/#enquiry$/);
  await page.getByRole("button", { name: "Send Enquiry via WhatsApp" }).click();
  await expect(page.locator("#name")).toBeFocused();
  await page.locator("#name").fill("Test Student");
  await page.locator("#email").fill("student@example.com");
  await page.locator("#phone").fill("+1 416 555 0123");
  await page.locator("#interest").selectOption("Colleges & Career Programs");
  await page.locator("#message").fill("I would like help with my application.");
  await page.locator('[name="consent"]').check();
  await page.evaluate(() => {
    window.open = ((url: string) => {
      (window as unknown as { enquiryUrl: string }).enquiryUrl = url;
      return null;
    }) as typeof window.open;
  });
  await page.getByRole("button", { name: "Send Enquiry via WhatsApp" }).click();
  await expect(
    page.getByText("Your enquiry is ready in WhatsApp."),
  ).toBeVisible();
  const target = await page.evaluate(
    () => (window as unknown as { enquiryUrl: string }).enquiryUrl,
  );
  const url = new URL(target);
  expect(url.hostname).toBe("wa.me");
  expect(url.pathname).toBe("/16479520964");
  expect(url.searchParams.get("text")).toContain("Name: Test Student");
  expect(url.searchParams.get("text")).toContain("student@example.com");
  expect(url.searchParams.get("text")).toContain("Colleges & Career Programs");
  expect(errors).toEqual([]);
});

test("mobile navigation and layout", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:5173");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("navigation")).toBeVisible();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Services" })
    .click();
  await expect(page.getByRole("navigation")).toBeHidden();
  await expect(page).toHaveURL(/#services$/);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
  await page.screenshot({ path: "artifacts/mobile.png", fullPage: true });
});

test("desktop visual capture", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://localhost:5173");
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: "artifacts/desktop.png", fullPage: true });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(1440);
});
