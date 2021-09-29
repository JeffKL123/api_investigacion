const express = require('express'); //Sintaxis de importación en nodejs
require('dotenv').config();
const {dbConection} = require('./config/database')
const cors = require('cors');

//Crear el servidor express
const app = express()

//Configurar cors
app.use(cors());

//Estableciendo conexión a la BD
dbConection();
//console.log(process.env)
//test

//Rutas de la API Proyectos
app.get('/', (req,res)=>{
    res.status(400).json({
        ok:true,
        msg:'Bienvenidos a NodeJS'
    });
});

//Codigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto:'+process.env.PORT)
})
