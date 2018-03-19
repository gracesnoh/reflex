const express = require('express');
const app = express();
const path = require('path');
const sassMiddleware = require('node-sass-middleware');


console.log(path.join(__dirname, '/styles'));
console.log(path.join(__dirname, '/public/styles'));
app.use('/styles', sassMiddleware({
  src: path.join(__dirname, '/styles'),
  dest: path.join(__dirname, '/public/styles'),
  debug: true,
  outputStyle: 'expanded',
}));

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
