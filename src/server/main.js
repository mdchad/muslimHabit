const express = require("express");
const ViteExpress = require("vite-express");
const path = require('path')

const app = express();

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
