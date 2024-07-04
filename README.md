<p align="center">
  <h1 align="center">doge-dapp-js</h1>
  <p align="center">A library for convenient functions to use in Doginals dApps</p>
  <p align="center">
    <img src="https://img.shields.io/github/commit-activity/m/thaddeusdiamond/doge-dapp-js?style=for-the-badge" />
    <a href="https://www.npmjs.com/package/doge-dapp-js">
      <img src="https://img.shields.io/npm/v/doge-dapp-js?style=for-the-badge" />
    </a>
    <a href="https://www.npmjs.com/package/doge-dapp-js">
      <img src="https://img.shields.io/npm/dw/doge-dapp-js?style=for-the-badge" />
    </a>
    <img src="https://img.shields.io/npm/l/doge-dapp-js?style=for-the-badge" />
    <a href="https://twitter.com/wildtangz">
      <img src="https://img.shields.io/twitter/follow/wildtangz?style=for-the-badge&logo=twitter" />
    </a>
  </p>
</p>

## Quickstart

Recommend prerequisites for running a local NPM webapp:

* [node](https://nodejs.org/en/download/)>=16.15.1
* [npm](https://www.npmjs.com/package/npm)>=8.12.0

### Installation

Please link `doge-dapp-js` at the latest version in your `package.json` file
and then run:

```
npm i doge-dapp-js
```

### Static Javascript Linkage

A compiled version of this library is generated with each release using webpack.  To link it directly from your HTML code, please use (and optionally include the integrity attribute):
```html
<script src="https://cdn.jsdelivr.net/npm/doge-dapp-js@latest/dist/doge-dapp-js.js" crossorigin="anonymous" type="text/javascript"></script>
```

### API Samples

From your React app or JavaScript client-side application, you can retrieve a user's Ordinals address with:
```js
const ordinalsAddr = await Wallets.getWalletAddress(walletProvider, Wallets.DOGINALS_TYPE);
```

Note that the `getWalletAddress` parameters are `walletProvider` and `addressType`.  See `wallets.js` in `src/wallets/` for the full list (e.g., dogeLabs).

Then, to initiate spending for the user, your JS app would call:
```js
const txid = await Wallets.sendDoge(walletProvider, destAddr, dogeAmount, fromAddr);
```

## Testing

TBA

## Documentation

All documentation is provided herein in the README.
