'use strict'

//No cambies esta línea o el test no funcionará
window.addEventListener('load', iniciar)

/**
  Función que se llamará al cargar la página.
**/

/**
 *Lleva a cabo una serie de instrucciones
 *
 */
function iniciar() {

  //ejercicio 1

  /* //evento cambio
  document.getElementById('iEj1').addEventListener('change', function registrar() {
    this.value = 1
  })
  //evento focus
  document.getElementById('iEj1').addEventListener('focus', function registrar() {
    this.value = 2
  })
  //evento raton
  document.getElementById('iEj1').addEventListener('mouseover', function registrar() {
    this.value = 3
  })
  //evento click
  document.getElementById('iEj1').addEventListener('click', function registrar() {
    this.value = 4
  }) */
  /** @type {object} Almacena un input del html*/
  let id = document.getElementById('iEj1') //Se declara el campo de interes en una variable

  id.onchange = () => { caso(1) } //Llama variable caso al cambiar valor de input
  id.onfocus = () => { caso(2) } //Llama variable caso al centrarse en el input
  id.onmouseover = () => { caso(3) } //Llama variable caso al mover el raton sobre el input
  id.onclick = () => { caso(4) } //Llama variable caso al hacer click sobre el input

  //Se declara variable con función que llama a registrar() segun el valor de un evento
  /**
   *
   *Decide la funcion que se aplicará mediante un switch que recibe un parámetro
   * @param {number} a
   */
  let caso = (a) => {
    switch (a) {
      case 1:
        registrar()
        console.log('caso 1');
        break;
      case 2:
        registrar()
        console.log('caso 2');
        break;
      case 3:
        registrar()
        console.log('caso 3');
        break;
      case 4:
        registrar()
        console.log('caso 4');
        break;
    }
  }

  //2.2
  document.forms[0].addEventListener('submit', () => {
    envio.preventDefault()
    /** @type {object} almacena el elemento select del html*/
    let select = document.getElementById('sLista')
    //se selecciona un valor nulo
    if (select.value == '') { //tambien se puede hacer con selectedIndex==0
      alert('campo vacío')
      return
    }
    //Se selecciona un valor correcto
    else {
      alert('bien')
      //document.forms[0].submit()
      envio.submit()
      return
    }

  })

  //2.3
  //version larga
  document.getElementById('iF1').addEventListener('focusout', () => {
    /** @type {object} Almacena una instancia de tipo Date*/
    let fecha = new Date()
    //Variables fecha actual
    /** @type {string} Guarda el dia*/
    let dia = fecha.getDate()
    if (dia < 10) {
      dia = '0' + fecha.getDate()
    }
    /** @type {string} Guarda el mes*/
    let mes = fecha.getMonth() + 1
    if (mes < 10) {
      mes = '0' + fecha.getDate()
    }
    /** @type {string} Guarda el año*/
    let anio1 = fecha.getFullYear()
    /** @type {string} Almacena la fecha obtenida con las variables*/
    let fechaActual = `${anio1}-${mes}-${dia}`

    //variables fecha introducida
    /** @type {string} Guarda un array con los valores del input*/
    let date = document.getElementById('iF1').value.split('-')
    /** @type {string} Almacena el primer valor del string y lo convierte en entero*/
    let anio2 = parseInt(date[0])

    //Se analiza el valor del campo y se cambia si no coincide
    if (anio2 != 2021) {
      iF1.value = `${fechaActual}` //se puede seleccionar un id sin definir ruta DOM
    }
  })

  //versión compacta
  document.getElementById('iF2').addEventListener('focusout', () => {
    //variable fecha actual
    /** @type {object} Almacena los milisegundos transcurridos hasta el momento actual*/
    let ahora = object.now()
    /** @type {object} Almacena una fecha que se actualiza a los milisegundos transcurridos actuales*/
    let fecha = new Date(ahora)
    fecha = fecha.toISOString().slice(0, 10)
    //variables del campo
    let date = document.getElementById('iF2').value.split('-')
    /** @type {string} Almacena el año del array y lo convierte en un numero*/
    let anio = parseInt(date[0])
    //resolucion
    if (anio != 2021) {
      iF2.value = fecha
    }


  })

  //3
  gestionarCookie()
}
/**
 *
 *Busca una cookie. Si la encuentra la devuelve, si no, crea la cookie Valor1
 * @return {string}
 */
function gestionarCookie() {
  if (document.cookie.includes('cookie1')) {
    let cambio = document.cookie.replace(/=/g, ' ') //cambia los = por espacios
    let cookies = cambio.split(' ') //crea un array por los espacios
    let posicion = cookies.indexOf('cookie1') //busca la posicion de la cookie
    let resultado = cookies[posicion] + `=${cookies[posicion + 1]}` //alamacena la cookie junto con su valor
    console.log(resultado);
    return resultado
  } else {
    document.cookie = 'Valor1; Secure'
  }
}


//console.log(document.cookie.split('; ')[0]);