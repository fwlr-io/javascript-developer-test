const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const results = [];

  for (const url of urls) {
    const { status, body } = await httpGet(url);
    const { message } = JSON.parse(body);
    if (status == 200) {
      results.push({ "Arnie Quote": message });
    } else {
      results.push({ FAILURE: message });
    }
  }

  return results;
};

module.exports = {
  getArnieQuotes,
};
