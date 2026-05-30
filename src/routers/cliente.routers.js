const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/cliente.controller');

//Validacion de token 
const { verificarToken, verificarRol } = require('../middlewares/auth.middleware');

router.get('/',ClienteController.obtenerClientes);// VER todos
router.get('/:id',verificarToken,verificarRol, ClienteController.obtenerCliente);// uno por id
router.post('/', ClienteController.crearCliente);///CREAR


module.exports = router;