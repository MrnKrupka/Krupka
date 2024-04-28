import { test as base } from '@playwright/test';
import { ClientMenuMainPage } from "./po_testClientMenu_main";

type MyFixrures = {
    clientMenuMainPage: ClientMenuMainPage
}

export const test = base.extend<MyFixrures>({
    clientMenuMainPage: async ({ page }, use) => {
        const clientMenuMainPage = new ClientMenuMainPage(page);
        const baseUrl = "https://expz.menu/";
        const restaurantIdBrooks = "7a1e0cf8-96e0-4fdf-93df-49db5ad755d0";

        await clientMenuMainPage.goto(baseUrl, restaurantIdBrooks);
        await use(clientMenuMainPage);
      }
})

export { expect } from '@playwright/test';

