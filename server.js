// require modules
const express = require('express');
const pokemon = require('./models/pokemon');
const port = 3000
// create the Express app
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)

// Mount routes
app.get('/', function (req, res) {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', function(req, res) {
  res.send(pokemon);
});

// -------------------------
// App Is Listening
// -------------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});