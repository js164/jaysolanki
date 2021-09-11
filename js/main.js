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

function sendEmail(){
  // Email.send({
  //   Host : "smtp.yourisp.com",
  //   Username : "username",
  //   Password : "password",
  //   To : 'them@website.com',
  //   From : "you@isp.com",
  //   Subject : "This is the subject",
  //   Body : "And this is the body"
  // }).then(
  // message => alert(message)
  // );
}