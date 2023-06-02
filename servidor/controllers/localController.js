const Local = require("../models/Local");

exports.crearLocal = async (req, res) => {
    try {
        const local = new Local(req.body);

        await local.save();
        res.send(local);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerLocal = async (req, res) => {

    try {

        const locales = await Local.find();
        res.json(locales);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarLocal = async (req, res) => {

    try {

        const {_id, departamento, distrito, cantidad, latitud, longitud } = new Local(req.body);
        let locals = await Local.findById(req.params.id);

        if(!locals){
            res.status(404).json({ msg: 'No existe el local'});
        }

        local._id = _id;
        locals.departamento = departamento;
        locals.distrito = distrito;
        locals.cantidad = cantidad;
        locals.latitud = latitud;
        locals.longitud = longitud;

        console.log(locals)

        locals = await Local.findOneAndUpdate({ _id: req.params.id }, locals, { new: true } );
        res.json(locals);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verLocal = async (req, res) => {

    try {

        let locals = await Local.findById(req.params.id);

        if(!locals){
            res.status(404).json({ msg: 'No existe el local'});
        }

        res.json(locals);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
exports.eliminarLocal = async (req, res) => {

    try {

        let locals = await Local.findById(req.params.id);

        if(!locals){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        locals = await Local.findOneAndRemove(req.params.id);

        res.json({ msg: 'El producto: ' + locals.producto + ' se ha eliminado' });
        console.log('El producto: ' + locals.producto + ' se ha eliminado');
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}



