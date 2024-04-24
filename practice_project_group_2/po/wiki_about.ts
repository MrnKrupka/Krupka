import { expect, type Locator, type Page } from '@playwright/test';

export class WikiAboutPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly getWikiIcn: Locator;
  readonly getMenuBtn: Locator;
  readonly getSearchWikiFld: Locator;
  readonly getSearchWikiBtn: Locator;
  readonly getCreateAcc: Locator;
  readonly getLogIn: Locator;
  readonly getSideOptionsBtn: Locator;
  readonly getProjectPage: Locator;
  readonly getProjectPageContent: Locator;
  readonly getTalkTab: Locator;
  readonly getReadTab: Locator;
  readonly getViewSourceTab: Locator;
  readonly getViewHistoryTab: Locator;
  readonly getToolsTab: Locator;
  readonly getFooterContent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator("//*[@id='firstHeading']");
    this.getWikiIcn = page.locator("//img[@class='mw-logo-icon']");
    this.getMenuBtn = page.locator("//*[@id='vector-main-menu-dropdown-checkbox']");
    this.getSearchWikiFld = page.locator("//*[@id='searchInput']");
    this.getSearchWikiBtn = page.locator("//button[@class='cdx-button cdx-search-input__end-button']");
    this.getCreateAcc = page.locator("//*[@id='pt-createaccount-2']/a/span");
    this.getLogIn = page.locator("//*[@id='pt-login-2']/a/span");
    this.getSideOptionsBtn = page.locator("//*[@id='vector-user-links-dropdown-checkbox']");
    this.getProjectPage = page.locator("#ca-nstab-project");
    this.getProjectPageContent = page.locator("//*[@id='bodyContent']");
    this.getTalkTab = page.locator("//*[@id='ca-talk']");
    this.getReadTab = page.locator("//*[@id='ca-view']/a/span");
    this.getViewSourceTab = page.locator("//*[@id='ca-viewsource']/a/span");
    this.getViewHistoryTab = page.locator("//*[@id='ca-history']/a/span");
    this.getToolsTab = page.locator("//*[@id='vector-page-tools-dropdown-label']/span");
    this.getFooterContent = page.locator("//*[@id='footer']");
    
  };

  async goto() {
    await this.page.goto('https://en.wikipedia.org/wiki/Wikipedia:About');
  };

  async checkTitle(expectedTitle: RegExp) {
    await expect(this.page).toHaveTitle(expectedTitle);
  };
}