/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
const path = require('path');
const router = require('express').Router();
const UserRoutes = require('./api/user-routes');
const PlaceRoutes = require('./api/place-routes')

// API Routes
router.use(UserRoutes);
router.use(PlaceRoutes);


// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
