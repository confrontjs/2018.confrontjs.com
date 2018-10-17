import React, { Component } from 'react';

import PartnerAvatar from '../components/partner-avatar';

const partners = require('../data/partners');

class PartnersComponent extends Component {
    render() {
        return (
            <section className="container jumbotron" id="partners">
                <h2 className="mb-5">Partners</h2>

                <div className="text-center">
                    { partners.map((partner, index) =>
                        <div
                            className="d-inline-block py-1 mx-3 partner-item"
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