"use strict";
(self["webpackChunkbundle_creator"] = self["webpackChunkbundle_creator"] || []).push([[940],{

/***/ 5761:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ CoreUtil),
/* harmony export */   D8: () => (/* binding */ ModalCtrl),
/* harmony export */   IN: () => (/* binding */ OptionsCtrl),
/* harmony export */   dC: () => (/* binding */ ToastCtrl),
/* harmony export */   jL: () => (/* binding */ RouterCtrl),
/* harmony export */   lH: () => (/* binding */ ThemeCtrl),
/* harmony export */   mb: () => (/* binding */ ConfigCtrl),
/* harmony export */   pV: () => (/* binding */ ExplorerCtrl),
/* harmony export */   vZ: () => (/* binding */ EventsCtrl)
/* harmony export */ });
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9073);


const state$7 = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
  history: ["ConnectWallet"],
  view: "ConnectWallet",
  data: void 0
});
const RouterCtrl = {
  state: state$7,
  subscribe(callback) {
    return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state$7, () => callback(state$7));
  },
  push(view, data) {
    if (view !== state$7.view) {
      state$7.view = view;
      if (data) {
        state$7.data = data;
      }
      state$7.history.push(view);
    }
  },
  reset(view) {
    state$7.view = view;
    state$7.history = [view];
  },
  replace(view) {
    if (state$7.history.length > 1) {
      state$7.history[state$7.history.length - 1] = view;
      state$7.view = view;
    }
  },
  goBack() {
    if (state$7.history.length > 1) {
      state$7.history.pop();
      const [last] = state$7.history.slice(-1);
      state$7.view = last;
    }
  },
  setData(data) {
    state$7.data = data;
  }
};

const CoreUtil = {
  WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  WCM_VERSION: "WCM_VERSION",
  RECOMMENDED_WALLET_AMOUNT: 9,
  isMobile() {
    if (typeof window !== "undefined") {
      return Boolean(
        window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)
      );
    }
    return false;
  },
  isAndroid() {
    return CoreUtil.isMobile() && navigator.userAgent.toLowerCase().includes("android");
  },
  isIos() {
    const ua = navigator.userAgent.toLowerCase();
    return CoreUtil.isMobile() && (ua.includes("iphone") || ua.includes("ipad"));
  },
  isHttpUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  },
  isArray(data) {
    return Array.isArray(data) && data.length > 0;
  },
  isTelegram() {
    return typeof window !== "undefined" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Boolean(window.TelegramWebviewProxy) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.Telegram) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.TelegramWebviewProxyProto));
  },
  formatNativeUrl(appUrl, wcUri, name) {
    if (CoreUtil.isHttpUrl(appUrl)) {
      return this.formatUniversalUrl(appUrl, wcUri, name);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.includes("://")) {
      safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      safeAppUrl = `${safeAppUrl}://`;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    this.setWalletConnectDeepLink(safeAppUrl, name);
    const encodedWcUrl = encodeURIComponent(wcUri);
    return `${safeAppUrl}wc?uri=${encodedWcUrl}`;
  },
  formatUniversalUrl(appUrl, wcUri, name) {
    if (!CoreUtil.isHttpUrl(appUrl)) {
      return this.formatNativeUrl(appUrl, wcUri, name);
    }
    let safeAppUrl = appUrl;
    if (safeAppUrl.startsWith("https://t.me")) {
      const formattedUri = Buffer.from(wcUri).toString("base64").replace(/[=]/g, "");
      if (safeAppUrl.endsWith("/")) {
        safeAppUrl = safeAppUrl.slice(0, -1);
      }
      this.setWalletConnectDeepLink(safeAppUrl, name);
      const url = new URL(safeAppUrl);
      url.searchParams.set("startapp", formattedUri);
      const link = url.toString();
      return link;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    this.setWalletConnectDeepLink(safeAppUrl, name);
    const encodedWcUrl = encodeURIComponent(wcUri);
    return `${safeAppUrl}wc?uri=${encodedWcUrl}`;
  },
  async wait(miliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, miliseconds);
    });
  },
  openHref(href, target) {
    const adjustedTarget = this.isTelegram() ? "_blank" : target;
    window.open(href, adjustedTarget, "noreferrer noopener");
  },
  setWalletConnectDeepLink(href, name) {
    try {
      localStorage.setItem(CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href, name }));
    } catch (e) {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  setWalletConnectAndroidDeepLink(wcUri) {
    try {
      const [href] = wcUri.split("?");
      localStorage.setItem(
        CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE,
        JSON.stringify({ href, name: "Android" })
      );
    } catch (e) {
      console.info("Unable to set WalletConnect android deep link");
    }
  },
  removeWalletConnectDeepLink() {
    try {
      localStorage.removeItem(CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE);
    } catch (e) {
      console.info("Unable to remove WalletConnect deep link");
    }
  },
  setModalVersionInStorage() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(CoreUtil.WCM_VERSION, "2.7.0");
      }
    } catch (e) {
      console.info("Unable to set Web3Modal version in storage");
    }
  },
  getWalletRouterData() {
    var _a;
    const routerData = (_a = RouterCtrl.state.data) == null ? void 0 : _a.Wallet;
    if (!routerData) {
      throw new Error('Missing "Wallet" view data');
    }
    return routerData;
  }
};

const isEnabled = typeof location !== "undefined" && (location.hostname.includes("localhost") || location.protocol.includes("https"));
const state$6 = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
  enabled: isEnabled,
  userSessionId: "",
  events: [],
  connectedWalletId: void 0
});
const EventsCtrl = {
  state: state$6,
  subscribe(callback) {
    return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state$6.events, () => callback((0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .snapshot */ .P9)(state$6.events[state$6.events.length - 1])));
  },
  initialize() {
    if (state$6.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) !== "undefined") {
      state$6.userSessionId = crypto.randomUUID();
    }
  },
  setConnectedWalletId(connectedWalletId) {
    state$6.connectedWalletId = connectedWalletId;
  },
  click(data) {
    if (state$6.enabled) {
      const event = {
        type: "CLICK",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  },
  track(data) {
    if (state$6.enabled) {
      const event = {
        type: "TRACK",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  },
  view(data) {
    if (state$6.enabled) {
      const event = {
        type: "VIEW",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  }
};

const state$5 = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
  chains: void 0,
  walletConnectUri: void 0,
  isAuth: false,
  isCustomDesktop: false,
  isCustomMobile: false,
  isDataLoaded: false,
  isUiLoaded: false
});
const OptionsCtrl = {
  state: state$5,
  subscribe(callback) {
    return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state$5, () => callback(state$5));
  },
  setChains(chains) {
    state$5.chains = chains;
  },
  setWalletConnectUri(walletConnectUri) {
    state$5.walletConnectUri = walletConnectUri;
  },
  setIsCustomDesktop(isCustomDesktop) {
    state$5.isCustomDesktop = isCustomDesktop;
  },
  setIsCustomMobile(isCustomMobile) {
    state$5.isCustomMobile = isCustomMobile;
  },
  setIsDataLoaded(isDataLoaded) {
    state$5.isDataLoaded = isDataLoaded;
  },
  setIsUiLoaded(isUiLoaded) {
    state$5.isUiLoaded = isUiLoaded;
  },
  setIsAuth(isAuth) {
    state$5.isAuth = isAuth;
  }
};

const state$4 = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
  projectId: "",
  mobileWallets: void 0,
  desktopWallets: void 0,
  walletImages: void 0,
  chains: void 0,
  enableAuthMode: false,
  enableExplorer: true,
  explorerExcludedWalletIds: void 0,
  explorerRecommendedWalletIds: void 0,
  termsOfServiceUrl: void 0,
  privacyPolicyUrl: void 0
});
const ConfigCtrl = {
  state: state$4,
  subscribe(callback) {
    return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state$4, () => callback(state$4));
  },
  setConfig(config) {
    var _a, _b;
    EventsCtrl.initialize();
    OptionsCtrl.setChains(config.chains);
    OptionsCtrl.setIsAuth(Boolean(config.enableAuthMode));
    OptionsCtrl.setIsCustomMobile(Boolean((_a = config.mobileWallets) == null ? void 0 : _a.length));
    OptionsCtrl.setIsCustomDesktop(Boolean((_b = config.desktopWallets) == null ? void 0 : _b.length));
    CoreUtil.setModalVersionInStorage();
    Object.assign(state$4, config);
  }
};

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
const W3M_API = "https://explorer-api.walletconnect.com";
const SDK_TYPE = "wcm";
const SDK_VERSION = `js-${"2.7.0"}`;
async function fetchListings(endpoint, params) {
  const allParams = __spreadValues$2({ sdkType: SDK_TYPE, sdkVersion: SDK_VERSION }, params);
  const url = new URL(endpoint, W3M_API);
  url.searchParams.append("projectId", ConfigCtrl.state.projectId);
  Object.entries(allParams).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(key, String(value));
    }
  });
  const request = await fetch(url);
  return request.json();
}
const ExplorerUtil = {
  async getDesktopListings(params) {
    return fetchListings("/w3m/v1/getDesktopListings", params);
  },
  async getMobileListings(params) {
    return fetchListings("/w3m/v1/getMobileListings", params);
  },
  async getInjectedListings(params) {
    return fetchListings("/w3m/v1/getInjectedListings", params);
  },
  async getAllListings(params) {
    return fetchListings("/w3m/v1/getAllListings", params);
  },
  getWalletImageUrl(imageId) {
    return `${W3M_API}/w3m/v1/getWalletImage/${imageId}?projectId=${ConfigCtrl.state.projectId}&sdkType=${SDK_TYPE}&sdkVersion=${SDK_VERSION}`;
  },
  getAssetImageUrl(imageId) {
    return `${W3M_API}/w3m/v1/getAssetImage/${imageId}?projectId=${ConfigCtrl.state.projectId}&sdkType=${SDK_TYPE}&sdkVersion=${SDK_VERSION}`;
  }
};

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
const isMobile = CoreUtil.isMobile();
const state$3 = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
  wallets: { listings: [], total: 0, page: 1 },
  search: { listings: [], total: 0, page: 1 },
  recomendedWallets: []
});
const ExplorerCtrl = {
  state: state$3,
  async getRecomendedWallets() {
    const { explorerRecommendedWalletIds, explorerExcludedWalletIds } = ConfigCtrl.state;
    if (explorerRecommendedWalletIds === "NONE" || explorerExcludedWalletIds === "ALL" && !explorerRecommendedWalletIds) {
      return state$3.recomendedWallets;
    }
    if (CoreUtil.isArray(explorerRecommendedWalletIds)) {
      const recommendedIds = explorerRecommendedWalletIds.join(",");
      const params = { recommendedIds };
      const { listings } = await ExplorerUtil.getAllListings(params);
      const listingsArr = Object.values(listings);
      listingsArr.sort((a, b) => {
        const aIndex = explorerRecommendedWalletIds.indexOf(a.id);
        const bIndex = explorerRecommendedWalletIds.indexOf(b.id);
        return aIndex - bIndex;
      });
      state$3.recomendedWallets = listingsArr;
    } else {
      const { chains, isAuth } = OptionsCtrl.state;
      const chainsFilter = chains == null ? void 0 : chains.join(",");
      const isExcluded = CoreUtil.isArray(explorerExcludedWalletIds);
      const params = {
        page: 1,
        sdks: isAuth ? "auth_v1" : void 0,
        entries: CoreUtil.RECOMMENDED_WALLET_AMOUNT,
        chains: chainsFilter,
        version: 2,
        excludedIds: isExcluded ? explorerExcludedWalletIds.join(",") : void 0
      };
      const { listings } = isMobile ? await ExplorerUtil.getMobileListings(params) : await ExplorerUtil.getDesktopListings(params);
      state$3.recomendedWallets = Object.values(listings);
    }
    return state$3.recomendedWallets;
  },
  async getWallets(params) {
    const extendedParams = __spreadValues$1({}, params);
    const { explorerRecommendedWalletIds, explorerExcludedWalletIds } = ConfigCtrl.state;
    const { recomendedWallets } = state$3;
    if (explorerExcludedWalletIds === "ALL") {
      return state$3.wallets;
    }
    if (recomendedWallets.length) {
      extendedParams.excludedIds = recomendedWallets.map((wallet) => wallet.id).join(",");
    } else if (CoreUtil.isArray(explorerRecommendedWalletIds)) {
      extendedParams.excludedIds = explorerRecommendedWalletIds.join(",");
    }
    if (CoreUtil.isArray(explorerExcludedWalletIds)) {
      extendedParams.excludedIds = [extendedParams.excludedIds, explorerExcludedWalletIds].filter(Boolean).join(",");
    }
    if (OptionsCtrl.state.isAuth) {
      extendedParams.sdks = "auth_v1";
    }
    const { page, search } = params;
    const { listings: listingsObj, total } = isMobile ? await ExplorerUtil.getMobileListings(extendedParams) : await ExplorerUtil.getDesktopListings(extendedParams);
    const listings = Object.values(listingsObj);
    const type = search ? "search" : "wallets";
    state$3[type] = {
      listings: [...state$3[type].listings, ...listings],
      total,
      page: page != null ? page : 1
    };
    return { listings, total };
  },
  getWalletImageUrl(imageId) {
    return ExplorerUtil.getWalletImageUrl(imageId);
  },
  getAssetImageUrl(imageId) {
    return ExplorerUtil.getAssetImageUrl(imageId);
  },
  resetSearch() {
    state$3.search = { listings: [], total: 0, page: 1 };
  }
};

const state$2 = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
  open: false
});
const ModalCtrl = {
  state: state$2,
  subscribe(callback) {
    return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state$2, () => callback(state$2));
  },
  async open(options) {
    return new Promise((resolve) => {
      const { isUiLoaded, isDataLoaded } = OptionsCtrl.state;
      CoreUtil.removeWalletConnectDeepLink();
      OptionsCtrl.setWalletConnectUri(options == null ? void 0 : options.uri);
      OptionsCtrl.setChains(options == null ? void 0 : options.chains);
      RouterCtrl.reset("ConnectWallet");
      if (isUiLoaded && isDataLoaded) {
        state$2.open = true;
        resolve();
      } else {
        const interval = setInterval(() => {
          const opts = OptionsCtrl.state;
          if (opts.isUiLoaded && opts.isDataLoaded) {
            clearInterval(interval);
            state$2.open = true;
            resolve();
          }
        }, 200);
      }
    });
  },
  close() {
    state$2.open = false;
  }
};

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function isDarkMode() {
  return typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const state$1 = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
  themeMode: isDarkMode() ? "dark" : "light"
});
const ThemeCtrl = {
  state: state$1,
  subscribe(callback) {
    return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state$1, () => callback(state$1));
  },
  setThemeConfig(theme) {
    const { themeMode, themeVariables } = theme;
    if (themeMode) {
      state$1.themeMode = themeMode;
    }
    if (themeVariables) {
      state$1.themeVariables = __spreadValues({}, themeVariables);
    }
  }
};

const state = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .proxy */ .BX)({
  open: false,
  message: "",
  variant: "success"
});
const ToastCtrl = {
  state,
  subscribe(callback) {
    return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(state, () => callback(state));
  },
  openToast(message, variant) {
    state.open = true;
    state.message = message;
    state.variant = variant;
  },
  closeToast() {
    state.open = false;
  }
};


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletConnectModal: () => (/* binding */ WalletConnectModal)
/* harmony export */ });
/* harmony import */ var _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5761);


class WalletConnectModal {
  constructor(config) {
    this.openModal = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl */ .D8.open;
    this.closeModal = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl */ .D8.close;
    this.subscribeModal = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl */ .D8.subscribe;
    this.setTheme = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ThemeCtrl */ .lH.setThemeConfig;
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ThemeCtrl */ .lH.setThemeConfig(config);
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ConfigCtrl */ .mb.setConfig(config);
    this.initUi();
  }
  async initUi() {
    if (typeof window !== "undefined") {
      await __webpack_require__.e(/* import() */ 653).then(__webpack_require__.bind(__webpack_require__, 9034));
      const modal = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", modal);
      _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .OptionsCtrl */ .IN.setIsUiLoaded(true);
    }
  }
}


//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLCtEQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1FQUFTO0FBQ3BCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFb0g7QUFDcEg7Ozs7Ozs7Ozs7OztBQ3RoQjBGOztBQUUxRjtBQUNBO0FBQ0EscUJBQXFCLDBFQUFTO0FBQzlCLHNCQUFzQiwwRUFBUztBQUMvQiwwQkFBMEIsMEVBQVM7QUFDbkMsb0JBQW9CLDBFQUFTO0FBQzdCLElBQUksMEVBQVM7QUFDYixJQUFJLDJFQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1HQUFpQztBQUM3QztBQUNBO0FBQ0EsTUFBTSw0RUFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRThCO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbW9kYWwtY29yZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L21vZGFsL2Rpc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJveHksIHN1YnNjcmliZSwgc25hcHNob3QgfSBmcm9tICd2YWx0aW8vdmFuaWxsYSc7XG5cbmNvbnN0IHN0YXRlJDcgPSBwcm94eSh7XG4gIGhpc3Rvcnk6IFtcIkNvbm5lY3RXYWxsZXRcIl0sXG4gIHZpZXc6IFwiQ29ubmVjdFdhbGxldFwiLFxuICBkYXRhOiB2b2lkIDBcbn0pO1xuY29uc3QgUm91dGVyQ3RybCA9IHtcbiAgc3RhdGU6IHN0YXRlJDcsXG4gIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgIHJldHVybiBzdWJzY3JpYmUoc3RhdGUkNywgKCkgPT4gY2FsbGJhY2soc3RhdGUkNykpO1xuICB9LFxuICBwdXNoKHZpZXcsIGRhdGEpIHtcbiAgICBpZiAodmlldyAhPT0gc3RhdGUkNy52aWV3KSB7XG4gICAgICBzdGF0ZSQ3LnZpZXcgPSB2aWV3O1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgc3RhdGUkNy5kYXRhID0gZGF0YTtcbiAgICAgIH1cbiAgICAgIHN0YXRlJDcuaGlzdG9yeS5wdXNoKHZpZXcpO1xuICAgIH1cbiAgfSxcbiAgcmVzZXQodmlldykge1xuICAgIHN0YXRlJDcudmlldyA9IHZpZXc7XG4gICAgc3RhdGUkNy5oaXN0b3J5ID0gW3ZpZXddO1xuICB9LFxuICByZXBsYWNlKHZpZXcpIHtcbiAgICBpZiAoc3RhdGUkNy5oaXN0b3J5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHN0YXRlJDcuaGlzdG9yeVtzdGF0ZSQ3Lmhpc3RvcnkubGVuZ3RoIC0gMV0gPSB2aWV3O1xuICAgICAgc3RhdGUkNy52aWV3ID0gdmlldztcbiAgICB9XG4gIH0sXG4gIGdvQmFjaygpIHtcbiAgICBpZiAoc3RhdGUkNy5oaXN0b3J5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHN0YXRlJDcuaGlzdG9yeS5wb3AoKTtcbiAgICAgIGNvbnN0IFtsYXN0XSA9IHN0YXRlJDcuaGlzdG9yeS5zbGljZSgtMSk7XG4gICAgICBzdGF0ZSQ3LnZpZXcgPSBsYXN0O1xuICAgIH1cbiAgfSxcbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgc3RhdGUkNy5kYXRhID0gZGF0YTtcbiAgfVxufTtcblxuY29uc3QgQ29yZVV0aWwgPSB7XG4gIFdBTExFVENPTk5FQ1RfREVFUExJTktfQ0hPSUNFOiBcIldBTExFVENPTk5FQ1RfREVFUExJTktfQ0hPSUNFXCIsXG4gIFdDTV9WRVJTSU9OOiBcIldDTV9WRVJTSU9OXCIsXG4gIFJFQ09NTUVOREVEX1dBTExFVF9BTU9VTlQ6IDksXG4gIGlzTW9iaWxlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocG9pbnRlcjpjb2Fyc2UpXCIpLm1hdGNoZXMgfHwgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fE9wZXJhIE1pbmkvdS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIGlzQW5kcm9pZCgpIHtcbiAgICByZXR1cm4gQ29yZVV0aWwuaXNNb2JpbGUoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJhbmRyb2lkXCIpO1xuICB9LFxuICBpc0lvcygpIHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gQ29yZVV0aWwuaXNNb2JpbGUoKSAmJiAodWEuaW5jbHVkZXMoXCJpcGhvbmVcIikgfHwgdWEuaW5jbHVkZXMoXCJpcGFkXCIpKTtcbiAgfSxcbiAgaXNIdHRwVXJsKHVybCkge1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgdXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKTtcbiAgfSxcbiAgaXNBcnJheShkYXRhKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwO1xuICB9LFxuICBpc1RlbGVncmFtKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgKEJvb2xlYW4od2luZG93LlRlbGVncmFtV2Vidmlld1Byb3h5KSB8fCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIEJvb2xlYW4od2luZG93LlRlbGVncmFtKSB8fCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIEJvb2xlYW4od2luZG93LlRlbGVncmFtV2Vidmlld1Byb3h5UHJvdG8pKTtcbiAgfSxcbiAgZm9ybWF0TmF0aXZlVXJsKGFwcFVybCwgd2NVcmksIG5hbWUpIHtcbiAgICBpZiAoQ29yZVV0aWwuaXNIdHRwVXJsKGFwcFVybCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFVuaXZlcnNhbFVybChhcHBVcmwsIHdjVXJpLCBuYW1lKTtcbiAgICB9XG4gICAgbGV0IHNhZmVBcHBVcmwgPSBhcHBVcmw7XG4gICAgaWYgKCFzYWZlQXBwVXJsLmluY2x1ZGVzKFwiOi8vXCIpKSB7XG4gICAgICBzYWZlQXBwVXJsID0gYXBwVXJsLnJlcGxhY2VBbGwoXCIvXCIsIFwiXCIpLnJlcGxhY2VBbGwoXCI6XCIsIFwiXCIpO1xuICAgICAgc2FmZUFwcFVybCA9IGAke3NhZmVBcHBVcmx9Oi8vYDtcbiAgICB9XG4gICAgaWYgKCFzYWZlQXBwVXJsLmVuZHNXaXRoKFwiL1wiKSkge1xuICAgICAgc2FmZUFwcFVybCA9IGAke3NhZmVBcHBVcmx9L2A7XG4gICAgfVxuICAgIHRoaXMuc2V0V2FsbGV0Q29ubmVjdERlZXBMaW5rKHNhZmVBcHBVcmwsIG5hbWUpO1xuICAgIGNvbnN0IGVuY29kZWRXY1VybCA9IGVuY29kZVVSSUNvbXBvbmVudCh3Y1VyaSk7XG4gICAgcmV0dXJuIGAke3NhZmVBcHBVcmx9d2M/dXJpPSR7ZW5jb2RlZFdjVXJsfWA7XG4gIH0sXG4gIGZvcm1hdFVuaXZlcnNhbFVybChhcHBVcmwsIHdjVXJpLCBuYW1lKSB7XG4gICAgaWYgKCFDb3JlVXRpbC5pc0h0dHBVcmwoYXBwVXJsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TmF0aXZlVXJsKGFwcFVybCwgd2NVcmksIG5hbWUpO1xuICAgIH1cbiAgICBsZXQgc2FmZUFwcFVybCA9IGFwcFVybDtcbiAgICBpZiAoc2FmZUFwcFVybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly90Lm1lXCIpKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRVcmkgPSBCdWZmZXIuZnJvbSh3Y1VyaSkudG9TdHJpbmcoXCJiYXNlNjRcIikucmVwbGFjZSgvWz1dL2csIFwiXCIpO1xuICAgICAgaWYgKHNhZmVBcHBVcmwuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgICAgIHNhZmVBcHBVcmwgPSBzYWZlQXBwVXJsLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0V2FsbGV0Q29ubmVjdERlZXBMaW5rKHNhZmVBcHBVcmwsIG5hbWUpO1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChzYWZlQXBwVXJsKTtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KFwic3RhcnRhcHBcIiwgZm9ybWF0dGVkVXJpKTtcbiAgICAgIGNvbnN0IGxpbmsgPSB1cmwudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBsaW5rO1xuICAgIH1cbiAgICBpZiAoIXNhZmVBcHBVcmwuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgICBzYWZlQXBwVXJsID0gYCR7c2FmZUFwcFVybH0vYDtcbiAgICB9XG4gICAgdGhpcy5zZXRXYWxsZXRDb25uZWN0RGVlcExpbmsoc2FmZUFwcFVybCwgbmFtZSk7XG4gICAgY29uc3QgZW5jb2RlZFdjVXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHdjVXJpKTtcbiAgICByZXR1cm4gYCR7c2FmZUFwcFVybH13Yz91cmk9JHtlbmNvZGVkV2NVcmx9YDtcbiAgfSxcbiAgYXN5bmMgd2FpdChtaWxpc2Vjb25kcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtaWxpc2Vjb25kcyk7XG4gICAgfSk7XG4gIH0sXG4gIG9wZW5IcmVmKGhyZWYsIHRhcmdldCkge1xuICAgIGNvbnN0IGFkanVzdGVkVGFyZ2V0ID0gdGhpcy5pc1RlbGVncmFtKCkgPyBcIl9ibGFua1wiIDogdGFyZ2V0O1xuICAgIHdpbmRvdy5vcGVuKGhyZWYsIGFkanVzdGVkVGFyZ2V0LCBcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIik7XG4gIH0sXG4gIHNldFdhbGxldENvbm5lY3REZWVwTGluayhocmVmLCBuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENvcmVVdGlsLldBTExFVENPTk5FQ1RfREVFUExJTktfQ0hPSUNFLCBKU09OLnN0cmluZ2lmeSh7IGhyZWYsIG5hbWUgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhcIlVuYWJsZSB0byBzZXQgV2FsbGV0Q29ubmVjdCBkZWVwIGxpbmtcIik7XG4gICAgfVxuICB9LFxuICBzZXRXYWxsZXRDb25uZWN0QW5kcm9pZERlZXBMaW5rKHdjVXJpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFtocmVmXSA9IHdjVXJpLnNwbGl0KFwiP1wiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBDb3JlVXRpbC5XQUxMRVRDT05ORUNUX0RFRVBMSU5LX0NIT0lDRSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBocmVmLCBuYW1lOiBcIkFuZHJvaWRcIiB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmluZm8oXCJVbmFibGUgdG8gc2V0IFdhbGxldENvbm5lY3QgYW5kcm9pZCBkZWVwIGxpbmtcIik7XG4gICAgfVxuICB9LFxuICByZW1vdmVXYWxsZXRDb25uZWN0RGVlcExpbmsoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENvcmVVdGlsLldBTExFVENPTk5FQ1RfREVFUExJTktfQ0hPSUNFKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmluZm8oXCJVbmFibGUgdG8gcmVtb3ZlIFdhbGxldENvbm5lY3QgZGVlcCBsaW5rXCIpO1xuICAgIH1cbiAgfSxcbiAgc2V0TW9kYWxWZXJzaW9uSW5TdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb3JlVXRpbC5XQ01fVkVSU0lPTiwgXCIyLjcuMFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmluZm8oXCJVbmFibGUgdG8gc2V0IFdlYjNNb2RhbCB2ZXJzaW9uIGluIHN0b3JhZ2VcIik7XG4gICAgfVxuICB9LFxuICBnZXRXYWxsZXRSb3V0ZXJEYXRhKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCByb3V0ZXJEYXRhID0gKF9hID0gUm91dGVyQ3RybC5zdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2EuV2FsbGV0O1xuICAgIGlmICghcm91dGVyRGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwiV2FsbGV0XCIgdmlldyBkYXRhJyk7XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXJEYXRhO1xuICB9XG59O1xuXG5jb25zdCBpc0VuYWJsZWQgPSB0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgKGxvY2F0aW9uLmhvc3RuYW1lLmluY2x1ZGVzKFwibG9jYWxob3N0XCIpIHx8IGxvY2F0aW9uLnByb3RvY29sLmluY2x1ZGVzKFwiaHR0cHNcIikpO1xuY29uc3Qgc3RhdGUkNiA9IHByb3h5KHtcbiAgZW5hYmxlZDogaXNFbmFibGVkLFxuICB1c2VyU2Vzc2lvbklkOiBcIlwiLFxuICBldmVudHM6IFtdLFxuICBjb25uZWN0ZWRXYWxsZXRJZDogdm9pZCAwXG59KTtcbmNvbnN0IEV2ZW50c0N0cmwgPSB7XG4gIHN0YXRlOiBzdGF0ZSQ2LFxuICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc3Vic2NyaWJlKHN0YXRlJDYuZXZlbnRzLCAoKSA9PiBjYWxsYmFjayhzbmFwc2hvdChzdGF0ZSQ2LmV2ZW50c1tzdGF0ZSQ2LmV2ZW50cy5sZW5ndGggLSAxXSkpKTtcbiAgfSxcbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoc3RhdGUkNi5lbmFibGVkICYmIHR5cGVvZiAoY3J5cHRvID09IG51bGwgPyB2b2lkIDAgOiBjcnlwdG8ucmFuZG9tVVVJRCkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHN0YXRlJDYudXNlclNlc3Npb25JZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgfVxuICB9LFxuICBzZXRDb25uZWN0ZWRXYWxsZXRJZChjb25uZWN0ZWRXYWxsZXRJZCkge1xuICAgIHN0YXRlJDYuY29ubmVjdGVkV2FsbGV0SWQgPSBjb25uZWN0ZWRXYWxsZXRJZDtcbiAgfSxcbiAgY2xpY2soZGF0YSkge1xuICAgIGlmIChzdGF0ZSQ2LmVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICB0eXBlOiBcIkNMSUNLXCIsXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgdXNlclNlc3Npb25JZDogc3RhdGUkNi51c2VyU2Vzc2lvbklkLFxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgIGRhdGFcbiAgICAgIH07XG4gICAgICBzdGF0ZSQ2LmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICB9XG4gIH0sXG4gIHRyYWNrKGRhdGEpIHtcbiAgICBpZiAoc3RhdGUkNi5lbmFibGVkKSB7XG4gICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgdHlwZTogXCJUUkFDS1wiLFxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHVzZXJTZXNzaW9uSWQ6IHN0YXRlJDYudXNlclNlc3Npb25JZCxcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICBkYXRhXG4gICAgICB9O1xuICAgICAgc3RhdGUkNi5ldmVudHMucHVzaChldmVudCk7XG4gICAgfVxuICB9LFxuICB2aWV3KGRhdGEpIHtcbiAgICBpZiAoc3RhdGUkNi5lbmFibGVkKSB7XG4gICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgdHlwZTogXCJWSUVXXCIsXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgdXNlclNlc3Npb25JZDogc3RhdGUkNi51c2VyU2Vzc2lvbklkLFxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgIGRhdGFcbiAgICAgIH07XG4gICAgICBzdGF0ZSQ2LmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHN0YXRlJDUgPSBwcm94eSh7XG4gIGNoYWluczogdm9pZCAwLFxuICB3YWxsZXRDb25uZWN0VXJpOiB2b2lkIDAsXG4gIGlzQXV0aDogZmFsc2UsXG4gIGlzQ3VzdG9tRGVza3RvcDogZmFsc2UsXG4gIGlzQ3VzdG9tTW9iaWxlOiBmYWxzZSxcbiAgaXNEYXRhTG9hZGVkOiBmYWxzZSxcbiAgaXNVaUxvYWRlZDogZmFsc2Vcbn0pO1xuY29uc3QgT3B0aW9uc0N0cmwgPSB7XG4gIHN0YXRlOiBzdGF0ZSQ1LFxuICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc3Vic2NyaWJlKHN0YXRlJDUsICgpID0+IGNhbGxiYWNrKHN0YXRlJDUpKTtcbiAgfSxcbiAgc2V0Q2hhaW5zKGNoYWlucykge1xuICAgIHN0YXRlJDUuY2hhaW5zID0gY2hhaW5zO1xuICB9LFxuICBzZXRXYWxsZXRDb25uZWN0VXJpKHdhbGxldENvbm5lY3RVcmkpIHtcbiAgICBzdGF0ZSQ1LndhbGxldENvbm5lY3RVcmkgPSB3YWxsZXRDb25uZWN0VXJpO1xuICB9LFxuICBzZXRJc0N1c3RvbURlc2t0b3AoaXNDdXN0b21EZXNrdG9wKSB7XG4gICAgc3RhdGUkNS5pc0N1c3RvbURlc2t0b3AgPSBpc0N1c3RvbURlc2t0b3A7XG4gIH0sXG4gIHNldElzQ3VzdG9tTW9iaWxlKGlzQ3VzdG9tTW9iaWxlKSB7XG4gICAgc3RhdGUkNS5pc0N1c3RvbU1vYmlsZSA9IGlzQ3VzdG9tTW9iaWxlO1xuICB9LFxuICBzZXRJc0RhdGFMb2FkZWQoaXNEYXRhTG9hZGVkKSB7XG4gICAgc3RhdGUkNS5pc0RhdGFMb2FkZWQgPSBpc0RhdGFMb2FkZWQ7XG4gIH0sXG4gIHNldElzVWlMb2FkZWQoaXNVaUxvYWRlZCkge1xuICAgIHN0YXRlJDUuaXNVaUxvYWRlZCA9IGlzVWlMb2FkZWQ7XG4gIH0sXG4gIHNldElzQXV0aChpc0F1dGgpIHtcbiAgICBzdGF0ZSQ1LmlzQXV0aCA9IGlzQXV0aDtcbiAgfVxufTtcblxuY29uc3Qgc3RhdGUkNCA9IHByb3h5KHtcbiAgcHJvamVjdElkOiBcIlwiLFxuICBtb2JpbGVXYWxsZXRzOiB2b2lkIDAsXG4gIGRlc2t0b3BXYWxsZXRzOiB2b2lkIDAsXG4gIHdhbGxldEltYWdlczogdm9pZCAwLFxuICBjaGFpbnM6IHZvaWQgMCxcbiAgZW5hYmxlQXV0aE1vZGU6IGZhbHNlLFxuICBlbmFibGVFeHBsb3JlcjogdHJ1ZSxcbiAgZXhwbG9yZXJFeGNsdWRlZFdhbGxldElkczogdm9pZCAwLFxuICBleHBsb3JlclJlY29tbWVuZGVkV2FsbGV0SWRzOiB2b2lkIDAsXG4gIHRlcm1zT2ZTZXJ2aWNlVXJsOiB2b2lkIDAsXG4gIHByaXZhY3lQb2xpY3lVcmw6IHZvaWQgMFxufSk7XG5jb25zdCBDb25maWdDdHJsID0ge1xuICBzdGF0ZTogc3RhdGUkNCxcbiAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZShzdGF0ZSQ0LCAoKSA9PiBjYWxsYmFjayhzdGF0ZSQ0KSk7XG4gIH0sXG4gIHNldENvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIEV2ZW50c0N0cmwuaW5pdGlhbGl6ZSgpO1xuICAgIE9wdGlvbnNDdHJsLnNldENoYWlucyhjb25maWcuY2hhaW5zKTtcbiAgICBPcHRpb25zQ3RybC5zZXRJc0F1dGgoQm9vbGVhbihjb25maWcuZW5hYmxlQXV0aE1vZGUpKTtcbiAgICBPcHRpb25zQ3RybC5zZXRJc0N1c3RvbU1vYmlsZShCb29sZWFuKChfYSA9IGNvbmZpZy5tb2JpbGVXYWxsZXRzKSA9PSBudWxsID8gdm9pZCAwIDogX2EubGVuZ3RoKSk7XG4gICAgT3B0aW9uc0N0cmwuc2V0SXNDdXN0b21EZXNrdG9wKEJvb2xlYW4oKF9iID0gY29uZmlnLmRlc2t0b3BXYWxsZXRzKSA9PSBudWxsID8gdm9pZCAwIDogX2IubGVuZ3RoKSk7XG4gICAgQ29yZVV0aWwuc2V0TW9kYWxWZXJzaW9uSW5TdG9yYWdlKCk7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSQ0LCBjb25maWcpO1xuICB9XG59O1xuXG52YXIgX19kZWZQcm9wJDIgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyQyID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AkMiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtJDIgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fZGVmTm9ybWFsUHJvcCQyID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcCQyKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyQyID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AkMi5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wJDIoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzJDIpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzJDIoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0kMi5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AkMihhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbmNvbnN0IFczTV9BUEkgPSBcImh0dHBzOi8vZXhwbG9yZXItYXBpLndhbGxldGNvbm5lY3QuY29tXCI7XG5jb25zdCBTREtfVFlQRSA9IFwid2NtXCI7XG5jb25zdCBTREtfVkVSU0lPTiA9IGBqcy0ke1wiMi43LjBcIn1gO1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hMaXN0aW5ncyhlbmRwb2ludCwgcGFyYW1zKSB7XG4gIGNvbnN0IGFsbFBhcmFtcyA9IF9fc3ByZWFkVmFsdWVzJDIoeyBzZGtUeXBlOiBTREtfVFlQRSwgc2RrVmVyc2lvbjogU0RLX1ZFUlNJT04gfSwgcGFyYW1zKTtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChlbmRwb2ludCwgVzNNX0FQSSk7XG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwicHJvamVjdElkXCIsIENvbmZpZ0N0cmwuc3RhdGUucHJvamVjdElkKTtcbiAgT2JqZWN0LmVudHJpZXMoYWxsUGFyYW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIHJldHVybiByZXF1ZXN0Lmpzb24oKTtcbn1cbmNvbnN0IEV4cGxvcmVyVXRpbCA9IHtcbiAgYXN5bmMgZ2V0RGVza3RvcExpc3RpbmdzKHBhcmFtcykge1xuICAgIHJldHVybiBmZXRjaExpc3RpbmdzKFwiL3czbS92MS9nZXREZXNrdG9wTGlzdGluZ3NcIiwgcGFyYW1zKTtcbiAgfSxcbiAgYXN5bmMgZ2V0TW9iaWxlTGlzdGluZ3MocGFyYW1zKSB7XG4gICAgcmV0dXJuIGZldGNoTGlzdGluZ3MoXCIvdzNtL3YxL2dldE1vYmlsZUxpc3RpbmdzXCIsIHBhcmFtcyk7XG4gIH0sXG4gIGFzeW5jIGdldEluamVjdGVkTGlzdGluZ3MocGFyYW1zKSB7XG4gICAgcmV0dXJuIGZldGNoTGlzdGluZ3MoXCIvdzNtL3YxL2dldEluamVjdGVkTGlzdGluZ3NcIiwgcGFyYW1zKTtcbiAgfSxcbiAgYXN5bmMgZ2V0QWxsTGlzdGluZ3MocGFyYW1zKSB7XG4gICAgcmV0dXJuIGZldGNoTGlzdGluZ3MoXCIvdzNtL3YxL2dldEFsbExpc3RpbmdzXCIsIHBhcmFtcyk7XG4gIH0sXG4gIGdldFdhbGxldEltYWdlVXJsKGltYWdlSWQpIHtcbiAgICByZXR1cm4gYCR7VzNNX0FQSX0vdzNtL3YxL2dldFdhbGxldEltYWdlLyR7aW1hZ2VJZH0/cHJvamVjdElkPSR7Q29uZmlnQ3RybC5zdGF0ZS5wcm9qZWN0SWR9JnNka1R5cGU9JHtTREtfVFlQRX0mc2RrVmVyc2lvbj0ke1NES19WRVJTSU9OfWA7XG4gIH0sXG4gIGdldEFzc2V0SW1hZ2VVcmwoaW1hZ2VJZCkge1xuICAgIHJldHVybiBgJHtXM01fQVBJfS93M20vdjEvZ2V0QXNzZXRJbWFnZS8ke2ltYWdlSWR9P3Byb2plY3RJZD0ke0NvbmZpZ0N0cmwuc3RhdGUucHJvamVjdElkfSZzZGtUeXBlPSR7U0RLX1RZUEV9JnNka1ZlcnNpb249JHtTREtfVkVSU0lPTn1gO1xuICB9XG59O1xuXG52YXIgX19kZWZQcm9wJDEgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyQxID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtJDEgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fZGVmTm9ybWFsUHJvcCQxID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcCQxKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyQxID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AkMS5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wJDEoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzJDEpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzJDEoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0kMS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AkMShhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbmNvbnN0IGlzTW9iaWxlID0gQ29yZVV0aWwuaXNNb2JpbGUoKTtcbmNvbnN0IHN0YXRlJDMgPSBwcm94eSh7XG4gIHdhbGxldHM6IHsgbGlzdGluZ3M6IFtdLCB0b3RhbDogMCwgcGFnZTogMSB9LFxuICBzZWFyY2g6IHsgbGlzdGluZ3M6IFtdLCB0b3RhbDogMCwgcGFnZTogMSB9LFxuICByZWNvbWVuZGVkV2FsbGV0czogW11cbn0pO1xuY29uc3QgRXhwbG9yZXJDdHJsID0ge1xuICBzdGF0ZTogc3RhdGUkMyxcbiAgYXN5bmMgZ2V0UmVjb21lbmRlZFdhbGxldHMoKSB7XG4gICAgY29uc3QgeyBleHBsb3JlclJlY29tbWVuZGVkV2FsbGV0SWRzLCBleHBsb3JlckV4Y2x1ZGVkV2FsbGV0SWRzIH0gPSBDb25maWdDdHJsLnN0YXRlO1xuICAgIGlmIChleHBsb3JlclJlY29tbWVuZGVkV2FsbGV0SWRzID09PSBcIk5PTkVcIiB8fCBleHBsb3JlckV4Y2x1ZGVkV2FsbGV0SWRzID09PSBcIkFMTFwiICYmICFleHBsb3JlclJlY29tbWVuZGVkV2FsbGV0SWRzKSB7XG4gICAgICByZXR1cm4gc3RhdGUkMy5yZWNvbWVuZGVkV2FsbGV0cztcbiAgICB9XG4gICAgaWYgKENvcmVVdGlsLmlzQXJyYXkoZXhwbG9yZXJSZWNvbW1lbmRlZFdhbGxldElkcykpIHtcbiAgICAgIGNvbnN0IHJlY29tbWVuZGVkSWRzID0gZXhwbG9yZXJSZWNvbW1lbmRlZFdhbGxldElkcy5qb2luKFwiLFwiKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHsgcmVjb21tZW5kZWRJZHMgfTtcbiAgICAgIGNvbnN0IHsgbGlzdGluZ3MgfSA9IGF3YWl0IEV4cGxvcmVyVXRpbC5nZXRBbGxMaXN0aW5ncyhwYXJhbXMpO1xuICAgICAgY29uc3QgbGlzdGluZ3NBcnIgPSBPYmplY3QudmFsdWVzKGxpc3RpbmdzKTtcbiAgICAgIGxpc3RpbmdzQXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYUluZGV4ID0gZXhwbG9yZXJSZWNvbW1lbmRlZFdhbGxldElkcy5pbmRleE9mKGEuaWQpO1xuICAgICAgICBjb25zdCBiSW5kZXggPSBleHBsb3JlclJlY29tbWVuZGVkV2FsbGV0SWRzLmluZGV4T2YoYi5pZCk7XG4gICAgICAgIHJldHVybiBhSW5kZXggLSBiSW5kZXg7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlJDMucmVjb21lbmRlZFdhbGxldHMgPSBsaXN0aW5nc0FycjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjaGFpbnMsIGlzQXV0aCB9ID0gT3B0aW9uc0N0cmwuc3RhdGU7XG4gICAgICBjb25zdCBjaGFpbnNGaWx0ZXIgPSBjaGFpbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGNoYWlucy5qb2luKFwiLFwiKTtcbiAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPSBDb3JlVXRpbC5pc0FycmF5KGV4cGxvcmVyRXhjbHVkZWRXYWxsZXRJZHMpO1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBzZGtzOiBpc0F1dGggPyBcImF1dGhfdjFcIiA6IHZvaWQgMCxcbiAgICAgICAgZW50cmllczogQ29yZVV0aWwuUkVDT01NRU5ERURfV0FMTEVUX0FNT1VOVCxcbiAgICAgICAgY2hhaW5zOiBjaGFpbnNGaWx0ZXIsXG4gICAgICAgIHZlcnNpb246IDIsXG4gICAgICAgIGV4Y2x1ZGVkSWRzOiBpc0V4Y2x1ZGVkID8gZXhwbG9yZXJFeGNsdWRlZFdhbGxldElkcy5qb2luKFwiLFwiKSA6IHZvaWQgMFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHsgbGlzdGluZ3MgfSA9IGlzTW9iaWxlID8gYXdhaXQgRXhwbG9yZXJVdGlsLmdldE1vYmlsZUxpc3RpbmdzKHBhcmFtcykgOiBhd2FpdCBFeHBsb3JlclV0aWwuZ2V0RGVza3RvcExpc3RpbmdzKHBhcmFtcyk7XG4gICAgICBzdGF0ZSQzLnJlY29tZW5kZWRXYWxsZXRzID0gT2JqZWN0LnZhbHVlcyhsaXN0aW5ncyk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZSQzLnJlY29tZW5kZWRXYWxsZXRzO1xuICB9LFxuICBhc3luYyBnZXRXYWxsZXRzKHBhcmFtcykge1xuICAgIGNvbnN0IGV4dGVuZGVkUGFyYW1zID0gX19zcHJlYWRWYWx1ZXMkMSh7fSwgcGFyYW1zKTtcbiAgICBjb25zdCB7IGV4cGxvcmVyUmVjb21tZW5kZWRXYWxsZXRJZHMsIGV4cGxvcmVyRXhjbHVkZWRXYWxsZXRJZHMgfSA9IENvbmZpZ0N0cmwuc3RhdGU7XG4gICAgY29uc3QgeyByZWNvbWVuZGVkV2FsbGV0cyB9ID0gc3RhdGUkMztcbiAgICBpZiAoZXhwbG9yZXJFeGNsdWRlZFdhbGxldElkcyA9PT0gXCJBTExcIikge1xuICAgICAgcmV0dXJuIHN0YXRlJDMud2FsbGV0cztcbiAgICB9XG4gICAgaWYgKHJlY29tZW5kZWRXYWxsZXRzLmxlbmd0aCkge1xuICAgICAgZXh0ZW5kZWRQYXJhbXMuZXhjbHVkZWRJZHMgPSByZWNvbWVuZGVkV2FsbGV0cy5tYXAoKHdhbGxldCkgPT4gd2FsbGV0LmlkKS5qb2luKFwiLFwiKTtcbiAgICB9IGVsc2UgaWYgKENvcmVVdGlsLmlzQXJyYXkoZXhwbG9yZXJSZWNvbW1lbmRlZFdhbGxldElkcykpIHtcbiAgICAgIGV4dGVuZGVkUGFyYW1zLmV4Y2x1ZGVkSWRzID0gZXhwbG9yZXJSZWNvbW1lbmRlZFdhbGxldElkcy5qb2luKFwiLFwiKTtcbiAgICB9XG4gICAgaWYgKENvcmVVdGlsLmlzQXJyYXkoZXhwbG9yZXJFeGNsdWRlZFdhbGxldElkcykpIHtcbiAgICAgIGV4dGVuZGVkUGFyYW1zLmV4Y2x1ZGVkSWRzID0gW2V4dGVuZGVkUGFyYW1zLmV4Y2x1ZGVkSWRzLCBleHBsb3JlckV4Y2x1ZGVkV2FsbGV0SWRzXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIixcIik7XG4gICAgfVxuICAgIGlmIChPcHRpb25zQ3RybC5zdGF0ZS5pc0F1dGgpIHtcbiAgICAgIGV4dGVuZGVkUGFyYW1zLnNka3MgPSBcImF1dGhfdjFcIjtcbiAgICB9XG4gICAgY29uc3QgeyBwYWdlLCBzZWFyY2ggfSA9IHBhcmFtcztcbiAgICBjb25zdCB7IGxpc3RpbmdzOiBsaXN0aW5nc09iaiwgdG90YWwgfSA9IGlzTW9iaWxlID8gYXdhaXQgRXhwbG9yZXJVdGlsLmdldE1vYmlsZUxpc3RpbmdzKGV4dGVuZGVkUGFyYW1zKSA6IGF3YWl0IEV4cGxvcmVyVXRpbC5nZXREZXNrdG9wTGlzdGluZ3MoZXh0ZW5kZWRQYXJhbXMpO1xuICAgIGNvbnN0IGxpc3RpbmdzID0gT2JqZWN0LnZhbHVlcyhsaXN0aW5nc09iaik7XG4gICAgY29uc3QgdHlwZSA9IHNlYXJjaCA/IFwic2VhcmNoXCIgOiBcIndhbGxldHNcIjtcbiAgICBzdGF0ZSQzW3R5cGVdID0ge1xuICAgICAgbGlzdGluZ3M6IFsuLi5zdGF0ZSQzW3R5cGVdLmxpc3RpbmdzLCAuLi5saXN0aW5nc10sXG4gICAgICB0b3RhbCxcbiAgICAgIHBhZ2U6IHBhZ2UgIT0gbnVsbCA/IHBhZ2UgOiAxXG4gICAgfTtcbiAgICByZXR1cm4geyBsaXN0aW5ncywgdG90YWwgfTtcbiAgfSxcbiAgZ2V0V2FsbGV0SW1hZ2VVcmwoaW1hZ2VJZCkge1xuICAgIHJldHVybiBFeHBsb3JlclV0aWwuZ2V0V2FsbGV0SW1hZ2VVcmwoaW1hZ2VJZCk7XG4gIH0sXG4gIGdldEFzc2V0SW1hZ2VVcmwoaW1hZ2VJZCkge1xuICAgIHJldHVybiBFeHBsb3JlclV0aWwuZ2V0QXNzZXRJbWFnZVVybChpbWFnZUlkKTtcbiAgfSxcbiAgcmVzZXRTZWFyY2goKSB7XG4gICAgc3RhdGUkMy5zZWFyY2ggPSB7IGxpc3RpbmdzOiBbXSwgdG90YWw6IDAsIHBhZ2U6IDEgfTtcbiAgfVxufTtcblxuY29uc3Qgc3RhdGUkMiA9IHByb3h5KHtcbiAgb3BlbjogZmFsc2Vcbn0pO1xuY29uc3QgTW9kYWxDdHJsID0ge1xuICBzdGF0ZTogc3RhdGUkMixcbiAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZShzdGF0ZSQyLCAoKSA9PiBjYWxsYmFjayhzdGF0ZSQyKSk7XG4gIH0sXG4gIGFzeW5jIG9wZW4ob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgeyBpc1VpTG9hZGVkLCBpc0RhdGFMb2FkZWQgfSA9IE9wdGlvbnNDdHJsLnN0YXRlO1xuICAgICAgQ29yZVV0aWwucmVtb3ZlV2FsbGV0Q29ubmVjdERlZXBMaW5rKCk7XG4gICAgICBPcHRpb25zQ3RybC5zZXRXYWxsZXRDb25uZWN0VXJpKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudXJpKTtcbiAgICAgIE9wdGlvbnNDdHJsLnNldENoYWlucyhvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmNoYWlucyk7XG4gICAgICBSb3V0ZXJDdHJsLnJlc2V0KFwiQ29ubmVjdFdhbGxldFwiKTtcbiAgICAgIGlmIChpc1VpTG9hZGVkICYmIGlzRGF0YUxvYWRlZCkge1xuICAgICAgICBzdGF0ZSQyLm9wZW4gPSB0cnVlO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRzID0gT3B0aW9uc0N0cmwuc3RhdGU7XG4gICAgICAgICAgaWYgKG9wdHMuaXNVaUxvYWRlZCAmJiBvcHRzLmlzRGF0YUxvYWRlZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICBzdGF0ZSQyLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgY2xvc2UoKSB7XG4gICAgc3RhdGUkMi5vcGVuID0gZmFsc2U7XG4gIH1cbn07XG5cbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fc3ByZWFkVmFsdWVzID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcbiAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgaWYgKF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKGIpKSB7XG4gICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbmZ1bmN0aW9uIGlzRGFya01vZGUoKSB7XG4gIHJldHVybiB0eXBlb2YgbWF0Y2hNZWRpYSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzO1xufVxuY29uc3Qgc3RhdGUkMSA9IHByb3h5KHtcbiAgdGhlbWVNb2RlOiBpc0RhcmtNb2RlKCkgPyBcImRhcmtcIiA6IFwibGlnaHRcIlxufSk7XG5jb25zdCBUaGVtZUN0cmwgPSB7XG4gIHN0YXRlOiBzdGF0ZSQxLFxuICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc3Vic2NyaWJlKHN0YXRlJDEsICgpID0+IGNhbGxiYWNrKHN0YXRlJDEpKTtcbiAgfSxcbiAgc2V0VGhlbWVDb25maWcodGhlbWUpIHtcbiAgICBjb25zdCB7IHRoZW1lTW9kZSwgdGhlbWVWYXJpYWJsZXMgfSA9IHRoZW1lO1xuICAgIGlmICh0aGVtZU1vZGUpIHtcbiAgICAgIHN0YXRlJDEudGhlbWVNb2RlID0gdGhlbWVNb2RlO1xuICAgIH1cbiAgICBpZiAodGhlbWVWYXJpYWJsZXMpIHtcbiAgICAgIHN0YXRlJDEudGhlbWVWYXJpYWJsZXMgPSBfX3NwcmVhZFZhbHVlcyh7fSwgdGhlbWVWYXJpYWJsZXMpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc3RhdGUgPSBwcm94eSh7XG4gIG9wZW46IGZhbHNlLFxuICBtZXNzYWdlOiBcIlwiLFxuICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxufSk7XG5jb25zdCBUb2FzdEN0cmwgPSB7XG4gIHN0YXRlLFxuICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc3Vic2NyaWJlKHN0YXRlLCAoKSA9PiBjYWxsYmFjayhzdGF0ZSkpO1xuICB9LFxuICBvcGVuVG9hc3QobWVzc2FnZSwgdmFyaWFudCkge1xuICAgIHN0YXRlLm9wZW4gPSB0cnVlO1xuICAgIHN0YXRlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHN0YXRlLnZhcmlhbnQgPSB2YXJpYW50O1xuICB9LFxuICBjbG9zZVRvYXN0KCkge1xuICAgIHN0YXRlLm9wZW4gPSBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IHsgQ29uZmlnQ3RybCwgQ29yZVV0aWwsIEV2ZW50c0N0cmwsIEV4cGxvcmVyQ3RybCwgTW9kYWxDdHJsLCBPcHRpb25zQ3RybCwgUm91dGVyQ3RybCwgVGhlbWVDdHJsLCBUb2FzdEN0cmwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiaW1wb3J0IHsgTW9kYWxDdHJsLCBUaGVtZUN0cmwsIENvbmZpZ0N0cmwsIE9wdGlvbnNDdHJsIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvbW9kYWwtY29yZSc7XG5cbmNsYXNzIFdhbGxldENvbm5lY3RNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMub3Blbk1vZGFsID0gTW9kYWxDdHJsLm9wZW47XG4gICAgdGhpcy5jbG9zZU1vZGFsID0gTW9kYWxDdHJsLmNsb3NlO1xuICAgIHRoaXMuc3Vic2NyaWJlTW9kYWwgPSBNb2RhbEN0cmwuc3Vic2NyaWJlO1xuICAgIHRoaXMuc2V0VGhlbWUgPSBUaGVtZUN0cmwuc2V0VGhlbWVDb25maWc7XG4gICAgVGhlbWVDdHJsLnNldFRoZW1lQ29uZmlnKGNvbmZpZyk7XG4gICAgQ29uZmlnQ3RybC5zZXRDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLmluaXRVaSgpO1xuICB9XG4gIGFzeW5jIGluaXRVaSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgYXdhaXQgaW1wb3J0KCdAd2FsbGV0Y29ubmVjdC9tb2RhbC11aScpO1xuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwid2NtLW1vZGFsXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgbW9kYWwpO1xuICAgICAgT3B0aW9uc0N0cmwuc2V0SXNVaUxvYWRlZCh0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgV2FsbGV0Q29ubmVjdE1vZGFsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==