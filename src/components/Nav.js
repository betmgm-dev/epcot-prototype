import React from 'react'
import '../styles/Nav.css'


const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo-wrapper">
        <div className="logos">
          <img src="https://scmedia.itsfogo.com/$-$/dd8a7cb174554d9a9c4fe62d70ca1c85.svg" className="brand-logo" alt="BetMGM" />
          <img src="https://scmedia.tn.betmgm.com/$-$/e55d80afc28c4e6db0ac856bbff694a4.png" className="rg-logo" alt="RG" />
        </div>
        <span>STATE NAME</span>
      </div>
      <div className="navbar-wrapper-right">
        <div className="bonus-info">
          <span className="bonus">Bonus</span>
          <span className="bonus-amt">$1,000</span>
        </div>
        <div className="offers-info">
          <span>Offers</span>
        </div>
      </div>
    </div>
  )
}

export default Nav