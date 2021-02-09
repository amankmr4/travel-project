/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const Place = require('../models/Place');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Sheenal13:Sheenal13@cluster0.6xamj.mongodb.net/finalproject?retryWrites=true&w=majority');

const bookSeed = [
    {
        first_name: 'Aman',
        last_name: 'Aman',
        Location: 'Aman',
        activity: 'Aman',
        picture: 'Aman',
        date: new Date(Date.now()),
    },
    {
        first_name: 'Hello',
        last_name: 'Hello',
        Location: 'Hello',
        activity: 'Hello',
        picture: 'Hello',
        date: new Date(Date.now()),
    },
    {
        first_name: 'ok',
        last_name: 'ok',
        Location: 'ok',
        activity: 'ok',
        picture: 'ok',
        date: new Date(Date.now()),
    },
    {
        first_name: 'bye',
        last_name: 'bye',
        Location: 'bye',
        activity: 'bye',
        picture: 'bye',
        date: new Date(Date.now()),
    },
];

Place.remove({})
    .then(() => Place.collection.insertMany(bookSeed))
    .then((data) => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
