import React, { Component } from 'react';

class DeadlineComponent extends Component {
    render() {
        return (
            <main className="container jumbotron text-center">
                <p className="display-3">
                    <time dateTime="2018-10-29">
                        <span>29</span> October 2018
                    </time>
                </p>

                <p className="h1">
                    <span className="badge badge-pill badge-danger align-middle">1</span> day =
                    <span className="badge badge-pill badge-warning align-middle">1</span> track =
                    <span className="badge badge-pill badge-success align-middle">11</span> talks
                </p>
            </main>
        );
    }
}

export default DeadlineComponent;
