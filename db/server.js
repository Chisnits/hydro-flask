const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

let app = express();
app.use(bodyParser.json());


var gus = "EPIC"

app.listen(port, function() {
  console.log('Listening on ' + port);
});