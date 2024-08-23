function getMyDogeMask() {
  const myDogeMask = window.doge;
  if (!myDogeMask?.isMyDoge) {
    throw `MyDoge Wallet is not installed`;
  }
  return myDogeMask;
}

export async function getMyDogeWalletAddress() {
  const myDogeMask = getMyDogeMask();
  try {
    const response = await myDogeMask.connect();
    return response.address;
  } catch (error) {
    "User did not grant access to MyDoge";
  } 
}

export async function signMyDogePsbt(pbstHex) {
  const myDogeMask = getMyDogeMask();
  const pbst = await myDogeMask.requestPsbt({rawTx: pbstHex});
  return pbst.txId;
}

export async function sendDogeFromMyDoge(dogeAmount, address) {
  const myDogeMask = getMyDogeMask();
  const transaction = await myDogeMask.requestTransaction({recipientAddress: address, dogeAmount: dogeAmount});
  return transaction.txId;
}