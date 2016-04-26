var express = require('express');
var handlebars = require('express-handlebars');

var fortune = require('./lib/fortune/fortune.js');

var app = express();
app.set('port', process.env.PORT || 8000);

handlebars = handlebars.create({
  defaultLayout: 'main',
  extname: '.hbs'
});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
  res.render('home');
});
app.get('/about', function(req, res) {
  res.render('about', {
    fortune: fortune.getFortune(),
  });
});
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Started at port ' + app.get('port'));
});
