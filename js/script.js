
class Eterna{
    go(){
      //this.redirecionamento();
      this.abertura();
      this.menu();
      this.arrow();
    };


    abertura(){
      setTimeout(()=>{
         document.getElementById('primeiraTela').style.display = 'none';
         document.getElementById('main').style.display = 'block';
         document.getElementById("wrapper-arrow").style.display = 'block';
         this.slide();
         this.scroll();
         this.abrirWhats();
       }, 3000);
    }
   


    slide(){
      setInterval(()=>{
      document.querySelector("#img-principal").style.backgroundImage = "url('./img/casa2.png')";
      },3000)


      setInterval(()=>{
        document.querySelector("#img-principal").style.backgroundImage = "url('./img/casa3.png')";
        
       },6000)

       setInterval(()=>{
        document.querySelector("#img-principal").style.backgroundImage = "url('./img/casa.png')";
        
       },9000)
    }

    menu(){
      let menuli = document.querySelectorAll("li");

      menuli.forEach((e)=>{
        e.addEventListener('click', ()=>{
          document.querySelector(".background").classList.remove('background');
          e.classList.add('background')            
        });
      });


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
              document.querySelector("header nav").style.display = 'block'
          };
      });
    };

 


  abrirWhats(){
    document.querySelector("#fc-img img").addEventListener('click', ()=>{
      let whatsappUrl;
      let init = 'Olá, quero falar com um representante!';

      whatsappUrl = `https://api.whatsapp.com/send?phone=554499832155&text=${init}%0A`;
      setTimeout(()=>window.open(whatsappUrl, "_blank"), 200);
    })

      document.querySelector("#whats-plantao").addEventListener('click', ()=>{
        let whatsappUrl;
        let init = 'Olá, quero falar com um representante!';
    
        whatsappUrl = `https://api.whatsapp.com/send?phone=554499832155&text=${init}%0A`;
        setTimeout(()=>window.open(whatsappUrl, "_blank"), 200);
      })

      document.querySelector("#whats-plantao h2").addEventListener('click', ()=>{
        let whatsappUrl;
        let init = 'Olá, quero falar com um representante!';
    
        whatsappUrl = `https://api.whatsapp.com/send?phone=554499832155&text=${init}%0A`;
        setTimeout(()=>window.open(whatsappUrl, "_blank"), 200);
      })
  };


scroll(){
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

      duration = typeof duration !== 'undefined' ? duration : 500;

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
}

    arrow(){
      const menuItems = document.querySelectorAll('#arrow a[href^="#"]');

      function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
      }
  
      function scrollToPosition(to) {
        // Caso queira o nativo apenas
         window.scroll({
         top: to,
         behavior: "smooth",
        })
      }
  
      function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.currentTarget)- 80;
        scrollToPosition(to);
      }
  
      menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
      });
    }  

    /*
      redirecionamento(){
        let httpLocal = 'http://127.0.0.1:5500/';
        let http = 'http://eternaconstrutora.epizy.com';  
        let https = 'https://eternaconstrutora.epizy.com';
        let git = 'https://leonardomaiaarruda.github.io/eternaconstrutora/';
      
      
        if(window.location == httpLocal){
          window.location = git;
        }
      }
     */
    
};




let eterna = new Eterna()
eterna.go()





