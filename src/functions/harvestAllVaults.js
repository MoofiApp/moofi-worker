const Web3 = require("web3");
const { getVaults } = require("../utils/getVaults.js");
const { getWeb3 } = require("../utils/getWeb3.js");

const StrategyABI = require("../abis/StrategyABI.json");

async function harvestAllVaults() {
  let vaults = await getVaults();

  const web3 = getWeb3();

  for (let i = 0; i < vaults.length; i++) {
    const vault = vaults[i];
    const stratContract = new web3.eth.Contract(StrategyABI, vault.strategy);
    const unixTime = Math.floor(Date.now() / 1000);
    if (
      !vault.lastHarvest ||
      vault.lastHarvest < 1 ||
      vault.harvestFrequency < unixTime - vault.lastHarvest
    ) {
      const result = await stratContract.methods
        .harvest()
        .send({ from: web3.eth.defaultAccount, gas: 4035429 });
      console.log("Harvest result", vault.id, result);
    } else {
      console.log(
        "Dont need to be harvested",
        vault.id,
        vault.lastHarvest,
        vault.harvestFrequency,
        unixTime,
      );
    }
  }
}

module.exports = { harvestAllVaults };
