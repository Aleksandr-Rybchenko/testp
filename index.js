import { Header } from './components/Header/Header.js';
import { Popup } from './components/Popup/Popup.js';
import { AuditSection } from './components/AuditSection/AuditSection.js';
import { Reasons } from './components/Reasons/Reasons.js';
import { Footer } from './components/Footer/Footer.js';

document.body.prepend(Header());
document.body.append(Popup());

const content = document.getElementById('content');
content.append(AuditSection());
content.append(Reasons());
document.body.append(Footer());

document.querySelector(".btn-blu").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});
document.querySelector(".btn-footer").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});


document.querySelector(".pop").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
});

document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("show");
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        // Порог скролла (50px)
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4, //
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
