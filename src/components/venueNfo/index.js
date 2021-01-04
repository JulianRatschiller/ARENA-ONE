import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VunueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Datum & Uhrzeit
                                    </div>
                                    <div className="vn_desc">
                                        10. August 2021  <p>22:00 Uhr - 06:00 Uhr</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>

                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Ort des Events
                                    </div>
                                    <div className="vn_desc">
                                        Ziggo Dome DePassage 100<p>Amsterdam, Niederlande</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default VunueNfo;