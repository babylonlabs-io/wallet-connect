import { test } from "../fixtures/setupExtensions";

test.skip("Setup wallets and mnemonic", async ({ setupExtensions }) => {
  const { context } = await setupExtensions(["KEPLR", "OKX"]);
  const page = await context.newPage();
  await page.goto("/");
});
