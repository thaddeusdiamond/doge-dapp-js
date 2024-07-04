import { getDogeLabsWalletAddress, sendDogeFromDogeLabs } from "./dogelabs.js";

export const DOGELABS_WALLET = 'dogeLabs';

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
    default:
      return undefined;
  }
}

export async function getWalletAddress(walletProvider, walletType) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
      return await getDogeLabsWalletAddress(walletType);
    default:
      return '';
  }
}

export async function signPsbt(walletProvider, psbtHex) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
      return await window.dogeLabs?.signPsbt(psbtHex);
    default:
      throw `PSBTs not supported for ${walletProvider}`;
  }
}

export async function sendDoge(walletProvider, address, dogeAmount, originator) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
      return await sendDogeFromDogeLabs(dogeAmount, address, originator);
    default:
      throw `Sending DOGE not supported for ${walletProvider}`;
  }
}

export async function directInscribe(walletProvider, contentType, payloadType, content, additionalFee, feeRate) {
  switch (walletProvider) {
    case DOGELABS_WALLET:
    default:
      throw `Direct inscriptions not supported for ${walletProvider}`;
  }
}
