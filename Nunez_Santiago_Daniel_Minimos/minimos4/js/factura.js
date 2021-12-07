'use strict'

export default class Factura {
    //se declara el constructor y se le dan valores por defecto
    constructor(cliente = null, base = 0, tipoIVA = 21) {
        this.cliente = cliente
        this.base = base
        this.tipoIVA = tipoIVA
    }

    //devuelve el atributo cliente
    getCliente() {
        return this.cliente
    }
    //modifica el atributo cliente
    setCliente(cliente) {
        this.cliente = cliente
    }
    //devuelve el atributo base
    getBase() {
        return this.base
    }
    //modifica el atributo base
    setBase(base) {
        this.base = base
    }
    //devuelve el atributo tipoIVA
    getTipoIVA() {
        return this.tipoIVA
    }
    //modifica el atributo tipoIVA
    setTipo(tipoIVA) {
        this.tipoIVA = tipoIVA
    }
    //devuelve el total
    getTotal() {
        let total = this.base + this.base * this.tipoIVA / 100
        console.log(total);
        return total

    }

}


