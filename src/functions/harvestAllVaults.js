const Web3 = require("web3");
const { MultiCall } = require("eth-multicall");
const { addressBook } = require("moofi-addressbook");
const { MOONRIVER_VAULTS_ENDPOINT, MOONRIVER_RPC } = require("../constants.js");
const { getVaults } = require("../utils/getVaults.js");
const { getStrategies } = require("../utils/getStrategies.js");
const { getWeb3 } = require("../utils/getWeb3.js");

const StrategyABI = require("../abis/StrategyABI.json");

async function harvestAllVaults() {
  let vaults = await getVaults(MOONRIVER_VAULTS_ENDPOINT);
  vaults = await getStrategies(vaults);

  const web3 = getWeb3();

  for (let i = 0; i < vaults.length; i++) {
    const vault = vaults[i];
    const stratContract = new web3.eth.Contract(StrategyABI, vault.strategy);
    const result = await stratContract.methods.harvest().send({ from: web3.eth.defaultAccount, gas: 4035429 });
    console.log("Harvest result", result);
  }
}

module.exports = { harvestAllVaults };
