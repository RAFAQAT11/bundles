"use strict";
(self["webpackChunkbundle_creator"] = self["webpackChunkbundle_creator"] || []).push([[34],{

/***/ 7034:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mModal: () => (/* reexport */ W3mModal)
});

// EXTERNAL MODULE: ./node_modules/@web3modal/core/dist/esm/index.js + 30 modules
var esm = __webpack_require__(1525);
// EXTERNAL MODULE: ./node_modules/@web3modal/ui/dist/esm/index.js + 256 modules
var dist_esm = __webpack_require__(6375);
// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(2618);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(5707);
;// ./node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-modal/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-modal/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const SCROLL_LOCK = 'scroll-lock';
let W3mModal = class W3mModal extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.abortController = undefined;
        this.open = esm/* ModalController */.W3.state.open;
        this.caipAddress = esm/* AccountController */.Uj.state.caipAddress;
        this.isSiweEnabled = esm/* OptionsController */.Hd.state.isSiweEnabled;
        this.connected = esm/* AccountController */.Uj.state.isConnected;
        this.loading = esm/* ModalController */.W3.state.loading;
        this.shake = esm/* ModalController */.W3.state.shake;
        this.initializeTheming();
        esm/* ApiController */.Np.prefetch();
        this.unsubscribe.push(...[
            esm/* ModalController */.W3.subscribeKey('open', val => (val ? this.onOpen() : this.onClose())),
            esm/* ModalController */.W3.subscribeKey('shake', val => (this.shake = val)),
            esm/* ModalController */.W3.subscribeKey('loading', val => {
                this.loading = val;
                this.onNewAddress(esm/* AccountController */.Uj.state.caipAddress);
            }),
            esm/* AccountController */.Uj.subscribeKey('isConnected', val => (this.connected = val)),
            esm/* AccountController */.Uj.subscribeKey('caipAddress', val => this.onNewAddress(val)),
            esm/* OptionsController */.Hd.subscribeKey('isSiweEnabled', val => (this.isSiweEnabled = val))
        ]);
        esm/* EventsController */.En.sendEvent({ type: 'track', event: 'MODAL_LOADED' });
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.onRemoveKeyboardListener();
    }
    render() {
        return this.open
            ? (0,lit/* html */.qy) `
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
            : null;
    }
    async onOverlayClick(event) {
        if (event.target === event.currentTarget) {
            await this.handleClose();
        }
    }
    async handleClose() {
        const isSiweSignScreen = esm/* RouterController */.IN.state.view === 'ConnectingSiwe';
        const isApproveSignScreen = esm/* RouterController */.IN.state.view === 'ApproveTransaction';
        if (this.isSiweEnabled) {
            const { SIWEController } = await __webpack_require__.e(/* import() */ 54).then(__webpack_require__.bind(__webpack_require__, 54));
            const isUnauthenticated = SIWEController.state.status !== 'success';
            if (isUnauthenticated && (isSiweSignScreen || isApproveSignScreen)) {
                esm/* ModalController */.W3.shake();
            }
            else {
                esm/* ModalController */.W3.close();
            }
        }
        else {
            esm/* ModalController */.W3.close();
        }
    }
    initializeTheming() {
        const { themeVariables, themeMode } = esm/* ThemeController */.Wn.state;
        const defaultThemeMode = dist_esm.UiHelperUtil.getColorTheme(themeMode);
        (0,dist_esm.initializeTheming)(themeVariables, defaultThemeMode);
    }
    onClose() {
        this.open = false;
        this.classList.remove('open');
        this.onScrollUnlock();
        esm/* SnackController */.Pt.hide();
        this.onRemoveKeyboardListener();
    }
    onOpen() {
        this.open = true;
        this.classList.add('open');
        this.onScrollLock();
        this.onAddKeyboardListener();
    }
    onScrollLock() {
        const styleTag = document.createElement('style');
        styleTag.dataset['w3m'] = SCROLL_LOCK;
        styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
        document.head.appendChild(styleTag);
    }
    onScrollUnlock() {
        const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
        if (styleTag) {
            styleTag.remove();
        }
    }
    onAddKeyboardListener() {
        this.abortController = new AbortController();
        const card = this.shadowRoot?.querySelector('wui-card');
        card?.focus();
        window.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                this.handleClose();
            }
            else if (event.key === 'Tab') {
                const { tagName } = event.target;
                if (tagName && !tagName.includes('W3M-') && !tagName.includes('WUI-')) {
                    card?.focus();
                }
            }
        }, this.abortController);
    }
    onRemoveKeyboardListener() {
        this.abortController?.abort();
        this.abortController = undefined;
    }
    async onNewAddress(caipAddress) {
        if (!this.connected || this.loading) {
            return;
        }
        const previousAddress = esm/* CoreHelperUtil */.wE.getPlainAddress(this.caipAddress);
        const newAddress = esm/* CoreHelperUtil */.wE.getPlainAddress(caipAddress);
        const previousNetworkId = esm/* CoreHelperUtil */.wE.getNetworkId(this.caipAddress);
        const newNetworkId = esm/* CoreHelperUtil */.wE.getNetworkId(caipAddress);
        this.caipAddress = caipAddress;
        if (this.isSiweEnabled) {
            const { SIWEController } = await __webpack_require__.e(/* import() */ 54).then(__webpack_require__.bind(__webpack_require__, 54));
            const session = await SIWEController.getSession();
            if (session && previousAddress && newAddress && previousAddress !== newAddress) {
                if (SIWEController.state._client?.options.signOutOnAccountChange) {
                    await SIWEController.signOut();
                    this.onSiweNavigation();
                }
                return;
            }
            if (session && previousNetworkId && newNetworkId && previousNetworkId !== newNetworkId) {
                if (SIWEController.state._client?.options.signOutOnNetworkChange) {
                    await SIWEController.signOut();
                    this.onSiweNavigation();
                }
                return;
            }
            this.onSiweNavigation();
        }
    }
    onSiweNavigation() {
        if (this.open) {
            esm/* RouterController */.IN.push('ConnectingSiwe');
        }
        else {
            esm/* ModalController */.W3.open({
                view: 'ConnectingSiwe'
            });
        }
    }
};
W3mModal.styles = styles;
__decorate([
    (0,decorators/* state */.wk)()
], W3mModal.prototype, "open", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mModal.prototype, "caipAddress", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mModal.prototype, "isSiweEnabled", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mModal.prototype, "connected", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mModal.prototype, "loading", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mModal.prototype, "shake", void 0);
W3mModal = __decorate([
    (0,dist_esm.customElement)('w3m-modal')
], W3mModal);

//# sourceMappingURL=index.js.map
;// ./node_modules/@web3modal/scaffold-ui/dist/esm/exports/w3m-modal.js

//# sourceMappingURL=w3m-modal.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBCQUFjO0FBQzlDLDJCQUEyQiwwQkFBYztBQUN6QyxrQ0FBa0MsMEJBQWM7QUFDaEQsNkJBQTZCLDBCQUFjO0FBQzNDO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCLFFBQVEsZ0dBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRCQUFnQjtBQUM1QjtBQUNBO0FBQ0EsWUFBWSwyQkFBZTtBQUMzQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBLElBQUksNEJBQUs7QUFDVDtBQUNBO0FBQ0EsSUFBSSw0QkFBSztBQUNUO0FBQ0E7QUFDQSxJQUFJLDRCQUFLO0FBQ1Q7QUFDQTtBQUNBLElBQUksNEJBQUs7QUFDVDtBQUNBO0FBQ0EsSUFBSSw0QkFBSztBQUNUO0FBQ0E7QUFDQSxJQUFJLDRCQUFLO0FBQ1Q7QUFDQTtBQUNBLElBQUksMEJBQWE7QUFDakI7QUFDb0I7QUFDcEI7O0FDOU1nRDtBQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0B3ZWIzbW9kYWwvc2NhZmZvbGQtdWkvZGlzdC9lc20vc3JjL21vZGFsL3czbS1tb2RhbC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHdlYjNtb2RhbC9zY2FmZm9sZC11aS9kaXN0L2VzbS9zcmMvbW9kYWwvdzNtLW1vZGFsL2luZGV4LmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0B3ZWIzbW9kYWwvc2NhZmZvbGQtdWkvZGlzdC9lc20vZXhwb3J0cy93M20tbW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcbmV4cG9ydCBkZWZhdWx0IGNzcyBgXG4gIDpob3N0IHtcbiAgICB6LWluZGV4OiB2YXIoLS13M20tei1pbmRleCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13dWktY292ZXIpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyB2YXIoLS13dWktZWFzZS1vdXQtcG93ZXItMik7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gIH1cblxuICA6aG9zdCgub3Blbikge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB3dWktY2FyZCB7XG4gICAgbWF4LXdpZHRoOiB2YXIoLS13M20tbW9kYWwtd2lkdGgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbmltYXRpb246IHpvb20taW4gMC4ycyB2YXIoLS13dWktZWFzZS1vdXQtcG93ZXItMik7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICB3dWktY2FyZFtzaGFrZT0ndHJ1ZSddIHtcbiAgICBhbmltYXRpb246XG4gICAgICB6b29tLWluIDAuMnMgdmFyKC0td3VpLWVhc2Utb3V0LXBvd2VyLTIpLFxuICAgICAgdzNtLXNoYWtlIDAuNXMgdmFyKC0td3VpLWVhc2Utb3V0LXBvd2VyLTIpO1xuICB9XG5cbiAgd3VpLWZsZXgge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBAbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSBhbmQgKG1pbi13aWR0aDogNDMxcHgpIHtcbiAgICB3dWktZmxleCB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICB3dWktY2FyZCB7XG4gICAgICBtYXJnaW46IHZhcigtLXd1aS1zcGFjaW5nLXh4bCkgMHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xuICAgIHd1aS1mbGV4IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICB3dWktY2FyZCB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjJzIHZhcigtLXd1aS1lYXNlLW91dC1wb3dlci0yKTtcbiAgICB9XG5cbiAgICB3dWktY2FyZFtzaGFrZT0ndHJ1ZSddIHtcbiAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgc2xpZGUtaW4gMC4ycyB2YXIoLS13dWktZWFzZS1vdXQtcG93ZXItMiksXG4gICAgICAgIHczbS1zaGFrZSAwLjVzIHZhcigtLXd1aS1lYXNlLW91dC1wb3dlci0yKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHpvb20taW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDUwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHczbS1zaGFrZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgtMWRlZyk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgxLjVkZWcpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTEuNWRlZyk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgxZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHczbS12aWV3LWhlaWdodCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXByZXYtaGVpZ2h0KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1uZXctaGVpZ2h0KTtcbiAgICB9XG4gIH1cbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuanMubWFwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQWNjb3VudENvbnRyb2xsZXIsIEFwaUNvbnRyb2xsZXIsIENvcmVIZWxwZXJVdGlsLCBFdmVudHNDb250cm9sbGVyLCBNb2RhbENvbnRyb2xsZXIsIE9wdGlvbnNDb250cm9sbGVyLCBSb3V0ZXJDb250cm9sbGVyLCBTbmFja0NvbnRyb2xsZXIsIFRoZW1lQ29udHJvbGxlciB9IGZyb20gJ0B3ZWIzbW9kYWwvY29yZSc7XG5pbXBvcnQgeyBVaUhlbHBlclV0aWwsIGN1c3RvbUVsZW1lbnQsIGluaXRpYWxpemVUaGVtaW5nIH0gZnJvbSAnQHdlYjNtb2RhbC91aSc7XG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5qcyc7XG5jb25zdCBTQ1JPTExfTE9DSyA9ICdzY3JvbGwtbG9jayc7XG5sZXQgVzNtTW9kYWwgPSBjbGFzcyBXM21Nb2RhbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gW107XG4gICAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm9wZW4gPSBNb2RhbENvbnRyb2xsZXIuc3RhdGUub3BlbjtcbiAgICAgICAgdGhpcy5jYWlwQWRkcmVzcyA9IEFjY291bnRDb250cm9sbGVyLnN0YXRlLmNhaXBBZGRyZXNzO1xuICAgICAgICB0aGlzLmlzU2l3ZUVuYWJsZWQgPSBPcHRpb25zQ29udHJvbGxlci5zdGF0ZS5pc1Npd2VFbmFibGVkO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IEFjY291bnRDb250cm9sbGVyLnN0YXRlLmlzQ29ubmVjdGVkO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBNb2RhbENvbnRyb2xsZXIuc3RhdGUubG9hZGluZztcbiAgICAgICAgdGhpcy5zaGFrZSA9IE1vZGFsQ29udHJvbGxlci5zdGF0ZS5zaGFrZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGhlbWluZygpO1xuICAgICAgICBBcGlDb250cm9sbGVyLnByZWZldGNoKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUucHVzaCguLi5bXG4gICAgICAgICAgICBNb2RhbENvbnRyb2xsZXIuc3Vic2NyaWJlS2V5KCdvcGVuJywgdmFsID0+ICh2YWwgPyB0aGlzLm9uT3BlbigpIDogdGhpcy5vbkNsb3NlKCkpKSxcbiAgICAgICAgICAgIE1vZGFsQ29udHJvbGxlci5zdWJzY3JpYmVLZXkoJ3NoYWtlJywgdmFsID0+ICh0aGlzLnNoYWtlID0gdmFsKSksXG4gICAgICAgICAgICBNb2RhbENvbnRyb2xsZXIuc3Vic2NyaWJlS2V5KCdsb2FkaW5nJywgdmFsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk5ld0FkZHJlc3MoQWNjb3VudENvbnRyb2xsZXIuc3RhdGUuY2FpcEFkZHJlc3MpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBBY2NvdW50Q29udHJvbGxlci5zdWJzY3JpYmVLZXkoJ2lzQ29ubmVjdGVkJywgdmFsID0+ICh0aGlzLmNvbm5lY3RlZCA9IHZhbCkpLFxuICAgICAgICAgICAgQWNjb3VudENvbnRyb2xsZXIuc3Vic2NyaWJlS2V5KCdjYWlwQWRkcmVzcycsIHZhbCA9PiB0aGlzLm9uTmV3QWRkcmVzcyh2YWwpKSxcbiAgICAgICAgICAgIE9wdGlvbnNDb250cm9sbGVyLnN1YnNjcmliZUtleSgnaXNTaXdlRW5hYmxlZCcsIHZhbCA9PiAodGhpcy5pc1Npd2VFbmFibGVkID0gdmFsKSlcbiAgICAgICAgXSk7XG4gICAgICAgIEV2ZW50c0NvbnRyb2xsZXIuc2VuZEV2ZW50KHsgdHlwZTogJ3RyYWNrJywgZXZlbnQ6ICdNT0RBTF9MT0FERUQnIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZS5mb3JFYWNoKHVuc3Vic2NyaWJlID0+IHVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlS2V5Ym9hcmRMaXN0ZW5lcigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW5cbiAgICAgICAgICAgID8gaHRtbCBgXG4gICAgICAgICAgPHd1aS1mbGV4IEBjbGljaz0ke3RoaXMub25PdmVybGF5Q2xpY2suYmluZCh0aGlzKX0gZGF0YS10ZXN0aWQ9XCJ3M20tbW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICAgICAgPHd1aS1jYXJkXG4gICAgICAgICAgICAgIHNoYWtlPVwiJHt0aGlzLnNoYWtlfVwiXG4gICAgICAgICAgICAgIHJvbGU9XCJhbGVydGRpYWxvZ1wiXG4gICAgICAgICAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJ3M20tbW9kYWwtY2FyZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx3M20taGVhZGVyPjwvdzNtLWhlYWRlcj5cbiAgICAgICAgICAgICAgPHczbS1yb3V0ZXI+PC93M20tcm91dGVyPlxuICAgICAgICAgICAgICA8dzNtLXNuYWNrYmFyPjwvdzNtLXNuYWNrYmFyPlxuICAgICAgICAgICAgPC93dWktY2FyZD5cbiAgICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICAgIDx3M20tdG9vbHRpcD48L3czbS10b29sdGlwPlxuICAgICAgICBgXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfVxuICAgIGFzeW5jIG9uT3ZlcmxheUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVDbG9zZSgpIHtcbiAgICAgICAgY29uc3QgaXNTaXdlU2lnblNjcmVlbiA9IFJvdXRlckNvbnRyb2xsZXIuc3RhdGUudmlldyA9PT0gJ0Nvbm5lY3RpbmdTaXdlJztcbiAgICAgICAgY29uc3QgaXNBcHByb3ZlU2lnblNjcmVlbiA9IFJvdXRlckNvbnRyb2xsZXIuc3RhdGUudmlldyA9PT0gJ0FwcHJvdmVUcmFuc2FjdGlvbic7XG4gICAgICAgIGlmICh0aGlzLmlzU2l3ZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU0lXRUNvbnRyb2xsZXIgfSA9IGF3YWl0IGltcG9ydCgnQHdlYjNtb2RhbC9zaXdlJyk7XG4gICAgICAgICAgICBjb25zdCBpc1VuYXV0aGVudGljYXRlZCA9IFNJV0VDb250cm9sbGVyLnN0YXRlLnN0YXR1cyAhPT0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgaWYgKGlzVW5hdXRoZW50aWNhdGVkICYmIChpc1Npd2VTaWduU2NyZWVuIHx8IGlzQXBwcm92ZVNpZ25TY3JlZW4pKSB7XG4gICAgICAgICAgICAgICAgTW9kYWxDb250cm9sbGVyLnNoYWtlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBNb2RhbENvbnRyb2xsZXIuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIE1vZGFsQ29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXRpYWxpemVUaGVtaW5nKCkge1xuICAgICAgICBjb25zdCB7IHRoZW1lVmFyaWFibGVzLCB0aGVtZU1vZGUgfSA9IFRoZW1lQ29udHJvbGxlci5zdGF0ZTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFRoZW1lTW9kZSA9IFVpSGVscGVyVXRpbC5nZXRDb2xvclRoZW1lKHRoZW1lTW9kZSk7XG4gICAgICAgIGluaXRpYWxpemVUaGVtaW5nKHRoZW1lVmFyaWFibGVzLCBkZWZhdWx0VGhlbWVNb2RlKTtcbiAgICB9XG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICB0aGlzLm9uU2Nyb2xsVW5sb2NrKCk7XG4gICAgICAgIFNuYWNrQ29udHJvbGxlci5oaWRlKCk7XG4gICAgICAgIHRoaXMub25SZW1vdmVLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuICAgIG9uT3BlbigpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgIHRoaXMub25TY3JvbGxMb2NrKCk7XG4gICAgICAgIHRoaXMub25BZGRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuICAgIG9uU2Nyb2xsTG9jaygpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZVRhZy5kYXRhc2V0Wyd3M20nXSA9IFNDUk9MTF9MT0NLO1xuICAgICAgICBzdHlsZVRhZy50ZXh0Q29udGVudCA9IGBcbiAgICAgIGJvZHkge1xuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG4gICAgICB9XG4gICAgICB3M20tbW9kYWwge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cbiAgICBgO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcbiAgICB9XG4gICAgb25TY3JvbGxVbmxvY2soKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLXczbT1cIiR7U0NST0xMX0xPQ0t9XCJdYCk7XG4gICAgICAgIGlmIChzdHlsZVRhZykge1xuICAgICAgICAgICAgc3R5bGVUYWcucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25BZGRLZXlib2FyZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3Rvcignd3VpLWNhcmQnKTtcbiAgICAgICAgY2FyZD8uZm9jdXMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRhZ05hbWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSAmJiAhdGFnTmFtZS5pbmNsdWRlcygnVzNNLScpICYmICF0YWdOYW1lLmluY2x1ZGVzKCdXVUktJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZD8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuYWJvcnRDb250cm9sbGVyKTtcbiAgICB9XG4gICAgb25SZW1vdmVLZXlib2FyZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlcj8uYWJvcnQoKTtcbiAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFzeW5jIG9uTmV3QWRkcmVzcyhjYWlwQWRkcmVzcykge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkIHx8IHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQWRkcmVzcyA9IENvcmVIZWxwZXJVdGlsLmdldFBsYWluQWRkcmVzcyh0aGlzLmNhaXBBZGRyZXNzKTtcbiAgICAgICAgY29uc3QgbmV3QWRkcmVzcyA9IENvcmVIZWxwZXJVdGlsLmdldFBsYWluQWRkcmVzcyhjYWlwQWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzTmV0d29ya0lkID0gQ29yZUhlbHBlclV0aWwuZ2V0TmV0d29ya0lkKHRoaXMuY2FpcEFkZHJlc3MpO1xuICAgICAgICBjb25zdCBuZXdOZXR3b3JrSWQgPSBDb3JlSGVscGVyVXRpbC5nZXROZXR3b3JrSWQoY2FpcEFkZHJlc3MpO1xuICAgICAgICB0aGlzLmNhaXBBZGRyZXNzID0gY2FpcEFkZHJlc3M7XG4gICAgICAgIGlmICh0aGlzLmlzU2l3ZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU0lXRUNvbnRyb2xsZXIgfSA9IGF3YWl0IGltcG9ydCgnQHdlYjNtb2RhbC9zaXdlJyk7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgU0lXRUNvbnRyb2xsZXIuZ2V0U2Vzc2lvbigpO1xuICAgICAgICAgICAgaWYgKHNlc3Npb24gJiYgcHJldmlvdXNBZGRyZXNzICYmIG5ld0FkZHJlc3MgJiYgcHJldmlvdXNBZGRyZXNzICE9PSBuZXdBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFNJV0VDb250cm9sbGVyLnN0YXRlLl9jbGllbnQ/Lm9wdGlvbnMuc2lnbk91dE9uQWNjb3VudENoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBTSVdFQ29udHJvbGxlci5zaWduT3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TaXdlTmF2aWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbiAmJiBwcmV2aW91c05ldHdvcmtJZCAmJiBuZXdOZXR3b3JrSWQgJiYgcHJldmlvdXNOZXR3b3JrSWQgIT09IG5ld05ldHdvcmtJZCkge1xuICAgICAgICAgICAgICAgIGlmIChTSVdFQ29udHJvbGxlci5zdGF0ZS5fY2xpZW50Py5vcHRpb25zLnNpZ25PdXRPbk5ldHdvcmtDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgU0lXRUNvbnRyb2xsZXIuc2lnbk91dCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2l3ZU5hdmlnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vblNpd2VOYXZpZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25TaXdlTmF2aWdhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgUm91dGVyQ29udHJvbGxlci5wdXNoKCdDb25uZWN0aW5nU2l3ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTW9kYWxDb250cm9sbGVyLm9wZW4oe1xuICAgICAgICAgICAgICAgIHZpZXc6ICdDb25uZWN0aW5nU2l3ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblczbU1vZGFsLnN0eWxlcyA9IHN0eWxlcztcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbU1vZGFsLnByb3RvdHlwZSwgXCJvcGVuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Nb2RhbC5wcm90b3R5cGUsIFwiY2FpcEFkZHJlc3NcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbU1vZGFsLnByb3RvdHlwZSwgXCJpc1Npd2VFbmFibGVkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Nb2RhbC5wcm90b3R5cGUsIFwiY29ubmVjdGVkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Nb2RhbC5wcm90b3R5cGUsIFwibG9hZGluZ1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtTW9kYWwucHJvdG90eXBlLCBcInNoYWtlXCIsIHZvaWQgMCk7XG5XM21Nb2RhbCA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUVsZW1lbnQoJ3czbS1tb2RhbCcpXG5dLCBXM21Nb2RhbCk7XG5leHBvcnQgeyBXM21Nb2RhbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi4vc3JjL21vZGFsL3czbS1tb2RhbC9pbmRleC5qcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13M20tbW9kYWwuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9