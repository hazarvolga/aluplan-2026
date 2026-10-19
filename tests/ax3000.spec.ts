import { test, expect } from '@playwright/test';

const hubPath = '/products/ax3000/dokumanlar';
const sourcePages = [
  { path: '/products/ax3000', count: 1 },
  { path: '/solutions/ax3000', count: 1 },
  { path: '/solutions/ax3000-mekanik-tesisat', count: 1 },
  { path: '/solutions/ax3000/elektrik', count: 1 },
  { path: '/solutions/ax3000/havalandirma', count: 1 },
  { path: '/solutions/ax3000/isitma', count: 1 },
  { path: '/solutions/ax3000/konut-havalandirma', count: 1 },
  { path: '/solutions/ax3000/sihhi-tesisat', count: 1 },
  { path: '/solutions/ax3000/sprinkler', count: 2 },
] as const;

const documentNames = [
  'ax3000-brochure-en.pdf',
  'ax3000-brochure-en-alternative.pdf',
  'ax3000-brochure-de.pdf',
  'ax3000-functions-en.pdf',
  'ax3000-functions-en.docx',
  'ax3000-functions-hexagon-en.docx',
] as const;

test.describe('AX3000 document hub', () => {
  for (const { path, count } of sourcePages) {
    test(`${path} directs document buttons to the central hub`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('h1')).toBeVisible();
      const links = page.getByRole('link', { name: 'AX3000 Dokümanları', exact: true });
      await expect(links).toHaveCount(count);
      for (const link of await links.all()) {
        await expect(link).toHaveAttribute('href', hubPath);
        await expect(link).not.toHaveAttribute('download');
      }
      await expect(page.locator('a[href*="AX3000_Brosur_V2022"]')).toHaveCount(0);
      await links.first().click();
      await expect(page).toHaveURL(new RegExp(`${hubPath}$`));
      await expect(page.getByRole('heading', { level: 1 })).toContainText('AX3000');
    });
  }

  test('offers all six documents as valid local downloads', async ({ page, request }) => {
    await page.goto(hubPath, { waitUntil: 'domcontentloaded' });
    const downloads = page.locator('a[download]');
    await expect(downloads).toHaveCount(documentNames.length);
    for (const name of documentNames) {
      const link = page.locator(`a[download="${name}"]`);
      await expect(link).toBeVisible();
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
      const url = new URL(href!, page.url());
      expect(url.origin).toBe(new URL(page.url()).origin);
      const response = await request.get(url.href);
      expect(response.status(), name).toBe(200);
      const body = await response.body();
      expect(body.length, name).toBeGreaterThan(1000);
      expect(body.subarray(0, name.endsWith('.pdf') ? 5 : 2).toString(), name)
        .toBe(name.endsWith('.pdf') ? '%PDF-' : 'PK');
    }
  });

  for (const width of [390, 1440]) {
    test(`document hub fits a ${width}px viewport`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(hubPath, { waitUntil: 'domcontentloaded' });
      await expect(page.getByRole('heading', { level: 1 })).toContainText('AX3000');
      await expect(page.locator('a[download]')).toHaveCount(6);
      expect(await page.evaluate(() => document.documentElement.scrollWidth))
        .toBeLessThanOrEqual(width);
    });
  }
});
