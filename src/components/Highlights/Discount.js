import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }


    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>RABATT</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Wenn sie das Ticket vor dem 20. Mai 2021 kaufen</h3>
                            <p>Das Early-Bird-Ticket beinhaltet das gesamte Event und die Afterparty.
                            Pro Ticket ist nur eine Aktion gültig. Das Ticket ist nicht übertragbar.
                                Bitte lesen Sie unsere Event-Sicherheitsrichtlinien und unsere AGB.</p>

                            <MyButton
                                text="Tickets kaufen"
                                bck="#0084ac"
                                color="#ffffff"
                                link="http://google.com"
                            />

                        </div>
                    </Slide>



                </div>
            </div>
        );
    }
}

export default Discount;