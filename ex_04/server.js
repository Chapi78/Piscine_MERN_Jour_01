const express = require('express');
const app = express();
const config = require('../config.js');

app.use('/name/:name', (req, res) => {
    var name = req.params.name;
    res.render( 'index.pug', { name });
});

app.listen(5000, () => {
    console.log('lerroy jenkinnnssss!!! ', config);
});