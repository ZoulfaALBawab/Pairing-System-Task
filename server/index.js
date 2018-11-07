var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var db = require('../database-mongo/index.js');
var handler = require('./handler');


////////////////////////////////////////////

 var app = express()
 app.use(express.static(__dirname + '/../react-client/dist'));

////////////////////////////////////////////

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

////////////////////////////////////////////

//back-end functions
// it should be the same in the ajax call



////////////////////////////////////////////

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../react-client/dist/index.html')))
});

////////////////////////////////////////////

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
