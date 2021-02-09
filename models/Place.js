/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    location: { type: String, required: true },
    activity: { type: String, required: true },
    picture: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;