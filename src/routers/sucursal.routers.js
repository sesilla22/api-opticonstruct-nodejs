const express = require('express');
const router = express.Router();
const SucursalController = require('../controllers/sucursal.controller');

//validación de VerificarToken y VerificarRol
const { verificarToken, verificarRol} = require('../middlewares/auth.middleware');

router.post ('/', SucursalController.crearSucursal);
router.get('/',SucursalController.obtenerSucursales);
router.get('/:id', verificarToken, verificarRol(1),SucursalController.obtenerSucursal);

module.exports = router;

