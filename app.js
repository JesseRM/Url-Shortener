const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', require('./routes/routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening for requests...");
});