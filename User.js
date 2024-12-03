const mongoose = require('mongoose');

// Subcapítulos
const SubChapterSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
    rodape: {
        type: String,

    }
});

// Capítulos
const ChapterSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
    subCapitulos: {
        type: [SubChapterSchema], // Array de subcapítulos dentro de cada capítulo
        required: true,
    },
});

// Dados principais
const DataSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: true,
    },
    infoAutor: {
        type: String,
    },
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },

    capitulos: {
        type: [ChapterSchema], // Array de capítulos
        required: true,
    },
});

const DataModel = mongoose.model("DataModel", DataSchema);
module.exports = DataModel;
