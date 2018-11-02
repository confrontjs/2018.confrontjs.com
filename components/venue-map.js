import React, { Component } from 'react';

class VenueMapComponent extends Component {
    render() {
        return (
            <div className="bg-primary text-white">
                <div className="py-5 text-center" id="venue-map">
                    <h2 className="h2 mb-4">
                        Pl. Konesera 10, 03-736 Warszawa
                    </h2>

                    <div className="map">
                        <img
                            className="img-fluid"
                            src="static/images/Mapa-Konesera-720.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default VenueMapComponent;
