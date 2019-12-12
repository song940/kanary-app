const config = require('@kelpjs/next/config');

const { client, public } = config.path;

module.exports = {
  src: client,
  output: public,
  alias: config.path,
};