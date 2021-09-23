const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        //Debemos utilizar la cadena de conexion que tenemos en mongocompass
        //mongodb+srv://adminproject:FndsJiq4LQK0nt0L@cluster0.e3uwh.mongodb.net/test?authSource=admin&replicaSet=atlas-14lhh8-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
        await mongoose.connect(process.env.DB_CNN);
        console.log('Conexion exitosa a la BD')
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD');
    }
}

module.exports = {
    dbConection
}