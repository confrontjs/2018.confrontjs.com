import React, { Component } from 'react';

class CodeOfConductComponent extends Component {
    render() {
        return (
            <div className="container jumbotron" id="code-of-conduct">
                <h2>
                    Code of conduct
                </h2>

                <p>
                    We are aware of diversity issues in our industry and we tackle
                    them in a gentle way.<br/>We use Berlin Code of Conduct and we base
                    our cooperation on trust and mutual respect for everyone.
                </p>

                <p>
                    Please visit&nbsp;
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