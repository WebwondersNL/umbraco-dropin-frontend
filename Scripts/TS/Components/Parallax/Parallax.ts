const simpleParallax = require('simple-parallax-js');

export const createParallax = () => {
    document.querySelectorAll(".parallaxBanner").forEach((element) => {
        new simpleParallax(element, {
            orientation: 'up',
            overflow: false,
            scale: 1.25,
        });
    });
}