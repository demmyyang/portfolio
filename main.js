const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-container li');

    burger.addEventListener('click',() => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();


const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
    if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
    } else {
        clearInterval(fadeEffect);
    }
}, 100);

window.addEventListener('load', fadeEffect);