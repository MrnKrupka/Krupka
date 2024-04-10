import { test, expect } from '@playwright/test';

const baseUrl = 'https://expz.menu/';
const restaurantId = '7a1e0cf8-96e0-4fdf-93df-49db5ad755d0';
const menuId = '1408';

test.describe('Tests for restaurant menu', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(baseUrl+restaurantId);
    });

    test('Check page title', async ({ page }) => {
        await expect(page).toHaveTitle(/BROOKS/);
        await expect(page.url()).toContain(restaurantId);
    });

    test('Check if logo is visible', async ({ page }) => {
        const logo = page.locator(`//img[@alt='restaurant logo']`);
        await expect(logo).toBeVisible();

        const srcAttribute = await logo.getAttribute('src');
        const expectedSrc = 'https://icons.monobank.com.ua/inf/icon-mdpi/brooks.png';
        await expect(srcAttribute).toEqual(expectedSrc);
    });

    test('Navigate to menu page', async ({ page }) => {
        let nameFirstSection = await page.locator(`//a[@class='main-menu-item' and contains(text(), 'Kitchen')]`).innerText();
        
        await page.goto(`${baseUrl}${restaurantId}/menu?menuId=${menuId}`);
        await expect(page.url()).toContain(menuId);

        let nameActiveSection = await page.locator('//nav/ul/li[4]/a').innerText();
        expect(nameFirstSection).toEqual(nameActiveSection);
    });
});
