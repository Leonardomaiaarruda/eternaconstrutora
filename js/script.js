document.getElementById('menu').addEventListener('click', ()=>{
    let menu = document.getElementById('menu-nav')
    
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
})




let a = document.querySelectorAll("li");

a.forEach( (e)=>{
    e.addEventListener('click', (select)=>{
        document.querySelector(".background").classList.remove('background');
        e.classList.add('background')
        console.log(e)
    });
});
