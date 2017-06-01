const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const app = module.exports = express();
const config = require('./config.js');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('./src'));

// connect to Massive and get the db instance:
const db = massive.connectSync({
  connectionString : config.elephantSql
});
  console.log(db);

// Set a reference to the massive instance on Express' app:
app.set('db', db);

db.bottles_schema((err, data) => {
  console.log(data)
    if (err) console.log(err);
    else console.log('All tables successfully! I mean Blammy!');
})

// app.get('/images/bottles', function(req, res, next) {
//   db.get_all_bottles(function(err, bottles) {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.json(bottles)
//     }
//   });
// })
  


app.listen(config.port, function() {
  console.log('Connected on port ' + config.port);
});