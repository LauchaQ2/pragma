
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menuBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


// EMAILJS

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'ENVIANDO';

   const serviceID = 'default_service';
   const templateID = 'template_33wkwsd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'PEDIR PRESUPUESTO';
      alert('ENVIADO!');
    }, (err) => {
      btn.value = 'PEDIR PRESUPUESTO';
      alert(JSON.stringify(err));
    });
});
