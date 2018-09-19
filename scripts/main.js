(function () {

    const $navbar = document.querySelector('.navbar');
    const $navbarToggler = document.querySelector('.navbar-toggler');
    const $navbarMenu = document.querySelector('.navbar-nav').parentElement;

    function updateCompactClass() {
        const isScrolled = (window.scrollY > 0);
        const isMobile = $navbarMenu.classList.contains('show');

        if (isMobile) {
            return;
        }

        if (isScrolled) {
            $navbar.classList.add('navbar-compact');
        } else {
            $navbar.classList.remove('navbar-compact');
        }
    }

    updateCompactClass();
    window.addEventListener('scroll', updateCompactClass);

    $navbarToggler.addEventListener('click', () => {
        $navbarMenu.classList.toggle('show');
    });

})();
