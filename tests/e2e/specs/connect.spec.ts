import { test } from "../fixtures/setupExtensions";

test("Connect story", async ({ setupExtensions }) => {
  const { context } = await setupExtensions(["KEPLR", "OKX"]);
  const page = await context.newPage();
  await page.goto("/?path=/docs/components-chainbutton--docs");
  await page.getByRole("button", { name: "WalletProvider" }).click();
  await page.getByRole("link", { name: "With Connected Data" }).click();
  await page.getByRole("button", { name: "Hide addons [⌥ A]" }).click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByRole("button", { name: "Connect Wallet" })
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByText("I certify that I have read")
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByText("I certify that I wish to")
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByText("I acknowledge that Keystone")
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByRole("button", { name: "Next" })
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByRole("button", { name: "Bitcoin Select Bitcoin Wallet" })
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByRole("button", { name: "OKX OKX Installed" })
    .click();
  // Right after the user’s action that triggers the extension popup:
  const [popupOKX] = await Promise.all([
    context.waitForEvent("page"),
    // e.g., clicking a button in your main app that triggers the extension pop-up
  ]);
  // Now popupPage *should* reference the ephemeral extension window
  await popupOKX.waitForLoadState("domcontentloaded");
  await popupOKX.bringToFront();
  // await popupOKX.waitForTimeout(2000);
  const connectButtonOKX = popupOKX.getByRole("button", { name: "Connect" });
  // Wait for the button to be rendered (attached) and visible
  await connectButtonOKX.waitFor({ state: "visible" });
  // Then click it
  await connectButtonOKX.click();
  await popupOKX.close();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByText("Unlock bitcoin UTXOs with")
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByRole("button", { name: "Save" })
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByRole("button", { name: "Babylon Chain Select Babylon" })
    .click();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByRole("button", { name: "Keplr Keplr Installed" })
    .click();
  // Right after the user’s action that triggers the extension popup:
  const [popupKeplr] = await Promise.all([
    context.waitForEvent("page"),
    // e.g., clicking a button in your main app that triggers the extension pop-up
  ]);
  // Now popupKeplr *should* reference the ephemeral extension window
  await popupKeplr.waitForLoadState("domcontentloaded");
  await popupKeplr.bringToFront();
  // await popupKeplr.waitForTimeout(2000);
  const approveButtonKeplr = popupKeplr.getByRole("button", { name: "Approve" });
  // Wait for the button to be rendered (attached) and visible
  await approveButtonKeplr.waitFor({ state: "visible" });
  // Then click it
  await approveButtonKeplr.click();
  await popupKeplr.close();
  await page
    .locator('iframe[title="storybook-preview-iframe"]')
    .contentFrame()
    .getByRole("button", { name: "Done" })
    .click();
  await page.pause();
});
