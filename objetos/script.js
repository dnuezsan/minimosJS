'use strict'

let obj1 = {
    nombre: 'objeto',
    numero: 1,
}

let obj2 = {} //un objeto se puede declarar de esta forma o con un constructor
//al crearlo así, se pueden incluir los atributos entre las llaves, o incluirlos fuera.

function nombref() { //se declara una funcion
    console.log(this.nombre);

}

obj2.nombre = 'obj2' //se declara un atributo fuera de la declaración del objeto o de una instancia
obj2.f = nombref //Se declara una función como atributo y se iguala con una existente. Para evitar tener que hacer esto en cada objeto 
//mirar "Objetos de clases" en la línea 26

console.log(obj1.nombre);

console.log(obj2.nombre); //se imprime el atributo del objeto
obj2.f() //llama al método del objeto


//Objetos de clases
class Persona{
    constructor(nombre){
        this.nombre = nombre

    }

    prueba() { //El/los método debe declararse fuera del constructor
        console.log(this.nombre + " 1");
    }
}

let primero = new Objetos('jack')
//Aunque proceda de una clase, una instancia puede recibir un atributo de forma global para una instancia en particular

primero.apellido = "Doe" //Se declara el atributo apellido para esta instancia

primero.prueba() //Se llama al método del objeto

console.log(primero.apellido); //Se llama al atributo apellido de la instancia
