import React from 'react'
import '../styles/LoginDuration.css'

const LoginDuration = () => {
  return (
    <div className="login-duration-container">
      <div className="login-duration">
        <span className="login-duration-text">Login duration:
          <span className="login-duration-time"> 00:42</span>
        </span>
      </div>
    </div>
  )
}

export default LoginDuration