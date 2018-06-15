const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
    url: String,
    shortUrl: {
        type: String,
        default: shortid.generate()
    }
});

module.exports = mongoose.model('shortURL', urlSchema);