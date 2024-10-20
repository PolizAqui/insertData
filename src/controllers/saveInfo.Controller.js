const { saveComision, saveCotizacion, saveTransaction, savePoliza, saveModelo, saveMarca, getPoliza , updatePoliza} = require('../models/post');

const controller = {};

// Controlador para guardar la comisión
controller.saveComision = async (req, res) => {
  try {
    const result = await saveComision(req.body);
    res.status(result.code).json(result);
  } catch (err) {
    console.error('Error en el controlador saveComision:', err);
    res.status(500).json({ status: false, message: 'Error al guardar la comisión' });
  }
};

// Controlador para guardar la cotización
controller.saveCotizacion = async (req, res) => {
  try {
    const result = await saveCotizacion(req.body);
    res.status(result.code).json(result);
  } catch (err) {
    console.error('Error en el controlador saveCotizacion:', err);
    res.status(500).json({ status: false, message: 'Error al guardar la cotización' });
  }
};

// Controlador para guardar la transacción
controller.saveTransaction = async (req, res) => {
  try {
    const result = await saveTransaction(req.body);
    console.log(req.body);
    
    res.status(result.code).json(result);
  } catch (err) {
    console.error('Error en el controlador saveTransaction:', err);
    res.status(500).json({ status: false, message: 'Error al guardar la transacción' });
  }
};

// Controlador para guardar la póliza
controller.savePoliza = async (req, res) => {
  try {


    const result = await savePoliza(req.body);
    console.log(req.body);
    
    res.status(result.code).json(result);
  } catch (err) {
    console.log(err);
    
    console.error('Error en el controlador savePoliza:', err);
    res.status(500).json({ status: false, message: 'Error al guardar la póliza' });
  }
};

controller.getPoliza = async (req, res) => {
  try {
      const result = await getPoliza(); // Llamar al modelo getPoliza
      res.status(result.code).json(result); // Responder al cliente con el código y el mensaje
  } catch (err) {
      console.error('Error en el controlador getPoliza:', err);
      res.status(500).json({
          status: false,
          message: 'Error interno al obtener la póliza'
      }); // Responder con un mensaje de error en caso de fallo
  }
};


// Controlador para guardar el modelo
controller.saveModelo = async (req, res) => {
  try {
    const result = await saveModelo(req.body);
    res.status(result.code).json(result);
  } catch (err) {
    console.error('Error en el controlador saveModelo:', err);
    res.status(500).json({ status: false, message: 'Error al guardar el modelo' });
  }
};

// Controlador para guardar la marca
controller.saveMarca = async (req, res) => {
  try {
    const result = await saveMarca(req.body);
    res.status(result.code).json(result);
  } catch (err) {
    console.error('Error en el controlador saveMarca:', err);
    res.status(500).json({ status: false, message: 'Error al guardar la marca' });
  }
};

controller.updatePoliza = async (req, res) => {
  const { numero_poliza } = req.body;

  if (!numero_poliza) {
      return res.status(400).json({ status: false, message: 'numero_poliza is required' });
  }

  try {
      const result = await updatePoliza({ numero_poliza });

      // Enviar la respuesta con el código y mensaje del resultado
      res.status(result.code).json(result);
  } catch (err) {
      console.error('Error en el controlador updatePoliza:', err);
      res.status(500).json({ status: false, message: 'Error al actualizar la póliza' });
  }
};


module.exports = controller;
