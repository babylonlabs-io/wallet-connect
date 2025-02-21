import { BBNConfig, ChainMetadata, IBBNProvider } from "@/core/types";

import cosmostation from "./cosmostation";
import icon from "./icon.svg";
import injectable from "./injectable";
import keplr from "./keplr";
import leap from "./leap";
import okx from "./okx";

const metadata: ChainMetadata<"BBN", IBBNProvider, BBNConfig> = {
  chain: "BBN",
  name: "Babylon Chain",
  icon,
  wallets: [injectable, keplr, leap, okx, cosmostation],
};

export default metadata;
