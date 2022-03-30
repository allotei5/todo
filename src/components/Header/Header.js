import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid container">
        <Link to="/" className="navbar-brand" >TODO List</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link" aria-current="page" href="#">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
