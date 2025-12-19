import { test, expect } from "@playwright/test";
test.setTimeout(120000);

test("home renders", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator(".min-h-screen").first()).toBeVisible({ timeout: 10000 });
});

test("architecture page renders", async ({ page }) => {
  await page.goto("/solutions/architecture", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("allplan basic renders", async ({ page }) => {
  await page.goto("/products/allplan-basic", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("allplan professional renders", async ({ page }) => {
  await page.goto("/products/allplan-professional", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("allplan ultimate renders", async ({ page }) => {
  await page.goto("/products/allplan-ultimate", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("precast renders", async ({ page }) => {
  await page.goto("/products/precast", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("allplan aec renders", async ({ page }) => {
  await page.goto("/products/allplan-aec", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("ax3000 renders", async ({ page }) => {
  await page.goto("/products/ax3000", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("structural renders", async ({ page }) => {
  await page.goto("/solutions/structural", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("mep renders", async ({ page }) => {
  await page.goto("/solutions/mep", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("about renders", async ({ page }) => {
  await page.goto("/about", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("contact renders", async ({ page }) => {
  await page.goto("/contact", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("health renders", async ({ page }) => {
  await page.goto("/health", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("bridge-design renders", async ({ page }) => {
  await page.goto("/solutions/bridge-design", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("steel renders", async ({ page }) => {
  await page.goto("/solutions/steel", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("solutions precast renders", async ({ page }) => {
  await page.goto("/solutions/precast", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("site planning renders", async ({ page }) => {
  await page.goto("/solutions/site-planning", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("cds addon renders", async ({ page }) => {
  await page.goto("/solutions/cds-addon", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("pythonpart renders", async ({ page }) => {
  await page.goto("/solutions/pythonpart", { waitUntil: "domcontentloaded" });
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("pythonpart generator renders", async ({ page }) => {
  await page.goto("/solutions/pythonpart-generator", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("bimplus renders", async ({ page }) => {
  await page.goto("/solutions/bimplus", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("bimplus signup renders", async ({ page }) => {
  await page.goto("/products/bimplus-signup", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("allplan bimplus renders", async ({ page }) => {
  await page.goto("/products/allplan-bimplus", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("tim renders", async ({ page }) => {
  await page.goto("/products/tim", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("sds2 detail renders", async ({ page }) => {
  await page.goto("/products/sds2-detail", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("sds2 load renders", async ({ page }) => {
  await page.goto("/products/sds2-load", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("sds2 home renders", async ({ page }) => {
  await page.goto("/products/sds2-home", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});

test("partner solutions renders", async ({ page }) => {
  await page.goto("/products/partner-solutions", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1, h2, [role=heading]").first()).toBeVisible({ timeout: 10000 });
});
