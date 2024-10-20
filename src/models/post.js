const pool = require('../utils/mysql.connect');

const saveComision = async ({ id_poliza, cedula_rif, comision_polizaqui, comision_aliado }) => {
  const msg = {
    status: false,
    message: 'Save Comision not found',
    code: 500
  };

  let connection;

  try {
    // Obtener la conexión del pool
    connection = await pool.getConnection();

    // SQL para insertar los datos en la tabla comisiones
    const sql = 'INSERT INTO comisiones (id_poliza, cedula_rif, comision_polizaqui, comision_aliado) VALUES (?, ?, ?, ?)';

    // Ejecutar la consulta
    const [result] = await connection.execute(sql, [id_poliza, cedula_rif, comision_polizaqui, comision_aliado]);

    if (result.affectedRows > 0) {
      // Actualizar el mensaje de éxito si se insertó al menos una fila
      msg.status = true;
      msg.message = 'Comision saved successfully';
      msg.code = 200;
    }

  } catch (err) {
    // Manejar errores en la consulta
    console.error('Error al guardar la comision:', err);
    msg.message = 'Error al guardar la comision';
  } finally {
    // Liberar la conexión en el bloque finally
    if (connection) connection.release();
  }

  return msg;
};


const savePoliza = async ({fecha_emision,fecha_expiracion,estado_poliza,documento_poliza,email_usuario,coberturas,plan,monto,titular,aseguradora,numero_poliza}) => {
    try{
        const msg = {
            status:false,
            message:'Poliza not found',
            code:500
        }

        const connection = await pool.getConnection();

        const sql = 'INSERT INTO polizas (fecha_emision,fecha_expiracion,estado_poliza,documento_poliza,email_usuario,coberturas,plan,monto,titular,aseguradora,numero_poliza) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        const [result] = await connection.execute(sql,[fecha_emision,fecha_expiracion,estado_poliza,documento_poliza,email_usuario,coberturas,plan,monto,titular,aseguradora,numero_poliza]);
        console.log([result]);
        
        if(result.affectedRows > 0){
            msg.status = true;
            msg.message = 'Poliza saved successfully';
            msg.code = 200;
        }

        connection.release();
        return msg;
    }catch (err) {
        console.error('Error al guardar la Poliza:', err);
    }
}


const getPoliza = async () => {
    let msg = {
        status: false,
        message: 'Poliza not found',
        code: 500
    };

    try {
        const connection = await pool.getConnection(); // Obtener la conexión a la base de datos

        const sql = 'SELECT * FROM polizas'; // Consulta SQL
        const [result] = await connection.execute(sql);

        // Si se encontraron resultados
        if (result.length > 0) {
            msg = {
                status: true,
                message: 'Poliza found successfully',
                code: 200,
                data: result
            };
        }

        connection.release(); // Liberar la conexión a la base de datos
    } catch (err) {
        console.error('Error al obtener polizas:', err);
        // Si ocurre un error, actualizamos el mensaje de respuesta
        msg = {
            status: false,
            message: 'Error al obtener polizas',
            code: 500
        };
    }

    return msg; // Devolver el mensaje de respuesta
};



const saveTransaction = async ({ tipo_transaccion, fecha_transaccion, monto_transaccion }) => {
    let connection;
    let msg = { // Cambia `const` a `let` para permitir la reasignación
        status: false,
        message: 'Transaction not Found',
        code: 500
    };

    try {
        connection = await pool.getConnection(); // Obtén la conexión

        const sql = 'INSERT INTO transacciones (tipo_transaccion, fecha_transaccion, monto_transaccion) VALUES (?, ?, ?)';
        const [result] = await connection.execute(sql, [tipo_transaccion, fecha_transaccion, monto_transaccion]);

        if (result.affectedRows > 0) {
            msg = { // Reasigna el objeto `msg`
                status: true,
                message: 'Transaction saved successfully',
                code: 200
            };
        }
    } catch (err) {
        console.error('Error al guardar la Transaccion:', err);
    } finally {
        if (connection) connection.release(); // Libera la conexión si está definida
    }

    return msg;
};


const saveCotizacion = async ({fecha_cotizacion,estado_cotizacion}) => {
    try {

        const msg = {
            status: false,
            message: 'Cotizacion not found',
            code: 500
        }

        const connection = await pool.getConnection();

        const sql = 'INSERT INTO cotizaciones (fecha_cotizacion,estado_cotizacion) VALUES (?, ?)'

        const [result] = await connection.execute(sql,[fecha_cotizacion,estado_cotizacion]);

        if(result.affectedRows > 0){
            msg = {
                status: true,
                message: 'Cotización saved successfully',
                code: 200
            }
        }

    }catch (err) {
        console.error('Error al guardar la Cotizacion',err);
        message.error = 'Error al guardar la Cotizacion';
        
    }finally {
        if (connection) connection.release()
    }
    return msg
}


const saveMarca = async ({nombre_marca}) => {
    try {

        const msg = {
            status:false,
            message: 'Marca not found',
            code: 500
        }

        const connection = await pool.getConnection();

        const sql = 'INSERT INTO marcas (nombre_marca) VALUE (?)'

        const [result] = await connection.execute(sql,[nombre_marca]);

        if(result.affectedRows > 0){
            msg = {
                status: true,
                message: 'Marca saved successfully',
                code: 200
            }
        }

    } catch (err) {
        console.error('Error al guardar la Marca',err);
        message.error = 'Error al guardar la Marca';
        
    } finally {
        if (connection) connection.release()
    }
    return msg
}


const saveModelo = async ({nombre_modelo,id_marca}) => {
    try{

        const msg = {
            status: false,
            message: 'Modelo not found',
            code: 500
        }

        const connection = await pool.getConnection();

        const sql = 'INSERT INTO modelos (nombre_modelo, id_marca) VALUES (?, ?)'

        const [result] = await connection.execute(sql,[nombre_modelo,id_marca]);

        if(result.affectedRows > 0){
            msg = {
                status: true,
                message: 'Modelo saved successfully',
                code: 200
            }
        }

    }catch (err) {
        console.error('Error al guardar el Modelo',err);
        message.error = 'Error al guardar el Modelo';
    } finally {
        if (connection) connection.release()
    }
    return msg;
}


const updatePoliza = async ({ numero_poliza }) => {
    const msg = {
        status: false,
        message: 'Poliza not found',
        code: 500
    };

    try {
        const connection = await pool.getConnection();

        // Consulta para actualizar el estado de la póliza
        const sql = 'UPDATE polizas SET estado_poliza = ? WHERE numero_poliza = ?';
        const [result] = await connection.execute(sql, ['PAGADO', numero_poliza]);

        connection.release();

        if (result.affectedRows > 0) {
            msg.status = true;
            msg.message = 'Poliza updated successfully';
            msg.code = 200;
        } else {
            msg.message = 'Poliza not found with the given numero_poliza';
        }
    } catch (err) {
        console.error('Error al actualizar la póliza:', err);
        msg.message = 'Error al actualizar la póliza';
        msg.code = 500;
    }

    return msg;
};

module.exports = {
    saveComision,
    savePoliza,
    saveTransaction,
    saveCotizacion,
    saveMarca,
    saveModelo,
    getPoliza,
    updatePoliza
 };
