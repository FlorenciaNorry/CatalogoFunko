//declaro las variable 
let listaFunkopop = [];
leerInformacion();

function leerInformacion() {
    //traer los datos de local storage
    //parse transforma de jason a local
    if (localStorage.length > 0) {
        listaFunkopop = JSON.parse(localStorage.getItem('listaFunkoKey'));
    }
    //dibujar la columna con la card 
    let grilla = document.getElementById('grillaFunko');
    //limpiar los datos del contenedor padre
    grilla.innerHTML = '';
    for (let i in listaFunkopop) {
        let imagen = '';
        if(listaFunkopop[i].imagen === ''){
            //quiero cargar imagen por defecto 
            imagen = 'thanos.png';
        }else{
            imagen = listaFunkopop[i].imagen;
        }
        let columna = `<div class="card" style="width: 15rem">
        <img
          src="img/productos/${imagen}"
          class="card-img-top"
          alt="Funko ${listaFunkopop[i].nombre}"
        />
        <div class="card-body">
          <h5 class="card-title">${listaFunkopop[i].nombre}</h5>
          <p class="card-text">${listaFunkopop[i].descripcion}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>`;
      grilla.innerHTML += columna
    }
    //agregar esa columna en el index
}

