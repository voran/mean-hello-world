// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

    // sample api route
    app.get('/api', function(req, res) {
        res.json({ status: 'OK' });
    });

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, nerds) {
            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err) {
                res.send(err);
            }
            res.json(nerds); // return all nerds in JSON format
        });

    });

    app.get('/api/nerds/:id', function(req, res) {
        Nerd.findById(req.params.id, function(err, nerd) {
            if (err) {
                res.send(err);
            }
            if (!nerd) return res.sendStatus(404);
            res.json(nerd);
        });
    });


    // sample api route
    app.post('/api/nerds', function(req, res) {
        Nerd.create({ name: req.body.name }, function (err, nerd) {
            if (err) return handleError(err);
            res.json(nerd);
        });
    });
 };
