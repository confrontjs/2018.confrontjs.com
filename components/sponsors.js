import React, { Component } from 'react';
import cx from 'classnames';

const capitalize = require('capitalize');
import SponsorAvatar from './sponsor-avatar';

const sponsors = require('../data/sponsors');
const sponsorPerLevel = sponsors.reduce((mem, sponsor) => {
    if (!mem[sponsor.level]) {
        mem[sponsor.level] = [];
    }
    mem[sponsor.level].push(sponsor);
    return mem;
}, {});

class SponsorsComponent extends Component {
    render() {
        return (
            <div className="bg-light">
                <section className="container jumbotron" id="sponsors">
                    <h2 className="mb-5">Sponsors</h2>

                    { Object.keys(sponsorPerLevel).reverse().map((level, index) =>
                        <div className="mt-5" key={ index }>
                            <h3 className="mb-5">
                                { capitalize(level) }
                            </h3>

                            <div className="row justify-content-around text-center">
                                { sponsorPerLevel[level].map((sponsor, index) =>
                                    <div
                                        className={ cx(`col-lg-4 col-sm-6 my-2 sponsor-${level}-item`) }
                                        key={ index }
                                    >
                                        <a
                                                href={ sponsor.url }
                                                target="_blank"
                                                rel="noopener"
                                        >
                                            <SponsorAvatar sponsor={ sponsor } />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </section>
            </div>

        );
    }
}

export default SponsorsComponent;