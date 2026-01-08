const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) =>
  Promise.all(
    urls.map(async (url) => {
      const { status, body } = await httpGet(url);
      return {
        [status == 200 ? "Arnie Quote" : "FAILURE"]: JSON.parse(body).message,
      };

      // const { status, body } = await httpGet(url);
      // const { message } = JSON.parse(body);
      // if (status == 200) {
      //   return { "Arnie Quote": message };
      // } else {
      //   return { FAILURE: message };
      // }
    }),
  );

module.exports = {
  getArnieQuotes,
};
