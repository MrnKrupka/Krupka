import { test, expect } from "@playwright/test";
import { ClientMenuMainPage } from "./test_clients_menu_Main_page";

const baseUrl = "https://expz.menu/";
const restaurantIdBrooks = "7a1e0cf8-96e0-4fdf-93df-49db5ad755d0";

test.beforeEach(async ({ page }) => {
  const clientMenuMainPage = new ClientMenuMainPage(page);
  await clientMenuMainPage.goto(baseUrl, restaurantIdBrooks);
});

test.describe("Main page", () => {
  test("Check title", async ({ page }) => {
    const clientMenuMainPage = new ClientMenuMainPage(page);
    await clientMenuMainPage.checkTitle(/BROOKS/);
  });

  test("Check menu sections", async ({ page }) => {
    const clientMenuMainPage = new ClientMenuMainPage(page);
    await expect(clientMenuMainPage.getCateriesBlock).toBeVisible();
    await expect(clientMenuMainPage.getCategoriesUa).toHaveText("Розділи меню:");

    let countSections = await clientMenuMainPage.getMenuItems.count();

    expect(countSections).toBeGreaterThanOrEqual(1);
  });

  test("Check restaurant info block", async ({ page }) => {
    const clientMenuMainPage = new ClientMenuMainPage(page);
    await expect(clientMenuMainPage.aboutRestoBlockUa).toHaveText("Про заклад");
    await expect(clientMenuMainPage.iconAddress).toBeVisible();
    await expect(clientMenuMainPage.titleAddress).toContainText("Адреса");

    let subtitleAddress = await clientMenuMainPage.subtitleAddress.innerText();
    let innerAddress = await clientMenuMainPage.getInnerAddress.first().innerText();

    expect(innerAddress).toEqual(subtitleAddress);
  });

  test("Check EN local", async ({ page }) => {
    const clientMenuMainPage = new ClientMenuMainPage(page);
    let langButton = clientMenuMainPage.langListButton;

    await langButton.click();
    await expect(clientMenuMainPage.langEn).toHaveText("EN");
    await clientMenuMainPage.langEn.click();
    await expect(clientMenuMainPage.getCategoriesEn).toContainText("sections");
    await expect(clientMenuMainPage.aboutRestoBlockEn).toContainText("About");
  });

  test("Open first menu section", async ({ page }) => {
    const clientMenuMainPage = new ClientMenuMainPage(page);
    await clientMenuMainPage.openFirstSection();
  });
});
