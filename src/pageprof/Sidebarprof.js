import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughWink } from '@fortawesome/free-solid-svg-icons';
import { FaBook, FaChalkboard, FaBullhorn, FaRegFileAlt } from 'react-icons/fa';


const Sidebarprof = () => {
 return (
   <div id="wrapper">
     <ul className="navbar-nav sidebar sidebar-dark accordion" style={{ backgroundColor: 'rgba(97, 165, 194, 0.6)' }} id="accordionSidebar">
     <Link 
  to="/HomeProf" 
  className="sidebar-brand d-flex align-items-center justify-content-center"
>
  <div>
    <img src="/images/newlogo.png" alt="Logo" style={{ height: '160px' }} />
  </div>
</Link>

       <hr className="sidebar-divider my-0" />
       <hr className="sidebar-divider my-0" />

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

    

     
   </div>
 );
};

export default Sidebarprof;