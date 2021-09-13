var typed = new Typed(".typing", {
    strings: ["Software Engineer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const themechange = document.getElementById("theme-button");

themechange.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themechange.classList.toggle('uil-sun')
});

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


function eduVisible() {
    document.getElementById('title1').className ='bar-title bar-title-active'
    document.getElementById('title2').className ='bar-title'
    document.querySelector('.qualification__container') .style.display='block';
    document.querySelector('.hobbie__container').style.display = 'none';
}

function hobbieVisible() {
  document.getElementById('title2').className ='bar-title bar-title-active'
  document.getElementById('title1').className ='bar-title'
  document.querySelector('.qualification__container') .style.display='none';
  document.querySelector('.hobbie__container').style.display='grid';
}


const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400});  

sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 
sr.reveal('.about__icons a',{ interval: 200});
sr.reveal('.about__button',{delay:500});

sr.reveal('.bars',{delay:200})
sr.reveal('.qualification__list',{interval:100})

sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

sr.reveal('.project__div',{delay:100})

sr.reveal('.contact__input',{interval: 200}); 
