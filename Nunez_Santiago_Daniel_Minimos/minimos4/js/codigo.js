'use strict'
//import Factura from './factura.js'

/**
Suma dos números enteros.
@param {String} a Primer sumando.
@param {String} b Segundo sumando.
@return {Number} La suma de a y b.
**/
function sumar(a, b) {
    let result = parseInt(a) + parseInt(b)
    return result
}

/**
Comprueba si el valor recibido es un número
@param {Object} a Valor a comprobar.
@return {Boolean} Indica si es un número válido.
**/
function comprobar(a) {
    if (!isNaN(a)) {
        return true
    } else {
        return false
    }
}

//Función multiplicar
function multiplicar(a, b) {
    return a * b
}
/** Calcula la potencia de un número.
Esta función utiliza la función "multiplicar"
@param {Number} base Base de la potencia
@param {Number} exponente Número natural al que se elevará la base.
@result {Number} Resultado de elevar base a exponente.
**/
function elevar(base, exponente) {
    let resultado = 1
    for (let i = 0; i < exponente; i++) {
        resultado = multiplicar(base, resultado)

    }
    return resultado
}

/** Genera un array con los 10 primeros números enteros
@result {Array} Array con los 10 primeros números enteros.
**/
function generarArray() {
    let array = []
    for (let i = 0; i < 10; i++) {
        array[i] = i

    }
    return array
}

/** Genera un array bidimensional de números aleatorios enteros entre 1 y 100
@param {Number} filas Número de filas del array.
@param {Number} cols Número de columnas del array
@result {Array} Array bidimensional de números aleatorios
**/
function generarArrayBidimensionalAleatorio(filas, cols) {
    let arr2 = new Array(filas)
    for (let i = 0; i < filas; i++) {
        arr2[i] = new Array(cols)
        for (let j = 0; j < cols; j++) {
            arr2[i][j] = Math.round(Math.random() * (100 - 1)) + 1

        }
    }
    return arr2
}



/** Suma los elementos de un array bidimensional numérico
@param {Array} matriz Array bidimensional numérico.
@return {Number} Suma de los elementos del array.
**/
function sumarArrayBidimensional(matriz) {
    let resultado = 0
    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {
            resultado = resultado + matriz[i][j]

        }

    }
    return resultado
}

//Clase Factura
/**
 *
 *
 * @class Factura La clase Factura crea instancias con un cliente, 
 * base imponible y tipoIVA con valores por defecto
 */
class Factura {
    /**
     * Crea una instancia de la clase Factura.
     * @param {string} [cliente=null] Cliente de la factura
     * @param {number} [base=0] Base impuesta en la factura
     * @param {number} [tipoIVA=21] IVA aplicado
     * @memberof Factura
     */
    constructor(cliente = null, base = 0, tipoIVA = 21) {
        
        this.cliente = cliente
        this.base = base
        this.tipoIVA = tipoIVA
    }
    /**
     *
     *Devuelve el atributo cliente
     * @return {string}
     * @memberof Factura
     */
    getCliente() {
        return this.cliente
    }
    /**
     *
     *modifica el atributo cliente
     * @param {string} cliente Atributo de la instancia
     * @memberof Factura
     */
    setCliente(cliente) {
        this.cliente = cliente
        
    }
    /**
     *
     *Devuelve el atributo base
     * @return {number}
     * @memberof Factura
     */
    getBase() {
        return this.base
    }

    /**
     *
     *Modifica el atributo base
     * @param {number} base Atributo de la instancia
     * @memberof Factura
     */
    setBase(base) {
        this.base = base
    }

    /**
     *
     *Devuelve el atributo tipoIVA
     * @return {number} 
     * @memberof Factura
     */
    getTipoIVA() {
        return this.tipoIVA
    }

    /**
     *
     *Modifica el atributo tipoIVA
     * @param {number} tipoIVA Atributo de la instancia
     * @memberof Factura
     */
    setTipo(tipoIVA) {
        this.tipoIVA = tipoIVA
    }

    /**
     *
     *Devuelve la variable total
     * @return {number}
     * @memberof Factura
     */
    getTotal() {
        let total = this.base + this.base * this.tipoIVA / 100
        console.log(total);
        return total

    }

}