const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  let dayOftheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  res.render('list', { kindOfDay: dayOftheWeek[new Date().getDay()] });
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
