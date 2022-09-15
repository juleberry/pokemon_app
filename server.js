const express = require('express')
const port = 3000

const app = express();

// Define a "root" route directly on app
app.get('/', function (req, res) {
  res.send('Welcome to the Pokemon App!');
});

// -------------------------
// App Is Listening
// -------------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});