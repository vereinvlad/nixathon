var express = require("express");
var cors = require("cors");
var app = express();
const PORT = 8080;
app.use(cors());

app.get("/healthz", function (req, res, next) {
  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log(
    `web server listening on port ${PORT}. Please open https://localhost:${PORT}`
  );
});
