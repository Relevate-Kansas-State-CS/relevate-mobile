'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var config = require('./config');
var port = process.env.PORT || 1337;

/*var connection = mysql.createConnection({
    host: config.dbhost,
    user: config.dbuser,
    password: config.dbpass,
    database: config.dbdata
});*/

app.set('secret', config.secret); // secret variable

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

var apiRoutes = express.Router();

apiRoutes.post('/authenticate', function (req, res) {

    //test code
    if (req.body.name === 'alexander') {
        if (req.body.password === 'testpass') {
            const payload = {
                admin: true
            };
            var token = jwt.sign(payload, app.get('secret'), {
                expiresIn: '1d' // expires in 24 hours
            });

            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        } else {
            res.json({ success: false, message: 'Authentication failed. Wrong password.'});
        }
    } else {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
    }
    /*
    // find the user
    User.findOne({
        name: req.body.name
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    admin: user.admin
                };
                var token = jwt.sign(payload, app.get('superSecret'), {
                    expiresInMinutes: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });*/
});

apiRoutes.use(function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('secret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

/*app.get('/', function (req, res) {
    res.send('Relevate Mobile Api');
})

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
});*/

app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});