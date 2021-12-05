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

function fadeEffect() {
    setInterval(() => {
        // Set opacity to 1 explicitly to start animation
        if (!preloader.style.opacity) {
            preloader.style.opacity = 1;
            return;
        }

        // Decrease opacity if not yet zero
        if (preloader.style.opacity > 0) {
            preloader.style.opacity = Math.max(0, preloader.style.opacity - 0.07);
            return;
        }

        // Stop animation
        clearInterval(fadeEffect);
    }, 100);
}

// Immediatly hide preloader for mobile browsers
console.log();
if (document.body.scrollWidth < 800) {
    preloader.style.opacity = 0;
} else {
    window.addEventListener('load', fadeEffect);
}



