const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const config = require('./config.js');
const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('./src'));

// connect to Massive and get the db instance:
var db = massive.connectSync({
  connectionString : config.elephantSql
});
  // console.log(db);

// Set a reference to the massive instance on Express' app:
// app.set('db', db);

  // db.bottles.find({id: 1}, function(err,bottles){
    
  // })
  db.bottles_schema((err, bottles) => {
    console.log(bottles)
      if (err) console.log(err);
      else res.send(bottles);
  });

// db.get_by_color(["white"], function(err, res) {
//   //Do something
// })

// app.get('/allbottles', function(req, res, next) {
//   db.get_all_bottles(function(err, bottles) {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.json(bottles)
//     }
//   });
// })
  


app.listen(config.port, () => {
  console.log('Connected on port ' + config.port);
});