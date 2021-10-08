require("dotenv").config();
const { harvestAllVaults } = require("./functions/harvestAllVaults.js");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function worker() {
  do {
    console.log("> harvesting...");
    try {
      await harvestAllVaults();
    } catch (error) {
      console.error("Harvest error", error);
    }
    console.log("> finished harvesting!");

    await sleep(30 * 60 * 1000);
  } while (true);
}

worker();
