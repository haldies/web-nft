window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-nemu');

hamberger.addEventListener('click', function(){
    hamberger.classList.toggle('hamberger-aktive');
    navMenu.classList.toggle('hidden');
});


window.addEventListener('scroll', (e) => {
  console.log(window.scrollY);
  document.querySelector('#spin').style.transform = `rotate(${window.scrollY}deg)`;
});

window.addEventListener('scroll', () => {
  const section5 = document.querySelector('#roadmap');
  const mapItems = document.querySelectorAll('.map-item');

  if (section5.getBoundingClientRect().top <= window.innerHeight && section5.getBoundingClientRect().bottom >= window.innerHeight) {
    mapItems.forEach((mapItem) => {
      let translateX = 0;
      if (window.innerWidth > 1024) {
        translateX = (window.scrollY - section5.getBoundingClientRect().top) / 20;
      } else if (window.innerWidth > 768) {
        translateX = (window.scrollY - section5.getBoundingClientRect().top) / 30;
      } else if (window.innerWidth > 576) {
        translateX = (window.scrollY - section5.getBoundingClientRect().top) / 40;
      } else {
        translateX = (window.scrollY - section5.getBoundingClientRect().top) / 50;
      }
      console.log(translateX);
      if (translateX > 0) {
        mapItem.style.transform = `translateX(-${translateX}px)`;
      }
    });
  }
});

window.addEventListener('scroll', () => {
  const section5 = document.querySelector('#roadmap');
  const mapItems = document.querySelectorAll('.map-item-satu');

  mapItems.forEach((mapItem) => {
    if (section5.getBoundingClientRect().top <= window.innerHeight && section5.getBoundingClientRect().bottom >= window.innerHeight) {
      let translateX = 0;
      if (window.innerWidth > 1024) {
        translateX = (window.scrollY - section5.getBoundingClientRect().top) / 20;
      } else if (window.innerWidth > 768) {
        translateX = (window.scrollY - section5.getBoundingClientRect().top) / 30;
      } else if (window.innerWidth > 576) {
        translateX = (window.scrollY - section5.getBoundingClientRect().top) / 40;
      } else {
        translateX = (window.scrollY - section5.getBoundingClientRect().top) / 50;
      }
      if (translateX > 0) {
        mapItem.style.transform = `translateX(${translateX}px)`;
      }
    }
  });
});


