import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughWink, faUsers } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon icon={faFaceLaughWink} size="2x" />
        </div>
        <div className="sidebar-brand-text mx-3">E-learning <sup>2</sup></div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - User Management */}
      <li className="nav-item">
        <Link className="nav-link" to="/portal/user-list">
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: '0.5rem' }} />
          <span>Gérer Annonces</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
