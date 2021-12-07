'use strict'
//se llama al método iniciar
window.onload = iniciar

function iniciar() {

    comprobarE11()

    cambiarE12()

    buscarE13()

    cambiarE14()

    crearSelect()

    crearP()

    let div31 = document.getElementById('div31')
    div31.onclick = function () {
        this.innerHTML = 'CLICK'
    }

    div31.onmouseover = function () {
        this.innerHTML = 'MOUSEOVER'
    }

    div31.ondblclick = function () {
        this.innerHTML = 'DOUBLECLICK'
    }

    div31.onmouseout = function () {
        this.innerHTML = 'MOUSEOUT'
    }

}

//deuelve el atributo width de iEj11
/**
 *
 *Devuelve el atributo campo del input seleccionado
 * @return {number}
 */
function comprobarE11() {
    let campo = document.getElementById('iEj11').getAttribute('width')
    return campo
}
//moifica el anco de iEj12 a 37px
/**
 *
 *Modifica el ancho del campo
 * @return {string}
 */
function cambiarE12() {
    //let campo = document.getElementById('iEj12').clientWidth = 37 + 'px'
    let campo = document.getElementById('iEj12').style.width = '37px'
    console.log(campo);
    return campo
}

//devuelve el valor del ultimo input number
/**
 *
 *Devuleve el valor del tecer campo number
 * @return {number} 
 */
function buscarE13() {
    let campo = document.getElementsByTagName('input')[4].value
    console.log(campo);
    return campo
}

//cambia el color de div14 a rojo
/**
 *Cambia el color de fondo del div a rojo
 *
 */
function cambiarE14() {
    let campo = document.getElementById('div14').style.backgroundColor = 'red'
}

//Crea un atributo select con opciones con valor y texto en div21

/**
 *Crea un select opciones y se les da valor y contenido
 *
 */
function crearSelect() {
    //Se selecciona el div, se declara y asocia un salto de línea y se declara la etiqueta option
    let div2 = document.getElementById('div21')
    let salto = document.createElement('br')
    let opcion = document.createElement('option')
    div2.appendChild(salto)
    //Se crea el numero de opciones que se requiera con un bucle y se le da un valor a cada una
    let selec = div2.appendChild(document.createElement('select'))
    for (let i = 1; i < 3; i++) {
        selec[i] = selec.appendChild(opcion)
        for (let j = 0; j < selec.length; j++) {
            selec[j].value = j

        }
    }

    selec[0].innerHTML = 'JavaScript'
    selec[1].innerHTML = 'ECMA2'
}

//crea un elemento p, se le da la clase bonito, se le da un texto y se coloca antes que el select

/**
 *Inserta un parrafo con una clase (bonito) en una parte concreta del div 
 *
 */
function crearP() {
    let div = document.getElementById('div21')
    let parrafo = document.createElement('p')
    parrafo.classList.add('bonito')
    parrafo.innerHTML = 'Brendan Eich creó JavaScript'
    div.insertBefore(parrafo, div.getElementsByTagName('select')[0])
}


//Ejercicio 4

/**
 *
 *
 * @class Controlador Es la clase que controla el programa
 */
class Controlador {

    /**
     * Crea una instancia de Controlador que inicializa una instancia de Vista y Modelo
     * @memberof Controlador
     */
    constructor() {
        
        this.vista = new Vista()
        this.modelo = new Modelo()
        this.cambiar()
    }
    //cambia el div insertando los datos del modelo

    /**
     *
     *Muestra con el atributo vista los datos del atributo modelo
     * @return {string} 
     * @memberof Controlador
     */
    cambiar() {
        return this.vista.mostrarDatos(this.modelo.getDatos())
    }

}

/**
 *
 *
 * @class Vista Genera elementos en la vista
 */
class Vista {
    constructor() {

    }
    //recibe un texto y lo inserta en el div

    /**
     *
     *
     * @param {string} texto Recibe un texto que se presentará en el div seleccionado
     * @memberof Vista
     */
    mostrarDatos(texto) {
        let div = document.getElementById('div41')
        div.innerHTML = texto // o `${div.textContent} ${texto}` //no elimina el texto existente

    }
}


/**
 *
 *
 * @class Modelo Clase que guarda los datos del programa
 */
class Modelo {

    /**
     * Crea una instancia de Modelo
     * @memberof Modelo
     */
    constructor() {
        this.datos = 'MVC es un patrón de diseño'
    }
    //devuelve el atributo datos

    /**
     *
     *Método que devuelve el atributo datos de la instancia
     * @return {string} 
     * @memberof Modelo
     */
    getDatos() {
        return this.datos
    }
}