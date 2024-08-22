import { getDogeLabsWalletAddress, sendDogeFromDogeLabs } from "./dogelabs.js";
import { getMyDogeWalletAddress, sendDogeFromMyDoge, signMyDogePsbt } from "./mydoge.js";

export const DOGELABS_WALLET = 'dogeLabs';
export const MYDOGE_WALLET = 'mydoge';

export const PAYMENT_TYPE = 'payment';
export const DOGINALS_TYPE = 'doginals';

export const PAYLOAD_TYPES = {
  text: 'PLAIN_TEXT',
  base64: 'BASE_64'
}

export function defaultLogo(walletProvider) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
      return "https://drc-20.org/logo.svg";
    case MYDOGE_WALLET:
      return "https://framerusercontent.com/images/V59d0P4SPHcKwWv8aJurTlMoSE.png";
    default:
      return undefined;
  }
}

export async function getWalletAddress(walletProvider, walletType) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
      return await getDogeLabsWalletAddress(walletType);
    case MYDOGE_WALLET:
      return await getMyDogeWalletAddress();
    default:
      return '';
  }
}

export async function signPsbt(walletProvider, psbtHex) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
      return await window.dogeLabs?.signPsbt(psbtHex);
    case MYDOGE_WALLET:
      return await signMyDogePsbt(psbtHex);
    default:
      throw `PSBTs not supported for ${walletProvider}`;
  }
}

export async function sendDoge(walletProvider, address, dogeAmount, originator) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
      return await sendDogeFromDogeLabs(dogeAmount, address, originator);
    case MYDOGE_WALLET:
      return await sendDogeFromMyDoge(dogeAmount, address);
    default:
      throw `Sending DOGE not supported for ${walletProvider}`;
  }
}

export async function directInscribe(walletProvider, contentType, payloadType, content, additionalFee, feeRate) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
    case MYDOGE_WALLET:
    default:
      throw `Direct inscriptions not supported for ${walletProvider}`;
  }
}
