const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const app = module.exports = express();
const config = require('./config.js');

app.use(bodyParser.json());
app.use(cors());

// app.use(express.static('./src'));


var db = massive.connectSync({
  connectionString : config.elephantSql
});
  console.log(db);

app.set('db', db);

db.bottles_schema((err, data) => {
  console.log(data)
    if (err) console.log(err);
    else console.log('All tables successfully! I mean Blammy!');
})


app.listen(config.port, function() {
  console.log('Connected on port ' + config.port);
});