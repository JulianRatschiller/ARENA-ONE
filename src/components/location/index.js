import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.1420698436355!2d4.934984515799772!3d52.31342447977561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60b97495b5325%3A0x1164e389643519a!2sZiggo%20Dome!5e0!3m2!1sde!2sit!4v1609361158673!5m2!1sde!2sit"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            >
            </iframe>

            <div className="location_tag">
                <div>Standort</div>


            </div>



        </div >
    );
};

export default Location;