const Curso = require("../models/curso");

exports.obtenerCursos = async (req, res) => {

    try {

        const cursos = await Curso.find();
        res.json(cursos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}





