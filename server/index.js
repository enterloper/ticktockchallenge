const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

/* MIDDLEWARE */
app.use(morgan('dev'));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/home.html'));
});

app.listen(PORT, console.log(`Server running on ${PORT}`));