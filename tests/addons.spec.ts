import { test, expect } from '@playwright/test';

test.describe('Addons Solutions', () => {
  const pages = [
    { path: '/solutions/addons/DWG2DConverter', title: 'DWG 2D Converter' },
    { path: '/solutions/addons/DriveCurve', title: 'Drive Curve' },
    { path: '/solutions/addons/GeometryTools', title: 'Geometry Tools' },
    { path: '/solutions/addons/GraphicalText', title: 'Graphical Text' },
    { path: '/solutions/addons/ParametricTerrain', title: 'Parametric Terrain' },
    { path: '/solutions/addons/Ramp', title: 'Ramp' },
    { path: '/solutions/addons/SketchUpConverter', title: 'SketchUp Converter' },
    { path: '/solutions/addons/SteelComponents', title: 'Steel Components' },
    { path: '/solutions/addons/ThreeDimensioning', title: '3D Dimensioning' },
  ];

  test.beforeEach(async ({ page }) => {
    // Block external resources like YouTube to speed up tests
    await page.route('**/*', route => {
      const url = route.request().url();
      if (url.includes('youtube.com') || url.includes('google.com') || url.includes('vimeo.com')) {
        return route.abort();
      }
      return route.continue();
    });
  });

  for (const { path } of pages) {
    test(`should render ${path} correctly`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('networkidle');
      await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
    });
  }

  test('Steel Components page should have YouTube link', async ({ page }) => {
    test.setTimeout(60000); // Increase timeout for heavy page
    await page.goto('/solutions/addons/SteelComponents', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    const youtubeLink = page.locator('a[href*="youtube.com/playlist"]');
    await expect(youtubeLink).toBeVisible({ timeout: 10000 });
  });

  test('Ramp page should have gallery', async ({ page }) => {
    await page.goto('/solutions/addons/Ramp', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    // Check for "Rampa Galerisi" text which is in sectionTitle
    await expect(page.getByText('Rampa Galerisi')).toBeVisible({ timeout: 10000 });
  });

  test('Parametric Terrain page should have gallery', async ({ page }) => {
    await page.goto('/solutions/addons/ParametricTerrain', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    // Check for "Plan Örnekleri" text
    await expect(page.getByText('Plan Örnekleri').first()).toBeVisible({ timeout: 10000 });
  });
});
