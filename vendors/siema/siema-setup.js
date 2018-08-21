(function (root) {
    'use strict';

    const TIME_TO_CHANGE_SLIDE = 5000;

    root.addEventListener('load', () => {
        const Siema = root.Siema;

        const carousel = new Siema({
            selector: '.slideshow-section',
            duration: 500,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true
        });

        setInterval(() => {
            carousel.next();
        }, TIME_TO_CHANGE_SLIDE);
    });

})(window);
