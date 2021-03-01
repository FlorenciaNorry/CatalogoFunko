function validarCampos(input){
    console.log('perdi el fonco estoy en validar codigo');
    // let input = document.getElementById('codigo');
    if(input.value.trim()  === ""){
        input.className = 'form-control is-invalid';
    }else{
        input.className = 'form-control is-valid';
    }
}

function validarCodigo(numero){
    if(numero.value.trim() != '' && !isNaN(numero.value)){
        numero.className = 'form-control is-valid';
    }else{
        numero.className = 'form-control is-invalid';
    }
}

function validarDescripcion(descripcion){
    if(descripcion.value.trim() != '' && descripcion.value.length >= 5){
        descripcion.className = 'form-control is-valid';
    }else{
        descripcion.className = 'form-control is-invalid';
    }
}