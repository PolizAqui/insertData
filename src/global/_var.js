require('dotenv').config()

/********* PORT *******/

const PORT = process.env.PORT;

/********* DATABASE *******/

const PG_NAME = process.env.PG_NAME
const PG_USER = process.env.PG_USER
const PG_HOST = process.env.PG_HOST
const PG_PASS = process.env.PG_PASS

/********** ROUTES *********/

const COMISION = process.env.COMISION
const TRANSACTION = process.env.TRANSACTION
const POLIZA = process.env.POLIZA
const COTIZACION = process.env.COTIZACION
const MARCAS = process.env.MARCAS
const MODELOS = process.env.MODELOS
const GETPOLIZA = process.env.GETPOLIZA
const UPDATEPOLIZA = process.env.UPDATEPOLIZA

module.exports = {
    PORT,
    PG_NAME,
    PG_USER,
    PG_HOST,
    PG_PASS,
    COMISION,
    TRANSACTION,
    POLIZA,
    COTIZACION,
    MARCAS,
    MODELOS,
    GETPOLIZA,
    UPDATEPOLIZA
}
