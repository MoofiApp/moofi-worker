const Web3 = require("web3");
const { MOONRIVER_RPC } = require("../constants.js");

function getWeb3() {
  const web3 = new Web3(MOONRIVER_RPC);
  const privateKey = process.env.WEB3_PRIVATE_KEY;
  const account = web3.eth.accounts.privateKeyToAccount("0x" + privateKey);
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;
  return web3;
}

module.exports = { getWeb3 };
