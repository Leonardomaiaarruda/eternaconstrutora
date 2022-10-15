
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

        })


        let a = document.querySelectorAll("li");

        a.forEach( (e)=>{
                e.addEventListener('click', (select)=>{
                    document.querySelector(".background").classList.remove('background');
                    e.classList.add('background')
                    console.log(e)
                });
        });
    };
};

let eterna = new Eterna()
eterna.iniciar()



const menuItems = document.querySelectorAll('#menu-nav a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

