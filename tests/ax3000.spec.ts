import { test, expect } from '@playwright/test';

test.describe('AX3000 Solutions', () => {
  const pages = [
    '/solutions/ax3000/elektrik',
    '/solutions/ax3000/havalandirma',
    '/solutions/ax3000/isitma',
    '/solutions/ax3000/konut-havalandirma',
    '/solutions/ax3000/sihhi-tesisat',
    '/solutions/ax3000/sprinkler',
  ];

  for (const path of pages) {
    test(`should render ${path} correctly`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('networkidle');
      
      // Check for main heading
      await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
      
      // Check for PDF download button
      const downloadLinks = page.locator('a[download="AX3000_Brosur_V2022.pdf"]');
      await expect(downloadLinks.first()).toBeVisible({ timeout: 10000 });
      
      // Verify all download links have correct href pattern
      const count = await downloadLinks.count();
      expect(count).toBeGreaterThan(0);
      
      for (let i = 0; i < count; i++) {
        await expect(downloadLinks.nth(i)).toHaveAttribute('href', /AX3000_Brosur_V2022.*\.pdf$/);
      }
    });
  }
});
