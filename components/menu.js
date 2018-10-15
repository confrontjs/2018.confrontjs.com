import React, { Component } from 'react';
import cx from 'classnames';

class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    onClickToggler() {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    getMenuClassList() {
        return cx(
            "navbar navbar-expand-lg navbar-dark bg-dark sticky-top",
            !this.state.isActive && 'navbar-compact'
        )
    }

    getClassList() {
        return cx(
            'collapse',
            'navbar-collapse',
            'pl-5',
            this.state.isActive && 'show'
        );
    }
    render() {
        return (
            <nav className={this.getMenuClassList()}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img
                            src="/static/images/icons/app/144x144.png"
                            width="70"
                            height="70"
                            className="d-inline-block bg-white mr-3"
                            alt=""
                        />
                        ConFrontJS
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => this.onClickToggler()}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={this.getClassList()}>
                        <ul className="navbar-nav h5">
                            <li className="nav-item text-sm-right">
                                <a className="nav-link" href="#agenda">
                                    <span className="badge badge-warning">
                                        Agenda
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item text-sm-right">
                                <a
                                    className="nav-link"
                                    href="https://eventil.com/events/confrontjs-2018"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <span className="badge badge-success">
                                        Buy a ticket
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item text-sm-right">
                                <a className="nav-link" href="#venue">
                                    <span className="badge badge-info">
                                        Venue
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item text-sm-right">
                                <a className="nav-link" href="#speakers">
                                    Speakers
                                </a>
                            </li>
                            <li className="nav-item text-sm-right">
                                <a className="nav-link" href="#sponsors">
                                    Sponsors
                                </a>
                            </li>
                            <li className="nav-item text-sm-right">
                                <a className="nav-link" href="#why">
                                    Why?
                                </a>
                            </li>
                            <li className="nav-item text-sm-right">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                            {/* <li className="nav-item text-sm-right">
                                <a
                                        className="nav-link"
                                        href="https://eventil.com/events/confrontjs-2018/cfp"
                                        target="_blank"
                                        rel="noopener"
                                >
                                    Call for Papers
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuComponent;