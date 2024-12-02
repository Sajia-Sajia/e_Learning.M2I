import { faBell, faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Topbar() {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    // Toggle the profile dropdown visibility
    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <Link className="navbar-brand" to="/">MyApp</Link>
            
            {/* Navbar items */}
            <ul className="navbar-nav ml-auto">
                {/* Notifications */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        {/* Notifications list */}
                    </div>
                </li>

                {/* Messages */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">
                        {/* Messages list */}
                    </div>
                </li>

                {/* Profile */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button"
                        onClick={toggleProfileDropdown} aria-haspopup="true" aria-expanded={isProfileDropdownOpen ? 'true' : 'false'}>
                        <FontAwesomeIcon icon={faCircleUser} />
                    </a>
                    <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${isProfileDropdownOpen ? 'show' : ''}`}
                        aria-labelledby="profileDropdown">
                        <Link className="dropdown-item" to="/profile">Mon profil</Link>
                        
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/">Déconnexion</Link>
                    </div>
                </li>

                {/* Search */}
                
            </ul>
        </nav>
    );
}

export default Topbar;
