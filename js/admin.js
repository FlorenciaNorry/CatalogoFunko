import { Funko } from './funkoClass.js'

let listaFunkopop = [];
const modalFunko = new bootstrap.Modal(document.getElementById('modalProducto'));

//queremos qeu el boton agregar escuche l evento clic   
let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', function(){
    modalFunko.show();
});

window.agregarFuncopop = function (event) {
    //el objetivo de esta funcion es agregar un funkopop nuevo en loal Storage
    event.preventDefault();
    console.log('estamos dentro de la funcion agregar funco');
    //traer los valores del formulario que ya estan validados

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let numSerie = document.getElementById('numSerie').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;

    let nuevoFunkopop = new Funko(codigo, nombre, numSerie, categoria, descripcion, imagen);
    //agregar un nuevo funko en el arreglo
    listaFunkopop.push(nuevoFunkopop);
    console.log(listaFunkopop);
    //guardar datos en local storage
    //se guardan los datos en formato JASON(notacion de objetos)
    localStorage.setItem('listaFunkoKey', JSON.stringify(listaFunkopop));
    limpiarFormulario();
    //mostrar mensaje al usuario
    Swal.fire(
        'Nuevo producto',
        'El funkoPop se aguego correctamente',
        'success'
      )
      //cerrar la ventana modal
      modalFunko.hide()

};

function limpiarFormulario(){
    //limpiamos los valores del formulario
    let formulario = document.getElementById('formFunkopop');
    formulario.reset();
}