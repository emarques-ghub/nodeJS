var express = require('express');
var load = require('express-load');
var indexRouter = require('./routes/home');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', indexRouter);
//app.get('/usuarios', usersRouter);

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, function name(params) {
  console.log("Ntalk no ar...")
})

module.exports = app;
