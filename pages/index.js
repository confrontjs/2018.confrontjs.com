import '../styles/main.scss';

import React, { Component } from 'react';

import MenuComponent from '../components/menu';
import IntroComponent from '../components/intro';
import CountdownComponent from '../components/countdown';
import VenueComponent from '../components/venue';
import AgendaComponent from '../components/agenda';
import DeadlineComponent from '../components/deadline';
import SpeakersComponent from '../components/speakers';
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
                <MenuComponent/>
                <IntroComponent />
                <CountdownComponent />
                <VenueComponent />
                <AgendaComponent />
                <DeadlineComponent />
                <SpeakersComponent />
                <WhyComponent />
                <SponsorsComponent />
                <PartnersComponent />
                <OrganizersComponent />
                <ContactComponent />
                <NewsletterComponent />
                <CodeOfConductComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default Homepage;
