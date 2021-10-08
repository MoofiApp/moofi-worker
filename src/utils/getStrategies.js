const { ethers } = require("ethers");
const {
  MOONRIVER_RPC,
  MOONRIVER_STRATEGY_MULTICALL,
} = require("../constants.js");
const MulticallAbi = require("../abis/MofiStrategyMulticall.json");

const BATCH_SIZE = 128;

const getStrategies = async (vaults) => {
  const provider = new ethers.providers.JsonRpcProvider(MOONRIVER_RPC);
  const multicall = new ethers.Contract(
    MOONRIVER_STRATEGY_MULTICALL,
    MulticallAbi,
    provider,
  );

  // Split query in batches
  const query = vaults.map((v) => v.earnedTokenAddress);
  for (let i = 0; i < vaults.length; i += BATCH_SIZE) {
    let batch = query.slice(i, i + BATCH_SIZE);
    const buf = await multicall.getStrategy(batch);

    // Merge fetched data
    for (let j = 0; j < batch.length; j++) {
      vaults[j + i].strategy = buf[j];
    }
  }

  return vaults;
};

module.exports = { getStrategies };
