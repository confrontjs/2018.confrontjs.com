(function (root) {
    'use strict';

    const START_DATE = new Date('2018/10/29 08:00:00');

    function render(ts) {
        document.querySelector('.countdown').innerHTML = ts.toHTML('span');
    }

    // Go go go!!1
    root.addEventListener('load', () => {
        const countdown = root.countdown;
        const FORMAT = countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;

        countdown.setLabels(
            ' millisecond| second| minute| hour| day| week| month| year| decade| century| millennium',
            ' milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia',
            ' ',
            ' ',
            '',
            (n) => {
                return `<strong class="countdown-number">${n}</strong>`;
            }
        );
        countdown(START_DATE, render, FORMAT, NaN, 0);
    });

})(window);
