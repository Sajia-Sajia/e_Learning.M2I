import { faFaceLaughWink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaBook, FaChalkboard, FaBullhorn, FaRegFileAlt } from 'react-icons/fa';

function Sidebarprof() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faFaceLaughWink} size={"2x"} />
                </div>
                <div className="sidebar-brand-text mx-3">eLearning.M2I</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portalprof/annonces-list">
                    <FaBullhorn style={{ marginRight: "0.5rem" }} />
                    <span>Gérer Annonces</span>
                </Link>
                <Link className="nav-link" to="/portalprof/cours-list">
                    <FaBook style={{ marginRight: "0.5rem" }} />
                    <span>Gérer Cours</span>
                </Link>
                <Link className="nav-link" to="/portalprof/td-list">
                    <FaRegFileAlt style={{ marginRight: "0.5rem" }} />
                    <span>Gérer TDs</span>
                </Link>
                <Link className="nav-link" to="/portalprof/tp-list">
                    <FaChalkboard style={{ marginRight: "0.5rem" }} />
                    <span>Gérer TPs</span>
                </Link>
            </li>
        </ul>

    )

}

export default Sidebarprof;