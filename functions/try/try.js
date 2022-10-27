const axios = require("axios");

const handler = async (event) => {
  const API_SECRET = process.env.API_SECRET;
  return {
    statusCode: 200,
    body: JSON.stringify(API_SECRET),
  };
};

module.exports = { handler };
