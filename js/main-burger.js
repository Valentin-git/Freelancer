// const menuNav = document.querySelector('.menu-nav');
const menu = document.querySelector('.menu-nav');
const menuHamb = document.querySelector('.icon-menu');
// const burgerMenu = document.querySelector('.burger-menu');
console.log('menu');



menuHamb.onclick = function() {
  // mobilMenu.classList.toggle('open');
  menu.classList.toggle('open');
  menuHamb.classList.toggle('menu-open');
};

// dococument.addEventListener('click', function(e) {
//     if (!e.target.closest('.mobil-menu')) {
//         mobilMenu.classList.remove('open');
//         menu.classList.remove('open');
//     }
// });