import http from "http";

/**
 * Tasks
 * 1. Fetch
 */

http
  .createServer(function (req, res) {
    res.write(JSON.stringify(req));
    res.end();
  })
  .listen(8080);
