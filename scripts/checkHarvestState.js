require("dotenv").config();
const { harvestAllVaults } = require("../src/functions/harvestAllVaults");

async function main() {
  await harvestAllVaults(true);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
