export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  const userAgent = window.navigator.userAgent;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileBrowser = mobileRegex.test(userAgent);
  const hasAppSpecificIdentifiers = /OKX|Binance|Trust\/|TokenPocket|imToken/i.test(userAgent);
  const isMobileSize = window.innerWidth <= 768;

  const result = isMobileBrowser || hasAppSpecificIdentifiers || isMobileSize;

  return result;
};

export const hasInjectableWallets = (): boolean => {
  if (typeof window === "undefined") return false;

  const hasBtcWallet = typeof (window as any).btcwallet !== "undefined";
  const hasBbnWallet = typeof (window as any).bbnwallet !== "undefined";

  const result = hasBtcWallet || hasBbnWallet;

  return result;
};

export const isDesktopWalletApp = (): boolean => {
  if (typeof window === "undefined") return false;

  if (isMobileDevice()) {
    return false;
  }

  const hasInjectables = hasInjectableWallets();

  if (hasInjectables) {
    return true;
  }

  const userAgent = window.navigator.userAgent;
  if (userAgent.includes("Wallet") || userAgent.includes("wallet")) {
    return true;
  }

  return false;
};

export const shouldShowInjectableWallets = (): boolean => {
  if (isMobileDevice()) {
    return true;
  }

  return isDesktopWalletApp();
};
