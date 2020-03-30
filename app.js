const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let items = ['Docker'];
let workItems = ['Kubernetes'];

app.get('/', function(req, res) {
  debugger;
  let day = date.getDay();
  res.render('list', {
    listTitle: day,
    newItem: items
  });
});

app.post('/', function(req, res) {
  if (req.body.newItem != '' && req.body.list === 'Work') {
    workItems.push(req.body.newItem);
    res.redirect('/work');
  } else {
    items.push(req.body.newItem);
    res.redirect('/');
  }
});

app.get('/work', function(req, res) {
  res.render('list', {
    listTitle: 'Work',
    newItem: workItems
  });
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
