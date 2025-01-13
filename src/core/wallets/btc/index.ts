import type { BTCConfig, ChainMetadata, IBTCProvider } from "@/core/types";

import icon from "./bitcoin.png";
import bitget from "./bitget";
import cactus from "./cactus";
import injectable from "./injectable";
import keystone from "./keystone";
import okx from "./okx";
import onekey from "./onekey";
import unisat from "./unisat";

const metadata: ChainMetadata<"BTC", IBTCProvider, BTCConfig> = {
  chain: "BTC",
  name: "Bitcoin",
  icon,
  wallets: [injectable, okx, onekey, bitget, cactus, unisat, keystone],
};

export default metadata;
