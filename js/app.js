console.log('hola');
const tarjetas= document.querySelectorAll('.tarjeta');

window.onhashchange=function(){
    let vista= location.hash;
    console.log(vista);
    let menu= document.querySelector(vista);
    tarjetas.forEach(t=>{
        t.classList.add('close');
        t.classList.remove('open');
      
      
    })
    menu.classList.remove('close');
    menu.classList.add('open');
  

}
