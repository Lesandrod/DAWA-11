const mongoose = require('mongoose');

const CursoSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    duracion: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Curso', CursoSchema)