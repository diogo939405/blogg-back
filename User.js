const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: true
    },
    capituloUm: {
        type: String,
        required: true
    },
    capituloDois: {
        type: String,
        required: true
    },
    capituloTres: {
        type: Date,
        required: true
    },
    capituloQuatro: {
        type: Date,
        required: true
    },
    capituloCinco: {
        type: Date,
        required: true
    },
    capituloSeis: {
        type: Date,
        required: true
    }
});
const DataModel = mongoose.model("DataModel", DataSchema)
module.exports = DataModel