
class Eterna{
    constructor(){

    }

    iniciar(){
        
var menuImg = document.querySelector("#menu img").src = './img/menu-aberto.png' ;

document.getElementById('menu').addEventListener('click', ()=>{
    let menu = document.getElementById('menu-nav')

    if(menu.style.marginLeft == '0%'){
        menuImg = document.querySelector("#menu img").src = './img/menu-aberto.png';
        menuImg =  document.querySelector("#menu img").style.marginLeft = '5px';
        document.querySelector("header nav").style.marginLeft= '-100%';

    }else{
        menuImg =  document.querySelector("#menu img").src = './img/menu-fechado.png';
        menuImg =  document.querySelector("#menu img").style.marginLeft = '20px';
        document.querySelector("header nav").style.marginLeft= '0%';
    }
    console.log(menu)

})



let a = document.querySelectorAll("li");

a.forEach( (e)=>{
    e.addEventListener('click', (select)=>{
        document.querySelector(".background").classList.remove('background');
        e.classList.add('background')
    });
});

    }
}

let eterna = new Eterna()
eterna.iniciar()