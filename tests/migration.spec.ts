import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const statusPath = path.resolve(__dirname, "../../docs/migration-status.json");
const content = fs.readFileSync(statusPath, "utf-8");
const status = JSON.parse(content);
const migratedItems = status.items.filter((i: any) => i.migrated);

test.describe.configure({ mode: 'parallel' });

test.describe('Smoke Tests', () => {
  for (const item of migratedItems) {
    test(`should load ${item.path}`, async ({ page }) => {
        // Block heavy resources
        await page.route('**/*', route => {
            const url = route.request().url();
            // Block only analytics to avoid navigation side-effects
            if (url.includes('google-analytics.com') || url.includes('gtag/js')) {
                return route.abort();
            }
            return route.continue();
        });
        
        const response = await page.goto(item.path, { waitUntil: 'domcontentloaded' });
        expect(response?.status()).toBe(200);
        await expect(page.locator('h1, h2, [role=heading]').first()).toBeVisible({ timeout: 15000 });
    });
  }
});
