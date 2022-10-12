document.getElementById('menu').addEventListener('click', ()=>{
    let menu = document.getElementById('menu-nav')
    
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
})