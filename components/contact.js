import React, { Component } from 'react';

class ContactComponent extends Component {
    render() {
        return (
            <div className="container jumbotron text-center" id="contact">
                <h2>
                    Contact
                </h2>

                <div>
                    <p className="lead">
                        If you have any questions, write email to us:&nbsp;
                        <a href="mailto:confrontjs@warsawjs.com">
                            confrontjs@warsawjs.com
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default ContactComponent;