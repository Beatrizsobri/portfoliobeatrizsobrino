import React from 'react';
import '../stylesheets/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
    return (
        <header id="header" className="alt">
            <nav >
                <ul>
                    <li >
                        <a href="#menu" ><FontAwesomeIcon icon={faBars} /></a>
                        <div >
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Generic</a></li>
                                <li><a>Elements</a></li>
                                <li><a>Sign Up</a></li>
                                <li><a>Log In</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <h1><a href="index.html">Beatriz Sobrino Paredes</a></h1>
            <nav >
                <ul>
                    <li><a href="index.html"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href="generic.html"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="elements.html"><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
