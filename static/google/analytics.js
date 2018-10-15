window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-124334065-1');

(function () {

    function hashchange() {
        const value = { value: location.hash };
        _event('hashchange', 'open', value);
    }

    function _event(category, action, value) {
        if (typeof gtag !== 'function') return;
        gtag('event', action, {
            event_category: category,
            value
        });
    }

    window.addEventListener('hashchange', hashchange, { passive: true });

})();
