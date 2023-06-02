const mongoose = require('mongoose');

const LocalSchema = mongoose.Schema({

    departamento: {
        type: String,
        required: true
    },
    distrito: {
        type: String,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Local', LocalSchema)