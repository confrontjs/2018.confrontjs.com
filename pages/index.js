import '../styles/main.scss';

import React, { Component } from 'react';
import Head from 'next/head';

import MenuComponent from '../components/menu';
import IntroComponent from '../components/intro';
import VenueComponent from '../components/venue';
import AgendaComponent from '../components/agenda';
import DeadlineComponent from '../components/deadline';
import VenueMapComponent from '../components/venue-map';
import WhyComponent from '../components/why';
import SponsorsComponent from '../components/sponsors';
import PartnersComponent from '../components/partners';
import OrganizersComponent from '../components/organizers';
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
                <IntroComponent />
                <AgendaComponent />
                <DeadlineComponent />
                <WhyComponent />
                <SponsorsComponent />
                <PartnersComponent />
                <OrganizersComponent />
                <ContactComponent />
                <NewsletterComponent />
                <CodeOfConductComponent />
                <VenueComponent />
                <VenueMapComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default Homepage;
