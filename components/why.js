import React, { Component } from 'react';

class WhyComponent extends Component {
    render() {
        return (
            <div className="container jumbotron" id="why">
                <h2 className="mb-5">
                    Why ConFrontJS?
                </h2>

                <div className="row text-center">
                    <div className="col-lg-3">
                        <img src="static/images/icons/why/a.png" alt=""/>
                        <p className="lead mt-3">
                            Have great networking
                            time in community
                            built on trust and
                            mutual respect
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <img src="static/images/icons/why/b.png" alt=""/>
                        <p className="lead mt-3">
                            Share experience
                            with experts you
                            haven't met before
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <img src="static/images/icons/why/c.png" alt=""/>
                        <p className="lead mt-3">
                            Get engaged and
                            meet professionals
                            who love what they do
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <img src="static/images/icons/why/d.png" alt=""/>
                        <p className="lead mt-3">
                            Find support
                            in community that
                            shares knowledge
                            everyday
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default WhyComponent;