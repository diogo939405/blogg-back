const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
});

const DataSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
    },
    capitulos: {
        type: [ChapterSchema], // Array de objetos do esquema ChapterSchema
        required: true,
    },
});

const DataModel = mongoose.model("DataModel", DataSchema);
module.exports = DataModel;
