import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {


    state = {
        prices: [25, 60, 100],
        positions: ['Warm-Up Party', 'Standard-Ticket', 'VIP-Ticket'],
        desc: [
            'Beinhaltet nur die Warm-Up Party von 18:00 - 21:30',
            'Beinhaltet das komplette Event inklusive Warm-Up Party',
            'Beinhaltet das komplette Event inklusive Zugang zur VIP-Tribüne'
        ],
        linkto: ['http//sales/a', 'http//sales/b', 'http//sales/c'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span><small>€ </small>{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Jetzt kaufen"
                                bck="#0084ac"
                                color="#fff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Preise</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;