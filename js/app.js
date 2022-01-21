
const tarjetas= document.querySelectorAll('.tarjeta');
const foto= document.getElementById('contenedor-tarjeta');
window.onhashchange=function(){
    let vista= location.hash;
    console.log(vista);
    let menu= document.querySelector(vista);
    tarjetas.forEach(t=>{
        t.classList.add('close');
        t.classList.remove('open');
        t.classList.remove('position');
    })
    foto.classList.remove('position')
    menu.classList.remove('close');
    menu.classList.add('open');
    menu.classList.add('position');
  
}
let expreRegMail= /^\w+@\w+\.(\w{2,4})\.(\w{2,4}){1,2}$/;
let expreRegMail1= /^\w+@\w+\.(\w{2,4}){1,2}$/;
let expreRegNyA= /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s*$/
let expreRegNomb=/^[a-zA-Z]{3,}\s*$/;

let inputs= document.querySelectorAll('input, textarea');
inputs.forEach(i=>{
    i.addEventListener('focusout', validarEntrada);
})
const formulario= document.querySelector('.form');
formulario.addEventListener('submit', validarFormulario);

let states={
    nombre:false,
    mail:false,
    texto:false,
}

function validarEntrada(e){
    switch(e.target.id){
        case 'nombre':
            if(!expreRegNomb.test(e.target.value)&& !expreRegNyA.test(e.target.value)){
                hayError(e);
            }else{
                datoValido(e);
                states.nombre=true;
            }
        break;
        case 'mail':
            if(!expreRegMail.test(e.target.value)&& !expreRegMail1.test(e.target.value)){
                hayError(e);
            }else{
                datoValido(e);
                states.mail=true;
            }
        break;
        case 'texto':
            if(e.target.value==''){
                hayError(e);
            }else{
                datoValido(e);
                states.texto=true;
            }
        break;    
    }}

function validarFormulario(e){
    if(states.nombre && states.mail && states.texto){
        e.preventDefault();
        console.log('El formulario se ha completado correctamente!')
        inputs.forEach(i=>{
            i.value='';
            i.classList.remove('dato-valido');
            i.classList.remove('dato-error');
            let enviado= document.querySelector('.form-enviado').classList.remove('hidden');
        })
    }else{
        e.preventDefault();
        let evento = new Event('focusout', {bubbles:true});
        inputs.forEach(i=>i.dispatchEvent(evento));
        console.log('El formulario no se ha completado correctamente')
        let enviado= document.querySelector('.form-enviado')
        enviado.classList.add('hidden');
       
    }
}

function hayError(e){
    const grupo = e.target.closest('.inp-grp');
    const input = grupo.querySelector('input, textarea');
    const error = grupo.querySelector('.input-error');
    error.classList.remove('hidden');
    input.classList.add('dato-error');
    input.classList.remove('dato-valido');
    console.log('campo invalido')

}

function datoValido(e){
    const grupo= e.target.closest('.inp-grp');
    const input = grupo.querySelector('input, textarea');
    const error= grupo.querySelector('.input-error');
    error.classList.add('hidden');
    input.classList.add('dato-valido');
    console.log('campo correcto!');
}
