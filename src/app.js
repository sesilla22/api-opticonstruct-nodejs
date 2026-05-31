const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static('public'));

const materialSucursalRouters = require('./routers/material_sucursal.routers');
const usuarioRouters = require('./routers/usuarios.routers.js');
const clienteRouters= require('./routers/cliente.routers.js');
const proyectoRouters= require('./routers/proyecto.routers.js');
const sucursalRouters= require('./routers/sucursal.routers.js');
const materialRouters= require('./routers/material.routers.js');
const materiales_planosRouters = require('./routers/materiales_planos.routers.js');
const authRouters = require('./routers/auth.routers'); 
const materialSucursalRouters = require('./routers/material_sucursal.routers');


// ... (Tus otros require igual que los tienes) ...
app.use('/api/material_sucursal', materialSucursalRouters);
app.use('/api/usuarios', require('./routers/usuarios.routers.js'));
app.use('/api/cliente', require('./routers/cliente.routers.js'));
app.use('/api/proyecto', require('./routers/proyecto.routers.js'));
app.use('/api/sucursal', require('./routers/sucursal.routers.js'));
app.use('/api/auth', require('./routers/auth.routers'));
app.use('/api/material', require('./routers/material.routers.js'));
app.use('/api/materiales_planos', require('./routers/materiales_planos.routers.js'));

// --- Servidor (SIEMPRE AL FINAL) ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;