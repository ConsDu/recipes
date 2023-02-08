import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFillBookmarkFill } from "react-icons/bs";

function NavBar() {

  return (
    <nav className='my-4 mx-auto d-flex justify-content-center'>
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3 nav-pills">
              <li className="nav-item">
                <NavLink to="/" id="all" data-id="all" className={`pointer nav-link text-center`}>Todas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cremosas" data-id="cremosas" className={`pointer nav-link text-center`} >Cremosas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/veganas" data-id="veganas" className={`pointer nav-link text-center`} >Veganas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/marineras" data-id="marineras" className={`pointer nav-link text-center`} >Marineras</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/huevo-carne" data-id="huevo" className={`pointer nav-link text-center`} >Huevo/Carne</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/salsas" data-id="salsas" className={`pointer nav-link text-center`} >Salsas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bookmarks" data-id="bookmarks" className={`pointer nav-link text-center`} >< BsFillBookmarkFill /></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default NavBar