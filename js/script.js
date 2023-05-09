const spin = document.querySelector('#spin');

function rotateOnScroll() {
  const rotation = window.scrollY / 8; // nilai rotasi dibagi dengan 2
  spin.style.transform = `rotate(${rotation}deg)`;
}

window.addEventListener('scroll', rotateOnScroll);


const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-nemu');

hamberger.addEventListener('click', function () {
  hamberger.classList.toggle('hamberger-aktive');
  navMenu.classList.toggle('hidden');
});


const section5 = document.querySelector('#roadmap');
const mapItems = document.querySelectorAll('.map-item');

function handleScroll() {
  const mapItemsSatu = document.querySelectorAll('.map-item-satu');
  const screenWidth = window.innerWidth;
  let translateX = -0;

  if (screenWidth >= 1024) {
    translateX = (window.scrollY - section5.getBoundingClientRect().top) / 100;
    mapItems.forEach((mapItem) => {
      mapItem.classList.remove('translate-left');
      mapItem.classList.add('translate-right');
    });
    mapItemsSatu.forEach((mapItem) => {
      mapItem.classList.remove('translate-right');
      mapItem.classList.add('translate-left');
    });
  } else if (screenWidth >= 768) {
    translateX = (window.scrollY - section5.getBoundingClientRect().top) / 50;
    mapItems.forEach((mapItem) => {
      mapItem.classList.remove('translate-right');
      mapItem.classList.remove('translate-left');
    });
    mapItemsSatu.forEach((mapItem) => {
      mapItem.classList.remove('translate-left');
      mapItem.classList.remove('translate-right');
    });
  } else {
    translateX = (window.scrollY - section5.getBoundingClientRect().top) / 35;
    mapItems.forEach((mapItem) => {
      mapItem.classList.remove('translate-right');
      mapItem.classList.add('translate-left');
    });
    mapItemsSatu.forEach((mapItem) => {
      mapItem.classList.remove('translate-left');
      mapItem.classList.add('translate-right');
    });
  }

  if (translateX > 0) {
    if (screenWidth < 768) {
      mapItems.forEach((mapItem) => {
        mapItem.style.transform = `translateX(${translateX}px)`;
      });
      mapItemsSatu.forEach((mapItem) => {
        mapItem.style.transform = `translateX(-${translateX}px)`;
      });
    } else {
      mapItems.forEach((mapItem) => {
        mapItem.style.transform = `translateX(-${translateX}px)`;
      });
      mapItemsSatu.forEach((mapItem) => {
        mapItem.style.transform = `translateX(${translateX}px)`;
      });
    }
  }
}

function animateMapItems() {
  handleScroll();
}

window.addEventListener('scroll', animateMapItems);

// Definisikan fungsi untuk menambahkan event listener pada elemen clipboard
function addClipboardListener(clipboard) {
  clipboard.addEventListener("click", function () {
    // Buat elemen input yang tidak terlihat pada halaman web
    var input = document.createElement("input");
    input.style.position = "fixed";
    input.style.left = "-9999px";
    input.value = "0x00000000000000000000000Dead";
    document.body.appendChild(input);

    // Pilih dan salin teks pada elemen input
    input.select();
    document.execCommand("copy");

    // Hapus elemen input dari halaman web
    document.body.removeChild(input);

    // Tampilkan pesan berhasil menyalin teks ke clipboard
    var popup = document.createElement("h4");
    popup.textContent = "Copied";
    popup.classList.add("w-20", "h-10", "text-center", "flex", "items-center", "justify-center", "bg-green-500", "rounded-24", "absolute", "-top-10", "text-xs");
    clipboard.appendChild(popup);

    // Hilangkan popup setelah 2 detik
    setTimeout(function () {
      clipboard.removeChild(popup);
    }, 800);
  });
}

// Cari elemen-elemen "p" dengan id "clipboard"
var clipboard1 = document.getElementById("clipboard1");
var clipboard2 = document.getElementById("clipboard2");

// Tambahkan event listener "click" pada masing-masing elemen clipboard
addClipboardListener(clipboard1);
addClipboardListener(clipboard2);

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

document.querySelector("#prev").addEventListener("click", function () {
  showSlide(currentSlide - 1);
});

document.querySelector("#next").addEventListener("click", function () {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);


const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.image');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', () => {
    images[i].classList.add('translate-x-8');
    buttons[i].style.cursor = 'pointer';
  });

  buttons[i].addEventListener('mouseout', () => {
    images[i].classList.remove('translate-x-8');
    buttons[i].style.cursor = 'default';
  });

  buttons[i].addEventListener('touchstart', () => {
    images[i].classList.add('translate-x-8');
    buttons[i].style.cursor = 'pointer';
  });

  buttons[i].addEventListener('touchend', () => {
    images[i].classList.remove('translate-x-8');
    buttons[i].style.cursor = 'default';
  });
}

const scrollTopBtn = document.querySelector('#scroll-top-btn');

// Menampilkan tombol scroll to top ketika user telah scroll sejauh 20% dari halaman
window.addEventListener('scroll', () => {
  if (window.pageYOffset > (window.innerHeight * 0.2)) {
    scrollTopBtn.classList.remove('hidden');
  } else {
    scrollTopBtn.classList.add('hidden');
  }
});

// Mengatur posisi scroll ke paling atas ketika tombol scroll to top diklik
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});