const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Our home page';
  res.render('pages/index', {title:title});
})

//our crochet page
app.get('/crochet', (req, res) => {
  var title = 'Our Crochet page';
  res.render('pages/Crochet', {title:title});
})

//our sewing page
app.get('/sewing', (req, res) => {
  var title = 'Our Sewing page';
  res.render('pages/Sewing', {title:title});
})

//our book page
app.get('/books', (req, res) => {
  var title = 'Our Books Page';
  res.render('pages/Books', {title:title});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

