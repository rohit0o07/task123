import React from 'react'
import img1 from "../assets/logo.png"

function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src={img1} alt=""  style={{height:'8rem',width:'8rem'}}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active .text-secondary-emphasis text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Contact Us</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search for garden tool" aria-label="Search"/>
          <i class="fa badge fa-lg" value='5'>&#xf290;</i>
          <i class="fa badge fa-lg" value='8'>&#xf07a;</i>
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header
