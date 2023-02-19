import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFillBookmarkFill } from "react-icons/bs";

function NavBar({ page }) {

  return (
    <nav className='my-4 px-5'>
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">{page}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">Todas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/veganas" className="nav-link" aria-current="page">Veganas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cremosas" className="nav-link">Cremosas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/marineras" className="nav-link">Marineras</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/huevo-carne" className="nav-link">Huevo/Carne</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/salsas" className="nav-link">Salsas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bookmarks" className="nav-link"><BsFillBookmarkFill /></NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search by ingredient" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar