//VARIABLES
const asunto = document.getElementById('asunto');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formulario = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');




//EVENTLISTENERS

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    btnEnviar.addEventListener('click', enviarEmail);

    resetBtn.addEventListener('click', resetForm);
}




//FUNCIONES

function inicioApp() {
    //deshabilitar el boton al inicio de la app
    btnEnviar.disabled = true;
}

function validarCampo() {
    //se valida la longitud del texto y que no este vacío
    validarLongitud(this);
    
    //validar únicamente el email
    if(this.type === 'email') {
        validarEmail(this);
    }

    //let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        //if(errores.length === 0){
        btnEnviar.disabled = false;
        //}
    } else {
        btnEnviar.disabled = true;
    }
}


function enviarEmail(e) {
    e.preventDefault();
    //spinner al presionar ("cargando")
    const spinnerGif = document.getElementById('spinner');
    spinnerGif.style.display = 'block';

    //mensaje enviado ("gif envio exitoso")
    const enviado = document.createElement('img');
    enviado.src = "img/mail.gif";
    enviado.style.display = 'block';

    //ocultar spinner.gif y mostrar mail.gif despues de cierto tiempo
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.getElementById('loaders').appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            formulario.reset();
        },5000)

    }, 3000)
    console.log('Enviado!');
}

function resetForm(e) {
    e.preventDefault();
    formulario.reset();
}


function validarLongitud(campo) {
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const email = campo.value;
    if (email.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}