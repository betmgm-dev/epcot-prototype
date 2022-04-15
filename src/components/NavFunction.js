import React from 'react'
import '../styles/NavFunction.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';


const NavFunction = () => {
  return (
    <div className="navbar-function">
      <div className="product-menu">
        <GiHamburgerMenu /><span>Sports</span>
      </div>
      <div className="search-bar">
        <BiSearchAlt /><span>Search</span>
      </div>
    </div>
  )
}

export default NavFunction