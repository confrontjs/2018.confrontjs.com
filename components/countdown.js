import React, { Component } from 'react';
const countdown = require('countdown');

const FORMAT = countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES;

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

const INTERVAL_TIME = 1000;
const START_DATE = require('../configs/base-settings').conferenceStartDate;

class CountdownComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countdown: ''
        };
    }

    componentDidMount() {
        this.interval = countdown(START_DATE, this.update.bind(this), FORMAT, NaN, 0);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    update(ts) {
        const countdown = ts.toHTML('span');
        this.setState({ countdown });
    }

    render() {
        const countdown = this.state.countdown;

        return (
            <div className="bg-dark text-white">
                <div className="container jumbotron text-center">
                    <div
                        className="countdown"
                        dangerouslySetInnerHTML={{ __html: countdown }}
                    ></div>
                </div>
            </div>
        );
    }
}

export default CountdownComponent;
