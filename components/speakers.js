import React, { Component } from 'react';

import PersonAvatar from './person-avatar';
import SocialIcons from './social-icons';

const speakers = require('../data/speakers');

class SpeakersComponent extends Component {
    render() {
        return (
            <div className="bg-warning">
                <section className="container jumbotron" id="speakers">
                    <h2 className="mb-5">Speakers</h2>

                    { speakers.map((speaker, index) =>
                        <div className="row" key={ index }>
                            <div className="col-lg-3 py-4 text-center">
                                <PersonAvatar person={ speaker }/>
                            </div>
                            <div className="col-lg-7 pt-4">
                                <h3>
                                    { speaker.name }
                                </h3>

                                <p className="bio">
                                    { speaker.bio.en }
                                </p>
                            </div>
                            <div className="col-lg-2 pb-4 text-center">
                                <ul className="list-unstyled display-3">
                                    <SocialIcons person={ speaker }/>
                                </ul>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        );
    }
}

export default SpeakersComponent;