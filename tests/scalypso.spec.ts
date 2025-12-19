import { test, expect } from '@playwright/test';

test.describe('Scalypso Solutions', () => {
  const pages = [
    '/solutions/scalypso/Converter',
    '/solutions/scalypso/Mobile',
    '/solutions/scalypso/Modeler',
    '/solutions/scalypso/Videos',
    '/solutions/scalypso/Viewer',
  ];

  for (const path of pages) {
    test(`should render ${path} correctly`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      
      // Check for main heading (h1 is usually in SolutionHero)
      await expect(page.locator('h1')).toBeVisible();
      
      // Check for common CTA button "Deneme Lisansı İste"
      // It's a link styled as a button
      const ctaButton = page.getByRole('link', { name: /Deneme Lisansı İste/i });
      if (await ctaButton.count() > 0) {
        await expect(ctaButton.first()).toBeVisible();
        await expect(ctaButton.first()).toHaveAttribute('href', /forms\.office\.com/);
      }
    });
  }

  test('Converter page should have image', async ({ page }) => {
    await page.goto('/solutions/scalypso/Converter', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('img[alt="Scalypso Converter Interface"]')).toBeVisible();
  });

  test('Mobile page should have supported systems list', async ({ page }) => {
    await page.goto('/solutions/scalypso/Mobile', { waitUntil: 'domcontentloaded' });
    await expect(page.getByText('Matterport')).toBeVisible();
  });

  test('Modeler page should have modules list', async ({ page }) => {
    await page.goto('/solutions/scalypso/Modeler', { waitUntil: 'domcontentloaded' });
    await expect(page.getByText('Pipe Module').first()).toBeVisible();
  });

  test('Videos page should have video grid', async ({ page }) => {
    await page.goto('/solutions/scalypso/Videos', { waitUntil: 'domcontentloaded' });
    // Check for at least one video title
    await expect(page.getByText('Scalypso [CONVERTER]')).toBeVisible();
  });
});
