const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const users = require("./routes/users");
const config = require('./config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);
});
mongoose.connection.on('connected', (err) => {
  console.log(`Database error ${err}`);
});

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//Middleware////////////////////////////////////////////////////////////////////
app.use(cors());
app.use(bodyParser.json());
////////////////////////////////////////////////////////////////////////////////

app.use('/users', users);

app.get('/', (req,res) => {
  res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
