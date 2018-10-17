import React, { Component } from 'react';

import PartnerAvatar from '../components/partner-avatar';

const partners = require('../data/partners');

class PartnersComponent extends Component {
    render() {
        return (
            <section className="container jumbotron" id="partners">
                <h2 className="mb-5">Partners</h2>

                <div className="row justify-content-around text-center">
                    { partners.map((partner, index) =>
                        <div
                            className="d-inline py-1 partner-item"
                            key={ index }
                        >
                            <a
                                    href={ partner.url }
                                    target="_blank"
                                    rel="noopener"
                            >
                                <PartnerAvatar partner={ partner }/>
                            </a>
                        </div>
                    )}
                </div>
            </section>

        );
    }
}

export default PartnersComponent;