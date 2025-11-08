const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const webDir = path.join(__dirname, '../web');
app.use(express.static(webDir));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

