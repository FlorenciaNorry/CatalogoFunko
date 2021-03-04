import { Funko } from './funkoClass.js'

let listaFunkopop = [];
const modalFunko = new bootstrap.Modal(document.getElementById('modalProducto'));

//queremos qeu el boton agregar escuche el evento clic   
let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', function () {
    modalFunko.show();
});

//buscar los datos del localstorage
leerDatos();

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
    //llamar a leer datos
    leerDatos();   
    //cerrar la ventana modal
    modalFunko.hide()

};

function limpiarFormulario() {
    //limpiamos los valores del formulario
    let formulario = document.getElementById('formFunkopop');
    formulario.reset();
}

//leer datos del local storage
function leerDatos() {
    if (localStorage.length > 0) {
        //traer datos del localstorage
        let _listaFunkopop = JSON.parse(localStorage.getItem('listaFunkoKey'));
        console.log(_listaFunkopop);
        //si el arreglo de productos esta vacio le cargo los datos de localstorage
        if (listaFunkopop.length === 0) {
            listaFunkopop = _listaFunkopop;
        }
        //dibujar la tabla
        dibujarTabla(_listaFunkopop);
    }
}

//funcion que insertara tablas en el html con los funcos ingresados
function dibujarTabla(_listaFunkopop) {
    //traer el padre de las filas que es el tbody
    let tablaFunko = document.getElementById('tablaFunko');
    //variable para trabajar codigo html
    let filaFunko = '';
    tablaFunko.innerHTML = '';

    // for(let i=0; i<_listaFunkopop.length;i++){}
    for (let i in _listaFunkopop) {
        //crear la fila 
        filaFunko = `<tr>
        <th scope="row">${_listaFunkopop[i].codigo}</th>
        <td>${_listaFunkopop[i].nombre}</td>
        <td>${_listaFunkopop[i].numSerie}</td>
        <td>${_listaFunkopop[i].categoria}</td>
        <td>${_listaFunkopop[i].descripcion}</td>
        <td>${_listaFunkopop[i].imagen}</td>
        <td>
          <button class="btn btn-warning">Editar</button>
          <button class="btn btn-danger" onclick='eliminarFunkopop(this)' id='${_listaFunkopop[i].codigo}'>Borrar</button>
        </td>
      </tr>`;
        //agregar la fila al elemento padre
        tablaFunko.innerHTML += filaFunko;
    }
}

window.eliminarFunkopop = function(boton){
    console.log(boton.id);
    Swal.fire({
        title: 'Esta seguro de eliminar el Funkopop',
        text: "No puedes volver atras luego de este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'Cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}
