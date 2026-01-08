const { httpGet } = require("./mock-http-interface");

const getArnieQuote = async (url) => {
  const { status, body } = await httpGet(url);
  const { message } = JSON.parse(body);
  if (status == 200) {
    return { "Arnie Quote": message };
  } else {
    return { FAILURE: message };
  }
};

const getArnieQuotes = async (urls) => Promise.all(urls.map(getArnieQuote));

module.exports = {
  getArnieQuotes,
};
