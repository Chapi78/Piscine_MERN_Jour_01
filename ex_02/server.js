const express = require('express');
const app = express();
const config = require('../config.js');

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send('Great ! It works.');
});

app.listen(config.port, () => {
    console.log('lerroy jenkinnnssss!!! ', config);
});