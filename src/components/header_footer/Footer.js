import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    Arena One
                    </div>

                <div className="footer_copyright">
                    Arena One Electronic Music Event 2021. All rights reserved.
                    </div>
            </Fade>
        </footer>
    );
};

export default Footer;