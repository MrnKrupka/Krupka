import { test, expect } from "@playwright/test";
import { WikiAboutPage } from "../po/wiki_about";

test.describe("Wiki About Page test", () => {
  test.beforeEach(async ({ page }) => {
    const WikiAbout = new WikiAboutPage(page);
    await WikiAbout.goto();
  });

  test("About - header elements", async ({ page }) => {
    const WikiAbout = new WikiAboutPage(page);

    await WikiAbout.getMenuBtn;
    await WikiAbout.getWikiIcn;
    await WikiAbout.getSearchWikiFld;
    await WikiAbout.getSearchWikiBtn;
    await WikiAbout.getCreateAcc;
    await WikiAbout.getLogIn;
    await WikiAbout.getSideOptionsBtn;
  });

  test("About - content tabs", async ({ page }) => {
    const WikiAbout = new WikiAboutPage(page);
    await WikiAbout.pageTitle;
    await expect(WikiAbout.getProjectPage).toBeVisible();
    await WikiAbout.getTalkTab;
    await WikiAbout.getReadTab;
    await WikiAbout.getViewSourceTab;
    await WikiAbout.getViewHistoryTab;
    await WikiAbout.getToolsTab;
  });

  test("About - content", async ({ page }) => {
    const WikiAbout = new WikiAboutPage(page);
    await WikiAbout.checkTitle(/Wikipedia:About/);
    await WikiAbout.getProjectPage;
    await WikiAbout.getProjectPageContent;
  });

  test("About - footer", async ({ page }) => {
    const WikiAbout = new WikiAboutPage(page);
    await expect(WikiAbout.getFooterContent).toContainText("This page was last edited");
  });
});

