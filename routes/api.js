const express = require('express')
const router = express.Router();
const Note = require('../models/notes');

router.get('/notes', function (req, res, next) {
    Note.find({}).then((notes)=>{res.send(notes)}).catch(next);

});

router.post('/notes', function (req, res, next) {
    Note.create(req.body).then(function (n) {
        console.log(req.body);
        res.send(n);
    }).catch(next);
});

module.exports = router;