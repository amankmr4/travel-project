/* eslint-disable prettier/prettier */
const express = require('express');
const router = express.Router();
const cors = require('cors');

const Place = require('../../models/Place');
router.use(cors());

router.get('/api/place', (req, res) => {
    Place.find().sort({ date: -1 }).then(response => {
        if (response) {
            res.json(response);
        } else {
            res.status(400).json({ error: 'User does not exist' });
        }
    })
        .catch((err) => {
            res.send('error: ' + err);

        })
});

router.post('/api/place', (req, res) => {
    const location = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        location: req.body.location,
        activity: req.body.activity,
        picture: req.body.picture,
        date: req.body.date
    }
    Place.collection.insertOne(location).then(place => res.json(place))
        .catch(err => res.status(422).json(err));
})

router.get('/api/place/:id', (req, res) => {
    Place.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
})

router.delete("/api/place/:id", (req, res) => {
    Place.findOneAndRemove({
        _id: req.params.id,
    })
        .then(response => {
            console.log("removed successfully")
            res.json(response)
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})


module.exports = router;