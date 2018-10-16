import React, { Component } from 'react';

class CodeOfConductComponent extends Component {
    render() {
        return (
            <div className="container jumbotron" id="code-of-conduct">
                <h2>
                    Code of conduct
                </h2>

                <p>
                    If you are subject to or witness unacceptable behavior,
                    or have any other concerns, please notify a conference
                    organizer as soon as possible. The conference organizers
                    are: Katarzyna Grabowska, Piotr Kowalski and Piotr Zientara.
                    You can contact them directly or via warsawjs.slack.com
                    Additionally, community organizers are available to help
                    community members engage with local law enforcement or to
                    otherwise help those experiencing unacceptable behavior feel
                    safe. In the context of in-person events, organizers will
                    also provide escorts as desired by the person experiencing
                    distress.
                </p>

                <p>
                    Please read the full Code of Conduct:&nbsp;
                    <a
                            href="http://berlincodeofconduct.org"
                            target="_blank"
                            rel="noopener"
                    >
                        http://berlincodeofconduct.org
                    </a>
                </p>
            </div>
        );
    }
}

export default CodeOfConductComponent;