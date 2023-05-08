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


// Cari elemen "p" dengan id "clipboard"
var clipboard = document.getElementById("clipboard");

// Tambahkan event listener "click" ke elemen "p"
clipboard.addEventListener("click", function() {
  // Buat elemen input yang tidak terlihat pada halaman web
  var input = document.createElement("input");
  input.style.position = "fixed";
  input.style.left = "-9999px";
  input.value = "0x00....Dead";
  document.body.appendChild(input);

  // Pilih dan salin teks pada elemen input
  input.select();
  document.execCommand("copy");

  // Hapus elemen input dari halaman web
  document.body.removeChild(input);

  // Tampilkan pesan berhasil menyalin teks ke clipboard
  alert("Teks berhasil disalin ke clipboard!");
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

document.querySelector("#prev").addEventListener("click", function() {
  showSlide(currentSlide - 1);
});

document.querySelector("#next").addEventListener("click", function() {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);

