(function () {

    const $navbar = document.querySelector('.navbar');

    function updateCompactClass() {
        const isScrolled = (window.scrollY > 0);

        if (isScrolled) {
            $navbar.classList.add('navbar-compact');
        } else {
            $navbar.classList.remove('navbar-compact');
        }
    }

    updateCompactClass();
    window.addEventListener('scroll', updateCompactClass);

})();
