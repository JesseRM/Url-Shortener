const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once('open', () => {
    console.log("Connected to the db");
}).on('error', (error) => {
    console.log(error);
});

mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', require('./routes/routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening for requests...");
});