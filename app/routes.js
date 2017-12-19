// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

    // sample api route
    app.get('/api', async (req, res) => {
        res.json({ status: 'OK' });
    });

    app.get('/api/nerds', async (req, res) => {
        try {
            const nerds = await Nerd.find();
            res.json(nerds);
        } catch(error) {
            res.status(500).json({message: error.message});
        }
    });

    app.get('/api/nerds/:id', async (req, res) => {
        try {
            const nerd = await Nerd.findById(req.params.id);
            if (!nerd) {
                return res.status(404).json({message: 'Not Found'});
            }
            res.json(nerd);
        } catch(error) {
          res.status(500).json({message: error.message});
        }
    });


    app.post('/api/nerds', async (req, res) => {
        try {
            const nerd = await Nerd.create({ name: req.body.name });
            res.status(201).json(nerd);
        } catch(error) {
            res.status(500).json({message: error.message});
        }
    });

    app.patch('/api/nerds/:id', async (req, res) => {
        try {
            const nerd = await Nerd.findByIdAndUpdate(req.params.id, { $set: {name: req.body.name}});
            if (!nerd) {
                return res.status(404).json({message: 'Not Found'});
            }
            res.sendStatus(204);
        } catch(error) {
            res.status(500).json({message: error.message});
        }
    });

    app.delete('/api/nerds/:id', async (req, res) => {
        try {
            const response = await Nerd.findByIdAndRemove(req.params.id);
            res.status(200).json(response);
        } catch(error) {
            res.status(500).json({message: error.message});
        }
    });
 };
