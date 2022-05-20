const { URL } = require("url");

module.exports = function (config, options) {
  const url = new URL(options.url);
  if (options.url) {
    config.networks[url.host] = {
      url: options.url,
      network_id: "*"
    };
    config.network = url.host;
  }
  config.merge(options);
  return config;
};
