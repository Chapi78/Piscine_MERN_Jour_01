const express = require('express');
const app = express();
const config = require('../config.js');
const fs = require('fs');

app.set('view engine', 'ejs');

app.get('/name/:name', (req, res) => {
    console.log(req.params.name);
    const name = "Hello " + req.params.name;
    res.render('index', {
        name: name,
    });
});

app.listen(config.port, () => {
    console.log('lerroy jenkinnnssss!!! ', config);
});