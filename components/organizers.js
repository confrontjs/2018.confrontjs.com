import React, { Component } from 'react';

import ReactSiema from '../components/siema-bridge';
const Slide = (props) => <img {...props} alt="Slide" />
const options = require('../configs/siema-settings');

class OrganizersComponent extends Component {
    render() {
        return (
            <div className="bg-light">
                <section className="container jumbotron text-center" id="organizers">
                    <h2 className="h2 mb-5">
                        Organizers:
                        <a href="https://warsawjs.com/">
                            WarsawJS
                        </a>
                    </h2>

                    <div className="carousel">
                        <ReactSiema {...options}>
                            <Slide src="static/photos/community/IMG_0213.jpg"/>
                            <Slide src="static/photos/community/4lata_WarsawJS-53.jpg"/>
                            <Slide src="static/photos/community/4lata_WarsawJS-94.jpg"/>
                            <Slide src="static/photos/community/IMG_1375.jpg"/>
                            <Slide src="static/photos/community/4lata_WarsawJS-115.jpg"/>
                            <Slide src="static/photos/community/4lata_WarsawJS-161.jpg"/>
                        </ReactSiema>
                    </div>
                </section>
            </div>
        );
    }
}

export default OrganizersComponent;