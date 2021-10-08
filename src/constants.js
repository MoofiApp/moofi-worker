const MOONRIVER_VAULTS_ENDPOINT =
  "https://raw.githubusercontent.com/MoofiApp/moofi-app/master/src/features/configure/vault/moonriver_pools.js";

const MOONRIVER_RPC =
  process.env.MOONRIVER_RPC || "https://rpc.moonriver.moonbeam.network";
const MOONRIVER_STRATEGY_MULTICALL =
  "0x1CC39296758207aA4fCF18F5AFADA42deA548BF7";
const MOONRIVER_MULTICALL = "0x8ecf62Cb46Ba4913d6FbDd6E74da4A6A7c40582F";

module.exports = {
  MOONRIVER_MULTICALL,
  MOONRIVER_RPC,
  MOONRIVER_VAULTS_ENDPOINT,
  MOONRIVER_STRATEGY_MULTICALL,
};
