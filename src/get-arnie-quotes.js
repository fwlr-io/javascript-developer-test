const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) =>
  Promise.all(
    urls.map(async (url) => {
      const { status, body } = await httpGet(url);
      const { message } = JSON.parse(body);
      if (status == 200) {
        return { "Arnie Quote": message };
      } else {
        return { FAILURE: message };
      }
    }),
  );

module.exports = {
  getArnieQuotes,
};
