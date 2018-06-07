const express = require('express');
const router = express.Router();
const Url = require('../models/url.js');
const shortid = require('shortid');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/:code', (req, res) => {
    Url.findOne({shortUrl: req.params.code}, 'shortUrls', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data) {
                res.redirect(data);
            } else {
                res.json({error: 'This url is not in the db'});
            }
        }
    });
});

router.post('/:url', (req, res) => {
    const newUrl = req.params.url;

    //check if db contains url
    Url.findOne({url: newUrl}, (err, urlData) => {
        if (err) {
            console.log(err);
        } else {
            if (urlData) {
                res.send(urlData);
            } else {
                const shortUrl = req.headers.host + '/' + shortid.generate();
                Url.create({url: newUrl, shortUrl: shortUrl}, (err, short) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(short);
                    }
                });
            }
        }
    });
    //if url does not exist in db, create

    //return short url
});

module.exports = router;