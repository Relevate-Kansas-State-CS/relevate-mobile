'use strict';
const express = require('express');
const app = express();
var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});