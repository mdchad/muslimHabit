const express = require("express");
const ViteExpress = require("vite-express");
const path = require('path')

const app = express();
app.use(ViteExpress.static())


app.get("/hello", (req, res) => {
  res.sendFile(path.join(process.cwd(), 'src/app/index.html'))
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
