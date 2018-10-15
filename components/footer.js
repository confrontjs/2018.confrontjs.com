import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div className="bg-light">
                <footer className="container jumbotron text-center">
                    <div className="text-center h1">
                        <a
                                href="http://facebook.com/confrontjs"
                                title="Facebook"
                                target="_blank"
                                rel="noopener"
                        >
                            <i className="icon-facebook-logo"></i>
                        </a>
                        <a
                                href="https://twitter.com/confrontjs"
                                title="Twitter"
                                target="_blank"
                                rel="noopener"
                        >
                            <i className="icon-twitter-logo"></i>
                        </a>
                        <a
                                href="https://www.instagram.com/confrontjs.photos/"
                                title="Instagram"
                                target="_blank"
                                rel="noopener"
                        >
                            <i className="icon-instagram-logo"></i>
                        </a>
                        <a
                                href="https://www.youtube.com/channel/UCmz8kA8ldl1QsH-m4WDVIGA"
                                title="YouTube"
                                target="_blank"
                                rel="noopener"
                        >
                            <i className="icon-youtube-logo"></i>
                        </a>
                    </div>

                    Copyright @ 2018 by <a href="https://warsawjs.com/">WarsawJS</a> ❤
                </footer>
            </div>
        );
    }
}

export default FooterComponent;