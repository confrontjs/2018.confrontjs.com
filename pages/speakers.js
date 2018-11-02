import '../styles/main.scss';

import React, { Component } from 'react';
import Head from 'next/head';

import MenuComponent from '../components/menu';
import SpeakersComponent from '../components/speakers';
import ContactComponent from '../components/contact';
import NewsletterComponent from '../components/newsletter';
import CodeOfConductComponent from '../components/code-of-conduct';
import FooterComponent from '../components/footer';

class Homepage extends Component {
    render() {
        return (
            <div id="page">
                <Head>
                    <title>ConFrontJS 2018 • Front-end Conference at 2018-10-29</title>
                </Head>
                <MenuComponent/>
                <SpeakersComponent />
                <ContactComponent />
                <NewsletterComponent />
                <CodeOfConductComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default Homepage;
