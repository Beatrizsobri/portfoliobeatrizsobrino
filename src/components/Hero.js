import React from 'react';
import '../stylesheets/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Hero() {
    return (
        <section id="banner">
            <div className="inner">
                <h2>Spectral</h2>
                <p>Another fine responsive<br />
                    site template freebie<br />
                    crafted by <a href="http://html5up.net">HTML5 UP</a>.</p>
                <ul className="actions special">
                    <li><a className="button primary">Activate</a></li>
                </ul>
            </div>
            <a href="#one" className="more scrolly">Learn More</a>
        </section>
    );
}

export default Hero;


