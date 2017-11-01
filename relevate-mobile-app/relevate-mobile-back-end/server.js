'use strict';
const express = require('express');
const app = express();
var fs = require('fs');
var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/home', function (req, res) {
    res.json(JSON.parse(fs.readFileSync('data/home_art.json', 'utf8')));
});

app.get('/trending', function (req, res) {
    res.json(JSON.parse(fs.readFileSync('data/trending_art.json', 'utf8')));
});

app.get('/recent', function (req, res) {
    res.json(JSON.parse(fs.readFileSync('data/recent_art.json', 'utf8')));
});

app.get('/following', function (req, res) {
    res.json(JSON.parse(fs.readFileSync('data/following_art.json', 'utf8')));
});

app.get('/quizzes', function (req, res) {
    res.json(JSON.parse(fs.readFileSync('data/quizzes_art.json', 'utf8')));
});

app.get('/journals', function (req, res) {
    res.json(JSON.parse(fs.readFileSync('data/journals_art.json', 'utf8')));
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});