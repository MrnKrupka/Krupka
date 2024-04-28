import { test } from "./myFixture";
import { expect } from "@playwright/test"


test.beforeEach(async ({ clientMenuMainPage }) => {
  await clientMenuMainPage.goto;
});

test.describe("Main page", () => {
  test("Check title", async ({ clientMenuMainPage }) => {
    await clientMenuMainPage.checkTitle(/BROOKS/);
  });

  test("Check menu sections", async ({ clientMenuMainPage }) => {
    await expect(clientMenuMainPage.getCateriesBlock).toBeVisible();
    await expect(clientMenuMainPage.getCategoriesUa).toHaveText("Розділи меню:");

    let countSections = await clientMenuMainPage.getMenuItems.count();

    expect(countSections).toBeGreaterThanOrEqual(1);
  });

  test("Check restaurant info block", async ({ clientMenuMainPage }) => {
    await expect(clientMenuMainPage.aboutRestoBlockUa).toHaveText("Про заклад");
    await expect(clientMenuMainPage.iconAddress).toBeVisible();
    await expect(clientMenuMainPage.titleAddress).toContainText("Адреса");

    let subtitleAddress = await clientMenuMainPage.subtitleAddress.innerText();
    let innerAddress = await clientMenuMainPage.getInnerAddress.first().innerText();

    expect(innerAddress).toEqual(subtitleAddress);
  });

  test("Check EN local", async ({ clientMenuMainPage }) => {
    let langButton = clientMenuMainPage.langListButton;

    await langButton.click();
    await expect(clientMenuMainPage.langEn).toHaveText("EN");
    await clientMenuMainPage.langEn.click();
    await expect(clientMenuMainPage.getCategoriesEn).toContainText("sections");
    await expect(clientMenuMainPage.aboutRestoBlockEn).toContainText("About");
  });

  test("Open first menu section", async ({ clientMenuMainPage }) => {
    await clientMenuMainPage.openFirstSection();
  });
});
