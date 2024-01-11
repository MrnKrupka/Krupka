import { test, expect } from '@playwright/test';

const baseUrl = 'https://expz.menu/';
const restaurantIdBrooks = '7a1e0cf8-96e0-4fdf-93df-49db5ad755d0';

test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl+restaurantIdBrooks);
  });

test.describe('Main page', () => {
    test('Check title', async ({ page }) => {
        await expect(page).toHaveTitle(/BROOKS/);
    });

    test('Check menu sections', async ({ page }) => {
        await expect(page.getByText('Розділи меню:For')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Розділи меню:' })).toHaveText('Розділи меню:');
     
        let countSections = await page.locator('*.main-menu-item').count();
       
        expect(countSections).toBeGreaterThanOrEqual(1);
    });

    test('Check restaurant info block', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Про заклад' })).toHaveText('Про заклад');
        await expect(page.getByRole('img', { name: 'address' })).toBeVisible();
        await expect(page.getByText('Адреса')).toContainText('Адреса');
       
        let subtitleAddress = await page.locator('*.subtitle').innerText();
        let innerAddress = await page.locator('*.about-text-val').first().innerText();
       
        expect(innerAddress).toEqual(subtitleAddress);
    });

    test('Check EN local', async ({ page }) => {
        let langButton = page.getByRole('button', { name: 'UA' });
       
        await langButton.click();
        await expect(page.getByText('EN', { exact: true })).toHaveText('EN');
        await page.getByText('EN', { exact: true }).click();
        await expect(page.getByRole('heading', { name: 'Menu sections:' })).toContainText('sections');
        await expect(page.getByRole('heading', { name: 'About us' })).toContainText('About');
    });

    test('Open first menu section', async ({ page }) => {
        let nameFirstSection = await page.locator('*.main-menu-item').first().innerText();
     
        await page.locator('*.main-menu-item').first().click();
        await expect(page.locator('label span')).toBeVisible();
        await expect(page.getByRole('link', { name: `${nameFirstSection}` })).toBeVisible();
    });
});
