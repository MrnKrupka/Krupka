import { test, expect } from '@playwright/test';

const baseUrl = 'https://expz.menu/';
const restaurantId = '7a1e0cf8-96e0-4fdf-93df-49db5ad755d0';
const menuId = '1408';

test.describe('Tests for restaurant menu - search dishes', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(baseUrl+restaurantId+'/menu?menuId='+menuId);
    });

    test('Check if search-block is visible', async ({ page }) => {
        const searchBlock = await page.locator(`//*[@id="search-element"]`);
        const searchIcon = await page.locator('label').getByRole('img');

        await expect(searchBlock).toBeVisible();
        await expect(searchIcon).toBeVisible();
    
        const placeholderValue = await searchBlock.getAttribute('placeholder');

        expect(placeholderValue).toBe('Назва страви');
        await searchIcon.click();
        await expect(searchBlock).toBeFocused();

        await expect(page).toHaveScreenshot();
    });

    test('Check search-warning - need more symbols', async ({ page }) => {
        const searchIcon = await page.locator('label').getByRole('img');
        const searchWarning = await page.locator('//*[@class="search-warning"]');

        await expect(searchWarning).toBeHidden();
        
        await searchIcon.click();
        await searchIcon.fill('T');
        await expect(searchWarning).toBeVisible();
        await expect(searchWarning).toHaveText('Введіть мінімум 2 символи');
    });

    test('Check search-warning - NOT need more symbols', async ({ page }) => {
        const searchIcon = await page.locator('label').getByRole('img');
        const searchWarning = await page.locator('//*[@class="search-warning"]');

        await expect(searchWarning).toBeHidden();
        
        await searchIcon.click();
        await searchIcon.fill('Tt');
        await expect(searchWarning).toBeVisible();
        await expect(searchWarning).toHaveText('Введіть мінімум 2 символи');
    });

    test('Check search-warning - don`t find dishes', async ({ page }) => {
        const searchIcon = await page.locator('label').getByRole('img');
        const searchWarning = await page.locator('//*[@class="search-warning"]');
        const emptySearch = await page.locator('//*[@class="empty-search-content"]');
        const emptySearchTitle = await page.locator('//*[@class="empty-search-title"]');
        const failedDishName = 'Ttt';


        await expect(searchWarning).toBeHidden();
        await expect(emptySearch).toBeHidden();

        
        await searchIcon.click();
        await searchIcon.fill(failedDishName);
        await expect(searchWarning).toBeHidden();

        await expect(emptySearch).toBeVisible();
        await expect(emptySearchTitle).toBeVisible();
        await expect(emptySearchTitle).toHaveText(`Шукали-шукали "${failedDishName}" та не знайшли`);
    });
});
