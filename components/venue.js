import React, { Component } from 'react';

import ReactSiema from '../components/siema-bridge';
const Slide = (props) => <img {...props} alt="Slide" />
const options = require('../configs/siema-settings');

class VenueComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: null
        }
    }

    render() {
        return (
            <div className="bg-warning text-white">
                <div className="container jumbotron text-center" id="venue">
                    <h2 className="mb-5">
                        Venue

                        <a
                                href="https://www.campus.co/warsaw/en/"
                                target="_blank"
                                rel="noopener"
                        >
                            <img
                                className="align-middle ml-5"
                                src="static/images/logo-campus-warsaw.png"
                                alt="Campus Warsaw"
                            />
                        </a>
                    </h2>

                    <div className="carousel">
                        <ReactSiema {...options}>
                            <Slide src="static/photos/campus-warsaw/IMG_9885.jpg" />
                            <Slide src="static/photos/campus-warsaw/IMG_9876.jpg" />
                            <Slide src="static/photos/campus-warsaw/IMG_0085.jpg" />
                            <Slide src="static/photos/campus-warsaw/IMG_0057.jpg" />
                            <Slide src="static/photos/campus-warsaw/IMG_0091.jpg" />
                        </ReactSiema>
                    </div>
                </div>
            </div>
        );
    }
}

export default VenueComponent;