import React from 'react'
import '../styles/Footer.css'


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p className="footer-license">We are licensed and regulated by the New Jersey Division of Gaming Enforcement as an Internet gaming operator in accordance with the Casino Control Act N.J.S.A. 5:12-1 and its implementing regulations. Our games are tested by the New Jersey Division of Gaming Enforcement to provide games that are fair and operate correctly. Only customers 21 and over are permitted to play our games. If you or someone you know has a gambling problem, call 1.800-GAMBLER.</p>
      <div className="footer-logos-container">
        <img src="https://scmedia.itsfogo.com/$-$/360df9de72d64ac98ca8af966e15eecb.svg" alt="21+" />  
        <img src="https://scmedia.tn.betmgm.com/$-$/e55d80afc28c4e6db0ac856bbff694a4.png" alt="RG" />  
        <img src="https://scmedia.itsfogo.com/$-$/116eddf20662426bb9c46dfdbc5be175.svg" alt="" />  
      </div>
      <p className="footer-license">Approved for real money gaming, New Jersey.</p>
      <div className="footer-logos-container">
        <a href="https://www.facebook.com/betmgm/" target="_blank">
          <img src="https://scmedia.itsfogo.com/$-$/31c66b522ca848c39777d13ece936ce1.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/betmgm/" target="_blank">
          <img src="https://scmedia.itsfogo.com/$-$/a8b03ff5d8744f789928f6057306c2d9.svg" alt="Instagram" /> 
        </a>
        <a href="https://twitter.com/betmgm/" target="_blank">
          <img src="https://scmedia.itsfogo.com/$-$/329347386d4841bf9084dd2ce253dea2.svg" alt="Twitter" /> 
        </a> 
      </div>
      <p className="footer-details">
        <span>9:41 PM</span>
        <span>Copyright &copy; BETMGM 2021</span>
      </p>
    </div>
  )
}

export default Footer