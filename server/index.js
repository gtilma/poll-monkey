var express = require('express'),
    mongoose = require('mongoose');

var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/poll-monkey');

app.use('/', express.static('client'));
// app.use(bodyParser.json());

app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port', this.address().port);
});
  
