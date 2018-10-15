import React, { Component } from 'react';

class IntroComponent extends Component {
    render() {
        return (
            <section className="intro container jumbotron text-center">
                <img
                    className="logo"
                    src="static/images/logo-confrontjs.svg"
                    alt="ConFrontJS logo"
                />

                <h2
                    className="headline"
                >
                    <span className="master-color">Front-end</span> conference&nbsp;
                    <span className="mix-color">2018</span> in&nbsp;
                    <span className="slave-color">Warsaw</span>
                </h2>

            </section>
        );
    }
}

export default IntroComponent;