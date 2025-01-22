import { networks } from "bitcoinjs-lib";

import { Network } from "@/core/types";

// 62 42 35 34
// Signet BTC
// Taproot tb1pkyuzc4w2lwxkcl9lvjl9ny24pduxg8nhjfv7epan5r7kszfky6gsqqn0wk
// Native SegWit tb1q2pgynqumcvhcd9vs4hzk2rzcfctuj9lu68nd57
// Nested SegWit 2N2kXB3LWH5uToJXN2QuYpiivFmbeavisDz
// Legacy mtAqM5GcvNkuJeSpkTm6KPWjCjWTPTVJoK

// Mainnet BTC
// Taproot bc1p8gvwe02v6m9juqxwq0wvshdtrzamd43hjse4p73an3mlvhkg3uqs7lusak
// Native SegWit bc1qej9hffyx4nt5y7g9s35r5r4nkp7adanraahlu4
// Nested SegWit 3EKYctto5ziebQ6nuEKhknZLjiJCDSfWCX
// Legacy 147ufF7p5j6fm2LazuZ1dYh8RYhP4TGAem

export function validateAddressNetwork(network: Network, address: string): void {
  if (network === Network.MAINNET && !address.startsWith("bc1")) {
    throw new Error("Incorrect address prefix for Mainnet. Expected address to start with 'bc1'.");
  } else if ([Network.SIGNET, Network.TESTNET].includes(network) && !address.startsWith("tb1")) {
    throw new Error("Incorrect address prefix for Testnet / Signet. Expected address to start with 'tb1'.");
  } else if (![Network.MAINNET, Network.SIGNET, Network.TESTNET].includes(network)) {
    throw new Error(`Unsupported network: ${network}. Please provide a valid network.`);
  }
}

export const toNetwork = (network: Network): networks.Network => {
  switch (network) {
    case Network.MAINNET:
      return networks.bitcoin;
    case Network.TESTNET:
    case Network.SIGNET:
      return networks.testnet;
    default:
      throw new Error("Unsupported network");
  }
};
