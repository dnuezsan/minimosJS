'use strict'

let titulo = document.getElementById('encabezado')
console.log(titulo.innerHTML);

/* let concepto = document.getElementById('concepto') //selecciona el elemento por id
console.log(concepto);  //
 */

/* let caracteristicas = document.getElementsByName("caracteristicas") //selecciona elementos por nombre. Devuleve un array
console.log(caracteristicas[1].innerHTML); //devuelve el contenido interior del segundo elemento del array
 */

let caracteristicas = document.getElementsByTagName('p') //selecciona por etiqueta
caracteristicas[1].innerText = "FUNCIONA" //introduce este texto en el elemento seleccionado

let nuevoParrafo = document.createElement('p')
let textoParrafo = document.createTextNode("Aqui va un texto para el párrafo")
let datoNuevo = document.getElementById('datos')

datoNuevo.appendChild(nuevoParrafo) //agrega al div un p
nuevoParrafo.appendChild(textoParrafo) // agrega al p un nodo de texto

function validar() {
    let nombre = document.getElementById("nombre").value
    let radios = document.getElementsByName('programar')
    let estudia = document.getElementById("estudiante")
    let valorRadio = ""

    radios.forEach(element => {
        if (element.checked) {
            valorRadio = element.value
        }
    })

    if (estudia.checked) {
        console.log(estudia);
        estudia = "Si"
    } else {
        estudia = "No"
    }

    console.log(`Nombre: ${nombre} \nSabe programar: ${valorRadio}\nEstudiante: 
    ${estudia}`);
}


function limpiar() {
    let radios = document.getElementsByName('programar')
    let valorRadio = ""

    radios.forEach(element => {
        if (element.checked) {

            element.checked = false

        }
    })

}

/* 
//Funciona
let prueba = {
    nombre: 'jack'
}

function bla() {
    console.log(this.nombre);
}

prueba.f = bla

prueba.f()
 */

/* 
//Tambien funciona
let prueba = {
    nombre: 'jack',
    bla
}

function bla() {
    console.log(this.nombre);
}

prueba.bla = bla

prueba.bla() */