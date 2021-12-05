const preloader = document.querySelector('.preloader');

function fadeEffect() {
    setInterval(() => {
        // Set opacity to 1 explicitly to start animation
        if (!preloader.style || !preloader.style.opacity) {
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
const hasPreloaded = window.sessionStorage.getItem('shownPreload');
if (document.body.scrollWidth < 800 || hasPreloaded !== null) {
    if (preloader) {
        preloader.style.opacity = 0;
    }
} else {
    window.sessionStorage.setItem('shownPreload', true);
    window.addEventListener('load', fadeEffect);
}
