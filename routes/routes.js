const express = require('express');
const router = express.Router();
const Url = require('../models/url.js');
const shortid = require('shortid');
const validUrl = require('valid-url');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/:code', (req, res) => {
    Url.findOne({shortUrl: req.headers.host +'/' + req.params.code}, (err, foundUrl) => {
        if (err) {
            console.log(err);
        } else {
            if (url) {
                res.redirect(foundUrl.url);
            } else {
                res.json({error: 'This url is not in the db'});
            }
        }
    });
});

router.post('/:url(*)', (req, res) => {
    const newUrl = req.params.url;
    
    if (validUrl.isUri(newUrl)) {
        Url.findOne({url: newUrl}, (err, url) => {
            if (err) {
                console.log(err);
            } else {
                if (url) {
                    res.send(url.shortUrl);
                } else {
                    const shortUrl = req.headers.host + '/' + shortid.generate();
                    
                    Url.create({url: newUrl, shortUrl: shortUrl}, (err, url) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(url.shortUrl);
                        }
                    });
                }
            }
        });
    } else {
        res.send("Please enter a valide URL");
    }
});

module.exports = router;