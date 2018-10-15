const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

/* MIDDLEWARE */
app.use(morgan('dev'));

app.use('/', (req, res) => {
  res.send('HELLO!');
});

app.listen(PORT);

console.log(`Server running on ${PORT}`);