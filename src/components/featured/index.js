import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Carrousel />

            <div className="artist_name">
                <div className="wrapper">
                    <img src="https://fontmeme.com/permalink/201230/d6d4db15dc8cfe7c1b2ecc3e91d46f85.png" alt='logo' />
                </div>
            </div>

            <TimeUntil />

        </div>
    );
};

export default Featured;