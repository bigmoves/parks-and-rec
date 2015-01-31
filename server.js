var express = require('express');
var path    = require('path');
var logger  = require('morgan');
var app     = express();

var staticPath = './dist';

var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});

require('./server/proxies/orchestrate')(app);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, staticPath), { maxAge: 86400000 }));
app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, staticPath, 'index.html'));
});

module.exports = app;
