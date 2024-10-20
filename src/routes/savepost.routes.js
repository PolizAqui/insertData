const {POLIZA,TRANSACTION,COMISION,COTIZACION,MARCAS,MODELOS,GETPOLIZA,UPDATEPOLIZA} = require ('../global/_var')

/******** DEPENDENCY ********/

const express = require('express');
const router = express.Router();

/********* Controlador ********/

const saveInfoController = require('../controllers/saveInfo.Controller');

/********* ROUTESS **********/

router.post(POLIZA, saveInfoController.savePoliza);
router.post(COTIZACION, saveInfoController.saveCotizacion);
router.post(COMISION,saveInfoController.saveComision);
router.post(TRANSACTION,saveInfoController.saveTransaction);
router.post(MARCAS,saveInfoController.saveMarca);
router.post(MODELOS,saveInfoController.saveModelo);
router.get(GETPOLIZA, saveInfoController.getPoliza);
router.post(UPDATEPOLIZA, saveInfoController.updatePoliza)

module.exports = router;