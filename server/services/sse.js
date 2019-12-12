const SSE = require('server-send-events');

module.exports = (req, res) => {
  return new SSE.Client(req, res);
};