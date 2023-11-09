const express = require("express");
const ViteExpress = require("vite-express");
const path = require('path')
const apiRouter = require('./routes/api/apiRouter');

const app = express();

// Mount the API router to the /api path
app.use('/api', apiRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
