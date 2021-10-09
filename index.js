const express = require('express'); //Sintaxis de importación en nodejs
require('dotenv').config();
const { dbConection } = require('./config/database')
const cors = require('cors');

//Crear el servidor express
const app = express()

//Configurar cors
app.use(cors());

app.use(express.json());

//Estableciendo conexión a la BD
dbConection();
//console.log(process.env)

//Rutas de la API Proyectos
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));
//app.use('/api/investigadores' , require('./routes/investigadores.routes'))

//Codigo para desplegar el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor desplegado en el puerto:' + process.env.PORT)
})
