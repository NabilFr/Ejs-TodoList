const express = require('express');
const bodyParser = require('body-parser');
const optionsDate = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let items = [];

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

  res.render('list', {
    kindOfDay: new Date().toLocaleDateString('en-GB', optionsDate),
    newItem: items
  });
});

app.post('/', function(req, res) {
  if (req.body.item != '') {
    items.push(req.body.item);
  }

  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
