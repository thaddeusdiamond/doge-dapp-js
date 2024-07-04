export async function getDogeLabsWalletAddress() {
  if (typeof window.dogeLabs === 'undefined') {
    throw 'Doge Labs Wallet is not installed';
  }
  try {
    const accounts = await window.dogeLabs.requestAccounts();
    if (accounts.length !== 1) {
      throw `Invalid number of accounts detected (${accounts.length})`;
    }
    return accounts[0];
  } catch (err) {
    throw 'User did not grant access to Doge Labs';
  }
}

export async function sendDogeFromDogeLabs(amount, address) {
  const txid = await window.dogeLabs?.sendBitcoin(address, amount);
  return txid;
}
