const axios = require("axios");

const getVaults = async () => {
  try {
    const response = await axios.get(process.env.API_URL + "/vaults");
    return response.data;
  } catch (err) {
    console.error(err);
    return 0;
  }
};

module.exports = { getVaults };
