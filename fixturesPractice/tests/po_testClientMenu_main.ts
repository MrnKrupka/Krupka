import { expect, type Locator, type Page } from "@playwright/test";

export class ClientMenuMainPage {
  readonly page: Page;
  readonly getCateriesBlock: Locator;
  readonly getCategoriesUa: Locator;
  readonly getMenuItems: Locator;
  readonly aboutRestoBlockUa: Locator;
  readonly iconAddress: Locator;
  readonly titleAddress: Locator;
  readonly subtitleAddress: Locator;
  readonly getInnerAddress: Locator;
  readonly langListButton: Locator;
  readonly langEn: Locator;
  readonly getCategoriesEn: Locator;
  readonly aboutRestoBlockEn: Locator;
  readonly getLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getCateriesBlock = page.getByText("Розділи меню:For");
    this.getCategoriesUa = page.getByRole("heading", { name: "Розділи меню:" });
    this.getMenuItems = page.locator("*.main-menu-item");
    this.aboutRestoBlockUa = page.getByRole("heading", { name: "Про заклад" });
    this.iconAddress = page.getByRole("img", { name: "address" });
    this.titleAddress = page.getByText("Адреса");
    this.subtitleAddress = page.locator("*.subtitle");
    this.getInnerAddress = page.locator("*.about-text-val");
    this.langListButton = page.getByRole("button", { name: "UA" });
    this.langEn = page.getByText("EN", { exact: true });
    this.getCategoriesEn = page.getByRole("heading", { name: "Menu sections:" });
    this.aboutRestoBlockEn = page.getByRole("heading", { name: "About us" });
    this.getLabel = page.locator("label span");
  }

  async goto(baseUrl: string, restaurantIdBrooks: string) {
    const url = `${baseUrl}${restaurantIdBrooks}`;

    await this.page.goto(url);
  }

  async checkTitle(expectedTitle: RegExp) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async openFirstSection() {
    let firstMenuItem = await this.getMenuItems.first();
    let nameFirstSection = await firstMenuItem.innerText();

    await firstMenuItem.click();
    await expect(this.getLabel).toBeVisible();
    await expect(this.page.getByRole("link", { name: `${nameFirstSection}` })).toBeVisible();
  }
}
